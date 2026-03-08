/*
names: Azam, Brandon, David, Trey
class: CS3300
*/
// from firebase and firebase auth
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
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






//collect and store data when submit button is clicked
function sign_up() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const password_check = document.getElementById('confirm_password').value;

    // send password to db
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user);
        });
    

    //AZAM: STORE DATA IF PASSWORDS MATCH
    //store + process data here

    if (password == password_check) {
        //redirecting to success page
        console.log("User data collected: ", {username, password});//print debugging
        window.location.href = "successful-sign-up.html";

        //send to firebase

    }
    else {
        console.log("passwords don't match");
        alert("Passwords DON'T match!")
    }
}//sign_in

//signing in verification
function sign_in() {
    //pull values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    //AZAM: VERIFY USERNAME + PASSWORD WITH DB
    console.log("Verify Info: ", {username, password});//print debugging
    const email = `${username}@GameHub.io`;

    try {
      const userCredential = signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // User is signed in
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

  if (user) {
    redirect_to_home();
  }

    signInWithEmailAndPassword(auth, email, password);
}


//event listeners
document.getElementById('sign-up-button').addEventListener('click', sign_up);
