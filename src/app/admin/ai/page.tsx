"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Cpu, Activity, Zap, ShieldCheck,
  BarChart3, RefreshCw, AlertCircle,
  TrendingUp, Globe, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIModelsAdminPage() {
  const models = [
    { name: "Gemini 1.5 Flash", provider: "Google", status: "Operational", latency: "14ms", throughput: "4.2K req/min", color: "text-blue-400" },
    { name: "GPT-4o", provider: "OpenAI", status: "Operational", latency: "42ms", throughput: "1.8K req/min", color: "text-purple-400" },
    { name: "Claude 3.5 Sonnet", provider: "Anthropic", status: "High Load", latency: "68ms", throughput: "2.4K req/min", color: "text-amber-400" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight italic">AI Neural Ops</h1>
          <p className="text-gray-500 font-medium mt-1">Monitor neural model health and request distribution.</p>
        </div>
        <Button className="h-12 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[10px] px-8 rounded-xl hover:bg-white/10">
           Refresh Nodes
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {models.map((model) => (
           <div key={model.name} className="glass-card p-8 border-white/5 bg-white/[0.02] group">
              <div className="flex justify-between items-start mb-8">
                 <div className={`p-4 rounded-2xl bg-white/5 ${model.color}`}>
                    <Cpu size={24} />
                 </div>
                 <div className="flex items-center space-x-1 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{model.status}</span>
                 </div>
              </div>
              <h3 className="text-lg font-black text-white mb-1 tracking-tight">{model.name}</h3>
              <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.2em] mb-8">{model.provider}</p>

              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                 <div>
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Avg Latency</p>
                    <p className="text-sm font-black text-white">{model.latency}</p>
                 </div>
                 <div>
                    <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Throughput</p>
                    <p className="text-sm font-black text-white">{model.throughput}</p>
                 </div>
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="glass-card p-10 border-white/5 bg-white/[0.02]">
            <h3 className="text-xl font-black text-white mb-10 tracking-tight">Request Distribution</h3>
            <div className="space-y-8">
               {[
                 { label: "Logo Generation", count: "4,240", percent: 65, color: "bg-blue-500" },
                 { label: "Vectorization", count: "1,102", percent: 20, color: "bg-purple-500" },
                 { label: "AI Refinement", count: "542", percent: 15, color: "bg-amber-500" },
               ].map((item) => (
                 <div key={item.label} className="space-y-3">
                    <div className="flex justify-between text-xs">
                       <span className="text-gray-500 font-bold uppercase tracking-widest">{item.label}</span>
                       <span className="text-white font-black">{item.count} reqs</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div
                         initial={{ width: 0 }}
                         animate={{ width: `${item.percent}%` }}
                         className={`h-full ${item.color}`}
                       />
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="glass-card p-10 border-white/5 bg-gradient-to-br from-red-600/10 to-transparent">
            <div className="flex items-center space-x-3 mb-6">
               <AlertCircle className="text-red-500" />
               <h3 className="text-xl font-black text-white uppercase tracking-tighter">Neural Failures</h3>
            </div>
            <div className="space-y-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl">
                    <div className="flex items-center space-x-4">
                       <div className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Error 503</div>
                       <p className="text-xs text-gray-400 font-medium">OpenAI rate limit exceeded for GPT-4o-mini</p>
                    </div>
                    <span className="text-[10px] text-gray-700 font-bold">2 mins ago</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
