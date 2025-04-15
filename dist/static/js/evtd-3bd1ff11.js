const $={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function q(o,s,c){if(o==="mousemoveoutside"){const d=i=>{s.contains(i.target)||c(i)};return{mousemove:d,touchstart:d}}else if(o==="clickoutside"){let d=!1;const i=b=>{d=!s.contains(b.target)},u=b=>{!d||s.contains(b.target)||c(b)};return{mousedown:i,mouseup:u,touchstart:i,touchend:u}}return console.error(`[evtd/create-trap-handler]: name \`${o}\` is invalid. This could be a bug of evtd.`),{}}function S(o,s,c){const d=$[o];let i=d.get(s);i===void 0&&d.set(s,i=new WeakMap);let u=i.get(c);return u===void 0&&i.set(c,u=q(o,s,c)),u}function A(o,s,c,d){if(o==="mousemoveoutside"||o==="clickoutside"){const i=S(o,s,c);return Object.keys(i).forEach(u=>{G(u,document,i[u],d)}),!0}return!1}function B(o,s,c,d){if(o==="mousemoveoutside"||o==="clickoutside"){const i=S(o,s,c);return Object.keys(i).forEach(u=>{J(u,document,i[u],d)}),!0}return!1}function F(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const o=new WeakMap,s=new WeakMap;function c(){o.set(this,!0)}function d(){o.set(this,!0),s.set(this,!0)}function i(n,e,t){const r=n[e];return n[e]=function(){return t.apply(n,arguments),r.apply(n,arguments)},n}function u(n,e){n[e]=Event.prototype[e]}const b=new WeakMap,P=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function U(){var n;return(n=b.get(this))!==null&&n!==void 0?n:null}function W(n,e){P!==void 0&&Object.defineProperty(n,"currentTarget",{configurable:!0,enumerable:!0,get:e!=null?e:P.get})}const T={bubble:{},capture:{}},H={};function x(){const n=function(e){const{type:t,eventPhase:r,target:a,bubbles:p}=e;if(r===2)return;const w=r===1?"capture":"bubble";let f=a;const l=[];for(;f===null&&(f=window),l.push(f),f!==window;)f=f.parentNode||null;const h=T.capture[t],v=T.bubble[t];if(i(e,"stopPropagation",c),i(e,"stopImmediatePropagation",d),W(e,U),w==="capture"){if(h===void 0)return;for(let g=l.length-1;g>=0&&!o.has(e);--g){const m=l[g],k=h.get(m);if(k!==void 0){b.set(e,m);for(const E of k){if(s.has(e))break;E(e)}}if(g===0&&!p&&v!==void 0){const E=v.get(m);if(E!==void 0)for(const _ of E){if(s.has(e))break;_(e)}}}}else if(w==="bubble"){if(v===void 0)return;for(let g=0;g<l.length&&!o.has(e);++g){const m=l[g],k=v.get(m);if(k!==void 0){b.set(e,m);for(const E of k){if(s.has(e))break;E(e)}}}}u(e,"stopPropagation"),u(e,"stopImmediatePropagation"),W(e)};return n.displayName="evtdUnifiedHandler",n}function z(){const n=function(e){const{type:t,eventPhase:r}=e;if(r!==2)return;const a=H[t];a!==void 0&&a.forEach(p=>p(e))};return n.displayName="evtdUnifiedWindowEventHandler",n}const O=x(),j=z();function M(n,e){const t=T[n];return t[e]===void 0&&(t[e]=new Map,window.addEventListener(e,O,n==="capture")),t[e]}function I(n){return H[n]===void 0&&(H[n]=new Set,window.addEventListener(n,j)),H[n]}function D(n,e){let t=n.get(e);return t===void 0&&n.set(e,t=new Set),t}function C(n,e,t,r){const a=T[e][t];if(a!==void 0){const p=a.get(n);if(p!==void 0&&p.has(r))return!0}return!1}function y(n,e){const t=H[n];return!!(t!==void 0&&t.has(e))}function N(n,e,t,r){let a;if(typeof r=="object"&&r.once===!0?a=h=>{L(n,e,a,r),t(h)}:a=t,A(n,e,a,r))return;const w=r===!0||typeof r=="object"&&r.capture===!0?"capture":"bubble",f=M(w,n),l=D(f,e);if(l.has(a)||l.add(a),e===window){const h=I(n);h.has(a)||h.add(a)}}function L(n,e,t,r){if(B(n,e,t,r))return;const p=r===!0||typeof r=="object"&&r.capture===!0,w=p?"capture":"bubble",f=M(w,n),l=D(f,e);if(e===window&&!C(e,p?"bubble":"capture",n,t)&&y(n,t)){const v=H[n];v.delete(t),v.size===0&&(window.removeEventListener(n,j),H[n]=void 0)}l.has(t)&&l.delete(t),l.size===0&&f.delete(e),f.size===0&&(window.removeEventListener(n,O,w==="capture"),T[w][n]=void 0)}return{on:N,off:L}}const{on:G,off:J}=F();export{J as a,G as o};
