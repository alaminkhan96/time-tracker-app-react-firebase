import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCb3aX82D0aL8Z-qANErpycOHF4GnBEWLI",
  authDomain: "time-tracker-app-2f1c4.firebaseapp.com",
  projectId: "time-tracker-app-2f1c4",
  storageBucket: "time-tracker-app-2f1c4.appspot.com",
  messagingSenderId: "527889653527",
  appId: "1:527889653527:web:0add9f0c7308e79c2ae152",
  measurementId: "G-JP7XX988H4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
