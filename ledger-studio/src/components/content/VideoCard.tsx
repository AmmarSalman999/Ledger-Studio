import Link from "next/link";
import { Play } from "lucide-react";
import { VideoPost } from "@/lib/cms-data";

export default function VideoCard({ video }: { video: VideoPost }) {
    return (
        <Link href={`/videos/${video.slug}`} className="group block">
            <div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                {/* Thumbnail (Using YouTube max res) */}
                <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-brand-blue shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} fill="currentColor" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
                {video.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-brand-blue bg-blue-50 px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="font-bold text-lg text-slate-900 leading-tight mb-2 group-hover:text-brand-blue transition-colors">
                {video.title}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2">
                {video.desc}
            </p>
        </Link>
    );
}
