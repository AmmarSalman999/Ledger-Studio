"use client";

import { mockKPIs, mockRevenueHistory, mockFunnelData } from "@/lib/analytics-data";
import { ArrowDown, ArrowUp, BarChart3, Calendar, Download, TrendingUp } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function AnalyticsDashboard() {
    const maxRevenue = Math.max(...mockRevenueHistory.map(d => d.value1));

    return (
        <div className="p-8 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Executive Dashboard</h1>
                    <p className="text-slate-500 mt-1">Real-time performance metrics and financial tracking.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-bold hover:bg-slate-50 flex items-center gap-2 text-sm">
                        <Calendar size={16} /> Last 6 Months
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all text-sm">
                        <Download size={16} /> Export Report
                    </button>
                </div>
            </div>

            {/* KPI Grid */}
            <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {mockKPIs.map((kpi, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-sm font-bold text-slate-500 mb-2">{kpi.label}</div>
                        <div className="flex items-end justify-between">
                            <div className="text-3xl font-bold text-slate-900">{kpi.value}</div>
                            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${kpi.trend === 'up' ? 'text-green-700 bg-green-50' : kpi.trend === 'down' ? 'text-red-700 bg-red-50' : 'text-slate-600 bg-slate-100'}`}>
                                {kpi.trend === 'up' && <ArrowUp size={12} />}
                                {kpi.trend === 'down' && <ArrowDown size={12} />}
                                {kpi.change}
                            </div>
                        </div>
                    </div>
                ))}
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Revenue Chart */}
                <FadeIn delay={0.1} className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <BarChart3 size={20} className="text-slate-400" /> Revenue vs Expenses
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-bold">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-brand-blue" /> Revenue
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-slate-200" /> Expenses
                            </div>
                        </div>
                    </div>

                    <div className="h-[300px] flex items-end justify-between gap-4">
                        {mockRevenueHistory.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="relative w-full flex items-end justify-center gap-1 h-full">
                                    {/* Bar 1: Expenses */}
                                    <div
                                        className="w-1/3 bg-slate-200 rounded-t-sm transition-all group-hover:bg-slate-300"
                                        style={{ height: `${(item.value2 / maxRevenue) * 100}%` }}
                                    />
                                    {/* Bar 2: Revenue */}
                                    <div
                                        className="w-1/3 bg-brand-blue rounded-t-sm transition-all group-hover:bg-blue-600"
                                        style={{ height: `${(item.value1 / maxRevenue) * 100}%` }}
                                    />

                                    {/* Tooltip (CSS only) */}
                                    <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10">
                                        ${item.value1.toLocaleString()}
                                    </div>
                                </div>
                                <div className="text-xs font-bold text-slate-400">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Conversion Funnel */}
                <FadeIn delay={0.2} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <TrendingUp size={20} className="text-slate-400" /> Conversion Funnel
                    </h2>
                    <div className="space-y-6">
                        {mockFunnelData.map((stage, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex items-center justify-between text-sm mb-1 z-10 relative">
                                    <span className="font-bold text-slate-700">{stage.stage}</span>
                                    <span className="font-bold text-slate-900">{stage.count.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-1">
                                    <div
                                        className="h-full bg-brand-blue/80 rounded-full"
                                        style={{ width: stage.rate === "100%" ? "100%" : stage.rate }}
                                    />
                                </div>
                                <div className="text-right text-xs text-slate-400 font-bold">{stage.rate} Conversion</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Insight</div>
                        <p className="text-sm text-slate-700 font-medium">
                            Your <span className="text-brand-blue font-bold">Deal to Closed</span> rate is 40%, which is well above the industry average of 22%.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
