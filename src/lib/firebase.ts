
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore }from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "studio-3369977064-a64a1",
  "appId": "1:292530670201:web:a5233f6e86a602c93ea2a8",
  "storageBucket": "studio-3369977064-a64a1.firebasestorage.app",
  "apiKey": "AIzaSyCECBKV925XU3tFJbBOYD3I9X8QoeULnbI",
  "authDomain": "studio-3369977064-a64a1.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "292530670201"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);


export { app, db, auth };
