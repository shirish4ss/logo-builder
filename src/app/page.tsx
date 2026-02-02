"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      <header className="px-10 py-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 backdrop-blur-md sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80">
        <h1 className="text-3xl font-extrabold text-blue-600 tracking-tight">LogoAI</h1>
        <nav className="flex items-center space-x-8">
          <Link href="/features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Features</Link>
          <Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Pricing</Link>
          <Link href="/login" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Login</Link>
          <ThemeToggle />
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      <main>
        <section className="py-32 px-10 max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl font-black mb-8 leading-tight tracking-tight"
          >
            Design Your <span className="text-blue-600 dark:text-blue-500">Perfect Logo</span> <br />
            Powered by AI in Seconds.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The world&apos;s most advanced AI-powered logo designer. From business details to a complete branding kit, all in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            <Link href="/register">
              <Button size="lg" className="px-12 py-7 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all">Start Creating Now</Button>
            </Link>
            <Button variant="outline" size="lg" className="px-12 py-7 text-lg dark:border-gray-700">View Samples</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 relative"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-[3rem] p-12 border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden h-[500px] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-gray-400 dark:text-gray-600 text-xl italic relative z-10">Mockup of Modern Dashboard UI with Interactive Logo Editor</p>
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] opacity-50"></div>
          </motion.div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-900/50 py-32 px-10 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black mb-4">Everything you need for your brand</h2>
              <p className="text-gray-500 dark:text-gray-400">Professional tools powered by cutting-edge AI technology.</p>
            </div>
            <div className="grid grid-cols-3 gap-12">
              {[
                { title: "AI Generation", desc: "Advanced algorithms to understand your business and create unique concepts.", icon: "✨" },
                { title: "Vector SVG Export", desc: "Download logos in high-quality SVG format, ready for any size and media.", icon: "📐" },
                { title: "Branding Kit", desc: "Automatically generate social media posts, profile pictures and brand guidelines.", icon: "🎨" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-gray-100 text-center text-gray-400 text-sm">
        &copy; 2025 LogoAI. All rights reserved. Built with precision for innovators.
      </footer>
    </div>
  );
}
