"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard, TrendingUp, Zap, Globe,
  ArrowUpRight, ArrowDownRight, Package,
  Settings, CheckCircle2, MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubscriptionsAdminPage() {
  const plans = [
    { name: "Free", price: "0", users: "6,240", growth: "+15%", color: "text-gray-400" },
    { name: "Pro", price: "1,499", users: "2,102", growth: "+24%", color: "text-blue-500" },
    { name: "Enterprise", price: "Custom", users: "156", growth: "+4%", color: "text-purple-500" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Financial Ops</h1>
          <p className="text-gray-500 font-medium mt-1">Manage global subscription packages and revenue flow.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 bg-white/[0.02] text-white font-bold px-6 rounded-xl hover:bg-white/5">
              <Package size={18} className="mr-2" /> Global Plans
           </Button>
           <Button className="h-12 bg-white text-black font-black uppercase tracking-widest text-[10px] px-8 rounded-xl hover:bg-gray-200 shadow-xl shadow-white/5">
              Add New Package
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {plans.map((plan) => (
           <div key={plan.name} className="glass-card p-8 border-white/5 bg-white/[0.02] relative group">
              <div className="flex justify-between items-start mb-8">
                 <div className={`p-4 rounded-2xl bg-white/5 ${plan.color}`}>
                    <CreditCard size={24} />
                 </div>
                 <div className="flex items-center space-x-1 text-emerald-500 text-[10px] font-black uppercase">
                    <TrendingUp size={12} />
                    <span>{plan.growth}</span>
                 </div>
              </div>
              <h3 className="text-lg font-black text-white mb-2">{plan.name} Plan</h3>
              <div className="flex items-baseline space-x-1 mb-8">
                 <span className="text-3xl font-black text-white">₹{plan.price}</span>
                 <span className="text-xs text-gray-600 font-bold uppercase">/mo</span>
              </div>
              <div className="space-y-4 pt-8 border-t border-white/5">
                 <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-bold uppercase tracking-widest">Active Subscribers</span>
                    <span className="text-white font-black">{plan.users}</span>
                 </div>
                 <Button variant="ghost" className="w-full justify-between h-10 border border-white/5 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg px-4">
                    <span className="text-[10px] font-black uppercase tracking-widest">Manage Features</span>
                    <Settings size={14} />
                 </Button>
              </div>
           </div>
         ))}
      </div>

      <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2rem] p-10">
         <h3 className="text-xl font-black text-white mb-10 tracking-tight">Recent Transactions</h3>
         <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-white/10 transition-all group">
                  <div className="flex items-center space-x-6">
                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500">
                        <CheckCircle2 size={20} />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-white">Payment Received</p>
                        <p className="text-xs text-gray-600">Inv #882{i} • Razorpay</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-10">
                     <div className="text-right">
                        <p className="text-sm font-black text-white">₹1,499.00</p>
                        <p className="text-[10px] text-gray-700 uppercase font-black tracking-widest">Completed</p>
                     </div>
                     <button className="text-gray-700 hover:text-white transition-colors"><MoreHorizontal size={20} /></button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
}
