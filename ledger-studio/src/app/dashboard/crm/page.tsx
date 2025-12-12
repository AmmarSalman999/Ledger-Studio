"use client";

import { useState } from "react";
import { Search, Filter, Plus, MoreHorizontal, ArrowUpRight, CheckCircle2, Circle, Clock, XCircle, Zap } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { mockLeads, Lead } from "@/lib/leads-data";
import { calculateLeadScore } from "@/lib/scoring-engine";
import Link from "next/link";

const statusColors: Record<string, string> = {
    'New': 'bg-blue-50 text-blue-700 border-blue-100',
    'Contacted': 'bg-purple-50 text-purple-700 border-purple-100',
    'Qualified': 'bg-indigo-50 text-indigo-700 border-indigo-100',
    'Proposal': 'bg-orange-50 text-orange-700 border-orange-100',
    'Negotiation': 'bg-yellow-50 text-yellow-700 border-yellow-100',
    'Closed': 'bg-green-50 text-green-700 border-green-100',
    'Lost': 'bg-red-50 text-red-700 border-red-100',
};

const statusIcons: Record<string, any> = {
    'New': Circle,
    'Contacted': ArrowUpRight,
    'Qualified': CheckCircle2,
    'Proposal': File,
    'Negotiation': Clock,
    'Closed': CheckCircle2,
    'Lost': XCircle,
};

export default function LeadInboxPage() {
    const [leads, setLeads] = useState<Lead[]>(mockLeads);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredLeads = leads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const runScoring = () => {
        setLeads(prev => prev.map(lead => {
            const result = calculateLeadScore(lead);
            return { ...lead, score: result.totalScore };
        }));
    };

    return (
        <div className="p-8 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Lead Inbox</h1>
                    <p className="text-slate-500 mt-1">Manage and track your incoming prospects.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={runScoring}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-50 text-orange-700 border border-orange-200 font-bold hover:bg-orange-100 transition-all text-sm"
                    >
                        <Zap size={16} />
                        Auto-Score Leads
                    </button>
                    <Link
                        href="/dashboard/crm/pipeline"
                        className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-sm"
                    >
                        View Pipeline
                    </Link>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all text-sm">
                        <Plus size={16} />
                        Add Lead
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <FadeIn delay={0.1} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search leads by name or company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm"
                    />
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium whitespace-nowrap">
                        <Filter size={16} /> Filter by:
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="px-3 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue/20 outline-none bg-slate-50"
                    >
                        <option value="All">All Statuses</option>
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Proposal">Proposal</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
            </FadeIn>

            {/* Data Table */}
            <FadeIn delay={0.2} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <th className="px-6 py-4">Lead Name</th>
                                <th className="px-6 py-4">Company</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Score</th>
                                <th className="px-6 py-4">Est. Value</th>
                                <th className="px-6 py-4">Assignee</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900">{lead.name}</div>
                                        <div className="text-xs text-slate-500">{lead.email}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium text-sm">
                                        {lead.company}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${statusColors[lead.status] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                            {lead.status === 'New' && <Circle size={8} fill="currentColor" />}
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${lead.score > 80 ? 'bg-green-500' : lead.score > 50 ? 'bg-yellow-500' : 'bg-slate-300'}`}
                                                    style={{ width: `${lead.score}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-slate-600">{lead.score}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-900 font-mono text-sm">
                                        ${lead.value.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-[10px] font-bold text-brand-blue">
                                                {lead.assignee.charAt(0)}
                                            </div>
                                            <span className="text-sm text-slate-600">{lead.assignee}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all opacity-0 group-hover:opacity-100">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {filteredLeads.length === 0 && (
                    <div className="p-12 text-center text-slate-500">
                        No leads found matching your filters.
                    </div>
                )}
            </FadeIn>
        </div>
    );
}
