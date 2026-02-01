"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Shield, MessageSquare, Briefcase } from "lucide-react";

export default function TeamWorkspacePage() {
  const members = [
    { id: "1", name: "John Doe", email: "john@example.com", role: "OWNER" },
    { id: "2", name: "Sarah Smith", email: "sarah@marketing.com", role: "EDITOR" },
  ];

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Team Workspace</h1>
          <p className="text-gray-500">Collaborate with your team on brand designs.</p>
        </div>
        <Button><UserPlus size={18} className="mr-2" /> Invite Member</Button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center space-x-2">
             <Users className="text-blue-600" />
             <h2 className="font-bold">Team Members</h2>
          </div>
          <div className="divide-y divide-gray-100">
             {members.map(member => (
               <div key={member.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {member.name.charAt(0)}
                     </div>
                     <div>
                        <p className="text-sm font-bold text-gray-900">{member.name}</p>
                        <p className="text-xs text-gray-400">{member.email}</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-4">
                     <span className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                       member.role === 'OWNER' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
                     }`}>
                        {member.role}
                     </span>
                     <button className="text-gray-400 hover:text-red-500 text-xs">Remove</button>
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-blue-600 rounded-2xl p-6 text-white space-y-4 shadow-lg">
              <div className="flex items-center space-x-2">
                 <Briefcase size={20} />
                 <h3 className="font-bold text-lg">Project Scope</h3>
              </div>
              <p className="text-sm text-blue-100">Invite up to 5 collaborators on the Pro plan. Sharing brand assets has never been easier.</p>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Upgrade Plan</Button>
           </div>

           <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-2">
                 <MessageSquare size={20} className="text-blue-600" />
                 <h3 className="font-bold">Recent Comments</h3>
              </div>
              <div className="space-y-3">
                 <div className="text-xs border-l-2 border-blue-600 pl-3 py-1">
                    <p className="font-bold">Sarah Smith</p>
                    <p className="text-gray-600">&quot;Make this blue darker to match the guidelines.&quot;</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
