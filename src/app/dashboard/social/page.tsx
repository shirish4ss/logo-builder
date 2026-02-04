"use client";

import { motion } from "framer-motion";
import { Download, Share2, Instagram, Facebook, Twitter, Linkedin, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useStore } from "@/lib/store";

export default function SocialMediaKitPage() {
  const { currentProject } = useStore();

  const platforms = [
    { name: "Instagram", icon: <Instagram />, sizes: ["Post (1080x1080)", "Story (1080x1920)", "Profile"] },
    { name: "Facebook", icon: <Facebook />, sizes: ["Cover (820x312)", "Post (1200x630)", "Profile"] },
    { name: "Twitter", icon: <Twitter />, sizes: ["Header (1500x500)", "Post (1200x675)", "Profile"] },
    { name: "LinkedIn", icon: <Linkedin />, sizes: ["Cover (1584x396)", "Post (1200x1200)", "Profile"] },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-black mb-2">Social Media Kit</h1>
          <p className="text-gray-500 font-medium text-lg">Auto-generated assets for your social presence.</p>
        </div>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-8 h-14">
          <Download className="mr-2" size={20} /> Download All Assets
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {platforms.map((platform, idx) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="rounded-[2.5rem] border-gray-100 dark:border-gray-800 overflow-hidden group">
              <CardHeader className="p-8 pb-4">
                <div className="w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {platform.icon}
                </div>
                <CardTitle className="text-2xl font-bold">{platform.name}</CardTitle>
                <CardDescription>Generated for your brand</CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <div className="space-y-4">
                  {platform.sizes.map((size) => (
                    <div key={size} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-xl border border-transparent hover:border-blue-500 transition-all cursor-pointer group/item">
                      <div className="flex items-center space-x-3">
                        <ImageIcon size={18} className="text-gray-400 group-hover/item:text-blue-500" />
                        <span className="text-sm font-bold">{size}</span>
                      </div>
                      <Download size={16} className="text-gray-400 group-hover/item:text-blue-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-4">Post Automation</h2>
            <p className="text-blue-100 text-lg max-w-xl">
              Connect your social accounts and our AI will automatically create on-brand posts using your logo and color palette.
            </p>
          </div>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 rounded-2xl px-10 h-14 font-black">
            Connect Accounts
          </Button>
        </div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
