// Declare variables
let current_direction = "r";

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

// Function for game loop
function game_tick() {
    move_snake(current_direction);
    detect_collision(current_direction);
    draw_game();
}