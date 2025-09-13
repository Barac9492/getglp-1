
import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

// IMPORTANT: Do not expose this to the client-side
// This service account is for backend use only
const serviceAccount = {
  "projectId": "studio-3369977064-a64a1",
  "clientEmail": "firebase-adminsdk-3y9e1@studio-3369977064-a64a1.iam.gserviceaccount.com",
  // Private key is sensitive and should be handled with care
  "privateKey": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

const app = !getApps().length 
  ? initializeApp({
      credential: cert(serviceAccount)
    }) 
  : getApp();

const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
