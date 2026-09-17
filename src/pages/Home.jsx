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
  HeartHandshake, 
  Utensils, 
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
      <section className="py-20 bg-[#FFFDF7] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-100">
                <img
                  src="/images/bakery/bakery-interior.jpg"
                  alt="Raj Bakery Warm Interior & Counters"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-amber-900/10 flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Cake className="w-6 h-6 text-[#0F4C47]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#2A1810]">
                      Pune's Beloved Bakery
                    </h4>
                    <p className="text-xs text-[#6B5041]">
                      Fresh bakes, cookies, crispy khari & custom cakes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/60 text-[#0F4C47] text-xs font-bold uppercase tracking-wider">
                <span>🧁</span>
                <span>Welcome to Raj Bakery</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-serif font-bold text-[#2A1810] tracking-tight leading-tight">
                Where Every Bake Is Made to Make Your Moments Sweeter
              </h2>

              <p className="text-base text-[#5A3F30] leading-relaxed">
                At <strong className="text-[#0F4C47]">Raj Bakery</strong>, we believe every celebration deserves something special. From freshly baked bakery favourites to beautifully crafted celebration cakes, we bring delicious moments to every occasion.
              </p>

              <p className="text-sm text-[#6B5041] leading-relaxed">
                Whether you're stopping by our <strong>Kondhwa</strong> or <strong>Sukhsagar Nagar</strong> branch for your morning tea-time khari, picking up fresh butter cookies, or ordering a custom celebration cake for a milestone birthday, we are dedicated to serving quality and freshness every day.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60">
                  <h4 className="font-serif font-bold text-base text-[#0F4C47] mb-1">
                    Fresh Bakes Daily
                  </h4>
                  <p className="text-xs text-[#6B5041]">
                    Prepared with quality ingredients and authentic bakery craftsmanship.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200/60">
                  <h4 className="font-serif font-bold text-base text-[#0F4C47] mb-1">
                    Custom Cake Orders
                  </h4>
                  <p className="text-xs text-[#6B5041]">
                    Tailored birthday, anniversary, and celebration designs via WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F4C47] hover:bg-[#0B3834] text-white font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Read Our Story</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/find-us"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#0F4C47] font-bold text-sm transition-all"
                >
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Our 2 Locations</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Raj Bakery */}
      <section className="py-20 bg-[#FAF5EB] border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Why Choose Us"
            title="The Raj Bakery Promise"
            subtitle="We take pride in bringing joy to our neighbourhood with authentic taste, premium ingredients, and warm service."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {businessConfig.features.map((feature, idx) => (
              <div 
                key={feature.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 group-hover:bg-amber-500 text-[#0F4C47] group-hover:text-stone-950 flex items-center justify-center mb-5 transition-colors shadow-xs">
                    {idx === 0 && <Utensils className="w-6 h-6" />}
                    {idx === 1 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 2 && <Sparkles className="w-6 h-6" />}
                    {idx === 3 && <Cake className="w-6 h-6" />}
                    {idx === 4 && <MessageCircle className="w-6 h-6" />}
                    {idx === 5 && <HeartHandshake className="w-6 h-6" />}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#2A1810] group-hover:text-[#0F4C47] transition-colors mb-2.5">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#6B5041] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Featured Products Section */}
      <section className="py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Bakery Favourites"
            title="Featured Bakery Products"
            subtitle="Explore our freshly prepared daily bakes, crunchy cookies, flaky khari, and delightful pastries."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEnquire={(prod) => openWhatsAppEnquiry({ type: 'product', itemName: prod.name })}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-base shadow-lg shadow-teal-900/20 active:scale-95 transition-all"
            >
              <span>Explore Complete Product Catalogue</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Special Cakes Showcase */}
      <section className="py-20 bg-gradient-to-b from-[#FAF5EB] to-[#FFFDF7] border-t border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300/60 text-[#0F4C47] text-xs font-bold uppercase tracking-wider mb-2">
                <span>🎂</span>
                <span>Celebration Moments</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2A1810]">
                Special Celebration Cakes
              </h2>
              <p className="text-sm sm:text-base text-[#6B5041] mt-1">
                Custom designs, multi-tier wedding cakes, birthday specials & themed cakes.
              </p>
            </div>

            <Link
              to="/special-cakes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-md transition-all shrink-0"
            >
              <span>View All Special Cakes</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cake Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredCakes.map((cake) => (
              <CakeCard
                key={cake.id}
                cake={cake}
                onEnquire={(c) => onOpenEnquiryModal ? onOpenEnquiryModal(c) : openWhatsAppEnquiry({ type: 'cake', itemName: c.name })}
              />
            ))}
          </div>

          {/* Cake Custom Enquiry Box */}
          <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-black uppercase tracking-widest text-[#0F4C47]">
                Customized for Your Event
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
                Need a Custom Theme or Photo Cake?
              </h3>
              <p className="text-sm text-stone-900 font-medium max-w-xl">
                Tell us your preferred flavour, size, and design reference. Our bakers will make it special.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiryModal ? onOpenEnquiryModal() : openWhatsAppEnquiry({ type: 'custom' })}
              className="px-6 py-3.5 rounded-xl bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-sm sm:text-base flex items-center gap-2 shrink-0 shadow-lg cursor-pointer"
            >
              <Cake className="w-5 h-5 text-amber-300" />
              <span>Enquire for Custom Cake</span>
            </button>
          </div>

        </div>
      </section>

      {/* 6. Bakery Photo Gallery (Real Storefronts & Counter Photos) */}
      <section className="py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Store & Moments"
            title="Bakery Gallery"
            subtitle="Take a look at our Kondhwa and Sukhsagar Nagar storefronts, vibrant counters, and delicious creations."
          />

          {/* Masonry / Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-amber-900/10"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-bold text-white leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C47] hover:text-amber-600 transition-colors"
            >
              <span>Learn more about Raj Bakery & our bakery story</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. Our Two Locations Section */}
      <section className="py-20 bg-[#FAF5EB] border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Visit Raj Bakery"
            title="Two Locations. One Sweet Destination."
            subtitle="Visit either of our two bakery locations in Pune for fresh bakes and custom cake bookings."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/find-us"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0F4C47] hover:bg-[#0b3834] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>View Full Directions & Map Links</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 8. Contact & Celebration CTA */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

      {/* Lightbox Modal for Gallery */}
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
