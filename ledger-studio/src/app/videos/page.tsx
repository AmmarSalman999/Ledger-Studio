```javascript
import PageShell from "@/components/layout/PageShell";
import { videoLibrary } from "@/lib/cms-data";
import VideoCard from "@/components/content/VideoCard";

export default function VideosPage() {
  return (
    <PageShell 
      title="Video Hub" 
      subtitle="Deep dives into financial concepts, tutorials, and strategy sessions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoLibrary.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </PageShell>
  );
}
```
