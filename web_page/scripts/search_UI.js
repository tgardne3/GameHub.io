//name: Azam, Brandon, David, Trey
//class: CS3300

//game searching script

let all_games = [
    {"id": 1, "game_title" : "Hangman", "game_path" : "./games/hangman/hangman.html", "image_path" : "hangman.png"},
    {"id": 2, "game_title" : "Snake Game", "game_path" : "./games/snake/snake.html", "image_path" : "snake.png"},
    {"id": 3, "game_title" : "Type Sprint", "game_path" : "./games/type_sprint/type_sprint.html", "image_path" : "typesprint.png"},
    {"id": 4, "game_title" : "Light Racer", "game_path" : "./games/test_game/test_game.html", "image_path" : "tron.png"},
    {"id": 5, "game_title" : "...Online...", "game_path" : "./games/test_game/test_game.html", "image_path" : "star_fighter.jpg"},
    {"id": 6, "game_title" : "Land Mind", "game_path" : "./games/test_game/test_game.html", "image_path" : "land_mine.png"}
];

display_games(all_games);

//takes list of games and displays with adjustable container size (for search takes filtered game list)
function display_games(games) {
    //setting default container size
    var height = 950;
    var width = 875;

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
        //create game-card
        const card = document.createElement('div');
        card.className = 'game';
        card.id = game.id;
        //html outline for each card
        card.innerHTML = `
        <label for="hangman">${game.game_title}</label>
        <a href="${game.game_path}">
            <img src="./images/${game.image_path}" alt="...game image here..." />
        </a>
        `;
        container.appendChild(card);//HTML injection (into index.html/list-container)
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
    else if ((games.length % 2) === 1) {
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

    //debugging
    console.log(event);

    //display filtered search
    display_games(filtered_games);

    //if enter when only one item
    document.getElementById('game_search').addEventListener('keydown', function(key) {
        if (key.key === 'Enter' && filtered_games.length === 1) {
            window.location.href = filtered_games[0].game_path;
        }
    });
}//search_games

//adding event listener to the search input
document.getElementById('game_search').addEventListener('input', search_games);

