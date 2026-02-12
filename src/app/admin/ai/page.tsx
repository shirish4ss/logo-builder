"use client";

import React from "react";
import {
  Zap, Brain, Activity,
  BarChart3, Settings, Shield,
  Server, Database, Code, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminAIPage() {
  const models = [
    { name: "Nexus-Vision v4", provider: "OpenRouter", status: "Healthy", latency: "1.2s", cost: "$0.002", usage: "45%" },
    { name: "DALL-E 3", provider: "OpenAI", status: "Healthy", latency: "8.5s", cost: "$0.040", usage: "30%" },
    { name: "Gemini 1.5 Flash", provider: "Google", status: "Healthy", latency: "0.8s", cost: "$0.0001", usage: "20%" },
    { name: "Custom SVG-Gen", provider: "Internal", status: "Degraded", latency: "4.5s", cost: "$0.000", usage: "5%" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">AI Neural Ops</h1>
          <p className="text-slate-400 font-medium">Monitor and orchestrate your design intelligence.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-slate-800 text-slate-300 h-12 px-6 rounded-xl font-bold">
            <RefreshCw size={18} className="mr-2" /> Sync Models
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-12 px-6 font-bold">
            <Settings size={18} className="mr-2" /> Neural Config
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
            { label: "Token Usage", value: "1.2M", icon: Brain, color: "text-blue-500" },
            { label: "Generation Success", value: "99.4%", icon: Zap, color: "text-amber-500" },
            { label: "Avg Latency", value: "1.45s", icon: Activity, color: "text-green-500" },
            { label: "Daily Cost", value: "$42.50", icon: BarChart3, color: "text-purple-500" },
        ].map((stat, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-slate-950 ${stat.color} border border-white/5`}>
                        <stat.icon size={20} />
                    </div>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                </div>
                <p className="text-2xl font-black text-white">{stat.value}</p>
            </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Server className="text-blue-500" size={20} />
                Model Registry
            </h2>
            <div className="space-y-4">
                {models.map((model, i) => (
                    <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl group hover:border-slate-700 transition-colors">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-white tracking-tight">{model.name}</h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{model.provider}</p>
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                                model.status === 'Healthy' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'
                            }`}>
                                {model.status}
                            </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Latency</p>
                                <p className="text-sm font-bold text-white">{model.latency}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Cost/Req</p>
                                <p className="text-sm font-bold text-white">{model.cost}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Load</p>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full mt-2">
                                    <div className="h-full bg-blue-500 rounded-full" style={{ width: model.usage }} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="space-y-8">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Code className="text-purple-500" size={20} />
                    Prompt Pipeline
                </h2>
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 space-y-2">
                    <p className="text-blue-400">{"// System Prompt Template v2.4"}</p>
                    <p>&quot;You are a world-class logo designer...&quot;</p>
                    <p>&quot;User Input: [BusinessName]&quot;</p>
                    <p>&quot;Style: [Aesthetic]&quot;</p>
                    <p>&quot;Output: Return valid SVG code and concepts...&quot;</p>
                </div>
                <Button className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-bold h-12 rounded-xl">
                    Open Prompt Lab
                </Button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Database className="text-amber-500" size={20} />
                    Training Datasets
                </h2>
                <div className="flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-3">
                        <Shield className="text-slate-500" size={18} />
                        <div>
                            <p className="text-sm font-bold text-white">Privacy Guard</p>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Anonymizing user data</p>
                        </div>
                    </div>
                    <div className="w-10 h-6 bg-blue-600 rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
