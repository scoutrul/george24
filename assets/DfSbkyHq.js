import{u as z,q as j}from"./BzZOdddU.js";import{N as Q,C as ee,S,I as se,W as te}from"./BFDHNWAU.js";import{k as ae,l as ie,m as d,f as g,n as W,q as R,o as n,c,s as y,h as F,a as t,v as q,F as O,r as V,x as X,y as oe,_ as b,z as J,w as k,p as C,e as I,g as x,b as l,u as ne,d as E,A as Y,t as D,j as G}from"./Bbyf7IOj.js";import{u as U,a as le,b as Z,c as ce,d as re,e as de,f as ue}from"./HsDVGdcB.js";import"./vsEnrMNn.js";import"./B4003k6h.js";const B=ae,_e=ie({__name:"Marquee",props:{style:{default:()=>()=>({})},class:{default:""},autoFill:{type:Boolean,default:!1},play:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},direction:{default:"left"},speed:{default:50},delay:{default:0},loop:{default:0},gradient:{type:Boolean,default:!1},gradientColor:{default:"white"},gradientWidth:{default:200}},emits:["finish","cycleComplete"],setup(e,{emit:s}){const a=s,i=d(),o=d(),f=d(0),_=d(0),p=d(1),m=d(!1),r=d(),L=g(()=>e.autoFill?_.value*p.value/e.speed:_<f?f.value/e.speed:_.value/e.speed),v=g(()=>({...e.style,"--pause-on-hover":!e.play||e.pauseOnHover?"paused":"running","--pause-on-click":!e.play||e.pauseOnHover&&!e.pauseOnClick||e.pauseOnClick?"paused":"running","--width":e.direction==="up"||e.direction==="down"?"100vh":"100%","--transform":e.direction==="up"?"rotate(-90deg)":e.direction==="down"?"rotate(90deg)":"none"})),N=g(()=>({"--gradient-color":e.gradientColor,"--gradient-width":typeof e.gradientWidth=="number"?`${e.gradientWidth}px`:e.gradientWidth})),$=g(()=>({"--play":e.play?"running":"paused","--direction":e.direction==="left"?"normal":"reverse","--duration":`${L.value}s`,"--delay":`${e.delay}s`,"--iteration-count":e.loop?`${e.loop}`:"infinite","--min-width":e.autoFill?"auto":"100%"})),A=g(()=>({"--transform":e.direction==="up"?"rotate(90deg)":e.direction==="down"?"rotate(-90deg)":"none"})),P=()=>{if(o.value&&i.value){const u=i.value.getBoundingClientRect(),w=o.value.getBoundingClientRect();let h=u.width,M=w.width;(e.direction==="up"||e.direction==="down")&&(h=u.height,M=w.height),e.autoFill&&h&&M?p.value=M<h?Math.ceil(h/M):1:p.value=1,f.value=h,_.value=M}},T=u=>[...Array(Number.isFinite(u)&&u>=0?u:0)];return W([()=>e.autoFill,()=>e.direction,m,i],()=>{m.value&&(P(),o.value&&i.value&&(r.value&&r.value.disconnect(),r.value=new ResizeObserver(()=>P()),r.value.observe(i.value),r.value.observe(o.value)))}),R(()=>{m.value=!0}),(u,w)=>m.value?(n(),c("div",{key:0,ref_key:"containerRef",ref:i,class:X(["vfm-marquee-container",e.class]),style:y(v.value)},[u.gradient?(n(),c("div",{key:0,style:y(N.value),class:"vfm-overlay"},null,4)):F("",!0),t("div",{class:"vfm-marquee",style:y($.value),onAnimationiteration:w[0]||(w[0]=h=>a("cycleComplete")),onAnimationend:w[1]||(w[1]=h=>a("finish"))},[t("div",{style:y(A.value),class:"vfm-parent",ref_key:"marqueeRef",ref:o},[q(u.$slots,"default")],4),(n(!0),c(O,null,V(T(p.value-1),h=>(n(),c("div",{style:y(A.value),class:"vfm-parent"},[q(u.$slots,"default")],4))),256))],36),t("div",{class:"vfm-marquee",style:y($.value)},[(n(!0),c(O,null,V(T(p.value),h=>(n(),c("div",{style:y(A.value),class:"vfm-parent"},[q(u.$slots,"default")],4))),256))],4)],6)):F("",!0)}}),ve={name:"NuxtMarquee",emits:["finish","cycleComplete"],props:["style","class","autoFill","play","pauseOnHover","pauseOnClick","direction","speed","delay","loop","gradient","gradientColor","gradientWidth"],setup(e,{slots:s,emit:a}){return()=>oe(_e,{...e,onCycleComplete:()=>a("cycleComplete"),onFinish:()=>a("finish")},s)}},pe=ve,he={},fe=e=>(C("data-v-fdb4ccf9"),e=e(),I(),e),me=fe(()=>t("span",{"data-text":"plan, design, grow",class:"glitch"}," plan, design, grow,  ",-1));function ge(e,s){const a=pe;return n(),J(a,{"auto-fill":"",class:"marquee"},{default:k(()=>[me]),_:1})}const we=b(he,[["render",ge],["__scopeId","data-v-fdb4ccf9"]]),K=e=>(C("data-v-095f00d9"),e=e(),I(),e),ye=K(()=>t("svg",{class:"poster__logo glitch",xmlns:"http://www.w3.org/2000/svg",width:"214",height:"214",viewBox:"0 0 214 214",fill:"none"},[t("path",{d:"M70 107L107 144L134.5 116.5H189.5L107 199L15 107L107 15",stroke:"#E3DED1","stroke-width":"20","stroke-linecap":"square"})],-1)),ke=[ye],be=K(()=>t("div",{class:"poster__logo-small"},null,-1)),$e=["src"],Se={__name:"poster",setup(e){const{app:{baseURL:s}}=ne(),a=d(`${s}bg_landscape@2x.webp`),i=d(null),{start:o,isPending:f}=U(()=>{document.body.style.overflow="initial"},1e4),{start:_}=U(()=>{r.value.reset(),r.value=B({targets:".poster__logo path",strokeDashoffset:[B.setDashoffset,0],easing:"easeInOutExpo",duration:2500,direction:"alternate",loop:!1}),r.value.play()},5e3),{isLoading:p}=le({src:a.value}),m=Z(i),r=d(null);return R(()=>{document.body.style.overflow="hidden",r.value=B({targets:".poster__logo path",strokeDashoffset:[B.setDashoffset,0],easing:"easeInOutExpo",duration:2500,direction:"alternate",loop:!0,delay:function(L,v){return v*200}}),r.value.play(),o(),_()}),(L,v)=>(n(),c("section",{ref_key:"poster",ref:i,class:"poster"},[t("section",{class:X(["poster poster--loading",{"poster--finish":!x(p)&&!x(f)}])},ke,2),be,l(Q),l(ee),t("img",{src:x(a),alt:"",class:"poster__poster"},null,8,$e),x(m)?(n(),J(we,{key:0})):F("",!0)],512))}},xe=b(Se,[["__scopeId","data-v-095f00d9"]]),Ce={},H=e=>(C("data-v-a763780d"),e=e(),I(),e),Ie={class:"present"},Le=H(()=>t("div",{class:"present__specialist"}," My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of SaaS/IaaS products in Data security, E-commerce, Digital medicine, Fintech and AI to reach new heights. ",-1)),Ae=H(()=>t("div",{class:"present__line"},null,-1)),Me=H(()=>t("div",{class:"present__stack"}," Proficient in user research, solving complex problems with a large amount of data, scenarios and edge cases, building consistent design systems with variables and tokens and delivering high-end design solutions with a juicy visual style across web and mobile platforms. ",-1)),Be=[Le,Ae,Me];function De(e,s){return n(),c("div",Ie,Be)}const We=b(Ce,[["render",De],["__scopeId","data-v-a763780d"]]),Fe=e=>(C("data-v-3a81b102"),e=e(),I(),e),Oe={class:"achieves"},Ve=Y('<div class="achieves__chart" data-v-3a81b102><svg class="achieves__chart-bg" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a81b102><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-3a81b102></path></svg><svg class="achieves__chart-bg achieves__chart-bg--flip" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a81b102><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-3a81b102></path></svg></div>',1),qe={class:"achieves__value"},Ee=Fe(()=>t("div",{class:"achieves__message"},[E(" people interact with my solutions"),t("br"),E(" monthly in over 30 countries. ")],-1)),Re={__name:"achieves",setup(e){const s=d(null),a=Z(s);return W(a,i=>{i&&B({targets:s.value,innerHTML:[0,32.6],easing:"cubicBezier(0,1,0,1)",round:10,duration:3e3,delay:500,direction:"normal"})}),(i,o)=>(n(),c("section",Oe,[Ve,t("div",qe,[t("span",{ref_key:"numbers",ref:s,class:"achieves__value-number"}," 0 ",512),E(" M ")]),Ee]))}},He=b(Re,[["__scopeId","data-v-3a81b102"]]),Ne=e=>(C("data-v-7e9d8826"),e=e(),I(),e),Pe={class:"reviews"},Te=Ne(()=>t("div",{class:"reviews__header"},"What people say",-1)),ze={class:"reviews__list-wrapper"},je={class:"reviews__list-container"},Ge={class:"reviews__item-container"},Ue={class:"reviews__item-text"},Xe={class:"reviews__item-author"},Je={class:"reviews__item-name"},Ye={class:"reviews__item-from"},Ze={__name:"reviews",props:{list:Array},setup(e){const s=d(null),a=d(null),{elementPositionY:i,elementHeight:o}=ce(s),{y:f}=re(),{height:_,width:p}=de(),{x:m}=ue(s),r=g(()=>i.value-_.value+o.value);g(()=>{const v=i.value+_.value-o.value;return v<o.value?o.value:v});const L=g(()=>i.value-r.value);return W(f,v=>{m.value=v-i.value+L.value}),W(p,()=>{a.value=s.value.scrollWidth-s.value.clientWidth}),R(()=>{a.value=s.value.scrollWidth-s.value.clientWidth}),(v,N)=>(n(),c("section",Pe,[F("",!0),Te,t("div",ze,[t("div",je,[t("ul",{ref_key:"listRef",ref:s,class:"reviews__list"},[(n(!0),c(O,null,V(e.list,($,A)=>(n(),c("li",{key:A,class:"reviews__item"},[t("div",Ge,[t("div",Ue,D($.text),1),t("div",Xe,[t("div",Je,D($.name),1),t("div",Ye,D($.from),1)])])]))),128))],512)])])]))}},Ke=b(Ze,[["__scopeId","data-v-7e9d8826"]]),Qe=e=>(C("data-v-7d0f2147"),e=e(),I(),e),es={class:"stack"},ss=Y('<div class="stack__container" data-v-7d0f2147><div class="stack__description" data-v-7d0f2147><div class="stack__title" data-v-7d0f2147>All is about numbers.</div><div class="stack__info" data-v-7d0f2147> My main focus is achieving the target values of key metrics to help business grow and attract satisfied customers. </div></div><div class="stack__description" data-v-7d0f2147><div class="stack__title" data-v-7d0f2147> All is about numbers. And people for sure. </div><div class="stack__info" data-v-7d0f2147> I do focus on creating an atmosphere and building a business process in design teams, making it possible for end users to get a perfect seamless experience. </div></div></div>',1),ts={class:"stack__skills"},as={class:"stack__sticky"},is=Qe(()=>t("div",{class:"stack__skills-title"},"Skills",-1)),os={class:"stack__skills-list"},ns={__name:"stack",setup(e){const s=["User research","Design thinking","Leadership","Figma","Midjourney/ChatGPT","Design systems","UX patterns","Adaptive design","Material 3","iOS 16","Autolayouts","Variants","Animated prototypes","HTML/CSS","CJM","GA/Amplitude","Information architechture","JIRA","Notion/Confulence","A/B testing","Edge scenarios"];return(a,i)=>(n(),c("section",es,[ss,t("div",ts,[t("div",as,[is,t("ul",os,[(n(),c(O,null,V(s,o=>t("li",{key:o,class:"stack__skills-item"},D(o),1)),64))])])])]))}},ls=b(ns,[["__scopeId","data-v-7d0f2147"]]),cs={},rs={class:"footer"};function ds(e,s){return n(),c("section",rs,"It’s time to plan, design, grow. Together.")}const us=b(cs,[["render",ds],["__scopeId","data-v-7492b9a7"]]),_s={class:"page"},ws={__name:"index",async setup(e){let s,a;const{data:{value:{body:i}}}=([s,a]=G(()=>z("works",()=>j("/works").findOne())),s=await s,a(),s),{data:{value:{body:o}}}=([s,a]=G(()=>z("reviews",()=>j("/reviews").findOne())),s=await s,a(),s);return(f,_)=>(n(),c("div",_s,[l(xe,{class:"section section--poster"}),l(se,{class:"section section--intro"}),l(S,{class:"section section--present"},{default:k(()=>[l(We)]),_:1}),l(S,{class:"section section--works"},{default:k(()=>[l(te,{list:x(i)},null,8,["list"])]),_:1}),l(S,{class:"section section--achieve"},{default:k(()=>[l(He)]),_:1}),l(S,{class:"section section--reviews"},{default:k(()=>[l(Ke,{list:x(o)},null,8,["list"])]),_:1}),l(S,{class:"section"},{default:k(()=>[l(ls)]),_:1}),l(S,{class:"section section--footer"},{default:k(()=>[l(us)]),_:1})]))}};export{ws as default};