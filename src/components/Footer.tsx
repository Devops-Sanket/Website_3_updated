import React from 'react';
import { businessConfig } from '../data/config';
import { merchProducts } from '../data/merchData';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F3EF] border-t border-[#E8E4DC] text-[#635F56] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E8E4DC]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex-shrink-0">
                <img
                  src="/logo.svg"
                  alt="The Merch Foundry Logo"
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-[#141414] leading-none">
                  {businessConfig.shopName}
                </h3>
                <span className="text-[11px] text-[#E5382C] font-bold tracking-widest uppercase mt-0.5 block">
                  {businessConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#736E65] max-w-sm leading-relaxed">
              Nashik’s Custom Apparel Studio Specializing in DTF Printing and Custom Merchandise Manufacturing. Built for Creators, Universities, and Commercial Brands.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={businessConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E8E4DC] flex items-center justify-center text-[#141414] hover:bg-[#E5382C] hover:text-white hover:border-[#E5382C] transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={businessConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E8E4DC] flex items-center justify-center text-[#141414] hover:bg-[#E5382C] hover:text-white hover:border-[#E5382C] transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={businessConfig.socials.maps}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#E8E4DC] flex items-center justify-center text-[#141414] hover:bg-[#E5382C] hover:text-white hover:border-[#E5382C] transition-colors shadow-sm"
                aria-label="Location Map"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#141414] tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-[#E5382C] transition-colors">Home Atelier</a></li>
              <li><a href="#products" className="hover:text-[#E5382C] transition-colors">Print Catalog</a></li>
              <li><a href="#customizer" className="hover:text-[#E5382C] transition-colors">Studio Customizer</a></li>
              <li><a href="#how-it-works" className="hover:text-[#E5382C] transition-colors">Craft Process</a></li>
              <li><a href="#gallery" className="hover:text-[#E5382C] transition-colors">Recent Lookbook</a></li>
              <li><a href="#bulk-orders" className="hover:text-[#E5382C] transition-colors">Bulk Orders</a></li>
              <li><a href="#faq" className="hover:text-[#E5382C] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Products List */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#141414] tracking-widest uppercase">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {merchProducts.map((p) => (
                <li key={p.id}>
                  <a href="#products" className="hover:text-[#E5382C] transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#141414] tracking-widest uppercase">
              Workshop Location
            </h4>
            <p className="text-xs text-[#736E65] leading-relaxed">
              {businessConfig.address.full}
            </p>
            <div className="pt-2 text-xs space-y-1.5 font-medium">
              <p className="flex items-center gap-2 text-[#141414] font-semibold">
                <Phone size={13} className="text-[#E5382C]" />
                <span>{businessConfig.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2 text-[#635F56]">
                <Mail size={13} className="text-[#E5382C]" />
                <span>{businessConfig.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C867A] gap-4 font-medium">
          <p>© 2026 The Merch Foundry. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with pride in Nashik, Maharashtra</span>
            <span className="text-[#E5382C]">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
