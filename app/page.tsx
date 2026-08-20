"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LOCALES, Locale, UI, QUESTIONS, t } from "@/lib/translations";
import { QUESTIONS_META, TOTAL_QUESTIONS, TIME_LIMIT_SECONDS } from "@/lib/questions";

type Screen = "lang" | "register" | "quiz" | "win" | "gameover";

interface AnswerResult {
  correct: boolean | null; // null = not answered yet
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("lang");
  const [locale, setLocale] = useState<Locale>("en");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState<AnswerResult[]>(
    Array.from({ length: TOTAL_QUESTIONS }, () => ({ correct: null }))
  );
  const [locked, setLocked] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [timedOut, setTimedOut] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT_SECONDS);
  const [finalDurationMs, setFinalDurationMs] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const questionStartRef = useRef<number>(0);

  const ui = UI[locale];
  const questions = QUESTIONS[locale];

  function stopTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function startTimer() {
    stopTimer();
    setTimeLeft(TIME_LIMIT_SECONDS);
    questionStartRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          stopTimer();
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    if (screen === "quiz") startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, current]);

  async function postAnswer(questionIndex: number, selectedIndex: number | null, timeTakenMs: number) {
    if (!attemptId) return;
    try {
      await fetch("/api/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ attemptId, questionIndex, selectedIndex, timeTakenMs }),
      });
    } catch (e) {
      console.error(e);
    }
  }

  function handleTimeout() {
    setLocked((wasLocked) => {
      if (wasLocked) return wasLocked;
      setTimedOut(true);
      setSelected(null);
      const timeTaken = Date.now() - questionStartRef.current;
      postAnswer(current, null, timeTaken);
      setResults((prev) => {
        const next = [...prev];
        next[current] = { correct: false };
        return next;
      });
      return true;
    });
  }

  function selectAnswer(i: number) {
    if (locked) return;
    setLocked(true);
    setSelected(i);
    stopTimer();
    const timeTaken = Date.now() - questionStartRef.current;
    const meta = QUESTIONS_META[current];
    const isCorrect = i === meta.correct;
    if (isCorrect) setScore((s) => s + 1);
    setResults((prev) => {
      const next = [...prev];
      next[current] = { correct: isCorrect };
      return next;
    });
    postAnswer(current, i, timeTaken);
  }

  async function handleNext() {
    const nextIndex = current + 1;
    if (nextIndex >= TOTAL_QUESTIONS) {
      let finalScore = score;
      let durationMs = 0;
      try {
        const res = await fetch("/api/finish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ attemptId }),
        });
        const data = await res.json();
        if (typeof data.score === "number") finalScore = data.score;
        if (typeof data.durationMs === "number") durationMs = data.durationMs;
      } catch (e) {
        console.error(e);
      }
      setFinalDurationMs(durationMs);
      setScreen(finalScore === TOTAL_QUESTIONS ? "win" : "gameover");
      return;
    }
    setCurrent(nextIndex);
    setLocked(false);
    setSelected(null);
    setTimedOut(false);
  }

  function validateForm() {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = t(ui, "requiredField");
    if (!lastName.trim()) errs.lastName = t(ui, "requiredField");
    if (!email.trim()) errs.email = t(ui, "requiredField");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errs.email = t(ui, "invalidEmail");
    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleRegisterAndStart() {
    if (!validateForm()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, company, locale }),
      });
      const data = await res.json();
      if (data.attemptId) {
        setAttemptId(data.attemptId);
        setScreen("quiz");
      } else {
        setFormErrors({ form: t(ui, "savingError") });
      }
    } catch (e) {
      console.error(e);
      setFormErrors({ form: t(ui, "savingError") });
    } finally {
      setSubmitting(false);
    }
  }

  function resetGame() {
    stopTimer();
    setCurrent(0);
    setScore(0);
    setResults(Array.from({ length: TOTAL_QUESTIONS }, () => ({ correct: null })));
    setLocked(false);
    setSelected(null);
    setTimedOut(false);
    setScreen("lang");
    setAttemptId(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCompany("");
  }

  function formatDuration(ms: number) {
    const totalSec = Math.round(ms / 100) / 10;
    const min = Math.floor(totalSec / 60);
    const sec = (totalSec - min * 60).toFixed(1);
    return min > 0 ? `${min}m ${sec}s` : `${sec}s`;
  }

  const q = questions[current];
  const meta = QUESTIONS_META[current];

  return (
    <div className="wrap">
      {screen === "lang" && (
        <>
          <header>
            <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
            <h1>{ui.appTitle}</h1>
          </header>
          <section className="center-screen">
            <p className="subtitle">{ui.chooseLang}</p>
            <div className="lang-grid">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  className="lang-btn"
                  onClick={() => {
                    setLocale(l.code);
                    setScreen("register");
                  }}
                >
                  <span className="flag">{l.flag}</span> {l.label}
                </button>
              ))}
            </div>
          </section>
        </>
      )}

      {screen === "register" && (
        <>
          <header>
            <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
            <h1>{ui.appTitle}</h1>
            <p className="subtitle">{ui.appSubtitle}</p>
          </header>
          <section className="center-screen">
            <div className="form-panel">
              <div className="field">
                <label>{ui.firstName}</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {formErrors.firstName && <div className="field-error">{formErrors.firstName}</div>}
              </div>
              <div className="field">
                <label>{ui.lastName}</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {formErrors.lastName && <div className="field-error">{formErrors.lastName}</div>}
              </div>
              <div className="field">
                <label>{ui.email}</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {formErrors.email && <div className="field-error">{formErrors.email}</div>}
              </div>
              <div className="field">
                <label>
                  {ui.company} <span style={{ opacity: 0.6 }}>{ui.companyOptional}</span>
                </label>
                <input value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              {formErrors.form && <div className="field-error" style={{ marginBottom: "0.8rem" }}>{formErrors.form}</div>}
              <button className="big-btn" onClick={handleRegisterAndStart} disabled={submitting}>
                {ui.startBtn}
              </button>
            </div>
          </section>
        </>
      )}

      {screen === "quiz" && (
        <section>
          <div className="board">
            <div className="qpanel">
              <div className="qmeta">
                <span className="qnum">{t(ui, "questionOf", { n: current + 1, total: TOTAL_QUESTIONS })}</span>
                <span className="qgain">{q.gain ? "🎁 " + q.gain : ""}</span>
              </div>
              <div className="timerRow">
                <div className="timerTrack">
                  <div
                    className={"timerBar" + (timeLeft <= 5 ? " warn" : "")}
                    style={{ width: `${(timeLeft / TIME_LIMIT_SECONDS) * 100}%` }}
                  />
                </div>
                <span className={"timerNum" + (timeLeft <= 5 ? " warn" : "")}>{timeLeft}</span>
              </div>
              {meta.illustration && (
                <div className="illu-panel">
                  <div className="illu-label">{ui.situationLabel}</div>
                  <div className="illu-svg-wrap" dangerouslySetInnerHTML={{ __html: meta.illustration }} />
                </div>
              )}
              <p className="qtext">{q.q}</p>
              <div className="answers">
                {q.options.map((opt, i) => {
                  let cls = "ans";
                  if (locked) {
                    if (i === meta.correct) cls += " correct";
                    else if (i === selected) cls += " wrong";
                    else cls += " dim";
                  }
                  return (
                    <button key={i} className={cls} disabled={locked} onClick={() => selectAnswer(i)}>
                      <span className="badge">{String.fromCharCode(65 + i)}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
              {locked && (
                <div className="feedback">
                  <strong>
                    {timedOut ? ui.timeUpLabel + " " : selected === meta.correct ? ui.correctNote + " " : ui.noPointNote + " "}
                  </strong>
                  {q.feedback}
                </div>
              )}
              {locked && (
                <button className="nextBtn" onClick={handleNext}>
                  {current === TOTAL_QUESTIONS - 1 ? ui.seeResultBtn : ui.continueBtn}
                </button>
              )}
            </div>
            <div className="ladder">
              <p className="ladder-title">{ui.ladderTitle}</p>
              {questions
                .map((item, i) => ({ item, i }))
                .slice()
                .reverse()
                .map(({ item, i }) => {
                  let cls = "rung";
                  if (i < current) cls += results[i].correct ? " done" : " wrongRung";
                  else if (i === current) cls += " current";
                  return (
                    <div key={i} className={cls}>
                      <span className="rn">{i + 1}</span>
                      <span className="rg">{item.gain || "—"}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {screen === "win" && (
        <section className="end-screen">
          <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
          <p className="trophy">{ui.winTitle}</p>
          <p className="score">
            {score} / {TOTAL_QUESTIONS} {ui.scoreLabel} · {formatDuration(finalDurationMs)}
          </p>
          <div className="diploma">{ui.winMsg}</div>
          <button className="ghost-btn" onClick={resetGame}>
            {ui.restartBtn}
          </button>
          <Link href="/leaderboard">
            <button className="ghost-btn">{ui.leaderboardBtn}</button>
          </Link>
        </section>
      )}

      {screen === "gameover" && (
        <section className="end-screen">
          <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
          <p className="gameover-title">{ui.almostTitle}</p>
          <p className="gameover-msg">{ui.almostMsg}</p>
          <p className="score">
            {score} / {TOTAL_QUESTIONS} {ui.scoreLabel} · {formatDuration(finalDurationMs)}
          </p>
          <button className="ghost-btn" onClick={resetGame}>
            {ui.restartBtn}
          </button>
          <Link href="/leaderboard">
            <button className="ghost-btn">{ui.leaderboardBtn}</button>
          </Link>
        </section>
      )}
    </div>
  );
}
