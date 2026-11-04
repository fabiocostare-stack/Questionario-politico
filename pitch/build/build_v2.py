# -*- coding: utf-8 -*-
import json, re, io
src='bologna.html'
s=open(src,encoding='utf-8').read()
dec=json.JSONDecoder(); i=s.find('"sections"')
for j in range(i,max(0,i-400000),-1):
    if s[j]=='{':
        try: o,end=dec.raw_decode(s[j:])
        except Exception: continue
        if isinstance(o,dict) and 'sections' in o: cfg=o; break

Q={1:"Il limite di 30 km/h deve restare in vigore su tutte le strade di quartiere.",
2:"Le corsie del tram devono essere riservate, senza condivisione con il traffico privato.",
3:"Dopo la Rossa e la Verde va realizzata anche la Linea Blu del tram.",
4:"Per fare spazio a tram e piste ciclabili vanno tolti parcheggi in strada.",
5:"L'accesso delle auto private al centro storico deve essere limitato ulteriormente.",
6:"Il Comune deve introdurre tetti agli affitti brevi, differenziati per zona.",
7:"Le nuove autorizzazioni per gli affitti brevi vanno bloccate finché non si conosce il numero reale degli alloggi.",
8:"Immobili pubblici e aree comunali devono essere usati per alloggi a canone calmierato per studenti.",
9:"Gli studentati privati devono riservare una quota di posti a prezzo calmierato per ottenere l'autorizzazione.",
10:"Nelle case comunali gli sfratti per morosità vanno sospesi quando la famiglia non ha alternative.",
11:"Le zone rosse devono restare in vigore anche dopo marzo 2027.",
12:"La spesa per la Polizia locale deve crescere più delle altre voci di bilancio.",
13:"Il Comune deve continuare a distribuire materiali sterili per ridurre i rischi del consumo di droga.",
14:"L'accoglienza dei richiedenti asilo a Bologna va ridotta.",
15:"La TARI deve restare invariata anche nel 2027.",
16:"La tariffa dei rifiuti deve dipendere da quanta indifferenziata produce ogni famiglia.",
17:"Per mantenere i servizi il Comune deve aumentare le tasse locali.",
18:"La tassa di soggiorno deve essere alzata per finanziare i servizi ai residenti.",
19:"Il sindaco della Città metropolitana deve essere eletto direttamente dai cittadini.",
20:"I nuovi alberi vanno piantati anche nelle piazze del centro storico, dove oggi mancano.",
21:"Il Comune non deve concedere nuova edificabilità su aree libere.",
22:"Per rigenerare le aree dismesse il Comune deve concedere più cubature ai privati.",
23:"Il nuovo stadio va costruito nell'area della Fiera.",
24:"La Torre Garisenda va finanziata con fondi pubblici comunali se i fondi statali non bastano.",
25:"La lista d'attesa dei nidi va azzerata anche per i bambini sotto i 12 mesi.",
26:"Le mense scolastiche devono mantenere la prevalenza di cibo biologico.",
27:"I genitori devono poter chiedere che i propri figli non partecipino alle attività su genere e affettività.",
28:"Il Comune deve negare gli spazi pubblici a chi si richiama al fascismo.",
29:"Il Comune deve riconoscere la cittadinanza onoraria ai minori stranieri nati in Italia."}
SECS=[("1. Mobilità",1,5),("2. Casa e studenti",6,10),("3. Sicurezza",11,14),("4. Bilancio e tasse",15,19),("5. Città, verde e territorio",20,24),("6. Scuola, servizi e diritti",25,29)]
cfg['sections']=[{'t':t,'q':[[n,Q[n]] for n in range(a,b+1)]} for t,a,b in SECS]
cfg['axes']=[
 {'id':'mob','n':'Mobilità','lo':'Auto e strade al centro','hi':'Tram, bici e strade di quartiere','ml':'Auto e strade','mh':'Tram e bici','p':[1,2,3,4,5],'m':[]},
 {'id':'casa','n':'Casa e studenti','lo':'Mercato e proprietà privata','hi':'Regole e alloggi pubblici','ml':'Mercato','mh':'Regole e alloggi','p':[6,7,8,9,10],'m':[]},
 {'id':'sic','n':'Sicurezza','lo':'Prevenzione e diritti','hi':'Controllo e ordine','ml':'Prevenzione','mh':'Controllo','p':[11,12,14],'m':[13]},
 {'id':'ris','n':'Bilancio e tasse','lo':'Meno tasse e più privati','hi':'Più tasse e più servizi','ml':'Meno tasse','mh':'Più tasse','p':[17,18],'m':[15,16]},
 {'id':'ter','n':'Città, verde e governo','lo':'Costruire e affidarsi ai privati','hi':'Verde, suolo fermo e regole','ml':'Costruire','mh':'Verde e regole','p':[19,20,21,24],'m':[22,23]},
 {'id':'dir','n':'Scuola, servizi e diritti','lo':'Tradizione e famiglia','hi':'Servizi pubblici e diritti','ml':'Tradizione','mh':'Servizi e diritti','p':[25,26,28,29],'m':[27]}]

MAP={6:1,12:11,15:14,16:13,23:29,24:28}  # vecchie -> nuove
for sub in cfg['subjects']:
    old=sub.get('data',{}) or {}
    new={}
    for n in range(1,30):
        new[str(n)]=[0,0,"",""]
    for o,n in MAP.items():
        v=old.get(str(o))
        if v and v[0] not in (0,None): new[str(n)]=v
    sub['data']=new

G={}
for f in ['guide_a','guide_b','guide_c']:
    G.update(json.load(open('pitch/build/%s.json'%f,encoding='utf-8')))
keys=['mob','casa','sic','ris','ter','dir']
sec_guides=[]
for t,a,b in SECS:
    sec_guides.append({str(n):G[str(n)] for n in range(a,b+1)})
cfg['guide']={'keys':keys,'sections':sec_guides}
cfg['intro']['lead']="Rispondi a {TOTAL} affermazioni su mobilità, casa, sicurezza, bilancio, territorio e diritti. Ognuna nasce da una decisione concreta del Comune del 2025-2026: alla fine vedi il tuo profilo su {AXES} temi e, dove le posizioni sono documentate, quanto sei vicino alle forze politiche cittadine."
cfg['intro']['demo']=Q[1]
cfg['intro']['notes']="Versione pilota. Ogni domanda nasce da un atto, un bando o una decisione del Comune tra il 2025 e il novembre 2026, e la guida di ogni domanda spiega il contesto. Le posizioni delle forze politiche sono assegnate solo dove un voto o una dichiarazione sono documentati: per le altre non c'è nessuna base, quindi il confronto è ancora parziale. I candidati alle comunali 2027 non sono ancora noti. Le risposte restano solo nel tuo browser e il profilo è anonimo."

new_json=json.dumps(cfg,ensure_ascii=False,separators=(',',':'))
out=s[:j]+new_json+s[j+end:]

p1=("data=section===0?null:section===1?WORK_GUIDE:section===2?INST_GUIDE:GUIDE_DATA[section];",
    "data=(GCFG.sections&&GCFG.sections[section])||(section===0?null:section===1?WORK_GUIDE:section===2?INST_GUIDE:GUIDE_DATA[section]);")
p2=("if(CFG.guide)for(let s=5;s<=10;s++){","if(CFG.guide&&!GCFG.sections)for(let s=5;s<=10;s++){")
p3=("if(section===0){content.appendChild($('economy-guide-template').content.cloneNode(true))}else{",
    "if(section===0&&!(GCFG.sections&&GCFG.sections[0])){content.appendChild($('economy-guide-template').content.cloneNode(true))}else{")
for a,b in (p1,p2,p3):
    assert out.count(a)==1, ('patch non trovata', a[:50], out.count(a))
    out=out.replace(a,b)
out=out.replace('</head>','<style>.guide-item{scroll-margin-top:96px}#guide-top{scroll-margin-top:96px}.guide-question{scroll-margin-top:96px}</style></head>')
open('pitch/build/bologna-v2.html','w',encoding='utf-8').write(out)
print('scritto bologna-v2.html |', len(out), 'byte | domande:', sum(len(x['q']) for x in cfg['sections']))
