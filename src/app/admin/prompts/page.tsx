"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal, Sparkles, Save, Play, RefreshCw,
  History, Settings, Code, Copy, AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromptManagementPage() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight italic">Prompt Engineering Lab</h1>
          <p className="text-gray-500 font-medium mt-1">Refine the neural instructions for logo generation.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-12 border-white/5 bg-white/[0.02] text-white font-bold px-6 rounded-xl hover:bg-white/5">
              <History size={18} className="mr-2" /> Version History
           </Button>
           <Button className="h-12 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] px-8 rounded-xl hover:bg-blue-500 shadow-xl shadow-blue-600/20">
              Deploy to Production
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            <div className="glass-card border-white/5 bg-black/40 rounded-[2rem] overflow-hidden">
               <div className="bg-white/[0.02] px-8 py-4 border-b border-white/5 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                     <Code size={16} className="text-blue-500" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Instructions (GPT-4o)</span>
                  </div>
                  <div className="flex space-x-2">
                     <div className="w-2 h-2 rounded-full bg-red-500" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500" />
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
               </div>
               <div className="p-8">
                  <textarea
                    className="w-full h-96 bg-transparent border-none focus:outline-none text-blue-100 font-mono text-sm leading-relaxed resize-none"
                    spellCheck="false"
                    defaultValue={`You are a professional logo designer AI.
Analyze the business name: {{name}}
Industry: {{industry}}
Style: {{style}}

Generate a minimal, modern vector logo path.
Respond ONLY with a valid SVG path data string.
Avoid complex gradients. Use flat colors.`}
                  />
               </div>
               <div className="bg-white/[0.02] px-8 py-4 border-t border-white/5 flex justify-end items-center space-x-4">
                  <span className="text-[10px] font-bold text-gray-700 uppercase">Last modified: 42 mins ago by Admin</span>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white"><Copy size={14} /></Button>
               </div>
            </div>

            <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2rem] p-8">
               <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Model Parameters</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { label: "Temperature", value: "0.7", desc: "Controls creativity vs consistency" },
                    { label: "Top P", value: "1.0", desc: "Nucleus sampling threshold" },
                    { label: "Frequency Penalty", value: "0.0", desc: "Reduces repetitive tokens" },
                    { label: "Max Tokens", value: "2048", desc: "Maximum output length" },
                  ].map((param) => (
                    <div key={param.label} className="space-y-3">
                       <div className="flex justify-between">
                          <span className="text-xs font-black text-gray-500 uppercase tracking-widest">{param.label}</span>
                          <span className="text-xs font-black text-blue-400">{param.value}</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600" style={{ width: '60%' }} />
                       </div>
                       <p className="text-[10px] text-gray-700 font-medium">{param.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="space-y-6">
            <div className="glass-card p-6 border-white/5 bg-white/[0.02]">
               <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] mb-6">Neural Tokens</h3>
               <div className="space-y-3">
                  {['{{name}}', '{{industry}}', '{{style}}', '{{colors}}', '{{target_audience}}'].map((token) => (
                     <div key={token} className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 group hover:border-blue-500/20 transition-all">
                        <code className="text-[10px] font-black text-blue-400">{token}</code>
                        <span className="text-[9px] font-bold text-gray-700 uppercase">Variable</span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="glass-card p-8 border-white/5 bg-blue-600/10 rounded-[2rem] border-dashed">
               <div className="text-center">
                  <AlertTriangle className="mx-auto text-blue-500 mb-4" />
                  <h4 className="text-sm font-black text-white mb-2 uppercase tracking-widest">Safe Mode Active</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-bold">
                     All prompt changes are first deployed to the Staging Environment for automated unit testing.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
