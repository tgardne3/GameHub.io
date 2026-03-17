import { db } from "../../scripts/firebase-init.js";
import { collection, addDoc } from "firebase/firestore";
export {reset_game, is_game_over, move_snake, grow_snake, fruit, snake}; // add export to import it into reder file to get around issue

// Declare variables
let end_game = false;
let score_saved = false;

let fruit = {x: 8, y: 6}; // initial fruit spawn

let snake = [       // initial snake
    {x: 5, y: 6},
    {x: 4, y: 6},
    {x: 3, y: 6}
];

let score = 3;      // initial score

let boundaries = new Set([  // set for boundry collision 
    "0,0", "1,0", "2,0", "3,0", "4,0", "5,0", "6,0", "7,0", "8,0", "9,0", "10,0", "11,0", // top wall
    "0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "0,8", "0,9", "0,10",  // left wall
    "11,1", "11,2", "11,3", "11,4", "11,5", "11,6", "11,7", "11,8", "11,9", "11,10", // right wall
    "0,11", "1,11", "2,11", "3,11", "4,11", "5,11", "6,11", "7,11", "8,11", "9,11", "10,11", "11,11", // bottom wall
])

let snake_set = new Set([   // set for snake collision
    "5,6",
    "4,6",
    "3,6",
])

// Function to get the immidate next square
function next_head(direction) {
    let new_head;
    switch (direction) {
        case "u":
            new_head = {x: snake[0].x, y: (snake[0].y - 1)};
            break;
        case "d":
            new_head = {x: snake[0].x, y: (snake[0].y + 1)};
            break;
        case "r":
            new_head = {x: (snake[0].x + 1), y: snake[0].y};
            break;
        case "l":
            new_head = {x: (snake[0].x - 1), y: snake[0].y};
            break;
    }
    return new_head;
}
// Function to move the snake
function move_snake(direction) {
    if (direction != "s") {  // keeps snake stationary at start of game until direction key is pressed
        const new_head = next_head(direction);  // add next square to snake array
        const new_set_key = `${new_head.x},${new_head.y}`;  // add next square to set

        detect_collision(new_set_key);  // check collision

        // add new head
        snake.unshift(new_head);
        snake_set.add(new_set_key);

        // remove tail
        const tail = snake.pop();
        snake_set.delete(`${tail.x},${tail.y}`);
    } else {
        return;
    }
}

// Function to grow the snake
function grow_snake(direction) {
    const new_head = next_head(direction);
    const new_set_key = `${new_head.x},${new_head.y}`;

    detect_collision(new_set_key);

    // add new head
    snake.unshift(new_head);
    snake_set.add(new_set_key);

    fruit = spawn_fruit(snake_set); // spawn new fruit

    score++;
    update_score_display();
}

// Function to detect collisions
function detect_collision(head) {  
    if (snake_set.has(head)) {  // detect a colision with the snake
        end_game = true;
        return;
    }
    if (boundaries.has(head)) { // detect a colission with the walls
        end_game = true;
        return;
    }
    return;
}

// Function to tell the render.js if game is over
// also double checks to make sure the score is saved since functions are in awkward orders
function is_game_over() {
    if (end_game && !score_saved) {
        score_saved = true;
        saveScore();
        console.log("Game Over - score sent to Firebase"); // adding this line to make sure this line is executed so i can check firebase
    }
    return end_game;
}

// Function to spawn fruit in random location
function spawn_fruit(snake_set) {

    let rand_x = Math.floor((Math.random() * 10) + 1);  // random value from 1-11
    let rand_y = Math.floor((Math.random() * 10) + 1);
    let rand_set_key = `${rand_x},${rand_y}`;       // put in in set format to easily check for snake values

    while (snake_set.has(rand_set_key) || boundaries.has(rand_set_key)) { // check fruit is not in snake
        rand_x = Math.floor((Math.random() * 10) + 1);
        rand_y = Math.floor((Math.random() * 10) + 1);

        rand_set_key = `${rand_x},${rand_y}`;
    }

    return {x: rand_x, y: rand_y};  // return fruit corrdinates if not in snake
}

// Function to reset the game
function reset_game() {
    end_game = false;
    score_saved = false; //this should allow resaves
    
    fruit = {x: 8, y: 6};  // set fruit to default spot

    snake = [               // reset snake 
    {x: 5, y: 6},
    {x: 4, y: 6},
    {x: 3, y: 6}
    ];

    snake_set = new Set([   // reset internal snake values
    "5,6",
    "4,6",
    "3,6",
    ])

    current_direction = "s";

    score = 3;
    update_score_display();
}

// Function to update score display
function update_score_display() {
    const score_element = document.getElementById("snake_score");
    score_element.textContent = score;
}

// function to update score
async function saveScore() {
    const username = localStorage.getItem("username");
    if (!username) {
        console.log("No username found");
        return;
    }
    try {
        await addDoc(collection(db, "leaderboard"), {
            username: username,
            score: score,
            game: "Snake Game",
            timestamp: Date.now()
        });
        // if it works
        console.log("Score saved!");
    } catch (error) { //error
        console.error("Error saving score:", error);
    }
}
