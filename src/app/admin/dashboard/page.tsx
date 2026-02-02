"use client";

import React from "react";
import { Users, CreditCard, BarChart3, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AdminDashboardOverview() {
  return (
    <div className="p-10 space-y-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Admin Overview</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Platform performance and system health at a glance.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Total Users", value: "1,284", icon: Users, color: "blue", trend: "+12%" },
          { title: "Monthly Revenue", value: "₹45,200", icon: CreditCard, color: "green", trend: "+8%" },
          { title: "AI Requests", value: "14.2k", icon: BarChart3, color: "purple", trend: "+24%" },
          { title: "Conversion Rate", value: "3.2%", icon: TrendingUp, color: "orange", trend: "+1.5%" },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 rounded-2xl`}>
                <stat.icon size={24} className={`text-${stat.color}-600 dark:text-${stat.color}-400`} />
              </div>
              <span className="text-green-500 text-sm font-bold">{stat.trend}</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 font-medium">{stat.title}</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Recent Activity</h2>
          <div className="space-y-6">
            {[
              { user: "amit@example.com", action: "Upgraded to Pro", time: "2 mins ago", icon: CheckCircle2, iconColor: "text-green-500" },
              { user: "priya_desai", action: "Generated logo 'EcoBloom'", time: "15 mins ago", icon: BarChart3, iconColor: "text-blue-500" },
              { user: "system", action: "Weekly backup completed", time: "1 hour ago", icon: CheckCircle2, iconColor: "text-green-500" },
              { user: "john_doe", action: "Payment failed (Razorpay)", time: "2 hours ago", icon: AlertCircle, iconColor: "text-red-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-colors">
                <div className="flex items-center space-x-4">
                   <div className={item.iconColor}><item.icon size={20} /></div>
                   <div>
                      <p className="font-bold text-gray-900 dark:text-white">{item.user}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.action}</p>
                   </div>
                </div>
                <span className="text-xs text-gray-400 font-medium">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">AI Status</h2>
          <div className="space-y-8">
             <div>
                <div className="flex justify-between text-sm mb-2">
                   <span className="text-gray-600 dark:text-gray-400 font-medium">OpenRouter API</span>
                   <span className="text-green-500 font-bold">Healthy</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                   <div className="w-[98%] h-full bg-green-500"></div>
                </div>
             </div>
             <div>
                <div className="flex justify-between text-sm mb-2">
                   <span className="text-gray-600 dark:text-gray-400 font-medium">Logo Generation Engine</span>
                   <span className="text-blue-500 font-bold">Scaling</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                   <div className="w-[85%] h-full bg-blue-500"></div>
                </div>
             </div>
             <div>
                <div className="flex justify-between text-sm mb-2">
                   <span className="text-gray-600 dark:text-gray-400 font-medium">Vector Conversion API</span>
                   <span className="text-green-500 font-bold">Healthy</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                   <div className="w-[100%] h-full bg-green-500"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
