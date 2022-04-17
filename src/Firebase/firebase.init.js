// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsl6JzGOuCA0OCQVIR6cf4yu_gH-tDNmc",
    authDomain: "dream-weaver-91b28.firebaseapp.com",
    projectId: "dream-weaver-91b28",
    storageBucket: "dream-weaver-91b28.appspot.com",
    messagingSenderId: "328727578658",
    appId: "1:328727578658:web:8f3dcd3f0699741d8ea27b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;