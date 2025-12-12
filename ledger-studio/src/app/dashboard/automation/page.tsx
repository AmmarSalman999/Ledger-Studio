"use client";

import { Plus, Zap, Activity, Clock, FileText } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export default function AutomationDashboard() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Automation Studio</h1>
                    <p className="text-slate-500">Design, automate, and scale your financial operations.</p>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="/dashboard/automation/templates"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
                    >
                        <FileText size={18} />
                        Templates
                    </Link>
                    <Link
                        href="/dashboard/automation/create"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md hover:shadow-lg transition-all"
                    >
                        <Plus size={18} />
                        New Workflow
                    </Link>
                </div>
            </div>

            {/* Stats Overview */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                    { label: "Active Workflows", value: "8", icon: Zap, color: "text-brand-blue" },
                    { label: "Total Executions", value: "1,240", icon: Activity, color: "text-purple-600" },
                    { label: "Success Rate", value: "99.8%", icon: Activity, color: "text-brand-green" },
                    { label: "Saved Hours", value: "420h", icon: Clock, color: "text-orange-500" },
                ].map((stat, i) => (
                    <StaggerItem key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <div className={`p-2 rounded-lg bg-slate-50 ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                        </div>
                        <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            {/* Recent Workflows */}
            <FadeIn delay={0.2} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Recent Workflows</h3>
                    <Link href="/dashboard/automation/logs" className="text-sm text-brand-blue hover:underline">
                        View All Activity
                    </Link>
                </div>
                <div className="divide-y divide-slate-100">
                    {[
                        { name: "Inbound Lead -> CRM Sync", status: "Active", lastRun: "2 mins ago", runs: 450 },
                        { name: "Invoice Extraction (Gmail)", status: "Active", lastRun: "1 hour ago", runs: 12 },
                        { name: "Weekly Report Generation", status: "Paused", lastRun: "3 days ago", runs: 4 },
                    ].map((workflow, i) => (
                        <div key={i} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className={`w-2 h-2 rounded-full ${workflow.status === "Active" ? "bg-brand-green" : "bg-slate-300"}`} />
                                <div>
                                    <div className="font-bold text-slate-900">{workflow.name}</div>
                                    <div className="text-xs text-slate-500">Last run: {workflow.lastRun} • {workflow.runs} runs</div>
                                </div>
                            </div>
                            <Link
                                href="/dashboard/automation/create"
                                className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-bold border border-slate-200 rounded-md hover:bg-white transition-all transform translate-x-2 group-hover:translate-x-0"
                            >
                                Edit
                            </Link>
                        </div>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}
