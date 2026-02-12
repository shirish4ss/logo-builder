"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette, Type, Layout, Image as ImageIcon,
  Download, Share2, Sparkles, ChevronRight,
  ShieldCheck, CheckCircle2, Copy
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandingKitPage() {
  const colors = [
    { name: "Primary Blue", hex: "#3b82f6", rgb: "59, 130, 246", cmyk: "76, 47, 0, 4" },
    { name: "Deep Indigo", hex: "#1e1b4b", rgb: "30, 27, 75", cmyk: "60, 64, 0, 71" },
    { name: "Neutral Gray", hex: "#94a3b8", rgb: "148, 163, 184", cmyk: "20, 11, 0, 28" },
    { name: "Accent White", hex: "#f8fafc", rgb: "248, 250, 252", cmyk: "2, 0, 0, 1" },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Branding Kit</h1>
          <p className="text-gray-500 font-medium mt-1">Your brand&apos;s visual soul, synthesized by AI.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl border-white/10 text-white font-bold hover:bg-white/5">
            <Share2 size={18} className="mr-2" /> Share Guidelines
          </Button>
          <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/20">
            <Download size={18} className="mr-2" /> Download All Assets
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Logo Variations */}
        <div className="lg:col-span-2 space-y-8">
            <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-10">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Logo Lockups</h2>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-green-500/10 text-green-500 border border-green-500/20">Vector Ready</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video bg-white rounded-3xl flex items-center justify-center p-12 group relative overflow-hidden">
                        <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black">L</div>
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <Button size="sm" variant="secondary" className="h-10 font-bold rounded-lg">PNG</Button>
                            <Button size="sm" variant="secondary" className="h-10 font-bold rounded-lg">SVG</Button>
                        </div>
                    </div>
                    <div className="aspect-video bg-[#050505] border border-white/5 rounded-3xl flex items-center justify-center p-12 group relative overflow-hidden">
                        <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-black">L</div>
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <Button size="sm" variant="secondary" className="h-10 font-bold rounded-lg">PNG</Button>
                            <Button size="sm" variant="secondary" className="h-10 font-bold rounded-lg">SVG</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-10">
                <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Typography System</h2>
                <div className="space-y-10">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl font-black text-blue-500">Aa</div>
                        <div className="flex-1 space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-bold text-white">Plus Jakarta Sans</h3>
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Primary Heading</span>
                            </div>
                            <p className="text-gray-400 font-medium leading-relaxed">A modern, geometric sans-serif font family that conveys innovation and clarity.</p>
                            <div className="flex gap-4">
                                <span className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-black text-white/40 uppercase tracking-widest">ExtraBold 800</span>
                                <span className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-black text-white/40 uppercase tracking-widest">Bold 700</span>
                                <span className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-black text-white/40 uppercase tracking-widest">Medium 500</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Color Palette & Sidebar */}
        <div className="space-y-10">
            <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-10">
                <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Color Palette</h2>
                <div className="space-y-6">
                    {colors.map((color, i) => (
                        <div key={i} className="space-y-3">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl shadow-lg border border-white/10" style={{ backgroundColor: color.hex }}></div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-bold text-white">{color.name}</p>
                                        <button className="text-gray-500 hover:text-white transition-colors"><Copy size={14} /></button>
                                    </div>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">{color.hex}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-[0.2em] mb-1">RGB</p>
                                    <p className="text-[10px] text-white font-mono">{color.rgb}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                                    <p className="text-[8px] font-black text-gray-600 uppercase tracking-[0.2em] mb-1">CMYK</p>
                                    <p className="text-[10px] text-white font-mono">{color.cmyk}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-card border-white/5 bg-gradient-to-br from-blue-600/10 to-transparent rounded-[2.5rem] p-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6">
                    <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">AI Brand Voice</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">
                    &quot;Innovative, trustworthy, and forward-thinking. Your brand speaks to the pioneers of the digital age.&quot;
                </p>
                <Button className="w-full bg-white/5 border border-white/10 text-white font-bold h-12 rounded-xl hover:bg-white/10">
                    Generate Messaging
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
