"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-slate-800 rounded-[3rem] p-20 text-center shadow-2xl"
      >
        <h1 className="text-4xl font-black text-white mb-6">Admin Overview</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          This administrative module is active but the detailed UI is currently being refined for the best management experience.
        </p>
        <div className="mt-12 flex justify-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </motion.div>
    </div>
  );
}
