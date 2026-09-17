import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Store } from 'lucide-react';

export const LightboxModal = ({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* Image and Caption Container */}
      <div className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center relative z-20">
        
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-2xl max-h-[70vh] shadow-2xl">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[70vh] rounded-2xl"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-4 text-center text-white px-4 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/30">
            <span>{currentItem.category || "Raj Bakery Photo"}</span>
          </div>
          <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
            {currentItem.title}
          </h4>
          {currentItem.description && (
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {currentItem.description}
            </p>
          )}

          {/* Mobile navigation controls below caption */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-4 sm:hidden">
              <button
                onClick={onPrev}
                className="px-4 py-2 rounded-xl bg-white/15 text-white text-xs font-bold flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-xs text-stone-400">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={onNext}
                className="px-4 py-2 rounded-xl bg-white/15 text-white text-xs font-bold flex items-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default LightboxModal;
