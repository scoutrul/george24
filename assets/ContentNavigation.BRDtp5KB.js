import{q as f,w as m,e as v,s as g,j as d,a as l,u as h}from"./query.DAmDiq7W.js";import{B as _,E as C,f as y,G as w,g as P,H as $,C as N,q as r}from"./entry.GQE_J2vO.js";import{h as p,u as j}from"./preview.DQH9pnWy.js";import{_ as E}from"./nuxt-link.C_-FFF1E.js";const T=async e=>{const{content:t}=_().public;typeof(e==null?void 0:e.params)!="function"&&(e=f(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(g())return(await C(()=>import("./client-db.Dphft7vH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=y({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=w(e),a=P(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&$("dd-navigation").value){const{navigation:n}=l();return{navigation:n}}const{data:s}=await h(`content-navigation-${p(a.value)}`,()=>T(a.value));return{navigation:s}},render(e){const t=N(),{navigation:a}=e,s=o=>r(E,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),Q=D;export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.Dphft7vH.js","./entry.GQE_J2vO.js","./entry.BtSDq0Yp.css","./query.DAmDiq7W.js","./preview.DQH9pnWy.js","./index.BsYmvPZw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
