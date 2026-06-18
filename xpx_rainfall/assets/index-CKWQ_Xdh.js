(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))s(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const ul of m.addedNodes)ul.tagName==="LINK"&&ul.rel==="modulepreload"&&s(ul)}).observe(document,{childList:!0,subtree:!0});function P(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerPolicy&&(m.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?m.credentials="include":g.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(g){if(g.ep)return;g.ep=!0;const m=P(g);fetch(g.href,m)}})();var cA={exports:{}},Oe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B1;function Ws(){if(B1)return Oe;B1=1;var S=Symbol.for("react.transitional.element"),b=Symbol.for("react.fragment");function P(s,g,m){var ul=null;if(m!==void 0&&(ul=""+m),g.key!==void 0&&(ul=""+g.key),"key"in g){m={};for(var il in g)il!=="key"&&(m[il]=g[il])}else m=g;return g=m.ref,{$$typeof:S,type:s,key:ul,ref:g!==void 0?g:null,props:m}}return Oe.Fragment=b,Oe.jsx=P,Oe.jsxs=P,Oe}var d1;function Js(){return d1||(d1=1,cA.exports=Ws()),cA.exports}var L=Js(),sA={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1;function Ks(){if(R1)return q;R1=1;var S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),ul=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),p=Symbol.iterator;function Y(r){return r===null||typeof r!="object"?null:(r=p&&r[p]||r["@@iterator"],typeof r=="function"?r:null)}var rl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,z={};function nl(r,y,C){this.props=r,this.context=y,this.refs=z,this.updater=C||rl}nl.prototype.isReactComponent={},nl.prototype.setState=function(r,y){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,y,"setState")},nl.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function bl(){}bl.prototype=nl.prototype;function k(r,y,C){this.props=r,this.context=y,this.refs=z,this.updater=C||rl}var Kl=k.prototype=new bl;Kl.constructor=k,j(Kl,nl.prototype),Kl.isPureReactComponent=!0;var El=Array.isArray;function Fl(){}var H={H:null,A:null,T:null,S:null},Gl=Object.prototype.hasOwnProperty;function gl(r,y,C){var O=C.ref;return{$$typeof:S,type:r,key:y,ref:O!==void 0?O:null,props:C}}function vn(r,y){return gl(r.type,y,r.props)}function kl(r){return typeof r=="object"&&r!==null&&r.$$typeof===S}function wl(r){var y={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(C){return y[C]})}var Vn=/\/+/g;function nn(r,y){return typeof r=="object"&&r!==null&&r.key!=null?wl(""+r.key):y.toString(36)}function an(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Fl,Fl):(r.status="pending",r.then(function(y){r.status==="pending"&&(r.status="fulfilled",r.value=y)},function(y){r.status==="pending"&&(r.status="rejected",r.reason=y)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function E(r,y,C,O,x){var Q=typeof r;(Q==="undefined"||Q==="boolean")&&(r=null);var Al=!1;if(r===null)Al=!0;else switch(Q){case"bigint":case"string":case"number":Al=!0;break;case"object":switch(r.$$typeof){case S:case b:Al=!0;break;case J:return Al=r._init,E(Al(r._payload),y,C,O,x)}}if(Al)return x=x(r),Al=O===""?"."+nn(r,0):O,El(x)?(C="",Al!=null&&(C=Al.replace(Vn,"$&/")+"/"),E(x,y,C,"",function(zn){return zn})):x!=null&&(kl(x)&&(x=vn(x,C+(x.key==null||r&&r.key===x.key?"":(""+x.key).replace(Vn,"$&/")+"/")+Al)),y.push(x)),1;Al=0;var xl=O===""?".":O+":";if(El(r))for(var Nl=0;Nl<r.length;Nl++)O=r[Nl],Q=xl+nn(O,Nl),Al+=E(O,y,C,Q,x);else if(Nl=Y(r),typeof Nl=="function")for(r=Nl.call(r),Nl=0;!(O=r.next()).done;)O=O.value,Q=xl+nn(O,Nl++),Al+=E(O,y,C,Q,x);else if(Q==="object"){if(typeof r.then=="function")return E(an(r),y,C,O,x);throw y=String(r),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.")}return Al}function N(r,y,C){if(r==null)return r;var O=[],x=0;return E(r,O,"","",function(Q){return y.call(C,Q,x++)}),O}function U(r){if(r._status===-1){var y=r._result;y=y(),y.then(function(C){(r._status===0||r._status===-1)&&(r._status=1,r._result=C)},function(C){(r._status===0||r._status===-1)&&(r._status=2,r._result=C)}),r._status===-1&&(r._status=0,r._result=y)}if(r._status===1)return r._result.default;throw r._result}var sl=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},fl={map:N,forEach:function(r,y,C){N(r,function(){y.apply(this,arguments)},C)},count:function(r){var y=0;return N(r,function(){y++}),y},toArray:function(r){return N(r,function(y){return y})||[]},only:function(r){if(!kl(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return q.Activity=X,q.Children=fl,q.Component=nl,q.Fragment=P,q.Profiler=g,q.PureComponent=k,q.StrictMode=s,q.Suspense=F,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,q.__COMPILER_RUNTIME={__proto__:null,c:function(r){return H.H.useMemoCache(r)}},q.cache=function(r){return function(){return r.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(r,y,C){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var O=j({},r.props),x=r.key;if(y!=null)for(Q in y.key!==void 0&&(x=""+y.key),y)!Gl.call(y,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&y.ref===void 0||(O[Q]=y[Q]);var Q=arguments.length-2;if(Q===1)O.children=C;else if(1<Q){for(var Al=Array(Q),xl=0;xl<Q;xl++)Al[xl]=arguments[xl+2];O.children=Al}return gl(r.type,x,O)},q.createContext=function(r){return r={$$typeof:ul,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:m,_context:r},r},q.createElement=function(r,y,C){var O,x={},Q=null;if(y!=null)for(O in y.key!==void 0&&(Q=""+y.key),y)Gl.call(y,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(x[O]=y[O]);var Al=arguments.length-2;if(Al===1)x.children=C;else if(1<Al){for(var xl=Array(Al),Nl=0;Nl<Al;Nl++)xl[Nl]=arguments[Nl+2];x.children=xl}if(r&&r.defaultProps)for(O in Al=r.defaultProps,Al)x[O]===void 0&&(x[O]=Al[O]);return gl(r,Q,x)},q.createRef=function(){return{current:null}},q.forwardRef=function(r){return{$$typeof:il,render:r}},q.isValidElement=kl,q.lazy=function(r){return{$$typeof:J,_payload:{_status:-1,_result:r},_init:U}},q.memo=function(r,y){return{$$typeof:d,type:r,compare:y===void 0?null:y}},q.startTransition=function(r){var y=H.T,C={};H.T=C;try{var O=r(),x=H.S;x!==null&&x(C,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(Fl,sl)}catch(Q){sl(Q)}finally{y!==null&&C.types!==null&&(y.types=C.types),H.T=y}},q.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},q.use=function(r){return H.H.use(r)},q.useActionState=function(r,y,C){return H.H.useActionState(r,y,C)},q.useCallback=function(r,y){return H.H.useCallback(r,y)},q.useContext=function(r){return H.H.useContext(r)},q.useDebugValue=function(){},q.useDeferredValue=function(r,y){return H.H.useDeferredValue(r,y)},q.useEffect=function(r,y){return H.H.useEffect(r,y)},q.useEffectEvent=function(r){return H.H.useEffectEvent(r)},q.useId=function(){return H.H.useId()},q.useImperativeHandle=function(r,y,C){return H.H.useImperativeHandle(r,y,C)},q.useInsertionEffect=function(r,y){return H.H.useInsertionEffect(r,y)},q.useLayoutEffect=function(r,y){return H.H.useLayoutEffect(r,y)},q.useMemo=function(r,y){return H.H.useMemo(r,y)},q.useOptimistic=function(r,y){return H.H.useOptimistic(r,y)},q.useReducer=function(r,y,C){return H.H.useReducer(r,y,C)},q.useRef=function(r){return H.H.useRef(r)},q.useState=function(r){return H.H.useState(r)},q.useSyncExternalStore=function(r,y,C){return H.H.useSyncExternalStore(r,y,C)},q.useTransition=function(){return H.H.useTransition()},q.version="19.2.7",q}var S1;function BA(){return S1||(S1=1,sA.exports=Ks()),sA.exports}var Z=BA(),fA={exports:{}},Xe={},LA={exports:{}},oA={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function ws(){return E1||(E1=1,(function(S){function b(E,N){var U=E.length;E.push(N);l:for(;0<U;){var sl=U-1>>>1,fl=E[sl];if(0<g(fl,N))E[sl]=N,E[U]=fl,U=sl;else break l}}function P(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var N=E[0],U=E.pop();if(U!==N){E[0]=U;l:for(var sl=0,fl=E.length,r=fl>>>1;sl<r;){var y=2*(sl+1)-1,C=E[y],O=y+1,x=E[O];if(0>g(C,U))O<fl&&0>g(x,C)?(E[sl]=x,E[O]=U,sl=O):(E[sl]=C,E[y]=U,sl=y);else if(O<fl&&0>g(x,U))E[sl]=x,E[O]=U,sl=O;else break l}}return N}function g(E,N){var U=E.sortIndex-N.sortIndex;return U!==0?U:E.id-N.id}if(S.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;S.unstable_now=function(){return m.now()}}else{var ul=Date,il=ul.now();S.unstable_now=function(){return ul.now()-il}}var F=[],d=[],J=1,X=null,p=3,Y=!1,rl=!1,j=!1,z=!1,nl=typeof setTimeout=="function"?setTimeout:null,bl=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function Kl(E){for(var N=P(d);N!==null;){if(N.callback===null)s(d);else if(N.startTime<=E)s(d),N.sortIndex=N.expirationTime,b(F,N);else break;N=P(d)}}function El(E){if(j=!1,Kl(E),!rl)if(P(F)!==null)rl=!0,Fl||(Fl=!0,wl());else{var N=P(d);N!==null&&an(El,N.startTime-E)}}var Fl=!1,H=-1,Gl=5,gl=-1;function vn(){return z?!0:!(S.unstable_now()-gl<Gl)}function kl(){if(z=!1,Fl){var E=S.unstable_now();gl=E;var N=!0;try{l:{rl=!1,j&&(j=!1,bl(H),H=-1),Y=!0;var U=p;try{n:{for(Kl(E),X=P(F);X!==null&&!(X.expirationTime>E&&vn());){var sl=X.callback;if(typeof sl=="function"){X.callback=null,p=X.priorityLevel;var fl=sl(X.expirationTime<=E);if(E=S.unstable_now(),typeof fl=="function"){X.callback=fl,Kl(E),N=!0;break n}X===P(F)&&s(F),Kl(E)}else s(F);X=P(F)}if(X!==null)N=!0;else{var r=P(d);r!==null&&an(El,r.startTime-E),N=!1}}break l}finally{X=null,p=U,Y=!1}N=void 0}}finally{N?wl():Fl=!1}}}var wl;if(typeof k=="function")wl=function(){k(kl)};else if(typeof MessageChannel<"u"){var Vn=new MessageChannel,nn=Vn.port2;Vn.port1.onmessage=kl,wl=function(){nn.postMessage(null)}}else wl=function(){nl(kl,0)};function an(E,N){H=nl(function(){E(S.unstable_now())},N)}S.unstable_IdlePriority=5,S.unstable_ImmediatePriority=1,S.unstable_LowPriority=4,S.unstable_NormalPriority=3,S.unstable_Profiling=null,S.unstable_UserBlockingPriority=2,S.unstable_cancelCallback=function(E){E.callback=null},S.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gl=0<E?Math.floor(1e3/E):5},S.unstable_getCurrentPriorityLevel=function(){return p},S.unstable_next=function(E){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var U=p;p=N;try{return E()}finally{p=U}},S.unstable_requestPaint=function(){z=!0},S.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var U=p;p=E;try{return N()}finally{p=U}},S.unstable_scheduleCallback=function(E,N,U){var sl=S.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?sl+U:sl):U=sl,E){case 1:var fl=-1;break;case 2:fl=250;break;case 5:fl=1073741823;break;case 4:fl=1e4;break;default:fl=5e3}return fl=U+fl,E={id:J++,callback:N,priorityLevel:E,startTime:U,expirationTime:fl,sortIndex:-1},U>sl?(E.sortIndex=U,b(d,E),P(F)===null&&E===P(d)&&(j?(bl(H),H=-1):j=!0,an(El,U-sl))):(E.sortIndex=fl,b(F,E),rl||Y||(rl=!0,Fl||(Fl=!0,wl()))),E},S.unstable_shouldYield=vn,S.unstable_wrapCallback=function(E){var N=p;return function(){var U=p;p=N;try{return E.apply(this,arguments)}finally{p=U}}}})(oA)),oA}var G1;function Qs(){return G1||(G1=1,LA.exports=ws()),LA.exports}var _A={exports:{}},Ql={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h1;function ks(){if(h1)return Ql;h1=1;var S=BA();function b(F){var d="https://react.dev/errors/"+F;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var J=2;J<arguments.length;J++)d+="&args[]="+encodeURIComponent(arguments[J])}return"Minified React error #"+F+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function P(){}var s={d:{f:P,r:function(){throw Error(b(522))},D:P,C:P,L:P,m:P,X:P,S:P,M:P},p:0,findDOMNode:null},g=Symbol.for("react.portal");function m(F,d,J){var X=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:g,key:X==null?null:""+X,children:F,containerInfo:d,implementation:J}}var ul=S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function il(F,d){if(F==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ql.createPortal=function(F,d){var J=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(b(299));return m(F,d,null,J)},Ql.flushSync=function(F){var d=ul.T,J=s.p;try{if(ul.T=null,s.p=2,F)return F()}finally{ul.T=d,s.p=J,s.d.f()}},Ql.preconnect=function(F,d){typeof F=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(F,d))},Ql.prefetchDNS=function(F){typeof F=="string"&&s.d.D(F)},Ql.preinit=function(F,d){if(typeof F=="string"&&d&&typeof d.as=="string"){var J=d.as,X=il(J,d.crossOrigin),p=typeof d.integrity=="string"?d.integrity:void 0,Y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;J==="style"?s.d.S(F,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:X,integrity:p,fetchPriority:Y}):J==="script"&&s.d.X(F,{crossOrigin:X,integrity:p,fetchPriority:Y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Ql.preinitModule=function(F,d){if(typeof F=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var J=il(d.as,d.crossOrigin);s.d.M(F,{crossOrigin:J,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(F)},Ql.preload=function(F,d){if(typeof F=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var J=d.as,X=il(J,d.crossOrigin);s.d.L(F,J,{crossOrigin:X,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Ql.preloadModule=function(F,d){if(typeof F=="string")if(d){var J=il(d.as,d.crossOrigin);s.d.m(F,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:J,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(F)},Ql.requestFormReset=function(F){s.d.r(F)},Ql.unstable_batchedUpdates=function(F,d){return F(d)},Ql.useFormState=function(F,d,J){return ul.H.useFormState(F,d,J)},Ql.useFormStatus=function(){return ul.H.useHostTransitionStatus()},Ql.version="19.2.7",Ql}var y1;function $s(){if(y1)return _A.exports;y1=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(b){console.error(b)}}return S(),_A.exports=ks(),_A.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function lf(){if(m1)return Xe;m1=1;var S=Qs(),b=BA(),P=$s();function s(l){var n="https://react.dev/errors/"+l;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+l+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function m(l){var n=l,a=l;if(l.alternate)for(;n.return;)n=n.return;else{l=n;do n=l,(n.flags&4098)!==0&&(a=n.return),l=n.return;while(l)}return n.tag===3?a:null}function ul(l){if(l.tag===13){var n=l.memoizedState;if(n===null&&(l=l.alternate,l!==null&&(n=l.memoizedState)),n!==null)return n.dehydrated}return null}function il(l){if(l.tag===31){var n=l.memoizedState;if(n===null&&(l=l.alternate,l!==null&&(n=l.memoizedState)),n!==null)return n.dehydrated}return null}function F(l){if(m(l)!==l)throw Error(s(188))}function d(l){var n=l.alternate;if(!n){if(n=m(l),n===null)throw Error(s(188));return n!==l?null:l}for(var a=l,t=n;;){var e=a.return;if(e===null)break;var u=e.alternate;if(u===null){if(t=e.return,t!==null){a=t;continue}break}if(e.child===u.child){for(u=e.child;u;){if(u===a)return F(e),l;if(u===t)return F(e),n;u=u.sibling}throw Error(s(188))}if(a.return!==t.return)a=e,t=u;else{for(var i=!1,A=e.child;A;){if(A===a){i=!0,a=e,t=u;break}if(A===t){i=!0,t=e,a=u;break}A=A.sibling}if(!i){for(A=u.child;A;){if(A===a){i=!0,a=u,t=e;break}if(A===t){i=!0,t=u,a=e;break}A=A.sibling}if(!i)throw Error(s(189))}}if(a.alternate!==t)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?l:n}function J(l){var n=l.tag;if(n===5||n===26||n===27||n===6)return l;for(l=l.child;l!==null;){if(n=J(l),n!==null)return n;l=l.sibling}return null}var X=Object.assign,p=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),rl=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),nl=Symbol.for("react.profiler"),bl=Symbol.for("react.consumer"),k=Symbol.for("react.context"),Kl=Symbol.for("react.forward_ref"),El=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),Gl=Symbol.for("react.lazy"),gl=Symbol.for("react.activity"),vn=Symbol.for("react.memo_cache_sentinel"),kl=Symbol.iterator;function wl(l){return l===null||typeof l!="object"?null:(l=kl&&l[kl]||l["@@iterator"],typeof l=="function"?l:null)}var Vn=Symbol.for("react.client.reference");function nn(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Vn?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case j:return"Fragment";case nl:return"Profiler";case z:return"StrictMode";case El:return"Suspense";case Fl:return"SuspenseList";case gl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case rl:return"Portal";case k:return l.displayName||"Context";case bl:return(l._context.displayName||"Context")+".Consumer";case Kl:var n=l.render;return l=l.displayName,l||(l=n.displayName||n.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case H:return n=l.displayName||null,n!==null?n:nn(l.type)||"Memo";case Gl:n=l._payload,l=l._init;try{return nn(l(n))}catch{}}return null}var an=Array.isArray,E=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},sl=[],fl=-1;function r(l){return{current:l}}function y(l){0>fl||(l.current=sl[fl],sl[fl]=null,fl--)}function C(l,n){fl++,sl[fl]=l.current,l.current=n}var O=r(null),x=r(null),Q=r(null),Al=r(null);function xl(l,n){switch(C(Q,n),C(x,l),C(O,null),n.nodeType){case 9:case 11:l=(l=n.documentElement)&&(l=l.namespaceURI)?Vr(l):0;break;default:if(l=n.tagName,n=n.namespaceURI)n=Vr(n),l=zr(n,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}y(O),C(O,l)}function Nl(){y(O),y(x),y(Q)}function zn(l){l.memoizedState!==null&&C(Al,l);var n=O.current,a=zr(n,l.type);n!==a&&(C(x,l),C(O,a))}function Qa(l){x.current===l&&(y(O),y(x)),Al.current===l&&(y(Al),Ce._currentValue=U)}var Mt,pe;function Yn(l){if(Mt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Mt=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mt+l+pe}var ka=!1;function Ut(l,n){if(!l||ka)return"";ka=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(n){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(B){var _=B}Reflect.construct(l,[],h)}else{try{h.call()}catch(B){_=B}l.call(h.prototype)}}else{try{throw Error()}catch(B){_=B}(h=l())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(B){if(B&&_&&typeof B.stack=="string")return[B.stack,_.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=t.DetermineComponentFrameRoot(),i=u[0],A=u[1];if(i&&A){var T=i.split(`
`),o=A.split(`
`);for(e=t=0;t<T.length&&!T[t].includes("DetermineComponentFrameRoot");)t++;for(;e<o.length&&!o[e].includes("DetermineComponentFrameRoot");)e++;if(t===T.length||e===o.length)for(t=T.length-1,e=o.length-1;1<=t&&0<=e&&T[t]!==o[e];)e--;for(;1<=t&&0<=e;t--,e--)if(T[t]!==o[e]){if(t!==1||e!==1)do if(t--,e--,0>e||T[t]!==o[e]){var R=`
`+T[t].replace(" at new "," at ");return l.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",l.displayName)),R}while(1<=t&&0<=e);break}}}finally{ka=!1,Error.prepareStackTrace=a}return(a=l?l.displayName||l.name:"")?Yn(a):""}function W(l,n){switch(l.tag){case 26:case 27:case 5:return Yn(l.type);case 16:return Yn("Lazy");case 13:return l.child!==n&&n!==null?Yn("Suspense Fallback"):Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return Ut(l.type,!1);case 11:return Ut(l.type.render,!1);case 1:return Ut(l.type,!0);case 31:return Yn("Activity");default:return""}}function Ll(l){try{var n="",a=null;do n+=W(l,a),a=l,l=l.return;while(l);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}var Il=Object.prototype.hasOwnProperty,hl=S.unstable_scheduleCallback,On=S.unstable_cancelCallback,xn=S.unstable_shouldYield,In=S.unstable_requestPaint,$l=S.unstable_now,k0=S.unstable_getCurrentPriorityLevel,dA=S.unstable_ImmediatePriority,RA=S.unstable_UserBlockingPriority,ge=S.unstable_NormalPriority,b1=S.unstable_LowPriority,SA=S.unstable_IdlePriority,F1=S.log,v1=S.unstable_setDisableYieldValue,Ht=null,cn=null;function Ta(l){if(typeof F1=="function"&&v1(l),cn&&typeof cn.setStrictMode=="function")try{cn.setStrictMode(Ht,l)}catch{}}var sn=Math.clz32?Math.clz32:p1,O1=Math.log,X1=Math.LN2;function p1(l){return l>>>=0,l===0?32:31-(O1(l)/X1|0)|0}var Ie=256,Pe=262144,Me=4194304;function pa(l){var n=l&42;if(n!==0)return n;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Ue(l,n,a){var t=l.pendingLanes;if(t===0)return 0;var e=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var A=t&134217727;return A!==0?(t=A&~u,t!==0?e=pa(t):(i&=A,i!==0?e=pa(i):a||(a=A&~l,a!==0&&(e=pa(a))))):(A=t&~u,A!==0?e=pa(A):i!==0?e=pa(i):a||(a=t&~l,a!==0&&(e=pa(a)))),e===0?0:n!==0&&n!==e&&(n&u)===0&&(u=e&-e,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:e}function Vt(l,n){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&n)===0}function g1(l,n){switch(l){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EA(){var l=Me;return Me<<=1,(Me&62914560)===0&&(Me=4194304),l}function $0(l){for(var n=[],a=0;31>a;a++)n.push(l);return n}function zt(l,n){l.pendingLanes|=n,n!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function I1(l,n,a,t,e,u){var i=l.pendingLanes;l.pendingLanes=a,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=a,l.entangledLanes&=a,l.errorRecoveryDisabledLanes&=a,l.shellSuspendCounter=0;var A=l.entanglements,T=l.expirationTimes,o=l.hiddenUpdates;for(a=i&~a;0<a;){var R=31-sn(a),h=1<<R;A[R]=0,T[R]=-1;var _=o[R];if(_!==null)for(o[R]=null,R=0;R<_.length;R++){var B=_[R];B!==null&&(B.lane&=-536870913)}a&=~h}t!==0&&GA(l,t,0),u!==0&&e===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~n))}function GA(l,n,a){l.pendingLanes|=n,l.suspendedLanes&=~n;var t=31-sn(n);l.entangledLanes|=n,l.entanglements[t]=l.entanglements[t]|1073741824|a&261930}function hA(l,n){var a=l.entangledLanes|=n;for(l=l.entanglements;a;){var t=31-sn(a),e=1<<t;e&n|l[t]&n&&(l[t]|=n),a&=~e}}function yA(l,n){var a=n&-n;return a=(a&42)!==0?1:lu(a),(a&(l.suspendedLanes|n))!==0?0:a}function lu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function nu(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function mA(){var l=N.p;return l!==0?l:(l=window.event,l===void 0?32:r1(l.type))}function NA(l,n){var a=N.p;try{return N.p=l,n()}finally{N.p=a}}var Da=Math.random().toString(36).slice(2),jl="__reactFiber$"+Da,tn="__reactProps$"+Da,$a="__reactContainer$"+Da,au="__reactEvents$"+Da,P1="__reactListeners$"+Da,M1="__reactHandles$"+Da,CA="__reactResources$"+Da,Yt="__reactMarker$"+Da;function tu(l){delete l[jl],delete l[tn],delete l[au],delete l[P1],delete l[M1]}function lt(l){var n=l[jl];if(n)return n;for(var a=l.parentNode;a;){if(n=a[$a]||a[jl]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(l=Jr(l);l!==null;){if(a=l[jl])return a;l=Jr(l)}return n}l=a,a=l.parentNode}return null}function nt(l){if(l=l[jl]||l[$a]){var n=l.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return l}return null}function xt(l){var n=l.tag;if(n===5||n===26||n===27||n===6)return l.stateNode;throw Error(s(33))}function at(l){var n=l[CA];return n||(n=l[CA]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function zl(l){l[Yt]=!0}var bA=new Set,FA={};function ga(l,n){tt(l,n),tt(l+"Capture",n)}function tt(l,n){for(FA[l]=n,l=0;l<n.length;l++)bA.add(n[l])}var U1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vA={},OA={};function H1(l){return Il.call(OA,l)?!0:Il.call(vA,l)?!1:U1.test(l)?OA[l]=!0:(vA[l]=!0,!1)}function He(l,n,a){if(H1(n))if(a===null)l.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":l.removeAttribute(n);return;case"boolean":var t=n.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){l.removeAttribute(n);return}}l.setAttribute(n,""+a)}}function Ve(l,n,a){if(a===null)l.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(n);return}l.setAttribute(n,""+a)}}function jn(l,n,a,t){if(t===null)l.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(a);return}l.setAttributeNS(n,a,""+t)}}function Sn(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function XA(l){var n=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function V1(l,n,a){var t=Object.getOwnPropertyDescriptor(l.constructor.prototype,n);if(!l.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var e=t.get,u=t.set;return Object.defineProperty(l,n,{configurable:!0,get:function(){return e.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(l,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){l._valueTracker=null,delete l[n]}}}}function eu(l){if(!l._valueTracker){var n=XA(l)?"checked":"value";l._valueTracker=V1(l,n,""+l[n])}}function pA(l){if(!l)return!1;var n=l._valueTracker;if(!n)return!0;var a=n.getValue(),t="";return l&&(t=XA(l)?l.checked?"true":"false":l.value),l=t,l!==a?(n.setValue(l),!0):!1}function ze(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var z1=/[\n"\\]/g;function En(l){return l.replace(z1,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function uu(l,n,a,t,e,u,i,A){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),n!=null?i==="number"?(n===0&&l.value===""||l.value!=n)&&(l.value=""+Sn(n)):l.value!==""+Sn(n)&&(l.value=""+Sn(n)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),n!=null?iu(l,i,Sn(n)):a!=null?iu(l,i,Sn(a)):t!=null&&l.removeAttribute("value"),e==null&&u!=null&&(l.defaultChecked=!!u),e!=null&&(l.checked=e&&typeof e!="function"&&typeof e!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?l.name=""+Sn(A):l.removeAttribute("name")}function gA(l,n,a,t,e,u,i,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){eu(l);return}a=a!=null?""+Sn(a):"",n=n!=null?""+Sn(n):a,A||n===l.value||(l.value=n),l.defaultValue=n}t=t??e,t=typeof t!="function"&&typeof t!="symbol"&&!!t,l.checked=A?l.checked:!!t,l.defaultChecked=!!t,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),eu(l)}function iu(l,n,a){n==="number"&&ze(l.ownerDocument)===l||l.defaultValue===""+a||(l.defaultValue=""+a)}function et(l,n,a,t){if(l=l.options,n){n={};for(var e=0;e<a.length;e++)n["$"+a[e]]=!0;for(a=0;a<l.length;a++)e=n.hasOwnProperty("$"+l[a].value),l[a].selected!==e&&(l[a].selected=e),e&&t&&(l[a].defaultSelected=!0)}else{for(a=""+Sn(a),n=null,e=0;e<l.length;e++){if(l[e].value===a){l[e].selected=!0,t&&(l[e].defaultSelected=!0);return}n!==null||l[e].disabled||(n=l[e])}n!==null&&(n.selected=!0)}}function IA(l,n,a){if(n!=null&&(n=""+Sn(n),n!==l.value&&(l.value=n),a==null)){l.defaultValue!==n&&(l.defaultValue=n);return}l.defaultValue=a!=null?""+Sn(a):""}function PA(l,n,a,t){if(n==null){if(t!=null){if(a!=null)throw Error(s(92));if(an(t)){if(1<t.length)throw Error(s(93));t=t[0]}a=t}a==null&&(a=""),n=a}a=Sn(n),l.defaultValue=a,t=l.textContent,t===a&&t!==""&&t!==null&&(l.value=t),eu(l)}function ut(l,n){if(n){var a=l.firstChild;if(a&&a===l.lastChild&&a.nodeType===3){a.nodeValue=n;return}}l.textContent=n}var Y1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function MA(l,n,a){var t=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?t?l.setProperty(n,""):n==="float"?l.cssFloat="":l[n]="":t?l.setProperty(n,a):typeof a!="number"||a===0||Y1.has(n)?n==="float"?l.cssFloat=a:l[n]=(""+a).trim():l[n]=a+"px"}function UA(l,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(l=l.style,a!=null){for(var t in a)!a.hasOwnProperty(t)||n!=null&&n.hasOwnProperty(t)||(t.indexOf("--")===0?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="");for(var e in n)t=n[e],n.hasOwnProperty(e)&&a[e]!==t&&MA(l,e,t)}else for(var u in n)n.hasOwnProperty(u)&&MA(l,u,n[u])}function Au(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ye(l){return j1.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Zn(){}var Tu=null;function Du(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var it=null,At=null;function HA(l){var n=nt(l);if(n&&(l=n.stateNode)){var a=l[tn]||null;l:switch(l=n.stateNode,n.type){case"input":if(uu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=l;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var t=a[n];if(t!==l&&t.form===l.form){var e=t[tn]||null;if(!e)throw Error(s(90));uu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(n=0;n<a.length;n++)t=a[n],t.form===l.form&&pA(t)}break l;case"textarea":IA(l,a.value,a.defaultValue);break l;case"select":n=a.value,n!=null&&et(l,!!a.multiple,n,!1)}}}var ru=!1;function VA(l,n,a){if(ru)return l(n,a);ru=!0;try{var t=l(n);return t}finally{if(ru=!1,(it!==null||At!==null)&&(F0(),it&&(n=it,l=At,At=it=null,HA(n),l)))for(n=0;n<l.length;n++)HA(l[n])}}function jt(l,n){var a=l.stateNode;if(a===null)return null;var t=a[tn]||null;if(t===null)return null;a=t[n];l:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(l=l.type,t=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!t;break l;default:l=!1}if(l)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(qn)try{var Zt={};Object.defineProperty(Zt,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Zt,Zt),window.removeEventListener("test",Zt,Zt)}catch{cu=!1}var ra=null,su=null,xe=null;function zA(){if(xe)return xe;var l,n=su,a=n.length,t,e="value"in ra?ra.value:ra.textContent,u=e.length;for(l=0;l<a&&n[l]===e[l];l++);var i=a-l;for(t=1;t<=i&&n[a-t]===e[u-t];t++);return xe=e.slice(l,1<t?1-t:void 0)}function je(l){var n=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&n===13&&(l=13)):l=n,l===10&&(l=13),32<=l||l===13?l:0}function Ze(){return!0}function YA(){return!1}function en(l){function n(a,t,e,u,i){this._reactName=a,this._targetInst=e,this.type=t,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var A in l)l.hasOwnProperty(A)&&(a=l[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ze:YA,this.isPropagationStopped=YA,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ze)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ze)},persist:function(){},isPersistent:Ze}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qe=en(Ia),qt=X({},Ia,{view:0,detail:0}),Z1=en(qt),fu,Lu,Wt,We=X({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Wt&&(Wt&&l.type==="mousemove"?(fu=l.screenX-Wt.screenX,Lu=l.screenY-Wt.screenY):Lu=fu=0,Wt=l),fu)},movementY:function(l){return"movementY"in l?l.movementY:Lu}}),xA=en(We),q1=X({},We,{dataTransfer:0}),W1=en(q1),J1=X({},qt,{relatedTarget:0}),ou=en(J1),K1=X({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),w1=en(K1),Q1=X({},Ia,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),k1=en(Q1),$1=X({},Ia,{data:0}),jA=en($1),lc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ac={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tc(l){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(l):(l=ac[l])?!!n[l]:!1}function _u(){return tc}var ec=X({},qt,{key:function(l){if(l.key){var n=lc[l.key]||l.key;if(n!=="Unidentified")return n}return l.type==="keypress"?(l=je(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?nc[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(l){return l.type==="keypress"?je(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?je(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),uc=en(ec),ic=X({},We,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ZA=en(ic),Ac=X({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),Tc=en(Ac),Dc=X({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),rc=en(Dc),cc=X({},We,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),sc=en(cc),fc=X({},Ia,{newState:0,oldState:0}),Lc=en(fc),oc=[9,13,27,32],Bu=qn&&"CompositionEvent"in window,Jt=null;qn&&"documentMode"in document&&(Jt=document.documentMode);var _c=qn&&"TextEvent"in window&&!Jt,qA=qn&&(!Bu||Jt&&8<Jt&&11>=Jt),WA=" ",JA=!1;function KA(l,n){switch(l){case"keyup":return oc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wA(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Tt=!1;function Bc(l,n){switch(l){case"compositionend":return wA(n);case"keypress":return n.which!==32?null:(JA=!0,WA);case"textInput":return l=n.data,l===WA&&JA?null:l;default:return null}}function dc(l,n){if(Tt)return l==="compositionend"||!Bu&&KA(l,n)?(l=zA(),xe=su=ra=null,Tt=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qA&&n.locale!=="ko"?null:n.data;default:return null}}var Rc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function QA(l){var n=l&&l.nodeName&&l.nodeName.toLowerCase();return n==="input"?!!Rc[l.type]:n==="textarea"}function kA(l,n,a,t){it?At?At.push(t):At=[t]:it=t,n=P0(n,"onChange"),0<n.length&&(a=new qe("onChange","change",null,a,t),l.push({event:a,listeners:n}))}var Kt=null,wt=null;function Sc(l){gr(l,0)}function Je(l){var n=xt(l);if(pA(n))return l}function $A(l,n){if(l==="change")return n}var lT=!1;if(qn){var du;if(qn){var Ru="oninput"in document;if(!Ru){var nT=document.createElement("div");nT.setAttribute("oninput","return;"),Ru=typeof nT.oninput=="function"}du=Ru}else du=!1;lT=du&&(!document.documentMode||9<document.documentMode)}function aT(){Kt&&(Kt.detachEvent("onpropertychange",tT),wt=Kt=null)}function tT(l){if(l.propertyName==="value"&&Je(wt)){var n=[];kA(n,wt,l,Du(l)),VA(Sc,n)}}function Ec(l,n,a){l==="focusin"?(aT(),Kt=n,wt=a,Kt.attachEvent("onpropertychange",tT)):l==="focusout"&&aT()}function Gc(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Je(wt)}function hc(l,n){if(l==="click")return Je(n)}function yc(l,n){if(l==="input"||l==="change")return Je(n)}function mc(l,n){return l===n&&(l!==0||1/l===1/n)||l!==l&&n!==n}var fn=typeof Object.is=="function"?Object.is:mc;function Qt(l,n){if(fn(l,n))return!0;if(typeof l!="object"||l===null||typeof n!="object"||n===null)return!1;var a=Object.keys(l),t=Object.keys(n);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var e=a[t];if(!Il.call(n,e)||!fn(l[e],n[e]))return!1}return!0}function eT(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function uT(l,n){var a=eT(l);l=0;for(var t;a;){if(a.nodeType===3){if(t=l+a.textContent.length,l<=n&&t>=n)return{node:a,offset:n-l};l=t}l:{for(;a;){if(a.nextSibling){a=a.nextSibling;break l}a=a.parentNode}a=void 0}a=eT(a)}}function iT(l,n){return l&&n?l===n?!0:l&&l.nodeType===3?!1:n&&n.nodeType===3?iT(l,n.parentNode):"contains"in l?l.contains(n):l.compareDocumentPosition?!!(l.compareDocumentPosition(n)&16):!1:!1}function AT(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var n=ze(l.document);n instanceof l.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)l=n.contentWindow;else break;n=ze(l.document)}return n}function Su(l){var n=l&&l.nodeName&&l.nodeName.toLowerCase();return n&&(n==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||n==="textarea"||l.contentEditable==="true")}var Nc=qn&&"documentMode"in document&&11>=document.documentMode,Dt=null,Eu=null,kt=null,Gu=!1;function TT(l,n,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||Dt==null||Dt!==ze(t)||(t=Dt,"selectionStart"in t&&Su(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),kt&&Qt(kt,t)||(kt=t,t=P0(Eu,"onSelect"),0<t.length&&(n=new qe("onSelect","select",null,n,a),l.push({event:n,listeners:t}),n.target=Dt)))}function Pa(l,n){var a={};return a[l.toLowerCase()]=n.toLowerCase(),a["Webkit"+l]="webkit"+n,a["Moz"+l]="moz"+n,a}var rt={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},hu={},DT={};qn&&(DT=document.createElement("div").style,"AnimationEvent"in window||(delete rt.animationend.animation,delete rt.animationiteration.animation,delete rt.animationstart.animation),"TransitionEvent"in window||delete rt.transitionend.transition);function Ma(l){if(hu[l])return hu[l];if(!rt[l])return l;var n=rt[l],a;for(a in n)if(n.hasOwnProperty(a)&&a in DT)return hu[l]=n[a];return l}var rT=Ma("animationend"),cT=Ma("animationiteration"),sT=Ma("animationstart"),Cc=Ma("transitionrun"),bc=Ma("transitionstart"),Fc=Ma("transitioncancel"),fT=Ma("transitionend"),LT=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Xn(l,n){LT.set(l,n),ga(n,[l])}var Ke=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},Gn=[],ct=0,mu=0;function we(){for(var l=ct,n=mu=ct=0;n<l;){var a=Gn[n];Gn[n++]=null;var t=Gn[n];Gn[n++]=null;var e=Gn[n];Gn[n++]=null;var u=Gn[n];if(Gn[n++]=null,t!==null&&e!==null){var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}u!==0&&oT(a,e,u)}}function Qe(l,n,a,t){Gn[ct++]=l,Gn[ct++]=n,Gn[ct++]=a,Gn[ct++]=t,mu|=t,l.lanes|=t,l=l.alternate,l!==null&&(l.lanes|=t)}function Nu(l,n,a,t){return Qe(l,n,a,t),ke(l)}function Ua(l,n){return Qe(l,null,null,n),ke(l)}function oT(l,n,a){l.lanes|=a;var t=l.alternate;t!==null&&(t.lanes|=a);for(var e=!1,u=l.return;u!==null;)u.childLanes|=a,t=u.alternate,t!==null&&(t.childLanes|=a),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(e=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,e&&n!==null&&(e=31-sn(a),l=u.hiddenUpdates,t=l[e],t===null?l[e]=[n]:t.push(n),n.lane=a|536870912),u):null}function ke(l){if(50<Se)throw Se=0,Ii=null,Error(s(185));for(var n=l.return;n!==null;)l=n,n=l.return;return l.tag===3?l.stateNode:null}var st={};function vc(l,n,a,t){this.tag=l,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(l,n,a,t){return new vc(l,n,a,t)}function Cu(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Wn(l,n){var a=l.alternate;return a===null?(a=Ln(l.tag,n,l.key,l.mode),a.elementType=l.elementType,a.type=l.type,a.stateNode=l.stateNode,a.alternate=l,l.alternate=a):(a.pendingProps=n,a.type=l.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=l.flags&65011712,a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,n=l.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=l.sibling,a.index=l.index,a.ref=l.ref,a.refCleanup=l.refCleanup,a}function _T(l,n){l.flags&=65011714;var a=l.alternate;return a===null?(l.childLanes=0,l.lanes=n,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,n=a.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l}function $e(l,n,a,t,e,u){var i=0;if(t=l,typeof l=="function")Cu(l)&&(i=1);else if(typeof l=="string")i=Is(l,a,O.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case gl:return l=Ln(31,a,n,e),l.elementType=gl,l.lanes=u,l;case j:return Ha(a.children,e,u,n);case z:i=8,e|=24;break;case nl:return l=Ln(12,a,n,e|2),l.elementType=nl,l.lanes=u,l;case El:return l=Ln(13,a,n,e),l.elementType=El,l.lanes=u,l;case Fl:return l=Ln(19,a,n,e),l.elementType=Fl,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case k:i=10;break l;case bl:i=9;break l;case Kl:i=11;break l;case H:i=14;break l;case Gl:i=16,t=null;break l}i=29,a=Error(s(130,l===null?"null":typeof l,"")),t=null}return n=Ln(i,a,n,e),n.elementType=l,n.type=t,n.lanes=u,n}function Ha(l,n,a,t){return l=Ln(7,l,t,n),l.lanes=a,l}function bu(l,n,a){return l=Ln(6,l,null,n),l.lanes=a,l}function BT(l){var n=Ln(18,null,null,0);return n.stateNode=l,n}function Fu(l,n,a){return n=Ln(4,l.children!==null?l.children:[],l.key,n),n.lanes=a,n.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},n}var dT=new WeakMap;function hn(l,n){if(typeof l=="object"&&l!==null){var a=dT.get(l);return a!==void 0?a:(n={value:l,source:n,stack:Ll(n)},dT.set(l,n),n)}return{value:l,source:n,stack:Ll(n)}}var ft=[],Lt=0,l0=null,$t=0,yn=[],mn=0,ca=null,Pn=1,Mn="";function Jn(l,n){ft[Lt++]=$t,ft[Lt++]=l0,l0=l,$t=n}function RT(l,n,a){yn[mn++]=Pn,yn[mn++]=Mn,yn[mn++]=ca,ca=l;var t=Pn;l=Mn;var e=32-sn(t)-1;t&=~(1<<e),a+=1;var u=32-sn(n)+e;if(30<u){var i=e-e%5;u=(t&(1<<i)-1).toString(32),t>>=i,e-=i,Pn=1<<32-sn(n)+e|a<<e|t,Mn=u+l}else Pn=1<<u|a<<e|t,Mn=l}function vu(l){l.return!==null&&(Jn(l,1),RT(l,1,0))}function Ou(l){for(;l===l0;)l0=ft[--Lt],ft[Lt]=null,$t=ft[--Lt],ft[Lt]=null;for(;l===ca;)ca=yn[--mn],yn[mn]=null,Mn=yn[--mn],yn[mn]=null,Pn=yn[--mn],yn[mn]=null}function ST(l,n){yn[mn++]=Pn,yn[mn++]=Mn,yn[mn++]=ca,Pn=n.id,Mn=n.overflow,ca=l}var Zl=null,yl=null,el=!1,sa=null,Nn=!1,Xu=Error(s(519));function fa(l){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw le(hn(n,l)),Xu}function ET(l){var n=l.stateNode,a=l.type,t=l.memoizedProps;switch(n[jl]=l,n[tn]=t,a){case"dialog":ll("cancel",n),ll("close",n);break;case"iframe":case"object":case"embed":ll("load",n);break;case"video":case"audio":for(a=0;a<Ge.length;a++)ll(Ge[a],n);break;case"source":ll("error",n);break;case"img":case"image":case"link":ll("error",n),ll("load",n);break;case"details":ll("toggle",n);break;case"input":ll("invalid",n),gA(n,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0);break;case"select":ll("invalid",n);break;case"textarea":ll("invalid",n),PA(n,t.value,t.defaultValue,t.children)}a=t.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||t.suppressHydrationWarning===!0||Ur(n.textContent,a)?(t.popover!=null&&(ll("beforetoggle",n),ll("toggle",n)),t.onScroll!=null&&ll("scroll",n),t.onScrollEnd!=null&&ll("scrollend",n),t.onClick!=null&&(n.onclick=Zn),n=!0):n=!1,n||fa(l,!0)}function GT(l){for(Zl=l.return;Zl;)switch(Zl.tag){case 5:case 31:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Zl=Zl.return}}function ot(l){if(l!==Zl)return!1;if(!el)return GT(l),el=!0,!1;var n=l.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=l.type,a=!(a!=="form"&&a!=="button")||wi(l.type,l.memoizedProps)),a=!a),a&&yl&&fa(l),GT(l),n===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));yl=Wr(l)}else if(n===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));yl=Wr(l)}else n===27?(n=yl,Ca(l.type)?(l=nA,nA=null,yl=l):yl=n):yl=Zl?bn(l.stateNode.nextSibling):null;return!0}function Va(){yl=Zl=null,el=!1}function pu(){var l=sa;return l!==null&&(Dn===null?Dn=l:Dn.push.apply(Dn,l),sa=null),l}function le(l){sa===null?sa=[l]:sa.push(l)}var gu=r(null),za=null,Kn=null;function La(l,n,a){C(gu,n._currentValue),n._currentValue=a}function wn(l){l._currentValue=gu.current,y(gu)}function Iu(l,n,a){for(;l!==null;){var t=l.alternate;if((l.childLanes&n)!==n?(l.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),l===a)break;l=l.return}}function Pu(l,n,a,t){var e=l.child;for(e!==null&&(e.return=l);e!==null;){var u=e.dependencies;if(u!==null){var i=e.child;u=u.firstContext;l:for(;u!==null;){var A=u;u=e;for(var T=0;T<n.length;T++)if(A.context===n[T]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),Iu(u.return,a,l),t||(i=null);break l}u=A.next}}else if(e.tag===18){if(i=e.return,i===null)throw Error(s(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Iu(i,a,l),i=null}else i=e.child;if(i!==null)i.return=e;else for(i=e;i!==null;){if(i===l){i=null;break}if(e=i.sibling,e!==null){e.return=i.return,i=e;break}i=i.return}e=i}}function _t(l,n,a,t){l=null;for(var e=n,u=!1;e!==null;){if(!u){if((e.flags&524288)!==0)u=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var i=e.alternate;if(i===null)throw Error(s(387));if(i=i.memoizedProps,i!==null){var A=e.type;fn(e.pendingProps.value,i.value)||(l!==null?l.push(A):l=[A])}}else if(e===Al.current){if(i=e.alternate,i===null)throw Error(s(387));i.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(l!==null?l.push(Ce):l=[Ce])}e=e.return}l!==null&&Pu(n,l,a,t),n.flags|=262144}function n0(l){for(l=l.firstContext;l!==null;){if(!fn(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ya(l){za=l,Kn=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function ql(l){return hT(za,l)}function a0(l,n){return za===null&&Ya(l),hT(l,n)}function hT(l,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Kn===null){if(l===null)throw Error(s(308));Kn=n,l.dependencies={lanes:0,firstContext:n},l.flags|=524288}else Kn=Kn.next=n;return a}var Oc=typeof AbortController<"u"?AbortController:function(){var l=[],n=this.signal={aborted:!1,addEventListener:function(a,t){l.push(t)}};this.abort=function(){n.aborted=!0,l.forEach(function(a){return a()})}},Xc=S.unstable_scheduleCallback,pc=S.unstable_NormalPriority,Pl={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Oc,data:new Map,refCount:0}}function ne(l){l.refCount--,l.refCount===0&&Xc(pc,function(){l.controller.abort()})}var ae=null,Uu=0,Bt=0,dt=null;function gc(l,n){if(ae===null){var a=ae=[];Uu=0,Bt=zi(),dt={status:"pending",value:void 0,then:function(t){a.push(t)}}}return Uu++,n.then(yT,yT),n}function yT(){if(--Uu===0&&ae!==null){dt!==null&&(dt.status="fulfilled");var l=ae;ae=null,Bt=0,dt=null;for(var n=0;n<l.length;n++)(0,l[n])()}}function Ic(l,n){var a=[],t={status:"pending",value:null,reason:null,then:function(e){a.push(e)}};return l.then(function(){t.status="fulfilled",t.value=n;for(var e=0;e<a.length;e++)(0,a[e])(n)},function(e){for(t.status="rejected",t.reason=e,e=0;e<a.length;e++)(0,a[e])(void 0)}),t}var mT=E.S;E.S=function(l,n){Tr=$l(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gc(l,n),mT!==null&&mT(l,n)};var xa=r(null);function Hu(){var l=xa.current;return l!==null?l:Sl.pooledCache}function t0(l,n){n===null?C(xa,xa.current):C(xa,n.pool)}function NT(){var l=Hu();return l===null?null:{parent:Pl._currentValue,pool:l}}var Rt=Error(s(460)),Vu=Error(s(474)),e0=Error(s(542)),u0={then:function(){}};function CT(l){return l=l.status,l==="fulfilled"||l==="rejected"}function bT(l,n,a){switch(a=l[a],a===void 0?l.push(n):a!==n&&(n.then(Zn,Zn),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw l=n.reason,vT(l),l;default:if(typeof n.status=="string")n.then(Zn,Zn);else{if(l=Sl,l!==null&&100<l.shellSuspendCounter)throw Error(s(482));l=n,l.status="pending",l.then(function(t){if(n.status==="pending"){var e=n;e.status="fulfilled",e.value=t}},function(t){if(n.status==="pending"){var e=n;e.status="rejected",e.reason=t}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw l=n.reason,vT(l),l}throw Za=n,Rt}}function ja(l){try{var n=l._init;return n(l._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Za=a,Rt):a}}var Za=null;function FT(){if(Za===null)throw Error(s(459));var l=Za;return Za=null,l}function vT(l){if(l===Rt||l===e0)throw Error(s(483))}var St=null,te=0;function i0(l){var n=te;return te+=1,St===null&&(St=[]),bT(St,l,n)}function ee(l,n){n=n.props.ref,l.ref=n!==void 0?n:null}function A0(l,n){throw n.$$typeof===p?Error(s(525)):(l=Object.prototype.toString.call(n),Error(s(31,l==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":l)))}function OT(l){function n(c,D){if(l){var f=c.deletions;f===null?(c.deletions=[D],c.flags|=16):f.push(D)}}function a(c,D){if(!l)return null;for(;D!==null;)n(c,D),D=D.sibling;return null}function t(c){for(var D=new Map;c!==null;)c.key!==null?D.set(c.key,c):D.set(c.index,c),c=c.sibling;return D}function e(c,D){return c=Wn(c,D),c.index=0,c.sibling=null,c}function u(c,D,f){return c.index=f,l?(f=c.alternate,f!==null?(f=f.index,f<D?(c.flags|=67108866,D):f):(c.flags|=67108866,D)):(c.flags|=1048576,D)}function i(c){return l&&c.alternate===null&&(c.flags|=67108866),c}function A(c,D,f,G){return D===null||D.tag!==6?(D=bu(f,c.mode,G),D.return=c,D):(D=e(D,f),D.return=c,D)}function T(c,D,f,G){var M=f.type;return M===j?R(c,D,f.props.children,G,f.key):D!==null&&(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gl&&ja(M)===D.type)?(D=e(D,f.props),ee(D,f),D.return=c,D):(D=$e(f.type,f.key,f.props,null,c.mode,G),ee(D,f),D.return=c,D)}function o(c,D,f,G){return D===null||D.tag!==4||D.stateNode.containerInfo!==f.containerInfo||D.stateNode.implementation!==f.implementation?(D=Fu(f,c.mode,G),D.return=c,D):(D=e(D,f.children||[]),D.return=c,D)}function R(c,D,f,G,M){return D===null||D.tag!==7?(D=Ha(f,c.mode,G,M),D.return=c,D):(D=e(D,f),D.return=c,D)}function h(c,D,f){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=bu(""+D,c.mode,f),D.return=c,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Y:return f=$e(D.type,D.key,D.props,null,c.mode,f),ee(f,D),f.return=c,f;case rl:return D=Fu(D,c.mode,f),D.return=c,D;case Gl:return D=ja(D),h(c,D,f)}if(an(D)||wl(D))return D=Ha(D,c.mode,f,null),D.return=c,D;if(typeof D.then=="function")return h(c,i0(D),f);if(D.$$typeof===k)return h(c,a0(c,D),f);A0(c,D)}return null}function _(c,D,f,G){var M=D!==null?D.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return M!==null?null:A(c,D,""+f,G);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Y:return f.key===M?T(c,D,f,G):null;case rl:return f.key===M?o(c,D,f,G):null;case Gl:return f=ja(f),_(c,D,f,G)}if(an(f)||wl(f))return M!==null?null:R(c,D,f,G,null);if(typeof f.then=="function")return _(c,D,i0(f),G);if(f.$$typeof===k)return _(c,D,a0(c,f),G);A0(c,f)}return null}function B(c,D,f,G,M){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return c=c.get(f)||null,A(D,c,""+G,M);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Y:return c=c.get(G.key===null?f:G.key)||null,T(D,c,G,M);case rl:return c=c.get(G.key===null?f:G.key)||null,o(D,c,G,M);case Gl:return G=ja(G),B(c,D,f,G,M)}if(an(G)||wl(G))return c=c.get(f)||null,R(D,c,G,M,null);if(typeof G.then=="function")return B(c,D,f,i0(G),M);if(G.$$typeof===k)return B(c,D,f,a0(D,G),M);A0(D,G)}return null}function v(c,D,f,G){for(var M=null,Tl=null,I=D,w=D=0,tl=null;I!==null&&w<f.length;w++){I.index>w?(tl=I,I=null):tl=I.sibling;var Dl=_(c,I,f[w],G);if(Dl===null){I===null&&(I=tl);break}l&&I&&Dl.alternate===null&&n(c,I),D=u(Dl,D,w),Tl===null?M=Dl:Tl.sibling=Dl,Tl=Dl,I=tl}if(w===f.length)return a(c,I),el&&Jn(c,w),M;if(I===null){for(;w<f.length;w++)I=h(c,f[w],G),I!==null&&(D=u(I,D,w),Tl===null?M=I:Tl.sibling=I,Tl=I);return el&&Jn(c,w),M}for(I=t(I);w<f.length;w++)tl=B(I,c,w,f[w],G),tl!==null&&(l&&tl.alternate!==null&&I.delete(tl.key===null?w:tl.key),D=u(tl,D,w),Tl===null?M=tl:Tl.sibling=tl,Tl=tl);return l&&I.forEach(function(Xa){return n(c,Xa)}),el&&Jn(c,w),M}function V(c,D,f,G){if(f==null)throw Error(s(151));for(var M=null,Tl=null,I=D,w=D=0,tl=null,Dl=f.next();I!==null&&!Dl.done;w++,Dl=f.next()){I.index>w?(tl=I,I=null):tl=I.sibling;var Xa=_(c,I,Dl.value,G);if(Xa===null){I===null&&(I=tl);break}l&&I&&Xa.alternate===null&&n(c,I),D=u(Xa,D,w),Tl===null?M=Xa:Tl.sibling=Xa,Tl=Xa,I=tl}if(Dl.done)return a(c,I),el&&Jn(c,w),M;if(I===null){for(;!Dl.done;w++,Dl=f.next())Dl=h(c,Dl.value,G),Dl!==null&&(D=u(Dl,D,w),Tl===null?M=Dl:Tl.sibling=Dl,Tl=Dl);return el&&Jn(c,w),M}for(I=t(I);!Dl.done;w++,Dl=f.next())Dl=B(I,c,w,Dl.value,G),Dl!==null&&(l&&Dl.alternate!==null&&I.delete(Dl.key===null?w:Dl.key),D=u(Dl,D,w),Tl===null?M=Dl:Tl.sibling=Dl,Tl=Dl);return l&&I.forEach(function(qs){return n(c,qs)}),el&&Jn(c,w),M}function Rl(c,D,f,G){if(typeof f=="object"&&f!==null&&f.type===j&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Y:l:{for(var M=f.key;D!==null;){if(D.key===M){if(M=f.type,M===j){if(D.tag===7){a(c,D.sibling),G=e(D,f.props.children),G.return=c,c=G;break l}}else if(D.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gl&&ja(M)===D.type){a(c,D.sibling),G=e(D,f.props),ee(G,f),G.return=c,c=G;break l}a(c,D);break}else n(c,D);D=D.sibling}f.type===j?(G=Ha(f.props.children,c.mode,G,f.key),G.return=c,c=G):(G=$e(f.type,f.key,f.props,null,c.mode,G),ee(G,f),G.return=c,c=G)}return i(c);case rl:l:{for(M=f.key;D!==null;){if(D.key===M)if(D.tag===4&&D.stateNode.containerInfo===f.containerInfo&&D.stateNode.implementation===f.implementation){a(c,D.sibling),G=e(D,f.children||[]),G.return=c,c=G;break l}else{a(c,D);break}else n(c,D);D=D.sibling}G=Fu(f,c.mode,G),G.return=c,c=G}return i(c);case Gl:return f=ja(f),Rl(c,D,f,G)}if(an(f))return v(c,D,f,G);if(wl(f)){if(M=wl(f),typeof M!="function")throw Error(s(150));return f=M.call(f),V(c,D,f,G)}if(typeof f.then=="function")return Rl(c,D,i0(f),G);if(f.$$typeof===k)return Rl(c,D,a0(c,f),G);A0(c,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,D!==null&&D.tag===6?(a(c,D.sibling),G=e(D,f),G.return=c,c=G):(a(c,D),G=bu(f,c.mode,G),G.return=c,c=G),i(c)):a(c,D)}return function(c,D,f,G){try{te=0;var M=Rl(c,D,f,G);return St=null,M}catch(I){if(I===Rt||I===e0)throw I;var Tl=Ln(29,I,null,c.mode);return Tl.lanes=G,Tl.return=c,Tl}finally{}}}var qa=OT(!0),XT=OT(!1),oa=!1;function zu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(l,n){l=l.updateQueue,n.updateQueue===l&&(n.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function _a(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function Ba(l,n,a){var t=l.updateQueue;if(t===null)return null;if(t=t.shared,(cl&2)!==0){var e=t.pending;return e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n,n=ke(l),oT(l,null,a),n}return Qe(l,t,n,a),ke(l)}function ue(l,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var t=n.lanes;t&=l.pendingLanes,a|=t,n.lanes=a,hA(l,a)}}function xu(l,n){var a=l.updateQueue,t=l.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var e=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?e=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?e=u=n:u=u.next=n}else e=u=n;a={baseState:t.baseState,firstBaseUpdate:e,lastBaseUpdate:u,shared:t.shared,callbacks:t.callbacks},l.updateQueue=a;return}l=a.lastBaseUpdate,l===null?a.firstBaseUpdate=n:l.next=n,a.lastBaseUpdate=n}var ju=!1;function ie(){if(ju){var l=dt;if(l!==null)throw l}}function Ae(l,n,a,t){ju=!1;var e=l.updateQueue;oa=!1;var u=e.firstBaseUpdate,i=e.lastBaseUpdate,A=e.shared.pending;if(A!==null){e.shared.pending=null;var T=A,o=T.next;T.next=null,i===null?u=o:i.next=o,i=T;var R=l.alternate;R!==null&&(R=R.updateQueue,A=R.lastBaseUpdate,A!==i&&(A===null?R.firstBaseUpdate=o:A.next=o,R.lastBaseUpdate=T))}if(u!==null){var h=e.baseState;i=0,R=o=T=null,A=u;do{var _=A.lane&-536870913,B=_!==A.lane;if(B?(al&_)===_:(t&_)===_){_!==0&&_===Bt&&(ju=!0),R!==null&&(R=R.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});l:{var v=l,V=A;_=n;var Rl=a;switch(V.tag){case 1:if(v=V.payload,typeof v=="function"){h=v.call(Rl,h,_);break l}h=v;break l;case 3:v.flags=v.flags&-65537|128;case 0:if(v=V.payload,_=typeof v=="function"?v.call(Rl,h,_):v,_==null)break l;h=X({},h,_);break l;case 2:oa=!0}}_=A.callback,_!==null&&(l.flags|=64,B&&(l.flags|=8192),B=e.callbacks,B===null?e.callbacks=[_]:B.push(_))}else B={lane:_,tag:A.tag,payload:A.payload,callback:A.callback,next:null},R===null?(o=R=B,T=h):R=R.next=B,i|=_;if(A=A.next,A===null){if(A=e.shared.pending,A===null)break;B=A,A=B.next,B.next=null,e.lastBaseUpdate=B,e.shared.pending=null}}while(!0);R===null&&(T=h),e.baseState=T,e.firstBaseUpdate=o,e.lastBaseUpdate=R,u===null&&(e.shared.lanes=0),Ga|=i,l.lanes=i,l.memoizedState=h}}function pT(l,n){if(typeof l!="function")throw Error(s(191,l));l.call(n)}function gT(l,n){var a=l.callbacks;if(a!==null)for(l.callbacks=null,l=0;l<a.length;l++)pT(a[l],n)}var Et=r(null),T0=r(0);function IT(l,n){l=ua,C(T0,l),C(Et,n),ua=l|n.baseLanes}function Zu(){C(T0,ua),C(Et,Et.current)}function qu(){ua=T0.current,y(Et),y(T0)}var on=r(null),Cn=null;function da(l){var n=l.alternate;C(Xl,Xl.current&1),C(on,l),Cn===null&&(n===null||Et.current!==null||n.memoizedState!==null)&&(Cn=l)}function Wu(l){C(Xl,Xl.current),C(on,l),Cn===null&&(Cn=l)}function PT(l){l.tag===22?(C(Xl,Xl.current),C(on,l),Cn===null&&(Cn=l)):Ra()}function Ra(){C(Xl,Xl.current),C(on,on.current)}function _n(l){y(on),Cn===l&&(Cn=null),y(Xl)}var Xl=r(0);function D0(l){for(var n=l;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$i(a)||lA(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===l)break;for(;n.sibling===null;){if(n.return===null||n.return===l)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qn=0,K=null,Bl=null,Ml=null,r0=!1,Gt=!1,Wa=!1,c0=0,Te=0,ht=null,Pc=0;function vl(){throw Error(s(321))}function Ju(l,n){if(n===null)return!1;for(var a=0;a<n.length&&a<l.length;a++)if(!fn(l[a],n[a]))return!1;return!0}function Ku(l,n,a,t,e,u){return Qn=u,K=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,E.H=l===null||l.memoizedState===null?RD:ri,Wa=!1,u=a(t,e),Wa=!1,Gt&&(u=UT(n,a,t,e)),MT(l),u}function MT(l){E.H=ce;var n=Bl!==null&&Bl.next!==null;if(Qn=0,Ml=Bl=K=null,r0=!1,Te=0,ht=null,n)throw Error(s(300));l===null||Ul||(l=l.dependencies,l!==null&&n0(l)&&(Ul=!0))}function UT(l,n,a,t){K=l;var e=0;do{if(Gt&&(ht=null),Te=0,Gt=!1,25<=e)throw Error(s(301));if(e+=1,Ml=Bl=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}E.H=SD,u=n(a,t)}while(Gt);return u}function Mc(){var l=E.H,n=l.useState()[0];return n=typeof n.then=="function"?De(n):n,l=l.useState()[0],(Bl!==null?Bl.memoizedState:null)!==l&&(K.flags|=1024),n}function wu(){var l=c0!==0;return c0=0,l}function Qu(l,n,a){n.updateQueue=l.updateQueue,n.flags&=-2053,l.lanes&=~a}function ku(l){if(r0){for(l=l.memoizedState;l!==null;){var n=l.queue;n!==null&&(n.pending=null),l=l.next}r0=!1}Qn=0,Ml=Bl=K=null,Gt=!1,Te=c0=0,ht=null}function ln(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ml===null?K.memoizedState=Ml=l:Ml=Ml.next=l,Ml}function pl(){if(Bl===null){var l=K.alternate;l=l!==null?l.memoizedState:null}else l=Bl.next;var n=Ml===null?K.memoizedState:Ml.next;if(n!==null)Ml=n,Bl=l;else{if(l===null)throw K.alternate===null?Error(s(467)):Error(s(310));Bl=l,l={memoizedState:Bl.memoizedState,baseState:Bl.baseState,baseQueue:Bl.baseQueue,queue:Bl.queue,next:null},Ml===null?K.memoizedState=Ml=l:Ml=Ml.next=l}return Ml}function s0(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function De(l){var n=Te;return Te+=1,ht===null&&(ht=[]),l=bT(ht,l,n),n=K,(Ml===null?n.memoizedState:Ml.next)===null&&(n=n.alternate,E.H=n===null||n.memoizedState===null?RD:ri),l}function f0(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return De(l);if(l.$$typeof===k)return ql(l)}throw Error(s(438,String(l)))}function $u(l){var n=null,a=K.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var t=K.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(n={data:t.data.map(function(e){return e.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=s0(),K.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(l),t=0;t<l;t++)a[t]=vn;return n.index++,a}function kn(l,n){return typeof n=="function"?n(l):n}function L0(l){var n=pl();return li(n,Bl,l)}function li(l,n,a){var t=l.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=a;var e=l.baseQueue,u=t.pending;if(u!==null){if(e!==null){var i=e.next;e.next=u.next,u.next=i}n.baseQueue=e=u,t.pending=null}if(u=l.baseState,e===null)l.memoizedState=u;else{n=e.next;var A=i=null,T=null,o=n,R=!1;do{var h=o.lane&-536870913;if(h!==o.lane?(al&h)===h:(Qn&h)===h){var _=o.revertLane;if(_===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),h===Bt&&(R=!0);else if((Qn&_)===_){o=o.next,_===Bt&&(R=!0);continue}else h={lane:0,revertLane:o.revertLane,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},T===null?(A=T=h,i=u):T=T.next=h,K.lanes|=_,Ga|=_;h=o.action,Wa&&a(u,h),u=o.hasEagerState?o.eagerState:a(u,h)}else _={lane:h,revertLane:o.revertLane,gesture:o.gesture,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},T===null?(A=T=_,i=u):T=T.next=_,K.lanes|=h,Ga|=h;o=o.next}while(o!==null&&o!==n);if(T===null?i=u:T.next=A,!fn(u,l.memoizedState)&&(Ul=!0,R&&(a=dt,a!==null)))throw a;l.memoizedState=u,l.baseState=i,l.baseQueue=T,t.lastRenderedState=u}return e===null&&(t.lanes=0),[l.memoizedState,t.dispatch]}function ni(l){var n=pl(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=l;var t=a.dispatch,e=a.pending,u=n.memoizedState;if(e!==null){a.pending=null;var i=e=e.next;do u=l(u,i.action),i=i.next;while(i!==e);fn(u,n.memoizedState)||(Ul=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,t]}function HT(l,n,a){var t=K,e=pl(),u=el;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var i=!fn((Bl||e).memoizedState,a);if(i&&(e.memoizedState=a,Ul=!0),e=e.queue,ei(YT.bind(null,t,e,l),[l]),e.getSnapshot!==n||i||Ml!==null&&Ml.memoizedState.tag&1){if(t.flags|=2048,yt(9,{destroy:void 0},zT.bind(null,t,e,a,n),null),Sl===null)throw Error(s(349));u||(Qn&127)!==0||VT(t,n,a)}return a}function VT(l,n,a){l.flags|=16384,l={getSnapshot:n,value:a},n=K.updateQueue,n===null?(n=s0(),K.updateQueue=n,n.stores=[l]):(a=n.stores,a===null?n.stores=[l]:a.push(l))}function zT(l,n,a,t){n.value=a,n.getSnapshot=t,xT(n)&&jT(l)}function YT(l,n,a){return a(function(){xT(n)&&jT(l)})}function xT(l){var n=l.getSnapshot;l=l.value;try{var a=n();return!fn(l,a)}catch{return!0}}function jT(l){var n=Ua(l,2);n!==null&&rn(n,l,2)}function ai(l){var n=ln();if(typeof l=="function"){var a=l;if(l=a(),Wa){Ta(!0);try{a()}finally{Ta(!1)}}}return n.memoizedState=n.baseState=l,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:l},n}function ZT(l,n,a,t){return l.baseState=a,li(l,Bl,typeof t=="function"?t:kn)}function Uc(l,n,a,t,e){if(B0(l))throw Error(s(485));if(l=n.action,l!==null){var u={payload:e,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};E.T!==null?a(!0):u.isTransition=!1,t(u),a=n.pending,a===null?(u.next=n.pending=u,qT(n,u)):(u.next=a.next,n.pending=a.next=u)}}function qT(l,n){var a=n.action,t=n.payload,e=l.state;if(n.isTransition){var u=E.T,i={};E.T=i;try{var A=a(e,t),T=E.S;T!==null&&T(i,A),WT(l,n,A)}catch(o){ti(l,n,o)}finally{u!==null&&i.types!==null&&(u.types=i.types),E.T=u}}else try{u=a(e,t),WT(l,n,u)}catch(o){ti(l,n,o)}}function WT(l,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(t){JT(l,n,t)},function(t){return ti(l,n,t)}):JT(l,n,a)}function JT(l,n,a){n.status="fulfilled",n.value=a,KT(n),l.state=a,n=l.pending,n!==null&&(a=n.next,a===n?l.pending=null:(a=a.next,n.next=a,qT(l,a)))}function ti(l,n,a){var t=l.pending;if(l.pending=null,t!==null){t=t.next;do n.status="rejected",n.reason=a,KT(n),n=n.next;while(n!==t)}l.action=null}function KT(l){l=l.listeners;for(var n=0;n<l.length;n++)(0,l[n])()}function wT(l,n){return n}function QT(l,n){if(el){var a=Sl.formState;if(a!==null){l:{var t=K;if(el){if(yl){n:{for(var e=yl,u=Nn;e.nodeType!==8;){if(!u){e=null;break n}if(e=bn(e.nextSibling),e===null){e=null;break n}}u=e.data,e=u==="F!"||u==="F"?e:null}if(e){yl=bn(e.nextSibling),t=e.data==="F!";break l}}fa(t)}t=!1}t&&(n=a[0])}}return a=ln(),a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wT,lastRenderedState:n},a.queue=t,a=_D.bind(null,K,t),t.dispatch=a,t=ai(!1),u=Di.bind(null,K,!1,t.queue),t=ln(),e={state:n,dispatch:null,action:l,pending:null},t.queue=e,a=Uc.bind(null,K,e,u,a),e.dispatch=a,t.memoizedState=l,[n,a,!1]}function kT(l){var n=pl();return $T(n,Bl,l)}function $T(l,n,a){if(n=li(l,n,wT)[0],l=L0(kn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var t=De(n)}catch(i){throw i===Rt?e0:i}else t=n;n=pl();var e=n.queue,u=e.dispatch;return a!==n.memoizedState&&(K.flags|=2048,yt(9,{destroy:void 0},Hc.bind(null,e,a),null)),[t,u,l]}function Hc(l,n){l.action=n}function lD(l){var n=pl(),a=Bl;if(a!==null)return $T(n,a,l);pl(),n=n.memoizedState,a=pl();var t=a.queue.dispatch;return a.memoizedState=l,[n,t,!1]}function yt(l,n,a,t){return l={tag:l,create:a,deps:t,inst:n,next:null},n=K.updateQueue,n===null&&(n=s0(),K.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=l.next=l:(t=a.next,a.next=l,l.next=t,n.lastEffect=l),l}function nD(){return pl().memoizedState}function o0(l,n,a,t){var e=ln();K.flags|=l,e.memoizedState=yt(1|n,{destroy:void 0},a,t===void 0?null:t)}function _0(l,n,a,t){var e=pl();t=t===void 0?null:t;var u=e.memoizedState.inst;Bl!==null&&t!==null&&Ju(t,Bl.memoizedState.deps)?e.memoizedState=yt(n,u,a,t):(K.flags|=l,e.memoizedState=yt(1|n,u,a,t))}function aD(l,n){o0(8390656,8,l,n)}function ei(l,n){_0(2048,8,l,n)}function Vc(l){K.flags|=4;var n=K.updateQueue;if(n===null)n=s0(),K.updateQueue=n,n.events=[l];else{var a=n.events;a===null?n.events=[l]:a.push(l)}}function tD(l){var n=pl().memoizedState;return Vc({ref:n,nextImpl:l}),function(){if((cl&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function eD(l,n){return _0(4,2,l,n)}function uD(l,n){return _0(4,4,l,n)}function iD(l,n){if(typeof n=="function"){l=l();var a=n(l);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return l=l(),n.current=l,function(){n.current=null}}function AD(l,n,a){a=a!=null?a.concat([l]):null,_0(4,4,iD.bind(null,n,l),a)}function ui(){}function TD(l,n){var a=pl();n=n===void 0?null:n;var t=a.memoizedState;return n!==null&&Ju(n,t[1])?t[0]:(a.memoizedState=[l,n],l)}function DD(l,n){var a=pl();n=n===void 0?null:n;var t=a.memoizedState;if(n!==null&&Ju(n,t[1]))return t[0];if(t=l(),Wa){Ta(!0);try{l()}finally{Ta(!1)}}return a.memoizedState=[t,n],t}function ii(l,n,a){return a===void 0||(Qn&1073741824)!==0&&(al&261930)===0?l.memoizedState=n:(l.memoizedState=a,l=rr(),K.lanes|=l,Ga|=l,a)}function rD(l,n,a,t){return fn(a,n)?a:Et.current!==null?(l=ii(l,a,t),fn(l,n)||(Ul=!0),l):(Qn&42)===0||(Qn&1073741824)!==0&&(al&261930)===0?(Ul=!0,l.memoizedState=a):(l=rr(),K.lanes|=l,Ga|=l,n)}function cD(l,n,a,t,e){var u=N.p;N.p=u!==0&&8>u?u:8;var i=E.T,A={};E.T=A,Di(l,!1,n,a);try{var T=e(),o=E.S;if(o!==null&&o(A,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var R=Ic(T,t);re(l,n,R,Rn(l))}else re(l,n,t,Rn(l))}catch(h){re(l,n,{then:function(){},status:"rejected",reason:h},Rn())}finally{N.p=u,i!==null&&A.types!==null&&(i.types=A.types),E.T=i}}function zc(){}function Ai(l,n,a,t){if(l.tag!==5)throw Error(s(476));var e=sD(l).queue;cD(l,e,n,U,a===null?zc:function(){return fD(l),a(t)})}function sD(l){var n=l.memoizedState;if(n!==null)return n;n={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:U},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kn,lastRenderedState:a},next:null},l.memoizedState=n,l=l.alternate,l!==null&&(l.memoizedState=n),n}function fD(l){var n=sD(l);n.next===null&&(n=l.alternate.memoizedState),re(l,n.next.queue,{},Rn())}function Ti(){return ql(Ce)}function LD(){return pl().memoizedState}function oD(){return pl().memoizedState}function Yc(l){for(var n=l.return;n!==null;){switch(n.tag){case 24:case 3:var a=Rn();l=_a(a);var t=Ba(n,l,a);t!==null&&(rn(t,n,a),ue(t,n,a)),n={cache:Mu()},l.payload=n;return}n=n.return}}function xc(l,n,a){var t=Rn();a={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},B0(l)?BD(n,a):(a=Nu(l,n,a,t),a!==null&&(rn(a,l,t),dD(a,n,t)))}function _D(l,n,a){var t=Rn();re(l,n,a,t)}function re(l,n,a,t){var e={lane:t,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(B0(l))BD(n,e);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var i=n.lastRenderedState,A=u(i,a);if(e.hasEagerState=!0,e.eagerState=A,fn(A,i))return Qe(l,n,e,0),Sl===null&&we(),!1}catch{}finally{}if(a=Nu(l,n,e,t),a!==null)return rn(a,l,t),dD(a,n,t),!0}return!1}function Di(l,n,a,t){if(t={lane:2,revertLane:zi(),gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},B0(l)){if(n)throw Error(s(479))}else n=Nu(l,a,t,2),n!==null&&rn(n,l,2)}function B0(l){var n=l.alternate;return l===K||n!==null&&n===K}function BD(l,n){Gt=r0=!0;var a=l.pending;a===null?n.next=n:(n.next=a.next,a.next=n),l.pending=n}function dD(l,n,a){if((a&4194048)!==0){var t=n.lanes;t&=l.pendingLanes,a|=t,n.lanes=a,hA(l,a)}}var ce={readContext:ql,use:f0,useCallback:vl,useContext:vl,useEffect:vl,useImperativeHandle:vl,useLayoutEffect:vl,useInsertionEffect:vl,useMemo:vl,useReducer:vl,useRef:vl,useState:vl,useDebugValue:vl,useDeferredValue:vl,useTransition:vl,useSyncExternalStore:vl,useId:vl,useHostTransitionStatus:vl,useFormState:vl,useActionState:vl,useOptimistic:vl,useMemoCache:vl,useCacheRefresh:vl};ce.useEffectEvent=vl;var RD={readContext:ql,use:f0,useCallback:function(l,n){return ln().memoizedState=[l,n===void 0?null:n],l},useContext:ql,useEffect:aD,useImperativeHandle:function(l,n,a){a=a!=null?a.concat([l]):null,o0(4194308,4,iD.bind(null,n,l),a)},useLayoutEffect:function(l,n){return o0(4194308,4,l,n)},useInsertionEffect:function(l,n){o0(4,2,l,n)},useMemo:function(l,n){var a=ln();n=n===void 0?null:n;var t=l();if(Wa){Ta(!0);try{l()}finally{Ta(!1)}}return a.memoizedState=[t,n],t},useReducer:function(l,n,a){var t=ln();if(a!==void 0){var e=a(n);if(Wa){Ta(!0);try{a(n)}finally{Ta(!1)}}}else e=n;return t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:e},t.queue=l,l=l.dispatch=xc.bind(null,K,l),[t.memoizedState,l]},useRef:function(l){var n=ln();return l={current:l},n.memoizedState=l},useState:function(l){l=ai(l);var n=l.queue,a=_D.bind(null,K,n);return n.dispatch=a,[l.memoizedState,a]},useDebugValue:ui,useDeferredValue:function(l,n){var a=ln();return ii(a,l,n)},useTransition:function(){var l=ai(!1);return l=cD.bind(null,K,l.queue,!0,!1),ln().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,n,a){var t=K,e=ln();if(el){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Sl===null)throw Error(s(349));(al&127)!==0||VT(t,n,a)}e.memoizedState=a;var u={value:a,getSnapshot:n};return e.queue=u,aD(YT.bind(null,t,u,l),[l]),t.flags|=2048,yt(9,{destroy:void 0},zT.bind(null,t,u,a,n),null),a},useId:function(){var l=ln(),n=Sl.identifierPrefix;if(el){var a=Mn,t=Pn;a=(t&~(1<<32-sn(t)-1)).toString(32)+a,n="_"+n+"R_"+a,a=c0++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Pc++,n="_"+n+"r_"+a.toString(32)+"_";return l.memoizedState=n},useHostTransitionStatus:Ti,useFormState:QT,useActionState:QT,useOptimistic:function(l){var n=ln();n.memoizedState=n.baseState=l;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Di.bind(null,K,!0,a),a.dispatch=n,[l,n]},useMemoCache:$u,useCacheRefresh:function(){return ln().memoizedState=Yc.bind(null,K)},useEffectEvent:function(l){var n=ln(),a={impl:l};return n.memoizedState=a,function(){if((cl&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ri={readContext:ql,use:f0,useCallback:TD,useContext:ql,useEffect:ei,useImperativeHandle:AD,useInsertionEffect:eD,useLayoutEffect:uD,useMemo:DD,useReducer:L0,useRef:nD,useState:function(){return L0(kn)},useDebugValue:ui,useDeferredValue:function(l,n){var a=pl();return rD(a,Bl.memoizedState,l,n)},useTransition:function(){var l=L0(kn)[0],n=pl().memoizedState;return[typeof l=="boolean"?l:De(l),n]},useSyncExternalStore:HT,useId:LD,useHostTransitionStatus:Ti,useFormState:kT,useActionState:kT,useOptimistic:function(l,n){var a=pl();return ZT(a,Bl,l,n)},useMemoCache:$u,useCacheRefresh:oD};ri.useEffectEvent=tD;var SD={readContext:ql,use:f0,useCallback:TD,useContext:ql,useEffect:ei,useImperativeHandle:AD,useInsertionEffect:eD,useLayoutEffect:uD,useMemo:DD,useReducer:ni,useRef:nD,useState:function(){return ni(kn)},useDebugValue:ui,useDeferredValue:function(l,n){var a=pl();return Bl===null?ii(a,l,n):rD(a,Bl.memoizedState,l,n)},useTransition:function(){var l=ni(kn)[0],n=pl().memoizedState;return[typeof l=="boolean"?l:De(l),n]},useSyncExternalStore:HT,useId:LD,useHostTransitionStatus:Ti,useFormState:lD,useActionState:lD,useOptimistic:function(l,n){var a=pl();return Bl!==null?ZT(a,Bl,l,n):(a.baseState=l,[l,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:oD};SD.useEffectEvent=tD;function ci(l,n,a,t){n=l.memoizedState,a=a(t,n),a=a==null?n:X({},n,a),l.memoizedState=a,l.lanes===0&&(l.updateQueue.baseState=a)}var si={enqueueSetState:function(l,n,a){l=l._reactInternals;var t=Rn(),e=_a(t);e.payload=n,a!=null&&(e.callback=a),n=Ba(l,e,t),n!==null&&(rn(n,l,t),ue(n,l,t))},enqueueReplaceState:function(l,n,a){l=l._reactInternals;var t=Rn(),e=_a(t);e.tag=1,e.payload=n,a!=null&&(e.callback=a),n=Ba(l,e,t),n!==null&&(rn(n,l,t),ue(n,l,t))},enqueueForceUpdate:function(l,n){l=l._reactInternals;var a=Rn(),t=_a(a);t.tag=2,n!=null&&(t.callback=n),n=Ba(l,t,a),n!==null&&(rn(n,l,a),ue(n,l,a))}};function ED(l,n,a,t,e,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(t,u,i):n.prototype&&n.prototype.isPureReactComponent?!Qt(a,t)||!Qt(e,u):!0}function GD(l,n,a,t){l=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,t),n.state!==l&&si.enqueueReplaceState(n,n.state,null)}function Ja(l,n){var a=n;if("ref"in n){a={};for(var t in n)t!=="ref"&&(a[t]=n[t])}if(l=l.defaultProps){a===n&&(a=X({},a));for(var e in l)a[e]===void 0&&(a[e]=l[e])}return a}function hD(l){Ke(l)}function yD(l){console.error(l)}function mD(l){Ke(l)}function d0(l,n){try{var a=l.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(t){setTimeout(function(){throw t})}}function ND(l,n,a){try{var t=l.onCaughtError;t(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function fi(l,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){d0(l,n)},a}function CD(l){return l=_a(l),l.tag=3,l}function bD(l,n,a,t){var e=a.type.getDerivedStateFromError;if(typeof e=="function"){var u=t.value;l.payload=function(){return e(u)},l.callback=function(){ND(n,a,t)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){ND(n,a,t),typeof e!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var A=t.stack;this.componentDidCatch(t.value,{componentStack:A!==null?A:""})})}function jc(l,n,a,t,e){if(a.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(n=a.alternate,n!==null&&_t(n,a,e,!0),a=on.current,a!==null){switch(a.tag){case 31:case 13:return Cn===null?v0():a.alternate===null&&Ol===0&&(Ol=3),a.flags&=-257,a.flags|=65536,a.lanes=e,t===u0?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([t]):n.add(t),Ui(l,t,e)),!1;case 22:return a.flags|=65536,t===u0?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([t])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([t]):a.add(t)),Ui(l,t,e)),!1}throw Error(s(435,a.tag))}return Ui(l,t,e),v0(),!1}if(el)return n=on.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=e,t!==Xu&&(l=Error(s(422),{cause:t}),le(hn(l,a)))):(t!==Xu&&(n=Error(s(423),{cause:t}),le(hn(n,a))),l=l.current.alternate,l.flags|=65536,e&=-e,l.lanes|=e,t=hn(t,a),e=fi(l.stateNode,t,e),xu(l,e),Ol!==4&&(Ol=2)),!1;var u=Error(s(520),{cause:t});if(u=hn(u,a),Re===null?Re=[u]:Re.push(u),Ol!==4&&(Ol=2),n===null)return!0;t=hn(t,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,l=e&-e,a.lanes|=l,l=fi(a.stateNode,t,l),xu(a,l),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ha===null||!ha.has(u))))return a.flags|=65536,e&=-e,a.lanes|=e,e=CD(e),bD(e,l,a,t),xu(a,e),!1}a=a.return}while(a!==null);return!1}var Li=Error(s(461)),Ul=!1;function Wl(l,n,a,t){n.child=l===null?XT(n,null,a,t):qa(n,l.child,a,t)}function FD(l,n,a,t,e){a=a.render;var u=n.ref;if("ref"in t){var i={};for(var A in t)A!=="ref"&&(i[A]=t[A])}else i=t;return Ya(n),t=Ku(l,n,a,i,u,e),A=wu(),l!==null&&!Ul?(Qu(l,n,e),$n(l,n,e)):(el&&A&&vu(n),n.flags|=1,Wl(l,n,t,e),n.child)}function vD(l,n,a,t,e){if(l===null){var u=a.type;return typeof u=="function"&&!Cu(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,OD(l,n,u,t,e)):(l=$e(a.type,null,t,n,n.mode,e),l.ref=n.ref,l.return=n,n.child=l)}if(u=l.child,!Gi(l,e)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:Qt,a(i,t)&&l.ref===n.ref)return $n(l,n,e)}return n.flags|=1,l=Wn(u,t),l.ref=n.ref,l.return=n,n.child=l}function OD(l,n,a,t,e){if(l!==null){var u=l.memoizedProps;if(Qt(u,t)&&l.ref===n.ref)if(Ul=!1,n.pendingProps=t=u,Gi(l,e))(l.flags&131072)!==0&&(Ul=!0);else return n.lanes=l.lanes,$n(l,n,e)}return oi(l,n,a,t,e)}function XD(l,n,a,t){var e=t.children,u=l!==null?l.memoizedState:null;if(l===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,l!==null){for(t=n.child=l.child,e=0;t!==null;)e=e|t.lanes|t.childLanes,t=t.sibling;t=e&~u}else t=0,n.child=null;return pD(l,n,u,a,t)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},l!==null&&t0(n,u!==null?u.cachePool:null),u!==null?IT(n,u):Zu(),PT(n);else return t=n.lanes=536870912,pD(l,n,u!==null?u.baseLanes|a:a,a,t)}else u!==null?(t0(n,u.cachePool),IT(n,u),Ra(),n.memoizedState=null):(l!==null&&t0(n,null),Zu(),Ra());return Wl(l,n,e,a),n.child}function se(l,n){return l!==null&&l.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pD(l,n,a,t,e){var u=Hu();return u=u===null?null:{parent:Pl._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},l!==null&&t0(n,null),Zu(),PT(n),l!==null&&_t(l,n,t,!0),n.childLanes=e,null}function R0(l,n){return n=E0({mode:n.mode,children:n.children},l.mode),n.ref=l.ref,l.child=n,n.return=l,n}function gD(l,n,a){return qa(n,l.child,null,a),l=R0(n,n.pendingProps),l.flags|=2,_n(n),n.memoizedState=null,l}function Zc(l,n,a){var t=n.pendingProps,e=(n.flags&128)!==0;if(n.flags&=-129,l===null){if(el){if(t.mode==="hidden")return l=R0(n,t),n.lanes=536870912,se(null,l);if(Wu(n),(l=yl)?(l=qr(l,Nn),l=l!==null&&l.data==="&"?l:null,l!==null&&(n.memoizedState={dehydrated:l,treeContext:ca!==null?{id:Pn,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},a=BT(l),a.return=n,n.child=a,Zl=n,yl=null)):l=null,l===null)throw fa(n);return n.lanes=536870912,null}return R0(n,t)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Wu(n),e)if(n.flags&256)n.flags&=-257,n=gD(l,n,a);else if(n.memoizedState!==null)n.child=l.child,n.flags|=128,n=null;else throw Error(s(558));else if(Ul||_t(l,n,a,!1),e=(a&l.childLanes)!==0,Ul||e){if(t=Sl,t!==null&&(i=yA(t,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ua(l,i),rn(t,l,i),Li;v0(),n=gD(l,n,a)}else l=u.treeContext,yl=bn(i.nextSibling),Zl=n,el=!0,sa=null,Nn=!1,l!==null&&ST(n,l),n=R0(n,t),n.flags|=4096;return n}return l=Wn(l.child,{mode:t.mode,children:t.children}),l.ref=n.ref,n.child=l,l.return=n,l}function S0(l,n){var a=n.ref;if(a===null)l!==null&&l.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(l===null||l.ref!==a)&&(n.flags|=4194816)}}function oi(l,n,a,t,e){return Ya(n),a=Ku(l,n,a,t,void 0,e),t=wu(),l!==null&&!Ul?(Qu(l,n,e),$n(l,n,e)):(el&&t&&vu(n),n.flags|=1,Wl(l,n,a,e),n.child)}function ID(l,n,a,t,e,u){return Ya(n),n.updateQueue=null,a=UT(n,t,a,e),MT(l),t=wu(),l!==null&&!Ul?(Qu(l,n,u),$n(l,n,u)):(el&&t&&vu(n),n.flags|=1,Wl(l,n,a,u),n.child)}function PD(l,n,a,t,e){if(Ya(n),n.stateNode===null){var u=st,i=a.contextType;typeof i=="object"&&i!==null&&(u=ql(i)),u=new a(t,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=si,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=t,u.state=n.memoizedState,u.refs={},zu(n),i=a.contextType,u.context=typeof i=="object"&&i!==null?ql(i):st,u.state=n.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ci(n,a,i,t),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&si.enqueueReplaceState(u,u.state,null),Ae(n,t,u,e),ie(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),t=!0}else if(l===null){u=n.stateNode;var A=n.memoizedProps,T=Ja(a,A);u.props=T;var o=u.context,R=a.contextType;i=st,typeof R=="object"&&R!==null&&(i=ql(R));var h=a.getDerivedStateFromProps;R=typeof h=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,R||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||o!==i)&&GD(n,u,t,i),oa=!1;var _=n.memoizedState;u.state=_,Ae(n,t,u,e),ie(),o=n.memoizedState,A||_!==o||oa?(typeof h=="function"&&(ci(n,a,h,t),o=n.memoizedState),(T=oa||ED(n,a,T,t,_,o,i))?(R||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=o),u.props=t,u.state=o,u.context=i,t=T):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{u=n.stateNode,Yu(l,n),i=n.memoizedProps,R=Ja(a,i),u.props=R,h=n.pendingProps,_=u.context,o=a.contextType,T=st,typeof o=="object"&&o!==null&&(T=ql(o)),A=a.getDerivedStateFromProps,(o=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==h||_!==T)&&GD(n,u,t,T),oa=!1,_=n.memoizedState,u.state=_,Ae(n,t,u,e),ie();var B=n.memoizedState;i!==h||_!==B||oa||l!==null&&l.dependencies!==null&&n0(l.dependencies)?(typeof A=="function"&&(ci(n,a,A,t),B=n.memoizedState),(R=oa||ED(n,a,R,t,_,B,T)||l!==null&&l.dependencies!==null&&n0(l.dependencies))?(o||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(t,B,T),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(t,B,T)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&_===l.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&_===l.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=B),u.props=t,u.state=B,u.context=T,t=R):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&_===l.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&_===l.memoizedState||(n.flags|=1024),t=!1)}return u=t,S0(l,n),t=(n.flags&128)!==0,u||t?(u=n.stateNode,a=t&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,l!==null&&t?(n.child=qa(n,l.child,null,e),n.child=qa(n,null,a,e)):Wl(l,n,a,e),n.memoizedState=u.state,l=n.child):l=$n(l,n,e),l}function MD(l,n,a,t){return Va(),n.flags|=256,Wl(l,n,a,t),n.child}var _i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bi(l){return{baseLanes:l,cachePool:NT()}}function di(l,n,a){return l=l!==null?l.childLanes&~a:0,n&&(l|=dn),l}function UD(l,n,a){var t=n.pendingProps,e=!1,u=(n.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(Xl.current&2)!==0),i&&(e=!0,n.flags&=-129),i=(n.flags&32)!==0,n.flags&=-33,l===null){if(el){if(e?da(n):Ra(),(l=yl)?(l=qr(l,Nn),l=l!==null&&l.data!=="&"?l:null,l!==null&&(n.memoizedState={dehydrated:l,treeContext:ca!==null?{id:Pn,overflow:Mn}:null,retryLane:536870912,hydrationErrors:null},a=BT(l),a.return=n,n.child=a,Zl=n,yl=null)):l=null,l===null)throw fa(n);return lA(l)?n.lanes=32:n.lanes=536870912,null}var A=t.children;return t=t.fallback,e?(Ra(),e=n.mode,A=E0({mode:"hidden",children:A},e),t=Ha(t,e,a,null),A.return=n,t.return=n,A.sibling=t,n.child=A,t=n.child,t.memoizedState=Bi(a),t.childLanes=di(l,i,a),n.memoizedState=_i,se(null,t)):(da(n),Ri(n,A))}var T=l.memoizedState;if(T!==null&&(A=T.dehydrated,A!==null)){if(u)n.flags&256?(da(n),n.flags&=-257,n=Si(l,n,a)):n.memoizedState!==null?(Ra(),n.child=l.child,n.flags|=128,n=null):(Ra(),A=t.fallback,e=n.mode,t=E0({mode:"visible",children:t.children},e),A=Ha(A,e,a,null),A.flags|=2,t.return=n,A.return=n,t.sibling=A,n.child=t,qa(n,l.child,null,a),t=n.child,t.memoizedState=Bi(a),t.childLanes=di(l,i,a),n.memoizedState=_i,n=se(null,t));else if(da(n),lA(A)){if(i=A.nextSibling&&A.nextSibling.dataset,i)var o=i.dgst;i=o,t=Error(s(419)),t.stack="",t.digest=i,le({value:t,source:null,stack:null}),n=Si(l,n,a)}else if(Ul||_t(l,n,a,!1),i=(a&l.childLanes)!==0,Ul||i){if(i=Sl,i!==null&&(t=yA(i,a),t!==0&&t!==T.retryLane))throw T.retryLane=t,Ua(l,t),rn(i,l,t),Li;$i(A)||v0(),n=Si(l,n,a)}else $i(A)?(n.flags|=192,n.child=l.child,n=null):(l=T.treeContext,yl=bn(A.nextSibling),Zl=n,el=!0,sa=null,Nn=!1,l!==null&&ST(n,l),n=Ri(n,t.children),n.flags|=4096);return n}return e?(Ra(),A=t.fallback,e=n.mode,T=l.child,o=T.sibling,t=Wn(T,{mode:"hidden",children:t.children}),t.subtreeFlags=T.subtreeFlags&65011712,o!==null?A=Wn(o,A):(A=Ha(A,e,a,null),A.flags|=2),A.return=n,t.return=n,t.sibling=A,n.child=t,se(null,t),t=n.child,A=l.child.memoizedState,A===null?A=Bi(a):(e=A.cachePool,e!==null?(T=Pl._currentValue,e=e.parent!==T?{parent:T,pool:T}:e):e=NT(),A={baseLanes:A.baseLanes|a,cachePool:e}),t.memoizedState=A,t.childLanes=di(l,i,a),n.memoizedState=_i,se(l.child,t)):(da(n),a=l.child,l=a.sibling,a=Wn(a,{mode:"visible",children:t.children}),a.return=n,a.sibling=null,l!==null&&(i=n.deletions,i===null?(n.deletions=[l],n.flags|=16):i.push(l)),n.child=a,n.memoizedState=null,a)}function Ri(l,n){return n=E0({mode:"visible",children:n},l.mode),n.return=l,l.child=n}function E0(l,n){return l=Ln(22,l,null,n),l.lanes=0,l}function Si(l,n,a){return qa(n,l.child,null,a),l=Ri(n,n.pendingProps.children),l.flags|=2,n.memoizedState=null,l}function HD(l,n,a){l.lanes|=n;var t=l.alternate;t!==null&&(t.lanes|=n),Iu(l.return,n,a)}function Ei(l,n,a,t,e,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:e,treeForkCount:u}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=a,i.tailMode=e,i.treeForkCount=u)}function VD(l,n,a){var t=n.pendingProps,e=t.revealOrder,u=t.tail;t=t.children;var i=Xl.current,A=(i&2)!==0;if(A?(i=i&1|2,n.flags|=128):i&=1,C(Xl,i),Wl(l,n,t,a),t=el?$t:0,!A&&l!==null&&(l.flags&128)!==0)l:for(l=n.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&HD(l,a,n);else if(l.tag===19)HD(l,a,n);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break l;for(;l.sibling===null;){if(l.return===null||l.return===n)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(e){case"forwards":for(a=n.child,e=null;a!==null;)l=a.alternate,l!==null&&D0(l)===null&&(e=a),a=a.sibling;a=e,a===null?(e=n.child,n.child=null):(e=a.sibling,a.sibling=null),Ei(n,!1,e,a,u,t);break;case"backwards":case"unstable_legacy-backwards":for(a=null,e=n.child,n.child=null;e!==null;){if(l=e.alternate,l!==null&&D0(l)===null){n.child=e;break}l=e.sibling,e.sibling=a,a=e,e=l}Ei(n,!0,a,null,u,t);break;case"together":Ei(n,!1,null,null,void 0,t);break;default:n.memoizedState=null}return n.child}function $n(l,n,a){if(l!==null&&(n.dependencies=l.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(l!==null){if(_t(l,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(l!==null&&n.child!==l.child)throw Error(s(153));if(n.child!==null){for(l=n.child,a=Wn(l,l.pendingProps),n.child=a,a.return=n;l.sibling!==null;)l=l.sibling,a=a.sibling=Wn(l,l.pendingProps),a.return=n;a.sibling=null}return n.child}function Gi(l,n){return(l.lanes&n)!==0?!0:(l=l.dependencies,!!(l!==null&&n0(l)))}function qc(l,n,a){switch(n.tag){case 3:xl(n,n.stateNode.containerInfo),La(n,Pl,l.memoizedState.cache),Va();break;case 27:case 5:zn(n);break;case 4:xl(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wu(n),null;break;case 13:var t=n.memoizedState;if(t!==null)return t.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?UD(l,n,a):(da(n),l=$n(l,n,a),l!==null?l.sibling:null);da(n);break;case 19:var e=(l.flags&128)!==0;if(t=(a&n.childLanes)!==0,t||(_t(l,n,a,!1),t=(a&n.childLanes)!==0),e){if(t)return VD(l,n,a);n.flags|=128}if(e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),C(Xl,Xl.current),t)break;return null;case 22:return n.lanes=0,XD(l,n,a,n.pendingProps);case 24:La(n,Pl,l.memoizedState.cache)}return $n(l,n,a)}function zD(l,n,a){if(l!==null)if(l.memoizedProps!==n.pendingProps)Ul=!0;else{if(!Gi(l,a)&&(n.flags&128)===0)return Ul=!1,qc(l,n,a);Ul=(l.flags&131072)!==0}else Ul=!1,el&&(n.flags&1048576)!==0&&RT(n,$t,n.index);switch(n.lanes=0,n.tag){case 16:l:{var t=n.pendingProps;if(l=ja(n.elementType),n.type=l,typeof l=="function")Cu(l)?(t=Ja(l,t),n.tag=1,n=PD(null,n,l,t,a)):(n.tag=0,n=oi(null,n,l,t,a));else{if(l!=null){var e=l.$$typeof;if(e===Kl){n.tag=11,n=FD(null,n,l,t,a);break l}else if(e===H){n.tag=14,n=vD(null,n,l,t,a);break l}}throw n=nn(l)||l,Error(s(306,n,""))}}return n;case 0:return oi(l,n,n.type,n.pendingProps,a);case 1:return t=n.type,e=Ja(t,n.pendingProps),PD(l,n,t,e,a);case 3:l:{if(xl(n,n.stateNode.containerInfo),l===null)throw Error(s(387));t=n.pendingProps;var u=n.memoizedState;e=u.element,Yu(l,n),Ae(n,t,null,a);var i=n.memoizedState;if(t=i.cache,La(n,Pl,t),t!==u.cache&&Pu(n,[Pl],a,!0),ie(),t=i.element,u.isDehydrated)if(u={element:t,isDehydrated:!1,cache:i.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=MD(l,n,t,a);break l}else if(t!==e){e=hn(Error(s(424)),n),le(e),n=MD(l,n,t,a);break l}else{switch(l=n.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(yl=bn(l.firstChild),Zl=n,el=!0,sa=null,Nn=!0,a=XT(n,null,t,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Va(),t===e){n=$n(l,n,a);break l}Wl(l,n,t,a)}n=n.child}return n;case 26:return S0(l,n),l===null?(a=kr(n.type,null,n.pendingProps,null))?n.memoizedState=a:el||(a=n.type,l=n.pendingProps,t=M0(Q.current).createElement(a),t[jl]=n,t[tn]=l,Jl(t,a,l),zl(t),n.stateNode=t):n.memoizedState=kr(n.type,l.memoizedProps,n.pendingProps,l.memoizedState),null;case 27:return zn(n),l===null&&el&&(t=n.stateNode=Kr(n.type,n.pendingProps,Q.current),Zl=n,Nn=!0,e=yl,Ca(n.type)?(nA=e,yl=bn(t.firstChild)):yl=e),Wl(l,n,n.pendingProps.children,a),S0(l,n),l===null&&(n.flags|=4194304),n.child;case 5:return l===null&&el&&((e=t=yl)&&(t=Gs(t,n.type,n.pendingProps,Nn),t!==null?(n.stateNode=t,Zl=n,yl=bn(t.firstChild),Nn=!1,e=!0):e=!1),e||fa(n)),zn(n),e=n.type,u=n.pendingProps,i=l!==null?l.memoizedProps:null,t=u.children,wi(e,u)?t=null:i!==null&&wi(e,i)&&(n.flags|=32),n.memoizedState!==null&&(e=Ku(l,n,Mc,null,null,a),Ce._currentValue=e),S0(l,n),Wl(l,n,t,a),n.child;case 6:return l===null&&el&&((l=a=yl)&&(a=hs(a,n.pendingProps,Nn),a!==null?(n.stateNode=a,Zl=n,yl=null,l=!0):l=!1),l||fa(n)),null;case 13:return UD(l,n,a);case 4:return xl(n,n.stateNode.containerInfo),t=n.pendingProps,l===null?n.child=qa(n,null,t,a):Wl(l,n,t,a),n.child;case 11:return FD(l,n,n.type,n.pendingProps,a);case 7:return Wl(l,n,n.pendingProps,a),n.child;case 8:return Wl(l,n,n.pendingProps.children,a),n.child;case 12:return Wl(l,n,n.pendingProps.children,a),n.child;case 10:return t=n.pendingProps,La(n,n.type,t.value),Wl(l,n,t.children,a),n.child;case 9:return e=n.type._context,t=n.pendingProps.children,Ya(n),e=ql(e),t=t(e),n.flags|=1,Wl(l,n,t,a),n.child;case 14:return vD(l,n,n.type,n.pendingProps,a);case 15:return OD(l,n,n.type,n.pendingProps,a);case 19:return VD(l,n,a);case 31:return Zc(l,n,a);case 22:return XD(l,n,a,n.pendingProps);case 24:return Ya(n),t=ql(Pl),l===null?(e=Hu(),e===null&&(e=Sl,u=Mu(),e.pooledCache=u,u.refCount++,u!==null&&(e.pooledCacheLanes|=a),e=u),n.memoizedState={parent:t,cache:e},zu(n),La(n,Pl,e)):((l.lanes&a)!==0&&(Yu(l,n),Ae(n,null,null,a),ie()),e=l.memoizedState,u=n.memoizedState,e.parent!==t?(e={parent:t,cache:t},n.memoizedState=e,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=e),La(n,Pl,t)):(t=u.cache,La(n,Pl,t),t!==e.cache&&Pu(n,[Pl],a,!0))),Wl(l,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(l){l.flags|=4}function hi(l,n,a,t,e){if((n=(l.mode&32)!==0)&&(n=!1),n){if(l.flags|=16777216,(e&335544128)===e)if(l.stateNode.complete)l.flags|=8192;else if(Lr())l.flags|=8192;else throw Za=u0,Vu}else l.flags&=-16777217}function YD(l,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!t1(n))if(Lr())l.flags|=8192;else throw Za=u0,Vu}function G0(l,n){n!==null&&(l.flags|=4),l.flags&16384&&(n=l.tag!==22?EA():536870912,l.lanes|=n,bt|=n)}function fe(l,n){if(!el)switch(l.tailMode){case"hidden":n=l.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?l.tail=null:a.sibling=null;break;case"collapsed":a=l.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?n||l.tail===null?l.tail=null:l.tail.sibling=null:t.sibling=null}}function ml(l){var n=l.alternate!==null&&l.alternate.child===l.child,a=0,t=0;if(n)for(var e=l.child;e!==null;)a|=e.lanes|e.childLanes,t|=e.subtreeFlags&65011712,t|=e.flags&65011712,e.return=l,e=e.sibling;else for(e=l.child;e!==null;)a|=e.lanes|e.childLanes,t|=e.subtreeFlags,t|=e.flags,e.return=l,e=e.sibling;return l.subtreeFlags|=t,l.childLanes=a,n}function Wc(l,n,a){var t=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(n),null;case 1:return ml(n),null;case 3:return a=n.stateNode,t=null,l!==null&&(t=l.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),wn(Pl),Nl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(l===null||l.child===null)&&(ot(n)?la(n):l===null||l.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pu())),ml(n),null;case 26:var e=n.type,u=n.memoizedState;return l===null?(la(n),u!==null?(ml(n),YD(n,u)):(ml(n),hi(n,e,null,t,a))):u?u!==l.memoizedState?(la(n),ml(n),YD(n,u)):(ml(n),n.flags&=-16777217):(l=l.memoizedProps,l!==t&&la(n),ml(n),hi(n,e,l,t,a)),null;case 27:if(Qa(n),a=Q.current,e=n.type,l!==null&&n.stateNode!=null)l.memoizedProps!==t&&la(n);else{if(!t){if(n.stateNode===null)throw Error(s(166));return ml(n),null}l=O.current,ot(n)?ET(n):(l=Kr(e,t,a),n.stateNode=l,la(n))}return ml(n),null;case 5:if(Qa(n),e=n.type,l!==null&&n.stateNode!=null)l.memoizedProps!==t&&la(n);else{if(!t){if(n.stateNode===null)throw Error(s(166));return ml(n),null}if(u=O.current,ot(n))ET(n);else{var i=M0(Q.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof t.is=="string"?i.createElement("select",{is:t.is}):i.createElement("select"),t.multiple?u.multiple=!0:t.size&&(u.size=t.size);break;default:u=typeof t.is=="string"?i.createElement(e,{is:t.is}):i.createElement(e)}}u[jl]=n,u[tn]=t;l:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break l;for(;i.sibling===null;){if(i.return===null||i.return===n)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=u;l:switch(Jl(u,e,t),e){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break l;case"img":t=!0;break l;default:t=!1}t&&la(n)}}return ml(n),hi(n,n.type,l===null?null:l.memoizedProps,n.pendingProps,a),null;case 6:if(l&&n.stateNode!=null)l.memoizedProps!==t&&la(n);else{if(typeof t!="string"&&n.stateNode===null)throw Error(s(166));if(l=Q.current,ot(n)){if(l=n.stateNode,a=n.memoizedProps,t=null,e=Zl,e!==null)switch(e.tag){case 27:case 5:t=e.memoizedProps}l[jl]=n,l=!!(l.nodeValue===a||t!==null&&t.suppressHydrationWarning===!0||Ur(l.nodeValue,a)),l||fa(n,!0)}else l=M0(l).createTextNode(t),l[jl]=n,n.stateNode=l}return ml(n),null;case 31:if(a=n.memoizedState,l===null||l.memoizedState!==null){if(t=ot(n),a!==null){if(l===null){if(!t)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(557));l[jl]=n}else Va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ml(n),l=!1}else a=pu(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),l=!0;if(!l)return n.flags&256?(_n(n),n):(_n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return ml(n),null;case 13:if(t=n.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(e=ot(n),t!==null&&t.dehydrated!==null){if(l===null){if(!e)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e[jl]=n}else Va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ml(n),e=!1}else e=pu(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),e=!0;if(!e)return n.flags&256?(_n(n),n):(_n(n),null)}return _n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=t!==null,l=l!==null&&l.memoizedState!==null,a&&(t=n.child,e=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(e=t.alternate.memoizedState.cachePool.pool),u=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(u=t.memoizedState.cachePool.pool),u!==e&&(t.flags|=2048)),a!==l&&a&&(n.child.flags|=8192),G0(n,n.updateQueue),ml(n),null);case 4:return Nl(),l===null&&Zi(n.stateNode.containerInfo),ml(n),null;case 10:return wn(n.type),ml(n),null;case 19:if(y(Xl),t=n.memoizedState,t===null)return ml(n),null;if(e=(n.flags&128)!==0,u=t.rendering,u===null)if(e)fe(t,!1);else{if(Ol!==0||l!==null&&(l.flags&128)!==0)for(l=n.child;l!==null;){if(u=D0(l),u!==null){for(n.flags|=128,fe(t,!1),l=u.updateQueue,n.updateQueue=l,G0(n,l),n.subtreeFlags=0,l=a,a=n.child;a!==null;)_T(a,l),a=a.sibling;return C(Xl,Xl.current&1|2),el&&Jn(n,t.treeForkCount),n.child}l=l.sibling}t.tail!==null&&$l()>C0&&(n.flags|=128,e=!0,fe(t,!1),n.lanes=4194304)}else{if(!e)if(l=D0(u),l!==null){if(n.flags|=128,e=!0,l=l.updateQueue,n.updateQueue=l,G0(n,l),fe(t,!0),t.tail===null&&t.tailMode==="hidden"&&!u.alternate&&!el)return ml(n),null}else 2*$l()-t.renderingStartTime>C0&&a!==536870912&&(n.flags|=128,e=!0,fe(t,!1),n.lanes=4194304);t.isBackwards?(u.sibling=n.child,n.child=u):(l=t.last,l!==null?l.sibling=u:n.child=u,t.last=u)}return t.tail!==null?(l=t.tail,t.rendering=l,t.tail=l.sibling,t.renderingStartTime=$l(),l.sibling=null,a=Xl.current,C(Xl,e?a&1|2:a&1),el&&Jn(n,t.treeForkCount),l):(ml(n),null);case 22:case 23:return _n(n),qu(),t=n.memoizedState!==null,l!==null?l.memoizedState!==null!==t&&(n.flags|=8192):t&&(n.flags|=8192),t?(a&536870912)!==0&&(n.flags&128)===0&&(ml(n),n.subtreeFlags&6&&(n.flags|=8192)):ml(n),a=n.updateQueue,a!==null&&G0(n,a.retryQueue),a=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(n.flags|=2048),l!==null&&y(xa),null;case 24:return a=null,l!==null&&(a=l.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wn(Pl),ml(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Jc(l,n){switch(Ou(n),n.tag){case 1:return l=n.flags,l&65536?(n.flags=l&-65537|128,n):null;case 3:return wn(Pl),Nl(),l=n.flags,(l&65536)!==0&&(l&128)===0?(n.flags=l&-65537|128,n):null;case 26:case 27:case 5:return Qa(n),null;case 31:if(n.memoizedState!==null){if(_n(n),n.alternate===null)throw Error(s(340));Va()}return l=n.flags,l&65536?(n.flags=l&-65537|128,n):null;case 13:if(_n(n),l=n.memoizedState,l!==null&&l.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Va()}return l=n.flags,l&65536?(n.flags=l&-65537|128,n):null;case 19:return y(Xl),null;case 4:return Nl(),null;case 10:return wn(n.type),null;case 22:case 23:return _n(n),qu(),l!==null&&y(xa),l=n.flags,l&65536?(n.flags=l&-65537|128,n):null;case 24:return wn(Pl),null;case 25:return null;default:return null}}function xD(l,n){switch(Ou(n),n.tag){case 3:wn(Pl),Nl();break;case 26:case 27:case 5:Qa(n);break;case 4:Nl();break;case 31:n.memoizedState!==null&&_n(n);break;case 13:_n(n);break;case 19:y(Xl);break;case 10:wn(n.type);break;case 22:case 23:_n(n),qu(),l!==null&&y(xa);break;case 24:wn(Pl)}}function Le(l,n){try{var a=n.updateQueue,t=a!==null?a.lastEffect:null;if(t!==null){var e=t.next;a=e;do{if((a.tag&l)===l){t=void 0;var u=a.create,i=a.inst;t=u(),i.destroy=t}a=a.next}while(a!==e)}}catch(A){_l(n,n.return,A)}}function Sa(l,n,a){try{var t=n.updateQueue,e=t!==null?t.lastEffect:null;if(e!==null){var u=e.next;t=u;do{if((t.tag&l)===l){var i=t.inst,A=i.destroy;if(A!==void 0){i.destroy=void 0,e=n;var T=a,o=A;try{o()}catch(R){_l(e,T,R)}}}t=t.next}while(t!==u)}}catch(R){_l(n,n.return,R)}}function jD(l){var n=l.updateQueue;if(n!==null){var a=l.stateNode;try{gT(n,a)}catch(t){_l(l,l.return,t)}}}function ZD(l,n,a){a.props=Ja(l.type,l.memoizedProps),a.state=l.memoizedState;try{a.componentWillUnmount()}catch(t){_l(l,n,t)}}function oe(l,n){try{var a=l.ref;if(a!==null){switch(l.tag){case 26:case 27:case 5:var t=l.stateNode;break;case 30:t=l.stateNode;break;default:t=l.stateNode}typeof a=="function"?l.refCleanup=a(t):a.current=t}}catch(e){_l(l,n,e)}}function Un(l,n){var a=l.ref,t=l.refCleanup;if(a!==null)if(typeof t=="function")try{t()}catch(e){_l(l,n,e)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(e){_l(l,n,e)}else a.current=null}function qD(l){var n=l.type,a=l.memoizedProps,t=l.stateNode;try{l:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break l;case"img":a.src?t.src=a.src:a.srcSet&&(t.srcset=a.srcSet)}}catch(e){_l(l,l.return,e)}}function yi(l,n,a){try{var t=l.stateNode;_s(t,l.type,a,n),t[tn]=n}catch(e){_l(l,l.return,e)}}function WD(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&Ca(l.type)||l.tag===4}function mi(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||WD(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&Ca(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Ni(l,n,a){var t=l.tag;if(t===5||t===6)l=l.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zn));else if(t!==4&&(t===27&&Ca(l.type)&&(a=l.stateNode,n=null),l=l.child,l!==null))for(Ni(l,n,a),l=l.sibling;l!==null;)Ni(l,n,a),l=l.sibling}function h0(l,n,a){var t=l.tag;if(t===5||t===6)l=l.stateNode,n?a.insertBefore(l,n):a.appendChild(l);else if(t!==4&&(t===27&&Ca(l.type)&&(a=l.stateNode),l=l.child,l!==null))for(h0(l,n,a),l=l.sibling;l!==null;)h0(l,n,a),l=l.sibling}function JD(l){var n=l.stateNode,a=l.memoizedProps;try{for(var t=l.type,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Jl(n,t,a),n[jl]=l,n[tn]=a}catch(u){_l(l,l.return,u)}}var na=!1,Hl=!1,Ci=!1,KD=typeof WeakSet=="function"?WeakSet:Set,Yl=null;function Kc(l,n){if(l=l.containerInfo,Ji=j0,l=AT(l),Su(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var e=t.anchorOffset,u=t.focusNode;t=t.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break l}var i=0,A=-1,T=-1,o=0,R=0,h=l,_=null;n:for(;;){for(var B;h!==a||e!==0&&h.nodeType!==3||(A=i+e),h!==u||t!==0&&h.nodeType!==3||(T=i+t),h.nodeType===3&&(i+=h.nodeValue.length),(B=h.firstChild)!==null;)_=h,h=B;for(;;){if(h===l)break n;if(_===a&&++o===e&&(A=i),_===u&&++R===t&&(T=i),(B=h.nextSibling)!==null)break;h=_,_=h.parentNode}h=B}a=A===-1||T===-1?null:{start:A,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ki={focusedElem:l,selectionRange:a},j0=!1,Yl=n;Yl!==null;)if(n=Yl,l=n.child,(n.subtreeFlags&1028)!==0&&l!==null)l.return=n,Yl=l;else for(;Yl!==null;){switch(n=Yl,u=n.alternate,l=n.flags,n.tag){case 0:if((l&4)!==0&&(l=n.updateQueue,l=l!==null?l.events:null,l!==null))for(a=0;a<l.length;a++)e=l[a],e.ref.impl=e.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&u!==null){l=void 0,a=n,e=u.memoizedProps,u=u.memoizedState,t=a.stateNode;try{var v=Ja(a.type,e);l=t.getSnapshotBeforeUpdate(v,u),t.__reactInternalSnapshotBeforeUpdate=l}catch(V){_l(a,a.return,V)}}break;case 3:if((l&1024)!==0){if(l=n.stateNode.containerInfo,a=l.nodeType,a===9)ki(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ki(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(s(163))}if(l=n.sibling,l!==null){l.return=n.return,Yl=l;break}Yl=n.return}}function wD(l,n,a){var t=a.flags;switch(a.tag){case 0:case 11:case 15:ta(l,a),t&4&&Le(5,a);break;case 1:if(ta(l,a),t&4)if(l=a.stateNode,n===null)try{l.componentDidMount()}catch(i){_l(a,a.return,i)}else{var e=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{l.componentDidUpdate(e,n,l.__reactInternalSnapshotBeforeUpdate)}catch(i){_l(a,a.return,i)}}t&64&&jD(a),t&512&&oe(a,a.return);break;case 3:if(ta(l,a),t&64&&(l=a.updateQueue,l!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gT(l,n)}catch(i){_l(a,a.return,i)}}break;case 27:n===null&&t&4&&JD(a);case 26:case 5:ta(l,a),n===null&&t&4&&qD(a),t&512&&oe(a,a.return);break;case 12:ta(l,a);break;case 31:ta(l,a),t&4&&$D(l,a);break;case 13:ta(l,a),t&4&&lr(l,a),t&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=es.bind(null,a),ys(l,a))));break;case 22:if(t=a.memoizedState!==null||na,!t){n=n!==null&&n.memoizedState!==null||Hl,e=na;var u=Hl;na=t,(Hl=n)&&!u?ea(l,a,(a.subtreeFlags&8772)!==0):ta(l,a),na=e,Hl=u}break;case 30:break;default:ta(l,a)}}function QD(l){var n=l.alternate;n!==null&&(l.alternate=null,QD(n)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(n=l.stateNode,n!==null&&tu(n)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var Cl=null,un=!1;function aa(l,n,a){for(a=a.child;a!==null;)kD(l,n,a),a=a.sibling}function kD(l,n,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Ht,a)}catch{}switch(a.tag){case 26:Hl||Un(a,n),aa(l,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Hl||Un(a,n);var t=Cl,e=un;Ca(a.type)&&(Cl=a.stateNode,un=!1),aa(l,n,a),ye(a.stateNode),Cl=t,un=e;break;case 5:Hl||Un(a,n);case 6:if(t=Cl,e=un,Cl=null,aa(l,n,a),Cl=t,un=e,Cl!==null)if(un)try{(Cl.nodeType===9?Cl.body:Cl.nodeName==="HTML"?Cl.ownerDocument.body:Cl).removeChild(a.stateNode)}catch(u){_l(a,n,u)}else try{Cl.removeChild(a.stateNode)}catch(u){_l(a,n,u)}break;case 18:Cl!==null&&(un?(l=Cl,jr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.stateNode),Pt(l)):jr(Cl,a.stateNode));break;case 4:t=Cl,e=un,Cl=a.stateNode.containerInfo,un=!0,aa(l,n,a),Cl=t,un=e;break;case 0:case 11:case 14:case 15:Sa(2,a,n),Hl||Sa(4,a,n),aa(l,n,a);break;case 1:Hl||(Un(a,n),t=a.stateNode,typeof t.componentWillUnmount=="function"&&ZD(a,n,t)),aa(l,n,a);break;case 21:aa(l,n,a);break;case 22:Hl=(t=Hl)||a.memoizedState!==null,aa(l,n,a),Hl=t;break;default:aa(l,n,a)}}function $D(l,n){if(n.memoizedState===null&&(l=n.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Pt(l)}catch(a){_l(n,n.return,a)}}}function lr(l,n){if(n.memoizedState===null&&(l=n.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Pt(l)}catch(a){_l(n,n.return,a)}}function wc(l){switch(l.tag){case 31:case 13:case 19:var n=l.stateNode;return n===null&&(n=l.stateNode=new KD),n;case 22:return l=l.stateNode,n=l._retryCache,n===null&&(n=l._retryCache=new KD),n;default:throw Error(s(435,l.tag))}}function y0(l,n){var a=wc(l);n.forEach(function(t){if(!a.has(t)){a.add(t);var e=us.bind(null,l,t);t.then(e,e)}})}function An(l,n){var a=n.deletions;if(a!==null)for(var t=0;t<a.length;t++){var e=a[t],u=l,i=n,A=i;l:for(;A!==null;){switch(A.tag){case 27:if(Ca(A.type)){Cl=A.stateNode,un=!1;break l}break;case 5:Cl=A.stateNode,un=!1;break l;case 3:case 4:Cl=A.stateNode.containerInfo,un=!0;break l}A=A.return}if(Cl===null)throw Error(s(160));kD(u,i,e),Cl=null,un=!1,u=e.alternate,u!==null&&(u.return=null),e.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)nr(n,l),n=n.sibling}var pn=null;function nr(l,n){var a=l.alternate,t=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:An(n,l),Tn(l),t&4&&(Sa(3,l,l.return),Le(3,l),Sa(5,l,l.return));break;case 1:An(n,l),Tn(l),t&512&&(Hl||a===null||Un(a,a.return)),t&64&&na&&(l=l.updateQueue,l!==null&&(t=l.callbacks,t!==null&&(a=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:var e=pn;if(An(n,l),Tn(l),t&512&&(Hl||a===null||Un(a,a.return)),t&4){var u=a!==null?a.memoizedState:null;if(t=l.memoizedState,a===null)if(t===null)if(l.stateNode===null){l:{t=l.type,a=l.memoizedProps,e=e.ownerDocument||e;n:switch(t){case"title":u=e.getElementsByTagName("title")[0],(!u||u[Yt]||u[jl]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=e.createElement(t),e.head.insertBefore(u,e.querySelector("head > title"))),Jl(u,t,a),u[jl]=l,zl(u),t=u;break l;case"link":var i=n1("link","href",e).get(t+(a.href||""));if(i){for(var A=0;A<i.length;A++)if(u=i[A],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(A,1);break n}}u=e.createElement(t),Jl(u,t,a),e.head.appendChild(u);break;case"meta":if(i=n1("meta","content",e).get(t+(a.content||""))){for(A=0;A<i.length;A++)if(u=i[A],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(A,1);break n}}u=e.createElement(t),Jl(u,t,a),e.head.appendChild(u);break;default:throw Error(s(468,t))}u[jl]=l,zl(u),t=u}l.stateNode=t}else a1(e,l.type,l.stateNode);else l.stateNode=l1(e,t,l.memoizedProps);else u!==t?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,t===null?a1(e,l.type,l.stateNode):l1(e,t,l.memoizedProps)):t===null&&l.stateNode!==null&&yi(l,l.memoizedProps,a.memoizedProps)}break;case 27:An(n,l),Tn(l),t&512&&(Hl||a===null||Un(a,a.return)),a!==null&&t&4&&yi(l,l.memoizedProps,a.memoizedProps);break;case 5:if(An(n,l),Tn(l),t&512&&(Hl||a===null||Un(a,a.return)),l.flags&32){e=l.stateNode;try{ut(e,"")}catch(v){_l(l,l.return,v)}}t&4&&l.stateNode!=null&&(e=l.memoizedProps,yi(l,e,a!==null?a.memoizedProps:e)),t&1024&&(Ci=!0);break;case 6:if(An(n,l),Tn(l),t&4){if(l.stateNode===null)throw Error(s(162));t=l.memoizedProps,a=l.stateNode;try{a.nodeValue=t}catch(v){_l(l,l.return,v)}}break;case 3:if(V0=null,e=pn,pn=U0(n.containerInfo),An(n,l),pn=e,Tn(l),t&4&&a!==null&&a.memoizedState.isDehydrated)try{Pt(n.containerInfo)}catch(v){_l(l,l.return,v)}Ci&&(Ci=!1,ar(l));break;case 4:t=pn,pn=U0(l.stateNode.containerInfo),An(n,l),Tn(l),pn=t;break;case 12:An(n,l),Tn(l);break;case 31:An(n,l),Tn(l),t&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,y0(l,t)));break;case 13:An(n,l),Tn(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(N0=$l()),t&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,y0(l,t)));break;case 22:e=l.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,o=na,R=Hl;if(na=o||e,Hl=R||T,An(n,l),Hl=R,na=o,Tn(l),t&8192)l:for(n=l.stateNode,n._visibility=e?n._visibility&-2:n._visibility|1,e&&(a===null||T||na||Hl||Ka(l)),a=null,n=l;;){if(n.tag===5||n.tag===26){if(a===null){T=a=n;try{if(u=T.stateNode,e)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{A=T.stateNode;var h=T.memoizedProps.style,_=h!=null&&h.hasOwnProperty("display")?h.display:null;A.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(v){_l(T,T.return,v)}}}else if(n.tag===6){if(a===null){T=n;try{T.stateNode.nodeValue=e?"":T.memoizedProps}catch(v){_l(T,T.return,v)}}}else if(n.tag===18){if(a===null){T=n;try{var B=T.stateNode;e?Zr(B,!0):Zr(T.stateNode,!1)}catch(v){_l(T,T.return,v)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===l)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===l)break l;for(;n.sibling===null;){if(n.return===null||n.return===l)break l;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}t&4&&(t=l.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,y0(l,a))));break;case 19:An(n,l),Tn(l),t&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,y0(l,t)));break;case 30:break;case 21:break;default:An(n,l),Tn(l)}}function Tn(l){var n=l.flags;if(n&2){try{for(var a,t=l.return;t!==null;){if(WD(t)){a=t;break}t=t.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var e=a.stateNode,u=mi(l);h0(l,u,e);break;case 5:var i=a.stateNode;a.flags&32&&(ut(i,""),a.flags&=-33);var A=mi(l);h0(l,A,i);break;case 3:case 4:var T=a.stateNode.containerInfo,o=mi(l);Ni(l,o,T);break;default:throw Error(s(161))}}catch(R){_l(l,l.return,R)}l.flags&=-3}n&4096&&(l.flags&=-4097)}function ar(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var n=l;ar(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),l=l.sibling}}function ta(l,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wD(l,n.alternate,n),n=n.sibling}function Ka(l){for(l=l.child;l!==null;){var n=l;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Ka(n);break;case 1:Un(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ZD(n,n.return,a),Ka(n);break;case 27:ye(n.stateNode);case 26:case 5:Un(n,n.return),Ka(n);break;case 22:n.memoizedState===null&&Ka(n);break;case 30:Ka(n);break;default:Ka(n)}l=l.sibling}}function ea(l,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var t=n.alternate,e=l,u=n,i=u.flags;switch(u.tag){case 0:case 11:case 15:ea(e,u,a),Le(4,u);break;case 1:if(ea(e,u,a),t=u,e=t.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(o){_l(t,t.return,o)}if(t=u,e=t.updateQueue,e!==null){var A=t.stateNode;try{var T=e.shared.hiddenCallbacks;if(T!==null)for(e.shared.hiddenCallbacks=null,e=0;e<T.length;e++)pT(T[e],A)}catch(o){_l(t,t.return,o)}}a&&i&64&&jD(u),oe(u,u.return);break;case 27:JD(u);case 26:case 5:ea(e,u,a),a&&t===null&&i&4&&qD(u),oe(u,u.return);break;case 12:ea(e,u,a);break;case 31:ea(e,u,a),a&&i&4&&$D(e,u);break;case 13:ea(e,u,a),a&&i&4&&lr(e,u);break;case 22:u.memoizedState===null&&ea(e,u,a),oe(u,u.return);break;case 30:break;default:ea(e,u,a)}n=n.sibling}}function bi(l,n){var a=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(l!=null&&l.refCount++,a!=null&&ne(a))}function Fi(l,n){l=null,n.alternate!==null&&(l=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==l&&(n.refCount++,l!=null&&ne(l))}function gn(l,n,a,t){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tr(l,n,a,t),n=n.sibling}function tr(l,n,a,t){var e=n.flags;switch(n.tag){case 0:case 11:case 15:gn(l,n,a,t),e&2048&&Le(9,n);break;case 1:gn(l,n,a,t);break;case 3:gn(l,n,a,t),e&2048&&(l=null,n.alternate!==null&&(l=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==l&&(n.refCount++,l!=null&&ne(l)));break;case 12:if(e&2048){gn(l,n,a,t),l=n.stateNode;try{var u=n.memoizedProps,i=u.id,A=u.onPostCommit;typeof A=="function"&&A(i,n.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(T){_l(n,n.return,T)}}else gn(l,n,a,t);break;case 31:gn(l,n,a,t);break;case 13:gn(l,n,a,t);break;case 23:break;case 22:u=n.stateNode,i=n.alternate,n.memoizedState!==null?u._visibility&2?gn(l,n,a,t):_e(l,n):u._visibility&2?gn(l,n,a,t):(u._visibility|=2,mt(l,n,a,t,(n.subtreeFlags&10256)!==0||!1)),e&2048&&bi(i,n);break;case 24:gn(l,n,a,t),e&2048&&Fi(n.alternate,n);break;default:gn(l,n,a,t)}}function mt(l,n,a,t,e){for(e=e&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=l,i=n,A=a,T=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:mt(u,i,A,T,e),Le(8,i);break;case 23:break;case 22:var R=i.stateNode;i.memoizedState!==null?R._visibility&2?mt(u,i,A,T,e):_e(u,i):(R._visibility|=2,mt(u,i,A,T,e)),e&&o&2048&&bi(i.alternate,i);break;case 24:mt(u,i,A,T,e),e&&o&2048&&Fi(i.alternate,i);break;default:mt(u,i,A,T,e)}n=n.sibling}}function _e(l,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=l,t=n,e=t.flags;switch(t.tag){case 22:_e(a,t),e&2048&&bi(t.alternate,t);break;case 24:_e(a,t),e&2048&&Fi(t.alternate,t);break;default:_e(a,t)}n=n.sibling}}var Be=8192;function Nt(l,n,a){if(l.subtreeFlags&Be)for(l=l.child;l!==null;)er(l,n,a),l=l.sibling}function er(l,n,a){switch(l.tag){case 26:Nt(l,n,a),l.flags&Be&&l.memoizedState!==null&&Ps(a,pn,l.memoizedState,l.memoizedProps);break;case 5:Nt(l,n,a);break;case 3:case 4:var t=pn;pn=U0(l.stateNode.containerInfo),Nt(l,n,a),pn=t;break;case 22:l.memoizedState===null&&(t=l.alternate,t!==null&&t.memoizedState!==null?(t=Be,Be=16777216,Nt(l,n,a),Be=t):Nt(l,n,a));break;default:Nt(l,n,a)}}function ur(l){var n=l.alternate;if(n!==null&&(l=n.child,l!==null)){n.child=null;do n=l.sibling,l.sibling=null,l=n;while(l!==null)}}function de(l){var n=l.deletions;if((l.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var t=n[a];Yl=t,Ar(t,l)}ur(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ir(l),l=l.sibling}function ir(l){switch(l.tag){case 0:case 11:case 15:de(l),l.flags&2048&&Sa(9,l,l.return);break;case 3:de(l);break;case 12:de(l);break;case 22:var n=l.stateNode;l.memoizedState!==null&&n._visibility&2&&(l.return===null||l.return.tag!==13)?(n._visibility&=-3,m0(l)):de(l);break;default:de(l)}}function m0(l){var n=l.deletions;if((l.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var t=n[a];Yl=t,Ar(t,l)}ur(l)}for(l=l.child;l!==null;){switch(n=l,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),m0(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,m0(n));break;default:m0(n)}l=l.sibling}}function Ar(l,n){for(;Yl!==null;){var a=Yl;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var t=a.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:ne(a.memoizedState.cache)}if(t=a.child,t!==null)t.return=a,Yl=t;else l:for(a=l;Yl!==null;){t=Yl;var e=t.sibling,u=t.return;if(QD(t),t===a){Yl=null;break l}if(e!==null){e.return=u,Yl=e;break l}Yl=u}}}var Qc={getCacheForType:function(l){var n=ql(Pl),a=n.data.get(l);return a===void 0&&(a=l(),n.data.set(l,a)),a},cacheSignal:function(){return ql(Pl).controller.signal}},kc=typeof WeakMap=="function"?WeakMap:Map,cl=0,Sl=null,$=null,al=0,ol=0,Bn=null,Ea=!1,Ct=!1,vi=!1,ua=0,Ol=0,Ga=0,wa=0,Oi=0,dn=0,bt=0,Re=null,Dn=null,Xi=!1,N0=0,Tr=0,C0=1/0,b0=null,ha=null,Vl=0,ya=null,Ft=null,ia=0,pi=0,gi=null,Dr=null,Se=0,Ii=null;function Rn(){return(cl&2)!==0&&al!==0?al&-al:E.T!==null?zi():mA()}function rr(){if(dn===0)if((al&536870912)===0||el){var l=Pe;Pe<<=1,(Pe&3932160)===0&&(Pe=262144),dn=l}else dn=536870912;return l=on.current,l!==null&&(l.flags|=32),dn}function rn(l,n,a){(l===Sl&&(ol===2||ol===9)||l.cancelPendingCommit!==null)&&(vt(l,0),ma(l,al,dn,!1)),zt(l,a),((cl&2)===0||l!==Sl)&&(l===Sl&&((cl&2)===0&&(wa|=a),Ol===4&&ma(l,al,dn,!1)),Hn(l))}function cr(l,n,a){if((cl&6)!==0)throw Error(s(327));var t=!a&&(n&127)===0&&(n&l.expiredLanes)===0||Vt(l,n),e=t?ns(l,n):Mi(l,n,!0),u=t;do{if(e===0){Ct&&!t&&ma(l,n,0,!1);break}else{if(a=l.current.alternate,u&&!$c(a)){e=Mi(l,n,!1),u=!1;continue}if(e===2){if(u=n,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){n=i;l:{var A=l;e=Re;var T=A.current.memoizedState.isDehydrated;if(T&&(vt(A,i).flags|=256),i=Mi(A,i,!1),i!==2){if(vi&&!T){A.errorRecoveryDisabledLanes|=u,wa|=u,e=4;break l}u=Dn,Dn=e,u!==null&&(Dn===null?Dn=u:Dn.push.apply(Dn,u))}e=i}if(u=!1,e!==2)continue}}if(e===1){vt(l,0),ma(l,n,0,!0);break}l:{switch(t=l,u=e,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ma(t,n,dn,!Ea);break l;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(e=N0+300-$l(),10<e)){if(ma(t,n,dn,!Ea),Ue(t,0,!0)!==0)break l;ia=n,t.timeoutHandle=Yr(sr.bind(null,t,a,Dn,b0,Xi,n,dn,wa,bt,Ea,u,"Throttled",-0,0),e);break l}sr(t,a,Dn,b0,Xi,n,dn,wa,bt,Ea,u,null,-0,0)}}break}while(!0);Hn(l)}function sr(l,n,a,t,e,u,i,A,T,o,R,h,_,B){if(l.timeoutHandle=-1,h=n.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zn},er(n,u,h);var v=(u&62914560)===u?N0-$l():(u&4194048)===u?Tr-$l():0;if(v=Ms(h,v),v!==null){ia=u,l.cancelPendingCommit=v(Sr.bind(null,l,n,u,a,t,e,i,A,T,R,h,null,_,B)),ma(l,u,i,!o);return}}Sr(l,n,u,a,t,e,i,A,T)}function $c(l){for(var n=l;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var t=0;t<a.length;t++){var e=a[t],u=e.getSnapshot;e=e.value;try{if(!fn(u(),e))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===l)break;for(;n.sibling===null;){if(n.return===null||n.return===l)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ma(l,n,a,t){n&=~Oi,n&=~wa,l.suspendedLanes|=n,l.pingedLanes&=~n,t&&(l.warmLanes|=n),t=l.expirationTimes;for(var e=n;0<e;){var u=31-sn(e),i=1<<u;t[u]=-1,e&=~i}a!==0&&GA(l,a,n)}function F0(){return(cl&6)===0?(Ee(0),!1):!0}function Pi(){if($!==null){if(ol===0)var l=$.return;else l=$,Kn=za=null,ku(l),St=null,te=0,l=$;for(;l!==null;)xD(l.alternate,l),l=l.return;$=null}}function vt(l,n){var a=l.timeoutHandle;a!==-1&&(l.timeoutHandle=-1,Rs(a)),a=l.cancelPendingCommit,a!==null&&(l.cancelPendingCommit=null,a()),ia=0,Pi(),Sl=l,$=a=Wn(l.current,null),al=n,ol=0,Bn=null,Ea=!1,Ct=Vt(l,n),vi=!1,bt=dn=Oi=wa=Ga=Ol=0,Dn=Re=null,Xi=!1,(n&8)!==0&&(n|=n&32);var t=l.entangledLanes;if(t!==0)for(l=l.entanglements,t&=n;0<t;){var e=31-sn(t),u=1<<e;n|=l[e],t&=~u}return ua=n,we(),a}function fr(l,n){K=null,E.H=ce,n===Rt||n===e0?(n=FT(),ol=3):n===Vu?(n=FT(),ol=4):ol=n===Li?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Bn=n,$===null&&(Ol=1,d0(l,hn(n,l.current)))}function Lr(){var l=on.current;return l===null?!0:(al&4194048)===al?Cn===null:(al&62914560)===al||(al&536870912)!==0?l===Cn:!1}function or(){var l=E.H;return E.H=ce,l===null?ce:l}function _r(){var l=E.A;return E.A=Qc,l}function v0(){Ol=4,Ea||(al&4194048)!==al&&on.current!==null||(Ct=!0),(Ga&134217727)===0&&(wa&134217727)===0||Sl===null||ma(Sl,al,dn,!1)}function Mi(l,n,a){var t=cl;cl|=2;var e=or(),u=_r();(Sl!==l||al!==n)&&(b0=null,vt(l,n)),n=!1;var i=Ol;l:do try{if(ol!==0&&$!==null){var A=$,T=Bn;switch(ol){case 8:Pi(),i=6;break l;case 3:case 2:case 9:case 6:on.current===null&&(n=!0);var o=ol;if(ol=0,Bn=null,Ot(l,A,T,o),a&&Ct){i=0;break l}break;default:o=ol,ol=0,Bn=null,Ot(l,A,T,o)}}ls(),i=Ol;break}catch(R){fr(l,R)}while(!0);return n&&l.shellSuspendCounter++,Kn=za=null,cl=t,E.H=e,E.A=u,$===null&&(Sl=null,al=0,we()),i}function ls(){for(;$!==null;)Br($)}function ns(l,n){var a=cl;cl|=2;var t=or(),e=_r();Sl!==l||al!==n?(b0=null,C0=$l()+500,vt(l,n)):Ct=Vt(l,n);l:do try{if(ol!==0&&$!==null){n=$;var u=Bn;n:switch(ol){case 1:ol=0,Bn=null,Ot(l,n,u,1);break;case 2:case 9:if(CT(u)){ol=0,Bn=null,dr(n);break}n=function(){ol!==2&&ol!==9||Sl!==l||(ol=7),Hn(l)},u.then(n,n);break l;case 3:ol=7;break l;case 4:ol=5;break l;case 7:CT(u)?(ol=0,Bn=null,dr(n)):(ol=0,Bn=null,Ot(l,n,u,7));break;case 5:var i=null;switch($.tag){case 26:i=$.memoizedState;case 5:case 27:var A=$;if(i?t1(i):A.stateNode.complete){ol=0,Bn=null;var T=A.sibling;if(T!==null)$=T;else{var o=A.return;o!==null?($=o,O0(o)):$=null}break n}}ol=0,Bn=null,Ot(l,n,u,5);break;case 6:ol=0,Bn=null,Ot(l,n,u,6);break;case 8:Pi(),Ol=6;break l;default:throw Error(s(462))}}as();break}catch(R){fr(l,R)}while(!0);return Kn=za=null,E.H=t,E.A=e,cl=a,$!==null?0:(Sl=null,al=0,we(),Ol)}function as(){for(;$!==null&&!xn();)Br($)}function Br(l){var n=zD(l.alternate,l,ua);l.memoizedProps=l.pendingProps,n===null?O0(l):$=n}function dr(l){var n=l,a=n.alternate;switch(n.tag){case 15:case 0:n=ID(a,n,n.pendingProps,n.type,void 0,al);break;case 11:n=ID(a,n,n.pendingProps,n.type.render,n.ref,al);break;case 5:ku(n);default:xD(a,n),n=$=_T(n,ua),n=zD(a,n,ua)}l.memoizedProps=l.pendingProps,n===null?O0(l):$=n}function Ot(l,n,a,t){Kn=za=null,ku(n),St=null,te=0;var e=n.return;try{if(jc(l,e,n,a,al)){Ol=1,d0(l,hn(a,l.current)),$=null;return}}catch(u){if(e!==null)throw $=e,u;Ol=1,d0(l,hn(a,l.current)),$=null;return}n.flags&32768?(el||t===1?l=!0:Ct||(al&536870912)!==0?l=!1:(Ea=l=!0,(t===2||t===9||t===3||t===6)&&(t=on.current,t!==null&&t.tag===13&&(t.flags|=16384))),Rr(n,l)):O0(n)}function O0(l){var n=l;do{if((n.flags&32768)!==0){Rr(n,Ea);return}l=n.return;var a=Wc(n.alternate,n,ua);if(a!==null){$=a;return}if(n=n.sibling,n!==null){$=n;return}$=n=l}while(n!==null);Ol===0&&(Ol=5)}function Rr(l,n){do{var a=Jc(l.alternate,l);if(a!==null){a.flags&=32767,$=a;return}if(a=l.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(l=l.sibling,l!==null)){$=l;return}$=l=a}while(l!==null);Ol=6,$=null}function Sr(l,n,a,t,e,u,i,A,T){l.cancelPendingCommit=null;do X0();while(Vl!==0);if((cl&6)!==0)throw Error(s(327));if(n!==null){if(n===l.current)throw Error(s(177));if(u=n.lanes|n.childLanes,u|=mu,I1(l,a,u,i,A,T),l===Sl&&($=Sl=null,al=0),Ft=n,ya=l,ia=a,pi=u,gi=e,Dr=t,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,is(ge,function(){return mr(),null})):(l.callbackNode=null,l.callbackPriority=0),t=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||t){t=E.T,E.T=null,e=N.p,N.p=2,i=cl,cl|=4;try{Kc(l,n,a)}finally{cl=i,N.p=e,E.T=t}}Vl=1,Er(),Gr(),hr()}}function Er(){if(Vl===1){Vl=0;var l=ya,n=Ft,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var t=N.p;N.p=2;var e=cl;cl|=4;try{nr(n,l);var u=Ki,i=AT(l.containerInfo),A=u.focusedElem,T=u.selectionRange;if(i!==A&&A&&A.ownerDocument&&iT(A.ownerDocument.documentElement,A)){if(T!==null&&Su(A)){var o=T.start,R=T.end;if(R===void 0&&(R=o),"selectionStart"in A)A.selectionStart=o,A.selectionEnd=Math.min(R,A.value.length);else{var h=A.ownerDocument||document,_=h&&h.defaultView||window;if(_.getSelection){var B=_.getSelection(),v=A.textContent.length,V=Math.min(T.start,v),Rl=T.end===void 0?V:Math.min(T.end,v);!B.extend&&V>Rl&&(i=Rl,Rl=V,V=i);var c=uT(A,V),D=uT(A,Rl);if(c&&D&&(B.rangeCount!==1||B.anchorNode!==c.node||B.anchorOffset!==c.offset||B.focusNode!==D.node||B.focusOffset!==D.offset)){var f=h.createRange();f.setStart(c.node,c.offset),B.removeAllRanges(),V>Rl?(B.addRange(f),B.extend(D.node,D.offset)):(f.setEnd(D.node,D.offset),B.addRange(f))}}}}for(h=[],B=A;B=B.parentNode;)B.nodeType===1&&h.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<h.length;A++){var G=h[A];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}j0=!!Ji,Ki=Ji=null}finally{cl=e,N.p=t,E.T=a}}l.current=n,Vl=2}}function Gr(){if(Vl===2){Vl=0;var l=ya,n=Ft,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var t=N.p;N.p=2;var e=cl;cl|=4;try{wD(l,n.alternate,n)}finally{cl=e,N.p=t,E.T=a}}Vl=3}}function hr(){if(Vl===4||Vl===3){Vl=0,In();var l=ya,n=Ft,a=ia,t=Dr;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Vl=5:(Vl=0,Ft=ya=null,yr(l,l.pendingLanes));var e=l.pendingLanes;if(e===0&&(ha=null),nu(a),n=n.stateNode,cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Ht,n,void 0,(n.current.flags&128)===128)}catch{}if(t!==null){n=E.T,e=N.p,N.p=2,E.T=null;try{for(var u=l.onRecoverableError,i=0;i<t.length;i++){var A=t[i];u(A.value,{componentStack:A.stack})}}finally{E.T=n,N.p=e}}(ia&3)!==0&&X0(),Hn(l),e=l.pendingLanes,(a&261930)!==0&&(e&42)!==0?l===Ii?Se++:(Se=0,Ii=l):Se=0,Ee(0)}}function yr(l,n){(l.pooledCacheLanes&=n)===0&&(n=l.pooledCache,n!=null&&(l.pooledCache=null,ne(n)))}function X0(){return Er(),Gr(),hr(),mr()}function mr(){if(Vl!==5)return!1;var l=ya,n=pi;pi=0;var a=nu(ia),t=E.T,e=N.p;try{N.p=32>a?32:a,E.T=null,a=gi,gi=null;var u=ya,i=ia;if(Vl=0,Ft=ya=null,ia=0,(cl&6)!==0)throw Error(s(331));var A=cl;if(cl|=4,ir(u.current),tr(u,u.current,i,a),cl=A,Ee(0,!1),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Ht,u)}catch{}return!0}finally{N.p=e,E.T=t,yr(l,n)}}function Nr(l,n,a){n=hn(a,n),n=fi(l.stateNode,n,2),l=Ba(l,n,2),l!==null&&(zt(l,2),Hn(l))}function _l(l,n,a){if(l.tag===3)Nr(l,l,a);else for(;n!==null;){if(n.tag===3){Nr(n,l,a);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(ha===null||!ha.has(t))){l=hn(a,l),a=CD(2),t=Ba(n,a,2),t!==null&&(bD(a,t,n,l),zt(t,2),Hn(t));break}}n=n.return}}function Ui(l,n,a){var t=l.pingCache;if(t===null){t=l.pingCache=new kc;var e=new Set;t.set(n,e)}else e=t.get(n),e===void 0&&(e=new Set,t.set(n,e));e.has(a)||(vi=!0,e.add(a),l=ts.bind(null,l,n,a),n.then(l,l))}function ts(l,n,a){var t=l.pingCache;t!==null&&t.delete(n),l.pingedLanes|=l.suspendedLanes&a,l.warmLanes&=~a,Sl===l&&(al&a)===a&&(Ol===4||Ol===3&&(al&62914560)===al&&300>$l()-N0?(cl&2)===0&&vt(l,0):Oi|=a,bt===al&&(bt=0)),Hn(l)}function Cr(l,n){n===0&&(n=EA()),l=Ua(l,n),l!==null&&(zt(l,n),Hn(l))}function es(l){var n=l.memoizedState,a=0;n!==null&&(a=n.retryLane),Cr(l,a)}function us(l,n){var a=0;switch(l.tag){case 31:case 13:var t=l.stateNode,e=l.memoizedState;e!==null&&(a=e.retryLane);break;case 19:t=l.stateNode;break;case 22:t=l.stateNode._retryCache;break;default:throw Error(s(314))}t!==null&&t.delete(n),Cr(l,a)}function is(l,n){return hl(l,n)}var p0=null,Xt=null,Hi=!1,g0=!1,Vi=!1,Na=0;function Hn(l){l!==Xt&&l.next===null&&(Xt===null?p0=Xt=l:Xt=Xt.next=l),g0=!0,Hi||(Hi=!0,Ts())}function Ee(l,n){if(!Vi&&g0){Vi=!0;do for(var a=!1,t=p0;t!==null;){if(l!==0){var e=t.pendingLanes;if(e===0)var u=0;else{var i=t.suspendedLanes,A=t.pingedLanes;u=(1<<31-sn(42|l)+1)-1,u&=e&~(i&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Or(t,u))}else u=al,u=Ue(t,t===Sl?u:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(u&3)===0||Vt(t,u)||(a=!0,Or(t,u));t=t.next}while(a);Vi=!1}}function As(){br()}function br(){g0=Hi=!1;var l=0;Na!==0&&ds()&&(l=Na);for(var n=$l(),a=null,t=p0;t!==null;){var e=t.next,u=Fr(t,n);u===0?(t.next=null,a===null?p0=e:a.next=e,e===null&&(Xt=a)):(a=t,(l!==0||(u&3)!==0)&&(g0=!0)),t=e}Vl!==0&&Vl!==5||Ee(l),Na!==0&&(Na=0)}function Fr(l,n){for(var a=l.suspendedLanes,t=l.pingedLanes,e=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-sn(u),A=1<<i,T=e[i];T===-1?((A&a)===0||(A&t)!==0)&&(e[i]=g1(A,n)):T<=n&&(l.expiredLanes|=A),u&=~A}if(n=Sl,a=al,a=Ue(l,l===n?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),t=l.callbackNode,a===0||l===n&&(ol===2||ol===9)||l.cancelPendingCommit!==null)return t!==null&&t!==null&&On(t),l.callbackNode=null,l.callbackPriority=0;if((a&3)===0||Vt(l,a)){if(n=a&-a,n===l.callbackPriority)return n;switch(t!==null&&On(t),nu(a)){case 2:case 8:a=RA;break;case 32:a=ge;break;case 268435456:a=SA;break;default:a=ge}return t=vr.bind(null,l),a=hl(a,t),l.callbackPriority=n,l.callbackNode=a,n}return t!==null&&t!==null&&On(t),l.callbackPriority=2,l.callbackNode=null,2}function vr(l,n){if(Vl!==0&&Vl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var a=l.callbackNode;if(X0()&&l.callbackNode!==a)return null;var t=al;return t=Ue(l,l===Sl?t:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),t===0?null:(cr(l,t,n),Fr(l,$l()),l.callbackNode!=null&&l.callbackNode===a?vr.bind(null,l):null)}function Or(l,n){if(X0())return null;cr(l,n,!0)}function Ts(){Ss(function(){(cl&6)!==0?hl(dA,As):br()})}function zi(){if(Na===0){var l=Bt;l===0&&(l=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Na=l}return Na}function Xr(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Ye(""+l)}function pr(l,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,l.id&&a.setAttribute("form",l.id),n.parentNode.insertBefore(a,n),l=new FormData(l),a.parentNode.removeChild(a),l}function Ds(l,n,a,t,e){if(n==="submit"&&a&&a.stateNode===e){var u=Xr((e[tn]||null).action),i=t.submitter;i&&(n=(n=i[tn]||null)?Xr(n.formAction):i.getAttribute("formAction"),n!==null&&(u=n,i=null));var A=new qe("action","action",null,t,e);l.push({event:A,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Na!==0){var T=i?pr(e,i):new FormData(e);Ai(a,{pending:!0,data:T,method:e.method,action:u},null,T)}}else typeof u=="function"&&(A.preventDefault(),T=i?pr(e,i):new FormData(e),Ai(a,{pending:!0,data:T,method:e.method,action:u},u,T))},currentTarget:e}]})}}for(var Yi=0;Yi<yu.length;Yi++){var xi=yu[Yi],rs=xi.toLowerCase(),cs=xi[0].toUpperCase()+xi.slice(1);Xn(rs,"on"+cs)}Xn(rT,"onAnimationEnd"),Xn(cT,"onAnimationIteration"),Xn(sT,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(Cc,"onTransitionRun"),Xn(bc,"onTransitionStart"),Xn(Fc,"onTransitionCancel"),Xn(fT,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ge="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ss=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ge));function gr(l,n){n=(n&4)!==0;for(var a=0;a<l.length;a++){var t=l[a],e=t.event;t=t.listeners;l:{var u=void 0;if(n)for(var i=t.length-1;0<=i;i--){var A=t[i],T=A.instance,o=A.currentTarget;if(A=A.listener,T!==u&&e.isPropagationStopped())break l;u=A,e.currentTarget=o;try{u(e)}catch(R){Ke(R)}e.currentTarget=null,u=T}else for(i=0;i<t.length;i++){if(A=t[i],T=A.instance,o=A.currentTarget,A=A.listener,T!==u&&e.isPropagationStopped())break l;u=A,e.currentTarget=o;try{u(e)}catch(R){Ke(R)}e.currentTarget=null,u=T}}}}function ll(l,n){var a=n[au];a===void 0&&(a=n[au]=new Set);var t=l+"__bubble";a.has(t)||(Ir(n,l,2,!1),a.add(t))}function ji(l,n,a){var t=0;n&&(t|=4),Ir(a,l,t,n)}var I0="_reactListening"+Math.random().toString(36).slice(2);function Zi(l){if(!l[I0]){l[I0]=!0,bA.forEach(function(a){a!=="selectionchange"&&(ss.has(a)||ji(a,!1,l),ji(a,!0,l))});var n=l.nodeType===9?l:l.ownerDocument;n===null||n[I0]||(n[I0]=!0,ji("selectionchange",!1,n))}}function Ir(l,n,a,t){switch(r1(n)){case 2:var e=Vs;break;case 8:e=zs;break;default:e=iA}a=e.bind(null,n,a,l),e=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(e=!0),t?e!==void 0?l.addEventListener(n,a,{capture:!0,passive:e}):l.addEventListener(n,a,!0):e!==void 0?l.addEventListener(n,a,{passive:e}):l.addEventListener(n,a,!1)}function qi(l,n,a,t,e){var u=t;if((n&1)===0&&(n&2)===0&&t!==null)l:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var A=t.stateNode.containerInfo;if(A===e)break;if(i===4)for(i=t.return;i!==null;){var T=i.tag;if((T===3||T===4)&&i.stateNode.containerInfo===e)return;i=i.return}for(;A!==null;){if(i=lt(A),i===null)return;if(T=i.tag,T===5||T===6||T===26||T===27){t=u=i;continue l}A=A.parentNode}}t=t.return}VA(function(){var o=u,R=Du(a),h=[];l:{var _=LT.get(l);if(_!==void 0){var B=qe,v=l;switch(l){case"keypress":if(je(a)===0)break l;case"keydown":case"keyup":B=uc;break;case"focusin":v="focus",B=ou;break;case"focusout":v="blur",B=ou;break;case"beforeblur":case"afterblur":B=ou;break;case"click":if(a.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=xA;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=W1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Tc;break;case rT:case cT:case sT:B=w1;break;case fT:B=rc;break;case"scroll":case"scrollend":B=Z1;break;case"wheel":B=sc;break;case"copy":case"cut":case"paste":B=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=ZA;break;case"toggle":case"beforetoggle":B=Lc}var V=(n&4)!==0,Rl=!V&&(l==="scroll"||l==="scrollend"),c=V?_!==null?_+"Capture":null:_;V=[];for(var D=o,f;D!==null;){var G=D;if(f=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||f===null||c===null||(G=jt(D,c),G!=null&&V.push(he(D,G,f))),Rl)break;D=D.return}0<V.length&&(_=new B(_,v,null,a,R),h.push({event:_,listeners:V}))}}if((n&7)===0){l:{if(_=l==="mouseover"||l==="pointerover",B=l==="mouseout"||l==="pointerout",_&&a!==Tu&&(v=a.relatedTarget||a.fromElement)&&(lt(v)||v[$a]))break l;if((B||_)&&(_=R.window===R?R:(_=R.ownerDocument)?_.defaultView||_.parentWindow:window,B?(v=a.relatedTarget||a.toElement,B=o,v=v?lt(v):null,v!==null&&(Rl=m(v),V=v.tag,v!==Rl||V!==5&&V!==27&&V!==6)&&(v=null)):(B=null,v=o),B!==v)){if(V=xA,G="onMouseLeave",c="onMouseEnter",D="mouse",(l==="pointerout"||l==="pointerover")&&(V=ZA,G="onPointerLeave",c="onPointerEnter",D="pointer"),Rl=B==null?_:xt(B),f=v==null?_:xt(v),_=new V(G,D+"leave",B,a,R),_.target=Rl,_.relatedTarget=f,G=null,lt(R)===o&&(V=new V(c,D+"enter",v,a,R),V.target=f,V.relatedTarget=Rl,G=V),Rl=G,B&&v)n:{for(V=fs,c=B,D=v,f=0,G=c;G;G=V(G))f++;G=0;for(var M=D;M;M=V(M))G++;for(;0<f-G;)c=V(c),f--;for(;0<G-f;)D=V(D),G--;for(;f--;){if(c===D||D!==null&&c===D.alternate){V=c;break n}c=V(c),D=V(D)}V=null}else V=null;B!==null&&Pr(h,_,B,V,!1),v!==null&&Rl!==null&&Pr(h,Rl,v,V,!0)}}l:{if(_=o?xt(o):window,B=_.nodeName&&_.nodeName.toLowerCase(),B==="select"||B==="input"&&_.type==="file")var Tl=$A;else if(QA(_))if(lT)Tl=yc;else{Tl=Gc;var I=Ec}else B=_.nodeName,!B||B.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?o&&Au(o.elementType)&&(Tl=$A):Tl=hc;if(Tl&&(Tl=Tl(l,o))){kA(h,Tl,a,R);break l}I&&I(l,_,o),l==="focusout"&&o&&_.type==="number"&&o.memoizedProps.value!=null&&iu(_,"number",_.value)}switch(I=o?xt(o):window,l){case"focusin":(QA(I)||I.contentEditable==="true")&&(Dt=I,Eu=o,kt=null);break;case"focusout":kt=Eu=Dt=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,TT(h,a,R);break;case"selectionchange":if(Nc)break;case"keydown":case"keyup":TT(h,a,R)}var w;if(Bu)l:{switch(l){case"compositionstart":var tl="onCompositionStart";break l;case"compositionend":tl="onCompositionEnd";break l;case"compositionupdate":tl="onCompositionUpdate";break l}tl=void 0}else Tt?KA(l,a)&&(tl="onCompositionEnd"):l==="keydown"&&a.keyCode===229&&(tl="onCompositionStart");tl&&(qA&&a.locale!=="ko"&&(Tt||tl!=="onCompositionStart"?tl==="onCompositionEnd"&&Tt&&(w=zA()):(ra=R,su="value"in ra?ra.value:ra.textContent,Tt=!0)),I=P0(o,tl),0<I.length&&(tl=new jA(tl,l,null,a,R),h.push({event:tl,listeners:I}),w?tl.data=w:(w=wA(a),w!==null&&(tl.data=w)))),(w=_c?Bc(l,a):dc(l,a))&&(tl=P0(o,"onBeforeInput"),0<tl.length&&(I=new jA("onBeforeInput","beforeinput",null,a,R),h.push({event:I,listeners:tl}),I.data=w)),Ds(h,l,o,a,R)}gr(h,n)})}function he(l,n,a){return{instance:l,listener:n,currentTarget:a}}function P0(l,n){for(var a=n+"Capture",t=[];l!==null;){var e=l,u=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||u===null||(e=jt(l,a),e!=null&&t.unshift(he(l,e,u)),e=jt(l,n),e!=null&&t.push(he(l,e,u))),l.tag===3)return t;l=l.return}return[]}function fs(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Pr(l,n,a,t,e){for(var u=n._reactName,i=[];a!==null&&a!==t;){var A=a,T=A.alternate,o=A.stateNode;if(A=A.tag,T!==null&&T===t)break;A!==5&&A!==26&&A!==27||o===null||(T=o,e?(o=jt(a,u),o!=null&&i.unshift(he(a,o,T))):e||(o=jt(a,u),o!=null&&i.push(he(a,o,T)))),a=a.return}i.length!==0&&l.push({event:n,listeners:i})}var Ls=/\r\n?/g,os=/\u0000|\uFFFD/g;function Mr(l){return(typeof l=="string"?l:""+l).replace(Ls,`
`).replace(os,"")}function Ur(l,n){return n=Mr(n),Mr(l)===n}function dl(l,n,a,t,e,u){switch(a){case"children":typeof t=="string"?n==="body"||n==="textarea"&&t===""||ut(l,t):(typeof t=="number"||typeof t=="bigint")&&n!=="body"&&ut(l,""+t);break;case"className":Ve(l,"class",t);break;case"tabIndex":Ve(l,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ve(l,a,t);break;case"style":UA(l,t,u);break;case"data":if(n!=="object"){Ve(l,"data",t);break}case"src":case"href":if(t===""&&(n!=="a"||a!=="href")){l.removeAttribute(a);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){l.removeAttribute(a);break}t=Ye(""+t),l.setAttribute(a,t);break;case"action":case"formAction":if(typeof t=="function"){l.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&dl(l,n,"name",e.name,e,null),dl(l,n,"formEncType",e.formEncType,e,null),dl(l,n,"formMethod",e.formMethod,e,null),dl(l,n,"formTarget",e.formTarget,e,null)):(dl(l,n,"encType",e.encType,e,null),dl(l,n,"method",e.method,e,null),dl(l,n,"target",e.target,e,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){l.removeAttribute(a);break}t=Ye(""+t),l.setAttribute(a,t);break;case"onClick":t!=null&&(l.onclick=Zn);break;case"onScroll":t!=null&&ll("scroll",l);break;case"onScrollEnd":t!=null&&ll("scrollend",l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(a=t.__html,a!=null){if(e.children!=null)throw Error(s(60));l.innerHTML=a}}break;case"multiple":l.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":l.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){l.removeAttribute("xlink:href");break}a=Ye(""+t),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?l.setAttribute(a,""+t):l.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?l.setAttribute(a,""):l.removeAttribute(a);break;case"capture":case"download":t===!0?l.setAttribute(a,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?l.setAttribute(a,t):l.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?l.setAttribute(a,t):l.removeAttribute(a);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?l.removeAttribute(a):l.setAttribute(a,t);break;case"popover":ll("beforetoggle",l),ll("toggle",l),He(l,"popover",t);break;case"xlinkActuate":jn(l,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":jn(l,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":jn(l,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":jn(l,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":jn(l,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":jn(l,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":jn(l,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":jn(l,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":jn(l,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":He(l,"is",t);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=x1.get(a)||a,He(l,a,t))}}function Wi(l,n,a,t,e,u){switch(a){case"style":UA(l,t,u);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(s(61));if(a=t.__html,a!=null){if(e.children!=null)throw Error(s(60));l.innerHTML=a}}break;case"children":typeof t=="string"?ut(l,t):(typeof t=="number"||typeof t=="bigint")&&ut(l,""+t);break;case"onScroll":t!=null&&ll("scroll",l);break;case"onScrollEnd":t!=null&&ll("scrollend",l);break;case"onClick":t!=null&&(l.onclick=Zn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!FA.hasOwnProperty(a))l:{if(a[0]==="o"&&a[1]==="n"&&(e=a.endsWith("Capture"),n=a.slice(2,e?a.length-7:void 0),u=l[tn]||null,u=u!=null?u[a]:null,typeof u=="function"&&l.removeEventListener(n,u,e),typeof t=="function")){typeof u!="function"&&u!==null&&(a in l?l[a]=null:l.hasAttribute(a)&&l.removeAttribute(a)),l.addEventListener(n,t,e);break l}a in l?l[a]=t:t===!0?l.setAttribute(a,""):He(l,a,t)}}}function Jl(l,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ll("error",l),ll("load",l);var t=!1,e=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":t=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:dl(l,n,u,i,a,null)}}e&&dl(l,n,"srcSet",a.srcSet,a,null),t&&dl(l,n,"src",a.src,a,null);return;case"input":ll("invalid",l);var A=u=i=e=null,T=null,o=null;for(t in a)if(a.hasOwnProperty(t)){var R=a[t];if(R!=null)switch(t){case"name":e=R;break;case"type":i=R;break;case"checked":T=R;break;case"defaultChecked":o=R;break;case"value":u=R;break;case"defaultValue":A=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,n));break;default:dl(l,n,t,R,a,null)}}gA(l,u,A,T,o,i,e,!1);return;case"select":ll("invalid",l),t=i=u=null;for(e in a)if(a.hasOwnProperty(e)&&(A=a[e],A!=null))switch(e){case"value":u=A;break;case"defaultValue":i=A;break;case"multiple":t=A;default:dl(l,n,e,A,a,null)}n=u,a=i,l.multiple=!!t,n!=null?et(l,!!t,n,!1):a!=null&&et(l,!!t,a,!0);return;case"textarea":ll("invalid",l),u=e=t=null;for(i in a)if(a.hasOwnProperty(i)&&(A=a[i],A!=null))switch(i){case"value":t=A;break;case"defaultValue":e=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:dl(l,n,i,A,a,null)}PA(l,t,e,u);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(t=a[T],t!=null))switch(T){case"selected":l.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:dl(l,n,T,t,a,null)}return;case"dialog":ll("beforetoggle",l),ll("toggle",l),ll("cancel",l),ll("close",l);break;case"iframe":case"object":ll("load",l);break;case"video":case"audio":for(t=0;t<Ge.length;t++)ll(Ge[t],l);break;case"image":ll("error",l),ll("load",l);break;case"details":ll("toggle",l);break;case"embed":case"source":case"link":ll("error",l),ll("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in a)if(a.hasOwnProperty(o)&&(t=a[o],t!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:dl(l,n,o,t,a,null)}return;default:if(Au(n)){for(R in a)a.hasOwnProperty(R)&&(t=a[R],t!==void 0&&Wi(l,n,R,t,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(t=a[A],t!=null&&dl(l,n,A,t,a,null))}function _s(l,n,a,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,u=null,i=null,A=null,T=null,o=null,R=null;for(B in a){var h=a[B];if(a.hasOwnProperty(B)&&h!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":T=h;default:t.hasOwnProperty(B)||dl(l,n,B,null,t,h)}}for(var _ in t){var B=t[_];if(h=a[_],t.hasOwnProperty(_)&&(B!=null||h!=null))switch(_){case"type":u=B;break;case"name":e=B;break;case"checked":o=B;break;case"defaultChecked":R=B;break;case"value":i=B;break;case"defaultValue":A=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,n));break;default:B!==h&&dl(l,n,_,B,t,h)}}uu(l,i,A,T,o,R,u,e);return;case"select":B=i=A=_=null;for(u in a)if(T=a[u],a.hasOwnProperty(u)&&T!=null)switch(u){case"value":break;case"multiple":B=T;default:t.hasOwnProperty(u)||dl(l,n,u,null,t,T)}for(e in t)if(u=t[e],T=a[e],t.hasOwnProperty(e)&&(u!=null||T!=null))switch(e){case"value":_=u;break;case"defaultValue":A=u;break;case"multiple":i=u;default:u!==T&&dl(l,n,e,u,t,T)}n=A,a=i,t=B,_!=null?et(l,!!a,_,!1):!!t!=!!a&&(n!=null?et(l,!!a,n,!0):et(l,!!a,a?[]:"",!1));return;case"textarea":B=_=null;for(A in a)if(e=a[A],a.hasOwnProperty(A)&&e!=null&&!t.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:dl(l,n,A,null,t,e)}for(i in t)if(e=t[i],u=a[i],t.hasOwnProperty(i)&&(e!=null||u!=null))switch(i){case"value":_=e;break;case"defaultValue":B=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(s(91));break;default:e!==u&&dl(l,n,i,e,t,u)}IA(l,_,B);return;case"option":for(var v in a)if(_=a[v],a.hasOwnProperty(v)&&_!=null&&!t.hasOwnProperty(v))switch(v){case"selected":l.selected=!1;break;default:dl(l,n,v,null,t,_)}for(T in t)if(_=t[T],B=a[T],t.hasOwnProperty(T)&&_!==B&&(_!=null||B!=null))switch(T){case"selected":l.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:dl(l,n,T,_,t,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var V in a)_=a[V],a.hasOwnProperty(V)&&_!=null&&!t.hasOwnProperty(V)&&dl(l,n,V,null,t,_);for(o in t)if(_=t[o],B=a[o],t.hasOwnProperty(o)&&_!==B&&(_!=null||B!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,n));break;default:dl(l,n,o,_,t,B)}return;default:if(Au(n)){for(var Rl in a)_=a[Rl],a.hasOwnProperty(Rl)&&_!==void 0&&!t.hasOwnProperty(Rl)&&Wi(l,n,Rl,void 0,t,_);for(R in t)_=t[R],B=a[R],!t.hasOwnProperty(R)||_===B||_===void 0&&B===void 0||Wi(l,n,R,_,t,B);return}}for(var c in a)_=a[c],a.hasOwnProperty(c)&&_!=null&&!t.hasOwnProperty(c)&&dl(l,n,c,null,t,_);for(h in t)_=t[h],B=a[h],!t.hasOwnProperty(h)||_===B||_==null&&B==null||dl(l,n,h,_,t,B)}function Hr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bs(){if(typeof performance.getEntriesByType=="function"){for(var l=0,n=0,a=performance.getEntriesByType("resource"),t=0;t<a.length;t++){var e=a[t],u=e.transferSize,i=e.initiatorType,A=e.duration;if(u&&A&&Hr(i)){for(i=0,A=e.responseEnd,t+=1;t<a.length;t++){var T=a[t],o=T.startTime;if(o>A)break;var R=T.transferSize,h=T.initiatorType;R&&Hr(h)&&(T=T.responseEnd,i+=R*(T<A?1:(A-o)/(T-o)))}if(--t,n+=8*(u+i)/(e.duration/1e3),l++,10<l)break}}if(0<l)return n/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Ji=null,Ki=null;function M0(l){return l.nodeType===9?l:l.ownerDocument}function Vr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zr(l,n){if(l===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&n==="foreignObject"?0:l}function wi(l,n){return l==="textarea"||l==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qi=null;function ds(){var l=window.event;return l&&l.type==="popstate"?l===Qi?!1:(Qi=l,!0):(Qi=null,!1)}var Yr=typeof setTimeout=="function"?setTimeout:void 0,Rs=typeof clearTimeout=="function"?clearTimeout:void 0,xr=typeof Promise=="function"?Promise:void 0,Ss=typeof queueMicrotask=="function"?queueMicrotask:typeof xr<"u"?function(l){return xr.resolve(null).then(l).catch(Es)}:Yr;function Es(l){setTimeout(function(){throw l})}function Ca(l){return l==="head"}function jr(l,n){var a=n,t=0;do{var e=a.nextSibling;if(l.removeChild(a),e&&e.nodeType===8)if(a=e.data,a==="/$"||a==="/&"){if(t===0){l.removeChild(e),Pt(n);return}t--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")t++;else if(a==="html")ye(l.ownerDocument.documentElement);else if(a==="head"){a=l.ownerDocument.head,ye(a);for(var u=a.firstChild;u;){var i=u.nextSibling,A=u.nodeName;u[Yt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&ye(l.ownerDocument.body);a=e}while(a);Pt(n)}function Zr(l,n){var a=l;l=0;do{var t=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),t&&t.nodeType===8)if(a=t.data,a==="/$"){if(l===0)break;l--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||l++;a=t}while(a)}function ki(l){var n=l.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ki(a),tu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}l.removeChild(a)}}function Gs(l,n,a,t){for(;l.nodeType===1;){var e=a;if(l.nodeName.toLowerCase()!==n.toLowerCase()){if(!t&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(t){if(!l[Yt])switch(n){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==e.rel||l.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||l.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||l.getAttribute("title")!==(e.title==null?null:e.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(e.src==null?null:e.src)||l.getAttribute("type")!==(e.type==null?null:e.type)||l.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(n==="input"&&l.type==="hidden"){var u=e.name==null?null:""+e.name;if(e.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=bn(l.nextSibling),l===null)break}return null}function hs(l,n,a){if(n==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!a||(l=bn(l.nextSibling),l===null))return null;return l}function qr(l,n){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!n||(l=bn(l.nextSibling),l===null))return null;return l}function $i(l){return l.data==="$?"||l.data==="$~"}function lA(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function ys(l,n){var a=l.ownerDocument;if(l.data==="$~")l._reactRetry=n;else if(l.data!=="$?"||a.readyState!=="loading")n();else{var t=function(){n(),a.removeEventListener("DOMContentLoaded",t)};a.addEventListener("DOMContentLoaded",t),l._reactRetry=t}}function bn(l){for(;l!=null;l=l.nextSibling){var n=l.nodeType;if(n===1||n===3)break;if(n===8){if(n=l.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return l}var nA=null;function Wr(l){l=l.nextSibling;for(var n=0;l;){if(l.nodeType===8){var a=l.data;if(a==="/$"||a==="/&"){if(n===0)return bn(l.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}l=l.nextSibling}return null}function Jr(l){l=l.previousSibling;for(var n=0;l;){if(l.nodeType===8){var a=l.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return l;n--}else a!=="/$"&&a!=="/&"||n++}l=l.previousSibling}return null}function Kr(l,n,a){switch(n=M0(a),l){case"html":if(l=n.documentElement,!l)throw Error(s(452));return l;case"head":if(l=n.head,!l)throw Error(s(453));return l;case"body":if(l=n.body,!l)throw Error(s(454));return l;default:throw Error(s(451))}}function ye(l){for(var n=l.attributes;n.length;)l.removeAttributeNode(n[0]);tu(l)}var Fn=new Map,wr=new Set;function U0(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Aa=N.d;N.d={f:ms,r:Ns,D:Cs,C:bs,L:Fs,m:vs,X:Xs,S:Os,M:ps};function ms(){var l=Aa.f(),n=F0();return l||n}function Ns(l){var n=nt(l);n!==null&&n.tag===5&&n.type==="form"?fD(n):Aa.r(l)}var pt=typeof document>"u"?null:document;function Qr(l,n,a){var t=pt;if(t&&typeof n=="string"&&n){var e=En(n);e='link[rel="'+l+'"][href="'+e+'"]',typeof a=="string"&&(e+='[crossorigin="'+a+'"]'),wr.has(e)||(wr.add(e),l={rel:l,crossOrigin:a,href:n},t.querySelector(e)===null&&(n=t.createElement("link"),Jl(n,"link",l),zl(n),t.head.appendChild(n)))}}function Cs(l){Aa.D(l),Qr("dns-prefetch",l,null)}function bs(l,n){Aa.C(l,n),Qr("preconnect",l,n)}function Fs(l,n,a){Aa.L(l,n,a);var t=pt;if(t&&l&&n){var e='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(e+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(e+='[imagesizes="'+En(a.imageSizes)+'"]')):e+='[href="'+En(l)+'"]';var u=e;switch(n){case"style":u=gt(l);break;case"script":u=It(l)}Fn.has(u)||(l=X({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:l,as:n},a),Fn.set(u,l),t.querySelector(e)!==null||n==="style"&&t.querySelector(me(u))||n==="script"&&t.querySelector(Ne(u))||(n=t.createElement("link"),Jl(n,"link",l),zl(n),t.head.appendChild(n)))}}function vs(l,n){Aa.m(l,n);var a=pt;if(a&&l){var t=n&&typeof n.as=="string"?n.as:"script",e='link[rel="modulepreload"][as="'+En(t)+'"][href="'+En(l)+'"]',u=e;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=It(l)}if(!Fn.has(u)&&(l=X({rel:"modulepreload",href:l},n),Fn.set(u,l),a.querySelector(e)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ne(u)))return}t=a.createElement("link"),Jl(t,"link",l),zl(t),a.head.appendChild(t)}}}function Os(l,n,a){Aa.S(l,n,a);var t=pt;if(t&&l){var e=at(t).hoistableStyles,u=gt(l);n=n||"default";var i=e.get(u);if(!i){var A={loading:0,preload:null};if(i=t.querySelector(me(u)))A.loading=5;else{l=X({rel:"stylesheet",href:l,"data-precedence":n},a),(a=Fn.get(u))&&aA(l,a);var T=i=t.createElement("link");zl(T),Jl(T,"link",l),T._p=new Promise(function(o,R){T.onload=o,T.onerror=R}),T.addEventListener("load",function(){A.loading|=1}),T.addEventListener("error",function(){A.loading|=2}),A.loading|=4,H0(i,n,t)}i={type:"stylesheet",instance:i,count:1,state:A},e.set(u,i)}}}function Xs(l,n){Aa.X(l,n);var a=pt;if(a&&l){var t=at(a).hoistableScripts,e=It(l),u=t.get(e);u||(u=a.querySelector(Ne(e)),u||(l=X({src:l,async:!0},n),(n=Fn.get(e))&&tA(l,n),u=a.createElement("script"),zl(u),Jl(u,"link",l),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},t.set(e,u))}}function ps(l,n){Aa.M(l,n);var a=pt;if(a&&l){var t=at(a).hoistableScripts,e=It(l),u=t.get(e);u||(u=a.querySelector(Ne(e)),u||(l=X({src:l,async:!0,type:"module"},n),(n=Fn.get(e))&&tA(l,n),u=a.createElement("script"),zl(u),Jl(u,"link",l),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},t.set(e,u))}}function kr(l,n,a,t){var e=(e=Q.current)?U0(e):null;if(!e)throw Error(s(446));switch(l){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gt(a.href),a=at(e).hoistableStyles,t=a.get(n),t||(t={type:"style",instance:null,count:0,state:null},a.set(n,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){l=gt(a.href);var u=at(e).hoistableStyles,i=u.get(l);if(i||(e=e.ownerDocument||e,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=e.querySelector(me(l)))&&!u._p&&(i.instance=u,i.state.loading=5),Fn.has(l)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(l,a),u||gs(e,l,a,i.state))),n&&t===null)throw Error(s(528,""));return i}if(n&&t!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=It(a),a=at(e).hoistableScripts,t=a.get(n),t||(t={type:"script",instance:null,count:0,state:null},a.set(n,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,l))}}function gt(l){return'href="'+En(l)+'"'}function me(l){return'link[rel="stylesheet"]['+l+"]"}function $r(l){return X({},l,{"data-precedence":l.precedence,precedence:null})}function gs(l,n,a,t){l.querySelector('link[rel="preload"][as="style"]['+n+"]")?t.loading=1:(n=l.createElement("link"),t.preload=n,n.addEventListener("load",function(){return t.loading|=1}),n.addEventListener("error",function(){return t.loading|=2}),Jl(n,"link",a),zl(n),l.head.appendChild(n))}function It(l){return'[src="'+En(l)+'"]'}function Ne(l){return"script[async]"+l}function l1(l,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var t=l.querySelector('style[data-href~="'+En(a.href)+'"]');if(t)return n.instance=t,zl(t),t;var e=X({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return t=(l.ownerDocument||l).createElement("style"),zl(t),Jl(t,"style",e),H0(t,a.precedence,l),n.instance=t;case"stylesheet":e=gt(a.href);var u=l.querySelector(me(e));if(u)return n.state.loading|=4,n.instance=u,zl(u),u;t=$r(a),(e=Fn.get(e))&&aA(t,e),u=(l.ownerDocument||l).createElement("link"),zl(u);var i=u;return i._p=new Promise(function(A,T){i.onload=A,i.onerror=T}),Jl(u,"link",t),n.state.loading|=4,H0(u,a.precedence,l),n.instance=u;case"script":return u=It(a.src),(e=l.querySelector(Ne(u)))?(n.instance=e,zl(e),e):(t=a,(e=Fn.get(u))&&(t=X({},a),tA(t,e)),l=l.ownerDocument||l,e=l.createElement("script"),zl(e),Jl(e,"link",t),l.head.appendChild(e),n.instance=e);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(t=n.instance,n.state.loading|=4,H0(t,a.precedence,l));return n.instance}function H0(l,n,a){for(var t=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=t.length?t[t.length-1]:null,u=e,i=0;i<t.length;i++){var A=t[i];if(A.dataset.precedence===n)u=A;else if(u!==e)break}u?u.parentNode.insertBefore(l,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(l,n.firstChild))}function aA(l,n){l.crossOrigin==null&&(l.crossOrigin=n.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=n.referrerPolicy),l.title==null&&(l.title=n.title)}function tA(l,n){l.crossOrigin==null&&(l.crossOrigin=n.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=n.referrerPolicy),l.integrity==null&&(l.integrity=n.integrity)}var V0=null;function n1(l,n,a){if(V0===null){var t=new Map,e=V0=new Map;e.set(a,t)}else e=V0,t=e.get(a),t||(t=new Map,e.set(a,t));if(t.has(l))return t;for(t.set(l,null),a=a.getElementsByTagName(l),e=0;e<a.length;e++){var u=a[e];if(!(u[Yt]||u[jl]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(n)||"";i=l+i;var A=t.get(i);A?A.push(u):t.set(i,[u])}}return t}function a1(l,n,a){l=l.ownerDocument||l,l.head.insertBefore(a,n==="title"?l.querySelector("head > title"):null)}function Is(l,n,a){if(a===1||n.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return l=n.disabled,typeof n.precedence=="string"&&l==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function t1(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Ps(l,n,a,t){if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var e=gt(t.href),u=n.querySelector(me(e));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(l.count++,l=z0.bind(l),n.then(l,l)),a.state.loading|=4,a.instance=u,zl(u);return}u=n.ownerDocument||n,t=$r(t),(e=Fn.get(e))&&aA(t,e),u=u.createElement("link"),zl(u);var i=u;i._p=new Promise(function(A,T){i.onload=A,i.onerror=T}),Jl(u,"link",t),a.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=z0.bind(l),n.addEventListener("load",a),n.addEventListener("error",a))}}var eA=0;function Ms(l,n){return l.stylesheets&&l.count===0&&x0(l,l.stylesheets),0<l.count||0<l.imgCount?function(a){var t=setTimeout(function(){if(l.stylesheets&&x0(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+n);0<l.imgBytes&&eA===0&&(eA=62500*Bs());var e=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&x0(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>eA?50:800)+n);return l.unsuspend=a,function(){l.unsuspend=null,clearTimeout(t),clearTimeout(e)}}:null}function z0(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)x0(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Y0=null;function x0(l,n){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Y0=new Map,n.forEach(Us,l),Y0=null,z0.call(l))}function Us(l,n){if(!(n.state.loading&4)){var a=Y0.get(l);if(a)var t=a.get(null);else{a=new Map,Y0.set(l,a);for(var e=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<e.length;u++){var i=e[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),t=i)}t&&a.set(null,t)}e=n.instance,i=e.getAttribute("data-precedence"),u=a.get(i)||t,u===t&&a.set(null,e),a.set(i,e),this.count++,t=z0.bind(this),e.addEventListener("load",t),e.addEventListener("error",t),u?u.parentNode.insertBefore(e,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(e,l.firstChild)),n.state.loading|=4}}var Ce={$$typeof:k,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Hs(l,n,a,t,e,u,i,A,T){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$0(0),this.hiddenUpdates=$0(null),this.identifierPrefix=t,this.onUncaughtError=e,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function e1(l,n,a,t,e,u,i,A,T,o,R,h){return l=new Hs(l,n,a,i,T,o,R,h,A),n=1,u===!0&&(n|=24),u=Ln(3,null,null,n),l.current=u,u.stateNode=l,n=Mu(),n.refCount++,l.pooledCache=n,n.refCount++,u.memoizedState={element:t,isDehydrated:a,cache:n},zu(u),l}function u1(l){return l?(l=st,l):st}function i1(l,n,a,t,e,u){e=u1(e),t.context===null?t.context=e:t.pendingContext=e,t=_a(n),t.payload={element:a},u=u===void 0?null:u,u!==null&&(t.callback=u),a=Ba(l,t,n),a!==null&&(rn(a,l,n),ue(a,l,n))}function A1(l,n){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var a=l.retryLane;l.retryLane=a!==0&&a<n?a:n}}function uA(l,n){A1(l,n),(l=l.alternate)&&A1(l,n)}function T1(l){if(l.tag===13||l.tag===31){var n=Ua(l,67108864);n!==null&&rn(n,l,67108864),uA(l,67108864)}}function D1(l){if(l.tag===13||l.tag===31){var n=Rn();n=lu(n);var a=Ua(l,n);a!==null&&rn(a,l,n),uA(l,n)}}var j0=!0;function Vs(l,n,a,t){var e=E.T;E.T=null;var u=N.p;try{N.p=2,iA(l,n,a,t)}finally{N.p=u,E.T=e}}function zs(l,n,a,t){var e=E.T;E.T=null;var u=N.p;try{N.p=8,iA(l,n,a,t)}finally{N.p=u,E.T=e}}function iA(l,n,a,t){if(j0){var e=AA(t);if(e===null)qi(l,n,t,Z0,a),c1(l,t);else if(xs(e,l,n,a,t))t.stopPropagation();else if(c1(l,t),n&4&&-1<Ys.indexOf(l)){for(;e!==null;){var u=nt(e);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=pa(u.pendingLanes);if(i!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;i;){var T=1<<31-sn(i);A.entanglements[1]|=T,i&=~T}Hn(u),(cl&6)===0&&(C0=$l()+500,Ee(0))}}break;case 31:case 13:A=Ua(u,2),A!==null&&rn(A,u,2),F0(),uA(u,2)}if(u=AA(t),u===null&&qi(l,n,t,Z0,a),u===e)break;e=u}e!==null&&t.stopPropagation()}else qi(l,n,t,null,a)}}function AA(l){return l=Du(l),TA(l)}var Z0=null;function TA(l){if(Z0=null,l=lt(l),l!==null){var n=m(l);if(n===null)l=null;else{var a=n.tag;if(a===13){if(l=ul(n),l!==null)return l;l=null}else if(a===31){if(l=il(n),l!==null)return l;l=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;l=null}else n!==l&&(l=null)}}return Z0=l,null}function r1(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case dA:return 2;case RA:return 8;case ge:case b1:return 32;case SA:return 268435456;default:return 32}default:return 32}}var DA=!1,ba=null,Fa=null,va=null,be=new Map,Fe=new Map,Oa=[],Ys="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c1(l,n){switch(l){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":be.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fe.delete(n.pointerId)}}function ve(l,n,a,t,e,u){return l===null||l.nativeEvent!==u?(l={blockedOn:n,domEventName:a,eventSystemFlags:t,nativeEvent:u,targetContainers:[e]},n!==null&&(n=nt(n),n!==null&&T1(n)),l):(l.eventSystemFlags|=t,n=l.targetContainers,e!==null&&n.indexOf(e)===-1&&n.push(e),l)}function xs(l,n,a,t,e){switch(n){case"focusin":return ba=ve(ba,l,n,a,t,e),!0;case"dragenter":return Fa=ve(Fa,l,n,a,t,e),!0;case"mouseover":return va=ve(va,l,n,a,t,e),!0;case"pointerover":var u=e.pointerId;return be.set(u,ve(be.get(u)||null,l,n,a,t,e)),!0;case"gotpointercapture":return u=e.pointerId,Fe.set(u,ve(Fe.get(u)||null,l,n,a,t,e)),!0}return!1}function s1(l){var n=lt(l.target);if(n!==null){var a=m(n);if(a!==null){if(n=a.tag,n===13){if(n=ul(a),n!==null){l.blockedOn=n,NA(l.priority,function(){D1(a)});return}}else if(n===31){if(n=il(a),n!==null){l.blockedOn=n,NA(l.priority,function(){D1(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){l.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}l.blockedOn=null}function q0(l){if(l.blockedOn!==null)return!1;for(var n=l.targetContainers;0<n.length;){var a=AA(l.nativeEvent);if(a===null){a=l.nativeEvent;var t=new a.constructor(a.type,a);Tu=t,a.target.dispatchEvent(t),Tu=null}else return n=nt(a),n!==null&&T1(n),l.blockedOn=a,!1;n.shift()}return!0}function f1(l,n,a){q0(l)&&a.delete(n)}function js(){DA=!1,ba!==null&&q0(ba)&&(ba=null),Fa!==null&&q0(Fa)&&(Fa=null),va!==null&&q0(va)&&(va=null),be.forEach(f1),Fe.forEach(f1)}function W0(l,n){l.blockedOn===n&&(l.blockedOn=null,DA||(DA=!0,S.unstable_scheduleCallback(S.unstable_NormalPriority,js)))}var J0=null;function L1(l){J0!==l&&(J0=l,S.unstable_scheduleCallback(S.unstable_NormalPriority,function(){J0===l&&(J0=null);for(var n=0;n<l.length;n+=3){var a=l[n],t=l[n+1],e=l[n+2];if(typeof t!="function"){if(TA(t||a)===null)continue;break}var u=nt(a);u!==null&&(l.splice(n,3),n-=3,Ai(u,{pending:!0,data:e,method:a.method,action:t},t,e))}}))}function Pt(l){function n(T){return W0(T,l)}ba!==null&&W0(ba,l),Fa!==null&&W0(Fa,l),va!==null&&W0(va,l),be.forEach(n),Fe.forEach(n);for(var a=0;a<Oa.length;a++){var t=Oa[a];t.blockedOn===l&&(t.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)s1(a),a.blockedOn===null&&Oa.shift();if(a=(l.ownerDocument||l).$$reactFormReplay,a!=null)for(t=0;t<a.length;t+=3){var e=a[t],u=a[t+1],i=e[tn]||null;if(typeof u=="function")i||L1(a);else if(i){var A=null;if(u&&u.hasAttribute("formAction")){if(e=u,i=u[tn]||null)A=i.formAction;else if(TA(e)!==null)continue}else A=i.action;typeof A=="function"?a[t+1]=A:(a.splice(t,3),t-=3),L1(a)}}}function o1(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return e=i})},focusReset:"manual",scroll:"manual"})}function n(){e!==null&&(e(),e=null),t||setTimeout(a,20)}function a(){if(!t&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var t=!1,e=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){t=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),e!==null&&(e(),e=null)}}}function rA(l){this._internalRoot=l}K0.prototype.render=rA.prototype.render=function(l){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,t=Rn();i1(a,t,l,n,null,null)},K0.prototype.unmount=rA.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var n=l.containerInfo;i1(l.current,2,null,l,null,null),F0(),n[$a]=null}};function K0(l){this._internalRoot=l}K0.prototype.unstable_scheduleHydration=function(l){if(l){var n=mA();l={blockedOn:null,target:l,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,l),a===0&&s1(l)}};var _1=b.version;if(_1!=="19.2.7")throw Error(s(527,_1,"19.2.7"));N.findDOMNode=function(l){var n=l._reactInternals;if(n===void 0)throw typeof l.render=="function"?Error(s(188)):(l=Object.keys(l).join(","),Error(s(268,l)));return l=d(n),l=l!==null?J(l):null,l=l===null?null:l.stateNode,l};var Zs={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var w0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!w0.isDisabled&&w0.supportsFiber)try{Ht=w0.inject(Zs),cn=w0}catch{}}return Xe.createRoot=function(l,n){if(!g(l))throw Error(s(299));var a=!1,t="",e=hD,u=yD,i=mD;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onUncaughtError!==void 0&&(e=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=e1(l,1,!1,null,null,a,t,null,e,u,i,o1),l[$a]=n.current,Zi(l),new rA(n)},Xe.hydrateRoot=function(l,n,a){if(!g(l))throw Error(s(299));var t=!1,e="",u=hD,i=yD,A=mD,T=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),n=e1(l,1,!0,n,a??null,t,e,T,u,i,A,o1),n.context=u1(null),a=n.current,t=Rn(),t=lu(t),e=_a(t),e.callback=null,Ba(a,e,t),a=t,n.current.lanes=a,zt(n,a),Hn(n),l[$a]=n.current,Zi(l),new K0(n)},Xe.version="19.2.7",Xe}var N1;function nf(){if(N1)return fA.exports;N1=1;function S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S)}catch(b){console.error(b)}}return S(),fA.exports=lf(),fA.exports}var af=nf();const tf=`DATA METRIC "" 0 1 "0" \r
LAYER 2D_HEAD_BOUNDARY 14 "Layer 1" \r
LAYER 2D_GRID_EXTENT 2 "Layer 1" \r
LAYER 2D_INACTIVE_AREA 11 "Layer 1" \r
LAYER 1D_2D_INTERFACE 12 "Layer 1" \r
DATA BOXW "" 0 1 30.0 \r
DATA EXT_FILLPAT "" 0 1 -1 \r
DATA LACH_DAYTYPE "" 0 1 0 \r
DATA FPDES "" 0 1 1 \r
DATA 2D_ADV_NUM_TGC "" 0 1 0 \r
DATA R_WET "" 0 1 60.000 \r
DATA MZERO "" 0 1 0 \r
DATA RES_FLVECTOR "" 0 1 0 \r
DATA 2D_MB_CORRECT "" 0 1 0 \r
DATA R_WETDRY "" 0 1 60.000 \r
DATA 2D_LOG_DIR "" 0 1 "2D\\Results\\Log" \r
DATA 2D_ASC_OUTPUT "" 0 1 0 \r
DATA 2D_REG_SETID "" 0 4 14 11 13 12 \r
DATA W_OBJSEL "" 0 1 "0" \r
DATA LACH_ZONE "" 0 97 "A03" "A04" "A05" "A06" "A07" "A08" "A09" "A10" "A11" "A12" "A13" "A14" "A15" "A16" "A17" "A18" "A19" "A20" "A21" "A22" "A23" "A24" "A25" "A26" "A27" "A28" "A29" "A30" "A31" "A32" "A33" "A34" "A35" "A36" "A37" "A38" "A39" "A40" "A41" "A42" "A43" "A44" "A45" "A46" "A47" "A48" "A49" "A50" "A51" "A52" "A53" "A54" "A55" "A56" "A57" "A58" "A59" "A60" "A61" "A62" "A63" "A64" "A65" "A66" "A67" "A68" "A69" "A70" "A71" "A72" "A73" "A74" "A75" "A76" "A77" "A78" "A79" "A80" "A81" "A82" "A83" "A84" "A85" "A86" "A87" "A88" "A89" "A90" "A91" "A92" "A93" "A94" "A95" "A96" "A97" "A98" "A99" \r
DATA E_NDESN "" 0 1 0 \r
DATA H_REGENTAG "" 0 1 0 \r
DATA PENDIM7 "" 0 1 1 \r
DATA R_FSWEEP "" 0 1 0 \r
DATA GE_SHOW "" 0 1 0 \r
DATA RELG_FLGVIEW "" 0 1 0 \r
DATA YSL "" 0 1 2020 \r
DATA 2D_REG_SETTYPE "" 0 4 5 1 3 4 \r
DATA GRID_STEPY "" 0 1 20.0000 \r
DATA GRID_STEPX "" 0 1 20.0000 \r
DATA LINKLBLHT "" 0 1 0.15000 \r
DATA R_NMN "" 0 1 0 \r
DATA CNTLJD "" 0 1 0 \r
DATA 2D_CHECKF_CHECK_DIR "" 0 1 1 \r
DATA 2D_CHECKF_CHECK_X1D "" 0 1 0 \r
DATA LBTYP "" 0 1 "CIRCLED" \r
DATA FPFRIC "" 0 1 1 \r
DATA PRNT_PTYPE "" 0 1 0 \r
DATA CNTLNS "" 0 1 0 \r
DATA 2D_OUT_MASSBAL "" 0 1 1 \r
DATA R_NSC "" 0 1 0 \r
DATA TEXTDISPTYPE "" 0 1 0 \r
DATA CAT_FILLPAT "" 0 1 31 \r
DATA RELG_FLGLOCK "" 0 1 1 \r
DATA PRNT_ORITN "" 0 1 1 \r
DATA RATFLAG "" 0 1 0 \r
DATA RES_FPFONT "" 0 1 "arial" \r
DATA RES_FLFONT "" 0 1 "arial" \r
DATA NODE_FLGVIEW "" 0 1 1 \r
DATA SVIEW_NUM "" 0 1 0 \r
DATA W_TIDY "" 0 1 0 \r
DATA R_DRY "" 0 1 86400.00 \r
DATA RES_FPNUM "" 0 1 0 \r
DATA RES_FLNUM "" 0 1 0 \r
DATA _MJCTL "" 0 1 1 \r
DATA GRID_COLOUR "" 0 1 "000000FF" \r
DATA T_TRIBA "" 0 1 0.0 \r
DATA AMEN "" 0 1 13.000 \r
DATA 2DMD_DOM_ID "" 0 1 2 \r
DATA _XFGV "" 0 1 1 \r
DATA QDV_EIDX "" 0 1 -1 \r
DATA LXS_FILLALPHAF "" 0 1 255 \r
DATA LXS_FILLALPHAB "" 0 1 255 \r
DATA R_DRYDAY "" 0 1 0.0 \r
DATA CNTLR "" 0 1 0 \r
DATA CNTLT "" 0 1 0 \r
DATA MHWIDTH "" 0 1 2.00 \r
DATA 2D_PO_TPOINT "" 0 1 0 \r
DATA SAVERES_TYPE "" 0 1 "0" \r
DATA LXS_LINECOL "" 0 1 10485760 \r
DATA CNTLH "" 0 1 0 \r
DATA 2D_DP_SOLVER "" 0 1 0 \r
DATA EXT_LINECOL "" 0 1 16711680 \r
DATA 2D_VISC_TYPE "" 0 1 "1" \r
DATA 2D_RGH_TSET "" 0 1 0 \r
DATA R_INTCTL "" 0 1 "0" \r
DATA R_INTERV "" 0 1 60 \r
DATA LKSIZETYPE "" 0 1 0 \r
DATA R_IYRSTR "" 0 1 2020 \r
DATA R_IYRSTP "" 0 1 2020 \r
DATA QDV_LTBLINDX "" 0 1 -1 \r
DATA NDSIZETYPE "" 0 1 0 \r
DATA T_FGNU "" 0 1 0 \r
DATA 2D_SGS_ENABLED "" 0 1 0 \r
DATA MOSL "" 0 1 7 \r
DATA 2D_SGS_DIA "" 0 1 "1" \r
DATA R_STPHR "" 0 1 0 \r
DATA GRID_SNAP "" 0 1 0 \r
DATA 2D_REG_SETNAME "" 0 4 "Layer 1" "Layer 1" "Layer 1" "Layer 1" \r
DATA FONT_FLAGS "" 0 1 0 \r
DATA _XFGDV "" 0 1 1 \r
DATA 2D_VERSION "" 0 1 "300" \r
DATA FILEI "" 0 1 "Runoff.INT" \r
DATA FILEO "" 0 1 "Runoff.INT" \r
DATA SR_N_FONTNAME "" 0 1 "Arial" \r
DATA SR_L_FONTNAME "" 0 1 "Arial" \r
DATA QDV_NTBLINDX "" 0 1 -1 \r
DATA NLBL_FLGSEL "" 0 1 1 \r
DATA 2D_TMSTEP "" 0 1 5.000 \r
DATA JC_2DINFLOW_TYPE "" 0 1 "1" \r
DATA LXS_LINESIZE "" 0 1 2 \r
DATA CNTLPL "" 0 1 0 \r
DATA MOZERO "" 0 1 7 \r
DATA 2D_VISC_COEFF "" 0 1 0.500 \r
DATA CTYPE "" 0 1 "TYPE1" \r
DATA _XFSV "" 0 1 1 \r
DATA LLBL_FLGSEL "" 0 1 1 \r
DATA GRID_SHOW "" 0 1 0 \r
DATA HZERO "" 0 1 0 \r
DATA LKCS_FLGLOCK "" 0 1 0 \r
DATA FMWID "" 0 1 "CONSTANT" \r
DATA R_SSADJ "" 0 1 0 \r
DATA T_FEVAP "" 0 1 0 \r
DATA FPSERV "" 0 1 0 \r
DATA _RECNAME "" 0 10 "BOD5" "COD" "Total soluble solids" "TKN" "NO2-N+NO3-N1" "Total phosphorus" "Soluble phosphorus" "Total Lead" "Total Copper" "Total Zinc" \r
DATA TBLOBJSEL "" 0 1 "0" \r
DATA RELG_VECTYPE "" 0 1 "3" \r
DATA EXT_LINESIZE "" 0 1 1 \r
DATA PENLA3 "" 0 1 1 \r
DATA PENLA6 "" 0 1 1 \r
DATA PENLA7 "" 0 1 1 \r
DATA T_NPRINT "" 0 1 0 \r
DATA 2D_INSTBL_FLG "" 0 1 0 \r
DATA DEF_FVAL "" 0 10 "0" "0" "1" "1" "19" "0" "0" "0" "0" "0" \r
DATA CAT_FLGLOCK "" 0 1 1 \r
DATA FPCLAS "" 0 1 0 \r
DATA 2D_TXT_FLGSEL "" 0 1 0 \r
DATA 2D_EXT_FLGSEL "" 0 1 1 \r
DATA LXS_LINESTYLE "" 0 1 0 \r
DATA RELG_VECVIEW "" 0 1 0 \r
DATA NCAT_FLGSEL "" 0 1 0 \r
DATA _MOBJ "" 0 1 0 \r
DATA FM_RNFJCSMELTSINGLE "" 0 1 0 \r
DATA LINK_FLGSEL "" 0 1 1 \r
DATA 2D_TOP_TVER "" 0 1 0 \r
DATA TEXTLBLHT "" 0 1 12.00000 \r
DATA TIN_NUM "" 0 1 0 \r
DATA CAT_FLGVIEW "" 0 1 1 \r
DATA _PIPEVIEW "" 0 1 1 \r
DATA T_GNU "" 0 1 0.01 \r
DATA T_SAVREV "" 0 1 1 \r
DATA 2D_DATA_DIR "" 0 1 "2D\\Results\\Data" \r
DATA EXT_FILLALPHAF "" 0 1 255 \r
DATA EXT_FILLALPHAB "" 0 1 255 \r
DATA CAT_SHOWVERTS "" 0 1 0 \r
DATA DZERO "" 0 1 1 \r
DATA 2D_INSTBL_VAL "" 0 1 0.0 \r
DATA CFGMSG "" 0 1 0 \r
DATA R_IVAPC "" 0 1 "0" \r
DATA QDV_GRPTYPE "" 0 1 -1 \r
DATA SIZET3 "" 0 1 3.00 \r
DATA SIZET7 "" 0 1 3.000 \r
DATA 2D_TOP_TPOLY "" 0 1 0 \r
DATA 2D_SGS_SAMPLE_DIST "" 0 1 0.0 \r
DATA RLABLE3 "" 0 1 "Chainage" \r
DATA T_EPSIL "" 0 1 0.000 \r
DATA 2D_OUT_FLOW "" 0 1 1 \r
DATA SR_N_TRANSP "" 0 1 0.0 \r
DATA SR_L_TRANSP "" 0 1 0.0 \r
DATA 2D_ACTIVE "" 0 1 0 \r
DATA T_NITER "" 0 1 8 \r
DATA _MGLDB "" 0 1 1 \r
DATA 2D_PROJECTIONS "" 0 1 "NONEARTH units \\"m\\"" \r
DATA EXT_FILLCOLF "" 0 1 0 \r
DATA EXT_FILLCOLB "" 0 1 16777215 \r
DATA _FIXREP "" 0 1 "0" \r
DATA SAVERES "" 0 1 60.0 \r
DATA LINEGRD "" 0 1 "3" \r
DATA SZERO "" 0 1 0 \r
DATA FPINV "" 0 1 1 \r
DATA 2D_EXT_NAME "" 0 1 "Layer 1" \r
DATA 2D_MB_OUTINT "" 0 1 60.000 \r
DATA T_NINFIL "" 0 1 0 \r
DATA TEXTCOUNT "" 0 1 0 \r
DATA EXT_LINESTYLE "" 0 1 0 \r
DATA T_NCNTRL "" 0 1 0 \r
DATA LKCS_FLGVIEW "" 0 1 0 \r
DATA PRNT_PMART "" 0 1 9.520 \r
DATA PRNT_PMARR "" 0 1 3.670 \r
DATA PRNT_PMARO "" 0 1 0 \r
DATA PRNT_PMARL "" 0 1 3.670 \r
DATA PRNT_PMARC "" 0 1 0 \r
DATA PRNT_PMARB "" 0 1 9.520 \r
DATA PRNT_NMART "" 0 1 2.000 \r
DATA PRNT_NMARR "" 0 1 2.000 \r
DATA PRNT_NMARO "" 0 1 0 \r
DATA PRNT_NMARL "" 0 1 2.000 \r
DATA PRNT_NMARC "" 0 1 0 \r
DATA PRNT_NMARB "" 0 1 2.000 \r
DATA CAT_FLGSEL "" 0 1 1 \r
DATA E_FEVAP "" 0 1 0 \r
DATA _XSEL "" 0 1 "1" \r
DATA T_INFLEW "" 0 1 1 \r
DATA T_DOCYCLE "" 0 1 0 \r
DATA 2D_MESHGEN_NO "" 0 1 0 \r
DATA R_KWALTY "" 0 1 0 \r
DATA NSTART "" 0 1 1 \r
DATA FPDIAM "" 0 1 1 \r
DATA EMODE_SOLVE "" 0 1 1 \r
DATA PRNT_SCALE "" 0 1 1 \r
DATA 2D_REG_TPOLY "" 0 1 0 \r
DATA W_OBJCREAT "" 0 1 1 \r
DATA CAT_TPLINE "" 0 1 0 \r
DATA JNTER "" 0 1 500 \r
DATA LACH_FREQ "" 0 1 2 \r
DATA LKTXDISPTYPE "" 0 1 "0" \r
DATA LACH_DAY4PER "" 0 1 100.000 \r
DATA 2D_REG_TVER "" 0 1 0 \r
DATA LACH_FREQFLAG "" 0 1 1 \r
DATA FUDGE "" 0 1 0.003 \r
DATA 2D_DELIM "" 0 1 "," \r
DATA BOXH3 "" 0 1 15.00 \r
DATA BOXH2 "" 0 1 1.00 \r
DATA LACH_STORM "" 0 1 5 \r
DATA LACH_STATE "" 0 1 0 \r
DATA 2D_REG_TPLINE "" 0 1 0 \r
DATA TITLE "" 0 1 "Example 1" \r
DATA W_IMPFMT "" 0 1 "0" \r
DATA 2D_PO_TVER "" 0 1 0 \r
DATA 2D_PO_TSET "" 0 1 0 \r
DATA W_IMPRNF "" 0 1 1 \r
DATA T_NCNTRL2 "" 0 1 0 \r
DATA W_IMPSTT "" 0 1 1 \r
DATA W_IMPTRN "" 0 1 1 \r
DATA R_RAINFLAG "" 0 1 1 \r
DATA W_IMPEXT "" 0 1 1 \r
DATA 2D_EXPORT_ZPT_MIF "" 0 1 0 \r
DATA 2D_OUT_VEL "" 0 1 1 \r
DATA INV_DROP "" 0 1 4.000 \r
DATA 2D_CONTROL_NUM "" 0 1 1.000 \r
DATA LACH_DAY2PER "" 0 1 40.000 \r
DATA 2D_TS_OUTINT "" 0 1 60.000 \r
DATA R_FGSTORMS "" 0 1 0 \r
DATA 2D_SCHEME_DEF "" 0 1 "0" \r
DATA FPCHAIN "" 0 1 1 \r
DATA RMODE_SOLVE "" 0 1 1 \r
DATA DECS3 "" 0 1 3 \r
DATA 2D_SGS_MAP_EXTENT_FULL "" 0 1 "0" \r
DATA CAT_VERTSIZE "" 0 1 4.000 \r
DATA LXS_FILLPAT "" 0 1 -1 \r
DATA CAT_FILLALPHAF "" 0 1 255 \r
DATA CAT_FILLALPHAB "" 0 1 128 \r
DATA JC_2DINFLOW_COEFF "" 0 1 0.687 \r
DATA 2D_EXTENTS_TYPE "" 0 1 "0" \r
DATA CAT_TVER "" 0 1 0 \r
DATA CAT_TSET "" 0 1 0 \r
DATA R_IPRN2 "" 0 1 0 \r
DATA R_IPRN3 "" 0 1 "0" \r
DATA R_MONTH "" 0 1 7 \r
DATA FPPIT "" 0 1 1 \r
DATA T_FPOLIST "" 0 1 0 \r
DATA T_INTPRT "" 0 1 "1" \r
DATA T_INTPR2 "" 0 1 10 \r
DATA TBL_CURTAB "" 0 1 3 \r
DATA LIDLINK_FLGSEL "" 0 1 1 \r
DATA CNTLOC "" 0 1 0 \r
DATA YZERO "" 0 1 2020 \r
DATA AJ2 "" 0 1 5.0 \r
DATA AJ1 "" 0 1 50000.00 \r
DATA RELG_FLGSEL "" 0 1 0 \r
DATA SIZELA6 "" 0 1 3.00 \r
DATA SIZELA7 "" 0 1 4.00 \r
DATA INTER "" 0 1 500 \r
DATA SIZELA2 "" 0 1 1.00 \r
DATA SIZELA3 "" 0 1 3.00 \r
DATA SSL "" 0 1 0 \r
DATA NDTXDISPTYPE "" 0 1 0 \r
DATA _SRTSIZE "" 0 1 "0" \r
DATA R_IVAP "" 0 1 "0" \r
DATA INV_GELEV "" 0 1 0.0 \r
DATA CNTLMC "" 0 1 0 \r
DATA FLAGM "" 0 1 1 \r
DATA _XGVAR "" 0 1 "2" \r
DATA LINKWIDTH "" 0 1 0.05000 \r
DATA NODELBLHT "" 0 1 0.15000 \r
DATA SR_N_BKGND "" 0 1 "3" \r
DATA SR_L_BKGND "" 0 1 "3" \r
DATA T_DWDAYS "" 0 1 0.0 \r
DATA 2D_INITTMSTEP "" 0 1 1.000 \r
DATA FPVEL "" 0 1 1 \r
DATA SR_N_FONTSZ "" 0 1 10 \r
DATA SR_L_FONTSZ "" 0 1 10 \r
DATA PRNT_PSIZE "" 0 1 9 \r
DATA PRNT_HSIZE "" 0 1 12 \r
DATA PRNT_FSIZE "" 0 1 12 \r
DATA 2D_TOP_TPLINE "" 0 1 0 \r
DATA MSL "" 0 1 0 \r
DATA PRNT_PSCLE "" 0 1 1000.000 \r
DATA PRNT_NSCLE "" 0 1 1000.000 \r
DATA PRNT_HSTLE "" 0 1 0 \r
DATA PRNT_FSTLE "" 0 1 0 \r
DATA 2D_IWL "" 0 1 0.0 \r
DATA PRNT_ASRAT "" 0 1 0 \r
DATA LACH_TFREQ "" 0 1 50 \r
DATA T_DT "" 0 1 60.000 \r
DATA RES_FPCOL "" 0 1 16776960 \r
DATA RES_FLCOL "" 0 1 16776960 \r
DATA NODELINETH "" 0 1 1 \r
DATA LACH_CURFREQ "" 0 1 50 \r
DATA 2D_WETDRY "" 0 1 0.002 \r
DATA SR_N_DISPLAY "" 0 1 "0" \r
DATA SR_L_DISPLAY "" 0 1 "0" \r
DATA FM_AVAILABLEPIPES "" 0 1 0 \r
DATA NODEWIDTH "" 0 1 0.15000 \r
DATA QDV_DISP "" 0 1 0 \r
DATA _XFGSV "" 0 1 1 \r
DATA R_NHR "" 0 1 0 \r
DATA T_RMVVAR "" 0 1 0 \r
DATA SCHN "" 0 1 0.0 \r
DATA META_NUMIMAGES "" 0 1 0 \r
DATA 2D_RGH_TVER "" 0 1 0 \r
DATA 2D_TMSTEP_OUT "" 0 1 60.000 \r
DATA 2D_CHECKF_DIR "" 0 1 0 \r
DATA T_KPRINT "" 0 1 0 \r
DATA 2D_VISC_CONST "" 0 1 1.000 \r
DATA APP_CURITEM "" 0 1 3 \r
DATA R_STPSC "" 0 1 0 \r
DATA RES_FLMAP "" 0 1 0 \r
DATA MODE "" 0 1 "2" \r
DATA LLBL_FLGLOCK "" 0 1 1 \r
DATA 2D_EXTENT_NO "" 0 1 1 \r
DATA NODEBASENAME "" 0 1 "Node" \r
DATA ATTH "" 0 1 10.00 \r
DATA 2D_AREA_DEF "" 0 1 "1" \r
DATA FPFLOW "" 0 1 1 \r
DATA 2D_OUT_INUND_ENABLED "" 0 1 0 \r
DATA HSL "" 0 1 0 \r
DATA NODE_FLGSEL "" 0 1 1 \r
DATA 2D_RGH_TPOLY "" 0 1 0 \r
DATA LIDLINK_FLGVIEW "" 0 1 1 \r
DATA PENTE7 "" 0 1 1 \r
DATA PENTE3 "" 0 1 1 \r
DATA CAT_FILLCOLF "" 0 1 16384 \r
DATA CAT_FILLCOLB "" 0 1 65280 \r
DATA 2D_CPU_THREADS "" 0 1 2 \r
DATA R_STPMN "" 0 1 0 \r
DATA FPFRBD "" 0 1 0 \r
DATA PENLN7 "" 0 1 1 \r
DATA LKTXFONTNAME "" 0 1 "Arial" \r
DATA PENLN6 "" 0 1 1 \r
DATA _XFNV "" 0 1 1 \r
DATA QDV_NIDX "" 0 1 -1 \r
DATA LIDLINK_FLGLOCK "" 0 1 1 \r
DATA RELG_MAPTYPE "" 0 1 "1" \r
DATA _XNVAR "" 0 1 "2" \r
DATA CFGNUM "" 0 1 0 \r
DATA 2D_VISC_SCONST "" 0 1 0.050 \r
DATA _XFLV "" 0 1 1 \r
DATA RELG_MAPVIEW "" 0 1 0 \r
DATA R_FSNOW "" 0 1 0 \r
DATA FILL "" 0 1 "FILLED" \r
DATA R_ANADJ "" 0 1 0 \r
DATA FPCH "" 0 1 0 \r
DATA _XGDVAR "" 0 1 "2" \r
DATA HEIGHT "" 0 1 10.00 \r
DATA NLBL_FLGLOCK "" 0 1 1 \r
DATA FM_RNFJCPRNTPERDATA "" 0 1 0 \r
DATA PRECS3 "" 0 1 0.005 \r
DATA BRANK "" 0 1 1 \r
DATA 2D_CHARSET "" 0 1 "WindowsLatin1" \r
DATA GRID_WIDTH "" 0 1 1.0000 \r
DATA G_POLLUTE "" 0 1 0 \r
DATA HTYP "" 0 1 "SURFACE" \r
DATA LACH_ZONERAIN "" 0 97 0.600 0.800 1.000 1.200 1.400 1.600 1.800 2.000 2.200 2.400 2.600 2.800 3.000 3.200 3.400 3.600 3.800 4.000 4.200 4.400 4.600 4.800 5.000 5.200 5.400 5.600 5.800 6.000 6.200 6.400 6.600 6.800 7.000 7.200 7.400 7.600 7.800 8.000 8.200 8.400 8.600 8.800 9.000 9.200 9.400 9.600 9.800 10.000 10.200 10.400 10.600 10.800 11.000 11.200 11.400 11.600 11.800 12.000 12.200 12.400 12.600 12.800 13.000 13.200 13.400 13.600 13.800 14.000 14.200 14.400 14.600 14.800 15.000 15.200 15.400 15.600 15.800 16.000 16.200 16.400 16.600 16.800 17.000 17.200 17.400 17.600 17.800 18.000 18.200 18.400 18.600 18.800 19.000 19.200 19.400 19.600 19.800 \r
DATA DSL "" 0 1 2 \r
DATA 2D_TXT_FLGLOCK "" 0 1 0 \r
DATA 2D_EXT_FLGLOCK "" 0 1 1 \r
DATA NLBL_FLGVIEW "" 0 1 1 \r
DATA R_NDAY "" 0 1 1 \r
DATA LINKBASENAME "" 0 1 "Link" \r
DATA SR_HIDEFLAG "" 0 1 1 \r
DATA LINK_FLGVIEW "" 0 1 1 \r
DATA NCAT_FLGLOCK "" 0 1 0 \r
DATA _XFLAV "" 0 1 1 \r
DATA FONT_ID "" 0 3 1 -101 0 \r
DATA R_PRNCTL "" 0 1 0 \r
DATA LTLN7 "" 0 1 "1" \r
DATA FPLEN "" 0 1 1 \r
DATA R_RESSAVE "" 0 1 1 \r
DATA FPGRAD "" 0 1 1 \r
DATA _MINMEM "" 0 1 "0" \r
DATA LINK_FLGLOCK "" 0 1 1 \r
DATA TEXTFONTNAME "" 0 1 "Arial" \r
DATA NCAT_FLGVIEW "" 0 1 0 \r
DATA TEXTCOLOR "" 0 1 16 \r
DATA NODEHEIGHT "" 0 1 0.15000 \r
DATA T_FTRIBA "" 0 1 0 \r
DATA RES_FPMCHART "" 0 1 0 \r
DATA RES_FLMCHART "" 0 1 0 \r
DATA LLBL_FLGVIEW "" 0 1 1 \r
DATA _NODEVIEW "" 0 1 1 \r
DATA RES_FPLABEL "" 0 1 1 \r
DATA RES_FLLABEL "" 0 1 1 \r
DATA QDV_DISP_TBL "" 0 1 1 \r
DATA JC_2DINFLOW_CHK "" 0 1 0 \r
DATA QDV_DISP_CTL "" 0 1 1 \r
DATA 2D_OUT_DEPTH "" 0 1 1 \r
DATA SIMULTANEOUSLY "" 0 1 1 \r
DATA GRID_ORIGINY "" 0 1 0.0 \r
DATA GRID_ORIGINX "" 0 1 0.0 \r
DATA 2D_OUT_HEAD "" 0 1 0 \r
DATA CMODE_SOLVE "" 0 1 1 \r
DATA _HIDEBLNK "" 0 1 1 \r
DATA T_NDESN "" 0 1 0 \r
DATA ARANK "" 0 1 3.2 \r
DATA _NCOUNT "" 0 1 10 \r
DATA JC_2DINFLOW_EXPON "" 0 1 0.500 \r
DATA 2D_TXT_FLGVIEW "" 0 1 0 \r
DATA 2D_EXT_FLGVIEW "" 0 1 1 \r
DATA H_REGEN "" 0 1 0.010 \r
DATA XPAPPFILE "" 0 1 "swmmxp" \r
DATA LINKCOLOR "" 0 1 0 \r
DATA CONFFLAG "" 0 1 1 \r
DATA _HIDECRE "" 0 1 1 \r
DATA CTLRR "" 0 1 1 \r
DATA 2D_TOP_TSET "" 0 1 0 \r
DATA DEF_FNAME "" 0 10 "F_T_NYN" "F_T_NPE" "F_T_FOUTS" "F_T_NSAVREV" "F_T_NTYPE" "F_R_GWTAG" "F_R_GWTAG" "F_R_GWTAG" "F_R_GWTAG" "F_R_GWTAG" \r
DATA FPHEAD "" 0 1 1 \r
DATA R_FEROS "" 0 1 1 \r
DATA R_STPMON "" 0 1 7 \r
DATA R_STPDAY "" 0 1 2 \r
DATA MODE_HILITE "" 0 1 0 \r
DATA XPVERSION "" 0 1 450 \r
DATA _RECVAL "" 0 10 "1" "2" "3" "4" "5" "6" "7" "8" "9" "10" \r
DATA 2D_CHECK_SX "" 0 1 "2" \r
DATA 2D_CHECK_HX "" 0 1 "2" \r
DATA COLOURS_R "" 0 1 0 \r
DATA 2D_OUTPUT_DIR "" 0 1 "2D\\Results\\Output" \r
DATA 2D_CHECK_DIR "" 0 1 "2D\\Results\\Check" \r
DATA COLOURS_B "" 0 1 128 \r
DATA 2D_RAISE_FACTOR "" 0 1 0.0 \r
DATA COLOURS_G "" 0 1 64 \r
DATA FPHGL "" 0 1 1 \r
DATA CAT_LINESTYLE "" 0 1 0 \r
DATA CAT_TPOLY "" 0 1 0 \r
DATA R_VAP "" 0 12 3. 3. 3. 3. 3. 3. 3. 3. 3. 3. 3. 3. \r
DATA 2D_REG_TSET "" 0 1 4 \r
DATA TMODE_SOLVE "" 0 1 0 \r
DATA CAT_LINECOL "" 0 1 16384 \r
DATA LBYPD "" 0 1 "VERTICAL" \r
DATA LKCS_FLGSEL "" 0 1 0 \r
DATA _INTCREAT "" 0 1 "0" \r
DATA FPDINV "" 0 1 0 \r
DATA _XLVAR "" 0 1 "2" \r
DATA R_FCATCH "" 0 1 0 \r
DATA DELT "" 0 1 60.0 \r
DATA LINEG "" 0 1 "3" \r
DATA 2D_SURFACETYPE "" 0 1 "0" \r
DATA LXS_FILLCOLF "" 0 1 0 \r
DATA LXS_FILLCOLB "" 0 1 16777215 \r
DATA LACH_FREQFACT "" 0 1 0.387 \r
DATA FONT_N "" 0 3 "Arial" "Arial" "Arial" \r
DATA FPNAT "" 0 1 0 \r
DATA NODE_FLGLOCK "" 0 1 1 \r
DATA T_NFILTH "" 0 1 0 \r
DATA LACH_DAY1PER "" 0 1 10.000 \r
DATA 2D_HARDWARE_DEF "" 0 1 "0" \r
DATA CAT_LINESIZE "" 0 1 1 \r
DATA FLAG20 "" 0 1 1 \r
DATA FLAG21 "" 0 1 1 \r
DATA FLAG22 "" 0 1 1 \r
DATA FLAG23 "" 0 1 1 \r
DATA R_REGENTAG "" 0 1 0 \r
DATA W_XPXFIL "" 0 1 "C:\\workshop2000\\Diskette\\v10\\INFIL.XPX" \r
DATA NDTXFONTNAME "" 0 1 "Arial" \r
DATA PRNT_HFCLR "" 0 1 0 \r
DATA PRNT_FFCLR "" 0 1 0 \r
DATA PRNT_PFRMT "" 0 1 "0" \r
DATA PRNT_HFONT "" 0 1 "Arial" \r
DATA PRNT_FFONT "" 0 1 "Arial" \r
DATA GRID_SQUARE "" 0 1 1 \r
DATA NODECOLOR "" 0 1 2 \r
DATA 2D_ADV_NUM "" 0 1 0 \r
DATA GLDB_2DINF_FI "" 0 1 0.0 \r
DATA R_REGEN "" 0 1 0.010 \r
DATA LACH_DAY3PER "" 0 1 35.000 \r
GLDBITEM "Rational Formula" "GrandePrairie IDF" \r
GLDBDATA RC_TYPE "Rational Formula" "GrandePrairie IDF" 1 "999" \r
GLDBDATA RI_TYPE "Rational Formula" "GrandePrairie IDF" 1 "1990" \r
GLDBITEM "Rainfall" "SCS TypeII FLMod" \r
GLDBDATA R_KTYPE "Rainfall" "SCS TypeII FLMod" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS TypeII FLMod" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS TypeII FLMod" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS TypeII FLMod" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS TypeII FLMod" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS TypeII FLMod" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS TypeII FLMod" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS TypeII FLMod" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS TypeII FLMod" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS TypeII FLMod" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS TypeII FLMod" 240 .001172 .002351 .003537 .004731 .005932 .007141 .008357 .009581 .010813 .012053 .013301 .014558 .015823 .017096 .018379 .01967 .02097 .022279 .023597 .024925 .026263 .02761 .028968 .030335 .031713 .033101 .0345 .03591 .037331 .038763 .040207 .041663 .04313 .04461 .046102 .047607 .049125 .050657 .052202 .05376 .055333 .05692 .058522 .06014 .061772 .06342 .065085 .066766 .068464 .07018 .071913 .073664 .075435 .077224 .079033 .080862 .082712 .084584 .086477 .088393 .090332 .092296 .094283 .096296 .098336 .100402 .102496 .104619 .106772 .108955 .111171 .113419 .115701 .118019 .120374 .122766 .125199 .127673 .130189 .132751 .13536 .138017 .140726 .143488 .146306 .149184 .152123 .155128 .158202 .161349 .164572 .167878 .17127 .174755 .178339 .182028 .185831 .189757 .193815 .198015 .202372 .2069 .211615 .216537 .22169 .2271 .232802 .238835 .24525 .252109 .259495 .267515 .276318 .286115 .297223 .31016 .338729 .384364 .437615 .528732 .589797 .638534 .681839 .695999 .707938 .718341 .727609 .735999 .743686 .750798 .757426 .763643 .769504 .775056 .780334 .785368 .790184 .794803 .799243 .80352 .807648 .811638 .815502 .819247 .822883 .826416 .829854 .833202 .836466 .839651 .84276 .845799 .848771 .851679 .854525 .857317 .860052 .862735 .865367 .867952 .870491 .872986 .875439 .877852 .880225 .882561 .884861 .887126 .889358 .891557 .893725 .895863 .897971 .900051 .902104 .90413 .90613 .908106 .910057 .911984 .913889 .915771 .917632 .919472 .921291 .92309 .92487 .92663 .928373 .930097 .931804 .933493 .935166 .936822 .938463 .940088 .941697 .943292 .944872 .946438 .947989 .949527 .951052 .952563 .954062 .955548 .957022 .958484 .959933 .961371 .962798 .964213 .965618 .967011 .968394 .969767 .971129 .972481 .973824 .975157 .97648 .977794 .979098 .980394 .98168 .982958 .984227 .985488 .98674 .987985 .989221 .990449 .991669 .992881 .994086 .995284 .996473 .997656 .998832 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS TypeII FLMod" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS TypeII FLMod" 1 0.100 \r
GLDBDATA R_KPREPC "Rainfall" "SCS TypeII FLMod" 1 "2" \r
GLDBITEM "Rainfall" "SCS Type B 24hr" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Type B 24hr" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Type B 24hr" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Type B 24hr" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Type B 24hr" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Type B 24hr" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Type B 24hr" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Type B 24hr" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Type B 24hr" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Type B 24hr" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Type B 24hr" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Type B 24hr" 48 .009 .016 .025 .034 .045 .054 .065 .077 .09 .104 .12 .137 .157 .18 .21 .255 .322 .41 .506 .588 .629 .656 .679 .7 .72 .739 .756 .772 .79 .8 .816 .831 .845 .86 .872 .885 .895 .905 .914 .924 .935 .945 .954 .963 .972 .981 .991 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Type B 24hr" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Type B 24hr" 1 0.500 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Type B 24hr" 1 "2" \r
GLDBITEM "Rainfall" "SCS Type B 6hr" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Type B 6hr" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Type B 6hr" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Type B 6hr" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Type B 6hr" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Type B 6hr" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Type B 6hr" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Type B 6hr" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Type B 6hr" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Type B 6hr" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Type B 6hr" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Type B 6hr" 24 .018 .035 .058 .08 .108 .135 .183 .23 .415 .6 .65 .7 .74 .78 .808 .835 .858 .88 .9 .92 .94 .96 .98 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Type B 6hr" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Type B 6hr" 1 0.250 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Type B 6hr" 1 "2" \r
GLDBITEM "Rainfall" "SCS Type II" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Type II" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Type II" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Type II" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Type II" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Type II" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Type II" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Type II" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Type II" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Type II" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Type II" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Type II" 240 .001 .002 .003 .0041 .0051 .0062 .0072 .0083 .0094 .0105 .0116 .0127 .0138 .015 .0161 .0173 .0184 .0196 .0208 .022 .0232 .0244 .0257 .0269 .0281 .0294 .0306 .0319 .0332 .0345 .0358 .0371 .0384 .0398 .0411 .0425 .0439 .0452 .0466 .048 .0494 .0508 .0523 .0538 .0553 .0568 .0583 .0598 .0614 .063 .0646 .0662 .0679 .0696 .0712 .073 .0747 .0764 .0782 .08 .0818 .0836 .0855 .0874 .0892 .0912 .0931 .095 .097 .099 .101 .103 .1051 .1072 .1093 .1114 .1135 .1156 .1178 .12 .1222 .1246 .127 .1296 .1322 .135 .1379 .1408 .1438 .147 .1502 .1534 .1566 .1598 .163 .1663 .1697 .1733 .1771 .181 .1851 .1895 .1941 .1989 .204 .2094 .2152 .2214 .228 .235 .2427 .2513 .2609 .2715 .283 .3068 .3544 .4308 .5679 .663 .682 .6986 .713 .7252 .735 .7434 .7514 .7588 .7656 .772 .778 .7836 .789 .7942 .799 .8036 .808 .8122 .8162 .82 .8237 .8273 .8308 .8342 .8376 .8409 .8442 .8474 .8505 .8535 .8565 .8594 .8622 .8649 .8676 .8702 .8728 .8753 .8777 .88 .8823 .8845 .8868 .889 .8912 .8934 .8955 .8976 .8997 .9018 .9038 .9058 .9078 .9097 .9117 .9136 .9155 .9173 .9192 .921 .9228 .9245 .9263 .928 .9297 .9313 .933 .9346 .9362 .9377 .9393 .9408 .9423 .9438 .9452 .9466 .948 .9493 .9507 .952 .9533 .9546 .9559 .9572 .9584 .9597 .961 .9622 .9635 .9647 .966 .9672 .9685 .9697 .9709 .9722 .9734 .9746 .9758 .977 .9782 .9794 .9806 .9818 .9829 .9841 .9853 .9864 .9876 .9887 .9899 .991 .9922 .9933 .9944 .9956 .9967 .9978 .9989 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Type II" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Type II" 1 0.100 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Type II" 1 "2" \r
GLDBITEM "Rainfall" "SCS Type IA" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Type IA" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Type IA" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Type IA" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Type IA" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Type IA" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Type IA" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Type IA" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Type IA" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Type IA" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Type IA" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Type IA" 240 .0022 .0043 .0063 .0082 .01 .0118 .0137 .0157 .0178 .02 .0228 .0257 .0287 .0318 .035 .038 .041 .0439 .047 .05 .0531 .0563 .0595 .0628 .066 .0692 .0724 .0756 .0788 .082 .0851 .0883 .0915 .0947 .098 .1015 .1051 .1086 .1123 .116 .1197 .1234 .1272 .1311 .135 .139 .1431 .1473 .1516 .156 .1606 .1653 .1701 .175 .18 .1849 .19 .1952 .2005 .206 .212 .2181 .2243 .2306 .237 .2429 .2488 .2549 .2613 .268 .2752 .2829 .2912 .3002 .31 .3314 .3547 .3788 .4026 .425 .4394 .4517 .4623 .4716 .48 .489 .4975 .5055 .513 .52 .5266 .5329 .5389 .5446 .55 .5556 .5612 .5666 .5718 .577 .582 .5868 .5916 .5964 .601 .6058 .6104 .615 .6196 .624 .6284 .6326 .6368 .641 .645 .6489 .6527 .6565 .6603 .664 .6677 .6715 .6753 .6791 .683 .6866 .6903 .6939 .6974 .701 .7047 .7084 .712 .7155 .719 .7225 .7259 .7293 .7326 .736 .7394 .7428 .7461 .7495 .7528 .7561 .7594 .7627 .766 .7692 .7725 .7757 .7789 .7821 .7853 .7885 .7916 .7947 .7979 .801 .8041 .8071 .8102 .8132 .8163 .8193 .8223 .8252 .8282 .8312 .8341 .837 .8399 .8428 .8457 .8486 .8514 .8542 .857 .8598 .8626 .8654 .8681 .8709 .8736 .8763 .879 .8817 .8844 .887 .8896 .8923 .8949 .8974 .9 .9026 .9051 .9076 .9101 .9126 .9151 .9176 .92 .9225 .9249 .9273 .9297 .9321 .9344 .9368 .9391 .9414 .9437 .946 .9482 .9505 .9527 .955 .9572 .9594 .9615 .9637 .9658 .968 .9701 .9722 .9743 .9764 .9784 .9804 .9825 .9845 .9865 .9884 .9904 .9924 .9943 .9962 .9981 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Type IA" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Type IA" 1 0.100 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Type IA" 1 "2" \r
GLDBITEM "Rainfall" "SCS Type III" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Type III" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Type III" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Type III" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Type III" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Type III" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Type III" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Type III" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Type III" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Type III" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Type III" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Type III" 240 .001 .002 .003 .004 .005 .006 .007 .008 .009 .01 .011 .012 .013 .014 .015 .016 .017 .018 .019 .02 .021 .022 .0231 .0241 .0252 .0263 .0274 .0285 .0296 .0308 .0319 .0331 .0343 .0355 .0367 .0379 .0392 .0404 .0417 .043 .0443 .0456 .047 .0483 .0497 .0511 .0525 .0539 .0553 .0567 .0582 .0597 .0612 .0627 .0642 .0657 .0673 .0688 .0704 .072 .0736 .0753 .077 .0788 .0806 .0825 .0844 .0864 .0884 .0905 .0926 .0948 .097 .0993 .1016 .104 .1064 .1089 .1114 .114 .1167 .1194 .1223 .1253 .1284 .1317 .135 .1385 .1421 .1458 .1496 .1535 .1575 .1617 .1659 .1703 .1748 .1794 .1842 .189 .194 .1993 .2048 .2105 .2165 .2227 .2292 .2359 .2428 .25 .2578 .2664 .276 .2866 .298 .3143 .3394 .3733 .416 .5 .584 .6267 .6606 .6857 .702 .7134 .724 .7336 .7422 .75 .7572 .7641 .7708 .7773 .7835 .7895 .7952 .8007 .806 .811 .8158 .8206 .8252 .8297 .8341 .8383 .8425 .8465 .8504 .8543 .8579 .8615 .865 .8683 .8716 .8747 .8777 .8806 .8833 .886 .8886 .8911 .8936 .896 .8984 .9007 .903 .9052 .9074 .9095 .9116 .9136 .9156 .9175 .9194 .9212 .923 .9247 .9264 .928 .9296 .9312 .9327 .9343 .9358 .9373 .9388 .9403 .9418 .9433 .9447 .9461 .9475 .9489 .9503 .9517 .953 .9544 .9557 .957 .9583 .9596 .9609 .9621 .9634 .9646 .9658 .967 .9682 .9694 .9706 .9718 .9729 .9741 .9752 .9764 .9775 .9786 .9797 .9808 .9818 .9829 .9839 .985 .986 .987 .988 .989 .99 .9909 .9919 .9928 .9938 .9947 .9956 .9965 .9974 .9983 .9991 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Type III" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Type III" 1 0.100 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Type III" 1 "2" \r
GLDBITEM "Rainfall" "SCS Type II 48 Hrs" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Type II 48 Hrs" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Type II 48 Hrs" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Type II 48 Hrs" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Type II 48 Hrs" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Type II 48 Hrs" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Type II 48 Hrs" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Type II 48 Hrs" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Type II 48 Hrs" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Type II 48 Hrs" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Type II 48 Hrs" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Type II 48 Hrs" 96 .002 .005 .008 .011 .014 .017 .02 .023 .026 .029 .032 .035 .038 .041 .044 .047 .051 .055 .059 .063 .067 .071 .075 .079 .084 .089 .094 .099 .104 .109 .114 .12 .126 .133 .14 .147 .154 .162 .171 .181 .192 .204 .217 .233 .252 .277 .318 .638 .698 .729 .752 .77 .785 .798 .809 .819 .829 .838 .846 .854 .861 .868 .874 .88 .886 .892 .897 .902 .907 .912 .917 .921 .925 .929 .933 .937 .941 .945 .949 .953 .957 .96 .963 .966 .969 .972 .975 .978 .981 .984 .987 .99 .993 .996 .998 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Type II 48 Hrs" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Type II 48 Hrs" 1 0.500 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Type II 48 Hrs" 1 "2" \r
GLDBITEM "Rainfall" "SCS Spillway Design" \r
GLDBDATA R_KTYPE "Rainfall" "SCS Spillway Design" 1 "0" \r
GLDBDATA R_RAINSMTH "Rainfall" "SCS Spillway Design" 1 1 \r
GLDBDATA R_RAINSYR "Rainfall" "SCS Spillway Design" 1 2001 \r
GLDBDATA R_RAINSHR "Rainfall" "SCS Spillway Design" 1 0 \r
GLDBDATA R_RAINSMIN "Rainfall" "SCS Spillway Design" 1 0 \r
GLDBDATA R_RAINSSEC "Rainfall" "SCS Spillway Design" 1 0 \r
GLDBDATA R_RAINSDAY "Rainfall" "SCS Spillway Design" 1 1 \r
GLDBDATA R_ROPT "Rainfall" "SCS Spillway Design" 1 "0" \r
GLDBDATA R_KTIMEC "Rainfall" "SCS Spillway Design" 1 "1" \r
GLDBDATA R_RMULT "Rainfall" "SCS Spillway Design" 1 1.000 \r
GLDBDATA R_REIN "Rainfall" "SCS Spillway Design" 50 .008 .0162 .0246 .0333 .0425 .0524 .063 .0743 .0863 .099 .1124 .1265 .142 .1595 .18 .205 .255 .345 .437 .53 .603 .633 .66 .684 .705 .724 .742 .759 .775 .79 .8043 .818 .8312 .8439 .8561 .8678 .879 .8898 .9002 .9103 .9201 .9297 .9391 .9483 .9573 .9661 .9747 .9832 .9916 1. \r
GLDBDATA R_HOFF "Rainfall" "SCS Spillway Design" 1 "0" \r
GLDBDATA R_THISTO "Rainfall" "SCS Spillway Design" 1 0.020 \r
GLDBDATA R_KPREPC "Rainfall" "SCS Spillway Design" 1 "2" \r
GLDBITEM "DW Sewer Inflows" "DWF Pattern" \r
GLDBDATA T_ADWF "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_CA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_DADOM "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_POPULA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_DAINF "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_CPI "DW Sewer Inflows" "DWF Pattern" 1 350.00 \r
GLDBDATA T_TRAA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_TRGGA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_KDAY "DW Sewer Inflows" "DWF Pattern" 1 1 \r
GLDBDATA T_TPOA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_FSTUDY "DW Sewer Inflows" "DWF Pattern" 1 "1" \r
GLDBDATA T_CCCI "DW Sewer Inflows" "DWF Pattern" 1 350.00 \r
GLDBDATA T_TRHA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_TRLA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_TINA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBDATA T_TOTA "DW Sewer Inflows" "DWF Pattern" 1 0.0 \r
GLDBITEM "User Defined File Types" "HYDSYS" \r
GLDBDATA UDF_FORMAT "User Defined File Types" "HYDSYS" 1 0 \r
GLDBDATA UDF_FIELDID "User Defined File Types" "HYDSYS" 8 1 0 21 20 19 18 17 5 \r
GLDBDATA UDF_FIELDWID "User Defined File Types" "HYDSYS" 8 9 6 4 2 2 2 2 12 \r
GLDBDATA UDF_NUMHEAD "User Defined File Types" "HYDSYS" 1 0 \r
GLDBDATA UDF_INTERVAL "User Defined File Types" "HYDSYS" 1 0.0 \r
GLDBDATA UDF_INTROINT "User Defined File Types" "HYDSYS" 1 0 \r
GLDBITEM "User Defined File Types" "Simple Rain" \r
GLDBDATA UDF_FORMAT "User Defined File Types" "Simple Rain" 1 1 \r
GLDBDATA UDF_FIELDID "User Defined File Types" "Simple Rain" 3 12 15 23 \r
GLDBDATA UDF_FIELDWID "User Defined File Types" "Simple Rain" 3 0 0 0 \r
GLDBDATA UDF_NUMHEAD "User Defined File Types" "Simple Rain" 1 0 \r
GLDBDATA UDF_INTERVAL "User Defined File Types" "Simple Rain" 1 0.0 \r
GLDBDATA UDF_INTROINT "User Defined File Types" "Simple Rain" 1 0 \r
GLDBITEM "User Defined File Types" "Simple Flow" \r
GLDBDATA UDF_FORMAT "User Defined File Types" "Simple Flow" 1 1 \r
GLDBDATA UDF_FIELDID "User Defined File Types" "Simple Flow" 3 12 15 5 \r
GLDBDATA UDF_FIELDWID "User Defined File Types" "Simple Flow" 3 0 0 0 \r
GLDBDATA UDF_NUMHEAD "User Defined File Types" "Simple Flow" 1 0 \r
GLDBDATA UDF_INTERVAL "User Defined File Types" "Simple Flow" 1 0.0 \r
GLDBDATA UDF_INTROINT "User Defined File Types" "Simple Flow" 1 0 \r
GLDBITEM "Temporal Variations" "DOUBLE" \r
GLDBDATA T_HV "Temporal Variations" "DOUBLE" 24 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 \r
GLDBDATA T_DV "Temporal Variations" "DOUBLE" 7 2.0 2.0 2.0 2.0 2.0 2.0 2.0 \r
GLDBITEM "Temporal Variations" "TENFOLD" \r
GLDBDATA T_HV "Temporal Variations" "TENFOLD" 24 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 \r
GLDBDATA T_DV "Temporal Variations" "TENFOLD" 7 10. 10. 10. 10. 10. 10. 10. \r
GLDBITEM "Temporal Variations" "TRIPLE" \r
GLDBDATA T_HV "Temporal Variations" "TRIPLE" 24 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 \r
GLDBDATA T_DV "Temporal Variations" "TRIPLE" 7 3. 3. 3. 3. 3. 3. 3. \r
GLDBITEM "Temporal Variations" "DWF Pattern" \r
GLDBDATA T_HV "Temporal Variations" "DWF Pattern" 24 .71 .67 .64 .62 .64 .71 .95 1.36 1.48 1.45 1.26 1.07 .98 .93 .9 .88 .95 1.24 1.3 1.14 1.07 .95 .88 .76 \r
GLDBDATA T_DV "Temporal Variations" "DWF Pattern" 7 1.0 1.0 1.0 1.0 1.0 1.0 1.0 \r
GLDBITEM "Temporal Variations" "CONSTANT" \r
GLDBDATA T_HV "Temporal Variations" "CONSTANT" 24 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 1.0 \r
GLDBDATA T_DV "Temporal Variations" "CONSTANT" 7 1.0 1.0 1.0 1.0 1.0 1.0 1.0 \r
GLDBITEM "2D Landuse" "Forest" \r
GLDBDATA ROUGH_NAME "2D Landuse" "Forest" 1 "Forest" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Forest" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Forest" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Forest" 1 0.150 \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Forest" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Forest" 1 32768 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Forest" 1 32768 \r
GLDBDATA ROUGH_FLGLOCK "2D Landuse" "Forest" 1 1 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Forest" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Forest" 1 7.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Forest" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Forest" 1 0 \r
GLDBDATA ZZZZZ "2D Landuse" "Forest" 1 7.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Forest" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Forest" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Forest" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Forest" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Forest" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Forest" 1 5 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Forest" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Forest" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Forest" 1 0.0 \r
GLDBITEM "2D Landuse" "Roads" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Roads" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Roads" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Roads" 1 0.018 \r
GLDBDATA LNDUSE_DES "2D Landuse" "Roads" 1 "Bitumen Road" \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Roads" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Roads" 1 12632256 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Roads" 1 12632256 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Roads" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Roads" 1 2.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Roads" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Roads" 1 8421504 \r
GLDBDATA ZZZZZ "2D Landuse" "Roads" 1 2.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Roads" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Roads" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Roads" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Roads" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Roads" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Roads" 1 -1 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Roads" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Roads" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Roads" 1 0.0 \r
GLDBITEM "2D Landuse" "Water Bodies" \r
GLDBDATA ROUGH_NAME "2D Landuse" "Water Bodies" 1 "Water Bodies" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Water Bodies" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Water Bodies" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Water Bodies" 1 0.010 \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Water Bodies" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Water Bodies" 1 16776960 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Water Bodies" 1 16776960 \r
GLDBDATA ROUGH_FLGLOCK "2D Landuse" "Water Bodies" 1 1 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Water Bodies" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Water Bodies" 1 3.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Water Bodies" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Water Bodies" 1 16777024 \r
GLDBDATA ZZZZZ "2D Landuse" "Water Bodies" 1 3.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Water Bodies" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Water Bodies" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Water Bodies" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Water Bodies" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Water Bodies" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Water Bodies" 1 -1 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Water Bodies" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Water Bodies" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Water Bodies" 1 0.0 \r
GLDBITEM "2D Landuse" "Shrubbery" \r
GLDBDATA ROUGH_NAME "2D Landuse" "Shrubbery" 1 "Shrubbery" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Shrubbery" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Shrubbery" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Shrubbery" 1 0.080 \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Shrubbery" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Shrubbery" 1 65535 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Shrubbery" 1 8453888 \r
GLDBDATA ROUGH_FLGLOCK "2D Landuse" "Shrubbery" 1 1 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Shrubbery" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Shrubbery" 1 4.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Shrubbery" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Shrubbery" 1 16777024 \r
GLDBDATA ZZZZZ "2D Landuse" "Shrubbery" 1 4.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Shrubbery" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Shrubbery" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Shrubbery" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Shrubbery" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Shrubbery" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Shrubbery" 1 8 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Shrubbery" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Shrubbery" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Shrubbery" 1 0.0 \r
GLDBITEM "2D Landuse" "Pasture and Meadow" \r
GLDBDATA ROUGH_NAME "2D Landuse" "Pasture and Meadow" 1 "Pasture" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Pasture and Meadow" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Pasture and Meadow" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Pasture and Meadow" 1 0.065 \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Pasture and Meadow" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Pasture and Meadow" 1 16512 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Pasture and Meadow" 1 16512 \r
GLDBDATA ROUGH_FLGLOCK "2D Landuse" "Pasture and Meadow" 1 1 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Pasture and Meadow" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Pasture and Meadow" 1 5.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Pasture and Meadow" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Pasture and Meadow" 1 16512 \r
GLDBDATA ZZZZZ "2D Landuse" "Pasture and Meadow" 1 5.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Pasture and Meadow" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Pasture and Meadow" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Pasture and Meadow" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Pasture and Meadow" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Pasture and Meadow" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Pasture and Meadow" 1 16 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Pasture and Meadow" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Pasture and Meadow" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Pasture and Meadow" 1 0.0 \r
GLDBITEM "2D Landuse" "Farmlands" \r
GLDBDATA ROUGH_NAME "2D Landuse" "Farmlands" 1 "Farmlands" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Farmlands" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Farmlands" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Farmlands" 1 0.080 \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Farmlands" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Farmlands" 1 33023 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Farmlands" 1 4227327 \r
GLDBDATA ROUGH_FLGLOCK "2D Landuse" "Farmlands" 1 1 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Farmlands" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Farmlands" 1 6.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Farmlands" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Farmlands" 1 32896 \r
GLDBDATA ZZZZZ "2D Landuse" "Farmlands" 1 6.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Farmlands" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Farmlands" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Farmlands" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Farmlands" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Farmlands" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Farmlands" 1 4 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Farmlands" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Farmlands" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Farmlands" 1 0.0 \r
GLDBITEM "2D Landuse" "Unused Areas" \r
GLDBDATA ROUGH_NAME "2D Landuse" "Unused Areas" 1 "Unused" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Unused Areas" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Unused Areas" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Unused Areas" 1 0.065 \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Unused Areas" 1 0 \r
GLDBDATA ROUGH_FILLCOLF "2D Landuse" "Unused Areas" 1 16777024 \r
GLDBDATA ROUGH_FILLCOLB "2D Landuse" "Unused Areas" 1 8388863 \r
GLDBDATA ROUGH_FLGLOCK "2D Landuse" "Unused Areas" 1 1 \r
GLDBDATA ROUGH_LINESTYLE "2D Landuse" "Unused Areas" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Unused Areas" 1 8.000 \r
GLDBDATA ROUGH_LINESIZE "2D Landuse" "Unused Areas" 1 3 \r
GLDBDATA ROUGH_LINECOL "2D Landuse" "Unused Areas" 1 16777024 \r
GLDBDATA ZZZZZ "2D Landuse" "Unused Areas" 1 8.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Unused Areas" 1 "0" \r
GLDBDATA ROUGH_FILLALPHAF "2D Landuse" "Unused Areas" 1 128 \r
GLDBDATA ROUGH_FILLALPHAB "2D Landuse" "Unused Areas" 1 64 \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Unused Areas" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Unused Areas" 1 0.0 \r
GLDBDATA ROUGH_FILLPAT "2D Landuse" "Unused Areas" 1 6 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Unused Areas" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Unused Areas" 1 0 \r
GLDBDATA GLDB_2DINF_FI "2D Landuse" "Unused Areas" 1 0.0 \r
GLDBITEM "2D Landuse" "Buildings" \r
GLDBDATA LNDUSE_PROP_FLAG "2D Landuse" "Buildings" 1 1 \r
GLDBDATA LNDUSE_INFL_FLAG "2D Landuse" "Buildings" 1 0 \r
GLDBDATA ROUGH_VAL "2D Landuse" "Buildings" 1 0.300 \r
GLDBDATA LNDUSE_DES "2D Landuse" "Buildings" 1 "Buildings (High Manning's n)" \r
GLDBDATA ROUGH_FLGVIEW "2D Landuse" "Buildings" 1 0 \r
GLDBDATA ROUGH_PRIORITY "2D Landuse" "Buildings" 1 1.000 \r
GLDBDATA ZZZZZ "2D Landuse" "Buildings" 1 1.000 \r
GLDBDATA LNDUSE_MANN_TP "2D Landuse" "Buildings" 1 "0" \r
GLDBDATA LNDUSE_ILOSS "2D Landuse" "Buildings" 1 0.0 \r
GLDBDATA LNDUSE_CLOSS "2D Landuse" "Buildings" 1 0.0 \r
GLDBDATA LNDUSE_INFL_FLAG2 "2D Landuse" "Buildings" 1 0 \r
GLDBDATA ROUGH_FLGSEL "2D Landuse" "Buildings" 1 0 \r
GLDBITEM "Landuse" "Residential" \r
GLDBDATA R_DDFACT2 "Landuse" "Residential" 1 0.0 \r
GLDBDATA R_DDFACT1 "Landuse" "Residential" 1 1.000 \r
GLDBDATA R_DLIM "Landuse" "Residential" 1 1e+25 \r
GLDBDATA R_METHOD "Landuse" "Residential" 1 "0" \r
GLDBDATA R_JACGUT "Landuse" "Residential" 1 "1" \r
GLDBDATA R_DDPOW2 "Landuse" "Residential" 1 0.0 \r
GLDBDATA R_DDPOW1 "Landuse" "Residential" 1 0.0 \r
GLDBITEM "Landuse" "Mixed Land Use" \r
GLDBDATA R_DDFACT2 "Landuse" "Mixed Land Use" 1 0.0 \r
GLDBDATA R_DDFACT1 "Landuse" "Mixed Land Use" 1 1.000 \r
GLDBDATA R_DLIM "Landuse" "Mixed Land Use" 1 1e+25 \r
GLDBDATA R_METHOD "Landuse" "Mixed Land Use" 1 "0" \r
GLDBDATA R_JACGUT "Landuse" "Mixed Land Use" 1 "1" \r
GLDBDATA R_DDPOW2 "Landuse" "Mixed Land Use" 1 0.0 \r
GLDBDATA R_DDPOW1 "Landuse" "Mixed Land Use" 1 0.0 \r
GLDBITEM "Landuse" "Commercial" \r
GLDBDATA R_DDFACT2 "Landuse" "Commercial" 1 0.0 \r
GLDBDATA R_DDFACT1 "Landuse" "Commercial" 1 1.000 \r
GLDBDATA R_DLIM "Landuse" "Commercial" 1 1e+25 \r
GLDBDATA R_METHOD "Landuse" "Commercial" 1 "0" \r
GLDBDATA R_JACGUT "Landuse" "Commercial" 1 "1" \r
GLDBDATA R_DDPOW2 "Landuse" "Commercial" 1 0.0 \r
GLDBDATA R_DDPOW1 "Landuse" "Commercial" 1 0.0 \r
GLDBITEM "Landuse" "Open/Nonurban" \r
GLDBDATA R_DDFACT2 "Landuse" "Open/Nonurban" 1 0.0 \r
GLDBDATA R_DDFACT1 "Landuse" "Open/Nonurban" 1 1.000 \r
GLDBDATA R_DLIM "Landuse" "Open/Nonurban" 1 1e+25 \r
GLDBDATA R_METHOD "Landuse" "Open/Nonurban" 1 "0" \r
GLDBDATA R_JACGUT "Landuse" "Open/Nonurban" 1 "1" \r
GLDBDATA R_DDPOW2 "Landuse" "Open/Nonurban" 1 0.0 \r
GLDBDATA R_DDPOW1 "Landuse" "Open/Nonurban" 1 0.0 \r
GLDBITEM "WS Temperatures" "Temperature Series" \r
GLDBDATA S_TEMP "WS Temperatures" "Temperature Series" 12 32. 32. 32. 32. 32. 32. 32. 32. 32. 32. 32. 32. \r
GLDBITEM "XP Tables" "Runoff Conduits" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Runoff Conduits" 12 48 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Runoff Conduits" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Runoff Conduits" 12 12 12 12 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Runoff Conduits" 1 "2" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Runoff Conduits" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Runoff Conduits" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Runoff Conduits" 12 "FD_LINK_NAME" "FD_LINK_DS_NODE" "F_NKLASS" "F_NKCTL" "F_DEEP" "F_LEN" "F_SLOPE" "F_TTHETA" "F_TPHI" "F_QOD" "F_ROUGH" "F_R_RDSGNFF" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Runoff Conduits" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Runoff Conduits" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Runoff Conduits" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Runoff Conduits" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Runoff Conduits" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Runoff Conduits" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Runoff Conduits" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Runoff Conduits" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Runoff Conduits" 1 0 \r
GLDBITEM "XP Tables" "Physical Hydrology" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Physical Hydrology" 5 "0" "0" "ft" "ac" "%" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Physical Hydrology" 8 "Node Name" "Catchment Number" "Width" "Area" "Impervious Percentage" "Slope" "Infiltration Reference" "Sub-Catchment Flag" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Physical Hydrology" 8 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Physical Hydrology" 8 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Physical Hydrology" 8 12 12 12 12 12 12 12 16 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Physical Hydrology" 8 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Physical Hydrology" 1 "1" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Physical Hydrology" 8 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Physical Hydrology" 8 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLOBJSEL "XP Tables" "Physical Hydrology" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Physical Hydrology" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Physical Hydrology" 8 "FD_NODE_NAME" "FD_CAT_NUM" "F_R_WIDTH" "F_R_WAREA" "F_R_WIMP" "F_R_WSLOPE" "F_R_INFILSEL" "F_R_RFCMNT" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Physical Hydrology" 8 3 3 3 3 3 3 3 3 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Physical Hydrology" 8 3.000 3.000 3.000 3.000 1.000 4.000 3.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Physical Hydrology" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Physical Hydrology" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Physical Hydrology" 1 0 \r
GLDBITEM "XP Tables" "Rain + Infiltration" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Rain + Infiltration" 5 48 48 48 48 48 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Rain + Infiltration" 5 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Rain + Infiltration" 1 "1" \r
GLDBDATA TBLOBJSEL "XP Tables" "Rain + Infiltration" 1 "1" \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Rain + Infiltration" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Rain + Infiltration" 5 "FD_NODE_NAME" "FD_CAT_NUM" "F_R_FSCS" "F_R_RAINSEL" "F_R_INFILSEL" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Rain + Infiltration" 5 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Rain + Infiltration" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Rain + Infiltration" 5 0 0 0 0 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Rain + Infiltration" 5 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Rain + Infiltration" 5 0 0 0 0 0 \r
GLDBITEM "XP Tables" "Subcatchment Results" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Subcatchment Results" 9 "ac" "%" "in" "in" "in" "in" "in/hr" "in/hr" "cfs" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Subcatchment Results" 9 "Area" "Impervious Percentage" "Catchment Total Rainfall Depth" "Catchment Total Runoff Depth" "Catchment Total Infiltration" "Catchment Surface Evaporation" "Catchment Max Infil. Rate" "Catchment Min Infil. Rate" "Catchment Max Flow" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Subcatchment Results" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Subcatchment Results" 9 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Subcatchment Results" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Subcatchment Results" 9 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Subcatchment Results" 1 "1" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Subcatchment Results" 9 9 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Subcatchment Results" 9 1 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLUSEFILTER "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Subcatchment Results" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Subcatchment Results" 9 "F_R_WAREA" "F_R_WIMP" "F_R_SUB_RRAINFL" "F_R_SUB_RRUNVOL" "F_R_SUB_RINFILT" "F_R_SUB_REVAPSF" "F_R_SUB_RMXIFRT" "F_R_SUB_RMNINRT" "F_R_SUB_RMAXFLO" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Subcatchment Results" 9 3 3 3 3 3 3 3 3 3 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Subcatchment Results" 9 3.000 1.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Subcatchment Results" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Subcatchment Results" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Subcatchment Results" 1 0 \r
GLDBITEM "XP Tables" "Basic Conduit Data" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Basic Conduit Data" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Basic Conduit Data" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Basic Conduit Data" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Basic Conduit Data" 1 "1" \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Basic Conduit Data" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Basic Conduit Data" 9 "FD_LINK_NAME" "F_LEN" "F_NKLASS" "F_AFULL" "F_ROUGH" "F_WIDE" "F_DEEP" "F_TTHETA" "F_TPHI" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Basic Conduit Data" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Basic Conduit Data" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Basic Conduit Data" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Basic Conduit Data" 1 1 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Basic Conduit Data" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Basic Conduit Data" 9 0 0 0 0 0 0 0 0 0 \r
GLDBITEM "XP Tables" "Conduit Factors" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Conduit Factors" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Conduit Factors" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Conduit Factors" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Conduit Factors" 1 "1" \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Conduit Factors" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Conduit Factors" 9 "FD_LINK_NAME" "F_BARREL" "F_PLC" "F_GEOFF" "F_ECC" "F_PWD" "F_RRAT" "F_RDEP" "F_NONLIN" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Conduit Factors" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Conduit Factors" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Conduit Factors" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Conduit Factors" 1 1 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Conduit Factors" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Conduit Factors" 9 0 0 0 0 0 0 0 0 0 \r
GLDBITEM "XP Tables" "Junction Data" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Junction Data" 14 48 48 48 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Junction Data" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Junction Data" 14 12 12 12 12 12 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Junction Data" 1 "1" \r
GLDBDATA TBLOBJSEL "XP Tables" "Junction Data" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Junction Data" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Junction Data" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Junction Data" 14 "FD_NODE_NAME" "F_GRELEV" "F_E_MAXCROWN" "F_Z" "F_QINST" "F_Y0" "F_INTPERCENT" "FD_NODE_X" "FD_NODE_Y" "F_SFLOOD" "F_IFLAG" "F_MICAP" "F_PAVEREF" "F_GLSLP" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Junction Data" 14 3 3 3 3 3 3 3 3 3 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Junction Data" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Junction Data" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Junction Data" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Junction Data" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Junction Data" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Junction Data" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Junction Data" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Junction Data" 1 0 \r
GLDBITEM "XP Tables" "Conduit Connectivity" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Conduit Connectivity" 6 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Conduit Connectivity" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Conduit Connectivity" 6 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Conduit Connectivity" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Conduit Connectivity" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Conduit Connectivity" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Conduit Connectivity" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Conduit Connectivity" 6 "FD_LINK_NAME" "FD_LINK_US_NODE" "FD_LINK_DS_NODE" "F_ZP1" "F_ZP2" "F_EC_DESN" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Conduit Connectivity" 6 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Conduit Connectivity" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Conduit Connectivity" 6 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Conduit Connectivity" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Conduit Connectivity" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Conduit Connectivity" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Conduit Connectivity" 6 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Conduit Connectivity" 6 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Conduit Connectivity" 1 0 \r
GLDBITEM "XP Tables" "Dry Weather Flows" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Dry Weather Flows" 8 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Dry Weather Flows" 8 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Dry Weather Flows" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Dry Weather Flows" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Dry Weather Flows" 8 "FD_NODE_NAME" "F_HDR_SEWAGE" "F_HDR_ASUB" "F_HDR_POPDEN" "F_HDR_PFAC" "F_HDR_DWF_UN" "F_HDR_DWF_MTD" "F_HDR_TMPV" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Dry Weather Flows" 8 3 3 3 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Dry Weather Flows" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Dry Weather Flows" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Dry Weather Flows" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Dry Weather Flows" 1 0 \r
GLDBITEM "XP Tables" "Final Node Condition" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Final Node Condition" 7 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Final Node Condition" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Final Node Condition" 7 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Final Node Condition" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Final Node Condition" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Final Node Condition" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Final Node Condition" 7 "FD_NODE_NAME" "F_E_FINDEPTH" "F_E_FINEGL" "F_E_FINELEV" "F_E_FINFLOOD" "F_E_FINFREEB" "F_E_FINVOLNODE" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Final Node Condition" 7 3 3 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Final Node Condition" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Final Node Condition" 7 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Final Node Condition" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Final Node Condition" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Final Node Condition" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Final Node Condition" 7 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Final Node Condition" 7 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Final Node Condition" 1 0 \r
GLDBITEM "XP Tables" "Final Conduit Result" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Final Conduit Result" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Final Conduit Result" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Final Conduit Result" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Final Conduit Result" 1 "2" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Final Conduit Result" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Final Conduit Result" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Final Conduit Result" 9 "FD_LINK_NAME" "F_E_FINFLOW" "F_E_FINVEL" "F_E_FINWIDTH" "F_E_FINHRAD" "F_E_FINCSAREA" "F_E_FINVOLLINK" "F_E_FINELEVUS" "F_E_FINELEVDS" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Final Conduit Result" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Final Conduit Result" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Final Conduit Result" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Final Conduit Result" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Final Conduit Result" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Final Conduit Result" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Final Conduit Result" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Final Conduit Result" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Final Conduit Result" 1 0 \r
GLDBITEM "XP Tables" "Time Step Summary" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Time Step Summary" 5 "Node Name" "Number of Non-convergences" "Mean Nodal Iterations" "Total Iterations" "Maximum Iterations per Time Step" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Time Step Summary" 5 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Time Step Summary" 5 "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Time Step Summary" 5 12 18 12 12 12 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Time Step Summary" 5 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Time Step Summary" 1 "1" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Time Step Summary" 5 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Time Step Summary" 5 1 1 1 1 1 \r
GLDBDATA TBLOBJSEL "XP Tables" "Time Step Summary" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Time Step Summary" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Time Step Summary" 5 "FD_NODE_NAME" "F_E_NONCONVERGE" "F_E_RMNDITR" "F_E_RTNDITR" "F_E_MAXIT" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Time Step Summary" 5 3 3 3 3 3 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Time Step Summary" 5 3.000 3.000 2.000 3.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Time Step Summary" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Time Step Summary" 5 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Time Step Summary" 1 0 \r
GLDBITEM "XP Tables" "Junction Statistics" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Junction Statistics" 11 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Junction Statistics" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Junction Statistics" 11 12 12 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Junction Statistics" 1 "1" \r
GLDBDATA TBLOBJSEL "XP Tables" "Junction Statistics" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Junction Statistics" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Junction Statistics" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Junction Statistics" 11 "FD_NODE_NAME" "F_GRELEV" "F_E_MAXCROWN" "F_E_RSRFELV" "F_E_TIMMAXHGL" "F_E_MAXSURCHARGE" "F_E_RFREEBD" "F_E_RSRFARE" "F_E_MAXGUTDEPTH" "F_E_MAXGUTWIDTH" "F_E_MAXGUTVEL" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Junction Statistics" 11 3 3 3 3 3 3 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Junction Statistics" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Junction Statistics" 11 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Junction Statistics" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Junction Statistics" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Junction Statistics" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Junction Statistics" 11 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Junction Statistics" 11 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Junction Statistics" 1 0 \r
GLDBITEM "XP Tables" "Conduit Statistics" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Conduit Statistics" 11 "0" "cfs" "ft/s; m/s" "ft" "cfs" "hr" "ft/s" "hr" "%" "ft" "ft" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Conduit Statistics" 12 "Link Name" "Design Full Flow" "Design Velocity" "Diameter (Height)" "Max Flow" "Time to Peak" "Max Velocity" "Time of Peak Velocity" "Max Flow/Design Flow (fraction)" "Max Water Depth" "Max Water Depth" "Max d/D (depth/diameter)" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Conduit Statistics" 12 48 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Conduit Statistics" 12 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Conduit Statistics" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Conduit Statistics" 12 12 12 12 12 12 12 12 12 12 12 12 15 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Conduit Statistics" 12 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Conduit Statistics" 1 "2" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Conduit Statistics" 12 9 9 9 9 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Conduit Statistics" 12 1 1 1 1 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLOBJSEL "XP Tables" "Conduit Statistics" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Conduit Statistics" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Conduit Statistics" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Conduit Statistics" 12 "FD_LINK_NAME" "F_E_RDSGNFF" "F_E_RDSGNVL" "F_DEEP" "F_E_RMAXFLO" "F_E_RTIMEPF" "F_E_RMAXVEL" "F_E_RTIMEPV" "F_E_RPMXFLO" "F_E_RSRFDTH" "F_E_RSRFDTH" "F_E_MAXDD" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 1 2 0 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Conduit Statistics" 12 3.000 2.000 2.000 3.000 3.000 3.000 2.000 3.000 3.000 3.000 3.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Conduit Statistics" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Conduit Statistics" 1 1 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Conduit Statistics" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Conduit Statistics" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Conduit Statistics" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Conduit Statistics" 12 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Conduit Statistics" 1 0 \r
GLDBITEM "XP Tables" "Area Assumptions" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Area Assumptions" 7 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Area Assumptions" 7 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Area Assumptions" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Area Assumptions" 1 "1" \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Area Assumptions" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Area Assumptions" 7 "FD_LINK_NAME" "F_E_RLENDRT" "F_E_RTIMENF" "F_E_RLENTMC" "F_E_RHYDRAD" "F_E_RXSECAR" "F_E_RMAXVD" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Area Assumptions" 7 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Area Assumptions" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Area Assumptions" 7 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Area Assumptions" 1 1 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Area Assumptions" 7 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Area Assumptions" 7 0 0 0 0 0 0 0 \r
GLDBITEM "XP Tables" "Mean Conduit Info" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Mean Conduit Info" 8 "0" "ft^3/s" "ft^3" "%" "0" "0" "ft" "ft^2" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Mean Conduit Info" 9 "Link Name" "Mean Flow" "Total Flow" "Mean Change in Flow" "Low Flow Weighting" "Mean Froude Number" "Mean Hydraulic Radius" "Mean Cross-sectional Area" "Mean Roughness" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Mean Conduit Info" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Mean Conduit Info" 9 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Mean Conduit Info" 9 12 12 12 12 12 12 12 16 12 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Mean Conduit Info" 9 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Mean Conduit Info" 1 "2" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Mean Conduit Info" 9 9 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Mean Conduit Info" 9 1 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLUSEFILTER "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Mean Conduit Info" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Mean Conduit Info" 9 "FD_LINK_NAME" "F_E_AVGFLOW" "F_E_TOTALFLOW" "F_E_AVGCHANGE" "F_E_LOWFLOWWT" "F_E_AVGFROUDE" "F_E_AVGHRAD" "F_E_AVGCSAREA" "F_E_AVGROUGHNESS" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Mean Conduit Info" 9 3.000 3.000 3.000 2.000 2.000 2.000 2.000 2.000 2.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Mean Conduit Info" 1 1 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Mean Conduit Info" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Mean Conduit Info" 1 0 \r
GLDBITEM "XP Tables" "Conduit Losses" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Conduit Losses" 8 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Conduit Losses" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Conduit Losses" 8 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Conduit Losses" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Conduit Losses" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Conduit Losses" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Conduit Losses" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Conduit Losses" 8 "FD_LINK_NAME" "F_E_RMAXFLO" "F_E_RMINORL" "F_E_RFRICTL" "F_E_DEPTHCRIT" "F_E_DEPTHNORMAL" "F_E_RSRFELV" "F_E_RSRFELV" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Conduit Losses" 8 0 0 0 0 0 0 1 2 \r
GLDBDATA TBL_CURSC "XP Tables" "Conduit Losses" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Conduit Losses" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Conduit Losses" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Conduit Losses" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Conduit Losses" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Conduit Losses" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Conduit Losses" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Conduit Losses" 1 0 \r
GLDBITEM "XP Tables" "Culvert Classification" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Culvert Classification" 10 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Culvert Classification" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Culvert Classification" 10 12 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Culvert Classification" 1 "2" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Culvert Classification" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Culvert Classification" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Culvert Classification" 10 "FD_LINK_NAME" "F_E_OUTCTLCRITD" "F_E_OUTCTLTW" "F_E_ENTRCTL" "F_E_ENTRCTLSLUG" "F_E_OUTCTLTWGTD" "F_E_OUTCTLTWLED" "F_E_OUTCTL" "F_E_INCTL" "F_ICHARNO" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Culvert Classification" 10 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Culvert Classification" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Culvert Classification" 10 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Culvert Classification" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Culvert Classification" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Culvert Classification" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Culvert Classification" 10 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Culvert Classification" 10 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Culvert Classification" 1 0 \r
GLDBITEM "XP Tables" "Channel Flows" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Channel Flows" 14 48 48 48 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Channel Flows" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Channel Flows" 14 12 12 12 12 12 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Channel Flows" 1 "2" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Channel Flows" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Channel Flows" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Channel Flows" 14 "FD_LINK_NAME" "F_E_MAXVELL" "F_E_MAXVELC" "F_E_MAXVELR" "F_E_MAXFLOWL" "F_E_MAXFLOWC" "F_E_MAXFLOWR" "F_E_MAXAREAL" "F_E_MAXAREAC" "F_E_MAXAREAR" "F_E_MAXVOLL" "F_E_MAXVOLC" "F_E_MAXVOLR" "F_E_MAXDEPTH" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Channel Flows" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Channel Flows" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Channel Flows" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Channel Flows" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Channel Flows" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Channel Flows" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Channel Flows" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Channel Flows" 14 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Channel Flows" 1 0 \r
GLDBITEM "XP Tables" "Encroachment Result" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Encroachment Result" 16 "0" "0" "0" "0" "0" "0" "0" "0" "0" "0" "0" "0" "0" "%" "%" "ft" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Encroachment Result" 17 "Link Name" "Existing Conveyance Left Channel" "Existing Conveyance Main Channel" "Existing Conveyance Right Channel" "Existing Conveyance Total" "Existing Left Station" "Existing Right Station" "Encroachment Conveyance Left Channel" "Encroachment Conveyance Main Channel" "Encroachment Conveyance Right Channel" "Encroachment Conveyance Total" "Encroachment Left Station" "Encroachment Right Station" "Encroachment Volume Reduction Left Channel" "Encroachment Volume Reduction Right Channel" "Encroachment Depth" "Encroachment Method" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Encroachment Result" 17 48 48 48 48 48 48 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Encroachment Result" 17 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Encroachment Result" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Encroachment Result" 17 12 12 12 12 12 12 12 15 15 15 15 15 15 15 15 15 15 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Encroachment Result" 17 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Encroachment Result" 1 "2" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Encroachment Result" 17 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Encroachment Result" 17 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLUSEFILTER "XP Tables" "Encroachment Result" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Encroachment Result" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Encroachment Result" 17 "FD_LINK_NAME" "F_E_CONVEYEXISTL" "F_E_CONVEYEXISTC" "F_E_CONVEYEXISTR" "F_E_CONVEYEXISTT" "F_E_LEFTSTN" "F_E_RIGHTSTN" "F_E_CONVEYENCRL" "F_E_CONVEYENCRC" "F_E_CONVEYENCRR" "F_E_CONVEYENCRT" "F_E_ENCRLEFTSTN" "F_E_ENCRRIGHTSTN" "F_E_ENCRVOLREDL" "F_E_ENCRVOLREDR" "F_E_ENCRDEPTH" "F_E_ENCRMETHOD" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Encroachment Result" 17 3.000 2.000 2.000 2.000 2.000 3.000 3.000 2.000 2.000 2.000 2.000 3.000 3.000 3.000 3.000 3.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Encroachment Result" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Encroachment Result" 1 1 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Encroachment Result" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Encroachment Result" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Encroachment Result" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Encroachment Result" 17 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Encroachment Result" 1 0 \r
GLDBITEM "XP Tables" "Floodplain Mapping" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Floodplain Mapping" 4 "0" "ft" "ft" "ft" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Floodplain Mapping" 13 "Link Name" "Maximum Water Elevation (US)" "Maximum Water Elevation (DS)" "Main Channel Length" "Center Station" "Left Bank Encroachment Offset" "Left Bank Natural Offset" "Left Overbank Offset" "Right Bank Encroachment Offset" "Right Bank Natural Offset" "Right Overbank Offset" "Channel Width" "Channel Width (Encroached)" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Floodplain Mapping" 13 48 48 48 48 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Floodplain Mapping" 13 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Floodplain Mapping" 13 12 12 12 12 12 15 12 12 15 12 12 12 12 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Floodplain Mapping" 13 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Floodplain Mapping" 1 "2" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Floodplain Mapping" 13 9 9 9 9 9 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Floodplain Mapping" 13 1 1 1 1 1 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLUSEFILTER "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Floodplain Mapping" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Floodplain Mapping" 13 "FD_LINK_NAME" "F_E_RWELEVUS" "F_E_RWELEVDS" "F_XNLEN_CH" "F_E_NATSTNC" "F_E_NATOFFENCRL" "F_E_NATOFFNATL" "F_E_NATOFFOBL" "F_E_NATOFFENCRR" "F_E_NATOFFNATR" "F_E_NATOFFOBR" "F_E_NATWIDTH" "F_E_ENCRWIDTH" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Floodplain Mapping" 13 3.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Floodplain Mapping" 1 1 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Floodplain Mapping" 13 0 0 0 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Floodplain Mapping" 1 0 \r
GLDBITEM "XP Tables" "Spreadsheet Info" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Spreadsheet Info" 8 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Spreadsheet Info" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Spreadsheet Info" 8 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Spreadsheet Info" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Spreadsheet Info" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Spreadsheet Info" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Spreadsheet Info" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Spreadsheet Info" 8 "FD_LINK_NAME" "F_E_RMAXFLO" "F_E_TOTALFLOW" "F_E_RMAXVEL" "F_E_RMAXVOL" "FD_NODE_NAME" "F_Z" "F_E_RSRFELV" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Spreadsheet Info" 8 0 0 0 0 0 1 1 1 \r
GLDBDATA TBL_CURSC "XP Tables" "Spreadsheet Info" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Spreadsheet Info" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Spreadsheet Info" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Spreadsheet Info" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Spreadsheet Info" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Spreadsheet Info" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Spreadsheet Info" 8 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Spreadsheet Info" 1 0 \r
GLDBITEM "XP Tables" "Reach Information" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Reach Information" 4 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Reach Information" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Reach Information" 4 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Reach Information" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "Reach Information" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Reach Information" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Reach Information" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Reach Information" 4 "FD_NODE_NAME" "FD_NODE_NAME" "F_E_RMAXFLO" "F_E_TOTALFLOW" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Reach Information" 4 1 2 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Reach Information" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Reach Information" 4 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Reach Information" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Reach Information" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Reach Information" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Reach Information" 4 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Reach Information" 4 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Reach Information" 1 0 \r
GLDBITEM "XP Tables" "New Conduit Table" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "New Conduit Table" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "New Conduit Table" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "New Conduit Table" 1 "2" \r
GLDBDATA TBLOBJSEL "XP Tables" "New Conduit Table" 1 "1" \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "New Conduit Table" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "New Conduit Table" 9 "FD_LINK_NAME" "FD_NODE_NAME" "FD_NODE_NAME" "F_Z" "F_Z" "F_E_RSRFELV" "F_E_RSRFELV" "F_NKLASS" "F_NKCTL" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "New Conduit Table" 9 0 1 2 1 2 1 2 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "New Conduit Table" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "New Conduit Table" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "New Conduit Table" 1 1 \r
GLDBDATA TBLVAR_INDX "XP Tables" "New Conduit Table" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "New Conduit Table" 9 0 0 0 0 0 0 0 0 0 \r
GLDBITEM "XP Tables" "Pump Operation" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Pump Operation" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Pump Operation" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Pump Operation" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLUSEFILTER "XP Tables" "Pump Operation" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Pump Operation" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Pump Operation" 9 "FD_NODE_NAME" "FD_NODE_NAME" "F_E_PUMPRUNTIME" "F_E_PNUMON" "F_E_PUMPMINHEAD" "F_E_PUMPMAXHEAD" "F_E_PUMPMINQ" "F_E_PUMPMAXQ" "F_E_PVOL" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Pump Operation" 9 1 2 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CURSC "XP Tables" "Pump Operation" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Pump Operation" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Pump Operation" 1 1 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Pump Operation" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Pump Operation" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Pump Operation" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Pump Operation" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Pump Operation" 1 0 \r
GLDBITEM "XP Tables" "Junction Continuity" \r
GLDBDATA TBLVAREX_DATUNT "XP Tables" "Junction Continuity" 8 "0" "ft^3" "0" "0" "ft^3" "ft^3" "ft^3" "ft^3" \r
GLDBDATA TBLVAREX_TITLE "XP Tables" "Junction Continuity" 9 "Node Name" "Continuity Error Volume" "Continuity Error Volume (% of Node)" "Continuity Error Volume (% of Inflow)" "Ending Volume" "Starting Volume" "Net Flow Through Node" "Total Flow Through Node" "Number of Non-convergences" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Junction Continuity" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBLVAREX_FONT "XP Tables" "Junction Continuity" 9 "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" "Arial" \r
GLDBDATA TBLVAREX_PARENT "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Junction Continuity" 9 12 12 12 12 12 12 12 12 18 \r
GLDBDATA TBLVAREX_DATACC "XP Tables" "Junction Continuity" 9 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 0.000 \r
GLDBDATA TBLOBJ "XP Tables" "Junction Continuity" 1 "1" \r
GLDBDATA TBLVAREX_FSIZE "XP Tables" "Junction Continuity" 9 9 9 9 9 9 9 9 9 9 \r
GLDBDATA TBLVAREX_VSBLE "XP Tables" "Junction Continuity" 9 1 1 1 1 1 1 1 1 1 \r
GLDBDATA TBLOBJSEL "XP Tables" "Junction Continuity" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Junction Continuity" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Junction Continuity" 9 "FD_NODE_NAME" "F_E_CONTVOL" "F_E_CONTVOLNODE" "F_E_CONTVOLINFLOW" "F_E_ENDVOL" "F_E_STVOL" "F_E_NODEFLOWNET" "F_E_NODEFLOWTOTAL" "F_E_NONCONVERGE" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Junction Continuity" 9 3 3 3 3 3 3 3 3 3 \r
GLDBDATA TBLVAREX_DATPRE "XP Tables" "Junction Continuity" 9 3.000 3.000 2.000 3.000 2.000 3.000 2.000 2.000 3.000 \r
GLDBDATA TBL_CURSC "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBLVAREX_ALIGN "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBLVAREX_FSTYLE "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLUNITDISP "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBLVAREX_FCOLOR "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Junction Continuity" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Junction Continuity" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Junction Continuity" 1 0 \r
GLDBITEM "XP Tables" "Node Inflow Sources" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Node Inflow Sources" 9 48 48 48 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Node Inflow Sources" 9 12 12 12 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Node Inflow Sources" 1 "1" \r
GLDBDATA TBLOBJSEL "XP Tables" "Node Inflow Sources" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Node Inflow Sources" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Node Inflow Sources" 10 "FD_NODE_NAME" "F_E_RNDINFL" "F_E_NODEVOLINCONST" "F_E_NODEVOLINUSER" "F_E_NODEVOLININT" "F_E_NODEVOLINDWF" "F_E_NODEVOLINOUT" "F_E_NODEVOLINRNF" "F_E_NODEVOLOUT" "F_E_NODEVOLEVAP" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Node Inflow Sources" 10 3 3 3 3 3 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Node Inflow Sources" 9 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Node Inflow Sources" 10 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Node Inflow Sources" 10 0 0 0 0 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Node Inflow Sources" 1 0 \r
GLDBITEM "XP Tables" "Node Flooding" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Node Flooding" 6 48 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Node Flooding" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Node Flooding" 6 12 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Node Flooding" 1 "1" \r
GLDBDATA TBLOBJSEL "XP Tables" "Node Flooding" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Node Flooding" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Node Flooding" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Node Flooding" 6 "FD_NODE_NAME" "F_E_RNSURCH" "F_E_RNFLOOD" "F_E_RFLDLSS" "F_E_RVOLUME" "F_E_NODEVOLPONDED" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Node Flooding" 6 3 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Node Flooding" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Node Flooding" 6 0 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Node Flooding" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Node Flooding" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Node Flooding" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Node Flooding" 6 0 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Node Flooding" 6 0 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Node Flooding" 1 0 \r
GLDBITEM "XP Tables" "Continuity Balance" \r
GLDBDATA TBLVAREX_ROWHT "XP Tables" "Continuity Balance" 5 48 48 48 48 48 \r
GLDBDATA TBL_PUMPFLAG "XP Tables" "Continuity Balance" 1 0 \r
GLDBDATA TBLVAREX_DATACW "XP Tables" "Continuity Balance" 5 12 12 12 12 12 \r
GLDBDATA TBLOBJ "XP Tables" "Continuity Balance" 1 "1" \r
GLDBDATA TBLUSEFILTER "XP Tables" "Continuity Balance" 1 0 \r
GLDBDATA TBL_VIEWFLAG "XP Tables" "Continuity Balance" 1 1 \r
GLDBDATA TBLVAR_FIELD "XP Tables" "Continuity Balance" 5 "FD_NODE_NAME" "F_E_RNDINFL" "F_E_NODEAIRATE" "F_E_NODEVOLOUT" "F_E_NODEAORATE" \r
GLDBDATA TBLVAR_TYPE "XP Tables" "Continuity Balance" 5 3 3 3 3 3 \r
GLDBDATA TBL_CURSC "XP Tables" "Continuity Balance" 1 0 \r
GLDBDATA TBLVAREX_FLIP "XP Tables" "Continuity Balance" 5 0 0 0 0 0 \r
GLDBDATA TBL_CONFLAG "XP Tables" "Continuity Balance" 1 0 \r
GLDBDATA TBL_SPECFLAG "XP Tables" "Continuity Balance" 1 0 \r
GLDBDATA TBL_ORIFLAG "XP Tables" "Continuity Balance" 1 0 \r
GLDBDATA TBLVAR_INDX "XP Tables" "Continuity Balance" 5 0 0 0 0 0 \r
GLDBDATA TBLVAR_INST "XP Tables" "Continuity Balance" 5 0 0 0 0 0 \r
GLDBDATA TBL_WEIRFLAG "XP Tables" "Continuity Balance" 1 0 \r
GLDBITEM "Groundwater" "Ag Tile Drains" \r
GLDBDATA R_A2 "Groundwater" "Ag Tile Drains" 1 0.06700 \r
GLDBDATA R_A3 "Groundwater" "Ag Tile Drains" 1 0.00300 \r
GLDBDATA R_A1 "Groundwater" "Ag Tile Drains" 1 0.00300 \r
GLDBDATA R_WP "Groundwater" "Ag Tile Drains" 1 0.14000 \r
GLDBDATA R_STG "Groundwater" "Ag Tile Drains" 1 5.00000 \r
GLDBDATA R_BC "Groundwater" "Ag Tile Drains" 1 5.00000 \r
GLDBDATA R_FC "Groundwater" "Ag Tile Drains" 1 0.26000 \r
GLDBDATA R_B2 "Groundwater" "Ag Tile Drains" 1 0.0 \r
GLDBDATA R_B1 "Groundwater" "Ag Tile Drains" 1 2.00000 \r
GLDBDATA R_DET "Groundwater" "Ag Tile Drains" 1 6.00000 \r
GLDBDATA R_TW "Groundwater" "Ag Tile Drains" 1 0.0 \r
GLDBDATA R_CET "Groundwater" "Ag Tile Drains" 1 0.75000 \r
GLDBDATA R_CONDEPTH "Groundwater" "Ag Tile Drains" 1 "1" \r
GLDBDATA R_GRELEV "Groundwater" "Ag Tile Drains" 1 3.00000 \r
GLDBITEM "Groundwater" "Ag Drainage Ditch" \r
GLDBDATA R_A2 "Groundwater" "Ag Drainage Ditch" 1 0.0 \r
GLDBDATA R_A3 "Groundwater" "Ag Drainage Ditch" 1 0.0 \r
GLDBDATA R_A1 "Groundwater" "Ag Drainage Ditch" 1 0.0 \r
GLDBDATA R_WP "Groundwater" "Ag Drainage Ditch" 1 0.14000 \r
GLDBDATA R_STG "Groundwater" "Ag Drainage Ditch" 1 5.00000 \r
GLDBDATA R_BC "Groundwater" "Ag Drainage Ditch" 1 5.00000 \r
GLDBDATA R_FC "Groundwater" "Ag Drainage Ditch" 1 0.26000 \r
GLDBDATA R_B2 "Groundwater" "Ag Drainage Ditch" 1 0.0 \r
GLDBDATA R_B1 "Groundwater" "Ag Drainage Ditch" 1 2.00000 \r
GLDBDATA R_DET "Groundwater" "Ag Drainage Ditch" 1 6.00000 \r
GLDBDATA R_TW "Groundwater" "Ag Drainage Ditch" 1 0.0 \r
GLDBDATA R_CET "Groundwater" "Ag Drainage Ditch" 1 0.70000 \r
GLDBDATA R_CONDEPTH "Groundwater" "Ag Drainage Ditch" 1 "1" \r
GLDBDATA R_GRELEV "Groundwater" "Ag Drainage Ditch" 1 3.00000 \r
GLDBITEM "Snow Melt" "Sample Snow Pack" \r
GLDBDATA R_FW1 "Snow Melt" "Sample Snow Pack" 1 3.000 \r
GLDBDATA R_FW2 "Snow Melt" "Sample Snow Pack" 1 3.000 \r
GLDBDATA R_TBASE2 "Snow Melt" "Sample Snow Pack" 1 32.000 \r
GLDBDATA R_TBASE1 "Snow Melt" "Sample Snow Pack" 1 32.000 \r
GLDBDATA R_WSNOW2 "Snow Melt" "Sample Snow Pack" 1 10.000 \r
GLDBDATA R_WSNOW1 "Snow Melt" "Sample Snow Pack" 1 3.000 \r
GLDBITEM "Pit Rating Curves" "F-33" \r
GLDBDATA PIBF "Pit Rating Curves" "F-33" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "F-33" 11 0. .0263 .0443 .0618 .0737 .0837 .0927 .1008 .1084 .1154 .122 \r
GLDBITEM "Pit Rating Curves" "F-35" \r
GLDBDATA PIBF "Pit Rating Curves" "F-35" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "F-35" 11 0. .0172 .0282 .0375 .0442 .05 .0551 .0598 .0642 .0683 .0722 \r
GLDBITEM "Pit Rating Curves" "F-36" \r
GLDBDATA PIBF "Pit Rating Curves" "F-36" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "F-36" 11 0. .0156 .0279 .0463 .0556 .0663 .0762 .0839 .0906 .0973 .1033 \r
GLDBITEM "Pit Rating Curves" "F-38" \r
GLDBDATA PIBF "Pit Rating Curves" "F-38" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "F-38" 11 0. .0442 .0625 .0765 .0883 .0988 .1082 .1168 .1249 .1325 .1396 \r
GLDBITEM "Pit Rating Curves" "F-39" \r
GLDBDATA PIBF "Pit Rating Curves" "F-39" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "F-39" 11 0. .0404 .0572 .07 .0809 .0904 .0991 .107 .1144 .1213 .1279 \r
GLDBITEM "Pit Rating Curves" "F-51" \r
GLDBDATA PIBF "Pit Rating Curves" "F-51" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "F-51" 11 0. .0833 .125 .1619 .1912 .2225 .2552 .2884 .3161 .3422 .366 \r
GLDBITEM "Pit Rating Curves" "K-2" \r
GLDBDATA PIBF "Pit Rating Curves" "K-2" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "K-2" 11 0. .0461 .071 .0938 .1219 .1462 .1572 .1721 .1857 .1982 .21 \r
GLDBITEM "Pit Rating Curves" "NF-49" \r
GLDBDATA PIBF "Pit Rating Curves" "NF-49" 11 0. .00254 .00508 .00762 .01016 .0127 .01524 .01778 .02032 .02286 .0254 \r
GLDBDATA PIIF "Pit Rating Curves" "NF-49" 11 0. .0529 .0748 .0916 .1057 .1182 .1295 .1398 .1495 .1586 .1672 \r
GLDBITEM "Pit Rating Curves" "50%Capture" \r
GLDBDATA PIBF "Pit Rating Curves" "50%Capture" 5 0. .1 .2 1. 2. \r
GLDBDATA PIIF "Pit Rating Curves" "50%Capture" 5 0. .05 .1 .5 1. \r
GLDBITEM "Pit Rating Curves" "Slotted Grate" \r
GLDBDATA PIBF "Pit Rating Curves" "Slotted Grate" 8 0. 1. 2. 3. 4. 5. 6. 10. \r
GLDBDATA PIIF "Pit Rating Curves" "Slotted Grate" 8 0. 1. 1.8 2.5 3. 3.5 3.75 4.5 \r
GLDBITEM "Pollutant" "BOD5" \r
GLDBDATA R_LINKUP "Pollutant" "BOD5" 1 0 \r
GLDBDATA R_CBFACT "Pollutant" "BOD5" 1 0.0 \r
GLDBDATA R_REFF "Pollutant" "BOD5" 1 0.0 \r
GLDBDATA R_CONCRN "Pollutant" "BOD5" 1 0.0 \r
GLDBDATA R_PDECAY "Pollutant" "BOD5" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "BOD5" 1 0 \r
GLDBDATA R_F1 "Pollutant" "BOD5" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "BOD5" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "BOD5" 1 "mg/l" \r
GLDBDATA R_GCONC "Pollutant" "BOD5" 1 0.0 \r
GLDBITEM "Pollutant" "COD" \r
GLDBDATA R_PDECAY "Pollutant" "COD" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "COD" 1 0 \r
GLDBDATA R_F1 "Pollutant" "COD" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "COD" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "COD" 1 "mg/l" \r
GLDBITEM "Pollutant" "Total soluble solids" \r
GLDBDATA R_PDECAY "Pollutant" "Total soluble solids" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "Total soluble solids" 1 0 \r
GLDBDATA R_F1 "Pollutant" "Total soluble solids" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "Total soluble solids" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "Total soluble solids" 1 "mg/l" \r
GLDBITEM "Pollutant" "TKN" \r
GLDBDATA R_PDECAY "Pollutant" "TKN" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "TKN" 1 0 \r
GLDBDATA R_F1 "Pollutant" "TKN" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "TKN" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "TKN" 1 "mg/l" \r
GLDBITEM "Pollutant" "NO2-N+NO3-N1" \r
GLDBDATA R_PDECAY "Pollutant" "NO2-N+NO3-N1" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "NO2-N+NO3-N1" 1 0 \r
GLDBDATA R_F1 "Pollutant" "NO2-N+NO3-N1" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "NO2-N+NO3-N1" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "NO2-N+NO3-N1" 1 "mg/l" \r
GLDBITEM "Pollutant" "Total phosphorus" \r
GLDBDATA R_PDECAY "Pollutant" "Total phosphorus" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "Total phosphorus" 1 0 \r
GLDBDATA R_F1 "Pollutant" "Total phosphorus" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "Total phosphorus" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "Total phosphorus" 1 "mg/l" \r
GLDBITEM "Pollutant" "Soluble phosphorus" \r
GLDBDATA R_PDECAY "Pollutant" "Soluble phosphorus" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "Soluble phosphorus" 1 0 \r
GLDBDATA R_F1 "Pollutant" "Soluble phosphorus" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "Soluble phosphorus" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "Soluble phosphorus" 1 "mg/l" \r
GLDBITEM "Pollutant" "Total Lead" \r
GLDBDATA R_PDECAY "Pollutant" "Total Lead" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "Total Lead" 1 0 \r
GLDBDATA R_F1 "Pollutant" "Total Lead" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "Total Lead" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "Total Lead" 1 "mg/l" \r
GLDBITEM "Pollutant" "Total Copper" \r
GLDBDATA R_PDECAY "Pollutant" "Total Copper" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "Total Copper" 1 0 \r
GLDBDATA R_F1 "Pollutant" "Total Copper" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "Total Copper" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "Total Copper" 1 "mg/l" \r
GLDBITEM "Pollutant" "Total Zinc" \r
GLDBDATA R_PDECAY "Pollutant" "Total Zinc" 1 0.0 \r
GLDBDATA R_F1TAG "Pollutant" "Total Zinc" 1 0 \r
GLDBDATA R_F1 "Pollutant" "Total Zinc" 1 0.0 \r
GLDBDATA R_NDIM "Pollutant" "Total Zinc" 1 "0" \r
GLDBDATA R_PUNIT "Pollutant" "Total Zinc" 1 "mg/l" \r
GLDBITEM "Natural Section Shape" "Collector w/transit" \r
GLDBDATA EL "Natural Section Shape" "Collector w/transit" 12 1. .98 .9 .9 .75 .9 .8 .75 .9 .9 .98 1. \r
GLDBDATA STA "Natural Section Shape" "Collector w/transit" 12 0. 1.8 3.6 3.75 3.8 8.1 12.4 14.8 14.85 15. 16.8 18.6 \r
GLDBDATA NSGD_STCHR "Natural Section Shape" "Collector w/transit" 1 15.000 \r
GLDBDATA NSGD_STCHL "Natural Section Shape" "Collector w/transit" 1 3.600 \r
GLDBDATA NSGD_XNCH "Natural Section Shape" "Collector w/transit" 1 0.018 \r
GLDBDATA NSGD_XNR "Natural Section Shape" "Collector w/transit" 1 0.050 \r
GLDBDATA NSGD_XNL "Natural Section Shape" "Collector w/transit" 1 0.050 \r
GLDBITEM "Natural Section Shape" "Collector" \r
GLDBDATA EL "Natural Section Shape" "Collector" 13 1. .98 .9 .9 .75 .85 .9 .85 .75 .9 .9 .98 1. \r
GLDBDATA STA "Natural Section Shape" "Collector" 13 0. 1.8 3.6 3.75 3.8 5.8 9.3 12.8 14.8 14.85 15. 16.8 18.6 \r
GLDBDATA NSGD_STCHR "Natural Section Shape" "Collector" 1 15.000 \r
GLDBDATA NSGD_STCHL "Natural Section Shape" "Collector" 1 3.600 \r
GLDBDATA NSGD_XNCH "Natural Section Shape" "Collector" 1 0.018 \r
GLDBDATA NSGD_XNR "Natural Section Shape" "Collector" 1 0.050 \r
GLDBDATA NSGD_XNL "Natural Section Shape" "Collector" 1 0.050 \r
GLDBITEM "Natural Section Shape" "Local Street 1 Park" \r
GLDBDATA EL "Natural Section Shape" "Local Street 1 Park" 11 1. .98 .9 .9 .75 .9 .75 .9 .9 .98 1. \r
GLDBDATA STA "Natural Section Shape" "Local Street 1 Park" 11 0. 1.65 3.45 3.6 3.65 7.57 12.5 12.55 12.7 13.5 15.15 \r
GLDBDATA NSGD_STCHR "Natural Section Shape" "Local Street 1 Park" 1 12.700 \r
GLDBDATA NSGD_STCHL "Natural Section Shape" "Local Street 1 Park" 1 3.450 \r
GLDBDATA NSGD_XNCH "Natural Section Shape" "Local Street 1 Park" 1 0.018 \r
GLDBDATA NSGD_XNR "Natural Section Shape" "Local Street 1 Park" 1 0.050 \r
GLDBDATA NSGD_XNL "Natural Section Shape" "Local Street 1 Park" 1 0.050 \r
GLDBITEM "Natural Section Shape" "Local Street 2 Park" \r
GLDBDATA EL "Natural Section Shape" "Local Street 2 Park" 13 1. .98 .9 .9 .75 .85 .9 .85 .75 .9 .9 .98 1. \r
GLDBDATA STA "Natural Section Shape" "Local Street 2 Park" 13 0. 1.65 3.45 3.6 3.65 5.5 8.5 11.5 13.35 13.4 13.55 15.35 17. \r
GLDBDATA NSGD_STCHR "Natural Section Shape" "Local Street 2 Park" 1 13.550 \r
GLDBDATA NSGD_STCHL "Natural Section Shape" "Local Street 2 Park" 1 3.450 \r
GLDBDATA NSGD_XNCH "Natural Section Shape" "Local Street 2 Park" 1 0.018 \r
GLDBDATA NSGD_XNR "Natural Section Shape" "Local Street 2 Park" 1 0.050 \r
GLDBDATA NSGD_XNL "Natural Section Shape" "Local Street 2 Park" 1 0.050 \r
GLDBITEM "Sewer infiltration" "Infiltration @ Plant" \r
GLDBDATA T_NDD "Sewer infiltration" "Infiltration @ Plant" 12 1060. 854. 611. 312. 135. 5. 0. 0. 47. 287. 570. 902. \r
GLDBDATA T_RSMAX "Sewer infiltration" "Infiltration @ Plant" 1 4.00 \r
GLDBDATA T_RINFIL "Sewer infiltration" "Infiltration @ Plant" 1 15.000 \r
GLDBDATA T_DINFIL "Sewer infiltration" "Infiltration @ Plant" 1 2.000 \r
GLDBDATA T_GINFIL "Sewer infiltration" "Infiltration @ Plant" 1 3.000 \r
GLDBITEM "Erosion" "Construction Site" \r
GLDBDATA R_CONTPF "Erosion" "Construction Site" 1 0.900 \r
GLDBDATA R_SOILF "Erosion" "Construction Site" 1 0.500 \r
GLDBDATA R_CROPMF "Erosion" "Construction Site" 1 1.000 \r
GLDBDATA R_ERODAR "Erosion" "Construction Site" 1 0.050 \r
GLDBITEM "Pollutant" "BOD5" \r
GLDBDATA T_FSCOUR "Pollutant" "BOD5" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "BOD5" 1 "0" \r
GLDBITEM "Pollutant" "COD" \r
GLDBDATA T_FSCOUR "Pollutant" "COD" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "COD" 1 "0" \r
GLDBITEM "Pollutant" "Total soluble solids" \r
GLDBDATA T_FSCOUR "Pollutant" "Total soluble solids" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "Total soluble solids" 1 "0" \r
GLDBITEM "Pollutant" "TKN" \r
GLDBDATA T_FSCOUR "Pollutant" "TKN" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "TKN" 1 "0" \r
GLDBITEM "Pollutant" "NO2-N+NO3-N1" \r
GLDBDATA T_FSCOUR "Pollutant" "NO2-N+NO3-N1" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "NO2-N+NO3-N1" 1 "0" \r
GLDBITEM "Pollutant" "Total phosphorus" \r
GLDBDATA T_FSCOUR "Pollutant" "Total phosphorus" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "Total phosphorus" 1 "0" \r
GLDBITEM "Pollutant" "Soluble phosphorus" \r
GLDBDATA T_FSCOUR "Pollutant" "Soluble phosphorus" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "Soluble phosphorus" 1 "0" \r
GLDBITEM "Pollutant" "Total Lead" \r
GLDBDATA T_FSCOUR "Pollutant" "Total Lead" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "Total Lead" 1 "0" \r
GLDBITEM "Pollutant" "Total Copper" \r
GLDBDATA T_FSCOUR "Pollutant" "Total Copper" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "Total Copper" 1 "0" \r
GLDBITEM "Pollutant" "Total Zinc" \r
GLDBDATA T_FSCOUR "Pollutant" "Total Zinc" 1 0 \r
GLDBDATA T_FDWF "Pollutant" "Total Zinc" 1 "0" \r
GLDBITEM "Infiltration" "Horton" \r
GLDBDATA R_WSTOR2 "Infiltration" "Horton" 1 10.000 \r
GLDBDATA R_WSTOR1 "Infiltration" "Horton" 1 3.000 \r
GLDBDATA R_DECAY "Infiltration" "Horton" 1 0.001 \r
GLDBDATA R_MAXINF "Infiltration" "Horton" 1 0.0 \r
GLDBDATA R_INFILM "Infiltration" "Horton" 1 "0" \r
GLDBDATA R_PROUGH "Infiltration" "Horton" 1 0.030 \r
GLDBDATA R_WLMIN "Infiltration" "Horton" 1 1.000 \r
GLDBDATA R_WLMAX "Infiltration" "Horton" 1 4.000 \r
GLDBDATA R_IROUGH "Infiltration" "Horton" 1 0.014 \r
GLDBDATA R_PCTZER "Infiltration" "Horton" 1 25.000 \r
GLDBITEM "Infiltration" "Green-Ampt" \r
GLDBDATA R_WSTOR2 "Infiltration" "Green-Ampt" 1 10.000 \r
GLDBDATA R_WSTOR1 "Infiltration" "Green-Ampt" 1 3.000 \r
GLDBDATA R_SUCT "Infiltration" "Green-Ampt" 1 6.000 \r
GLDBDATA R_HYDCON "Infiltration" "Green-Ampt" 1 0.800 \r
GLDBDATA R_INFILM "Infiltration" "Green-Ampt" 1 "1" \r
GLDBDATA R_PROUGH "Infiltration" "Green-Ampt" 1 0.030 \r
GLDBDATA R_IROUGH "Infiltration" "Green-Ampt" 1 0.014 \r
GLDBDATA R_PCTZER "Infiltration" "Green-Ampt" 1 25.000 \r
GLDBDATA R_SMDMAX "Infiltration" "Green-Ampt" 1 0.250 \r
GLDBITEM "Infiltration" "Proportional Loss" \r
GLDBDATA R_WSTOR2 "Infiltration" "Proportional Loss" 1 10.000 \r
GLDBDATA R_WSTOR1 "Infiltration" "Proportional Loss" 1 3.000 \r
GLDBDATA R_DECAY "Infiltration" "Proportional Loss" 1 1 \r
GLDBDATA IC_INIT "Infiltration" "Proportional Loss" 1 0.0 \r
GLDBDATA IC_ABS "Infiltration" "Proportional Loss" 1 0.0 \r
GLDBDATA R_MAXINF "Infiltration" "Proportional Loss" 1 0.0 \r
GLDBDATA R_INFILM "Infiltration" "Proportional Loss" 1 "2" \r
GLDBDATA R_PROUGH "Infiltration" "Proportional Loss" 1 0.030 \r
GLDBDATA R_WLMIN "Infiltration" "Proportional Loss" 1 0.200 \r
GLDBDATA IC_PROP "Infiltration" "Proportional Loss" 1 0.200 \r
GLDBDATA R_WLMAX "Infiltration" "Proportional Loss" 1 0.200 \r
GLDBDATA R_IROUGH "Infiltration" "Proportional Loss" 1 0.014 \r
GLDBDATA R_PCTZER "Infiltration" "Proportional Loss" 1 25.000 \r
GLDBDATA IC_TYPE "Infiltration" "Proportional Loss" 1 "2" \r
GLDBITEM "Infiltration" "Initial+Continuing" \r
GLDBDATA R_WSTOR2 "Infiltration" "Initial+Continuing" 1 10.000 \r
GLDBDATA R_WSTOR1 "Infiltration" "Initial+Continuing" 1 3.000 \r
GLDBDATA R_DECAY "Infiltration" "Initial+Continuing" 1 2 \r
GLDBDATA IC_INIT "Infiltration" "Initial+Continuing" 1 2.000 \r
GLDBDATA IC_ABS "Infiltration" "Initial+Continuing" 1 0.250 \r
GLDBDATA R_MAXINF "Infiltration" "Initial+Continuing" 1 0.0 \r
GLDBDATA R_INFILM "Infiltration" "Initial+Continuing" 1 "2" \r
GLDBDATA R_PROUGH "Infiltration" "Initial+Continuing" 1 0.030 \r
GLDBDATA R_WLMIN "Infiltration" "Initial+Continuing" 1 8.000 \r
GLDBDATA IC_PROP "Infiltration" "Initial+Continuing" 1 0.0 \r
GLDBDATA R_WLMAX "Infiltration" "Initial+Continuing" 1 50.000 \r
GLDBDATA R_IROUGH "Infiltration" "Initial+Continuing" 1 0.014 \r
GLDBDATA R_PCTZER "Infiltration" "Initial+Continuing" 1 25.000 \r
GLDBDATA IC_TYPE "Infiltration" "Initial+Continuing" 1 "1" \r
GLDBITEM "Infiltration" "Initial+Proportional" \r
GLDBDATA R_WSTOR2 "Infiltration" "Initial+Proportional" 1 10.000 \r
GLDBDATA R_WSTOR1 "Infiltration" "Initial+Proportional" 1 3.000 \r
GLDBDATA R_DECAY "Infiltration" "Initial+Proportional" 1 3 \r
GLDBDATA IC_INIT "Infiltration" "Initial+Proportional" 1 2.000 \r
GLDBDATA IC_ABS "Infiltration" "Initial+Proportional" 1 0.0 \r
GLDBDATA R_MAXINF "Infiltration" "Initial+Proportional" 1 0.0 \r
GLDBDATA R_INFILM "Infiltration" "Initial+Proportional" 1 "2" \r
GLDBDATA R_PROUGH "Infiltration" "Initial+Proportional" 1 0.030 \r
GLDBDATA R_WLMIN "Infiltration" "Initial+Proportional" 1 0.200 \r
GLDBDATA IC_PROP "Infiltration" "Initial+Proportional" 1 0.200 \r
GLDBDATA R_WLMAX "Infiltration" "Initial+Proportional" 1 50.000 \r
GLDBDATA R_IROUGH "Infiltration" "Initial+Proportional" 1 0.014 \r
GLDBDATA R_PCTZER "Infiltration" "Initial+Proportional" 1 25.000 \r
GLDBDATA IC_TYPE "Infiltration" "Initial+Proportional" 1 "2" \r
`;function ef(S,b){return S.toFixed(b>2?1:2)}function uf({rows:S,plotLabel:b,displayUnit:P}){const s=Z.useRef(null);return Z.useEffect(()=>{const g=s.current;if(!g)return;const m=g.getContext("2d");if(!m)return;const ul=()=>{var El,Fl;const F=window.devicePixelRatio||1,d=g.getBoundingClientRect();if(d.width===0||d.height===0)return;g.width=Math.max(620,d.width*F),g.height=Math.max(260,d.height*F),m.setTransform(F,0,0,F,0,0);const J=d.width,X=d.height;m.clearRect(0,0,J,X);const p=S.map(H=>H.plotValue).filter(H=>H!==null);if(p.length===0){m.fillStyle="#8390a1",m.font="12px system-ui, sans-serif",m.fillText("No plottable values",48,X/2);return}const Y={left:48,right:14,top:18,bottom:36},rl=J-Y.left-Y.right,j=X-Y.top-Y.bottom,z=Math.max(...p,.01),nl=0;m.strokeStyle="#d7dee8",m.lineWidth=1,m.fillStyle="#8390a1",m.font="11px system-ui, sans-serif";for(let H=0;H<=4;H+=1){const Gl=Y.top+j*H/4;m.beginPath(),m.moveTo(Y.left,Gl),m.lineTo(Y.left+rl,Gl),m.stroke();const gl=z-(z-nl)*H/4;m.fillText(ef(gl,z),8,Gl+4)}m.strokeStyle="#172033",m.lineWidth=1.2,m.beginPath(),m.moveTo(Y.left,Y.top),m.lineTo(Y.left,Y.top+j),m.lineTo(Y.left+rl,Y.top+j),m.stroke(),m.strokeStyle="#178a52",m.lineWidth=2.6,m.beginPath(),p.forEach((H,Gl)=>{const gl=Y.left+rl*Gl/Math.max(p.length-1,1),vn=Y.top+j-(H-nl)/(z-nl)*j;Gl===0?m.moveTo(gl,vn):m.lineTo(gl,vn)}),m.stroke();const bl=m.createLinearGradient(0,Y.top,0,Y.top+j);bl.addColorStop(0,"rgba(23,138,82,0.20)"),bl.addColorStop(1,"rgba(255,255,255,0)"),m.lineTo(Y.left+rl,Y.top+j),m.lineTo(Y.left,Y.top+j),m.closePath(),m.fillStyle=bl,m.fill();const k=((El=S[0])==null?void 0:El.elapsedMinutes)??0,Kl=((Fl=S[S.length-1])==null?void 0:Fl.elapsedMinutes)??0;m.fillStyle="#5d6979",m.fillText(`${k} min`,Y.left,X-12),m.fillText(`${Kl} min`,Y.left+rl-48,X-12),P&&m.fillText(P,Y.left+4,Y.top-4)};ul();const il=new ResizeObserver(ul);return il.observe(g),()=>il.disconnect()},[S,P]),L.jsxs("div",{className:"preview-panel",children:[L.jsxs("div",{className:"preview-panel-head",children:[L.jsx("h4",{children:"Rainfall graph"}),L.jsx("span",{children:b})]}),L.jsx("div",{className:"chart-wrap","data-testid":"rainfall-chart",children:L.jsx("canvas",{ref:s})})]})}function Af(S){return S===null?"—":S.toFixed(S>=1?3:5)}function Tf({rows:S,displayUnit:b}){const P=b?` (${b})`:"";return L.jsxs("div",{className:"preview-panel",children:[L.jsxs("div",{className:"preview-panel-head",children:[L.jsx("h4",{children:"Rainfall inputs"}),L.jsxs("span",{children:[S.length," rows"]})]}),L.jsx("div",{className:"table-wrap","data-testid":"time-series-table",children:L.jsxs("table",{children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Elapsed min"}),L.jsxs("th",{children:["Input value",P]})]})}),L.jsx("tbody",{children:S.map((s,g)=>L.jsxs("tr",{children:[L.jsx("td",{children:s.elapsedMinutes!==null?s.elapsedMinutes.toFixed(0):"—"}),L.jsx("td",{children:Af(s.inputValue)})]},`${s.elapsedMinutes}-${g}`))})]})})]})}function Df(S){switch(S){case"supported":return"Supported";case"blocked":return"Blocked";case"needs_input":return"Needs input"}}function rf({profile:S,preview:b,previewLoading:P}){return S?L.jsxs("div",{className:"pane",children:[L.jsxs("div",{className:"pane-header",children:[L.jsxs("div",{children:[L.jsx("h3",{children:"Diagnostics"}),L.jsx("small",{children:S.rainfallId})]}),L.jsx("span",{className:`status-badge ${S.status}`,"data-testid":"diagnostics-status",children:Df(S.status)})]}),L.jsxs("div",{className:"panel-body","data-testid":"diagnostics-panel",children:[L.jsxs("div",{className:"summary-grid",children:[L.jsxs("div",{className:"summary-cell",children:[L.jsx("span",{children:"Value type"}),L.jsx("b",{children:S.sourceValueType.replaceAll("_"," ")})]}),L.jsxs("div",{className:"summary-cell",children:[L.jsx("span",{children:"Interval"}),L.jsx("b",{children:S.sourceIntervalMinutes!==null?`${S.sourceIntervalMinutes} min`:"Variable / unknown"})]}),L.jsxs("div",{className:"summary-cell",children:[L.jsx("span",{children:"Ordinates"}),L.jsx("b",{children:S.ordinateCount??"—"})]}),L.jsxs("div",{className:"summary-cell",children:[L.jsx("span",{children:"Units"}),L.jsx("b",{"data-testid":"diagnostics-units",children:S.displayUnit??"Unknown"})]}),L.jsxs("div",{className:"summary-cell",children:[L.jsx("span",{children:"Eligible"}),L.jsx("b",{children:S.eligible?"Yes":"No"})]})]}),S.warnings.length>0||S.errors.length>0?L.jsxs("div",{className:"diag-list",children:[S.warnings.map(s=>L.jsx("div",{className:"diag-item warning",children:s},`w-${s}`)),S.errors.map(s=>L.jsx("div",{className:"diag-item error",children:s},`e-${s}`))]}):null,P?L.jsx("div",{className:"empty-state",children:"Loading time series…"}):b?L.jsxs("div",{className:"preview-grid",children:[L.jsx(uf,{rows:b.rows,plotLabel:b.plotLabel,displayUnit:b.displayUnit}),L.jsx(Tf,{rows:b.rows,displayUnit:b.displayUnit})]}):L.jsx("div",{className:"empty-state",children:"Time series preview unavailable."})]})]}):L.jsxs("div",{className:"pane",children:[L.jsx("div",{className:"pane-header",children:L.jsxs("div",{children:[L.jsx("h3",{children:"Diagnostics"}),L.jsx("small",{children:"Upload an XPX file and select a profile"})]})}),L.jsx("div",{className:"panel-body",children:L.jsx("div",{className:"empty-state",children:"No profile selected."})})]})}function cf(S){const b=S.replace(/[^a-zA-Z0-9._-]+/g,"_").replace(/^-+|-+$/g,"");return b.length>0?b:"rainfall_export"}function sf(S,b){const P=new Blob([S],{type:"text/csv;charset=utf-8"}),s=URL.createObjectURL(P),g=document.createElement("a");g.href=s,g.download=`${cf(b)}.csv`,g.click(),URL.revokeObjectURL(s)}function ff(S){switch(S){case"idle":return"Idle";case"running":return"Running";case"done":return"Done";case"error":return"Error"}}function Lf({steps:S,ingestProgress:b,ingestSummary:P}){return L.jsxs("section",{className:"card side-section",children:[L.jsx("div",{className:"section-title",children:"Processing pipeline"}),b?L.jsxs("div",{className:"ingest-progress","data-testid":"ingest-progress",children:[L.jsxs("div",{className:"progress-label",children:[L.jsx("span",{children:b.phase}),L.jsxs("span",{children:[b.percent,"%"]})]}),L.jsx("div",{className:"progress-track","aria-hidden":"true",children:L.jsx("div",{className:"progress-fill",style:{width:`${b.percent}%`}})})]}):null,P?L.jsx("p",{className:"ingest-summary","data-testid":"ingest-summary",children:P}):null,L.jsx("div",{className:"status-list",children:S.map(s=>L.jsxs("div",{className:"status-row","data-testid":`pipeline-step-${s.id}`,children:[L.jsx("span",{children:s.label}),L.jsx("b",{className:s.state,children:ff(s.state)})]},s.id))})]})}const of=[{id:"all",label:"All"},{id:"supported",label:"Supported"},{id:"blocked",label:"Blocked"},{id:"needs_input",label:"Needs input"}];function _f(S){switch(S){case"supported":return"Supported";case"blocked":return"Blocked";case"needs_input":return"Needs input"}}function Bf({profiles:S,selectedId:b,checkedIds:P,filter:s,searchTerm:g,onFilterChange:m,onSearchChange:ul,onSelect:il,onToggleCheck:F,onSelectReferenced:d,onSelectAllSupported:J}){const X=S.filter(p=>{const Y=p.rainfallId.toLowerCase().includes(g.toLowerCase())||p.name.toLowerCase().includes(g.toLowerCase()),rl=s==="all"||p.status===s;return Y&&rl});return L.jsxs("div",{className:"pane",children:[L.jsx("div",{className:"pane-header",children:L.jsxs("div",{children:[L.jsx("h3",{children:"Rainfall profiles"}),L.jsx("small",{children:"Select records to inspect diagnostics and export"})]})}),L.jsxs("div",{className:"toolbar",children:[L.jsxs("div",{className:"search",children:[L.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",children:L.jsx("path",{d:"m21 21-4.4-4.4m2.4-5.1a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),L.jsx("input",{placeholder:"Search profile name",value:g,onChange:p=>ul(p.target.value)})]}),L.jsx("div",{className:"filter-row",role:"group","aria-label":"Profile filters",children:of.map(p=>L.jsx("button",{type:"button",className:`chip${s===p.id?" active":""}`,onClick:()=>m(p.id),children:p.label},p.id))}),L.jsxs("div",{className:"selection-actions",children:[L.jsx("button",{type:"button",className:"chip",onClick:d,children:"Select referenced"}),L.jsx("button",{type:"button",className:"chip",onClick:J,children:"Select all supported"})]})]}),L.jsx("div",{className:"profile-list","data-testid":"profile-list",children:X.length===0?L.jsx("div",{className:"empty-state",children:"No profiles match this filter."}):X.map(p=>{const Y=p.status==="supported";return L.jsxs("div",{className:`profile-item${b===p.rainfallId?" active":""}`,"data-testid":`profile-item-${p.rainfallId}`,children:[L.jsx("label",{className:"profile-check",children:L.jsx("input",{type:"checkbox","data-testid":`profile-check-${p.rainfallId}`,checked:P.has(p.rainfallId),disabled:!Y,onChange:rl=>F(p.rainfallId,rl.target.checked)})}),L.jsxs("button",{type:"button",className:"profile-select",onClick:()=>il(p.rainfallId),children:[L.jsxs("div",{className:"profile-name",children:[L.jsx("span",{className:`dot ${p.status}`}),L.jsx("strong",{children:p.rainfallId}),p.referencedByModel?L.jsx("span",{className:"reference-badge",children:"Referenced"}):null]}),L.jsx("span",{className:`status-badge ${p.status}`,children:_f(p.status)}),L.jsxs("div",{className:"profile-meta",children:[p.ordinateCount??0," ordinates · ",p.sourceValueType.replaceAll("_"," "),p.sourceIntervalMinutes!==null?` · ${p.sourceIntervalMinutes} min`:""]})]})]},p.rainfallId)})})]})}function df({fileLabel:S,workerVersion:b}){return L.jsxs("header",{className:"topbar",children:[L.jsxs("div",{className:"brand",children:[L.jsx("div",{className:"brand-mark",children:"XP"}),L.jsxs("div",{className:"brand-title",children:[L.jsx("strong",{children:"XPX Rainfall Converter"}),L.jsx("span",{children:"XPX → ICM RED CSV · static GitHub Pages app"})]})]}),L.jsxs("div",{className:"top-actions",children:[L.jsx("span",{className:"pill","data-testid":"file-status",children:S}),b?L.jsxs("span",{className:"pill","data-testid":"worker-status",children:["DuckDB ",b]}):null]})]})}function Rf({disabled:S,fullAudit:b,onFullAuditChange:P,onFileSelected:s,onLoadSample:g}){const m=Z.useRef(null),[ul,il]=Z.useState(!1);function F(d){!d||S||s(d)}return L.jsxs("section",{className:"card intro-card",children:[L.jsx("h1",{children:"Convert rainfall from XPX"}),L.jsx("p",{children:"Drop an XPX export to stage rainfall records in DuckDB, review conversion diagnostics, and download ICM RED event CSV for supported profiles."}),L.jsxs("label",{className:`dropzone${ul?" dragover":""}${S?" disabled":""}`,onDragEnter:d=>{d.preventDefault(),S||il(!0)},onDragOver:d=>{d.preventDefault()},onDragLeave:d=>{d.preventDefault(),il(!1)},onDrop:d=>{d.preventDefault(),il(!1),F(d.dataTransfer.files[0])},children:[L.jsx("input",{ref:m,className:"hidden-file","data-testid":"file-input",type:"file",accept:".xpx,.txt",disabled:S,onChange:d=>{var J;return F((J=d.target.files)==null?void 0:J[0])}}),L.jsxs("div",{children:[L.jsx("div",{className:"drop-icon","aria-hidden":"true",children:L.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[L.jsx("path",{d:"M12 16V4m0 0 4.5 4.5M12 4 7.5 8.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),L.jsx("path",{d:"M4 16.5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),L.jsx("strong",{children:"Drag your XPX file here"}),L.jsx("span",{children:"or click to select a local file"})]})]}),L.jsx("div",{className:"sample-load",children:L.jsx("button",{type:"button",className:"btn","data-testid":"load-sample-xpx",disabled:S,onClick:g,children:"Load Master US XPX"})}),L.jsxs("label",{className:"audit-toggle",children:[L.jsx("input",{type:"checkbox","data-testid":"full-audit-toggle",checked:b,disabled:S,onChange:d=>P(d.target.checked)}),"Full audit mode (slow — stages every token and DATA row)"]})]})}function Sf(S){return new Worker("/assets/db-worker-D_uWQ7Ye.js",{type:"module",name:S==null?void 0:S.name})}function Ef(){const S=Z.useRef(null),b=Z.useRef(null),P=Z.useRef(null),[s,g]=Z.useState(null),[m,ul]=Z.useState(!1),[il,F]=Z.useState(null),d=Z.useCallback(j=>new Promise((z,nl)=>{const bl=S.current;if(!bl){nl(new Error("Worker not initialized"));return}b.current={resolve:z,reject:nl},bl.postMessage(j)}),[]);Z.useEffect(()=>{const j=new Sf;return S.current=j,j.onmessage=z=>{var k;const nl=z.data;if(nl.type==="pong"){g(nl.version),ul(!0);return}if(nl.type==="ingest_progress"){(k=P.current)==null||k.call(P,nl.progress);return}const bl=b.current;if(bl){if(b.current=null,P.current=null,nl.type==="error"){bl.reject(new Error(nl.message));return}bl.resolve(nl)}},j.onerror=()=>{var z;F("Worker failed to load"),(z=b.current)==null||z.reject(new Error("Worker failed to load")),b.current=null,P.current=null},j.postMessage({type:"ping"}),()=>{j.terminate(),S.current=null,b.current=null,P.current=null}},[]);const J=Z.useCallback(async(j,z)=>{P.current=(z==null?void 0:z.onProgress)??null;const nl=await d({type:"start_ingest",file:j,mode:(z==null?void 0:z.mode)??"rainfall_fast"});if(nl.type!=="ingest_ready")throw new Error("Unexpected ingest response");return nl.summary},[d]),X=Z.useCallback(async(j,z)=>{P.current=(z==null?void 0:z.onProgress)??null;const nl=await d({type:"ingest_xpx",text:j,mode:(z==null?void 0:z.mode)??"rainfall_fast"});if(nl.type!=="ingest_ready")throw new Error("Unexpected ingest response");return nl.summary},[d]),p=Z.useCallback(async()=>{const j=await d({type:"list_profiles"});if(j.type!=="profiles_ready")throw new Error("Unexpected list response");return j.profiles},[d]),Y=Z.useCallback(async j=>{const z=await d({type:"get_profile_preview",rainfallId:j});if(z.type!=="profile_preview_ready")throw new Error("Unexpected preview response");return z.preview},[d]),rl=Z.useCallback(async j=>{const z=await d({type:"export_csv",rainfallIds:j});if(z.type==="export_blocked")throw z.errors[0]==="interval_mismatch"?new Error("Selected profiles have different time intervals. Uncheck profiles with different intervals to export together."):new Error(z.errors.join(", "));if(z.type!=="export_ready")throw new Error("Unexpected export response");return{csv:z.csv,profileName:z.profileName,warnings:z.warnings}},[d]);return{workerVersion:s,ready:m,error:il,ingestXpxFile:J,ingestXpxText:X,listProfiles:p,getProfilePreview:Y,exportCsv:rl}}const Q0=[{id:"tokenize",label:"1. Tokenize XPX",state:"idle"},{id:"stage",label:"2. Stage in DuckDB",state:"idle"},{id:"views",label:"3. SQL rainfall views",state:"idle"},{id:"export",label:"4. Ready for export",state:"idle"}];function C1(S,b){return S.map(P=>({...P,state:b}))}function Gf(S){return new Set(S.filter(b=>b.status==="supported"&&b.referencedByModel).map(b=>b.rainfallId))}function hf(){const{workerVersion:S,ready:b,error:P,ingestXpxFile:s,listProfiles:g,getProfilePreview:m,exportCsv:ul}=Ef(),[il,F]=Z.useState("connecting"),[d,J]=Z.useState(null),[X,p]=Z.useState(!1),[Y,rl]=Z.useState(null),[j,z]=Z.useState(null),[nl,bl]=Z.useState(Q0),[k,Kl]=Z.useState([]),[El,Fl]=Z.useState(null),[H,Gl]=Z.useState(new Set),[gl,vn]=Z.useState("all"),[kl,wl]=Z.useState(""),[Vn,nn]=Z.useState(null),[an,E]=Z.useState(!1),[N,U]=Z.useState(null),[sl,fl]=Z.useState(!1),r=Z.useCallback(W=>{var Il;vn(W);const Ll=k.filter(hl=>{const On=hl.rainfallId.toLowerCase().includes(kl.toLowerCase())||hl.name.toLowerCase().includes(kl.toLowerCase()),xn=W==="all"||hl.status===W;return On&&xn});El&&!Ll.some(hl=>hl.rainfallId===El)&&Fl(((Il=Ll[0])==null?void 0:Il.rainfallId)??null)},[k,kl,El]),y=Z.useCallback(W=>{var Il;wl(W);const Ll=k.filter(hl=>{const On=hl.rainfallId.toLowerCase().includes(W.toLowerCase())||hl.name.toLowerCase().includes(W.toLowerCase()),xn=gl==="all"||hl.status===gl;return On&&xn});El&&!Ll.some(hl=>hl.rainfallId===El)&&Fl(((Il=Ll[0])==null?void 0:Il.rainfallId)??null)},[k,gl,El]),C=Z.useMemo(()=>k.find(W=>W.rainfallId===El)??null,[k,El]),O=k.filter(W=>W.status==="supported").length,x=k.filter(W=>W.status==="supported"&&H.has(W.rainfallId)).length,Q=Z.useCallback((W,Ll)=>{Gl(Il=>{const hl=new Set(Il);return Ll?hl.add(W):hl.delete(W),hl})},[]),Al=Z.useCallback(()=>{Gl(new Set(k.filter(W=>W.status==="supported"&&W.referencedByModel).map(W=>W.rainfallId)))},[k]),xl=Z.useCallback(()=>{Gl(new Set(k.filter(W=>W.status==="supported").map(W=>W.rainfallId)))},[k]),Nl=Z.useCallback(async(W,Ll)=>{rl(null),z(null),bl(C1(Q0,"running"));const Il=await s(W,{mode:Ll,onProgress:In=>{const $l=In.totalBytes>0?Math.min(100,Math.round(In.bytesRead/In.totalBytes*100)):0,k0=In.phase==="building_views"?"Building rainfall views…":"Parsing XPX…";rl({bytesRead:In.bytesRead,totalBytes:In.totalBytes,percent:$l,phase:k0})}});bl(C1(Q0,"done")),rl(null),z(`${Il.commandsParsed.toLocaleString()} lines parsed · ${Il.rowsInserted.toLocaleString()} rows staged · ${(Il.durationMs/1e3).toFixed(1)}s (${Il.mode})`);const hl=await g();Kl(hl);const On=Gf(hl);Gl(On);const xn=hl.find(In=>In.status==="supported")??hl[0]??null;Fl((xn==null?void 0:xn.rainfallId)??null),F("ready")},[s,g]),zn=Z.useCallback(async W=>{if(b){F("ingesting"),nn(null),J(W.name);try{await Nl(W,X?"full_audit":"rainfall_fast")}catch(Ll){const Il=Ll instanceof Error?Ll.message:String(Ll);nn(Il),rl(null),bl(Q0.map((hl,On)=>({...hl,state:On===0?"error":"idle"}))),F("error")}}},[X,b,Nl]),Qa=Z.useCallback(async()=>{const W=k.filter(Ll=>Ll.status==="supported"&&H.has(Ll.rainfallId)).map(Ll=>Ll.rainfallId);if(W.length!==0){E(!0),nn(null);try{const Ll=await ul(W);sf(Ll.csv,Ll.profileName)}catch(Ll){const Il=Ll instanceof Error?Ll.message:String(Ll);nn(Il)}finally{E(!1)}}},[H,ul,k]),Mt=Z.useCallback(()=>{const W=new File([tf],"Master_us.xpx",{type:"text/plain"});zn(W)},[zn]),pe=d??"No file loaded",Yn=x>0&&!an&&il==="ready",ka=Vn??P,Ut=x>1?`Download ICM CSV (${x})`:"Download ICM CSV";return Z.useEffect(()=>{b&&il==="connecting"&&F("idle")},[b,il]),Z.useEffect(()=>{if(!El||il!=="ready"){U(null);return}let W=!1;return fl(!0),m(El).then(Ll=>{W||U(Ll)}).catch(()=>{W||U(null)}).finally(()=>{W||fl(!1)}),()=>{W=!0}},[El,il,m]),L.jsxs("div",{className:"app",children:[L.jsx(df,{fileLabel:pe,workerVersion:S}),ka?L.jsx("div",{className:"error-banner","data-testid":"error-banner",children:ka}):null,L.jsxs("main",{className:"shell",children:[L.jsxs("aside",{className:"sidebar",children:[L.jsx(Rf,{disabled:!b||il==="ingesting",fullAudit:X,onFullAuditChange:p,onFileSelected:zn,onLoadSample:Mt}),L.jsx(Lf,{steps:nl,ingestProgress:Y,ingestSummary:j})]}),L.jsxs("section",{className:"main",children:[L.jsxs("section",{className:"card hero",children:[L.jsxs("div",{children:[L.jsx("h2",{children:"ICM rainfall CSV conversion"}),L.jsx("p",{children:"Upload an XPX file, check supported rainfall profiles (referenced profiles are pre-selected), review diagnostics, and download one ICM RED event CSV when intervals match."})]}),L.jsx("div",{className:"hero-actions",children:L.jsx("button",{type:"button",className:"btn primary","data-testid":"download-csv",disabled:!Yn,onClick:()=>void Qa(),children:an?"Exporting…":Ut})})]}),L.jsxs("section",{className:"metrics",children:[L.jsxs("div",{className:"card metric",children:[L.jsxs("div",{children:[L.jsx("span",{children:"Profiles loaded"}),L.jsx("b",{"data-testid":"metric-records",children:k.length})]}),L.jsx("div",{className:"badge-icon",children:"R"})]}),L.jsxs("div",{className:"card metric",children:[L.jsxs("div",{children:[L.jsx("span",{children:"Supported profiles"}),L.jsx("b",{"data-testid":"metric-supported",children:O})]}),L.jsx("div",{className:"badge-icon",children:"✓"})]}),L.jsxs("div",{className:"card metric",children:[L.jsxs("div",{children:[L.jsx("span",{children:"Checked for export"}),L.jsx("b",{"data-testid":"metric-checked",children:x})]}),L.jsx("div",{className:"badge-icon",children:"↓"})]})]}),L.jsxs("section",{className:"card work-area",children:[L.jsx(Bf,{profiles:k,selectedId:El,checkedIds:H,filter:gl,searchTerm:kl,onFilterChange:r,onSearchChange:y,onSelect:Fl,onToggleCheck:Q,onSelectReferenced:Al,onSelectAllSupported:xl}),L.jsx(rf,{profile:C,preview:N,previewLoading:sl})]})]})]})]})}function yf(){return L.jsx(hf,{})}af.createRoot(document.getElementById("root")).render(L.jsx(Z.StrictMode,{children:L.jsx(yf,{})}));
