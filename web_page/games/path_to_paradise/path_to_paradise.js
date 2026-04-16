//name: Azam, Brandon, David, Trey
//class: CS3300

let default_choice = 0.0;
let noChoice = false;
let a_choice = 0.1;
let b_choice = 0.2;
let c_choice = 0.3;
let d_choice = 0.4;
let story_set = 0;
let current_set = (0.0).toFixed(1);
let story = {};
let allowChoice = true;
const space_bar = new Audio("../../audio/space_bar.wav");
const key_stroke = new Audio ("../../audio/key_stroke.wav");


//path to paradise game logic
function display_text() {
    //enabling input buffer
    allowChoice = false;

    //set story key
    let key = current_set.toString();
    console.log(`Key: ${key}`);

    //grab body from HTML
    const text_body = document.getElementById("text-body");
    let text_string = story[key]["text"];
    for (let i = 0; i <= text_string.length; i++) {
        //if HTML tag
        if (text_string[i] === "<") {
            i = text_string.indexOf(">", i);
            continue;
        }

        setTimeout(() => {
            text_body.innerHTML = text_string.slice(0, i);
            const key_sound = key_stroke.cloneNode();//allows to audio to overlap with itself
            const space_sound = space_bar.cloneNode();

            if((i%3) === 0) {
             if(text_string[i] === " ") {
                space_sound.play();
             } else {
                key_sound.play();
             }
            }

            if(i === text_string.length) {
                allowChoice = true;
            }
        }, 35 * i);
    }

    //check if custom answers exist
    if(story[key]["a"]) {
        btn_a.innerHTML = story[key]["a"];
        btn_b.innerHTML = story[key]["b"];
        btn_c.innerHTML = story[key]["c"];
        btn_d.innerHTML = story[key]["d"];
    } else {//default answers
        btn_a.innerHTML = `<b>A:</b> Continue...`;
        btn_b.innerHTML = `<b>B:</b> Continue...`;
        btn_c.innerHTML = `<b>C:</b> Continue...`;
        btn_d.innerHTML = `<b>D:</b> Continue...`;

        noChoice = true;
    }
}



//loading the text data in story.json
async function load_story() {
    try {
        const response = await fetch("./story.json");
        story = await response.json();
        console.log(story);
        display_text();
    } catch (error) {
        console.error('Failed to load story.json', error);
    }
}
//logic to changing text based on user response
function update_choice(choice) {
    if(noChoice === false) {
        current_set = (story_set + choice);
    } else {
        current_set = story_set.toFixed(1);
        noChoice = false;
    }
    display_text(choice);
    story_set++;
}


/* app initialization */
load_story();

/* Document Objects */
const btn_a = document.getElementById("btn-a");
const btn_b = document.getElementById("btn-b");
const btn_c = document.getElementById("btn-c");
const btn_d = document.getElementById("btn-d");

btn_a.addEventListener("click", () => {if(allowChoice === true) {update_choice(a_choice)}});
btn_b.addEventListener("click", () => {if(allowChoice === true) {update_choice(b_choice)}});
btn_c.addEventListener("click", () => {if(allowChoice === true) {update_choice(c_choice)}});
btn_d.addEventListener("click", () => {if(allowChoice === true) {update_choice(d_choice)}});

