// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQPtikswlM-yOxSw4xawogB4ai85me_sM",
  authDomain: "tcl-demo-801ae.firebaseapp.com",
  projectId: "tcl-demo-801ae",
  storageBucket: "tcl-demo-801ae.appspot.com",
  messagingSenderId: "1049490235744",
  appId: "1:1049490235744:web:8dd709da91f60295367e05",
  measurementId: "G-9NMT9EEKGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);