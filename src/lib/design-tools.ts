export const typographyRecommendations = (industry: string) => {
  const recommendations: any = {
    tech: ["Inter", "Roboto Mono", "Space Grotesk", "Outfit"],
    fashion: ["Playfair Display", "Montserrat", "Cormorant Garamond", "Baskerville"],
    food: ["Fredoka One", "Patrick Hand", "Open Sans", "Quicksand"],
    health: ["Source Sans Pro", "Lato", "Merriweather", "Nunito"],
  };
  return recommendations[industry] || ["Inter", "System Sans-Serif"];
};

export const getFontPairs = (baseFont: string) => {
  const pairs: Record<string, string[]> = {
    "Inter": ["Playfair Display", "Roboto Mono", "Libre Baskerville"],
    "Playfair Display": ["Inter", "Montserrat", "Open Sans"],
    "Orbitron": ["Roboto Mono", "Inter", "Rajdhani"],
    "Libre Baskerville": ["Montserrat", "Inter", "Josefin Sans"],
    "Josefin Sans": ["Libre Baskerville", "Inter", "Lato"],
    "Poppins": ["Open Sans", "Roboto Slab", "Lora"],
  };
  return pairs[baseFont] || ["Inter", "Montserrat", "Lato"];
};

export const extractPalette = async (logoUrl: string) => {
  // In production, use a library like 'colorthief'
  console.log(`Extracting palette from ${logoUrl}`);
  // Return different palettes based on "logoUrl" simulation or random
  const palettes = [
    [
        { name: "Ocean Deep", hex: "#0f172a" },
        { name: "Primary Blue", hex: "#3b82f6" },
        { name: "Sky Light", hex: "#60a5fa" },
        { name: "Accent Amber", hex: "#f59e0b" },
        { name: "Paper White", hex: "#f8fafc" },
    ],
    [
        { name: "Forest Dark", hex: "#064e3b" },
        { name: "Nature Green", hex: "#10b981" },
        { name: "Leaf Light", hex: "#6ee7b7" },
        { name: "Earth Brown", hex: "#78350f" },
        { name: "Mist White", hex: "#f0fdf4" },
    ],
    [
        { name: "Midnight", hex: "#1e1b4b" },
        { name: "Royal Purple", hex: "#7c3aed" },
        { name: "Soft Pink", hex: "#f472b6" },
        { name: "Golden Glow", hex: "#fbbf24" },
        { name: "Cloud", hex: "#f5f3ff" },
    ]
  ];
  return palettes[Math.floor(Math.random() * palettes.length)];
};

export const generateLogoVariations = (layers: any[]) => {
    // Generate light, dark, and monochrome versions of the layer set
    const light = layers.map(l => ({ ...l, fill: l.fill === "#ffffff" ? "#f8fafc" : l.fill }));
    const dark = layers.map(l => ({ ...l, fill: "#ffffff" })); // White on dark
    const mono = layers.map(l => ({ ...l, fill: "#000000" })); // Black on white

    return { light, dark, mono };
};

export const generateMockupSet = (logoUrl: string) => {
  return [
    { type: "Business Card", url: "https://placehold.co/800x500/white/blue?text=Business+Card+Mockup" },
    { type: "T-Shirt", url: "https://placehold.co/600x600/gray/white?text=T-Shirt+Mockup" },
    { type: "Mobile App", url: "https://placehold.co/400x800/black/white?text=App+Icon+Mockup" },
    { type: "Office Signage", url: "https://placehold.co/1200x400/gray/black?text=Office+Sign+Mockup" },
  ];
};
