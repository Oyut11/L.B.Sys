/* neocolonial.jsx — "The New Machinery": neo-colonialism in the modern era.
   Four arms, eighteen mechanisms. How empire continues after the flag came down. */

function ArmIndex({ arms, onJump }) {
  return (
    <div className="arm-index reveal">
      {arms.map((arm) => (
        <button className="arm-block" key={arm.key} style={{ "--accent": arm.accent }} onClick={() => onJump(arm.key)}>
          <span className="arm-num">{arm.num}</span>
          <span className="arm-name">{arm.name}</span>
          <span className="arm-shorthand">{arm.shorthand}</span>
          <span className="arm-intro">{arm.intro}</span>
        </button>
      ))}
    </div>
  );
}

function DiagnosedChips({ diagnosed, onOpenRecord }) {
  const thinkers = window.LB_THINKERS || [];
  const machine = window.LB_MACHINE || [];

  const resolved = diagnosed.map((id) => {
    const t = thinkers.find((x) => x.id === id);
    if (t) return { id, type: "thinker", name: t.name, accent: t.accent };
    const m = machine.find((x) => x.id === id);
    if (m) return { id, type: "machine", name: m.concept, accent: m.accent };
    return null;
  }).filter(Boolean);

  if (resolved.length === 0) return null;

  return (
    <div className="neo-diagnosed reveal">
      <span className="neo-diagnosed-lead">Diagnosed in the records →</span>
      <div className="neo-chips">
        {resolved.map((r) => (
          <button className="neo-chip" key={r.id} style={{ "--lk": r.accent }} onClick={() => onOpenRecord(r.id)}>
            {r.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function MechanismEntry({ mech, n, total, onOpenRecord }) {
  const arm = (window.LB_NEOCOLONIAL.arms || []).find((a) => a.key === mech.arm);
  const fields = [
    { label: "How It Works", key: "how", num: "I" },
    { label: "Who Operates It", key: "who", num: "II" },
    { label: "Where It’s Visible", key: "where", num: "III" },
    { label: "What It Costs", key: "cost", num: "IV" }
  ];

  return (
    <section className="mechanism" id={"mech-" + mech.id} style={{ "--accent": mech.accent }}>
      <header className="mech-head reveal">
        <div className="mech-spine">
          <span className="mech-node"></span>
          <span className="mech-arm">{arm ? arm.name : mech.arm}</span>
          <span className="mech-seq">{String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        </div>
        <div className="mech-title-block">
          <h2 className="mech-name">{mech.mechanism}</h2>
          <p className="mech-oneliner">{mech.oneLiner}</p>
        </div>
      </header>

      {mech.quote && (
        <div className="mech-quote reveal">
          <blockquote className="mq-text">
            “{mech.quote.text}”
            {mech.quote.source && <cite className="mq-source">— {mech.quote.source}</cite>}
          </blockquote>
        </div>
      )}

      <div className="mech-grid">
        {fields.map((f) => (
          <div className="mech-field reveal" key={f.key}>
            <div className="mf-label"><span className="mf-num">{f.num}</span>{f.label}</div>
            <div className="mf-body">{mech[f.key]}</div>
          </div>
        ))}
      </div>

      {mech.diagnosed && mech.diagnosed.length > 0 && (
        <DiagnosedChips diagnosed={mech.diagnosed} onOpenRecord={onOpenRecord} />
      )}

      {mech.sources && mech.sources.length > 0 && <SourceList sources={mech.sources} />}
    </section>
  );
}

function NewMachinery({ onOpenRecord }) {
  const data = window.LB_NEOCOLONIAL;
  const arms = data.arms || [];
  const mechanisms = data.mechanisms || [];
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

  const jump = (armKey) => {
    const firstMech = mechanisms.find((m) => m.arm === armKey);
    if (firstMech) {
      const el = document.getElementById("mech-" + firstMech.id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
    }
  };

  return (
    <div className="neocolonial-view" ref={rootRef}>
      <header className="neo-mast">
        <div className="neo-kicker">The New Machinery · {arms.length} arms · {mechanisms.length} mechanisms · still running</div>
        <h1 className="neo-title">After the<br />Flag Came Down</h1>
        <p className="neo-lede">
          The empires formally ended. The architecture did not. Four arms of the same machine
          — <em>soft power, economy, language, force</em> — refitted for the age that calls itself
          post-colonial.
        </p>
      </header>

      <ArmIndex arms={arms} onJump={jump} />

      <div className="mech-list">
        {mechanisms.map((m, i) => (
          <MechanismEntry key={m.id} mech={m} n={i + 1} total={mechanisms.length} onOpenRecord={onOpenRecord} />
        ))}
      </div>

      <div className="neo-coda reveal">
        <p>The machine was not dismantled at independence.</p>
        <p className="neo-coda-sub">It was renovated — debt for tribute, bases for garrisons, English for the lash.</p>
      </div>
    </div>
  );
}

window.NewMachinery = NewMachinery;
