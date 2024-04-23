import{u as j,q as G}from"./Bl1vLgD-.js";import{a as K,C as Q,S as C,N as ee,W as se}from"./BVl82EAD.js";import{k as te,l as ae,m as r,f as y,n as F,q as E,o,c as l,s as b,h as B,a as t,v as O,F as D,r as V,x as N,y as ie,_ as S,z as X,w as $,p as I,e as L,A as oe,g as w,b as c,u as ne,d as R,B as J,t as W,j as U}from"./DTE_4Oz_.js";import{u as le,a as ce,b as Y,c as re,d as de,e as ue,f as _e}from"./CKSq7XaZ.js";import"./2-fNhpvm.js";import"./BBwyQFU-.js";const H=te,ve=ae({__name:"Marquee",props:{style:{default:()=>()=>({})},class:{default:""},autoFill:{type:Boolean,default:!1},play:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},direction:{default:"left"},speed:{default:50},delay:{default:0},loop:{default:0},gradient:{type:Boolean,default:!1},gradientColor:{default:"white"},gradientWidth:{default:200}},emits:["finish","cycleComplete"],setup(e,{emit:s}){const a=s,i=r(),n=r(),m=r(0),u=r(0),h=r(1),_=r(!1),v=r(),g=y(()=>e.autoFill?u.value*h.value/e.speed:u<m?m.value/e.speed:u.value/e.speed),p=y(()=>({...e.style,"--pause-on-hover":!e.play||e.pauseOnHover?"paused":"running","--pause-on-click":!e.play||e.pauseOnHover&&!e.pauseOnClick||e.pauseOnClick?"paused":"running","--width":e.direction==="up"||e.direction==="down"?"100vh":"100%","--transform":e.direction==="up"?"rotate(-90deg)":e.direction==="down"?"rotate(90deg)":"none"})),q=y(()=>({"--gradient-color":e.gradientColor,"--gradient-width":typeof e.gradientWidth=="number"?`${e.gradientWidth}px`:e.gradientWidth})),x=y(()=>({"--play":e.play?"running":"paused","--direction":e.direction==="left"?"normal":"reverse","--duration":`${g.value}s`,"--delay":`${e.delay}s`,"--iteration-count":e.loop?`${e.loop}`:"infinite","--min-width":e.autoFill?"auto":"100%"})),A=y(()=>({"--transform":e.direction==="up"?"rotate(90deg)":e.direction==="down"?"rotate(-90deg)":"none"})),T=()=>{if(n.value&&i.value){const d=i.value.getBoundingClientRect(),k=n.value.getBoundingClientRect();let f=d.width,M=k.width;(e.direction==="up"||e.direction==="down")&&(f=d.height,M=k.height),e.autoFill&&f&&M?h.value=M<f?Math.ceil(f/M):1:h.value=1,m.value=f,u.value=M}},z=d=>[...Array(Number.isFinite(d)&&d>=0?d:0)];return F([()=>e.autoFill,()=>e.direction,_,i],()=>{_.value&&(T(),n.value&&i.value&&(v.value&&v.value.disconnect(),v.value=new ResizeObserver(()=>T()),v.value.observe(i.value),v.value.observe(n.value)))}),E(()=>{_.value=!0}),(d,k)=>_.value?(o(),l("div",{key:0,ref_key:"containerRef",ref:i,class:N(["vfm-marquee-container",e.class]),style:b(p.value)},[d.gradient?(o(),l("div",{key:0,style:b(q.value),class:"vfm-overlay"},null,4)):B("",!0),t("div",{class:"vfm-marquee",style:b(x.value),onAnimationiteration:k[0]||(k[0]=f=>a("cycleComplete")),onAnimationend:k[1]||(k[1]=f=>a("finish"))},[t("div",{style:b(A.value),class:"vfm-parent",ref_key:"marqueeRef",ref:n},[O(d.$slots,"default")],4),(o(!0),l(D,null,V(z(h.value-1),f=>(o(),l("div",{style:b(A.value),class:"vfm-parent"},[O(d.$slots,"default")],4))),256))],36),t("div",{class:"vfm-marquee",style:b(x.value)},[(o(!0),l(D,null,V(z(h.value),f=>(o(),l("div",{style:b(A.value),class:"vfm-parent"},[O(d.$slots,"default")],4))),256))],4)],6)):B("",!0)}}),pe={name:"NuxtMarquee",emits:["finish","cycleComplete"],props:["style","class","autoFill","play","pauseOnHover","pauseOnClick","direction","speed","delay","loop","gradient","gradientColor","gradientWidth"],setup(e,{slots:s,emit:a}){return()=>ie(ve,{...e,onCycleComplete:()=>a("cycleComplete"),onFinish:()=>a("finish")},s)}},he=pe,fe={},me=e=>(I("data-v-fdb4ccf9"),e=e(),L(),e),ge=me(()=>t("span",{"data-text":"plan, design, grow",class:"glitch"}," plan, design, grow,  ",-1));function we(e,s){const a=he;return o(),X(a,{"auto-fill":"",class:"marquee"},{default:$(()=>[ge]),_:1})}const ye=S(fe,[["render",we],["__scopeId","data-v-fdb4ccf9"]]),Z=e=>(I("data-v-7306a400"),e=e(),L(),e),ke=Z(()=>t("path",{d:"M70 107L107 144L134.5 116.5H189.5L107 199L15 107L107 15",stroke:"#E3DED1","stroke-width":"20","stroke-linecap":"square"},null,-1)),be=[ke],$e=Z(()=>t("div",{class:"poster__logo-small"},null,-1)),Se=["src"],xe={__name:"poster",setup(e){const{app:{baseURL:s}}=ne(),a=r(`${s}bg_landscape@2x.webp`),i=r(null),{start:n,isPending:m}=le(()=>{document.body.style.overflow="initial"},1e4),{isLoading:u}=ce({src:a.value}),h=Y(i),_=r(null),v=r(0),g=r(!1);return oe(()=>{document.body.style.overflow="hidden",_.value=H({targets:".poster__logo path",strokeDashoffset:[H.setDashoffset,0],easing:"cubicBezier(0.83, 0, 0.17, 1)",duration:2e3,direction:"alternate",loop:!0,update:p=>{p.progress===100&&(v.value++,!u.value&&v.value===2&&(_.value.pause(),g.value=!0))}}),_.value.play()}),E(()=>{n()}),(p,q)=>(o(),l("section",{ref_key:"poster",ref:i,class:"poster"},[w(m)?(o(),l("section",{key:0,class:N(["poster poster--loading",{"poster--finish":w(g)}])},[(o(),l("svg",{class:N(["poster__logo",{glitchOpacity:w(g),glitch:!w(g)}]),xmlns:"http://www.w3.org/2000/svg",width:"214",height:"214",viewBox:"0 0 214 214",fill:"none"},be,2))],2)):B("",!0),$e,c(K),c(Q),t("img",{src:w(a),alt:"",class:"poster__poster"},null,8,Se),w(h)?(o(),X(ye,{key:1})):B("",!0)],512))}},Ce=S(xe,[["__scopeId","data-v-7306a400"]]),Ie={},P=e=>(I("data-v-a763780d"),e=e(),L(),e),Le={class:"present"},Ae=P(()=>t("div",{class:"present__specialist"}," My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of SaaS/IaaS products in Data security, E-commerce, Digital medicine, Fintech and AI to reach new heights. ",-1)),Me=P(()=>t("div",{class:"present__line"},null,-1)),Be=P(()=>t("div",{class:"present__stack"}," Proficient in user research, solving complex problems with a large amount of data, scenarios and edge cases, building consistent design systems with variables and tokens and delivering high-end design solutions with a juicy visual style across web and mobile platforms. ",-1)),We=[Ae,Me,Be];function Fe(e,s){return o(),l("div",Le,We)}const De=S(Ie,[["render",Fe],["__scopeId","data-v-a763780d"]]),Ve=e=>(I("data-v-3a81b102"),e=e(),L(),e),qe={class:"achieves"},Oe=J('<div class="achieves__chart" data-v-3a81b102><svg class="achieves__chart-bg" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a81b102><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-3a81b102></path></svg><svg class="achieves__chart-bg achieves__chart-bg--flip" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-3a81b102><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-3a81b102></path></svg></div>',1),Ne={class:"achieves__value"},Re=Ve(()=>t("div",{class:"achieves__message"},[R(" people interact with my solutions"),t("br"),R(" monthly in over 30 countries. ")],-1)),He={__name:"achieves",setup(e){const s=r(null),a=Y(s);return F(a,i=>{i&&H({targets:s.value,innerHTML:[0,32.6],easing:"cubicBezier(0,1,0,1)",round:10,duration:3e3,delay:500,direction:"normal"})}),(i,n)=>(o(),l("section",qe,[Oe,t("div",Ne,[t("span",{ref_key:"numbers",ref:s,class:"achieves__value-number"}," 0 ",512),R(" M ")]),Re]))}},Ee=S(He,[["__scopeId","data-v-3a81b102"]]),Pe=e=>(I("data-v-7e9d8826"),e=e(),L(),e),Te={class:"reviews"},ze=Pe(()=>t("div",{class:"reviews__header"},"What people say",-1)),je={class:"reviews__list-wrapper"},Ge={class:"reviews__list-container"},Ue={class:"reviews__item-container"},Xe={class:"reviews__item-text"},Je={class:"reviews__item-author"},Ye={class:"reviews__item-name"},Ze={class:"reviews__item-from"},Ke={__name:"reviews",props:{list:Array},setup(e){const s=r(null),a=r(null),{elementPositionY:i,elementHeight:n}=re(s),{y:m}=de(),{height:u,width:h}=ue(),{x:_}=_e(s),v=y(()=>i.value-u.value+n.value);y(()=>{const p=i.value+u.value-n.value;return p<n.value?n.value:p});const g=y(()=>i.value-v.value);return F(m,p=>{_.value=p-i.value+g.value}),F(h,()=>{a.value=s.value.scrollWidth-s.value.clientWidth}),E(()=>{a.value=s.value.scrollWidth-s.value.clientWidth}),(p,q)=>(o(),l("section",Te,[B("",!0),ze,t("div",je,[t("div",Ge,[t("ul",{ref_key:"listRef",ref:s,class:"reviews__list"},[(o(!0),l(D,null,V(e.list,(x,A)=>(o(),l("li",{key:A,class:"reviews__item"},[t("div",Ue,[t("div",Xe,W(x.text),1),t("div",Je,[t("div",Ye,W(x.name),1),t("div",Ze,W(x.from),1)])])]))),128))],512)])])]))}},Qe=S(Ke,[["__scopeId","data-v-7e9d8826"]]),es=e=>(I("data-v-7d0f2147"),e=e(),L(),e),ss={class:"stack"},ts=J('<div class="stack__container" data-v-7d0f2147><div class="stack__description" data-v-7d0f2147><div class="stack__title" data-v-7d0f2147>All is about numbers.</div><div class="stack__info" data-v-7d0f2147> My main focus is achieving the target values of key metrics to help business grow and attract satisfied customers. </div></div><div class="stack__description" data-v-7d0f2147><div class="stack__title" data-v-7d0f2147> All is about numbers. And people for sure. </div><div class="stack__info" data-v-7d0f2147> I do focus on creating an atmosphere and building a business process in design teams, making it possible for end users to get a perfect seamless experience. </div></div></div>',1),as={class:"stack__skills"},is={class:"stack__sticky"},os=es(()=>t("div",{class:"stack__skills-title"},"Skills",-1)),ns={class:"stack__skills-list"},ls={__name:"stack",setup(e){const s=["User research","Design thinking","Leadership","Figma","Midjourney/ChatGPT","Design systems","UX patterns","Adaptive design","Material 3","iOS 16","Autolayouts","Variants","Animated prototypes","HTML/CSS","CJM","GA/Amplitude","Information architechture","JIRA","Notion/Confulence","A/B testing","Edge scenarios"];return(a,i)=>(o(),l("section",ss,[ts,t("div",as,[t("div",is,[os,t("ul",ns,[(o(),l(D,null,V(s,n=>t("li",{key:n,class:"stack__skills-item"},W(n),1)),64))])])])]))}},cs=S(ls,[["__scopeId","data-v-7d0f2147"]]),rs={},ds={class:"footer"};function us(e,s){return o(),l("section",ds,"It’s time to plan, design, grow. Together.")}const _s=S(rs,[["render",us],["__scopeId","data-v-7492b9a7"]]),vs={class:"page"},ys={__name:"index",async setup(e){let s,a;const{data:{value:{body:i}}}=([s,a]=U(()=>j("works",()=>G("/works").findOne())),s=await s,a(),s),{data:{value:{body:n}}}=([s,a]=U(()=>j("reviews",()=>G("/reviews").findOne())),s=await s,a(),s);return(m,u)=>(o(),l("div",vs,[c(Ce,{class:"section section--poster"}),c(ee,{class:"section section--navigation"}),c(C,{class:"section section--present"},{default:$(()=>[c(De)]),_:1}),c(C,{class:"section section--works"},{default:$(()=>[c(se,{list:w(i)},null,8,["list"])]),_:1}),c(C,{class:"section section--achieve"},{default:$(()=>[c(Ee)]),_:1}),c(C,{class:"section section--reviews"},{default:$(()=>[c(Qe,{list:w(n)},null,8,["list"])]),_:1}),c(C,{class:"section"},{default:$(()=>[c(cs)]),_:1}),c(C,{class:"section section--footer"},{default:$(()=>[c(_s)]),_:1})]))}};export{ys as default};
