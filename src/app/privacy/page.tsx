"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <PublicNavbar />
      <main className="pt-32 pb-20 px-10 max-w-4xl mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-12"
        >
            Privacy Policy
        </motion.h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <p className="mb-6">Last updated: May 20, 2024</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you create an account, use our AI design tools, or communicate with us.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. How We Use Your Data</h2>
            <p>Your data is used to provide, maintain, and improve our services, including the training of our generative models (optional) and personalizing your experience.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information and design assets.</p>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
