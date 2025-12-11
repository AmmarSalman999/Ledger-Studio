"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Ready to upgrade your financial stack?
                </h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Join the forward-thinking founders who use Ledger Studio to make better decisions faster.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all hover:scale-105"
                >
                    Start Your Free Audit
                    <ArrowRight size={20} />
                </Link>
                <p className="mt-6 text-sm text-slate-500">
                    No credit card required. Free 15-minute consulting session included.
                </p>
            </div>
        </section>
    );
}
