import { NextResponse } from 'next/server';
import { checkLogoUniqueness } from '@/lib/ai-utils';

export async function POST(request: Request) {
  try {
    const { svg, layers } = await request.json();

    if (!svg && !layers) {
      return new NextResponse("Missing data for analysis", { status: 400 });
    }

    console.log("Checking uniqueness for logo...");

    // Use the realistic utility
    const result = await checkLogoUniqueness(layers || { svg });

    return NextResponse.json({
        score: result.uniquenessScore,
        matches: result.potentialMatches.map(m => ({ name: m.brand, similarity: `${(m.similarity * 100).toFixed(0)}%` })),
        recommendation: result.recommendation
    });
  } catch (error) {
    console.error("Uniqueness Check Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
