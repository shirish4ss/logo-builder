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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Logo Gallery</h1>
          <p className="text-gray-500 dark:text-gray-400">All your creations in one place.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <button
              onClick={() => setView("grid")}
              className={`p-2 transition-colors ${view === 'grid' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-gray-900 text-gray-400 hover:text-gray-600'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 border-l border-gray-200 dark:border-gray-800 transition-colors ${view === 'list' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-gray-900 text-gray-400 hover:text-gray-600'}`}
            >
              <ListIcon size={20} />
            </button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">Create New Logo</Button>
        </div>
      </div>

      <div className="flex items-center space-x-4 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by name, style, or industry..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          />
        </div>
        <Button variant="outline" className="dark:border-gray-700 dark:hover:bg-gray-800">
          <Filter size={18} className="mr-2" /> Filters
        </Button>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {logos.map((logo) => (
            <div key={logo.id} className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-square bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6 relative">
                <img src={logo.img} alt={logo.name} className="w-full h-full object-contain rounded-lg shadow-sm" />
                <button className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-md text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110">
                  <Heart size={18} />
                </button>
              </div>
              <div className="p-5 flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white transition-colors">{logo.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider font-semibold">{logo.style} • {logo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden transition-colors">
          <table className="w-full text-left">
             <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
               {logos.map(logo => (
                 <tr key={logo.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 flex items-center space-x-4">
                      <img src={logo.img} className="w-14 h-14 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700" />
                      <span className="font-bold text-gray-900 dark:text-white">{logo.name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium">{logo.style}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 font-medium">{logo.date}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-bold">Open Editor</Button>
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
