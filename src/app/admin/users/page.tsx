"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, Search, Filter, MoreVertical,
  UserPlus, Shield, Ban, Mail, ExternalLink,
  CheckCircle2, Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const initialUsers = [
  { id: "1", name: "Alex Rivera", email: "alex@example.com", plan: "Pro", status: "Active", joined: "2024-01-15", avatar: "AR" },
  { id: "2", name: "Sarah Chen", email: "sarah@example.com", plan: "Free", status: "Active", joined: "2024-02-01", avatar: "SC" },
  { id: "3", name: "Marcio Silva", email: "marcio@example.com", plan: "Enterprise", status: "Active", joined: "2023-11-20", avatar: "MS" },
  { id: "4", name: "Elena Kovic", email: "elena@example.com", plan: "Pro", status: "Suspended", joined: "2024-01-10", avatar: "EK" },
  { id: "5", name: "James Wilson", email: "james@example.com", plan: "Free", status: "Active", joined: "2024-02-15", avatar: "JW" },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">User Management</h1>
          <p className="text-slate-400 font-medium">Manage and monitor platform members.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 px-6 font-bold shadow-lg shadow-blue-600/20">
          <UserPlus size={18} className="mr-2" /> Add User
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none border-slate-800 text-slate-400 hover:bg-slate-800 h-12 rounded-xl">
            <Filter size={18} className="mr-2" /> Filters
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none border-slate-800 text-slate-400 hover:bg-slate-800 h-12 rounded-xl">
            Export CSV
          </Button>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950/50 border-b border-slate-800">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">User</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Plan</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500">Joined</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-950/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 font-bold text-xs border border-blue-500/20">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white tracking-tight">{user.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                      user.plan === 'Enterprise' ? 'bg-purple-600/10 text-purple-400' :
                      user.plan === 'Pro' ? 'bg-blue-600/10 text-blue-400' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {user.status === 'Active' ? (
                        <CheckCircle2 size={14} className="text-green-500" />
                      ) : (
                        <Clock size={14} className="text-amber-500" />
                      )}
                      <span className="text-sm font-medium text-slate-300">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-400">
                    {user.joined}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-500 hover:text-white"><Mail size={16} /></Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-500 hover:text-blue-400"><Shield size={16} /></Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-500 hover:text-red-400"><Ban size={16} /></Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8 text-slate-500 hover:text-white"><MoreVertical size={16} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-slate-800 flex justify-between items-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Showing {filteredUsers.length} users</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-9 px-4 rounded-lg border-slate-800 text-slate-400" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="h-9 px-4 rounded-lg border-slate-800 text-slate-400">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
