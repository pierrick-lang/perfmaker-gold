"use client";

import { useState } from "react";

interface Answer {
  questionIndex: number;
  selectedIndex: number | null;
  isCorrect: boolean;
  timedOut: boolean;
  timeTakenMs: number;
}
interface Attempt {
  id: string;
  locale: string;
  startedAt: string;
  finishedAt: string | null;
  durationMs: number | null;
  score: number;
  completed: boolean;
  player: { firstName: string; lastName: string; email: string; company: string | null };
  answers: Answer[];
}

function formatDuration(ms: number | null) {
  if (ms === null) return "—";
  const totalSec = Math.round(ms / 100) / 10;
  const min = Math.floor(totalSec / 60);
  const sec = (totalSec - min * 60).toFixed(1);
  return min > 0 ? `${min}m ${sec}s` : `${sec}s`;
}

export default function AdminDashboard() {
  const [token, setToken] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);
  const [error, setError] = useState("");

  async function load() {
    setError("");
    try {
      const res = await fetch("/api/admin/players", { headers: { "x-admin-token": token } });
      if (res.status === 401) {
        setError("Token invalide.");
        return;
      }
      const data = await res.json();
      setAttempts(data.attempts || []);
      setUnlocked(true);
    } catch (e) {
      setError("Erreur de chargement.");
    }
  }

  if (!unlocked) {
    return (
      <div className="wrap">
        <header>
          <p className="eyebrow">Perfmaker</p>
          <h1>Dashboard admin</h1>
        </header>
        <div className="admin-gate">
          <input
            type="password"
            placeholder="Token admin"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load()}
          />
          <button className="big-btn" onClick={load}>
            Accéder au dashboard
          </button>
          {error && <p className="field-error" style={{ marginTop: "1rem" }}>{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="wrap">
      <header>
        <p className="eyebrow">Perfmaker</p>
        <h1>Dashboard admin</h1>
        <p className="subtitle">{attempts?.length || 0} tentative(s) enregistrée(s)</p>
      </header>
      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>Joueur</th>
              <th>Email</th>
              <th>Société</th>
              <th>Langue</th>
              <th>Score</th>
              <th>Temps</th>
              <th>Statut</th>
              <th>Réponses (Q1→Q10)</th>
            </tr>
          </thead>
          <tbody>
            {attempts?.map((a) => (
              <tr key={a.id}>
                <td>
                  {a.player.firstName} {a.player.lastName}
                </td>
                <td>{a.player.email}</td>
                <td>{a.player.company || "—"}</td>
                <td>{a.locale.toUpperCase()}</td>
                <td>{a.score} / 10</td>
                <td>{formatDuration(a.durationMs)}</td>
                <td>{a.completed ? "Terminé" : "En cours"}</td>
                <td>
                  <div className="answers-cell">
                    {Array.from({ length: 10 }, (_, i) => {
                      const ans = a.answers.find((x) => x.questionIndex === i);
                      const cls = ans ? (ans.isCorrect ? "dot ok" : "dot ko") : "dot";
                      const label = ans ? (ans.timedOut ? "⏱" : ans.isCorrect ? "✓" : "✗") : "·";
                      return (
                        <span key={i} className={cls} title={`Q${i + 1}: ${ans ? (ans.timedOut ? "temps écoulé" : ans.isCorrect ? "correct" : "incorrect") : "non répondu"}`}>
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
