"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function GenericDashboardPage({ title }: { title: string }) {
  return (
    <div className="py-12 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-20 border-white/5 bg-white/[0.02] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10"></div>
        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-blue-400">
          <Sparkles size={32} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white mb-6">{title}</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The {title.toLowerCase()} engine is being synthesized. <br/>
          Join the waitlist for early access to our pro tools.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
                <div key={i} className="h-40 bg-white/[0.03] rounded-3xl border border-white/5 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent"></div>
                </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
