"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Instagram, Twitter, Linkedin, Facebook,
  Download, Image as ImageIcon, Sparkles,
  Layout, Smartphone, Grid, Share2, Plus,
  Monitor, Send, Target, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialMediaKitPage() {
  const platforms = [
    {
        name: "Instagram",
        icon: Instagram,
        color: "text-pink-500 bg-pink-500/10",
        assets: ["Profile Master", "Feed Concept", "Story Overlay"],
        count: "12 Assets"
    },
    {
        name: "X Space",
        icon: Twitter,
        color: "text-foreground bg-foreground/10",
        assets: ["Avi Master", "Banner 4K", "Post Cards"],
        count: "8 Assets"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        color: "text-blue-500 bg-blue-500/10",
        assets: ["Company Identity", "Executive Cover", "Article Template"],
        count: "10 Assets"
    },
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
            Asset Distribution Hub
          </div>
          <h1 className="text-6xl font-black text-foreground tracking-tighter uppercase italic leading-none">Social <span className="text-primary">Kit.</span></h1>
          <p className="text-muted-foreground font-medium text-lg">Optimized visual clusters for every digital touchpoint.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-border text-foreground font-black uppercase tracking-widest text-[10px] hover:bg-muted transition-all">
            <Smartphone size={16} className="mr-3" /> Mobile Preview
          </Button>
          <Button className="h-14 px-10 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20 transition-all">
            <Download size={16} className="mr-3" /> Export Social ZIP
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card border-border bg-card/50 rounded-[2.5rem] p-10 group hover:border-primary/30 transition-all shadow-xl hover:shadow-primary/5"
          >
            <div className="flex justify-between items-start mb-12">
                <div className={`p-5 rounded-2xl ${p.color} shadow-inner`}>
                    <p.icon size={28} />
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{p.count}</p>
                    <div className="h-1 w-12 bg-primary/20 rounded-full mt-1 overflow-hidden">
                        <div className="h-full w-full bg-primary"></div>
                    </div>
                </div>
            </div>

            <h3 className="text-2xl font-black text-foreground mb-8 tracking-tighter uppercase italic">{p.name} Suite</h3>

            <div className="space-y-4 mb-10">
                {p.assets.map((asset, j) => (
                    <div key={j} className="flex items-center justify-between p-5 rounded-2xl bg-muted/30 border border-border group/asset hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-4">
                            <ImageIcon size={18} className="text-muted-foreground group-hover/asset:text-primary transition-colors" />
                            <span className="text-sm font-bold text-muted-foreground group-hover/asset:text-foreground transition-colors">{asset}</span>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover/asset:opacity-100 transition-all transform translate-x-2 group-hover/asset:translate-x-0">Export</button>
                    </div>
                ))}
            </div>

            <Button variant="ghost" className="w-full h-12 rounded-xl text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/5">
                Manage Platform Assets <Plus size={14} className="ml-2" />
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card border-primary/20 bg-primary/[0.02] rounded-[3.5rem] p-12 md:p-20 overflow-hidden relative"
      >
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-10">
                <div className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
                    <Sparkles size={14} className="mr-2 animate-pulse" /> Neural Content Agent
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-none uppercase italic">Automate your <br /><span className="text-primary">narrative.</span></h2>
                <p className="text-muted-foreground font-medium text-xl leading-relaxed max-w-xl">
                    Our AI synthesizes daily post captions, trending hashtags, and visual compositions that align perfectly with your brand DNA.
                </p>
                <div className="flex flex-wrap gap-6 pt-4">
                    <Button className="h-16 px-12 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[10px] hover:opacity-90 transition-all shadow-xl shadow-primary/20">
                        Start AI Generation <Send size={14} className="ml-3" />
                    </Button>
                    <Button variant="outline" className="h-16 px-12 rounded-2xl border-border text-foreground font-black uppercase tracking-widest text-[10px] hover:bg-muted">
                        Strategy Planner
                    </Button>
                </div>
            </div>

            <div className="flex-1 w-full relative">
                <div className="grid grid-cols-2 gap-6 p-4">
                    <div className="aspect-square bg-muted rounded-[2rem] border border-border p-8 flex flex-col justify-between group overflow-hidden relative">
                        <Target className="text-primary group-hover:scale-110 transition-transform" size={40} />
                        <div className="absolute top-1/2 right-[-20%] w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Target Audience Match: 98%</p>
                    </div>
                    <div className="aspect-square bg-primary rounded-[2rem] p-8 flex flex-col justify-between mt-12 shadow-2xl shadow-primary/20">
                        <Zap className="text-primary-foreground" size={40} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary-foreground/60">Viral Potential: High</p>
                    </div>
                </div>

                {/* Decorative floating stats */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-10 right-10 bg-card p-4 rounded-2xl border border-border shadow-2xl flex items-center space-x-4"
                >
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold text-xs">+24%</div>
                    <div>
                        <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground">Reach Momentum</p>
                        <p className="text-xs font-black">Trending Now</p>
                    </div>
                </motion.div>
            </div>
         </div>
      </motion.section>
    </div>
  );
}
