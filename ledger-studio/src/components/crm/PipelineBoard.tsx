"use client";

import { useState, DragEvent } from 'react';
import { Lead, mockLeads } from '@/lib/leads-data';
import { MoreHorizontal, DollarSign, Calendar, User } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn exists, else I'll remove it or implement it. 
// Actually I'll avoid 'cn' and use template literals to be safe if utils isn't checked recently.

// Column Definitions
const columns = [
    { id: 'Discovery', title: 'Discovery', statuses: ['New', 'Contacted'], color: 'bg-blue-500' },
    { id: 'Qualified', title: 'Qualified', statuses: ['Qualified'], color: 'bg-indigo-500' },
    { id: 'Proposal', title: 'Proposal', statuses: ['Proposal'], color: 'bg-orange-500' },
    { id: 'Negotiation', title: 'Negotiation', statuses: ['Negotiation'], color: 'bg-yellow-500' },
    { id: 'Closed', title: 'Won / Closed', statuses: ['Closed'], color: 'bg-green-500' },
];

export default function PipelineBoard() {
    const [leads, setLeads] = useState<Lead[]>(mockLeads);
    const [draggedLeadId, setDraggedLeadId] = useState<string | null>(null);

    // Helpers to filter leads by column
    const getLeadsByColumn = (columnId: string) => {
        const column = columns.find(c => c.id === columnId);
        if (!column) return [];
        return leads.filter(lead => column.statuses.includes(lead.status));
    };

    const handleDragStart = (e: DragEvent<HTMLDivElement>, leadId: string) => {
        setDraggedLeadId(leadId);
        e.dataTransfer.effectAllowed = 'move';
        // Set a transparent image or just let default ghost happen
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Necessary to allow dropping
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>, targetColumnId: string) => {
        e.preventDefault();

        if (!draggedLeadId) return;

        const column = columns.find(c => c.id === targetColumnId);
        if (!column) return;

        // Map the column to a primary status (the first one in its list)
        // In a real app, logic might be more complex
        const newStatus = column.statuses[0] as Lead['status'];

        setLeads(prev => prev.map(lead => {
            if (lead.id === draggedLeadId) {
                return { ...lead, status: newStatus };
            }
            return lead;
        }));

        setDraggedLeadId(null);
    };

    return (
        <div className="flex h-[calc(100vh-12rem)] overflow-x-auto gap-6 p-2 pb-4">
            {columns.map(col => {
                const colLeads = getLeadsByColumn(col.id);
                const totalValue = colLeads.reduce((sum, l) => sum + l.value, 0);

                return (
                    <div
                        key={col.id}
                        className="w-80 flex-shrink-0 flex flex-col bg-slate-50/50 rounded-xl border border-slate-200"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, col.id)}
                    >
                        {/* Header */}
                        <div className="p-3 border-b border-slate-100 bg-white rounded-t-xl sticky top-0 z-10">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${col.color}`} />
                                    <h3 className="font-bold text-slate-700 text-sm">{col.title}</h3>
                                    <span className="px-1.5 py-0.5 rounded-md bg-slate-100 text-xs font-bold text-slate-500">
                                        {colLeads.length}
                                    </span>
                                </div>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <MoreHorizontal size={14} />
                                </button>
                            </div>
                            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${col.color}`} style={{ width: '100%' }} />
                            </div>
                            <div className="mt-2 text-xs font-mono font-bold text-slate-500 text-right">
                                ${totalValue.toLocaleString()}
                            </div>
                        </div>

                        {/* Drop Zone / List */}
                        <div className="flex-1 overflow-y-auto p-2 space-y-3 min-h-[150px]">
                            {colLeads.map(lead => (
                                <div
                                    key={lead.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, lead.id)}
                                    className={`
                                        bg-white p-3 rounded-lg border border-slate-200 shadow-sm cursor-grab hover:shadow-md hover:border-blue-300 transition-all group
                                        ${draggedLeadId === lead.id ? 'opacity-50 border-dashed border-slate-400' : ''}
                                    `}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold text-slate-400">#{lead.id}</span>
                                        <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-brand-blue">
                                            <MoreHorizontal size={14} />
                                        </button>
                                    </div>

                                    <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1">{lead.name}</h4>
                                    <div className="text-xs text-slate-500 mb-3">{lead.company}</div>

                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="bg-green-50 text-green-700 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                                            <DollarSign size={10} />
                                            {lead.value.toLocaleString()}
                                        </div>
                                        {lead.score > 70 && (
                                            <div className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-[10px] font-bold">
                                                🔥 Hot
                                            </div>
                                        )}
                                    </div>

                                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={12} />
                                            <span>2d ago</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold">
                                                {lead.assignee.charAt(0)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
