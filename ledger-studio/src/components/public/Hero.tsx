"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6 text-center">

                <FadeIn>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wide mb-8">
                        <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                        Accepting New Retainer Clients
                    </span>

                    <h1 className="text-5xl md:text-7xl font-sans font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                        Empowering Businesses With <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">
                            Precision Accounting.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Your all-in-one partner for bookkeeping, financial modeling, advanced Excel solutions, and automated business workflows — engineered for global efficiency.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Get Started
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-slate-600 hover:bg-slate-100 transition-all border border-slate-200"
                        >
                            Book a Strategy Call
                        </Link>
                    </div>

                    <StaggerContainer className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500" delayChildren={0.2}>
                        <StaggerItem className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-brand-green" />
                            <span>Audit-Proof Tax</span>
                        </StaggerItem>
                        <StaggerItem className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-brand-green" />
                            <span>3-Way Forecasting</span>
                        </StaggerItem>
                        <StaggerItem className="flex items-center gap-2">
                            <CheckCircle2 size={18} className="text-brand-green" />
                            <span>Tech Stack Integration</span>
                        </StaggerItem>
                    </StaggerContainer>
                </FadeIn>

            </div>

            {/* Abstract Dashboard Preview (Visual Anchor) */}
            <FadeIn delay={0.4} duration={0.8} direction="up" className="mt-16 mx-auto max-w-5xl px-6">
                <div className="relative rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden aspect-[16/9]">
                    <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                        <p className="text-slate-400 font-mono text-sm">[ Dashboard Simulation Visual ]</p>
                        {/* Visual placeholder for the 'Command Center' screenshot */}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
