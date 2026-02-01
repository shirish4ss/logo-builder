"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Palette, Type, Share2, FileText } from "lucide-react";
import { generatePalette, getSocialMediaTemplates } from "@/lib/branding";

export default function BrandingKitPage() {
  const brandName = "InnovateX";
  const primaryColor = "#3b82f6";
  const palette = generatePalette(primaryColor);
  const socialTemplates = getSocialMediaTemplates("", brandName);

  return (
    <div className="p-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Your Branding Kit</h1>
        <p className="text-gray-500">Everything you need to launch your brand across all platforms.</p>
      </div>

      {/* Brand Assets Section */}
      <section className="grid grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <Palette className="text-blue-600" />
            <h2 className="text-xl font-bold">Color Palette</h2>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {palette.map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="h-16 rounded-lg border border-gray-100"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <p className="text-[10px] font-bold text-center">{color.name}</p>
                <p className="text-[10px] text-gray-400 text-center uppercase">{color.hex}</p>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full">Download Color Swatches</Button>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <Type className="text-blue-600" />
            <h2 className="text-xl font-bold">Typography</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-400 mb-1">Heading Font</p>
              <p className="text-2xl font-black text-gray-900">Inter Black</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-1">Body Font</p>
              <p className="text-lg text-gray-700">Inter Regular</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">Download Font Package</Button>
        </div>
      </section>

      {/* Social Media Kit Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Share2 className="text-blue-600" />
            <h2 className="text-2xl font-bold">Social Media Kit</h2>
          </div>
          <Button>Download All Assets</Button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {socialTemplates.map((template) => (
            <div key={template.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-4">
                 <img src={template.mockupUrl} alt={template.name} className="rounded-lg shadow-sm w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-gray-900">{template.name}</h3>
                <p className="text-xs text-gray-500">{template.size} px</p>
                <Button variant="ghost" size="sm" className="w-full text-blue-600">
                  <Download size={14} className="mr-2" /> Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guidelines & Print Section */}
      <div className="grid grid-cols-2 gap-8">
        <section className="bg-blue-600 rounded-2xl p-10 text-white flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <FileText />
              <h2 className="text-2xl font-bold">Brand Guidelines</h2>
            </div>
            <p className="text-blue-100">
              A comprehensive PDF guide on how to use your brand colors, typography, and logo across different media.
            </p>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 mt-6">Generate PDF Guidelines</Button>
        </section>

        <section className="bg-slate-900 rounded-2xl p-10 text-white flex flex-col justify-between border border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Download />
              <h2 className="text-2xl font-bold">Direct-to-Print</h2>
            </div>
            <p className="text-slate-400">
              Partnered with Printful. Order high-quality business cards, t-shirts, and stationery with your new logo.
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 mt-6">Buy 50 Business Cards</Button>
        </section>
      </div>
    </div>
  );
}
