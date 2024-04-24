import{P as le,aj as Q,a4 as se,m as g,a8 as ue,a2 as ae,a3 as ce,g as fe,T as K,q as J,H as Z,ak as ee,n as Y,f as I,al as $,O as V,af as de,am as me}from"./BMOmYdc9.js";function B(e){return ae()?(ce(e),!0):!1}function S(e){return typeof e=="function"?e():fe(e)}const te=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ne=e=>e!=null,ve=Object.prototype.toString,oe=e=>ve.call(e)==="[object Object]",P=()=>{};function re(e,t){function n(...o){return new Promise((s,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(s).catch(r)})}return n}function pe(e,t={}){let n,o,s=P;const r=d=>{clearTimeout(d),s(),s=P};return d=>{const a=S(e),c=S(t.maxWait);return n&&r(n),a<=0||c!==void 0&&c<=0?(o&&(r(o),o=null),Promise.resolve(d())):new Promise((m,i)=>{s=t.rejectOnCancel?i:m,c&&!o&&(o=setTimeout(()=>{n&&r(n),o=null,m(d())},c)),n=setTimeout(()=>{o&&r(o),o=null,m(d())},a)})}}function he(...e){let t=0,n,o=!0,s=P,r,f,d,a,c;!ee(e[0])&&typeof e[0]=="object"?{delay:f,trailing:d=!0,leading:a=!0,rejectOnCancel:c=!1}=e[0]:[f,d=!0,a=!0,c=!1]=e;const m=()=>{n&&(clearTimeout(n),n=void 0,s(),s=P)};return u=>{const l=S(f),v=Date.now()-t,T=()=>r=u();return m(),l<=0?(t=Date.now(),T()):(v>l&&(a||!o)?(t=Date.now(),T()):d&&(r=new Promise((b,h)=>{s=c?h:b,n=setTimeout(()=>{t=Date.now(),o=!0,b(T()),m()},Math.max(0,l-v))})),!a&&!n&&(n=setTimeout(()=>o=!0,l)),o=!1,r)}}function z(e,t=!1,n="Timeout"){return new Promise((o,s)=>{setTimeout(t?()=>s(n):o,e)})}function ye(e,t,n=!1){return Object.fromEntries(Object.entries(e).filter(([o,s])=>(!n||s!==void 0)&&!t.includes(o)))}function ie(e){return e||K()}function we(...e){if(e.length!==1)return le(...e);const t=e[0];return typeof t=="function"?Q(se(()=>({get:t,set:P}))):g(t)}function ge(e,t=200,n={}){return re(pe(t,n),e)}function be(e,t=200,n=!1,o=!0,s=!1){return re(he(t,n,o,s),e)}function Te(e,t){ie(t)&&ue(e,t)}function q(e,t=!0,n){ie()?J(e,n):t?e():Z(e)}function U(e,t=!1){function n(i,{flush:u="sync",deep:l=!1,timeout:v,throwOnTimeout:T}={}){let b=null;const E=[new Promise(x=>{b=Y(e,R=>{i(R)!==t&&(b==null||b(),x(R))},{flush:u,deep:l,immediate:!0})})];return v!=null&&E.push(z(v,T).then(()=>S(e)).finally(()=>b==null?void 0:b())),Promise.race(E)}function o(i,u){if(!ee(i))return n(R=>R===i,u);const{flush:l="sync",deep:v=!1,timeout:T,throwOnTimeout:b}=u??{};let h=null;const x=[new Promise(R=>{h=Y([e,i],([w,O])=>{t!==(w===O)&&(h==null||h(),R(w))},{flush:l,deep:v,immediate:!0})})];return T!=null&&x.push(z(T,b).then(()=>S(e)).finally(()=>(h==null||h(),S(e)))),Promise.race(x)}function s(i){return n(u=>!!u,i)}function r(i){return o(null,i)}function f(i){return o(void 0,i)}function d(i){return n(Number.isNaN,i)}function a(i,u){return n(l=>{const v=Array.from(l);return v.includes(i)||v.includes(S(i))},u)}function c(i){return m(1,i)}function m(i=1,u){let l=-1;return n(()=>(l+=1,l>=i),u)}return Array.isArray(S(e))?{toMatch:n,toContains:a,changed:c,changedTimes:m,get not(){return U(e,!t)}}:{toMatch:n,toBe:o,toBeTruthy:s,toBeNull:r,toBeNaN:d,toBeUndefined:f,changed:c,changedTimes:m,get not(){return U(e,!t)}}}function Ee(e){return U(e)}function D(e){var t;const n=S(e);return(t=n==null?void 0:n.$el)!=null?t:n}const _=te?window:void 0,Se=te?window.document:void 0;function W(...e){let t,n,o,s;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,o,s]=e,t=_):[t,n,o,s]=e,!t)return P;Array.isArray(n)||(n=[n]),Array.isArray(o)||(o=[o]);const r=[],f=()=>{r.forEach(m=>m()),r.length=0},d=(m,i,u,l)=>(m.addEventListener(i,u,l),()=>m.removeEventListener(i,u,l)),a=Y(()=>[D(t),S(s)],([m,i])=>{if(f(),!m)return;const u=oe(i)?{...i}:i;r.push(...n.flatMap(l=>o.map(v=>d(m,l,v,u))))},{immediate:!0,flush:"post"}),c=()=>{a(),f()};return B(c),c}function Re(){const e=g(!1),t=K();return t&&J(()=>{e.value=!0},t),e}function C(e){const t=Re();return I(()=>(t.value,!!e()))}function Oe(e,t={}){const{immediate:n=!0,fpsLimit:o=void 0,window:s=_}=t,r=g(!1),f=o?1e3/o:null;let d=0,a=null;function c(u){if(!r.value||!s)return;d||(d=u);const l=u-d;if(f&&l<f){a=s.requestAnimationFrame(c);return}d=u,e({delta:l,timestamp:u}),a=s.requestAnimationFrame(c)}function m(){!r.value&&s&&(r.value=!0,d=0,a=s.requestAnimationFrame(c))}function i(){r.value=!1,a!=null&&s&&(s.cancelAnimationFrame(a),a=null)}return n&&m(),B(i),{isActive:Q(r),pause:i,resume:m}}function He(e,t,n){let o,s;oe(n)?(o=n,s=ye(n,["window","immediate","commitStyles","persist","onReady","onError"])):(o={duration:n},s=n);const{window:r=_,immediate:f=!0,commitStyles:d,persist:a,playbackRate:c=1,onReady:m,onError:i=p=>{console.error(p)}}=o,u=C(()=>r&&HTMLElement&&"animate"in HTMLElement.prototype),l=V(void 0),v=me({startTime:null,currentTime:null,timeline:null,playbackRate:c,pending:!1,playState:f?"idle":"paused",replaceState:"active"}),T=I(()=>v.pending),b=I(()=>v.playState),h=I(()=>v.replaceState),E=I({get(){return v.startTime},set(p){v.startTime=p,l.value&&(l.value.startTime=p)}}),x=I({get(){return v.currentTime},set(p){v.currentTime=p,l.value&&(l.value.currentTime=p,j())}}),R=I({get(){return v.timeline},set(p){v.timeline=p,l.value&&(l.value.timeline=p)}}),w=I({get(){return v.playbackRate},set(p){v.playbackRate=p,l.value&&(l.value.playbackRate=p)}}),O=()=>{if(l.value)try{l.value.play(),j()}catch(p){A(),i(p)}else H()},y=()=>{var p;try{(p=l.value)==null||p.pause(),A()}catch(L){i(L)}},k=()=>{var p;!l.value&&H();try{(p=l.value)==null||p.reverse(),j()}catch(L){A(),i(L)}},M=()=>{var p;try{(p=l.value)==null||p.finish(),A()}catch(L){i(L)}},X=()=>{var p;try{(p=l.value)==null||p.cancel(),A()}catch(L){i(L)}};Y(()=>D(e),p=>{p&&H()}),Y(()=>t,p=>{!l.value&&H(),!D(e)&&l.value&&(l.value.effect=new KeyframeEffect(D(e),S(p),s))},{deep:!0}),q(()=>{Z(()=>H(!0))}),B(X);function H(p){const L=D(e);!u.value||!L||(l.value||(l.value=L.animate(S(t),s)),d&&l.value.commitStyles(),a&&l.value.persist(),c!==1&&(l.value.playbackRate=c),p&&!f?l.value.pause():j(),m==null||m(l.value))}W(l,["cancel","finish","remove"],A);const{resume:F,pause:N}=Oe(()=>{l.value&&(v.pending=l.value.pending,v.playState=l.value.playState,v.replaceState=l.value.replaceState,v.startTime=l.value.startTime,v.currentTime=l.value.currentTime,v.timeline=l.value.timeline,v.playbackRate=l.value.playbackRate)},{immediate:!1});function j(){u.value&&F()}function A(){u.value&&r&&r.requestAnimationFrame(N)}return{isSupported:u,animate:l,play:O,pause:y,reverse:k,finish:M,cancel:X,pending:T,playState:b,replaceState:h,startTime:E,currentTime:x,timeline:R,playbackRate:w}}function xe(e,t,n){const{immediate:o=!0,delay:s=0,onError:r=P,onSuccess:f=P,resetOnExecute:d=!0,shallow:a=!0,throwError:c}=n??{},m=a?V(t):g(t),i=g(!1),u=g(!1),l=V(void 0);async function v(h=0,...E){d&&(m.value=t),l.value=void 0,i.value=!1,u.value=!0,h>0&&await z(h);const x=typeof e=="function"?e(...E):e;try{const R=await x;m.value=R,i.value=!0,f(R)}catch(R){if(l.value=R,r(R),c)throw R}finally{u.value=!1}return m.value}o&&v(s);const T={state:m,isReady:i,isLoading:u,error:l,execute:v};function b(){return new Promise((h,E)=>{Ee(u).toBe(!1).then(()=>h(T)).catch(E)})}return{...T,then(h,E){return b().then(h,E)}}}function Me(e,t={}){const{window:n=_}=t,o=C(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let s;const r=g(!1),f=c=>{r.value=c.matches},d=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",f):s.removeListener(f))},a=de(()=>{o.value&&(d(),s=n.matchMedia(S(e)),"addEventListener"in s?s.addEventListener("change",f):s.addListener(f),r.value=s.matches)});return B(()=>{a(),d(),s=void 0}),r}function Ae(e,t,n={}){const{window:o=_,...s}=n;let r;const f=C(()=>o&&"MutationObserver"in o),d=()=>{r&&(r.disconnect(),r=void 0)},a=I(()=>{const u=S(e),l=(Array.isArray(u)?u:[u]).map(D).filter(ne);return new Set(l)}),c=Y(()=>a.value,u=>{d(),f.value&&o&&u.size&&(r=new MutationObserver(t),u.forEach(l=>r.observe(l,s)))},{immediate:!0,flush:"post"}),m=()=>r==null?void 0:r.takeRecords(),i=()=>{d(),c()};return B(i),{isSupported:f,stop:i,takeRecords:m}}function Fe(e={}){const{window:t=_}=e,n=g(1);if(t){let o=function(){n.value=t.devicePixelRatio,s(),r=t.matchMedia(`(resolution: ${n.value}dppx)`),r.addEventListener("change",o,{once:!0})},s=function(){r==null||r.removeEventListener("change",o)},r;o(),B(s)}return{pixelRatio:n}}function Ie(e,t,n={}){const{root:o,rootMargin:s="0px",threshold:r=.1,window:f=_,immediate:d=!0}=n,a=C(()=>f&&"IntersectionObserver"in f),c=I(()=>{const v=S(e);return(Array.isArray(v)?v:[v]).map(D).filter(ne)});let m=P;const i=g(d),u=a.value?Y(()=>[c.value,D(o),i.value],([v,T])=>{if(m(),!i.value||!v.length)return;const b=new IntersectionObserver(t,{root:D(T),rootMargin:s,threshold:r});v.forEach(h=>h&&b.observe(h)),m=()=>{b.disconnect(),m=P}},{immediate:d,flush:"post"}):P,l=()=>{m(),u(),i.value=!1};return B(l),{isSupported:a,isActive:i,pause(){m(),i.value=!1},resume(){i.value=!0},stop:l}}function De(e,t={}){const{window:n=_,scrollTarget:o,threshold:s=0}=t,r=g(!1);return Ie(e,f=>{let d=r.value,a=0;for(const c of f)c.time>=a&&(a=c.time,d=c.isIntersecting);r.value=d},{root:o,window:n,threshold:s}),r}async function _e(e){return new Promise((t,n)=>{const o=new Image,{src:s,srcset:r,sizes:f,class:d,loading:a,crossorigin:c,referrerPolicy:m}=e;o.src=s,r&&(o.srcset=r),f&&(o.sizes=f),d&&(o.className=d),a&&(o.loading=a),c&&(o.crossOrigin=c),m&&(o.referrerPolicy=m),o.onload=()=>t(o),o.onerror=n})}function Ye(e,t={}){const n=xe(()=>_e(S(e)),void 0,{resetOnExecute:!0,...t});return Y(()=>S(e),()=>n.execute(t.delay),{deep:!0}),n}const G=1;function ke(e,t={}){const{throttle:n=0,idle:o=200,onStop:s=P,onScroll:r=P,offset:f={left:0,right:0,top:0,bottom:0},eventListenerOptions:d={capture:!1,passive:!0},behavior:a="auto",window:c=_,onError:m=y=>{console.error(y)}}=t,i=g(0),u=g(0),l=I({get(){return i.value},set(y){T(y,void 0)}}),v=I({get(){return u.value},set(y){T(void 0,y)}});function T(y,k){var M,X,H;if(!c)return;const F=S(e);F&&((H=F instanceof Document?c.document.body:F)==null||H.scrollTo({top:(M=S(k))!=null?M:v.value,left:(X=S(y))!=null?X:l.value,behavior:S(a)}))}const b=g(!1),h=$({left:!0,right:!1,top:!0,bottom:!1}),E=$({left:!1,right:!1,top:!1,bottom:!1}),x=y=>{b.value&&(b.value=!1,E.left=!1,E.right=!1,E.top=!1,E.bottom=!1,s(y))},R=ge(x,n+o),w=y=>{var k;if(!c)return;const M=((k=y==null?void 0:y.document)==null?void 0:k.documentElement)||(y==null?void 0:y.documentElement)||D(y),{display:X,flexDirection:H}=getComputedStyle(M),F=M.scrollLeft;E.left=F<i.value,E.right=F>i.value;const N=Math.abs(F)<=(f.left||0),j=Math.abs(F)+M.clientWidth>=M.scrollWidth-(f.right||0)-G;X==="flex"&&H==="row-reverse"?(h.left=j,h.right=N):(h.left=N,h.right=j),i.value=F;let A=M.scrollTop;y===c.document&&!A&&(A=c.document.body.scrollTop),E.top=A<u.value,E.bottom=A>u.value;const p=Math.abs(A)<=(f.top||0),L=Math.abs(A)+M.clientHeight>=M.scrollHeight-(f.bottom||0)-G;X==="flex"&&H==="column-reverse"?(h.top=L,h.bottom=p):(h.top=p,h.bottom=L),u.value=A},O=y=>{var k;if(!c)return;const M=(k=y.target.documentElement)!=null?k:y.target;w(M),b.value=!0,R(y),r(y)};return W(e,"scroll",n?be(O,n,!0,!1):O,d),q(()=>{try{const y=S(e);if(!y)return;w(y)}catch(y){m(y)}}),W(e,"scrollend",x,d),{x:l,y:v,isScrolling:b,arrivedState:h,directions:E,measure(){const y=S(e);c&&y&&w(y)}}}const Le={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function Pe(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:s={x:0,y:0},window:r=_,target:f=r,scroll:d=!0,eventFilter:a}=e;let c=null;const m=g(s.x),i=g(s.y),u=g(null),l=typeof t=="function"?t:Le[t],v=w=>{const O=l(w);c=w,O&&([m.value,i.value]=O,u.value="mouse")},T=w=>{if(w.touches.length>0){const O=l(w.touches[0]);O&&([m.value,i.value]=O,u.value="touch")}},b=()=>{if(!c||!r)return;const w=l(c);c instanceof MouseEvent&&w&&(m.value=w[0]+r.scrollX,i.value=w[1]+r.scrollY)},h=()=>{m.value=s.x,i.value=s.y},E=a?w=>a(()=>v(w),{}):w=>v(w),x=a?w=>a(()=>T(w),{}):w=>T(w),R=a?()=>a(()=>b(),{}):()=>b();if(f){const w={passive:!0};W(f,["mousemove","dragover"],E,w),n&&t!=="movement"&&(W(f,["touchstart","touchmove"],x,w),o&&W(f,"touchend",h,w)),d&&t==="page"&&W(r,"scroll",R,{passive:!0})}return{x:m,y:i,sourceType:u}}function Xe(e,t={}){const{handleOutside:n=!0,window:o=_}=t,s=t.type||"page",{x:r,y:f,sourceType:d}=Pe(t),a=g(e??(o==null?void 0:o.document.body)),c=g(0),m=g(0),i=g(0),u=g(0),l=g(0),v=g(0),T=g(!0);let b=()=>{};return o&&(b=Y([a,r,f],()=>{const h=D(a);if(!h)return;const{left:E,top:x,width:R,height:w}=h.getBoundingClientRect();i.value=E+(s==="page"?o.pageXOffset:0),u.value=x+(s==="page"?o.pageYOffset:0),l.value=w,v.value=R;const O=r.value-i.value,y=f.value-u.value;T.value=R===0||w===0||O<0||y<0||O>R||y>w,(n||!T.value)&&(c.value=O,m.value=y)},{immediate:!0}),W(document,"mouseleave",()=>{T.value=!0})),{x:r,y:f,sourceType:d,elementX:c,elementY:m,elementPositionX:i,elementPositionY:u,elementHeight:l,elementWidth:v,isOutside:T,stop:b}}function je(e=null,t={}){var n,o,s;const{document:r=Se,restoreOnUnmount:f=i=>i}=t,d=(n=r==null?void 0:r.title)!=null?n:"",a=we((o=e??(r==null?void 0:r.title))!=null?o:null),c=e&&typeof e=="function";function m(i){if(!("titleTemplate"in t))return i;const u=t.titleTemplate||"%s";return typeof u=="function"?u(i):S(u).replace(/%s/g,i)}return Y(a,(i,u)=>{i!==u&&r&&(r.title=m(typeof i=="string"?i:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&r&&!c&&Ae((s=r.head)==null?void 0:s.querySelector("title"),()=>{r&&r.title!==a.value&&(a.value=m(r.title))},{childList:!0}),Te(()=>{if(f){const i=f(d,a.value||"");i!=null&&r&&(r.title=i)}}),a}function Be(e={}){const{window:t=_}=e;if(!t)return g(!1);const n=g(t.document.hasFocus());return W(t,"blur",()=>{n.value=!1}),W(t,"focus",()=>{n.value=!0}),n}function Ne(e={}){const{window:t=_,behavior:n="auto"}=e;if(!t)return{x:g(0),y:g(0)};const o=g(t.scrollX),s=g(t.scrollY),r=I({get(){return o.value},set(d){scrollTo({left:d,behavior:n})}}),f=I({get(){return s.value},set(d){scrollTo({top:d,behavior:n})}});return W(t,"scroll",()=>{o.value=t.scrollX,s.value=t.scrollY},{capture:!1,passive:!0}),{x:r,y:f}}function Ce(e={}){const{window:t=_,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:r=!0}=e,f=g(n),d=g(o),a=()=>{t&&(r?(f.value=t.innerWidth,d.value=t.innerHeight):(f.value=t.document.documentElement.clientWidth,d.value=t.document.documentElement.clientHeight))};if(a(),q(a),W("resize",a,{passive:!0}),s){const c=Me("(orientation: portrait)");Y(c,()=>a())}return{width:f,height:d}}const Ve=window.setInterval;export{De as a,Xe as b,Ne as c,Ce as d,ke as e,Fe as f,He as g,Be as h,je as i,Ve as s,Ye as u};