
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore }from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

let firebaseConfig: FirebaseOptions;

// Firebase App Hosting automatically provides the config as a JSON string.
// Parsing this is the most reliable way to get the config.
if (process.env.NEXT_PUBLIC_FIREBASE_CONFIG) {
    try {
        firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);
    } catch (e) {
        console.error("Failed to parse NEXT_PUBLIC_FIREBASE_CONFIG. Check if it's a valid JSON string.", e);
        // If parsing fails, fall back to individual variables as a last resort.
        firebaseConfig = {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        };
    }
} else {
    // Fallback for local development or other environments where NEXT_PUBLIC_FIREBASE_CONFIG isn't set.
    firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);


export { app, db, auth };
