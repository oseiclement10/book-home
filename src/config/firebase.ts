import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "booking-17dbd.firebaseapp.com",
    projectId: "booking-17dbd",
    storageBucket: "booking-17dbd.appspot.com",
    messagingSenderId: "103972205124",
    appId: "1:103972205124:web:3555918c01f344a93a4211",
    measurementId: "G-2FHR3X76K7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleAuth = new GoogleAuthProvider();