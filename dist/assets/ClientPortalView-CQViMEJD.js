import{r as De,j as p,m as Gn,A as ss}from"./motion-Bys2NPqK.js";import{ad as wl,ae as Rl,af as Co,ag as No,C as as,ah as Cl,ai as Po,L as Do,v as Lo,w as Io,aj as Ri,a3 as os,c as Cn,ak as Js,E as Qs,k as ls,a8 as Nl,X as ea,a7 as Uo,al as Pl,S as Dl,ac as Ta,R as Ll,f as Il,o as Ul,P as Fo,B as Fl,i as Ol,a6 as Bl,am as zl,j as kl,a as Gl}from"./icons-DKyYlZcM.js";import{L as Vl}from"./index-CwiWEvwk.js";import"./vendor-DQ7921oI.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="185",Hl=0,Aa=1,Wl=2,cr=1,Xl=2,Ai=3,Nn=0,Ct=1,fn=2,pn=0,di=1,wa=2,Ra=3,Ca=4,jl=5,On=100,ql=101,Yl=102,$l=103,Kl=104,Zl=200,Jl=201,Ql=202,ec=203,cs=204,ds=205,tc=206,nc=207,ic=208,rc=209,sc=210,ac=211,oc=212,lc=213,cc=214,us=0,fs=1,hs=2,hi=3,ps=4,ms=5,xs=6,gs=7,Oo=0,dc=1,uc=2,Qt=0,Bo=1,zo=2,ko=3,Go=4,Vo=5,Ho=6,Wo=7,Xo=300,Vn=301,pi=302,wr=303,Rr=304,Mr=306,_s=1e3,hn=1001,vs=1002,Mt=1003,fc=1004,zi=1005,bt=1006,Cr=1007,zn=1008,Bt=1009,jo=1010,qo=1011,Pi=1012,na=1013,nn=1014,Zt=1015,xn=1016,ia=1017,ra=1018,Di=1020,Yo=35902,$o=35899,Ko=1021,Zo=1022,Wt=1023,gn=1026,kn=1027,Jo=1028,sa=1029,Hn=1030,aa=1031,oa=1033,dr=33776,ur=33777,fr=33778,hr=33779,Ms=35840,bs=35841,Ss=35842,Es=35843,ys=36196,Ts=37492,As=37496,ws=37488,Rs=37489,mr=37490,Cs=37491,Ns=37808,Ps=37809,Ds=37810,Ls=37811,Is=37812,Us=37813,Fs=37814,Os=37815,Bs=37816,zs=37817,ks=37818,Gs=37819,Vs=37820,Hs=37821,Ws=36492,Xs=36494,js=36495,qs=36283,Ys=36284,xr=36285,$s=36286,hc=3200,Na=0,pc=1,wn="",Lt="srgb",gr="srgb-linear",_r="linear",Ze="srgb",Yn=7680,Pa=519,mc=512,xc=513,gc=514,la=515,_c=516,vc=517,ca=518,Mc=519,Da=35044,La="300 es",Jt=2e3,vr=2001;function bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Li(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sc(){const i=Li("canvas");return i.style.display="block",i}const Ia={};function Ua(...i){const e="THREE."+i.shift();console.log(e,...i)}function Qo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=Qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ui(...i){const e=i.join(" ");e in Ia||(Ia[e]=!0,Pe(...i))}function Ec(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const yc={[us]:fs,[hs]:xs,[ps]:gs,[hi]:ms,[fs]:us,[xs]:hs,[gs]:ps,[ms]:hi};class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fa=1234567;const Ci=Math.PI/180,Ii=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function He(i,e,t){return Math.max(e,Math.min(t,i))}function da(i,e){return(i%e+e)%e}function Tc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ac(i,e,t){return i!==e?(t-i)/(e-i):0}function Ni(i,e,t){return(1-t)*i+t*e}function wc(i,e,t,n){return Ni(i,e,1-Math.exp(-t*n))}function Rc(i,e=1){return e-Math.abs(da(i,e*2)-e)}function Cc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Dc(i,e){return i+Math.random()*(e-i)}function Lc(i){return i*(.5-Math.random())}function Ic(i){i!==void 0&&(Fa=i);let e=Fa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uc(i){return i*Ci}function Fc(i){return i*Ii}function Oc(i){return(i&i-1)===0&&i!==0}function Bc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),g=s((n-e)/2),v=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*g,o*l);break;case"YXY":i.set(c*g,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*g,o*u,o*l);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ki={DEG2RAD:Ci,RAD2DEG:Ii,generateUUID:gi,clamp:He,euclideanModulo:da,mapLinear:Tc,inverseLerp:Ac,lerp:Ni,damp:wc,pingpong:Rc,smoothstep:Cc,smootherstep:Nc,randInt:Pc,randFloat:Dc,randFloatSpread:Lc,seededRandom:Ic,degToRad:Uc,radToDeg:Fc,isPowerOfTwo:Oc,ceilPowerOfTwo:Bc,floorPowerOfTwo:zc,setQuaternionFromProperEuler:kc,normalize:At,denormalize:ci};class qe{static{qe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[a+0],g=s[a+1],v=s[a+2],y=s[a+3];if(h!==y||c!==d||l!==g||u!==v){let x=c*d+l*g+u*v+h*y;x<0&&(d=-d,g=-g,v=-v,y=-y,x=-x);let f=1-o;if(x<.9995){const w=Math.acos(x),R=Math.sin(w);f=Math.sin(f*w)/R,o=Math.sin(o*w)/R,c=c*f+d*o,l=l*f+g*o,u=u*f+v*o,h=h*f+y*o}else{c=c*f+d*o,l=l*f+g*o,u=u*f+v*o,h=h*f+y*o;const w=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=w,l*=w,u*=w,h*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+u*h+c*g-l*d,e[t+1]=c*v+u*d+l*h-o*g,e[t+2]=l*v+u*g+o*d-c*h,e[t+3]=u*v-o*h-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h-d*g*v;break;case"YXZ":this._x=d*u*h+l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h+d*g*v;break;case"ZXY":this._x=d*u*h-l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h-d*g*v;break;case"ZYX":this._x=d*u*h-l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h+d*g*v;break;case"YZX":this._x=d*u*h+l*g*v,this._y=l*g*h+d*u*v,this._z=l*u*v-d*g*h,this._w=l*u*h-d*g*v;break;case"XZY":this._x=d*u*h-l*g*v,this._y=l*g*h-d*u*v,this._z=l*u*v+d*g*h,this._w=l*u*h+d*g*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>h){const g=2*Math.sqrt(1+n-o-h);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>h){const g=2*Math.sqrt(1+o-n-h);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(He(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{z.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nr.copy(this).projectOnVector(e),this.sub(Nr)}reflect(e){return this.sub(Nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(He(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nr=new z,Oa=new _i;class Le{static{Le.prototype.isMatrix3=!0}constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],g=n[5],v=n[8],y=r[0],x=r[3],f=r[6],w=r[1],R=r[4],b=r[7],S=r[2],T=r[5],N=r[8];return s[0]=a*y+o*w+c*S,s[3]=a*x+o*R+c*T,s[6]=a*f+o*b+c*N,s[1]=l*y+u*w+h*S,s[4]=l*x+u*R+h*T,s[7]=l*f+u*b+h*N,s[2]=d*y+g*w+v*S,s[5]=d*x+g*R+v*T,s[8]=d*f+g*b+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,g=l*s-a*c,v=t*h+n*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*l-u*n)*y,e[2]=(o*n-r*a)*y,e[3]=d*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-o*t)*y,e[6]=g*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Le,Ba=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gc(){const i={enabled:!0,workingColorSpace:gr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=mn(r.r),r.g=mn(r.g),r.b=mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wn?_r:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gr]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:Ba,fromXYZ:za,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const We=Gc();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $n;class Vc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$n===void 0&&($n=Li("canvas")),$n.width=e.width,$n.height=e.height;const r=$n.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=$n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Li("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mn(t[n]/255)*255):t[n]=mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hc=0;class ua{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dr(r[a].image)):s.push(Dr(r[a]))}else s=Dr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let Wc=0;const Lr=new z;class Tt extends Xn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=hn,r=hn,s=bt,a=zn,o=Wt,c=Bt,l=Tt.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=gi(),this.name="",this.source=new ua(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Xo;Tt.DEFAULT_ANISOTROPY=1;class lt{static{lt.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],g=c[5],v=c[9],y=c[2],x=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+x)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,b=(g+1)/2,S=(f+1)/2,T=(u+d)/4,N=(h+y)/4,_=(v+x)/4;return R>b&&R>S?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=T/n,s=N/n):b>S?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=T/r,s=_/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=N/s,r=_/s),this.set(n,r,s,t),this}let w=Math.sqrt((x-v)*(x-v)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(x-v)/w,this.y=(h-y)/w,this.z=(d-u)/w,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=He(this.x,e.x,t.x),this.y=He(this.y,e.y,t.y),this.z=He(this.z,e.z,t.z),this.w=He(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=He(this.x,e,t),this.y=He(this.y,e,t),this.z=He(this.z,e,t),this.w=He(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(He(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xc extends Xn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Tt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ua(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends Xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class el extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jc extends Tt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{static{ut.prototype.isMatrix4=!0}constructor(e,t,n,r,s,a,o,c,l,u,h,d,g,v,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,g,v,y,x)}set(e,t,n,r,s,a,o,c,l,u,h,d,g,v,y,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=v,f[11]=y,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,g=a*h,v=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=g+v*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=v+g*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,g=c*h,v=l*u,y=l*h;t[0]=d+y*o,t[4]=v*o-g,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=g*o-v,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,g=c*h,v=l*u,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,g=a*h,v=o*u,y=o*h;t[0]=c*u,t[4]=v*l-g,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=g*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*l,v=o*c,y=o*l;t[0]=c*u,t[4]=y-d*h,t[8]=v*h+g,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=g*h+v,t[10]=d-y*h}else if(e.order==="XZY"){const d=a*c,g=a*l,v=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=a*u,t[9]=g*h-v,t[2]=v*h-g,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qc,e,Yc)}lookAt(e,t,n){const r=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),bn.crossVectors(n,Pt),bn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),bn.crossVectors(n,Pt)),bn.normalize(),Gi.crossVectors(Pt,bn),r[0]=bn.x,r[4]=Gi.x,r[8]=Pt.x,r[1]=bn.y,r[5]=Gi.y,r[9]=Pt.y,r[2]=bn.z,r[6]=Gi.z,r[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],g=n[13],v=n[2],y=n[6],x=n[10],f=n[14],w=n[3],R=n[7],b=n[11],S=n[15],T=r[0],N=r[4],_=r[8],A=r[12],D=r[1],C=r[5],F=r[9],X=r[13],j=r[2],k=r[6],Y=r[10],H=r[14],J=r[3],ee=r[7],ce=r[11],he=r[15];return s[0]=a*T+o*D+c*j+l*J,s[4]=a*N+o*C+c*k+l*ee,s[8]=a*_+o*F+c*Y+l*ce,s[12]=a*A+o*X+c*H+l*he,s[1]=u*T+h*D+d*j+g*J,s[5]=u*N+h*C+d*k+g*ee,s[9]=u*_+h*F+d*Y+g*ce,s[13]=u*A+h*X+d*H+g*he,s[2]=v*T+y*D+x*j+f*J,s[6]=v*N+y*C+x*k+f*ee,s[10]=v*_+y*F+x*Y+f*ce,s[14]=v*A+y*X+x*H+f*he,s[3]=w*T+R*D+b*j+S*J,s[7]=w*N+R*C+b*k+S*ee,s[11]=w*_+R*F+b*Y+S*ce,s[15]=w*A+R*X+b*H+S*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],g=e[14],v=e[3],y=e[7],x=e[11],f=e[15],w=c*g-l*d,R=o*g-l*h,b=o*d-c*h,S=a*g-l*u,T=a*d-c*u,N=a*h-o*u;return t*(y*w-x*R+f*b)-n*(v*w-x*S+f*T)+r*(v*R-y*S+f*N)-s*(v*b-y*T+x*N)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],g=e[11],v=e[12],y=e[13],x=e[14],f=e[15],w=t*o-n*a,R=t*c-r*a,b=t*l-s*a,S=n*c-r*o,T=n*l-s*o,N=r*l-s*c,_=u*y-h*v,A=u*x-d*v,D=u*f-g*v,C=h*x-d*y,F=h*f-g*y,X=d*f-g*x,j=w*X-R*F+b*C+S*D-T*A+N*_;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/j;return e[0]=(o*X-c*F+l*C)*k,e[1]=(r*F-n*X-s*C)*k,e[2]=(y*N-x*T+f*S)*k,e[3]=(d*T-h*N-g*S)*k,e[4]=(c*D-a*X-l*A)*k,e[5]=(t*X-r*D+s*A)*k,e[6]=(x*b-v*N-f*R)*k,e[7]=(u*N-d*b+g*R)*k,e[8]=(a*F-o*D+l*_)*k,e[9]=(n*D-t*F-s*_)*k,e[10]=(v*T-y*b+f*w)*k,e[11]=(h*b-u*T-g*w)*k,e[12]=(o*A-a*C-c*_)*k,e[13]=(t*C-n*A+r*_)*k,e[14]=(y*R-v*S-x*w)*k,e[15]=(u*S-h*R+d*w)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,g=s*u,v=s*h,y=a*u,x=a*h,f=o*h,w=c*l,R=c*u,b=c*h,S=n.x,T=n.y,N=n.z;return r[0]=(1-(y+f))*S,r[1]=(g+b)*S,r[2]=(v-R)*S,r[3]=0,r[4]=(g-b)*T,r[5]=(1-(d+f))*T,r[6]=(x+w)*T,r[7]=0,r[8]=(v+R)*N,r[9]=(x-w)*N,r[10]=(1-(d+y))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Kn.set(r[0],r[1],r[2]).length();const o=Kn.set(r[4],r[5],r[6]).length(),c=Kn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kt.copy(this);const l=1/a,u=1/o,h=1/c;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=Jt,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),g=(n+r)/(n-r);let v,y;if(c)v=s/(a-s),y=a*s/(a-s);else if(o===Jt)v=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===vr)v=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Jt,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),g=-(n+r)/(n-r);let v,y;if(c)v=1/(a-s),y=a/(a-s);else if(o===Jt)v=-2/(a-s),y=-(a+s)/(a-s);else if(o===vr)v=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Kn=new z,kt=new ut,qc=new z(0,0,0),Yc=new z(1,1,1),bn=new z,Gi=new z,Pt=new z,ka=new ut,Ga=new _i;class Wn{constructor(e=0,t=0,n=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ka,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $c=0;const Va=new z,Zn=new _i,on=new ut,Vi=new z,Mi=new z,Kc=new z,Zc=new _i,Ha=new z(1,0,0),Wa=new z(0,1,0),Xa=new z(0,0,1),ja={type:"added"},Jc={type:"removed"},Jn={type:"childadded",child:null},Ir={type:"childremoved",child:null};class It extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new z,t=new Wn,n=new _i,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Le}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(Ha,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Va.copy(e).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ha,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vi.copy(e):Vi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Mi,Vi,this.up):on.lookAt(Vi,Mi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),Zn.setFromRotationMatrix(on),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,e,Kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,Zc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new z(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hi extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qc={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const x=t.getJointPose(y,n),f=this._getHandJoint(l,y);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,v=.005;l.inputState.pinching&&d>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=We.workingColorSpace){if(e=da(e,1),t=He(t,0,1),n=He(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fr(a,s,e+1/3),this.g=Fr(a,s,e),this.b=Fr(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mn(e.r),this.g=mn(e.g),this.b=mn(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return We.workingToColorSpace(yt.copy(this),e),Math.round(He(yt.r*255,0,255))*65536+Math.round(He(yt.g*255,0,255))*256+Math.round(He(yt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(yt.copy(this),t);const n=yt.r,r=yt.g,s=yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Lt){We.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,r=yt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Wi);const n=Ni(Sn.h,Wi.h,t),r=Ni(Sn.s,Wi.s,t),s=Ni(Sn.l,Wi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new $e;$e.NAMES=nl;class ed extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gt=new z,ln=new z,Or=new z,cn=new z,Qn=new z,ei=new z,qa=new z,Br=new z,zr=new z,kr=new z,Gr=new lt,Vr=new lt,Hr=new lt;class Ht{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),ln.subVectors(n,t),Or.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(ln),c=Gt.dot(Or),l=ln.dot(ln),u=ln.dot(Or),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(l*c-o*u)*d,v=(a*u-o*c)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Gr.setScalar(0),Vr.setScalar(0),Hr.setScalar(0),Gr.fromBufferAttribute(e,t),Vr.fromBufferAttribute(e,n),Hr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gr,s.x),a.addScaledVector(Vr,s.y),a.addScaledVector(Hr,s.z),a}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),ln.subVectors(e,t),Gt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Gt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ei.subVectors(s,n),Br.subVectors(e,n);const c=Qn.dot(Br),l=ei.dot(Br);if(c<=0&&l<=0)return t.copy(n);zr.subVectors(e,r);const u=Qn.dot(zr),h=ei.dot(zr);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Qn,a);kr.subVectors(e,s);const g=Qn.dot(kr),v=ei.dot(kr);if(v>=0&&g<=v)return t.copy(s);const y=g*l-c*v;if(y<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(ei,o);const x=u*v-g*h;if(x<=0&&h-u>=0&&g-v>=0)return qa.subVectors(s,r),o=(h-u)/(h-u+(g-v)),t.copy(r).addScaledVector(qa,o);const f=1/(x+y+d);return a=y*f,o=d*f,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ui{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vt):Vt.fromBufferAttribute(s,a),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(e.matrixWorld),this.union(Xi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bi),ji.subVectors(this.max,bi),ti.subVectors(e.a,bi),ni.subVectors(e.b,bi),ii.subVectors(e.c,bi),En.subVectors(ni,ti),yn.subVectors(ii,ni),Dn.subVectors(ti,ii);let t=[0,-En.z,En.y,0,-yn.z,yn.y,0,-Dn.z,Dn.y,En.z,0,-En.x,yn.z,0,-yn.x,Dn.z,0,-Dn.x,-En.y,En.x,0,-yn.y,yn.x,0,-Dn.y,Dn.x,0];return!Wr(t,ti,ni,ii,ji)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,ti,ni,ii,ji))?!1:(qi.crossVectors(En,yn),t=[qi.x,qi.y,qi.z],Wr(t,ti,ni,ii,ji))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new z,new z,new z,new z,new z,new z,new z,new z],Vt=new z,Xi=new Ui,ti=new z,ni=new z,ii=new z,En=new z,yn=new z,Dn=new z,bi=new z,ji=new z,qi=new z,Ln=new z;function Wr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Ln.fromArray(i,s);const o=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),c=e.dot(Ln),l=t.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ht=new z,Yi=new qe;let td=0;class tn extends Xn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:td++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yi.fromBufferAttribute(this,t),Yi.applyMatrix3(e),this.setXY(t,Yi.x,Yi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class il extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rl extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const nd=new Ui,Si=new z,Xr=new z;class fa{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Si,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(Xr)),this.expandByPoint(Si.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let id=0;const Ft=new ut,jr=new It,ri=new z,Dt=new Ui,Ei=new Ui,_t=new z;class an extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?rl:il)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Le().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Dt.min,Ei.min),Dt.expandByPoint(_t),_t.addVectors(Dt.max,Ei.max),Dt.expandByPoint(_t)):(Dt.expandByPoint(Ei.min),Dt.expandByPoint(Ei.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(e,l),_t.add(ri)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new z,c[_]=new z;const l=new z,u=new z,h=new z,d=new qe,g=new qe,v=new qe,y=new z,x=new z;function f(_,A,D){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,D),d.fromBufferAttribute(s,_),g.fromBufferAttribute(s,A),v.fromBufferAttribute(s,D),u.sub(l),h.sub(l),g.sub(d),v.sub(d);const C=1/(g.x*v.y-v.x*g.y);isFinite(C)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(h,-g.y).multiplyScalar(C),x.copy(h).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(C),o[_].add(y),o[A].add(y),o[D].add(y),c[_].add(x),c[A].add(x),c[D].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,A=w.length;_<A;++_){const D=w[_],C=D.start,F=D.count;for(let X=C,j=C+F;X<j;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const R=new z,b=new z,S=new z,T=new z;function N(_){S.fromBufferAttribute(r,_),T.copy(S);const A=o[_];R.copy(A),R.sub(S.multiplyScalar(S.dot(A))).normalize(),b.crossVectors(T,A);const C=b.dot(c[_])<0?-1:1;a.setXYZW(_,R.x,R.y,R.z,C)}for(let _=0,A=w.length;_<A;++_){const D=w[_],C=D.start,F=D.count;for(let X=C,j=C+F;X<j;X+=3)N(e.getX(X+0)),N(e.getX(X+1)),N(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,a=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),y=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,x),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let g=0,v=0;for(let y=0,x=c.length;y<x;y++){o.isInterleavedBufferAttribute?g=c[y]*o.data.stride+o.offset:g=c[y]*u;for(let f=0;f<u;f++)d[v++]=l[g++]}return new tn(d,u,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new an,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],g=e(d,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const g=l[h];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rd=0;class br extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=di,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cs,this.blendDst=ds,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cs&&(n.blendSrc=this.blendSrc),this.blendDst!==ds&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const un=new z,qr=new z,$i=new z,Tn=new z,Yr=new z,Ki=new z,$r=new z;class sd{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,a=-this.direction.dot($i),o=Tn.dot(this.direction),c=-Tn.dot($i),l=Tn.lengthSq(),u=Math.abs(1-a*a);let h,d,g,v;if(u>0)if(h=a*c-o,d=a*o-c,v=s*u,h>=0)if(d>=-v)if(d<=v){const y=1/u;h*=y,d*=y,g=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),g=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(qr).addScaledVector($i,d),g}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){Yr.subVectors(t,e),Ki.subVectors(n,e),$r.crossVectors(Yr,Ki);let a=this.direction.dot($r),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(Ki.crossVectors(Tn,Ki));if(c<0)return null;const l=o*this.direction.dot(Yr.cross(Tn));if(l<0||c+l>a)return null;const u=-o*Tn.dot($r);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ha extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ya=new ut,In=new sd,Zi=new fa,$a=new z,Ji=new z,Qi=new z,er=new z,Kr=new z,tr=new z,Ka=new z,nr=new z;class rn extends It{constructor(e=new an,t=new ha){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(Kr.fromBufferAttribute(h,e),a?tr.addScaledVector(Kr,u):tr.addScaledVector(Kr.sub(t),u))}t.add(tr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(Zi.containsPoint(In.origin)===!1&&(In.intersectSphere(Zi,$a)===null||In.origin.distanceToSquared($a)>(e.far-e.near)**2))&&(Ya.copy(s).invert(),In.copy(e.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const x=d[v],f=a[x.materialIndex],w=Math.max(x.start,g.start),R=Math.min(o.count,Math.min(x.start+x.count,g.start+g.count));for(let b=w,S=R;b<S;b+=3){const T=o.getX(b),N=o.getX(b+1),_=o.getX(b+2);r=ir(this,f,e,n,l,u,h,T,N,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let x=v,f=y;x<f;x+=3){const w=o.getX(x),R=o.getX(x+1),b=o.getX(x+2);r=ir(this,a,e,n,l,u,h,w,R,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){const x=d[v],f=a[x.materialIndex],w=Math.max(x.start,g.start),R=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let b=w,S=R;b<S;b+=3){const T=b,N=b+1,_=b+2;r=ir(this,f,e,n,l,u,h,T,N,_),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(c.count,g.start+g.count);for(let x=v,f=y;x<f;x+=3){const w=x,R=x+1,b=x+2;r=ir(this,a,e,n,l,u,h,w,R,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function ad(i,e,t,n,r,s,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Nn,o),c===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(nr);return l<t.near||l>t.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ji),i.getVertexPosition(c,Qi),i.getVertexPosition(l,er);const u=ad(i,e,t,n,Ji,Qi,er,Ka);if(u){const h=new z;Ht.getBarycoord(Ka,Ji,Qi,er,h),r&&(u.uv=Ht.getInterpolatedAttribute(r,o,c,l,h,new qe)),s&&(u.uv1=Ht.getInterpolatedAttribute(s,o,c,l,h,new qe)),a&&(u.normal=Ht.getInterpolatedAttribute(a,o,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};Ht.getNormal(Ji,Qi,er,d.normal),u.face=d,u.barycoord=h}return u}class od extends Tt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Mt,u=Mt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zr=new z,ld=new z,cd=new Le;class Fn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zr.subVectors(n,t).cross(ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(Zr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cd.getNormalMatrix(e),r=this.coplanarPoint(Zr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new fa,dd=new qe(.5,.5),rr=new z;class sl{constructor(e=new Fn,t=new Fn,n=new Fn,r=new Fn,s=new Fn,a=new Fn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],g=s[7],v=s[8],y=s[9],x=s[10],f=s[11],w=s[12],R=s[13],b=s[14],S=s[15];if(r[0].setComponents(l-a,g-u,f-v,S-w).normalize(),r[1].setComponents(l+a,g+u,f+v,S+w).normalize(),r[2].setComponents(l+o,g+h,f+y,S+R).normalize(),r[3].setComponents(l-o,g-h,f-y,S-R).normalize(),n)r[4].setComponents(c,d,x,b).normalize(),r[5].setComponents(l-c,g-d,f-x,S-b).normalize();else if(r[4].setComponents(l-c,g-d,f-x,S-b).normalize(),t===Jt)r[5].setComponents(l+c,g+d,f+x,S+b).normalize();else if(t===vr)r[5].setComponents(c,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=dd.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(rr.x=r.normal.x>0?e.max.x:e.min.x,rr.y=r.normal.y>0?e.max.y:e.min.y,rr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class al extends Tt{constructor(e=[],t=Vn,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mi extends Tt{constructor(e,t,n=nn,r,s,a,o=Mt,c=Mt,l,u=gn,h=1){if(u!==gn&&u!==kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ua(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ud extends mi{constructor(e,t=nn,n=Vn,r,s,a=Mt,o=Mt,c,l=gn){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ol extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fi extends an{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function v(y,x,f,w,R,b,S,T,N,_,A){const D=b/N,C=S/_,F=b/2,X=S/2,j=T/2,k=N+1,Y=_+1;let H=0,J=0;const ee=new z;for(let ce=0;ce<Y;ce++){const he=ce*C-X;for(let _e=0;_e<k;_e++){const ve=_e*D-F;ee[y]=ve*w,ee[x]=he*R,ee[f]=j,l.push(ee.x,ee.y,ee.z),ee[y]=0,ee[x]=0,ee[f]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(_e/N),h.push(1-ce/_),H+=1}}for(let ce=0;ce<_;ce++)for(let he=0;he<N;he++){const _e=d+he+k*ce,ve=d+he+k*(ce+1),Fe=d+(he+1)+k*(ce+1),Ge=d+(he+1)+k*ce;c.push(_e,ve,Ge),c.push(ve,Fe,Ge),J+=6}o.addGroup(g,J,A),g+=J,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sr extends an{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,g=[],v=[],y=[],x=[];for(let f=0;f<u;f++){const w=f*d-a;for(let R=0;R<l;R++){const b=R*h-s;v.push(b,-w,0),y.push(0,0,1),x.push(R/o),x.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){const R=w+l*f,b=w+l*(f+1),S=w+1+l*(f+1),T=w+1+l*f;g.push(R,b,T),g.push(b,S,T)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class pa extends an{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new z,d=new z,g=[],v=[],y=[],x=[];for(let f=0;f<=n;f++){const w=[],R=f/n,b=a+R*o,S=e*Math.cos(b),T=Math.sqrt(e*e-S*S);let N=0;f===0&&a===0?N=.5/t:f===n&&c===Math.PI&&(N=-.5/t);for(let _=0;_<=t;_++){const A=_/t,D=r+A*s;h.x=-T*Math.cos(D),h.y=S,h.z=T*Math.sin(D),v.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),x.push(A+N,1-R),w.push(l++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const R=u[f][w+1],b=u[f][w],S=u[f+1][w],T=u[f+1][w+1];(f!==0||a>0)&&g.push(R,b,T),(f!==n-1||c<Math.PI)&&g.push(b,S,T)}this.setIndex(g),this.setAttribute("position",new zt(v,3)),this.setAttribute("normal",new zt(y,3)),this.setAttribute("uv",new zt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Za(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Za(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=xi(i[t]);for(const r in n)e[r]=n[r]}return e}function Za(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function fd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ll(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const hd={clone:xi,merge:wt};var pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=fd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new lt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ut().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xd extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gd extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _d extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ja(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ja(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ja(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class vd{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const g=l[h],v=l[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Md=new vd;class ma{constructor(e){this.manager=e!==void 0?e:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ma.DEFAULT_MATERIAL_NAME="__DEFAULT";const si=new WeakMap;class bd extends ma{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Jr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=si.get(a);h===void 0&&(h=[],si.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=Li("img");function c(){u(),t&&t(this);const h=si.get(this)||[];for(let d=0;d<h.length;d++){const g=h[d];g.onLoad&&g.onLoad(this)}si.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Jr.remove(`image:${e}`);const d=si.get(this)||[];for(let g=0;g<d.length;g++){const v=d[g];v.onError&&v.onError(h)}si.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jr.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Sd extends ma{constructor(e){super(e)}load(e,t,n,r){const s=new Tt,a=new bd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}const sr=new z,ar=new _i,Yt=new z;class cl extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Jt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sr,ar,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,ar,Yt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sr,ar,Yt),Yt.x===1&&Yt.y===1&&Yt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,ar,Yt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const An=new z,Qa=new qe,eo=new qe;class Ot extends cl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ii*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,eo),t.subVectors(eo,Qa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dl extends cl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=-90,oi=1;class Ed extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ot(ai,oi,e,t);r.layers=this.layers,this.add(r);const s=new Ot(ai,oi,e,t);s.layers=this.layers,this.add(s);const a=new Ot(ai,oi,e,t);a.layers=this.layers,this.add(a);const o=new Ot(ai,oi,e,t);o.layers=this.layers,this.add(o);const c=new Ot(ai,oi,e,t);c.layers=this.layers,this.add(c);const l=new Ot(ai,oi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Jt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class yd extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ul{static{ul.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}function to(i,e,t,n){const r=Td(n);switch(t){case Ko:return i*e;case Jo:return i*e/r.components*r.byteLength;case sa:return i*e/r.components*r.byteLength;case Hn:return i*e*2/r.components*r.byteLength;case aa:return i*e*2/r.components*r.byteLength;case Zo:return i*e*3/r.components*r.byteLength;case Wt:return i*e*4/r.components*r.byteLength;case oa:return i*e*4/r.components*r.byteLength;case dr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fr:case hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bs:case Es:return Math.max(i,16)*Math.max(e,8)/4;case Ms:case Ss:return Math.max(i,8)*Math.max(e,8)/2;case ys:case Ts:case ws:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case As:case mr:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ps:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ls:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Us:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ks:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ws:case Xs:case js:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qs:case Ys:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xr:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Td(i){switch(i){case Bt:case jo:return{byteLength:1,components:1};case Pi:case qo:case xn:return{byteLength:2,components:1};case ia:case ra:return{byteLength:2,components:4};case nn:case na:case Zt:return{byteLength:4,components:1};case Yo:case $o:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ad(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<h.length;g++){const v=h[d],y=h[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let g=0,v=h.length;g<v;g++){const y=h[g];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,su=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,au=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_u=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ou=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ku=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ff=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Of=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,th=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ih=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ah=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:wd,alphahash_pars_fragment:Rd,alphamap_fragment:Cd,alphamap_pars_fragment:Nd,alphatest_fragment:Pd,alphatest_pars_fragment:Dd,aomap_fragment:Ld,aomap_pars_fragment:Id,batching_pars_vertex:Ud,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:zd,iridescence_fragment:kd,bumpmap_pars_fragment:Gd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:jd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:$d,common:Kd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:Qd,displacementmap_vertex:eu,emissivemap_fragment:tu,emissivemap_pars_fragment:nu,colorspace_fragment:iu,colorspace_pars_fragment:ru,envmap_fragment:su,envmap_common_pars_fragment:au,envmap_pars_fragment:ou,envmap_pars_vertex:lu,envmap_physical_pars_fragment:vu,envmap_vertex:cu,fog_vertex:du,fog_pars_vertex:uu,fog_fragment:fu,fog_pars_fragment:hu,gradientmap_pars_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:xu,lights_lambert_pars_fragment:gu,lights_pars_begin:_u,lights_toon_fragment:Mu,lights_toon_pars_fragment:bu,lights_phong_fragment:Su,lights_phong_pars_fragment:Eu,lights_physical_fragment:yu,lights_physical_pars_fragment:Tu,lights_fragment_begin:Au,lights_fragment_maps:wu,lights_fragment_end:Ru,lightprobes_pars_fragment:Cu,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Lu,map_fragment:Iu,map_pars_fragment:Uu,map_particle_fragment:Fu,map_particle_pars_fragment:Ou,metalnessmap_fragment:Bu,metalnessmap_pars_fragment:zu,morphinstance_vertex:ku,morphcolor_vertex:Gu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Hu,morphtarget_vertex:Wu,normal_fragment_begin:Xu,normal_fragment_maps:ju,normal_pars_fragment:qu,normal_pars_vertex:Yu,normal_vertex:$u,normalmap_pars_fragment:Ku,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Ju,clearcoat_pars_fragment:Qu,iridescence_pars_fragment:ef,opaque_fragment:tf,packing:nf,premultiplied_alpha_fragment:rf,project_vertex:sf,dithering_fragment:af,dithering_pars_fragment:of,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:uf,shadowmap_vertex:ff,shadowmask_pars_fragment:hf,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:xf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:vf,tonemapping_fragment:Mf,tonemapping_pars_fragment:bf,transmission_fragment:Sf,transmission_pars_fragment:Ef,uv_pars_fragment:yf,uv_pars_vertex:Tf,uv_vertex:Af,worldpos_vertex:wf,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Nf,backgroundCube_frag:Pf,cube_vert:Df,cube_frag:Lf,depth_vert:If,depth_frag:Uf,distance_vert:Ff,distance_frag:Of,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:kf,linedashed_frag:Gf,meshbasic_vert:Vf,meshbasic_frag:Hf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:jf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:Zf,meshphysical_vert:Jf,meshphysical_frag:Qf,meshtoon_vert:eh,meshtoon_frag:th,points_vert:nh,points_frag:ih,shadow_vert:rh,shadow_frag:sh,sprite_vert:ah,sprite_frag:oh},ue={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},Kt={basic:{uniforms:wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new $e(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:wt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:wt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:wt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:wt([ue.common,ue.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:wt([ue.lights,ue.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Kt.physical={uniforms:wt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const or={r:0,b:0,g:0},lh=new ut,hl=new Le;hl.set(-1,0,0,0,1,0,0,0,1);function ch(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function g(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const b=w.backgroundBlurriness>0;R=e.get(R,b)}return R}function v(w){let R=!1;const b=g(w);b===null?x(a,o):b&&b.isColor&&(x(b,1),R=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(w,R){const b=g(R);b&&(b.isCubeTexture||b.mapping===Mr)?(l===void 0&&(l=new rn(new Fi(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:xi(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lh.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hl),l.material.toneMapped=We.getTransfer(b.colorSpace)!==Ze,(u!==b||h!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new rn(new Sr(2,2),new sn({name:"BackgroundMaterial",uniforms:xi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=We.getTransfer(b.colorSpace)!==Ze,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function x(w,R){w.getRGB(or,ll(i)),t.buffers.color.setClear(or.r,or.g,or.b,R,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,R=1){a.set(w),o=R,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,x(a,o)},render:v,addToRenderList:y,dispose:f}}function dh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(C,F,X,j,k){let Y=!1;const H=h(C,j,X,F);s!==H&&(s=H,l(s.object)),Y=g(C,j,X,k),Y&&v(C,j,X,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(C,F,X,j),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function h(C,F,X,j){const k=j.wireframe===!0;let Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);const H=C.isInstancedMesh===!0?C.id:0;let J=Y[H];J===void 0&&(J={},Y[H]=J);let ee=J[X.id];ee===void 0&&(ee={},J[X.id]=ee);let ce=ee[k];return ce===void 0&&(ce=d(c()),ee[k]=ce),ce}function d(C){const F=[],X=[],j=[];for(let k=0;k<t;k++)F[k]=0,X[k]=0,j[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:j,object:C,attributes:{},index:null}}function g(C,F,X,j){const k=s.attributes,Y=F.attributes;let H=0;const J=X.getAttributes();for(const ee in J)if(J[ee].location>=0){const he=k[ee];let _e=Y[ee];if(_e===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(_e=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(_e=C.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;H++}return s.attributesNum!==H||s.index!==j}function v(C,F,X,j){const k={},Y=F.attributes;let H=0;const J=X.getAttributes();for(const ee in J)if(J[ee].location>=0){let he=Y[ee];he===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(he=C.instanceColor));const _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),k[ee]=_e,H++}s.attributes=k,s.attributesNum=H,s.index=j}function y(){const C=s.newAttributes;for(let F=0,X=C.length;F<X;F++)C[F]=0}function x(C){f(C,0)}function f(C,F){const X=s.newAttributes,j=s.enabledAttributes,k=s.attributeDivisors;X[C]=1,j[C]===0&&(i.enableVertexAttribArray(C),j[C]=1),k[C]!==F&&(i.vertexAttribDivisor(C,F),k[C]=F)}function w(){const C=s.newAttributes,F=s.enabledAttributes;for(let X=0,j=F.length;X<j;X++)F[X]!==C[X]&&(i.disableVertexAttribArray(X),F[X]=0)}function R(C,F,X,j,k,Y,H){H===!0?i.vertexAttribIPointer(C,F,X,k,Y):i.vertexAttribPointer(C,F,X,j,k,Y)}function b(C,F,X,j){y();const k=j.attributes,Y=X.getAttributes(),H=F.defaultAttributeValues;for(const J in Y){const ee=Y[J];if(ee.location>=0){let ce=k[J];if(ce===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const he=ce.normalized,_e=ce.itemSize,ve=e.get(ce);if(ve===void 0)continue;const Fe=ve.buffer,Ge=ve.type,$=ve.bytesPerElement,ie=Ge===i.INT||Ge===i.UNSIGNED_INT||ce.gpuType===na;if(ce.isInterleavedBufferAttribute){const te=ce.data,Ce=te.stride,Ne=ce.offset;if(te.isInstancedInterleavedBuffer){for(let we=0;we<ee.locationSize;we++)f(ee.location+we,te.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<ee.locationSize;we++)x(ee.location+we);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let we=0;we<ee.locationSize;we++)R(ee.location+we,_e/ee.locationSize,Ge,he,Ce*$,(Ne+_e/ee.locationSize*we)*$,ie)}else{if(ce.isInstancedBufferAttribute){for(let te=0;te<ee.locationSize;te++)f(ee.location+te,ce.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let te=0;te<ee.locationSize;te++)x(ee.location+te);i.bindBuffer(i.ARRAY_BUFFER,Fe);for(let te=0;te<ee.locationSize;te++)R(ee.location+te,_e/ee.locationSize,Ge,he,_e*$,_e/ee.locationSize*te*$,ie)}}else if(H!==void 0){const he=H[J];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(ee.location,he);break;case 3:i.vertexAttrib3fv(ee.location,he);break;case 4:i.vertexAttrib4fv(ee.location,he);break;default:i.vertexAttrib1fv(ee.location,he)}}}}w()}function S(){A();for(const C in n){const F=n[C];for(const X in F){const j=F[X];for(const k in j){const Y=j[k];for(const H in Y)u(Y[H].object),delete Y[H];delete j[k]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;const F=n[C.id];for(const X in F){const j=F[X];for(const k in j){const Y=j[k];for(const H in Y)u(Y[H].object),delete Y[H];delete j[k]}}delete n[C.id]}function N(C){for(const F in n){const X=n[F];for(const j in X){const k=X[j];if(k[C.id]===void 0)continue;const Y=k[C.id];for(const H in Y)u(Y[H].object),delete Y[H];delete k[C.id]}}}function _(C){for(const F in n){const X=n[F],j=C.isInstancedMesh===!0?C.id:0,k=X[j];if(k!==void 0){for(const Y in k){const H=k[Y];for(const J in H)u(H[J].object),delete H[J];delete k[Y]}delete X[j],Object.keys(X).length===0&&delete n[F]}}}function A(){D(),a=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function uh(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function fh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==Wt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const _=N===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Bt&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Zt&&!_)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Pe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:b,maxSamples:S,samples:T}}function hh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fn,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||r;return r=d,n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,g){const v=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,f=i.get(h);if(!r||v===null||v.length===0||s&&!x)s?u(null):l();else{const w=s?0:n,R=w*4;let b=f.clippingState||null;c.value=b,b=u(v,d,R,g);for(let S=0;S!==R;++S)b[S]=t[S];f.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,g,v){const y=h!==null?h.length:0;let x=null;if(y!==0){if(x=c.value,v!==!0||x===null){const f=g+y*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(x===null||x.length<f)&&(x=new Float32Array(f));for(let R=0,b=g;R!==y;++R,b+=4)a.copy(h[R]).applyMatrix4(w,o),a.normal.toArray(x,b),x[b+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}const Rn=4,no=[.125,.215,.35,.446,.526,.582],Bn=20,ph=256,yi=new dl,io=new $e;let Qr=null,es=0,ts=0,ns=!1;const mh=new z;class ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=mh}=s;Qr=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ts=this._renderer.getActiveMipmapLevel(),ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,es,ts),this._renderer.xr.enabled=ns,e.scissorTest=!1,li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vn||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ts=this._renderer.getActiveMipmapLevel(),ns=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:xn,format:Wt,colorSpace:gr,depthBuffer:!1},r=so(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=so(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xh(s)),this._blurMaterial=_h(s,e,t),this._ggxMaterial=gh(s,e,t)}return r}_compileMaterial(e){const t=new rn(new an,e);this._renderer.compile(t,yi)}_sceneToCubeUV(e,t,n,r,s){const c=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(io),h.toneMapping=Qt,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new Fi,new ha({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,x=y.material;let f=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,f=!0):(x.color.copy(io),f=!0);for(let R=0;R<6;R++){const b=R%3;b===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[R],s.y,s.z)):b===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[R]));const S=this._cubeSize;li(r,b*S,R>2?S:0,S,S),h.setRenderTarget(r),f&&h.render(y,c),h.render(e,c)}h.toneMapping=g,h.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vn||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;li(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,yi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,g=h*d,{_lodMax:v}=this,y=this._sizeLods[n],x=3*y*(n>v-Rn?n-v+Rn:0),f=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=v-t,li(s,x,f,3*y,2*y),r.setRenderTarget(s),r.render(o,yi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,li(e,x,f,3*y,2*y),r.setRenderTarget(e),r.render(o,yi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=l;const d=l.uniforms,g=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Bn-1),y=s/v,x=isFinite(s)?1+Math.floor(u*y):Bn;x>Bn&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Bn}`);const f=[];let w=0;for(let N=0;N<Bn;++N){const _=N/y,A=Math.exp(-_*_/2);f.push(A),N===0?w+=A:N<x&&(w+=2*A)}for(let N=0;N<f.length;N++)f[N]=f[N]/w;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:R}=this;d.dTheta.value=v,d.mipInt.value=R-n;const b=this._sizeLods[r],S=3*b*(r>R-Rn?r-R+Rn:0),T=4*(this._cubeSize-b);li(t,S,T,3*b,2*b),c.setRenderTarget(t),c.render(h,yi)}}function xh(i){const e=[],t=[],n=[];let r=i;const s=i-Rn+1+no.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Rn?c=no[a-i+Rn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,v=6,y=3,x=2,f=1,w=new Float32Array(y*v*g),R=new Float32Array(x*v*g),b=new Float32Array(f*v*g);for(let T=0;T<g;T++){const N=T%3*2/3-1,_=T>2?0:-1,A=[N,_,0,N+2/3,_,0,N+2/3,_+1,0,N,_,0,N+2/3,_+1,0,N,_+1,0];w.set(A,y*v*T),R.set(d,x*v*T);const D=[T,T,T,T,T,T];b.set(D,f*v*T)}const S=new an;S.setAttribute("position",new tn(w,y)),S.setAttribute("uv",new tn(R,x)),S.setAttribute("faceIndex",new tn(b,f)),n.push(new rn(S,null)),r>Rn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function so(i,e,t){const n=new en(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function li(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gh(i,e,t){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ph,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Er(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function _h(i,e,t){const n=new Float32Array(Bn),r=new z(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ao(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function oo(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Er(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Er(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class pl extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new al(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),s=new sn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:pn});s.uniforms.tEquirect.value=t;const a=new rn(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=bt),new Ed(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function vh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,g=!1){return d==null?null:g?a(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===wr||g===Rr)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new pl(v.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const g=d.mapping,v=g===wr||g===Rr,y=g===Vn||g===pi;if(v||y){let x=t.get(d);const f=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new ro(i)),x=v?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const w=d.image;return v&&w&&w.height>0||y&&w&&c(w)?(n===null&&(n=new ro(i)),x=v?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function o(d,g){return g===wr?d.mapping=Vn:g===Rr&&(d.mapping=pi),d}function c(d){let g=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&g++;return g===v}function l(d){const g=d.target;g.removeEventListener("dispose",l);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function u(d){const g=d.target;g.removeEventListener("dispose",u);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function Mh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ui("WebGLRenderer: "+n+" extension not supported."),r}}}function bh(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER)}function l(h){const d=[],g=h.index,v=h.attributes.position;let y=0;if(v===void 0)return;if(g!==null){const w=g.array;y=g.version;for(let R=0,b=w.length;R<b;R+=3){const S=w[R+0],T=w[R+1],N=w[R+2];d.push(S,T,T,N,N,S)}}else{const w=v.array;y=v.version;for(let R=0,b=w.length/3-1;R<b;R+=3){const S=R+0,T=R+1,N=R+2;d.push(S,T,T,N,N,S)}}const x=new(v.count>=65535?rl:il)(d,1);x.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,x)}function u(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Sh(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*a),t.update(d,n,1)}function l(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*a,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let y=0;for(let x=0;x<g;x++)y+=d[x];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Eh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yh(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let A=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let R=0;g===!0&&(R=1),v===!0&&(R=2),y===!0&&(R=3);let b=o.attributes.position.count*R,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*S*4*h),N=new el(T,b,S,h);N.type=Zt,N.needsUpdate=!0;const _=R*4;for(let D=0;D<h;D++){const C=x[D],F=f[D],X=w[D],j=b*S*4*D;for(let k=0;k<C.count;k++){const Y=k*_;g===!0&&(r.fromBufferAttribute(C,k),T[j+Y+0]=r.x,T[j+Y+1]=r.y,T[j+Y+2]=r.z,T[j+Y+3]=0),v===!0&&(r.fromBufferAttribute(F,k),T[j+Y+4]=r.x,T[j+Y+5]=r.y,T[j+Y+6]=r.z,T[j+Y+7]=0),y===!0&&(r.fromBufferAttribute(X,k),T[j+Y+8]=r.x,T[j+Y+9]=r.y,T[j+Y+10]=r.z,T[j+Y+11]=X.itemSize===4?r.w:1)}}d={count:h,texture:N,size:new qe(b,S)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let y=0;y<l.length;y++)g+=l[y];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Th(i,e,t,n,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return d}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Ah={[Bo]:"LINEAR_TONE_MAPPING",[zo]:"REINHARD_TONE_MAPPING",[ko]:"CINEON_TONE_MAPPING",[Go]:"ACES_FILMIC_TONE_MAPPING",[Ho]:"AGX_TONE_MAPPING",[Wo]:"NEUTRAL_TONE_MAPPING",[Vo]:"CUSTOM_TONE_MAPPING"};function wh(i,e,t,n,r,s){const a=new en(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new mi(e,t):void 0}),o=new en(e,t,{type:xn,depthBuffer:!1,stencilBuffer:!1}),c=new an;c.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new zt([0,2,0,0,2,0],2));const l=new xd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new rn(c,l),h=new dl(-1,1,1,-1,0,1);let d=null,g=null,v=!1,y,x=null,f=[],w=!1;this.setSize=function(R,b){a.setSize(R,b),o.setSize(R,b);for(let S=0;S<f.length;S++){const T=f[S];T.setSize&&T.setSize(R,b)}},this.setEffects=function(R){f=R,w=f.length>0&&f[0].isRenderPass===!0;const b=a.width,S=a.height;for(let T=0;T<f.length;T++){const N=f[T];N.setSize&&N.setSize(b,S)}},this.begin=function(R,b){if(v||R.toneMapping===Qt&&f.length===0)return!1;if(x=b,b!==null){const S=b.width,T=b.height;(a.width!==S||a.height!==T)&&this.setSize(S,T)}return w===!1&&R.setRenderTarget(a),y=R.toneMapping,R.toneMapping=Qt,!0},this.hasRenderPass=function(){return w},this.end=function(R,b){R.toneMapping=y,v=!0;let S=a,T=o;for(let N=0;N<f.length;N++){const _=f[N];if(_.enabled!==!1&&(_.render(R,T,S,b),_.needsSwap!==!1)){const A=S;S=T,T=A}}if(d!==R.outputColorSpace||g!==R.toneMapping){d=R.outputColorSpace,g=R.toneMapping,l.defines={},We.getTransfer(d)===Ze&&(l.defines.SRGB_TRANSFER="");const N=Ah[g];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,R.setRenderTarget(x),R.render(u,h),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const ml=new Tt,Ks=new mi(1,1),xl=new el,gl=new jc,_l=new al,lo=[],co=[],uo=new Float32Array(16),fo=new Float32Array(9),ho=new Float32Array(4);function vi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=lo[r];if(s===void 0&&(s=new Float32Array(r),lo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yr(i,e){let t=co[e];t===void 0&&(t=new Int32Array(e),co[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ch(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Nh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Ph(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function Dh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(mt(t,n))return;ho.set(n),i.uniformMatrix2fv(this.addr,!1,ho),xt(t,n)}}function Lh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(mt(t,n))return;fo.set(n),i.uniformMatrix3fv(this.addr,!1,fo),xt(t,n)}}function Ih(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(mt(t,n))return;uo.set(n),i.uniformMatrix4fv(this.addr,!1,uo),xt(t,n)}}function Uh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Oh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Bh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function zh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function Gh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Vh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function Hh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ks.compareFunction=t.isReversedDepthBuffer()?ca:la,s=Ks):s=ml,t.setTexture2D(e||s,r)}function Wh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||gl,r)}function Xh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||_l,r)}function jh(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||xl,r)}function qh(i){switch(i){case 5126:return Rh;case 35664:return Ch;case 35665:return Nh;case 35666:return Ph;case 35674:return Dh;case 35675:return Lh;case 35676:return Ih;case 5124:case 35670:return Uh;case 35667:case 35671:return Fh;case 35668:case 35672:return Oh;case 35669:case 35673:return Bh;case 5125:return zh;case 36294:return kh;case 36295:return Gh;case 36296:return Vh;case 35678:case 36198:case 36298:case 36306:case 35682:return Hh;case 35679:case 36299:case 36307:return Wh;case 35680:case 36300:case 36308:case 36293:return Xh;case 36289:case 36303:case 36311:case 36292:return jh}}function Yh(i,e){i.uniform1fv(this.addr,e)}function $h(i,e){const t=vi(e,this.size,2);i.uniform2fv(this.addr,t)}function Kh(i,e){const t=vi(e,this.size,3);i.uniform3fv(this.addr,t)}function Zh(i,e){const t=vi(e,this.size,4);i.uniform4fv(this.addr,t)}function Jh(i,e){const t=vi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qh(i,e){const t=vi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ep(i,e){const t=vi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tp(i,e){i.uniform1iv(this.addr,e)}function np(i,e){i.uniform2iv(this.addr,e)}function ip(i,e){i.uniform3iv(this.addr,e)}function rp(i,e){i.uniform4iv(this.addr,e)}function sp(i,e){i.uniform1uiv(this.addr,e)}function ap(i,e){i.uniform2uiv(this.addr,e)}function op(i,e){i.uniform3uiv(this.addr,e)}function lp(i,e){i.uniform4uiv(this.addr,e)}function cp(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ks:a=ml;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function dp(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||gl,s[a])}function up(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||_l,s[a])}function fp(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),xt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||xl,s[a])}function hp(i){switch(i){case 5126:return Yh;case 35664:return $h;case 35665:return Kh;case 35666:return Zh;case 35674:return Jh;case 35675:return Qh;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return rp;case 5125:return sp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return fp}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qh(t.type)}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hp(t.type)}}class xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const is=/(\w+)(\])?(\[|\.)?/g;function po(i,e){i.seq.push(e),i.map[e.id]=e}function gp(i,e,t){const n=i.name,r=n.length;for(is.lastIndex=0;;){const s=is.exec(n),a=is.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){po(t,l===void 0?new pp(o,i,e):new mp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new xp(o),po(t,h)),t=h}}}class pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);gp(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function mo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _p=37297;let vp=0;function Mp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const xo=new Le;function bp(i){We._getMatrix(xo,We.workingColorSpace,i);const e=`mat3( ${xo.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case _r:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function go(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(e),o)}else return s}function Sp(i,e){const t=bp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ep={[Bo]:"Linear",[zo]:"Reinhard",[ko]:"Cineon",[Go]:"ACESFilmic",[Ho]:"AgX",[Wo]:"Neutral",[Vo]:"Custom"};function yp(i,e){const t=Ep[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new z;function Tp(){We.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ap(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wi).join(`
`)}function wp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function wi(i){return i!==""}function _o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(i){return i.replace(Cp,Pp)}const Np=new Map;function Pp(i,e){let t=Oe[e];if(t===void 0){const n=Np.get(e);if(n!==void 0)t=Oe[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zs(t)}const Dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(i){return i.replace(Dp,Lp)}function Lp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Ip={[cr]:"SHADOWMAP_TYPE_PCF",[Ai]:"SHADOWMAP_TYPE_VSM"};function Up(i){return Ip[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fp={[Vn]:"ENVMAP_TYPE_CUBE",[pi]:"ENVMAP_TYPE_CUBE",[Mr]:"ENVMAP_TYPE_CUBE_UV"};function Op(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Fp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Bp={[pi]:"ENVMAP_MODE_REFRACTION"};function zp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Bp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kp={[Oo]:"ENVMAP_BLENDING_MULTIPLY",[dc]:"ENVMAP_BLENDING_MIX",[uc]:"ENVMAP_BLENDING_ADD"};function Gp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kp[i.combine]||"ENVMAP_BLENDING_NONE"}function Vp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Up(t),l=Op(t),u=zp(t),h=Gp(t),d=Vp(t),g=Ap(t),v=wp(s),y=r.createProgram();let x,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wi).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wi).join(`
`),f.length>0&&(f+=`
`)):(x=[bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),f=[bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Qt?yp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Sp("linearToOutputTexel",t.outputColorSpace),Tp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=Zs(a),a=_o(a,t),a=vo(a,t),o=Zs(o),o=_o(o,t),o=vo(o,t),a=Mo(a),o=Mo(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===La?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===La?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const R=w+x+a,b=w+f+o,S=mo(r,r.VERTEX_SHADER,R),T=mo(r,r.FRAGMENT_SHADER,b);r.attachShader(y,S),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function N(C){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",X=r.getShaderInfoLog(S)||"",j=r.getShaderInfoLog(T)||"",k=F.trim(),Y=X.trim(),H=j.trim();let J=!0,ee=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,S,T);else{const ce=go(r,S,"vertex"),he=go(r,T,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+ce+`
`+he)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(Y===""||H==="")&&(ee=!1);ee&&(C.diagnostics={runnable:J,programLog:k,vertexShader:{log:Y,prefix:x},fragmentShader:{log:H,prefix:f}})}r.deleteShader(S),r.deleteShader(T),_=new pr(r,y),A=Rp(r,y)}let _;this.getUniforms=function(){return _===void 0&&N(this),_};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(y,_p)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vp++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=T,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jp(e),t.set(e,n)),n}}class jp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function qp(i){return i===Hn||i===mr||i===xr}function Yp(i,e,t,n,r,s){const a=new tl,o=new Xp,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,A,D,C,F,X){const j=C.fog,k=F.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||Y,H),ee=J&&J.mapping===Mr?J.image.height:null,ce=g[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const he=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_e=he!==void 0?he.length:0;let ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let Fe,Ge,$,ie;if(ce){const Me=Kt[ce];Fe=Me.vertexShader,Ge=Me.fragmentShader}else{Fe=_.vertexShader,Ge=_.fragmentShader;const Me=o.getVertexShaderStage(_),at=o.getFragmentShaderStage(_);o.update(_,Me,at),$=Me.id,ie=at.id}const te=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ne=F.isInstancedMesh===!0,we=F.isBatchedMesh===!0,it=!!_.map,Be=!!_.matcap,Ye=!!J,Ve=!!_.aoMap,ke=!!_.lightMap,rt=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,gt=!!_.displacementMap,vt=!!_.emissiveMap,st=!!_.metalnessMap,ft=!!_.roughnessMap,L=_.anisotropy>0,Rt=_.clearcoat>0,Ke=_.dispersion>0,E=_.iridescence>0,m=_.sheen>0,U=_.transmission>0,G=L&&!!_.anisotropyMap,W=Rt&&!!_.clearcoatMap,ne=Rt&&!!_.clearcoatNormalMap,se=Rt&&!!_.clearcoatRoughnessMap,q=E&&!!_.iridescenceMap,Z=E&&!!_.iridescenceThicknessMap,ae=m&&!!_.sheenColorMap,Ee=m&&!!_.sheenRoughnessMap,de=!!_.specularMap,oe=!!_.specularColorMap,Ae=!!_.specularIntensityMap,Re=U&&!!_.transmissionMap,Ie=U&&!!_.thicknessMap,P=!!_.gradientMap,re=!!_.alphaMap,K=_.alphaTest>0,le=!!_.alphaHash,me=!!_.extensions;let Q=Qt;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Q=i.toneMapping);const Se={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:Fe,fragmentShader:Ge,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:we,batchingColor:we&&F._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&F.instanceColor!==null,instancingMorph:Ne&&F.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:it,matcap:Be,envMap:Ye,envMapMode:Ye&&J.mapping,envMapCubeUVHeight:ee,aoMap:Ve,lightMap:ke,bumpMap:rt,normalMap:pt,displacementMap:gt,emissiveMap:vt,normalMapObjectSpace:pt&&_.normalMapType===pc,normalMapTangentSpace:pt&&_.normalMapType===Na,packedNormalMap:pt&&_.normalMapType===Na&&qp(_.normalMap.format),metalnessMap:st,roughnessMap:ft,anisotropy:L,anisotropyMap:G,clearcoat:Rt,clearcoatMap:W,clearcoatNormalMap:ne,clearcoatRoughnessMap:se,dispersion:Ke,iridescence:E,iridescenceMap:q,iridescenceThicknessMap:Z,sheen:m,sheenColorMap:ae,sheenRoughnessMap:Ee,specularMap:de,specularColorMap:oe,specularIntensityMap:Ae,transmission:U,transmissionMap:Re,thicknessMap:Ie,gradientMap:P,opaque:_.transparent===!1&&_.blending===di&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:K,alphaHash:le,combine:_.combine,mapUv:it&&v(_.map.channel),aoMapUv:Ve&&v(_.aoMap.channel),lightMapUv:ke&&v(_.lightMap.channel),bumpMapUv:rt&&v(_.bumpMap.channel),normalMapUv:pt&&v(_.normalMap.channel),displacementMapUv:gt&&v(_.displacementMap.channel),emissiveMapUv:vt&&v(_.emissiveMap.channel),metalnessMapUv:st&&v(_.metalnessMap.channel),roughnessMapUv:ft&&v(_.roughnessMap.channel),anisotropyMapUv:G&&v(_.anisotropyMap.channel),clearcoatMapUv:W&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(_.sheenRoughnessMap.channel),specularMapUv:de&&v(_.specularMap.channel),specularColorMapUv:oe&&v(_.specularColorMap.channel),specularIntensityMapUv:Ae&&v(_.specularIntensityMap.channel),transmissionMapUv:Re&&v(_.transmissionMap.channel),thicknessMapUv:Ie&&v(_.thicknessMap.channel),alphaMapUv:re&&v(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(pt||L),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(it||re),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:it&&_.map.isVideoTexture===!0&&We.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:vt&&_.emissiveMap.isVideoTexture===!0&&We.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===Ct,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function x(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)A.push(D),A.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(A,_),w(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function w(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function R(_){const A=g[_.type];let D;if(A){const C=Kt[A];D=hd.clone(C.uniforms)}else D=_.uniforms;return D}function b(_,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new Hp(i,A,_,r),l.push(D),u.set(A,D)),D}function S(_){if(--_.usedTimes===0){const A=l.indexOf(_);l[A]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function N(){o.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:b,releaseProgram:S,releaseShaderCache:T,programs:l,dispose:N}}function $p(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function So(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,v,y,x,f){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:g,material:v,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:x,group:f},i[e]=w):(w.id=d.id,w.object=d,w.geometry=g,w.material=v,w.materialVariant=a(d),w.groupOrder=y,w.renderOrder=d.renderOrder,w.z=x,w.group=f),e++,w}function c(d,g,v,y,x,f){const w=o(d,g,v,y,x,f);v.transmission>0?n.push(w):v.transparent===!0?r.push(w):t.push(w)}function l(d,g,v,y,x,f){const w=o(d,g,v,y,x,f);v.transmission>0?n.unshift(w):v.transparent===!0?r.unshift(w):t.unshift(w)}function u(d,g,v){t.length>1&&t.sort(d||Kp),n.length>1&&n.sort(g||So),r.length>1&&r.sort(g||So),v&&(t.reverse(),n.reverse(),r.reverse())}function h(){for(let d=e,g=i.length;d<g;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function Zp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Eo,i.set(n,[a])):r>=s.length?(a=new Eo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let em=0;function tm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nm(i){const e=new Jp,t=Qp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,s=new ut,a=new ut;function o(l){let u=0,h=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,v=0,y=0,x=0,f=0,w=0,R=0,b=0,S=0,T=0,N=0;l.sort(tm);for(let A=0,D=l.length;A<D;A++){const C=l[A],F=C.color,X=C.intensity,j=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Hn?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*X,h+=F.g*X,d+=F.b*X;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],X);N++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const H=C.shadow,J=t.get(C);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=k,n.directionalShadowMatrix[g]=C.shadow.matrix,w++}n.directional[g]=Y,g++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(F).multiplyScalar(X),Y.distance=j,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[y]=Y;const H=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,H.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[y]=H.matrix,C.castShadow){const J=t.get(C);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,n.spotShadow[y]=J,n.spotShadowMap[y]=k,b++}y++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(F).multiplyScalar(X),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[x]=Y,x++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const H=C.shadow,J=t.get(C);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,n.pointShadow[v]=J,n.pointShadowMap[v]=k,n.pointShadowMatrix[v]=C.shadow.matrix,R++}n.point[v]=Y,v++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(X),Y.groundColor.copy(C.groundColor).multiplyScalar(X),n.hemi[f]=Y,f++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const _=n.hash;(_.directionalLength!==g||_.pointLength!==v||_.spotLength!==y||_.rectAreaLength!==x||_.hemiLength!==f||_.numDirectionalShadows!==w||_.numPointShadows!==R||_.numSpotShadows!==b||_.numSpotMaps!==S||_.numLightProbes!==N)&&(n.directional.length=g,n.spot.length=y,n.rectArea.length=x,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=b+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=N,_.directionalLength=g,_.pointLength=v,_.spotLength=y,_.rectAreaLength=x,_.hemiLength=f,_.numDirectionalShadows=w,_.numPointShadows=R,_.numSpotShadows=b,_.numSpotMaps=S,_.numLightProbes=N,n.version=em++)}function c(l,u){let h=0,d=0,g=0,v=0,y=0;const x=u.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const R=l[f];if(R.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(x),h++}else if(R.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(x),g++}else if(R.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(x),a.identity(),s.copy(R.matrixWorld),s.premultiply(x),a.extractRotation(s),b.halfWidth.set(R.width*.5,0,0),b.halfHeight.set(0,R.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(R.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(R.matrixWorld),b.position.applyMatrix4(x),d++}else if(R.isHemisphereLight){const b=n.hemi[y];b.direction.setFromMatrixPosition(R.matrixWorld),b.direction.transformDirection(x),y++}}}return{setup:o,setupView:c,state:n}}function yo(i){const e=new nm(i),t=[],n=[],r=[];function s(d){h.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function im(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yo(i),e.set(r,[o])):s>=a.length?(o=new yo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,am=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],om=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],To=new ut,Ti=new z,rs=new z;function lm(i,e,t){let n=new sl;const r=new qe,s=new qe,a=new lt,o=new gd,c=new _d,l={},u=t.maxTextureSize,h={[Nn]:Ct,[Ct]:Nn,[fn]:fn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:rm,fragmentShader:sm}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new an;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rn(v,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cr;let f=this.type;this.render=function(T,N,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===Xl&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cr);const A=i.getRenderTarget(),D=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(pn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const X=f!==this.type;X&&N.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(k=>k.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,k=T.length;j<k;j++){const Y=T[j],H=Y.shadow;if(H===void 0){Pe("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const J=H.getFrameExtents();r.multiply(J),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,H.mapSize.y=s.y));const ee=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ee,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ai){if(Y.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new en(r.x,r.y,{format:Hn,type:xn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new mi(r.x,r.y,Zt),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=gn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt}else Y.isPointLight?(H.map=new pl(r.x),H.map.depthTexture=new ud(r.x,nn)):(H.map=new en(r.x,r.y),H.map.depthTexture=new mi(r.x,r.y,nn)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=gn,this.type===cr?(H.map.depthTexture.compareFunction=ee?ca:la,H.map.depthTexture.minFilter=bt,H.map.depthTexture.magFilter=bt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt);H.camera.updateProjectionMatrix()}const ce=H.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<ce;he++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,he),i.clear();else{he===0&&(i.setRenderTarget(H.map),i.clear());const _e=H.getViewport(he);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),F.viewport(a)}if(Y.isPointLight){const _e=H.camera,ve=H.matrix,Fe=Y.distance||_e.far;Fe!==_e.far&&(_e.far=Fe,_e.updateProjectionMatrix()),Ti.setFromMatrixPosition(Y.matrixWorld),_e.position.copy(Ti),rs.copy(_e.position),rs.add(am[he]),_e.up.copy(om[he]),_e.lookAt(rs),_e.updateMatrixWorld(),ve.makeTranslation(-Ti.x,-Ti.y,-Ti.z),To.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),H._frustum.setFromProjectionMatrix(To,_e.coordinateSystem,_e.reversedDepth)}else H.updateMatrices(Y);n=H.getFrustum(),b(N,_,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Ai&&w(H,_),H.needsUpdate=!1}f=this.type,x.needsUpdate=!1,i.setRenderTarget(A,D,C)};function w(T,N){const _=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new en(r.x,r.y,{format:Hn,type:xn})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(N,null,_,d,y,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(N,null,_,g,y,null)}function R(T,N,_,A){let D=null;const C=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)D=C;else if(D=_.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const F=D.uuid,X=N.uuid;let j=l[F];j===void 0&&(j={},l[F]=j);let k=j[X];k===void 0&&(k=D.clone(),j[X]=k,N.addEventListener("dispose",S)),D=k}if(D.visible=N.visible,D.wireframe=N.wireframe,A===Ai?D.side=N.shadowSide!==null?N.shadowSide:N.side:D.side=N.shadowSide!==null?N.shadowSide:h[N.side],D.alphaMap=N.alphaMap,D.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,D.map=N.map,D.clipShadows=N.clipShadows,D.clippingPlanes=N.clippingPlanes,D.clipIntersection=N.clipIntersection,D.displacementMap=N.displacementMap,D.displacementScale=N.displacementScale,D.displacementBias=N.displacementBias,D.wireframeLinewidth=N.wireframeLinewidth,D.linewidth=N.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=i.properties.get(D);F.light=_}return D}function b(T,N,_,A,D){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const X=e.update(T),j=T.material;if(Array.isArray(j)){const k=X.groups;for(let Y=0,H=k.length;Y<H;Y++){const J=k[Y],ee=j[J.materialIndex];if(ee&&ee.visible){const ce=R(T,ee,A,D);T.onBeforeShadow(i,T,N,_,X,ce,J),i.renderBufferDirect(_,null,X,ce,T,J),T.onAfterShadow(i,T,N,_,X,ce,J)}}}else if(j.visible){const k=R(T,j,A,D);T.onBeforeShadow(i,T,N,_,X,k,null),i.renderBufferDirect(_,null,X,k,T,null),T.onAfterShadow(i,T,N,_,X,k,null)}}const F=T.children;for(let X=0,j=F.length;X<j;X++)b(F[X],N,_,A,D)}function S(T){T.target.removeEventListener("dispose",S);for(const _ in l){const A=l[_],D=T.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function cm(i,e){function t(){let P=!1;const re=new lt;let K=null;const le=new lt(0,0,0,0);return{setMask:function(me){K!==me&&!P&&(i.colorMask(me,me,me,me),K=me)},setLocked:function(me){P=me},setClear:function(me,Q,Se,Me,at){at===!0&&(me*=Me,Q*=Me,Se*=Me),re.set(me,Q,Se,Me),le.equals(re)===!1&&(i.clearColor(me,Q,Se,Me),le.copy(re))},reset:function(){P=!1,K=null,le.set(-1,0,0,0)}}}function n(){let P=!1,re=!1,K=null,le=null,me=null;return{setReversed:function(Q){if(re!==Q){const Se=e.get("EXT_clip_control");Q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),re=Q;const Me=me;me=null,this.setClear(Me)}},getReversed:function(){return re},setTest:function(Q){Q?te(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Q){K!==Q&&!P&&(i.depthMask(Q),K=Q)},setFunc:function(Q){if(re&&(Q=yc[Q]),le!==Q){switch(Q){case us:i.depthFunc(i.NEVER);break;case fs:i.depthFunc(i.ALWAYS);break;case hs:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case ps:i.depthFunc(i.EQUAL);break;case ms:i.depthFunc(i.GEQUAL);break;case xs:i.depthFunc(i.GREATER);break;case gs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=Q}},setLocked:function(Q){P=Q},setClear:function(Q){me!==Q&&(me=Q,re&&(Q=1-Q),i.clearDepth(Q))},reset:function(){P=!1,K=null,le=null,me=null,re=!1}}}function r(){let P=!1,re=null,K=null,le=null,me=null,Q=null,Se=null,Me=null,at=null;return{setTest:function(tt){P||(tt?te(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(tt){re!==tt&&!P&&(i.stencilMask(tt),re=tt)},setFunc:function(tt,Xt,jt){(K!==tt||le!==Xt||me!==jt)&&(i.stencilFunc(tt,Xt,jt),K=tt,le=Xt,me=jt)},setOp:function(tt,Xt,jt){(Q!==tt||Se!==Xt||Me!==jt)&&(i.stencilOp(tt,Xt,jt),Q=tt,Se=Xt,Me=jt)},setLocked:function(tt){P=tt},setClear:function(tt){at!==tt&&(i.clearStencil(tt),at=tt)},reset:function(){P=!1,re=null,K=null,le=null,me=null,Q=null,Se=null,Me=null,at=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d={},g=new WeakMap,v=[],y=null,x=!1,f=null,w=null,R=null,b=null,S=null,T=null,N=null,_=new $e(0,0,0),A=0,D=!1,C=null,F=null,X=null,j=null,k=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=J>=1):ee.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=J>=2);let ce=null,he={};const _e=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Fe=new lt().fromArray(_e),Ge=new lt().fromArray(ve);function $(P,re,K,le){const me=new Uint8Array(4),Q=i.createTexture();i.bindTexture(P,Q),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Se=0;Se<K;Se++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(re+Se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return Q}const ie={};ie[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(hi),rt(!1),pt(Aa),te(i.CULL_FACE),Ve(pn);function te(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function Ce(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function Ne(P,re){return d[P]!==re?(i.bindFramebuffer(P,re),d[P]=re,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function we(P,re){let K=v,le=!1;if(P){K=g.get(re),K===void 0&&(K=[],g.set(re,K));const me=P.textures;if(K.length!==me.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Se=me.length;Q<Se;Q++)K[Q]=i.COLOR_ATTACHMENT0+Q;K.length=me.length,le=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,le=!0);le&&i.drawBuffers(K)}function it(P){return y!==P?(i.useProgram(P),y=P,!0):!1}const Be={[On]:i.FUNC_ADD,[ql]:i.FUNC_SUBTRACT,[Yl]:i.FUNC_REVERSE_SUBTRACT};Be[$l]=i.MIN,Be[Kl]=i.MAX;const Ye={[Zl]:i.ZERO,[Jl]:i.ONE,[Ql]:i.SRC_COLOR,[cs]:i.SRC_ALPHA,[sc]:i.SRC_ALPHA_SATURATE,[ic]:i.DST_COLOR,[tc]:i.DST_ALPHA,[ec]:i.ONE_MINUS_SRC_COLOR,[ds]:i.ONE_MINUS_SRC_ALPHA,[rc]:i.ONE_MINUS_DST_COLOR,[nc]:i.ONE_MINUS_DST_ALPHA,[ac]:i.CONSTANT_COLOR,[oc]:i.ONE_MINUS_CONSTANT_COLOR,[lc]:i.CONSTANT_ALPHA,[cc]:i.ONE_MINUS_CONSTANT_ALPHA};function Ve(P,re,K,le,me,Q,Se,Me,at,tt){if(P===pn){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),P!==jl){if(P!==f||tt!==D){if((w!==On||S!==On)&&(i.blendEquation(i.FUNC_ADD),w=On,S=On),tt)switch(P){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",P);break}else switch(P){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ra:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ca:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",P);break}R=null,b=null,T=null,N=null,_.set(0,0,0),A=0,f=P,D=tt}return}me=me||re,Q=Q||K,Se=Se||le,(re!==w||me!==S)&&(i.blendEquationSeparate(Be[re],Be[me]),w=re,S=me),(K!==R||le!==b||Q!==T||Se!==N)&&(i.blendFuncSeparate(Ye[K],Ye[le],Ye[Q],Ye[Se]),R=K,b=le,T=Q,N=Se),(Me.equals(_)===!1||at!==A)&&(i.blendColor(Me.r,Me.g,Me.b,at),_.copy(Me),A=at),f=P,D=!1}function ke(P,re){P.side===fn?Ce(i.CULL_FACE):te(i.CULL_FACE);let K=P.side===Ct;re&&(K=!K),rt(K),P.blending===di&&P.transparent===!1?Ve(pn):Ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const le=P.stencilWrite;o.setTest(le),le&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),vt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(P){C!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),C=P)}function pt(P){P!==Hl?(te(i.CULL_FACE),P!==F&&(P===Aa?i.cullFace(i.BACK):P===Wl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),F=P}function gt(P){P!==X&&(H&&i.lineWidth(P),X=P)}function vt(P,re,K){P?(te(i.POLYGON_OFFSET_FILL),(j!==re||k!==K)&&(j=re,k=K,a.getReversed()&&(re=-re),i.polygonOffset(re,K))):Ce(i.POLYGON_OFFSET_FILL)}function st(P){P?te(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ft(P){P===void 0&&(P=i.TEXTURE0+Y-1),ce!==P&&(i.activeTexture(P),ce=P)}function L(P,re,K){K===void 0&&(ce===null?K=i.TEXTURE0+Y-1:K=ce);let le=he[K];le===void 0&&(le={type:void 0,texture:void 0},he[K]=le),(le.type!==P||le.texture!==re)&&(ce!==K&&(i.activeTexture(K),ce=K),i.bindTexture(P,re||ie[P]),le.type=P,le.texture=re)}function Rt(){const P=he[ce];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function m(){try{i.texSubImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function U(){try{i.texSubImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){je("WebGLState:",P)}}function se(){try{i.texStorage3D(...arguments)}catch(P){je("WebGLState:",P)}}function q(){try{i.texImage2D(...arguments)}catch(P){je("WebGLState:",P)}}function Z(){try{i.texImage3D(...arguments)}catch(P){je("WebGLState:",P)}}function ae(P){return h[P]!==void 0?h[P]:i.getParameter(P)}function Ee(P,re){h[P]!==re&&(i.pixelStorei(P,re),h[P]=re)}function de(P){Fe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Fe.copy(P))}function oe(P){Ge.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ge.copy(P))}function Ae(P,re){let K=l.get(re);K===void 0&&(K=new WeakMap,l.set(re,K));let le=K.get(P);le===void 0&&(le=i.getUniformBlockIndex(re,P.name),K.set(P,le))}function Re(P,re){const le=l.get(re).get(P);c.get(re)!==le&&(i.uniformBlockBinding(re,le,P.__bindingPointIndex),c.set(re,le))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},ce=null,he={},d={},g=new WeakMap,v=[],y=null,x=!1,f=null,w=null,R=null,b=null,S=null,T=null,N=null,_=new $e(0,0,0),A=0,D=!1,C=null,F=null,X=null,j=null,k=null,Fe.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:Ce,bindFramebuffer:Ne,drawBuffers:we,useProgram:it,setBlending:Ve,setMaterial:ke,setFlipSided:rt,setCullFace:pt,setLineWidth:gt,setPolygonOffset:vt,setScissorTest:st,activeTexture:ft,bindTexture:L,unbindTexture:Rt,compressedTexImage2D:Ke,compressedTexImage3D:E,texImage2D:q,texImage3D:Z,pixelStorei:Ee,getParameter:ae,updateUBOMapping:Ae,uniformBlockBinding:Re,texStorage2D:ne,texStorage3D:se,texSubImage2D:m,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:W,scissor:de,viewport:oe,reset:Ie}}function dm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,h=new Set;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,m){return v?new OffscreenCanvas(E,m):Li("canvas")}function x(E,m,U){let G=1;const W=Ke(E);if((W.width>U||W.height>U)&&(G=U/Math.max(W.width,W.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(G*W.width),se=Math.floor(G*W.height);d===void 0&&(d=y(ne,se));const q=m?y(ne,se):d;return q.width=ne,q.height=se,q.getContext("2d").drawImage(E,0,0,ne,se),Pe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+ne+"x"+se+")."),q}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),E;return E}function f(E){return E.generateMipmaps}function w(E){i.generateMipmap(E)}function R(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,m,U,G,W,ne=!1){if(E!==null){if(i[E]!==void 0)return i[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se;G&&(se=e.get("EXT_texture_norm16"),se||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=m;if(m===i.RED&&(U===i.FLOAT&&(q=i.R32F),U===i.HALF_FLOAT&&(q=i.R16F),U===i.UNSIGNED_BYTE&&(q=i.R8),U===i.UNSIGNED_SHORT&&se&&(q=se.R16_EXT),U===i.SHORT&&se&&(q=se.R16_SNORM_EXT)),m===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.R8UI),U===i.UNSIGNED_SHORT&&(q=i.R16UI),U===i.UNSIGNED_INT&&(q=i.R32UI),U===i.BYTE&&(q=i.R8I),U===i.SHORT&&(q=i.R16I),U===i.INT&&(q=i.R32I)),m===i.RG&&(U===i.FLOAT&&(q=i.RG32F),U===i.HALF_FLOAT&&(q=i.RG16F),U===i.UNSIGNED_BYTE&&(q=i.RG8),U===i.UNSIGNED_SHORT&&se&&(q=se.RG16_EXT),U===i.SHORT&&se&&(q=se.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RG8UI),U===i.UNSIGNED_SHORT&&(q=i.RG16UI),U===i.UNSIGNED_INT&&(q=i.RG32UI),U===i.BYTE&&(q=i.RG8I),U===i.SHORT&&(q=i.RG16I),U===i.INT&&(q=i.RG32I)),m===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGB8UI),U===i.UNSIGNED_SHORT&&(q=i.RGB16UI),U===i.UNSIGNED_INT&&(q=i.RGB32UI),U===i.BYTE&&(q=i.RGB8I),U===i.SHORT&&(q=i.RGB16I),U===i.INT&&(q=i.RGB32I)),m===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),U===i.UNSIGNED_INT&&(q=i.RGBA32UI),U===i.BYTE&&(q=i.RGBA8I),U===i.SHORT&&(q=i.RGBA16I),U===i.INT&&(q=i.RGBA32I)),m===i.RGB&&(U===i.UNSIGNED_SHORT&&se&&(q=se.RGB16_EXT),U===i.SHORT&&se&&(q=se.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),m===i.RGBA){const Z=ne?_r:We.getTransfer(W);U===i.FLOAT&&(q=i.RGBA32F),U===i.HALF_FLOAT&&(q=i.RGBA16F),U===i.UNSIGNED_BYTE&&(q=Z===Ze?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&se&&(q=se.RGBA16_EXT),U===i.SHORT&&se&&(q=se.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(E,m){let U;return E?m===null||m===nn||m===Di?U=i.DEPTH24_STENCIL8:m===Zt?U=i.DEPTH32F_STENCIL8:m===Pi&&(U=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===nn||m===Di?U=i.DEPTH_COMPONENT24:m===Zt?U=i.DEPTH_COMPONENT32F:m===Pi&&(U=i.DEPTH_COMPONENT16),U}function T(E,m){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==Mt&&E.minFilter!==bt?Math.log2(Math.max(m.width,m.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?m.mipmaps.length:1}function N(E){const m=E.target;m.removeEventListener("dispose",N),A(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&h.delete(m)}function _(E){const m=E.target;m.removeEventListener("dispose",_),C(m)}function A(E){const m=n.get(E);if(m.__webglInit===void 0)return;const U=E.source,G=g.get(U);if(G){const W=G[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&D(E),Object.keys(G).length===0&&g.delete(U)}n.remove(E)}function D(E){const m=n.get(E);i.deleteTexture(m.__webglTexture);const U=E.source,G=g.get(U);delete G[m.__cacheKey],a.memory.textures--}function C(E){const m=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(m.__webglFramebuffer[G]))for(let W=0;W<m.__webglFramebuffer[G].length;W++)i.deleteFramebuffer(m.__webglFramebuffer[G][W]);else i.deleteFramebuffer(m.__webglFramebuffer[G]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[G])}else{if(Array.isArray(m.__webglFramebuffer))for(let G=0;G<m.__webglFramebuffer.length;G++)i.deleteFramebuffer(m.__webglFramebuffer[G]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let G=0;G<m.__webglColorRenderbuffer.length;G++)m.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[G]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const U=E.textures;for(let G=0,W=U.length;G<W;G++){const ne=n.get(U[G]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(U[G])}n.remove(E)}let F=0;function X(){F=0}function j(){return F}function k(E){F=E}function Y(){const E=F;return E>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),F+=1,E}function H(E){const m=[];return m.push(E.wrapS),m.push(E.wrapT),m.push(E.wrapR||0),m.push(E.magFilter),m.push(E.minFilter),m.push(E.anisotropy),m.push(E.internalFormat),m.push(E.format),m.push(E.type),m.push(E.generateMipmaps),m.push(E.premultiplyAlpha),m.push(E.flipY),m.push(E.unpackAlignment),m.push(E.colorSpace),m.join()}function J(E,m){const U=n.get(E);if(E.isVideoTexture&&L(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const G=E.image;if(G===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(U,E,m);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+m)}function ee(E,m){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ce(U,E,m);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+m)}function ce(E,m){const U=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){Ce(U,E,m);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+m)}function he(E,m){const U=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){Ne(U,E,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+m)}const _e={[_s]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[vs]:i.MIRRORED_REPEAT},ve={[Mt]:i.NEAREST,[fc]:i.NEAREST_MIPMAP_NEAREST,[zi]:i.NEAREST_MIPMAP_LINEAR,[bt]:i.LINEAR,[Cr]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},Fe={[mc]:i.NEVER,[Mc]:i.ALWAYS,[xc]:i.LESS,[la]:i.LEQUAL,[gc]:i.EQUAL,[ca]:i.GEQUAL,[_c]:i.GREATER,[vc]:i.NOTEQUAL};function Ge(E,m){if(m.type===Zt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===bt||m.magFilter===Cr||m.magFilter===zi||m.magFilter===zn||m.minFilter===bt||m.minFilter===Cr||m.minFilter===zi||m.minFilter===zn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,_e[m.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,_e[m.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,_e[m.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ve[m.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ve[m.minFilter]),m.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Fe[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Mt||m.minFilter!==zi&&m.minFilter!==zn||m.type===Zt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function $(E,m){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,m.addEventListener("dispose",N));const G=m.source;let W=g.get(G);W===void 0&&(W={},g.set(G,W));const ne=H(m);if(ne!==E.__cacheKey){W[ne]===void 0&&(W[ne]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),W[ne].usedTimes++;const se=W[E.__cacheKey];se!==void 0&&(W[E.__cacheKey].usedTimes--,se.usedTimes===0&&D(m)),E.__cacheKey=ne,E.__webglTexture=W[ne].texture}return U}function ie(E,m,U){return Math.floor(Math.floor(E/U)/m)}function te(E,m,U,G){const ne=E.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,U,G,m.data);else{ne.sort((Ee,de)=>Ee.start-de.start);let se=0;for(let Ee=1;Ee<ne.length;Ee++){const de=ne[se],oe=ne[Ee],Ae=de.start+de.count,Re=ie(oe.start,m.width,4),Ie=ie(de.start,m.width,4);oe.start<=Ae+1&&Re===Ie&&ie(oe.start+oe.count-1,m.width,4)===Re?de.count=Math.max(de.count,oe.start+oe.count-de.start):(++se,ne[se]=oe)}ne.length=se+1;const q=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Ee=0,de=ne.length;Ee<de;Ee++){const oe=ne[Ee],Ae=Math.floor(oe.start/4),Re=Math.ceil(oe.count/4),Ie=Ae%m.width,P=Math.floor(Ae/m.width),re=Re,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ie,P,re,K,U,G,m.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function Ce(E,m,U){let G=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(G=i.TEXTURE_3D);const W=$(E,m),ne=m.source;t.bindTexture(G,E.__webglTexture,i.TEXTURE0+U);const se=n.get(ne);if(ne.version!==se.__version||W===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const K=We.getPrimaries(We.workingColorSpace),le=m.colorSpace===wn?null:We.getPrimaries(m.colorSpace),me=m.colorSpace===wn||K===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let Z=x(m.image,!1,r.maxTextureSize);Z=Rt(m,Z);const ae=s.convert(m.format,m.colorSpace),Ee=s.convert(m.type);let de=b(m.internalFormat,ae,Ee,m.normalized,m.colorSpace,m.isVideoTexture);Ge(G,m);let oe;const Ae=m.mipmaps,Re=m.isVideoTexture!==!0,Ie=se.__version===void 0||W===!0,P=ne.dataReady,re=T(m,Z);if(m.isDepthTexture)de=S(m.format===kn,m.type),Ie&&(Re?t.texStorage2D(i.TEXTURE_2D,1,de,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,de,Z.width,Z.height,0,ae,Ee,null));else if(m.isDataTexture)if(Ae.length>0){Re&&Ie&&t.texStorage2D(i.TEXTURE_2D,re,de,Ae[0].width,Ae[0].height);for(let K=0,le=Ae.length;K<le;K++)oe=Ae[K],Re?P&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(i.TEXTURE_2D,K,de,oe.width,oe.height,0,ae,Ee,oe.data);m.generateMipmaps=!1}else Re?(Ie&&t.texStorage2D(i.TEXTURE_2D,re,de,Z.width,Z.height),P&&te(m,Z,ae,Ee)):t.texImage2D(i.TEXTURE_2D,0,de,Z.width,Z.height,0,ae,Ee,Z.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Re&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,de,Ae[0].width,Ae[0].height,Z.depth);for(let K=0,le=Ae.length;K<le;K++)if(oe=Ae[K],m.format!==Wt)if(ae!==null)if(Re){if(P)if(m.layerUpdates.size>0){const me=to(oe.width,oe.height,m.format,m.type);for(const Q of m.layerUpdates){const Se=oe.data.subarray(Q*me/oe.data.BYTES_PER_ELEMENT,(Q+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Q,oe.width,oe.height,1,ae,Se)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Z.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,de,oe.width,oe.height,Z.depth,0,oe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,oe.width,oe.height,Z.depth,ae,Ee,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,de,oe.width,oe.height,Z.depth,0,ae,Ee,oe.data)}else{Re&&Ie&&t.texStorage2D(i.TEXTURE_2D,re,de,Ae[0].width,Ae[0].height);for(let K=0,le=Ae.length;K<le;K++)oe=Ae[K],m.format!==Wt?ae!==null?Re?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,K,de,oe.width,oe.height,0,oe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?P&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,oe.width,oe.height,ae,Ee,oe.data):t.texImage2D(i.TEXTURE_2D,K,de,oe.width,oe.height,0,ae,Ee,oe.data)}else if(m.isDataArrayTexture)if(Re){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,de,Z.width,Z.height,Z.depth),P)if(m.layerUpdates.size>0){const K=to(Z.width,Z.height,m.format,m.type);for(const le of m.layerUpdates){const me=Z.data.subarray(le*K/Z.data.BYTES_PER_ELEMENT,(le+1)*K/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,Z.width,Z.height,1,ae,Ee,me)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ae,Ee,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,Z.width,Z.height,Z.depth,0,ae,Ee,Z.data);else if(m.isData3DTexture)Re?(Ie&&t.texStorage3D(i.TEXTURE_3D,re,de,Z.width,Z.height,Z.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ae,Ee,Z.data)):t.texImage3D(i.TEXTURE_3D,0,de,Z.width,Z.height,Z.depth,0,ae,Ee,Z.data);else if(m.isFramebufferTexture){if(Ie)if(Re)t.texStorage2D(i.TEXTURE_2D,re,de,Z.width,Z.height);else{let K=Z.width,le=Z.height;for(let me=0;me<re;me++)t.texImage2D(i.TEXTURE_2D,me,de,K,le,0,ae,Ee,null),K>>=1,le>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),h.add(m),K.onpaint=le=>{const me=le.changedElements;for(const Q of h)me.includes(Q.image)&&(Q.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const me=i.RGBA,Q=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,Q,Se,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Re&&Ie){const K=Ke(Ae[0]);t.texStorage2D(i.TEXTURE_2D,re,de,K.width,K.height)}for(let K=0,le=Ae.length;K<le;K++)oe=Ae[K],Re?P&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ae,Ee,oe):t.texImage2D(i.TEXTURE_2D,K,de,ae,Ee,oe);m.generateMipmaps=!1}else if(Re){if(Ie){const K=Ke(Z);t.texStorage2D(i.TEXTURE_2D,re,de,K.width,K.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Ee,Z)}else t.texImage2D(i.TEXTURE_2D,0,de,ae,Ee,Z);f(m)&&w(G),se.__version=ne.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function Ne(E,m,U){if(m.image.length!==6)return;const G=$(E,m),W=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+U);const ne=n.get(W);if(W.version!==ne.__version||G===!0){t.activeTexture(i.TEXTURE0+U);const se=We.getPrimaries(We.workingColorSpace),q=m.colorSpace===wn?null:We.getPrimaries(m.colorSpace),Z=m.colorSpace===wn||se===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ae=m.isCompressedTexture||m.image[0].isCompressedTexture,Ee=m.image[0]&&m.image[0].isDataTexture,de=[];for(let Q=0;Q<6;Q++)!ae&&!Ee?de[Q]=x(m.image[Q],!0,r.maxCubemapSize):de[Q]=Ee?m.image[Q].image:m.image[Q],de[Q]=Rt(m,de[Q]);const oe=de[0],Ae=s.convert(m.format,m.colorSpace),Re=s.convert(m.type),Ie=b(m.internalFormat,Ae,Re,m.normalized,m.colorSpace),P=m.isVideoTexture!==!0,re=ne.__version===void 0||G===!0,K=W.dataReady;let le=T(m,oe);Ge(i.TEXTURE_CUBE_MAP,m);let me;if(ae){P&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ie,oe.width,oe.height);for(let Q=0;Q<6;Q++){me=de[Q].mipmaps;for(let Se=0;Se<me.length;Se++){const Me=me[Se];m.format!==Wt?Ae!==null?P?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Me.width,Me.height,Ae,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Ie,Me.width,Me.height,0,Me.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Me.width,Me.height,Ae,Re,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Ie,Me.width,Me.height,0,Ae,Re,Me.data)}}}else{if(me=m.mipmaps,P&&re){me.length>0&&le++;const Q=Ke(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,Ie,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ee){P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,de[Q].width,de[Q].height,Ae,Re,de[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,de[Q].width,de[Q].height,0,Ae,Re,de[Q].data);for(let Se=0;Se<me.length;Se++){const at=me[Se].image[Q].image;P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,at.width,at.height,Ae,Re,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Ie,at.width,at.height,0,Ae,Re,at.data)}}else{P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ae,Re,de[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,Ae,Re,de[Q]);for(let Se=0;Se<me.length;Se++){const Me=me[Se];P?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,Ae,Re,Me.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Ie,Ae,Re,Me.image[Q])}}}f(m)&&w(i.TEXTURE_CUBE_MAP),ne.__version=W.version,m.onUpdate&&m.onUpdate(m)}E.__version=m.version}function we(E,m,U,G,W,ne){const se=s.convert(U.format,U.colorSpace),q=s.convert(U.type),Z=b(U.internalFormat,se,q,U.normalized,U.colorSpace),ae=n.get(m),Ee=n.get(U);if(Ee.__renderTarget=m,!ae.__hasExternalTextures){const de=Math.max(1,m.width>>ne),oe=Math.max(1,m.height>>ne);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?t.texImage3D(W,ne,Z,de,oe,m.depth,0,se,q,null):t.texImage2D(W,ne,Z,de,oe,0,se,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ft(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,W,Ee.__webglTexture,0,st(m)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,W,Ee.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(E,m,U){if(i.bindRenderbuffer(i.RENDERBUFFER,E),m.depthBuffer){const G=m.depthTexture,W=G&&G.isDepthTexture?G.type:null,ne=S(m.stencilBuffer,W),se=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(m),ne,m.width,m.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(m),ne,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ne,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,E)}else{const G=m.textures;for(let W=0;W<G.length;W++){const ne=G[W],se=s.convert(ne.format,ne.colorSpace),q=s.convert(ne.type),Z=b(ne.internalFormat,se,q,ne.normalized,ne.colorSpace);ft(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st(m),Z,m.width,m.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,st(m),Z,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,Z,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(E,m,U){const G=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const W=n.get(m.depthTexture);if(W.__renderTarget=m,(!W.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),G){if(W.__webglInit===void 0&&(W.__webglInit=!0,m.depthTexture.addEventListener("dispose",N)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,m.depthTexture);const ae=s.convert(m.depthTexture.format),Ee=s.convert(m.depthTexture.type);let de;m.depthTexture.format===gn?de=i.DEPTH_COMPONENT24:m.depthTexture.format===kn&&(de=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,de,m.width,m.height,0,ae,Ee,null)}}else J(m.depthTexture,0);const ne=W.__webglTexture,se=st(m),q=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Z=m.depthTexture.format===kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===gn)ft(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,q,ne,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Z,q,ne,0);else if(m.depthTexture.format===kn)ft(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,q,ne,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,Z,q,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ye(E){const m=n.get(E),U=E.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),G){const W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,G.removeEventListener("dispose",W)};G.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=G}if(E.depthTexture&&!m.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)Be(m.__webglFramebuffer[G],E,G);else{const G=E.texture.mipmaps;G&&G.length>0?Be(m.__webglFramebuffer[0],E,0):Be(m.__webglFramebuffer,E,0)}else if(U){m.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[G]),m.__webglDepthbuffer[G]===void 0)m.__webglDepthbuffer[G]=i.createRenderbuffer(),it(m.__webglDepthbuffer[G],E,!1);else{const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=m.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ne)}}else{const G=E.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),it(m.__webglDepthbuffer,E,!1);else{const W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(E,m,U){const G=n.get(E);m!==void 0&&we(G.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ye(E)}function ke(E){const m=E.texture,U=n.get(E),G=n.get(m);E.addEventListener("dispose",_);const W=E.textures,ne=E.isWebGLCubeRenderTarget===!0,se=W.length>1;if(se||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=m.version,a.memory.textures++),ne){U.__webglFramebuffer=[];for(let q=0;q<6;q++)if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer[q]=[];for(let Z=0;Z<m.mipmaps.length;Z++)U.__webglFramebuffer[q][Z]=i.createFramebuffer()}else U.__webglFramebuffer[q]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){U.__webglFramebuffer=[];for(let q=0;q<m.mipmaps.length;q++)U.__webglFramebuffer[q]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(se)for(let q=0,Z=W.length;q<Z;q++){const ae=n.get(W[q]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&ft(E)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let q=0;q<W.length;q++){const Z=W[q];U.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[q]);const ae=s.convert(Z.format,Z.colorSpace),Ee=s.convert(Z.type),de=b(Z.internalFormat,ae,Ee,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),oe=st(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,U.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),it(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,m);for(let q=0;q<6;q++)if(m.mipmaps&&m.mipmaps.length>0)for(let Z=0;Z<m.mipmaps.length;Z++)we(U.__webglFramebuffer[q][Z],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else we(U.__webglFramebuffer[q],E,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(m)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let q=0,Z=W.length;q<Z;q++){const ae=W[q],Ee=n.get(ae);let de=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Ge(de,ae),we(U.__webglFramebuffer,E,ae,i.COLOR_ATTACHMENT0+q,de,0),f(ae)&&w(de)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,G.__webglTexture),Ge(q,m),m.mipmaps&&m.mipmaps.length>0)for(let Z=0;Z<m.mipmaps.length;Z++)we(U.__webglFramebuffer[Z],E,m,i.COLOR_ATTACHMENT0,q,Z);else we(U.__webglFramebuffer,E,m,i.COLOR_ATTACHMENT0,q,0);f(m)&&w(q),t.unbindTexture()}E.depthBuffer&&Ye(E)}function rt(E){const m=E.textures;for(let U=0,G=m.length;U<G;U++){const W=m[U];if(f(W)){const ne=R(E),se=n.get(W).__webglTexture;t.bindTexture(ne,se),w(ne),t.unbindTexture()}}}const pt=[],gt=[];function vt(E){if(E.samples>0){if(ft(E)===!1){const m=E.textures,U=E.width,G=E.height;let W=i.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(E),q=m.length>1;if(q)for(let ae=0;ae<m.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);const Z=E.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<m.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ee=n.get(m[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,U,G,0,0,U,G,W,i.NEAREST),c===!0&&(pt.length=0,gt.length=0,pt.push(i.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(pt.push(ne),gt.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let ae=0;ae<m.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);const Ee=n.get(m[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const m=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function st(E){return Math.min(r.maxSamples,E.samples)}function ft(E){const m=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function L(E){const m=a.render.frame;u.get(E)!==m&&(u.set(E,m),E.update())}function Rt(E,m){const U=E.colorSpace,G=E.format,W=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==gr&&U!==wn&&(We.getTransfer(U)===Ze?(G!==Wt||W!==Bt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",U)),m}function Ke(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=j,this.setTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=ee,this.setTexture3D=ce,this.setTextureCube=he,this.rebindTextures=Ve,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function um(i,e){function t(n,r=wn){let s;const a=We.getTransfer(r);if(n===Bt)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jo)return i.BYTE;if(n===qo)return i.SHORT;if(n===Pi)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===Zt)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===Zo)return i.RGB;if(n===Wt)return i.RGBA;if(n===gn)return i.DEPTH_COMPONENT;if(n===kn)return i.DEPTH_STENCIL;if(n===Jo)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===Hn)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===oa)return i.RGBA_INTEGER;if(n===dr||n===ur||n===fr||n===hr)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ms||n===bs||n===Ss||n===Es)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ys||n===Ts||n===As||n===ws||n===Rs||n===mr||n===Cs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ys||n===Ts)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===As)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ws)return s.COMPRESSED_R11_EAC;if(n===Rs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===mr)return s.COMPRESSED_RG11_EAC;if(n===Cs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ns||n===Ps||n===Ds||n===Ls||n===Is||n===Us||n===Fs||n===Os||n===Bs||n===zs||n===ks||n===Gs||n===Vs||n===Hs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ns)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ps)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ds)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ls)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Is)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Us)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Os)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ks)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Xs||n===js)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ws)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===js)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qs||n===Ys||n===xr||n===$s)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ys)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const fm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ol(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new sn({vertexShader:fm,fragmentShader:hm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rn(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mm extends Xn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,g=null,v=null;const y=typeof XRWebGLBinding<"u",x=new pm,f={},w=t.getContextAttributes();let R=null,b=null;const S=[],T=[],N=new qe;let _=null;const A=new Ot;A.viewport=new lt;const D=new Ot;D.viewport=new lt;const C=[A,D],F=new yd;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=S[$];return ie===void 0&&(ie=new Ur,S[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=S[$];return ie===void 0&&(ie=new Ur,S[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=S[$];return ie===void 0&&(ie=new Ur,S[$]=ie),ie.getHandSpace()};function k($){const ie=T.indexOf($.inputSource);if(ie===-1)return;const te=S[ie];te!==void 0&&(te.update($.inputSource,$.frame,l||a),te.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",H);for(let $=0;$<S.length;$++){const ie=T[$];ie!==null&&(T[$]=null,S[$].disconnect(ie))}X=null,j=null,x.reset();for(const $ in f)delete f[$];e.setRenderTarget(R),g=null,d=null,h=null,r=null,b=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(N),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Ce=null,Ne=null;w.depth&&(Ne=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=w.stencil?kn:gn,Ce=w.stencil?Di:nn);const we={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new en(d.textureWidth,d.textureHeight,{format:Wt,type:Bt,depthTexture:new mi(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new en(g.framebufferWidth,g.framebufferHeight,{format:Wt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H($){for(let ie=0;ie<$.removed.length;ie++){const te=$.removed[ie],Ce=T.indexOf(te);Ce>=0&&(T[Ce]=null,S[Ce].disconnect(te))}for(let ie=0;ie<$.added.length;ie++){const te=$.added[ie];let Ce=T.indexOf(te);if(Ce===-1){for(let we=0;we<S.length;we++)if(we>=T.length){T.push(te),Ce=we;break}else if(T[we]===null){T[we]=te,Ce=we;break}if(Ce===-1)break}const Ne=S[Ce];Ne&&Ne.connect(te)}}const J=new z,ee=new z;function ce($,ie,te){J.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(te.matrixWorld);const Ce=J.distanceTo(ee),Ne=ie.projectionMatrix.elements,we=te.projectionMatrix.elements,it=Ne[14]/(Ne[10]-1),Be=Ne[14]/(Ne[10]+1),Ye=(Ne[9]+1)/Ne[5],Ve=(Ne[9]-1)/Ne[5],ke=(Ne[8]-1)/Ne[0],rt=(we[8]+1)/we[0],pt=it*ke,gt=it*rt,vt=Ce/(-ke+rt),st=vt*-ke;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ne[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ft=it+vt,L=Be+vt,Rt=pt-st,Ke=gt+(Ce-st),E=Ye*Be/L*ft,m=Ve*Be/L*ft;$.projectionMatrix.makePerspective(Rt,Ke,E,m,ft,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function he($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,te=$.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(te=x.depthFar)),F.near=D.near=A.near=ie,F.far=D.far=A.far=te,(X!==F.near||j!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,j=F.far),F.layers.mask=$.layers.mask|6,A.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const Ce=$.parent,Ne=F.cameras;he(F,Ce);for(let we=0;we<Ne.length;we++)he(Ne[we],Ce);Ne.length===2?ce(F,A,D):F.projectionMatrix.copy(A.projectionMatrix),_e($,F,Ce)};function _e($,ie,te){te===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(te.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ii*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function($){return f[$]};let ve=null;function Fe($,ie){if(u=ie.getViewerPose(l||a),v=ie,u!==null){const te=u.views;g!==null&&(e.setRenderTargetFramebuffer(b,g.framebuffer),e.setRenderTarget(b));let Ce=!1;te.length!==F.cameras.length&&(F.cameras.length=0,Ce=!0);for(let Be=0;Be<te.length;Be++){const Ye=te[Be];let Ve=null;if(g!==null)Ve=g.getViewport(Ye);else{const rt=h.getViewSubImage(d,Ye);Ve=rt.viewport,Be===0&&(e.setRenderTargetTextures(b,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(b))}let ke=C[Be];ke===void 0&&(ke=new Ot,ke.layers.enable(Be),ke.viewport=new lt,C[Be]=ke),ke.matrix.fromArray(Ye.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ye.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),Be===0&&(F.matrix.copy(ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ce===!0&&F.cameras.push(ke)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const Be=h.getDepthInformation(te[0]);Be&&Be.isValid&&Be.texture&&x.init(Be,r.renderState)}if(Ne&&Ne.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let Be=0;Be<te.length;Be++){const Ye=te[Be].camera;if(Ye){let Ve=f[Ye];Ve||(Ve=new ol,f[Ye]=Ve);const ke=h.getCameraImage(Ye);Ve.sourceTexture=ke}}}}for(let te=0;te<S.length;te++){const Ce=T[te],Ne=S[te];Ce!==null&&Ne!==void 0&&Ne.update(Ce,ie,l||a)}ve&&ve($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ge=new fl;Ge.setAnimationLoop(Fe),this.setAnimationLoop=function($){ve=$},this.dispose=function(){}}}const xm=new ut,vl=new Le;vl.set(-1,0,0,0,1,0,0,0,1);function gm(i,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,ll(i)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,w,R,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),h(x,f)):f.isMeshPhongMaterial?(s(x,f),u(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&g(x,f,b)):f.isMeshMatcapMaterial?(s(x,f),v(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),y(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(a(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?c(x,f,w,R):f.isSpriteMaterial?l(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Ct&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Ct&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const w=e.get(f),R=w.envMap,b=w.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(xm.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(vl),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function a(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function c(x,f,w,R){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*w,x.scale.value=R*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function l(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function h(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function g(x,f,w){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=w.texture,x.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,f){f.matcap&&(x.matcap.value=f.matcap)}function y(x,f){const w=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(w.matrixWorld),x.nearDistance.value=w.shadow.camera.near,x.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _m(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const T=S.program;n.uniformBlockBinding(b,T)}function l(b,S){let T=r[b.id];T===void 0&&(x(b),T=u(b),r[b.id]=T,b.addEventListener("dispose",w));const N=S.program;n.updateUBOMapping(b,N);const _=e.render.frame;s[b.id]!==_&&(d(b),s[b.id]=_)}function u(b){const S=h();b.__bindingPointIndex=S;const T=i.createBuffer(),N=b.__size,_=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,N,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,T),T}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],T=b.uniforms,N=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,A=T.length;_<A;_++){const D=T[_];if(Array.isArray(D))for(let C=0,F=D.length;C<F;C++)g(D[C],_,C,N);else g(D,_,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,S,T,N){if(y(b,S,T,N)===!0){const _=b.__offset,A=b.value;if(Array.isArray(A)){let D=0;for(let C=0;C<A.length;C++){const F=A[C],X=f(F);v(F,b.__data,D),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,b.__data)}}function v(b,S,T){typeof b=="number"||typeof b=="boolean"?S[0]=b:b.isMatrix3?(S[0]=b.elements[0],S[1]=b.elements[1],S[2]=b.elements[2],S[3]=0,S[4]=b.elements[3],S[5]=b.elements[4],S[6]=b.elements[5],S[7]=0,S[8]=b.elements[6],S[9]=b.elements[7],S[10]=b.elements[8],S[11]=0):ArrayBuffer.isView(b)?S.set(new b.constructor(b.buffer,b.byteOffset,S.length)):b.toArray(S,T)}function y(b,S,T,N){const _=b.value,A=S+"_"+T;if(N[A]===void 0)return typeof _=="number"||typeof _=="boolean"?N[A]=_:ArrayBuffer.isView(_)?N[A]=_.slice():N[A]=_.clone(),!0;{const D=N[A];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return N[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function x(b){const S=b.uniforms;let T=0;const N=16;for(let A=0,D=S.length;A<D;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let F=0,X=C.length;F<X;F++){const j=C[F],k=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,H=k.length;Y<H;Y++){const J=k[Y],ee=f(J),ce=T%N,he=ce%ee.boundary,_e=ce+he;T+=he,_e!==0&&N-_e<ee.storage&&(T+=N-_e),j.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=T,T+=ee.storage}}}const _=T%N;return _>0&&(T+=N-_),b.__size=T,b.__cache={},this}function f(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",b),S}function w(b){const S=b.target;S.removeEventListener("dispose",w);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function R(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:R}}const vm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $t=null;function Mm(){return $t===null&&($t=new od(vm,16,16,Hn,xn),$t.name="DFG_LUT",$t.minFilter=bt,$t.magFilter=bt,$t.wrapS=hn,$t.wrapT=hn,$t.generateMipmaps=!1,$t.needsUpdate=!0),$t}class bm{constructor(e={}){const{canvas:t=Sc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Bt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const y=g,x=new Set([oa,aa,sa]),f=new Set([Bt,nn,Pi,Di,ia,ra]),w=new Uint32Array(4),R=new Int32Array(4),b=new z;let S=null,T=null;const N=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let C=!1,F=null,X=null,j=null,k=null;this._outputColorSpace=Lt;let Y=0,H=0,J=null,ee=-1,ce=null;const he=new lt,_e=new lt;let ve=null;const Fe=new $e(0);let Ge=0,$=t.width,ie=t.height,te=1,Ce=null,Ne=null;const we=new lt(0,0,$,ie),it=new lt(0,0,$,ie);let Be=!1;const Ye=new sl;let Ve=!1,ke=!1;const rt=new ut,pt=new z,gt=new lt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function ft(){return J===null?te:1}let L=n;function Rt(M,I){return t.getContext(M,I)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),L===null){const I="webgl2";if(L=Rt(I,M),L===null)throw Rt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw je("WebGLRenderer: "+M.message),M}let Ke,E,m,U,G,W,ne,se,q,Z,ae,Ee,de,oe,Ae,Re,Ie,P,re,K,le,me,Q;function Se(){Ke=new Mh(L),Ke.init(),le=new um(L,Ke),E=new fh(L,Ke,e,le),m=new cm(L,Ke),E.reversedDepthBuffer&&d&&m.buffers.depth.setReversed(!0),X=L.createFramebuffer(),j=L.createFramebuffer(),k=L.createFramebuffer(),U=new Eh(L),G=new $p,W=new dm(L,Ke,m,G,E,le,U),ne=new vh(D),se=new Ad(L),me=new dh(L,se),q=new bh(L,se,U,me),Z=new Th(L,q,se,me,U),P=new yh(L,E,W),Ae=new hh(G),ae=new Yp(D,ne,Ke,E,me,Ae),Ee=new gm(D,G),de=new Zp,oe=new im(Ke),Ie=new ch(D,ne,m,Z,v,c),Re=new lm(D,Z,E),Q=new _m(L,U,E,m),re=new uh(L,Ke,U),K=new Sh(L,Ke,U),U.programs=ae.programs,D.capabilities=E,D.extensions=Ke,D.properties=G,D.renderLists=de,D.shadowMap=Re,D.state=m,D.info=U}Se(),y!==Bt&&(A=new wh(y,t.width,t.height,o,r,s));const Me=new mm(D,L);this.xr=Me,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize($,ie,!1))},this.getSize=function(M){return M.set($,ie)},this.setSize=function(M,I,V=!0){if(Me.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ie=I,t.width=Math.floor(M*te),t.height=Math.floor(I*te),V===!0&&(t.style.width=M+"px",t.style.height=I+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set($*te,ie*te).floor()},this.setDrawingBufferSize=function(M,I,V){$=M,ie=I,te=V,t.width=Math.floor(M*V),t.height=Math.floor(I*V),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(y===Bt){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(he)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,I,V,O){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,I,V,O),m.viewport(he.copy(we).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(it)},this.setScissor=function(M,I,V,O){M.isVector4?it.set(M.x,M.y,M.z,M.w):it.set(M,I,V,O),m.scissor(_e.copy(it).multiplyScalar(te).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){m.setScissorTest(Be=M)},this.setOpaqueSort=function(M){Ce=M},this.setTransparentSort=function(M){Ne=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,V=!0){let O=0;if(M){let B=!1;if(J!==null){const pe=J.texture.format;B=x.has(pe)}if(B){const pe=J.texture.type,ge=f.has(pe),fe=Ie.getClearColor(),be=Ie.getClearAlpha(),ye=fe.r,Ue=fe.g,ze=fe.b;ge?(w[0]=ye,w[1]=Ue,w[2]=ze,w[3]=be,L.clearBufferuiv(L.COLOR,0,w)):(R[0]=ye,R[1]=Ue,R[2]=ze,R[3]=be,L.clearBufferiv(L.COLOR,0,R))}else O|=L.COLOR_BUFFER_BIT}I&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),Ie.dispose(),de.dispose(),oe.dispose(),G.dispose(),ne.dispose(),Z.dispose(),me.dispose(),Q.dispose(),ae.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ga),Me.removeEventListener("sessionend",_a),Pn.stop()};function at(M){M.preventDefault(),Ua("WebGLRenderer: Context Lost."),C=!0}function tt(){Ua("WebGLRenderer: Context Restored."),C=!1;const M=U.autoReset,I=Re.enabled,V=Re.autoUpdate,O=Re.needsUpdate,B=Re.type;Se(),U.autoReset=M,Re.enabled=I,Re.autoUpdate=V,Re.needsUpdate=O,Re.type=B}function Xt(M){je("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function jt(M){const I=M.target;I.removeEventListener("dispose",jt),Ml(I)}function Ml(M){bl(M),G.remove(M)}function bl(M){const I=G.get(M).programs;I!==void 0&&(I.forEach(function(V){ae.releaseProgram(V)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,V,O,B,pe){I===null&&(I=vt);const ge=B.isMesh&&B.matrixWorld.determinantAffine()<0,fe=yl(M,I,V,O,B);m.setMaterial(O,ge);let be=V.index,ye=1;if(O.wireframe===!0){if(be=q.getWireframeAttribute(V),be===void 0)return;ye=2}const Ue=V.drawRange,ze=V.attributes.position;let Te=Ue.start*ye,Je=(Ue.start+Ue.count)*ye;pe!==null&&(Te=Math.max(Te,pe.start*ye),Je=Math.min(Je,(pe.start+pe.count)*ye)),be!==null?(Te=Math.max(Te,0),Je=Math.min(Je,be.count)):ze!=null&&(Te=Math.max(Te,0),Je=Math.min(Je,ze.count));const ct=Je-Te;if(ct<0||ct===1/0)return;me.setup(B,O,fe,V,be);let ot,Qe=re;if(be!==null&&(ot=se.get(be),Qe=K,Qe.setIndex(ot)),B.isMesh)O.wireframe===!0?(m.setLineWidth(O.wireframeLinewidth*ft()),Qe.setMode(L.LINES)):Qe.setMode(L.TRIANGLES);else if(B.isLine){let St=O.linewidth;St===void 0&&(St=1),m.setLineWidth(St*ft()),B.isLineSegments?Qe.setMode(L.LINES):B.isLineLoop?Qe.setMode(L.LINE_LOOP):Qe.setMode(L.LINE_STRIP)}else B.isPoints?Qe.setMode(L.POINTS):B.isSprite&&Qe.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const St=B._multiDrawStarts,xe=B._multiDrawCounts,Nt=B._multiDrawCount,Xe=be?se.get(be).bytesPerElement:1,Ut=G.get(O).currentProgram.getUniforms();for(let qt=0;qt<Nt;qt++)Ut.setValue(L,"_gl_DrawID",qt),Qe.render(St[qt]/Xe,xe[qt])}else if(B.isInstancedMesh)Qe.renderInstances(Te,ct,B.count);else if(V.isInstancedBufferGeometry){const St=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,xe=Math.min(V.instanceCount,St);Qe.renderInstances(Te,ct,xe)}else Qe.render(Te,ct)};function xa(M,I,V){M.transparent===!0&&M.side===fn&&M.forceSinglePass===!1?(M.side=Ct,M.needsUpdate=!0,Bi(M,I,V),M.side=Nn,M.needsUpdate=!0,Bi(M,I,V),M.side=fn):Bi(M,I,V)}this.compile=function(M,I,V=null){V===null&&(V=M),T=oe.get(V),T.init(I),_.push(T),V.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),M!==V&&M.traverseVisible(function(B){B.isLight&&B.layers.test(I.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const O=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let ge=0;ge<pe.length;ge++){const fe=pe[ge];xa(fe,V,B),O.add(fe)}else xa(pe,V,B),O.add(pe)}),T=_.pop(),O},this.compileAsync=function(M,I,V=null){const O=this.compile(M,I,V);return new Promise(B=>{function pe(){if(O.forEach(function(ge){G.get(ge).currentProgram.isReady()&&O.delete(ge)}),O.size===0){B(M);return}setTimeout(pe,10)}Ke.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Tr=null;function Sl(M){Tr&&Tr(M)}function ga(){Pn.stop()}function _a(){Pn.start()}const Pn=new fl;Pn.setAnimationLoop(Sl),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(M){Tr=M,Me.setAnimationLoop(M),M===null?Pn.stop():Pn.start()},Me.addEventListener("sessionstart",ga),Me.addEventListener("sessionend",_a),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;F!==null&&F.renderStart(M,I);const V=Me.enabled===!0&&Me.isPresenting===!0,O=A!==null&&(J===null||V)&&A.begin(D,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(I),I=Me.getCamera()),M.isScene===!0&&M.onBeforeRender(D,M,I,J),T=oe.get(M,_.length),T.init(I),T.state.textureUnits=W.getTextureUnits(),_.push(T),rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ye.setFromProjectionMatrix(rt,Jt,I.reversedDepth),ke=this.localClippingEnabled,Ve=Ae.init(this.clippingPlanes,ke),S=de.get(M,N.length),S.init(),N.push(S),Me.enabled===!0&&Me.isPresenting===!0){const ge=D.xr.getDepthSensingMesh();ge!==null&&Ar(ge,I,-1/0,D.sortObjects)}Ar(M,I,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Ce,Ne,I.reversedDepth),st=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,st&&Ie.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Ae.beginShadows();const B=T.state.shadowsArray;if(Re.render(B,M,I),Ve===!0&&Ae.endShadows(),(O&&A.hasRenderPass())===!1){const ge=S.opaque,fe=S.transmissive;if(T.setupLights(),I.isArrayCamera){const be=I.cameras;if(fe.length>0)for(let ye=0,Ue=be.length;ye<Ue;ye++){const ze=be[ye];Ma(ge,fe,M,ze)}st&&Ie.render(M);for(let ye=0,Ue=be.length;ye<Ue;ye++){const ze=be[ye];va(S,M,ze,ze.viewport)}}else fe.length>0&&Ma(ge,fe,M,I),st&&Ie.render(M),va(S,M,I)}J!==null&&H===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),O&&A.end(D),M.isScene===!0&&M.onAfterRender(D,M,I),me.resetDefaultState(),ee=-1,ce=null,_.pop(),_.length>0?(T=_[_.length-1],W.setTextureUnits(T.state.textureUnits),Ve===!0&&Ae.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,N.pop(),N.length>0?S=N[N.length-1]:S=null,F!==null&&F.renderEnd()};function Ar(M,I,V,O){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ye.intersectsSprite(M)){O&&gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(rt);const ge=Z.update(M),fe=M.material;fe.visible&&S.push(M,ge,fe,V,gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ye.intersectsObject(M))){const ge=Z.update(M),fe=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),gt.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),gt.copy(ge.boundingSphere.center)),gt.applyMatrix4(M.matrixWorld).applyMatrix4(rt)),Array.isArray(fe)){const be=ge.groups;for(let ye=0,Ue=be.length;ye<Ue;ye++){const ze=be[ye],Te=fe[ze.materialIndex];Te&&Te.visible&&S.push(M,ge,Te,V,gt.z,ze)}}else fe.visible&&S.push(M,ge,fe,V,gt.z,null)}}const pe=M.children;for(let ge=0,fe=pe.length;ge<fe;ge++)Ar(pe[ge],I,V,O)}function va(M,I,V,O){const{opaque:B,transmissive:pe,transparent:ge}=M;T.setupLightsView(V),Ve===!0&&Ae.setGlobalState(D.clippingPlanes,V),O&&m.viewport(he.copy(O)),B.length>0&&Oi(B,I,V),pe.length>0&&Oi(pe,I,V),ge.length>0&&Oi(ge,I,V),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Ma(M,I,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){const Te=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new en(1,1,{generateMipmaps:!0,type:Te?xn:Bt,minFilter:zn,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const pe=T.state.transmissionRenderTarget[O.id],ge=O.viewport||he;pe.setSize(ge.z*D.transmissionResolutionScale,ge.w*D.transmissionResolutionScale);const fe=D.getRenderTarget(),be=D.getActiveCubeFace(),ye=D.getActiveMipmapLevel();D.setRenderTarget(pe),D.getClearColor(Fe),Ge=D.getClearAlpha(),Ge<1&&D.setClearColor(16777215,.5),D.clear(),st&&Ie.render(V);const Ue=D.toneMapping;D.toneMapping=Qt;const ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),Ve===!0&&Ae.setGlobalState(D.clippingPlanes,O),Oi(M,V,O),W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Je=0,ct=I.length;Je<ct;Je++){const ot=I[Je],{object:Qe,geometry:St,material:xe,group:Nt}=ot;if(xe.side===fn&&Qe.layers.test(O.layers)){const Xe=xe.side;xe.side=Ct,xe.needsUpdate=!0,ba(Qe,V,O,St,xe,Nt),xe.side=Xe,xe.needsUpdate=!0,Te=!0}}Te===!0&&(W.updateMultisampleRenderTarget(pe),W.updateRenderTargetMipmap(pe))}D.setRenderTarget(fe,be,ye),D.setClearColor(Fe,Ge),ze!==void 0&&(O.viewport=ze),D.toneMapping=Ue}function Oi(M,I,V){const O=I.isScene===!0?I.overrideMaterial:null;for(let B=0,pe=M.length;B<pe;B++){const ge=M[B],{object:fe,geometry:be,group:ye}=ge;let Ue=ge.material;Ue.allowOverride===!0&&O!==null&&(Ue=O),fe.layers.test(V.layers)&&ba(fe,I,V,be,Ue,ye)}}function ba(M,I,V,O,B,pe){M.onBeforeRender(D,I,V,O,B,pe),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(D,I,V,O,M,pe),B.transparent===!0&&B.side===fn&&B.forceSinglePass===!1?(B.side=Ct,B.needsUpdate=!0,D.renderBufferDirect(V,I,O,B,M,pe),B.side=Nn,B.needsUpdate=!0,D.renderBufferDirect(V,I,O,B,M,pe),B.side=fn):D.renderBufferDirect(V,I,O,B,M,pe),M.onAfterRender(D,I,V,O,B,pe)}function Bi(M,I,V){I.isScene!==!0&&(I=vt);const O=G.get(M),B=T.state.lights,pe=T.state.shadowsArray,ge=B.state.version,fe=ae.getParameters(M,B.state,pe,I,V,T.state.lightProbeGridArray),be=ae.getProgramCacheKey(fe);let ye=O.programs;O.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;const Ue=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;O.envMap=ne.get(M.envMap||O.environment,Ue),O.envMapRotation=O.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,ye===void 0&&(M.addEventListener("dispose",jt),ye=new Map,O.programs=ye);let ze=ye.get(be);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===ge)return Ea(M,fe),ze}else fe.uniforms=ae.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,V,fe),M.onBeforeCompile(fe,D),ze=ae.acquireProgram(fe,be),ye.set(be,ze),O.uniforms=fe.uniforms;const Te=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=Ae.uniform),Ea(M,fe),O.needsLights=Al(M),O.lightsStateVersion=ge,O.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=T.state.lightProbeGridArray.length>0,O.currentProgram=ze,O.uniformsList=null,ze}function Sa(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=pr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Ea(M,I){const V=G.get(M);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function El(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let V=0,O=M.length;V<O;V++){const B=M[V];if(B.texture!==null&&B.boundingBox.containsPoint(b))return B}return null}function yl(M,I,V,O,B){I.isScene!==!0&&(I=vt),W.resetTextureUnits();const pe=I.fog,ge=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,fe=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:We.workingColorSpace,be=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,ye=ne.get(O.envMap||ge,be),Ue=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,ct=!!V.morphAttributes.color;let ot=Qt;O.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ot=D.toneMapping);const Qe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=Qe!==void 0?Qe.length:0,xe=G.get(O),Nt=T.state.lights;if(Ve===!0&&(ke===!0||M!==ce)){const nt=M===ce&&O.id===ee;Ae.setState(O,M,nt)}let Xe=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Nt.state.version||xe.outputColorSpace!==fe||B.isBatchedMesh&&xe.batching===!1||!B.isBatchedMesh&&xe.batching===!0||B.isBatchedMesh&&xe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&xe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&xe.instancing===!1||!B.isInstancedMesh&&xe.instancing===!0||B.isSkinnedMesh&&xe.skinning===!1||!B.isSkinnedMesh&&xe.skinning===!0||B.isInstancedMesh&&xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&xe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&xe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&xe.instancingMorph===!1&&B.morphTexture!==null||xe.envMap!==ye||O.fog===!0&&xe.fog!==pe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ae.numPlanes||xe.numIntersection!==Ae.numIntersection)||xe.vertexAlphas!==Ue||xe.vertexTangents!==ze||xe.morphTargets!==Te||xe.morphNormals!==Je||xe.morphColors!==ct||xe.toneMapping!==ot||xe.morphTargetsCount!==St||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Xe=!0):(Xe=!0,xe.__version=O.version);let Ut=xe.currentProgram;Xe===!0&&(Ut=Bi(O,I,B),F&&O.isNodeMaterial&&F.onUpdateProgram(O,Ut,xe));let qt=!1,_n=!1,jn=!1;const et=Ut.getUniforms(),dt=xe.uniforms;if(m.useProgram(Ut.program)&&(qt=!0,_n=!0,jn=!0),O.id!==ee&&(ee=O.id,_n=!0),xe.needsLights){const nt=El(T.state.lightProbeGridArray,B);xe.lightProbeGrid!==nt&&(xe.lightProbeGrid=nt,_n=!0)}if(qt||ce!==M){m.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),et.setValue(L,"projectionMatrix",M.projectionMatrix),et.setValue(L,"viewMatrix",M.matrixWorldInverse);const Mn=et.map.cameraPosition;Mn!==void 0&&Mn.setValue(L,pt.setFromMatrixPosition(M.matrixWorld)),E.logarithmicDepthBuffer&&et.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&et.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),ce!==M&&(ce=M,_n=!0,jn=!0)}if(xe.needsLights&&(Nt.state.directionalShadowMap.length>0&&et.setValue(L,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&et.setValue(L,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&et.setValue(L,"pointShadowMap",Nt.state.pointShadowMap,W)),B.isSkinnedMesh){et.setOptional(L,B,"bindMatrix"),et.setOptional(L,B,"bindMatrixInverse");const nt=B.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),et.setValue(L,"boneTexture",nt.boneTexture,W))}B.isBatchedMesh&&(et.setOptional(L,B,"batchingTexture"),et.setValue(L,"batchingTexture",B._matricesTexture,W),et.setOptional(L,B,"batchingIdTexture"),et.setValue(L,"batchingIdTexture",B._indirectTexture,W),et.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&et.setValue(L,"batchingColorTexture",B._colorsTexture,W));const vn=V.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&P.update(B,V,Ut),(_n||xe.receiveShadow!==B.receiveShadow)&&(xe.receiveShadow=B.receiveShadow,et.setValue(L,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(dt.envMapIntensity.value=I.environmentIntensity),dt.dfgLUT!==void 0&&(dt.dfgLUT.value=Mm()),_n){if(et.setValue(L,"toneMappingExposure",D.toneMappingExposure),xe.needsLights&&Tl(dt,jn),pe&&O.fog===!0&&Ee.refreshFogUniforms(dt,pe),Ee.refreshMaterialUniforms(dt,O,te,ie,T.state.transmissionRenderTarget[M.id]),xe.needsLights&&xe.lightProbeGrid){const nt=xe.lightProbeGrid;dt.probesSH.value=nt.texture,dt.probesMin.value.copy(nt.boundingBox.min),dt.probesMax.value.copy(nt.boundingBox.max),dt.probesResolution.value.copy(nt.resolution)}pr.upload(L,Sa(xe),dt,W)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(pr.upload(L,Sa(xe),dt,W),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&et.setValue(L,"center",B.center),et.setValue(L,"modelViewMatrix",B.modelViewMatrix),et.setValue(L,"normalMatrix",B.normalMatrix),et.setValue(L,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const nt=O.uniformsGroups;for(let Mn=0,qn=nt.length;Mn<qn;Mn++){const ya=nt[Mn];Q.update(ya,Ut),Q.bind(ya,Ut)}}return Ut}function Tl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Al(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,I,V){const O=G.get(M);O.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(M.texture).__webglTexture=I,G.get(M.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:V,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const V=G.get(M);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,V=0){J=M,Y=I,H=V;let O=null,B=!1,pe=!1;if(M){const fe=G.get(M);if(fe.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),he.copy(M.viewport),_e.copy(M.scissor),ve=M.scissorTest,m.viewport(he),m.scissor(_e),m.setScissorTest(ve),ee=-1;return}else if(fe.__webglFramebuffer===void 0)W.setupRenderTarget(M);else if(fe.__hasExternalTextures)W.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(fe.__boundDepthTexture!==Ue){if(Ue!==null&&G.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(M)}}const be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);const ye=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ye[I])?O=ye[I][V]:O=ye[I],B=!0):M.samples>0&&W.useMultisampledRTT(M)===!1?O=G.get(M).__webglMultisampledFramebuffer:Array.isArray(ye)?O=ye[V]:O=ye,he.copy(M.viewport),_e.copy(M.scissor),ve=M.scissorTest}else he.copy(we).multiplyScalar(te).floor(),_e.copy(it).multiplyScalar(te).floor(),ve=Be;if(V!==0&&(O=X),m.bindFramebuffer(L.FRAMEBUFFER,O)&&m.drawBuffers(M,O),m.viewport(he),m.scissor(_e),m.setScissorTest(ve),B){const fe=G.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,V)}else if(pe){const fe=I;for(let be=0;be<M.textures.length;be++){const ye=G.get(M.textures[be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+be,ye.__webglTexture,V,fe)}}else if(M!==null&&V!==0){const fe=G.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,V)}ee=-1},this.readRenderTargetPixels=function(M,I,V,O,B,pe,ge,fe=0){if(!(M&&M.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){m.bindFramebuffer(L.FRAMEBUFFER,be);try{const ye=M.textures[fe],Ue=ye.format,ze=ye.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!E.textureFormatReadable(Ue)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(ze)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-O&&V>=0&&V<=M.height-B&&L.readPixels(I,V,O,B,le.convert(Ue),le.convert(ze),pe)}finally{const ye=J!==null?G.get(J).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(M,I,V,O,B,pe,ge,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be)if(I>=0&&I<=M.width-O&&V>=0&&V<=M.height-B){m.bindFramebuffer(L.FRAMEBUFFER,be);const ye=M.textures[fe],Ue=ye.format,ze=ye.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe),!E.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),L.readPixels(I,V,O,B,le.convert(Ue),le.convert(ze),0);const Je=J!==null?G.get(J).__webglFramebuffer:null;m.bindFramebuffer(L.FRAMEBUFFER,Je);const ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ec(L,ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(Te),L.deleteSync(ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,V=0){const O=Math.pow(2,-V),B=Math.floor(M.image.width*O),pe=Math.floor(M.image.height*O),ge=I!==null?I.x:0,fe=I!==null?I.y:0;W.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ge,fe,B,pe),m.unbindTexture()},this.copyTextureToTexture=function(M,I,V=null,O=null,B=0,pe=0){let ge,fe,be,ye,Ue,ze,Te,Je,ct;const ot=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(V!==null)ge=V.max.x-V.min.x,fe=V.max.y-V.min.y,be=V.isBox3?V.max.z-V.min.z:1,ye=V.min.x,Ue=V.min.y,ze=V.isBox3?V.min.z:0;else{const dt=Math.pow(2,-B);ge=Math.floor(ot.width*dt),fe=Math.floor(ot.height*dt),M.isDataArrayTexture?be=ot.depth:M.isData3DTexture?be=Math.floor(ot.depth*dt):be=1,ye=0,Ue=0,ze=0}O!==null?(Te=O.x,Je=O.y,ct=O.z):(Te=0,Je=0,ct=0);const Qe=le.convert(I.format),St=le.convert(I.type);let xe;I.isData3DTexture?(W.setTexture3D(I,0),xe=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(W.setTexture2DArray(I,0),xe=L.TEXTURE_2D_ARRAY):(W.setTexture2D(I,0),xe=L.TEXTURE_2D),m.activeTexture(L.TEXTURE0),m.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),m.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),m.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Nt=m.getParameter(L.UNPACK_ROW_LENGTH),Xe=m.getParameter(L.UNPACK_IMAGE_HEIGHT),Ut=m.getParameter(L.UNPACK_SKIP_PIXELS),qt=m.getParameter(L.UNPACK_SKIP_ROWS),_n=m.getParameter(L.UNPACK_SKIP_IMAGES);m.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),m.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),m.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),m.pixelStorei(L.UNPACK_SKIP_IMAGES,ze);const jn=M.isDataArrayTexture||M.isData3DTexture,et=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const dt=G.get(M),vn=G.get(I),nt=G.get(dt.__renderTarget),Mn=G.get(vn.__renderTarget);m.bindFramebuffer(L.READ_FRAMEBUFFER,nt.__webglFramebuffer),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let qn=0;qn<be;qn++)jn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(M).__webglTexture,B,ze+qn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(I).__webglTexture,pe,ct+qn)),L.blitFramebuffer(ye,Ue,ge,fe,Te,Je,ge,fe,L.DEPTH_BUFFER_BIT,L.NEAREST);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||G.has(M)){const dt=G.get(M),vn=G.get(I);m.bindFramebuffer(L.READ_FRAMEBUFFER,j),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let nt=0;nt<be;nt++)jn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dt.__webglTexture,B,ze+nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,B),et?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,pe,ct+nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,pe),B!==0?L.blitFramebuffer(ye,Ue,ge,fe,Te,Je,ge,fe,L.COLOR_BUFFER_BIT,L.NEAREST):et?L.copyTexSubImage3D(xe,pe,Te,Je,ct+nt,ye,Ue,ge,fe):L.copyTexSubImage2D(xe,pe,Te,Je,ye,Ue,ge,fe);m.bindFramebuffer(L.READ_FRAMEBUFFER,null),m.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else et?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(xe,pe,Te,Je,ct,ge,fe,be,Qe,St,ot.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,pe,Te,Je,ct,ge,fe,be,Qe,ot.data):L.texSubImage3D(xe,pe,Te,Je,ct,ge,fe,be,Qe,St,ot):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,Te,Je,ge,fe,Qe,St,ot.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,Te,Je,ot.width,ot.height,Qe,ot.data):L.texSubImage2D(L.TEXTURE_2D,pe,Te,Je,ge,fe,Qe,St,ot);m.pixelStorei(L.UNPACK_ROW_LENGTH,Nt),m.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Xe),m.pixelStorei(L.UNPACK_SKIP_PIXELS,Ut),m.pixelStorei(L.UNPACK_SKIP_ROWS,qt),m.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),pe===0&&I.generateMipmaps&&L.generateMipmap(xe),m.unbindTexture()},this.initRenderTarget=function(M){G.get(M).__webglFramebuffer===void 0&&W.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?W.setTextureCube(M,0):M.isData3DTexture?W.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?W.setTexture2DArray(M,0):W.setTexture2D(M,0),m.unbindTexture()},this.resetState=function(){Y=0,H=0,J=null,m.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}function Sm({scenes:i,dateTitle:e,phaseName:t,notes:n,isFullscreen:r,onToggleFullscreen:s}){const a=De.useRef(null),[o,c]=De.useState(0),[l,u]=De.useState(!0),[h,d]=De.useState(!1),[g,v]=De.useState(!0),y=De.useRef(null),x=De.useRef(null),f=De.useRef(null),w=De.useRef(null),R=De.useRef(null),b=De.useRef(!1),S=De.useRef(0),T=De.useRef(0),N=De.useRef(0),_=De.useRef(0),A=De.useRef(0),D=De.useRef(0),C=De.useRef(0),F=De.useRef(0),X=De.useRef(75),j=i[o]||i[0];De.useEffect(()=>{c(0),A.current=0,D.current=0},[i]),De.useEffect(()=>{if(!a.current)return;const ve=a.current.clientWidth,Fe=a.current.clientHeight,Ge=new ed;y.current=Ge;const $=new Ot(75,ve/Fe,1,1100);$.target=new z(0,0,0),x.current=$;const ie=new pa(500,60,40);ie.scale(-1,1,1);const te=new ha({color:1118485}),Ce=new rn(ie,te);Ge.add(Ce),w.current=Ce;const Ne=new bm({antialias:!0,alpha:!1});Ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ne.setSize(ve,Fe),f.current=Ne;const we=new Sd;for(R.current=we;a.current.firstChild;)a.current.removeChild(a.current.firstChild);a.current.appendChild(Ne.domElement);let it;const Be=()=>{it=requestAnimationFrame(Be),h&&!b.current&&(A.current+=.08),D.current=Math.max(-85,Math.min(85,D.current)),C.current=ki.degToRad(90-D.current),F.current=ki.degToRad(A.current);const Ve=500*Math.sin(C.current)*Math.cos(F.current),ke=500*Math.cos(C.current),rt=500*Math.sin(C.current)*Math.sin(F.current);x.current&&(x.current.lookAt(Ve,ke,rt),Ne.render(Ge,x.current))};Be();const Ye=()=>{if(!a.current||!x.current||!f.current)return;const Ve=a.current.clientWidth,ke=a.current.clientHeight;x.current.aspect=Ve/ke,x.current.updateProjectionMatrix(),f.current.setSize(Ve,ke)};return window.addEventListener("resize",Ye),()=>{cancelAnimationFrame(it),window.removeEventListener("resize",Ye),Ne.dispose(),ie.dispose(),te.dispose()}},[]),De.useEffect(()=>{!j?.equirectangularUrl||!R.current||!w.current||(u(!0),R.current.load(j.equirectangularUrl,ve=>{if(ve.colorSpace=Lt,ve.minFilter=bt,ve.generateMipmaps=!1,w.current){const Fe=w.current.material;Fe.map&&Fe.map.dispose(),Fe.map=ve,Fe.needsUpdate=!0}u(!1)},void 0,ve=>{console.error("Error loading 360 equirectangular texture:",ve),u(!1)}))},[j?.equirectangularUrl]);const k=ve=>{b.current=!0,S.current=ve.clientX,T.current=ve.clientY,N.current=A.current,_.current=D.current},Y=ve=>{if(!b.current)return;const Fe=.15*(x.current?x.current.fov/75:1);A.current=(S.current-ve.clientX)*Fe+N.current,D.current=(ve.clientY-T.current)*Fe+_.current},H=()=>{b.current=!1},J=ve=>{if(ve.preventDefault(),!x.current)return;const Fe=x.current.fov+ve.deltaY*.05;x.current.fov=ki.clamp(Fe,35,95),x.current.updateProjectionMatrix(),X.current=x.current.fov},ee=ve=>{if(!x.current)return;const Fe=ve==="in"?-10:10;x.current.fov=ki.clamp(x.current.fov+Fe,35,95),x.current.updateProjectionMatrix()},ce=()=>{A.current=0,D.current=0,x.current&&(x.current.fov=75,x.current.updateProjectionMatrix())},he=()=>{c(ve=>ve>0?ve-1:i.length-1)},_e=()=>{c(ve=>ve<i.length-1?ve+1:0)};return p.jsxs("div",{className:`relative w-full rounded-xs overflow-hidden border border-[#c2a275]/30 bg-[#0a0a0c] shadow-2xl select-none font-sans ${r?"fixed inset-0 z-50 h-screen w-screen rounded-none":"h-[480px] sm:h-[580px] md:h-[640px]"}`,children:[p.jsx("div",{ref:a,className:"w-full h-full cursor-grab active:cursor-grabbing",onPointerDown:k,onPointerMove:Y,onPointerUp:H,onPointerLeave:H,onWheel:J}),l&&p.jsxs("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-xs pointer-events-none",children:[p.jsx("div",{className:"w-10 h-10 border-2 border-teal-uno border-t-transparent rounded-full animate-spin mb-3"}),p.jsx("span",{className:"text-xs font-label-caps uppercase tracking-wider text-white",children:"Cargando Escena Esférica 360° HD..."}),p.jsxs("span",{className:"text-[10px] text-zinc-400 mt-1 font-mono",children:[e," • ",j?.title]})]}),p.jsxs("div",{className:"absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-3 pointer-events-none",children:[p.jsxs("div",{className:"bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xs border border-[#c2a275]/30 shadow-lg pointer-events-auto flex items-center gap-2.5",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-[#c2a275] font-bold tracking-wider",children:e}),p.jsxs("span",{className:"text-[9px] font-mono px-1.5 py-0.2 bg-teal-uno/20 text-teal-uno rounded-full border border-teal-uno/30",children:["Punto ",o+1," de ",i.length]})]}),p.jsx("h4",{className:"text-xs font-semibold text-white truncate max-w-xs sm:max-w-sm",children:j?.title||`Escena 360° ${o+1}`})]})]}),p.jsxs("div",{className:"flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-xs border border-[#c2a275]/30 shadow-lg pointer-events-auto",children:[p.jsx("button",{onClick:()=>d(!h),className:`p-2 rounded-xs text-xs transition-colors cursor-pointer ${h?"bg-teal-uno text-white font-bold":"text-zinc-300 hover:text-white hover:bg-white/10"}`,title:h?"Pausar autorrotación":"Activar autorrotación 360°",children:h?p.jsx(wl,{className:"w-3.5 h-3.5"}):p.jsx(Rl,{className:"w-3.5 h-3.5"})}),p.jsx("button",{onClick:()=>ee("in"),className:"p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",title:"Acercar (Zoom In)",children:p.jsx(Co,{className:"w-3.5 h-3.5"})}),p.jsx("button",{onClick:()=>ee("out"),className:"p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",title:"Alejar (Zoom Out)",children:p.jsx(No,{className:"w-3.5 h-3.5"})}),p.jsx("button",{onClick:ce,className:"p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-[10px] font-label-caps uppercase",title:"Centrar vista",children:p.jsx(as,{className:"w-3.5 h-3.5 text-[#c2a275]"})}),p.jsx("button",{onClick:s,className:"p-2 rounded-xs text-zinc-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer",title:r?"Salir de pantalla completa":"Pantalla completa",children:r?p.jsx(Cl,{className:"w-3.5 h-3.5"}):p.jsx(Po,{className:"w-3.5 h-3.5"})})]})]}),i.length>1&&p.jsxs("div",{className:"absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-2",children:[p.jsxs("div",{className:"flex items-center justify-between pointer-events-none",children:[p.jsxs("button",{onClick:()=>v(!g),className:"bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xs border border-[#c2a275]/30 text-[10px] font-label-caps uppercase text-[#c2a275] hover:text-white transition-colors cursor-pointer pointer-events-auto flex items-center gap-1.5 shadow-md",children:[p.jsx(Do,{className:"w-3 h-3 text-teal-uno"}),p.jsx("span",{children:g?"Ocultar Puntos 360°":`Ver ${i.length} Puntos 360°`})]}),p.jsxs("div",{className:"flex items-center gap-1 pointer-events-auto",children:[p.jsx("button",{onClick:he,className:"p-2 bg-black/80 hover:bg-black text-white rounded-xs border border-[#c2a275]/30 cursor-pointer transition-colors",title:"Punto anterior",children:p.jsx(Lo,{className:"w-4 h-4"})}),p.jsx("button",{onClick:_e,className:"p-2 bg-black/80 hover:bg-black text-white rounded-xs border border-[#c2a275]/30 cursor-pointer transition-colors",title:"Punto siguiente",children:p.jsx(Io,{className:"w-4 h-4"})})]})]}),g&&p.jsx("div",{className:"bg-black/85 backdrop-blur-md p-2 rounded-xs border border-[#c2a275]/30 flex items-center gap-2 overflow-x-auto no-scrollbar shadow-2xl",children:i.map((ve,Fe)=>{const Ge=Fe===o;return p.jsx("button",{onClick:()=>c(Fe),className:`flex-shrink-0 group relative rounded-xs overflow-hidden border transition-all cursor-pointer ${Ge?"border-[#c2a275] ring-2 ring-teal-uno/60 scale-102":"border-white/10 hover:border-[#c2a275]/50 opacity-70 hover:opacity-100"}`,children:p.jsxs("div",{className:"w-20 h-13 sm:w-24 sm:h-16 relative bg-zinc-900",children:[ve.thumbnailUrl?p.jsx("img",{src:ve.thumbnailUrl,alt:ve.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"}):p.jsx("div",{className:"w-full h-full flex items-center justify-center text-[10px] text-zinc-500 font-mono",children:"360°"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"}),p.jsxs("span",{className:"absolute bottom-1 left-1.5 text-[9px] font-mono font-bold text-white leading-none drop-shadow-md",children:["#",Fe+1]})]})},ve.id)})})]})]})}function Ao({tours:i,propertyName:e,selectedTourId:t,hideTourSelector:n=!1,onSelectTourId:r}){const[s,a]=De.useState(t||i[0]?.id||"");De.useEffect(()=>{t&&a(t)},[t]);const[o,c]=De.useState(!1),l=i.find(h=>h.id===s)||i[0],u=()=>{c(h=>!h)};return p.jsxs("div",{className:"space-y-6 font-sans text-left",children:[!n&&p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:"flex items-center justify-between text-xs font-label-caps uppercase tracking-wider text-[#e4ded5]/60",children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx(Ri,{className:"w-3.5 h-3.5 text-[#c2a275]"}),"Levantamientos 360° por Fecha (",i.length," Registros)"]}),p.jsx("span",{className:"text-[11px] text-teal-uno",children:"Fidelidad 100% Levantamiento de Obra"})]}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:i.map(h=>{const d=h.id===s,g=h.scenes?.length||0;return p.jsxs("button",{onClick:()=>{a(h.id),r&&r(h.id)},className:`p-4 rounded-xs border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${d?"bg-[#1f1f28] border-[#c2a275] shadow-lg shadow-[#c2a275]/5":"bg-[#141418] border-[#c2a275]/15 hover:border-[#c2a275]/40 hover:bg-[#1a1a22]"}`,children:[d&&p.jsx("div",{className:"absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-teal-uno via-[#c2a275] to-teal-uno"}),p.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1.5",children:[p.jsx("span",{className:"font-label-caps text-[11px] uppercase tracking-wider font-bold text-[#c2a275]",children:h.date}),p.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-teal-uno border border-teal-uno/30",children:[g," Puntos 360°"]})]}),p.jsx("h4",{className:"text-xs font-medium text-white line-clamp-1 group-hover:text-[#c2a275] transition-colors",children:h.title}),p.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] text-[#e4ded5]/50 mt-2 font-label-caps uppercase",children:[p.jsx(Do,{className:"w-3 h-3 text-teal-uno"}),p.jsx("span",{className:"truncate",children:h.phaseName})]})]},h.id)})})]}),l&&p.jsxs("div",{className:"bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs",children:[p.jsxs("div",{className:"space-y-1",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"px-2.5 py-0.5 rounded-xs bg-[#c2a275]/15 text-[#c2a275] font-label-caps uppercase text-[10px] tracking-wider border border-[#c2a275]/30 font-bold",children:l.date}),p.jsx("span",{className:"text-white font-medium",children:l.title})]}),l.notes&&p.jsxs("p",{className:"text-[#e4ded5]/70 text-[11px] leading-relaxed max-w-3xl",children:[p.jsx("strong",{className:"text-[#c2a275] font-normal",children:"Dictamen de Supervisión 360°:"})," ",l.notes]})]}),p.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 self-start md:self-auto",children:p.jsxs("span",{className:"text-[10px] font-mono text-teal-uno bg-teal-uno/15 px-2.5 py-1 rounded-xs border border-teal-uno/30",children:[l.scenes?.length||0," Puntos Esféricos HD"]})})]}),l?.scenes&&l.scenes.length>0?p.jsx(Sm,{scenes:l.scenes,dateTitle:l.date,phaseName:l.phaseName,notes:l.notes,isFullscreen:o,onToggleFullscreen:u}):p.jsx("div",{className:"h-[450px] flex items-center justify-center bg-[#101014] border border-white/10 rounded-xs text-xs text-zinc-400",children:"No hay escenas 360° cargadas para este levantamiento."})]})}function wo({photoReports:i,propertyName:e,selectedPeriod:t,onSelectPeriod:n,onOpenAiAssistant:r}){const[s,a]=De.useState("Todas"),[o,c]=De.useState(t||"Todos"),[l,u]=De.useState(null),[h,d]=De.useState(1);De.useEffect(()=>{t&&c(t)},[t]);const v=(S=>S==="05 Septiembre 2026"?"https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link":S==="27 Agosto 2026"||S==="28 Agosto 2026"?"https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link":"https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing")(o),x=["Todas",...Array.from(new Set(i.map(S=>S.category)))],w=["Todos",...Array.from(new Set(i.map(S=>S.period)))],R=i.filter(S=>{const T=s==="Todas"||S.category===s,N=o==="Todos"||S.period===o;return T&&N});De.useEffect(()=>{const S=T=>{l!==null&&(T.key==="Escape"?(u(null),d(1)):T.key==="ArrowRight"?(u(N=>N!==null&&N<R.length-1?N+1:0),d(1)):T.key==="ArrowLeft"&&(u(N=>N!==null&&N>0?N-1:R.length-1),d(1)))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[l,R.length]);const b=l!==null?R[l]:null;return p.jsxs("div",{className:"space-y-6 font-sans text-left",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#c2a275]/20 pb-5",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]",children:[p.jsx(os,{className:"w-4 h-4 text-teal-uno"}),p.jsx("span",{children:"Bitácora Fotográfica Oficial"})]}),p.jsx("h3",{className:"font-serif text-2xl sm:text-3xl text-white mt-1 tracking-tight",children:"Reportes Fotográficos Periódicos"}),p.jsx("p",{className:"text-xs sm:text-sm text-[#e4ded5]/70 max-w-2xl mt-1 leading-relaxed",children:"Fotografía técnica con reframe arquitectónico a 2 puntos de fuga y corrección de perspectiva rectilinear, clasificada por fechas de supervisión."})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[r&&p.jsxs("button",{onClick:r,className:"flex items-center gap-1.5 text-xs text-black bg-gradient-to-r from-[#c2a275] to-[#e4ded5] hover:brightness-110 font-bold px-3.5 py-2 rounded-xs border border-[#c2a275]/50 transition-all shadow-md cursor-pointer active:scale-95",title:"Preguntar a la IA Gemini sobre los avances y detalles de obra",children:[p.jsx(Cn,{className:"w-3.5 h-3.5 text-black"}),p.jsx("span",{className:"font-label-caps uppercase text-[11px] tracking-wider",children:"Consultar IA de Obra"})]}),p.jsxs("a",{href:v,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-xs text-[#c2a275] bg-[#141418] hover:bg-[#1f1f28] hover:text-white px-3.5 py-2 rounded-xs border border-[#c2a275]/30 transition-colors shadow-xs cursor-pointer",title:"Abrir carpeta compartida en Google Drive",children:[p.jsx(Js,{className:"w-3.5 h-3.5 text-teal-uno"}),p.jsx("span",{className:"font-label-caps uppercase text-[11px] tracking-wider",children:o==="Todos"?"Descargar en Drive":`Drive (${o.slice(0,6)})`}),p.jsx(Qs,{className:"w-3 h-3 opacity-60"})]}),p.jsxs("div",{className:"flex items-center gap-2 text-xs text-white bg-teal-uno/20 px-3.5 py-2 rounded-xs border border-teal-uno/40",children:[p.jsx(Cn,{className:"w-3.5 h-3.5 text-teal-uno"}),p.jsxs("span",{className:"font-label-caps uppercase text-[11px] tracking-wider",children:[R.length," Fotos Verificadas"]})]})]})]}),p.jsxs("div",{className:"bg-[#141418] border border-[#c2a275]/20 p-4 rounded-xs space-y-3.5",children:[p.jsxs("div",{className:"space-y-1.5",children:[p.jsxs("div",{className:"flex items-center justify-between text-[10px] font-label-caps uppercase tracking-wider text-[#c2a275]",children:[p.jsxs("span",{className:"flex items-center gap-1",children:[p.jsx(Ri,{className:"w-3 h-3 text-teal-uno"}),"Filtrar por Fecha de Avance:"]}),o!=="Todos"&&p.jsx("button",{onClick:()=>{c("Todos"),n&&n("Todos")},className:"text-teal-uno hover:underline cursor-pointer",children:"Ver todas las fechas"})]}),p.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w.map(S=>{const T=S==="Todos"?i.length:i.filter(A=>A.period===S).length,N=o===S,_=S==="05 Septiembre 2026";return p.jsxs("button",{onClick:()=>{c(S),n&&n(S)},className:`px-3.5 py-2 rounded-xs text-xs font-label-caps uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${N?"bg-teal-uno text-white font-bold shadow-md shadow-teal-uno/15 border border-teal-uno":"bg-[#1b1b22] text-[#e4ded5]/80 hover:bg-[#242430] hover:text-white border border-white/5"}`,children:[p.jsx("span",{children:S}),p.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${N?"bg-black/30 text-white":"bg-black/40 text-teal-uno"}`,children:T}),_&&!N&&p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-teal-uno animate-pulse",title:"Último avance"})]},S)})})]}),p.jsxs("div",{className:"pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs",children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-[#c2a275] tracking-wider mr-1 hidden sm:inline",children:"Especialidad:"}),x.map(S=>p.jsx("button",{onClick:()=>a(S),className:`px-2.5 py-1 rounded-xs text-[10px] font-label-caps uppercase tracking-wider transition-all cursor-pointer ${s===S?"bg-[#c2a275] text-black font-bold shadow-xs":"bg-white/5 text-[#e4ded5]/70 hover:bg-white/10 hover:text-white"}`,children:S},S))]}),p.jsxs("span",{className:"text-[10px] font-mono text-zinc-400",children:["Mostrando ",R.length," de ",i.length," registros"]})]})]}),R.length===0?p.jsxs("div",{className:"p-12 text-center bg-[#141418] border border-[#c2a275]/15 rounded-xs space-y-2",children:[p.jsx(os,{className:"w-8 h-8 text-zinc-500 mx-auto"}),p.jsx("p",{className:"text-white text-sm font-medium",children:"No se encontraron fotografías con estos filtros."}),p.jsx("button",{onClick:()=>{a("Todas"),c("Todos")},className:"text-xs text-teal-uno hover:underline font-label-caps uppercase tracking-wider cursor-pointer",children:"Restablecer filtros"})]}):p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:R.map((S,T)=>p.jsxs(Gn.div,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.3,delay:T*.05},onClick:()=>{u(T),d(1)},className:"group bg-[#141418] border border-[#c2a275]/20 rounded-xs overflow-hidden hover:border-[#c2a275]/60 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col",children:[p.jsxs("div",{className:"relative aspect-[4/3] w-full overflow-hidden bg-black/60",children:[p.jsx("img",{src:S.imageUrl,alt:S.title,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100",loading:"lazy"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity"}),p.jsxs("div",{className:"absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10",children:[p.jsx("span",{className:"px-2.5 py-1 rounded-xs bg-black/80 backdrop-blur-md text-[#c2a275] border border-[#c2a275]/30 text-[10px] font-label-caps uppercase tracking-wider font-semibold",children:S.category}),S.isReframed360&&p.jsxs("span",{className:"px-2 py-0.5 rounded-xs bg-teal-uno/90 backdrop-blur-md text-white text-[9px] font-label-caps uppercase tracking-wider flex items-center gap-1 shadow-sm",children:[p.jsx(Cn,{className:"w-2.5 h-2.5"})," Reframe 360°"]})]}),p.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]",children:p.jsxs("div",{className:"px-3.5 py-2 bg-white/90 text-black text-xs font-label-caps uppercase tracking-wider font-bold rounded-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform",children:[p.jsx(Po,{className:"w-3.5 h-3.5"})," Ampliar Fotografía"]})}),p.jsxs("div",{className:"absolute bottom-3 left-3 z-10 text-[10px] text-white/90 font-label-caps uppercase tracking-wider flex items-center gap-1 drop-shadow-md",children:[p.jsx(Ri,{className:"w-3 h-3 text-[#c2a275]"}),p.jsx("span",{children:S.date})]})]}),p.jsxs("div",{className:"p-4 flex-1 flex flex-col justify-between space-y-2.5",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-1 text-[10px] text-teal-uno font-label-caps uppercase tracking-wider mb-1",children:[p.jsx(ls,{className:"w-3 h-3"}),p.jsx("span",{className:"truncate",children:S.location})]}),p.jsx("h4",{className:"font-serif text-sm text-white font-medium line-clamp-1 group-hover:text-[#c2a275] transition-colors",children:S.title})]}),p.jsxs("p",{className:"text-[11px] text-[#e4ded5]/70 line-clamp-2 leading-relaxed italic border-t border-white/5 pt-2",children:['"',S.technicalNote,'"']})]})]},S.id))}),p.jsx(ss,{children:b&&l!==null&&p.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6 select-none font-sans",children:[p.jsxs("div",{className:"absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white border-b border-white/10 pb-3",children:[p.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[p.jsx("span",{className:"px-2.5 py-1 bg-[#c2a275]/20 text-[#c2a275] border border-[#c2a275]/40 rounded-xs font-label-caps uppercase text-[10px] tracking-wider",children:b.category}),p.jsx("span",{className:"text-[#e4ded5]/80 font-serif sm:text-sm truncate max-w-xs sm:max-w-md",children:b.title})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{onClick:()=>d(S=>Math.min(2.5,S+.3)),className:"p-2 bg-white/10 hover:bg-white/20 rounded-xs text-white cursor-pointer transition-colors",title:"Acercar zoom",children:p.jsx(Co,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>d(S=>Math.max(1,S-.3)),className:"p-2 bg-white/10 hover:bg-white/20 rounded-xs text-white cursor-pointer transition-colors",title:"Alejar zoom",children:p.jsx(No,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>d(1),className:"p-2 bg-white/10 hover:bg-white/20 rounded-xs text-white cursor-pointer transition-colors",title:"Restablecer zoom",children:p.jsx(Nl,{className:"w-4 h-4"})}),p.jsx("button",{onClick:()=>{u(null),d(1)},className:"p-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 border border-red-500/30 rounded-xs cursor-pointer transition-colors ml-2",title:"Cerrar lightbox (Esc)",children:p.jsx(ea,{className:"w-4 h-4"})})]})]}),p.jsx("button",{onClick:()=>{u(S=>S!==null&&S>0?S-1:R.length-1),d(1)},className:"absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black text-[#c2a275] hover:text-white border border-white/15 rounded-full cursor-pointer transition-all shadow-2xl",title:"Foto anterior (Flecha izquierda)",children:p.jsx(Lo,{className:"w-6 h-6"})}),p.jsx("button",{onClick:()=>{u(S=>S!==null&&S<R.length-1?S+1:0),d(1)},className:"absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 hover:bg-black text-[#c2a275] hover:text-white border border-white/15 rounded-full cursor-pointer transition-all shadow-2xl",title:"Siguiente foto (Flecha derecha)",children:p.jsx(Io,{className:"w-6 h-6"})}),p.jsx("div",{className:"relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center overflow-hidden",children:p.jsx(Gn.img,{src:b.imageUrl,alt:b.title,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:h},transition:{duration:.2},className:"max-h-[72vh] max-w-full object-contain rounded-xs shadow-2xl transition-transform duration-200"},b.id)}),p.jsxs("div",{className:"absolute bottom-4 left-4 right-4 z-20 bg-black/85 backdrop-blur-md p-4 sm:p-5 rounded-xs border border-[#c2a275]/30 max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-left",children:[p.jsxs("div",{className:"space-y-1",children:[p.jsxs("div",{className:"flex items-center gap-2 text-[#c2a275] font-label-caps uppercase text-[10px] tracking-wider",children:[p.jsx(ls,{className:"w-3.5 h-3.5 text-teal-uno"}),p.jsx("span",{children:b.location}),p.jsx("span",{children:"•"}),p.jsx(Ri,{className:"w-3.5 h-3.5 text-[#c2a275]"}),p.jsx("span",{children:b.date})]}),p.jsxs("p",{className:"text-[#e4ded5] text-xs leading-relaxed italic",children:['"',b.technicalNote,'"']})]}),p.jsxs("div",{className:"text-right flex-shrink-0",children:[p.jsxs("span",{className:"text-[10px] text-zinc-400 font-mono block",children:[l+1," de ",R.length]}),b.isReframed360&&p.jsx("span",{className:"text-[10px] text-teal-uno font-label-caps uppercase tracking-wider",children:"Reframe 360° Verificado"})]})]})]})})]})}function Em({project:i,onClose:e}){const t=De.useRef(null),n=()=>{window.print()},r=new Date().toLocaleDateString("es-MX",{year:"numeric",month:"long",day:"numeric"});return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto font-sans",children:p.jsxs(Gn.div,{initial:{opacity:0,scale:.95,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:15},className:"bg-[#141418] border border-[#c2a275]/40 rounded-xs max-w-4xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-left",children:[p.jsxs("div",{className:"p-4 bg-[#0e0e10] border-b border-[#c2a275]/25 flex items-center justify-between text-white print:hidden",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-label-caps uppercase tracking-wider text-[#c2a275]",children:[p.jsx(Uo,{className:"w-4 h-4 text-teal-uno"}),p.jsx("span",{children:"Dictamen Técnico de Avance Físico & Calidad"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsxs("button",{onClick:n,className:"px-4 py-2 bg-teal-uno hover:bg-[#008f8f] text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-95",children:[p.jsx(Pl,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Imprimir / Guardar PDF"})]}),p.jsx("button",{onClick:e,className:"p-2 text-zinc-400 hover:text-white rounded-xs cursor-pointer transition-colors",title:"Cerrar ventana",children:p.jsx(ea,{className:"w-5 h-5"})})]})]}),p.jsxs("div",{ref:t,className:"p-6 sm:p-10 overflow-y-auto bg-white text-zinc-900 space-y-6 print:p-0 print:m-0 print:text-black font-sans",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-zinc-900 pb-6",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-2xl font-serif font-bold tracking-tight text-zinc-900",children:"UNO ARQUITECTOS"}),p.jsx("div",{className:"text-[10px] font-label-caps uppercase tracking-widest text-zinc-600 mt-0.5",children:"Estudio Boutique de Arquitectura & Construcción • Riviera Maya"}),p.jsx("div",{className:"text-[10px] text-zinc-500 mt-1",children:"Plaza Palmeras, Playa del Carmen & Taller Tulum, Quintana Roo"})]}),p.jsxs("div",{className:"text-left sm:text-right space-y-0.5",children:[p.jsxs("span",{className:"inline-block px-2.5 py-0.5 bg-zinc-900 text-white text-[10px] font-mono uppercase tracking-wider font-bold",children:["DICTAMEN OFICIAL #UNO-",i.id.toUpperCase().slice(0,4),"-2026"]}),p.jsxs("div",{className:"text-[11px] text-zinc-600 font-medium",children:["Fecha de Emisión: ",r]}),p.jsx("div",{className:"text-[10px] text-zinc-500 font-mono",children:"Folio de Supervisión: DIR-TEC-2026-V8"})]})]}),p.jsxs("div",{className:"bg-zinc-50 border border-zinc-200 p-5 rounded-xs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-zinc-500 block",children:"Obra / Proyecto"}),p.jsx("strong",{className:"text-zinc-900 font-serif text-sm block",children:i.propertyName}),p.jsx("span",{className:"text-[11px] text-zinc-600",children:i.typology})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-zinc-500 block",children:"Propietario / Cliente"}),p.jsx("strong",{className:"text-zinc-900 block text-xs",children:i.clientName}),p.jsx("span",{className:"text-[11px] text-zinc-600",children:i.location})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-zinc-500 block",children:"Superficie & Plazos"}),p.jsx("strong",{className:"text-zinc-900 block text-xs",children:i.totalArea}),p.jsxs("span",{className:"text-[10px] text-zinc-600",children:["Entrega: ",i.estimatedDelivery]})]}),p.jsxs("div",{className:"bg-zinc-900 text-white p-3 rounded-xs text-center flex flex-col justify-center",children:[p.jsx("span",{className:"text-[9px] font-label-caps uppercase tracking-widest text-teal-300",children:"Avance Físico Global"}),p.jsxs("span",{className:"font-serif text-2xl font-bold text-white",children:[i.globalProgress,"%"]}),p.jsx("span",{className:"text-[9px] text-zinc-300 truncate",children:i.currentPhaseName})]})]}),p.jsxs("div",{className:"space-y-3",children:[p.jsx("h4",{className:"font-serif text-base font-bold text-zinc-900 border-b border-zinc-200 pb-1",children:"Desglose de Fases Constructivas & Dictámenes de Supervisión"}),p.jsxs("table",{className:"w-full text-xs text-left border-collapse",children:[p.jsx("thead",{children:p.jsxs("tr",{className:"bg-zinc-100 text-zinc-700 font-label-caps uppercase text-[10px] tracking-wider border-b border-zinc-300",children:[p.jsx("th",{className:"py-2 px-3",children:"#"}),p.jsx("th",{className:"py-2 px-3",children:"Fase Constructiva"}),p.jsx("th",{className:"py-2 px-3",children:"Plazo"}),p.jsx("th",{className:"py-2 px-3 text-center",children:"Avance"}),p.jsx("th",{className:"py-2 px-3",children:"Estado"}),p.jsx("th",{className:"py-2 px-3",children:"Dictamen de Calidad"})]})}),p.jsx("tbody",{className:"divide-y divide-zinc-200",children:i.phases.map(s=>p.jsxs("tr",{className:"hover:bg-zinc-50/50",children:[p.jsx("td",{className:"py-2.5 px-3 font-mono font-bold text-zinc-500",children:s.order}),p.jsx("td",{className:"py-2.5 px-3 font-medium text-zinc-900",children:s.title}),p.jsx("td",{className:"py-2.5 px-3 text-zinc-600 text-[11px] whitespace-nowrap",children:s.targetDates}),p.jsxs("td",{className:"py-2.5 px-3 text-center font-mono font-bold text-zinc-900",children:[s.progress,"%"]}),p.jsx("td",{className:"py-2.5 px-3",children:p.jsx("span",{className:`inline-block px-2 py-0.5 rounded text-[9px] font-label-caps uppercase font-bold ${s.status==="completed"?"bg-emerald-100 text-emerald-800":s.status==="in_progress"?"bg-amber-100 text-amber-800":"bg-zinc-100 text-zinc-600"}`,children:s.status==="completed"?"Completado":s.status==="in_progress"?"En Proceso":"Programado"})}),p.jsxs("td",{className:"py-2.5 px-3 text-[11px] text-zinc-600 max-w-xs leading-relaxed italic",children:['"',s.supervisionNotes,'"']})]},s.id))})]})]}),p.jsxs("div",{className:"pt-8 border-t border-zinc-300 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:"flex items-center gap-2 text-zinc-900 font-label-caps uppercase text-[11px] font-bold",children:[p.jsx(Dl,{className:"w-4 h-4 text-emerald-700"}),p.jsx("span",{children:"Garantía de Calidad & Estructura Kárstica"})]}),p.jsx("p",{className:"text-[11px] text-zinc-600 leading-relaxed",children:"Este dictamen certifica que la ejecución de obra cumple con las normativas vigentes en Quintana Roo, pruebas hidrostáticas presurizadas, prospección geofísica GPR y dosificación de resinas naturales de Chukum y maderas de Tzalam con tratamiento hidrófugo de poro abierto."})]}),p.jsxs("div",{className:"border border-zinc-200 p-4 rounded-xs text-center space-y-3 bg-zinc-50",children:[p.jsx("div",{className:"h-12 flex items-end justify-center",children:p.jsx("span",{className:"font-serif italic text-lg text-zinc-800 border-b border-zinc-800 px-6 pb-1",children:"Arq. Angel Cereceda"})}),p.jsxs("div",{children:[p.jsx("strong",{className:"text-zinc-900 block text-xs",children:"Arq. Angel Cereceda"}),p.jsx("span",{className:"text-[10px] text-zinc-600 block",children:"Director General & Responsable de Supervisión"}),p.jsx("span",{className:"text-[9px] text-zinc-500 font-mono",children:"Céd. Prof. 4892019 • Máster Project Management UEM"})]})]})]}),p.jsxs("div",{className:"pt-4 border-t border-zinc-200 text-center text-[9px] text-zinc-400 font-label-caps uppercase tracking-wider",children:["UNO Arquitectos Mx • Todos los derechos reservados • Documento confidencial emitido para el propietario de ",i.propertyName,"."]})]})]})})}const ym=["¿Cuáles son las medidas exactas y alturas de Arrecifes?","¿Qué avances se completaron el 05 de Septiembre?","¿Qué especificaciones tienen las instalaciones del 27 de Agosto?","¿Cómo se aplicó el Chukum y qué cuidados requiere?","¿Dónde descargo las fotos y veo las fotos 360°?"],Ro=(i,e)=>{const t=i.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();return t.includes("medida")||t.includes("altura")||t.includes("superficie")||t.includes("m2")||t.includes("metro")||t.includes("dimension")||t.includes("terreno")||t.includes("lote")||t.includes("area")?{text:`### 📐 Medidas y Especificaciones Constructivas de **${e.propertyName}**:

• **Superficie Construida**: **720.00 m²** de construcción cubierta y terrazas voladas con vistas panorámicas al Caribe.
• **Superficie del Terreno**: **1,150.00 m²** con respeto del 55% de huella selvática virgen (palmas chit, ceibas y helechos arbóreos).
• **Alturas Libres de Entrepiso**:
  - **Vestíbulo Principal & Estancia**: Doble altura libre de **6.40 m** con losas nervadas y ventanales embutidos.
  - **Master Suite (Planta Alta)**: Altura libre de **3.80 m** con terraza privada volada.
  - **Recámaras Secundarias & Suites de Huéspedes**: Altura libre de **3.40 m**.
• **Alberca Cenote**: Vaso de **48.00 m²** con profundidad gradual (0.40 m en asoleadero húmedo hasta 1.60 m en zona profunda) con canaleta perimetral oculta y acabado en Chukum turquesa natural.
• **Claros Estructurales**: Claros continuos de hasta **8.50 m** sin columnas intermedias para integración total con el entorno selvático.`,links:[{label:"Ver Galería de Fotos por Fecha",url:"#photos"}]}:t.includes("0509")||t.includes("05 de sep")||t.includes("05 sep")||t.includes("septiembre")||t.includes("ultimo avance")||t.includes("reciente")?{text:`### 🏛️ Dictamen Técnico: Avance al **05 de Septiembre de 2026** (68% Global)

El levantamiento técnico del **05 de Septiembre de 2026** corresponde a la **Fase 4: Revestimientos en Chukum Tradicional Maya & Mármol Travertino**:

1. **Master Suite & Doble Altura**: Culminación de la aplicación de pasta orgánica de Chukum artesanal hervida en obra con agua de pozo y sellado hidrófugo de poro abierto en muros de 6.40 m.
2. **Vestíbulo Principal**: Colocación y nivelación láser de placas de mármol Santo Tomás (**1.20 x 2.40 m**) apomazadas mate con juntas a hueso de 1.5 mm.
3. **Alberca Cenote**: Aplicación de doble membrana epóxica y perfilado de bordes orgánicos previo al vertido de Chukum turquesa.
4. **Carpintería Fina**: Habilitado en taller de marcos y bastidores de madera maciza de Tzalam curada en horno al 10% de humedad.`,links:[{label:"Carpeta en Google Drive (05/09/2026)",url:"https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link"},{label:"Ver Galería de Fotos 360°",url:"#360"}]}:t.includes("2708")||t.includes("2808")||t.includes("27 de ago")||t.includes("27 ago")||t.includes("28 ago")||t.includes("instalacion")||t.includes("vrf")||t.includes("domotica")||t.includes("lutron")||t.includes("ptar")?{text:`### ⚡ Dictamen Técnico: Avance al **27 de Agosto de 2026** (52% Global)

El levantamiento técnico del **27 de Agosto de 2026** documenta la **Fase 3: Instalaciones Especiales (MEP, Climatización & Domótica)**:

1. **Climatización VRF Inverter Daikin**: Tendido de ductería aislada acústicamente en entreplantas técnicas (3.40 m) y pruebas de estanqueidad de gas refrigerante R-410A.
2. **Pruebas Hidrostáticas**: Canalizaciones hidrosanitarias presurizadas a **7.0 kg/cm²** superadas con cero pérdidas de presión en 72 horas.
3. **Domótica Lutron Homeworks QSX**: Tendido de cableado estructurado para control inteligente de escenas lumínicas en 2700K y persianas motorizadas.
4. **PTAR y Drenaje Ecológico**: Instalación de biodigestores anaeróbicos y sistema de fitorremediación con humedales para recirculación de agua en riego.
5. **Fachada Norte**: Anclaje de bastidores ocultos de acero inoxidable 316 para celosías de Tzalam.`,links:[{label:"Carpeta en Google Drive (27/08/2026)",url:"https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link"},{label:"Ver Galería de Fotos 360°",url:"#360"}]}:t.includes("chukum")||t.includes("tzalam")||t.includes("material")||t.includes("acabado")||t.includes("marmol")||t.includes("madera")?{text:`### 🌿 Materiales Autóctonos y Especificaciones Sensoriales de **Arrecifes**:

• **Chukum Tradicional Maya**:
  - **Origen**: Resina vegetal extraída del árbol *Havardia albicans*, hervida en obra siguiendo la receta tradicional prehispánica.
  - **Propiedades**: Acabado sedoso al tacto, impermeable natural, atérmico y con tonalidad cálida marfil-chukum que envejece con nobleza.
  - **Mantenimiento**: Limpieza con jabón neutro sin agentes químicos abrasivos y reaplicación de cera natural cada 2 años.

• **Madera Maciza de Tzalam (Nogal Maya)**:
  - Curada y secada en horno a 10% de humedad en nuestro taller propio de Tulum.
  - Gran densidad y resistencia a termitas y salinidad caribeña.

• **Mármol Santo Tomás & Travertino Veracruz**:
  - Placas de 1.20 x 2.40 m apomazadas mate, seleccionadas a veta continua para pisos de planta baja y baños principales.`,links:[{label:"Carpeta General en Google Drive",url:"https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing"}]}:t.includes("fecha")||t.includes("entrega")||t.includes("cuando termin")||t.includes("cronograma")||t.includes("fase")||t.includes("plazo")?{text:`### 📅 Cronograma Oficial de Obra — **${e.propertyName}**:

• **Inicio de Obra**: 01 Agosto 2026
• **Avance Actual al 05 Sep 2026**: **68% de Ejecución** (Fase 4: Acabados en Chukum & Mármol)
• **Fecha Estimada de Entrega Llave en Mano**: **20 Diciembre 2026**
• **Próximos Hitos Clave**:
  - **Octubre 2026 (82%)**: Montaje de puertas pivotantes en Tzalam y cancelería europea antihuracán DVH.
  - **Noviembre 2026 (94%)**: Iluminación sensorial 2700K, paisajismo selvático endémico y llenado de alberca.
  - **Diciembre 2026 (100%)**: Protocolo de entrega de llaves, manuales técnicos As-Built y garantía estructural certificada.`,links:[{label:"Consultar al Arq. Angel Cereceda",url:`https://wa.me/${e.director.whatsapp}`}]}:t.includes("drive")||t.includes("foto")||t.includes("360")||t.includes("descarg")||t.includes("link")||t.includes("carpeta")?{text:`### 📂 Repositorios Oficiales en Nube y Galerías 360°:

Puedes consultar y descargar los archivos originales en alta resolución y explorar las fotos 360° en los siguientes accesos oficiales:

• **Avance 05 Septiembre 2026 (Último Registro - 72%)**:
  - Galería de Fotos 360°: 19 Puntos Esféricos HD
  - Carpeta de Fotos Drive: [Abrir Carpeta 05/09/2026](https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link)

• **Avance 27 Agosto 2026 (Instalaciones & Domótica - 52%)**:
  - Galería de Fotos 360°: 10 Puntos Esféricos HD
  - Carpeta de Fotos Drive: [Abrir Carpeta 27/08/2026](https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link)

• **Repositorio Maestro de Obra Arrecifes**:
  - [Google Drive Master Folder](https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing)`,links:[{label:"Drive 05/09/2026",url:"https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link"},{label:"Drive 27/08/2026",url:"https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link"},{label:"Ver Galería de Fotos 360°",url:"#360"}]}:{text:`Como **Asistente Técnico de Obra de UNO Arquitectos** para **${e.propertyName}**, supervisado por el **${e.director.name}**:

En relación a tu consulta sobre **"${i}"**, la obra se encuentra al **${e.globalProgress}% de avance** en **${e.currentPhaseName}** con entrega contractual para el **${e.estimatedDelivery}**.

Contamos con toda la información técnica, memorias de cálculo en suelo kárstico, especificaciones de Chukum natural y bitácora fotográfica de las fechas del **05 de Septiembre** y **27 de Agosto de 2026**.

¿Deseas conocer las medidas exactas de alguna zona en particular o consultar directamente al Arq. Angel Cereceda vía WhatsApp?`,links:[{label:"Consultar en WhatsApp (+52 1 984 210 8420)",url:`https://wa.me/${e.director.whatsapp}`}]}};function Tm({project:i,onClose:e}){const[t,n]=De.useState([{id:"welcome-msg",role:"assistant",content:`Hola. Soy el **Asesor Técnico de Inteligencia Artificial (Gemini)** de **UNO Arquitectos**, asignado a la supervisión técnica de **${i.propertyName}** bajo la dirección del **${i.director.name}**.

Estoy entrenado con las especificaciones exactas, medidas milimétricas, dictámenes de supervisión y bitácora de obra de **Agosto a Diciembre de 2026**.

¿En qué aspecto técnico o avance de tu residencia puedo orientarte hoy?`,timestamp:"Ahora",driveLinks:[{label:"Ver Último Avance (05 Sep)",url:"https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link"},{label:"Ver Galería de Fotos 360°",url:"#360"}]}]),[r,s]=De.useState(""),[a,o]=De.useState(!1),c=De.useRef(null);De.useEffect(()=>{c.current?.scrollIntoView({behavior:"smooth"})},[t,a]);const l=async u=>{const h=(u||r).trim();if(!h||a)return;const d={id:`user-${Date.now()}`,role:"user",content:h,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};n(g=>[...g,d]),u||s(""),o(!0);try{const g=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:[...t.map(v=>({role:v.role,content:v.content})),{role:"user",content:h}],userProfile:{propertyName:i.propertyName,clientName:i.clientName,globalProgress:i.globalProgress,currentPhase:i.currentPhaseName,totalArea:i.totalArea,estimatedDelivery:i.estimatedDelivery,director:i.director.name,driveFolder05Sep:"https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link",driveFolder27Ago:"https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link",tour360:"Visor 360° Nativo"},language:"es"})});if(g.ok){const v=await g.json();if(v&&v.text){const y=Ro(h,i),x={id:`bot-${Date.now()}`,role:"assistant",content:v.text,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),driveLinks:y.links};n(f=>[...f,x]),o(!1);return}}}catch(g){console.warn("Falling back to specialized Arrecifes knowledge base:",g)}setTimeout(()=>{const g=Ro(h,i),v={id:`bot-${Date.now()}`,role:"assistant",content:g.text,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),driveLinks:g.links};n(y=>[...y,v]),o(!1)},450)};return p.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl font-sans select-none",children:p.jsxs(Gn.div,{initial:{opacity:0,scale:.95,y:15},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:15},transition:{duration:.25},className:"bg-[#141418] border border-[#c2a275]/40 rounded-xs max-w-3xl w-full h-[85vh] max-h-[750px] shadow-2xl flex flex-col overflow-hidden text-left",children:[p.jsxs("div",{className:"bg-[#181822] border-b border-[#c2a275]/25 px-5 py-4 flex items-center justify-between flex-shrink-0",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-9 h-9 rounded-xs bg-teal-uno/20 border border-teal-uno/50 flex items-center justify-center text-teal-uno",children:p.jsx(Cn,{className:"w-5 h-5 animate-pulse"})}),p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("h3",{className:"font-serif text-base text-white font-semibold",children:"Asesor de Obra IA • Gemini"}),p.jsx("span",{className:"px-2 py-0.2 rounded-full bg-teal-uno/20 text-teal-uno border border-teal-uno/40 text-[9px] font-mono font-bold",children:"ARRECIFES 68%"})]}),p.jsx("p",{className:"text-[11px] text-[#c2a275] font-label-caps uppercase tracking-wider",children:"Entrenado con Especificaciones & Bitácora Oficial de Obra"})]})]}),p.jsx("div",{className:"flex items-center gap-2",children:p.jsx("button",{onClick:e,className:"p-2 text-zinc-400 hover:text-white rounded-xs hover:bg-white/5 transition-colors cursor-pointer",title:"Cerrar ventana",children:p.jsx(ea,{className:"w-5 h-5"})})})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 no-scrollbar bg-[#0e0e10]/80",children:[t.map(u=>p.jsxs("div",{className:`flex gap-3 text-xs leading-relaxed ${u.role==="user"?"justify-end":"justify-start"}`,children:[u.role==="assistant"&&p.jsx("div",{className:"w-7 h-7 rounded-xs bg-teal-uno/20 border border-teal-uno/40 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1",children:p.jsx(Ta,{className:"w-4 h-4"})}),p.jsxs("div",{className:`max-w-[85%] sm:max-w-[78%] p-4 rounded-xs ${u.role==="user"?"bg-teal-uno text-white font-medium shadow-md":"bg-[#181822] border border-[#c2a275]/25 text-[#e4ded5] shadow-lg"}`,children:[p.jsx("div",{className:"whitespace-pre-line space-y-2 text-xs sm:text-[13px] leading-relaxed",children:u.content}),u.driveLinks&&u.driveLinks.length>0&&p.jsx("div",{className:"mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2",children:u.driveLinks.map((h,d)=>p.jsxs("a",{href:h.url,target:"_blank",rel:"noopener noreferrer",className:"px-2.5 py-1 bg-black/50 hover:bg-teal-uno/20 text-[#c2a275] hover:text-teal-uno border border-[#c2a275]/30 hover:border-teal-uno/40 rounded-xs text-[10px] font-label-caps uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer",children:[p.jsx(Js,{className:"w-3 h-3"}),p.jsx("span",{children:h.label}),p.jsx(Qs,{className:"w-2.5 h-2.5 opacity-60"})]},d))}),p.jsx("div",{className:`text-[9px] mt-2 font-mono text-right ${u.role==="user"?"text-white/70":"text-zinc-500"}`,children:u.timestamp})]}),u.role==="user"&&p.jsx("div",{className:"w-7 h-7 rounded-xs bg-[#c2a275]/20 border border-[#c2a275]/40 flex items-center justify-center text-[#c2a275] flex-shrink-0 mt-1",children:p.jsx(Ll,{className:"w-4 h-4"})})]},u.id)),a&&p.jsxs("div",{className:"flex gap-3 text-xs justify-start",children:[p.jsx("div",{className:"w-7 h-7 rounded-xs bg-teal-uno/20 border border-teal-uno/40 flex items-center justify-center text-teal-uno flex-shrink-0 mt-1",children:p.jsx(Ta,{className:"w-4 h-4"})}),p.jsxs("div",{className:"bg-[#181822] border border-[#c2a275]/25 p-4 rounded-xs text-[#c2a275] flex items-center gap-2",children:[p.jsx(Cn,{className:"w-3.5 h-3.5 animate-spin-slow text-teal-uno"}),p.jsx("span",{className:"text-xs italic font-sans text-[#e4ded5]/80",children:"Gemini analizando planos y bitácora técnica de Arrecifes..."})]})]}),p.jsx("div",{ref:c})]}),p.jsxs("div",{className:"bg-[#141418] border-t border-[#c2a275]/15 px-4 py-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar",children:[p.jsxs("span",{className:"text-[10px] font-label-caps uppercase text-[#c2a275] flex-shrink-0 mr-1 flex items-center gap-1",children:[p.jsx(Il,{className:"w-3 h-3 text-teal-uno"})," Sugerencias:"]}),ym.map((u,h)=>p.jsx("button",{onClick:()=>l(u),disabled:a,className:"px-3 py-1 bg-[#1a1a24] hover:bg-teal-uno/20 text-[#e4ded5]/80 hover:text-white border border-[#c2a275]/20 hover:border-teal-uno/40 rounded-xs text-[11px] font-sans whitespace-nowrap transition-colors cursor-pointer flex-shrink-0 disabled:opacity-50",children:u},h))]}),p.jsxs("div",{className:"bg-[#181822] border-t border-[#c2a275]/25 p-4 flex-shrink-0",children:[p.jsxs("form",{onSubmit:u=>{u.preventDefault(),l()},className:"flex items-center gap-2",children:[p.jsx("input",{type:"text",value:r,onChange:u=>s(u.target.value),placeholder:"Pregunta sobre medidas, Chukum, instalaciones, 360°, fechas o supervisión...",disabled:a,className:"flex-1 bg-black/60 border border-[#c2a275]/30 focus:border-teal-uno px-4 py-3 rounded-xs text-xs sm:text-sm text-[#e4ded5] placeholder-zinc-500 focus:outline-none transition-colors"}),p.jsxs("button",{type:"submit",disabled:a||!r.trim(),className:"px-5 py-3 bg-teal-uno hover:bg-[#008f8f] disabled:bg-zinc-700 text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md active:scale-95 disabled:cursor-not-allowed flex-shrink-0",children:[p.jsx(Ul,{className:"w-3.5 h-3.5"}),p.jsx("span",{className:"hidden sm:inline",children:"Consultar"})]})]}),p.jsxs("div",{className:"flex items-center justify-between text-[10px] text-zinc-500 mt-2 font-label-caps uppercase tracking-wider",children:[p.jsx("span",{children:"UNO Arquitectos • IA Gemini 3.6"}),p.jsxs("a",{href:`https://wa.me/${i.director.whatsapp}?text=${encodeURIComponent("Hola Arq. Angel Cereceda, tengo una duda técnica sobre Arrecifes.")}`,target:"_blank",rel:"noopener noreferrer",className:"text-[#c2a275] hover:text-white flex items-center gap-1 transition-colors",children:[p.jsx(Fo,{className:"w-2.5 h-2.5 text-emerald-400"}),p.jsx("span",{children:"Contactar a Dirección de Obra"})]})]})]})]})})}function Nm({currentProject:i,allProjects:e,onSelectProject:t,onLogout:n,onClose:r}){const[s,a]=De.useState("all"),[o,c]=De.useState(!1),[l,u]=De.useState(!1),[h,d]=De.useState(!1),[g,v]=De.useState(i.cloudpanoTours),[y,x]=De.useState(i.cloudpanoTours[0]?.id||"tour-arrecifes-05sep2026");De.useEffect(()=>{v(i.cloudpanoTours),i.cloudpanoTours[0]?.id&&x(i.cloudpanoTours[0].id)},[i]);const f=g.find(C=>C.id===y)||g[0],w=f?.date||"05 Septiembre 2026",R=f?.progress||i.globalProgress,b=f?.phaseName||i.currentPhaseName,S=C=>{x(C)},T=C=>{if(C==="Todos")return;const F=g.find(X=>X.date===C||C.includes(X.date)||X.date.includes(C));F&&x(F.id)},N=(C,F)=>{v(X=>X.map(j=>j.id===C?{...j,...F}:j))},_=C=>C.includes("05")||C.includes("Septiembre")?"https://drive.google.com/drive/folders/1CgBZbtS-CHUvISmdfnmg3TPKJIwNXV4n?usp=drive_link":C.includes("27")||C.includes("28")||C.includes("Agosto")?"https://drive.google.com/drive/folders/1l0jp1jiRCOXMMI6sjqweEwhXh0BPkxPU?usp=drive_link":"https://drive.google.com/drive/folders/1XpiqLhnrD-Slw6bzDvSbcGDjQB5jAEaA?usp=sharing",A=f?.folderUrl||_(w),D=encodeURIComponent(`Hola Arq. Angel Cereceda, consulto sobre el avance de obra de ${i.propertyName} (${i.location}) - Levantamiento del ${w} (${R}% Avance). Quisiera coordinar una sesión de revisión técnica.`);return p.jsxs("div",{className:"fixed inset-0 z-50 bg-[#0e0e10] text-[#e4ded5] overflow-y-auto font-sans flex flex-col selection:bg-teal-uno selection:text-white",children:[p.jsxs("header",{className:"sticky top-0 z-40 bg-[#141418]/95 backdrop-blur-md border-b border-[#c2a275]/25 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl",children:[p.jsxs("div",{className:"flex items-center gap-4 sm:gap-6",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Vl,{showText:!0,iconSize:28,textSize:"text-sm sm:text-base"}),p.jsx("span",{className:"hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-teal-uno/15 text-teal-uno text-[10px] font-label-caps uppercase tracking-wider border border-teal-uno/30 font-semibold",children:"Área Clientes"})]}),p.jsxs("div",{className:"relative",children:[p.jsxs("button",{onClick:()=>d(!h),className:"px-3.5 py-1.5 bg-[#1f1f28] hover:bg-[#282834] text-white border border-[#c2a275]/30 rounded-xs text-xs font-serif flex items-center gap-2 cursor-pointer transition-colors shadow-xs",children:[p.jsx(Fl,{className:"w-3.5 h-3.5 text-[#c2a275]"}),p.jsx("span",{className:"font-semibold",children:i.propertyName}),p.jsx(Ol,{className:"w-3 h-3 text-zinc-400"})]}),h&&p.jsxs("div",{className:"absolute top-full left-0 mt-2 w-64 bg-[#141418] border border-[#c2a275]/40 rounded-xs shadow-2xl z-50 p-1 space-y-1",children:[p.jsx("div",{className:"p-2 text-[10px] font-label-caps uppercase text-zinc-400 tracking-wider border-b border-white/5",children:"Cambiar de Propiedad"}),e.map(C=>p.jsxs("button",{onClick:()=>{t(C),v(C.cloudpanoTours),d(!1)},className:`w-full p-2.5 text-left rounded-xs text-xs font-serif transition-colors flex items-center justify-between cursor-pointer ${C.id===i.id?"bg-teal-uno/20 text-teal-uno font-bold":"text-[#e4ded5] hover:bg-white/5"}`,children:[p.jsx("span",{children:C.propertyName}),p.jsxs("span",{className:"text-[10px] font-mono text-zinc-400",children:["(",C.globalProgress,"%)"]})]},C.id))]})]})]}),p.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[p.jsxs("button",{onClick:()=>u(!0),className:"px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-uno via-[#009e9e] to-teal-uno hover:brightness-110 text-white rounded-xs text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-teal-uno/20 cursor-pointer active:scale-95 border border-teal-uno/50 animate-pulse-subtle",title:"Abrir Asesor Técnico con Inteligencia Artificial Gemini 3.6",children:[p.jsx(Cn,{className:"w-3.5 h-3.5 text-[#c2a275]"}),p.jsx("span",{className:"hidden sm:inline",children:"IA Gemini • Asesor de Obra"}),p.jsx("span",{className:"sm:hidden",children:"IA Gemini"})]}),p.jsxs("button",{onClick:()=>c(!0),className:"px-3 sm:px-4 py-2 bg-[#1f1f28] hover:bg-[#282834] text-[#e4ded5] border border-[#c2a275]/30 rounded-xs text-[11px] sm:text-xs font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 shadow-md cursor-pointer active:scale-95",title:"Generar e imprimir informe de supervisión en PDF",children:[p.jsx(Uo,{className:"w-3.5 h-3.5 text-teal-uno"}),p.jsx("span",{className:"hidden sm:inline",children:"Dictamen PDF"}),p.jsx("span",{className:"sm:hidden",children:"PDF"})]}),p.jsxs("button",{onClick:n,className:"px-3 py-2 bg-white/5 hover:bg-red-500/20 text-zinc-400 hover:text-red-300 border border-white/10 hover:border-red-500/30 rounded-xs text-xs font-label-caps uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer",title:"Cerrar sesión",children:[p.jsx(Bl,{className:"w-3.5 h-3.5"}),p.jsx("span",{className:"hidden md:inline",children:"Cerrar Sesión"})]}),p.jsx("button",{onClick:r,className:"text-zinc-400 hover:text-white p-2 rounded-xs transition-colors cursor-pointer",title:"Salir al sitio web principal",children:"✕"})]})]}),p.jsx("section",{className:"bg-gradient-to-b from-[#141418] via-[#101014] to-[#0e0e10] border-b border-[#c2a275]/20 px-4 sm:px-8 py-8 sm:py-10",children:p.jsx("div",{className:"max-w-7xl mx-auto space-y-6",children:p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center",children:[p.jsxs("div",{className:"lg:col-span-7 space-y-3 text-left",children:[p.jsx("div",{className:"flex flex-wrap items-center gap-2.5",children:p.jsxs("span",{className:"text-[11px] text-zinc-400 flex items-center gap-1",children:[p.jsx(ls,{className:"w-3 h-3 text-teal-uno"}),i.location]})}),p.jsx("h1",{className:"font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight",children:i.propertyName}),p.jsxs("p",{className:"text-xs sm:text-sm text-[#e4ded5]/70 max-w-xl leading-relaxed",children:["Supervisión técnica de obra para ",p.jsx("strong",{className:"text-white font-medium",children:i.clientName}),". Registro oficial de avances, dictámenes de calidad y bitácora de obra con galería de fotos 360° y reportes fotográficos de Agosto a Diciembre 2026."]}),p.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2",children:[p.jsxs("div",{className:"p-3 bg-[#181820] border border-[#c2a275]/20 rounded-xs",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-[#c2a275] block",children:"Superficie Total"}),p.jsx("span",{className:"text-xs sm:text-sm font-semibold text-white",children:i.totalArea})]}),p.jsxs("div",{className:"p-3 bg-[#181820] border border-[#c2a275]/20 rounded-xs",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-[#c2a275] block",children:"Inicio Contractual"}),p.jsx("span",{className:"text-xs sm:text-sm font-semibold text-white",children:i.startDate})]}),p.jsxs("div",{className:"p-3 bg-[#181820] border border-[#c2a275]/20 rounded-xs col-span-2 sm:col-span-1",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase text-[#c2a275] block",children:"Entrega Estimada"}),p.jsx("span",{className:"text-xs sm:text-sm font-semibold text-emerald-400",children:i.estimatedDelivery})]})]})]}),p.jsxs("div",{className:"lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4",children:[p.jsxs("div",{className:"bg-[#181822] border border-[#c2a275]/30 p-5 rounded-xs flex items-center justify-between gap-4 shadow-xl transition-all duration-300",children:[p.jsxs("div",{className:"space-y-1 text-left",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase tracking-widest text-[#c2a275]",children:"Avance Seleccionado"}),p.jsx("span",{className:"px-2 py-0.5 rounded-full bg-teal-uno text-[9px] text-white font-mono font-bold",children:w.toUpperCase()})]}),p.jsxs("div",{className:"font-serif text-3xl sm:text-4xl font-bold text-white flex items-baseline gap-1",children:[p.jsx(Gn.span,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},transition:{duration:.3},children:R},R),p.jsx("span",{className:"text-lg text-teal-uno font-sans font-normal",children:"%"})]}),p.jsx("span",{className:"text-[11px] text-[#e4ded5]/70 block line-clamp-1",children:b}),p.jsxs("span",{className:"text-[10px] font-mono text-zinc-400 block",children:["Levantamiento Oficial: ",w]})]}),p.jsxs("div",{className:"relative w-20 h-20 flex-shrink-0 flex items-center justify-center",children:[p.jsxs("svg",{className:"w-full h-full transform -rotate-90",viewBox:"0 0 36 36",children:[p.jsx("path",{className:"text-black/60",strokeWidth:"3.5",stroke:"currentColor",fill:"none",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"}),p.jsx("path",{className:"text-teal-uno transition-all duration-700 ease-out",strokeDasharray:`${R}, 100`,strokeWidth:"3.5",strokeLinecap:"round",stroke:"currentColor",fill:"none",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"})]}),p.jsx(zl,{className:"w-6 h-6 text-[#c2a275] absolute"})]})]}),p.jsxs("div",{className:"bg-[#181822] border border-[#c2a275]/30 p-5 rounded-xs space-y-3 shadow-xl text-left",children:[p.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-white/5 pb-2",children:[p.jsx("span",{className:"text-[10px] font-label-caps uppercase tracking-wider text-[#c2a275]",children:"Director de Obra Asignado"}),p.jsxs("span",{className:"text-[10px] text-emerald-400 font-mono flex items-center gap-1",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),"En Supervisión"]})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-11 h-11 rounded-full bg-teal-uno/20 border border-teal-uno/40 flex items-center justify-center text-teal-uno font-serif font-bold text-sm flex-shrink-0 overflow-hidden",children:i.director.photo?p.jsx("img",{src:i.director.photo,alt:i.director.name,className:"w-full h-full object-cover"}):p.jsx("span",{children:"AC"})}),p.jsxs("div",{className:"space-y-0.5",children:[p.jsx("h4",{className:"font-serif text-sm font-semibold text-white",children:i.director.name}),p.jsx("p",{className:"text-[10px] text-zinc-400 font-label-caps uppercase",children:i.director.role})]})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1",children:[p.jsxs("a",{href:`https://wa.me/${i.director.whatsapp}?text=${D}`,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-sm",children:[p.jsx(kl,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"WhatsApp"})]}),p.jsxs("a",{href:`tel:${i.director.phone.replace(/[^0-9+]/g,"")}`,className:"py-2 px-3 bg-white/5 hover:bg-white/10 text-[#e4ded5] border border-white/10 rounded-xs text-[11px] font-label-caps uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors",children:[p.jsx(Fo,{className:"w-3.5 h-3.5 text-[#c2a275]"}),p.jsx("span",{children:"Llamar"})]})]})]})]})]})})}),p.jsx("section",{className:"bg-[#141418] border-b border-[#c2a275]/25 px-4 sm:px-8 py-6",children:p.jsxs("div",{className:"max-w-7xl mx-auto space-y-4",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-left",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]",children:[p.jsx(Ri,{className:"w-4 h-4 text-teal-uno"}),p.jsx("span",{children:"Seleccionar Ficha de Avance de Obra"})]}),p.jsx("p",{className:"text-xs text-[#e4ded5]/70 mt-0.5",children:"Al seleccionar una fecha se sincroniza la Galería de Fotos 360°, la Galería de Fotos Encuadradas y las métricas de obra."})]}),p.jsxs("div",{className:"flex items-center gap-1 bg-[#101014] p-1 rounded-xs border border-[#c2a275]/20 self-start sm:self-auto",children:[p.jsx("button",{onClick:()=>a("all"),className:`px-3 py-1.5 rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${s==="all"?"bg-teal-uno text-white shadow-sm":"text-zinc-400 hover:text-white"}`,children:"Ficha Completa (Fotos 360° + Fotos Encuadradas)"}),p.jsx("button",{onClick:()=>a("360"),className:`px-3 py-1.5 rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${s==="360"?"bg-teal-uno text-white shadow-sm":"text-zinc-400 hover:text-white"}`,children:"Solo Fotos 360°"}),p.jsx("button",{onClick:()=>a("photos"),className:`px-3 py-1.5 rounded-xs text-[11px] font-label-caps uppercase tracking-wider font-semibold transition-all cursor-pointer ${s==="photos"?"bg-teal-uno text-white shadow-sm":"text-zinc-400 hover:text-white"}`,children:"Solo Fotos Encuadradas"})]})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:g.map(C=>{const F=C.id===y,X=i.photoReports.filter(Y=>Y.period===C.date).length,j=C.scenes?.length||0,k=C.id===g[0].id;return p.jsxs("button",{onClick:()=>S(C.id),className:`p-4 sm:p-5 rounded-xs border text-left transition-all duration-300 cursor-pointer relative overflow-hidden group ${F?"bg-[#1f1f2a] border-[#c2a275] shadow-2xl shadow-[#c2a275]/10 ring-1 ring-[#c2a275]/60":"bg-[#141418] border-[#c2a275]/20 hover:border-[#c2a275]/50 hover:bg-[#191922]"}`,children:[F&&p.jsx("div",{className:"absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-uno via-[#c2a275] to-teal-uno"}),p.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:`font-label-caps text-xs uppercase tracking-wider font-bold ${F?"text-[#c2a275]":"text-white"}`,children:C.date}),k&&p.jsx("span",{className:"px-2 py-0.5 rounded-full bg-teal-uno/20 text-teal-uno border border-teal-uno/40 text-[9px] font-label-caps uppercase font-bold",children:"Último Avance"})]}),p.jsxs("span",{className:"text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-teal-uno border border-teal-uno/30",children:[C.progress,"% Avance"]})]}),p.jsx("h4",{className:"text-sm sm:text-base font-serif font-semibold text-white group-hover:text-[#c2a275] transition-colors line-clamp-1",children:C.title}),p.jsx("p",{className:"text-[11px] text-[#e4ded5]/70 mt-1 line-clamp-2 leading-relaxed",children:C.notes}),p.jsxs("div",{className:"flex items-center gap-4 text-[10px] text-zinc-400 mt-3 pt-2.5 border-t border-white/5 font-label-caps uppercase",children:[p.jsxs("span",{className:"flex items-center gap-1.5 text-teal-uno font-medium",children:[p.jsx(as,{className:"w-3.5 h-3.5"}),j," Fotos 360°"]}),p.jsxs("span",{className:"flex items-center gap-1.5 text-[#c2a275] font-medium",children:[p.jsx(os,{className:"w-3.5 h-3.5"}),X," Fotos Encuadradas"]}),F&&p.jsxs("span",{className:"ml-auto text-emerald-400 flex items-center gap-1 font-bold",children:[p.jsx(Gl,{className:"w-3.5 h-3.5"}),"Ficha Activa"]})]})]},C.id)})})]})}),p.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-10 space-y-10",children:[p.jsxs("div",{className:"bg-[#141418] border border-[#c2a275]/30 p-5 rounded-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-left shadow-xl",children:[p.jsxs("div",{className:"space-y-1",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:"px-2.5 py-0.5 rounded-xs bg-[#c2a275]/15 text-[#c2a275] font-label-caps uppercase text-[11px] tracking-wider border border-[#c2a275]/30 font-bold",children:w}),p.jsx("span",{className:"text-white font-serif text-base sm:text-lg font-semibold",children:f?.title})]}),p.jsxs("p",{className:"text-xs text-[#e4ded5]/80 leading-relaxed max-w-3xl",children:[p.jsx("strong",{className:"text-[#c2a275] font-normal",children:"Supervisión Técnica:"})," ",f?.notes]})]}),p.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 flex-shrink-0",children:[p.jsxs("button",{onClick:()=>u(!0),className:"flex items-center gap-1.5 text-xs text-black bg-gradient-to-r from-[#c2a275] to-[#e4ded5] hover:brightness-110 font-bold px-4 py-2.5 rounded-xs border border-[#c2a275]/50 transition-all shadow-md cursor-pointer active:scale-95",title:"Preguntar a la IA Gemini sobre este avance específico",children:[p.jsx(Cn,{className:"w-3.5 h-3.5 text-black"}),p.jsx("span",{className:"font-label-caps uppercase text-[11px] tracking-wider",children:"Consultar IA de Obra"})]}),p.jsxs("a",{href:A,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 text-xs text-[#c2a275] bg-[#1f1f28] hover:bg-[#282834] hover:text-white px-4 py-2.5 rounded-xs border border-[#c2a275]/40 transition-colors shadow-xs cursor-pointer font-semibold",title:"Descargar fotos y archivos de este avance en Google Drive",children:[p.jsx(Js,{className:"w-3.5 h-3.5 text-teal-uno"}),p.jsxs("span",{className:"font-label-caps uppercase text-[11px] tracking-wider",children:["Drive (",w.slice(0,6),")"]}),p.jsx(Qs,{className:"w-3 h-3 opacity-70"})]})]})]}),s==="all"&&p.jsxs("div",{className:"space-y-12",children:[p.jsxs("section",{className:"space-y-4 text-left",children:[p.jsxs("div",{className:"flex items-center justify-between border-b border-[#c2a275]/20 pb-3",children:[p.jsxs("div",{className:"flex items-center gap-2 text-xs font-label-caps uppercase tracking-widest text-[#c2a275]",children:[p.jsx(as,{className:"w-4 h-4 text-teal-uno"}),p.jsxs("h3",{className:"font-serif text-xl sm:text-2xl text-white normal-case",children:["Galería de Fotos 360° Inmersiva • ",w," (",f?.scenes?.length||0," Puntos)"]})]}),p.jsx("span",{className:"text-[11px] font-mono text-teal-uno hidden sm:inline",children:"Visor Esférico 360° Interactivo"})]}),p.jsx(Ao,{tours:g,propertyName:i.propertyName,selectedTourId:y,hideTourSelector:!0,onSelectTourId:S,onUpdateTour:N})]}),p.jsx("section",{className:"space-y-4 text-left",children:p.jsx(wo,{photoReports:i.photoReports,propertyName:i.propertyName,selectedPeriod:w,onSelectPeriod:T,onOpenAiAssistant:()=>u(!0)})})]}),s==="360"&&p.jsx(Gn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.25},className:"space-y-4",children:p.jsx(Ao,{tours:g,propertyName:i.propertyName,selectedTourId:y,hideTourSelector:!0,onSelectTourId:S,onUpdateTour:N})},`360-${y}`),s==="photos"&&p.jsx(Gn.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.25},children:p.jsx(wo,{photoReports:i.photoReports,propertyName:i.propertyName,selectedPeriod:w,onSelectPeriod:T,onOpenAiAssistant:()=>u(!0)})},`photos-${y}`)]}),p.jsxs("footer",{className:"bg-[#0a0a0c] border-t border-[#c2a275]/20 py-6 px-4 sm:px-8 text-center text-xs text-zinc-500 font-label-caps uppercase tracking-wider flex flex-col sm:flex-row items-center justify-between gap-3",children:[p.jsx("span",{children:"UNO Arquitectos • Portal de Clientes Privado v2.2"}),p.jsx("span",{children:"Playa del Carmen & Tulum, México"})]}),p.jsx("div",{className:"fixed bottom-6 right-6 z-40",children:p.jsxs("button",{onClick:()=>u(!0),className:"group relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#c2a275] via-[#d4b98c] to-[#c2a275] text-black font-serif font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl shadow-[#c2a275]/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/50 cursor-pointer",title:"Consultar al Asesor de Obra con Inteligencia Artificial Gemini",children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-black/90 text-[#c2a275] flex items-center justify-center flex-shrink-0",children:p.jsx(Cn,{className:"w-4 h-4"})}),p.jsxs("div",{className:"text-left pr-1",children:[p.jsx("span",{className:"block text-[9px] font-sans font-bold tracking-widest uppercase opacity-80",children:"Asesor de Obra"}),p.jsx("span",{className:"block text-xs font-serif font-bold tracking-wide",children:"IA Gemini"})]}),p.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-uno rounded-full border-2 border-black animate-ping"}),p.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 bg-teal-uno rounded-full border-2 border-black"})]})}),p.jsx(ss,{children:o&&p.jsx(Em,{project:i,onClose:()=>c(!1)})}),p.jsx(ss,{children:l&&p.jsx(Tm,{project:i,onClose:()=>u(!1)})})]})}export{Nm as default};
