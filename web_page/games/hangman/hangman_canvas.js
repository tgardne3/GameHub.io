// Get canvas drawing tool
const canvas = document.getElementById("hangman_canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "white";

// function to draw gallows
function draw_gallows() {
    ctx.lineWidth = 4;

    // base
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(350, 350);
    ctx.stroke();

    // pole
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(100, 50);
    ctx.stroke();

    // top beam
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(250, 50);
    ctx.stroke();

    // rope
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(250, 100);
    ctx.stroke();
}

// function to draw the head
function draw_head() {
    ctx.beginPath();
    ctx.arc(250, 130, 30, 0, Math.PI * 2);
    ctx.stroke();
}

// function to draw the body
function draw_body() {
    ctx.beginPath();
    ctx.moveTo(250, 160);
    ctx.lineTo(250, 250);
    ctx.stroke();
}

// function to draw the left arm
function draw_left_arm() {
    ctx.beginPath();
    ctx.moveTo(250, 180);
    ctx.lineTo(210, 220);
    ctx.stroke();
}

// function to draw the right arm
function draw_right_arm() {
    ctx.beginPath();
    ctx.moveTo(250, 180);
    ctx.lineTo(290, 220);
    ctx.stroke();
}

// function to draw the left leg
function draw_left_leg() {
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(210, 300);
    ctx.stroke();
}

// function to draw the right leg
function draw_right_leg() {
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(290, 300);
    ctx.stroke();
}

