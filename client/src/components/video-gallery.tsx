import { Play, Code, Camera } from "lucide-react";
import type { Video } from "@shared/schema";
import { videos } from "../data/videos";

export default function VideoGallery() {

  return (
    <section id="videos" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Floating code snippets specific to videos */}
      <div className="floating-elements">
        <div className="code-snippet" style={{ top: '20%', animationDelay: '2s' }}>const video = new VideoCapture();</div>
        <div className="code-snippet" style={{ top: '60%', animationDelay: '5s' }}>render(cinematicMoments);</div>
        {/* <Camera className="camera-float" size={36} style={{ top: '25%', right: '15%', animationDelay: '1s' }} />
        <Code className="camera-float" size={32} style={{ top: '75%', left: '10%', animationDelay: '3s' }} /> */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Play className="text-primary" size={28} />
            <h3 className="text-3xl font-light text-charcoal">Featured Videos</h3>
            <Code className="text-secondary" size={28} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video group">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 pointer-events-none" />
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-medium text-charcoal">{video.title}</h4>
                <p className="text-warm-gray text-sm mt-1">{video.category}</p>
                {video.description && (
                  <p className="text-warm-gray text-sm mt-2 leading-relaxed">{video.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}