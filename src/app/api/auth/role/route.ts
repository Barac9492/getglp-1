
import { NextRequest, NextResponse } from 'next/server';
import { getAuthenticatedUser, getUserRole } from '@/app/actions/auth';

export async function GET(req: NextRequest) {
    try {
        const user = await getAuthenticatedUser();
        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        const role = await getUserRole(user.uid);
        return NextResponse.json({ role });
    } catch (error) {
        console.error('API Error fetching role:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
