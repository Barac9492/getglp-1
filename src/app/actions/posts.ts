
'use server';

import { revalidatePath } from 'next/cache';
import { adminDb } from '@/lib/firebase-admin';
import type { CommunityPost } from '@/lib/types';
import { getAuthenticatedUser, getUserRole } from './auth';

export async function getAllPosts(): Promise<CommunityPost[]> {
  try {
    const postsSnapshot = await adminDb.collection('posts').orderBy('createdAt', 'desc').get();
    const posts = postsSnapshot.docs.map(doc => {
        const data = doc.data();
        const createdAtDate = data.createdAt.toDate();
        return {
            id: doc.id,
            title: data.title,
            author: data.author,
            createdAt: createdAtDate.toISOString(),
            _date: createdAtDate,
            votes: data.votes,
            commentsCount: data.commentsCount,
            category: data.category,
            content: data.content,
        } as CommunityPost
    });
    return posts;
  } catch (error) {
      console.error("Error fetching posts:", error);
      // Fallback to empty array in case of error
      return [];
  }
}

export async function deletePost(postId: string): Promise<{ success: boolean; error?: string }> {
    const user = await getAuthenticatedUser();
    if (!user) return { success: false, error: 'Authentication required' };
    const role = await getUserRole(user.uid);
    if (role !== 'admin' && role !== 'superadmin') return { success: false, error: 'Unauthorized' };

    try {
        await adminDb.collection('posts').doc(postId).delete();
        revalidatePath('/admin');
        revalidatePath('/community');
        return { success: true };
    } catch (error) {
        console.error("Error deleting post:", error);
        return { success: false, error: 'Failed to delete post.' };
    }
}
