// //name: Azam, Brandon, David, Trey
// //class: CS3300

// Copyright (c) 2026 [Your Name or Team]
// Licensed under the MIT License. See LICENSE file in the project root.

import {getFirestore, collection, addDoc, getDocs, query, orderBy, limit, where, doc, getDoc, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
   
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
   
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPD10z05bZ2jJFEKtsfkjp9euqYV1PWdk",
  authDomain: "fir-sandbox-2026.firebaseapp.com",
  projectId: "fir-sandbox-2026",
  storageBucket: "fir-sandbox-2026.firebasestorage.app",
  messagingSenderId: "909983508788",
  appId: "1:909983508788:web:5208aefd9edba56a895d61",
  measurementId: "G-ZXW457681J"
};
const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);
   

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
      const personalBestRef = doc(db, "leaderboard", game, "personalBests", username);
      const personalBestSnap = await getDoc(personalBestRef);
   
      if (personalBestSnap.exists()) {
        const currentBest = personalBestSnap.data().score;
        if (score <= currentBest) {
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
  window.saveScore = saveScore;
  
