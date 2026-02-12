"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap, Share2, Palette, Download,
  Globe, PenTool, Briefcase,
  Layers, Sparkles, Box, ArrowRight
} from "lucide-react";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { Button } from "@/components/ui/button";

const featureGroups = [
  {
    title: "Intelligence",
    features: [
      { icon: Zap, title: "AI Neural Engine", desc: "Advanced LLMs that transform business strategy into visual identity." },
      { icon: Palette, title: "Dynamic Extraction", desc: "AI-powered color theory application based on industry psychology." },
      { icon: Sparkles, title: "Refinement AI", desc: "Iterative design feedback loop to perfect every curve and corner." },
    ]
  },
  {
    title: "Creation",
    features: [
      { icon: PenTool, title: "Vector SVG Editor", desc: "Professional-grade workspace with full node and path manipulation." },
      { icon: Box, title: "3D Visualizer", desc: "Instantly see your brand on real-world products in photorealistic 3D." },
      { icon: Layers, title: "Asset Synthesis", desc: "Generate 100+ branded assets from a single logo concept." },
    ]
  },
  {
    title: "Ecosystem",
    features: [
      { icon: Briefcase, title: "Brand Intelligence Kit", desc: "Comprehensive DNA including typography, spacing, and tone guidelines." },
      { icon: Share2, title: "Social Omni-Kit", desc: "Ready-to-post assets optimized for every global social platform." },
      { icon: Globe, title: "Global Portals", desc: "Deploy persistent, hosted brand manuals for your stakeholders." },
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <PublicNavbar />

      <main className="relative pt-48 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] -z-10" />

        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10"
          >
            Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
          >
            Design for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Infinite</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/40 max-w-2xl mx-auto font-medium"
          >
            A cohesive design ecosystem powered by neural intelligence and professional vector tools.
          </motion.p>
        </div>

        <div className="space-y-32">
          {featureGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-white/5" />
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">{group.title}</h2>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300">
                      <f.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 tracking-tight">{f.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed font-medium">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 relative rounded-[3rem] p-12 md:p-24 text-center overflow-hidden border border-white/5 bg-white/[0.01]"
        >
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 -z-10" />

           <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Ready to architect your identity?</h2>
           <p className="text-white/40 mb-12 max-w-xl mx-auto text-lg font-medium">Join the next generation of founders using AI to build timeless brands.</p>

           <Link href="/register">
             <Button size="lg" className="bg-white text-black hover:bg-white/90 text-sm font-black px-12 h-16 rounded-full transition-all hover:scale-105 uppercase tracking-widest">
               Start Creating Now
             </Button>
           </Link>
        </motion.section>
      </main>

      <PublicFooter />
    </div>
  );
}
