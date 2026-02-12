"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Lightbulb, Zap, Code, ChevronRight, Check } from "lucide-react";
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
      "Analyzing business name and mission...",
      "Identifying industry trends for " + (data.industry || "General") + "...",
      "Extracting core values: " + (data.stylePreference || "Modern") + "...",
      "Synthesizing visual concepts...",
      "Generating optimal AI prompts..."
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
              title: "The Geometric Nexus",
              concept: "An abstract representation of connection using interlocking circles and sharp vertices.",
              prompt: "Minimalist geometric logo, abstract interlocking circles, sharp vertices, vector art, flat design, high contrast blue and white background",
              visuals: ["Minimalist", "Geometric", "Professional"]
            },
            {
              id: "2",
              title: "Futuristic Flow",
              concept: "Dynamic swooshes that convey speed and progress, inspired by light trails.",
              prompt: "Futuristic logo, dynamic swooshes, light trails, neon accents, sleek lines, gradient blue and indigo, dark background",
              visuals: ["Dynamic", "Futuristic", "Sleek"]
            },
            {
              id: "3",
              title: "Humanistic Pulse",
              concept: "A combination of organic curves and structured elements to represent balance.",
              prompt: "Organic logo, humanistic pulse, curved lines, structured base, elegant, sapphire blue, minimalist vector",
              visuals: ["Organic", "Balanced", "Trustworthy"]
            }
          ]);
          setAnalyzing(false);
        }, 1000);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <AnimatePresence mode="wait">
        {analyzing ? (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center space-y-12"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full border-4 border-blue-600/20 border-t-blue-600 animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center text-blue-500">
                <Sparkles size={40} className="animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-black text-white tracking-tight">AI Designing Intelligence</h2>
              <p className="text-gray-500 font-medium">Deeply analyzing your brand identity...</p>
            </div>

            <div className="max-w-md mx-auto space-y-4 text-left">
              {analysisSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-3 text-sm font-bold text-white/60"
                >
                  <Check size={14} className="text-green-500" />
                  <span>{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ideas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-white tracking-tight">Generated Concepts</h2>
              <p className="text-gray-500 font-medium">Choose a direction for your AI to explore.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ideas.map((idea) => (
                <motion.div
                  key={idea.id}
                  whileHover={{ y: -10 }}
                  className="glass-card border-white/5 bg-white/[0.02] p-8 rounded-3xl group cursor-pointer hover:border-blue-500/50 transition-all"
                  onClick={() => onSelect(idea)}
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Lightbulb size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{idea.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">{idea.concept}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {idea.visuals.map(v => (
                      <span key={v} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-white/40">{v}</span>
                    ))}
                  </div>

                  <Button className="w-full bg-white/5 border border-white/10 text-white font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all rounded-xl h-12">
                    Select Concept <ChevronRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.01] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-400">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold tracking-tight">Prefer to use your own AI?</h4>
                  <p className="text-gray-500 text-sm font-medium">You can copy the generated prompts for Midjourney or DALL-E.</p>
                </div>
              </div>
              <Button variant="outline" className="border-white/10 text-white font-bold px-8 h-12 rounded-2xl">
                Learn how it works
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
