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
import { motion } from "framer-motion";

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
    <div className="flex min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* Admin Sidebar */}
      <aside className="w-80 bg-black/40 backdrop-blur-3xl border-r border-white/5 flex flex-col sticky top-0 h-screen overflow-y-auto z-50">
        <div className="p-8 border-b border-white/5">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-blue-600/20">
              <ShieldCheck className="text-white" size={20} />
            </div>
            <div>
              <p className="font-black text-xs uppercase tracking-widest">LogoAI</p>
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Command Center</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-6 space-y-8">
          {sidebarLinks.map((group) => (
            <div key={group.group} className="space-y-2">
              <p className="px-4 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">{group.group}</p>
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
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                          : "text-white/40 hover:text-white hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center space-x-3">
                        <link.icon size={18} className={cn(isActive ? "text-white" : "text-white/20 group-hover:text-white")} />
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

        <div className="p-6 border-t border-white/5">
          <Link href="/dashboard" className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white group">
            <Home size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Exit Terminal</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#050505] relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
        <div className="p-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
