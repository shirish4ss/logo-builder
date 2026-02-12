"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram, Twitter, Linkedin, Facebook,
  Download, Image as ImageIcon, Sparkles,
  Layout, Smartphone, Grid, Share2, Plus,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialMediaKitPage() {
  const platforms = [
    { name: "Instagram", icon: Instagram, color: "text-pink-500", assets: ["Profile Picture", "Post Template", "Story Overlay"] },
    { name: "X (Twitter)", icon: Twitter, color: "text-white", assets: ["Profile Icon", "Header Cover", "Post Card"] },
    { name: "LinkedIn", icon: Linkedin, color: "text-blue-500", assets: ["Company Logo", "Banner Design", "Article Thumbnail"] },
  ];

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Social Media Kit</h1>
          <p className="text-gray-500 font-medium mt-1">Ready-to-post assets for every platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl border-white/10 text-white font-bold hover:bg-white/5">
            <Smartphone size={18} className="mr-2" /> App Preview
          </Button>
          <Button className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-600/20">
            <Download size={18} className="mr-2" /> Export Social ZIP
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {platforms.map((p, i) => (
          <div key={i} className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-8 group hover:border-blue-500/30 transition-all">
            <div className="flex justify-between items-start mb-10">
                <div className={`p-4 rounded-2xl bg-white/5 ${p.color}`}>
                    <p.icon size={28} />
                </div>
                <Button variant="ghost" size="icon" className="w-10 h-10 text-gray-500 hover:text-white rounded-xl bg-white/5"><Plus size={18} /></Button>
            </div>
            <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{p.name} Assets</h3>
            <div className="space-y-4 mb-10">
                {p.assets.map((asset, j) => (
                    <div key={j} className="flex items-center justify-between p-4 rounded-2xl bg-black/40 border border-white/5 group/asset hover:border-blue-500/20 transition-all">
                        <div className="flex items-center gap-3">
                            <ImageIcon size={16} className="text-gray-500 group-hover/asset:text-blue-400" />
                            <span className="text-sm font-bold text-gray-400 group-hover/asset:text-white transition-colors">{asset}</span>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-blue-500 opacity-0 group-hover/asset:opacity-100 transition-opacity">Download</button>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card border-white/5 bg-white/[0.02] rounded-[3rem] p-12 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] -z-10"></div>
         <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                    <Sparkles size={12} className="mr-2" /> AI Content Generator
                </div>
                <h2 className="text-4xl font-black text-white tracking-tight leading-tight">Generate daily posts <br />inspired by your brand.</h2>
                <p className="text-gray-500 font-medium text-lg leading-relaxed">
                    Our AI understands your brand voice and creates post captions, hashtags, and visual layouts specifically for your target audience.
                </p>
                <div className="flex gap-4">
                    <Button className="h-14 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-transform hover:scale-105">
                        Start Generating
                    </Button>
                    <Button variant="outline" className="h-14 px-10 rounded-2xl border-white/10 text-white font-bold text-xs">
                        View Sample Schedule
                    </Button>
                </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center relative group">
                    <Grid size={40} className="text-white/10 group-hover:text-blue-500 transition-colors" />
                    <div className="absolute bottom-4 left-4 right-4 h-2 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-blue-600"></div>
                    </div>
                </div>
                <div className="aspect-square bg-white/5 rounded-3xl border border-white/5 flex items-center justify-center mt-8 relative group">
                    <Share2 size={40} className="text-white/10 group-hover:text-purple-500 transition-colors" />
                </div>
            </div>
         </div>
      </div>
    </div>
  );
}
