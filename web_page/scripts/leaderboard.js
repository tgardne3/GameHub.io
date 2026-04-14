// //name: Azam, Brandon, David, Trey
// //class: CS3300

// leaderboard_data = [
//     {game: "HangMan", score: "NA", player: "NA"},
//     {game: "Snake Game", score: "NA", player: "NA"},
//     {game: "Type Sprint", score: "NA", player: "NA"},
//     {game: "Light Racer", score: "NA", player: "NA"},
//     {game: "...Online...", score: "NA", player: "NA"},
//     {game: "Land Mine", score: "NA", player: "NA"},
// ];

// full_leaderboard_data = [
//     {game: "HangMan", rank: "1", score: "NA", player: "NA"},
//     {game: "HangMan", rank: "2", score: "NA", player: "NA"},
//     {game: "HangMan", rank: "3", score: "NA", player: "NA"},
//     {game: "HangMan", rank: "4", score: "NA", player: "NA"},
//     {game: "HangMan", rank: "5", score: "NA", player: "NA"},
//     {game: "HangMan", rank: "NA", score: "NA", player: "User"},

//     {game: "Snake Game", rank: "1", score: "NA", player: "NA"},
//     {game: "Snake Game", rank: "2", score: "NA", player: "NA"},
//     {game: "Snake Game", rank: "3", score: "NA", player: "NA"},
//     {game: "Snake Game", rank: "4", score: "NA", player: "NA"},
//     {game: "Snake Game", rank: "5", score: "NA", player: "NA"},
//     {game: "Snake Game", rank: "NA", score: "NA", player: "User"},


//     {game: "Type Sprint", rank: "1", score: "NA", player: "NA"},
//     {game: "Type Sprint", rank: "2", score: "NA", player: "NA"},
//     {game: "Type Sprint", rank: "3", score: "NA", player: "NA"},
//     {game: "Type Sprint", rank: "4", score: "NA", player: "NA"},
//     {game: "Type Sprint", rank: "5", score: "NA", player: "NA"},
//     {game: "Type Sprint", rank: "NA", score: "NA", player: "User"},

//     {game: "Light Racer", rank: "1", score: "NA", player: "NA"},
//     {game: "Light Racer", rank: "2", score: "NA", player: "NA"},
//     {game: "Light Racer", rank: "3", score: "NA", player: "NA"},
//     {game: "Light Racer", rank: "4", score: "NA", player: "NA"},
//     {game: "Light Racer", rank: "5", score: "NA", player: "NA"},
//     {game: "Light Racer", rank: "NA", score: "NA", player: "User"},

//     {game: "...Online...", rank: "1", score: "NA", player: "NA"},
//     {game: "...Online...", rank: "2", score: "NA", player: "NA"},
//     {game: "...Online...", rank: "3", score: "NA", player: "NA"},
//     {game: "...Online...", rank: "4", score: "NA", player: "NA"},
//     {game: "...Online...", rank: "5", score: "NA", player: "NA"},
//     {game: "...Online...", rank: "NA", score: "NA", player: "User"},

//     {game: "Land Mine", rank: "1", score: "NA", player: "NA"},
//     {game: "Land Mine", rank: "2", score: "NA", player: "NA"},
//     {game: "Land Mine", rank: "3", score: "NA", player: "NA"},
//     {game: "Land Mine", rank: "4", score: "NA", player: "NA"},
//     {game: "Land Mine", rank: "5", score: "NA", player: "NA"},
//     {game: "Land Mine", rank: "NA", score: "NA", player: "User"}

// ];

// //display homepage leaderboard onload
// document.addEventListener("DOMContentLoaded", function () {
//     display_leaderboard(leaderboard_data);
// });

// //display full leaderboard page
// document.addEventListener("DOMContentLoaded", function () {
//     display_full_leaderboard(full_leaderboard_data);
// });

// //display leaderboard info
// function display_leaderboard(leaderboard_data) {

//     const container = document.getElementById("leaderboard-body");
//     container.innerHTML = '';

//     //if no leaderboard data
//     if(leaderboard_data.length === 0) {
//         const high_score = document.createElement('tr');
//         high_score.innerHTML =  `
//         <tr>
//             <td>oooops</td>
//             <td>we broke</td>
//             <td>something</td>
//         </tr>
//         `;
//         container.appendChild(high_score);
//         return;
//     }

//     leaderboard_data.forEach(data => {
//         //create table row
//         const high_score = document.createElement('tr');
//         high_score.className = 'high-score';

//         //html for table row
//         high_score.innerHTML = `
//         <td>${data.game}</td>
//         <td>${data.score}</td>
//         <td>${data.player}</td>
//         `;

//         container.appendChild(high_score);
//     });


// }//display leaderboard


// function display_full_leaderboard(full_data) {
//     const container = document.getElementById("full-leaderboard-containers");
//     const hangman_container = document.getElementById("hangman-body");
//     const snake_container = document.getElementById("snake-body");
//     const typesprint_container = document.getElementById("typesprint-body");
//     const lightracer_container = document.getElementById("lightracer-body");
//     const online_container = document.getElementById("online-body");
//     const landmine_container = document.getElementById("landmine-body");


//     //if no leaderboard data
//     if(full_data.length === 0) {
//         const error_card = document.createElement('tr');
//         error_card.innerHTML =  `
//         <tr>
//             <td>oooops</td>
//             <td>we broke</td>
//             <td>something</td>
//         </tr>
//         `;
//         container.appendChild(error_card);
//         return;
//     }

//     full_data.forEach(data => {
//         //create table row
//         const score_card = document.createElement('tr');

//         //html for table row
//         score_card.innerHTML = `
//             <td class="rank-col">Rank: ${data.rank}</td>
//             <td>${data.score}</td>
//             <td>${data.player}</td>
//         `;

//         if(data.game === "HangMan") {
//             hangman_container.appendChild(score_card);
//         }
//         else if(data.game === "Snake Game") {
//             snake_container.appendChild(score_card);
//         }
//         else if(data.game === "Type Sprint") {
//             typesprint_container.appendChild(score_card);
//         }
//         else if(data.game === "Light Racer") {
//             lightracer_container.appendChild(score_card);
//         }
//         else if(data.game === "Land Mine") {
//             landmine_container.appendChild(score_card);
//         }
//         else if(data.game === "...Online...") {
//             online_container.appendChild(score_card);
//         }
//         else {
//             container.appendChild(score_card);
//         }

//     });

// }





///----------------------------------------------------------------------------------------------------------------------------------------------------///




import {getFirestore, collection, addDoc, getDocs, query, orderBy, limit, where, doc, getDoc, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
   
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
   
  const db = getFirestore();
  const auth = getAuth();
   
  // get display username my stripping gamehub.io from backend pull
  function getUsername() {
    const user = auth.currentUser;
    if (!user) return null;
    return user.email.replace("@gamehub.io", "");
  }
   
  // get current users userID
  function getUserID() {
    const user = auth.currentUser;
    return user ? user.uid : null;
  }
   
  /**
    Saving scores for users that are logged in
    @param {string} game 
    @param {number} score 
   */
    export async function saveScore(game, score) {
        const uid = getUserID();  
        const username = getUsername();
   
    if (!uid || !username) {
      console.warn("No user logged in, score not saved");
      return;
    }
   
    // For snake and typesprint, only save if it's a personal best
    // only save personal best for snake and typesprint (struture of game)
    if (game === "snake" || game === "typesprint") {
      const personalBestRef = doc(db, "leaderboard", game, "personalBests", uid);
      const personalBestSnap = await getDoc(personalBestRef);
   
      if (personalBestSnap.exists()) {
        const currentBest = personalBestSnap.data().score;
        if (score <= currentBest) {
          console.log("Score not a new personal best, not saving.");
          return; 
        }
      }
   
      // Save and update personal best
      await setDoc(personalBestRef, {uid, username, score, timestamp: serverTimestamp()});
   
    } else if (game === "hangman") {
      // Streak score saving for hangman
      const personalBestRef = doc(db, "leaderboard", game, "personalBests", uid);
      const personalBestSnap = await getDoc(personalBestRef);
   
      if (personalBestSnap.exists()) {
        const currentBest = personalBestSnap.data().score;
        if (score <= currentBest) return;
      }
   
      await setDoc(personalBestRef, { uid, username, score, timestamp: serverTimestamp()});
    }
   
    console.log(`Score saved for ${username} in ${game}: ${score}`);
  }
   
  /**
   Gets the top 10 scores for games; returns array of username, score, and timestamp obj
    @param {string} game 
    @returns {Array}
   */
  export async function getLeaderboard(game) {
    const scoreRef = collection(db, "leaderboard", game, "personalBests");
    const q = query(scoreRef, orderBy("score", "desc"), limit(10));
    const snapshot = await getDocs(q);
   
    return snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      username: doc.data().username,
      score: doc.data().score,
      timestamp: doc.data().timestamp
    }));
  }
   
  /**
   * Gets users personal best for game; returns {username, score} or null if none
   * @param {string} game 
   * @returns {Object|null}
   */
  export async function getPersonalBest(game) {
    const uid = getUserID();
    if (!uid) return null;
   
    const personalBestRef = doc(db, "leaderboard", game, "personalBests", uid);
    const snap = await getDoc(personalBestRef);
   
    if (snap.exists()) {
      return {
        username: snap.data().username,
        score: snap.data().score
      };
    }
    return null;
  }
   
  