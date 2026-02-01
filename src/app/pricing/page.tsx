"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "For those just starting out.",
    features: ["1 AI Logo Generation", "Low Res PNG", "Standard Design Styles"],
    cta: "Start for Free"
  },
  {
    name: "Basic",
    price: "₹499",
    desc: "Perfect for small businesses.",
    features: ["Unlimited Logos", "High Res PNG", "SVG Export", "Social Media Kit", "Standard Analytics"],
    cta: "Choose Basic",
    highlight: true
  },
  {
    name: "Pro",
    price: "₹1,499",
    desc: "The complete branding suite.",
    features: ["Everything in Basic", "Branding Kit Guidelines", "Vector Node Editor", "Team Workspaces", "Direct-to-Print API"],
    cta: "Choose Pro"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="px-10 py-6 flex justify-between items-center bg-white border-b border-gray-100">
        <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-tight">LogoAI</Link>
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 hover:text-blue-600 font-medium">Features</Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="py-20 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Choose the plan that&apos;s right for your business. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div key={i} className={`bg-white rounded-3xl p-10 border ${p.highlight ? 'border-blue-600 shadow-2xl ring-4 ring-blue-50 relative' : 'border-gray-100 shadow-sm'} flex flex-col`}>
              {p.highlight && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</span>}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-500 text-sm mb-8">{p.desc}</p>
              <div className="mb-10">
                <span className="text-5xl font-black">{p.price}</span>
                <span className="text-gray-400 font-medium">/month</span>
              </div>
              <div className="space-y-4 mb-10 flex-1">
                {p.features.map(f => (
                  <div key={f} className="flex items-center space-x-3 text-sm text-gray-600 font-medium">
                    <div className="bg-blue-50 text-blue-600 rounded-full p-1"><Check size={14} /></div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/register" className="block">
                <Button variant={p.highlight ? 'primary' : 'outline'} className="w-full py-6 text-lg">
                   {p.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-24 text-center">
           <p className="text-gray-500 mb-4">Supporting payment methods from around the world:</p>
           <div className="flex justify-center items-center space-x-10 grayscale opacity-50">
              <span className="font-bold text-2xl">Razorpay</span>
              <span className="font-bold text-2xl">Stripe</span>
              <span className="font-bold text-2xl">PayPal</span>
              <span className="font-bold text-2xl">Visa/Mastercard</span>
           </div>
        </section>
      </main>
    </div>
  );
}
