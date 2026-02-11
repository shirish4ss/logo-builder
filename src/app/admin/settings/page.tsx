"use client";

import { motion } from "framer-motion";
import { Save, Shield, Bell, Zap, Database, Globe } from "lucide-react";

export default function AdminSettings() {
  const sections = [
    { title: "General", icon: Globe, description: "Basic site configuration and maintenance." },
    { title: "Security", icon: Shield, description: "Firewall, MFA, and access control." },
    { title: "Notifications", icon: Bell, description: "Email and system alert settings." },
    { title: "Performance", icon: Zap, description: "Caching, CDN, and API limits." },
    { title: "Database", icon: Database, description: "Backups and indexing operations." },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">System Settings</h1>
          <p className="text-slate-400">Configure global platform behavior.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 font-bold">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-2">
          {sections.map((section, i) => (
            <button key={i} className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${i === 0 ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:bg-slate-800'}`}>
              <section.icon size={20} />
              <span className="font-medium">{section.title}</span>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Platform Name</label>
                   <input type="text" defaultValue="LogoAI" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Support Email</label>
                   <input type="email" defaultValue="support@logoai.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
             </div>

             <div className="border-t border-slate-800 pt-8">
                <h3 className="text-lg font-bold text-white mb-6">Regional Settings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Default Currency</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                        <option>INR (₹)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Primary Language</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                      </select>
                   </div>
                </div>
             </div>

             <div className="border-t border-slate-800 pt-8 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">Maintenance Mode</h3>
                  <p className="text-slate-500 text-sm">Disable public access to the platform during updates.</p>
                </div>
                <div className="w-12 h-6 bg-slate-800 rounded-full relative cursor-pointer">
                   <div className="absolute left-1 top-1 w-4 h-4 bg-slate-500 rounded-full transition-all" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
