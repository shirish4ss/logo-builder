"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Design Excellence", desc: "We believe that every business, regardless of size, deserves a world-class brand identity.", icon: <Target className="text-blue-600" size={32} /> },
    { title: "AI Integrity", desc: "Our models are trained to prioritize uniqueness and artistic quality over generic templates.", icon: <ShieldCheck className="text-green-600" size={32} /> },
    { title: "User Empowerment", desc: "We provide professional-grade tools that are accessible to everyone, no design degree required.", icon: <Users className="text-purple-600" size={32} /> },
    { title: "Future Focused", desc: "We are constantly evolving our AI to stay at the cutting edge of design trends.", icon: <Rocket className="text-orange-600" size={32} /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <PublicNavbar />

      <main className="pt-32 pb-20">
        <section className="px-10 max-w-7xl mx-auto text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight"
          >
            Democratizing <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Professional Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Founded in 2024, LogoAI was born out of a simple idea: that high-end branding shouldn&apos;t cost thousands of dollars or take weeks of back-and-forth. We&apos;ve combined state-of-the-art generative AI with professional vector editing tools to create a seamless design experience.
          </motion.p>
        </section>

        <section className="px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-gray-50 dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800"
            >
              <div className="mb-6">{v.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </section>

        <section className="px-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-12">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-300">
            <p>
              Our team consists of designers, engineers, and AI researchers who are passionate about the intersection of creativity and technology. We saw a gap in the market between &quot;clipart generators&quot; and &quot;professional agencies&quot; and decided to build the bridge.
            </p>
            <p className="mt-6">
              Today, LogoAI serves thousands of entrepreneurs, small businesses, and creators worldwide, helping them launch their brands with confidence and style.
            </p>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
