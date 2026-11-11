// Dati del questionario: Scheda Politica · Rimini (Elezioni comunali 2027)
const CFG = {
  "id": "rimini",
  "shareId": "ri",
  "title": "Scheda Politica · Rimini",
  "subtitle": "Elezioni comunali 2027",
  "fileName": "scheda-politica-rimini",
  "version": "rimini-0.1",
  "storeKey": "scheda-politica-rimini-v1",
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
    "h1": "Cosa vuoi per Rimini?",
    "lead": "Rispondi a {TOTAL} affermazioni su convivenza, tasse, turismo e territorio. Alla fine vedi il tuo profilo e, dove le posizioni sono documentate, quanto sei vicino alle forze politiche cittadine.",
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
    "demo": "Il Comune dovrebbe individuare un'area dove trasferire la moschea di Borgo Marina.",
    "notes": "Versione pilota. Le domande nascono da atti dei consigli comunali e dalla stampa locale. Le posizioni sono assegnate solo dove un voto o una dichiarazione sono documentati; per le altre non c'è nessun voto, quindi il confronto è ancora parziale. I candidati alle comunali 2027 non sono ancora noti. Le risposte restano solo nel tuo browser e il profilo è anonimo."
  },
  "sections": [
    {
      "t": "1. Convivenza e sicurezza",
      "q": [
        [
          1,
          "Il Comune dovrebbe individuare e proporre un'area dove trasferire la moschea di Borgo Marina."
        ],
        [
          2,
          "Il Comune dovrebbe mantenere aperto un tavolo con l'opposizione su temi come il luogo di culto islamico."
        ],
        [
          3,
          "Per la movida estiva servono più divieti e controlli, anche a costo di limitare i locali."
        ],
        [
          4,
          "Servono più telecamere e presenza di polizia locale nelle zone della costa più frequentate di notte."
        ]
      ]
    },
    {
      "t": "2. Tasse, tariffe e bilancio",
      "q": [
        [
          5,
          "Se la tariffa dei rifiuti cresce, il Comune deve coprire l'aumento con risorse di bilancio piuttosto che aumentare le tariffe."
        ],
        [
          6,
          "L'imposta di soggiorno dovrebbe finanziare soprattutto eventi e promozione turistica."
        ],
        [
          7,
          "Il Comune dovrebbe sostenere con fondi pubblici i voli dell'aeroporto di Rimini."
        ]
      ]
    },
    {
      "t": "3. Territorio e servizi",
      "q": [
        [
          8,
          "La costa dovrebbe avere più spazio per nuovi stabilimenti e strutture ricettive, anche con meno vincoli."
        ],
        [
          9,
          "Il Comune dovrebbe limitare gli affitti brevi turistici per favorire gli affitti ai residenti."
        ],
        [
          10,
          "Il Comune dovrebbe riservare parte degli alloggi pubblici ai lavoratori stagionali."
        ]
      ]
    }
  ],
  "blurb": [
    "1. Convivenza e sicurezza",
    "2. Tasse, tariffe e bilancio",
    "3. Territorio e servizi"
  ],
  "axes": [
    {
      "id": "ord",
      "n": "Ordine e identità",
      "lo": "Più apertura e inclusione",
      "hi": "Più controllo e identità",
      "ml": "Apertura",
      "mh": "Controllo",
      "p": [
        1,
        3,
        4
      ],
      "m": [
        2
      ]
    },
    {
      "id": "fis",
      "n": "Tasse e bilancio",
      "lo": "Meno intervento del Comune",
      "hi": "Più intervento del Comune",
      "ml": "Meno intervento",
      "mh": "Più intervento",
      "p": [
        5,
        9,
        10
      ],
      "m": []
    },
    {
      "id": "tur",
      "n": "Turismo e territorio",
      "lo": "Meno spesa pubblica per il turismo",
      "hi": "Più spesa pubblica per il turismo",
      "ml": "Meno spesa",
      "mh": "Più spesa",
      "p": [
        6,
        7,
        8
      ],
      "m": []
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
          5,
          5,
          "Il sindaco Sadegholvaad vuole il trasferimento (Il Resto del Carlino, 25/3/2026)",
          "Il sindaco Sadegholvaad vuole il trasferimento (Il Resto del Carlino, 25/3/2026)"
        ],
        "2": [
          0,
          0,
          "",
          ""
        ],
        "3": [
          0,
          0,
          "",
          ""
        ],
        "4": [
          0,
          0,
          "",
          ""
        ],
        "5": [
          5,
          5,
          "Voto favorevole alla copertura (consiglio del 28/7/2026, 20 sì, 9 no)",
          "Voto favorevole alla copertura (consiglio del 28/7/2026, 20 sì, 9 no)"
        ],
        "6": [
          0,
          0,
          "",
          ""
        ],
        "7": [
          0,
          0,
          "",
          ""
        ],
        "8": [
          0,
          0,
          "",
          ""
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
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"7\" r=\"6\" fill=\"var(--pd)\"/></svg>"
    },
    {
      "k": "fdi",
      "short": "FdI",
      "full": "Fratelli d'Italia",
      "rank": [
        "a Fratelli d'Italia",
        "Fratelli d'Italia"
      ],
      "btn": "FdI",
      "dot": "fdi",
      "light": "#1D4ED8",
      "dark": "#93C5FD",
      "sub": "Solo posizioni documentate",
      "ordList": 0,
      "data": {
        "1": [
          5,
          5,
          "Renzi (FdI) da anni chiede il trasferimento (Il Resto del Carlino, 25/3/2026)",
          "Renzi (FdI) da anni chiede il trasferimento (Il Resto del Carlino, 25/3/2026)"
        ],
        "2": [
          0,
          0,
          "",
          ""
        ],
        "3": [
          0,
          0,
          "",
          ""
        ],
        "4": [
          0,
          0,
          "",
          ""
        ],
        "5": [
          1,
          1,
          "Minoranza FdI-Lega contro (consiglio del 28/7/2026)",
          "Minoranza FdI-Lega contro (consiglio del 28/7/2026)"
        ],
        "6": [
          0,
          0,
          "",
          ""
        ],
        "7": [
          0,
          0,
          "",
          ""
        ],
        "8": [
          0,
          0,
          "",
          ""
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
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" fill=\"var(--fdi)\" transform=\"rotate(45 7 7)\"/></svg>"
    },
    {
      "k": "lg",
      "short": "Lega",
      "full": "Lega",
      "rank": [
        "alla Lega",
        "la Lega"
      ],
      "btn": "Lega",
      "dot": "lg",
      "light": "#047857",
      "dark": "#6EE7B7",
      "sub": "Solo posizioni documentate",
      "ordList": 0,
      "data": {
        "1": [
          1,
          1,
          "Zoccarato (Lega): non spetta al Comune cercare un'alternativa (Il Resto del Carlino, 25/3/2026)",
          "Zoccarato (Lega): non spetta al Comune cercare un'alternativa (Il Resto del Carlino, 25/3/2026)"
        ],
        "2": [
          0,
          0,
          "",
          ""
        ],
        "3": [
          0,
          0,
          "",
          ""
        ],
        "4": [
          0,
          0,
          "",
          ""
        ],
        "5": [
          1,
          1,
          "Minoranza FdI-Lega contro (consiglio del 28/7/2026)",
          "Minoranza FdI-Lega contro (consiglio del 28/7/2026)"
        ],
        "6": [
          0,
          0,
          "",
          ""
        ],
        "7": [
          0,
          0,
          "",
          ""
        ],
        "8": [
          0,
          0,
          "",
          ""
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
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"10\" height=\"10\" rx=\"2\" fill=\"var(--lg)\"/></svg>"
    },
    {
      "k": "fi",
      "short": "FI",
      "full": "Forza Italia",
      "rank": [
        "a Forza Italia",
        "Forza Italia"
      ],
      "btn": "FI",
      "dot": "fi",
      "light": "#0E7490",
      "dark": "#67E8F9",
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
          0,
          0,
          "",
          ""
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
          0,
          0,
          "",
          ""
        ],
        "8": [
          0,
          0,
          "",
          ""
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
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M7 1.5L13 12.5H1Z\" fill=\"var(--fi)\"/></svg>"
    }
  ]
};
