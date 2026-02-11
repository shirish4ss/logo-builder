"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LayoutDashboard, Palette, Zap, Clock,
  ArrowRight, Plus, Download, Share2
} from "lucide-react";

export default function DashboardOverview() {
  const recentProjects = [
    { id: 1, name: "Nexus Tech", type: "Tech Logo", date: "2 hours ago" },
    { id: 2, name: "Green Leaf", type: "Organic Food", date: "Yesterday" },
    { id: 3, name: "Skyline", type: "Real Estate", date: "3 days ago" },
  ];

  return (
    <div className="p-8 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Design Studio</h1>
          <p className="text-slate-400 mt-2">Welcome back. Ready to create something legendary?</p>
        </div>
        <Link
          href="/dashboard/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all flex items-center gap-2 font-bold shadow-lg shadow-blue-500/20 active:scale-95"
        >
          <Plus size={20} />
          New Brand
        </Link>
      </div>

      {/* Stats/Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white relative overflow-hidden group">
          <Zap className="absolute right-[-10px] top-[-10px] w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
          <p className="text-blue-100 font-medium">Active Plan</p>
          <h2 className="text-3xl font-black mt-1">Pro Member</h2>
          <Link href="/pricing" className="mt-6 inline-flex items-center gap-2 text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
            Manage Subscription <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 text-white">
          <p className="text-slate-400 font-medium">Generations Left</p>
          <h2 className="text-3xl font-black mt-1">84 / 100</h2>
          <div className="mt-6 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[84%]" />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 text-white">
          <p className="text-slate-400 font-medium">Brand Assets</p>
          <h2 className="text-3xl font-black mt-1">12 Files</h2>
          <p className="text-slate-500 text-sm mt-4">SVG, PNG, and Branding Kits</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="text-blue-500" size={20} />
              Recent Brands
            </h3>
            <button className="text-slate-400 hover:text-white text-sm">View All</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 group cursor-pointer"
              >
                <div className="aspect-square bg-slate-950 rounded-2xl mb-4 flex items-center justify-center border border-slate-800 group-hover:border-blue-500/50 transition-colors relative overflow-hidden">
                   <Palette className="text-slate-800 w-20 h-20" />
                   <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-white font-bold">{project.name}</h4>
                <p className="text-slate-500 text-xs mt-1">{project.type} • {project.date}</p>
                <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white"><Download size={16} /></button>
                  <button className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white"><Share2 size={16} /></button>
                  <button className="px-3 py-1 bg-blue-600 rounded-lg text-white text-xs font-bold ml-auto">Edit</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Quick Tools</h3>
              <div className="space-y-4">
                <Link href="/dashboard/kit" className="flex items-center gap-4 p-4 bg-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all group">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <LayoutDashboard size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Brand Kit</p>
                    <p className="text-[10px] text-slate-500">Generate guidelines</p>
                  </div>
                </Link>

                <Link href="/dashboard/social" className="flex items-center gap-4 p-4 bg-slate-950 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-all group">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Social Media</p>
                    <p className="text-[10px] text-slate-500">Post templates</p>
                  </div>
                </Link>
              </div>
           </div>

           <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full blur-xl" />
              </div>
              <h3 className="text-white font-bold mb-2">Need Inspiration?</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Check out our community showcase to see what other designers are building with LogoAI.</p>
              <button className="mt-6 text-sm text-blue-400 font-bold hover:underline">Explore Showcase →</button>
           </div>
        </div>
      </div>
    </div>
  );
}
