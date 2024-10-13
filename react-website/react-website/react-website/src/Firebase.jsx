// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNgshJG5eUm74ZZ5T4oKGYsJyHFocuffI",
  authDomain: "email-auth-7b094.firebaseapp.com",
  projectId: "email-auth-7b094",
  storageBucket: "email-auth-7b094.appspot.com",
  messagingSenderId: "635459230150",
  appId: "1:635459230150:web:466470b570f629750afac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {auth}