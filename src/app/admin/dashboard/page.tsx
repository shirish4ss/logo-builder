"use client";

import { motion } from "framer-motion";
import {
  Users, CreditCard, BarChart3, Activity, ShieldCheck,
  Cpu, Terminal, MessageSquare, ArrowUpRight, Globe
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "8,542", icon: Users, color: "text-blue-400", change: "+14%" },
    { label: "Revenue", value: "$42,300", icon: CreditCard, color: "text-green-400", change: "+21%" },
    { label: "AI Jobs", value: "124,000", icon: Cpu, color: "text-purple-400", change: "+32%" },
    { label: "Uptime", value: "99.99%", icon: Activity, color: "text-cyan-400", change: "Stable" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <ShieldCheck className="text-blue-500" />
          Command Center
        </h1>
        <p className="text-slate-400">System-wide monitoring and intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl bg-slate-950 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-slate-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">System Performance</h2>
            <div className="flex gap-2">
              <span className="flex items-center gap-1 text-xs text-slate-400 px-3 py-1 bg-slate-950 rounded-full">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> API Latency: 42ms
              </span>
            </div>
          </div>
          <div className="h-64 flex items-end gap-2 px-2">
            {[40, 60, 45, 90, 65, 80, 50, 70, 85, 40, 60, 75, 95, 80, 60].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-sm"
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-slate-500">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>23:59</span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500 transition-colors group">
                <Terminal size={20} className="text-slate-400 group-hover:text-blue-400 mb-2" />
                <span className="text-xs text-slate-300">Run Audit</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-purple-500 transition-colors group">
                <Globe size={20} className="text-slate-400 group-hover:text-purple-400 mb-2" />
                <span className="text-xs text-slate-300">Clear CDN</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Live Support</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-3 p-3 bg-slate-950/50 rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-white font-medium">Ticket #492{i}</p>
                    <p className="text-[10px] text-slate-500 line-clamp-1 mt-1">Logo export issues on mobile...</p>
                  </div>
                  <ArrowUpRight size={14} className="text-slate-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
