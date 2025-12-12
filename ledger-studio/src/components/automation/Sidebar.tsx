"use client";

import { Zap, Send, Split, Repeat, MessageSquare, FileText, Database, Webhook, MousePointerClick } from "lucide-react";
import React from 'react';

export default function Sidebar() {
    const onDragStart = (event: React.DragEvent, nodeType: string, payload: any) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/payload', JSON.stringify(payload));
        event.dataTransfer.effectAllowed = 'move';
    };

    const triggers = [
        { label: "New Lead", icon: "trigger", category: "CRM", type: "trigger" },
        { label: "Form Submit", icon: "form", category: "Website", type: "trigger" },
        { label: "Webhook", icon: "webhook", category: "API", type: "trigger" },
        { label: "Schedule", icon: "schedule", category: "Time", type: "trigger" },
    ];

    const actions = [
        { label: "Send Email", icon: "email", category: "Communication", type: "action" },
        { label: "Update CRM", icon: "click", category: "HubSpot", type: "action" },
        { label: "Create Invoice", icon: "trigger", category: "Xero", type: "action" },
        { label: "Delay", icon: "schedule", category: "Logic", type: "action" },
        { label: "If / Else", icon: "logic", category: "Logic", type: "action" },
    ];

    return (
        <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full z-20 shadow-md">
            <div className="p-4 border-b border-slate-100">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Node Library</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {/* Triggers Section */}
                <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Zap size={14} className="text-brand-blue" /> Triggers
                    </h3>
                    <div className="space-y-2">
                        {triggers.map((node, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-brand-blue hover:shadow-md cursor-grab transition-all select-none active:cursor-grabbing"
                                onDragStart={(event) => onDragStart(event, 'custom', node)}
                                draggable
                            >
                                <div className="p-1.5 bg-blue-50 text-brand-blue rounded-md">
                                    <Zap size={14} />
                                </div>
                                <span className="text-sm font-medium text-slate-700">{node.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions Section */}
                <div>
                    <h3 className="text-xs font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Send size={14} className="text-purple-600" /> Actions
                    </h3>
                    <div className="space-y-2">
                        {actions.map((node, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-purple-500 hover:shadow-md cursor-grab transition-all select-none active:cursor-grabbing"
                                onDragStart={(event) => onDragStart(event, 'custom', node)}
                                draggable
                            >
                                <div className="p-1.5 bg-purple-50 text-purple-600 rounded-md">
                                    <Send size={14} />
                                </div>
                                <span className="text-sm font-medium text-slate-700">{node.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
