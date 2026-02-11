"use client";

import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-[#050505]">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative scroll-smooth">
        {/* User Top Profile */}
        <div className="sticky top-0 z-30 flex justify-end p-6 bg-[#050505]/80 backdrop-blur-xl">
           <div className="flex items-center space-x-4 glass-card px-4 py-2 border-white/5 bg-white/5">
              <div className="text-right hidden sm:block">
                 <p className="text-sm font-bold text-white">{session?.user?.name}</p>
                 <p className="text-[10px] text-gray-500 uppercase tracking-widest">{session?.user?.role || 'Creator'}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                 {session?.user?.name?.charAt(0) || 'U'}
              </div>
           </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 max-w-7xl mx-auto"
        >
            {children}
        </motion.div>
      </main>
    </div>
  );
}
