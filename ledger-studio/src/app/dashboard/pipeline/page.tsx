"use client";

import { useState, useEffect } from "react";
import { MoreHorizontal, Plus } from "lucide-react";
import { Lead } from "@/lib/types";

// Static Initial Data (The "Demo" Data)
const initialStages = [
    {
        id: "new",
        name: "New Leads",
        color: "bg-blue-500",
        items: [
            { id: "1", title: "TechStart Inc.", val: "$1,500/mo", tags: ["SaaS", "High Growth"] },
            { id: "2", title: "Global Logistics", val: "$3,000/mo", tags: ["Clean Up"] },
        ],
    },
    {
        id: "discovery",
        name: "Discovery Call",
        color: "bg-purple-500",
        items: [
            { id: "3", title: "Alpha Design", val: "Hourly", tags: ["Tax", "Consulting"] },
        ],
    },
    {
        id: "proposal",
        name: "Proposal Sent",
        color: "bg-orange-500",
        items: [
            { id: "4", title: "NextGen Retail", val: "$2,000/mo", tags: ["Bookkeeping"] },
            { id: "5", title: "Dr. Smith Clinic", val: "$1,200/mo", tags: ["Payroll"] },
        ],
    },
    {
        id: "closed",
        name: "Closed Won",
        color: "bg-green-500",
        items: [
            { id: "6", title: "Urban Cafe", val: "$800/mo", tags: ["Retainer"] },
        ],
    },
];

export default function PipelinePage() {
    const [columns, setColumns] = useState(initialStages);
    const [loading, setLoading] = useState(true);

    // Fetch "Real" Leads from API
    useEffect(() => {
        async function fetchLeads() {
            try {
                const res = await fetch('/api/leads');
                const data = await res.json();

                if (data.leads && data.leads.length > 0) {
                    // We have new leads!
                    // Map them to the simplified "Card" format
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const newLeads = data.leads.map((lead: Lead) => ({
                        id: lead.id,
                        title: lead.companyName,
                        val: lead.annualRevenue, // showing revenue as 'value' for now
                        tags: [lead.serviceType, `Score: ${lead.score.total}`]
                    }));

                    // Update the "New Leads" column
                    setColumns(prev => {
                        const newCols = [...prev];
                        // Assume index 0 is "New Leads"
                        // Merge mock data + API data
                        // To avoid dupes in this simple demo, we just append
                        const existingIds = new Set(newCols[0].items.map(i => i.id));
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const uniqueNewLeads = newLeads.filter((l: any) => !existingIds.has(l.id));

                        newCols[0].items = [...newCols[0].items, ...uniqueNewLeads];
                        return newCols;
                    });
                }
            } catch (e) {
                console.error("Failed to fetch leads", e);
            } finally {
                setLoading(false);
            }
        }

        fetchLeads();
    }, []);

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Lead Pipeline</h1>
                    <p className="text-slate-500">
                        {loading ? "Syncing data..." : "Manage your deal flow and client acquisition."}
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                    <Plus size={18} />
                    Add Lead
                </button>
            </div>

            <div className="flex-1 overflow-x-auto pb-4">
                <div className="flex gap-6 h-full min-w-[1000px]">
                    {columns.map((stage) => (
                        <div key={stage.id} className="w-80 flex flex-col bg-slate-100 rounded-xl p-4 border border-slate-200">
                            {/* Column Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                                    <h3 className="font-bold text-slate-700">{stage.name}</h3>
                                    <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                        {stage.items.length}
                                    </span>
                                </div>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <MoreHorizontal size={16} />
                                </button>
                            </div>

                            {/* Cards */}
                            <div className="flex-1 space-y-3 overflow-y-auto pr-1 custom-scrollbar">
                                {stage.items.map((item) => (
                                    <div key={item.id} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-slate-800 group-hover:text-brand-blue transition-colors">{item.title}</h4>
                                            <span className="text-xs font-mono font-medium text-slate-500">{item.val}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-[10px] uppercase font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <button className="w-full py-2 border border-dashed border-slate-300 rounded-lg text-slate-400 hover:text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-all text-sm font-medium">
                                    + New Deal
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
