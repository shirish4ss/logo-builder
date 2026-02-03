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
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Logo", href: "/dashboard/create", icon: PenTool },
  { name: "My Gallery", href: "/dashboard/gallery", icon: ImageIcon },
  { name: "Branding Kit", href: "/dashboard/kit", icon: Briefcase },
  { name: "Social Kit", href: "/dashboard/social", icon: Share2 },
  { name: "Mockups", href: "/dashboard/mockups", icon: Box },
  { name: "Guidelines", href: "/dashboard/guidelines", icon: FileText },
  { name: "Favorites", href: "/dashboard/favorites", icon: Heart },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Vectorizer", href: "/dashboard/vectorizer", icon: Zap },
  { name: "Share Links", href: "/dashboard/share", icon: Globe },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "Assets", href: "/dashboard/assets", icon: Puzzle },
  { name: "Integrations", href: "/dashboard/integrations", icon: Globe },
  { name: "Rewards", href: "/dashboard/rewards", icon: Gift },
  { name: "Community", href: "/dashboard/community", icon: Users },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <aside className="w-72 bg-white dark:bg-gray-950 h-screen border-r border-gray-100 dark:border-gray-800 flex flex-col transition-all duration-300 z-40">
      {/* Brand Header */}
      <div className="p-8 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform">
             <span className="text-white font-black text-xl">L</span>
          </div>
          <span className="text-2xl font-black text-gray-900 dark:text-white tracking-tighter">LogoAI</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-6 space-y-1.5 overflow-y-auto scrollbar-hide py-4">
        <p className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Main Menu</p>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <item.icon size={20} className={isActive ? "text-white" : "group-hover:scale-110 transition-transform"} />
              <span className="text-sm font-bold">{item.name}</span>
              {item.name === "Create Logo" && !isActive && (
                <Sparkles size={12} className="ml-auto text-blue-500 animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Area */}
      <div className="p-6 space-y-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/20">
        {isAdmin && (
          <Link href="/admin/dashboard">
            <button className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 font-black text-sm uppercase tracking-wider">
              <Shield size={18} />
              Admin Portal
            </button>
          </Link>
        )}

        <div className="flex items-center justify-between px-2">
            <ThemeToggle />
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              title="Sign Out"
            >
                <LogOut size={20} />
            </button>
        </div>
      </div>
    </aside>
  );
};
