
import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore }from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// This configuration is now safely handled at build time.
// The `process.env.FIREBASE_WEBAPP_CONFIG` is a server-side variable
// that gets replaced with the actual configuration string during the build process.
const firebaseConfig: FirebaseOptions = JSON.parse(
  process.env.FIREBASE_WEBAPP_CONFIG || '{}'
);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);


export { app, db, auth };

