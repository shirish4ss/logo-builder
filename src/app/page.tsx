"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, ShieldCheck, Zap, Globe,
  ArrowRight, CheckCircle2, Star,
  HelpCircle, ChevronDown, Box
} from "lucide-react";
import React, { useState } from "react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-bold dark:text-white">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingElement = ({ className, delay = 0, children }: { className: string, delay?: number, children?: React.ReactNode }) => (
    <motion.div
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
        }}
        transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Home() {
  const steps = [
    { title: "Describe Your Brand", desc: "Tell our AI about your business, values, and style preferences in plain English.", icon: "✍️" },
    { title: "AI Generation", desc: "Our advanced models generate hundreds of unique concepts based on your input.", icon: "✨" },
    { title: "Refine & Export", desc: "Use our professional editor to tweak every detail and download in any format.", icon: "📐" }
  ];

  const testimonials = [
    { name: "Alex Rivera", role: "Founder, TechFlow", text: "LogoAI transformed our branding process. We got a professional logo in minutes that perfectly matched our vision.", stars: 5 },
    { name: "Sarah Chen", role: "Creative Director", text: "The vector editor is surprisingly powerful. It's the perfect middle ground between AI and manual design.", stars: 5 },
    { name: "James Wilson", role: "Startup Mentor", text: "I recommend this to all my founders. It's fast, affordable, and the results are truly world-class.", stars: 5 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <PublicNavbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-10 max-w-7xl mx-auto text-center">
          {/* Animated Background Elements */}
          <FloatingElement className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
          <FloatingElement className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" delay={1} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent -z-10 blur-3xl"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest uppercase mb-8 border border-blue-100 dark:border-blue-800"
            >
               <Sparkles size={14} className="mr-2" /> Award Winning AI Design
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
            >
              Design Your <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Perfect Logo</span> <br />
              Powered by AI.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              The world&apos;s most advanced AI-powered logo designer. From concept to a complete branding kit, all in one professional workspace.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Link href="/register">
                <Button size="lg" className="px-12 py-8 text-xl font-bold bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1">
                  Start Creating Now <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/showcase">
                <Button variant="outline" size="lg" className="px-12 py-8 text-xl font-bold rounded-2xl dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                  View Showcase
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 relative max-w-5xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-[3rem] p-4 border border-gray-200 dark:border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden aspect-video flex items-center justify-center group relative">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent mix-blend-overlay"></div>
               <div className="w-full h-full bg-gray-50 dark:bg-gray-950 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 dark:opacity-20"></div>
                  <div className="z-10 text-center p-12">
                     <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/40 animate-pulse">
                        <span className="text-white text-5xl font-black">L</span>
                     </div>
                     <p className="text-gray-400 dark:text-gray-600 text-xl font-medium tracking-widest uppercase">Interactive AI Editor Preview</p>
                  </div>
               </div>
            </div>
            {/* Floaties around the mockup */}
            <FloatingElement className="absolute -top-10 -right-10 w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center text-blue-500" delay={2}>
                <Zap size={32} />
            </FloatingElement>
            <FloatingElement className="absolute bottom-10 -left-10 w-32 h-32 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center text-purple-500" delay={3}>
                <Sparkles size={40} />
            </FloatingElement>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 px-10 bg-gray-50 dark:bg-gray-900/40 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black mb-6"
              >
                Simple Steps to a <span className="text-blue-600">Legendary</span> Brand
              </motion.h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Our AI handles the heavy lifting while you stay in creative control.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  className="bg-white dark:bg-gray-900 p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all group relative z-10"
                >
                  <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{step.desc}</p>
                  <div className="absolute top-8 right-8 text-8xl font-black text-gray-50 dark:text-gray-800/20 group-hover:text-blue-50 dark:group-hover:text-blue-900/10 transition-colors -z-10">{i + 1}</div>
                </motion.div>
              ))}
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent -translate-y-1/2"></div>
            </div>
          </div>
        </section>

        {/* Dynamic Features Section */}
        <section className="py-32 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-black mb-8 leading-tight">Beyond Just A Logo</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium">
                LogoAI is a complete design ecosystem. We don&apos;t just give you an image; we build your entire brand toolkit for the digital age.
              </p>
              <div className="space-y-6">
                {[
                  "Vector SVG exports for infinite scalability",
                  "Automated Brand Guidelines (15+ pages)",
                  "Social Media Kit for all major platforms",
                  "Real-time 3D Product Mockups",
                  "AI-Powered Font Pairing & Color Palettes"
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <CheckCircle2 size={16} />
                    </div>
                    <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="grid grid-cols-2 gap-6"
            >
                {[
                    { label: "Mockups", icon: <Box className="text-blue-500" />, color: "bg-blue-50" },
                    { label: "Vector", icon: <Zap className="text-amber-500" />, color: "bg-amber-50" },
                    { label: "Social", icon: <Globe className="text-purple-500" />, color: "bg-purple-50" },
                    { label: "PDF", icon: <ShieldCheck className="text-emerald-500" />, color: "bg-emerald-50" },
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className={`${card.color} dark:bg-gray-900 p-8 rounded-[2.5rem] border border-transparent dark:border-gray-800 shadow-xl flex flex-col items-center justify-center text-center`}
                    >
                        <div className="mb-4">{card.icon}</div>
                        <span className="font-black text-gray-900 dark:text-white uppercase tracking-wider text-xs">{card.label}</span>
                    </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-10 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="max-w-7xl mx-auto text-center mb-24">
             <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-4xl md:text-5xl font-black mb-6"
             >
                Loved by 50,000+ Founders
             </motion.h2>
             <p className="text-xl text-blue-100">Professional branding made accessible to everyone.</p>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10"
              >
                <div className="flex space-x-1 mb-6 text-yellow-400">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg font-medium italic mb-8 leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="text-left">
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-blue-200">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-10 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Common Questions</h2>
            <p className="text-gray-500 dark:text-gray-400">Everything you need to know about LogoAI.</p>
          </div>
          <div className="space-y-2">
            <FAQItem
              question="Can I use the logo for commercial purposes?"
              answer="Yes! Once you download your logo on any of our paid plans, you have full commercial ownership and can use it anywhere."
            />
            <FAQItem
              question="Can I edit my logo after downloading?"
              answer="Absolutely. All your designs are saved in your dashboard and can be edited using our professional vector editor at any time."
            />
            <FAQItem
              question="What file formats do I receive?"
              answer="Depending on your plan, you'll receive PNG, JPG, high-quality SVG (vector), and CMYK-ready PDF files."
            />
            <FAQItem
              question="How does the AI work?"
              answer="Our AI uses advanced neural networks trained on millions of high-quality designs to understand your brand description and generate unique concepts."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-[4rem] p-16 md:p-24 text-center border border-gray-100 dark:border-gray-700 shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Ready to build your <br /> dream brand?</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                  Join thousands of creators using LogoAI to launch their business.
                </p>
                <Link href="/register">
                  <Button size="lg" className="px-16 py-9 text-2xl font-black bg-blue-600 hover:bg-blue-700 rounded-3xl shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-all">
                    Design My Logo Free
                  </Button>
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/5 rounded-full -ml-32 -mb-32"></div>
           </motion.div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
