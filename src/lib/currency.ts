import { NextRequest } from 'next/server';

export type CurrencyInfo = {
    code: string;
    symbol: string;
    region: 'IN' | 'INTL';
};

export async function getCurrencyFromIP(request: NextRequest): Promise<CurrencyInfo> {
    // Try to get country from headers (e.g., Cloudflare or Vercel headers)
    const country = request.headers.get('x-vercel-ip-country') ||
                    request.headers.get('cf-ipcountry') ||
                    'US'; // Default

    if (country === 'IN') {
        return { code: 'INR', symbol: '₹', region: 'IN' };
    }

    return { code: 'USD', symbol: '$', region: 'INTL' };
}

export function formatPrice(amount: number, currency: CurrencyInfo) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency.code,
    }).format(amount);
}
