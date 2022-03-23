// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOSrnX3dMIp9w3KqelnapfCssaJEyM1ms",
    authDomain: "project-login-form.firebaseapp.com",
    projectId: "project-login-form",
    storageBucket: "project-login-form.appspot.com",
    messagingSenderId: "299222418376",
    appId: "1:299222418376:web:ddad664faf78f7d47876fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
