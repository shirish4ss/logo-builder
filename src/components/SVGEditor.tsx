"use client";

import React, { useEffect } from "react";
import { useEditorStore, Layer } from "@/lib/store";
import { EditorCanvas } from "./editor/EditorCanvas";
import { LayerPanel } from "./editor/LayerPanel";
import { Button } from "@/components/ui/button";
import {
  Undo, Redo, Square, Circle, Type,
  Combine, Scissors, Copy, Layers,
  Download, Save, MousePointer2,
  MinusSquare, PlusSquare, XSquare, Box
} from "lucide-react";

export const SVGEditor = ({ initialSvg }: { initialSvg: string }) => {
  const {
    layers, setLayers, addLayer, updateLayer, undo, redo,
    selectedIds, saveHistory, alignLayers, applyBooleanOp
  } = useEditorStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') {
          e.preventDefault();
          if (e.shiftKey) redo();
          else undo();
        } else if (e.key === 'y') {
          e.preventDefault();
          redo();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo]);

  useEffect(() => {
    if (layers.length === 0 && initialSvg) {
        // Mock initialization from initialSvg
        // In a real app, we would parse the SVG elements
        setLayers([
          {
            id: "initial-logo",
            name: "Main Icon",
            type: "path",
            d: "M 50 50 L 150 50 L 100 150 Z",
            x: 200,
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
  }, []);

  const addNewLayer = (type: Layer['type']) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newLayer: Layer = {
        id,
        name: `New ${type}`,
        type,
        x: 300,
        y: 300,
        fill: "#000000",
        stroke: "none",
        strokeWidth: 0,
        rotation: 0,
        opacity: 1,
        visible: true,
        locked: false,
    };

    if (type === 'rect') { newLayer.width = 100; newLayer.height = 100; }
    if (type === 'circle') { newLayer.radius = 50; }
    if (type === 'text') { newLayer.text = "Double Click to Edit"; }

    addLayer(newLayer);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-2xl">
      {/* Top Toolbar */}
      <div className="h-14 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-6 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={undo} title="Undo (Ctrl+Z)"><Undo size={18} /></Button>
          <Button variant="ghost" size="icon" onClick={redo} title="Redo (Ctrl+Y)"><Redo size={18} /></Button>
          <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-2" />
          <Button variant="ghost" size="icon" title="Select Tool"><MousePointer2 size={18} className="text-blue-600" /></Button>
          <Button variant="ghost" size="icon" onClick={() => addNewLayer('rect')} title="Rectangle"><Square size={18} /></Button>
          <Button variant="ghost" size="icon" onClick={() => addNewLayer('circle')} title="Circle"><Circle size={18} /></Button>
          <Button variant="ghost" size="icon" onClick={() => addNewLayer('text')} title="Text"><Type size={18} /></Button>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1 space-x-1">
             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => applyBooleanOp('union')} title="Union"><PlusSquare size={16} /></Button>
             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => applyBooleanOp('subtract')} title="Subtract"><MinusSquare size={16} /></Button>
             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => applyBooleanOp('intersect')} title="Intersect"><Box size={16} /></Button>
             <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => applyBooleanOp('exclude')} title="Exclude"><XSquare size={16} /></Button>
             <div className="w-px h-4 bg-gray-300 mx-1" />
             <Button variant="ghost" size="sm" className="h-8 px-2"><Layers size={14} className="mr-1" /> Groups</Button>
          </div>
          <Button variant="outline" size="sm"><Download size={16} className="mr-2" /> Export</Button>
          <Button size="sm"><Save size={16} className="mr-2" /> Save</Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Toolbar (Secondary) */}
        <div className="w-16 border-r border-gray-100 dark:border-gray-800 flex flex-col items-center py-4 space-y-4 bg-gray-50/30 dark:bg-gray-900/30">
             <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <MousePointer2 size={20} />
             </div>
             <Button variant="ghost" size="icon" className="w-10 h-10"><Scissors size={20} /></Button>
             <Button variant="ghost" size="icon" className="w-10 h-10"><Copy size={20} /></Button>
        </div>

        {/* Main Canvas Area */}
        <EditorCanvas />

        {/* Right Panels */}
        <div className="w-72 flex flex-col overflow-hidden">
           <LayerPanel />
           {/* Property Inspector */}
           <div className="h-72 border-t border-gray-100 dark:border-gray-800 p-4 bg-white dark:bg-gray-900 overflow-y-auto">
              <h3 className="font-bold text-sm mb-4">Properties</h3>
              {selectedIds.length === 1 ? (
                (() => {
                  const layer = layers.find(l => l.id === selectedIds[0]);
                  if (!layer) return null;
                  return (
                    <div className="space-y-4">
                       <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Fill Color</span>
                          <input
                            type="color"
                            value={layer.fill}
                            onChange={(e) => updateLayer(layer.id, { fill: e.target.value })}
                            className="w-8 h-8 rounded cursor-pointer border-none"
                          />
                       </div>
                       <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-xs text-gray-500">Opacity</span>
                            <span className="text-xs font-mono">{Math.round(layer.opacity * 100)}%</span>
                          </div>
                          <input
                            type="range" min="0" max="1" step="0.01"
                            value={layer.opacity}
                            onChange={(e) => updateLayer(layer.id, { opacity: parseFloat(e.target.value) })}
                            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                          />
                       </div>
                       {layer.type === 'text' && (
                         <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">Curvature</span>
                              <span className="text-xs font-mono">{layer.curvature || 0}</span>
                            </div>
                            <input
                              type="range" min="-100" max="100" step="1"
                              value={layer.curvature || 0}
                              onChange={(e) => updateLayer(layer.id, { curvature: parseInt(e.target.value) })}
                              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                            />
                         </div>
                       )}
                       <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                             <span className="text-[10px] text-gray-400 uppercase">Rotation</span>
                             <input
                                type="number"
                                value={layer.rotation}
                                onChange={(e) => updateLayer(layer.id, { rotation: parseInt(e.target.value) })}
                                className="w-full p-1 text-xs border rounded"
                             />
                          </div>
                          <div className="space-y-1">
                             <span className="text-[10px] text-gray-400 uppercase">Order</span>
                             <div className="flex space-x-1">
                                <Button variant="outline" size="icon" className="h-6 w-6"><Layers size={12} /></Button>
                             </div>
                          </div>
                       </div>
                    </div>
                  );
                })()
              ) : (
                <p className="text-xs text-gray-400 italic">Select an element to edit its properties.</p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};
