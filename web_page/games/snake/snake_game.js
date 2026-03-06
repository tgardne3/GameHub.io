// Declare variables
let end_game = false;

let fruit = {x: 8, y: 6};

let snake = [
    {x: 5, y: 6},
    {x: 4, y: 6},
    {x: 3, y: 6}
];

let boundaries = new Set([
    "0,0", "1,0", "2,0", "3,0", "4,0", "5,0", "6,0", "7,0", "8,0", "9,0", "10,0", "11,0", // top wall
    "0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "0,8", "0,9", "0,10",  // left wall
    "11,1", "11,2", "11,3", "11,4", "11,5", "11,6", "11,7", "11,8", "11,9", "11,10", // right wall
    "0,11", "1,11", "2,11", "3,11", "4,11", "5,11", "6,11", "7,11", "8,11", "9,11", "10,11", "11,11", // bottom wall
])

let snake_set = new Set([
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
    const new_head = next_head(direction);
    const new_set_key = `${new_head.x},${new_head.y}`;

    detect_collision(new_set_key);

    // add new head
    snake.unshift(new_head);
    snake_set.add(new_set_key);

    // remove tail
    const tail = snake.pop();
    snake_set.delete(`${tail.x},${tail.y}`);
}

// Function to grow the snake
function grow_snake(direction) {
    const new_head = next_head(direction);
    const new_set_key = `${new_head.x},${new_head.y}`;

    detect_collision(new_set_key);

    // add new head
    snake.unshift(new_head);
    snake_set.add(new_set_key);

    fruit = spawn_fruit(snake_set);
}

// Function to detect collisions
function detect_collision(head) {
    if (snake_set.has(head)) {
        end_game = true;
        return;
    }
    if (boundaries.has(head)) {
        end_game = true;
        return;
    }
    return;
}

// Function to tell the render.js if game is over
function is_game_over() {
    return end_game;
}

// Function to spawn fruit in random location
function spawn_fruit(snake_set) {

    let rand_x = Math.floor((Math.random() * 9) + 1);
    let rand_y = Math.floor((Math.random() * 9) + 1);
    let rand_set_key = `${rand_x},${rand_y}`;

    while (snake_set.has(rand_set_key)) {
        rand_x = Math.floor(Math.random() * 10);
        rand_y = Math.floor(Math.random() * 10);

        rand_set_key = `${rand_x},${rand_y}`;
    }

    return {x: rand_x, y: rand_y};
}