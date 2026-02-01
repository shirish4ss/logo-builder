"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Activity, Terminal, ShieldAlert, Key, Globe, Lock } from "lucide-react";

export default function AdminSystemPage() {
  const [logs, setLogs] = useState([
    { id: 1, type: "INFO", message: "User #451 generated a new SVG logo.", time: "2 mins ago" },
    { id: 2, type: "WARN", message: "Multiple failed login attempts from IP 103.45.XX.XX", time: "15 mins ago" },
    { id: 3, type: "ERROR", message: "Gemini API quota reached for Free tier.", time: "1 hour ago" },
  ]);

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Security & Monitoring</h1>
          <p className="text-gray-500">Monitor system health, manage security protocols and API keys.</p>
        </div>
        <div className="flex space-x-3">
           <Button variant="outline"><Shield size={18} className="mr-2" /> Security Audit</Button>
           <Button className="bg-red-600 hover:bg-red-700"><Lock size={18} className="mr-2" /> Maintenance Mode</Button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: "Active Sessions", value: "142", icon: Globe, color: "text-blue-600" },
          { label: "API Latency", value: "124ms", icon: Activity, color: "text-green-600" },
          { label: "Storage Used", value: "1.2GB", icon: Shield, color: "text-purple-600" },
          { label: "Security Score", value: "98/100", icon: ShieldAlert, color: "text-orange-600" },
        ].map(stat => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
             <stat.icon size={20} className={stat.color} />
             <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
             <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Live Logs */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
           <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h2 className="text-white font-bold flex items-center"><Terminal size={20} className="mr-2 text-green-400" /> System Activity Logs</h2>
              <span className="text-[10px] text-slate-500 font-mono">LIVE_FEED</span>
           </div>
           <div className="p-6 space-y-4 h-64 overflow-y-auto">
              {logs.map(log => (
                <div key={log.id} className="flex space-x-3 text-xs font-mono">
                   <span className={
                     log.type === 'INFO' ? 'text-blue-400' :
                     log.type === 'WARN' ? 'text-yellow-400' : 'text-red-400'
                   }>[{log.type}]</span>
                   <span className="text-slate-300 flex-1">{log.message}</span>
                   <span className="text-slate-500">{log.time}</span>
                </div>
              ))}
              <div className="animate-pulse text-green-400">_</div>
           </div>
        </div>

        {/* API Key Management */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
           <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center"><Key size={24} className="mr-2 text-blue-600" /> API Keys</h2>
              <Button size="sm">Rotate All Keys</Button>
           </div>
           <div className="space-y-4">
              {[
                { name: "Google Gemini", key: "sk-proj-••••••••", status: "Active" },
                { name: "Razorpay Live", key: "rzp_live_••••••••", status: "Active" },
                { name: "AWS S3 Storage", key: "AKIA••••••••", status: "Active" },
              ].map(api => (
                <div key={api.name} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                   <div>
                      <p className="text-sm font-bold text-gray-900">{api.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono">{api.key}</p>
                   </div>
                   <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">{api.status}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
