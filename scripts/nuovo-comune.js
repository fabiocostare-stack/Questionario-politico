#!/usr/bin/env node
/**
 * Generatore rapido per un nuovo comune pilota.
 * Uso: node scripts/nuovo-comune.js <slug> "<Nome Comune>" [shareId]
 * Esempio: node scripts/nuovo-comune.js ferrara "Ferrara" fe
 */
const fs = require('fs');
const path = require('path');

const [,, rawSlug, cityName, rawShareId] = process.argv;
if (!rawSlug || !cityName) {
  console.error('Uso: node scripts/nuovo-comune.js <slug> "<Nome Comune>" [shareId]');
  process.exit(1);
}

const slug = rawSlug.toLowerCase().replace(/[^a-z0-9-]/g, '');
const shareId = (rawShareId || slug.slice(0, 2)).toLowerCase();
const root = path.resolve(__dirname, '..');

const dataPath = path.join(root, 'data', `${slug}.js`);
const htmlPath = path.join(root, `${slug}.html`);

if (fs.existsSync(dataPath) || fs.existsSync(htmlPath)) {
  console.error(`Esiste già un file per "${slug}".`);
  process.exit(1);
}

const starterCfg = {
  id: slug,
  shareId,
  title: `Scheda Politica · ${cityName}`,
  subtitle: 'Elezioni comunali 2027',
  fileName: `scheda-politica-${slug}`,
  version: `${slug}-0.1`,
  storeKey: `scheda-politica-${slug}-v1`,
  legacyKey: '',
  w: { p: 'partito o lista', ps: 'partiti e liste' },
  layers: false,
  map: false,
  openSection: -1,
  whyDefault: 'Posizione documentata da atti del Comune, voti in Consiglio o fonti ufficiali.',
  rankTitle: 'Vicinanza alle forze politiche',
  shareFooter: 'Confronto basato su atti e posizioni documentate. Non è un giudizio.',
  intro: {
    h1: `Cosa vuoi per ${cityName}?`,
    lead: 'Rispondi a {TOTAL} affermazioni sui temi concreti della città: alla fine vedi il tuo profilo su {AXES} temi e, dove le posizioni sono documentate, quanto sei vicino alle forze politiche locali.',
    facts: [
      ['{TOTAL}', 'affermazioni'],
      ['{AXES}', 'temi nel profilo'],
      ['5 min', 'circa']
    ],
    demo: 'Prima affermazione di esempio da sostituire.',
    notes: 'Versione pilota. Le posizioni dei partiti sono inserite solo in presenza di un atto documentato (voto in Consiglio, programma, dichiarazione ufficiale). Le risposte restano solo nel tuo browser.'
  },
  sections: [
    {
      t: '1. Mobilità e territorio',
      q: [
        [1, 'Affermazione 1 su mobilità o urbanistica.'],
        [2, 'Affermazione 2 su traffico, sosta o trasporto pubblico.']
      ]
    },
    {
      t: '2. Sicurezza e servizi',
      q: [
        [3, 'Affermazione 3 su sicurezza urbana o polizia locale.'],
        [4, 'Affermazione 4 su bilancio, tasse o servizi comunali.']
      ]
    }
  ],
  blurb: [
    'Traffico, sosta, trasporto pubblico e territorio.',
    'Sicurezza urbana, bilancio e servizi cittadini.'
  ],
  axes: [
    {
      id: 'ter',
      n: 'Mobilità e territorio',
      lo: 'Auto e sviluppo',
      hi: 'Trasporto pubblico e tutela suolo',
      ml: 'Auto e sviluppo',
      mh: 'TPL e verde',
      p: [1, 2],
      m: []
    },
    {
      id: 'ser',
      n: 'Sicurezza e servizi',
      lo: 'Controllo e meno tasse',
      hi: 'Welfare e servizi pubblici',
      ml: 'Controllo',
      mh: 'Servizi',
      p: [4],
      m: [3]
    }
  ],
  subjects: [
    {
      k: 'pd', short: 'PD', full: 'Partito Democratico',
      rank: ['al PD', 'il PD'], btn: 'PD', dot: 'pd',
      light: '#C2410C', dark: '#FB923C', sub: 'Solo posizioni documentate', ordList: 0,
      data: { 1: [0,0,'',''], 2: [0,0,'',''], 3: [0,0,'',''], 4: [0,0,'',''] },
      glyph: '<svg viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="var(--pd)"/></svg>'
    },
    {
      k: 'fdi', short: 'FdI', full: "Fratelli d'Italia",
      rank: ["a Fratelli d'Italia", "Fratelli d'Italia"], btn: 'FdI', dot: 'fdi',
      light: '#1D4ED8', dark: '#93C5FD', sub: 'Solo posizioni documentate', ordList: 0,
      data: { 1: [0,0,'',''], 2: [0,0,'',''], 3: [0,0,'',''], 4: [0,0,'',''] },
      glyph: '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="3" y="3" width="8" height="8" fill="var(--fdi)" transform="rotate(45 7 7)"/></svg>'
    },
    {
      k: 'lg', short: 'Lega', full: 'Lega',
      rank: ['alla Lega', 'la Lega'], btn: 'Lega', dot: 'lg',
      light: '#047857', dark: '#6EE7B7', sub: 'Solo posizioni documentate', ordList: 0,
      data: { 1: [0,0,'',''], 2: [0,0,'',''], 3: [0,0,'',''], 4: [0,0,'',''] },
      glyph: '<svg viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="2" width="10" height="10" rx="2" fill="var(--lg)"/></svg>'
    },
    {
      k: 'fi', short: 'FI', full: 'Forza Italia',
      rank: ['a Forza Italia', 'Forza Italia'], btn: 'FI', dot: 'fi',
      light: '#0E7490', dark: '#67E8F9', sub: 'Solo posizioni documentate', ordList: 0,
      data: { 1: [0,0,'',''], 2: [0,0,'',''], 3: [0,0,'',''], 4: [0,0,'',''] },
      glyph: '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1.5L13 12.5H1Z" fill="var(--fi)"/></svg>'
    }
  ],
  guide: {
    keys: ['ter', 'ser'],
    sections: [
      {
        1: { what: 'Contesto domanda 1.', agree: 'Ragioni a favore.', disagree: 'Ragioni contro.' },
        2: { what: 'Contesto domanda 2.', agree: 'Ragioni a favore.', disagree: 'Ragioni contro.' }
      },
      {
        3: { what: 'Contesto domanda 3.', agree: 'Ragioni a favore.', disagree: 'Ragioni contro.' },
        4: { what: 'Contesto domanda 4.', agree: 'Ragioni a favore.', disagree: 'Ragioni contro.' }
      }
    ]
  }
};

const fullTitle = `${starterCfg.title} · ${starterCfg.subtitle}`;
const dataJs = `// Dati del questionario: ${starterCfg.title} (${starterCfg.subtitle})\nconst CFG = ${JSON.stringify(starterCfg, null, 2)};\n`;
const html = `<!doctype html>
<html lang="it">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>${fullTitle}</title>
  <link rel="manifest" href="scheda.webmanifest">
  <meta name="theme-color" content="#0A7C74">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="Scheda">
  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">
  <link rel="icon" type="image/svg+xml" href="icons/icon.svg">
  <link rel="stylesheet" href="css/fonts.css">
  <link rel="stylesheet" href="css/scheda.css">
</head>
<body>
  <div class="bar"><div class="wrap">
    <button class="brand" id="home" aria-label="Torna all'inizio"><svg viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="11" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M7.5 13.5l3.8 3.8 7.2-8" fill="none" stroke="var(--me)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>${fullTitle}</button>
    <div class="prog" id="prog" hidden><div class="t"><span id="ptxt"></span><span id="pn"></span></div><div class="segs" id="segs"></div></div>
    <div class="barin" style="width:auto;margin-left:auto;display:flex;gap:8px;align-items:center;justify-content:flex-end"><a class="pill" href="index.html" id="hub" style="text-decoration:none;color:inherit">Altre città</a><button class="pill" id="pbtn" aria-expanded="false" aria-haspopup="true"></button><button class="pill" id="sbtn" aria-expanded="false" hidden>Sezioni</button><div class="menu" id="menu" hidden></div><div class="menu" id="pmenu" hidden></div></div>
  </div></div>
  <main class="wrap" id="app"></main>
  <template id="economy-guide-template"></template>
  <script src="data/${slug}.js"></script>
  <script src="js/engine.js"></script>
  <script>if('serviceWorker' in navigator&&/^https?:/.test(location.protocol))addEventListener('load',function(){navigator.serviceWorker.register('sw.js').catch(function(){})})</script>
</body>
</html>
`;

fs.writeFileSync(dataPath, dataJs, 'utf8');
fs.writeFileSync(htmlPath, html, 'utf8');

console.log(`Creato nuovo comune pilota "${cityName}":`);
console.log(`- Dati: data/${slug}.js`);
console.log(`- Pagina: ${slug}.html`);
console.log(`Ricordati di aggiungerlo in index.html e sw.js!`);
