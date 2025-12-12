"use client";

import { Home, FileText, User, LogOut, PieChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
    { icon: Home, label: "Overview", href: "/dashboard/client" },
    { icon: FileText, label: "Documents", href: "/dashboard/client/documents" },
    { icon: PieChart, label: "Financials", href: "/dashboard/client/financials" },
    { icon: User, label: "Profile", href: "/dashboard/client/profile" },
];

export default function ClientSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen fixed left-0 top-0 border-r border-slate-800">
            {/* Brand */}
            <div className="h-16 flex items-center px-6 border-b border-slate-800">
                <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center font-bold text-slate-900 mr-3">
                    LS
                </div>
                <span className="font-bold text-lg tracking-tight">Client Portal</span>
            </div>

            {/* Nav */}
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                                isActive
                                    ? "bg-brand-blue text-white shadow-lg shadow-blue-900/50"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                            )}
                        >
                            <Icon size={18} className={clsx("transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-400")} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 hover:bg-red-950/30 rounded-lg w-full transition-colors text-sm font-medium">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
