import{ag as d,ah as m,m as f,c as p,b as g,w as h,u as _,ai as v,o as w,q as M}from"./entry.DqnkjrLj.js";import{c as x,d as y,s as u}from"./interval.D_jsdrfO.js";import{u as T}from"./vue.f36acd1f.D2QDFvAx.js";function I(l,o){const{title:r,titleTemplate:t,...i}=l;return T({title:r,titleTemplate:t,_flatMeta:i},{...o,transform(e){const a=d({...e._flatMeta});return delete e._flatMeta,{...e,meta:a}}})}const k={class:"contextual-transition-container"},s="plan, design, grow",S={__name:"default",setup(l){const o=m(),r=x(),t=y();t.value=s;const i=()=>{let e=null,a=0;clearInterval(e);const n=s;e=u(()=>{t.value=n.split("").map((b,c)=>c<=a?n[c]:" ").join("").concat(" |"),a>n.length&&(t.value=s,clearInterval(e)),a+=1},120)};return I({ogTitle:s,description:"My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",ogDescription:"My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",ogImage:"/cover.png"}),f(()=>{u(()=>{r.value?i():t.value=s},5e3)}),(e,a)=>{const n=v;return w(),p("div",k,[g(n,{class:"layout",transition:_(o)},{default:h(()=>[M(e.$slots,"default")]),_:3},8,["transition"])])}}};export{S as default};