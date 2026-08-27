"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TOTAL_QUESTIONS } from "@/lib/questions";

interface Row {
  firstName: string;
  lastName: string;
  company: string | null;
  score: number;
  durationMs: number | null;
  locale: string;
  finishedAt: string | null;
}

function formatDuration(ms: number | null) {
  if (ms === null) return "—";
  const totalSec = Math.round(ms / 100) / 10;
  const min = Math.floor(totalSec / 60);
  const sec = (totalSec - min * 60).toFixed(1);
  return min > 0 ? `${min}m ${sec}s` : `${sec}s`;
}

export default function Leaderboard() {
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then((data) => setRows(data.rows || []))
      .catch(() => setRows([]));
  }, []);

  return (
    <div className="wrap">
      <header>
        <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
        <h1>Classement général</h1>
        <p className="subtitle">Meilleur score, puis temps le plus rapide en cas d'égalité.</p>
      </header>
      <section>
        <Link href="/">
          <button className="ghost-btn">← Retour au quiz</button>
        </Link>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>Rang</th>
                <th>Joueur</th>
                <th>Société</th>
                <th>Score</th>
                <th>Temps</th>
              </tr>
            </thead>
            <tbody>
              {rows === null && (
                <tr>
                  <td colSpan={5}>Chargement…</td>
                </tr>
              )}
              {rows && rows.length === 0 && (
                <tr>
                  <td colSpan={5}>Aucun résultat pour le moment.</td>
                </tr>
              )}
              {rows &&
                rows.map((r, i) => (
                  <tr key={i}>
                    <td>#{i + 1}</td>
                    <td>
                      {r.firstName} {r.lastName}
                    </td>
                    <td>{r.company || "—"}</td>
                    <td>
                      {r.score} / {TOTAL_QUESTIONS}
                    </td>
                    <td>{formatDuration(r.durationMs)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
