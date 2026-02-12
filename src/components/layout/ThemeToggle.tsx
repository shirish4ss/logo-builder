"use client";

import * as React from "react";
import { Moon, Sun, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const options = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "System", value: "system", icon: Monitor },
  ];

  if (!mounted) return (
    <div className="w-10 h-10 sm:w-28 bg-white/5 border border-white/5 rounded-full animate-pulse" />
  );

  const activeOption = options.find(opt => opt.value === theme) || options[2];
  const ActiveIcon = activeOption.icon;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(!open)}
        className="h-10 px-3 flex items-center space-x-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
      >
        <ActiveIcon size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline-block">
            {theme === 'system' ? 'System' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
        <ChevronDown size={14} className={cn("text-white/20 transition-transform duration-300", open && "rotate-180")} />
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-40 z-50 overflow-hidden rounded-2xl border border-white/5 bg-black/90 backdrop-blur-2xl shadow-2xl p-1.5"
            >
              <div className="px-3 py-2 mb-1">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">Appearance</p>
              </div>
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setTheme(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all",
                    theme === option.value
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <option.icon size={14} />
                    <span>{option.name}</span>
                  </div>
                  {theme === option.value && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
