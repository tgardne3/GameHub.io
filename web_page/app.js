/*
names: Azam, Brandon, David, Trey
class: CS3300
*/


//collect and store data when submit button is clicked
function sign_up() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password_check = document.getElementById('confirm_password').value;

    //AZAM: STORE DATA IF PASSWORDS MATCH
    //store + process data here

    if (password == password_check) {
        //redirecting to success page
        console.log("User data collected: ", {username, password});//print debugging
        window.location.href = "successful-sign-up.html";
    }
    else {
        console.log("passwords don't match");
        alert("Passwords DON'T match!")
    }
}//sign_in

//signing in verification
function sign_in() {
    //pull values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    //AZAM: VERIFY USERNAME + PASSWORD WITH DB
    console.log("Verify Info: ", {username, password});//print debugging
}
