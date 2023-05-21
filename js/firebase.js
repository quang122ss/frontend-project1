// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnF7k-8WKjf69a6L22IEBZ-4TVacmQpwA",
  authDomain: "owenthanhha-e0e87.firebaseapp.com",
  projectId: "owenthanhha-e0e87",
  storageBucket: "owenthanhha-e0e87.appspot.com",
  messagingSenderId: "548357763421",
  appId: "1:548357763421:web:89bdad525925727d97f8b4",
  measurementId: "G-WKZZVBZ4LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);