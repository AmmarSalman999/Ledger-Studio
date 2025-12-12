"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PublicNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        LS
                    </div>
                    <span className="font-bold text-slate-900 text-lg tracking-tight">
                        Ledger Studio
                    </span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Services
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        About
                    </Link>
                    <Link href="/videos" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Library
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                        Blog
                    </Link>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/dashboard"
                        className="text-sm font-bold text-slate-700 hover:text-brand-blue transition-colors"
                    >
                        Client Login
                    </Link>
                    <Link
                        href="/contact"
                        className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all hover:shadow-lg"
                    >
                        Book Audit
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}
