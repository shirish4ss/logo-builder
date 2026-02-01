import React from "react";
import Link from "next/link";
import { Users, CreditCard, BarChart3, Settings, ShieldCheck, Home } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800 flex items-center space-x-2">
          <ShieldCheck className="text-blue-400" />
          <span className="font-bold text-xl">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/admin/users" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Users size={20} />
            <span>Users</span>
          </Link>
          <Link href="/admin/subscriptions" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <CreditCard size={20} />
            <span>Subscriptions</span>
          </Link>
          <Link href="/admin/settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Settings size={20} />
            <span>System Settings</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link href="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800 transition-colors">
            <Home size={20} />
            <span>Exit Admin</span>
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
