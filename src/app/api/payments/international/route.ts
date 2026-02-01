import { NextRequest, NextResponse } from "next/server";
import { createSubscription, processTransaction } from "@/lib/subscription";

export async function POST(req: NextRequest) {
  try {
    const { userId, planId, amount, currency = "USD", paymentMethodId } = await req.json();

    // Simulation of Stripe's PaymentIntent workflow
    console.log(`Stripe: Creating PaymentIntent for ${amount} ${currency} using ${paymentMethodId}`);

    // Simulate API call to Stripe
    const stripeResponse = { id: `pi_${Math.random().toString(36).substr(2, 9)}`, status: 'succeeded' };

    if (stripeResponse.status === 'succeeded') {
      const transaction = await processTransaction(userId, amount, "STRIPE", stripeResponse.id);
      const subscription = await createSubscription(userId, planId);

      return NextResponse.json({
        success: true,
        transactionId: transaction.id,
        subscriptionId: subscription.id,
        message: "International payment processed successfully via Stripe."
      });
    }

    return NextResponse.json({ success: false, error: "Payment failed" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
