import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const marqueeItems = [
    'T-Shirt Printing',
    'Cap',
    'Mug',
    'Bottle',
    'Mouse Pad',
    'Kushan pillows',
    'Trophy & Decorative Plate',
    'Hoodies',
    'Sweatshirt',
    'DTF Printing'
  ];

  return (
    <div className="relative w-full bg-[#E5382C] py-3.5 overflow-hidden border-y border-[#D62E22] select-none shadow-sm">
      <div className="flex animate-marquee-light whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center mx-5">
            <span className="font-condensed text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">
              {item}
            </span>
            <span className="ml-10 text-white/70 text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
