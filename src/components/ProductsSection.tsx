import React from 'react';
import { merchProducts } from '../data/merchData';
import { getWhatsAppLink } from '../data/config';
import { MessageSquare, Check, Shirt, HardHat, Coffee, Droplet, Monitor, Award, ArrowUpRight } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const getProductIcon = (id: string) => {
    switch (id) {
      case 't-shirts': return <Shirt className="w-7 h-7 text-[#E5382C]" />;
      case 'caps': return <HardHat className="w-7 h-7 text-[#E5382C]" />;
      case 'mugs': return <Coffee className="w-7 h-7 text-[#E5382C]" />;
      case 'bottles': return <Droplet className="w-7 h-7 text-[#E5382C]" />;
      case 'mouse-pads': return <Monitor className="w-7 h-7 text-[#E5382C]" />;
      case 'trophies': return <Award className="w-7 h-7 text-[#E5382C]" />;
      default: return <Shirt className="w-7 h-7 text-[#E5382C]" />;
    }
  };

  return (
    <section id="products" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-[#E5382C] uppercase tracking-widest">
            OUR MERCHANDISE & PRINTING SERVICES · NASHIK ATELIER
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight">
            OUR 6 CORE <span className="text-[#E5382C]">PRODUCT SERVICES</span>
          </h2>
          <p className="text-base text-[#635F56] leading-relaxed">
            From our primary DTF custom T-Shirt printing to personalized caps, ceramic mugs, sports bottles, desk mouse pads, and prestigious trophies & decorative plates. Premium print clarity with zero minimum order.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchProducts.map((product) => {
            const isPrimary = product.popular;
            const waMessage = `Hi The Merch Foundry, I would like to enquire about ${product.name} (Starting from ₹${product.startingPrice}).`;

            return (
              <div
                key={product.id}
                className={`relative rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-atelier shadow-atelier-hover ${
                  isPrimary
                    ? 'border-[#E5382C] ring-2 ring-[#E5382C]/15 md:col-span-2 lg:col-span-1'
                    : 'border-[#E8E4DC] hover:border-[#D5CEBF]'
                }`}
              >
                {/* Popular Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#E5382C] text-white shadow-sm tracking-wider uppercase">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Top Image Showcase */}
                <div className="relative h-64 w-full overflow-hidden bg-[#F3EFE9]">
                  <img
                    src={product.imagePlaceholder}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#E8E4DC] text-xs font-semibold text-[#141414] shadow-sm">
                      Starting from <strong className="text-[#E5382C] font-bold text-sm">₹{product.startingPrice}</strong>
                    </span>
                    <span className="px-2.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-medium">
                      MOQ: {product.minOrder}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#EBE3D3] flex-shrink-0">
                        {getProductIcon(product.id)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-[#141414] group-hover:text-[#E5382C] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[#736E65] mt-0.5">{product.tagline}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[#635F56] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Printing Methods */}
                    <div>
                      <p className="text-[11px] font-bold text-[#8C867A] uppercase tracking-wider mb-2">Techniques</p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.methods.map((method) => (
                          <span
                            key={method}
                            className="text-xs px-2.5 py-1 rounded-md bg-[#F4F1EA] text-[#1E1E1E] font-medium border border-[#E5E0D5]"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    {product.features && (
                      <ul className="pt-1 space-y-2 text-xs text-[#635F56]">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check size={15} className="text-[#E5382C] mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Enquire Button */}
                  <div className="pt-4 border-t border-[#F0ECE4]">
                    <a
                      href={getWhatsAppLink(waMessage)}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#E5382C] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
                    >
                      <MessageSquare size={16} />
                      <span>Enquire on WhatsApp</span>
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
