import React from "react";
import Link from "next/link";
import {
  Users, CreditCard, BarChart3, Settings, ShieldCheck, Home,
  Cpu, Terminal, Palette, Landmark, Key, MessageSquare,
  Activity, Search, Mail, Image as ImageIcon, Power,
  Database, Globe, Lock, History, Gift, Bell
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Admin Sidebar */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col sticky top-0 h-screen overflow-y-auto scrollbar-hide">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="text-blue-400" />
            <span className="font-bold text-xl">Admin Panel</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Core</p>
          <Link href="/admin/dashboard" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <BarChart3 size={18} />
            <span>Overview</span>
          </Link>
          <Link href="/admin/users" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Users size={18} />
            <span>Users</span>
          </Link>
          <Link href="/admin/subscriptions" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <CreditCard size={18} />
            <span>Subscriptions</span>
          </Link>

          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2">AI Management</p>
          <Link href="/admin/prompts" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Terminal size={18} />
            <span>Prompts</span>
          </Link>
          <Link href="/admin/ai" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Cpu size={18} />
            <span>AI Models</span>
          </Link>
          <Link href="/admin/styles" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Palette size={18} />
            <span>Styles</span>
          </Link>

          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2">Operations</p>
          <Link href="/admin/finance" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Landmark size={18} />
            <span>Finance</span>
          </Link>
          <Link href="/admin/support" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <MessageSquare size={18} />
            <span>Support</span>
          </Link>
          <Link href="/admin/audit" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <History size={18} />
            <span>Audit Logs</span>
          </Link>

          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2">System</p>
          <Link href="/admin/settings" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
          <Link href="/admin/system" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Activity size={18} />
            <span>Health</span>
          </Link>
          <Link href="/admin/media" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <ImageIcon size={18} />
            <span>Media</span>
          </Link>
          <Link href="/admin/database" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Database size={18} />
            <span>Database</span>
          </Link>
          <Link href="/admin/security" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Lock size={18} />
            <span>Security</span>
          </Link>
          <Link href="/admin/api-access" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Key size={18} />
            <span>API Access</span>
          </Link>
          <Link href="/admin/maintenance" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Power size={18} />
            <span>Maintenance</span>
          </Link>

          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mt-6 mb-2">Growth</p>
          <Link href="/admin/seo" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Search size={18} />
            <span>SEO</span>
          </Link>
          <Link href="/admin/emails" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Mail size={18} />
            <span>Emails</span>
          </Link>
          <Link href="/admin/analytics" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <BarChart3 size={18} />
            <span>Analytics</span>
          </Link>
          <Link href="/admin/backups" className="flex items-center space-x-3 p-2.5 rounded-lg hover:bg-slate-800 transition-colors">
            <Database size={18} />
            <span>Backups</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Link href="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-400">
            <Home size={20} />
            <span>Back to App</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
