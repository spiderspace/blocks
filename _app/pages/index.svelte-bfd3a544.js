var pe=Object.defineProperty,de=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var te=(l,e,t)=>e in l?pe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t,K=(l,e)=>{for(var t in e||(e={}))ke.call(e,t)&&te(l,t,e[t]);if(ee)for(var t of ee(e))me.call(e,t)&&te(l,t,e[t]);return l},Q=(l,e)=>de(l,be(e));import{S as D,i as M,n as G,e as E,t as N,c as O,a as w,g as T,d,b as P,P as A,f as g,L as y,G as V,j as U,k as se,l as J,E as L,a1 as ie,H as j,I as z,Y as q,h as Z,w as H,x as W,y as X,W as he,a2 as ve,m as ae,o as R,p as ue,q as I,B as Y,_ as ye,a3 as ge,a4 as Ee}from"../chunks/index-491e0afe.js";import{p as Oe,b as we,g as fe,B as Ne,d as Te,e as _e,f as le}from"../chunks/app-10e75d58.js";import{w as Be}from"../chunks/paths-fa8bfdbc.js";function Le(l){let e;return{c(){e=N("open")},l(t){e=T(t,"open")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function Se(l){let e;return{c(){e=N("close")},l(t){e=T(t,"close")},m(t,s){g(t,e,s)},d(t){t&&d(e)}}}function oe(l){let e,t,s,o,r,n;return{c(){e=E("pre"),t=N(`
    `),s=E("textarea"),o=N(`
  `),this.h()},l(c){e=O(c,"PRE",{class:!0});var i=w(e);t=T(i,`
    `),s=O(i,"TEXTAREA",{class:!0}),w(s).forEach(d),o=T(i,`
  `),i.forEach(d),this.h()},h(){s.value=l[3],P(s,"class","svelte-7y61ls"),P(e,"class","svelte-7y61ls"),A(e,"error",!!l[2])},m(c,i){g(c,e,i),y(e,t),y(e,s),y(e,o),r||(n=V(s,"input",l[9]),r=!0)},p(c,i){i&8&&(s.value=c[3]),i&4&&A(e,"error",!!c[2])},d(c){c&&d(e),r=!1,n()}}}function Ae(l){let e,t,s,o,r,n,c,i,p;function h(_,k){return _[1]?Se:Le}let m=h(l),f=m(l),u=l[1]&&oe(l);return{c(){e=E("button"),t=N("add block"),s=U(),o=E("button"),f.c(),r=N(" block editor"),n=U(),u&&u.c(),c=se()},l(_){e=O(_,"BUTTON",{});var k=w(e);t=T(k,"add block"),k.forEach(d),s=J(_),o=O(_,"BUTTON",{});var b=w(o);f.l(b),r=T(b," block editor"),b.forEach(d),n=J(_),u&&u.l(_),c=se()},m(_,k){g(_,e,k),y(e,t),g(_,s,k),g(_,o,k),f.m(o,null),y(o,r),g(_,n,k),u&&u.m(_,k),g(_,c,k),i||(p=[V(e,"click",l[5]),V(o,"click",l[8])],i=!0)},p(_,[k]){m!==(m=h(_))&&(f.d(1),f=m(_),f&&(f.c(),f.m(o,r))),_[1]?u?u.p(_,k):(u=oe(_),u.c(),u.m(c.parentNode,c)):u&&(u.d(1),u=null)},i:L,o:L,d(_){_&&d(e),_&&d(s),_&&d(o),f.d(),_&&d(n),u&&u.d(_),_&&d(c),i=!1,ie(p)}}}function Ie(l,e,t){let s,o,r=L,n=()=>(r(),r=j(c,b=>t(7,o=b)),c);l.$$.on_destroy.push(()=>r());let{blocks:c}=e;n();let{parseOptions:i}=e,p=!0,h;const m=b=>{let C;try{C=JSON.parse(b),t(2,h=void 0)}catch{t(2,h="failed to parse JSON")}const B=Oe(C,i);B&&z(c,o=B,o)},f=b=>{z(c,o=o.concat(b),o)},u=()=>{const b=prompt("enter iframe src:","https://spiderspace.github.io/about");!b||f(we({type:"Component",component:"Iframe",props:{src:b}},i))},_=()=>t(1,p=!p),k=b=>{m(b.currentTarget.value)};return l.$$set=b=>{"blocks"in b&&n(t(0,c=b.blocks)),"parseOptions"in b&&t(6,i=b.parseOptions)},l.$$.update=()=>{l.$$.dirty&128&&t(3,s=JSON.stringify(o,null,"	"))},[c,p,h,s,m,u,i,o,_,k]}class Ce extends D{constructor(e){super();M(this,e,Ie,Ae,G,{blocks:0,parseOptions:6})}}function Ue(l){let e,t,s,o,r,n,c,i,p,h,m;return{c(){e=E("nav"),t=E("button"),s=N("page"),o=U(),r=E("button"),n=N("app"),c=U(),i=E("button"),p=N("\u2715"),this.h()},l(f){e=O(f,"NAV",{});var u=w(e);t=O(u,"BUTTON",{});var _=w(t);s=T(_,"page"),_.forEach(d),o=J(u),r=O(u,"BUTTON",{});var k=w(r);n=T(k,"app"),k.forEach(d),c=J(u),i=O(u,"BUTTON",{});var b=w(i);p=T(b,"\u2715"),b.forEach(d),u.forEach(d),this.h()},h(){A(t,"selected",l[1]==="page"),A(r,"selected",l[1]==="app")},m(f,u){g(f,e,u),y(e,t),y(t,s),y(e,o),y(e,r),y(r,n),y(e,c),y(e,i),y(i,p),h||(m=[V(t,"click",l[4]),V(r,"click",l[5]),V(i,"click",l[6])],h=!0)},p(f,[u]){u&2&&A(t,"selected",f[1]==="page"),u&2&&A(r,"selected",f[1]==="app")},i:L,o:L,d(f){f&&d(e),h=!1,ie(m)}}}function Je(l,e,t){let s,o=L,r=()=>(o(),o=j(i,f=>t(1,s=f)),i),n;l.$$.on_destroy.push(()=>o());const c=fe();q(l,c,f=>t(2,n=f));let{view:i}=e;r();const p=()=>z(i,s="page",s),h=()=>z(i,s="app",s),m=()=>z(c,n=!n,n);return l.$$set=f=>{"view"in f&&r(t(0,i=f.view))},[i,s,n,c,p,h,m]}class Re extends D{constructor(e){super();M(this,e,Je,Ue,G,{view:0})}}function ne(l,e,t){const s=l.slice();return s[11]=e[t],s}function re(l,e){let t,s=e[11]+"",o,r,n;function c(){return e[10](e[11])}return{key:l,first:null,c(){t=E("button"),o=N(s),this.h()},l(i){t=O(i,"BUTTON",{});var p=w(t);o=T(p,s),p.forEach(d),this.h()},h(){A(t,"selected",e[6]===e[11]),this.first=t},m(i,p){g(i,t,p),y(t,o),r||(n=V(t,"click",c),r=!0)},p(i,p){e=i,p&32&&s!==(s=e[11]+"")&&Z(o,s),p&96&&A(t,"selected",e[6]===e[11])},d(i){i&&d(t),r=!1,n()}}}function Ve(l){let e,t,s;return{c(){e=N("unhandled view: '"),t=N(l[8]),s=N("'")},l(o){e=T(o,"unhandled view: '"),t=T(o,l[8]),s=T(o,"'")},m(o,r){g(o,e,r),g(o,t,r),g(o,s,r)},p(o,r){r&256&&Z(t,o[8])},i:L,o:L,d(o){o&&d(e),o&&d(t),o&&d(s)}}}function ze(l){let e;return{c(){e=N("...")},l(t){e=T(t,"...")},m(t,s){g(t,e,s)},p:L,i:L,o:L,d(t){t&&d(e)}}}function Pe(l){let e,t;return e=new Ce({props:{blocks:l[1],parseOptions:l[4]}}),{c(){H(e.$$.fragment)},l(s){W(e.$$.fragment,s)},m(s,o){X(e,s,o),t=!0},p(s,o){const r={};o&2&&(r.blocks=s[1]),o&16&&(r.parseOptions=s[4]),e.$set(r)},i(s){t||(I(e.$$.fragment,s),t=!0)},o(s){R(e.$$.fragment,s),t=!1},d(s){Y(e,s)}}}function $e(l){let e,t,s,o,r=[],n=new Map,c,i,p=JSON.stringify(Q(K({},l[0]),{props:{blocks:`[${l[7].length}]`}}),null,"	")+"",h,m,f,u,_;t=new Re({props:{view:l[9]}});let k=l[5];const b=a=>a[11];for(let a=0;a<k.length;a+=1){let v=ne(l,k,a),S=b(v);n.set(S,r[a]=re(S,v))}const C=[Pe,ze,Ve],B=[];function $(a,v){return a[8]==="page"?0:a[8]==="app"?1:2}return f=$(l),u=B[f]=C[f](l),{c(){e=E("div"),H(t.$$.fragment),s=U(),o=E("nav");for(let a=0;a<r.length;a+=1)r[a].c();c=U(),i=E("pre"),h=N(p),m=U(),u.c(),this.h()},l(a){e=O(a,"DIV",{class:!0});var v=w(e);W(t.$$.fragment,v),s=J(v),o=O(v,"NAV",{});var S=w(o);for(let F=0;F<r.length;F+=1)r[F].l(S);S.forEach(d),c=J(v),i=O(v,"PRE",{});var x=w(i);h=T(x,p),x.forEach(d),m=J(v),u.l(v),v.forEach(d),this.h()},h(){P(e,"class","editor svelte-1fg6ei8")},m(a,v){g(a,e,v),X(t,e,null),y(e,s),y(e,o);for(let S=0;S<r.length;S+=1)r[S].m(o,null);y(e,c),y(e,i),y(i,h),y(e,m),B[f].m(e,null),_=!0},p(a,[v]){v&96&&(k=a[5],r=he(r,v,b,1,a,k,n,o,ve,re,null,ne)),(!_||v&129)&&p!==(p=JSON.stringify(Q(K({},a[0]),{props:{blocks:`[${a[7].length}]`}}),null,"	")+"")&&Z(h,p);let S=f;f=$(a),f===S?B[f].p(a,v):(ae(),R(B[S],1,1,()=>{B[S]=null}),ue(),u=B[f],u?u.p(a,v):(u=B[f]=C[f](a),u.c()),I(u,1),u.m(e,null))},i(a){_||(I(t.$$.fragment,a),I(u),_=!0)},o(a){R(t.$$.fragment,a),R(u),_=!1},d(a){a&&d(e),Y(t);for(let v=0;v<r.length;v+=1)r[v].d();B[f].d()}}}function je(l,e,t){let s,o=L,r=()=>(o(),o=j(b,a=>t(5,s=a)),b),n,c=L,i=()=>(c(),c=j(k,a=>t(6,n=a)),k),p,h=L,m=()=>(h(),h=j(_,a=>t(7,p=a)),_),f;l.$$.on_destroy.push(()=>o()),l.$$.on_destroy.push(()=>c()),l.$$.on_destroy.push(()=>h());let{block:u}=e,{blocks:_}=e;m();let{selectedLayout:k}=e;i();let{layouts:b}=e;r();let{parseOptions:C}=e;const B=Be("page");q(l,B,a=>t(8,f=a));const $=a=>z(k,n=a,n);return l.$$set=a=>{"block"in a&&t(0,u=a.block),"blocks"in a&&m(t(1,_=a.blocks)),"selectedLayout"in a&&i(t(2,k=a.selectedLayout)),"layouts"in a&&r(t(3,b=a.layouts)),"parseOptions"in a&&t(4,C=a.parseOptions)},[u,_,k,b,C,s,n,p,f,B,$]}class qe extends D{constructor(e){super();M(this,e,je,$e,G,{block:0,blocks:1,selectedLayout:2,layouts:3,parseOptions:4})}}function ce(l){let e,t,s,o,r;return t=new qe({props:{blocks:l[2],block:l[0],selectedLayout:l[3],layouts:l[4],parseOptions:_e}}),{c(){e=E("section"),H(t.$$.fragment),this.h()},l(n){e=O(n,"SECTION",{class:!0});var c=w(e);W(t.$$.fragment,c),c.forEach(d),this.h()},h(){P(e,"class","editor svelte-1ezcsfx")},m(n,c){g(n,e,c),X(t,e,null),r=!0},p(n,c){const i={};c&1&&(i.block=n[0]),t.$set(i)},i(n){r||(I(t.$$.fragment,n),ye(()=>{o&&o.end(1),s=Ee(e,le,{start:.8}),s.start()}),r=!0)},o(n){R(t.$$.fragment,n),s&&s.invalidate(),o=ge(e,le,{duration:92}),r=!1},d(n){n&&d(e),Y(t),n&&o&&o.end()}}}function De(l){let e,t,s,o,r;s=new Ne({props:{block:l[0]}});let n=l[1]&&ce(l);return{c(){e=E("main"),t=E("section"),H(s.$$.fragment),o=U(),n&&n.c(),this.h()},l(c){e=O(c,"MAIN",{class:!0});var i=w(e);t=O(i,"SECTION",{class:!0});var p=w(t);W(s.$$.fragment,p),p.forEach(d),o=J(i),n&&n.l(i),i.forEach(d),this.h()},h(){P(t,"class","content svelte-1ezcsfx"),P(e,"class","svelte-1ezcsfx"),A(e,"devmode",l[1])},m(c,i){g(c,e,i),y(e,t),X(s,t,null),y(e,o),n&&n.m(e,null),r=!0},p(c,[i]){const p={};i&1&&(p.block=c[0]),s.$set(p),c[1]?n?(n.p(c,i),i&2&&I(n,1)):(n=ce(c),n.c(),I(n,1),n.m(e,null)):n&&(ae(),R(n,1,1,()=>{n=null}),ue()),i&2&&A(e,"devmode",c[1])},i(c){r||(I(s.$$.fragment,c),I(n),r=!0)},o(c){R(s.$$.fragment,c),R(n),r=!1},d(c){c&&d(e),Y(s),n&&n.d()}}}function Me(l,e,t){let s,o,r;const{blocks:n,selectedLayout:c,layouts:i}=Te();q(l,n,m=>t(6,s=m)),q(l,c,m=>t(7,o=m));const p=fe();q(l,p,m=>t(1,r=m));let h;return l.$$.update=()=>{l.$$.dirty&192&&t(0,h={id:_e.toId(),type:"Component",component:o,props:{blocks:s}})},[h,r,n,c,i,p,s,o]}class Ye extends D{constructor(e){super();M(this,e,Me,De,G,{})}}export{Ye as default};
