import{P as d,U as p,i as f,c as m,b as _,w as g,u as h,Q as v,o as w,k as M}from"./entry.DJ6Vurwe.js";import{c as x,d as y,s as u}from"./interval.CSPI_Gmt.js";import{u as T}from"./vue.f36acd1f.vQZEa9RU.js";function k(l,o){const{title:r,titleTemplate:t,...i}=l;return T({title:r,titleTemplate:t,_flatMeta:i},{...o,transform(e){const a=d({...e._flatMeta});return delete e._flatMeta,{...e,meta:a}}})}const I={class:"contextual-transition-container"},s="plan, design, grow",P={__name:"default",setup(l){const o=p(),r=x(),t=y();t.value=s;const i=()=>{let e=null,a=0;clearInterval(e);const n=s;e=u(()=>{t.value=n.split("").map((b,c)=>c<=a?n[c]:" ").join("").concat(" |"),a>n.length&&(t.value=s,clearInterval(e)),a+=1},120)};return k({ogTitle:s,description:"My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",ogDescription:"My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",ogImage:"/assets/bg_art_portrait.png"}),f(()=>{u(()=>{r.value?i():t.value=s},5e3)}),(e,a)=>{const n=v;return w(),m("div",I,[_(n,{class:"layout",transition:h(o)},{default:g(()=>[M(e.$slots,"default")]),_:3},8,["transition"])])}}};export{P as default};