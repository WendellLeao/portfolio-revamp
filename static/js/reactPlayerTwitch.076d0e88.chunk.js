(globalThis.webpackChunkportfolio=globalThis.webpackChunkportfolio||[]).push([[2042],{3267:(e,t,r)=>{var a,s=Object.create,l=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,n=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,h=(e,t,r,a)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))p.call(e,s)||s===r||l(e,s,{get:()=>t[s],enumerable:!(a=o(t,s))||a.enumerable});return e},y=(e,t,r)=>(((e,t,r)=>{t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)l(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(a=d,h(l({},"__esModule",{value:!0}),a));var u=((e,t,r)=>(r=null!=e?s(n(e)):{},h(!t&&e&&e.__esModule?r:l(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),c=r(2206),m=r(1520);class P extends u.Component{constructor(){super(...arguments),y(this,"callPlayer",c.callPlayer),y(this,"playerID",this.props.config.playerId||`twitch-player-${(0,c.randomString)()}`),y(this,"mute",(()=>{this.callPlayer("setMuted",!0)})),y(this,"unmute",(()=>{this.callPlayer("setMuted",!1)}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){const{playsinline:r,onError:a,config:s,controls:l}=this.props,o=m.MATCH_URL_TWITCH_CHANNEL.test(e),i=o?e.match(m.MATCH_URL_TWITCH_CHANNEL)[1]:e.match(m.MATCH_URL_TWITCH_VIDEO)[1];t?o?this.player.setChannel(i):this.player.setVideo("v"+i):(0,c.getSDK)("https://player.twitch.tv/js/embed/v1.js","Twitch").then((t=>{this.player=new t.Player(this.playerID,{video:o?"":i,channel:o?i:"",height:"100%",width:"100%",playsinline:r,autoplay:this.props.playing,muted:this.props.muted,controls:!!o||l,time:(0,c.parseStartTime)(e),...s.options});const{READY:a,PLAYING:n,PAUSE:p,ENDED:h,ONLINE:y,OFFLINE:d,SEEK:u}=t.Player;this.player.addEventListener(a,this.props.onReady),this.player.addEventListener(n,this.props.onPlay),this.player.addEventListener(p,this.props.onPause),this.player.addEventListener(h,this.props.onEnded),this.player.addEventListener(u,this.props.onSeek),this.player.addEventListener(y,this.props.onLoaded),this.player.addEventListener(d,this.props.onLoaded)}),a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.callPlayer("pause")}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return null}render(){return u.default.createElement("div",{style:{width:"100%",height:"100%"},id:this.playerID})}}y(P,"displayName","Twitch"),y(P,"canPlay",m.canPlay.twitch),y(P,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerTwitch.076d0e88.chunk.js.map