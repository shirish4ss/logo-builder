"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Package, TrendingUp, Users, Settings } from "lucide-react";

export default function AdminSubscriptionsPage() {
  const plans = [
    { name: "Free", price: "₹0", users: 850, status: "Public" },
    { name: "Basic", price: "₹499", users: 320, status: "Public" },
    { name: "Pro", price: "₹1,499", users: 125, status: "Public" },
  ];

  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subscription & Package Management</h1>
          <p className="text-gray-500">Manage pricing, plan features, and subscription tiers.</p>
        </div>
        <Button>
           <Package size={18} className="mr-2" /> Create New Plan
        </Button>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <p className="text-sm text-gray-500 font-medium">Monthly Recurring Revenue (MRR)</p>
            <p className="text-3xl font-bold text-gray-900">₹3,47,250</p>
            <p className="text-xs text-green-600 font-bold flex items-center"><TrendingUp size={14} className="mr-1" /> +8.4% from last month</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <p className="text-sm text-gray-500 font-medium">Active Paid Subscriptions</p>
            <p className="text-3xl font-bold text-gray-900">445</p>
            <p className="text-xs text-blue-600 font-medium">Basic: 320 | Pro: 125</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <p className="text-sm text-gray-500 font-medium">Churn Rate</p>
            <p className="text-3xl font-bold text-gray-900">2.1%</p>
            <p className="text-xs text-red-500 font-medium">-0.5% improvement</p>
         </div>
      </div>

      {/* Plans List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
         <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-400 font-bold uppercase text-[10px]">
               <tr>
                  <th className="px-6 py-4">Plan Name</th>
                  <th className="px-6 py-4">Price / Month</th>
                  <th className="px-6 py-4">Total Subscribers</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
               {plans.map(plan => (
                  <tr key={plan.name} className="hover:bg-gray-50">
                     <td className="px-6 py-4 font-bold text-gray-900">{plan.name}</td>
                     <td className="px-6 py-4">{plan.price}</td>
                     <td className="px-6 py-4">{plan.users}</td>
                     <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">
                           {plan.status}
                        </span>
                     </td>
                     <td className="px-6 py-4 text-right space-x-2">
                        <button className="text-gray-400 hover:text-blue-600 font-medium">Edit</button>
                        <button className="text-gray-400 hover:text-gray-600 font-medium">Features</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>

      {/* Featured Feature Toggle */}
      <section className="bg-slate-900 rounded-2xl p-8 text-white">
         <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
               <Settings className="text-blue-400" />
               <h2 className="text-2xl font-bold">Plan Feature Management</h2>
            </div>
            <Button variant="outline" className="text-white border-slate-700">Save Configuration</Button>
         </div>
         <div className="grid grid-cols-3 gap-6">
            {[
               { name: "Vector Export", pro: true, basic: true, free: false },
               { name: "Branding Kit", pro: true, basic: true, free: false },
               { name: "Direct-to-Print", pro: true, basic: false, free: false },
               { name: "Team Workspace", pro: true, basic: false, free: false },
               { name: "API Access", pro: "Custom", basic: false, free: false },
            ].map(f => (
               <div key={f.name} className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                  <span className="text-sm font-medium">{f.name}</span>
                  <div className="flex space-x-2">
                     <div className={`w-3 h-3 rounded-full ${f.pro ? 'bg-blue-500' : 'bg-slate-600'}`}></div>
                     <div className={`w-3 h-3 rounded-full ${f.basic ? 'bg-green-500' : 'bg-slate-600'}`}></div>
                     <div className={`w-3 h-3 rounded-full ${f.free ? 'bg-gray-500' : 'bg-slate-600'}`}></div>
                  </div>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
