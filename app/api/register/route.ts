import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const company = body.company ? String(body.company).trim() : null;
    const locale = String(body.locale || "fr");

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }

    const player = await prisma.player.upsert({
      where: { email },
      update: { firstName, lastName, company },
      create: { firstName, lastName, email, company },
    });

    const attempt = await prisma.attempt.create({
      data: { playerId: player.id, locale },
    });

    return NextResponse.json({ attemptId: attempt.id, playerId: player.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
