import { prisma } from "./prisma";

export async function checkAdminAccess(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });
  return user?.role === "ADMIN";
}

export async function banUserIP(ipAddress: string, reason: string) {
  // In a real app, this might be a separate table or a middleware check
  console.log(`Banning IP: ${ipAddress} for: ${reason}`);
  return { success: true, ipAddress, bannedAt: new Date() };
}

export async function logActivity(userId: string, action: string, details?: any) {
  // Mock activity logging
  console.log(`Activity by ${userId}: ${action}`, details);
}

export function getRolePermissions(role: string) {
  const permissions: any = {
    ADMIN: ["all"],
    USER: ["create_logo", "manage_projects", "view_kits"],
  };
  return permissions[role] || [];
}
