import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/60 text-[#0F4C47] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span>✨</span>
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-[#2A1810] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#6B5041] leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
        <span className="w-8 h-0.5 bg-amber-500 rounded-full"></span>
        <span className="w-2 h-2 rounded-full bg-[#0F4C47]"></span>
        <span className="w-8 h-0.5 bg-amber-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default SectionHeading;
