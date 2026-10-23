import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/config';
import { MessageSquare, Flame } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {isHovered && (
        <div className="bg-white border border-[#E8E4DC] text-[#141414] text-xs font-bold py-2 px-3.5 rounded-xl shadow-lg animate-fade-in flex items-center gap-2">
          <Flame size={14} className="text-[#E5382C]" />
          <span>Chat with Foundry Master</span>
        </div>
      )}

      {/* Button */}
      <a
        href={getWhatsAppLink('Hello The Merch Foundry, I want to enquire about custom printing!')}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full bg-[#E5382C] text-white flex items-center justify-center shadow-[0_6px_25px_rgba(229,56,44,0.4)] hover:bg-[#CC2F24] hover:scale-105 active:scale-95 transition-all duration-300 relative group"
        aria-label="Direct WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full border-2 border-[#E5382C] animate-ping opacity-25 pointer-events-none" />
        <MessageSquare size={26} className="text-white" />
      </a>
    </div>
  );
};
