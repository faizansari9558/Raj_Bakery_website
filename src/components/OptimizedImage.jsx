import React, { useState } from 'react';

/**
 * OptimizedImage Component
 * High-performance responsive image component for Raj Bakery.
 * - Supports responsive WebP srcSet and sizes
 * - Lazy loading for below-the-fold images
 * - Async decoding for non-blocking rendering
 * - Explicit aspect ratio to prevent Cumulative Layout Shift (CLS)
 * - Shimmer skeleton placeholder during load
 * - Graceful fallback on error
 */

export const OptimizedImage = ({
  src,
  srcSet,
  sizes = "(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",
  alt,
  priority = false,
  aspectRatio = "1 / 1",
  className = "w-full h-full object-cover object-center",
  containerClassName = "relative w-full h-full overflow-hidden bg-amber-50/70",
  fallbackSrc = "/favicon.svg",
  onClick,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate automatic WebP srcSet if responsive path matches convention
  let finalSrcSet = srcSet;
  if (!finalSrcSet && src && src.endsWith('.webp')) {
    const base = src.replace(/\.webp$/, '');
    finalSrcSet = `
      ${base}-320.webp 320w,
      ${base}-480.webp 480w,
      ${base}-640.webp 640w,
      ${base}-960.webp 960w
    `;
  }

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      className={`${containerClassName}`}
      style={{ aspectRatio }}
      onClick={onClick}
    >
      {/* Shimmer Placeholder Skeleton */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-amber-100/60 via-amber-200/40 to-amber-100/60 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* Actual Responsive Image */}
      <img
        src={hasError ? fallbackSrc : src}
        srcSet={hasError ? undefined : finalSrcSet}
        sizes={sizes}
        alt={alt || "Raj Bakery fresh product"}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-all duration-500 ease-out ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
