import PageShell from "@/components/layout/PageShell";
import { blogPosts } from "@/lib/cms-data";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export default function BlogPage() {
    return (
        <PageShell
            title="Insights & Strategies"
            subtitle="Deep dives into financial modeling, automation engineering, and business growth."
        >
            <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <StaggerItem key={post.slug} className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
                        {/* Image Placeholder */}
                        <div className="h-48 bg-slate-100 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold tracking-widest uppercase">
                                {post.category}
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                                <span className="text-brand-blue flex items-center gap-1">
                                    <Tag size={12} /> {post.category}
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> {post.readTime}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h3>

                            <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                                {post.summary}
                            </p>

                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <Link href={`/blog/${post.slug}`} className="text-brand-blue font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </PageShell>
    );
}
