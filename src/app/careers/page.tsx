"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <PublicNavbar />
      <main className="pt-32 pb-20 px-10 max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-5xl font-black mb-8">Join the Revolution</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
              We&apos;re looking for passionate designers, engineers, and AI researchers to build the future of brand identity.
            </p>
            <div className="space-y-6">
                {["Senior AI Engineer", "Frontend Developer (Next.js)", "Product Designer"].map((job, i) => (
                    <div key={i} className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 flex justify-between items-center hover:border-blue-500 transition-colors cursor-pointer group">
                        <span className="text-xl font-bold group-hover:text-blue-600 transition-colors">{job}</span>
                        <span className="text-blue-600 font-bold">Apply Now &rarr;</span>
                    </div>
                ))}
            </div>
        </motion.div>
      </main>
      <PublicFooter />
    </div>
  );
}
