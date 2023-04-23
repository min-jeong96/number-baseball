(function(){"use strict";var e={4858:function(e,n,t){var s=t(9242),r=t(3396);function i(e,n,t,s,i,u){const o=(0,r.up)("MainPage");return(0,r.wg)(),(0,r.j4)(o)}var u=t(7139);const o={class:"players"},a=["src"],l=["src"],c={class:"scoreboard"},p={class:"message"},d={key:0,class:"message right"},m={class:"input"},g={class:"display"},b=["onClick","disabled"],f={class:"row"},h=["disabled"],v=["disabled"];function w(e,n,t,s,i,w){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",null,[(0,r._)("div",o,[(0,r._)("img",{src:w.playerImageResource},null,8,a),(0,r._)("img",{src:w.npcImageResource},null,8,l)]),(0,r._)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.messages,((e,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"messages",key:`message-${n}`},[(0,r._)("div",p,(0,u.zw)(w.getAnswer(e)),1),e.answer?((0,r.wg)(),(0,r.iD)("div",d,(0,u.zw)(w.getResult(e)),1)):(0,r.kq)("",!0)])))),128))])]),(0,r._)("div",m,[(0,r._)("div",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.displayInput,((e,n)=>((0,r.wg)(),(0,r.iD)("span",{key:`input-${n}`},(0,u.zw)(e),1)))),128))]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.buttons,((e,n)=>((0,r.wg)(),(0,r.iD)("div",{class:"row",key:`row-${n}`},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,(e=>((0,r.wg)(),(0,r.iD)("button",{key:`row-${e}`,onClick:n=>w.addInputNumber(e),disabled:w.isDisableAddNum(e)},(0,u.zw)(e),9,b)))),128))])))),128)),(0,r._)("div",f,[(0,r._)("button",{disabled:w.disableRemoveNum,onClick:n[0]||(n[0]=(...e)=>w.removeInputNumber&&w.removeInputNumber(...e))}," 지우기 ",8,h),(0,r._)("button",{disabled:w.disableToAttack,onClick:n[1]||(n[1]=(...e)=>w.attack&&w.attack(...e))},"공격",8,v)])])],64)}t(7658);var y={name:"MainPage",props:{},data(){return{isUserInning:!0,buttons:[[0,1,2,3,4],[5,6,7,8,9]],input:[],numbers:[],messages:[{answer:void 0,result:void 0}]}},computed:{playerImageResource(){return this.isUserInning?t(2131):t(1842)},npcImageResource(){return this.isUserInning?t(1842):t(2131)},displayInput(){return Array(3).fill(null).map(((e,n)=>this.input[n]>=0?this.input[n]:e))},disableToAttack(){return this.input.length<3},disableRemoveNum(){return 0===this.input.length}},methods:{addInputNumber(e){this.input.push(e)},removeInputNumber(){this.input.pop()},isDisableAddNum(e){return this.input.includes(e)},attack(){const e=[...this.input];this.messages[0].answer=e,setTimeout((()=>{const n=e.map(((e,n)=>this.numbers[n]===e?"S":this.numbers.includes(e)?"B":"K"));this.messages[0].result=n}),1e3),setTimeout((()=>{this.input=[],"SSS"!==this.messages[0].result.join("")&&(this.messages=[{answer:void 0,result:void 0},...this.messages])}),2e3)},getAnswer(e){return e.answer?e.answer.join(""):"..."},getResult(e){return e.result?"KKK"===e.result.join("")?"OUT":"SSS"===e.result.join("")?"CORRECT":`${e.result.filter((e=>"S"===e)).length}S ${e.result.filter((e=>"B"===e)).length}B`:"..."}},mounted(){console.log("--- mounted ---");const e=()=>{while(this.numbers.length<3){let e=Math.floor(9*Math.random());!this.numbers.includes(e)&&this.numbers.push(e)}console.log(`--- ${this.numbers.join("")} ---`)};e()}},k=t(89);const _=(0,k.Z)(y,[["render",w],["__scopeId","data-v-1cb71456"]]);var I=_,O={name:"App",components:{MainPage:I}};const j=(0,k.Z)(O,[["render",i]]);var D=j;(0,s.ri)(D).mount("#app")},2131:function(e,n,t){e.exports=t.p+"img/player-batter.b44a1cf0.png"},1842:function(e,n,t){e.exports=t.p+"img/player.736ee53e.png"}},n={};function t(s){var r=n[s];if(void 0!==r)return r.exports;var i=n[s]={exports:{}};return e[s](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,s,r,i){if(!s){var u=1/0;for(c=0;c<e.length;c++){s=e[c][0],r=e[c][1],i=e[c][2];for(var o=!0,a=0;a<s.length;a++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](s[a])}))?s.splice(a--,1):(o=!1,i<u&&(u=i));if(o){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[s,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/number-baseball/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,s){var r,i,u=s[0],o=s[1],a=s[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(r in o)t.o(o,r)&&(t.m[r]=o[r]);if(a)var c=a(t)}for(n&&n(s);l<u.length;l++)i=u[l],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},s=self["webpackChunknumber_baseball"]=self["webpackChunknumber_baseball"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(4858)}));s=t.O(s)})();
//# sourceMappingURL=app.ecf2d762.js.map