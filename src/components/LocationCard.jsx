import React from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Phone, 
  Store,
  CheckCircle2
} from 'lucide-react';
import { businessConfig } from '../config/business';

export const LocationCard = ({ location, compact = false }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Storefront Image */}
      {location.image && (
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-stone-900">
          <img
            src={location.image}
            alt={location.name}
            loading="lazy"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>
          
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            {location.isPureVeg ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-green-950/90 border border-green-500/60 text-green-200 text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-md">
                <span className="inline-flex items-center justify-center w-3 h-3 sm:w-3.5 sm:h-3.5 border-[1.5px] border-green-600 rounded-[2px] bg-white p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                </span>
                <span>Pure Veg</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-stone-900/90 border border-amber-500/50 text-amber-200 text-[11px] sm:text-xs font-bold shadow-lg backdrop-blur-md">
                <span className="inline-flex items-center gap-1 bg-white p-0.5 px-1 rounded-[2px] border border-stone-300">
                  <span className="inline-flex items-center justify-center w-2.5 h-2.5 border-[1.2px] border-green-600 rounded-[1px] bg-white">
                    <span className="w-1 h-1 rounded-full bg-green-600"></span>
                  </span>
                  <span className="inline-flex items-center justify-center w-2.5 h-2.5 border-[1.2px] border-[#8B2500] rounded-[1px] bg-white">
                    <span className="w-1 h-1 rounded-full bg-[#8B2500]"></span>
                  </span>
                </span>
                <span>Veg & Non-Veg</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold text-[10px] sm:text-xs shadow-sm">
                <Store className="w-3 h-3" />
                <span>{location.areaName} Branch</span>
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-serif font-bold text-white leading-tight drop-shadow-sm">
              {location.name}
            </h3>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-4 sm:p-7 flex flex-col flex-grow justify-between bg-white space-y-4 sm:space-y-6">
        
        <div className="space-y-3 sm:space-y-4">
          
          {/* Dietary Type Callout */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/50 flex items-center justify-between text-xs">
            <span className="font-medium text-[#6B5041]">Dietary Options:</span>
            {location.isPureVeg ? (
              <span className="inline-flex items-center gap-1.5 font-bold text-green-800 bg-green-100/90 px-2.5 py-1 rounded-lg border border-green-300/60">
                <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-green-600 rounded-[2px] bg-white p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                </span>
                <span>100% Pure Veg</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-bold text-amber-950 bg-amber-200/80 px-2.5 py-1 rounded-lg border border-amber-300/60">
                <span className="inline-flex items-center gap-0.5 bg-white p-0.5 px-1 rounded-[2px] border border-stone-300">
                  <span className="inline-flex items-center justify-center w-2.5 h-2.5 border-[1.2px] border-green-600 rounded-[1px] bg-white">
                    <span className="w-1 h-1 rounded-full bg-green-600"></span>
                  </span>
                  <span className="inline-flex items-center justify-center w-2.5 h-2.5 border-[1.2px] border-[#8B2500] rounded-[1px] bg-white">
                    <span className="w-1 h-1 rounded-full bg-[#8B2500]"></span>
                  </span>
                </span>
                <span>Veg & Non-Veg</span>
              </span>
            )}
          </div>

          {/* Exact Address */}
          <div className="flex items-start gap-2.5 p-3 sm:p-3.5 rounded-2xl bg-[#FFFDF7] border border-amber-900/10">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#3E291D] leading-relaxed font-medium">
              <p className="font-bold text-[#0F4C47] mb-0.5">Address</p>
              <p>{location.address}</p>
            </div>
          </div>

          {/* Note / Highlights */}
          {location.note && (
            <p className="text-[11px] sm:text-xs text-[#6B5041] italic flex items-start gap-1.5 px-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
              <span>{location.note}</span>
            </p>
          )}
        </div>

        {/* Action Buttons - Mobile touch friendly */}
        <div className="space-y-2 pt-3 border-t border-amber-900/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] py-2.5 px-3 rounded-xl bg-[#0F4C47] hover:bg-[#0B3834] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all"
            >
              <ExternalLink className="w-4 h-4 text-amber-400 shrink-0" />
              <span>View on Maps</span>
            </a>

            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-all"
            >
              <Navigation className="w-4 h-4 shrink-0" />
              <span>Get Directions</span>
            </a>
          </div>

          <a
            href={`tel:${businessConfig.mainContact.phone}`}
            className="min-h-[44px] w-full py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#2A1810] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-98"
          >
            <Phone className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Call Bakery ({businessConfig.mainContact.phone})</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default LocationCard;
