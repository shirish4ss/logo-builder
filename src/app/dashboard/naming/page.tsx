"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Search, Copy, Check,
  ArrowRight, Globe, ShieldCheck,
  Zap, RefreshCw, Star, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NamingLabPage() {
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  const generateNames = () => {
    setLoading(true);
    setTimeout(() => {
      setNames([
        "Nexusly", "Aevum", "Vintra", "Orbitar", "Luminox",
        "Zenithly", "Novastream", "Fluxis", "Ethera", "Synthetix"
      ]);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-white tracking-tight">AI Naming Lab</h1>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto">Generate high-converting, brandable names that define the future of your industry.</p>
      </div>

      <div className="glass-card border-white/5 bg-white/[0.02] rounded-[3rem] p-10 space-y-8">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600" size={20} />
                <input
                    type="text"
                    placeholder="Describe your brand in a few keywords (e.g. tech, fast, minimal)..."
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="w-full h-16 bg-black/40 border border-white/10 rounded-2xl pl-16 pr-6 text-white focus:outline-none focus:border-blue-500 transition-all font-medium"
                />
            </div>
            <Button
                onClick={generateNames}
                disabled={loading}
                className="h-16 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-600/30"
            >
                {loading ? <RefreshCw className="animate-spin mr-2" /> : <Sparkles className="mr-2" />}
                Generate Names
            </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
            {["Short & Punchy", "Abstract", "Compound", "Futuristic", "Latin-inspired"].map((cat, i) => (
                <button key={i} className="px-5 py-2 rounded-full border border-white/5 bg-white/5 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white hover:border-white/20 transition-all">
                    {cat}
                </button>
            ))}
        </div>
      </div>

      <AnimatePresence>
        {names.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {names.map((name, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card border-white/5 bg-white/[0.02] p-8 rounded-[2rem] text-center group cursor-pointer relative"
                    onClick={() => copyToClipboard(name)}
                >
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-500 transition-colors">{name}</h3>
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">Available</span>
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                    </div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        {copied === name ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-gray-500" />}
                    </div>
                </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
                <Globe size={24} />
            </div>
            <div>
                <h4 className="text-white font-bold tracking-tight">Domain Checker</h4>
                <p className="text-gray-500 text-sm font-medium">Instantly check if .com is available for your names.</p>
            </div>
            <button className="ml-auto text-blue-500 hover:text-blue-400 transition-colors"><ArrowRight size={20} /></button>
         </div>
         <div className="p-8 bg-purple-600/5 border border-purple-500/10 rounded-[2.5rem] flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-500">
                <ShieldCheck size={24} />
            </div>
            <div>
                <h4 className="text-white font-bold tracking-tight">Trademark Scan</h4>
                <p className="text-gray-500 text-sm font-medium">Verify if your brand name is legally safe to use.</p>
            </div>
            <button className="ml-auto text-purple-500 hover:text-purple-400 transition-colors"><ArrowRight size={20} /></button>
         </div>
      </div>
    </div>
  );
}
