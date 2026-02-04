"use client";

import { motion } from "framer-motion";
import { BookOpen, Palette, Type, Shield, Download, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/lib/store";

export default function BrandingKitPage() {
  const { currentProject } = useStore();

  const sections = [
    {
      title: "Brand Voice",
      icon: <FileText className="text-purple-500" />,
      content: "Professional, Innovative, and Trustworthy. Focus on clarity and modern aesthetics.",
      status: "Generated"
    },
    {
      title: "Color Strategy",
      icon: <Palette className="text-blue-500" />,
      content: "Primary Blue #2563eb, Secondary Indigo #4f46e5. Accents in Slate and White.",
      status: "Complete"
    },
    {
      title: "Typography",
      icon: <Type className="text-emerald-500" />,
      content: "Primary: Inter (Sans-serif). Secondary: JetBrains Mono (Monospace for tech focus).",
      status: "Synced"
    },
    {
      title: "Usage Rules",
      icon: <Shield className="text-amber-500" />,
      content: "Minimum clearance: 20px. Do not rotate more than 15 degrees. No shadow effects.",
      status: "Active"
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2">Branding Kit</h1>
          <p className="text-gray-500 font-medium text-lg">Your complete visual identity in one place.</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="rounded-2xl px-6 h-14 border-gray-200">
            Preview PDF
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-8 h-14 shadow-lg shadow-blue-500/20">
            <Download className="mr-2" size={20} /> Export Brand Guidelines
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="rounded-[2.5rem] border-gray-100 dark:border-gray-800 h-full">
                  <CardHeader className="p-8 pb-4 flex flex-row items-center justify-between">
                    <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                      {section.icon}
                    </div>
                    <span className="flex items-center text-xs font-black text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1.5 rounded-full">
                       <CheckCircle2 size={12} className="mr-1" /> {section.status}
                    </span>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="rounded-[3rem] border-gray-100 dark:border-gray-800 p-12 overflow-hidden relative">
            <h3 className="text-2xl font-black mb-8">Mission & Vision</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div>
                  <h4 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">The Mission</h4>
                  <p className="text-xl font-bold leading-relaxed">To empower every entrepreneur with a world-class visual identity that speaks to their unique story.</p>
               </div>
               <div>
                  <h4 className="text-sm font-black text-purple-600 uppercase tracking-widest mb-4">The Vision</h4>
                  <p className="text-xl font-bold leading-relaxed">Defining the next era of design through the perfect harmony of human creativity and AI.</p>
               </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="rounded-[2.5rem] border-blue-100 bg-blue-50/30 dark:bg-blue-900/10 dark:border-blue-900/30 p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <BookOpen className="mr-2 text-blue-600" size={20} /> Assets Checklist
            </h3>
            <div className="space-y-6">
               {[
                 { label: "High-res Master Logo", done: true },
                 { label: "Monochrome Variations", done: true },
                 { label: "SVG Vector Files", done: true },
                 { label: "Font Licenses", done: false },
                 { label: "Print Ready PDF", done: true },
                 { label: "Social Media Favicon", done: false },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between">
                    <span className={`text-sm font-medium ${item.done ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400'}`}>
                      {item.label}
                    </span>
                    {item.done ? (
                      <CheckCircle2 size={18} className="text-emerald-500" />
                    ) : (
                      <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-200" />
                    )}
                 </div>
               ))}
            </div>
            <Button className="w-full mt-10 rounded-2xl h-14 font-bold bg-blue-600">
               Generate Missing Assets
            </Button>
          </Card>

          <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white">
             <h4 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">Brand Health</h4>
             <div className="flex items-end justify-between mb-4">
                <span className="text-4xl font-black">92%</span>
                <span className="text-emerald-500 text-sm font-bold">+5% this week</span>
             </div>
             <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-blue-600 rounded-full"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
