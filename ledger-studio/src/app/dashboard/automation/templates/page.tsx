"use client";

import PageShell from "@/components/layout/PageShell"; // Using PageShell partially, or maybe just dashboard layout? 
// Wait, dashboard usually has its own layout. I'll stick to a simple div wrapper since it's inside dashboard.
import { ArrowLeft, Download, Search } from "lucide-react";
import Link from "next/link";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const templates = [
    { title: "New Lead to CRM & Slack", category: "Sales", desc: "Adds new inbound leads to Hubspot and notifies the sales team channel." },
    { title: "Invoice Processing (Gmail -> Xero)", category: "Finance", desc: "Extracts attachments from emails, uses OCR, and creates draft bills." },
    { title: "Weekly Financial Report", category: "Reporting", desc: "Aggregates bank data and sends a PDF summary to management." },
    { title: "Onboarding Sequence", category: "HR", desc: "Triggers contract sending and IT setup tasks for new hires." },
    { title: "Stripe Payment Failed Alert", category: "Finance", desc: "Detects failed payments and starts a dunning email sequence." },
    { title: "Social Media Scheduler", category: "Marketing", desc: "Posts content to LinkedIn and Twitter from a Notion database." },
];

export default function AutomationTemplates() {
    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/dashboard/automation" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <ArrowLeft size={20} className="text-slate-500" />
                </Link>
                <h1 className="text-3xl font-bold text-slate-900">Automation Templates</h1>
            </div>

            <div className="mb-8 relative max-w-lg">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                />
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((t, i) => (
                    <StaggerItem key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-40 bg-slate-50 relative flex items-center justify-center border-b border-slate-100">
                            <div className="text-slate-300 font-mono text-xs">[ Workflow Preview ]</div>
                            {/* Placeholder for SVG diagram */}
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded mb-3 inline-block">
                                {t.category}
                            </span>
                            <h3 className="font-bold text-slate-900 mb-2">{t.title}</h3>
                            <p className="text-sm text-slate-500 mb-6 line-clamp-2">{t.desc}</p>

                            <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all">
                                <Download size={16} /> Use Template
                            </button>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
