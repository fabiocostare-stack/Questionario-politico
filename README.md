# Scheda Politica — documenti di lavoro

Branch **`lavoro`** di un repository privato. Contiene i documenti di lavoro; il sito pubblicato sta su **`main`**.

| | |
|---|---|
| Sito | https://scheda-politica.fabio-costa-re.workers.dev/ |
| Hosting | Cloudflare Workers (asset statici), deploy automatico dal branch `main` |
| Repository | privato |
| Documenti | questo branch (`lavoro`) |

## La regola che conta

**In `main` solo i file del sito.** Cloudflare pubblica tutto ciò che sta in `main`: qualunque documento finisca lì diventa leggibile sul sito. I documenti stanno qui, su `lavoro`, e non vanno mai spostati su `main`.

L’unica eccezione ammessa in `main` sono i sei file di redirect in `Scheda_Politica_sito/`, che servono a non rompere i vecchi link.

## Come vedere il sito in locale

```bash
git clone https://github.com/fabiocostare-stack/Questionario-politico.git
cd Questionario-politico
python3 -m http.server 8000
# http://localhost:8000/bologna.html
```

Serve il server locale, non il doppio clic: da `file://` il service worker e il manifest non funzionano.

## Cosa contiene questo branch

| File | A cosa serve |
|---|---|
| `pitch/one-pager.md` · `.html` · `.pdf` | presentazione per le testate |
| `pitch/mail-facta.md` | testo della mail e note di invio |
| `pitch/revisione-domande-bologna.md` | audit delle 30 domande vecchie |
| `pitch/domande-bologna-v2.md` | le 29 domande riscritte, con i fatti datati |
| `pitch/fonti-bologna-v2.md` | fonti con URL e stato di verifica |
| `pitch/guide-bologna-v2.md` | guide per domanda, forma leggibile |
| `pitch/checklist-bologna.md` | le 9 tappe di lancio |
| `pitch/build/` | script, JSON e `bologna-v2.html` |

## Rigenerare `bologna-v2.html`

Lo script legge `bologna.html` dalla cartella corrente, quindi serve una copia del branch `main`:

```bash
git show main:bologna.html > bologna.html
python3 pitch/build/build_v2.py
rm bologna.html
```

## Note tecniche sull’hosting

- Cloudflare riscrive gli URL: `/bologna.html` risponde **307** verso `/bologna`. Funziona, i parametri si conservano (`?app=1` compreso). Non è un errore, e non va “corretto”: si romperebbe il deploy.
- `sw.js` esce con `cache-control: max-age=0, must-revalidate`: gli aggiornamenti del sito arrivano subito.
- Il vecchio indirizzo `fabiocostare-stack.github.io/Questionario-politico/` non esiste più (Pages si disattiva con il repo privato).

## Punto della situazione

**Fatto**: scheda di Bologna riscritta (29 domande, 6 assi), guide per domanda integrate nell’interfaccia, fonti raccolte e classificate, sito migrato e repository privatizzato.

**Da fare**:
1. chiudere le **6 fonti mancanti** (in fondo a `fonti-bologna-v2.md`);
2. **tappa 3**: matrice delle posizioni documentate per ogni lista (obiettivo: 8 posizioni su almeno 3 assi);
3. solo dopo, riaccendere il confronto con le liste.

**Regola ferma**: nessuna posizione attribuita a una lista senza una fonte primaria.
