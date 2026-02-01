import { prisma } from "./prisma";

export async function createProject(userId: string, name: string, description?: string) {
  return await prisma.project.create({
    data: { userId, name, description },
  });
}

export async function addLogoToProject(logoId: string, projectId: string) {
  return await prisma.logo.update({
    where: { id: logoId },
    data: { projectId },
  });
}

export async function toggleFavoriteLogo(logoId: string, isFavorite: boolean) {
  return await prisma.logo.update({
    where: { id: logoId },
    data: { isFavorite },
  });
}

export async function createLogoVersion(originalLogoId: string, newSvgData: string) {
  const original = await prisma.logo.findUnique({ where: { id: originalLogoId } });
  if (!original) throw new Error("Original logo not found");

  return await prisma.logo.create({
    data: {
      userId: original.userId,
      projectId: original.projectId,
      name: `${original.name} (Version)`,
      imageUrl: original.imageUrl,
      svgData: newSvgData,
      prompt: original.prompt,
      style: original.style,
      colors: original.colors,
    },
  });
}

export function generateShareableLink(logoId: string) {
  // In a real app, this would be a signed URL or a dedicated share route
  return `/share/logo/${logoId}`;
}
