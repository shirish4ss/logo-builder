"use client";

import React from 'react';
import { Key, Globe, Lock, ShieldCheck, Plus, Copy, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockApiKeys = [
    { id: 1, name: 'Production Frontend', key: 'lw_live_9a2f...1b3d', status: 'Active', usage: '45.2k req/mo' },
    { id: 2, name: 'Mobile App Beta', key: 'lw_live_4d1s...9p0x', status: 'Active', usage: '1.2k req/mo' },
    { id: 3, name: 'Staging Environment', key: 'lw_test_k8m2...ll21', status: 'Inactive', usage: '0 req/mo' },
];

export default function AdminApiAccess() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">API Control Center</h1>
            <p className="text-gray-500 font-medium">Manage developer access and application credentials.</p>
        </div>
        <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs px-8 rounded-2xl flex gap-2">
            <Plus size={16} /> Create New Key
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
              { label: 'Total Requests', value: '1.2M', trend: '+12.5%', color: 'blue' },
              { label: 'Avg Latency', value: '124ms', trend: '-8ms', color: 'green' },
              { label: 'Active Keys', value: '14', trend: 'Stable', color: 'purple' },
          ].map((stat, i) => (
              <div key={i} className="p-6 glass-card bg-white/[0.02] border border-white/5 rounded-3xl">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">{stat.label}</p>
                  <div className="flex items-baseline gap-3">
                      <h4 className="text-3xl font-black text-white">{stat.value}</h4>
                      <span className={`text-[10px] font-bold ${stat.color === 'green' ? 'text-green-500' : 'text-blue-500'}`}>{stat.trend}</span>
                  </div>
              </div>
          ))}
      </div>

      <div className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Key size={20} className="text-blue-500" /> Active API Keys
          </h2>
          {mockApiKeys.map((key) => (
              <div key={key.id} className="p-6 glass-card bg-white/[0.02] border border-white/5 rounded-[2rem] flex items-center justify-between group hover:border-blue-500/30 transition-all">
                  <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors">
                          <Lock size={20} />
                      </div>
                      <div>
                          <h4 className="text-sm font-black text-white uppercase tracking-tight">{key.name}</h4>
                          <code className="text-[11px] text-gray-500 font-mono mt-1 block">{key.key}</code>
                      </div>
                  </div>
                  <div className="flex items-center gap-8">
                      <div className="text-right">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Status</p>
                          <span className={`text-[10px] font-bold ${key.status === 'Active' ? 'text-green-500' : 'text-gray-500'}`}>{key.status}</span>
                      </div>
                      <div className="text-right">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-1">Usage</p>
                          <span className="text-[10px] font-bold text-white">{key.usage}</span>
                      </div>
                      <div className="flex gap-2">
                          <button className="p-3 rounded-xl hover:bg-white/5 text-gray-500 hover:text-white transition-all">
                              <Copy size={16} />
                          </button>
                          <button className="p-3 rounded-xl hover:bg-red-500/10 text-gray-500 hover:text-red-500 transition-all">
                              <Trash2 size={16} />
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </div>

      <div className="mt-12 p-8 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] flex items-center gap-6">
          <ShieldCheck size={32} className="text-blue-500" />
          <div>
              <h4 className="text-white font-bold">Webhooks Integration</h4>
              <p className="text-gray-500 text-sm">Receive real-time notifications for logo creation, payment events, and more.</p>
          </div>
          <Button variant="outline" className="ml-auto border-blue-500/20 text-blue-500 hover:bg-blue-500/10 font-black uppercase tracking-widest text-[10px]">
              Configure Endpoints
          </Button>
      </div>
    </div>
  );
}
