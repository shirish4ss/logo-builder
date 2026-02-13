"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Copy, Share2, DollarSign, Gift, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReferralsPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Refer & Earn</h1>
          <p className="text-gray-500 font-medium mt-1">Invite your friends and get $20 for every successful signup.</p>
        </div>
        <div className="flex bg-white/5 p-2 rounded-2xl border border-white/5">
           <div className="px-6 py-2 border-r border-white/5">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Total Earned</p>
              <p className="text-xl font-black text-white">$420.00</p>
           </div>
           <div className="px-6 py-2">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Active Referrals</p>
              <p className="text-xl font-black text-white">12</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="glass-card p-10 border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-black text-white mb-6">Your Referral Link</h3>
            <div className="flex items-center space-x-4 mb-8">
               <div className="flex-1 bg-black/40 border border-white/5 rounded-xl px-6 py-4 text-gray-400 text-sm font-medium font-mono">
                  https://logoai.com/ref/johndoe77
               </div>
               <Button className="h-14 w-14 rounded-xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20">
                  <Copy size={20} />
               </Button>
            </div>
            <div className="flex gap-4">
               <Button variant="outline" className="flex-1 border-white/5 hover:bg-white/5 h-12 text-xs font-bold uppercase tracking-widest">
                  <Share2 size={16} className="mr-2" /> Share on X
               </Button>
               <Button variant="outline" className="flex-1 border-white/5 hover:bg-white/5 h-12 text-xs font-bold uppercase tracking-widest">
                  <Users size={16} className="mr-2" /> Invite via Email
               </Button>
            </div>
         </div>

         <div className="space-y-4">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-4">How it works</h3>
            {[
              { title: "Share Link", desc: "Send your unique referral link to your network.", icon: Share2 },
              { title: "Friend Joins", desc: "They get 10% off on their first Pro purchase.", icon: Gift },
              { title: "You Get Paid", desc: "We credit $20 to your wallet immediately.", icon: DollarSign },
            ].map((step, i) => (
              <div key={i} className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-white/5 transition-all group">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <step.icon size={20} />
                 </div>
                 <div>
                    <h4 className="text-sm font-black text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                 </div>
                 <CheckCircle2 className="ml-auto text-white/5" size={16} />
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
