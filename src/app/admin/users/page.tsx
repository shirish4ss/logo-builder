"use client";

import { motion } from "framer-motion";
import { Users, Search, MoreVertical, Shield } from "lucide-react";

export default function UsersPage() {
  const users = [
    { id: 1, name: "Admin User", email: "admin@logoai.com", plan: "Enterprise", status: "Active", role: "Admin" },
    { id: 2, name: "John Doe", email: "john@example.com", plan: "Free", status: "Active", role: "User" },
    { id: 3, name: "Jane Smith", email: "jane@company.com", plan: "Pro", status: "Inactive", role: "User" },
    { id: 4, name: "Bob Wilson", email: "bob@wilson.io", plan: "Basic", status: "Active", role: "User" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">User Management</h1>
          <p className="text-slate-400">Manage your users and their permissions.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
          <Users size={18} />
          Add New User
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-950/50 text-slate-400 text-sm uppercase">
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Plan</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-medium">{user.name}</div>
                      <div className="text-slate-500 text-xs">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.plan === 'Enterprise' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                    user.plan === 'Pro' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                  }`}>
                    {user.plan}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1.5 text-sm ${
                    user.status === 'Active' ? 'text-green-400' : 'text-slate-400'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-400' : 'bg-slate-400'}`} />
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-300">
                    {user.role === 'Admin' && <Shield size={14} className="text-blue-400" />}
                    {user.role}
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-500 hover:text-white transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
