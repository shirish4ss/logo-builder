import { prisma } from "./prisma";

export async function createSubscription(userId: string, planId: string) {
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1); // 1 month subscription

  return await prisma.subscription.create({
    data: {
      userId,
      planId,
      status: "ACTIVE",
      endDate,
    },
  });
}

export async function processTransaction(userId: string, amount: number, provider: string, providerId: string) {
  return await prisma.transaction.create({
    data: {
      userId,
      amount,
      currency: "INR",
      provider,
      providerId,
      status: "SUCCESS",
    },
  });
}

export async function getUserSubscription(userId: string) {
  return await prisma.subscription.findFirst({
    where: {
      userId,
      status: "ACTIVE",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
