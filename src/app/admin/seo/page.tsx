"use client";

import { motion } from "framer-motion";
import { Search, Globe, TrendingUp, BarChart, Settings, CheckCircle } from "lucide-react";

export default function SEOPage() {
  const stats = [
    { label: "Organic Reach", value: "42.5k", icon: TrendingUp, color: "text-emerald-400" },
    { label: "Search Index", value: "98%", icon: Globe, color: "text-blue-400" },
    { label: "Domain Rating", value: "64", icon: BarChart, color: "text-purple-400" },
  ];

  const pages = [
    { path: "/", status: "Optimized", score: 95 },
    { path: "/showcase", status: "Optimized", score: 88 },
    { path: "/features", status: "Review Required", score: 72 },
    { path: "/pricing", status: "Optimized", score: 91 },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">SEO Engine</h1>
        <p className="text-slate-400">Manage search engine visibility and performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <stat.icon className={stat.color} size={20} />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Real-time</span>
            </div>
            <p className="text-slate-400 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Page Performance</h2>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Re-crawl All</button>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-950/50 text-slate-500 uppercase tracking-tighter">
              <th className="px-6 py-4 font-medium">Endpoint</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Health Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {pages.map((page, i) => (
              <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                <td className="px-6 py-4 text-white font-mono">{page.path}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    page.status === 'Optimized' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {page.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                   <div className="flex items-center justify-end gap-3">
                      <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full ${page.score > 90 ? 'bg-emerald-500' : 'bg-blue-500'}`} style={{ width: `${page.score}%` }} />
                      </div>
                      <span className="font-bold text-white">{page.score}%</span>
                   </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
               <Settings size={18} className="text-slate-400" />
               Global Metadata
            </h3>
            <div className="space-y-4">
               <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-2">Meta Title Prefix</label>
                  <input type="text" defaultValue="LogoAI | " className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500" />
               </div>
               <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-2">Default Description</label>
                  <textarea rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-blue-500" defaultValue="Create legendary brand identities with our AI-powered design engine." />
               </div>
               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors">Save Metadata</button>
            </div>
         </div>

         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6">
               <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">SEO Insight AI</h3>
            <p className="text-slate-400 text-sm max-w-xs mb-8">Let our AI analyze your competition and suggest the best keywords for your landing pages.</p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">Analyze Keywords</button>
         </div>
      </div>
    </div>
  );
}
