import{s as q,a as C,b as M}from"./interval.DzwvWAy6.js";import{o as a,c,s as S,a as n,_ as h,k as d,m as Y,t as B,u as r,n as V,b as m,h as F,z as j,f as k,x as I,g as W,p as H,e as P,q as D,l as T,w as G,F as L,d as O,r as X}from"./entry.BhaahGO1.js";import{_ as Z}from"./nuxt-link.bSRlIwcI.js";const J=n("path",{d:"M16.5201 31.7581H25.2246L32.4286 38.8367L39.6708 31.7823H65.2075L32.4191 64L0 32.1452L32.7146 0V8.55299L8.7045 32.1452L32.4191 55.447L50.348 37.8302H42.2046L32.4097 47.3711L16.5201 31.7581Z",fill:"none"},null,-1),K=[J],Q={__name:"logo",props:{isBlack:Boolean},setup(e){return(s,t)=>(a(),c("svg",{width:"66",height:"64",viewBox:"0 0 66 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:S(["logo",{"logo--black":e.isBlack}])},K,2))}},U=Q,N=8,ee={__name:"link",props:{text:{type:String,default:"",required:!0},preStart:{type:Boolean,default:!1}},setup(e){const s=e,t=d(),l=d(s.text),i=d("initial"),o=d(!1),_=d(!1),f=()=>{if(s.preStart&&_.value||o.value)return;const w="abcdeghkmnopqrstuvxyz";let v=null,p=0;clearInterval(v);const u=s.text;v=q(()=>{o.value=!0,l.value=u.split("").map(($,x)=>{if(x<p)return u[x];const y=u+w;return y[Math.floor(Math.random()*y.length)]}).join(""),(p>=u.length||p>=N)&&(clearInterval(v),p>=N&&(l.value=u),o.value=!1,_.value=!0),p+=1/5},16)};return Y(()=>{i.value=t.value.offsetWidth+2+"px",s.preStart&&f()}),(w,v)=>(a(),c("span",{ref_key:"element",ref:t,class:"link",style:V({"min-width":r(i),"max-width":r(i)}),onMouseover:f},B(r(l)),37))}},g=h(ee,[["__scopeId","data-v-b6b992a7"]]),te={href:"mailto:hello.geovo@gmail.com"},se={href:"https://t.me/meisdigital",target:"_blank"},oe={__name:"contacts",props:{isBlack:Boolean,isFloat:Boolean},setup(e){return(s,t)=>(a(),c("ul",{class:S(["contacts",{"contacts--black":e.isBlack,"contacts--float":e.isFloat}])},[n("li",null,[n("a",te,[m(g,{text:"hello.geovo@gmail.com"})])]),n("li",null,[n("a",se,[m(g,{text:"telegram"})])])],2))}},ae=h(oe,[["__scopeId","data-v-c9a7b738"]]),ne={href:"./CV-George-Vorobyov.pdf",target:"_blank"},le={__name:"nav",props:{isBlack:Boolean,isFloat:Boolean},setup(e){const{y:s}=C({behavior:"smooth"}),t=()=>{if(!(window!=null&&window.document))return;const l=window.document.getElementById("works");s.value=l.getBoundingClientRect().top+window.scrollY};return(l,i)=>(a(),c("ul",{class:S(["nav",{"nav--black":e.isBlack,"nav--float":e.isFloat}])},[n("li",null,[m(g,{text:"works",onClick:t})]),n("li",null,[n("a",ne,[m(g,{text:"get cv"})])])],2))}},ce=h(le,[["__scopeId","data-v-b8ad375a"]]),re=e=>(H("data-v-968bb71b"),e=e(),P(),e),ie={class:"intro"},_e=re(()=>n("div",{class:"intro__slogan"},"plan, design, grow",-1)),ue={__name:"intro",setup(e){const{y:s}=C({behavior:"smooth"}),t=F(),l=j(),i=()=>{t.name==="index"?s.value=0:l.push({name:"index"})},o=k(()=>t.name==="index");return(_,f)=>(a(),c("section",ie,[r(o)?(a(),I(ae,{key:0,"is-black":"","is-float":""})):W("",!0),m(ce,{"is-black":"","is-float":""}),m(U,{"is-black":"",class:"intro__logo",onClick:i}),_e]))}},Ce=h(ue,[["__scopeId","data-v-968bb71b"]]),de={},pe={class:"section"},me={class:"section__container"};function he(e,s){return a(),c("section",pe,[n("div",me,[D(e.$slots,"default")])])}const We=h(de,[["render",he]]),ve={class:"work__header"},fe={class:"work__text"},ke=["src"],ge={__name:"work",props:{text:{type:String,default:""},header:{type:String,default:""},name:{type:String,default:""},preview:{type:String,default:""}},setup(e){const s=e,t=d(!1),l=d(),i=d(),{elementX:o,elementY:_,isOutside:f,sourceType:w,elementWidth:v,elementPositionY:p}=M(l),{elementHeight:u,elementWidth:$}=M(i),{y:x}=C(),y=k(()=>"/george24/previews/"+s.preview),z=k(()=>o.value>v.value-$.value?o.value-$.value+"px":o.value+"px"),A=k(()=>p.value-window.screen.availHeight/2+u.value/2>x.value?_.value-u.value+"px":_.value+"px");return T(f,b=>{t.value=!b}),T(w,(b,E)=>{E==="touch"&&b==="mouse"&&(t.value=!1)}),(b,E)=>{const R=Z;return a(),I(R,{ref_key:"itemElement",ref:l,to:e.name,class:S(["work__container",{"work__container--hover":r(t)}])},{default:G(()=>[n("div",ve,[r(t)?(a(),I(g,{key:1,text:e.header,"pre-start":""},null,8,["text"])):(a(),c(L,{key:0},[O(B(e.header),1)],64))]),n("div",fe,B(e.text),1),r(t)?(a(),c("div",{key:0,ref_key:"popupElement",ref:i,class:"work__pop",style:V({left:r(z),top:r(A)})},[n("img",{src:r(y),class:"work__pop-img"},null,8,ke)],4)):W("",!0)]),_:1},8,["to","class"])}}},we=h(ge,[["__scopeId","data-v-9abd9110"]]),xe=e=>(H("data-v-17468afb"),e=e(),P(),e),ye={id:"works",class:"works"},be=xe(()=>n("div",{class:"works__header"},"Works",-1)),Se={class:"works__list"},$e={__name:"works",props:{list:Array},setup(e){const s=F(),t=k(()=>l=>l.name===s.params.name);return(l,i)=>(a(),c("div",ye,[be,n("ul",Se,[(a(!0),c(L,null,X(e.list,(o,_)=>(a(),c(L,null,[r(t)(o)?W("",!0):(a(),c("li",{key:_,class:"works__item"},[m(we,{header:o.header,text:o.text,name:o.name,preview:o.preview},null,8,["header","text","name","preview"])]))],64))),256))])]))}},Ee=h($e,[["__scopeId","data-v-17468afb"]]);export{ae as C,Ce as I,g as L,ce as N,We as S,Ee as W};
