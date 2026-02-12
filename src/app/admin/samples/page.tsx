"use client";

import { motion } from "framer-motion";
import {
  Plus, Search, Filter, Image as ImageIcon,
  Star, Trash2, Edit2, ExternalLink,
  Zap, Eye, Download, MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const samples = [
  {
    id: "s1",
    name: "Quantum Dynamics",
    prompt: "Minimalist tech logo, geometric shapes, blue gradients, futuristic typography",
    category: "Technology",
    rating: "4.9",
    downloads: "1.2k",
    status: "Featured"
  },
  {
    id: "s2",
    name: "Golden Bean",
    prompt: "Luxury coffee brand, gold foil, serif typography, elegant bean icon",
    category: "Food & Beverage",
    rating: "5.0",
    downloads: "850",
    status: "Active"
  },
  {
    id: "s3",
    name: "Apex Performance",
    prompt: "High speed sports brand, aggressive angles, italic bold font, energy lines",
    category: "Fitness",
    rating: "4.7",
    downloads: "2.4k",
    status: "Trending"
  },
  {
    id: "s4",
    name: "Lumina Studio",
    prompt: "Creative agency logo, iridescent colors, glassmorphism style, thin line art",
    category: "Design",
    rating: "4.8",
    downloads: "560",
    status: "Active"
  }
];

export default function AdminSamplesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 text-blue-500 mb-4">
            <ImageIcon size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Exhibition Assets</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Sample Management</h1>
          <p className="text-white/40 text-sm font-medium max-w-xl">
            Curate and manage high-quality AI output samples for user inspiration and training data benchmarks.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl px-6 h-12">
            Bulk Import
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 h-12 font-bold shadow-lg shadow-blue-600/20">
            <Plus size={18} className="mr-2" /> Add Sample
          </Button>
        </div>
      </header>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-2 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <Input
            placeholder="Search samples by prompt or name..."
            className="h-12 pl-12 bg-transparent border-none text-white focus:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="ghost" className="text-white/40 hover:text-white h-10 px-4 rounded-xl">
             <Filter size={16} className="mr-2" /> All Categories
           </Button>
           <div className="w-px h-6 bg-white/5" />
           <p className="px-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
             {samples.length} Samples Curated
           </p>
        </div>
      </div>

      {/* Samples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {samples.map((sample) => (
          <motion.div
            key={sample.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 border border-white/5 rounded-3xl p-6 group hover:border-blue-500/30 transition-all hover:bg-black/60 flex gap-8"
          >
            <div className="w-40 h-40 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center text-white/10 group-hover:text-blue-500 transition-colors relative overflow-hidden shrink-0">
               <ImageIcon size={48} />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                  <Button size="icon" variant="ghost" className="h-12 w-12 bg-black/60 backdrop-blur-xl rounded-full text-white shadow-2xl">
                    <Eye size={20} />
                  </Button>
               </div>
            </div>

            <div className="flex-1 flex flex-col justify-between py-2">
               <div>
                  <div className="flex items-center justify-between mb-2">
                     <span className={cn(
                       "px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest",
                       sample.status === "Featured" ? "bg-purple-600 text-white shadow-[0_0_10px_rgba(147,51,234,0.4)]" :
                       sample.status === "Trending" ? "bg-orange-600 text-white shadow-[0_0_10px_rgba(234,88,12,0.4)]" :
                       "bg-white/5 text-white/40"
                     )}>
                        {sample.status}
                     </span>
                     <div className="flex items-center space-x-1">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white/20 hover:text-white hover:bg-white/10">
                           <Edit2 size={14} />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500/20 hover:text-red-500 hover:bg-red-500/10">
                           <Trash2 size={14} />
                        </Button>
                     </div>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">{sample.name}</h3>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-4">{sample.category}</p>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2 font-medium">
                     {sample.prompt}
                  </p>
               </div>

               <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-4">
                  <div className="flex items-center space-x-4">
                     <div className="flex items-center space-x-1.5">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs font-bold text-white">{sample.rating}</span>
                     </div>
                     <div className="flex items-center space-x-1.5">
                        <Download size={14} className="text-white/20" />
                        <span className="text-xs font-bold text-white/40">{sample.downloads}</span>
                     </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 px-3 rounded-lg text-white/40 hover:text-white hover:bg-white/10 text-[10px] font-black uppercase tracking-widest">
                     Details <ExternalLink size={10} className="ml-1.5" />
                  </Button>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
         <div className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500">
               <Zap size={32} />
            </div>
            <div>
               <h4 className="text-lg font-bold text-white tracking-tight">AI Training Feedback Loop</h4>
               <p className="text-sm text-white/40 font-medium">These samples are used to fine-tune the RLHF reward model.</p>
            </div>
         </div>
         <Button className="bg-white text-black hover:bg-white/90 font-black text-[10px] uppercase tracking-widest h-12 px-8 rounded-full">
            Run Auto-Evaluation
         </Button>
      </div>
    </div>
  );
}
