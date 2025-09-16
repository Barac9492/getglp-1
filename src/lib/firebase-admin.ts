
'use server';
// src/lib/firebase-admin.ts
import 'server-only';
import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// Optional: env-based service account (works locally & on CI/CD).
// If you're on Firebase Hosting/Functions with ADC, leaving these undefined is fine.
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

const app: App =
  getApps()[0] ??
  initializeApp(
    projectId && clientEmail && privateKey
      ? { credential: cert({ projectId, clientEmail, privateKey }) }
      : {} // ADC fallback on Firebase/GCP runtimes
  );

export const adminApp = app;                 // <-- named export
export const adminAuth = getAuth(app);
export const adminDb = getFirestore(app);

// Export default too, so `import adminApp from ...` also works.
export default app;
export type { App };
