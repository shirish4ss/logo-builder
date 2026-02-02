"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PenTool, Image as ImageIcon, Briefcase, Share2, Star, Zap } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome back!</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Ready to create your next award-winning logo?</p>
        </div>
        <Link href="/dashboard/create">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-14 text-lg">
            <PenTool className="mr-2" size={20} />
            Create New Logo
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Recent Logos", value: "12", icon: ImageIcon, color: "bg-blue-500" },
          { title: "Active Kits", value: "4", icon: Briefcase, color: "bg-purple-500" },
          { title: "Total Shares", value: "85", icon: Share2, color: "bg-green-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-${stat.color.split('-')[1]}-500/20`}>
              <stat.icon size={24} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">{stat.title}</p>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Best Designs</h2>
            <Link href="/dashboard/gallery" className="text-blue-600 hover:text-blue-500 font-semibold text-sm">View All</Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="aspect-square bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 flex items-center justify-center group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors"></div>
                <ImageIcon className="text-gray-300 dark:text-gray-600" size={48} />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 p-2 rounded-xl shadow-md">
                   <Star className="text-yellow-400 fill-yellow-400" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
              <Zap size={28} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Upgrade to Pro</h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-sm">
              Unlock unlimited AI generation, high-res exports, and team collaboration.
            </p>
          </div>
          <div className="relative z-10 mt-10">
             <Link href="/pricing">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 w-full h-14 rounded-xl font-bold text-lg">
                  Explore Plans
                </Button>
             </Link>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
