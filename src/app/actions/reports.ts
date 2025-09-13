
'use server';

import { collection, getDocs, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-admin';
import type { Report } from '@/lib/types';
import { getAuthenticatedUser, getUserRole } from './auth';
import { revalidatePath } from 'next/cache';

export async function getAllReports(): Promise<Report[]> {
  try {
    const reportsCollection = collection(db, 'reports');
    const q = query(reportsCollection, orderBy('reportedAt', 'desc'));
    const reportSnapshot = await getDocs(q);
    const reports = reportSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        _date: data.reportedAt?.toDate() || new Date(),
        reportedAt: data.reportedAt?.toDate()?.toISOString() || new Date().toISOString(),
      } as Report;
    });
    return reports;
  } catch (error) {
    console.error("Error fetching reports from Firestore: ", error);
    return [];
  }
}

export async function verifyReport(reportId: string, verification: 'admin-verified' | 'unverified' | 'community-verified'): Promise<{ success: boolean; error?: string }> {
    const user = await getAuthenticatedUser();
    if (!user) return { success: false, error: 'Authentication required' };
    const role = await getUserRole(user.uid);
    if (role !== 'admin' && role !== 'superadmin') return { success: false, error: 'Unauthorized' };

    try {
        const reportRef = doc(db, 'reports', reportId);
        await updateDoc(reportRef, { verification });
        revalidatePath('/admin');
        revalidatePath('/queue');
        return { success: true };
    } catch (error) {
        console.error("Error verifying report:", error);
        return { success: false, error: 'Failed to verify report.' };
    }
}

export async function deleteReport(reportId: string): Promise<{ success: boolean; error?: string }> {
    const user = await getAuthenticatedUser();
    if (!user) return { success: false, error: 'Authentication required' };
    const role = await getUserRole(user.uid);
    if (role !== 'admin' && role !== 'superadmin') return { success: false, error: 'Unauthorized' };

    try {
        await deleteDoc(doc(db, 'reports', reportId));
        revalidatePath('/admin');
        revalidatePath('/queue');
        return { success: true };
    } catch (error) {
        console.error("Error deleting report:", error);
        return { success: false, error: 'Failed to delete report.' };
    }
}
