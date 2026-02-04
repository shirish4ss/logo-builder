"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <PublicNavbar />
      <main className="pt-32 pb-20 px-10 max-w-4xl mx-auto">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-12"
        >
            Terms of Service
        </motion.h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400">
            <p className="mb-6">Effective Date: May 20, 2024</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using LogoAI, you agree to be bound by these terms. If you do not agree, you may not use the service.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">2. Ownership of Designs</h2>
            <p>Upon full payment, users retain the intellectual property rights for the specific logos they download. AI-generated concepts not finalized remain the property of LogoAI.</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">3. Prohibited Uses</h2>
            <p>Users may not use the service to generate content that is illegal, defamatory, or infringes on third-party intellectual property.</p>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
