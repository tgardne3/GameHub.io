import { reset_game, is_game_over, move_snake, grow_snake, next_head, fruit, snake } from "./snake_game.js"; // import what i just exported from snakegame.js
import  { draw_game } from "./snake_canvas.js";
export { set_current_direction };

// Declare variables
let current_direction = "s";
let game_loop;
let next_square;

document.getElementById("resetButton").addEventListener("click", run_snake);

// Create event listener and, keypress logic
// Event listener to track arrow keys
document.addEventListener("keydown", (event) => {
    event.preventDefault();  // arrowkey default functions scroll the page
    const arrowKeys = {
        ArrowUp: "u",
        ArrowDown: "d",
        ArrowRight: "r",
        ArrowLeft: "l"
    };

    const new_direction = arrowKeys[event.key];
    if (!new_direction) return      // ignore all keys other than arrow keys

    const message = document.getElementById("game_message");
    message.textContent = "";
    
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

// Helper function to set current_direction
function set_current_direction(direction) {
    current_direction = direction;
}

// Function for game loop
function game_tick() {

    if (current_direction === "s") {
        return;
    }

    next_square = next_head(current_direction);

    // Fruit collision
    if (next_square.x === fruit.x && next_square.y === fruit.y) {
        grow_snake(current_direction);
    } else {
        move_snake(current_direction);
    }

    if (is_game_over()) {
        clearInterval(game_loop);

        document.getElementById("game_message").textContent =
        "Game Over! Press Reset to play again";

        alert("You lose!\nYour score is: " + snake.length)
        
        return;
    }

    draw_game(snake, fruit, current_direction);
}

// Function to run the game
function run_snake() {

    clearInterval(game_loop);
    reset_game();

    draw_game(snake, fruit, current_direction);
    game_loop = setInterval(game_tick, 200);
}

run_snake();
