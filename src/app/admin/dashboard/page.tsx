"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users, CreditCard, BarChart3, Activity, ShieldCheck,
  Cpu, Terminal, MessageSquare, ArrowUpRight, Globe,
  Sparkles, Zap, Shield, TrendingUp, Layers
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Active Nodes", value: "1,248", icon: Cpu, color: "text-blue-400", change: "+12.5%", trend: "up" },
    { label: "Daily Revenue", value: "₹2.4M", icon: CreditCard, color: "text-emerald-400", change: "+8.2%", trend: "up" },
    { label: "AI Latency", value: "18ms", icon: Zap, color: "text-amber-400", change: "-4ms", trend: "down" },
    { label: "Global Users", value: "84.2K", icon: Globe, color: "text-indigo-400", change: "+1.2K", trend: "up" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
           <div className="flex items-center space-x-2 mb-2">
              <Shield className="text-blue-500" size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Neural Command Center v4.0</span>
           </div>
           <h1 className="text-4xl font-black text-white tracking-tight">System Overview</h1>
        </div>
        <div className="flex items-center space-x-4">
           <div className="glass-card px-4 py-2 border-white/5 bg-white/5 flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">All Systems Operational</span>
           </div>
           <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <Activity size={18} />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 border-white/5 bg-white/[0.02] relative overflow-hidden group"
          >
             <div className="flex justify-between items-start mb-6">
                <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                   <stat.icon size={20} />
                </div>
                <div className={`flex items-center space-x-1 text-[10px] font-black ${stat.trend === 'up' ? 'text-emerald-500' : 'text-amber-500'}`}>
                   {stat.trend === 'up' ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
                   <span>{stat.change}</span>
                </div>
             </div>
             <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
             <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>

             {/* Sparkline Mock */}
             <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/[0.02]">
                <motion.div
                   initial={{ width: 0 }}
                   animate={{ width: "70%" }}
                   className={`h-full ${stat.color} opacity-30 shadow-[0_0_10px_currentColor]`}
                />
             </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 glass-card p-8 border-white/5 bg-white/[0.02]">
            <div className="flex justify-between items-center mb-8">
               <h3 className="text-lg font-black text-white uppercase tracking-tighter">AI Processing Traffic</h3>
               <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 rounded-full bg-blue-500" />
                     <span className="text-[10px] font-bold text-gray-500 uppercase">Gemini 1.5</span>
                  </div>
                  <div className="flex items-center space-x-2">
                     <div className="w-2 h-2 rounded-full bg-purple-500" />
                     <span className="text-[10px] font-bold text-gray-500 uppercase">GPT-4o</span>
                  </div>
               </div>
            </div>
            <div className="h-64 w-full flex items-end gap-1.5 px-2">
               {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: `${Math.random() * 80 + 20}%` }}
                     transition={{ delay: i * 0.02, duration: 1 }}
                     className="flex-1 bg-gradient-to-t from-blue-600/20 via-blue-600/40 to-blue-500 rounded-t-sm"
                  />
               ))}
            </div>
            <div className="flex justify-between mt-6 text-[10px] font-bold text-gray-700 uppercase tracking-widest">
               <span>00:00 UTC</span>
               <span>06:00</span>
               <span>12:00</span>
               <span>18:00</span>
               <span>23:59</span>
            </div>
         </div>

         <div className="space-y-6">
            <div className="glass-card p-6 border-white/5 bg-white/[0.02]">
               <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Neural Ops</h3>
               <div className="space-y-4">
                  {[
                    { label: "Vector Processing", status: "Active", icon: Zap, color: "text-blue-400" },
                    { label: "SVG Sanitization", status: "Optimized", icon: ShieldCheck, color: "text-emerald-400" },
                    { label: "Raster-to-Vector", status: "Scaling", icon: Layers, color: "text-purple-400" },
                  ].map((op) => (
                    <div key={op.label} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-white/10 transition-all">
                       <div className="flex items-center space-x-3">
                          <op.icon size={16} className={op.color} />
                          <span className="text-xs font-bold text-white">{op.label}</span>
                       </div>
                       <span className="text-[9px] font-black uppercase text-gray-500">{op.status}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="glass-card p-6 border-white/5 bg-blue-600 shadow-xl shadow-blue-600/20 relative overflow-hidden group cursor-pointer">
               <div className="relative z-10">
                  <h3 className="text-lg font-black text-white mb-2 italic">Neural Lab</h3>
                  <p className="text-xs text-white/70 font-bold mb-6">Fine-tune logo generation prompts and model weights.</p>
                  <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Launch Experiment</button>
               </div>
               <Sparkles className="absolute -right-4 -bottom-4 text-white/10 group-hover:rotate-12 transition-transform duration-700" size={120} />
            </div>
         </div>
      </div>
    </div>
  );
}
