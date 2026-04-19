import { reset_game, is_game_over, move_snake, grow_snake, next_head, fruit, snake } from "./snake_game.js";
import { draw_game } from "./snake_canvas.js";
export { set_current_direction }

// Declare variables
let current_direction = "s";
let game_loop;
let next_square;

// queue for buffered inputs (max 2)
let moves = [];

// Reset button
document.getElementById("resetButton").addEventListener("click", run_snake);

// Key listener
document.addEventListener("keydown", (event) => {
    event.preventDefault();

    const arrowKeys = {
        ArrowUp: "u",
        ArrowDown: "d",
        ArrowRight: "r",
        ArrowLeft: "l"
    };

    const new_direction = arrowKeys[event.key];
    if (!new_direction) return;

    // remove start message
    const message = document.getElementById("game_message");
    message.textContent = "";

    // determine what to validate against
    const last_direction = moves.length > 0 
        ? moves[moves.length - 1] 
        : current_direction;

    // prevent opposite direction
    if (
        (last_direction === "u" && new_direction === "d") ||
        (last_direction === "d" && new_direction === "u") ||
        (last_direction === "r" && new_direction === "l") ||
        (last_direction === "l" && new_direction === "r")
    ) {
        return;
    }

    // limit queue to 2 inputs
    if (moves.length < 2) {
        moves.push(new_direction);
    }
});

// Helper function to set current_direction
function set_current_direction(direction) {
    current_direction = direction;
}

// Game loop
function game_tick() {

    // apply ONE move per tick
    if (moves.length > 0) {
        current_direction = moves.shift();
    }

    if (current_direction === "s") return;

    next_square = next_head(current_direction);

    // Fruit collision
    if (next_square.x === fruit.x && next_square.y === fruit.y) {
        grow_snake(current_direction);
    } else {
        move_snake(current_direction);
    }

    // Game over check
    if (is_game_over()) {
        clearInterval(game_loop);

        if (snake.length === 100) {
            draw_game(snake, null, current_direction);
            document.getElementById("game_message").textContent =
                "You Win! Press Reset to play again";
        } else {
            document.getElementById("game_message").textContent =
                "Game Over! Press Reset to play again";
        }
        return;
    }

    draw_game(snake, fruit, current_direction);
}

// Start / reset game
function run_snake() {
    clearInterval(game_loop);
    reset_game();

    moves = [];              // clear buffered inputs
    current_direction = "s"; // reset direction

    draw_game(snake, fruit, current_direction);
    game_loop = setInterval(game_tick, 200);
}

// auto start
run_snake();
