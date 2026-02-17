// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ2ZsL5xmKpVLD2p9Lrn7XIFj_SrKW_mY",
  authDomain: "kacha-bazar-76163.firebaseapp.com",
  projectId: "kacha-bazar-76163",
  storageBucket: "kacha-bazar-76163.firebasestorage.app",
  messagingSenderId: "81365266563",
  appId: "1:81365266563:web:e5e379206b97c53ccdabb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Add this line
export const auth = getAuth(app);
