import{t as m,a as w,i as _}from"./index-859590d4.js";import{s as v,u as y,r as g,i as h,o as S}from"./index-a785f07f.js";function f(e){var n;const o=w(e);return(n=o==null?void 0:o.$el)!=null?n:o}const $=_?window:void 0;function j(){const e=g(!1);return h()&&S(()=>{e.value=!0}),e}function M(e){const n=j();return v(()=>(n.value,Boolean(e())))}var c=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,z=(e,n)=>{var o={};for(var t in e)P.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&c)for(var t of c(e))n.indexOf(t)<0&&R.call(e,t)&&(o[t]=e[t]);return o};function x(e,n,o={}){const t=o,{window:s=$}=t,d=z(t,["window"]);let r;const i=M(()=>s&&"ResizeObserver"in s),u=()=>{r&&(r.disconnect(),r=void 0)},O=v(()=>Array.isArray(e)?e.map(a=>f(a)):[f(e)]),b=y(O,a=>{if(u(),i.value&&s){r=new ResizeObserver(n);for(const p of a)p&&r.observe(p,d)}},{immediate:!0,flush:"post",deep:!0}),l=()=>{u(),b()};return m(l),{isSupported:i,stop:l}}export{x as u};
