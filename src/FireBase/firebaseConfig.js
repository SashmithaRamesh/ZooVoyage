// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG4ZiJExki5t-XJClTRn6AtHV0k07KlNI",
  authDomain: "zoovoyage-eb0e0.firebaseapp.com",
  projectId: "zoovoyage-eb0e0",
  storageBucket: "zoovoyage-eb0e0.appspot.com",
  messagingSenderId: "606382554533",
  appId: "1:606382554533:web:aeb0847e52fd14a4c03c4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)