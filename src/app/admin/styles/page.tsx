"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, LayoutGrid } from "lucide-react";

export default function AdminStylesPage() {
  const styles = [
    { name: "Swiss Minimalist", modifier: "clean lines, geometric...", usage: 145 },
    { name: "Abstract Modern", modifier: "fluid shapes, vibrant...", usage: 89 },
    { name: "Paul Rand inspired", modifier: "bold simple shapes...", usage: 67 },
  ];

  return (
    <div className="p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Style Manager</h1>
          <p className="text-gray-500">CRUD interface for &quot;The Master&apos;s Touch&quot; design styles.</p>
        </div>
        <Button>
          <Plus size={18} className="mr-2" /> Add New Style
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {styles.map(style => (
          <div key={style.name} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col">
            <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400">
               <LayoutGrid size={40} />
            </div>
            <div className="p-5 flex-1 space-y-3">
              <h3 className="font-bold text-gray-900">{style.name}</h3>
              <p className="text-xs text-gray-500 bg-gray-50 p-2 rounded italic">&quot;{style.modifier}&quot;</p>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[10px] text-blue-600 font-bold uppercase">{style.usage} Uses</span>
                <div className="flex space-x-1">
                  <button className="p-2 text-gray-400 hover:text-blue-600"><Edit size={16} /></button>
                  <button className="p-2 text-gray-400 hover:text-red-600"><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
