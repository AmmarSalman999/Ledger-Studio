"use client";

import { mockContent } from "@/lib/marketing-data";
import { Calendar, FileText, Plus, Sparkles, Video, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

const platformIcons: Record<string, any> = {
    'YouTube': Youtube,
    'LinkedIn': Linkedin,
    'Twitter': Twitter,
    'Instagram': Instagram,
    'Blog': FileText
};

export default function MarketingDashboard() {
    const upcoming = mockContent.filter(c => c.status === 'Scheduled' || c.status === 'Draft');

    return (
        <div className="p-8 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Content Engine</h1>
                    <p className="text-slate-500 mt-1">Plan, create, and schedule your marketing campaigns.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard/marketing/calendar"
                        className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-sm flex items-center gap-2"
                    >
                        <Calendar size={16} /> Calendar
                    </Link>
                    <Link
                        href="/dashboard/marketing/auto-drafter"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold hover:bg-indigo-100 transition-all text-sm"
                    >
                        <Sparkles size={16} /> Auto-Drafter
                    </Link>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md shadow-blue-500/20 transition-all text-sm">
                        <Plus size={16} />
                        New Item
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Upcoming List */}
                <FadeIn delay={0.1} className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Calendar size={18} className="text-slate-400" /> Upcoming Schedule
                    </h2>
                    <div className="space-y-4">
                        {upcoming.map(item => {
                            const Icon = platformIcons[item.platform] || FileText;
                            return (
                                <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-brand-blue/30 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 shadow-sm">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 group-hover:text-brand-blue transition-colors">{item.title}</div>
                                            <div className="text-xs text-slate-500 flex items-center gap-2">
                                                <span>{item.platform}</span>
                                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                <span>{new Date(item.scheduledDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.status === 'Scheduled' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                        {item.status}
                                    </span>
                                </div>
                            );
                        })}
                        <button className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold hover:border-brand-blue hover:text-brand-blue transition-all flex items-center justify-center gap-2">
                            <Plus size={16} /> Add to Schedule
                        </button>
                    </div>
                </FadeIn>

                {/* Quick Actions / Stats */}
                <div className="space-y-6">
                    <FadeIn delay={0.2} className="bg-brand-blue rounded-2xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                                <Video size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-1">Video to Blog</h3>
                            <p className="text-blue-100 text-sm mb-6">Convert your YouTube videos into SEO-optimized articles instantly.</p>
                            <Link href="/dashboard/marketing/auto-drafter" className="inline-flex items-center gap-2 bg-white text-brand-blue px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                                Try Auto-Drafter <Sparkles size={14} />
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-white/20 transition-all" />
                    </FadeIn>

                    <FadeIn delay={0.3} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-900 mb-4">Content Mix</h3>
                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                    <span>Video</span>
                                    <span>40%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 w-[40%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                    <span>Blog</span>
                                    <span>35%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[35%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                    <span>Social</span>
                                    <span>25%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-500 w-[25%]" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
