"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users, CreditCard, BarChart3, Activity, ShieldCheck,
  Cpu, Terminal, MessageSquare, ArrowUpRight, Globe,
  Sparkles, Zap, Shield, TrendingUp, Layers, Server, Search
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Neural Nodes", value: "1,248", icon: Cpu, color: "text-blue-500", change: "+12.5%", trend: "up" },
    { label: "Global Revenue", value: "₹2.4M", icon: CreditCard, color: "text-green-500", change: "+8.2%", trend: "up" },
    { label: "Avg Latency", value: "18ms", icon: Zap, color: "text-amber-500", change: "-4ms", trend: "down" },
    { label: "Total Creators", value: "84.2K", icon: Users, color: "text-purple-500", change: "+1.2K", trend: "up" },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-12"
      >
        <div className="space-y-4">
           <div className="flex items-center space-x-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Shield size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Command Terminal v5.2</span>
           </div>
           <h1 className="text-6xl font-black text-foreground tracking-tighter uppercase italic leading-none">System <span className="text-primary">Intelligence.</span></h1>
        </div>

        <div className="flex items-center space-x-4">
           <div className="bg-card border border-border px-6 py-3 rounded-2xl flex items-center space-x-4 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-[10px] font-black text-foreground uppercase tracking-widest">Global Clusters Online</span>
           </div>
           <button className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center text-foreground hover:bg-muted/80 transition-all shadow-sm">
              <Activity size={20} />
           </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 border-border bg-card/50 rounded-[2.5rem] relative overflow-hidden group hover:scale-[1.02] transition-all"
          >
             <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-2xl bg-muted flex items-center justify-center ${stat.color} group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner`}>
                   <stat.icon size={24} />
                </div>
                <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-black ${stat.trend === 'up' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>
                   {stat.trend === 'up' ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
                   <span>{stat.change}</span>
                </div>
             </div>
             <p className="text-4xl font-black text-foreground mb-2 tracking-tighter">{stat.value}</p>
             <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>

             {/* Decorative indicator */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-muted">
                <motion.div
                   initial={{ width: 0 }}
                   animate={{ width: "65%" }}
                   className={`h-full ${stat.color.replace('text', 'bg')} opacity-40 shadow-[0_0_15px_currentColor]`}
                />
             </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 glass-card p-10 md:p-12 border-border bg-card/50 rounded-[3rem]"
         >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
               <div>
                <h3 className="text-2xl font-black text-foreground uppercase tracking-tight italic mb-1">Neural Processing Traffic</h3>
                <p className="text-muted-foreground text-xs font-medium">Real-time AI model utilization across global clusters.</p>
               </div>
               <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                     <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                     <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Inference</span>
                  </div>
                  <div className="flex items-center space-x-3">
                     <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                     <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Training</span>
                  </div>
               </div>
            </div>

            <div className="h-72 w-full flex items-end gap-2 px-2">
               {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: `${Math.random() * 80 + 20}%` }}
                     transition={{ delay: i * 0.01, duration: 1.5, ease: "easeOut" }}
                     className="flex-1 bg-gradient-to-t from-primary/10 via-primary/50 to-primary rounded-t-lg shadow-sm"
                  />
               ))}
            </div>

            <div className="flex justify-between mt-8 pt-8 border-t border-border text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
               <span>00:00 UTC</span>
               <span>08:00</span>
               <span>16:00</span>
               <span>CURRENT</span>
            </div>
         </motion.div>

         <div className="lg:col-span-4 space-y-8">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-8 border-border bg-card/50 rounded-[2.5rem]"
            >
               <h3 className="text-[10px] font-black text-foreground uppercase tracking-[0.3em] mb-10">Active Neural Subsystems</h3>
               <div className="space-y-6">
                  {[
                    { label: "Vector Synthesis", status: "Active", icon: Zap, color: "text-blue-500" },
                    { label: "SVG Sanitizer", status: "Nominal", icon: ShieldCheck, color: "text-green-500" },
                    { label: "Model Training", status: "Active", icon: BrainCircuit, color: "text-purple-500" },
                    { label: "Edge Relay", status: "Optimal", icon: Server, color: "text-amber-500" },
                  ].map((op) => (
                    <div key={op.label} className="flex items-center justify-between group">
                       <div className="flex items-center space-x-4">
                          <div className={`p-2.5 rounded-xl bg-muted border border-border ${op.color} group-hover:bg-primary group-hover:text-primary-foreground transition-all`}>
                            <op.icon size={16} />
                          </div>
                          <span className="text-xs font-bold text-foreground">{op.label}</span>
                       </div>
                       <span className="text-[9px] font-black uppercase text-muted-foreground bg-muted px-2 py-1 rounded-md">{op.status}</span>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-10 border-primary/20 bg-primary rounded-[2.5rem] relative overflow-hidden group cursor-pointer shadow-2xl shadow-primary/20"
            >
               <div className="relative z-10">
                  <h3 className="text-3xl font-black text-primary-foreground mb-4 uppercase italic tracking-tighter">Neural Lab</h3>
                  <p className="text-xs text-primary-foreground/70 font-bold mb-8 leading-relaxed">Synthesize new prompt architectures and optimize model inference parameters.</p>
                  <button className="w-full py-4 bg-primary-foreground text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Deploy Experiment</button>
               </div>
               <Sparkles className="absolute -right-8 -bottom-8 text-primary-foreground/10 group-hover:rotate-12 transition-transform duration-1000" size={180} />
            </motion.div>
         </div>
      </div>
    </div>
  );
}

// Simple BrainCircuit fallback if not available
const BrainCircuit = ({ size, className }: any) => <Cpu size={size} className={className} />;
