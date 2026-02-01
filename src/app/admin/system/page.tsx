"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Activity, Database, Key, ShieldAlert, Terminal, RefreshCw, HardDrive } from "lucide-react";

export default function AdminSystemPage() {
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">System & Monitoring</h1>
          <p className="text-gray-500">Monitor system health, manage backups, and security.</p>
        </div>
        <div className="flex items-center space-x-4 bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
          <span className="text-sm font-medium text-gray-700 ml-2">Maintenance Mode</span>
          <button
            onClick={() => setIsMaintenanceMode(!isMaintenanceMode)}
            className={`w-12 h-6 rounded-full transition-colors relative ${isMaintenanceMode ? 'bg-red-500' : 'bg-gray-200'}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${isMaintenanceMode ? 'left-7' : 'left-1'}`}></div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[
          { label: "CPU Usage", value: "12%", icon: Activity, color: "text-blue-600" },
          { label: "Memory", value: "1.2GB / 4GB", icon: HardDrive, color: "text-purple-600" },
          { label: "DB Connections", value: "8 Active", icon: Database, color: "text-green-600" },
          { label: "API Latency", value: "120ms", icon: RefreshCw, color: "text-orange-600" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex justify-between items-center">
              <stat.icon size={20} className={stat.color} />
              <span className="text-[10px] font-bold text-green-500 uppercase">Healthy</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* API Key Management */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center"><Key size={20} className="mr-2 text-blue-600" /> API Key Management</h2>
            <Button size="sm">Generate New Key</Button>
          </div>
          <div className="space-y-4">
            {[
              { service: "Google Gemini", key: "sk-••••••••••••••••", status: "Active" },
              { service: "OpenRouter", key: "or-••••••••••••••••", status: "Active" },
              { service: "Razorpay", key: "rzp_••••••••••••••••", status: "Active" },
            ].map(api => (
              <div key={api.service} className="p-4 bg-gray-50 rounded-xl flex justify-between items-center border border-gray-100">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{api.service}</p>
                  <p className="font-mono text-xs text-gray-400">{api.key}</p>
                </div>
                <Button variant="ghost" size="sm">Rotate</Button>
              </div>
            ))}
          </div>
        </div>

        {/* System Logs */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900">
            <h2 className="text-sm font-bold text-slate-300 flex items-center"><Terminal size={16} className="mr-2" /> Live System Logs</h2>
            <div className="flex space-x-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-4 font-mono text-[10px] text-green-400 space-y-1 h-64 overflow-y-auto">
            <p>[2025-01-31 14:20:01] INFO: Logo generated for User#4221</p>
            <p>[2025-01-31 14:21:45] WARN: API latency spike detected (180ms)</p>
            <p>[2025-01-31 14:22:10] INFO: New subscription started: PRO_PLAN</p>
            <p className="animate-pulse">_</p>
          </div>
        </div>
      </div>

      {/* Global Announcement Section */}
      <section className="bg-orange-50 border border-orange-100 p-8 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center space-x-3">
          <ShieldAlert className="text-orange-600" />
          <h2 className="text-xl font-bold text-orange-900">Global Announcement Bar</h2>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Maintenance in 1 hour..."
            className="flex-1 px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
          <Button className="bg-orange-600 hover:bg-orange-700">Push to All Users</Button>
        </div>
      </section>

      {/* Backups Section */}
      <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
            <Database size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Automatic Backups</h2>
            <p className="text-sm text-gray-500">Last backup: 4 hours ago. Size: 1.2 GB.</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline">Schedule Backups</Button>
          <Button className="bg-blue-600">Backup Now</Button>
        </div>
      </section>
    </div>
  );
}
