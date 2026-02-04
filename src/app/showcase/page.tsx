"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion } from "framer-motion";

export default function ShowcasePage() {
  const showcaseLogos = [
    { name: "Luminary", category: "Tech", color: "from-blue-500 to-cyan-400" },
    { name: "Earthe", category: "Eco", color: "from-green-500 to-emerald-400" },
    { name: "Aura", category: "Wellness", color: "from-purple-500 to-pink-400" },
    { name: "Velocity", category: "Automotive", color: "from-red-500 to-orange-400" },
    { name: "Apex", category: "Finance", color: "from-slate-700 to-slate-900" },
    { name: "Bloom", category: "Lifestyle", color: "from-rose-400 to-red-400" },
    { name: "Orbit", category: "Space", color: "from-indigo-600 to-blue-700" },
    { name: "Pulse", category: "Health", color: "from-cyan-500 to-blue-500" },
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
            Built With <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">LogoAI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Explore a gallery of professional brands created by our community. From minimalist tech icons to vibrant lifestyle emblems.
          </motion.p>
        </section>

        <section className="px-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {showcaseLogos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-square rounded-[2rem] bg-gradient-to-br ${logo.color} p-1 mb-4 group-hover:scale-[1.02] transition-transform duration-500 shadow-xl shadow-black/5`}>
                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[1.8rem] flex items-center justify-center relative overflow-hidden">
                   <span className="text-4xl font-black bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-700">
                     {logo.name[0]}
                   </span>
                </div>
              </div>
              <h3 className="text-xl font-bold">{logo.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{logo.category}</p>
            </motion.div>
          ))}
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
