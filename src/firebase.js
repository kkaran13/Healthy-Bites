// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCm2fAzanw5fg-rNjYYlHCZx6NlAJxnFXY",
  authDomain: "fir-auth-1234-4a1de.firebaseapp.com",
  projectId: "fir-auth-1234-4a1de",
  storageBucket: "fir-auth-1234-4a1de.appspot.com",
  messagingSenderId: "153501506159",
  appId: "1:153501506159:web:2108e66934f101c8a58b9a",
  measurementId: "G-B7CD8X9C5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app,auth};