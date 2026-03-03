// Declare variables
let snake = [
    {x: 5, y: 10},
    {x: 4, y: 10},
    {x: 3, y: 10}
];
let current_direction = "r";

// Create event listener and, keypress logic
// Event listener to track arrow keys
document.addEventListener("keydown", (event) => {
    const arrowKeys = {
        ArrowUp: "u",
        ArrowDown: "d",
        ArrowRight: "r",
        ArrowLeft: "l"
    };

    const new_direction = arrowKeys[event.key];
    if (!new_direction) return      // ignore all keys other than arrow keys
    
    if (
        (current_direction === "u" && new_direction === "d") ||
        (current_direction === "d" && new_direction === "u") ||
        (current_direction === "r" && new_direction === "l") ||
        (current_direction === "l" && new_direction === "r")
    ) {
        return;  // ignore key press if opposite direction is pressed
    }
    current_direction = new_direction; // keypress is valid, change direction
});

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
    snake.unshift(next_head(direction));
    snake.pop();
}

// Function to grow the snake
function grow_snake() {
    snake.unshift(next_head(current_direction));
}

// Function to run the game
function run_snake() {
    return;
}