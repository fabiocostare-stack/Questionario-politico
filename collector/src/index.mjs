/* Scheda Politica: raccolta statistica anonima e facoltativa.
   Cosa salva: città, versione del questionario, risposte (0-5), domande segnate "conta molto", giorno (UTC, senza ora).
   Cosa NON salva: indirizzo IP, user-agent, cookie, identificativi, ora esatta. */

const CITIES = new Set(['bologna', 'rimini', 'parma', 'piacenza', 'napoli']);
const MAX_BODY = 4096;
const MAX_Q = 60;

function corsHeaders(origin, env) {
  const allowed = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!origin || !allowed.includes(origin)) return null;
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body, status, extra) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...(extra || {}) },
  });
}

export function validate(p) {
  if (!p || typeof p !== 'object') return null;
  if (!CITIES.has(p.city)) return null;
  const version = typeof p.v === 'string' ? p.v : '';
  if (!/^[A-Za-z0-9._-]{1,32}$/.test(version)) return null;
  if (!p.a || typeof p.a !== 'object' || Array.isArray(p.a)) return null;
  const keys = Object.keys(p.a);
  if (keys.length < 10 || keys.length > MAX_Q) return null;
  const answers = {};
  let given = 0;
  for (const k of keys) {
    if (!/^\d{1,2}$/.test(k)) return null;
    const n = Number(k);
    if (n < 1 || n > MAX_Q) return null;
    const val = p.a[k];
    if (!Number.isInteger(val) || val < 0 || val > 5) return null;
    answers[n] = val;
    if (val > 0) given++;
  }
  if (given < 10) return null;
  const imp = Array.isArray(p.imp) ? p.imp : [];
  if (imp.length > MAX_Q) return null;
  const important = [];
  for (const n of imp) {
    if (!Number.isInteger(n) || !(n in answers) || answers[n] === 0) return null;
    if (!important.includes(n)) important.push(n);
  }
  return { city: p.city, version, answers, important };
}

function aggregate(rows) {
  const out = {};
  for (const r of rows) {
    const c = (out[r.city] = out[r.city] || { n: 0, versions: {}, questions: {} });
    c.n++;
    c.versions[r.version] = (c.versions[r.version] || 0) + 1;
    const answers = JSON.parse(r.answers);
    const important = new Set(JSON.parse(r.important));
    for (const [q, v] of Object.entries(answers)) {
      const s = (c.questions[q] = c.questions[q] || { dist: [0, 0, 0, 0, 0, 0], important: 0 });
      s.dist[v]++;
      if (important.has(Number(q))) s.important++;
    }
  }
  for (const c of Object.values(out)) {
    for (const s of Object.values(c.questions)) {
      const given = s.dist.slice(1).reduce((a, b) => a + b, 0);
      s.mean = given ? Number((s.dist.reduce((a, b, i) => a + b * i, 0) / given).toFixed(2)) : null;
    }
  }
  return out;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeaders(request.headers.get('Origin'), env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: cors ? 204 : 403, headers: cors || {} });
    }

    if (url.pathname === '/submit' && request.method === 'POST') {
      if (!cors) return json({ error: 'origin' }, 403);
      const text = await request.text();
      if (text.length > MAX_BODY) return json({ error: 'size' }, 413, cors);
      let payload;
      try {
        payload = JSON.parse(text);
      } catch {
        return json({ error: 'json' }, 400, cors);
      }
      const d = validate(payload);
      if (!d) return json({ error: 'invalid' }, 400, cors);
      const day = new Date().toISOString().slice(0, 10);
      await env.DB.prepare('INSERT INTO submissions (day, city, version, answers, important) VALUES (?1, ?2, ?3, ?4, ?5)')
        .bind(day, d.city, d.version, JSON.stringify(d.answers), JSON.stringify(d.important))
        .run();
      return json({ ok: true }, 201, cors);
    }

    if (url.pathname === '/stats' && request.method === 'GET') {
      const auth = request.headers.get('Authorization') || '';
      if (!env.ADMIN_TOKEN || auth !== 'Bearer ' + env.ADMIN_TOKEN) return json({ error: 'unauthorized' }, 401);
      const city = url.searchParams.get('city');
      const stmt = city && CITIES.has(city)
        ? env.DB.prepare('SELECT day, city, version, answers, important FROM submissions WHERE city = ?1 LIMIT 50000').bind(city)
        : env.DB.prepare('SELECT day, city, version, answers, important FROM submissions LIMIT 50000');
      const { results } = await stmt.all();
      return json(aggregate(results || []), 200);
    }

    return json({ error: 'not found' }, 404, cors || {});
  },
};
