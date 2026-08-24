// Structural, language-independent quiz data.
// The actual text (question, options, feedback, gain) lives in lib/translations.ts,
// indexed by the same position (0-9) so both stay in sync.

export const TIME_LIMIT_SECONDS = 25;

const ILLU_FUNNEL = `<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="50" width="110" height="70" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="65" y="82" font-size="20" text-anchor="middle">📢</text>
  <text x="65" y="104" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Traffic</text>
  <path d="M124 85 L150 85" stroke="#4fd8ff" stroke-width="2" marker-end="url(#a1)"/>
  <rect x="150" y="50" width="110" height="70" rx="10" fill="#141a52" stroke="#4fd8ff"/>
  <text x="205" y="82" font-size="20" text-anchor="middle">🖥️</text>
  <text x="205" y="104" font-size="9" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">Onsite</text>
  <path d="M264 85 L290 85" stroke="#ffc94a" stroke-width="2" marker-end="url(#a2)"/>
  <rect x="290" y="50" width="110" height="70" rx="10" fill="#141a52" stroke="#ffc94a"/>
  <text x="345" y="82" font-size="20" text-anchor="middle">✅</text>
  <text x="345" y="104" font-size="9" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">Conversion</text>
  <defs>
    <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fd8ff"/></marker>
    <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ffc94a"/></marker>
  </defs>
</svg>`;

const ILLU_JAMES_EMMA = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="180" height="180" rx="10" fill="#141a52" stroke="#2a3170"/>
  <rect x="10" y="10" width="180" height="28" rx="10" fill="#1c2266"/>
  <circle cx="24" cy="24" r="4" fill="#f8717a"/><circle cx="36" cy="24" r="4" fill="#ffc94a"/><circle cx="48" cy="24" r="4" fill="#34d399"/>
  <text x="100" y="29" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">James · Google Ads</text>
  <rect x="24" y="52" width="152" height="16" rx="3" fill="#4fd8ff" opacity="0.25"/>
  <rect x="24" y="76" width="120" height="8" rx="2" fill="#eaf0ff" opacity="0.5"/>
  <rect x="24" y="90" width="90" height="8" rx="2" fill="#eaf0ff" opacity="0.3"/>
  <rect x="24" y="130" width="152" height="40" rx="6" fill="#ffc94a" opacity="0.15" stroke="#ffc94a" stroke-dasharray="4 3"/>
  <text x="100" y="152" font-size="8.5" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">-10%</text>
  <rect x="210" y="10" width="180" height="180" rx="10" fill="#141a52" stroke="#2a3170"/>
  <rect x="210" y="10" width="180" height="28" rx="10" fill="#1c2266"/>
  <circle cx="224" cy="24" r="4" fill="#f8717a"/><circle cx="236" cy="24" r="4" fill="#ffc94a"/><circle cx="248" cy="24" r="4" fill="#34d399"/>
  <text x="300" y="29" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Emma · CRM</text>
  <rect x="224" y="52" width="152" height="16" rx="3" fill="#4fd8ff" opacity="0.25"/>
  <rect x="224" y="76" width="120" height="8" rx="2" fill="#eaf0ff" opacity="0.5"/>
  <rect x="224" y="90" width="90" height="8" rx="2" fill="#eaf0ff" opacity="0.3"/>
  <rect x="224" y="130" width="152" height="40" rx="6" fill="#34d399" opacity="0.15" stroke="#34d399" stroke-dasharray="4 3"/>
  <text x="300" y="147" font-size="8.5" fill="#34d399" text-anchor="middle" font-family="sans-serif">Welcome back Emma</text>
  <text x="300" y="159" font-size="8.5" fill="#34d399" text-anchor="middle" font-family="sans-serif">Your cart is waiting</text>
</svg>`;

const ILLU_MERCH = `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="380" height="160" rx="12" fill="#141a52" stroke="#2a3170"/>
  <rect x="30" y="50" width="90" height="100" rx="8" fill="#070a1f" stroke="#ffc94a" stroke-width="2"/>
  <circle cx="75" cy="90" r="22" fill="#3a3f8a"/>
  <rect x="42" y="120" width="66" height="8" rx="2" fill="#ffc94a" opacity="0.6"/>
  <rect x="42" y="132" width="40" height="7" rx="2" fill="#eaf0ff" opacity="0.3"/>
  <rect x="150" y="50" width="90" height="100" rx="8" fill="#070a1f" stroke="#2a3170"/>
  <circle cx="195" cy="90" r="22" fill="#2a3170"/>
  <rect x="162" y="120" width="66" height="8" rx="2" fill="#eaf0ff" opacity="0.25"/>
  <rect x="162" y="132" width="40" height="7" rx="2" fill="#eaf0ff" opacity="0.2"/>
  <rect x="270" y="50" width="90" height="100" rx="8" fill="#070a1f" stroke="#2a3170"/>
  <circle cx="315" cy="90" r="22" fill="#2a3170"/>
  <rect x="282" y="120" width="66" height="8" rx="2" fill="#eaf0ff" opacity="0.25"/>
  <rect x="282" y="132" width="40" height="7" rx="2" fill="#eaf0ff" opacity="0.2"/>
</svg>`;

const ILLU_GAMIF = `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="170" height="160" rx="10" fill="#141a52" stroke="#2a3170"/>
  <rect x="26" y="42" width="138" height="90" rx="6" fill="#070a1f"/>
  <rect x="40" y="66" width="110" height="10" rx="2" fill="#eaf0ff" opacity="0.3"/>
  <rect x="40" y="84" width="80" height="8" rx="2" fill="#eaf0ff" opacity="0.2"/>
  <rect x="40" y="104" width="60" height="16" rx="8" fill="#2a3170"/>
  <rect x="210" y="10" width="170" height="160" rx="10" fill="#141a52" stroke="#4fd8ff"/>
  <circle cx="295" cy="95" r="45" fill="#070a1f" stroke="#4fd8ff" stroke-width="2"/>
  <path d="M295 95 L295 50 A45 45 0 0 1 334 117 Z" fill="#ffc94a" opacity="0.5"/>
  <path d="M295 95 L334 117 A45 45 0 0 1 256 117 Z" fill="#4fd8ff" opacity="0.4"/>
  <path d="M295 95 L256 117 A45 45 0 0 1 295 50 Z" fill="#34d399" opacity="0.35"/>
  <circle cx="295" cy="95" r="6" fill="#eaf0ff"/>
</svg>`;

const ILLU_COUPON = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="10" width="280" height="180" rx="12" fill="#141a52" stroke="#2a3170"/>
  <rect x="84" y="54" width="232" height="14" rx="3" fill="#eaf0ff" opacity="0.15"/>
  <rect x="84" y="76" width="232" height="14" rx="3" fill="#eaf0ff" opacity="0.15"/>
  <rect x="84" y="108" width="160" height="30" rx="6" fill="#070a1f" stroke="#f8717a" stroke-width="2"/>
  <text x="94" y="128" font-size="10" fill="#f8717a" font-family="monospace">PROMO2026</text>
  <rect x="252" y="108" width="64" height="30" rx="6" fill="#2a3170"/>
  <text x="84" y="152" font-size="9" fill="#f8717a" font-family="sans-serif">⚠</text>
</svg>`;

const ILLU_STOCK = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="10" width="150" height="180" rx="12" fill="#141a52" stroke="#2a3170"/>
  <rect x="56" y="26" width="118" height="90" rx="8" fill="#070a1f"/>
  <circle cx="115" cy="71" r="26" fill="#2a3170"/>
  <rect x="56" y="126" width="90" height="10" rx="2" fill="#eaf0ff" opacity="0.5"/>
  <rect x="56" y="160" width="102" height="18" rx="9" fill="#f8717a" opacity="0.18" stroke="#f8717a"/>
  <path d="M195 100 L223 100" stroke="#ffc94a" stroke-width="2" marker-end="url(#arrowhead)"/>
  <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ffc94a"/></marker></defs>
  <rect x="230" y="10" width="150" height="180" rx="12" fill="#141a52" stroke="#ffc94a" stroke-dasharray="4 3"/>
  <rect x="246" y="26" width="118" height="90" rx="8" fill="#070a1f"/>
  <circle cx="305" cy="71" r="26" fill="#3a3f8a" opacity="0.6"/>
  <rect x="246" y="126" width="90" height="10" rx="2" fill="#ffc94a" opacity="0.6"/>
</svg>`;

const ILLU_NOEL = `<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="10" width="280" height="140" rx="12" fill="#141a52" stroke="#2a3170"/>
  <text x="200" y="36" font-size="18" text-anchor="middle">🎄</text>
  <rect x="90" y="54" width="55" height="40" rx="6" fill="#070a1f" stroke="#34d399"/>
  <text x="117" y="80" font-size="16" fill="#34d399" text-anchor="middle" font-family="sans-serif" font-weight="700">03</text>
  <rect x="160" y="54" width="55" height="40" rx="6" fill="#070a1f" stroke="#34d399"/>
  <text x="187" y="80" font-size="16" fill="#34d399" text-anchor="middle" font-family="sans-serif" font-weight="700">14</text>
  <rect x="230" y="54" width="55" height="40" rx="6" fill="#070a1f" stroke="#34d399"/>
  <text x="257" y="80" font-size="16" fill="#34d399" text-anchor="middle" font-family="sans-serif" font-weight="700">52</text>
</svg>`;

export interface QuestionMeta {
  correct: number;
  optionCount: number;
  illustration: string | null;
  hasGain: boolean;
}

export const QUESTIONS_META: QuestionMeta[] = [
  { correct: 2, optionCount: 4, illustration: ILLU_FUNNEL, hasGain: true },
  { correct: 1, optionCount: 4, illustration: null, hasGain: true },
  { correct: 0, optionCount: 4, illustration: null, hasGain: false },
  { correct: 1, optionCount: 2, illustration: ILLU_JAMES_EMMA, hasGain: false },
  { correct: 2, optionCount: 4, illustration: ILLU_MERCH, hasGain: false },
  { correct: 1, optionCount: 4, illustration: ILLU_GAMIF, hasGain: false },
  { correct: 2, optionCount: 4, illustration: ILLU_COUPON, hasGain: false },
  { correct: 0, optionCount: 4, illustration: ILLU_STOCK, hasGain: false },
  { correct: 0, optionCount: 4, illustration: ILLU_NOEL, hasGain: true },
  { correct: 2, optionCount: 4, illustration: null, hasGain: true },
];

export const TOTAL_QUESTIONS = QUESTIONS_META.length;
