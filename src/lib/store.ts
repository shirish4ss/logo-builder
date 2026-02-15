import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export interface Layer {
  id: string;
  name: string;
  type: 'path' | 'text' | 'circle' | 'rect' | 'image';
  d?: string;
  text?: string;
  imageUrl?: string;
  fontFamily?: string;
  fontSize?: number;
  curvature?: number; // 0 is flat, positive is arch up, negative is arch down
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  rotation: number;
  opacity: number;
  visible: boolean;
  locked: boolean;
  textPathId?: string;
}

interface EditorState {
  layers: Layer[];
  selectedIds: string[];
  history: Layer[][];
  historyIndex: number;
  activeTool: 'select' | 'pen' | 'text' | 'hand';

  // Actions
  setLayers: (layers: Layer[]) => void;
  addLayer: (layer: Layer) => void;
  updateLayer: (id: string, updates: Partial<Layer>) => void;
  removeLayers: (ids: string[]) => void;
  setSelectedIds: (ids: string[]) => void;
  setActiveTool: (tool: 'select' | 'pen' | 'text' | 'hand') => void;

  // Undo/Redo
  saveHistory: () => void;
  undo: () => void;
  redo: () => void;

  // Alignment
  alignLayers: (type: 'left' | 'center' | 'right' | 'top' | 'middle' | 'bottom') => void;

  // Boolean Ops
  applyBooleanOp: (type: 'union' | 'subtract' | 'intersect' | 'exclude') => void;

  // Vectorization
  vectorizeLayer: (id: string) => Promise<void>;
}

export const useEditorStore = create<EditorState>()(
  subscribeWithSelector((set, get) => ({
    layers: [],
    selectedIds: [],
    history: [[]],
    historyIndex: 0,
    activeTool: 'select',

    setLayers: (layers) => set({ layers }),

    addLayer: (layer) => {
      const { layers } = get();
      const newLayers = [...layers, layer];
      set({ layers: newLayers });
      get().saveHistory();
    },

    updateLayer: (id, updates) => {
      const { layers } = get();
      const newLayers = layers.map((l) => (l.id === id ? { ...l, ...updates } : l));
      set({ layers: newLayers });
    },

    removeLayers: (ids) => {
      const { layers } = get();
      const newLayers = layers.filter((l) => !ids.includes(l.id));
      set({ layers: newLayers, selectedIds: [] });
      get().saveHistory();
    },

    setSelectedIds: (ids) => set({ selectedIds: ids }),

    setActiveTool: (tool) => set({ activeTool: tool }),

    saveHistory: () => {
      const { layers, history, historyIndex } = get();
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(JSON.parse(JSON.stringify(layers)));
      set({
        history: newHistory,
        historyIndex: newHistory.length - 1,
      });
    },

    undo: () => {
      const { history, historyIndex } = get();
      if (historyIndex > 0) {
        const prevLayers = history[historyIndex - 1];
        set({
          layers: JSON.parse(JSON.stringify(prevLayers)),
          historyIndex: historyIndex - 1,
        });
      }
    },

    redo: () => {
      const { history, historyIndex } = get();
      if (historyIndex < history.length - 1) {
        const nextLayers = history[historyIndex + 1];
        set({
          layers: JSON.parse(JSON.stringify(nextLayers)),
          historyIndex: historyIndex + 1,
        });
      }
    },

    alignLayers: (type) => {
      const { layers, selectedIds } = get();
      if (selectedIds.length <= 1) return;

      const selectedLayers = layers.filter(l => selectedIds.includes(l.id));
      const minX = Math.min(...selectedLayers.map(l => l.x));
      const maxX = Math.max(...selectedLayers.map(l => l.x));
      const minY = Math.min(...selectedLayers.map(l => l.y));
      const maxY = Math.max(...selectedLayers.map(l => l.y));
      const midX = (minX + maxX) / 2;
      const midY = (minY + maxY) / 2;

      const newLayers = layers.map(l => {
        if (!selectedIds.includes(l.id)) return l;
        switch (type) {
          case 'left': return { ...l, x: minX };
          case 'right': return { ...l, x: maxX };
          case 'center': return { ...l, x: midX };
          case 'top': return { ...l, y: minY };
          case 'bottom': return { ...l, y: maxY };
          case 'middle': return { ...l, y: midY };
          default: return l;
        }
      });

      set({ layers: newLayers });
      get().saveHistory();
    },

    vectorizeLayer: async (id) => {
      const { layers, updateLayer } = get();
      const layer = layers.find(l => l.id === id);
      if (!layer || layer.type !== 'image') return;

      try {
        const response = await fetch('/api/vectorize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: layer.imageUrl })
        });
        const data = await response.json();

        // Transform image layer into path layer
        const updates: Partial<Layer> = {
          type: 'path',
          d: data.path,
          fill: '#000000',
          name: `${layer.name} (Vector)`
        };

        updateLayer(id, updates);
        get().saveHistory();
      } catch (error) {
        console.error("Vectorization failed:", error);
      }
    },

    applyBooleanOp: async (type) => {
      const { layers, selectedIds } = get();
      if (selectedIds.length !== 2) return;

      const l1 = layers.find(l => l.id === selectedIds[0]);
      const l2 = layers.find(l => l.id === selectedIds[1]);
      if (!l1 || !l2 || l1.type !== 'path' || l2.type !== 'path') return;

      const { performBooleanOp } = await import('./boolean-ops');
      const newD = await performBooleanOp(
        l1.d!, l2.d!, type,
        { x: l1.x, y: l1.y, rotation: l1.rotation },
        { x: l2.x, y: l2.y, rotation: l2.rotation }
      );

      const newLayer: Layer = {
        ...l1,
        id: Math.random().toString(36).substr(2, 9),
        name: `${type.toUpperCase()} Result`,
        d: newD,
        x: 0, // Result is in absolute space from performBooleanOp
        y: 0,
        rotation: 0,
      };

      const newLayers = layers.filter(l => !selectedIds.includes(l.id));
      newLayers.push(newLayer);

      set({ layers: newLayers, selectedIds: [newLayer.id] });
      get().saveHistory();
    }
  }))
);
