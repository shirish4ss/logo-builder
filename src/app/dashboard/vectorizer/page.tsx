"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap, Upload, ImageIcon,
  ArrowRight, CheckCircle2,
  RefreshCw, Sliders, Download,
  Layers, MousePointer2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VectorizerPage() {
  const [status, setStatus] = useState<"idle" | "uploading" | "processing" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const startVectorize = () => {
    setStatus("uploading");
    setTimeout(() => {
      setStatus("processing");
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus("done");
            return 100;
          }
          return prev + 5;
        });
      }, 100);
    }, 1000);
  };

  return (
    <div className="p-10 max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-white tracking-tight">AI Vectorizer</h1>
        <p className="text-gray-500 font-medium max-w-2xl mx-auto">Convert any low-res PNG or JPG into a professional, scalable SVG in seconds.</p>
      </div>

      <div className="glass-card border-white/5 bg-white/[0.02] rounded-[3rem] p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] -z-10"></div>

        {status === "idle" && (
          <div
            onClick={startVectorize}
            className="border-2 border-dashed border-white/10 rounded-[2rem] p-20 flex flex-col items-center justify-center group hover:border-blue-500/50 transition-all cursor-pointer bg-black/20"
          >
            <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
              <Upload size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Drop your image here</h3>
            <p className="text-gray-500 text-sm font-medium">Supports PNG, JPG, WEBP up to 10MB.</p>
            <Button className="mt-10 bg-white text-black font-black uppercase tracking-widest text-xs h-12 px-8 rounded-xl">
              Select Image
            </Button>
          </div>
        )}

        {(status === "uploading" || status === "processing") && (
          <div className="py-20 flex flex-col items-center justify-center space-y-10">
            <div className="relative">
               <div className="w-32 h-32 rounded-full border-4 border-blue-600/20 border-t-blue-600 animate-spin"></div>
               <div className="absolute inset-0 flex items-center justify-center text-blue-500">
                  <Zap size={32} className="animate-pulse" />
               </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">{status === "uploading" ? "Uploading Image..." : "Tracing Paths..."}</h3>
              <p className="text-gray-500 font-medium">Our neural engine is calculating Bézier curves.</p>
            </div>
            <div className="w-full max-w-md h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {status === "done" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
               <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest">
                  <CheckCircle2 size={12} className="mr-2" /> Vectorization Complete
               </div>
               <h3 className="text-3xl font-black text-white tracking-tight leading-tight">Your scalable SVG <br />is ready.</h3>
               <div className="space-y-4">
                  {[
                    "Clean Bézier paths",
                    "Optimized file size",
                    "Color-matched gradients",
                    "Layered structure"
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-bold text-gray-400">{feat}</span>
                    </div>
                  ))}
               </div>
               <div className="flex gap-4 pt-4">
                 <Button className="h-14 px-10 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700">
                   <Download size={18} className="mr-2" /> Download SVG
                 </Button>
                 <Button variant="outline" onClick={() => setStatus("idle")} className="h-14 px-10 rounded-2xl border-white/10 text-white font-bold text-xs">
                   Vectorize Another
                 </Button>
               </div>
            </div>
            <div className="aspect-square bg-white rounded-3xl p-12 flex items-center justify-center shadow-2xl relative group overflow-hidden">
               <div className="w-48 h-48 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-6xl font-black">L</div>
               <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 scale-150">
                    <div className="w-2 h-2 bg-blue-600 rounded-full border border-white" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full border border-white" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full border border-white" />
                    <div className="w-2 h-2 bg-blue-600 rounded-full border border-white" />
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Precision", desc: "Advanced edge detection for razor-sharp curves.", icon: MousePointer2 },
          { title: "Layers", desc: "Automatic grouping and layering of vector elements.", icon: Layers },
          { title: "Settings", desc: "Fine-tune simplify and detail levels manually.", icon: Sliders }
        ].map((item, i) => (
          <div key={i} className="p-8 border border-white/5 bg-white/[0.01] rounded-3xl">
             <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6">
                <item.icon size={20} />
             </div>
             <h4 className="text-white font-bold mb-2">{item.title}</h4>
             <p className="text-gray-500 text-xs font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
