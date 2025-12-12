"use client";

import { mockProjects } from "@/lib/projects-data";
import { CheckSquare, Download, FileText, LogOut, MessageSquare } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function ClientPortalDashboard() {
    // Mock Context: Assume logged in as "Wayne Enterprises"
    const clientProjects = mockProjects.filter(p => p.client === "Wayne Enterprises");

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Bar */}
            <div className="bg-white border-b border-slate-200 px-6 h-16 flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        L
                    </div>
                    <span className="font-bold text-slate-900">Client Portal</span>
                    <span className="h-4 w-px bg-slate-200 mx-1" />
                    <span className="text-sm text-slate-500">Wayne Enterprises</span>
                </div>
                <Link href="/portal" className="text-sm font-bold text-slate-500 hover:text-slate-900 flex items-center gap-2">
                    <LogOut size={16} /> Sign Out
                </Link>
            </div>

            <div className="max-w-5xl mx-auto p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Your Projects</h1>
                    <p className="text-slate-500 mt-1">Real-time status updates and deliverables.</p>
                </div>

                <div className="space-y-8">
                    {clientProjects.map(project => (
                        <FadeIn key={project.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                            {/* Project Header */}
                            <div className="p-8 border-b border-slate-100 bg-slate-50/50">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                            {project.status}
                                        </span>
                                        <span className="text-sm text-slate-500">Due: {project.dueDate}</span>
                                    </div>
                                    <button className="text-sm font-bold text-brand-blue hover:underline">
                                        View Contract
                                    </button>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h2>

                                {/* Progress */}
                                <div className="max-w-md mt-4">
                                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                                        <span>Completion Status</span>
                                        <span>{project.progress}%</span>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-slate-900 rounded-full"
                                            style={{ width: `${project.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                {/* Tasks View */}
                                <div className="p-8">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <CheckSquare size={18} className="text-slate-400" /> Recent Deliverables
                                    </h3>
                                    <div className="space-y-3">
                                        {project.tasks?.slice(0, 4).map(task => (
                                            <div key={task.id} className="flex items-center gap-3 text-sm">
                                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${task.status === 'Done' ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}`}>
                                                    {task.status === 'Done' && <CheckSquare size={10} />}
                                                </div>
                                                <span className={`${task.status === 'Done' ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                                                    {task.title}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Files / Comms */}
                                <div className="p-8 bg-slate-50/30">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <FileText size={18} className="text-slate-400" /> Documents & Files
                                    </h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-brand-blue/30 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center">
                                                    <FileText size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900 group-hover:text-brand-blue">Invoice #1024.pdf</div>
                                                    <div className="text-xs text-slate-400">1.2 MB • Oct 24</div>
                                                </div>
                                            </div>
                                            <Download size={16} className="text-slate-400 group-hover:text-brand-blue" />
                                        </div>
                                        <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-brand-blue/30 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
                                                    <FileText size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900 group-hover:text-brand-blue">Project_Brief_v2.docx</div>
                                                    <div className="text-xs text-slate-400">2.4 MB • Nov 02</div>
                                                </div>
                                            </div>
                                            <Download size={16} className="text-slate-400 group-hover:text-brand-blue" />
                                        </div>
                                    </div>

                                    <button className="w-full mt-6 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                        <MessageSquare size={16} /> Contact Account Manager
                                    </button>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
