export const typographyRecommendations = (industry: string) => {
  const recommendations: any = {
    tech: ["Inter", "Roboto Mono", "Space Grotesk", "Outfit"],
    fashion: ["Playfair Display", "Montserrat", "Cormorant Garamond", "Baskerville"],
    food: ["Fredoka One", "Patrick Hand", "Open Sans", "Quicksand"],
    health: ["Source Sans Pro", "Lato", "Merriweather", "Nunito"],
  };
  return recommendations[industry] || ["Inter", "System Sans-Serif"];
};

export const extractPalette = async (logoUrl: string) => {
  // In production, use a library like 'colorthief'
  console.log(`Extracting palette from ${logoUrl}`);
  return [
    { name: "Brand Primary", hex: "#3b82f6" },
    { name: "Brand Secondary", hex: "#1e40af" },
    { name: "Brand Accent", hex: "#f59e0b" },
    { name: "Neutral Dark", hex: "#0f172a" },
    { name: "Neutral Light", hex: "#f8fafc" },
  ];
};

export const generateMockupSet = (logoUrl: string) => {
  return [
    { type: "Business Card", url: "https://placehold.co/800x500/white/blue?text=Business+Card+Mockup" },
    { type: "T-Shirt", url: "https://placehold.co/600x600/gray/white?text=T-Shirt+Mockup" },
    { type: "Mobile App", url: "https://placehold.co/400x800/black/white?text=App+Icon+Mockup" },
    { type: "Office Signage", url: "https://placehold.co/1200x400/gray/black?text=Office+Sign+Mockup" },
  ];
};
