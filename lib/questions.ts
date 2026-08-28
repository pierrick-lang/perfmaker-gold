// Structural, language-independent quiz data.
// The actual text (question, options, feedback, gain) lives in lib/translations.ts,
// indexed by the same position (0-14) so both stay in sync.
// `correct` is an array of correct option indices — length 1 for single-answer
// questions, length > 1 for multi-select questions (checkbox mode).

export const TIME_LIMIT_SECONDS = 45;

const ILLU_ACQUISITION = `<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="50" width="110" height="70" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="65" y="82" font-size="20" text-anchor="middle">📢</text>
  <text x="65" y="104" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Affiliate click</text>
  <path d="M124 85 L150 85" stroke="#4fd8ff" stroke-width="2" marker-end="url(#a1)"/>
  <rect x="150" y="50" width="110" height="70" rx="10" fill="#141a52" stroke="#4fd8ff"/>
  <text x="205" y="82" font-size="20" text-anchor="middle">🖥️</text>
  <text x="205" y="104" font-size="9" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">On-site journey</text>
  <path d="M264 85 L290 85" stroke="#ffc94a" stroke-width="2" marker-end="url(#a2)"/>
  <rect x="290" y="50" width="110" height="70" rx="10" fill="#141a52" stroke="#ffc94a"/>
  <text x="345" y="82" font-size="20" text-anchor="middle">✅</text>
  <text x="345" y="104" font-size="9" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">Conversion</text>
  <defs>
    <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fd8ff"/></marker>
    <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ffc94a"/></marker>
  </defs>
</svg>`;

const ILLU_WEATHER_SIGNALS = `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="115" height="160" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="67" y="70" font-size="26" text-anchor="middle">📖</text>
  <text x="67" y="130" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Jacket guide</text>
  <text x="67" y="144" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">(publisher)</text>
  <rect x="142" y="10" width="115" height="160" rx="10" fill="#141a52" stroke="#4fd8ff"/>
  <text x="199" y="70" font-size="26" text-anchor="middle">🌧️</text>
  <text x="199" y="130" font-size="9" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">Rain · July</text>
  <text x="199" y="144" font-size="9" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">(local weather)</text>
  <rect x="274" y="10" width="116" height="160" rx="10" fill="#141a52" stroke="#ffc94a"/>
  <text x="332" y="70" font-size="26" text-anchor="middle">🕓</text>
  <text x="332" y="130" font-size="9" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">Browsing</text>
  <text x="332" y="144" font-size="9" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">history</text>
</svg>`;

const ILLU_COUPON = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="60" y="10" width="280" height="180" rx="12" fill="#141a52" stroke="#2a3170"/>
  <text x="200" y="36" font-size="11" fill="#eaf0ff" text-anchor="middle" font-family="sans-serif" font-weight="700">Checkout</text>
  <rect x="84" y="54" width="232" height="14" rx="3" fill="#eaf0ff" opacity="0.15"/>
  <rect x="84" y="76" width="232" height="14" rx="3" fill="#eaf0ff" opacity="0.15"/>
  <rect x="84" y="108" width="160" height="30" rx="6" fill="#070a1f" stroke="#f8717a" stroke-width="2"/>
  <text x="94" y="128" font-size="10" fill="#f8717a" font-family="monospace">PROMO2026</text>
  <rect x="252" y="108" width="64" height="30" rx="6" fill="#2a3170"/>
  <text x="284" y="128" font-size="9" fill="#eaf0ff" text-anchor="middle" font-family="sans-serif">Apply</text>
  <text x="84" y="152" font-size="9" fill="#f8717a" font-family="sans-serif">⚠ Invalid code</text>
  <rect x="84" y="164" width="232" height="1" fill="#2a3170"/>
  <text x="200" y="184" font-size="9" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">The shopper hesitates... what now?</text>
</svg>`;

const ILLU_EXIT_INTENT = `<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="10" width="220" height="170" rx="12" fill="#141a52" stroke="#2a3170"/>
  <text x="150" y="36" font-size="11" fill="#eaf0ff" text-anchor="middle" font-family="sans-serif" font-weight="700">Basket</text>
  <rect x="60" y="52" width="180" height="14" rx="3" fill="#eaf0ff" opacity="0.2"/>
  <rect x="60" y="74" width="180" height="14" rx="3" fill="#eaf0ff" opacity="0.2"/>
  <rect x="60" y="104" width="180" height="34" rx="6" fill="#070a1f" stroke="#ffc94a"/>
  <text x="150" y="125" font-size="14" fill="#ffc94a" text-anchor="middle" font-family="sans-serif" font-weight="700">£320</text>
  <path d="M270 40 C 320 20, 360 60, 385 30" stroke="#f8717a" stroke-width="2" fill="none" marker-end="url(#exitArrow)"/>
  <defs><marker id="exitArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f8717a"/></marker></defs>
  <text x="330" y="90" font-size="9" fill="#f8717a" text-anchor="middle" font-family="sans-serif">exit intent</text>
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

const ILLU_CROSS_SELL = `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="140" height="140" rx="10" fill="#141a52" stroke="#ffc94a" stroke-width="2"/>
  <text x="90" y="100" font-size="34" text-anchor="middle">☕</text>
  <text x="90" y="140" font-size="9" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">In basket</text>
  <path d="M168 90 L196 90" stroke="#4fd8ff" stroke-width="2" marker-end="url(#csArrow)"/>
  <defs><marker id="csArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fd8ff"/></marker></defs>
  <rect x="204" y="20" width="80" height="140" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="244" y="90" font-size="26" text-anchor="middle">🫘</text>
  <text x="244" y="140" font-size="8" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Beans</text>
  <rect x="296" y="20" width="84" height="140" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="338" y="90" font-size="26" text-anchor="middle">🧴</text>
  <text x="338" y="140" font-size="8" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Descaler</text>
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

const ILLU_LEAD_GEN = `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="15" width="110" height="140" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="75" y="80" font-size="24" text-anchor="middle">📘</text>
  <text x="75" y="130" font-size="8" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Buying guide</text>
  <path d="M136 85 L162 85" stroke="#4fd8ff" stroke-width="2" marker-end="url(#lgArrow1)"/>
  <rect x="170" y="15" width="110" height="140" rx="10" fill="#141a52" stroke="#4fd8ff"/>
  <text x="225" y="80" font-size="24" text-anchor="middle">⭐</text>
  <text x="225" y="130" font-size="8" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">Premium revisit</text>
  <path d="M286 85 L312 85" stroke="#ffc94a" stroke-width="2" marker-end="url(#lgArrow2)"/>
  <rect x="320" y="15" width="65" height="140" rx="10" fill="#141a52" stroke="#ffc94a"/>
  <text x="352" y="80" font-size="20" text-anchor="middle">✉️</text>
  <text x="352" y="128" font-size="7" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">opt-in</text>
  <defs>
    <marker id="lgArrow1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fd8ff"/></marker>
    <marker id="lgArrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ffc94a"/></marker>
  </defs>
</svg>`;

const ILLU_COUNTDOWN = `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="10" width="300" height="150" rx="12" fill="#141a52" stroke="#2a3170"/>
  <text x="200" y="36" font-size="18" text-anchor="middle">⏰</text>
  <rect x="90" y="52" width="70" height="42" rx="6" fill="#070a1f" stroke="#f8717a"/>
  <text x="125" y="80" font-size="16" fill="#f8717a" text-anchor="middle" font-family="sans-serif" font-weight="700">01:58</text>
  <text x="125" y="106" font-size="8" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">left</text>
  <rect x="180" y="52" width="140" height="42" rx="6" fill="#070a1f" stroke="#ffc94a"/>
  <text x="250" y="78" font-size="10" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">Basket reminder</text>
  <text x="250" y="106" font-size="8" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">+ delivery reassurance</text>
</svg>`;

const ILLU_RETURN_SWAP = `<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="15" width="150" height="140" rx="10" fill="#141a52" stroke="#2a3170"/>
  <text x="105" y="90" font-size="30" text-anchor="middle">🎁</text>
  <text x="105" y="135" font-size="8" fill="#9aa3d6" text-anchor="middle" font-family="sans-serif">Return: jumper</text>
  <path d="M188 85 L218 85" stroke="#4fd8ff" stroke-width="2" marker-end="url(#swapArrow)"/>
  <defs><marker id="swapArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fd8ff"/></marker></defs>
  <rect x="226" y="15" width="150" height="140" rx="10" fill="#141a52" stroke="#34d399"/>
  <text x="301" y="90" font-size="30" text-anchor="middle">🔄</text>
  <text x="301" y="135" font-size="8" fill="#34d399" text-anchor="middle" font-family="sans-serif">Guided swap</text>
</svg>`;

export interface QuestionMeta {
  correct: number[];
  optionCount: number;
  illustration: string | null;
  hasGain: boolean;
}

export const QUESTIONS_META: QuestionMeta[] = [
  { correct: [0], optionCount: 4, illustration: ILLU_ACQUISITION, hasGain: true },
  { correct: [2], optionCount: 4, illustration: null, hasGain: true },
  { correct: [1], optionCount: 4, illustration: null, hasGain: false },
  { correct: [0, 1, 3], optionCount: 4, illustration: ILLU_WEATHER_SIGNALS, hasGain: false },
  { correct: [3], optionCount: 4, illustration: ILLU_COUPON, hasGain: false },
  { correct: [0, 2, 3], optionCount: 4, illustration: ILLU_EXIT_INTENT, hasGain: false },
  { correct: [1, 3], optionCount: 4, illustration: ILLU_MERCH, hasGain: false },
  { correct: [1], optionCount: 4, illustration: ILLU_CROSS_SELL, hasGain: false },
  { correct: [0, 3], optionCount: 4, illustration: ILLU_GAMIF, hasGain: false },
  { correct: [2], optionCount: 4, illustration: ILLU_LEAD_GEN, hasGain: false },
  { correct: [0], optionCount: 4, illustration: null, hasGain: false },
  { correct: [1], optionCount: 4, illustration: ILLU_COUNTDOWN, hasGain: false },
  { correct: [2], optionCount: 4, illustration: ILLU_RETURN_SWAP, hasGain: false },
  { correct: [2], optionCount: 4, illustration: null, hasGain: true },
  { correct: [0], optionCount: 4, illustration: null, hasGain: true },
];

export const TOTAL_QUESTIONS = QUESTIONS_META.length;
