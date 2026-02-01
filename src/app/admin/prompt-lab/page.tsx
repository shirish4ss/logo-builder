"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FlaskConical, Send, Terminal, Sparkles, RefreshCw } from "lucide-react";

export default function AdminPromptLabPage() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const testPrompt = () => {
    setLoading(true);
    setTimeout(() => {
      setResults([
        "Result Concept A: Minimalist Circle with IX monogram",
        "Result Concept B: Abstract pulse wave in blue and orange",
        "Result Concept C: Geometric bird symbol representing speed"
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Prompt Lab</h1>
        <p className="text-gray-500">Playground to test and refine system prompts before deployment.</p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
             <div className="flex items-center space-x-2">
                <Terminal size={20} className="text-blue-600" />
                <h3 className="font-bold">Test Scenario</h3>
             </div>
             <div className="space-y-4">
                <div className="space-y-2">
                   <label className="text-sm font-medium">Simulated User Input</label>
                   <textarea
                      className="w-full p-3 bg-gray-50 border rounded-xl text-sm"
                      rows={3}
                      placeholder="e.g. A futuristic pizza brand called Galaxy Slice..."
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium">Model Settings</label>
                   <div className="grid grid-cols-2 gap-3">
                      <select className="p-2 border rounded-lg text-sm bg-white">
                         <option>Gemini 1.5 Pro</option>
                         <option>GPT-4o</option>
                      </select>
                      <input type="number" placeholder="Temp: 0.7" className="p-2 border rounded-lg text-sm" />
                   </div>
                </div>
                <Button className="w-full" onClick={testPrompt} disabled={loading}>
                   {loading ? <RefreshCw className="mr-2 animate-spin" size={18} /> : <FlaskConical className="mr-2" size={18} />}
                   Run Test Generation
                </Button>
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-xl min-h-[400px] flex flex-col">
              <div className="flex items-center space-x-2 mb-6 text-slate-300">
                 <Sparkles size={20} />
                 <h3 className="font-bold">AI Output Preview</h3>
              </div>

              <div className="flex-1 space-y-4">
                 {results.length > 0 ? (
                    results.map((res, i) => (
                       <div key={i} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-300 text-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
                          {res}
                       </div>
                    ))
                 ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-600 italic text-sm">
                       Run a test to see AI response here...
                    </div>
                 )}
              </div>

              {results.length > 0 && (
                 <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
                    <span>Token Usage: 450</span>
                    <span>Latency: 1.2s</span>
                 </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
