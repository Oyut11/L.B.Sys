/* links.js — augments each thinker with:
     - work.source : where to find / read the book (a real, durable link)
     - connections : curated intellectual links to OTHER records in this library
     - readNext    : further reading, each linked to a catalog source
   Runs after data.js; merges into window.LB_THINKERS by id.
   Rights note: full-text links point only to public-domain works (Project Gutenberg).
   In-copyright works link to Open Library (Internet Archive) to find/borrow/buy — never to pirated copies. */
(function () {
  // Open Library search — durable "find this book" link for in-copyright works
  const ol = (q) => "https://openlibrary.org/search?q=" + encodeURIComponent(q);

  const L = {
    dubois: {
      source: { url: "https://www.gutenberg.org/ebooks/408", label: "Read the full text — free", kind: "fulltext" },
      connections: [
        { id: "james", rel: "Fellow architect of Pan-African history" },
        { id: "rodney", rel: "Heir to the accounting of Black freedom" },
        { id: "davis-angela", rel: "From the NAACP he founded to abolition" }
      ],
      readNext: [
        { title: "Black Reconstruction in America", author: "W. E. B. Du Bois", why: "His demolition of the myth of failed emancipation" },
        { title: "The Black Jacobins", author: "C. L. R. James", why: "The revolution his color line predicted" }
      ]
    },
    james: {
      source: { url: ol("The Black Jacobins C.L.R. James"), label: "Find this book", kind: "find" },
      connections: [
        { id: "dubois", rel: "Fellow Pan-African historian" },
        { id: "rodney", rel: "He helped shape the next generation of Caribbean Marxists" },
        { id: "trouillot", rel: "Both restored the Haitian Revolution to history" }
      ],
      readNext: [
        { title: "Beyond a Boundary", author: "C. L. R. James", why: "Cricket, colonialism and the making of a mind" },
        { title: "How Europe Underdeveloped Africa", author: "Walter Rodney", why: "The argument carried into Africa" }
      ]
    },
    cesaire: {
      source: { url: ol("Discourse on Colonialism Aimé Césaire"), label: "Find this book", kind: "find" },
      connections: [
        { id: "fanon", rel: "His student in Martinique" },
        { id: "ngugi", rel: "A shared project of cultural decolonization" },
        { id: "mbembe", rel: "The colonial logic he named, extended" }
      ],
      readNext: [
        { title: "Notebook of a Return to the Native Land", author: "Aimé Césaire", why: "The founding poem of Négritude" },
        { title: "Black Skin, White Masks", author: "Frantz Fanon", why: "His student's first book" }
      ]
    },
    achebe: {
      source: { url: ol("Things Fall Apart Chinua Achebe"), label: "Find this book", kind: "find" },
      connections: [
        { id: "ngugi", rel: "Fellow novelist of the African story" },
        { id: "cesaire", rel: "A shared reclamation of culture" }
      ],
      readNext: [
        { title: "Arrow of God", author: "Chinua Achebe", why: "The conquest seen from inside the priesthood" },
        { title: "Decolonising the Mind", author: "Ngũgĩ wa Thiong'o", why: "Why he kept writing in English — and why Ngũgĩ stopped" }
      ]
    },
    fanon: {
      source: { url: ol("The Wretched of the Earth Frantz Fanon"), label: "Find this book", kind: "find" },
      connections: [
        { id: "cesaire", rel: "His teacher" },
        { id: "mbembe", rel: "Necropolitics extends his diagnosis" },
        { id: "davis-angela", rel: "Read closely by the Black Power movement" }
      ],
      readNext: [
        { title: "Black Skin, White Masks", author: "Frantz Fanon", why: "The psychiatry beneath the politics" },
        { title: "Discourse on Colonialism", author: "Aimé Césaire", why: "His teacher's indictment of Europe" }
      ]
    },
    baldwin: {
      source: { url: ol("The Fire Next Time James Baldwin"), label: "Find this book", kind: "find" },
      connections: [
        { id: "dubois", rel: "The lineage of Black American witness" },
        { id: "davis-angela", rel: "Comrades of the liberation era" },
        { id: "kelley", rel: "The imagination he insisted on" }
      ],
      readNext: [
        { title: "Notes of a Native Son", author: "James Baldwin", why: "The essays that made his name" },
        { title: "Go Tell It on the Mountain", author: "James Baldwin", why: "Harlem, the church, and the self" }
      ]
    },
    galeano: {
      source: { url: ol("Open Veins of Latin America Eduardo Galeano"), label: "Find this book", kind: "find" },
      connections: [
        { id: "rodney", rel: "Twin accounts of engineered underdevelopment" },
        { id: "zinn", rel: "A people's history of the Americas" },
        { id: "patnaik", rel: "The accounting of extraction" }
      ],
      readNext: [
        { title: "Memory of Fire (trilogy)", author: "Eduardo Galeano", why: "The whole history of the Americas, in fragments" },
        { title: "How Europe Underdeveloped Africa", author: "Walter Rodney", why: "The same machine, another continent" }
      ]
    },
    rodney: {
      source: { url: ol("How Europe Underdeveloped Africa Walter Rodney"), label: "Find this book", kind: "find" },
      connections: [
        { id: "galeano", rel: "Parallel books on extraction" },
        { id: "james", rel: "His elder in Caribbean Marxism" },
        { id: "patnaik", rel: "The colonial drain, quantified" }
      ],
      readNext: [
        { title: "The Groundings with My Brothers", author: "Walter Rodney", why: "The talks that got him banned" },
        { title: "Open Veins of Latin America", author: "Eduardo Galeano", why: "Underdevelopment in the Americas" }
      ]
    },
    zinn: {
      source: { url: ol("A People's History of the United States Howard Zinn"), label: "Find this book", kind: "find" },
      connections: [
        { id: "galeano", rel: "A people's history, hemisphere-wide" },
        { id: "kelley", rel: "History from below" },
        { id: "chomsky", rel: "Lifelong allies in dissent" }
      ],
      readNext: [
        { title: "You Can't Be Neutral on a Moving Train", author: "Howard Zinn", why: "His memoir of history as participation" },
        { title: "Lies My Teacher Told Me", author: "James W. Loewen", why: "What the textbooks leave out" }
      ]
    },
    ngugi: {
      source: { url: ol("Decolonising the Mind Ngugi wa Thiong'o"), label: "Find this book", kind: "find" },
      connections: [
        { id: "achebe", rel: "Fellow titan of African literature" },
        { id: "cesaire", rel: "Decolonizing culture, not just the state" },
        { id: "fanon", rel: "On national culture" }
      ],
      readNext: [
        { title: "Weep Not, Child", author: "Ngũgĩ wa Thiong'o", why: "His first novel, set in the Mau Mau years" },
        { title: "Wizard of the Crow", author: "Ngũgĩ wa Thiong'o", why: "The epic he wrote in Gikuyu" }
      ]
    },
    chomsky: {
      source: { url: ol("Manufacturing Consent Chomsky Herman"), label: "Find this book", kind: "find" },
      connections: [
        { id: "zinn", rel: "Lifelong allies in dissent" },
        { id: "finkelstein", rel: "He championed him when others would not" },
        { id: "trouillot", rel: "Consent and silence, two sides of the page" }
      ],
      readNext: [
        { title: "Hegemony or Survival", author: "Noam Chomsky", why: "America's quest for global dominance" },
        { title: "The Washington Connection and Third World Fascism", author: "Chomsky & Herman", why: "The earlier, harder-edged study" }
      ]
    },
    lindqvist: {
      source: { url: ol("Exterminate All the Brutes Sven Lindqvist"), label: "Find this book", kind: "find" },
      connections: [
        { id: "hochschild", rel: "Both excavated the Congo and colonial genocide" },
        { id: "mamdani", rel: "Colonial origins of mass killing" },
        { id: "mbembe", rel: "The colonial roots of death-politics" }
      ],
      readNext: [
        { title: "A History of Bombing", author: "Sven Lindqvist", why: "The same method, aimed at aerial warfare" },
        { title: "King Leopold's Ghost", author: "Adam Hochschild", why: "The Congo case in full" }
      ]
    },
    trouillot: {
      source: { url: ol("Silencing the Past Michel-Rolph Trouillot"), label: "Find this book", kind: "find" },
      connections: [
        { id: "james", rel: "Both restored the Haitian Revolution" },
        { id: "zinn", rel: "Who is allowed to write the record" },
        { id: "chomsky", rel: "The manufacture of silence" }
      ],
      readNext: [
        { title: "Haiti: State Against Nation", author: "Michel-Rolph Trouillot", why: "His anatomy of Duvalierism" },
        { title: "The Black Jacobins", author: "C. L. R. James", why: "The revolution his book recovers" }
      ]
    },
    mamdani: {
      source: { url: ol("Citizen and Subject Mahmood Mamdani"), label: "Find this book", kind: "find" },
      connections: [
        { id: "rodney", rel: "Colonial structures across Africa" },
        { id: "lindqvist", rel: "Colonial roots of genocide" },
        { id: "mbembe", rel: "Theorists of the postcolony" }
      ],
      readNext: [
        { title: "When Victims Become Killers", author: "Mahmood Mamdani", why: "Rwanda as colonial design" },
        { title: "Good Muslim, Bad Muslim", author: "Mahmood Mamdani", why: "The 'war on terror' decoded" }
      ]
    },
    hochschild: {
      source: { url: ol("King Leopold's Ghost Adam Hochschild"), label: "Find this book", kind: "find" },
      connections: [
        { id: "lindqvist", rel: "Both reckoned with the Congo" },
        { id: "davis-mike", rel: "The toll of colonial profit" },
        { id: "rodney", rel: "How Europe drained Africa" }
      ],
      readNext: [
        { title: "Bury the Chains", author: "Adam Hochschild", why: "The fight to abolish the slave trade" },
        { title: "Exterminate All the Brutes", author: "Sven Lindqvist", why: "The colonial road to genocide" }
      ]
    },
    finkelstein: {
      source: { url: ol("The Holocaust Industry Norman Finkelstein"), label: "Find this book", kind: "find" },
      connections: [
        { id: "chomsky", rel: "His mentor and defender" },
        { id: "trouillot", rel: "The politics of memory" },
        { id: "lindqvist", rel: "How genocide is remembered — and used" }
      ],
      readNext: [
        { title: "Image and Reality of the Israel-Palestine Conflict", author: "Norman Finkelstein", why: "His scholarly core" },
        { title: "Gaza: An Inquest into Its Martyrdom", author: "Norman Finkelstein", why: "The documented record" }
      ]
    },
    "davis-mike": {
      source: { url: ol("Late Victorian Holocausts Mike Davis"), label: "Find this book", kind: "find" },
      connections: [
        { id: "patnaik", rel: "Colonial economics and famine" },
        { id: "galeano", rel: "Extraction and engineered scarcity" },
        { id: "rodney", rel: "Underdevelopment as policy" }
      ],
      readNext: [
        { title: "City of Quartz", author: "Mike Davis", why: "His landmark dissection of Los Angeles" },
        { title: "Planet of Slums", author: "Mike Davis", why: "The world's exploding informal cities" }
      ]
    },
    kelley: {
      source: { url: ol("Freedom Dreams Robin Kelley"), label: "Find this book", kind: "find" },
      connections: [
        { id: "baldwin", rel: "The Black radical imagination" },
        { id: "davis-angela", rel: "The Black radical tradition" },
        { id: "zinn", rel: "History as a tool for the present" }
      ],
      readNext: [
        { title: "Hammer and Hoe", author: "Robin D. G. Kelley", why: "Black communists in Alabama" },
        { title: "Thelonious Monk", author: "Robin D. G. Kelley", why: "Genius, jazz, and freedom" }
      ]
    },
    mbembe: {
      source: { url: ol("Necropolitics Achille Mbembe"), label: "Find this book", kind: "find" },
      connections: [
        { id: "fanon", rel: "He extends Fanon" },
        { id: "cesaire", rel: "The colonial logic, theorized" },
        { id: "mamdani", rel: "Theorists of the postcolony" }
      ],
      readNext: [
        { title: "On the Postcolony", author: "Achille Mbembe", why: "His dissection of postcolonial power" },
        { title: "Critique of Black Reason", author: "Achille Mbembe", why: "The invention of 'blackness' as capital" }
      ]
    },
    "davis-angela": {
      source: { url: ol("Are Prisons Obsolete Angela Davis"), label: "Find this book", kind: "find" },
      connections: [
        { id: "dubois", rel: "The institution he traced to slavery" },
        { id: "fanon", rel: "Read by the movement she helped lead" },
        { id: "kelley", rel: "The Black radical tradition" }
      ],
      readNext: [
        { title: "Women, Race & Class", author: "Angela Y. Davis", why: "Her classic on intersecting oppressions" },
        { title: "Freedom Is a Constant Struggle", author: "Angela Y. Davis", why: "Abolition, Palestine, and solidarity" }
      ]
    },
    patnaik: {
      source: { url: ol("Utsa Patnaik colonial drain India imperialism"), label: "Find this work", kind: "find" },
      connections: [
        { id: "rodney", rel: "Underdevelopment as extraction" },
        { id: "galeano", rel: "The accounting of plunder" },
        { id: "davis-mike", rel: "Colonial famine and the market" }
      ],
      readNext: [
        { title: "A Theory of Imperialism", author: "Utsa & Prabhat Patnaik", why: "Imperialism reworked for today" },
        { title: "Capital and Imperialism", author: "Utsa & Prabhat Patnaik", why: "The long history of the drain" }
      ]
    }
  };

  if (!window.LB_THINKERS) return;
  window.LB_THINKERS.forEach((t) => {
    const x = L[t.id];
    if (!x) return;
    if (x.source) t.work.source = x.source;
    t.connections = x.connections || [];
    t.readNext = x.readNext || [];
  });
})();
