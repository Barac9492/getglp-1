
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { revalidatePath } from 'next/cache';
import { auth as adminAuth } from 'firebase-admin';
import { getApp, getApps, initializeApp } from 'firebase-admin/app';
import { DecodedIdToken } from 'firebase-admin/auth';

// Initialize Firebase Admin SDK if not already initialized
if (getApps().length === 0) {
  initializeApp();
}

async function getAuthenticatedUser(idToken: string): Promise<DecodedIdToken | null> {
  if (idToken) {
    try {
      return await adminAuth().verifyIdToken(idToken);
    } catch (error) {
      console.error('Error verifying token:', error);
      return null;
    }
  }
  return null;
}

export async function saveComment(postId: string, content: string, idToken: string) {
  const user = await getAuthenticatedUser(idToken);

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
