import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
import { products, productCategories } from '../data/products';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const Products = ({ onOpenEnquiryModal }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-0">
      
      {/* Header Banner - Mobile optimized */}
      <section className="bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span>🥖</span>
            <span>Freshly Baked Daily in Pune</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white">
            Our Bakery Products
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Explore our wide selection of celebration cakes, cream pastries, butter cookies, crispy khari, and daily fresh bakes.
          </p>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Category Chips */}
          <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
            
            {/* Search Input - Full width & high touch target */}
            <div className="max-w-lg mx-auto relative">
              <Search className="w-5 h-5 text-amber-600 absolute left-4 top-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search products (e.g. Khari, Pastry, Cookies, Cake)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[48px] pl-11 pr-10 py-3 rounded-2xl bg-white border border-amber-900/15 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 text-[#2A1810]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="min-h-[36px] min-w-[36px] absolute right-2.5 top-1.5 flex items-center justify-center text-stone-400 hover:text-stone-700 bg-stone-100 rounded-xl"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Category Filter - Horizontal Smooth Scrollable Chips */}
            <div className="relative -mx-3 sm:mx-0">
              <div className="overflow-x-auto no-scrollbar py-2 px-4 sm:px-2 scroll-smooth">
                <div className="inline-flex sm:flex items-center gap-2 sm:gap-2.5 min-w-max mx-auto sm:justify-center px-1">
                  {productCategories.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#0F4C47] text-white shadow-md shadow-teal-900/20 ring-2 ring-[#0F4C47]/20 scale-102'
                            : 'bg-white text-[#4A3225] border border-amber-900/10 hover:bg-amber-50 active:scale-95'
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Product Count Indicator */}
            <div className="flex items-center justify-between px-1 text-xs text-[#6B5041]">
              <span>
                Showing <strong className="text-[#0F4C47]">{filteredProducts.length}</strong> items {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
              </span>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="text-amber-700 font-bold hover:underline cursor-pointer"
                >
                  Show All Products
                </button>
              )}
            </div>

          </div>

          {/* Product Grid - Mobile Responsive 1-col on <390px, 2-col on 390px+, 4-col on desktop */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 min-[390px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16 bg-white rounded-3xl border border-amber-900/10 max-w-md mx-auto p-6 sm:p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-2xl">
                🧁
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2A1810]">
                No Products Found
              </h3>
              <p className="text-xs sm:text-sm text-[#6B5041]">
                We couldn't find any items matching "{searchQuery}". Try selecting another category or clear your search query.
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#0F4C47] text-white font-bold text-xs shadow-sm cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <CTASection onOpenEnquiryModal={onOpenEnquiryModal} />

    </div>
  );
};

export default Products;
