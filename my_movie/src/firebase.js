// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBygdRZTQPDq2TJLOavQv0E4DA8VefqtLk",
  authDomain: "react-auth-39d44.firebaseapp.com",
  projectId: "react-auth-39d44",
  storageBucket: "react-auth-39d44.appspot.com",
  messagingSenderId: "181166581833",
  appId: "1:181166581833:web:c4cd76ca714771b0a2b798",
  measurementId: "G-SYM1JJHWGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const db = getFirestore(app)

export default auth;
