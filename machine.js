/* machine.js — "Understanding the Machine": the theory layer.
   The Timeline shows WHAT empire did; Tracing Back, WHAT it cost. These fourteen
   thinkers ask WHY it runs — and why the ruled so often consent.
   Concept-led: each entry's hero is the idea, the thinker is the subhead.
   quote.attributed === true  -> a genuine short, attributed line (fair use / public domain)
   quote.attributed === false -> the core idea distilled in my words
   recordId links to a thinker who also appears in The Records. */
window.LB_MACHINE = [
  {
    id: "marx",
    name: "Karl Marx",
    life: "1818 – 1883",
    origin: "Prussia",
    role: "Philosopher & Economist",
    work: { title: "Capital", year: 1867 },
    accent: "#8A1A1A",
    concept: "Primitive Accumulation",
    quote: { text: "Capital comes dripping from head to foot, from every pore, with blood and dirt.", source: "Capital, Vol. I (1867)", attributed: true },
    bio: "The German philosopher whose analysis of capitalism became the most influential \u2014 and most fought-over \u2014 body of social thought of the modern age. He wrote much of Capital in poverty and exile in London.",
    explain: "Marx argued that capitalism did not arise peacefully from thrift and enterprise. It required \u201cprimitive accumulation\u201d \u2014 an original, violent seizure: the enclosure of common land, the enslavement of millions, the plunder of colonies \u2014 to amass the capital that then appears to grow \u201cnaturally\u201d through the market.",
    relevance: "This is why the violence comes first and the justification after. The slave trade and colonial extraction funded the Industrial Revolution, which is then narrated as European ingenuity and work ethic. The blood at the origin is hidden behind the apparent naturalness of the system that follows \u2014 and, David Harvey argued, that seizure never stopped; it merely changed form.",
    recordId: null,
    sources: [
      "Karl Marx, Capital, Volume I (1867)",
      "David Harvey, The New Imperialism (2003) \u2014 'accumulation by dispossession'"
    ]
  },
  {
    id: "gramsci",
    name: "Antonio Gramsci",
    life: "1891 – 1937",
    origin: "Italy",
    role: "Marxist Theorist",
    work: { title: "Prison Notebooks", year: 1929, also: "written 1929\u20131935" },
    accent: "#A01B23",
    concept: "Hegemony",
    quote: { text: "The old is dying and the new cannot be born; in this interregnum a great variety of morbid symptoms appear.", source: "Prison Notebooks", attributed: true },
    bio: "An Italian Marxist imprisoned by Mussolini, whose prosecutor declared the aim was \u201cto stop this brain from functioning for twenty years.\u201d It kept functioning: from his cell he filled the notebooks that reshaped political thought.",
    explain: "Hegemony is Gramsci's answer to a hard question: why do the dominated consent to their own domination? Power, he showed, is held not mainly by force but by making the ruling class's worldview the \u201ccommon sense\u201d of the whole society \u2014 taught through schools, churches, media, and language itself.",
    relevance: "It explains the colonised who comes to see his own culture as inferior, and the nation that conducts its affairs in the colonizer's language and categories. The empire's deepest victory is not the territory it takes but the consent it grows in the minds of the ruled \u2014 before any propaganda even begins.",
    recordId: null,
    sources: [
      "Antonio Gramsci, Selections from the Prison Notebooks (1971 ed.)",
      "Stuart Hall, on Gramsci, hegemony and ideology"
    ]
  },
  {
    id: "benjamin",
    name: "Walter Benjamin",
    life: "1892 – 1940",
    origin: "Germany",
    role: "Critic & Philosopher",
    work: { title: "Theses on the Philosophy of History", year: 1940 },
    accent: "#5B2A86",
    concept: "The Angel of History",
    quote: { text: "There is no document of civilization which is not at the same time a document of barbarism.", source: "Theses on the Philosophy of History (1940)", attributed: true },
    bio: "A German-Jewish critic of dazzling range who wrote his final, greatest text while fleeing the Nazis. Trapped at the Spanish border with his escape route blocked, he took his own life in 1940.",
    explain: "In his ninth thesis, Benjamin describes the Angel of History \u2014 its face turned to the past, seeing not a chain of events but \u201cone single catastrophe\u201d piling wreckage upon wreckage. A storm from paradise blows it backward into the future, wings pinned open. \u201cThis storm,\u201d he writes, \u201cis what we call progress.\u201d",
    relevance: "Official history is written by the victors, who narrate the wreckage as advance \u2014 each era improving on the last. Benjamin's command is to \u201cbrush history against the grain,\u201d to read it from the standpoint of the defeated. Every entry in this library is an act of doing exactly that.",
    recordId: null,
    sources: [
      "Walter Benjamin, Illuminations (1968, ed. Hannah Arendt)",
      "Theses on the Philosophy of History (1940)"
    ]
  },
  {
    id: "polanyi",
    name: "Karl Polanyi",
    life: "1886 – 1964",
    origin: "Hungary / Austria",
    role: "Economic Historian",
    work: { title: "The Great Transformation", year: 1944 },
    accent: "#1A5276",
    concept: "The Market Was Made",
    quote: { text: "Laissez-faire was planned; planning was not.", source: "The Great Transformation (1944)", attributed: true },
    bio: "A Hungarian economic historian who wrote his masterwork in wartime exile, mounting one of the most powerful arguments ever made against the idea that the free market is natural.",
    explain: "Markets, Polanyi showed, were always embedded in social relations \u2014 custom, obligation, community. The nineteenth-century project of a self-regulating market required deliberately tearing those bonds apart, forcing land, labour and money to behave as pure commodities. The result was catastrophic social dislocation.",
    relevance: "It explains why economic logic produces atrocity rather than merely accompanying it. Unleashed on a colony, a peasantry, a forest, the market cannibalises the social fabric that makes life possible. The violence is not incidental to the system \u2014 it is its structural output.",
    recordId: null,
    sources: [
      "Karl Polanyi, The Great Transformation (1944)",
      "Fred Block & Margaret Somers, The Power of Market Fundamentalism (2014)"
    ]
  },
  {
    id: "cesaire-m",
    name: "Aimé Césaire",
    life: "1913 – 2008",
    origin: "Martinique",
    role: "Poet & Politician",
    work: { title: "Discourse on Colonialism", year: 1950 },
    accent: "#CC4514",
    concept: "The Colonial Boomerang",
    quote: { text: "What Europe could not forgive Hitler was not the crime itself \u2014 but that he applied to Europeans what had been reserved for the colonized.", source: "the argument of Discourse on Colonialism", attributed: false },
    bio: "The Martinican poet and politician who co-founded the Négritude movement and mentored Frantz Fanon. He also appears in The Records \u2014 here for one specific, explosive argument.",
    explain: "Nazism, Césaire argued, was not a European aberration but colonial practice turned inward. The concentration camp, systematic starvation, racial classification, forced labour \u2014 all were colonial inventions, perfected on Africa, Asia and the Americas across four centuries, then \u201cbrought home\u201d to Europe.",
    relevance: "If true \u2014 and it is documentable \u2014 it collapses the line between \u201cEuropean civilization\u201d and \u201cNazi barbarism\u201d on which the whole post-war moral order rests. The horror at Nazism, he insisted, was horror not at the methods but at the address: that they were finally applied to white people.",
    recordId: "cesaire",
    sources: [
      "Aimé Césaire, Discourse on Colonialism (1950)",
      "Hannah Arendt, The Origins of Totalitarianism (1951)"
    ]
  },
  {
    id: "arendt",
    name: "Hannah Arendt",
    life: "1906 – 1975",
    origin: "Germany / United States",
    role: "Political Theorist",
    work: { title: "Eichmann in Jerusalem", year: 1963, also: "The Origins of Totalitarianism (1951)" },
    accent: "#234C8A",
    concept: "The Banality of Evil",
    quote: { text: "The sad truth is that most evil is done by people who never make up their minds to be good or evil.", source: "The Life of the Mind", attributed: true },
    bio: "A German-Jewish political theorist who fled the Nazis and became one of the century's foremost thinkers on power, freedom and evil. Covering Adolf Eichmann's trial, she coined a phrase that has never stopped causing trouble.",
    explain: "The \u201cbanality of evil\u201d: the greatest crimes are committed not by sadistic monsters but by unremarkable functionaries who stop thinking \u2014 who do their jobs, follow orders, process the paperwork, and never reckon with what they are part of. Evil, she argued, can be thoughtless before it is malicious.",
    relevance: "Empire runs on clerks. The famine administrator, the district officer, the shipping agent \u2014 most colonial machinery was operated by ordinary people managing a system whose horror they declined to see. Arendt explains how vast atrocity is carried out by people who never once considered themselves cruel.",
    recordId: null,
    sources: [
      "Hannah Arendt, Eichmann in Jerusalem (1963)",
      "Hannah Arendt, The Origins of Totalitarianism (1951)"
    ]
  },
  {
    id: "memmi",
    name: "Albert Memmi",
    life: "1920 – 2020",
    origin: "Tunisia",
    role: "Writer",
    work: { title: "The Colonizer and the Colonized", year: 1957 },
    accent: "#9C3D1E",
    concept: "The Colonizer Who Refuses",
    quote: { text: "Colonialism fabricates both the colonizer and the colonized \u2014 and it deforms them both.", source: "The Colonizer and the Colonized", attributed: false },
    bio: "A Tunisian Jewish writer who anatomised the colonial relationship from both ends at once, showing how it traps and corrupts not only the colonised but the colonizer too.",
    explain: "His sharpest portrait is the \u201ccolonizer who refuses\u201d \u2014 the liberal who feels bad about colonialism, is kind to individuals, deplores the excesses, and yet changes nothing. His discomfort never becomes structural change; it becomes guilt management, which serves the system by giving its beneficiaries relief without cost.",
    relevance: "It is the exact diagnosis of every comfortable conscience inside an unjust order: the citizen who deplores a war their taxes fund, who mourns an empire their country has never reckoned with. Memmi drew the portrait in 1957, and it has not dated.",
    recordId: null,
    sources: [
      "Albert Memmi, The Colonizer and the Colonized (1957)",
      "Jean-Paul Sartre, Colonialism and Neocolonialism (1964)"
    ]
  },
  {
    id: "debord",
    name: "Guy Debord",
    life: "1931 – 1994",
    origin: "France",
    role: "Theorist & Filmmaker",
    work: { title: "The Society of the Spectacle", year: 1967 },
    accent: "#B01E63",
    concept: "The Spectacle",
    quote: { text: "All that was once directly lived has become mere representation.", source: "The Society of the Spectacle (1967)", attributed: true },
    bio: "A French situationist who, at thirty-five, wrote a book that reads now like prophecy: an account of a society in which lived experience has been wholly replaced by its image.",
    explain: "The \u201cspectacle\u201d is not television or media as such, but the organisation of all modern life around representation rather than reality. We consume images of events instead of living them, and manufactured desires instead of our own. Power no longer needs only force, or even consent \u2014 it operates by replacing the world with its picture.",
    relevance: "It explains the endless coverage that changes nothing: the expert panels, emergency sessions and statements of concern that surround an atrocity while it proceeds, unaltered, beneath them. The spectacle of a functioning moral order is allowed to stand in for the order itself.",
    recordId: null,
    sources: [
      "Guy Debord, The Society of the Spectacle (1967)",
      "Jonathan Crary, 24/7: Late Capitalism and the Ends of Sleep (2013)"
    ]
  },
  {
    id: "wallerstein",
    name: "Immanuel Wallerstein",
    life: "1930 – 2019",
    origin: "United States",
    role: "Sociologist",
    work: { title: "The Modern World-System", year: 1974 },
    accent: "#14706E",
    concept: "The World-System",
    quote: { text: "There are no separate national histories \u2014 only one world-system, in which a rich core requires a poor periphery to function.", source: "world-systems theory", attributed: false },
    bio: "An American sociologist who insisted that no nation's wealth or poverty can be understood in isolation \u2014 there is only one global capitalist system, and it has a built-in structure.",
    explain: "That system has a core (which captures most of the surplus through high-wage production and finance), a periphery (which supplies raw materials and cheap labour, and is kept there), and a semi-periphery between them. Underdevelopment is not a starting point awaiting development; it is produced and maintained, because core wealth requires peripheral poverty.",
    relevance: "Haiti's poverty is not bad luck \u2014 it is the logical output of two centuries of extraction, each mechanism (French debt, US occupation, IMF adjustment) replacing the last while preserving the same relationship. Wallerstein turns a hundred separate national tragedies into one visible architecture.",
    recordId: null,
    sources: [
      "Immanuel Wallerstein, The Modern World-System (1974)",
      "Walter Rodney, How Europe Underdeveloped Africa (1972)"
    ]
  },
  {
    id: "foucault",
    name: "Michel Foucault",
    life: "1926 – 1984",
    origin: "France",
    role: "Philosopher & Historian",
    work: { title: "Discipline and Punish", year: 1975, also: "The History of Sexuality (1976)" },
    accent: "#3A4DA8",
    concept: "Power / Knowledge",
    quote: { text: "Power is everywhere; not because it embraces everything, but because it comes from everywhere.", source: "The History of Sexuality, Vol. 1 (1976)", attributed: true },
    bio: "A French philosopher who transformed how we think about power \u2014 not as something held and wielded from above, but as something woven through institutions, knowledge and everyday life.",
    explain: "Power and knowledge are inseparable. Every claim to know \u2014 the clinic, the prison, the census, the science of \u201craces\u201d \u2014 is also an exercise of power. Modern power works less by spectacular punishment than by normalisation: defining the normal and the deviant, then training populations to police themselves.",
    relevance: "Colonialism's first weapon was knowledge \u2014 the surveys, maps, racial sciences and ethnographies that made a people \u201cknowable\u201d and therefore governable. Foucault explains how domination disguises itself as neutral expertise, and why being \u201cstudied\u201d by an empire was never innocent.",
    recordId: null,
    sources: [
      "Michel Foucault, Discipline and Punish (1975)",
      "Michel Foucault, The History of Sexuality, Vol. 1 (1976)"
    ]
  },
  {
    id: "said",
    name: "Edward Said",
    life: "1935 – 2003",
    origin: "Palestine / United States",
    role: "Literary Critic",
    work: { title: "Orientalism", year: 1978, also: "Culture and Imperialism (1993)" },
    accent: "#1B7A4B",
    concept: "Orientalism",
    quote: { text: "Every empire tells itself and the world that it is unlike all other empires, that its mission is not to plunder but to educate and liberate.", source: "Orientalism (2003 preface)", attributed: true },
    bio: "A Palestinian-American literary critic whose 1978 book changed the humanities. He showed that Western knowledge about \u201cthe East\u201d was never neutral description but an instrument of power.",
    explain: "\u201cOrientalism\u201d is the vast tradition \u2014 scholarship, novels, art, travel writing \u2014 that constructed the Oriental as irrational, sensual, despotic and incapable of self-rule. Not because it was true, but because the construction made domination appear natural, necessary, even benevolent. In Culture and Imperialism he found empire humming quietly inside the canon \u2014 Austen's comfortable England underwritten by Caribbean plantations the novels decline to examine.",
    relevance: "Every colonial project had an intellectual superstructure that preceded and licensed the violence. The knowledge came first and made the violence thinkable as something other than violence \u2014 as administration, uplift, civilization. Said named the machine that builds the justification before the first shot is fired.",
    recordId: null,
    sources: [
      "Edward W. Said, Orientalism (1978)",
      "Edward W. Said, Culture and Imperialism (1993)"
    ]
  },
  {
    id: "chomsky-m",
    name: "Noam Chomsky",
    life: "b. 1928",
    origin: "United States",
    role: "Linguist & Critic",
    work: { title: "Manufacturing Consent", year: 1988, also: "with Edward S. Herman" },
    accent: "#0E5C50",
    concept: "Manufactured Consent",
    quote: { text: "The smart way to keep people passive and obedient is to strictly limit the spectrum of acceptable opinion.", source: "The Common Good (1998)", attributed: true },
    bio: "The MIT linguist and dissident who, with Edward Herman, set out exactly how an unfree story gets told by a nominally free press. He also appears in The Records.",
    explain: "The \u201cpropaganda model\u201d: in a free-market media system, no censor is needed. A set of filters \u2014 corporate ownership, advertising revenue, reliance on official sources \u2014 quietly shapes what becomes news and what stays invisible. Consent is manufactured by the structure, not dictated by a state.",
    relevance: "It explains how democracies wage and fund colonial violence with the consent of populations who consider themselves free and well-informed. The wars abroad are made palatable at home by a press that filters them \u2014 a softer, market-driven cousin of Gramsci's hegemony.",
    recordId: "chomsky",
    sources: [
      "Edward S. Herman & Noam Chomsky, Manufacturing Consent (1988)",
      "Noam Chomsky, Necessary Illusions (1989)"
    ]
  },
  {
    id: "agamben",
    name: "Giorgio Agamben",
    life: "b. 1942",
    origin: "Italy",
    role: "Philosopher",
    work: { title: "Homo Sacer", year: 1995, also: "State of Exception (2003)" },
    accent: "#7A1020",
    concept: "Bare Life",
    quote: { text: "Sovereignty is the power to decide which lives may be taken without the taking counting as a crime.", source: "the argument of Homo Sacer", attributed: false },
    bio: "An Italian philosopher who took Foucault's analysis of power somewhere darker \u2014 into the zone where law itself decides who may be killed with impunity.",
    explain: "\u201cHomo sacer,\u201d drawn from Roman law, is the figure who can be killed without it counting as murder \u2014 stripped to \u201cbare life,\u201d outside legal protection. The \u201cstate of exception,\u201d the emergency suspension of normal law, has become, Agamben argues, the permanent operating condition of modern states rather than a temporary measure.",
    relevance: "Guantánamo and Gaza are this made physical: zones engineered to sit outside ordinary legal jurisdiction, where the very argument over whether the law applies is the mechanism. Agamben exposes the legal architecture by which certain lives are made available for violence.",
    recordId: null,
    sources: [
      "Giorgio Agamben, Homo Sacer (1995)",
      "Giorgio Agamben, State of Exception (2003)"
    ]
  },
  {
    id: "wynter",
    name: "Sylvia Wynter",
    life: "b. 1928",
    origin: "Jamaica",
    role: "Philosopher & Dramatist",
    work: { title: "Unsettling the Coloniality of Being", year: 2003 },
    accent: "#C8941C",
    concept: "The Overrepresentation of Man",
    quote: { text: "The West did not merely invent racism \u2014 it invented a definition of the human that only the West could fully embody.", source: "the argument of 'Unsettling the Coloniality of Being'", attributed: false },
    bio: "A Jamaican philosopher and dramatist \u2014 among the most radical thinkers on this list, and the least known \u2014 who argues that the deepest colonial act was redefining what it means to be human.",
    explain: "The European Renaissance, Wynter argues, produced a specific figure \u2014 \u201cMan\u201d \u2014 that cast European bourgeois man as the universal model of humanity, with everyone else ranked by their distance from it. This is not racism layered on top of thought; it is the conceptual foundation beneath it, European particularity masquerading as universal humanity.",
    relevance: "It explains why violence against those defined as less-than-human does not fully register as violence. Before any propaganda, the category itself does the work. Wynter's project \u2014 to \u201cunsettle\u201d that definition \u2014 reveals Fanon, Said and Foucault as workers on different parts of one architecture.",
    recordId: null,
    sources: [
      "Sylvia Wynter, 'Unsettling the Coloniality of Being / Power / Truth / Freedom' (2003)",
      "Katherine McKittrick (ed.), Sylvia Wynter: On Being Human as Praxis (2015)"
    ]
  }
];
