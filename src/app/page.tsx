"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Zap, Globe,
  ArrowRight, CheckCircle2,
  ChevronDown, Box, Layout, Layers,
  MousePointer2, Download
} from "lucide-react";
import React, { useState } from "react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-bold text-white tracking-tight">{question}</span>
        <ChevronDown className={`transform transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/40 leading-relaxed text-base font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <PublicNavbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-48 pb-32 px-6 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 backdrop-blur-md">
                <Sparkles size={12} className="mr-2" />
                <span>AI-Powered Design Revolution</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1]"
              >
                Create your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Legendary</span> <br />
                brand identity.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
              >
                The world&apos;s most advanced AI logo designer. Generate, refine, and export professional branding kits in seconds.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link href="/register">
                  <Button size="lg" className="h-16 px-10 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all transform hover:scale-105">
                    Start Creating Free <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/showcase">
                  <Button variant="outline" size="lg" className="h-16 px-10 text-sm font-bold rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all">
                    View Showcase
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-32 relative max-w-5xl mx-auto p-4 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl"
            >
              <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden aspect-[16/10] group relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                 {/* Mock Interface */}
                 <div className="w-full h-full p-8 flex flex-col gap-8 opacity-20">
                    <div className="flex justify-between items-center">
                       <div className="flex gap-4">
                          <div className="w-12 h-4 bg-white/10 rounded"></div>
                          <div className="w-12 h-4 bg-white/10 rounded"></div>
                       </div>
                       <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 flex-1">
                       <div className="col-span-1 bg-white/5 rounded-2xl"></div>
                       <div className="col-span-2 bg-white/5 rounded-2xl flex items-center justify-center">
                          <div className="w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
                       </div>
                    </div>
                 </div>
                 {/* Overlay Content */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 mb-8 transform group-hover:rotate-12 transition-transform duration-500">
                       <Layout className="text-white" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Pro Editor Workspace</h3>
                    <p className="text-white/40 max-w-sm font-medium leading-relaxed">Drag, drop, and refine with AI-assisted precision. All the tools of a pro designer, simplified for you.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Everything you need <br />to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">stand out.</span></h2>
              <p className="text-lg text-white/40 max-w-2xl mx-auto font-medium">A complete branding suite designed for modern founders and creators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "AI Generation", icon: <Zap />, desc: "Instantly create unique logos based on your brand story." },
                { title: "Vector Editor", icon: <MousePointer2 />, desc: "Professional tools to tweak every curve and color." },
                { title: "Brand Kits", icon: <Layers />, desc: "Automatic guidelines, typography, and color palettes." },
                { title: "Social Media", icon: <Globe />, desc: "Perfectly sized assets for Instagram, X, LinkedIn, and more." },
                { title: "3D Mockups", icon: <Box />, desc: "Visualize your brand on real-world products in 3D." },
                { title: "Exports", icon: <Download />, desc: "Download high-res SVG, PNG, and PDF formats." }
              ].map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 border border-white/5 p-10 rounded-[2rem] hover:bg-white/[0.08] transition-all cursor-default group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{f.title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Showcase Section */}
        <section className="py-40 px-6 relative overflow-hidden bg-white/[0.02]">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight tracking-tight">Beyond a logo. <br />It&apos;s an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Experience.</span></h2>
              <div className="space-y-6">
                {[
                  "Smart font pairing suggestions",
                  "Automated brand color extraction",
                  "One-click social media resizing",
                  "Interactive 3D product previews"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                      <CheckCircle2 size={14} />
                    </div>
                    <span className="text-lg font-bold text-white/70 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="space-y-6 mt-12">
                <div className="bg-white/5 aspect-square rounded-3xl border border-white/5 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
                <div className="bg-white/5 aspect-[4/5] rounded-3xl border border-white/5 bg-gradient-to-bl from-blue-500/10 to-transparent"></div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 aspect-[4/5] rounded-3xl border border-white/5 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
                <div className="bg-white/5 aspect-square rounded-3xl border border-white/5 bg-gradient-to-tl from-pink-500/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/CTA */}
        <section className="py-40 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-20 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Ready to build your <br />legendary brand?</h2>
            <p className="text-lg text-white/40 mb-12 font-medium">Join 50,000+ creators building the future with LogoAI.</p>
            <Link href="/register">
              <Button size="lg" className="h-16 px-12 text-sm font-black bg-white text-black hover:bg-white/90 rounded-full transition-transform hover:scale-105 uppercase tracking-widest">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-40 px-6 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            <FAQItem question="Can I use the logo commercially?" answer="Yes, all logos created on our paid plans come with full commercial usage rights." />
            <FAQItem question="What formats can I download?" answer="You can download SVG, PNG, JPG, and PDF formats suitable for web and print." />
            <FAQItem question="Is there a free trial?" answer="You can create and preview logos for free. You only pay when you're ready to download your brand kit." />
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
