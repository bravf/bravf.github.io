import{a as u}from"./plugin-vueexport-helper-11eb3da1.js";import{r as i,i as d}from"./index-011bd715.js";function b(s=1e3){return new Promise(e=>{setTimeout(e,s)})}function m(s=10){return parseInt(Math.random()*s)}function h(s=10){return m(s)===0}function p(s,e=[]){const r=[];for(var t=0;t<s;t++){const n=[];for(var o=0;o<s;o++){const c=s*t+o;n.push({id:c,clicking:!1,bouns:0,status:0})}r.push(n)}return r}const a=i(document.body.clientWidth);u(document.body,()=>{a.value=document.body.clientWidth});const v=d(()=>a.value/360);export{p as a,a as b,v as c,m as d,h as r,b as s};
