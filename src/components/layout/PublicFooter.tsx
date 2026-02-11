"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export const PublicFooter = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">LogoAI</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
            The next generation of brand identity. Powered by artificial intelligence, designed for the future.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8">Product</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            <li><Link href="/showcase" className="hover:text-blue-400 transition-colors">Showcase</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8">Resources</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
        <p>&copy; 2025 LogoAI Inc. Crafted for champions.</p>
        <div className="flex space-x-8">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
};
