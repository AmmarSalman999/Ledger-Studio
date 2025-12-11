"use client";

import { Users, FileSearch, TrendingUp } from "lucide-react";

export default function Methodology() {
    return (
        <section id="method" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-2 block">Our Methodology</span>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">From Chaos to <br />Command Center.</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We don't just "do your taxes". We install a financial operating system into your business that gives you visibility, control, and peace of mind.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                                    <FileSearch size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">1. The Deep Audit</h3>
                                    <p className="text-slate-500 text-sm">We dig into the last 12 months ensuring no deduction is missed and your data is clean.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">2. Implementation</h3>
                                    <p className="text-slate-500 text-sm">We onboard you to the Ledger Studio portal and automate your document collection.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-brand-green shrink-0">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">3. Growth Advisory</h3>
                                    <p className="text-slate-500 text-sm">Monthly calls to review the P&L and plan your next big move based on data.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl -rotate-6 transform scale-95 opacity-50"></div>
                        <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl text-white">
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                                <span className="font-mono text-sm text-slate-400">System Status</span>
                                <span className="flex items-center gap-2 text-green-400 text-xs font-bold uppercase">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    Live Streaming
                                </span>
                            </div>
                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Cash on Hand</span>
                                    <span className="font-bold">$142,500.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Monthly Burn</span>
                                    <span className="font-bold text-red-400">($32,000.00)</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Runway</span>
                                    <span className="font-bold text-brand-blue">4.4 Months</span>
                                </div>
                                <div className="h-32 mt-6 bg-white/5 rounded-lg border border-white/10 flex items-end justify-between p-2">
                                    {[40, 60, 45, 70, 65, 80, 75].map((h, i) => (
                                        <div key={i} style={{ height: `${h}%` }} className="w-8 bg-brand-blue/80 rounded-sm"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
