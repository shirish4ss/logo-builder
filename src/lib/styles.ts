import { prisma } from "./prisma";

export async function getAllStyles() {
  // In a real app, these would be in the database
  return [
    { name: "Swiss Minimalist", modifier: "clean lines, geometric shapes, grid-based, sans-serif, Helvetica inspired, high contrast" },
    { name: "Abstract Modern", modifier: "fluid shapes, vibrant gradients, non-representational, sleek, digital art style" },
    { name: "Paul Rand inspired", modifier: "bold simple shapes, playful geometry, symbolic, iconic, timeless corporate identity" },
    { name: "Cyber-Future", modifier: "neon accents, glitch effects, tech-noir aesthetic, sharp angles, futuristic typography" },
  ];
}

export async function createStyle(name: string, modifier: string) {
  // Mocking database creation
  console.log(`Creating style: ${name} with modifier: ${modifier}`);
  return { id: Math.random().toString(36), name, modifier };
}

export async function deleteStyle(styleId: string) {
  console.log(`Deleting style: ${styleId}`);
  return { success: true };
}
