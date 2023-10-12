// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs_wrELNlF92u0n_yRWmnW4CfbKpOdaxQ",
  authDomain: "blog-930ac.firebaseapp.com",
  projectId: "blog-930ac",
  storageBucket: "blog-930ac.appspot.com",
  messagingSenderId: "388382368299",
  appId: "1:388382368299:web:89ed34f4026a2b5a7e806e",
  measurementId: "G-1S5DKFTDDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export{auth,provider,db,analytics};