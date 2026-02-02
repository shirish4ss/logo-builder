import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { svg } = await request.json();

    if (!svg) {
      return new NextResponse("Missing SVG data", { status: 400 });
    }

    // Mock Copyright/Uniqueness check
    // In production, this would call a reverse image search API
    // or a specialized brand database API.
    console.log("Checking uniqueness for logo...");

    const score = Math.floor(Math.random() * (100 - 85 + 1)) + 85; // Random score between 85 and 100
    const matches: any[] = [];

    if (score < 90) {
        matches.push({ name: "SimilarBrand X", similarity: "12%" });
    }

    return NextResponse.json({ score, matches });
  } catch (error) {
    console.error("Uniqueness Check Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
