// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDqTXFpZRwE8cKtyS31ZhQy5tRioB6Eog",
  authDomain: "review-593f2.firebaseapp.com",
  databaseURL: "https://review-593f2-default-rtdb.firebaseio.com",
  projectId: "review-593f2",
  storageBucket: "review-593f2.appspot.com",
  messagingSenderId: "783036210759",
  appId: "1:783036210759:web:3c7f3fa88e24e51b399b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();