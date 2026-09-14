"use client";

import { useState } from "react";
import { TOTAL_QUESTIONS } from "@/lib/questions";

interface Answer {
  questionIndex: number;
  selectedIndexes: number[];
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

const DELETE_PHRASE = "SUPPRIMER TOUTES LES DONNÉES";

export default function AdminDashboard() {
  const [token, setToken] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);
  const [error, setError] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState("");

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

  async function handleDeleteAll() {
    if (confirmText !== DELETE_PHRASE) return;
    setDeleting(true);
    setDeleteError("");
    try {
      const res = await fetch("/api/admin/players", {
        method: "DELETE",
        headers: { "x-admin-token": token },
      });
      if (!res.ok) {
        setDeleteError("Échec de la suppression.");
        return;
      }
      setAttempts([]);
      setShowDeleteConfirm(false);
      setConfirmText("");
    } catch (e) {
      setDeleteError("Erreur réseau lors de la suppression.");
    } finally {
      setDeleting(false);
    }
  }

  if (!unlocked) {
    return (
      <div className="wrap">
        <header>
          <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
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
        <img src="/logo.svg" alt="Perfmaker" className="logo-mark" />
        <h1>Dashboard admin</h1>
        <p className="subtitle">{attempts?.length || 0} tentative(s) enregistrée(s)</p>
      </header>

      <div className="danger-zone">
        {!showDeleteConfirm ? (
          <button
            className="danger-btn"
            onClick={() => setShowDeleteConfirm(true)}
            disabled={!attempts || attempts.length === 0}
          >
            🗑️ Supprimer toutes les statistiques des joueurs
          </button>
        ) : (
          <div className="danger-confirm">
            <p>
              Cette action est <strong>irréversible</strong> et supprimera définitivement tous les joueurs, tentatives et
              réponses. Pour confirmer, recopie exactement la phrase suivante :
            </p>
            <p className="danger-phrase">{DELETE_PHRASE}</p>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Recopie la phrase ici"
            />
            <div className="danger-actions">
              <button
                className="danger-btn"
                onClick={handleDeleteAll}
                disabled={confirmText !== DELETE_PHRASE || deleting}
              >
                {deleting ? "Suppression…" : "Confirmer la suppression définitive"}
              </button>
              <button
                className="ghost-btn"
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setConfirmText("");
                  setDeleteError("");
                }}
              >
                Annuler
              </button>
            </div>
            {deleteError && <p className="field-error">{deleteError}</p>}
          </div>
        )}
      </div>
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
              <th>Réponses (Q1→Q{TOTAL_QUESTIONS})</th>
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
                <td>{a.score} / {TOTAL_QUESTIONS}</td>
                <td>{formatDuration(a.durationMs)}</td>
                <td>{a.completed ? "Terminé" : "En cours"}</td>
                <td>
                  <div className="answers-cell">
                    {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => {
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
