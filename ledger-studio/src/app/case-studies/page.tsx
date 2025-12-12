import PageShell from "@/components/layout/PageShell";
import { caseStudies } from "@/lib/cms-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
    return (
        <PageShell
            title="Success Stories"
            subtitle="Real results we've delivered for startups, agencies, and retailers."
        >
            <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map(study => (
                    <Link
                        key={study.id}
                        href={`/case-studies/${study.slug}`}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col"
                    >
                        <div className="h-48 bg-slate-100 relative">
                            {/* Placeholder for Case Study Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-2xl uppercase tracking-widest">
                                {study.industry}
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">{study.client}</span>
                                <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-brand-blue transition-colors">
                                    {study.title}
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm mb-6 flex-1">
                                {study.summary}
                            </p>
                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <span className="font-bold text-slate-900 text-sm">{study.outcome}</span>
                                <ArrowRight size={16} className="text-brand-blue -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </PageShell>
    );
}
