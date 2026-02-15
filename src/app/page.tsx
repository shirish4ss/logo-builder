"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Sparkles, Zap, Globe,
  ArrowRight, CheckCircle2,
  ChevronDown, Box, Layout, Layers,
  MousePointer2, Download, Star, ShieldCheck, Trophy
} from "lucide-react";
import React, { useState, useRef } from "react";

const AnimatedOrb = ({ color, size, top, left, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
        opacity: [0.2, 0.4, 0.2],
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
        y: [0, 50, 0]
    }}
    transition={{
        duration: 10 + delay,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
    }}
    className="absolute pointer-events-none -z-10 rounded-full blur-[100px]"
    style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left
    }}
  />
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{question}</span>
        <div className={`p-2 rounded-full border border-border transition-all ${isOpen ? 'bg-primary text-primary-foreground rotate-180' : 'bg-transparent text-muted-foreground'}`}>
            <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-muted-foreground leading-relaxed text-lg font-medium">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <PublicNavbar />

      <main className="relative">
        {/* Background Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <AnimatedOrb color="rgba(59, 130, 246, 0.2)" size="60vw" top="-10%" left="-10%" delay={0} />
            <AnimatedOrb color="rgba(139, 92, 246, 0.2)" size="50vw" top="40%" left="60%" delay={2} />
            <AnimatedOrb color="rgba(236, 72, 153, 0.1)" size="40vw" top="70%" left="-5%" delay={4} />
        </div>

        {/* Hero Section */}
        <section className="relative pt-60 pb-40 px-6">
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="max-w-7xl mx-auto text-center"
          >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-xl shadow-primary/5"
            >
                <Trophy size={14} className="mr-2" />
                <span>#1 AI Design Platform 2024</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[7rem] lg:text-[9rem] font-black mb-12 tracking-[-0.05em] leading-[0.85] uppercase italic"
            >
                Create <br />
                <span className="text-primary italic">Identity.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-bold tracking-tight"
            >
                The award-winning AI logo designer for visionaries. Build a brand that lives forever in the digital age.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
            >
                <Link href="/register">
                  <Button size="lg" className="h-20 px-12 text-xs font-black uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                    Start Designing <ArrowRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/showcase">
                  <Button variant="outline" size="lg" className="h-20 px-12 text-xs font-black uppercase tracking-[0.2em] rounded-full border-border bg-card/50 hover:bg-muted transition-all">
                    Explore Samples
                  </Button>
                </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-32 pt-12 border-t border-border/50 max-w-5xl mx-auto"
            >
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-12">Trusted by 50,000+ forward-thinking founders</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-2xl font-black italic tracking-tighter">VENTURE</span>
                    <span className="text-2xl font-black italic tracking-tighter">NEXUS</span>
                    <span className="text-2xl font-black italic tracking-tighter">FORGE</span>
                    <span className="text-2xl font-black italic tracking-tighter">ORBIT</span>
                    <span className="text-2xl font-black italic tracking-tighter">QUANTUM</span>
                </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-40 px-6 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-32">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Design <br />Without <span className="text-primary italic">Limits.</span></h2>
                <p className="text-xl text-muted-foreground max-w-xl font-bold leading-relaxed">Everything you need to transform a spark of an idea into a global brand identity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {/* Feature 1: Large AI */}
              <div className="md:col-span-3 h-[450px] glass-card p-12 flex flex-col justify-between overflow-hidden relative group">
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-8">
                        <Zap size={32} />
                    </div>
                    <h3 className="text-4xl font-black tracking-tight mb-4">Neural Generation</h3>
                    <p className="text-muted-foreground font-medium text-lg max-w-xs">Our proprietary AI understands your brand values and creates symbols that matter.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all"></div>
                <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-all">
                    <Sparkles size={200} />
                </div>
              </div>

              {/* Feature 2: 3D */}
              <div className="md:col-span-3 h-[450px] glass-card p-12 flex flex-col justify-between overflow-hidden relative group">
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-8">
                        <Box size={32} />
                    </div>
                    <h3 className="text-4xl font-black tracking-tight mb-4">3D Mockups</h3>
                    <p className="text-muted-foreground font-medium text-lg max-w-xs">See your brand in the real world with interactive 3D product visualizers.</p>
                </div>
                <div className="absolute -bottom-20 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-transparent rotate-12 group-hover:rotate-0 transition-transform"></div>
              </div>

              {/* Feature 3: Kit */}
              <div className="md:col-span-2 h-[400px] glass-card p-10 flex flex-col justify-between group">
                <Layers className="text-primary" size={40} />
                <div>
                    <h4 className="text-2xl font-black tracking-tight mb-2">Branding Kit</h4>
                    <p className="text-muted-foreground text-sm font-bold">Auto-generated typography and color palettes.</p>
                </div>
              </div>

              {/* Feature 4: Social */}
              <div className="md:col-span-2 h-[400px] glass-card p-10 flex flex-col justify-between group">
                <Globe className="text-primary" size={40} />
                <div>
                    <h4 className="text-2xl font-black tracking-tight mb-2">Social Master</h4>
                    <p className="text-muted-foreground text-sm font-bold">Optimized assets for every platform on earth.</p>
                </div>
              </div>

              {/* Feature 5: Vector */}
              <div className="md:col-span-2 h-[400px] glass-card p-10 flex flex-col justify-between group">
                <MousePointer2 className="text-primary" size={40} />
                <div>
                    <h4 className="text-2xl font-black tracking-tight mb-2">Precision Edit</h4>
                    <p className="text-muted-foreground text-sm font-bold">Vector-perfect controls for designer-grade results.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-60 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto glass-card p-20 md:p-32 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
            <div className="relative z-10 space-y-12">
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">Ready to be <br /><span className="text-primary">Iconic?</span></h2>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto font-bold">Join the revolution of AI-first branding. Start for free, scale to infinity.</p>
                <Link href="/register">
                    <Button size="lg" className="h-20 px-16 text-xs font-black uppercase tracking-[0.3em] bg-primary text-primary-foreground rounded-full shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
                        Create Your Logo Now
                    </Button>
                </Link>
                <div className="flex justify-center items-center space-x-12 pt-12 opacity-40">
                    <div className="flex items-center space-x-2">
                        <Star size={16} className="text-primary fill-primary" />
                        <span className="text-xs font-black uppercase tracking-widest">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ShieldCheck size={16} className="text-primary" />
                        <span className="text-xs font-black uppercase tracking-widest">Secure Checkout</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="py-40 px-6 max-w-4xl mx-auto">
          <div className="mb-20">
            <p className="text-xs font-black text-primary uppercase tracking-[0.4em] mb-4">Curiosity</p>
            <h2 className="text-5xl font-black tracking-tighter uppercase italic">Questions <br />& Answers</h2>
          </div>
          <div className="space-y-4">
            <FAQItem question="Do I own the copyrights to my logo?" answer="Absolutely. Once you purchase a brand kit, you receive full commercial ownership and exclusive rights to your design." />
            <FAQItem question="What files will I receive upon purchase?" answer="You'll get a comprehensive package including vector SVGs, high-resolution PNGs with transparent backgrounds, and professional PDF guidelines." />
            <FAQItem question="Can I edit my logo after generating it?" answer="Yes! Our Studio Editor gives you complete control over colors, typography, shapes, and layout even after the AI has finished its work." />
            <FAQItem question="Is the AI generation truly unique?" answer="Our neural engine generates billions of combinations and learns from design trends to ensure your brand stands out from the competition." />
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
