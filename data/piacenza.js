/* ==========================================================================
   Scheda Politica — Piacenza · Elezioni comunali 2027
   25 affermazioni · 6 sezioni · 4 assi · 6 forze politiche cittadine
   Ogni posizione ha fonte verificabile (voto in Consiglio comunale, atto o
   dichiarazione pubblica documentata).
   ========================================================================== */

const CFG = {
  id: "piacenza",
  version: "piacenza-0.1",
  storageKey: "scheda.piacenza.2027.v1",
  title: "Scheda Politica · Piacenza",
  subtitle: "Elezioni comunali 2027 · 25 affermazioni sui temi della città",
  banner: "Per Piacenza le posizioni delle 6 principali forze politiche cittadine sono documentate su tutte le 25 affermazioni tramite voti in Consiglio comunale a Palazzo Mercanti, atti e dichiarazioni pubbliche. In vista delle comunali 2027 i profili saranno aggiornati con i programmi elettorali ufficiali.",
  description: "25 affermazioni concrete su ciò che si discute e vota a Piacenza: Piazza Cittadella e tutela degli alberi, Nuovo Ospedale alla Madonnina, poli logistici e PUG, mobilità e ZTL, sicurezza e taser, ex Manifattura Tabacchi e nuova Tariffa Puntuale rifiuti (TCP).",
  scale: ["Per niente","Poco","Così così","Abbastanza","Del tutto"],

  axes: [
    {
      id: "mob",
      name: "Mobilità e centro storico",
      l: "Accessibilità auto e parcheggi",
      r: "Mobilità dolce, ZTL e TPL",
      desc: "A sinistra chi chiede più parcheggi a rotazione, meno ZTL e priorità alle arterie stradali; a destra chi punta su pedonalizzazioni, Biciplan, Zone 30 e potenziamento dei bus urbani.",
      p: [9, 10, 11, 12],
      m: [4, 13]
    },
    {
      id: "svil",
      name: "Urbanistica, logistica e ambiente",
      l: "Espansione produttiva e grandi cantieri",
      r: "Stop consumo suolo e tutela del verde",
      desc: "A sinistra chi privilegia il nuovo Ospedale su area verde alla Madonnina e norme più flessibili per le imprese; a destra chi chiede lo stop ai poli logistici, la difesa degli alberi storici e il recupero dell'esistente.",
      p: [1, 2, 5, 6],
      m: [3, 8]
    },
    {
      id: "sic",
      name: "Sicurezza e convivenza urbana",
      l: "Prevenzione sociale e mediazione",
      r: "Presidio, taser e ordinanze",
      desc: "A sinistra chi affronta i nodi di via Roma e zona Stazione con educativa di strada, doposcuola e integrazione; a destra chi chiede presidi fissi interforze, taser alla Polizia Locale, Daspo urbano e stretta sui minimarket.",
      p: [14, 15, 17],
      m: [16]
    },
    {
      id: "wel",
      name: "Welfare, lavoro e diritti",
      l: "Sussidiarietà, mercato e famiglia tradizionale",
      r: "Intervento pubblico, casa e diritti",
      desc: "A sinistra chi chiede criteri premiali di residenza storica nei servizi e contesta delibere sui diritti civili; a destra chi punta su clausole sociali nel lavoro, social housing pubblico, nidi universali e Ius Scholae.",
      p: [7, 18, 19, 21, 24, 25],
      m: []
    }
  ],

  sections: [
    {
      id: 1, name: "Piazza Cittadella, Nuovo Ospedale e grandi opere",
      desc: "Il futuro di Piazza Cittadella dopo la risoluzione del contratto, il taglio dei tigli, il Nuovo Ospedale alla Madonnina e il nodo del Po",
      context: "A Piacenza la consiliatura 2022–2027 è stata segnata dal caso di Piazza Cittadella — dal taglio dei 15 alberi nel novembre 2024 fino alla risoluzione del contratto con il concessionario privato nel settembre 2025 — e dal acceso confronto sulla localizzazione del Nuovo Ospedale nell'area della Madonnina.",
      q: [
        [1, "Piazza Cittadella verde e stop definitivo al parcheggio interrato", "Dopo la risoluzione del contratto con il gestore privato (settembre 2025), il Comune deve rinunciare definitivamente al parcheggio interrato in Piazza Cittadella per realizzarvi una piazza verde alberata."],
        [2, "Divieto di abbattimento degli alberi storici nei cantieri", "Nella progettazione delle opere pubbliche il Comune deve imporre la salvaguardia degli alberi sani esistenti (evitando tagli come quelli di Piazza Cittadella e via Boselli), anche modificando i cantieri."],
        [3, "Nuovo Ospedale nell'area della Madonnina", "È giusto realizzare il Nuovo Ospedale di Piacenza nell'area della Madonnina prevista dal PUG, anziché ampliare l'attuale ospedale in via Taverna o recuperare aree militari dismesse."],
        [4, "Priorità a Ponte sul Po, tangenziale e viabilità", "Il Comune deve dare priorità assoluta allo sblocco delle opere viarie sul nodo del Ponte sul Po e della tangenziale rispetto agli interventi di limitazione del traffico in città."]
      ]
    },
    {
      id: 2, name: "Logistica, lavoro, PUG e consumo di suolo",
      desc: "I limiti ai capannoni della logistica nel PUG, le compensazioni ambientali, la tutela del lavoro e le regole per le imprese",
      context: "Crocevia autostradale e ferroviario tra Emilia e Lombardia, Piacenza vive da vent'anni il dilemma della logistica. Il nuovo Piano Urbanistico Generale (PUG) discusso a Palazzo Mercanti punta a circoscrivere i capannoni al polo di Le Mose, mentre si discute di oneri ecologici e qualità del lavoro.",
      q: [
        [5, "Stop a nuova logistica fuori dal polo di Le Mose", "Il nuovo Piano Urbanistico Generale (PUG) deve bloccare qualsiasi nuovo insediamento logistico fuori dal polo di Le Mose, fissando un tetto rigido al consumo di suolo agricolo."],
        [6, "Oneri ecologici e sociali obbligatori per la logistica", "Agli operatori della logistica vanno imposti contributi straordinari obbligatori per finanziare piste ciclabili, trasporto pubblico per i lavoratori, fasce boscate e manutenzione stradale."],
        [7, "Clausole sociali e salario minimo negli appalti comunali", "Il Comune deve vincolare i propri appalti e i protocolli con le imprese a clausole stringenti sul salario minimo contrattuale, sulla sicurezza e contro i subappalti a cascata."],
        [8, "Meno vincoli nel PUG per imprese e frazioni", "Le norme del PUG devono essere rese più flessibili per favorire l'ampliamento delle imprese produttive locali e i piccoli interventi edilizi nelle frazioni."]
      ]
    },
    {
      id: 3, name: "Mobilità, ZTL, Biciplan e sosta",
      desc: "ZTL e isole pedonali in centro storico, Biciplan, Zone 30, trasporto pubblico SETA e parcheggi per il commercio",
      context: "L'aggiornamento del Piano Urbano del Traffico (PUT), del PUMS e del Biciplan punta a ridurre l'inquinamento atmosferico nella conca padana potenziando ciclabili e isole pedonali, ma si scontra con le richieste di parcheggi e accessibilità dopo la chiusura dei cantieri in centro.",
      q: [
        [9, "Estensione ZTL e aree pedonali nel centro storico", "Il Comune deve mantenere ed estendere la ZTL e le isole pedonali nel centro storico (Piazza Cavalli, Corso Vittorio Emanuele e vie limitrofe) per ridurre traffico e smog."],
        [10, "Biciplan e nuove corsie ciclabili protette", "Lo sviluppo della rete ciclabile prevista dal Biciplan deve proseguire anche quando comporta la riduzione di stalli di sosta su strada o il riordino dei sensi di marcia."],
        [11, "Zone 30 diffuse nei quartieri residenziali", "Il limite di velocità a 30 km/h e gli attraversamenti pedonali rialzati vanno estesi alla maggioranza delle strade residenziali e scolastiche di Piacenza."],
        [12, "Potenziamento bus SETA e collegamenti con le frazioni", "Il Comune deve investire maggiori risorse per aumentare la frequenza dei bus urbani SETA (anche in fascia serale e verso le frazioni) con mezzi elettrici a zero emissioni."],
        [13, "Più parcheggi gratuiti o agevolati attorno al centro", "Per sostenere i negozi del centro storico bisogna aumentare i posti auto a rotazione gratuita o a tariffa agevolata a ridosso del centro."]
      ]
    },
    {
      id: 4, name: "Sicurezza, Stazione, via Roma e Polizia Locale",
      desc: "Presidi in zona Stazione e Giardini Margherita, dotazione del taser alla Polizia Locale, educativa di strada e minimarket",
      context: "La sicurezza e la convivenza nei quartieri Stazione, Giardini Margherita, via Roma e Piazza Cavalli sono al centro del confronto consiliare: il centrodestra chiede taser, presidi fissi e Daspo urbano; il centrosinistra e la sinistra civica puntano su rigenerazione sociale, vigili di quartiere e mediazione.",
      q: [
        [14, "Presidi fissi in Stazione, Giardini Margherita e via Roma", "In zona Stazione, Giardini Margherita e via Roma servono presidi fissi continuativi e un'applicazione rigorosa del Daspo urbano e delle ordinanze anti-bivacco."],
        [15, "Taser alla Polizia Locale e pattuglie notturne", "Gli agenti della Polizia Locale di Piacenza devono essere dotati di pistola a impulsi elettrici (taser) e impiegati stabilmente nei turni serali e notturni."],
        [16, "Educativa di strada, doposcuola e mediazione in via Roma", "Il disagio giovanile e le tensioni nei quartieri multietnici si affrontano investendo soprattutto in educativa di strada, mediazione culturale e centri aggregativi anziché in misure repressive."],
        [17, "Stretta sugli orari dei minimarket e alcolici serali", "Il Comune deve inasprire le ordinanze con chiusure serali anticipate per i minimarket e divieto di vendita di alcolici da asporto nelle zone più esposte al degrado."]
      ]
    },
    {
      id: 5, name: "Rigenerazione urbana, ex aree militari e casa",
      desc: "Ex Manifattura Tabacchi all'Infrangibile, ex Ospedale Militare, Laboratorio Pontieri ed edilizia pubblica ACER",
      context: "Piacenza ha un'altissima concentrazione di aree militari e industriali dismesse. I cantieri PNRR/Fondo Estia all'ex Manifattura Tabacchi, il nuovo polo scolastico al Laboratorio Pontieri e il protocollo per l'ex Ospedale Militare ridisegnano interi quartieri della città.",
      q: [
        [18, "Ex Manifattura Tabacchi: priorità a social housing e scuola", "Nell'area dell'ex Manifattura Tabacchi (Infrangibile) vanno privilegiati alloggi a canone calmierato (social housing), il nuovo polo scolastico e il verde pubblico rispetto all'edilizia libera privata."],
        [19, "Ex Ospedale Militare ed ex Lusignani a uso pubblico e universitario", "I grandi complessi militari dismessi (ex Ospedale Militare di viale Palmerio ed ex Caserma Lusignani) devono essere destinati a poli universitari (Medicina), culturali e parchi pubblici."],
        [20, "Nuova scuola al Laboratorio Pontieri con cofinanziamento comunale", "È giusto concentrare le risorse comunali per completare il nuovo polo scolastico e sportivo nell'ex Laboratorio Pontieri entro le scadenze PNRR, coprendo anche i rincari dei cantieri."],
        [21, "Piano straordinario per il recupero degli alloggi ACER sfitti", "Il Comune deve stanziare risorse straordinarie di bilancio per ristrutturare rapidamente gli alloggi popolari ACER non assegnati e rifinanziare il fondo affitto."]
      ]
    },
    {
      id: 6, name: "Tariffa Puntuale Rifiuti (TCP), Iren, nidi e diritti",
      desc: "Il passaggio dalla TARI alla TCP nel 2026, il ruolo del Comune in Iren, le liste d'attesa nei nidi e i diritti civili",
      context: "Dal 1° gennaio 2026 Piacenza è passata dalla TARI alla Tariffa Corrispettiva Puntuale (TCP) gestita da Iren Ambiente, calcolata sui conferimenti effettivi di indifferenziato. La riforma ha acceso uno scontro durissimo in Consiglio comunale e in Atersir tra maggioranza, opposizioni e comitati.",
      q: [
        [22, "Conferma della Tariffa Corrispettiva Puntuale (TCP) sui rifiuti", "È giusto mantenere la nuova Tariffa Corrispettiva Puntuale (TCP) introdotta nel 2026 che misura i conferimenti di indifferenziato secondo il principio «chi inquina paga»."],
        [23, "Maggiore peso del Comune in Iren per calmierare le bollette", "Il Comune di Piacenza deve far valere le proprie quote in Iren per vincolare gli utili al miglioramento della raccolta rifiuti e al contenimento delle tariffe anziché ai dividendi finanziari."],
        [24, "Asili nido comunali con priorità basata sull'ISEE", "Il Comune deve puntare all'azzeramento delle liste d'attesa nei nidi d'infanzia assegnando i posti in base alla condizione economica (ISEE) e lavorativa, senza vincoli di residenza storica."],
        [25, "Patrocinio al Pride e cittadinanza simbolica Ius Scholae", "Il Comune deve sostenere le iniziative per i diritti LGBTQ+ e promuovere il riconoscimento simbolico della cittadinanza ai minori stranieri che studiano nelle scuole piacentine (Ius Scholae)."]
      ]
    }
  ],

  subjects: [
    {
      id: "PD", name: "Partito Democratico",
      color: "#C0392B", shape: "circle",
      note: "Principale gruppo consiliare di maggioranza a sostegno della sindaca Katia Tarasconi.",
      data: {
        1:  [4, "Sostegno alla risoluzione del contratto con Piacenza Parcheggi (settembre 2025) per inadempienze del privato e avvio della riprogettazione pubblica di Piazza Cittadella.", "2025–2026", "Atti Consiglio comunale su risoluzione contratto Piazza Cittadella (Gruppo PD)"],
        2:  [2, "Difesa nel 2024 della continuità amministrativa del cantiere di Piazza Cittadella per evitare penali milionarie all'ente, pur prevedendo nuove piantumazioni compensative.", "2024–2025", "Voti di maggioranza in Consiglio su Piazza Cittadella"],
        3:  [5, "Pieno sostegno alla localizzazione del Nuovo Ospedale nell'area della Madonnina inserita nel PUG e al piano delle opere viarie collegate.", "2024–2026", "Voto favorevole a indirizzi PUG e Nuovo Ospedale"],
        4:  [4, "Sostegno al confronto con ANAS e Ministero per il nodo del Ponte sul Po e la tangenziale, integrato però con gli obiettivi di mobilità sostenibile urbana.", "2024–2026", "Ordini del giorno maggioranza su viabilità e Ponte Po"],
        5:  [5, "Difesa della scelta del PUG di circoscrivere lo sviluppo logistico al solo polo di Le Mose, fermando la dispersione di capannoni nella provincia.", "2025–2026", "Controdeduzioni e indirizzi PUG (Assessorato e Gruppo PD)"],
        6:  [5, "Sostegno al meccanismo di perequazione e agli oneri ecologici e infrastrutturali a carico degli insediamenti logistici nel PUG.", "2025–2026", "Atti PUG su perequazione e compensazioni logistica"],
        7:  [5, "Promozione dei protocolli per gli appalti sicuri, la legalità nei cantieri e la tutela contrattuale dei lavoratori della logistica e dei servizi.", "2024–2026", "Mozioni e protocolli lavoro del Gruppo PD"],
        8:  [2, "Contrarietà a deroghe generalizzate sul consumo di suolo che indeboliscano l'impianto della L.R. 24/2017 nel nuovo PUG.", "2025–2026", "Dibattito consiliare sul PUG a Palazzo Mercanti"],
        9:  [4, "Sostegno alla disciplina della ZTL e delle Aree Pedonali Urbane (APU) in centro storico accompagnata da eventi e rigenerazione commerciale.", "2024–2026", "Delibere PUT e disciplina ZTL/APU"],
        10: [4, "Sostegno all'attuazione del Biciplan e alla ricucitura dei percorsi ciclabili tra i quartieri, le scuole e il centro storico.", "2024–2026", "Approvazione Biciplan e PUMS Comune di Piacenza"],
        11: [4, "Favorevole agli interventi di moderazione della velocità e messa in sicurezza degli attraversamenti pedonali previsti dal Piano Urbano del Traffico.", "2024–2026", "Delibere Piano Urbano del Traffico (PUT)"],
        12: [5, "Sostegno al potenziamento delle linee urbane SETA, al rinnovo ecologico dei bus e al miglioramento dei collegamenti con le frazioni.", "2024–2026", "Bilancio Mobilità e indirizzi TPL"],
        13: [2, "Orientamento a privilegiare i parcheggi scambiatori e il trasporto pubblico rispetto all'aumento di sosta gratuita nel cuore storico.", "2024–2026", "Dibattito consiliare su sosta e PUT"],
        14: [3, "Sostegno ai servizi interforze, al potenziamento dell'organico della Polizia Locale e alla videosorveglianza in zona Stazione e Giardini Margherita, uniti a progetti sociali.", "2024–2026", "Atti Consiglio su sicurezza urbana (Gruppo PD)"],
        15: [2, "Posizione contraria/cauta in maggioranza sulle mozioni del centrodestra per il taser alla Polizia Locale, privilegiando assunzioni, formazione e presidio di prossimità.", "2024–2026", "Dibattito in Consiglio su dotazioni Polizia Locale"],
        16: [5, "Forte investimento in educativa di strada, mediazione interculturale, corridoi educativi e rigenerazione sociale in via Roma e nel quadrilatero della Stazione.", "2024–2026", "Bilancio Welfare e progetti via Roma"],
        17: [3, "Favorevole a controlli amministrativi mirati e ordinanze contro l'abuso di alcol e il vetro nelle aree sensibili, senza penalizzare indiscriminatamente il commercio.", "2024–2026", "Indirizzi sicurezza integrata e commercio"],
        18: [5, "Voto favorevole alle delibere per mettere in sicurezza il progetto dell'ex Manifattura Tabacchi con social housing (Fondo Estia) e nuovo polo scolastico all'Infrangibile.", "2024–2026", "Delibere Consiglio su ex Manifattura Tabacchi"],
        19: [5, "Pieno sostegno al protocollo per destinare l'ex Ospedale Militare di viale Palmerio al corso di Medicina in inglese e alla rigenerazione pubblica delle aree militari.", "2024–2026", "Protocollo ex Ospedale Militare (Comune-Difesa-Regione-AUSL)"],
        20: [5, "Sostegno convinto al cantiere PNRR della nuova scuola media e polo sportivo nell'ex Laboratorio Pontieri e ai cofinanziamenti comunali.", "2024–2026", "Delibere lavori pubblici su ex Laboratorio Pontieri"],
        21: [5, "Sostegno agli stanziamenti di bilancio per il recupero degli alloggi ERP gestiti da ACER e per il sostegno all'affitto delle famiglie fragili.", "2024–2026", "Bilancio Politiche Abitative Comune di Piacenza"],
        22: [5, "Voto favorevole al Piano Economico Finanziario e al regolamento per il passaggio dalla TARI alla Tariffa Corrispettiva Puntuale (TCP) dal 2026 secondo il principio «chi inquina paga».", "2025–2026", "Delibera Consiglio comunale su PEF e regolamento TCP"],
        23: [3, "Difesa del ruolo del Comune nel patto di sindacato Iren (con rappresentanza nel CdA) per coniugare investimenti territoriali e dividendi a sostegno del bilancio.", "2024–2026", "Indirizzi società partecipate / Gruppo Iren"],
        24: [5, "Priorità di bilancio all'ampliamento dei posti nido comunali e convenzionati e all'abbattimento delle rette in base all'ISEE.", "2024–2026", "Bilancio Servizi Educativi e Infanzia"],
        25: [5, "Sostegno agli ordini del giorno per lo Ius Scholae e alle iniziative per i diritti civili e contro le discriminazioni.", "2024–2026", "OdG Consiglio comunale su Ius Scholae e diritti"]
      }
    },
    {
      id: "CT", name: "Civica Tarasconi – Centrosinistra Civico",
      color: "#7C3AED", shape: "star",
      note: "Area civica e riformista di maggioranza che fa capo alla sindaca Katia Tarasconi (Lista Civica Katia Tarasconi, Piacenza Oltre e componente civica della giunta).",
      data: {
        1:  [4, "Scelta della sindaca Tarasconi nel settembre 2025 di risolvere unilateralmente il contratto con Piacenza Parcheggi per inadempimento, riprendendo il possesso di Piazza Cittadella.", "Set. 2025", "Atto di risoluzione contrattuale Giunta Tarasconi (settembre 2025)"],
        2:  [2, "Rivendicazione nel 2024 dell'obbligo amministrativo di consegnare l'area di Piazza Cittadella per non esporre il Comune a risarcimenti milionari, pur promettendo un piano di riforestazione.", "Nov. 2024", "Dichiarazioni Sindaca Katia Tarasconi su cantiere Piazza Cittadella"],
        3:  [5, "Pieno sostegno della Giunta Tarasconi e dell'assessora Adriana Fantini al Nuovo Ospedale alla Madonnina e alla nuova viabilità tra corso Europa e via Bubba.", "2024–2026", "Atti Giunta Tarasconi e PUG su Nuovo Ospedale"],
        4:  [4, "Forte impegno istituzionale della Sindaca sui tavoli ministeriali e con ANAS per i cantieri del Ponte sul Po e la fluidificazione dei nodi viari.", "2024–2026", "Interventi istituzionali Sindaca Tarasconi su Ponte Po"],
        5:  [4, "Linea del nuovo PUG illustrata dall'assessora Fantini: concentrare la logistica a Le Mose con tetti definiti e stop a nuovi poli sparsi nel territorio comunale.", "2025–2026", "Piano Urbanistico Generale (Giunta Tarasconi)"],
        6:  [5, "Introduzione nel PUG di vincoli di perequazione e contributi obbligatori per opere viarie, piste ciclabili e mitigazioni ambientali a carico della logistica.", "2025–2026", "Norme tecniche PUG su logistica e compensazioni"],
        7:  [4, "Sostegno ai tavoli prefettizi e comunali per la qualità del lavoro e la legalità negli appalti pubblici e nel comparto logistico.", "2024–2026", "Protocolli legalità e appalti Comune di Piacenza"],
        8:  [3, "Approccio pragmatico verso il tessuto produttivo locale per accompagnare l'ampliamento delle imprese storiche nel rispetto dei saldi del PUG.", "2025–2026", "Indirizzi sviluppo economico Giunta Tarasconi"],
        9:  [4, "Riqualificazione e valorizzazione pedonale del centro storico unita a iniziative di attrattività commerciale e culturale (Cabina di regia del centro storico).", "2024–2026", "Atti Giunta su centro storico e ZTL"],
        10: [4, "Attuazione del Biciplan e realizzazione di nuovi collegamenti ciclabili protetti per connettere i quartieri e i poli scolastici.", "2024–2026", "Delibere Giunta su Biciplan e ciclabili"],
        11: [4, "Interventi di messa in sicurezza degli incroci, attraversamenti illuminati e moderazione della velocità attorno alle scuole.", "2024–2026", "Piano Urbano del Traffico (PUT) Giunta Tarasconi"],
        12: [5, "Investimenti per il rinnovo della flotta bus urbana e il potenziamento del trasporto pubblico locale in sinergia con Regione e SETA.", "2024–2026", "Programma mobilità sostenibile Giunta Tarasconi"],
        13: [3, "Ricerca di un equilibrio tra mobilità sostenibile e offerta di sosta a rotazione per non penalizzare le attività commerciali del centro.", "2024–2026", "Incontri Cabina di regia centro storico"],
        14: [3, "Rafforzamento dell'organico della Polizia Locale, nuove telecamere e coordinamento costante con Prefettura e Questura su Stazione e Giardini Margherita.", "2024–2026", "Piano sicurezza urbana Giunta Tarasconi"],
        15: [2, "Priorità data al potenziamento numerico degli agenti, al vigile di quartiere e alle dotazioni di videosorveglianza rispetto all'introduzione del taser.", "2024–2026", "Indirizzi Polizia Locale Giunta Tarasconi"],
        16: [4, "Progetti integrati di rigenerazione urbana, educativa di strada e coesione sociale nel quadrante di via Roma e zona Stazione.", "2024–2026", "Progetti Welfare e coesione sociale Comune di Piacenza"],
        17: [4, "Adozione di ordinanze mirate contro la vendita e il consumo di alcolici in vetro e controlli congiunti sugli esercizi commerciali nelle aree più delicate.", "2024–2026", "Ordinanze sindacali sicurezza e decoro"],
        18: [5, "Salvataggio e rimodulazione del piano per l'ex Manifattura Tabacchi (Fondo Estia e PNRR) per realizzare la nuova scuola e il social housing all'Infrangibile.", "2024–2026", "Delibere Giunta e Consiglio su ex Manifattura Tabacchi"],
        19: [5, "Accordo storico sottoscritto per l'ex Ospedale Militare di viale Palmerio a servizio del polo universitario di Medicina e della città.", "2024–2026", "Protocollo d'intesa ex Ospedale Militare"],
        20: [5, "Scelta strategica della Giunta Tarasconi di puntare sul nuovo polo scolastico e palestre nell'ex Laboratorio Pontieri rispettando le tappe PNRR.", "2024–2026", "Delibere lavori pubblici ex Laboratorio Pontieri"],
        21: [5, "Investimenti comunali e fondi PNRR/regionali per ristrutturare gli alloggi ERP di ACER e ridurre i tempi di riassegnazione.", "2024–2026", "Piano casa e manutenzioni ACER"],
        22: [5, "Difesa dell'introduzione della Tariffa Corrispettiva Puntuale (TCP) dal 1° gennaio 2026 come riforma prevista dalla legge regionale per premiare chi differenzia.", "2025–2026", "Delibere Giunta e Consiglio su avvio TCP 2026"],
        23: [3, "Confronto istituzionale con Iren per esigere il miglioramento del servizio di raccolta rifiuti e spazzamento nella fase di avvio della TCP.", "2025–2026", "Interventi Giunta Tarasconi su servizio Iren"],
        24: [5, "Ampliamento dei posti nei nidi comunali e convenzionati e utilizzo dei fondi per abbattere le rette delle famiglie lavoratrici.", "2024–2026", "Bilancio Servizi Educativi Giunta Tarasconi"],
        25: [4, "Sostegno alle politiche di inclusione, pari opportunità e cittadinanza delle nuove generazioni cresciute nelle scuole piacentine.", "2024–2026", "Atti Giunta e Consiglio su diritti e inclusione"]
      }
    },
    {
      id: "ApP", name: "Alternativa per Piacenza",
      color: "#16A34A", shape: "diamond",
      note: "Forza civica, progressista ed ecologista di opposizione in Consiglio comunale (capogruppo Stefano Cugini e consigliere Luigi Rabuffi).",
      data: {
        1:  [5, "In prima linea fin dall'inizio per fermare il parcheggio interrato di Piazza Cittadella, chiedendo la risoluzione del contratto molto prima dell'abbattimento degli alberi e una piazza interamente verde.", "2023–2026", "Mozioni, diffide e atti in Consiglio di Stefano Cugini e Luigi Rabuffi (ApP)"],
        2:  [5, "Dura battaglia in aula e nei presidi cittadini con i comitati contro il taglio dei 15 tigli e cedri di Piazza Cittadella (novembre 2024) e contro gli abbattimenti in via Boselli.", "2024–2025", "Interventi e presidi Alternativa per Piacenza a difesa dei tigli"],
        3:  [1, "Netta contrarietà alla costruzione del Nuovo Ospedale sui terreni agricoli della Madonnina: chiesto il potenziamento in sede o il riuso di aree militari dismesse (ex Lusignani) senza consumo di suolo.", "2024–2026", "Osservazioni e voti contrari in Consiglio su Nuovo Ospedale alla Madonnina (ApP)"],
        4:  [2, "Priorità al trasferimento modale su ferrovia e trasporto pubblico interregionale anziché a nuove bretelle stradali che aumentano il traffico veicolare.", "2024–2026", "Proposte mobilità sostenibile Alternativa per Piacenza"],
        5:  [5, "Richiesta di una moratoria totale su qualsiasi nuovo capannone logistico e critica al PUG della Giunta perché consente ancora margini di espansione a Le Mose.", "2025–2026", "Emendamenti e interventi ApP sul PUG e consumo di suolo"],
        6:  [5, "Sostegno a oneri ambientali e sociali massimi a carico dei colossi della logistica per riparare i danni ambientali e viabilistici sul territorio piacentino.", "2025–2026", "Atti in Consiglio su logistica e ambiente (Rabuffi / Cugini)"],
        7:  [5, "Forte impegno per il salario minimo negli appalti comunali, la sicurezza sul lavoro e il contrasto allo sfruttamento nelle cooperative della logistica.", "2024–2026", "Mozioni ApP su lavoro dignitoso e appalti"],
        8:  [1, "Netta opposizione a qualsiasi allentamento dei vincoli urbanistici o nuove colate di cemento agricolo e commerciale.", "2025–2026", "Interventi in aula sul PUG (Alternativa per Piacenza)"],
        9:  [5, "Sostegno convinto alla pedonalizzazione del centro storico, alla riduzione delle auto e alla creazione di spazi pubblici verdi e vivibili.", "2024–2026", "Posizioni ApP su ZTL e centro storico"],
        10: [5, "Richiesta di accelerare il Biciplan con piste ciclabili realmente sicure, continue e separate dal traffico pesante.", "2024–2026", "Interventi in Consiglio su Biciplan e sicurezza ciclisti"],
        11: [5, "Favorevole a rendere Piacenza una «Città 30» per abbattere gli incidenti stradali e l'inquinamento da polveri sottili.", "2024–2026", "Proposte ApP su Città 30 e qualità dell'aria"],
        12: [5, "Richiesta di potenziare radicalmente il trasporto pubblico SETA con corse frequenti, mezzi elettrici e tariffe sociali per studenti e lavoratori.", "2024–2026", "Atti in Consiglio su TPL e SETA"],
        13: [1, "Contrarietà a nuovi parcheggi in centro storico (a partire da Piazza Cittadella) che attirano ulteriore traffico privato nel cuore della città.", "2024–2026", "Battaglia consiliare contro nuovi parcheggi in centro"],
        14: [1, "Critica alle politiche securitarie di facciata e al Daspo urbano, ritenuti inefficaci se non si interviene sulle cause sociali ed abitative della marginalità.", "2024–2026", "Interventi in aula su sicurezza e disagio sociale (ApP)"],
        15: [1, "Netta contrarietà alla dotazione del taser per la Polizia Locale di Piacenza.", "2024–2026", "Voto contrario a mozioni sul taser (Cugini / Rabuffi)"],
        16: [5, "Priorità assoluta a educativa di strada, presidi sociali, doposcuola, sport di quartiere e mediazione culturale in via Roma e zona Stazione.", "2024–2026", "Proposte ApP su welfare di comunità e via Roma"],
        17: [2, "Critica alle ordinanze proibizioniste generalizzate, chiedendo piuttosto politiche attive di rigenerazione commerciale e sociale.", "2024–2026", "Dibattito consiliare su ordinanze e via Roma"],
        18: [4, "Sostegno alla scuola e agli alloggi pubblici nell'ex Manifattura Tabacchi, ma critica alla quota di edilizia privata e al carico urbanistico sull'Infrangibile.", "2024–2026", "Interventi ApP in Consiglio su ex Manifattura Tabacchi"],
        19: [5, "Sostegno al recupero interamente pubblico, universitario e a parco verde dell'ex Ospedale Militare, dell'ex Caserma Lusignani e del Pertite.", "2024–2026", "Atti ApP su aree militari dismesse e Parco Pertite"],
        20: [3, "Rilievi critici sulla gestione dei costi, delle bonifiche e della viabilità del progetto scolastico nell'ex Laboratorio Pontieri.", "2024–2026", "Interrogazioni ApP su cantiere Laboratorio Pontieri"],
        21: [5, "Richiesta pressante di investire risorse comunali per azzerare gli alloggi ACER sfitti e dare risposta all'emergenza abitativa.", "2024–2026", "Mozioni ed emendamenti ApP al bilancio su casa e ACER"],
        22: [2, "Forte critica al modo in cui è stata introdotta la TCP 2026 da Comune e Iren: condiviso il principio ambientale, ma denunciati i rincari per le famiglie e i disservizi delle calotte.", "2025–2026", "Voto contrario / critiche in Consiglio su PEF e avvio TCP (Rabuffi / Cugini)"],
        23: [5, "Dura critica alla subordinazione del Comune alle logiche finanziarie e ai dividendi di Iren, chiedendo una gestione realmente pubblica dei beni comuni.", "2024–2026", "Interventi ApP in Consiglio su multiutility Iren"],
        24: [5, "Richiesta di nidi comunali pubblici, universali e gratuiti per le fasce popolari e medie, senza barriere discriminatorie.", "2024–2026", "Proposte ApP su scuola pubblica e nidi 0-6"],
        25: [5, "Pieno sostegno al riconoscimento dello Ius Scholae, al patrocinio al Pride e ai diritti civili e sociali.", "2024–2026", "Voto favorevole a OdG Ius Scholae e diritti civili"]
      }
    },
    {
      id: "FdI", name: "Fratelli d'Italia",
      color: "#1D4ED8", shape: "triangle",
      note: "Principale partito di opposizione di centrodestra a Palazzo Mercanti (capogruppo Sara Soresi, con Nicola Domeneghetti e Gloria Zanardi).",
      data: {
        1:  [3, "Dura contestazione alla Giunta Tarasconi per il caos amministrativo su Piazza Cittadella: prima l'abbattimento dei tigli e un anno di cantiere bloccato, poi la risoluzione tardiva del contratto.", "2024–2026", "Interpellanze e interventi in Consiglio di Sara Soresi (FdI)"],
        2:  [4, "Forte critica alla gestione del taglio dei tigli di Piazza Cittadella (novembre 2024) e di via Boselli, definito uno scempio inutile visto il successivo blocco dell'opera.", "2024–2025", "Note e interventi in aula gruppo FdI su taglio tigli"],
        3:  [3, "Sostegno alla necessità del Nuovo Ospedale di Piacenza, ma forti critiche alla Giunta e alla Regione per i ritardi sull'iter, sui parcheggi e sui nodi viari della Madonnina.", "2024–2026", "Interventi FdI in Consiglio su Nuovo Ospedale e PUG"],
        4:  [5, "Richiesta di priorità assoluta per il raddoppio/messa in sicurezza del Ponte sul Po, il completamento della tangenziale e la manutenzione delle strade cittadine.", "2024–2026", "Mozioni e atti FdI su viabilità e Ponte sul Po"],
        5:  [3, "Critica al PUG della Giunta Tarasconi: contestata la mancanza di una vera visione strategica che coniughi tutela del territorio e attrattività per le imprese.", "2025–2026", "Interventi FdI in aula sulle controdeduzioni al PUG"],
        6:  [3, "Favorevole a chiedere opere viarie compensative ai poli logistici, ma senza penalizzare il tessuto economico e produttivo piacentino.", "2025–2026", "Dibattito consiliare su PUG e logistica (FdI)"],
        7:  [2, "Favorevole al rispetto dei contratti nazionali e della legalità, ma contrario a clausole ideologiche comunali che appesantiscono la burocrazia per le imprese.", "2024–2026", "Posizione FdI in Consiglio su appalti e imprese"],
        8:  [5, "Richiesta di ridurre burocrazia e vincoli urbanistici per chi vuole investire, ristrutturare o ampliare aziende artigiane, agricole e manifatturiere a Piacenza e nelle frazioni.", "2025–2026", "Emendamenti e proposte FdI sul PUG"],
        9:  [1, "Netta opposizione all'estensione della ZTL e alle chiusure viarie che desertificano i negozi del centro storico già colpiti dal cantiere di Piazza Cittadella.", "2024–2026", "Mozioni e interventi FdI contro ZTL e chiusure centro"],
        10: [1, "Forte critica alle piste ciclabili realizzate cancellando posti auto o restringendo le carreggiate in modo pericoloso.", "2024–2026", "Interrogazioni FdI su piste ciclabili e viabilità"],
        11: [2, "Contrarietà alle Zone 30 generalizzate, chiedendo piuttosto di asfaltare le strade piene di buche e illuminare gli attraversamenti pedonali.", "2024–2026", "Interventi FdI su Piano Urbano del Traffico"],
        12: [4, "Sostegno al miglioramento dei collegamenti bus per studenti e frazioni, criticando i disservizi e le corse saltate di SETA.", "2024–2026", "Interrogazioni FdI sul servizio SETA"],
        13: [5, "Richiesta di parcheggi gratuiti o agevolati e di indennizzi/sgravi per i commercianti del centro storico penalizzati dalla perdita dei posti auto di Piazza Cittadella.", "2024–2026", "Mozioni FdI per sosta e commercio in centro (Sara Soresi)"],
        14: [5, "Richiesta costante di presidi fissi interforze in zona Stazione, Giardini Margherita, via Roma e Piazza Cavalli, con Daspo urbano e contrasto a baby gang e spaccio.", "2024–2026", "Mozioni sicurezza urbana FdI (Soresi / Domeneghetti / Zanardi)"],
        15: [5, "Firmatari di mozioni a Palazzo Mercanti per dotare la Polizia Locale di Piacenza del taser e potenziare le pattuglie serali e notturne.", "2024–2026", "Mozione centrodestra / FdI per taser alla Polizia Locale"],
        16: [1, "Forte critica alle politiche buoniste di sola mediazione sociale: in via Roma e Stazione servono anzitutto rispetto della legalità, controlli sulle residenze e sicurezza.", "2024–2026", "Interventi FdI su sicurezza in via Roma e Stazione"],
        17: [5, "Richiesta di ordinanze severe con chiusura anticipata dei minimarket, stop alla vendita serale di alcolici e revoca delle licenze in caso di bivacchi e risse.", "2024–2026", "Mozioni FdI su minimarket e degrado notturno"],
        18: [3, "Attenzione ai tempi del cantiere dell'ex Manifattura Tabacchi e richiesta che il social housing sia destinato prioritariamente a giovani coppie, lavoratori e forze dell'ordine.", "2024–2026", "Interventi FdI in Consiglio su ex Manifattura Tabacchi"],
        19: [4, "Sostegno alla valorizzazione dell'ex Ospedale Militare per il polo universitario di Medicina e alla riqualificazione delle caserme dismesse.", "2024–2026", "Voto e interventi FdI su ex Ospedale Militare"],
        20: [2, "Forti critiche alla Giunta per l'aumento dei costi a carico del Comune e le incognite viabilistiche sul polo scolastico nell'ex Laboratorio Pontieri.", "2024–2026", "Interpellanze FdI su cantiere Laboratorio Pontieri"],
        21: [3, "Favorevole al recupero degli alloggi ACER sfitti, ma con controlli rigorosi contro i furbetti del reddito, revoca agli autori di reati e priorità a chi risiede da anni a Piacenza.", "2024–2026", "Proposte FdI su regolamenti ACER e case popolari"],
        22: [1, "Dura battaglia in Consiglio contro la nuova Tariffa Corrispettiva Puntuale (TCP) 2026: denunciati rincari ingiustificati, caos dei bidoncini e penalizzazione di famiglie con bambini e anziani.", "2025–2026", "Voto contrario a PEF e regolamento TCP (Sara Soresi - FdI)"],
        23: [4, "Critica alla Giunta che incassa i dividendi di Iren mentre i piacentini subiscono aumenti tariffari e disservizi nella raccolta dei rifiuti.", "2025–2026", "Interventi FdI su Iren e tariffe rifiuti"],
        24: [2, "Sostegno all'abbattimento delle liste d'attesa nei nidi, ma chiedendo punteggi premiali per la residenza storica a Piacenza e per i genitori entrambi lavoratori.", "2024–2026", "Emendamenti FdI su criteri accesso nidi e sostegno natalità"],
        25: [1, "Netto voto contrario agli ordini del giorno sullo Ius Scholae e critiche all'uso politico-ideologico del Consiglio comunale.", "2024–2026", "Voto contrario in Consiglio a OdG Ius Scholae (FdI)"]
      }
    },
    {
      id: "Lega", name: "Lega",
      color: "#059669", shape: "square",
      note: "Gruppo consiliare di opposizione di centrodestra a Palazzo Mercanti (capogruppo Luca Zandonella).",
      data: {
        1:  [3, "Critica durissima alla gestione di Piazza Cittadella da parte della sindaca Tarasconi, accusata di aver lasciato per oltre un anno una voragine in centro per poi risolvere il contratto fuori tempo massimo.", "2024–2026", "Interventi in Consiglio di Luca Zandonella (Lega)"],
        2:  [4, "Contestazione del taglio dei tigli in Piazza Cittadella e in via Boselli, effettuato dalla Giunta nonostante l'assenza di garanzie bancarie certe sul cantiere.", "2024–2025", "Note e interrogazioni Lega su taglio alberi"],
        3:  [3, "Favorevole alla realizzazione del Nuovo Ospedale (avviato dal centrodestra), ma critico sui ritardi dell'iter regionale e comunale e sulla carenza di parcheggi previsti.", "2024–2026", "Interventi Lega su Nuovo Ospedale di Piacenza"],
        4:  [5, "Priorità assoluta a infrastrutture stradali, Ponte sul Po, tangenziale e manutenzione delle strade di città e frazioni.", "2024–2026", "Mozioni Lega su viabilità e frazioni"],
        5:  [3, "Posizione pragmatica sulla logistica: difendere i posti di lavoro e le imprese regolari, evitando sia blocchi ideologici sia speculazioni incontrollate.", "2025–2026", "Interventi Lega sul PUG in Consiglio comunale"],
        6:  [2, "Contrarietà a balzelli punitivi sulle aziende che rischiano di far fuggire investimenti e lavoro verso le province vicine.", "2025–2026", "Dibattito consiliare su PUG e attività produttive"],
        7:  [2, "Favorevole ai controlli contro le cooperative spurie, ma contrario a vincoli comunali ideologici sugli appalti.", "2024–2026", "Posizione Lega su lavoro e imprese"],
        8:  [5, "Forte richiesta di snellire il PUG per permettere a imprese agricole, artigiane e famiglie delle frazioni di costruire e ampliare senza blocchi burocratici.", "2025–2026", "Emendamenti Lega al PUG per frazioni e imprese"],
        9:  [1, "Netta contrarietà all'allargamento della ZTL e alle restrizioni al traffico che penalizzano commercianti e residenti del centro storico.", "2024–2026", "Interventi Lega contro restrizioni ZTL e PUT"],
        10: [1, "Opposizione alle piste ciclabili ideologiche che tolgono parcheggi e restringono le strade principali della città.", "2024–2026", "Interrogazioni Lega su piste ciclabili e sosta"],
        11: [1, "Contrarietà alle Zone 30 diffuse, ritenute un intralcio per chi lavora e si sposta in auto.", "2024–2026", "Posizione Lega contro Zone 30 generalizzate"],
        12: [3, "Richiesta a SETA di garantire puntualità, sicurezza a bordo dei bus per gli studenti e collegamenti con le frazioni.", "2024–2026", "Interpellanze Lega su sicurezza e corse SETA"],
        13: [5, "Richiesta di più parcheggi gratuiti o a bassa tariffa a ridosso del centro storico per compensare gli stalli persi in Piazza Cittadella.", "2024–2026", "Mozioni Lega per parcheggi e commercio"],
        14: [5, "Battaglia prioritaria per presidi fissi interforze ed esercito («Strade Sicure») in Stazione, Giardini Margherita e via Roma, con tolleranza zero contro spaccio e bivacchi.", "2024–2026", "Mozioni e interrogazioni sicurezza di Luca Zandonella (Lega)"],
        15: [5, "Primo promotore in Consiglio comunale (già da ex assessore alla Sicurezza) della dotazione del taser alla Polizia Locale di Piacenza e del potenziamento dei turni notturni.", "2024–2026", "Mozioni Lega per il taser alla Polizia Locale (Luca Zandonella)"],
        16: [1, "Critica ai progetti basati sulla sola mediazione sociale: contro baby gang e criminalità giovanile servono controlli, sanzioni e rimpatri per chi delinque.", "2024–2026", "Interventi Lega su baby gang e via Roma"],
        17: [5, "Richiesta di ordinanze rigorose sugli orari dei minimarket etnici, divieto di alcolici serali e controlli serrati sulle licenze commerciali.", "2024–2026", "Mozioni Lega su minimarket e decoro in via Roma"],
        18: [3, "Vigilanza sul cantiere dell'ex Manifattura Tabacchi affinché non diventi un ghetto e garantisca sicurezza e servizi al quartiere Infrangibile.", "2024–2026", "Interventi Lega su ex Manifattura Tabacchi"],
        19: [3, "Favorevole al recupero dell'ex Ospedale Militare e delle caserme dismesse, chiedendo però tempi certi e parcheggi adeguati.", "2024–2026", "Dibattito consiliare su ex aree militari"],
        20: [2, "Critiche alla scelta di concentrare la maxi-scuola al Laboratorio Pontieri svuotando i plessi storici e aumentando i costi per le casse comunali.", "2024–2026", "Interventi Lega su scuola Laboratorio Pontieri"],
        21: [3, "Favorevole alla manutenzione delle case popolari ACER, vincolando però le assegnazioni all'anzianità di residenza («prima i piacentini») e alla revoca immediata per chi delinque.", "2024–2026", "Proposte Lega su ACER e case popolari"],
        22: [1, "Netto voto contrario alla Tariffa Puntuale (TCP) 2026, definita una nuova stangata sulla pelle dei piacentini accompagnata da disservizi e degrado dei cassonetti.", "2025–2026", "Voto contrario a PEF e TCP in Consiglio comunale (Lega)"],
        23: [4, "Contestazione dei maxidividendi incassati dal Comune da Iren a fronte di bollette rifiuti più care e peggioramento della pulizia stradale.", "2025–2026", "Interventi Lega su Iren e raccolta rifiuti"],
        24: [2, "Richiesta di introdurre criteri premiali di residenza storica a Piacenza per l'accesso ai nidi comunali e ai bonus comunali.", "2024–2026", "Emendamenti Lega su graduatorie nidi e welfare"],
        25: [1, "Voto contrario allo Ius Scholae e ai patrocinî ideologici, chiedendo che il Comune si occupi di sicurezza, strade e famiglie piacentine.", "2024–2026", "Voto contrario a OdG Ius Scholae (Luca Zandonella)"]
      }
    },
    {
      id: "CB", name: "Civica Barbieri – Trespidi – Forza Italia",
      color: "#0284C7", shape: "circle",
      note: "Gruppo consiliare civico e moderato di centrodestra guidato dall'ex sindaca Patrizia Barbieri e da Massimo Trespidi («Patrizia Barbieri Sindaco – Trespidi con Liberi») e area Forza Italia.",
      data: {
        1:  [3, "Dura critica alla Giunta Tarasconi per aver gestito in modo contraddittorio il dossier Piazza Cittadella, esponendo il Comune a contenziosi dopo aver abbattuto gli alberi senza aver prima verificato le bancabilità.", "2024–2026", "Interventi in Consiglio di Patrizia Barbieri e Massimo Trespidi"],
        2:  [4, "Contestazione alla Giunta per aver proceduto al taglio dei tigli di Piazza Cittadella nel novembre 2024 prima ancora di avere la certezza finanziaria dell'opera.", "2024–2025", "Note e interventi in aula gruppo Civica Barbieri – Trespidi"],
        3:  [4, "Rivendicazione dell'avvio dell'iter per il Nuovo Ospedale di Piacenza durante la giunta Barbieri, ma forte critica all'attuale amministrazione per i ritardi e le carenze viabilistiche.", "2024–2026", "Interventi Patrizia Barbieri su Nuovo Ospedale"],
        4:  [5, "Sostegno prioritario al potenziamento dei collegamenti sul Po, alle opere viarie di cintura e alla manutenzione della rete stradale cittadina.", "2024–2026", "Atti consiliari su infrastrutture e viabilità"],
        5:  [3, "Critica al nuovo PUG per l'impostazione ritenuta contraddittoria e burocratica, chiedendo regole chiare che tutelino sia il territorio agricolo sia le imprese esistenti.", "2025–2026", "Interventi sul PUG in Consiglio comunale (Barbieri / Trespidi)"],
        6:  [3, "Favorevole a opere di compensazione infrastrutturale e ambientale concordate con il comparto logistico.", "2025–2026", "Dibattito consiliare su PUG e logistica"],
        7:  [2, "Sostegno alla legalità e al lavoro regolare tramite il confronto con le associazioni datoriali e sindacali, senza appesantimenti burocratici comunali.", "2024–2026", "Posizione civico-moderata su lavoro e imprese"],
        8:  [5, "Forte richiesta di semplificazione urbanistica ed edilizia nel PUG per sostenere l'economia locale, i professionisti e la vitalità delle frazioni.", "2025–2026", "Osservazioni ed emendamenti al PUG (Civica Barbieri)"],
        9:  [1, "Contrarietà a estensioni della ZTL e chiusure al traffico calate dall'alto senza prima aver risolto la carenza di parcheggi in centro storico.", "2024–2026", "Interventi in Consiglio su centro storico e ZTL"],
        10: [2, "Favorevole a percorsi ciclabili sicuri, ma contrario a corsie che eliminano stalli di sosta indispensabili a residenti e negozi.", "2024–2026", "Atti consiliari su PUT e piste ciclabili"],
        11: [2, "Scetticismo verso Zone 30 generalizzate, chiedendo invece interventi puntuali di messa in sicurezza davanti a scuole e luoghi sensibili.", "2024–2026", "Interventi in aula sul Piano Urbano del Traffico"],
        12: [4, "Sostegno al potenziamento del trasporto pubblico locale SETA, con particolare attenzione agli studenti e alle frazioni.", "2024–2026", "Interpellanze su trasporto pubblico e SETA"],
        13: [5, "Richiesta urgente di un piano parcheggi e di agevolazioni per la sosta in centro storico per sostenere il commercio piacentino.", "2024–2026", "Mozioni per il commercio e la sosta in centro"],
        14: [5, "Denuncia dell'aumento del degrado e dell'insicurezza in Stazione, Giardini Margherita e centro storico, chiedendo presidi fissi e applicazione del Daspo urbano.", "2024–2026", "Interpellanze sicurezza gruppo Barbieri – Trespidi"],
        15: [5, "Pieno sostegno alla dotazione del taser per la Polizia Locale di Piacenza (percorso avviato nella precedente amministrazione) e al rafforzamento dei turni serali.", "2024–2026", "Voto favorevole a mozioni sul taser in Consiglio"],
        16: [2, "Valorizzazione del volontariato e del terzo settore piacentino, ma richiesta di non sostituire il controllo della legalità con il solo approccio assistenziale.", "2024–2026", "Dibattito consiliare su sicurezza e politiche sociali"],
        17: [5, "Sostegno a ordinanze rigorose sul decoro urbano, sugli orari dei minimarket e contro il bivacco e l'abuso di alcolici in strada.", "2024–2026", "Atti consiliari su decoro e sicurezza in via Roma"],
        18: [3, "Rivendicazione del finanziamento originario PINQuA ottenuto dalla giunta Barbieri per l'ex Manifattura Tabacchi e critica alle modifiche e ai ritardi dell'attuale giunta.", "2024–2026", "Interventi Patrizia Barbieri su ex Manifattura Tabacchi"],
        19: [4, "Pieno sostegno alla destinazione universitaria (Medicina) e pubblica dell'ex Ospedale Militare di viale Palmerio e al recupero delle aree militari.", "2024–2026", "Atti su ex Ospedale Militare e polo universitario"],
        20: [2, "Forti critiche al progetto della nuova scuola nell'ex Laboratorio Pontieri, contestando lo smantellamento delle scuole esistenti e l'esplosione dei costi comunali.", "2024–2026", "Interpellanze di Massimo Trespidi e Patrizia Barbieri su Laboratorio Pontieri"],
        21: [4, "Sostegno alla riqualificazione degli alloggi popolari ACER e al sostegno alle famiglie fragili con criteri di equità e controllo.", "2024–2026", "Interventi sul bilancio Welfare e politiche abitative"],
        22: [1, "Dura opposizione in Consiglio e con diffide formali contro il passaggio alla TCP 2026, denunciando l'aumento del PEF rifiuti, la confusione tariffaria e l'esclusione delle famiglie numerose dalle tutele.", "2025–2026", "Voto contrario e diffide su TCP e PEF rifiuti (Trespidi / Barbieri)"],
        23: [4, "Critica alla debolezza del Comune di Piacenza nei confronti di Iren e richiesta di restituire i maggiori utili ai cittadini sotto forma di sconti in bolletta.", "2025–2026", "Interventi in aula su governance e tariffe Iren"],
        24: [3, "Sostegno al sistema integrato 0-6 anni (nidi comunali, convenzionati e scuole paritarie FISM) per azzerare le liste d'attesa e sostenere la natalità.", "2024–2026", "Proposte a sostegno della famiglia e del sistema paritario"],
        25: [2, "Contrarietà a mozioni ideologiche di competenza nazionale (come lo Ius Scholae) e difesa prioritaria delle politiche per la famiglia.", "2024–2026", "Voto contrario a OdG Ius Scholae in Consiglio comunale"]
      }
    }
  ],

  guide: {
    1: {
      ctx: "Nel settembre 2025 il Comune di Piacenza ha risolto per inadempimento il contratto con Piacenza Parcheggi per il parcheggio interrato di Piazza Cittadella, tornando in possesso dell'area dopo oltre un anno di cantiere bloccato e battaglie legali.",
      pro: "Rinunciare definitivamente allo scavo del parcheggio interrato permette di chiudere una vicenda fallimentare e restituire subito a Piacenza una grande piazza verde, alberata e archeologicamente tutelata.",
      con: "Il centro storico e il comparto nord soffrono di una grave carenza di posti auto: rinunciare a un parcheggio in struttura senza un'alternativa immediata penalizza residenti e commercianti."
    },
    2: {
      ctx: "Nel novembre 2024 l'abbattimento dei 15 tigli e cedri di Piazza Cittadella (e successivamente di altri tigli in via Boselli) ha scatenato proteste cittadine, presidi ambientalisti e scontri in Consiglio comunale.",
      pro: "In una delle città più inquinate e calde della Pianura Padana, gli alberi adulti sani sono un patrimonio sanitario insostituibile: i progetti delle opere pubbliche devono adattarsi per salvarli.",
      con: "Bloccare qualsiasi cantiere viario o infrastrutturale per non toccare singole alberature paralizza le opere pubbliche, quando è possibile prevedere piantumazioni compensative più numerose."
    },
    3: {
      ctx: "Il nuovo Piano Urbanistico Generale (PUG) conferma la realizzazione del Nuovo Ospedale di Piacenza nell'area della Madonnina, con nuove opere viarie tra corso Europa e via Bubba. Comitati e sinistra civica propongono invece l'ampliamento in sede o l'ex Caserma Lusignani.",
      pro: "Costruire un ospedale nuovo e moderno alla Madonnina consente di avere spazi tecnologici adeguati, parcheggi e cantieri rapidi senza interrompere l'attività dell'attuale presidio di via Taverna.",
      con: "L'area della Madonnina consuma decine di ettari di suolo agricolo fertile, allontana l'ospedale dal centro storico e rischia di congestionare il traffico del quadrante ovest."
    },
    4: {
      ctx: "I collegamenti sul fiume Po verso la Lombardia e il nodo della tangenziale di Piacenza sono periodicamente interessati da cantieri, code e criticità infrastrutturali.",
      pro: "Sbloccare il raddoppio e la messa in sicurezza dei ponti sul Po e completare la tangenziale è vitale per migliaia di pendolari e per togliere il traffico pesante dalle vie urbane.",
      con: "Puntare solo su nuove strade e ponti stradali incentiva il traffico privato e dei tir: la priorità dovrebbe andare ai collegamenti ferroviari e al trasporto pubblico locale."
    },
    5: {
      ctx: "Il nuovo PUG discusso a Palazzo Mercanti circoscrive gli insediamenti logistici al polo esistente di Le Mose, vietando nuovi poli sparsi nel territorio comunale.",
      pro: "Piacenza ha già dato fin troppo territorio ai capannoni della logistica: blindare il consumo di suolo agricolo fuori da Le Mose è indispensabile per salvare l'ambiente e la qualità dell'aria.",
      con: "Limitazioni troppo rigide rischiano di spingere gli investimenti appena oltre il confine comunale, lasciando a Piacenza il traffico dei tir ma perdendo oneri di urbanizzazione e posti di lavoro."
    },
    6: {
      ctx: "Nel PUG l'amministrazione ha previsto meccanismi di perequazione e oneri a carico della logistica per finanziare opere viarie, piste ciclabili e boschi urbani.",
      pro: "I grandi poli logistici generano traffico pesante e inquinamento: è giusto che finanzino obbligatoriamente infrastrutture verdi, trasporto per i lavoratori e rifacimento delle strade.",
      con: "Oneri straordinari troppo gravosi riducono la competitività del territorio piacentino e rischiano di essere scaricati sui costi della filiera produttiva."
    },
    7: {
      ctx: "Il Consiglio comunale di Piacenza ha discusso più volte protocolli sulla qualità del lavoro negli appalti pubblici e nel comparto logistico per contrastare cooperative spurie e lavoro povero.",
      pro: "Il Comune deve dare il buon esempio applicando il salario minimo contrattuale nei propri appalti e premiando le imprese che garantiscono sicurezza e contratti stabili.",
      con: "Imporre vincoli aggiuntivi a livello comunale oltre le leggi nazionali rischia di appesantire le gare d'appalto, aumentare i costi per il bilancio e rallentare i cantieri."
    },
    8: {
      ctx: "In sede di osservazioni al PUG, le opposizioni di centrodestra e le categorie economiche hanno chiesto norme meno rigide per l'ampliamento delle imprese locali e per l'edilizia nelle frazioni.",
      pro: "Rendere più semplice ristrutturare o ampliare un'azienda manifatturiera e costruire nelle frazioni sostiene l'economia reale e contrasta lo spopolamento dei borghi.",
      con: "Allentare i vincoli urbanistici apre la strada a nuove speculazioni edilizie e indebolisce l'obiettivo regionale del consumo di suolo a saldo zero."
    },
    9: {
      ctx: "La disciplina della ZTL e delle Aree Pedonali Urbane (APU) nel centro storico di Piacenza divide chi vuole ridurre smog e auto da chi teme ripercussioni sui negozi di vicinato.",
      pro: "Un centro storico libero dalle auto è più bello, sicuro e respirabile, e favorisce le passeggiate, i dehors e il turismo culturale ed enogastronomico.",
      con: "Senza parcheggi comodi e con varchi troppo restrittivi, molti cittadini preferiscono andare nei centri commerciali in periferia, mettendo in crisi le botteghe del centro."
    },
    10: {
      ctx: "Con il Biciplan e il PUMS il Comune di Piacenza punta a estendere e mettere in sicurezza la rete delle piste ciclabili urbane.",
      pro: "Piacenza è una città interamente pianeggiante: collegare scuole, stazione e quartieri con piste ciclabili protette è il modo più sano ed economico per ridurre traffico e polveri sottili.",
      con: "Realizzare corsie ciclabili togliendo parcheggi ai residenti o restringendo strade già strette crea ingorghi e pericoli agli incroci."
    },
    11: {
      ctx: "Il nuovo Piano Urbano del Traffico (PUT) prevede interventi di moderazione della velocità, dossi e Zone 30 nelle strade residenziali e vicino alle scuole.",
      pro: "Ridurre la velocità a 30 km/h nelle vie di quartiere abbatte la gravità degli incidenti per pedoni, anziani e ciclisti e riduce il rumore sotto le case.",
      con: "Estendere il limite di 30 km/h e i dossi su troppe strade rallenta la circolazione quotidiana e complica il transito di bus e mezzi di emergenza."
    },
    12: {
      ctx: "Il servizio di trasporto pubblico urbano gestito da SETA è spesso al centro del dibattito consiliare per la frequenza delle corse, i collegamenti con le frazioni e il rinnovo dei bus.",
      pro: "Solo autobus frequenti, puntuali, elettrici e attivi anche la sera possono convincere pendolari e studenti a lasciare l'auto a casa.",
      con: "Aumentare le corse su tratte poco frequentate comporta costi elevati per il bilancio comunale, che andrebbero prima concentrati sulla manutenzione delle strade."
    },
    13: {
      ctx: "Dopo la perdita temporanea degli stalli in Piazza Cittadella, opposizioni e commercianti chiedono più parcheggi gratuiti o a tariffa ridotta attorno al centro storico.",
      pro: "Offrire sosta gratuita o molto economica per le prime ore a ridosso del centro storico è ossigeno immediato per i negozi e i professionisti della città.",
      con: "Aumentare i parcheggi gratuiti in centro incentiva l'uso dell'auto anche per brevi spostamenti, aumentando congestione e smog."
    },
    14: {
      ctx: "La sicurezza nei pressi della Stazione ferroviaria, dei Giardini Margherita, di via Roma e di Piazza Cavalli è uno dei temi più caldi nelle sedute di Palazzo Mercanti.",
      pro: "Presidi fissi continuativi, pattuglie interforze e l'applicazione rigorosa del Daspo urbano sono indispensabili per fermare spaccio, risse e degrado nei punti nevralgici della città.",
      con: "Il solo approccio repressivo sposta il problema da una piazza all'altra: la vera sicurezza nasce dalla rigenerazione degli spazi, dal commercio vivo e dalle politiche sociali."
    },
    15: {
      ctx: "I gruppi di centrodestra (Lega, FdI, Civica Barbieri) hanno presentato più volte mozioni per dotare del taser gli agenti della Polizia Locale di Piacenza e potenziare i turni notturni.",
      pro: "Il taser è uno strumento di dissuasione non letale che protegge gli agenti della Polizia Locale quando devono intervenire su soggetti violenti o armati.",
      con: "La Polizia Locale svolge compiti di prossimità e polizia amministrativa: il taser comporta rischi sanitari per i soggetti fragili e non risolve la carenza di organico."
    },
    16: {
      ctx: "Nel quadrante di via Roma e zona Stazione l'amministrazione promuove progetti di educativa di strada, doposcuola, mediazione interculturale e animazione sociale.",
      pro: "Accompagnare i giovani e le famiglie con educatori di strada, sport gratuito e mediazione culturale costruisce integrazione vera e previene la formazione di baby gang.",
      con: "Senza il rispetto rigoroso delle regole e controlli sulle situazioni di illegalità, i progetti di mediazione rischiano di essere inefficaci e costosi."
    },
    17: {
      ctx: "Per contrastare bivacchi e disturbo della quiete notturna in via Roma e vicino alla Stazione, si discute di ordinanze più rigide sugli orari dei minimarket e sulla vendita di alcolici.",
      pro: "Vietare la vendita serale di alcolici da asporto e anticipare la chiusura dei minimarket nelle zone critiche riduce drasticamente ubriachezza molesta, vetro a terra e risse notturne.",
      con: "Restrizioni generalizzate colpiscono anche i commercianti che rispettano le regole; è più efficace sanzionare duramente solo gli esercizi dove avvengono violazioni."
    },
    18: {
      ctx: "Nell'area dell'ex Manifattura Tabacchi (quartiere Infrangibile) il Comune ha rimodulato il progetto con il Fondo Estia e fondi PNRR per realizzare social housing, una nuova scuola con palestra e verde pubblico.",
      pro: "Rigenerare un'enorme area dismessa con alloggi a canone calmierato, una scuola moderna e parchi pubblici dà risposte concrete al bisogno di casa e servizi del quartiere.",
      con: "Un insediamento così denso di nuovi alloggi rischia di sovraccaricare il traffico e i parcheggi del quartiere Infrangibile se non si riducono le volumetrie complessive."
    },
    19: {
      ctx: "Per l'ex Ospedale Militare di viale Palmerio è stato siglato l'accordo per ospitare il corso di laurea in Medicina in lingua inglese, mentre resta aperto il futuro dell'ex Caserma Lusignani.",
      pro: "Trasformare le ex caserme piacentine in campus universitari, spazi culturali e parchi pubblici restituisce alla città aree chiuse da decenni e attrae giovani e ricerca.",
      con: "Il recupero di immensi complessi militari richiede decine di milioni di euro: senza il coinvolgimento anche di funzioni private c'è il rischio che molte ali restino incompiute."
    },
    20: {
      ctx: "Nell'area dell'ex Laboratorio Pontieri il Comune sta realizzando con fondi PNRR e risorse proprie un nuovo polo scolastico (scuola media e palestre). Le opposizioni hanno criticato costi e localizzazione.",
      pro: "Cogliere i fondi PNRR per costruire una scuola antisismica, energeticamente efficiente e dotata di palestre moderne rigenera un'area storica a ridosso delle Mura Farnesiane.",
      con: "Concentrare centinaia di studenti in un unico polo svuota i plessi storici di quartiere, complica la viabilità e ha comportato forti extracosti a carico del bilancio comunale."
    },
    21: {
      ctx: "A Piacenza centinaia di famiglie sono in graduatoria per l'edilizia residenziale pubblica, mentre diversi alloggi ACER necessitano di ristrutturazione per poter essere riassegnati.",
      pro: "Investire risorse comunali per rimettere subito a nuovo gli appartamenti ACER sfitti è il modo più rapido ed economico per dare casa a famiglie e anziani in difficoltà.",
      con: "Prima di stanziare nuovi fondi comunali bisogna pretendere controlli severi sulle occupazioni, sulle morosità colpevoli e sui requisiti di chi occupa già un alloggio pubblico."
    },
    22: {
      ctx: "Dal 1° gennaio 2026 Piacenza è passata dalla TARI alla Tariffa Corrispettiva Puntuale (TCP) gestita da Iren Ambiente, calcolata anche sul numero di svuotamenti del bidone dell'indifferenziato.",
      pro: "La Tariffa Puntuale applica il principio europeo «chi inquina paga»: premia i cittadini che differenziano bene i rifiuti e riduce la quantità di indifferenziato mandato a smaltimento.",
      con: "Il nuovo sistema ha portato rincari del Piano Economico Finanziario, complicazioni con bidoncini e calotte elettroniche, penalizzando famiglie numerose e aumentando gli abbandoni."
    },
    23: {
      ctx: "Il Comune di Piacenza è socio pubblico della multiutility quotata Iren, che gestisce rifiuti, acqua e teleriscaldamento sul territorio provinciale.",
      pro: "Il Comune deve usare il proprio peso societario in Iren per pretendere tariffe più basse, un servizio di spazzamento impeccabile e investimenti sulle reti locali.",
      con: "I dividendi annuali versati da Iren al Comune di Piacenza sono una voce fondamentale del bilancio che permette di finanziare welfare, scuole e manutenzioni senza alzare l'IRPEF."
    },
    24: {
      ctx: "L'abbattimento delle liste d'attesa e delle rette negli asili nido comunali e convenzionati è al centro delle sessioni di bilancio a Palazzo Mercanti.",
      pro: "I posti al nido devono essere assegnati in base al bisogno economico (ISEE) e lavorativo della famiglia, permettendo soprattutto alle madri di non dover lasciare il lavoro.",
      con: "Nelle graduatorie dei nidi comunali è giusto attribuire un punteggio premiale alle famiglie che risiedono e pagano le tasse a Piacenza da molti anni."
    },
    25: {
      ctx: "Il Consiglio comunale di Piacenza si è confrontato su ordini del giorno per lo Ius Scholae ai minori stranieri cresciuti in Italia e sul patrocinio alle manifestazioni per i diritti LGBTQ+.",
      pro: "A Piacenza oltre un quinto degli alunni ha background migratorio: sostenere lo Ius Scholae e i diritti civili promuove una comunità più giusta, coesa e inclusiva.",
      con: "La cittadinanza è materia riservata allo Stato: il Consiglio comunale dovrebbe concentrarsi sui problemi concreti di Piacenza evitando temi divisivi di politica nazionale."
    }
  }
};
