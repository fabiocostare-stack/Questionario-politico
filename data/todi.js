// Dati del questionario: Scheda Politica · Todi (Elezioni comunali 2027)
const CFG = {
  "id": "todi",
  "shareId": "td",
  "title": "Scheda Politica · Todi",
  "subtitle": "Elezioni comunali 2027",
  "fileName": "scheda-politica-todi",
  "version": "todi-0.1",
  "storeKey": "scheda-politica-todi-v1",
  "legacyKey": "",
  "w": {
    "p": "partito o lista",
    "ps": "partiti e liste"
  },
  "layers": false,
  "map": false,
  "openSection": -1,
  "whyDefault": "Posizione documentata da atti e fonti di stampa.",
  "rankTitle": "Vicinanza alle forze politiche",
  "shareFooter": "Confronto basato su atti e posizioni documentate. Non è un giudizio.",
  "intro": {
    "h1": "Cosa vuoi per Todi?",
    "lead": "Rispondi a {TOTAL} affermazioni su sanità, scuola, bilancio e centro storico. Alla fine vedi il tuo profilo e, dove le posizioni sono documentate, quanto sei vicino alle forze politiche cittadine.",
    "facts": [
      [
        "{TOTAL}",
        "affermazioni"
      ],
      [
        "{AXES}",
        "temi nel profilo"
      ],
      [
        "10 min",
        "circa"
      ]
    ],
    "demo": "Il Comune dovrebbe limitare ulteriormente l'accesso alle auto nel centro storico.",
    "notes": "Versione pilota. Le domande nascono da atti dei consigli comunali e dalla stampa locale. Le posizioni sono assegnate solo dove un voto o una dichiarazione sono documentati; per le altre non c'è nessun voto, quindi il confronto è ancora parziale. I candidati alle comunali 2027 non sono ancora noti. Le risposte restano solo nel tuo browser e il profilo è anonimo. Le domande 9-11 sono ancora senza posizioni: vanno costruite con interlocutori locali."
  },
  "sections": [
    {
      "t": "1. Sanità e scuola",
      "q": [
        [
          1,
          "L'ospedale di Pantalla dovrebbe essere integrato con quello di Perugia, anche a costo di perdere autonomia."
        ],
        [
          2,
          "La Regione dovrebbe includere Pantalla nel piano per smaltire le liste d'attesa."
        ],
        [
          3,
          "Le scuole dei comuni della Media Valle del Tevere dovrebbero essere accorpate intorno a Todi."
        ],
        [
          4,
          "Il Comune dovrebbe costruire nuove scuole di frazione anche se la popolazione scolastica cala."
        ]
      ]
    },
    {
      "t": "2. Bilancio e opere",
      "q": [
        [
          5,
          "Il Comune dovrebbe spendere milioni in opere come gli ascensori di via Termoli per l'accessibilità del centro storico."
        ],
        [
          6,
          "Le multe stradali possono essere una voce strutturale del bilancio comunale."
        ],
        [
          7,
          "Conviene ridurre l'addizionale comunale IRPEF anche se il risparmio per ogni cittadino è di pochi euro."
        ],
        [
          8,
          "L'amministrazione uscente dovrebbe esaurire gli investimenti prima delle elezioni, senza lasciare lavori programmati alla prossima."
        ]
      ]
    },
    {
      "t": "3. Da sviluppare con interlocutori locali",
      "q": [
        [
          9,
          "Il centro storico di Todi dovrebbe limitare ulteriormente l'accesso alle auto dei non residenti."
        ],
        [
          10,
          "Per frenare lo spopolamento il Comune dovrebbe dare incentivi a chi trasferisce residenza e lavoro a Todi."
        ],
        [
          11,
          "Il trasporto pubblico tra Todi, le frazioni e la Media Valle va potenziato anche se costa di più."
        ]
      ]
    }
  ],
  "blurb": [
    "1. Sanità e scuola",
    "2. Bilancio e opere",
    "3. Da sviluppare con interlocutori locali"
  ],
  "axes": [
    {
      "id": "bil",
      "n": "Bilancio e opere",
      "lo": "Meno spesa per grandi opere",
      "hi": "Più spesa per opere e servizi",
      "ml": "Meno opere",
      "mh": "Più opere",
      "p": [
        4,
        5,
        8,
        10,
        11
      ],
      "m": [
        6,
        7
      ]
    },
    {
      "id": "ser",
      "n": "Servizi e territorio",
      "lo": "Meno accorpamenti e centralizzazione",
      "hi": "Più accorpamenti e integrazione",
      "ml": "Autonomia locale",
      "mh": "Integrazione",
      "p": [
        1,
        3,
        9
      ],
      "m": [
        2
      ]
    }
  ],
  "subjects": [
    {
      "k": "pd",
      "short": "PD",
      "full": "Partito Democratico",
      "rank": [
        "al PD",
        "il PD"
      ],
      "btn": "PD",
      "dot": "pd",
      "light": "#C2410C",
      "dark": "#FB923C",
      "sub": "Solo posizioni documentate",
      "ordList": 0,
      "data": {
        "1": [
          0,
          0,
          "",
          ""
        ],
        "2": [
          0,
          0,
          "",
          ""
        ],
        "3": [
          1,
          1,
          "Opposizioni, tra cui il PD, contrarie alla proposta (La Nazione, 20/12/2023)",
          "Opposizioni, tra cui il PD, contrarie alla proposta (La Nazione, 20/12/2023)"
        ],
        "4": [
          1,
          1,
          "Contesta il mutuo trentennale per la scuola di Colvalenza (ilTamTam, 6/1/2026)",
          "Contesta il mutuo trentennale per la scuola di Colvalenza (ilTamTam, 6/1/2026)"
        ],
        "5": [
          1,
          1,
          "Critica la spesa di oltre 4 milioni (ilTamTam, 6/1/2026)",
          "Critica la spesa di oltre 4 milioni (ilTamTam, 6/1/2026)"
        ],
        "6": [
          1,
          1,
          "Critica le multe come voce strutturale (ilTamTam, 6/1/2026)",
          "Critica le multe come voce strutturale (ilTamTam, 6/1/2026)"
        ],
        "7": [
          0,
          0,
          "",
          ""
        ],
        "8": [
          1,
          1,
          "Critica l'esaurimento degli investimenti nel 2027-2028 (ilTamTam, 6/1/2026)",
          "Critica l'esaurimento degli investimenti nel 2027-2028 (ilTamTam, 6/1/2026)"
        ],
        "9": [
          0,
          0,
          "",
          ""
        ],
        "10": [
          0,
          0,
          "",
          ""
        ],
        "11": [
          0,
          0,
          "",
          ""
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"7\" r=\"6\" fill=\"var(--pd)\"/></svg>"
    },
    {
      "k": "gr",
      "short": "Giunta",
      "full": "Giunta uscente",
      "rank": [
        "alla giunta uscente",
        "la giunta uscente"
      ],
      "btn": "Giunta",
      "dot": "gr",
      "light": "#6D28D9",
      "dark": "#C4B5FD",
      "sub": "Solo posizioni documentate",
      "ordList": 0,
      "data": {
        "1": [
          5,
          5,
          "Il sindaco Ruggiano: unica scelta l'integrazione con Perugia (Corriere dell'Umbria; titolo)",
          "Il sindaco Ruggiano: unica scelta l'integrazione con Perugia (Corriere dell'Umbria; titolo)"
        ],
        "2": [
          5,
          5,
          "Ruggiano: Pantalla esclusa dal piano di smaltimento (Corriere dell'Umbria; titolo)",
          "Ruggiano: Pantalla esclusa dal piano di smaltimento (Corriere dell'Umbria; titolo)"
        ],
        "3": [
          5,
          5,
          "Delibera della giunta con la proposta di accorpamento (La Nazione, 20/12/2023)",
          "Delibera della giunta con la proposta di accorpamento (La Nazione, 20/12/2023)"
        ],
        "4": [
          0,
          0,
          "",
          ""
        ],
        "5": [
          0,
          0,
          "",
          ""
        ],
        "6": [
          0,
          0,
          "",
          ""
        ],
        "7": [
          5,
          5,
          "La giunta rivendica la riduzione (ilTamTam, 6/1/2026)",
          "La giunta rivendica la riduzione (ilTamTam, 6/1/2026)"
        ],
        "8": [
          5,
          5,
          "Ruggiano rivendica di non lasciare lavori alla prossima amministrazione (ilTamTam, 6/1/2026)",
          "Ruggiano rivendica di non lasciare lavori alla prossima amministrazione (ilTamTam, 6/1/2026)"
        ],
        "9": [
          0,
          0,
          "",
          ""
        ],
        "10": [
          0,
          0,
          "",
          ""
        ],
        "11": [
          0,
          0,
          "",
          ""
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" fill=\"var(--gr)\" transform=\"rotate(45 7 7)\"/></svg>"
    }
  ]
};
