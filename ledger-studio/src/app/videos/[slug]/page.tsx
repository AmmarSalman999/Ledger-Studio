import { notFound } from "next/navigation";
import PageShell from "@/components/layout/PageShell";
import { videoLibrary } from "@/lib/cms-data";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface VideoPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: VideoPageProps) {
    const { slug } = await params;
    const video = videoLibrary.find((v) => v.slug === slug);
    if (!video) return { title: "Video Not Found" };

    return {
        title: `${video.title} | Ledger Studio`,
        description: video.description,
    };
}

export default async function VideoPage({ params }: VideoPageProps) {
    const { slug } = await params;
    const video = videoLibrary.find((v) => v.slug === slug);

    if (!video) {
        notFound();
    }

    // JSON-LD Schema for VideoObject
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": video.title,
        "description": video.description,
        "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
        "uploadDate": video.uploadDate,
        "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
        "transcript": video.transcript
    };

    return (
        <PageShell title="Video Hub" subtitle="Watch and learn.">
            <div className="mb-8">
                <Link href="/videos" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors mb-6">
                    <ArrowLeft size={16} /> Back to Library
                </Link>

                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    {/* Player Wrapper */}
                    <div className="aspect-video w-full bg-slate-900">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="border-0"
                        />
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {new Date(video.uploadDate).toLocaleDateString()}
                            </div>
                            {video.tags.map(tag => (
                                <div key={tag} className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded">
                                    <Tag size={12} />
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <h1 className="text-3xl font-bold text-slate-900 mb-4">{video.title}</h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {video.description}
                        </p>

                        {video.transcript && (
                            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Video Transcript</h3>
                                <div className="prose prose-slate max-w-none text-slate-600">
                                    <p>{video.transcript}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </PageShell>
    );
}
