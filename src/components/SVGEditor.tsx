"use client";

import React, { useEffect, useRef } from "react";
import { useEditorStore, Layer } from "@/lib/store";
import { EditorCanvas } from "./editor/EditorCanvas";
import { LayerPanel } from "./editor/LayerPanel";
import { AIChatRefine } from "./editor/AIChatRefine";
import { ColorPicker } from "./editor/ColorPicker";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const Mockup3DViewer = dynamic(
  () => import("./editor/Mockup3DViewer").then((mod) => mod.Mockup3DViewer),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center bg-white/[0.02] animate-pulse rounded-2xl border border-white/5">Loading 3D Engine...</div> }
);

import {
  Undo, Redo, Square, Circle, Type,
  Layers, Download, MousePointer2,
  ShieldCheck, Sparkles,
  Spline, Layout,
  Combine, Minus, Target, XSquare
} from "lucide-react";

export const SVGEditor = ({ initialSvg }: { initialSvg: string }) => {
  const {
    layers, setLayers, addLayer, undo, redo,
    selectedIds, saveHistory
  } = useEditorStore();

  const [activeTab, setActiveTab] = React.useState<"editor" | "3d">("editor");

  useEffect(() => {
    if (layers.length === 0 && initialSvg) {
        // Simple SVG parsing logic or just use initial path
        setLayers([
          {
            id: "initial-logo",
            name: "Icon",
            type: "path",
            d: "M 50 20 L 80 80 L 20 80 Z",
            x: 250,
            y: 200,
            fill: "#3b82f6",
            stroke: "none",
            strokeWidth: 0,
            rotation: 0,
            opacity: 1,
            visible: true,
            locked: false
          }
        ]);
        saveHistory();
    }
  }, [initialSvg, layers.length, saveHistory, setLayers]);

  const addNewLayer = (type: Layer['type']) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newLayer: Layer = {
        id,
        name: `New ${type}`,
        type,
        x: 300,
        y: 300,
        fill: "#ffffff",
        stroke: "none",
        strokeWidth: 0,
        rotation: 0,
        opacity: 1,
        visible: true,
        locked: false,
    };

    if (type === 'rect') { newLayer.width = 100; newLayer.height = 100; }
    if (type === 'circle') { newLayer.radius = 50; }
    if (type === 'text') { newLayer.text = "New Identity"; newLayer.fontSize = 24; }

    addLayer(newLayer);
  };

  const downloadSvg = () => {
    const svgElement = document.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "logo.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
      {/* Top Bar */}
      <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
        <div className="flex items-center space-x-6">
          <div className="flex bg-black/40 rounded-full p-1 border border-white/5">
             <button
               onClick={() => setActiveTab("editor")}
               className={`px-6 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === 'editor' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'text-gray-500 hover:text-white'}`}
             >2D Canvas</button>
             <button
               onClick={() => setActiveTab("3d")}
               className={`px-6 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === '3d' ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'text-gray-500 hover:text-white'}`}
             >3D Studio</button>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={undo} className="text-gray-500 hover:text-white"><Undo size={16} /></Button>
            <Button variant="ghost" size="icon" onClick={redo} className="text-gray-500 hover:text-white"><Redo size={16} /></Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ShieldCheck size={16} className="mr-2" /> IP Check
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Layers size={16} className="mr-2" /> Variations
          </Button>
          <Button
            onClick={downloadSvg}
            className="bg-white text-black hover:bg-gray-200 rounded-full h-9 px-6 font-bold"
          >
            <Download size={16} className="mr-2" /> Export SVG
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Toolbar */}
        <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-black/20">
             <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20"><MousePointer2 size={20} /></Button>
             <Button variant="ghost" size="icon" className="w-10 h-10 text-gray-500 hover:text-white" onClick={() => addNewLayer('rect')}><Square size={20} /></Button>
             <Button variant="ghost" size="icon" className="w-10 h-10 text-gray-500 hover:text-white" onClick={() => addNewLayer('circle')}><Circle size={20} /></Button>
             <Button variant="ghost" size="icon" className="w-10 h-10 text-gray-500 hover:text-white" onClick={() => addNewLayer('text')}><Type size={20} /></Button>
             <Button variant="ghost" size="icon" className="w-10 h-10 text-gray-500 hover:text-white" onClick={() => addNewLayer('path')}><Spline size={20} /></Button>
        </div>

        {/* Workspace */}
        <div className="flex-1 bg-[#050505] relative">
          {activeTab === "editor" ? (
              <EditorCanvas />
          ) : (
              <div className="w-full h-full">
                  <Mockup3DViewer logoUrl="" />
              </div>
          )}
        </div>

        {/* Right Panel */}
        <div className="w-80 border-l border-white/5 flex flex-col bg-black/40">
           <LayerPanel />
           <div className="p-6 border-t border-white/5 flex-1 overflow-y-auto">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">Properties</h3>
              {selectedIds.length > 0 ? (
                <div className="space-y-6">
                   <ColorPicker />

                   <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-xs font-bold text-gray-600 uppercase">Opacity</span>
                        <span className="text-xs text-white">100%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full">
                        <div className="h-full w-full bg-blue-500 rounded-full"></div>
                      </div>
                   </div>
                   <div className="pt-6 border-t border-white/5">
                      <Button variant="outline" className="w-full justify-start border-white/5 text-gray-400 hover:text-white hover:bg-white/5 h-10">
                        <Sparkles size={14} className="mr-2" /> AI Refine Element
                      </Button>
                   </div>

                   {selectedIds.length === 2 && (
                     <div className="pt-6 border-t border-white/5 space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Pathfinder (Boolean)</h4>
                        <div className="grid grid-cols-4 gap-2">
                           <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-blue-600 hover:text-white border border-white/5" title="Unite"><Combine size={14} /></Button>
                           <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-blue-600 hover:text-white border border-white/5" title="Subtract"><Minus size={14} /></Button>
                           <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-blue-600 hover:text-white border border-white/5" title="Intersect"><Target size={14} /></Button>
                           <Button variant="ghost" size="icon" className="bg-white/5 hover:bg-blue-600 hover:text-white border border-white/5" title="Exclude"><XSquare size={14} /></Button>
                        </div>
                     </div>
                   )}
                </div>
              ) : (
                <div className="text-center py-20">
                   <Layout className="mx-auto text-gray-800 mb-4" size={32} />
                   <p className="text-xs font-bold text-gray-700 uppercase tracking-widest leading-loose">Select an element<br/>to configure</p>
                </div>
              )}
           </div>
           <AIChatRefine />
        </div>
      </div>
    </div>
  );
};
