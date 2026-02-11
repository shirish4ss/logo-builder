"use client";

import { motion } from "framer-motion";
import { BookOpen, Palette, Type, Shield, Download, FileText, CheckCircle2, Sparkles, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandingKitPage() {
  const sections = [
    {
      title: "Core Ethos",
      icon: <FileText className="text-purple-400" />,
      content: "Forward-thinking, minimal, and architecturally sound.",
      status: "Ready"
    },
    {
      title: "Color Spectrum",
      icon: <Palette className="text-blue-400" />,
      content: "Electric Blue #3b82f6, Pitch Black #050505.",
      status: "Synced"
    },
    {
      title: "Typeface",
      icon: <Type className="text-emerald-400" />,
      content: "Inter Display (Bold) for impact, Inter (Regular) for utility.",
      status: "Active"
    },
    {
      title: "Composition",
      icon: <Shield className="text-amber-400" />,
      content: "Grid-based alignment with 8px base unit.",
      status: "Locked"
    },
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white">Brand Intelligence</h1>
          <p className="text-gray-400 mt-2 text-lg font-medium">The comprehensive DNA of your visual identity.</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="rounded-full px-6 border-white/5 bg-white/5 text-white hover:bg-white/10 h-11">
            Live Preview
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-11 font-bold shadow-lg shadow-blue-500/20">
            <Download className="mr-2" size={18} /> Export Brand PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    {section.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="glass-card p-12 border-white/5 bg-gradient-to-br from-blue-600/5 to-purple-600/5 relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center">
              <Sparkles className="mr-3 text-blue-400" size={24} /> Mission & Narrative
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-4">The Mission</h4>
                  <p className="text-lg font-medium text-gray-300 leading-relaxed italic">&quot;To accelerate human creativity through seamless AI-integrated design systems.&quot;</p>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold text-purple-500 uppercase tracking-[0.2em] mb-4">The Vision</h4>
                  <p className="text-lg font-medium text-gray-300 leading-relaxed italic">&quot;Creating a world where every vision finds its perfect visual expression instantly.&quot;</p>
               </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-10 border-white/5 bg-white/[0.03]">
            <h3 className="text-lg font-bold text-white mb-8 flex items-center uppercase tracking-widest">
              <BookOpen className="mr-3 text-blue-400" size={18} /> Asset Index
            </h3>
            <div className="space-y-6">
               {[
                 { label: "Vector Master Logo", done: true },
                 { label: "Dark Mode Variants", done: true },
                 { label: "SVG Component Library", done: true },
                 { label: "Typography System", done: true },
                 { label: "Print Ready Package", done: false },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${item.done ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.label}
                    </span>
                    {item.done ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-white/10" />
                    )}
                 </div>
               ))}
            </div>
            <Button className="w-full mt-12 rounded-full h-12 font-bold bg-white text-black hover:bg-gray-200">
               Generate Final Assets
            </Button>
          </div>

          <div className="glass-card p-10 border-white/5 bg-black/40">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">System Integrity</h4>
             </div>
             <div className="flex items-end justify-between mb-4">
                <span className="text-5xl font-bold text-white tracking-tighter">98<span className="text-blue-500">%</span></span>
                <span className="text-emerald-500 text-xs font-bold mb-2">Optimal</span>
             </div>
             <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[98%] h-full bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
