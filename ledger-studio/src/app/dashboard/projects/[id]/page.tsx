"use client";

import { mockProjects, Project } from "@/lib/projects-data";
import { ArrowLeft, Calendar, CheckSquare, Clock, FileText, MoreHorizontal, Plus, Share2, Users } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/animations/FadeIn";
import { useState } from "react";

interface PageProps {
    params: { id: string };
}

export default function ProjectDetailPage({ params }: PageProps) {
    const project = mockProjects.find(p => p.id === params.id);
    const [activeTab, setActiveTab] = useState('tasks');

    if (!project) {
        return <div className="p-8 text-center text-slate-500">Project not found</div>;
    }

    return (
        <div className="p-8 max-w-[1600px] mx-auto min-h-screen flex flex-col">
            {/* Nav */}
            <div className="mb-6">
                <Link href="/dashboard/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-bold">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>

            {/* Header */}
            <FadeIn className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 -translate-y-8 translate-x-8 rounded-full ${project.thumbnail.replace('bg-', 'bg-')}`} />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                {project.client}
                            </span>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                                {project.status}
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">{project.title}</h1>
                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-slate-400" />
                                <span>Due: {project.dueDate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-slate-400" />
                                <span>Team: {project.members.join(", ")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-sm">
                            <Share2 size={16} /> Share Portal
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md transition-all text-sm">
                            <MoreHorizontal size={16} /> Actions
                        </button>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8">
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                        <span>Project Progress</span>
                        <span>{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand-blue rounded-full transition-all duration-1000"
                            style={{ width: `${project.progress}%` }}
                        />
                    </div>
                </div>
            </FadeIn>

            {/* Layout */}
            <div className="flex flex-col lg:flex-row gap-8 flex-1">
                {/* Main Content */}
                <div className="flex-1">
                    {/* Tabs */}
                    <div className="flex items-center gap-6 border-b border-slate-200 mb-6">
                        {['tasks', 'files', 'activity'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-sm font-bold capitalize transition-all border-b-2 ${activeTab === tab ? 'text-brand-blue border-brand-blue' : 'text-slate-500 border-transparent hover:text-slate-700'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Task List */}
                    {activeTab === 'tasks' && (
                        <div className="space-y-3">
                            {project.tasks?.map((task) => (
                                <div key={task.id} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between group hover:border-brand-blue/30 transition-all">
                                    <div className="flex items-center gap-4">
                                        <button className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${task.status === 'Done' ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 hover:border-brand-blue'}`}>
                                            {task.status === 'Done' && <CheckSquare size={12} />}
                                        </button>
                                        <span className={`font-medium ${task.status === 'Done' ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{task.title}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs">
                                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${task.status === 'Done' ? 'bg-green-50 text-green-700' : task.status === 'In Progress' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                                            {task.status}
                                        </span>
                                        <span className="text-slate-400">{task.assignee}</span>
                                        <span className="text-slate-400">{task.dueDate}</span>
                                    </div>
                                </div>
                            ))}
                            <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold hover:border-brand-blue hover:text-brand-blue transition-all flex items-center justify-center gap-2">
                                <Plus size={16} /> Add New Task
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-80 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Clock size={16} className="text-slate-400" /> Recent Activity
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-700"><span className="font-bold">Alice</span> completed "Design Hero"</p>
                                    <p className="text-xs text-slate-400">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                <div>
                                    <p className="text-sm text-slate-700"><span className="font-bold">Bob</span> added a file</p>
                                    <p className="text-xs text-slate-400">5 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
