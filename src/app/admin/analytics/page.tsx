
import React from "react";

export default function PlaceholderPage() {
  return (
    <div className="p-10">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 border border-gray-100 dark:border-gray-800 shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white capitalize">
          analytics
        </h1>
        <div className="aspect-video bg-gray-50 dark:bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-500 text-lg mb-2">Module is being initialized...</p>
            <p className="text-gray-500 dark:text-gray-400 font-medium italic">This is one of the 20+ professional features available in LogoAI.</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-50 dark:bg-gray-800/40 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
