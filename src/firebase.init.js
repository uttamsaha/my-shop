// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAklxscMPR7KxaNGv_45J2SetlgMGxduLo",
  authDomain: "my-shop-project-4035b.firebaseapp.com",
  projectId: "my-shop-project-4035b",
  storageBucket: "my-shop-project-4035b.appspot.com",
  messagingSenderId: "1062931322636",
  appId: "1:1062931322636:web:bf8d6797c5251e8b1edb29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
