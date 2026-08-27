import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { QUESTIONS_META, TOTAL_QUESTIONS } from "@/lib/questions";

function sameSet(a: number[], b: number[]) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort((x, y) => x - y);
  const sb = [...b].sort((x, y) => x - y);
  return sa.every((v, i) => v === sb[i]);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const attemptId = String(body.attemptId || "");
    const questionIndex = Number(body.questionIndex);
    const selectedIndexes: number[] | null =
      body.selectedIndexes === null || body.selectedIndexes === undefined
        ? null
        : (body.selectedIndexes as unknown[]).map((n) => Number(n));
    const timeTakenMs = Number(body.timeTakenMs) || 0;

    if (!attemptId || Number.isNaN(questionIndex) || questionIndex < 0 || questionIndex >= TOTAL_QUESTIONS) {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }

    const meta = QUESTIONS_META[questionIndex];
    const timedOut = selectedIndexes === null;
    const isCorrect = !timedOut && sameSet(selectedIndexes as number[], meta.correct);

    const answer = await prisma.answer.upsert({
      where: { attemptId_questionIndex: { attemptId, questionIndex } },
      update: { selectedIndexes: selectedIndexes ?? [], isCorrect, timedOut, timeTakenMs },
      create: { attemptId, questionIndex, selectedIndexes: selectedIndexes ?? [], isCorrect, timedOut, timeTakenMs },
    });

    return NextResponse.json({ isCorrect, correctIndexes: meta.correct, answerId: answer.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
