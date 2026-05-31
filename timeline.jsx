/* timeline.jsx — "The Machinery of Empire": a chronological dossier of colonial systems. */

// Shared sources footer (used by both the Timeline and Tracing Back).
function SourceList({ sources }) {
  return (
    <div className="dossier-sources reveal">
      <span className="ds-label">Sources &amp; further reading</span>
      <ul>
        {sources.map((s, i) => (
          <li key={i}>
            <a href={"https://www.google.com/search?q=" + encodeURIComponent(s)} target="_blank" rel="noopener noreferrer">
              {s}<span className="ds-ext"> ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
window.SourceList = SourceList;

function SpanChart({ empires, onJump }) {
  const MIN = 1400, MAX = 2025, RANGE = MAX - MIN;
  const ticks = [1400, 1500, 1600, 1700, 1800, 1900, 2000];
  const pct = (y) => ((y - MIN) / RANGE) * 100;
  return (
    <div className="span-chart reveal">
      <div className="sc-axis">
        {ticks.map((t) => (
          <div key={t} className="sc-tick" style={{ left: pct(t) + "%" }}>
            <span className="sc-tick-label">{t}</span>
          </div>
        ))}
      </div>
      <div className="sc-rows">
        {empires.map((e) => (
          <button key={e.id} className="sc-row" onClick={() => onJump(e.id)} title={"Jump to " + e.name}>
            <span className="sc-name">{e.name.replace(/^The /, "")}</span>
            <span className="sc-track">
              <span className="sc-bar" style={{ left: pct(e.startY) + "%", width: (pct(e.endY) - pct(e.startY)) + "%", background: e.accent }}>
                {e.ongoing && <span className="sc-arrow">▸</span>}
              </span>
            </span>
            <span className="sc-era">{e.era}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function EmpireEntry({ empire, n, total }) {
  const fields = [
    { label: "Who Led It", key: "architects", n: "I" },
    { label: "Why", key: "why", n: "II" },
    { label: "How It Happened", key: "how", n: "III" },
    { label: "The Mechanism", key: "mechanism", n: "IV" },
    { label: "The Human Toll", key: "toll", n: "V" },
    { label: "How — and Why — It Ended", key: "ending", n: "VI" }
  ];
  return (
    <section className="empire" id={"empire-" + empire.id} style={{ "--accent": empire.accent }}>
      <div className="empire-head reveal">
        <div className="empire-spine">
          <span className="empire-node"></span>
          <span className="empire-era">{empire.era}</span>
          <span className="empire-seq">{String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        <div className="empire-title-block">
          <h2 className="empire-name">{empire.name}</h2>
          <p className="empire-indictment">{empire.indictment}</p>
        </div>
      </div>

      <div className="empire-grid">
        {fields.map((f) => (
          <div className="empire-field reveal" key={f.key}>
            <div className="ef-label"><span className="ef-num">{f.n}</span>{f.label}</div>
            <div className="ef-body">{empire[f.key]}</div>
          </div>
        ))}
      </div>

      {empire.sources && empire.sources.length > 0 && <SourceList sources={empire.sources} />}
    </section>
  );
}

function Timeline() {
  const empires = window.LB_EMPIRES;
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    const els = rootRef.current ? rootRef.current.querySelectorAll(".reveal") : [];
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = (id) => {
    const el = document.getElementById("empire-" + id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };

  return (
    <div className="timeline-view" ref={rootRef}>
      <header className="tl-mast">
        <div className="tl-kicker">The Timeline · {empires.length} colonial systems · 1415 — present</div>
        <h1 className="tl-title">The Machinery<br />of Empire</h1>
        <p className="tl-lede">
          Before the thinkers, the machine. Six centuries of conquest, read as what they were:
          engineered systems for moving wealth from the many to the few, and the human cost filed under
          <em> progress</em>. Each entry traces one empire — who built it, why, how it worked, what it cost,
          and how it finally came apart.
        </p>
      </header>

      <SpanChart empires={empires} onJump={jump} />

      <div className="tl-list">
        {empires.map((e, i) => (
          <EmpireEntry key={e.id} empire={e} n={i + 1} total={empires.length} />
        ))}
      </div>

      <div className="tl-coda reveal">
        <p>The empires changed flags. The mechanism — extraction, justified — did not.</p>
        <p className="tl-coda-sub">The twenty-one records that follow are the people who refused to let it be forgotten.</p>
      </div>
    </div>
  );
}

window.Timeline = Timeline;
