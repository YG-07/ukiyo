var c=[],ne=function(){return c.some(function(e){return e.activeTargets.length>0})},oe=function(){return c.some(function(e){return e.skippedTargets.length>0})},P="ResizeObserver loop completed with undelivered notifications.",se=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:P}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=P),window.dispatchEvent(e)},b;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(b||(b={}));var u=function(e){return Object.freeze(e)},ae=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,u(this)}return e}(),q=function(){function e(t,r,i,n){return this.x=t,this.y=r,this.width=i,this.height=n,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,u(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,i=t.y,n=t.top,s=t.right,o=t.bottom,h=t.left,d=t.width,v=t.height;return{x:r,y:i,top:n,right:s,bottom:o,left:h,width:d,height:v}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),C=function(e){return e instanceof SVGElement&&"getBBox"in e},G=function(e){if(C(e)){var t=e.getBBox(),r=t.width,i=t.height;return!r&&!i}var n=e,s=n.offsetWidth,o=n.offsetHeight;return!(s||o||e.getClientRects().length)},_=function(e){var t,r;if(e instanceof Element)return!0;var i=(r=(t=e)===null||t===void 0?void 0:t.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(i&&e instanceof i.Element)},ve=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},p=typeof window<"u"?window:{},z=new WeakMap,I=/auto|scroll/,ce=/^tb|vertical/,ue=/msie|trident/i.test(p.navigator&&p.navigator.userAgent),a=function(e){return parseFloat(e||"0")},f=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new ae((r?t:e)||0,(r?e:t)||0)},W=u({devicePixelContentBoxSize:f(),borderBoxSize:f(),contentBoxSize:f(),contentRect:new q(0,0,0,0)}),J=function(e,t){if(t===void 0&&(t=!1),z.has(e)&&!t)return z.get(e);if(G(e))return z.set(e,W),W;var r=getComputedStyle(e),i=C(e)&&e.ownerSVGElement&&e.getBBox(),n=!ue&&r.boxSizing==="border-box",s=ce.test(r.writingMode||""),o=!i&&I.test(r.overflowY||""),h=!i&&I.test(r.overflowX||""),d=i?0:a(r.paddingTop),v=i?0:a(r.paddingRight),R=i?0:a(r.paddingBottom),l=i?0:a(r.paddingLeft),Q=i?0:a(r.borderTopWidth),Z=i?0:a(r.borderRightWidth),$=i?0:a(r.borderBottomWidth),j=i?0:a(r.borderLeftWidth),D=l+v,k=d+R,y=j+Z,T=Q+$,N=h?e.offsetHeight-T-e.clientHeight:0,A=o?e.offsetWidth-y-e.clientWidth:0,ee=n?D+y:0,te=n?k+T:0,g=i?i.width:a(r.width)-ee-A,x=i?i.height:a(r.height)-te-N,re=g+D+A+y,ie=x+k+N+T,M=u({devicePixelContentBoxSize:f(Math.round(g*devicePixelRatio),Math.round(x*devicePixelRatio),s),borderBoxSize:f(re,ie,s),contentBoxSize:f(g,x,s),contentRect:new q(l,d,g,x)});return z.set(e,M),M},U=function(e,t,r){var i=J(e,r),n=i.borderBoxSize,s=i.contentBoxSize,o=i.devicePixelContentBoxSize;switch(t){case b.DEVICE_PIXEL_CONTENT_BOX:return o;case b.BORDER_BOX:return n;default:return s}},he=function(){function e(t){var r=J(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=u([r.borderBoxSize]),this.contentBoxSize=u([r.contentBoxSize]),this.devicePixelContentBoxSize=u([r.devicePixelContentBoxSize])}return e}(),Y=function(e){if(G(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t},de=function(){var e=1/0,t=[];c.forEach(function(o){if(o.activeTargets.length!==0){var h=[];o.activeTargets.forEach(function(v){var R=new he(v.target),l=Y(v.target);h.push(R),v.lastReportedSize=U(v.target,v.observedBox),l<e&&(e=l)}),t.push(function(){o.callback.call(o.observer,h,o.observer)}),o.activeTargets.splice(0,o.activeTargets.length)}});for(var r=0,i=t;r<i.length;r++){var n=i[r];n()}return e},L=function(e){c.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(n){n.isActive()&&(Y(n.target)>e?r.activeTargets.push(n):r.skippedTargets.push(n))})})},fe=function(){var e=0;for(L(e);ne();)e=de(),L(e);return oe()&&se(),e>0},m,K=[],le=function(){return K.splice(0).forEach(function(e){return e()})},pe=function(e){if(!m){var t=0,r=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return le()}).observe(r,i),m=function(){r.textContent=""+(t?t--:t++)}}K.push(e),m()},be=function(e){pe(function(){requestAnimationFrame(e)})},w=0,ge=function(){return!!w},xe=250,ze={attributes:!0,characterData:!0,childList:!0,subtree:!0},F=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],H=function(e){return e===void 0&&(e=0),Date.now()+e},B=!1,Ee=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=xe),!B){B=!0;var i=H(t);be(function(){var n=!1;try{n=fe()}finally{if(B=!1,t=i-H(),!ge())return;n?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,ze)};document.body?r():p.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),F.forEach(function(r){return p.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),F.forEach(function(r){return p.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),S=new Ee,V=function(e){!w&&e>0&&S.start(),w+=e,!w&&S.stop()},Oe=function(e){return!C(e)&&!ve(e)&&getComputedStyle(e).display==="inline"},we=function(){function e(t,r){this.target=t,this.observedBox=r||b.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=U(this.target,this.observedBox,!0);return Oe(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),Re=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}(),E=new WeakMap,X=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},O=function(){function e(){}return e.connect=function(t,r){var i=new Re(t,r);E.set(t,i)},e.observe=function(t,r,i){var n=E.get(t),s=n.observationTargets.length===0;X(n.observationTargets,r)<0&&(s&&c.push(n),n.observationTargets.push(new we(r,i&&i.box)),V(1),S.schedule())},e.unobserve=function(t,r){var i=E.get(t),n=X(i.observationTargets,r),s=i.observationTargets.length===1;n>=0&&(s&&c.splice(c.indexOf(i),1),i.observationTargets.splice(n,1),V(-1))},e.disconnect=function(t){var r=this,i=E.get(t);i.observationTargets.slice().forEach(function(n){return r.unobserve(t,n.target)}),i.activeTargets.splice(0,i.activeTargets.length)},e}(),ye=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");O.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!_(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");O.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!_(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");O.unobserve(this,t)},e.prototype.disconnect=function(){O.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();export{ye as R};
