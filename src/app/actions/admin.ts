
'use server';

import 'server-only';
import type { UserRecord as AuthUser } from 'firebase-admin/auth';
import { revalidatePath } from 'next/cache';
import { getAuthenticatedUser, getUserRole } from './auth';
import { adminAuth, adminDb } from '@/lib/firebase-admin'; // ensure admin initialized once

export interface UserView extends AuthUser {
    role: 'user' | 'admin' | 'superadmin';
}

export async function getAllUsers(): Promise<UserView[]> {
    const user = await getAuthenticatedUser();
    if (!user) throw new Error('Authentication required');
    const role = await getUserRole(user.uid);
    if (role !== 'admin' && role !== 'superadmin') throw new Error('Unauthorized');
    
    try {
        const userRecords = await adminAuth.listUsers();
        const rolesSnapshot = await adminDb.collection('roles').get();
        const rolesMap = new Map(rolesSnapshot.docs.map(d => [d.id, d.data().role]));
        
        const users: UserView[] = userRecords.users.map(u => ({
            ...u.toJSON(),
            role: rolesMap.get(u.uid) || 'user',
        } as UserView));

        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function updateUserRole(targetUid: string, newRole: 'user' | 'admin'): Promise<{success: boolean, error?: string}> {
    const user = await getAuthenticatedUser();
    if (!user) return { success: false, error: 'Authentication required' };
    const userRole = await getUserRole(user.uid);

    if (userRole !== 'superadmin') {
        return { success: false, error: 'Unauthorized' };
    }
    
    if (targetUid === user.uid) {
        return { success: false, error: 'Cannot change your own role.' };
    }

    try {
        const targetRoleDocRef = adminDb.collection('roles').doc(targetUid);
        const targetRoleDoc = await targetRoleDocRef.get();
        if (targetRoleDoc.exists && targetRoleDoc.data()?.role === 'superadmin') {
            return { success: false, error: "Cannot change another superadmin's role." };
        }

        await targetRoleDocRef.set({ role: newRole });
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error("Error updating user role:", error);
        return { success: false, error: 'Failed to update role.' };
    }
}

export async function deleteUser(targetUid: string): Promise<{success: boolean, error?: string}> {
    const user = await getAuthenticatedUser();
    if (!user) return { success: false, error: 'Authentication required' };
    const userRole = await getUserRole(user.uid);
    
    if (userRole !== 'superadmin') {
        return { success: false, error: 'Unauthorized' };
    }

    if (targetUid === user.uid) {
        return { success: false, error: 'Cannot delete yourself.' };
    }

    try {
        const targetRoleDocRef = adminDb.collection('roles').doc(targetUid);
        const targetRoleDoc = await targetRoleDocRef.get();
        if (targetRoleDoc.exists && targetRoleDoc.data()?.role === 'superadmin') {
            return { success: false, error: 'Cannot delete a superadmin.' };
        }

        await adminAuth.deleteUser(targetUid);
        await targetRoleDocRef.delete();
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error("Error deleting user:", error);
        return { success: false, error: 'Failed to delete user.' };
    }
}
