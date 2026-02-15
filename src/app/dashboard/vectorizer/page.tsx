"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap, Upload, ImageIcon,
  ArrowRight, CheckCircle2,
  RefreshCw, Sliders, Download,
  Layers, MousePointer2, Spline, Maximize
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VectorizerPage() {
  const [status, setStatus] = useState<"idle" | "uploading" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const startVectorize = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("processing");
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus("done");
            return 100;
          }
          return prev + 10;
        });
      }, 150);
    }, 1200);
  };

  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-12"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
            Neural Path Engine
          </div>
          <h1 className="text-6xl font-black text-foreground tracking-tighter uppercase italic leading-none">AI <span className="text-primary">Vectorizer.</span></h1>
          <p className="text-muted-foreground font-medium text-lg">Convert raster pixels into infinitely scalable mathematical curves.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-border text-foreground font-black uppercase tracking-widest text-[10px] hover:bg-muted transition-all">
            <Sliders size={16} className="mr-3" /> Precision Settings
          </Button>
        </div>
      </motion.div>

      <div className="glass-card border-border bg-card/50 rounded-[3.5rem] p-10 md:p-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

        {status === "idle" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={startVectorize}
            className="border-2 border-dashed border-border rounded-[3rem] p-24 flex flex-col items-center justify-center group hover:border-primary/50 transition-all cursor-pointer bg-muted/20"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-[2.5rem] flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform shadow-inner">
              <Upload size={40} />
            </div>
            <h3 className="text-3xl font-black text-foreground mb-4 uppercase tracking-tighter italic">Upload Source</h3>
            <p className="text-muted-foreground font-medium text-lg mb-10">PNG, JPG, or WEBP. Max 25MB.</p>
            <Button className="bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[10px] h-16 px-12 rounded-2xl shadow-xl shadow-primary/20">
              Browse Filesystem
            </Button>
          </motion.div>
        )}

        {(status === "uploading" || status === "processing") && (
          <div className="py-20 flex flex-col items-center justify-center space-y-12">
            <div className="relative">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 rounded-full border-2 border-primary border-t-transparent"
                />
               <div className="absolute inset-0 flex items-center justify-center text-primary">
                  <Zap size={48} className="animate-pulse" />
               </div>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-black text-foreground uppercase tracking-tighter italic">{status === "uploading" ? "Syncing Clusters..." : "Calculating Paths..."}</h3>
              <p className="text-muted-foreground font-medium text-lg">Optimizing Bézier interpolation for pixel-perfect curves.</p>
            </div>
            <div className="w-full max-w-xl h-2 bg-muted rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {status === "done" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
               <div className="inline-flex items-center px-5 py-2 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                  <CheckCircle2 size={14} className="mr-3" /> Synthesis Complete
               </div>
               <h3 className="text-6xl font-black text-foreground tracking-tighter uppercase italic leading-tight">Infinity <br /><span className="text-primary text-5xl">Scale Ready.</span></h3>
               <div className="space-y-4">
                  {[
                    "Lossless Bézier Geometry",
                    "Automated Path Simplification",
                    "Dynamic Color Space Conversion",
                    "Layered SVG Grouping"
                  ].map((feat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-lg font-bold text-muted-foreground">{feat}</span>
                    </motion.div>
                  ))}
               </div>
               <div className="flex flex-wrap gap-4 pt-8">
                 <Button className="h-16 px-12 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl shadow-primary/20 hover:opacity-90 transition-all">
                   <Download size={18} className="mr-3" /> Download SVG
                 </Button>
                 <Button variant="outline" onClick={() => setStatus("idle")} className="h-16 px-12 rounded-2xl border-border text-foreground font-black uppercase tracking-widest text-[10px] hover:bg-muted">
                   Start New Scan
                 </Button>
               </div>
            </div>
            <div className="aspect-square bg-white dark:bg-black/40 rounded-[3rem] p-16 flex items-center justify-center shadow-2xl relative group overflow-hidden border border-border">
               {/* Pattern Background */}
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

               <div className="w-64 h-64 bg-primary rounded-[2rem] flex items-center justify-center text-white text-8xl font-black shadow-2xl shadow-primary/20">L</div>

               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="p-8 glass-card border-primary/20 bg-primary/10 backdrop-blur-md rounded-2xl flex items-center space-x-4">
                    <Maximize className="text-primary" size={24} />
                    <span className="text-xs font-black uppercase tracking-widest text-primary">Zoom level: 800% (Lossless)</span>
                  </div>
               </div>

               <div className="absolute bottom-8 right-8 text-primary/40 animate-pulse">
                <Spline size={32} />
               </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Curve Precision", desc: "Advanced Laplacian edge detection for ultra-accurate path tracing.", icon: MousePointer2 },
          { title: "Sub-layer Groups", desc: "Our AI automatically categorizes paths into logical layer structures.", icon: Layers },
          { title: "Simplify Engine", desc: "Reduces anchor point counts while maintaining 99.9% visual fidelity.", icon: RefreshCw }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="p-10 border border-border bg-card/50 rounded-[2.5rem] group hover:border-primary/30 transition-all"
          >
             <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                <item.icon size={24} />
             </div>
             <h4 className="text-xl font-black text-foreground mb-4 uppercase tracking-tight">{item.title}</h4>
             <p className="text-muted-foreground text-sm font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
