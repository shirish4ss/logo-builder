"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard, PenTool, Briefcase, Share2, Settings,
  History, Box, Shield, LogOut, Sparkles, Zap, ChevronRight,
  ImageIcon, CreditCard
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Logo", href: "/dashboard/create", icon: PenTool, highlight: true },
  { name: "Branding Kit", href: "/dashboard/kit", icon: Briefcase },
  { name: "Social Kit", href: "/dashboard/social", icon: Share2 },
  { name: "Mockups", href: "/dashboard/mockups", icon: Box },
  { name: "Vectorizer", href: "/dashboard/vectorizer", icon: Zap },
  { name: "My Gallery", href: "/dashboard/gallery", icon: ImageIcon },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <aside className="w-72 bg-black/40 backdrop-blur-3xl h-screen border-r border-white/5 flex flex-col z-40 relative">
      <div className="p-8 border-b border-white/5">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
             <Sparkles className="text-white" size={20} />
          </div>
          <span className="text-xl font-black text-white tracking-tighter uppercase italic">LogoAI</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto py-8">
        <p className="px-4 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Studio Menu</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group relative",
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <div className="flex items-center space-x-3 relative z-10">
                <item.icon size={18} className={cn(isActive ? "text-white" : "text-white/20 group-hover:text-white transition-colors")} />
                <span className="text-xs font-bold">{item.name}</span>
              </div>

              <div className="flex items-center">
                  {item.highlight && !isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                  )}
                  {isActive && (
                    <ChevronRight size={14} className="text-white/50" />
                  )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto border-t border-white/5 space-y-3 bg-black/20">
        {isAdmin && (
          <Link href="/admin/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/5 transition-all border border-red-400/10">
            <Shield size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Admin Terminal</span>
          </Link>
        )}

        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-white/20 hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
