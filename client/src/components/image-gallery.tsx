import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ImageModal from "./image-modal";
import type { Image } from "@shared/schema";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const {
    data: images,
    isLoading,
    error,
  } = useQuery<Image[]>({
    queryKey: ["/api/images"],
  });

  if (error) {
    return (
      <section id="gallery" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-light text-charcoal mb-4">
              Featured Work
            </h3>
            <p className="text-red-600">
              Failed to load images. Please try again later.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const visibleImages = images?.slice(0, visibleCount) || [];
  const hasMoreImages = images && images.length > visibleCount;

  return (
    <>
      <section id="gallery" className="py-16 lg:py-24 relative">
        <div className="code-pattern absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-charcoal mb-4">
              Featured Work
            </h3>
            <p className="text-warm-gray font-light">
              A collection of my recent photography projects
            </p>
          </div>

          {isLoading ? (
            <div className="image-grid">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="image-item">
                  <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
                </div>
              ))}
            </div>
          ) : (
            <div className="image-grid" id="photoGrid">
              {visibleImages.map((image) => (
                <div
                  key={image.id}
                  className="image-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="image-overlay">
                    <div className="text-white text-center">
                      <p className="font-medium">{image.title}</p>
                      <p className="text-sm opacity-90">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {hasMoreImages && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="inline-flex items-center px-6 py-3 border border-charcoal text-charcoal font-medium rounded-md hover:bg-charcoal hover:text-white transition-colors duration-200"
              >
                Load More Images
                <ChevronDown className="ml-2 w-4 h-4 rotate-180" />
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
