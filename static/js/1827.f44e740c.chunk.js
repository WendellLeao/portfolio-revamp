"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[1827],{1827:(e,o,n)=>{n.d(o,{WobbleUpdater:()=>d});var s=n(4409);class a{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,s.DT)(e.angle)),void 0!==e.move&&(this.move=(0,s.DT)(e.move)))}}class t{constructor(){this.distance=5,this.enable=!1,this.speed=new a}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,s.DT)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,s.Et)(e.speed))this.speed.load({angle:e.speed});else{const o=e.speed;void 0!==o.min?this.speed.load({angle:o}):this.speed.load(e.speed)}}}const i=2*Math.PI;const l=2*Math.PI;class d{constructor(e){this.container=e}init(e){const o=e.options.wobble;e.wobble=o?.enable?{angle:(0,s.G0)()*l,angleSpeed:(0,s.VG)(o.speed.angle)/360,moveSpeed:(0,s.VG)(o.speed.move)/10}:{angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,s.VG)(o?.distance??0)*this.container.retina.pixelRatio}isEnabled(e){return!e.destroyed&&!e.spawning&&!!e.options.wobble?.enable}loadOptions(e,...o){e.wobble||(e.wobble=new t);for(const n of o)e.wobble.load(n?.wobble)}update(e,o){this.isEnabled(e)&&function(e,o){const{wobble:n}=e.options,{wobble:a}=e;if(!n?.enable||!a)return;const t=a.angleSpeed*o.factor,l=a.moveSpeed*o.factor*((e.retina.wobbleDistance??0)*o.factor)/(s.Xu/60),d=i,{position:b}=e;a.angle+=t,a.angle>d&&(a.angle-=d),b.x+=l*Math.cos(a.angle),b.y+=l*Math.abs(Math.sin(a.angle))}(e,o)}}}}]);
//# sourceMappingURL=1827.f44e740c.chunk.js.map