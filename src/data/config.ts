/**
 * Business Configuration for THE MERCH FOUNDRY
 * Easily edit contact numbers, addresses, social handles, and business hours here.
 */

export interface BusinessConfig {
  shopName: string;
  tagline: string;
  shortDesc: string;
  phoneDisplay: string;
  phoneRaw: string; // international format without spaces for tel: and wa.me
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  workingHours: {
    days: string;
    time: string;
    sunday: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    maps: string;
  };
  mapEmbedUrl: string;
}

export const businessConfig: BusinessConfig = {
  shopName: 'THE MERCH FOUNDRY',
  tagline: 'Where merch is crafted',
  shortDesc: 'Custom T-shirts, caps, mugs, bottles & corporate merchandise printed with master craftsmanship in Nashik.',
  phoneDisplay: '+91 98230 45678',
  phoneRaw: '919823045678',
  whatsappNumber: '919823045678',
  email: 'craft@themerchfoundry.com',
  address: {
    line1: 'Shop No. 4, Ground Floor',
    landmark: 'Near Swami Samarth Mandir',
    area: 'Swami Park, Dhruv Nagar',
    city: 'Nashik',
    state: 'Maharashtra',
    pincode: '422007',
    country: 'India',
    full: 'Swami Park, Dhruv Nagar, Nashik, Maharashtra 422007, India'
  },
  workingHours: {
    days: 'Monday – Saturday',
    time: '10:00 AM – 8:30 PM',
    sunday: 'Closed (Pre-booked bulk pickups available)'
  },
  socials: {
    instagram: 'https://instagram.com/themerchfoundry',
    facebook: 'https://facebook.com/themerchfoundry',
    whatsapp: 'https://wa.me/919823045678?text=Hello%20The%20Merch%20Foundry%2C%20I%20would%20like%20to%20enquire%20about%20custom%20merchandise.',
    maps: 'https://maps.google.com/?q=Swami+Park+Dhruv+Nagar+Nashik'
  },
  // Embedded Google Map centered on Swami Park, Dhruv Nagar, Nashik
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8821946896593!2d73.7486121!3d20.0142345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb9f23fa469%3A0x6b72a0c644c0bb6f!2sDhruv%20Nagar%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};

/**
 * Helper to build custom WhatsApp enquiry links
 */
export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
