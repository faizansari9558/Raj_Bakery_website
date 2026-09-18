import React, { useState } from 'react';

/**
 * OptimizedImage Component
 * Robust, high-performance image component for Raj Bakery.
 * - Displays optimized WebP photography instantly
 * - Native lazy loading for below-the-fold images
 * - Async decoding for non-blocking rendering
 * - Explicit aspect ratio to prevent Cumulative Layout Shift (CLS: 0)
 * - Shimmer skeleton background during loading
 * - Safe fallback handling without broken placeholder triggers
 */

export const OptimizedImage = ({
  src,
  srcSet,
  sizes,
  alt = "Raj Bakery fresh product",
  priority = false,
  aspectRatio = "1 / 1",
  className = "w-full h-full object-cover object-center",
  containerClassName = "relative w-full h-full overflow-hidden bg-amber-50/50",
  fallbackSrc,
  onClick,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    // If WebP fails, try original jpg fallback if applicable, otherwise fallback
    if (!hasError) {
      setHasError(true);
    }
  };

  // Determine current display source
  let currentSrc = src;
  if (hasError) {
    if (fallbackSrc) {
      currentSrc = fallbackSrc;
    } else if (src && src.includes('/images/optimized/')) {
      // Fallback to original client photo if optimized asset is ever missing
      currentSrc = src.replace('/images/optimized/', '/images/original/').replace(/\.webp$/, '.jpg');
    }
  }

  return (
    <div 
      className={`${containerClassName}`}
      style={{ aspectRatio }}
      onClick={onClick}
    >
      {/* Subtle shimmer skeleton background */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-amber-200/30 to-amber-100/40 animate-pulse pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Primary Image */}
      <img
        src={currentSrc}
        srcSet={srcSet || undefined}
        sizes={sizes || undefined}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
