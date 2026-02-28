//name: Azam, Brandon, David, Trey
//class: CS3300

//I know that there are duplicates of this function in app.js
//i will condense these duplicates when everything is fully functional

//game searching script

let all_games = [
    {"id": 1, "game_title" : "Hangman", "game_path" : "./games/hangman/hangman.html", "image_path" : "hangman.webp"},
    {"id": 2, "game_title" : "Snake", "game_path" : "./games/snake/snake.html", "image_path" : "snake.png"},
    {"id": 3, "game_title" : "Type Sprint", "game_path" : "./games/type_sprint/type_sprint.html", "image_path" : "typesprint.png"},
    {"id": 4, "game_title" : "Test Game", "game_path" : "./games/test_game/test_game.html", "image_path" : "test_game_image.jpeg"},
    {"id": 5, "game_title" : "Test Game", "game_path" : "./games/test_game/test_game.html", "image_path" : "test_game_image.jpeg"},
    {"id": 6, "game_title" : "Test Game", "game_path" : "./games/test_game/test_game.html", "image_path" : "test_game_image.jpeg"}
];

display_games(all_games);

//function to display games
function display_games(games) {
    var height = 950;
    var width = 875;
    const container = document.getElementById('list-container'); // get game list container
    container.innerHTML = ''; // clear the existing content

    //if no games found: show...
    if (games.length === 0) {
        container.innerHTML = '<div class="no-games"><h2>Game not found</h2></div>';
        return;
    }
    games.forEach(game => {
        //create game-card
        const card = document.createElement('div');
        card.className = 'game';
        card.id = game.id;
        card.innerHTML = `
        <label for="hangman">${game.game_title}</label>
        <a href="${game.game_path}">
            <img src="./images/${game.image_path}" alt="...game image here..." />
        </a>
        `;
        container.appendChild(card);
    });

    if ((games.length % 2) === 0) {
       height = ((games.length / 2) * 317);
       width = 875;

       container.style.height = `${height}px`;
       container.style.width = `${width}px`;
    }
    else if (games.length === 1) {
        height = 317;
        width = 875/2; 
        
        container.style.height = `${height}px`;
        container.style.width = `${width}px`;

    }
    else if ((games.length % 2) > 1) {
        height = (Math.ceil(games.length / 2) * 317);
        width = 875;

        container.style.height = `${height}px`;
        container.style.width = `${width}px`;
    }
}


function search_games(event) {
    //pull search query from user
    const search_query = event.target.value.toLowerCase();

    //filter games via search query
    const filtered_games = all_games.filter(game => game.game_title.toLowerCase().includes(search_query));

    //display filtered search
    display_games(filtered_games);
}

//adding event listener to the search input
document.getElementById('game_search').addEventListener('input', search_games);