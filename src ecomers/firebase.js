import firebase from "firebase/compat/app";
import "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
// real time database
import "firebase/database";
// storage
import "firebase/storage";
// functions
import "firebase/functions";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHsWewRNAgcNwiEMhjLOo6jMayQPkIbkY",
  authDomain: "ecommerce-bd4ee.firebaseapp.com",
  projectId: "ecommerce-bd4ee",
  storageBucket: "ecommerce-bd4ee.appspot.com",
  messagingSenderId: "1081947551212",
  appId: "1:1081947551212:web:7b55acf0253517f70fbcc9",
  measurementId: "G-NGCR2H4MBR",
};
// const auth = getAuth();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
