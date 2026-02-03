import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response("Missing fields", { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // CRITICAL: Ensure the first registered user is promoted to ADMIN
    // We check count before creation.
    const userCount = await prisma.user.count();

    // Fallback: If for some reason userCount is > 0 but no admin exists,
    // we might want to promote this one too, but let's stick to the first one logic.
    // Or check if there are any admins at all.
    const adminExists = await prisma.user.findFirst({ where: { role: "ADMIN" } });

    const role = (!adminExists || userCount === 0) ? "ADMIN" : "USER";

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return new Response(JSON.stringify(user), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Registration Error:", error);
    return new Response(error instanceof Error ? error.message : "Registration failed", { status: 500 });
  }
}
