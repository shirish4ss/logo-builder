import { prisma } from "./prisma";

export async function getUserUsageStats(userId: string) {
  const logosCount = await prisma.logo.count({ where: { userId } });
  const projectsCount = await prisma.project.count({ where: { userId } });
  const transactions = await prisma.transaction.findMany({ where: { userId } });
  const totalSpent = transactions.reduce((acc, t) => acc + t.amount, 0);

  return {
    logosCount,
    projectsCount,
    totalSpent,
  };
}

export async function createSupportTicket(userId: string, subject: string, message: string) {
  // Mocking support ticket creation - could be a separate model or integrated with an external service
  console.log(`Support ticket created for ${userId}: ${subject}`);
  return { id: `TCK-${Date.now()}`, status: "OPEN" };
}

export function searchLogos(logos: any[], query: string) {
  return logos.filter(logo =>
    logo.name.toLowerCase().includes(query.toLowerCase()) ||
    (logo.style && logo.style.toLowerCase().includes(query.toLowerCase()))
  );
}
