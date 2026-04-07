//name: Azam, Brandon, David, Trey
//class: CS3300

import { db } from "./firebase-init.js";
import { collection, query, where, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


leaderboard_data = [
    {game: "HangMan", score: "NA", player: "NA"},
    {game: "Snake Game", score: "NA", player: "NA"},
    {game: "Type Sprint", score: "NA", player: "NA"},
    {game: "Light Racer", score: "NA", player: "NA"},
    {game: "...Online...", score: "NA", player: "NA"},
    {game: "Land Mine", score: "NA", player: "NA"},
];

full_leaderboard_data = [
    {game: "HangMan", rank: "1", score: "NA", player: "NA"},
    {game: "HangMan", rank: "2", score: "NA", player: "NA"},
    {game: "HangMan", rank: "3", score: "NA", player: "NA"},
    {game: "HangMan", rank: "4", score: "NA", player: "NA"},
    {game: "HangMan", rank: "5", score: "NA", player: "NA"},
    {game: "HangMan", rank: "NA", score: "NA", player: "User"},

    {game: "Snake Game", rank: "1", score: "NA", player: "NA"},
    {game: "Snake Game", rank: "2", score: "NA", player: "NA"},
    {game: "Snake Game", rank: "3", score: "NA", player: "NA"},
    {game: "Snake Game", rank: "4", score: "NA", player: "NA"},
    {game: "Snake Game", rank: "5", score: "NA", player: "NA"},
    {game: "Snake Game", rank: "NA", score: "NA", player: "User"},


    {game: "Type Sprint", rank: "1", score: "NA", player: "NA"},
    {game: "Type Sprint", rank: "2", score: "NA", player: "NA"},
    {game: "Type Sprint", rank: "3", score: "NA", player: "NA"},
    {game: "Type Sprint", rank: "4", score: "NA", player: "NA"},
    {game: "Type Sprint", rank: "5", score: "NA", player: "NA"},
    {game: "Type Sprint", rank: "NA", score: "NA", player: "User"},

    {game: "Light Racer", rank: "1", score: "NA", player: "NA"},
    {game: "Light Racer", rank: "2", score: "NA", player: "NA"},
    {game: "Light Racer", rank: "3", score: "NA", player: "NA"},
    {game: "Light Racer", rank: "4", score: "NA", player: "NA"},
    {game: "Light Racer", rank: "5", score: "NA", player: "NA"},
    {game: "Light Racer", rank: "NA", score: "NA", player: "User"},

    {game: "...Online...", rank: "1", score: "NA", player: "NA"},
    {game: "...Online...", rank: "2", score: "NA", player: "NA"},
    {game: "...Online...", rank: "3", score: "NA", player: "NA"},
    {game: "...Online...", rank: "4", score: "NA", player: "NA"},
    {game: "...Online...", rank: "5", score: "NA", player: "NA"},
    {game: "...Online...", rank: "NA", score: "NA", player: "User"},

    {game: "Land Mine", rank: "1", score: "NA", player: "NA"},
    {game: "Land Mine", rank: "2", score: "NA", player: "NA"},
    {game: "Land Mine", rank: "3", score: "NA", player: "NA"},
    {game: "Land Mine", rank: "4", score: "NA", player: "NA"},
    {game: "Land Mine", rank: "5", score: "NA", player: "NA"},
    {game: "Land Mine", rank: "NA", score: "NA", player: "User"}

];

//display homepage leaderboard onload
document.addEventListener("DOMContentLoaded", function () {
    display_leaderboard(leaderboard_data);
});


//display full leaderboard page
document.addEventListener("DOMContentLoaded", async function () {
    // add in games
    const games = [
        "HangMan",
        "Snake Game",
        "Type Sprint",
        "Light Racer",
        "Land Mine",
        "...Online..."
    ];

    let full_leaderboard_data = [];
    for (let game of games) {
        //get data
        const qry = query(
            collection(db, "leaderboard"),
            where("game", "==", game),
            orderBy("score", "desc"),
            limit(5)
        );
        const snapshot = await getDocs(qry);
        let rank = 1;

        snapshot.forEach(doc => {
            const data = doc.data();
            // push data
            full_leaderboard_data.push({
                game: game,
                rank: rank,
                score: data.score,
                player: data.username
            });
            // increase rank
            rank++;
        });
    }
    // now display the full function
    display_full_leaderboard(full_leaderboard_data);
});





//display leaderboard info
function display_leaderboard(leaderboard_data) {

    const container = document.getElementById("leaderboard-body");
    container.innerHTML = '';

    //if no leaderboard data
    if(leaderboard_data.length === 0) {
        const high_score = document.createElement('tr');
        high_score.innerHTML =  `
        <tr>
            <td>oooops</td>
            <td>we broke</td>
            <td>something</td>
        </tr>
        `;
        container.appendChild(high_score);
        return;
    }

    leaderboard_data.forEach(data => {
        //create table row
        const high_score = document.createElement('tr');
        high_score.className = 'high-score';

        //html for table row
        high_score.innerHTML = `
        <td>${data.game}</td>
        <td>${data.score}</td>
        <td>${data.player}</td>
        `;

        container.appendChild(high_score);
    });


}//display leaderboard


function display_full_leaderboard(full_data) {
    const container = document.getElementById("full-leaderboard-containers");
    const hangman_container = document.getElementById("hangman-body");
    const snake_container = document.getElementById("snake-body");
    const typesprint_container = document.getElementById("typesprint-body");
    const lightracer_container = document.getElementById("lightracer-body");
    const online_container = document.getElementById("online-body");
    const landmine_container = document.getElementById("landmine-body");


    //if no leaderboard data
    if(full_data.length === 0) {
        const error_card = document.createElement('tr');
        error_card.innerHTML =  `
        <tr>
            <td>oooops</td>
            <td>we broke</td>
            <td>something</td>
        </tr>
        `;
        container.appendChild(error_card);
        return;
    }

    full_data.forEach(data => {
        //create table row
        const score_card = document.createElement('tr');

        //html for table row
        score_card.innerHTML = `
            <td class="rank-col">Rank: ${data.rank}</td>
            <td>${data.score}</td>
            <td>${data.player}</td>
        `;

        if(data.game === "HangMan") {
            hangman_container.appendChild(score_card);
        }
        else if(data.game === "Snake Game") {
            snake_container.appendChild(score_card);
        }
        else if(data.game === "Type Sprint") {
            typesprint_container.appendChild(score_card);
        }
        else if(data.game === "Light Racer") {
            lightracer_container.appendChild(score_card);
        }
        else if(data.game === "Land Mine") {
            landmine_container.appendChild(score_card);
        }
        else if(data.game === "...Online...") {
            online_container.appendChild(score_card);
        }
        else {
            container.appendChild(score_card);
        }

    });

}
