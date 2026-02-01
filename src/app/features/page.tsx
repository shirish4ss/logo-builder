"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap, Shield, Share2, Palette, Download, Users,
  Settings, Terminal, Globe, Layout, PenTool, Briefcase
} from "lucide-react";

const features = [
  { icon: Zap, title: "AI Generation", desc: "Advanced algorithms that understand your business needs." },
  { icon: PenTool, title: "Vector SVG Editor", desc: "Fill colors and modify shapes with precision." },
  { icon: Briefcase, title: "Branding Kit", desc: "Automatic generation of guidelines, colors, and fonts." },
  { icon: Share2, title: "Social Media Kit", desc: "Optimized assets for all major social platforms." },
  { icon: Users, title: "Team Workspaces", desc: "Collaborate with your team on brand designs." },
  { icon: Layout, title: "Public Brand Portals", desc: "Share your brand assets via a permanent link." },
  { icon: Download, title: "Multi-format Export", desc: "Download in SVG, PNG, JPG, and PDF formats." },
  { icon: Globe, title: "International Payments", desc: "Support for global clients with Stripe and Razorpay." },
  { icon: Shield, title: "Admin Security", desc: "Robust admin controls for users and system health." },
  { icon: Terminal, title: "API Access", desc: "Developer API keys to integrate our engine into your apps." },
  { icon: Palette, title: "Color Extraction", desc: "Extract perfect color palettes from any logo." },
  { icon: Settings, title: "Advanced Analytics", desc: "Track usage and revenue with detailed charts." },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="px-10 py-6 flex justify-between items-center border-b border-gray-100">
        <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-tight">LogoAI</Link>
        <nav className="flex items-center space-x-8">
          <Link href="/pricing" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="py-20 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-6">20+ Powerhouse Features</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Everything you need to create, manage, and scale your brand identity.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <f.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-32 bg-blue-600 rounded-3xl p-16 text-center text-white">
           <h2 className="text-4xl font-bold mb-6">Ready to start your brand journey?</h2>
           <Link href="/register">
             <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12 py-6">Create Your Logo Now</Button>
           </Link>
        </section>
      </main>
    </div>
  );
}
