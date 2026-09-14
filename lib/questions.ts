// Structural, language-independent quiz data.
// The actual text (question, options, feedback, gain) lives in lib/translations.ts,
// indexed by the same position (0-7) so both stay in sync.
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

const ILLU_OUT_OF_STOCK = `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="150" height="160" rx="10" fill="#141a52" stroke="#2a3170"/>
  <rect x="36" y="26" width="118" height="90" rx="8" fill="#070a1f"/>
  <circle cx="95" cy="71" r="26" fill="#2a3170" opacity="0.5"/>
  <line x1="70" y1="46" x2="120" y2="96" stroke="#f8717a" stroke-width="3"/>
  <line x1="120" y1="46" x2="70" y2="96" stroke="#f8717a" stroke-width="3"/>
  <rect x="36" y="126" width="118" height="18" rx="9" fill="#f8717a" opacity="0.18" stroke="#f8717a"/>
  <text x="95" y="139" font-size="8" fill="#f8717a" text-anchor="middle" font-family="sans-serif">Out of stock</text>
  <path d="M178 90 L204 90" stroke="#ffc94a" stroke-width="2" marker-end="url(#oosArrow)"/>
  <defs><marker id="oosArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ffc94a"/></marker></defs>
  <rect x="212" y="10" width="80" height="160" rx="10" fill="#141a52" stroke="#ffc94a" stroke-dasharray="4 3"/>
  <text x="252" y="85" font-size="22" text-anchor="middle">🔁</text>
  <text x="252" y="140" font-size="7.5" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">Close</text>
  <text x="252" y="150" font-size="7.5" fill="#ffc94a" text-anchor="middle" font-family="sans-serif">alternative</text>
  <rect x="304" y="10" width="76" height="160" rx="10" fill="#141a52" stroke="#4fd8ff" stroke-dasharray="4 3"/>
  <text x="342" y="85" font-size="22" text-anchor="middle">🔔</text>
  <text x="342" y="140" font-size="7.5" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">Back-in-stock</text>
  <text x="342" y="150" font-size="7.5" fill="#4fd8ff" text-anchor="middle" font-family="sans-serif">opt-in</text>
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

export interface QuestionMeta {
  correct: number[];
  optionCount: number;
  illustration: string | null;
  hasGain: boolean;
}

export const QUESTIONS_META: QuestionMeta[] = [
  { correct: [0], optionCount: 4, illustration: ILLU_ACQUISITION, hasGain: true },       // 1. Post-click roadworks
  { correct: [0, 1, 3], optionCount: 4, illustration: ILLU_WEATHER_SIGNALS, hasGain: true }, // 2. Weather warning (multi)
  { correct: [3], optionCount: 4, illustration: ILLU_COUPON, hasGain: false },           // 3. Coupon detour
  { correct: [0, 1, 2, 3], optionCount: 4, illustration: ILLU_EXIT_INTENT, hasGain: false }, // 4. Margin junction (multi, all 4)
  { correct: [1], optionCount: 4, illustration: ILLU_CROSS_SELL, hasGain: false },       // 5. AOV lane
  { correct: [0, 1, 3], optionCount: 4, illustration: ILLU_OUT_OF_STOCK, hasGain: false }, // 6. Out-of-stock hazard (multi)
  { correct: [0, 1, 2, 3], optionCount: 4, illustration: ILLU_GAMIF, hasGain: true },    // 7. Gamification checkpoint (multi, all 4)
  { correct: [1], optionCount: 4, illustration: ILLU_COUNTDOWN, hasGain: true },         // 8. Final-hours warning
];

export const TOTAL_QUESTIONS = QUESTIONS_META.length;
