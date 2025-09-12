
import { saveReport } from '@/app/actions/report';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // We pass the authorization header from the client to the server action
    // Note: This is a simplified approach. In a production app, you'd want a more robust
    // way to handle auth between API routes and server actions.
    const result = await saveReport(data);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown server error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
