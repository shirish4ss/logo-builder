"use client";

import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative scroll-smooth">
        <div className="absolute top-0 right-0 p-6 flex items-center space-x-4">
           <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900 dark:text-white">{session?.user?.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{session?.user?.role || 'User'}</p>
           </div>
           <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 font-bold">
              {session?.user?.name?.charAt(0) || 'U'}
           </div>
        </div>
        <div className="max-w-7xl mx-auto min-h-full">
            {children}
        </div>
      </main>
    </div>
  );
}
