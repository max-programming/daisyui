import{g as s}from"./_commonjsHelpers.725317a4.js";function g(o,r){const e={},h={},d={$$scope:1};let f=o.length;for(;f--;){const n=o[f],c=r[f];if(c){for(const t in n)t in c||(h[t]=1);for(const t in c)d[t]||(e[t]=c[t],d[t]=1);o[f]=c}else for(const t in n)d[t]=1}for(const n in h)n in e||(e[n]=void 0);return e}function C(o){return typeof o=="object"&&o!==null?o:{}}function a(o){return a.raw(o).split(" ").map(function(r){return parseInt(r).toString(16)}).join(" ")}a.raw=function(o){if(o.length===1)return o.charCodeAt(0).toString();if(o.length>1){for(var r=[],e=0;e<o.length;e++)o.charCodeAt(e)>=55296&&o.charCodeAt(e)<=56319?o.charCodeAt(e+1)>=56320&&o.charCodeAt(e+1)<=57343&&r.push((o.charCodeAt(e)-55296)*1024+(o.charCodeAt(e+1)-56320)+65536):(o.charCodeAt(e)<55296||o.charCodeAt(e)>57343)&&r.push(o.charCodeAt(e));return r.join(" ")}return""};var l=a;const i=s(l);export{C as a,i as e,g};
