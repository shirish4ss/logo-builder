"use client";

import React, { useRef, useState } from "react";
import { useEditorStore, Layer } from "@/lib/store";
import { motion } from "framer-motion";

export const EditorCanvas = () => {
  const { layers, selectedIds, setSelectedIds, updateLayer } = useEditorStore();
  const svgRef = useRef<SVGSVGElement>(null);

  const handleLayerClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSelectedIds([id]);
  };

  const renderLayer = (layer: Layer) => {
    if (!layer.visible) return null;

    // Curved Text Path Helper
    const getTextPath = (curvature: number) => {
        const r = Math.abs(2000 / (curvature || 0.001));
        const sweep = curvature > 0 ? 0 : 1;
        return `M -100,0 A ${r},${r} 0 0,${sweep} 100,0`;
    };

    const commonProps = {
      key: layer.id,
      onClick: (e: React.MouseEvent) => handleLayerClick(e, layer.id),
      fill: layer.fill,
      stroke: layer.stroke,
      strokeWidth: layer.strokeWidth,
      opacity: layer.opacity,
      transform: `translate(${layer.x}, ${layer.y}) rotate(${layer.rotation})`,
      style: { cursor: layer.locked ? "default" : "move" },
    };

    const dragProps = {
        drag: !layer.locked,
        dragMomentum: false,
        onDrag: (event: any, info: any) => {
            // Snapping logic could be triggered here to show guides
        },
        onDragEnd: (event: any, info: any) => {
            updateLayer(layer.id, { x: layer.x + info.offset.x, y: layer.y + info.offset.y });
        }
    };

    switch (layer.type) {
      case "path":
        return <motion.path {...commonProps} {...dragProps} d={layer.d} />;
      case "circle":
        return <motion.circle {...commonProps} {...dragProps} cx={0} cy={0} r={layer.radius || 20} />;
      case "rect":
        return <motion.rect {...commonProps} {...dragProps} x={-(layer.width!/2)} y={-(layer.height!/2)} width={layer.width} height={layer.height} />;
      case "text":
        if (layer.curvature) {
            const pathId = `path-${layer.id}`;
            return (
                <g key={layer.id} transform={`translate(${layer.x}, ${layer.y}) rotate(${layer.rotation})`}>
                    <defs>
                        <path id={pathId} d={getTextPath(layer.curvature)} />
                    </defs>
                    <text
                        fill={layer.fill}
                        stroke={layer.stroke}
                        strokeWidth={layer.strokeWidth}
                        opacity={layer.opacity}
                        onClick={(e) => handleLayerClick(e, layer.id)}
                        className="select-none font-bold"
                    >
                        <textPath href={`#${pathId}`} startOffset="50%" textAnchor="middle">
                            {layer.text}
                        </textPath>
                    </text>
                </g>
            );
        }
        return (
          <text
            {...commonProps}
            textAnchor="middle"
            dominantBaseline="middle"
            className="select-none font-bold"
          >
            {layer.text}
          </text>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex-1 bg-gray-100 dark:bg-gray-950 flex items-center justify-center overflow-hidden p-10"
      onClick={() => setSelectedIds([])}
    >
      <div className="relative bg-white dark:bg-gray-900 shadow-2xl rounded-sm">
        <svg
          ref={svgRef}
          width="600"
          height="600"
          viewBox="0 0 600 600"
          className="max-w-full h-auto block"
        >
          {/* Definitions for Text Paths and Boolean Ops */}
          <defs>
             <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
               <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.1"/>
             </pattern>
             {/* Dynamic paths for text-on-path will be added here or rendered inline */}
             <path id="circle-path" d="M 300, 300 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0" />
          </defs>

          <rect width="600" height="600" fill="url(#grid)" />

          <g transform="translate(0, 0)">
            {layers.map(renderLayer)}
          </g>

          {/* Selection Overlays */}
          {layers.filter(l => selectedIds.includes(l.id)).map(l => (
              <rect
                key={`outline-${l.id}`}
                x={l.x - 25}
                y={l.y - 25}
                width={50}
                height={50}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
                strokeDasharray="4"
              />
          ))}
        </svg>

        {/* Alignment Guides Placeholder */}
        <div className="absolute inset-0 pointer-events-none">
            {/* Logic for smart guides will render lines here */}
        </div>
      </div>
    </div>
  );
};
