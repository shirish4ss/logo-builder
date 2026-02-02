"use client";

import React from "react";
import { useEditorStore, Layer } from "@/lib/store";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Eye, EyeOff, Lock, Unlock, GripVertical, Trash2 } from "lucide-react";

interface SortableLayerItemProps {
  layer: Layer;
}

const SortableLayerItem = ({ layer }: SortableLayerItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: layer.id });

  const { updateLayer, removeLayers, selectedIds, setSelectedIds } = useEditorStore();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isSelected = selectedIds.includes(layer.id);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center p-2 mb-1 rounded-lg border transition-colors ${
        isSelected ? "bg-blue-50 border-blue-200" : "bg-white border-gray-100 hover:bg-gray-50"
      }`}
      onClick={() => setSelectedIds([layer.id])}
    >
      <div {...attributes} {...listeners} className="cursor-grab mr-2 text-gray-400">
        <GripVertical size={16} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium truncate">{layer.name}</p>
        <p className="text-[10px] text-gray-400 uppercase">{layer.type}</p>
      </div>

      <div className="flex items-center space-x-1">
        <button
          onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { visible: !layer.visible }); }}
          className="p-1 hover:bg-gray-100 rounded text-gray-500"
        >
          {layer.visible ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); updateLayer(layer.id, { locked: !layer.locked }); }}
          className="p-1 hover:bg-gray-100 rounded text-gray-500"
        >
          {layer.locked ? <Lock size={14} /> : <Unlock size={14} />}
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); removeLayers([layer.id]); }}
          className="p-1 hover:bg-red-50 rounded text-red-400"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export const LayerPanel = () => {
  const { layers, setLayers } = useEditorStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = layers.findIndex((l) => l.id === active.id);
      const newIndex = layers.findIndex((l) => l.id === over.id);
      setLayers(arrayMove(layers, oldIndex, newIndex));
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800">
      <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <h3 className="font-bold text-sm">Layers</h3>
        <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-500">
          {layers.length} Total
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={layers.map(l => l.id)}
            strategy={verticalListSortingStrategy}
          >
            {layers.slice().reverse().map((layer) => (
              <SortableLayerItem key={layer.id} layer={layer} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};
