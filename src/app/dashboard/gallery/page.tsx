"use client";

import React, { useState } from "react";
import { Search, Filter, Grid, List as ListIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GalleryPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const logos = [
    { id: "1", name: "InnovateX Main", style: "Minimalist", date: "2025-01-28", img: "https://placehold.co/200x200/white/blue?text=Logo+1" },
    { id: "2", name: "Green Leaf", style: "Nature", date: "2025-01-25", img: "https://placehold.co/200x200/white/green?text=Logo+2" },
    { id: "3", name: "Tech Pulse", style: "Futuristic", date: "2025-01-20", img: "https://placehold.co/200x200/white/purple?text=Logo+3" },
  ];

  return (
    <div className="p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Logo Gallery</h1>
          <p className="text-gray-500">All your creations in one place.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`p-2 ${view === 'grid' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-400 hover:text-gray-600'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 border-l border-gray-200 ${view === 'list' ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-400 hover:text-gray-600'}`}
            >
              <ListIcon size={20} />
            </button>
          </div>
          <Button>Create New Logo</Button>
        </div>
      </div>

      <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, style, or industry..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button variant="outline">
          <Filter size={18} className="mr-2" /> Filters
        </Button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-4 gap-6">
          {logos.map((logo) => (
            <div key={logo.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-6 relative">
                <img src={logo.img} alt={logo.name} className="w-full h-full object-contain rounded-lg" />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart size={18} />
                </button>
              </div>
              <div className="p-4 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{logo.name}</h3>
                  <p className="text-xs text-gray-500">{logo.style} • {logo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
             {/* Simple table rows would go here */}
             <tbody className="divide-y divide-gray-100">
               {logos.map(logo => (
                 <tr key={logo.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 flex items-center space-x-4">
                      <img src={logo.img} className="w-12 h-12 rounded bg-gray-50" />
                      <span className="font-medium text-gray-900">{logo.name}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{logo.style}</td>
                    <td className="px-6 py-4 text-gray-500">{logo.date}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm">Open</Button>
                    </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
