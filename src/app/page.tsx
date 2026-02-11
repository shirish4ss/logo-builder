"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, ShieldCheck, Zap, Globe,
  ArrowRight, CheckCircle2, Star,
  ChevronDown, Box, Layout, Layers,
  MousePointer2, Palette, Download
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
        <span className="text-xl font-medium text-white">{question}</span>
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
            <p className="pb-6 text-gray-400 leading-relaxed text-lg">
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
        <section className="relative pt-40 pb-32 px-6 overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
          <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 backdrop-blur-md">
                <Sparkles size={14} className="mr-2" />
                <span>AI-Powered Design Revolution</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-9xl font-bold mb-8 tracking-tight leading-[0.9]"
              >
                Create your <br />
                <span className="text-gradient">Legendary</span> <br />
                brand identity.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                The world&apos;s most advanced AI logo designer. Generate, refine, and export professional branding kits in seconds.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link href="/register">
                  <Button size="lg" className="h-16 px-10 text-lg font-bold bg-blue-600 hover:bg-blue-700 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all transform hover:scale-105">
                    Start Creating Free
                  </Button>
                </Link>
                <Link href="/showcase">
                  <Button variant="outline" size="lg" className="h-16 px-10 text-lg font-bold rounded-full bg-white/5 border-white/10 hover:bg-white/10 transition-all">
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
              className="mt-32 relative max-w-6xl mx-auto"
            >
              <div className="glass-card p-2 shadow-2xl overflow-hidden aspect-[16/10] group">
                 <div className="w-full h-full bg-[#0a0a0a] rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
                    {/* Mock Interface */}
                    <div className="w-full h-full p-8 flex flex-col gap-8 opacity-40">
                       <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                             <div className="w-12 h-4 bg-white/10 rounded"></div>
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40 mb-6">
                          <Layout className="text-white" size={40} />
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-2">Pro Editor Workspace</h3>
                       <p className="text-gray-400">Drag, drop, and refine with AI-assisted precision.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-32 px-6 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Everything you need <br />to <span className="text-gradient">stand out.</span></h2>
              <p className="text-xl text-gray-400 max-w-2xl">A complete branding suite designed for modern founders and creators.</p>
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
                  className="glass-card p-10 hover:bg-white/[0.08] transition-all cursor-default group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Showcase Section */}
        <section className="py-40 px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent"></div>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">Beyond a logo. <br />It&apos;s an <span className="text-gradient">Experience.</span></h2>
              <div className="space-y-8">
                {[
                  "Smart font pairing suggestions",
                  "Automated brand color extraction",
                  "One-click social media resizing",
                  "Interactive 3D product previews"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-xl font-medium text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              <div className="space-y-6 mt-12">
                <div className="glass-card aspect-square bg-gradient-to-br from-indigo-500/20 to-transparent"></div>
                <div className="glass-card aspect-[4/5] bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
              </div>
              <div className="space-y-6">
                <div className="glass-card aspect-[4/5] bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
                <div className="glass-card aspect-square bg-gradient-to-tl from-pink-500/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/CTA */}
        <section className="py-40 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card p-20 border-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10"></div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to start?</h2>
            <p className="text-xl text-gray-400 mb-12">Join 50,000+ creators building the future with LogoAI.</p>
            <Link href="/register">
              <Button size="lg" className="h-16 px-12 text-xl font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-transform hover:scale-105">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-40 px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
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
