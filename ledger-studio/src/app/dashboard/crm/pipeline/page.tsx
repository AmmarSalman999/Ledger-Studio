"use client";

import PipelineBoard from "@/components/crm/PipelineBoard";
import { Kanban, List, Plus, Settings } from "lucide-react";
import Link from "next/link";

export default function PipelinePage() {
    return (
        <div className="h-screen flex flex-col bg-white">
            {/* Header */}
            <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold text-slate-900">Deal Pipeline</h1>
                    <div className="h-6 w-px bg-slate-200" />
                    <div className="flex p-1 bg-slate-100 rounded-lg">
                        <Link href="/dashboard/crm" className="p-1 text-slate-500 hover:text-slate-700 rounded transition-colors">
                            <List size={16} />
                        </Link>
                        <button className="p-1 bg-white shadow-sm text-brand-blue rounded transition-colors">
                            <Kanban size={16} />
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
                        <Settings size={18} />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md text-sm transition-all">
                        <Plus size={16} />
                        New Deal
                    </button>
                </div>
            </div>

            {/* Board Area */}
            <div className="flex-1 overflow-x-auto overflow-y-hidden bg-slate-50 p-6">
                <PipelineBoard />
            </div>
        </div>
    );
}
