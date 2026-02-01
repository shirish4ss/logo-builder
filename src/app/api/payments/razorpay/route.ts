import { NextRequest, NextResponse } from "next/server";
import { createSubscription, processTransaction } from "@/lib/subscription";

export async function POST(req: NextRequest) {
  try {
    const { userId, planId, amount } = await req.json();

    // In a real app, you would verify the signature from Razorpay here.
    // We'll simulate a successful payment.

    const transaction = await processTransaction(userId, amount, "RAZORPAY", `razor_${Date.now()}`);
    const subscription = await createSubscription(userId, planId);

    return NextResponse.json({ success: true, transaction, subscription });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Payment failed" }, { status: 500 });
  }
}
