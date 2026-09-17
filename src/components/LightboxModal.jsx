import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onNext,
  onPrev
}) => {
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md animate-fade-in select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Close Button - High Touch Target */}
      <button
        onClick={onClose}
        className="min-h-[44px] min-w-[44px] absolute top-3 right-3 sm:top-5 sm:right-5 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Desktop Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="min-h-[48px] min-w-[48px] absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer hidden md:flex items-center justify-center active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={onNext}
            className="min-h-[48px] min-w-[48px] absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer hidden md:flex items-center justify-center active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </>
      )}

      {/* Image and Caption Container */}
      <div className="max-w-4xl max-h-[90vh] flex flex-col items-center justify-center relative z-20 w-full px-2">
        
        {/* Main Image */}
        <div className="relative overflow-hidden rounded-2xl max-h-[60vh] sm:max-h-[70vh] shadow-2xl bg-black flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[60vh] sm:max-h-[70vh] rounded-2xl"
          />
        </div>

        {/* Caption Bar */}
        <div className="mt-3 sm:mt-4 text-center text-white px-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 border border-amber-500/30">
            <span>{currentItem.category || "Raj Bakery Photo"}</span>
          </div>
          <h4 className="text-base sm:text-xl font-serif font-bold text-white">
            {currentItem.title}
          </h4>
          {currentItem.description && (
            <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-2">
              {currentItem.description}
            </p>
          )}

          {/* Mobile navigation controls below caption with Swipe Hint */}
          {images.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-3 md:hidden">
              <button
                onClick={onPrev}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-white/20 active:bg-white/30 text-white text-xs font-bold flex items-center gap-1"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <span className="text-xs text-stone-400 font-mono">
                {currentIndex + 1} / {images.length}
              </span>
              <button
                onClick={onNext}
                className="min-h-[44px] px-4 py-2 rounded-xl bg-white/20 active:bg-white/30 text-white text-xs font-bold flex items-center gap-1"
                aria-label="Next image"
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
