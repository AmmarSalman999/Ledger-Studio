"use client";

import { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FadeIn from "@/components/animations/FadeIn";

export default function ClientPortalLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Mock Login Delay
        setTimeout(() => {
            router.push("/portal/dashboard");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <FadeIn>
                <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="h-2 bg-brand-blue w-full" />
                    <div className="p-8">
                        <div className="text-center mb-8">
                            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                                L
                            </div>
                            <h1 className="text-2xl font-bold text-slate-900">Client Portal</h1>
                            <p className="text-slate-500 text-sm mt-2">Secure access for Ledger Studio partners</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-slate-900"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-slate-900"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <Lock size={16} className="animate-pulse" /> Authenticating...
                                    </span>
                                ) : (
                                    <>
                                        Access Dashboard <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">
                                ← Back to Ledger Studio
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-slate-400 text-xs">
                    &copy; 2025 Ledger Studio. Secured by 256-bit encryption.
                </div>
            </FadeIn>
        </div>
    );
}
