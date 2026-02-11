"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Upload, CheckCircle2, Sparkles } from "lucide-react";

const steps = [
  { id: 1, name: "Identity", desc: "Brand details" },
  { id: 2, name: "Aesthetic", desc: "Style & Feel" },
  { id: 3, name: "Finalize", desc: "References" },
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
    <div className="max-w-3xl mx-auto py-20 px-6">
      {/* Stepper */}
      <div className="flex justify-between mb-20 relative">
        <div className="absolute top-5 left-0 w-full h-px bg-white/5 -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 transition-all duration-500 border-2 ${
              currentStep >= step.id ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-[#050505] border-white/10 text-gray-500"
            }`}>
              {currentStep > step.id ? <CheckCircle2 size={18} /> : step.id}
            </div>
            <p className={`text-xs font-bold uppercase tracking-widest ${currentStep >= step.id ? "text-white" : "text-gray-600"}`}>{step.name}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-12 border-white/5 bg-white/[0.02]">
        {currentStep === 1 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Core Identity</h3>
              <p className="text-gray-400">Tell us the name that will define your brand.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. Nexus"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Slogan</label>
                <input
                  type="text"
                  name="slogan"
                  value={formData.slogan}
                  onChange={handleChange}
                  placeholder="e.g. Elevate Reality"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Mission</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="What is the soul of your brand?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Visual Aesthetic</h3>
              <p className="text-gray-400">Choose a direction that resonates with your vision.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Minimalist", "Futuristic", "Handcrafted", "Bold", "Elegant", "Playful"
              ].map((style) => (
                <div
                  key={style}
                  onClick={() => setFormData({ ...formData, stylePreference: style })}
                  className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                    formData.stylePreference === style ? "border-blue-600 bg-blue-600/10" : "border-white/5 bg-white/5 hover:border-white/10"
                  }`}
                >
                  <p className="font-bold text-white text-sm text-center">{style}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-8 text-center">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto text-blue-400 mb-6">
              <Sparkles size={40} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Ready for Genesis</h3>
              <p className="text-gray-400">Our AI is ready to synthesize your brand identity.</p>
            </div>
            <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 hover:border-blue-500/50 transition-colors cursor-pointer group">
              <Upload className="mx-auto text-gray-600 group-hover:text-blue-400 transition-colors mb-4" size={32} />
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Drop references here</p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-12 pt-8 border-t border-white/5">
          <Button
            variant="ghost"
            onClick={prevStep}
            className={`text-gray-500 hover:text-white ${currentStep === 1 ? "invisible" : "visible"}`}
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
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-12 font-bold transition-all transform hover:scale-105"
          >
            {currentStep === 3 ? "Generate Designs" : "Continue"} <ChevronRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
