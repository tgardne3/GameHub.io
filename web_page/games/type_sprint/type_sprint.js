/*
names: Azam, Brandon, David, Trey
class: CS330
*/

function type_sprint_logic () {
    //displaying a body of randomly generated text
    //move mark based on current "location"
    const test_body = document.createElement("div");
    test_body.className = "type-sprint";
    test_body.innerHTML = `
        <p>This is a test paragraph of text to display to the user
        <input placeholder="begin typing..."/>
    `;

}

type_sprint_logic()