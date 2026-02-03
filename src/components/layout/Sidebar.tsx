"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard, PenTool, Briefcase, Share2, Settings, User,
  Image as ImageIcon, Heart, Users, CreditCard, History,
  Puzzle, Gift, HelpCircle, Bell, Trash2, Box, FileText, Globe,
  MessageSquare
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Logo", href: "/dashboard/create", icon: PenTool },
  { name: "My Gallery", href: "/dashboard/gallery", icon: ImageIcon },
  { name: "Branding Kit", href: "/dashboard/kit", icon: Briefcase },
  { name: "Social Kit", href: "/dashboard/social", icon: Share2 },
  { name: "Logo Mockups", href: "/dashboard/mockups", icon: Box },
  { name: "Brand Guidelines", href: "/dashboard/guidelines", icon: FileText },
  { name: "Favorites", href: "/dashboard/favorites", icon: Heart },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "History", href: "/dashboard/history", icon: History },
  { name: "Integrations", href: "/dashboard/integrations", icon: Puzzle },
  { name: "Referrals", href: "/dashboard/referrals", icon: Gift },
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  { name: "Assets", href: "/dashboard/assets", icon: Box },
  { name: "Shares", href: "/dashboard/shares", icon: Share2 },
  { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { name: "Help Center", href: "/dashboard/help", icon: Globe },
  { name: "Feedback", href: "/dashboard/feedback", icon: MessageSquare },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const Sidebar = () => {
  const { data: session } = useSession();
  const isAdmin = (session?.user as { role?: string })?.role === "ADMIN";

  return (
    <div className="w-64 bg-white dark:bg-gray-950 h-screen border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">LogoAI</h1>
        <ThemeToggle />
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      {isAdmin && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/admin/dashboard"
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            <User size={20} />
            <span>Admin Panel</span>
          </Link>
        </div>
      )}
    </div>
  );
};
