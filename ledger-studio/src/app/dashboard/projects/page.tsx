"use client";

import { mockProjects } from "@/lib/projects-data";
import { Plus, Search, Filter, MoreVertical, Calendar, CheckSquare, Users } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const statusColors: Record<string, string> = {
    'Active': 'bg-green-100 text-green-700',
    'On Hold': 'bg-yellow-100 text-yellow-700',
    'Completed': 'bg-slate-100 text-slate-700',
};

export default function ProjectsDashboard() {
    return (
        <div className="p-8 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
                    <p className="text-slate-500 mt-1">Track progress across all client deliverables.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all">
                    <Plus size={18} />
                    New Project
                </button>
            </div>

            {/* Filters */}
            <FadeIn delay={0.1} className="flex gap-4 mb-8">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none"
                    />
                </div>
                <button className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-bold hover:bg-slate-50 flex items-center gap-2">
                    <Filter size={18} /> Filters
                </button>
            </FadeIn>

            {/* Grid */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockProjects.map((project) => (
                    <StaggerItem key={project.id}>
                        <Link href={`/dashboard/projects/${project.id}`} className="group block h-full">
                            <div className="h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                {/* Cover (Mock) */}
                                <div className={`h-32 ${project.thumbnail} relative`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                    <span className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold ${statusColors[project.status]}`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{project.client}</div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-1">{project.title}</h3>
                                    </div>

                                    {/* Progress */}
                                    <div className="mb-6">
                                        <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                                            <span>Progress</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-brand-blue rounded-full"
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-auto border-t border-slate-50 pt-4 flex items-center justify-between text-slate-400 text-sm">
                                        <div className="flex items-center gap-1.5" title="Due Date">
                                            <Calendar size={14} />
                                            <span className="font-medium text-slate-600">
                                                {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5" title="Tasks">
                                            <CheckSquare size={14} />
                                            <span className="font-medium text-slate-600">{project.tasksCompleted}/{project.tasksTotal}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </div>
    );
}
