"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard, Package, TrendingUp, Settings,
  Plus, CheckCircle2, XCircle, Info,
  IndianRupee, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const initialPackages = [
  {
    id: "1",
    name: "Starter",
    price: "0",
    currency: "INR",
    billing: "Free Forever",
    features: ["1 Logo Creation", "Standard Quality PNG", "Limited Templates"],
    users: 5402,
    status: "Active"
  },
  {
    id: "2",
    name: "Professional",
    price: "1,499",
    currency: "INR",
    billing: "Per Month",
    features: ["Unlimited Logos", "Full Vector SVG", "Complete Brand Kit", "Social Media Assets"],
    users: 2841,
    status: "Active",
    popular: true
  },
  {
    id: "3",
    name: "Enterprise",
    price: "4,999",
    currency: "INR",
    billing: "Per Month",
    features: ["All Pro Features", "Dedicated Account Manager", "Custom Style Training", "API Access"],
    users: 299,
    status: "Active"
  }
];

export default function AdminSubscriptionsPage() {
  const [packages, setPackages] = useState(initialPackages);

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Revenue & Packages</h1>
          <p className="text-slate-400 font-medium">Configure subscription tiers and payment providers.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-slate-800 text-slate-300 h-12 px-6 rounded-xl font-bold">
            <Settings size={18} className="mr-2" /> Gateway Config
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 px-6 font-bold">
            <Plus size={18} className="mr-2" /> New Package
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="p-3 rounded-xl bg-green-400/10 text-green-400">
                    <TrendingUp size={24} />
                </div>
                <span className="text-xs font-bold text-green-400">+12.5% vs LW</span>
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Monthly Recurring Revenue</p>
            <p className="text-3xl font-black text-white mt-2">₹14,52,000</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="p-3 rounded-xl bg-blue-400/10 text-blue-400">
                    <CreditCard size={24} />
                </div>
                <span className="text-xs font-bold text-blue-400">98% Success</span>
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Active Subscriptions</p>
            <p className="text-3xl font-black text-white mt-2">3,140</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div className="p-3 rounded-xl bg-purple-400/10 text-purple-400">
                    <Package size={24} />
                </div>
                <span className="text-xs font-bold text-purple-400">Top: Pro</span>
            </div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Average Order Value</p>
            <p className="text-3xl font-black text-white mt-2">₹1,240</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className={`relative bg-slate-900 border ${pkg.popular ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]' : 'border-slate-800'} rounded-[2.5rem] p-10 flex flex-col`}>
             {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                    Most Popular
                </div>
             )}
             <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{pkg.price === '0' ? 'Free' : `₹${pkg.price}`}</span>
                    {pkg.price !== '0' && <span className="text-slate-500 text-sm font-bold">/{pkg.billing.split(' ').pop()?.toLowerCase()}</span>}
                </div>
             </div>

             <div className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-blue-500" />
                        <span className="text-sm text-slate-300 font-medium">{feat}</span>
                    </div>
                ))}
             </div>

             <div className="pt-8 border-t border-slate-800 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Users</span>
                    <span className="text-sm font-bold text-white">{pkg.users.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 border-slate-800 text-slate-300 font-bold hover:bg-slate-800 rounded-xl h-11">Edit Tier</Button>
                    <Button variant="ghost" className="w-11 h-11 border border-slate-800 text-slate-500 hover:text-red-400 rounded-xl p-0">
                        <XCircle size={18} />
                    </Button>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
         <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
            <Info className="text-blue-500" size={20} />
            Payment Gateway Status
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                        <IndianRupee size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white tracking-tight">Razorpay</p>
                        <p className="text-xs text-green-500 font-bold uppercase tracking-widest">Operational</p>
                    </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
            </div>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-500">
                        <Globe size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white tracking-tight">Stripe (Intl)</p>
                        <p className="text-xs text-green-500 font-bold uppercase tracking-widest">Operational</p>
                    </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
            </div>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl flex items-center justify-between opacity-50">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-600/10 flex items-center justify-center text-amber-500">
                        <IndianRupee size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white tracking-tight">Instamojo</p>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Disabled</p>
                    </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-slate-700" />
            </div>
         </div>
      </div>
    </div>
  );
}
