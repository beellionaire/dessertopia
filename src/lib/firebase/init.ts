// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKie2mjFwdo4nR9qJa7imbqm2pzuWlIH8",
  authDomain: "beel-next-app-2.firebaseapp.com",
  projectId: "beel-next-app-2",
  storageBucket: "beel-next-app-2.appspot.com",
  messagingSenderId: "980284190659",
  appId: "1:980284190659:web:68e700e0f4438bcfa11776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app