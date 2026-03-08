//name: Azam, Brandon, David, Trey
//class: CS3300



//this is where the async and async await functions will be for data pulling to the database


//redirecting to home page (3) second delay
function redirect_to_home() {
    setTimeout(function() {
        window.location.href = "../index.html";
    }, 2100);
}

export { redirect_to_home };