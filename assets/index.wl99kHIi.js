import{_ as l,t as s,v as a,x as t,L as A,d as X,r as h,c as I,G as Z,o as U,M as g,N as D,O as S,P as L,Q as R,g as K,R as Q,A as k,C as $,D as x,y,S as H,z as o,i as O,T as P}from"./entry.CSa6dui8.js";const Y={},ee={class:"section"},te={class:"section__container"};function se(e,n){return s(),a("section",ee,[t("div",te,[A(e.$slots,"default")])])}const b=l(Y,[["render",se]]),ae=""+new URL("bg_art_portrait.CSISjNhg.png",import.meta.url).href,oe=""+new URL("bg_art_portrait_2x.CR6oz9wm.png",import.meta.url).href,ne=""+new URL("bg_landscape.D9eSPbfw.png",import.meta.url).href,ie=""+new URL("bg_landscape_2x.B0oO7wVA.png",import.meta.url).href,ce=""+new URL("bg_art_mobile.DKN9LXG8.png",import.meta.url).href,re=X({__name:"Marquee",props:{style:{default:()=>()=>({})},class:{default:""},autoFill:{type:Boolean,default:!1},play:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},direction:{default:"left"},speed:{default:50},delay:{default:0},loop:{default:0},gradient:{type:Boolean,default:!1},gradientColor:{default:"white"},gradientWidth:{default:200}},emits:["finish","cycleComplete"],setup(e,{emit:n}){const i=n,c=h(),r=h(),v=h(0),f=h(0),_=h(1),d=h(!1),p=h(),V=I(()=>e.autoFill?f.value*_.value/e.speed:f<v?v.value/e.speed:f.value/e.speed),B=I(()=>({...e.style,"--pause-on-hover":!e.play||e.pauseOnHover?"paused":"running","--pause-on-click":!e.play||e.pauseOnHover&&!e.pauseOnClick||e.pauseOnClick?"paused":"running","--width":e.direction==="up"||e.direction==="down"?"100vh":"100%","--transform":e.direction==="up"?"rotate(-90deg)":e.direction==="down"?"rotate(90deg)":"none"})),M=I(()=>({"--gradient-color":e.gradientColor,"--gradient-width":typeof e.gradientWidth=="number"?`${e.gradientWidth}px`:e.gradientWidth})),W=I(()=>({"--play":e.play?"running":"paused","--direction":e.direction==="left"?"normal":"reverse","--duration":`${V.value}s`,"--delay":`${e.delay}s`,"--iteration-count":e.loop?`${e.loop}`:"infinite","--min-width":e.autoFill?"auto":"100%"})),F=I(()=>({"--transform":e.direction==="up"?"rotate(90deg)":e.direction==="down"?"rotate(-90deg)":"none"})),G=()=>{if(r.value&&c.value){const u=c.value.getBoundingClientRect(),w=r.value.getBoundingClientRect();let m=u.width,C=w.width;(e.direction==="up"||e.direction==="down")&&(m=u.height,C=w.height),e.autoFill&&m&&C?_.value=C<m?Math.ceil(m/C):1:_.value=1,v.value=m,f.value=C}},q=u=>[...Array(Number.isFinite(u)&&u>=0?u:0)];return Z([()=>e.autoFill,()=>e.direction,d,c],()=>{d.value&&(G(),r.value&&c.value&&(p.value&&p.value.disconnect(),p.value=new ResizeObserver(()=>G()),p.value.observe(c.value),p.value.observe(r.value)))}),U(()=>{d.value=!0}),(u,w)=>d.value?(s(),a("div",{key:0,ref_key:"containerRef",ref:c,class:R(["vfm-marquee-container",e.class]),style:g(B.value)},[u.gradient?(s(),a("div",{key:0,style:g(M.value),class:"vfm-overlay"},null,4)):D("",!0),t("div",{class:"vfm-marquee",style:g(W.value),onAnimationiteration:w[0]||(w[0]=m=>i("cycleComplete")),onAnimationend:w[1]||(w[1]=m=>i("finish"))},[t("div",{style:g(F.value),class:"vfm-parent",ref_key:"marqueeRef",ref:r},[A(u.$slots,"default")],4),(s(!0),a(S,null,L(q(_.value-1),m=>(s(),a("div",{style:g(F.value),class:"vfm-parent"},[A(u.$slots,"default")],4))),256))],36),t("div",{class:"vfm-marquee",style:g(W.value)},[(s(!0),a(S,null,L(q(_.value),m=>(s(),a("div",{style:g(F.value),class:"vfm-parent"},[A(u.$slots,"default")],4))),256))],4)],6)):D("",!0)}}),le={name:"NuxtMarquee",emits:["finish","cycleComplete"],props:["style","class","autoFill","play","pauseOnHover","pauseOnClick","direction","speed","delay","loop","gradient","gradientColor","gradientWidth"],setup(e,{slots:n,emit:i}){return()=>K(re,{...e,onCycleComplete:()=>i("cycleComplete"),onFinish:()=>i("finish")},n)}},de=le,_e={},ue=e=>($("data-v-fdb4ccf9"),e=e(),x(),e),ve=ue(()=>t("span",{"data-text":"plan, design, grow",class:"glitch"}," plan, design, grow,  ",-1));function pe(e,n){const i=de;return s(),Q(i,{"auto-fill":"",class:"marquee"},{default:k(()=>[ve]),_:1})}const he=l(_e,[["render",pe],["__scopeId","data-v-fdb4ccf9"]]),fe=window.setInterval,E=8,me={__name:"link",props:{text:{type:String,default:""}},setup(e){const n=h(),i=h("initial"),c=h(!1),r=v=>{if(c.value)return;const f="abcdefghijklmnopqrstuvwxyz";let _=null,d=0;clearInterval(_);const p=v.target.innerText;_=fe(()=>{c.value=!0,v.target.innerText=v.target.innerText.split("").map((V,B)=>{if(B<d)return p[B];const M=p+f;return M[Math.floor(Math.random()*M.length)]}).join(""),(d>=p.length||d>=E)&&(clearInterval(_),c.value=!1,d>=E&&(v.target.innerText=p)),d+=1/3},32)};return U(()=>{i.value=n.value.offsetWidth+"px"}),(v,f)=>(s(),a("span",{ref_key:"content",ref:n,class:"link",style:g({"min-width":H(i),"max-width":H(i)}),onMouseover:r},y(e.text),37))}},N=l(me,[["__scopeId","data-v-e9576746"]]),ge={__name:"nav",props:{isBlack:Boolean,isFloat:Boolean},setup(e){return(n,i)=>(s(),a("ul",{class:R(["nav",{"nav--black":e.isBlack,"nav--float":e.isFloat}])},[t("li",null,[o(N,{text:"works"})]),t("li",null,[o(N,{text:"get cv"})])],2))}},z=l(ge,[["__scopeId","data-v-b9946ec3"]]),we={__name:"contacts",props:{isBlack:Boolean,isFloat:Boolean},setup(e){return(n,i)=>(s(),a("ul",{class:R(["contacts",{"contacts--black":e.isBlack,"contacts--float":e.isFloat}])},[t("li",null,[o(N,{text:"hello.geovo@gmail.com"})]),t("li",null,[o(N,{text:"telegram"})])],2))}},j=l(we,[["__scopeId","data-v-7792502a"]]),J=e=>($("data-v-1ad80304"),e=e(),x(),e),ke=ae+", "+oe,ye=ne+", "+ie,$e={class:"poster"},xe=J(()=>t("div",{class:"logo-white"},null,-1)),be=J(()=>t("picture",null,[t("source",{media:"(orientation: portrait)",srcset:ke}),t("source",{media:"(orientation: landscape)",srcset:ye}),t("img",{src:ce,alt:"",class:"george-pic"})],-1)),Ce={__name:"poster",setup(e){return(n,i)=>(s(),a("section",$e,[xe,o(z),o(j),be,o(he)]))}},Ie=l(Ce,[["__scopeId","data-v-1ad80304"]]),Se=t("path",{d:"M16.5201 31.7581H25.2246L32.4286 38.8367L39.6708 31.7823H65.2075L32.4191 64L0 32.1452L32.7146 0V8.55299L8.7045 32.1452L32.4191 55.447L50.348 37.8302H42.2046L32.4097 47.3711L16.5201 31.7581Z",fill:"none"},null,-1),Le=[Se],Be={__name:"logo",props:{isBlack:Boolean},setup(e){return(n,i)=>(s(),a("svg",{width:"66",height:"64",viewBox:"0 0 66 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:R(["logo",{"logo--black":e.isBlack}])},Le,2))}},Me=Be,Ae={components:{Logo:Me,Contacts:j,NavMenu:z}},Ne=e=>($("data-v-10f38869"),e=e(),x(),e),Re={class:"intro"},Fe=Ne(()=>t("div",{class:"intro__slogan"},"plan, design, grow",-1));function Oe(e,n,i,c,r,v){const f=O("Contacts"),_=O("NavMenu"),d=O("logo");return s(),a("section",Re,[o(f,{"is-black":"","is-float":""}),o(_,{"is-black":"","is-float":""}),o(d,{"is-black":"",class:"intro__logo"}),Fe])}const Te=l(Ae,[["render",Oe],["__scopeId","data-v-10f38869"]]),Ve={},T=e=>($("data-v-6c84284a"),e=e(),x(),e),We={class:"present"},Ge=T(()=>t("div",{class:"present__specialist"}," My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights. ",-1)),qe=T(()=>t("div",{class:"present__line"},null,-1)),De=T(()=>t("div",{class:"present__stack"}," Proficient in leadership, UX/UI, design systems. Based in Tbilisi, Georgia. In spare time I make music, experiment with AI and travel. ",-1)),He=[Ge,qe,De];function Ee(e,n){return s(),a("div",We,He)}const Ue=l(Ve,[["render",Ee],["__scopeId","data-v-6c84284a"]]),Pe=e=>($("data-v-4bfa138a"),e=e(),x(),e),ze={class:"works"},je=Pe(()=>t("div",{class:"works__header"},"Works",-1)),Je={class:"works__list"},Xe={class:"works__item-container"},Ze={class:"works__item-header"},Ke={class:"works__item-text"},Qe={__name:"works",props:{list:{type:Array,default:()=>[]}},setup(e){return(n,i)=>(s(),a("section",ze,[je,t("ul",Je,[(s(!0),a(S,null,L(e.list,(c,r)=>(s(),a("li",{key:r,class:"works__item"},[t("div",Xe,[t("div",Ze,y(c.header),1),t("div",Ke,y(c.text),1)])]))),128))])]))}},Ye=l(Qe,[["__scopeId","data-v-4bfa138a"]]),et={},tt={class:"achieves"},st=P('<div class="achieves__chart" data-v-1119708a><svg class="achieves__chart-bg" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1119708a><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-1119708a></path></svg><svg class="achieves__chart-bg achieves__chart-bg--flip" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-1119708a><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-1119708a></path></svg></div><div class="achieves__value" data-v-1119708a>32.6M</div><div class="achieves__message" data-v-1119708a> people interact with my <br class="achieves__message-break" data-v-1119708a>solutions<br class="achieves__message-break--desktop" data-v-1119708a>monthly in over <br class="achieves__message-break" data-v-1119708a> 30 countries. </div>',3),at=[st];function ot(e,n){return s(),a("section",tt,at)}const nt=l(et,[["render",ot],["__scopeId","data-v-1119708a"]]),it=e=>($("data-v-a8eeff27"),e=e(),x(),e),ct={class:"reviews"},rt=it(()=>t("div",{class:"reviews__header"},"What people say",-1)),lt={class:"reviews__list"},dt={class:"reviews__item-container"},_t={class:"reviews__item-text"},ut={class:"reviews__item-author"},vt={class:"reviews__item-name"},pt={class:"reviews__item-from"},ht={__name:"reviews",props:{list:{type:Array,default:()=>[]}},setup(e){return(n,i)=>(s(),a("section",ct,[rt,t("ul",lt,[(s(!0),a(S,null,L(e.list,(c,r)=>(s(),a("li",{key:r,class:"reviews__item"},[t("div",dt,[t("div",_t,y(c.text),1),t("div",ut,[t("div",vt,y(c.name),1),t("div",pt,y(c.from),1)])])]))),128))])]))}},ft=l(ht,[["__scopeId","data-v-a8eeff27"]]),mt=e=>($("data-v-a55a7afd"),e=e(),x(),e),gt={class:"stack"},wt=P('<div class="stack__container" data-v-a55a7afd><div class="stack__description" data-v-a55a7afd><div class="stack__title" data-v-a55a7afd>All is about numbers.</div><div class="stack__info" data-v-a55a7afd> My main focus is achieving the target values of key metrics to help business grow and attract satisfied customers. </div></div><div class="stack__description" data-v-a55a7afd><div class="stack__title" data-v-a55a7afd> All is about numbers. And people for sure. </div><div class="stack__info" data-v-a55a7afd> I do focus on creating an atmosphere and building a business process in design teams, making it possible for end users to get a perfect seamless experience. </div></div></div>',1),kt={class:"stack__skills"},yt={class:"stack__sticky"},$t=mt(()=>t("div",{class:"stack__skills-title"},"Skills",-1)),xt={class:"stack__skills-list"},bt={__name:"stack",setup(e){const n=["User research","Design thinking","Leadership","Figma","Midjourney/ChatGPT","Design systems","UX patterns","Adaptive design","Material 3","iOS 16","Autolayouts","Variants","Animated prototypes","HTML/CSS","CJM","GA/Amplitude","Information architechture","JIRA","Notion/Confulence","A/B testing","Edge scenarios"];return(i,c)=>(s(),a("section",gt,[wt,t("div",kt,[t("div",yt,[$t,t("ul",xt,[(s(),a(S,null,L(n,r=>t("li",{key:r,class:"stack__skills-item"},y(r),1)),64))])])])]))}},Ct=l(bt,[["__scopeId","data-v-a55a7afd"]]),It={},St={class:"footer"};function Lt(e,n){return s(),a("section",St,"It’s time to plan, design, grow. Together.")}const Bt=l(It,[["render",Lt],["__scopeId","data-v-7492b9a7"]]),Mt={class:"home-page"},Nt={__name:"index",setup(e){const n=[{text:"We’ve got a really amazing design system.",name:"Nick Boes",from:"Head of design at Athletic Greens"},{text:"We have reached a new level in how quickly we can launch new products.",name:"Igor Lukyanov",from:"Managing partner at AdGuard"},{text:"One of the best designers I’ve ever worked with.",name:"Mohammed Gafarov",from:"CEO at Celestial Group"},{text:"Just a brilliant work.",name:"Kirill Maimistov",from:"CTO at Medaboutme"}],i=[{header:"Athletic Greens",text:"Original Foundational Nutrition drink to provide daily support where the body needs it most"},{header:"Futurebox",text:"Sell real estate under construction using AR/VR technologies"},{header:"AdGuard DNS",text:"DNS service to help people protect all web traffic on their devices from malicious content"},{header:"Exynex",text:"Discover what services track your data online"},{header:"Superseed",text:"Advanced cloud storage for geeks & gamers"},{header:"VCards",text:"Mobile wallet for managing your virtual cards"}];return(c,r)=>(s(),a("div",Mt,[o(Ie,{class:"section section__poster"}),o(Te,{class:"section section__intro"}),o(b,{class:"section section__present"},{default:k(()=>[o(Ue)]),_:1}),o(b,{class:"section"},{default:k(()=>[o(Ye,{list:i})]),_:1}),o(b,{class:"section"},{default:k(()=>[o(nt)]),_:1}),o(b,{class:"section"},{default:k(()=>[o(ft,{list:n})]),_:1}),o(b,{class:"section"},{default:k(()=>[o(Ct)]),_:1}),o(b,{class:"section section__footer"},{default:k(()=>[o(Bt)]),_:1})]))}};export{Nt as default};
