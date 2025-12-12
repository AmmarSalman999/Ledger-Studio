"use client";

import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, FileText, Instagram, Linkedin, Plus, Twitter, Video, Youtube } from "lucide-react";
import Link from "next/link";
import { mockContent } from "@/lib/marketing-data";
import FadeIn from "@/components/animations/FadeIn";

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const platformIcons: Record<string, any> = {
    'YouTube': Youtube,
    'LinkedIn': Linkedin,
    'Twitter': Twitter,
    'Instagram': Instagram,
    'Blog': FileText
};

const platformColors: Record<string, string> = {
    'YouTube': 'text-red-500 bg-red-50',
    'LinkedIn': 'text-blue-600 bg-blue-50',
    'Twitter': 'text-sky-500 bg-sky-50',
    'Instagram': 'text-pink-600 bg-pink-50',
    'Blog': 'text-orange-600 bg-orange-50'
};

export default function ContentCalendarPage() {
    const [currentDate, setCurrentDate] = useState(new Date("2024-12-01")); // Mock starting in Dec 2024 for demo data

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        return { days, firstDay };
    };

    const { days, firstDay } = getDaysInMonth(currentDate);

    const getContentForDay = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return mockContent.filter(c => c.scheduledDate === dateStr);
    };

    return (
        <div className="p-8 max-w-[1600px] mx-auto h-screen flex flex-col">
            <div className="flex items-center justify-between mb-8 flex-shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/marketing" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <ArrowLeft size={20} className="text-slate-500" />
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-900">Content Calendar</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-slate-200 p-1">
                        <button className="p-1 hover:bg-slate-50 rounded" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>
                            <ChevronLeft size={20} className="text-slate-600" />
                        </button>
                        <span className="w-32 text-center font-bold text-slate-900 select-none">
                            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                        <button className="p-1 hover:bg-slate-50 rounded" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>
                            <ChevronRight size={20} className="text-slate-600" />
                        </button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white font-bold hover:bg-blue-600 shadow-md transition-all text-sm">
                        <Plus size={16} /> Schedule
                    </button>
                </div>
            </div>

            <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                {/* Week Header */}
                <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
                    {DAYS.map(day => (
                        <div key={day} className="py-3 text-center text-xs font-bold text-slate-500 uppercase tracking-wide">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-7 flex-1 auto-rows-fr divide-x divide-slate-100">
                    {Array.from({ length: 42 }).map((_, i) => {
                        const dayNumber = i - firstDay + 1;
                        const isCurrentMonth = dayNumber > 0 && dayNumber <= days;
                        const content = isCurrentMonth ? getContentForDay(dayNumber) : [];

                        if (!isCurrentMonth && i >= 35 && dayNumber > days) return null; // Hide extra row if not needed (simple logic)

                        return (
                            <div
                                key={i}
                                className={`min-h-[120px] p-2 border-b border-slate-100 transition-colors ${!isCurrentMonth ? 'bg-slate-50/50' : 'hover:bg-slate-50'}`}
                            >
                                {isCurrentMonth && (
                                    <>
                                        <div className="text-xs font-bold text-slate-400 mb-2">{dayNumber}</div>
                                        <div className="space-y-1.5">
                                            {content.map(item => {
                                                const Icon = platformIcons[item.platform] || FileText;
                                                const colorClass = platformColors[item.platform] || 'text-slate-600 bg-slate-100';

                                                return (
                                                    <div key={item.id} className="bg-white border border-slate-200 p-1.5 rounded-md shadow-sm hover:border-brand-blue/50 cursor-pointer flex items-center gap-2 group">
                                                        <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${colorClass}`}>
                                                            <Icon size={12} />
                                                        </div>
                                                        <span className="text-[10px] font-bold text-slate-700 truncate group-hover:text-brand-blue">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
