"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export const PublicFooter = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10"
      >
        <motion.div variants={item} className="col-span-1 md:col-span-2 space-y-8">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-600/20">
              <Sparkles className="text-white" size={28} />
            </div>
            <span className="text-3xl font-black text-white tracking-tighter">LogoAI</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm font-medium">
            The next generation of brand identity. Powered by neural networks, designed for the future of business.
          </p>
          <div className="flex space-x-5">
             {[
               { icon: <Twitter size={20} />, href: "#" },
               { icon: <Instagram size={20} />, href: "#" },
               { icon: <Linkedin size={20} />, href: "#" },
               { icon: <Github size={20} />, href: "#" }
             ].map((social, i) => (
               <Link key={i} href={social.href} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                  {social.icon}
               </Link>
             ))}
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Product</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
            <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            <li><Link href="/showcase" className="hover:text-blue-400 transition-colors">Showcase</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
          </ul>
        </motion.div>

        <motion.div variants={item}>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Resources</h4>
          <ul className="space-y-4 text-gray-400 font-medium">
            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-xs font-bold uppercase tracking-widest"
      >
        <p>&copy; 2025 LogoAI Inc. Crafted with passion for champions.</p>
        <div className="flex space-x-8">
          <span>All rights reserved.</span>
          <span className="text-white/20">|</span>
          <span>India & Global</span>
        </div>
      </motion.div>
    </footer>
  );
};
