import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYkPqXHlW8sIFO_WJcouqSfnFM5us1jLk",
  authDomain: "ai-flashcards-c1689.firebaseapp.com",
  projectId: "ai-flashcards-c1689",
  storageBucket: "ai-flashcards-c1689.appspot.com",
  messagingSenderId: "391076963993",
  appId: "1:391076963993:web:1173edfdae1ed0be257a08",
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
