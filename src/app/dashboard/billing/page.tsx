"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CurrencyInfo } from "@/lib/currency";
import {
  CreditCard, IndianRupee, Globe, ShieldCheck,
  CheckCircle2, AlertCircle, History, Download,
  ExternalLink, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UserBillingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Pro");
  const [currency, setCurrency] = useState<CurrencyInfo>({ code: 'INR', symbol: '₹', region: 'IN' });

  useEffect(() => {
    fetch('/api/currency')
      .then(res => res.json())
      .then(data => setCurrency(data));
  }, []);

  return (
    <div className="p-10 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-4xl font-black text-white tracking-tight">Billing & Plans</h1>
        <p className="text-gray-500 font-medium mt-1">Manage your subscription and payment methods.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Current Plan Card */}
        <div className="lg:col-span-2 glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-10">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full mb-4 inline-block">Current Plan</span>
                    <h2 className="text-3xl font-black text-white tracking-tight">Professional Tier</h2>
                    <p className="text-gray-500 font-medium mt-1">
                        Billed annually ({currency.symbol}{currency.region === 'IN' ? '14,990' : '199'}/{currency.region === 'IN' ? 'year' : 'yr'})
                    </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <Zap size={24} className="text-blue-500" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Status</p>
                    <p className="text-sm font-bold text-green-500 flex items-center gap-2">
                        <CheckCircle2 size={14} /> Active
                    </p>
                </div>
                <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Next Invoice</p>
                    <p className="text-sm font-bold text-white">Oct 12, 2024</p>
                </div>
                <div>
                    <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Method</p>
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                        <CreditCard size={14} className="text-gray-500" /> •••• 4242
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <Button className="flex-1 h-12 rounded-xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-gray-200">
                    Change Plan
                </Button>
                <Button variant="outline" className="flex-1 h-12 rounded-xl border-white/10 text-white font-bold text-xs hover:bg-white/5">
                    Cancel Subscription
                </Button>
            </div>
        </div>

        {/* Payment Methods */}
        <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-8">
            <h3 className="text-xl font-bold text-white mb-6">Payment Methods</h3>
            <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black border border-blue-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <IndianRupee size={18} className="text-blue-500" />
                        <div>
                            <p className="text-sm font-bold text-white">Razorpay</p>
                            <p className="text-[10px] text-gray-500 font-medium">Default (UPI/Card)</p>
                        </div>
                    </div>
                    <CheckCircle2 size={16} className="text-blue-500" />
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between opacity-50 group cursor-pointer hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-3">
                        <Globe size={18} className="text-gray-500 group-hover:text-purple-500 transition-colors" />
                        <div>
                            <p className="text-sm font-bold text-white">Stripe</p>
                            <p className="text-[10px] text-gray-500 font-medium">International</p>
                        </div>
                    </div>
                    <ExternalLink size={14} className="text-gray-700" />
                </div>
                <Button variant="ghost" className="w-full text-xs font-bold text-gray-500 hover:text-white mt-2">
                    Add New Method
                </Button>
            </div>
        </div>
      </div>

      {/* Invoice History */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Invoice History</h2>
        <div className="bg-[#0a0a0a] border border-white/5 rounded-[2rem] overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-white/[0.02] border-b border-white/5">
                    <tr>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Date</th>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Invoice ID</th>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-500">Amount</th>
                        <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-500 text-right">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {[
                        { date: "Oct 12, 2023", id: "INV-2023-012", amount: "₹14,990", status: "Paid" },
                        { date: "Oct 12, 2022", id: "INV-2022-012", amount: "₹12,490", status: "Paid" },
                    ].map((inv, i) => (
                        <tr key={i} className="hover:bg-white/[0.01] transition-colors">
                            <td className="px-8 py-6 text-sm font-medium text-white">{inv.date}</td>
                            <td className="px-8 py-6 text-sm font-bold text-gray-400 font-mono">{inv.id}</td>
                            <td className="px-8 py-6 text-sm font-black text-white">{inv.amount}</td>
                            <td className="px-8 py-6 text-right">
                                <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-500/10 font-bold h-9 rounded-lg">
                                    <Download size={14} className="mr-2" /> PDF
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      <div className="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] flex items-center gap-6">
        <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
            <ShieldCheck size={24} />
        </div>
        <div>
            <h4 className="text-white font-bold tracking-tight">Enterprise Compliance</h4>
            <p className="text-gray-500 text-sm font-medium">Need GST invoices or custom billing for your organization?</p>
        </div>
        <Button className="ml-auto bg-blue-600 text-white font-bold h-11 rounded-xl px-6">Contact Sales</Button>
      </div>
    </div>
  );
}
