"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[888],{888:(i,s,t)=>{t.d(s,{AbsorbersPlugin:()=>e});var o=t(4409),r=t(4501);class e{constructor(){this.id="absorbers"}async getPlugin(i){const{Absorbers:s}=await t.e(3183).then(t.bind(t,3183));return new s(i)}loadOptions(i,s){(this.needsPlugin(i)||this.needsPlugin(s))&&(s?.absorbers&&(i.absorbers=(0,o.wJ)(s.absorbers,(i=>{const s=new r.h;return s.load(i),s}))),i.interactivity.modes.absorbers=(0,o.wJ)(s?.interactivity?.modes?.absorbers,(i=>{const s=new r.h;return s.load(i),s})))}needsPlugin(i){if(!i)return!1;const s=i.absorbers;return(0,o.cy)(s)?!!s.length:!!s||!(!i.interactivity?.events?.onClick?.mode||!(0,o.hn)("absorber",i.interactivity.events.onClick.mode))}}},4501:(i,s,t)=>{t.d(s,{h:()=>a});var o=t(4409);class r{constructor(){this.radius=0,this.mass=0}load(i){i&&(void 0!==i.mass&&(this.mass=i.mass),void 0!==i.radius&&(this.radius=i.radius))}}class e extends o.PV{constructor(){super(),this.density=5,this.value=50,this.limit=new r}load(i){i&&(super.load(i),void 0!==i.density&&(this.density=i.density),(0,o.Et)(i.limit)?this.limit.radius=i.limit:this.limit.load(i.limit))}}class a{constructor(){this.color=new o.Oi,this.color.value="#000000",this.draggable=!1,this.opacity=1,this.destroy=!0,this.orbits=!1,this.size=new e}load(i){void 0!==i&&(void 0!==i.color&&(this.color=o.Oi.create(this.color,i.color)),void 0!==i.draggable&&(this.draggable=i.draggable),this.name=i.name,void 0!==i.opacity&&(this.opacity=i.opacity),void 0!==i.position&&(this.position={},void 0!==i.position.x&&(this.position.x=(0,o.DT)(i.position.x)),void 0!==i.position.y&&(this.position.y=(0,o.DT)(i.position.y))),void 0!==i.size&&this.size.load(i.size),void 0!==i.destroy&&(this.destroy=i.destroy),void 0!==i.orbits&&(this.orbits=i.orbits))}}}}]);
//# sourceMappingURL=888.d4211710.chunk.js.map