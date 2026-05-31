/* profile.jsx — full record view for one thinker */

function Profile({ thinker, index, total, onClose, onNav }) {
  const scrollRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const next = onNav ? null : null;

  // scroll reveal + progress, scoped to the profile scroll container
  React.useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    root.scrollTop = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); });
    }, { root, threshold: 0.15 });
    root.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const onScroll = () => {
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? (root.scrollTop / max) * 100 : 0);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // animate masthead name lines in
    const lns = root.querySelectorAll(".p-name .ln > span");
    lns.forEach((s, i) => { s.animate(
      [{ transform: "translateY(105%)" }, { transform: "translateY(0)" }],
      { duration: 900, delay: 120 + i * 90, easing: "cubic-bezier(0.16,1,0.3,1)", fill: "both" }); });

    return () => { io.disconnect(); root.removeEventListener("scroll", onScroll); };
  }, [thinker.id]);

  // keyboard nav
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && index < total - 1) onNav(index + 1);
      if (e.key === "ArrowLeft" && index > 0) onNav(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total]);

  const q = thinker.quote;
  const parts = thinker.name.split(" ");
  const nameLines = parts.length > 1 ? [parts.slice(0, -1).join(" "), parts[parts.length - 1]] : parts;
  const navById = (id) => {
    const idx = window.LB_THINKERS.findIndex((t) => t.id === id);
    if (idx >= 0) onNav(idx);
  };
  const nextThinker = window.LB_THINKERS[(index + 1) % total];

  const sections = [
    { n: "01", label: "The Argument", key: "thesis", emphasis: true },
    { n: "02", label: "Life", key: "bio" },
    { n: "03", label: "What the Book Offered", key: "offering" },
  ];

  return (
    <div className="profile" ref={scrollRef} style={{ "--accent": thinker.accent }}>
      <div className="p-progress" style={{ width: progress + "%" }}></div>

      <div className="p-bar">
        <button className="p-back" onClick={onClose}><span className="arr">←</span> All Records</button>
        <div className="p-nav">
          <button disabled={index === 0} onClick={() => onNav(index - 1)}>Prev</button>
          <span className="mono" style={{ alignSelf: "center", fontSize: 12, letterSpacing: "0.1em", padding: "0 8px" }}>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <button disabled={index === total - 1} onClick={() => onNav(index + 1)}>Next</button>
        </div>
      </div>

      <div className="profile-inner">
        {/* masthead */}
        <div className="p-mast">
          <div className="p-portrait-float"><LBPortrait thinker={thinker} size={230} /></div>
          <div className="p-index">RECORD No. {String(index + 1).padStart(2, "0")} · {thinker.origin.toUpperCase()}</div>
          <h1 className="p-name">
            {nameLines.map((w, i) => (<span className="ln" key={i}><span>{w}</span></span>))}
          </h1>
          <div className="p-meta-row">
            <div className="cell"><div className="k">Lived</div><div className="v">{thinker.life}</div></div>
            <div className="cell"><div className="k">From</div><div className="v">{thinker.origin}</div></div>
            <div className="cell"><div className="k">Worked as</div><div className="v">{thinker.role}</div></div>
          </div>
        </div>

        {/* pull quote */}
        <div className="p-quote reveal">
          <span className="mark">&ldquo;</span>
          <div className="qkind">{q.attributed ? "In their words" : "The core claim — distilled"}</div>
          <blockquote>{q.text}</blockquote>
          <cite>— {thinker.name}, <em>{q.source}</em></cite>
        </div>

        {/* the book */}
        <div className="p-sec work-sec reveal">
          <div className="s-label">The Book<span className="n">Primary record</span></div>
          <div>
            <div className="p-work-title">{thinker.work.title}</div>
            <div className="p-work-year">{thinker.work.year}</div>
            {thinker.work.also && <div className="p-work-also">{thinker.work.also}</div>}
          </div>
        </div>

        {/* from the page — genuine excerpt, where rights permit */}
        {thinker.passage && (
          <div className="p-sec passage-sec reveal">
            <div className="s-label">From the Page<span className="n">Excerpt</span></div>
            <figure className="p-passage">
              <blockquote>{thinker.passage.text}</blockquote>
              <figcaption>
                <span className="src">{thinker.passage.source}</span>
                <span className={"rights " + thinker.passage.rights}>
                  {thinker.passage.rights === "public-domain" ? "Public domain" : "Quoted under fair use"}
                </span>
              </figcaption>
            </figure>
          </div>
        )}

        {sections.map((s) => (
          <div className="p-sec reveal" key={s.key}>
            <div className="s-label">{s.label}<span className="n">{s.n}</span></div>
            <div className={"s-body" + (s.emphasis ? " s-argument" : "")}>{thinker[s.key]}</div>
          </div>
        ))}

        {/* fate */}
        <div className="p-sec reveal">
          <div className="s-label">The Fate<span className="n">04</span></div>
          <div className="p-fate">
            <span className="stamp">On the Record</span>
            <div className="s-body">{thinker.fate}</div>
          </div>
        </div>

        {/* lineage — connections to other records */}
        {thinker.connections && thinker.connections.length > 0 && (
          <div className="p-sec reveal">
            <div className="s-label">The Lineage<span className="n">Connected records</span></div>
            <div className="lineage">
              {thinker.connections.map((c) => {
                const other = window.LB_THINKERS.find((t) => t.id === c.id);
                if (!other) return null;
                return (
                  <button className="lineage-link" key={c.id} style={{ "--lk": other.accent }} onClick={() => navById(c.id)}>
                    <span className="lk-node"></span>
                    <span className="lk-text">
                      <span className="lk-name">{other.name}</span>
                      <span className="lk-rel">{c.rel}</span>
                    </span>
                    <span className="lk-arr">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* continue reading — source + further reading */}
        {(thinker.work.source || (thinker.readNext && thinker.readNext.length)) && (
          <div className="p-sec reveal">
            <div className="s-label">Continue Reading<span className="n">Where to begin</span></div>
            <div className="readnext">
              {thinker.work.source && (
                <a className="rn-primary" href={thinker.work.source.url} target="_blank" rel="noopener noreferrer">
                  <span className="rn-p-kind">{thinker.work.source.kind === "fulltext" ? "Full text" : "The book"}</span>
                  <span className="rn-p-title">{thinker.work.title}</span>
                  <span className="rn-p-cta">{thinker.work.source.label} <span className="rn-ext">↗</span></span>
                </a>
              )}
              {thinker.readNext && thinker.readNext.length > 0 && (
                <ul className="rn-list">
                  {thinker.readNext.map((r, i) => (
                    <li key={i}>
                      <a href={r.url || ("https://openlibrary.org/search?q=" + encodeURIComponent(r.title + " " + r.author))} target="_blank" rel="noopener noreferrer">
                        <span className="rn-title">{r.title}</span>
                        <span className="rn-author">{r.author}</span>
                        <span className="rn-why">{r.why}</span>
                        <span className="rn-ext">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* next record */}
        <div className="p-next" onClick={() => onNav((index + 1) % total)}>
          <div>
            <div className="nk">Next record · No. {String(((index + 1) % total) + 1).padStart(2, "0")}</div>
            <div className="nn">{nextThinker.name}</div>
          </div>
          <span className="narr">→</span>
        </div>
      </div>
    </div>
  );
}

window.Profile = Profile;
