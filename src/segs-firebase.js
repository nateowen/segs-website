// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaGXW3AEXq5JrSzTsXZNx_aQUzF9e8UMA",
  authDomain: "segs-website.firebaseapp.com",
  projectId: "segs-website",
  storageBucket: "segs-website.appspot.com",
  messagingSenderId: "389613035914",
  appId: "1:389613035914:web:8caa5675257c01ebc4e873",
  measurementId: "G-77S4ENW0CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);