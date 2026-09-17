import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cake, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  ChevronRight, 
  MessageCircle, 
  Eye, 
  Store,
  Layers,
  Star
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { CakeCard } from '../components/CakeCard';
import { LocationCard } from '../components/LocationCard';
import { CTASection } from '../components/CTASection';
import { LightboxModal } from '../components/LightboxModal';
import { products } from '../data/products';
import { cakes } from '../data/cakes';
import { locations } from '../data/locations';
import { galleryImages } from '../data/gallery';
import { businessConfig } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Home = ({ onOpenEnquiryModal }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const featuredProducts = useMemo(() => {
    // Top 8 visually stunning, plated, and most appetizing Raj Bakery product photos
    const priorityIds = ["bi-1", "pc-1", "sd-3", "pc-2", "bi-5", "sd-5", "bi-4", "kh-3"];
    const ordered = priorityIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    if (ordered.length >= 8) return ordered.slice(0, 8);
    const rest = products.filter(p => !priorityIds.includes(p.id) && p.isFeatured);
    return [...ordered, ...rest].slice(0, 8);
  }, []);

  const featuredCakes = cakes.slice(0, 4);
  const homeGallery = galleryImages.slice(0, 6);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero onOpenEnquiryModal={onOpenEnquiryModal} />

      {/* 2. Welcome to Raj Bakery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-100">
                <img
                  src="/images/bakery/bakery-interior.jpg"
                  alt="Raj Bakery Warm Interior & Counters"
                  loading="lazy"
                  className="w-full h-[280px] sm:h-[400px] lg:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-amber-900/10 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Cake className="w-5 h-5 sm:w-6 sm:h-6 text-[#0F4C47]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#2A1810]">
                      Pune's Beloved Bakery
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#6B5041]">
                      Fresh daily bakes, cookies, crispy khari & cakes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300/60 text-[#0F4C47] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <span>🧁</span>
                <span>Welcome to Raj Bakery</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-[#2A1810] tracking-tight leading-tight">
                Where Every Bake Is Made to Make Your Moments Sweeter
              </h2>

              <p className="text-sm sm:text-base text-[#5A3F30] leading-relaxed">
                At <strong className="text-[#0F4C47]">Raj Bakery</strong>, we believe every celebration deserves something special. From freshly baked bakery favourites to custom celebration cakes, we bring delicious moments to every occasion.
              </p>

              <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                Whether you're stopping by our <strong>Kondhwa</strong> or <strong>Sukhsagar Nagar</strong> branch for your morning tea-time khari, picking up fresh butter cookies, or ordering a custom celebration cake for a milestone birthday, we are dedicated to serving quality and freshness every day.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 text-left">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#0F4C47] mb-1">
                    Fresh Daily Bakes
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5041]">
                    Prepared with authentic bakery craftsmanship and quality ingredients.
                  </p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-teal-50/80 border border-teal-200/60">
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#0F4C47] mb-1">
                    Custom Cakes
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#6B5041]">
                    Tailored celebration cakes for birthdays, weddings, and anniversaries.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/about"
                  className="min-h-[48px] w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Our Bakery Story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/products"
                  className="min-h-[48px] w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <span>Browse Products</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF5EB] border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Bakery Favourites"
            title="Featured Bakery Delights"
            subtitle="Explore our most loved bakery specials, cookies, flaky khari, and fresh treats."
          />

          {/* Product Grid - Mobile responsive 1-col on <390px, 2-col on 390px+, 4-col on desktop */}
          <div className="grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/products"
              className="min-h-[48px] inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>View Full 50+ Product Menu</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Special Cakes Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Custom Celebrations"
            title="Celebration Cakes & Custom Orders"
            subtitle="Handcrafted cakes tailored for your birthdays, weddings, anniversaries, and milestones."
          />

          {/* Cakes Grid */}
          <div className="grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
            {featuredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                cake={cake}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/special-cakes"
              className="min-h-[48px] w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Explore All Special Cakes</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
              className="min-h-[48px] w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Custom Cake Enquiry</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us / Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF5EB] border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Why Raj Bakery"
            title="The Raj Bakery Promise"
            subtitle="What makes our Pune bakeries a trusted choice for daily treats and celebrations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {businessConfig.features.map((feature, idx) => (
              <div
                key={feature.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-amber-900/10 shadow-sm hover:shadow-md transition-shadow space-y-2.5"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-[#0F4C47]">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="font-serif font-bold text-base sm:text-lg text-[#2A1810]">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5041] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Photo Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Bakery Gallery"
            title="Glimpses of Raj Bakery"
            subtitle="Real photographs of our Pune storefronts, fresh bakery displays, cookies, and handcrafted cakes."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
            {homeGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-stone-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-xs sm:text-sm line-clamp-1">
                    {item.title}
                  </h4>
                </div>

                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Two Store Locations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF5EB] border-t border-amber-900/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Visit Us"
            title="Our Two Pune Locations"
            subtitle="Visit our Kondhwa or Sukhsagar Nagar branch for fresh bakes, cookies, and custom cake counter bookings."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>

        </div>
      </section>

      {/* 8. WhatsApp CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={homeGallery}
        currentIndex={activeImageIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveImageIndex((prev) => (prev + 1) % homeGallery.length)}
        onPrev={() => setActiveImageIndex((prev) => (prev - 1 + homeGallery.length) % homeGallery.length)}
      />

    </div>
  );
};

export default Home;
