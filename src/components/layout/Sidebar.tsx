"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard, PenTool, Briefcase, Share2, Settings,
  Box, Shield, LogOut, Sparkles, Zap, ChevronRight,
  ImageIcon, CreditCard, Users, Heart, MessageSquare,
  LifeBuoy, Link as LinkIcon, Bell, Gift, Users2, Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuGroups = [
  {
    title: "Studio Menu",
    items: [
      { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
      { name: "Create Logo", href: "/dashboard/create", icon: PenTool, highlight: true },
      { name: "Branding Kit", href: "/dashboard/kit", icon: Briefcase },
      { name: "Social Kit", href: "/dashboard/social", icon: Share2 },
      { name: "Mockups", href: "/dashboard/mockups", icon: Box },
      { name: "Print Studio", href: "/dashboard/print", icon: Zap, highlight: true },
      { name: "Vectorizer", href: "/dashboard/vectorizer", icon: Zap },
      { name: "AI Naming", href: "/dashboard/naming", icon: Search },
    ]
  },
  {
    title: "Assets & Collab",
    items: [
      { name: "My Gallery", href: "/dashboard/gallery", icon: ImageIcon },
      { name: "Favorites", href: "/dashboard/favorites", icon: Heart },
      { name: "Team", href: "/dashboard/team", icon: Users2 },
      { name: "Integrations", href: "/dashboard/integrations", icon: LinkIcon },
    ]
  },
  {
    title: "Growth & Support",
    items: [
      { name: "Rewards", href: "/dashboard/rewards", icon: Gift },
      { name: "Referrals", href: "/dashboard/referrals", icon: Users },
      { name: "Community", href: "/dashboard/community", icon: Users2 },
      { name: "Help Center", href: "/dashboard/help", icon: LifeBuoy },
      { name: "Support", href: "/dashboard/support", icon: MessageSquare },
    ]
  },
  {
    title: "Account",
    items: [
      { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
      { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    ]
  }
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <aside className="w-72 bg-card/80 backdrop-blur-3xl h-screen border-r border-border flex flex-col z-40 relative">
      <div className="p-8 border-b border-border">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
             <Sparkles className="text-primary-foreground" size={20} />
          </div>
          <span className="text-xl font-black text-foreground tracking-tighter uppercase italic">LogoAI</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-8 overflow-y-auto py-8">
        {menuGroups.map((group) => (
          <div key={group.title} className="space-y-1.5">
            <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">{group.title}</p>
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group relative",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <div className="flex items-center space-x-3 relative z-10">
                    <item.icon size={18} className={cn(isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground transition-colors")} />
                    <span className="text-xs font-bold">{item.name}</span>
                  </div>

                  <div className="flex items-center">
                      {item.highlight && !isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                      )}
                      {isActive && (
                        <ChevronRight size={14} className="text-primary-foreground/50" />
                      )}
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="p-6 mt-auto border-t border-border space-y-3 bg-muted/20">
        {isAdmin && (
          <Link href="/admin/dashboard" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-500/5 transition-all border border-red-500/10">
            <Shield size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Admin Terminal</span>
          </Link>
        )}

        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
        >
          <LogOut size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
