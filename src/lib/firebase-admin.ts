
import { initializeApp, getApps, getApp, cert, type App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// IMPORTANT: Do not expose this to the client-side
// This service account is for backend use only
const serviceAccount = {
  "projectId": process.env.FIREBASE_PROJECT_ID,
  "clientEmail": process.env.FIREBASE_CLIENT_EMAIL,
  // Private key is sensitive and should be handled with care
  "privateKey": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

const app: App = getApps().length 
  ? getApp()
  : initializeApp({
      credential: cert(serviceAccount)
    });

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
