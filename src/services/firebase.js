import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpkZKLEnFmF3_6cZ5UhNO62ntvGd_jmh8",
  authDomain: "recipefinder-c866b.firebaseapp.com",
  projectId: "recipefinder-c866b",
  storageBucket: "recipefinder-c866b.firebasestorage.app",
  messagingSenderId: "401259186596",
  appId: "1:401259186596:web:ca21414878066f93b81931"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };