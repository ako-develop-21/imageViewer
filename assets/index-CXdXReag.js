(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function po(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ce={},Nn=[],Ct=()=>{},hf=()=>!1,Vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_o=t=>t.startsWith("onUpdate:"),Ee=Object.assign,go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ff=Object.prototype.hasOwnProperty,ne=(t,e)=>ff.call(t,e),$=Array.isArray,as=t=>Hs(t)==="[object Map]",mo=t=>Hs(t)==="[object Set]",vl=t=>Hs(t)==="[object Date]",W=t=>typeof t=="function",Ce=t=>typeof t=="string",Yt=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",fc=t=>(me(t)||W(t))&&W(t.then)&&W(t.catch),df=Object.prototype.toString,Hs=t=>df.call(t),pf=t=>Hs(t).slice(8,-1),_f=t=>Hs(t)==="[object Object]",yo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cs=po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$i=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gf=/-(\w)/g,st=$i(t=>t.replace(gf,(e,n)=>n?n.toUpperCase():"")),mf=/\B([A-Z])/g,gn=$i(t=>t.replace(mf,"-$1").toLowerCase()),Hi=$i(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=$i(t=>t?`on${Hi(t)}`:""),Gt=(t,e)=>!Object.is(t,e),ri=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},dc=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Or=t=>{const e=parseFloat(t);return isNaN(e)?t:e},yf=t=>{const e=Ce(t)?Number(t):NaN;return isNaN(e)?t:e};let Cl;const Ui=()=>Cl||(Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kn(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?Ef(s):Kn(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Ce(t)||me(t))return t}const vf=/;(?![^(]*\))/g,Cf=/:([^]+)/,bf=/\/\*[^]*?\*\//g;function Ef(t){const e={};return t.replace(bf,"").split(vf).forEach(n=>{if(n){const s=n.split(Cf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Us(t){let e="";if(Ce(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=Us(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const wf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sf=po(wf);function pc(t){return!!t||t===""}function If(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wi(t[s],e[s]);return n}function Wi(t,e){if(t===e)return!0;let n=vl(t),s=vl(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Yt(t),s=Yt(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?If(t,e):!1;if(n=me(t),s=me(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Wi(t[o],e[o]))return!1}}return String(t)===String(e)}function _c(t,e){return t.findIndex(n=>Wi(n,e))}/**
* @vue/reactivity v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class Tf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=He,!e&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=He;try{return He=this,e()}finally{He=n}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){this._on>0&&--this._on===0&&(He=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Rf(){return He}let de;const cr=new WeakSet;class gc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&He.active&&He.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cr.has(this)&&(cr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bl(this),vc(this);const e=de,n=lt;de=this,lt=!0;try{return this.fn()}finally{Cc(this),de=e,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)bo(e);this.deps=this.depsTail=void 0,bl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Dr(this)&&this.run()}get dirty(){return Dr(this)}}let mc=0,us,hs;function yc(t,e=!1){if(t.flags|=8,e){t.next=hs,hs=t;return}t.next=us,us=t}function vo(){mc++}function Co(){if(--mc>0)return;if(hs){let e=hs;for(hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;us;){let e=us;for(us=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function vc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Cc(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),bo(s),xf(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Dr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function bc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ss)||(t.globalVersion=Ss,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Dr(t))))return;t.flags|=2;const e=t.dep,n=de,s=lt;de=t,lt=!0;try{vc(t);const i=t.fn(t._value);(e.version===0||Gt(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{de=n,lt=s,Cc(t),t.flags&=-3}}function bo(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)bo(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xf(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let lt=!0;const Ec=[];function Nt(){Ec.push(lt),lt=!1}function Pt(){const t=Ec.pop();lt=t===void 0?!0:t}function bl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let Ss=0;class Af{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Eo{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!de||!lt||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new Af(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,wc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(e){this.version++,Ss++,this.notify(e)}notify(e){vo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Co()}}}function wc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)wc(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const kr=new WeakMap,un=Symbol(""),Mr=Symbol(""),Is=Symbol("");function De(t,e,n){if(lt&&de){let s=kr.get(t);s||kr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Eo),i.map=s,i.key=n),i.track()}}function It(t,e,n,s,i,r){const o=kr.get(t);if(!o){Ss++;return}const l=a=>{a&&a.trigger()};if(vo(),e==="clear")o.forEach(l);else{const a=$(t),c=a&&yo(n);if(a&&n==="length"){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f===Is||!Yt(f)&&f>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),c&&l(o.get(Is)),e){case"add":a?c&&l(o.get("length")):(l(o.get(un)),as(t)&&l(o.get(Mr)));break;case"delete":a||(l(o.get(un)),as(t)&&l(o.get(Mr)));break;case"set":as(t)&&l(o.get(un));break}}Co()}function En(t){const e=X(t);return e===t?e:(De(e,"iterate",Is),nt(t)?e:e.map(xe))}function ji(t){return De(t=X(t),"iterate",Is),t}const Nf={__proto__:null,[Symbol.iterator](){return ur(this,Symbol.iterator,xe)},concat(...t){return En(this).concat(...t.map(e=>$(e)?En(e):e))},entries(){return ur(this,"entries",t=>(t[1]=xe(t[1]),t))},every(t,e){return Et(this,"every",t,e,void 0,arguments)},filter(t,e){return Et(this,"filter",t,e,n=>n.map(xe),arguments)},find(t,e){return Et(this,"find",t,e,xe,arguments)},findIndex(t,e){return Et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Et(this,"findLast",t,e,xe,arguments)},findLastIndex(t,e){return Et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Et(this,"forEach",t,e,void 0,arguments)},includes(...t){return hr(this,"includes",t)},indexOf(...t){return hr(this,"indexOf",t)},join(t){return En(this).join(t)},lastIndexOf(...t){return hr(this,"lastIndexOf",t)},map(t,e){return Et(this,"map",t,e,void 0,arguments)},pop(){return Zn(this,"pop")},push(...t){return Zn(this,"push",t)},reduce(t,...e){return El(this,"reduce",t,e)},reduceRight(t,...e){return El(this,"reduceRight",t,e)},shift(){return Zn(this,"shift")},some(t,e){return Et(this,"some",t,e,void 0,arguments)},splice(...t){return Zn(this,"splice",t)},toReversed(){return En(this).toReversed()},toSorted(t){return En(this).toSorted(t)},toSpliced(...t){return En(this).toSpliced(...t)},unshift(...t){return Zn(this,"unshift",t)},values(){return ur(this,"values",xe)}};function ur(t,e,n){const s=ji(t),i=s[e]();return s!==t&&!nt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Pf=Array.prototype;function Et(t,e,n,s,i,r){const o=ji(t),l=o!==t&&!nt(t),a=o[e];if(a!==Pf[e]){const h=a.apply(t,r);return l?xe(h):h}let c=n;o!==t&&(l?c=function(h,f){return n.call(this,xe(h),f,t)}:n.length>2&&(c=function(h,f){return n.call(this,h,f,t)}));const u=a.call(o,c,s);return l&&i?i(u):u}function El(t,e,n,s){const i=ji(t);let r=n;return i!==t&&(nt(t)?n.length>3&&(r=function(o,l,a){return n.call(this,o,l,a,t)}):r=function(o,l,a){return n.call(this,o,xe(l),a,t)}),i[e](r,...s)}function hr(t,e,n){const s=X(t);De(s,"iterate",Is);const i=s[e](...n);return(i===-1||i===!1)&&Io(n[0])?(n[0]=X(n[0]),s[e](...n)):i}function Zn(t,e,n=[]){Nt(),vo();const s=X(t)[e].apply(t,n);return Co(),Pt(),s}const Of=po("__proto__,__v_isRef,__isVue"),Sc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yt));function Df(t){Yt(t)||(t=String(t));const e=X(this);return De(e,"has",t),e.hasOwnProperty(t)}class Ic{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Wf:Ac:r?xc:Rc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=$(e);if(!i){let a;if(o&&(a=Nf[n]))return a;if(n==="hasOwnProperty")return Df}const l=Reflect.get(e,n,Me(e)?e:s);return(Yt(n)?Sc.has(n):Of(n))||(i||De(e,"get",n),r)?l:Me(l)?o&&yo(n)?l:l.value:me(l)?i?Pc(l):Gi(l):l}}class Tc extends Ic{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=Qt(r);if(!nt(s)&&!Qt(s)&&(r=X(r),s=X(s)),!$(e)&&Me(r)&&!Me(s))return a?!1:(r.value=s,!0)}const o=$(e)&&yo(n)?Number(n)<e.length:ne(e,n),l=Reflect.set(e,n,s,Me(e)?e:i);return e===X(i)&&(o?Gt(s,r)&&It(e,"set",n,s):It(e,"add",n,s)),l}deleteProperty(e,n){const s=ne(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&It(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Yt(n)||!Sc.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",$(e)?"length":un),Reflect.ownKeys(e)}}class kf extends Ic{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mf=new Tc,Lf=new kf,Ff=new Tc(!0);const Lr=t=>t,Zs=t=>Reflect.getPrototypeOf(t);function Bf(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=as(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Lr:e?ui:xe;return!e&&De(r,"iterate",a?Mr:un),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ei(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vf(t,e){const n={get(i){const r=this.__v_raw,o=X(r),l=X(i);t||(Gt(i,l)&&De(o,"get",i),De(o,"get",l));const{has:a}=Zs(o),c=e?Lr:t?ui:xe;if(a.call(o,i))return c(r.get(i));if(a.call(o,l))return c(r.get(l));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&De(X(i),"iterate",un),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=X(r),l=X(i);return t||(Gt(i,l)&&De(o,"has",i),De(o,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const o=this,l=o.__v_raw,a=X(l),c=e?Lr:t?ui:xe;return!t&&De(a,"iterate",un),l.forEach((u,h)=>i.call(r,c(u),c(h),o))}};return Ee(n,t?{add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear")}:{add(i){!e&&!nt(i)&&!Qt(i)&&(i=X(i));const r=X(this);return Zs(r).has.call(r,i)||(r.add(i),It(r,"add",i,i)),this},set(i,r){!e&&!nt(r)&&!Qt(r)&&(r=X(r));const o=X(this),{has:l,get:a}=Zs(o);let c=l.call(o,i);c||(i=X(i),c=l.call(o,i));const u=a.call(o,i);return o.set(i,r),c?Gt(r,u)&&It(o,"set",i,r):It(o,"add",i,r),this},delete(i){const r=X(this),{has:o,get:l}=Zs(r);let a=o.call(r,i);a||(i=X(i),a=o.call(r,i)),l&&l.call(r,i);const c=r.delete(i);return a&&It(r,"delete",i,void 0),c},clear(){const i=X(this),r=i.size!==0,o=i.clear();return r&&It(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Bf(i,t,e)}),n}function wo(t,e){const n=Vf(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ne(n,i)&&i in s?n:s,i,r)}const $f={get:wo(!1,!1)},Hf={get:wo(!1,!0)},Uf={get:wo(!0,!1)};const Rc=new WeakMap,xc=new WeakMap,Ac=new WeakMap,Wf=new WeakMap;function jf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(t){return t.__v_skip||!Object.isExtensible(t)?0:jf(pf(t))}function Gi(t){return Qt(t)?t:So(t,!1,Mf,$f,Rc)}function Nc(t){return So(t,!1,Ff,Hf,xc)}function Pc(t){return So(t,!0,Lf,Uf,Ac)}function So(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Gf(t);if(r===0)return t;const o=i.get(t);if(o)return o;const l=new Proxy(t,r===2?s:n);return i.set(t,l),l}function Pn(t){return Qt(t)?Pn(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function nt(t){return!!(t&&t.__v_isShallow)}function Io(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function qf(t){return!ne(t,"__v_skip")&&Object.isExtensible(t)&&dc(t,"__v_skip",!0),t}const xe=t=>me(t)?Gi(t):t,ui=t=>me(t)?Pc(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function vt(t){return Oc(t,!1)}function Kf(t){return Oc(t,!0)}function Oc(t,e){return Me(t)?t:new zf(t,e)}class zf{constructor(e,n){this.dep=new Eo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||nt(e)||Qt(e);e=s?e:X(e),Gt(e,n)&&(this._rawValue=e,this._value=s?e:xe(e),this.dep.trigger())}}function On(t){return Me(t)?t.value:t}const Yf={get:(t,e,n)=>e==="__v_raw"?t:On(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Dc(t){return Pn(t)?t:new Proxy(t,Yf)}class Qf{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Eo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return yc(this,!0),!0}get value(){const e=this.dep.track();return bc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xf(t,e,n=!1){let s,i;return W(t)?s=t:(s=t.get,i=t.set),new Qf(s,i,n)}const ti={},hi=new WeakMap;let sn;function Jf(t,e=!1,n=sn){if(n){let s=hi.get(n);s||hi.set(n,s=[]),s.push(t)}}function Zf(t,e,n=ce){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:l,call:a}=n,c=D=>i?D:nt(D)||i===!1||i===0?Tt(D,1):Tt(D);let u,h,f,d,m=!1,y=!1;if(Me(t)?(h=()=>t.value,m=nt(t)):Pn(t)?(h=()=>c(t),m=!0):$(t)?(y=!0,m=t.some(D=>Pn(D)||nt(D)),h=()=>t.map(D=>{if(Me(D))return D.value;if(Pn(D))return c(D);if(W(D))return a?a(D,2):D()})):W(t)?e?h=a?()=>a(t,2):t:h=()=>{if(f){Nt();try{f()}finally{Pt()}}const D=sn;sn=u;try{return a?a(t,3,[d]):t(d)}finally{sn=D}}:h=Ct,e&&i){const D=h,Y=i===!0?1/0:i;h=()=>Tt(D(),Y)}const P=Rf(),O=()=>{u.stop(),P&&P.active&&go(P.effects,u)};if(r&&e){const D=e;e=(...Y)=>{D(...Y),O()}}let N=y?new Array(t.length).fill(ti):ti;const M=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const Y=u.run();if(i||m||(y?Y.some((le,re)=>Gt(le,N[re])):Gt(Y,N))){f&&f();const le=sn;sn=u;try{const re=[Y,N===ti?void 0:y&&N[0]===ti?[]:N,d];N=Y,a?a(e,3,re):e(...re)}finally{sn=le}}}else u.run()};return l&&l(M),u=new gc(h),u.scheduler=o?()=>o(M,!1):M,d=D=>Jf(D,!1,u),f=u.onStop=()=>{const D=hi.get(u);if(D){if(a)a(D,4);else for(const Y of D)Y();hi.delete(u)}},e?s?M(!0):N=u.run():o?o(M.bind(null,!0),!0):u.run(),O.pause=u.pause.bind(u),O.resume=u.resume.bind(u),O.stop=O,O}function Tt(t,e=1/0,n){if(e<=0||!me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Me(t))Tt(t.value,e,n);else if($(t))for(let s=0;s<t.length;s++)Tt(t[s],e,n);else if(mo(t)||as(t))t.forEach(s=>{Tt(s,e,n)});else if(_f(t)){for(const s in t)Tt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Tt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ws(t,e,n,s){try{return s?t(...s):t()}catch(i){qi(i,e,n)}}function ct(t,e,n,s){if(W(t)){const i=Ws(t,e,n,s);return i&&fc(i)&&i.catch(r=>{qi(r,e,n)}),i}if($(t)){const i=[];for(let r=0;r<t.length;r++)i.push(ct(t[r],e,n,s));return i}}function qi(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ce;if(e){let l=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const u=l.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,c)===!1)return}l=l.parent}if(r){Nt(),Ws(r,null,10,[t,a,c]),Pt();return}}ed(t,n,i,s,o)}function ed(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Fe=[];let mt=-1;const Dn=[];let Ut=null,Tn=0;const kc=Promise.resolve();let fi=null;function Mc(t){const e=fi||kc;return t?e.then(this?t.bind(this):t):e}function td(t){let e=mt+1,n=Fe.length;for(;e<n;){const s=e+n>>>1,i=Fe[s],r=Ts(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function To(t){if(!(t.flags&1)){const e=Ts(t),n=Fe[Fe.length-1];!n||!(t.flags&2)&&e>=Ts(n)?Fe.push(t):Fe.splice(td(e),0,t),t.flags|=1,Lc()}}function Lc(){fi||(fi=kc.then(Bc))}function nd(t){$(t)?Dn.push(...t):Ut&&t.id===-1?Ut.splice(Tn+1,0,t):t.flags&1||(Dn.push(t),t.flags|=1),Lc()}function wl(t,e,n=mt+1){for(;n<Fe.length;n++){const s=Fe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Fe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Fc(t){if(Dn.length){const e=[...new Set(Dn)].sort((n,s)=>Ts(n)-Ts(s));if(Dn.length=0,Ut){Ut.push(...e);return}for(Ut=e,Tn=0;Tn<Ut.length;Tn++){const n=Ut[Tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ut=null,Tn=0}}const Ts=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Bc(t){try{for(mt=0;mt<Fe.length;mt++){const e=Fe[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ws(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mt<Fe.length;mt++){const e=Fe[mt];e&&(e.flags&=-2)}mt=-1,Fe.length=0,Fc(),fi=null,(Fe.length||Dn.length)&&Bc()}}let We=null,Vc=null;function di(t){const e=We;return We=t,Vc=t&&t.type.__scopeId||null,e}function $c(t,e=We,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Dl(-1);const r=di(e);let o;try{o=t(...i)}finally{di(r),s._d&&Dl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wn(t,e){if(We===null)return t;const n=Qi(We),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=ce]=e[i];r&&(W(r)&&(r={mounted:r,updated:r}),r.deep&&Tt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function en(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Nt(),ct(a,n,8,[t.el,l,t,e]),Pt())}}const sd=Symbol("_vte"),id=t=>t.__isTeleport,Sn=Symbol("_leaveCb"),ni=Symbol("_enterCb");function rd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ro(()=>{t.isMounted=!0}),Kc(()=>{t.isUnmounting=!0}),t}const tt=[Function,Array],od={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt};function ld(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Fr(t,e,n,s,i){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:P,onAppear:O,onAfterAppear:N,onAppearCancelled:M}=e,D=String(t.key),Y=ld(n,t),le=(j,se)=>{j&&ct(j,s,9,se)},re=(j,se)=>{const he=se[1];le(j,se),$(j)?j.every(L=>L.length<=1)&&he():j.length<=1&&he()},Oe={mode:o,persisted:l,beforeEnter(j){let se=a;if(!n.isMounted)if(r)se=P||a;else return;j[Sn]&&j[Sn](!0);const he=Y[D];he&&Rn(t,he)&&he.el[Sn]&&he.el[Sn](),le(se,[j])},enter(j){let se=c,he=u,L=h;if(!n.isMounted)if(r)se=O||c,he=N||u,L=M||h;else return;let Z=!1;const we=j[ni]=ze=>{Z||(Z=!0,ze?le(L,[j]):le(he,[j]),Oe.delayedLeave&&Oe.delayedLeave(),j[ni]=void 0)};se?re(se,[j,we]):we()},leave(j,se){const he=String(t.key);if(j[ni]&&j[ni](!0),n.isUnmounting)return se();le(f,[j]);let L=!1;const Z=j[Sn]=we=>{L||(L=!0,se(),we?le(y,[j]):le(m,[j]),j[Sn]=void 0,Y[he]===t&&delete Y[he])};Y[he]=t,d?re(d,[j,Z]):Z()},clone(j){return Fr(j,e,n,s)}};return Oe}function Rs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Rs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Be?(o.patchFlag&128&&i++,s=s.concat(Hc(o.children,e,l))):(e||o.type!==Ot)&&s.push(l!=null?hn(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function mn(t,e){return W(t)?Ee({name:t.name},e,{setup:t}):t}function Uc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pi(t,e,n,s,i=!1){if($(t)){t.forEach((m,y)=>pi(m,e&&($(e)?e[y]:e),n,s,i));return}if(fs(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&pi(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Qi(s.component):s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,h=l.setupState,f=X(h),d=h===ce?()=>!1:m=>ne(f,m);if(c!=null&&c!==a&&(Ce(c)?(u[c]=null,d(c)&&(h[c]=null)):Me(c)&&(c.value=null)),W(a))Ws(a,l,12,[o,u]);else{const m=Ce(a),y=Me(a);if(m||y){const P=()=>{if(t.f){const O=m?d(a)?h[a]:u[a]:a.value;i?$(O)&&go(O,r):$(O)?O.includes(r)||O.push(r):m?(u[a]=[r],d(a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else m?(u[a]=o,d(a)&&(h[a]=o)):y&&(a.value=o,t.k&&(u[t.k]=o))};o?(P.id=-1,Xe(P,n)):P()}}}Ui().requestIdleCallback;Ui().cancelIdleCallback;const fs=t=>!!t.type.__asyncLoader,Wc=t=>t.type.__isKeepAlive;function ad(t,e){jc(t,"a",e)}function cd(t,e){jc(t,"da",e)}function jc(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ki(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Wc(i.parent.vnode)&&ud(s,e,n,i),i=i.parent}}function ud(t,e,n,s){const i=Ki(e,t,s,!0);zc(()=>{go(s[e],i)},n)}function Ki(t,e,n=Pe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Nt();const l=js(n),a=ct(e,n,t,o);return l(),Pt(),a});return s?i.unshift(r):i.push(r),r}}const Lt=t=>(e,n=Pe)=>{(!As||t==="sp")&&Ki(t,(...s)=>e(...s),n)},Gc=Lt("bm"),Ro=Lt("m"),hd=Lt("bu"),qc=Lt("u"),Kc=Lt("bum"),zc=Lt("um"),fd=Lt("sp"),dd=Lt("rtg"),pd=Lt("rtc");function _d(t,e=Pe){Ki("ec",t,e)}const gd="components";function md(t,e){return vd(gd,t,!0,e)||t}const yd=Symbol.for("v-ndc");function vd(t,e,n=!0,s=!1){const i=We||Pe;if(i){const r=i.type;{const l=ap(r,!1);if(l&&(l===e||l===st(e)||l===Hi(st(e))))return r}const o=Sl(i[t]||r[t],e)||Sl(i.appContext[t],e);return!o&&s?r:o}}function Sl(t,e){return t&&(t[e]||t[st(e)]||t[Hi(st(e))])}function _i(t,e,n,s){let i;const r=n,o=$(t);if(o||Ce(t)){const l=o&&Pn(t);let a=!1,c=!1;l&&(a=!nt(t),c=Qt(t),t=ji(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(a?c?ui(xe(t[u])):xe(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,r)}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(l,a)=>e(l,a,void 0,r));else{const l=Object.keys(t);i=new Array(l.length);for(let a=0,c=l.length;a<c;a++){const u=l[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const Br=t=>t?pu(t)?Qi(t):Br(t.parent):null,ds=Ee(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Br(t.parent),$root:t=>Br(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Qc(t),$forceUpdate:t=>t.f||(t.f=()=>{To(t.update)}),$nextTick:t=>t.n||(t.n=Mc.bind(t.proxy)),$watch:t=>$d.bind(t)}),fr=(t,e)=>t!==ce&&!t.__isScriptSetup&&ne(t,e),Cd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(fr(s,e))return o[e]=1,s[e];if(i!==ce&&ne(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return o[e]=3,r[e];if(n!==ce&&ne(n,e))return o[e]=4,n[e];Vr&&(o[e]=0)}}const u=ds[e];let h,f;if(u)return e==="$attrs"&&De(t.attrs,"get",""),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ce&&ne(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return fr(i,e)?(i[e]=n,!0):s!==ce&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ce&&ne(t,o)||fr(e,o)||(l=r[0])&&ne(l,o)||ne(s,o)||ne(ds,o)||ne(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Il(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Vr=!0;function bd(t){const e=Qc(t),n=t.proxy,s=t.ctx;Vr=!1,e.beforeCreate&&Tl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:y,deactivated:P,beforeDestroy:O,beforeUnmount:N,destroyed:M,unmounted:D,render:Y,renderTracked:le,renderTriggered:re,errorCaptured:Oe,serverPrefetch:j,expose:se,inheritAttrs:he,components:L,directives:Z,filters:we}=e;if(c&&Ed(c,s,null),o)for(const oe in o){const ee=o[oe];W(ee)&&(s[oe]=ee.bind(n))}if(i){const oe=i.call(n,n);me(oe)&&(t.data=Gi(oe))}if(Vr=!0,r)for(const oe in r){const ee=r[oe],bt=W(ee)?ee.bind(n,n):W(ee.get)?ee.get.bind(n,n):Ct,Bt=!W(ee)&&W(ee.set)?ee.set.bind(n):Ct,ht=Je({get:bt,set:Bt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>ht.value,set:Ve=>ht.value=Ve})}if(l)for(const oe in l)Yc(l[oe],s,n,oe);if(a){const oe=W(a)?a.call(n):a;Reflect.ownKeys(oe).forEach(ee=>{oi(ee,oe[ee])})}u&&Tl(u,t,"c");function ve(oe,ee){$(ee)?ee.forEach(bt=>oe(bt.bind(n))):ee&&oe(ee.bind(n))}if(ve(Gc,h),ve(Ro,f),ve(hd,d),ve(qc,m),ve(ad,y),ve(cd,P),ve(_d,Oe),ve(pd,le),ve(dd,re),ve(Kc,N),ve(zc,D),ve(fd,j),$(se))if(se.length){const oe=t.exposed||(t.exposed={});se.forEach(ee=>{Object.defineProperty(oe,ee,{get:()=>n[ee],set:bt=>n[ee]=bt})})}else t.exposed||(t.exposed={});Y&&t.render===Ct&&(t.render=Y),he!=null&&(t.inheritAttrs=he),L&&(t.components=L),Z&&(t.directives=Z),j&&Uc(t)}function Ed(t,e,n=Ct){$(t)&&(t=$r(t));for(const s in t){const i=t[s];let r;me(i)?"default"in i?r=xt(i.from||s,i.default,!0):r=xt(i.from||s):r=xt(i),Me(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Tl(t,e,n){ct($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,s){let i=s.includes(".")?cu(n,s):()=>n[s];if(Ce(t)){const r=e[t];W(r)&&ps(i,r)}else if(W(t))ps(i,t.bind(n));else if(me(t))if($(t))t.forEach(r=>Yc(r,e,n,s));else{const r=W(t.handler)?t.handler.bind(n):e[t.handler];W(r)&&ps(i,r,t)}}function Qc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>gi(a,c,o,!0)),gi(a,e,o)),me(e)&&r.set(e,a),a}function gi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&gi(t,r,n,!0),i&&i.forEach(o=>gi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=wd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const wd={data:Rl,props:xl,emits:xl,methods:ls,computed:ls,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:ls,directives:ls,watch:Id,provide:Rl,inject:Sd};function Rl(t,e){return e?t?function(){return Ee(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Sd(t,e){return ls($r(t),$r(e))}function $r(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function ls(t,e){return t?Ee(Object.create(null),t,e):e}function xl(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:Ee(Object.create(null),Il(t),Il(e??{})):e}function Id(t,e){if(!t)return e;if(!e)return t;const n=Ee(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function Xc(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Td=0;function Rd(t,e){return function(s,i=null){W(s)||(s=Ee({},s)),i!=null&&!me(i)&&(i=null);const r=Xc(),o=new WeakSet,l=[];let a=!1;const c=r.app={_uid:Td++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:up,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(c,...h)):W(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!a){const d=c._ceVNode||Re(s,i);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(d,u,f),a=!0,c._container=u,u.__vue_app__=c,Qi(d.component)}},onUnmount(u){l.push(u)},unmount(){a&&(ct(l,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=kn;kn=c;try{return u()}finally{kn=h}}};return c}}let kn=null;function oi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function xt(t,e,n=!1){const s=Pe||We;if(s||kn){let i=kn?kn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&W(e)?e.call(s&&s.proxy):e}}const Jc={},Zc=()=>Object.create(Jc),eu=t=>Object.getPrototypeOf(t)===Jc;function xd(t,e,n,s=!1){const i={},r=Zc();t.propsDefaults=Object.create(null),tu(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Nc(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ad(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=X(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(zi(t.emitsOptions,f))continue;const d=e[f];if(a)if(ne(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const m=st(f);i[m]=Hr(a,l,m,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{tu(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!ne(e,h)&&((u=gn(h))===h||!ne(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Hr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!ne(e,h))&&(delete r[h],c=!0)}c&&It(t.attrs,"set","")}function tu(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(cs(a))continue;const c=e[a];let u;i&&ne(i,u=st(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:zi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=X(n),c=l||ce;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Hr(i,a,h,c[h],t,!ne(c,h))}}return o}function Hr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ne(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&W(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=js(i);s=c[n]=a.call(null,e),u()}}else s=a;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===gn(n))&&(s=!0))}return s}const Nd=new WeakMap;function nu(t,e,n=!1){const s=n?Nd:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!W(t)){const u=h=>{a=!0;const[f,d]=nu(h,e,!0);Ee(o,f),d&&l.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return me(t)&&s.set(t,Nn),Nn;if($(r))for(let u=0;u<r.length;u++){const h=st(r[u]);Al(h)&&(o[h]=ce)}else if(r)for(const u in r){const h=st(u);if(Al(h)){const f=r[u],d=o[h]=$(f)||W(f)?{type:f}:Ee({},f),m=d.type;let y=!1,P=!0;if($(m))for(let O=0;O<m.length;++O){const N=m[O],M=W(N)&&N.name;if(M==="Boolean"){y=!0;break}else M==="String"&&(P=!1)}else y=W(m)&&m.name==="Boolean";d[0]=y,d[1]=P,(y||ne(d,"default"))&&l.push(h)}}const c=[o,l];return me(t)&&s.set(t,c),c}function Al(t){return t[0]!=="$"&&!cs(t)}const xo=t=>t[0]==="_"||t==="$stable",Ao=t=>$(t)?t.map(yt):[yt(t)],Pd=(t,e,n)=>{if(e._n)return e;const s=$c((...i)=>Ao(e(...i)),n);return s._c=!1,s},su=(t,e,n)=>{const s=t._ctx;for(const i in t){if(xo(i))continue;const r=t[i];if(W(r))e[i]=Pd(i,r,s);else if(r!=null){const o=Ao(r);e[i]=()=>o}}},iu=(t,e)=>{const n=Ao(e);t.slots.default=()=>n},ru=(t,e,n)=>{for(const s in e)(n||!xo(s))&&(t[s]=e[s])},Od=(t,e,n)=>{const s=t.slots=Zc();if(t.vnode.shapeFlag&32){const i=e._;i?(ru(s,e,n),n&&dc(s,"_",i,!0)):su(e,s)}else e&&iu(t,e)},Dd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ce;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:ru(i,e,n):(r=!e.$stable,su(e,i)),o=e}else e&&(iu(t,e),o={default:1});if(r)for(const l in i)!xo(l)&&o[l]==null&&delete i[l]},Xe=Kd;function kd(t){return Md(t)}function Md(t,e){const n=Ui();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Ct,insertStaticContent:m}=t,y=(p,_,g,v=null,E=null,b=null,R=void 0,T=null,I=!!_.dynamicChildren)=>{if(p===_)return;p&&!Rn(p,_)&&(v=C(p),Ve(p,E,b,!0),p=null),_.patchFlag===-2&&(I=!1,_.dynamicChildren=null);const{type:w,ref:V,shapeFlag:A}=_;switch(w){case Yi:P(p,_,g,v);break;case Ot:O(p,_,g,v);break;case pr:p==null&&N(_,g,v,R);break;case Be:L(p,_,g,v,E,b,R,T,I);break;default:A&1?Y(p,_,g,v,E,b,R,T,I):A&6?Z(p,_,g,v,E,b,R,T,I):(A&64||A&128)&&w.process(p,_,g,v,E,b,R,T,I,F)}V!=null&&E&&pi(V,p&&p.ref,b,_||p,!_)},P=(p,_,g,v)=>{if(p==null)s(_.el=l(_.children),g,v);else{const E=_.el=p.el;_.children!==p.children&&c(E,_.children)}},O=(p,_,g,v)=>{p==null?s(_.el=a(_.children||""),g,v):_.el=p.el},N=(p,_,g,v)=>{[p.el,p.anchor]=m(p.children,_,g,v,p.el,p.anchor)},M=({el:p,anchor:_},g,v)=>{let E;for(;p&&p!==_;)E=f(p),s(p,g,v),p=E;s(_,g,v)},D=({el:p,anchor:_})=>{let g;for(;p&&p!==_;)g=f(p),i(p),p=g;i(_)},Y=(p,_,g,v,E,b,R,T,I)=>{_.type==="svg"?R="svg":_.type==="math"&&(R="mathml"),p==null?le(_,g,v,E,b,R,T,I):j(p,_,E,b,R,T,I)},le=(p,_,g,v,E,b,R,T)=>{let I,w;const{props:V,shapeFlag:A,transition:B,dirs:U}=p;if(I=p.el=o(p.type,b,V&&V.is,V),A&8?u(I,p.children):A&16&&Oe(p.children,I,null,v,E,dr(p,b),R,T),U&&en(p,null,v,"created"),re(I,p,p.scopeId,R,v),V){for(const fe in V)fe!=="value"&&!cs(fe)&&r(I,fe,null,V[fe],b,v);"value"in V&&r(I,"value",null,V.value,b),(w=V.onVnodeBeforeMount)&&_t(w,v,p)}U&&en(p,null,v,"beforeMount");const Q=Ld(E,B);Q&&B.beforeEnter(I),s(I,_,g),((w=V&&V.onVnodeMounted)||Q||U)&&Xe(()=>{w&&_t(w,v,p),Q&&B.enter(I),U&&en(p,null,v,"mounted")},E)},re=(p,_,g,v,E)=>{if(g&&d(p,g),v)for(let b=0;b<v.length;b++)d(p,v[b]);if(E){let b=E.subTree;if(_===b||hu(b.type)&&(b.ssContent===_||b.ssFallback===_)){const R=E.vnode;re(p,R,R.scopeId,R.slotScopeIds,E.parent)}}},Oe=(p,_,g,v,E,b,R,T,I=0)=>{for(let w=I;w<p.length;w++){const V=p[w]=T?Wt(p[w]):yt(p[w]);y(null,V,_,g,v,E,b,R,T)}},j=(p,_,g,v,E,b,R)=>{const T=_.el=p.el;let{patchFlag:I,dynamicChildren:w,dirs:V}=_;I|=p.patchFlag&16;const A=p.props||ce,B=_.props||ce;let U;if(g&&tn(g,!1),(U=B.onVnodeBeforeUpdate)&&_t(U,g,_,p),V&&en(_,p,g,"beforeUpdate"),g&&tn(g,!0),(A.innerHTML&&B.innerHTML==null||A.textContent&&B.textContent==null)&&u(T,""),w?se(p.dynamicChildren,w,T,g,v,dr(_,E),b):R||ee(p,_,T,null,g,v,dr(_,E),b,!1),I>0){if(I&16)he(T,A,B,g,E);else if(I&2&&A.class!==B.class&&r(T,"class",null,B.class,E),I&4&&r(T,"style",A.style,B.style,E),I&8){const Q=_.dynamicProps;for(let fe=0;fe<Q.length;fe++){const ie=Q[fe],Ye=A[ie],$e=B[ie];($e!==Ye||ie==="value")&&r(T,ie,Ye,$e,E,g)}}I&1&&p.children!==_.children&&u(T,_.children)}else!R&&w==null&&he(T,A,B,g,E);((U=B.onVnodeUpdated)||V)&&Xe(()=>{U&&_t(U,g,_,p),V&&en(_,p,g,"updated")},v)},se=(p,_,g,v,E,b,R)=>{for(let T=0;T<_.length;T++){const I=p[T],w=_[T],V=I.el&&(I.type===Be||!Rn(I,w)||I.shapeFlag&198)?h(I.el):g;y(I,w,V,null,v,E,b,R,!0)}},he=(p,_,g,v,E)=>{if(_!==g){if(_!==ce)for(const b in _)!cs(b)&&!(b in g)&&r(p,b,_[b],null,E,v);for(const b in g){if(cs(b))continue;const R=g[b],T=_[b];R!==T&&b!=="value"&&r(p,b,T,R,E,v)}"value"in g&&r(p,"value",_.value,g.value,E)}},L=(p,_,g,v,E,b,R,T,I)=>{const w=_.el=p?p.el:l(""),V=_.anchor=p?p.anchor:l("");let{patchFlag:A,dynamicChildren:B,slotScopeIds:U}=_;U&&(T=T?T.concat(U):U),p==null?(s(w,g,v),s(V,g,v),Oe(_.children||[],g,V,E,b,R,T,I)):A>0&&A&64&&B&&p.dynamicChildren?(se(p.dynamicChildren,B,g,E,b,R,T),(_.key!=null||E&&_===E.subTree)&&ou(p,_,!0)):ee(p,_,g,V,E,b,R,T,I)},Z=(p,_,g,v,E,b,R,T,I)=>{_.slotScopeIds=T,p==null?_.shapeFlag&512?E.ctx.activate(_,g,v,R,I):we(_,g,v,E,b,R,I):ze(p,_,I)},we=(p,_,g,v,E,b,R)=>{const T=p.component=np(p,v,E);if(Wc(p)&&(T.ctx.renderer=F),ip(T,!1,R),T.asyncDep){if(E&&E.registerDep(T,ve,R),!p.el){const I=T.subTree=Re(Ot);O(null,I,_,g)}}else ve(T,p,_,g,E,b,R)},ze=(p,_,g)=>{const v=_.component=p.component;if(Gd(p,_,g))if(v.asyncDep&&!v.asyncResolved){oe(v,_,g);return}else v.next=_,v.update();else _.el=p.el,v.vnode=_},ve=(p,_,g,v,E,b,R)=>{const T=()=>{if(p.isMounted){let{next:A,bu:B,u:U,parent:Q,vnode:fe}=p;{const dt=lu(p);if(dt){A&&(A.el=fe.el,oe(p,A,R)),dt.asyncDep.then(()=>{p.isUnmounted||T()});return}}let ie=A,Ye;tn(p,!1),A?(A.el=fe.el,oe(p,A,R)):A=fe,B&&ri(B),(Ye=A.props&&A.props.onVnodeBeforeUpdate)&&_t(Ye,Q,A,fe),tn(p,!0);const $e=Pl(p),ft=p.subTree;p.subTree=$e,y(ft,$e,h(ft.el),C(ft),p,E,b),A.el=$e.el,ie===null&&qd(p,$e.el),U&&Xe(U,E),(Ye=A.props&&A.props.onVnodeUpdated)&&Xe(()=>_t(Ye,Q,A,fe),E)}else{let A;const{el:B,props:U}=_,{bm:Q,m:fe,parent:ie,root:Ye,type:$e}=p,ft=fs(_);tn(p,!1),Q&&ri(Q),!ft&&(A=U&&U.onVnodeBeforeMount)&&_t(A,ie,_),tn(p,!0);{Ye.ce&&Ye.ce._injectChildStyle($e);const dt=p.subTree=Pl(p);y(null,dt,g,v,p,E,b),_.el=dt.el}if(fe&&Xe(fe,E),!ft&&(A=U&&U.onVnodeMounted)){const dt=_;Xe(()=>_t(A,ie,dt),E)}(_.shapeFlag&256||ie&&fs(ie.vnode)&&ie.vnode.shapeFlag&256)&&p.a&&Xe(p.a,E),p.isMounted=!0,_=g=v=null}};p.scope.on();const I=p.effect=new gc(T);p.scope.off();const w=p.update=I.run.bind(I),V=p.job=I.runIfDirty.bind(I);V.i=p,V.id=p.uid,I.scheduler=()=>To(V),tn(p,!0),w()},oe=(p,_,g)=>{_.component=p;const v=p.vnode.props;p.vnode=_,p.next=null,Ad(p,_.props,v,g),Dd(p,_.children,g),Nt(),wl(p),Pt()},ee=(p,_,g,v,E,b,R,T,I=!1)=>{const w=p&&p.children,V=p?p.shapeFlag:0,A=_.children,{patchFlag:B,shapeFlag:U}=_;if(B>0){if(B&128){Bt(w,A,g,v,E,b,R,T,I);return}else if(B&256){bt(w,A,g,v,E,b,R,T,I);return}}U&8?(V&16&&et(w,E,b),A!==w&&u(g,A)):V&16?U&16?Bt(w,A,g,v,E,b,R,T,I):et(w,E,b,!0):(V&8&&u(g,""),U&16&&Oe(A,g,v,E,b,R,T,I))},bt=(p,_,g,v,E,b,R,T,I)=>{p=p||Nn,_=_||Nn;const w=p.length,V=_.length,A=Math.min(w,V);let B;for(B=0;B<A;B++){const U=_[B]=I?Wt(_[B]):yt(_[B]);y(p[B],U,g,null,E,b,R,T,I)}w>V?et(p,E,b,!0,!1,A):Oe(_,g,v,E,b,R,T,I,A)},Bt=(p,_,g,v,E,b,R,T,I)=>{let w=0;const V=_.length;let A=p.length-1,B=V-1;for(;w<=A&&w<=B;){const U=p[w],Q=_[w]=I?Wt(_[w]):yt(_[w]);if(Rn(U,Q))y(U,Q,g,null,E,b,R,T,I);else break;w++}for(;w<=A&&w<=B;){const U=p[A],Q=_[B]=I?Wt(_[B]):yt(_[B]);if(Rn(U,Q))y(U,Q,g,null,E,b,R,T,I);else break;A--,B--}if(w>A){if(w<=B){const U=B+1,Q=U<V?_[U].el:v;for(;w<=B;)y(null,_[w]=I?Wt(_[w]):yt(_[w]),g,Q,E,b,R,T,I),w++}}else if(w>B)for(;w<=A;)Ve(p[w],E,b,!0),w++;else{const U=w,Q=w,fe=new Map;for(w=Q;w<=B;w++){const Qe=_[w]=I?Wt(_[w]):yt(_[w]);Qe.key!=null&&fe.set(Qe.key,w)}let ie,Ye=0;const $e=B-Q+1;let ft=!1,dt=0;const Jn=new Array($e);for(w=0;w<$e;w++)Jn[w]=0;for(w=U;w<=A;w++){const Qe=p[w];if(Ye>=$e){Ve(Qe,E,b,!0);continue}let pt;if(Qe.key!=null)pt=fe.get(Qe.key);else for(ie=Q;ie<=B;ie++)if(Jn[ie-Q]===0&&Rn(Qe,_[ie])){pt=ie;break}pt===void 0?Ve(Qe,E,b,!0):(Jn[pt-Q]=w+1,pt>=dt?dt=pt:ft=!0,y(Qe,_[pt],g,null,E,b,R,T,I),Ye++)}const ml=ft?Fd(Jn):Nn;for(ie=ml.length-1,w=$e-1;w>=0;w--){const Qe=Q+w,pt=_[Qe],yl=Qe+1<V?_[Qe+1].el:v;Jn[w]===0?y(null,pt,g,yl,E,b,R,T,I):ft&&(ie<0||w!==ml[ie]?ht(pt,g,yl,2):ie--)}}},ht=(p,_,g,v,E=null)=>{const{el:b,type:R,transition:T,children:I,shapeFlag:w}=p;if(w&6){ht(p.component.subTree,_,g,v);return}if(w&128){p.suspense.move(_,g,v);return}if(w&64){R.move(p,_,g,F);return}if(R===Be){s(b,_,g);for(let A=0;A<I.length;A++)ht(I[A],_,g,v);s(p.anchor,_,g);return}if(R===pr){M(p,_,g);return}if(v!==2&&w&1&&T)if(v===0)T.beforeEnter(b),s(b,_,g),Xe(()=>T.enter(b),E);else{const{leave:A,delayLeave:B,afterLeave:U}=T,Q=()=>{p.ctx.isUnmounted?i(b):s(b,_,g)},fe=()=>{A(b,()=>{Q(),U&&U()})};B?B(b,Q,fe):fe()}else s(b,_,g)},Ve=(p,_,g,v=!1,E=!1)=>{const{type:b,props:R,ref:T,children:I,dynamicChildren:w,shapeFlag:V,patchFlag:A,dirs:B,cacheIndex:U}=p;if(A===-2&&(E=!1),T!=null&&(Nt(),pi(T,null,g,p,!0),Pt()),U!=null&&(_.renderCache[U]=void 0),V&256){_.ctx.deactivate(p);return}const Q=V&1&&B,fe=!fs(p);let ie;if(fe&&(ie=R&&R.onVnodeBeforeUnmount)&&_t(ie,_,p),V&6)Js(p.component,g,v);else{if(V&128){p.suspense.unmount(g,v);return}Q&&en(p,null,_,"beforeUnmount"),V&64?p.type.remove(p,_,g,F,v):w&&!w.hasOnce&&(b!==Be||A>0&&A&64)?et(w,_,g,!1,!0):(b===Be&&A&384||!E&&V&16)&&et(I,_,g),v&&Cn(p)}(fe&&(ie=R&&R.onVnodeUnmounted)||Q)&&Xe(()=>{ie&&_t(ie,_,p),Q&&en(p,null,_,"unmounted")},g)},Cn=p=>{const{type:_,el:g,anchor:v,transition:E}=p;if(_===Be){bn(g,v);return}if(_===pr){D(p);return}const b=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(p.shapeFlag&1&&E&&!E.persisted){const{leave:R,delayLeave:T}=E,I=()=>R(g,b);T?T(p.el,b,I):I()}else b()},bn=(p,_)=>{let g;for(;p!==_;)g=f(p),i(p),p=g;i(_)},Js=(p,_,g)=>{const{bum:v,scope:E,job:b,subTree:R,um:T,m:I,a:w,parent:V,slots:{__:A}}=p;Nl(I),Nl(w),v&&ri(v),V&&$(A)&&A.forEach(B=>{V.renderCache[B]=void 0}),E.stop(),b&&(b.flags|=8,Ve(R,p,_,g)),T&&Xe(T,_),Xe(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},et=(p,_,g,v=!1,E=!1,b=0)=>{for(let R=b;R<p.length;R++)Ve(p[R],_,g,v,E)},C=p=>{if(p.shapeFlag&6)return C(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const _=f(p.anchor||p.el),g=_&&_[sd];return g?f(g):_};let k=!1;const x=(p,_,g)=>{p==null?_._vnode&&Ve(_._vnode,null,null,!0):y(_._vnode||null,p,_,null,null,null,g),_._vnode=p,k||(k=!0,wl(),Fc(),k=!1)},F={p:y,um:Ve,m:ht,r:Cn,mt:we,mc:Oe,pc:ee,pbc:se,n:C,o:t};return{render:x,hydrate:void 0,createApp:Rd(x)}}function dr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function tn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ld(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ou(t,e,n=!1){const s=t.children,i=e.children;if($(s)&&$(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Wt(i[r]),l.el=o.el),!n&&l.patchFlag!==-2&&ou(o,l)),l.type===Yi&&(l.el=o.el),l.type===Ot&&!l.el&&(l.el=o.el)}}function Fd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function lu(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lu(e)}function Nl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Bd=Symbol.for("v-scx"),Vd=()=>xt(Bd);function ps(t,e,n){return au(t,e,n)}function au(t,e,n=ce){const{immediate:s,deep:i,flush:r,once:o}=n,l=Ee({},n),a=e&&s||!e&&r!=="post";let c;if(As){if(r==="sync"){const d=Vd();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!a){const d=()=>{};return d.stop=Ct,d.resume=Ct,d.pause=Ct,d}}const u=Pe;l.call=(d,m,y)=>ct(d,u,m,y);let h=!1;r==="post"?l.scheduler=d=>{Xe(d,u&&u.suspense)}:r!=="sync"&&(h=!0,l.scheduler=(d,m)=>{m?d():To(d)}),l.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=Zf(t,e,l);return As&&(c?c.push(f):a&&f()),f}function $d(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?cu(s,t):()=>s[t]:t.bind(s,s);let r;W(e)?r=e:(r=e.handler,n=e);const o=js(this),l=au(i,r.bind(s),n);return o(),l}function cu(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Hd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${st(e)}Modifiers`]||t[`${gn(e)}Modifiers`];function Ud(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let i=n;const r=e.startsWith("update:"),o=r&&Hd(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Ce(u)?u.trim():u)),o.number&&(i=n.map(Or)));let l,a=s[l=ar(e)]||s[l=ar(st(e))];!a&&r&&(a=s[l=ar(gn(e))]),a&&ct(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,ct(c,t,6,i)}}function uu(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!W(t)){const a=c=>{const u=uu(c,e,!0);u&&(l=!0,Ee(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(me(t)&&s.set(t,null),null):($(r)?r.forEach(a=>o[a]=null):Ee(o,r),me(t)&&s.set(t,o),o)}function zi(t,e){return!t||!Vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,gn(e))||ne(t,e))}function Pl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:l,emit:a,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:m,inheritAttrs:y}=t,P=di(t);let O,N;try{if(n.shapeFlag&4){const D=i||s,Y=D;O=yt(c.call(Y,D,u,h,d,f,m)),N=l}else{const D=e;O=yt(D.length>1?D(h,{attrs:l,slots:o,emit:a}):D(h,null)),N=e.props?l:Wd(l)}}catch(D){_s.length=0,qi(D,t,1),O=Re(Ot)}let M=O;if(N&&y!==!1){const D=Object.keys(N),{shapeFlag:Y}=M;D.length&&Y&7&&(r&&D.some(_o)&&(N=jd(N,r)),M=hn(M,N,!1,!0))}return n.dirs&&(M=hn(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Rs(M,n.transition),O=M,di(P),O}const Wd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vi(n))&&((e||(e={}))[n]=t[n]);return e},jd=(t,e)=>{const n={};for(const s in t)(!_o(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Gd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Ol(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!zi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Ol(s,o,c):!0:!!o;return!1}function Ol(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!zi(n,r))return!0}return!1}function qd({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const hu=t=>t.__isSuspense;function Kd(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):nd(t)}const Be=Symbol.for("v-fgt"),Yi=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),pr=Symbol.for("v-stc"),_s=[];let Ze=null;function Ne(t=!1){_s.push(Ze=t?null:[])}function zd(){_s.pop(),Ze=_s[_s.length-1]||null}let xs=1;function Dl(t,e=!1){xs+=t,t<0&&Ze&&e&&(Ze.hasOnce=!0)}function fu(t){return t.dynamicChildren=xs>0?Ze||Nn:null,zd(),xs>0&&Ze&&Ze.push(t),t}function Ue(t,e,n,s,i,r){return fu(G(t,e,n,s,i,r,!0))}function No(t,e,n,s,i){return fu(Re(t,e,n,s,i,!0))}function mi(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const du=({key:t})=>t??null,li=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Me(t)||W(t)?{i:We,r:t,k:e,f:!!n}:t:null);function G(t,e=null,n=null,s=0,i=null,r=t===Be?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&du(e),ref:e&&li(e),scopeId:Vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:We};return l?(Po(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Ce(n)?8:16),xs>0&&!o&&Ze&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Ze.push(a),a}const Re=Yd;function Yd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===yd)&&(t=Ot),mi(t)){const l=hn(t,e,!0);return n&&Po(l,n),xs>0&&!r&&Ze&&(l.shapeFlag&6?Ze[Ze.indexOf(t)]=l:Ze.push(l)),l.patchFlag=-2,l}if(cp(t)&&(t=t.__vccOpts),e){e=Qd(e);let{class:l,style:a}=e;l&&!Ce(l)&&(e.class=Us(l)),me(a)&&(Io(a)&&!$(a)&&(a=Ee({},a)),e.style=Kn(a))}const o=Ce(t)?1:hu(t)?128:id(t)?64:me(t)?4:W(t)?2:0;return G(t,e,n,s,i,o,r,!0)}function Qd(t){return t?Io(t)||eu(t)?Ee({},t):t:null}function hn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:l,transition:a}=t,c=e?Zd(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&du(c),ref:e&&e.ref?n&&r?$(r)?r.concat(li(e)):[r,li(e)]:li(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&Rs(u,a.clone(u)),u}function Xd(t=" ",e=0){return Re(Yi,null,t,e)}function Jd(t="",e=!1){return e?(Ne(),No(Ot,null,t)):Re(Ot,null,t)}function yt(t){return t==null||typeof t=="boolean"?Re(Ot):$(t)?Re(Be,null,t.slice()):mi(t)?Wt(t):Re(Yi,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function Po(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Po(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!eu(e)?e._ctx=We:i===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:We},n=32):(e=String(e),s&64?(n=16,e=[Xd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Us([e.class,s.class]));else if(i==="style")e.style=Kn([e.style,s.style]);else if(Vi(i)){const r=e[i],o=s[i];o&&r!==o&&!($(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function _t(t,e,n,s=null){ct(t,e,7,[n,s])}const ep=Xc();let tp=0;function np(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ep,r={uid:tp++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nu(s,i),emitsOptions:uu(s,i),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ud.bind(null,r),t.ce&&t.ce(r),r}let Pe=null;const sp=()=>Pe||We;let yi,Ur;{const t=Ui(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};yi=e("__VUE_INSTANCE_SETTERS__",n=>Pe=n),Ur=e("__VUE_SSR_SETTERS__",n=>As=n)}const js=t=>{const e=Pe;return yi(t),t.scope.on(),()=>{t.scope.off(),yi(e)}},kl=()=>{Pe&&Pe.scope.off(),yi(null)};function pu(t){return t.vnode.shapeFlag&4}let As=!1;function ip(t,e=!1,n=!1){e&&Ur(e);const{props:s,children:i}=t.vnode,r=pu(t);xd(t,s,r,e),Od(t,i,n||e);const o=r?rp(t,e):void 0;return e&&Ur(!1),o}function rp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Cd);const{setup:s}=n;if(s){Nt();const i=t.setupContext=s.length>1?lp(t):null,r=js(t),o=Ws(s,t,0,[t.props,i]),l=fc(o);if(Pt(),r(),(l||t.sp)&&!fs(t)&&Uc(t),l){if(o.then(kl,kl),e)return o.then(a=>{Ml(t,a)}).catch(a=>{qi(a,t,0)});t.asyncDep=o}else Ml(t,o)}else _u(t)}function Ml(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Dc(e)),_u(t)}function _u(t,e,n){const s=t.type;t.render||(t.render=s.render||Ct);{const i=js(t);Nt();try{bd(t)}finally{Pt(),i()}}}const op={get(t,e){return De(t,"get",""),t[e]}};function lp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,op),slots:t.slots,emit:t.emit,expose:e}}function Qi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Dc(qf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ds)return ds[n](t)},has(e,n){return n in e||n in ds}})):t.proxy}function ap(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function cp(t){return W(t)&&"__vccOpts"in t}const Je=(t,e)=>Xf(t,e,As);function gu(t,e,n){const s=arguments.length;return s===2?me(e)&&!$(e)?mi(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mi(n)&&(n=[n]),Re(t,e,n))}const up="3.5.15";/**
* @vue/runtime-dom v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wr;const Ll=typeof window<"u"&&window.trustedTypes;if(Ll)try{Wr=Ll.createPolicy("vue",{createHTML:t=>t})}catch{}const mu=Wr?t=>Wr.createHTML(t):t=>t,hp="http://www.w3.org/2000/svg",fp="http://www.w3.org/1998/Math/MathML",St=typeof document<"u"?document:null,Fl=St&&St.createElement("template"),dp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?St.createElementNS(hp,t):e==="mathml"?St.createElementNS(fp,t):n?St.createElement(t,{is:n}):St.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Fl.innerHTML=mu(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Fl.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vt="transition",es="animation",$n=Symbol("_vtc"),yu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pp=Ee({},od,yu),nn=(t,e=[])=>{$(t)?t.forEach(n=>n(...e)):t&&t(...e)},Bl=t=>t?$(t)?t.some(e=>e.length>1):t.length>1:!1;function _p(t){const e={};for(const L in t)L in yu||(e[L]=t[L]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=gp(i),y=m&&m[0],P=m&&m[1],{onBeforeEnter:O,onEnter:N,onEnterCancelled:M,onLeave:D,onLeaveCancelled:Y,onBeforeAppear:le=O,onAppear:re=N,onAppearCancelled:Oe=M}=e,j=(L,Z,we,ze)=>{L._enterCancelled=ze,Ht(L,Z?u:l),Ht(L,Z?c:o),we&&we()},se=(L,Z)=>{L._isLeaving=!1,Ht(L,h),Ht(L,d),Ht(L,f),Z&&Z()},he=L=>(Z,we)=>{const ze=L?re:N,ve=()=>j(Z,L,we);nn(ze,[Z,ve]),Vl(()=>{Ht(Z,L?a:r),gt(Z,L?u:l),Bl(ze)||$l(Z,s,y,ve)})};return Ee(e,{onBeforeEnter(L){nn(O,[L]),gt(L,r),gt(L,o)},onBeforeAppear(L){nn(le,[L]),gt(L,a),gt(L,c)},onEnter:he(!1),onAppear:he(!0),onLeave(L,Z){L._isLeaving=!0;const we=()=>se(L,Z);gt(L,h),L._enterCancelled?(gt(L,f),jr()):(jr(),gt(L,f)),Vl(()=>{L._isLeaving&&(Ht(L,h),gt(L,d),Bl(D)||$l(L,s,P,we))}),nn(D,[L,we])},onEnterCancelled(L){j(L,!1,void 0,!0),nn(M,[L])},onAppearCancelled(L){j(L,!0,void 0,!0),nn(Oe,[L])},onLeaveCancelled(L){se(L),nn(Y,[L])}})}function gp(t){if(t==null)return null;if(me(t))return[_r(t.enter),_r(t.leave)];{const e=_r(t);return[e,e]}}function _r(t){return yf(t)}function gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[$n]||(t[$n]=new Set)).add(e)}function Ht(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[$n];n&&(n.delete(e),n.size||(t[$n]=void 0))}function Vl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mp=0;function $l(t,e,n,s){const i=t._endId=++mp,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=vu(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=d=>{d.target===t&&++u>=a&&h()};setTimeout(()=>{u<a&&h()},l+1),t.addEventListener(c,f)}function vu(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Vt}Delay`),r=s(`${Vt}Duration`),o=Hl(i,r),l=s(`${es}Delay`),a=s(`${es}Duration`),c=Hl(l,a);let u=null,h=0,f=0;e===Vt?o>0&&(u=Vt,h=o,f=r.length):e===es?c>0&&(u=es,h=c,f=a.length):(h=Math.max(o,c),u=h>0?o>c?Vt:es:null,f=u?u===Vt?r.length:a.length:0);const d=u===Vt&&/\b(transform|all)(,|$)/.test(s(`${Vt}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Hl(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Ul(n)+Ul(t[s])))}function Ul(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function jr(){return document.body.offsetHeight}function yp(t,e,n){const s=t[$n];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wl=Symbol("_vod"),vp=Symbol("_vsh"),Cp=Symbol(""),bp=/(^|;)\s*display\s*:/;function Ep(t,e,n){const s=t.style,i=Ce(n);let r=!1;if(n&&!i){if(e)if(Ce(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ai(s,l,"")}else for(const o in e)n[o]==null&&ai(s,o,"");for(const o in n)o==="display"&&(r=!0),ai(s,o,n[o])}else if(i){if(e!==n){const o=s[Cp];o&&(n+=";"+o),s.cssText=n,r=bp.test(n)}}else e&&t.removeAttribute("style");Wl in t&&(t[Wl]=r?s.display:"",t[vp]&&(s.display="none"))}const jl=/\s*!important$/;function ai(t,e,n){if($(n))n.forEach(s=>ai(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=wp(t,e);jl.test(n)?t.setProperty(gn(s),n.replace(jl,""),"important"):t[s]=n}}const Gl=["Webkit","Moz","ms"],gr={};function wp(t,e){const n=gr[e];if(n)return n;let s=st(e);if(s!=="filter"&&s in t)return gr[e]=s;s=Hi(s);for(let i=0;i<Gl.length;i++){const r=Gl[i]+s;if(r in t)return gr[e]=r}return e}const ql="http://www.w3.org/1999/xlink";function Kl(t,e,n,s,i,r=Sf(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ql,e.slice(6,e.length)):t.setAttributeNS(ql,e,n):n==null||r&&!pc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Yt(n)?String(n):n)}function zl(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mu(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=pc(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function ln(t,e,n,s){t.addEventListener(e,n,s)}function Sp(t,e,n,s){t.removeEventListener(e,n,s)}const Yl=Symbol("_vei");function Ip(t,e,n,s,i=null){const r=t[Yl]||(t[Yl]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Tp(e);if(s){const c=r[e]=Ap(s,i);ln(t,l,c,a)}else o&&(Sp(t,l,o,a),r[e]=void 0)}}const Ql=/(?:Once|Passive|Capture)$/;function Tp(t){let e;if(Ql.test(t)){e={};let s;for(;s=t.match(Ql);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gn(t.slice(2)),e]}let mr=0;const Rp=Promise.resolve(),xp=()=>mr||(Rp.then(()=>mr=0),mr=Date.now());function Ap(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ct(Np(s,n.value),e,5,[s])};return n.value=t,n.attached=xp(),n}function Np(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Xl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Pp=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?yp(t,s,o):e==="style"?Ep(t,n,s):Vi(e)?_o(e)||Ip(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Op(t,e,s,o))?(zl(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kl(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ce(s))?zl(t,st(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Kl(t,e,s,o))};function Op(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xl(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Xl(e)&&Ce(n)?!1:e in t}const Cu=new WeakMap,bu=new WeakMap,vi=Symbol("_moveCb"),Jl=Symbol("_enterCb"),Dp=t=>(delete t.props.mode,t),kp=Dp({name:"TransitionGroup",props:Ee({},pp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=sp(),s=rd();let i,r;return qc(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Vp(i[0].el,n.vnode.el,o)){i=[];return}i.forEach(Lp),i.forEach(Fp);const l=i.filter(Bp);jr(),l.forEach(a=>{const c=a.el,u=c.style;gt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=c[vi]=f=>{f&&f.target!==c||(!f||/transform$/.test(f.propertyName))&&(c.removeEventListener("transitionend",h),c[vi]=null,Ht(c,o))};c.addEventListener("transitionend",h)}),i=[]}),()=>{const o=X(t),l=_p(o);let a=o.tag||Be;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),Rs(u,Fr(u,l,s,n)),Cu.set(u,u.el.getBoundingClientRect()))}r=e.default?Hc(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Rs(u,Fr(u,l,s,n))}return Re(a,null,r)}}}),Mp=kp;function Lp(t){const e=t.el;e[vi]&&e[vi](),e[Jl]&&e[Jl]()}function Fp(t){bu.set(t,t.el.getBoundingClientRect())}function Bp(t){const e=Cu.get(t),n=bu.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Vp(t,e,n){const s=t.cloneNode(),i=t[$n];i&&i.forEach(l=>{l.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=vu(s);return r.removeChild(s),o}const Ci=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>ri(e,n):e};function $p(t){t.target.composing=!0}function Zl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mn=Symbol("_assign"),ts={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Mn]=Ci(i);const r=s||i.props&&i.props.type==="number";ln(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Or(l)),t[Mn](l)}),n&&ln(t,"change",()=>{t.value=t.value.trim()}),e||(ln(t,"compositionstart",$p),ln(t,"compositionend",Zl),ln(t,"change",Zl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Mn]=Ci(o),t.composing)return;const l=(r||t.type==="number")&&!/^0\d/.test(t.value)?Or(t.value):t.value,a=e??"";l!==a&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===a)||(t.value=a))}},Hp={deep:!0,created(t,e,n){t[Mn]=Ci(n),ln(t,"change",()=>{const s=t._modelValue,i=Up(t),r=t.checked,o=t[Mn];if($(s)){const l=_c(s,i),a=l!==-1;if(r&&!a)o(s.concat(i));else if(!r&&a){const c=[...s];c.splice(l,1),o(c)}}else if(mo(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(Eu(t,r))})},mounted:ea,beforeUpdate(t,e,n){t[Mn]=Ci(n),ea(t,e,n)}};function ea(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if($(e))i=_c(e,s.props.value)>-1;else if(mo(e))i=e.has(s.props.value);else{if(e===n)return;i=Wi(e,Eu(t,!0))}t.checked!==i&&(t.checked=i)}function Up(t){return"_value"in t?t._value:t.value}function Eu(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Wp=["ctrl","shift","alt","meta"],jp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Wp.some(n=>t[`${n}Key`]&&!e.includes(n))},Gp=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=jp[e[o]];if(l&&l(i,e))return}return t(i,...r)})},qp=Ee({patchProp:Pp},dp);let ta;function Kp(){return ta||(ta=kd(qp))}const zp=(...t)=>{const e=Kp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Qp(s);if(!i)return;const r=e._component;!W(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Yp(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Yp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qp(t){return Ce(t)?document.querySelector(t):t}const yn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Xp={};function Jp(t,e){const n=md("router-view");return Ne(),No(n)}const Zp=yn(Xp,[["render",Jp]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof document<"u";function wu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function e_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wu(t.default)}const te=Object.assign;function yr(t,e){const n={};for(const s in e){const i=e[s];n[s]=ut(i)?i.map(t):t(i)}return n}const gs=()=>{},ut=Array.isArray,Su=/#/g,t_=/&/g,n_=/\//g,s_=/=/g,i_=/\?/g,Iu=/\+/g,r_=/%5B/g,o_=/%5D/g,Tu=/%5E/g,l_=/%60/g,Ru=/%7B/g,a_=/%7C/g,xu=/%7D/g,c_=/%20/g;function Oo(t){return encodeURI(""+t).replace(a_,"|").replace(r_,"[").replace(o_,"]")}function u_(t){return Oo(t).replace(Ru,"{").replace(xu,"}").replace(Tu,"^")}function Gr(t){return Oo(t).replace(Iu,"%2B").replace(c_,"+").replace(Su,"%23").replace(t_,"%26").replace(l_,"`").replace(Ru,"{").replace(xu,"}").replace(Tu,"^")}function h_(t){return Gr(t).replace(s_,"%3D")}function f_(t){return Oo(t).replace(Su,"%23").replace(i_,"%3F")}function d_(t){return t==null?"":f_(t).replace(n_,"%2F")}function Ns(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const p_=/\/$/,__=t=>t.replace(p_,"");function vr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=v_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Ns(o)}}function g_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function na(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function m_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Hn(e.matched[s],n.matched[i])&&Au(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Au(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!y_(t[n],e[n]))return!1;return!0}function y_(t,e){return ut(t)?sa(t,e):ut(e)?sa(e,t):t===e}function sa(t,e){return ut(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function v_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ps;(function(t){t.pop="pop",t.push="push"})(Ps||(Ps={}));var ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ms||(ms={}));function C_(t){if(!t)if(xn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),__(t)}const b_=/^[^#]+#/;function E_(t,e){return t.replace(b_,"#")+e}function w_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Xi=()=>({left:window.scrollX,top:window.scrollY});function S_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=w_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ia(t,e){return(history.state?history.state.position-e:-1)+t}const qr=new Map;function I_(t,e){qr.set(t,e)}function T_(t){const e=qr.get(t);return qr.delete(t),e}let R_=()=>location.protocol+"//"+location.host;function Nu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),na(a,"")}return na(n,t)+s+i}function x_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const d=Nu(t,location),m=n.value,y=e.value;let P=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}P=y?f.position-y.position:0}else s(d);i.forEach(O=>{O(n.value,m,{delta:P,type:Ps.pop,direction:P?P>0?ms.forward:ms.back:ms.unknown})})};function a(){o=n.value}function c(f){i.push(f);const d=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(te({},f.state,{scroll:Xi()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:h}}function ra(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Xi():null}}function A_(t){const{history:e,location:n}=window,s={value:Nu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:R_()+t+a;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(a,c){const u=te({},e.state,ra(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=te({},i.value,e.state,{forward:a,scroll:Xi()});r(u.current,u,!0);const h=te({},ra(s.value,a,null),{position:u.position+1},c);r(a,h,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function N_(t){t=C_(t);const e=A_(t),n=x_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=te({location:"",base:t,go:s,createHref:E_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function P_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),N_(t)}function O_(t){return typeof t=="string"||t&&typeof t=="object"}function Pu(t){return typeof t=="string"||typeof t=="symbol"}const Ou=Symbol("");var oa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oa||(oa={}));function Un(t,e){return te(new Error,{type:t,[Ou]:!0},e)}function wt(t,e){return t instanceof Error&&Ou in t&&(e==null||!!(t.type&e))}const la="[^/]+?",D_={sensitive:!1,strict:!1,start:!0,end:!0},k_=/[.+*?^${}()[\]/\\]/g;function M_(t,e){const n=te({},D_,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(k_,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:y,optional:P,regexp:O}=f;r.push({name:m,repeatable:y,optional:P});const N=O||la;if(N!==la){d+=10;try{new RegExp(`(${N})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${N}): `+D.message)}}let M=y?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(M=P&&c.length<2?`(?:/${M})`:"/"+M),P&&(M+="?"),i+=M,d+=20,P&&(d+=-8),y&&(d+=-20),N===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=r[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function a(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:y,optional:P}=d,O=m in c?c[m]:"";if(ut(O)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const N=ut(O)?O.join("/"):O;if(!N)if(P)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function L_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Du(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=L_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(aa(s))return 1;if(aa(i))return-1}return i.length-s.length}function aa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const F_={type:0,value:""},B_=/[a-zA-Z0-9_]/;function V_(t){if(!t)return[[]];if(t==="/")return[[F_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&h(),o()):a===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:B_.test(a)?f():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function $_(t,e,n){const s=M_(V_(t.path),n),i=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function H_(t,e){const n=[],s=new Map;e=fa({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,f,d){const m=!d,y=ua(h);y.aliasOf=d&&d.record;const P=fa(e,h),O=[y];if("alias"in h){const D=typeof h.alias=="string"?[h.alias]:h.alias;for(const Y of D)O.push(ua(te({},y,{components:d?d.record.components:y.components,path:Y,aliasOf:d?d.record:y})))}let N,M;for(const D of O){const{path:Y}=D;if(f&&Y[0]!=="/"){const le=f.record.path,re=le[le.length-1]==="/"?"":"/";D.path=f.record.path+(Y&&re+Y)}if(N=$_(D,f,P),d?d.alias.push(N):(M=M||N,M!==N&&M.alias.push(N),m&&h.name&&!ha(N)&&o(h.name)),ku(N)&&a(N),y.children){const le=y.children;for(let re=0;re<le.length;re++)r(le[re],N,d&&d.children[re])}d=d||N}return M?()=>{o(M)}:gs}function o(h){if(Pu(h)){const f=s.get(h);f&&(s.delete(h),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(h);f>-1&&(n.splice(f,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function l(){return n}function a(h){const f=j_(h,n);n.splice(f,0,h),h.record.name&&!ha(h)&&s.set(h.record.name,h)}function c(h,f){let d,m={},y,P;if("name"in h&&h.name){if(d=s.get(h.name),!d)throw Un(1,{location:h});P=d.record.name,m=te(ca(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),h.params&&ca(h.params,d.keys.map(M=>M.name))),y=d.stringify(m)}else if(h.path!=null)y=h.path,d=n.find(M=>M.re.test(y)),d&&(m=d.parse(y),P=d.record.name);else{if(d=f.name?s.get(f.name):n.find(M=>M.re.test(f.path)),!d)throw Un(1,{location:h,currentLocation:f});P=d.record.name,m=te({},f.params,h.params),y=d.stringify(m)}const O=[];let N=d;for(;N;)O.unshift(N.record),N=N.parent;return{name:P,path:y,params:m,matched:O,meta:W_(O)}}t.forEach(h=>r(h));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:i}}function ca(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ua(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:U_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function U_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function ha(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function W_(t){return t.reduce((e,n)=>te(e,n.meta),{})}function fa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function j_(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Du(t,e[r])<0?s=r:n=r+1}const i=G_(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function G_(t){let e=t;for(;e=e.parent;)if(ku(e)&&Du(t,e)===0)return e}function ku({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function q_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Iu," "),o=r.indexOf("="),l=Ns(o<0?r:r.slice(0,o)),a=o<0?null:Ns(r.slice(o+1));if(l in e){let c=e[l];ut(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function da(t){let e="";for(let n in t){const s=t[n];if(n=h_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ut(s)?s.map(r=>r&&Gr(r)):[s&&Gr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function K_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ut(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const z_=Symbol(""),pa=Symbol(""),Do=Symbol(""),Mu=Symbol(""),Kr=Symbol("");function ns(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jt(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const c=f=>{f===!1?a(Un(4,{from:n,to:e})):f instanceof Error?a(f):O_(f)?a(Un(2,{from:e,to:f})):(o&&s.enterCallbacks[i]===o&&typeof f=="function"&&o.push(f),l())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(f=>a(f))})}function Cr(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(wu(a)){const u=(a.__vccOpts||a)[e];u&&r.push(jt(u,n,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const h=e_(u)?u.default:u;o.mods[l]=u,o.components[l]=h;const d=(h.__vccOpts||h)[e];return d&&jt(d,n,s,o,l,i)()}))}}return r}function _a(t){const e=xt(Do),n=xt(Mu),s=Je(()=>{const a=On(t.to);return e.resolve(a)}),i=Je(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Hn.bind(null,u));if(f>-1)return f;const d=ga(a[c-2]);return c>1&&ga(u)===d&&h[h.length-1].path!==d?h.findIndex(Hn.bind(null,a[c-2])):f}),r=Je(()=>i.value>-1&&Z_(n.params,s.value.params)),o=Je(()=>i.value>-1&&i.value===n.matched.length-1&&Au(n.params,s.value.params));function l(a={}){if(J_(a)){const c=e[On(t.replace)?"replace":"push"](On(t.to)).catch(gs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:Je(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}function Y_(t){return t.length===1?t[0]:t}const Q_=mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_a,setup(t,{slots:e}){const n=Gi(_a(t)),{options:s}=xt(Do),i=Je(()=>({[ma(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ma(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Y_(e.default(n));return t.custom?r:gu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),X_=Q_;function J_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Z_(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ut(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ga(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ma=(t,e,n)=>t??e??n,eg=mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=xt(Kr),i=Je(()=>t.route||s.value),r=xt(pa,0),o=Je(()=>{let c=On(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),l=Je(()=>i.value.matched[o.value]);oi(pa,Je(()=>o.value+1)),oi(z_,l),oi(Kr,i);const a=vt();return ps(()=>[a.value,l.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Hn(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return ya(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,P=gu(f,te({},m,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ya(n.default,{Component:P,route:c})||P}}});function ya(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tg=eg;function ng(t){const e=H_(t.routes,t),n=t.parseQuery||q_,s=t.stringifyQuery||da,i=t.history,r=ns(),o=ns(),l=ns(),a=Kf($t);let c=$t;xn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yr.bind(null,C=>""+C),h=yr.bind(null,d_),f=yr.bind(null,Ns);function d(C,k){let x,F;return Pu(C)?(x=e.getRecordMatcher(C),F=k):F=C,e.addRoute(F,x)}function m(C){const k=e.getRecordMatcher(C);k&&e.removeRoute(k)}function y(){return e.getRoutes().map(C=>C.record)}function P(C){return!!e.getRecordMatcher(C)}function O(C,k){if(k=te({},k||a.value),typeof C=="string"){const g=vr(n,C,k.path),v=e.resolve({path:g.path},k),E=i.createHref(g.fullPath);return te(g,v,{params:f(v.params),hash:Ns(g.hash),redirectedFrom:void 0,href:E})}let x;if(C.path!=null)x=te({},C,{path:vr(n,C.path,k.path).path});else{const g=te({},C.params);for(const v in g)g[v]==null&&delete g[v];x=te({},C,{params:h(g)}),k.params=h(k.params)}const F=e.resolve(x,k),ae=C.hash||"";F.params=u(f(F.params));const p=g_(s,te({},C,{hash:u_(ae),path:F.path})),_=i.createHref(p);return te({fullPath:p,hash:ae,query:s===da?K_(C.query):C.query||{}},F,{redirectedFrom:void 0,href:_})}function N(C){return typeof C=="string"?vr(n,C,a.value.path):te({},C)}function M(C,k){if(c!==C)return Un(8,{from:k,to:C})}function D(C){return re(C)}function Y(C){return D(te(N(C),{replace:!0}))}function le(C){const k=C.matched[C.matched.length-1];if(k&&k.redirect){const{redirect:x}=k;let F=typeof x=="function"?x(C):x;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=N(F):{path:F},F.params={}),te({query:C.query,hash:C.hash,params:F.path!=null?{}:C.params},F)}}function re(C,k){const x=c=O(C),F=a.value,ae=C.state,p=C.force,_=C.replace===!0,g=le(x);if(g)return re(te(N(g),{state:typeof g=="object"?te({},ae,g.state):ae,force:p,replace:_}),k||x);const v=x;v.redirectedFrom=k;let E;return!p&&m_(s,F,x)&&(E=Un(16,{to:v,from:F}),ht(F,F,!0,!1)),(E?Promise.resolve(E):se(v,F)).catch(b=>wt(b)?wt(b,2)?b:Bt(b):ee(b,v,F)).then(b=>{if(b){if(wt(b,2))return re(te({replace:_},N(b.to),{state:typeof b.to=="object"?te({},ae,b.to.state):ae,force:p}),k||v)}else b=L(v,F,!0,_,ae);return he(v,F,b),b})}function Oe(C,k){const x=M(C,k);return x?Promise.reject(x):Promise.resolve()}function j(C){const k=bn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(C):C()}function se(C,k){let x;const[F,ae,p]=sg(C,k);x=Cr(F.reverse(),"beforeRouteLeave",C,k);for(const g of F)g.leaveGuards.forEach(v=>{x.push(jt(v,C,k))});const _=Oe.bind(null,C,k);return x.push(_),et(x).then(()=>{x=[];for(const g of r.list())x.push(jt(g,C,k));return x.push(_),et(x)}).then(()=>{x=Cr(ae,"beforeRouteUpdate",C,k);for(const g of ae)g.updateGuards.forEach(v=>{x.push(jt(v,C,k))});return x.push(_),et(x)}).then(()=>{x=[];for(const g of p)if(g.beforeEnter)if(ut(g.beforeEnter))for(const v of g.beforeEnter)x.push(jt(v,C,k));else x.push(jt(g.beforeEnter,C,k));return x.push(_),et(x)}).then(()=>(C.matched.forEach(g=>g.enterCallbacks={}),x=Cr(p,"beforeRouteEnter",C,k,j),x.push(_),et(x))).then(()=>{x=[];for(const g of o.list())x.push(jt(g,C,k));return x.push(_),et(x)}).catch(g=>wt(g,8)?g:Promise.reject(g))}function he(C,k,x){l.list().forEach(F=>j(()=>F(C,k,x)))}function L(C,k,x,F,ae){const p=M(C,k);if(p)return p;const _=k===$t,g=xn?history.state:{};x&&(F||_?i.replace(C.fullPath,te({scroll:_&&g&&g.scroll},ae)):i.push(C.fullPath,ae)),a.value=C,ht(C,k,x,_),Bt()}let Z;function we(){Z||(Z=i.listen((C,k,x)=>{if(!Js.listening)return;const F=O(C),ae=le(F);if(ae){re(te(ae,{replace:!0,force:!0}),F).catch(gs);return}c=F;const p=a.value;xn&&I_(ia(p.fullPath,x.delta),Xi()),se(F,p).catch(_=>wt(_,12)?_:wt(_,2)?(re(te(N(_.to),{force:!0}),F).then(g=>{wt(g,20)&&!x.delta&&x.type===Ps.pop&&i.go(-1,!1)}).catch(gs),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ee(_,F,p))).then(_=>{_=_||L(F,p,!1),_&&(x.delta&&!wt(_,8)?i.go(-x.delta,!1):x.type===Ps.pop&&wt(_,20)&&i.go(-1,!1)),he(F,p,_)}).catch(gs)}))}let ze=ns(),ve=ns(),oe;function ee(C,k,x){Bt(C);const F=ve.list();return F.length?F.forEach(ae=>ae(C,k,x)):console.error(C),Promise.reject(C)}function bt(){return oe&&a.value!==$t?Promise.resolve():new Promise((C,k)=>{ze.add([C,k])})}function Bt(C){return oe||(oe=!C,we(),ze.list().forEach(([k,x])=>C?x(C):k()),ze.reset()),C}function ht(C,k,x,F){const{scrollBehavior:ae}=t;if(!xn||!ae)return Promise.resolve();const p=!x&&T_(ia(C.fullPath,0))||(F||!x)&&history.state&&history.state.scroll||null;return Mc().then(()=>ae(C,k,p)).then(_=>_&&S_(_)).catch(_=>ee(_,C,k))}const Ve=C=>i.go(C);let Cn;const bn=new Set,Js={currentRoute:a,listening:!0,addRoute:d,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:y,resolve:O,options:t,push:D,replace:Y,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:ve.add,isReady:bt,install(C){const k=this;C.component("RouterLink",X_),C.component("RouterView",tg),C.config.globalProperties.$router=k,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>On(a)}),xn&&!Cn&&a.value===$t&&(Cn=!0,D(i.location).catch(ae=>{}));const x={};for(const ae in $t)Object.defineProperty(x,ae,{get:()=>a.value[ae],enumerable:!0});C.provide(Do,k),C.provide(Mu,Nc(x)),C.provide(Kr,a);const F=C.unmount;bn.add(C),C.unmount=function(){bn.delete(C),bn.size<1&&(c=$t,Z&&Z(),Z=null,a.value=$t,Cn=!1,oe=!1),F()}}};function et(C){return C.reduce((k,x)=>k.then(()=>j(x)),Promise.resolve())}return Js}function sg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>Hn(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>Hn(c,a))||i.push(a))}return[n,s,i]}const ig="/imageViewer/assets/01-DPVgT_od.png",rg="/imageViewer/assets/02-CBNs6ilE.png",og="/imageViewer/assets/01-DPVgT_od.png",lg="/imageViewer/assets/02-CBNs6ilE.png",ag="/imageViewer/assets/01-DPVgT_od.png",cg="/imageViewer/assets/02-CBNs6ilE.png",ug="/imageViewer/assets/01-DPVgT_od.png",hg="/imageViewer/assets/02-CBNs6ilE.png",fg="/imageViewer/assets/01-DPVgT_od.png",dg="/imageViewer/assets/02-CBNs6ilE.png",pg="/imageViewer/assets/01-DPVgT_od.png",_g="/imageViewer/assets/02-CBNs6ilE.png",gg="/imageViewer/assets/01-DPVgT_od.png",mg="/imageViewer/assets/02-CBNs6ilE.png",yg="/imageViewer/assets/01-DPVgT_od.png",vg="/imageViewer/assets/02-CBNs6ilE.png",Cg="/imageViewer/assets/01-DPVgT_od.png",bg="/imageViewer/assets/02-CBNs6ilE.png",Eg="/imageViewer/assets/01-DPVgT_od.png",wg="/imageViewer/assets/02-CBNs6ilE.png",Sg={class:"grid-container"},Ig=["onClick"],Tg=mn({__name:"ImageGrid",setup(t){const e=vt([]),n=vt([]);Gc(()=>{const i=[];for(let r=1;r<=20;r++){const o=r.toString().padStart(2,"0")+".png",l=new URL(Object.assign({"../assets/images/card/01.png":ig,"../assets/images/card/02.png":rg,"../assets/images/card/03.png":og,"../assets/images/card/04.png":lg,"../assets/images/card/05.png":ag,"../assets/images/card/06.png":cg,"../assets/images/card/07.png":ug,"../assets/images/card/08.png":hg,"../assets/images/card/09.png":fg,"../assets/images/card/10.png":dg,"../assets/images/card/11.png":pg,"../assets/images/card/12.png":_g,"../assets/images/card/13.png":gg,"../assets/images/card/14.png":mg,"../assets/images/card/15.png":yg,"../assets/images/card/16.png":vg,"../assets/images/card/17.png":Cg,"../assets/images/card/18.png":bg,"../assets/images/card/19.png":Eg,"../assets/images/card/20.png":wg})[`../assets/images/card/${o}`],import.meta.url).href;i.push(l)}e.value=i,n.value=Array(i.length).fill(!1)});function s(i){n.value[i]=!n.value[i]}return(i,r)=>(Ne(),Ue("div",Sg,[(Ne(!0),Ue(Be,null,_i(e.value,(o,l)=>(Ne(),Ue("div",{key:l,class:"grid-item",style:Kn({backgroundImage:`url(${o})`,filter:n.value[l]?"brightness(100%)":"brightness(50%)"}),onClick:a=>s(l)},null,12,Ig))),128))]))}}),Rg=yn(Tg,[["__scopeId","data-v-a9fbd778"]]),xg={class:"container"},Ag={__name:"IV0001",setup(t){return(e,n)=>(Ne(),Ue("div",xg,[Re(Rg)]))}},Ng=yn(Ag,[["__scopeId","data-v-0adaf485"]]),Pg="/imageViewer/assets/setting-DoZuKjkl.png",Og=()=>{};var va={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw zn(e)},zn=function(t){return new Error("Firebase Database ("+Lu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ko={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,d=c&63;a||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw new kg;const f=r<<2|l>>4;if(s.push(f),c!==64){const d=l<<4&240|c>>2;if(s.push(d),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bu=function(t){const e=Fu(t);return ko.encodeByteArray(e,!0)},bi=function(t){return Bu(t).replace(/\./g,"")},zr=function(t){try{return ko.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return Vu(void 0,t)}function Vu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lg(n)||(t[n]=Vu(t[n],e[n]));return t}function Lg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=()=>Fg().__FIREBASE_DEFAULTS__,Vg=()=>{if(typeof process>"u"||typeof va>"u")return;const t=va.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$g=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zr(t[1]);return e&&JSON.parse(e)},$u=()=>{try{return Og()||Bg()||Vg()||$g()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>{var e,n;return(n=(e=$u())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ug=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hu=()=>{var t;return(t=$u())==null?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wg(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bi(JSON.stringify(n)),bi(JSON.stringify(o)),""].join(".")}const ys={};function Gg(){const t={prod:[],emulator:[]};for(const e of Object.keys(ys))ys[e]?t.emulator.push(e):t.prod.push(e);return t}function qg(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ca=!1;function Kg(t,e){if(typeof window>"u"||typeof document>"u"||!Mo(window.location.host)||ys[t]===e||ys[t]||Ca)return;ys[t]=e;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=Gg().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function a(f,d){f.setAttribute("width","24"),f.setAttribute("id",d),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function c(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Ca=!0,o()},f}function u(f,d){f.setAttribute("id",d),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function h(){const f=qg(s),d=n("text"),m=document.getElementById(d)||document.createElement("span"),y=n("learnmore"),P=document.getElementById(y)||document.createElement("a"),O=n("preprendIcon"),N=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const M=f.element;l(M),u(P,y);const D=c();a(N,O),M.append(N,m,P,D),document.body.appendChild(M)}r?(m.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",d)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zg())}function Yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qg(){return Lu.NODE_ADMIN===!0}function Xg(){try{return typeof indexedDB=="object"}catch{return!1}}function Jg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="FirebaseError";class Gs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zg,Object.setPrototypeOf(this,Gs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wu.prototype.create)}}class Wu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?em(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Gs(i,l,s)}}function em(t,e){return t.replace(tm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Os(zr(r[0])||""),n=Os(zr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},nm=function(t){const e=ju(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sm=function(t){const e=ju(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Wn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ba(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ei(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ea(r)&&Ea(o)){if(!wi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ea(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Lo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){return t&&t._delegate?t._delegate:t}class Ds{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ji;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cm(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:am(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function am(t){return t===rn?void 0:t}function cm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const hm={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},fm=pe.INFO,dm={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},pm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=dm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gu{constructor(e){this.name=e,this._logLevel=fm,this._logHandler=pm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const _m=(t,e)=>e.some(n=>t instanceof n);let wa,Sa;function gm(){return wa||(wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mm(){return Sa||(Sa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,Yr=new WeakMap,Ku=new WeakMap,br=new WeakMap,Fo=new WeakMap;function ym(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qu.set(n,t)}).catch(()=>{}),Fo.set(e,t),e}function vm(t){if(Yr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yr.set(t,e)}let Qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ku.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cm(t){Qr=t(Qr)}function bm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Er(this),e,...n);return Ku.set(s,e.sort?e.sort():[e]),qt(s)}:mm().includes(t)?function(...e){return t.apply(Er(this),e),qt(qu.get(this))}:function(...e){return qt(t.apply(Er(this),e))}}function Em(t){return typeof t=="function"?bm(t):(t instanceof IDBTransaction&&vm(t),_m(t,gm())?new Proxy(t,Qr):t)}function qt(t){if(t instanceof IDBRequest)return ym(t);if(br.has(t))return br.get(t);const e=Em(t);return e!==t&&(br.set(t,e),Fo.set(e,t)),e}const Er=t=>Fo.get(t);function wm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=qt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(qt(o.result),a.oldVersion,a.newVersion,qt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Sm=["get","getKey","getAll","getAllKeys","count"],Im=["put","add","delete","clear"],wr=new Map;function Ia(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wr.get(e))return wr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Im.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sm.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return wr.set(e,r),r}Cm(t=>({...t,get:(e,n,s)=>Ia(e,n)||t.get(e,n,s),has:(e,n)=>!!Ia(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xr="@firebase/app",Ta="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Gu("@firebase/app"),xm="@firebase/app-compat",Am="@firebase/analytics-compat",Nm="@firebase/analytics",Pm="@firebase/app-check-compat",Om="@firebase/app-check",Dm="@firebase/auth",km="@firebase/auth-compat",Mm="@firebase/database",Lm="@firebase/data-connect",Fm="@firebase/database-compat",Bm="@firebase/functions",Vm="@firebase/functions-compat",$m="@firebase/installations",Hm="@firebase/installations-compat",Um="@firebase/messaging",Wm="@firebase/messaging-compat",jm="@firebase/performance",Gm="@firebase/performance-compat",qm="@firebase/remote-config",Km="@firebase/remote-config-compat",zm="@firebase/storage",Ym="@firebase/storage-compat",Qm="@firebase/firestore",Xm="@firebase/ai",Jm="@firebase/firestore-compat",Zm="firebase",ey="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="[DEFAULT]",ty={[Xr]:"fire-core",[xm]:"fire-core-compat",[Nm]:"fire-analytics",[Am]:"fire-analytics-compat",[Om]:"fire-app-check",[Pm]:"fire-app-check-compat",[Dm]:"fire-auth",[km]:"fire-auth-compat",[Mm]:"fire-rtdb",[Lm]:"fire-data-connect",[Fm]:"fire-rtdb-compat",[Bm]:"fire-fn",[Vm]:"fire-fn-compat",[$m]:"fire-iid",[Hm]:"fire-iid-compat",[Um]:"fire-fcm",[Wm]:"fire-fcm-compat",[jm]:"fire-perf",[Gm]:"fire-perf-compat",[qm]:"fire-rc",[Km]:"fire-rc-compat",[zm]:"fire-gcs",[Ym]:"fire-gcs-compat",[Qm]:"fire-fst",[Jm]:"fire-fst-compat",[Xm]:"fire-vertex","fire-js":"fire-js",[Zm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Map,ny=new Map,Zr=new Map;function Ra(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(Zr.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Zr.set(e,t);for(const n of Si.values())Ra(n,t);for(const n of ny.values())Ra(n,t);return!0}function sy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function iy(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new Wu("app","Firebase",ry);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=ey;function zu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Jr,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(n||(n=Hu()),!n)throw Kt.create("no-options");const r=Si.get(i);if(r){if(wi(n,r.options)&&wi(s,r.config))return r;throw Kt.create("duplicate-app",{appName:i})}const o=new um(i);for(const a of Zr.values())o.addComponent(a);const l=new oy(n,s,o);return Si.set(i,l),l}function ay(t=Jr){const e=Si.get(t);if(!e&&t===Jr&&Hu())return zu();if(!e)throw Kt.create("no-app",{appName:t});return e}function Ln(t,e,n){let s=ty[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(o.join(" "));return}Ii(new Ds(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="firebase-heartbeat-database",uy=1,ks="firebase-heartbeat-store";let Sr=null;function Yu(){return Sr||(Sr=wm(cy,uy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kt.create("idb-open",{originalErrorMessage:t.message})})),Sr}async function hy(t){try{const n=(await Yu()).transaction(ks),s=await n.objectStore(ks).get(Qu(t));return await n.done,s}catch(e){if(e instanceof Gs)Dt.warn(e.message);else{const n=Kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function xa(t,e){try{const s=(await Yu()).transaction(ks,"readwrite");await s.objectStore(ks).put(e,Qu(t)),await s.done}catch(n){if(n instanceof Gs)Dt.warn(n.message);else{const s=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(s.message)}}}function Qu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=1024,dy=30;class py{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Aa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>dy){const o=my(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Dt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Aa(),{heartbeatsToSend:s,unsentEntries:i}=_y(this._heartbeatsCache.heartbeats),r=bi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Dt.warn(n),""}}}function Aa(){return new Date().toISOString().substring(0,10)}function _y(t,e=fy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Na(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Na(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class gy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xg()?Jg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return xa(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Na(t){return bi(JSON.stringify({version:2,heartbeats:t})).length}function my(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){Ii(new Ds("platform-logger",e=>new Tm(e),"PRIVATE")),Ii(new Ds("heartbeat",e=>new py(e),"PRIVATE")),Ln(Xr,Ta,t),Ln(Xr,Ta,"esm2020"),Ln("fire-js","")}yy("");var vy="firebase",Cy="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(vy,Cy,"app");var Pa={};const Oa="@firebase/database",Da="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu="";function by(t){Xu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ey(e)}}catch{}return new wy},an=Ju("localStorage"),Sy=Ju("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Gu("@firebase/database"),Iy=function(){let t=1;return function(){return t++}}(),Zu=function(t){const e=om(t),n=new rm;n.update(e);const s=n.digest();return ko.encodeByteArray(s)},Ks=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ks.apply(null,s):typeof s=="object"?e+=Te(s):e+=s,e+=" "}return e};let vs=null,ka=!0;const Ty=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Fn.logLevel=pe.VERBOSE,vs=Fn.log.bind(Fn)},ke=function(...t){if(ka===!0&&(ka=!1,vs===null&&Sy.get("logging_enabled")===!0&&Ty()),vs){const e=Ks.apply(null,t);vs(e)}},zs=function(t){return function(...e){ke(t,...e)}},eo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ks(...t);Fn.error(e)},kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ks(...t)}`;throw Fn.error(e),new Error(e)},qe=function(...t){const e="FIREBASE WARNING: "+Ks(...t);Fn.warn(e)},Ry=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},eh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jn="[MIN_NAME]",fn="[MAX_NAME]",Yn=function(t,e){if(t===e)return 0;if(t===jn||e===fn)return-1;if(e===jn||t===fn)return 1;{const n=Ma(t),s=Ma(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ay=function(t,e){return t===e?0:t<e?-1:1},ss=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Bo=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Te(e[s]),n+=":",n+=Bo(t[e[s]]);return n+="}",n},th=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ke(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nh=function(t){S(!eh(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Ny=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Py=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Oy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Dy=new RegExp("^-?(0*)\\d{1,10}$"),ky=-2147483648,My=2147483647,Ma=function(t){if(Dy.test(t)){const e=Number(t);if(e>=ky&&e<=My)return e}return null},Qn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Ly=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Cs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,iy(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qe(e)}}class ci{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ci.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="5",sh="v",ih="s",rh="r",oh="f",lh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ah="ls",ch="p",to="ac",uh="websocket",hh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=an.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&an.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Vy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function dh(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===uh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Vy(t)&&(n.ns=t.namespace);const i=[];return Ke(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.counters_={}}incrementCounter(e,n=1){Ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Mg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={},Tr={};function $o(t){const e=t.toString();return Ir[e]||(Ir[e]=new $y),Ir[e]}function Hy(t,e){const n=t.toString();return Tr[n]||(Tr[n]=e()),Tr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Qn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="start",Wy="close",jy="pLPCommand",Gy="pRTLPCB",ph="id",_h="pw",gh="ser",qy="cb",Ky="seg",zy="ts",Yy="d",Qy="dframe",mh=1870,yh=30,Xy=mh-yh,Jy=25e3,Zy=3e4;class An{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=zs(e),this.stats_=$o(n),this.urlFn=a=>(this.appCheckToken&&(a[to]=this.appCheckToken),dh(n,hh,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Uy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zy)),xy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ho((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===La)this.id=l,this.password=a;else if(o===Wy)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[La]="t",s[gh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sh]=Vo,this.transportSessionId&&(s[ih]=this.transportSessionId),this.lastSessionId&&(s[ah]=this.lastSessionId),this.applicationId&&(s[ch]=this.applicationId),this.appCheckToken&&(s[to]=this.appCheckToken),typeof location<"u"&&location.hostname&&lh.test(location.hostname)&&(s[rh]=oh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){An.forceAllow_=!0}static forceDisallow(){An.forceDisallow_=!0}static isAvailable(){return An.forceAllow_?!0:!An.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ny()&&!Py()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Bu(n),i=th(s,Xy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Qy]="t",s[ph]=e,s[_h]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ho{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Iy(),window[jy+this.uniqueCallbackIdentifier]=e,window[Gy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ho.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ph]=this.myID,e[_h]=this.myPW,e[gh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yh+s.length<=mh;){const o=this.pendingSegs.shift();s=s+"&"+Ky+i+"="+o.seg+"&"+zy+i+"="+o.ts+"&"+Yy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Jy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=16384,tv=45e3;let Ti=null;typeof MozWebSocket<"u"?Ti=MozWebSocket:typeof WebSocket<"u"&&(Ti=WebSocket);class it{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=zs(this.connId),this.stats_=$o(n),this.connURL=it.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[sh]=Vo,typeof location<"u"&&location.hostname&&lh.test(location.hostname)&&(o[rh]=oh),n&&(o[ih]=n),s&&(o[ah]=s),i&&(o[to]=i),r&&(o[ch]=r),dh(e,uh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,an.set("previous_websocket_failure",!0);try{let s;Qg(),this.mySock=new Ti(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ti!==null&&!it.forceDisallow_}static previouslyFailed(){return an.isInMemoryStorage||an.get("previous_websocket_failure")===!0}markConnectionHealthy(){an.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=th(n,ev);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{static get ALL_TRANSPORTS(){return[An,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=it&&it.isAvailable();let s=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[it];else{const i=this.transports_=[];for(const r of Ms.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=6e4,sv=5e3,iv=10*1024,rv=100*1024,Rr="t",Fa="d",ov="s",Ba="r",lv="e",Va="o",$a="a",Ha="n",Ua="p",av="h";class cv{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=zs("c:"+this.id+":"),this.transportManager_=new Ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Rr in e){const n=e[Rr];n===$a?this.upgradeIfSecondaryHealthy_():n===Ba?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Va&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ss("t",e),s=ss("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ua,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$a,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ha,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ss("t",e),s=ss("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ss(Rr,e);if(Fa in e){const s=e[Fa];if(n===av){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ha){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ov?this.onConnectionShutdown_(s):n===Ba?this.onReset_(s):n===lv?eo("Server Error: "+s):n===Va?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):eo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vo!==s&&qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ua,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(an.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends Ch{static getInstance(){return new Ri}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=32,ja=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ue("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xt(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function bh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uv(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Eh(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function wh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function be(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function je(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return je(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Uo(t,e){if(Xt(t)!==Xt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function rt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Xt(t)>Xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class hv{constructor(e,n){this.errorPrefix_=n,this.parts_=Eh(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zi(this.parts_[s]);Sh(this)}}function fv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zi(e),Sh(t)}function dv(t){const e=t.parts_.pop();t.byteLength_-=Zi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Sh(t){if(t.byteLength_>ja)throw new Error(t.errorPrefix_+"has a key path longer than "+ja+" bytes ("+t.byteLength_+").");if(t.parts_.length>Wa)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Wa+") or object contains a cycle "+on(t))}function on(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Ch{static getInstance(){return new Wo}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=1e3,pv=60*5*1e3,Ga=30*1e3,_v=1.3,gv=3e4,mv="server_kill",qa=3;class At extends vh{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=At.nextPersistentConnectionId_++,this.log_=zs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=is,this.maxReconnectDelay_=pv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Te(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Ji,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;At.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ft(e,"w")){const s=Wn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ga)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):eo("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gv&&(this.reconnectDelay_=is),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_v)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+At.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new cv(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{qe(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(mv)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qe(h),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ba(this.interruptReasons_)&&(this.reconnectDelay_=is,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Bo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qa&&(this.reconnectDelay_=Ga,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qa&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xu.replace(/\./g,"-")]=1,Uu()?e["framework.cordova"]=1:Yg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ri.getInstance().currentlyOnline();return ba(this.interruptReasons_)&&e}}At.nextPersistentConnectionId_=0;At.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new K(jn,e),i=new K(jn,n);return this.compare(s,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class Ih extends er{static get __EMPTY_NODE(){return si}static set __EMPTY_NODE(e){si=e}compare(e,n){return Yn(e.name,n.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(fn,si)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,si)}toString(){return".key"}}const Bn=new Ih;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ie.RED,this.left=i??Ge.EMPTY_NODE,this.right=r??Ge.EMPTY_NODE}copy(e,n,s,i,r){return new Ie(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class yv{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ii(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ii(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ii(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ii(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new yv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t,e){return Yn(t.name,e.name)}function jo(t,e){return Yn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;function Cv(t){no=t}const Th=function(t){return typeof t=="number"?"number:"+nh(t):"string:"+t},Rh=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ft(e,".sv"),"Priority must be a string or number.")}else S(t===no||t.isEmpty(),"priority of unexpected type.");S(t===no||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;class Se{static set __childrenNodeConstructor(e){Ka=e}static get __childrenNodeConstructor(){return Ka}constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:q(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Th(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nh(this.value_):e+=this.value_,this.lazyHash_=Zu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),r=Se.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xh,Ah;function bv(t){xh=t}function Ev(t){Ah=t}class wv extends er{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Yn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(fn,new Se("[PRIORITY-POST]",Ah))}makePost(e,n){const s=xh(e);return new K(n,new Se("[PRIORITY-POST]",s))}toString(){return".priority"}}const ye=new wv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=Math.log(2);class Iv{constructor(e){const n=r=>parseInt(Math.log(r)/Sv,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xi=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ie(f,h.node,Ie.BLACK,null,null);{const d=parseInt(u/2,10)+a,m=i(a,d),y=i(d+1,c);return h=t[d],f=n?n(h):h,new Ie(f,h.node,Ie.BLACK,m,y)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,y){const P=h-m,O=h;h-=m;const N=i(P+1,O),M=t[P],D=n?n(M):M;d(new Ie(D,M.node,y,null,N))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const y=a.nextBitIsOne(),P=Math.pow(2,a.count-(m+1));y?f(P,Ie.BLACK):(f(P,Ie.BLACK),f(P,Ie.RED))}return u},o=new Iv(t.length),l=r(o);return new Ge(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;const In={};class Rt{static get Default(){return S(In&&ye,"ChildrenNode.ts has not been loaded"),xr=xr||new Rt({".priority":In},{".priority":ye}),xr}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Wn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Ft(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(K.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=xi(s,e.getCompare()):l=In;const a=e.toString(),c={...this.indexSet_};c[a]=e;const u={...this.indexes_};return u[a]=l,new Rt(u,c)}addToIndexes(e,n){const s=Ei(this.indexes_,(i,r)=>{const o=Wn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===In)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),xi(l,o.getCompare())}else return In;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new Rt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ei(this.indexes_,i=>{if(i===In)return i;{const r=n.get(e.name);return r?i.remove(new K(e.name,r)):i}});return new Rt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs;class H{static get EMPTY_NODE(){return rs||(rs=new H(new Ge(jo),null,Rt.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Rh(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||rs}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?rs:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new K(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?rs:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{S(q(e)!==".priority"||Xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ye,(o,l)=>{n[o]=l.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Th(this.getPriority().val())+":"),this.forEachChild(ye,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zu(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new K(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ys?-1:0}withIndex(e){if(e===Bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ye),i=n.getIterator(ye);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bn?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tv extends H{constructor(){super(new Ge(jo),H.EMPTY_NODE,Rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Ys=new Tv;Object.defineProperties(K,{MIN:{value:new K(jn,H.EMPTY_NODE)},MAX:{value:new K(fn,Ys)}});Ih.__EMPTY_NODE=H.EMPTY_NODE;Se.__childrenNodeConstructor=H;Cv(Ys);Ev(Ys);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=!0;function Ae(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Ae(e))}if(!(t instanceof Array)&&Rv){const n=[];let s=!1;if(Ke(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ae(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return H.EMPTY_NODE;const r=xi(n,vv,o=>o.name,jo);if(s){const o=xi(n,ye.getCompare());return new H(r,Ae(e),new Rt({".priority":o},{".priority":ye}))}else return new H(r,Ae(e),Rt.Default)}else{let n=H.EMPTY_NODE;return Ke(t,(s,i)=>{if(Ft(t,s)&&s.substring(0,1)!=="."){const r=Ae(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Ae(e))}}bv(Ae);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv extends er{constructor(e){super(),this.indexPath_=e,S(!z(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Yn(e.name,n.name):r}makePost(e,n){const s=Ae(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new K(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Ys);return new K(fn,e)}toString(){return Eh(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends er{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Yn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const s=Ae(e);return new K(n,s)}toString(){return".value"}}const Nv=new Av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t){return{type:"value",snapshotNode:t}}function Gn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ls(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Pv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ls(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Gn(n,s)):o.trackChildChange(Fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ls(i,r))}),n.isLeafNode()||n.forEachChild(ye,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Fs(i,r,o))}else s.trackChildChange(Gn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.indexedFilter_=new Go(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bs.getStartPost_(e),this.endPost_=Bs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new K(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(ye,(o,l)=>{r.matches(new K(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new K(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,d)=>h(d,f)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new K(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const d=f==null?1:o(f,a);if(u&&!s.isEmpty()&&d>=0)return r!=null&&r.trackChildChange(Fs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ls(n,h));const y=l.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Gn(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(Ls(c.name,c.node)),r.trackChildChange(Gn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new qo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dv(t){return t.loadsAllData()?new Go(t.getIndex()):t.hasLimit()?new Ov(t):new Bs(t)}function za(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===Nv?n="$value":t.index_===Bn?n="$key":(S(t.index_ instanceof xv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Te(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Te(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Te(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ya(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends vh{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=zs("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ai.getListenId_(e,s),l={};this.listens_[o]=l;const a=za(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Wn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Ai.getListenId_(e,n);delete this.listens_[s]}get(e){const n=za(e._queryParams),s=e._path.toString(),i=new Ji;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+im(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Os(l.responseText)}catch{qe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&qe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){return{value:null,children:new Map}}function Ph(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,Ni());const i=t.children.get(s);e=_e(e),Ph(i,e,n)}}function so(t,e,n){t.value!==null?n(e,t.value):Mv(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);so(i,r,n)})}function Mv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ke(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=10*1e3,Fv=30*1e3,Bv=5*60*1e3;class Vv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Lv(e);const s=Qa+(Fv-Qa)*Math.random();Cs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ke(e,(i,r)=>{r>0&&Ft(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Bv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Oh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ko(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=Oh()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new Pi(J(),n,this.revert)}}else return S(q(this.path)===e,"operationForChild called for unrelated child."),new Pi(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Vs(this.source,J()):new Vs(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return z(this.path)?new dn(this.source,J(),this.snap.getImmediateChild(e)):new dn(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new dn(this.source,J(),n.value):new $s(this.source,J(),n)}else return S(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $s(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Hv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Pv(o.childName,o.snapshotNode))}),os(t,i,"child_removed",e,s,n),os(t,i,"child_added",e,s,n),os(t,i,"child_moved",r,s,n),os(t,i,"child_changed",e,s,n),os(t,i,"value",e,s,n),i}function os(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Wv(t,l,a)),o.forEach(l=>{const a=Uv(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Uv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wv(t,e,n){if(e.childName==null||n.childName==null)throw zn("Should only compare child_ events.");const s=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){return{eventCache:t,serverCache:e}}function bs(t,e,n,s){return tr(new pn(e,n,s),t.serverCache)}function Dh(t,e,n,s){return tr(t.eventCache,new pn(e,n,s))}function io(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _n(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar;const jv=()=>(Ar||(Ar=new Ge(Ay)),Ar);class ge{static fromObject(e){let n=new ge(null);return Ke(e,(s,i)=>{n=n.set(new ue(s),i)}),n}constructor(e,n=jv()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:be(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new ge(null)}}set(e,n){if(z(e))return new ge(n,this.children);{const s=q(e),r=(this.children.get(s)||new ge(null)).set(_e(e),n),o=this.children.insert(s,r);return new ge(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new ge(null):new ge(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ge(null):new ge(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(z(e))return n;{const s=q(e),r=(this.children.get(s)||new ge(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ge(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(be(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),be(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),be(n,i),s):new ge(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(be(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new ge(null))}}function Es(t,e,n){if(z(e))return new at(new ge(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=je(i,e);return r=r.updateChild(o,n),new at(t.writeTree_.set(i,r))}else{const i=new ge(n),r=t.writeTree_.setTree(e,i);return new at(r)}}}function Xa(t,e,n){let s=t;return Ke(n,(i,r)=>{s=Es(s,be(e,i),r)}),s}function Ja(t,e){if(z(e))return at.empty();{const n=t.writeTree_.setTree(e,new ge(null));return new at(n)}}function ro(t,e){return vn(t,e)!=null}function vn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(je(n.path,e)):null}function Za(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(s,i)=>{e.push(new K(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new K(s,i.value))}),e}function zt(t,e){if(z(e))return t;{const n=vn(t,e);return n!=null?new at(new ge(n)):new at(t.writeTree_.subtree(e))}}function oo(t){return t.writeTree_.isEmpty()}function qn(t,e){return kh(J(),t.writeTree_,e)}function kh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=kh(be(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(be(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){return Bh(e,t)}function Gv(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Es(t.visibleWrites,e,n)),t.lastWriteId=s}function qv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Kv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&zv(l,s.path)?i=!1:rt(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Yv(t),!0;if(s.snap)t.visibleWrites=Ja(t.visibleWrites,s.path);else{const l=s.children;Ke(l,a=>{t.visibleWrites=Ja(t.visibleWrites,be(s.path,a))})}return!0}else return!1}function zv(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(be(t.path,n),e))return!0;return!1}function Yv(t){t.visibleWrites=Mh(t.allWrites,Qv,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Qv(t){return t.visible}function Mh(t,e,n){let s=at.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)rt(n,o)?(l=je(n,o),s=Es(s,l,r.snap)):rt(o,n)&&(l=je(o,n),s=Es(s,J(),r.snap.getChild(l)));else if(r.children){if(rt(n,o))l=je(n,o),s=Xa(s,l,r.children);else if(rt(o,n))if(l=je(o,n),z(l))s=Xa(s,J(),r.children);else{const a=Wn(r.children,q(l));if(a){const c=a.getChild(_e(l));s=Es(s,J(),c)}}}else throw zn("WriteRecord should have .snap or .children")}}return s}function Lh(t,e,n,s,i){if(!s&&!i){const r=vn(t.visibleWrites,e);if(r!=null)return r;{const o=zt(t.visibleWrites,e);if(oo(o))return n;if(n==null&&!ro(o,J()))return null;{const l=n||H.EMPTY_NODE;return qn(o,l)}}}else{const r=zt(t.visibleWrites,e);if(!i&&oo(r))return n;if(!i&&n==null&&!ro(r,J()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(rt(c.path,e)||rt(e,c.path))},l=Mh(t.allWrites,o,e),a=n||H.EMPTY_NODE;return qn(l,a)}}}function Xv(t,e,n){let s=H.EMPTY_NODE;const i=vn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=zt(t.visibleWrites,e);return n.forEachChild(ye,(o,l)=>{const a=qn(zt(r,new ue(o)),l);s=s.updateImmediateChild(o,a)}),Za(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=zt(t.visibleWrites,e);return Za(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Jv(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=be(e,n);if(ro(t.visibleWrites,r))return null;{const o=zt(t.visibleWrites,r);return oo(o)?i.getChild(n):qn(o,i.getChild(n))}}function Zv(t,e,n,s){const i=be(e,n),r=vn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=zt(t.visibleWrites,i);return qn(o,s.getNode().getImmediateChild(n))}else return null}function eC(t,e){return vn(t.visibleWrites,e)}function tC(t,e,n,s,i,r,o){let l;const a=zt(t.visibleWrites,e),c=vn(a,J());if(c!=null)l=c;else if(n!=null)l=qn(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function nC(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Oi(t,e,n,s){return Lh(t.writeTree,t.treePath,e,n,s)}function Qo(t,e){return Xv(t.writeTree,t.treePath,e)}function ec(t,e,n,s){return Jv(t.writeTree,t.treePath,e,n,s)}function Di(t,e){return eC(t.writeTree,be(t.treePath,e))}function sC(t,e,n,s,i,r){return tC(t.writeTree,t.treePath,e,n,s,i,r)}function Xo(t,e,n){return Zv(t.writeTree,t.treePath,e,n)}function Fh(t,e){return Bh(be(t.treePath,e),t.writeTree)}function Bh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ls(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Gn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Fs(s,e.snapshotNode,i.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Vh=new rC;class Jo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_n(this.viewCache_),r=sC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){return{filter:t}}function lC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function aC(t,e,n,s,i){const r=new iC;let o,l;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=lo(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=ki(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=uC(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=ao(t,e,c.path,c.children,s,i,l,r))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=dC(t,e,c.path,s,i,r):o=hC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=fC(t,e,n.path,s,r);else throw zn("Unknown operation type: "+n.type);const a=r.getChanges();return cC(e,o,a),{viewCache:o,changes:a}}function cC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=io(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Nh(io(e)))}}function $h(t,e,n,s,i,r){const o=e.eventCache;if(Di(s,n)!=null)return e;{let l,a;if(z(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_n(e),u=c instanceof H?c:H.EMPTY_NODE,h=Qo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Oi(s,_n(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){S(Xt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=ec(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=ec(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Xo(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return bs(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function ki(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const d=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),d,null)}else{const d=q(n);if(!a.isCompleteForPath(n)&&Xt(n)>1)return e;const m=_e(n),P=a.getNode().getImmediateChild(d).updateChild(m,s);d===".priority"?c=u.updatePriority(a.getNode(),P):c=u.updateChild(a.getNode(),d,P,m,Vh,null)}const h=Dh(e,c,a.isFullyInitialized()||z(n),u.filtersNodes()),f=new Jo(i,h,r);return $h(t,h,n,i,f,l)}function lo(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Jo(i,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=bs(e,c,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=bs(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=_e(n),d=l.getNode().getImmediateChild(h);let m;if(z(f))m=s;else{const y=u.getCompleteChild(h);y!=null?bh(f)===".priority"&&y.getChild(wh(f)).isEmpty()?m=y:m=y.updateChild(f,s):m=H.EMPTY_NODE}if(d.equals(m))a=e;else{const y=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=bs(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function tc(t,e){return t.eventCache.isCompleteForChild(e)}function uC(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=be(n,a);tc(e,q(u))&&(l=lo(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=be(n,a);tc(e,q(u))||(l=lo(t,l,u,c,i,r,o))}),l}function nc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ao(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;z(n)?c=s:c=new ge(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=nc(t,d,f);a=ki(t,a,new ue(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),y=nc(t,m,f);a=ki(t,a,new ue(h),y,i,r,o,l)}}),a}function hC(t,e,n,s,i,r,o){if(Di(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ki(t,e,n,a.getNode().getChild(n),i,r,l,o);if(z(n)){let c=new ge(null);return a.getNode().forEachChild(Bn,(u,h)=>{c=c.set(new ue(u),h)}),ao(t,e,n,c,i,r,l,o)}else return e}else{let c=new ge(null);return s.foreach((u,h)=>{const f=be(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),ao(t,e,n,c,i,r,l,o)}}function fC(t,e,n,s,i){const r=e.serverCache,o=Dh(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return $h(t,o,n,s,Vh,i)}function dC(t,e,n,s,i,r){let o;if(Di(s,n)!=null)return e;{const l=new Jo(s,e,i),a=e.eventCache.getNode();let c;if(z(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Oi(s,_n(e));else{const h=e.serverCache.getNode();S(h instanceof H,"serverChildren would be complete if leaf node"),u=Qo(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=q(n);let h=Xo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,_e(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,H.EMPTY_NODE,_e(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oi(s,_n(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Di(s,J())!=null,bs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Go(s.getIndex()),r=Dv(s);this.processor_=oC(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,l.getNode(),null),u=new pn(a,o.isFullyInitialized(),i.filtersNodes()),h=new pn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=tr(h,u),this.eventGenerator_=new $v(this.query_)}get query(){return this.query_}}function _C(t){return t.viewCache_.serverCache.getNode()}function gC(t,e){const n=_n(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function sc(t){return t.eventRegistrations_.length===0}function mC(t,e){t.eventRegistrations_.push(e)}function ic(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function rc(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(S(_n(t.viewCache_),"We should always have a full cache before handling merges"),S(io(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=aC(t.processor_,i,e,n,s);return lC(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Hh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function yC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(r,o)=>{s.push(Gn(r,o))}),n.isFullyInitialized()&&s.push(Nh(n.getNode())),Hh(t,s,n.getNode(),e)}function Hh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Hv(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi;class vC{constructor(){this.views=new Map}}function CC(t){S(!Mi,"__referenceConstructor has already been defined"),Mi=t}function bC(){return S(Mi,"Reference.ts has not been loaded"),Mi}function EC(t){return t.views.size===0}function Zo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),rc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(rc(o,e,n,s));return r}}function wC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Oi(n,i?s:null),a=!1;l?a=!0:s instanceof H?(l=Qo(n,s),a=!1):(l=H.EMPTY_NODE,a=!1);const c=tr(new pn(l,a,!1),new pn(s,i,!1));return new pC(e,c)}return o}function SC(t,e,n,s,i,r){const o=wC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),mC(o,n),yC(o,n)}function IC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Jt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ic(c,n,s)),sc(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ic(a,n,s)),sc(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Jt(t)&&r.push(new(bC())(e._repo,e._path)),{removed:r,events:o}}function Uh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vn(t,e){let n=null;for(const s of t.views.values())n=n||gC(s,e);return n}function Wh(t,e){if(e._queryParams.loadsAllData())return nr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function jh(t,e){return Wh(t,e)!=null}function Jt(t){return nr(t)!=null}function nr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li;function TC(t){S(!Li,"__referenceConstructor has already been defined"),Li=t}function RC(){return S(Li,"Reference.ts has not been loaded"),Li}let xC=1;class oc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ge(null),this.pendingWriteTree_=nC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gh(t,e,n,s,i){return Gv(t.pendingWriteTree_,e,n,s,i),i?Qs(t,new dn(Oh(),e,n)):[]}function cn(t,e,n=!1){const s=qv(t.pendingWriteTree_,e);if(Kv(t.pendingWriteTree_,e)){let r=new ge(null);return s.snap!=null?r=r.set(J(),!0):Ke(s.children,o=>{r=r.set(new ue(o),!0)}),Qs(t,new Pi(s.path,r,n))}else return[]}function sr(t,e,n){return Qs(t,new dn(Ko(),e,n))}function AC(t,e,n){const s=ge.fromObject(n);return Qs(t,new $s(Ko(),e,s))}function NC(t,e){return Qs(t,new Vs(Ko(),e))}function PC(t,e,n){const s=tl(t,n);if(s){const i=nl(s),r=i.path,o=i.queryId,l=je(r,e),a=new Vs(zo(o),l);return sl(t,r,a)}else return[]}function co(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||jh(o,e))){const a=IC(o,e,n,s);EC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,d)=>Jt(d));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const d=kC(f);for(let m=0;m<d.length;++m){const y=d[m],P=y.query,O=zh(t,y);t.listenProvider_.startListening(ws(P),Fi(t,P),O.hashFn,O.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ws(e),null):c.forEach(f=>{const d=t.queryToTagMap.get(ir(f));t.listenProvider_.stopListening(ws(f),d)}))}MC(t,c)}return l}function OC(t,e,n,s){const i=tl(t,s);if(i!=null){const r=nl(i),o=r.path,l=r.queryId,a=je(o,e),c=new dn(zo(l),a,n);return sl(t,o,c)}else return[]}function DC(t,e,n,s){const i=tl(t,s);if(i){const r=nl(i),o=r.path,l=r.queryId,a=je(o,e),c=ge.fromObject(n),u=new $s(zo(l),a,c);return sl(t,o,u)}else return[]}function lc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,d)=>{const m=je(f,i);r=r||Vn(d,m),o=o||Jt(d)});let l=t.syncPointTree_.get(i);l?(o=o||Jt(l),r=r||Vn(l,J())):(l=new vC,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((d,m)=>{const y=Vn(m,J());y&&(r=r.updateImmediateChild(d,y))}));const c=jh(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=ir(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const d=LC();t.queryToTagMap.set(f,d),t.tagToQueryMap.set(d,f)}const u=Yo(t.pendingWriteTree_,i);let h=SC(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Wh(l,e);h=h.concat(FC(t,e,f))}return h}function el(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=je(o,e),c=Vn(l,a);if(c)return c});return Lh(i,e,r,n,!0)}function Qs(t,e){return qh(e,t.syncPointTree_,null,Yo(t.pendingWriteTree_,J()))}function qh(t,e,n,s){if(z(t.path))return Kh(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Vn(i,J()));let r=[];const o=q(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Fh(s,o);r=r.concat(qh(l,a,c,u))}return i&&(r=r.concat(Zo(i,t,s,n))),r}}function Kh(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Vn(i,J()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Fh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Kh(u,l,a,c)))}),i&&(r=r.concat(Zo(i,t,s,n))),r}function zh(t,e){const n=e.query,s=Fi(t,n);return{hashFn:()=>(_C(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?PC(t,n._path,s):NC(t,n._path);{const r=Oy(i,n);return co(t,n,null,r)}}}}function Fi(t,e){const n=ir(e);return t.queryToTagMap.get(n)}function ir(t){return t._path.toString()+"$"+t._queryIdentifier}function tl(t,e){return t.tagToQueryMap.get(e)}function nl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function sl(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Yo(t.pendingWriteTree_,e);return Zo(s,n,i,null)}function kC(t){return t.fold((e,n,s)=>{if(n&&Jt(n))return[nr(n)];{let i=[];return n&&(i=Uh(n)),Ke(s,(r,o)=>{i=i.concat(o)}),i}})}function ws(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(RC())(t._repo,t._path):t}function MC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ir(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function LC(){return xC++}function FC(t,e,n){const s=e._path,i=Fi(t,e),r=zh(t,n),o=t.listenProvider_.startListening(ws(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)S(!Jt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!z(c)&&u&&Jt(u))return[nr(u).query];{let f=[];return u&&(f=f.concat(Uh(u).map(d=>d.query))),Ke(h,(d,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(ws(u),Fi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new il(n)}node(){return this.node_}}class rl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=be(this.path_,e);return new rl(this.syncTree_,n)}node(){return el(this.syncTree_,this.path_)}}const BC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ac=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return $C(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},$C=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},HC=function(t,e,n,s){return ol(e,new rl(n,t),s)},Yh=function(t,e,n){return ol(t,new il(e),n)};function ol(t,e,n){const s=t.getPriority().val(),i=ac(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ac(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Se(l,Ae(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Se(i))),o.forEachChild(ye,(l,a)=>{const c=ol(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function al(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=q(n);for(;i!==null;){const r=Wn(s.node.children,i)||{children:{},childCount:0};s=new ll(i,s,r),n=_e(n),i=q(n)}return s}function Xn(t){return t.node.value}function Qh(t,e){t.node.value=e,uo(t)}function Xh(t){return t.node.childCount>0}function UC(t){return Xn(t)===void 0&&!Xh(t)}function rr(t,e){Ke(t.node.children,(n,s)=>{e(new ll(n,t,s))})}function Jh(t,e,n,s){n&&e(t),rr(t,i=>{Jh(i,e,!0)})}function WC(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xs(t){return new ue(t.parent===null?t.name:Xs(t.parent)+"/"+t.name)}function uo(t){t.parent!==null&&jC(t.parent,t.name,t)}function jC(t,e,n){const s=UC(n),i=Ft(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,uo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,uo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=/[\[\].#$\/\u0000-\u001F\u007F]/,qC=/[\[\].#$\u0000-\u001F\u007F]/,Nr=10*1024*1024,Zh=function(t){return typeof t=="string"&&t.length!==0&&!GC.test(t)},ef=function(t){return typeof t=="string"&&t.length!==0&&!qC.test(t)},KC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ef(t)},zC=function(t,e,n,s){cl(Lo(t,"value"),e,n)},cl=function(t,e,n){const s=n instanceof ue?new hv(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+on(s));if(typeof e=="function")throw new Error(t+"contains a function "+on(s)+" with contents = "+e.toString());if(eh(e))throw new Error(t+"contains "+e.toString()+" "+on(s));if(typeof e=="string"&&e.length>Nr/3&&Zi(e)>Nr)throw new Error(t+"contains a string greater than "+Nr+" utf8 bytes "+on(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ke(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zh(o)))throw new Error(t+" contains an invalid key ("+o+") "+on(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fv(s,o),cl(t,l,s),dv(s)}),i&&r)throw new Error(t+' contains ".value" child '+on(s)+" in addition to actual children.")}},tf=function(t,e,n,s){if(!ef(n))throw new Error(Lo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tf(t,e,n)},QC=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},XC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!KC(n))throw new Error(Lo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ul(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Uo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function nf(t,e,n){ul(t,n),sf(t,s=>Uo(s,e))}function Mt(t,e,n){ul(t,n),sf(t,s=>rt(s,e)||rt(e,s))}function sf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(ZC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ZC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();vs&&ke("event: "+n.toString()),Qn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb="repo_interrupt",tb=25;class nb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ni(),this.transactionQueueTree_=new ll,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sb(t,e,n){if(t.stats_=$o(t.repoInfo_),t.forceRestClient_||Ly())t.server_=new Ai(t.repoInfo_,(s,i,r,o)=>{cc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>uc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new At(t.repoInfo_,e,(s,i,r,o)=>{cc(t,s,i,r,o)},s=>{uc(t,s)},s=>{rb(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Hy(t.repoInfo_,()=>new Vv(t.stats_,t.server_)),t.infoData_=new kv,t.infoSyncTree_=new oc({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=sr(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),fl(t,"connected",!1),t.serverSyncTree_=new oc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Mt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ib(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hl(t){return BC({timestamp:ib(t)})}function cc(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ei(n,c=>Ae(c));o=DC(t.serverSyncTree_,r,a,i)}else{const a=Ae(n);o=OC(t.serverSyncTree_,r,a,i)}else if(s){const a=Ei(n,c=>Ae(c));o=AC(t.serverSyncTree_,r,a)}else{const a=Ae(n);o=sr(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=or(t,r)),Mt(t.eventQueue_,l,o)}function uc(t,e){fl(t,"connected",e),e===!1&&lb(t)}function rb(t,e){Ke(e,(n,s)=>{fl(t,n,s)})}function fl(t,e,n){const s=new ue("/.info/"+e),i=Ae(n);t.infoData_.updateSnapshot(s,i);const r=sr(t.infoSyncTree_,s,i);Mt(t.eventQueue_,s,r)}function rf(t){return t.nextWriteId_++}function ob(t,e,n,s,i){dl(t,"set",{path:e.toString(),value:n,priority:s});const r=hl(t),o=Ae(n,s),l=el(t.serverSyncTree_,e),a=Yh(o,l,r),c=rf(t),u=Gh(t.serverSyncTree_,e,a,c,!0);ul(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,d)=>{const m=f==="ok";m||qe("set at "+e+" failed: "+f);const y=cn(t.serverSyncTree_,c,!m);Mt(t.eventQueue_,e,y),hb(t,i,f,d)});const h=uf(t,e);or(t,h),Mt(t.eventQueue_,h,[])}function lb(t){dl(t,"onDisconnectEvents");const e=hl(t),n=Ni();so(t.onDisconnect_,J(),(i,r)=>{const o=HC(i,r,t.serverSyncTree_,e);Ph(n,i,o)});let s=[];so(n,J(),(i,r)=>{s=s.concat(sr(t.serverSyncTree_,i,r));const o=uf(t,i);or(t,o)}),t.onDisconnect_=Ni(),Mt(t.eventQueue_,J(),s)}function ab(t,e,n){let s;q(e._path)===".info"?s=lc(t.infoSyncTree_,e,n):s=lc(t.serverSyncTree_,e,n),nf(t.eventQueue_,e._path,s)}function cb(t,e,n){let s;q(e._path)===".info"?s=co(t.infoSyncTree_,e,n):s=co(t.serverSyncTree_,e,n),nf(t.eventQueue_,e._path,s)}function ub(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eb)}function dl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function hb(t,e,n,s){e&&Qn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function of(t,e,n){return el(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function pl(t,e=t.transactionQueueTree_){if(e||lr(t,e),Xn(e)){const n=af(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&fb(t,Xs(e),n)}else Xh(e)&&rr(e,n=>{pl(t,n)})}function fb(t,e,n){const s=n.map(c=>c.currentWriteId),i=of(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=je(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{dl(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(cn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();lr(t,al(t.transactionQueueTree_,e)),pl(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Qn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qe("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}or(t,e)}},o)}function or(t,e){const n=lf(t,e),s=Xs(n),i=af(t,n);return db(t,i,s),s}function db(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=je(n,a.path);let u=!1,h;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(cn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=tb)u=!0,h="maxretry",i=i.concat(cn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=of(t,a.path,o);a.currentInputSnapshot=f;const d=e[l].update(f.val());if(d!==void 0){cl("transaction failed: Data returned ",d,a.path);let m=Ae(d);typeof d=="object"&&d!=null&&Ft(d,".priority")||(m=m.updatePriority(f.getPriority()));const P=a.currentWriteId,O=hl(t),N=Yh(m,f,O);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=N,a.currentWriteId=rf(t),o.splice(o.indexOf(P),1),i=i.concat(Gh(t.serverSyncTree_,a.path,N,a.currentWriteId,a.applyLocally)),i=i.concat(cn(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(cn(t.serverSyncTree_,a.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}lr(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Qn(s[l]);pl(t,t.transactionQueueTree_)}function lf(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&Xn(s)===void 0;)s=al(s,n),e=_e(e),n=q(e);return s}function af(t,e){const n=[];return cf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function cf(t,e,n){const s=Xn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);rr(e,i=>{cf(t,i,n)})}function lr(t,e){const n=Xn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Qh(e,n.length>0?n:void 0)}rr(e,s=>{lr(t,s)})}function uf(t,e){const n=Xs(lf(t,e)),s=al(t.transactionQueueTree_,e);return WC(s,i=>{Pr(t,i)}),Pr(t,s),Jh(s,i=>{Pr(t,i)}),n}function Pr(t,e){const n=Xn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qh(e,void 0):n.length=r+1,Mt(t.eventQueue_,Xs(e),i);for(let o=0;o<s.length;o++)Qn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _b(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const hc=function(t,e){const n=gb(t),s=n.namespace;n.domain==="firebase.com"&&kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ry();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new fh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},gb=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=pb(t.substring(u,h)));const f=_b(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class yb{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:bh(this._path)}get ref(){return new Zt(this._repo,this._path)}get _queryIdentifier(){const e=Ya(this._queryParams),n=Bo(e);return n==="{}"?"default":n}get _queryObject(){return Ya(this._queryParams)}isEqual(e){if(e=qs(e),!(e instanceof _l))return!1;const n=this._repo===e._repo,s=Uo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uv(this._path)}}class Zt extends _l{constructor(e,n){super(e,n,new qo,!1)}get parent(){const e=wh(this._path);return e===null?null:new Zt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=ho(this.ref,e);return new Bi(this._node.getChild(n),s,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Bi(i,ho(this.ref,s),ye)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cb(t,e){return t=qs(t),t._checkNotDeleted("ref"),e!==void 0?ho(t._root,e):t._root}function ho(t,e){return t=qs(t),q(t._path)===null?YC("child","path",e):tf("child","path",e),new Zt(t._repo,be(t._path,e))}function bb(t,e){t=qs(t),QC("set",t._path),zC("set",e,t._path);const n=new Ji;return ob(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class gl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new mb("value",this,new Bi(e.snapshotNode,new Zt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yb(this,e,n):null}matches(e){return e instanceof gl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Eb(t,e,n,s,i){const r=new vb(n,void 0),o=new gl(r);return ab(t._repo,t,o),()=>cb(t._repo,t,o)}function wb(t,e,n,s){return Eb(t,"value",e)}CC(Zt);TC(Zt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="FIREBASE_DATABASE_EMULATOR_HOST",fo={};let Ib=!1;function Tb(t,e,n,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Mo(r);t.repoInfo_=new fh(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function Rb(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=hc(r,i),l=o.repoInfo,a;typeof process<"u"&&Pa&&(a=Pa[Sb]),a?(r=`http://${a}?ns=${l.namespace}`,o=hc(r,i),l=o.repoInfo):o.repoInfo.secure;const c=new By(t.name,t.options,e);XC("Invalid Firebase Database URL",o),z(o.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Ab(l,t,c,new Fy(t,n));return new Nb(u,t)}function xb(t,e){const n=fo[e];(!n||n[t.key]!==t)&&kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ub(t),delete n[t.key]}function Ab(t,e,n,s){let i=fo[e.name];i||(i={},fo[e.name]=i);let r=i[t.toURLString()];return r&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nb(t,Ib,n,s),i[t.toURLString()]=r,r}class Nb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Zt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(xb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function Pb(t=ay(),e){const n=sy(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ug("database");s&&Ob(n,...s)}return n}function Ob(t,e,n,s={}){t=qs(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&wi(s,r.repoInfo_.emulatorOptions))return;kt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ci(ci.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:jg(s.mockUserToken,t.app.options.projectId);o=new ci(l)}Mo(e)&&(Wg(e),Kg("Database",!0)),Tb(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){by(ly),Ii(new Ds("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Rb(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Ln(Oa,Da,t),Ln(Oa,Da,"esm2020")}At.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};At.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Db();const kb={apiKey:"AIzaSyBFW135lw0P3gTmtritqlWfStjDkDxjvPM",authDomain:"vista-trainer-icon.firebaseapp.com",databaseURL:"https://vista-trainer-icon-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"vista-trainer-icon",storageBucket:"vista-trainer-icon.firebasestorage.app",messagingSenderId:"152180803730",appId:"1:152180803730:web:ba861aa0f348092ce1be4b",measurementId:"G-E189YKXRPB"},Mb=zu(kb),Lb=Pb(Mb),Fb="/imageViewer/assets/01-b3EDN3c6.png",Bb="/imageViewer/assets/02-BShxBuih.png",Vb="/imageViewer/assets/03-ClUtf6rq.png",$b="/imageViewer/assets/04-B4U44fU2.png",Hb="/imageViewer/assets/05-COOJVYc6.png",Ub="/imageViewer/assets/06-Dq_7eBSl.png",Wb="/imageViewer/assets/07-BgOf47y4.png",jb="/imageViewer/assets/08-DRRLmkFX.png",Gb="/imageViewer/assets/09-BikaQuTR.png",qb="/imageViewer/assets/10-CtDy_BaZ.png",Kb="/imageViewer/assets/11-B1C94kYX.png",zb="/imageViewer/assets/12-W2kVSThs.png",Yb="/imageViewer/assets/13-CP9YG5Wh.png",Qb="/imageViewer/assets/14-DxrhrUwV.png",Xb="/imageViewer/assets/15-cfrPOvjl.png",Jb="/imageViewer/assets/16-B6XR1NyF.png",Zb="/imageViewer/assets/17-v7xrTa_E.png",eE="/imageViewer/assets/18-xgNSH6oI.png",tE="/imageViewer/assets/19-B1k9Rd79.png",nE="/imageViewer/assets/20-nxrmhThU.png",sE="/imageViewer/assets/21-xNR4LXtw.png",iE="/imageViewer/assets/22-gSIjPoB8.png",rE="/imageViewer/assets/23-C3EAbpNz.png",oE="/imageViewer/assets/24-B7eTjVXF.png",lE="/imageViewer/assets/25-IgGG1TaC.png",aE="/imageViewer/assets/26-6dGgtf9Q.png",cE="/imageViewer/assets/27-DFRn8Flb.png",uE="/imageViewer/assets/28-BfZr5bEs.png",hE="/imageViewer/assets/29-Di-T_I45.png",fE="/imageViewer/assets/30-BCpP81hd.png",dE={class:"selector-dock"},pE={class:"groups-container"},_E=["src","onClick"],gE=mn({__name:"IconSelector",emits:["select","deselect"],setup(t,{expose:e,emit:n}){const s=n,i=Object.assign({"/src/assets/images/icon/01.png":Fb,"/src/assets/images/icon/02.png":Bb,"/src/assets/images/icon/03.png":Vb,"/src/assets/images/icon/04.png":$b,"/src/assets/images/icon/05.png":Hb,"/src/assets/images/icon/06.png":Ub,"/src/assets/images/icon/07.png":Wb,"/src/assets/images/icon/08.png":jb,"/src/assets/images/icon/09.png":Gb,"/src/assets/images/icon/10.png":qb,"/src/assets/images/icon/11.png":Kb,"/src/assets/images/icon/12.png":zb,"/src/assets/images/icon/13.png":Yb,"/src/assets/images/icon/14.png":Qb,"/src/assets/images/icon/15.png":Xb,"/src/assets/images/icon/16.png":Jb,"/src/assets/images/icon/17.png":Zb,"/src/assets/images/icon/18.png":eE,"/src/assets/images/icon/19.png":tE,"/src/assets/images/icon/20.png":nE,"/src/assets/images/icon/21.png":sE,"/src/assets/images/icon/22.png":iE,"/src/assets/images/icon/23.png":rE,"/src/assets/images/icon/24.png":oE,"/src/assets/images/icon/25.png":lE,"/src/assets/images/icon/26.png":aE,"/src/assets/images/icon/27.png":cE,"/src/assets/images/icon/28.png":uE,"/src/assets/images/icon/29.png":hE,"/src/assets/images/icon/30.png":fE}),r=["#dbeeff","#dbf5db","#ffe3ec","#fff8db","#f1e6ff","#ffe9d6","#ddfaff","#f2f2f2"],o=vt(new Set),l=Je(()=>{const h=[[]],f=Object.values(i).sort();return console.log(f),f.forEach((d,m)=>{const y=Math.floor(m/5);h[y]||(h[y]=[]),h[y].push(d)}),h}),a=h=>{if(o.value.has(h))o.value.delete(h),s("deselect",h);else{if(o.value.size>=10)return;o.value.add(h),s("select",h)}},c=h=>{o.value.delete(h)},u=()=>{l.value.flatMap(h=>h).filter(h=>o.value.has(h)).forEach(h=>{o.value.delete(h),s("deselect",h)})};return e({deselect:c}),(h,f)=>(Ne(),Ue("div",dE,[G("div",pE,[(Ne(!0),Ue(Be,null,_i(l.value,(d,m)=>(Ne(),Ue("div",{key:m,class:"select-group",style:Kn({"--group-color":r[m]})},[(Ne(!0),Ue(Be,null,_i(d,(y,P)=>(Ne(),Ue("img",{key:P,src:y,class:Us(["icon-item",{selected:o.value.has(y)}]),onClick:O=>a(y)},null,10,_E))),128))],4))),128))]),G("button",{class:"reset-selection-btn",onClick:u},f[0]||(f[0]=[G("span",null,"選択クリア",-1)]))]))}}),mE=yn(gE,[["__scopeId","data-v-55a95f5b"]]),yE={class:"image-area"},vE=["onClick"],CE=["src"],bE=mn({__name:"IconDisplay",props:{selectedIcons:{},config:{}},emits:["update:selectedIcons","deselect"],setup(t,{emit:e}){const n=t,s=e,i=Je(()=>n.selectedIcons.map((r,o)=>{const l=o<5,a=o%5,c=n.config.topOffset+a*n.config.verticalGap,u=l?n.config.colorLeft:n.config.colorRight,h={top:`${c}px`,"border-color":u,"--glow-color":`${u}66`};return l?h.left=`${n.config.sideMargin}px`:h.right=`${n.config.sideMargin}px`,h}));return(r,o)=>(Ne(),Ue("div",{class:Us(["display-area",{"with-bg":r.config.showBackground}])},[G("div",yE,[Re(Mp,{name:"icon-list"},{default:$c(()=>[(Ne(!0),Ue(Be,null,_i(r.selectedIcons,(l,a)=>(Ne(),Ue("div",{key:l+a,class:"icon-wrapper",style:Kn(i.value[a]),onClick:c=>s("deselect",l)},[G("img",{src:l,class:"icon-image"},null,8,CE)],12,vE))),128))]),_:1})])],2))}}),EE=yn(bE,[["__scopeId","data-v-766a6625"]]),wE={class:"modal-content"},SE={class:"modal-header"},IE={class:"modal-body"},TE={class:"input-group"},RE={class:"input-group"},xE={class:"input-group"},AE={class:"input-group"},NE={class:"input-group"},PE={class:"input-group checkbox-group"},OE=mn({__name:"SettingsModal",props:{config:{},defaultConfig:{}},emits:["close","apply"],setup(t,{emit:e}){const n=t,s=e,i=vt({...n.config});function r(){i.value={...n.defaultConfig}}function o(){s("apply",{...i.value})}return(l,a)=>(Ne(),Ue("div",{class:"modal-overlay",onClick:a[7]||(a[7]=Gp(c=>l.$emit("close"),["self"]))},[G("div",wE,[G("div",SE,[a[9]||(a[9]=G("h2",null,"アイコン配置設定",-1)),G("button",{class:"close-btn",onClick:a[0]||(a[0]=c=>l.$emit("close"))},a[8]||(a[8]=[G("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor","stroke-width":"2.5",fill:"none"},[G("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),G("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)]))]),G("div",IE,[G("div",TE,[a[10]||(a[10]=G("label",null,"左右マージン (px)",-1)),wn(G("input",{type:"number","onUpdate:modelValue":a[1]||(a[1]=c=>i.value.sideMargin=c)},null,512),[[ts,i.value.sideMargin]])]),G("div",RE,[a[11]||(a[11]=G("label",null,"上部オフセット (px)",-1)),wn(G("input",{type:"number","onUpdate:modelValue":a[2]||(a[2]=c=>i.value.topOffset=c)},null,512),[[ts,i.value.topOffset]])]),G("div",xE,[a[12]||(a[12]=G("label",null,"垂直方向の間隔 (px)",-1)),wn(G("input",{type:"number","onUpdate:modelValue":a[3]||(a[3]=c=>i.value.verticalGap=c)},null,512),[[ts,i.value.verticalGap]])]),G("div",AE,[a[13]||(a[13]=G("label",null,"左チーム枠線色",-1)),wn(G("input",{type:"color","onUpdate:modelValue":a[4]||(a[4]=c=>i.value.colorLeft=c)},null,512),[[ts,i.value.colorLeft]])]),G("div",NE,[a[14]||(a[14]=G("label",null,"右チーム枠線色",-1)),wn(G("input",{type:"color","onUpdate:modelValue":a[5]||(a[5]=c=>i.value.colorRight=c)},null,512),[[ts,i.value.colorRight]])]),G("div",PE,[wn(G("input",{type:"checkbox",id:"show-bg","onUpdate:modelValue":a[6]||(a[6]=c=>i.value.showBackground=c)},null,512),[[Hp,i.value.showBackground]]),a[15]||(a[15]=G("label",{for:"show-bg"},"背景サンプルを表示する",-1))])]),G("div",{class:"modal-footer"},[G("button",{class:"btn btn-secondary",onClick:r}," 初期設定に戻す "),G("button",{class:"btn btn-primary",onClick:o}," 決定 ")])])]))}}),DE=yn(OE,[["__scopeId","data-v-bbbe267b"]]),kE={class:"container"},ME=mn({__name:"IV0002",setup(t){const e={sideMargin:50,topOffset:370,verticalGap:84,colorLeft:"#A34DE5",colorRight:"#E5894D",showBackground:!1},n=vt({...e}),s=vt(!1),r=new URLSearchParams(window.location.search).get("room")||"default_room",o=Cb(Lb,`matches/${r}/icons`),l=vt([]),a=vt(!1);Ro(()=>{const d=localStorage.getItem("layout_config");if(d)try{n.value=JSON.parse(d)}catch(m){console.error("Failed to load layout config",m)}wb(o,m=>{const y=m.val();y!==null&&(a.value=!0,l.value=Array.isArray(y)?y:[],setTimeout(()=>{a.value=!1},50))})}),ps(l,d=>{a.value||bb(o,JSON.parse(JSON.stringify(d)))},{deep:!0});function c(d){n.value=d,localStorage.setItem("layout_config",JSON.stringify(d)),s.value=!1}const u=vt();function h(d){l.value.length<10&&!l.value.includes(d)&&l.value.push(d)}function f(d){var y;const m=l.value.indexOf(d);m!==-1&&(l.value.splice(m,1),(y=u.value)==null||y.deselect(d))}return(d,m)=>(Ne(),Ue("div",kE,[G("button",{class:"settings-btn",onClick:m[0]||(m[0]=y=>s.value=!0)},m[4]||(m[4]=[G("img",{src:Pg,alt:"Settings"},null,-1)])),Re(EE,{class:"icon-display",selectedIcons:l.value,"onUpdate:selectedIcons":m[1]||(m[1]=y=>l.value=y),config:n.value,onDeselect:m[2]||(m[2]=y=>f(y))},null,8,["selectedIcons","config"]),Re(mE,{class:"icon-selector",ref_key:"iconSelectorRef",ref:u,onSelect:h,onDeselect:f},null,512),s.value?(Ne(),No(DE,{key:0,config:n.value,defaultConfig:e,onClose:m[3]||(m[3]=y=>s.value=!1),onApply:c},null,8,["config"])):Jd("",!0)]))}}),LE=yn(ME,[["__scopeId","data-v-ceab7a0a"]]),FE="/imageViewer",BE=ng({history:P_(FE),routes:[{component:Ng,path:"/imageSelect"},{component:LE,path:"/iconViewer"},{redirect:"/imageSelect",path:"/"}]});zp(Zp).use(BE).mount("#app");
