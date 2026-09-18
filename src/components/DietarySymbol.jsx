import React from 'react';

/**
 * Standard Indian Food Safety Dietary Symbol (FSSAI standard)
 * Standardizes Pure Veg and Non-Veg symbols to have identical dimensions,
 * borders, corner radius, and dot sizes across all navigation, hero, and cards.
 */

export const VegIcon = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    xs: 'w-3 h-3 p-0.5 border-[1.2px]',
    sm: 'w-3.5 h-3.5 p-0.5 border-[1.5px]',
    md: 'w-4 h-4 p-0.5 border-[1.5px]',
    lg: 'w-5 h-5 p-1 border-2'
  };

  const dotClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  return (
    <span 
      className={`inline-flex items-center justify-center shrink-0 rounded-[3px] bg-white border-green-600 shadow-2xs ${sizeClasses[size] || sizeClasses.md} ${className}`}
      title="100% Pure Vegetarian"
      aria-label="Pure Vegetarian"
    >
      <span className={`rounded-full bg-green-600 shrink-0 ${dotClasses[size] || dotClasses.md}`} />
    </span>
  );
};

export const NonVegIcon = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    xs: 'w-3 h-3 p-0.5 border-[1.2px]',
    sm: 'w-3.5 h-3.5 p-0.5 border-[1.5px]',
    md: 'w-4 h-4 p-0.5 border-[1.5px]',
    lg: 'w-5 h-5 p-1 border-2'
  };

  const dotClasses = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5'
  };

  return (
    <span 
      className={`inline-flex items-center justify-center shrink-0 rounded-[3px] bg-white border-[#8B2500] shadow-2xs ${sizeClasses[size] || sizeClasses.md} ${className}`}
      title="Non-Vegetarian"
      aria-label="Non-Vegetarian"
    >
      <span className={`rounded-full bg-[#8B2500] shrink-0 ${dotClasses[size] || dotClasses.md}`} />
    </span>
  );
};

export const VegNonVegIcon = ({ size = 'md', className = '' }) => {
  return (
    <span 
      className={`inline-flex items-center gap-1 shrink-0 ${className}`} 
      title="Veg & Non-Veg Both Available"
      aria-label="Veg and Non-Veg"
    >
      <VegIcon size={size} />
      <NonVegIcon size={size} />
    </span>
  );
};

export const DietarySymbol = ({ type = 'veg', size = 'md', className = '' }) => {
  if (type === 'non-veg') {
    return <NonVegIcon size={size} className={className} />;
  }
  if (type === 'both' || type === 'veg-nonveg' || type === 'veg-and-nonveg') {
    return <VegNonVegIcon size={size} className={className} />;
  }
  return <VegIcon size={size} className={className} />;
};

export default DietarySymbol;
