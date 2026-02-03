"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function SocialMediaKitPage() {
  const platforms = [
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, sizes: ["Profile Picture (320x320)", "Square Post (1080x1080)", "Story (1080x1920)"] },
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, sizes: ["Profile Picture (170x170)", "Cover Photo (820x312)", "Event Image (1200x628)"] },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, sizes: ["Profile Picture (400x400)", "Header Photo (1500x500)", "In-Stream Photo (1600x900)"] },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, sizes: ["Profile Picture (400x400)", "Background Photo (1584x396)", "Company Logo (300x300)"] },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Social Media Kit</h1>
          <p className="text-gray-500">Auto-generated assets for your social presence</p>
        </div>
        <Button className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Download All Assets
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {platforms.map((platform) => (
          <Card key={platform.name} className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                {platform.icon}
              </div>
              <h2 className="text-xl font-semibold">{platform.name} Assets</h2>
            </div>

            <div className="space-y-4">
              {platform.sizes.map((size) => (
                <div key={size} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <span className="text-sm font-medium">{size}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                <p className="text-gray-400 font-medium">Preview for {platform.name}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity">
                <Button size="sm">View Larger</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
