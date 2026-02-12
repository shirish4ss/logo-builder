"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Palette } from "lucide-react";
import Link from "next/link";

export default function ShowcasePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Tech", "Minimal", "Luxury", "Creative", "Sports"];

  const showcaseLogos = [
    { name: "Luminary", category: "Tech", variant: "monochrome", slug: "luminary" },
    { name: "Earthe", category: "Minimal", variant: "gradient", slug: "earthe" },
    { name: "Aura", category: "Luxury", variant: "minimal", slug: "aura" },
    { name: "Velocity", category: "Sports", variant: "italic", slug: "velocity" },
    { name: "Apex", category: "Tech", variant: "geometric", slug: "apex" },
    { name: "Bloom", category: "Creative", variant: "organic", slug: "bloom" },
    { name: "Orbit", category: "Tech", variant: "cosmic", slug: "orbit" },
    { name: "Pulse", category: "Creative", variant: "dynamic", slug: "pulse" },
    { name: "Noir", category: "Luxury", variant: "minimal", slug: "noir" },
    { name: "Zest", category: "Creative", variant: "vibrant", slug: "zest" },
    { name: "Titan", category: "Sports", variant: "bold", slug: "titan" },
    { name: "Quartz", category: "Minimal", variant: "clean", slug: "quartz" },
  ];

  const filteredLogos = activeFilter === "All"
    ? showcaseLogos
    : showcaseLogos.filter(logo => logo.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <PublicNavbar />

      <main className="pt-48 pb-32">
        <section className="px-6 max-w-7xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-6"
              >
                <Palette size={12} /> Community Exhibition
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight"
              >
                The New <span className="text-white/40 italic font-serif">Aesthetic</span> Standards.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/40 font-medium leading-relaxed max-w-xl"
              >
                Curated examples of how global founders are leveraging our AI engine to build cohesive visual identities.
              </motion.p>
            </div>

            <div className="flex flex-wrap gap-2 pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                    activeFilter === cat
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20"
                      : "bg-white/5 text-white/40 border-white/5 hover:border-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode='popLayout'>
              {filteredLogos.map((logo, i) => (
                <motion.div
                  layout
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden relative mb-6 group-hover:border-white/10 transition-all duration-500">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-700 border border-white/5 shadow-2xl">
                           <span className="text-4xl font-black text-white/10 group-hover:text-white transition-colors duration-700">
                             {logo.name[0]}
                           </span>
                        </div>
                     </div>

                     <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">View Case Study</span>
                        <ArrowRight size={12} />
                     </div>
                  </div>
                  <div className="px-6 text-center">
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{logo.name}</h3>
                    <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.3em]">{logo.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section className="mt-48 px-6 max-w-7xl mx-auto">
           <div className="bg-white/[0.01] border border-white/5 rounded-[4rem] p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent -z-10" />

              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 max-w-2xl leading-tight">Your brand deserves an <span className="italic font-serif text-white/40">extraordinary</span> start.</h2>
              <Link href="/register">
                <button className="bg-white text-black hover:bg-white/90 px-12 py-4 h-16 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105">
                  Begin Your Story Now
                </button>
              </Link>
           </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
