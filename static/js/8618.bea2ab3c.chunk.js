"use strict";(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[8618],{8618:(t,i,o)=>{o.d(i,{EmittersPlugin:()=>n});var e=o(4409),s=o(3381);class n{constructor(t){this._engine=t,this.id="emitters"}async getPlugin(t){const{Emitters:i}=await o.e(7217).then(o.bind(o,7217));return new i(this._engine,t)}loadOptions(t,i){if(!this.needsPlugin(t)&&!this.needsPlugin(i))return;i?.emitters&&(t.emitters=(0,e.wJ)(i.emitters,(t=>{const i=new s.Emitter;return i.load(t),i})));const o=i?.interactivity?.modes?.emitters;if(o)if((0,e.cy)(o))t.interactivity.modes.emitters={random:{count:1,enable:!0},value:o.map((t=>{const i=new s.Emitter;return i.load(t),i}))};else{const i=o;if(void 0!==i.value){const o=1;if((0,e.cy)(i.value))t.interactivity.modes.emitters={random:{count:i.random.count??o,enable:i.random.enable??!1},value:i.value.map((t=>{const i=new s.Emitter;return i.load(t),i}))};else{const e=new s.Emitter;e.load(i.value),t.interactivity.modes.emitters={random:{count:i.random.count??o,enable:i.random.enable??!1},value:e}}}else{(t.interactivity.modes.emitters={random:{count:1,enable:!1},value:new s.Emitter}).value.load(o)}}}needsPlugin(t){if(!t)return!1;const i=t.emitters;return(0,e.cy)(i)&&!!i.length||void 0!==i||!!t.interactivity?.events?.onClick?.mode&&(0,e.hn)("emitter",t.interactivity.events.onClick.mode)}}},3381:(t,i,o)=>{o.d(i,{Emitter:()=>l});var e=o(4409);class s{constructor(){this.wait=!1}load(t){t&&(void 0!==t.count&&(this.count=t.count),void 0!==t.delay&&(this.delay=(0,e.DT)(t.delay)),void 0!==t.duration&&(this.duration=(0,e.DT)(t.duration)),void 0!==t.wait&&(this.wait=t.wait))}}class n{constructor(){this.quantity=1,this.delay=.1}load(t){void 0!==t&&(void 0!==t.quantity&&(this.quantity=(0,e.DT)(t.quantity)),void 0!==t.delay&&(this.delay=(0,e.DT)(t.delay)))}}class a{constructor(){this.color=!1,this.opacity=!1}load(t){t&&(void 0!==t.color&&(this.color=t.color),void 0!==t.opacity&&(this.opacity=t.opacity))}}class r{constructor(){this.options={},this.replace=new a,this.type="square"}load(t){t&&(void 0!==t.options&&(this.options=(0,e.zw)({},t.options??{})),this.replace.load(t.replace),void 0!==t.type&&(this.type=t.type))}}var d=o(7297);class l{constructor(){this.autoPlay=!0,this.fill=!0,this.life=new s,this.rate=new n,this.shape=new r,this.startCount=0}load(t){t&&(void 0!==t.autoPlay&&(this.autoPlay=t.autoPlay),void 0!==t.size&&(this.size||(this.size=new d.G),this.size.load(t.size)),void 0!==t.direction&&(this.direction=t.direction),this.domId=t.domId,void 0!==t.fill&&(this.fill=t.fill),this.life.load(t.life),this.name=t.name,this.particles=(0,e.wJ)(t.particles,(t=>(0,e.zw)({},t))),this.rate.load(t.rate),this.shape.load(t.shape),void 0!==t.position&&(this.position={},void 0!==t.position.x&&(this.position.x=(0,e.DT)(t.position.x)),void 0!==t.position.y&&(this.position.y=(0,e.DT)(t.position.y))),void 0!==t.spawnColor&&(void 0===this.spawnColor&&(this.spawnColor=new e.A9),this.spawnColor.load(t.spawnColor)),void 0!==t.startCount&&(this.startCount=t.startCount))}}},7297:(t,i,o)=>{o.d(i,{G:()=>e});class e{constructor(){this.mode="percent",this.height=0,this.width=0}load(t){void 0!==t&&(void 0!==t.mode&&(this.mode=t.mode),void 0!==t.height&&(this.height=t.height),void 0!==t.width&&(this.width=t.width))}}}}]);
//# sourceMappingURL=8618.bea2ab3c.chunk.js.map