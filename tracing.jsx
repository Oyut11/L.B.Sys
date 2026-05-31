/* tracing.jsx — "Tracing Back": the colonized, people by people.
   An index of nations and peoples, then for each, their losses across four
   domains (Culture, Knowledge, Language, Territory), each read why / how / result / now. */

function PeopleEntry({ people, n, total, onOpenRecord }) {
  const domains = [
    { key: "culture", name: "Culture", num: "01" },
    { key: "knowledge", name: "Knowledge", num: "02" },
    { key: "language", name: "Language", num: "03" },
    { key: "territory", name: "Territory", num: "04" }
  ];
  const beats = [
    ["why", "Why", "the reason"],
    ["how", "How", "the mechanism"],
    ["result", "Result", "the consequence"],
    ["now", "In Our Time", "today"]
  ];
  const recs = (people.records || []).map((id) => window.LB_THINKERS.find((t) => t.id === id)).filter(Boolean);

  return (
    <section className="ppl" id={"ppl-" + people.id} style={{ "--accent": people.accent }}>
      <header className="ppl-head reveal">
        <div className="ppl-tag">
          No. {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")} · {people.region} · colonised by {people.colonizer}
        </div>
        <h2 className="ppl-name">{people.name}</h2>
        <p className="ppl-summary">{people.summary}</p>
        <div className="ppl-era">{people.era}{people.ongoing ? "  ·  unfinished" : ""}</div>
      </header>

      <div className="ppl-losses">
        {domains.map((d) => (
          <div className="loss reveal" key={d.key}>
            <div className="loss-name"><span className="loss-num">{d.num}</span>{d.name}</div>
            <div className="loss-beats">
              {beats.map(([bk, bl, bs]) => (
                <div className={"beat" + (bk === "now" ? " beat-now" : "")} key={bk}>
                  <span className="beat-k">{bl}<span className="beat-sub">{bs}</span></span>
                  <p className="beat-body">{people.losses[d.key][bk]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {recs.length > 0 && (
        <div className="ppl-records reveal">
          <span className="ppl-records-lead">Diagnosed in the records →</span>
          <div className="ppl-chips">
            {recs.map((r) => (
              <button className="ppl-chip" key={r.id} style={{ "--lk": r.accent }} onClick={() => onOpenRecord(r.id)}>{r.name}</button>
            ))}
          </div>
        </div>
      )}

      {people.sources && people.sources.length > 0 && <SourceList sources={people.sources} />}
    </section>
  );
}

function Tracing({ onOpenRecord }) {
  const peoples = window.LB_PEOPLES;
  const rootRef = React.useRef(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    const els = rootRef.current ? rootRef.current.querySelectorAll(".reveal") : [];
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const jump = (id) => {
    const el = document.getElementById("ppl-" + id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <div className="tracing-view" ref={rootRef}>
      <header className="trace-mast">
        <div className="trace-kicker">Tracing Back · {peoples.length} nations & peoples</div>
        <h1 className="trace-title">What Was<br />Taken</h1>
        <p className="trace-lede">
          The library, read through the colonised themselves. Each nation and people set against the four things
          empire took from them — <em>culture, knowledge, language, land</em> — traced from the reason it was done,
          through the method, to what remains today.
        </p>
      </header>

      <div className="people-index reveal">
        <div className="px-head">
          <span>The Colonised</span>
          <span className="px-head-note">Select to trace →</span>
        </div>
        {peoples.map((p, i) => (
          <button className="px-row" key={p.id} style={{ "--accent": p.accent }} onClick={() => jump(p.id)}>
            <span className="px-no">{String(i + 1).padStart(2, "0")}</span>
            <span className="px-swatch"></span>
            <span className="px-name">{p.name}</span>
            <span className="px-region">{p.region}</span>
            <span className="px-col">{p.colonizer}</span>
            <span className="px-era">{p.era}</span>
          </button>
        ))}
      </div>

      <div className="ppl-list">
        {peoples.map((p, i) => (
          <PeopleEntry key={p.id} people={p} n={i + 1} total={peoples.length} onOpenRecord={onOpenRecord} />
        ))}
      </div>

      <div className="trace-coda reveal">
        <p>What was taken did not vanish. It was moved — into museums, into ledgers, into other people's mouths and maps.</p>
        <p className="trace-coda-sub">Tracing it back is the first step toward asking for it back.</p>
      </div>
    </div>
  );
}

window.Tracing = Tracing;
