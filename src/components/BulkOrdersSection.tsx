import React, { useState } from 'react';
import { getWhatsAppLink } from '../data/config';
import { Building2, GraduationCap, Trophy, Users, Send } from 'lucide-react';

export const BulkOrdersSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
    product: 'Custom T-Shirts',
    quantity: '50',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🏢 *BULK & CORPORATE QUOTE REQUEST*\n` +
      `• Name: ${formData.name}\n` +
      `• Phone/WhatsApp: ${formData.phone}\n` +
      `• Organization/Event: ${formData.organization || 'Individual'}\n` +
      `• Product: ${formData.product}\n` +
      `• Estimated Quantity: ${formData.quantity} units\n` +
      `• Notes: ${formData.message || 'Need wholesale pricing & digital proof'}\n\n` +
      `Please provide quotation and sample production timeline!`;

    window.open(getWhatsAppLink(text), '_blank');
  };

  return (
    <section id="bulk-orders" className="py-24 bg-[#F5F3EF] relative overflow-hidden border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-[#E8E4DC] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-atelier relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-bold text-[#E5382C] uppercase tracking-widest">
                WHOLESALE & INSTITUTIONAL MERCHANDISE
              </p>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight leading-tight">
                COLLEGE FESTS, TEAMS & <span className="text-[#E5382C]">CORPORATE KITS</span>
              </h2>

              <p className="text-base text-[#635F56] leading-relaxed">
                Need 50, 500, or 5,000 pieces? Get bespoke merchandise packs tailored for college symposiums, student committees, startup teams, marathon kits, and brand launch merchandise.
              </p>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC]">
                  <GraduationCap className="w-5 h-5 text-[#E5382C] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#141414]">College Fests & Batch Hoodies</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC]">
                  <Building2 className="w-5 h-5 text-[#E5382C] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#141414]">Corporate Welcome Kits</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC]">
                  <Trophy className="w-5 h-5 text-[#E5382C] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#141414]">Sports Teams & Tournaments</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC]">
                  <Users className="w-5 h-5 text-[#E5382C] flex-shrink-0" />
                  <span className="text-xs font-bold text-[#141414]">Tiered Wholesale Savings</span>
                </div>
              </div>
            </div>

            {/* Right: Rapid WhatsApp Quote Form */}
            <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E8E4DC] rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-bold font-display text-[#141414] mb-1">
                REQUEST A BULK QUOTE
              </h3>
              <p className="text-xs text-[#736E65] mb-6">
                Receive an itemized commercial proposal within 30 minutes on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#635F56] font-bold block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#635F56] font-bold block mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98230..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#635F56] font-bold block mb-1">Product Needed</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-white border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C]"
                    >
                      <option value="Custom T-Shirts">Custom T-Shirts</option>
                      <option value="Caps & Headwear">Caps & Headwear</option>
                      <option value="Coffee & Magic Mugs">Coffee & Magic Mugs</option>
                      <option value="Stainless Steel Flasks">Stainless Steel Flasks</option>
                      <option value="Gaming Mouse Pads">Gaming Mouse Pads</option>
                      <option value="Complete Welcome Box Kit">Complete Welcome Box Kit</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-[#635F56] font-bold block mb-1">Approximate Quantity</label>
                    <input
                      type="number"
                      min="5"
                      placeholder="e.g. 50"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-white border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-[#635F56] font-bold block mb-1">Company, College, or Event Name</label>
                  <input
                    type="text"
                    placeholder="e.g. KBT College Tech Fest 2026"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-white border border-[#E8E4DC] rounded-xl px-3.5 py-2.5 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#635F56] font-bold block mb-1">Requirements / Target Deadline</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your print colors, placement, or delivery date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#E8E4DC] rounded-xl px-3.5 py-2 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#E5382C] hover:bg-[#CC2F24] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(229,56,44,0.3)] active:scale-95 transition-all"
                >
                  <Send size={16} />
                  <span>Get Instant WhatsApp Quotation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
