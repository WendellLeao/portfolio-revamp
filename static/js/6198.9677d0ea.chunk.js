"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[6198],{6198:(t,i,n)=>{n.d(i,{Grabber:()=>s});var o=n(4409),e=n(5582);function r(t,i,n,e,r){t.canvas.draw((t=>{const s=i.getPosition();!function(t,i,n,e,r,s){(0,o.V6)(t,n,e),t.strokeStyle=(0,o.xx)(r,s),t.lineWidth=i,t.stroke()}(t,i.retina.linksWidth??0,s,r,n,e)}))}class s extends o.sJ{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.grab;i&&(t.retina.grabModeDistance=i.distance*t.retina.pixelRatio)}interact(){const t=this.container,i=t.actualOptions.interactivity;if(!i.modes.grab||!i.events.onHover.enable||t.interactivity.status!==o.Rb)return;const n=t.interactivity.mouse.position;if(!n)return;const e=t.retina.grabModeDistance;if(!e||e<0)return;const s=t.particles.quadTree.queryCircle(n,e,(t=>this.isEnabled(t)));for(const a of s){const s=a.getPosition(),c=(0,o.Yf)(s,n);if(c>e)continue;const l=i.modes.grab.links,b=l.opacity,u=b-c*b/e;if(u<=0)continue;const d=l.color??a.options.links?.color;if(!t.particles.grabLineColor&&d){const n=i.modes.grab.links;t.particles.grabLineColor=(0,o.PG)(d,n.blink,n.consent)}const p=(0,o._h)(a,void 0,t.particles.grabLineColor);p&&r(t,a,p,u,n)}}isEnabled(t){const i=this.container,n=i.interactivity.mouse,e=(t?.interactivity??i.actualOptions.interactivity).events;return e.onHover.enable&&!!n.position&&(0,o.hn)("grab",e.onHover.mode)}loadModeOptions(t,...i){t.grab||(t.grab=new e.f);for(const n of i)t.grab.load(n?.grab)}reset(){}}}}]);
//# sourceMappingURL=6198.9677d0ea.chunk.js.map