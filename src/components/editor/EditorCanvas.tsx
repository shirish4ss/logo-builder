"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import { useEditorStore, Layer } from "@/lib/store";
import { motion, useMotionValue } from "framer-motion";
import { parsePath, updatePathSegment } from "@/lib/path-utils";

// --- Sub-components ---

const EditableText = ({
  layer,
  onUpdate
}: {
  layer: Layer,
  onUpdate: (text: string) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(layer.text || "");

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (tempText !== layer.text) {
      onUpdate(tempText);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  if (isEditing) {
    return (
      <foreignObject
        x={layer.x - (layer.width || 100) / 2}
        y={layer.y - (layer.fontSize || 20) / 2}
        width={layer.width || 200}
        height={layer.fontSize || 40}
      >
        <input
          autoFocus
          className="bg-transparent text-white border-none outline-none text-center w-full h-full"
          style={{
            fontFamily: layer.fontFamily || 'inherit',
            fontSize: layer.fontSize || 20,
            color: layer.fill
          }}
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
        />
      </foreignObject>
    );
  }

  return (
    <text
      x={layer.x}
      y={layer.y}
      fill={layer.fill}
      stroke={layer.stroke}
      strokeWidth={layer.strokeWidth}
      opacity={layer.opacity}
      textAnchor="middle"
      dominantBaseline="middle"
      className="select-none font-bold cursor-text"
      style={{ fontFamily: layer.fontFamily || 'inherit', fontSize: layer.fontSize || 20 }}
      onDoubleClick={handleDoubleClick}
    >
      {layer.text}
    </text>
  );
};

const LayerComponent = memo(({
  layer,
  isSelected,
  activeTool,
  onClick,
  onUpdate
}: {
  layer: Layer,
  isSelected: boolean,
  activeTool: string,
  onClick: (e: React.MouseEvent) => void,
  onUpdate: (id: string, updates: Partial<Layer>) => void
}) => {
  if (!layer.visible) return null;

  const handleDragEnd = (event: any, info: any) => {
    onUpdate(layer.id, { x: layer.x + info.offset.x, y: layer.y + info.offset.y });
  };

  const commonProps = {
    fill: layer.fill,
    stroke: layer.stroke,
    strokeWidth: layer.strokeWidth,
    opacity: layer.opacity,
    style: { cursor: layer.locked ? "default" : (activeTool === 'select' ? "move" : "default") },
    onClick,
  };

  const dragProps = {
    drag: !layer.locked && activeTool === 'select',
    dragMomentum: false,
    onDragEnd: handleDragEnd,
  };

  const transform = `rotate(${layer.rotation})`;

  switch (layer.type) {
    case "path":
      return (
        <motion.path
          key={layer.id}
          {...commonProps}
          {...dragProps}
          d={layer.d}
          transform={`translate(${layer.x}, ${layer.y}) ${transform}`}
        />
      );
    case "circle":
      return (
        <motion.circle
          key={layer.id}
          {...commonProps}
          {...dragProps}
          cx={layer.x}
          cy={layer.y}
          r={layer.radius || 20}
          transform={transform}
        />
      );
    case "rect":
      return (
        <motion.rect
          key={layer.id}
          {...commonProps}
          {...dragProps}
          x={layer.x - (layer.width!/2)}
          y={layer.y - (layer.height!/2)}
          width={layer.width}
          height={layer.height}
          transform={transform}
        />
      );
    case "text":
      return (
        <g key={layer.id} transform={transform}>
           <EditableText layer={layer} onUpdate={(t) => onUpdate(layer.id, { text: t })} />
        </g>
      );
    case "image":
      return (
        <motion.image
          key={layer.id}
          {...commonProps}
          {...dragProps}
          href={layer.imageUrl}
          x={layer.x - (layer.width!/2)}
          y={layer.y - (layer.height!/2)}
          width={layer.width}
          height={layer.height}
          transform={transform}
        />
      );
    default:
      return null;
  }
});

LayerComponent.displayName = "LayerComponent";

// --- Main Component ---

export const EditorCanvas = () => {
  const { layers, selectedIds, setSelectedIds, updateLayer, activeTool } = useEditorStore();
  const [editingSegments, setEditingSegments] = useState<{ id: string, segments: any[] } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (selectedIds.length === 1) {
      const layer = layers.find(l => l.id === selectedIds[0]);
      if (layer?.type === 'path' && layer.d) {
        setEditingSegments({ id: layer.id, segments: parsePath(layer.d) });
      } else {
        setEditingSegments(null);
      }
    } else {
      setEditingSegments(null);
    }
  }, [selectedIds, layers]);

  const handleSegmentDrag = (id: string, index: number, info: any, type: 'point' | 'handleIn' | 'handleOut') => {
    const layer = layers.find(l => l.id === id);
    if (!layer || !layer.d || !editingSegments) return;

    const updates: any = {};
    if (type === 'point') {
        updates.point = {
            x: editingSegments.segments[index].point.x + info.offset.x,
            y: editingSegments.segments[index].point.y + info.offset.y
        };
    } else if (type === 'handleIn') {
        updates.handleIn = {
            x: editingSegments.segments[index].handleIn.x + info.offset.x,
            y: editingSegments.segments[index].handleIn.y + info.offset.y
        };
    } else if (type === 'handleOut') {
        updates.handleOut = {
            x: editingSegments.segments[index].handleOut.x + info.offset.x,
            y: editingSegments.segments[index].handleOut.y + info.offset.y
        };
    }

    const newD = updatePathSegment(layer.d, index, updates);
    updateLayer(id, { d: newD });
  };

  const handleCanvasClick = () => {
    setSelectedIds([]);
  };

  return (
    <div
      className="flex-1 bg-gray-100 dark:bg-gray-950 flex items-center justify-center overflow-hidden p-10"
      onClick={handleCanvasClick}
    >
      <div className="relative bg-white dark:bg-gray-900 shadow-2xl rounded-sm">
        <svg
          ref={svgRef}
          width="600"
          height="600"
          viewBox="0 0 600 600"
          className="max-w-full h-auto block"
        >
          <defs>
             <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
               <path d="M 20 0 L 0 0 0 20" fill="none" stroke="gray" strokeWidth="0.5" opacity="0.1"/>
             </pattern>
          </defs>

          <rect width="600" height="600" fill="url(#grid)" />

          <g>
            {layers.map((layer) => (
              <LayerComponent
                key={layer.id}
                layer={layer}
                isSelected={selectedIds.includes(layer.id)}
                activeTool={activeTool}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIds([layer.id]);
                }}
                onUpdate={updateLayer}
              />
            ))}
          </g>

          {/* Selection Overlays */}
          {layers.filter(l => selectedIds.includes(l.id)).map(l => (
            <React.Fragment key={`selection-${l.id}`}>
              <rect
                x={l.x - (l.width ? l.width/2 : 25) - 5}
                y={l.y - (l.height ? l.height/2 : 25) - 5}
                width={(l.width || 50) + 10}
                height={(l.height || 50) + 10}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="1"
                strokeDasharray="4"
              />
              {/* Node Editor */}
              {l.type === 'path' && editingSegments && editingSegments.id === l.id && activeTool === 'select' && (
                <g transform={`translate(${l.x}, ${l.y}) rotate(${l.rotation})`}>
                  {editingSegments.segments.map((seg, idx) => (
                    <g key={idx}>
                      <line x1={seg.point.x} y1={seg.point.y} x2={seg.point.x + seg.handleIn.x} y2={seg.point.y + seg.handleIn.y} stroke="#3b82f6" strokeWidth="1" />
                      <line x1={seg.point.x} y1={seg.point.y} x2={seg.point.x + seg.handleOut.x} y2={seg.point.y + seg.handleOut.y} stroke="#3b82f6" strokeWidth="1" />

                      <motion.circle
                        cx={seg.point.x}
                        cy={seg.point.y}
                        r={4}
                        fill="#3b82f6"
                        drag
                        dragMomentum={false}
                        onDragEnd={(e, info) => handleSegmentDrag(l.id, idx, info, 'point')}
                        style={{ cursor: 'crosshair' }}
                      />

                      <motion.circle
                        cx={seg.point.x + seg.handleIn.x}
                        cy={seg.point.y + seg.handleIn.y}
                        r={3}
                        fill="white"
                        stroke="#3b82f6"
                        drag
                        dragMomentum={false}
                        onDragEnd={(e, info) => handleSegmentDrag(l.id, idx, info, 'handleIn')}
                        style={{ cursor: 'nwse-resize' }}
                      />

                      <motion.circle
                        cx={seg.point.x + seg.handleOut.x}
                        cy={seg.point.y + seg.handleOut.y}
                        r={3}
                        fill="white"
                        stroke="#3b82f6"
                        drag
                        dragMomentum={false}
                        onDragEnd={(e, info) => handleSegmentDrag(l.id, idx, info, 'handleOut')}
                        style={{ cursor: 'nwse-resize' }}
                      />
                    </g>
                  ))}
                </g>
              )}
            </React.Fragment>
          ))}
        </svg>
      </div>
    </div>
  );
};
