# Qui veut gagner... un José d'OR ? — Perfmaker

Quiz interne avec inscription, chrono, classement et dashboard admin.
Stack : **Next.js 14 (App Router) + Prisma + PostgreSQL**, pensé pour être déployé sur **Vercel**.

## 1. Installer en local

```bash
npm install
```

## 2. Créer la base de données (via Vercel — recommandé, aucune infra à gérer)

1. Pousse ce projet sur GitHub (repo privé ou public).
2. Va sur [vercel.com](https://vercel.com) → **Add New → Project** → importe le repo.
3. Une fois le projet créé (le premier déploiement peut échouer, c'est normal, pas de DB pour l'instant) :
   va dans l'onglet **Storage** du projet → **Create Database** → choisis **Postgres** (propulsé par Neon) → **Connect** au projet.
4. Vercel ajoute automatiquement plusieurs variables d'environnement au projet, dont `POSTGRES_PRISMA_URL` et `POSTGRES_URL_NON_POOLING`.
5. Dans **Settings → Environment Variables**, ajoute :
   - `DATABASE_URL` = valeur de `POSTGRES_PRISMA_URL`
   - `DIRECT_URL` = valeur de `POSTGRES_URL_NON_POOLING`
   - `ADMIN_TOKEN` = un mot de passe long et aléatoire (pour accéder à `/admin`)
6. Récupère ces variables en local pour créer les tables :

```bash
npm i -g vercel
vercel link
vercel env pull .env
npx prisma db push
```

`prisma db push` crée les tables `Player`, `Attempt`, `Answer` dans la base Vercel Postgres.

7. Relance un déploiement sur Vercel (Deployments → Redeploy), cette fois avec la base connectée.

> Alternative : tu peux utiliser n'importe quelle base Postgres managée (Supabase, Neon directement, Railway...) —
> il suffit de renseigner `DATABASE_URL` (et `DIRECT_URL` si le provider distingue connexion "pooled" et "directe").

## 3. Lancer en local

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## 4. Pages

- `/` — le quiz (langue → inscription → questions → résultat)
- `/leaderboard` — classement public (nom, société, score, temps — sans email)
- `/admin` — dashboard protégé par `ADMIN_TOKEN` : tous les joueurs, toutes leurs réponses détaillées et leur temps

## 5. Modifier les questions ou les traductions

- `lib/questions.ts` — structure des questions (bonne réponse, illustrations SVG, nombre d'options) : identique pour toutes les langues.
- `lib/translations.ts` — tous les textes visibles (interface + questions/réponses/feedback) pour `fr`, `en`, `de`, `it`, `es`.

Les deux fichiers sont indexés par position (0 à 9) : la question n°3 dans `questions.ts` doit correspondre à
l'entrée n°3 de chaque tableau de langue dans `translations.ts`.

## 6. Classement et ex-æquo

Le classement (`/api/leaderboard` et `/admin`) trie par **score décroissant**, puis par **temps total croissant** :
à score égal, le joueur le plus rapide passe devant.
