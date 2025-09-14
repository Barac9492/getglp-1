
import { NextRequest, NextResponse } from 'next/server';
import { auth as adminAuth, app as adminApp } from 'firebase-admin';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-admin';

// This ensures firebase-admin is initialized
import '@/lib/firebase-admin';

async function getRoleForUid(uid: string): Promise<'user' | 'admin' | 'superadmin'> {
    if (!uid) return 'user';
    try {
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
                const decodedToken = await adminAuth(adminApp).verifyIdToken(idToken);
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
