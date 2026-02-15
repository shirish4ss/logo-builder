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
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center bg-muted animate-pulse rounded-2xl border border-border">Loading 3D Engine...</div> }
);

import {
  Undo, Redo, Square, Circle, Type,
  Layers, Download, MousePointer2,
  ShieldCheck, Sparkles,
  Spline, Layout,
  Combine, Minus, Target, XSquare,
  Box, Maximize2, Share2, History
} from "lucide-react";

export const SVGEditor = ({ initialSvg }: { initialSvg: string }) => {
  const {
    layers, setLayers, addLayer, undo, redo,
    selectedIds, saveHistory
  } = useEditorStore();

  const [activeTab, setActiveTab] = React.useState<"editor" | "3d">("editor");

  useEffect(() => {
    if (layers.length === 0 && initialSvg) {
        // Simple SVG parsing simulation
        setLayers([
          {
            id: "base-icon",
            name: "Brand Mark",
            type: "path",
            d: "M 50 20 L 80 80 L 20 80 Z",
            x: 250,
            y: 150,
            fill: "currentColor",
            stroke: "none",
            strokeWidth: 0,
            rotation: 0,
            opacity: 1,
            visible: true,
            locked: false
          },
          {
            id: "brand-text",
            name: "Brand Name",
            type: "text",
            text: "IDENTITY",
            fontSize: 24,
            x: 235,
            y: 280,
            fill: "currentColor",
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
        fill: "currentColor",
        stroke: "none",
        strokeWidth: 0,
        rotation: 0,
        opacity: 1,
        visible: true,
        locked: false,
    };

    if (type === 'rect') { newLayer.width = 100; newLayer.height = 100; }
    if (type === 'circle') { newLayer.radius = 50; }
    if (type === 'text') { newLayer.text = "New Label"; newLayer.fontSize = 18; }

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
    downloadLink.download = "brand-identity.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-2xl relative">
      {/* Premium Toolbar Top */}
      <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-card/50 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center space-x-6">
          <div className="flex bg-muted p-1 rounded-2xl border border-border">
             <button
               onClick={() => setActiveTab("editor")}
               className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'editor' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
             >Canvas View</button>
             <button
               onClick={() => setActiveTab("3d")}
               className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === '3d' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
             >3D Studio</button>
          </div>

          <div className="h-6 w-px bg-border mx-2" />

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={undo} className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted"><Undo size={16} /></Button>
            <Button variant="ghost" size="icon" onClick={redo} className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-muted"><Redo size={16} /></Button>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden md:flex h-10 border-border text-muted-foreground hover:text-foreground rounded-xl text-[10px] font-black uppercase tracking-widest">
            <History size={14} className="mr-2" /> History
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex h-10 border-border text-muted-foreground hover:text-foreground rounded-xl text-[10px] font-black uppercase tracking-widest">
            <Share2 size={14} className="mr-2" /> Collaboration
          </Button>
          <Button
            onClick={downloadSvg}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-10 px-6 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20"
          >
            <Download size={14} className="mr-2" /> Export Bundle
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Professional Sidebar Left */}
        <div className="w-16 border-r border-border flex flex-col items-center py-8 gap-4 bg-muted/30">
             <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><MousePointer2 size={18} /></Button>
             <div className="w-8 h-px bg-border my-2" />
             <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => addNewLayer('rect')}><Square size={18} /></Button>
             <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => addNewLayer('circle')}><Circle size={18} /></Button>
             <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => addNewLayer('text')}><Type size={18} /></Button>
             <Button variant="ghost" size="icon" className="w-11 h-11 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted" onClick={() => addNewLayer('path')}><Spline size={18} /></Button>
        </div>

        {/* Artboard Area */}
        <div className="flex-1 bg-muted/50 relative overflow-hidden flex items-center justify-center">
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="relative shadow-2xl rounded-lg overflow-hidden border border-border bg-white dark:bg-black w-[600px] h-[450px]">
                {activeTab === "editor" ? (
                    <EditorCanvas />
                ) : (
                    <div className="w-full h-full">
                        <Mockup3DViewer logoUrl="" />
                    </div>
                )}
            </div>

            <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-card/80 backdrop-blur-md border border-border px-3 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">100% Zoom</span>
                <Maximize2 size={12} className="text-muted-foreground" />
            </div>
        </div>

        {/* Control Panel Right */}
        <div className="w-80 border-l border-border flex flex-col bg-card/50 backdrop-blur-md">
           <LayerPanel />

           <div className="flex-1 overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Studio Inspector</h3>
                 <Target size={14} className="text-muted-foreground" />
              </div>

              {selectedIds.length > 0 ? (
                <div className="space-y-8">
                   <ColorPicker />

                   <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Layer Opacity</span>
                        <span className="text-xs font-bold">100%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-full bg-primary rounded-full"></div>
                      </div>
                   </div>

                   <div className="pt-8 border-t border-border">
                      <Button variant="outline" className="w-full h-12 justify-center border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 rounded-2xl font-bold text-xs transition-all">
                        <Sparkles size={14} className="mr-2" /> Neural Refinement
                      </Button>
                   </div>

                   {selectedIds.length === 2 && (
                     <div className="pt-8 border-t border-border space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Vector Operations</h4>
                        <div className="grid grid-cols-4 gap-3">
                           <Button variant="ghost" size="icon" className="h-10 w-10 bg-muted border border-border hover:bg-primary hover:text-primary-foreground rounded-xl transition-all" title="Unite"><Combine size={14} /></Button>
                           <Button variant="ghost" size="icon" className="h-10 w-10 bg-muted border border-border hover:bg-primary hover:text-primary-foreground rounded-xl transition-all" title="Subtract"><Minus size={14} /></Button>
                           <Button variant="ghost" size="icon" className="h-10 w-10 bg-muted border border-border hover:bg-primary hover:text-primary-foreground rounded-xl transition-all" title="Intersect"><Target size={14} /></Button>
                           <Button variant="ghost" size="icon" className="h-10 w-10 bg-muted border border-border hover:bg-primary hover:text-primary-foreground rounded-xl transition-all" title="Exclude"><XSquare size={14} /></Button>
                        </div>
                     </div>
                   )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-20">
                   <Layout size={40} className="mb-4" />
                   <p className="text-[10px] font-black uppercase tracking-[0.2em]">Select an element to<br/>begin inspecting</p>
                </div>
              )}
           </div>

           <AIChatRefine />
        </div>
      </div>
    </div>
  );
};
