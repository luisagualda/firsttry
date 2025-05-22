// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm_9-a09Plof_k_htnScX8oT27l6V0Wto",
  authDomain: "first-website-ba191.firebaseapp.com",
  projectId: "first-website-ba191",
  storageBucket: "first-website-ba191.firebasestorage.app",
  messagingSenderId: "76086080352",
  appId: "1:76086080352:web:63167ef3c6b36b98aa2405",
  measurementId: "G-QCECRG3H4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);