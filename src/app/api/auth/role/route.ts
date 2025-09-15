
import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, getApp, cert, type App } from 'firebase-admin/app';
import { getFirestore, doc, getDoc } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const serviceAccount = {
  "projectId": process.env.FIREBASE_PROJECT_ID,
  "clientEmail": process.env.FIREBASE_CLIENT_EMAIL,
  "privateKey": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

const adminApp: App = getApps().length 
  ? getApp()
  : initializeApp({ credential: cert(serviceAccount) });

const adminAuth = getAuth(adminApp);
const db = getFirestore(adminApp);

async function getRoleFromToken(idToken: string): Promise<'user' | 'admin' | 'superadmin'> {
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    
    if (!uid) return 'user';

    const userRoleRef = doc(db, 'roles', uid);
    const roleDoc = await getDoc(userRoleRef);

    if (roleDoc.exists()) {
      return roleDoc.data()?.role || 'user';
    }
    return 'user';
  } catch (error) {
    console.error("Error verifying token or fetching role in API route:", error);
    return 'user'; // Default to 'user' on error
  }
}

export async function GET(req: NextRequest) {
  const authorization = req.headers.get('Authorization');
  
  if (authorization?.startsWith('Bearer ')) {
    const idToken = authorization.split('Bearer ')[1];
    const role = await getRoleFromToken(idToken);
    return NextResponse.json({ role });
  }
  
  // Return 'user' role if not authenticated
  return NextResponse.json({ role: 'user' });
}
