import React from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Phone, 
  Clock, 
  Store,
  CheckCircle2
} from 'lucide-react';
import { businessConfig } from '../config/business';

export const LocationCard = ({ location, compact = false }) => {
  const hasValidPhone = businessConfig.phone && !businessConfig.phone.includes('[');

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Storefront Image */}
      {location.image && (
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-stone-900">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute top-4 right-4 z-10">
            {location.isPureVeg ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-950/90 border border-green-500/60 text-green-200 text-xs font-bold shadow-lg backdrop-blur-md">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 border-[1.5px] border-green-600 rounded-[2px] bg-white p-0.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                </span>
                <span>Pure Veg</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/50 text-amber-200 text-xs font-bold shadow-lg backdrop-blur-md">
                <span className="inline-flex items-center gap-1 bg-white p-0.5 px-1 rounded-[3px] border border-stone-300 shadow-2xs">
                  <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-green-600 rounded-[2px] bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-[#8B2500] rounded-[2px] bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B2500]"></span>
                  </span>
                </span>
                <span>Veg & Non-Veg</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-stone-950 font-bold text-xs shadow-sm">
                <Store className="w-3.5 h-3.5" />
                <span>{location.areaName} Branch</span>
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight drop-shadow-sm">
              {location.name}
            </h3>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white space-y-6">
        
        <div className="space-y-4">
          {!location.image && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-[#0F4C47] shadow-xs">
                  <Store className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Branch</span>
                  <h3 className="text-xl font-serif font-bold text-[#2A1810]">
                    {location.name}
                  </h3>
                </div>
              </div>
              {location.isPureVeg ? (
                <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold">Pure Veg</span>
              ) : (
                <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">Veg & Non-Veg</span>
              )}
            </div>
          )}

          {/* Dietary Type Callout */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/50 flex items-center justify-between">
            <span className="text-xs font-medium text-[#6B5041]">Dietary Options:</span>
            {location.isPureVeg ? (
              <span className="inline-flex items-center gap-2 text-xs font-bold text-green-800 bg-green-100/90 px-3 py-1 rounded-lg border border-green-300/60">
                <span className="inline-flex items-center justify-center w-3.5 h-3.5 border-[1.5px] border-green-600 rounded-[2px] bg-white p-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                </span>
                <span>100% Pure Vegetarian</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-amber-200/80 px-3 py-1 rounded-lg border border-amber-300/60">
                <span className="inline-flex items-center gap-1 bg-white p-0.5 px-1 rounded-[3px] border border-stone-300">
                  <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-green-600 rounded-[2px] bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                  </span>
                  <span className="inline-flex items-center justify-center w-3 h-3 border-[1.5px] border-[#8B2500] rounded-[2px] bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B2500]"></span>
                  </span>
                </span>
                <span>Veg & Non-Veg Available</span>
              </span>
            )}
          </div>

          {/* Exact Address */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFFDF7] border border-amber-900/10">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-[#3E291D] leading-relaxed font-medium">
              <p className="font-bold text-[#0F4C47] mb-0.5">Address</p>
              <p>{location.address}</p>
            </div>
          </div>

          {/* Note / Highlights */}
          {location.note && (
            <p className="text-xs text-[#6B5041] italic flex items-center gap-1.5 px-1">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span>{location.note}</span>
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-4 border-t border-amber-900/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-[#0F4C47] hover:bg-[#0B3834] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <ExternalLink className="w-4 h-4 text-amber-400" />
              <span>View on Google Maps</span>
            </a>

            <a
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          <a
            href={`tel:${businessConfig.mainContact.phone}`}
            className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-[#2A1810] font-bold text-xs flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span>Call Bakery ({businessConfig.mainContact.phone})</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default LocationCard;
