/* machine.jsx — "Understanding the Machine": concept-led theoretical frameworks */

// Shared sources footer (reused from timeline.jsx)
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

function FrameworkIndex({ frameworks, onJump }) {
  return (
    <div className="framework-index reveal">
      <div className="fx-head">
        <span>The Concepts</span>
        <span className="fx-head-note">Select to explore →</span>
      </div>
      {frameworks.map((f, i) => (
        <button className="fx-row" key={f.id} style={{ "--accent": f.accent }} onClick={() => onJump(f.id)}>
          <span className="fx-no">{String(i + 1).padStart(2, "0")}</span>
          <span className="fx-swatch"></span>
          <span className="fx-concept">{f.concept}</span>
          <span className="fx-thinker">{f.name}</span>
          <span className="fx-work">{f.work.title} ({f.work.year})</span>
        </button>
      ))}
    </div>
  );
}

function FrameworkEntry({ framework, n, total, onOpenRecord }) {
  const record = framework.recordId ? window.LB_THINKERS.find((t) => t.id === framework.recordId) : null;
  
  return (
    <section className="framework" id={"framework-" + framework.id} style={{ "--accent": framework.accent }}>
      <header className="framework-head reveal">
        <div className="framework-spine">
          <span className="framework-node"></span>
          <span className="framework-era">{framework.work.year}</span>
          <span className="framework-seq">{String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        <div className="framework-title-block">
          <h2 className="framework-concept">{framework.concept}</h2>
          <div className="framework-thinker-line">
            <span className="framework-name">{framework.name}</span>
            <span className="framework-life">{framework.life}</span>
            <span className="framework-origin">{framework.origin}</span>
          </div>
          <p className="framework-role">{framework.role}</p>
        </div>
      </header>

      <div className="framework-quote reveal">
        <blockquote className="fq-text">
          "{framework.quote.text}"
          {framework.quote.source && <cite className="fq-source">— {framework.quote.source}</cite>}
        </blockquote>
      </div>

      <div className="framework-grid">
        <div className="framework-field reveal">
          <div className="ff-label"><span className="ff-num">I</span>Who They Were</div>
          <div className="ff-body">{framework.bio}</div>
        </div>
        
        <div className="framework-field reveal">
          <div className="ff-label"><span className="ff-num">II</span>The Core Idea</div>
          <div className="ff-body">{framework.explain}</div>
        </div>
        
        <div className="framework-field reveal">
          <div className="ff-label"><span className="ff-num">III</span>Why The Machine Runs</div>
          <div className="ff-body">{framework.relevance}</div>
        </div>
      </div>

      {record && (
        <div className="framework-record reveal">
          <span className="framework-record-lead">See also in The Records →</span>
          <button className="framework-chip" style={{ "--lk": record.accent }} onClick={() => onOpenRecord(record.id)}>
            {record.name}
          </button>
        </div>
      )}

      {framework.sources && framework.sources.length > 0 && <SourceList sources={framework.sources} />}
    </section>
  );
}

function Machine({ onOpenRecord }) {
  const frameworks = window.LB_MACHINE;
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
    const el = document.getElementById("framework-" + id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };

  return (
    <div className="machine-view" ref={rootRef}>
      <header className="machine-mast">
        <div className="machine-kicker">Understanding the Machine · {frameworks.length} frameworks · 1844 — present</div>
        <h1 className="machine-title">Why The Machine<br />Runs</h1>
        <p className="machine-lede">
          The Timeline shows what empire did. Tracing Back shows what it cost. But the hardest question remains: 
          <em> why does the machine run at all, and why do the ruled so often consent to it?</em> These fourteen concepts 
          provide the theory layer — each led by the idea, with the thinker as subhead — explaining the deep structures 
          that make colonial violence possible, repeatable, and often invisible to its participants.
        </p>
      </header>

      <FrameworkIndex frameworks={frameworks} onJump={jump} />

      <div className="framework-list">
        {frameworks.map((f, i) => (
          <FrameworkEntry key={f.id} framework={f} n={i + 1} total={frameworks.length} onOpenRecord={onOpenRecord} />
        ))}
      </div>

      <div className="machine-coda reveal">
        <p>The machine changes names. The logic — domination justified — does not.</p>
        <p className="machine-coda-sub">These concepts are the tools for seeing it clearly, wherever it appears.</p>
      </div>
    </div>
  );
}

window.Machine = Machine;
