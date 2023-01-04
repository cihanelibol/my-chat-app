import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCn5l0_at29HSdwYXrBLpjJqtIwYTEn0hk",
  authDomain: "chat-a511e.firebaseapp.com",
  projectId: "chat-a511e",
  storageBucket: "chat-a511e.appspot.com",
  messagingSenderId: "939744234778",
  appId: "1:939744234778:web:50652bc750f2e1dccdb0a3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
