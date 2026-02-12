"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const themes = [
    { name: "light", icon: <Sun size={14} />, label: "Light" },
    { name: "dark", icon: <Moon size={14} />, label: "Dark" },
    { name: "system", icon: <Monitor size={14} />, label: "System" },
  ];

  const currentTheme = themes.find(t => t.name === theme) || themes[2];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-bold text-white/70 hover:text-white"
      >
        <span className="text-blue-500">{currentTheme.icon}</span>
        <ChevronDown size={10} className={`opacity-40 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-full right-0 mt-2 w-32 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-[70] p-1"
            >
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${theme === t.name ? 'bg-blue-600 text-white' : 'text-white/40 hover:bg-white/5 hover:text-white'}`}
                >
                  {t.icon}
                  <span>{t.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
