// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgu-YVlccZn9EpW1S9GCCfaRjPcDuwdsg",
  authDomain: "law-simple-website.firebaseapp.com",
  projectId: "law-simple-website",
  storageBucket: "law-simple-website.appspot.com",
  messagingSenderId: "765609357646",
  appId: "1:765609357646:web:482f6d683c3350e56cee1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;