import { prisma } from "./prisma";

export async function submitFeedback(userId: string, rating: number, comment?: string) {
  return await prisma.feedback.create({
    data: { userId, rating, comment },
  });
}

export async function getFeedbackSummary() {
  const feedbacks = await prisma.feedback.findMany();
  if (feedbacks.length === 0) return { average: 0, count: 0 };

  const sum = feedbacks.reduce((acc, f) => acc + f.rating, 0);
  return {
    average: sum / feedbacks.length,
    count: feedbacks.length,
  };
}

export function updateProfile(userId: string, data: { name?: string, image?: string }) {
  return prisma.user.update({
    where: { id: userId },
    data,
  });
}
