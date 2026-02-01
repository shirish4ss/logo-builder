"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Key, Code, Copy, RefreshCw, ShieldCheck } from "lucide-react";

export default function AdminAPIAccessPage() {
  const apiKeys = [
    { dev: "DevTeam Alpha", key: "la_••••••••••••••••", status: "Active", calls: "12,400" },
    { dev: "MobileApp Sync", key: "la_••••••••••••••••", status: "Inactive", calls: "0" },
  ];

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Developer API Access</h1>
          <p className="text-gray-500">Sell and manage API keys for external developers.</p>
        </div>
        <Button>Generate New Dev Key</Button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 font-bold uppercase text-[10px]">
             <tr>
               <th className="px-6 py-4">Developer / App</th>
               <th className="px-6 py-4">API Key</th>
               <th className="px-6 py-4">Status</th>
               <th className="px-6 py-4">Usage (Monthly)</th>
               <th className="px-6 py-4 text-right">Actions</th>
             </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {apiKeys.map(api => (
              <tr key={api.dev}>
                <td className="px-6 py-4 font-bold text-gray-900">{api.dev}</td>
                <td className="px-6 py-4 font-mono text-gray-500">{api.key}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    api.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {api.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium">{api.calls} calls</td>
                <td className="px-6 py-4 text-right flex justify-end space-x-2">
                   <Button variant="ghost" size="sm"><RefreshCw size={14} /></Button>
                   <Button variant="ghost" size="sm" className="text-red-500"><ShieldCheck size={14} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="bg-blue-600 rounded-2xl p-8 text-white flex items-center justify-between">
         <div className="flex items-center space-x-4">
           <div className="p-4 bg-white/10 rounded-xl"><Code size={32} /></div>
           <div>
             <h3 className="text-xl font-bold">API Documentation</h3>
             <p className="text-blue-100">Guide for developers to integrate LogoAI into their apps.</p>
           </div>
         </div>
         <Button className="bg-white text-blue-600 hover:bg-blue-50">View API Docs</Button>
      </section>
    </div>
  );
}
