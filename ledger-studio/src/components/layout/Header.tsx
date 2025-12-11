"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-64 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center justify-between px-8">
            {/* Search */}
            <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text"
                    placeholder="Search leads, clients, or files..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-100 transition-all text-sm"
                />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <button className="relative text-slate-500 hover:text-slate-800 transition-colors">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                </button>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-slate-800">Demo User</p>
                        <p className="text-xs text-slate-500">Admin</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 font-bold">
                        DU
                    </div>
                </div>
            </div>
        </header>
    );
}
