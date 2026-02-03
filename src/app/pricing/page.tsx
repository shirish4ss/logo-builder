"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Globe, CreditCard } from "lucide-react";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [locale, setLocale] = useState<"en" | "hi" | "es">("en");

  const translations = {
    en: {
      title: "Choose Your Plan",
      subtitle: "Professional tools for every stage of your brand journey.",
      free: "Free",
      pro: "Pro",
      enterprise: "Enterprise",
      select: "Select Plan",
      features: ["AI Logo Designer", "High-res PNG/SVG", "3D Mockups", "Brand Guidelines", "White-label Sharing"]
    },
    hi: {
      title: "अपनी योजना चुनें",
      subtitle: "आपके ब्रांड की यात्रा के हर चरण के लिए पेशेवर उपकरण।",
      free: "मुफ्त",
      pro: "प्रो",
      enterprise: "एंटरप्राइज",
      select: "योजना चुनें",
      features: ["AI लोगो डिज़ाइनर", "हाई-रेस PNG/SVG", "3D मॉकअप", "ब्रांड दिशानिर्देश", "व्हाइट-लेबल शेयरिंग"]
    },
    es: {
      title: "Elige tu Plan",
      subtitle: "Herramientas profesionales para cada etapa de tu marca.",
      free: "Gratis",
      pro: "Pro",
      enterprise: "Empresa",
      select: "Seleccionar Plan",
      features: ["Diseñador de logos AI", "PNG/SVG alta res", "Maquetas 3D", "Guías de marca", "Compartir marca blanca"]
    }
  };

  const t = translations[locale];

  const plans = [
    { name: t.free, priceINR: "₹0", priceUSD: "$0", features: [true, true, false, false, false] },
    { name: t.pro, priceINR: "₹1,499", priceUSD: "$19", features: [true, true, true, true, false], popular: true },
    { name: t.enterprise, priceINR: "₹4,999", priceUSD: "$59", features: [true, true, true, true, true] },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <PublicNavbar />

      <header className="py-10 px-10 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-full">
           <button onClick={() => setLocale('en')} className={`px-4 py-1.5 rounded-full text-xs font-bold ${locale === 'en' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}>EN</button>
           <button onClick={() => setLocale('hi')} className={`px-4 py-1.5 rounded-full text-xs font-bold ${locale === 'hi' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}>हिन्दी</button>
           <button onClick={() => setLocale('es')} className={`px-4 py-1.5 rounded-full text-xs font-bold ${locale === 'es' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}>ES</button>
        </div>
        <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800">
           <Globe size={16} className="text-blue-600" />
           <select
             value={currency}
             onChange={(e) => setCurrency(e.target.value as any)}
             className="bg-transparent text-sm font-bold text-blue-600 focus:outline-none"
           >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
           </select>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-10 pb-32">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-6xl font-black tracking-tight dark:text-white">{t.title}</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[3rem] border transition-all hover:shadow-2xl ${plan.popular ? 'border-blue-600 shadow-xl bg-blue-50/10' : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900'}`}>
              {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-bold">MOST POPULAR</span>}
              <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
              <div className="flex items-baseline space-x-2 mb-8">
                <span className="text-5xl font-black dark:text-white">{currency === 'INR' ? plan.priceINR : plan.priceUSD}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <div className="space-y-6 mb-12">
                {t.features.map((feature, j) => (
                  <div key={j} className="flex items-center space-x-3">
                    <div className={`p-1 rounded-full ${plan.features[j] ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                       <Check size={14} />
                    </div>
                    <span className={`text-sm ${plan.features[j] ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 line-through'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full h-14 rounded-2xl text-lg font-bold ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-black'}`}>
                {t.select}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 p-10 bg-gray-50 dark:bg-gray-900/50 rounded-[3rem] border border-dashed border-gray-200 dark:border-gray-800 text-center">
            <div className="flex items-center space-x-3">
                <ShieldCheck className="text-blue-600" size={32} />
                <div className="text-left">
                    <p className="font-bold dark:text-white">Secure Transactions</p>
                    <p className="text-xs text-gray-500">Industry standard encryption.</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/80x40/white/black?text=Razorpay" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Razorpay" />
                <img src="https://placehold.co/80x40/white/black?text=Stripe" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Stripe" />
            </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}
