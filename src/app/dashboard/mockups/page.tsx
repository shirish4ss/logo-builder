"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box, Smartphone, Layout,
  ChevronRight, Download, Share2,
  Sparkles, Camera, Monitor, Smartphone as Phone,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MockupsPage() {
  const [selectedMockup, setSelectedMockup] = useState(0);

  const mockups = [
    { name: "Premium iPhone 15", category: "Mobile", image: "https://placehold.co/600x800/0a0a0a/3b82f6?text=iPhone+Mockup" },
    { name: "MacBook Pro M3", category: "Desktop", image: "https://placehold.co/800x600/0a0a0a/3b82f6?text=MacBook+Mockup" },
    { name: "Business Card", category: "Print", image: "https://placehold.co/800x500/0a0a0a/3b82f6?text=Business+Card+Mockup" },
    { name: "Apparel T-Shirt", category: "Apparel", image: "https://placehold.co/600x800/0a0a0a/3b82f6?text=T-Shirt+Mockup" },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">3D Mockup Studio</h1>
          <p className="text-gray-500 font-medium mt-1">Visualize your brand identity on real-world products.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl border-white/10 text-white font-bold hover:bg-white/5">
            <Camera size={18} className="mr-2" /> Custom Angle
          </Button>
          <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-600/20">
            <Download size={18} className="mr-2" /> Export 4K Render
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Mockup Selection Sidebar */}
        <div className="lg:col-span-1 space-y-4">
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest px-4 mb-4">Categories</p>
            {["All", "Mobile", "Desktop", "Print", "Apparel"].map((cat, i) => (
                <button
                    key={i}
                    className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all ${i === 0 ? 'bg-white/5 text-white border border-white/10 shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                >
                    <span className="text-sm font-bold">{cat}</span>
                    <ChevronRight size={14} className="opacity-40" />
                </button>
            ))}
        </div>

        {/* Main Preview */}
        <div className="lg:col-span-3 space-y-8">
            <div className="glass-card border-white/5 bg-[#0a0a0a] rounded-[3rem] aspect-[16/10] flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>

                {/* Simulated 3D Scene */}
                <div className="relative w-full h-full p-20 flex items-center justify-center">
                    <motion.div
                        animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, 5, -5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full max-w-lg aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-950 rounded-[2rem] shadow-2xl border border-white/10 relative overflow-hidden flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-white/5 opacity-50" />
                        <div className="w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl font-black shadow-2xl relative z-10 group-hover:scale-110 transition-transform">
                            L
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20">
                           <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Product Reveal V1.2</p>
                           <div className="flex gap-2">
                              <div className="w-2 h-2 rounded-full bg-blue-500" />
                              <div className="w-2 h-2 rounded-full bg-gray-700" />
                           </div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute top-8 right-8 flex flex-col gap-2">
                    <Button size="icon" variant="secondary" className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white"><Box size={20} /></Button>
                    <Button size="icon" variant="secondary" className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white"><Smartphone size={20} /></Button>
                    <Button size="icon" variant="secondary" className="w-12 h-12 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-white"><Monitor size={20} /></Button>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Lighting Mode</span>
                    <div className="flex gap-1">
                       {["Studio", "Natural", "Cinematic"].map((m, i) => (
                           <button key={i} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${i === 0 ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}>{m}</button>
                       ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mockups.map((m, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedMockup(i)}
                        className={`aspect-square rounded-[2rem] border transition-all cursor-pointer overflow-hidden relative group ${selectedMockup === i ? 'border-blue-500 shadow-xl' : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}
                    >
                        <img src={m.image} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" alt={m.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end">
                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{m.category}</p>
                            <h4 className="text-sm font-bold text-white">{m.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
