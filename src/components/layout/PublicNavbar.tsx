"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export const PublicNavbar = () => {
  return (
    <header className="px-10 py-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800 backdrop-blur-md sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 transition-colors duration-300">
      <Link href="/" className="flex items-center space-x-2 group">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-black text-xl">L</span>
        </div>
        <h1 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">LogoAI</h1>
      </Link>
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/features" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">Features</Link>
        <Link href="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">Pricing</Link>
        <Link href="/login" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-bold transition-colors">Login</Link>
        <ThemeToggle />
        <Link href="/register">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl px-6 h-11 shadow-lg shadow-blue-500/25">
            Get Started
          </Button>
        </Link>
      </nav>
    </header>
  );
};
