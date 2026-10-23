import React from 'react';
import { businessConfig, getWhatsAppLink } from '../data/config';
import { MapPin, Phone, Mail, Clock, MessageSquare, ExternalLink, Instagram, Facebook } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-bold text-[#E5382C] uppercase tracking-widest">
            WORKSHOP & SHOWROOM · DHURV NAGAR NASHIK
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight">
            VISIT OUR <span className="text-[#E5382C]">ATELIER</span>
          </h2>
          <p className="text-base text-[#635F56] leading-relaxed">
            Drop by our workshop in Dhruv Nagar, Nashik to feel fabric swatches, inspect real print samples, or discuss bulk merchandise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white border border-[#E8E4DC] rounded-3xl p-8 flex flex-col justify-between shadow-atelier">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#E5382C] tracking-widest uppercase">
                  THE WORKSHOP
                </span>
                <h3 className="text-3xl font-bold font-display text-[#141414] mt-1">
                  {businessConfig.shopName}
                </h3>
                <p className="text-xs text-[#736E65] mt-0.5 font-medium">{businessConfig.tagline}</p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 pt-2">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#EBE3D3] text-[#E5382C] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#736E65] uppercase tracking-wider">Address</h4>
                    <p className="text-sm font-semibold text-[#141414] mt-0.5 leading-snug">
                      {businessConfig.address.line1}, {businessConfig.address.landmark},<br />
                      {businessConfig.address.area}, {businessConfig.address.city},<br />
                      {businessConfig.address.state} - {businessConfig.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#EBE3D3] text-[#E5382C] flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#736E65] uppercase tracking-wider">Call & WhatsApp</h4>
                    <a
                      href={`tel:+${businessConfig.phoneRaw}`}
                      className="text-sm font-bold text-[#141414] hover:text-[#E5382C] transition-colors block mt-0.5"
                    >
                      {businessConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#EBE3D3] text-[#E5382C] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#736E65] uppercase tracking-wider">Email Enquiries</h4>
                    <a
                      href={`mailto:${businessConfig.email}`}
                      className="text-sm font-semibold text-[#141414] hover:text-[#E5382C] transition-colors block mt-0.5"
                    >
                      {businessConfig.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FAF6ED] border border-[#EBE3D3] text-[#E5382C] flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#736E65] uppercase tracking-wider">Hours</h4>
                    <p className="text-sm text-[#141414] font-semibold mt-0.5">
                      {businessConfig.workingHours.days}: <span className="text-[#E5382C]">{businessConfig.workingHours.time}</span>
                    </p>
                    <p className="text-xs text-[#736E65] mt-0.5">
                      Sunday: {businessConfig.workingHours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Buttons */}
            <div className="pt-8 border-t border-[#F0ECE4] space-y-3">
              <a
                href={getWhatsAppLink('Hi The Merch Foundry, I would like to visit your workshop or discuss an order.')}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#E5382C] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#CC2F24] transition-all shadow-sm"
              >
                <MessageSquare size={16} />
                <span>Message on WhatsApp</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={businessConfig.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC] hover:bg-[#E5382C] text-[#141414] hover:text-white transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href={businessConfig.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC] hover:bg-[#E5382C] text-[#141414] hover:text-white transition-colors shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook size={17} />
                </a>
                <a
                  href={businessConfig.socials.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-[#FAF9F5] border border-[#E8E4DC] hover:bg-[#E5382C] text-[#141414] hover:text-white transition-colors shadow-sm"
                  aria-label="Google Maps"
                >
                  <MapPin size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 bg-white border border-[#E8E4DC] rounded-3xl overflow-hidden shadow-atelier min-h-[420px] flex flex-col">
            <div className="p-4 bg-[#FAF9F5] border-b border-[#E8E4DC] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#141414] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#E5382C]" />
                <span>Swami Park, Dhruv Nagar, Nashik</span>
              </div>
              <a
                href={businessConfig.socials.maps}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#E5382C] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <div className="w-full flex-1 min-h-[360px] relative bg-[#F5F3EF]">
              <iframe
                title="The Merch Foundry Nashik Location Map"
                src={businessConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
