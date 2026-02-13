"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, Search, Filter, MoreHorizontal,
  Shield, CheckCircle2, XCircle, ExternalLink,
  Mail, Ban, Trash2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UsersAdminPage() {
  const users = [
    { id: 1, name: "Arjun Mehta", email: "arjun@mehta.design", role: "PRO", status: "Active", logos: 24, joined: "2 hours ago" },
    { id: 2, name: "Sarah Jenkins", email: "sarah.j@techstartup.io", role: "FREE", status: "Active", logos: 3, joined: "Yesterday" },
    { id: 3, name: "Rahul Sharma", email: "rahul@agency.in", role: "ENT", status: "Suspended", logos: 156, joined: "5 days ago" },
    { id: 4, name: "David Chen", email: "david@creative.co", role: "PRO", status: "Active", logos: 12, joined: "1 week ago" },
    { id: 5, name: "Priya Das", email: "priya@freelance.com", role: "FREE", status: "Active", logos: 1, joined: "2 weeks ago" },
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">User Management</h1>
          <p className="text-gray-500 font-medium">Manage and audit your global user base.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-500 font-bold px-6 rounded-xl shadow-lg shadow-blue-600/20">
           Export CSV
        </Button>
      </div>

      <div className="flex gap-4">
         <div className="flex-1 glass-card border-white/5 bg-white/[0.02] px-6 py-3 flex items-center space-x-4">
            <Search className="text-gray-600" size={18} />
            <input
              type="text"
              placeholder="Search by name, email or ID..."
              className="bg-transparent border-none focus:outline-none text-white text-sm w-full placeholder:text-gray-700"
            />
         </div>
         <Button variant="outline" className="h-full border-white/5 bg-white/[0.02] text-gray-500 font-bold px-6 rounded-xl hover:text-white">
            <Filter size={18} className="mr-2" /> Filters
         </Button>
      </div>

      <div className="glass-card border-white/5 bg-white/[0.02] overflow-hidden rounded-[2rem]">
         <table className="w-full text-left">
            <thead>
               <tr className="border-b border-white/5 bg-white/[0.01]">
                  <th className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">User</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Plan</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Activity</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-6 text-[10px] font-black text-gray-600 uppercase tracking-widest text-right">Actions</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user.id} className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
                     <td className="px-8 py-6">
                        <div className="flex items-center space-x-4">
                           <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-sm font-black">
                              {user.name.charAt(0)}
                           </div>
                           <div>
                              <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{user.name}</p>
                              <p className="text-xs text-gray-600 mt-0.5">{user.email}</p>
                           </div>
                        </div>
                     </td>
                     <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-md text-[9px] font-black uppercase tracking-widest ${
                           user.role === 'ENT' ? 'bg-purple-500/10 text-purple-500 border border-purple-500/20' :
                           user.role === 'PRO' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                           'bg-white/5 text-gray-500 border border-white/5'
                        }`}>
                           {user.role}
                        </span>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center space-x-2 text-xs">
                           <span className="text-white font-bold">{user.logos}</span>
                           <span className="text-gray-600">logos created</span>
                        </div>
                        <p className="text-[10px] text-gray-700 mt-1 uppercase font-bold tracking-tighter">Joined {user.joined}</p>
                     </td>
                     <td className="px-8 py-6">
                        <div className="flex items-center space-x-2">
                           <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                           <span className={`text-[10px] font-black uppercase tracking-widest ${user.status === 'Active' ? 'text-emerald-500' : 'text-red-500'}`}>{user.status}</span>
                        </div>
                     </td>
                     <td className="px-8 py-6 text-right">
                        <div className="flex justify-end space-x-2">
                           <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:text-white hover:bg-white/5 rounded-lg"><Mail size={16} /></Button>
                           <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:text-white hover:bg-white/5 rounded-lg"><ExternalLink size={16} /></Button>
                           <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-600 hover:text-red-500 hover:bg-red-500/5 rounded-lg"><Ban size={16} /></Button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
}
