"use client";

import { useState } from "react";
import { ArrowLeft, Check, Copy, Loader2, Sparkles, Youtube } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

export default function AutoDrafterPage() {
    const [url, setUrl] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsGenerating(true);
        setResult(null);

        // Simulate AI "Processing"
        setTimeout(() => {
            setIsGenerating(false);
            setResult(`# 5 Ways to Automate Your Business in 2025\n\nIn this video, we break down the top tools you need to streamline operations...\n\n## 1. Use a Unified CRM\nStop juggling spreadsheets. A system like Ledger Studio brings everything into one place.\n\n## 2. Automate Invoicing\nDon't chase payments manually. Set up automatic reminders.\n\n[...Generated Content...]`);
        }, 2500);
    };

    return (
        <div className="p-8 max-w-5xl mx-auto min-h-screen">
            <div className="mb-8">
                <Link href="/dashboard/marketing" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-bold mb-4">
                    <ArrowLeft size={16} /> Back to Marketing
                </Link>
                <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="text-brand-blue" /> Auto-Drafter
                </h1>
                <p className="text-slate-500 mt-1">Turn your YouTube videos into SEO-ready blog posts in seconds.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <FadeIn delay={0.1} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <form onSubmit={handleGenerate}>
                            <label className="block text-sm font-bold text-slate-700 mb-2">YouTube Video URL</label>
                            <div className="relative mb-4">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500">
                                    <Youtube size={20} />
                                </div>
                                <input
                                    type="url"
                                    placeholder="https://youtube.com/watch?v=..."
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue/20 outline-none font-medium"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isGenerating || !url}
                                className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                                {isGenerating ? "Analyzing Transcript..." : "Generate Blog Post"}
                            </button>
                        </form>
                    </FadeIn>

                    <FadeIn delay={0.2} className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h3 className="font-bold text-blue-900 mb-2">How it works</h3>
                        <ul className="space-y-2 text-sm text-blue-800">
                            <li className="flex items-center gap-2"><Check size={14} /> Extracts verified transcripts</li>
                            <li className="flex items-center gap-2"><Check size={14} /> Identifies key headings & topics</li>
                            <li className="flex items-center gap-2"><Check size={14} /> Rewrites for blog readability (SEO)</li>
                        </ul>
                    </FadeIn>
                </div>

                {/* Output Section */}
                <div className="relative min-h-[400px]">
                    {isGenerating && (
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center rounded-2xl border border-slate-200">
                            <Loader2 size={32} className="animate-spin text-brand-blue mb-4" />
                            <div className="text-slate-900 font-bold">Drafting content...</div>
                            <div className="text-slate-500 text-sm">Validating keywords</div>
                        </div>
                    )}

                    {result ? (
                        <FadeIn className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
                            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Draft Ready</span>
                                <button className="text-slate-400 hover:text-brand-blue transition-colors" title="Copy">
                                    <Copy size={16} />
                                </button>
                            </div>
                            <div className="prose prose-sm prose-slate max-w-none">
                                <pre className="whitespace-pre-wrap font-sans text-slate-600 leading-relaxed">
                                    {result}
                                </pre>
                            </div>
                        </FadeIn>
                    ) : (
                        <div className="h-full border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-sm font-medium">
                            Result will appear here...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
