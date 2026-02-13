"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Landmark, CreditCard, TrendingUp, DollarSign,
  ArrowUpRight, ArrowDownRight, Globe, ShieldCheck,
  Activity, Zap, PieChart, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinanceAdminPage() {
  const gateways = [
    { name: "Razorpay", region: "India / APAC", status: "Active", volume: "₹12.4M", color: "text-blue-500" },
    { name: "Stripe", region: "International", status: "Active", volume: "$42.8K", color: "text-indigo-500" },
    { name: "Instamojo", region: "India", status: "Backup", volume: "₹1.2M", color: "text-blue-400" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight italic">Financial Operations</h1>
          <p className="text-gray-500 font-medium mt-1">Audit transactions and manage global payment gateways.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 bg-white/[0.02] text-white font-bold px-6 rounded-xl hover:bg-white/5">
              <RefreshCw size={18} className="mr-2" /> Reconcile
           </Button>
           <Button className="h-12 bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] px-8 rounded-xl hover:bg-emerald-500 shadow-xl shadow-emerald-600/20">
              Payout Request
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: "Gross Revenue", value: "₹24,84,200", change: "+14.2%", icon: DollarSign, color: "text-emerald-500" },
           { label: "Active Subscriptions", value: "8,542", change: "+5.1%", icon: Activity, color: "text-blue-500" },
           { label: "Refund Rate", value: "0.4%", change: "-0.2%", icon: ArrowDownRight, color: "text-red-500" },
           { label: "Processing Fee", value: "₹42,300", change: "+8.5%", icon: Zap, color: "text-amber-500" },
         ].map((stat, i) => (
           <div key={i} className="glass-card p-6 border-white/5 bg-white/[0.02]">
              <div className="flex justify-between items-start mb-6">
                 <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                    <stat.icon size={20} />
                 </div>
                 <span className={`text-[10px] font-black uppercase ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>{stat.change}</span>
              </div>
              <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest">{stat.label}</p>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2rem] p-10">
               <h3 className="text-xl font-black text-white mb-10 tracking-tight">Payment Gateways</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {gateways.map((gw) => (
                    <div key={gw.name} className="p-6 rounded-3xl bg-black/40 border border-white/5 group hover:border-blue-500/20 transition-all">
                       <div className="flex justify-between items-center mb-8">
                          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${gw.color}`}>
                             <Landmark size={24} />
                          </div>
                          <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-md">{gw.status}</span>
                       </div>
                       <h4 className="text-2xl font-black text-white mb-1 tracking-tighter">{gw.name}</h4>
                       <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest mb-8">{gw.region}</p>
                       <div className="flex justify-between items-end">
                          <div>
                             <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Mtd Volume</p>
                             <p className="text-lg font-black text-white">{gw.volume}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-white"><ArrowUpRight size={18} /></Button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="glass-card p-8 border-white/5 bg-white/[0.02] rounded-[2rem]">
            <h3 className="text-lg font-black text-white uppercase tracking-tighter mb-8">Revenue Share</h3>
            <div className="h-64 flex items-center justify-center relative">
               <div className="w-48 h-48 rounded-full border-[12px] border-blue-600 border-t-purple-600 border-r-emerald-600" />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-black text-white">74%</p>
                  <p className="text-[10px] font-black text-gray-700 uppercase tracking-widest">Growth</p>
               </div>
            </div>
            <div className="mt-10 space-y-3">
               {[
                 { label: "Subscriptions", percent: 74, color: "bg-blue-600" },
                 { label: "Single Purchases", percent: 18, color: "bg-purple-600" },
                 { label: "Add-ons", percent: 8, color: "bg-emerald-600" },
               ].map((item) => (
                 <div key={item.label} className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-2 text-gray-500 font-bold uppercase tracking-widest">
                       <div className={`w-2 h-2 rounded-full ${item.color}`} />
                       <span>{item.label}</span>
                    </div>
                    <span className="text-white font-black">{item.percent}%</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
