"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const PublicNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl glass-card px-8 py-3 flex justify-between items-center backdrop-blur-2xl bg-white/5 border-white/10"
      >
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">LogoAI</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Features</Link>
          <Link href="/showcase" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Showcase</Link>
          <Link href="/pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</Link>
          <div className="w-px h-4 bg-white/10" />
          <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Login</Link>
          <Link href="/register">
            <Button className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-6 h-9 transition-all">
              Join Free
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button could go here */}
      </motion.div>
    </header>
  );
};
