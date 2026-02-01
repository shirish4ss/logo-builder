export const typographyRecommendations = (industry: string) => {
  const recommendations: any = {
    tech: ["Inter", "Roboto", "Space Grotesk"],
    fashion: ["Playfair Display", "Montserrat", "Baskerville"],
    food: ["Fredoka One", "Open Sans", "Patrick Hand"],
  };
  return recommendations[industry] || ["Inter", "System"];
};

export const generateMockup = (logoUrl: string, type: "tshirt" | "card" | "mobile") => {
  // Returns a mock URL for a mockup image
  return `https://placehold.co/800x600/gray/white?text=${type}+Mockup+with+Logo`;
};

export const backgroundRemover = async (imageUrl: string) => {
  // In a real app, this would call a background removal API like remove.bg
  console.log("Removing background from:", imageUrl);
  return imageUrl; // Returning original for mock
};

export const colorPaletteFromImage = (imageUrl: string) => {
  // Mock logic to extract colors
  return ["#3b82f6", "#1e40af", "#60a5fa"];
};

export const exportFormats = (logoId: string) => {
  return [
    { format: "SVG", type: "Vector", description: "Scalable vector for any size" },
    { format: "PNG", type: "Raster", description: "High resolution with transparency" },
    { format: "JPG", type: "Raster", description: "Standard image for web" },
    { format: "PDF", type: "Print", description: "Standard for printing" },
  ];
};
