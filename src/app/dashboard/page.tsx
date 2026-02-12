"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus, Search, Layout, Image as ImageIcon,
  Download, Share2, MoreVertical, Sparkles,
  History, Settings, CreditCard, ChevronRight,
  Zap, Palette, Globe, Layers, Box
} from "lucide-react";
import { Button } from "@/components/ui/button";

const recentBrands = [
  { id: "1", name: "Nexus AI", date: "2 hours ago", color: "from-blue-600 to-indigo-600", type: "Tech" },
  { id: "2", name: "Ethereal", date: "Yesterday", color: "from-purple-600 to-pink-600", type: "Luxury" },
  { id: "3", name: "Velocity", date: "3 days ago", color: "from-amber-500 to-orange-600", type: "Sport" },
];

export default function UserDashboard() {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-12">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Welcome back, Alex.</h1>
          <p className="text-gray-500 font-medium mt-1">You have <span className="text-blue-500">2 logos</span> left in your free plan.</p>
        </div>
        <Link href="/dashboard/create">
            <Button className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/30 transition-all transform hover:scale-105">
                <Plus size={18} className="mr-2" /> Create New Brand
            </Button>
        </Link>
      </div>

      {/* Quick Tools */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {[
            { label: "Vectorize", icon: Zap, href: "/dashboard/vectorizer", color: "text-amber-500" },
            { label: "Mockups", icon: Box, href: "/dashboard/mockups", color: "text-purple-500" },
            { label: "Naming", icon: Sparkles, href: "/dashboard/naming", color: "text-blue-500" },
            { label: "Assets", icon: ImageIcon, href: "/dashboard/assets", color: "text-pink-500" },
            { label: "Support", icon: Globe, href: "/dashboard/support", color: "text-emerald-500" },
        ].map((tool, i) => (
            <Link key={i} href={tool.href}>
                <div className="glass-card border-white/5 bg-white/[0.02] p-6 rounded-3xl group hover:border-white/20 transition-all flex flex-col items-center gap-3">
                    <div className={`p-3 rounded-2xl bg-white/5 ${tool.color} group-hover:scale-110 transition-transform`}>
                        <tool.icon size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{tool.label}</span>
                </div>
            </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Recent Brands */}
        <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white tracking-tight">Recent Brands</h2>
                <Button variant="ghost" className="text-blue-500 font-bold hover:bg-blue-500/10">View All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentBrands.map((brand) => (
                    <motion.div
                        key={brand.id}
                        whileHover={{ y: -5 }}
                        className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-8 group overflow-hidden relative"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${brand.color} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center text-white text-2xl font-black shadow-lg`}>
                                {brand.name[0]}
                            </div>
                            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-white rounded-xl"><MoreVertical size={18} /></Button>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white tracking-tight">{brand.name}</h3>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">{brand.type}</span>
                                <div className="w-1 h-1 rounded-full bg-gray-800" />
                                <span className="text-[10px] font-bold text-gray-500">{brand.date}</span>
                            </div>
                        </div>
                        <div className="mt-8 flex gap-2 relative z-10">
                            <Link href="/dashboard/kit" className="flex-1">
                                <Button variant="outline" className="w-full h-11 border-white/5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-xs">Brand Kit</Button>
                            </Link>
                            <Link href="/dashboard/social" className="flex-1">
                                <Button variant="outline" className="w-full h-11 border-white/5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl text-xs">Social Kit</Button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
                <Link href="/dashboard/create">
                    <div className="border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center p-8 group hover:border-blue-500/50 transition-all cursor-pointer h-full min-h-[250px]">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-4">
                            <Plus size={24} />
                        </div>
                        <p className="text-sm font-bold text-gray-600 group-hover:text-white transition-colors">Create New Identity</p>
                    </div>
                </Link>
            </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-8">
            {/* Stats Card */}
            <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] p-8">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <History className="text-blue-500" size={20} />
                    Active Resources
                </h3>
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-sm font-medium text-gray-400">Logos Generated</span>
                        </div>
                        <span className="text-sm font-bold text-white">12/20</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                            <span className="text-sm font-medium text-gray-400">Vector Exports</span>
                        </div>
                        <span className="text-sm font-bold text-white">8/10</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-sm font-medium text-gray-400">Team Members</span>
                        </div>
                        <span className="text-sm font-bold text-white">3/5</span>
                    </div>
                </div>
                <Button className="w-full mt-8 bg-white/5 border border-white/10 text-white font-bold h-12 rounded-xl hover:bg-white/10">
                    Upgrade Plan
                </Button>
            </div>

            {/* AI Lab Promo */}
            <div className="glass-card bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-8 relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                    <Sparkles className="text-white mb-6" size={32} />
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">Try AI Naming Lab</h3>
                    <p className="text-blue-100 text-sm font-medium leading-relaxed mb-8">
                        Stuck on a name? Our neural engine generates 100+ high-converting names based on your industry.
                    </p>
                    <Button className="w-full bg-white text-blue-600 font-black uppercase tracking-widest text-[10px] h-11 rounded-xl shadow-lg">
                        Explore Lab <ChevronRight size={14} className="ml-1" />
                    </Button>
                </div>
            </div>

            {/* Newsletter/Updates */}
            <div className="p-8 border border-white/5 rounded-[2.5rem] space-y-4">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Platform Update</p>
                <h4 className="text-white font-bold tracking-tight">V2.4 Neural Mesh is Live</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">3D mockups now support complex lighting and metallic textures.</p>
                <button className="text-blue-500 text-xs font-bold hover:underline">Read Release Notes</button>
            </div>
        </div>
      </div>
    </div>
  );
}
