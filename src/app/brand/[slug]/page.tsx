"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Download, MessageSquare, Copy } from "lucide-react";

export default function PublicBrandPortal({ params }: { params: { slug: string } }) {
  const [likes, setLikes] = useState(124);
  const [hasLiked, setHasLiked] = useState(false);

  const brand = {
    name: "InnovateX",
    logo: "https://placehold.co/400x400/white/blue?text=InnovateX",
    colors: ["#3b82f6", "#1e40af", "#f59e0b"],
    fonts: ["Inter Black", "Inter Regular"],
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Public Header */}
      <header className="bg-white border-b border-gray-200 py-6 px-10 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">IX</div>
          <h1 className="text-xl font-bold">{brand.name} Brand Portal</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Share2 size={16} className="mr-2" /> Share
          </Button>
          <Button size="sm">Follow Brand</Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto mt-12 px-10 space-y-12">
        {/* Logo Showcase */}
        <section className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="aspect-video bg-gray-50 flex items-center justify-center p-20">
             <img src={brand.logo} alt={brand.name} className="max-h-full shadow-2xl rounded-2xl" />
          </div>
          <div className="p-8 flex justify-between items-center border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => { setLikes(l => hasLiked ? l-1 : l+1); setHasLiked(!hasLiked); }}
                className={`flex items-center space-x-2 font-bold ${hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Heart fill={hasLiked ? "currentColor" : "none"} size={24} />
                <span>{likes}</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 font-bold">
                <MessageSquare size={24} />
                <span>12 Comments</span>
              </button>
            </div>
            <Button>
              <Download size={18} className="mr-2" /> Download Assets
            </Button>
          </div>
        </section>

        {/* Brand Specs */}
        <div className="grid grid-cols-2 gap-8">
          <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold">Official Colors</h2>
            <div className="space-y-3">
              {brand.colors.map(color => (
                <div key={color} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg shadow-sm" style={{ backgroundColor: color }}></div>
                    <span className="font-mono font-bold uppercase">{color}</span>
                  </div>
                  <button className="text-gray-400 hover:text-blue-600"><Copy size={16} /></button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
            <h2 className="text-xl font-bold">Typography</h2>
            <div className="space-y-4">
              {brand.fonts.map(font => (
                <div key={font} className="p-4 border border-gray-100 rounded-xl">
                  <p className="text-xs text-gray-400 mb-1">Font Family</p>
                  <p className="text-xl font-bold">{font}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Community Feedback */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Community Feedback</h2>
          <div className="space-y-4">
             <div className="flex space-x-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex-shrink-0"></div>
                <div>
                   <p className="font-bold text-sm">DesignCritique88 <span className="text-gray-400 font-normal ml-2">2 days ago</span></p>
                   <p className="text-gray-600 text-sm mt-1">The minimalist approach works perfectly for the tech sector. Great choice of blue!</p>
                </div>
             </div>
          </div>
          <div className="relative">
             <input type="text" placeholder="Add a comment..." className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" />
             <Button className="absolute right-2 top-2">Post</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
