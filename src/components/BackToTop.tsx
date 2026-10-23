import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-white border border-[#E8E4DC] text-[#141414] hover:border-[#E5382C] hover:text-[#E5382C] hover:scale-105 shadow-md transition-all duration-300"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
