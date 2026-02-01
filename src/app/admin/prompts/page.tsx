"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Save, Plus, Trash2, Layout } from "lucide-react";

export default function AdminPromptsPage() {
  const [templates, setTemplates] = useState([
    { id: "1", name: "Modern Minimalist", template: "Create a minimalist logo for {businessName} in {style} style..." },
    { id: "2", name: "Vintage Classic", template: "Design a vintage emblem for {businessName} featuring {style} elements..." },
  ]);

  return (
    <div className="p-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prompt Structure Management</h1>
          <p className="text-gray-500">Define how AI prompts are constructed based on user input.</p>
        </div>
        <Button><Plus size={18} className="mr-2" /> New Template</Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {templates.map(t => (
          <div key={t.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
             <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg flex items-center"><Layout size={20} className="mr-2 text-blue-600" /> {t.name}</h3>
                <div className="flex space-x-2">
                   <Button variant="ghost" size="sm" className="text-red-500"><Trash2 size={16} /></Button>
                   <Button variant="outline" size="sm">Edit</Button>
                </div>
             </div>
             <textarea
                className="w-full p-4 bg-gray-50 border rounded-xl font-mono text-sm"
                rows={4}
                value={t.template}
                onChange={() => {}}
             />
             <div className="flex justify-between items-center text-xs text-gray-400">
                <p>Tokens estimated: 120</p>
                <Button size="sm"><Save size={14} className="mr-2" /> Save Template</Button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
