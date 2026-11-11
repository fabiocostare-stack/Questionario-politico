/* Service worker: la pagina funziona anche senza rete dopo il primo accesso */
const V='scheda-v10';
const FILES=[
  './',
  'index.html',
  'hub.html',
  'nazionale.html',
  'bologna.html',
  'bologna-2027.html',
  'bologna-estratto.html',
  'bologna-fonti.html',
  'milano.html',
  'rimini.html',
  'todi.html',
  'css/fonts.css',
  'css/scheda.css',
  'js/engine.js',
  'data/bologna.js',
  'data/milano.js',
  'data/rimini.js',
  'data/todi.js',
  'scheda.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'icons/favicon-32.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
/* pagine: prima la rete (per avere gli aggiornamenti), se manca la rete la copia salvata */
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(V).then(ch=>ch.put(r,c));return x}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('index.html'))));return}
  e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{const c=x.clone();caches.open(V).then(ch=>ch.put(r,c));return x})))});
