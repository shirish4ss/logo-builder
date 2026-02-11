"use client";

import { motion } from "framer-motion";
import { Download, Share2, Instagram, Facebook, Twitter, Linkedin, ImageIcon, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialMediaKitPage() {
  const platforms = [
    { name: "Instagram", icon: <Instagram size={20} />, sizes: ["Square Feed", "Reels / Story", "Profile Icon"] },
    { name: "X / Twitter", icon: <Twitter size={20} />, sizes: ["Header Banner", "Media Post", "Verified Avatar"] },
    { name: "LinkedIn", icon: <Linkedin size={20} />, sizes: ["Company Cover", "Pulse Header", "Square Logo"] },
    { name: "Facebook", icon: <Facebook size={20} />, sizes: ["Page Cover", "News Feed", "Group Header"] },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Social Presence</h1>
          <p className="text-gray-400 mt-2 text-lg font-medium">Platform-optimized assets, synthesized for your brand.</p>
        </div>
        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-11 font-bold transition-all">
          <Download className="mr-2" size={18} /> Download Master Kit
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform, idx) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card border-white/5 bg-white/[0.02] overflow-hidden group hover:bg-white/[0.04] transition-all"
          >
            <div className="p-8">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-8 italic">Ready to export</p>

              <div className="space-y-2">
                {platform.sizes.map((size) => (
                  <div key={size} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/item">
                    <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors">{size}</span>
                    <Download size={14} className="text-gray-600 group-hover/item:text-blue-400 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card p-12 border-white/5 bg-gradient-to-r from-blue-600/10 via-transparent to-transparent relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                <Globe size={18} />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">AI Post Engine</h2>
            </div>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Connect your social stack. Our neural networks will automatically generate on-brand content using your visual DNA and voice.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-14 font-bold shadow-2xl shadow-blue-600/40 transform hover:scale-105 transition-all">
            Connect & Automate
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-96 h-full bg-blue-500/5 blur-[120px] -z-10"></div>
      </div>
    </div>
  );
}
