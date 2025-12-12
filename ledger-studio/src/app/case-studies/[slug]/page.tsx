import PageShell from "@/components/layout/PageShell";
import { caseStudies } from "@/lib/cms-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    const study = caseStudies.find(s => s.slug === params.slug);

    if (!study) {
        notFound();
    }

    return (
        <PageShell
            title={study.title}
            subtitle={`Client: ${study.client} | Industry: ${study.industry}`}
        >
            <div className="max-w-3xl mx-auto">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-8 font-medium transition-colors">
                    <ArrowLeft size={16} /> Back to Stories
                </Link>

                <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm prose prose-lg prose-slate max-w-none">
                    <h3>The Challenge</h3>
                    <p>{study.content}</p>

                    <div className="my-8 p-6 bg-green-50 rounded-xl border border-green-100">
                        <h4 className="text-green-800 font-bold m-0 mb-2">Key Outcome</h4>
                        <p className="text-green-700 m-0 font-medium text-2xl">{study.outcome}</p>
                    </div>

                    <h3>Our Approach</h3>
                    <p>
                        We conducted a deep-dive audit of their existing systems, identified the bottlenecks, and deployed a custom solution involving...
                        {/* Content truncated for this demo */}
                    </p>
                </div>
            </div>
        </PageShell>
    );
}
