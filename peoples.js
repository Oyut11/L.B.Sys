/* peoples.js — "Tracing Back" data: colonized nations and native peoples.
   Ordered by when colonization / domination began. Each people carries four
   loss-domains — Culture, Knowledge, Language, Territory — each read as:
     why   : the reason it was done
     how   : the mechanism
     result: the consequence
     now   : how it persists in modern time
   `records` links to the thinkers in this library who bear on that people's story.
   Content is concise and drawn from widely-documented history; figures are given as
   estimates, and the politically live cases are written soberly and even-handedly. */
window.LB_PEOPLES = [
  {
    id: "brazil",
    name: "Indigenous Brazil",
    region: "South America",
    colonizer: "Portugal & the Brazilian state",
    era: "1500 – present", ongoing: true,
    accent: "#2E7D32",
    summary: "Hundreds of nations in the world's largest forest, pushed toward the vanishing point by sugar, rubber, and now soy.",
    losses: {
      culture: {
        why: "To clear the land of the peoples who held it, and to remake the survivors as Christian labourers.",
        how: "Jesuit missions gathered and converted; later a state \u201cIndian Service\u201d oversaw decades of abuse; rituals and identities were suppressed throughout.",
        result: "From an estimated several million at contact, the Indigenous population fell to a fraction, and whole peoples vanished entirely.",
        now: "Constitutional rights since 1988 and a new Ministry of Indigenous Peoples (2023) stand against continued invasions of demarcated land."
      },
      knowledge: {
        why: "Forest knowledge was dismissed as savagery even as it was quietly mined for its plants and methods.",
        how: "Oral pharmacology and forest management were ignored in law while bioprospectors catalogued the same plants for patent.",
        result: "Immense ecological knowledge was lost with each language and elder, even as the forest's value was extracted.",
        now: "Biopiracy disputes continue, alongside a belated recognition that Indigenous-managed land is the best-protected in the Amazon."
      },
      language: {
        why: "A single Portuguese-speaking nation had no room for hundreds of tongues.",
        how: "Missions imposed a \u201cgeneral language\u201d and then Portuguese; schooling and the state operated only in Portuguese.",
        result: "Of an estimated 1,000-plus languages at contact, only around 150\u2013180 survive, many with very few speakers.",
        now: "Bilingual Indigenous schooling exists on paper, but most surviving languages remain endangered."
      },
      territory: {
        why: "Brazilwood, then sugar, gold, rubber, cattle and soy \u2014 the frontier always wanted more land.",
        how: "Enslavement, disease, rubber-boom atrocities, dictatorship-era road-building, and the endless invasions of ranchers and miners.",
        result: "Peoples were confined to demarcated territories under constant pressure; some, like the Yanomami, were devastated by illegal gold mining.",
        now: "A 2023 humanitarian emergency was declared over gold-mining invasions of Yanomami land."
      }
    },
    records: ["galeano", "zinn", "mbembe"]
  },
  {
    id: "maya",
    name: "The Maya",
    region: "Mesoamerica",
    colonizer: "Spain",
    era: "1524 – present", ongoing: true,
    accent: "#6E2A86",
    summary: "A literate civilisation of city-states whose books were burned \u2014 and whose descendants faced genocide within living memory.",
    losses: {
      culture: {
        why: "To erase a sophisticated religion and replace it with Catholic Spain.",
        how: "Friars such as Diego de Landa burned the Maya codices at Man\u00ed in 1562; temples were dismantled and churches built upon them.",
        result: "Almost the entire written corpus of a literate civilisation was destroyed \u2014 only four codices are known to survive.",
        now: "Maya identity endures across Guatemala and Mexico, and revitalisation reclaims the calendar, weaving and ceremony."
      },
      knowledge: {
        why: "Maya astronomy, mathematics and writing contradicted the claim that Spain had brought civilisation.",
        how: "The hieroglyphic script was suppressed and the literate class destroyed, so the ability to read it was nearly lost for centuries.",
        result: "A people who had calculated the solar year and used the concept of zero were recast as primitive.",
        now: "The script was only fully deciphered late in the 20th century, restoring Maya history in the Maya's own words."
      },
      language: {
        why: "Spanish was imposed as the language of church, crown and commerce.",
        how: "Doctrine in Spanish, then centuries of Spanish-only schooling and stigma against speaking Maya languages.",
        result: "Roughly thirty Maya languages survive, long marginalised and discriminated against.",
        now: "Guatemala now recognises Maya languages, yet their speakers still face discrimination; revitalisation is active."
      },
      territory: {
        why: "Land and labour for encomiendas, then plantations of indigo, coffee and sugar.",
        how: "The encomienda and repartimiento forced-labour systems, and a 19th-century coffee economy that seized communal land.",
        result: "The Maya were pushed onto marginal highlands; the 1847 Caste War in Yucat\u00e1n was a direct revolt against dispossession.",
        now: "During Guatemala's civil war the state killed some 200,000 people \u2014 overwhelmingly Maya \u2014 in acts a UN-backed commission called genocide."
      }
    },
    records: ["galeano", "trouillot", "zinn"]
  },
  {
    id: "ireland",
    name: "Ireland",
    region: "Western Europe",
    colonizer: "England & Britain",
    era: "1556 – 1922",
    accent: "#157A52",
    summary: "Among Europe's oldest colonies \u2014 close enough to be ruled directly, and starved within sight of full granaries.",
    losses: {
      culture: {
        why: "To pacify a Catholic, Gaelic society and bind it to a Protestant English order.",
        how: "Plantations settled English and Scottish colonists on confiscated land, and the Penal Laws barred Catholics from office, land and education.",
        result: "The Gaelic aristocracy was destroyed, the Catholic majority dispossessed, and Irish identity long stigmatised.",
        now: "Cultural revival from the Gaelic League onward; the legacy of partition still shapes Northern Ireland."
      },
      knowledge: {
        why: "To replace the Gaelic learned orders with an English administrative and religious order.",
        how: "The bardic schools and the Gaelic legal (Brehon) tradition were dismantled, and learning was tied to conformity and English.",
        result: "A centuries-old native scholarly culture was broken and its language of learning displaced.",
        now: "Irish institutions have recovered much of this heritage \u2014 but largely in English."
      },
      language: {
        why: "English was the language of law, advancement and survival; Irish marked the poor and the suspect.",
        how: "The \u201ctally stick\u201d (bata sc\u00f3ir) punished children for speaking Irish in the National Schools set up from 1831.",
        result: "Irish fell from the majority language to a small minority within a century, hastened by famine and emigration.",
        now: "Irish is an official EU language and compulsory in schools, yet daily speakers remain a small minority."
      },
      territory: {
        why: "Land for English and Scottish settlers, and an agricultural economy serving Britain.",
        how: "Confiscations and plantations, absentee landlords, and an export economy that shipped food out even during famine.",
        result: "The Great Famine (1845\u201352) killed about a million and drove a million more to emigrate \u2014 while grain was exported under guard.",
        now: "Partition in 1921 left a contested border, and the Famine remains central to Irish and diaspora memory."
      }
    },
    records: ["zinn", "davis-mike", "galeano"]
  },
  {
    id: "indonesia",
    name: "Indonesia",
    region: "Southeast Asia",
    colonizer: "the Netherlands",
    era: "1602 – 1949",
    accent: "#C36A1A",
    summary: "An archipelago run first by a corporation, then a crown \u2014 squeezed by a system that grew Europe's profit on Java's hunger.",
    losses: {
      culture: {
        why: "To manage a vast, diverse archipelago for extraction with as few Dutch as possible.",
        how: "Indirect rule through co-opted local aristocracies (the priyayi), beneath a strict colonial racial hierarchy.",
        result: "A society organised around a colonial racial order, its elites bound to Dutch authority.",
        now: "Indonesia forged a unifying national identity in response; its reckoning with the colonial era continues with the Netherlands."
      },
      knowledge: {
        why: "Education was rationed to produce clerks, not a self-governing class.",
        how: "Western schooling reached only a tiny elite, and only late in colonial rule; most were left without it.",
        result: "Low literacy at independence and a knowledge order centred on Dutch interests.",
        now: "Post-independence Indonesia built mass education in a national language it chose for itself."
      },
      language: {
        why: "Dutch was reserved for the rulers, but a lingua franca was needed to administer hundreds of languages.",
        how: "Dutch was largely withheld from the colonised, while Malay served as the administrative lingua franca.",
        result: "At independence, nationalists adopted Malay as Bahasa Indonesia \u2014 turning a colonial tool into a unifier.",
        now: "Bahasa Indonesia binds the nation, though hundreds of regional languages remain under pressure."
      },
      territory: {
        why: "Spices first, then sugar, coffee and indigo for the European market.",
        how: "The VOC's monopoly violence \u2014 the 1621 Banda genocide \u2014 then the 19th-century Cultivation System forcing export crops on Javanese peasants.",
        result: "Famines under forced cultivation killed hundreds of thousands while profits flowed to the Netherlands.",
        now: "The Netherlands has begun, recently and partially, to acknowledge the violence of its 1945\u201349 colonial war."
      }
    },
    records: ["rodney", "galeano", "mbembe"]
  },
  {
    id: "native-na",
    name: "Native North America",
    region: "North America",
    colonizer: "Britain & the United States",
    era: "1607 – present", ongoing: true,
    accent: "#B4471F",
    summary: "Hundreds of distinct nations, met by settlers who wanted the land empty \u2014 and set about making it so.",
    losses: {
      culture: {
        why: "Settler society needed Native peoples to disappear \u2014 culturally if not physically \u2014 to legitimise taking a continent.",
        how: "Boarding schools run on the creed \u201ckill the Indian, save the man\u201d took children from their families; ceremonies like the Sun Dance and the Potlatch were outlawed for decades.",
        result: "The transmission of language, ceremony and kinship was severed across generations \u2014 a wound Native communities are still working to heal.",
        now: "Unmarked graves at former boarding schools are still being found across the US and Canada; repatriation under NAGPRA and cultural revival continue."
      },
      knowledge: {
        why: "To replace Indigenous systems of land, medicine and governance with settler ones that justified the taking.",
        how: "Indigenous land management, agriculture and medicine were dismissed as primitive; oral knowledge was excluded from the written record entirely.",
        result: "Centuries of ecological and medical knowledge were ignored, lost, or appropriated without credit.",
        now: "\u201cTraditional ecological knowledge\u201d is now being sought out for wildfire and land management, a belated recognition of what was dismissed."
      },
      language: {
        why: "Language carried nationhood and memory; erasing it made assimilation far easier.",
        how: "Children were beaten for speaking their languages in boarding schools, where English was enforced as the only permitted tongue.",
        result: "Of hundreds of Indigenous languages, many are now extinct or down to a handful of elderly speakers.",
        now: "Immersion schools and elder-apprentice programmes race to revive languages before the last fluent speakers are gone."
      },
      territory: {
        why: "The land itself was the prize \u2014 farmland, gold, timber, and the routes west.",
        how: "The Doctrine of Discovery, treaties signed and broken, forced removals like the Trail of Tears, and confinement to reservations.",
        result: "Nations were reduced to fragments of their territory, often confined to the least valuable ground.",
        now: "Land Back movements, Standing Rock, and unresolved legal battles over treaty rights and sacred sites continue today."
      }
    },
    records: ["zinn", "davis-angela", "galeano"]
  },
  {
    id: "haiti",
    name: "Haiti",
    region: "Caribbean",
    colonizer: "France",
    era: "1697 – 1804",
    accent: "#A01B23",
    summary: "The colony that produced France's greatest wealth \u2014 and then made the only successful slave revolution in history.",
    losses: {
      culture: {
        why: "To erase African identity among the enslaved and enforce a brutal racial caste order.",
        how: "African religions were suppressed and Vodou driven underground; languages were mixed and broken, and families deliberately split apart on the plantations.",
        result: "A new culture was forged in resistance \u2014 Vodou and Krey\u00f2l became the very instruments of revolution.",
        now: "Vodou and Krey\u00f2l remain central to Haitian identity, long stigmatised abroad and only recently given full official respect."
      },
      knowledge: {
        why: "Enslaved people were kept from literacy to keep them controllable.",
        how: "Teaching the enslaved to read was forbidden; all knowledge was confined to the labour of the plantation.",
        result: "Mass illiteracy was inherited at independence, with no colonial investment in Haitian education to build on.",
        now: "Haiti's schooling is still starved \u2014 by colonial neglect first, then by the century-long debt France extracted from it."
      },
      language: {
        why: "French marked the free and the powerful; the enslaved majority were left to forge their own tongue.",
        how: "French was the language of law and authority; Krey\u00f2l, the language of the people, was dismissed as merely broken French.",
        result: "A lasting divide opened between a small Francophone elite and the Krey\u00f2l-speaking majority.",
        now: "Krey\u00f2l became co-official only in 1987; the language line still tracks class and power in Haiti."
      },
      territory: {
        why: "Saint-Domingue's sugar and coffee made it the richest colony on earth \u2014 wealth worth a revolution to keep.",
        how: "Plantation monoculture worked by enslaved Africans; after independence, France demanded a crushing \u201cindemnity\u201d for its lost human \u201cproperty.\u201d",
        result: "Haiti paid France the equivalent of billions for its own freedom \u2014 a debt that strangled the new nation for over a century.",
        now: "That indemnity is now widely recognised as a root of Haiti's poverty, and calls for France to repay it are growing louder."
      }
    },
    records: ["james", "trouillot", "cesaire"]
  },
  {
    id: "greenland",
    name: "Greenland",
    region: "The Arctic",
    colonizer: "Denmark",
    era: "1721 – present", ongoing: true,
    accent: "#3A6E8F",
    summary: "An Inuit homeland \u201cmodernised\u201d by Denmark \u2014 sometimes through experiments performed on its own children.",
    losses: {
      culture: {
        why: "To convert and then \u201cDanicise\u201d the Kalaallit into modern Danish subjects.",
        how: "Lutheran missions from 1721, then a 1950s\u201360s modernisation that relocated families and sent children to Denmark to be remade as Danes.",
        result: "Communities were uprooted, families split, and a generation estranged from its own culture and language.",
        now: "Revelations that Danish authorities fitted thousands of Inuit women and girls with contraceptive coils \u2014 often without consent, into the 1970s \u2014 prompted an official investigation in 2022."
      },
      knowledge: {
        why: "Inuit hunting and survival knowledge was treated as obsolete beside Danish modernity.",
        how: "Centralisation emptied small settlements whose knowledge was bound to specific land and ice.",
        result: "Place-based hunting and ecological knowledge eroded as people were concentrated into towns.",
        now: "Climate change makes that lost ice-knowledge newly precious \u2014 even as the ice itself disappears."
      },
      language: {
        why: "Danish was the language of administration, schooling and advancement.",
        how: "Danish-medium schooling and study in Denmark sidelined Kalaallisut in official life.",
        result: "A generation was schooled in Danish, though Kalaallisut remained widely spoken at home.",
        now: "Kalaallisut became the sole official language in 2009, as Greenland moves toward possible independence."
      },
      territory: {
        why: "A strategic Arctic territory and, increasingly, a storehouse of minerals and fish.",
        how: "A colonial trade monopoly, then forced relocations \u2014 including the 1953 removal of the Inughuit for a US air base at Thule.",
        result: "Communities were displaced for trade and Cold War strategy, with little say over their own land.",
        now: "Self-rule since 2009 controls mineral rights, and Greenland's resources draw great-power attention once again."
      }
    },
    records: ["zinn", "mbembe", "galeano"]
  },
  {
    id: "alaska",
    name: "Alaska Natives",
    region: "The Arctic",
    colonizer: "Russia & the United States",
    era: "1741 – present", ongoing: true,
    accent: "#1C6E7A",
    summary: "Sold between two empires in 1867 \u2014 its peoples never consulted, then schooled out of their own languages.",
    losses: {
      culture: {
        why: "Two successive empires treated Alaska Natives as obstacles to fur, gold and land.",
        how: "Russian fur companies coerced Unangax\u0302 (Aleut) hunters; later US mission and government boarding schools punished Native culture.",
        result: "Population collapse among the Unangax\u0302 under Russian rule, then cultural suppression under American schooling.",
        now: "Cultural and language revival is under way; the WWII internment of the Unangax\u0302 in camps was only belatedly acknowledged."
      },
      knowledge: {
        why: "Native subsistence and navigation knowledge was dismissed by both empires.",
        how: "Commercial hunting and fishing, and boarding-school removal, disrupted the subsistence cycles that knowledge depended on.",
        result: "Intergenerational knowledge of sea, ice and land was broken as economies were reorganised.",
        now: "Subsistence rights and traditional knowledge are now contested in law and in climate policy."
      },
      language: {
        why: "Russian and then English were the languages of church, trade and school.",
        how: "English-only boarding schools punished children for speaking their languages well into the 20th century.",
        result: "Alaska's twenty Native languages were pushed toward the brink, many now with few speakers.",
        now: "In 2014 Alaska made its twenty Native languages official; revitalisation races the loss of elders."
      },
      territory: {
        why: "Sea-otter fur first, then gold, fish and oil.",
        how: "Russia claimed it by conquest; the US bought it in 1867 without consulting its peoples; the 1971 ANCSA settlement extinguished aboriginal title in exchange for land and cash held by corporations.",
        result: "Native land claims were converted into corporate shares \u2014 a unique and contested settlement.",
        now: "Alaska Native corporations are now major landowners, even as oil, fishing and climate change reshape the land."
      }
    },
    records: ["zinn", "davis-angela", "galeano"]
  },
  {
    id: "india",
    name: "India",
    region: "South Asia",
    colonizer: "Britain",
    era: "1757 – 1947",
    accent: "#1A5276",
    summary: "A civilisation recast as a set of superstitions in need of supervision \u2014 and drained of an estimated $45 trillion.",
    losses: {
      culture: {
        why: "To portray a civilisation as backward enough to require British rule \u2014 and to justify the rule that supervision demanded.",
        how: "English-medium education (Macaulay aimed to form \u201ca class Indian in blood but English in taste\u201d), the elevation of British manners, and the looting of treasures like the Koh-i-Noor.",
        result: "A Westernised elite estranged from its own traditions, and a durable sense that Indian forms were inferior to European ones.",
        now: "The Koh-i-Noor and thousands of artefacts remain in British collections amid mounting restitution demands."
      },
      knowledge: {
        why: "To make British science and administration the only road to modernity, rendering Indian expertise dispensable.",
        how: "Indigenous medicine, metallurgy and textile knowledge were sidelined, and India's world-leading handloom and steel sectors were undercut to favour British industry.",
        result: "Deindustrialisation: India's share of world manufacturing collapsed over the colonial period.",
        now: "India built a \u201cTraditional Knowledge Digital Library\u201d specifically to stop foreign patents on neem, turmeric and other heritage knowledge."
      },
      language: {
        why: "To create an English-literate administrative class that would bind the subcontinent to British rule.",
        how: "English became the language of law, higher administration and advancement, while the vast majority were shut out of it.",
        result: "English remains a gatekeeper of class and opportunity, a hierarchy of language mapped onto privilege.",
        now: "English fluency is still a powerful marker of class and access, and language policy remains politically charged."
      },
      territory: {
        why: "To extract land revenue and cash crops and secure strategic control of the subcontinent.",
        how: "Revenue settlements that bankrupted peasants, forced cultivation of indigo and opium, and finally a 1947 Partition line drawn in weeks by a British lawyer.",
        result: "Partition displaced some 15 million people and killed up to two million; the borders still fuel war.",
        now: "The India\u2013Pakistan conflict and the militarised dispute over Kashmir trace directly to the Partition lines of 1947."
      }
    },
    records: ["patnaik", "davis-mike", "rodney"]
  },
  {
    id: "circassians",
    name: "The Circassians",
    region: "The Caucasus",
    colonizer: "the Russian Empire",
    era: "1763 – 1864",
    accent: "#6E1E2E",
    summary: "A Caucasus people expelled almost entirely from their homeland \u2014 one of the nineteenth century's great forgotten catastrophes.",
    losses: {
      culture: {
        why: "Russia wanted the northwest Caucasus cleared and Russified for security and settlement.",
        how: "After a century-long war, the 1860s brought mass expulsion: most surviving Circassians were driven across the sea to the Ottoman Empire.",
        result: "An estimated 90% of Circassians were killed or expelled; the homeland was emptied and resettled by others.",
        now: "A global Circassian diaspora seeks recognition of the 1864 expulsion as genocide; Russia has not acknowledged it."
      },
      knowledge: {
        why: "A scattered people could not sustain knowledge bound to a homeland they no longer held.",
        how: "Expulsion and dispersal across Ottoman lands broke the link between people, land and tradition.",
        result: "Traditional social and ecological knowledge fragmented across a far-flung diaspora.",
        now: "Diaspora institutions work to document and preserve what survived the scattering."
      },
      language: {
        why: "Dispersal into many host states left the language with no territory to sustain it.",
        how: "Scattered among Turkey, the Levant and beyond, Circassian (Adyghe and Kabardian) lost its everyday domains.",
        result: "UNESCO lists the Circassian languages as vulnerable or endangered across the diaspora.",
        now: "Homeland and diaspora communities run schools and media to keep the language alive."
      },
      territory: {
        why: "The fertile Black Sea coast was wanted for Russian and Cossack settlement.",
        how: "Scorched-earth war, the destruction of villages, and forced embarkation on overcrowded ships where many died.",
        result: "The Circassian homeland was almost wholly depopulated and resettled.",
        now: "Most Circassians still live outside their homeland; the 2014 Sochi Olympics, staged on expulsion sites, drew protest."
      }
    },
    records: ["lindqvist", "mamdani", "trouillot"]
  },
  {
    id: "aboriginal-australia",
    name: "Aboriginal Australia",
    region: "Oceania",
    colonizer: "Britain",
    era: "1788 – present", ongoing: true,
    accent: "#9C3D1E",
    summary: "The world's oldest continuous cultures, met by a colony that declared their land legally empty.",
    losses: {
      culture: {
        why: "The doctrine of terra nullius required treating Aboriginal society as no society at all.",
        how: "The Stolen Generations removed children of mixed descent from their families; ceremony and kinship were suppressed by missions and the state.",
        result: "Deep intergenerational trauma and the loss of cultural transmission across much of the continent.",
        now: "The 2008 national apology to the Stolen Generations, and ongoing truth-telling and treaty processes such as Victoria's Yoorrook Commission."
      },
      knowledge: {
        why: "To deny that 65,000 years of occupation amounted to knowledge of, or ownership of, the land.",
        how: "Aboriginal fire management, astronomy and ecology were ignored as primitive, and sacred sites were destroyed for mining and grazing.",
        result: "Catastrophic ecological mismanagement and the loss of an immense, irreplaceable body of land knowledge.",
        now: "\u201cCultural burning\u201d is being readopted against bushfires; the 2020 destruction of the 46,000-year-old Juukan Gorge caves drew global outrage."
      },
      language: {
        why: "English-only assimilation was official policy for much of the colonial era.",
        how: "Children were punished for speaking their languages, missions enforced English, and communities were deliberately dispersed.",
        result: "Of more than 250 languages at contact, only a few dozen remain strong; most are now sleeping or lost.",
        now: "Language-revival programmes \u2014 and the first university courses dedicated to waking \u201csleeping\u201d languages \u2014 are under way."
      },
      territory: {
        why: "Land for pastoralism, farming and mining, taken without treaty or payment.",
        how: "Terra nullius declared the land unowned; frontier massacres and forced removal to missions and reserves cleared it.",
        result: "Dispossession from almost all traditional land, a wrong not overturned in law until the 1992 Mabo decision.",
        now: "Native Title claims and Land Back continue; the 2023 defeat of the Voice referendum showed how unresolved it all remains."
      }
    },
    records: ["lindqvist", "mamdani", "mbembe"]
  },
  {
    id: "algeria",
    name: "Algeria",
    region: "North Africa",
    colonizer: "France",
    era: "1830 – 1962",
    accent: "#D6202B",
    summary: "Ruled not as a colony but as part of France itself \u2014 and freed only through one of the century's bloodiest wars.",
    losses: {
      culture: {
        why: "To remake Algeria as an extension of France and subordinate Arab-Berber and Islamic culture to French civilisation.",
        how: "Settler colonialism (the pieds-noirs), seizure of religious endowments, the marginalising of Islamic institutions, and the cultural assault Fanon documented clinically.",
        result: "A profound psychic wound \u2014 the colonised taught to despise themselves \u2014 which Fanon turned into a theory of liberation.",
        now: "France and Algeria still wrestle with colonial memory; only recently has France admitted to crimes such as the systematic torture of the war."
      },
      knowledge: {
        why: "To present French schooling and law as civilisation arriving in a backward land.",
        how: "Quranic schools and Arabic literacy were undermined, while French education was extended to only a tiny minority.",
        result: "Mass illiteracy at independence and a knowledge system reorganised entirely around France.",
        now: "Algeria's post-independence \u201cArabisation\u201d drives, and its continuing debates over French in schooling, are a direct legacy."
      },
      language: {
        why: "French was made the language of power, citizenship and advancement; Arabic and Tamazight were demoted.",
        how: "French was imposed in administration and schools, and Arabic was for a time treated as a foreign language in its own country.",
        result: "A lasting linguistic split between Francophone elites and Arabic- and Berber-speaking majorities.",
        now: "Language stays politically charged; the Amazigh (Berber) tongue won recognition as an official language only in 2016."
      },
      territory: {
        why: "Land for European settlers and the extraction of wheat, wine and, later, oil and gas.",
        how: "Mass expropriation of the best farmland for settlers, pushing Algerians onto marginal land, over more than a century of military conquest.",
        result: "The war of independence (1954\u201362) killed hundreds of thousands and left a colonial agrarian structure to dismantle.",
        now: "Algeria's hydrocarbon economy and its land questions still bear the colonial imprint, and the war's toll remains contested between the two states."
      }
    },
    records: ["fanon", "cesaire", "mbembe"]
  },
  {
    id: "ainu",
    name: "The Ainu",
    region: "Northern Japan",
    colonizer: "Japan",
    era: "1869 – present", ongoing: true,
    accent: "#7A4A1E",
    summary: "The Indigenous people of Japan's north, legally redefined as \u201cformer natives\u201d and assimilated almost to silence.",
    losses: {
      culture: {
        why: "A modernising Japan claimed Hokkaido and sought to absorb the Ainu into a single national identity.",
        how: "The 1899 \u201cFormer Natives Protection Act\u201d enforced assimilation; tattooing, bear ceremonies and other customs were discouraged or banned.",
        result: "Ainu culture was driven underground and stigmatised, and many concealed their identity for safety.",
        now: "Japan recognised the Ainu as Indigenous only in 2008 and 2019; the Upopoy national centre opened in 2020."
      },
      knowledge: {
        why: "Ainu hunting, fishing and forest knowledge was displaced by Japanese settlement and law.",
        how: "Salmon and deer hunting \u2014 the basis of Ainu life \u2014 was restricted, criminalising subsistence itself.",
        result: "The economic base of Ainu knowledge was cut away, forcing dependence and assimilation.",
        now: "The Ainu have won limited recognition of salmon-fishing rights through recent court cases."
      },
      language: {
        why: "A single national language left no official place for Ainu.",
        how: "Japanese-only schooling and social stigma drove Ainu out of daily use within a few generations.",
        result: "Ainu became one of the world's most endangered languages, with only a handful of native speakers.",
        now: "Revitalisation through radio, classes and the Upopoy centre tries to bring it back from the edge."
      },
      territory: {
        why: "Hokkaido's land was wanted for Japanese settlement, farming and resources.",
        how: "Hokkaido was annexed and renamed in 1869; Ainu land was redistributed to settlers, and the Ainu made tenants.",
        result: "The Ainu lost their land base and became a marginalised minority in their own homeland.",
        now: "Land and fishing-rights claims continue; recognition has brought acknowledgement but little restitution."
      }
    },
    records: ["mamdani", "mbembe", "lindqvist"]
  },
  {
    id: "herero-nama",
    name: "The Herero & Nama",
    region: "Southern Africa",
    colonizer: "Germany",
    era: "1884 – 1915",
    accent: "#5A6670",
    summary: "The peoples of German South-West Africa, subjected to what is widely called the twentieth century's first genocide.",
    losses: {
      culture: {
        why: "Settler colonialism required breaking Herero and Nama society to seize land and cattle.",
        how: "After the 1904 revolt, von Trotha's extermination order, mass killing, and concentration camps shattered both peoples.",
        result: "Social structures, leadership and cultural continuity were devastated alongside the killing.",
        now: "Germany acknowledged the genocide in 2021 and pledged aid, but Herero and Nama leaders reject the deal as inadequate."
      },
      knowledge: {
        why: "Colonial \u201crace science\u201d treated the colonised as specimens, not as knowers.",
        how: "Skulls of the dead were shipped to Germany for racial research, the prisoners' knowledge and lives alike discarded.",
        result: "A people were studied as objects of pseudoscience even as they were being destroyed.",
        now: "Germany has returned some skulls and remains; repatriation and research-ethics reckonings continue."
      },
      language: {
        why: "German was imposed as the colonial language over Khoekhoe and Otjiherero.",
        how: "Colonial administration and mission schooling operated in German, and later Afrikaans under South African rule.",
        result: "Indigenous languages survived, but under layered colonial pressure across successive rulers.",
        now: "Namibia chose English as a neutral official language at independence in 1990 to escape that layered legacy."
      },
      territory: {
        why: "Land and cattle for German settlers in a prized colony.",
        how: "Expropriation of grazing land, then the seizure of survivors' land and forced labour after the genocide.",
        result: "The Herero and Nama lost the bulk of their ancestral land, much of it still held by settler descendants.",
        now: "Land reform and restitution remain among Namibia's most charged unresolved issues."
      }
    },
    records: ["lindqvist", "hochschild", "mbembe"]
  },
  {
    id: "congo",
    name: "The Congo",
    region: "Central Africa",
    colonizer: "Belgium",
    era: "1885 – 1960",
    accent: "#0E5C50",
    summary: "A land the size of Western Europe, owned first by one king and run as a single machine for extraction.",
    losses: {
      culture: {
        why: "To break local authority and faith and replace them with Belgian and missionary control over a vast labour force.",
        how: "Catholic missions monopolised education and conversion; chiefs were co-opted or replaced, and ritual objects were shipped to European museums.",
        result: "Fractured social authority and a colonial church-state grip on Congolese cultural life.",
        now: "Belgium's Africa Museum at Tervuren faces restitution demands, and the reckoning with Leopold's statues and legacy is ongoing."
      },
      knowledge: {
        why: "To keep Congolese as labour, not as administrators or professionals who might one day rule themselves.",
        how: "Education was capped at primary and vocational levels; higher education was almost nonexistent until the very end of colonial rule.",
        result: "At independence in 1960, the Congo had only a handful of university graduates to run a country the size of Western Europe.",
        now: "That engineered shortage of trained leadership shadowed the post-independence collapse and still shapes the country's institutions."
      },
      language: {
        why: "French was set above local tongues to bind the elite to Belgium and run the administration.",
        how: "French was imposed for governance and advancement, while the country's many languages were confined to local life.",
        result: "French remains the official language of a country where it is a minority mother tongue.",
        now: "The state and schooling still run largely in a colonial language that most citizens do not speak at home."
      },
      territory: {
        why: "Rubber and ivory, then copper and uranium \u2014 extraction was the colony's entire reason for being.",
        how: "The land was declared state, then royal, property; rubber quotas were enforced by the Force Publique through hostage-taking and severed hands.",
        result: "A population collapse estimated at around ten million under Leopold, and an economy built solely to extract.",
        now: "The DRC's cobalt, coltan and copper are still extracted amid conflict and foreign control \u2014 extraction by other means."
      }
    },
    records: ["hochschild", "lindqvist", "rodney"]
  },
  {
    id: "kenya",
    name: "Kenya",
    region: "East Africa",
    colonizer: "Britain",
    era: "1895 – 1963",
    accent: "#C8941C",
    summary: "Fertile highlands seized for white settlers \u2014 and a liberation war answered with mass detention camps.",
    losses: {
      culture: {
        why: "To subordinate Gikuyu and coastal cultures to settler and missionary authority.",
        how: "Mission schooling, the suppression of customs, and a settler \u201cWhite Highlands\u201d that displaced whole communities \u2014 the rupture Ng\u0169g\u0129 dramatised.",
        result: "A generation schooled to see its own culture as backward; the cultural conflict at the centre of Kenyan literature.",
        now: "Mau Mau memory is still contested, and cultural and historical reckoning continues both at home and with Britain."
      },
      knowledge: {
        why: "To produce clerks and labourers, not leaders.",
        how: "African education was limited and mission-controlled, while indigenous law and medicine were pushed aside.",
        result: "A narrow educated class and a knowledge order tilted firmly toward Britain.",
        now: "Debates over curriculum and the rightful place of indigenous knowledge persist in Kenyan education."
      },
      language: {
        why: "English was the gate to advancement, binding the elite to Britain \u2014 Ng\u0169g\u0129's core target.",
        how: "English was the medium of school and state, and children were punished for speaking their mother tongues \u2014 the \u201clanguage stick\u201d passed to whoever slipped.",
        result: "An English-speaking elite estranged from the majority \u2014 until writers like Ng\u0169g\u0129 rebelled against it.",
        now: "Ng\u0169g\u0129's choice to write in Gikuyu, and the rise of Swahili, are direct answers to that imposition."
      },
      territory: {
        why: "The fertile highlands were wanted for white settlers and cash crops \u2014 coffee and tea.",
        how: "The best land was seized for settlers and Africans pushed onto reserves; the Mau Mau revolt was met with a vast system of detention camps.",
        result: "Tens of thousands were detained and tortured; in 2013 Britain finally compensated surviving victims of the camps.",
        now: "Land inequality inherited from the settler era remains a live, and at times violent, political issue in Kenya."
      }
    },
    records: ["ngugi", "mamdani", "rodney"]
  },
  {
    id: "inner-mongolia",
    name: "Inner Mongolia",
    region: "East Asia",
    colonizer: "China",
    era: "1947 – present", ongoing: true,
    accent: "#2E5AA8",
    summary: "A Mongol homeland inside China where settlement and schooling have made the Mongols a minority on their own steppe.",
    losses: {
      culture: {
        why: "National integration and security favoured the assimilation of the frontier into the Han majority.",
        how: "Massive Han in-migration since the mid-20th century made Mongols a small minority, while settlement policies curtailed nomadic life.",
        result: "Mongol pastoral culture has been steadily eroded as the steppe was farmed, fenced and mined.",
        now: "Mongol identity persists but under pressure, and its public expression is closely policed."
      },
      knowledge: {
        why: "Nomadic pastoral knowledge clashed with a sedentary, extractive model of development.",
        how: "Grassland enclosure and grazing bans, justified as anti-desertification, displaced herders from the land their knowledge depended on.",
        result: "Centuries of pastoral and ecological knowledge were sidelined as herders were settled.",
        now: "Herder protests over land and mining continue, and are frequently suppressed."
      },
      language: {
        why: "A unified national education favoured Mandarin as the language of advancement.",
        how: "A 2020 policy replaced Mongolian with Mandarin as the medium of instruction for key subjects, sparking rare mass protests.",
        result: "Mongolian's place in schooling was sharply reduced, alarming families about its survival.",
        now: "The language remains in use, but its educational future is contested and tightly controlled."
      },
      territory: {
        why: "The steppe held farmland, coal and rare-earth minerals vital to the national economy.",
        how: "State-led settlement, agriculture and mining turned grazing land into farms, mines and industry.",
        result: "Herders lost access to traditional pasture as the grassland and its way of life shrank.",
        now: "Inner Mongolia is now a mining and energy hub, and land disputes between herders and developers persist."
      }
    },
    records: ["mbembe", "mamdani", "chomsky"]
  },
  {
    id: "palestine",
    name: "Palestine",
    region: "The Levant",
    colonizer: "British Mandate, then Israel",
    era: "1948 – present", ongoing: true,
    accent: "#5E7A33",
    summary: "A people dispossessed in 1948 and still living the consequences \u2014 the case most invoked in the theory this library gathers.",
    losses: {
      culture: {
        why: "Competing national projects over one land left Palestinian society fractured and displaced.",
        how: "The 1948 war (the Nakba, or \u201ccatastrophe\u201d) saw around 700,000 Palestinians flee or be expelled, and hundreds of villages depopulated.",
        result: "A nation scattered into refugee camps and exile, its pre-1948 society largely erased from the landscape.",
        now: "Memory of the Nakba is central to Palestinian identity, and the right of return remains a core, unresolved demand."
      },
      knowledge: {
        why: "Dispossession and dispersal broke institutions and the continuity of place-based life.",
        how: "Displacement scattered communities, while archives and records of pre-1948 life were lost or seized.",
        result: "A society's institutional and documentary continuity was broken across borders and camps.",
        now: "Palestinian universities, archives and scholarship work to recover and document that record."
      },
      language: {
        why: "Arabic persisted, but exile and occupation reshaped the contexts in which it lived.",
        how: "Dispersal across many host states, and the dominance of other languages in exile, pressured Palestinian Arabic.",
        result: "Arabic endured strongly, but a people's linguistic life was fragmented across the diaspora.",
        now: "Arabic remains central, and Palestinian literature and media are a major vehicle of national memory."
      },
      territory: {
        why: "Land for a Jewish national home, contested with the Arab majority already living there.",
        how: "From 1948, displacement and land confiscation; after 1967, military occupation and settlement of the West Bank and Gaza.",
        result: "Palestinians hold a shrinking and fragmented territory under occupation, blockade or exile.",
        now: "Settlement expansion, the blockade of Gaza and recurrent wars keep it the world's most-cited case of contested dispossession."
      }
    },
    records: ["mbembe", "finkelstein", "fanon"]
  }
];
