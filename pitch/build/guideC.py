# -*- coding: utf-8 -*-
import json
G={}
G[20]=dict(what="Se i nuovi alberi vadano piantati anche nelle piazze del centro storico, dove oggi mancano, come nelle piantumazioni in vaso del 2026.",
 agree="Chi è d'accordo cita le ondate di calore e le isole di calore urbane, ricorda che il centro è la zona più esposta e chiede una risposta strutturale, non temporanea.",
 disagree="Chi è in disaccordo osserva che gli alberi in vaso sono provvisori e costosi, che in centro mancano sottoservizi e spazio per le radici, e che servono progetti esecutivi prima delle piantumazioni.")
G[21]=dict(what="Se il Comune debba rinunciare a nuova edificabilità su aree libere.",
 agree="Chi è d'accordo parte dal dato sul consumo di suolo e sostiene che la città abbia già aree dismesse sufficienti, e che costruire su suolo libero aumenti caldo e impermeabilizzazione.",
 disagree="Chi è in disaccordo ricorda che senza nuova edificabilità calano gli oneri di urbanizzazione che finanziano i servizi, e che la domanda di case e spazi produttivi resta alta.")
G[22]=dict(what="Se per rigenerare le aree dismesse il Comune debba concedere più cubature ai privati.",
 agree="Chi è d'accordo sostiene che i privati non investano dove non c'è margine, che le aree dismesse abbiano costi di bonifica e che la cubatura sia la moneta con cui si paga la rigenerazione.",
 disagree="Chi è in disaccordo teme la speculazione e l'aumento dei valori immobiliari, e chiede che la rigenerazione arrivi con vincoli su casa pubblica e servizi, non con più volume.")
G[23]=dict(what="Se il nuovo stadio debba essere costruito nell'area della Fiera, come prevede l'accordo del 30 settembre 2026 tra Fiera e Bologna FC, con 35.000 posti e lavori fino al 2031.",
 agree="Chi è d'accordo cita la posizione servita dai trasporti, il recupero di un'area fieristica e la possibilità di liberare il Dall'Ara per altri usi, senza cantieri in un quartiere residenziale.",
 disagree="Chi è in disaccordo rileva che gli investitori non sono ancora stati trovati, che una parte del costo ricadrà sul pubblico e che l'area fieristica è uno dei pochi grandi spazi ancora disponibili per la città.")
G[24]=dict(what="Se, quando i fondi statali non bastano, la Torre Garisenda debba essere finanziata con soldi pubblici comunali.",
 agree="Chi è d'accordo ricorda che la torre è un monumento simbolo e che la sua sicurezza riguarda l'intero centro storico, con ricadute su residenti e attività, e cita l'Art Bonus già attivato.",
 disagree="Chi è in disaccordo sostiene che il Comune abbia priorità più urgenti, che i costi continuino a crescere senza un quadro certo e che il restauro riguardi un bene di rilievo nazionale.")
G[25]=dict(what="Se la lista d'attesa dei nidi debba essere azzerata anche per i bambini sotto i 12 mesi, dopo che a settembre 2026 è stata azzerata quella dai 9 ai 36 mesi.",
 agree="Chi è d'accordo sostiene che il nido sia un servizio educativo e non solo un parcheggio, che le 52 famiglie escluse restino senza alternative e che l'investimento ripaghi in occupazione femminile.",
 disagree="Chi è in disaccordo osserva che i posti per i lattanti richiedono spazi e rapporti numerici più stretti, quindi costi molto più alti per bambino, e che le risorse disponibili sono limitate.")
G[26]=dict(what="Se le mense scolastiche debbano mantenere la prevalenza di cibo biologico, nel nuovo appalto di refezione da 54,7 milioni.",
 agree="Chi è d'accordo cita gli effetti su salute e ambiente, il fondo nazionale per le mense biologiche e il valore educativo del pasto condiviso.",
 disagree="Chi è in disaccordo osserva che il biologico costa di più e che le risorse potrebbero andare a qualità, personale e riduzione degli sprechi, chiedendo che i menù rispettino le linee guida nutrizionali.")
G[27]=dict(what="Se i genitori debbano poter chiedere che i propri figli non partecipino alle attività su genere e affettività nelle scuole dell'infanzia comunali.",
 agree="Chi è d'accordo rivendica il ruolo educativo della famiglia, chiede trasparenza sui materiali e sostiene che i bambini piccoli non vadano esposti a temi che i genitori non condividono.",
 disagree="Chi è in disaccordo ricorda che le linee pedagogiche nazionali prevedono queste attività, che la scuola dell'infanzia è un servizio educativo con un progetto proprio e che l'esonero selettivo crea disuguaglianze tra bambini.")
G[28]=dict(what="Se il Comune debba negare gli spazi pubblici a chi si richiama al fascismo.",
 agree="Chi è d'accordo cita la norma costituzionale che vieta la ricostituzione del partito fascista e le delibere con cui altri comuni hanno negato patrocini e sale.",
 disagree="Chi è in disaccordo teme che il criterio sia affidato alla valutazione politica di chi governa, e chiede che i divieti passino per accertamenti giudiziari e non per orientamenti.")
G[29]=dict(what="Se il Comune debba riconoscere la cittadinanza onoraria ai minori stranieri nati o cresciuti in Italia.",
 agree="Chi è d'accordo la considera un riconoscimento simbolico per chi è cresciuto qui, senza effetti giuridici, e ricorda che molti consigli comunali hanno deliberato in questo senso.",
 disagree="Chi è in disaccordo osserva che la cittadinanza si concede per legge, che un atto comunale crea aspettative senza effetti e che la questione vada decisa in Parlamento.")
json.dump(G,open('pitch/build/guide_c.json','w'),ensure_ascii=False)
print('ok',len(G))
