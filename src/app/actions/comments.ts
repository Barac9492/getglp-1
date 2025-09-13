
'use server';

import { db } from '@/lib/firebase-admin';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { getAuthenticatedUser } from './auth';

export async function saveComment(postId: string, content: string) {
  const user = await getAuthenticatedUser();

  if (!user) {
    return { success: false, error: 'Authentication required.' };
  }

  if (!content || content.trim() === '') {
    return { success: false, error: 'Comment content cannot be empty.' };
  }

  try {
    const commentsCollection = collection(db, 'comments');
    await addDoc(commentsCollection, {
      postId,
      content,
      authorId: user.uid,
      authorName: user.name || 'Anonymous',
      authorPhotoURL: user.picture || null,
      createdAt: serverTimestamp(),
    });

    revalidatePath(`/community/${postId}`);

    return { success: true };
  } catch (error) {
    console.error('Error saving comment to Firestore:', error);
    return { success: false, error: 'Failed to save comment.' };
  }
}
