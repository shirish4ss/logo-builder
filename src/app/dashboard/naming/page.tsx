"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Copy, RefreshCw, CheckCircle2 } from "lucide-react";

export default function NamingPage() {
  const [keyword, setKeyword] = useState("");
  const [names, setNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const generateNames = () => {
    if (!keyword) return;
    setLoading(true);
    // Simulate AI generation
    setTimeout(() => {
      const concepts = [
        `${keyword}ly`, `${keyword}ify`, `Neo${keyword}`, `Pure${keyword}`,
        `${keyword}Flow`, `${keyword}Sphere`, `${keyword}Grid`, `${keyword}Base`,
        `Vivid${keyword}`, `Zen${keyword}`
      ];
      setNames(concepts);
      setLoading(false);
    }, 1000);
  };

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-black mb-4">AI Brand Name Generator</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter a keyword to generate unique, brandable names for your business.</p>
      </motion.div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl mb-12">
        <div className="flex space-x-4">
          <Input
            placeholder="e.g. Design, Tech, Coffee..."
            className="h-14 rounded-2xl text-lg px-6"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateNames()}
          />
          <Button
            onClick={generateNames}
            disabled={loading || !keyword}
            className="h-14 px-8 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-lg shadow-blue-500/20"
          >
            {loading ? <RefreshCw className="animate-spin" /> : <Sparkles className="mr-2" />}
            Generate
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {names.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center group"
            >
              <span className="text-xl font-bold">{name}</span>
              <button
                onClick={() => copyToClipboard(name)}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                {copied === name ? <CheckCircle2 className="text-green-500" size={20} /> : <Copy size={20} />}
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {names.length === 0 && !loading && (
        <div className="text-center py-20 border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-[3rem]">
            <p className="text-gray-400 font-medium">Your creative names will appear here.</p>
        </div>
      )}
    </div>
  );
}
