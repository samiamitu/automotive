// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAbgZRnVAt2O3Wzn8CPS8Ig3uqYvQ8aJ0",
  authDomain: "assignment-10-automotive.firebaseapp.com",
  projectId: "assignment-10-automotive",
  storageBucket: "assignment-10-automotive.appspot.com",
  messagingSenderId: "511471914406",
  appId: "1:511471914406:web:700f8fb90c6b3e3ff21367",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
