// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQwoVpzD5kGE0gqzz1g5VXf5Xsu90r9gI",
  authDomain: "dafosead-6c16f.firebaseapp.com",
  projectId: "dafosead-6c16f",
  storageBucket: "dafosead-6c16f.appspot.com",
  messagingSenderId: "174925312799",
  appId: "1:174925312799:web:557ae70885d61ec5a0b62a",
  measurementId: "G-NCYST90D8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
const db = getFirestore(app);

export { db };
