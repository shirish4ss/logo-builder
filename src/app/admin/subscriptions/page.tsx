"use client";

import { motion } from "framer-motion";
import { CreditCard, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";

export default function SubscriptionsPage() {
  const stats = [
    { label: "Active Subs", value: "1,248", change: "+12%", up: true },
    { label: "MRR", value: "$14,500", change: "+8%", up: true },
    { label: "Churn Rate", value: "2.4%", change: "-0.5%", up: false },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Subscriptions</h1>
        <p className="text-slate-400">Manage plans, pricing, and revenue.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-400 text-sm">{stat.label}</p>
            <div className="flex items-end gap-3 mt-2">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className={`text-sm flex items-center mb-1 ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                {stat.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Subscription Plans</h2>
          <div className="space-y-4">
            {['Free', 'Basic', 'Pro', 'Enterprise'].map((plan) => (
              <div key={plan} className="flex justify-between items-center p-4 bg-slate-950 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <div className="text-white font-medium">{plan} Plan</div>
                    <div className="text-slate-500 text-xs">
                      {plan === 'Free' ? '$0/mo' : plan === 'Basic' ? '$19/mo' : plan === 'Pro' ? '$49/mo' : '$199/mo'}
                    </div>
                  </div>
                </div>
                <button className="text-sm text-blue-400 hover:underline">Edit Plan</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center text-sm border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center">
                    <CreditCard size={16} className="text-slate-400" />
                  </div>
                  <div>
                    <div className="text-white">txn_7492{i}83</div>
                    <div className="text-slate-500 text-xs">2 hours ago</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">$49.00</div>
                  <div className="text-green-400 text-xs">Paid</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
