
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-Mtzd0icA9Q4PJY0gXvcFZdoHejtQz3E",
    authDomain: "phone-7eede.firebaseapp.com",
    projectId: "phone-7eede",
    storageBucket: "phone-7eede.firebasestorage.app",
    messagingSenderId: "358327082622",
    appId: "1:358327082622:web:e9adad2ddce45d13f0822f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber }