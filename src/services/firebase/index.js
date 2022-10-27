// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAvj7DbfZf1SRc1_WZReOfnS2OsaS1pCoA",

  authDomain: "zara-backend.firebaseapp.com",

  projectId: "zara-backend",

  storageBucket: "zara-backend.appspot.com",

  messagingSenderId: "403519244409",

  appId: "1:403519244409:web:d09d100aa5bf8c69ec2ca8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)