/* ==========================================================================
   Scheda Politica — Parma · Elezioni comunali 2027
   25 affermazioni · 6 sezioni · 4 assi · 6 forze politiche cittadine
   Ogni posizione ha fonte verificabile (voto in Consiglio comunale, atto o
   dichiarazione pubblica documentata).
   ========================================================================== */

const CFG = {
  id: "parma",
  version: "parma-0.1",
  storageKey: "scheda.parma.2027.v1",
  title: "Scheda Politica · Parma",
  subtitle: "Elezioni comunali 2027 · 25 affermazioni sui temi della città",
  banner: "Per Parma le posizioni delle 6 principali forze politiche cittadine sono documentate su tutte le 25 affermazioni tramite voti in Consiglio comunale, atti e dichiarazioni pubbliche. In vista delle comunali 2027 i profili saranno aggiornati con i programmi elettorali ufficiali.",
  description: "25 affermazioni concrete su ciò che si discute e vota in Consiglio comunale a Parma: Aeroporto Verdi e nodo Cargo, Stadio Tardini, ZTL e mobilità, sicurezza in Stazione e Oltretorrente, PUG a consumo di suolo zero, termovalorizzatore Iren e mense scolastiche.",
  scale: ["Per niente","Poco","Così così","Abbastanza","Del tutto"],

  axes: [
    {
      id: "mob",
      name: "Mobilità e spazio urbano",
      l: "Accessibilità auto e sosta",
      r: "Mobilità dolce, ZTL e TPL",
      desc: "A sinistra chi chiede più sosta a rotazione e meno restrizioni viarie per sostenere l'accesso in auto al centro; a destra chi punta su ZTL estesa, Zone 30, Biciplan e filovia elettrica.",
      p: [5, 6, 7, 8],
      m: [9]
    },
    {
      id: "svil",
      name: "Grandi opere e territorio",
      l: "Infrastrutture e sviluppo scalo",
      r: "Tutela ambientale e stop suolo",
      desc: "A sinistra chi dà priorità al potenziamento dell'Aeroporto Verdi (anche commerciale) e a norme urbanistiche più flessibili; a destra chi privilegia il blocco del Cargo, il consumo di suolo a saldo zero e la neutralità climatica 2030.",
      p: [2, 14, 18, 20],
      m: [1]
    },
    {
      id: "sic",
      name: "Sicurezza e convivenza urbana",
      l: "Prevenzione sociale e spazi creativi",
      r: "Presidio, ordinanze e controlli",
      desc: "A sinistra chi affronta i nodi di Stazione e Oltretorrente con educativa di strada, mediazione e rigenerazione culturale (WoPa); a destra chi chiede presidi fissi interforze, taser alla Polizia Locale, Daspo urbano e stretta sugli esercizi.",
      p: [10, 11, 13],
      m: [12, 17]
    },
    {
      id: "wel",
      name: "Welfare, servizi e diritti",
      l: "Esternalizzazioni, mercato e sussidiarietà",
      r: "Gestione pubblica, casa e diritti",
      desc: "A sinistra chi difende la libera proprietà sugli affitti, criteri selettivi nei servizi e la famiglia tradizionale; a destra chi punta su gestione pubblica dei servizi, limiti agli affitti brevi, nidi universali e diritti civili.",
      p: [15, 16, 21, 23, 24, 25],
      m: [22]
    }
  ],

  sections: [
    {
      id: 1, name: "Aeroporto Verdi, Stadio Tardini e attrattività",
      desc: "Lo sviluppo dello scalo aeroportuale, il nodo dei voli merci, il cantiere del nuovo Tardini e i grandi eventi in città",
      context: "A Parma il dibattito sulle grandi infrastrutture ruota attorno a due dossier che hanno diviso trasversalmente la politica cittadina: il Masterplan dell'Aeroporto «Giuseppe Verdi» (con l'allungamento della pista e il timore dei comitati per i voli Cargo) e il progetto di rifacimento dello Stadio Ennio Tardini nel cuore del quartiere Cittadella.",
      q: [
        [1, "Aeroporto Verdi e allungamento pista", "Il Comune deve sostenere il potenziamento dell'Aeroporto «Giuseppe Verdi» con l'allungamento della pista previsto dal Masterplan per attrarre nuove rotte passeggeri e investimenti."],
        [2, "Stop ai voli merci (Cargo) all'Aeroporto", "Lo sviluppo di uno scalo merci (Cargo) all'Aeroporto di Parma va bloccato per tutelare i quartieri nord dall'inquinamento acustico, atmosferico e dal traffico pesante."],
        [3, "Nuovo Stadio Tardini nell'attuale sede", "È giusto riqualificare lo Stadio Ennio Tardini nell'attuale area storica con l'investimento del Parma Calcio, anziché delocalizzarlo fuori dal tessuto residenziale."],
        [4, "Grandi eventi, Cittadella e Capitale Giovani 2027", "Il Comune deve investire con decisione su grandi eventi culturali e attrattività internazionale (come Parma Capitale Europea dei Giovani 2027), utilizzando anche i parchi storici come la Cittadella."]
      ]
    },
    {
      id: 2, name: "Mobilità, ZTL, filovia e ciclabili",
      desc: "Accesso al centro storico e all'Oltretorrente, Zone 30, Biciplan, trasporto pubblico TEP e parcheggi",
      context: "Parma è tra le città italiane con la più alta quota di spostamenti in bicicletta e sta investendo sui fondi ministeriali per l'elettrificazione dei bus TEP e sulle Zone 30. L'estensione della ZTL, i varchi elettronici e la riduzione di stalli auto per far posto alle corsie ciclabili sono però contestati da opposizioni e associazioni di commercianti.",
      q: [
        [5, "Estensione ZTL e isole pedonali in centro", "Il Comune deve mantenere ed estendere la ZTL e le aree pedonali nel centro storico e in Oltretorrente, riducendo il transito privato a favore della mobilità dolce."],
        [6, "Zone 30 diffuse nei quartieri", "Il limite di velocità a 30 km/h e gli interventi di moderazione del traffico vanno estesi alla maggioranza delle strade residenziali dei quartieri di Parma."],
        [7, "Biciplan e corsie ciclabili dedicate", "L'espansione e la messa in sicurezza della rete ciclabile (Biciplan) devono proseguire anche dove comportano la riduzione di posti auto su strada o il restringimento delle carreggiate."],
        [8, "Potenziamento filovia TEP e corsie preferenziali", "Bisogna dare priorità assoluta al trasporto pubblico locale (TEP), elettrificando la flotta e riservando corsie preferenziali e priorità semaforica ai bus rispetto alle auto."],
        [9, "Nuovi parcheggi a rotazione e sosta agevolata", "Per sostenere il commercio del centro storico bisogna realizzare nuovi parcheggi a ridosso dei viali di circonvallazione e ridurre le tariffe della sosta sulle strisce blu."]
      ]
    },
    {
      id: 3, name: "Sicurezza, Oltretorrente, Stazione e convivenza",
      desc: "Presidi in zona Stazione e via Garibaldi, dotazioni della Polizia Locale, Daspo urbano e prevenzione giovanile",
      context: "La sicurezza urbana nei quartieri Stazione, San Leonardo, via Garibaldi e Oltretorrente è al centro di ogni seduta del Consiglio comunale. L'opposizione chiede presidi fissi, taser agli agenti della Polizia Locale e strette sui minimarket notturni; la maggioranza affianca al potenziamento dei vigili progetti di educativa di strada e rigenerazione sociale.",
      q: [
        [10, "Presidi fissi in Stazione, Garibaldi e Oltretorrente", "In zona Stazione, via Garibaldi e Oltretorrente servono presidi fissi continuativi e un uso rigoroso di ordinanze anti-bivacco e allontanamento (Daspo urbano)."],
        [11, "Taser alla Polizia Locale e pattuglie notturne", "Gli agenti della Polizia Locale di Parma devono essere dotati di pistola a impulsi elettrici (taser) e impiegati stabilmente in servizi di pattugliamento notturno."],
        [12, "Educativa di strada e mediazione sociale", "Il disagio giovanile e le tensioni nei quartieri si prevengono investendo soprattutto in educativa di strada, mediazione culturale e centri di aggregazione anziché in misure repressive."],
        [13, "Stretta su minimarket e alcolici notturni", "Il Comune deve inasprire i controlli amministrativi e le limitazioni orarie sulla vendita di alcolici e sugli esercizi commerciali nelle zone più esposte al degrado notturno."]
      ]
    },
    {
      id: 4, name: "Urbanistica, PUG, casa e rigenerazione",
      desc: "Il nuovo PUG a consumo di suolo zero, emergenza abitativa, ex Carcere di San Francesco e spazi creativi",
      context: "Con la delibera n. 65 del giugno 2026 il Consiglio comunale di Parma ha approvato il nuovo Piano Urbanistico Generale (PUG) improntato allo stop al consumo di suolo agricolo. Nel frattempo caro-affitti per studenti e famiglie, recupero dell'ex Carcere di San Francesco e futuro di spazi come il WoPa segnano il confronto sulla città.",
      q: [
        [14, "PUG a consumo di suolo zero", "Il nuovo Piano Urbanistico Generale deve bloccare in modo rigido nuove espansioni su terreno agricolo, vincolando lo sviluppo edilizio alla sola rigenerazione delle aree dismesse."],
        [15, "Piano casa comunale e limiti agli affitti brevi", "Per contrastare il caro-affitti per famiglie e studenti universitari il Comune deve potenziare l'edilizia residenziale sociale e introdurre limiti agli affitti turistici brevi."],
        [16, "Ex Carcere di San Francesco a vocazione pubblica", "I grandi complessi storici dismessi come l'ex Carcere di San Francesco in Oltretorrente devono restare a vocazione pubblica, universitaria e culturale, escludendo speculazioni immobiliari private."],
        [17, "Spazi creativi e associativi come il WoPa", "Il Comune deve sostenere con concessioni e risorse gli spazi di rigenerazione culturale e aggregazione giovanile dal basso sul modello del WoPa (Workout Pasubio)."]
      ]
    },
    {
      id: 5, name: "Ambiente, Iren, termovalorizzatore e clima",
      desc: "Autolimitazione del termovalorizzatore di Ugozzolo, raccolta rifiuti, Parma Climate Neutral 2030 e gestione idrica",
      context: "Parma fa parte delle 100 città europee selezionate per la missione «Climate Neutral 2030». Il rapporto con la multiutility Iren — dalla gestione della raccolta puntuale dei rifiuti al tetto di autolimitazione del termovalorizzatore di Ugozzolo (PAIP) — è uno dei temi storicamente più sentiti dai cittadini.",
      q: [
        [18, "Autolimitazione e stop rifiuti esterni a Ugozzolo", "Sul termovalorizzatore Iren di Ugozzolo va mantenuto un tetto rigido di autolimitazione, opponendosi all'arrivo di rifiuti da fuori provincia e programmando il superamento dell'impianto a fine vita."],
        [19, "Tariffa puntuale e raccolta porta a porta spinta", "Il modello di raccolta differenziata porta a porta con misurazione puntuale va difeso e potenziato, anziché tornare ai cassonetti stradali tradizionali."],
        [20, "Investimenti per Parma Climate Neutral 2030", "Il Comune deve destinare una quota rilevante del bilancio al piano «Parma Climate Neutral 2030» per forestazione urbana, depavimentazione di piazzali asfaltati e vasche di laminazione."],
        [21, "Indirizzo pubblico su Iren e tutela tariffe idriche", "I Comuni soci devono esercitare un controllo pubblico più stringente su Iren per destinare gli utili al rinnovo della rete idrica e al contenimento delle bollette anziché ai dividendi finanziari."]
      ]
    },
    {
      id: 6, name: "Mense scolastiche, welfare, nidi e diritti",
      desc: "Il project financing sulle mense scolastiche, le rette in base all'ISEE, le liste d'attesa nei nidi e i diritti civili",
      context: "L'affidamento quindicennale in project financing della ristorazione scolastica e l'adeguamento delle tariffe per le fasce ISEE più alte hanno acceso il dibattito consiliare nel 2024–2026, provocando persino uscite dalla maggioranza e una netta distinzione tra i partiti della coalizione.",
      q: [
        [22, "Project financing a 15 anni per le mense scolastiche", "È giusto affidare la gestione delle mense scolastiche e il rinnovo delle cucine a un partenariato pubblico-privato (project financing di 15 anni) anziché gestirle interamente in house."],
        [23, "Rimodulazione rette per tutelare i redditi bassi", "Per coprire il rincaro dei servizi educativi e mantenere invariate le tariffe alle famiglie a basso reddito è giusto adeguare i contributi richiesti alle fasce ISEE più alte."],
        [24, "Asili nido comunali con priorità basata sull'ISEE", "Il Comune deve puntare all'azzeramento delle liste d'attesa nei nidi d'infanzia assegnando i posti in base alla condizione economica (ISEE) e lavorativa, senza vincoli di residenza storica."],
        [25, "Patrocinio al Parma Pride e Ius Scholae", "Il Comune deve sostenere ufficialmente il Parma Pride e promuovere il riconoscimento simbolico della cittadinanza ai minori stranieri che completano un ciclo di studi in città (Ius Scholae)."]
      ]
    }
  ],

  subjects: [
    {
      id: "PD", name: "Partito Democratico",
      color: "#C0392B", shape: "circle",
      note: "Principale gruppo di maggioranza a sostegno del sindaco Michele Guerra (capogruppo Sandro Maria Campanini).",
      data: {
        1:  [4, "Voto favorevole al Masterplan dell'Aeroporto Verdi condizionato al rispetto delle prescrizioni ambientali della VIA e allo sviluppo del traffico passeggeri.", "2024–2025", "Delibera Masterplan Aeroporto (Sandro Maria Campanini)"],
        2:  [4, "Ordini del giorno di maggioranza per escludere uno scalo Cargo pesante ad alto impatto e vincolare Sogeap al monitoraggio acustico e ambientale.", "2024–2025", "OdG maggioranza su Aeroporto Verdi (PD)"],
        3:  [4, "Sostegno alla riqualificazione dello Stadio Tardini nell'area storica, chiedendo però garanzie sul cronoprogramma in un unico cantiere e sulla mobilità del quartiere.", "2024–2026", "Atti Consiglio comunale su Nuovo Tardini"],
        4:  [5, "Pieno sostegno al dossier vittorioso di Parma Capitale Europea dei Giovani 2027, al Festival Verdi e alla valorizzazione degli spazi monumentali e della Cittadella.", "2024–2026", "DUP e Bilancio Cultura / Giovani 2027"],
        5:  [4, "Sostegno alla ZTL nel centro storico e in Oltretorrente accompagnata dal potenziamento del trasporto pubblico e dal confronto con le categorie economiche.", "2024–2026", "Indirizzi mobilità e ZTL (Gruppo PD)"],
        6:  [4, "Favorevole all'estensione progressiva delle Zone 30 nei quartieri residenziali e attorno ai plessi scolastici per la sicurezza stradale.", "2024–2026", "Atti Consiglio su PUMS e sicurezza stradale"],
        7:  [4, "Sostegno agli investimenti sul Biciplan e alla ricucitura delle piste ciclabili cittadine finanziate con fondi comunali e ministeriali.", "2024–2026", "Delibere Biciplan e mobilità sostenibile"],
        8:  [5, "Pieno sostegno al rinnovo elettrico e filoviario della flotta TEP e agli oltre 13 milioni MASE per le corsie preferenziali e la priorità semaforica.", "2025–2026", "Programma integrato mobilità MASE / TEP"],
        9:  [3, "Favorevole ai parcheggi scambiatori attestati fuori dal centro e all'uso dei parcheggi in struttura, contrario a incentivare l'ingresso auto nel cuore storico.", "2024–2026", "Dibattito consiliare sosta e PUMS"],
        10: [3, "Sostegno ai servizi interforze e al nuovo presidio della Polizia Locale in zona Stazione, affiancati però a progetti di rigenerazione sociale.", "2024–2026", "Atti Consiglio su sicurezza zona Stazione"],
        11: [2, "Contrario alle mozioni del centrodestra sul taser alla Polizia Locale; priorità a nuove assunzioni di agenti, videosorveglianza e vigili di quartiere.", "2024–2026", "Voto contrario a mozioni centrodestra su taser"],
        12: [5, "Forte investimento nei progetti di educativa di strada, mediazione sociale e presidi giovanili nei quartieri più fragili.", "2024–2026", "Bilancio Welfare e politiche giovanili"],
        13: [3, "Favorevole a controlli mirati contro l'abusivismo e le violazioni sugli alcolici in zona Stazione e Oltretorrente, nel rispetto delle regole commerciali.", "2024–2026", "Indirizzi sicurezza urbana e commercio"],
        14: [5, "Voto favorevole all'approvazione del nuovo PUG (Delibera n. 65 del 26/6/2026) improntato al consumo di suolo zero e alla rigenerazione urbana.", "26/6/2026", "Delibera Consiglio n. 65/2026 (Approvazione PUG)"],
        15: [5, "Sostegno al piano abitativo comunale, al Parma Housing Center e al percorso regionale per regolamentare gli affitti brevi turistici.", "2025–2026", "Atti politiche abitative e L.R. affitti brevi"],
        16: [5, "Sostegno agli accordi istituzionali con Università e Ministero per destinare l'ex Carcere di San Francesco e San Francesco del Prato a polo pubblico e universitario.", "2024–2026", "Accordi rigenerazione Oltretorrente / ex Carcere"],
        17: [4, "Favorevole alla valorizzazione delle esperienze di rigenerazione culturale e giovanile in spazi pubblici regolamentati.", "2024–2026", "Atti Consiglio su spazi culturali e giovanili"],
        18: [3, "Difesa del tetto di autolimitazione del termovalorizzatore Iren di Ugozzolo e degli standard EMAS, nel quadro della pianificazione regionale dei rifiuti.", "2024–2026", "Indirizzi ambientali su PAIP Ugozzolo"],
        19: [4, "Sostegno al modello di raccolta differenziata con tariffazione puntuale, impegnando Iren a migliorare il decoro e la pulizia stradale.", "2024–2026", "Atti Consiglio su PEF rifiuti e servizio Iren"],
        20: [5, "Voto favorevole al Climate City Contract «Parma Climate Neutral 2030» e alle dotazioni ecologiche non monetizzabili nel PUG.", "2025–2026", "Delibera PUG n. 65/2026 e Climate City Contract"],
        21: [3, "Sostegno al ruolo del patto di sindacato pubblico in Iren per coniugare investimenti sulle reti idriche e dividendi utili al bilancio comunale.", "2024–2026", "Indirizzi società partecipate / Gruppo Iren"],
        22: [5, "Voto favorevole al project financing quindicennale per la ristorazione scolastica come strumento per rinnovare cucine e refettori senza indebitare il Comune.", "2024–2025", "Delibera project financing mense scolastiche"],
        23: [5, "Difesa della manovra tariffaria che ha mantenuto bloccate le rette per i redditi bassi adeguando il contributo alle fasce ISEE più elevate dopo anni di inflazione.", "2024–2025", "Delibera tariffe servizi educativi e Bilancio"],
        24: [5, "Sostegno ai nuovi poli d'infanzia PNRR e all'ampliamento dell'offerta comunale e convenzionata con graduatorie basate su ISEE e lavoro.", "2024–2026", "Bilancio Servizi Educativi Comune di Parma"],
        25: [5, "Pieno sostegno al patrocinio al Parma Pride e all'approvazione degli ordini del giorno per il riconoscimento dello Ius Scholae.", "2024–2026", "OdG Consiglio comunale su Ius Scholae e Pride"]
      }
    },
    {
      id: "EP", name: "Effetto Parma",
      color: "#7C3AED", shape: "star",
      note: "Movimento civico del sindaco Michele Guerra e del presidente del Consiglio Michele Alinovi (capogruppo Oronzo Pinto).",
      data: {
        1:  [4, "Sostegno della Giunta Guerra e del gruppo civico al Masterplan dell'Aeroporto Verdi per rilanciare i collegamenti passeggeri a servizio del territorio e del sistema fieristico.", "2024–2025", "Posizione Giunta Guerra e gruppo Effetto Parma (Oronzo Pinto)"],
        2:  [3, "Impegno a privilegiare il traffico passeggeri e a vigilare sulle prescrizioni ambientali della VIA, senza chiudere pregiudizialmente alla logistica aeroportuale sostenibile.", "2024–2025", "Dichiarazioni Sindaco Guerra e gruppo Effetto Parma"],
        3:  [5, "Forte sostegno amministrativo al progetto del nuovo Stadio Ennio Tardini nel sito storico come investimento privato strategico di rigenerazione urbana.", "2024–2026", "Atti Giunta Guerra e gruppo Effetto Parma su Tardini"],
        4:  [5, "Cavallo di battaglia del sindaco Michele Guerra (con delega alla Cultura): vittoria del titolo di Parma Capitale Europea dei Giovani 2027 e valorizzazione della Cittadella.", "2024–2026", "Dossier Parma Capitale Europea dei Giovani 2027"],
        5:  [5, "Pieno sostegno alla pedonalizzazione selettiva e alla tutela del centro storico e dell'Oltretorrente dal traffico di attraversamento.", "2024–2026", "Atti Giunta e Assessorato Mobilità (Gianluca Borghi)"],
        6:  [4, "Promozione delle Zone 30 e degli interventi di messa in sicurezza degli attraversamenti pedonali nei quartieri.", "2024–2026", "PUMS e piano sicurezza stradale Giunta Guerra"],
        7:  [5, "Forte impulso alla manutenzione straordinaria e al completamento degli assi del Biciplan cittadino.", "2024–2026", "Delibere Giunta su Biciplan e piste ciclabili"],
        8:  [5, "Sostegno agli investimenti MASE da oltre 13 milioni per i corridoi del trasporto pubblico, il rinnovo filoviario TEP e i nodi semaforici intelligenti.", "2025–2026", "Delibera Programma integrato mobilità MASE"],
        9:  [3, "Orientamento a favorire l'uso dei parcheggi scambiatori e dei multipiano esistenti anziché nuovo suolo per sosta a ridosso del centro.", "2024–2026", "Indirizzi mobilità sostenibile Effetto Parma"],
        10: [3, "Approccio integrato su Stazione e Oltretorrente: nuovo presidio della Polizia Locale e pattugliamenti congiunti insieme a progetti di animazione urbana.", "2024–2026", "Piano sicurezza integrata Giunta Guerra"],
        11: [2, "Contrario all'introduzione del taser per la Polizia Locale; priorità al rafforzamento dell'organico, delle telecamere e della prossimità nei quartieri.", "2024–2026", "Voto contrario a mozioni centrodestra su taser"],
        12: [4, "Sostegno ai programmi di educativa di strada, rigenerazione degli spazi pubblici e protagonismo giovanile nei quartieri.", "2024–2026", "Programma Parma Capitale Giovani e Welfare"],
        13: [4, "Sostegno a ordinanze mirate e controlli interforze sugli esercizi commerciali in zona Stazione e via Garibaldi per tutelare la quiete dei residenti.", "2024–2026", "Ordinanze sindacali e controlli zona Stazione"],
        14: [5, "Voto favorevole al nuovo PUG (Delibera n. 65/2026) elaborato dall'amministrazione per azzerare il consumo di nuovo suolo agricolo.", "26/6/2026", "Delibera Consiglio n. 65/2026 (Michele Alinovi / Oronzo Pinto)"],
        15: [4, "Sostegno all'aggiornamento dei massimali ERS/ERP e al Parma Housing Center, con approccio pragmatico sulla regolazione degli affitti brevi.", "2025–2026", "Delibere Giunta su ERP/ERS e Parma Housing Center"],
        16: [4, "Sostegno alla rifunzionalizzazione pubblica e universitaria dell'ex Carcere di San Francesco in sinergia con l'Ateneo di Parma.", "2024–2026", "Protocollo ex Carcere San Francesco"],
        17: [5, "Forte sostegno agli spazi di creatività urbana, rigenerazione associativa e aggregazione giovanile come tratto identitario di Effetto Parma.", "2024–2026", "Atti Cultura e Giovani (Michele Guerra)"],
        18: [4, "Mantenimento rigoroso del tetto di autolimitazione del termovalorizzatore di Ugozzolo originariamente introdotto dalle amministrazioni civiche.", "2024–2026", "Indirizzi su Polo Ambientale Integrato (PAIP)"],
        19: [4, "Conferma della raccolta differenziata spinta e della tariffa puntuale introdotta a Parma, con sollecitazioni a Iren sulla qualità del decoro urbano.", "2024–2026", "Indirizzi gestione ambientale Effetto Parma"],
        20: [5, "Pieno sostegno alla missione europea «Parma Climate Neutral 2030» e alle infrastrutture verdi e blu previste dal PUG.", "2025–2026", "Climate City Contract Parma 2030"],
        21: [3, "Partecipazione attiva del Comune nel patto di sindacato Iren, bilanciando investimenti territoriali e dividendi per il bilancio cittadino.", "2024–2026", "Bilancio consolidato e indirizzi partecipate"],
        22: [5, "Difesa convinta del project financing a 15 anni per la ristorazione scolastica promosso dall'assessora Caterina Bonetti per ammodernare i centri cottura.", "2024–2025", "Delibera Giunta e Consiglio su project financing mense"],
        23: [5, "Sostegno all'adeguamento selettivo delle tariffe per le fasce ISEE alte per salvaguardare la gratuità e le agevolazioni dei nuclei più deboli.", "2024–2025", "Manovra tariffaria Bilancio 2024–2026"],
        24: [5, "Investimento prioritario sui nuovi nidi PNRR e sul sistema integrato 0-6 anni per ridurre strutturalmente le liste d'attesa.", "2024–2026", "Piano nidi e infanzia Giunta Guerra"],
        25: [5, "Adesione e patrocinio al Parma Pride e sostegno alle iniziative per i diritti civili e la cittadinanza delle nuove generazioni.", "2024–2026", "Atti Giunta e Consiglio su diritti e Pride"]
      }
    },
    {
      id: "AVS", name: "Sinistra Coraggiosa – Europa Verde",
      color: "#16A34A", shape: "diamond",
      note: "Area rosso-verde ed ecologista presente in Consiglio comunale (Europa Verde con Enrico Ottolini, Sinistra Coraggiosa e consiglieri civico-progressisti).",
      data: {
        1:  [1, "Netta contrarietà al Masterplan di ampliamento dell'Aeroporto Verdi e all'allungamento della pista: ritenuto uno spreco di risorse pubbliche e un danno ambientale.", "2024–2025", "Voto contrario / distacco in aula su Masterplan Aeroporto (Enrico Ottolini)"],
        2:  [5, "Pieno sostegno alle mobilitazioni dei comitati «No Cargo» per bloccare qualsiasi sviluppo di voli merci ed emissioni climalteranti a ridosso della città.", "2024–2025", "Interventi Europa Verde e Sinistra Coraggiosa su No Cargo"],
        3:  [2, "Forti riserve sull'impatto urbanistico, commerciale e viabilistico del nuovo Tardini nel quartiere e sulla concessione novantennale a favore del privato.", "2024–2026", "Osservazioni critiche in Consiglio su progetto Stadio Tardini"],
        4:  [3, "Sostegno alle politiche giovanili e culturali diffuse, ma richiesta di tutelare il verde storico della Cittadella dall'eccessiva commercializzazione per grandi eventi.", "2024–2026", "Interventi in aula su tutela Parco della Cittadella"],
        5:  [5, "Sostegno deciso all'estensione della ZTL, alle pedonalizzazioni in centro e Oltretorrente e alla riduzione strutturale del tasso di motorizzazione.", "2024–2026", "Proposte mobilità sostenibile Europa Verde / Sinistra"],
        6:  [5, "Richiesta di rendere Parma una «Città 30» generalizzata con ridisegno dello spazio stradale a tutela di pedoni, ciclisti e scuole.", "2024–2026", "Mozioni e atti su Parma Città 30"],
        7:  [5, "Priorità assoluta al completamento del Biciplan e alla creazione di corsie ciclabili protette, anche sottraendo spazio alla sosta automobilistica.", "2024–2026", "Atti Consiglio su Biciplan e mobilità ciclabile"],
        8:  [5, "Pieno sostegno al potenziamento del trasporto pubblico elettrico TEP, con richiesta di tariffe agevolate o gratuite per studenti e fasce deboli.", "2024–2026", "Proposte su TPL e transizione ecologica"],
        9:  [2, "Contrarietà a nuovi parcheggi a ridosso del centro storico e a riduzioni tariffarie che incentivino l'uso dell'auto privata.", "2024–2026", "Posizione in Consiglio su sosta e mobilità"],
        10: [1, "Contrarietà all'approccio securitario, alle ordinanze anti-bivacco e al Daspo urbano, ritenuti strumenti che spostano la marginalità senza risolverla.", "2024–2026", "Interventi in Consiglio contro Daspo urbano"],
        11: [1, "Netta opposizione alla dotazione del taser per la Polizia Locale di Parma per i rischi sanitari e l'impostazione militarizzata del servizio.", "2024–2026", "Voto contrario a mozioni sul taser"],
        12: [5, "Priorità assoluta a educativa di strada, mediazione sociale, sport di base gratuito e presidi socioculturali in Stazione, San Leonardo e Oltretorrente.", "2024–2026", "Atti e proposte su welfare di comunità"],
        13: [2, "Contrarietà a ordinanze punitive generalizzate contro i piccoli esercizi etnici, preferendo progetti di convivenza e riqualificazione integrata.", "2024–2026", "Dibattito consiliare su Oltretorrente e Stazione"],
        14: [5, "Sostegno convinto allo stop al consumo di suolo e alle dotazioni ecologiche obbligatorie nel nuovo PUG, chiedendo la massima severità contro ogni deroga.", "26/6/2026", "Interventi su approvazione PUG (Delibera n. 65/2026)"],
        15: [5, "Richiesta di un piano straordinario di edilizia pubblica, recupero degli alloggi sfitti e tetti stringenti agli affitti brevi turistici in centro e Oltretorrente.", "2025–2026", "Proposte su diritto all'abitare e affitti brevi"],
        16: [5, "Difesa della destinazione integralmente pubblica, culturale e sociale dell'ex Carcere di San Francesco e dei beni comuni dell'Oltretorrente.", "2024–2026", "Atti su ex Carcere San Francesco e beni comuni"],
        17: [5, "Forte difesa del WoPa e degli spazi sociali e autogestiti come presidi insostituibili di produzione culturale indipendente e giovanile.", "2024–2026", "Interventi a sostegno del WoPa e spazi autogestiti"],
        18: [5, "Battaglia storica per il rispetto rigoroso dell'autolimitazione e per un piano vincolante di spegnimento definitivo del termovalorizzatore Iren di Ugozzolo.", "2024–2026", "Atti su PAIP Ugozzolo ed economia circolare"],
        19: [5, "Sostegno alla tariffazione puntuale e alla riduzione dei rifiuti alla fonte verso l'obiettivo Rifiuti Zero.", "2024–2026", "Posizioni ecologiste su gestione rifiuti"],
        20: [5, "Impegno per accelerare il piano «Parma Climate Neutral 2030» con depavimentazioni diffuse, foreste urbane e comunità energetiche rinnovabili.", "2025–2026", "Atti su neutralità climatica ed ecologia urbana"],
        21: [5, "Critica alla finanziarizzazione di Iren e richiesta di ripubblicizzazione dei servizi idrici e ambientali con reinvestimento integrale degli utili nelle reti.", "2024–2026", "Interventi in aula su multiutility Iren"],
        22: [1, "Netta opposizione al project financing a 15 anni per le mense scolastiche, contestato come esternalizzazione di un servizio educativo essenziale (caso politico che ha portato anche a rotture in maggioranza).", "2024–2025", "Voto contrario / contestazione project financing mense (area sinistra e Ines Seletti)"],
        23: [4, "Favorevole alla progressività fiscale per tutelare i redditi bassi, ma critica verso l'aumento dei costi complessivi a carico delle famiglie nelle mense esternalizzate.", "2024–2025", "Dibattito consiliare su tariffe mense e nidi"],
        24: [5, "Richiesta di nidi comunali a gestione diretta, universali e gratuiti per le fasce popolari e medie, azzerando le liste d'attesa.", "2024–2026", "Proposte su scuola pubblica e infanzia 0-6"],
        25: [5, "Promotori in aula degli ordini del giorno per lo Ius Scholae, del sostegno al Parma Pride e delle politiche antidiscriminatorie.", "2024–2026", "OdG Ius Scholae e diritti civili"]
      }
    },
    {
      id: "FdI", name: "Fratelli d'Italia",
      color: "#1D4ED8", shape: "triangle",
      note: "Principale partito di opposizione di centrodestra in Consiglio comunale (capogruppo Priamo Bocchi).",
      data: {
        1:  [5, "Pieno sostegno allo sviluppo infrastrutturale dell'Aeroporto «Giuseppe Verdi» e all'allungamento della pista, criticando le divisioni interne alla maggioranza di centrosinistra.", "2024–2025", "Interventi in Consiglio su Aeroporto Verdi (Priamo Bocchi)"],
        2:  [2, "Contrario ai veti ideologici dei comitati «No Cargo»: lo sviluppo logistico e commerciale è ritenuto indispensabile per la sostenibilità economica dello scalo parmense.", "2024–2025", "Posizione FdI su Masterplan e sviluppo Aeroporto"],
        3:  [3, "Favorevole a mantenere il Tardini nella sua sede storica, ma fortemente critico verso la Giunta per le incertezze sull'iter, la durata della concessione e i disagi al quartiere.", "2024–2026", "Interrogazioni e note FdI su Stadio Tardini"],
        4:  [2, "Critiche alla gestione degli eventi e ai costi delle manifestazioni della Giunta Guerra, denunciando incuria e scarsa tutela del decoro nel Parco della Cittadella.", "2024–2026", "Interpellanze FdI su Cittadella e bilancio Cultura"],
        5:  [1, "Netta contrarietà all'estensione della ZTL e alle chiusure viarie che penalizzano i residenti e il commercio storico del centro e dell'Oltretorrente.", "2024–2026", "Mozioni e interventi FdI contro estensione ZTL"],
        6:  [1, "Opposizione alle Zone 30 generalizzate, giudicate una misura ideologica che rallenta la circolazione senza risolvere le buche e la manutenzione stradale.", "2024–2026", "Note e interventi in aula su Zone 30 (FdI)"],
        7:  [2, "Critica alle piste ciclabili realizzate cancellando posti auto o restringendo gli assi viari principali a danno di automobilisti e mezzi di soccorso.", "2024–2026", "Interrogazioni FdI su piste ciclabili e viabilità"],
        8:  [3, "Favorevole a un trasporto pubblico efficiente, ma contrario a penalizzare la viabilità privata con semafori e corsie che congestionano i viali.", "2024–2026", "Dibattito consiliare su mobilità e TEP"],
        9:  [5, "Richiesta di nuovi parcheggi a rotazione a servizio del centro storico e di tariffe agevolate o fasce gratuite sulle strisce blu per rilanciare i negozi di vicinato.", "2024–2026", "Proposte FdI per commercio e sosta in centro"],
        10: [5, "Richiesta pressante di presidi fissi interforze in Stazione, San Leonardo, via Garibaldi e Oltretorrente, con applicazione rigorosa di Daspo urbano e sgomberi.", "2024–2026", "Mozioni sicurezza urbana FdI (Priamo Bocchi)"],
        11: [5, "Firmatari di mozioni in Consiglio comunale per dotare subito la Polizia Locale di Parma del taser, bodycam e turni notturni potenziati.", "2024–2026", "Mozione FdI in Consiglio per dotazione taser"],
        12: [2, "Critica all'approccio basato sulla sola mediazione sociale: di fronte a baby gang, spaccio e aggressioni servono anzitutto controllo del territorio e certezza delle regole.", "2024–2026", "Interventi FdI su baby gang e sicurezza"],
        13: [5, "Richiesta di ordinanze restrittive sugli orari dei minimarket, divieto di vendita di alcolici serali e controlli serrati sulle licenze in zona Stazione e Oltretorrente.", "2024–2026", "Mozioni FdI su degrado e minimarket"],
        14: [2, "Voto contrario al nuovo PUG (Delibera n. 65/2026), giudicato troppo ideologico, punitivo verso la proprietà privata e incapace di dare risposte allo sviluppo produttivo.", "26/6/2026", "Voto contrario al PUG in Consiglio comunale (FdI)"],
        15: [2, "Contrarietà a vincoli comunali sugli affitti brevi che comprimono la proprietà privata; richiesta invece di sgombero immediato degli alloggi ERP occupati abusivamente.", "2025–2026", "Posizione FdI su casa, ERP e affitti brevi"],
        16: [3, "Favorevole al recupero dell'ex Carcere di San Francesco per restituire decoro all'Oltretorrente, senza escludere il concorso di investimenti privati qualificati.", "2024–2026", "Dibattito consiliare su Oltretorrente ed ex Carcere"],
        17: [1, "Forti critiche alle concessioni comunali verso spazi autogestiti o vicini ai centri sociali e richiesta di verifica rigorosa di legalità e sicurezza.", "2024–2026", "Interrogazioni FdI su WoPa e spazi concessi"],
        18: [3, "Favorevole al controllo delle emissioni di Ugozzolo, ma contrario a posizioni ideologiche sugli impianti che rischiano di far aumentare i costi di smaltimento per i parmigiani.", "2024–2026", "Dibattito su ciclo rifiuti e Iren"],
        19: [2, "Critica alla gestione della raccolta porta a porta e ai sacchetti abbandonati sui marciapiedi, denunciando rincari della TARI a fronte di un calo del decoro.", "2024–2026", "Interventi FdI contro rincari TARI e degrado rifiuti"],
        20: [2, "Contestazione delle spese per progetti di depavimentazione quando marciapiedi, strade e sfalci del verde nei quartieri soffrono di carenza di manutenzione.", "2025–2026", "Critiche al bilancio lavori pubblici (FdI)"],
        21: [3, "Critica all'uso di Iren come «bancomat» dei Comuni di centrosinistra tramite i dividendi e richiesta di ridurre le bollette per famiglie e imprese.", "2024–2026", "Interventi in Consiglio su dividendi e tariffe Iren"],
        22: [1, "Voto contrario al project financing a 15 anni per le mense scolastiche, criticando il vincolo quindicennale imposto alla città e l'aumento dei costi.", "2024–2025", "Voto contrario in Consiglio su project financing mense"],
        23: [1, "Netta opposizione agli aumenti delle tariffe delle mense scolastiche scaricati sul ceto medio parmigiano.", "2024–2025", "Voto contrario a rincari tariffe mense e bilancio"],
        24: [2, "Favorevole all'aumento dei posti nido, ma con introduzione di criteri premiali per la residenza storica a Parma e per le famiglie dove entrambi i genitori lavorano.", "2024–2026", "Emendamenti e proposte FdI su graduatorie nidi"],
        25: [1, "Voto contrario agli ordini del giorno sullo Ius Scholae e critiche ai contributi comunali per il Parma Pride, chiedendo priorità per il sostegno alla natalità.", "2024–2026", "Voto contrario in Consiglio a OdG Ius Scholae"]
      }
    },
    {
      id: "Lega", name: "Lega",
      color: "#059669", shape: "square",
      note: "Gruppo consiliare di opposizione di centrodestra (capogruppo Andrea Bettati).",
      data: {
        1:  [5, "Sostegno convinto al potenziamento dell'Aeroporto Verdi e all'allungamento della pista come infrastruttura vitale per le imprese e l'export del territorio.", "2024–2025", "Interventi Lega in Consiglio su Aeroporto Verdi (Andrea Bettati)"],
        2:  [2, "Favorevole allo sviluppo anche logistico e merci dello scalo aeroportuale nel rispetto delle norme ambientali, contro i veti della sinistra radicale.", "2024–2025", "Posizione Lega su Masterplan Aeroporto e Cargo"],
        3:  [3, "Sostegno all'ammodernamento del Tardini ma critica alla Giunta Guerra per i ritardi procedurali e la mancata tutela della viabilità e sosta dei residenti.", "2024–2026", "Note gruppo Lega su progetto Stadio Tardini"],
        4:  [2, "Critiche alle spese per eventi vetrina a fronte delle criticità di sicurezza e manutenzione nei parchi cittadini e nelle frazioni.", "2024–2026", "Interventi in aula su Bilancio e Cittadella (Lega)"],
        5:  [1, "Forte opposizione a nuove chiusure in ZTL e alla penalizzazione degli automobilisti che devono raggiungere il centro storico e l'Oltretorrente.", "2024–2026", "Mozioni e note Lega contro restrizioni ZTL"],
        6:  [1, "Netta contrarietà alla diffusione delle Zone 30 in città, ritenute dannose per la fluidità del traffico e il lavoro di artigiani e corrieri.", "2024–2026", "Posizione Lega contro Parma Città 30"],
        7:  [1, "Contestazione delle piste ciclabili progettate a scapito dei parcheggi e della larghezza delle corsie stradali.", "2024–2026", "Interrogazioni Lega su piste ciclabili e sosta"],
        8:  [3, "Favorevole al rinnovo dei bus TEP, ma contrario a semafori e restringimenti viari che penalizzano il traffico veicolare privato.", "2024–2026", "Dibattito consiliare su PUMS e TPL"],
        9:  [5, "Richiesta di più parcheggi gratuiti o a bassa tariffa attorno al centro storico per fermare la desertificazione commerciale.", "2024–2026", "Proposte Lega per commercio e parcheggi"],
        10: [5, "Richiesta di presidi fissi continuativi, pattuglie miste ed esercito («Strade Sicure») in zona Stazione, San Leonardo e Oltretorrente.", "2024–2026", "Mozioni e presidi Lega su sicurezza Stazione"],
        11: [5, "Battaglia storica della Lega in Consiglio comunale per dotare subito la Polizia Locale di Parma di taser e strumenti di autodifesa.", "2024–2026", "Mozione Lega per taser alla Polizia Locale"],
        12: [1, "Forte critica ai progetti di sola mediazione sociale: contro baby gang e spaccio servono tolleranza zero, espulsioni e presidio del territorio.", "2024–2026", "Interventi Lega su sicurezza e baby gang"],
        13: [5, "Richiesta di giro di vite immediato con chiusure e limiti orari per minimarket ed esercizi che alimentano bivacchi e degrado notturno.", "2024–2026", "Mozioni Lega su minimarket e vendita alcolici"],
        14: [2, "Voto contrario al nuovo PUG comunale, criticato perché ingessa l'edilizia e penalizza le frazioni e il valore delle aree.", "26/6/2026", "Voto contrario al PUG (Gruppo Lega)"],
        15: [2, "Contrarietà a restrizioni sugli affitti brevi dei piccoli proprietari; priorità a controlli rigorosi sulle assegnazioni delle case popolari ACER.", "2025–2026", "Posizione Lega su politiche abitative e ACER"],
        16: [3, "Favorevole al recupero dell'ex Carcere di San Francesco purché garantisca sicurezza, parcheggi e ricadute economiche per l'Oltretorrente.", "2024–2026", "Interventi su rigenerazione Oltretorrente"],
        17: [1, "Contrarietà a concessioni agevolate per spazi autogestiti e richiesta di regole uguali per tutte le associazioni.", "2024–2026", "Posizione Lega su spazi pubblici e WoPa"],
        18: [3, "Approccio pragmatico sugli impianti di smaltimento rifiuti, contrario ai blocchi ideologici che portano all'esportazione dei rifiuti a caro prezzo.", "2024–2026", "Dibattito consiliare su rifiuti e PAIP"],
        19: [2, "Critica al sistema porta a porta in centro storico per il degrado dei sacchetti esposti su strada e l'aumento delle tariffe TARI.", "2024–2026", "Interrogazioni Lega su raccolta rifiuti e Iren"],
        20: [2, "Priorità alla manutenzione di strade, ponti, frazioni e pulizia dei canali rispetto ai progetti del piano Climate Neutral 2030.", "2025–2026", "Interventi Lega su bilancio lavori pubblici"],
        21: [3, "Richiesta a Iren di investire di più nella manutenzione delle reti idriche e nel decoro cittadino riducendo il peso delle tariffe.", "2024–2026", "Atti Consiglio su gestione Iren"],
        22: [1, "Voto contrario al project financing quindicennale sulle mense scolastiche, denunciando l'aggravio di costi per il Comune e le famiglie.", "2024–2025", "Voto contrario su project financing mense (Lega)"],
        23: [1, "Opposizione all'aumento delle rette della ristorazione scolastica per le famiglie del ceto medio.", "2024–2025", "Voto contrario a manovra tariffe mense"],
        24: [2, "Richiesta di dare priorità nelle graduatorie dei nidi comunali e degli alloggi pubblici ai nuclei con anzianità di residenza a Parma.", "2024–2026", "Proposte Lega su criteri accesso nidi e welfare"],
        25: [1, "Netto voto contrario allo Ius Scholae (ritenuto anche estraneo alle competenze comunali) e ai finanziamenti pubblici al Parma Pride.", "2024–2026", "Voto contrario a OdG Ius Scholae in Consiglio"]
      }
    },
    {
      id: "VP", name: "Vignali Sindaco – Forza Italia – Civici",
      color: "#0284C7", shape: "circle",
      note: "Area civica e moderata di centrodestra guidata in Consiglio dall'ex sindaco Pietro Vignali (Vignali Sindaco) insieme a Civiltà Parmigiana (Maria Federica Ubaldi) e Forza Italia.",
      data: {
        1:  [5, "Pieno sostegno al rilancio dell'Aeroporto «Giuseppe Verdi» come infrastruttura strategica per l'economia e l'internazionalizzazione di Parma.", "2024–2025", "Interventi in Consiglio su Aeroporto Verdi (Pietro Vignali)"],
        2:  [2, "Favorevole a uno sviluppo industriale e commerciale equilibrato dello scalo, criticando i veti paralizzanti della sinistra interna alla maggioranza.", "2024–2025", "Note gruppo Vignali Sindaco su Masterplan Aeroporto"],
        3:  [2, "Forti critiche al progetto del nuovo Tardini presentato alla città: contestati la concessione a 90 anni, l'impatto sul quartiere e la mancanza di un vero studio su aree alternative.", "2024–2026", "Interventi e dossier critici di Pietro Vignali e Maria Federica Ubaldi sul Tardini"],
        4:  [3, "Sostegno alla vocazione culturale di Parma, ma forti rilievi sulla gestione del Parco della Cittadella e sulla carenza di manutenzione ordinaria.", "2024–2026", "Interpellanze su Cittadella e gestione eventi"],
        5:  [2, "Critica all'estensione rigida della ZTL senza un contestuale piano di accessibilità e parcheggi per residenti, anziani e attività commerciali.", "2024–2026", "Proposte Vignali Sindaco / Civiltà Parmigiana su centro storico"],
        6:  [2, "Favorevole alla sicurezza stradale davanti a scuole e ospedali, ma contrario a Zone 30 generalizzate sulle arterie di scorrimento.", "2024–2026", "Interventi in Consiglio su viabilità e Zone 30"],
        7:  [2, "Favorevole alla mobilità ciclabile ma critico verso le corsie realizzate senza progettazione integrata e a scapito della sosta di quartiere.", "2024–2026", "Atti consiliari su piste ciclabili e Biciplan"],
        8:  [3, "Sostegno al potenziamento dei mezzi ecologici TEP, chiedendo però il ripristino di corse capillari per i quartieri e le frazioni.", "2024–2026", "Interventi su servizio TEP e trasporto pubblico"],
        9:  [5, "Proposta di potenziare i parcheggi in struttura e a rotazione lungo i viali e introdurre agevolazioni tariffarie per rivitalizzare il centro storico.", "2024–2026", "Mozioni per il rilancio del commercio in centro (Vignali)"],
        10: [5, "Denuncia costante del degrado in Stazione, San Leonardo e Oltretorrente, con richiesta di presidi fissi della Polizia Locale e pattugliamenti interforze.", "2024–2026", "Interpellanze e note su sicurezza urbana (Pietro Vignali)"],
        11: [4, "Favorevole a dotare la Polizia Locale di presidi di autotutela (incluso il taser) e a riorganizzare il corpo per restituire i vigili di quartiere alle strade.", "2024–2026", "Voto favorevole a mozioni su dotazioni Polizia Locale"],
        12: [2, "Riconoscimento del ruolo del volontariato e del terzo settore, ma critica all'assenza di presidio e controllo della legalità nei quartieri.", "2024–2026", "Dibattito consiliare su sicurezza e disagio giovanile"],
        13: [5, "Richiesta di ordinanze rigorose sul decoro, sugli orari degli esercizi e contro il bivacco e il consumo di alcol in strada in Oltretorrente e Stazione.", "2024–2026", "Proposte su decoro urbano e commercio"],
        14: [3, "Astensione/voto critico sul nuovo PUG (Delibera n. 65/2026): condivisa la rigenerazione urbana, ma contestato l'eccesso di burocrazia che frena il recupero edilizio.", "26/6/2026", "Interventi in aula sul PUG (Vignali / Ubaldi)"],
        15: [2, "Contrarietà a limiti punitivi sugli affitti brevi; proposta invece di incentivi fiscali (IMU agevolata) e fondi di garanzia per chi affitta a canone concordato a studenti e famiglie.", "2025–2026", "Proposte abitative centrodestra civico e Forza Italia"],
        16: [4, "Forte attenzione storica al recupero dell'Oltretorrente e di San Francesco del Prato / ex Carcere per funzioni culturali, universitarie e di servizio alla città.", "2024–2026", "Interventi su rigenerazione Oltretorrente"],
        17: [2, "Richiesta di regole trasparenti, bandi pubblici e pieno rispetto delle norme di sicurezza per tutte le concessioni di immobili comunali come il WoPa.", "2024–2026", "Interpellanze su gestione immobili comunali"],
        18: [4, "Difesa del tetto di autolimitazione sui rifiuti bruciati a Ugozzolo e richiesta di massimo controllo ambientale sul polo Iren.", "2024–2026", "Posizione Vignali su termovalorizzatore Ugozzolo"],
        19: [2, "Forti critiche al disservizio nella raccolta rifiuti e ai sacchetti sui marciapiedi, chiedendo la revisione del sistema porta a porta nel centro storico.", "2024–2026", "Mozioni e denunce su decoro urbano e raccolta Iren"],
        20: [3, "Favorevole alla cura del verde urbano, ma critico verso interventi spot di depavimentazione che tolgono parcheggi senza curare il verde esistente.", "2025–2026", "Interventi su lavori pubblici e manutenzione verde"],
        21: [4, "Critica allo squilibrio di peso di Parma dentro Iren rispetto a Torino e Genova e richiesta di tariffe più eque e maggiori investimenti in città.", "2024–2026", "Interventi di Pietro Vignali su governance e tariffe Iren"],
        22: [1, "Dura battaglia in Consiglio contro il project financing di 15 anni per le mense scolastiche, denunciato come un'operazione onerosa che ingessa il Comune e peggiora il servizio.", "2024–2025", "Voto contrario e dossier su project financing mense (Vignali / Ubaldi)"],
        23: [2, "Contestazione dell'aumento delle tariffe delle mense scolastiche e della pressione tariffaria sulle famiglie parmigiane del ceto medio.", "2024–2025", "Voto contrario a manovra tariffe mense in Consiglio"],
        24: [3, "Sostegno all'ampliamento dei posti nido comunali e convenzionati (sistema paritario e FISM) per abbattere le liste d'attesa delle famiglie lavoratrici.", "2024–2026", "Proposte su nidi e sistema integrato pubblico-privato"],
        25: [2, "Posizione moderata/contraria su delibere ideologiche di politica nazionale in Consiglio comunale (come lo Ius Scholae), chiedendo di concentrarsi sui problemi amministrativi di Parma.", "2024–2026", "Posizione in aula su OdG Ius Scholae"]
      }
    }
  ],

  guide: {
    1: {
      ctx: "Il Masterplan dell'Aeroporto «Giuseppe Verdi» prevede l'allungamento della pista di volo e l'adeguamento delle infrastrutture aeroportuali gestite da Sogeap. L'atto in Consiglio comunale ha registrato il voto favorevole di PD, Effetto Parma e centrodestra, ma con il voto contrario/dissenso della sinistra ecologista.",
      pro: "Uno scalo moderno e con una pista adeguata permette a Parma di attrarre nuove compagnie passeggeri, sostenere il turismo enogastronomico e fieristico (Cibus) ed evitare l'isolamento infrastrutturale.",
      con: "L'ampliamento dello scalo a pochi chilometri dal tessuto urbano comporta consumo di suolo, aumento del rumore e delle emissioni sui quartieri nord, a fronte di bilanci aeroportuali storicamente in perdita."
    },
    2: {
      ctx: "Accanto ai voli passeggeri, il piano di sviluppo aeroportuale ha sollevato il caso dell'attivazione di voli merci (Cargo). I comitati «No Cargo» e le forze ecologiste chiedono lo stop definitivo ai voli merci, mentre il centrodestra difende la vocazione logistica dello scalo.",
      pro: "Bloccare lo sviluppo Cargo evita il sorvolo di grandi aerei merci e il traffico continuo di tir sulla tangenziale nord, proteggendo la salute dei residenti di Baganzola, Golese e Fognano.",
      con: "Senza una componente commerciale e cargo per il distretto agroalimentare e farmaceutico parmense, l'Aeroporto Verdi rischia di non raggiungere mai l'equilibrio economico-finanziario."
    },
    3: {
      ctx: "Il progetto di rifacimento dello Stadio Ennio Tardini prevede un investimento privato del Parma Calcio nell'attuale sede storica a ridosso del quartiere Cittadella. Il dibattito verte su durata della concessione, cantiere unico o a stralci e impatto sul traffico residenziale.",
      pro: "Il Tardini è un simbolo identitario di Parma dal 1923: riqualificarlo sul posto con capitali privati rigenera un impianto obsoleto senza consumare nuovo suolo agricolo in periferia.",
      con: "Uno stadio moderno e multifunzionale in pieno tessuto residenziale tra Cittadella e centro storico aggrava traffico, carenza di parcheggi e problemi di ordine pubblico durante gli eventi."
    },
    4: {
      ctx: "Parma è stata proclamata Capitale Europea dei Giovani 2027 dopo l'esperienza di Capitale Italiana della Cultura. L'uso dei parchi storici come la Cittadella per concerti ed eventi divide chi punta sull'attrattività e chi chiede maggiore tutela del verde e della quiete.",
      pro: "Grandi eventi culturali, musicali e giovanili generano indotto per alberghi, ristorazione e commercio e rafforzano il profilo internazionale ed universitario di Parma.",
      con: "Concentrare grandi manifestazioni nel Parco della Cittadella o in centro usura i prati storici, limita la fruizione sportiva quotidiana dei residenti e sottrae risorse alle manutenzioni dei quartieri."
    },
    5: {
      ctx: "L'amministrazione comunale ha confermato e potenziato i varchi della ZTL e le aree pedonali nel centro storico e in Oltretorrente. Le opposizioni e parte dei commercianti lamentano difficoltà di accesso e calo degli acquisti.",
      pro: "Ridurre il traffico privato in centro storico e in Oltretorrente migliora la qualità dell'aria nella Pianura Padana, valorizza i monumenti e rende le strade più sicure e attrattive per pedoni e dehors.",
      con: "Limitazioni troppo rigide senza parcheggi comodi scoraggiano i clienti provenienti dalla provincia e dalle frazioni, penalizzando le botteghe storiche rispetto ai centri commerciali esterni."
    },
    6: {
      ctx: "Il Piano Urbano della Mobilità Sostenibile (PUMS) prevede l'estensione delle Zone 30 e di attraversamenti rialzati nei quartieri residenziali e scolastici di Parma.",
      pro: "Abbassare la velocità a 30 km/h nelle vie di quartiere riduce drasticamente il rischio di incidenti gravi per pedoni, anziani, bambini e ciclisti, favorendo la convivenza stradale.",
      con: "Estendere il limite di 30 km/h su troppe strade rallenta gli spostamenti lavorativi e rischia di spostare code ed emissioni sugli assi principali già congestionati."
    },
    7: {
      ctx: "Con il Biciplan il Comune di Parma sta ricucendo e allargando la rete delle piste ciclabili urbane, intervenendo su incroci e assi radiali.",
      pro: "Parma ha una tradizione ciclabile altissima: mettere in sicurezza i tratti discontinui con corsie protette permette anche a famiglie e studenti di muoversi in bici riducendo traffico e smog.",
      con: "In diverse vie l'inserimento delle corsie ciclabili ha eliminato decine di stalli di sosta per i residenti e ristretto le carreggiate, rendendo difficoltoso il transito di bus e mezzi di soccorso."
    },
    8: {
      ctx: "Grazie a oltre 13 milioni di euro di fondi MASE e PSNMS, Parma e TEP stanno rinnovando la flotta con filobus e bus elettrici e riqualificando gli assi viari con priorità semaforica ai mezzi pubblici.",
      pro: "Un trasporto pubblico veloce, puntuale e a zero emissioni è l'unica vera alternativa all'auto privata per pendolari e studenti, riducendo l'inquinamento atmosferico cittadino.",
      con: "Le corsie riservate e i semafori dedicati ai bus, se inseriti su viali a sezione ridotta, rischiano di creare lunghe code per il traffico ordinario nelle ore di punta."
    },
    9: {
      ctx: "Opposizioni e associazioni di categoria chiedono nuovi parcheggi a rotazione vicino ai viali di circonvallazione e tariffe più basse sulle strisce blu; la maggioranza punta invece sui parcheggi scambiatori esterni.",
      pro: "Parcheggi accessibili e tariffe agevolate per le prime ore di sosta sono indispensabili per permettere a famiglie e anziani di frequentare i negozi e i servizi del centro storico.",
      con: "Nuovi parcheggi a ridosso del centro e tariffe stracciate attirano più auto lungo i viali, vanificando gli sforzi per spostare la mobilità verso bus, bici e parcheggi scambiatori."
    },
    10: {
      ctx: "I quartieri Stazione, San Leonardo, via Garibaldi e Oltretorrente sono al centro del dibattito sulla sicurezza per episodi di spaccio, risse e degrado. Il Comune ha attivato un nuovo presidio della Polizia Locale in Stazione.",
      pro: "Presidi fissi continuativi, pattuglie interforze e l'applicazione del Daspo urbano sono essenziali per restituire sicurezza reale ai residenti, ai pendolari e ai commercianti.",
      con: "I soli blitz e le ordinanze di allontanamento spostano il problema di poche vie senza risolverlo se non sono accompagnati da politiche abitative, sociali e di riqualificazione urbana."
    },
    11: {
      ctx: "I gruppi di centrodestra (FdI, Lega, Vignali) hanno presentato mozioni in Consiglio comunale per dotare del taser la Polizia Locale di Parma e potenziare i turni notturni; la maggioranza ha votato contro il taser.",
      pro: "Il taser è uno strumento non letale già in uso alle forze di polizia statali e in molti Comuni: tutela l'incolumità degli agenti durante gli interventi più pericolosi con soggetti violenti.",
      con: "La Polizia Locale ha funzioni di prossimità e polizia amministrativa: introdurre il taser comporta rischi sanitari per i soggetti fragili e snatura il ruolo del vigile di quartiere."
    },
    12: {
      ctx: "Per prevenire il fenomeno delle baby gang e della marginalità giovanile, l'amministrazione investe in educativa di strada, mediazione sociale e spazi aggregativi nei quartieri.",
      pro: "Intercettare il disagio giovanile nelle piazze e nelle scuole con educatori professionali, sport gratuito e centri culturali previene la devianza prima che diventi reato.",
      con: "Di fronte a reati predatori, aggressioni e bande organizzate la sola mediazione educativa è insufficiente e rischia di trasmettere un messaggio di impunità."
    },
    13: {
      ctx: "In zona Stazione, via Bixio e via Garibaldi i residenti segnalano bivacchi notturni legati alla vendita serale di alcolici nei minimarket. Il dibattito riguarda l'inasprimento delle ordinanze sindacali.",
      pro: "Limitare gli orari di vendita di alcolici da asporto e sanzionare con la chiusura gli esercizi che violano le regole riduce drasticamente schiamazzi, risse e bottiglie abbandonate di notte.",
      con: "Ordinanze generalizzate penalizzano anche gli esercenti onesti e rischiano di alimentare il mercato abusivo se non sono supportate da controlli mirati sulle singole violazioni."
    },
    14: {
      ctx: "Il 26 giugno 2026 il Consiglio comunale di Parma ha approvato il nuovo Piano Urbanistico Generale (PUG, Delibera n. 65/2026) in attuazione della L.R. 24/2017, fissando il principio dello stop al consumo di nuovo suolo agricolo.",
      pro: "Fermare la cementificazione della campagna parmense tutela il suolo fertile, riduce il rischio di allagamenti e indirizza gli investimenti sul recupero degli edifici e capannoni dismessi.",
      con: "Vincoli urbanistici troppo rigidi e oneri elevati rischiano di bloccare l'edilizia, far salire i prezzi delle case e spingere imprese e famiglie a spostarsi nei comuni della cintura."
    },
    15: {
      ctx: "A Parma la forte domanda di alloggi per studenti universitari, lavoratori e turisti ha ridotto gli affitti a lungo termine. Il Comune lavora con Parma Housing Center e Regione su edilizia sociale e regole per gli affitti brevi.",
      pro: "Potenziare l'edilizia residenziale sociale e limitare la trasformazione di interi palazzi del centro in affittacamere turistici è indispensabile per garantire il diritto alla casa a famiglie e studenti.",
      con: "Vincolare gli affitti brevi lede la proprietà privata dei piccoli risparmiatori; per aumentare gli alloggi in affitto servono piuttosto agevolazioni fiscali e garanzie contro le morosità."
    },
    16: {
      ctx: "Il complesso monumentale dell'ex Carcere di San Francesco e l'area di San Francesco del Prato rappresentano una delle più importanti partite di rigenerazione dell'Oltretorrente, con progetti di riuso universitario e pubblico.",
      pro: "Mantenere una forte regia pubblica e universitaria sull'ex Carcere di San Francesco restituisce alla città un bene storico straordinario e porta vita quotidiana e servizi in Oltretorrente.",
      con: "I soli fondi e tempi pubblici rischiano di allungare di decenni i cantieri: coinvolgere anche capitali privati qualificati può accelerare il recupero e creare nuove funzioni economiche."
    },
    17: {
      ctx: "Il futuro di spazi rigenerati come il WoPa (Workout Pasubio, nell'ex area Parma Reti) e delle concessioni alle realtà associative e giovanili è stato più volte discusso in Consiglio comunale.",
      pro: "Spazi come il WoPa offrono cultura accessibile, laboratori creativi e socialità giovanile fuori dalle logiche commerciali, rigenerando immobili pubblici altrimenti abbandonati.",
      con: "Gli immobili comunali devono essere assegnati tramite bandi trasparenti aperti a tutte le associazioni, garantendo il pieno rispetto delle norme di sicurezza, agibilità e pluralismo."
    },
    18: {
      ctx: "Il termovalorizzatore del Polo Ambientale Integrato (PAIP) di Ugozzolo, gestito da Iren Ambiente, opera con un tetto massimo di autolimitazione sui rifiuti trattati annualmente.",
      pro: "Mantenere il tetto rigido di autolimitazione, bloccare i rifiuti da fuori provincia e preparare il superamento dell'impianto spinge verso l'economia circolare e tutela la qualità dell'aria.",
      con: "Il termovalorizzatore di Ugozzolo produce teleriscaldamento ed energia per migliaia di famiglie parmigiane e garantisce l'autosufficienza nello smaltimento senza ricorrere alle discariche."
    },
    19: {
      ctx: "Parma applica da anni la raccolta differenziata porta a porta con misurazione puntuale del residuo. Le opposizioni criticano però il degrado dei sacchetti esposti sui marciapiedi del centro storico.",
      pro: "La raccolta porta a porta con tariffa puntuale ha portato Parma ai vertici nazionali per percentuale di raccolta differenziata, premiando chi produce meno rifiuti indifferenziati.",
      con: "Nel centro storico l'esposizione quotidiana di sacchetti e bidoncini sui marciapiedi crea problemi di decoro e igiene urbana, a fronte di tariffe TARI comunque elevate."
    },
    20: {
      ctx: "Con il Climate City Contract «Parma Climate Neutral 2030» e le norme del nuovo PUG, il Comune prevede investimenti in forestazione urbana, depavimentazione di aree asfaltate e invasi di laminazione.",
      pro: "De-sigillare il suolo asfaltato e piantare nuovi alberi riduce le isole di calore estive e protegge i quartieri dalle bombe d'acqua sempre più frequenti.",
      con: "Prima di spendere risorse per depavimentare piazzali o togliere parcheggi, il Comune dovrebbe garantire la manutenzione ordinaria di strade, marciapiedi e parchi già esistenti."
    },
    21: {
      ctx: "Il Comune di Parma è socio pubblico della multiutility quotata Iren (insieme a Torino, Genova, Reggio Emilia e Piacenza), che gestisce ciclo idrico, rifiuti e teleriscaldamento.",
      pro: "I Comuni soci devono far valere il controllo pubblico per vincolare gli utili di Iren al rinnovo delle condotte idriche e al contenimento delle bollette per i cittadini.",
      con: "Iren è una società quotata sul mercato: i dividendi distribuiti al Comune di Parma finanziano ogni anno milioni di euro di spesa sociale e investimenti nel bilancio cittadino."
    },
    22: {
      ctx: "L'amministrazione Guerra ha scelto di affidare la gestione delle mense scolastiche e la riqualificazione dei centri cottura tramite un project financing di 15 anni. La scelta è stata votata da PD ed Effetto Parma ma contestata da opposizioni e sinistra.",
      pro: "Il partenariato pubblico-privato di lungo periodo permette di ristrutturare e ammodernare cucine e refettori scolastici con capitali privati, mantenendo il controllo pubblico sugli standard di qualità.",
      con: "Vincolare per 15 anni le mense scolastiche a un gestore privato irrigidisce i costi a carico del Comune e delle famiglie ed esternalizza un servizio educativo delicatissimo."
    },
    23: {
      ctx: "Per far fronte all'inflazione sui costi alimentari ed energetici, il Comune ha aggiornato le tariffe delle mense scolastiche mantenendo invariate le quote per le fasce ISEE basse e adeguando quelle per i redditi più alti.",
      pro: "In una fase di forti rincari delle materie prime, chiedere qualche euro in più alle famiglie con ISEE alto è la scelta più equa per proteggere la gratuità e le agevolazioni dei nuclei più fragili.",
      con: "Le famiglie del ceto medio parmigiano pagano già tasse comunali e nazionali altissime: scaricare su di loro i rincari delle mense riduce il potere d'acquisto di chi lavora."
    },
    24: {
      ctx: "Il Comune di Parma sta realizzando nuovi poli per l'infanzia con fondi PNRR per ridurre le liste d'attesa nei nidi comunali e convenzionati.",
      pro: "L'accesso al nido deve rispondere al bisogno educativo del bambino e alle condizioni economiche e lavorative della famiglia (ISEE), garantendo pari opportunità a tutti i residenti.",
      con: "Nelle graduatorie comunali andrebbe riconosciuto un punteggio premiale a chi risiede e lavora stabilmente a Parma da più anni e contribuisce da tempo alla fiscalità locale."
    },
    25: {
      ctx: "Il Consiglio comunale di Parma ha approvato ordini del giorno per il riconoscimento simbolico dello Ius Scholae ai minori stranieri che studiano in Italia e sostiene con patrocinio il Parma Pride.",
      pro: "Promuovere lo Ius Scholae e patrocinare il Parma Pride afferma una città aperta, inclusiva e attenta ai diritti di migliaia di ragazze e ragazzi che crescono nelle scuole parmigiane.",
      con: "La legge sulla cittadinanza è competenza esclusiva del Parlamento nazionale: il Consiglio comunale dovrebbe occuparsi di strade, sicurezza e servizi anziché di mozioni ideologiche."
    }
  }
};
