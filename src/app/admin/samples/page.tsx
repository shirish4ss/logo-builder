"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, Search, Filter } from "lucide-react";

export default function AdminSamplesPage() {
  const samples = [
    { id: "1", prompt: "Tech logo for InnovateX", result: "Blue abstract circle", rating: "5.0" },
    { id: "2", prompt: "Cafe logo for Bean Street", result: "Coffee cup line art", rating: "4.8" },
  ];

  return (
    <div className="p-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Prompt Sample Management</h1>
        <p className="text-gray-500">Curate and manage high-quality AI output samples for user inspiration.</p>
      </div>

      <div className="flex space-x-4">
         <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Search samples..." className="w-full pl-10 pr-4 py-2 border rounded-lg" />
         </div>
         <Button variant="outline"><Filter size={18} className="mr-2" /> Filter</Button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {samples.map(s => (
          <div key={s.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex space-x-6">
             <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                <ImageIcon size={32} />
             </div>
             <div className="flex-1 space-y-2">
                <p className="text-xs font-bold text-blue-600 uppercase">Sample #{s.id}</p>
                <p className="text-sm font-bold">{s.prompt}</p>
                <p className="text-xs text-gray-500">{s.result}</p>
                <div className="flex justify-between items-center pt-2">
                   <span className="text-xs font-bold">Rating: {s.rating}</span>
                   <Button variant="ghost" size="sm">Remove</Button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
