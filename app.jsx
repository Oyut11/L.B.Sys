/* app.jsx — root: view switching (Records / Timeline), profile state, ink-sweep transitions */

function TopNav({ view, onView, solid }) {
  const tabs = [["records", "The Records"], ["timeline", "The Timeline"], ["tracing", "Tracing Back"], ["machine", "The Machine"]];
  return (
    <nav className={"topnav" + (solid ? " solid" : "")}>
      <button className="tn-brand" onClick={() => onView("records")}>
        L.B.Sys<span className="tn-brand-sub">// Living Book System</span>
      </button>
      <div className="tn-tabs">
        {tabs.map(([id, label]) => (
          <button key={id} className={"tn-tab" + (view === id ? " on" : "")} onClick={() => onView(id)}>{label}</button>
        ))}
      </div>
    </nav>
  );
}

function App() {
  const thinkers = window.LB_THINKERS;
  const [view, setView] = React.useState("records");   // 'records' | 'timeline'
  const [openIdx, setOpenIdx] = React.useState(null);   // null => gallery (within records)
  const [sweep, setSweep] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchView = (v) => {
    if (v === view && openIdx === null) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    setSweep(v === "timeline" ? "#18130a" : "#18130a");
    setTimeout(() => { setView(v); setOpenIdx(null); window.scrollTo(0, 0); }, 360);
    setTimeout(() => setSweep(null), 820);
  };

  const open = (thinker) => {
    const idx = thinkers.indexOf(thinker);
    setSweep(thinker.accent);
    setTimeout(() => { setOpenIdx(idx); window.scrollTo(0, 0); }, 360);
    setTimeout(() => setSweep(null), 820);
  };
  const nav = (idx) => {
    setSweep(thinkers[idx].accent);
    setTimeout(() => setOpenIdx(idx), 360);
    setTimeout(() => setSweep(null), 820);
  };
  const close = () => {
    setSweep("#18130a");
    setTimeout(() => setOpenIdx(null), 360);
    setTimeout(() => setSweep(null), 820);
  };

  // open a specific record from anywhere (e.g. a Tracing-Back chip)
  const openRecordById = (id) => {
    const idx = thinkers.findIndex((t) => t.id === id);
    if (idx < 0) return;
    setSweep(thinkers[idx].accent);
    setTimeout(() => { setView("records"); setOpenIdx(idx); window.scrollTo(0, 0); }, 360);
    setTimeout(() => setSweep(null), 820);
  };

  // top nav solid except when sitting at the very top of the records hero
  const navSolid = view !== "records" || scrolled;
  const showNav = openIdx === null; // hidden under the profile overlay

  return (
    <React.Fragment>
      {showNav && <TopNav view={view} onView={switchView} solid={navSolid} />}

      {view === "timeline"
        ? <Timeline />
        : view === "tracing"
          ? <Tracing onOpenRecord={openRecordById} />
          : view === "machine"
            ? <Machine onOpenRecord={openRecordById} />
            : openIdx === null
              ? <Gallery thinkers={thinkers} onOpen={open} />
              : <Profile thinker={thinkers[openIdx]} index={openIdx} total={thinkers.length} onClose={close} onNav={nav} />}

      <div className={"sweep" + (sweep ? " on" : "")} style={{ background: sweep || "#18130a" }} aria-hidden="true">
        <span className="sweep-mark">L.B.Sys</span>
      </div>
    </React.Fragment>
  );
}

const sweepCSS = document.createElement("style");
sweepCSS.textContent = `
.sweep {
  position: fixed; inset: 0; z-index: 7000; pointer-events: none;
  transform: scaleY(0); transform-origin: bottom;
  display: flex; align-items: center; justify-content: center;
}
.sweep.on { animation: sweepWipe 0.82s cubic-bezier(0.7,0,0.2,1) forwards; }
@keyframes sweepWipe {
  0%   { transform: scaleY(0); transform-origin: bottom; }
  45%  { transform: scaleY(1); transform-origin: bottom; }
  55%  { transform: scaleY(1); transform-origin: top; }
  100% { transform: scaleY(0); transform-origin: top; }
}
.sweep-mark {
  font-family: "Courier Prime", monospace; letter-spacing: 0.4em; text-transform: uppercase;
  color: rgba(255,255,255,0.85); font-size: 14px; font-weight: 700; opacity: 0;
}
.sweep.on .sweep-mark { animation: sweepMark 0.82s ease forwards; }
@keyframes sweepMark { 0%,100% { opacity: 0; } 50% { opacity: 1; } }
`;
document.head.appendChild(sweepCSS);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
