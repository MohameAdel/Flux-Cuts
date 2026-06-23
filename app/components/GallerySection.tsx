import { galleryGroups, galleryVideos } from "../content";
import { VideoCard } from "./VideoCard";

export function GallerySection() {
  return (
    <section id="gallery" className="gallery" aria-label="AI ad creative examples">
      <div className="gallery-desktop">
        {galleryGroups.map((group, groupIndex) => (
          <div
            className="gallery-group"
            key={`group-${groupIndex}`}
            style={{ marginTop: group.top }}
          >
            {group.columns.map((column, columnIndex) => (
              <div
                className="gallery-col"
                key={`group-${groupIndex}-col-${columnIndex}`}
                style={{ marginTop: column.top }}
              >
                {column.videos.map((video) => (
                  <VideoCard key={video.src} {...video} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="gallery-mobile">
        {galleryVideos.map((video) => (
          <VideoCard key={video.src} {...video} />
        ))}
      </div>
    </section>
  );
}
