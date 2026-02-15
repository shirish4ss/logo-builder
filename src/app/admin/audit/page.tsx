"use client";

import React from 'react';
import { Shield, Clock, User, Activity, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const mockLogs = [
    { id: 1, user: 'admin@logowizard.ai', action: 'LOGIN_SUCCESS', target: 'System', timestamp: '2023-10-27 10:45:12', ip: '192.168.1.1' },
    { id: 2, user: 'johndoe@gmail.com', action: 'LOGO_CREATE', target: 'Logo #452', timestamp: '2023-10-27 10:42:05', ip: '45.12.33.2' },
    { id: 3, user: 'admin@logowizard.ai', action: 'SUBSCRIPTION_UPDATE', target: 'User #882', timestamp: '2023-10-27 09:15:33', ip: '192.168.1.1' },
    { id: 4, user: 'system', action: 'BACKUP_COMPLETE', target: 'Database', timestamp: '2023-10-27 03:00:01', ip: '127.0.0.1' },
    { id: 5, user: 'sarah.k@tech.co', action: 'API_KEY_GENERATE', target: 'API Console', timestamp: '2023-10-26 22:10:45', ip: '88.22.11.5' },
];

export default function AdminAuditLogs() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">Audit Logs</h1>
            <p className="text-gray-500">Track every action across the platform for security and compliance.</p>
        </div>
        <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input className="pl-10 h-10 bg-white/5 border-white/10 rounded-xl" placeholder="Search logs..." />
        </div>
      </div>

      <div className="glass-card bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden">
          <table className="w-full text-left">
              <thead>
                  <tr className="bg-white/[0.03] border-b border-white/5">
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Timestamp</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">User</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Action</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Target</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400">IP Address</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                  {mockLogs.map((log) => (
                      <tr key={log.id} className="hover:bg-white/[0.01] transition-colors">
                          <td className="px-6 py-4 text-xs font-medium text-gray-400 font-mono flex items-center gap-2">
                              <Clock className="w-3 h-3" /> {log.timestamp}
                          </td>
                          <td className="px-6 py-4 text-sm font-bold text-white flex items-center gap-2">
                              <User className="w-3 h-3 text-blue-500" /> {log.user}
                          </td>
                          <td className="px-6 py-4">
                              <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-wider">
                                  {log.action}
                              </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-300">{log.target}</td>
                          <td className="px-6 py-4 text-xs font-mono text-gray-500">{log.ip}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>

      <div className="mt-8 flex justify-center">
          <button className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
              Load More Activity
          </button>
      </div>
    </div>
  );
}
