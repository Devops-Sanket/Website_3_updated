import React, { useState, useRef } from 'react';
import { calculateEstimatePrice } from '../data/merchData';
import { getWhatsAppLink } from '../data/config';
import { 
  Upload, 
  Type, 
  Send, 
  Image as ImageIcon, 
  Move, 
  RotateCcw, 
  Sparkles,
  Maximize2,
  Check,
  Layers,
  Sliders
} from 'lucide-react';

export type GenderModel = 'men' | 'women';
export type PositionPresetId = 'left-corner' | 'center' | 'right-corner' | 'high-chest' | 'full-front' | 'lower-hem';

interface PositionPreset {
  id: PositionPresetId;
  label: string;
  shortLabel: string;
  x: number; // percentage from left
  y: number; // percentage from top
  scale: number;
  description: string;
}

const POSITION_PRESETS: PositionPreset[] = [
  { id: 'left-corner', label: 'Left Corner / Pocket', shortLabel: 'Left Corner', x: 37, y: 32, scale: 0.8, description: 'Left chest / pocket crest' },
  { id: 'center', label: 'Center Chest', shortLabel: 'Center', x: 50, y: 36, scale: 1.0, description: 'Standard front center' },
  { id: 'right-corner', label: 'Right Corner', shortLabel: 'Right Corner', x: 63, y: 32, scale: 0.8, description: 'Right chest placement' },
  { id: 'high-chest', label: 'High Chest / Collar', shortLabel: 'High Chest', x: 50, y: 26, scale: 0.85, description: 'Near collar / neckline' },
  { id: 'full-front', label: 'Full Front / Large', shortLabel: 'Full Front', x: 50, y: 40, scale: 1.35, description: 'Oversized statement artwork' },
  { id: 'lower-hem', label: 'Lower Corner / Hem', shortLabel: 'Lower Hem', x: 37, y: 62, scale: 0.75, description: 'Streetwear corner badge' },
];

export type ShirtTypeId = 'tshirt' | 'polo' | 'hoodie';

export interface ModelEmbedConfig {
  title: string;
  id: string;
  name: string;
  categoryLabel: string;
}

export const APPAREL_3D_MODELS: Record<ShirtTypeId, Record<GenderModel, ModelEmbedConfig>> = {
  tshirt: {
    men: {
      title: 'T Shirt',
      id: '08f28f3c33494de7a29fd255e64441bf',
      name: "Men's Crewneck Tee",
      categoryLabel: 'Crewneck Tee',
    },
    women: {
      title: 'Female White Causal Tucked-in T- Shirt',
      id: 'fcbc4777e10144ec9a51d8a2b0204c28',
      name: "Women's Casual Tee",
      categoryLabel: 'Crewneck Tee',
    },
  },
  polo: {
    men: {
      title: 'Men Short Sleeved Solid Color Polo',
      id: '670dad551f4243e39f116f5e5e038a5e',
      name: "Men's Collared Polo",
      categoryLabel: 'Collared Polo',
    },
    women: {
      title: 'Women Classic Strip Polo Shirt',
      id: '43470f9b12b64253bdeb41d337e7c9a3',
      name: "Women's Strip Polo Shirt",
      categoryLabel: 'Collared Polo',
    },
  },
  hoodie: {
    men: {
      title: 'Men Zip-up Hoodie',
      id: '8e78ba296dfe40749caa57fb4d4e318f',
      name: "Men's Zip-up Hoodie",
      categoryLabel: 'Warm Hoodie',
    },
    women: {
      title: 'Women Hooded T- Shirt',
      id: '297d2abf5bb9475ab5fd0eb1bc0fee4f',
      name: "Women's Hooded T-Shirt",
      categoryLabel: 'Warm Hoodie',
    },
  },
};

export const TShirtCustomizer: React.FC = () => {
  // Gender 3D Model Option: M (men) or W (women)
  const [genderModel, setGenderModel] = useState<GenderModel>('men');
  
  // Fabric Base (Studio Clean White)
  const shirtColor = '#FFFFFF';
  
  // Apparel Silhouette (Primary: Crewneck Tee)
  const [shirtType, setShirtType] = useState<ShirtTypeId>('tshirt');
  const [size, setSize] = useState('L');
  const [quantity, setQuantity] = useState(10);
  const [placement, setPlacement] = useState<'front' | 'back' | 'both'>('front');
  
  // Custom Typography & Artwork
  const [customText, setCustomText] = useState('FOUNDRY 2026');
  const [textColor, setTextColor] = useState('#141414');
  const [fontFamily, setFontFamily] = useState('Bebas Neue');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'text' | 'image'>('text');
  
  // View mode: 3D Model (default) or 2D Vector Blueprint
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [active2dView, setActive2dView] = useState<'front' | 'back'>('front');

  // Adjustable Design Position on 3D Model
  const [selectedPreset, setSelectedPreset] = useState<PositionPresetId>('center');
  const [offsetX, setOffsetX] = useState(0); // -20 to +20 fine tune
  const [offsetY, setOffsetY] = useState(0); // -20 to +20 fine tune
  const [customScale, setCustomScale] = useState(1.0); // 0.6 to 1.8
  const [showFineTune, setShowFineTune] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', 'Oversized'];
  const fonts = ['Bebas Neue', 'Outfit', 'Plus Jakarta Sans', 'Impact', 'Courier New'];

  const estimate = calculateEstimatePrice(shirtType, placement, quantity);

  // Position calculation
  const currentPreset = POSITION_PRESETS.find(p => p.id === selectedPreset) || POSITION_PRESETS[1];
  
  // Gender specific coordinate calibration
  const basePosX = genderModel === 'women' ? (currentPreset.x === 37 ? 38 : currentPreset.x === 63 ? 62 : currentPreset.x) : currentPreset.x;
  const basePosY = genderModel === 'women' ? (currentPreset.y + 2) : currentPreset.y;
  
  const computedPosX = Math.min(80, Math.max(20, basePosX + offsetX));
  const computedPosY = Math.min(80, Math.max(15, basePosY + offsetY));
  const finalScale = currentPreset.scale * customScale;

  const activeModel = APPAREL_3D_MODELS[shirtType][genderModel];

  const handleSelectPreset = (presetId: PositionPresetId) => {
    setSelectedPreset(presetId);
    setOffsetX(0);
    setOffsetY(0);
  };

  const handleResetPosition = () => {
    setSelectedPreset('center');
    setOffsetX(0);
    setOffsetY(0);
    setCustomScale(1.0);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setActiveTab('image');
      };
      reader.readAsDataURL(file);
    }
  };

  const generateWhatsAppMessage = () => {
    let msg = `🔥 *CUSTOM MERCH 3D DESIGN REQUEST* 🔥\n`;
    msg += `• Garment: ${activeModel.name} (${genderModel === 'men' ? "Men's Fit - M" : "Women's Fit - W"})\n`;
    msg += `• Silhouette: ${activeModel.categoryLabel.toUpperCase()}\n`;
    msg += `• Size: ${size}\n`;
    msg += `• Design Position: ${currentPreset.label} (X: ${Math.round(computedPosX)}%, Y: ${Math.round(computedPosY)}%)\n`;
    msg += `• Placement: ${placement.toUpperCase()} print\n`;
    msg += `• Quantity: ${quantity} units\n`;
    msg += `• Estimated Price: ₹${estimate.totalPrice} (₹${estimate.unitPrice}/piece)\n`;
    if (activeTab === 'text') {
      msg += `• Custom Text: "${customText}" (${fontFamily} font in ${textColor})\n`;
    } else {
      msg += `• Custom Artwork: Attached graphic / vector logo uploaded\n`;
    }
    msg += `\nPlease review this 3D mockup and confirm production timeline!`;
    return msg;
  };

  return (
    <section id="customizer" className="py-20 bg-[#F5F3EF] relative overflow-hidden border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5382C]/10 border border-[#E5382C]/20 text-[#E5382C] text-xs font-bold uppercase tracking-wider">
            <Sparkles size={13} />
            <span>3D Interactive Studio Customizer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141414] font-display tracking-tight">
            CUSTOM MERCH <span className="text-[#E5382C]">DESIGNER</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635F56] leading-relaxed">
            Experience our 3D T-shirt simulation for Men’s & Women’s fits. Connect fabric dyes, adjust print position across the chest or pockets, and get instant wholesale pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Interactive 3D Model & Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Top Toolbar: Men's/Women's (M/W) Switcher + 3D/Blueprint Toggle */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-4 bg-white border border-[#E8E4DC] p-2 rounded-2xl shadow-sm">
              {/* M or W Option Selector */}
              <div className="flex items-center gap-1.5 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E4DC]">
                <span className="text-[11px] font-bold text-[#736E65] px-2 uppercase tracking-wider">
                  Model:
                </span>
                <button
                  type="button"
                  onClick={() => setGenderModel('men')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    genderModel === 'men'
                      ? 'bg-[#141414] text-white shadow-sm'
                      : 'text-[#635F56] hover:text-[#141414]'
                  }`}
                  title="Men's 3D T-Shirt Model"
                >
                  <span className="w-4 h-4 rounded-full bg-[#E5382C] text-white text-[10px] flex items-center justify-center font-bold">M</span>
                  <span>Men&apos;s Fit</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGenderModel('women')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    genderModel === 'women'
                      ? 'bg-[#141414] text-white shadow-sm'
                      : 'text-[#635F56] hover:text-[#141414]'
                  }`}
                  title="Women's 3D T-Shirt Model"
                >
                  <span className="w-4 h-4 rounded-full bg-[#1B2945] text-white text-[10px] flex items-center justify-center font-bold">W</span>
                  <span>Women&apos;s Fit</span>
                </button>
              </div>

              {/* 3D vs 2D View Switch */}
              <div className="flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-xl border border-[#E8E4DC]">
                <button
                  type="button"
                  onClick={() => setViewMode('3d')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === '3d'
                      ? 'bg-[#E5382C] text-white shadow-sm'
                      : 'text-[#635F56] hover:text-[#141414]'
                  }`}
                >
                  3D Model
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('2d')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === '2d'
                      ? 'bg-[#141414] text-white shadow-sm'
                      : 'text-[#635F56] hover:text-[#141414]'
                  }`}
                >
                  2D Blueprint
                </button>
              </div>
            </div>

            {/* Main Stage: 3D Model or 2D Vector - Fixed Pure White Background */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square max-h-[520px] rounded-2xl bg-white border-2 border-[#E8E4DC] overflow-hidden shadow-atelier flex items-center justify-center">
              {viewMode === '3d' ? (
                /* 3D Model Embed Viewport with Guaranteed Clean White Background & Zero External Watermarks */
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center bg-white">
                  {/* Dynamic 3D Garment Model with third-party headers, avatars, $, share, and logos cropped out */}
                  <div
                    key={`${shirtType}-${genderModel}`}
                    className="sketchfab-embed-wrapper w-full h-full relative overflow-hidden flex items-center justify-center bg-white"
                  >
                    <iframe
                      title={activeModel.title}
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      src={`https://sketchfab.com/models/${activeModel.id}/embed?autostart=1&preload=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0`}
                      className="absolute -top-[58px] left-0 w-full h-[calc(100%+116px)] border-0 bg-white"
                    />
                  </div>

                  {/* Studio Header Bar: 100% THE MERCH FOUNDRY Branded, covering any third-party header */}
                  <div className="absolute top-0 left-0 right-0 h-11 bg-white/95 backdrop-blur-md border-b border-[#E8E4DC] z-10 flex items-center justify-between px-3.5 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5382C] animate-pulse" />
                      <span className="text-xs font-black tracking-tight text-[#141414]">THE MERCH FOUNDRY</span>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FAF9F5] text-[#736E65] border border-[#E8E4DC]">
                        3D Studio Mockup
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#635F56]">
                      <Move size={12} className="text-[#E5382C]" />
                      <span>360° Drag to Orbit</span>
                    </div>
                  </div>

                  {/* Adjustable Design Decal Position Overlay on the 3D Model */}
                  <div
                    className="absolute pointer-events-none transition-all duration-300 ease-out flex items-center justify-center"
                    style={{
                      left: `${computedPosX}%`,
                      top: `${computedPosY}%`,
                      transform: `translate(-50%, -50%) scale(${finalScale})`,
                      maxWidth: '180px',
                      maxHeight: '180px',
                    }}
                  >
                    <div className="relative p-2.5 rounded-lg border-2 border-dashed border-[#E5382C]/70 bg-white/40 backdrop-blur-[2px] shadow-md">
                      {activeTab === 'image' && uploadedImage ? (
                        <img
                          src={uploadedImage}
                          alt="Uploaded artwork on 3D shirt"
                          className="max-w-[120px] max-h-[120px] object-contain drop-shadow-md"
                        />
                      ) : (
                        <div
                          className="text-center font-bold tracking-wider break-words select-none"
                          style={{
                            fontFamily: fontFamily,
                            color: textColor,
                            fontSize: customText.length > 12 ? '17px' : '23px',
                            lineHeight: 1.15,
                            textShadow: textColor === '#FFFFFF' ? '0 1px 3px rgba(0,0,0,0.8)' : '0 1px 2px rgba(255,255,255,0.6)',
                          }}
                        >
                          {customText || 'YOUR DESIGN'}
                        </div>
                      )}

                      {/* Position Tag Pill */}
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.5 rounded bg-[#141414] text-[9px] font-semibold text-white border border-white/20 shadow-xs">
                        {currentPreset.shortLabel}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* 2D Vector Blueprint View */
                <div className="relative w-full h-full p-6 flex items-center justify-center bg-white">
                  {/* Front / Back Toggle for 2D Blueprint */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-[#FAF9F5] border border-[#E8E4DC] p-1 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setActive2dView('front')}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                        active2dView === 'front' ? 'bg-[#141414] text-white' : 'text-[#635F56]'
                      }`}
                    >
                      Front
                    </button>
                    <button
                      type="button"
                      onClick={() => setActive2dView('back')}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                        active2dView === 'back' ? 'bg-[#141414] text-white' : 'text-[#635F56]'
                      }`}
                    >
                      Back
                    </button>
                  </div>

                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-md">
                      <ellipse cx="200" cy="380" rx="140" ry="12" fill="#28231E" opacity="0.12" />
                      <path
                        d="M 130 65 Q 200 100 270 65 L 345 110 L 305 170 L 270 150 L 275 360 Q 200 370 125 360 L 130 150 L 95 170 L 55 110 Z"
                        fill={shirtColor}
                        stroke={shirtColor === '#FFFFFF' ? '#DCD6CA' : '#2B2B2B'}
                        strokeWidth="2.5"
                      />
                      {active2dView === 'front' ? (
                        <path
                          d="M 130 65 Q 200 115 270 65 Q 200 95 130 65 Z"
                          fill={shirtColor === '#FFFFFF' ? '#F2EFEB' : '#2A2A2A'}
                          stroke={shirtColor === '#FFFFFF' ? '#DCD6CA' : '#333'}
                          strokeWidth="2"
                        />
                      ) : (
                        <path
                          d="M 130 65 Q 200 80 270 65 Q 200 60 130 65 Z"
                          fill={shirtColor === '#FFFFFF' ? '#F2EFEB' : '#2A2A2A'}
                          stroke={shirtColor === '#FFFFFF' ? '#DCD6CA' : '#333'}
                          strokeWidth="2"
                        />
                      )}
                      <path d="M 130 150 L 140 100" stroke="#999" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.5" />
                      <path d="M 270 150 L 260 100" stroke="#999" strokeDasharray="3 3" strokeWidth="1.5" opacity="0.5" />
                      <path d="M 127 348 Q 200 358 273 348" stroke="#999" strokeDasharray="4 2" strokeWidth="1.5" opacity="0.5" />
                    </svg>

                    {/* Adjustable Decal Box on 2D Vector */}
                    <div
                      className="absolute pointer-events-none transition-all duration-200"
                      style={{
                        left: `${computedPosX}%`,
                        top: `${computedPosY}%`,
                        transform: `translate(-50%, -50%) scale(${finalScale})`,
                      }}
                    >
                      <div className="w-[140px] h-[140px] flex items-center justify-center p-2 border border-dashed border-[#141414]/40 rounded-lg bg-black/5">
                        {activeTab === 'image' && uploadedImage ? (
                          <img
                            src={uploadedImage}
                            alt="Uploaded print"
                            className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                          />
                        ) : (
                          <div
                            className="text-center font-bold tracking-wider break-words select-none"
                            style={{
                              fontFamily: fontFamily,
                              color: textColor,
                              fontSize: customText.length > 12 ? '16px' : '22px',
                              lineHeight: 1.1,
                            }}
                          >
                            {customText || 'YOUR DESIGN'}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Studio Footer Bar: 100% THE MERCH FOUNDRY Branded, covering any third-party watermark */}
              <div className="absolute bottom-0 left-0 right-0 h-11 bg-white/95 backdrop-blur-md border-t border-[#E8E4DC] z-10 flex items-center justify-between px-3.5 pointer-events-none">
                <div className="flex items-center gap-2 text-xs font-bold text-[#141414]">
                  <Sparkles size={13} className="text-[#E5382C]" />
                  <span>{activeModel.name} ({genderModel === 'men' ? "Men's Fit - M" : "Women's Fit - W"})</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-[#736E65]">
                  <span className="text-[#E5382C]">{activeModel.categoryLabel}</span>
                  <span className="text-[#A8A29E]">·</span>
                  <span className="px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#E8E4DC] uppercase text-[10px]">
                    Position: {currentPreset.shortLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls & Live Tiered Pricing */}
          <div className="lg:col-span-5 bg-white border border-[#E8E4DC] rounded-2xl p-6 sm:p-7 space-y-6 shadow-atelier">
            {/* 1. Model Fit Option (M or W) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#736E65] uppercase tracking-wider block">
                  1. Model Fit &amp; Silhouette
                </label>
                <span className="text-[11px] text-[#E5382C] font-semibold">
                  {genderModel === 'men' ? "Men's 3D Model Loaded" : "Women's 3D Model Loaded"}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setGenderModel('men')}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    genderModel === 'men'
                      ? 'border-[#E5382C] bg-[#FFF5F4] text-[#E5382C] shadow-sm'
                      : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56] hover:border-[#D5CEBF]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                      genderModel === 'men' ? 'bg-[#E5382C] text-white' : 'bg-[#E8E4DC] text-[#141414]'
                    }`}>
                      M
                    </span>
                    <div>
                      <p className="text-xs font-bold leading-tight">Men&apos;s Fit</p>
                      <p className="text-[10px] text-[#736E65]">Standard 3D Crewneck</p>
                    </div>
                  </div>
                  {genderModel === 'men' && <Check size={14} className="text-[#E5382C]" />}
                </button>

                <button
                  type="button"
                  onClick={() => setGenderModel('women')}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    genderModel === 'women'
                      ? 'border-[#E5382C] bg-[#FFF5F4] text-[#E5382C] shadow-sm'
                      : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56] hover:border-[#D5CEBF]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                      genderModel === 'women' ? 'bg-[#1B2945] text-white' : 'bg-[#E8E4DC] text-[#141414]'
                    }`}>
                      W
                    </span>
                    <div>
                      <p className="text-xs font-bold leading-tight">Women&apos;s Fit</p>
                      <p className="text-[10px] text-[#736E65]">Fitted 3D Silhouette</p>
                    </div>
                  </div>
                  {genderModel === 'women' && <Check size={14} className="text-[#E5382C]" />}
                </button>
              </div>
            </div>

            {/* 2. Adjustable Design Position (Left Corner, Right Corner, Center, Chest & Custom) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#736E65] uppercase tracking-wider block">
                  2. Design Position on 3D Model
                </label>
                <button
                  type="button"
                  onClick={() => setShowFineTune(!showFineTune)}
                  className="text-[11px] font-bold text-[#E5382C] hover:underline flex items-center gap-1"
                >
                  <Sliders size={12} />
                  <span>{showFineTune ? 'Hide Fine-Tune' : 'Fine-Tune Sliders'}</span>
                </button>
              </div>

              {/* Preset Buttons */}
              <div className="grid grid-cols-3 gap-2 mb-2.5">
                {POSITION_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => handleSelectPreset(p.id)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                      selectedPreset === p.id
                        ? 'border-[#E5382C] bg-[#FFF5F4] text-[#E5382C] shadow-xs'
                        : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56] hover:border-[#D5CEBF]'
                    }`}
                    title={p.description}
                  >
                    {p.shortLabel}
                  </button>
                ))}
              </div>

              {/* Fine-Tuning Drawer */}
              {showFineTune && (
                <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] space-y-3 mt-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#141414]">Adjust Placement &amp; Scale:</span>
                    <button
                      type="button"
                      onClick={handleResetPosition}
                      className="text-[#E5382C] font-bold hover:underline flex items-center gap-1 text-[11px]"
                    >
                      <RotateCcw size={11} />
                      <span>Reset</span>
                    </button>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#736E65] mb-1">
                      <span>Horizontal (X): {Math.round(computedPosX)}%</span>
                      <span>Left / Right</span>
                    </div>
                    <input
                      type="range"
                      min="-18"
                      max="18"
                      value={offsetX}
                      onChange={(e) => setOffsetX(Number(e.target.value))}
                      className="w-full accent-[#E5382C] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#736E65] mb-1">
                      <span>Vertical (Y): {Math.round(computedPosY)}%</span>
                      <span>Up / Down</span>
                    </div>
                    <input
                      type="range"
                      min="-15"
                      max="18"
                      value={offsetY}
                      onChange={(e) => setOffsetY(Number(e.target.value))}
                      className="w-full accent-[#E5382C] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-[#736E65] mb-1">
                      <span>Scale / Size: {(finalScale).toFixed(2)}x</span>
                      <span>Small / Large</span>
                    </div>
                    <input
                      type="range"
                      min="0.6"
                      max="1.6"
                      step="0.05"
                      value={customScale}
                      onChange={(e) => setCustomScale(Number(e.target.value))}
                      className="w-full accent-[#E5382C] cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 3. Design Asset (Custom Text or Upload Logo) */}
            <div>
              <label className="text-xs font-bold text-[#736E65] uppercase tracking-wider block mb-2">
                3. Design Artwork &amp; Graphic
              </label>
              <div className="flex items-center gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('text')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                    activeTab === 'text'
                      ? 'border-[#141414] bg-[#141414] text-white shadow-sm'
                      : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56]'
                  }`}
                >
                  <Type size={14} />
                  <span>Custom Text</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('image')}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                    activeTab === 'image'
                      ? 'border-[#141414] bg-[#141414] text-white shadow-sm'
                      : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56]'
                  }`}
                >
                  <Upload size={14} />
                  <span>Upload Artwork</span>
                </button>
              </div>

              {activeTab === 'text' ? (
                <div className="space-y-3 p-3.5 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC]">
                  <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter brand name, slogan or event..."
                    className="w-full bg-white border border-[#E8E4DC] rounded-lg px-3 py-2 text-sm text-[#141414] font-medium focus:outline-none focus:border-[#E5382C]"
                  />
                  <div className="flex items-center gap-3">
                    <select
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
                      className="bg-white border border-[#E8E4DC] text-xs font-semibold text-[#141414] rounded-lg px-2.5 py-1.5 focus:outline-none"
                    >
                      {fonts.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>

                    <div className="flex items-center gap-1.5 ml-auto">
                      <span className="text-[11px] text-[#736E65] font-semibold">Ink:</span>
                      {['#141414', '#E5382C', '#FFFFFF', '#FFB800', '#B6D926', '#1B2945'].map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => setTextColor(color)}
                          className={`w-5 h-5 rounded-full border shadow-sm ${
                            textColor === color ? 'border-[#141414] scale-110' : 'border-slate-300'
                          }`}
                          style={{ backgroundColor: color }}
                          title={`Select ${color}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] text-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  {uploadedImage ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={uploadedImage}
                          alt="Uploaded logo"
                          className="w-10 h-10 object-contain rounded bg-white p-1 border border-[#E8E4DC]"
                        />
                        <span className="text-xs text-[#141414] font-semibold">Artwork Loaded</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="text-xs text-[#E5382C] font-bold hover:underline"
                      >
                        Change Image
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-4 border-2 border-dashed border-[#D5CEBF] hover:border-[#E5382C] rounded-lg flex flex-col items-center justify-center gap-1 transition-colors"
                    >
                      <ImageIcon size={20} className="text-[#8C867A]" />
                      <span className="text-xs text-[#141414] font-semibold">Click to select vector or PNG (300 DPI)</span>
                      <span className="text-[10px] text-[#736E65]">Supports SVG, PNG, AI, JPEG</span>
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* 4. Apparel Silhouette */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-[#736E65] uppercase tracking-wider block">
                  4. Apparel Silhouette
                </label>
                <span className="text-[11px] font-semibold text-[#E5382C]">
                  {shirtType === 'tshirt' ? '★ Primary Silhouette' : '3D Model Active'}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'tshirt' as const, label: 'Crewneck Tee', badge: 'Primary' },
                  { id: 'polo' as const, label: 'Collared Polo', badge: '3D Model' },
                  { id: 'hoodie' as const, label: 'Warm Hoodie', badge: '3D Model' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setShirtType(type.id)}
                    className={`py-2.5 px-2.5 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center text-center ${
                      shirtType === type.id
                        ? 'border-[#E5382C] bg-[#FFF5F4] text-[#E5382C] shadow-sm ring-1 ring-[#E5382C]'
                        : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56] hover:border-[#D5CEBF]'
                    }`}
                  >
                    <span>{type.label}</span>
                    <span
                      className={`text-[9px] mt-1 px-1.5 py-0.5 rounded-full font-semibold ${
                        shirtType === type.id
                          ? 'bg-[#E5382C] text-white'
                          : 'bg-[#E8E4DC] text-[#736E65]'
                      }`}
                    >
                      {type.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Size & Print Placement */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#736E65] uppercase tracking-wider block mb-2">Size</label>
                <div className="flex flex-wrap gap-1.5">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`px-2.5 py-1 text-xs rounded-md border font-bold transition-colors ${
                        size === s
                          ? 'border-[#E5382C] bg-[#E5382C] text-white shadow-sm'
                          : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#736E65] uppercase tracking-wider block mb-2">Print Placement</label>
                <div className="flex gap-1.5">
                  {(['front', 'back', 'both'] as const).map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setPlacement(p)}
                      className={`flex-1 py-1 text-xs rounded-md border font-bold capitalize transition-colors ${
                        placement === p
                          ? 'border-[#E5382C] bg-[#FFF5F4] text-[#E5382C]'
                          : 'border-[#E8E4DC] bg-[#FAF9F5] text-[#635F56]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Quantity Slider with Tiered Pricing */}
            <div className="space-y-2 pt-2 border-t border-[#F0ECE4]">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#736E65] uppercase tracking-wider">Quantity</span>
                <span className="text-[#E5382C] font-bold">
                  {quantity} Pieces {estimate.savingsPercent > 0 && `(Save ${estimate.savingsPercent}%)`}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full accent-[#E5382C] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#8C867A] font-medium">
                <span>1 pc (Sample)</span>
                <span>10 pcs (-15%)</span>
                <span>25 pcs (-25%)</span>
                <span>50+ pcs (-35%)</span>
              </div>
            </div>

            {/* 7. Price Estimate Summary & WhatsApp CTA */}
            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-[#736E65] uppercase tracking-wider font-semibold block">Estimated Quote</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-[#141414] font-display">
                    ₹{estimate.totalPrice}
                  </span>
                  <span className="text-xs text-[#736E65] font-semibold">
                    (₹{estimate.unitPrice} / piece)
                  </span>
                </div>
              </div>

              <a
                href={getWhatsAppLink(generateWhatsAppMessage())}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E5382C] hover:bg-[#CC2F24] text-white font-bold text-xs tracking-wider uppercase shadow-[0_4px_16px_rgba(229,56,44,0.3)] active:scale-95 transition-all"
              >
                <Send size={15} />
                <span>Send on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
