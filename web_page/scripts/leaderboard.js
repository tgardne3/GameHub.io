//name: Azam, Brandon, David, Trey
//class: CS3300

leaderboard_data = [];

document.addEventListener("DOMContentLoaded", function () {
    display_leaderboard(leaderboard_data);
});


//display leaderboard info
function display_leaderboard(leaderboard_data) {

    const container = document.getElementById("leaderboard-body");
    container.innerHTML = '';

    //if no leaderboard data
    if(leaderboard_data.length === 0) {
        const high_score = `
        <tr>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>
        `;
        container.insertAdjacentHTML('beforeend', high_score);
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

        container.appendChild('beforeend', high_score);
    });


}//display leaderboard