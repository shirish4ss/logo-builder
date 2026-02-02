"use client";

import React, { useState } from "react";
import { useEditorStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Loader2 } from "lucide-react";
import { refineLogoWithAI } from "@/lib/ai";

export const AIChatRefine = () => {
  const { layers, setLayers, saveHistory } = useEditorStore();
  const [prompt, setPrompt] = useState("");
  const [isRefining, setIsRefining] = useState(false);

  const handleRefine = async () => {
    if (!prompt.trim() || isRefining) return;

    setIsRefining(true);
    try {
      const newLayers = await refineLogoWithAI(layers, prompt);
      if (newLayers && Array.isArray(newLayers)) {
        setLayers(newLayers);
        saveHistory();
        setPrompt("");
      }
    } catch (error) {
      console.error("Refinement failed:", error);
    } finally {
      setIsRefining(false);
    }
  };

  return (
    <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="flex items-center space-x-2 mb-3">
        <Sparkles size={16} className="text-blue-600" />
        <h3 className="font-bold text-sm">AI Refinement</h3>
      </div>
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g. 'Change the icon color to purple' or 'Make the text more curved'"
          className="w-full p-3 pr-10 text-xs border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-white resize-none"
          rows={3}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleRefine();
            }
          }}
        />
        <button
          onClick={handleRefine}
          disabled={isRefining || !prompt.trim()}
          className="absolute right-2 bottom-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
        >
          {isRefining ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
        </button>
      </div>
      <p className="text-[10px] text-gray-400 mt-2 italic text-center">
        Try natural language commands to tweak your logo.
      </p>
    </div>
  );
};
