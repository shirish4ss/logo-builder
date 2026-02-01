"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Cpu, MessageSquare, Layout, Save, RefreshCw } from "lucide-react";

export default function AdminAIPage() {
  const [activeModel, setActiveModel] = useState("gemini-1.5-pro");
  const [systemPrompt, setSystemPrompt] = useState("You are an expert logo designer AI...");

  return (
    <div className="p-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI & Content Management</h1>
        <p className="text-gray-500">Configure AI models, prompts, and landing page content.</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Model Configuration */}
        <div className="col-span-1 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <Cpu className="text-blue-600" />
            <h2 className="text-xl font-bold">Model Switcher</h2>
          </div>
          <div className="space-y-3">
            {[
              { id: "gemini-1.5-pro", name: "Google Gemini 1.5 Pro", status: "Active" },
              { id: "gpt-4o", name: "OpenAI GPT-4o", status: "Available" },
              { id: "claude-3-sonnet", name: "Anthropic Claude 3", status: "Available" },
            ].map((model) => (
              <div
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  activeModel === model.id ? "border-blue-600 bg-blue-50" : "border-gray-100 hover:border-blue-200"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="font-bold text-sm">{model.name}</p>
                  <span className={`text-[10px] px-2 py-1 rounded-full ${
                    model.status === 'Active' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {model.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full">Test Connection</Button>
        </div>

        {/* Prompt Editor */}
        <div className="col-span-2 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageSquare className="text-blue-600" />
              <h2 className="text-xl font-bold">System Prompt Editor</h2>
            </div>
            <Button size="sm">
              <Save size={16} className="mr-2" /> Save Prompt
            </Button>
          </div>
          <textarea
            className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
          ></textarea>
          <div className="flex justify-between items-center text-xs text-gray-400">
            <p>Variables available: {"{businessName}"}, {"{industry}"}, {"{style}"}</p>
            <p>Last updated: 2 hours ago</p>
          </div>
        </div>
      </div>

      {/* Content Management Section */}
      <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Layout className="text-blue-600" />
            <h2 className="text-2xl font-bold">Landing Page CMS</h2>
          </div>
          <Button variant="outline">
            <RefreshCw size={16} className="mr-2" /> Revert to Default
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Hero Headline</label>
            <input
              type="text"
              defaultValue="Design Your Perfect Logo Powered by AI in Seconds."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Hero Subheadline</label>
            <input
              type="text"
              defaultValue="The world's most advanced AI-powered logo designer."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        </div>
        <Button className="w-full bg-slate-900">Update Landing Page</Button>
      </section>
    </div>
  );
}
