
import { NextRequest, NextResponse } from 'next/server';
import { adminDb, adminAuth } from '@/lib/firebase-admin';


async function getRoleFromToken(idToken: string): Promise<'user' | 'admin' | 'superadmin'> {
  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    const uid = decodedToken.uid;
    
    if (!uid) return 'user';

    const userRoleRef = adminDb.collection('roles').doc(uid);
    const roleDoc = await userRoleRef.get();

    if (roleDoc.exists) {
      return roleDoc.data()?.role || 'user';
    }
    return 'user';
  } catch (error) {
    console.error("Error verifying token or fetching role in API route:", error);
    return 'user'; // Default to 'user' on error
  }
}

export async function GET(req: NextRequest) {
  const authorization = req.headers.get('Authorization');
  
  if (authorization?.startsWith('Bearer ')) {
    const idToken = authorization.split('Bearer ')[1];
    const role = await getRoleFromToken(idToken);
    return NextResponse.json({ role });
  }
  
  // Return 'user' role if not authenticated
  return NextResponse.json({ role: 'user' });
}
