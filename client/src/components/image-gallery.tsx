import { useState } from "react";
import { ChevronDown, Terminal } from "lucide-react";
import ImageModal from "./image-modal";
import type { Image } from "@shared/schema";
import { images } from "../data/images";

// New LazyImage component with blur effect while loading
function LazyImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [loading, setLoading] = useState(true);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoading(false)}
      className={`${className} transition duration-500 ease-in-out ${loading ? "blur-lg" : "blur-0"}`}
    />
  );
}

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleImages = images.slice(0, visibleCount);
  const hasMoreImages = images.length > visibleCount;

  const openImage = (image: Image, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    // If the user navigated to an image beyond the currently visible ones,
    // automatically load more images to include that position
    if (selectedImageIndex !== null && selectedImageIndex >= visibleCount) {
      // Load enough images to include the current position plus some buffer
      const newVisibleCount = Math.max(visibleCount, selectedImageIndex + 13); // +13 to load a bit more
      setVisibleCount(Math.min(newVisibleCount, images.length));
    }
    
    setSelectedImage(null);
    setSelectedImageIndex(null);
  };

  const goToNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      const nextIndex = selectedImageIndex + 1;
      setSelectedImage(images[nextIndex]);
      setSelectedImageIndex(nextIndex);
    }
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      const prevIndex = selectedImageIndex - 1;
      setSelectedImage(images[prevIndex]);
      setSelectedImageIndex(prevIndex);
    }
  };

  const hasNext = selectedImageIndex !== null && selectedImageIndex < images.length - 1;
  const hasPrevious = selectedImageIndex !== null && selectedImageIndex > 0;
  
  return (
    <>
      <section id="gallery" className="py-16 lg:py-24 relative">
        <div className="code-pattern absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Terminal className="text-primary" size={28} />
              <h3 className="text-3xl font-light text-charcoal">Featured Photos</h3>
            </div>
          </div>

          <div className="image-grid" id="photoGrid">
            {visibleImages.map((image, index) => (
              <div
                key={image.id}
                className="image-item"
                onClick={() => openImage(image, index)}
              >
                <LazyImage
                  src={image.imageUrl}
                  alt={image.alt}
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
          onClose={closeModal}
          onNext={goToNext}
          onPrevious={goToPrevious}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      )}
    </>
  );
}
