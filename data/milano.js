// Dati del questionario: Scheda Politica · Milano (Elezioni comunali 2027)
const CFG = {
  "id": "milano",
  "shareId": "mi",
  "title": "Scheda Politica · Milano",
  "subtitle": "Elezioni comunali 2027",
  "fileName": "scheda-politica-milano",
  "version": "milano-0.1",
  "storeKey": "scheda-politica-milano-v1",
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
    "h1": "Cosa vuoi per Milano?",
    "lead": "Rispondi a {TOTAL} affermazioni su casa, mobilità, servizi pubblici, sicurezza e grandi opere. Alla fine vedi il tuo profilo e, dove le posizioni sono documentate, quanto sei vicino alle forze politiche cittadine.",
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
    "demo": "Il Comune dovrebbe affidare aree pubbliche ai privati per costruire case a prezzi calmierati.",
    "notes": "Versione pilota. Le domande nascono da atti dei consigli comunali e dalla stampa locale. Le posizioni sono assegnate solo dove un voto o una dichiarazione sono documentati; per le altre non c'è nessun voto, quindi il confronto è ancora parziale. I candidati alle comunali 2027 non sono ancora noti. Le risposte restano solo nel tuo browser e il profilo è anonimo. La sezione 4 usa proposte presentate a ottobre 2026 da candidati e dalle commissioni consiliari: non ci sono ancora programmi ufficiali né candidati definitivi."
  },
  "sections": [
    {
      "t": "1. Grandi opere e urbanistica",
      "q": [
        [
          1,
          "Lo stadio di San Siro andava venduto a Inter e Milan, anche con il prezzo e le condizioni fissati nel 2025."
        ],
        [
          2,
          "Il Comune dovrebbe affidare aree pubbliche ai privati tramite bandi per costruire case a prezzi calmierati."
        ],
        [
          3,
          "Per il Piano casa il Comune dovrebbe puntare soprattutto su alloggi pubblici gestiti direttamente, non su operatori privati."
        ],
        [
          4,
          "Le regole urbanistiche dovrebbero consentire edifici più alti per aumentare l'offerta di case."
        ]
      ]
    },
    {
      "t": "2. Mobilità e trasporto pubblico",
      "q": [
        [
          5,
          "Il Comune dovrebbe estendere le zone a traffico limitato con multe automatiche tramite telecamere."
        ],
        [
          6,
          "Il servizio dei mezzi pubblici di Atm dovrebbe essere affidato con gara aperta anche ad altri operatori."
        ],
        [
          7,
          "Il Comune dovrebbe prorogare l'affidamento ad Atm invece di fare una gara."
        ],
        [
          8,
          "Le linee di metrotranvia vanno completate anche a costo di nuovi cantieri e disagi."
        ]
      ]
    },
    {
      "t": "3. Servizi e spazi pubblici",
      "q": [
        [
          9,
          "Impianti pubblici come il Lido di piazzale Lotto possono essere dati in concessione per decenni a un gestore privato."
        ],
        [
          10,
          "Gli impianti sportivi comunali dovrebbero restare a tariffe pubbliche anche se questo costa di più al Comune."
        ],
        [
          11,
          "Il Comune dovrebbe organizzare centri estivi pubblici anche ad agosto e settembre."
        ],
        [
          12,
          "La biblioteca Sormani va mantenuta aperta e potenziata anche con l'apertura della nuova Beic."
        ]
      ]
    },
    {
      "t": "4. Casa, sicurezza e vivibilità",
      "q": [
        [
          13,
          "Il Comune dovrebbe costruire decine di migliaia di nuove case pubbliche."
        ],
        [
          14,
          "Prima di costruire nuove case il Comune dovrebbe recuperare e riassegnare gli alloggi comunali sfitti."
        ],
        [
          15,
          "L'Area B, che limita l'accesso ai veicoli più inquinanti, andrebbe abolita."
        ],
        [
          16,
          "Milano dovrebbe avere una polizia cittadina rafforzata, con poteri e fondi speciali per la sicurezza urbana."
        ],
        [
          17,
          "I campi rom irregolari vanno sgomberati anche quando non ci sono alternative abitative immediate."
        ],
        [
          18,
          "Gli allontanamenti e i divieti di accesso a persone ritenute pericolose vanno monitorati con strumenti elettronici."
        ],
        [
          19,
          "Milano dovrebbe restare più aperta di notte, con più locali ed eventi, anche a costo di più rumore."
        ],
        [
          20,
          "Il Comune dovrebbe sbloccare i cantieri fermi per le inchieste urbanistiche per tutelare chi ha già comprato casa."
        ]
      ]
    }
  ],
  "blurb": [
    "1. Grandi opere e urbanistica",
    "2. Mobilità e trasporto pubblico",
    "3. Servizi e spazi pubblici",
    "4. Casa, sicurezza e vivibilità"
  ],
  "axes": [
    {
      "id": "fin",
      "n": "Città e mercato",
      "lo": "Più spazio pubblico e controllo",
      "hi": "Più spazio ai privati e al mercato",
      "ml": "Spazio pubblico",
      "mh": "Mercato",
      "p": [
        1,
        2,
        4
      ],
      "m": [
        3,
        13,
        14
      ]
    },
    {
      "id": "mob",
      "n": "Mobilità",
      "lo": "Più spazio alle auto",
      "hi": "Meno auto in città",
      "ml": "Più auto",
      "mh": "Meno auto",
      "p": [
        5,
        8
      ],
      "m": [
        15
      ]
    },
    {
      "id": "ser",
      "n": "Servizi pubblici",
      "lo": "Più gestione privata",
      "hi": "Più gestione pubblica",
      "ml": "Gestione privata",
      "mh": "Gestione pubblica",
      "p": [
        7,
        10,
        11,
        12
      ],
      "m": [
        6,
        9
      ]
    },
    {
      "id": "ord",
      "n": "Sicurezza e ordine",
      "lo": "Meno misure di controllo",
      "hi": "Più misure di controllo",
      "ml": "Meno controllo",
      "mh": "Più controllo",
      "p": [
        16,
        17,
        18
      ],
      "m": [
        19
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
        ],
        "11": [
          0,
          0,
          "",
          ""
        ],
        "12": [
          0,
          0,
          "",
          ""
        ],
        "13": [
          0,
          0,
          "",
          ""
        ],
        "14": [
          0,
          0,
          "",
          ""
        ],
        "15": [
          0,
          0,
          "",
          ""
        ],
        "16": [
          0,
          0,
          "",
          ""
        ],
        "17": [
          0,
          0,
          "",
          ""
        ],
        "18": [
          0,
          0,
          "",
          ""
        ],
        "19": [
          0,
          0,
          "",
          ""
        ],
        "20": [
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
          1,
          1,
          "Voto contrario alla vendita (consiglio del 30/9/2025)",
          "Voto contrario alla vendita (consiglio del 30/9/2025)"
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
        ],
        "11": [
          0,
          0,
          "",
          ""
        ],
        "12": [
          0,
          0,
          "",
          ""
        ],
        "13": [
          0,
          0,
          "",
          ""
        ],
        "14": [
          0,
          0,
          "",
          ""
        ],
        "15": [
          0,
          0,
          "",
          ""
        ],
        "16": [
          0,
          0,
          "",
          ""
        ],
        "17": [
          0,
          0,
          "",
          ""
        ],
        "18": [
          0,
          0,
          "",
          ""
        ],
        "19": [
          0,
          0,
          "",
          ""
        ],
        "20": [
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
          "Voto contrario alla vendita (consiglio del 30/9/2025)",
          "Voto contrario alla vendita (consiglio del 30/9/2025)"
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
        ],
        "11": [
          0,
          0,
          "",
          ""
        ],
        "12": [
          0,
          0,
          "",
          ""
        ],
        "13": [
          0,
          0,
          "",
          ""
        ],
        "14": [
          0,
          0,
          "",
          ""
        ],
        "15": [
          0,
          0,
          "",
          ""
        ],
        "16": [
          0,
          0,
          "",
          ""
        ],
        "17": [
          0,
          0,
          "",
          ""
        ],
        "18": [
          0,
          0,
          "",
          ""
        ],
        "19": [
          0,
          0,
          "",
          ""
        ],
        "20": [
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
        ],
        "11": [
          0,
          0,
          "",
          ""
        ],
        "12": [
          0,
          0,
          "",
          ""
        ],
        "13": [
          0,
          0,
          "",
          ""
        ],
        "14": [
          0,
          0,
          "",
          ""
        ],
        "15": [
          0,
          0,
          "",
          ""
        ],
        "16": [
          0,
          0,
          "",
          ""
        ],
        "17": [
          0,
          0,
          "",
          ""
        ],
        "18": [
          0,
          0,
          "",
          ""
        ],
        "19": [
          0,
          0,
          "",
          ""
        ],
        "20": [
          0,
          0,
          "",
          ""
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M7 1.5L13 12.5H1Z\" fill=\"var(--fi)\"/></svg>"
    },
    {
      "k": "nm",
      "short": "NM",
      "full": "Noi Moderati",
      "rank": [
        "a Noi Moderati",
        "Noi Moderati"
      ],
      "btn": "NM",
      "dot": "nm",
      "light": "#A16207",
      "dark": "#FCD34D",
      "sub": "Solo posizioni documentate",
      "ordList": 0,
      "data": {
        "1": [
          1,
          1,
          "Voto contrario alla vendita (consiglio del 30/9/2025)",
          "Voto contrario alla vendita (consiglio del 30/9/2025)"
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
        ],
        "11": [
          0,
          0,
          "",
          ""
        ],
        "12": [
          0,
          0,
          "",
          ""
        ],
        "13": [
          0,
          0,
          "",
          ""
        ],
        "14": [
          0,
          0,
          "",
          ""
        ],
        "15": [
          0,
          0,
          "",
          ""
        ],
        "16": [
          0,
          0,
          "",
          ""
        ],
        "17": [
          0,
          0,
          "",
          ""
        ],
        "18": [
          0,
          0,
          "",
          ""
        ],
        "19": [
          0,
          0,
          "",
          ""
        ],
        "20": [
          0,
          0,
          "",
          ""
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M4 1.5H10L13 7L10 12.5H4L1 7Z\" fill=\"var(--nm)\"/></svg>"
    },
    {
      "k": "av",
      "short": "AVS",
      "full": "Alleanza Verdi e Sinistra",
      "rank": [
        "ad AVS",
        "AVS"
      ],
      "btn": "AVS",
      "dot": "av",
      "light": "#BE185D",
      "dark": "#F9A8D4",
      "sub": "Solo posizioni documentate",
      "ordList": 0,
      "data": {
        "1": [
          1,
          1,
          "Gruppo Europa Verde contrario alla vendita (30/9/2025)",
          "Gruppo Europa Verde contrario alla vendita (30/9/2025)"
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
        ],
        "11": [
          0,
          0,
          "",
          ""
        ],
        "12": [
          0,
          0,
          "",
          ""
        ],
        "13": [
          0,
          0,
          "",
          ""
        ],
        "14": [
          0,
          0,
          "",
          ""
        ],
        "15": [
          0,
          0,
          "",
          ""
        ],
        "16": [
          0,
          0,
          "",
          ""
        ],
        "17": [
          0,
          0,
          "",
          ""
        ],
        "18": [
          0,
          0,
          "",
          ""
        ],
        "19": [
          0,
          0,
          "",
          ""
        ],
        "20": [
          0,
          0,
          "",
          ""
        ]
      },
      "glyph": "<svg viewBox=\"0 0 14 14\" aria-hidden=\"true\"><path d=\"M5 1H9V5H13V9H9V13H5V9H1V5H5Z\" fill=\"var(--av)\"/></svg>"
    }
  ]
};
