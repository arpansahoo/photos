import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Image } from "@shared/schema";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export default function ImageModal({ 
  image, 
  onClose, 
  onNext, 
  onPrevious, 
  hasNext = false, 
  hasPrevious = false 
}: ImageModalProps) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && hasPrevious && onPrevious) {
        onPrevious();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-all duration-200 z-[70] bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full p-2 shadow-lg backdrop-blur-sm"
        style={{ pointerEvents: 'auto' }}
        aria-label="Close modal"
      >
        <X size={24} strokeWidth={2.5} />
      </button>

      {/* Previous Button */}
      {hasPrevious && onPrevious && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPrevious();
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-[60] bg-black bg-opacity-50 rounded-full p-3 cursor-pointer select-none"
          style={{ pointerEvents: 'auto' }}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Next Button */}
      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onNext();
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:opacity-70 transition-opacity z-[60] bg-black bg-opacity-50 rounded-full p-3 cursor-pointer select-none"
          style={{ pointerEvents: 'auto' }}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      <div className="relative flex flex-col max-w-[95vw] max-h-[95vh] w-full h-full">
        <div className="flex-1 flex items-center justify-center min-h-0">
          <img
            loading="lazy"
            onLoad={() => setLoading(false)}
            src={image.imageUrl}
            alt={image.alt}
            className={`max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl transition duration-100 ease-in-out ${loading ? "blur-lg" : "blur-0"}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div className="text-center mt-4 mb-4 px-4 flex-shrink-0">
          <p className="text-white font-medium text-lg">{image.title}</p>
          <p className="text-gray-300 text-sm mt-1">{image.category}</p>
          {image.description && (
            <p className="text-gray-400 text-sm mt-2 max-w-md mx-auto">
              {image.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
