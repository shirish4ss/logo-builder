export const generatePalette = (primaryColor: string) => {
  // Simple palette generation logic based on primary color
  return [
    { name: "Primary", hex: primaryColor },
    { name: "Secondary", hex: "#1e293b" },
    { name: "Accent", hex: "#f59e0b" },
    { name: "Light", hex: "#f8fafc" },
    { name: "Dark", hex: "#0f172a" },
  ];
};

export const getSocialMediaTemplates = (logoUrl: string, brandName: string) => {
  return [
    {
      name: "Instagram Post",
      size: "1080x1080",
      description: "Perfect for sharing your new brand on Instagram.",
      mockupUrl: `https://placehold.co/1080x1080/white/blue?text=${brandName}+Post`,
    },
    {
      name: "Instagram Profile",
      size: "320x320",
      description: "Optimized profile picture for Instagram.",
      mockupUrl: `https://placehold.co/320x320/white/blue?text=${brandName}+Avatar`,
    },
    {
      name: "Facebook Cover",
      size: "820x312",
      description: "A professional cover for your Facebook page.",
      mockupUrl: `https://placehold.co/820x312/white/blue?text=${brandName}+Cover`,
    },
    {
      name: "Twitter Banner",
      size: "1500x500",
      description: "Clean and modern banner for your Twitter profile.",
      mockupUrl: `https://placehold.co/1500x500/white/blue?text=${brandName}+Banner`,
    },
    {
      name: "LinkedIn Profile",
      size: "400x400",
      description: "Stand out with a professional LinkedIn profile picture.",
      mockupUrl: `https://placehold.co/400x400/white/blue?text=${brandName}+Profile`,
    },
  ];
};

export const generateBrandGuidelines = (logoData: any) => {
  return {
    title: `${logoData.name} Brand Guidelines`,
    mission: "To innovate and inspire through professional design.",
    voice: "Bold, modern, and trustworthy.",
    usage: {
      do: ["Use on white backgrounds", "Maintain clear space around logo"],
      dont: ["Stretch or distort", "Change primary brand colors"],
    }
  };
};
