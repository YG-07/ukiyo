import{c as g}from"./index-14828061.js";import{d as b,r as s,n as i,U as c,o as w,c as y,b as C,X as d,a5 as k,P as l,Y as o,W as x,e as W,$ as z,I as N}from"./@vue-5600d395.js";import{_ as j}from"./plugin-vueexport-helper-d7c00f7c.js";const E=b({__name:"WavesEffectCard",props:{src:null,width:null,height:null,item:null,url:null,round:{default:"0.1rem"},objectFit:{default:"fill"},theme:{default:"dark"}},setup(a){const e=a,r=s(g());let n=s(r.value?60:30),u=s(e.width?Number(e.width):n.value),m=s(e.height?Number(e.height):n.value);const f=i(()=>{let t=e.theme=="dark"?"color: #fff;background: #333;":"color: #000;background: #fff;";return r.value||(t+="flex-direction: column;"),t}),h=i(()=>e.item.star!==void 0?`img-item img-item-${e.item.star}`:""),v=()=>{let t=e.url;window.open(t,"_blank")};return(t,I)=>{const _=c("n-image"),p=c("n-ellipsis");return w(),y("div",{class:"WavesCard",style:o(l(f))},[C("div",{class:"waves-item",onClick:v},[d(_,{class:k(l(h)),style:o(`border-radius: ${a.round};`),width:l(u),height:l(m),"preview-disabled":!0,lazy:"",src:a.src,"object-fit":a.objectFit},null,8,["class","style","width","height","src","object-fit"]),d(p,{style:o(r.value?"max-width: 90px":"transform: scale(0.9);font-size: 12px;")},{default:x(()=>[W(z(a.item.name),1)]),_:1},8,["style"])]),N(t.$slots,"default",{},void 0,!0)],4)}}});const U=j(E,[["__scopeId","data-v-0237c7f5"]]);export{U as W};
