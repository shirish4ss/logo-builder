"use client";

import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { PublicFooter } from "@/components/layout/PublicFooter";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <PublicNavbar />
      <main className="pt-32 pb-20 px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <h1 className="text-6xl font-black mb-8">Get in Touch</h1>
                <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
                    Have questions? Our team is here to help you build your brand.
                </p>
                <div className="space-y-8">
                    <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600"><Mail /></div>
                        <div>
                            <p className="font-bold">Email Us</p>
                            <p className="text-gray-500">support@logoai.example</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600"><MessageCircle /></div>
                        <div>
                            <p className="font-bold">Live Chat</p>
                            <p className="text-gray-500">Available 24/7 in dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-600"><MapPin /></div>
                        <div>
                            <p className="font-bold">Global HQ</p>
                            <p className="text-gray-500">Bangalore, India</p>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="bg-gray-50 dark:bg-gray-900 p-12 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl"
            >
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold">First Name</label>
                            <input className="w-full p-4 rounded-2xl border bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold">Last Name</label>
                            <input className="w-full p-4 rounded-2xl border bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold">Email</label>
                        <input className="w-full p-4 rounded-2xl border bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold">Message</label>
                        <textarea className="w-full p-4 rounded-2xl border bg-white dark:bg-gray-950 focus:ring-2 focus:ring-blue-500 h-32" placeholder="Tell us how we can help..."></textarea>
                    </div>
                    <Button className="w-full h-16 rounded-2xl text-xl font-bold bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
            </motion.div>
        </div>
      </main>
      <PublicFooter />
    </div>
  );
}
