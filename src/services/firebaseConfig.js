import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7iqinqHhOroZtfg2cIvnZq8JhSaWjqU4",
  authDomain: "farm-ecfb8.firebaseapp.com",
  projectId: "farm-ecfb8",
  storageBucket: "farm-ecfb8.firebasestorage.app",
  messagingSenderId: "81223561624",
  appId: "1:81223561624:web:22a1fab1da62b58cc1bbed",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { app, auth, storage, db };
