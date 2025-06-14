import { NextResponse } from 'next/server';
import { checkEligibility } from '@/utils/excelProcessor';

export async function POST(request: Request) {
  try {
    const { key } = await request.json();
    console.log('Received key:', key); // Debug log

    if (!key) {
      return NextResponse.json(
        { error: 'Key is required' },
        { status: 400 }
      );
    }

    const result = await checkEligibility(key);
    console.log('API response:', result); // Debug log
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in eligibility check:', error);
    return NextResponse.json(
      { error: 'Failed to check eligibility' },
      { status: 500 }
    );
  }
} 