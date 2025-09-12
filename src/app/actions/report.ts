'use server';

import { ReportFormValues } from '@/components/report/report-form';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';

export async function saveReport(data: ReportFormValues) {
  console.log('Saving report to Firestore:', data);

  try {
    const reportsCollection = collection(db, 'reports');
    await addDoc(reportsCollection, {
      ...data,
      priceKRW: data.priceKRW ? Number(data.priceKRW) : null,
      reportedAt: serverTimestamp(),
      reportedBy: 'user-demo', // Placeholder until auth is added
      verification: 'unverified',
      votes: 0,
    });

    // Revalidate paths to show the new report
    revalidatePath('/');
    revalidatePath('/queue');

    return { success: true };
  } catch (error) {
    console.error('Error saving report to Firestore:', error);
    return { success: false, error: 'Failed to save report.' };
  }
}
