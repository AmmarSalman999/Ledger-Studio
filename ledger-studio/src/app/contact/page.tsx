"use client";

import { useState } from "react";
import PublicNavbar from "@/components/public/Navbar";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            revenue: formData.get('revenue'),
            service: formData.get('service'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.ok) {
                setSuccess(true);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    if (success) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                <PublicNavbar />
                <div className="flex-1 flex items-center justify-center p-6">
                    <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md border border-slate-100">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                            <CheckCircle2 size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Application Received</h2>
                        <p className="text-slate-500 mb-8">
                            Our system has analyzed your profile. Based on your revenue bracket, you qualify for a free strategy session. We will email you shortly.
                        </p>
                        <button onClick={() => window.location.href = '/'} className="text-brand-blue font-bold hover:underline">
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <PublicNavbar />
            <div className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">

                    {/* Left Column (Brand/Info) */}
                    <div className="bg-slate-900 text-white p-12 md:w-2/5 flex flex-col justify-between">
                        <div>
                            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-4 block">Let's Build Your Financial System</span>
                            <h1 className="text-3xl font-bold mb-6">Ready to streamline your accounting?</h1>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                Automate your workflows or scale your business with precision. We’re here to help.
                            </p>
                            <div className="space-y-4 text-sm text-slate-300">
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">1</span>
                                    <span>Fill out the intake form</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">2</span>
                                    <span>System scores your profile</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">3</span>
                                    <span>Booking link sent if qualified</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-12 border-t border-slate-800">
                            <p className="text-xs text-slate-500">Ledger Studio Systems &copy; 2025</p>
                        </div>
                    </div>

                    {/* Right Column (Form) */}
                    <div className="p-12 md:w-3/5">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <input name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                    <input name="company" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="Acme Inc." />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                                <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="jane@acme.com" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Annual Revenue</label>
                                    <select name="revenue" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white">
                                        <option value="<$500k">&lt; $500k</option>
                                        <option value="$500k - $1M">$500k - $1M</option>
                                        <option value="$1M - $5M">$1M - $5M</option>
                                        <option value="$5M+">$5M+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Interested In</label>
                                    <select name="service" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all bg-white">
                                        <option value="Financial Audit">Financial Audit (One-off)</option>
                                        <option value="Growth Retainer">Growth Retainer (Monthly)</option>
                                        <option value="Virtual CFO">Virtual CFO (Strategic)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Biggest Financial Challenge?</label>
                                <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" placeholder="e.g. Can't forecast cash flow..." />
                            </div>

                            <button disabled={loading} className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                                {loading ? <Loader2 className="animate-spin" /> : <>Request Audit <ArrowRight size={18} /></>}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
