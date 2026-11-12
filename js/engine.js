/* Stili dinamici dei partiti e liste definiti in CFG.subjects */
(function injectSubjectStyles(){
  if (!CFG || !Array.isArray(CFG.subjects)) return;
  const radii = ['4px','6px','50%','3px 13px 3px 13px','12px 4px 12px 4px','2px 14px 14px 14px','4px'];
  const lVars = [], dVars = [], dotRules = [];
  CFG.subjects.forEach((sb, i) => {
    const dot = sb.dot || sb.k;
    const lCol = sb.light || '#434F65';
    const dCol = sb.dark || '#B0BACD';
    const rad = sb.radius || radii[i % radii.length];
    lVars.push('--' + dot + ':' + lCol);
    dVars.push('--' + dot + ':' + dCol);
    dotRules.push('.dots b.' + dot + '{background:var(--' + dot + ');color:#fff;border-radius:' + rad + '}');
    dotRules.push(':root[data-theme=dark] .dots b.' + dot + '{color:#0B1120}');
    dotRules.push('@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .dots b.' + dot + '{color:#0B1120}}');
  });
  const css = ':root{' + lVars.join(';') + '}\n' +
    '@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){' + dVars.join(';') + '}}\n' +
    ':root[data-theme="dark"]{' + dVars.join(';') + '}\n' +
    dotRules.join('\n');
  const el = document.createElement('style');
  el.setAttribute('data-subject-styles', CFG.id || 'comune');
  el.textContent = css;
  document.head.appendChild(el);
})();

const W=s=>String(s).replace(/partiti e liste/g,CFG.w.ps).replace(/partito o lista/g,CFG.w.p);
const T=s=>s.replace(/\{TOTAL\}/g,TOTAL).replace(/\{AXES\}/g,AXES.length);
const DATA={secs:CFG.sections};
const AXES=CFG.axes||[];
const BLURB=CFG.blurb;
const SUBJ=CFG.subjects;
const SECT=DATA.secs.map(s=>s.t.replace(/^\d+\.\s*/,''));
const OPEN_S=CFG.openSection>=0?CFG.openSection:DATA.secs.length, KEY=CFG.legacyKey||'__nessuna__';
const BAND_MODE=!!CFG.bandMode;
function bandInfo(pct,c,min=10){if(c<min)return {label:'—',fill:0};return pct>=58?{label:'Alta',fill:100}:pct>=34?{label:'Media',fill:58}:{label:'Bassa',fill:24}}
const VOTES={};SUBJ.forEach(s=>VOTES[s.k]={});let fsrc=CFG.layers===false?'prog':'oggi';
function buildFV(){SUBJ.forEach(s=>{const V=VOTES[s.k];for(const k in V)delete V[k];const D=s.data;for(const n in D){const e=D[n];const p=e[0],o=e[1];const v=(s.single||fsrc==='prog')?p:(o!==null&&o!==undefined?o:p);if(v>0&&!(s.skipTitle&&String(e[2]).includes(s.skipTitle)))V[n]=v}})}buildFV();
const QTXT={};DATA.secs.forEach((s,i)=>{if(i!==OPEN_S)s.q.forEach(([n,t])=>QTXT[n]=t)});
const TOTAL=Object.keys(QTXT).length;const PAPN=TOTAL;
const GCFG=CFG.guide||{};const WORK_GUIDE=GCFG.work||{},INST_GUIDE=GCFG.inst||{},EU_GUIDE=GCFG.eu||{},WAR_GUIDE=GCFG.war||{};


/* passi del flusso */
const steps=[];DATA.secs.forEach((s,i)=>{steps.push({k:'sec',s:i});if(i===OPEN_S)steps.push({k:'open',s:i});else s.q.forEach(([n,t])=>steps.push({k:'q',s:i,n,t}))});
const firstStep=i=>steps.findIndex(x=>x.k==='sec'&&x.s===i);
let ans={},imp={},open={},idx=0,view='intro',cmp=SUBJ[0].k,mode='close',menuOpen=false,confirmReset=false,guideQuestion=1,guideReturnIdx=0,guideDrawerOpen=false,guideSection='eco',guideExpandedSection='',testRun=false,testState=null;
/* profili anonimi: nome casuale, nessun dato personale, salvati solo su questo dispositivo */
const PKEY=CFG.storeKey;
let PR={cur:null,list:[],data:{}};
function anonName(){let n=PR.list.length+1;while(PR.list.some(p=>p.name==='Profilo '+n))n++;return 'Profilo '+n}
function persistPR(){try{localStorage.setItem(PKEY,JSON.stringify(PR))}catch(e){}}
function newProfile(){const id='p'+Date.now().toString(36)+Math.random().toString(36).slice(2,5);PR.list.push({id,name:anonName()});PR.data[id]={};return id}
function readPR(){try{const t=localStorage.getItem(PKEY);if(t){const p=JSON.parse(t);if(p&&Array.isArray(p.list)&&p.list.length&&p.data){PR=p;if(!PR.data[PR.cur])PR.cur=PR.list[0].id;return}}}catch(e){}
  let o={};try{o=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch(e){}
  const id=newProfile();PR.cur=id;PR.data[id]=o;persistPR()}
readPR();PR.list.forEach(p=>{if(!/^Profilo \d+$/.test(String(p.name))&&!p.custom)p.name=anonName()});persistPR();
function loadLocal(){try{const s=PR.data[PR.cur]||{};ans=s.ans||{};imp=s.imp||{};open=s.open||{};idx=s.idx||0;view=s.view||'intro';guideQuestion=s.guideQuestion||1;guideReturnIdx=s.guideReturnIdx||idx;guideSection=s.guideSection||'eco';if(idx>=steps.length)idx=steps.length-1}catch(e){}}loadLocal();

/* Modalità prova: usa risposte casuali solo in memoria e non modifica il profilo salvato. */
/* Risposte casuali ma coerenti: per ogni tema si estrae una posizione, e le domande di quel tema la seguono con un po' di rumore, come farebbe una persona vera. */
function coherentAnswers(){const a={},rnd=()=>Math.random();
  AXES.forEach(ax=>{const L=rnd()*2-1;[[ax.p,1],[ax.m,-1]].forEach(([list,sg])=>list.forEach(n=>{if(!QTXT[n])return;const x=3+2*L*sg+(rnd()+rnd()+rnd()-1.5)*2.2;a[n]=Math.max(1,Math.min(5,Math.round(x)))}))});
  Object.keys(QTXT).forEach(n=>{if(!a[n])a[n]=1+Math.floor(rnd()*5)});return a}
function randomTest(){
  if(!testRun)testState={ans:{...ans},imp:{...imp},open:{...open},idx,view,guideQuestion,guideReturnIdx,guideSection};
  testRun=true;ans=coherentAnswers();imp={};open={};idx=0;view='res';topicParty=null;shown=null;render();window.scrollTo(0,0)
}
function exitRandomTest(){
  if(!testRun||!testState)return;if(location.hash==='#demo')try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}const s=testState;ans=s.ans;imp=s.imp||{};open=s.open;idx=s.idx;view=s.view;guideQuestion=s.guideQuestion;guideReturnIdx=s.guideReturnIdx;guideSection=s.guideSection;testRun=false;testState=null;render();window.scrollTo(0,0)
}

/* condivisione: link con le risposte nell'hash (non lascia mai il browser) e immagine del profilo */
let shared=false;
const QKEYS=Object.keys(QTXT).map(Number).sort((a,b)=>a-b);
function encodeAns(){const hasImp=QKEYS.some(n=>imp[n]&&ans[n]>0),w=hasImp?4:3,bits=[];QKEYS.forEach(n=>{const v=ans[n];const st=v===undefined?0:v+1;bits.push((st>>2)&1,(st>>1)&1,st&1);if(hasImp)bits.push(imp[n]&&v>0?1:0)});while(bits.length%8)bits.push(0);let bin='';for(let i=0;i<bits.length;i+=8){let b=0;for(let j=0;j<8;j++)b=(b<<1)|bits[i+j];bin+=String.fromCharCode(b)}return (hasImp?'2.':'1.')+btoa(bin).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function decodeAns(str){try{const ver=str.startsWith('2.')?2:str.startsWith('1.')?1:0;if(!ver)return null;const w=ver===2?4:3;let t=str.slice(2).replace(/-/g,'+').replace(/_/g,'/');while(t.length%4)t+='=';const bin=atob(t);if(bin.length!==Math.ceil(QKEYS.length*w/8))return null;const bits=[];for(let i=0;i<bin.length;i++){const b=bin.charCodeAt(i);for(let j=7;j>=0;j--)bits.push((b>>j)&1)}const out={},im={};for(let k=0;k<QKEYS.length;k++){const st=(bits[k*w]<<2)|(bits[k*w+1]<<1)|bits[k*w+2];if(st>6)return null;if(st>0)out[QKEYS[k]]=st-1;if(ver===2&&bits[k*w+3]&&st>1)im[QKEYS[k]]=1}return {ans:out,imp:im}}catch(e){return null}}
function shareURL(){return location.href.split('#')[0]+'#r='+(CFG.shareId?CFG.shareId+'~':'')+encodeAns()}
function tryShared(){if(location.hash==='#demo'){testState={ans:{...ans},imp:{...imp},open:{...open},idx,view,guideQuestion,guideReturnIdx,guideSection};testRun=true;ans=coherentAnswers();imp={};open={};idx=0;view='res';return false}const m=/^#r=(?:([a-z0-9-]+)~)?([A-Za-z0-9_.-]+)$/.exec(location.hash);if(!m||(m[1]||null)!==(CFG.shareId||null))return;const dd=decodeAns(m[2]),d=dd&&dd.ans;if(d&&Object.keys(d).filter(k=>d[k]>0).length>=10){shared=true;ans=d;imp=dd.imp;open={};view='res'}return shared}tryShared();

let pmenuOpen=false,renaming=false,confirmDel=false;
const curName=()=>(PR.list.find(p=>p.id===PR.cur)||{}).name||'Profilo';
const profCount=id=>{const d=id===PR.cur?ans:(PR.data[id]||{}).ans||{};return Object.keys(d).filter(k=>QTXT[k]).length};
function leaveShared(){shared=false;try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}}
function switchProfile(id){if(testRun)exitRandomTest();if(shared)leaveShared();else save();PR.cur=id;persistPR();pmenuOpen=false;renaming=false;confirmDel=false;ans={};open={};idx=0;view='intro';loadLocal();render();window.scrollTo(0,0)}
function addProfile(){if(testRun)exitRandomTest();if(shared)leaveShared();else save();const id=newProfile();PR.cur=id;persistPR();pmenuOpen=false;renaming=false;confirmDel=false;ans={};open={};idx=0;view='intro';loadLocal();render();window.scrollTo(0,0)}
function delProfile(){if(testRun)exitRandomTest();const id=PR.cur;PR.list=PR.list.filter(p=>p.id!==id);delete PR.data[id];if(!PR.list.length){const n=newProfile();PR.cur=n}else PR.cur=PR.list[0].id;persistPR();confirmDel=false;pmenuOpen=false;ans={};open={};idx=0;view='intro';loadLocal();render();window.scrollTo(0,0)}
function importShared(){const d=ans,di=imp;leaveShared();const id=newProfile();PR.cur=id;open={};ans=d;imp=di;idx=0;view='res';guideQuestion=1;save();render();window.scrollTo(0,0)}
function renderProfileMenu(){
  const pb=$('pbtn'),pm=$('pmenu');if(!pb)return;
  pb.innerHTML='<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style="vertical-align:-3px;margin-right:6px"><circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4.5 20c1-4 4-5.5 7.5-5.5s6.5 1.5 7.5 5.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="pname">'+esc(shared?'Profilo condiviso':'Profili')+'</span>';
  pb.setAttribute('aria-expanded',pmenuOpen);pb.title='Profili anonimi su questo dispositivo';pm.hidden=!pmenuOpen;
  if(!pmenuOpen)return;pm.innerHTML='';
  pm.appendChild(h('p','pm-note','Profili anonimi: non serve nessun dato personale e restano solo su questo dispositivo.'));
  PR.list.forEach(p=>{const n=profCount(p.id);const b=h('button','',esc(p.name)+'<span class="n">'+n+'/'+TOTAL+'</span>');if(p.id===PR.cur&&!shared)b.setAttribute('aria-current','true');b.onclick=()=>switchProfile(p.id);pm.appendChild(b)});
  const act=h('div','pm-act');
  const nw=h('button','pm-btn','+ Nuovo profilo');nw.onclick=addProfile;act.appendChild(nw);
  if(!shared){
    if(renaming){const f=h('form','pm-form');const inp=h('input','linkbox');inp.maxLength=24;inp.value=curName();inp.setAttribute('aria-label','Nome del profilo');const ok=h('button','pm-btn','Salva');ok.type='submit';f.append(inp,ok);f.onsubmit=e=>{e.preventDefault();const v=inp.value.trim().slice(0,24);if(v){{const cp=PR.list.find(p=>p.id===PR.cur);cp.name=v;cp.custom=true};persistPR()}renaming=false;renderBar()};pm.appendChild(f);setTimeout(()=>inp.focus(),0)}
    else{const rn=h('button','pm-btn','Rinomina');rn.onclick=()=>{renaming=true;renderBar()};act.appendChild(rn);}
    const dl=h('button','pm-btn'+(confirmDel?' danger':''),confirmDel?'Conferma: elimina':'Elimina');dl.onclick=()=>{if(!confirmDel){confirmDel=true;renderBar();return}delProfile()};act.appendChild(dl)}
  pm.appendChild(act)}
function exitShared(){shared=false;try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}ans={};open={};idx=0;view='intro';loadLocal();if(view==='res'&&nAns()<1)view='intro'}
function cssVar(n){return getComputedStyle(document.documentElement).getPropertyValue('--'+n).trim()||'#888'}
function resolveVars(t){return t.replace(/var\(--([a-z0-9-]+)\)/g,(m,n)=>cssVar(n))}
function buildShareSVG(){
  const SVGW=1080,SVGH=1440,ink=cssVar('ink'),ink2=cssVar('ink2'),track=cssVar('track'),me=cssVar('me');
  const rows=PARTIES.map(p=>({k:p[0],l:p[1],a:aff(p[3]())})).filter(r=>r.a.c>=10).sort((x,y)=>y.a.pct-x.a.pct).slice(0,CFG.map?6:10);
  let g='<style>text{font-family:Helvetica,Arial,sans-serif;fill:'+ink2+';font-size:12px}.lab{font-weight:700;font-size:13px;fill:'+ink+'}.lab.me{fill:'+me+';font-size:14px}.t1{font-size:68px;font-weight:800;fill:'+ink+'}.t2{font-size:30px}.t3{font-size:26px;font-weight:700;fill:'+ink+'}.nm{font-size:30px;font-weight:600;fill:'+ink+'}.pc{font-size:32px;font-weight:800;fill:'+ink+'}.ft{font-size:22px}</style>';
  g+='<rect width="'+SVGW+'" height="'+SVGH+'" fill="'+cssVar('bg')+'"/>';
  g+='<text class="t1" x="80" y="130">'+esc(CFG.title)+'</text><text class="t2" x="80" y="186">Il mio profilo'+(CFG.subtitle?' · '+esc(CFG.subtitle):'')+' · '+Object.keys(ans).filter(k=>QTXT[k]&&ans[k]>0).length+' risposte con un voto</text>';
  g+='<text class="t3" x="80" y="250">'+esc(CFG.rankTitle)+'</text>';
  rows.forEach((r,i)=>{const y=300+i*62,b=BAND_MODE?bandInfo(r.a.pct,r.a.c):{label:r.a.pct+'%',fill:r.a.pct};g+=glyph(r.k,106,y-10,36)+'<text class="nm" x="146" y="'+y+'">'+esc(r.l)+'</text><rect x="400" y="'+(y-26)+'" width="520" height="22" rx="11" fill="'+track+'"/><rect x="400" y="'+(y-26)+'" width="'+(520*b.fill/100)+'" height="22" rx="11" fill="var(--'+r.k+')"/><text class="pc" x="1000" y="'+y+'" text-anchor="end">'+b.label+'</text>'});
  if(CFG.map){g+='<text class="t3" x="80" y="700">Sulla mappa</text>';
  g+=mapSVG().replace('<svg class="map"','<svg x="210" y="720" width="660" height="660"')}
  g+='<text class="ft" x="80" y="1412">'+esc(W(CFG.shareFooter))+'</text>';
  g=resolveVars(g);
  return '<svg xmlns="http://www.w3.org/2000/svg" width="'+SVGW+'" height="'+SVGH+'" viewBox="0 0 '+SVGW+' '+SVGH+'">'+g+'</svg>'}
async function saveImage(st){
  try{const svg=buildShareSVG();const url=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml;charset=utf-8'}));const img=new Image();await new Promise((ok,ko)=>{img.onload=ok;img.onerror=ko;img.src=url});
    const c=document.createElement('canvas');c.width=1080;c.height=1440;c.getContext('2d').drawImage(img,0,0);URL.revokeObjectURL(url);
    const blob=await new Promise(r=>c.toBlob(r,'image/png'));if(!blob)throw 0;const file=new File([blob],CFG.fileName+'.png',{type:'image/png'});
    if(navigator.canShare&&navigator.canShare({files:[file]})){try{await navigator.share({files:[file],title:'La mia '+CFG.title});st.textContent='Immagine pronta.';return}catch(e){if(e&&e.name==='AbortError')return}}
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=CFG.fileName+'.png';document.body.appendChild(a);a.click();a.remove();st.textContent='Immagine salvata nei download.'}
  catch(e){st.textContent='Non sono riuscito a creare l\'immagine su questo browser.'}}
function shareBlock(){
  const b=h('div','sharebox');b.appendChild(h('h3','','Salva o condividi il risultato'));
  b.appendChild(h('p','small','Il link contiene le tue risposte (solo i numeri, non le domande aperte) e funziona su qualsiasi dispositivo. Non passa da nessun server: resta nel link che copi. Per riprendere su un altro dispositivo apri il link e scegli «Salva come mio profilo».'));
  const row=h('div','row');const st=h('span','small sharestat');st.setAttribute('role','status');st.setAttribute('aria-live','polite');
  const inp=h('input','linkbox');inp.type='text';inp.readOnly=true;inp.hidden=true;inp.setAttribute('aria-label','Link con le tue risposte');inp.onfocus=()=>inp.select();
  const c1=h('button','btn ghost','Copia link');c1.type='button';c1.onclick=async()=>{const u=shareURL();inp.value=u;inp.hidden=false;try{await navigator.clipboard.writeText(u);st.textContent='Link copiato.'}catch(e){inp.focus();inp.select();st.textContent='Copialo da qui sotto.'}};
  const c2=h('button','btn ghost','Salva immagine');c2.type='button';c2.onclick=()=>{st.textContent='Creo l\'immagine…';saveImage(st)};
  row.append(c1,c2);b.append(row,inp,st);return b}
function save(){if(shared||testRun)return;PR.data[PR.cur]={ans,imp,open,idx,view,guideQuestion,guideReturnIdx,guideSection};persistPR()}
const $=id=>document.getElementById(id);
function h(t,c,x){const e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.innerHTML=W(x);return e}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const nAns=()=>Object.keys(ans).filter(k=>QTXT[k]).length;
const secCount=i=>{const q=DATA.secs[i].q;return i===OPEN_S?q.filter(([n])=>(open[n]||'').trim()).length:q.filter(([n])=>ans[n]!==undefined).length};
/* calcolo */
function axisScore(a,src){let sum=0,c=0;a.p.forEach(n=>{const v=src[n];if(v>0){sum+=v-3;c++}});a.m.forEach(n=>{const v=src[n];if(v>0){sum-=v-3;c++}});return c>=3?{pos:(sum/c/2+1)/2*100,c}:{c}}
/* Una coincidenza esatta distingue più chiaramente del semplice "quasi uguale". */
const matchPoints=[100,60,25,5,0];
const answerWeight=v=>(v===1||v===5)?1.4:(v===2||v===4)?1:.6;
/* Affinità depurata dal caso e pesata sulle domande che distinguono i partiti e liste.
   1) peso della domanda: le domande su cui i partiti e liste la pensano in modo diverso contano di più (0,4 + deviazione standard dei loro voti);
   2) livello del caso: punteggio che si otterrebbe rimescolando a caso le tue risposte sugli stessi voti del partito o lista; 0% = come il caso, 100% = coincidenza piena. */
const DISC={};
function discW(n){const k=fsrc+'|'+n;if(DISC[k]!==undefined)return DISC[k];const vs=[];PARTIES.forEach(p=>{const v=p[3]()[n];if(v>0)vs.push(v)});let w=.7;if(vs.length>=4){const m=vs.reduce((a,b)=>a+b)/vs.length;w=.4+Math.sqrt(vs.reduce((a,b)=>a+(b-m)**2,0)/vs.length)}return DISC[k]=w}
function affinity(items,src,min=1){
  const cnt=[0,0,0,0,0,0];items.forEach(n=>{const a=ans[n];if(QTXT[n]&&a>0)cnt[a]++});
  let t=0,wt=0,b=0,wb=0,c=0;
  items.forEach(n=>{const a=ans[n],v=src[n];if(!(QTXT[n]&&a>0&&v))return;const q=discW(n),w=answerWeight(a)*(imp[n]?2:1);
    t+=matchPoints[Math.abs(a-v)]*w*q;wt+=w*q;c++;
    let e=0,ew=0;for(let x=1;x<=5;x++){const wx=cnt[x]*answerWeight(x);e+=matchPoints[Math.abs(x-v)]*wx;ew+=wx}
    b+=(ew?e/ew:0)*w*q;wb+=w*q});
  if(c<min)return {c};
  const raw=t/wt,base=b/wb,adj=BAND_MODE?raw:(base>=99.9?0:(raw-base)/(100-base)*100);
  return {pct:Math.max(0,Math.min(100,Math.round(adj))),c,raw:Math.round(raw),base:Math.round(base)}}
function aff(src){const r=affinity(Object.keys(ans),src);return r.pct===undefined?{pct:0,c:r.c}:r}
const SH={me:'<svg viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="var(--me)"/></svg>'};SUBJ.forEach(x=>SH[x.k]=x.glyph);
const CHECK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="var(--me-ink)" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const OVLAB=['Per niente','Poco','Così così','Abbastanza','Del tutto'];function ovals(cur,onpick,idp){const w=h('div','ovals');w.setAttribute('role','radiogroup');w.setAttribute('aria-label','Quanto sei d\'accordo, da 1 a 5');for(let v=1;v<=5;v++){const c=h('div','ovc');if(cur===v)c.setAttribute('data-sel','true');const b=h('button','ov',String(v));b.type='button';b.id=idp+v;b.setAttribute('role','radio');b.setAttribute('aria-checked',cur===v);b.setAttribute('aria-label',v+' su 5, '+OVLAB[v-1]);b.onclick=()=>onpick(v);c.appendChild(b);c.appendChild(h('span','ovl',OVLAB[v-1]));w.appendChild(c)}return w}
/* barra */


const GUIDE_KEYS=GCFG.keys||[];const GN=CFG.guide?OPEN_S:-1;
const GUIDE_FRAMES=GCFG.frames||{};
function makeGuideEntry(n,t,sec){const f=GUIDE_FRAMES[sec],r=GUIDE_REASONS[n];return {what:'Il nodo è come bilanciare '+f.label+'.',agree:r?r[0]:f.agree,disagree:r?r[1]:f.disagree}}
const GUIDE_REASONS=GCFG.reasons||{};
const GUIDE_DATA={3:EU_GUIDE,4:WAR_GUIDE};
if(CFG.guide&&!GCFG.sections)for(let s=5;s<=10;s++){const g={};DATA.secs[s].q.forEach(([n,t])=>g[n]=makeGuideEntry(n,t,s));GUIDE_DATA[s]=g}
function renderBar(){
  renderProfileMenu();
  const inFlow=view==='flow';$('prog').hidden=view==='intro'||view==='guide';$('sbtn').hidden=view==='intro'||view==='guide';
  if(view!=='intro'&&view!=='guide'){const a=nAns();$('ptxt').textContent=view==='res'?'Risultato':SECT[steps[idx].s];$('pn').textContent=a+' / '+TOTAL;
    const sg=$('segs');sg.innerHTML='';DATA.secs.forEach((s,i)=>{if(i===OPEN_S)return;const t=s.q.length,d=secCount(i);const e=h('i','','<b style="width:'+(d/t*100)+'%"></b>');sg.appendChild(e)})}
  const m=$('menu');m.hidden=!menuOpen;$('sbtn').setAttribute('aria-expanded',menuOpen);
  if(menuOpen){m.innerHTML='';DATA.secs.forEach((s,i)=>{const t=s.q.length,d=secCount(i);const b=h('button','','<span>'+esc(SECT[i])+'</span><span class="n">'+d+'/'+t+'</span>');if(d===t)b.className='done';if(view==='flow'&&steps[idx].s===i)b.setAttribute('aria-current','true');b.onclick=()=>{if(testRun)exitRandomTest();menuOpen=false;idx=firstStep(i);view='flow';save();render()};m.appendChild(b)});
    const r=h('button','','<span><b>Il tuo risultato</b></span>');r.onclick=()=>{menuOpen=false;view='res';save();render()};m.appendChild(r)}
}
/* intro */
function renderIntro(m){
  const resume=nAns()>0;
  const hero=h('section','hero');
  const L=h('div','','<h1>'+CFG.intro.h1+'</h1><p class="lead">'+T(CFG.intro.lead)+'</p>');
  const f=h('div','facts',CFG.intro.facts.map(([a,b])=>'<div><b>'+T(a)+'</b><span>'+T(b)+'</span></div>').join(''));L.appendChild(f);
  const c=h('div','cta');const go=h('button','btn',resume?'Riprendi da dove eri':'Inizia');go.onclick=()=>{view='flow';if(!resume)idx=0;save();render()};c.appendChild(go);
  if(resume){const rs=h('button','btn ghost','Vedi il risultato');rs.onclick=()=>{view='res';save();render()};c.appendChild(rs)}
  const test=h('button','btn ghost','Vedi subito un esempio di risultato');test.type='button';test.onclick=randomTest;c.appendChild(test);L.appendChild(c);
  const R=h('aside','ballot','<h3>Come si risponde</h3><div class="demo">'+CFG.intro.demo+'</div>');
  const dm=h('div','ovals');let sel=4;const draw=()=>{dm.innerHTML='';dm.appendChild(ovals(sel,v=>{sel=v;draw()},'d'))};draw();R.appendChild(dm);
  
  R.appendChild(h('p','small','Prova a toccare un ovale. Se non hai un\'idea, scegli "Nessuna opinione": la domanda non conta.')).style.marginTop='18px';
  hero.append(L,R);m.appendChild(hero);
  m.appendChild(h('p','notes',CFG.intro.notes));if(CFG.version)m.appendChild(h('p','small','Versione del questionario: '+esc(CFG.version)));
}
/* Avanzamento delle risposte, allineato alle sezioni del questionario */
function liveHTML(){
  const w=h('aside','live','<h3>Avanzamento per sezione</h3><div class="sub">Risposte date sul totale di ogni sezione. Le domande aperte non entrano nel confronto politico.</div>');
  DATA.secs.forEach((s,i)=>{const done=s.q.filter(([n])=>i===OPEN_S?!!(open[n]||'').trim():ans[n]!==undefined).length;const total=s.q.length;const row=h('div','sec-progress');
    row.appendChild(h('div','sec-head','<span class="sec-name">'+esc(s.t.replace(/^\d+\.\s*/,''))+'</span><span class="sec-count">'+done+'/'+total+'</span>'));
    const bar=h('div','sec-track');bar.setAttribute('role','progressbar');bar.setAttribute('aria-label',s.t.replace(/^\d+\.\s*/,''));bar.setAttribute('aria-valuemin','0');bar.setAttribute('aria-valuemax',total);bar.setAttribute('aria-valuenow',done);
    const fill=h('span','sec-fill');fill.style.width=(total?done/total*100:0)+'%';bar.appendChild(fill);row.appendChild(bar);w.appendChild(row)});
  return w}
/* flusso */
function renderFlow(m){
  const st=steps[idx];const grid=h('div','flow');const card=h('section','card slide');card.id='card';const hasGuide=(st.k==='q'||st.k==='sec')&&st.s<GN;if(hasGuide){m.classList.add('has-guide-rail');const rail=h('aside','guide-rail');rail.setAttribute('aria-label','Accesso rapido');const gb=h('button','guide-rail-button','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h5.2c2.2 0 3.6 1 3.6 3v10c0-2-1.4-3-3.6-3H3.5zM20.5 5.5h-5.2c-2.2 0-3.6 1-3.6 3v10c0-2 1.4-3 3.6-3h5.2z"/></svg><span>Guida</span>');gb.type='button';gb.title='Apri la guida alle domande';gb.setAttribute('aria-label','Apri la guida alle domande');gb.setAttribute('aria-expanded',guideDrawerOpen);gb.onclick=()=>{guideDrawerOpen=!guideDrawerOpen;if(guideDrawerOpen)guideExpandedSection=GUIDE_KEYS[st.s]||guideExpandedSection;render()};rail.appendChild(gb);m.appendChild(rail)}
  const nth=st.k==='q'?DATA.secs[st.s].q.findIndex(([n])=>n===st.n)+1:0;
  if(st.k==='sec'){
    card.innerHTML='<div class="where"><span class="sect">'+(st.s===OPEN_S?'Per finire':'Sezione '+(st.s+1)+' di '+(OPEN_S<DATA.secs.length?DATA.secs.length-1:DATA.secs.length))+'</span><span class="pos">'+DATA.secs[st.s].q.length+(st.s===OPEN_S?' domande':' affermazioni')+'</span></div>'+'<div class="secline"><i style="width:0%"></i></div>'+'<h2 class="secbig">'+esc(SECT[st.s])+'</h2><p>'+esc(BLURB[st.s])+'</p>';
    const e=h('div','enter');const b=h('button','btn',st.s===OPEN_S?'Rispondi':'Comincia');b.onclick=()=>step(1);e.appendChild(b);card.appendChild(e);
  }else if(st.k==='open'){
    card.innerHTML='<div class="where"><span class="sect">Domande aperte</span><span class="pos">facoltative</span></div><div class="secline"><i style="width:100%"></i></div>';const o=h('div','opens');
    DATA.secs[OPEN_S].q.forEach(([n,t])=>{const d=h('div');const l=h('label','',esc(t));l.htmlFor='o'+n;const ta=h('textarea');ta.id='o'+n;ta.value=open[n]||'';ta.oninput=()=>{open[n]=ta.value;save()};d.append(l,ta);o.appendChild(d)});card.appendChild(o);
    const e=h('div','enter');const b=h('button','btn','Vedi il risultato');b.onclick=()=>{view='res';save();render();window.scrollTo(0,0)};e.appendChild(b);card.appendChild(e);
  }else{
    const guideLink=st.s<GN?'<button type="button" class="guide-link" id="guide-link">Guida alla domanda</button>':'';card.innerHTML='<div class="where"><span class="sect">'+esc(SECT[st.s])+'</span><span class="pos">'+nth+' di '+DATA.secs[st.s].q.length+'</span></div><div class="secline"><i style="width:'+Math.round(nth/DATA.secs[st.s].q.length*100)+'%"></i></div><h2 class="q">'+esc(st.t)+'</h2>';
    const sc=h('div','scale');sc.appendChild(ovals(ans[st.n],v=>pick(st.n,v===ans[st.n]?undefined:v),'q'));
    card.appendChild(sc);
    const u=h('div','under');const UR=h('span','underr');const sk=h('button','link','Nessuna opinione');sk.id='q0';sk.setAttribute('aria-pressed',ans[st.n]===0);sk.onclick=()=>pick(st.n,ans[st.n]===0?undefined:0);UR.appendChild(sk);const im=h('button','link','Conta molto per me');im.id='qimp';im.type='button';im.setAttribute('aria-pressed',!!imp[st.n]);im.title='Questa affermazione pesa il doppio nel calcolo (tasto I)';im.onclick=()=>toggleImp(st.n);UR.appendChild(im);
    if(st.s<GN){const chip=h('button','chip','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v18H6.5A2.5 2.5 0 0 1 4 18.5z" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M8 3v18" fill="none" stroke="currentColor" stroke-width="1.9"/></svg>Guida alla domanda');chip.type='button';chip.onclick=()=>{guideSection=GUIDE_KEYS[st.s]||'eco';guideQuestion=st.n;guideReturnIdx=idx;view='guide';save();render();window.scrollTo(0,0)};u.appendChild(chip)}u.appendChild(UR);card.appendChild(u);
  }
  const pg=h('div','pager');const bk=h('button','btn ghost back','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7"/></svg><span>Indietro</span>');bk.setAttribute('aria-label','Indietro');bk.disabled=idx===0;bk.onclick=()=>step(-1);
  const nx=h('button','btn ghost',st.k==='q'&&ans[st.n]!==undefined?'Avanti':'Salta');nx.onclick=()=>step(1);if(st.k==='q')pg.append(bk,nx);else pg.append(bk);
  const col=h('div','');if(!(pg.children.length===1&&pg.children[0].disabled))col.append(pg);col.append(card);grid.append(col,liveHTML());m.appendChild(grid);if(guideDrawerOpen&&(st.k==='q'||st.k==='sec')&&st.s<GN)renderGuideDrawer(m);
}
function step(d){const n=idx+d;if(n<0)return;if(n>=steps.length){view='res'}else idx=n;save();render();window.scrollTo({top:0})}
let timer=null;
function toggleImp(n){clearTimeout(timer);if(imp[n])delete imp[n];else imp[n]=1;save();const z=$('qimp');if(z)z.setAttribute('aria-pressed',!!imp[n])}
function pick(n,v){if(v===undefined){delete ans[n];delete imp[n]}else ans[n]=v;save();
  document.querySelectorAll('.ov').forEach((b,i)=>b.setAttribute('aria-checked',i+1===ans[n]));const z=$('q0');if(z)z.setAttribute('aria-pressed',ans[n]===0);
  const lv=document.querySelector('.live');if(lv)lv.replaceWith(liveHTML());renderBar();
  clearTimeout(timer);if(v!==undefined){const at=idx;timer=setTimeout(()=>{if(idx===at&&view==='flow')step(1)},340)}}
function renderGuideDrawer(m){
  const scrim=h('button','guide-drawer-scrim');scrim.setAttribute('aria-label','Chiudi il menu guida');scrim.onclick=()=>{guideDrawerOpen=false;render()};
  const panel=h('aside','guide-drawer');panel.setAttribute('aria-label','Indice delle guide');
  const head=h('div','guide-drawer-head');head.appendChild(h('h2','','Guide alle domande'));const close=h('button','guide-drawer-close','×');close.setAttribute('aria-label','Chiudi la guida');close.onclick=()=>{guideDrawerOpen=false;render()};head.appendChild(close);panel.appendChild(head);
  panel.appendChild(h('p','guide-drawer-hint','Scegli una domanda per aprire la spiegazione corrispondente.'));
  const groups=DATA.secs.slice(0,OPEN_S).map((sec,i)=>({key:GUIDE_KEYS[i],sec:i,label:sec.t.replace(/^\d+\.\s*/,'' )}));
  groups.forEach(g=>{const group=h('details','guide-drawer-group');group.setAttribute('name','guide-sections');if(guideExpandedSection===g.key)group.open=true;const summary=h('summary','',g.label);summary.setAttribute('aria-label','Mostra le domande: '+g.label);summary.addEventListener('click',()=>{guideExpandedSection=group.open?'':g.key});group.appendChild(summary);const list=h('nav','guide-drawer-list');list.setAttribute('aria-label','Domande: '+g.label);DATA.secs[g.sec].q.forEach(([n,t])=>{const b=h('button','',esc(n+'. '+t));if(guideSection===g.key&&n===guideQuestion)b.setAttribute('aria-current','true');b.onclick=()=>{guideSection=g.key;guideExpandedSection=g.key;guideDrawerOpen=false;guideQuestion=n;guideReturnIdx=idx;view='guide';save();render();window.scrollTo(0,0)};list.appendChild(b)});group.appendChild(list);panel.appendChild(group)});
  m.append(scrim,panel)
}
function renderGuide(m){
  const section=Math.max(0,GUIDE_KEYS.indexOf(guideSection)),key=GUIDE_KEYS[section],title=SECT[section],data=(GCFG.sections&&GCFG.sections[section])||(section===0?null:section===1?WORK_GUIDE:section===2?INST_GUIDE:GUIDE_DATA[section]);
  const layout=h('div','guide-layout'),menu=h('aside','guide-menu'),content=h('div','guide-content');
  menu.appendChild(h('h2','', 'Guida '+title.replace(/^\d+\.\s*/,'' ).toLowerCase()));menu.appendChild(h('p','','Scegli una domanda per raggiungere la relativa spiegazione.'));
  const back=h('button','btn ghost guide-return','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7 7-7-7 7-7"/></svg><span>Torna alla domanda</span>');back.onclick=()=>{view='flow';idx=guideReturnIdx;save();render();window.scrollTo(0,0)};menu.appendChild(back);
  const nav=h('nav','guide-nav');nav.setAttribute('aria-label','Domande della guida');
  if(section===0&&!(GCFG.sections&&GCFG.sections[0])){content.appendChild($('economy-guide-template').content.cloneNode(true))}else{
    const hero=h('header','guide-hero');hero.id='guide-top';hero.appendChild(h('div','eyebrow','Guida alle domande'));hero.appendChild(h('h1','',title));hero.appendChild(h('p','','Per ogni affermazione trovi il tema in gioco e alcune ragioni possibili per essere pienamente d’accordo o in disaccordo. Sono spunti per chiarire il significato della domanda, non argomenti esaustivi né indicazioni su quale risposta scegliere.'));content.appendChild(hero);
    DATA.secs[section].q.forEach(([n,t])=>{const g=data[n];if(!g)return;const article=h('article','guide-item');article.id='q'+n;article.appendChild(h('h2','','Domanda '+n));article.appendChild(h('p','guide-question',esc(t)));article.appendChild(h('p','guide-what','<b>Che cosa valuta.</b> '+esc(g.what)));const sides=h('div','guide-sides');const agree=h('section','guide-side');agree.appendChild(h('h3','','Pienamente d’accordo'));agree.appendChild(h('p','',esc(g.agree)));const disagree=h('section','guide-side');disagree.appendChild(h('h3','','Pienamente in disaccordo'));disagree.appendChild(h('p','',esc(g.disagree)));sides.append(agree,disagree);article.appendChild(sides);article.appendChild(h('a','guide-end','Torna su ↑')).setAttribute('href','#guide-top');content.appendChild(article)})
  }
  content.querySelectorAll('.guide-item').forEach(item=>{const itemN=Number(item.id.slice(1));const itemQ=DATA.secs[section].q.find(([n])=>n===itemN);const b=h('button','',esc(itemQ?itemQ[1]:item.querySelector('h2').textContent));if(guideSection===key&&item.id==='q'+guideQuestion)b.setAttribute('aria-current','true');b.onclick=()=>{guideSection=key;guideQuestion=Number(item.id.slice(1));save();document.getElementById(item.id).scrollIntoView({behavior:'smooth',block:'start'});nav.querySelectorAll('button').forEach(x=>x.removeAttribute('aria-current'));b.setAttribute('aria-current','true')};nav.appendChild(b)});
  menu.appendChild(nav);layout.append(menu,content);m.appendChild(layout);
  const target=document.getElementById('q'+guideQuestion);if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
}/* risultato */
/* mappa e assi: partiti e liste selezionabili, etichette senza sovrapposizioni, corsie sugli assi */
const PARTIES=SUBJ.map(x=>[x.k,x.short,x.full,()=>VOTES[x.k]]);
let shown=null,axMode='pos',topicParty=null;
function axisAff(a,src){return affinity([...a.p,...a.m],src,3)}
function nearestParties(n){const r=PARTIES.map(p=>({k:p[0],pct:aff(p[3]()).pct,c:aff(p[3]()).c})).filter(x=>x.c>=10).sort((x,y)=>y.pct-x.pct);return r.slice(0,n).map(x=>x.k)}

/* Cosa distingue i due partiti e liste più vicini: aiuta quando le percentuali sono ravvicinate */
const DOTCLS={};SUBJ.forEach(x=>DOTCLS[x.k]=x.dot||x.k);
function splitBlock(){if(BAND_MODE)return null;
  const rk=PARTIES.map(p=>({k:p[0],l:p[2],V:p[3](),a:aff(p[3]())})).filter(r=>r.a.c>=10).sort((x,y)=>y.a.pct-x.a.pct);
  if(rk.length<2)return null;const A=rk[0],B=rk[1],rows=[];
  Object.keys(ans).forEach(n=>{const u=ans[n],a=A.V[n],b=B.V[n];if(!(QTXT[n]&&u>0&&a&&b)||Math.abs(a-b)<2)return;const d=Math.abs(u-b)-Math.abs(u-a);if(d)rows.push({n,u,a,b,d,s:Math.abs(d)*10+Math.abs(a-b)})});
  const close=rk[0].a.pct-rk[1].a.pct<5;
  const bl=h('section','block','<h2>Cosa distingue '+esc(A.l)+' da '+esc(B.l)+'</h2><p class="lead">'+(close?'Sono i due partiti e liste più vicini a te e le percentuali sono ravvicinate. ':'Sono i due partiti e liste più vicini a te. ')+'Qui sotto le affermazioni su cui hanno posizioni nettamente diverse e la tua risposta sta più da una parte.</p>');
  if(!rows.length)return null;
  const key=h('div','key','<span>'+SH.me+'Tu</span><span>'+SH[A.k]+esc(A.l)+'</span><span>'+SH[B.k]+esc(B.l)+'</span>');
  const col=(party,other,list)=>{const p=h('div','panel');p.appendChild(h('h3','','Ti avvicinano a '+esc(party.l)));p.lastChild.style.marginBottom='8px';
    if(!list.length)p.appendChild(h('p','small','Nessuna affermazione in questo senso.'));
    list.sort((x,y)=>y.s-x.s).slice(0,4).forEach(r=>{const row=h('div','srow','<span class="qt">'+esc(QTXT[r.n])+'</span><span class="dots"><b>'+r.u+'</b><b class="'+DOTCLS[A.k]+'">'+r.a+'</b><b class="'+DOTCLS[B.k]+'">'+r.b+'</b></span>');p.appendChild(row)});return p};
  const two=h('div','two');two.append(col(A,B,rows.filter(r=>r.d>0)),col(B,A,rows.filter(r=>r.d<0)));
  bl.appendChild(key);bl.lastChild.style.marginBottom='14px';bl.appendChild(two);
  bl.appendChild(h('p','small','I numeri sono, nell\'ordine, la tua risposta e il voto dei due partiti e liste nella legenda.')).style.marginTop='10px';
  return bl}
function topicDistanceBlock(){
  const avail=PARTIES.filter(p=>AXES.some(a=>axisAff(a,p[3]()).pct!==undefined)),listP=avail.length?avail:PARTIES;
  if(!listP.some(p=>p[0]===topicParty))topicParty=listP[0][0];
  const selected=listP.find(p=>p[0]===topicParty)||listP[0],source=selected[3]();
  const rows=AXES.map(a=>({axis:a,stat:axisAff(a,source)})).filter(r=>r.stat.pct!==undefined).sort((a,b)=>b.stat.pct-a.stat.pct);
  const block=h('section','block','<h2>Affinità per tema</h2><p class="lead">Guarda dove le tue risposte sono più vicine o più lontane dalle posizioni attribuite a un partito o lista. Ogni '+(BAND_MODE?'fascia':'percentuale')+' usa solo le domande a cui avete entrambi una posizione.</p>');
  const control=h('div','row');const picker=h('div','seg');
  listP.forEach(([key,label])=>{const b=h('button','',esc(label));b.type='button';b.setAttribute('aria-pressed',key===topicParty);b.onclick=()=>{topicParty=key;const next=topicDistanceBlock();block.replaceWith(next)};picker.appendChild(b)});
  control.appendChild(h('span','small','Confronta con:'));control.appendChild(picker);block.appendChild(control);
  if(!rows.length){block.appendChild(h('p','wait','Servono almeno tre risposte confrontabili nello stesso tema.'));return block}
  const closest=rows.slice(0,3).map(r=>r.axis.n).join(', '),furthest=rows.slice(-3).reverse().map(r=>r.axis.n).join(', ');
  block.appendChild(h('p','small','Più vicini: '+closest+'. Più lontani: '+furthest+'.'));
  const grid=h('div','topic-grid');
  rows.forEach(({axis,stat},i)=>{const b=BAND_MODE?bandInfo(stat.pct,stat.c,3):{label:stat.pct+'%',fill:stat.pct},low=BAND_MODE?b.label==='Bassa':i>=rows.length-3;const card=h('article','topic-card'+(low?' low':''));card.innerHTML='<span class="tn">'+esc(axis.n)+'</span><strong class="tp">'+b.label+'</strong><span class="tm"><i style="width:'+b.fill+'%;background:var(--'+selected[0]+')"></i></span><span class="tc">'+stat.c+' domande confrontate'+(low?' · area più distante':'')+'</span>';grid.appendChild(card)});
  block.appendChild(grid);return block
}
function glyph(k,x,y,sz){const inner=(SH[k]||'').replace(/<\/?svg[^>]*>/g,'');const sc=sz/14;return '<g transform="translate('+(x-sz/2)+' '+(y-sz/2)+') scale('+sc+')" stroke="var(--surface)" stroke-width="'+(2.2/sc).toFixed(2)+'" paint-order="stroke" stroke-linejoin="round">'+inner+'</g>'}
function mapSVG(){
  const ex=AXES.find(a=>a.id==='eco'),cx=AXES.find(a=>a.id==='cul');
  const S=380,P=34,M=22,mob=window.innerWidth<=700,cw=mob?8.2:7.4;
  const X=v=>P+M+v/100*(S-2*P-2*M),Y=v=>S-P-M-v/100*(S-2*P-2*M);
  const pts=[['me','Tu',axisScore(ex,ans),axisScore(cx,ans)]];
  PARTIES.forEach(([k,l,,V])=>{if(shown.has(k))pts.push([k,l,axisScore(ex,V()),axisScore(cx,V())])});
  const it=pts.filter(p=>p[2].pos!==undefined&&p[3].pos!==undefined).map(([k,l,a,b])=>({k,l,x:X(a.pos),y:Y(b.pos),w:l.length*cw+4}));
  /* scosta i punti quasi coincidenti, di pochi pixel, per poterli distinguere */
  for(let r=0;r<40;r++){let moved=false;for(let i=0;i<it.length;i++)for(let j=i+1;j<it.length;j++){let dx=it[j].x-it[i].x,dy=it[j].y-it[i].y,d=Math.hypot(dx,dy);if(d<15){if(d<.5){dx=Math.cos(j*2.4);dy=Math.sin(j*2.4);d=1}const push=(15-d)/2+.2,ux=dx/d,uy=dy/d;if(it[i].k!=='me'){it[i].x-=ux*push;it[i].y-=uy*push}if(it[j].k!=='me'){it[j].x+=ux*push;it[j].y+=uy*push}moved=true}}if(!moved)break}
  it.forEach(o=>{o.x=Math.min(S-P+6,Math.max(P-6,o.x));o.y=Math.min(S-P+6,Math.max(P-6,o.y))});
  /* etichette: prova destra, sinistra, sopra, sotto e prende la prima libera */
  const boxes=it.map(o=>({x:o.x-11,y:o.y-11,w:22,h:22}));const placed=[];
  const hit=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
  const lab=[];
  it.slice().sort((p,q)=>(p.k==='me'?-1:q.k==='me'?1:0)).forEach(o=>{
    const c=[['start',o.x+13,o.y+4,o.x+13,o.y-8],['end',o.x-13,o.y+4,o.x-13-o.w,o.y-8],['middle',o.x,o.y-15,o.x-o.w/2,o.y-27],['middle',o.x,o.y+24,o.x-o.w/2,o.y+12]];
    let best=null,bs=1e9;
    c.forEach(([an,tx,ty,bx,by])=>{const bb={x:bx,y:by,w:o.w,h:16};let sc=0;boxes.forEach(q=>{if(hit(bb,q))sc+=3});placed.forEach(q=>{if(hit(bb,q))sc+=3});if(bb.x<4||bb.x+bb.w>S-4)sc+=5;if(bb.y<4||bb.y+bb.h>S-4)sc+=5;if(sc<bs){bs=sc;best={an,tx,ty,bb}}});
    placed.push(best.bb);lab.push('<text class="lab'+(o.k==='me'?' me':'')+'" x="'+best.tx+'" y="'+best.ty+'" text-anchor="'+best.an+'">'+esc(o.l)+'</text>')});
  let g='<rect x="'+P+'" y="'+P+'" width="'+(S-2*P)+'" height="'+(S-2*P)+'" rx="10" fill="var(--track)"/><line x1="'+S/2+'" y1="'+P+'" x2="'+S/2+'" y2="'+(S-P)+'" stroke="var(--line)" stroke-width="1.5"/><line x1="'+P+'" y1="'+S/2+'" x2="'+(S-P)+'" y2="'+S/2+'" stroke="var(--line)" stroke-width="1.5"/>';
  g+='<text x="'+P+'" y="'+(S-10)+'">'+esc(ex.ml)+'</text><text x="'+(S-P)+'" y="'+(S-10)+'" text-anchor="end">'+esc(ex.mh)+'</text>';
  g+='<text transform="translate(14 '+(S-P)+') rotate(-90)">'+esc(cx.ml)+'</text><text transform="translate(14 '+P+') rotate(-90)" text-anchor="end">'+esc(cx.mh)+'</text>';
  it.filter(o=>o.k!=='me').forEach(o=>{g+='<g><title>'+esc(o.l)+'</title>'+glyph(o.k,o.x,o.y,20)+'</g>'});
  const me=it.find(o=>o.k==='me');if(me)g+='<g><title>Tu</title><circle cx="'+me.x+'" cy="'+me.y+'" r="11" fill="var(--me)" stroke="var(--surface)" stroke-width="3.5"/><circle cx="'+me.x+'" cy="'+me.y+'" r="11" fill="none" stroke="var(--me)" stroke-width="1.5"/></g>';
  g+=lab.join('');
  return '<svg class="map" viewBox="0 0 '+S+' '+S+'" role="img" aria-label="Mappa con Economia e welfare in orizzontale e Valori e diritti civili in verticale. '+it.map(o=>o.l).join(', ')+'">'+g+'</svg>'}
function axisTracks(x){
  const items=[['me','Tu',axisScore(x,ans)]];PARTIES.forEach(([k,l,,V])=>{if(shown.has(k))items.push([k,l,axisScore(x,V())])});
  const ok=items.filter(i=>i[2].pos!==undefined).sort((a,b)=>(a[0]==='me'?-1:b[0]==='me'?1:a[2].pos-b[2].pos));
  const sep=window.innerWidth<=700?6.5:4.2,lanes=[];ok.forEach(i=>{let L=0;for(;;L++){lanes[L]=lanes[L]||[];if(lanes[L].every(p=>Math.abs(p-i[2].pos)>=sep))break}lanes[L].push(i[2].pos);i.lane=L});
  return {ok,n:lanes.length||1}}
function mapBlock(){
  const bl=h('div','block','<h2>Sulla mappa</h2><p class="lead">Il tuo punto rispetto ai partiti e liste su due temi: quanto Stato in economia e quanto progressismo nei diritti. Scegli quali partiti e liste mostrare.</p>');
  const ch=h('div','chips');
  const mk=(txt,fn,pressed)=>{const b=h('button','chip',txt);b.type='button';if(pressed!==undefined)b.setAttribute('aria-pressed',pressed);b.onclick=fn;return b};
  const redraw=()=>{const nb=mapBlock();bl.replaceWith(nb)};
  PARTIES.forEach(([k,l,full])=>{const b=mk(SH[k]+'<span>'+esc(l)+'</span>',()=>{shown.has(k)?shown.delete(k):shown.add(k);redraw()},shown.has(k));b.title=full;ch.appendChild(b)});
  const ctl=h('div','chips ctl');ctl.append(mk('I 4 più vicini',()=>{shown=new Set(nearestParties(4));redraw()}),mk('Tutti',()=>{shown=new Set(PARTIES.map(p=>p[0]));redraw()}),mk('Nessuno',()=>{shown=new Set();redraw()}));
  bl.append(ch,ctl);
  const two=h('div','two');const mp=h('div','panel');mp.innerHTML=mapSVG();mp.appendChild(h('p','small mapnote','I punti molto vicini sono scostati di pochi pixel per renderli leggibili. Il tuo punto resta sempre al suo posto.'));
  const ax=h('div','panel');ax.appendChild(h('h3','','Tutti gli otto temi')).style.marginBottom='10px';
  const sm=h('div','seg');[['pos','Posizione'],['near','Vicinanza a te']].forEach(([k,l])=>{const b=h('button','',l);b.type='button';b.setAttribute('aria-pressed',k===axMode);b.onclick=()=>{axMode=k;redraw()};sm.appendChild(b)});sm.style.marginBottom='18px';ax.appendChild(sm);
  AXES.forEach(x=>{const u=axisScore(x,ans);const w=h('div','ax','<div class="nm"><span>'+esc(x.n)+'</span></div>');
    if(u.pos===undefined){w.appendChild(h('p','wait','Risposte insufficienti su questo tema ('+u.c+' su almeno 3).'))}
    else if(axMode==='near'){const rows=PARTIES.filter(p=>shown.has(p[0])).map(p=>({k:p[0],l:p[1],a:axisAff(x,p[3]())})).sort((m,n)=>(n.a.pct||-1)-(m.a.pct||-1));
      const lst=h('div','near');if(!rows.length)lst.appendChild(h('p','wait','Scegli almeno un partito o lista.'));
      rows.forEach(r=>{const ok=r.a.pct!==undefined;lst.appendChild(h('div','nr','<span class="nl">'+SH[r.k]+esc(r.l)+'</span><span class="nb"><i style="width:'+(ok?r.a.pct:0)+'%;background:var(--'+r.k+')"></i></span><span class="np">'+(ok?r.a.pct+'%':'—')+'</span>'));lst.lastChild.title=ok?r.a.c+' domande confrontate':'Meno di 3 domande con un voto'});
      w.appendChild(lst)}
    else{const {ok,n}=axisTracks(x);const t=h('div','tr');t.style.marginBottom=((n-1)*20)+'px';t.setAttribute('role','img');t.setAttribute('aria-label',x.n+': '+ok.map(i=>i[1]+' al '+Math.round(i[2].pos)+'% verso '+x.hi).join('; '));
      ok.forEach(([k,l,s,],ix)=>{const lane=ok[ix].lane;const e=k==='me'?h('span','mk'):h('span','mkg',(SH[k]||'').replace('<svg ','<svg stroke="var(--surface)" stroke-width="1.6" paint-order="stroke" stroke-linejoin="round" '));e.style.left=s.pos+'%';e.title=l+' · '+Math.round(s.pos)+'% verso '+x.hi;if(lane>0){e.style.top=(5+lane*20)+'px';const st=h('span','stem');st.style.left=s.pos+'%';st.style.height=(lane*20-7)+'px';t.appendChild(st)}if(k==='me')e.style.zIndex=2;t.appendChild(e)});
      w.appendChild(t);w.appendChild(h('div','poles','<span>'+esc(x.lo)+'</span><span>'+esc(x.hi)+'</span>'))}
    ax.appendChild(w)});
  two.append(mp,ax);bl.appendChild(two);return bl}
function renderRes(m){
  const a=Object.keys(ans).filter(k=>QTXT[k]&&ans[k]>0);const res=h('section','res');m.appendChild(res);
  if(a.length<10){res.innerHTML='<h1>Servono più risposte</h1><p class="lead">Per calcolare un profilo servono almeno 10 risposte con un voto da 1 a 5. Finora ne hai '+a.length+'.</p>';const c=h('div','cta');const b=h('button','btn','Torna alle domande');b.onclick=()=>{view='flow';save();render()};c.appendChild(b);res.appendChild(c);return}
  const AF={};SUBJ.forEach(x=>AF[x.k]=aff(VOTES[x.k]));
  const rankItems=SUBJ.filter(x=>AF[x.k].c>=10&&(!x.rankMin||AF[x.k].c>=x.rankMin)).map(x=>[x.rank[0],AF[x.k].pct,x.rank[1],x.k]);const rk=rankItems.sort((x,y)=>y[1]-x[1]),gap=rk.length>1?rk[0][1]-rk[1][1]:0;if(topicParty===null)topicParty=rk.length?rk[0][3]:SUBJ[0].k;
  const leadTxt=(()=>{if(rk.length<2)return 'Sulle '+a.length+' affermazioni a cui hai risposto: per ora le posizioni documentate dei partiti e liste sono troppo poche per un confronto affidabile. Qui sotto vedi il tuo profilo sui temi.';if(BAND_MODE){const topB=bandInfo(rk[0][1],AF[rk[0][3]].c).label,same=rk.filter(r=>bandInfo(r[1],AF[r[3]].c).label===topB);if(topB==='Bassa')return 'Sulle '+a.length+' affermazioni a cui hai risposto non emerge una vicinanza alta o media con nessuna delle forze documentate.';return same.length>1?'Sulle '+a.length+' affermazioni a cui hai risposto, sei nella fascia di vicinanza '+topB+' con '+same.map(r=>r[2]).join(', ')+'.':'Sulle '+a.length+' affermazioni a cui hai risposto, sei più vicino '+rk[0][0]+' (fascia '+topB+').'}return 'Sulle '+a.length+' affermazioni a cui hai risposto, sei '+(gap<3?'a pari merito tra '+rk[0][2]+' e '+rk[1][2]:'più vicino '+rk[0][0]+' ('+gap+' punti di vantaggio su '+SUBJ.find(z=>z.k===rk[1][3]).full+')')+'.'})();
  res.innerHTML='<h1>'+(shared?'Il profilo condiviso':'Il tuo profilo')+'</h1><p class="lead">'+leadTxt+' Questo conta solo le affermazioni su cui è documentata una posizione.</p>';
  if(testRun){const bn=h('div','banner','<span><b>Modalità prova.</b> Queste risposte sono casuali e non modificano il tuo profilo.</span>');const bw=h('span','');bw.style.cssText='display:flex;gap:8px;flex-wrap:wrap';const again=h('button','btn ghost','Nuova prova casuale');again.onclick=randomTest;const exit=h('button','btn','Esci dalla prova');exit.onclick=exitRandomTest;bw.append(again,exit);bn.appendChild(bw);res.prepend(bn)}
  if(shared){const bn=h('div','banner','<span>Stai guardando un risultato condiviso. Le tue risposte non sono state toccate.</span>');const bt=h('button','btn ghost','Fai il test tu');bt.onclick=()=>{exitShared();render();window.scrollTo(0,0)};const bs=h('button','btn','Salva come mio profilo');bs.onclick=importShared;const bw=h('span','');bw.style.cssText='display:flex;gap:8px;flex-wrap:wrap';bw.append(bs,bt);bn.appendChild(bw);res.prepend(bn)}
  SUBJ.forEach(x=>{if(x.note)res.appendChild(h('p','small',x.note.replace('{N}',TOTAL).replace('{V}',Object.keys(VOTES[x.k]).length)))});
  {const ni=Object.keys(imp).filter(n=>QTXT[n]&&ans[n]>0).length;if(ni)res.appendChild(h('p','small','Hai segnato '+ni+(ni===1?' affermazione':' affermazioni')+' come molto importanti: nel calcolo pesano il doppio.')).style.marginTop='8px'}
  const af2=h('div','affs');const subText=x=>{const t=typeof x.sub==='string'?x.sub:(x.sub[fsrc]||x.sub.oggi||'');return t.replace('{c}',AF[x.k].c).replace('{N}',TOTAL)};
  const ranked=SUBJ.slice().sort((a,b)=>a.ordList-b.ordList).map(x=>[x.full,x.k,AF[x.k],subText(x)]).sort((x,y)=>y[2].pct-x[2].pct);const evalList=ranked.filter(x=>x[2].c>=10),unranked=ranked.filter(x=>x[2].c<10);
  (evalList.length?evalList:ranked).forEach(([l,cls,stat,sub])=>{
    const d=h('div','aff');
    const shape=SH[cls]||'<svg viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6" fill="var(--'+cls+')"/></svg>';const b=BAND_MODE?bandInfo(stat.pct,stat.c):{label:stat.c>=10?stat.pct+'%':'—',fill:stat.c>=10?stat.pct:0};
    d.innerHTML='<div class="top">'+shape+'<span>'+esc(l)+'</span></div><div class="big'+(BAND_MODE&&b.label!=='—'?' band':'')+'">'+b.label+'</div><div class="meter"><i style="width:'+b.fill+'%;background:var(--'+cls+')"></i></div><p>'+esc(sub)+'</p>';
    af2.appendChild(d);
  });
  res.appendChild(af2);
  if(evalList.length&&unranked.length)res.appendChild(h('p','small','Dati ancora insufficienti per una valutazione (servono almeno 10 posizioni confrontabili): '+unranked.map(([l,,stat])=>esc(l)+' ('+stat.c+'/'+TOTAL+')').join(', ')+'.')).style.marginTop='10px';
  res.appendChild(topicDistanceBlock());
  {const sb=splitBlock();if(sb)res.appendChild(sb)}
  if(!shared&&!testRun)res.appendChild(shareBlock());
  if(CFG.layers){const fs=h('div','row');fs.style.marginTop='18px';fs.appendChild(h('span','small','Posizioni dei partiti e liste:'));const sf=h('div','seg');
  [['prog','Solo programma'],['oggi','Programma e posizioni recenti']].forEach(([k,l])=>{const b=h('button','',l);b.setAttribute('aria-pressed',k===fsrc);b.onclick=()=>{fsrc=k;buildFV();render()};sf.appendChild(b)});fs.appendChild(sf);res.appendChild(fs)}
  if(shown===null)shown=new Set(nearestParties(4));
  if(CFG.map)res.appendChild(mapBlock());
  /* dettaglio */
  const cs=SUBJ.find(x=>x.k===cmp)||SUBJ[0];const P=VOTES[cs.k];const DD=cs.data;const rows=a.filter(n=>P[n]).map(n=>({n,d:Math.abs(ans[n]-P[n])}));
  const list=(mode==='close'?rows.slice().sort((x,y)=>x.d-y.d||x.n-y.n):rows.slice().sort((x,y)=>y.d-x.d||x.n-y.n)).slice(0,8);
  const bd=h('div','block','<h2>Nel dettaglio</h2><p class="lead">Le otto affermazioni su cui coincidete di più o siete più lontani. Tocca una riga per vedere da dove viene il voto del partito o lista.</p>');
  const ctl=h('div','row');const s1=h('div','seg');SUBJ.slice().sort((a,b)=>a.ordList-b.ordList).map(x=>[x.k,x.btn]).forEach(([k,l])=>{const b=h('button','',l);b.setAttribute('aria-pressed',k===cmp);b.onclick=()=>{cmp=k;render()};s1.appendChild(b)});
  const s2=h('div','seg');[['close','Dove coincidete'],['far','Dove siete più lontani']].forEach(([k,l])=>{const b=h('button','',l);b.setAttribute('aria-pressed',k===mode);b.onclick=()=>{mode=k;render()};s2.appendChild(b)});ctl.append(s1,s2);bd.appendChild(ctl);
  const lc=h('div','panel cmp');
  list.forEach(({n})=>{const e=DD[n];const why=!cs.nobasis&&e?((cs.single||(fsrc==='oggi'&&e[1]!==null))?e[3]:e[2]||''):'';const src=cs.srcRules&&e?((cs.srcRules.find(r=>e[2].includes(r[0]))||[0,cs.srcDefault])[1]):'';const citation=src?'<a class="source-link" href="'+src+'" target="_blank" rel="noopener">Fonte: '+esc(e[2])+'</a>':'';
    const d=h('details','','<summary><span class="qt">'+esc(QTXT[n])+'</span><span class="dots"><b>'+ans[n]+'</b><b class="'+DOTCLS[cmp]+'">'+P[n]+'</b></span></summary>'+(why?'<p class="why">'+esc(why)+'</p>':'<p class="why">'+(cs.single?'Nessuna posizione documentata.':CFG.whyDefault)+'</p>')+citation);lc.appendChild(d)});
  if(!list.length)lc.appendChild(h('p','small','Nessuna affermazione da confrontare.'));
  bd.appendChild(lc);bd.appendChild(h('p','small','Il numero tondo è la tua risposta, quello quadrato è il voto da 1 a 5 che ho dato al partito o lista.')).style.marginTop='12px';res.appendChild(bd);
  /* azioni */
  const ft=h('div','foot');const r1=h('button','btn ghost','Rivedi le risposte');r1.onclick=()=>{view='flow';idx=firstStep(0);save();render();window.scrollTo(0,0)};
  const r2=h('button','btn ghost',confirmReset?'Conferma: cancella tutto':'Ricomincia');r2.onclick=()=>{if(!confirmReset){confirmReset=true;render();return}ans={};open={};idx=0;view='intro';confirmReset=false;save();render();window.scrollTo(0,0)};if(!shared&&!testRun){ft.append(r1,r2);res.appendChild(ft)}
  const calcNote=BAND_MODE?"Come si calcola: ogni risposta viene confrontata con la posizione da 1 a 5 documentata per il partito o la lista. Una coincidenza piena vale 100 punti; uno scarto di 1, 2, 3 o 4 punti vale rispettivamente 60, 25, 5 o 0. Le risposte nette (1 e 5) pesano di più, quelle centrali (3) meno, e contano di più le domande su cui le forze politiche si distinguono davvero. Le affermazioni che segni come «Conta molto per me» pesano il doppio. Dalla media pesata dell'accordo diretto si ricava la fascia di vicinanza: Alta (almeno 58 su 100), Media (34–57) o Bassa (sotto 34), senza forzare percentuali esatte finché mancano i programmi elettorali completi. Con meno di 10 posizioni confrontabili compare «—». ":"Come si calcola: ogni risposta viene confrontata con il voto da 1 a 5 assegnato al partito o lista. Una coincidenza vale 100 punti; uno scarto di 1, 2, 3 o 4 punti vale rispettivamente 60, 25, 5 o 0. Le risposte nette (1 e 5) pesano di più, quelle centrali (3) meno, e contano di più le domande su cui i partiti e liste si distinguono davvero. Le affermazioni che segni come «Conta molto per me» pesano il doppio. Poi il punteggio viene depurato dal caso: 0% significa che hai in comune con quel partito o lista quanto, o meno, di quanto ne avresti rimescolando a caso le tue risposte; 100% una coincidenza piena. Per questo le percentuali sono più basse e più distanti di una semplice media. ";
  res.appendChild(h('p','small',calcNote+"La copertura varia da partito o lista a partito o lista: inserisco una posizione solo quando trovo una fonte documentata (atti del Consiglio o della Giunta comunale, ordini del giorno, emendamenti, votazioni in aula, programmi elettorali o dichiarazioni pubbliche di esponenti locali riportate dalla stampa). Le affermazioni senza riscontro documentato restano escluse dal calcolo per quel partito. Le risposte e i profili restano esclusivamente all'interno del tuo dispositivo e del tuo browser.")).style.marginTop='24px';
}
function render(){
  if(shared&&view!=='res')exitShared();
  renderBar();const m=$('app');m.classList.remove('has-guide-rail');m.innerHTML='';
  if(view==='intro')renderIntro(m);else if(view==='flow')renderFlow(m);else if(view==='guide')renderGuide(m);else renderRes(m);
}
$('home').onclick=()=>{if(testRun)exitRandomTest();view='intro';menuOpen=false;save();render();window.scrollTo(0,0)};
$('sbtn').onclick=()=>{menuOpen=!menuOpen;pmenuOpen=false;renderBar()};$('pbtn').onclick=()=>{pmenuOpen=!pmenuOpen;menuOpen=false;renaming=false;confirmDel=false;renderBar()};
window.addEventListener('hashchange',()=>{const was=shared;if(!shared)save();if(tryShared()){menuOpen=false;pmenuOpen=false;render();window.scrollTo(0,0)}});
document.addEventListener('keydown',e=>{if(pmenuOpen&&e.key==='Escape'){pmenuOpen=false;renaming=false;confirmDel=false;renderBar();return}if(guideDrawerOpen&&e.key==='Escape'){guideDrawerOpen=false;render();e.preventDefault();return}if(view!=='flow')return;const t=e.target;if(t&&(t.tagName==='TEXTAREA'||t.tagName==='INPUT'))return;const st=steps[idx];
  if(st.k==='q'&&e.key>='0'&&e.key<='5'){const v=+e.key;pick(st.n,v===0?(ans[st.n]===0?undefined:0):(v===ans[st.n]?undefined:v));e.preventDefault()}
  else if((e.key==='i'||e.key==='I')&&st.k==='q'){toggleImp(st.n);e.preventDefault()}else if(e.key==='ArrowRight'){step(1)}else if(e.key==='ArrowLeft'){step(-1)}else if(e.key==='Enter'&&st.k==='sec'&&t.tagName!=='BUTTON'){step(1)}});
document.addEventListener('click',e=>{if((menuOpen||pmenuOpen)&&!e.composedPath().some(n=>n.classList&&n.classList.contains('barin'))){menuOpen=false;pmenuOpen=false;renaming=false;confirmDel=false;renderBar()}});
render();
