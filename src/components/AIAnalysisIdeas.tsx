"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lightbulb, Zap, ChevronRight, Check, Target, BrainCircuit, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Idea {
  id: string;
  title: string;
  concept: string;
  prompt: string;
  visuals: string[];
}

export const AIAnalysisIdeas = ({ data, onSelect }: { data: any, onSelect: (idea: Idea) => void }) => {
  const [analyzing, setAnalyzing] = useState(true);
  const [analysisSteps, setAnalysisSteps] = useState<string[]>([]);
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    const steps = [
      "Deconstructing brand semiotics...",
      "Mining cross-industry pattern data...",
      "Extracting aesthetic vectors: " + (data.stylePreference || "Premium"),
      "Synthesizing visual metaphors...",
      "Optimizing neural prompts for " + (data.businessName || "Global")
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAnalysisSteps(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIdeas([
            {
              id: "1",
              title: "The Minimalist Vertex",
              concept: "Interlocking geometric primitives representing absolute synergy.",
              prompt: "Minimalist vector logo, interlocking vertices, brutalist architecture inspired, high-end monochrome, 8k resolution, precise lines",
              visuals: ["Benton", "Premium", "Structural"]
            },
            {
              id: "2",
              title: "Fluid Continuity",
              concept: "Endless loops conveying sustainable growth and infinite motion.",
              prompt: "Abstract fluid logo, mobius loop, continuous motion, liquid chrome effect, luxury branding, indigo gradients, organic symmetry",
              visuals: ["Dynamic", "Luxury", "Flowing"]
            },
            {
              id: "3",
              title: "Brutalist Monolith",
              concept: "Strong, heavy forms that project unwavering authority and legacy.",
              prompt: "Brutalist logo, monolithic shape, high contrast shadows, sharp edges, heavy stroke weight, industrial aesthetic, charcoal grey",
              visuals: ["Strong", "Legacy", "Modern"]
            }
          ]);
          setAnalyzing(false);
        }, 1500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <AnimatePresence mode="wait">
        {analyzing ? (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center min-h-[400px] space-y-12"
          >
            <div className="relative">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 rounded-full border-[1px] border-dashed border-primary/40 p-4"
                >
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full rounded-full border-2 border-primary border-t-transparent shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)]"
                    />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <BrainCircuit size={48} className="text-primary animate-pulse" />
                </div>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-5xl font-black text-foreground tracking-tighter uppercase italic">Neural Synthesis</h2>
              <p className="text-muted-foreground font-medium uppercase tracking-[0.3em] text-[10px]">Processing brand DNA through AI clusters</p>
            </div>

            <div className="max-w-md w-full grid grid-cols-1 gap-3">
              {analysisSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-muted/30 border border-border"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold text-foreground/80">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ideas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                    Intelligence Report
                </div>
                <h2 className="text-6xl font-black text-foreground tracking-tighter uppercase italic">Concepts <span className="text-primary">Found.</span></h2>
              </div>
              <p className="text-muted-foreground font-medium max-w-sm text-right">Our AI has identified three distinct visual directions for your brand legacy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ideas.map((idea) => (
                <motion.div
                  key={idea.id}
                  whileHover={{ y: -10 }}
                  className="glass-card border-border bg-card/50 p-10 rounded-[2.5rem] group cursor-pointer hover:border-primary/50 transition-all shadow-xl hover:shadow-primary/5"
                  onClick={() => onSelect(idea)}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tight">{idea.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-medium">{idea.concept}</p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {idea.visuals.map(v => (
                      <span key={v} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-muted text-muted-foreground">{v}</span>
                    ))}
                  </div>

                  <Button className="w-full h-14 bg-muted text-foreground font-black uppercase tracking-widest text-[10px] group-hover:bg-primary group-hover:text-primary-foreground transition-all rounded-xl shadow-sm">
                    Evolve Design <ChevronRight size={14} className="ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-12 glass-card border-dashed border-primary/20 bg-primary/[0.02] flex flex-col md:flex-row items-center justify-between gap-10 rounded-[3rem]"
            >
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-[2rem] bg-primary text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/20">
                  <Rocket size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-black tracking-tight text-foreground uppercase">Universal Portability</h4>
                  <p className="text-muted-foreground text-sm font-medium">Export optimized prompts for Midjourney, DALL-E 3, or Stable Diffusion if you prefer external rendering.</p>
                </div>
              </div>
              <Button variant="outline" className="h-14 border-primary/20 text-primary font-black uppercase tracking-[0.2em] text-[10px] px-10 rounded-2xl hover:bg-primary/5">
                Copy All Prompts
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
