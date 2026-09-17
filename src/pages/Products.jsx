import React, { useState, useMemo } from 'react';
import { Sparkles, Search, Filter, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
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
      
      {/* Header Banner */}
      <section className="bg-gradient-to-br from-[#0F4C47] via-[#115E59] to-[#0D3B37] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <span>🥖</span>
            <span>Freshly Baked Daily in Pune</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white">
            Our Bakery Products
          </h1>
          <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
            Explore our wide selection of celebration cakes, cream pastries, butter cookies, crispy khari, and daily fresh bakes.
          </p>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-16 sm:py-20 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Category Pills */}
          <div className="mb-12 space-y-6">
            
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="w-5 h-5 text-amber-600 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search products (e.g. Khari, Pastry, Cookies, Cake)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-amber-900/15 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-[#2A1810]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-3 text-xs text-stone-400 hover:text-stone-700 bg-stone-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {productCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#0F4C47] text-white shadow-md shadow-teal-900/20 scale-105'
                        : 'bg-white text-[#4A3225] border border-amber-900/10 hover:bg-amber-50 hover:text-[#0F4C47]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEnquire={(prod) => openWhatsAppEnquiry({ type: 'product', itemName: prod.name })}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-amber-900/10 max-w-md mx-auto p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-2xl">
                🧁
              </div>
              <h3 className="font-serif font-bold text-xl text-[#2A1810]">
                No Products Found
              </h3>
              <p className="text-sm text-[#6B5041]">
                We couldn't find any items matching "{searchQuery}". Try selecting another category or clear your search query.
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl bg-[#0F4C47] text-white font-bold text-xs"
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
