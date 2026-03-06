// initalize canvas
const canvas = document.getElementById("snake_canvas");
const ctx = canvas.getContext("2d");

// Declare/define constants and variables
const GRID_SIZE = 10; // 10x10 game board
let cell_size;

// Functon to resize canvas
function resize_canvas() {
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.8;

    canvas.width = size;
    canvas.height = size;

    cell_size = canvas.width / GRID_SIZE;
}

// resize the canvas based of screen size
resize_canvas();

// resize the canvas window if the user updates the screen size
window.addEventListener("resize", resize_canvas);

// Function to draw the boundries
function draw_boundaries() {
    ctx.fillStyle = "green";

    for (let x = 0; x < 12; x++) {
        draw_cell(x, 0); // top
        draw_cell(x, 11); // bottom
    }

    for (let y = 1; y < 11; y++) {
        draw_cell(0, y); // left
        draw_cell(11, y); // right
    }

    return;
}

// Function to draw the snake
function draw_snake(snake) {
    for (let segment of snake) {
        ctx.fillStyle = "blue";
        ctx.fillRect(segment.x * cell_size, segment.y * cell_size, cell_size, cell_size);
    }
}

// Function to draw the fruit
function draw_fruit(fruit) {
    ctx.fillStyle = "red";
    ctx.fillRect(fruit.x * cell_size, fruit.y * cell_size, cell_size, cell_size);
}

// Function to draw the grid
function draw_grid() {
    ctx.strokeStyle = "#ddd";

    for (let i = 0; i <= GRID_SIZE; i++) {
        let position = i * cell_size;

        // vertical
        ctx.beginPath();
        ctx.moveTo(position, 0);
        ctx.lineTo(position, canvas.height);
        ctx.stroke();

        // horizontal
        ctx.beginPath();
        ctx.moveTo(0, position);
        ctx.lineTo(canvas.width, position);
        ctx.stroke();
    }
}

// Function to draw cells
function draw_cell(x, y) {
    ctx.fillRect(x * cell_size, y * cell_size, cell_size, cell_size);
}

// Function to draw the game
function draw_game() {
    clear_canvas();
    draw_grid();
    draw_boundaries();
    draw_snake(snake);
    draw_fruit(fruit);
    return;
}

// Function to clear canvas
function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}