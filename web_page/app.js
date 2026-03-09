/*
names: Azam, Brandon, David, Trey
class: CS3300
*/

//import from firebase-app
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

//import from firebase-auth
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"; 

//import from firebase-analytics
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// from other script files
import { redirect_to_home } from "./scripts/auto_redirections.js"; 

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
const auth = getAuth(app);

//Constants and global definitions
let username = '';

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
    username = document.getElementById('username').value;
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
    username = document.getElementById('username').value;
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
          console.log('No account found with that email.');
          break;
        case 'auth/wrong-password':
          console.log('Incorrect password.');
          break;
        case 'auth/invalid-credential':
          console.log('Invalid email or password.');
          break;
        case 'auth/too-many-requests':
          console.log('Account temporarily locked due to too many failed attempts.');
          break;
        default:
          console.log('Something went wrong:', error.message);
      }
    }
}

//######### UI DIPLAY FUNCTIONS ##############

function display_logged_in_UI() {

  //this needs to be changed to specify index vs games page
  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = `
      <span>Welcome, ${username} | </span>
      <a href="./htmls/account.html">My <b>Account</b></a> 
    `;
  }
}

function display_logged_out_UI() {

  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = `
      <a href="./htmls/sign-in.html">Sign <b>In</b> |</a>
      <a href="./htmls/sign-up.html">Sign <b>Up</b></a> 
    `
  }

}


//######### EVENT LISTENERS ################

// create button objects
const sign_up_button = document.getElementById('sign-up-button');
const sign_in_button = document.getElementById('sign-in-button');

//check if exists on page before creating listener
if(sign_in_button) document.addEventListener('click', sign_in);
if(sign_up_button) document.addEventListener('click', sign_up);
