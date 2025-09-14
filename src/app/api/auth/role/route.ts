
import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, getApp, cert, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, doc, getDoc } from 'firebase-admin/firestore';

// This configuration is for backend use only.
const serviceAccount = {
  "projectId": "studio-3369977064-a64a1",
  "clientEmail": "firebase-adminsdk-3y9e1@studio-3369977064-a64a1.iam.gserviceaccount.com",
  "privateKey": process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};

function getAdminApp(): App {
    if (getApps().length > 0) {
        return getApp();
    }
    return initializeApp({
        credential: cert(serviceAccount)
    });
}

async function getRoleForUid(uid: string): Promise<'user' | 'admin' | 'superadmin'> {
    if (!uid) return 'user';
    try {
        const app = getAdminApp();
        const db = getFirestore(app);
        const userRoleRef = doc(db, 'roles', uid);
        const roleDoc = await getDoc(userRoleRef);
        if (roleDoc.exists()) {
            return roleDoc.data()?.role || 'user';
        }
        return 'user';
    } catch (error) {
        console.error("Error fetching user role:", error);
        return 'user';
    }
}


export async function GET(req: NextRequest) {
    try {
        const authorization = req.headers.get('Authorization');
        if (authorization?.startsWith('Bearer ')) {
            const idToken = authorization.split('Bearer ')[1];
            try {
                const app = getAdminApp();
                const adminAuth = getAuth(app);
                const decodedToken = await adminAuth.verifyIdToken(idToken);
                const role = await getRoleForUid(decodedToken.uid);
                return NextResponse.json({ role });
            } catch (error) {
                 console.error('API Error verifying token or getting role:', error);
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
        } else {
             return NextResponse.json({ error: 'Unauthorized: No token provided' }, { status: 401 });
        }
    } catch (error) {
        console.error('API Error fetching role:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
