/* sources.js — attaches a "Sources & further reading" list to each empire and
   each people, by id. Runs after empires.js and peoples.js.
   Sources are credible, widely-available works, official reports and inquiries,
   chosen for verifiability (and, on contested cases, for balance).
   Each renders as a link to a search so the reader can check it independently. */
(function () {
  var EMPIRE_SOURCES = {
    portuguese: [
      "Trans-Atlantic Slave Trade Database (slavevoyages.org)",
      "A. R. Disney, A History of Portugal and the Portuguese Empire (2009)"
    ],
    spanish: [
      "Andrés Reséndez, The Other Slavery (2016)",
      "Noble David Cook, Born to Die: Disease and New World Conquest (1998)",
      "Eduardo Galeano, Open Veins of Latin America (1971)"
    ],
    dutch: [
      "C. R. Boxer, The Dutch Seaborne Empire (1965)",
      "Independence, Decolonization, Violence and War in Indonesia 1945–1950 (KITLV/NIOD/NIMH, 2022)"
    ],
    british: [
      "Utsa Patnaik, on the colonial drain, in Agrarian and Other Histories (2018)",
      "Mike Davis, Late Victorian Holocausts (2001)",
      "Caroline Elkins, Legacy of Violence (2022)"
    ],
    french: [
      "Alistair Horne, A Savage War of Peace (1977)",
      "C. L. R. James, The Black Jacobins (1938)",
      "Frantz Fanon, The Wretched of the Earth (1961)"
    ],
    german: [
      "David Olusoga & Casper Erichsen, The Kaiser's Holocaust (2010)",
      "Jeremy Sarkin, Germany's Genocide of the Herero (2011)"
    ],
    belgian: [
      "Adam Hochschild, King Leopold's Ghost (1998)",
      "Roger Casement, The Casement Report (1904)"
    ],
    american: [
      "Howard Zinn, A People's History of the United States (1980)",
      "Roxanne Dunbar-Ortiz, An Indigenous Peoples' History of the United States (2014)",
      "Daniel Immerwahr, How to Hide an Empire (2019)"
    ]
  };

  var PEOPLE_SOURCES = {
    brazil: [
      "John Hemming, Red Gold: The Conquest of the Brazilian Indians (1978)",
      "Survival International & FUNAI reporting on the Yanomami emergency (2023)"
    ],
    maya: [
      "Commission for Historical Clarification, Guatemala: Memory of Silence (1999)",
      "Inga Clendinnen, Ambivalent Conquests (1987)",
      "Matthew Restall, Seven Myths of the Spanish Conquest (2003)"
    ],
    ireland: [
      "Cormac Ó Gráda, Black '47 and Beyond (1999)",
      "Cecil Woodham-Smith, The Great Hunger (1962)"
    ],
    indonesia: [
      "M. C. Ricklefs, A History of Modern Indonesia since c.1200 (2008)",
      "Independence, Decolonization, Violence and War in Indonesia 1945–1950 (KITLV/NIOD/NIMH, 2022)"
    ],
    "native-na": [
      "Roxanne Dunbar-Ortiz, An Indigenous Peoples' History of the United States (2014)",
      "US Federal Indian Boarding School Initiative Investigative Report (2022)",
      "Canada's Truth and Reconciliation Commission, Final Report (2015)"
    ],
    haiti: [
      "C. L. R. James, The Black Jacobins (1938)",
      "Michel-Rolph Trouillot, Silencing the Past (1995)",
      "The New York Times, 'The Ransom' (investigation into Haiti's indemnity, 2022)"
    ],
    greenland: [
      "Reporting on the Greenland 'coil case' (spiralkampagnen) and the 2022 Danish–Greenlandic inquiry",
      "Reconciliation Commission of Greenland, reports (2014–17)"
    ],
    alaska: [
      "Alaska Native Language Center, University of Alaska Fairbanks",
      "Alaska Native Claims Settlement Act (1971); records of the WWII Aleut evacuation"
    ],
    india: [
      "Utsa Patnaik, on the colonial drain (2018)",
      "Mike Davis, Late Victorian Holocausts (2001)",
      "William Dalrymple, The Anarchy (2019)"
    ],
    circassians: [
      "Walter Richmond, The Circassian Genocide (2013)",
      "Oliver Bullough, Let Our Fame Be Great (2010)"
    ],
    "aboriginal-australia": [
      "Bringing Them Home (HREOC report on the Stolen Generations, 1997)",
      "Henry Reynolds, The Other Side of the Frontier (1981)",
      "Mabo v Queensland (No 2), High Court of Australia (1992)"
    ],
    algeria: [
      "Alistair Horne, A Savage War of Peace (1977)",
      "Frantz Fanon, The Wretched of the Earth (1961)"
    ],
    ainu: [
      "ann-elise lewallen, The Fabric of Indigeneity (2016)",
      "Japan's Ainu recognition law (2019) & the Upopoy National Ainu Museum"
    ],
    "herero-nama": [
      "David Olusoga & Casper Erichsen, The Kaiser's Holocaust (2010)",
      "Jeremy Sarkin, Germany's Genocide of the Herero (2011)"
    ],
    congo: [
      "Adam Hochschild, King Leopold's Ghost (1998)",
      "Roger Casement, The Casement Report (1904)"
    ],
    kenya: [
      "Caroline Elkins, Imperial Reckoning (2005)",
      "David Anderson, Histories of the Hanged (2005)"
    ],
    "inner-mongolia": [
      "Uradyn E. Bulag, The Mongols at China's Edge (2002)",
      "Reporting on the 2020 Inner Mongolia bilingual-education policy and protests"
    ],
    palestine: [
      "Rashid Khalidi, The Hundred Years' War on Palestine (2020)",
      "Benny Morris, The Birth of the Palestinian Refugee Problem Revisited (2004)",
      "UN OCHA & UNRWA displacement data"
    ]
  };

  if (window.LB_EMPIRES) {
    window.LB_EMPIRES.forEach(function (e) { if (EMPIRE_SOURCES[e.id]) e.sources = EMPIRE_SOURCES[e.id]; });
  }
  if (window.LB_PEOPLES) {
    window.LB_PEOPLES.forEach(function (p) { if (PEOPLE_SOURCES[p.id]) p.sources = PEOPLE_SOURCES[p.id]; });
  }
})();
