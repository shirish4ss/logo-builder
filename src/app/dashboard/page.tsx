"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Palette, Zap, Clock,
  ArrowRight, Plus, Download, Share2
} from "lucide-react";

export default function DashboardOverview() {
  const recentProjects = [
    { id: 1, name: "Nexus Tech", type: "Tech Logo", date: "2 hours ago" },
    { id: 2, name: "Green Leaf", type: "Organic Food", date: "Yesterday" },
    { id: 3, name: "Skyline", type: "Real Estate", date: "3 days ago" },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Design Studio</h1>
          <p className="text-white/40 font-medium">Welcome back. Ready to create something legendary today?</p>
        </div>
        <Link
          href="/dashboard/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl transition-all flex items-center gap-2 font-black text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20 active:scale-95"
        >
          <Plus size={18} />
          Create Brand
        </Link>
      </div>

      {/* Stats/Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-blue-600/10">
          <Zap className="absolute right-[-10px] top-[-10px] w-32 h-32 opacity-10 group-hover:scale-110 transition-transform duration-700" />
          <p className="text-blue-100/60 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Active Plan</p>
          <h2 className="text-3xl font-bold tracking-tight">Pro Member</h2>
          <Link href="/dashboard/billing" className="mt-8 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full hover:bg-white/20 transition-all border border-white/10">
            Billing Details <ArrowRight size={14} />
          </Link>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 text-white relative group hover:bg-white/[0.04] transition-all">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Generations</p>
          <h2 className="text-3xl font-bold tracking-tight">84 <span className="text-white/20 text-xl">/ 100</span></h2>
          <div className="mt-8 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "84%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"
            />
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 text-white relative group hover:bg-white/[0.04] transition-all">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Brand Assets</p>
          <h2 className="text-3xl font-bold tracking-tight">12 <span className="text-white/20 text-xl">Files</span></h2>
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-8">SVG • PNG • KIT</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white flex items-center gap-3">
              <Clock className="text-blue-500" size={20} />
              Recent Brands
            </h3>
            <button className="text-white/20 hover:text-white text-[10px] font-black uppercase tracking-[0.2em] transition-colors">View Library</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 group cursor-pointer hover:bg-white/[0.04] hover:border-white/10 transition-all"
              >
                <div className="aspect-square bg-black/40 rounded-3xl mb-6 flex items-center justify-center border border-white/5 group-hover:border-blue-500/30 transition-all relative overflow-hidden shadow-inner">
                   <Palette className="text-white/5 w-24 h-24 transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-white font-bold text-lg tracking-tight">{project.name}</h4>
                <p className="text-white/20 text-[10px] font-black uppercase tracking-widest mt-1">{project.type} • {project.date}</p>
                <div className="flex gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <button className="p-3 bg-white/5 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all"><Download size={16} /></button>
                  <button className="p-3 bg-white/5 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all"><Share2 size={16} /></button>
                  <button className="px-4 py-2 bg-blue-600 rounded-xl text-white text-[10px] font-black uppercase tracking-widest ml-auto shadow-lg shadow-blue-600/20">Edit Concept</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
           <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10">
              <h3 className="text-lg font-bold text-white mb-8 tracking-tight">Neural Tools</h3>
              <div className="space-y-4">
                <Link href="/dashboard/kit" className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-3xl hover:border-blue-500/30 hover:bg-white/[0.08] transition-all group">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Palette size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">Brand DNA Kit</p>
                    <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest mt-0.5">Automated Guidelines</p>
                  </div>
                </Link>

                <Link href="/dashboard/social" className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-3xl hover:border-purple-500/30 hover:bg-white/[0.08] transition-all group">
                  <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Share2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-tight">Social Omni-Kit</p>
                    <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest mt-0.5">Asset Synthesis</p>
                  </div>
                </Link>
              </div>
           </div>

           <div className="bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              </div>
              <h3 className="text-white font-bold mb-4 tracking-tight">Creative Benchmarks</h3>
              <p className="text-white/40 text-xs font-medium leading-relaxed">Check out our community showcase to see how others are scaling their visual identities.</p>
              <Link href="/showcase" className="mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-blue-400 transition-colors inline-block">
                Explore Exhibition →
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
