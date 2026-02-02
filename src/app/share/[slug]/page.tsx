"use client";

import React, { useState, use } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Download, MessageSquare, Copy } from "lucide-react";
import Link from "next/link";

export default function WhiteLabelPortal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // In a real app, this would be fetched from the DB based on the slug
  const brand = {
    name: slug.charAt(0).toUpperCase() + slug.slice(1),
    logo: "https://placehold.co/400x400/white/blue?text=Logo",
    colors: ["#3b82f6", "#1e40af", "#f59e0b"],
    fonts: ["Inter Black", "Inter Regular"],
    whiteLabel: true, // This would come from the user's subscription/brand settings
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* NO PLATFORM BRANDING HERE if whiteLabel is true */}
      <header className="bg-white border-b border-gray-100 py-8 px-10 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-black tracking-tighter text-gray-900">{brand.name}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="rounded-full">
            Contact Designer
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-16 px-10 space-y-20">
        {/* Presentation Section */}
        <section className="text-center space-y-8">
           <div className="aspect-[16/9] bg-gray-50 rounded-[3rem] flex items-center justify-center p-20 border border-gray-100 shadow-inner">
              <img src={brand.logo} alt={brand.name} className="max-h-full drop-shadow-2xl" />
           </div>
           <div>
              <h2 className="text-4xl font-bold text-gray-900">Primary Brand Identity</h2>
              <p className="text-gray-500 mt-2 max-w-xl mx-auto">Designed for impact, scalability, and timeless appeal.</p>
           </div>
        </section>

        {/* Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="text-xl font-bold">Color Strategy</h3>
                <div className="grid grid-cols-3 gap-4">
                    {brand.colors.map(c => (
                        <div key={c} className="space-y-2">
                            <div className="h-24 rounded-2xl shadow-sm" style={{ backgroundColor: c }}></div>
                            <p className="text-xs font-mono font-bold text-center">{c}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-xl font-bold">Typography System</h3>
                <div className="space-y-4">
                    {brand.fonts.map(f => (
                        <div key={f} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Typeface</p>
                            <p className="text-3xl font-bold" style={{ fontFamily: f }}>{f}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Action Bar */}
        <footer className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-8 z-50">
            <div className="flex items-center space-x-2">
                <button
                  onClick={() => { setLikes(l => hasLiked ? l-1 : l+1); setHasLiked(!hasLiked); }}
                  className={`p-2 rounded-full transition-colors ${hasLiked ? 'text-red-500 bg-red-500/10' : 'text-gray-400 hover:text-white'}`}
                >
                    <Heart fill={hasLiked ? "currentColor" : "none"} size={20} />
                </button>
                <span className="text-sm font-bold">{likes}</span>
            </div>
            <div className="w-px h-4 bg-gray-700"></div>
            <button className="text-sm font-medium hover:text-blue-400 transition-colors flex items-center">
                <Download size={16} className="mr-2" /> Download Presentation
            </button>
            <div className="w-px h-4 bg-gray-700"></div>
            <button className="text-sm font-medium hover:text-blue-400 transition-colors flex items-center">
                <MessageSquare size={16} className="mr-2" /> Leave Feedback
            </button>
        </footer>
      </main>

      {!brand.whiteLabel && (
        <div className="text-center py-20 border-t border-gray-100 mt-20">
            <p className="text-gray-400 text-sm">Powered by <Link href="/" className="font-bold text-blue-600">BrandFlow AI</Link></p>
        </div>
      )}
    </div>
  );
}
