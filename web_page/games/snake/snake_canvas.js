// Copyright (c) 2026 [Your Name or Team]
// Licensed under the MIT License. See LICENSE file in the project root.

export { draw_game, snake_colors };

// initalize canvas
const canvas = document.getElementById("snake_canvas");
const ctx = canvas.getContext("2d");

// Declare/define constants and variables
const GRID_SIZE = 12; // 10x10 game board
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

// Function to cycle color
function cycle_colors(num) {

    let r = 0, g = 0, b = 255;
    let phase = 0;
    let step = 15;
    let list_of_colors = [];

    for (let i = 0; i < num; i++) {
        switch (phase) {
            case 0: // blue -> magenta
                r += step;
                if (r >= 255) {r = 255; phase++;}
                break;
            case 1: // magenta -> red
                b -= step;
                if (b <= 0) {b = 0; phase++;}
                break;
            case 2: // red -> yellow
                g += step;
                if (g >= 255) {g = 255; phase++;}
                break;
            case 3: // yellow -> green
                r -= step;
                if (r <= 0) {r = 0; phase++;}
                break;
            case 4: // green -> cyan
                b += step;
                if (b >= 255) {b = 255; phase++;}
                break;
            case 5: // cyan -> blue
                g -= step;
                if (g <= 0) {g = 0; phase = 0;}
                break;
        }
        let color = rgbToHex(r, g, b);
        list_of_colors.push(color);
    }
    return list_of_colors;
}


// Function to convert rgb to hex
function rgbToHex(red, green, blue) {
    return "#" + 
        red.toString(16).padStart(2, "0") +
        green.toString(16).padStart(2, "0") +
        blue.toString(16).padStart(2, "0");
}

let snake_colors = cycle_colors(100); // initalize a list so that one is not generated every tic

// Function to draw the snake
function draw_snake(snake, direction, snake_colors) {

    for (let i = 1; i < snake.length; i++) {
        ctx.fillStyle = snake_colors[i];
        ctx.fillRect(snake[i].x * cell_size, snake[i].y * cell_size, cell_size, cell_size);
    }

    draw_head(snake[0], direction, snake_colors);
}

// function to draw the head
function draw_head(head, direction, list_of_colors) {
    
    const x = head.x * cell_size;
    const y = head.y * cell_size;
    const center = cell_size / 2;

    ctx.fillStyle = list_of_colors[0];

    ctx.beginPath();

    if (direction === "u") {
        ctx.moveTo(x + center, y);                 // tip
        ctx.lineTo(x, y + cell_size);
        ctx.lineTo(x + cell_size, y + cell_size);
    }

    if (direction === "d") {
        ctx.moveTo(x + center, y + cell_size);
        ctx.lineTo(x, y);
        ctx.lineTo(x + cell_size, y);
    }

    if (direction === "l") {
        ctx.moveTo(x, y + center);
        ctx.lineTo(x + cell_size, y);
        ctx.lineTo(x + cell_size, y + cell_size);
    }

    if (direction === "r" || direction === "s") {
        ctx.moveTo(x + cell_size, y + center);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + cell_size);
    }

    ctx.closePath();
    ctx.fill();
}

// Function to draw the fruit
function draw_fruit(fruit) {

    let center_x = fruit.x * cell_size + cell_size / 2;
    let center_y = fruit.y * cell_size + cell_size / 2;

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(center_x, center_y, cell_size * 0.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(center_x, center_y, cell_size * 0.1, 0, Math.PI * 2);
    ctx.fill();
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
function draw_game(snake, fruit, current_direction) {
    clear_canvas();
    draw_grid();
    draw_boundaries();
    draw_snake(snake, current_direction, snake_colors);
    if (fruit) { draw_fruit(fruit); }
    return;
}

// Function to clear canvas
function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}