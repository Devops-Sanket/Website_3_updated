import React, { useState } from 'react';
import { Sparkles, Maximize2, Move } from 'lucide-react';

export const TShirt3DViewer: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative w-full h-[520px] md:h-[590px] flex flex-col items-center justify-center select-none">
      {/* Studio Light Ambient Pedestal Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full studio-spotlight blur-2xl opacity-90" />
      </div>

      {/* Main Showcase Card */}
      <div className="relative z-10 w-full h-full bg-white border border-[#E8E4DC] rounded-3xl shadow-atelier overflow-hidden flex flex-col">
        {/* Top Header Bar */}
        <div className="px-5 py-3 border-b border-[#E8E4DC] bg-[#FAF9F5]/90 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5382C] animate-pulse" />
            <span className="text-xs font-bold text-[#141414] uppercase tracking-wider">
              3D Dynamic Simulation
            </span>
            <span className="hidden sm:inline-block text-[11px] font-semibold text-[#E5382C] bg-[#FFF2F0] px-2 py-0.5 rounded border border-[#FFDDD8]">
              Walking Loop
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#736E65]">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-[#736E65]">
              <Move size={12} className="text-[#E5382C]" />
              Drag to 360° Orbit
            </span>
          </div>
        </div>

        {/* Embedded Animated T-Shirt - Walking Loop */}
        <div className="relative flex-1 w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
          <div className="sketchfab-embed-wrapper w-full h-full relative overflow-hidden flex items-center justify-center">
            <iframe
              title="Live Walking T-Shirt Design - The Merch Foundry"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/022062edc5354dd78dd735870b02bccc/embed?autostart=1&preload=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_watermark_link=0&ui_hint=0&ui_theme=dark&ui_help=0&ui_settings=0&ui_inspector=0&ui_animations=0&ui_stop=0"
              className="w-[108%] h-[125%] -my-2 border-0"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="px-5 py-3 bg-white border-t border-[#E8E4DC] flex items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-bold text-[#141414] tracking-wide">
            Live Walking T-Shirt Design By <span className="text-[#E5382C]">THE MERCH FOUNDRY</span>!
          </p>
        </div>
      </div>
    </div>
  );
};
