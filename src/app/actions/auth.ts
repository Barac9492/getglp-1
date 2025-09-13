
'use server';

import { headers } from 'next/headers';
import { auth as adminAuth, app as adminApp } from 'firebase-admin';
import type { DecodedIdToken } from 'firebase-admin/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-admin';

// This ensures firebase-admin is initialized
import '@/lib/firebase-admin';

const SUPERADMIN_EMAIL = 'ethancho12@gmail.com';

export async function getAuthenticatedUser(): Promise<DecodedIdToken | null> {
  const authorization = headers().get('Authorization');
  if (authorization?.startsWith('Bearer ')) {
    const idToken = authorization.split('Bearer ')[1];
    try {
      const decodedToken = await adminAuth(adminApp).verifyIdToken(idToken);
      
      // One-time superadmin setup
      if (decodedToken.email === SUPERADMIN_EMAIL) {
          const userRoleRef = doc(db, 'roles', decodedToken.uid);
          const roleDoc = await getDoc(userRoleRef);
          if (!roleDoc.exists()) {
              await setDoc(userRoleRef, { role: 'superadmin' });
          }
      }
      return decodedToken;
    } catch (error) {
      console.error('Error verifying token in getAuthenticatedUser:', error);
      return null;
    }
  }
  return null;
}

export async function getUserRole(uid: string): Promise<'user' | 'admin' | 'superadmin'> {
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
