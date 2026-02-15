import { NextRequest, NextResponse } from 'next/server';
import { getCurrencyFromIP } from '@/lib/currency';

export async function GET(request: NextRequest) {
    const currency = await getCurrencyFromIP(request);
    return NextResponse.json(currency);
}
