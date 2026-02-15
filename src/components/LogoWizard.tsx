"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Upload, CheckCircle2, Sparkles, Briefcase, Palette, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, name: "Core", desc: "Identity", icon: Briefcase },
  { id: 2, name: "Vibe", desc: "Aesthetic", icon: Palette },
  { id: 3, name: "Data", desc: "References", icon: Target },
];

export const LogoWizard = ({ onFinish }: { onFinish?: (data: any) => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: "",
    slogan: "",
    industry: "",
    description: "",
    stylePreference: "",
    colorPreference: "",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      {/* Premium Stepper */}
      <div className="flex justify-between items-center mb-16 relative px-12">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <motion.div
                animate={{
                    scale: currentStep === step.id ? 1.1 : 1,
                    backgroundColor: currentStep >= step.id ? "var(--primary)" : "var(--card)"
                }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 ${
              currentStep >= step.id ? "border-primary text-primary-foreground shadow-xl shadow-primary/20" : "border-border text-muted-foreground shadow-sm"
            }`}>
              {currentStep > step.id ? <CheckCircle2 size={24} /> : <step.icon size={24} />}
            </motion.div>
            <div className="absolute -bottom-10 whitespace-nowrap text-center">
                <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}`}>{step.name}</p>
                <p className="text-[8px] font-bold text-muted-foreground/50 uppercase tracking-widest">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 md:p-16 border-border bg-card/50 backdrop-blur-xl rounded-[3rem] mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>

        <AnimatePresence mode="wait">
            {currentStep === 1 && (
            <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
            >
                <div>
                <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase italic mb-2">Foundation</h3>
                <p className="text-muted-foreground font-medium">Define the core pillars of your new identity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Brand Name</label>
                    <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Aether"
                    className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-card transition-all font-bold placeholder:text-muted-foreground/30"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Slogan (Optional)</label>
                    <input
                    type="text"
                    name="slogan"
                    value={formData.slogan}
                    onChange={handleChange}
                    placeholder="e.g. Beyond Sight"
                    className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-card transition-all font-bold placeholder:text-muted-foreground/30"
                    />
                </div>
                </div>
                <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Mission Statement</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What is the story behind this brand? Who are you serving?"
                    className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:border-primary focus:bg-card transition-all font-bold placeholder:text-muted-foreground/30 resize-none"
                ></textarea>
                </div>
            </motion.div>
            )}

            {currentStep === 2 && (
            <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
            >
                <div>
                <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase italic mb-2">Visual Soul</h3>
                <p className="text-muted-foreground font-medium">Choose a resonance that matches your brand&apos;s frequency.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                    "Minimalist", "Futuristic", "Handcrafted", "Bold", "Elegant", "Brutalist"
                ].map((style) => (
                    <div
                    key={style}
                    onClick={() => setFormData({ ...formData, stylePreference: style })}
                    className={`p-8 border-2 rounded-3xl cursor-pointer transition-all flex flex-col items-center justify-center gap-4 ${
                        formData.stylePreference === style ? "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20" : "border-border bg-muted/30 hover:bg-muted text-muted-foreground"
                    }`}
                    >
                    <p className="font-black uppercase tracking-widest text-xs">{style}</p>
                    </div>
                ))}
                </div>
            </motion.div>
            )}

            {currentStep === 3 && (
            <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-10 text-center"
            >
                <div className="w-24 h-24 bg-primary/10 rounded-[2.5rem] flex items-center justify-center mx-auto text-primary mb-8 animate-bounce">
                <Sparkles size={48} />
                </div>
                <div>
                <h3 className="text-4xl font-black text-foreground tracking-tighter uppercase italic mb-2">Synthesis</h3>
                <p className="text-muted-foreground font-medium max-w-sm mx-auto">Upload any visual anchors or references to guide the AI&apos;s neural generation.</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-[2.5rem] p-16 hover:border-primary/50 transition-all cursor-pointer group bg-muted/10">
                <Upload className="mx-auto text-muted-foreground group-hover:text-primary transition-all mb-6" size={40} />
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">Drop references or click to browse</p>
                </div>
            </motion.div>
            )}
        </AnimatePresence>

        <div className="flex justify-between mt-16 pt-10 border-t border-border">
          <Button
            variant="ghost"
            onClick={prevStep}
            className={`h-14 px-8 rounded-2xl text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-foreground ${currentStep === 1 ? "invisible" : "visible"}`}
          >
            <ChevronLeft size={18} className="mr-2" /> Back
          </Button>
          <Button
            onClick={currentStep === 3 ? () => {
              if (onFinish) {
                onFinish({
                  ...formData,
                  suggestedLogo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="#050505"/><circle cx="50" cy="50" r="30" stroke="#3b82f6" stroke-width="2" fill="none" /><text x="50" y="55" font-family="Inter" font-size="10" fill="white" text-anchor="middle" font-weight="bold">BRAND</text></svg>'
                });
              }
            } : nextStep}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-12 h-14 text-xs font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
          >
            {currentStep === 3 ? "Initialize Genesis" : "Continue"} <ChevronRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
