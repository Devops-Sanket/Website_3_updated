import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFadingOut(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 6;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#FAF9F5] flex flex-col items-center justify-center transition-opacity duration-600 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
        {/* Silhouette Logo mark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 filter grayscale">
          <img
           src={`${import.meta.env.BASE_URL}logo.svg`}
           alt="Foundry Mark"
           className="w-full h-full object-contain"
          />
        </div>

        {/* Rising Ink Fill */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden transition-all duration-150 ease-out"
          style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
        >
          <img
           src={`${import.meta.env.BASE_URL}logo.svg`}
           alt="The Merch Foundry Logo"
           className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
      </div>

      {/* Brand title & Tagline */}
      <div className="text-center space-y-1">
        <h2 className="font-display text-xl text-[#141414] tracking-widest font-extrabold uppercase">
          THE MERCH FOUNDRY
        </h2>
        <p className="text-xs text-[#E5382C] font-bold tracking-widest uppercase">
          Where merch is crafted
        </p>
      </div>

      {/* Progress Line */}
      <div className="w-44 h-1 bg-[#E8E4DC] rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-[#E5382C] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-[11px] text-[#8C867A] mt-2 font-mono font-medium">{progress}%</span>
    </div>
  );
};
