import{t as L,a as V,i as D,u as N}from"./index-976243ec.js";import{s as r,u as H,r as o,i as Q,o as B,_ as T,w as W,a as c,c as d,b as l,n as x,E as _,t as k,F as I,d as E,e as A}from"./index-bfb63971.js";function j(t){var e;const a=V(t);return(e=a==null?void 0:a.$el)!=null?e:a}const q=D?window:void 0;function G(){const t=o(!1);return Q()&&B(()=>{t.value=!0}),t}function J(t){const e=G();return r(()=>(e.value,Boolean(t())))}var z=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,X=(t,e)=>{var a={};for(var s in t)K.call(t,s)&&e.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&z)for(var s of z(t))e.indexOf(s)<0&&U.call(t,s)&&(a[s]=t[s]);return a};function Y(t,e,a={}){const s=a,{window:n=q}=s,M=X(s,["window"]);let v;const b=J(()=>n&&"ResizeObserver"in n),p=()=>{v&&(v.disconnect(),v=void 0)},g=r(()=>Array.isArray(t)?t.map(i=>j(i)):[j(t)]),w=H(g,i=>{if(p(),b.value&&n){v=new ResizeObserver(e);for(const f of i)f&&v.observe(f,M)}},{immediate:!0,flush:"post",deep:!0}),h=()=>{p(),w()};return L(h),{isSupported:b,stop:h}}const Z={class:"fly"},ee={class:"stage"},te={class:"odds"},ae={class:"time-axis"},se={key:0},ne={class:"odds-axis"},le={key:0},oe=["width","height"],ie={id:"mask1"},ue=["d"],re=["d"],ce=["d"],de={__name:"fly",setup(t){const e=o(375),a=o(0),s=o(40),n=o(1),M=o(100),v=o(50),b=o(30),p=o(10),g=r(()=>(e.value-p.value*2)/Math.max(2,a.value)),w=r(()=>(e.value-p.value*2)/Math.max(4,n.value)),h=r(()=>e.value),i=r(()=>({x:0,y:e.value})),f=r(()=>({x:a.value*g.value,y:e.value-(n.value-1)*w.value})),u=r(()=>({x:Math.min(f.value.x,e.value-v.value),y:Math.max(b.value,f.value.y)})),P=r(()=>({x:u.value.x*.7,y:(i.value.y-u.value.y)*.7+u.value.y}));function F(m){if(!a.value)return!0;const $=Math.ceil(a.value/8);return m%$===0}function R(m){if(!n.value)return!0;const $=Math.ceil(n.value/8);return(m-1)%$===0}const S=o("");W(()=>{S.value=`M${i.value.x},${i.value.y} Q${P.value.x},${P.value.y} ${u.value.x},${u.value.y}`});const O=o("");W(()=>{O.value=`M${i.value.x},${i.value.y} L${u.value.x},${i.value.y} L${u.value.x},${u.value.y}`}),B(()=>{e.value=document.body.clientWidth}),Y(document.body,()=>{e.value=document.body.clientWidth});const C=N(()=>{a.value+=.1,n.value+=.05,a.value>=s.value&&C.pause(),a.value=Math.min(a.value,e.value),n.value=Math.min(n.value,e.value)},100);return(m,$)=>(c(),d("div",Z,[l("div",ee,[l("img",{class:"airplane",src:"https://bpic.588ku.com/element_origin_min_pic/17/11/16/17c07e3321595d2d0ab9790459c17e9c.jpg",style:x({left:_(u).x+"px",top:_(u).y-30+"px"})},null,4),l("div",te,k(n.value.toFixed(2))+"x",1),l("div",{class:"time-axis-box",style:x({width:e.value+"px"})},[l("div",ae,[(c(!0),d(I,null,E(s.value,y=>(c(),d("div",{class:"time-axis-item",style:x({width:_(g)+"px"})},[F(y-1)?(c(),d("span",se,k(y-1)+"s",1)):A("",!0)],4))),256))])],4),l("div",{class:"odds-axis-box",style:x({height:e.value+"px"})},[l("div",ne,[(c(!0),d(I,null,E(M.value,y=>(c(),d("div",{class:"odds-axis-item",style:x({height:_(w)+"px"})},[R(y)?(c(),d("span",le,k(y)+"x",1)):A("",!0)],4))),256))])],4),(c(),d("svg",{width:_(h),height:_(h)},[l("defs",null,[l("mask",ie,[l("path",{d:O.value,fill:"#fff"},null,8,ue),l("path",{d:S.value,fill:"black"},null,8,re)])]),l("path",{d:O.value,fill:"pink",mask:"url(#mask1)"},null,8,ce)],8,oe))])]))}},pe=T(de,[["__scopeId","data-v-1f2a2988"]]);export{pe as default};
