import{T as a,G as l,S as u,C as P,a as S,A as j,I as G}from"./index.5b485e58.js";import{a as R,u as $,b as U,c as C,s as w,r as d,j as n,d as e,L as z,F,I as D}from"./index.6d5ea256.js";import{P as L}from"./index.3534371a.js";import{R as f}from"./react-markdown.5cd5af42.js";import{C as H}from"./index.af36b9da.js";import"./index.65f1d40b.js";import"./index.bb1d5e00.js";const J="oQPuj",M="aeUu5",W="k37EZ",_="UzHab";var v={root:J,bannerPhoto:M,logo:W,description:_},q="/assets/banner.94df4237.png";const I=()=>R.get("/api/about?populate=*&pagination[pageSize]="),B=()=>{const t=$(),{about:r}=U(c=>c.about),{runAsync:o,loading:b,error:x}=C(I,{manual:!0,onSuccess:c=>{t(w(c.data.data.attributes))}}),h=d.exports.useCallback(()=>{r||o().then(c=>c)},[r,o]);return d.exports.useEffect(()=>{h()},[h]),{about:r,loading:b,error:x}},O=()=>{const{about:t}=B();return n("div",{className:v.root,style:{backgroundImage:`url(${q})`},children:[e("img",{draggable:!1,className:v.logo,src:z,alt:"big logo"}),e(a,{className:v.description,variant:"body1",children:t.title||""})]})},Q="zHUCC",Y="pU16n";var y={root:Q,title:Y};const m=({title:t="",children:r,id:o=""})=>n("div",{id:o,className:y.root,children:[e(a,{className:y.title,variant:"h4",children:t}),r]}),Z="yFLep",K="Bt2PD",V="zplC2",X="_9jWGh";var s={root:Z,image:K,aboutText:V,skeletonText:X},ee="/assets/about.80ac1e7b.png";const te=()=>{const t=$(),[r,o]=d.exports.useState({}),[b,x]=d.exports.useState(""),h=i=>{o(i),x(`${i.background.data.attributes.formats.thumbnail.url}`||ee)},{runAsync:c,loading:T,error:k}=C(I,{manual:!0,onSuccess:i=>{h(i.data.data.attributes),t(w(i.data.data.attributes))}});return d.exports.useEffect(()=>{c().then(i=>i)},[c]),n(l,{container:!0,className:s.root,spacing:1,children:[e(l,{sx:{padding:"8px"},item:!0,xs:12,md:6,children:T||!b||k?e(u,{variant:"rectangular",width:"100%",className:s.image}):e(L,{className:s.image,image:r.background.data})}),e(l,{sx:{padding:"8px"},item:!0,xs:12,md:6,children:T||k?n(F,{children:[e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"40%",children:e(a,{className:s.skeletonText,children:"."})})]}):e(a,{children:e(f,{children:r.about||""})})})]})},ae="xTlGs";var se={root:ae};const ne="JdbO4",re="abTny",ue="RR3xY";var N={root:ne,icon:re,title:ue};const p=({icon:t,title:r})=>n(l,{item:!0,className:N.root,xs:6,sm:6,children:[e("div",{className:N.icon,children:e(D,{icon:t})}),e(a,{variant:"h6",className:N.title,children:r})]});var oe="/assets/gift.0e37b726.svg",ce="/assets/apple.003e8c68.svg",ie="/assets/decisionTree.07308d28.svg",le="/assets/users.60ffcee7.svg";const de=()=>n(l,{container:!0,className:se.root,spacing:0,children:[e(p,{icon:oe,title:"\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430"}),e(p,{icon:ce,title:"\u0421\u0432\u0435\u0436\u0438\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B"}),e(p,{icon:ie,title:"\u0421\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"}),e(p,{icon:le,title:"\u0420\u0443\u0447\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430"})]}),he="_00N76",me="JCHy9",pe="W4wmg",ge="NCJT-";var g={root:he,card:me,icon:pe,title:ge};const E=({icon:t,title:r,children:o})=>e(l,{item:!0,className:g.root,xs:12,md:6,children:n("div",{className:g.card,children:[e("div",{className:g.icon,children:e(D,{icon:t})}),e(a,{variant:"h6",className:g.title,children:r}),o]})}),A=()=>n(F,{children:[e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"30%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"100%",children:e(a,{className:s.skeletonText,children:"."})}),e(u,{width:"30%",children:e(a,{className:s.skeletonText,children:"."})})]}),be=()=>{const{about:t}=B();return n(l,{container:!0,children:[n(E,{icon:P,title:"\u041E\u043F\u043B\u0430\u0442\u0430",children:[t.payment&&e(a,{children:e(f,{children:t.payment})}),!t.payment&&e(A,{})]}),n(E,{icon:S,title:"\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",children:[t.delivery&&e(a,{children:e(f,{children:t.delivery})}),!t.delivery&&e(A,{})]})]})},Ee=()=>n(j,{children:[e(O,{}),n(G,{children:[e(m,{id:"about",title:"\u041E \u043D\u0430\u0441",children:e(te,{})}),e(m,{id:"catalog",title:"\u041A\u0430\u0442\u0430\u043B\u043E\u0433",children:e(H,{})}),e(m,{id:"benefits",title:"\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:e(de,{})}),e(m,{id:"payment",title:"\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430",children:e(be,{})})]})]});export{Ee as default};
