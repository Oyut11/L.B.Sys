/* portrait.jsx — generative abstract "marks" standing in for portraits.
   No faces. Woodcut / risograph / constructivist vocabulary.
   Deterministic per thinker via a seed derived from id. */

function seedFrom(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0);
}
function rng(seed) {
  let s = seed || 1;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

// six mark generators — all abstract, high-contrast
function MarkRays({ a, ink, r }) {
  const n = 18 + Math.floor(r() * 10);
  const rays = [];
  for (let i = 0; i < n; i++) {
    const ang = (i / n) * Math.PI * 2;
    const len = 46 + r() * 6;
    rays.push(<line key={i} x1="50" y1="50" x2={50 + Math.cos(ang) * len} y2={50 + Math.sin(ang) * len}
      stroke={ink} strokeWidth={1.2 + r() * 2.4} />);
  }
  return (<g>{rays}<circle cx="50" cy="50" r="20" fill={a} /><circle cx="50" cy="50" r="20" fill="none" stroke={ink} strokeWidth="2.5" /></g>);
}
function MarkHalftone({ a, ink, r }) {
  const dots = [];
  for (let y = 0; y < 11; y++) for (let x = 0; x < 11; x++) {
    const dx = x * 9 + 6, dy = y * 9 + 6;
    const d = Math.hypot(dx - 50, dy - 50) / 50;
    const rad = Math.max(0, (1 - d) * 4.6);
    if (rad > 0.3) dots.push(<circle key={x + "-" + y} cx={dx} cy={dy} r={rad} fill={ink} />);
  }
  return (<g><rect x="4" y="4" width="92" height="92" fill={a} />{dots}</g>);
}
function MarkBars({ a, ink, r }) {
  const bars = [];
  let y = 8;
  while (y < 92) {
    const h = 5 + r() * 16;
    bars.push(<rect key={y} x="8" y={y} width="84" height={h} fill={r() > 0.5 ? a : ink} />);
    y += h + 3 + r() * 4;
  }
  return (<g>{bars}<rect x="8" y="8" width="84" height="84" fill="none" stroke={ink} strokeWidth="2.5" /></g>);
}
function MarkRings({ a, ink, r }) {
  const rings = [];
  const off = (r() - 0.5) * 16;
  for (let i = 8; i >= 1; i--) {
    rings.push(<circle key={i} cx={50 + (i % 2 ? off : -off) * 0.4} cy="50" r={i * 5.4}
      fill="none" stroke={i % 2 ? ink : a} strokeWidth={i % 2 ? 2.4 : 4} />);
  }
  return (<g>{rings}<circle cx={50 + off} cy="50" r="5" fill={a} /></g>);
}
function MarkSlash({ a, ink, r }) {
  // constructivist diagonal field
  const lines = [];
  for (let i = -6; i < 14; i++) {
    const x = i * 9;
    lines.push(<line key={i} x1={x} y1="100" x2={x + 60} y2="0" stroke={i % 3 === 0 ? a : ink} strokeWidth={i % 3 === 0 ? 5 : 1.6} />);
  }
  return (<g><clipPath id={"cs" + Math.floor(r() * 1e6)}></clipPath>{lines}<rect x="4" y="4" width="92" height="92" fill="none" stroke={ink} strokeWidth="2.5" /></g>);
}
function MarkType({ a, ink, r, ch }) {
  return (<g>
    <rect x="6" y="6" width="88" height="88" fill={a} />
    <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
      fontFamily="'Bodoni Moda', serif" fontWeight="900" fontSize="74" fill={ink}
      style={{ fontStyle: "italic" }}>{ch}</text>
    <rect x="6" y="6" width="88" height="88" fill="none" stroke={ink} strokeWidth="3" />
  </g>);
}

const MARKS = [MarkRays, MarkHalftone, MarkBars, MarkRings, MarkSlash, MarkType];

function LBPortrait({ thinker, size = 100, animate = false }) {
  const seed = seedFrom(thinker.id);
  const r = rng(seed);
  const idx = seed % MARKS.length;
  const Mark = MARKS[idx];
  const ch = (thinker.name.replace(/[^A-Za-z]/g, "")[0] || "X").toUpperCase();
  // misregistration offset for riso feel
  const dx = (((seed >> 3) % 7) - 3) * 0.6;
  const dy = (((seed >> 7) % 7) - 3) * 0.6;
  return (
    <svg className="card-portrait" width={size} height={size} viewBox="0 0 100 100"
      style={{ width: size, height: size, maxWidth: "100%", display: "block" }} aria-hidden="true">
      {/* misregistered accent ghost */}
      <g transform={`translate(${dx},${dy})`} opacity="0.55">
        <Mark a={thinker.accent} ink={thinker.accent} r={rng(seed + 1)} ch={ch} />
      </g>
      <g>
        <Mark a={thinker.accent} ink="var(--ink)" r={rng(seed)} ch={ch} />
      </g>
    </svg>
  );
}

window.LBPortrait = LBPortrait;
