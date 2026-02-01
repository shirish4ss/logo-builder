import { prisma } from "./prisma";

export async function createNotification(userId: string, title: string, message: string) {
  return await prisma.notification.create({
    data: { userId, title, message },
  });
}

export async function getNotifications(userId: string) {
  return await prisma.notification.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export async function markAsRead(notificationId: string) {
  return await prisma.notification.update({
    where: { id: notificationId },
    data: { isRead: true },
  });
}

export function generateReferralCode(userId: string) {
  return `REF-${userId.substring(0, 8).toUpperCase()}`;
}

export async function getUserCredits(userId: string) {
  // In a real app, you might have a credits field on User or a separate model
  return 5; // Mocking 5 credits remaining
}
