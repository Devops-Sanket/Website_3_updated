import * as THREE from 'three';

// Cache generated textures to avoid canvas re-creation
const textureCache = new Map<string, THREE.CanvasTexture>();

/**
 * Generate high-resolution procedural graphic textures for the chest/back of the 3D T-shirt
 */
export function getShirtGraphicTexture(designType: string, textColor: string = '#FFFFFF'): THREE.CanvasTexture {
  const cacheKey = `${designType}-${textColor}`;
  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    const fallback = new THREE.CanvasTexture(canvas);
    return fallback;
  }

  ctx.clearRect(0, 0, 1024, 1024);

  // Center coordinates
  const cx = 512;
  const cy = 480;

  switch (designType) {
    case 'cyber-panther': {
      // 1. Neon Cyber Panther Streetwear (Matching model-598)
      // Background dark sun circle
      ctx.fillStyle = '#26122B';
      ctx.beginPath();
      ctx.arc(cx, cy, 320, 0, Math.PI * 2);
      ctx.fill();

      // Burgundy red ring
      ctx.strokeStyle = '#8B2635';
      ctx.lineWidth = 18;
      ctx.beginPath();
      ctx.arc(cx, cy, 300, 0, Math.PI * 2);
      ctx.stroke();

      // Top bold typography
      ctx.fillStyle = '#F3E9D2';
      ctx.font = '900 38px "Bebas Neue", "Impact", sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '12px';
      ctx.fillText('BLACK', cx, cy - 230);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = '900 120px "Bebas Neue", "Impact", sans-serif';
      ctx.letterSpacing = '8px';
      ctx.fillText('PANTHER', cx, cy - 130);

      // Panther head graphic (stylized cyber beast)
      ctx.save();
      ctx.translate(cx, cy + 20);

      // Panther head silhouette
      ctx.fillStyle = '#141416';
      ctx.beginPath();
      // Ears
      ctx.moveTo(-140, -180);
      ctx.lineTo(-70, -70);
      ctx.lineTo(70, -70);
      ctx.lineTo(140, -180);
      // Cheeks & Jaw
      ctx.lineTo(110, -10);
      ctx.lineTo(150, 40);
      ctx.lineTo(70, 150);
      ctx.lineTo(0, 180);
      ctx.lineTo(-70, 150);
      ctx.lineTo(-150, 40);
      ctx.lineTo(-110, -10);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#F2584E';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Glowing Amber Eyes
      ctx.fillStyle = '#FFB800';
      ctx.beginPath();
      ctx.moveTo(-70, -20);
      ctx.lineTo(-30, -10);
      ctx.lineTo(-65, 0);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(70, -20);
      ctx.lineTo(30, -10);
      ctx.lineTo(65, 0);
      ctx.closePath();
      ctx.fill();

      // Mechanical cyber snout and muzzle lines
      ctx.strokeStyle = '#F3E9D2';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 90);
      ctx.moveTo(-35, 90);
      ctx.lineTo(35, 90);
      ctx.lineTo(0, 130);
      ctx.closePath();
      ctx.stroke();

      ctx.restore();

      // Kanji characters on flanks
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 50px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('刻 識', cx - 280, cy);
      ctx.textAlign = 'right';
      ctx.fillText('旋 力', cx + 280, cy);

      // Barcode & Coordinates lower strip
      ctx.fillStyle = '#F2584E';
      for (let i = 0; i < 28; i++) {
        const bw = (i % 3 === 0) ? 9 : 4;
        ctx.fillRect(cx - 180 + i * 13, cy + 240, bw, 40);
      }
      ctx.fillStyle = '#F3E9D2';
      ctx.font = '600 20px "Inter", monospace';
      ctx.textAlign = 'center';
      ctx.fillText('FOUNDRY CYBER-DIVISION // NASHIK 2026', cx, cy + 320);
      break;
    }

    case 'free-your-mind': {
      // 2. Psychedelic 70s Retro Sun & Meditators (Matching model-596)
      // Top arched text
      ctx.fillStyle = '#F3E9D2';
      ctx.font = '900 64px "Bebas Neue", "Oswald", sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '8px';
      ctx.fillText('FREE YOUR MIND', cx, cy - 240);

      // Retro Yellow Golden Sun Arch
      ctx.fillStyle = '#F5B731';
      ctx.beginPath();
      ctx.arc(cx, cy - 40, 240, Math.PI, 0);
      ctx.lineTo(cx + 240, cy + 220);
      ctx.lineTo(cx - 240, cy + 220);
      ctx.closePath();
      ctx.fill();

      // Smiling Sun with floral ray petals
      ctx.save();
      ctx.translate(cx, cy - 60);

      // Radiant sun rays
      ctx.fillStyle = '#7AC74F';
      const rayCount = 14;
      for (let r = 0; r < rayCount; r++) {
        const angle = (r * Math.PI * 2) / rayCount;
        ctx.save();
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, -95);
        ctx.lineTo(-18, -130);
        ctx.lineTo(0, -165);
        ctx.lineTo(18, -130);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      }

      // Sun face disc
      ctx.fillStyle = '#E8E586';
      ctx.beginPath();
      ctx.arc(0, 0, 95, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#1D1D1D';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Gentle smiling face
      ctx.strokeStyle = '#1D1D1D';
      ctx.lineWidth = 4;
      // Eyes
      ctx.beginPath();
      ctx.arc(-35, -15, 12, 0.2, Math.PI - 0.2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(35, -15, 12, 0.2, Math.PI - 0.2);
      ctx.stroke();
      // Nose
      ctx.beginPath();
      ctx.moveTo(0, -10);
      ctx.lineTo(8, 15);
      ctx.lineTo(-4, 20);
      ctx.stroke();
      // Smile
      ctx.beginPath();
      ctx.arc(0, 22, 28, 0.2, Math.PI - 0.2);
      ctx.stroke();

      ctx.restore();

      // Twin Meditating Silhouettes (Warm Coral and Soft Purple)
      // Left figure (Peach/Coral)
      ctx.fillStyle = '#E76F51';
      ctx.beginPath();
      ctx.arc(cx - 100, cy + 80, 28, 0, Math.PI * 2); // Head
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx - 100, cy + 110);
      ctx.quadraticCurveTo(cx - 140, cy + 150, cx - 150, cy + 220);
      ctx.lineTo(cx - 40, cy + 220);
      ctx.quadraticCurveTo(cx - 60, cy + 150, cx - 100, cy + 110);
      ctx.closePath();
      ctx.fill();

      // Right figure (Purple/Pink)
      ctx.fillStyle = '#B56576';
      ctx.beginPath();
      ctx.arc(cx + 100, cy + 80, 28, 0, Math.PI * 2); // Head
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(cx + 100, cy + 110);
      ctx.quadraticCurveTo(cx + 60, cy + 150, cx + 40, cy + 220);
      ctx.lineTo(cx + 150, cy + 220);
      ctx.quadraticCurveTo(cx + 140, cy + 150, cx + 100, cy + 110);
      ctx.closePath();
      ctx.fill();

      // Flanking flowers
      ctx.fillStyle = '#FF758F';
      ctx.beginPath();
      ctx.arc(cx - 190, cy + 140, 24, 0, Math.PI * 2);
      ctx.arc(cx + 190, cy + 140, 24, 0, Math.PI * 2);
      ctx.fill();

      break;
    }

    case 'never-look-back': {
      // 3. Streetwear Flame Typography & Skate Skull (Matching 3D.jpg)
      // Bold graffiti text NEVER LOOK BACK
      ctx.fillStyle = '#111111';
      ctx.font = '900 85px "Bebas Neue", "Impact", sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '4px';

      // Distorted graffiti typography
      ctx.save();
      ctx.translate(cx, cy - 140);
      ctx.rotate(-0.06);
      ctx.fillText('NEVER', 0, 0);
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy - 40);
      ctx.rotate(0.04);
      ctx.fillText('LOOK', 0, 0);
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy + 65);
      ctx.rotate(-0.03);
      ctx.fillText('BACK', 0, 0);
      ctx.restore();

      // Fire lightning bolts in ink red/orange
      ctx.strokeStyle = '#F2584E';
      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx - 260, cy - 180);
      ctx.lineTo(cx - 120, cy - 150);
      ctx.lineTo(cx - 30, cy - 220);
      ctx.lineTo(cx + 140, cy - 170);
      ctx.lineTo(cx + 250, cy - 200);
      ctx.stroke();

      // Street Smiley with X eyes and flame halo
      ctx.fillStyle = '#FFB800';
      ctx.beginPath();
      ctx.arc(cx - 120, cy + 170, 65, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 8;
      ctx.stroke();

      // X X eyes
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(cx - 145, cy + 150);
      ctx.lineTo(cx - 130, cy + 165);
      ctx.moveTo(cx - 130, cy + 150);
      ctx.lineTo(cx - 145, cy + 165);
      // Right eye
      ctx.moveTo(cx - 105, cy + 150);
      ctx.lineTo(cx - 90, cy + 165);
      ctx.moveTo(cx - 90, cy + 150);
      ctx.lineTo(cx - 105, cy + 165);
      ctx.stroke();

      // Zigzag mouth
      ctx.beginPath();
      ctx.moveTo(cx - 145, cy + 195);
      ctx.lineTo(cx - 135, cy + 190);
      ctx.lineTo(cx - 125, cy + 200);
      ctx.lineTo(cx - 115, cy + 190);
      ctx.lineTo(cx - 95, cy + 198);
      ctx.stroke();

      // Starburst stamp "VS"
      ctx.fillStyle = '#F2584E';
      ctx.font = '900 32px sans-serif';
      ctx.fillText('VS', cx - 180, cy + 270);
      ctx.strokeStyle = '#111';
      ctx.strokeText('VS', cx - 180, cy + 270);

      // Skeleton skater silhouette
      ctx.fillStyle = '#F2584E';
      ctx.beginPath();
      ctx.arc(cx + 120, cy + 160, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#111';
      ctx.stroke();

      break;
    }

    case 'foundry-heritage': {
      // 4. The Merch Foundry signature emblem
      // Outer double circle badge
      ctx.strokeStyle = '#F2584E';
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.arc(cx, cy, 290, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#F3E9D2';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(cx, cy, 270, 0, Math.PI * 2);
      ctx.stroke();

      // Screen Printing press squeegee handle on top
      ctx.fillStyle = '#F3E9D2';
      ctx.fillRect(cx - 60, cy - 240, 120, 24);
      ctx.fillRect(cx - 15, cy - 220, 30, 40);

      // Squeegee frame
      ctx.strokeStyle = '#F3E9D2';
      ctx.lineWidth = 8;
      ctx.strokeRect(cx - 160, cy - 180, 320, 60);
      ctx.fillStyle = '#F2584E';
      ctx.fillRect(cx - 150, cy - 170, 300, 40);

      // Dripping ink
      ctx.beginPath();
      ctx.arc(cx - 60, cy - 100, 18, 0, Math.PI * 2);
      ctx.arc(cx + 40, cy - 90, 14, 0, Math.PI * 2);
      ctx.arc(cx + 110, cy - 110, 12, 0, Math.PI * 2);
      ctx.fill();

      // Center Banner
      ctx.fillStyle = '#141414';
      ctx.fillRect(cx - 240, cy - 50, 480, 120);
      ctx.strokeStyle = '#F3E9D2';
      ctx.lineWidth = 6;
      ctx.strokeRect(cx - 240, cy - 50, 480, 120);

      // "THE MERCH FOUNDRY"
      ctx.fillStyle = '#F3E9D2';
      ctx.font = '900 32px "Bebas Neue", "Oswald", sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '10px';
      ctx.fillText('THE', cx, cy - 15);

      ctx.font = '900 80px "Bebas Neue", "Impact", sans-serif';
      ctx.letterSpacing = '6px';
      ctx.fillText('MERCH', cx, cy + 50);

      ctx.fillStyle = '#F2584E';
      ctx.font = '900 48px "Bebas Neue", "Oswald", sans-serif';
      ctx.letterSpacing = '8px';
      ctx.fillText('FOUNDRY', cx, cy + 120);

      // Bottom molten ladle
      ctx.fillStyle = '#F3E9D2';
      ctx.beginPath();
      ctx.arc(cx, cy + 190, 38, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#F2584E';
      ctx.beginPath();
      ctx.arc(cx, cy + 190, 26, 0, Math.PI * 2);
      ctx.fill();

      // Pouring ink splatter
      ctx.beginPath();
      ctx.ellipse(cx, cy + 245, 45, 14, 0, 0, Math.PI * 2);
      ctx.fill();

      break;
    }

    case 'vintage-navy':
    default: {
      // 5. Vintage College Stencil / Athletic Club
      ctx.strokeStyle = '#F3E9D2';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.arc(cx, cy, 270, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#F2584E';
      ctx.font = '900 58px "Bebas Neue", "Oswald", sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '6px';
      ctx.fillText('FOUNDRY', cx, cy - 130);

      ctx.fillStyle = '#F3E9D2';
      ctx.font = '900 110px "Bebas Neue", "Impact", sans-serif';
      ctx.letterSpacing = '10px';
      ctx.fillText('ATHLETIC', cx, cy - 20);

      ctx.fillStyle = '#F2584E';
      ctx.font = '900 52px "Bebas Neue", "Oswald", sans-serif';
      ctx.letterSpacing = '8px';
      ctx.fillText('NASHIK 2026', cx, cy + 60);

      // Star row
      ctx.fillStyle = '#F3E9D2';
      ctx.font = '36px sans-serif';
      ctx.fillText('★ ★ ★ ★ ★', cx, cy + 130);

      ctx.fillStyle = '#A3A3A3';
      ctx.font = '600 24px "Inter", sans-serif';
      ctx.fillText('PREMIUM QUALITY SCREEN PRINT', cx, cy + 190);
      break;
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  texture.anisotropy = 8;
  textureCache.set(cacheKey, texture);
  return texture;
}

/**
 * Generate procedural fabric bump/normal map to give realistic cotton weave texture
 */
let fabricBumpMapCache: THREE.CanvasTexture | null = null;
export function getFabricBumpTexture(): THREE.CanvasTexture {
  if (fabricBumpMapCache) return fabricBumpMapCache;

  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);

    // Fine cotton knit crosshatch pattern
    ctx.fillStyle = '#8c8c8c';
    for (let x = 0; x < 256; x += 4) {
      for (let y = 0; y < 256; y += 4) {
        if ((x + y) % 8 === 0) {
          ctx.fillRect(x, y, 2, 2);
        }
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);
  texture.needsUpdate = true;
  fabricBumpMapCache = texture;
  return texture;
}
