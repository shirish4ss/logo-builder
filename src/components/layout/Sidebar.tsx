"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard, PenTool, Briefcase, Share2, Settings, User,
  Image as ImageIcon, Heart, Users, CreditCard, History,
  Puzzle, Gift, HelpCircle, Bell, Box, FileText, Globe,
  MessageSquare, Shield, LogOut, Sparkles, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Logo", href: "/dashboard/create", icon: PenTool, highlight: true },
  { name: "Branding Kit", href: "/dashboard/kit", icon: Briefcase },
  { name: "Social Kit", href: "/dashboard/social", icon: Share2 },
  { name: "Mockups", href: "/dashboard/mockups", icon: Box },
  { name: "Vectorizer", href: "/dashboard/vectorizer", icon: Zap },
  { name: "My Gallery", href: "/dashboard/gallery", icon: ImageIcon },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <aside className="w-64 bg-[#0a0a0a] h-screen border-r border-white/5 flex flex-col z-40">
      <div className="p-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
             <Sparkles className="text-white" size={18} />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">LogoAI</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon size={18} className={isActive ? "text-blue-400" : "group-hover:text-white transition-colors"} />
              <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {item.name}
              </span>
              {item.highlight && !isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5 space-y-2">
        {isAdmin && (
          <Link href="/admin/dashboard" className="flex items-center space-x-3 px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-400/10 transition-all">
            <Shield size={18} />
            <span className="text-sm font-medium">Admin Portal</span>
          </Link>
        )}

        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl text-gray-500 hover:text-white hover:bg-white/5 transition-all"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
