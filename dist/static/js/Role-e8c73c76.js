import{d as ue,r as o,k as re,j as ie,U as u,o as l,V as s,W as t,X as n,b as Y,e as A,$ as j,P as e,z as H,v as X,Y as r,c as C,N as I,F as K,a4 as pe,a0 as ce,a2 as me,s as L}from"./@vue-5600d395.js";import{P as de}from"./PicCard-4ded919e.js";import{c as _e,n as ye,o as ve,q as he}from"./index-14828061.js";import{U as fe}from"./UrlSelect-ec9f5796.js";import{C as ge}from"./CommonIcon-bfbb031a.js";import{u as we}from"./vue-router-1a713004.js";import{s as ke}from"./star_rail_select-72af43a0.js";import{A as xe}from"./@vicons-c53b9e6c.js";import{e as Ce,u as ze}from"./naive-ui-ae92ea56.js";import"./plugin-vueexport-helper-d7c00f7c.js";import"./lodash-7b9fd68c.js";import"./date-fns-d101b321.js";import"./moment-b35f754a.js";import"./mitt-dab1f1cb.js";import"./css-render-99fcc978.js";import"./@emotion-e1dc9e92.js";import"./@css-render-5e321065.js";import"./seemly-ab171afc.js";import"./lodash-es-882891f9.js";import"./vooks-d8282700.js";import"./evtd-3bd1ff11.js";import"./vueuc-e5d9b751.js";import"./vdirs-c82cf9c8.js";import"./@juggle-d50e7493.js";import"./treemate-97ea80b9.js";import"./date-fns-tz-94aca45e.js";import"./async-validator-9e2b95c0.js";const Re=Y("h2",null,"\u89D2\u8272",-1),Se=A("\u641C\u7D22"),Ue=A("\u91CD\u7F6E\u6761\u4EF6"),lt=ue({__name:"Role",setup(De){const _=o(_e());let $=o(100),B=o(169);_.value?($.value=100,B.value=169):($.value=45,B.value=76);const m=o(!1),E=Ce(),G=ze();we();let w=o({pageNum:1,pageSize:100}),y=o(!0),z=o(""),R=o(-2),S=o(-2),U=o(-2),D=o(0),k=o([]),f=o(`
    ${_.value?"margin: 20px;":"margin:2px; gap: 8px 5px;"}
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `);const J=a=>{S.value=a,v(1)},O=a=>{R.value=a,v(1)},Q=a=>{U.value=a,v(1)},Z=a=>{z.value=a},ee=a=>{v(1)},te=()=>{z.value="",S.value=R.value=U.value=-2,v(1)},ae=a=>{w.value.pageSize=a,v(1)},le=a=>[L("div",{className:"render-star-rail-weapon-label"},{default:()=>[a.value>-1?L(ge,{url:ke[a.value].icon_url,size:30},{default:()=>L("")}):void 0,L("span",{},{default:()=>a.label})]})],b=o({}),M=async()=>{E.start(),m.value=!0;let a={name:z.value,element:R.value,weapon:S.value,star:U.value,page:w.value},{code:g,data:i,msg:V}=await ve(a);if(g!=200){G.error(V),setTimeout(()=>{E.finish()},500),m.value=!1;return}D.value=i.total;const{star_rail_base:F,star_rail_wiki_base:p,star_rail_mhy_url:x,star_rail_role:q}=await he(),N=`${F}${x}`,P=`${p}${q}`;k.value=i==null?void 0:i.records.map(d=>(d.mhy_URL=N.replace("{id}",d.mhy_url),d.wiki_URL=P.replace("{id}",d.wiki_url),d.imgSrc=d.icon_url,d)),setTimeout(()=>{E.finish()},500),m.value=!1},v=async a=>{w.value.pageNum=a,k.value=[],D.value=0,M()};return re(async()=>{b.value=await ye()}),ie(()=>{M()}),(a,g)=>{const i=u("n-skeleton"),V=u("n-gradient-text"),F=u("n-layout-header"),p=u("n-space"),x=u("n-select"),q=u("n-input"),N=u("n-button"),P=u("n-divider"),d=u("n-icon"),ne=u("n-empty"),oe=u("n-layout-content"),se=u("n-pagination"),W=u("n-layout");return l(),s(W,null,{default:t(()=>[n(F,{class:"header-top"},{default:t(()=>[Y("div",null,[Re,m.value?(l(),s(i,{key:0,width:150,sharp:!1,size:"medium"})):(l(),s(V,{key:1,gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:t(()=>[A(" \u5171"+j(e(D))+"\u4F4D\uFF0C\u5DF2\u5C55\u793A"+j(e(k).length)+"\u4F4D ",1)]),_:1},8,["gradient"]))]),m.value?(l(),s(i,{key:0,width:300,sharp:!1,size:"medium"})):(l(),s(fe,{key:1}))]),_:1}),n(W,null,{default:t(()=>[n(F,null,{default:t(()=>[m.value?H((l(),s(p,{key:0,style:r(e(f))},{default:t(()=>[(l(!0),C(K,null,I(new Array(8),(c,h)=>(l(),s(i,{key:h,width:200,sharp:!1,size:"medium"}))),128))]),_:1},8,["style"])),[[X,e(y)]]):H((l(),s(p,{key:1,class:"space-main",style:r(e(f))},{default:t(()=>{var c,h,T;return[n(x,{value:e(U),"onUpdate:value":Q,options:(c=b.value)==null?void 0:c.star,style:r(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(x,{"render-label":le,value:e(S),"onUpdate:value":J,options:(h=b.value)==null?void 0:h.weapon,style:r(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(x,{value:e(R),"onUpdate:value":O,options:(T=b.value)==null?void 0:T.element,style:r(_.value?"width: 200px":"")},null,8,["value","options","style"]),n(q,{value:e(z),onKeyup:pe(ee,["enter"]),"onUpdate:value":Z,type:"text",placeholder:"\u641C\u7D22\u89D2\u8272\u540D",style:r(_.value?"width: 200px":"min-width: 200px;")},null,8,["value","onKeyup","style"]),n(p,{style:r(_.value?"flex:1;":"min-width: 200px;")},{default:t(()=>[n(N,{type:"success",style:{width:"84px"},onClick:g[0]||(g[0]=be=>v(1))},{default:t(()=>[Se]),_:1}),n(N,{type:"warning",onClick:te},{default:t(()=>[Ue]),_:1})]),_:1},8,["style"])]}),_:1},8,["style"])),[[X,e(y)]]),_.value?me("",!0):(l(),s(P,{key:2,onClick:g[1]||(g[1]=c=>ce(y)?y.value=!e(y):y=!e(y))},{default:t(()=>[A(j(e(y)?"\u6536\u8D77\u641C\u7D22":"\u5C55\u5F00\u641C\u7D22"),1)]),_:1}))]),_:1}),n(oe,{"has-sider":""},{default:t(()=>[m.value?(l(),s(p,{key:0,style:r(e(f))},{default:t(()=>[(l(!0),C(K,null,I(new Array(20),(c,h)=>(l(),C("div",{key:h},[n(i,{width:100,height:123,sharp:!1,size:"medium"})]))),128))]),_:1},8,["style"])):!m.value&&e(k).length>0?(l(),s(p,{key:1,style:r(e(f))},{default:t(()=>[(l(!0),C(K,null,I(e(k),(c,h)=>(l(),C("div",{key:h},[n(de,{width:e($),height:e(B),src:c.imgSrc,item:c,mhy_url:c.mhy_URL,wiki_url:c.wiki_URL,objectFit:"contain"},null,8,["width","height","src","item","mhy_url","wiki_url"])]))),128))]),_:1},8,["style"])):(l(),s(p,{key:2,style:r([{width:"100%"},e(f)])},{default:t(()=>[n(ne,{description:"\u6240\u9009\u6761\u4EF6\u7684\u6570\u636E\u4E3A\u7A7A"},{icon:t(()=>[n(d,null,{default:t(()=>[n(e(xe))]),_:1})]),_:1})]),_:1},8,["style"]))]),_:1}),n(W,{"content-style":"overflow-x: scroll;"},{default:t(()=>[m.value?(l(),s(p,{key:0,style:r(e(f))},{default:t(()=>[n(i,{width:300,sharp:!1,size:"medium"})]),_:1},8,["style"])):(l(),s(p,{key:1,style:r(e(f))},{default:t(()=>[n(se,{page:e(w).pageNum,"page-size":e(w).pageSize,"item-count":e(D),"on-update:page":v,"show-size-picker":"","page-sizes":[10,50,100,150],"on-update:page-size":ae},null,8,["page","page-size","item-count"])]),_:1},8,["style"]))]),_:1})]),_:1})]),_:1})}}});export{lt as default};
