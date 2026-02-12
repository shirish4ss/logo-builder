"use client";

import React, { useState } from "react";
import { LogoWizard } from "@/components/LogoWizard";
import { SVGEditor } from "@/components/SVGEditor";
import { AIAnalysisIdeas } from "@/components/AIAnalysisIdeas";
import { motion, AnimatePresence } from "framer-motion";

type Step = "wizard" | "analysis" | "editor";

export default function CreateLogoPage() {
  const [step, setStep] = useState<Step>("wizard");
  const [wizardData, setWizardData] = useState<any>(null);
  const [selectedIdea, setSelectedIdea] = useState<any>(null);

  const handleFinishWizard = (data: any) => {
    setWizardData(data);
    setStep("analysis");
  };

  const handleSelectIdea = (idea: any) => {
    setSelectedIdea(idea);
    // Simulate converting idea to SVG
    setStep("editor");
  };

  return (
    <div className="min-h-screen bg-[#050505] transition-colors duration-300">
      <AnimatePresence mode="wait">
        {step === "wizard" && (
          <motion.div
            key="wizard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LogoWizard onFinish={handleFinishWizard} />
          </motion.div>
        )}

        {step === "analysis" && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AIAnalysisIdeas data={wizardData} onSelect={handleSelectIdea} />
          </motion.div>
        )}

        {step === "editor" && (
          <motion.div
            key="editor"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10"
          >
             <div className="max-w-7xl mx-auto">
               <div className="flex justify-between items-center mb-12">
                  <div>
                    <h1 className="text-4xl font-black text-white tracking-tight">{selectedIdea?.title || "Refine Your Logo"}</h1>
                    <p className="text-gray-500 font-medium mt-1">Fine-tune colors, layers, and composition.</p>
                  </div>
                  <button
                    onClick={() => setStep("wizard")}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all text-sm"
                  >
                    Start Over
                  </button>
               </div>
               <div className="glass-card border-white/5 bg-white/[0.02] rounded-[2.5rem] overflow-hidden">
                 <SVGEditor initialSvg={wizardData?.suggestedLogo || ""} />
               </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
