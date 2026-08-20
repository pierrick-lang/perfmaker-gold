import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const attemptId = String(body.attemptId || "");
    if (!attemptId) {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }

    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
      include: { answers: true },
    });
    if (!attempt) {
      return NextResponse.json({ error: "not_found" }, { status: 404 });
    }

    const finishedAt = new Date();
    const durationMs = finishedAt.getTime() - attempt.startedAt.getTime();
    const score = attempt.answers.filter((a: { isCorrect: boolean }) => a.isCorrect).length;

    const updated = await prisma.attempt.update({
      where: { id: attemptId },
      data: { finishedAt, durationMs, score, completed: true },
    });

    return NextResponse.json({ score: updated.score, durationMs: updated.durationMs });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
