# Scheda Politica — documenti di lavoro

Repository **privato**: contiene i documenti di lavoro del progetto. Il sito pubblico vive altrove.

| | |
|---|---|
| Sito pubblicato | https://fabiocostare-stack.github.io/Questionario-politico/ |
| Repo del sito | `fabiocostare-stack/Questionario-politico` (pubblico, GitHub Pages da `main`) |
| Questo repo | privato, **solo documenti** |

## Regole

- Nel repo del sito, `main` contiene **solo ciò che è pubblicato**. Ogni modifica passa da un branch e da una pull request.
- Qui non serve nessun vincolo: è tutto materiale di lavoro.
- **Non copiare `pitch/` nel repo pubblico**: è il motivo per cui esiste questo repository.

## Come vedere il sito in locale

```bash
git clone https://github.com/fabiocostare-stack/Questionario-politico.git
cd Questionario-politico
python3 -m http.server 8000
# poi apri http://localhost:8000/bologna.html
```

Serve il server locale, non il doppio clic sul file: da `file://` il service worker e il manifest non funzionano (il questionario sì, ma non puoi provare l'offline).

## Cosa contiene

| File | A cosa serve |
|---|---|
| `pitch/one-pager.md` · `.html` · `.pdf` | la scheda di presentazione per le testate |
| `pitch/mail-facta.md` | il testo della mail a Facta e le note di invio |
| `pitch/revisione-domande-bologna.md` | audit delle 30 domande vecchie |
| `pitch/domande-bologna-v2.md` | le 29 domande riscritte, con i fatti datati |
| `pitch/fonti-bologna-v2.md` | fonti con URL e stato della verifica |
| `pitch/guide-bologna-v2.md` | le guide per domanda, in forma leggibile |
| `pitch/checklist-bologna.md` | le 9 tappe di lancio con i criteri di chiusura |
| `pitch/build/` | script e JSON che generano `bologna-v2.html` |

## Rigenerare `bologna-v2.html`

Lo script `pitch/build/build_v2.py` legge `bologna.html` dalla cartella corrente e scrive `pitch/build/bologna-v2.html`. Serve quindi una copia del repo del sito:

```bash
cp /percorso/Questionario-politico/bologna.html .
python3 pitch/build/build_v2.py
rm bologna.html
```

## Punto della situazione

**Fatto**: scheda di Bologna riscritta (29 domande, 6 assi), guide per domanda scritte e integrate nell'interfaccia, fonti raccolte e classificate.

**Da fare**:
1. chiudere le **6 fonti mancanti** elencate in fondo a `fonti-bologna-v2.md`;
2. la **tappa 3**: matrice delle posizioni documentate per ogni lista (target: 8 posizioni su almeno 3 assi per lista);
3. solo dopo, il confronto con le liste può essere riacceso.

**Regola ferma**: nessuna posizione attribuita a una lista senza una fonte primaria. Meglio 23 domande documentate che 29 con sei buchi.

---

*Questo repository sostituisce il branch `lavoro` del repo del sito, dove i documenti erano finiti per errore nella pubblicazione Pages.*
