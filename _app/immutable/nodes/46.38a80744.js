import{s as Ot,E as mt,y as gt,O as xt,a as z,c as M,i as b,d as h,f as p,g as c,h as I,z as f,G as v,j as N,v as u,w as Y,l as U,m as K,Y as Q,U as X}from"../chunks/scheduler.e71eccdd.js";import{S as Tt,i as Pt,b as B,d as W,m as q,a as H,t as D,e as J}from"../chunks/index.445ee094.js";import{g as bt,a as $t}from"../chunks/index.18b79e66.js";import{M as wt}from"../chunks/mdsvex.3a31e1aa.js";import{p as Nt,C as Et,a as F,r as Z}from"../chunks/ClassTable.b8d00d65.js";function It(m){let t,l,r="Pick your favorite Simpson",o,a="Homer",n,s="Marge",e,C="Bart",_,x="Lisa",d,O="Maggie";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,d=p("option"),d.textContent=O,this.h()},l(g){t=c(g,"SELECT",{class:!0});var T=I(t);l=c(T,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-1yoy9u8"&&(l.textContent=r),o=c(T,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-1ityd1n"&&(o.textContent=a),n=c(T,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-ms1mtq"&&(n.textContent=s),e=c(T,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-wxocwb"&&(e.textContent=C),_=c(T,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-109mdkn"&&(_.textContent=x),d=c(T,"OPTION",{["data-svelte-h"]:!0}),f(d)!=="svelte-1g62hce"&&(d.textContent=O),T.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Pick your favorite Simpson",v(l,l.__value),o.__value="Homer",v(o,o.__value),n.__value="Marge",v(n,n.__value),e.__value="Bart",v(e,e.__value),_.__value="Lisa",v(_,_.__value),d.__value="Maggie",v(d,d.__value),N(t,"class","select w-full max-w-xs")},m(g,T){b(g,t,T),u(t,l),u(t,o),u(t,n),u(t,e),u(t,_),u(t,d)},p:Y,d(g){g&&h(t)}}}function St(m){let t,l=`<select class="$$select w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function kt(m){let t,l,r="Who shot first?",o,a="Han Solo",n,s="Greedo";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,this.h()},l(e){t=c(e,"SELECT",{class:!0});var C=I(t);l=c(C,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-9heglc"&&(l.textContent=r),o=c(C,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-r0tnwa"&&(o.textContent=a),n=c(C,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-deoxp2"&&(n.textContent=s),C.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Who shot first?",v(l,l.__value),o.__value="Han Solo",v(o,o.__value),n.__value="Greedo",v(n,n.__value),N(t,"class","select w-full max-w-xs select-bordered")},m(e,C){b(e,t,C),u(t,l),u(t,o),u(t,n)},p:Y,d(e){e&&h(t)}}}function yt(m){let t,l=`<select class="$$select $$select-bordered w-full max-w-xs">
  <option disabled selected>Who shot first?</option>
  <option>Han Solo</option>
  <option>Greedo</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Lt(m){let t,l,r="Pick the best JS framework",o,a="Svelte",n,s="Vue",e,C="React";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,this.h()},l(_){t=c(_,"SELECT",{class:!0});var x=I(t);l=c(x,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-ny580k"&&(l.textContent=r),o=c(x,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-8z31n3"&&(o.textContent=a),n=c(x,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-t9sfg6"&&(n.textContent=s),e=c(x,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-uohjir"&&(e.textContent=C),x.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Pick the best JS framework",v(l,l.__value),o.__value="Svelte",v(o,o.__value),n.__value="Vue",v(n,n.__value),e.__value="React",v(e,e.__value),N(t,"class","select w-full max-w-xs select-ghost")},m(_,x){b(_,t,x),u(t,l),u(t,o),u(t,n),u(t,e)},p:Y,d(_){_&&h(t)}}}function At(m){let t,l=`<select class="$$select $$select-ghost w-full max-w-xs">
  <option disabled selected>Pick the best JS framework</option>
  <option>Svelte</option>
  <option>Vue</option>
  <option>React</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function jt(m){let t,l,r='<span class="label-text">Pick the best fantasy franchise</span> <span class="label-text-alt">Alt label</span>',o,a,n,s="Pick one",e,C="Star Wars",_,x="Harry Potter",d,O="Lord of the Rings",g,T="Planet of the Apes",w,k="Star Trek",y,P,R='<span class="label-text-alt">Alt label</span> <span class="label-text-alt">Alt label</span>';return{c(){t=p("div"),l=p("label"),l.innerHTML=r,o=z(),a=p("select"),n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,d=p("option"),d.textContent=O,g=p("option"),g.textContent=T,w=p("option"),w.textContent=k,y=z(),P=p("label"),P.innerHTML=R,this.h()},l(E){t=c(E,"DIV",{class:!0});var L=I(t);l=c(L,"LABEL",{class:!0,["data-svelte-h"]:!0}),f(l)!=="svelte-17aetnv"&&(l.innerHTML=r),o=M(L),a=c(L,"SELECT",{class:!0});var S=I(a);n=c(S,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-8xjvh6"&&(n.textContent=s),e=c(S,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-fj9w2v"&&(e.textContent=C),_=c(S,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-sehkg0"&&(_.textContent=x),d=c(S,"OPTION",{["data-svelte-h"]:!0}),f(d)!=="svelte-1wzg8hm"&&(d.textContent=O),g=c(S,"OPTION",{["data-svelte-h"]:!0}),f(g)!=="svelte-grojsp"&&(g.textContent=T),w=c(S,"OPTION",{["data-svelte-h"]:!0}),f(w)!=="svelte-whbzjs"&&(w.textContent=k),S.forEach(h),y=M(L),P=c(L,"LABEL",{class:!0,["data-svelte-h"]:!0}),f(P)!=="svelte-1htbrj9"&&(P.innerHTML=R),L.forEach(h),this.h()},h(){N(l,"class","label"),n.disabled=!0,n.selected=!0,n.__value="Pick one",v(n,n.__value),e.__value="Star Wars",v(e,e.__value),_.__value="Harry Potter",v(_,_.__value),d.__value="Lord of the Rings",v(d,d.__value),g.__value="Planet of the Apes",v(g,g.__value),w.__value="Star Trek",v(w,w.__value),N(a,"class","select select-bordered"),N(P,"class","label"),N(t,"class","form-control w-full max-w-xs")},m(E,L){b(E,t,L),u(t,l),u(t,o),u(t,a),u(a,n),u(a,e),u(a,_),u(a,d),u(a,g),u(a,w),u(t,y),u(t,P)},p:Y,d(E){E&&h(t)}}}function zt(m){let t,l=`<div class="$$form-control w-full max-w-xs">
  <label class="$$label">
    <span class="$$label-text">Pick the best fantasy franchise</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
  <select class="$$select $$select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <label class="$$label">
    <span class="$$label-text-alt">Alt label</span>
    <span class="$$label-text-alt">Alt label</span>
  </label>
</div>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Mt(m){let t,l,r="What is the best TV show?",o,a="Game of Thrones",n,s="Lost",e,C="Breaking Bad",_,x="Walking Dead";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,this.h()},l(d){t=c(d,"SELECT",{class:!0});var O=I(t);l=c(O,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-1lfdta8"&&(l.textContent=r),o=c(O,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-onlcla"&&(o.textContent=a),n=c(O,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-i5aclm"&&(n.textContent=s),e=c(O,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-18stx6i"&&(e.textContent=C),_=c(O,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-1pj6fev"&&(_.textContent=x),O.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="What is the best TV show?",v(l,l.__value),o.__value="Game of Thrones",v(o,o.__value),n.__value="Lost",v(n,n.__value),e.__value="Breaking Bad",v(e,e.__value),_.__value="Walking Dead",v(_,_.__value),N(t,"class","select w-full max-w-xs select-primary")},m(d,O){b(d,t,O),u(t,l),u(t,o),u(t,n),u(t,e),u(t,_)},p:Y,d(d){d&&h(t)}}}function Rt(m){let t,l=`<select class="$$select $$select-primary w-full max-w-xs">
  <option disabled selected>What is the best TV show?</option>
  <option>Game of Thrones</option>
  <option>Lost</option>
  <option>Breaking Bad</option>
  <option>Walking Dead</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Bt(m){let t,l,r="Pick your favorite language",o,a="Java",n,s="Go",e,C="C",_,x="C#",d,O="C++",g,T="Rust",w,k="JavaScript",y,P="Python";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,d=p("option"),d.textContent=O,g=p("option"),g.textContent=T,w=p("option"),w.textContent=k,y=p("option"),y.textContent=P,this.h()},l(R){t=c(R,"SELECT",{class:!0});var E=I(t);l=c(E,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-pf9x1b"&&(l.textContent=r),o=c(E,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-8ch438"&&(o.textContent=a),n=c(E,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-1zkt1e"&&(n.textContent=s),e=c(E,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-1v2odf1"&&(e.textContent=C),_=c(E,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-pko7gy"&&(_.textContent=x),d=c(E,"OPTION",{["data-svelte-h"]:!0}),f(d)!=="svelte-vpzn97"&&(d.textContent=O),g=c(E,"OPTION",{["data-svelte-h"]:!0}),f(g)!=="svelte-qz32fi"&&(g.textContent=T),w=c(E,"OPTION",{["data-svelte-h"]:!0}),f(w)!=="svelte-140hvk3"&&(w.textContent=k),y=c(E,"OPTION",{["data-svelte-h"]:!0}),f(y)!=="svelte-efcq86"&&(y.textContent=P),E.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Pick your favorite language",v(l,l.__value),o.__value="Java",v(o,o.__value),n.__value="Go",v(n,n.__value),e.__value="C",v(e,e.__value),_.__value="C#",v(_,_.__value),d.__value="C++",v(d,d.__value),g.__value="Rust",v(g,g.__value),w.__value="JavaScript",v(w,w.__value),y.__value="Python",v(y,y.__value),N(t,"class","select w-full max-w-xs select-secondary")},m(R,E){b(R,t,E),u(t,l),u(t,o),u(t,n),u(t,e),u(t,_),u(t,d),u(t,g),u(t,w),u(t,y)},p:Y,d(R){R&&h(t)}}}function Wt(m){let t,l=`<select class="$$select $$select-secondary w-full max-w-xs">
  <option disabled selected>Pick your favorite language</option>
  <option>Java</option>
  <option>Go</option>
  <option>C</option>
  <option>C#</option>
  <option>C++</option>
  <option>Rust</option>
  <option>JavaScript</option>
  <option>Python</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function qt(m){let t,l,r="Dark mode or light mode?",o,a="Auto",n,s="Dark mode",e,C="Light mode";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,this.h()},l(_){t=c(_,"SELECT",{class:!0});var x=I(t);l=c(x,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-nj8u1j"&&(l.textContent=r),o=c(x,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-xs7pkn"&&(o.textContent=a),n=c(x,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-13gw4x7"&&(n.textContent=s),e=c(x,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-vau66n"&&(e.textContent=C),x.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Dark mode or light mode?",v(l,l.__value),o.__value="Auto",v(o,o.__value),n.__value="Dark mode",v(n,n.__value),e.__value="Light mode",v(e,e.__value),N(t,"class","select w-full max-w-xs select-accent")},m(_,x){b(_,t,x),u(t,l),u(t,o),u(t,n),u(t,e)},p:Y,d(_){_&&h(t)}}}function Ht(m){let t,l=`<select class="$$select $$select-accent w-full max-w-xs">
  <option disabled selected>Dark mode or light mode?</option>
  <option>Auto</option>
  <option>Dark mode</option>
  <option>Light mode</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Dt(m){let t,l,r="Select language",o,a="English",n,s="Japanese",e,C="Italian";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,this.h()},l(_){t=c(_,"SELECT",{class:!0});var x=I(t);l=c(x,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-5d7vjf"&&(l.textContent=r),o=c(x,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-16e6kj2"&&(o.textContent=a),n=c(x,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-1csp51j"&&(n.textContent=s),e=c(x,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-iszffq"&&(e.textContent=C),x.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Select language",v(l,l.__value),o.__value="English",v(o,o.__value),n.__value="Japanese",v(n,n.__value),e.__value="Italian",v(e,e.__value),N(t,"class","select w-full max-w-xs select-info")},m(_,x){b(_,t,x),u(t,l),u(t,o),u(t,n),u(t,e)},p:Y,d(_){_&&h(t)}}}function Jt(m){let t,l=`<select class="$$select $$select-info w-full max-w-xs">
  <option disabled selected>Select language</option>
  <option>English</option>
  <option>Japanese</option>
  <option>Italian</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Gt(m){let t,l,r="Pick your favorite anime",o,a="One Piece",n,s="Naruto",e,C="Death Note",_,x="Attack on Titan",d,O="Bleach",g,T="Fullmetal Alchemist",w,k="Jojo's Bizarre Adventure";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,d=p("option"),d.textContent=O,g=p("option"),g.textContent=T,w=p("option"),w.textContent=k,this.h()},l(y){t=c(y,"SELECT",{class:!0});var P=I(t);l=c(P,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-1kbt3wf"&&(l.textContent=r),o=c(P,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-jtukrk"&&(o.textContent=a),n=c(P,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-1v0vi1d"&&(n.textContent=s),e=c(P,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-opqppa"&&(e.textContent=C),_=c(P,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-10k5is7"&&(_.textContent=x),d=c(P,"OPTION",{["data-svelte-h"]:!0}),f(d)!=="svelte-fhhfsj"&&(d.textContent=O),g=c(P,"OPTION",{["data-svelte-h"]:!0}),f(g)!=="svelte-x523dq"&&(g.textContent=T),w=c(P,"OPTION",{["data-svelte-h"]:!0}),f(w)!=="svelte-1epbnt"&&(w.textContent=k),P.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Pick your favorite anime",v(l,l.__value),o.__value="One Piece",v(o,o.__value),n.__value="Naruto",v(n,n.__value),e.__value="Death Note",v(e,e.__value),_.__value="Attack on Titan",v(_,_.__value),d.__value="Bleach",v(d,d.__value),g.__value="Fullmetal Alchemist",v(g,g.__value),w.__value="Jojo's Bizarre Adventure",v(w,w.__value),N(t,"class","select w-full max-w-xs select-success")},m(y,P){b(y,t,P),u(t,l),u(t,o),u(t,n),u(t,e),u(t,_),u(t,d),u(t,g),u(t,w)},p:Y,d(y){y&&h(t)}}}function Vt(m){let t,l=`<select class="$$select $$select-success w-full max-w-xs">
  <option disabled selected>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Jojo's Bizarre Adventure</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Ft(m){let t,l,r="Pick a pizza",o,a="Cheese",n,s="Veggie",e,C="Pepperoni",_,x="Margherita",d,O="Hawaiian";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,d=p("option"),d.textContent=O,this.h()},l(g){t=c(g,"SELECT",{class:!0});var T=I(t);l=c(T,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-1qy936v"&&(l.textContent=r),o=c(T,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-1yfidxp"&&(o.textContent=a),n=c(T,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-1v33r1p"&&(n.textContent=s),e=c(T,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-10c1l62"&&(e.textContent=C),_=c(T,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-1k2hbx4"&&(_.textContent=x),d=c(T,"OPTION",{["data-svelte-h"]:!0}),f(d)!=="svelte-1t1nkfi"&&(d.textContent=O),T.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="Pick a pizza",v(l,l.__value),o.__value="Cheese",v(o,o.__value),n.__value="Veggie",v(n,n.__value),e.__value="Pepperoni",v(e,e.__value),_.__value="Margherita",v(_,_.__value),d.__value="Hawaiian",v(d,d.__value),N(t,"class","select w-full max-w-xs select-warning")},m(g,T){b(g,t,T),u(t,l),u(t,o),u(t,n),u(t,e),u(t,_),u(t,d)},p:Y,d(g){g&&h(t)}}}function Yt(m){let t,l=`<select class="$$select $$select-warning w-full max-w-xs">
  <option disabled selected>Pick a pizza</option>
  <option>Cheese</option>
  <option>Veggie</option>
  <option>Pepperoni</option>
  <option>Margherita</option>
  <option>Hawaiian</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Ut(m){let t,l,r="What is the best headless CMS",o,a="Strapi",n,s="Ghost",e,C="Netlify CMS",_,x="Sanity";return{c(){t=p("select"),l=p("option"),l.textContent=r,o=p("option"),o.textContent=a,n=p("option"),n.textContent=s,e=p("option"),e.textContent=C,_=p("option"),_.textContent=x,this.h()},l(d){t=c(d,"SELECT",{class:!0});var O=I(t);l=c(O,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-7zd24q"&&(l.textContent=r),o=c(O,"OPTION",{["data-svelte-h"]:!0}),f(o)!=="svelte-pv3z5p"&&(o.textContent=a),n=c(O,"OPTION",{["data-svelte-h"]:!0}),f(n)!=="svelte-9hh3g3"&&(n.textContent=s),e=c(O,"OPTION",{["data-svelte-h"]:!0}),f(e)!=="svelte-1ghpfx2"&&(e.textContent=C),_=c(O,"OPTION",{["data-svelte-h"]:!0}),f(_)!=="svelte-glm8nu"&&(_.textContent=x),O.forEach(h),this.h()},h(){l.disabled=!0,l.selected=!0,l.__value="What is the best headless CMS",v(l,l.__value),o.__value="Strapi",v(o,o.__value),n.__value="Ghost",v(n,n.__value),e.__value="Netlify CMS",v(e,e.__value),_.__value="Sanity",v(_,_.__value),N(t,"class","select w-full max-w-xs select-error")},m(d,O){b(d,t,O),u(t,l),u(t,o),u(t,n),u(t,e),u(t,_)},p:Y,d(d){d&&h(t)}}}function Kt(m){let t,l=`<select class="$$select $$select-error w-full max-w-xs">
  <option disabled selected>What is the best headless CMS</option>
  <option>Strapi</option>
  <option>Ghost</option>
  <option>Netlify CMS</option>
  <option>Sanity</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Qt(m){let t,l,r,o="Large",a,n="Large Apple",s,e="Large Orange",C,_="Large Tomato",x,d,O,g="Normal",T,w="Normal Apple",k,y="Normal Orange",P,R="Normal Tomato",E,L,S,at="Small",A,it="Small Apple",j,rt="Small Orange",i,$="Small Tomato",pt,tt,G,ct="Tiny",et,ut="Tiny Apple",lt,_t="Tiny Orange",ot,ft="Tiny Tomato";return{c(){t=p("div"),l=p("select"),r=p("option"),r.textContent=o,a=p("option"),a.textContent=n,s=p("option"),s.textContent=e,C=p("option"),C.textContent=_,x=z(),d=p("select"),O=p("option"),O.textContent=g,T=p("option"),T.textContent=w,k=p("option"),k.textContent=y,P=p("option"),P.textContent=R,E=z(),L=p("select"),S=p("option"),S.textContent=at,A=p("option"),A.textContent=it,j=p("option"),j.textContent=rt,i=p("option"),i.textContent=$,pt=z(),tt=p("select"),G=p("option"),G.textContent=ct,et=p("option"),et.textContent=ut,lt=p("option"),lt.textContent=_t,ot=p("option"),ot.textContent=ft,this.h()},l(nt){t=c(nt,"DIV",{class:!0});var V=I(t);l=c(V,"SELECT",{class:!0});var st=I(l);r=c(st,"OPTION",{["data-svelte-h"]:!0}),f(r)!=="svelte-qctba4"&&(r.textContent=o),a=c(st,"OPTION",{["data-svelte-h"]:!0}),f(a)!=="svelte-1yq0mcj"&&(a.textContent=n),s=c(st,"OPTION",{["data-svelte-h"]:!0}),f(s)!=="svelte-tid9lv"&&(s.textContent=e),C=c(st,"OPTION",{["data-svelte-h"]:!0}),f(C)!=="svelte-qsh2qr"&&(C.textContent=_),st.forEach(h),x=M(V),d=c(V,"SELECT",{class:!0});var vt=I(d);O=c(vt,"OPTION",{["data-svelte-h"]:!0}),f(O)!=="svelte-1ffdm18"&&(O.textContent=g),T=c(vt,"OPTION",{["data-svelte-h"]:!0}),f(T)!=="svelte-p54mxf"&&(T.textContent=w),k=c(vt,"OPTION",{["data-svelte-h"]:!0}),f(k)!=="svelte-1veptcj"&&(k.textContent=y),P=c(vt,"OPTION",{["data-svelte-h"]:!0}),f(P)!=="svelte-cufspf"&&(P.textContent=R),vt.forEach(h),E=M(V),L=c(V,"SELECT",{class:!0});var dt=I(L);S=c(dt,"OPTION",{["data-svelte-h"]:!0}),f(S)!=="svelte-1xtb98"&&(S.textContent=at),A=c(dt,"OPTION",{["data-svelte-h"]:!0}),f(A)!=="svelte-jk9ybn"&&(A.textContent=it),j=c(dt,"OPTION",{["data-svelte-h"]:!0}),f(j)!=="svelte-o98gjn"&&(j.textContent=rt),i=c(dt,"OPTION",{["data-svelte-h"]:!0}),f(i)!=="svelte-1anugoz"&&(i.textContent=$),dt.forEach(h),pt=M(V),tt=c(V,"SELECT",{class:!0});var ht=I(tt);G=c(ht,"OPTION",{["data-svelte-h"]:!0}),f(G)!=="svelte-1ilgqw1"&&(G.textContent=ct),et=c(ht,"OPTION",{["data-svelte-h"]:!0}),f(et)!=="svelte-1j4vnpu"&&(et.textContent=ut),lt=c(ht,"OPTION",{["data-svelte-h"]:!0}),f(lt)!=="svelte-1a2sdjm"&&(lt.textContent=_t),ot=c(ht,"OPTION",{["data-svelte-h"]:!0}),f(ot)!=="svelte-13yxq6q"&&(ot.textContent=ft),ht.forEach(h),V.forEach(h),this.h()},h(){r.disabled=!0,r.selected=!0,r.__value="Large",v(r,r.__value),a.__value="Large Apple",v(a,a.__value),s.__value="Large Orange",v(s,s.__value),C.__value="Large Tomato",v(C,C.__value),N(l,"class","select select-bordered select-lg w-full max-w-xs"),O.disabled=!0,O.selected=!0,O.__value="Normal",v(O,O.__value),T.__value="Normal Apple",v(T,T.__value),k.__value="Normal Orange",v(k,k.__value),P.__value="Normal Tomato",v(P,P.__value),N(d,"class","select select-bordered w-full max-w-xs"),S.disabled=!0,S.selected=!0,S.__value="Small",v(S,S.__value),A.__value="Small Apple",v(A,A.__value),j.__value="Small Orange",v(j,j.__value),i.__value="Small Tomato",v(i,i.__value),N(L,"class","select select-bordered select-sm w-full max-w-xs"),G.disabled=!0,G.selected=!0,G.__value="Tiny",v(G,G.__value),et.__value="Tiny Apple",v(et,et.__value),lt.__value="Tiny Orange",v(lt,lt.__value),ot.__value="Tiny Tomato",v(ot,ot.__value),N(tt,"class","select select-bordered select-xs w-full max-w-xs"),N(t,"class","flex flex-col gap-4 w-full items-center")},m(nt,V){b(nt,t,V),u(t,l),u(l,r),u(l,a),u(l,s),u(l,C),u(t,x),u(t,d),u(d,O),u(d,T),u(d,k),u(d,P),u(t,E),u(t,L),u(L,S),u(L,A),u(L,j),u(L,i),u(t,pt),u(t,tt),u(tt,G),u(tt,et),u(tt,lt),u(tt,ot)},p:Y,d(nt){nt&&h(t)}}}function Xt(m){let t,l=`<!-- lg -->
<select class="$$select $$select-bordered $$select-lg w-full max-w-xs">
  <option disabled selected>Large</option>
  <option>Large Apple</option>
  <option>Large Orange</option>
  <option>Large Tomato</option>
</select>
<!-- md -->
<select class="$$select $$select-bordered w-full max-w-xs">
  <option disabled selected>Normal</option>
  <option>Normal Apple</option>
  <option>Normal Orange</option>
  <option>Normal Tomato</option>
</select>
<!-- sm -->
<select class="$$select $$select-bordered $$select-sm w-full max-w-xs">
  <option disabled selected>Small</option>
  <option>Small Apple</option>
  <option>Small Orange</option>
  <option>Small Tomato</option>
</select>
<!-- xs -->
<select class="$$select $$select-bordered $$select-xs w-full max-w-xs">
  <option disabled selected>Tiny</option>
  <option>Tiny Apple</option>
  <option>Tiny Orange</option>
  <option>Tiny Tomato</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function Zt(m){let t,l,r="You can't touch this";return{c(){t=p("select"),l=p("option"),l.textContent=r,this.h()},l(o){t=c(o,"SELECT",{class:!0});var a=I(t);l=c(a,"OPTION",{["data-svelte-h"]:!0}),f(l)!=="svelte-1l25yr"&&(l.textContent=r),a.forEach(h),this.h()},h(){l.__value="You can't touch this",v(l,l.__value),N(t,"class","select w-full max-w-xs"),t.disabled=!0},m(o,a){b(o,t,a),u(t,l)},p:Y,d(o){o&&h(t)}}}function te(m){let t,l=`<select class="$$select w-full max-w-xs" disabled>
  <option>You can't touch this</option>
</select>`,r,o,a,n;return{c(){t=p("pre"),r=U(l),this.h()},l(s){t=c(s,"PRE",{slot:!0});var e=I(t);r=K(e,l),e.forEach(h),this.h()},h(){N(t,"slot","html")},m(s,e){b(s,t,e),u(t,r),a||(n=Q(o=Z.call(null,t,{to:m[0]})),a=!0)},p(s,e){o&&X(o.update)&&e&1&&o.update.call(null,{to:s[0]})},d(s){s&&h(t),a=!1,n()}}}function ee(m){let t,l,r,o,a,n,s,e,C,_,x,d,O,g,T,w,k,y,P,R,E,L,S,at,A,it,j,rt;return t=new Et({props:{data:[{type:"component",class:"form-control",desc:"Container element"},{type:"component",class:"label",desc:"For helper text"},{type:"component",class:"select",desc:"For <select> element"},{type:"modifier",class:"select-bordered",desc:"Adds border to select"},{type:"modifier",class:"select-ghost",desc:"Adds ghost style to select"},{type:"modifier",class:"select-primary",desc:"Adds `primary` color to select"},{type:"modifier",class:"select-secondary",desc:"Adds `secondary` color to select"},{type:"modifier",class:"select-accent",desc:"Adds `accent` color to select"},{type:"modifier",class:"select-info",desc:"Adds `info` color to select"},{type:"modifier",class:"select-success",desc:"Adds `success` color to select"},{type:"modifier",class:"select-warning",desc:"Adds `warning` color to select"},{type:"modifier",class:"select-error",desc:"Adds `error` color to select"},{type:"responsive",class:"select-lg",desc:"Large size for select"},{type:"responsive",class:"select-md",desc:"Medium (default) size for select"},{type:"responsive",class:"select-sm",desc:"Small size for select"},{type:"responsive",class:"select-xs",desc:"Extra small size for select"}]}}),r=new F({props:{title:"Select",$$slots:{html:[St],default:[It]},$$scope:{ctx:m}}}),a=new F({props:{title:"Select with border",$$slots:{html:[yt],default:[kt]},$$scope:{ctx:m}}}),s=new F({props:{title:"Ghost (no background)",$$slots:{html:[At],default:[Lt]},$$scope:{ctx:m}}}),C=new F({props:{title:"With form-control and labels",$$slots:{html:[zt],default:[jt]},$$scope:{ctx:m}}}),x=new F({props:{title:"Primary color",$$slots:{html:[Rt],default:[Mt]},$$scope:{ctx:m}}}),O=new F({props:{title:"Secondary color",$$slots:{html:[Wt],default:[Bt]},$$scope:{ctx:m}}}),T=new F({props:{title:"Accent color",$$slots:{html:[Ht],default:[qt]},$$scope:{ctx:m}}}),k=new F({props:{title:"Info color",$$slots:{html:[Jt],default:[Dt]},$$scope:{ctx:m}}}),P=new F({props:{title:"Success color",$$slots:{html:[Vt],default:[Gt]},$$scope:{ctx:m}}}),E=new F({props:{title:"Warning color",$$slots:{html:[Yt],default:[Ft]},$$scope:{ctx:m}}}),S=new F({props:{title:"Error color",$$slots:{html:[Kt],default:[Ut]},$$scope:{ctx:m}}}),A=new F({props:{title:"Sizes",$$slots:{html:[Xt],default:[Qt]},$$scope:{ctx:m}}}),j=new F({props:{title:"Disabled",$$slots:{html:[te],default:[Zt]},$$scope:{ctx:m}}}),{c(){B(t.$$.fragment),l=z(),B(r.$$.fragment),o=z(),B(a.$$.fragment),n=z(),B(s.$$.fragment),e=z(),B(C.$$.fragment),_=z(),B(x.$$.fragment),d=z(),B(O.$$.fragment),g=z(),B(T.$$.fragment),w=z(),B(k.$$.fragment),y=z(),B(P.$$.fragment),R=z(),B(E.$$.fragment),L=z(),B(S.$$.fragment),at=z(),B(A.$$.fragment),it=z(),B(j.$$.fragment)},l(i){W(t.$$.fragment,i),l=M(i),W(r.$$.fragment,i),o=M(i),W(a.$$.fragment,i),n=M(i),W(s.$$.fragment,i),e=M(i),W(C.$$.fragment,i),_=M(i),W(x.$$.fragment,i),d=M(i),W(O.$$.fragment,i),g=M(i),W(T.$$.fragment,i),w=M(i),W(k.$$.fragment,i),y=M(i),W(P.$$.fragment,i),R=M(i),W(E.$$.fragment,i),L=M(i),W(S.$$.fragment,i),at=M(i),W(A.$$.fragment,i),it=M(i),W(j.$$.fragment,i)},m(i,$){q(t,i,$),b(i,l,$),q(r,i,$),b(i,o,$),q(a,i,$),b(i,n,$),q(s,i,$),b(i,e,$),q(C,i,$),b(i,_,$),q(x,i,$),b(i,d,$),q(O,i,$),b(i,g,$),q(T,i,$),b(i,w,$),q(k,i,$),b(i,y,$),q(P,i,$),b(i,R,$),q(E,i,$),b(i,L,$),q(S,i,$),b(i,at,$),q(A,i,$),b(i,it,$),q(j,i,$),rt=!0},p(i,$){const pt={};$&5&&(pt.$$scope={dirty:$,ctx:i}),r.$set(pt);const tt={};$&5&&(tt.$$scope={dirty:$,ctx:i}),a.$set(tt);const G={};$&5&&(G.$$scope={dirty:$,ctx:i}),s.$set(G);const ct={};$&5&&(ct.$$scope={dirty:$,ctx:i}),C.$set(ct);const et={};$&5&&(et.$$scope={dirty:$,ctx:i}),x.$set(et);const ut={};$&5&&(ut.$$scope={dirty:$,ctx:i}),O.$set(ut);const lt={};$&5&&(lt.$$scope={dirty:$,ctx:i}),T.$set(lt);const _t={};$&5&&(_t.$$scope={dirty:$,ctx:i}),k.$set(_t);const ot={};$&5&&(ot.$$scope={dirty:$,ctx:i}),P.$set(ot);const ft={};$&5&&(ft.$$scope={dirty:$,ctx:i}),E.$set(ft);const nt={};$&5&&(nt.$$scope={dirty:$,ctx:i}),S.$set(nt);const V={};$&5&&(V.$$scope={dirty:$,ctx:i}),A.$set(V);const st={};$&5&&(st.$$scope={dirty:$,ctx:i}),j.$set(st)},i(i){rt||(H(t.$$.fragment,i),H(r.$$.fragment,i),H(a.$$.fragment,i),H(s.$$.fragment,i),H(C.$$.fragment,i),H(x.$$.fragment,i),H(O.$$.fragment,i),H(T.$$.fragment,i),H(k.$$.fragment,i),H(P.$$.fragment,i),H(E.$$.fragment,i),H(S.$$.fragment,i),H(A.$$.fragment,i),H(j.$$.fragment,i),rt=!0)},o(i){D(t.$$.fragment,i),D(r.$$.fragment,i),D(a.$$.fragment,i),D(s.$$.fragment,i),D(C.$$.fragment,i),D(x.$$.fragment,i),D(O.$$.fragment,i),D(T.$$.fragment,i),D(k.$$.fragment,i),D(P.$$.fragment,i),D(E.$$.fragment,i),D(S.$$.fragment,i),D(A.$$.fragment,i),D(j.$$.fragment,i),rt=!1},d(i){i&&(h(l),h(o),h(n),h(e),h(_),h(d),h(g),h(w),h(y),h(R),h(L),h(at),h(it)),J(t,i),J(r,i),J(a,i),J(s,i),J(C,i),J(x,i),J(O,i),J(T,i),J(k,i),J(P,i),J(E,i),J(S,i),J(A,i),J(j,i)}}}function le(m){let t,l;const r=[m[1],Ct];let o={$$slots:{default:[ee]},$$scope:{ctx:m}};for(let a=0;a<r.length;a+=1)o=mt(o,r[a]);return t=new wt({props:o}),{c(){B(t.$$.fragment)},l(a){W(t.$$.fragment,a)},m(a,n){q(t,a,n),l=!0},p(a,[n]){const s=n&2?bt(r,[n&2&&$t(a[1]),n&0&&$t(Ct)]):{};n&5&&(s.$$scope={dirty:n,ctx:a}),t.$set(s)},i(a){l||(H(t.$$.fragment,a),l=!0)},o(a){D(t.$$.fragment,a),l=!1},d(a){J(t,a)}}}const Ct={title:"Select",desc:"Select is used to pick a value from a list of options.",published:!0};function oe(m,t,l){let r;return gt(m,Nt,o=>l(0,r=o)),m.$$set=o=>{l(1,t=mt(mt({},t),xt(o)))},t=xt(t),[r,t]}class pe extends Tt{constructor(t){super(),Pt(this,t,oe,le,Ot,{})}}export{pe as component};
