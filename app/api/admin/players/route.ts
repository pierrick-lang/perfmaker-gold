import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const token = req.headers.get("x-admin-token") || "";
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  try {
    const attempts = await prisma.attempt.findMany({
      orderBy: [{ score: "desc" }, { durationMs: "asc" }, { startedAt: "desc" }],
      include: {
        player: true,
        answers: { orderBy: { questionIndex: "asc" } },
      },
    });

    return NextResponse.json({ attempts });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
