import React from 'react';
import { howItWorksSteps } from '../data/merchData';
import { MessageSquareShare, FileCheck, Flame, Truck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <MessageSquareShare key="1" className="w-6 h-6 text-[#E5382C]" />,
    <FileCheck key="2" className="w-6 h-6 text-[#E5382C]" />,
    <Flame key="3" className="w-6 h-6 text-[#E5382C]" />,
    <Truck key="4" className="w-6 h-6 text-[#E5382C]" />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <p className="text-xs font-bold text-[#E5382C] uppercase tracking-widest">
            WORKSHOP STEPS · PRECISION PROCESS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight">
            HOW YOUR MERCH <span className="text-[#E5382C]">COMES TO LIFE</span>
          </h2>
          <p className="text-base text-[#635F56] leading-relaxed">
            From your raw artwork sketch to doorstep delivery in 4 streamlined workshop milestones.
          </p>
        </div>

        {/* Steps Grid with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-[#E8E4DC] -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-white border border-[#E8E4DC] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-atelier shadow-atelier-hover group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF6ED] border border-[#EBE3D3] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {stepIcons[idx]}
                    </div>
                    <span className="font-display text-4xl font-extrabold text-[#DCD6CA] group-hover:text-[#E5382C]/40 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-[#E5382C] uppercase tracking-wider block mb-1">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#141414] mb-3 group-hover:text-[#E5382C] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#635F56] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0ECE4] flex items-center gap-1.5 text-xs text-[#8C867A] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5382C]" />
                  <span>Phase {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
