import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const attempts = await prisma.attempt.findMany({
      where: { completed: true },
      orderBy: [{ score: "desc" }, { durationMs: "asc" }],
      take: 50,
      include: { player: true },
    });

    const rows = attempts.map((a: (typeof attempts)[number]) => ({
      firstName: a.player.firstName,
      lastName: a.player.lastName,
      company: a.player.company,
      score: a.score,
      durationMs: a.durationMs,
      locale: a.locale,
      finishedAt: a.finishedAt,
    }));

    return NextResponse.json({ rows });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
