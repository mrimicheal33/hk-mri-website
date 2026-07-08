import type { ProductVideo } from "@/data/products";

interface ProductVideosProps {
  videos: ProductVideo[];
  label: string;
  className?: string;
}

function getVideoKey(video: ProductVideo) {
  return video.youtubeId ?? video.src ?? video.title;
}

function getEmbedSrc(video: ProductVideo) {
  const params = new URLSearchParams();
  if (video.start) {
    params.set("start", String(video.start));
  }
  const query = params.toString();
  return `https://www.youtube.com/embed/${video.youtubeId}${query ? `?${query}` : ""}`;
}

export function ProductVideos({ videos, label, className = "" }: ProductVideosProps) {
  return (
    <div className={className}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
        {label}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map((video) => (
          <article key={getVideoKey(video)}>
            <h3 className="text-sm font-semibold text-text-primary mb-3">{video.title}</h3>
            <div className="relative w-full aspect-video overflow-hidden bg-surface-muted border border-border">
              {video.src ? (
                <video
                  src={video.src}
                  title={video.title}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full bg-black object-contain"
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              ) : (
                <iframe
                  src={getEmbedSrc(video)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
