
'use server';

import { auth as adminAuth } from 'firebase-admin';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase-admin';
import { getAuthenticatedUser, getUserRole } from './auth';
import { revalidatePath } from 'next/cache';
import type { User as AuthUser } from 'firebase-admin/auth';

export interface UserView extends AuthUser {
    role: 'user' | 'admin' | 'superadmin';
}

export async function getAllUsers(): Promise<UserView[]> {
    const user = await getAuthenticatedUser();
    if (!user) throw new Error('Authentication required');
    const role = await getUserRole(user.uid);
    if (role !== 'admin' && role !== 'superadmin') throw new Error('Unauthorized');
    
    try {
        const userRecords = await adminAuth().listUsers();
        const rolesSnapshot = await getDocs(collection(db, 'roles'));
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
        const targetRoleDoc = await getDoc(doc(db, 'roles', targetUid));
        if (targetRoleDoc.exists() && targetRoleDoc.data()?.role === 'superadmin') {
            return { success: false, error: "Cannot change another superadmin's role." };
        }

        await setDoc(doc(db, 'roles', targetUid), { role: newRole });
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
        const targetRoleDoc = await getDoc(doc(db, 'roles', targetUid));
        if (targetRoleDoc.exists() && targetRoleDoc.data()?.role === 'superadmin') {
            return { success: false, error: 'Cannot delete a superadmin.' };
        }

        await adminAuth().deleteUser(targetUid);
        await deleteDoc(doc(db, 'roles', targetUid));
        revalidatePath('/admin');
        return { success: true };
    } catch (error) {
        console.error("Error deleting user:", error);
        return { success: false, error: 'Failed to delete user.' };
    }
}
