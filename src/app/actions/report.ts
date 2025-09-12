
'use server';

import { ReportFormValues } from '@/components/report/report-form';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { auth as adminAuth } from 'firebase-admin';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { DecodedIdToken } from 'firebase-admin/auth';
import { headers } from 'next/headers';

// Initialize Firebase Admin SDK if not already initialized
if (getApps().length === 0) {
  initializeApp();
}

async function getAuthenticatedUser(): Promise<DecodedIdToken | null> {
  const authorization = headers().get('Authorization');
  if (authorization?.startsWith('Bearer ')) {
    const idToken = authorization.split('Bearer ')[1];
    try {
      // Use the Firebase Admin SDK to verify the ID token.
      return await adminAuth().verifyIdToken(idToken);
    } catch (error) {
      console.error('Error verifying token:', error);
      return null;
    }
  }
  return null;
}


export async function saveReport(data: ReportFormValues) {
  const user = await getAuthenticatedUser();

  if (!user) {
    return { success: false, error: 'Authentication required.' };
  }

  try {
    const reportsCollection = collection(db, 'reports');
    // Save the report with the authenticated user's UID.
    await addDoc(reportsCollection, {
      ...data,
      priceKRW: data.priceKRW ? Number(data.priceKRW) : null,
      reportedAt: serverTimestamp(),
      reportedBy: user.uid, // Use the verified UID from the token
      verification: 'unverified',
      votes: 0,
    });

    revalidatePath('/');
    revalidatePath('/queue');

    return { success: true };
  } catch (error) {
    console.error('Error saving report to Firestore:', error);
    return { success: false, error: 'Failed to save report.' };
  }
}
