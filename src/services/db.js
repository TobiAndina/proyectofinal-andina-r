// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7OKVrNR6KNvkfFa4FnsitY4oaa9wSbAs",
    authDomain: "proyectofinal-andina.firebaseapp.com",
    databaseURL: "https://proyectofinal-andina-default-rtdb.firebaseio.com",
    projectId: "proyectofinal-andina",
    storageBucket: "proyectofinal-andina.appspot.com",
    messagingSenderId: "725176339977",
    appId: "1:725176339977:web:09b4c81174419b5b7cf2d8",
    measurementId: "G-MM7E57S04Y"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()


