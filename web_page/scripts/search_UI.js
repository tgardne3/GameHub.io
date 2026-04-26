//name: Azam, Brandon, David, Trey
//class: CS3300


// Copyright (c) 2026 [Your Name or Team]
// Licensed under the MIT License. See LICENSE file in the project root.

//game searching script
let website_objects = [
    {"id": "game", "title" : "Hangman", "path" : "./games/hangman/hangman.html", "image_path" : "hangman.png"},
    {"id": "game", "title" : "Snake Game", "path" : "./games/snake/snake.html", "image_path" : "snake.png"},
    {"id": "game", "title" : "Type Sprint", "path" : "./games/type_sprint/type_sprint.html", "image_path" : "typesprint.png"},
    {"id": "game", "title" : "Path To Paradise", "path" : "./games/path_to_paradise/path_to_paradise.html", "image_path" : "path_to_paradise.png"},
    {"id": "navigation", "title": "leaderboard", "path" : "./htmls/leaderboard.html", "image_path" : ""},
    {"id": "navigation", "title": "settings", "path" : "./htmls/account.html", "image_path" : ""},
];

display_games(website_objects);

//takes list of games and displays with adjustable container size (for search takes filtered game list)
function display_games(games) {
    //setting default container size
    var height = 950;
    var width = 875;
    var num_games = 0;

    //creating container variable
    const container = document.getElementById('list-container'); // get game list container
    container.innerHTML = ''; // clear the existing content

    //if no games found: show...
    if (games.length === 0) {
        container.innerHTML = '<div class="no-games"><h2>Game not found</h2></div>';
        container.style.height = '125px';
        container.style.width = '250px';
        return;
    }
    //creating html object for each game in provided list
    games.forEach(game => {

        //creating html for games
        if (game.id === "game") {
            //create game-card
            const card = document.createElement('div');
            card.className = 'game';
            card.id = game.id;

            //html outline for each card
            card.innerHTML = `
                <label for="${game.title}">${game.title}</label>
                <a href="${game.path}">
                    <img src="./images/${game.image_path}" alt="...game image here..." />
                </a>
            `;
            container.appendChild(card);//HTML injection (into index.html/list-container)
            num_games++;
        }

        if (game.id === "navigation" && num_games === 0) {
            //create game-card
            const card = document.createElement('div');
            card.className = 'navigation';
            card.id = game.id;

            //html outline for each card
            card.innerHTML = `
                <a href="${game.path}">
                    <h2>Open ${game.title}</h2>
                </a>
            `;
            container.appendChild(card);//HTML injection (into index.html/list-container)
        }
    });



    //only resizing based on number of games, if games are present in list
    if (num_games !== 0) {
        //sizing the background to the number of elements present
        if ((num_games % 2) === 0) {
            height = ((num_games / 2) * 317);
            width = 875;

            container.style.height = `${height}px`;
            container.style.width = `${width}px`;
        }
        else if (num_games === 1) {
            height = 317;
            width = 875/2; 
        
            container.style.height = `${height}px`;
            container.style.width = `${width}px`;

        }
        else if ((num_games % 2) === 1) {
            height = (Math.ceil(num_games / 2) * 317);
            width = 875;

            container.style.height = `${height}px`;
            container.style.width = `${width}px`;
        }
    }
    else {//resizing background for website navigation
        container.style.height = "85px";
        container.style.width = "250px";
    }
}


function search_games(event) {

    //pull search query from user
    const search_query = event.target.value.toLowerCase();

    //filter games via search query
    const filtered_games = website_objects.filter(game => game.title.toLowerCase().includes(search_query));

    //debugging
    console.log(event);

    //display filtered search
    display_games(filtered_games);

    //if enter when only one item
    document.getElementById('game_search').addEventListener('keydown', function(key) {
        if (key.key === 'Enter' && filtered_games.length === 1) {
            window.location.href = filtered_games[0].path;
        }

        if (key.key === 'Enter' && search_query === 'leaderboard') {
            window.location.href = "htmls/leaderboard.html";
        }

        if (key.key === 'Enter' && search_query === 'settings') {
            window.location.href = "htmls/account.html";
        }
    });
}//search_games

//adding event listener to the search input
document.getElementById('game_search').addEventListener('input', search_games);

