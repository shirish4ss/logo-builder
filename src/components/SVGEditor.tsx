"use client";

import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Download, RefreshCw, Undo, Save } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";

export const SVGEditor = ({ initialSvg }: { initialSvg: string }) => {
  const [svgContent, setSvgContent] = useState(initialSvg);
  const [fillColor, setFillColor] = useState("#3b82f6");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setFillColor(newColor);
    // Improved regex to change all fill attributes globally in the SVG
    const newSvg = svgContent.replace(/fill="[^"]*"/g, `fill="${newColor}"`);
    setSvgContent(newSvg);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex">
      {/* Canvas */}
      <div className="flex-1 bg-gray-50 p-10 flex items-center justify-center min-h-[400px]">
        <div
          className="w-64 h-64 bg-white shadow-xl rounded-xl flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(svgContent) }}
        />
      </div>

      {/* Toolbar */}
      <div className="w-80 border-l border-gray-200 p-8 space-y-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Edit Logo</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Primary Color</label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={fillColor}
                  onChange={handleColorChange}
                  className="w-10 h-10 rounded-lg cursor-pointer border-none"
                />
                <input
                  type="text"
                  value={fillColor}
                  onChange={(e) => setFillColor(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg text-sm uppercase"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 space-y-3">
          <p className="text-xs font-bold text-blue-800 flex items-center">
            <RefreshCw size={12} className="mr-1 animate-spin-slow" /> Vector Node Editing (UI Mock)
          </p>
          <p className="text-[10px] text-blue-600">Feature Prototype: Double-click any curve to adjust Bézier handles and fine-tune your logo shape.</p>
          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" variant="outline" className="text-[10px] h-7">Add Node</Button>
            <Button size="sm" variant="outline" className="text-[10px] h-7 text-red-500">Delete Node</Button>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full">
            <Save size={18} className="mr-2" /> Save Changes
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="sm">
              <Undo size={16} className="mr-2" /> Undo
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw size={16} className="mr-2" /> Reset
            </Button>
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="space-y-3">
          <p className="text-sm font-bold text-gray-900">Download Assets</p>
          <div className="space-y-2">
            <Button variant="secondary" className="w-full justify-between" onClick={() => window.open('/api/download?format=svg', '_blank')}>
              <span>SVG (Vector)</span>
              <Download size={16} />
            </Button>
            <Button variant="secondary" className="w-full justify-between" onClick={() => window.open('/api/download?format=png', '_blank')}>
              <span>PNG (High Res)</span>
              <Download size={16} />
            </Button>
            <Button variant="secondary" className="w-full justify-between" onClick={() => window.open('/api/download?format=pdf', '_blank')}>
              <span>PDF (Print Ready)</span>
              <Download size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
