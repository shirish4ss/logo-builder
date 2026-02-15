"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users, CreditCard, BarChart3, Settings, ShieldCheck, Home,
  Cpu, Terminal, Palette, Landmark, Key, MessageSquare,
  Activity, Search, Mail, Image as ImageIcon, Power,
  Database, Lock, History, ChevronRight, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const sidebarLinks = [
  { group: "Core", links: [
    { label: "Overview", href: "/admin/dashboard", icon: BarChart3 },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
    { label: "Analytics", href: "/admin/analytics", icon: Activity },
  ]},
  { group: "AI Engine", links: [
    { label: "Prompts", href: "/admin/prompts", icon: Terminal },
    { label: "Prompt Lab", href: "/admin/prompt-lab", icon: Sparkles },
    { label: "AI Models", href: "/admin/ai", icon: Cpu },
    { label: "Styles", href: "/admin/styles", icon: Palette },
    { label: "Samples", href: "/admin/samples", icon: ImageIcon },
  ]},
  { group: "Operations", links: [
    { label: "Finance", href: "/admin/finance", icon: Landmark },
    { label: "Support", href: "/admin/support", icon: MessageSquare },
    { label: "Media Manager", href: "/admin/media", icon: ImageIcon },
    { label: "API Access", href: "/admin/api-access", icon: Key },
    { label: "Audit Logs", href: "/admin/audit", icon: History },
  ]},
  { group: "System", links: [
    { label: "SEO Engine", href: "/admin/seo", icon: Search },
    { label: "Emails", href: "/admin/emails", icon: Mail },
    { label: "Security", href: "/admin/security", icon: Lock },
    { label: "Database", href: "/admin/database", icon: Database },
    { label: "Backups", href: "/admin/backups", icon: History },
    { label: "Maintenance", href: "/admin/maintenance", icon: Power },
    { label: "System Health", href: "/admin/system", icon: Activity },
    { label: "Settings", href: "/admin/settings", icon: Settings },
  ]}
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Admin Sidebar */}
      <aside className="w-80 bg-card/80 backdrop-blur-3xl border-r border-border flex flex-col sticky top-0 h-screen overflow-y-auto z-50">
        <div className="p-8 border-b border-border">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <ShieldCheck className="text-primary-foreground" size={20} />
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-widest text-foreground">LogoAI</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Command Center</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-8">
          {sidebarLinks.map((group) => (
            <div key={group.group} className="space-y-2">
              <p className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">{group.group}</p>
              <div className="space-y-1">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between group px-4 py-3 rounded-xl transition-all duration-300",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <link.icon size={18} className={cn(isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                        <span className="text-xs font-bold">{link.label}</span>
                      </div>
                      <ChevronRight size={14} className={cn("opacity-0 transition-all", isActive ? "opacity-100" : "group-hover:opacity-40 group-hover:translate-x-1")} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-border space-y-4">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
          <Link href="/dashboard" className="flex items-center space-x-3 p-4 rounded-xl bg-muted hover:bg-muted/80 transition-all text-muted-foreground hover:text-foreground group">
            <Home size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Exit Terminal</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-muted/20 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
