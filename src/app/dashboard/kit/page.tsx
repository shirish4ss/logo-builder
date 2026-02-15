"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette, Type, Layout, Image as ImageIcon,
  Download, Share2, Sparkles, ChevronRight,
  ShieldCheck, CheckCircle2, Copy, FileText, Globe, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandingKitPage() {
  const colors = [
    { name: "Obsidian Core", hex: "#09090b", rgb: "9, 9, 11", cmyk: "75, 68, 67, 90" },
    { name: "Electric Primary", hex: "#3b82f6", rgb: "59, 130, 246", cmyk: "76, 47, 0, 4" },
    { name: "Stellar Indigo", hex: "#6366f1", rgb: "99, 102, 241", cmyk: "59, 58, 0, 5" },
    { name: "Neural White", hex: "#fafafa", rgb: "250, 250, 250", cmyk: "0, 0, 0, 2" },
  ];

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-12"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            Brand DNA Repository
          </div>
          <h1 className="text-6xl font-black text-foreground tracking-tighter uppercase italic leading-none">Branding <span className="text-primary">Kit.</span></h1>
          <p className="text-muted-foreground font-medium text-lg">Your brand&apos;s architectural guidelines and visual assets.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-border text-foreground font-black uppercase tracking-widest text-[10px] hover:bg-muted transition-all">
            <Share2 size={16} className="mr-3" /> Share Guidelines
          </Button>
          <Button className="h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20 transition-all">
            <Download size={16} className="mr-3" /> Export Ecosystem (ZIP)
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-10">
            {/* Logo Lockups Section */}
            <section className="glass-card border-border bg-card/50 rounded-[3rem] p-10 md:p-16">
                <div className="flex justify-between items-center mb-12">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Layout size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase italic">Visual Master</h2>
                    </div>
                    <div className="flex items-center space-x-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full border border-green-500/20">
                        <ShieldCheck size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Commercial Ready</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-[4/3] bg-white rounded-[2rem] flex flex-col items-center justify-center p-12 group relative overflow-hidden shadow-inner border border-border">
                        <div className="w-24 h-24 bg-primary rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl">L</div>
                        <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-black/40">Light Variation</p>
                        <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                            <div className="flex gap-2">
                                <Button size="sm" variant="secondary" className="h-10 px-6 font-black uppercase tracking-widest text-[10px] rounded-xl">PNG</Button>
                                <Button size="sm" variant="secondary" className="h-10 px-6 font-black uppercase tracking-widest text-[10px] rounded-xl">SVG</Button>
                            </div>
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">High-Res Master</span>
                        </div>
                    </div>
                    <div className="aspect-[4/3] bg-black rounded-[2rem] flex flex-col items-center justify-center p-12 group relative overflow-hidden border border-white/10">
                        <div className="w-24 h-24 bg-primary rounded-[1.5rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-primary/40">L</div>
                        <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-white/40">Dark Variation</p>
                        <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                            <div className="flex gap-2">
                                <Button size="sm" variant="secondary" className="h-10 px-6 font-black uppercase tracking-widest text-[10px] rounded-xl">PNG</Button>
                                <Button size="sm" variant="secondary" className="h-10 px-6 font-black uppercase tracking-widest text-[10px] rounded-xl">SVG</Button>
                            </div>
                            <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Alpha Channel</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography Section */}
            <section className="glass-card border-border bg-card/50 rounded-[3rem] p-10 md:p-16">
                <div className="flex items-center space-x-4 mb-12">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <Type size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-foreground tracking-tighter uppercase italic">Typography</h2>
                </div>

                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="w-32 h-32 rounded-3xl bg-muted border border-border flex items-center justify-center text-5xl font-black text-primary shadow-sm">Aa</div>
                        <div className="flex-1 space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-3xl font-black text-foreground uppercase italic tracking-tighter">Plus Jakarta Sans</h3>
                                <button className="text-primary hover:opacity-80 transition-opacity"><ExternalLink size={18} /></button>
                            </div>
                            <p className="text-muted-foreground font-medium text-lg leading-relaxed">A contemporary, geometric sans-serif that embodies clarity, precision, and modernism. Optimized for both digital interfaces and luxury print.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {["Thin 200", "Medium 500", "Bold 700", "Black 900"].map(w => (
                                    <div key={w} className="bg-muted px-4 py-3 rounded-xl border border-border">
                                        <p className="text-[10px] font-black text-foreground uppercase tracking-widest">{w}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-10">
            {/* Color Palette Card */}
            <section className="glass-card border-border bg-card/50 rounded-[3rem] p-10">
                <div className="flex items-center space-x-3 mb-10">
                    <Palette size={20} className="text-primary" />
                    <h2 className="text-xl font-black text-foreground tracking-tighter uppercase">Palette</h2>
                </div>

                <div className="space-y-8">
                    {colors.map((color, i) => (
                        <div key={i} className="group">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="w-16 h-16 rounded-2xl shadow-xl border border-border shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: color.hex }}></div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-black text-foreground truncate uppercase tracking-tight">{color.name}</p>
                                        <button className="text-muted-foreground hover:text-primary transition-colors p-1"><Copy size={14} /></button>
                                    </div>
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1">{color.hex}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-2xl bg-muted/50 border border-border">
                                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1">RGB</p>
                                    <p className="text-[10px] text-foreground font-bold">{color.rgb}</p>
                                </div>
                                <div className="p-3 rounded-2xl bg-muted/50 border border-border">
                                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest mb-1">CMYK</p>
                                    <p className="text-[10px] text-foreground font-bold">{color.cmyk}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Brand Voice AI Card */}
            <section className="glass-card border-primary/20 bg-primary/5 rounded-[3rem] p-10 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[60px]"></div>
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-8 shadow-xl shadow-primary/20">
                    <Sparkles size={28} />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter">Brand Voice</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-10">
                    &quot;Your brand resonates with structural integrity and digital fluidity. It speaks to a demographic that values efficiency, minimalism, and future-ready aesthetics.&quot;
                </p>
                <Button className="w-full bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] h-14 rounded-2xl hover:bg-primary/90 shadow-lg shadow-primary/20">
                    Edit Narrative <FileText size={14} className="ml-2" />
                </Button>
            </section>

            {/* Social Connection */}
            <section className="glass-card border-border bg-card/50 rounded-[3rem] p-10 flex flex-col items-center text-center">
                <Globe size={32} className="text-primary mb-6" />
                <h4 className="text-lg font-black uppercase tracking-tight mb-2">Social Master</h4>
                <p className="text-xs text-muted-foreground font-medium mb-8 leading-relaxed">Your assets are already optimized for 12+ social platforms.</p>
                <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/5 h-10">
                    Go to Social Kit <ChevronRight size={14} className="ml-2" />
                </Button>
            </section>
        </div>
      </div>
    </div>
  );
}
