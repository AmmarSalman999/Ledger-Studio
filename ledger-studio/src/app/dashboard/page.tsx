"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Users, Activity } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5500 },
    { name: 'Apr', revenue: 8000 },
    { name: 'May', revenue: 7000 },
    { name: 'Jun', revenue: 10500 },
];

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Command Center</h1>
                <p className="text-slate-500">Welcome back. Here is your firm's financial pulse.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: "Monthly Revenue", value: "$10,500", change: "+12%", icon: DollarSign, color: "bg-blue-500" },
                    { label: "Active Clients", value: "8", change: "+2", icon: Users, color: "bg-purple-500" },
                    { label: "Lead Pipeline", value: "14", change: "Hot", icon: Activity, color: "bg-orange-500" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-md ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                                {stat.change} <ArrowUpRight size={12} />
                            </span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-h-[400px]">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Revenue Growth</h2>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="revenue" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Recent Activity</h2>
                    <div className="space-y-6">
                        {[
                            { text: "New Lead: TechCorp Inc.", time: "2h ago", type: "lead" },
                            { text: "Invoice Paid: $2,500", time: "5h ago", type: "money" },
                            { text: "Contract Signed: Apex LLC", time: "1d ago", type: "contract" },
                            { text: "Automation Triggered: Onboarding", time: "1d ago", type: "auto" },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-slate-800">{item.text}</p>
                                    <p className="text-xs text-slate-400">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-8 py-2 text-sm font-bold text-brand-blue bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
}
