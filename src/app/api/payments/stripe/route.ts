import { NextRequest, NextResponse } from "next/server";
import { createSubscription, processTransaction } from "@/lib/subscription";

export async function POST(req: NextRequest) {
  try {
    const { userId, planId, amount } = await req.json();

    // Simulate Stripe payment success
    const transaction = await processTransaction(userId, amount, "STRIPE", `stripe_${Date.now()}`);
    const subscription = await createSubscription(userId, planId);

    return NextResponse.json({ success: true, transaction, subscription });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Payment failed" }, { status: 500 });
  }
}
