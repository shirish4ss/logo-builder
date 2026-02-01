"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldAlert, Globe, Activity, Trash2, CheckCircle } from "lucide-react";

export default function AdminSupportPage() {
  const tickets = [
    { id: "TCK-001", user: "John Doe", subject: "SVG Export error", priority: "High", status: "Open" },
    { id: "TCK-002", user: "Mike Ross", subject: "Payment failed", priority: "Medium", status: "Resolved" },
  ];

  return (
    <div className="p-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Security & Support</h1>
        <p className="text-gray-500">Manage support tickets, security settings, and internationalization.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Support Tickets */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold flex items-center"><MessageCircle size={20} className="mr-2 text-blue-600" /> Support Tickets</h2>
            <Button variant="ghost" size="sm">View History</Button>
          </div>
          <div className="divide-y divide-gray-50">
            {tickets.map(ticket => (
              <div key={ticket.id} className="p-4 hover:bg-gray-50 flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">{ticket.subject}</p>
                  <p className="text-xs text-gray-400">From: {ticket.user} • {ticket.id}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    ticket.priority === 'High' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {ticket.priority}
                  </span>
                  <Button size="sm" variant={ticket.status === 'Resolved' ? 'ghost' : 'outline'}>
                    {ticket.status === 'Resolved' ? <CheckCircle className="text-green-500" size={18} /> : "Reply"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & IP Banning */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <ShieldAlert className="text-red-600" />
            <h2 className="text-xl font-bold">Security Settings</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Ban IP Address</label>
              <div className="flex space-x-2">
                <input type="text" placeholder="192.168.1.1" className="flex-1 px-4 py-2 border rounded-lg" />
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">Ban IP</Button>
              </div>
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-sm font-bold">Active Bans</p>
              <div className="p-3 bg-red-50 rounded-lg flex justify-between items-center text-xs text-red-700">
                <span>103.45.XX.XX (Brute force attempt)</span>
                <button className="hover:underline font-bold">Unban</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
         {/* i18n Management */}
         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="text-blue-600" size={20} />
              <h3 className="font-bold">i18n Management</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>English (US)</span>
                <span className="text-green-500 font-bold">100%</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Hindi (IN)</span>
                <span className="text-orange-500 font-bold">85%</span>
              </div>
            </div>
            <Button variant="outline" className="w-full text-xs">Manage Translations</Button>
         </div>

         {/* Activity Heatmap Mockup */}
         <div className="col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-2">
              <Activity className="text-blue-600" size={20} />
              <h3 className="font-bold">Global Activity Heatmap</h3>
            </div>
            <div className="h-32 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 italic text-gray-400 text-sm">
              Interactive world map showing user activity will be rendered here.
            </div>
         </div>
      </div>
    </div>
  );
}
