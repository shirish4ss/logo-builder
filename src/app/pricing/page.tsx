"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Sparkles, Zap, Globe, ArrowRight, CreditCard } from "lucide-react";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const plans = [
    {
      name: "Starter",
      price: currency === "INR" ? "₹0" : "$0",
      description: "Perfect for testing the AI and creating your first concept.",
      features: ["1 AI Generated Logo", "Standard PNG Download", "Basic Logo Editor", "Public Gallery Link", "Community Support"],
      button: "Start Creating",
      color: "border-border bg-card/30"
    },
    {
      name: "Professional",
      price: currency === "INR" ? "₹1,499" : "$19",
      description: "Everything you need to launch your brand professionally.",
      features: ["Unlimited Logos", "Vector SVG + High-res PNG", "Complete Branding Kit", "Social Media Templates", "Priority AI Queue", "3D Mockup Generator"],
      button: "Get Full Access",
      popular: true,
      color: "border-primary bg-primary/5 shadow-2xl shadow-primary/10"
    },
    {
      name: "Enterprise",
      price: currency === "INR" ? "₹4,999" : "$59",
      description: "Advanced tools for agencies and growing companies.",
      features: ["White-label Branding", "API Access", "Custom Prompt Engineering", "Team Collaboration (5 seats)", "Dedicated Account Manager", "Legal Rights Documentation"],
      button: "Contact Sales",
      color: "border-border bg-card/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <PublicNavbar />

      <main className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="text-center space-y-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Transparent Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Invest in your <span className="text-primary">Identity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Choose the perfect plan to scale your brand from a simple idea to a global presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <div className="flex bg-muted p-1 rounded-2xl border border-border shadow-inner">
                <button
                    onClick={() => setCurrency("INR")}
                    className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currency === 'INR' ? 'bg-card text-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    INR (₹)
                </button>
                <button
                    onClick={() => setCurrency("USD")}
                    className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${currency === 'USD' ? 'bg-card text-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    USD ($)
                </button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              className={`relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                    Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline space-x-2">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={plan.price}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-5xl md:text-6xl font-black tracking-tighter"
                        >
                            {plan.price}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-muted-foreground font-bold">/lifetime</span>
                </div>
                <p className="mt-6 text-sm text-muted-foreground font-medium leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-12">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center space-x-3 group">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                       <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full h-16 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all ${plan.popular ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-xl shadow-primary/20' : 'bg-muted text-foreground hover:bg-muted/80'}`}>
                {plan.button}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 glass-card flex flex-col md:flex-row items-center justify-between gap-8 border-dashed"
        >
            <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h4 className="text-xl font-bold">Enterprise Security</h4>
                    <p className="text-sm text-muted-foreground">Your transactions are secured with 256-bit SSL encryption.</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-lg font-black tracking-widest">RAZORPAY</span>
                <span className="text-lg font-black tracking-widest">STRIPE</span>
                <span className="text-lg font-black tracking-widest">VISA</span>
                <span className="text-lg font-black tracking-widest">PAYPAL</span>
            </div>
        </motion.div>
      </main>

      <PublicFooter />
    </div>
  );
}
