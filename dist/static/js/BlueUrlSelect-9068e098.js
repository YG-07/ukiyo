import{d as L,r as u,U as p,o,c as B,z as _,v as m,P as e,b as h,X as d,F as A,N as C,V as S,W as g,e as E,$ as F,Y as U}from"./@vue-5600d395.js";import{c as P,s as w,e as k}from"./index-14828061.js";import{u as N}from"./naive-ui-ae92ea56.js";import{_ as V}from"./plugin-vueexport-helper-d7c00f7c.js";const $={class:"pic-item detail"},j={class:"pic-item preview"},I={class:"img-total"},T=L({__name:"BluePicCard",props:{src:null,item:null,url:null,imgList:null},setup(n){const i=n,r=u(P());let t=u(r.value?100:45);const f=N();let l=u(w.get("blueArchiveUrlSelect")!="drawing"),s=u(w.get("nameLanguage")||"name"),c=u(i.item[s.value]);k.on("blueArchiveUrlSelect",a=>{a=="drawing"?l.value=!1:l.value=!0}),k.on("setNameLanguage",a=>{s.value=a,i.item[s.value]?c.value=i.item[s.value]:c.value=i.item.name});const b=()=>{if(l.value){let a=i.url;if(!a){f.warning("\u6682\u65E0\u6709\u6548\u94FE\u63A5\uFF01");return}window.open(a,"_blank")}console.log(l.value),console.log(i.imgList,"list")};return(a,W)=>{const v=p("n-image"),z=p("n-ellipsis"),D=p("n-image-group");return o(),B("div",{class:"BluePicCard",onClick:b},[_(h("div",$,[d(v,{"object-fit":"contain",width:e(t),height:e(t),"preview-disabled":e(l),lazy:"",src:n.src},null,8,["width","height","preview-disabled","src"]),(o(!0),B(A,null,C(n.imgList,(x,y)=>_((o(),S(v,{width:e(t),height:e(t),key:y,"preview-disabled":e(l),lazy:"",src:x},null,8,["width","height","preview-disabled","src"])),[[m,!1]])),128)),d(z,{style:U(r.value?"max-width: 90px":"max-width: 50px;font-size: 12px;")},{default:g(()=>[E(F(e(c)),1)]),_:1},8,["style"])],512),[[m,e(l)]]),_(h("div",j,[d(D,null,{default:g(()=>[d(v,{"object-fit":"contain",width:e(t),height:e(t),"preview-disabled":e(l),lazy:"",src:n.src},null,8,["width","height","preview-disabled","src"]),(o(!0),B(A,null,C(n.imgList,(x,y)=>_((o(),S(v,{width:e(t),height:e(t),key:y,"preview-disabled":e(l),lazy:"",src:x},null,8,["width","height","preview-disabled","src"])),[[m,!1]])),128))]),_:1}),d(z,{style:U(r.value?"max-width: 90px":"max-width: 50px;font-size: 12px;")},{default:g(()=>[E(F(e(c)),1)]),_:1},8,["style"]),h("div",I,F(n.imgList.length)+"\u5F20",1)],512),[[m,!e(l)]])])}}});const H=V(T,[["__scopeId","data-v-d541cad3"]]),M=L({__name:"BlueUrlSelect",setup(n){const i=N(),r=u(P());let t=u(w.get("blueArchiveUrlSelect")||"wiki");const f=[{label:"wiki\u9875",value:"wiki"},{label:"\u7ACB\u7ED8",value:"drawing"}],l=(s,c)=>{t.value!=s&&(t.value=s,w.set("blueArchiveUrlSelect",s),k.emit("blueArchiveUrlSelect",s),i.success(`\u6210\u529F\u5207\u6362\u70B9\u51FB\u4E8B\u4EF6\u4E3A\uFF1A${c.label}`))};return(s,c)=>{const b=p("n-select"),a=p("n-space");return o(),S(a,{class:"UrlSelect",size:"large"},{default:g(()=>[_(h("span",null,"\u5207\u6362\u70B9\u51FB\u4E8B\u4EF6",512),[[m,r.value]]),d(b,{value:e(t),"onUpdate:value":l,options:f,style:U(r.value?"width: 200px":"")},null,8,["value","style"])]),_:1})}}});const J=V(M,[["__scopeId","data-v-ff50cbdd"]]);export{J as B,H as a};
