/*
names: Azam, Brandon, David, Trey
class: CS3300
*/

// Copyright (c) 2026 [Your Name or Team]
// Licensed under the MIT License. See LICENSE file in the project root.

//import from firebase-app
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

//import from firebase-auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; 

//import from firebase-analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// from other script files
import { redirect_to_home } from "./scripts/auto_redirections.js"; 

export let user;

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPD10z05bZ2jJFEKtsfkjp9euqYV1PWdk",
  authDomain: "fir-sandbox-2026.firebaseapp.com",
  projectId: "fir-sandbox-2026",
  storageBucket: "fir-sandbox-2026.firebasestorage.app",
  messagingSenderId: "909983508788",
  appId: "1:909983508788:web:5208aefd9edba56a895d61",
  measurementId: "G-ZXW457681J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Constants and global definitions

//######### USER STATE FUNCTIONS ##########
onAuthStateChanged(auth, (user) => {
  if (user) {
    display_logged_in_UI(user);
  } else {
    display_logged_out_UI();
  }
});


//######## ACCOUNT FUNCTIONS ###########

//collect and store data when submit button is clicked
async function sign_up() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password_check = document.getElementById('confirm_password').value;

    const email = `${username}@GameHub.io`;

    //if passwords don't match don't create account!
    if (password !== password_check) {
      alert("Passwords DON'T match!");
      return;
    }

  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User created:", userCredential.user);
        user = userCredential.user;
        window.location.href = "successful-sign-up.html";

      })
      .catch((error) => {
        console.error("Sign up failed:", error.message);
        alert("Sign up failed: " + error.message);
    });

}//sign_in

//signing in verification
async function sign_in() {
    //pull values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    //AZAM: VERIFY USERNAME + PASSWORD WITH DB
    const email = `${username}@GameHub.io`;
    console.log(`Verify Info: ,  ${email} - ${username} - ${password}`);//print debugging

    try {
      //try user sign in and save returned object for verification
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      redirect_to_home();

    //checking for log in errors (returned from firebase)
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('No account found with that email.');
          break;
        case 'auth/wrong-password':
          alert('Incorrect password.');
          break;
        case 'auth/invalid-credential':
          alert('Invalid email or password.');
          break;
        case 'auth/too-many-requests':
          alert('Account temporarily locked due to too many failed attempts.');
          break;
        default:
          alert('Something went wrong:', error.message);
      }
    }
}

function sign_out() {
  signOut(auth);
  window.location.href = "../index.html";
}


//######### UI DIPLAY FUNCTIONS ##############

function display_logged_in_UI(user) {

  //getting username value:
  const username = user.email.slice(0, -11);


  //############## PAGE NAVIGATION ##################### 
  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = `
      <span>Welcome, <b>${username}</b></span>
      <a href="./htmls/account.html">
        <img src="./images/settings_icon.png"></img>
      </a> 
    `;
  }

  //############## ACCOUNT SETTINGS ####################
  const user_settings = document.querySelector(".user-settings")
  if (user_settings) {

    const admin_button = `
        <h1 style="font-size:25px;"> Admin Settings: </h1>
        <hr>
        <form action="../htmls/documentation.html">
          <input style="width: 200px; margin-top: 2em;" type="submit" value="Get Documentation" />
        </form>
    `;

    user_settings.innerHTML = `
      <div class="user-settings-content">
        <div class="account-info">

          <h1> Change Account Info... </h1>

          <hr>

          <!--These inputs should change the actual account info for the -->
          <h2> Username: </h2>
          <input id="email" placeholder="${username}"/>

          <h2> Password: </h2>
          <input id="password" placeholder="************"/>

          <h2> Display Name: </h2>
          <input id="username" placeholder="${username}"/>

          <button style="margin-top: 1em" type="button" id="save-changes">Save Changes</button>
 
          <h1 style="margin-top: 2em;"> My High Scores: </h1>

        </div>

        <hr>

        <div class="leaderboard">
          <table>
            <thead>
              <tr span="2">
                <th> Game </th>
                <th> Score (highest)</th>
                <th> Score (Average)</th>
                <th> Global Rank </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HangMan</td>
                <td> N/A </td>
                <td> N/A </td>
                <td> N/A </td>
              </tr>
              <tr>
                <td>Snake</td>
                <td> N/A </td>
                <td> N/A </td>
                <td> N/A </td>
              </tr>
              <tr>
                <td>TypeSprint</td>
                <td> N/A </td>
                <td> N/A </td>
                <td> N/A </td>
              </tr> 
              <tr>
                <td>Path To Paradise</td>
                <td> N/A </td>
                <td> N/A </td>
                <td> N/A </td>
              </tr> 
             
            </tbody>
          </table>
        </div>

        <div class="user-form">
          <div class="admin-settings"></div>

          <div class="game-settings">

            <h1 style="margin-top: 2em;">Game Settings</h1>

            <hr>

            <h1 style="margin-top: 2em; font-size: 25px;">HangMan:</h1>

            <h1 style="margin-top: 2em; font-size: 25px;">Snake:</h1>

            <h1 style="margin-top: 2em; font-size: 25px;">TypeSprint:</h1>

            <h1 style="margin-top: 2em; font-size: 25px;">Path to Paradise:</h1>

          </div>

          <hr>
          <button style="margin-top: 1em; margin-bottom: 1em;" type="button" id="sign-out-button">Sign Out</button>

        </div>

      </div>
    `;
    if(username === "admin4" || username === "admin1" || username === "admin2" || username === "admin3") {
        const admin_settings = document.querySelector(".admin-settings");
        admin_settings.innerHTML += admin_button;
    }
     document.getElementById("sign-out-button").addEventListener("click", sign_out);
  }
}

function display_logged_out_UI() {

  //########## PAGE NAVIGATION ###################
  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = `
      <a href="./htmls/sign-in.html">Sign <b>In</b> |</a>
      <a href="./htmls/sign-up.html">Sign <b>Up</b></a> 
      <a href="./htmls/account.html">
        <img src="./images/settings_icon.png"></img>
      </a>
    `
  }
    //############## ACCOUNT SETTINGS ####################
    const user_settings = document.querySelector(".user-settings");
    if(user_settings) {
      user_settings.innerHTML = `
        <div class="error-message">
          <h2>It looks like you're not signed in...</h2>
          <div>
            <p>please <a href="sign-in.html">sign in</a> to have access to account settings</p>
          </div>
        </div>
      `;
    }

}

function save_changes(new_email, new_password) {
  //updating email & password
  try {
    updateEmail(user, new_email);
    updatePassword(user, new_password);
    Swal.fire({
        theme: 'dark',
        title: `Login Info Successfully Changed!`,
        text: `your info has been successfully changed, any info left blank in the form will stay the same.`,
        icon: 'success',
        confirmButtonText: 'Return',
        confirmButtonColor: '#FFED29'
    });
  } catch (error) {
    console.log(error);
  }
}

//######### EVENT LISTENERS ################

// create button objects
const sign_up_button = document.getElementById('sign-up-button');
const sign_in_button = document.getElementById('sign-in-button');
const sign_out_button = document.getElementById('sign-out-button');
const save_changes_button = document.getElementById('save-changes');

//check if exists on page before creating listener
if(sign_in_button) sign_in_button.addEventListener('click', sign_in);
if(sign_up_button) sign_up_button.addEventListener('click', sign_up);
if(sign_out_button) sign_out_button.addEventListener('click', sign_out);
if(save_changes_button) save_changes.addEventListener('click', () => {
    let input_email = document.getElementById('email').value;
    let input_password = document.getElementById('password').value;
    new_email = input_email.length > 0 ? `${input_email}@gamehub.io` : user.email;
    new_password = input_password.length > 0 ? `${input_password}@gamehub.io` : user.password;
    save_changes(new_email, new_password);
});
