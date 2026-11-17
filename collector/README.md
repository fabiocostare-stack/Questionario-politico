# Collettore statistico anonimo (facoltativo)

Piccolo Cloudflare Worker + database D1 (piano gratuito). Riceve **solo** se l'utente spunta il consenso a fine questionario.

Salva: città, versione del questionario, risposte (0-5), domande segnate «conta molto», giorno (UTC, senza ora).
Non salva: IP, user-agent, cookie, identificativi, ora esatta.

## Attivazione (una tantum, da PowerShell)

```powershell
cd collector
npx wrangler login
npx wrangler d1 create scheda-politica-stats          # copia database_id in wrangler.toml
npx wrangler d1 execute scheda-politica-stats --remote --file=schema.sql
npx wrangler secret put ADMIN_TOKEN                   # scegli una stringa lunga casuale
npx wrangler deploy                                   # stampa l'URL del Worker
```

Poi incolla l'URL (senza slash finale) in `js/engine.js`:

```js
const COLLECT_URL='https://scheda-politica-stats.<tuo-account>.workers.dev';
```

e fai commit/push. Finché `COLLECT_URL` è vuoto, il riquadro di invio **non compare**.

Consigliato nella dashboard Cloudflare: *Security → WAF → Rate limiting rules* (es. 10 richieste/minuto su `/submit`).

## Consultare le statistiche (solo tu)

```powershell
curl -H "Authorization: Bearer IL_TUO_TOKEN" "https://scheda-politica-stats.<tuo-account>.workers.dev/stats?city=rimini"
```

Restituisce, per ogni domanda, la distribuzione delle risposte (indice 0-5), la media e quante volte è stata segnata «conta molto».

## Cancellazione (es. 12 mesi dopo il voto)

```powershell
npx wrangler d1 execute scheda-politica-stats --remote --command "DELETE FROM submissions"
```

## Regola per eventuali rapporti pubblici

Pubblicare solo dati aggregati e solo quando ci sono almeno 30 invii per città.
