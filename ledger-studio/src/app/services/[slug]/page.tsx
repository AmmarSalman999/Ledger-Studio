import PageShell from "@/components/layout/PageShell";
import { servicesData } from "@/lib/cms-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = servicesData.find(s => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    return (
        <PageShell
            title={service.title}
            subtitle={service.summary}
        >
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Overview</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {service.details}
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {service.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-brand-green flex-shrink-0" size={20} />
                                <span className="text-slate-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-2xl font-bold mb-4">Ready to optimize your {service.title}?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Let's discuss how we can implement this specifically for your business tailored to your needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all"
                    >
                        Book a Strategy Call
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </PageShell>
    );
}
