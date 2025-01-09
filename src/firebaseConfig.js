// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiqCHCF2VW9MXTehrC6JUR5c-j1UjtPgQ",
  authDomain: "wibi-app-b986a.firebaseapp.com",
  projectId: "wibi-app-b986a",
  storageBucket: "wibi-app-b986a.appspot.com",
  messagingSenderId: "637765366380",
  appId: "1:637765366380:web:d1730784c3484f34da1e49",
  measurementId: "G-58718TQTZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Initialize Firebase app

// Initialize Firebase services
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore database

// Export the services for use in your app
export { auth, db };