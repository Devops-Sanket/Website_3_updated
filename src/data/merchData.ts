/**
 * Data store for THE MERCH FOUNDRY
 * All products, 3D showcase slides, testimonials, FAQs, and gallery items.
 */

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  startingPrice: number;
  popular?: boolean;
  minOrder: string;
  methods: string[];
  description: string;
  badge?: string;
  features: string[];
  imagePlaceholder: string;
}

export interface ShirtSlide {
  id: string;
  name: string;
  tagline: string;
  shirtColor: string;
  textColor: string;
  artStyle: string;
  designType: 'cyber-panther' | 'free-your-mind' | 'never-look-back' | 'foundry-heritage' | 'vintage-navy';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'T-Shirts' | 'Caps' | 'Mugs' | 'Bottles' | 'Others';
  method: string;
  imageUrl: string;
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  review: string;
  rating: number;
  avatarText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const merchProducts: ProductItem[] = [
  {
    id: 't-shirts',
    name: 'T-Shirt Printing',
    tagline: 'Oversized, Polo, Round Neck & Activewear',
    startingPrice: 199,
    popular: true,
    minOrder: '1 Piece',
    methods: ['Direct-to-Film (DTF)'],
    description: 'Our primary specialty: ultra-vibrant, high-density Direct-to-Film (DTF) apparel printing on 100% combed cotton. High stretch, razor-sharp details, and 50+ wash durability.',
    badge: '★ PRIMARY PRODUCT',
    features: [
      'Premium 180–240 GSM Combed Cotton',
      'Ultra HD Direct-to-Film (DTF) Color Output',
      'Zero Minimum Order – Single to Bulk Runs',
      'Bio-washed, Preshrunk & Anti-Pill Fabric'
    ],
    imagePlaceholder: new URL('../assets/images/dtf_streetwear_white_1792140693459.jpg', import.meta.url).href,
  },
  {
    id: 'caps',
    name: 'Cap Printing',
    tagline: 'Snapbacks, Baseball Caps & Structured Twill',
    startingPrice: 149,
    popular: false,
    minOrder: '1 Piece',
    methods: ['Direct-to-Film (DTF)', 'Sublimation'],
    description: 'Structured baseball caps, trucker mesh caps, and snapbacks with vivid front panel & visor custom prints for brand merch, sports teams, and events.',
    badge: 'POPULAR',
    features: [
      'Heavyweight Structured Cotton Twill',
      'Curved & Flat Visor Profile Options',
      'High-precision Front Panel DTF Printing',
      'Adjustable Snapback & Brass Buckle Closures'
    ],
    imagePlaceholder: new URL('../assets/images/ref_cap_printing_1792144777190.jpg', import.meta.url).href,
  },
  {
    id: 'mugs',
    name: 'Mug Printing',
    tagline: 'Ceramic Photo Mugs, Magic Mugs & Dual-Tone',
    startingPrice: 99,
    popular: false,
    minOrder: '1 Piece',
    methods: ['HD Sublimation', 'DTF Heat Transfer'],
    description: 'Grade-A 330ml glossy white ceramic mugs, colour inside mugs, and heat-sensitive magic mugs printed with razor-sharp 360-degree photo wrap designs.',
    badge: 'GIFTING FAVORITE',
    features: [
      'Premium 330ml / 11oz Food-Grade Ceramic',
      '100% Microwave & Dishwasher Safe',
      'Vibrant Edge-to-Edge 300+ DPI Photo Wrap',
      'Color-Lock Scratch-Resistant Glaze'
    ],
    imagePlaceholder: new URL('../assets/images/ref_mug_printing_1792144778250.jpg', import.meta.url).href,
  },
  {
    id: 'bottles',
    name: 'Bottle Printing',
    tagline: '750ml Aluminum & Stainless Steel Sippers',
    startingPrice: 179,
    popular: false,
    minOrder: '1 Piece',
    methods: ['Sublimation', 'UV Rotary DTF'],
    description: '750ml sports sippers, vacuum-insulated temperature flasks, and gym bottles personalized with seamless cylindrical graphics, corporate logos, and names.',
    badge: 'TRENDING',
    features: [
      '750ml Food-Grade Stainless Steel & Aluminum',
      'Leakproof Carabiner Sport Cap & Loop Lid',
      'Full-Height Cylindrical 360° Branding',
      'Chip-resistant & Sweat-proof Exterior Coat'
    ],
    imagePlaceholder: new URL('../assets/images/ref_bottle_printing_1792144778432.jpg', import.meta.url).href,
  },
  {
    id: 'mouse-pads',
    name: 'Mouse Pad Printing',
    tagline: 'Standard Ergonomic & Extended XXL Desk Mats',
    startingPrice: 129,
    popular: false,
    minOrder: '1 Piece',
    methods: ['HD Dye-Sublimation', 'DTF Transfer'],
    description: 'High-precision micro-woven gaming mousepads and extended desk mats customized with vibrant full-bleed artwork, company logos, and desk aesthetics.',
    badge: 'HOT WORKSPACE',
    features: [
      'Micro-textured Speed & Control Cloth Surface',
      'Anti-slip Textured Natural Rubber Base',
      'Precision Anti-Fray Stitched Edge Seams',
      'Washable & Fade-Resistant HD Printing'
    ],
    imagePlaceholder: new URL('../assets/images/ref_mousepad_printing_1792144779611.jpg', import.meta.url).href,
  },
  {
    id: 'trophies',
    name: 'Trophy & Decorative Plate Printing',
    tagline: 'Crystal Awards, Acrylic Mementos & Metal Plates',
    startingPrice: 299,
    popular: false,
    minOrder: '1 Piece',
    methods: ['Direct UV Flatbed', 'Sublimation Transfer'],
    description: 'Prestigious corporate awards, beveled optical crystal trophies, custom wooden mementos, and printed decorative commemorative display plates.',
    badge: 'CORPORATE',
    features: [
      'Optical-Grade Beveled Crystal & Acrylic',
      'Custom Metallic & Ceramic Decorative Plates',
      'High-Gloss Direct UV Full-Color & Gold Accents',
      'Supplied in Premium Velvet Presentation Gift Box'
    ],
    imagePlaceholder: new URL('../assets/images/ref_trophy_printing_1792144780032.jpg', import.meta.url).href,
  }
];

export const shirtSlides: ShirtSlide[] = [
  {
    id: 'cyber-panther',
    name: 'Cyber Panther Streetwear',
    tagline: 'Futuristic Mecha Graphic & Kanji Accents',
    shirtColor: '#B6D926', // Vibrant Neon Lime (model-598)
    textColor: '#151515',
    artStyle: 'Neo-Tokyo Streetwear',
    designType: 'cyber-panther'
  },
  {
    id: 'free-your-mind',
    name: 'Free Your Mind Retro',
    tagline: '70s Psychedelic Sun & Meditating Silhouettes',
    shirtColor: '#17B8A6', // Turquoise Teal (model-596)
    textColor: '#FFFFFF',
    artStyle: 'Retro Screenprint',
    designType: 'free-your-mind'
  },
  {
    id: 'never-look-back',
    name: 'Never Look Back Streetwear',
    tagline: 'Fire Typography, Skate Skull & Ink Splatter',
    shirtColor: '#F5F5F3', // Crisp White (3D.jpg)
    textColor: '#0D0D0D',
    artStyle: 'Gothic Skate Streetwear',
    designType: 'never-look-back'
  },
  {
    id: 'foundry-heritage',
    name: 'The Merch Foundry Original',
    tagline: 'Vintage Screen Press & Molten Ladle Emblem',
    shirtColor: '#121212', // Deep Pitch Black
    textColor: '#F3E9D2',
    artStyle: 'Heritage Foundry',
    designType: 'foundry-heritage'
  },
  {
    id: 'vintage-navy',
    name: 'Foundry Athletic Club',
    tagline: 'Heavy Distressed College Stencil in Coral & Cream',
    shirtColor: '#1A2942', // Classic Deep Navy
    textColor: '#F2584E',
    artStyle: 'Vintage College',
    designType: 'vintage-navy'
  }
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Share Your Idea',
    desc: 'Send your vector art, logo, rough sketch, or photo via WhatsApp or our design form. Need art? Our in-house artists will draft it for free.',
    tag: 'Quick Consult'
  },
  {
    step: '02',
    title: 'Digital 3D Mockup',
    desc: 'We render an accurate 3D preview showing real colors, placement coordinates, fabric drape, and print dimensions for your approval.',
    tag: 'Guaranteed Precision'
  },
  {
    step: '03',
    title: 'Precision Crafting',
    desc: 'Using Japanese digital DTF machines, Italian plastisol inks, or heavy-duty screen carousels, every piece is cured at 165°C for maximum durability.',
    tag: 'Master Production'
  },
  {
    step: '04',
    title: 'Pickup / Express Delivery',
    desc: 'Pick up directly from our workshop at Swami Park, Dhruv Nagar, or receive doorstep tracked delivery anywhere in Nashik & across India.',
    tag: 'Ready to Wear'
  }
];

export const whyChooseUsCards = [
  {
    icon: 'ShieldCheck',
    title: 'Wash-Proof Inks',
    desc: 'Formulated with curing accelerators that survive 50+ wash cycles without fading, flaking, or hairline cracking.'
  },
  {
    icon: 'Sparkles',
    title: 'Premium Combed Cotton',
    desc: 'Silky smooth 100% bio-washed and silicone-treated cotton that feels luxurious on skin with zero shrinkage.'
  },
  {
    icon: 'PackageCheck',
    title: 'Low Minimum Orders',
    desc: 'From a single custom personalized birthday gift to 10,000 corporate uniforms, we treat every order with pride.'
  },
  {
    icon: 'Zap',
    title: 'Lightning 24h Turnaround',
    desc: 'Express rush printing available for last-minute college festivals, marathons, startup launches, and celebrations.'
  },
  {
    icon: 'BadgePercent',
    title: 'Tiered Bulk Savings',
    desc: 'Unbeatable wholesale rates for colleges, cafes, fitness gyms, tech events, and merchandise resellers.'
  },
  {
    icon: 'Palette',
    title: 'Free Mockup Assistance',
    desc: 'Our graphic designers help fix low-resolution images, vectorize logos, and verify placement at no extra fee.'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Cyberpunk Neon Streetwear Oversized Tee',
    category: 'T-Shirts',
    method: 'High-Density DTF Print',
    imageUrl: new URL('../assets/images/dtf_neon_lime_cyber_1792140696895.jpg', import.meta.url).href,
    client: 'Underground Nashik Club'
  },
  {
    id: 'g2',
    title: 'Custom 750ml Aluminum & Steel Sports Sipper',
    category: 'Bottles',
    method: 'Full-Height Rotary UV & Sublimation',
    imageUrl: new URL('../assets/images/ref_bottle_printing_1792144778432.jpg', import.meta.url).href,
    client: 'Apex Fitness Nashik'
  },
  {
    id: 'g3',
    title: 'Structured Baseball Cap & Gold Emblem',
    category: 'Caps',
    method: 'Precision Front Panel DTF Transfer',
    imageUrl: new URL('../assets/images/ref_cap_printing_1792144777190.jpg', import.meta.url).href,
    client: 'Brew & Beans Cafe'
  },
  {
    id: 'g4',
    title: 'Never Look Back Heavyweight Skate Tee',
    category: 'T-Shirts',
    method: 'Direct-to-Film (DTF) Print',
    imageUrl: new URL('../assets/images/dtf_streetwear_white_1792140693459.jpg', import.meta.url).href,
    client: 'KBT Engineering Fest'
  },
  {
    id: 'g5',
    title: 'Glossy Ceramic Photo Wrap Mug',
    category: 'Mugs',
    method: 'High-Gloss 360° Sublimation',
    imageUrl: new URL('../assets/images/ref_mug_printing_1792144778250.jpg', import.meta.url).href,
    client: 'TechVanguard Nashik'
  },
  {
    id: 'g6',
    title: 'XXL Micro-Textured Gaming Desk Mat',
    category: 'Others',
    method: 'HD Full-Bleed Dye Sublimation',
    imageUrl: new URL('../assets/images/ref_mousepad_printing_1792144779611.jpg', import.meta.url).href,
    client: 'Titan Esports Lounge'
  },
  {
    id: 'g7',
    title: 'Faceted Crystal Award & Commemorative Plate',
    category: 'Others',
    method: 'Direct UV Flatbed & Foil Accent',
    imageUrl: new URL('../assets/images/ref_trophy_printing_1792144780032.jpg', import.meta.url).href,
    client: 'Nashik Chamber of Commerce'
  },
  {
    id: 'g8',
    title: '70s Free Your Mind Retro Sun Tee',
    category: 'T-Shirts',
    method: 'Direct-to-Film (DTF) Vibrant Print',
    imageUrl: new URL('../assets/images/dtf_teal_retro_sun_1792140697365.jpg', import.meta.url).href,
    client: 'Sula Fest Collective'
  }
];

export const statsCounters = [
  { value: 5000, suffix: '+', label: 'Happy Customers' },
  { value: 50000, suffix: '+', label: 'Products Printed' },
  { value: 8, suffix: '+', label: 'Years of Experience' },
  { value: 12000, suffix: '+', label: 'Custom Designs Crafted' }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Siddharth Deshmukh',
    role: 'Convener',
    organization: 'Sandip University Youth Fest',
    review: 'We ordered 43 custom oversized tees for our tech Event. The Merch Foundry Delivered 2 days ahead of schedule. The screen-print sharpness and fabric feel were the best we’ve had in 2.5 years!',
    rating: 5,
    avatarText: 'SD'
  },
  {
    id: 't2',
    name: 'Pooja Kulkarni',
    role: 'Manager At',
    organization: 'Aditi MGU',
    review: 'Our staff polo t-shirts look ultra professional, and the prints held up even after 20 commercial wash cycles. We weren’t sure about TMF before ordering, but the quality exceeded our expectations. Thank you, TMF!',
    rating: 5,
    avatarText: 'PK'
  },
  {
    id: 't3',
    name: 'Aditya Patil',
    role: 'Lead Singer',
    organization: 'Godavari Groove Indie Band',
    review: 'The 3D mockup tool and the attention to detail on our merch skull back-prints blew us away. The ink red matches our album color code 100%. Highly recommended in Nashik!',
    rating: 5,
    avatarText: 'AP'
  },
  {
    id: 't4',
    name: 'Neha Shinde',
    role: 'HR Manager',
    organization: 'FinEdge Technologies Nashik',
    review: 'Seamless bulk welcome kits (hoodie, temperature water bottle, desk pad). The team accommodated our urgent timeline without compromising on packaging quality.',
    rating: 5,
    avatarText: 'NS'
  }
];

export const faqItems: FAQItem[] = [
  {
    category: 'Ordering & Quantities',
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'For DTF t-shirts, ceramic mugs, and laser-etched sippers, our MOQ is just 1 piece! You can order single custom samples or gifts. For traditional screen printing carousels and 3D cap embroidery, our MOQ starts at 5 to 10 pieces for optimal pricing.'
  },
  {
    category: 'Production Time',
    question: 'How fast can you deliver my order?',
    answer: 'Standard orders take 2 to 4 business days. Need it faster? We offer 24-hour express rush service for emergency corporate events, college fests, and weekend celebrations across Nashik.'
  },
  {
    category: 'Artwork & Files',
    question: 'Which file formats do you accept for custom printing?',
    answer: 'We accept AI, EPS, PDF, SVG, CDR, and high-resolution PNG/JPEG files (300 DPI recommended). If you only have a low-res image or sketch, our in-house design foundry will enhance and vectorize it for free!'
  },
  {
    category: 'Quality & Durability',
    question: 'Will the prints crack, peel, or fade in the washing machine?',
    answer: 'No. All our fabrics are pre-shrunk, bio-washed cotton and poly-blends. We cure every print with industrial heat presses at 165°C using premium eco-certified inks that comfortably endure 50+ wash cycles.'
  },
  {
    category: 'Pickup & Delivery',
    question: 'Where can I collect my order in Nashik, or do you deliver?',
    answer: 'You can pick up directly from our workshop at Swami Park, Dhruv Nagar, Nashik. We also offer same-day Dunzo/Porter delivery within Nashik, and express tracked courier delivery throughout Maharashtra and across India.'
  },
  {
    category: 'Payment Options',
    question: 'What payment methods do you accept?',
    answer: 'We accept Google Pay, PhonePe, Paytm, UPI QR, Bank NEFT/RTGS, and all major Credit/Debit Cards. For corporate bulk orders, we provide GST invoices with 50% advance and 50% upon dispatch.'
  }
];

/**
 * Customizer price estimator
 */
export const calculateEstimatePrice = (
  productType: 'tshirt' | 'polo' | 'hoodie' = 'tshirt',
  placement: 'front' | 'back' | 'both' = 'front',
  quantity: number = 1
) => {
  let basePrice = 299;
  if (productType === 'polo') basePrice = 449;
  if (productType === 'hoodie') basePrice = 799;

  let placementAddon = 0;
  if (placement === 'both') placementAddon = 120;

  let unitPrice = basePrice + placementAddon;

  // Quantity tier discounts
  if (quantity >= 50) unitPrice = Math.round(unitPrice * 0.65);
  else if (quantity >= 25) unitPrice = Math.round(unitPrice * 0.75);
  else if (quantity >= 10) unitPrice = Math.round(unitPrice * 0.85);
  else if (quantity >= 5) unitPrice = Math.round(unitPrice * 0.92);

  return {
    unitPrice,
    totalPrice: unitPrice * quantity,
    savingsPercent: quantity >= 50 ? 35 : quantity >= 25 ? 25 : quantity >= 10 ? 15 : quantity >= 5 ? 8 : 0
  };
};
