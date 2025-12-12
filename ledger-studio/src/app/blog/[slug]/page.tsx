import PageShell from "@/components/layout/PageShell";
import { blogPosts } from "@/lib/cms-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, Calendar, User, Share2 } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <PageShell
            title={post.title}
            subtitle={post.summary}
        >
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
                {/* Main Content */}
                <article>
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-blue mb-8 font-medium transition-colors">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>

                    <FadeIn className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm">
                        {/* Meta Header */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100">
                            <span className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-brand-blue rounded-full font-bold">
                                <Tag size={14} /> {post.category}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} /> {post.readTime}
                            </span>
                            <span className="flex items-center gap-2">
                                <User size={14} /> {post.author}
                            </span>
                        </div>

                        <div
                            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-brand-blue"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </FadeIn>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block space-y-8">
                    <div className="sticky top-32">
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                            <h4 className="font-bold text-slate-900 mb-4">Share this article</h4>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-slate-500">
                                    <Share2 size={18} />
                                </button>
                                {/* Add real share buttons here */}
                            </div>
                        </div>

                        <div className="bg-brand-blue rounded-xl p-6 text-white text-center">
                            <h4 className="font-bold mb-2">Need help with {post.category}?</h4>
                            <p className="text-sm text-blue-100 mb-4">Book a free 15-min discovery call with our team.</p>
                            <Link href="/contact" className="block w-full py-2 bg-white text-brand-blue font-bold rounded-lg hover:bg-blue-50 transition-colors">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </PageShell>
    );
}
