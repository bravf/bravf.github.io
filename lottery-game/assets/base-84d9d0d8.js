import{c as f,y as w,P as O,Q as _,R as h,r as v,l as g,h as P}from"./index-baf7d01d.js";function c(e){var n;const o=_(e);return(n=o==null?void 0:o.$el)!=null?n:o}const M=h?window:void 0;function R(){const e=v(!1);return g()&&P(()=>{e.value=!0}),e}function S(e){const n=R();return f(()=>(n.value,!!e()))}var p=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,j=(e,n)=>{var o={};for(var t in e)W.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&p)for(var t of p(e))n.indexOf(t)<0&&$.call(e,t)&&(o[t]=e[t]);return o};function I(e,n,o={}){const t=o,{window:s=M}=t,b=j(t,["window"]);let r;const i=S(()=>s&&"ResizeObserver"in s),u=()=>{r&&(r.disconnect(),r=void 0)},m=f(()=>Array.isArray(e)?e.map(a=>c(a)):[c(e)]),y=w(m,a=>{if(u(),i.value&&s){r=new ResizeObserver(n);for(const l of a)l&&r.observe(l,b)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{u(),y()};return O(d),{isSupported:i,stop:d}}function A(e=1e3){return new Promise(n=>{setTimeout(n,e)})}function z(e=10){return parseInt(Math.random()*e)}function C(e=10){return z(e)===0}const E=v(document.body.clientWidth);I(document.body,()=>{E.value=document.body.clientWidth});export{z as a,E as b,C as r,A as s,I as u};
