import React, { useState } from 'react';
import { galleryItems, GalleryItem } from '../data/merchData';
import { X, Eye, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'T-Shirts', 'Caps', 'Mugs', 'Bottles', 'Others'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-bold text-[#E5382C] uppercase tracking-widest">
            LOOKBOOK & PORTFOLIO · REAL PRODUCTION
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight">
            RECENT CRAFTED <span className="text-[#E5382C]">EDITIONS</span>
          </h2>
          <p className="text-base text-[#635F56] leading-relaxed">
            Take a look at real production merchandise delivered to college fests, fitness clubs, and businesses across Nashik.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#141414] text-white shadow-sm'
                    : 'bg-white border border-[#E8E4DC] text-[#635F56] hover:text-[#141414] hover:border-[#D5CEBF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8E4DC] cursor-pointer shadow-atelier shadow-atelier-hover transition-all duration-300 aspect-[4/5] flex flex-col justify-end"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-white/95 backdrop-blur-md text-[#141414] shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Hover Inspect Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#141414] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Eye size={14} />
              </div>

              {/* Bottom Card Info */}
              <div className="relative z-10 p-5 space-y-1 text-white">
                <p className="text-[11px] text-white/80 font-semibold">{item.client}</p>
                <h3 className="text-base font-bold text-white leading-tight">
                  {item.title}
                </h3>
                <span className="text-[11px] text-[#FF928A] font-semibold block">
                  {item.method}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
            >
              <X size={18} />
            </button>

            <div className="max-h-[60vh] w-full overflow-hidden bg-[#F3EFE9]">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[60vh] mx-auto"
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#E5382C] font-bold uppercase tracking-wider">
                    {selectedItem.category} · {selectedItem.method}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#141414] mt-0.5">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-[#736E65]">Crafted for: {selectedItem.client}</p>
                </div>

                <a
                  href={getWhatsAppLink(`Hi The Merch Foundry, I loved your "${selectedItem.title}" work and want to order similar merch!`)}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#E5382C] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#CC2F24] transition-all shadow-sm"
                >
                  <span>Recreate on WhatsApp</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
