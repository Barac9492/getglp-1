
'use server';

import { ReportFormValues } from '@/components/report/report-form';
import { adminDb } from '@/lib/firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';
import { revalidatePath } from 'next/cache';
import { getAuthenticatedUser } from './auth';

export async function saveReport(data: ReportFormValues) {
  const user = await getAuthenticatedUser();

  if (!user) {
    return { success: false, error: 'Authentication required.' };
  }

  try {
    const reportsCollection = adminDb.collection('reports');
    await reportsCollection.add({
      ...data,
      clinicName: data.clinicName, 
      priceKRW: data.priceKRW ? Number(data.priceKRW) : null,
      reportedAt: FieldValue.serverTimestamp(),
      reportedBy: user.name || user.uid,
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
