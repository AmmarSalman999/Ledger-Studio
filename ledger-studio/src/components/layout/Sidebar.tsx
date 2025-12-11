"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Inbox,
    KanbanSquare,
    Users,
    PenTool,
    Workflow,
    Settings,
    LogOut
} from "lucide-react";
import clsx from "clsx";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Inbox", href: "/dashboard/inbox", icon: Inbox },
    { name: "Pipeline", href: "/dashboard/pipeline", icon: KanbanSquare },
    { name: "Clients", href: "/dashboard/clients", icon: Users },
    { name: "Content", href: "/dashboard/content", icon: PenTool },
    { name: "Automation", href: "/dashboard/automation", icon: Workflow },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-200 bg-white z-50 flex flex-col">
            {/* Brand */}
            <div className="p-6 border-b border-slate-100">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LS
                    </div>
                    <span className="font-bold text-slate-800 text-lg tracking-tight">
                        Ledger Studio
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-blue-50 text-brand-blue"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <Icon size={18} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* User / Footer */}
            <div className="p-4 border-t border-slate-100">
                <button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
