import{c,s as d}from"./interval.C3qGbWuL.js";import{u}from"./vue.f36acd1f.CyTrnUbI.js";import{O as p,o as m,v as g,E as f,t as h}from"./entry.D6RirdJ0.js";function _(o,n){const{title:s,titleTemplate:e,...a}=o;return u({title:s,titleTemplate:e,_flatMeta:a},{...n,transform(t){const l=p({...t._flatMeta});return delete t._flatMeta,{...t,meta:l}}})}const v={class:"layout"},r="plan, design, grow",T={__name:"default",setup(o){const n=c();n.value=r;const s=()=>{let e=null,a=0;clearInterval(e);const t=r;e=d(()=>{n.value=t.split("").map((l,i)=>i<=a?t[i]:" ").join("").concat(" |"),a>t.length&&(n.value=r,clearInterval(e)),a+=1},120)};return _({title:r,ogTitle:r,description:"My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",ogDescription:"My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights.",ogImage:"/assets/bg_art_portrait.png"}),m(()=>{d(()=>{s()},5e3)}),(e,a)=>(h(),g("div",v,[f(e.$slots,"default")]))}};export{T as default};
