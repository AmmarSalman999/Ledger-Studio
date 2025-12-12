"use client";

import { ChevronLeft, Save, Play } from "lucide-react";
import Link from "next/link";

export default function AutomationEditorPage() {
    return (
        <div className="h-screen flex flex-col bg-slate-50">
            {/* Top Bar */}
            <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/automation" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <ChevronLeft size={20} className="text-slate-500" />
                    </Link>
                    <div>
                        <input
                            type="text"
                            defaultValue="Untitled Workflow"
                            className="text-sm font-bold text-slate-900 border-none focus:ring-0 p-0 hover:underline bg-transparent"
                        />
                        <div className="text-xs text-slate-400">Last saved: Just now</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition-all">
                        <Save size={16} /> Save
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-bold hover:bg-green-600 shadow-md hover:shadow-green-500/20 transition-all">
                        <Play size={16} /> Test Workflow
                    </button>
                </div>
            </div>

            {/* Main Canvas Area */}
            <div className="flex-1 relative overflow-hidden flex">
                {/* Left Sidebar (Node Library) */}
                <div className="w-64 bg-white border-r border-slate-200 flex-shrink-0 z-10">
                    <div className="p-4 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Triggers
                    </div>
                    {/* Node Items will go here */}
                </div>

                {/* React Flow Canvas */}
                <div className="flex-1 bg-slate-50 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-xl">
                        [ React Flow Canvas Loading... ]
                    </div>
                </div>

                {/* Right Sidebar (Config) */}
                <div className="w-80 bg-white border-l border-slate-200 flex-shrink-0 z-10 hidden lg:block">
                    <div className="p-4 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Configuration
                    </div>
                    <div className="p-8 text-center text-slate-400 text-sm italic">
                        Select a node to edit
                    </div>
                </div>
            </div>
        </div>
    );
}
