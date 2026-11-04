/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Pd=0,rh=1,Ld=2;var Iu=1,el=2,kn=3,En=0,qt=1,ft=2,li=0,os=1,oh=2,ah=3,ch=4,Dd=5,Ii=100,Ud=101,Nd=102,Od=103,Fd=104,Bd=200,zd=201,kd=202,Vd=203,Na=204,Oa=205,Hd=206,Gd=207,Wd=208,Xd=209,qd=210,Yd=211,Zd=212,$d=213,Kd=214,Fa=0,Ba=1,za=2,hs=3,ka=4,Va=5,Ha=6,Ga=7,Pu=0,Jd=1,jd=2,hi=0,Qd=1,ef=2,tf=3,tl=4,nf=5,sf=6,rf=7,lh="attached",of="detached",Lu=300,us=301,ds=302,Ks=303,Wa=304,Bo=306,Di=1e3,Hn=1001,Js=1002,Bt=1003,nl=1004;var is=1005;var Xt=1006,Gs=1007;var An=1008;var Xn=1009,Du=1010,Uu=1011,js=1012,il=1013,Ui=1014,Mn=1015,pr=1016,sl=1017,rl=1018,fs=1020,Nu=35902,Ou=1021,Fu=1022,an=1023,Bu=1024,zu=1025,as=1026,ps=1027,ol=1028,al=1029,ku=1030,cl=1031;var ll=1033,no=33776,io=33777,so=33778,ro=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ka=37492,Ja=37496,ja=37808,Qa=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,cc=37818,lc=37819,hc=37820,uc=37821,oo=36492,dc=36494,fc=36495,Vu=36283,pc=36284,mc=36285,gc=36286;var ms=2300,gs=2301,ea=2302,hh=2400,uh=2401,dh=2402,af=2500;var Hu=0,zo=1,mr=2,cf=3200,lf=3201;var Gu=0,hf=1,ai="",ht="srgb",zt="srgb-linear",ko="linear",lt="srgb";var Hi=7680;var fh=519,uf=512,df=513,ff=514,Wu=515,pf=516,mf=517,gf=518,_f=519,_c=35044;var ph="300 es",Gn=2e3,ao=2001,ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=1234567,Ws=Math.PI/180,_s=180/Math.PI;function cn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function hl(i,e){return(i%e+e)%e}function xf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function yf(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function vf(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function Mf(i,e=1){return e-Math.abs(hl(i,e*2)-e)}function Sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wf(i,e){return i+Math.random()*(e-i)}function Af(i){return i*(.5-Math.random())}function Ef(i){i!==void 0&&(mh=i);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(i){return i*Ws}function Cf(i){return i*_s}function If(i){return(i&i-1)===0&&i!==0}function Pf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Df(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var St={DEG2RAD:Ws,RAD2DEG:_s,generateUUID:cn,clamp:Lt,euclideanModulo:hl,mapLinear:xf,inverseLerp:yf,lerp:Xs,damp:vf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:Tf,randFloat:wf,randFloatSpread:Af,seededRandom:Ef,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:If,ceilPowerOfTwo:Pf,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:ct,denormalize:vn},ve=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],T=s[1],y=s[4],x=s[7],I=s[2],R=s[5],A=s[8];return r[0]=o*_+a*T+c*I,r[3]=o*m+a*y+c*R,r[6]=o*p+a*x+c*A,r[1]=l*_+h*T+u*I,r[4]=l*m+h*y+u*R,r[7]=l*p+h*x+u*A,r[2]=d*_+f*T+g*I,r[5]=d*m+f*y+g*R,r[8]=d*p+f*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ta=new Ge;function Xu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){let i=Qs("canvas");return i.style.display="block",i}var gh={};function Vs(i){i in gh||(gh[i]=!0,console.warn(i))}function Nf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Of(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ff(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ze={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===lt&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===lt&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?ko:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _h=[.64,.33,.3,.6,.15,.06],xh=[.2126,.7152,.0722],yh=[.3127,.329],vh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[zt]:{primaries:_h,whitePoint:yh,transfer:ko,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:xh,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:_h,whitePoint:yh,transfer:lt,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:xh,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}});var Gi,xc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Qs("canvas")),Gi.width=e.width,Gi.height=e.height;let n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bf=0,co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zf=0,Dt=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Xt,o=An,a=an,c=Xn,l=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=cn(),this.name="",this.source=new co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Di:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Di:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Lu;Dt.DEFAULT_ANISOTROPY=1;var nt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(f+1)/2,I=(p+1)/2,R=(h+d)/4,A=(u+_)/4,D=(g+m)/4;return y>x&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=A/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=D/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Dt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lo=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*_,T=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),R=Math.atan2(I,p*T);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}let x=a*T;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ia.copy(this).projectOnVector(e),this.sub(ia)}reflect(e){return this.sub(ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ia=new P,Sh=new en,Yt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),Er.subVectors(this.max,Ds),Wi.subVectors(e.a,Ds),Xi.subVectors(e.b,Ds),qi.subVectors(e.c,Ds),ti.subVectors(Xi,Wi),ni.subVectors(qi,Xi),bi.subVectors(Wi,qi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-bi.z,bi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,bi.z,0,-bi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-bi.y,bi.x,0];return!sa(t,Wi,Xi,qi,Er)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Wi,Xi,qi,Er))?!1:(Rr.crossVectors(ti,ni),t=[Rr.x,Rr.y,Rr.z],sa(t,Wi,Xi,qi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Un=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Ar=new Yt,Wi=new P,Xi=new P,qi=new P,ti=new P,ni=new P,bi=new P,Ds=new P,Er=new P,Rr=new P,Ti=new P;function sa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);let a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var kf=new Yt,Us=new P,ra=new P,tn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Us,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(ra)),this.expandByPoint(Us.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Nn=new P,oa=new P,Cr=new P,ii=new P,aa=new P,Ir=new P,ca=new P,Ni=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(oa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Cr),a=ii.dot(this.direction),c=-ii.dot(Cr),l=ii.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oa).addScaledVector(Cr,d),f}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,r){aa.subVectors(t,e),Ir.subVectors(n,e),ca.crossVectors(aa,Ir);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);let c=a*this.direction.dot(Ir.crossVectors(ii,Ir));if(c<0)return null;let l=a*this.direction.dot(aa.cross(ii));if(l<0||c+l>o)return null;let h=-a*ii.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vf,e,Hf)}lookAt(e,t,n){let s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),si.crossVectors(n,jt),si.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),si.crossVectors(n,jt)),si.normalize(),Pr.crossVectors(jt,si),s[0]=si.x,s[4]=Pr.x,s[8]=jt.x,s[1]=si.y,s[5]=Pr.y,s[9]=jt.y,s[2]=si.z,s[6]=Pr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],y=n[7],x=n[11],I=n[15],R=s[0],A=s[4],D=s[8],S=s[12],v=s[1],L=s[5],H=s[9],k=s[13],V=s[2],K=s[6],q=s[10],j=s[14],X=s[3],ce=s[7],me=s[11],we=s[15];return r[0]=o*R+a*v+c*V+l*X,r[4]=o*A+a*L+c*K+l*ce,r[8]=o*D+a*H+c*q+l*me,r[12]=o*S+a*k+c*j+l*we,r[1]=h*R+u*v+d*V+f*X,r[5]=h*A+u*L+d*K+f*ce,r[9]=h*D+u*H+d*q+f*me,r[13]=h*S+u*k+d*j+f*we,r[2]=g*R+_*v+m*V+p*X,r[6]=g*A+_*L+m*K+p*ce,r[10]=g*D+_*H+m*q+p*me,r[14]=g*S+_*k+m*j+p*we,r[3]=T*R+y*v+x*V+I*X,r[7]=T*A+y*L+x*K+I*ce,r[11]=T*D+y*H+x*q+I*me,r[15]=T*S+y*k+x*j+I*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=t*T+n*y+s*x+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=T*A,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*A,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*A,e[4]=y*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*A,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*A,e[8]=x*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=I*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=c*l,y=c*h,x=c*u,I=n.x,R=n.y,A=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+x)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+y)*A,s[9]=(m-T)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Yi.set(s[0],s[1],s[2]).length(),o=Yi.set(s[4],s[5],s[6]).length(),a=Yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],xn.copy(this);let l=1/r,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,t.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Gn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,g,_;if(a===Gn)g=(o+r)*u,_=-2*u;else if(a===ao)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Yi=new P,xn=new Be,Vf=new P(0,0,0),Hf=new P(1,1,1),si=new P,Pr=new P,jt=new P,bh=new Be,Th=new en,ln=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gf=0,wh=new P,Zi=new en,On=new Be,Lr=new P,Ns=new P,Wf=new P,Xf=new en,Ah=new P(1,0,0),Eh=new P(0,1,0),Rh=new P(0,0,1),Ch={type:"added"},qf={type:"removed"},$i={type:"childadded",child:null},la={type:"childremoved",child:null},vt=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new ln,n=new en,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Be},normalMatrix:{value:new Ge}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Eh,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Eh,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ns,Lr,this.up):On.lookAt(Lr,Ns,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(On),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};vt.DEFAULT_UP=new P(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new P,Fn=new P,ha=new P,Bn=new P,Ki=new P,Ji=new P,Ih=new P,ua=new P,da=new P,fa=new P,pa=new nt,ma=new nt,ga=new nt,Pi=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Fn.subVectors(n,t),ha.subVectors(e,t);let o=yn.dot(yn),a=yn.dot(Fn),c=yn.dot(ha),l=Fn.dot(Fn),h=Fn.dot(ha),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Bn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Bn.x),c.addScaledVector(o,Bn.y),c.addScaledVector(a,Bn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(e,t),ma.fromBufferAttribute(e,n),ga.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Fn.subVectors(e,t),yn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),yn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),Ji.subVectors(r,n),ua.subVectors(e,n);let c=Ki.dot(ua),l=Ji.dot(ua);if(c<=0&&l<=0)return t.copy(n);da.subVectors(e,s);let h=Ki.dot(da),u=Ji.dot(da);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ki,o);fa.subVectors(e,r);let f=Ki.dot(fa),g=Ji.dot(fa);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ji,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ih.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Ih,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ki,o).addScaledVector(Ji,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=hl(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=_a(o,r,e+1/3),this.g=_a(o,r,e),this.b=_a(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){let n=qu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ze.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Lt(Ft.r*255,0,255))*65536+Math.round(Lt(Ft.g*255,0,255))*256+Math.round(Lt(Ft.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=ht){Ze.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Dr);let n=Xs(ri.h,Dr.h,t),s=Xs(ri.s,Dr.s,t),r=Xs(ri.l,Dr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Le;Le.NAMES=qu;var Yf=0,Zt=class extends ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=cn(),this.name="",this.blending=os,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gt=class extends Zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new P,Ur=new ve,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}};var xs=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ho=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zf=0,on=new Be,xa=new vt,ji=new P,Qt=new Yt,Os=new Yt,Pt=new P,xt=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xu(e)?ho:xs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Qt.min,Os.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,Os.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(Os.min),Qt.expandByPoint(Os.max))}Qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),Pt.add(ji)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new P,c[D]=new P;let l=new P,h=new P,u=new P,d=new ve,f=new ve,g=new ve,_=new P,m=new P;function p(D,S,v){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[D].add(_),a[S].add(_),a[v].add(_),c[D].add(m),c[S].add(m),c[v].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,S=T.length;D<S;++D){let v=T[D],L=v.start,H=v.count;for(let k=L,V=L+H;k<V;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new P,x=new P,I=new P,R=new P;function A(D){I.fromBufferAttribute(s,D),R.copy(I);let S=a[D];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),x.crossVectors(R,S);let L=x.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,S=T.length;D<S;++D){let v=T[D],L=v.start,H=v.count;for(let k=L,V=L+H;k<V;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new Be,wi=new Ni,Nr=new tn,Lh=new P,Or=new P,Fr=new P,Br=new P,ya=new P,zr=new P,Dh=new P,kr=new P,Ke=class extends vt{constructor(e=new xt,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ya.fromBufferAttribute(u,e),o?zr.addScaledVector(ya,h):zr.addScaledVector(ya.sub(t),h))}t.add(zr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Nr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Nr,Lh)===null||wi.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,I=y;x<I;x+=3){let R=a.getX(x),A=a.getX(x+1),D=a.getX(x+2);s=Vr(this,p,e,n,l,h,u,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Vr(this,o,e,n,l,h,u,T,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,I=y;x<I;x+=3){let R=x,A=x+1,D=x+2;s=Vr(this,p,e,n,l,h,u,R,A,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=m,y=m+1,x=m+2;s=Vr(this,o,e,n,l,h,u,T,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function $f(i,e,t,n,s,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===En,a),c===null)return null;kr.copy(a),kr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:i}}function Vr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Or),i.getVertexPosition(c,Fr),i.getVertexPosition(l,Br);let h=$f(i,e,t,n,Or,Fr,Br,Dh);if(h){let u=new P;Pi.getBarycoord(Dh,Or,Fr,Br,u),s&&(h.uv=Pi.getInterpolatedAttribute(s,a,c,l,u,new ve)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,c,l,u,new ve)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};Pi.getNormal(Or,Fr,Br,d.normal),h.face=d,h.barycoord=u}return h}var tr=class i extends xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(_,m,p,T,y,x,I,R,A,D,S){let v=x/A,L=I/D,H=x/2,k=I/2,V=R/2,K=A+1,q=D+1,j=0,X=0,ce=new P;for(let me=0;me<q;me++){let we=me*L-k;for(let ze=0;ze<K;ze++){let Je=ze*v-H;ce[_]=Je*T,ce[m]=we*y,ce[p]=V,l.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(ze/A),u.push(1-me/D),j+=1}}for(let me=0;me<D;me++)for(let we=0;we<A;we++){let ze=d+we+K*me,Je=d+we+K*(me+1),Z=d+(we+1)+K*(me+1),ie=d+(we+1)+K*me;c.push(ze,Je,ie),c.push(Je,Z,ie),X+=6}a.addGroup(f,X,S),f+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ys(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){let e={};for(let t=0;t<i.length;t++){let n=ys(i[t]);for(let s in n)e[s]=n[s]}return e}function Kf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Jf={clone:ys,merge:Ht},jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$t=class extends Zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uo=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new P,Uh=new ve,Nh=new ve,wt=class extends uo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Uh,Nh),t.subVectors(Nh,Uh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qi=-90,es=1,Mc=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wt(Qi,es,e,t);s.layers=this.layers,this.add(s);let r=new wt(Qi,es,e,t);r.layers=this.layers,this.add(r);let o=new wt(Qi,es,e,t);o.layers=this.layers,this.add(o);let a=new wt(Qi,es,e,t);a.layers=this.layers,this.add(a);let c=new wt(Qi,es,e,t);c.layers=this.layers,this.add(c);let l=new wt(Qi,es,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fo=class extends Dt{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sc=class extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new tr(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:li});r.uniforms.tEquirect.value=t;let o=new Ke(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=Xt),new Mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},va=new P,ep=new P,tp=new Ge,Vn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=va.subVectors(n,t).cross(ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||tp.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new tn,Hr=new P,nr=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+T).normalize(),n[3].setComponents(c-o,d-h,m-g,x-T).normalize(),n[4].setComponents(c-a,d-u,m-_,x-y).normalize(),t===Gn)n[5].setComponents(c+a,d+u,m+_,x+y).normalize();else if(t===ao)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function np(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var bt=class i extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let T=p*d-o;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-T,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){let y=T+l*p,x=T+l*(p+1),I=T+1+l*(p+1),R=T+1+l*p;f.push(y,x,R),f.push(x,I,R)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gp=`#ifdef USE_IRIDESCENCE
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
#endif`,_p=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
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
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,$p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,tm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Vm=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define NORMAL
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
}`,bg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tg=`#define PHONG
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
}`,wg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ag=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ig=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ug=`uniform float rotation;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:ap,alphatest_pars_fragment:cp,aomap_fragment:lp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:_p,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:bp,color_pars_vertex:Tp,color_vertex:wp,common:Ap,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Ip,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Dp,colorspace_pars_fragment:Up,envmap_fragment:Np,envmap_common_pars_fragment:Op,envmap_pars_fragment:Fp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:$p,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Vp,fog_fragment:Hp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:Zp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Jp,lights_phong_fragment:jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:em,lights_physical_pars_fragment:tm,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:hm,map_particle_fragment:um,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphinstance_vertex:mm,morphcolor_vertex:gm,morphnormal_vertex:_m,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:vm,normal_fragment_maps:Mm,normal_pars_fragment:Sm,normal_pars_vertex:bm,normal_vertex:Tm,normalmap_pars_fragment:wm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Cm,opaque_fragment:Im,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Dm,dithering_fragment:Um,dithering_pars_fragment:Nm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:km,shadowmask_pars_fragment:Vm,skinbase_vertex:Hm,skinning_pars_vertex:Gm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:Zm,tonemapping_pars_fragment:$m,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:jm,uv_pars_vertex:Qm,uv_vertex:eg,worldpos_vertex:tg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:og,cube_frag:ag,depth_vert:cg,depth_frag:lg,distanceRGBA_vert:hg,distanceRGBA_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:_g,meshlambert_vert:xg,meshlambert_frag:yg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:Sg,meshnormal_frag:bg,meshphong_vert:Tg,meshphong_frag:wg,meshphysical_vert:Ag,meshphysical_frag:Eg,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Ig,points_frag:Pg,shadow_vert:Lg,shadow_frag:Dg,sprite_vert:Ug,sprite_frag:Ng},fe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},wn={basic:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ht([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ht([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ht([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ht([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ht([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ht([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ht([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ht([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ht([fe.common,fe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ht([fe.lights,fe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};wn.physical={uniforms:Ht([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Gr={r:0,b:0,g:0},Ei=new ln,Og=new Be;function Fg(i,e,t,n,s,r,o){let a=new Le(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1,x=g(T);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,y){let x=g(y);x&&(x.isCubeTexture||x.mapping===Bo)?(h===void 0&&(h=new Ke(new tr(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:ys(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ei)),h.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ke(new bt(2,2),new $t({name:"BackgroundMaterial",uniforms:ys(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,y){T.getRGB(Gr,Yu(i)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function Bg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,L,H,k,V){let K=!1,q=u(k,H,L);r!==q&&(r=q,l(r.object)),K=f(v,k,H,V),K&&g(v,k,H,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(v,L,H,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,L,H){let k=H.wireframe===!0,V=n[v.id];V===void 0&&(V={},n[v.id]=V);let K=V[L.id];K===void 0&&(K={},V[L.id]=K);let q=K[k];return q===void 0&&(q=d(c()),K[k]=q),q}function d(v){let L=[],H=[],k=[];for(let V=0;V<t;V++)L[V]=0,H[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,L,H,k){let V=r.attributes,K=L.attributes,q=0,j=H.getAttributes();for(let X in j)if(j[X].location>=0){let me=V[X],we=K[X];if(we===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(we=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(we=v.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(v,L,H,k){let V={},K=L.attributes,q=0,j=H.getAttributes();for(let X in j)if(j[X].location>=0){let me=K[X];me===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(me=v.instanceColor));let we={};we.attribute=me,me&&me.data&&(we.data=me.data),V[X]=we,q++}r.attributes=V,r.attributesNum=q,r.index=k}function _(){let v=r.newAttributes;for(let L=0,H=v.length;L<H;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){let H=r.newAttributes,k=r.enabledAttributes,V=r.attributeDivisors;H[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),V[v]!==L&&(i.vertexAttribDivisor(v,L),V[v]=L)}function T(){let v=r.newAttributes,L=r.enabledAttributes;for(let H=0,k=L.length;H<k;H++)L[H]!==v[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function y(v,L,H,k,V,K,q){q===!0?i.vertexAttribIPointer(v,L,H,V,K):i.vertexAttribPointer(v,L,H,k,V,K)}function x(v,L,H,k){_();let V=k.attributes,K=H.getAttributes(),q=L.defaultAttributeValues;for(let j in K){let X=K[j];if(X.location>=0){let ce=V[j];if(ce===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),ce!==void 0){let me=ce.normalized,we=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;let Je=ze.buffer,Z=ze.type,ie=ze.bytesPerElement,Te=Z===i.INT||Z===i.UNSIGNED_INT||ce.gpuType===il;if(ce.isInterleavedBufferAttribute){let le=ce.data,Pe=le.stride,Ue=ce.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<X.locationSize;ke++)p(X.location+ke,le.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<X.locationSize;ke++)m(X.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let ke=0;ke<X.locationSize;ke++)y(X.location+ke,we/X.locationSize,Z,me,Pe*ie,(Ue+we/X.locationSize*ke)*ie,Te)}else{if(ce.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)p(X.location+le,ce.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let le=0;le<X.locationSize;le++)y(X.location+le,we/X.locationSize,Z,me,we*ie,we/X.locationSize*le*ie,Te)}}else if(q!==void 0){let me=q[j];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(X.location,me);break;case 3:i.vertexAttrib3fv(X.location,me);break;case 4:i.vertexAttrib4fv(X.location,me);break;default:i.vertexAttrib1fv(X.location,me)}}}}T()}function I(){D();for(let v in n){let L=n[v];for(let H in L){let k=L[H];for(let V in k)h(k[V].object),delete k[V];delete L[H]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let H in L){let k=L[H];for(let V in k)h(k[V].object),delete k[V];delete L[H]}delete n[v.id]}function A(v){for(let L in n){let H=n[L];if(H[v.id]===void 0)continue;let k=H[v.id];for(let V in k)h(k[V].object),delete k[V];delete H[v.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function zg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==an&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let D=A===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Xn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!D)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:R}}function Vg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Vn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let T=r?0:n,y=T*4,x=p.clippingState||null;c.value=x,x=h(g,d,y,f);for(let I=0;I!==y;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Hg(i){let e=new WeakMap;function t(o,a){return a===Ks?o.mapping=us:a===Wa&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ks||a===Wa)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Sc(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var vs=class extends uo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ss=4,Oh=[.125,.215,.35,.446,.526,.582],Li=20,Ma=new vs,Fh=new Le,Sa=null,ba=0,Ta=0,wa=!1,Ci=(1+Math.sqrt(5))/2,ts=1/Ci,Bh=[new P(-Ci,ts,0),new P(Ci,ts,0),new P(-ts,0,Ci),new P(ts,0,Ci),new P(0,Ci,-ts),new P(0,Ci,ts),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Ms=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sa,ba,Ta),this._renderer.xr.enabled=wa,e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sa=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:pr,format:an,colorSpace:zt,depthBuffer:!1},s=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Wg(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,s){let a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fh),h.toneMapping=hi,h.autoClear=!1;let f=new gt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),g=new Ke(new tr,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Fh),_=!0);for(let p=0;p<6;p++){let T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;Wr(s,T*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===us||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bh[(s-r-1)%Bh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ke(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let p=[],T=0;for(let A=0;A<Li;++A){let D=A/_,S=Math.exp(-D*D/2);p.push(S),A===0?T+=S:A<m&&(T+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let x=this._sizeLods[s],I=3*x*(s>y-ss?s-y+ss:0),R=4*(this._cubeSize-x);Wr(t,I,R,3*x,2*x),c.setRenderTarget(t),c.render(u,Ma)}};function Gg(i){let e=[],t=[],n=[],s=i,r=i-ss+1+Oh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ss?c=Oh[o-i+ss-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){let A=R%3*2/3-1,D=R>2?0:-1,S=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];T.set(S,_*g*R),y.set(d,m*g*R);let v=[R,R,R,R,R,R];x.set(v,p*g*R)}let I=new xt;I.setAttribute("position",new At(T,_)),I.setAttribute("uv",new At(y,m)),I.setAttribute("faceIndex",new At(x,p)),e.push(I),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(i,e,t){let n=new qn(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wg(i,e,t){let n=new Float32Array(Li),s=new P(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function kh(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Vh(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function Xg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ks||c===Wa,h=c===us||c===ds;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ms(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ms(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yg(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let y=0,x=T.length;y<x;y+=3){let I=T[y+0],R=T[y+1],A=T[y+2];d.push(I,R,R,A,A,I)}}else if(g!==void 0){let T=g.array;_=g.version;for(let y=0,x=T.length/3-1;y<x;y+=3){let I=y+0,R=y+1,A=y+2;d.push(I,R,R,A,A,I)}}else return;let m=new(Xu(d)?ho:xs)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Zg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $g(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kg(i,e,t){let n=new WeakMap,s=new nt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let R=new Float32Array(x*I*4*u),A=new lo(R,x,I,u);A.type=Mn,A.needsUpdate=!0;let D=y*4;for(let v=0;v<u;v++){let L=m[v],H=p[v],k=T[v],V=x*I*4*v;for(let K=0;K<L.count;K++){let q=K*D;f===!0&&(s.fromBufferAttribute(L,K),R[V+q+0]=s.x,R[V+q+1]=s.y,R[V+q+2]=s.z,R[V+q+3]=0),g===!0&&(s.fromBufferAttribute(H,K),R[V+q+4]=s.x,R[V+q+5]=s.y,R[V+q+6]=s.z,R[V+q+7]=0),_===!0&&(s.fromBufferAttribute(k,K),R[V+q+8]=s.x,R[V+q+9]=s.y,R[V+q+10]=s.z,R[V+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new ve(x,I)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Jg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var po=class extends Dt{constructor(e,t,n,s,r,o,a,c,l,h=as){if(h!==as&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Ui),n===void 0&&h===ps&&(n=fs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bt,this.minFilter=c!==void 0?c:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$u=new Dt,Hh=new po(1,1),Ku=new lo,Ju=new vc,ju=new fo,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vo(i,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function n0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),Rt(t,n)}}function i0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;qh.set(n),i.uniformMatrix3fv(this.addr,!1,qh),Rt(t,n)}}function s0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Et(t,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),Rt(t,n)}}function r0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function o0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function a0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function c0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function l0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function h0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function u0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function d0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function f0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=Wu,r=Hh):r=$u,t.setTexture2D(e||r,s)}function p0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ju,s)}function m0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ju,s)}function g0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ku,s)}function _0(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(i,e){i.uniform1fv(this.addr,e)}function y0(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function v0(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function M0(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function S0(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function b0(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function T0(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function w0(i,e){i.uniform1iv(this.addr,e)}function A0(i,e){i.uniform2iv(this.addr,e)}function E0(i,e){i.uniform3iv(this.addr,e)}function R0(i,e){i.uniform4iv(this.addr,e)}function C0(i,e){i.uniform1uiv(this.addr,e)}function I0(i,e){i.uniform2uiv(this.addr,e)}function P0(i,e){i.uniform3uiv(this.addr,e)}function L0(i,e){i.uniform4uiv(this.addr,e)}function D0(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||$u,r[o])}function U0(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ju,r[o])}function N0(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ju,r[o])}function O0(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ku,r[o])}function F0(i){switch(i){case 5126:return x0;case 35664:return y0;case 35665:return v0;case 35666:return M0;case 35674:return S0;case 35675:return b0;case 35676:return T0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return E0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return I0;case 36295:return P0;case 36296:return L0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return O0}}var bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_0(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F0(t.type)}},wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Aa=/(\w+)(\])?(\[|\.)?/g;function Zh(i,e){i.seq.push(e),i.map[e.id]=e}function B0(i,e,t){let n=i.name,s=n.length;for(Aa.lastIndex=0;;){let r=Aa.exec(n),o=Aa.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zh(t,l===void 0?new bc(a,i,e):new Tc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new wc(a),Zh(t,u)),t=u}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);B0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $h(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var z0=37297,k0=0;function V0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Kh=new Ge;function H0(i){Ze._getMatrix(Kh,Ze.workingColorSpace,i);let e=`mat3( ${Kh.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ko:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+V0(i.getShaderSource(e),o)}else return s}function G0(i,e){let t=H0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function W0(i,e){let t;switch(e){case Qd:t="Linear";break;case ef:t="Reinhard";break;case tf:t="Cineon";break;case tl:t="ACESFilmic";break;case sf:t="AgX";break;case rf:t="Neutral";break;case nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xr=new P;function X0(){Ze.getLuminanceCoefficients(Xr);let i=Xr.x.toFixed(4),e=Xr.y.toFixed(4),t=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Y0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hs(i){return i!==""}function jh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace($0,J0)}var K0=new Map;function J0(i,e){let t=Xe[e];if(t===void 0){let n=K0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ac(t)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(i){return i.replace(j0,Q0)}function Q0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function e_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===el?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Jd:e="ENVMAP_BLENDING_MIX";break;case jd:e="ENVMAP_BLENDING_ADD";break}return e}function s_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function r_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=e_(t),l=t_(t),h=n_(t),u=i_(t),d=s_(t),f=q0(t),g=Y0(r),_=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hi?W0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,G0("linearToOutputTexel",t.outputColorSpace),X0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=Ac(o),o=jh(o,t),o=Qh(o,t),a=Ac(a),a=jh(a,t),a=Qh(a,t),o=eu(o),a=eu(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=T+m+o,x=T+p+a,I=$h(s,s.VERTEX_SHADER,y),R=$h(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(I).trim(),V=s.getShaderInfoLog(R).trim(),K=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,R);else{let j=Jh(s,I,"vertex"),X=Jh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+j+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||V==="")&&(q=!1);q&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(I),s.deleteShader(R),D=new ls(s,_),S=Z0(s,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,z0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=R,this}var o_=0,Ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}};function a_(i,e,t,n,s,r,o){let a=new er,c=new Ec,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,L,H,k){let V=H.fog,K=k.geometry,q=S.isMeshStandardMaterial?H.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),X=j&&j.mapping===Bo?j.image.height:null,ce=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let me=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=me!==void 0?me.length:0,ze=0;K.morphAttributes.position!==void 0&&(ze=1),K.morphAttributes.normal!==void 0&&(ze=2),K.morphAttributes.color!==void 0&&(ze=3);let Je,Z,ie,Te;if(ce){let at=wn[ce];Je=at.vertexShader,Z=at.fragmentShader}else Je=S.vertexShader,Z=S.fragmentShader,c.update(S),ie=c.getVertexShaderID(S),Te=c.getFragmentShaderID(S);let le=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ue=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,ot=!!S.map,We=!!S.matcap,ee=!!j,C=!!S.aoMap,Ce=!!S.lightMap,Me=!!S.bumpMap,ge=!!S.normalMap,ue=!!S.displacementMap,qe=!!S.emissiveMap,be=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,B=S.clearcoat>0,E=S.dispersion>0,U=S.iridescence>0,z=S.sheen>0,se=S.transmission>0,Q=M&&!!S.anisotropyMap,ae=B&&!!S.clearcoatMap,Ne=B&&!!S.clearcoatNormalMap,$=B&&!!S.clearcoatRoughnessMap,de=U&&!!S.iridescenceMap,Se=U&&!!S.iridescenceThicknessMap,ne=z&&!!S.sheenColorMap,te=z&&!!S.sheenRoughnessMap,De=!!S.specularMap,Oe=!!S.specularColorMap,tt=!!S.specularIntensityMap,N=se&&!!S.transmissionMap,pe=se&&!!S.thicknessMap,Y=!!S.gradientMap,J=!!S.alphaMap,ye=S.alphaTest>0,_e=!!S.alphaHash,Ve=!!S.extensions,Mt=hi;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Nt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:Z,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:Te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&k.instanceColor!==null,instancingMorph:Ue&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:zt,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:We,envMap:ee,envMapMode:ee&&j.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:Ce,bumpMap:Me,normalMap:ge,displacementMap:d&&ue,emissiveMap:qe,normalMapObjectSpace:ge&&S.normalMapType===hf,normalMapTangentSpace:ge&&S.normalMapType===Gu,metalnessMap:be,roughnessMap:w,anisotropy:M,anisotropyMap:Q,clearcoat:B,clearcoatMap:ae,clearcoatNormalMap:Ne,clearcoatRoughnessMap:$,dispersion:E,iridescence:U,iridescenceMap:de,iridescenceThicknessMap:Se,sheen:z,sheenColorMap:ne,sheenRoughnessMap:te,specularMap:De,specularColorMap:Oe,specularIntensityMap:tt,transmission:se,transmissionMap:N,thicknessMap:pe,gradientMap:Y,opaque:S.transparent===!1&&S.blending===os&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ye,alphaHash:_e,combine:S.combine,mapUv:ot&&_(S.map.channel),aoMapUv:C&&_(S.aoMap.channel),lightMapUv:Ce&&_(S.lightMap.channel),bumpMapUv:Me&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:ue&&_(S.displacementMap.channel),emissiveMapUv:qe&&_(S.emissiveMap.channel),metalnessMapUv:be&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:Q&&_(S.anisotropyMap.channel),clearcoatMapUv:ae&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:te&&_(S.sheenRoughnessMap.channel),specularMapUv:De&&_(S.specularMap.channel),specularColorMapUv:Oe&&_(S.specularColorMap.channel),specularIntensityMapUv:tt&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:pe&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ge||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(ot||J),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===lt,decodeVideoTextureEmissive:qe&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ft,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)v.push(L),v.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(v,S),y(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let v=g[S.type],L;if(v){let H=wn[v];L=Jf.clone(H.uniforms)}else L=S.uniforms;return L}function I(S,v){let L;for(let H=0,k=h.length;H<k;H++){let V=h[H];if(V.cacheKey===v){L=V,++L.usedTimes;break}}return L===void 0&&(L=new r_(i,v,S,r),h.push(L)),L}function R(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function A(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:D}}function c_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function l_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function iu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||l_),n.length>1&&n.sort(d||nu),s.length>1&&s.sort(d||nu)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function h_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new iu,i.set(n,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function u_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function d_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var f_=0;function p_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m_(i){let e=new u_,t=d_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let s=new P,r=new Be,o=new Be;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,y=0,x=0,I=0,R=0,A=0;l.sort(p_);for(let S=0,v=l.length;S<v;S++){let L=l[S],H=L.color,k=L.intensity,V=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],k);A++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,X=t.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=q,f++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(H).multiplyScalar(k),q.distance=V,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[_]=q;let j=L.shadow;if(L.map&&(n.spotLightMap[I]=L.map,I++,j.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,L.castShadow){let X=t.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=K,x++}_++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(H).multiplyScalar(k),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=q,m++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let j=L.shadow,X=t.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=q,g++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(k),q.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==T||D.numPointShadows!==y||D.numSpotShadows!==x||D.numSpotMaps!==I||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-R,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.directionalLength=f,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=T,D.numPointShadows=y,D.numSpotShadows=x,D.numSpotMaps=I,D.numLightProbes=A,n.version=f_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let y=l[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function su(i){let e=new m_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function g_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new su(i),e.set(s,[a])):r>=o.length?(a=new su(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Cc=class extends Zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends Zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},__=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y_(i,e,t){let n=new nr,s=new ve,r=new ve,o=new nt,a=new Cc({depthPacking:lf}),c=new Ic,l={},h=t.maxTextureSize,u={[En]:qt,[qt]:En,[ft]:ft},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:__,fragmentShader:x_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let p=this.type;this.render=function(R,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(li),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=p!==kn&&this.type===kn,V=p===kn&&this.type!==kn;for(let K=0,q=R.length;K<q;K++){let j=R[K],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ce=X.getFrameExtents();if(s.multiply(ce),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y)),X.map===null||k===!0||V===!0){let we=this.type!==kn?{minFilter:Bt,magFilter:Bt}:{};X.map!==null&&X.map.dispose(),X.map=new qn(s.x,s.y,we),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let me=X.getViewportCount();for(let we=0;we<me;we++){let ze=X.getViewport(we);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),H.viewport(o),X.updateMatrices(j,we),n=X.getFrustum(),x(A,D,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===kn&&T(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,L)};function T(R,A){let D=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,D,f,_,null)}function y(R,A,D,S){let v=null,L=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)v=L;else if(v=D.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=v.uuid,k=A.uuid,V=l[H];V===void 0&&(V={},l[H]=V);let K=V[k];K===void 0&&(K=v.clone(),V[k]=K,A.addEventListener("dispose",I)),v=K}if(v.visible=A.visible,v.wireframe=A.wireframe,S===kn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let H=i.properties.get(v);H.light=D}return v}function x(R,A,D,S,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===kn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let k=e.update(R),V=R.material;if(Array.isArray(V)){let K=k.groups;for(let q=0,j=K.length;q<j;q++){let X=K[q],ce=V[X.materialIndex];if(ce&&ce.visible){let me=y(R,ce,S,v);R.onBeforeShadow(i,R,A,D,k,me,X),i.renderBufferDirect(D,null,k,me,R,X),R.onAfterShadow(i,R,A,D,k,me,X)}}}else if(V.visible){let K=y(R,V,S,v);R.onBeforeShadow(i,R,A,D,k,K,null),i.renderBufferDirect(D,null,k,K,R,null),R.onAfterShadow(i,R,A,D,k,K,null)}}let H=R.children;for(let k=0,V=H.length;k<V;k++)x(H[k],A,D,S,v)}function I(R){R.target.removeEventListener("dispose",I);for(let D in l){let S=l[D],v=R.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var v_={[Fa]:Ba,[za]:Ha,[ka]:Ga,[hs]:Va,[Ba]:Fa,[Ha]:za,[Ga]:ka,[Va]:hs};function M_(i,e){function t(){let N=!1,pe=new nt,Y=null,J=new nt(0,0,0,0);return{setMask:function(ye){Y!==ye&&!N&&(i.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){N=ye},setClear:function(ye,_e,Ve,Mt,Nt){Nt===!0&&(ye*=Mt,_e*=Mt,Ve*=Mt),pe.set(ye,_e,Ve,Mt),J.equals(pe)===!1&&(i.clearColor(ye,_e,Ve,Mt),J.copy(pe))},reset:function(){N=!1,Y=null,J.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,Y=null,J=null,ye=null;return{setReversed:function(_e){if(pe!==_e){let Ve=e.get("EXT_clip_control");pe?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let Mt=ye;ye=null,this.setClear(Mt)}pe=_e},getReversed:function(){return pe},setTest:function(_e){_e?le(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!N&&(i.depthMask(_e),Y=_e)},setFunc:function(_e){if(pe&&(_e=v_[_e]),J!==_e){switch(_e){case Fa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Ha:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=_e}},setLocked:function(_e){N=_e},setClear:function(_e){ye!==_e&&(pe&&(_e=1-_e),i.clearDepth(_e),ye=_e)},reset:function(){N=!1,Y=null,J=null,ye=null,pe=!1}}}function s(){let N=!1,pe=null,Y=null,J=null,ye=null,_e=null,Ve=null,Mt=null,Nt=null;return{setTest:function(at){N||(at?le(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(at){pe!==at&&!N&&(i.stencilMask(at),pe=at)},setFunc:function(at,mn,Ln){(Y!==at||J!==mn||ye!==Ln)&&(i.stencilFunc(at,mn,Ln),Y=at,J=mn,ye=Ln)},setOp:function(at,mn,Ln){(_e!==at||Ve!==mn||Mt!==Ln)&&(i.stencilOp(at,mn,Ln),_e=at,Ve=mn,Mt=Ln)},setLocked:function(at){N=at},setClear:function(at){Nt!==at&&(i.clearStencil(at),Nt=at)},reset:function(){N=!1,pe=null,Y=null,J=null,ye=null,_e=null,Ve=null,Mt=null,Nt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,y=null,x=null,I=null,R=null,A=new Le(0,0,0),D=0,S=!1,v=null,L=null,H=null,k=null,V=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,j=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=j>=2);let ce=null,me={},we=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Je=new nt().fromArray(we),Z=new nt().fromArray(ze);function ie(N,pe,Y,J){let ye=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Y;Ve++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(pe+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return _e}let Te={};Te[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(hs),Me(!1),ge(rh),le(i.CULL_FACE),C(li);function le(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Pe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ue(N,pe){return u[N]!==pe?(i.bindFramebuffer(N,pe),u[N]=pe,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function ke(N,pe){let Y=f,J=!1;if(N){Y=d.get(pe),Y===void 0&&(Y=[],d.set(pe,Y));let ye=N.textures;if(Y.length!==ye.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ve=ye.length;_e<Ve;_e++)Y[_e]=i.COLOR_ATTACHMENT0+_e;Y.length=ye.length,J=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,J=!0);J&&i.drawBuffers(Y)}function ot(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let We={[Ii]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};We[Od]=i.MIN,We[Fd]=i.MAX;let ee={[Bd]:i.ZERO,[zd]:i.ONE,[kd]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Hd]:i.DST_ALPHA,[Vd]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Gd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[Zd]:i.ONE_MINUS_CONSTANT_COLOR,[$d]:i.CONSTANT_ALPHA,[Kd]:i.ONE_MINUS_CONSTANT_ALPHA};function C(N,pe,Y,J,ye,_e,Ve,Mt,Nt,at){if(N===li){_===!0&&(Pe(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),N!==Dd){if(N!==m||at!==S){if((p!==Ii||x!==Ii)&&(i.blendEquation(i.FUNC_ADD),p=Ii,x=Ii),at)switch(N){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,y=null,I=null,R=null,A.set(0,0,0),D=0,m=N,S=at}return}ye=ye||pe,_e=_e||Y,Ve=Ve||J,(pe!==p||ye!==x)&&(i.blendEquationSeparate(We[pe],We[ye]),p=pe,x=ye),(Y!==T||J!==y||_e!==I||Ve!==R)&&(i.blendFuncSeparate(ee[Y],ee[J],ee[_e],ee[Ve]),T=Y,y=J,I=_e,R=Ve),(Mt.equals(A)===!1||Nt!==D)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Nt),A.copy(Mt),D=Nt),m=N,S=!1}function Ce(N,pe){N.side===ft?Pe(i.CULL_FACE):le(i.CULL_FACE);let Y=N.side===qt;pe&&(Y=!Y),Me(Y),N.blending===os&&N.transparent===!1?C(li):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),qe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function ge(N){N!==Pd?(le(i.CULL_FACE),N!==L&&(N===rh?i.cullFace(i.BACK):N===Ld?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),L=N}function ue(N){N!==H&&(q&&i.lineWidth(N),H=N)}function qe(N,pe,Y){N?(le(i.POLYGON_OFFSET_FILL),(k!==pe||V!==Y)&&(i.polygonOffset(pe,Y),k=pe,V=Y)):Pe(i.POLYGON_OFFSET_FILL)}function be(N){N?le(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function w(N){N===void 0&&(N=i.TEXTURE0+K-1),ce!==N&&(i.activeTexture(N),ce=N)}function M(N,pe,Y){Y===void 0&&(ce===null?Y=i.TEXTURE0+K-1:Y=ce);let J=me[Y];J===void 0&&(J={type:void 0,texture:void 0},me[Y]=J),(J.type!==N||J.texture!==pe)&&(ce!==Y&&(i.activeTexture(Y),ce=Y),i.bindTexture(N,pe||Te[N]),J.type=N,J.texture=pe)}function B(){let N=me[ce];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(N){Je.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Je.copy(N))}function te(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function De(N,pe){let Y=l.get(pe);Y===void 0&&(Y=new WeakMap,l.set(pe,Y));let J=Y.get(N);J===void 0&&(J=i.getUniformBlockIndex(pe,N.name),Y.set(N,J))}function Oe(N,pe){let J=l.get(pe).get(N);c.get(pe)!==J&&(i.uniformBlockBinding(pe,J,N.__bindingPointIndex),c.set(pe,J))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,me={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,y=null,x=null,I=null,R=null,A=new Le(0,0,0),D=0,S=!1,v=null,L=null,H=null,k=null,V=null,Je.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Pe,bindFramebuffer:Ue,drawBuffers:ke,useProgram:ot,setBlending:C,setMaterial:Ce,setFlipSided:Me,setCullFace:ge,setLineWidth:ue,setPolygonOffset:qe,setScissorTest:be,activeTexture:w,bindTexture:M,unbindTexture:B,compressedTexImage2D:E,compressedTexImage3D:U,texImage2D:de,texImage3D:Se,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:Ne,texStorage3D:$,texSubImage2D:z,texSubImage3D:se,compressedTexSubImage2D:Q,compressedTexSubImage3D:ae,scissor:ne,viewport:te,reset:tt}}function ru(i,e,t,n){let s=S_(n);switch(t){case Ou:return i*e;case Bu:return i*e;case zu:return i*e*2;case ol:return i*e/s.components*s.byteLength;case al:return i*e/s.components*s.byteLength;case ku:return i*e*2/s.components*s.byteLength;case cl:return i*e*2/s.components*s.byteLength;case Fu:return i*e*3/s.components*s.byteLength;case an:return i*e*4/s.components*s.byteLength;case ll:return i*e*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case $a:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oo:case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vu:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S_(i){switch(i){case Xn:case Du:return{byteLength:1,components:1};case js:case Uu:case pr:return{byteLength:2,components:1};case sl:case rl:return{byteLength:2,components:4};case Ui:case il:case Mn:return{byteLength:4,components:1};case Nu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function b_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):Qs("canvas")}function _(w,M,B){let E=1,U=be(w);if((U.width>B||U.height>B)&&(E=B/Math.max(U.width,U.height)),E<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let z=Math.floor(E*U.width),se=Math.floor(E*U.height);u===void 0&&(u=g(z,se));let Q=M?g(z,se):u;return Q.width=z,Q.height=se,Q.getContext("2d").drawImage(w,0,0,z,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+z+"x"+se+")."),Q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,M,B,E,U=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let z=M;if(M===i.RED&&(B===i.FLOAT&&(z=i.R32F),B===i.HALF_FLOAT&&(z=i.R16F),B===i.UNSIGNED_BYTE&&(z=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(z=i.R8UI),B===i.UNSIGNED_SHORT&&(z=i.R16UI),B===i.UNSIGNED_INT&&(z=i.R32UI),B===i.BYTE&&(z=i.R8I),B===i.SHORT&&(z=i.R16I),B===i.INT&&(z=i.R32I)),M===i.RG&&(B===i.FLOAT&&(z=i.RG32F),B===i.HALF_FLOAT&&(z=i.RG16F),B===i.UNSIGNED_BYTE&&(z=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(z=i.RG8UI),B===i.UNSIGNED_SHORT&&(z=i.RG16UI),B===i.UNSIGNED_INT&&(z=i.RG32UI),B===i.BYTE&&(z=i.RG8I),B===i.SHORT&&(z=i.RG16I),B===i.INT&&(z=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(z=i.RGB16UI),B===i.UNSIGNED_INT&&(z=i.RGB32UI),B===i.BYTE&&(z=i.RGB8I),B===i.SHORT&&(z=i.RGB16I),B===i.INT&&(z=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),B===i.UNSIGNED_INT&&(z=i.RGBA32UI),B===i.BYTE&&(z=i.RGBA8I),B===i.SHORT&&(z=i.RGBA16I),B===i.INT&&(z=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),M===i.RGBA){let se=U?ko:Ze.getTransfer(E);B===i.FLOAT&&(z=i.RGBA32F),B===i.HALF_FLOAT&&(z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(z=se===lt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function x(w,M){let B;return w?M===null||M===Ui||M===fs?B=i.DEPTH24_STENCIL8:M===Mn?B=i.DEPTH32F_STENCIL8:M===js&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ui||M===fs?B=i.DEPTH_COMPONENT24:M===Mn?B=i.DEPTH_COMPONENT32F:M===js&&(B=i.DEPTH_COMPONENT16),B}function I(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Bt&&w.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){let M=w.target;M.removeEventListener("dispose",R),D(M),M.isVideoTexture&&h.delete(M)}function A(w){let M=w.target;M.removeEventListener("dispose",A),v(M)}function D(w){let M=n.get(w);if(M.__webglInit===void 0)return;let B=w.source,E=d.get(B);if(E){let U=E[M.__cacheKey];U.usedTimes--,U.usedTimes===0&&S(w),Object.keys(E).length===0&&d.delete(B)}n.remove(w)}function S(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let B=w.source,E=d.get(B);delete E[M.__cacheKey],o.memory.textures--}function v(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let E=0;E<6;E++){if(Array.isArray(M.__webglFramebuffer[E]))for(let U=0;U<M.__webglFramebuffer[E].length;U++)i.deleteFramebuffer(M.__webglFramebuffer[E][U]);else i.deleteFramebuffer(M.__webglFramebuffer[E]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[E])}else{if(Array.isArray(M.__webglFramebuffer))for(let E=0;E<M.__webglFramebuffer.length;E++)i.deleteFramebuffer(M.__webglFramebuffer[E]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let E=0;E<M.__webglColorRenderbuffer.length;E++)M.__webglColorRenderbuffer[E]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[E]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=w.textures;for(let E=0,U=B.length;E<U;E++){let z=n.get(B[E]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(B[E])}n.remove(w)}let L=0;function H(){L=0}function k(){let w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function V(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function K(w,M){let B=n.get(w);if(w.isVideoTexture&&ue(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let E=w.image;if(E===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(E.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,w,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function q(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Z(B,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function j(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Z(B,w,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function X(w,M){let B=n.get(w);if(w.version>0&&B.__version!==w.version){ie(B,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}let ce={[Di]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Js]:i.MIRRORED_REPEAT},me={[Bt]:i.NEAREST,[nl]:i.NEAREST_MIPMAP_NEAREST,[is]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Gs]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},we={[uf]:i.NEVER,[_f]:i.ALWAYS,[df]:i.LESS,[Wu]:i.LEQUAL,[ff]:i.EQUAL,[gf]:i.GEQUAL,[pf]:i.GREATER,[mf]:i.NOTEQUAL};function ze(w,M){if(M.type===Mn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===Gs||M.magFilter===is||M.magFilter===An||M.minFilter===Xt||M.minFilter===Gs||M.minFilter===is||M.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ce[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ce[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ce[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,me[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==is&&M.minFilter!==An||M.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Je(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));let E=M.source,U=d.get(E);U===void 0&&(U={},d.set(E,U));let z=V(M);if(z!==w.__cacheKey){U[z]===void 0&&(U[z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),U[z].usedTimes++;let se=U[w.__cacheKey];se!==void 0&&(U[w.__cacheKey].usedTimes--,se.usedTimes===0&&S(M)),w.__cacheKey=z,w.__webglTexture=U[z].texture}return B}function Z(w,M,B){let E=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(E=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(E=i.TEXTURE_3D);let U=Je(w,M),z=M.source;t.bindTexture(E,w.__webglTexture,i.TEXTURE0+B);let se=n.get(z);if(z.version!==se.__version||U===!0){t.activeTexture(i.TEXTURE0+B);let Q=Ze.getPrimaries(Ze.workingColorSpace),ae=M.colorSpace===ai?null:Ze.getPrimaries(M.colorSpace),Ne=M.colorSpace===ai||Q===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let $=_(M.image,!1,s.maxTextureSize);$=qe(M,$);let de=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),ne=y(M.internalFormat,de,Se,M.colorSpace,M.isVideoTexture);ze(E,M);let te,De=M.mipmaps,Oe=M.isVideoTexture!==!0,tt=se.__version===void 0||U===!0,N=z.dataReady,pe=I(M,$);if(M.isDepthTexture)ne=x(M.format===ps,M.type),tt&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,ne,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,ne,$.width,$.height,0,de,Se,null));else if(M.isDataTexture)if(De.length>0){Oe&&tt&&t.texStorage2D(i.TEXTURE_2D,pe,ne,De[0].width,De[0].height);for(let Y=0,J=De.length;Y<J;Y++)te=De[Y],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,te.width,te.height,de,Se,te.data):t.texImage2D(i.TEXTURE_2D,Y,ne,te.width,te.height,0,de,Se,te.data);M.generateMipmaps=!1}else Oe?(tt&&t.texStorage2D(i.TEXTURE_2D,pe,ne,$.width,$.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,de,Se,$.data)):t.texImage2D(i.TEXTURE_2D,0,ne,$.width,$.height,0,de,Se,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ne,De[0].width,De[0].height,$.depth);for(let Y=0,J=De.length;Y<J;Y++)if(te=De[Y],M.format!==an)if(de!==null)if(Oe){if(N)if(M.layerUpdates.size>0){let ye=ru(te.width,te.height,M.format,M.type);for(let _e of M.layerUpdates){let Ve=te.data.subarray(_e*ye/te.data.BYTES_PER_ELEMENT,(_e+1)*ye/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,_e,te.width,te.height,1,de,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,te.width,te.height,$.depth,de,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,ne,te.width,te.height,$.depth,0,te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,te.width,te.height,$.depth,de,Se,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,ne,te.width,te.height,$.depth,0,de,Se,te.data)}else{Oe&&tt&&t.texStorage2D(i.TEXTURE_2D,pe,ne,De[0].width,De[0].height);for(let Y=0,J=De.length;Y<J;Y++)te=De[Y],M.format!==an?de!==null?Oe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,te.width,te.height,de,te.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,ne,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,te.width,te.height,de,Se,te.data):t.texImage2D(i.TEXTURE_2D,Y,ne,te.width,te.height,0,de,Se,te.data)}else if(M.isDataArrayTexture)if(Oe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ne,$.width,$.height,$.depth),N)if(M.layerUpdates.size>0){let Y=ru($.width,$.height,M.format,M.type);for(let J of M.layerUpdates){let ye=$.data.subarray(J*Y/$.data.BYTES_PER_ELEMENT,(J+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,de,Se,ye)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Se,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,$.width,$.height,$.depth,0,de,Se,$.data);else if(M.isData3DTexture)Oe?(tt&&t.texStorage3D(i.TEXTURE_3D,pe,ne,$.width,$.height,$.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Se,$.data)):t.texImage3D(i.TEXTURE_3D,0,ne,$.width,$.height,$.depth,0,de,Se,$.data);else if(M.isFramebufferTexture){if(tt)if(Oe)t.texStorage2D(i.TEXTURE_2D,pe,ne,$.width,$.height);else{let Y=$.width,J=$.height;for(let ye=0;ye<pe;ye++)t.texImage2D(i.TEXTURE_2D,ye,ne,Y,J,0,de,Se,null),Y>>=1,J>>=1}}else if(De.length>0){if(Oe&&tt){let Y=be(De[0]);t.texStorage2D(i.TEXTURE_2D,pe,ne,Y.width,Y.height)}for(let Y=0,J=De.length;Y<J;Y++)te=De[Y],Oe?N&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,de,Se,te):t.texImage2D(i.TEXTURE_2D,Y,ne,de,Se,te);M.generateMipmaps=!1}else if(Oe){if(tt){let Y=be($);t.texStorage2D(i.TEXTURE_2D,pe,ne,Y.width,Y.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Se,$)}else t.texImage2D(i.TEXTURE_2D,0,ne,de,Se,$);m(M)&&p(E),se.__version=z.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ie(w,M,B){if(M.image.length!==6)return;let E=Je(w,M),U=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let z=n.get(U);if(U.version!==z.__version||E===!0){t.activeTexture(i.TEXTURE0+B);let se=Ze.getPrimaries(Ze.workingColorSpace),Q=M.colorSpace===ai?null:Ze.getPrimaries(M.colorSpace),ae=M.colorSpace===ai||se===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!Ne&&!$?de[J]=_(M.image[J],!0,s.maxCubemapSize):de[J]=$?M.image[J].image:M.image[J],de[J]=qe(M,de[J]);let Se=de[0],ne=r.convert(M.format,M.colorSpace),te=r.convert(M.type),De=y(M.internalFormat,ne,te,M.colorSpace),Oe=M.isVideoTexture!==!0,tt=z.__version===void 0||E===!0,N=U.dataReady,pe=I(M,Se);ze(i.TEXTURE_CUBE_MAP,M);let Y;if(Ne){Oe&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,De,Se.width,Se.height);for(let J=0;J<6;J++){Y=de[J].mipmaps;for(let ye=0;ye<Y.length;ye++){let _e=Y[ye];M.format!==an?ne!==null?Oe?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,_e.width,_e.height,ne,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,0,0,_e.width,_e.height,ne,te,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye,De,_e.width,_e.height,0,ne,te,_e.data)}}}else{if(Y=M.mipmaps,Oe&&tt){Y.length>0&&pe++;let J=be(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,De,J.width,J.height)}for(let J=0;J<6;J++)if($){Oe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,ne,te,de[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,de[J].width,de[J].height,0,ne,te,de[J].data);for(let ye=0;ye<Y.length;ye++){let Ve=Y[ye].image[J].image;Oe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,Ve.width,Ve.height,ne,te,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,De,Ve.width,Ve.height,0,ne,te,Ve.data)}}else{Oe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ne,te,de[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,De,ne,te,de[J]);for(let ye=0;ye<Y.length;ye++){let _e=Y[ye];Oe?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,0,0,ne,te,_e.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ye+1,De,ne,te,_e.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),z.__version=U.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Te(w,M,B,E,U,z){let se=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),ae=y(B.internalFormat,se,Q,B.colorSpace),Ne=n.get(M),$=n.get(B);if($.__renderTarget=M,!Ne.__hasExternalTextures){let de=Math.max(1,M.width>>z),Se=Math.max(1,M.height>>z);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,z,ae,de,Se,M.depth,0,se,Q,null):t.texImage2D(U,z,ae,de,Se,0,se,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ge(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,E,U,$.__webglTexture,0,Me(M)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,E,U,$.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(w,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let E=M.depthTexture,U=E&&E.isDepthTexture?E.type:null,z=x(M.stencilBuffer,U),se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=Me(M);ge(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,z,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,z,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,z,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,w)}else{let E=M.textures;for(let U=0;U<E.length;U++){let z=E[U],se=r.convert(z.format,z.colorSpace),Q=r.convert(z.type),ae=y(z.internalFormat,se,Q,z.colorSpace),Ne=Me(M);B&&ge(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ae,M.width,M.height):ge(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let E=n.get(M.depthTexture);E.__renderTarget=M,(!E.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),K(M.depthTexture,0);let U=E.__webglTexture,z=Me(M);if(M.depthTexture.format===as)ge(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0);else if(M.depthTexture.format===ps)ge(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0);else throw new Error("Unknown depthTexture format")}function Ue(w){let M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let E=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),E){let U=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,E.removeEventListener("dispose",U)};E.addEventListener("dispose",U),M.__depthDisposeCallback=U}M.__boundDepthTexture=E}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let E=0;E<6;E++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[E]),M.__webglDepthbuffer[E]===void 0)M.__webglDepthbuffer[E]=i.createRenderbuffer(),le(M.__webglDepthbuffer[E],w,!1);else{let U=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=M.__webglDepthbuffer[E];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),le(M.__webglDepthbuffer,w,!1);else{let E=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,U=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,U),i.framebufferRenderbuffer(i.FRAMEBUFFER,E,i.RENDERBUFFER,U)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(w,M,B){let E=n.get(w);M!==void 0&&Te(E.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ue(w)}function ot(w){let M=w.texture,B=n.get(w),E=n.get(M);w.addEventListener("dispose",A);let U=w.textures,z=w.isWebGLCubeRenderTarget===!0,se=U.length>1;if(se||(E.__webglTexture===void 0&&(E.__webglTexture=i.createTexture()),E.__version=M.version,o.memory.textures++),z){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let ae=0;ae<M.mipmaps.length;ae++)B.__webglFramebuffer[Q][ae]=i.createFramebuffer()}else B.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)B.__webglFramebuffer[Q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(se)for(let Q=0,ae=U.length;Q<ae;Q++){let Ne=n.get(U[Q]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ge(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<U.length;Q++){let ae=U[Q];B.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let Ne=r.convert(ae.format,ae.colorSpace),$=r.convert(ae.type),de=y(ae.internalFormat,Ne,$,ae.colorSpace,w.isXRRenderTarget===!0),Se=Me(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),le(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture),ze(i.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)Te(B.__webglFramebuffer[Q][ae],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae);else Te(B.__webglFramebuffer[Q],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){for(let Q=0,ae=U.length;Q<ae;Q++){let Ne=U[Q],$=n.get(Ne);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),ze(i.TEXTURE_2D,Ne),Te(B.__webglFramebuffer,w,Ne,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,0),m(Ne)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,E.__webglTexture),ze(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)Te(B.__webglFramebuffer[ae],w,M,i.COLOR_ATTACHMENT0,Q,ae);else Te(B.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,Q,0);m(M)&&p(Q),t.unbindTexture()}w.depthBuffer&&Ue(w)}function We(w){let M=w.textures;for(let B=0,E=M.length;B<E;B++){let U=M[B];if(m(U)){let z=T(w),se=n.get(U).__webglTexture;t.bindTexture(z,se),p(z),t.unbindTexture()}}}let ee=[],C=[];function Ce(w){if(w.samples>0){if(ge(w)===!1){let M=w.textures,B=w.width,E=w.height,U=i.COLOR_BUFFER_BIT,z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=n.get(w),Q=M.length>1;if(Q)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);let Ne=n.get(M[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,B,E,0,0,B,E,U,i.NEAREST),c===!0&&(ee.length=0,C.length=0,ee.push(i.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ee.push(z),C.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,se.__webglColorRenderbuffer[ae]);let Ne=n.get(M[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Me(w){return Math.min(s.maxSamples,w.samples)}function ge(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function qe(w,M){let B=w.colorSpace,E=w.format,U=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==zt&&B!==ai&&(Ze.getTransfer(B)===lt?(E!==an||U!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function be(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ge}function T_(i,e){function t(n,s=ai){let r,o=Ze.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Du)return i.BYTE;if(n===Uu)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===il)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===pr)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===Fu)return i.RGB;if(n===an)return i.RGBA;if(n===Bu)return i.LUMINANCE;if(n===zu)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===ol)return i.RED;if(n===al)return i.RED_INTEGER;if(n===ku)return i.RG;if(n===cl)return i.RG_INTEGER;if(n===ll)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ka||n===Ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ka)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Qa||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===dc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oo)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vu||n===pc||n===mc||n===gc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Pc=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qe=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},w_={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $t({vertexShader:A_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=new Lc,m=t.getContextAttributes(),p=null,T=null,y=[],x=[],I=new ve,R=null,A=new wt;A.viewport=new nt;let D=new wt;D.viewport=new nt;let S=[A,D],v=new Pc,L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ie=y[Z];return ie===void 0&&(ie=new qs,y[Z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Z){let ie=y[Z];return ie===void 0&&(ie=new qs,y[Z]=ie),ie.getGripSpace()},this.getHand=function(Z){let ie=y[Z];return ie===void 0&&(ie=new qs,y[Z]=ie),ie.getHandSpace()};function k(Z){let ie=x.indexOf(Z.inputSource);if(ie===-1)return;let Te=y[ie];Te!==void 0&&(Te.update(Z.inputSource,Z.frame,l||o),Te.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<y.length;Z++){let ie=x[Z];ie!==null&&(x[Z]=null,y[Z].disconnect(ie))}L=null,H=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new qn(f.framebufferWidth,f.framebufferHeight,{format:an,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,Te=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ps:as,Te=m.stencil?fs:Ui);let Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new qn(d.textureWidth,d.textureHeight,{format:an,type:Xn,depthTexture:new po(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Je.setContext(s),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Z){for(let ie=0;ie<Z.removed.length;ie++){let Te=Z.removed[ie],le=x.indexOf(Te);le>=0&&(x[le]=null,y[le].disconnect(Te))}for(let ie=0;ie<Z.added.length;ie++){let Te=Z.added[ie],le=x.indexOf(Te);if(le===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(Te),le=Ue;break}else if(x[Ue]===null){x[Ue]=Te,le=Ue;break}if(le===-1)break}let Pe=y[le];Pe&&Pe.connect(Te)}}let q=new P,j=new P;function X(Z,ie,Te){q.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(Te.matrixWorld);let le=q.distanceTo(j),Pe=ie.projectionMatrix.elements,Ue=Te.projectionMatrix.elements,ke=Pe[14]/(Pe[10]-1),ot=Pe[14]/(Pe[10]+1),We=(Pe[9]+1)/Pe[5],ee=(Pe[9]-1)/Pe[5],C=(Pe[8]-1)/Pe[0],Ce=(Ue[8]+1)/Ue[0],Me=ke*C,ge=ke*Ce,ue=le/(-C+Ce),qe=ue*-C;if(ie.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(ue),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Pe[10]===-1)Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let be=ke+ue,w=ot+ue,M=Me-qe,B=ge+(le-qe),E=We*ot/w*be,U=ee*ot/w*be;Z.projectionMatrix.makePerspective(M,B,E,U,be,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,ie){ie===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ie.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ie=Z.near,Te=Z.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),v.near=D.near=A.near=ie,v.far=D.far=A.far=Te,(L!==v.near||H!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,H=v.far),A.layers.mask=Z.layers.mask|2,D.layers.mask=Z.layers.mask|4,v.layers.mask=A.layers.mask|D.layers.mask;let le=Z.parent,Pe=v.cameras;ce(v,le);for(let Ue=0;Ue<Pe.length;Ue++)ce(Pe[Ue],le);Pe.length===2?X(v,A,D):v.projectionMatrix.copy(A.projectionMatrix),me(Z,v,le)};function me(Z,ie,Te){Te===null?Z.matrix.copy(ie.matrixWorld):(Z.matrix.copy(Te.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ie.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ie.projectionMatrix),Z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_s*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let we=null;function ze(Z,ie){if(h=ie.getViewerPose(l||o),g=ie,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let le=!1;Te.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let Ue=0;Ue<Te.length;Ue++){let ke=Te[Ue],ot=null;if(f!==null)ot=f.getViewport(ke);else{let ee=u.getViewSubImage(d,ke);ot=ee.viewport,Ue===0&&(e.setRenderTargetTextures(T,ee.colorTexture,d.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(T))}let We=S[Ue];We===void 0&&(We=new wt,We.layers.enable(Ue),We.viewport=new nt,S[Ue]=We),We.matrix.fromArray(ke.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ke.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),Ue===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(We)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let Ue=u.getDepthInformation(Te[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,s.renderState)}}for(let Te=0;Te<y.length;Te++){let le=x[Te],Pe=y[Te];le!==null&&Pe!==void 0&&Pe.update(le,ie,l||o)}we&&we(Z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Je=new Zu;Je.setAnimationLoop(ze),this.setAnimationLoop=function(Z){we=Z},this.dispose=function(){}}},Ri=new ln,R_=new Be;function C_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),y=T.envMap,x=T.envMapRotation;y&&(m.envMap.value=y,Ri.copy(x),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(Ri)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){let x=y.program;n.uniformBlockBinding(T,x)}function l(T,y){let x=s[T.id];x===void 0&&(g(T),x=h(T),s[T.id]=x,T.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(T,I);let R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){let y=u();T.__bindingPointIndex=y;let x=i.createBuffer(),I=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let y=s[T.id],x=T.uniforms,I=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,A=x.length;R<A;R++){let D=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,v=D.length;S<v;S++){let L=D[S];if(f(L,R,S,I)===!0){let H=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],V=0;for(let K=0;K<k.length;K++){let q=k[K],j=_(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,H+V,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,y,x,I){let R=T.value,A=y+"_"+x;if(I[A]===void 0)return typeof R=="number"||typeof R=="boolean"?I[A]=R:I[A]=R.clone(),!0;{let D=I[A];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[A]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(T){let y=T.uniforms,x=0,I=16;for(let A=0,D=y.length;A<D;A++){let S=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,L=S.length;v<L;v++){let H=S[v],k=Array.isArray(H.value)?H.value:[H.value];for(let V=0,K=k.length;V<K;V++){let q=k[V],j=_(q),X=x%I,ce=X%j.boundary,me=X+ce;x+=ce,me!==0&&I-me<j.storage&&(x+=I-me),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=j.storage}}}let R=x%I;return R>0&&(x+=I-R),T.__size=x,T.__cache={},this}function _(T){let y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){let y=T.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var mo=class{constructor(e={}){let{canvas:t=Uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ht,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,I=!1,R=0,A=0,D=null,S=-1,v=null,L=new nt,H=new nt,k=null,V=new Le(0),K=0,q=t.width,j=t.height,X=1,ce=null,me=null,we=new nt(0,0,q,j),ze=new nt(0,0,q,j),Je=!1,Z=new nr,ie=!1,Te=!1,le=new Be,Pe=new Be,Ue=new P,ke=new nt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function ee(){return D===null?X:1}let C=n;function Ce(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),C===null){let O="webgl2";if(C=Ce(O,b),C===null)throw Ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Me,ge,ue,qe,be,w,M,B,E,U,z,se,Q,ae,Ne,$,de,Se,ne,te,De,Oe,tt,N;function pe(){Me=new qg(C),Me.init(),Oe=new T_(C,Me),ge=new kg(C,Me,e,Oe),ue=new M_(C,Me),ge.reverseDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),qe=new $g(C),be=new c_,w=new b_(C,Me,ue,be,ge,Oe,qe),M=new Hg(x),B=new Xg(x),E=new np(C),tt=new Bg(C,E),U=new Yg(C,E,qe,tt),z=new Jg(C,U,E,qe),ne=new Kg(C,ge,w),$=new Vg(be),se=new a_(x,M,B,Me,ge,tt,$),Q=new C_(x,be),ae=new h_,Ne=new g_(Me),Se=new Fg(x,M,B,ue,z,f,c),de=new y_(x,z,ge),N=new I_(C,qe,ge,ue),te=new zg(C,Me,qe),De=new Zg(C,Me,qe),qe.programs=se.programs,x.capabilities=ge,x.extensions=Me,x.properties=be,x.renderLists=ae,x.shadowMap=de,x.state=ue,x.info=qe}pe();let Y=new Dc(x,C);this.xr=Y,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=Me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(b){b!==void 0&&(X=b,this.setSize(q,j,!1))},this.getSize=function(b){return b.set(q,j)},this.setSize=function(b,O,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,j=O,t.width=Math.floor(b*X),t.height=Math.floor(O*X),G===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(q*X,j*X).floor()},this.setDrawingBufferSize=function(b,O,G){q=b,j=O,X=G,t.width=Math.floor(b*G),t.height=Math.floor(O*G),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(we)},this.setViewport=function(b,O,G,W){b.isVector4?we.set(b.x,b.y,b.z,b.w):we.set(b,O,G,W),ue.viewport(L.copy(we).multiplyScalar(X).round())},this.getScissor=function(b){return b.copy(ze)},this.setScissor=function(b,O,G,W){b.isVector4?ze.set(b.x,b.y,b.z,b.w):ze.set(b,O,G,W),ue.scissor(H.copy(ze).multiplyScalar(X).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){ue.setScissorTest(Je=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){me=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(b=!0,O=!0,G=!0){let W=0;if(b){let F=!1;if(D!==null){let oe=D.texture.format;F=oe===ll||oe===cl||oe===al}if(F){let oe=D.texture.type,xe=oe===Xn||oe===Ui||oe===js||oe===fs||oe===sl||oe===rl,Ae=Se.getClearColor(),Ee=Se.getClearAlpha(),Fe=Ae.r,He=Ae.g,Re=Ae.b;xe?(g[0]=Fe,g[1]=He,g[2]=Re,g[3]=Ee,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Fe,_[1]=He,_[2]=Re,_[3]=Ee,C.clearBufferiv(C.COLOR,0,_))}else W|=C.COLOR_BUFFER_BIT}O&&(W|=C.DEPTH_BUFFER_BIT),G&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),ae.dispose(),Ne.dispose(),be.dispose(),M.dispose(),B.dispose(),z.dispose(),tt.dispose(),N.dispose(),se.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Jl),Y.removeEventListener("sessionend",jl),Si.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let b=qe.autoReset,O=de.enabled,G=de.autoUpdate,W=de.needsUpdate,F=de.type;pe(),qe.autoReset=b,de.enabled=O,de.autoUpdate=G,de.needsUpdate=W,de.type=F}function _e(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){let O=b.target;O.removeEventListener("dispose",Ve),Mt(O)}function Mt(b){Nt(b),be.remove(b)}function Nt(b){let O=be.get(b).programs;O!==void 0&&(O.forEach(function(G){se.releaseProgram(G)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,G,W,F,oe){O===null&&(O=ot);let xe=F.isMesh&&F.matrixWorld.determinant()<0,Ae=Rd(b,O,G,W,F);ue.setMaterial(W,xe);let Ee=G.index,Fe=1;if(W.wireframe===!0){if(Ee=U.getWireframeAttribute(G),Ee===void 0)return;Fe=2}let He=G.drawRange,Re=G.attributes.position,je=He.start*Fe,ut=(He.start+He.count)*Fe;oe!==null&&(je=Math.max(je,oe.start*Fe),ut=Math.min(ut,(oe.start+oe.count)*Fe)),Ee!==null?(je=Math.max(je,0),ut=Math.min(ut,Ee.count)):Re!=null&&(je=Math.max(je,0),ut=Math.min(ut,Re.count));let pt=ut-je;if(pt<0||pt===1/0)return;tt.setup(F,W,Ae,G,Ee);let Wt,it=te;if(Ee!==null&&(Wt=E.get(Ee),it=De,it.setIndex(Wt)),F.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*ee()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(F.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),ue.setLineWidth(Ie*ee()),F.isLineSegments?it.setMode(C.LINES):F.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP)}else F.isPoints?it.setMode(C.POINTS):F.isSprite&&it.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ie=F._multiDrawStarts,Dn=F._multiDrawCounts,st=F._multiDrawCount,gn=Ee?E.get(Ee).bytesPerElement:1,Vi=be.get(W).currentProgram.getUniforms();for(let Jt=0;Jt<st;Jt++)Vi.setValue(C,"_gl_DrawID",Jt),it.render(Ie[Jt]/gn,Dn[Jt])}else if(F.isInstancedMesh)it.renderInstances(je,pt,F.count);else if(G.isInstancedBufferGeometry){let Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Dn=Math.min(G.instanceCount,Ie);it.renderInstances(je,pt,Dn)}else it.render(je,pt)};function at(b,O,G){b.transparent===!0&&b.side===ft&&b.forceSinglePass===!1?(b.side=qt,b.needsUpdate=!0,wr(b,O,G),b.side=En,b.needsUpdate=!0,wr(b,O,G),b.side=ft):wr(b,O,G)}this.compile=function(b,O,G=null){G===null&&(G=b),p=Ne.get(G),p.init(O),y.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==G&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let W=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let oe=F.material;if(oe)if(Array.isArray(oe))for(let xe=0;xe<oe.length;xe++){let Ae=oe[xe];at(Ae,G,F),W.add(Ae)}else at(oe,G,F),W.add(oe)}),y.pop(),p=null,W},this.compileAsync=function(b,O,G=null){let W=this.compile(b,O,G);return new Promise(F=>{function oe(){if(W.forEach(function(xe){be.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){F(b);return}setTimeout(oe,10)}Me.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let mn=null;function Ln(b){mn&&mn(b)}function Jl(){Si.stop()}function jl(){Si.start()}let Si=new Zu;Si.setAnimationLoop(Ln),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){mn=b,Y.setAnimationLoop(b),b===null?Si.stop():Si.start()},Y.addEventListener("sessionstart",Jl),Y.addEventListener("sessionend",jl),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,D),p=Ne.get(b,y.length),p.init(O),y.push(p),Pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Pe),Te=this.localClippingEnabled,ie=$.init(this.clippingPlanes,Te),m=ae.get(b,T.length),m.init(),T.push(m),Y.enabled===!0&&Y.isPresenting===!0){let oe=x.xr.getDepthSensingMesh();oe!==null&&Qo(oe,O,-1/0,x.sortObjects)}Qo(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,me),We=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,We&&Se.addToRenderList(m,b),this.info.render.frame++,ie===!0&&$.beginShadows();let G=p.state.shadowsArray;de.render(G,b,O),ie===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){let oe=O.cameras;if(F.length>0)for(let xe=0,Ae=oe.length;xe<Ae;xe++){let Ee=oe[xe];eh(W,F,b,Ee)}We&&Se.render(b);for(let xe=0,Ae=oe.length;xe<Ae;xe++){let Ee=oe[xe];Ql(m,b,Ee,Ee.viewport)}}else F.length>0&&eh(W,F,b,O),We&&Se.render(b),Ql(m,b,O);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(x,b,O),tt.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],ie===!0&&$.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Qo(b,O,G,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){W&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);let xe=z.update(b),Ae=b.material;Ae.visible&&m.push(b,xe,Ae,G,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){let xe=z.update(b),Ae=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),ke.copy(xe.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(Ae)){let Ee=xe.groups;for(let Fe=0,He=Ee.length;Fe<He;Fe++){let Re=Ee[Fe],je=Ae[Re.materialIndex];je&&je.visible&&m.push(b,xe,je,G,ke.z,Re)}}else Ae.visible&&m.push(b,xe,Ae,G,ke.z,null)}}let oe=b.children;for(let xe=0,Ae=oe.length;xe<Ae;xe++)Qo(oe[xe],O,G,W)}function Ql(b,O,G,W){let F=b.opaque,oe=b.transmissive,xe=b.transparent;p.setupLightsView(G),ie===!0&&$.setGlobalState(x.clippingPlanes,G),W&&ue.viewport(L.copy(W)),F.length>0&&Tr(F,O,G),oe.length>0&&Tr(oe,O,G),xe.length>0&&Tr(xe,O,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function eh(b,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new qn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?pr:Xn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let oe=p.state.transmissionRenderTarget[W.id],xe=W.viewport||L;oe.setSize(xe.z,xe.w);let Ae=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(V),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),We&&Se.render(G);let Ee=x.toneMapping;x.toneMapping=hi;let Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),ie===!0&&$.setGlobalState(x.clippingPlanes,W),Tr(b,G,W),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe),Me.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Re=0,je=O.length;Re<je;Re++){let ut=O[Re],pt=ut.object,Wt=ut.geometry,it=ut.material,Ie=ut.group;if(it.side===ft&&pt.layers.test(W.layers)){let Dn=it.side;it.side=qt,it.needsUpdate=!0,th(pt,G,W,Wt,it,Ie),it.side=Dn,it.needsUpdate=!0,He=!0}}He===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ae),x.setClearColor(V,K),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=Ee}function Tr(b,O,G){let W=O.isScene===!0?O.overrideMaterial:null;for(let F=0,oe=b.length;F<oe;F++){let xe=b[F],Ae=xe.object,Ee=xe.geometry,Fe=W===null?xe.material:W,He=xe.group;Ae.layers.test(G.layers)&&th(Ae,O,G,Ee,Fe,He)}}function th(b,O,G,W,F,oe){b.onBeforeRender(x,O,G,W,F,oe),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,O,G,W,b,oe),F.transparent===!0&&F.side===ft&&F.forceSinglePass===!1?(F.side=qt,F.needsUpdate=!0,x.renderBufferDirect(G,O,W,F,b,oe),F.side=En,F.needsUpdate=!0,x.renderBufferDirect(G,O,W,F,b,oe),F.side=ft):x.renderBufferDirect(G,O,W,F,b,oe),b.onAfterRender(x,O,G,W,F,oe)}function wr(b,O,G){O.isScene!==!0&&(O=ot);let W=be.get(b),F=p.state.lights,oe=p.state.shadowsArray,xe=F.state.version,Ae=se.getParameters(b,F.state,oe,O,G),Ee=se.getProgramCacheKey(Ae),Fe=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?B:M).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Ve),Fe=new Map,W.programs=Fe);let He=Fe.get(Ee);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===xe)return ih(b,Ae),He}else Ae.uniforms=se.getUniforms(b),b.onBeforeCompile(Ae,x),He=se.acquireProgram(Ae,Ee),Fe.set(Ee,He),W.uniforms=Ae.uniforms;let Re=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=$.uniform),ih(b,Ae),W.needsLights=Id(b),W.lightsStateVersion=xe,W.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function nh(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=ls.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ih(b,O){let G=be.get(b);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Rd(b,O,G,W,F){O.isScene!==!0&&(O=ot),w.resetTextureUnits();let oe=O.fog,xe=W.isMeshStandardMaterial?O.environment:null,Ae=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:zt,Ee=(W.isMeshStandardMaterial?B:M).get(W.envMap||xe),Fe=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,ut=!!G.morphAttributes.color,pt=hi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=x.toneMapping);let Wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=Wt!==void 0?Wt.length:0,Ie=be.get(W),Dn=p.state.lights;if(ie===!0&&(Te===!0||b!==v)){let rn=b===v&&W.id===S;$.setState(W,b,rn)}let st=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Dn.state.version||Ie.outputColorSpace!==Ae||F.isBatchedMesh&&Ie.batching===!1||!F.isBatchedMesh&&Ie.batching===!0||F.isBatchedMesh&&Ie.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ie.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ie.instancing===!1||!F.isInstancedMesh&&Ie.instancing===!0||F.isSkinnedMesh&&Ie.skinning===!1||!F.isSkinnedMesh&&Ie.skinning===!0||F.isInstancedMesh&&Ie.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ie.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ie.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ie.instancingMorph===!1&&F.morphTexture!==null||Ie.envMap!==Ee||W.fog===!0&&Ie.fog!==oe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==$.numPlanes||Ie.numIntersection!==$.numIntersection)||Ie.vertexAlphas!==Fe||Ie.vertexTangents!==He||Ie.morphTargets!==Re||Ie.morphNormals!==je||Ie.morphColors!==ut||Ie.toneMapping!==pt||Ie.morphTargetsCount!==it)&&(st=!0):(st=!0,Ie.__version=W.version);let gn=Ie.currentProgram;st===!0&&(gn=wr(W,O,F));let Vi=!1,Jt=!1,Ps=!1,mt=gn.getUniforms(),Tn=Ie.uniforms;if(ue.useProgram(gn.program)&&(Vi=!0,Jt=!0,Ps=!0),W.id!==S&&(S=W.id,Jt=!0),Vi||v!==b){ue.buffers.depth.getReversed()?(le.copy(b.projectionMatrix),Of(le),Ff(le),mt.setValue(C,"projectionMatrix",le)):mt.setValue(C,"projectionMatrix",b.projectionMatrix),mt.setValue(C,"viewMatrix",b.matrixWorldInverse);let Qn=mt.map.cameraPosition;Qn!==void 0&&Qn.setValue(C,Ue.setFromMatrixPosition(b.matrixWorld)),ge.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Jt=!0,Ps=!0)}if(F.isSkinnedMesh){mt.setOptional(C,F,"bindMatrix"),mt.setOptional(C,F,"bindMatrixInverse");let rn=F.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),mt.setValue(C,"boneTexture",rn.boneTexture,w))}F.isBatchedMesh&&(mt.setOptional(C,F,"batchingTexture"),mt.setValue(C,"batchingTexture",F._matricesTexture,w),mt.setOptional(C,F,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",F._indirectTexture,w),mt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",F._colorsTexture,w));let Ls=G.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&ne.update(F,G,gn),(Jt||Ie.receiveShadow!==F.receiveShadow)&&(Ie.receiveShadow=F.receiveShadow,mt.setValue(C,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Tn.envMap.value=Ee,Tn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Tn.envMapIntensity.value=O.environmentIntensity),Jt&&(mt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Cd(Tn,Ps),oe&&W.fog===!0&&Q.refreshFogUniforms(Tn,oe),Q.refreshMaterialUniforms(Tn,W,X,j,p.state.transmissionRenderTarget[b.id]),ls.upload(C,nh(Ie),Tn,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ls.upload(C,nh(Ie),Tn,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(C,"center",F.center),mt.setValue(C,"modelViewMatrix",F.modelViewMatrix),mt.setValue(C,"normalMatrix",F.normalMatrix),mt.setValue(C,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let rn=W.uniformsGroups;for(let Qn=0,ei=rn.length;Qn<ei;Qn++){let sh=rn[Qn];N.update(sh,gn),N.bind(sh,gn)}}return gn}function Cd(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Id(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,O,G){be.get(b.texture).__webglTexture=O,be.get(b.depthTexture).__webglTexture=G;let W=be.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){let G=be.get(b);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,G=0){D=b,R=O,A=G;let W=!0,F=null,oe=!1,xe=!1;if(b){let Ee=be.get(b);if(Ee.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(Ee.__hasExternalTextures)w.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Re=b.depthTexture;if(Ee.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);let He=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[O])?F=He[O][G]:F=He[O],oe=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?F=be.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[G]:F=He,L.copy(b.viewport),H.copy(b.scissor),k=b.scissorTest}else L.copy(we).multiplyScalar(X).floor(),H.copy(ze).multiplyScalar(X).floor(),k=Je;if(ue.bindFramebuffer(C.FRAMEBUFFER,F)&&W&&ue.drawBuffers(b,F),ue.viewport(L),ue.scissor(H),ue.setScissorTest(k),oe){let Ee=be.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,G)}else if(xe){let Ee=be.get(b.texture),Fe=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,Fe)}S=-1},this.readRenderTargetPixels=function(b,O,G,W,F,oe,xe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){ue.bindFramebuffer(C.FRAMEBUFFER,Ae);try{let Ee=b.texture,Fe=Ee.format,He=Ee.type;if(!ge.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&G>=0&&G<=b.height-F&&C.readPixels(O,G,W,F,Oe.convert(Fe),Oe.convert(He),oe)}finally{let Ee=D!==null?be.get(D).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(b,O,G,W,F,oe,xe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(Ae=Ae[xe]),Ae){let Ee=b.texture,Fe=Ee.format,He=Ee.type;if(!ge.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-W&&G>=0&&G<=b.height-F){ue.bindFramebuffer(C.FRAMEBUFFER,Ae);let Re=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(O,G,W,F,Oe.convert(Fe),Oe.convert(He),0);let je=D!==null?be.get(D).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,je);let ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Nf(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Re),C.deleteSync(ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,G=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);let W=Math.pow(2,-G),F=Math.floor(b.image.width*W),oe=Math.floor(b.image.height*W),xe=O!==null?O.x:0,Ae=O!==null?O.y:0;w.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,G,0,0,xe,Ae,F,oe),ue.unbindTexture()},this.copyTextureToTexture=function(b,O,G=null,W=null,F=0){b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,G=null);let oe,xe,Ae,Ee,Fe,He,Re,je,ut,pt=b.isCompressedTexture?b.mipmaps[F]:b.image;G!==null?(oe=G.max.x-G.min.x,xe=G.max.y-G.min.y,Ae=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Fe=G.min.y,He=G.isBox3?G.min.z:0):(oe=pt.width,xe=pt.height,Ae=pt.depth||1,Ee=0,Fe=0,He=0),W!==null?(Re=W.x,je=W.y,ut=W.z):(Re=0,je=0,ut=0);let Wt=Oe.convert(O.format),it=Oe.convert(O.type),Ie;O.isData3DTexture?(w.setTexture3D(O,0),Ie=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Ie=C.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Ie=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let Dn=C.getParameter(C.UNPACK_ROW_LENGTH),st=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(C.UNPACK_SKIP_PIXELS),Vi=C.getParameter(C.UNPACK_SKIP_ROWS),Jt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,He);let Ps=b.isDataArrayTexture||b.isData3DTexture,mt=O.isDataArrayTexture||O.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let Tn=be.get(b),Ls=be.get(O),rn=be.get(Tn.__renderTarget),Qn=be.get(Ls.__renderTarget);ue.bindFramebuffer(C.READ_FRAMEBUFFER,rn.__webglFramebuffer),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ei=0;ei<Ae;ei++)Ps&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(b).__webglTexture,F,He+ei),b.isDepthTexture?(mt&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.get(O).__webglTexture,F,ut+ei),C.blitFramebuffer(Ee,Fe,oe,xe,Re,je,oe,xe,C.DEPTH_BUFFER_BIT,C.NEAREST)):mt?C.copyTexSubImage3D(Ie,F,Re,je,ut+ei,Ee,Fe,oe,xe):C.copyTexSubImage2D(Ie,F,Re,je,ut+ei,Ee,Fe,oe,xe);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ie,F,Re,je,ut,oe,xe,Ae,Wt,it,pt.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(Ie,F,Re,je,ut,oe,xe,Ae,Wt,pt.data):C.texSubImage3D(Ie,F,Re,je,ut,oe,xe,Ae,Wt,it,pt):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Re,je,oe,xe,Wt,it,pt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Re,je,pt.width,pt.height,Wt,pt.data):C.texSubImage2D(C.TEXTURE_2D,F,Re,je,oe,xe,Wt,it,pt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Dn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Jt),F===0&&O.generateMipmaps&&C.generateMipmap(Ie),ue.unbindTexture()},this.copyTextureToTexture3D=function(b,O,G=null,W=null,F=0){return b.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0),Vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,G,W,F)},this.initRenderTarget=function(b){be.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),ue.unbindTexture()},this.resetState=function(){R=0,A=0,D=null,ue.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var go=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new P,sr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ou=new P,au=new nt,cu=new nt,P_=new P,lu=new Be,qr=new P,Ea=new tn,hu=new Be,Ra=new Ni,Ss=class extends Ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(s),e.ray.intersectsSphere(Ea)!==!1&&(hu.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(hu),!(this.boundingBox!==null&&Ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===of?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;au.fromBufferAttribute(s.attributes.skinIndex,e),cu.fromBufferAttribute(s.attributes.skinWeight,e),ou.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=cu.getComponent(r);if(o!==0){let a=au.getComponent(r);lu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(P_.copy(ou).applyMatrix4(lu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},di=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_o=class extends Dt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bt,h=Bt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uu=new Be,L_=new Be,bs=class i{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:L_;uu.multiplyMatrices(a,t[r]),uu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _o(t,e,e,an,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new di),this.bones.push(o),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Oi=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ns=new Be,du=new Be,Yr=[],fu=new Yt,D_=new Be,Fs=new Ke,Bs=new tn,xo=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),fu.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(fu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Bs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),du.multiplyMatrices(n,ns),Fs.matrixWorld=du,Fs.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){let c=Yr[o];c.instanceId=r,c.object=this,t.push(c)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(s*this.count),s,this.count,ol,Mn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hn=class extends Zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yo=new P,vo=new P,pu=new Be,zs=new Ni,Zr=new tn,Ca=new P,mu=new P,nn=class extends vt{constructor(e=new xt,t=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yo.fromBufferAttribute(t,s-1),vo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yo.distanceTo(vo);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;pu.copy(s).invert(),zs.copy(e.ray).applyMatrix4(pu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=h.getX(_),T=h.getX(_+1),y=$r(this,e,zs,c,p,T);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=$r(this,e,zs,c,_,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){let p=$r(this,e,zs,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){let _=$r(this,e,zs,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function $r(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(yo.fromBufferAttribute(o,s),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(yo,vo,Ca,mu)>n)return;Ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ca);if(!(c<e.near||c>e.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new P,_u=new P,Mo=class extends nn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gu.fromBufferAttribute(t,s),_u.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(_u);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends nn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rr=class extends Zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xu=new Be,Uc=new Ni,Kr=new tn,Jr=new P,bo=class extends vt{constructor(e=new xt,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;xu.copy(s).invert(),Uc.copy(e.ray).applyMatrix4(xu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=l.getX(g);Jr.fromBufferAttribute(u,m),yu(Jr,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Jr.fromBufferAttribute(u,g),yu(Jr,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(i,e,t,n,s,r,o){let a=Uc.distanceSqToPoint(i);if(a<t){let c=new P;Uc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Rn=class extends Dt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ve:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,s=[],r=[],o=[],a=new P,c=new Be;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},or=class extends un{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Nc=class extends or{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var jr=new P,Ia=new dl,Pa=new dl,La=new dl,ar=class extends un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),l=jr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ia.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Pa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),La.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Pa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),La.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Ia.calc(c),Pa.calc(c),La.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function U_(i,e){let t=1-i;return t*t*e}function N_(i,e){return 2*(1-i)*i*e}function O_(i,e){return i*i*e}function Ys(i,e,t,n){return U_(i,e)+N_(i,t)+O_(i,n)}function F_(i,e){let t=1-i;return t*t*t*e}function B_(i,e){let t=1-i;return 3*t*t*i*e}function z_(i,e){return 3*(1-i)*i*i*e}function k_(i,e){return i*i*i*e}function Zs(i,e,t,n,s){return F_(i,e)+B_(i,t)+z_(i,n)+k_(i,s)}var To=class extends un{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oc=class extends un{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(e,s.x,r.x,o.x,a.x),Zs(e,s.y,r.y,o.y,a.y),Zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wo=class extends un{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends un{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ao=class extends un{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fi=class extends un{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(e,s.x,r.x,o.x),Ys(e,s.y,r.y,o.y),Ys(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vu(a,c.x,l.x,h.x,u.x),vu(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Bc=Object.freeze({__proto__:null,ArcCurve:Nc,CatmullRomCurve3:ar,CubicBezierCurve:To,CubicBezierCurve3:Oc,EllipseCurve:or,LineCurve:wo,LineCurve3:Fc,QuadraticBezierCurve:Ao,QuadraticBezierCurve3:fi,SplineCurve:Eo}),zc=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Bc[s.type]().fromJSON(s))}return this}},Ro=class extends zc{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wo(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ao(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new To(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new or(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var pi=class i extends xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function T(){let x=new P,I=new P,R=0,A=(t-e)/n;for(let D=0;D<=r;D++){let S=[],v=D/r,L=v*(t-e)+e;for(let H=0;H<=s;H++){let k=H/s,V=k*c+a,K=Math.sin(V),q=Math.cos(V);I.x=L*K,I.y=-v*n+m,I.z=L*q,u.push(I.x,I.y,I.z),x.set(K,A,q).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-v),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let v=_[S][D],L=_[S+1][D],H=_[S+1][D+1],k=_[S][D+1];(e>0||S!==0)&&(h.push(v,L,k),R+=3),(t>0||S!==r-1)&&(h.push(L,H,k),R+=3)}l.addGroup(p,R,0),p+=R}function y(x){let I=g,R=new ve,A=new P,D=0,S=x===!0?e:t,v=x===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let L=g;for(let H=0;H<=s;H++){let V=H/s*c+a,K=Math.cos(V),q=Math.sin(V);A.x=S*q,A.y=m*v,A.z=S*K,u.push(A.x,A.y,A.z),d.push(0,v,0),R.x=K*.5+.5,R.y=q*.5*v+.5,f.push(R.x,R.y),g++}for(let H=0;H<s;H++){let k=I+H,V=L+H;x===!0?h.push(V,V+1,k):h.push(V+1,V,k),D+=3}l.addGroup(p,D,x===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var cr=class extends Ro{constructor(e){super(e),this.uuid=cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ro().fromJSON(s))}return this}},V_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Qu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=q_(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return lr(r,o,t,a,c,f,0),o}};function Qu(i,e,t,n,s){let r,o;if(s===ix(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Mu(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Mu(r,i[r],i[r+1],o);return o&&Ho(o,o.next)&&(ur(o),o=o.next),o}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ho(t,t.next)||yt(t.prev,t,t.next)===0)){if(ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&J_(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?G_(i,n,s,r):H_(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ur(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=W_(Fi(i),e,t),lr(i,e,t,n,s,r,2)):o===2&&X_(i,e,t,n,s,r):lr(Fi(i),e,t,n,s,r,1);break}}}function H_(i){let e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&rs(s,a,r,c,o,l,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G_(i,e,t,n){let s=i.prev,r=i,o=i.next;if(yt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=kc(f,g,e,t,n),T=kc(_,m,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=T;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rs(a,h,c,u,l,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&rs(a,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&rs(a,h,c,u,l,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&rs(a,h,c,u,l,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function W_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Ho(s,r)&&ed(s,n,n.next,r)&&hr(s,r)&&hr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ur(n),ur(n.next),n=i=r),n=n.next}while(n!==i);return Fi(n)}function X_(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ex(o,a)){let c=td(o,a);o=Fi(o,o.next),c=Fi(c,c.next),lr(o,e,t,n,s,r,0),lr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function q_(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Qu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Q_(l));for(s.sort(Y_),r=0;r<s.length;r++)t=Z_(s[r],t);return t}function Y_(i,e){return i.x-e.x}function Z_(i,e){let t=$_(i,e);if(!t)return e;let n=td(t,i);return Fi(n,n.next),Fi(t,t.next)}function $_(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&rs(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),hr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&K_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function K_(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function J_(i,e,t,n){let s=i;do s.z===0&&(s.z=kc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,j_(s)}function j_(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function kc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Q_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ex(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!tx(i,e)&&(hr(i,e)&&hr(e,i)&&nx(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||Ho(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ho(i,e){return i.x===e.x&&i.y===e.y}function ed(i,e,t,n){let s=eo(yt(i,e,t)),r=eo(yt(i,e,n)),o=eo(yt(t,n,i)),a=eo(yt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qr(i,t,e)||r===0&&Qr(i,n,e)||o===0&&Qr(t,i,n)||a===0&&Qr(t,e,n))}function Qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function eo(i){return i>0?1:i<0?-1:0}function tx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ed(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hr(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function nx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function td(i,e){let t=new Vc(i.i,i.x,i.y),n=new Vc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mu(i,e,t,n){let s=new Vc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ix(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $s=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Su(e),bu(n,e);let o=e.length;t.forEach(Su);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,bu(n,t[c]);let a=V_.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Su(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Co=class i extends xt{constructor(e=new cr([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(o,2));function l(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;$s.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];$s.isClockWise(T)===!0&&(g[m]=T.reverse())}let _=$s.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){let T=_[m],y=T[0]+u,x=T[1]+u,I=T[2]+u;n.push(y,x,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return sx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function sx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Cn=class i extends xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let T=[],y=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){let R=I/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+x,1-y),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let y=h[p][T+1],x=h[p][T],I=h[p+1][T],R=h[p+1][T+1];(p!==0||o>0)&&f.push(y,x,R),(p!==n-1||c<Math.PI)&&f.push(x,I,R)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Io=class i extends xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Po=class i extends xt{constructor(e=new fi(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,c=new P,l=new ve,h=new P,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),T(),p()}function m(y){h=e.getPointAt(y/t,h);let x=o.normals[y],I=o.binormals[y];for(let R=0;R<=s;R++){let A=R/s*Math.PI*2,D=Math.sin(A),S=-Math.cos(A);c.x=S*x.x+D*I.x,c.y=S*x.y+D*I.y,c.z=S*x.z+D*I.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){let I=(s+1)*(y-1)+(x-1),R=(s+1)*y+(x-1),A=(s+1)*y+x,D=(s+1)*(y-1)+x;g.push(I,R,D),g.push(R,A,D)}}function T(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Bc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Lo=class extends Zt{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ct=class extends Zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gu,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ut=class extends Ct{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function to(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ox(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tu(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function nd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Hc=class extends mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=e,a=2*t-n;break;case dh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uh:o=e,c=2*n-t;break;case dh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+T*o[l+I]+y*o[c+I]+x*o[u+I];return r}},Gc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Wc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&rx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=gs;var gi=class extends dn{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=ms;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends dn{};Do.prototype.ValueTypeName="color";var Yn=class extends dn{};Yn.prototype.ValueTypeName="number";var Xc=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)en.slerpFlat(r,0,o,l-a,o,l,c);return r}},Sn=class extends dn{InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}};Sn.prototype.ValueTypeName="quaternion";Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends dn{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=ms;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends dn{};Zn.prototype.ValueTypeName="vector";var Bi=class{constructor(e="",t=-1,n=[],s=af){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=cn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=ox(c);c=Tu(c,1,h),l=Tu(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Yn(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];nd(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){let y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Yn(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(Zn,f+".position",d,"pos",s),n(Sn,f+".quaternion",d,"rot",s),n(Zn,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ax(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return Zn;case"color":return Do;case"quaternion":return Sn;case"bool":case"boolean":return gi;case"string":return _i}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ax(i.type);if(i.times===void 0){let t=[],n=[];nd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},qc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},lx=new qc,$n=class{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};$n.DEFAULT_MATERIAL_NAME="__DEFAULT";var zn={},Yc=class extends Error{constructor(e,t){super(e),this.response=t}},dr=class extends $n{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ci.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(zn[e]!==void 0){zn[e].push({onLoad:t,onProgress:n,onError:s});return}zn[e]=[],zn[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=zn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){T();function T(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,A=h.length;R<A;R++){let D=h[R];D.onProgress&&D.onProgress(I)}p.enqueue(x),T()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Yc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ci.add(e,l);let h=zn[e];delete zn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete zn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Zc=class extends $n{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qs("img");function c(){h(),ci.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var Ts=class extends $n{constructor(e){super(e)}load(e,t,n,s){let r=new Dt,o=new Zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ws=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Uo=class extends ws{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Da=new Be,wu=new P,Au=new P,fr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(wu),Au.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Au),t.updateMatrixWorld(),Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$c=class extends fr{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=_s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},No=class extends ws{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $c}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Eu=new Be,ks=new P,Ua=new P,Kc=class extends fr{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(ks),Ua.copy(n.position),Ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ua),n.updateMatrixWorld(),s.makeTranslation(-ks.x,-ks.y,-ks.z),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu)}},Oo=class extends ws{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jc=class extends fr{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zi=class extends ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var xi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fo=class extends $n{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ci.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ci.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ci.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(e,c),r.manager.itemStart(e)}};var fl="\\[\\]\\.:\\/",hx=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",ux="[^"+fl.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",pl),fx=/(WCOD+)?/.source.replace("WCOD",ux),px=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),gx=new RegExp("^"+dx+fx+px+mx+"$"),_x=["material","materials","bones","map"],jc=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){let t=gx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=jc;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zx=new Float32Array(1);var Ru=new Be,As=class{constructor(e,t,n=0,s=1/0){this.ray=new Ni(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ru.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(e,t=!0,n=[]){return Qc(e,this,n,t),n.sort(Cu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Qc(e[s],this,n,t);return n.sort(Cu),n}};function Cu(i,e){return i.distance-e.distance}function Qc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Qc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var It=[{scene:1,title:"\u9526\u745F",sub:"\u4F59\u5BA3\u5747\u3001\u5218\u5609\u4E50",note:"\u4F59\u5BA3\u5747\uFF1A\u4ECE\u4E00\u58F0\u5F26\u54CD\u51FA\u53D1\uFF0C\u8FDB\u5165\u674E\u5546\u9690\u7684\u534E\u5E74\u3002\u5218\u5609\u4E50\uFF1A\u6CBF\u7740\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u6CEA\u4E0E\u7389\u70DF\uFF0C\u8BFB\u5230\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u3002",speaker:"\u4F59\u5BA3\u5747",source:"",eye:""},{scene:2,title:"\u58F0\u8D77\uFF0C\u534E\u5E74\u968F\u4E4B\u800C\u6765",eye:"\u4E00 \xB7 \u9898\u4E49\u4E0E\u8D77\u5174",note:`\u4F59\u5BA3\u5747\uFF1A\u9526\u745F\u662F\u4E00\u4EF6\u773C\u524D\u4E4B\u7269\uFF1B\u201C\u601D\u201D\u4F7F\u5B83\u6210\u4E3A\u901A\u5F80\u5F80\u6614\u7684\u5165\u53E3\u3002
\u9526\u745F\u4E0E\u8BD7\u9898
\u201C\u9526\u745F\u201D\u53D6\u81EA\u8D77\u53E5\u3002\u300A\u56DB\u5E93\u300B\u8BD7\u96C6\u63D0\u8981\u5C06\u5B83\u4E0E\u300A\u78A7\u57CE\u300B\u7B49\u6458\u9996\u4E8C\u5B57\u4E3A\u9898\u7684\u4F5C\u54C1\u5E76\u8BBA\u3002\u4E24\u5B57\u65E2\u6807\u8BC6\u4E00\u4EF6\u7CBE\u7F8E\u4E50\u5668\uFF0C\u4E5F\u5C06\u8BD7\u7684\u5F00\u7AEF\u5B89\u7F6E\u5728\u58F0\u97F3\u4E0E\u611F\u53D7\u4E4B\u95F4\u3002
\u9996\u53E5\u5148\u5199\u5668\u7269\uFF0C\u6B21\u53E5\u4FBF\u7531\u5F26\u67F1\u8F6C\u5165\u534E\u5E74\u3002\u8BD7\u610F\u5728\u8FD9\u4E00\u8F6C\u6298\u4E2D\uFF0C\u4ECE\u53EF\u89C1\u7684\u7ED3\u6784\u8D70\u5411\u5185\u5728\u7684\u751F\u547D\u7ECF\u9A8C\u3002
\u201C\u601D\u201D\u7684\u8F6C\u63A5
\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u4ECD\u5728\u63CF\u5199\u745F\uFF0C\u201C\u601D\u534E\u5E74\u201D\u5374\u628A\u8BFB\u8005\u5E26\u5165\u56DE\u671B\u3002\u58F0\u97F3\u89E6\u52A8\u611F\u53D7\uFF0C\u5668\u7269\u9042\u6210\u4E3A\u8BB0\u5FC6\u7684\u89E6\u5A92\u3002
\u8D77\u5174\u7684\u529B\u91CF\u6B63\u5728\u4E8E\u8FD9\u79CD\u7531\u7269\u53CA\u60C5\uFF1A\u773C\u524D\u7684\u4E00\u58F0\u5F26\u54CD\uFF0C\u7275\u52A8\u7684\u662F\u5DF2\u7ECF\u901D\u53BB\u3001\u4ECD\u6709\u4F59\u97F3\u7684\u5E74\u534E\u3002`,speaker:"\u4F59\u5BA3\u5747",body:'<p class="argument">\u9526\u745F\u662F\u4E00\u4EF6\u773C\u524D\u4E4B\u7269\uFF1B\u201C\u601D\u201D\u4F7F\u5B83\u6210\u4E3A\u901A\u5F80\u5F80\u6614\u7684\u5165\u53E3\u3002</p><div class="critical-columns"><section><h2>\u9526\u745F\u4E0E\u8BD7\u9898</h2><p>\u201C\u9526\u745F\u201D\u53D6\u81EA\u8D77\u53E5\u3002\u300A\u56DB\u5E93\u300B\u8BD7\u96C6\u63D0\u8981\u5C06\u5B83\u4E0E\u300A\u78A7\u57CE\u300B\u7B49\u6458\u9996\u4E8C\u5B57\u4E3A\u9898\u7684\u4F5C\u54C1\u5E76\u8BBA\u3002\u4E24\u5B57\u65E2\u6807\u8BC6\u4E00\u4EF6\u7CBE\u7F8E\u4E50\u5668\uFF0C\u4E5F\u5C06\u8BD7\u7684\u5F00\u7AEF\u5B89\u7F6E\u5728\u58F0\u97F3\u4E0E\u611F\u53D7\u4E4B\u95F4\u3002</p><p>\u9996\u53E5\u5148\u5199\u5668\u7269\uFF0C\u6B21\u53E5\u4FBF\u7531\u5F26\u67F1\u8F6C\u5165\u534E\u5E74\u3002\u8BD7\u610F\u5728\u8FD9\u4E00\u8F6C\u6298\u4E2D\uFF0C\u4ECE\u53EF\u89C1\u7684\u7ED3\u6784\u8D70\u5411\u5185\u5728\u7684\u751F\u547D\u7ECF\u9A8C\u3002</p></section><section><h2>\u201C\u601D\u201D\u7684\u8F6C\u63A5</h2><p>\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u4ECD\u5728\u63CF\u5199\u745F\uFF0C\u201C\u601D\u534E\u5E74\u201D\u5374\u628A\u8BFB\u8005\u5E26\u5165\u56DE\u671B\u3002\u58F0\u97F3\u89E6\u52A8\u611F\u53D7\uFF0C\u5668\u7269\u9042\u6210\u4E3A\u8BB0\u5FC6\u7684\u89E6\u5A92\u3002</p><p>\u8D77\u5174\u7684\u529B\u91CF\u6B63\u5728\u4E8E\u8FD9\u79CD\u7531\u7269\u53CA\u60C5\uFF1A\u773C\u524D\u7684\u4E00\u58F0\u5F26\u54CD\uFF0C\u7275\u52A8\u7684\u662F\u5DF2\u7ECF\u901D\u53BB\u3001\u4ECD\u6709\u4F59\u97F3\u7684\u5E74\u534E\u3002</p></section></div>',source:"\u300A\u56DB\u5E93\u300B\u63D0\u8981 S15\uFF1B\u539F\u8BD7 S7",layout:"annotated",variant:"scholarly"},{scene:2,title:"\u4F17\u5F26\u4E0E\u7E41\u601D",eye:"\u4E00 \xB7 \u6570\u91CF\u3001\u4F20\u8BF4\u4E0E\u9610\u91CA",note:`\u4F59\u5BA3\u5747\uFF1A\u201C\u4E94\u5341\u201D\u94FA\u5F00\u6570\u91CF\uFF0C\u201C\u4E00\u2026\u2026\u4E00\u2026\u2026\u201D\u5C06\u7E41\u590D\u4E4B\u58F0\u9010\u4E00\u6536\u8FDB\u8FFD\u5FC6\u3002
\u7531\u591A\u5230\u4E00
\u201C\u4E94\u5341\u5F26\u201D\u5148\u7ED9\u51FA\u4F17\u591A\u5F26\u58F0\u7684\u60F3\u8C61\uFF0C\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u518D\u8BA9\u6BCF\u4E00\u5904\u7EC6\u8282\u83B7\u5F97\u91CD\u91CF\u3002\u603B\u6570\u4E0E\u590D\u6C93\u76F8\u5E94\uFF0C\u5F62\u6210\u7531\u7E41\u81F3\u5BC6\u7684\u542C\u89C9\u5C42\u6B21\u3002
\u5F53\u6BCF\u6839\u5F26\u90FD\u4E0E\u201C\u601D\u201D\u76F8\u8FDE\uFF0C\u6570\u91CF\u4FBF\u8F6C\u6210\u60C5\u7EEA\u7684\u5BC6\u5EA6\uFF1A\u6240\u611F\u8D8A\u591A\uFF0C\u56DE\u671B\u4E5F\u8D8A\u6DF1\u3002
\u6570\u76EE\u4E2D\u7684\u6587\u5316\u8BB0\u5FC6
\u7D20\u5973\u9F13\u4E94\u5341\u5F26\u745F\u7684\u4F20\u8BF4\uFF0C\u4E3A\u8FD9\u4E00\u6570\u76EE\u6DFB\u4E0A\u60B2\u97F3\u7684\u8272\u5F69\u3002\u8BD7\u5728\u4E03\u5B57\u4E2D\u540C\u65F6\u8C03\u52A8\u5668\u7269\u7684\u5F62\u8C61\u4E0E\u53E4\u8001\u6545\u4E8B\u7684\u4F59\u97F5\u3002
\u4E8E\u662F\uFF0C\u201C\u4E94\u5341\u201D\u5177\u6709\u4E24\u5C42\u4F5C\u7528\uFF1A\u5B83\u5199\u51FA\u5F26\u5217\u7684\u7E41\u590D\uFF0C\u4E5F\u9884\u5148\u5F15\u51FA\u534E\u5E74\u4E2D\u4EA4\u7EC7\u7684\u559C\u60A6\u3001\u671F\u5F85\u4E0E\u6005\u60D8\u3002`,speaker:"\u4F59\u5BA3\u5747",body:'<p class="argument">\u201C\u4E94\u5341\u201D\u94FA\u5F00\u6570\u91CF\uFF0C\u201C\u4E00\u2026\u2026\u4E00\u2026\u2026\u201D\u5C06\u7E41\u590D\u4E4B\u58F0\u9010\u4E00\u6536\u8FDB\u8FFD\u5FC6\u3002</p><div class="critical-columns"><section><h2>\u7531\u591A\u5230\u4E00</h2><p>\u201C\u4E94\u5341\u5F26\u201D\u5148\u7ED9\u51FA\u4F17\u591A\u5F26\u58F0\u7684\u60F3\u8C61\uFF0C\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u518D\u8BA9\u6BCF\u4E00\u5904\u7EC6\u8282\u83B7\u5F97\u91CD\u91CF\u3002\u603B\u6570\u4E0E\u590D\u6C93\u76F8\u5E94\uFF0C\u5F62\u6210\u7531\u7E41\u81F3\u5BC6\u7684\u542C\u89C9\u5C42\u6B21\u3002</p><p>\u5F53\u6BCF\u6839\u5F26\u90FD\u4E0E\u201C\u601D\u201D\u76F8\u8FDE\uFF0C\u6570\u91CF\u4FBF\u8F6C\u6210\u60C5\u7EEA\u7684\u5BC6\u5EA6\uFF1A\u6240\u611F\u8D8A\u591A\uFF0C\u56DE\u671B\u4E5F\u8D8A\u6DF1\u3002</p></section><section><h2>\u6570\u76EE\u4E2D\u7684\u6587\u5316\u8BB0\u5FC6</h2><p>\u7D20\u5973\u9F13\u4E94\u5341\u5F26\u745F\u7684\u4F20\u8BF4\uFF0C\u4E3A\u8FD9\u4E00\u6570\u76EE\u6DFB\u4E0A\u60B2\u97F3\u7684\u8272\u5F69\u3002\u8BD7\u5728\u4E03\u5B57\u4E2D\u540C\u65F6\u8C03\u52A8\u5668\u7269\u7684\u5F62\u8C61\u4E0E\u53E4\u8001\u6545\u4E8B\u7684\u4F59\u97F5\u3002</p><p>\u4E8E\u662F\uFF0C\u201C\u4E94\u5341\u201D\u5177\u6709\u4E24\u5C42\u4F5C\u7528\uFF1A\u5B83\u5199\u51FA\u5F26\u5217\u7684\u7E41\u590D\uFF0C\u4E5F\u9884\u5148\u5F15\u51FA\u534E\u5E74\u4E2D\u4EA4\u7EC7\u7684\u559C\u60A6\u3001\u671F\u5F85\u4E0E\u6005\u60D8\u3002</p></section></div>',source:"\u539F\u8BD7 S7\uFF1B\u6731\u9E64\u9F84\u6CE8 S10",layout:"annotated",variant:"scholarly"},{scene:2,title:"\u5F26\u4E0E\u67F1\uFF1A\u58F0\u7684\u5F62\u72B6",eye:"\u4E00 \xB7 \u8BC1\u636E\u7684\u5C42\u7EA7",body:'<p class="argument">\u5F26\u5217\u3001\u652F\u67F1\u4E0E\u745F\u4F53\uFF0C\u4F7F\u58F0\u97F3\u62E5\u6709\u53EF\u4EE5\u770B\u89C1\u7684\u7ED3\u6784\u3002</p><div class="critical-columns"><section><h2>\u5668\u7269\u7684\u79E9\u5E8F</h2><p>\u9A6C\u738B\u5806\u51FA\u571F\u7684\u4E8C\u5341\u4E94\u5F26\u745F\uFF0C\u7559\u4E0B\u4E86\u53E4\u745F\u5F62\u5236\u7684\u5B9E\u7269\u4F8B\u8BC1\u3002\u5F26\u6CBF\u5668\u8EAB\u6392\u5217\uFF0C\u67F1\u652F\u8D77\u5F26\u8EAB\uFF0C\u5668\u7269\u7684\u79E9\u5E8F\u4E0E\u58F0\u54CD\u7684\u53D1\u751F\u76F8\u4E92\u5173\u8054\u3002</p><p>\u8FD9\u4E00\u7ED3\u6784\u4F7F\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u683C\u5916\u5177\u4F53\uFF1A\u8BFB\u8005\u65E2\u542C\u89C1\u590D\u6C93\uFF0C\u4E5F\u4EFF\u4F5B\u770B\u89C1\u5F26\u4E0E\u67F1\u9010\u4E00\u76F8\u5BF9\u3002</p></section><section><h2>\u8BD7\u53E5\u7684\u8282\u594F</h2><p>\u8BD7\u4EBA\u5148\u4EE5\u201C\u4E94\u5341\u201D\u603B\u5199\uFF0C\u518D\u7528\u4E24\u4E2A\u201C\u4E00\u201D\u9010\u4E00\u5206\u914D\u3002\u5668\u7269\u7684\u6392\u5217\uFF0C\u56E0\u800C\u6210\u4E3A\u8FFD\u601D\u4E0D\u65AD\u53D1\u751F\u7684\u8282\u594F\u3002</p><p>\u201C\u601D\u534E\u5E74\u201D\u843D\u5728\u53E5\u672B\uFF0C\u628A\u8FD9\u4E9B\u7EC6\u5C0F\u3001\u91CD\u590D\u7684\u89E6\u52A8\u805A\u62E2\u8D77\u6765\uFF1A\u6BCF\u4E00\u5904\u58F0\u54CD\uFF0C\u90FD\u7275\u8FDE\u7740\u88AB\u73CD\u89C6\u7684\u5F80\u6614\u3002</p></section></div>',source:"\u9986\u85CF\u4E0E\u7814\u7A76 S1\u3001S2\uFF1B\u8BD7\u6587 S7",note:`\u4F59\u5BA3\u5747\uFF1A\u5F26\u5217\u3001\u652F\u67F1\u4E0E\u745F\u4F53\uFF0C\u4F7F\u58F0\u97F3\u62E5\u6709\u53EF\u4EE5\u770B\u89C1\u7684\u7ED3\u6784\u3002
\u5668\u7269\u7684\u79E9\u5E8F
\u9A6C\u738B\u5806\u51FA\u571F\u7684\u4E8C\u5341\u4E94\u5F26\u745F\uFF0C\u7559\u4E0B\u4E86\u53E4\u745F\u5F62\u5236\u7684\u5B9E\u7269\u4F8B\u8BC1\u3002\u5F26\u6CBF\u5668\u8EAB\u6392\u5217\uFF0C\u67F1\u652F\u8D77\u5F26\u8EAB\uFF0C\u5668\u7269\u7684\u79E9\u5E8F\u4E0E\u58F0\u54CD\u7684\u53D1\u751F\u76F8\u4E92\u5173\u8054\u3002
\u8FD9\u4E00\u7ED3\u6784\u4F7F\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u683C\u5916\u5177\u4F53\uFF1A\u8BFB\u8005\u65E2\u542C\u89C1\u590D\u6C93\uFF0C\u4E5F\u4EFF\u4F5B\u770B\u89C1\u5F26\u4E0E\u67F1\u9010\u4E00\u76F8\u5BF9\u3002
\u8BD7\u53E5\u7684\u8282\u594F
\u8BD7\u4EBA\u5148\u4EE5\u201C\u4E94\u5341\u201D\u603B\u5199\uFF0C\u518D\u7528\u4E24\u4E2A\u201C\u4E00\u201D\u9010\u4E00\u5206\u914D\u3002\u5668\u7269\u7684\u6392\u5217\uFF0C\u56E0\u800C\u6210\u4E3A\u8FFD\u601D\u4E0D\u65AD\u53D1\u751F\u7684\u8282\u594F\u3002
\u201C\u601D\u534E\u5E74\u201D\u843D\u5728\u53E5\u672B\uFF0C\u628A\u8FD9\u4E9B\u7EC6\u5C0F\u3001\u91CD\u590D\u7684\u89E6\u52A8\u805A\u62E2\u8D77\u6765\uFF1A\u6BCF\u4E00\u5904\u58F0\u54CD\uFF0C\u90FD\u7275\u8FDE\u7740\u88AB\u73CD\u89C6\u7684\u5F80\u6614\u3002`,speaker:"\u4F59\u5BA3\u5747",layout:"annotated",variant:"scholarly"},{scene:2,title:"\u4E94\u5341\u5F26\u4E2D\u7684\u60B2\u58F0",eye:"\u4E00 \xB7 \u7D20\u5973\u9F13\u745F\u7684\u6587\u5316\u8BB0\u5FC6",body:'<p class="argument">\u7D20\u5973\u9F13\u745F\u7684\u4F20\u8BF4\uFF0C\u8BA9\u5F26\u58F0\u5E26\u7740\u96BE\u4EE5\u6B62\u606F\u7684\u60C5\u7EEA\u3002</p><div class="critical-columns"><section><h2>\u7D20\u5973\u4E0E\u4E94\u5341\u5F26</h2><p>\u300A\u53F2\u8BB0\xB7\u5C01\u7985\u4E66\u300B\u8BB0\u7D20\u5973\u9F13\u4E94\u5341\u5F26\u745F\uFF0C\u58F0\u6781\u60B2\uFF0C\u5E1D\u7981\u4E0D\u6B62\u3002\u8FD9\u5219\u4F20\u8BF4\u628A\u4E94\u5341\u5F26\u4E0E\u60B2\u58F0\u8054\u7CFB\u8D77\u6765\uFF0C\u6210\u4E3A\u540E\u4E16\u8BD7\u6B4C\u53EF\u4EE5\u5524\u8D77\u7684\u6587\u5316\u8BB0\u5FC6\u3002</p><p>\u201C\u9526\u745F\u65E0\u7AEF\u4E94\u5341\u5F26\u201D\u7701\u53BB\u6545\u4E8B\u7684\u94FA\u53D9\uFF0C\u53EA\u7559\u4E0B\u4E00\u4E2A\u6570\u76EE\uFF0C\u8BA9\u60B2\u97F3\u5728\u8D77\u53E5\u4E2D\u6F5C\u4F0F\u3002</p></section><section><h2>\u60B2\u58F0\u8FDB\u5165\u8FFD\u5FC6</h2><p>\u4F20\u8BF4\u76F4\u8A00\u201C\u60B2\u201D\uFF0C\u8BD7\u53E5\u5219\u4EE5\u201C\u65E0\u7AEF\u201D\u8D77\u95EE\u3002\u60C5\u7EEA\u88AB\u79FB\u5411\u5668\u7269\uFF0C\u5C1A\u672A\u8BF4\u5C3D\u7684\u5FC3\u4E8B\u4FBF\u4ECE\u8BED\u6C14\u4E2D\u6D41\u9732\u3002</p><p>\u4E0B\u4E00\u53E5\u7684\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u63A5\u4F4F\u8FD9\u4EFD\u60C5\u7EEA\uFF1A\u4F17\u5F26\u50CF\u65E0\u6570\u89E6\u70B9\uFF0C\u4F7F\u534E\u5E74\u4E00\u518D\u8FD4\u56DE\uFF0C\u4E5F\u4F7F\u8FFD\u5FC6\u4E00\u518D\u52A0\u6DF1\u3002</p></section></div>',source:"\u300A\u53F2\u8BB0\xB7\u5C01\u7985\u4E66\u300BS3",note:`\u4F59\u5BA3\u5747\uFF1A\u7D20\u5973\u9F13\u745F\u7684\u4F20\u8BF4\uFF0C\u8BA9\u5F26\u58F0\u5E26\u7740\u96BE\u4EE5\u6B62\u606F\u7684\u60C5\u7EEA\u3002
\u7D20\u5973\u4E0E\u4E94\u5341\u5F26
\u300A\u53F2\u8BB0\xB7\u5C01\u7985\u4E66\u300B\u8BB0\u7D20\u5973\u9F13\u4E94\u5341\u5F26\u745F\uFF0C\u58F0\u6781\u60B2\uFF0C\u5E1D\u7981\u4E0D\u6B62\u3002\u8FD9\u5219\u4F20\u8BF4\u628A\u4E94\u5341\u5F26\u4E0E\u60B2\u58F0\u8054\u7CFB\u8D77\u6765\uFF0C\u6210\u4E3A\u540E\u4E16\u8BD7\u6B4C\u53EF\u4EE5\u5524\u8D77\u7684\u6587\u5316\u8BB0\u5FC6\u3002
\u201C\u9526\u745F\u65E0\u7AEF\u4E94\u5341\u5F26\u201D\u7701\u53BB\u6545\u4E8B\u7684\u94FA\u53D9\uFF0C\u53EA\u7559\u4E0B\u4E00\u4E2A\u6570\u76EE\uFF0C\u8BA9\u60B2\u97F3\u5728\u8D77\u53E5\u4E2D\u6F5C\u4F0F\u3002
\u60B2\u58F0\u8FDB\u5165\u8FFD\u5FC6
\u4F20\u8BF4\u76F4\u8A00\u201C\u60B2\u201D\uFF0C\u8BD7\u53E5\u5219\u4EE5\u201C\u65E0\u7AEF\u201D\u8D77\u95EE\u3002\u60C5\u7EEA\u88AB\u79FB\u5411\u5668\u7269\uFF0C\u5C1A\u672A\u8BF4\u5C3D\u7684\u5FC3\u4E8B\u4FBF\u4ECE\u8BED\u6C14\u4E2D\u6D41\u9732\u3002
\u4E0B\u4E00\u53E5\u7684\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u63A5\u4F4F\u8FD9\u4EFD\u60C5\u7EEA\uFF1A\u4F17\u5F26\u50CF\u65E0\u6570\u89E6\u70B9\uFF0C\u4F7F\u534E\u5E74\u4E00\u518D\u8FD4\u56DE\uFF0C\u4E5F\u4F7F\u8FFD\u5FC6\u4E00\u518D\u52A0\u6DF1\u3002`,speaker:"\u4F59\u5BA3\u5747",layout:"annotated",variant:"scholarly"},{scene:2,title:"\u201C\u65E0\u7AEF\u201D\u7684\u8BED\u6C14",eye:"\u4E00 \xB7 \u91CA\u8BCD\u3001\u8BED\u6C14\u4E0E\u4E3B\u5BA2\u5173\u7CFB",body:'<p class="argument">\u201C\u65E0\u7AEF\u201D\u628A\u4E00\u58F0\u57CB\u6028\u653E\u8FDB\u5668\u7269\u63CF\u5199\uFF1A\u504F\u504F\u662F\u8FD9\u8BB8\u591A\u5F26\uFF0C\u5904\u5904\u89E6\u52A8\u5F80\u4E8B\u3002</p><div class="critical-columns"><section><h2>\u5B57\u9762\u4E0E\u53E3\u543B</h2><p>\u201C\u65E0\u7AEF\u201D\u610F\u4E3A\u65E0\u6765\u7531\u3002\u7F6E\u4E8E\u201C\u9526\u745F\u201D\u4E0E\u201C\u4E94\u5341\u5F26\u201D\u4E4B\u95F4\uFF0C\u5B83\u5E26\u51FA\u4E00\u79CD\u4EB2\u6635\u53C8\u6005\u60D8\u7684\u5F52\u6028\uFF1A\u4E3A\u4F55\u504F\u504F\u6709\u8FD9\u8BB8\u591A\u5F26\uFF0C\u6765\u5524\u9192\u6211\uFF1F</p><p>\u4E3B\u4F53\u6CA1\u6709\u76F4\u63A5\u503E\u8BC9\uFF0C\u800C\u8BA9\u60C5\u7EEA\u9644\u7740\u5728\u745F\u4E0A\u3002\u8BED\u6C14\u8D8A\u8F7B\uFF0C\u80CC\u540E\u7684\u8FFD\u601D\u8D8A\u663E\u6DF1\u957F\u3002</p></section><section><h2>\u9996\u8054\u7684\u5185\u5728\u5F20\u529B</h2><p>\u4E0A\u53E5\u602A\u745F\u201C\u65E0\u7AEF\u201D\uFF0C\u4E0B\u53E5\u5374\u8BF4\u6BCF\u4E00\u5F26\u67F1\u90FD\u80FD\u5F15\u51FA\u534E\u5E74\u3002\u65E0\u6765\u7531\u7684\u53E3\u543B\u4E0E\u5904\u5904\u6709\u6240\u611F\uFF0C\u5728\u4E24\u53E5\u4E4B\u95F4\u76F8\u4E92\u7275\u52A8\u3002</p><p>\u8FD9\u79CD\u5F20\u529B\u8BA9\u9996\u8054\u8D85\u51FA\u7B80\u5355\u7684\u4F24\u901D\uFF1A\u8BB0\u5FC6\u6709\u7740\u6DF1\u5207\u7684\u6765\u5904\uFF0C\u60C5\u7EEA\u5374\u4ECD\u4EE5\u4E00\u58F0\u8FD1\u4E4E\u65E0\u7406\u7684\u8BD8\u95EE\u5F00\u59CB\u3002</p></section></div>',source:"\u539F\u8BD7 S7",note:`\u4F59\u5BA3\u5747\uFF1A\u201C\u65E0\u7AEF\u201D\u628A\u4E00\u58F0\u57CB\u6028\u653E\u8FDB\u5668\u7269\u63CF\u5199\uFF1A\u504F\u504F\u662F\u8FD9\u8BB8\u591A\u5F26\uFF0C\u5904\u5904\u89E6\u52A8\u5F80\u4E8B\u3002
\u5B57\u9762\u4E0E\u53E3\u543B
\u201C\u65E0\u7AEF\u201D\u610F\u4E3A\u65E0\u6765\u7531\u3002\u7F6E\u4E8E\u201C\u9526\u745F\u201D\u4E0E\u201C\u4E94\u5341\u5F26\u201D\u4E4B\u95F4\uFF0C\u5B83\u5E26\u51FA\u4E00\u79CD\u4EB2\u6635\u53C8\u6005\u60D8\u7684\u5F52\u6028\uFF1A\u4E3A\u4F55\u504F\u504F\u6709\u8FD9\u8BB8\u591A\u5F26\uFF0C\u6765\u5524\u9192\u6211\uFF1F
\u4E3B\u4F53\u6CA1\u6709\u76F4\u63A5\u503E\u8BC9\uFF0C\u800C\u8BA9\u60C5\u7EEA\u9644\u7740\u5728\u745F\u4E0A\u3002\u8BED\u6C14\u8D8A\u8F7B\uFF0C\u80CC\u540E\u7684\u8FFD\u601D\u8D8A\u663E\u6DF1\u957F\u3002
\u9996\u8054\u7684\u5185\u5728\u5F20\u529B
\u4E0A\u53E5\u602A\u745F\u201C\u65E0\u7AEF\u201D\uFF0C\u4E0B\u53E5\u5374\u8BF4\u6BCF\u4E00\u5F26\u67F1\u90FD\u80FD\u5F15\u51FA\u534E\u5E74\u3002\u65E0\u6765\u7531\u7684\u53E3\u543B\u4E0E\u5904\u5904\u6709\u6240\u611F\uFF0C\u5728\u4E24\u53E5\u4E4B\u95F4\u76F8\u4E92\u7275\u52A8\u3002
\u8FD9\u79CD\u5F20\u529B\u8BA9\u9996\u8054\u8D85\u51FA\u7B80\u5355\u7684\u4F24\u901D\uFF1A\u8BB0\u5FC6\u6709\u7740\u6DF1\u5207\u7684\u6765\u5904\uFF0C\u60C5\u7EEA\u5374\u4ECD\u4EE5\u4E00\u58F0\u8FD1\u4E4E\u65E0\u7406\u7684\u8BD8\u95EE\u5F00\u59CB\u3002`,speaker:"\u4F59\u5BA3\u5747",layout:"annotated",variant:"scholarly"},{scene:3,title:"\u4E00\u5F26\u4E00\u67F1\uFF0C\u9010\u4E00\u6210\u5FC6",eye:"\u4E8C \xB7 \u9996\u8054\u7684\u53E5\u6CD5\u4E0E\u7AE0\u6CD5",note:`\u5218\u5609\u4E50\uFF1A\u201C\u4E00\u2026\u2026\u4E00\u2026\u2026\u201D\u628A\u603B\u4F53\u7684\u6000\u60F3\u62C6\u6210\u7EC6\u5FAE\u800C\u53CD\u590D\u7684\u89E6\u52A8\u3002
\u590D\u6C93\u7684\u529B\u91CF
\u4E24\u4E2A\u201C\u4E00\u201D\u5C06\u5F26\u4E0E\u67F1\u9010\u4E00\u63D0\u51FA\uFF0C\u5F62\u6210\u5206\u914D\u3001\u904D\u6307\u7684\u610F\u5473\u3002\u5B83\u4E0E\u201C\u4E94\u5341\u201D\u7684\u603B\u6570\u76F8\u5BF9\uFF0C\u4F7F\u6BCF\u4E00\u58F0\u3001\u6BCF\u4E00\u5904\u7ED3\u6784\u90FD\u663E\u5F97\u503C\u5F97\u505C\u7559\u3002
\u201C\u601D\u201D\u5728\u8FD9\u91CC\u5B8C\u6210\u8F6C\u63A5\uFF1A\u5916\u7269\u7684\u58F0\u54CD\u8FDB\u5165\u5185\u5FC3\uFF0C\u6210\u4E3A\u56DE\u671B\u5E74\u534E\u7684\u52A8\u4F5C\u3002
\u201C\u534E\u201D\u7684\u4EF7\u503C
\u201C\u534E\u5E74\u201D\u5E26\u7740\u7F8E\u597D\u4E0E\u73CD\u60DC\u7684\u8BC4\u4EF7\u3002\u5E74\u534E\u4E4B\u6240\u4EE5\u4EE4\u4EBA\u8FFD\u5FC6\uFF0C\u662F\u56E0\u4E3A\u5176\u4E2D\u66FE\u6709\u624D\u534E\u3001\u7406\u60F3\u3001\u53D7\u77E5\u4E0E\u6DF1\u60C5\u3002
\u4E2D\u95F4\u56DB\u53E5\u7531\u6B64\u5C55\u5F00\u534E\u5E74\u7684\u4E0D\u540C\u8D28\u5730\uFF1A\u7F8E\u597D\u5982\u68A6\uFF0C\u5FC3\u610F\u6709\u6258\uFF0C\u73CD\u7269\u542B\u6CEA\uFF0C\u7389\u6C14\u5982\u70DF\u3002\u5C3E\u8054\u518D\u628A\u5B83\u4EEC\u6536\u62E2\u4E3A\u201C\u6B64\u60C5\u201D\u3002`,speaker:"\u5218\u5609\u4E50",body:'<p class="argument">\u201C\u4E00\u2026\u2026\u4E00\u2026\u2026\u201D\u628A\u603B\u4F53\u7684\u6000\u60F3\u62C6\u6210\u7EC6\u5FAE\u800C\u53CD\u590D\u7684\u89E6\u52A8\u3002</p><div class="critical-columns"><section><h2>\u590D\u6C93\u7684\u529B\u91CF</h2><p>\u4E24\u4E2A\u201C\u4E00\u201D\u5C06\u5F26\u4E0E\u67F1\u9010\u4E00\u63D0\u51FA\uFF0C\u5F62\u6210\u5206\u914D\u3001\u904D\u6307\u7684\u610F\u5473\u3002\u5B83\u4E0E\u201C\u4E94\u5341\u201D\u7684\u603B\u6570\u76F8\u5BF9\uFF0C\u4F7F\u6BCF\u4E00\u58F0\u3001\u6BCF\u4E00\u5904\u7ED3\u6784\u90FD\u663E\u5F97\u503C\u5F97\u505C\u7559\u3002</p><p>\u201C\u601D\u201D\u5728\u8FD9\u91CC\u5B8C\u6210\u8F6C\u63A5\uFF1A\u5916\u7269\u7684\u58F0\u54CD\u8FDB\u5165\u5185\u5FC3\uFF0C\u6210\u4E3A\u56DE\u671B\u5E74\u534E\u7684\u52A8\u4F5C\u3002</p></section><section><h2>\u201C\u534E\u201D\u7684\u4EF7\u503C</h2><p>\u201C\u534E\u5E74\u201D\u5E26\u7740\u7F8E\u597D\u4E0E\u73CD\u60DC\u7684\u8BC4\u4EF7\u3002\u5E74\u534E\u4E4B\u6240\u4EE5\u4EE4\u4EBA\u8FFD\u5FC6\uFF0C\u662F\u56E0\u4E3A\u5176\u4E2D\u66FE\u6709\u624D\u534E\u3001\u7406\u60F3\u3001\u53D7\u77E5\u4E0E\u6DF1\u60C5\u3002</p><p>\u4E2D\u95F4\u56DB\u53E5\u7531\u6B64\u5C55\u5F00\u534E\u5E74\u7684\u4E0D\u540C\u8D28\u5730\uFF1A\u7F8E\u597D\u5982\u68A6\uFF0C\u5FC3\u610F\u6709\u6258\uFF0C\u73CD\u7269\u542B\u6CEA\uFF0C\u7389\u6C14\u5982\u70DF\u3002\u5C3E\u8054\u518D\u628A\u5B83\u4EEC\u6536\u62E2\u4E3A\u201C\u6B64\u60C5\u201D\u3002</p></section></div>',source:"\u539F\u8BD7 S7",layout:"annotated",variant:"scholarly"},{scene:3,title:"\u6587\u624D\u4E0E\u53D7\u77E5",eye:"\u4E8C \xB7 \u751F\u5E73\u6750\u6599\u5982\u4F55\u53C2\u4E0E\u9605\u8BFB",body:'<p class="argument">\u4EE4\u72D0\u695A\u7684\u8D4F\u8BC6\uFF0C\u4F7F\u6587\u5B66\u624D\u80FD\u4E0E\u4EBA\u751F\u671F\u5F85\u5728\u9752\u5E74\u674E\u5546\u9690\u8EAB\u4E0A\u76F8\u9022\u3002</p><div class="critical-columns"><section><h2>\u6587\u624D\u521D\u5C55</h2><p>\u300A\u65B0\u5510\u4E66\u300B\u8BB0\u5176\u6587\u5B66\u624D\u80FD\u53D7\u5230\u4EE4\u72D0\u695A\u8D4F\u8BC6\uFF0C\u5E76\u4ECE\u4E4B\u5B66\u4E60\u7AE0\u594F\u3002\u6587\u7AE0\u65E2\u662F\u4E2A\u4EBA\u624D\u534E\u7684\u8868\u73B0\uFF0C\u4E5F\u6210\u4E3A\u8FDB\u5165\u516C\u5171\u751F\u6D3B\u7684\u4E00\u6761\u9053\u8DEF\u3002</p><p>\u53D7\u77E5\u7684\u7ECF\u9A8C\uFF0C\u4F7F\u4E3B\u4F53\u611F\u5230\u81EA\u8EAB\u4EF7\u503C\u5F97\u4EE5\u53D1\u73B0\uFF0C\u672A\u6765\u56E0\u800C\u663E\u51FA\u53EF\u4EE5\u671F\u5F85\u7684\u65B9\u5411\u3002</p></section><section><h2>\u56DE\u671B\u534E\u5E74</h2><p>\u201C\u534E\u5E74\u201D\u627F\u8F7D\u7740\u8FD9\u4EFD\u5E0C\u671B\u3002\u56DE\u5FC6\u4E2D\u7684\u5149\u4EAE\uFF0C\u6765\u81EA\u65F6\u95F4\u66FE\u7ECF\u5F00\u542F\u8FC7\u7684\u79CD\u79CD\u53EF\u80FD\u3002</p><p>\u5F53\u8BD7\u4ECE\u5F26\u58F0\u8FDB\u5165\u534E\u5E74\uFF0C\u624D\u534E\u4E0E\u53D7\u77E5\u4E5F\u6210\u4E3A\u6DF1\u5C42\u80CC\u666F\uFF1A\u7F8E\u597D\u7684\u81EA\u6211\u671F\u5F85\uFF0C\u4E0E\u540E\u6765\u7684\u6F02\u6CCA\u3001\u6005\u60D8\u76F8\u4E92\u6620\u7167\u3002</p></section></div>',source:"\u300A\u65B0\u5510\u4E66\u300BS4\uFF1B\u539F\u8BD7 S7",note:`\u5218\u5609\u4E50\uFF1A\u4EE4\u72D0\u695A\u7684\u8D4F\u8BC6\uFF0C\u4F7F\u6587\u5B66\u624D\u80FD\u4E0E\u4EBA\u751F\u671F\u5F85\u5728\u9752\u5E74\u674E\u5546\u9690\u8EAB\u4E0A\u76F8\u9022\u3002
\u6587\u624D\u521D\u5C55
\u300A\u65B0\u5510\u4E66\u300B\u8BB0\u5176\u6587\u5B66\u624D\u80FD\u53D7\u5230\u4EE4\u72D0\u695A\u8D4F\u8BC6\uFF0C\u5E76\u4ECE\u4E4B\u5B66\u4E60\u7AE0\u594F\u3002\u6587\u7AE0\u65E2\u662F\u4E2A\u4EBA\u624D\u534E\u7684\u8868\u73B0\uFF0C\u4E5F\u6210\u4E3A\u8FDB\u5165\u516C\u5171\u751F\u6D3B\u7684\u4E00\u6761\u9053\u8DEF\u3002
\u53D7\u77E5\u7684\u7ECF\u9A8C\uFF0C\u4F7F\u4E3B\u4F53\u611F\u5230\u81EA\u8EAB\u4EF7\u503C\u5F97\u4EE5\u53D1\u73B0\uFF0C\u672A\u6765\u56E0\u800C\u663E\u51FA\u53EF\u4EE5\u671F\u5F85\u7684\u65B9\u5411\u3002
\u56DE\u671B\u534E\u5E74
\u201C\u534E\u5E74\u201D\u627F\u8F7D\u7740\u8FD9\u4EFD\u5E0C\u671B\u3002\u56DE\u5FC6\u4E2D\u7684\u5149\u4EAE\uFF0C\u6765\u81EA\u65F6\u95F4\u66FE\u7ECF\u5F00\u542F\u8FC7\u7684\u79CD\u79CD\u53EF\u80FD\u3002
\u5F53\u8BD7\u4ECE\u5F26\u58F0\u8FDB\u5165\u534E\u5E74\uFF0C\u624D\u534E\u4E0E\u53D7\u77E5\u4E5F\u6210\u4E3A\u6DF1\u5C42\u80CC\u666F\uFF1A\u7F8E\u597D\u7684\u81EA\u6211\u671F\u5F85\uFF0C\u4E0E\u540E\u6765\u7684\u6F02\u6CCA\u3001\u6005\u60D8\u76F8\u4E92\u6620\u7167\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:3,title:"\u767B\u7B2C\u4E0E\u4EBA\u751F\u7684\u5C55\u5F00",eye:"\u4E8C \xB7 \u767B\u7B2C\u4E0E\u4EBA\u751F\u7684\u5C55\u5F00",body:'<p class="argument">\u5F00\u6210\u4E8C\u5E74\u767B\u7B2C\uFF0C\u8BA9\u534E\u5E74\u4E2D\u7684\u5E0C\u671B\u83B7\u5F97\u4E86\u4E00\u4E2A\u6E05\u6670\u8282\u70B9\u3002</p><div class="critical-columns"><section><h2>\u5F00\u6210\u4E8C\u5E74 \xB7 837</h2><p>\u300A\u65B0\u5510\u4E66\u300B\u8BB0\u674E\u5546\u9690\u5F00\u6210\u4E8C\u5E74\u767B\u8FDB\u58EB\u7B2C\u3002\u79D1\u4E3E\u7684\u5B9E\u73B0\uFF0C\u610F\u5473\u7740\u8EAB\u4EFD\u3001\u4EA4\u6E38\u4E0E\u4ED5\u8FDB\u673A\u4F1A\u7684\u6539\u53D8\u3002</p><p>\u57CE\u95E8\u3001\u699C\u7EB8\u4E0E\u8E0F\u51FA\u7684\u811A\u6B65\uFF0C\u6C47\u805A\u6210\u4E00\u6B21\u4EBA\u751F\u9053\u8DEF\u7684\u5F00\u542F\uFF1B\u5B83\u4E0E\u6B64\u524D\u7684\u6587\u624D\u53D7\u77E5\u524D\u540E\u76F8\u627F\u3002</p></section><section><h2>\u671F\u5F85\u4E0E\u60D8\u7136</h2><p>\u4ECE\u5C3E\u8054\u56DE\u770B\uFF0C\u201C\u534E\u5E74\u201D\u65E2\u6709\u5B9E\u73B0\u7684\u559C\u60A6\uFF0C\u4E5F\u6709\u672A\u5C3D\u7684\u671F\u5F85\u3002\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u4F7F\u73CD\u60DC\u4E0E\u4E0D\u5B89\u540C\u65F6\u7559\u5728\u90A3\u6BB5\u5E74\u534E\u91CC\u3002</p><p>\u4ECA\u65E5\u7684\u201C\u601D\u201D\uFF0C\u91CD\u65B0\u7EC4\u7EC7\u4E86\u8FD9\u4E9B\u5F7C\u6B64\u4EA4\u7EC7\u7684\u7ECF\u9A8C\u3002\u65F6\u95F4\u8D8A\u8FDC\uFF0C\u66FE\u7ECF\u7684\u53EF\u80FD\u4E5F\u8D8A\u663E\u73CD\u8D35\u3002</p></section></div>',source:"\u300A\u65B0\u5510\u4E66\u300BS4\uFF1B\u5C3E\u8054 S7",note:`\u5218\u5609\u4E50\uFF1A\u5F00\u6210\u4E8C\u5E74\u767B\u7B2C\uFF0C\u8BA9\u534E\u5E74\u4E2D\u7684\u5E0C\u671B\u83B7\u5F97\u4E86\u4E00\u4E2A\u6E05\u6670\u8282\u70B9\u3002
\u5F00\u6210\u4E8C\u5E74 \xB7 837
\u300A\u65B0\u5510\u4E66\u300B\u8BB0\u674E\u5546\u9690\u5F00\u6210\u4E8C\u5E74\u767B\u8FDB\u58EB\u7B2C\u3002\u79D1\u4E3E\u7684\u5B9E\u73B0\uFF0C\u610F\u5473\u7740\u8EAB\u4EFD\u3001\u4EA4\u6E38\u4E0E\u4ED5\u8FDB\u673A\u4F1A\u7684\u6539\u53D8\u3002
\u57CE\u95E8\u3001\u699C\u7EB8\u4E0E\u8E0F\u51FA\u7684\u811A\u6B65\uFF0C\u6C47\u805A\u6210\u4E00\u6B21\u4EBA\u751F\u9053\u8DEF\u7684\u5F00\u542F\uFF1B\u5B83\u4E0E\u6B64\u524D\u7684\u6587\u624D\u53D7\u77E5\u524D\u540E\u76F8\u627F\u3002
\u671F\u5F85\u4E0E\u60D8\u7136
\u4ECE\u5C3E\u8054\u56DE\u770B\uFF0C\u201C\u534E\u5E74\u201D\u65E2\u6709\u5B9E\u73B0\u7684\u559C\u60A6\uFF0C\u4E5F\u6709\u672A\u5C3D\u7684\u671F\u5F85\u3002\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u4F7F\u73CD\u60DC\u4E0E\u4E0D\u5B89\u540C\u65F6\u7559\u5728\u90A3\u6BB5\u5E74\u534E\u91CC\u3002
\u4ECA\u65E5\u7684\u201C\u601D\u201D\uFF0C\u91CD\u65B0\u7EC4\u7EC7\u4E86\u8FD9\u4E9B\u5F7C\u6B64\u4EA4\u7EC7\u7684\u7ECF\u9A8C\u3002\u65F6\u95F4\u8D8A\u8FDC\uFF0C\u66FE\u7ECF\u7684\u53EF\u80FD\u4E5F\u8D8A\u663E\u73CD\u8D35\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:3,title:"\u5165\u5E55\u4E0E\u5A5A\u59FB",eye:"\u4E8C \xB7 \u672C\u4E8B\u3001\u65C1\u8BC1\u4E0E\u8BBA\u8BC1",body:'<p class="argument">\u5E55\u5E9C\u4E2D\u7684\u53D7\u77E5\u4E0E\u5A5A\u59FB\uFF0C\u4F7F\u516C\u5171\u751F\u6D3B\u548C\u79C1\u4EBA\u6DF1\u60C5\u4EA4\u7EC7\u5728\u540C\u4E00\u6BB5\u534E\u5E74\u4E4B\u4E2D\u3002</p><div class="critical-columns"><section><h2>\u5E55\u5E9C\u4E0E\u5E18\u5E55</h2><p>\u300A\u65B0\u5510\u4E66\u300B\u8F7D\u738B\u8302\u5143\u8D4F\u8BC6\u5176\u624D\uFF0C\u8058\u5165\u5E55\u5E9C\uFF0C\u5E76\u4EE5\u5973\u59BB\u4E4B\u3002\u4E8B\u4E1A\u4E0E\u5A5A\u59FB\u5728\u8FD9\u4E00\u8282\u70B9\u76F8\u9047\uFF0C\u534E\u5E74\u7684\u5185\u6DB5\u4E5F\u968F\u4E4B\u6269\u5C55\u3002</p><p>\u4E00\u8FB9\u662F\u6587\u7AE0\u3001\u5B98\u7F72\u4E0E\u6848\u724D\uFF0C\u4E00\u8FB9\u662F\u5E18\u5E55\u4E0E\u76F8\u4F34\u4E4B\u4EBA\uFF1B\u4E24\u79CD\u751F\u6D3B\u7ECF\u9A8C\u90FD\u80FD\u8FDB\u5165\u6DF1\u5207\u7684\u8FFD\u5FC6\u3002</p></section><section><h2>\u9526\u745F\u4E0E\u4EBA\u4EA1\u7269\u5728</h2><p>\u6731\u9E64\u9F84\u6CE8\u300A\u9526\u745F\u300B\uFF0C\u4E3E\u300A\u623F\u4E2D\u66F2\u300B\u201C\u5F52\u6765\u5DF2\u4E0D\u89C1\uFF0C\u9526\u745F\u957F\u4E8E\u4EBA\u201D\u76F8\u53C2\u3002\u76F8\u540C\u7269\u8C61\u628A\u773C\u524D\u4E4B\u5668\u4E0E\u6240\u601D\u4E4B\u4EBA\u8054\u7CFB\u8D77\u6765\u3002</p><p>\u8FD9\u4E00\u4E92\u6587\u4E3A\u60BC\u4EA1\u8BFB\u6CD5\u63D0\u4F9B\u4E86\u5177\u4F53\u652F\u70B9\uFF1A\u745F\u4ECD\u5728\uFF0C\u58F0\u97F3\u4ECD\u53EF\u88AB\u542C\u89C1\uFF0C\u800C\u65F6\u95F4\u5DF2\u7ECF\u6539\u53D8\u4E86\u4EBA\u4E0E\u7269\u7684\u5173\u7CFB\u3002</p></section></div>',source:"\u53F2\u4F20 S4\uFF1B\u6731\u9E64\u9F84\u6CE8\u5F15\u300A\u623F\u4E2D\u66F2\u300BS10",note:`\u5218\u5609\u4E50\uFF1A\u5E55\u5E9C\u4E2D\u7684\u53D7\u77E5\u4E0E\u5A5A\u59FB\uFF0C\u4F7F\u516C\u5171\u751F\u6D3B\u548C\u79C1\u4EBA\u6DF1\u60C5\u4EA4\u7EC7\u5728\u540C\u4E00\u6BB5\u534E\u5E74\u4E4B\u4E2D\u3002
\u5E55\u5E9C\u4E0E\u5E18\u5E55
\u300A\u65B0\u5510\u4E66\u300B\u8F7D\u738B\u8302\u5143\u8D4F\u8BC6\u5176\u624D\uFF0C\u8058\u5165\u5E55\u5E9C\uFF0C\u5E76\u4EE5\u5973\u59BB\u4E4B\u3002\u4E8B\u4E1A\u4E0E\u5A5A\u59FB\u5728\u8FD9\u4E00\u8282\u70B9\u76F8\u9047\uFF0C\u534E\u5E74\u7684\u5185\u6DB5\u4E5F\u968F\u4E4B\u6269\u5C55\u3002
\u4E00\u8FB9\u662F\u6587\u7AE0\u3001\u5B98\u7F72\u4E0E\u6848\u724D\uFF0C\u4E00\u8FB9\u662F\u5E18\u5E55\u4E0E\u76F8\u4F34\u4E4B\u4EBA\uFF1B\u4E24\u79CD\u751F\u6D3B\u7ECF\u9A8C\u90FD\u80FD\u8FDB\u5165\u6DF1\u5207\u7684\u8FFD\u5FC6\u3002
\u9526\u745F\u4E0E\u4EBA\u4EA1\u7269\u5728
\u6731\u9E64\u9F84\u6CE8\u300A\u9526\u745F\u300B\uFF0C\u4E3E\u300A\u623F\u4E2D\u66F2\u300B\u201C\u5F52\u6765\u5DF2\u4E0D\u89C1\uFF0C\u9526\u745F\u957F\u4E8E\u4EBA\u201D\u76F8\u53C2\u3002\u76F8\u540C\u7269\u8C61\u628A\u773C\u524D\u4E4B\u5668\u4E0E\u6240\u601D\u4E4B\u4EBA\u8054\u7CFB\u8D77\u6765\u3002
\u8FD9\u4E00\u4E92\u6587\u4E3A\u60BC\u4EA1\u8BFB\u6CD5\u63D0\u4F9B\u4E86\u5177\u4F53\u652F\u70B9\uFF1A\u745F\u4ECD\u5728\uFF0C\u58F0\u97F3\u4ECD\u53EF\u88AB\u542C\u89C1\uFF0C\u800C\u65F6\u95F4\u5DF2\u7ECF\u6539\u53D8\u4E86\u4EBA\u4E0E\u7269\u7684\u5173\u7CFB\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:3,title:"\u884C\u65C5\u4E0E\u8EAB\u4E16",eye:"\u4E8C \xB7 \u4ECE\u4F20\u8BB0\u8FD4\u56DE\u6292\u60C5\u4E3B\u4F53",body:'<p class="argument">\u7406\u60F3\u3001\u6DF1\u60C5\u4E0E\u6F02\u6CCA\uFF0C\u5728\u8F97\u8F6C\u7684\u4EBA\u751F\u4E2D\u5F62\u6210\u590D\u6742\u7684\u534E\u5E74\u7ECF\u9A8C\u3002</p><div class="critical-columns"><section><h2>\u5E55\u5E9C\u4E4B\u95F4</h2><p>\u674E\u5546\u9690\u5728\u4E0D\u540C\u5E55\u5E9C\u4E0E\u5B98\u804C\u4E4B\u95F4\u8F97\u8F6C\u3002\u9053\u8DEF\u3001\u884C\u88C5\u4E0E\u5C42\u53E0\u57CE\u90ED\uFF0C\u7559\u4E0B\u751F\u547D\u6D41\u52A8\u7684\u75D5\u8FF9\u3002</p><p>\u53D7\u77E5\u4E0E\u5931\u610F\u3001\u505C\u7559\u4E0E\u79BB\u53BB\u4E92\u76F8\u4EA4\u9519\uFF0C\u4F7F\u201C\u534E\u5E74\u201D\u65E2\u542B\u6709\u73CD\u60DC\uFF0C\u4E5F\u542B\u6709\u8DDD\u79BB\u4E0E\u8017\u635F\u3002</p></section><section><h2>\u751F\u547D\u5316\u4E3A\u610F\u8C61</h2><p>\u8BD7\u9009\u62E9\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u7389\u6765\u5448\u73B0\u8FD9\u4E9B\u611F\u53D7\u3002\u4E2A\u4EBA\u7ECF\u5386\u88AB\u8F6C\u5199\u6210\u5177\u6709\u6587\u5316\u8BB0\u5FC6\u7684\u7269\u8C61\uFF0C\u60C5\u7EEA\u56E0\u6B64\u83B7\u5F97\u66F4\u4E30\u5BCC\u7684\u5C42\u6B21\u3002</p><p>\u201C\u601D\u534E\u5E74\u201D\u5C06\u5B83\u4EEC\u805A\u62E2\u8D77\u6765\uFF1B\u5C3E\u8054\u7684\u201C\u5F53\u65F6\u5DF2\u201D\u53C8\u4F7F\u56DE\u671B\u6DF1\u5165\u5230\u7ECF\u9A8C\u672C\u8EAB\uFF0C\u8FFD\u95EE\u90A3\u4E9B\u66FE\u7ECF\u6295\u5165\u5374\u4ECD\u611F\u60D8\u7136\u7684\u65F6\u523B\u3002</p></section></div>',source:"\u53F2\u4F20 S4\uFF1B\u539F\u8BD7 S7",note:`\u5218\u5609\u4E50\uFF1A\u7406\u60F3\u3001\u6DF1\u60C5\u4E0E\u6F02\u6CCA\uFF0C\u5728\u8F97\u8F6C\u7684\u4EBA\u751F\u4E2D\u5F62\u6210\u590D\u6742\u7684\u534E\u5E74\u7ECF\u9A8C\u3002
\u5E55\u5E9C\u4E4B\u95F4
\u674E\u5546\u9690\u5728\u4E0D\u540C\u5E55\u5E9C\u4E0E\u5B98\u804C\u4E4B\u95F4\u8F97\u8F6C\u3002\u9053\u8DEF\u3001\u884C\u88C5\u4E0E\u5C42\u53E0\u57CE\u90ED\uFF0C\u7559\u4E0B\u751F\u547D\u6D41\u52A8\u7684\u75D5\u8FF9\u3002
\u53D7\u77E5\u4E0E\u5931\u610F\u3001\u505C\u7559\u4E0E\u79BB\u53BB\u4E92\u76F8\u4EA4\u9519\uFF0C\u4F7F\u201C\u534E\u5E74\u201D\u65E2\u542B\u6709\u73CD\u60DC\uFF0C\u4E5F\u542B\u6709\u8DDD\u79BB\u4E0E\u8017\u635F\u3002
\u751F\u547D\u5316\u4E3A\u610F\u8C61
\u8BD7\u9009\u62E9\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u7389\u6765\u5448\u73B0\u8FD9\u4E9B\u611F\u53D7\u3002\u4E2A\u4EBA\u7ECF\u5386\u88AB\u8F6C\u5199\u6210\u5177\u6709\u6587\u5316\u8BB0\u5FC6\u7684\u7269\u8C61\uFF0C\u60C5\u7EEA\u56E0\u6B64\u83B7\u5F97\u66F4\u4E30\u5BCC\u7684\u5C42\u6B21\u3002
\u201C\u601D\u534E\u5E74\u201D\u5C06\u5B83\u4EEC\u805A\u62E2\u8D77\u6765\uFF1B\u5C3E\u8054\u7684\u201C\u5F53\u65F6\u5DF2\u201D\u53C8\u4F7F\u56DE\u671B\u6DF1\u5165\u5230\u7ECF\u9A8C\u672C\u8EAB\uFF0C\u8FFD\u95EE\u90A3\u4E9B\u66FE\u7ECF\u6295\u5165\u5374\u4ECD\u611F\u60D8\u7136\u7684\u65F6\u523B\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:3,title:"\u534E\u5E74\u5728\u56DE\u671B\u4E2D\u91CD\u7EC4",eye:"\u4E8C \xB7 \u8FFD\u5FC6\u7684\u9009\u62E9\u4E0E\u91CD\u7EC4",body:'<p class="argument">\u201C\u601D\u201D\u5C5E\u4E8E\u56DE\u671B\u7684\u6B64\u523B\uFF0C\u201C\u534E\u5E74\u201D\u5C5E\u4E8E\u88AB\u73CD\u89C6\u7684\u8FC7\u53BB\uFF1B\u4E24\u91CD\u65F6\u95F4\u5728\u8BD7\u4E2D\u4EA4\u53E0\u3002</p><div class="critical-columns"><section><h2>\u8BB0\u5FC6\u7684\u9009\u62E9</h2><p>\u534E\u5E74\u4EE5\u7247\u6BB5\u7684\u65B9\u5F0F\u8FD4\u56DE\uFF1A\u624D\u534E\u521D\u5C55\u3001\u53D7\u77E5\u3001\u767B\u7B2C\u3001\u5A5A\u59FB\u3001\u884C\u65C5\uFF0C\u90FD\u53EF\u80FD\u6210\u4E3A\u5F26\u58F0\u7275\u51FA\u7684\u8BB0\u5FC6\u3002</p><p>\u4ECA\u65E5\u4E4B\u201C\u601D\u201D\u4F7F\u8FD9\u4E9B\u7247\u6BB5\u83B7\u5F97\u65B0\u7684\u8054\u7CFB\uFF0C\u7F8E\u597D\u7684\u8BC4\u4EF7\u4E0E\u6DF1\u957F\u7684\u6005\u60D8\u4E5F\u5728\u56DE\u671B\u4E2D\u540C\u65F6\u52A0\u91CD\u3002</p></section><section><h2>\u8FDB\u5165\u8BD7\u5883</h2><p>\u8BD7\u7531\u6B64\u8F6C\u5411\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u6CEA\u3001\u7389\u70DF\u3002\u56DB\u79CD\u610F\u8C61\u5404\u6709\u6765\u5904\uFF0C\u53C8\u5171\u540C\u627F\u8F7D\u534E\u5E74\u7684\u73CD\u7F8E\u4E0E\u96BE\u4EE5\u628A\u63E1\u3002</p><p>\u4EBA\u7269\u4E0E\u4E8B\u4EF6\u6E10\u6E10\u9690\u5165\u80CC\u540E\uFF0C\u7559\u5728\u773C\u524D\u7684\u662F\u68A6\u7684\u8FF7\u79BB\u3001\u58F0\u7684\u5BC4\u6258\u3001\u5149\u4E2D\u7684\u6CEA\u4E0E\u6696\u65E5\u4E0B\u7684\u70DF\u3002</p></section></div>',source:"\u539F\u8BD7 S7",note:`\u5218\u5609\u4E50\uFF1A\u201C\u601D\u201D\u5C5E\u4E8E\u56DE\u671B\u7684\u6B64\u523B\uFF0C\u201C\u534E\u5E74\u201D\u5C5E\u4E8E\u88AB\u73CD\u89C6\u7684\u8FC7\u53BB\uFF1B\u4E24\u91CD\u65F6\u95F4\u5728\u8BD7\u4E2D\u4EA4\u53E0\u3002
\u8BB0\u5FC6\u7684\u9009\u62E9
\u534E\u5E74\u4EE5\u7247\u6BB5\u7684\u65B9\u5F0F\u8FD4\u56DE\uFF1A\u624D\u534E\u521D\u5C55\u3001\u53D7\u77E5\u3001\u767B\u7B2C\u3001\u5A5A\u59FB\u3001\u884C\u65C5\uFF0C\u90FD\u53EF\u80FD\u6210\u4E3A\u5F26\u58F0\u7275\u51FA\u7684\u8BB0\u5FC6\u3002
\u4ECA\u65E5\u4E4B\u201C\u601D\u201D\u4F7F\u8FD9\u4E9B\u7247\u6BB5\u83B7\u5F97\u65B0\u7684\u8054\u7CFB\uFF0C\u7F8E\u597D\u7684\u8BC4\u4EF7\u4E0E\u6DF1\u957F\u7684\u6005\u60D8\u4E5F\u5728\u56DE\u671B\u4E2D\u540C\u65F6\u52A0\u91CD\u3002
\u8FDB\u5165\u8BD7\u5883
\u8BD7\u7531\u6B64\u8F6C\u5411\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u6CEA\u3001\u7389\u70DF\u3002\u56DB\u79CD\u610F\u8C61\u5404\u6709\u6765\u5904\uFF0C\u53C8\u5171\u540C\u627F\u8F7D\u534E\u5E74\u7684\u73CD\u7F8E\u4E0E\u96BE\u4EE5\u628A\u63E1\u3002
\u4EBA\u7269\u4E0E\u4E8B\u4EF6\u6E10\u6E10\u9690\u5165\u80CC\u540E\uFF0C\u7559\u5728\u773C\u524D\u7684\u662F\u68A6\u7684\u8FF7\u79BB\u3001\u58F0\u7684\u5BC4\u6258\u3001\u5149\u4E2D\u7684\u6CEA\u4E0E\u6696\u65E5\u4E0B\u7684\u70DF\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:4,title:"\u4ECE\u534E\u5E74\uFF0C\u8FDB\u5165\u8BD7\u5883",eye:"\u4E09 \xB7 \u4ECE\u672C\u4E8B\u8003\u7D22\u5230\u8BD7\u610F\u751F\u6210",body:'<p class="argument">\u201C\u65E0\u7AEF\u201D\u91CD\u65B0\u51FA\u73B0\u65F6\uFF0C\u8BD7\u7684\u95EE\u9898\u5DF2\u7ECF\u4ECE\u5F80\u4E8B\u8F6C\u5411\u5F80\u4E8B\u600E\u6837\u88AB\u611F\u53D7\u3002</p><div class="critical-columns"><section><h2>\u7ECF\u9A8C\u4E0E\u8868\u8FBE</h2><p>\u9996\u8054\u4EE5\u5668\u7269\u5F15\u51FA\u8FFD\u601D\uFF0C\u63A5\u4E0B\u6765\u7684\u56DB\u53E5\u5219\u4E3A\u8FFD\u601D\u8D4B\u4E88\u5F62\u72B6\u3002\u5178\u6545\u8C03\u52A8\u6587\u5316\u8BB0\u5FC6\uFF0C\u52A8\u8BCD\u7EC4\u7EC7\u611F\u60C5\uFF0C\u666F\u8C61\u4F7F\u5185\u5728\u7ECF\u9A8C\u53EF\u4EE5\u88AB\u611F\u77E5\u3002</p><p>\u68A6\u3001\u9E1F\u3001\u73E0\u3001\u7389\u4F9D\u6B21\u8FDB\u5165\u753B\u9762\uFF0C\u4EE4\u4E3B\u4F53\u7684\u5FC3\u4E8B\u5728\u4E0D\u540C\u5F62\u6001\u4E4B\u95F4\u6D41\u8F6C\u3002</p></section><section><h2>\u201C\u60D8\u7136\u201D\u7684\u4F0F\u7EBF</h2><p>\u201C\u8FF7\u201D\u4F7F\u68A6\u89C9\u96BE\u8FA8\uFF0C\u201C\u6258\u201D\u4F7F\u5FC3\u610F\u5EF6\u7EED\uFF0C\u201C\u6CEA\u201D\u628A\u60B2\u611F\u85CF\u5165\u73CD\u7F8E\uFF0C\u201C\u70DF\u201D\u4F7F\u7F8E\u663E\u5F97\u96BE\u4EE5\u63E1\u6301\u3002</p><p>\u8FD9\u4E9B\u7EBF\u7D22\u6700\u7EC8\u6C47\u5165\u201C\u60D8\u7136\u201D\u3002\u5C3E\u8054\u6240\u6536\u675F\u7684\uFF0C\u662F\u6574\u6BB5\u534E\u5E74\u5728\u56DE\u671B\u4E2D\u5448\u73B0\u51FA\u7684\u590D\u6742\u8D28\u5730\u3002</p></section></div>',source:"\u539F\u8BD7 S7",note:`\u4F59\u5BA3\u5747\uFF1A\u201C\u65E0\u7AEF\u201D\u91CD\u65B0\u51FA\u73B0\u65F6\uFF0C\u8BD7\u7684\u95EE\u9898\u5DF2\u7ECF\u4ECE\u5F80\u4E8B\u8F6C\u5411\u5F80\u4E8B\u600E\u6837\u88AB\u611F\u53D7\u3002
\u7ECF\u9A8C\u4E0E\u8868\u8FBE
\u9996\u8054\u4EE5\u5668\u7269\u5F15\u51FA\u8FFD\u601D\uFF0C\u63A5\u4E0B\u6765\u7684\u56DB\u53E5\u5219\u4E3A\u8FFD\u601D\u8D4B\u4E88\u5F62\u72B6\u3002\u5178\u6545\u8C03\u52A8\u6587\u5316\u8BB0\u5FC6\uFF0C\u52A8\u8BCD\u7EC4\u7EC7\u611F\u60C5\uFF0C\u666F\u8C61\u4F7F\u5185\u5728\u7ECF\u9A8C\u53EF\u4EE5\u88AB\u611F\u77E5\u3002
\u68A6\u3001\u9E1F\u3001\u73E0\u3001\u7389\u4F9D\u6B21\u8FDB\u5165\u753B\u9762\uFF0C\u4EE4\u4E3B\u4F53\u7684\u5FC3\u4E8B\u5728\u4E0D\u540C\u5F62\u6001\u4E4B\u95F4\u6D41\u8F6C\u3002
\u201C\u60D8\u7136\u201D\u7684\u4F0F\u7EBF
\u201C\u8FF7\u201D\u4F7F\u68A6\u89C9\u96BE\u8FA8\uFF0C\u201C\u6258\u201D\u4F7F\u5FC3\u610F\u5EF6\u7EED\uFF0C\u201C\u6CEA\u201D\u628A\u60B2\u611F\u85CF\u5165\u73CD\u7F8E\uFF0C\u201C\u70DF\u201D\u4F7F\u7F8E\u663E\u5F97\u96BE\u4EE5\u63E1\u6301\u3002
\u8FD9\u4E9B\u7EBF\u7D22\u6700\u7EC8\u6C47\u5165\u201C\u60D8\u7136\u201D\u3002\u5C3E\u8054\u6240\u6536\u675F\u7684\uFF0C\u662F\u6574\u6BB5\u534E\u5E74\u5728\u56DE\u671B\u4E2D\u5448\u73B0\u51FA\u7684\u590D\u6742\u8D28\u5730\u3002`,speaker:"\u4F59\u5BA3\u5747",layout:"annotated",variant:"scholarly"},{scene:5,title:"\u201C\u8FF7\u201D\u7684\u53CC\u91CD\u610F\u5473",eye:"\u4E09 \xB7 \u5E84\u751F\u6653\u68A6\u8FF7\u8774\u8776",body:'<p class="argument">\u201C\u8FF7\u201D\u8BA9\u68A6\u4E2D\u7684\u6C89\u6D78\u4E0E\u9192\u540E\u7684\u96BE\u8FA8\uFF0C\u5728\u540C\u4E00\u4E2A\u5B57\u91CC\u76F8\u9047\u3002</p><div class="critical-columns"><section><h2>\u6653\u68A6\u7684\u4E34\u754C\u611F</h2><p>\u201C\u6653\u68A6\u201D\u662F\u6E05\u6668\u7684\u68A6\u3002\u6E05\u6668\u8FDE\u63A5\u591C\u4E0E\u663C\uFF0C\u8BD7\u5883\u4E5F\u7531\u6B64\u5E26\u51FA\u68A6\u5C06\u9192\u3001\u7ECF\u9A8C\u5C06\u6563\u7684\u4E34\u754C\u611F\u3002</p><p>\u5E84\u751F\u3001\u6653\u68A6\u3001\u8774\u8776\u4E09\u4E2A\u610F\u8C61\u88AB\u201C\u8FF7\u201D\u8FDE\u5728\u4E00\u8D77\uFF1B\u4E3B\u4F53\u6295\u5165\u5176\u4E2D\uFF0C\u53C8\u9762\u5BF9\u81EA\u8EAB\u4E0E\u68A6\u5883\u7684\u6A21\u7CCA\u754C\u9650\u3002</p></section><section><h2>\u56DE\u5230\u601D\u534E\u5E74</h2><p>\u79FB\u5165\u201C\u601D\u534E\u5E74\u201D\u7684\u8BED\u5883\uFF0C\u68A6\u8776\u4FBF\u6210\u4E3A\u56DE\u671B\u751F\u547D\u7684\u611F\u53D7\u5F62\u5F0F\u3002\u7F8E\u597D\u66FE\u7ECF\u5982\u6B64\u5207\u8EAB\uFF0C\u56DE\u5FC6\u65F6\u5374\u53C8\u5982\u68A6\u822C\u96BE\u4EE5\u786E\u8BA4\u3002</p><p>\u5C3E\u8054\u7684\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u8FDB\u4E00\u6B65\u52A0\u6DF1\u8FD9\u4E00\u610F\u5473\uFF1A\u90A3\u4E9B\u65F6\u523B\u5728\u53D1\u751F\u4E4B\u4E2D\uFF0C\u5C31\u5DF2\u5305\u542B\u672A\u5C3D\u4E0E\u672A\u660E\u3002</p></section></div>',note:`\u5218\u5609\u4E50\uFF1A\u201C\u8FF7\u201D\u8BA9\u68A6\u4E2D\u7684\u6C89\u6D78\u4E0E\u9192\u540E\u7684\u96BE\u8FA8\uFF0C\u5728\u540C\u4E00\u4E2A\u5B57\u91CC\u76F8\u9047\u3002
\u6653\u68A6\u7684\u4E34\u754C\u611F
\u201C\u6653\u68A6\u201D\u662F\u6E05\u6668\u7684\u68A6\u3002\u6E05\u6668\u8FDE\u63A5\u591C\u4E0E\u663C\uFF0C\u8BD7\u5883\u4E5F\u7531\u6B64\u5E26\u51FA\u68A6\u5C06\u9192\u3001\u7ECF\u9A8C\u5C06\u6563\u7684\u4E34\u754C\u611F\u3002
\u5E84\u751F\u3001\u6653\u68A6\u3001\u8774\u8776\u4E09\u4E2A\u610F\u8C61\u88AB\u201C\u8FF7\u201D\u8FDE\u5728\u4E00\u8D77\uFF1B\u4E3B\u4F53\u6295\u5165\u5176\u4E2D\uFF0C\u53C8\u9762\u5BF9\u81EA\u8EAB\u4E0E\u68A6\u5883\u7684\u6A21\u7CCA\u754C\u9650\u3002
\u56DE\u5230\u601D\u534E\u5E74
\u79FB\u5165\u201C\u601D\u534E\u5E74\u201D\u7684\u8BED\u5883\uFF0C\u68A6\u8776\u4FBF\u6210\u4E3A\u56DE\u671B\u751F\u547D\u7684\u611F\u53D7\u5F62\u5F0F\u3002\u7F8E\u597D\u66FE\u7ECF\u5982\u6B64\u5207\u8EAB\uFF0C\u56DE\u5FC6\u65F6\u5374\u53C8\u5982\u68A6\u822C\u96BE\u4EE5\u786E\u8BA4\u3002
\u5C3E\u8054\u7684\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u8FDB\u4E00\u6B65\u52A0\u6DF1\u8FD9\u4E00\u610F\u5473\uFF1A\u90A3\u4E9B\u65F6\u523B\u5728\u53D1\u751F\u4E4B\u4E2D\uFF0C\u5C31\u5DF2\u5305\u542B\u672A\u5C3D\u4E0E\u672A\u660E\u3002`,speaker:"\u5218\u5609\u4E50",source:"\u300A\u5E84\u5B50\u300B\u5F55\u6587 S6\uFF1B\u539F\u8BD7 S7",layout:"annotated",variant:"scholarly"},{scene:5,title:"\u68A6\u8776\uFF1A\u6D41\u52A8\u7684\u81EA\u6211",eye:"\u4E09 \xB7 \u5178\u6E90\u4E0E\u8BD7\u5883\u7684\u5DEE\u522B",body:'<p class="argument">\u300A\u5E84\u5B50\u300B\u7684\u68A6\u89C9\u4E4B\u95EE\uFF0C\u4E3A\u201C\u601D\u534E\u5E74\u201D\u6253\u5F00\u4E00\u4E2A\u4E0D\u65AD\u8F6C\u6362\u7684\u89C6\u70B9\u3002</p><div class="critical-columns"><section><h2>\u5468\u4E0E\u8776</h2><p>\u68A6\u4E2D\u6829\u6829\u7136\u4E3A\u8776\uFF0C\u9192\u540E\u53C8\u6210\u4E3A\u5E84\u5468\u3002\u539F\u5178\u5728\u5468\u68A6\u8776\u4E0E\u8776\u68A6\u5468\u4E4B\u95F4\u8FFD\u95EE\uFF0C\u5E76\u4EE5\u201C\u7269\u5316\u201D\u6536\u675F\u3002</p><p>\u4E3B\u4F53\u7684\u8EAB\u4EFD\u968F\u7740\u68A6\u89C9\u8F6C\u6362\u800C\u6D41\u52A8\uFF0C\u81EA\u6211\u4E0E\u4ED6\u7269\u7684\u754C\u9650\u4E5F\u968F\u4E4B\u52A8\u6447\u3002</p></section><section><h2>\u8BD7\u4E2D\u7684\u771F\u5B9E\u611F</h2><p>\u674E\u5546\u9690\u5C06\u8FD9\u4E00\u8FFD\u95EE\u5B89\u7F6E\u5728\u201C\u6653\u68A6\u201D\u201C\u8FF7\u201D\u7684\u7EC4\u5408\u4E2D\u3002\u68A6\u5883\u7684\u9C9C\u660E\uFF0C\u4E0E\u56DE\u671B\u65F6\u7684\u604D\u60DA\u76F8\u4E92\u6620\u7167\u3002</p><p>\u8BFB\u8005\u56E0\u6B64\u80FD\u611F\u5230\u4E00\u79CD\u590D\u6742\u7ECF\u9A8C\uFF1A\u8FC7\u53BB\u66FE\u5982\u6B64\u771F\u5207\uFF0C\u5982\u4ECA\u53C8\u96BE\u4EE5\u5B8C\u5168\u8FA8\u8BA4\uFF1B\u4E3B\u4F53\u65E2\u5728\u5176\u4E2D\uFF0C\u4E5F\u5728\u5176\u5916\u3002</p></section></div>',source:"\u300A\u5E84\u5B50\xB7\u9F50\u7269\u8BBA\u300BS6\uFF1B\u539F\u8BD7 S7",note:`\u5218\u5609\u4E50\uFF1A\u300A\u5E84\u5B50\u300B\u7684\u68A6\u89C9\u4E4B\u95EE\uFF0C\u4E3A\u201C\u601D\u534E\u5E74\u201D\u6253\u5F00\u4E00\u4E2A\u4E0D\u65AD\u8F6C\u6362\u7684\u89C6\u70B9\u3002
\u5468\u4E0E\u8776
\u68A6\u4E2D\u6829\u6829\u7136\u4E3A\u8776\uFF0C\u9192\u540E\u53C8\u6210\u4E3A\u5E84\u5468\u3002\u539F\u5178\u5728\u5468\u68A6\u8776\u4E0E\u8776\u68A6\u5468\u4E4B\u95F4\u8FFD\u95EE\uFF0C\u5E76\u4EE5\u201C\u7269\u5316\u201D\u6536\u675F\u3002
\u4E3B\u4F53\u7684\u8EAB\u4EFD\u968F\u7740\u68A6\u89C9\u8F6C\u6362\u800C\u6D41\u52A8\uFF0C\u81EA\u6211\u4E0E\u4ED6\u7269\u7684\u754C\u9650\u4E5F\u968F\u4E4B\u52A8\u6447\u3002
\u8BD7\u4E2D\u7684\u771F\u5B9E\u611F
\u674E\u5546\u9690\u5C06\u8FD9\u4E00\u8FFD\u95EE\u5B89\u7F6E\u5728\u201C\u6653\u68A6\u201D\u201C\u8FF7\u201D\u7684\u7EC4\u5408\u4E2D\u3002\u68A6\u5883\u7684\u9C9C\u660E\uFF0C\u4E0E\u56DE\u671B\u65F6\u7684\u604D\u60DA\u76F8\u4E92\u6620\u7167\u3002
\u8BFB\u8005\u56E0\u6B64\u80FD\u611F\u5230\u4E00\u79CD\u590D\u6742\u7ECF\u9A8C\uFF1A\u8FC7\u53BB\u66FE\u5982\u6B64\u771F\u5207\uFF0C\u5982\u4ECA\u53C8\u96BE\u4EE5\u5B8C\u5168\u8FA8\u8BA4\uFF1B\u4E3B\u4F53\u65E2\u5728\u5176\u4E2D\uFF0C\u4E5F\u5728\u5176\u5916\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:5,title:"\u5178\u6545\u7684\u60C5\u611F\u8F6C\u5316",eye:"\u4E09 \xB7 \u7701\u7565\u6545\u4E8B\uFF0C\u91CD\u7EC4\u60C5\u611F",body:'<p class="argument">\u4E03\u5B57\u7701\u53BB\u6545\u4E8B\u7684\u94FA\u53D9\uFF0C\u8BA9\u4EBA\u7269\u3001\u65F6\u95F4\u3001\u5FC3\u7406\u4E0E\u7269\u8C61\u5171\u540C\u627F\u62C5\u6292\u60C5\u3002</p><div class="critical-columns"><section><h2>\u6587\u5316\u8BB0\u5FC6\u7684\u538B\u7F29</h2><p>\u201C\u5E84\u751F\u201D\u8C03\u52A8\u68A6\u8776\u6545\u4E8B\uFF0C\u201C\u6653\u68A6\u201D\u7F6E\u5165\u7279\u5B9A\u65F6\u523B\uFF0C\u201C\u8FF7\u201D\u7ED9\u51FA\u4E3B\u4F53\u72B6\u6001\uFF0C\u201C\u8774\u8776\u201D\u5219\u4F7F\u611F\u53D7\u83B7\u5F97\u8F7B\u76C8\u7684\u5F62\u4F53\u3002</p><p>\u5178\u6545\u7684\u80CC\u666F\u88AB\u538B\u7F29\u5728\u5C11\u6570\u5B57\u8BCD\u91CC\uFF0C\u8BFB\u8005\u5BF9\u6545\u4E8B\u7684\u8BB0\u5FC6\u4E0E\u773C\u524D\u8BD7\u53E5\u7684\u60C5\u7EEA\u540C\u65F6\u53D1\u751F\u3002</p></section><section><h2>\u7531\u8FF7\u5230\u6258</h2><p>\u4E0B\u4E00\u53E5\u4EE5\u201C\u6258\u201D\u63A5\u7EED\u201C\u8FF7\u201D\u3002\u68A6\u8776\u52A8\u6447\u7ECF\u9A8C\u7684\u53EF\u786E\u8BA4\u6027\uFF0C\u675C\u9E43\u5219\u4F7F\u5FC3\u610F\u5728\u53D8\u5316\u4E2D\u7EE7\u7EED\u5B58\u5728\u3002</p><p>\u4E24\u4E2A\u52A8\u8BCD\u8BA9\u5178\u6545\u5F7C\u6B64\u8054\u7ED3\uFF1A\u4E00\u8FB9\u662F\u6C89\u6D78\u4E0E\u96BE\u8FA8\uFF0C\u4E00\u8FB9\u662F\u5BC4\u5BD3\u4E0E\u4E0D\u5DF2\uFF0C\u5171\u540C\u5C55\u5F00\u534E\u5E74\u7684\u6DF1\u60C5\u3002</p></section></div>',source:"\u5178\u6E90 S6\u3001S8\uFF1B\u539F\u8BD7 S7",note:`\u5218\u5609\u4E50\uFF1A\u4E03\u5B57\u7701\u53BB\u6545\u4E8B\u7684\u94FA\u53D9\uFF0C\u8BA9\u4EBA\u7269\u3001\u65F6\u95F4\u3001\u5FC3\u7406\u4E0E\u7269\u8C61\u5171\u540C\u627F\u62C5\u6292\u60C5\u3002
\u6587\u5316\u8BB0\u5FC6\u7684\u538B\u7F29
\u201C\u5E84\u751F\u201D\u8C03\u52A8\u68A6\u8776\u6545\u4E8B\uFF0C\u201C\u6653\u68A6\u201D\u7F6E\u5165\u7279\u5B9A\u65F6\u523B\uFF0C\u201C\u8FF7\u201D\u7ED9\u51FA\u4E3B\u4F53\u72B6\u6001\uFF0C\u201C\u8774\u8776\u201D\u5219\u4F7F\u611F\u53D7\u83B7\u5F97\u8F7B\u76C8\u7684\u5F62\u4F53\u3002
\u5178\u6545\u7684\u80CC\u666F\u88AB\u538B\u7F29\u5728\u5C11\u6570\u5B57\u8BCD\u91CC\uFF0C\u8BFB\u8005\u5BF9\u6545\u4E8B\u7684\u8BB0\u5FC6\u4E0E\u773C\u524D\u8BD7\u53E5\u7684\u60C5\u7EEA\u540C\u65F6\u53D1\u751F\u3002
\u7531\u8FF7\u5230\u6258
\u4E0B\u4E00\u53E5\u4EE5\u201C\u6258\u201D\u63A5\u7EED\u201C\u8FF7\u201D\u3002\u68A6\u8776\u52A8\u6447\u7ECF\u9A8C\u7684\u53EF\u786E\u8BA4\u6027\uFF0C\u675C\u9E43\u5219\u4F7F\u5FC3\u610F\u5728\u53D8\u5316\u4E2D\u7EE7\u7EED\u5B58\u5728\u3002
\u4E24\u4E2A\u52A8\u8BCD\u8BA9\u5178\u6545\u5F7C\u6B64\u8054\u7ED3\uFF1A\u4E00\u8FB9\u662F\u6C89\u6D78\u4E0E\u96BE\u8FA8\uFF0C\u4E00\u8FB9\u662F\u5BC4\u5BD3\u4E0E\u4E0D\u5DF2\uFF0C\u5171\u540C\u5C55\u5F00\u534E\u5E74\u7684\u6DF1\u60C5\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:5,title:"\u9894\u8054\u7684\u53CC\u5411\u8054\u7ED3",eye:"\u4E09 \xB7 \u9894\u8054\u7684\u8F6C\u63A5",body:'<p class="argument">\u5E84\u751F\u4E0E\u671B\u5E1D\u5728\u5BF9\u4ED7\u4E2D\u76F8\u9047\uFF0C\u68A6\u4E0E\u6625\u5FC3\u6210\u4E3A\u8FFD\u5FC6\u7684\u4E24\u4E2A\u4FA7\u9762\u3002</p><div class="critical-columns"><section><h2>\u627F\u63A5\u201C\u601D\u201D</h2><p>\u5E84\u751F\u53E5\u627F\u63A5\u9996\u8054\u7684\u201C\u601D\u201D\uFF0C\u4F7F\u534E\u5E74\u7684\u611F\u53D7\u8FDB\u5165\u68A6\u5883\u3002\u5F62\u8C61\u7684\u8DF3\u6362\uFF0C\u7531\u60C5\u7EEA\u7684\u8FDE\u7EED\u8D2F\u7A7F\u8D77\u6765\u3002</p><p>\u4E3B\u4F53\u5728\u56DE\u671B\u4E2D\u91CD\u65B0\u906D\u9047\u90A3\u4E9B\u66FE\u7ECF\u6295\u5165\u3001\u53C8\u96BE\u4EE5\u786E\u8BA4\u7684\u65F6\u523B\uFF0C\u68A6\u56E0\u800C\u83B7\u5F97\u6DF1\u957F\u7684\u6292\u60C5\u610F\u5473\u3002</p></section><section><h2>\u6A2A\u5411\u5BF9\u8BFB</h2><p>\u5E84\u751F\uFF0F\u671B\u5E1D\u3001\u6653\u68A6\uFF0F\u6625\u5FC3\u3001\u8FF7\uFF0F\u6258\u3001\u8774\u8776\uFF0F\u675C\u9E43\u5F62\u6210\u5C42\u5C42\u5BF9\u5E94\u3002\u6574\u9F50\u7684\u5F62\u5F0F\u5BB9\u7EB3\u4E86\u4E0D\u540C\u7684\u7ECF\u9A8C\u3002</p><p>\u201C\u8FF7\u201D\u5199\u7F8E\u597D\u7684\u96BE\u8FA8\uFF0C\u201C\u6258\u201D\u5199\u5FC3\u610F\u7684\u6301\u7EED\u3002\u4E24\u53E5\u76F8\u4E92\u7167\u4EAE\uFF0C\u4E3A\u540E\u9762\u7684\u73E0\u6CEA\u3001\u7389\u70DF\u79EF\u84C4\u60C5\u611F\u3002</p></section></div>',source:"\u539F\u8BD7 S7",note:`\u5218\u5609\u4E50\uFF1A\u5E84\u751F\u4E0E\u671B\u5E1D\u5728\u5BF9\u4ED7\u4E2D\u76F8\u9047\uFF0C\u68A6\u4E0E\u6625\u5FC3\u6210\u4E3A\u8FFD\u5FC6\u7684\u4E24\u4E2A\u4FA7\u9762\u3002
\u627F\u63A5\u201C\u601D\u201D
\u5E84\u751F\u53E5\u627F\u63A5\u9996\u8054\u7684\u201C\u601D\u201D\uFF0C\u4F7F\u534E\u5E74\u7684\u611F\u53D7\u8FDB\u5165\u68A6\u5883\u3002\u5F62\u8C61\u7684\u8DF3\u6362\uFF0C\u7531\u60C5\u7EEA\u7684\u8FDE\u7EED\u8D2F\u7A7F\u8D77\u6765\u3002
\u4E3B\u4F53\u5728\u56DE\u671B\u4E2D\u91CD\u65B0\u906D\u9047\u90A3\u4E9B\u66FE\u7ECF\u6295\u5165\u3001\u53C8\u96BE\u4EE5\u786E\u8BA4\u7684\u65F6\u523B\uFF0C\u68A6\u56E0\u800C\u83B7\u5F97\u6DF1\u957F\u7684\u6292\u60C5\u610F\u5473\u3002
\u6A2A\u5411\u5BF9\u8BFB
\u5E84\u751F\uFF0F\u671B\u5E1D\u3001\u6653\u68A6\uFF0F\u6625\u5FC3\u3001\u8FF7\uFF0F\u6258\u3001\u8774\u8776\uFF0F\u675C\u9E43\u5F62\u6210\u5C42\u5C42\u5BF9\u5E94\u3002\u6574\u9F50\u7684\u5F62\u5F0F\u5BB9\u7EB3\u4E86\u4E0D\u540C\u7684\u7ECF\u9A8C\u3002
\u201C\u8FF7\u201D\u5199\u7F8E\u597D\u7684\u96BE\u8FA8\uFF0C\u201C\u6258\u201D\u5199\u5FC3\u610F\u7684\u6301\u7EED\u3002\u4E24\u53E5\u76F8\u4E92\u7167\u4EAE\uFF0C\u4E3A\u540E\u9762\u7684\u73E0\u6CEA\u3001\u7389\u70DF\u79EF\u84C4\u60C5\u611F\u3002`,speaker:"\u5218\u5609\u4E50",layout:"annotated",variant:"scholarly"},{scene:6,title:"\u6587\u672C\u4E0E\u95EE\u9898\uFF1A\u5168\u8BD7\u91CD\u8BFB",eye:"\u56DB \xB7 \u516B\u53E5\u5982\u4F55\u5F62\u6210\u4E00\u7BC7",body:'<div class="poem-full">\u9526\u745F\u65E0\u7AEF\u4E94\u5341\u5F26\uFF0C\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74\u3002<br>\u5E84\u751F\u6653\u68A6\u8FF7\u8774\u8776\uFF0C\u671B\u5E1D\u6625\u5FC3\u6258\u675C\u9E43\u3002<br>\u6CA7\u6D77\u6708\u660E\u73E0\u6709\u6CEA\uFF0C\u84DD\u7530\u65E5\u6696\u7389\u751F\u70DF\u3002<br>\u6B64\u60C5\u53EF\u5F85\u6210\u8FFD\u5FC6\uFF0C\u53EA\u662F\u5F53\u65F6\u5DF2\u60D8\u7136\u3002</div><p class="argument">\u201C\u601D\u534E\u5E74\u201D\u9886\u8D77\uFF0C\u201C\u6B64\u60C5\u201D\u603B\u627F\uFF0C\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u56DE\u7167\u5168\u7BC7\u3002</p>',note:"\u4F59\u5BA3\u5747\uFF1A\u9996\u8054\u7531\u5F26\u58F0\u8FDB\u5165\u8FFD\u5FC6\uFF0C\u9894\u8054\u4EE5\u5178\u6545\u5199\u60C5\uFF0C\u9888\u8054\u628A\u611F\u53D7\u5316\u4E3A\u666F\u8C61\uFF0C\u5C3E\u8054\u518D\u56DE\u5230\u65F6\u95F4\u3002\u5F26\u3001\u5E74\u3001\u9E43\u3001\u70DF\u3001\u7136\u7684\u97F5\u58F0\uFF0C\u5C06\u516B\u53E5\u8FDE\u6210\u4E00\u7BC7\u3002",speaker:"\u4F59\u5BA3\u5747",source:"\u6B63\u6587 S7\uFF1B\u5F15\u8BD7\u5F02\u6587 S11",layout:"reading",variant:"fullpoem"},{scene:6,title:"\u201C\u6258\u201D\u4F7F\u6625\u5FC3\u5EF6\u7EED",eye:"\u56DB \xB7 \u671B\u5E1D\u6625\u5FC3\u6258\u675C\u9E43",body:'<p class="argument">\u675C\u9E43\u7684\u58F0\u97F3\uFF0C\u8BA9\u4E00\u4EFD\u672A\u5C3D\u7684\u5FC3\u610F\u83B7\u5F97\u65B0\u7684\u5BC4\u5BD3\u3002</p><div class="critical-columns"><section><h2>\u6625\u5FC3\u4E0E\u751F\u547D\u7684\u840C\u52A8</h2><p>\u201C\u6625\u201D\u5E26\u7740\u65F6\u4EE4\u3001\u751F\u673A\u4E0E\u613F\u671B\u7684\u8054\u60F3\uFF0C\u201C\u5FC3\u201D\u5C06\u60C5\u601D\u96C6\u4E2D\u4E8E\u4E3B\u4F53\u3002\u6625\u5FC3\u56E0\u800C\u5305\u542B\u6DF1\u60C5\uFF0C\u4E5F\u5305\u542B\u5C1A\u5F85\u5B9E\u73B0\u7684\u671F\u5F85\u3002</p><p>\u201C\u6258\u201D\u5EFA\u7ACB\u4E00\u79CD\u5BC4\u5BD3\u5173\u7CFB\uFF1A\u4E3B\u4F53\u7684\u5FC3\u610F\u501F\u53E6\u4E00\u79CD\u751F\u547D\u5F62\u6001\u800C\u5B58\u5728\uFF0C\u58F0\u97F3\u6210\u4E3A\u611F\u60C5\u7684\u5EF6\u7EED\u3002</p></section><section><h2>\u671B\u5E1D\u7684\u6587\u5316\u8BB0\u5FC6</h2><p>\u300A\u534E\u9633\u56FD\u5FD7\xB7\u8700\u5FD7\u300B\u5C06\u671B\u5E1D\u4E0E\u8700\u4EBA\u542C\u5B50\u9E43\u7684\u60B2\u611F\u8054\u7CFB\u8D77\u6765\u3002\u6731\u9E64\u9F84\u6CE8\u53C8\u5F15\u300A\u6210\u90FD\u7EAA\u300B\u7684\u6B7B\u540E\u5316\u9E1F\u4F20\u8BF4\u3002</p><p>\u8BD7\u5C06\u8FD9\u4E9B\u8BB0\u5FC6\u51DD\u6210\u201C\u671B\u5E1D\u2014\u6625\u5FC3\u2014\u675C\u9E43\u201D\u7684\u5173\u7CFB\u3002\u6545\u4E8B\u7684\u8FC7\u7A0B\u9000\u5230\u80CC\u540E\uFF0C\u672A\u5C3D\u4E4B\u60C5\u5219\u7531\u9E1F\u9E23\u7EE7\u7EED\u4F20\u6765\u3002</p></section></div>',note:`\u5218\u5609\u4E50\uFF1A\u675C\u9E43\u7684\u58F0\u97F3\uFF0C\u8BA9\u4E00\u4EFD\u672A\u5C3D\u7684\u5FC3\u610F\u83B7\u5F97\u65B0\u7684\u5BC4\u5BD3\u3002
\u6625\u5FC3\u4E0E\u751F\u547D\u7684\u840C\u52A8
\u201C\u6625\u201D\u5E26\u7740\u65F6\u4EE4\u3001\u751F\u673A\u4E0E\u613F\u671B\u7684\u8054\u60F3\uFF0C\u201C\u5FC3\u201D\u5C06\u60C5\u601D\u96C6\u4E2D\u4E8E\u4E3B\u4F53\u3002\u6625\u5FC3\u56E0\u800C\u5305\u542B\u6DF1\u60C5\uFF0C\u4E5F\u5305\u542B\u5C1A\u5F85\u5B9E\u73B0\u7684\u671F\u5F85\u3002
\u201C\u6258\u201D\u5EFA\u7ACB\u4E00\u79CD\u5BC4\u5BD3\u5173\u7CFB\uFF1A\u4E3B\u4F53\u7684\u5FC3\u610F\u501F\u53E6\u4E00\u79CD\u751F\u547D\u5F62\u6001\u800C\u5B58\u5728\uFF0C\u58F0\u97F3\u6210\u4E3A\u611F\u60C5\u7684\u5EF6\u7EED\u3002
\u671B\u5E1D\u7684\u6587\u5316\u8BB0\u5FC6
\u300A\u534E\u9633\u56FD\u5FD7\xB7\u8700\u5FD7\u300B\u5C06\u671B\u5E1D\u4E0E\u8700\u4EBA\u542C\u5B50\u9E43\u7684\u60B2\u611F\u8054\u7CFB\u8D77\u6765\u3002\u6731\u9E64\u9F84\u6CE8\u53C8\u5F15\u300A\u6210\u90FD\u7EAA\u300B\u7684\u6B7B\u540E\u5316\u9E1F\u4F20\u8BF4\u3002
\u8BD7\u5C06\u8FD9\u4E9B\u8BB0\u5FC6\u51DD\u6210\u201C\u671B\u5E1D\u2014\u6625\u5FC3\u2014\u675C\u9E43\u201D\u7684\u5173\u7CFB\u3002\u6545\u4E8B\u7684\u8FC7\u7A0B\u9000\u5230\u80CC\u540E\uFF0C\u672A\u5C3D\u4E4B\u60C5\u5219\u7531\u9E1F\u9E23\u7EE7\u7EED\u4F20\u6765\u3002`,speaker:"\u5218\u5609\u4E50",source:"\u300A\u534E\u9633\u56FD\u5FD7\u300BS8\uFF1B\u6731\u9E64\u9F84\u5F15\u300A\u6210\u90FD\u7EAA\u300BS10",layout:"reading",variant:"scholarly"},{scene:6,title:"\u53D8\u5316\u4E4B\u4E2D\uFF0C\u60C5\u610F\u4ECD\u5728",eye:"\u56DB \xB7 \u5178\u6545\u5E76\u7F6E\u7684\u7ED3\u6784\u529F\u80FD",body:'<p class="argument">\u68A6\u8776\u4E0E\u5316\u9E1F\u5177\u6709\u53D8\u5316\u7684\u5171\u540C\u80CC\u666F\uFF0C\u201C\u8FF7\u201D\u4E0E\u201C\u6258\u201D\u5374\u4F7F\u611F\u53D7\u8D70\u5411\u4E0D\u540C\u65B9\u5411\u3002</p><div class="critical-columns"><section><h2>\u5BF9\u5E94\u4E2D\u7684\u5DEE\u5F02</h2><p>\u5E84\u751F\u4E0E\u671B\u5E1D\u4EE5\u4EBA\u540D\u9886\u53E5\uFF0C\u6653\u68A6\u4E0E\u6625\u5FC3\u5747\u4E3A\u504F\u6B63\u77ED\u8BED\uFF0C\u8FF7\u4E0E\u6258\u53C8\u5206\u522B\u8FDE\u7F00\u8774\u8776\u3001\u675C\u9E43\u3002</p><p>\u68A6\u7684\u8F7B\u76C8\u4E0E\u9E1F\u9E23\u7684\u6DF1\u5207\uFF0C\u5728\u6574\u9F50\u7684\u53E5\u5F0F\u4E2D\u76F8\u4E92\u6BD4\u8F83\u3002\u5F62\u5F0F\u5EFA\u7ACB\u5173\u8054\uFF0C\u52A8\u8BCD\u5219\u4FDD\u7559\u6BCF\u4E00\u53E5\u7684\u72EC\u7279\u610F\u5473\u3002</p></section><section><h2>\u8FFD\u5FC6\u7684\u4E24\u79CD\u59FF\u6001</h2><p>\u201C\u6653\u201D\u6307\u5411\u4E00\u65E5\u5C06\u660E\uFF0C\u201C\u6625\u201D\u6307\u5411\u4E00\u5E74\u840C\u53D1\uFF1B\u68A6\u53EF\u80FD\u6563\u53BB\uFF0C\u5FC3\u610F\u5374\u4ECD\u6709\u5BC4\u6258\u3002\u77ED\u6682\u4E0E\u6301\u7EED\u5728\u9894\u8054\u4E2D\u540C\u65F6\u5B58\u5728\u3002</p><p>\u4E24\u5219\u5178\u6545\u7531\u201C\u601D\u534E\u5E74\u201D\u7EDF\u6444\uFF0C\u6210\u4E3A\u540C\u4E00\u8FFD\u5FC6\u7684\u4E24\u4E2A\u4FA7\u9762\uFF1A\u66FE\u7ECF\u771F\u5207\u800C\u5982\u4ECA\u96BE\u51ED\uFF0C\u5F62\u6001\u5DF2\u53D8\u800C\u611F\u60C5\u4ECD\u6DF1\u3002</p></section></div>',note:`\u5218\u5609\u4E50\uFF1A\u68A6\u8776\u4E0E\u5316\u9E1F\u5177\u6709\u53D8\u5316\u7684\u5171\u540C\u80CC\u666F\uFF0C\u201C\u8FF7\u201D\u4E0E\u201C\u6258\u201D\u5374\u4F7F\u611F\u53D7\u8D70\u5411\u4E0D\u540C\u65B9\u5411\u3002
\u5BF9\u5E94\u4E2D\u7684\u5DEE\u5F02
\u5E84\u751F\u4E0E\u671B\u5E1D\u4EE5\u4EBA\u540D\u9886\u53E5\uFF0C\u6653\u68A6\u4E0E\u6625\u5FC3\u5747\u4E3A\u504F\u6B63\u77ED\u8BED\uFF0C\u8FF7\u4E0E\u6258\u53C8\u5206\u522B\u8FDE\u7F00\u8774\u8776\u3001\u675C\u9E43\u3002
\u68A6\u7684\u8F7B\u76C8\u4E0E\u9E1F\u9E23\u7684\u6DF1\u5207\uFF0C\u5728\u6574\u9F50\u7684\u53E5\u5F0F\u4E2D\u76F8\u4E92\u6BD4\u8F83\u3002\u5F62\u5F0F\u5EFA\u7ACB\u5173\u8054\uFF0C\u52A8\u8BCD\u5219\u4FDD\u7559\u6BCF\u4E00\u53E5\u7684\u72EC\u7279\u610F\u5473\u3002
\u8FFD\u5FC6\u7684\u4E24\u79CD\u59FF\u6001
\u201C\u6653\u201D\u6307\u5411\u4E00\u65E5\u5C06\u660E\uFF0C\u201C\u6625\u201D\u6307\u5411\u4E00\u5E74\u840C\u53D1\uFF1B\u68A6\u53EF\u80FD\u6563\u53BB\uFF0C\u5FC3\u610F\u5374\u4ECD\u6709\u5BC4\u6258\u3002\u77ED\u6682\u4E0E\u6301\u7EED\u5728\u9894\u8054\u4E2D\u540C\u65F6\u5B58\u5728\u3002
\u4E24\u5219\u5178\u6545\u7531\u201C\u601D\u534E\u5E74\u201D\u7EDF\u6444\uFF0C\u6210\u4E3A\u540C\u4E00\u8FFD\u5FC6\u7684\u4E24\u4E2A\u4FA7\u9762\uFF1A\u66FE\u7ECF\u771F\u5207\u800C\u5982\u4ECA\u96BE\u51ED\uFF0C\u5F62\u6001\u5DF2\u53D8\u800C\u611F\u60C5\u4ECD\u6DF1\u3002`,speaker:"\u5218\u5609\u4E50",source:"\u539F\u8BD7 S7\uFF1B\u5178\u6E90 S6\u3001S8",layout:"reading",variant:"scholarly"},{scene:6,title:"\u73E0\u6CEA\uFF1A\u73CD\u7F8E\u4E0E\u60B2\u611F\u540C\u4F53",eye:"\u56DB \xB7 \u6CA7\u6D77\u6708\u660E\u73E0\u6709\u6CEA",body:'<p class="argument">\u73E0\u7684\u6676\u83B9\u4E0E\u6CEA\u7684\u60B2\u610F\uFF0C\u5728\u201C\u6709\u201D\u5B57\u4E2D\u6210\u4E3A\u540C\u4E00\u79CD\u611F\u53D7\u3002</p><div class="critical-columns"><section><h2>\u4ECE\u6CE3\u73E0\u5230\u73E0\u6709\u6CEA</h2><p>\u300A\u535A\u7269\u5FD7\u300B\u8BB0\u9C9B\u4EBA\u201C\u5176\u773C\u80FD\u6CE3\u73E0\u201D\uFF0C\u662F\u6CEA\u6210\u4E3A\u73E0\u7684\u5F02\u95FB\u3002\u674E\u5546\u9690\u5219\u5199\u201C\u73E0\u6709\u6CEA\u201D\uFF0C\u4F7F\u73CD\u7269\u91CD\u65B0\u663E\u51FA\u6CEA\u7684\u6027\u8D28\u3002</p><p>\u7531\u6CEA\u53CA\u73E0\uFF0C\u518D\u7531\u73E0\u89C1\u6CEA\uFF0C\u7F8E\u4E0E\u75DB\u5F62\u6210\u53CC\u5411\u5173\u8054\u3002\u60C5\u611F\u5BC4\u5BD3\u4E8E\u7269\uFF0C\u8BFB\u8005\u4ECE\u6676\u83B9\u4E4B\u4E2D\u611F\u5230\u6DF1\u957F\u7684\u60B2\u610F\u3002</p></section><section><h2>\u6708\u660E\u7167\u89C1\u60B2\u60C5</h2><p>\u201C\u6CA7\u6D77\u201D\u62D3\u5927\u7A7A\u95F4\uFF0C\u201C\u6708\u660E\u201D\u7167\u89C1\u73E0\u5149\u3002\u5E7F\u8FDC\u4E0E\u6F84\u660E\uFF0C\u4F7F\u73CD\u7F8E\u3001\u5B64\u72EC\u548C\u60B2\u611F\u540C\u65F6\u663E\u73B0\u3002</p><p>\u4E0E\u201C\u7389\u751F\u70DF\u201D\u5BF9\u8BFB\uFF0C\u73E0\u4F3C\u6709\u53EF\u4EE5\u51DD\u805A\u7684\u5B9E\u4F53\uFF0C\u6CEA\u5374\u66B4\u9732\u5176\u60C5\u611F\u6765\u6E90\u3002\u8FFD\u5FC6\u4E2D\u7684\u7F8E\uFF0C\u4E5F\u56E0\u8FD9\u4EFD\u60B2\u610F\u800C\u66F4\u663E\u52A8\u4EBA\u3002</p></section></div>',note:`\u4F59\u5BA3\u5747\uFF1A\u73E0\u7684\u6676\u83B9\u4E0E\u6CEA\u7684\u60B2\u610F\uFF0C\u5728\u201C\u6709\u201D\u5B57\u4E2D\u6210\u4E3A\u540C\u4E00\u79CD\u611F\u53D7\u3002
\u4ECE\u6CE3\u73E0\u5230\u73E0\u6709\u6CEA
\u300A\u535A\u7269\u5FD7\u300B\u8BB0\u9C9B\u4EBA\u201C\u5176\u773C\u80FD\u6CE3\u73E0\u201D\uFF0C\u662F\u6CEA\u6210\u4E3A\u73E0\u7684\u5F02\u95FB\u3002\u674E\u5546\u9690\u5219\u5199\u201C\u73E0\u6709\u6CEA\u201D\uFF0C\u4F7F\u73CD\u7269\u91CD\u65B0\u663E\u51FA\u6CEA\u7684\u6027\u8D28\u3002
\u7531\u6CEA\u53CA\u73E0\uFF0C\u518D\u7531\u73E0\u89C1\u6CEA\uFF0C\u7F8E\u4E0E\u75DB\u5F62\u6210\u53CC\u5411\u5173\u8054\u3002\u60C5\u611F\u5BC4\u5BD3\u4E8E\u7269\uFF0C\u8BFB\u8005\u4ECE\u6676\u83B9\u4E4B\u4E2D\u611F\u5230\u6DF1\u957F\u7684\u60B2\u610F\u3002
\u6708\u660E\u7167\u89C1\u60B2\u60C5
\u201C\u6CA7\u6D77\u201D\u62D3\u5927\u7A7A\u95F4\uFF0C\u201C\u6708\u660E\u201D\u7167\u89C1\u73E0\u5149\u3002\u5E7F\u8FDC\u4E0E\u6F84\u660E\uFF0C\u4F7F\u73CD\u7F8E\u3001\u5B64\u72EC\u548C\u60B2\u611F\u540C\u65F6\u663E\u73B0\u3002
\u4E0E\u201C\u7389\u751F\u70DF\u201D\u5BF9\u8BFB\uFF0C\u73E0\u4F3C\u6709\u53EF\u4EE5\u51DD\u805A\u7684\u5B9E\u4F53\uFF0C\u6CEA\u5374\u66B4\u9732\u5176\u60C5\u611F\u6765\u6E90\u3002\u8FFD\u5FC6\u4E2D\u7684\u7F8E\uFF0C\u4E5F\u56E0\u8FD9\u4EFD\u60B2\u610F\u800C\u66F4\u663E\u52A8\u4EBA\u3002`,speaker:"\u4F59\u5BA3\u5747",source:"\u300A\u535A\u7269\u5FD7\u300B\u5377\u4E8C S14\uFF1B\u539F\u8BD7 S7",layout:"reading",variant:"scholarly"},{scene:6,title:"\u7389\u70DF\uFF1A\u7F8E\u7684\u663E\u73B0\u4E0E\u8DDD\u79BB",eye:"\u56DB \xB7 \u84DD\u7530\u65E5\u6696\u7389\u751F\u70DF",body:'<p class="argument">\u7389\u7684\u5B9E\u4F53\u4E0E\u70DF\u7684\u8F7B\u76C8\uFF0C\u4F7F\u73CD\u7F8E\u540C\u65F6\u5177\u6709\u53EF\u611F\u4E0E\u96BE\u63E1\u7684\u6027\u8D28\u3002</p><div class="critical-columns"><section><h2>\u201C\u751F\u201D\u7684\u6D41\u52A8\u611F</h2><p>\u201C\u65E5\u6696\u201D\u4E0E\u201C\u6708\u660E\u201D\u76F8\u5BF9\uFF0C\u7531\u51B7\u660E\u8F6C\u4E3A\u6E29\u7166\u3002\u201C\u751F\u201D\u4F7F\u7389\u5411\u5916\u663E\u51FA\u70DF\u6C14\uFF0C\u9759\u7269\u56E0\u800C\u83B7\u5F97\u6D41\u52A8\u7684\u6C14\u8C61\u3002</p><p>\u4E0E\u73E0\u6CEA\u7684\u51DD\u805A\u76F8\u6620\u7167\uFF0C\u7389\u70DF\u4FA7\u91CD\u5F25\u6563\u3002\u5F80\u6614\u4ECD\u6709\u53EF\u611F\u7684\u7F8E\uFF0C\u800C\u8FD9\u4EFD\u7F8E\u53C8\u968F\u7740\u611F\u77E5\u5411\u8FDC\u5904\u5C55\u5F00\u3002</p></section><section><h2>\u53EF\u671B\u7684\u8BD7\u5883</h2><p>\u300A\u56F0\u5B66\u7EAA\u95FB\u300B\u5377\u5341\u516B\u8F6C\u8FF0\u6234\u53D4\u4F26\u7684\u8BD7\u5883\u8BF4\uFF1A\u201C\u53EF\u671B\u800C\u4E0D\u53EF\u7F6E\u4E8E\u7709\u776B\u4E4B\u524D\u3002\u201D\u5B83\u7CBE\u7EC3\u5730\u63CF\u5199\u4E86\u8FD9\u79CD\u8FDC\u8FD1\u5173\u7CFB\u3002</p><p>\u73E0\u4E0E\u7389\u5171\u540C\u6807\u8BC6\u73CD\u7F8E\uFF0C\u6CEA\u4E0E\u70DF\u5219\u5206\u522B\u6DFB\u5165\u60B2\u611F\u4E0E\u8DDD\u79BB\u3002\u56DB\u8005\u76F8\u4E92\u7167\u6620\uFF0C\u6700\u540E\u6C47\u5165\u201C\u60D8\u7136\u201D\u7684\u6574\u4F53\u611F\u53D7\u3002</p></section></div>',note:`\u4F59\u5BA3\u5747\uFF1A\u7389\u7684\u5B9E\u4F53\u4E0E\u70DF\u7684\u8F7B\u76C8\uFF0C\u4F7F\u73CD\u7F8E\u540C\u65F6\u5177\u6709\u53EF\u611F\u4E0E\u96BE\u63E1\u7684\u6027\u8D28\u3002
\u201C\u751F\u201D\u7684\u6D41\u52A8\u611F
\u201C\u65E5\u6696\u201D\u4E0E\u201C\u6708\u660E\u201D\u76F8\u5BF9\uFF0C\u7531\u51B7\u660E\u8F6C\u4E3A\u6E29\u7166\u3002\u201C\u751F\u201D\u4F7F\u7389\u5411\u5916\u663E\u51FA\u70DF\u6C14\uFF0C\u9759\u7269\u56E0\u800C\u83B7\u5F97\u6D41\u52A8\u7684\u6C14\u8C61\u3002
\u4E0E\u73E0\u6CEA\u7684\u51DD\u805A\u76F8\u6620\u7167\uFF0C\u7389\u70DF\u4FA7\u91CD\u5F25\u6563\u3002\u5F80\u6614\u4ECD\u6709\u53EF\u611F\u7684\u7F8E\uFF0C\u800C\u8FD9\u4EFD\u7F8E\u53C8\u968F\u7740\u611F\u77E5\u5411\u8FDC\u5904\u5C55\u5F00\u3002
\u53EF\u671B\u7684\u8BD7\u5883
\u300A\u56F0\u5B66\u7EAA\u95FB\u300B\u5377\u5341\u516B\u8F6C\u8FF0\u6234\u53D4\u4F26\u7684\u8BD7\u5883\u8BF4\uFF1A\u201C\u53EF\u671B\u800C\u4E0D\u53EF\u7F6E\u4E8E\u7709\u776B\u4E4B\u524D\u3002\u201D\u5B83\u7CBE\u7EC3\u5730\u63CF\u5199\u4E86\u8FD9\u79CD\u8FDC\u8FD1\u5173\u7CFB\u3002
\u73E0\u4E0E\u7389\u5171\u540C\u6807\u8BC6\u73CD\u7F8E\uFF0C\u6CEA\u4E0E\u70DF\u5219\u5206\u522B\u6DFB\u5165\u60B2\u611F\u4E0E\u8DDD\u79BB\u3002\u56DB\u8005\u76F8\u4E92\u7167\u6620\uFF0C\u6700\u540E\u6C47\u5165\u201C\u60D8\u7136\u201D\u7684\u6574\u4F53\u611F\u53D7\u3002`,speaker:"\u4F59\u5BA3\u5747",source:"\u300A\u56F0\u5B66\u7EAA\u95FB\u300B\u5377\u5341\u516B S9\uFF1B\u539F\u8BD7 S7",layout:"reading",variant:"scholarly"},{scene:6,title:"\u201C\u5DF2\u201D\u91CD\u5B9A\u5168\u8BD7\u7684\u65F6\u95F4",eye:"\u56DB \xB7 \u201C\u53EF\u5F85\u201D\u201C\u53EA\u662F\u201D\u201C\u5DF2\u201D",body:'<p class="argument">\u60D8\u7136\u5B58\u5728\u4E8E\u8FFD\u5FC6\u7684\u4ECA\u65E5\uFF0C\u4E5F\u5B58\u5728\u4E8E\u534E\u5E74\u53D1\u751F\u7684\u5F53\u65F6\u3002</p><div class="critical-columns"><section><h2>\u53CD\u95EE\u4E0E\u56DE\u6298</h2><p>\u201C\u53EF\u5F85\u201D\u53D6\u53CD\u95EE\u8BED\u6C14\uFF0C\u610F\u4E3A\u201C\u54EA\u91CC\u8981\u7B49\u5230\u6210\u4E3A\u8FFD\u5FC6\u624D\u5982\u6B64\u201D\u3002\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u5F15\u8BD7\u4F5C\u201C\u4F55\u5F85\u201D\uFF0C\u5448\u73B0\u76F8\u8FD1\u7684\u95EE\u610F\u3002</p><p>\u201C\u53EA\u662F\u201D\u628A\u76EE\u5149\u4ECE\u4ECA\u65E5\u6298\u56DE\u5F53\u65F6\uFF0C\u5C3E\u8054\u56E0\u800C\u7531\u611F\u53F9\u6DF1\u5165\u5230\u5BF9\u7ECF\u5386\u7684\u91CD\u65B0\u8BA4\u8BC6\u3002</p></section><section><h2>\u5F53\u65F6\u4E0E\u4ECA\u65E5</h2><p>\u201C\u5F53\u65F6\u201D\u6307\u5411\u534E\u5E74\uFF0C\u201C\u5DF2\u201D\u628A\u60D8\u7136\u63D0\u524D\u5230\u90A3\u4E2A\u65F6\u523B\u3002\u68A6\u4E4B\u8FF7\u3001\u73E0\u4E4B\u6CEA\u3001\u7389\u4E4B\u70DF\uFF0C\u4E5F\u7531\u6B64\u83B7\u5F97\u66F4\u6DF1\u7684\u65F6\u95F4\u610F\u5473\u3002</p><p>\u7ECF\u9A8C\u5728\u53D1\u751F\u4E4B\u4E2D\u5C31\u6709\u7F8E\u597D\u4E0E\u672A\u660E\uFF0C\u8FFD\u5FC6\u53C8\u8BA9\u5B83\u4EEC\u4E00\u540C\u8FD4\u56DE\u3002\u5168\u8BD7\u7684\u60C5\u611F\u56E0\u6B64\u5F62\u6210\u5C42\u5C42\u56DE\u6298\uFF0C\u4F59\u610F\u7EF5\u957F\u3002</p></section></div>',note:`\u4F59\u5BA3\u5747\uFF1A\u60D8\u7136\u5B58\u5728\u4E8E\u8FFD\u5FC6\u7684\u4ECA\u65E5\uFF0C\u4E5F\u5B58\u5728\u4E8E\u534E\u5E74\u53D1\u751F\u7684\u5F53\u65F6\u3002
\u53CD\u95EE\u4E0E\u56DE\u6298
\u201C\u53EF\u5F85\u201D\u53D6\u53CD\u95EE\u8BED\u6C14\uFF0C\u610F\u4E3A\u201C\u54EA\u91CC\u8981\u7B49\u5230\u6210\u4E3A\u8FFD\u5FC6\u624D\u5982\u6B64\u201D\u3002\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u5F15\u8BD7\u4F5C\u201C\u4F55\u5F85\u201D\uFF0C\u5448\u73B0\u76F8\u8FD1\u7684\u95EE\u610F\u3002
\u201C\u53EA\u662F\u201D\u628A\u76EE\u5149\u4ECE\u4ECA\u65E5\u6298\u56DE\u5F53\u65F6\uFF0C\u5C3E\u8054\u56E0\u800C\u7531\u611F\u53F9\u6DF1\u5165\u5230\u5BF9\u7ECF\u5386\u7684\u91CD\u65B0\u8BA4\u8BC6\u3002
\u5F53\u65F6\u4E0E\u4ECA\u65E5
\u201C\u5F53\u65F6\u201D\u6307\u5411\u534E\u5E74\uFF0C\u201C\u5DF2\u201D\u628A\u60D8\u7136\u63D0\u524D\u5230\u90A3\u4E2A\u65F6\u523B\u3002\u68A6\u4E4B\u8FF7\u3001\u73E0\u4E4B\u6CEA\u3001\u7389\u4E4B\u70DF\uFF0C\u4E5F\u7531\u6B64\u83B7\u5F97\u66F4\u6DF1\u7684\u65F6\u95F4\u610F\u5473\u3002
\u7ECF\u9A8C\u5728\u53D1\u751F\u4E4B\u4E2D\u5C31\u6709\u7F8E\u597D\u4E0E\u672A\u660E\uFF0C\u8FFD\u5FC6\u53C8\u8BA9\u5B83\u4EEC\u4E00\u540C\u8FD4\u56DE\u3002\u5168\u8BD7\u7684\u60C5\u611F\u56E0\u6B64\u5F62\u6210\u5C42\u5C42\u56DE\u6298\uFF0C\u4F59\u610F\u7EF5\u957F\u3002`,speaker:"\u4F59\u5BA3\u5747",source:"\u6B63\u6587 S7\uFF1B\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u5F15\u8BD7 S11",layout:"reading",variant:"scholarly"},{scene:6,title:"\u9996\u5C3E\u76F8\u5E94\uFF0C\u610F\u8C61\u76F8\u901A",eye:"\u4E94 \xB7 \u5F8B\u8BD7\u7684\u6574\u4F53\u7EC4\u7EC7",body:'<p class="argument">\u201C\u601D\u534E\u5E74\u201D\u63D0\u51FA\u8FFD\u5FC6\u5BF9\u8C61\uFF0C\u201C\u6B64\u60C5\u201D\u56DE\u6536\u56DB\u4E2A\u610F\u8C61\uFF0C\u201C\u60D8\u7136\u201D\u7ED9\u51FA\u60C5\u611F\u5F52\u5BBF\u3002</p><div class="critical-columns"><section><h2>\u9996\u5C3E\u7684\u6846\u67B6</h2><p>\u9996\u8054\u4ECE\u773C\u524D\u4E4B\u745F\u51FA\u53D1\uFF0C\u5C3E\u8054\u4EE5\u201C\u8FFD\u5FC6\u201D\u201C\u5F53\u65F6\u201D\u8FD4\u56DE\u65F6\u95F4\u3002\u4E2D\u95F4\u56DB\u53E5\u7F6E\u4E8E\u8FD9\u4E24\u91CD\u65F6\u95F4\u4E4B\u95F4\uFF0C\u5F62\u6210\u88AB\u5F26\u58F0\u5524\u8D77\u7684\u611F\u53D7\u4E16\u754C\u3002</p><p>\u201C\u6B64\u60C5\u201D\u5177\u6709\u603B\u627F\u4F5C\u7528\uFF0C\u628A\u68A6\u7684\u8FF7\u79BB\u3001\u6625\u5FC3\u7684\u5BC4\u6258\u3001\u73E0\u4E2D\u7684\u6CEA\u4E0E\u7389\u4E0A\u7684\u70DF\u6536\u62E2\u8D77\u6765\u3002</p></section><section><h2>\u5171\u540C\u7684\u5448\u73B0\u65B9\u5F0F</h2><p>\u4EBA\u501F\u68A6\u4E0E\u8776\u76F8\u8054\u7CFB\uFF0C\u5FC3\u501F\u9E1F\u58F0\u6709\u6240\u6258\uFF0C\u6CEA\u4EE5\u73E0\u663E\u73B0\uFF0C\u7389\u4EE5\u70DF\u663E\u73B0\u3002\u5185\u5728\u7ECF\u9A8C\u90FD\u901A\u8FC7\u53E6\u4E00\u79CD\u5F62\u6001\u88AB\u611F\u77E5\u3002</p><p>\u8FD9\u4E9B\u5F62\u6001\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u4F7F\u8BD7\u540C\u65F6\u62E5\u6709\u9C9C\u660E\u7684\u7269\u8C61\u4E0E\u6DF1\u8FDC\u7684\u4F59\u610F\u3002\u60D8\u7136\u4FBF\u5728\u53EF\u611F\u4E0E\u96BE\u4EE5\u5C3D\u8A00\u4E4B\u95F4\u751F\u6210\u3002</p></section></div>',note:`\u5218\u5609\u4E50\uFF1A\u201C\u601D\u534E\u5E74\u201D\u63D0\u51FA\u8FFD\u5FC6\u5BF9\u8C61\uFF0C\u201C\u6B64\u60C5\u201D\u56DE\u6536\u56DB\u4E2A\u610F\u8C61\uFF0C\u201C\u60D8\u7136\u201D\u7ED9\u51FA\u60C5\u611F\u5F52\u5BBF\u3002
\u9996\u5C3E\u7684\u6846\u67B6
\u9996\u8054\u4ECE\u773C\u524D\u4E4B\u745F\u51FA\u53D1\uFF0C\u5C3E\u8054\u4EE5\u201C\u8FFD\u5FC6\u201D\u201C\u5F53\u65F6\u201D\u8FD4\u56DE\u65F6\u95F4\u3002\u4E2D\u95F4\u56DB\u53E5\u7F6E\u4E8E\u8FD9\u4E24\u91CD\u65F6\u95F4\u4E4B\u95F4\uFF0C\u5F62\u6210\u88AB\u5F26\u58F0\u5524\u8D77\u7684\u611F\u53D7\u4E16\u754C\u3002
\u201C\u6B64\u60C5\u201D\u5177\u6709\u603B\u627F\u4F5C\u7528\uFF0C\u628A\u68A6\u7684\u8FF7\u79BB\u3001\u6625\u5FC3\u7684\u5BC4\u6258\u3001\u73E0\u4E2D\u7684\u6CEA\u4E0E\u7389\u4E0A\u7684\u70DF\u6536\u62E2\u8D77\u6765\u3002
\u5171\u540C\u7684\u5448\u73B0\u65B9\u5F0F
\u4EBA\u501F\u68A6\u4E0E\u8776\u76F8\u8054\u7CFB\uFF0C\u5FC3\u501F\u9E1F\u58F0\u6709\u6240\u6258\uFF0C\u6CEA\u4EE5\u73E0\u663E\u73B0\uFF0C\u7389\u4EE5\u70DF\u663E\u73B0\u3002\u5185\u5728\u7ECF\u9A8C\u90FD\u901A\u8FC7\u53E6\u4E00\u79CD\u5F62\u6001\u88AB\u611F\u77E5\u3002
\u8FD9\u4E9B\u5F62\u6001\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u4F7F\u8BD7\u540C\u65F6\u62E5\u6709\u9C9C\u660E\u7684\u7269\u8C61\u4E0E\u6DF1\u8FDC\u7684\u4F59\u610F\u3002\u60D8\u7136\u4FBF\u5728\u53EF\u611F\u4E0E\u96BE\u4EE5\u5C3D\u8A00\u4E4B\u95F4\u751F\u6210\u3002`,speaker:"\u5218\u5609\u4E50",source:"\u539F\u8BD7 S7",layout:"reading",variant:"scholarly"},{scene:6,title:"\u4ECE\u5B8B\u4EBA\u8BD7\u8BDD\u5230\u5143\u597D\u95EE",eye:"\u4E94 \xB7 \u4ECE\u5218\u653D\u5230\u5143\u597D\u95EE",speaker:"\u5218\u5609\u4E50",note:`\u5218\u5609\u4E50\uFF1A\u300A\u9526\u745F\u300B\u7684\u63A5\u53D7\u53F2\uFF0C\u59CB\u7EC8\u4EA4\u7EC7\u7740\u5BF9\u8BD7\u7F8E\u7684\u6B23\u8D4F\u4E0E\u5BF9\u8BD7\u65E8\u7684\u8FFD\u5BFB\u3002
\u5218\u653D\u7684\u8BB0\u8F7D
\u300A\u4E2D\u5C71\u8BD7\u8BDD\u300B\u8BF4\u201C\u4EBA\u83AB\u6653\u5176\u610F\u201D\uFF0C\u53C8\u8BB0\u201C\u6216\u8C13\u201D\u9526\u745F\u662F\u4EE4\u72D0\u695A\u5BB6\u9752\u8863\u4E4B\u540D\u3002\u8FD9\u79CD\u9898\u76EE\u4EBA\u540D\u5316\u7684\u8BFB\u6CD5\uFF0C\u8BD5\u56FE\u7528\u4E00\u6BB5\u672C\u4E8B\u6765\u8D2F\u901A\u5168\u8BD7\u3002
\u201C\u6216\u8C13\u201D\u7684\u63AA\u8F9E\u4FDD\u5B58\u4E86\u5B8B\u4EBA\u8BA8\u8BBA\u65F6\u7684\u5F00\u653E\u72B6\u6001\uFF0C\u4E5F\u663E\u793A\u300A\u9526\u745F\u300B\u5F88\u65E9\u5C31\u6210\u4E3A\u5BCC\u4E8E\u89E3\u91CA\u5F20\u529B\u7684\u4F5C\u54C1\u3002
\u5143\u597D\u95EE\u7684\u671F\u5F85
\u300A\u8BBA\u8BD7\u4E09\u5341\u9996\u300B\u5176\u5341\u4E8C\u4E91\uFF1A\u201C\u8BD7\u5BB6\u603B\u7231\u897F\u6606\u597D\uFF0C\u72EC\u6068\u65E0\u4EBA\u4F5C\u90D1\u7B3A\u3002\u201D\u90D1\u7B3A\u4EE5\u6CE8\u7ECF\u4F20\u7EDF\u4EE3\u6307\u6DF1\u5165\u7684\u7B3A\u91CA\u3002
\u8FD9\u4E24\u53E5\u628A\u6B23\u8D4F\u4E0E\u7406\u89E3\u5E76\u7F6E\uFF1A\u8BD7\u7F8E\u5DF2\u7ECF\u52A8\u4EBA\uFF0C\u8BD7\u610F\u4ECD\u503C\u5F97\u53CD\u590D\u63A2\u5BFB\u3002\u540E\u4E16\u7684\u591A\u79CD\u8BFB\u6CD5\uFF0C\u4E5F\u5728\u8FD9\u4E00\u5F20\u529B\u4E2D\u4E0D\u65AD\u751F\u957F\u3002`,layout:"reading",variant:"scholarly",source:"\u5218\u653D\u300A\u4E2D\u5C71\u8BD7\u8BDD\u300BS17\uFF1B\u5143\u597D\u95EE\u300A\u8BBA\u8BD7\u300BS13",body:'<p class="argument">\u300A\u9526\u745F\u300B\u7684\u63A5\u53D7\u53F2\uFF0C\u59CB\u7EC8\u4EA4\u7EC7\u7740\u5BF9\u8BD7\u7F8E\u7684\u6B23\u8D4F\u4E0E\u5BF9\u8BD7\u65E8\u7684\u8FFD\u5BFB\u3002</p><div class="critical-columns"><section><h2>\u5218\u653D\u7684\u8BB0\u8F7D</h2><p>\u300A\u4E2D\u5C71\u8BD7\u8BDD\u300B\u8BF4\u201C\u4EBA\u83AB\u6653\u5176\u610F\u201D\uFF0C\u53C8\u8BB0\u201C\u6216\u8C13\u201D\u9526\u745F\u662F\u4EE4\u72D0\u695A\u5BB6\u9752\u8863\u4E4B\u540D\u3002\u8FD9\u79CD\u9898\u76EE\u4EBA\u540D\u5316\u7684\u8BFB\u6CD5\uFF0C\u8BD5\u56FE\u7528\u4E00\u6BB5\u672C\u4E8B\u6765\u8D2F\u901A\u5168\u8BD7\u3002</p><p>\u201C\u6216\u8C13\u201D\u7684\u63AA\u8F9E\u4FDD\u5B58\u4E86\u5B8B\u4EBA\u8BA8\u8BBA\u65F6\u7684\u5F00\u653E\u72B6\u6001\uFF0C\u4E5F\u663E\u793A\u300A\u9526\u745F\u300B\u5F88\u65E9\u5C31\u6210\u4E3A\u5BCC\u4E8E\u89E3\u91CA\u5F20\u529B\u7684\u4F5C\u54C1\u3002</p></section><section><h2>\u5143\u597D\u95EE\u7684\u671F\u5F85</h2><p>\u300A\u8BBA\u8BD7\u4E09\u5341\u9996\u300B\u5176\u5341\u4E8C\u4E91\uFF1A\u201C\u8BD7\u5BB6\u603B\u7231\u897F\u6606\u597D\uFF0C\u72EC\u6068\u65E0\u4EBA\u4F5C\u90D1\u7B3A\u3002\u201D\u90D1\u7B3A\u4EE5\u6CE8\u7ECF\u4F20\u7EDF\u4EE3\u6307\u6DF1\u5165\u7684\u7B3A\u91CA\u3002</p><p>\u8FD9\u4E24\u53E5\u628A\u6B23\u8D4F\u4E0E\u7406\u89E3\u5E76\u7F6E\uFF1A\u8BD7\u7F8E\u5DF2\u7ECF\u52A8\u4EBA\uFF0C\u8BD7\u610F\u4ECD\u503C\u5F97\u53CD\u590D\u63A2\u5BFB\u3002\u540E\u4E16\u7684\u591A\u79CD\u8BFB\u6CD5\uFF0C\u4E5F\u5728\u8FD9\u4E00\u5F20\u529B\u4E2D\u4E0D\u65AD\u751F\u957F\u3002</p></section></div>'},{scene:6,title:"\u201C\u53EF\u5F85\u201D\u4E0E\u201C\u4F55\u5F85\u201D\u7684\u53CD\u95EE",eye:"\u4E94 \xB7 \u201C\u53EF\u5F85\u201D\u4E0E\u201C\u4F55\u5F85\u201D",speaker:"\u5218\u5609\u4E50",note:`\u5218\u5609\u4E50\uFF1A\u865A\u5B57\u7684\u7EC6\u5C0F\u53D8\u5316\uFF0C\u4F7F\u5C3E\u8054\u7684\u95EE\u610F\u4E0E\u65F6\u95F4\u5173\u7CFB\u683C\u5916\u9C9C\u660E\u3002
\u53EF\u5F85\u7684\u8BED\u6C14
\u300A\u9526\u745F\u300B\u6B63\u6587\u4F5C\u201C\u53EF\u5F85\u201D\uFF0C\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u5F15\u4F5C\u201C\u4F55\u5F85\u201D\u3002\u4EE5\u53CD\u95EE\u8BFB\u4E4B\uFF0C\u4E24\u8005\u90FD\u628A\u8BED\u610F\u5F15\u5411\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u3002
\u201C\u53EF\u5F85\u201D\u5C06\u8FFD\u5FC6\u4F5C\u4E3A\u4E00\u4E2A\u65F6\u95F4\u8282\u70B9\u63D0\u51FA\uFF0C\u201C\u53EA\u662F\u201D\u53C8\u7ACB\u5373\u6298\u56DE\u6B64\u524D\u3002\u53E5\u6CD5\u4E0A\u7684\u56DE\u8F6C\uFF0C\u6B63\u5BF9\u5E94\u60C5\u611F\u7684\u6DF1\u957F\u3002
\u4ECE\u201C\u5DF2\u201D\u91CD\u8BFB\u534E\u5E74
\u201C\u5DF2\u201D\u4F7F\u4ECA\u65E5\u7684\u611F\u4F24\u4E0E\u5F53\u65F6\u7684\u611F\u53D7\u4E92\u76F8\u6620\u7167\u3002\u90A3\u4E9B\u88AB\u73CD\u89C6\u7684\u5E74\u534E\uFF0C\u5728\u53D1\u751F\u4E4B\u4E2D\u5C31\u5E26\u6709\u96BE\u4EE5\u8A00\u5C3D\u7684\u610F\u5473\u3002
\u8FD9\u6837\u8BFB\u6765\uFF0C\u524D\u9762\u7684\u8FF7\u3001\u6258\u3001\u6CEA\u3001\u70DF\u6210\u4E3A\u65F6\u95F4\u4E2D\u7684\u591A\u5C42\u611F\u53D7\uFF0C\u5C3E\u8054\u4E5F\u7531\u6B64\u628A\u5168\u8BD7\u91CD\u65B0\u7167\u4EAE\u3002`,layout:"reading",variant:"scholarly",source:"\u6B63\u6587 S7\u3001S15\uFF1B\u5F15\u8BD7 S11\uFF1B\u65E7\u6CE8 S10\uFF1B\u4F55\u712F S12",body:'<p class="argument">\u865A\u5B57\u7684\u7EC6\u5C0F\u53D8\u5316\uFF0C\u4F7F\u5C3E\u8054\u7684\u95EE\u610F\u4E0E\u65F6\u95F4\u5173\u7CFB\u683C\u5916\u9C9C\u660E\u3002</p><div class="critical-columns"><section><h2>\u53EF\u5F85\u7684\u8BED\u6C14</h2><p>\u300A\u9526\u745F\u300B\u6B63\u6587\u4F5C\u201C\u53EF\u5F85\u201D\uFF0C\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u5F15\u4F5C\u201C\u4F55\u5F85\u201D\u3002\u4EE5\u53CD\u95EE\u8BFB\u4E4B\uFF0C\u4E24\u8005\u90FD\u628A\u8BED\u610F\u5F15\u5411\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u3002</p><p>\u201C\u53EF\u5F85\u201D\u5C06\u8FFD\u5FC6\u4F5C\u4E3A\u4E00\u4E2A\u65F6\u95F4\u8282\u70B9\u63D0\u51FA\uFF0C\u201C\u53EA\u662F\u201D\u53C8\u7ACB\u5373\u6298\u56DE\u6B64\u524D\u3002\u53E5\u6CD5\u4E0A\u7684\u56DE\u8F6C\uFF0C\u6B63\u5BF9\u5E94\u60C5\u611F\u7684\u6DF1\u957F\u3002</p></section><section><h2>\u4ECE\u201C\u5DF2\u201D\u91CD\u8BFB\u534E\u5E74</h2><p>\u201C\u5DF2\u201D\u4F7F\u4ECA\u65E5\u7684\u611F\u4F24\u4E0E\u5F53\u65F6\u7684\u611F\u53D7\u4E92\u76F8\u6620\u7167\u3002\u90A3\u4E9B\u88AB\u73CD\u89C6\u7684\u5E74\u534E\uFF0C\u5728\u53D1\u751F\u4E4B\u4E2D\u5C31\u5E26\u6709\u96BE\u4EE5\u8A00\u5C3D\u7684\u610F\u5473\u3002</p><p>\u8FD9\u6837\u8BFB\u6765\uFF0C\u524D\u9762\u7684\u8FF7\u3001\u6258\u3001\u6CEA\u3001\u70DF\u6210\u4E3A\u65F6\u95F4\u4E2D\u7684\u591A\u5C42\u611F\u53D7\uFF0C\u5C3E\u8054\u4E5F\u7531\u6B64\u628A\u5168\u8BD7\u91CD\u65B0\u7167\u4EAE\u3002</p></section></div>'},{scene:6,title:"\u58F0\u5F8B\u8BA9\u610F\u8C61\u6210\u4E3A\u4E00\u7BC7",eye:"\u4E94 \xB7 \u4E03\u5F8B\u7684\u5F62\u5F0F\u600E\u6837\u53C2\u4E0E\u610F\u4E49",speaker:"\u5218\u5609\u4E50",note:`\u5218\u5609\u4E50\uFF1A\u8FDE\u7EED\u7684\u97F5\u58F0\u4E0E\u4E24\u8054\u5BF9\u4ED7\uFF0C\u4E3A\u8DF3\u8DC3\u7684\u753B\u9762\u5EFA\u7ACB\u4E86\u6E05\u6670\u7684\u79E9\u5E8F\u3002
\u97F5\u4E0E\u5BF9\u4ED7
\u5168\u8BD7\u4E03\u8A00\u516B\u53E5\uFF0C\u9996\u53E5\u53CA\u5076\u6570\u53E5\u4EE5\u5F26\u3001\u5E74\u3001\u9E43\u3001\u70DF\u3001\u7136\u62BC\u97F5\uFF0C\u540E\u4E16\u5E73\u6C34\u97F5\u5F52\u4E0B\u5E73\u4E00\u5148\u3002\u97F5\u58F0\u4F7F\u516B\u53E5\u524D\u540E\u547C\u5E94\u3002
\u5E84\u751F\uFF0F\u671B\u5E1D\u3001\u6653\u68A6\uFF0F\u6625\u5FC3\u3001\u8FF7\uFF0F\u6258\uFF0C\u4EE5\u53CA\u6CA7\u6D77\uFF0F\u84DD\u7530\u3001\u6708\u660E\uFF0F\u65E5\u6696\u3001\u73E0\u6709\u6CEA\uFF0F\u7389\u751F\u70DF\uFF0C\u5728\u5BF9\u5E94\u4E2D\u5F62\u6210\u4E30\u5BCC\u7684\u6BD4\u8F83\u5173\u7CFB\u3002
\u8282\u594F\u4E0E\u53E5\u610F
\u201C\u4E00\u2026\u2026\u4E00\u2026\u2026\u201D\u4F7F\u58F0\u97F3\u9010\u4E00\u89E6\u53D1\u8FFD\u601D\uFF1B\u201C\u53EF\u5F85\u201D\u201C\u53EA\u662F\u201D\u201C\u5DF2\u201D\u53C8\u7EC4\u7EC7\u5C3E\u8054\u7684\u8F6C\u6298\u4E0E\u65F6\u95F4\u3002
\u6717\u8BFB\u9996\u8054\uFF0C\u53EF\u7A81\u51FA\u590D\u6C93\uFF1B\u8BFB\u4E2D\u95F4\u4E24\u8054\uFF0C\u53EF\u542C\u51FA\u5BF9\u5E94\uFF1B\u8BFB\u5C3E\u8054\uFF0C\u5219\u5C06\u91CD\u5FC3\u843D\u5728\u201C\u5F53\u65F6\u5DF2\u201D\u3002\u58F0\u5F8B\u4E0E\u8BED\u610F\u5171\u540C\u5B8C\u6210\u5168\u7BC7\u3002`,layout:"reading",variant:"scholarly",source:"\u539F\u8BD7 S7\uFF1B\u97F5\u8868 S16",body:'<p class="argument">\u8FDE\u7EED\u7684\u97F5\u58F0\u4E0E\u4E24\u8054\u5BF9\u4ED7\uFF0C\u4E3A\u8DF3\u8DC3\u7684\u753B\u9762\u5EFA\u7ACB\u4E86\u6E05\u6670\u7684\u79E9\u5E8F\u3002</p><div class="critical-columns"><section><h2>\u97F5\u4E0E\u5BF9\u4ED7</h2><p>\u5168\u8BD7\u4E03\u8A00\u516B\u53E5\uFF0C\u9996\u53E5\u53CA\u5076\u6570\u53E5\u4EE5\u5F26\u3001\u5E74\u3001\u9E43\u3001\u70DF\u3001\u7136\u62BC\u97F5\uFF0C\u540E\u4E16\u5E73\u6C34\u97F5\u5F52\u4E0B\u5E73\u4E00\u5148\u3002\u97F5\u58F0\u4F7F\u516B\u53E5\u524D\u540E\u547C\u5E94\u3002</p><p>\u5E84\u751F\uFF0F\u671B\u5E1D\u3001\u6653\u68A6\uFF0F\u6625\u5FC3\u3001\u8FF7\uFF0F\u6258\uFF0C\u4EE5\u53CA\u6CA7\u6D77\uFF0F\u84DD\u7530\u3001\u6708\u660E\uFF0F\u65E5\u6696\u3001\u73E0\u6709\u6CEA\uFF0F\u7389\u751F\u70DF\uFF0C\u5728\u5BF9\u5E94\u4E2D\u5F62\u6210\u4E30\u5BCC\u7684\u6BD4\u8F83\u5173\u7CFB\u3002</p></section><section><h2>\u8282\u594F\u4E0E\u53E5\u610F</h2><p>\u201C\u4E00\u2026\u2026\u4E00\u2026\u2026\u201D\u4F7F\u58F0\u97F3\u9010\u4E00\u89E6\u53D1\u8FFD\u601D\uFF1B\u201C\u53EF\u5F85\u201D\u201C\u53EA\u662F\u201D\u201C\u5DF2\u201D\u53C8\u7EC4\u7EC7\u5C3E\u8054\u7684\u8F6C\u6298\u4E0E\u65F6\u95F4\u3002</p><p>\u6717\u8BFB\u9996\u8054\uFF0C\u53EF\u7A81\u51FA\u590D\u6C93\uFF1B\u8BFB\u4E2D\u95F4\u4E24\u8054\uFF0C\u53EF\u542C\u51FA\u5BF9\u5E94\uFF1B\u8BFB\u5C3E\u8054\uFF0C\u5219\u5C06\u91CD\u5FC3\u843D\u5728\u201C\u5F53\u65F6\u5DF2\u201D\u3002\u58F0\u5F8B\u4E0E\u8BED\u610F\u5171\u540C\u5B8C\u6210\u5168\u7BC7\u3002</p></section></div>'},{scene:6,title:"\u4E09\u79CD\u65E7\u8BF4\u7684\u9605\u8BFB\u91CD\u5FC3",eye:"\u4E94 \xB7 \u548F\u745F\u3001\u60BC\u4EA1\u4E0E\u81EA\u5E8F",body:'<p class="argument">\u548F\u745F\u3001\u60BC\u4EA1\u3001\u81EA\u5E8F\uFF0C\u5206\u522B\u6293\u4F4F\u5668\u7269\u3001\u6DF1\u60C5\u4E0E\u8BD7\u827A\uFF0C\u4E3A\u300A\u9526\u745F\u300B\u5EFA\u7ACB\u4E0D\u540C\u7684\u8054\u7CFB\u3002</p><div class="critical-columns"><section><h2>\u548F\u745F\u4E0E\u60BC\u4EA1</h2><p>\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u4EE5\u201C\u9002\u3001\u6028\u3001\u6E05\u3001\u548C\u201D\u8054\u7ED3\u745F\u58F0\u4E0E\u4E2D\u95F4\u56DB\u53E5\uFF0C\u5C06\u60C5\u7EEA\u53D8\u5316\u653E\u5728\u97F3\u4E50\u7ECF\u9A8C\u4E2D\u7406\u89E3\u3002</p><p>\u6731\u9E64\u9F84\u4EE5\u300A\u623F\u4E2D\u66F2\u300B\u76F8\u53C2\uFF0C\u4F55\u712F\u300A\u4E49\u95E8\u8BFB\u4E66\u8BB0\u300B\u5377\u4E94\u5341\u4E03\u5219\u4E3B\u5F20\u60BC\u4EA1\uFF0C\u5C06\u53D8\u5316\u4E0E\u4E5D\u539F\u7B49\u8054\u60F3\u6C47\u5165\u8FFD\u5FC6\u7684\u60B2\u601D\u3002</p></section><section><h2>\u81EA\u5E8F\u4E0E\u7AE0\u6CD5</h2><p>\u4F55\u712F\u540C\u5377\u8BB0\u5F55\u7A0B\u6E58\u8861\u7684\u81EA\u5E8F\u8BF4\uFF1A\u9894\u8054\u8BF4\u65E8\u8DA3\uFF0C\u9888\u8054\u8BF4\u5320\u5DE7\uFF1B\u53C8\u636E\u540E\u4EBA\u7F16\u96C6\u7684\u60C5\u51B5\u53CD\u5BF9\u8FD9\u4E00\u89E3\u91CA\u3002</p><p>\u56DE\u5230\u7BC7\u5185\u7ED3\u6784\uFF0C\u201C\u601D\u534E\u5E74\u2014\u6B64\u60C5\u2014\u5DF2\u60D8\u7136\u201D\u63D0\u4F9B\u4E86\u4E00\u6761\u8D2F\u7A7F\u516B\u53E5\u7684\u7EBF\u7D22\u3002\u5B83\u8BA9\u4E0D\u540C\u9898\u65E8\u7684\u8BA8\u8BBA\u90FD\u6709\u53EF\u4EE5\u5171\u540C\u7EC6\u8BFB\u7684\u57FA\u7840\u3002</p></section></div>',note:`\u5218\u5609\u4E50\uFF1A\u548F\u745F\u3001\u60BC\u4EA1\u3001\u81EA\u5E8F\uFF0C\u5206\u522B\u6293\u4F4F\u5668\u7269\u3001\u6DF1\u60C5\u4E0E\u8BD7\u827A\uFF0C\u4E3A\u300A\u9526\u745F\u300B\u5EFA\u7ACB\u4E0D\u540C\u7684\u8054\u7CFB\u3002
\u548F\u745F\u4E0E\u60BC\u4EA1
\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u4EE5\u201C\u9002\u3001\u6028\u3001\u6E05\u3001\u548C\u201D\u8054\u7ED3\u745F\u58F0\u4E0E\u4E2D\u95F4\u56DB\u53E5\uFF0C\u5C06\u60C5\u7EEA\u53D8\u5316\u653E\u5728\u97F3\u4E50\u7ECF\u9A8C\u4E2D\u7406\u89E3\u3002
\u6731\u9E64\u9F84\u4EE5\u300A\u623F\u4E2D\u66F2\u300B\u76F8\u53C2\uFF0C\u4F55\u712F\u300A\u4E49\u95E8\u8BFB\u4E66\u8BB0\u300B\u5377\u4E94\u5341\u4E03\u5219\u4E3B\u5F20\u60BC\u4EA1\uFF0C\u5C06\u53D8\u5316\u4E0E\u4E5D\u539F\u7B49\u8054\u60F3\u6C47\u5165\u8FFD\u5FC6\u7684\u60B2\u601D\u3002
\u81EA\u5E8F\u4E0E\u7AE0\u6CD5
\u4F55\u712F\u540C\u5377\u8BB0\u5F55\u7A0B\u6E58\u8861\u7684\u81EA\u5E8F\u8BF4\uFF1A\u9894\u8054\u8BF4\u65E8\u8DA3\uFF0C\u9888\u8054\u8BF4\u5320\u5DE7\uFF1B\u53C8\u636E\u540E\u4EBA\u7F16\u96C6\u7684\u60C5\u51B5\u53CD\u5BF9\u8FD9\u4E00\u89E3\u91CA\u3002
\u56DE\u5230\u7BC7\u5185\u7ED3\u6784\uFF0C\u201C\u601D\u534E\u5E74\u2014\u6B64\u60C5\u2014\u5DF2\u60D8\u7136\u201D\u63D0\u4F9B\u4E86\u4E00\u6761\u8D2F\u7A7F\u516B\u53E5\u7684\u7EBF\u7D22\u3002\u5B83\u8BA9\u4E0D\u540C\u9898\u65E8\u7684\u8BA8\u8BBA\u90FD\u6709\u53EF\u4EE5\u5171\u540C\u7EC6\u8BFB\u7684\u57FA\u7840\u3002`,speaker:"\u5218\u5609\u4E50",source:"\u8BB8\u9857 S11\uFF1B\u6731\u9E64\u9F84 S10\uFF1B\u4F55\u712F S12",layout:"reading",variant:"scholarly"},{scene:6,title:"\u5178\u5BC6\u800C\u60C5\u76F8\u7EED",eye:"\u4E94 \xB7 \u4E3A\u4EC0\u4E48\u5178\u591A\u800C\u60C5\u4E0D\u6563",body:'<p class="argument">\u590D\u6C93\u3001\u5BF9\u4ED7\u3001\u52A8\u8BCD\u4E0E\u6307\u4EE3\uFF0C\u5171\u540C\u7EA6\u675F\u8054\u60F3\u7684\u65B9\u5411\uFF0C\u4F7F\u5178\u6545\u5BC6\u96C6\u800C\u60C5\u7EEA\u8D2F\u901A\u3002</p><div class="critical-columns"><section><h2>\u5173\u7CFB\u80DC\u4E8E\u7F57\u5217</h2><p>\u4E24\u8054\u5BF9\u4ED7\u628A\u6765\u81EA\u4E0D\u540C\u6587\u5316\u80CC\u666F\u7684\u4EBA\u7269\u4E0E\u666F\u8C61\u653E\u5728\u540C\u4E00\u6BD4\u8F83\u5E73\u9762\u3002\u8BCD\u8BED\u4E4B\u95F4\u6709\u4E86\u5BF9\u5E94\uFF0C\u8BFB\u8005\u4FBF\u4F1A\u5728\u5DEE\u5F02\u4E2D\u5BFB\u627E\u8054\u7CFB\u3002</p><p>\u8FF7\u3001\u6258\u3001\u6709\u3001\u751F\uFF0C\u53C8\u5206\u522B\u7EC4\u7EC7\u72B6\u6001\u3001\u5BC4\u5BD3\u3001\u5185\u542B\u4E0E\u663E\u73B0\u3002\u6BCF\u4E00\u4E2A\u52A8\u8BCD\u90FD\u4F7F\u610F\u8C61\u8FDB\u5165\u5177\u4F53\u7684\u60C5\u611F\u5173\u7CFB\u3002</p></section><section><h2>\u660E\u4E3D\u4E2D\u7684\u54C0\u611F</h2><p>\u534E\u5E74\u6709\u73CD\u7F8E\uFF0C\u6625\u5FC3\u6709\u751F\u673A\uFF0C\u6708\u660E\u65E5\u6696\u4E5F\u5E26\u7740\u660E\u4E3D\u7684\u5149\u8272\uFF1B\u8FF7\u3001\u6CEA\u3001\u70DF\u3001\u60D8\u7136\uFF0C\u5219\u4E0D\u65AD\u4F7F\u8FD9\u4E9B\u7ECF\u9A8C\u83B7\u5F97\u6DF1\u8FDC\u7684\u4F59\u610F\u3002</p><p>\u4E3D\u8F9E\u4E0E\u54C0\u611F\u5E76\u5B58\uFF0C\u9C9C\u660E\u4E0E\u6726\u80E7\u76F8\u751F\u3002\u8BD7\u7684\u52A8\u4EBA\u4E4B\u5904\uFF0C\u4E5F\u6B63\u5728\u4E8E\u7F8E\u597D\u7684\u5149\u6CFD\u4E0E\u751F\u547D\u7684\u6005\u60D8\u5F7C\u6B64\u6E17\u900F\u3002</p></section></div>',note:`\u4F59\u5BA3\u5747\uFF1A\u590D\u6C93\u3001\u5BF9\u4ED7\u3001\u52A8\u8BCD\u4E0E\u6307\u4EE3\uFF0C\u5171\u540C\u7EA6\u675F\u8054\u60F3\u7684\u65B9\u5411\uFF0C\u4F7F\u5178\u6545\u5BC6\u96C6\u800C\u60C5\u7EEA\u8D2F\u901A\u3002
\u5173\u7CFB\u80DC\u4E8E\u7F57\u5217
\u4E24\u8054\u5BF9\u4ED7\u628A\u6765\u81EA\u4E0D\u540C\u6587\u5316\u80CC\u666F\u7684\u4EBA\u7269\u4E0E\u666F\u8C61\u653E\u5728\u540C\u4E00\u6BD4\u8F83\u5E73\u9762\u3002\u8BCD\u8BED\u4E4B\u95F4\u6709\u4E86\u5BF9\u5E94\uFF0C\u8BFB\u8005\u4FBF\u4F1A\u5728\u5DEE\u5F02\u4E2D\u5BFB\u627E\u8054\u7CFB\u3002
\u8FF7\u3001\u6258\u3001\u6709\u3001\u751F\uFF0C\u53C8\u5206\u522B\u7EC4\u7EC7\u72B6\u6001\u3001\u5BC4\u5BD3\u3001\u5185\u542B\u4E0E\u663E\u73B0\u3002\u6BCF\u4E00\u4E2A\u52A8\u8BCD\u90FD\u4F7F\u610F\u8C61\u8FDB\u5165\u5177\u4F53\u7684\u60C5\u611F\u5173\u7CFB\u3002
\u660E\u4E3D\u4E2D\u7684\u54C0\u611F
\u534E\u5E74\u6709\u73CD\u7F8E\uFF0C\u6625\u5FC3\u6709\u751F\u673A\uFF0C\u6708\u660E\u65E5\u6696\u4E5F\u5E26\u7740\u660E\u4E3D\u7684\u5149\u8272\uFF1B\u8FF7\u3001\u6CEA\u3001\u70DF\u3001\u60D8\u7136\uFF0C\u5219\u4E0D\u65AD\u4F7F\u8FD9\u4E9B\u7ECF\u9A8C\u83B7\u5F97\u6DF1\u8FDC\u7684\u4F59\u610F\u3002
\u4E3D\u8F9E\u4E0E\u54C0\u611F\u5E76\u5B58\uFF0C\u9C9C\u660E\u4E0E\u6726\u80E7\u76F8\u751F\u3002\u8BD7\u7684\u52A8\u4EBA\u4E4B\u5904\uFF0C\u4E5F\u6B63\u5728\u4E8E\u7F8E\u597D\u7684\u5149\u6CFD\u4E0E\u751F\u547D\u7684\u6005\u60D8\u5F7C\u6B64\u6E17\u900F\u3002`,speaker:"\u4F59\u5BA3\u5747",source:"\u539F\u8BD7 S7",layout:"reading",variant:"scholarly"},{scene:6,title:"\u534E\u5E74\u3001\u6B64\u60C5\u4E0E\u60D8\u7136",eye:"\u516D \xB7 \u7ED3\u8BBA",body:'<p class="argument">\u300A\u9526\u745F\u300B\u4EE5\u5F26\u58F0\u5524\u8D77\u8FFD\u5FC6\uFF0C\u4EE5\u610F\u8C61\u5C55\u5F00\u534E\u5E74\uFF0C\u518D\u4EE5\u201C\u5F53\u65F6\u5DF2\u201D\u56DE\u7167\u5168\u7BC7\u3002</p><div class="critical-columns"><section><h2>\u4E09\u5C42\u63A8\u8FDB</h2><p>\u7B2C\u4E00\u5C42\uFF0C\u5668\u7269\u8FDB\u5165\u751F\u547D\u3002\u201C\u601D\u201D\u628A\u773C\u524D\u7684\u5F26\u67F1\u8FDE\u5411\u5F80\u6614\uFF0C\u58F0\u97F3\u6210\u4E3A\u8BB0\u5FC6\u7684\u89E6\u5A92\u3002</p><p>\u7B2C\u4E8C\u5C42\uFF0C\u60C5\u7EEA\u83B7\u5F97\u5F62\u72B6\u3002\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u6CEA\u3001\u7389\u70DF\u5728\u5BF9\u4ED7\u4E2D\u76F8\u4E92\u7167\u6620\uFF0C\u4F7F\u534E\u5E74\u62E5\u6709\u591A\u91CD\u8D28\u5730\u3002</p></section><section><h2>\u4E00\u91CD\u56DE\u7167</h2><p>\u7B2C\u4E09\u5C42\uFF0C\u65F6\u95F4\u91CD\u65B0\u5C55\u5F00\u3002\u201C\u6B64\u60C5\u201D\u603B\u627F\u610F\u8C61\uFF0C\u201C\u5F53\u65F6\u5DF2\u201D\u628A\u60D8\u7136\u63A8\u56DE\u7ECF\u5386\u53D1\u751F\u4E4B\u4E2D\u3002</p><p>\u56E0\u6B64\uFF0C\u8FFD\u5FC6\u65E2\u5728\u4FDD\u5B58\u7F8E\u597D\uFF0C\u4E5F\u5728\u53CD\u590D\u611F\u53D7\u7F8E\u597D\u4E2D\u7684\u672A\u5C3D\u4E0E\u672A\u660E\u3002\u8D77\u4E8E\u5F26\u58F0\uFF0C\u5F52\u4E8E\u60D8\u7136\uFF0C\u516B\u53E5\u4E4B\u95F4\u59CB\u7EC8\u56DE\u8361\u7740\u540C\u4E00\u4EFD\u6DF1\u60C5\u3002</p></section></div>',note:`\u4F59\u5BA3\u5747\uFF1A\u300A\u9526\u745F\u300B\u4EE5\u5F26\u58F0\u5524\u8D77\u8FFD\u5FC6\uFF0C\u4EE5\u610F\u8C61\u5C55\u5F00\u534E\u5E74\uFF0C\u518D\u4EE5\u201C\u5F53\u65F6\u5DF2\u201D\u56DE\u7167\u5168\u7BC7\u3002
\u4E09\u5C42\u63A8\u8FDB
\u7B2C\u4E00\u5C42\uFF0C\u5668\u7269\u8FDB\u5165\u751F\u547D\u3002\u201C\u601D\u201D\u628A\u773C\u524D\u7684\u5F26\u67F1\u8FDE\u5411\u5F80\u6614\uFF0C\u58F0\u97F3\u6210\u4E3A\u8BB0\u5FC6\u7684\u89E6\u5A92\u3002
\u7B2C\u4E8C\u5C42\uFF0C\u60C5\u7EEA\u83B7\u5F97\u5F62\u72B6\u3002\u68A6\u8776\u3001\u675C\u9E43\u3001\u73E0\u6CEA\u3001\u7389\u70DF\u5728\u5BF9\u4ED7\u4E2D\u76F8\u4E92\u7167\u6620\uFF0C\u4F7F\u534E\u5E74\u62E5\u6709\u591A\u91CD\u8D28\u5730\u3002
\u4E00\u91CD\u56DE\u7167
\u7B2C\u4E09\u5C42\uFF0C\u65F6\u95F4\u91CD\u65B0\u5C55\u5F00\u3002\u201C\u6B64\u60C5\u201D\u603B\u627F\u610F\u8C61\uFF0C\u201C\u5F53\u65F6\u5DF2\u201D\u628A\u60D8\u7136\u63A8\u56DE\u7ECF\u5386\u53D1\u751F\u4E4B\u4E2D\u3002
\u56E0\u6B64\uFF0C\u8FFD\u5FC6\u65E2\u5728\u4FDD\u5B58\u7F8E\u597D\uFF0C\u4E5F\u5728\u53CD\u590D\u611F\u53D7\u7F8E\u597D\u4E2D\u7684\u672A\u5C3D\u4E0E\u672A\u660E\u3002\u8D77\u4E8E\u5F26\u58F0\uFF0C\u5F52\u4E8E\u60D8\u7136\uFF0C\u516B\u53E5\u4E4B\u95F4\u59CB\u7EC8\u56DE\u8361\u7740\u540C\u4E00\u4EFD\u6DF1\u60C5\u3002`,speaker:"\u4F59\u5BA3\u5747",source:"\u6587\u672C S7\uFF1B\u65E7\u8BF4\u53C2\u7167 S10\u2014S12",layout:"reading",variant:"scholarly"},{scene:6,title:"\u53C2\u8003\u6587\u732E",eye:"\u9644 \xB7 \u53EF\u8FFD\u6EAF\u7684\u9605\u8BFB\u4F9D\u636E",speaker:"\u5218\u5609\u4E50",note:`\u5218\u5609\u4E50\uFF1A\u539F\u8BD7\u3001\u5178\u6E90\u4E0E\u53E4\u4EE3\u8BC4\u8BF4\uFF0C\u6784\u6210\u8FD9\u6B21\u7EC6\u8BFB\u7684\u6587\u672C\u57FA\u7840\u3002
\u539F\u8BD7\u4E0E\u5178\u6E90
\u674E\u5546\u9690\u300A\u9526\u745F\u300B\uFF1B\u300A\u5E84\u5B50\xB7\u9F50\u7269\u8BBA\u300B\uFF1B\u300A\u53F2\u8BB0\xB7\u5C01\u7985\u4E66\u300B\uFF1B\u300A\u534E\u9633\u56FD\u5FD7\u300B\u5377\u4E09\uFF1B\u5F20\u534E\u300A\u535A\u7269\u5FD7\u300B\u5377\u4E8C\u3002
\u738B\u5E94\u9E9F\u300A\u56F0\u5B66\u7EAA\u95FB\u300B\u5377\u5341\u516B\uFF1B\u300A\u5E73\u6C34\u97F5\u300B\u4E0B\u5E73\u4E00\u5148\u3002
\u6CE8\u672C\u4E0E\u8BC4\u8BF4
\u6731\u9E64\u9F84\u300A\u674E\u4E49\u5C71\u8BD7\u96C6\u6CE8\u300B\u5377\u4E00\u4E0A\uFF1B\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\uFF1B\u4F55\u712F\u300A\u4E49\u95E8\u8BFB\u4E66\u8BB0\u300B\u5377\u4E94\u5341\u4E03\u3002
\u5218\u653D\u300A\u4E2D\u5C71\u8BD7\u8BDD\u300B\uFF1B\u5143\u597D\u95EE\u300A\u5143\u597D\u95EE\u96C6\u300B\u5377\u5341\u4E00\u300A\u8BBA\u8BD7\u4E09\u5341\u9996\u300B\u5176\u5341\u4E8C\uFF1B\u300A\u56DB\u5E93\u300B\u672C\u300A\u674E\u4E49\u5C71\u8BD7\u96C6\u300B\u63D0\u8981\u3002`,layout:"reading",variant:"scholarly",source:"\u6B63\u6587 S7\u3001S15\uFF1B\u5178\u6E90 S6\u3001S8\u3001S9\u3001S14\uFF1B\u8BC4\u8BF4 S10\u2014S13\u3001S17",body:'<p class="argument">\u539F\u8BD7\u3001\u5178\u6E90\u4E0E\u53E4\u4EE3\u8BC4\u8BF4\uFF0C\u6784\u6210\u8FD9\u6B21\u7EC6\u8BFB\u7684\u6587\u672C\u57FA\u7840\u3002</p><div class="critical-columns"><section><h2>\u539F\u8BD7\u4E0E\u5178\u6E90</h2><p>\u674E\u5546\u9690\u300A\u9526\u745F\u300B\uFF1B\u300A\u5E84\u5B50\xB7\u9F50\u7269\u8BBA\u300B\uFF1B\u300A\u53F2\u8BB0\xB7\u5C01\u7985\u4E66\u300B\uFF1B\u300A\u534E\u9633\u56FD\u5FD7\u300B\u5377\u4E09\uFF1B\u5F20\u534E\u300A\u535A\u7269\u5FD7\u300B\u5377\u4E8C\u3002</p><p>\u738B\u5E94\u9E9F\u300A\u56F0\u5B66\u7EAA\u95FB\u300B\u5377\u5341\u516B\uFF1B\u300A\u5E73\u6C34\u97F5\u300B\u4E0B\u5E73\u4E00\u5148\u3002</p></section><section><h2>\u6CE8\u672C\u4E0E\u8BC4\u8BF4</h2><p>\u6731\u9E64\u9F84\u300A\u674E\u4E49\u5C71\u8BD7\u96C6\u6CE8\u300B\u5377\u4E00\u4E0A\uFF1B\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\uFF1B\u4F55\u712F\u300A\u4E49\u95E8\u8BFB\u4E66\u8BB0\u300B\u5377\u4E94\u5341\u4E03\u3002</p><p>\u5218\u653D\u300A\u4E2D\u5C71\u8BD7\u8BDD\u300B\uFF1B\u5143\u597D\u95EE\u300A\u5143\u597D\u95EE\u96C6\u300B\u5377\u5341\u4E00\u300A\u8BBA\u8BD7\u4E09\u5341\u9996\u300B\u5176\u5341\u4E8C\uFF1B\u300A\u56DB\u5E93\u300B\u672C\u300A\u674E\u4E49\u5C71\u8BD7\u96C6\u300B\u63D0\u8981\u3002</p></section></div>'},{scene:6,title:"\u8BA9\u7406\u89E3\u56DE\u5230\u5B57\u8BCD",eye:"\u516D \xB7 \u56DE\u5230\u6587\u672C\u7684\u4E09\u4E2A\u95EE\u9898",body:'<p class="argument">\u4EE5\u5B57\u8BCD\u3001\u5178\u6E90\u4E0E\u7AE0\u6CD5\u4E3A\u636E\uFF0C\u7EE7\u7EED\u5C55\u5F00\u300A\u9526\u745F\u300B\u7684\u9605\u8BFB\u3002</p><div class="critical-columns"><section><h2>\u5B57\u8BCD\u4E0E\u65F6\u95F4</h2><p>\u628A\u201C\u8FF7\u201D\u6362\u6210\u201C\u68A6\u201D\uFF0C\u6C89\u6D78\u4E0E\u96BE\u8FA8\u4E4B\u95F4\u7684\u611F\u53D7\u4F1A\u600E\u6837\u53D8\u5316\uFF1F\u8BF7\u8054\u7CFB\u9996\u8054\u7684\u201C\u601D\u201D\u4E0E\u5C3E\u8054\u7684\u201C\u60D8\u7136\u201D\u3002</p><p>\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u4E0E\u201C\u5982\u4ECA\u624D\u60D8\u7136\u201D\uFF0C\u5404\u81EA\u5448\u73B0\u600E\u6837\u7684\u534E\u5E74\uFF1F\u65F6\u95F4\u526F\u8BCD\u600E\u6837\u6539\u53D8\u5BF9\u5F80\u4E8B\u7684\u7406\u89E3\uFF1F</p></section><section><h2>\u8BFB\u6CD5\u4E0E\u5168\u7BC7</h2><p>\u5728\u548F\u745F\u3001\u60BC\u4EA1\u3001\u81EA\u5E8F\u7B49\u8BFB\u6CD5\u4E2D\uFF0C\u9009\u62E9\u4E00\u79CD\uFF0C\u6307\u51FA\u5B83\u6700\u6709\u89E3\u91CA\u529B\u7684\u8BD7\u53E5\uFF0C\u518D\u8BA8\u8BBA\u5176\u4F59\u8BD7\u53E5\u5982\u4F55\u76F8\u63A5\u3002</p><p>\u91CD\u8BFB\u5168\u8BD7\uFF0C\u542C\u5F26\u58F0\u600E\u6837\u5F15\u51FA\u56DE\u5FC6\uFF0C\u770B\u56DB\u79CD\u610F\u8C61\u600E\u6837\u5F7C\u6B64\u7167\u6620\uFF0C\u6700\u540E\u4F53\u4F1A\u201C\u5DF2\u201D\u5B57\u5E26\u6765\u7684\u65F6\u95F4\u56DE\u6298\u3002</p></section></div>',note:`\u4F59\u5BA3\u5747\u3001\u5218\u5609\u4E50\uFF1A\u4EE5\u5B57\u8BCD\u3001\u5178\u6E90\u4E0E\u7AE0\u6CD5\u4E3A\u636E\uFF0C\u7EE7\u7EED\u5C55\u5F00\u300A\u9526\u745F\u300B\u7684\u9605\u8BFB\u3002
\u5B57\u8BCD\u4E0E\u65F6\u95F4
\u628A\u201C\u8FF7\u201D\u6362\u6210\u201C\u68A6\u201D\uFF0C\u6C89\u6D78\u4E0E\u96BE\u8FA8\u4E4B\u95F4\u7684\u611F\u53D7\u4F1A\u600E\u6837\u53D8\u5316\uFF1F\u8BF7\u8054\u7CFB\u9996\u8054\u7684\u201C\u601D\u201D\u4E0E\u5C3E\u8054\u7684\u201C\u60D8\u7136\u201D\u3002
\u201C\u5F53\u65F6\u5DF2\u60D8\u7136\u201D\u4E0E\u201C\u5982\u4ECA\u624D\u60D8\u7136\u201D\uFF0C\u5404\u81EA\u5448\u73B0\u600E\u6837\u7684\u534E\u5E74\uFF1F\u65F6\u95F4\u526F\u8BCD\u600E\u6837\u6539\u53D8\u5BF9\u5F80\u4E8B\u7684\u7406\u89E3\uFF1F
\u8BFB\u6CD5\u4E0E\u5168\u7BC7
\u5728\u548F\u745F\u3001\u60BC\u4EA1\u3001\u81EA\u5E8F\u7B49\u8BFB\u6CD5\u4E2D\uFF0C\u9009\u62E9\u4E00\u79CD\uFF0C\u6307\u51FA\u5B83\u6700\u6709\u89E3\u91CA\u529B\u7684\u8BD7\u53E5\uFF0C\u518D\u8BA8\u8BBA\u5176\u4F59\u8BD7\u53E5\u5982\u4F55\u76F8\u63A5\u3002
\u91CD\u8BFB\u5168\u8BD7\uFF0C\u542C\u5F26\u58F0\u600E\u6837\u5F15\u51FA\u56DE\u5FC6\uFF0C\u770B\u56DB\u79CD\u610F\u8C61\u600E\u6837\u5F7C\u6B64\u7167\u6620\uFF0C\u6700\u540E\u4F53\u4F1A\u201C\u5DF2\u201D\u5B57\u5E26\u6765\u7684\u65F6\u95F4\u56DE\u6298\u3002`,speaker:"\u4F59\u5BA3\u5747\u3001\u5218\u5609\u4E50",source:"\u539F\u8BD7 S7\uFF1B\u65E7\u8BF4 S10\u2014S12",layout:"reading",variant:"scholarly"}];var gl=[],ml=0;function xx(i){return new Promise((e,t)=>{gl.push({task:i,resolve:e,reject:t}),sd()})}function sd(){for(;ml<8&&gl.length;){let i=gl.shift();ml++,Promise.resolve().then(i.task).then(i.resolve,i.reject).finally(()=>{ml--,sd()})}}var id=(i,e,t)=>xx(async()=>{for(let n=0;n<3;n++)try{let s=await fetch(i,{signal:AbortSignal.timeout(12e3),headers:{Range:`bytes=${e}-${t}`}});if(!s.ok)throw new Error("\u8D44\u6E90\u4E0B\u8F7D\u5931\u8D25");return{status:s.status,bytes:new Uint8Array(await s.arrayBuffer())}}catch(s){if(n===2)throw s;await new Promise(r=>setTimeout(r,300*(n+1)))}});async function yx(i,e){let n=await id(i,0,Math.min(131072,e)-1);if(n.status===200){if(n.bytes.length!==e)throw new Error("\u8D44\u6E90\u672A\u4E0B\u8F7D\u5B8C\u6574");return n.bytes.buffer}if(n.bytes.length!==Math.min(131072,e))throw new Error("\u8D44\u6E90\u5206\u6BB5\u4E0D\u5B8C\u6574");let s=new Uint8Array(e);return s.set(n.bytes),await Promise.all(Array.from({length:Math.ceil(e/131072)-1},async(r,o)=>{let a=(o+1)*131072,c=Math.min(a+131072,e)-1,l=await id(i,a,c),h=l.status===200&&l.bytes.length===e?l.bytes.slice(a,c+1):l.bytes;if(h.length!==c-a+1)throw new Error("\u8D44\u6E90\u5206\u6BB5\u4E0D\u5B8C\u6574");s.set(h,a)})),s.buffer}var vx="jinse-complete-assets-v1";async function _l(i,e){let t=new URL(i,location.href);t.searchParams.delete("retry");let n;try{n=await caches.open(vx);let r=await n.match(t.href);if(r){let o=await r.arrayBuffer();if(o.byteLength===e)return o}}catch{}let s=await yx(i,e);if(n)try{await n.put(t.href,new Response(s,{headers:{"Content-Length":String(e),"Content-Type":t.pathname.endsWith(".webp")?"image/webp":"application/octet-stream"}}))}catch{}return s}var Go=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i)),Wo=i=>{let e=new Rn(i);return e.colorSpace=ht,e},Mx=(i,e=100)=>{let t=document.createElement("canvas");t.width=1024,t.height=256;let n=t.getContext("2d");return n.font=`${e}px JinseBrush`,n.textAlign="center",n.textBaseline="middle",n.fillStyle="#274c3c",n.fillText(i,512,132),Wo(t)};function rd(i,e,t){let n=new Qe;n.name="Continuous_Biography_Handscroll",n.position.set(17.7,3.1,-4),n.scale.setScalar(1.2),n.rotation.y=-.055,i.add(n);let s=document.createElement("canvas");s.width=8192,s.height=1536;let r=s.getContext("2d");r.fillStyle="#e7ddbd",r.fillRect(0,0,s.width,s.height);let o=["\u6587\u624D\u4E0E\u53D7\u77E5","\u79D1\u4E3E\u4E0E\u4ED5\u9014","\u5165\u5E55\u4E0E\u5A5A\u59FB","\u8F97\u8F6C\u5E55\u5E9C"],a=["\u6587\u624D\u521D\u5C55","\u5F00\u6210\u4E8C\u5E74 \xB7 837","\u5E55\u5E9C\u4E0E\u5A5A\u59FB","\u884C\u65C5\u4E0E\u6F02\u6CCA"],c=[["\u4EE4\u72D0\u695A\u8D4F\u8BC6\u5176\u6587\uFF0C\u6388\u4EE5\u7AE0\u594F\u3002","\u53D7\u77E5\u7ECF\u9A8C\uFF0C\u6784\u6210\u5BF9\u534E\u5E74\u7684\u4E00\u5C42\u56DE\u671B\u3002"],["\u767B\u8FDB\u58EB\u7B2C\uFF0C\u4ED5\u8FDB\u4E4B\u8DEF\u7531\u6B64\u5F00\u542F\u3002","\u4ED5\u8FDB\u7684\u5E0C\u671B\uFF0C\u4E0E\u4E4B\u540E\u7684\u8F97\u8F6C\u76F8\u6620\u7167\u3002"],["\u738B\u8302\u5143\u8058\u5165\u5E55\u5E9C\uFF0C\u5E76\u4EE5\u5973\u59BB\u4E4B\u3002","\u5E18\u5E55\u4E00\u5408\uFF0C\u5F80\u4E8B\u8FDB\u5165\u5F26\u58F0\u4E4B\u95F4\u3002"],["\u5728\u4E0D\u540C\u5E55\u5E9C\u4E0E\u5B98\u804C\u4E4B\u95F4\u8F97\u8F6C\u3002","\u884C\u8FC7\u5C42\u53E0\u57CE\u90ED\uFF0C\u534E\u5E74\u4ECD\u5728\u56DE\u58F0\u4E4B\u4E2D\u3002"]];for(let ee=0;ee<4;ee++){let C=ee*2048;r.drawImage(t.image,ee%2*t.image.width/2,ee<2?0:t.image.height/2,t.image.width/2,t.image.height/2,C+99,150,1850,1233);let Ce=r.createLinearGradient(0,1350,0,1536);Ce.addColorStop(0,"#ece2c300"),Ce.addColorStop(.45,"#ece2c3e8"),Ce.addColorStop(1,"#ece2c3"),r.fillStyle=Ce,r.fillRect(C,1350,2048,186),r.fillStyle="#38573f",r.font="96px JinseBrush",r.fillText(o[ee],C+125,128),r.fillStyle="#976849",r.font="46px JinseText",r.fillText(a[ee],C+1390,118),r.font="50px JinseText",r.fillStyle="#304b3b",c[ee].forEach((Me,ge)=>r.fillText(Me,C+115,1430+ge*70)),r.font="36px JinseText",r.fillStyle="#81724f"}r.strokeStyle="#96824b",r.lineWidth=7,r.strokeRect(15,18,8162,1500),r.lineWidth=2,r.strokeRect(35,38,8122,1460);let l=new bt(26,4.875,160,32),h=l.attributes.uv,u=new Ct({map:Wo(s),side:ft,roughness:1,metalness:0}),d=new Ke(l,u);d.name="Unrolling_Silk_Surface",d.frustumCulled=!1,n.add(d);let f=[];for(let ee=0;ee<2;ee++){let C=new Qe;n.add(C);let Ce=new Ke(new pi(.21,.21,5.4,32),new Ct({color:5401416,roughness:.65,metalness:.08}));C.add(Ce);for(let Me of[-1,1]){let ge=new Ke(new pi(.32,.32,.25,24),new Ct({color:10587222,roughness:.5,metalness:.55}));ge.position.y=Me*2.6,C.add(ge)}f.push(C)}let g=new Qe;i.add(g),g.position.set(6,.7,1);let _=new bt(17,12,72,48);_.rotateX(-Math.PI/2);let m=_.attributes.position.array.slice(),p=new Ke(_,new $t({transparent:!0,depthWrite:!1,side:ft,uniforms:{time:{value:0}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float time;varying vec2 vUv;void main(){float edge=smoothstep(0.,.23,vUv.x)*smoothstep(0.,.16,1.-vUv.x)*smoothstep(0.,.22,vUv.y)*smoothstep(0.,.22,1.-vUv.y);float line=pow(.5+.5*sin(vUv.y*110.+sin(vUv.x*14.+time*.4)*2.),14.);vec3 color=mix(vec3(.43,.62,.57),vec3(.69,.74,.60),line*.3);gl_FragColor=vec4(color,edge*(.19+line*.13));}"}));g.add(p);let T=new Ke(new Cn(.56,40,28),new Ut({color:16313032,roughness:.23,metalness:.12,clearcoat:.7}));T.position.set(.7,2.6,1.4),g.add(T);let y=new Ke(new Cn(.13,20,16),new Ut({color:12902615,roughness:.05,metalness:.12,transparent:!0,opacity:.82}));y.scale.y=1.65,g.add(y);let x=new Ke(new Cn(1.5,32,24),new gt({color:16116166}));x.position.set(1.8,7,-10),g.add(x);let I=[];for(let ee=0;ee<7;ee++){let C=new Ke(new Io(1.1+ee*.63,.012,5,80),new gt({color:14011290,transparent:!0,opacity:.24}));C.rotation.x=-Math.PI/2,C.position.set(.7,.05,1.4),g.add(C),I.push(C)}let R=new Qe;i.add(R),R.position.set(6,1.6,1);let A=new Ct({color:7249021,roughness:.29,metalness:.22}),D=document.createElement("canvas");D.width=D.height=256;let S=D.getContext("2d"),v=S.createRadialGradient(128,128,0,128,128,120);v.addColorStop(0,"#e5dfbb77"),v.addColorStop(1,"#e5dfbb00"),S.fillStyle=v,S.fillRect(0,0,256,256);let L=[];for(let ee=0;ee<7;ee++){let C=new Ke(new bt(2.6,4.5),new gt({map:Wo(D),transparent:!0,depthWrite:!1,opacity:.35}));R.add(C),L.push(C)}let H=new Qe;i.add(H),H.position.set(7,4,0);let k=[];for(let ee=0;ee<5;ee++){let C=new Qe;H.add(C),C.position.set(Math.sin(ee*2)*2,(ee-2)*.8,-ee*1.2);let Ce=new cr;Ce.moveTo(0,0),Ce.quadraticCurveTo(.35,.3,.95,.07),Ce.quadraticCurveTo(.48,-.08,0,0);for(let Me of[-1,1]){let ge=new Ke(new Co(Ce,16),new gt({color:3560519,side:ft}));ge.scale.x=Me,C.add(ge),k.push({w:ge,i:ee,sign:Me})}C.scale.setScalar(.5+ee*.035)}let V=new Qe;i.add(V);let K="",q=[],j="",X=-100,ce=new Map,me=new As,we={glyphs:0,behind:0},ze=ee=>{for(let C of[...ee.children])C.geometry?.dispose(),C.material?.map?.dispose(),C.material?.dispose(),ee.remove(C)};function Je(ee,C,Ce){if(Ce===K)return;K=Ce,j="",ce.clear(),ze(V),V.visible=!0,e.updateMatrixWorld();let Me=Ce.startsWith("bio:")?Math.min(54,Math.max(33,innerWidth*.03)):Math.min(80,Math.max(38,innerWidth*.043));if([...ee].forEach((ue,qe)=>{let be=document.createElement("canvas");be.width=be.height=256;let w=be.getContext("2d");w.font="202px JinseBrush",w.fillStyle="#244c3a",w.textAlign="center",w.textBaseline="middle",w.fillText(ue,128,138);let M=12+qe%3*.25,B=2*Math.tan(St.degToRad(e.fov/2))*M/innerHeight,E=Me*B*256/202,U=new Ke(new bt(E,E),new gt({map:Wo(be),transparent:!0,depthWrite:!1,side:ft,toneMapped:!1})),z=innerWidth*.08+qe*Me*1.06,se=innerHeight*(Ce.startsWith("bio:")?.12:.235),Q=new P(z/innerWidth*2-1,-se/innerHeight*2+1,.5).unproject(e).sub(e.position).normalize(),ae=new P;e.getWorldDirection(ae),U.position.copy(e.position).addScaledVector(Q,M/Q.dot(ae)),U.quaternion.copy(e.quaternion),U.userData={char:ue,order:qe,rest:U.position.clone(),wasVisible:!1},V.add(U)}),C){let ue=new Ke(new bt(5.6,1.4),new gt({map:Mx(C,120),transparent:!0,depthWrite:!1,side:ft,toneMapped:!1,opacity:.85}));ue.position.set(e.position.x+6,4.8,4),ue.quaternion.copy(e.quaternion),ue.rotateY(-.12),ue.userData={char:C,order:-1,rest:ue.position.clone(),wasVisible:!1},V.add(ue)}}function Z(){let ee=new P;e.getWorldDirection(ee);let C=[];for(let Ce of V.children){if(!Ce.visible||Ce.material.opacity<.03)continue;let Me=new Ke(Ce.geometry.clone(),Ce.material.clone());Me.material.map=Ce.material.map.clone(),Me.position.copy(Ce.position),Me.quaternion.copy(Ce.quaternion),i.add(Me),C.push({mesh:Me,start:Me.position.clone(),rotation:Me.quaternion.clone(),back:ee.clone().negate(),side:Me.position.x<e.position.x?-1:1})}V.visible=!1,q=C,we={glyphs:C.length,behind:0}}function ie(ee){let C=0,Ce=new P;e.getWorldDirection(Ce);for(let[Me,ge]of q.entries()){let ue=Math.pow(Math.max(0,(ee-Me*.006)/1),1.6);ge.mesh.position.copy(ge.start).addScaledVector(ge.back,ue*35),ge.mesh.position.x+=ge.side*ue*2.2,ge.mesh.quaternion.copy(ge.rotation),ge.mesh.rotateY(ge.side*ue*.22),ge.mesh.material.opacity=1-Go((ee-.87)/.13),ge.mesh.position.clone().sub(e.position).dot(Ce)<0&&C++}we={glyphs:q.length,behind:C}}function Te(){for(let ee of q)i.remove(ee.mesh),ee.mesh.geometry.dispose(),ee.mesh.material.map.dispose(),ee.mesh.material.dispose();q=[],V.visible=!0}let le=0;function Pe(ee,C,Ce,Me,ge){n.visible=ee.scrollAlpha>.01,le=ee.scrollOpen||0;let ue=(ee.scrollLarge||0)>.5;n.scale.setScalar(ue?2:1.2),n.position.set(ue?22.75:17.7,ue?3.7:3.1,ue?-1:-4),n.rotation.y=ue?-.025:-.055;let qe=6.5*Math.max(.015,ee.scrollReveal??1),be=-13+(ee.scrollIndex||0)*6.5,w=qe,M=l.attributes.position;for(let B=0;B<M.count;B++){let E=B%161/160,U=be+E*w,z=h.getY(B);M.setXYZ(B,U,(z-.5)*4.875,Math.sin(U*.25)*.1+Math.sin(U*.8+C*.5)*.018+Math.exp(-(1-E)*qe*1.4)*.16),h.setX(B,(U+13)/26)}if(M.needsUpdate=!0,h.needsUpdate=!0,l.computeVertexNormals(),l.computeBoundingSphere(),f[0].position.set(be,0,.05),f[0].rotation.y=-Math.max(0,qe-10.4)*2,f[1].position.set(be+qe,0,.07),f[1].rotation.y=-le*48,u.opacity=ee.scrollAlpha,u.transparent=ee.scrollAlpha<.99,g.visible=ee.sea>.01,R.visible=ee.jade>.01,H.visible=ee.birds>.01,g.visible){p.material.uniforms.time.value=C;let B=_.attributes.position;for(let E=0;E<B.count;E++){let U=m[E*3],z=m[E*3+2];B.setY(E,Math.sin(U*.85+C*.65)*.08+Math.cos(z*.7+C*.5)*.08)}B.needsUpdate=!0,_.computeVertexNormals(),T.position.y=2.6+Math.sin(C*.4)*.08,y.position.set(.7,2-C*.27%1*1.45,1.98),y.material.opacity=(1-C*.27%1)*.75,I.forEach((E,U)=>E.scale.setScalar(1+Math.sin(C*.4+U*.5)*.025))}if(R.visible&&L.forEach((B,E)=>{let U=(C*.08+E/7)%1;B.position.set(Math.sin(E*2+C*.1)*.8,1+U*5,-.7+E*.14),B.quaternion.copy(e.quaternion),B.material.opacity=Math.sin(U*Math.PI)*(j==="\u70DF"?.52:.3)}),k.forEach(({w:B,i:E,sign:U})=>B.rotation.y=U*(.3+Math.sin(C*3+E)*.7)),!ge&&Ce){Je(Ce.poem,Ce.term,`${Ce.biography?"bio:":""}${Me}`);let B=Ce.reveal??1/0;for(let E of V.children){let U=E.userData,z=U.order<0?B>=[...Ce.poem].length:U.order<B;z&&!U.wasVisible&&(U.revealedAt=C+(Ce.reveal==null?Math.max(0,U.order)*.075:0),U.wasVisible=!0),E.visible=z,E.material.opacity=z?Go((C-U.revealedAt)/.32):0,E.position.copy(U.rest),E.scale.setScalar(1),E.material.color.setHex(16777215);let se=ce.get(U.order);if(se){let Q=Go((C-se.time)/.85);E.position.copy(se.origin).lerp(U.rest,Q),E.position.y+=Math.sin(Q*Math.PI)*1.5,Ce.poem==="\u65E0\u7AEF"&&(E.quaternion.copy(e.quaternion),E.position.x+=Math.sin(Q*Math.PI)*(U.order===0?-.7:.7),E.rotateY(Math.sin(Q*Math.PI)*(U.order===0?-.18:.18))),E.scale.setScalar(.35+.65*Q),E.material.opacity*=Go((C-se.time)/.2)}if(j&&C-X<6){let Q=U.char.includes(j)||j.includes(U.char);E.material.opacity*=Q?1:.4,Q&&(E.position.z+=.6,E.position.y+=.18,j==="\u65E0\u7AEF"&&(E.position.x+=U.char==="\u65E0"?-.24:U.char==="\u7AEF"?.24:0),E.scale.setScalar(1.16+Math.sin((C-X)*3)*.018),E.material.color.setHex(16763546))}}}}function Ue(){n.updateMatrixWorld(!0);let ee=l.attributes.position,C=ee.getX(0),Ce=ee.getX(160),Me=[];for(let ge of[C-.35,Ce+.35])for(let ue of[-2.8,2.8])for(let qe of[-.32,.32]){let be=n.localToWorld(new P(ge,ue,qe)).project(e);Me.push({x:(be.x+1)*innerWidth/2,y:(1-be.y)*innerHeight/2})}return{left:Math.min(...Me.map(ge=>ge.x)),right:Math.max(...Me.map(ge=>ge.x)),top:Math.min(...Me.map(ge=>ge.y)),bottom:Math.max(...Me.map(ge=>ge.y))}}function ke(ee,C){return me.setFromCamera(new ve(ee/innerWidth*2-1,-C/innerHeight*2+1),e),me.intersectObjects(V.children,!1).find(Me=>Me.object.visible&&Me.object.material.opacity>.15)?.object.userData.char||null}function ot(ee,C){j=ee,X=C}function We(){return V.children.map(ee=>{let C=ee.position.clone().project(e);return{character:ee.userData.char,order:ee.userData.order,x:(C.x+1)*innerWidth/2,y:(1-C.y)*innerHeight/2,visible:ee.visible,opacity:ee.material.opacity}})}return{birth:(ee,C,Ce)=>ce.set(ee,{origin:C.clone(),time:Ce}),apply:Pe,capture:Z,travel:ie,clearFlight:Te,hitWord:ke,focusWord:ot,targets:We,resetText:()=>{K=""},inspect:()=>({scroll:{visible:n.visible,opening:le,rollers:f.length,continuousSurface:!0,selectedIndex:Math.round(e.position.x/13),fullImage:!0,uvStart:h.getX(0),uvEnd:h.getX(160),screenBounds:Ue()},spatialGlyphs:V.children.length,visibleGlyphs:V.children.filter(ee=>ee.userData.order>=0&&ee.visible&&ee.material.opacity>.5).length,focusedWord:j,textFlight:we,sea:g.visible,jade:R.visible,birds:H.visible})}}function od(i,e,t,n){let s=new Qe;s.name="String_To_Memory",i.add(s);let r=[];for(let _=0;_<7;_++){let m=new nn(new xt().setFromPoints(Array.from({length:49},()=>new P)),new hn({color:12163672,transparent:!0,opacity:0,depthWrite:!1}));m.frustumCulled=!1,s.add(m),r.push({line:m,start:-100,id:0,order:_})}let o=-1,a=0,c="",l=-100,h=-1,u=0;function d(_,m,p){l=m;let T=r[p%7];Object.assign(T,{start:m,id:_,order:p})}function f(_,m,p,{flight:T=0,from:y=p,phase:x=0}={}){!T&&o!==p&&(o=p,a=m);let I=m-a;c=["invocation","birth","many-to-one","string-and-bridge","sorrow-resonance","question","memory"][p]||"",h=-1,!T&&p===2&&I<3.4&&(h=Math.min(49,Math.floor(I/3.4*50))),!T&&p===3&&I<2.5&&(h=Math.min(24,Math.floor(I/2.5*25))),!T&&p===4&&I<3&&(h=Math.min(49,Math.floor(I/3*50))),p===2&&x>0&&I>=3.4&&(h=24),s.visible=p<=6,u=0;let R=n.targets();for(let A of r){let D=m-A.start,S=R.find(X=>X.order===A.order);if(A.line.visible=D>=0&&D<1.6&&!!S&&p<=5&&!T,!A.line.visible)continue;let v=t.origin(A.id),L=new P(S.x/innerWidth*2-1,1-S.y/innerHeight*2,.5).unproject(e),H=L.sub(e.position).normalize(),k=new P;e.getWorldDirection(k),L.copy(e.position).addScaledVector(H,12/H.dot(k));let V=v.clone().lerp(L,.52);V.y+=2.1;let K=new fi(v,V,L),q=A.line.geometry.attributes.position,j=Math.min(1,D/.75);for(let X=0;X<49;X++){let ce=K.getPoint(j*X/48);q.setXYZ(X,ce.x,ce.y,ce.z)}q.needsUpdate=!0,A.line.material.opacity=.46*Math.sin(Math.min(1,D/1.6)*Math.PI),u++}}function g(_,m){if(h<0)return 0;let p=Math.abs(_-h);return Math.max(0,1-p/5)*.72}return{apply:f,pluck:d,energy:g,inspect:()=>({firstMovement:c,stringSweep:h,wordThreads:u,lastMeaningfulPluck:l})}}function ad(i,e,t,n){let s=[];t.traverse(y=>{if(y.isMesh&&!y.name.startsWith("String_"))if(s.push({o:y,rest:y.position.clone()}),/Carved_Soundbox|Jade_Endband/.test(y.name)){let x=y.material;y.material=new Ut({color:x.color.clone(),vertexColors:x.vertexColors,roughness:.34,metalness:.035,clearcoat:.55,clearcoatRoughness:.27,envMapIntensity:.95,side:x.side})}else y.material&&(y.material=y.material.clone(),y.material.envMapIntensity=.9)});let r=new As;r.params.Line.threshold=.13;let o=-1,a=0,c=0,l=new Map,h=new Qe;i.add(h);let u=[];for(let[y,x,I,R]of[["\u5F26 \xB7 \u632F\u52A8","\u4E24\u7AEF\u56FA\u5B9A\uFF0C\u62E8\u52A8\u540E\u963B\u5C3C\u632F\u52A8",[4.3,4.1,-1.3],[1,2.1,0]],["\u67F1 \xB7 \u652F\u627F","\u67B6\u8D77\u5F26\u8EAB\uFF0C\u754C\u5B9A\u632F\u52A8\u5F26\u6BB5",[4.7,2.1,1.8],[.2,1.6,0]],["\u745F\u4F53 \xB7 \u5171\u9E23","\u5F26\u58F0\u4E0E\u5668\u7269\u5171\u540C\u6784\u6210\u8BD7\u7684\u8D77\u5174",[4.2,-1,2.2],[.2,-.2,0]]]){let A=document.createElement("canvas");A.width=1024,A.height=256;let D=A.getContext("2d");D.fillStyle="#f4efdfeb",D.fillRect(0,12,1024,232),D.fillStyle="#294d3d",D.font="84px JinseText",D.fillText(y,30,108),D.fillStyle="#766044",D.font="46px JinseText",D.fillText(x,30,196);let S=new Rn(A);S.colorSpace=ht;let v=new Ke(new bt(5.2,1.3),new gt({map:S,transparent:!0,depthWrite:!1,side:ft,toneMapped:!1}));h.add(v);let L=new nn(new xt().setFromPoints([new P,new P]),new hn({color:10849111,transparent:!0,opacity:.65}));h.add(L),u.push({mesh:v,line:L,anchor:new P(I[0]-1.8,I[1],I[2]),target:new P(...R)})}function d(y,x){return t.visible?(t.updateMatrixWorld(!0),r.setFromCamera(new ve(y/innerWidth*2-1,-x/innerHeight*2+1),e),r.intersectObjects(n,!1).filter(R=>R.object.material.opacity>.08)[0]?.object.userData.id??-1):-1}function f(y,x){return y=Math.max(0,Math.min(49,y)),o=y,l.set(y,x),a++,y}function g(y,x){let I=x-(l.get(y)??-100);return I>=0&&I<3?Math.exp(-I*2.2):0}function _(y,x){c=y.explode||0;for(let{o:I,rest:R}of s){I.position.copy(R);let A=0;I.name.startsWith("Bridge_")?A=.9:I.name.startsWith("Transverse_Rail")?A=1.7:I.name.startsWith("Underside_Plate")?A=-1.25:I.name.startsWith("Soundbox_Foot")?A=-.8:I.name==="Jinse_Carved_Soundbox"&&(A=-.2),I.position.y+=c*A}n.forEach(I=>I.position.y=c*2.1),h.visible=c>.08&&t.visible,t.updateMatrixWorld(!0);for(let I of u){I.mesh.position.copy(t.localToWorld(I.anchor.clone())),I.mesh.quaternion.copy(e.quaternion),I.mesh.material.opacity=St.smoothstep(c,.08,.6);let R=t.localToWorld(I.target.clone()),A=I.line.geometry.attributes.position;A.setXYZ(0,R.x,R.y,R.z),A.setXYZ(1,I.mesh.position.x-1.8,I.mesh.position.y,I.mesh.position.z),A.needsUpdate=!0}}function m(){return t.updateMatrixWorld(!0),n.map(y=>{let x=y.geometry.attributes.position,I=new P(x.getX(20),x.getY(20),x.getZ(20));return y.localToWorld(I),I.project(e),{id:y.userData.id,x:(I.x+1)*innerWidth/2,y:(1-I.y)*innerHeight/2}})}function p(y){t.updateMatrixWorld(!0);let x=n[y],I=x.geometry.attributes.position;return x.localToWorld(new P(I.getX(20),I.getY(20),I.getZ(20)))}function T(y,x){return t.visible?(t.updateMatrixWorld(!0),r.setFromCamera(new ve(y/innerWidth*2-1,-x/innerHeight*2+1),e),r.intersectObjects(s.map(I=>I.o),!1).some(I=>I.object.visible)):!1}return{hit:d,hitBody:T,pluck:f,strength:g,apply:_,targets:m,origin:p,get selected(){return o},inspect:()=>({exploded:c,structureLabels:h.visible?u.length:0,pluckCount:a,selectedString:o,activeVibrations:[...l].filter(([y])=>g(y,performance.now()*.001)>.03).map(([y])=>y)})}}function xl(i,e){if(e===Hu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===mr||e===zo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===mr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var xr=class extends $n{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new Nl(t)}),this.register(function(t){return new Ol(t)}),this.register(function(t){return new Fl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Ul(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new Bl(t)}),this.register(function(t){return new zl(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=xi.extractUrlBase(e);o=xi.resolveURL(l,this.path)}else o=xi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new dr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===dd){try{o[Ye.KHR_BINARY_GLTF]=new kl(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yl(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:o[u]=new bl;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vl(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[u]=new Hl;break;case Ye.KHR_MESH_QUANTIZATION:o[u]=new Gl;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Sx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sl=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new zi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Oo(h),l.distance=u;break;case"spot":l=new No(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},bl=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return gt}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ht))}return Promise.all(s)}},Tl=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},wl=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(a,a)}return Promise.all(r)}},Al=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},El=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Rl=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Cl=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Il=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],zt),Promise.all(r)}},Pl=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ll=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(r)}},Dl=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Ul=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ut}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Nl=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ol=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Fl=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bl=class{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},zl=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==fn.TRIANGLES&&l.mode!==fn.TRIANGLE_STRIP&&l.mode!==fn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new Be,m=new P,p=new en,T=new P(1,1,1),y=new xo(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&T.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,T));for(let x in c)if(x==="_COLOR_0"){let I=c[x];y.instanceColor=new Oi(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);vt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},dd="glTF",_r=12,cd={JSON:1313821514,BIN:5130562},kl=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,_r),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-_r,r=new DataView(e,_r),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===cd.JSON){let l=new Uint8Array(e,_r+o,a);this.content=n.decode(l)}else if(c===cd.BIN){let l=_r+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Xl[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xl[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Rs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,zt,d)})})}},Hl=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Gl=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Xo=class extends mi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,T=1-m,y=p-d+u;for(let x=0;x!==a;x++){let I=o[_+x+a],R=o[_+x+c]*h,A=o[g+x+a],D=o[g+x]*h;r[x]=T*I+y*R+m*A+p*D}return r}},bx=new en,Wl=class extends Xo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return bx.fromArray(r).normalize().toArray(r),r}},fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ld={9728:Bt,9729:Xt,9984:nl,9985:Gs,9986:is,9987:An},hd={33071:Hn,33648:Js,10497:Di},yl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Tx={CUBICSPLINE:void 0,LINEAR:gs,STEP:ms},vl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),i.DefaultMaterial}function ki(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ax(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ex(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rx(i){let e,t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=i.indices+":"+Ml(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ml(i.targets[n]);return e}function Ml(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ql(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ix=new Be,Yl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Sx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ts(this.options.manager):this.textureLoader=new Fo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ki(r,a,s),Kn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(xi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yl[s.type],a=Rs[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new At(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=yl[s.type],l=Rs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(T);y||(_=new l(a,p*f,s.count*f/h),y=new ir(_,f/h),t.cache.add(T,y)),m=new sr(y,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new At(_,c,g);if(s.sparse!==void 0){let p=yl.SCALAR,T=Rs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,I=new T(o[1],y,s.sparse.count*p),R=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,D=I.length;A<D;A++){let S=I[A];if(m.setX(S,R[A*c]),c>=2&&m.setY(S,R[A*c+1]),c>=3&&m.setZ(S,R[A*c+2]),c>=4&&m.setW(S,R[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ld[d.magFilter]||Xt,h.minFilter=ld[d.minFilter]||An,h.wrapS=hd[d.wrapS]||Di,h.wrapT=hd[d.wrapT]||Di,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==Xt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Dt(_);m.needsUpdate=!0,d(m)}),t.load(xi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Kn(u,o),u.userData.mimeType=o.mimeType||Cx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new rr,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new hn,Zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ct}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let u=s[Ye.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ft);let h=r.alphaMode||vl.OPAQUE;if(h===vl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===vl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==gt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ve(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==gt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==gt){let u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],zt)}return r.emissiveTexture!==void 0&&o!==gt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ht)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Kn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ki(s,u,r),u})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return ud(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Rx(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ud(new xt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?wx(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=o[f],p,T=l[f];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ss(_,T):new Ke(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===fn.TRIANGLE_STRIP?p.geometry=xl(p.geometry,zo):m.mode===fn.TRIANGLE_FAN&&(p.geometry=xl(p.geometry,mr));else if(m.mode===fn.LINES)p=new Mo(_,T);else if(m.mode===fn.LINE_STRIP)p=new nn(_,T);else if(m.mode===fn.LINE_LOOP)p=new So(_,T);else if(m.mode===fn.POINTS)p=new bo(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ex(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Kn(p,r),m.extensions&&ki(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ki(s,u[0],r),u[0];let d=new Qe;r.extensions&&ki(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(St.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new vs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new bs(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let T=0,y=d.length;T<y;T++){let x=d[T],I=f[T],R=g[T],A=_[T],D=m[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let S=n._createAnimationTracks(x,I,R,A,D);if(S)for(let v=0;v<S.length;v++)p.push(S[v])}return new Bi(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ix)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new di:l.length>1?h=new Qe:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Kn(h,r),r.extensions&&ki(n,h,r),r.matrix!==void 0){let u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Qe;n.name&&(r.name=s.createUniqueName(n.name)),Kn(r,n),n.extensions&&ki(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Zt||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];yi[r.path]===yi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(yi[r.path]){case yi.weights:l=Yn;break;case yi.rotation:l=Sn;break;case yi.position:case yi.scale:l=Zn;break;default:switch(n.itemSize){case 1:l=Yn;break;case 2:case 3:default:l=Zn;break}break}let h=s.interpolation!==void 0?Tx[s.interpolation]:gs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+yi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ql(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Sn?Wl:Xo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Px(i,e,t){let n=e.attributes,s=new Yt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){let h=ql(Rs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=ql(Rs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new tn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function ud(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Xl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ze.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Kn(i,e),Px(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ax(i,e.targets,t):i})}var md=St.clamp,kt=i=>(i=md(i,0,1),i*i*(3-2*i)),In=i=>new P(...i),Lx=new Ts,Dx={"./assets/poet-v6-fast.webp":186818,"./assets/dream-v6-fast.webp":106938,"./assets/wing-v4-fast.webp":494522,"./assets/landscape-v6-fast.webp":81072,"./assets/memories-v4-fast.webp":508660};async function gd(i,e){for(let t=0;t<3;t++)try{return await i(t)}catch{if(t===2)throw new Error(e+" \u672A\u80FD\u4E0B\u8F7D\uFF0C\u8BF7\u91CD\u8BD5");await new Promise(s=>setTimeout(s,500*(t+1)))}}var yr=async i=>{let e=await gd(n=>_l(i+(n?"?retry="+n:""),Dx[i]),i.split("/").pop()),t=URL.createObjectURL(new Blob([e],{type:"image/webp"}));try{let n=await Lx.loadAsync(t);return n.colorSpace=ht,n}finally{URL.revokeObjectURL(t)}};function sn(i,e,t,n=[0,0,0]){let s=new Ke(e,t);return s.position.fromArray(n),i.add(s),s}function Ux(i,e,t){let n=new nn(new xt().setFromPoints(e.map(In)),t);return i.add(n),n}function Nx(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,125);return t.addColorStop(0,"rgba(250,248,235,.35)"),t.addColorStop(.45,"rgba(250,248,235,.18)"),t.addColorStop(1,"rgba(250,248,235,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Rn(i)}function fd(i){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,256);n.addColorStop(0,"#fff7df"),n.addColorStop(.35,"#dce6d2"),n.addColorStop(.6,"#8faaa0"),n.addColorStop(1,"#243e34"),t.fillStyle=n,t.fillRect(0,0,512,256);let s=new Rn(e);s.colorSpace=ht,s.mapping=Ks;let r=new Ms(i),o=r.fromEquirectangular(s);return s.dispose(),r.dispose(),o}function Ox(i){let e=new Qe,t=8,n=t*i.image.width/i.image.height,s=new bt(n,t,32,56);s.translate(0,t/2,0);let r=new di;r.name="root";let o=[r];function a(A,D,S){let v=new di;return v.name=A,v.position.fromArray(S),D.add(v),o.push(v),v}let c=a("pelvis",r,[0,3.3,0]),l=a("breathing_torso",c,[0,1.6,0]),h=a("head",l,[0,1.7,0]),u=a("left_sleeve",l,[-.7,.05,0]),d=a("right_sleeve",l,[.7,.05,0]),f=a("left_hem",c,[-.5,-.6,0]),g=a("right_hem",c,[.5,-.6,0]),_=a("left_lower_robe",f,[0,-1.5,0]),m=a("right_lower_robe",g,[0,-1.5,0]),p=[],T=[],y=s.attributes.position;for(let A=0;A<y.count;A++){let D=y.getX(A),S=y.getY(A),v=D<0;if(S>6.4){let L=kt((S-6.4)/.6);p.push(2,3,0,0),T.push(1-L,L,0,0)}else if(S>3.5){let L=kt((Math.abs(D)-.65)/.9)*kt((6.3-S)/1.4);p.push(2,v?4:5,1,0),T.push((1-L)*.9,L,(1-L)*.1,0)}else{let L=kt((3.7-S)/1.3),H=kt((1.8-S)/1.3)*.48;p.push(1,v?6:7,v?8:9,0),T.push(1-L,L*(1-H),L*H,0)}}s.setAttribute("skinIndex",new xs(p,4)),s.setAttribute("skinWeight",new rt(T,4));let x={value:0},I=new Ct({map:i,transparent:!0,alphaTest:.018,side:ft,depthWrite:!0,roughness:1,metalness:0,color:16777215});I.onBeforeCompile=A=>{A.uniforms.inkMode=x,A.fragmentShader=`uniform float inkMode;
`+A.fragmentShader,A.fragmentShader=A.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.031,.075,.055),inkMode);diffuseColor.a*=mix(smoothstep(.015,.10,vMapUv.y),1.,inkMode);`)};let R=new Ss(s,I);return R.add(r),R.bind(new bs(o)),e.add(R),{group:e,skin:R,bones:o,ink:x,animate(A,D,S){c.position.y=3.3+Math.sin(A*1.2)*.018+(D?Math.abs(Math.sin(A*5))*.03:0),l.rotation.z=Math.sin(A*.7)*.005,h.rotation.z=Math.sin(A*.43)*.015,u.rotation.z=Math.sin(A*.9)*.012+(S?.1:0),d.rotation.z=-Math.sin(A*.8)*.015,f.rotation.z=Math.sin(A*1.1)*.018+(D?Math.sin(A*5)*.07:0),g.rotation.z=Math.sin(A*1.1+1)*.018+(D?-Math.sin(A*5)*.07:0),_.rotation.z=D?Math.sin(A*5+.6)*.045:0,m.rotation.z=D?-Math.sin(A*5+.6)*.045:0}}}function pd(i){let e=new Qe,t=[],n=new Ct({map:i,transparent:!0,alphaTest:.02,side:ft,roughness:.8,metalness:.02,depthWrite:!1,emissive:1382157});for(let o of[-1,1]){let a=new Qe;a.scale.x=o,e.add(a);let c=new bt(1.55,1.82,16,20),l=c.attributes.position;for(let h=0;h<l.count;h++)l.setZ(h,Math.sin((l.getX(h)+.775)/1.55*Math.PI)*.13);c.computeVertexNormals(),sn(a,c,n,[.74,0,0]),t.push(a)}sn(e,new Cn(.065,12,12),new Ct({color:3691064,roughness:.8})).scale.set(.8,3.8,.8);let r=new hn({color:10455627,transparent:!0,opacity:.8});for(let o of[-1,1]){let a=new fi(In([o*.025,.2,.02]),In([o*.12,.43,.02]),In([o*.2,.46,.02]));Ux(e,a.getPoints(20).map(c=>c.toArray()),r)}return{group:e,wings:t,animate(o,a=!1){let c=a?.48+Math.sin(o*.8)*.08:.5+Math.sin(o*4.8)*.55;t[0].rotation.y=c,t[1].rotation.y=-c}}}async function _d(i,{low:e=!1,onProgress:t=()=>{}}={}){let n=new mo({canvas:i,antialias:!e,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio,e?1:1.5)),n.setSize(innerWidth,innerHeight),n.outputColorSpace=ht,n.toneMapping=tl,n.toneMappingExposure=.94,n.shadowMap.enabled=!e,n.shadowMap.type=el,n.setClearColor(15657693);let s=new go,r=new wt(38,innerWidth/innerHeight,.1,150);r.position.set(0,5.5,24),r.lookAt(0,1,0);let o=n.getContext().getExtension("WEBGL_lose_context"),a=fd(n);s.environment=a.texture,s.environmentIntensity=.38,s.add(new Uo(16775912,4745300,1.3));let c=new zi(16773073,2.1);c.position.set(-4,13,9),c.castShadow=!e,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-17,right:17,top:15,bottom:-15,near:.5,far:50}),c.shadow.bias=-5e-4,c.shadow.normalBias=.012,s.add(c);let l=new zi(13099734,1);l.position.set(8,6,-8),s.add(l);let h=[],u=async(E,U)=>{try{return await yr(E)}catch{return h.push(E),yr(U)}},d=()=>gd(async E=>{if(!("DecompressionStream"in window))return new xr().loadAsync("./assets/jinse-v6.glb");let U=await _l("./assets/jinse-v6.glb.gz"+(E?"?retry="+E:""),539773),z=await new Response(new Blob([U]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();return new xr().parseAsync(z,new URL("./assets/",location.href).href)},"\u9526\u745F\u6A21\u578B"),f=0,g=E=>E.then(U=>(t(++f,7),U)),[_,m,p,T,y,x]=await Promise.all([d(),yr("./assets/landscape-v6-fast.webp"),u("./assets/dream-v6-fast.webp","./assets/landscape-v6-fast.webp"),yr("./assets/poet-v6-fast.webp"),yr("./assets/wing-v4-fast.webp"),u("./assets/memories-v4-fast.webp","./assets/landscape-v6-fast.webp")].map(g));await document.fonts.ready,t(7,7);let I=rd(s,r,x),R=new Qe;R.name="Jinse_Instrument",s.add(R),R.add(_.scene);let A=[],D=[];_.scene.traverse(E=>{E.isMesh&&(E.castShadow=!/Gold|Inlay|String/.test(E.name),E.receiveShadow=!0,E.material&&(E.material.envMapIntensity=.65,E.name.startsWith("String_")&&(E.visible=!1),E.name.startsWith("Bridge_")&&D.push(E)))});for(let E=0;E<50;E++){let U=-1.72+E*3.44/49,z=-1.85+E%25*.066+(E>=25?2.35:0),se=.44+.22*(1-(U/2.15)**2)+.045*Math.cos(z*.22),Q=Math.max(.93,se+.29)+.012,ae=new xt;ae.setAttribute("position",new rt(new Float32Array(195),3));let Ne=new hn({color:13677690,transparent:!0,opacity:.57}),$=new nn(ae,Ne);$.name="live_string_"+E,$.userData={id:E,x:z,z:-U,peak:Q},R.add($),A.push($)}let S=ad(s,r,R,A),v=Ox(T);s.add(v.group);let L={jade:{value:m},dream:{value:p},dreamMix:{value:0},wash:{value:0},fogColor:{value:new Le(15657693)}},H=new $t({uniforms:L,side:ft,depthWrite:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D jade;uniform sampler2D dream;uniform float dreamMix;uniform float wash;uniform vec3 fogColor;varying vec2 vUv;void main(){vec3 col=mix(texture2D(jade,vUv).rgb,texture2D(dream,vUv).rgb,dreamMix);gl_FragColor=vec4(mix(col,fogColor,wash),1.);
#include <colorspace_fragment>
}`}),k=sn(s,new bt(180,104),H,[0,5,-35]);k.renderOrder=-10;let V=sn(s,new bt(65,55),new Lo({color:3430471,opacity:.1}),[2,-1.15,0]);V.rotation.x=-Math.PI/2,V.receiveShadow=!0,V.visible=!1;let K=new Qe;s.add(K);let q=Nx();for(let E=0;E<5;E++){let U=sn(K,new bt(38,5),new gt({map:q,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.28}),[E%2?8:-5,-1.4+E*.18,8-E*5]);U.userData.baseX=U.position.x}let j=new Qe;s.add(j);let X=new bt(9.6,6.5,40,28),ce=X.attributes.position.array.slice(),me=[];for(let E=0;E<4;E++){let U=x.clone();U.repeat.set(.5,.5),U.offset.set(E%2*.5,E<2?.5:0),U.needsUpdate=!0,me.push(new gt({map:U,side:ft,toneMapped:!1,transparent:!0,opacity:1}))}let we=sn(j,X,me[0]),ze=new Ct({color:4682587,roughness:.7});for(let E of[-1,1]){let U=sn(j,new pi(.06,.06,9.9,16),ze,[0,E*3.28,.08]);U.rotation.z=Math.PI/2;for(let z of[-5,5])sn(j,new Cn(.09,10,8),new Ct({color:10652241,metalness:.4,roughness:.6}),[z,E*3.28,.08])}let Je=sn(j,new Cn(.045,10,10),new gt({color:16768931,toneMapped:!1}),[-.59,-.01,.14]);Je.scale.y=2;let Z=new Qe;s.add(Z);let ie=[];for(let E=0;E<7;E++){let U=1.5+E*2.15,z=5-E*3.1,se=sn(Z,new pi(.012,.012,22,6),new Ct({color:10324051,roughness:.55,metalness:.3,transparent:!0,opacity:.55}),[U,4,z]);ie.push(se)}let Te=[];for(let E=0;E<(e?4:7);E++){let U=pd(y);s.add(U.group),Te.push(U)}let le=pd(y);s.add(le.group);let Pe=new Qe;s.add(Pe);let Ue=sn(Pe,new bt(5.1,3.2,16,10),new gt({color:14867911,side:ft,transparent:!0,opacity:.75,toneMapped:!1}),[0,1.3,0]);Pe.rotation.y=-.28;let ke=new ar([In([10,-.4,1]),In([8,2,2.5]),In([5.5,2.2,3.8]),In([2.7,1.7,2])]),ot=sn(s,new Po(ke,100,.009,6,!1),new Ct({color:11967067,roughness:.45,metalness:.6})),We=new Qe;s.add(We);let ee=[];function C(){I.clearFlight();for(let E of[...We.children])E.geometry.dispose(),E.material.map?.dispose(),E.material.dispose(),We.remove(E);ee=[]}function Ce(E){C(),I.capture(),r.updateMatrixWorld();let U=document.createTreeWalker(E,NodeFilter.SHOW_TEXT),z,se=new P;r.getWorldDirection(se);let Q=2*Math.tan(St.degToRad(r.fov/2))*8/innerHeight;for(;z=U.nextNode();){let ae=0;for(let Ne of[...z.textContent]){let $=ae+Ne.length,de=document.createRange();if(de.setStart(z,ae),de.setEnd(z,$),ae=$,!Ne.trim())continue;let Se=de.getBoundingClientRect();if(!Se.width||!Se.height)continue;let ne=getComputedStyle(z.parentElement),te=document.createElement("canvas");te.width=te.height=512;let De=te.getContext("2d");De.font=`360px ${ne.fontFamily}`,De.fillStyle=ne.color,De.textAlign="center",De.textBaseline="middle",De.fillText(Ne,256,268);let Oe=new Rn(te);Oe.colorSpace=ht;let tt=parseFloat(ne.fontSize)*Q*512/360,N=sn(We,new bt(tt,tt),new gt({map:Oe,transparent:!0,side:ft,depthWrite:!1,toneMapped:!1})),Y=new P((Se.x+Se.width/2)/innerWidth*2-1,-(Se.y+Se.height/2)/innerHeight*2+1,.5).unproject(r).sub(r.position).normalize();N.position.copy(r.position).addScaledVector(Y,8/Y.dot(se)),N.quaternion.copy(r.quaternion),ee.push({mesh:N,start:N.position.clone(),back:se.clone().multiplyScalar(-1),side:Se.x+Se.width/2<innerWidth/2?-1:1})}}}function Me(E){I.travel(E);for(let{mesh:U,start:z,back:se,side:Q}of ee)U.position.copy(z).addScaledVector(se,kt(E)*16),U.position.x+=Q*kt(E)*3.5,U.rotateY(0),U.material.opacity=E<.9?1:(1-E)*10}function ge(E,U){for(let z of A){let{id:se,x:Q,z:ae,peak:Ne}=z.userData,$=z.geometry.attributes.position,de=U>=7&&U<=10&&se===(U-7)*11+5||U===0&&se===17;for(let ne=0;ne<65;ne++){let te=-5.86+ne*11.72/64,De=te<Q?(te+5.86)/(Q+5.86):(5.86-te)/(5.86-Q),Oe=Math.max(S.strength(se,E),ue.energy(se,E)),tt=Math.sin(ne*Math.PI/64)*(Oe*Math.sin(E*(31+se*.22))*.13+(de?Math.sin(E*24)*.018:0));$.setXYZ(ne,te,.825+De*(Ne-.825)+tt,ae)}$.needsUpdate=!0;let Se=Math.max(S.strength(se,E),ue.energy(se,E));z.material.opacity=U===3&&se>=25?.08:Math.max(.58,Se),z.material.color.setHex(Se>.03||se===S.selected?16763749:de?16768928:12164452)}}let ue=od(s,r,S,I),qe=-1;function be(E,U,z,{walk:se=0,flight:Q=0,from:ae=z,annotation:Ne=null,phase:$=0}={}){r.position.fromArray(E.camera),r.fov=St.radToDeg(2*Math.atan(Math.tan(St.degToRad(E.fov/2))*Math.max(1,16/9/(innerWidth/innerHeight)))),r.lookAt(In(E.target)),r.updateProjectionMatrix(),r.updateMatrixWorld(),R.visible=E.instrumentAlpha>.01,R.position.fromArray(E.instrument),R.rotation.set(E.instrumentRot[0],E.instrumentRot[1],E.instrumentRot[2]),R.scale.setScalar(E.instrumentScale),R.traverse(ne=>{ne.isMesh&&!ne.name.startsWith("String_")&&ne.material&&(ne.material.transparent=E.instrumentAlpha<.99,ne.material.opacity=E.instrumentAlpha)}),v.group.visible=E.actorAlpha>.01,v.group.position.fromArray(E.actor),v.group.scale.setScalar(E.actorScale),v.group.quaternion.copy(r.quaternion),v.skin.material.opacity=E.actorAlpha,v.ink.value=E.silhouette,v.animate(U,se>.05,z>=7&&z<=10),v.skin.castShadow=!1,L.dreamMix.value=E.dream,L.wash.value=E.wash,j.visible=E.memoryAlpha>.01,j.position.fromArray(E.memory),j.rotation.set(.02,E.memoryTurn,0),j.scale.setScalar(E.memoryScale);let de=md(z-7,0,3);Q>0&&Q<.5&&ae>=7&&ae<=10&&(de=ae-7),de!==qe&&(we.material=me[de],qe=de),we.material.opacity=E.memoryAlpha;let Se=X.attributes.position;for(let ne=0;ne<Se.count;ne++){let te=ce[ne*3],De=ce[ne*3+1];Se.setZ(ne,Math.pow(te/4.8,2)*.12+Math.sin(te*1.2+U*.55)*.025+(z===9?Math.sin(te*2.4+U*.7)*.035:0))}Se.needsUpdate=!0,Je.visible=z===7,Je.scale.y=1.4+Math.sin(U*9)*.18,Z.visible=E.hall>.01,ie.forEach((ne,te)=>{ne.material.opacity=E.hall*(te===z-7?.9:.43),ne.position.x=1.5+te*2.15+Math.sin(U*.7+te)*.007}),K.children.forEach((ne,te)=>{ne.position.x=ne.userData.baseX+Math.sin(U*.06+te)*2,ne.material.opacity=.22+E.wash*.1}),Te.forEach((ne,te)=>{if(ne.group.visible=te===0?E.butterflyScale>.01:(E.dream>.2||z===0)&&te<(E.dream>.2?Te.length:3),te===0)ne.group.position.fromArray(E.butterfly),ne.group.scale.setScalar(E.butterflyScale),ne.group.rotation.set(0,-.12,Math.sin(U*.3)*.06-.12),ne.animate(U,z===16);else{let De=U*.15+te*1.8;ne.group.position.set(8.5+Math.sin(De)*2.8,4+Math.cos(De*.7+te)*2,-1+te*1.2),ne.group.scale.setScalar(.13+te*.009),ne.group.quaternion.copy(r.quaternion),ne.animate(U+te)}}),le.group.visible=E.pass>.01,le.group.position.copy(r.position).add(In([6-E.pass*12,0,-5])),le.group.scale.setScalar(Math.sin(E.pass*Math.PI)*4.5+.2),le.group.quaternion.copy(r.quaternion),le.animate(U),Pe.visible=E.paper>.01,Pe.position.set(6,-.7,-5),Ue.material.opacity=E.paper*.8,ot.visible=E.arc>.01,ot.material.transparent=!0,ot.material.opacity=E.arc,S.apply(E,U),I.apply(E,U,Ne,`${z}:${$}`,Q),ue.apply(E,U,z,{flight:Q,from:ae,phase:$}),ge(U,z),n.render(s,r)}function w(){I.resetText(),n.setSize(innerWidth,innerHeight),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix()}function M(){let E=new Yt().setFromObject(R);return{...I.inspect(),...S.inspect(),...ue.inspect(),camera:r.position.toArray(),fov:r.fov,model:R.position.toArray(),strings:A.length,bridges:D.length,bones:v.bones.map(U=>U.name),triangles:n.info.render.triangles,calls:n.info.render.calls,textures:n.info.memory.textures,failures:h,modelBounds:{min:E.min.toArray(),max:E.max.toArray()}}}async function B(){let{GLTFExporter:E}=await import("./vendor/loaders/GLTFExporter.js"),U=v.group.position.clone(),z=v.group.quaternion.clone(),se=v.group.scale.clone(),Q=v.skin.material.opacity,ae=v.bones.map(ne=>({p:ne.position.clone(),q:ne.quaternion.clone()}));v.group.position.set(0,0,0),v.group.quaternion.identity(),v.group.scale.setScalar(1),v.skin.skeleton.pose(),v.skin.material.opacity=1,v.group.name="LiShangyin_ArtisticInterpretation_2_5D",v.skin.name="SilkSkinnedMesh",v.group.updateMatrixWorld(!0);let Ne=[0,1,2,3,4],$=(ne,te)=>new Sn(ne+".quaternion",Ne,te.flatMap(De=>new en().setFromEuler(new ln(0,0,De)).toArray())),de=new Bi("Idle_Silk",4,[$("head",[0,.012,0,-.012,0]),$("left_sleeve",[0,.02,0,-.02,0]),$("right_sleeve",[0,-.015,0,.015,0]),$("left_hem",[0,.018,0,-.018,0]),$("right_hem",[0,-.018,0,.018,0])]),Se=new Bi("Walk_Ink",4,[$("left_hem",[0,.07,0,-.07,0]),$("right_hem",[0,-.07,0,.07,0]),$("left_lower_robe",[.02,-.045,-.02,.045,.02]),$("right_lower_robe",[-.02,.045,.02,-.045,-.02])]);try{return await new E().parseAsync(v.group,{binary:!0,animations:[de,Se],onlyVisible:!1,trs:!0})}finally{v.group.position.copy(U),v.group.quaternion.copy(z),v.group.scale.copy(se),v.skin.material.opacity=Q,v.bones.forEach((ne,te)=>{ne.position.copy(ae[te].p),ne.quaternion.copy(ae[te].q)})}}return{hitInstrument:S.hitBody,emitLetter:(E,U,z)=>{I.birth(E,S.origin(U),z),ue.pluck(U,z,E)},hitString:S.hit,pluckString:S.pluck,stringTargets:S.targets,hitWord:I.hitWord,focusWord:I.focusWord,wordTargets:I.targets,renderer:n,scene:s,camera:r,instrument:R,actor:v,apply:be,resize:w,inspect:M,captureText:Ce,updateText:Me,clearText:C,failures:h,exportActor:B,loseContext:()=>o?.loseContext(),restoreContext:()=>o?.restoreContext(),restoreEnvironment(){a.dispose(),a=fd(n),s.environment=a.texture}}}var Fx=["","\u9526\u745F\u65E0\u7AEF\u4E94\u5341\u5F26","\u4E94\u5341\u5F26","\u4E00\u5F26\u4E00\u67F1","\u60B2\u58F0\u4E0D\u53EF\u6B62","\u65E0\u7AEF","\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74","\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74","\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74","\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74","\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74","\u601D\u534E\u5E74","\u65E0\u7AEF","\u5E84\u751F\u6653\u68A6\u8FF7\u8774\u8776","\u5E84\u751F\u6653\u68A6\u8FF7\u8774\u8776","\u6653\u68A6\u8FF7\u8774\u8776","\u8FF7\u4E0E\u6258","\u9526\u745F","\u671B\u5E1D\u6625\u5FC3\u6258\u675C\u9E43","\u5E84\u751F\u4E0E\u671B\u5E1D","\u6CA7\u6D77\u6708\u660E\u73E0\u6709\u6CEA","\u84DD\u7530\u65E5\u6696\u7389\u751F\u70DF","\u53EA\u662F\u5F53\u65F6\u5DF2\u60D8\u7136","\u601D\u534E\u5E74\u4E0E\u6B64\u60C5","\u72EC\u6068\u65E0\u4EBA\u4F5C\u90D1\u7B3A","\u6B64\u60C5\u53EF\u5F85\u6210\u8FFD\u5FC6","\u4E00\u5F26\u4E00\u67F1","\u6B64\u60C5","\u8FF7\u6258\u6709\u751F","\u5F53\u65F6\u5DF2\u60D8\u7136","\u7B3A\u6CE8","\u4E00\u5F26\u4E00\u67F1\u601D\u534E\u5E74"],Bx=["","\u5174","\u5F26","\u58F0\u7684\u5F62\u72B6","\u60B2","\u65E0\u7AEF","\u601D","\u53D7\u77E5","\u767B\u7B2C","\u5165\u5E55","\u884C\u65C5","\u534E\u5E74","\u95EE","\u8FF7","\u7269\u5316","\u6653\u68A6","\u6258","\u5168\u7BC7","\u6625\u5FC3","\u53D8\u4E0E\u4E0D\u53D8","\u6CEA","\u70DF","\u5DF2","\u6B64\u60C5","\u90D1\u7B3A","\u53EF\u5F85","\u58F0\u5F8B","\u60BC\u4EA1","\u5BF9\u4ED7","\u60D8\u7136","\u539F\u5178","\u91CD\u8BFB"],zx=["instrument","instrument","instrument","instrument","instrument","instrument","scroll","scroll","scroll","scroll","scroll","scroll","void","dream","dream","dream","dream","instrument","birds","dream","sea","jade","void","instrument","scroll","instrument","instrument","scroll","instrument","dream","scroll","dream"];function xd(i){return i.map((e,t)=>{let n=document.createElement("div");n.innerHTML=e.body||"";let s=[...n.querySelectorAll("section")],r=n.querySelector(".argument")?.outerHTML||"",o=s.length?s.map(a=>({heading:a.querySelector("h2")?.textContent||e.title,html:r+a.outerHTML})):[{heading:e.title,html:e.body||""}];return t>=7&&t<=10&&(o=[{heading:e.title,html:'<p class="scroll-fact">'+["\u4EE4\u72D0\u695A\u8D4F\u8BC6\u5176\u6587\uFF0C\u5E76\u6388\u4EE5\u7AE0\u594F\u3002","\u5F00\u6210\u4E8C\u5E74\uFF08837\uFF09\uFF0C\u767B\u8FDB\u58EB\u7B2C\u3002","\u738B\u8302\u5143\u8058\u5165\u5E55\u5E9C\uFF0C\u5E76\u4EE5\u5973\u59BB\u4E4B\u3002","\u5728\u4E0D\u540C\u5E55\u5E9C\u4E0E\u5B98\u804C\u4E4B\u95F4\u8F97\u8F6C\u3002"][t-7]+"</p>"+(s.at(-1)?.outerHTML||"")}]),t===1&&(o=[{heading:"\u58F0\u8D77\uFF0C\u5B57\u751F",html:'<p class="argument">\u58F0\u58F0\u5165\u8033\uFF0C\u5F26\u5F26\u7275\u52A8\u534E\u5E74\u3002</p><section><p>\u201C\u4E94\u5341\u5F26\u201D\u5148\u94FA\u5F00\u7E41\u58F0\uFF0C\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u518D\u5C06\u5B83\u9010\u4E00\u6536\u62E2\u3002\u201C\u601D\u201D\u843D\u5728\u53E5\u672B\uFF0C\u5668\u7269\u7684\u79E9\u5E8F\u7531\u6B64\u5316\u4E3A\u8FFD\u5FC6\u7684\u8282\u594F\u3002</p><p>\u4ECE\u58F0\u97F3\u62B5\u8FBE\u8BB0\u5FC6\uFF0C\u662F\u9996\u8054\u7684\u5174\u53D1\u529B\u91CF\u3002\u6BCF\u4E00\u6B21\u89E6\u5F26\uFF0C\u90FD\u8BA9\u66FE\u7ECF\u7684\u5E74\u534E\u91CD\u65B0\u83B7\u5F97\u5F62\u72B6\u3002</p></section>'},{heading:"\u5F26\u3001\u67F1\u4E0E\u5171\u9E23",source:"\u539F\u8BD7 S7",html:'<p class="argument">\u5F26\u5217\u5C55\u5F00\uFF0C\u58F0\u97F3\u7684\u7ED3\u6784\u663E\u73B0\u3002</p><section><p>\u5F26\u632F\u52A8\uFF0C\u67F1\u652F\u627F\uFF0C\u745F\u4F53\u4E0E\u58F0\u97F3\u76F8\u5E94\u3002\u201C\u4E00\u5F26\u4E00\u67F1\u201D\u65E2\u6709\u5668\u7269\u7684\u5177\u4F53\u611F\uFF0C\u4E5F\u6709\u8282\u594F\u7684\u53CD\u590D\u611F\u3002</p><p>\u5F53\u201C\u601D\u534E\u5E74\u201D\u63A5\u5728\u5B83\u4EEC\u4E4B\u540E\uFF0C\u5916\u7269\u7684\u6BCF\u4E00\u6B21\u5FAE\u52A8\uFF0C\u4FBF\u6210\u4E3A\u5185\u5FC3\u7684\u4E00\u6B21\u89E6\u53D1\u3002</p></section>'},...o]),t===17&&(o=[{heading:"\u516B\u53E5\uFF0C\u540C\u4E00\u573A\u8FFD\u5FC6",html:n.querySelector(".poem-full").outerHTML}]),{poem:t===0?"":Fx[t]||e.title,term:t===0||t===3||t>=7&&t<=10?"":Bx[t]||"\u601D",theme:zx[t]||"dream",parts:o,lead:r,scroll:t>=6&&t<=11}})}var qo=[{name:"\u5668\u7269\u4E0E\u95EE\u9898",start:0,go:1},{name:"\u8EAB\u4E16\u4E0E\u534E\u5E74",start:6,go:6},{name:"\u5178\u6545\u4E0E\u610F\u8C61",start:13,go:13},{name:"\u7AE0\u6CD5\u4E0E\u9610\u91CA",start:23,go:23},{name:"\u7ED3\u8BBA\u4E0E\u8BA8\u8BBA",start:29,go:29}],Cs={\u5174:"\u7531\u7269\u89E6\u60C5\uFF0C\u7531\u58F0\u5165\u5FC6\u3002\u9526\u745F\u7684\u58F0\u54CD\u5F15\u51FA\u201C\u601D\u534E\u5E74\u201D\uFF0C\u4F7F\u773C\u524D\u5668\u7269\u6210\u4E3A\u6DF1\u5207\u8FFD\u5FC6\u7684\u5165\u53E3\u3002",\u65E0\u7AEF:"\u201C\u65E0\u7AEF\u201D\u5B57\u9762\u662F\u65E0\u6765\u7531\uFF0C\u53E5\u4E2D\u5374\u5E26\u7740\u201C\u504F\u504F\u5982\u6B64\u201D\u7684\u57CB\u6028\u3002\u5B83\u5C06\u96BE\u4EE5\u6392\u9063\u7684\u611F\u53D7\u79FB\u5411\u5668\u7269\uFF0C\u4E0E\u4E0B\u53E5\u5904\u5904\u80FD\u89E6\u53D1\u8FFD\u601D\u5F62\u6210\u5F20\u529B\u3002",\u601D:"\u201C\u601D\u201D\u627F\u63A5\u5F26\u4E0E\u67F1\uFF0C\u628A\u773C\u524D\u7684\u5668\u7269\u8F6C\u4E3A\u56DE\u671B\u7684\u52A8\u4F5C\uFF1B\u4E2D\u95F4\u56DB\u53E5\u7531\u5B83\u7EDF\u6444\uFF0C\u5C3E\u8054\u518D\u4EE5\u201C\u6B64\u60C5\u201D\u603B\u627F\u3002",\u534E\u5E74:"\u201C\u534E\u5E74\u201D\u5DF2\u5E26\u6709\u73CD\u7F8E\u7684\u4EF7\u503C\u5224\u65AD\u3002\u8FFD\u5FC6\u65E2\u4FDD\u5B58\u7F8E\u597D\uFF0C\u4E5F\u91CD\u65B0\u7EC4\u7EC7\u4E86\u5F53\u65F6\u672A\u80FD\u660E\u767D\u7684\u7ECF\u9A8C\u3002",\u8FF7:"\u201C\u8FF7\u201D\u517C\u6709\u6C89\u6D78\u4E0E\u96BE\u8FA8\u7684\u610F\u5473\u3002\u5178\u6E90\u7684\u68A6\u89C9\u4E4B\u95EE\u88AB\u79FB\u5165\u201C\u601D\u534E\u5E74\u201D\uFF0C\u4F7F\u66FE\u7ECF\u771F\u5207\u7684\u7ECF\u9A8C\u5728\u56DE\u671B\u4E2D\u52A8\u6447\u3002",\u6653\u68A6:"\u201C\u6653\u68A6\u201D\u662F\u6E05\u6668\u4E4B\u68A6\uFF0C\u5904\u5728\u591C\u4E0E\u663C\u76F8\u63A5\u7684\u65F6\u95F4\u3002\u5C06\u9192\u3001\u6613\u6563\u7684\u4E34\u754C\u611F\uFF0C\u4F7F\u68A6\u5883\u66F4\u663E\u8F7B\u76C8\u3002",\u6258:"\u201C\u6258\u201D\u5EFA\u7ACB\u5BC4\u5BD3\u5173\u7CFB\uFF1A\u4E3B\u4F53\u96BE\u4EE5\u5F84\u76F4\u8868\u8FBE\u6216\u5B8C\u6210\u7684\u5FC3\u610F\uFF0C\u501F\u675C\u9E43\u9E23\u58F0\u5EF6\u7EED\u3002\u5B83\u4E0E\u201C\u8FF7\u201D\u7684\u4E0D\u786E\u5B9A\u5F62\u6210\u5BF9\u8BFB\u3002",\u6625\u5FC3:"\u201C\u6625\u5FC3\u201D\u5BB9\u7EB3\u6625\u65E5\u840C\u52A8\u7684\u613F\u671B\u4E0E\u60C5\u601D\uFF1B\u5728\u786E\u5B9A\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5148\u5206\u6790\u8FD9\u4EFD\u5FC3\u610F\u4E3A\u4F55\u9700\u8981\u5BC4\u6258\u3002",\u6CEA:"\u300A\u535A\u7269\u5FD7\u300B\u8BB0\u6CEA\u751F\u6210\u73E0\uFF0C\u672C\u8BD7\u5374\u5199\u201C\u73E0\u6709\u6CEA\u201D\uFF1A\u73CD\u7269\u91CD\u65B0\u663E\u51FA\u6CEA\u7684\u6027\u8D28\uFF0C\u4F7F\u73CD\u7F8E\u4E0E\u60B2\u611F\u76F8\u4E92\u6E17\u900F\u3002",\u70DF:"\u201C\u7389\u201D\u5177\u6709\u5B9E\u4F53\u7684\u73CD\u8D35\uFF0C\u201C\u70DF\u201D\u5374\u4F7F\u8FD9\u79CD\u7F8E\u663E\u5F97\u96BE\u4EE5\u63E1\u6301\u3002\u4E0E\u201C\u73E0\u6709\u6CEA\u201D\u76F8\u5BF9\uFF0C\u51DD\u805A\u4E0E\u5F25\u6563\u6784\u6210\u4E0D\u540C\u7684\u611F\u53D7\u5F62\u5F0F\u3002",\u5DF2:"\u201C\u5DF2\u201D\u628A\u60D8\u7136\u653E\u56DE\u534E\u5E74\u53D1\u751F\u4E4B\u65F6\u3002\u8FC7\u53BB\u4E0E\u4ECA\u65E5\u5171\u4EAB\u6DF1\u957F\u7684\u611F\u53D7\uFF1A\u7F8E\u597D\u7684\u7ECF\u9A8C\uFF0C\u540C\u65F6\u542B\u6709\u672A\u660E\u4E0E\u672A\u5C3D\u3002",\u6B64\u60C5:"\u201C\u6B64\u60C5\u201D\u603B\u627F\u68A6\u4E4B\u8FF7\u3001\u5FC3\u4E4B\u6258\u3001\u73E0\u4E4B\u6CEA\u4E0E\u7389\u4E4B\u70DF\uFF1B\u5B83\u7684\u6307\u4EE3\u5C06\u5206\u6563\u7684\u610F\u8C61\u6536\u62E2\u5230\u5C3E\u8054\u3002",\u53EF\u5F85:"\u201C\u53EF\u5F85\u201D\u53D6\u201C\u5C82\u5F85\u201D\u7684\u53CD\u95EE\u8BED\u6C14\uFF0C\u5C06\u60D8\u7136\u7531\u4ECA\u65E5\u8FFD\u5FC6\u6298\u56DE\u5F53\u65F6\u3002\u8BB8\u9857\u300A\u5F66\u5468\u8BD7\u8BDD\u300B\u5F15\u4F5C\u201C\u4F55\u5F85\u201D\uFF0C\u95EE\u610F\u66F4\u4E3A\u9C9C\u660E\u3002"};var Pn=xd(It),he=i=>document.querySelector(i),pn=he("#stage"),kx=new URLSearchParams(location.search).has("low"),Vx={S1:"https://artsandculture.google.com/asset/twenty-five-stringed-instrument-se/tQG-JrPunSOt_A?hl=zh-cn",S2:"https://www.chinajiandu.cn/News/Details/xsyj?nid=471",S3:"https://zh.wikisource.org/zh-hant/%E5%B0%81%E7%A6%85%E4%B9%A6",S4:"https://www.shidianguji.com/book/LS0017/chapter/LS0017_1178",S5:"https://news.nankai.edu.cn/mtnk/system/2016/05/31/000283318.shtml",S6:"https://pages.ucsd.edu/~dkjordan/chin/LaoJuang/ButterflyDream.html",S7:"https://zh.wikisource.org/wiki/\u9326\u745F",S8:"https://zh.wikisource.org/wiki/\u83EF\u967D\u570B\u5FD7/\u5377\u4E09",S9:"https://zh.wikisource.org/wiki/\u56F0\u5B78\u7D00\u805E_(\u56DB\u5EAB\u5168\u66F8\u672C)/\u537718",S10:"https://zh.wikisource.org/wiki/\u674E\u7FA9\u5C71\u8A69\u96C6\u6CE8/\u5377\u4E00\u4E0A",S11:"https://zh.wikisource.org/wiki/\u5F65\u5468\u8A69\u8A71",S12:"https://zh.wikisource.org/wiki/\u7FA9\u9580\u8B80\u66F8\u8A18_(\u56DB\u5EAB\u5168\u66F8\u672C)/\u537757",S13:"https://zh.wikisource.org/wiki/\u5143\u597D\u554F\u96C6/11",S14:"https://zh.wikisource.org/wiki/\u535A\u7269\u5FD7/\u5377\u4E4B\u4E8C",S15:"https://zh.wikisource.org/wiki/\u674E\u7FA9\u5C71\u8A69\u96C6_(\u56DB\u5EAB\u5168\u66F8\u672C)/\u5168\u89BD",S17:"https://zh.wikisource.org/wiki/\u4E2D\u5C71\u8A69\u8A71",S16:"https://zh.wikisource.org/wiki/\u5E73\u6C34\u97FB"},$e,re=0,et=0,Jn=0,Hx=0,Gx=0,Md=-100,bn=null,Mr=!1,Kt=!1,_t=null,Yo=0,vi,Sr=!1,Sd,Gt;var Zo={music:.012,effects:.11,voice:0},$o={},vr=new Set;function Wx(){return{camera:[0,9.3,23.5],target:[0,1.2,0],fov:38,instrument:[4.2,.4,1],instrumentRot:[0,-.48,-.01],instrumentScale:.98,instrumentAlpha:1,actor:[8.8,-2,-8],actorScale:.88,actorAlpha:.84,silhouette:0,dream:0,wash:0,memory:[4.2,3.5,-3],memoryTurn:-.06,memoryScale:.8,memoryAlpha:0,hall:0,butterfly:[8,5,-2],butterflyScale:.14,pass:0,paper:0,arc:0,scrollAlpha:0,scrollOpen:0,sea:0,jade:0,birds:0,explode:0,scrollLarge:0,scrollIndex:0,scrollReveal:1}}function jn(i){let e=Wx(),t=It[i].scene;if(t===2&&(Object.assign(e,{camera:[.5,9,23],target:[.5,1,0],instrument:[7.2,.1,1],instrumentRot:[.01,-.42,0],instrumentScale:.86,actorAlpha:0,butterflyScale:.08,wash:.08}),i===2&&(e.camera=[1.2,8.4,23],e.target=[1.2,.8,0]),i===3&&(e.wash=.17),i===4&&(e.instrumentRot=[0,-.28,0],e.camera=[.5,8.6,23]),i===5&&(e.camera=[.5,7.3,25],e.target=[.5,.8,0],e.instrumentAlpha=.55,e.wash=.26)),t===3&&(Object.assign(e,{camera:[0,3.2,23],target:[0,2.7,0],instrumentAlpha:0,actor:[6.4,-.5,-.8],actorScale:.48,actorAlpha:.88,silhouette:1,wash:.88,hall:.9,butterflyScale:0}),i===6?(e.actor=[5.5,-.7,-1.5],e.actorScale=.68,e.memoryAlpha=0):i<=10?(e.memoryAlpha=1,e.memoryTurn=-.045+(i-7)*.018,e.actor[0]=6.3+(i-7)*.28):(e.memoryAlpha=0,e.actor=[6.8,-.7,-2],e.actorScale=.62,e.wash=.93)),t===4&&Object.assign(e,{camera:[1.5,3.2,20],target:[.5,2.4,0],instrumentAlpha:0,actor:[7.4,-.7,-4],actorScale:.65,actorAlpha:.67,silhouette:.7,wash:.97,butterflyScale:0,arc:.6}),t===5&&(Object.assign(e,{camera:[0,3.3,23],target:[0,3,0],instrumentAlpha:0,actorAlpha:0,dream:1,butterfly:[5.4,4.1,4],butterflyScale:1.1,arc:.34}),i===14&&Object.assign(e,{camera:[2.2,6.3,24],target:[.8,2.6,-1],actor:[6,-.6,-4.7],actorScale:.34,actorAlpha:.75,silhouette:1,paper:1,butterfly:[6.8,5.8,6],butterflyScale:1.3}),i===15&&(e.butterfly=[6.8,4.5,1],e.butterflyScale=.68,e.wash=.08),i===16&&Object.assign(e,{camera:[0,4.3,24],target:[0,2,0],butterfly:[5.5,2.38,3.8],butterflyScale:.48,arc:1,wash:.08})),t===3){let n=Math.max(0,Math.min(3,i-7)),s=n*13;Object.assign(e,{camera:[s,4.5,18],target:[s,3.8,0],memoryAlpha:0,wash:.12,hall:0,scrollAlpha:1,scrollLarge:1,scrollIndex:n,scrollReveal:1,scrollOpen:(n+1)/4,actor:[s-4,-3.5,-2],actorScale:.21,actorAlpha:.88}),i===6&&(e.scrollReveal=.025,e.actor=[-4,-3.5,-2]),i===11&&(e.scrollIndex=3,e.camera=[39,4.5,19],e.target=[39,3.8,0],e.actor=[35,-3.5,-2])}if(t===6){Object.assign(e,{camera:[0,4.5,23],target:[0,2.5,0],instrumentAlpha:0,actorAlpha:0,dream:.6,wash:.08,butterfly:[7.4,4.4,2],butterflyScale:.8,arc:.45});let n=Pn[i].theme;n==="instrument"&&Object.assign(e,{camera:[.5,8.5,22],target:[.5,.8,0],instrument:[6.7,.1,1],instrumentScale:.9,instrumentAlpha:1,butterflyScale:.1,dream:.1,wash:.08}),n==="scroll"&&Object.assign(e,{camera:[6.5,5,25],target:[6.5,2.5,-1],scrollAlpha:1,scrollOpen:.75,scrollIndex:1,butterflyScale:0,dream:.1,wash:.12}),n==="sea"&&Object.assign(e,{sea:1,butterflyScale:0,dream:.25,wash:.13,arc:0}),n==="jade"&&Object.assign(e,{jade:1,butterflyScale:0,dream:.1,wash:.12,arc:0,camera:[0,8.8,23],target:[0,1.1,0],instrumentAlpha:1,instrument:[7.6,.3,1],instrumentScale:.68,instrumentRot:[.02,-.42,-.01]}),n==="birds"&&Object.assign(e,{birds:1,butterflyScale:0,dream:.6,wash:.08}),n==="void"&&Object.assign(e,{instrumentAlpha:.16,instrument:[8,.1,0],instrumentScale:.65,actor:[9,-1,-5],actorScale:.4,actorAlpha:.5,silhouette:1,wash:.46,butterflyScale:.25,arc:.65})}return i===2&&(e.camera=et===0?[.6,13,23.5]:[.8,10.8,23],e.target=[.6,1,0],e.instrumentRot=[0,-.15,0]),i===3&&(e.explode=.42,e.camera=[.5,10.6,23],e.target=[.5,1.4,0],e.instrument=[6.8,.1,1],e.instrumentScale=.72,e.instrumentRot=[0,-.14,0]),i===4&&(e.camera=[.5,8.2,23],e.target=[.5,1.1,0]),i===1&&et>0&&(e.explode=et<3?1:0,e.camera=et<3?[.7,8.5,23]:[1.2,7,22],e.target=et<3?[.5,1.6,0]:[1.7,1.2,0],e.instrument=[6.7,.1,1],e.instrumentScale=.74,e.instrumentRot=[.02,et<3?-.32:-.62,0]),et>0&&(e.scrollLarge>.5?(e.camera[0]+=.1,e.camera[2]+=.4):(e.camera[0]+=.6,e.camera[2]-=1.7,e.target[0]+=.25),e.butterfly[2]+=1),e}function yd(i,e,t){let n={};for(let s of Object.keys(e))Array.isArray(e[s])?n[s]=e[s].map((r,o)=>St.lerp(i[s][o],r,t)):n[s]=St.lerp(i[s],e[s],t);return n}function vd(i){return(i||"").replace(/S\d+/g,e=>`<a href="${Vx[e]}" target="_blank" rel="noreferrer">${e}</a>`)}function br(){let i=It[re],e=Pn[re],t=e.parts[et]||e.parts[0];document.body.dataset.scene=i.scene,document.body.dataset.cue=re,document.body.dataset.layout=re===0?"opening":"cinematic",document.body.dataset.phase=et,document.body.dataset.biography=re>=7&&re<=10?"true":"false";let n=qo.findLastIndex(s=>re>=s.start);he("#eyebrow").textContent=re===0?"\u7269\u8C61\u3001\u7528\u5178\u4E0E\u8FFD\u5FC6\u7ED3\u6784":`${["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94"][n]} \xB7 ${qo[n].name} / ${et===0?"\u95EE\u9898\u4E0E\u4F9D\u636E":"\u5206\u6790\u4E0E\u5224\u65AD"}`,he("#reportOutline").hidden=!Kt||re===0,he("#reportOutline").innerHTML=qo.map((s,r)=>`<button data-go="${s.go}" class="${r===n?"active":""}"><b>${["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94"][r]}</b>${s.name}</button>`).join(""),he("#reportOutline").querySelectorAll("button").forEach(s=>s.onclick=r=>{r.stopPropagation(),Mi(+s.dataset.go,{jump:!0})}),he("#title").textContent=re===0?i.title:t.heading,he("#subtitle").textContent=i.sub||"",he("#body").innerHTML=re===0?"":t.html,qx(),he("#gloss").hidden=!0,he("#source").innerHTML=vd(t.source||i.source),he("#endControls").hidden=re!==It.length-1,he("#studyControls").hidden=!Kt||re===0,he("#pluckAction").hidden=re<0||re>5,he("#structureAction").hidden=re!==1,he("#structureAction").textContent=et===1||et===2?"\u5408\u62E2":"\u62C6\u89E3",he("#interactionHint").hidden=!0,he("#interactionHint").textContent="",he("#nextLayer").textContent=et+1<e.parts.length?"\u6790\u4E49 \u2192":"\u5165\u5883 \u2192",he("#study").innerHTML=`<button id="closeStudy" aria-label="\u6536\u8D77\u7B3A\u6CE8">\u6536\u8D77\u7B3A\u6CE8 \xD7</button><small>${re+1} / ${It.length} \xB7 ${i.speaker}</small><h2>${i.title}</h2>${i.body||"<p>"+i.note+"</p>"}<div class="study-source">${vd(i.source)}</div>`,he("#study").scrollTop=0,he("#closeStudy").onclick=s=>{s.stopPropagation(),he("#study").hidden=!0},bd()}function bd(){let i=It[re];he("#notes").innerHTML=`<div class="note-position">${re+1} / ${It.length} \xB7 \u6587\u5B66\u62A5\u544A</div><h3>${i.title}</h3><b>\u8BB2\u8FF0\uFF1A${i.speaker}</b><p class="speaker-script">${i.note}</p><p>\u6765\u6E90\uFF1A${i.source||"\u300A\u9526\u745F\u300B"}</p><p>\u4E0B\u7AE0\uFF1A${It[re+1]?.title||"\u6F14\u793A\u7ED3\u675F"}</p><label>\u5E95\u4E50<input data-level="music" type="range" min="0" max="0.04" step="0.002" value="${Zo.music}"></label><label>\u62E8\u5F26\u97F3\u6548<input data-level="effects" type="range" min="0" max="0.3" step="0.01" value="${Zo.effects}"></label><button id="mute">${Sr?"\u53D6\u6D88\u9759\u97F3":"\u9759\u97F3"}</button><button id="closeNotes">\u5173\u95ED</button>`,he("#mute").onclick=e=>{e.stopPropagation(),Td()},he("#closeNotes").onclick=e=>{e.stopPropagation(),he("#notes").hidden=!0},he("#notes").querySelectorAll("input").forEach(e=>e.oninput=()=>{Zo[e.dataset.level]=+e.value,$l()})}async function Xx(){try{Gt=new AudioContext,await Gt.resume();for(let i of["music","effects","voice"]){let e=Gt.createGain();e.connect(Gt.destination),$o[i]=e}$l();for(let i of[130.81,196,261.63]){let e=Gt.createOscillator(),t=Gt.createGain();e.type="sine",e.frequency.value=i,t.gain.value=.09,e.connect(t).connect($o.music),e.start()}}catch{Gt=null}}function $l(){if(Gt)for(let[i,e]of Object.entries($o))e.gain.setTargetAtTime(Sr?0:Zo[i],Gt.currentTime,.08)}function Td(){Sr=!Sr,$l(),bd()}function wd(i){if(!Gt||Sr)return;if(vr.size>=6){let a=vr.values().next().value;a.stop(),vr.delete(a)}let e=Math.floor(Gt.sampleRate*2.3),t=Gt.createBuffer(1,e,Gt.sampleRate),n=t.getChannelData(0),s=Math.floor(Gt.sampleRate/i),r=89;for(let a=0;a<s;a++)r=r*16807%2147483647,n[a]=(r/2147483647*2-1)*Math.sin(a/s*Math.PI)*.8;for(let a=s;a<e;a++)n[a]=.496*(n[a-s]+n[a-s+1]);let o=Gt.createBufferSource();o.buffer=t,o.connect($o.effects),o.start(),vr.add(o),o.onended=()=>{vr.delete(o),o.disconnect()}}function Ad(){Yo=performance.now(),he("#words").classList.remove("ink-enter"),he("#words").offsetWidth,he("#words").classList.add("ink-enter"),$e.clearText(),he("#words").style.opacity=1,he("#words").style.opacity=0,[0,6,7,8,9,10,13].includes(re)&&wd([196,220,246.94,261.63,293.66][re%5])}function Mi(i,{jump:e=!1,replay:t=!1}={}){if(!$e||i<0||i>=It.length||!e&&!t&&(_t||i===re))return;let n=re,s=vi||jn(re),r=(()=>{let l=et;et=0;let h=jn(i);return et=l,h})();if(!Kt||t){_t=null,re=i,et=0,Jn=0,vi=r,br(),Ad();return}$e.captureText(he("#title")),t||(et=0,Jn=0),he("#study").hidden=!0;let o=It[n].scene!==It[i].scene,a=n===0&&i===1?"opening":n===1&&i===0?"reverseOpening":It[i].scene===3&&It[n].scene===3?"walk":o?"chapter":"detail",c=a.includes("Opening")||a==="opening"?3400:a==="walk"?3200:o?2900:2400;_t={from:n,to:i,start:performance.now(),duration:c,kind:a,fromPose:s,toPose:r,showText:!0},re=i,he("#words").style.opacity=0,br(),he("#words").scrollTop=0}function Ko(i){if(!Kt||_t)return;$e.captureText(he("#title"));let e=vi;et=i,_t={from:re,to:re,start:performance.now(),duration:i===3&&re===1?3400:2500,kind:"interpret",fromPose:e,toPose:jn(re),showText:!0},he("#words").style.opacity=0,br(),he("#words").scrollTop=0}function Is(i){!Kt||_t||re<0||re>5||(i=i??Gx++*7%50,Md=performance.now(),$e.pluckString(i,performance.now()*.001),wd(164.81*2**(i/36)),re>=2&&re<=5&&$e.emitLetter(Hx++%[...Pn[re].poem].length,i,performance.now()*.001),re===1&&et===0&&(Jn<7&&$e.emitLetter(Jn,i,performance.now()*.001),Jn=Math.min([...Pn[re].poem].length,Jn+1)))}function Jo(i){if(!i||re===0)return;let e=Object.keys(Cs).find(n=>n===i)||Object.keys(Cs).find(n=>n.includes(i)||i.includes(n));e||(e=i);let t=Cs[e]||he("#body .argument")?.textContent||It[re].note;$e.focusWord(e,performance.now()*.001),he("#gloss").hidden=!1,he("#gloss").innerHTML=`<button id="closeGloss" aria-label="\u6536\u8D77\u91CA\u4E49">\xD7</button><b>${e}${Cs[e]?"":" \xB7 \u672C\u6BB5\u8BD7\u4E49"}</b><p>${t}</p>`,he("#closeGloss").onclick=n=>{n.stopPropagation(),he("#gloss").hidden=!0,$e.focusWord("",performance.now()*.001)}}function qx(){let i=he("#body"),e=document.createTreeWalker(i,NodeFilter.SHOW_TEXT),t=[],n;for(;n=e.nextNode();)n.parentElement.closest("h2")||t.push(n);let s=Object.keys(Cs).sort((a,c)=>c.length-a.length),r=new RegExp("("+s.join("|")+")","g"),o=0;for(let a of t){if(o>9)break;let c=document.createDocumentFragment();for(let l of a.textContent.split(r))if(s.includes(l)&&o++<10){let h=document.createElement("button");h.type="button",h.className="inline-word",h.textContent=l,h.onclick=u=>{u.stopPropagation(),Jo(l)},c.append(h)}else c.append(document.createTextNode(l));a.replaceWith(c)}}function jo(){if(!Kt||_t||!he("#study").hidden)return;let i=Pn[re];if(et+1>=i.parts.length){Zl(1);return}$e.captureText(he("#title"));let e=vi;et++;let t=jn(re);_t={from:re,to:re,start:performance.now(),duration:2400,kind:"interpret",fromPose:e,toPose:t,showText:!0},he("#words").style.opacity=0,br(),he("#words").scrollTop=0}function Kl(){Kt&&(he("#study").hidden=!he("#study").hidden)}function Zl(i){!Kt||_t||Mi(Math.max(0,Math.min(It.length-1,re+i)))}function Ed(i){if(Sd=requestAnimationFrame(Ed),!$e)return;let e=i*.001,t=jn(re),n=0,s=0,r=re;if(_t){let o=_t;if(r=o.from,s=Yx((i-o.start)/o.duration),t=yd(o.fromPose,o.toPose,kt(s)),o.kind==="opening"||o.kind==="reverseOpening"){let a=o.kind==="opening"?s:1-s,c=kt(a/.46),l=kt((a-.46)/.54),h=jn(0),u=jn(1);t=yd(h,u,l),t.camera=[St.lerp(0,u.camera[0],l),St.lerp(9.3,u.camera[1],l),St.lerp(23.5-c*4.5,u.camera[2],l)],t.target=[St.lerp(0,u.target[0],l),St.lerp(1.2,u.target[1],l),St.lerp(0,u.target[2],l)];let d=23.1-c*5,f=2*Math.atan(23.1*Math.tan(St.degToRad(19))/d)*180/Math.PI;t.fov=St.lerp(f,38,l),t.actorAlpha=h.actorAlpha*(1-kt(a/.7))}if(o.from>=1&&o.from<=5&&re>=1&&re<=5){let a=Math.sin(s*Math.PI);t.camera[1]+=a*(re===3?2.2:1),t.target[0]+=a*.5,t.explode=Math.max(t.explode,re===3?a*.42:0)}if(!["opening","reverseOpening"].includes(o.kind)&&!(o.from>=1&&o.from<=5&&re>=1&&re<=5)){let a=new P(...t.target).sub(new P(...t.camera)).normalize(),c=Math.sin(s*Math.PI)*3.2;t.camera=t.camera.map((l,h)=>l+a.getComponent(h)*c),t.target=t.target.map((l,h)=>l+a.getComponent(h)*c*.35)}if(o.kind==="walk"&&(n=Math.sin(s*Math.PI),t.actor[0]+=Math.sin(s*Math.PI)*-.8,re>=7&&re<=10&&o.from>=7&&o.from<=10&&(t.memoryTurn+=Math.sin(s*Math.PI)*1.45)),(o.from===12&&re===13||o.from===13&&re===14)&&(t.pass=s>.1&&s<.94?s:0),o.from===5&&re===6){let a=Math.sin(s*Math.PI);t.instrument[2]+=a*5,t.instrumentScale+=a*.25,t.hall=a*.8,t.scrollReveal=.025+.975*kt((s-.45)/.55),t.scrollOpen=kt((s-.35)/.65)*.25}o.showText?$e.updateText(s):$e.clearText(),s>=1&&(_t=null,t=jn(re),Ad())}if(!_t){if(re===0){let o=Math.exp(-(i-Md)/600);he("#title").style.textShadow=o>.01?`0 0 ${o*12}px #b9965588`:""}else he("#title").style.textShadow="";he("#words").style.opacity=Kt?kt((i-Yo)/(re===0?900:650)):1,he("#body").querySelectorAll("p").forEach((o,a)=>{let c=kt((i-Yo-a*100)/450);o.style.opacity=c,o.style.transform=`translateY(${(1-c)*5}px)`}),t.butterfly[1]+=Math.sin(e*.4)*.055}if(vi=t,$e.apply(t,e,re,{walk:n,flight:_t?Math.max(1e-4,s):0,from:r,annotation:{...Pn[re],biography:re>=6&&re<=11,term:re===1&&et>0&&et<3?"":Pn[re].term,reveal:re===1&&et===0?Jn:void 0},phase:et}),!_t&&It[re].scene===5&&It[re].title==="\u5E84\u751F\u6653\u68A6\u8FF7\u8774\u8776"){let o=i-Yo,a=he("#title");o>1800&&!a.querySelector(".dream-word")&&(a.innerHTML='\u5E84\u751F<span class="dream-word">\u6653\u68A6</span>\u8FF7\u8774\u8776'),o>3800&&!a.querySelector(".lost-word")&&(a.innerHTML='\u5E84\u751F<span class="dream-word">\u6653\u68A6</span><span class="lost-word">\u8FF7</span>\u8774\u8776')}}var Yx=i=>Math.max(0,Math.min(1,i));he("#pluckAction").onclick=i=>{i.stopPropagation(),Is()};he("#structureAction").onclick=i=>{i.stopPropagation(),Ko(et===1||et===2?3:1)};he("#nextLayer").onclick=i=>{i.stopPropagation(),jo()};he("#openStudy").onclick=i=>{i.stopPropagation(),Kl()};he("#begin").onclick=async i=>{i.stopPropagation(),!(!$e||Kt)&&(Kt=!0,he("#beginLayer").hidden=!0,await Xx(),Mi(0,{replay:!0}))};he("#restart").onclick=i=>{i.stopPropagation(),Mi(0,{jump:!0})};he("#retry").onclick=()=>location.reload();he("#recover").onclick=()=>{$e?.restoreContext()};document.addEventListener("click",i=>{if(!(i.target.closest("button,a,input,aside")||window.getSelection()?.toString())){if(i.target===pn&&Mr){Mr=!1;return}if(!(!Kt||_t)){if(i.target===pn){let e=$e.hitString(i.clientX,i.clientY);if(e>=0&&re>=0&&re<=5){Is(e);return}let t=$e.hitWord(i.clientX,i.clientY);if(t){Jo(t);return}}jo()}}});document.addEventListener("keydown",i=>{if(!Kt)return;let e=i.key;i.target.closest("input")&&e!=="Escape"||i.target.closest("button")&&[" ","Enter"].includes(e)||([" ","Enter"].includes(e)?(i.preventDefault(),jo()):["ArrowRight","PageDown"].includes(e)?(i.preventDefault(),Zl(1)):["ArrowLeft","PageUp"].includes(e)?(i.preventDefault(),Zl(-1)):e.toLowerCase()==="r"?Mi(re,{replay:!0}):/^[1-6]$/.test(e)?Mi([0,1,6,12,13,17][+e-1],{jump:!0}):e.toLowerCase()==="f"?document.documentElement.requestFullscreen?.().catch(()=>{}):e.toLowerCase()==="m"?Td():e.toLowerCase()==="p"?Is():e.toLowerCase()==="e"&&re===1?Ko(et===1||et===2?3:1):e.toLowerCase()==="k"?Jo(Pn[re].term||Pn[re].poem):e.toLowerCase()==="j"?Kl():e.toLowerCase()==="h"?he("#notes").hidden=!he("#notes").hidden:e==="Escape"&&(he("#notes").hidden=!0,he("#study").hidden=!0,he("#gloss").hidden=!0,$e.focusWord("",performance.now()*.001)))});pn.style.touchAction="none";pn.addEventListener("pointerdown",i=>{if(!Kt||_t||re<0||re>5)return;let e=$e.hitString(i.clientX,i.clientY);e>=0?(bn={kind:"strum",last:e,x:i.clientX,y:i.clientY},Mr=!0,Is(e),pn.setPointerCapture(i.pointerId)):re===1&&$e.hitInstrument(i.clientX,i.clientY)&&(bn={kind:"structure",x:i.clientX,y:i.clientY},pn.setPointerCapture(i.pointerId))});pn.addEventListener("pointermove",i=>{if(!(!bn||_t))if(bn.kind==="strum"){let e=$e.hitString(i.clientX,i.clientY);e>=0&&e!==bn.last&&(bn.last=e,Is(e))}else re===1&&Math.abs(i.clientY-bn.y)>34&&(Mr=!0,Ko(i.clientY<bn.y?1:3),bn=null)});window.addEventListener("pointerup",()=>{bn=null});window.addEventListener("pointercancel",()=>{bn=null,Mr=!1});pn.addEventListener("webglcontextlost",i=>{i.preventDefault(),he("#error p").textContent="\u663E\u793A\u8FDE\u63A5\u5DF2\u4E2D\u65AD\u3002\u53EF\u6062\u590D\u753B\u9762\u6216\u91CD\u65B0\u8F7D\u5165\u5F53\u524D\u6F14\u793A\u3002",he("#error").hidden=!1});pn.addEventListener("webglcontextrestored",()=>{$e.restoreEnvironment(),he("#error").hidden=!0,Mi(re,{replay:!0})});pn.addEventListener("pointermove",i=>{!$e||_t||(pn.style.cursor=$e.hitWord(i.clientX,i.clientY)||re>=0&&re<=5&&$e.hitString(i.clientX,i.clientY)>=0?"pointer":"default")});window.addEventListener("resize",()=>$e?.resize());try{$e=await _d(pn,{low:kx,onProgress:(i,e)=>{he("#begin span").textContent="\u6B63\u5728\u5C55\u5377 "+Math.round(i/e*100)+"%"}}),await document.fonts.ready,he("#begin").disabled=!1,he("#begin").setAttribute("aria-busy","false"),window.dispatchEvent(new Event("jinse-ready")),he("#begin span").textContent="\u5F00\u59CB\u6F14\u793A",vi=jn(0),br(),$e.apply(vi,0,0,{annotation:{poem:"",term:""},phase:0}),Sd=requestAnimationFrame(Ed)}catch(i){he("#error p").textContent="\u672C\u5730\u7ED8\u753B\u6216\u6A21\u578B\u672A\u80FD\u8F7D\u5165\uFF1A"+i.message,he("#error").hidden=!1,he("#recover").hidden=!0,console.error(i)}window.jinseDemo={get layers(){return Pn[re].parts.length},get typedCount(){return Jn},get phase(){return et},setPhase:Ko,performPluck:Is,explainWord:Jo,get stringTargets(){return $e?.stringTargets()},get wordTargets(){return $e?.wordTargets()},nextLayer:jo,toggleStudy:Kl,get total(){return It.length},get cue(){return re},get busy(){return!!_t},go:i=>Mi(i,{jump:!0}),inspect:()=>({...$e?.inspect(),cue:re,busy:!!_t,flight:_t?.kind,progress:_t?(performance.now()-_t.start)/_t.duration:1,phase:et,typedCount:Jn}),exportActor:()=>$e.exportActor(),testContextLost:()=>$e.loseContext(),get renderInfo(){return $e?.renderer.info},get pose(){return vi}};
