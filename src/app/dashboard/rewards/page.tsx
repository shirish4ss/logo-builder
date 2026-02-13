"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Star, Award, Zap, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RewardsPage() {
  const rewards = [
    { title: "Premium Credits", amount: "50", description: "Use for high-res AI generations", icon: Zap, color: "text-yellow-400" },
    { title: "Brand Boost", amount: "15%", description: "Discount on professional branding kits", icon: TrendingUp, color: "text-green-400" },
    { title: "Early Access", amount: "Beta", description: "Access to new AI models before anyone else", icon: Star, color: "text-blue-400" },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-black text-white tracking-tight">Creator Rewards</h1>
        <p className="text-gray-500 font-medium mt-1">Unlock premium perks by being active in our community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.title}
            whileHover={{ y: -5 }}
            className="glass-card p-8 border-white/5 bg-white/[0.02] relative overflow-hidden group"
          >
             <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${reward.color} mb-6 group-hover:scale-110 transition-transform`}>
                <reward.icon size={24} />
             </div>
             <p className="text-3xl font-black text-white mb-2">{reward.amount}</p>
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{reward.title}</h3>
             <p className="text-xs text-gray-500 leading-relaxed mb-6">{reward.description}</p>
             <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-xs font-bold uppercase tracking-widest">Claim Now</Button>
          </motion.div>
        ))}
      </div>

      <div className="glass-card p-10 border-white/5 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[2.5rem]">
         <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-xl">
               <div className="flex items-center space-x-2 mb-4">
                  <Award className="text-blue-500" size={20} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Elite Creator Program</span>
               </div>
               <h2 className="text-3xl font-black text-white mb-4">Reach Level 10 to unlock White-label rights.</h2>
               <p className="text-gray-400 text-sm leading-relaxed">
                  Active creators get special permissions to remove our watermark and sell their designs directly to clients with full commercial rights.
               </p>
            </div>
            <div className="w-full md:w-64 space-y-4">
               <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-gray-500">Progress</span>
                  <span className="text-white">Level 4</span>
               </div>
               <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    className="h-full bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                  />
               </div>
               <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest text-center">2,450 XP until next level</p>
            </div>
         </div>
      </div>
    </div>
  );
}
