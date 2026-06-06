# The New Machinery — Developer Handoff

> Neo-colonialism in the Modern Era. Fourth tab in L.B.Sys, after "Tracing Back."

---

## Position in the app

| Tab | Data file | View file | Question it answers |
|-----|-----------|-----------|---------------------|
| The Records | `data.js` | `gallery.jsx` / `profile.jsx` | Who documented empire? |
| The Timeline | `empires.js` | `timeline.jsx` | What did empire do? |
| Tracing Back | `peoples.js` | `tracing.jsx` | What did it cost? |
| **The New Machinery** | **`neocolonial.js`** | **`neocolonial.jsx`** | **How does it continue?** |

Nav label: `"The New Machinery"`. Add as fourth entry in `TopNav` tabs array in `app.jsx`.

---

## Architecture

Four **arms**, each containing 4–5 **mechanism entries** (18 total).

| # | Arm key | Name | Shorthand | Accent | Entries |
|---|---------|------|-----------|--------|---------|
| 01 | `soft` | Soft Power | *The story it tells* | `#5B2A86` | 4 |
| 02 | `economy` | Economy | *The wealth it moves* | `#B07A1B` | 5 |
| 03 | `language` | Language | *The mind it shapes* | `#C8941C` | 4 |
| 04 | `military` | Military | *The force it keeps* | `#7A1020` | 5 |

---

## Data schema — `window.LB_NEOCOLONIAL`

```js
window.LB_NEOCOLONIAL = {
  arms: [
    {
      key:        "soft",              // used in mechanism.arm
      num:        "01",
      name:       "Soft Power",
      shorthand:  "The story it tells",
      accent:     "#5B2A86",
      intro:      "The empire no longer needs to occupy. It educates, entertains, and advises..."
    }
    // ... 4 total
  ],
  mechanisms: [
    {
      id:         "cultural-export",
      arm:        "soft",
      mechanism:  "The Cultural Export",
      oneLiner:   "Hollywood, the BBC, and Silicon Valley do not need a colonial office — they are one.",
      how:        String,   // how it works
      who:        String,   // who operates it, who benefits
      where:      String,   // specific cases / evidence
      cost:       String,   // what it costs the subjected
      diagnosed:  ["debord", "said", "gramsci"],   // ids from LB_MACHINE or LB_THINKERS
      quote:      { text: String, source: String, attributed: Boolean },
      sources:    ["UNESCO, Re|Shaping Cultural Policies (2022)", ...],
      accent:     "#5B2A86"  // inherits arm accent
    }
    // ... 18 total
  ]
};
```

### Field mapping to dossier layout

| Field | Dossier label | Numeral |
|-------|---------------|---------|
| `how` | How It Works | I |
| `who` | Who Operates It | II |
| `where` | Where It's Visible | III |
| `cost` | What It Costs | IV |

Same pattern as `EmpireEntry` fields in `timeline.jsx`.

---

## All 18 entries — reference

### ARM 01 · SOFT POWER

**1.1 — The Cultural Export**
US/UK/France produce majority of consumed global media. Platforms (Google, Meta) distribute on imperial infrastructure. Local industries starved. Diagnosed: Debord, Said, Gramsci.
Sources: UNESCO Re|Shaping Cultural Policies (2022); Daya Kishan Thussu, International Communication (2019).

**1.2 — The Development Machine**
World Bank / IMF / bilateral aid impose structural adjustment as loan conditions. Sovereignty leased to creditors. Diagnosed: Rodney, Wallerstein, Galeano.
Sources: Arturo Escobar, Encountering Development (1995); Dambisa Moyo, Dead Aid (2009); Jason Hickel, The Divide (2017).

**1.3 — The Rules-Based Order**
P5 veto, ICC prosecuting overwhelmingly African leaders, R2P applied selectively. International law binding on the weak, advisory on the strong. Diagnosed: Agamben, Mbembe, Chomsky.
Sources: Adam Branch, Displacing Human Rights (2009); Antony Anghie, Imperialism, Sovereignty and the Making of International Law (2005).

**1.4 — The Exported Curriculum**
Colonial curricula retained post-independence. Rankings set in London. Brain drain as structural feature. Diagnosed: Ngũgĩ, Said, Foucault.
Sources: Ngũgĩ, Decolonising the Mind (1986); Sabelo Ndlovu-Gatsheni, Epistemic Freedom in Africa (2018).

### ARM 02 · ECONOMY

**2.1 — The Debt Trap**
Countries impoverished by extraction borrow, then restructured via IMF conditionality. Net reverse flows from South to North in the 1980s. Zambia spent more on debt than health + education. Diagnosed: Galeano, Patnaik, Rodney, Wallerstein.
Sources: Jason Hickel, The Divide (2017); David Graeber, Debt (2011); Patnaik & Patnaik, Capital and Imperialism (2021).

**2.2 — The Colonial Currency (CFA Franc)**
14 African nations, ~200M people. Pegged to euro, reserves held by French Treasury until 2020 reform. Cannot devalue or print. Diagnosed: Rodney, Galeano, Fanon.
Sources: Ndongo Samba Sylla & Fanny Pigeaud, Africa's Last Colonial Currency (2021).

**2.3 — The Rigged Market**
WTO rules set by largest economies. US/EU farm subsidies undercut African farmers. DRC produces ~70% of world cobalt, captures fraction of value. Raw out, finished in. Diagnosed: Galeano, Rodney, Patnaik, Polanyi.
Sources: Yash Tandon, Trade Is War (2015); Joseph Stiglitz, Globalization and Its Discontents (2002).

**2.4 — The Offshore Drain**
Transfer pricing, trade misinvoicing, tax havens. Africa loses ~$88.6B/yr to illicit flows — more than aid + FDI combined. London's network is the largest secrecy enabler. Diagnosed: Patnaik, Rodney, Galeano.
Sources: UNCTAD, Economic Development in Africa Report (2020); Nicholas Shaxson, Treasure Islands (2011); Tax Justice Network.

**2.5 — The Weaponised Currency (Dollar Hegemony)**
USD as reserve currency = US jurisdiction over global trade. Sanctions collapse economies without firing a shot. Cuba embargo since 1962. Secondary sanctions extend US jurisdiction worldwide. Diagnosed: Chomsky, Mbembe, Agamben.
Sources: Nicholas Mulder, The Economic Weapon (2022); Joy Gordon, Invisible War (2010).

### ARM 03 · LANGUAGE

**3.1 — The Glass Tongue**
Colonial language remains language of law, higher ed, formal employment. India: ~10% speak English, they run the country. Senegal: govt in French, 80% speak Wolof. Diagnosed: Ngũgĩ, Fanon, Memmi.
Sources: Ngũgĩ, Decolonising the Mind (1986); Robert Phillipson, Linguistic Imperialism (1992).

**3.2 — The Unelected Lingua Franca**
English dominates science, tech, aviation, finance via infrastructure not merit. Non-English scholarship structurally invisible. Publish in English or perish. Diagnosed: Ngũgĩ, Chomsky, Said.
Sources: Robert Phillipson, Linguistic Imperialism (1992); Anna Wierzbicka, Imprisoned in English (2014).

**3.3 — The Quiet Extinction**
~3,500 languages endangered. Each death = loss of cognitive framework, ecological knowledge, oral history. Australia lost 100+ Aboriginal languages. Diagnosed: Ngũgĩ, Benjamin, Wynter.
Sources: UNESCO Atlas of the World's Languages in Danger; K. David Harrison, When Languages Die (2007).

**3.4 — Francophonie as Soft Empire**
OIF: 88 member states. French aid flows preferentially within bloc. RFI, France 24, TV5Monde as cultural infrastructure. CFA franc + Francophonie = two faces of one system. Diagnosed: Ngũgĩ, Fanon, Gramsci.
Sources: Sylla & Pigeaud, Africa's Last Colonial Currency (2021); Phillipson, Linguistic Imperialism Continued (2009).

### ARM 04 · MILITARY

**4.1 — The Permanent Garrison**
US: ~750 bases in 80 countries. France: permanent bases in Djibouti, Senegal, Côte d'Ivoire, Gabon, UAE. Diego Garcia: population deported for a base. AFRICOM oversees entire continent from Germany. Diagnosed: Chomsky, Zinn, Mbembe.
Sources: David Vine, Base Nation (2015); Daniel Immerwahr, How to Hide an Empire (2019).

**4.2 — The Coup as Foreign Policy**
CIA/MI6/DGSE-backed coups: Iran 1953, Guatemala 1954, Congo 1960, Chile 1973, and dozens more. Pattern: leader nationalises resources → coup → compliant replacement. Diagnosed: Zinn, Chomsky, Galeano.
Sources: Stephen Kinzer, Overthrow (2006); William Blum, Killing Hope (2003).

**4.3 — The Arms Trade**
P5 Security Council members = ~75% of global arms exports. Same nations that preach peace are largest dealers. UK/US weapons used in Yemen. Diagnosed: Chomsky, Mbembe, Arendt.
Sources: SIPRI Arms Transfers Database; Andrew Feinstein, The Shadow World (2011).

**4.4 — Proxy Wars**
Great powers arm local factions to fight wars on other people's soil. Sahel, DRC, Syria. Wagner/Africa Corps replacing French forces in Mali — one external control for another. Diagnosed: Chomsky, Fanon, Mbembe.
Sources: Vijay Prashad, Washington Bullets (2020); Nick Turse, Tomorrow's Battlefield (2015).

**4.5 — The Mercenary Return (PMCs)**
Blackwater, Wagner, DynCorp, G4S. Operate in legal grey zones. Nisour Square: 17 civilians killed, minimal consequences. Wagner trades security for mining concessions across Africa. Diagnosed: Arendt, Mbembe, Agamben.
Sources: Sean McFate, The Modern Mercenary (2015); Morten Bøås et al., on Wagner in Africa (NUPI, 2023).

---

## View component — `neocolonial.jsx`

Follow the pattern of `timeline.jsx`:

### Masthead
```
Kicker:  The New Machinery · 4 arms · 18 mechanisms · still running
Title:   After the
         Flag Came Down
Lede:    The empires formally ended. The architecture did not. Four arms of
         the same machine — soft power, economy, language, force — refitted
         for the age that calls itself post-colonial.
```

### Arm index (below masthead)
Four horizontal blocks. Click to jump. Mirrors `SpanChart` / `people-index` pattern.

### Mechanism entries
Dossier cards per `EmpireEntry` pattern:
- Arm tag + sequence number
- `mechanism` as h2
- `oneLiner` as italic subhead
- Four numbered fields (I–IV): `how`, `who`, `where`, `cost`
- "Diagnosed by →" chip row (styled as `ppl-chips`), linking to Records/Machine
- `SourceList` component (already global)

### Coda
```
The machine was not dismantled at independence.
It was renovated — debt for tribute, bases for garrisons, English for the lash.
```

---

## Cross-reference wiring

The `diagnosed` array contains ids. Resolve against:
1. `LB_THINKERS` (data.js) — opens profile via `onOpenRecord(id)`
2. `LB_MACHINE` (machine.js) — scrolls to concept entry

Chip style: same as `ppl-chip` in tracing.jsx, coloured by the target's `accent`.

---

## Integration checklist

- [ ] Create `neocolonial.js` — data file, loaded after `machine.js` in `index.html`
- [ ] Create `neocolonial.jsx` — view component, loaded before `app.jsx`
- [ ] Add `"neocolonial"` to `TopNav` tabs in `app.jsx` as `["neocolonial", "The New Machinery"]`
- [ ] Add view switch in `App` render: `view === "neocolonial" ? <NewMachinery onOpenRecord={openRecordById} /> : ...`
- [ ] Wire `diagnosed` chips to `openRecordById` (already exists in app.jsx)
- [ ] Add arm accent colours to `styles.css` as needed
- [ ] Add sources via `sources.js` pattern or inline in data file
- [ ] Reveal animations: same IntersectionObserver pattern as timeline/tracing
