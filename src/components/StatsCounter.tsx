import React from 'react';
import { statsCounters } from '../data/merchData';

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF9F5] border-y border-[#E8E4DC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsCounters.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#141414] font-display tracking-tight tabular-nums">
                {stat.value.toLocaleString()}
                <span className="text-[#E5382C] ml-0.5">{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#736E65] font-bold tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
