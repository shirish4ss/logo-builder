"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const DynamicThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
      <div className="text-center">
         <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
         <p className="text-sm text-gray-500 font-medium">Initializing 3D Engine...</p>
      </div>
    </div>
  )
});

export const Mockup3DViewer = ({ logoUrl }: { logoUrl: string }) => {
  const [activeMockup, setActiveMockup] = useState<'mug' | 'shirt'>('mug');

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-800 shadow-inner">
        <DynamicThreeScene logoUrl={logoUrl} type={activeMockup} />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/90 dark:bg-black/80 backdrop-blur-xl p-1.5 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl z-10">
           <button
             onClick={() => setActiveMockup('mug')}
             className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMockup === 'mug' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
           >
              Ceramic Mug
           </button>
           <button
             onClick={() => setActiveMockup('shirt')}
             className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMockup === 'shirt' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
           >
              Cotton T-Shirt
           </button>
        </div>
      </div>
    </div>
  );
};
