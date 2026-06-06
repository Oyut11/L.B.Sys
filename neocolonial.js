/* neocolonial.js — The New Machinery: neo-colonialism in the modern era.
   Four arms, eighteen mechanisms. How empire continues after the flag came down. */

window.LB_NEOCOLONIAL = {
  arms: [
    {
      key: "soft",
      num: "01",
      name: "Soft Power",
      shorthand: "The story it tells",
      accent: "#5B2A86",
      intro: "The empire no longer needs to occupy. It educates, entertains, and advises — and the colonised learn to see themselves through imperial eyes."
    },
    {
      key: "economy",
      num: "02",
      name: "Economy",
      shorthand: "The wealth it moves",
      accent: "#B07A1B",
      intro: "Debt replaces tribute. Trade rules written by the winners. The money flows north; the poverty is called underdevelopment."
    },
    {
      key: "language",
      num: "03",
      name: "Language",
      shorthand: "The mind it shapes",
      accent: "#C8941C",
      intro: "The coloniser's tongue becomes the language of law, science, and power. Every thought in that language is already a translation."
    },
    {
      key: "military",
      num: "04",
      name: "Military",
      shorthand: "The force it keeps",
      accent: "#7A1020",
      intro: "Bases on every continent. Coups as foreign policy. Arms sold to both sides. The garrison never left — it was renamed 'partnership.'"
    }
  ],

  mechanisms: [
    /* ARM 01 · SOFT POWER */
    {
      id: "cultural-export",
      arm: "soft",
      mechanism: "The Cultural Export",
      oneLiner: "Hollywood, the BBC, and Silicon Valley do not need a colonial office — they are one.",
      how: "The United States, the United Kingdom, and France produce the majority of media consumed globally. Streaming platforms, social media, and news networks operate on infrastructure owned by a handful of corporations based in imperial centres. Local film industries, music scenes, and publishing houses are starved of capital and distribution. What was once called 'cultural imperialism' is now simply the default setting of the internet.",
      who: "Disney, Netflix, the BBC, Meta, Google, Spotify; backed by trade agreements that classify cultural products as commodities subject to free-market rules. The beneficiaries are shareholders and soft-power budgets in Washington, London, and Paris.",
      where: "Nigeria's Nollywood is the world's second-largest film industry by volume, yet most Nigerian cinemas screen Hollywood blockbusters. In Francophone Africa, Canal+ holds monopoly positions. UNESCO estimates that in many developing countries, imported content exceeds 80% of all media consumed.",
      cost: "Local stories are displaced by foreign narratives. The colonised learn to desire, vote, and dream in patterns set elsewhere. Cultural self-esteem is eroded; local languages lose prestige in their own countries.",
      diagnosed: ["debord", "said", "gramsci"],
      quote: { text: "The spectacle is not a collection of images, but a social relation among people, mediated by images.", source: "Guy Debord, The Society of the Spectacle (1967)", attributed: true },
      sources: [
        "UNESCO, Re|Shaping Cultural Policies (2022)",
        "Daya Kishan Thussu, International Communication (2019)"
      ],
      accent: "#5B2A86"
    },
    {
      id: "development-machine",
      arm: "soft",
      mechanism: "The Development Machine",
      oneLiner: "Sovereignty is leased to creditors, one condition at a time.",
      how: "The World Bank, IMF, and bilateral aid agencies attach structural adjustment conditions to loans: privatise state enterprises, cut social spending, open markets to foreign competition, deregulate finance. Countries that resist lose access to credit. The result is not development but dependency — sovereignty leased to creditors.",
      who: "World Bank, IMF, USAID, EU development agencies; the governments of creditor nations that control their boards. The beneficiaries are multinational corporations that gain access to privatised assets and deregulated markets.",
      where: "Ghana's 1983 SAP under the Rawlings regime cut public-sector wages by 50% and eliminated food subsidies. In the 1990s, IMF conditions forced the privatisation of water in Bolivia, triggering the Cochabamba Water War of 2000. Across Africa, user fees for healthcare and education — imposed as loan conditions — pushed millions out of schools and clinics.",
      cost: "Democratic choice is overridden by technocratic mandate. Social services are dismantled. Indigenous economic systems are destroyed and replaced with export-oriented models that benefit foreign buyers. The debt grows even as the conditions are met.",
      diagnosed: ["rodney", "wallerstein", "galeano"],
      quote: { text: "Underdevelopment is not an original state awaiting development; it is produced and maintained.", source: "world-systems theory", attributed: false },
      sources: [
        "Arturo Escobar, Encountering Development (1995)",
        "Dambisa Moyo, Dead Aid (2009)",
        "Jason Hickel, The Divide (2017)"
      ],
      accent: "#5B2A86"
    },
    {
      id: "rules-based-order",
      arm: "soft",
      mechanism: "The Rules-Based Order",
      oneLiner: "International law is binding on the weak, advisory on the strong.",
      how: "The UN Security Council's P5 veto ensures that the most powerful nations cannot be held accountable by the body they control. The International Criminal Court has prosecuted overwhelmingly African leaders while powerful states remain outside its jurisdiction. The doctrine of 'Responsibility to Protect' (R2P) is invoked selectively — Libya in 2011, but not Yemen, Gaza, or Myanmar.",
      who: "The five permanent Security Council members (US, UK, France, Russia, China) and their allies. The ICC, nominally independent, depends on the cooperation of precisely those states it would need to prosecute.",
      where: "The US has used its veto 82 times, more than any other P5 member, overwhelmingly to block resolutions critical of Israel. The ICC opened investigations in Uganda, DRC, Sudan, Libya, Kenya, Côte d'Ivoire, Mali, and Georgia — but not in Iraq, Afghanistan, or Gaza until external pressure forced the prosecutor's hand.",
      cost: "Justice becomes a tool of power, not its constraint. Victims in weak states watch perpetrators in strong states walk free. The very concept of international law loses credibility where it is most needed.",
      diagnosed: ["agamben", "mbembe", "chomsky"],
      quote: { text: "The smart way to keep people passive and obedient is to strictly limit the spectrum of acceptable opinion.", source: "Noam Chomsky, The Common Good (1998)", attributed: true },
      sources: [
        "Adam Branch, Displacing Human Rights (2009)",
        "Antony Anghie, Imperialism, Sovereignty and the Making of International Law (2005)"
      ],
      accent: "#5B2A86"
    },
    {
      id: "exported-curriculum",
      arm: "soft",
      mechanism: "The Exported Curriculum",
      oneLiner: "The classroom is the last colony — and the first to be forgotten.",
      how: "Colonial-era curricula were retained after independence, often with only the flag changed. University rankings are set by institutions in London and New York. Scholarships and research funding flow to those who study imperial languages and frameworks. Brain drain is not an accident but a structural feature: the best minds are trained to leave.",
      who: "British Council, Fulbright, Erasmus+, QS and Times Higher Education rankings; the publishing houses (Oxford, Cambridge, Pearson) that set examination standards. The beneficiaries are the receiving countries' universities and economies.",
      where: "In India, colonial-era curricula persisted for decades after 1947. Across Africa, the French baccalauréat and British A-levels still shape what counts as knowledge. UNESCO estimates that over $30 billion is spent annually on higher education in OECD countries by students from the Global South.",
      cost: "Epistemic dependency: the colonised learn to see their own traditions as pre-scientific, their own languages as inadequate for serious thought. The best minds leave and rarely return. The next generation of leaders is trained to think like the empire.",
      diagnosed: ["ngugi", "said", "foucault"],
      quote: { text: "Colonialism's first weapon was knowledge — the surveys, maps, racial sciences and ethnographies that made a people 'knowable' and therefore governable.", source: "Foucault's colonial analysis", attributed: false },
      sources: [
        "Ngũgĩ wa Thiong'o, Decolonising the Mind (1986)",
        "Sabelo Ndlovu-Gatsheni, Epistemic Freedom in Africa (2018)"
      ],
      accent: "#5B2A86"
    },

    /* ARM 02 · ECONOMY */
    {
      id: "debt-trap",
      arm: "economy",
      mechanism: "The Debt Trap",
      oneLiner: "First they take the wealth. Then they lend it back.",
      how: "Countries impoverished by colonial extraction are forced to borrow for development. When they cannot repay, the IMF and World Bank impose structural adjustment: privatisation, deregulation, cuts to health and education. Net reverse flows — from South to North — exceeded $2 trillion in the 1980s–2000s. The debt is never meant to be repaid; it is meant to keep the debtor compliant.",
      who: "IMF, World Bank, private creditors (BlackRock, vulture funds), Paris Club. The beneficiaries are the creditors who extract interest and the corporations that buy privatised assets at fire-sale prices.",
      where: "Zambia spent more on debt service than on health and education combined for decades. By 2020, African countries were spending four times more on debt repayment than on healthcare. In 2023, Ghana defaulted and accepted an IMF programme that cut public-sector wages and eliminated fuel subsidies.",
      cost: "Sovereignty is surrendered piece by piece. Public assets become foreign-owned. Social services collapse. The cycle of borrowing and austerity becomes permanent — a debt trap that outlasts any individual government.",
      diagnosed: ["galeano", "patnaik", "rodney", "wallerstein"],
      quote: { text: "Capital comes dripping from head to foot, from every pore, with blood and dirt.", source: "Karl Marx, Capital, Vol. I (1867)", attributed: true },
      sources: [
        "Jason Hickel, The Divide (2017)",
        "David Graeber, Debt (2011)",
        "Utsa Patnaik & Prabhat Patnaik, Capital and Imperialism (2021)"
      ],
      accent: "#B07A1B"
    },
    {
      id: "colonial-currency",
      arm: "economy",
      mechanism: "The Colonial Currency (CFA Franc)",
      oneLiner: "Fourteen nations, ~200 million people, and a currency they cannot print.",
      how: "The CFA franc, used by 14 African nations, was pegged to the French franc and then the euro. Member states were required to deposit 50% of their foreign exchange reserves with the French Treasury (reduced to 30% in 2005, but the mechanism remained). They could not devalue independently or print their own currency. Monetary policy was set in Paris.",
      who: "France, via the French Treasury and the Banque de France. The African heads of state who maintained the arrangement for political and financial support. The beneficiaries are French exporters and the stability of the eurozone.",
      where: "West African CFA (XOF): 8 countries. Central African CFA (XAF): 6 countries. Combined population ~200 million. The 2019 reform renamed the West African CFA to 'eco' and ended the deposit requirement — but kept the peg to the euro and French oversight. Mali's 2020 coup was partly fuelled by frustration with the CFA.",
      cost: "Monetary sovereignty is surrendered. Nations cannot use devaluation to boost exports or print currency for development. Capital flight to France is structural. The currency union forces a one-size-fits-all monetary policy on economies with vastly different needs.",
      diagnosed: ["rodney", "galeano", "fanon"],
      quote: { text: "The market system, when fully unleashed, cannibalizes the social fabric that makes human life possible. The violence is not incidental. It is structural output.", source: "Karl Polanyi's framework", attributed: false },
      sources: [
        "Ndongo Samba Sylla & Fanny Pigeaud, Africa's Last Colonial Currency (2021)"
      ],
      accent: "#B07A1B"
    },
    {
      id: "rigged-market",
      arm: "economy",
      mechanism: "The Rigged Market",
      oneLiner: "Free trade for thee, subsidies for me.",
      how: "WTO rules were written by the largest economies and favour them. The US and EU subsidise their agriculture at levels that African farmers cannot match, then demand that African markets be opened to their exports. The DRC produces ~70% of the world's cobalt, essential for batteries, yet captures only a fraction of the value. Raw materials out; finished goods in — the colonial division of labour persists.",
      who: "WTO, US and EU trade negotiators, multinational mining corporations (Glencore, China Molybdenum). The beneficiaries are the corporations and consumer economies that buy cheap raw materials and sell back expensive finished products.",
      where: "US cotton subsidies alone cost West African cotton-producing nations an estimated $250 million annually in lost income. The DRC's cobalt is exported raw, refined in China, and returns as batteries at 10× the price. The EU's Everything But Arms scheme grants tariff-free access — but compliance costs and rules of origin exclude many African producers.",
      cost: "African and other Global South economies are locked into primary commodity production. Industrialisation is prevented by unfair competition. The value chain is captured at the top. The poverty is called 'lack of competitiveness,' but it is engineered.",
      diagnosed: ["galeano", "rodney", "patnaik", "polanyi"],
      quote: { text: "The free market is not natural. Markets were always embedded in social relations. The violence is structural output.", source: "Karl Polanyi's framework", attributed: false },
      sources: [
        "Yash Tandon, Trade Is War (2015)",
        "Joseph Stiglitz, Globalization and Its Discontents (2002)"
      ],
      accent: "#B07A1B"
    },
    {
      id: "offshore-drain",
      arm: "economy",
      mechanism: "The Offshore Drain",
      oneLiner: "They take more in illicit flows than the world gives in aid.",
      how: "Transfer pricing, trade misinvoicing, and tax havens allow corporations and wealthy individuals to move profits out of developing countries without paying tax. Africa loses an estimated $88.6 billion annually to illicit financial flows — more than it receives in aid and foreign direct investment combined. London's network of secrecy jurisdictions (British Virgin Islands, Cayman Islands, Jersey) is the largest enabler.",
      who: "Multinational corporations, wealthy individuals, the big four accounting firms that design the structures, and the secrecy jurisdictions that host them. The UK is the world's largest secrecy enabler through its overseas territories and crown dependencies.",
      where: "A 2020 UNCTAD report found that Africa loses $88.6 billion per year to illicit financial flows. The Panama Papers and Pandora Papers revealed that African heads of state and mining executives hold fortunes in offshore accounts. Nigeria's national oil company was found to have 'lost' $20 billion in a single audit.",
      cost: "Tax revenue that could fund schools, hospitals, and infrastructure vanishes into secrecy jurisdictions. The gap is filled by more borrowing — often from the same institutions that enable the outflows. Corruption is individualised; the system that enables it is structural.",
      diagnosed: ["patnaik", "rodney", "galeano"],
      quote: { text: "Roughly $45 trillion was drained from India between 1765 and 1938 — the arithmetic of empire.", source: "Utsa Patnaik, on the colonial drain", attributed: false },
      sources: [
        "UNCTAD, Economic Development in Africa Report (2020)",
        "Nicholas Shaxson, Treasure Islands (2011)",
        "Tax Justice Network"
      ],
      accent: "#B07A1B"
    },
    {
      id: "weaponised-currency",
      arm: "economy",
      mechanism: "The Weaponised Currency (Dollar Hegemony)",
      oneLiner: "Sanctions collapse economies without firing a shot.",
      how: "The US dollar is the world's reserve currency, used for the majority of international trade. This gives the US jurisdiction over any transaction that passes through the SWIFT system or any bank with US ties. Sanctions — unilateral, extraterritorial — can collapse an economy by cutting it off from trade, finance, and technology. Secondary sanctions force third countries to comply or face exclusion themselves.",
      who: "The US Treasury's Office of Foreign Assets Control (OFAC), the Federal Reserve, and the SWIFT network. The beneficiaries are US foreign policy and US financial institutions that intermediate global flows.",
      where: "Cuba has been under US embargo since 1962 — the longest in modern history. Iran's economy was devastated by sanctions after the US withdrew from the nuclear deal. Venezuela's assets were frozen and transferred to opposition figures. Russia was cut off from SWIFT after 2022. In every case, the civilian population bore the cost.",
      cost: "Economic warfare masquerades as diplomacy. Civilian populations are starved of medicine, food, and technology. The sovereignty of third countries is overridden by extraterritorial jurisdiction. The dollar's dominance becomes a weapon.",
      diagnosed: ["chomsky", "mbembe", "agamben"],
      quote: { text: "Sovereignty is the power to decide which lives may be taken without the taking counting as a crime.", source: "Giorgio Agamben, the argument of Homo Sacer", attributed: false },
      sources: [
        "Nicholas Mulder, The Economic Weapon (2022)",
        "Joy Gordon, Invisible War (2010)"
      ],
      accent: "#B07A1B"
    },

    /* ARM 03 · LANGUAGE */
    {
      id: "glass-tongue",
      arm: "language",
      mechanism: "The Glass Tongue",
      oneLiner: "The coloniser's language is the language of law, power, and thought. Those who do not speak it are invisible.",
      how: "The colonial language — English, French, Portuguese, Spanish — remains the language of government, law, higher education, and formal employment in most former colonies. Fluency in the colonial language determines who can participate in public life, access justice, or obtain white-collar work. The vast majority who speak only indigenous languages are structurally excluded.",
      who: "National governments that retained colonial languages for 'unity' or 'international access.' Elite classes educated in colonial languages who monopolise public discourse. Foreign donors and NGOs who operate only in English or French.",
      where: "In India, English is spoken by ~10% of the population but dominates law, higher courts, and corporate employment. In Senegal, government operates in French while ~80% of the population speaks Wolof. In Cameroon, Anglophone regions have faced state violence partly over language policy. The Nigerian civil service operates in English, excluding the majority of citizens from direct state interaction.",
      cost: "Democracy is limited to the linguistically privileged. Indigenous knowledge systems are devalued. Legal and educational systems operate in languages the majority do not understand. Social mobility requires cultural self-erasure.",
      diagnosed: ["ngugi", "fanon", "memmi"],
      quote: { text: "Colonialism fabricates both the colonizer and the colonized — and it deforms them both.", source: "Albert Memmi, The Colonizer and the Colonized", attributed: true },
      sources: [
        "Ngũgĩ wa Thiong'o, Decolonising the Mind (1986)",
        "Robert Phillipson, Linguistic Imperialism (1992)"
      ],
      accent: "#C8941C"
    },
    {
      id: "unelected-lingua-franca",
      arm: "language",
      mechanism: "The Unelected Lingua Franca",
      oneLiner: "Publish in English or perish. The world's knowledge is filtered through one tongue.",
      how: "English dominates scientific publishing, academic conferences, aviation, finance, and technology — not because it is superior but because the infrastructure was built by English-speaking powers. Non-English scholarship is structurally invisible: fewer citations, lower impact factors, exclusion from major indices. Scholars from the Global South must write in a second language to be heard.",
      who: "Anglophone universities, publishing houses (Elsevier, Springer), citation indices (Web of Science, Scopus), and funding bodies that privilege English-medium output. The beneficiaries are Anglophone academic institutions and the corporations that monetise scholarly communication.",
      where: "Over 90% of scientific papers are published in English. Major conferences in every field operate in English, even in non-English-speaking countries. In Japan and China, researchers are evaluated by English publication metrics. The 'impact factor' system, dominated by Western journals, shapes what counts as legitimate knowledge worldwide.",
      cost: "Scholarship in indigenous languages and non-Western frameworks is marginalised. Whole intellectual traditions are excluded from global discourse. The best minds from the Global South spend years mastering a foreign academic style rather than developing local knowledge. English becomes a tax on thought.",
      diagnosed: ["ngugi", "chomsky", "said"],
      quote: { text: "The smart way to keep people passive and obedient is to strictly limit the spectrum of acceptable opinion.", source: "Noam Chomsky, The Common Good (1998)", attributed: true },
      sources: [
        "Robert Phillipson, Linguistic Imperialism (1992)",
        "Anna Wierzbicka, Imprisoned in English (2014)"
      ],
      accent: "#C8941C"
    },
    {
      id: "quiet-extinction",
      arm: "language",
      mechanism: "The Quiet Extinction",
      oneLiner: "Every language that dies takes a way of seeing the world with it.",
      how: "UNESCO estimates that of the world's ~7,000 languages, roughly 40% are endangered — and one dies approximately every two weeks. Each extinction represents not merely a loss of vocabulary but the erasure of a cognitive framework, an ecological knowledge system, an oral history, and a way of relating to the world.",
      who: "National education systems that enforce monolingualism. Global media that operate in dominant languages. Economic pressures that reward linguistic conformity. The beneficiaries are the cultures whose languages become the default — and the corporations that sell in them.",
      where: "Australia has lost over 100 Aboriginal languages since colonisation; only 13 are still being learned by children. In the Americas, Indigenous languages face pressure from Spanish, English, and Portuguese. In Africa, colonial languages dominate education while indigenous languages are treated as 'local' or 'informal.' The UN International Year of Indigenous Languages (2019) acknowledged the crisis but produced little structural change.",
      cost: "Each language encodes unique knowledge of medicine, ecology, astronomy, and social organisation. Its extinction is irreversible. The remaining languages homogenise human thought. Children who lose their heritage language lose access to their ancestors' knowledge and their own identity.",
      diagnosed: ["ngugi", "benjamin", "wynter"],
      quote: { text: "There is no document of civilization which is not at the same time a document of barbarism.", source: "Walter Benjamin, Theses on the Philosophy of History (1940)", attributed: true },
      sources: [
        "UNESCO Atlas of the World's Languages in Danger",
        "K. David Harrison, When Languages Die (2007)"
      ],
      accent: "#C8941C"
    },
    {
      id: "francophonie-empire",
      arm: "language",
      mechanism: "Francophonie as Soft Empire",
      oneLiner: "Eighty-eight member states, one language, and the aid flows with it.",
      how: "The Organisation internationale de la Francophonie (OIF) comprises 88 member states, including many former French colonies. Membership brings preferential access to French aid, cultural funding, and educational partnerships — but also reinforces French as the language of diplomacy, education, and formal employment. RFI, France 24, and TV5Monde operate as cultural infrastructure. The CFA franc and Francophonie are two faces of one system.",
      who: "France, through the OIF, the French Ministry of Foreign Affairs, and state-funded media. African governments that see membership as a route to aid and legitimacy. The beneficiaries are French cultural influence and the corporations that operate in French-speaking markets.",
      where: "Senegal, Côte d'Ivoire, Mali, Burkina Faso, and other West and Central African nations are members. French is the official language despite being spoken by a minority in many countries. The OIF summit is a major diplomatic event. French language education receives significant state subsidy.",
      cost: "Francophonie legitimises continued French cultural and political influence. African languages are marginalised in formal education and government. The next generation of African leaders is educated in French frameworks, reading French history, and evaluating their own cultures through French lenses.",
      diagnosed: ["ngugi", "fanon", "gramsci"],
      quote: { text: "The empire's deepest victory is not the territory it takes but the consent it grows in the minds of the ruled.", source: "Gramsci's hegemony analysis", attributed: false },
      sources: [
        "Ndongo Samba Sylla & Fanny Pigeaud, Africa's Last Colonial Currency (2021)",
        "Robert Phillipson, Linguistic Imperialism Continued (2009)"
      ],
      accent: "#C8941C"
    },

    /* ARM 04 · MILITARY */
    {
      id: "permanent-garrison",
      arm: "military",
      mechanism: "The Permanent Garrison",
      oneLiner: "Seven hundred and fifty bases in eighty countries. The empire never left.",
      how: "The United States maintains approximately 750 military bases in 80 countries. France keeps permanent bases in Djibouti, Senegal, Côte d'Ivoire, Gabon, and the UAE. The British Indian Ocean Territory of Diego Garcia was depopulated in the 1960s–70s to build a US base; the Chagossian people remain exiled. AFRICOM, the US Africa Command, coordinates military operations across the entire continent from its headquarters in Germany.",
      who: "US Department of Defense, French Ministry of Armed Forces, UK Ministry of Defence. The host governments that lease territory in exchange for aid, security guarantees, or military training. The beneficiaries are the basing nations' power projection and defence contractors.",
      where: "Guantánamo Bay, Cuba — held since 1903. Camp Lemonnier, Djibouti — the only permanent US base in Africa. France's Opération Barkhane operated across the Sahel from bases in Mali, Niger, and Chad until withdrawal from Mali in 2022. Diego Garcia remains a strategic hub for operations in the Middle East and Indian Ocean.",
      cost: "Sovereignty is compromised where bases are located. Local populations live under foreign military jurisdiction. The bases become targets and flashpoints. The presence is called 'partnership' or 'security cooperation' but it is occupation by another name.",
      diagnosed: ["chomsky", "zinn", "mbembe"],
      quote: { text: "The sad truth is that most evil is done by people who never make up their minds to be good or evil.", source: "Hannah Arendt, The Life of the Mind", attributed: true },
      sources: [
        "David Vine, Base Nation (2015)",
        "Daniel Immerwahr, How to Hide an Empire (2019)"
      ],
      accent: "#7A1020"
    },
    {
      id: "coup-foreign-policy",
      arm: "military",
      mechanism: "The Coup as Foreign Policy",
      oneLiner: "Nationalise our resources? Enjoy your new military government.",
      how: "The CIA, MI6, and DGSE have orchestrated or supported coups against governments that nationalised resources, pursued independent foreign policies, or threatened corporate interests. The pattern is consistent: a reformist or nationalist leader takes power, nationalises oil or land, the intelligence services intervene, and a compliant military regime replaces them.",
      who: "CIA (US), MI6 (UK), DGSE (France), and local military officers trained at US or French military academies. The beneficiaries are the corporations that regain access to resources and the Western governments that secure compliant allies.",
      where: "Iran 1953 (Mossadegh, oil nationalisation). Guatemala 1954 (Árbenz, land reform). Congo 1960 (Lumumba, independence from Belgium). Chile 1973 (Allende, socialism). Indonesia 1965 (Sukarno, non-alignment). Burkina Faso 1987 (Sankara, anti-imperialism). The list extends to dozens of cases across every continent.",
      cost: "Democracy is destroyed. Reformist governments are replaced by dictatorships. The resources flow again — cheaply. The people who elected reformist leaders are ruled by torturers. The narrative becomes: 'they were not ready for democracy.'",
      diagnosed: ["zinn", "chomsky", "galeano"],
      quote: { text: "The colonised who comes to see his own culture as inferior, and the nation that conducts its affairs in the colonizer's language and categories.", source: "Gramsci's hegemony analysis", attributed: false },
      sources: [
        "Stephen Kinzer, Overthrow (2006)",
        "William Blum, Killing Hope (2003)"
      ],
      accent: "#7A1020"
    },
    {
      id: "arms-trade",
      arm: "military",
      mechanism: "The Arms Trade",
      oneLiner: "The same nations that preach peace are the largest dealers in death.",
      how: "The five permanent members of the UN Security Council — charged with maintaining international peace — are responsible for approximately 75% of global arms exports. The US, Russia, France, the UK, and China sell weapons to conflict zones, authoritarian regimes, and both sides of ongoing wars. The trade is regulated in name only; human rights assessments are routinely waived.",
      who: "Lockheed Martin, Raytheon, BAE Systems, Dassault, Norinco, Rosoboronexport. The governments that approve export licenses. The beneficiaries are defence corporations, their shareholders, and the politicians who receive campaign contributions from the industry.",
      where: "US weapons sold to Saudi Arabia have been used in Yemen, creating the world's worst humanitarian crisis. French arms were used against civilians in Egypt and the UAE. UK weapons have been sold to Israel, Saudi Arabia, and Bahrain. Russia sells to Syria and Myanmar. The same weapons often end up in the hands of groups they were not sold to — through capture, diversion, or proxy transfer.",
      cost: "Wars are prolonged because weapons are available. Civilian populations are killed with weapons sold by permanent Security Council members. The profits are private; the deaths are public. The international order that condemns violence funds it.",
      diagnosed: ["chomsky", "mbembe", "arendt"],
      quote: { text: "The sad truth is that most evil is done by people who never make up their minds to be good or evil.", source: "Hannah Arendt, The Life of the Mind", attributed: true },
      sources: [
        "SIPRI Arms Transfers Database",
        "Andrew Feinstein, The Shadow World (2011)"
      ],
      accent: "#7A1020"
    },
    {
      id: "proxy-wars",
      arm: "military",
      mechanism: "Proxy Wars",
      oneLiner: "Great powers arm local factions to fight wars on other people's soil.",
      how: "Instead of direct military intervention, great powers arm, fund, and train local factions to fight wars that serve external interests. The battlefield is someone else's country; the casualties are someone else's citizens. The great power maintains deniability while achieving strategic goals. When one proxy falters, another is found.",
      who: "US, Russia, China, France, UK, UAE, Saudi Arabia, Turkey — each arming factions in conflicts across the Middle East, Africa, and Asia. Private military companies (Wagner, Blackwater) provide deniable force. The beneficiaries are the external powers that secure resources, markets, or strategic position without domestic political cost.",
      where: "Syria: Russia, Iran, Hezbollah vs. US-backed Kurds, Turkey, Gulf states. Libya: multiple factions backed by UAE, Turkey, Russia, France. Sahel: Wagner/Africa Corps replacing French forces in Mali, Burkina Faso, and Niger. DRC: Rwanda-backed M23 rebels, allegedly with support from external actors, operate in mineral-rich eastern Congo.",
      cost: "The war is fought in your country but decided elsewhere. Infrastructure is destroyed. Civilians are displaced. Resources are extracted by proxy forces. One external control replaces another — French forces out, Russian mercenaries in — but the sovereignty of the host nation remains fictional.",
      diagnosed: ["chomsky", "fanon", "mbembe"],
      quote: { text: "Decolonization is the creation of a new man. But this creation is not handed over; it is won in struggle.", source: "Frantz Fanon, The Wretched of the Earth (1961)", attributed: true },
      sources: [
        "Vijay Prashad, Washington Bullets (2020)",
        "Nick Turse, Tomorrow's Battlefield (2015)"
      ],
      accent: "#7A1020"
    },
    {
      id: "mercenary-return",
      arm: "military",
      mechanism: "The Mercenary Return (PMCs)",
      oneLiner: "Private armies operate in legal grey zones — accountable to no one, paid by everyone.",
      how: "Private Military Companies (PMCs) — Blackwater, Wagner, DynCorp, G4S — conduct military operations, security details, and intelligence work outside the chain of command of any state's armed forces. They operate in legal grey zones, often exempt from the laws of war and the accountability mechanisms that apply to national militaries. When they commit atrocities, prosecution is rare.",
      who: "Wagner Group (Russia, now Africa Corps), Blackwater/Academi (US), DynCorp (US), G4S (UK). Mining companies that trade security contracts for mineral concessions. The beneficiaries are the hiring states (deniability) and the PMCs (profit).",
      where: "Wagner operated across the Sahel and Central Africa, trading security for mining concessions in Mali, Burkina Faso, and the Central African Republic. Blackwater's Nisour Square massacre (2007) killed 17 Iraqi civilians; convictions were minimal and later overturned. G4S operates in Israeli settlements and British immigration detention centres.",
      cost: "Accountability vanishes. War becomes a profit centre. Civilian populations are left with no legal recourse when PMCs commit violence. The distinction between state force and private force dissolves, making oversight impossible.",
      diagnosed: ["arendt", "mbembe", "agamben"],
      quote: { text: "The state of exception has become the permanent operating condition of modern states.", source: "Giorgio Agamben, State of Exception", attributed: false },
      sources: [
        "Sean McFate, The Modern Mercenary (2015)",
        "Morten Bøås et al., on Wagner in Africa (NUPI, 2023)"
      ],
      accent: "#7A1020"
    }
  ]
};
