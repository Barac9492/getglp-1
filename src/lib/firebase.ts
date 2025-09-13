
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

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);

// In a development environment, you can connect to the Auth emulator
// This will automatically authorize localhost for testing
if (process.env.NODE_ENV === 'development') {
    // Point to the Auth emulator running on localhost.
    // Note: You may need to adjust the port if your emulator is configured differently.
    connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
}


export { app, db, auth };
