"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, DollarSign, CheckCircle, XCircle } from "lucide-react";

export default function AdminSubscriptionsPage() {
  const plans = [
    { name: "Free", price: "₹0", features: ["1 Logo only", "Low Res PNG", "Basic Styles"], subscribers: 850 },
    { name: "Basic", price: "₹499", features: ["Unlimited Logos", "High Res PNG", "SVG Export", "Social Media Kit"], subscribers: 320 },
    { name: "Pro", price: "₹1,499", features: ["Everything in Basic", "Branding Kit Guidelines", "Vector Editor Access", "Direct-to-Print API"], subscribers: 125 },
  ];

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subscriptions & Packages</h1>
          <p className="text-gray-500">Manage your product pricing tiers and feature access.</p>
        </div>
        <Button><Package size={18} className="mr-2" /> Create New Plan</Button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
           <div className="p-3 bg-green-100 rounded-full text-green-600"><TrendingUp /></div>
           <div>
              <p className="text-sm text-gray-500">Monthly Revenue (MRR)</p>
              <p className="text-2xl font-bold">₹3,47,250</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
           <div className="p-3 bg-blue-100 rounded-full text-blue-600"><Package /></div>
           <div>
              <p className="text-sm text-gray-500">Active Paid Users</p>
              <p className="text-2xl font-bold">445</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
           <div className="p-3 bg-purple-100 rounded-full text-purple-600"><DollarSign /></div>
           <div>
              <p className="text-sm text-gray-500">Avg. Revenue Per User</p>
              <p className="text-2xl font-bold">₹780</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.name} className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
             <div className="p-8 border-b border-gray-50 bg-gray-50/50">
                <h3 className="text-xl font-bold text-gray-900">{plan.name} Plan</h3>
                <p className="text-3xl font-black text-blue-600 mt-2">{plan.price}</p>
                <p className="text-xs text-gray-400 mt-1">Per Month</p>
             </div>
             <div className="p-8 flex-1 space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase">Features Include</p>
                {plan.features.map(f => (
                   <div key={f} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-green-500" />
                      <span>{f}</span>
                   </div>
                ))}
             </div>
             <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                <p className="text-xs font-medium text-gray-500">{plan.subscribers} Subscribers</p>
                <Button variant="outline" size="sm">Edit Plan</Button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
