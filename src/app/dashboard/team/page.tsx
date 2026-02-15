"use client";

import React from 'react';
import { Users, UserPlus, Mail, Shield, MoreVertical, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mockMembers = [
    { id: 1, name: 'Alex Rivera', email: 'alex@company.com', role: 'Owner', avatar: 'AR' },
    { id: 2, name: 'Samantha Chen', email: 'sam@company.com', role: 'Designer', avatar: 'SC' },
    { id: 3, name: 'Marcus Wright', email: 'marcus@company.com', role: 'Viewer', avatar: 'MW' },
];

export default function UserTeamPage() {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Team Management</h1>
            <p className="text-gray-500 font-medium mt-1">Collaborate with your designers and stakeholders.</p>
        </div>
        <Button className="h-12 bg-white text-black hover:bg-gray-200 font-black uppercase tracking-widest text-[10px] px-8 rounded-2xl flex gap-2">
            <UserPlus size={16} /> Invite Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="p-8 rounded-[2rem] bg-blue-600/10 border border-blue-500/20">
              <Users className="text-blue-500 mb-4" size={28} />
              <h4 className="text-2xl font-black text-white">3 / 5</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Seats Occupied</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
              <Mail className="text-gray-500 mb-4" size={28} />
              <h4 className="text-2xl font-black text-white">12</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Pending Invites</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 group cursor-pointer hover:border-white/20 transition-all">
              <Settings className="text-gray-500 mb-4 group-hover:rotate-90 transition-transform" size={28} />
              <h4 className="text-2xl font-black text-white">Roles</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">Configure Permissions</p>
          </div>
      </div>

      <div className="space-y-4">
          <h2 className="text-xl font-bold text-white mb-6">Team Members</h2>
          {mockMembers.map((member) => (
              <div key={member.id} className="p-4 glass-card bg-white/[0.01] border border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/[0.03] transition-all">
                  <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-white/5">
                          <AvatarFallback className="bg-blue-600 text-white font-black">{member.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                          <h4 className="text-sm font-bold text-white">{member.name}</h4>
                          <p className="text-xs text-gray-500">{member.email}</p>
                      </div>
                  </div>
                  <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                          <Shield size={12} className="text-blue-500" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{member.role}</span>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-white/5 text-gray-500">
                          <MoreVertical size={16} />
                      </button>
                  </div>
              </div>
          ))}
      </div>

      <div className="mt-16 p-10 rounded-[3rem] bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-md">
              <h3 className="text-3xl font-black text-white tracking-tight mb-4">Upgrade for Unlimited Collaboration</h3>
              <p className="text-white/80 text-sm font-medium mb-8 leading-relaxed">
                  The Enterprise plan allows for unlimited team members, advanced role-based access control, and shared brand assets.
              </p>
              <Button className="h-12 bg-white text-blue-600 hover:bg-gray-100 font-black uppercase tracking-widest text-[10px] px-8 rounded-2xl">
                  View Enterprise Plans
              </Button>
          </div>
          <Users size={200} className="absolute -right-10 -bottom-10 text-white/10 rotate-12" />
      </div>
    </div>
  );
}
