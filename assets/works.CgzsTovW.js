import{s as V,a as L,b as F}from"./interval.lobyHozV.js";import{o as s,c,m as g,a,_ as f,r as p,i as A,t as w,u as r,n as C,b as d,x as N,y as T,p as W,e as E,k as R,h as $,s as B,w as D,F as y,d as z,j as M,g as G,l as H}from"./entry.DO9x3BMX.js";import{_ as P}from"./nuxt-link.Dx-ag_oY.js";const j=a("path",{d:"M16.5201 31.7581H25.2246L32.4286 38.8367L39.6708 31.7823H65.2075L32.4191 64L0 32.1452L32.7146 0V8.55299L8.7045 32.1452L32.4191 55.447L50.348 37.8302H42.2046L32.4097 47.3711L16.5201 31.7581Z",fill:"none"},null,-1),q=[j],O={__name:"logo",props:{isBlack:Boolean},setup(e){return(t,n)=>(s(),c("svg",{width:"66",height:"64",viewBox:"0 0 66 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:g(["logo",{"logo--black":e.isBlack}])},q,2))}},Y=O,I=8,X={__name:"link",props:{text:{type:String,default:"",required:!0},preStart:{type:Boolean,default:!1}},setup(e){const t=e,n=p(),o=p(t.text),l=p("initial"),_=p(!1),i=p(!1),v=()=>{if(t.preStart&&i.value||_.value)return;const u="abcdeghkmnopqrstuvxyz";let h=null,m=0;clearInterval(h);const k=t.text;h=V(()=>{_.value=!0,o.value=k.split("").map((xe,b)=>{if(b<m)return k[b];const S=k+u;return S[Math.floor(Math.random()*S.length)]}).join(""),(m>=k.length||m>=I)&&(clearInterval(h),m>=I&&(o.value=k),_.value=!1,i.value=!0),m+=1/5},16)};return A(()=>{l.value=n.value.offsetWidth+2+"px",t.preStart&&v()}),(u,h)=>(s(),c("span",{ref_key:"element",ref:n,class:"link",style:C({"min-width":r(l),"max-width":r(l)}),onMouseover:v},w(r(o)),37))}},x=f(X,[["__scopeId","data-v-b6b992a7"]]),Z={href:"mailto:hello.geovo@gmail.com"},J={href:"https://t.me/meisdigital",target:"_blank"},K={__name:"contacts",props:{isBlack:Boolean,isFloat:Boolean},setup(e){return(t,n)=>(s(),c("ul",{class:g(["contacts",{"contacts--black":e.isBlack,"contacts--float":e.isFloat}])},[a("li",null,[a("a",Z,[d(x,{text:"hello.geovo@gmail.com"})])]),a("li",null,[a("a",J,[d(x,{text:"telegram"})])])],2))}},Q=f(K,[["__scopeId","data-v-c9a7b738"]]),U={href:"./CV-George-Vorobyov.pdf",target:"_blank"},ee={__name:"nav",props:{isBlack:Boolean,isFloat:Boolean},setup(e){const{y:t}=L({behavior:"smooth"}),n=()=>{if(!(window!=null&&window.document))return;const o=window.document.getElementById("works");t.value=o.getBoundingClientRect().top+window.scrollY};return(o,l)=>(s(),c("ul",{class:g(["nav",{"nav--black":e.isBlack,"nav--float":e.isFloat}])},[a("li",null,[d(x,{text:"works",onClick:n})]),a("li",null,[a("a",U,[d(x,{text:"get cv"})])])],2))}},te=f(ee,[["__scopeId","data-v-b8ad375a"]]),oe=e=>(W("data-v-ff7dd160"),e=e(),E(),e),se={class:"intro"},ae=oe(()=>a("div",{class:"intro__slogan"},"plan, design, grow",-1)),ne={__name:"intro",setup(e){const{y:t}=L({behavior:"smooth"}),n=N(),o=T(),l=()=>{n.name==="index"?t.value=0:o.push({name:"index"})};return(_,i)=>(s(),c("section",se,[d(Q,{"is-black":"","is-float":""}),d(te,{"is-black":"","is-float":""}),d(Y,{"is-black":"",class:"intro__logo",onClick:l}),ae]))}},be=f(ne,[["__scopeId","data-v-ff7dd160"]]),re={},ce={class:"section"},le={class:"section__container"};function ie(e,t){return s(),c("section",ce,[a("div",le,[R(e.$slots,"default")])])}const Se=f(re,[["render",ie]]),de={class:"work__header"},_e={class:"work__text"},ue={__name:"work",props:{text:{type:String,default:""},header:{type:String,default:""},name:{type:String,default:""}},setup(e){const t=p(!1),n=p(),{elementX:o,elementY:l,isOutside:_,sourceType:i,elementWidth:v}=F(n);return $(_,u=>{t.value=!u}),$(i,(u,h)=>{h==="touch"&&u==="mouse"&&(t.value=!1)}),(u,h)=>{const m=P;return s(),B(m,{ref_key:"itemElement",ref:n,to:e.name,class:g(["work__container",{"work__container--hover":r(t)}])},{default:D(()=>[a("div",de,[r(t)?(s(),B(x,{key:1,text:e.header,"pre-start":""},null,8,["text"])):(s(),c(y,{key:0},[z(w(e.header),1)],64))]),a("div",_e,w(e.text),1),r(t)?(s(),c("div",{key:0,class:"work__pop",style:C({left:r(o)>r(v)-200?r(o)-200+"px":r(o)+"px",top:r(l)+"px"})},null,4)):M("",!0)]),_:1},8,["to","class"])}}},he=f(ue,[["__scopeId","data-v-2236edd7"]]),me=e=>(W("data-v-1b321312"),e=e(),E(),e),pe={id:"works",class:"works"},fe=me(()=>a("div",{class:"works__header"},"Works",-1)),ve={class:"works__list"},ke={__name:"works",setup(e){const t=N(),n=[{header:"Athletic Greens",name:"athletic",text:"Original Foundational Nutrition drink to provide daily support where the body needs it most"},{header:"Futurebox",name:"futurebox",text:"Sell real estate under construction using AR/VR technologies"},{header:"AdGuard DNS",name:"adgourd",text:"DNS service to help people protect all web traffic on their devices from malicious content"},{header:"Exynex",name:"exynex",text:"Discover what services track your data online"},{header:"Superseed",name:"superseed",text:"Advanced cloud storage for geeks & gamers"},{header:"VCards",name:"vcards",text:"Mobile wallet for managing your virtual cards"}],o=G(()=>l=>l.name!==t.params.name);return(l,_)=>(s(),c("div",pe,[fe,a("ul",ve,[(s(),c(y,null,H(n,(i,v)=>(s(),c(y,null,[r(o)(i)?(s(),c("li",{key:v,class:"works__item"},[d(he,{header:i.header,text:i.text,name:i.name},null,8,["header","text","name"])])):M("",!0)],64))),64))])]))}},$e=f(ke,[["__scopeId","data-v-1b321312"]]);export{Q as C,be as I,te as N,Se as S,$e as W};
