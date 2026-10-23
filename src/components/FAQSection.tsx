import React, { useState } from 'react';
import { faqItems } from '../data/merchData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F5F3EF] relative overflow-hidden border-t border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-[#E5382C] uppercase tracking-widest">
            HELP & COMMON INQUIRIES · TRANSPARENT ANSWERS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight">
            FREQUENTLY ASKED <span className="text-[#E5382C]">QUESTIONS</span>
          </h2>
          <p className="text-base text-[#635F56] leading-relaxed">
            Everything you need to know about our minimums, wash durability, design files, and Nashik pickup.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqItems.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-white border-[#E5382C] shadow-atelier'
                    : 'bg-white/80 border-[#E8E4DC] hover:border-[#D5CEBF]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-[#141414] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg text-white transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#E5382C]' : 'bg-[#141414]'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#635F56] leading-relaxed border-t border-[#F0ECE4]">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[11px] font-bold text-[#E5382C] uppercase tracking-wider">
                      Topic: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
