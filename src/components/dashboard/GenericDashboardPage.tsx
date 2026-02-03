"use client";

import { motion } from "framer-motion";

export default function GenericDashboardPage({ title }: { title: string }) {
  return (
    <div className="p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-12 border border-gray-100 dark:border-gray-800 shadow-xl text-center"
      >
        <h1 className="text-4xl font-black mb-6">{title}</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          This feature is currently in development. We are working hard to bring you the best {title.toLowerCase()} experience.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
                <div key={i} className="h-32 bg-gray-50 dark:bg-gray-800/50 rounded-3xl animate-pulse"></div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}
