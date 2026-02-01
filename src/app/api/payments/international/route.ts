import { NextRequest, NextResponse } from "next/server";
import { createSubscription, processTransaction } from "@/lib/subscription";

export async function POST(req: NextRequest) {
  try {
    const { userId, planId, amount, currency = "USD" } = await req.json();

    // Simulate International Payment (PayPal/Stripe)
    const transaction = await processTransaction(userId, amount, "INTERNATIONAL", `int_${Date.now()}`);
    const subscription = await createSubscription(userId, planId);

    return NextResponse.json({
      success: true,
      transaction: { ...transaction, currency },
      subscription
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
