"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export const PublicNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl glass-card px-8 py-3 flex justify-between items-center backdrop-blur-2xl bg-card/70 border-border shadow-sm"
      >
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="text-primary-foreground" size={20} />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">LogoAI</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/features" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          <Link href="/showcase" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Showcase</Link>
          <Link href="/pricing" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>

          <div className="w-px h-4 bg-border" />

          <ThemeToggle />

          <Link href="/login" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Login</Link>
          <Link href="/register">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-black uppercase tracking-widest rounded-full px-8 h-10 transition-all shadow-md hover:scale-105 active:scale-95">
              Join Free
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button could go here */}
      </motion.div>
    </header>
  );
};
