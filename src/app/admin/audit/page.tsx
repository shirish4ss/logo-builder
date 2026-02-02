"use client";

import React from "react";
import { History, Shield, User, Clock, AlertCircle } from "lucide-react";

export default function AuditLogsPage() {
  const logs = [
    { event: "Login Success", user: "admin@logoai.com", ip: "192.168.1.1", time: "2 mins ago", severity: "info" },
    { event: "Subscription Upgraded", user: "rahul@startup.in", ip: "103.21.54.12", time: "15 mins ago", severity: "success" },
    { event: "Failed Password Attempt", user: "unknown", ip: "45.12.89.23", time: "1 hour ago", severity: "warning" },
    { event: "API Key Generated", user: "mark@agency.com", ip: "88.42.11.05", time: "3 hours ago", severity: "info" },
  ];

  return (
    <div className="p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Security Audit Logs</h1>
          <p className="text-gray-500 dark:text-gray-400">Monitor system activity and user actions.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 flex items-center space-x-2">
            <Clock size={18} className="text-gray-400" />
            <h2 className="font-bold text-sm">Recent Events</h2>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
           {logs.map((log, i) => (
             <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                <div className="flex items-center space-x-4">
                   <div className={`p-2 rounded-lg ${log.severity === 'warning' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'}`}>
                      {log.severity === 'warning' ? <AlertCircle size={18} /> : <Shield size={18} />}
                   </div>
                   <div>
                      <p className="font-bold text-sm text-gray-900 dark:text-white">{log.event}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-400 mt-1">
                         <User size={12} />
                         <span>{log.user}</span>
                         <span>•</span>
                         <span>IP: {log.ip}</span>
                      </div>
                   </div>
                </div>
                <span className="text-xs font-medium text-gray-400">{log.time}</span>
             </div>
           ))}
        </div>
        <div className="p-4 text-center border-t border-gray-100 dark:border-gray-800">
            <button className="text-xs font-bold text-blue-600 hover:text-blue-500">View All Logs</button>
        </div>
      </div>
    </div>
  );
}
