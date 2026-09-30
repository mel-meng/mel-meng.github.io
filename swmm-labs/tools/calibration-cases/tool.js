import { createSwmmClient, isSwmmRunSuperseded } from '../../shared/swmm-client.js';
import { CASES, getCase } from './cases.js';
import { buildCalibrationModel, OBJECTS } from './model.js';
import { calibrationDiagnostics } from './metrics.js';
import { evaluateCase } from './constraints.js';

const OUTPUTS = Object.freeze([{ key:'runoff', objectType:'subcatchment', objectId:OBJECTS.catchment, variable:'runoff' }]);
const swmm = createSwmmClient();
let ready = false, activeCase = CASES[0], params = { ...activeCase.baseline }, targetResult = null, current = null, previous = null;
let loadToken = 0, runTimer = null, activeInteraction = false, interactionIdle = null, hintLevel = 0;

const els = {
  nav:document.querySelector('#caseNav'), engine:document.querySelector('#engineBadge'), kicker:document.querySelector('#caseKicker'), title:document.querySelector('#caseTitle'), story:document.querySelector('#caseStory'), task:document.querySelector('#caseTask'), confidence:document.querySelector('#confidence'), controls:document.querySelector('#controls'), reset:document.querySelector('#resetButton'), canvas:document.querySelector('#hydrograph'), empty:document.querySelector('#chartEmpty'), diagnostics:document.querySelector('#diagnostics'), fit:document.querySelector('#fitStatus'), evidence:document.querySelector('#evidenceStatus'), complete:document.querySelector('#completeStatus'), hintButton:document.querySelector('#hintButton'), hintText:document.querySelector('#hintText'), runStatus:document.querySelector('#runStatus'), runtime:document.querySelector('#runtime'), errorDetails:document.querySelector('#errorDetails'), errorReport:document.querySelector('#errorReport')
};
const ctx = els.canvas.getContext('2d');

function fmt(value,digits=1){return Number(value).toFixed(digits)}
function signed(value,digits=1,suffix=''){const n=Number(value);return `${n>0?'+':''}${n.toFixed(digits)}${suffix}`}

function renderNav(){
  els.nav.innerHTML=CASES.map(c=>`<button type="button" data-id="${c.id}" class="${c.id===activeCase.id?'active':''}">${c.title}</button>`).join('');
  els.nav.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>loadCase(b.dataset.id)));
}
function confidenceBlock(title,items){return `<div><h3>${title}</h3><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></div>`}
function renderContext(){
  els.kicker.textContent=activeCase.kicker;els.title.textContent=activeCase.title;els.story.textContent=activeCase.story;els.task.textContent=activeCase.task;
  els.confidence.innerHTML=confidenceBlock('Known',activeCase.confidence.known)+confidenceBlock('Reasonably known',activeCase.confidence.reasonable)+confidenceBlock('Uncertain',activeCase.confidence.uncertain);
}
function digitsFor(def){return def.step<.01?3:def.step<1?2:0}
function renderControls(){
  els.controls.innerHTML=Object.entries(activeCase.editable).map(([key,def])=>{
    const evidence=def.evidenceRange?`<div class="range-note"><span>allowed ${def.min}–${def.max}</span><span class="inside">evidence ${def.evidenceRange[0]}–${def.evidenceRange[1]}</span></div>`:'';
    return `<div class="control"><label for="${key}"><span>${def.label}</span><output id="${key}Value">${fmt(params[key],digitsFor(def))} ${def.unit}</output></label><input id="${key}" data-key="${key}" type="range" min="${def.min}" max="${def.max}" step="${def.step}" value="${params[key]}">${evidence}</div>`;
  }).join('');
  els.controls.querySelectorAll('input').forEach(slider=>{
    slider.disabled=!ready||!targetResult;
    slider.addEventListener('pointerdown',startInteraction);slider.addEventListener('keydown',startInteraction);
    slider.addEventListener('input',()=>{const key=slider.dataset.key,def=activeCase.editable[key];params[key]=Number(slider.value);document.querySelector(`#${key}Value`).textContent=`${fmt(params[key],digitsFor(def))} ${def.unit}`.trim();queueRun();endInteractionSoon();});
    slider.addEventListener('pointerup',endInteractionSoon);slider.addEventListener('blur',endInteractionSoon);
  });
}
function startInteraction(){if(activeInteraction)return;activeInteraction=true;if(current)previous=structuredClone(current)}
function endInteractionSoon(){clearTimeout(interactionIdle);interactionIdle=setTimeout(()=>{activeInteraction=false},240)}

async function runModel(p){return swmm.run({inp:buildCalibrationModel(p).inp,outputs:OUTPUTS})}
function snapshot(result,p){const diagnostics=calibrationDiagnostics(targetResult?.outputs?.runoff,result.outputs.runoff,result.model.reportStepSeconds);return{params:{...p},result,diagnostics,evaluation:diagnostics?evaluateCase(activeCase,p,diagnostics):null}}

async function loadCase(id){
  const token=++loadToken; activeCase=getCase(id);params={...activeCase.baseline};targetResult=null;current=null;previous=null;hintLevel=0;
  renderNav();renderContext();renderControls();renderHint();clearStatuses();els.empty.style.display='grid';els.empty.textContent='Generating target with SWMM…';els.runStatus.textContent='Preparing case';
  try{
    const target=await runModel(activeCase.target);if(token!==loadToken)return;targetResult=target;
    const baseline=await runModel(params);if(token!==loadToken)return;current=snapshot(baseline,params);els.empty.style.display='none';els.runtime.textContent=`${baseline.timing.runMs.toFixed(1)} ms`;els.runStatus.textContent='Ready';renderControls();renderResult();
  }catch(error){if(isSwmmRunSuperseded(error)||token!==loadToken)return;showError(error)}
}

function queueRun(){if(!ready||!targetResult)return;els.runStatus.textContent='Queued';clearTimeout(runTimer);runTimer=setTimeout(runCurrent,90)}
async function runCurrent(){
  const requested={...params};els.runStatus.textContent='Running SWMM…';
  try{const result=await runModel(requested);current=snapshot(result,requested);els.runtime.textContent=`${result.timing.runMs.toFixed(1)} ms`;els.runStatus.textContent='Updated';els.errorDetails.classList.remove('visible');renderResult()}
  catch(error){if(isSwmmRunSuperseded(error))return;showError(error)}
}
function showError(error){els.runStatus.textContent='Run failed';els.errorDetails.classList.add('visible');els.errorReport.textContent=[error.message,error.detail,error.report].filter(Boolean).join('\n\n')}

function renderResult(){renderDiagnostics();renderStatuses();drawChart()}
function renderDiagnostics(){
  const d=current?.diagnostics;if(!d){els.diagnostics.innerHTML='';return}
  const cards=[['Volume error',signed(d.volumeErrorPct,1,'%'),`goal ±${activeCase.thresholds.volumePct}%`],['Peak error',signed(d.peakErrorPct,1,'%'),`goal ±${activeCase.thresholds.peakPct}%`],['Peak timing',signed(d.timingErrorMinutes,0,' min'),`goal ±${activeCase.thresholds.timingMin} min`],['NSE',fmt(d.nse,3),`goal ≥ ${activeCase.thresholds.nse}`]];
  els.diagnostics.innerHTML=cards.map(([label,value,goal])=>`<div class="diagnostic"><span>${label}</span><strong>${value}</strong><small>${goal}</small></div>`).join('');
}
function status(el,passed,passText,failText){el.classList.remove('pass','fail');el.classList.add(passed?'pass':'fail');el.querySelector('strong').textContent=passed?passText:failText}
function clearStatuses(){[els.fit,els.evidence].forEach(el=>{el.classList.remove('pass','fail');el.querySelector('strong').textContent='—'});els.complete.classList.remove('pass','fail');els.complete.querySelector('strong').textContent='In progress'}
function renderStatuses(){
  const e=current?.evaluation;if(!e){clearStatuses();return}status(els.fit,e.fit.passed,'Pass','Not yet');status(els.evidence,e.evidence.passed,'Consistent','Outside evidence');els.complete.classList.remove('pass','fail');els.complete.classList.add(e.complete?'pass':'fail');els.complete.querySelector('strong').textContent=e.complete?'Complete':'In progress';
}

function renderHint(){els.hintText.textContent=hintLevel===0?'Hints start with the mismatch, not the answer.':activeCase.hints[Math.min(hintLevel-1,activeCase.hints.length-1)];els.hintButton.textContent=hintLevel>=activeCase.hints.length?'Restart hints':'Show hint'}
els.hintButton.addEventListener('click',()=>{hintLevel=hintLevel>=activeCase.hints.length?0:hintLevel+1;renderHint()});
els.reset.addEventListener('click',()=>{params={...activeCase.baseline};previous=null;hintLevel=0;renderControls();renderHint();queueRun()});

function resizeCanvas(){const rect=els.canvas.getBoundingClientRect(),dpr=window.devicePixelRatio||1,w=Math.max(1,Math.round(rect.width*dpr)),h=Math.max(1,Math.round(rect.height*dpr));if(els.canvas.width!==w||els.canvas.height!==h){els.canvas.width=w;els.canvas.height=h}ctx.setTransform(dpr,0,0,dpr,0,0);return{width:rect.width,height:rect.height}}
function drawSeries(output,x,y,stroke,width,dash=[]){if(!output)return;ctx.save();ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.setLineDash(dash);ctx.beginPath();output.values.forEach((v,i)=>{const xx=x(output.timesHours[i]),yy=y(v);if(i===0)ctx.moveTo(xx,yy);else ctx.lineTo(xx,yy)});ctx.stroke();ctx.restore()}
function drawChart(){
  if(!targetResult||!current)return;const {width,height}=resizeCanvas();ctx.clearRect(0,0,width,height);const margin={left:60,right:24,top:28,bottom:42},plotW=width-margin.left-margin.right,plotH=height-margin.top-margin.bottom;const target=targetResult.outputs.runoff,cur=current.result.outputs.runoff,prev=previous?.result?.outputs?.runoff;const maxX=target.timesHours.at(-1)||1,maxY=Math.max(...target.values,...cur.values,...(prev?.values||[]),.001)*1.15,x=t=>margin.left+(t/maxX)*plotW,y=q=>margin.top+plotH-(q/maxY)*plotH;
  ctx.strokeStyle='#e7edf1';ctx.lineWidth=1;for(let i=0;i<=5;i++){const yy=margin.top+plotH*i/5;ctx.beginPath();ctx.moveTo(margin.left,yy);ctx.lineTo(width-margin.right,yy);ctx.stroke()}ctx.fillStyle='#8495a3';ctx.font='11px system-ui';ctx.textAlign='right';for(let i=0;i<=5;i++){const q=maxY*(5-i)/5;ctx.fillText(q.toFixed(maxY<1?2:1),margin.left-8,margin.top+plotH*i/5+4)}ctx.textAlign='center';for(let i=0;i<=7;i++){const t=maxX*i/7;ctx.fillText(t.toFixed(1),x(t),height-16)}ctx.fillText('hours',margin.left+plotW/2,height-2);
  drawSeries(target,x,y,'#203244',2.4);drawSeries(prev,x,y,'#aeb9c1',2,[7,5]);drawSeries(cur,x,y,'#2679b8',3);
}

window.addEventListener('resize',drawChart);window.addEventListener('pagehide',()=>swmm.dispose(),{once:true});
async function init(){renderNav();renderContext();renderControls();renderHint();try{const engine=await swmm.ready();ready=true;els.engine.classList.add('ready');els.engine.innerHTML=`<span class="dot"></span><span>SWMM5 ${engine.version}</span>`;loadCase(activeCase.id)}catch(error){els.engine.classList.add('error');els.engine.innerHTML='<span class="dot"></span><span>SWMM unavailable</span>';els.empty.textContent='Could not initialize SWMM5.'}}
init();
