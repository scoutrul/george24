import{_ as x,t as i,v as l,x as o,L as D,d as oe,r as c,c as O,G as H,o as z,M as B,N as P,O as F,P as N,Q as G,g as ne,R as J,A,C as E,D as T,S as ie,T as ce,U as $,y as W,z as u,B as le,V as Z}from"./entry.DrmuGOfr.js";const re={},de={class:"section"},ue={class:"section__container"};function _e(e,t){return i(),l("section",de,[o("div",ue,[D(e.$slots,"default")])])}const R=x(re,[["render",_e]]),pe=""+new URL("bg_art_portrait.CSISjNhg.png",import.meta.url).href,ve=""+new URL("bg_art_portrait_2x.CR6oz9wm.png",import.meta.url).href,fe=""+new URL("bg_landscape.D9eSPbfw.png",import.meta.url).href,he=""+new URL("bg_landscape_2x.B0oO7wVA.png",import.meta.url).href,me=""+new URL("bg_art_mobile.DKN9LXG8.png",import.meta.url).href,ge=oe({__name:"Marquee",props:{style:{default:()=>()=>({})},class:{default:""},autoFill:{type:Boolean,default:!1},play:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},direction:{default:"left"},speed:{default:50},delay:{default:0},loop:{default:0},gradient:{type:Boolean,default:!1},gradientColor:{default:"white"},gradientWidth:{default:200}},emits:["finish","cycleComplete"],setup(e,{emit:t}){const a=t,s=c(),n=c(),r=c(0),h=c(0),m=c(1),_=c(!1),p=c(),v=O(()=>e.autoFill?h.value*m.value/e.speed:h<r?r.value/e.speed:h.value/e.speed),f=O(()=>({...e.style,"--pause-on-hover":!e.play||e.pauseOnHover?"paused":"running","--pause-on-click":!e.play||e.pauseOnHover&&!e.pauseOnClick||e.pauseOnClick?"paused":"running","--width":e.direction==="up"||e.direction==="down"?"100vh":"100%","--transform":e.direction==="up"?"rotate(-90deg)":e.direction==="down"?"rotate(90deg)":"none"})),y=O(()=>({"--gradient-color":e.gradientColor,"--gradient-width":typeof e.gradientWidth=="number"?`${e.gradientWidth}px`:e.gradientWidth})),g=O(()=>({"--play":e.play?"running":"paused","--direction":e.direction==="left"?"normal":"reverse","--duration":`${v.value}s`,"--delay":`${e.delay}s`,"--iteration-count":e.loop?`${e.loop}`:"infinite","--min-width":e.autoFill?"auto":"100%"})),k=O(()=>({"--transform":e.direction==="up"?"rotate(90deg)":e.direction==="down"?"rotate(-90deg)":"none"})),I=()=>{if(n.value&&s.value){const w=s.value.getBoundingClientRect(),S=n.value.getBoundingClientRect();let b=w.width,C=S.width;(e.direction==="up"||e.direction==="down")&&(b=w.height,C=S.height),e.autoFill&&b&&C?m.value=C<b?Math.ceil(b/C):1:m.value=1,r.value=b,h.value=C}},M=w=>[...Array(Number.isFinite(w)&&w>=0?w:0)];return H([()=>e.autoFill,()=>e.direction,_,s],()=>{_.value&&(I(),n.value&&s.value&&(p.value&&p.value.disconnect(),p.value=new ResizeObserver(()=>I()),p.value.observe(s.value),p.value.observe(n.value)))}),z(()=>{_.value=!0}),(w,S)=>_.value?(i(),l("div",{key:0,ref_key:"containerRef",ref:s,class:G(["vfm-marquee-container",e.class]),style:B(f.value)},[w.gradient?(i(),l("div",{key:0,style:B(y.value),class:"vfm-overlay"},null,4)):P("",!0),o("div",{class:"vfm-marquee",style:B(g.value),onAnimationiteration:S[0]||(S[0]=b=>a("cycleComplete")),onAnimationend:S[1]||(S[1]=b=>a("finish"))},[o("div",{style:B(k.value),class:"vfm-parent",ref_key:"marqueeRef",ref:n},[D(w.$slots,"default")],4),(i(!0),l(F,null,N(M(m.value-1),b=>(i(),l("div",{style:B(k.value),class:"vfm-parent"},[D(w.$slots,"default")],4))),256))],36),o("div",{class:"vfm-marquee",style:B(g.value)},[(i(!0),l(F,null,N(M(m.value),b=>(i(),l("div",{style:B(k.value),class:"vfm-parent"},[D(w.$slots,"default")],4))),256))],4)],6)):P("",!0)}}),we={name:"NuxtMarquee",emits:["finish","cycleComplete"],props:["style","class","autoFill","play","pauseOnHover","pauseOnClick","direction","speed","delay","loop","gradient","gradientColor","gradientWidth"],setup(e,{slots:t,emit:a}){return()=>ne(ge,{...e,onCycleComplete:()=>a("cycleComplete"),onFinish:()=>a("finish")},t)}},ye=we,ke={},xe=e=>(E("data-v-fdb4ccf9"),e=e(),T(),e),be=xe(()=>o("span",{"data-text":"plan, design, grow",class:"glitch"}," plan, design, grow,  ",-1));function $e(e,t){const a=ye;return i(),J(a,{"auto-fill":"",class:"marquee"},{default:A(()=>[be]),_:1})}const Se=x(ke,[["render",$e],["__scopeId","data-v-fdb4ccf9"]]);function Ce(e){return ie()?(ce(e),!0):!1}function K(e){return typeof e=="function"?e():$(e)}const Ie=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Le=Object.prototype.toString,Be=e=>Le.call(e)==="[object Object]",Me=()=>{};function Q(e){var t;const a=K(e);return(t=a==null?void 0:a.$el)!=null?t:a}const Y=Ie?window:void 0;function V(...e){let t,a,s,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,s,n]=e,t=Y):[t,a,s,n]=e,!t)return Me;Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]);const r=[],h=()=>{r.forEach(v=>v()),r.length=0},m=(v,f,y,g)=>(v.addEventListener(f,y,g),()=>v.removeEventListener(f,y,g)),_=H(()=>[Q(t),K(n)],([v,f])=>{if(h(),!v)return;const y=Be(f)?{...f}:f;r.push(...a.flatMap(g=>s.map(k=>m(v,g,k,y))))},{immediate:!0,flush:"post"}),p=()=>{_(),h()};return Ce(p),p}const Ae={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Oe(e={}){const{type:t="page",touch:a=!0,resetOnTouchEnds:s=!1,initialValue:n={x:0,y:0},window:r=Y,target:h=r,scroll:m=!0,eventFilter:_}=e;let p=null;const v=c(n.x),f=c(n.y),y=c(null),g=typeof t=="function"?t:Ae[t],k=d=>{const L=g(d);p=d,L&&([v.value,f.value]=L,y.value="mouse")},I=d=>{if(d.touches.length>0){const L=g(d.touches[0]);L&&([v.value,f.value]=L,y.value="touch")}},M=()=>{if(!p||!r)return;const d=g(p);p instanceof MouseEvent&&d&&(v.value=d[0]+r.scrollX,f.value=d[1]+r.scrollY)},w=()=>{v.value=n.x,f.value=n.y},S=_?d=>_(()=>k(d),{}):d=>k(d),b=_?d=>_(()=>I(d),{}):d=>I(d),C=_?()=>_(()=>M(),{}):()=>M();if(h){const d={passive:!0};V(h,["mousemove","dragover"],S,d),a&&t!=="movement"&&(V(h,["touchstart","touchmove"],b,d),s&&V(h,"touchend",w,d)),m&&t==="page"&&V(r,"scroll",C,{passive:!0})}return{x:v,y:f,sourceType:y}}function We(e,t={}){const{handleOutside:a=!0,window:s=Y}=t,n=t.type||"page",{x:r,y:h,sourceType:m}=Oe(t),_=c(e??(s==null?void 0:s.document.body)),p=c(0),v=c(0),f=c(0),y=c(0),g=c(0),k=c(0),I=c(!0);let M=()=>{};return s&&(M=H([_,r,h],()=>{const w=Q(_);if(!w)return;const{left:S,top:b,width:C,height:d}=w.getBoundingClientRect();f.value=S+(n==="page"?s.pageXOffset:0),y.value=b+(n==="page"?s.pageYOffset:0),g.value=d,k.value=C;const L=r.value-f.value,q=h.value-y.value;I.value=C===0||d===0||L<0||q<0||L>C||q>d,(a||!I.value)&&(p.value=L,v.value=q)},{immediate:!0}),V(document,"mouseleave",()=>{I.value=!0})),{x:r,y:h,sourceType:m,elementX:p,elementY:v,elementPositionX:f,elementPositionY:y,elementHeight:g,elementWidth:k,isOutside:I,stop:M}}function ee(e={}){const{window:t=Y,behavior:a="auto"}=e;if(!t)return{x:c(0),y:c(0)};const s=c(t.scrollX),n=c(t.scrollY),r=O({get(){return s.value},set(m){scrollTo({left:m,behavior:a})}}),h=O({get(){return n.value},set(m){scrollTo({top:m,behavior:a})}});return V(t,"scroll",()=>{s.value=t.scrollX,n.value=t.scrollY},{capture:!1,passive:!0}),{x:r,y:h}}const Ee=window.setInterval,j=8,Te={__name:"link",props:{text:{type:String,default:"",required:!0},preStart:{type:Boolean,default:!1}},setup(e){const t=e,a=c(),s=c(t.text),n=c("initial"),r=c(!1),h=c(!1),m=()=>{if(t.preStart&&h.value||r.value)return;const _="abcdefghijklmnopqrstuvwxyz";let p=null,v=0;clearInterval(p);const f=t.text;p=Ee(()=>{r.value=!0,s.value=f.split("").map((y,g)=>{if(g<v)return f[g];const k=f+_;return k[Math.floor(Math.random()*k.length)]}).join(""),(v>=f.length||v>=j)&&(clearInterval(p),v>=j&&(s.value=f),r.value=!1,h.value=!0),v+=1/3},32)};return z(()=>{n.value=a.value.offsetWidth+"px",t.preStart&&m()}),(_,p)=>(i(),l("span",{ref_key:"element",ref:a,class:"link",style:B({"min-width":$(n),"max-width":$(n)}),onMouseover:m},W($(s)),37))}},X=x(Te,[["__scopeId","data-v-9025fa90"]]),Re={href:"./CV-George-Vorobyov.pdf",target:"_blank"},Ve={__name:"nav",props:{isBlack:Boolean,isFloat:Boolean},setup(e){const{y:t}=ee({behavior:"smooth"}),a=()=>{if(!(window!=null&&window.document))return;const s=window.document.getElementsByClassName("section__works")[0];t.value=s.offsetTop};return(s,n)=>(i(),l("ul",{class:G(["nav",{"nav--black":e.isBlack,"nav--float":e.isFloat}])},[o("li",null,[u(X,{text:"works",onClick:a})]),o("li",null,[o("a",Re,[u(X,{text:"get cv"})])])],2))}},te=x(Ve,[["__scopeId","data-v-e51a4fb3"]]),Fe={href:"mailto:hello.geovo@gmail.com"},He={href:"https://t.me/meisdigital",target:"_blank"},Ne={__name:"contacts",props:{isBlack:Boolean,isFloat:Boolean},setup(e){return(t,a)=>(i(),l("ul",{class:G(["contacts",{"contacts--black":e.isBlack,"contacts--float":e.isFloat}])},[o("li",null,[o("a",Fe,[u(X,{text:"hello.geovo@gmail.com"})])]),o("li",null,[o("a",He,[u(X,{text:"telegram"})])])],2))}},se=x(Ne,[["__scopeId","data-v-886d73c2"]]),ae=e=>(E("data-v-1ad80304"),e=e(),T(),e),Xe=pe+", "+ve,Ge=fe+", "+he,De={class:"poster"},Ye=ae(()=>o("div",{class:"logo-white"},null,-1)),qe=ae(()=>o("picture",null,[o("source",{media:"(orientation: portrait)",srcset:Xe}),o("source",{media:"(orientation: landscape)",srcset:Ge}),o("img",{src:me,alt:"",class:"george-pic"})],-1)),Pe={__name:"poster",setup(e){return(t,a)=>(i(),l("section",De,[Ye,u(te),u(se),qe,u(Se)]))}},Ue=x(Pe,[["__scopeId","data-v-1ad80304"]]),je=o("path",{d:"M16.5201 31.7581H25.2246L32.4286 38.8367L39.6708 31.7823H65.2075L32.4191 64L0 32.1452L32.7146 0V8.55299L8.7045 32.1452L32.4191 55.447L50.348 37.8302H42.2046L32.4097 47.3711L16.5201 31.7581Z",fill:"none"},null,-1),ze=[je],Je={__name:"logo",props:{isBlack:Boolean},setup(e){return(t,a)=>(i(),l("svg",{width:"66",height:"64",viewBox:"0 0 66 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:G(["logo",{"logo--black":e.isBlack}])},ze,2))}},Ze=Je,Ke=e=>(E("data-v-7da259fd"),e=e(),T(),e),Qe={class:"intro"},et=Ke(()=>o("div",{class:"intro__slogan"},"plan, design, grow",-1)),tt={__name:"intro",setup(e){const{y:t}=ee({behavior:"smooth"}),a=()=>{t.value=0};return(s,n)=>(i(),l("section",Qe,[u(se,{"is-black":"","is-float":""}),u(te,{"is-black":"","is-float":""}),u(Ze,{"is-black":"",class:"intro__logo",onClick:a}),et]))}},st=x(tt,[["__scopeId","data-v-7da259fd"]]),at={},U=e=>(E("data-v-6c84284a"),e=e(),T(),e),ot={class:"present"},nt=U(()=>o("div",{class:"present__specialist"}," My name is George, and for 10 years now I have been making a user-centered and data-driven design that helped tens of industry leaders and startups to reach new heights. ",-1)),it=U(()=>o("div",{class:"present__line"},null,-1)),ct=U(()=>o("div",{class:"present__stack"}," Proficient in leadership, UX/UI, design systems. Based in Tbilisi, Georgia. In spare time I make music, experiment with AI and travel. ",-1)),lt=[nt,it,ct];function rt(e,t){return i(),l("div",ot,lt)}const dt=x(at,[["render",rt],["__scopeId","data-v-6c84284a"]]),ut={class:"work__header"},_t={class:"work__text"},pt={__name:"work",props:{text:{type:String,default:""},header:{type:String,default:""}},setup(e){const t=c(!1),a=c(),{elementX:s,elementY:n,isOutside:r,sourceType:h,elementWidth:m}=We(a);return H(r,_=>{t.value=!_}),H(h,(_,p)=>{p==="touch"&&_==="mouse"&&(t.value=!1)}),(_,p)=>(i(),l("div",{ref_key:"itemElement",ref:a,class:G(["work__container",{"work__container--hover":$(t)}])},[o("div",ut,[$(t)?(i(),J(X,{key:1,text:e.header,"pre-start":""},null,8,["text"])):(i(),l(F,{key:0},[le(W(e.header),1)],64))]),o("div",_t,W(e.text),1),$(t)?(i(),l("div",{key:0,class:"work__pop",style:B({left:$(s)>$(m)-200?$(s)-200+"px":$(s)+"px",top:$(n)+"px"})},null,4)):P("",!0)],2))}},vt=x(pt,[["__scopeId","data-v-85178a36"]]),ft=e=>(E("data-v-4ffc739b"),e=e(),T(),e),ht={class:"works"},mt=ft(()=>o("div",{class:"works__header"},"Works",-1)),gt={class:"works__list"},wt={__name:"works",props:{list:{type:Array,default:()=>[]}},setup(e){return(t,a)=>(i(),l("div",ht,[mt,o("ul",gt,[(i(!0),l(F,null,N(e.list,(s,n)=>(i(),l("li",{key:n,class:"works__item"},[u(vt,{header:s.header,text:s.text},null,8,["header","text"])]))),128))])]))}},yt=x(wt,[["__scopeId","data-v-4ffc739b"]]),kt={},xt={class:"achieves"},bt=Z('<div class="achieves__chart" data-v-be246493><svg class="achieves__chart-bg" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-be246493><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-be246493></path></svg><svg class="achieves__chart-bg achieves__chart-bg--flip" viewBox="0 0 1920 390" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-be246493><path d="M387.703 371.503L-2 388.215V389.5H1920V0L1528.3 65.8808L1147.6 225.601L768.401 268.986L387.703 371.503Z" fill="#CED0C8" data-v-be246493></path></svg></div><div class="achieves__value" data-v-be246493>32.6M</div><div class="achieves__message" data-v-be246493> people interact with my solutions<br data-v-be246493> monthly in over 30 countries. </div>',3),$t=[bt];function St(e,t){return i(),l("section",xt,$t)}const Ct=x(kt,[["render",St],["__scopeId","data-v-be246493"]]),It=e=>(E("data-v-a8eeff27"),e=e(),T(),e),Lt={class:"reviews"},Bt=It(()=>o("div",{class:"reviews__header"},"What people say",-1)),Mt={class:"reviews__list"},At={class:"reviews__item-container"},Ot={class:"reviews__item-text"},Wt={class:"reviews__item-author"},Et={class:"reviews__item-name"},Tt={class:"reviews__item-from"},Rt={__name:"reviews",props:{list:{type:Array,default:()=>[]}},setup(e){return(t,a)=>(i(),l("section",Lt,[Bt,o("ul",Mt,[(i(!0),l(F,null,N(e.list,(s,n)=>(i(),l("li",{key:n,class:"reviews__item"},[o("div",At,[o("div",Ot,W(s.text),1),o("div",Wt,[o("div",Et,W(s.name),1),o("div",Tt,W(s.from),1)])])]))),128))])]))}},Vt=x(Rt,[["__scopeId","data-v-a8eeff27"]]),Ft=e=>(E("data-v-7d0f2147"),e=e(),T(),e),Ht={class:"stack"},Nt=Z('<div class="stack__container" data-v-7d0f2147><div class="stack__description" data-v-7d0f2147><div class="stack__title" data-v-7d0f2147>All is about numbers.</div><div class="stack__info" data-v-7d0f2147> My main focus is achieving the target values of key metrics to help business grow and attract satisfied customers. </div></div><div class="stack__description" data-v-7d0f2147><div class="stack__title" data-v-7d0f2147> All is about numbers. And people for sure. </div><div class="stack__info" data-v-7d0f2147> I do focus on creating an atmosphere and building a business process in design teams, making it possible for end users to get a perfect seamless experience. </div></div></div>',1),Xt={class:"stack__skills"},Gt={class:"stack__sticky"},Dt=Ft(()=>o("div",{class:"stack__skills-title"},"Skills",-1)),Yt={class:"stack__skills-list"},qt={__name:"stack",setup(e){const t=["User research","Design thinking","Leadership","Figma","Midjourney/ChatGPT","Design systems","UX patterns","Adaptive design","Material 3","iOS 16","Autolayouts","Variants","Animated prototypes","HTML/CSS","CJM","GA/Amplitude","Information architechture","JIRA","Notion/Confulence","A/B testing","Edge scenarios"];return(a,s)=>(i(),l("section",Ht,[Nt,o("div",Xt,[o("div",Gt,[Dt,o("ul",Yt,[(i(),l(F,null,N(t,n=>o("li",{key:n,class:"stack__skills-item"},W(n),1)),64))])])])]))}},Pt=x(qt,[["__scopeId","data-v-7d0f2147"]]),Ut={},jt={class:"footer"};function zt(e,t){return i(),l("section",jt,"It’s time to plan, design, grow. Together.")}const Jt=x(Ut,[["render",zt],["__scopeId","data-v-7492b9a7"]]),Zt={class:"home-page"},Qt={__name:"index",setup(e){const t=[{text:"We’ve got a really amazing design system.",name:"Nick Boes",from:"Head of design at Athletic Greens"},{text:"We have reached a new level in how quickly we can launch new products.",name:"Igor Lukyanov",from:"Managing partner at AdGuard"},{text:"One of the best designers I’ve ever worked with.",name:"Mohammed Gafarov",from:"CEO at Celestial Group"},{text:"Just a brilliant work.",name:"Kirill Maimistov",from:"CTO at Medaboutme"}],a=[{header:"Athletic Greens",text:"Original Foundational Nutrition drink to provide daily support where the body needs it most"},{header:"Futurebox",text:"Sell real estate under construction using AR/VR technologies"},{header:"AdGuard DNS",text:"DNS service to help people protect all web traffic on their devices from malicious content"},{header:"Exynex",text:"Discover what services track your data online"},{header:"Superseed",text:"Advanced cloud storage for geeks & gamers"},{header:"VCards",text:"Mobile wallet for managing your virtual cards"}];return(s,n)=>(i(),l("div",Zt,[u(Ue,{class:"section section--poster"}),u(st,{class:"section section--intro"}),u(R,{class:"section section--present"},{default:A(()=>[u(dt)]),_:1}),u(R,{class:"section section--works"},{default:A(()=>[u(yt,{list:a})]),_:1}),u(R,{class:"section section--achieve"},{default:A(()=>[u(Ct)]),_:1}),u(R,{class:"section"},{default:A(()=>[u(Vt,{list:t})]),_:1}),u(R,{class:"section"},{default:A(()=>[u(Pt)]),_:1}),u(R,{class:"section section--footer"},{default:A(()=>[u(Jt)]),_:1})]))}};export{Qt as default};
