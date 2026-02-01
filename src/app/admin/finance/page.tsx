"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Tag, BarChart2, Mail, Download, TrendingUp } from "lucide-react";

export default function AdminFinancePage() {
  const transactions = [
    { id: "TX123", user: "John Doe", amount: "₹1,499", plan: "Pro Plan", status: "Success", date: "2025-01-31" },
    { id: "TX124", user: "Jane Smith", amount: "$29", plan: "Basic Plan", status: "Success", date: "2025-01-30" },
    { id: "TX125", user: "Mike Ross", amount: "₹1,499", plan: "Pro Plan", status: "Failed", date: "2025-01-29" },
  ];

  return (
    <div className="p-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Financial & Marketing</h1>
        <p className="text-gray-500">Manage transactions, coupons, and marketing campaigns.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-green-100 rounded-full text-green-600"><TrendingUp /></div>
          <div>
            <p className="text-sm text-gray-500">Monthly Revenue</p>
            <p className="text-2xl font-bold">₹1,45,000</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600"><Tag /></div>
          <div>
            <p className="text-sm text-gray-500">Active Coupons</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className="p-3 bg-purple-100 rounded-full text-purple-600"><BarChart2 /></div>
          <div>
            <p className="text-sm text-gray-500">Conversion Rate</p>
            <p className="text-2xl font-bold">3.4%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Transaction Logs */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold flex items-center"><CreditCard size={20} className="mr-2 text-blue-600" /> Recent Transactions</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-400 font-bold uppercase text-[10px]">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map(tx => (
                <tr key={tx.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono">{tx.id}</td>
                  <td className="px-6 py-4">{tx.user}</td>
                  <td className="px-6 py-4 font-bold">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] ${
                      tx.status === 'Success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon Manager */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center"><Tag size={20} className="mr-2 text-blue-600" /> Coupon Manager</h2>
            <Button size="sm">Create Coupon</Button>
          </div>
          <div className="space-y-4">
            {[
              { code: "WELCOME50", discount: "50% OFF", used: "128 times" },
              { code: "LAUNCH20", discount: "20% OFF", used: "45 times" },
            ].map(coupon => (
              <div key={coupon.code} className="p-4 border border-dashed border-gray-200 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-900">{coupon.code}</p>
                  <p className="text-xs text-blue-600 font-medium">{coupon.discount}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Used {coupon.used}</p>
                  <button className="text-xs text-red-500 hover:underline">Deactivate</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bulk Email Tool */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <Mail />
            <h2 className="text-2xl font-bold">Marketing Email Tool</h2>
          </div>
          <p className="text-slate-400">Send announcements or discount offers to all users at once.</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="text-white border-slate-700 hover:bg-slate-800">Draft Email</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Send Bulk Campaign</Button>
        </div>
      </section>
    </div>
  );
}
