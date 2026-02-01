"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, MoreVertical, Edit, Trash2, Ban } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "USER", status: "Active", joined: "2025-01-15" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", role: "ADMIN", status: "Active", joined: "2025-01-10" },
    { id: "3", name: "Mike Ross", email: "mike@example.com", role: "USER", status: "Banned", joined: "2025-01-20" },
  ];

  return (
    <div className="p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500">View and manage all registered users.</p>
        </div>
        <Button>
          <UserPlus size={18} className="mr-2" /> Add New User
        </Button>
      </div>

      {/* Stats Cards & Revenue Chart Mockup */}
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Total Users</p>
          <p className="text-2xl font-bold text-blue-600">1,250</p>
        </div>
        <div className="col-span-1 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Monthly Revenue (MRR)</p>
          <p className="text-2xl font-bold text-green-600">₹1,45,000</p>
          <p className="text-[10px] text-green-500 font-bold">+15% from last month</p>
        </div>
        <div className="col-span-2 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-xl flex items-center justify-center">
           <div className="text-center">
              <p className="text-xs text-slate-400 mb-2">Revenue Growth (Last 30 Days)</p>
              <div className="flex items-end space-x-1 h-12">
                 {[4, 6, 3, 7, 8, 5, 9].map((h, i) => (
                   <div key={i} className="w-4 bg-blue-500 rounded-t" style={{ height: `${h * 10}%` }}></div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" size="sm">Export CSV</Button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-xs uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-gray-500">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                    user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center space-x-1 ${
                    user.status === 'Active' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}></span>
                    <span>{user.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">{user.joined}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600"><Edit size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-red-600"><Ban size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-gray-900"><MoreVertical size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-center">
          <nav className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
