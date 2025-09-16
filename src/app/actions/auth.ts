
'use server';

import 'server-only';
import { headers } from 'next/headers';
import type { DecodedIdToken } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { adminApp } from '@/lib/firebase-admin';

const SUPERADMIN_EMAIL = 'ethancho12@gmail.com';

export async function getAuthenticatedUser(): Promise<DecodedIdToken | null> {
  const h = await headers();
  const authorization = h.get('authorization');

  if (!authorization?.startsWith('Bearer ')) {
    return null;
  }

  const idToken = authorization.split('Bearer ')[1];
  try {
    const decodedToken = await getAuth(adminApp).verifyIdToken(idToken, true); // Check for revocation
    const db = getFirestore(adminApp);
    
    // One-time superadmin setup
    if (decodedToken.email === SUPERADMIN_EMAIL) {
        const userRoleRef = db.collection('roles').doc(decodedToken.uid);
        const roleDoc = await userRoleRef.get();
        if (!roleDoc.exists) {
            await userRoleRef.set({ role: 'superadmin' });
        }
    }
    return decodedToken;
  } catch (error) {
    console.error('Error verifying token in getAuthenticatedUser:', error);
    return null;
  }
}

export async function getUserRole(uid: string): Promise<'user' | 'admin' | 'superadmin'> {
    if (!uid) return 'user';
    try {
        const db = getFirestore(adminApp);
        const userRoleRef = db.collection('roles').doc(uid);
        const roleDoc = await userRoleRef.get();
        if (roleDoc.exists) {
            return roleDoc.data()?.role || 'user';
        }
        return 'user';
    } catch (error) {
        console.error("Error fetching user role:", error);
        return 'user';
    }
}
