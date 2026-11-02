import React, { useState, useEffect } from 'react';
import { businessConfig, getWhatsAppLink } from '../data/config';
import { Menu, X, MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 30);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Catalog', href: '#products' },
    { label: 'Studio Customizer', href: '#customizer' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Lookbook', href: '#gallery' },
    { label: 'Bulk Orders', href: '#bulk-orders' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar in Signature Vermilion Red */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#E5382C] z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Navigation Bar: Strict 3-Zone Contract */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/92 backdrop-blur-md border-b border-[#E8E4DC] py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark with Logo */}
          <a href="#hero" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 md:w-11 md:h-11 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
               src={`${import.meta.env.BASE_URL}logo.svg`}
               alt="The Merch Foundry Logo"
               className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-extrabold tracking-tight text-[#141414] leading-none">
                {businessConfig.shopName}
              </span>
              <span className="text-[11px] text-[#736E65] tracking-widest uppercase font-semibold mt-0.5">
                {businessConfig.tagline}
              </span>
            </div>
          </a>

          {/* Zone 2: 5 Concise Single-Line Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#635F56]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#141414] transition-colors whitespace-nowrap shrink-0 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5382C] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#bulk-orders"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E5382C] hover:bg-[#CC2F24] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-[0_4px_16px_rgba(229,56,44,0.25)] active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={15} />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white border border-[#E8E4DC] text-[#141414] hover:border-[#E5382C] transition-colors shadow-sm"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-in Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#FAF9F5]/98 backdrop-blur-xl border-b border-[#E8E4DC] px-6 py-6 shadow-xl transition-all duration-300 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#635F56] hover:text-[#141414] py-2 flex items-center justify-between border-b border-[#EFEBE4]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#E5382C] text-sm">→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={getWhatsAppLink('Hi The Merch Foundry, I would like to get a quote for custom merchandise.')}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#E5382C] text-white font-bold text-sm shadow-md"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-center text-xs text-[#8C867A]">
                Workshop at Swami Park, Dhruv Nagar, Nashik
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
