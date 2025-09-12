
'use server';

import { ReportFormValues } from '@/components/report/report-form';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { auth } from 'firebase-admin';
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
      return await auth().verifyIdToken(idToken);
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
    await addDoc(reportsCollection, {
      ...data,
      priceKRW: data.priceKRW ? Number(data.priceKRW) : null,
      reportedAt: serverTimestamp(),
      reportedBy: user.uid,
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
