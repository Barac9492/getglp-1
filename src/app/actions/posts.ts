
'use server';

import { collection, getDocs, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase-admin';
import type { CommunityPost } from '@/lib/types';
import { getAuthenticatedUser, getUserRole } from './auth';
import { revalidatePath } from 'next/cache';
import { communityPosts } from '@/lib/mock-data';

export async function getAllPosts(): Promise<CommunityPost[]> {
  // This combines mock data with firestore data for now
  // In a real app, you would fetch everything from firestore
  const firestorePosts: CommunityPost[] = []; // Replace with actual firestore fetch if needed
  
  const allPosts = [...firestorePosts, ...communityPosts].sort((a,b) => b._date.getTime() - a._date.getTime());
  
  return allPosts;
}

export async function deletePost(postId: string): Promise<{ success: boolean; error?: string }> {
    const user = await getAuthenticatedUser();
    if (!user) return { success: false, error: 'Authentication required' };
    const role = await getUserRole(user.uid);
    if (role !== 'admin' && role !== 'superadmin') return { success: false, error: 'Unauthorized' };

    try {
        // This is a placeholder for deleting real posts.
        // As posts are mock data, we can't truly delete them from the source.
        // If posts were in Firestore, you'd use: await deleteDoc(doc(db, 'posts', postId));
        console.log(`Admin ${user.uid} deleted post ${postId}. (Simulated)`);
        revalidatePath('/admin');
        revalidatePath('/community');
        return { success: true };
    } catch (error) {
        console.error("Error deleting post:", error);
        return { success: false, error: 'Failed to delete post.' };
    }
}
