var B=Object.defineProperty;var G=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function L(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function z(t){return t()}function ct(){return Object.create(null)}function F(t){t.forEach(z)}function W(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return m||(m=document.createElement("a")),m.href=e,t===m.href}function ut(t){return Object.keys(t).length===0}function I(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(I(e,n))}function ft(t,e,n,i){if(t){const s=M(t,e,n,i);return t[0](s)}}function M(t,e,n,i){return t[1]&&i?R(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],l=Math.max(e.dirty.length,s.length);for(let o=0;o<l;o+=1)r[o]=e.dirty[o]|s[o];return r}return e.dirty|s}return e.dirty}function ht(t,e,n,i,s,r){if(s){const l=M(e,n,i,r);t.p(l,s)}}function dt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function yt(t){const e={};for(const n in t)e[n]=!0;return e}function bt(t,e,n){return t.set(n),e}function gt(t){return t&&W(t.destroy)?t.destroy:L}let y=!1;function xt(){y=!0}function vt(){y=!1}function J(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=u?s+1:J(1,s,q=>e[n[q]].claim_order,u))-1;i[c]=n[a]+1;const N=a+1;n[N]=c,s=Math.max(N,s)}const r=[],l=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(r.push(e[c-1]);o>=c;o--)l.push(e[o]);o--}for(;o>=0;o--)l.push(e[o]);r.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<r.length&&l[c].claim_order>=r[u].claim_order;)u++;const a=u<r.length?r[u]:null;t.insertBefore(l[c],a)}}function Q(t,e){if(y){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function V(t,e,n){y&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function Tt(){return T(" ")}function wt(){return T("")}function Nt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function At(t){return function(e){return e.preventDefault(),t.call(this,e)}}function X(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Y=["width","height"];function kt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Y.indexOf(i)===-1?t[i]=e[i]:X(t,i,e[i])}function Ht(t){return t.dataset.svelteH}function Lt(t){return Array.from(t.childNodes)}function D(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,s=!1){D(t);const r=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,s||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(e(o)){const c=n(o);return c===void 0?t.splice(l,1):t[l]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function C(t,e,n,i){return P(t,s=>s.nodeName===e,s=>{const r=[];for(let l=0;l<s.attributes.length;l++){const o=s.attributes[l];n[o.name]||r.push(o.name)}r.forEach(l=>s.removeAttribute(l))},()=>i(e))}function Mt(t,e,n){return C(t,e,n,S)}function St(t,e,n){return C(t,e,n,j)}function Z(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function jt(t){return Z(t," ")}function A(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Dt(t,e){const n=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",n);if(n===i)return new k(void 0,e);D(t);const s=t.splice(n,i-n+1);x(s[0]),x(s[s.length-1]);const r=s.slice(1,s.length-1);for(const l of r)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new k(r,e)}function Pt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ct(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Bt(t,e,n){t.classList.toggle(e,!!n)}function $(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Gt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const r=s.textContent.trim();r===`HEAD_${t}_END`?(i-=1,n.push(s)):r===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class tt{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=j(n.nodeName):this.e=S(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)U(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class k extends tt{constructor(n,i=!1){super(i);f(this,"l");this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],n)}}function Rt(t,e){return new t(e)}let p;function b(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function zt(t){w().$$.on_mount.push(t)}function Ft(t){w().$$.after_update.push(t)}function Wt(){const t=w();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const r=$(e,n,{cancelable:i});return s.slice().forEach(l=>{l.call(t,r)}),!r.defaultPrevented}return!0}}function It(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],H=[];let h=[];const v=[],O=Promise.resolve();let E=!1;function et(){E||(E=!0,O.then(it))}function Jt(){return et(),O}function nt(t){h.push(t)}function Kt(t){v.push(t)}const g=new Set;let _=0;function it(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const e=d[_];_++,b(e),st(e.$$)}}catch(e){throw d.length=0,_=0,e}for(b(null),d.length=0,_=0;H.length;)H.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];g.has(n)||(g.add(n),n())}h.length=0}while(d.length);for(;v.length;)v.pop()();E=!1,g.clear(),b(t)}function st(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Qt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{it as $,Bt as A,Nt as B,ot as C,ft as D,R as E,kt as F,Ot as G,At as H,ht as I,dt as J,_t as K,F as L,pt as M,Wt as N,mt as O,It as P,Kt as Q,yt as R,k as S,Dt as T,W as U,nt as V,Gt as W,bt as X,gt as Y,I as Z,ct as _,Tt as a,ut as a0,Qt as a1,p as a2,b as a3,z as a4,d as a5,et as a6,xt as a7,vt as a8,Ct as a9,Ft as b,jt as c,x as d,wt as e,S as f,Mt as g,Lt as h,V as i,X as j,qt as k,T as l,Z as m,Pt as n,zt as o,H as p,Rt as q,j as r,rt as s,Jt as t,St as u,Q as v,L as w,Et as x,at as y,Ht as z};
