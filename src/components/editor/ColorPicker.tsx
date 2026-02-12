"use client";

import React from "react";
import { useEditorStore } from "@/lib/store";

export const ColorPicker = () => {
  const { selectedIds, layers, updateLayer } = useEditorStore();

  const selectedLayer = layers.find(l => selectedIds.includes(l.id));

  if (!selectedLayer) return null;

  const colors = [
    "#000000", "#ffffff", "#3b82f6", "#ef4444", "#10b981", "#f59e0b",
    "#8b5cf6", "#ec4899", "#6366f1", "#14b8a6", "#f43f5e", "#06b6d4"
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-400">Color</span>
        <div
          className="w-8 h-8 rounded-lg border border-white/10 cursor-pointer shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: selectedLayer.fill }}
        ></div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => updateLayer(selectedLayer.id, { fill: c })}
            className={`w-full aspect-square rounded-md border border-white/5 hover:scale-110 transition-transform ${selectedLayer.fill === c ? 'ring-2 ring-blue-500' : ''}`}
            style={{ backgroundColor: c }}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          value={selectedLayer.fill}
          onChange={(e) => updateLayer(selectedLayer.id, { fill: e.target.value })}
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-blue-500"
        />
        <input
          type="color"
          value={selectedLayer.fill}
          onChange={(e) => updateLayer(selectedLayer.id, { fill: e.target.value })}
          className="w-10 h-10 rounded-lg border-0 bg-transparent cursor-pointer"
        />
      </div>
    </div>
  );
};
