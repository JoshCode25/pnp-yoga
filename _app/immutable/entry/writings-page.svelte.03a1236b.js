import{S as C,i as R,s as T,k as v,a as $,q as L,l as d,m as p,c as w,r as S,h,N as V,n as g,b as U,C as o,u as j,L as P,y,z as I,A as q,g as x,d as k,B}from"../chunks/index.bde2117d.js";const z=""+new URL("../assets/default.778b5ef1.jpg",import.meta.url).href;function A(c){let e,t,i,l,n,a,_,m,u,s;return{c(){e=v("div"),t=v("img"),l=$(),n=v("div"),a=v("h2"),_=L(c[0]),m=$(),u=v("p"),s=L(c[1]),this.h()},l(r){e=d(r,"DIV",{class:!0});var f=p(e);t=d(f,"IMG",{src:!0,alt:!0,class:!0}),l=w(f),n=d(f,"DIV",{class:!0});var b=p(n);a=d(b,"H2",{class:!0});var W=p(a);_=S(W,c[0]),W.forEach(h),m=w(b),u=d(b,"P",{class:!0});var D=p(u);s=S(D,c[1]),D.forEach(h),b.forEach(h),f.forEach(h),this.h()},h(){V(t.src,i=c[2])||g(t,"src",i),g(t,"alt","thumbnail description"),g(t,"class","svelte-x4d2qk"),g(a,"class","svelte-x4d2qk"),g(u,"class","svelte-x4d2qk"),g(n,"class","textWrapper svelte-x4d2qk"),g(e,"class","flexWrapper grow svelte-x4d2qk")},m(r,f){U(r,e,f),o(e,t),o(e,l),o(e,n),o(n,a),o(a,_),o(n,m),o(n,u),o(u,s)},p(r,[f]){f&4&&!V(t.src,i=r[2])&&g(t,"src",i),f&1&&j(_,r[0]),f&2&&j(s,r[1])},i:P,o:P,d(r){r&&h(e)}}}function G(c,e,t){let{name:i="Blog Title"}=e,{summary:l="Blog Summary"}=e,{thumbnailImage:n=z}=e;return c.$$set=a=>{"name"in a&&t(0,i=a.name),"summary"in a&&t(1,l=a.summary),"thumbnailImage"in a&&t(2,n=a.thumbnailImage)},[i,l,n]}class E extends C{constructor(e){super(),R(this,e,G,A,T,{name:0,summary:1,thumbnailImage:2})}}const H=""+new URL("../assets/reverse-warrior.1a92a355.jpg",import.meta.url).href;function M(c){let e,t,i,l,n,a,_,m,u;return t=new E({}),l=new E({props:{thumbnailImage:H}}),a=new E({}),m=new E({}),{c(){e=v("div"),y(t.$$.fragment),i=$(),y(l.$$.fragment),n=$(),y(a.$$.fragment),_=$(),y(m.$$.fragment),this.h()},l(s){e=d(s,"DIV",{class:!0});var r=p(e);I(t.$$.fragment,r),i=w(r),I(l.$$.fragment,r),n=w(r),I(a.$$.fragment,r),_=w(r),I(m.$$.fragment,r),r.forEach(h),this.h()},h(){g(e,"class","flexWrapper svelte-8ep1k0")},m(s,r){U(s,e,r),q(t,e,null),o(e,i),q(l,e,null),o(e,n),q(a,e,null),o(e,_),q(m,e,null),u=!0},p:P,i(s){u||(x(t.$$.fragment,s),x(l.$$.fragment,s),x(a.$$.fragment,s),x(m.$$.fragment,s),u=!0)},o(s){k(t.$$.fragment,s),k(l.$$.fragment,s),k(a.$$.fragment,s),k(m.$$.fragment,s),u=!1},d(s){s&&h(e),B(t),B(l),B(a),B(m)}}}class F extends C{constructor(e){super(),R(this,e,null,M,T,{})}}export{F as default};