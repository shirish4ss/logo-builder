"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Upload, CheckCircle2 } from "lucide-react";

const steps = [
  { id: 1, name: "Business Details", desc: "Tell us about your brand" },
  { id: 2, name: "Logo Style", desc: "Choose your preferred aesthetic" },
  { id: 3, name: "Samples & Finalize", desc: "Upload references and generate" },
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
    <div className="max-w-4xl mx-auto py-10">
      {/* Stepper */}
      <div className="flex justify-between mb-12">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-colors ${
              currentStep >= step.id ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"
            }`}>
              {currentStep > step.id ? <CheckCircle2 size={20} /> : step.id}
            </div>
            <p className={`text-sm font-medium ${currentStep >= step.id ? "text-gray-900" : "text-gray-400"}`}>{step.name}</p>
            <p className="text-xs text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Let&apos;s start with the basics</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="e.g. InnovateX"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Slogan (Optional)</label>
                <input
                  type="text"
                  name="slogan"
                  value={formData.slogan}
                  onChange={handleChange}
                  placeholder="e.g. The Future of Tech"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Industry</label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select an industry</option>
                <option value="tech">Technology</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food & Beverage</option>
                <option value="health">Health & Wellness</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Tell us more about what you do</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                placeholder="Briefly describe your business goals and values..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Choose a Design Direction</h3>
            <p className="text-sm text-gray-500">Select one of our &quot;Master&apos;s Touch&quot; premium styles for better AI generation.</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Swiss Minimalist", desc: "Helvetica inspired" },
                { name: "Abstract Modern", desc: "Fluid gradients" },
                { name: "Paul Rand inspired", desc: "Geometric symbols" },
                { name: "Cyber-Future", desc: "Neon & Tech-noir" },
                { name: "Vintage Scribe", desc: "Elegant calligraphy" },
                { name: "Bauhaus", desc: "Primary forms" }
              ].map((style) => (
                <div
                  key={style.name}
                  onClick={() => setFormData({ ...formData, stylePreference: style.name })}
                  className={`p-6 border-2 rounded-2xl cursor-pointer transition-all ${
                    formData.stylePreference === style.name ? "border-blue-600 bg-blue-50 shadow-inner" : "border-gray-100 hover:border-blue-200 bg-white"
                  }`}
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mb-3 mx-auto"></div>
                  <p className="font-bold text-gray-800 text-sm text-center">{style.name}</p>
                  <p className="text-[10px] text-gray-400 text-center">{style.desc}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Preferred Colors</label>
              <input
                type="text"
                name="colorPreference"
                value={formData.colorPreference}
                onChange={handleChange}
                placeholder="e.g. Blue and White, Pastel tones"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Almost there!</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center space-y-4">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto text-blue-600">
                <Upload size={32} />
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">Upload Reference Logos</p>
                <p className="text-sm text-gray-500">Drag and drop or click to browse</p>
              </div>
              <input type="file" className="hidden" id="file-upload" multiple />
              <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
                Choose Files
              </Button>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>Pro Tip:</strong> AI works best when you provide specific industry keywords and a clear vision of your brand&apos;s personality.
              </p>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-10">
          <Button
            variant="ghost"
            onClick={prevStep}
            className={`${currentStep === 1 ? "invisible" : "visible"}`}
          >
            <ChevronLeft size={20} className="mr-2" /> Back
          </Button>
          <Button
            onClick={currentStep === 3 ? () => {
              if (onFinish) {
                onFinish({
                  ...formData,
                  suggestedLogo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="#3b82f6" /><text x="50" y="55" font-family="Arial" font-size="12" fill="white" text-anchor="middle">LOGO</text></svg>'
                });
              }
            } : nextStep}
            className="px-8"
          >
            {currentStep === 3 ? "Generate Logo Ideas" : "Next"} <ChevronRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};
