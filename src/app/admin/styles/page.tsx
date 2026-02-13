"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette, Plus, MoreHorizontal, Layout,
  Sparkles, ShieldCheck, Heart, Grid,
  Maximize2, Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AIStylesAdminPage() {
  const styles = [
    { name: "Minimalist", author: "System", usages: "42K", status: "Premium", color: "bg-white/10" },
    { name: "Cyberpunk", author: "Neural Lab", usages: "12K", status: "Trending", color: "bg-blue-600/20" },
    { name: "Hand-Drawn", author: "Studio Team", usages: "8K", status: "New", color: "bg-emerald-600/20" },
    { name: "Modern Sans", author: "System", usages: "25K", status: "Core", color: "bg-purple-600/20" },
    { name: "Abstract Geometry", author: "Neural Lab", usages: "18K", status: "Premium", color: "bg-amber-600/20" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight italic">Design Styles</h1>
          <p className="text-gray-500 font-medium mt-1">Manage the visual frameworks used by the AI engine.</p>
        </div>
        <Button className="h-12 bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] px-8 rounded-xl hover:bg-blue-500 shadow-xl shadow-blue-600/20">
           Create New Style
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {styles.map((style, i) => (
           <div key={i} className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-8 group overflow-hidden relative">
              <div className="flex justify-between items-start mb-10">
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${style.color} group-hover:scale-110 transition-transform`}>
                    <Palette size={28} className="text-white" />
                 </div>
                 <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-700 hover:text-white hover:bg-white/5 rounded-lg"><Maximize2 size={16} /></Button>
                    <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-700 hover:text-white hover:bg-white/5 rounded-lg"><MoreHorizontal size={16} /></Button>
                 </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-1 tracking-tighter">{style.name}</h3>
              <p className="text-[10px] font-bold text-gray-700 uppercase tracking-widest mb-10">By {style.author}</p>

              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                 <div className="flex items-center space-x-2">
                    <Heart className="text-red-500" size={14} />
                    <span className="text-xs font-black text-white">{style.usages}</span>
                    <span className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">Usages</span>
                 </div>
                 <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-500">{style.status}</span>
              </div>

              {/* Style DNA Mockup */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/5 to-transparent -z-10 group-hover:scale-150 transition-transform duration-700"></div>
           </div>
         ))}
      </div>
    </div>
  );
}
