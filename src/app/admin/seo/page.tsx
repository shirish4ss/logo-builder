"use client";

import React from "react";
import { Search, Globe, BarChart3, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function SEOManagementPage() {
  const keywords = [
    { term: "AI Logo Maker", rank: 3, trend: "+2", difficulty: "High" },
    { term: "Vector Designer", rank: 12, trend: "-1", difficulty: "Medium" },
    { term: "Branding Kit Tool", rank: 5, trend: "+5", difficulty: "Low" },
  ];

  return (
    <div className="p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">SEO Analytics</h1>
          <p className="text-gray-500 dark:text-gray-400">Track and optimize platform visibility.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { label: "Domain Authority", value: "42", icon: Globe },
          { label: "Monthly Organic", value: "12.4k", icon: BarChart3 },
          { label: "Backlinks", value: "850+", icon: CheckCircle2 },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
             <div className="flex items-center space-x-3 text-blue-600 mb-4">
                <stat.icon size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">{stat.label}</span>
             </div>
             <p className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
           <h2 className="font-bold">Target Keywords</h2>
           <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Search keywords..." className="w-full pl-10 pr-4 py-2 text-xs border rounded-xl dark:bg-gray-800" />
           </div>
        </div>
        <table className="w-full text-left">
           <thead className="bg-gray-50 dark:bg-gray-800 text-gray-500 text-[10px] uppercase font-bold">
              <tr>
                 <th className="px-6 py-4">Keyword</th>
                 <th className="px-6 py-4">Google Rank</th>
                 <th className="px-6 py-4">Trend</th>
                 <th className="px-6 py-4">Difficulty</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {keywords.map((kw, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                   <td className="px-6 py-4 font-bold text-sm">{kw.term}</td>
                   <td className="px-6 py-4 text-sm">#{kw.rank}</td>
                   <td className="px-6 py-4 text-sm text-green-500 font-bold">{kw.trend}</td>
                   <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold">{kw.difficulty}</span>
                   </td>
                </tr>
              ))}
           </tbody>
        </table>
      </div>
    </div>
  );
}
