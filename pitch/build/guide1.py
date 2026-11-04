import json
G={}
G[1]=dict(what="Se il limite di 30 km/h debba restare sui 258 km di strade di quartiere definiti dal Piano particolareggiato approvato il 18 marzo 2026, dopo che il TAR aveva annullato i provvedimenti precedenti perche non motivati strada per strada.",
 agree="Chi e d'accordo cita il calo di incidenti e di vittime tra pedoni e ciclisti, gli obiettivi Ue e Onu al 2030 e il fatto che il nuovo piano motivi ora ogni singola strada, rispondendo proprio a cio che il TAR contestava.",
 disagree="Chi e in disaccordo sostiene che un limite esteso a due terzi della rete rallenti traffico, consegne e trasporto pubblico, che multe e controlli pesino su chi lavora in auto e che il TAR abbia gia giudicato illegittimo un limite generalizzato.")
G[2]=dict(what="Se le corsie del tram debbano restare riservate senza condivisione con auto e bus, ora che a settembre 2026 sono partite le prove sui primi 7 km della Linea Rossa e sono tornati i doppi sensi su diverse strade.",
 agree="Chi e d'accordo ricorda che un tram che divide la corsia perde velocita e regolarita, e che l'investimento si giustifica solo con tempi di percorrenza garantiti.",
 disagree="Chi e in disaccordo osserva che la corsia riservata toglie spazio agli altri veicoli, che i cantieri hanno compresso la viabilita per anni e che senza abbastanza tram in servizio la corsia resta vuota.")
G[3]=dict(what="Se il Comune debba programmare una terza linea tranviaria dopo la Rossa, in collaudo, e la Verde, in costruzione.",
 agree="Chi e d'accordo sostiene che una rete funziona solo se diventa maglia, che la terza linea coprirebbe direttrici oggi senza tram e che la programmazione va fatta ora per accedere ai finanziamenti.",
 disagree="Chi e in disaccordo fa notare che le prime due linee sono in ritardo e costano piu del previsto, e che conviene chiudere cio che e aperto prima di aprire un nuovo fronte.")
G[4]=dict(what="Se per tram, ciclabili e moderazione della velocita si debbano eliminare posti auto in strada, come prevede la fase due della Citta 30 con almeno 100 interventi entro fine mandato.",
 agree="Chi e d'accordo parte dal fatto che lo spazio stradale e finito: ogni posto auto toglie metri a corsie, ciclabili o marciapiedi, e cita i parcheggi scambiatori come alternativa.",
 disagree="Chi e in disaccordo segnala che residenti, artigiani e commercianti dipendono dalla sosta in strada, che i parcheggi scambiatori non bastano e che togliere posti senza alternative sposta il problema nei quartieri vicini.")
G[5]=dict(what="Se l'accesso delle auto private al centro storico debba essere limitato ulteriormente, tra Sirio, pedonalizzazioni e riqualificazione delle strade centrali.",
 agree="Chi e d'accordo cita qualita dell'aria, incidentalita e vivibilita, e sostiene che il centro pedonale favorisca il commercio di vicinato, come nelle citta che hanno pedonalizzato per prime.",
 disagree="Chi e in disaccordo ricorda che nel centro vivono e lavorano decine di migliaia di persone, che artigiani e consegne hanno bisogno di accesso e che senza trasporto pubblico adeguato i divieti penalizzano chi non ha alternative.")
G[6]=dict(what="Se il Comune debba introdurre limiti per zona alle locazioni turistiche brevi, dopo che il Consiglio di Stato, con la sentenza 10361/2025, ha annullato le restrizioni precedenti per un vizio di procedura.",
 agree="Chi e d'accordo sostiene che la conversione degli alloggi in affitti turistici riduca l'offerta residenziale e alzi i canoni, e che la competenza urbanistica consenta limiti differenziati per quartiere.",
 disagree="Chi e in disaccordo obietta che la proprieta privata non puo essere limitata per zone senza una legge nazionale, che la sentenza ha gia bocciato l'impianto precedente e che colpire l'affitto breve toglie un reddito a molte famiglie.")
G[7]=dict(what="Se sospendere le nuove autorizzazioni per affitti brevi finche non si conosce il numero reale degli alloggi destinati ai turisti.",
 agree="Chi e d'accordo parte dal dato mancante: senza un censimento non si puo regolare nulla, e un blocco temporaneo evita che la situazione peggiori mentre si costruisce il registro.",
 disagree="Chi e in disaccordo parla di incertezza per chi ha investito, di ricorsi probabili e di un blocco che colpisce i piccoli proprietari mentre le grandi strutture alberghiere restano fuori.")
G[8]=dict(what="Se immobili e aree comunali debbano essere destinati ad alloggi per studenti a canone calmierato, come nelle delibere che prevedono circa 90 posti letto e 30 alloggi di emergenza.",
 agree="Chi e d'accordo ricorda che una singola a Bologna costa in media 543 euro e un letto 420, che il patrimonio pubblico inutilizzato e ampio e che il recupero e piu rapido di una nuova costruzione.",
 disagree="Chi e in disaccordo osserva che recuperare immobili ha costi alti e tempi lunghi, che i posti prodotti sarebbero una frazione della domanda e che lo studentato non risolve il problema generale degli affitti.")
G[9]=dict(what="Se l'autorizzazione agli studentati privati debba essere condizionata a una quota di posti a prezzo calmierato.",
 agree="Chi e d'accordo si appoggia alle ricerche che mostrano la finanziarizzazione dell'abitare studentesco, e considera la convenzione uno strumento gia usato per ottenere contropartite.",
 disagree="Chi e in disaccordo teme che l'onere riduca il numero di posti costruiti, che spinga i privati altrove e che il contenzioso allunghi i tempi invece di aumentare l'offerta.")
G[10]=dict(what="Se nelle case comunali gli sfratti per morosita vadano sospesi quando la famiglia non ha alternative abitative.",
 agree="Chi e d'accordo cita l'aumento delle morosita non colpevoli, la presenza di minori e l'esistenza dei 30 alloggi di pronta accoglienza come rete di supporto.",
 disagree="Chi e in disaccordo obietta che sospendere i pagamenti scarica i costi sugli altri inquilini e sul Comune, che serve distinguere chi non puo da chi non paga e che gli alloggi disponibili sono gia pochi.")
json.dump(G,open('pitch/build/guide_a.json','w'),ensure_ascii=False,indent=0)
print('Q1-10 ok', len(G))
