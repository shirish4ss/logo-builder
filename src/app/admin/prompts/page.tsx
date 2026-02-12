"use client";

import { motion } from "framer-motion";
import {
  Plus, Search, Filter, Terminal,
  MoreVertical, Edit2, Trash2, Copy,
  Zap, Code, Layers, Save, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

const promptTemplates = [
  {
    id: "p1",
    name: "Standard Logo Base",
    type: "System",
    version: "2.4.0",
    status: "Active",
    tokens: 450,
    content: "Generate a minimalist logo for a {business_type} named {name}. Focus on {keyword1} and {keyword2}..."
  },
  {
    id: "p2",
    name: "Luxury Brand Refiner",
    type: "Refiner",
    version: "1.1.2",
    status: "Active",
    tokens: 820,
    content: "Take the existing logo and add premium textures, golden ratios, and sophisticated spacing..."
  },
  {
    id: "p3",
    name: "SVG Vectorization Prompt",
    type: "Converter",
    version: "3.0.1",
    status: "Draft",
    tokens: 1200,
    content: "Analyze the pixel data and output a structured SVG with clean paths and grouped layers..."
  },
  {
    id: "p4",
    name: "Brand Kit Generator",
    type: "System",
    version: "0.9.5",
    status: "Testing",
    tokens: 310,
    content: "Based on the logo colors {colors}, generate a full brand palette with hex codes and CMYK..."
  }
];

export default function PromptsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center space-x-2 text-blue-500 mb-4">
            <Terminal size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">AI Engine v4.0</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Prompt Management</h1>
          <p className="text-white/40 text-sm font-medium max-w-xl">
            Configure the neural backbone of LogoAI. Manage system prompts, refinement cycles, and asset generation structures.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 rounded-xl px-6 h-12">
            <RefreshCw size={16} className="mr-2 opacity-40" /> Rollback
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 h-12 font-bold shadow-lg shadow-blue-600/20">
            <Plus size={18} className="mr-2" /> New Template
          </Button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Prompts", value: "24", icon: Code, color: "text-blue-500" },
          { label: "Total Versions", value: "142", icon: Layers, color: "text-purple-500" },
          { label: "Avg. Latency", value: "840ms", icon: Zap, color: "text-yellow-500" },
          { label: "Success Rate", value: "99.2%", icon: Save, color: "text-green-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon size={48} />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">{stat.label}</p>
            <p className={cn("text-2xl font-bold tracking-tight", stat.color)}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Control Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-2 bg-white/[0.02] border border-white/5 rounded-2xl">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
          <Input
            placeholder="Search templates..."
            className="h-12 pl-12 bg-transparent border-none text-white focus:ring-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="ghost" className="text-white/40 hover:text-white h-10 px-4 rounded-xl">
             <Filter size={16} className="mr-2" /> Filter
           </Button>
           <div className="w-px h-6 bg-white/5" />
           <p className="px-4 text-[10px] font-bold text-white/20 uppercase tracking-widest">
             {promptTemplates.length} Templates Total
           </p>
        </div>
      </div>

      {/* Templates List */}
      <div className="space-y-4">
        {promptTemplates.map((template) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 border border-white/5 rounded-2xl p-6 group hover:border-blue-500/30 transition-all hover:bg-black/60 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
               <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-600/10 rounded-lg text-blue-500">
                           <Code size={18} />
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-tight">{template.name}</h3>
                        <span className="px-2 py-0.5 bg-white/5 rounded-md text-[9px] font-black uppercase text-white/40 border border-white/5">
                           v{template.version}
                        </span>
                     </div>
                     <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/10 rounded-lg">
                           <Edit2 size={14} />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/10 rounded-lg">
                           <Copy size={14} />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-red-400/40 hover:text-red-400 hover:bg-red-400/10 rounded-lg">
                           <Trash2 size={14} />
                        </Button>
                        <div className="w-px h-4 bg-white/10 mx-1" />
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-white/40 hover:text-white hover:bg-white/10 rounded-lg">
                           <MoreVertical size={14} />
                        </Button>
                     </div>
                  </div>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/5 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-2 text-[9px] font-bold text-white/10 uppercase font-mono">
                        {template.tokens} tokens
                     </div>
                     <p className="text-xs font-mono text-white/60 leading-relaxed truncate">
                        {template.content}
                     </p>
                  </div>
                  <div className="flex items-center space-x-4">
                     <div className="flex items-center space-x-2">
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full shadow-[0_0_8px]",
                          template.status === "Active" ? "bg-green-500 shadow-green-500" :
                          template.status === "Draft" ? "bg-yellow-500 shadow-yellow-500" : "bg-blue-500 shadow-blue-500"
                        )} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{template.status}</span>
                     </div>
                     <div className="w-px h-3 bg-white/5" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-blue-500">{template.type}</span>
                     <div className="w-px h-3 bg-white/5" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Last modified 2h ago</span>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-white/5 flex items-center justify-between">
         <p className="text-[10px] font-black uppercase tracking-widest text-white/10">Enterprise Deployment Console</p>
         <div className="flex items-center space-x-1">
            {[1,2,3].map(p => (
              <button key={p} className={cn("w-8 h-8 rounded-lg text-xs font-bold transition-all", p === 1 ? "bg-blue-600 text-white" : "text-white/40 hover:bg-white/5")}>
                {p}
              </button>
            ))}
         </div>
      </div>
    </div>
  );
}
