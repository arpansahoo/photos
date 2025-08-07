import { useEffect } from "react";
import { X } from "lucide-react";
import type { Image } from "@shared/schema";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity z-51"
        aria-label="Close modal"
      >
        <X size={40} />
      </button>

      <div className="relative flex flex-col max-w-[95vw] max-h-[95vh] w-full h-full">
        <div className="flex-1 flex items-center justify-center min-h-0">
          <img
            src={image.imageUrl}
            alt={image.alt}
            className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        <div
          className="text-center mt-4 mb-4 px-4 flex-shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
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
