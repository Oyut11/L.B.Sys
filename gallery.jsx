/* gallery.jsx — hero (kinetic intro) + the browsing grid */
const { useState, useEffect, useRef } = React;

/* ---- region mapping for filters ---- */
const REGION = {
  "United States": "Americas", "Uruguay": "Latin America", "Trinidad": "Caribbean",
  "Martinique": "Caribbean", "Haiti": "Caribbean", "Nigeria": "Africa", "Kenya": "Africa",
  "Guyana": "Caribbean", "Cameroon": "Africa", "Uganda": "Africa", "Sweden": "Europe", "India": "South Asia"
};
const FILTERS = ["All", "Africa", "Caribbean", "Americas", "Latin America", "Europe", "South Asia"];

function useReveal() { return useRef(null); }

function Hero() {
  const [lit, setLit] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLit(true), 120); return () => clearTimeout(t); }, []);
  const ghosts = [
    { t: "COLONY", top: "12%", left: "60%", dur: 26, size: 1 },
    { t: "ARCHIVE", top: "68%", left: "-4%", dur: 34, size: 1.3 },
    { t: "SILENCE", top: "40%", left: "70%", dur: 30, size: 0.8 },
    { t: "MEMORY", top: "82%", left: "44%", dur: 38, size: 1.1 },
  ];
  return (
    <header className={"hero" + (lit ? " in" : "")}>
      <div className="hero-ghosts">
        {ghosts.map((g, i) => (
          <div key={i} className="ghost" style={{ top: g.top, left: g.left, animationDuration: g.dur + "s", fontSize: `clamp(40px, ${9 * g.size}vw, ${140 * g.size}px)` }}>{g.t}</div>
        ))}
      </div>

      <div className="hero-rule">
        <span className="hero-sys">L.B.Sys</span>
        <span className="hero-sys" style={{ color: "var(--ink-soft)" }}>// Living Book System</span>
        <span className="hero-meta">21 Records · 1903 – 2018 · Status: Open</span>
      </div>

      <h1 className="hero-title">
        <span className="word"><span>The</span></span>
        <span className="word"><span className="fill" style={{ transitionDelay: "0.1s" }}>Dangerous</span></span>
        <span className="word"><span style={{ transitionDelay: "0.2s" }}>Library</span></span>
      </h1>

      <p className="hero-lede">
        Twenty-one thinkers who documented what empire actually did — and refused to let it be filed away.
        Each book was read, in its time, as a <em>threat</em>. Several of their authors paid for it with careers, exile, or their lives.
        This is the open record.
      </p>

      <div className="hero-foot">
        <span className="scroll-cue"><span className="bar"></span> Scroll to enter the stacks</span>
      </div>
    </header>
  );
}

function Card({ thinker, n, onOpen }) {
  return (
    <article className="card" data-reveal style={{ "--cardAccent": thinker.accent }}
      onClick={() => onOpen(thinker)}>
      <span className="card-accent"></span>
      <div className="card-top">
        <span className="card-num">No. {String(n).padStart(2, "0")}</span>
        <span className="card-meta">{thinker.origin}<br />{thinker.life}</span>
      </div>
      <LBPortrait thinker={thinker} size={86} />
      <h3 className="card-name">{thinker.name}</h3>
      <div className="card-role">{thinker.role}</div>
      <p className="card-thesis">{thinker.thesis}</p>
      <div className="card-work">
        <span className="t">{thinker.work.title}</span>
        <span className="y">{thinker.work.year}</span>
      </div>
      <span className="card-enter">Open record →</span>
    </article>
  );
}

function Gallery({ thinkers, onOpen }) {
  const [filter, setFilter] = useState("All");
  const ref = useRef(null);
  const shown = thinkers.filter((t) => filter === "All" || REGION[t.origin] === filter);

  // reveal cards as they scroll into view; re-runs whenever the filtered set changes
  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    cards.forEach((el, i) => {
      el.classList.remove("in");
      el.style.transitionDelay = (i % 6) * 0.05 + "s";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [filter]);

  return (
    <div ref={ref}>
      <Hero />
      <section className="gallery-wrap" id="stacks">
        <div className="gallery-head">
          <h2>The Records</h2>
          <span className="count">{shown.length} of {thinkers.length} shown</span>
        </div>
        <div className="filters">
          {FILTERS.map((f) => (
            <button key={f} className={"filter-btn" + (filter === f ? " active" : "")} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className="grid">
          {shown.map((t) => (
            <Card key={t.id} thinker={t} n={thinkers.indexOf(t) + 1} onOpen={onOpen} />
          ))}
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Gallery, useReveal });
