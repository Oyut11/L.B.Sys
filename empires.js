/* empires.js — The Machinery of Empire.
   Eight colonial systems, ordered chronologically by founding.
   Figures are widely-cited historical estimates; ranges are given where scholarship varies.
   Each entry carries the dossier fields requested: who, why, how it happened,
   the mechanism, the human toll, and how & why it ended. */
window.LB_EMPIRES = [
  {
    id: "portuguese",
    name: "The Portuguese Empire",
    era: "1415 – 1999",
    startY: 1415, endY: 1999,
    accent: "#C8941C",
    indictment: "The first to industrialise the ocean — and the first to make a business of human beings.",
    architects: "Prince Henry \u201cthe Navigator,\u201d King Manuel I and the merchant-captains of the Casa da \u00cdndia; later the Marquis of Pombal.",
    why: "To outflank Muslim-controlled trade routes to the gold and spices of Africa and Asia \u2014 and, finding people easier to sell than pepper, to corner the trade in enslaved Africans.",
    how: "Caravels probed ever further down the African coast from 1415, planting fortified trading posts (feitorias) rather than settling land, then seizing Indian Ocean choke points by naval force. Brazil, claimed in 1500, was turned into a vast plantation economy.",
    mechanism: "A seaborne web of fortresses and monopoly trade, powered by the Atlantic slave trade. Portugal trafficked more enslaved Africans than any other power, feeding the sugar and later coffee plantations of Brazil.",
    toll: "Of the roughly 12.5 million Africans shipped across the Atlantic, Portuguese and Brazilian ships carried nearly half; around two million died in the Middle Passage alone. Brazil was the last country in the Americas to abolish slavery, in 1888.",
    ending: "The empire outlived all rivals on paper but lost Brazil in 1822 and fought brutal wars to hold Angola, Mozambique and Guinea-Bissau into the 1970s. Portugal's own Carnation Revolution of 1974 dismantled it; the handover of Macau in 1999 closed the book on the first European empire and the last."
  },
  {
    id: "spanish",
    name: "The Spanish Empire",
    era: "1492 – 1898",
    startY: 1492, endY: 1898,
    accent: "#A01B23",
    indictment: "It melted a hemisphere's silver into Europe's wealth \u2014 over the largest demographic catastrophe in recorded history.",
    architects: "The Catholic Monarchs Ferdinand and Isabella, then the Habsburg and Bourbon crowns; the conquistadors Cort\u00e9s and Pizarro as their blade.",
    why: "Gold, silver and souls \u2014 extraction for the crown and conversion for the Church, the two justified as a single mission.",
    how: "Armed expeditions exploited local rivalries, steel and gunpowder, and above all imported epidemic disease to topple the Aztec state (1521) and the Inca (1533), then imposed the encomienda, which handed conquered peoples to colonists as forced labour.",
    mechanism: "A tribute-and-mining economy centred on the silver mountain of Potos\u00ed, worked through the mita forced-labour draft. Treasure fleets carried the bullion to Seville, financing Europe's wars and igniting a century of inflation.",
    toll: "Disease, war and forced labour killed an estimated 90% of the pre-contact population of the Americas \u2014 tens of millions of people \u2014 within roughly a century and a half. Potos\u00ed is still remembered as \u201cthe mountain that eats men.\u201d",
    ending: "The Latin American wars of independence (1808\u20131833) tore away the mainland. The empire ended in 1898 when the United States seized Cuba, Puerto Rico and the Philippines \u2014 one rising empire inheriting the wreckage of an old one."
  },
  {
    id: "dutch",
    name: "The Dutch Empire",
    era: "1602 – 1949",
    startY: 1602, endY: 1949,
    accent: "#B4471F",
    indictment: "The world's first corporation handed an army \u2014 and a licence to wage war for dividends.",
    architects: "The Dutch East India Company (VOC) and West India Company, chartered by the States-General; governors-general such as Jan Pieterszoon Coen.",
    why: "Profit, pure and incorporated: to monopolise the spice trade of the East Indies and the sugar and enslaved people of the Atlantic.",
    how: "The VOC \u2014 empowered to make treaties, wage war and execute prisoners \u2014 took the spice islands by force. In 1621 Coen depopulated the Banda Islands, killing or enslaving almost their entire population to monopolise nutmeg.",
    mechanism: "Monopoly trade enforced by naval violence, and later the 19th-century Cultivation System on Java, which compelled peasants to grow export crops for the Netherlands in place of their own food.",
    toll: "The Banda genocide, recurring famines under forced cultivation that killed hundreds of thousands, a Cape and Atlantic slave trade, and a long war in Aceh that cost tens of thousands of lives.",
    ending: "Japan's wartime occupation shattered Dutch authority. Indonesia declared independence in 1945 and won it in 1949 after a savage four-year colonial war the Netherlands has only recently begun to acknowledge as such."
  },
  {
    id: "british",
    name: "The British Empire",
    era: "1600 – 1997",
    startY: 1600, endY: 1997,
    accent: "#1D3FAE",
    indictment: "The largest empire in history \u2014 and the most efficient at turning other people's hunger into its own wealth.",
    architects: "The East India Company, then the Crown directly after 1858; Victoria as \u201cEmpress of India,\u201d and administrators from Robert Clive to Cecil Rhodes.",
    why: "Markets, raw materials and strategic dominance \u2014 wrapped in a self-appointed \u201ccivilising mission\u201d that doubled as a balance sheet.",
    how: "Chartered companies won territory by trade, debt and war \u2014 the East India Company conquered the subcontinent piece by piece \u2014 while settler colonies displaced indigenous peoples across the Americas, Australia and southern Africa.",
    mechanism: "The deindustrialisation of colonies and their forced integration into a London-run world market; a steady \u201cdrain\u201d of wealth through taxation and rigged trade \u2014 estimated by Utsa Patnaik at roughly $45 trillion from India alone.",
    toll: "Policy-made famines killed tens of millions \u2014 the late-Victorian famines and the 1943 Bengal famine (around three million) among them. Partition in 1947 displaced some 15 million and killed up to two million; concentration camps appeared in the Boer War and in 1950s Kenya.",
    ending: "Bankrupted by two world wars and confronted by mass independence movements, Britain withdrew across two decades after India's independence in 1947. The return of Hong Kong in 1997 marked the formal end."
  },
  {
    id: "french",
    name: "The French Empire",
    era: "1605 – 1962",
    startY: 1605, endY: 1962,
    accent: "#234C8A",
    indictment: "It wrote the Rights of Man \u2014 then denied them, by force, to everyone it ruled.",
    architects: "The Bourbon monarchy and successive French Republics; Colbert's mercantilism, Napoleon III, and the generals of the colonial army.",
    why: "Wealth, prestige and a \u201cmission civilisatrice\u201d that claimed to export the Enlightenment while extracting sugar, rubber and labour.",
    how: "Plantation colonies in the Caribbean \u2014 Saint-Domingue was the richest colony on earth, built on enslaved labour \u2014 and conquest across West and North Africa and Indochina, held by military rule and settler implantation in Algeria.",
    mechanism: "Slave-based plantations, then forced labour under the indig\u00e9nat code, cash-crop extraction, and an \u201cassimilation\u201d that demanded the colonized abandon themselves to be granted even partial rights.",
    toll: "The Haitian Revolution (1791\u20131804) overthrew French rule at a cost of perhaps 200,000 lives. The Algerian War of Independence (1954\u201362) killed hundreds of thousands; the massacres at S\u00e9tif (1945) and in Madagascar (1947) ran into the tens of thousands.",
    ending: "Defeat at Dien Bien Phu in 1954 and the Algerian war broke the empire. Most African colonies became independent in 1960 \u2014 though France kept economic strings, such as the CFA franc, firmly attached."
  },
  {
    id: "german",
    name: "The German Empire",
    era: "1884 – 1919",
    startY: 1884, endY: 1919,
    accent: "#5A6670",
    indictment: "A latecomer that compressed empire into a single, rehearsal-like genocide.",
    architects: "Bismarck's Reich and Kaiser Wilhelm II; commanders such as Lothar von Trotha in South-West Africa.",
    why: "A \u201cplace in the sun\u201d \u2014 prestige and raw materials to rival Britain and France, seized at the 1884 Berlin Conference that carved up Africa on a map.",
    how: "Germany took South-West Africa (Namibia), East Africa, Cameroon, Togo and Pacific territories. When the Herero and Nama peoples rose in revolt in 1904, von Trotha issued an explicit extermination order.",
    mechanism: "Settler land seizure and forced labour, enforced by extermination and the concentration camp \u2014 including Shark Island, where prisoners were worked and starved to death and skulls were shipped to Berlin for \u201crace science.\u201d",
    toll: "An estimated 65,000\u201380,000 Herero (up to 80% of the people) and roughly half the Nama were killed in 1904\u201308 \u2014 widely regarded as the twentieth century's first genocide, and, Sven Lindqvist argued, a direct rehearsal for what Europe would later do to itself.",
    ending: "Germany lost all its colonies after defeat in the First World War. The territories were redistributed to the victors as League of Nations \u201cmandates\u201d \u2014 empire reassigned, not abolished."
  },
  {
    id: "belgian",
    name: "Leopold's Congo",
    era: "1885 – 1960",
    startY: 1885, endY: 1960,
    accent: "#0E5C50",
    indictment: "A territory the size of Western Europe, owned privately by one king, run as a single machine for extermination and profit.",
    architects: "King Leopold II of Belgium, who held the \u201cCongo Free State\u201d as personal property until 1908, after which the Belgian state took over.",
    why: "Rubber and ivory \u2014 Leopold's personal enrichment, disguised as a humanitarian and anti-slavery mission to disarm the world's diplomats.",
    how: "Leopold won international recognition of his private claim at the Berlin Conference of 1884\u201385, then imposed rubber quotas enforced by a private army, the Force Publique.",
    mechanism: "Terror as administration: villages were held to impossible rubber quotas, hostages were taken, and soldiers were made to deliver severed hands as proof they had not \u201cwasted\u201d their bullets \u2014 the system Adam Hochschild reconstructed in King Leopold's Ghost.",
    toll: "Estimates hold that the population fell by around ten million between 1885 and 1908 through murder, starvation, exhaustion and disease \u2014 among the deadliest episodes of colonial rule anywhere.",
    ending: "International outcry forced Leopold to surrender the colony to Belgium in 1908. It became independent in 1960 \u2014 after which the elected leader Patrice Lumumba was assassinated, with Belgian and US complicity, within months."
  },
  {
    id: "american",
    name: "The American Empire",
    era: "1607 – present",
    startY: 1607, endY: 2025, ongoing: true,
    accent: "#8A1A1A",
    indictment: "An empire that insisted it was not one \u2014 first across a continent, then across the world.",
    architects: "Successive presidents and Congresses; the doctrine of \u201cManifest Destiny\u201d; later the corporations, the intelligence agencies, and a global network of military bases.",
    why: "Land first, then markets and strategic dominance \u2014 \u201cManifest Destiny\u201d at home, the \u201cOpen Door\u201d and anti-communism abroad.",
    how: "Continental conquest displaced and killed Native nations through war, broken treaties and forced removal. 1898 brought overseas empire in the Philippines, Cuba and Puerto Rico; the Cold War added coups, client dictators and interventions across three continents.",
    mechanism: "Settler colonialism and treaty fraud at home; abroad, a neocolonial order of military bases, dollar dominance, debt and proxy regimes rather than formal colonies \u2014 the system Chomsky, Zinn and Galeano spent their lives dissecting.",
    toll: "The Indigenous population of North America fell by millions through disease, war and removal. The Philippine-American War killed an estimated 200,000 or more Filipinos; later interventions, from Vietnam to Central America, cost millions of lives.",
    ending: "Formal colonies were mostly relinquished, but the system Davis, Mbembe and Zinn describe \u2014 global basing, sanctions, and the carceral state at home \u2014 has not ended. This record stays open."
  }
];
