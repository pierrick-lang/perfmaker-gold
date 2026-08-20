import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { QUESTIONS_META, TOTAL_QUESTIONS } from "@/lib/questions";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const attemptId = String(body.attemptId || "");
    const questionIndex = Number(body.questionIndex);
    const selectedIndex =
      body.selectedIndex === null || body.selectedIndex === undefined
        ? null
        : Number(body.selectedIndex);
    const timeTakenMs = Number(body.timeTakenMs) || 0;

    if (!attemptId || Number.isNaN(questionIndex) || questionIndex < 0 || questionIndex >= TOTAL_QUESTIONS) {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }

    const meta = QUESTIONS_META[questionIndex];
    const timedOut = selectedIndex === null;
    const isCorrect = !timedOut && selectedIndex === meta.correct;

    const answer = await prisma.answer.upsert({
      where: { attemptId_questionIndex: { attemptId, questionIndex } },
      update: { selectedIndex, isCorrect, timedOut, timeTakenMs },
      create: { attemptId, questionIndex, selectedIndex, isCorrect, timedOut, timeTakenMs },
    });

    return NextResponse.json({ isCorrect, correctIndex: meta.correct, answerId: answer.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
