
import { NextRequest, NextResponse } from 'next/server';
import { predictAvailability, PredictAvailabilityInput } from '@/ai/flows/availability-prediction';
import { getAuthenticatedUser } from '@/app/actions/auth';

export async function POST(req: NextRequest) {
  // Although this is a public endpoint for now, we can add auth checks
  const user = await getAuthenticatedUser();
  if (!user) {
    // You can choose to allow unauthenticated access or return an error
    // For now, we'll allow it to be called from the client without strict auth
    // return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  }

  try {
    const body: PredictAvailabilityInput = await req.json();
    const result = await predictAvailability(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in prediction API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'AI 예측에 실패했습니다. 잠시 후 다시 시도해주세요.', details: errorMessage }, { status: 500 });
  }
}
