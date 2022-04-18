// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeylujhTdtuDf_pryYuhXf-WfwePuuczg",
    authDomain: "doctor-service-provider-3bfa2.firebaseapp.com",
    projectId: "doctor-service-provider-3bfa2",
    storageBucket: "doctor-service-provider-3bfa2.appspot.com",
    messagingSenderId: "103690473577",
    appId: "1:103690473577:web:3b5be20927906e66ca92f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);