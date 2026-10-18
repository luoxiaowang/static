(()=>{var ni=["\u77E5\u884C\u697C","\u542F\u667A\u697C","\u660E\u5FB7\u697C","\u535A\u96C5\u697C","\u6C42\u771F\u697C","\u81F4\u8FDC\u697C","\u5411\u9633\u697C","\u661F\u6CB3\u697C"].map((i,e)=>({name:i,x:99+e%2*56,z:-65+Math.floor(e/2)*19})),gs=ni.flatMap((i,e)=>Array.from({length:4},(t,n)=>Array.from({length:6},(s,r)=>({id:`${e+1}-${n+1}-${r+1}`,building:e,floor:n,room:r,x:i.x-20+r*8,y:n*3.6,z:i.z,name:`${i.name} \xB7 ${n+1}\u5C42 \xB7 ${n+1}0${r+1}\u6559\u5BA4`,students:30,teachers:1}))).flat()),Zh=Array.from({length:30},(i,e)=>({x:(e%5-2)*1.25,z:-1.9+Math.floor(e/5)*1.03}));function Vd(i,e,t){return gs.find(n=>n.building===i&&n.floor===e&&n.room===t)}var ol={x1:72,x2:190,z1:-74,z2:74},al=ni.flatMap((i,e)=>Array.from({length:3},(t,n)=>({building:e,x1:i.x+(n%2?27:25),x2:i.x+(n%2?28.6:26.6),z1:i.z-5,z2:i.z+5,base:n*3.6,height:3.6,reverse:n%2===1}))),yo=ni.flatMap((i,e)=>Array.from({length:4},(t,n)=>[{x1:i.x-24,x2:i.x+24,z1:i.z-5.2,z2:i.z+5.2},{x1:i.x-24,x2:i.x+31,z1:i.z+5,z2:i.z+8},{x1:i.x+24,x2:i.x+31,z1:i.z-7,z2:i.z-5},{x1:i.x+29,x2:i.x+31,z1:i.z-5,z2:i.z+5.2}].map(s=>({...s,building:e,y:n*3.6}))).flat()),wr=[];function hi(i,e,t,n,s,r,o,a){wr.push({building:i,key:e,x:t,y:n,z:s,w:r,h:o,d:a,x1:t-r/2,x2:t+r/2,z1:s-a/2,z2:s+a/2})}for(let[i,e]of ni.entries())for(let t=0;t<4;t++){let n=t*3.6;hi(i,"wall",e.x,n+1.7,e.z-5.1,48,3.4,.2);for(let s=0;s<=6;s++)hi(i,"wall",e.x-24+s*8,n+1.7,e.z,.18,3.4,10.2);for(let s=0;s<6;s++){let r=e.x-20+s*8;hi(i,"wood",r-.85,n+.45,e.z+5.1,6.3,.9,.18),hi(i,"blue",r-.85,n+1.65,e.z+5.1,6.3,1.5,.12),hi(i,"wall",r+3.95,n+1.7,e.z+5.1,.1,3.4,.18),hi(i,"wall",r+3.1,n+2.95,e.z+5.1,1.6,.9,.18)}t>0&&(hi(i,"dark",e.x+3.5,n+.55,e.z+8,55,1.1,.1),hi(i,"dark",e.x-24,n+.55,e.z+6.6,.1,1.1,2.8),hi(i,"dark",e.x+31,n+.55,e.z+.5,.1,1.1,15),hi(i,"dark",e.x+27.5,n+.55,e.z-7,7,1.1,.1),hi(i,"dark",e.x+24,n+.55,e.z-6,.1,1.1,2))}function Ri(i,e){return i>=ol.x1&&i<=ol.x2&&e>=ol.z1&&e<=ol.z2}function Gd(i,e,t=0){let n=al.filter(s=>i>=s.x1&&i<=s.x2&&e>=s.z1&&e<=s.z2);return n.length?n.map(r=>r.base+(r.reverse?e-r.z1:r.z2-e)/(r.z2-r.z1)*r.height).find(r=>Math.abs(r-t)<.25)??NaN:Math.abs(t)<.12?0:yo.find(s=>Math.abs(s.y-t)<.12&&i>=s.x1&&i<=s.x2&&e>=s.z1&&e<=s.z2)?.y??NaN}function Mo(i){return gs.find(e=>Math.abs(i.y-e.y)<.15&&Math.abs(i.x-e.x)<3.85&&i.z>e.z-4.95&&i.z<e.z+5.15)}function Hd(i,e,t){if(t<2.6&&[[75,25,.4],[75,31,.4],[99,38.8,.22],[99,45.2,.22],[157,38.8,.22],[157,45.2,.22]].some(([r,o,a])=>Math.abs(i-r)<a&&Math.abs(e-o)<a))return!0;for(let r of wr)if(!(Math.abs(i-ni[r.building].x)>33||Math.abs(e-ni[r.building].z)>10)&&t+1.68>r.y-r.h/2+.08&&t<r.y+r.h/2-.12&&i>r.x1-.13&&i<r.x2+.13&&e>r.z1-.13&&e<r.z2+.13)return!0;let s=Mo({x:i,z:e,y:t});if(s){let r=i-s.x,o=e-s.z;if(Math.abs(r)<1.05&&Math.abs(o+3.7)<.5||Math.abs(r+2.4)<.4&&Math.abs(o+3.7)<.35)return!0;for(let a of Zh)if(Math.abs(r-a.x)<.61&&o>a.z-.88&&o<a.z+.42)return!0}for(let r of al)if(e>r.z1+.02&&e<r.z2-.02){let o=r.base+(r.reverse?e-r.z1:r.z2-e)/10*3.6;if(Math.abs(t-o)<1.2&&(Math.abs(i-r.x1)<.13||Math.abs(i-r.x2)<.13))return!0}return!1}var Np=0,Gu=1,Up=2;var pa=1,_c=2,to=3,Jn=0,Mn=1,An=2,$t=0,Zs=1,ma=2,Hu=3,Wu=4,vc=5;var $n=100,Fp=101,Op=102,Bp=103,zp=104,lr=200,kp=201,Vp=202,Gp=203,Ol=204,Bl=205,ga=206,Hp=207,xa=208,Wp=209,Xp=210,qp=211,Yp=212,Zp=213,Kp=214,zl=0,kl=1,Vl=2,Ks=3,Gl=4,Hl=5,Wl=6,Xl=7,Xu=0,Jp=1,$p=2,vi=0,_a=1,va=2,ya=3,cr=4,Ma=5,Sa=6,ba=7,Tu="attached",jp="detached",qu=300,Rs=301,hr=302,no=303,yc=304,Ta=306,tn=1e3,Vn=1001,Vr=1002,zt=1003,Mc=1004;var ur=1005;var yt=1006,io=1007;var Cn=1008;var Rn=1009,Yu=1010,Zu=1011,so=1012,Sc=1013,yi=1014,Pn=1015,Ot=1016,bc=1017,Tc=1018,Ps=1020,Ku=35902,Ju=35899,$u=1021,ju=1022,Sn=1023,Li=1026,zi=1027,wc=1028,Ec=1029,Is=1030,Ac=1031;var Cc=1033,wa=33776,Ea=33777,Aa=33778,Ca=33779,Rc=35840,Pc=35841,Ic=35842,Lc=35843,Dc=36196,Nc=37492,Uc=37496,Fc=37488,Oc=37489,Ra=37490,Bc=37491,zc=37808,kc=37809,Vc=37810,Gc=37811,Hc=37812,Wc=37813,Xc=37814,qc=37815,Yc=37816,Zc=37817,Kc=37818,Jc=37819,$c=37820,jc=37821,Qc=36492,eh=36494,th=36495,nh=36283,ih=36284,Pa=36285,sh=36286;var Js=2300,$s=2301,Fl=2302,wu=2303,Eu=2400,Au=2401,Cu=2402,Qp=2500;var Qu=0,Ia=1,ro=2,em=3200;var La=0,tm=1,hs="",dt="srgb",_n="srgb-linear",Uo="linear",xt="srgb";var Xs=7680;var Ru=519,nm=512,im=513,sm=514,rh=515,rm=516,om=517,oh=518,am=519,ql=35044;var ef="300 es",mi=2e3,Gr=2001;function Ig(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lm(){let i=Hr("canvas");return i.style.display="block",i}var Wd={},Wr=null;function Fo(...i){let e="THREE."+i.shift();Wr?Wr("log",e,...i):console.log(e,...i)}function cm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=cm(i);let e="THREE."+i.shift();if(Wr)Wr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=cm(i);let e="THREE."+i.shift();if(Wr)Wr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ys(...i){let e=i.join(" ");e in Wd||(Wd[e]=!0,ze(...i))}function hm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var um={[zl]:kl,[Vl]:Wl,[Gl]:Xl,[Ks]:Hl,[kl]:zl,[Wl]:Vl,[Xl]:Gl,[Hl]:Ks},Di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=1234567,Io=Math.PI/180,js=180/Math.PI;function ri(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function tf(i,e){return(i%e+e)%e}function Dg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ng(i,e,t){return i!==e?(t-i)/(e-i):0}function Lo(i,e,t){return(1-t)*i+t*e}function Ug(i,e,t,n){return Lo(i,e,1-Math.exp(-t*n))}function Fg(i,e=1){return e-Math.abs(tf(i,e*2)-e)}function Og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function kg(i,e){return i+Math.random()*(e-i)}function Vg(i){return i*(.5-Math.random())}function Gg(i){i!==void 0&&(Xd=i);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hg(i){return i*Io}function Wg(i){return i*js}function Xg(i){return(i&i-1)===0&&i!==0}function qg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nn={DEG2RAD:Io,RAD2DEG:js,generateUUID:ri,clamp:at,euclideanModulo:tf,mapLinear:Dg,inverseLerp:Ng,lerp:Lo,damp:Ug,pingpong:Fg,smoothstep:Og,smootherstep:Bg,randInt:zg,randFloat:kg,randFloatSpread:Vg,seededRandom:Gg,degToRad:Hg,radToDeg:Wg,isPowerOfTwo:Xg,ceilPowerOfTwo:qg,floorPowerOfTwo:Yg,setQuaternionFromProperEuler:Zg,normalize:bt,denormalize:pi},lf=class lf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lf.prototype.isVector2=!0;var ce=lf,pn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cf=class cf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cf.prototype.isVector3=!0;var U=cf,Kh=new U,qd=new pn,hf=class hf{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],S=s[4],M=s[7],w=s[2],E=s[5],v=s[8];return r[0]=o*x+a*y+c*w,r[3]=o*m+a*S+c*E,r[6]=o*p+a*M+c*v,r[1]=l*x+h*y+u*w,r[4]=l*m+h*S+u*E,r[7]=l*p+h*M+u*v,r[2]=d*x+f*y+g*w,r[5]=d*m+f*S+g*E,r[8]=d*p+f*M+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jh.makeScale(e,t)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jh.makeRotation(-e)),this}translate(e,t){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hf.prototype.isMatrix3=!0;var st=hf,Jh=new st,Yd=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kg(){let i={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=kr(s.r),s.g=kr(s.g),s.b=kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?Uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_n]:{primaries:e,whitePoint:n,transfer:Uo,toXYZ:Yd,fromXYZ:Zd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Yd,fromXYZ:Zd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}var ot=Kg();function ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Er,Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Er===void 0&&(Er=Hr("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jg=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($h(s[o].image)):r.push($h(s[o]))}else r=$h(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $h(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var $g=0,jh=new U,an=class i extends Di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Vn,s=Vn,r=yt,o=Cn,a=Sn,c=Rn,l=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=ri(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tn:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tn:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=qu;an.DEFAULT_ANISOTROPY=1;var uf=class uf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,M=(f+1)/2,w=(p+1)/2,E=(h+d)/4,v=(u+x)/4,_=(g+m)/4;return S>M&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=v/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=v/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uf.prototype.isVector4=!0;var _t=uf,Zl=class extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new an(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends Zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xc=class xc{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Qg)}lookAt(e,t,n){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),xs.crossVectors(n,Zn),xs.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),xs.crossVectors(n,Zn)),xs.normalize(),ll.crossVectors(Zn,xs),s[0]=xs.x,s[4]=ll.x,s[8]=Zn.x,s[1]=xs.y,s[5]=ll.y,s[9]=Zn.y,s[2]=xs.z,s[6]=ll.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],S=n[7],M=n[11],w=n[15],E=s[0],v=s[4],_=s[8],T=s[12],R=s[1],N=s[5],F=s[9],k=s[13],A=s[2],C=s[6],I=s[10],O=s[14],V=s[3],P=s[7],z=s[11],X=s[15];return r[0]=o*E+a*R+c*A+l*V,r[4]=o*v+a*N+c*C+l*P,r[8]=o*_+a*F+c*I+l*z,r[12]=o*T+a*k+c*O+l*X,r[1]=h*E+u*R+d*A+f*V,r[5]=h*v+u*N+d*C+f*P,r[9]=h*_+u*F+d*I+f*z,r[13]=h*T+u*k+d*O+f*X,r[2]=g*E+x*R+m*A+p*V,r[6]=g*v+x*N+m*C+p*P,r[10]=g*_+x*F+m*I+p*z,r[14]=g*T+x*k+m*O+p*X,r[3]=y*E+S*R+M*A+w*V,r[7]=y*v+S*N+M*C+w*P,r[11]=y*_+S*F+M*I+w*z,r[15]=y*T+S*k+M*O+w*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=c*f-l*d,S=a*f-l*u,M=a*d-c*u,w=o*f-l*h,E=o*d-c*h,v=o*u-a*h;return t*(x*y-m*S+p*M)-n*(g*y-m*w+p*E)+s*(g*S-x*w+p*v)-r*(g*M-x*E+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*a-n*o,S=t*c-s*o,M=t*l-r*o,w=n*c-s*a,E=n*l-r*a,v=s*l-r*c,_=h*x-u*g,T=h*m-d*g,R=h*p-f*g,N=u*m-d*x,F=u*p-f*x,k=d*p-f*m,A=y*k-S*F+M*N+w*R-E*T+v*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=(a*k-c*F+l*N)*C,e[1]=(s*F-n*k-r*N)*C,e[2]=(x*v-m*E+p*w)*C,e[3]=(d*E-u*v-f*w)*C,e[4]=(c*R-o*k-l*T)*C,e[5]=(t*k-s*R+r*T)*C,e[6]=(m*M-g*v-p*S)*C,e[7]=(h*v-d*M+f*S)*C,e[8]=(o*F-a*R+l*_)*C,e[9]=(n*R-t*F-r*_)*C,e[10]=(g*E-x*M+p*y)*C,e[11]=(u*M-h*E-f*y)*C,e[12]=(a*T-o*N-c*_)*C,e[13]=(t*N-n*T+s*_)*C,e[14]=(x*S-g*w-m*y)*C,e[15]=(h*w-u*S+d*y)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,S=c*h,M=c*u,w=n.x,E=n.y,v=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+M)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(d+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+S)*v,s[9]=(m-y)*v,s[10]=(1-(d+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ar.set(s[0],s[1],s[2]).length(),a=Ar.set(s[4],s[5],s[6]).length(),c=Ar.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ui.copy(this);let l=1/o,h=1/a,u=1/c;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=mi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===mi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Gr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=mi,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===mi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Gr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xc.prototype.isMatrix4=!0;var Ge=xc,Ar=new U,ui=new Ge,jg=new U(0,0,0),Qg=new U(1,1,1),xs=new U,ll=new U,Zn=new U,Kd=new Ge,Jd=new pn,ns=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ex=0,$d=new U,Cr=new pn,Zi=new Ge,cl=new U,So=new U,tx=new U,nx=new pn,jd=new U(1,0,0),Qd=new U(0,1,0),ep=new U(0,0,1),tp={type:"added"},ix={type:"removed"},Rr={type:"childadded",child:null},Qh={type:"childremoved",child:null},Nt=class i extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new ns,n=new pn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new st}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ep,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cl.copy(e):cl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(So,cl,this.up):Zi.lookAt(cl,So,this.up),this.quaternion.setFromRotationMatrix(Zi),s&&(Zi.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(Zi),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tp),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ix),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tp),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new U(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sx={type:"move"},Yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},hl={h:0,s:0,l:0};function eu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=tf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=eu(o,r,e+1/3),this.g=eu(o,r,e),this.b=eu(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=fm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ot.workingToColorSpace(wn.copy(this),e),Math.round(at(wn.r*255,0,255))*65536+Math.round(at(wn.g*255,0,255))*256+Math.round(at(wn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=dt){ot.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(hl);let n=Lo(_s.h,hl.h,t),s=Lo(_s.s,hl.s,t),r=Lo(_s.l,hl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Ne;Ne.NAMES=fm;var Bo=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ne(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qs=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new U,Ki=new U,tu=new U,Ji=new U,Pr=new U,Ir=new U,np=new U,nu=new U,iu=new U,su=new U,ru=new _t,ou=new _t,au=new _t,bs=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fi.subVectors(e,t),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fi.subVectors(s,t),Ki.subVectors(n,t),tu.subVectors(e,t);let o=fi.dot(fi),a=fi.dot(Ki),c=fi.dot(tu),l=Ki.dot(Ki),h=Ki.dot(tu),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ji.x),c.addScaledVector(o,Ji.y),c.addScaledVector(a,Ji.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ru.setScalar(0),ou.setScalar(0),au.setScalar(0),ru.fromBufferAttribute(e,t),ou.fromBufferAttribute(e,n),au.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ru,r.x),o.addScaledVector(ou,r.y),o.addScaledVector(au,r.z),o}static isFrontFacing(e,t,n,s){return fi.subVectors(n,t),Ki.subVectors(e,t),fi.cross(Ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),fi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Pr.subVectors(s,n),Ir.subVectors(r,n),nu.subVectors(e,n);let c=Pr.dot(nu),l=Ir.dot(nu);if(c<=0&&l<=0)return t.copy(n);iu.subVectors(e,s);let h=Pr.dot(iu),u=Ir.dot(iu);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Pr,o);su.subVectors(e,r);let f=Pr.dot(su),g=Ir.dot(su);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ir,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return np.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(np,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),fl.subVectors(this.max,bo),Lr.subVectors(e.a,bo),Dr.subVectors(e.b,bo),Nr.subVectors(e.c,bo),vs.subVectors(Dr,Lr),ys.subVectors(Nr,Dr),Vs.subVectors(Lr,Nr);let t=[0,-vs.z,vs.y,0,-ys.z,ys.y,0,-Vs.z,Vs.y,vs.z,0,-vs.x,ys.z,0,-ys.x,Vs.z,0,-Vs.x,-vs.y,vs.x,0,-ys.y,ys.x,0,-Vs.y,Vs.x,0];return!lu(t,Lr,Dr,Nr,fl)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,Lr,Dr,Nr,fl))?!1:(dl.crossVectors(vs,ys),t=[dl.x,dl.y,dl.z],lu(t,Lr,Dr,Nr,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},$i=[new U,new U,new U,new U,new U,new U,new U,new U],di=new U,ul=new Jt,Lr=new U,Dr=new U,Nr=new U,vs=new U,ys=new U,Vs=new U,bo=new U,fl=new U,dl=new U,Gs=new U;function lu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gs.fromArray(i,r);let a=s.x*Math.abs(Gs.x)+s.y*Math.abs(Gs.y)+s.z*Math.abs(Gs.z),c=e.dot(Gs),l=t.dot(Gs),h=n.dot(Gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var es=rx();function rx(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ox(i){Math.abs(i)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),es.floatView[0]=i;let e=es.uint32View[0],t=e>>23&511;return es.baseTable[t]+((e&8388607)>>es.shiftTable[t])}function ax(i){let e=i>>10;return es.uint32View[0]=es.mantissaTable[es.offsetTable[e]+(i&1023)]+es.exponentTable[e],es.floatView[0]}var Ts=class{static toHalfFloat(e){return ox(e)}static fromHalfFloat(e){return ax(e)}},en=new U,pl=new ce,lx=0,It=class extends Di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ql&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var zo=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ko=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},cx=new Jt,To=new U,cu=new U,Gn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);let t=To.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(To,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(cu)),this.expandByPoint(To.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hx=0,ii=new Ge,hu=new Nt,Ur=new U,Kn=new Jt,wo=new Jt,dn=new U,vt=class i extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?ko:zo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wo.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Kn.min,wo.min),Kn.expandByPoint(dn),dn.addVectors(Kn.max,wo.max),Kn.expandByPoint(dn)):(Kn.expandByPoint(wo.min),Kn.expandByPoint(wo.max))}Kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)dn.fromBufferAttribute(a,l),c&&(Ur.fromBufferAttribute(e,l),dn.add(Ur)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new It(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new U,c[_]=new U;let l=new U,h=new U,u=new U,d=new ce,f=new ce,g=new ce,x=new U,m=new U;function p(_,T,R){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[_].add(x),a[T].add(x),a[R].add(x),c[_].add(m),c[T].add(m),c[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let R=y[_],N=R.start,F=R.count;for(let k=N,A=N+F;k<A;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new U,M=new U,w=new U,E=new U;function v(_){w.fromBufferAttribute(s,_),E.copy(w);let T=a[_];S.copy(T),S.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(E,T);let N=M.dot(c[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,N)}for(let _=0,T=y.length;_<T;++_){let R=y[_],N=R.start,F=R.count;for(let k=N,A=N+F;k<A;k+=3)v(e.getX(k+0)),v(e.getX(k+1)),v(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new It(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Un=new U,Kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix4(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.applyNormalMatrix(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Un.fromBufferAttribute(this,t),Un.transformDirection(e),this.setXYZ(t,Un.x,Un.y,Un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ux=0,Fn=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Zs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ji=new U,uu=new U,ml=new U,Ms=new U,fu=new U,gl=new U,du=new U,Ni=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uu.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),Ms.copy(this.origin).sub(uu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ml),a=Ms.dot(this.direction),c=-Ms.dot(ml),l=Ms.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uu).addScaledVector(ml,d),f}intersectSphere(e,t){ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),s=ji.dot(ji)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,s,r){fu.subVectors(t,e),gl.subVectors(n,e),du.crossVectors(fu,gl);let o=this.direction.dot(du),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ms.subVectors(this.origin,e);let c=a*this.direction.dot(gl.crossVectors(Ms,gl));if(c<0)return null;let l=a*this.direction.dot(fu.cross(Ms));if(l<0||c+l>o)return null;let h=-a*Ms.dot(du);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ip=new Ge,Hs=new Ni,xl=new Gn,sp=new U,_l=new U,vl=new U,yl=new U,pu=new U,Ml=new U,rp=new U,Sl=new U,Ie=class extends Nt{constructor(e=new vt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ml.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(pu.fromBufferAttribute(u,e),o?Ml.addScaledVector(pu,h):Ml.addScaledVector(pu.sub(t),h))}t.add(Ml)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(xl.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(xl,sp)===null||Hs.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(ip.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(ip),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=S;M<w;M+=3){let E=a.getX(M),v=a.getX(M+1),_=a.getX(M+2);s=bl(this,p,e,n,l,h,u,E,v,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=bl(this,o,e,n,l,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,w=S;M<w;M+=3){let E=M,v=M+1,_=M+2;s=bl(this,p,e,n,l,h,u,E,v,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,S=m+1,M=m+2;s=bl(this,o,e,n,l,h,u,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function fx(i,e,t,n,s,r,o,a){let c;if(e.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Jn,a),c===null)return null;Sl.copy(a),Sl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Sl);return l<t.near||l>t.far?null:{distance:l,point:Sl.clone(),object:i}}function bl(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,_l),i.getVertexPosition(c,vl),i.getVertexPosition(l,yl);let h=fx(i,e,t,n,_l,vl,yl,rp);if(h){let u=new U;bs.getBarycoord(rp,_l,vl,yl,u),s&&(h.uv=bs.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=bs.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=bs.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new U,materialIndex:0};bs.getNormal(_l,vl,yl,d.normal),h.face=d,h.barycoord=u}return h}var Eo=new _t,op=new _t,ap=new _t,dx=new _t,lp=new Ge,Tl=new U,mu=new Gn,cp=new Ge,gu=new Ni,Vo=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingBox.expandByPoint(Tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingSphere.expandByPoint(Tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mu.copy(this.boundingSphere),mu.applyMatrix4(s),e.ray.intersectsSphere(mu)!==!1&&(cp.copy(s).invert(),gu.copy(e.ray).applyMatrix4(cp),!(this.boundingBox!==null&&gu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;op.fromBufferAttribute(s.attributes.skinIndex,e),ap.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Eo.copy(t),t.set(0,0,0,0)):(Eo.set(...t,1),t.set(0,0,0)),Eo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=ap.getComponent(r);if(o!==0){let a=op.getComponent(r);lp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dx.copy(Eo).applyMatrix4(lp),o)}}return t.isVector4&&(t.w=Eo.w),t.applyMatrix4(this.bindMatrixInverse)}},Jr=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vn=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,h=zt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hp=new Ge,px=new Ge,Go=class i{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:px;hp.multiplyMatrices(a,t[r]),hp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vn(t,e,e,Sn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(ze("Skeleton: No bone found with UUID:",r),o=new Jr),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ws=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new Ge,up=new Ge,wl=[],fp=new Jt,mx=new Ge,Ao=new Ie,Co=new Gn,oi=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),fp.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(fp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Co.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(Co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(n),e.ray.intersectsSphere(Co)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),up.multiplyMatrices(n,Fr),Ao.matrixWorld=up,Ao.raycast(e,wl);for(let o=0,a=wl.length;o<a;o++){let c=wl[o];c.instanceId=r,c.object=this,t.push(c)}wl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vn(new Float32Array(s*this.count),s,this.count,wc,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xu=new U,gx=new U,xx=new st,si=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xu.subVectors(n,t).cross(gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(xu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xx.getNormalMatrix(e),s=this.coplanarPoint(xu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ws=new Gn,_x=new ce(.5,.5),El=new U,Es=class{constructor(e=new si,t=new si,n=new si,s=new si,r=new si,o=new si){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],S=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-g,w-y).normalize(),s[1].setComponents(l+o,f+h,p+g,w+y).normalize(),s[2].setComponents(l+a,f+u,p+x,w+S).normalize(),s[3].setComponents(l-a,f-u,p-x,w-S).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,p-m,w-M).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-M).normalize(),t===mi)s[5].setComponents(l+c,f+d,p+m,w+M).normalize();else if(t===Gr)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);let t=_x.distanceTo(e.center);return Ws.radius=.7071067811865476+t,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(El.x=s.normal.x>0?e.max.x:e.min.x,El.y=s.normal.y>0?e.max.y:e.min.y,El.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends Fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jl=new U,$l=new U,dp=new Ge,Ro=new Ni,Al=new Gn,_u=new U,pp=new U,is=class extends Nt{constructor(e=new vt,t=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jl.fromBufferAttribute(t,s-1),$l.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jl.distanceTo($l);e.setAttribute("lineDistance",new lt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(s),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;dp.copy(s).invert(),Ro.copy(e.ray).applyMatrix4(dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),S=Cl(this,e,Ro,c,p,y,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Cl(this,e,Ro,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=Cl(this,e,Ro,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Cl(this,e,Ro,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Jl.fromBufferAttribute(a,s),$l.fromBufferAttribute(a,r),t.distanceSqToSegment(Jl,$l,_u,pp)>n)return;_u.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(_u);if(!(l<e.near||l>e.far))return{distance:l,point:pp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var mp=new U,gp=new U,er=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)mp.fromBufferAttribute(t,s),gp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mp.distanceTo(gp);e.setAttribute("lineDistance",new lt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ho=class extends is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},As=class extends Fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xp=new Ge,Pu=new Ni,Rl=new Gn,Pl=new U,tr=class extends Nt{constructor(e=new vt,t=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(s),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;xp.copy(s).invert(),Pu.copy(e.ray).applyMatrix4(xp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Pl.fromBufferAttribute(u,m),_p(Pl,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Pl.fromBufferAttribute(u,g),_p(Pl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _p(i,e,t,n,s,r,o){let a=Pu.distanceSqToPoint(i);if(a<t){let c=new U;Pu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wo=class extends an{constructor(e=[],t=Rs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yn=class extends an{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends an{constructor(e,t,n=yi,s,r,o,a=zt,c=zt,l,h=Li,u=1){if(h!==Li&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jl=class extends gi{constructor(e,t=yi,n=Rs,s,r,o=zt,a=zt,c,l=Li){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xo=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(x,m,p,y,S,M,w,E,v,_,T){let R=M/v,N=w/_,F=M/2,k=w/2,A=E/2,C=v+1,I=_+1,O=0,V=0,P=new U;for(let z=0;z<I;z++){let X=z*N-k;for(let Y=0;Y<C;Y++){let re=Y*R-F;P[x]=re*y,P[m]=X*S,P[p]=A,l.push(P.x,P.y,P.z),P[x]=0,P[m]=0,P[p]=E>0?1:-1,h.push(P.x,P.y,P.z),u.push(Y/v),u.push(1-z/_),O+=1}}for(let z=0;z<_;z++)for(let X=0;X<v;X++){let Y=d+X+C*z,re=d+X+C*(z+1),_e=d+(X+1)+C*(z+1),ye=d+(X+1)+C*z;c.push(Y,re,ye),c.push(re,_e,ye),V+=6}a.addGroup(f,V,T),f+=V,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},qo=class i extends vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,x=s+1,m=new U,p=new U;for(let y=0;y<=g;y++){let S=0,M=0,w=0,E=0;if(y<=n){let T=y/n,R=T*Math.PI/2;M=-h-e*Math.cos(R),w=e*Math.sin(R),E=-e*Math.cos(R),S=T*u}else if(y<=n+r){let T=(y-n)/r;M=-h+T*t,w=e,E=0,S=u+T*d}else{let T=(y-n-r)/n,R=T*Math.PI/2;M=h+e*Math.sin(R),w=e*Math.cos(R),E=e*Math.sin(R),S=u+d+T*u}let v=Math.max(0,Math.min(1,S/f)),_=0;y===0?_=.5/s:y===g&&(_=-.5/s);for(let T=0;T<=s;T++){let R=T/s,N=R*Math.PI*2,F=Math.sin(N),k=Math.cos(N);p.x=-w*k,p.y=M,p.z=w*F,a.push(p.x,p.y,p.z),m.set(-w*k,E,w*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+_,v)}if(y>0){let T=(y-1)*x;for(let R=0;R<s;R++){let N=T+R,F=T+R+1,k=y*x+R,A=y*x+R+1;o.push(N,F,k),o.push(F,A,k)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Yo=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new U,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new U,w=new U,E=0,v=(t-e)/n;for(let _=0;_<=r;_++){let T=[],R=_/r,N=R*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,A=k*c+a,C=Math.sin(A),I=Math.cos(A);w.x=N*C,w.y=-R*n+m,w.z=N*I,u.push(w.x,w.y,w.z),M.set(C,v,I).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-R),T.push(g++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let R=x[T][_],N=x[T+1][_],F=x[T+1][_+1],k=x[T][_+1];(e>0||T!==0)&&(h.push(R,N,k),E+=3),(t>0||T!==r-1)&&(h.push(N,F,k),E+=3)}l.addGroup(p,E,0),p+=E}function S(M){let w=g,E=new ce,v=new U,_=0,T=M===!0?e:t,R=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let A=F/s*c+a,C=Math.cos(A),I=Math.sin(A);v.x=T*I,v.y=m*R,v.z=T*C,u.push(v.x,v.y,v.z),d.push(0,R,0),E.x=C*.5+.5,E.y=I*.5*R+.5,f.push(E.x,E.y),g++}for(let F=0;F<s;F++){let k=w+F,A=N+F;M===!0?h.push(A,A+1,k):h.push(A+1,A,k),_+=3}l.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xi=class i extends En{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ql=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new U,M=new U,w=new U;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],M),f(t[E+2],w),c(S,M,w,y)}function c(y,S,M,w){let E=w+1,v=[];for(let _=0;_<=E;_++){v[_]=[];let T=y.clone().lerp(M,_/E),R=S.clone().lerp(M,_/E),N=E-_;for(let F=0;F<=N;F++)F===0&&_===E?v[_][F]=T:v[_][F]=T.clone().lerp(R,F/N)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){let R=Math.floor(T/2);T%2===0?(d(v[_][R+1]),d(v[_+1][R]),d(v[_][R])):(d(v[_][R+1]),d(v[_+1][R+1]),d(v[_+1][R]))}}function l(y){let S=new U;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let y=new U;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let M=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(M,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let S=o[y+0],M=o[y+2],w=o[y+4],E=Math.max(S,M,w),v=Math.min(S,M,w);E>.9&&v<.1&&(S<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,S){let M=y*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){let y=new U,S=new U,M=new U,w=new U,E=new ce,v=new ce,_=new ce;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),E.set(o[R+0],o[R+1]),v.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),w.copy(y).add(S).add(M).divideScalar(3);let N=m(w);x(E,R+0,y,N),x(v,R+2,S,N),x(_,R+4,M,N)}}function x(y,S,M,w){w<0&&y.x===1&&(o[S]=y.x-1),M.x===0&&M.z===0&&(o[S]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,s=[],r=[],o=[],a=new U,c=new Ge;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ec=class extends $r{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nf(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var vp=new U,yp=new U,vu=new nf,yu=new nf,Mu=new nf,tc=class extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new U){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(yp.subVectors(s[0],s[1]).add(s[0]),l=yp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vp),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),vu.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),yu.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Mu.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),yu.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Mu.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(vu.calc(c),yu.calc(c),Mu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new U().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function vx(i,e){let t=1-i;return t*t*e}function yx(i,e){return 2*(1-i)*i*e}function Mx(i,e){return i*i*e}function Do(i,e,t,n){return vx(i,e)+yx(i,t)+Mx(i,n)}function Sx(i,e){let t=1-i;return t*t*t*e}function bx(i,e){let t=1-i;return 3*t*t*i*e}function Tx(i,e){return 3*(1-i)*i*i*e}function wx(i,e){return i*i*i*e}function No(i,e,t,n,s){return Sx(i,e)+bx(i,t)+Tx(i,n)+wx(i,s)}var Zo=class extends jn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends jn{constructor(e=new U,t=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(No(e,s.x,r.x,o.x,a.x),No(e,s.y,r.y,o.y,a.y),No(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ko=class extends jn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends jn{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jo=class extends jn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Do(e,s.x,r.x,o.x),Do(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sc=class extends jn{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Do(e,s.x,r.x,o.x),Do(e,s.y,r.y,o.y),Do(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mp(a,c.x,l.x,h.x,u.x),Mp(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Iu=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:tc,CubicBezierCurve:Zo,CubicBezierCurve3:nc,EllipseCurve:$r,LineCurve:Ko,LineCurve3:ic,QuadraticBezierCurve:Jo,QuadraticBezierCurve3:sc,SplineCurve:$o}),rc=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Iu[s.type]().fromJSON(s))}return this}},jo=class extends rc{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ko(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Jo(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Zo(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $o(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new $r(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},jr=class extends jo{constructor(e){super(e),this.uuid=ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new jo().fromJSON(s))}return this}};function Ex(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=dm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Ix(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Qo(r,o,t,a,c,l,0),o}function dm(i,e,t,n,s){let r;if(s===Gx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Sp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Sp(o/n|0,i[o],i[o+1],r);return r&&Qr(r,r.next)&&(ta(r),r=r.next),r}function nr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Qr(t,t.next)||Ht(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Fx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Cx(i,n,s,r):Ax(i)){e.push(c.i,i.i,l.i),ta(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Rx(nr(i),e),Qo(i,e,t,n,s,r,2)):o===2&&Px(i,e,t,n,s,r):Qo(nr(i),e,t,n,s,r,1);break}}}function Ax(i){let e=i.prev,t=i,n=i.next;if(Ht(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Po(s,a,r,c,o,l,g.x,g.y)&&Ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Cx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ht(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),p=Lu(f,g,e,t,n),y=Lu(x,m,e,t,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=p&&M&&M.z<=y;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Po(a,h,c,u,l,d,S.x,S.y)&&Ht(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Po(a,h,c,u,l,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Po(a,h,c,u,l,d,S.x,S.y)&&Ht(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Po(a,h,c,u,l,d,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Rx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Qr(n,s)&&mm(n,t,t.next,s)&&ea(n,s)&&ea(s,n)&&(e.push(n.i,t.i,s.i),ta(t),ta(t.next),t=i=s),t=t.next}while(t!==i);return nr(t)}function Px(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zx(o,a)){let c=gm(o,a);o=nr(o,o.next),c=nr(c,c.next),Qo(o,e,t,n,s,r,0),Qo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ix(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=dm(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Bx(l))}s.sort(Lx);for(let r=0;r<s.length;r++)t=Dx(s[r],t);return t}function Lx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Dx(i,e){let t=Nx(i,e);if(!t)return e;let n=gm(t,i);return nr(n,n.next),nr(t,t.next)}function Nx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Qr(i,t))return t;do{if(Qr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&pm(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ea(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ux(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ux(i,e){return Ht(i.prev,i,e.prev)<0&&Ht(e.next,i,i.next)<0}function Fx(i,e,t,n){let s=i;do s.z===0&&(s.z=Lu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ox(s)}function Ox(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Lu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Po(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&pm(i,e,t,n,s,r,o,a)}function zx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!kx(i,e)&&(ea(i,e)&&ea(e,i)&&Vx(i,e)&&(Ht(i.prev,i,e.prev)||Ht(i,e.prev,e))||Qr(i,e)&&Ht(i.prev,i,i.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Qr(i,e){return i.x===e.x&&i.y===e.y}function mm(i,e,t,n){let s=Ll(Ht(i,e,t)),r=Ll(Ht(i,e,n)),o=Ll(Ht(t,n,i)),a=Ll(Ht(t,n,e));return!!(s!==r&&o!==a||s===0&&Il(i,t,e)||r===0&&Il(i,n,e)||o===0&&Il(t,i,n)||a===0&&Il(t,e,n))}function Il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ll(i){return i>0?1:i<0?-1:0}function kx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ea(i,e){return Ht(i.prev,i,i.next)<0?Ht(i,e,i.next)>=0&&Ht(i,i.prev,e)>=0:Ht(i,e,i.prev)<0||Ht(i,i.next,e)<0}function Vx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gm(i,e){let t=Du(i.i,i.x,i.y),n=Du(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sp(i,e,t,n){let s=Du(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Du(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Nu=class{static triangulate(e,t,n=2){return Ex(e,t,n)}},qs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bp(e),Tp(n,e);let o=e.length;t.forEach(bp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Tp(n,t[c]);let a=Nu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function bp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var na=class i extends vt{constructor(e=new jr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Hx,S,M=!1,w,E,v,_;if(p){S=p.getSpacedPoints(h),M=!0,d=!1;let D=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,D),E=new U,v=new U,_=new U}d||(m=0,f=0,g=0,x=0);let T=a.extractPoints(l),R=T.shape,N=T.holes;if(!qs.isClockWise(R)){R=R.reverse();for(let D=0,G=N.length;D<G;D++){let W=N[D];qs.isClockWise(W)&&(N[D]=W.reverse())}}function k(D){let W=10000000000000001e-36,$=D[0];for(let J=1;J<=D.length;J++){let fe=J%D.length,he=D[fe],ge=he.x-$.x,de=he.y-$.y,H=ge*ge+de*de,Xe=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs($.x),Math.abs($.y)),Qe=W*Xe*Xe;if(H<=Qe){D.splice(fe,1),J--;continue}$=he}}k(R),N.forEach(k);let A=N.length,C=R;for(let D=0;D<A;D++){let G=N[D];R=R.concat(G)}function I(D,G,W){return G||et("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(G,W)}let O=R.length;function V(D,G,W){let $,J,fe,he=D.x-G.x,ge=D.y-G.y,de=W.x-D.x,H=W.y-D.y,Xe=he*he+ge*ge,Qe=he*H-ge*de;if(Math.abs(Qe)>Number.EPSILON){let B=Math.sqrt(Xe),b=Math.sqrt(de*de+H*H),K=G.x-ge/B,j=G.y+he/B,se=W.x-H/b,ve=W.y+de/b,Se=((se-K)*H-(ve-j)*de)/(he*H-ge*de);$=K+he*Se-D.x,J=j+ge*Se-D.y;let oe=$*$+J*J;if(oe<=2)return new ce($,J);fe=Math.sqrt(oe/2)}else{let B=!1;he>Number.EPSILON?de>Number.EPSILON&&(B=!0):he<-Number.EPSILON?de<-Number.EPSILON&&(B=!0):Math.sign(ge)===Math.sign(H)&&(B=!0),B?($=-ge,J=he,fe=Math.sqrt(Xe)):($=he,J=ge,fe=Math.sqrt(Xe/2))}return new ce($/fe,J/fe)}let P=[];for(let D=0,G=C.length,W=G-1,$=D+1;D<G;D++,W++,$++)W===G&&(W=0),$===G&&($=0),P[D]=V(C[D],C[W],C[$]);let z=[],X,Y=P.concat();for(let D=0,G=A;D<G;D++){let W=N[D];X=[];for(let $=0,J=W.length,fe=J-1,he=$+1;$<J;$++,fe++,he++)fe===J&&(fe=0),he===J&&(he=0),X[$]=V(W[$],W[fe],W[he]);z.push(X),Y=Y.concat(X)}let re;if(m===0)re=qs.triangulateShape(C,N);else{let D=[],G=[];for(let W=0;W<m;W++){let $=W/m,J=f*Math.cos($*Math.PI/2),fe=g*Math.sin($*Math.PI/2)+x;for(let he=0,ge=C.length;he<ge;he++){let de=I(C[he],P[he],fe);Le(de.x,de.y,-J),$===0&&D.push(de)}for(let he=0,ge=A;he<ge;he++){let de=N[he];X=z[he];let H=[];for(let Xe=0,Qe=de.length;Xe<Qe;Xe++){let B=I(de[Xe],X[Xe],fe);Le(B.x,B.y,-J),$===0&&H.push(B)}$===0&&G.push(H)}}re=qs.triangulateShape(D,G)}let _e=re.length,ye=g+x;for(let D=0;D<O;D++){let G=d?I(R[D],Y[D],ye):R[D];M?(v.copy(w.normals[0]).multiplyScalar(G.x),E.copy(w.binormals[0]).multiplyScalar(G.y),_.copy(S[0]).add(v).add(E),Le(_.x,_.y,_.z)):Le(G.x,G.y,0)}for(let D=1;D<=h;D++)for(let G=0;G<O;G++){let W=d?I(R[G],Y[G],ye):R[G];M?(v.copy(w.normals[D]).multiplyScalar(W.x),E.copy(w.binormals[D]).multiplyScalar(W.y),_.copy(S[D]).add(v).add(E),Le(_.x,_.y,_.z)):Le(W.x,W.y,u/h*D)}for(let D=m-1;D>=0;D--){let G=D/m,W=f*Math.cos(G*Math.PI/2),$=g*Math.sin(G*Math.PI/2)+x;for(let J=0,fe=C.length;J<fe;J++){let he=I(C[J],P[J],$);Le(he.x,he.y,u+W)}for(let J=0,fe=N.length;J<fe;J++){let he=N[J];X=z[J];for(let ge=0,de=he.length;ge<de;ge++){let H=I(he[ge],X[ge],$);M?Le(H.x,H.y+S[h-1].y,S[h-1].x+W):Le(H.x,H.y,u+W)}}}te(),me();function te(){let D=s.length/3;if(d){let G=0,W=O*G;for(let $=0;$<_e;$++){let J=re[$];Oe(J[2]+W,J[1]+W,J[0]+W)}G=h+m*2,W=O*G;for(let $=0;$<_e;$++){let J=re[$];Oe(J[0]+W,J[1]+W,J[2]+W)}}else{for(let G=0;G<_e;G++){let W=re[G];Oe(W[2],W[1],W[0])}for(let G=0;G<_e;G++){let W=re[G];Oe(W[0]+O*h,W[1]+O*h,W[2]+O*h)}}n.addGroup(D,s.length/3-D,0)}function me(){let D=s.length/3,G=0;ue(C,G),G+=C.length;for(let W=0,$=N.length;W<$;W++){let J=N[W];ue(J,G),G+=J.length}n.addGroup(D,s.length/3-D,1)}function ue(D,G){let W=D.length;for(;--W>=0;){let $=W,J=W-1;J<0&&(J=D.length-1);for(let fe=0,he=h+m*2;fe<he;fe++){let ge=O*fe,de=O*(fe+1),H=G+$+ge,Xe=G+J+ge,Qe=G+J+de,B=G+$+de;He(H,Xe,Qe,B)}}}function Le(D,G,W){c.push(D),c.push(G),c.push(W)}function Oe(D,G,W){ht(D),ht(G),ht(W);let $=s.length/3,J=y.generateTopUV(n,s,$-3,$-2,$-1);je(J[0]),je(J[1]),je(J[2])}function He(D,G,W,$){ht(D),ht(G),ht($),ht(G),ht(W),ht($);let J=s.length/3,fe=y.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);je(fe[0]),je(fe[1]),je(fe[3]),je(fe[1]),je(fe[2]),je(fe[3])}function ht(D){s.push(c[D*3+0]),s.push(c[D*3+1]),s.push(c[D*3+2])}function je(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Wx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Iu[s.type]().fromJSON(s)),new i(n,e.options)}},Hx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(d,1-g),new ce(x,1-p)]:[new ce(a,1-c),new ce(h,1-u),new ce(f,1-g),new ce(m,1-p)]}};function Wx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ir=class i extends Ql{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ia=class i extends vt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new U,d=new ce,f=new U,g=new U,x=new U,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let S=n+y*h*s,M=Math.sin(S),w=Math.cos(S);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*M,u.y=e[E].y,u.z=e[E].x*w,o.push(u.x,u.y,u.z),d.x=y/t,d.y=E/(e.length-1),a.push(d.x,d.y);let v=c[3*E+0]*M,_=c[3*E+1],T=c[3*E+0]*w;l.push(v,_,T)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let M=S+y*e.length,w=M,E=M+e.length,v=M+e.length+1,_=M+1;r.push(w,E,_),r.push(v,_,E)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Qn=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let S=0;S<l;S++){let M=S*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let S=y+l*p,M=y+l*(p+1),w=y+1+l*(p+1),E=y+1+l*p;f.push(S,M,E),f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ln=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new U,d=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],S=p/n,M=o+S*a,w=e*Math.cos(M),E=Math.sqrt(e*e-w*w),v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let _=0;_<=t;_++){let T=_/t,R=s+T*r;u.x=-E*Math.cos(R),u.y=w,u.z=E*Math.sin(R),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-S),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let S=h[p][y+1],M=h[p][y],w=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(S,M,E),(p!==n-1||c<Math.PI)&&f.push(M,w,E)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fi=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new U,f=new U,g=new U;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,S=(s+1)*(x-1)+m,M=(s+1)*x+m;c.push(p,y,M),c.push(y,S,M)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wp(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let s in n)e[s]=n[s]}return e}function wp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var mn={clone:fr,merge:In},qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},eo=class extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends Fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hn=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var sa=class extends Fn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var oc=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ac=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ep(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Kx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=e,a=2*t-n;break;case Cu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Au:o=e,c=2*n-t;break;case Cu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[l+w]+S*o[c+w]+M*o[u+w];return r}},cc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},hc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends Oi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*d+g*2,y=u[p],S=u[p+1],M=e*d+g*2,w=h[M],E=h[M+1],v=(n-t)/(s-t),_,T,R,N,F;for(let k=0;k<8;k++){_=v*v,T=_*v,R=1-v,N=R*R,F=N*R;let C=F*t+3*N*v*y+3*R*_*w+T*s-n;if(Math.abs(C)<1e-10)break;let I=3*N*(y-t)+6*R*v*(w-y)+3*_*(s-w);if(Math.abs(I)<1e-10)break;v=v-C/I,v=Math.max(0,Math.min(1,v))}r[g]=F*x+3*N*v*S+3*R*_*E+T*m}return r}},Wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(t,this.TimeBufferType),this.values=Dl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break;case wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return Fl;case this.InterpolantFactoryMethodBezier:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){et("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Lg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=$s;var ss=class extends Wn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Js;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};ra.prototype.ValueTypeName="color";var rs=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};rs.prototype.ValueTypeName="number";var fc=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)pn.slerpFlat(r,0,o,l-a,o,l,c);return r}},os=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}};os.prototype.ValueTypeName="quaternion";os.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Wn{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Js;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Wn{constructor(e,t,n,s){super(e,t,n,s)}};Cs.prototype.ValueTypeName="vector";var oa=class{constructor(e="",t=-1,n=[],s=Qp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($x(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Zx(c);c=Ep(c,1,h),l=Ep(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new rs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Jx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return ra;case"quaternion":return os;case"bool":case"boolean":return ss;case"string":return as}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $x(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Jx(i.type);if(i.times===void 0){let t=[],n=[];Kx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ap(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ap(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ap(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var dc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xm=new dc,_i=class{constructor(e){this.manager=e!==void 0?e:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_i.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi={},Uu=class extends Error{constructor(e,t){super(e),this.response=t}},sr=class extends _i{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ii.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Qi[e]!==void 0){Qi[e].push({onLoad:t,onProgress:n,onError:s});return}Qi[e]=[],Qi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Qi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:M})=>{if(S)p.close();else{x+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let E=0,v=h.length;E<v;E++){let _=h[E];_.onProgress&&_.onProgress(w)}p.enqueue(M),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Uu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ii.add(`file:${e}`,l);let h=Qi[e];delete Qi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Qi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Qi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Or=new WeakMap,pc=class extends _i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Or.get(o);u===void 0&&(u=[],Or.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Hr("img");function c(){h(),t&&t(this);let u=Or.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Or.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ii.remove(`image:${e}`);let d=Or.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var aa=class extends _i{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new vn,a=new sr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):et(h);return}r._applyTexData(o,l),t&&t(o,l)},n,s),o}createDataTexture(e){let t=new vn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Vn,e.wrapT=t.wrapT!==void 0?t.wrapT:Vn,e.magFilter=t.magFilter!==void 0?t.magFilter:yt,e.minFilter=t.minFilter!==void 0?t.minFilter:yt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Cn),t.mipmapCount===1&&(e.minFilter=yt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},rr=class extends _i{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new pc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},or=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ar=class extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Su=new Ge,Cp=new U,Rp=new U,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cp),Rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rp),t.updateMatrixWorld(),Su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Gr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nl=new U,Ul=new pn,Pi=new U,ca=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nl,Ul,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Ul,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Nl,Ul,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Ul,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new U,Pp=new ce,Ip=new ce,Bt=class extends ca{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-e/Ss.z)}getViewSize(e,t){return this.getViewBounds(e,Pp,Ip),t.subVectors(Ip,Pp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fu=class extends la{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ha=class extends or{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ou=class extends la{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},ei=class extends or{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ou}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bi=class extends ca{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bu=class extends la{constructor(){super(new Bi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bu=new WeakMap,ua=class extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{bu.has(o)===!0?(s&&s(bu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ii.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),bu.set(c,l),Ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Br=-90,zr=1,mc=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Br,zr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Br,zr,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Br,zr,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Br,zr,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Br,zr,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Br,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},gc=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},fa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=jx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function jx(){this._document.hidden===!1&&this.reset()}var rf="\\[\\]\\.:\\/",Qx=new RegExp("["+rf+"]","g"),of="[^"+rf+"]",e1="[^"+rf.replace("\\.","")+"]",t1=/((?:WC+[\/:])*)/.source.replace("WC",of),n1=/(WCOD+)?/.source.replace("WCOD",e1),i1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",of),s1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",of),r1=new RegExp("^"+t1+n1+i1+s1+"$"),o1=["material","materials","bones","map"],zu=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){let t=r1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);o1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=zu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var US=new Float32Array(1);var Lp=new Ge,da=class{constructor(e,t,n=0,s=1/0){this.ray=new Ni(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lp),this}intersectObject(e,t=!0,n=[]){return ku(e,this,n,t),n.sort(Dp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ku(e[s],this,n,t);return n.sort(Dp),n}};function Dp(i,e){return i.distance-e.distance}function ku(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ku(r[o],e,t,!0)}}var ff=class ff{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ff.prototype.isMatrix2=!0;var Vu=ff;function af(i,e,t,n){let s=a1(n);switch(t){case $u:return i*e;case wc:return i*e/s.components*s.byteLength;case Ec:return i*e/s.components*s.byteLength;case Is:return i*e*2/s.components*s.byteLength;case Ac:return i*e*2/s.components*s.byteLength;case ju:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case Cc:return i*e*4/s.components*s.byteLength;case wa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Lc:return Math.max(i,16)*Math.max(e,8)/4;case Rc:case Ic:return Math.max(i,8)*Math.max(e,8)/2;case Dc:case Nc:case Fc:case Oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:case Ra:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qc:case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pa:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a1(i){switch(i){case Rn:case Yu:return{byteLength:1,components:1};case so:case Zu:case Ot:return{byteLength:2,components:1};case bc:case Tc:return{byteLength:2,components:4};case yi:case Sc:case Pn:return{byteLength:4,components:1};case Ku:case Ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function km(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function c1(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_1=`#ifdef USE_BATCHING
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
#endif`,v1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b1=`#ifdef USE_IRIDESCENCE
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
#endif`,T1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,D1=`#define PI 3.141592653589793
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
} // validated`,N1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U1=`vec3 transformedNormal = objectNormal;
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
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$1=`#ifdef USE_GRADIENTMAP
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
}`,j1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a_=`PhysicalMaterial material;
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
#endif`,l_=`uniform sampler2D dfgLUT;
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
}`,c_=`
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
#endif`,h_=`#if defined( RE_IndirectDiffuse )
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
#endif`,u_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,__=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`#ifdef USE_MORPHTARGETS
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
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D_=`#ifdef USE_NORMALMAP
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
#endif`,N_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K_=`float getShadowMask() {
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
}`,J_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$_=`#ifdef USE_SKINNING
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
#endif`,j_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
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
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,rv=`#ifdef USE_TRANSMISSION
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
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uv=`uniform sampler2D t2D;
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
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
}`,xv=`#if DEPTH_PACKING == 3200
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
}`,_v=`#define DISTANCE
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
}`,vv=`#define DISTANCE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`uniform float scale;
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
}`,bv=`uniform vec3 diffuse;
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
}`,Tv=`#include <common>
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
}`,wv=`uniform vec3 diffuse;
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
}`,Ev=`#define LAMBERT
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
}`,Av=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Rv=`#define MATCAP
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
}`,Pv=`#define NORMAL
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
}`,Iv=`#define NORMAL
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
}`,Lv=`#define PHONG
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
}`,Dv=`#define PHONG
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
}`,Nv=`#define STANDARD
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
}`,Uv=`#define STANDARD
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
}`,Fv=`#define TOON
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
}`,Ov=`#define TOON
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
}`,Bv=`uniform float size;
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
}`,zv=`uniform vec3 diffuse;
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
}`,kv=`#include <common>
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
}`,Vv=`uniform vec3 color;
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
}`,Gv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:h1,alphahash_pars_fragment:u1,alphamap_fragment:f1,alphamap_pars_fragment:d1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:x1,batching_pars_vertex:_1,batching_vertex:v1,begin_vertex:y1,beginnormal_vertex:M1,bsdfs:S1,iridescence_fragment:b1,bumpmap_pars_fragment:T1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:C1,color_fragment:R1,color_pars_fragment:P1,color_pars_vertex:I1,color_vertex:L1,common:D1,cube_uv_reflection_fragment:N1,defaultnormal_vertex:U1,displacementmap_pars_vertex:F1,displacementmap_vertex:O1,emissivemap_fragment:B1,emissivemap_pars_fragment:z1,colorspace_fragment:k1,colorspace_pars_fragment:V1,envmap_fragment:G1,envmap_common_pars_fragment:H1,envmap_pars_fragment:W1,envmap_pars_vertex:X1,envmap_physical_pars_fragment:n_,envmap_vertex:q1,fog_vertex:Y1,fog_pars_vertex:Z1,fog_fragment:K1,fog_pars_fragment:J1,gradientmap_pars_fragment:$1,lightmap_pars_fragment:j1,lights_lambert_fragment:Q1,lights_lambert_pars_fragment:e_,lights_pars_begin:t_,lights_toon_fragment:i_,lights_toon_pars_fragment:s_,lights_phong_fragment:r_,lights_phong_pars_fragment:o_,lights_physical_fragment:a_,lights_physical_pars_fragment:l_,lights_fragment_begin:c_,lights_fragment_maps:h_,lights_fragment_end:u_,lightprobes_pars_fragment:f_,logdepthbuf_fragment:d_,logdepthbuf_pars_fragment:p_,logdepthbuf_pars_vertex:m_,logdepthbuf_vertex:g_,map_fragment:x_,map_pars_fragment:__,map_particle_fragment:v_,map_particle_pars_fragment:y_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:S_,morphinstance_vertex:b_,morphcolor_vertex:T_,morphnormal_vertex:w_,morphtarget_pars_vertex:E_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:R_,normal_pars_fragment:P_,normal_pars_vertex:I_,normal_vertex:L_,normalmap_pars_fragment:D_,clearcoat_normal_fragment_begin:N_,clearcoat_normal_fragment_maps:U_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:O_,opaque_fragment:B_,packing:z_,premultiplied_alpha_fragment:k_,project_vertex:V_,dithering_fragment:G_,dithering_pars_fragment:H_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:X_,shadowmap_pars_fragment:q_,shadowmap_pars_vertex:Y_,shadowmap_vertex:Z_,shadowmask_pars_fragment:K_,skinbase_vertex:J_,skinning_pars_vertex:$_,skinning_vertex:j_,skinnormal_vertex:Q_,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:sv,transmission_pars_fragment:rv,uv_pars_fragment:ov,uv_pars_vertex:av,uv_vertex:lv,worldpos_vertex:cv,background_vert:hv,background_frag:uv,backgroundCube_vert:fv,backgroundCube_frag:dv,cube_vert:pv,cube_frag:mv,depth_vert:gv,depth_frag:xv,distance_vert:_v,distance_frag:vv,equirect_vert:yv,equirect_frag:Mv,linedashed_vert:Sv,linedashed_frag:bv,meshbasic_vert:Tv,meshbasic_frag:wv,meshlambert_vert:Ev,meshlambert_frag:Av,meshmatcap_vert:Cv,meshmatcap_frag:Rv,meshnormal_vert:Pv,meshnormal_frag:Iv,meshphong_vert:Lv,meshphong_frag:Dv,meshphysical_vert:Nv,meshphysical_frag:Uv,meshtoon_vert:Fv,meshtoon_frag:Ov,points_vert:Bv,points_frag:zv,shadow_vert:kv,shadow_frag:Vv,sprite_vert:Gv,sprite_frag:Hv},Ae={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vi={basic:{uniforms:In([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:In([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:In([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:In([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:In([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:In([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:In([Ae.points,Ae.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:In([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:In([Ae.common,Ae.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:In([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:In([Ae.sprite,Ae.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:In([Ae.common,Ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:In([Ae.lights,Ae.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vi.physical={uniforms:In([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var ah={r:0,b:0,g:0},Wv=new Ge,Vm=new st;Vm.set(-1,0,0,0,1,0,0,0,1);function Xv(i,e,t,n,s,r){let o=new Ne(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let M=y.backgroundBlurriness>0;S=e.get(S,M)}return S}function g(y){let S=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,S){let M=f(S);M&&(M.isCubeTexture||M.mapping===Ta)?(l===void 0&&(l=new Ie(new Vt(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:fr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Vm),l.material.toneMapped=ot.getTransfer(M.colorSpace)!==xt,(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ie(new Qn(2,2),new Mt({name:"BackgroundMaterial",uniforms:fr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,S){y.getRGB(ah,sf(i)),t.buffers.color.setClear(ah.r,ah.g,ah.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:x,dispose:p}}function qv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(N,F,k,A,C){let I=!1,O=u(N,A,k,F);r!==O&&(r=O,l(r.object)),I=f(N,A,k,C),I&&g(N,A,k,C),C!==null&&e.update(C,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,M(N,F,k,A),C!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,F,k,A){let C=A.wireframe===!0,I=n[F.id];I===void 0&&(I={},n[F.id]=I);let O=N.isInstancedMesh===!0?N.id:0,V=I[O];V===void 0&&(V={},I[O]=V);let P=V[k.id];P===void 0&&(P={},V[k.id]=P);let z=P[C];return z===void 0&&(z=d(c()),P[C]=z),z}function d(N){let F=[],k=[],A=[];for(let C=0;C<t;C++)F[C]=0,k[C]=0,A[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:A,object:N,attributes:{},index:null}}function f(N,F,k,A){let C=r.attributes,I=F.attributes,O=0,V=k.getAttributes();for(let P in V)if(V[P].location>=0){let X=C[P],Y=I[P];if(Y===void 0&&(P==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),P==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),X===void 0||X.attribute!==Y||Y&&X.data!==Y.data)return!0;O++}return r.attributesNum!==O||r.index!==A}function g(N,F,k,A){let C={},I=F.attributes,O=0,V=k.getAttributes();for(let P in V)if(V[P].location>=0){let X=I[P];X===void 0&&(P==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),P==="instanceColor"&&N.instanceColor&&(X=N.instanceColor));let Y={};Y.attribute=X,X&&X.data&&(Y.data=X.data),C[P]=Y,O++}r.attributes=C,r.attributesNum=O,r.index=A}function x(){let N=r.newAttributes;for(let F=0,k=N.length;F<k;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){let k=r.newAttributes,A=r.enabledAttributes,C=r.attributeDivisors;k[N]=1,A[N]===0&&(i.enableVertexAttribArray(N),A[N]=1),C[N]!==F&&(i.vertexAttribDivisor(N,F),C[N]=F)}function y(){let N=r.newAttributes,F=r.enabledAttributes;for(let k=0,A=F.length;k<A;k++)F[k]!==N[k]&&(i.disableVertexAttribArray(k),F[k]=0)}function S(N,F,k,A,C,I,O){O===!0?i.vertexAttribIPointer(N,F,k,C,I):i.vertexAttribPointer(N,F,k,A,C,I)}function M(N,F,k,A){x();let C=A.attributes,I=k.getAttributes(),O=F.defaultAttributeValues;for(let V in I){let P=I[V];if(P.location>=0){let z=C[V];if(z===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),z!==void 0){let X=z.normalized,Y=z.itemSize,re=e.get(z);if(re===void 0)continue;let _e=re.buffer,ye=re.type,te=re.bytesPerElement,me=ye===i.INT||ye===i.UNSIGNED_INT||z.gpuType===Sc;if(z.isInterleavedBufferAttribute){let ue=z.data,Le=ue.stride,Oe=z.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<P.locationSize;He++)p(P.location+He,ue.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<P.locationSize;He++)m(P.location+He);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let He=0;He<P.locationSize;He++)S(P.location+He,Y/P.locationSize,ye,X,Le*te,(Oe+Y/P.locationSize*He)*te,me)}else{if(z.isInstancedBufferAttribute){for(let ue=0;ue<P.locationSize;ue++)p(P.location+ue,z.meshPerAttribute);N.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ue=0;ue<P.locationSize;ue++)m(P.location+ue);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ue=0;ue<P.locationSize;ue++)S(P.location+ue,Y/P.locationSize,ye,X,Y*te,Y/P.locationSize*ue*te,me)}}else if(O!==void 0){let X=O[V];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(P.location,X);break;case 3:i.vertexAttrib3fv(P.location,X);break;case 4:i.vertexAttrib4fv(P.location,X);break;default:i.vertexAttrib1fv(P.location,X)}}}}y()}function w(){T();for(let N in n){let F=n[N];for(let k in F){let A=F[k];for(let C in A){let I=A[C];for(let O in I)h(I[O].object),delete I[O];delete A[C]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let k in F){let A=F[k];for(let C in A){let I=A[C];for(let O in I)h(I[O].object),delete I[O];delete A[C]}}delete n[N.id]}function v(N){for(let F in n){let k=n[F];for(let A in k){let C=k[A];if(C[N.id]===void 0)continue;let I=C[N.id];for(let O in I)h(I[O].object),delete I[O];delete C[N.id]}}}function _(N){for(let F in n){let k=n[F],A=N.isInstancedMesh===!0?N.id:0,C=k[A];if(C!==void 0){for(let I in C){let O=C[I];for(let V in O)h(O[V].object),delete O[V];delete C[I]}delete k[A],Object.keys(k).length===0&&delete n[F]}}}function T(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Yv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Zv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Sn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let _=v===Ot&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Rn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Pn&&!_)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ze("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:w,samples:E}}function Kv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new si,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,S=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,S,f);for(let w=0;w!==S;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=f;S!==x;++S,M+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ls=4,_m=[.125,.215,.35,.446,.526,.582],dr=20,Jv=256,Da=new Bi,vm=new Ne,df=null,pf=0,mf=0,gf=!1,$v=new U,ch=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=$v}=r;df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(df,pf,mf),this._renderer.xr.enabled=gf,e.scissorTest=!1,oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Ot,format:Sn,colorSpace:_n,depthBuffer:!1},s=ym(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jv(r)),this._blurMaterial=ey(r,e,t),this._ggxMaterial=Qv(r,e,t)}return s}_compileMaterial(e){let t=new Ie(new vt,e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,s,r){let c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vm),u.toneMapping=vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new Vt,new qt({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(vm),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):M===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let w=this._cubeSize;oo(s,M*w,S>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Rs||e.mapping===hr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;oo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Da)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ls?n-g+Ls:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,oo(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Da),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,oo(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Da)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*dr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):dr;m>dr&&ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);let p=[],y=0;for(let v=0;v<dr;++v){let _=v/x,T=Math.exp(-_*_/2);p.push(T),v===0?y+=T:v<m&&(y+=2*T)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let M=this._sizeLods[s],w=3*M*(s>S-Ls?s-S+Ls:0),E=4*(this._cubeSize-M);oo(t,w,E,3*M,2*M),c.setRenderTarget(t),c.render(u,Da)}};function jv(i){let e=[],t=[],n=[],s=i,r=i-Ls+1+_m.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ls?c=_m[o-i+Ls-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),S=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let E=0;E<f;E++){let v=E%3*2/3-1,_=E>2?0:-1,T=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];y.set(T,x*g*E),S.set(d,m*g*E);let R=[E,E,E,E,E,E];M.set(R,p*g*E)}let w=new vt;w.setAttribute("position",new It(y,x)),w.setAttribute("uv",new It(S,m)),w.setAttribute("faceIndex",new It(M,p)),n.push(new Ie(w,null)),s>Ls&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ym(i,e,t){let n=new kt(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Qv(i,e,t){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uh(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function ey(i,e,t){let n=new Float32Array(dr),s=new U(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Mm(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:$t,depthTest:!1,depthWrite:!1})}function Sm(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$t,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}var hh=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:$t});r.uniforms.tEquirect.value=t;let o=new Ie(s,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=yt),new mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function ty(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===no||f===yc)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new hh(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===no||f===yc,x=f===Rs||f===hr;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new ch(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new ch(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===no?d.mapping=Rs:f===yc&&(d.mapping=hr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function ny(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ys("WebGLRenderer: "+n+" extension not supported."),s}}}function iy(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let S=0,M=y.length;S<M;S+=3){let w=y[S+0],E=y[S+1],v=y[S+2];d.push(w,E,E,v,v,w)}}else{let y=g.array;x=g.version;for(let S=0,M=y.length/3-1;S<M;S+=3){let w=S+0,E=S+1,v=S+2;d.push(w,E,E,v,v,w)}}let m=new(g.count>=65535?ko:zo)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function sy(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ry(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function oy(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=a.attributes.position.count*S,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*w*4*u),v=new Oo(E,M,w,u);v.type=Pn,v.needsUpdate=!0;let _=S*4;for(let R=0;R<u;R++){let N=m[R],F=p[R],k=y[R],A=M*w*4*R;for(let C=0;C<N.count;C++){let I=C*_;f===!0&&(s.fromBufferAttribute(N,C),E[A+I+0]=s.x,E[A+I+1]=s.y,E[A+I+2]=s.z,E[A+I+3]=0),g===!0&&(s.fromBufferAttribute(F,C),E[A+I+4]=s.x,E[A+I+5]=s.y,E[A+I+6]=s.z,E[A+I+7]=0),x===!0&&(s.fromBufferAttribute(k,C),E[A+I+8]=s.x,E[A+I+9]=s.y,E[A+I+10]=s.z,E[A+I+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new ce(M,w)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ay(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var ly={[_a]:"LINEAR_TONE_MAPPING",[va]:"REINHARD_TONE_MAPPING",[ya]:"CINEON_TONE_MAPPING",[cr]:"ACES_FILMIC_TONE_MAPPING",[Sa]:"AGX_TONE_MAPPING",[ba]:"NEUTRAL_TONE_MAPPING",[Ma]:"CUSTOM_TONE_MAPPING"};function cy(i,e,t,n,s,r){let o=new kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new gi(e,t):void 0}),a=new kt(e,t,{type:Ot,depthBuffer:!1,stencilBuffer:!1}),c=new vt;c.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ie(c,l),u=new Bi(-1,1,1,-1,0,1),d=null,f=null,g=!1,x,m=null,p=[],y=!1;this.setSize=function(S,M){o.setSize(S,M),a.setSize(S,M);for(let w=0;w<p.length;w++){let E=p[w];E.setSize&&E.setSize(S,M)}},this.setEffects=function(S){p=S,y=p.length>0&&p[0].isRenderPass===!0;let M=o.width,w=o.height;for(let E=0;E<p.length;E++){let v=p[E];v.setSize&&v.setSize(M,w)}},this.begin=function(S,M){if(g||S.toneMapping===vi&&p.length===0)return!1;if(m=M,M!==null){let w=M.width,E=M.height;(o.width!==w||o.height!==E)&&this.setSize(w,E)}return y===!1&&S.setRenderTarget(o),x=S.toneMapping,S.toneMapping=vi,!0},this.hasRenderPass=function(){return y},this.end=function(S,M){S.toneMapping=x,g=!0;let w=o,E=a;for(let v=0;v<p.length;v++){let _=p[v];if(_.enabled!==!1&&(_.render(S,E,w,M),_.needsSwap!==!1)){let T=w;w=E,E=T}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,l.defines={},ot.getTransfer(d)===xt&&(l.defines.SRGB_TRANSFER="");let v=ly[f];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(m),S.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Gm=new an,vf=new gi(1,1),Hm=new Oo,Wm=new Kl,Xm=new Wo,bm=[],Tm=[],wm=new Float32Array(16),Em=new Float32Array(9),Am=new Float32Array(4);function co(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=bm[s];if(r===void 0&&(r=new Float32Array(s),bm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fh(i,e){let t=Tm[e];t===void 0&&(t=new Int32Array(e),Tm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function py(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Am.set(n),i.uniformMatrix2fv(this.addr,!1,Am),hn(t,n)}}function my(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;Em.set(n),i.uniformMatrix3fv(this.addr,!1,Em),hn(t,n)}}function gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(cn(t,n))return;wm.set(n),i.uniformMatrix4fv(this.addr,!1,wm),hn(t,n)}}function xy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function My(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function by(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function Ty(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function wy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vf.compareFunction=t.isReversedDepthBuffer()?oh:rh,r=vf):r=Gm,t.setTexture2D(e||r,s)}function Ey(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wm,s)}function Ay(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xm,s)}function Cy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hm,s)}function Ry(i){switch(i){case 5126:return hy;case 35664:return uy;case 35665:return fy;case 35666:return dy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return xy;case 35667:case 35671:return _y;case 35668:case 35672:return vy;case 35669:case 35673:return yy;case 5125:return My;case 36294:return Sy;case 36295:return by;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Cy}}function Py(i,e){i.uniform1fv(this.addr,e)}function Iy(i,e){let t=co(e,this.size,2);i.uniform2fv(this.addr,t)}function Ly(i,e){let t=co(e,this.size,3);i.uniform3fv(this.addr,t)}function Dy(i,e){let t=co(e,this.size,4);i.uniform4fv(this.addr,t)}function Ny(i,e){let t=co(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Uy(i,e){let t=co(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fy(i,e){let t=co(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Oy(i,e){i.uniform1iv(this.addr,e)}function By(i,e){i.uniform2iv(this.addr,e)}function zy(i,e){i.uniform3iv(this.addr,e)}function ky(i,e){i.uniform4iv(this.addr,e)}function Vy(i,e){i.uniform1uiv(this.addr,e)}function Gy(i,e){i.uniform2uiv(this.addr,e)}function Hy(i,e){i.uniform3uiv(this.addr,e)}function Wy(i,e){i.uniform4uiv(this.addr,e)}function Xy(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=vf:o=Gm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function qy(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wm,r[o])}function Yy(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xm,r[o])}function Zy(i,e,t){let n=this.cache,s=e.length,r=fh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hm,r[o])}function Ky(i){switch(i){case 5126:return Py;case 35664:return Iy;case 35665:return Ly;case 35666:return Dy;case 35674:return Ny;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return zy;case 35669:case 35673:return ky;case 5125:return Vy;case 36294:return Gy;case 36295:return Hy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return Zy}}var yf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ry(t.type)}},Mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ky(t.type)}},Sf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},xf=/(\w+)(\])?(\[|\.)?/g;function Cm(i,e){i.seq.push(e),i.map[e.id]=e}function Jy(i,e,t){let n=i.name,s=n.length;for(xf.lastIndex=0;;){let r=xf.exec(n),o=xf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Cm(t,l===void 0?new yf(a,i,e):new Mf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Sf(a),Cm(t,u)),t=u}}}var ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Jy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $y=37297,jy=0;function Qy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Pm=new st;function eM(i){ot._getMatrix(Pm,ot.workingColorSpace,i);let e=`mat3( ${Pm.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Uo:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Im(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Qy(i.getShaderSource(e),a)}else return r}function tM(i,e){let t=eM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var nM={[_a]:"Linear",[va]:"Reinhard",[ya]:"Cineon",[cr]:"ACESFilmic",[Sa]:"AgX",[ba]:"Neutral",[Ma]:"Custom"};function iM(i,e){let t=nM[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lh=new U;function sM(){ot.getLuminanceCoefficients(lh);let i=lh.x.toFixed(4),e=lh.y.toFixed(4),t=lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function oM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function aM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ua(i){return i!==""}function Lm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(i){return i.replace(lM,hM)}var cM=new Map;function hM(i,e){let t=ct[e];if(t===void 0){let n=cM.get(e);if(n!==void 0)t=ct[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return bf(t)}var uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(i){return i.replace(uM,fM)}function fM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Um(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var dM={[pa]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function pM(i){return dM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var mM={[Rs]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function gM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":mM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var xM={[hr]:"ENVMAP_MODE_REFRACTION"};function _M(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":xM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vM={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[Jp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function yM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":vM[i.combine]||"ENVMAP_BLENDING_NONE"}function MM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function SM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=pM(t),l=gM(t),h=_M(t),u=yM(t),d=MM(t),f=rM(t),g=oM(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ua).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(m=[Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[Um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?ct.tonemapping_pars_fragment:"",t.toneMapping!==vi?iM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,tM("linearToOutputTexel",t.outputColorSpace),sM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=bf(o),o=Lm(o,t),o=Dm(o,t),a=bf(a),a=Lm(a,t),a=Dm(a,t),o=Nm(o),a=Nm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+m+o,M=y+p+a,w=Rm(s,s.VERTEX_SHADER,S),E=Rm(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(N){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(w)||"",A=s.getShaderInfoLog(E)||"",C=F.trim(),I=k.trim(),O=A.trim(),V=!0,P=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,E);else{let z=Im(s,w,"vertex"),X=Im(s,E,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+C+`
`+z+`
`+X)}else C!==""?ze("WebGLProgram: Program Info Log:",C):(I===""||O==="")&&(P=!1);P&&(N.diagnostics={runnable:V,programLog:C,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(w),s.deleteShader(E),_=new ao(s,x),T=aM(s,x)}let _;this.getUniforms=function(){return _===void 0&&v(this),_};let T;this.getAttributes=function(){return T===void 0&&v(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,$y)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=E,this}var bM=0,Tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wf(e),t.set(e,n)),n}},wf=class{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}};function TM(i){return i===Is||i===Ra||i===Pa}function wM(i,e,t,n,s,r){let o=new qr,a=new Tf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,R,N,F,k){let A=N.fog,C=F.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||I,O),P=V&&V.mapping===Ta?V.image.height:null,z=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let X=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Y=X!==void 0?X.length:0,re=0;C.morphAttributes.position!==void 0&&(re=1),C.morphAttributes.normal!==void 0&&(re=2),C.morphAttributes.color!==void 0&&(re=3);let _e,ye,te,me;if(z){let Be=Vi[z];_e=Be.vertexShader,ye=Be.fragmentShader}else{_e=_.vertexShader,ye=_.fragmentShader;let Be=a.getVertexShaderStage(_),Wt=a.getFragmentShaderStage(_);a.update(_,Be,Wt),te=Be.id,me=Wt.id}let ue=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Oe=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,ht=!!_.map,je=!!_.matcap,D=!!V,G=!!_.aoMap,W=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,J=!!_.normalMap,fe=!!_.displacementMap,he=!!_.emissiveMap,ge=!!_.metalnessMap,de=!!_.roughnessMap,H=_.anisotropy>0,Xe=_.clearcoat>0,Qe=_.dispersion>0,B=_.iridescence>0,b=_.sheen>0,K=_.transmission>0,j=H&&!!_.anisotropyMap,se=Xe&&!!_.clearcoatMap,ve=Xe&&!!_.clearcoatNormalMap,Se=Xe&&!!_.clearcoatRoughnessMap,oe=B&&!!_.iridescenceMap,ae=B&&!!_.iridescenceThicknessMap,we=b&&!!_.sheenColorMap,We=b&&!!_.sheenRoughnessMap,Te=!!_.specularMap,be=!!_.specularColorMap,ke=!!_.specularIntensityMap,Je=K&&!!_.transmissionMap,nt=K&&!!_.thicknessMap,q=!!_.gradientMap,Ee=!!_.alphaMap,le=_.alphaTest>0,Ce=!!_.alphaHash,De=!!_.extensions,pe=vi;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(pe=i.toneMapping);let qe={shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:ye,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&F.instanceColor!==null,instancingMorph:Oe&&F.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:je,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:P,aoMap:G,lightMap:W,bumpMap:$,normalMap:J,displacementMap:fe,emissiveMap:he,normalMapObjectSpace:J&&_.normalMapType===tm,normalMapTangentSpace:J&&_.normalMapType===La,packedNormalMap:J&&_.normalMapType===La&&TM(_.normalMap.format),metalnessMap:ge,roughnessMap:de,anisotropy:H,anisotropyMap:j,clearcoat:Xe,clearcoatMap:se,clearcoatNormalMap:ve,clearcoatRoughnessMap:Se,dispersion:Qe,iridescence:B,iridescenceMap:oe,iridescenceThicknessMap:ae,sheen:b,sheenColorMap:we,sheenRoughnessMap:We,specularMap:Te,specularColorMap:be,specularIntensityMap:ke,transmission:K,transmissionMap:Je,thicknessMap:nt,gradientMap:q,opaque:_.transparent===!1&&_.blending===Zs&&_.alphaToCoverage===!1,alphaMap:Ee,alphaTest:le,alphaHash:Ce,combine:_.combine,mapUv:ht&&g(_.map.channel),aoMapUv:G&&g(_.aoMap.channel),lightMapUv:W&&g(_.lightMap.channel),bumpMapUv:$&&g(_.bumpMap.channel),normalMapUv:J&&g(_.normalMap.channel),displacementMapUv:fe&&g(_.displacementMap.channel),emissiveMapUv:he&&g(_.emissiveMap.channel),metalnessMapUv:ge&&g(_.metalnessMap.channel),roughnessMapUv:de&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:se&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:We&&g(_.sheenRoughnessMap.channel),specularMapUv:Te&&g(_.specularMap.channel),specularColorMapUv:be&&g(_.specularColorMap.channel),specularIntensityMapUv:ke&&g(_.specularIntensityMap.channel),transmissionMapUv:Je&&g(_.transmissionMap.channel),thicknessMapUv:nt&&g(_.thicknessMap.channel),alphaMapUv:Ee&&g(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(J||H),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!C.attributes.uv&&(ht||Ee),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&J===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let T=f[_.type],R;if(T){let N=Vi[T];R=mn.clone(N.uniforms)}else R=_.uniforms;return R}function M(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new SM(i,T,_,s),l.push(R),h.set(T,R)),R}function w(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function v(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:w,releaseShaderCache:E,programs:l,dispose:v}}function EM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function AM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Om(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,f,g,x,m,p){let y=a(d,f,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,x,m,p){let y=a(d,f,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f,g){t.length>1&&t.sort(d||AM),n.length>1&&n.sort(f||Fm),s.length>1&&s.sort(f||Fm),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function CM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Om,i.set(n,[o])):s>=r.length?(o=new Om,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function RM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ne};break;case"SpotLight":t={position:new U,direction:new U,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function PM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var IM=0;function LM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function DM(i){let e=new RM,t=PM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Ge,o=new Ge;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,S=0,M=0,w=0,E=0,v=0;l.sort(LM);for(let T=0,R=l.length;T<R;T++){let N=l[T],F=N.color,k=N.intensity,A=N.distance,C=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Is?C=N.shadow.map.texture:C=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(N.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(N.sh.coefficients[I],k);v++}else if(N.isDirectionalLight){let I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let O=N.shadow,V=t.get(N);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=C,n.directionalShadowMatrix[f]=N.shadow.matrix,y++}n.directional[f]=I,f++}else if(N.isSpotLight){let I=e.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(F).multiplyScalar(k),I.distance=A,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,n.spot[x]=I;let O=N.shadow;if(N.map&&(n.spotLightMap[w]=N.map,w++,O.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[x]=O.matrix,N.castShadow){let V=t.get(N);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=C,M++}x++}else if(N.isRectAreaLight){let I=e.get(N);I.color.copy(F).multiplyScalar(k),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=I,m++}else if(N.isPointLight){let I=e.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity),I.distance=N.distance,I.decay=N.decay,N.castShadow){let O=N.shadow,V=t.get(N);V.shadowIntensity=O.intensity,V.shadowBias=O.bias,V.shadowNormalBias=O.normalBias,V.shadowRadius=O.radius,V.shadowMapSize=O.mapSize,V.shadowCameraNear=O.camera.near,V.shadowCameraFar=O.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=C,n.pointShadowMatrix[g]=N.shadow.matrix,S++}n.point[g]=I,g++}else if(N.isHemisphereLight){let I=e.get(N);I.skyColor.copy(N.color).multiplyScalar(k),I.groundColor.copy(N.groundColor).multiplyScalar(k),n.hemi[p]=I,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==y||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=v,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=y,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=v,n.version=IM++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let S=l[p];if(S.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(S.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Bm(i){let e=new DM(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function NM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Bm(i),e.set(s,[a])):r>=o.length?(a=new Bm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FM=`uniform sampler2D shadow_pass;
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
}`,OM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],BM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],zm=new Ge,Na=new U,_f=new U;function zM(i,e,t){let n=new Es,s=new ce,r=new ce,o=new _t,a=new oc,c=new ac,l={},h=t.maxTextureSize,u={[Jn]:Mn,[Mn]:Jn,[An]:An},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:UM,fragmentShader:FM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pa;let p=this.type;this.render=function(E,v,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===_c&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pa);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending($t),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&v.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(C=>C.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,C=E.length;A<C;A++){let I=E[A],O=I.shadow;if(O===void 0){ze("WebGLShadowMap:",I,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let P=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=P,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===to){if(I.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new kt(s.x,s.y,{format:Is,type:Ot,minFilter:yt,magFilter:yt,generateMipmaps:!1}),O.map.texture.name=I.name+".shadowMap",O.map.depthTexture=new gi(s.x,s.y,Pn),O.map.depthTexture.name=I.name+".shadowMapDepth",O.map.depthTexture.format=Li,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt}else I.isPointLight?(O.map=new hh(s.x),O.map.depthTexture=new jl(s.x,yi)):(O.map=new kt(s.x,s.y),O.map.depthTexture=new gi(s.x,s.y,yi)),O.map.depthTexture.name=I.name+".shadowMap",O.map.depthTexture.format=Li,this.type===pa?(O.map.depthTexture.compareFunction=P?oh:rh,O.map.depthTexture.minFilter=yt,O.map.depthTexture.magFilter=yt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=zt,O.map.depthTexture.magFilter=zt);O.camera.updateProjectionMatrix()}let z=O.map.isWebGLCubeRenderTarget?6:1;for(let X=0;X<z;X++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,X),i.clear();else{X===0&&(i.setRenderTarget(O.map),i.clear());let Y=O.getViewport(X);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(o)}if(I.isPointLight){let Y=O.camera,re=O.matrix,_e=I.distance||Y.far;_e!==Y.far&&(Y.far=_e,Y.updateProjectionMatrix()),Na.setFromMatrixPosition(I.matrixWorld),Y.position.copy(Na),_f.copy(Y.position),_f.add(OM[X]),Y.up.copy(BM[X]),Y.lookAt(_f),Y.updateMatrixWorld(),re.makeTranslation(-Na.x,-Na.y,-Na.z),zm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(zm,Y.coordinateSystem,Y.reversedDepth)}else O.updateMatrices(I);n=O.getFrustum(),M(v,_,O.camera,I,this.type)}O.isPointLightShadow!==!0&&this.type===to&&y(O,_),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,N)};function y(E,v){let _=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new kt(s.x,s.y,{format:Is,type:Ot})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(v,null,_,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(v,null,_,f,x,null)}function S(E,v,_,T){let R=null,N=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=_.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let F=R.uuid,k=v.uuid,A=l[F];A===void 0&&(A={},l[F]=A);let C=A[k];C===void 0&&(C=R.clone(),A[k]=C,v.addEventListener("dispose",w)),R=C}if(R.visible=v.visible,R.wireframe=v.wireframe,T===to?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:u[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=_}return R}function M(E,v,_,T,R){if(E.visible===!1)return;if(E.layers.test(v.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===to)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let k=e.update(E),A=E.material;if(Array.isArray(A)){let C=k.groups;for(let I=0,O=C.length;I<O;I++){let V=C[I],P=A[V.materialIndex];if(P&&P.visible){let z=S(E,P,T,R);E.onBeforeShadow(i,E,v,_,k,z,V),i.renderBufferDirect(_,null,k,z,E,V),E.onAfterShadow(i,E,v,_,k,z,V)}}}else if(A.visible){let C=S(E,A,T,R);E.onBeforeShadow(i,E,v,_,k,C,null),i.renderBufferDirect(_,null,k,C,E,null),E.onAfterShadow(i,E,v,_,k,C,null)}}let F=E.children;for(let k=0,A=F.length;k<A;k++)M(F[k],v,_,T,R)}function w(E){E.target.removeEventListener("dispose",w);for(let _ in l){let T=l[_],R=E.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function kM(i,e){function t(){let q=!1,Ee=new _t,le=null,Ce=new _t(0,0,0,0);return{setMask:function(De){le!==De&&!q&&(i.colorMask(De,De,De,De),le=De)},setLocked:function(De){q=De},setClear:function(De,pe,qe,Be,Wt){Wt===!0&&(De*=Be,pe*=Be,qe*=Be),Ee.set(De,pe,qe,Be),Ce.equals(Ee)===!1&&(i.clearColor(De,pe,qe,Be),Ce.copy(Ee))},reset:function(){q=!1,le=null,Ce.set(-1,0,0,0)}}}function n(){let q=!1,Ee=!1,le=null,Ce=null,De=null;return{setReversed:function(pe){if(Ee!==pe){let qe=e.get("EXT_clip_control");pe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ee=pe;let Be=De;De=null,this.setClear(Be)}},getReversed:function(){return Ee},setTest:function(pe){pe?ue(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(pe){le!==pe&&!q&&(i.depthMask(pe),le=pe)},setFunc:function(pe){if(Ee&&(pe=um[pe]),Ce!==pe){switch(pe){case zl:i.depthFunc(i.NEVER);break;case kl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=pe}},setLocked:function(pe){q=pe},setClear:function(pe){De!==pe&&(De=pe,Ee&&(pe=1-pe),i.clearDepth(pe))},reset:function(){q=!1,le=null,Ce=null,De=null,Ee=!1}}}function s(){let q=!1,Ee=null,le=null,Ce=null,De=null,pe=null,qe=null,Be=null,Wt=null;return{setTest:function(Lt){q||(Lt?ue(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Lt){Ee!==Lt&&!q&&(i.stencilMask(Lt),Ee=Lt)},setFunc:function(Lt,Ei,Ai){(le!==Lt||Ce!==Ei||De!==Ai)&&(i.stencilFunc(Lt,Ei,Ai),le=Lt,Ce=Ei,De=Ai)},setOp:function(Lt,Ei,Ai){(pe!==Lt||qe!==Ei||Be!==Ai)&&(i.stencilOp(Lt,Ei,Ai),pe=Lt,qe=Ei,Be=Ai)},setLocked:function(Lt){q=Lt},setClear:function(Lt){Wt!==Lt&&(i.clearStencil(Lt),Wt=Lt)},reset:function(){q=!1,Ee=null,le=null,Ce=null,De=null,pe=null,qe=null,Be=null,Wt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,S=null,M=null,w=null,E=null,v=null,_=new Ne(0,0,0),T=0,R=!1,N=null,F=null,k=null,A=null,C=null,I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(P)[1]),O=V>=1):P.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),O=V>=2);let z=null,X={},Y=i.getParameter(i.SCISSOR_BOX),re=i.getParameter(i.VIEWPORT),_e=new _t().fromArray(Y),ye=new _t().fromArray(re);function te(q,Ee,le,Ce){let De=new Uint8Array(4),pe=i.createTexture();i.bindTexture(q,pe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<le;qe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Ee+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return pe}let me={};me[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(Ks),$(!1),J(Gu),ue(i.CULL_FACE),G($t);function ue(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Le(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Oe(q,Ee){return d[q]!==Ee?(i.bindFramebuffer(q,Ee),d[q]=Ee,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ee),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function He(q,Ee){let le=g,Ce=!1;if(q){le=f.get(Ee),le===void 0&&(le=[],f.set(Ee,le));let De=q.textures;if(le.length!==De.length||le[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,qe=De.length;pe<qe;pe++)le[pe]=i.COLOR_ATTACHMENT0+pe;le.length=De.length,Ce=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(le)}function ht(q){return x!==q?(i.useProgram(q),x=q,!0):!1}let je={[$n]:i.FUNC_ADD,[Fp]:i.FUNC_SUBTRACT,[Op]:i.FUNC_REVERSE_SUBTRACT};je[Bp]=i.MIN,je[zp]=i.MAX;let D={[lr]:i.ZERO,[kp]:i.ONE,[Vp]:i.SRC_COLOR,[Ol]:i.SRC_ALPHA,[Xp]:i.SRC_ALPHA_SATURATE,[xa]:i.DST_COLOR,[ga]:i.DST_ALPHA,[Gp]:i.ONE_MINUS_SRC_COLOR,[Bl]:i.ONE_MINUS_SRC_ALPHA,[Wp]:i.ONE_MINUS_DST_COLOR,[Hp]:i.ONE_MINUS_DST_ALPHA,[qp]:i.CONSTANT_COLOR,[Yp]:i.ONE_MINUS_CONSTANT_COLOR,[Zp]:i.CONSTANT_ALPHA,[Kp]:i.ONE_MINUS_CONSTANT_ALPHA};function G(q,Ee,le,Ce,De,pe,qe,Be,Wt,Lt){if(q===$t){m===!0&&(Le(i.BLEND),m=!1);return}if(m===!1&&(ue(i.BLEND),m=!0),q!==vc){if(q!==p||Lt!==R){if((y!==$n||w!==$n)&&(i.blendEquation(i.FUNC_ADD),y=$n,w=$n),Lt)switch(q){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFunc(i.ONE,i.ONE);break;case Hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",q);break}else switch(q){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Hu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",q);break}S=null,M=null,E=null,v=null,_.set(0,0,0),T=0,p=q,R=Lt}return}De=De||Ee,pe=pe||le,qe=qe||Ce,(Ee!==y||De!==w)&&(i.blendEquationSeparate(je[Ee],je[De]),y=Ee,w=De),(le!==S||Ce!==M||pe!==E||qe!==v)&&(i.blendFuncSeparate(D[le],D[Ce],D[pe],D[qe]),S=le,M=Ce,E=pe,v=qe),(Be.equals(_)===!1||Wt!==T)&&(i.blendColor(Be.r,Be.g,Be.b,Wt),_.copy(Be),T=Wt),p=q,R=!1}function W(q,Ee){q.side===An?Le(i.CULL_FACE):ue(i.CULL_FACE);let le=q.side===Mn;Ee&&(le=!le),$(le),q.blending===Zs&&q.transparent===!1?G($t):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let Ce=q.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),he(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(q){N!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),N=q)}function J(q){q!==Np?(ue(i.CULL_FACE),q!==F&&(q===Gu?i.cullFace(i.BACK):q===Up?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),F=q}function fe(q){q!==k&&(O&&i.lineWidth(q),k=q)}function he(q,Ee,le){q?(ue(i.POLYGON_OFFSET_FILL),(A!==Ee||C!==le)&&(A=Ee,C=le,o.getReversed()&&(Ee=-Ee),i.polygonOffset(Ee,le))):Le(i.POLYGON_OFFSET_FILL)}function ge(q){q?ue(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function de(q){q===void 0&&(q=i.TEXTURE0+I-1),z!==q&&(i.activeTexture(q),z=q)}function H(q,Ee,le){le===void 0&&(z===null?le=i.TEXTURE0+I-1:le=z);let Ce=X[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},X[le]=Ce),(Ce.type!==q||Ce.texture!==Ee)&&(z!==le&&(i.activeTexture(le),z=le),i.bindTexture(q,Ee||me[q]),Ce.type=q,Ce.texture=Ee)}function Xe(){let q=X[z];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function b(){try{i.texSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function K(){try{i.texSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function se(){try{i.compressedTexSubImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function ve(){try{i.texStorage2D(...arguments)}catch(q){et("WebGLState:",q)}}function Se(){try{i.texStorage3D(...arguments)}catch(q){et("WebGLState:",q)}}function oe(){try{i.texImage2D(...arguments)}catch(q){et("WebGLState:",q)}}function ae(){try{i.texImage3D(...arguments)}catch(q){et("WebGLState:",q)}}function we(q){return u[q]!==void 0?u[q]:i.getParameter(q)}function We(q,Ee){u[q]!==Ee&&(i.pixelStorei(q,Ee),u[q]=Ee)}function Te(q){_e.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function be(q){ye.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ye.copy(q))}function ke(q,Ee){let le=l.get(Ee);le===void 0&&(le=new WeakMap,l.set(Ee,le));let Ce=le.get(q);Ce===void 0&&(Ce=i.getUniformBlockIndex(Ee,q.name),le.set(q,Ce))}function Je(q,Ee){let Ce=l.get(Ee).get(q);c.get(Ee)!==Ce&&(i.uniformBlockBinding(Ee,Ce,q.__bindingPointIndex),c.set(Ee,Ce))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},z=null,X={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,S=null,M=null,w=null,E=null,v=null,_=new Ne(0,0,0),T=0,R=!1,N=null,F=null,k=null,A=null,C=null,_e.set(0,0,i.canvas.width,i.canvas.height),ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:Le,bindFramebuffer:Oe,drawBuffers:He,useProgram:ht,setBlending:G,setMaterial:W,setFlipSided:$,setCullFace:J,setLineWidth:fe,setPolygonOffset:he,setScissorTest:ge,activeTexture:de,bindTexture:H,unbindTexture:Xe,compressedTexImage2D:Qe,compressedTexImage3D:B,texImage2D:oe,texImage3D:ae,pixelStorei:We,getParameter:we,updateUBOMapping:ke,uniformBlockBinding:Je,texStorage2D:ve,texStorage3D:Se,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:j,compressedTexSubImage3D:se,scissor:Te,viewport:be,reset:nt}}function VM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(B,b){return g?new OffscreenCanvas(B,b):Hr("canvas")}function m(B,b,K){let j=1,se=Qe(B);if((se.width>K||se.height>K)&&(j=K/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let ve=Math.floor(j*se.width),Se=Math.floor(j*se.height);d===void 0&&(d=x(ve,Se));let oe=b?x(ve,Se):d;return oe.width=ve,oe.height=Se,oe.getContext("2d").drawImage(B,0,0,ve,Se),ze("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ve+"x"+Se+")."),oe}else return"data"in B&&ze("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),B;return B}function p(B){return B.generateMipmaps}function y(B){i.generateMipmap(B)}function S(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(B,b,K,j,se,ve=!1){if(B!==null){if(i[B]!==void 0)return i[B];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Se;j&&(Se=e.get("EXT_texture_norm16"),Se||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=b;if(b===i.RED&&(K===i.FLOAT&&(oe=i.R32F),K===i.HALF_FLOAT&&(oe=i.R16F),K===i.UNSIGNED_BYTE&&(oe=i.R8),K===i.UNSIGNED_SHORT&&Se&&(oe=Se.R16_EXT),K===i.SHORT&&Se&&(oe=Se.R16_SNORM_EXT)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(oe=i.R8UI),K===i.UNSIGNED_SHORT&&(oe=i.R16UI),K===i.UNSIGNED_INT&&(oe=i.R32UI),K===i.BYTE&&(oe=i.R8I),K===i.SHORT&&(oe=i.R16I),K===i.INT&&(oe=i.R32I)),b===i.RG&&(K===i.FLOAT&&(oe=i.RG32F),K===i.HALF_FLOAT&&(oe=i.RG16F),K===i.UNSIGNED_BYTE&&(oe=i.RG8),K===i.UNSIGNED_SHORT&&Se&&(oe=Se.RG16_EXT),K===i.SHORT&&Se&&(oe=Se.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(oe=i.RG8UI),K===i.UNSIGNED_SHORT&&(oe=i.RG16UI),K===i.UNSIGNED_INT&&(oe=i.RG32UI),K===i.BYTE&&(oe=i.RG8I),K===i.SHORT&&(oe=i.RG16I),K===i.INT&&(oe=i.RG32I)),b===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),K===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),K===i.UNSIGNED_INT&&(oe=i.RGB32UI),K===i.BYTE&&(oe=i.RGB8I),K===i.SHORT&&(oe=i.RGB16I),K===i.INT&&(oe=i.RGB32I)),b===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),K===i.UNSIGNED_INT&&(oe=i.RGBA32UI),K===i.BYTE&&(oe=i.RGBA8I),K===i.SHORT&&(oe=i.RGBA16I),K===i.INT&&(oe=i.RGBA32I)),b===i.RGB&&(K===i.UNSIGNED_SHORT&&Se&&(oe=Se.RGB16_EXT),K===i.SHORT&&Se&&(oe=Se.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),b===i.RGBA){let ae=ve?Uo:ot.getTransfer(se);K===i.FLOAT&&(oe=i.RGBA32F),K===i.HALF_FLOAT&&(oe=i.RGBA16F),K===i.UNSIGNED_BYTE&&(oe=ae===xt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Se&&(oe=Se.RGBA16_EXT),K===i.SHORT&&Se&&(oe=Se.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(B,b){let K;return B?b===null||b===yi||b===Ps?K=i.DEPTH24_STENCIL8:b===Pn?K=i.DEPTH32F_STENCIL8:b===so&&(K=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===Ps?K=i.DEPTH_COMPONENT24:b===Pn?K=i.DEPTH_COMPONENT32F:b===so&&(K=i.DEPTH_COMPONENT16),K}function E(B,b){return p(B)===!0||B.isFramebufferTexture&&B.minFilter!==zt&&B.minFilter!==yt?Math.log2(Math.max(b.width,b.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?b.mipmaps.length:1}function v(B){let b=B.target;b.removeEventListener("dispose",v),T(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function _(B){let b=B.target;b.removeEventListener("dispose",_),N(b)}function T(B){let b=n.get(B);if(b.__webglInit===void 0)return;let K=B.source,j=f.get(K);if(j){let se=j[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&R(B),Object.keys(j).length===0&&f.delete(K)}n.remove(B)}function R(B){let b=n.get(B);i.deleteTexture(b.__webglTexture);let K=B.source,j=f.get(K);delete j[b.__cacheKey],o.memory.textures--}function N(B){let b=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let se=0;se<b.__webglFramebuffer[j].length;se++)i.deleteFramebuffer(b.__webglFramebuffer[j][se]);else i.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)i.deleteFramebuffer(b.__webglFramebuffer[j]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let K=B.textures;for(let j=0,se=K.length;j<se;j++){let ve=n.get(K[j]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(K[j])}n.remove(B)}let F=0;function k(){F=0}function A(){return F}function C(B){F=B}function I(){let B=F;return B>=s.maxTextures&&ze("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+s.maxTextures),F+=1,B}function O(B){let b=[];return b.push(B.wrapS),b.push(B.wrapT),b.push(B.wrapR||0),b.push(B.magFilter),b.push(B.minFilter),b.push(B.anisotropy),b.push(B.internalFormat),b.push(B.format),b.push(B.type),b.push(B.generateMipmaps),b.push(B.premultiplyAlpha),b.push(B.flipY),b.push(B.unpackAlignment),b.push(B.colorSpace),b.join()}function V(B,b){let K=n.get(B);if(B.isVideoTexture&&H(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&K.__version!==B.version){let j=B.image;if(j===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(K,B,b);return}}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function P(B,b){let K=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){Le(K,B,b);return}else B.isExternalTexture&&(K.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function z(B,b){let K=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&K.__version!==B.version){Le(K,B,b);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function X(B,b){let K=n.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&K.__version!==B.version){Oe(K,B,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let Y={[tn]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Vr]:i.MIRRORED_REPEAT},re={[zt]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},_e={[nm]:i.NEVER,[am]:i.ALWAYS,[im]:i.LESS,[rh]:i.LEQUAL,[sm]:i.EQUAL,[oh]:i.GEQUAL,[rm]:i.GREATER,[om]:i.NOTEQUAL};function ye(B,b){if(b.type===Pn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yt||b.magFilter===io||b.magFilter===ur||b.magFilter===Cn||b.minFilter===yt||b.minFilter===io||b.minFilter===ur||b.minFilter===Cn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,Y[b.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,Y[b.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,Y[b.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,re[b.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,re[b.minFilter]),b.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===zt||b.minFilter!==ur&&b.minFilter!==Cn||b.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(B,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function te(B,b){let K=!1;B.__webglInit===void 0&&(B.__webglInit=!0,b.addEventListener("dispose",v));let j=b.source,se=f.get(j);se===void 0&&(se={},f.set(j,se));let ve=O(b);if(ve!==B.__cacheKey){se[ve]===void 0&&(se[ve]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),se[ve].usedTimes++;let Se=se[B.__cacheKey];Se!==void 0&&(se[B.__cacheKey].usedTimes--,Se.usedTimes===0&&R(b)),B.__cacheKey=ve,B.__webglTexture=se[ve].texture}return K}function me(B,b,K){return Math.floor(Math.floor(B/K)/b)}function ue(B,b,K,j){let ve=B.updateRanges;if(ve.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,K,j,b.data);else{ve.sort((We,Te)=>We.start-Te.start);let Se=0;for(let We=1;We<ve.length;We++){let Te=ve[Se],be=ve[We],ke=Te.start+Te.count,Je=me(be.start,b.width,4),nt=me(Te.start,b.width,4);be.start<=ke+1&&Je===nt&&me(be.start+be.count-1,b.width,4)===Je?Te.count=Math.max(Te.count,be.start+be.count-Te.start):(++Se,ve[Se]=be)}ve.length=Se+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let We=0,Te=ve.length;We<Te;We++){let be=ve[We],ke=Math.floor(be.start/4),Je=Math.ceil(be.count/4),nt=ke%b.width,q=Math.floor(ke/b.width),Ee=Je,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,nt,q,Ee,le,K,j,b.data)}B.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Le(B,b,K){let j=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=i.TEXTURE_3D);let se=te(B,b),ve=b.source;t.bindTexture(j,B.__webglTexture,i.TEXTURE0+K);let Se=n.get(ve);if(ve.version!==Se.__version||se===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let le=ot.getPrimaries(ot.workingColorSpace),Ce=b.colorSpace===hs?null:ot.getPrimaries(b.colorSpace),De=b.colorSpace===hs||le===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ae=m(b.image,!1,s.maxTextureSize);ae=Xe(b,ae);let we=r.convert(b.format,b.colorSpace),We=r.convert(b.type),Te=M(b.internalFormat,we,We,b.normalized,b.colorSpace,b.isVideoTexture);ye(j,b);let be,ke=b.mipmaps,Je=b.isVideoTexture!==!0,nt=Se.__version===void 0||se===!0,q=ve.dataReady,Ee=E(b,ae);if(b.isDepthTexture)Te=w(b.format===zi,b.type),nt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Te,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Te,ae.width,ae.height,0,we,We,null));else if(b.isDataTexture)if(ke.length>0){Je&&nt&&t.texStorage2D(i.TEXTURE_2D,Ee,Te,ke[0].width,ke[0].height);for(let le=0,Ce=ke.length;le<Ce;le++)be=ke[le],Je?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,we,We,be.data):t.texImage2D(i.TEXTURE_2D,le,Te,be.width,be.height,0,we,We,be.data);b.generateMipmaps=!1}else Je?(nt&&t.texStorage2D(i.TEXTURE_2D,Ee,Te,ae.width,ae.height),q&&ue(b,ae,we,We)):t.texImage2D(i.TEXTURE_2D,0,Te,ae.width,ae.height,0,we,We,ae.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Te,ke[0].width,ke[0].height,ae.depth);for(let le=0,Ce=ke.length;le<Ce;le++)if(be=ke[le],b.format!==Sn)if(we!==null)if(Je){if(q)if(b.layerUpdates.size>0){let De=af(be.width,be.height,b.format,b.type);for(let pe of b.layerUpdates){let qe=be.data.subarray(pe*De/be.data.BYTES_PER_ELEMENT,(pe+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,pe,be.width,be.height,1,we,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,ae.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Te,be.width,be.height,ae.depth,0,be.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,be.width,be.height,ae.depth,we,We,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Te,be.width,be.height,ae.depth,0,we,We,be.data)}else{Je&&nt&&t.texStorage2D(i.TEXTURE_2D,Ee,Te,ke[0].width,ke[0].height);for(let le=0,Ce=ke.length;le<Ce;le++)be=ke[le],b.format!==Sn?we!==null?Je?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Te,be.width,be.height,0,be.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,be.width,be.height,we,We,be.data):t.texImage2D(i.TEXTURE_2D,le,Te,be.width,be.height,0,we,We,be.data)}else if(b.isDataArrayTexture)if(Je){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Te,ae.width,ae.height,ae.depth),q)if(b.layerUpdates.size>0){let le=af(ae.width,ae.height,b.format,b.type);for(let Ce of b.layerUpdates){let De=ae.data.subarray(Ce*le/ae.data.BYTES_PER_ELEMENT,(Ce+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,ae.width,ae.height,1,we,We,De)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,we,We,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,we,We,ae.data);else if(b.isData3DTexture)Je?(nt&&t.texStorage3D(i.TEXTURE_3D,Ee,Te,ae.width,ae.height,ae.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,we,We,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,we,We,ae.data);else if(b.isFramebufferTexture){if(nt)if(Je)t.texStorage2D(i.TEXTURE_2D,Ee,Te,ae.width,ae.height);else{let le=ae.width,Ce=ae.height;for(let De=0;De<Ee;De++)t.texImage2D(i.TEXTURE_2D,De,Te,le,Ce,0,we,We,null),le>>=1,Ce>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ae.parentNode!==le){le.appendChild(ae),u.add(b),le.onpaint=Ce=>{let De=Ce.changedElements;for(let pe of u)De.includes(pe.image)&&(pe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let De=i.RGBA,pe=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,De,pe,qe,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Je&&nt){let le=Qe(ke[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Te,le.width,le.height)}for(let le=0,Ce=ke.length;le<Ce;le++)be=ke[le],Je?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,we,We,be):t.texImage2D(i.TEXTURE_2D,le,Te,we,We,be);b.generateMipmaps=!1}else if(Je){if(nt){let le=Qe(ae);t.texStorage2D(i.TEXTURE_2D,Ee,Te,le.width,le.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,We,ae)}else t.texImage2D(i.TEXTURE_2D,0,Te,we,We,ae);p(b)&&y(j),Se.__version=ve.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function Oe(B,b,K){if(b.image.length!==6)return;let j=te(B,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+K);let ve=n.get(se);if(se.version!==ve.__version||j===!0){t.activeTexture(i.TEXTURE0+K);let Se=ot.getPrimaries(ot.workingColorSpace),oe=b.colorSpace===hs?null:ot.getPrimaries(b.colorSpace),ae=b.colorSpace===hs||Se===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let we=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let pe=0;pe<6;pe++)!we&&!We?Te[pe]=m(b.image[pe],!0,s.maxCubemapSize):Te[pe]=We?b.image[pe].image:b.image[pe],Te[pe]=Xe(b,Te[pe]);let be=Te[0],ke=r.convert(b.format,b.colorSpace),Je=r.convert(b.type),nt=M(b.internalFormat,ke,Je,b.normalized,b.colorSpace),q=b.isVideoTexture!==!0,Ee=ve.__version===void 0||j===!0,le=se.dataReady,Ce=E(b,be);ye(i.TEXTURE_CUBE_MAP,b);let De;if(we){q&&Ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,nt,be.width,be.height);for(let pe=0;pe<6;pe++){De=Te[pe].mipmaps;for(let qe=0;qe<De.length;qe++){let Be=De[qe];b.format!==Sn?ke!==null?q?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,nt,Be.width,Be.height,0,Be.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,nt,Be.width,Be.height,0,ke,Je,Be.data)}}}else{if(De=b.mipmaps,q&&Ee){De.length>0&&Ce++;let pe=Qe(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,nt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(We){q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te[pe].width,Te[pe].height,ke,Je,Te[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,nt,Te[pe].width,Te[pe].height,0,ke,Je,Te[pe].data);for(let qe=0;qe<De.length;qe++){let Wt=De[qe].image[pe].image;q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,Wt.width,Wt.height,ke,Je,Wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,nt,Wt.width,Wt.height,0,ke,Je,Wt.data)}}else{q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke,Je,Te[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,nt,ke,Je,Te[pe]);for(let qe=0;qe<De.length;qe++){let Be=De[qe];q?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,ke,Je,Be.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,nt,ke,Je,Be.image[pe])}}}p(b)&&y(i.TEXTURE_CUBE_MAP),ve.__version=se.version,b.onUpdate&&b.onUpdate(b)}B.__version=b.version}function He(B,b,K,j,se,ve){let Se=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),ae=M(K.internalFormat,Se,oe,K.normalized,K.colorSpace),we=n.get(b),We=n.get(K);if(We.__renderTarget=b,!we.__hasExternalTextures){let Te=Math.max(1,b.width>>ve),be=Math.max(1,b.height>>ve);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,ve,ae,Te,be,b.depth,0,Se,oe,null):t.texImage2D(se,ve,ae,Te,be,0,Se,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,B),de(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,se,We.__webglTexture,0,ge(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,se,We.__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(B,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,B),b.depthBuffer){let j=b.depthTexture,se=j&&j.isDepthTexture?j.type:null,ve=w(b.stencilBuffer,se),Se=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(b),ve,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(b),ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ve,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,B)}else{let j=b.textures;for(let se=0;se<j.length;se++){let ve=j[se],Se=r.convert(ve.format,ve.colorSpace),oe=r.convert(ve.type),ae=M(ve.internalFormat,Se,oe,ve.normalized,ve.colorSpace);de(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(b),ae,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(b),ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ae,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(B,b,K){let j=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,B),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=n.get(b.depthTexture);if(se.__renderTarget=b,(!se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j){if(se.__webglInit===void 0&&(se.__webglInit=!0,b.depthTexture.addEventListener("dispose",v)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),ye(i.TEXTURE_CUBE_MAP,b.depthTexture);let we=r.convert(b.depthTexture.format),We=r.convert(b.depthTexture.type),Te;b.depthTexture.format===Li?Te=i.DEPTH_COMPONENT24:b.depthTexture.format===zi&&(Te=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,b.width,b.height,0,we,We,null)}}else V(b.depthTexture,0);let ve=se.__webglTexture,Se=ge(b),oe=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,ae=b.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Li)de(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,ve,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,ve,0);else if(b.depthTexture.format===zi)de(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,ve,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(B){let b=n.get(B),K=B.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==B.depthTexture){let j=B.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=j}if(B.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let j=0;j<6;j++)je(b.__webglFramebuffer[j],B,j);else{let j=B.texture.mipmaps;j&&j.length>0?je(b.__webglFramebuffer[0],B,0):je(b.__webglFramebuffer,B,0)}else if(K){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(b.__webglDepthbuffer[j],B,!1);else{let se=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ve)}}else{let j=B.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ht(b.__webglDepthbuffer,B,!1);else{let se=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,ve)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(B,b,K){let j=n.get(B);b!==void 0&&He(j.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&D(B)}function W(B){let b=B.texture,K=n.get(B),j=n.get(b);B.addEventListener("dispose",_);let se=B.textures,ve=B.isWebGLCubeRenderTarget===!0,Se=se.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=b.version,o.memory.textures++),ve){K.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[oe]=[];for(let ae=0;ae<b.mipmaps.length;ae++)K.__webglFramebuffer[oe][ae]=i.createFramebuffer()}else K.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let oe=0;oe<b.mipmaps.length;oe++)K.__webglFramebuffer[oe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Se)for(let oe=0,ae=se.length;oe<ae;oe++){let we=n.get(se[oe]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&de(B)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let oe=0;oe<se.length;oe++){let ae=se[oe];K.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[oe]);let we=r.convert(ae.format,ae.colorSpace),We=r.convert(ae.type),Te=M(ae.internalFormat,we,We,ae.normalized,ae.colorSpace,B.isXRRenderTarget===!0),be=ge(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Te,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(K.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ye(i.TEXTURE_CUBE_MAP,b);for(let oe=0;oe<6;oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)He(K.__webglFramebuffer[oe][ae],B,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else He(K.__webglFramebuffer[oe],B,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(b)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,ae=se.length;oe<ae;oe++){let we=se[oe],We=n.get(we),Te=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Te=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,We.__webglTexture),ye(Te,we),He(K.__webglFramebuffer,B,we,i.COLOR_ATTACHMENT0+oe,Te,0),p(we)&&y(Te)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(oe=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),ye(oe,b),b.mipmaps&&b.mipmaps.length>0)for(let ae=0;ae<b.mipmaps.length;ae++)He(K.__webglFramebuffer[ae],B,b,i.COLOR_ATTACHMENT0,oe,ae);else He(K.__webglFramebuffer,B,b,i.COLOR_ATTACHMENT0,oe,0);p(b)&&y(oe),t.unbindTexture()}B.depthBuffer&&D(B)}function $(B){let b=B.textures;for(let K=0,j=b.length;K<j;K++){let se=b[K];if(p(se)){let ve=S(B),Se=n.get(se).__webglTexture;t.bindTexture(ve,Se),y(ve),t.unbindTexture()}}}let J=[],fe=[];function he(B){if(B.samples>0){if(de(B)===!1){let b=B.textures,K=B.width,j=B.height,se=i.COLOR_BUFFER_BIT,ve=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(B),oe=b.length>1;if(oe)for(let we=0;we<b.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ae=B.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<b.length;we++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let We=n.get(b[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,K,j,0,0,K,j,se,i.NEAREST),c===!0&&(J.length=0,fe.length=0,J.push(i.COLOR_ATTACHMENT0+we),B.depthBuffer&&B.resolveDepthBuffer===!1&&(J.push(ve),fe.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<b.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let We=n.get(b[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&c){let b=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ge(B){return Math.min(s.maxSamples,B.samples)}function de(B){let b=n.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function H(B){let b=o.render.frame;h.get(B)!==b&&(h.set(B,b),B.update())}function Xe(B,b){let K=B.colorSpace,j=B.format,se=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||K!==_n&&K!==hs&&(ot.getTransfer(K)===xt?(j!==Sn||se!==Rn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",K)),b}function Qe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=C,this.setTexture2D=V,this.setTexture2DArray=P,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=G,this.setupRenderTarget=W,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=He,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GM(i,e){function t(n,s=hs){let r,o=ot.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===bc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yu)return i.BYTE;if(n===Zu)return i.SHORT;if(n===so)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ot)return i.HALF_FLOAT;if(n===$u)return i.ALPHA;if(n===ju)return i.RGB;if(n===Sn)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===Ec)return i.RED_INTEGER;if(n===Is)return i.RG;if(n===Ac)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===wa||n===Ea||n===Aa||n===Ca)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rc||n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Ra||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Nc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fc)return r.COMPRESSED_R11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ra)return r.COMPRESSED_RG11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zc||n===kc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===Jc||n===$c||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===eh||n===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===ih||n===Pa||n===sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WM=`
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

}`,Ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mt({vertexShader:HM,fragmentShader:WM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Af=class extends Di{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Ef,p={},y=t.getContextAttributes(),S=null,M=null,w=[],E=[],v=new ce,_=null,T=new Bt;T.viewport=new _t;let R=new Bt;R.viewport=new _t;let N=[T,R],F=new gc,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let me=w[te];return me===void 0&&(me=new Yr,w[te]=me),me.getTargetRaySpace()},this.getControllerGrip=function(te){let me=w[te];return me===void 0&&(me=new Yr,w[te]=me),me.getGripSpace()},this.getHand=function(te){let me=w[te];return me===void 0&&(me=new Yr,w[te]=me),me.getHandSpace()};function C(te){let me=E.indexOf(te.inputSource);if(me===-1)return;let ue=w[me];ue!==void 0&&(ue.update(te.inputSource,te.frame,l||o),ue.dispatchEvent({type:te.type,data:te.inputSource}))}function I(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",O);for(let te=0;te<w.length;te++){let me=E[te];me!==null&&(E[te]=null,w[te].disconnect(me))}k=null,A=null,m.reset();for(let te in p)delete p[te];e.setRenderTarget(S),f=null,d=null,u=null,s=null,M=null,ye.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",I),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,Oe=null;y.depth&&(Oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?zi:Li,Le=y.stencil?Ps:yi);let He={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new kt(d.textureWidth,d.textureHeight,{format:Sn,type:Rn,depthTexture:new gi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new kt(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(te){for(let me=0;me<te.removed.length;me++){let ue=te.removed[me],Le=E.indexOf(ue);Le>=0&&(E[Le]=null,w[Le].disconnect(ue))}for(let me=0;me<te.added.length;me++){let ue=te.added[me],Le=E.indexOf(ue);if(Le===-1){for(let He=0;He<w.length;He++)if(He>=E.length){E.push(ue),Le=He;break}else if(E[He]===null){E[He]=ue,Le=He;break}if(Le===-1)break}let Oe=w[Le];Oe&&Oe.connect(ue)}}let V=new U,P=new U;function z(te,me,ue){V.setFromMatrixPosition(me.matrixWorld),P.setFromMatrixPosition(ue.matrixWorld);let Le=V.distanceTo(P),Oe=me.projectionMatrix.elements,He=ue.projectionMatrix.elements,ht=Oe[14]/(Oe[10]-1),je=Oe[14]/(Oe[10]+1),D=(Oe[9]+1)/Oe[5],G=(Oe[9]-1)/Oe[5],W=(Oe[8]-1)/Oe[0],$=(He[8]+1)/He[0],J=ht*W,fe=ht*$,he=Le/(-W+$),ge=he*-W;if(me.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ge),te.translateZ(he),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Oe[10]===-1)te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let de=ht+he,H=je+he,Xe=J-ge,Qe=fe+(Le-ge),B=D*je/H*de,b=G*je/H*de;te.projectionMatrix.makePerspective(Xe,Qe,B,b,de,H),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function X(te,me){me===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(me.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let me=te.near,ue=te.far;m.texture!==null&&(m.depthNear>0&&(me=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),F.near=R.near=T.near=me,F.far=R.far=T.far=ue,(k!==F.near||A!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,A=F.far),F.layers.mask=te.layers.mask|6,T.layers.mask=F.layers.mask&-5,R.layers.mask=F.layers.mask&-3;let Le=te.parent,Oe=F.cameras;X(F,Le);for(let He=0;He<Oe.length;He++)X(Oe[He],Le);Oe.length===2?z(F,T,R):F.projectionMatrix.copy(T.projectionMatrix),Y(te,F,Le)};function Y(te,me,ue){ue===null?te.matrix.copy(me.matrixWorld):(te.matrix.copy(ue.matrixWorld),te.matrix.invert(),te.matrix.multiply(me.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(me.projectionMatrix),te.projectionMatrixInverse.copy(me.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=js*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(te){return p[te]};let re=null;function _e(te,me){if(h=me.getViewerPose(l||o),g=me,h!==null){let ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Le=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let je=0;je<ue.length;je++){let D=ue[je],G=null;if(f!==null)G=f.getViewport(D);else{let $=u.getViewSubImage(d,D);G=$.viewport,je===0&&(e.setRenderTargetTextures(M,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(M))}let W=N[je];W===void 0&&(W=new Bt,W.layers.enable(je),W.viewport=new _t,N[je]=W),W.matrix.fromArray(D.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(D.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(G.x,G.y,G.width,G.height),je===0&&(F.matrix.copy(W.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(W)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let je=u.getDepthInformation(ue[0]);je&&je.isValid&&je.texture&&m.init(je,s.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<ue.length;je++){let D=ue[je].camera;if(D){let G=p[D];G||(G=new Xo,p[D]=G);let W=u.getCameraImage(D);G.sourceTexture=W}}}}for(let ue=0;ue<w.length;ue++){let Le=E[ue],Oe=w[ue];Le!==null&&Oe!==void 0&&Oe.update(Le,me,l||o)}re&&re(te,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let ye=new km;ye.setAnimationLoop(_e),this.setAnimationLoop=function(te){re=te},this.dispose=function(){}}},XM=new Ge,qm=new st;qm.set(-1,0,0,0,1,0,0,0,1);function qM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function YM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let E=w.program;n.uniformBlockBinding(M,E)}function l(M,w){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",y));let v=w.program;n.updateUBOMapping(M,v);let _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){let w=u();M.__bindingPointIndex=w;let E=i.createBuffer(),v=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let w=s[M.id],E=M.uniforms,v=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,T=E.length;_<T;_++){let R=E[_];if(Array.isArray(R))for(let N=0,F=R.length;N<F;N++)f(R[N],_,N,v);else f(R,_,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,E,v){if(x(M,w,E,v)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let R=0;for(let N=0;N<T.length;N++){let F=T[N],k=p(F);g(F,M.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function g(M,w,E){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,E)}function x(M,w,E,v){let _=M.value,T=w+"_"+E;if(v[T]===void 0)return typeof _=="number"||typeof _=="boolean"?v[T]=_:ArrayBuffer.isView(_)?v[T]=_.slice():v[T]=_.clone(),!0;{let R=v[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return v[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(M){let w=M.uniforms,E=0,v=16;for(let T=0,R=w.length;T<R;T++){let N=Array.isArray(w[T])?w[T]:[w[T]];for(let F=0,k=N.length;F<k;F++){let A=N[F],C=Array.isArray(A.value)?A.value:[A.value];for(let I=0,O=C.length;I<O;I++){let V=C[I],P=p(V),z=E%v,X=z%P.boundary,Y=z+X;E+=X,Y!==0&&v-Y<P.storage&&(E+=v-Y),A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=E,E+=P.storage}}}let _=E%v;return _>0&&(E+=v-_),M.__size=E,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){let w=M.target;w.removeEventListener("dispose",y);let E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function S(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}var ZM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ki=null;function KM(){return ki===null&&(ki=new vn(ZM,16,16,Is,Ot),ki.name="DFG_LUT",ki.minFilter=yt,ki.magFilter=yt,ki.wrapS=Vn,ki.wrapT=Vn,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}var lo=class{constructor(e={}){let{canvas:t=lm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([Cc,Ac,Ec]),p=new Set([Rn,yi,so,Ps,bc,Tc]),y=new Uint32Array(4),S=new Int32Array(4),M=new U,w=null,E=null,v=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,F=null,k=null,A=null,C=null;this._outputColorSpace=dt;let I=0,O=0,V=null,P=-1,z=null,X=new _t,Y=new _t,re=null,_e=new Ne(0),ye=0,te=t.width,me=t.height,ue=1,Le=null,Oe=null,He=new _t(0,0,te,me),ht=new _t(0,0,te,me),je=!1,D=new Es,G=!1,W=!1,$=new Ge,J=new U,fe=new _t,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function de(){return V===null?ue:1}let H=n;function Xe(L,Z){return t.getContext(L,Z)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",Ei,!1),H===null){let Z="webgl2";if(H=Xe(Z,L),H===null)throw Xe(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(L){throw et("WebGLRenderer: "+L.message),L}let Qe,B,b,K,j,se,ve,Se,oe,ae,we,We,Te,be,ke,Je,nt,q,Ee,le,Ce,De,pe;function qe(){Qe=new ny(H),Qe.init(),Ce=new GM(H,Qe),B=new Zv(H,Qe,e,Ce),b=new kM(H,Qe),B.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),k=H.createFramebuffer(),A=H.createFramebuffer(),C=H.createFramebuffer(),K=new ry(H),j=new EM,se=new VM(H,Qe,b,j,B,Ce,K),ve=new ty(R),Se=new c1(H),De=new qv(H,Se),oe=new iy(H,Se,K,De),ae=new ay(H,oe,Se,De,K),q=new oy(H,B,se),ke=new Kv(j),we=new wM(R,ve,Qe,B,De,ke),We=new qM(R,j),Te=new CM,be=new NM(Qe),nt=new Xv(R,ve,b,ae,g,c),Je=new zM(R,ae,B),pe=new YM(H,K,B,b),Ee=new Yv(H,Qe,K),le=new sy(H,Qe,K),K.programs=we.programs,R.capabilities=B,R.extensions=Qe,R.properties=j,R.renderLists=Te,R.shadowMap=Je,R.state=b,R.info=K}qe(),x!==Rn&&(T=new cy(x,t.width,t.height,a,s,r));let Be=new Af(R,H);this.xr=Be,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let L=Qe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Qe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(L){L!==void 0&&(ue=L,this.setSize(te,me,!1))},this.getSize=function(L){return L.set(te,me)},this.setSize=function(L,Z,ie=!0){if(Be.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}te=L,me=Z,t.width=Math.floor(L*ue),t.height=Math.floor(Z*ue),ie===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(te*ue,me*ue).floor()},this.setDrawingBufferSize=function(L,Z,ie){te=L,me=Z,ue=ie,t.width=Math.floor(L*ie),t.height=Math.floor(Z*ie),this.setViewport(0,0,L,Z)},this.setEffects=function(L){if(x===Rn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let Z=0;Z<L.length;Z++)if(L[Z].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(X)},this.getViewport=function(L){return L.copy(He)},this.setViewport=function(L,Z,ie,Q){L.isVector4?He.set(L.x,L.y,L.z,L.w):He.set(L,Z,ie,Q),b.viewport(X.copy(He).multiplyScalar(ue).round())},this.getScissor=function(L){return L.copy(ht)},this.setScissor=function(L,Z,ie,Q){L.isVector4?ht.set(L.x,L.y,L.z,L.w):ht.set(L,Z,ie,Q),b.scissor(Y.copy(ht).multiplyScalar(ue).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(L){b.setScissorTest(je=L)},this.setOpaqueSort=function(L){Le=L},this.setTransparentSort=function(L){Oe=L},this.getClearColor=function(L){return L.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(L=!0,Z=!0,ie=!0){let Q=0;if(L){let ee=!1;if(V!==null){let Pe=V.texture.format;ee=m.has(Pe)}if(ee){let Pe=V.texture.type,Fe=p.has(Pe),Re=nt.getClearColor(),Ve=nt.getClearAlpha(),Ze=Re.r,rt=Re.g,ut=Re.b;Fe?(y[0]=Ze,y[1]=rt,y[2]=ut,y[3]=Ve,H.clearBufferuiv(H.COLOR,0,y)):(S[0]=Ze,S[1]=rt,S[2]=ut,S[3]=Ve,H.clearBufferiv(H.COLOR,0,S))}else Q|=H.COLOR_BUFFER_BIT}Z&&(Q|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),F=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Ei,!1),nt.dispose(),Te.dispose(),be.dispose(),j.dispose(),ve.dispose(),ae.dispose(),De.dispose(),pe.dispose(),we.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Dd),Be.removeEventListener("sessionend",Nd),ks.stop()};function Wt(L){L.preventDefault(),Fo("WebGLRenderer: Context Lost."),N=!0}function Lt(){Fo("WebGLRenderer: Context Restored."),N=!1;let L=K.autoReset,Z=Je.enabled,ie=Je.autoUpdate,Q=Je.needsUpdate,ee=Je.type;qe(),K.autoReset=L,Je.enabled=Z,Je.autoUpdate=ie,Je.needsUpdate=Q,Je.type=ee}function Ei(L){et("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ai(L){let Z=L.target;Z.removeEventListener("dispose",Ai),Tg(Z)}function Tg(L){wg(L),j.remove(L)}function wg(L){let Z=j.get(L).programs;Z!==void 0&&(Z.forEach(function(ie){we.releaseProgram(ie)}),L.isShaderMaterial&&we.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,ie,Q,ee,Pe){Z===null&&(Z=he);let Fe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Re=Cg(L,Z,ie,Q,ee);b.setMaterial(Q,Fe);let Ve=ie.index,Ze=1;if(Q.wireframe===!0){if(Ve=oe.getWireframeAttribute(ie),Ve===void 0)return;Ze=2}let rt=ie.drawRange,ut=ie.attributes.position,$e=rt.start*Ze,wt=(rt.start+rt.count)*Ze;Pe!==null&&($e=Math.max($e,Pe.start*Ze),wt=Math.min(wt,(Pe.start+Pe.count)*Ze)),Ve!==null?($e=Math.max($e,0),wt=Math.min(wt,Ve.count)):ut!=null&&($e=Math.max($e,0),wt=Math.min(wt,ut.count));let Zt=wt-$e;if(Zt<0||Zt===1/0)return;De.setup(ee,Q,Re,ie,Ve);let Xt,Ct=Ee;if(Ve!==null&&(Xt=Se.get(Ve),Ct=le,Ct.setIndex(Xt)),ee.isMesh)Q.wireframe===!0?(b.setLineWidth(Q.wireframeLinewidth*de()),Ct.setMode(H.LINES)):Ct.setMode(H.TRIANGLES);else if(ee.isLine){let bn=Q.linewidth;bn===void 0&&(bn=1),b.setLineWidth(bn*de()),ee.isLineSegments?Ct.setMode(H.LINES):ee.isLineLoop?Ct.setMode(H.LINE_LOOP):Ct.setMode(H.LINE_STRIP)}else ee.isPoints?Ct.setMode(H.POINTS):ee.isSprite&&Ct.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let bn=ee._multiDrawStarts,Ue=ee._multiDrawCounts,Yn=ee._multiDrawCount,gt=Ve?Se.get(Ve).bytesPerElement:1,ti=j.get(Q).currentProgram.getUniforms();for(let Ci=0;Ci<Yn;Ci++)ti.setValue(H,"_gl_DrawID",Ci),Ct.render(bn[Ci]/gt,Ue[Ci])}else if(ee.isInstancedMesh)Ct.renderInstances($e,Zt,ee.count);else if(ie.isInstancedBufferGeometry){let bn=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ue=Math.min(ie.instanceCount,bn);Ct.renderInstances($e,Zt,Ue)}else Ct.render($e,Zt)};function Ld(L,Z,ie){L.transparent===!0&&L.side===An&&L.forceSinglePass===!1?(L.side=Mn,L.needsUpdate=!0,rl(L,Z,ie),L.side=Jn,L.needsUpdate=!0,rl(L,Z,ie),L.side=An):rl(L,Z,ie)}this.compile=function(L,Z,ie=null){ie===null&&(ie=L),E=be.get(ie),E.init(Z),_.push(E),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),L!==ie&&L.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(E.pushLight(ee),ee.castShadow&&E.pushShadow(ee))}),E.setupLights();let Q=new Set;return L.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let Fe=0;Fe<Pe.length;Fe++){let Re=Pe[Fe];Ld(Re,ie,ee),Q.add(Re)}else Ld(Pe,ie,ee),Q.add(Pe)}),E=_.pop(),Q},this.compileAsync=function(L,Z,ie=null){let Q=this.compile(L,Z,ie);return new Promise(ee=>{function Pe(){if(Q.forEach(function(Fe){j.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){ee(L);return}setTimeout(Pe,10)}Qe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let qh=null;function Eg(L){qh&&qh(L)}function Dd(){ks.stop()}function Nd(){ks.start()}let ks=new km;ks.setAnimationLoop(Eg),typeof self<"u"&&ks.setContext(self),this.setAnimationLoop=function(L){qh=L,Be.setAnimationLoop(L),L===null?ks.stop():ks.start()},Be.addEventListener("sessionstart",Dd),Be.addEventListener("sessionend",Nd),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(L,Z);let ie=Be.enabled===!0&&Be.isPresenting===!0,Q=T!==null&&(V===null||ie)&&T.begin(R,V);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(Z),Z=Be.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,Z,V),E=be.get(L,_.length),E.init(Z),E.state.textureUnits=se.getTextureUnits(),_.push(E),$.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),D.setFromProjectionMatrix($,mi,Z.reversedDepth),W=this.localClippingEnabled,G=ke.init(this.clippingPlanes,W),w=Te.get(L,v.length),w.init(),v.push(w),Be.enabled===!0&&Be.isPresenting===!0){let Fe=R.xr.getDepthSensingMesh();Fe!==null&&Yh(Fe,Z,-1/0,R.sortObjects)}Yh(L,Z,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(Le,Oe,Z.reversedDepth),ge=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,ge&&nt.addToRenderList(w,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&ke.beginShadows();let ee=E.state.shadowsArray;if(Je.render(ee,L,Z),G===!0&&ke.endShadows(),(Q&&T.hasRenderPass())===!1){let Fe=w.opaque,Re=w.transmissive;if(E.setupLights(),Z.isArrayCamera){let Ve=Z.cameras;if(Re.length>0)for(let Ze=0,rt=Ve.length;Ze<rt;Ze++){let ut=Ve[Ze];Fd(Fe,Re,L,ut)}ge&&nt.render(L);for(let Ze=0,rt=Ve.length;Ze<rt;Ze++){let ut=Ve[Ze];Ud(w,L,ut,ut.viewport)}}else Re.length>0&&Fd(Fe,Re,L,Z),ge&&nt.render(L),Ud(w,L,Z)}V!==null&&O===0&&(se.updateMultisampleRenderTarget(V),se.updateRenderTargetMipmap(V)),Q&&T.end(R),L.isScene===!0&&L.onAfterRender(R,L,Z),De.resetDefaultState(),P=-1,z=null,_.pop(),_.length>0?(E=_[_.length-1],se.setTextureUnits(E.state.textureUnits),G===!0&&ke.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,F!==null&&F.renderEnd()};function Yh(L,Z,ie,Q){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLightProbeGrid)E.pushLightProbeGrid(L);else if(L.isLight)E.pushLight(L),L.castShadow&&E.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||D.intersectsSprite(L)){Q&&fe.setFromMatrixPosition(L.matrixWorld).applyMatrix4($);let Fe=ae.update(L),Re=L.material;Re.visible&&w.push(L,Fe,Re,ie,fe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||D.intersectsObject(L))){let Fe=ae.update(L),Re=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),fe.copy(L.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),fe.copy(Fe.boundingSphere.center)),fe.applyMatrix4(L.matrixWorld).applyMatrix4($)),Array.isArray(Re)){let Ve=Fe.groups;for(let Ze=0,rt=Ve.length;Ze<rt;Ze++){let ut=Ve[Ze],$e=Re[ut.materialIndex];$e&&$e.visible&&w.push(L,Fe,$e,ie,fe.z,ut)}}else Re.visible&&w.push(L,Fe,Re,ie,fe.z,null)}}let Pe=L.children;for(let Fe=0,Re=Pe.length;Fe<Re;Fe++)Yh(Pe[Fe],Z,ie,Q)}function Ud(L,Z,ie,Q){let{opaque:ee,transmissive:Pe,transparent:Fe}=L;E.setupLightsView(ie),G===!0&&ke.setGlobalState(R.clippingPlanes,ie),Q&&b.viewport(X.copy(Q)),ee.length>0&&sl(ee,Z,ie),Pe.length>0&&sl(Pe,Z,ie),Fe.length>0&&sl(Fe,Z,ie),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Fd(L,Z,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Q.id]===void 0){let $e=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Q.id]=new kt(1,1,{generateMipmaps:!0,type:$e?Ot:Rn,minFilter:Cn,samples:Math.max(4,B.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Pe=E.state.transmissionRenderTarget[Q.id],Fe=Q.viewport||X;Pe.setSize(Fe.z*R.transmissionResolutionScale,Fe.w*R.transmissionResolutionScale);let Re=R.getRenderTarget(),Ve=R.getActiveCubeFace(),Ze=R.getActiveMipmapLevel();R.setRenderTarget(Pe),R.getClearColor(_e),ye=R.getClearAlpha(),ye<1&&R.setClearColor(16777215,.5),R.clear(),ge&&nt.render(ie);let rt=R.toneMapping;R.toneMapping=vi;let ut=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),E.setupLightsView(Q),G===!0&&ke.setGlobalState(R.clippingPlanes,Q),sl(L,ie,Q),se.updateMultisampleRenderTarget(Pe),se.updateRenderTargetMipmap(Pe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let wt=0,Zt=Z.length;wt<Zt;wt++){let Xt=Z[wt],{object:Ct,geometry:bn,material:Ue,group:Yn}=Xt;if(Ue.side===An&&Ct.layers.test(Q.layers)){let gt=Ue.side;Ue.side=Mn,Ue.needsUpdate=!0,Od(Ct,ie,Q,bn,Ue,Yn),Ue.side=gt,Ue.needsUpdate=!0,$e=!0}}$e===!0&&(se.updateMultisampleRenderTarget(Pe),se.updateRenderTargetMipmap(Pe))}R.setRenderTarget(Re,Ve,Ze),R.setClearColor(_e,ye),ut!==void 0&&(Q.viewport=ut),R.toneMapping=rt}function sl(L,Z,ie){let Q=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,Pe=L.length;ee<Pe;ee++){let Fe=L[ee],{object:Re,geometry:Ve,group:Ze}=Fe,rt=Fe.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),Re.layers.test(ie.layers)&&Od(Re,Z,ie,Ve,rt,Ze)}}function Od(L,Z,ie,Q,ee,Pe){L.onBeforeRender(R,Z,ie,Q,ee,Pe),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(R,Z,ie,Q,L,Pe),ee.transparent===!0&&ee.side===An&&ee.forceSinglePass===!1?(ee.side=Mn,ee.needsUpdate=!0,R.renderBufferDirect(ie,Z,Q,ee,L,Pe),ee.side=Jn,ee.needsUpdate=!0,R.renderBufferDirect(ie,Z,Q,ee,L,Pe),ee.side=An):R.renderBufferDirect(ie,Z,Q,ee,L,Pe),L.onAfterRender(R,Z,ie,Q,ee,Pe)}function rl(L,Z,ie){Z.isScene!==!0&&(Z=he);let Q=j.get(L),ee=E.state.lights,Pe=E.state.shadowsArray,Fe=ee.state.version,Re=we.getParameters(L,ee.state,Pe,Z,ie,E.state.lightProbeGridArray),Ve=we.getProgramCacheKey(Re),Ze=Q.programs;Q.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?Z.environment:null,Q.fog=Z.fog;let rt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;Q.envMap=ve.get(L.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,Ze===void 0&&(L.addEventListener("dispose",Ai),Ze=new Map,Q.programs=Ze);let ut=Ze.get(Ve);if(ut!==void 0){if(Q.currentProgram===ut&&Q.lightsStateVersion===Fe)return zd(L,Re),ut}else Re.uniforms=we.getUniforms(L),F!==null&&L.isNodeMaterial&&F.build(L,ie,Re),L.onBeforeCompile(Re,R),ut=we.acquireProgram(Re,Ve),Ze.set(Ve,ut),Q.uniforms=Re.uniforms;let $e=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&($e.clippingPlanes=ke.uniform),zd(L,Re),Q.needsLights=Pg(L),Q.lightsStateVersion=Fe,Q.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=E.state.lightProbeGridArray.length>0,Q.currentProgram=ut,Q.uniformsList=null,ut}function Bd(L){if(L.uniformsList===null){let Z=L.currentProgram.getUniforms();L.uniformsList=ao.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function zd(L,Z){let ie=j.get(L);ie.outputColorSpace=Z.outputColorSpace,ie.batching=Z.batching,ie.batchingColor=Z.batchingColor,ie.instancing=Z.instancing,ie.instancingColor=Z.instancingColor,ie.instancingMorph=Z.instancingMorph,ie.skinning=Z.skinning,ie.morphTargets=Z.morphTargets,ie.morphNormals=Z.morphNormals,ie.morphColors=Z.morphColors,ie.morphTargetsCount=Z.morphTargetsCount,ie.numClippingPlanes=Z.numClippingPlanes,ie.numIntersection=Z.numClipIntersection,ie.vertexAlphas=Z.vertexAlphas,ie.vertexTangents=Z.vertexTangents,ie.toneMapping=Z.toneMapping}function Ag(L,Z){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;M.setFromMatrixPosition(Z.matrixWorld);for(let ie=0,Q=L.length;ie<Q;ie++){let ee=L[ie];if(ee.texture!==null&&ee.boundingBox.containsPoint(M))return ee}return null}function Cg(L,Z,ie,Q,ee){Z.isScene!==!0&&(Z=he),se.resetTextureUnits();let Pe=Z.fog,Fe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Z.environment:null,Re=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ot.workingColorSpace,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ze=ve.get(Q.envMap||Fe,Ve),rt=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ut=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$e=!!ie.morphAttributes.position,wt=!!ie.morphAttributes.normal,Zt=!!ie.morphAttributes.color,Xt=vi;Q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Xt=R.toneMapping);let Ct=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,bn=Ct!==void 0?Ct.length:0,Ue=j.get(Q),Yn=E.state.lights;if(G===!0&&(W===!0||L!==z)){let Dt=L===z&&Q.id===P;ke.setState(Q,L,Dt)}let gt=!1;Q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Yn.state.version||Ue.outputColorSpace!==Re||ee.isBatchedMesh&&Ue.batching===!1||!ee.isBatchedMesh&&Ue.batching===!0||ee.isBatchedMesh&&Ue.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ue.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ue.instancing===!1||!ee.isInstancedMesh&&Ue.instancing===!0||ee.isSkinnedMesh&&Ue.skinning===!1||!ee.isSkinnedMesh&&Ue.skinning===!0||ee.isInstancedMesh&&Ue.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ue.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ue.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ue.instancingMorph===!1&&ee.morphTexture!==null||Ue.envMap!==Ze||Q.fog===!0&&Ue.fog!==Pe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ke.numPlanes||Ue.numIntersection!==ke.numIntersection)||Ue.vertexAlphas!==rt||Ue.vertexTangents!==ut||Ue.morphTargets!==$e||Ue.morphNormals!==wt||Ue.morphColors!==Zt||Ue.toneMapping!==Xt||Ue.morphTargetsCount!==bn||!!Ue.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ue.__version=Q.version);let ti=Ue.currentProgram;gt===!0&&(ti=rl(Q,Z,ee),F&&Q.isNodeMaterial&&F.onUpdateProgram(Q,ti,Ue));let Ci=!1,ds=!1,br=!1,Rt=ti.getUniforms(),Kt=Ue.uniforms;if(b.useProgram(ti.program)&&(Ci=!0,ds=!0,br=!0),Q.id!==P&&(P=Q.id,ds=!0),Ue.needsLights){let Dt=Ag(E.state.lightProbeGridArray,ee);Ue.lightProbeGrid!==Dt&&(Ue.lightProbeGrid=Dt,ds=!0)}if(Ci||z!==L){b.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Rt.setValue(H,"projectionMatrix",L.projectionMatrix),Rt.setValue(H,"viewMatrix",L.matrixWorldInverse);let ms=Rt.map.cameraPosition;ms!==void 0&&ms.setValue(H,J.setFromMatrixPosition(L.matrixWorld)),B.logarithmicDepthBuffer&&Rt.setValue(H,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Rt.setValue(H,"isOrthographic",L.isOrthographicCamera===!0),z!==L&&(z=L,ds=!0,br=!0)}if(Ue.needsLights&&(Yn.state.directionalShadowMap.length>0&&Rt.setValue(H,"directionalShadowMap",Yn.state.directionalShadowMap,se),Yn.state.spotShadowMap.length>0&&Rt.setValue(H,"spotShadowMap",Yn.state.spotShadowMap,se),Yn.state.pointShadowMap.length>0&&Rt.setValue(H,"pointShadowMap",Yn.state.pointShadowMap,se)),ee.isSkinnedMesh){Rt.setOptional(H,ee,"bindMatrix"),Rt.setOptional(H,ee,"bindMatrixInverse");let Dt=ee.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Rt.setValue(H,"boneTexture",Dt.boneTexture,se))}ee.isBatchedMesh&&(Rt.setOptional(H,ee,"batchingTexture"),Rt.setValue(H,"batchingTexture",ee._matricesTexture,se),Rt.setOptional(H,ee,"batchingIdTexture"),Rt.setValue(H,"batchingIdTexture",ee._indirectTexture,se),Rt.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Rt.setValue(H,"batchingColorTexture",ee._colorsTexture,se));let ps=ie.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&q.update(ee,ie,ti),(ds||Ue.receiveShadow!==ee.receiveShadow)&&(Ue.receiveShadow=ee.receiveShadow,Rt.setValue(H,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Z.environment!==null&&(Kt.envMapIntensity.value=Z.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=KM()),ds){if(Rt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ue.needsLights&&Rg(Kt,br),Pe&&Q.fog===!0&&We.refreshFogUniforms(Kt,Pe),We.refreshMaterialUniforms(Kt,Q,ue,me,E.state.transmissionRenderTarget[L.id]),Ue.needsLights&&Ue.lightProbeGrid){let Dt=Ue.lightProbeGrid;Kt.probesSH.value=Dt.texture,Kt.probesMin.value.copy(Dt.boundingBox.min),Kt.probesMax.value.copy(Dt.boundingBox.max),Kt.probesResolution.value.copy(Dt.resolution)}ao.upload(H,Bd(Ue),Kt,se)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ao.upload(H,Bd(Ue),Kt,se),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Rt.setValue(H,"center",ee.center),Rt.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Rt.setValue(H,"normalMatrix",ee.normalMatrix),Rt.setValue(H,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Dt=Q.uniformsGroups;for(let ms=0,Tr=Dt.length;ms<Tr;ms++){let kd=Dt[ms];pe.update(kd,ti),pe.bind(kd,ti)}}return ti}function Rg(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function Pg(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(L,Z,ie){let Q=j.get(L);Q.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(L.texture).__webglTexture=Z,j.get(L.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ie,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Z){let ie=j.get(L);ie.__webglFramebuffer=Z,ie.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,ie=0){V=L,I=Z,O=ie;let Q=null,ee=!1,Pe=!1;if(L){let Re=j.get(L);if(Re.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(H.FRAMEBUFFER,Re.__webglFramebuffer),X.copy(L.viewport),Y.copy(L.scissor),re=L.scissorTest,b.viewport(X),b.scissor(Y),b.setScissorTest(re),P=-1;return}else if(Re.__webglFramebuffer===void 0)se.setupRenderTarget(L);else if(Re.__hasExternalTextures)se.rebindTextures(L,j.get(L.texture).__webglTexture,j.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let rt=L.depthTexture;if(Re.__boundDepthTexture!==rt){if(rt!==null&&j.has(rt)&&(L.width!==rt.image.width||L.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(L)}}let Ve=L.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);let Ze=j.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?Q=Ze[Z][ie]:Q=Ze[Z],ee=!0):L.samples>0&&se.useMultisampledRTT(L)===!1?Q=j.get(L).__webglMultisampledFramebuffer:Array.isArray(Ze)?Q=Ze[ie]:Q=Ze,X.copy(L.viewport),Y.copy(L.scissor),re=L.scissorTest}else X.copy(He).multiplyScalar(ue).floor(),Y.copy(ht).multiplyScalar(ue).floor(),re=je;if(ie!==0&&(Q=k),b.bindFramebuffer(H.FRAMEBUFFER,Q)&&b.drawBuffers(L,Q),b.viewport(X),b.scissor(Y),b.setScissorTest(re),ee){let Re=j.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re.__webglTexture,ie)}else if(Pe){let Re=Z;for(let Ve=0;Ve<L.textures.length;Ve++){let Ze=j.get(L.textures[Ve]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ve,Ze.__webglTexture,ie,Re)}}else if(L!==null&&ie!==0){let Re=j.get(L.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Re.__webglTexture,ie)}P=-1},this.readRenderTargetPixels=function(L,Z,ie,Q,ee,Pe,Fe,Re=0){if(!(L&&L.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=j.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){b.bindFramebuffer(H.FRAMEBUFFER,Ve);try{let Ze=L.textures[Re],rt=Ze.format,ut=Ze.type;if(L.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re),!B.textureFormatReadable(rt)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(ut)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-Q&&ie>=0&&ie<=L.height-ee&&H.readPixels(Z,ie,Q,ee,Ce.convert(rt),Ce.convert(ut),Pe)}finally{let Ze=V!==null?j.get(V).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(L,Z,ie,Q,ee,Pe,Fe,Re=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=j.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if(Z>=0&&Z<=L.width-Q&&ie>=0&&ie<=L.height-ee){b.bindFramebuffer(H.FRAMEBUFFER,Ve);let Ze=L.textures[Re],rt=Ze.format,ut=Ze.type;if(L.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re),!B.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,Pe.byteLength,H.STREAM_READ),H.readPixels(Z,ie,Q,ee,Ce.convert(rt),Ce.convert(ut),0);let wt=V!==null?j.get(V).__webglFramebuffer:null;b.bindFramebuffer(H.FRAMEBUFFER,wt);let Zt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await hm(H,Zt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Pe),H.deleteBuffer($e),H.deleteSync(Zt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Z=null,ie=0){let Q=Math.pow(2,-ie),ee=Math.floor(L.image.width*Q),Pe=Math.floor(L.image.height*Q),Fe=Z!==null?Z.x:0,Re=Z!==null?Z.y:0;se.setTexture2D(L,0),H.copyTexSubImage2D(H.TEXTURE_2D,ie,0,0,Fe,Re,ee,Pe),b.unbindTexture()},this.copyTextureToTexture=function(L,Z,ie=null,Q=null,ee=0,Pe=0){let Fe,Re,Ve,Ze,rt,ut,$e,wt,Zt,Xt=L.isCompressedTexture?L.mipmaps[Pe]:L.image;if(ie!==null)Fe=ie.max.x-ie.min.x,Re=ie.max.y-ie.min.y,Ve=ie.isBox3?ie.max.z-ie.min.z:1,Ze=ie.min.x,rt=ie.min.y,ut=ie.isBox3?ie.min.z:0;else{let Kt=Math.pow(2,-ee);Fe=Math.floor(Xt.width*Kt),Re=Math.floor(Xt.height*Kt),L.isDataArrayTexture?Ve=Xt.depth:L.isData3DTexture?Ve=Math.floor(Xt.depth*Kt):Ve=1,Ze=0,rt=0,ut=0}Q!==null?($e=Q.x,wt=Q.y,Zt=Q.z):($e=0,wt=0,Zt=0);let Ct=Ce.convert(Z.format),bn=Ce.convert(Z.type),Ue;Z.isData3DTexture?(se.setTexture3D(Z,0),Ue=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(se.setTexture2DArray(Z,0),Ue=H.TEXTURE_2D_ARRAY):(se.setTexture2D(Z,0),Ue=H.TEXTURE_2D),b.activeTexture(H.TEXTURE0),b.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);let Yn=b.getParameter(H.UNPACK_ROW_LENGTH),gt=b.getParameter(H.UNPACK_IMAGE_HEIGHT),ti=b.getParameter(H.UNPACK_SKIP_PIXELS),Ci=b.getParameter(H.UNPACK_SKIP_ROWS),ds=b.getParameter(H.UNPACK_SKIP_IMAGES);b.pixelStorei(H.UNPACK_ROW_LENGTH,Xt.width),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Xt.height),b.pixelStorei(H.UNPACK_SKIP_PIXELS,Ze),b.pixelStorei(H.UNPACK_SKIP_ROWS,rt),b.pixelStorei(H.UNPACK_SKIP_IMAGES,ut);let br=L.isDataArrayTexture||L.isData3DTexture,Rt=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){let Kt=j.get(L),ps=j.get(Z),Dt=j.get(Kt.__renderTarget),ms=j.get(ps.__renderTarget);b.bindFramebuffer(H.READ_FRAMEBUFFER,Dt.__webglFramebuffer),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Tr=0;Tr<Ve;Tr++)br&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,j.get(L).__webglTexture,ee,ut+Tr),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,j.get(Z).__webglTexture,Pe,Zt+Tr)),H.blitFramebuffer(Ze,rt,Fe,Re,$e,wt,Fe,Re,H.DEPTH_BUFFER_BIT,H.NEAREST);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||L.isRenderTargetTexture||j.has(L)){let Kt=j.get(L),ps=j.get(Z);b.bindFramebuffer(H.READ_FRAMEBUFFER,A),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,C);for(let Dt=0;Dt<Ve;Dt++)br?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,ee,ut+Dt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Kt.__webglTexture,ee),Rt?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ps.__webglTexture,Pe,Zt+Dt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ps.__webglTexture,Pe),ee!==0?H.blitFramebuffer(Ze,rt,Fe,Re,$e,wt,Fe,Re,H.COLOR_BUFFER_BIT,H.NEAREST):Rt?H.copyTexSubImage3D(Ue,Pe,$e,wt,Zt+Dt,Ze,rt,Fe,Re):H.copyTexSubImage2D(Ue,Pe,$e,wt,Ze,rt,Fe,Re);b.bindFramebuffer(H.READ_FRAMEBUFFER,null),b.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Rt?L.isDataTexture||L.isData3DTexture?H.texSubImage3D(Ue,Pe,$e,wt,Zt,Fe,Re,Ve,Ct,bn,Xt.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Ue,Pe,$e,wt,Zt,Fe,Re,Ve,Ct,Xt.data):H.texSubImage3D(Ue,Pe,$e,wt,Zt,Fe,Re,Ve,Ct,bn,Xt):L.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Pe,$e,wt,Fe,Re,Ct,bn,Xt.data):L.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Pe,$e,wt,Xt.width,Xt.height,Ct,Xt.data):H.texSubImage2D(H.TEXTURE_2D,Pe,$e,wt,Fe,Re,Ct,bn,Xt);b.pixelStorei(H.UNPACK_ROW_LENGTH,Yn),b.pixelStorei(H.UNPACK_IMAGE_HEIGHT,gt),b.pixelStorei(H.UNPACK_SKIP_PIXELS,ti),b.pixelStorei(H.UNPACK_SKIP_ROWS,Ci),b.pixelStorei(H.UNPACK_SKIP_IMAGES,ds),Pe===0&&Z.generateMipmaps&&H.generateMipmap(Ue),b.unbindTexture()},this.initRenderTarget=function(L){j.get(L).__webglFramebuffer===void 0&&se.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?se.setTextureCube(L,0):L.isData3DTexture?se.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?se.setTexture2DArray(L,0):se.setTexture2D(L,0),b.unbindTexture()},this.resetState=function(){I=0,O=0,V=null,b.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function Fa(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new vt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Ym(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Ym(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Ym(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new It(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Cf(i,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ro||e===Ia){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ro)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Me=Math.SQRT2*1.15,Zm=0,Rf="flow";function Km(i,e){return i>-25.5&&i<-10.5&&e>-20&&e<-6||i>-21.5&&i<-12.5&&e>15&&e<25}var Ln=2.1/Me,Mi=2.4/Me;function Jm(i){let e=new Ke;e.name="\u5411\u9633\u5C0F\u5B66",i.add(e);let t=new Vt(1,1,1),n=new ln(1,8,6),s=new Nt,r=Object.fromEntries(Object.entries({wall:15656659,wood:12160089,green:4287831,blue:6327982,skin:15315854,hair:3422261,white:16775135,track:11232338,dark:4347488}).map(([A,C])=>[A,new tt({color:C,roughness:.88})]));function o(A,C,I,O,V,P,z,X){let Y=new Ie(t,r[C]);return Y.position.set(I,O,V),Y.scale.set(P,z,X),A.add(Y),Y}function a(A,C,I,O,V,P=6,z=.7,X="#e9e1ca",Y="#284a40"){let re=document.createElement("canvas");re.width=1024,re.height=256;let _e=re.getContext("2d");_e.fillStyle=X,_e.fillRect(0,0,re.width,re.height),_e.fillStyle=Y,_e.font="bold 68px sans-serif",_e.textAlign="center",_e.textBaseline="middle",C.split(`
`).forEach((me,ue,Le)=>_e.fillText(me,512,128+(ue-(Le.length-1)/2)*85,990));let ye=new yn(re);ye.colorSpace=dt;let te=new Ie(new Qn(P,z),new qt({map:ye}));return te.position.set(I,O,V),A.add(te),te}o(e,"green",131,-.24,0,120,.3,152),o(e,"wall",131,-.06,0,118,.12,148),o(e,"wood",79.5,-.035,28,7,.1,3.6);for(let A of[73.5,129,185])o(e,"wood",A,-.035,-20,2.5,.1,99);o(e,"wood",128,.02,7,108,.1,3),o(e,"track",128,-.048,42,94,.12,58);let c=new Ke;e.add(c);for(let A=0;A<6;A++){let C=[],I=44-A*1.2,O=26-A*1.2;for(let V=0;V<=120;V++){let P=V/120*Math.PI*2;C.push(new U(128+I*Math.cos(P),.02,42+O*Math.sin(P)))}c.add(new is(new vt().setFromPoints(C),new Ui({color:16772558})))}o(e,"green",128,-.006,42,59,.06,30);for(let A of[27,57])o(e,"white",128,.03,A,58,.03,.12);for(let A of[99,157,128])o(e,"white",A,.03,42,.12,.03,30);for(let A of[99,157])o(e,"white",A,1.3,38.8,.15,2.6,.15),o(e,"white",A,1.3,45.2,.15,2.6,.15),o(e,"white",A,2.6,42,.15,.15,6.5);o(e,"wood",75,1.7,25,.5,3.4,.5),o(e,"wood",75,1.7,31,.5,3.4,.5),a(e,"\u5411\u9633\u5C0F\u5B66 \xB7 \u6B65\u884C\u5165\u53E3",75,3.4,28,9,1).rotation.y=-Math.PI/2,a(e,"\u5927\u64CD\u573A \xB7 \u5FEB\u4E50\u8FD0\u52A8",128,1,72,17,1.2);let l=ni.map((A,C)=>{let I=new Ke;e.add(I);for(let V of yo.filter(P=>P.building===C))o(I,"wall",(V.x1+V.x2)/2,V.y-.08,(V.z1+V.z2)/2,V.x2-V.x1,.16,V.z2-V.z1);for(let V of wr.filter(P=>P.building===C))o(I,V.key,V.x,V.y,V.z,V.w,V.h,V.d);for(let V of al.filter(P=>P.building===C))for(let P=0;P<40;P++){let z=V.z1+(P+.5)*.25,X=V.base+(V.reverse?P+1:40-P)*3.6/40;o(I,"wall",(V.x1+V.x2)/2,X-.045,z,V.x2-V.x1,.09,.252);for(let Y of[V.x1,V.x2])o(I,"dark",Y,X+.5,z,.06,1,.07),o(I,"wood",Y,X+1,z,.09,.06,.26)}o(I,"dark",A.x,14.4,A.z,48.5,.25,10.6);let O=new Map;for(let V of[...I.children]){V.updateMatrix();let P=V.geometry.clone().applyMatrix4(V.matrix);O.has(V.material)||O.set(V.material,[]),O.get(V.material).push(P),I.remove(V)}for(let[V,P]of O)I.add(new Ie(Fa(P),V)),P.forEach(z=>z.dispose());a(I,A.name,A.x,15.1,A.z+5.6,9,1.1);for(let V=0;V<4;V++)a(I,`${V+1}\u5C42 \xB7 \u4E1C\u4FA7\u697C\u68AF \u2197`,A.x+23,V*3.6+2.6,A.z+5.3,4,.5);return I}),h=gs.map(A=>{let C=new Ke;C.name=A.name,C.userData={...A},C.position.set(A.x,A.y,A.z),C.visible=!1,e.add(C);let I=new Map,O=(P,z,X,Y,re,_e,ye,te=!1)=>{let me=P+(te?"Round":"");I.has(me)||I.set(me,{key:P,round:te,items:[]}),I.get(me).items.push([z,X,Y,re,_e,ye])};O("wall",0,-.08,0,8,.16,10),O("wall",-4,1.7,0,.16,3.4,10),O("wall",4,1.7,0,.16,3.4,10),O("wall",0,1.7,-5,8,3.4,.16),O("green",0,2,-4.85,5.8,1.6,.1),O("wood",0,.8,-3.7,1.7,.12,.65);let V=(P,z,X=!1)=>{let Y=X?.43:0;O("blue",P,.97+Y,z,.43,.58,.26),O("skin",P,1.43+Y,z,.19,.22,.18,!0),O("hair",P,1.57+Y,z,.2,.09,.19,!0);for(let re of[-1,1])O("dark",P+re*.12,.35+Y*.4,z,.14,.64,.16),O("dark",P+re*.12,.08,z-.12,.17,.12,.34),O("skin",P+re*.26,.99+Y,z-.22,.12,.12,.46)};for(let P of Zh){let z=P.x,X=P.z;O("wood",z,.8,X-.45,.96,.1,.6);for(let Y of[-1,1])O("dark",z+Y*.36,.39,X-.45,.07,.78,.45);O("white",z,.862,X-.45,.55,.025,.34),O("blue",z,.88,X-.45,.012,.009,.3),O("wood",z,.54,X,.53,.09,.5),O("wood",z,.84,X+.2,.53,.6,.06),V(z,X)}V(-2.4,-3.7,!0);for(let{key:P,round:z,items:X}of I.values()){let Y=new oi(z?n:t,r[P],X.length);X.forEach(([re,_e,ye,te,me,ue],Le)=>{s.position.set(re,_e,ye),s.scale.set(te,me,ue),s.rotation.set(0,0,0),s.updateMatrix(),Y.setMatrixAt(Le,s.matrix)}),Y.computeBoundingSphere(),Y.userData.schoolStructure=P==="wall",P==="skin"&&!z&&(C.userData.writing=Y,C.userData.handTransforms=X),C.add(Y)}return C}),u=a(e,`\u6570\u5B66 \xB7 \u4E58\u6CD5\u7684\u610F\u4E49
6 \xD7 5 = 30   \u8BA4\u771F\u601D\u8003`,0,0,0,5.5,1.3,"#254d40","#fff3c7");u.visible=!1;let d=gs.map(A=>{let C=u.clone();return C.position.set(A.x,A.y+2,A.z-4.78),e.add(C),C}),f=o(e,"wood",0,0,0,.035,.035,.9);f.visible=!1;let g=document.createElement("section");g.id="schoolPanel",g.hidden=!0,g.innerHTML=`<div class="school-heading"><b>\u5411\u9633\u5C0F\u5B66</b><button id="schoolExit">\u8FD4\u56DE\u539F\u573A\u666F</button></div><p>8 \u680B\u6559\u5B66\u697C \xB7 \u6BCF\u680B 4 \u5C42 \xB7 \u6BCF\u5C42 6 \u95F4\u6559\u5BA4</p><div class="school-selectors"><label>\u6559\u5B66\u697C<select id="schoolBuilding">${ni.map((A,C)=>`<option value="${C}">${A.name}</option>`).join("")}</select></label><label>\u697C\u5C42<select id="schoolFloor">${[1,2,3,4].map(A=>`<option value="${A-1}">${A} \u5C42</option>`).join("")}</select></label><label>\u6559\u5BA4<select id="schoolRoom">${[1,2,3,4,5,6].map(A=>`<option value="${A-1}">${A} \u73ED</option>`).join("")}</select></label></div><div class="school-actions"><button id="schoolWalk">\u5728\u6B64\u6F2B\u6E38</button><button id="schoolEnter">\u8FDB\u5165\u6559\u5BA4</button><button id="schoolOverview">\u6821\u56ED\u5168\u666F</button><button id="schoolBoard">\u8D70\u8FD1\u9ED1\u677F</button><button id="schoolBack">\u6559\u5BA4\u540E\u6392</button></div><p id="schoolStatus" role="status">\u516C\u53F8\u4E1C\u4FA7 \xB7 \u5927\u64CD\u573A\u4E0E\u516B\u680B\u6559\u5B66\u697C</p><small>\u62D6\u52A8\u73AF\u987E \xB7 \u9009\u62E9\u697C\u5C42\u4E0E\u6559\u5BA4\u540E\u70B9\u51FB\u8FDB\u5165 \xB7 Esc \u8FD4\u56DE</small>`,document.body.append(g);let x,m,p=!1,y=null,S=0,M=0,w=null,E=()=>{},v=()=>{},_=null;function T(){d.forEach(A=>A.visible=!1),y=null,S=M=0,h.forEach(A=>A.visible=!1),l.forEach(A=>A.visible=!0),u.visible=f.visible=!1,document.getElementById("schoolStatus").textContent="\u516C\u53F8\u4E1C\u4FA7 \xB7 \u5927\u64CD\u573A\u4E0E\u516B\u680B\u6559\u5B66\u697C"}let R=!1;function N(){let A=C=>Number(document.getElementById(C).value);y=Vd(A("schoolBuilding"),A("schoolFloor"),A("schoolRoom")),h.forEach(C=>C.children.forEach(I=>I.visible=!0)),d.forEach(C=>C.visible=!1),S=M=0,R=!1,h.forEach(C=>C.visible=C.userData.id===y.id),l.forEach((C,I)=>C.visible=I!==y.building),u.visible=f.visible=!0,u.position.set(y.x,y.y+2,y.z-4.78),document.getElementById("schoolStatus").textContent=`${y.name} \xB7 1 \u540D\u8001\u5E08\u6388\u8BFE \xB7 30 \u540D\u5B66\u751F\u8BFB\u5199\u5B66\u4E60`}document.getElementById("schoolWalk").onclick=()=>{let A=y?{x:y.x+3.15,y:y.y,z:y.z+4.4}:{x:77,y:0,z:28};F(),v(A)},document.getElementById("schoolEnter").onclick=N,document.getElementById("schoolOverview").onclick=T,document.getElementById("schoolBoard").onclick=()=>{y||N(),R=!0,S=M=0},document.getElementById("schoolBack").onclick=()=>{y||N(),R=!1,S=M=0};function F(){p=!1,i.background=x,i.fog=m,g.hidden=!0,document.body.classList.remove("school-tour"),T(),E()}document.getElementById("schoolExit").onclick=F,addEventListener("keydown",A=>{p&&A.code==="Escape"&&F()});function k(A,C){let I=A.userData.writing;A.userData.handTransforms.forEach(([O,V,P,z,X,Y],re)=>{s.position.set(O,V+Math.sin(C*3+re)*.018,P+Math.sin(C*3+re)*.025),s.scale.set(z,X,Y),s.rotation.set(0,0,0),s.updateMatrix(),I.setMatrixAt(re,s.matrix)}),I.instanceMatrix.needsUpdate=!0}return{root:e,interiors:h,shells:l,setWalkHandler(A){v=A},updateWalk(A,C){p||(_=Mo(A),l.forEach(I=>I.visible=!0),u.visible=!1,h.forEach((I,O)=>{let V=gs[O];I.visible=Math.abs(A.y-V.y)<1.8&&Math.hypot(A.x-V.x,A.z-V.z)<12,I.children.forEach(P=>P.visible=!P.userData.schoolStructure),d[O].visible=I.visible,I.visible&&k(I,C)}),f.visible=!!_,_&&(f.position.set(_.x-2.15,_.y+1.65,_.z-4),f.rotation.x=Math.sin(C*1.8)*.15))},get active(){return p},open(A){x=i.background,m=i.fog,i.background=new Ne(12177878),i.fog=null,p=!0,E=A,g.hidden=!1,document.body.classList.add("school-tour"),T()},close:F,bind(A){A.addEventListener("pointerdown",C=>{p&&(w={id:C.pointerId,x:C.clientX,y:C.clientY})}),A.addEventListener("pointermove",C=>{!p||!w||w.id!==C.pointerId||(S=nn.clamp(S+(C.clientX-w.x)*.004,-1.1,1.1),M=nn.clamp(M+(C.clientY-w.y)*.003,-.45,.45),w={id:C.pointerId,x:C.clientX,y:C.clientY})});for(let C of["pointerup","pointercancel","lostpointercapture"])A.addEventListener(C,()=>w=null)},update(A,C){if(p)if(y){let I=y,O=A.aspect<1;A.position.set(I.x*Me,I.y+(R?2.1:4.7),(I.z+(R?O?3.8:-.1:O?12:9))*Me),A.lookAt(I.x*Me+Math.sin(S)*9,I.y+(R?1.95:1)+M*5,(I.z-2)*Me);let V=h.find(z=>z.visible),P=V.userData.writing;V.userData.handTransforms.forEach(([z,X,Y,re,_e,ye],te)=>{s.position.set(z,X+Math.sin(C*3+te)*.018,Y+Math.sin(C*3+te)*.025),s.scale.set(re,_e,ye),s.rotation.set(0,0,0),s.updateMatrix(),P.setMatrixAt(te,s.matrix)}),P.instanceMatrix.needsUpdate=!0,f.position.set(I.x-2.15,I.y+1.65,I.z-4),f.rotation.x=Math.sin(C*1.8)*.15}else{let I=Math.max(1,.9/A.aspect);A.position.set((128+Math.sin(S)*140*I)*Me,(120+M*70)*I,(140*Math.cos(S)*I+5)*Me),A.lookAt(128*Me,0,-7*Me)}},stats(){return{buildings:8,floors:32,rooms:h.length,students:gs.length*30,teachers:gs.length,visibleRooms:h.filter(A=>A.visible).length,current:y?.id??_?.id,instancedMeshes:h.reduce((A,C)=>A+C.children.filter(I=>I.isInstancedMesh).length,0)}}}}var Pf=new Map,If=i=>(Pf.has(i)||Pf.set(i,new tt({color:i,roughness:.78})),Pf.get(i));function Ut(i,e,t,n,s,r,o,a){let c=new Ie(new ln(1,12,8),If(a));return c.position.set(e,t,n),c.scale.set(s,r,o),c.castShadow=!0,i.add(c),c}function pr(i,e,t,n,s,r,o){let a=new Ke;a.position.set(e,t,n),i.add(a);let c=new Ie(new qo(s,r,4,8),If(o));return c.position.y=-r/2,c.castShadow=!0,a.add(c),a}function Gi({shirt:i=12694426,pants:e=3819336,hair:t=3418917,scale:n=1,female:s=!1}={}){let r=new Ke;r.scale.setScalar(n);let o=13211251;Ut(r,0,1.19,0,.29,.39,.18,i),Ut(r,0,1.66,0,.19,.23,.19,o),Ut(r,0,1.8,-.025,.193,.12,.19,t),s&&Ut(r,0,1.63,-.11,.21,.25,.12,t),Ut(r,-.073,1.68,.169,.022,.017,.015,3156259),Ut(r,.073,1.68,.169,.022,.017,.015,3156259),Ut(r,0,1.62,.193,.03,.04,.04,o);for(let l of[-1,1])Ut(r,l*.184,1.66,0,.035,.055,.025,o),Ut(r,l*.073,1.686,.165,.036,.025,.017,15130322),Ut(r,l*.073,1.686,.181,.014,.016,.009,4470830),Ut(r,l*.074,1.733,.163,.039,.009,.013,t);Ut(r,0,1.566,.171,.05,.009,.008,10248530);let a=[pr(r,-.34,1.4,0,.085,.46,i),pr(r,.34,1.4,0,.085,.46,i)];a.forEach(l=>Ut(l,0,-.53,0,.067,.085,.065,o));let c=[pr(r,-.14,.84,0,.099,.35,e),pr(r,.14,.84,0,.099,.35,e)];return c.forEach(l=>{l.lower=pr(l,0,-.35,0,.085,.35,e),Ut(l.lower,0,-.4,.06,.105,.075,.175,3879984)}),{g:r,arms:a,legs:c,animate(l,h=!1,u=""){c.forEach((d,f)=>{d.rotation.x=h?Math.sin(l*9+f*Math.PI)*.65:u==="sit"?-Math.PI/2:0,d.lower.rotation.x=u==="sit"?Math.PI/2:h?Math.max(0,-Math.sin(l*9+f*Math.PI))*.6:0}),a.forEach((d,f)=>{d.rotation.x=h?-Math.sin(l*8+f*Math.PI)*.45:u==="read"?-1.15:u==="garden"?-.75+Math.sin(l*3)*.2:u==="cook"?-.7+Math.sin(l*3+f)*.2:0}),r.children[0].rotation.z=h?Math.sin(l*8)*.025:0}}}function Lf(i=12423257){let e=new Ke;Ut(e,0,.47,0,.2,.23,.42,i),Ut(e,0,.65,.37,.22,.23,.23,i),Ut(e,0,.56,.57,.12,.09,.15,13350298),Ut(e,0,.59,.69,.07,.05,.045,2434853);for(let s of[-1,1])Ut(e,s*.17,.61,.38,.09,.22,.13,i),Ut(e,s*.09,.72,.55,.024,.024,.025,2238503);let t=[];for(let s of[-.14,.14])for(let r of[-.26,.25])t.push(pr(e,s,.36,r,.055,.23,i));let n=pr(e,0,.55,-.38,.055,.32,i);return n.rotation.x=1.6,{g:e,animate(s){t.forEach((r,o)=>r.rotation.x=Math.sin(s*9+o*Math.PI)*.5),n.rotation.z=Math.sin(s*12)*.7}}}function $m(i){let e=new Ke;Ut(e,0,0,0,.12,.075,.35,i),Ut(e,0,0,.22,.1,.07,.12,15655626);let t=new Ie(new xi(.14,.24,3),If(i));return t.rotation.x=Math.PI/2,t.position.z=-.38,e.add(t),e}function Df(){let i=new Ke;Ut(i,0,.08,0,.28,.14,.36,4875584),Ut(i,0,.09,.38,.1,.09,.15,7898443);for(let e of[-.24,.24])for(let t of[-.23,.23])Ut(i,e,.02,t,.13,.035,.09,7767119);for(let e of[-.16,0,.16])Ut(i,0,.192,e,.13,.014,.1,6911053);return i}var it={x:-17.7,z:-11.7,x1:-18.35,x2:-17.05,z1:-12.4,z2:-11,exitX:-16.6},Ds=[{y:-3.6,name:"\u5730\u4E0B\u4E00\u5C42"},{y:0,name:"\u4E00\u697C"},{y:3.6,name:"\u4E8C\u697C"},{y:7.2,name:"\u5929\u53F0"}];function Nf(i,e,t=0){return i>it.x1-t&&i<it.x2+t&&e>it.z1-t&&e<it.z2+t}function jm(i,e,t,n){let s=i-t/2,r=i+t/2,o=e-n/2,a=e+n/2;if(r<=it.x1||s>=it.x2||a<=it.z1||o>=it.z2)return[{x:i,z:e,w:t,d:n}];let c=Math.max(s,it.x1),l=Math.min(r,it.x2),h=Math.max(o,it.z1),u=Math.min(a,it.z2),d=[];for(let[f,g,x,m]of[[s,c,o,a],[l,r,o,a],[c,l,o,h],[c,l,u,a]])g-f>.001&&m-x>.001&&d.push({x:(f+g)/2,z:(x+m)/2,w:g-f,d:m-x});return d}var ho=class{constructor(e=Ds){this.floors=e,this.y=0,this.phase="idle",this.door=1,this.target=0,this.origin=0,this.passenger=!1,this.boarding=0,this.exiting=0}request(e,t){return this.phase!=="idle"||!this.floors.some(n=>n.y===e)||!this.floors.some(n=>n.y===t)||e===t?!1:(this.origin=e,this.target=t,this.boarding=this.exiting=0,this.phase=Math.abs(this.y-e)<.001?this.door===1?"board":"pickupOpen":"recallClose",this.passenger=this.phase==="board",!0)}update(e){e=Math.min(.1,Math.max(0,e));let t=(n,s,r)=>n+Math.sign(s-n)*Math.min(Math.abs(s-n),r);if(this.phase==="recallClose"||this.phase==="close")this.door=t(this.door,0,e*2),this.door||(this.phase=this.phase==="close"?"travel":"recall");else if(this.phase==="recall"||this.phase==="travel"){let n=this.phase==="recall"?this.origin:this.target;this.y=t(this.y,n,e*1.8),this.y===n&&(this.phase=this.phase==="recall"?"pickupOpen":"open")}else if(this.phase==="pickupOpen")this.door=t(this.door,1,e*2),this.door===1&&(this.passenger=!0,this.phase="board");else if(this.phase==="board")this.passenger=!0,this.boarding=Math.min(1,this.boarding+e/.65),this.boarding===1&&(this.phase="close");else if(this.phase==="open")this.door=t(this.door,1,e*2),this.door===1&&(this.phase="exit");else if(this.phase==="exit"&&(this.exiting=Math.min(1,this.exiting+e/.65),this.exiting===1))return this.phase="idle",this.passenger=!1,"arrived";return null}};function Qm(i,e,t){for(let n of[.55,.85,1.15])for(let s of[Math.PI/2,-Math.PI/2,Math.PI,0]){let r={x:i.x+Math.sin(e+s)*n,y:i.y,z:i.z+Math.cos(e+s)*n};if(t(r.x,r.z,r.y))return r}return null}var dh=class{constructor(e){this.members=e,this.index=0,this.visited=new Set([0])}switchTo(e,t){return!Number.isInteger(e)||!this.members[e]?null:(this.members[this.index].position={...t},this.index=e,this.visited.add(e),{...this.members[e].position})}};var Uf={x1:46,x2:70,z1:4,z2:26,height:3.6,roof:18},gn=Array.from({length:6},(i,e)=>({y:e*Uf.height,name:e===5?"\u516C\u53F8\u5C4B\u9876\u5929\u53F0":`\u516C\u53F8${["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94"][e]}\u697C`})),sn={x:65,z:7,exitX:65,exitZ:9.4,x1:64,x2:66,z1:6,z2:8},ph=Array.from({length:5},(i,e)=>({x1:e%2===0?68:66,x2:e%2===0?69.4:67.4,z1:10,z2:22,base:e*Uf.height,height:Uf.height,reverse:e%2===0}));function uo(i,e){return i>46&&i<70&&e>4&&e<26}function Ff(i,e){return i>34&&i<73&&e>2&&e<35||i>=0&&i<=43&&e>31&&e<33}function JM(i,e){return i>63.85&&i<66.15&&e>5.85&&e<8.15}function e0(i,e,t){if(!uo(i,e))return Math.abs(t)<.1?0:NaN;if(JM(i,e))return NaN;let n=ph.filter(r=>i>=r.x1&&i<=r.x2&&e>=r.z1&&e<=r.z2).map(r=>r.base+(r.reverse?e-r.z1:r.z2-e)/(r.z2-r.z1)*r.height);return n.length?n.find(o=>Math.abs(o-t)<.25)??NaN:gn.find(r=>Math.abs(r.y-t)<.12)?.y??NaN}function mh(){let i=[{x1:46,x2:70,z1:4,z2:26}];for(let e of[sn,...ph.slice(0,2)])i=i.flatMap(t=>{let n=Math.max(t.x1,e.x1),s=Math.min(t.x2,e.x2),r=Math.max(t.z1,e.z1),o=Math.min(t.z2,e.z2);return n>=s||r>=o?[t]:[{x1:t.x1,x2:n,z1:t.z1,z2:t.z2},{x1:s,x2:t.x2,z1:t.z1,z2:t.z2},{x1:n,x2:s,z1:t.z1,z2:r},{x1:n,x2:s,z1:o,z2:t.z2}].filter(a=>a.x2>a.x1&&a.z2>a.z1)});return i}var gh=gn.slice(0,5).flatMap((i,e)=>[50,55,60].flatMap(t=>[12,21].map(n=>({x:t,z:n,y:i.y,floor:e}))));function t0(i,e){let t=new Ke;i.add(t);let n=new ho(gn),s=new Ke;s.position.set(sn.x,0,sn.z),t.add(s);let r=new tt({color:7506306,metalness:.45,roughness:.35}),o=(l,h,u,d,f,g,x=t)=>{let m=new Ie(new Vt(d,f,g),r);return m.position.set(l,h,u),x.add(m),m};o(0,-.07,0,1.9,.14,1.9,s),o(0,2.6,0,1.9,.1,1.9,s),o(0,1.25,-.96,1.9,2.5,.08,s);let a=gn.map(l=>({y:l.y,pair:[-1,1].map(h=>o(sn.x+h*.48,l.y+1.25,8,.96,2.5,.06))}));for(let l of e){let h=document.createElement("canvas");h.width=1024,h.height=128;let u=h.getContext("2d");u.fillStyle="#e8e5d9",u.fillRect(0,0,1024,128),u.fillStyle="#304d43",u.font="bold 58px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(l.text,512,64,970);let d=new yn(h);d.colorSpace=dt;let f=new Ie(new Qn(l.w,l.h),new qt({map:d,side:An}));f.position.set(l.x,l.y,l.z),f.rotation.y=l.rotation||0,t.add(f)}let c=[];for(let l of gn.slice(0,5)){for(let u of gh.filter(d=>d.y===l.y&&d.z===12)){let d=Gi({shirt:[8232623,11705481,8492670][c.length%3],female:c.length%2===0});d.g.scale.set(1/Me,1,1/Me),d.g.position.set(u.x,l.y-.32,u.z-.94),t.add(d.g),c.push({actor:d,floor:l.y,desk:u})}let h=Gi({shirt:12167297});h.g.scale.set(1/Me,1,1/Me),t.add(h.g),c.push({actor:h,floor:l.y})}return{lift:n,root:t,staff:c,near(l){return gn.some(h=>Math.abs(h.y-l.y)<.1)&&Math.hypot(l.x-sn.exitX,l.z-sn.exitZ)<1.6},update(l,h,u){let d=n.update(l);s.position.y=n.y;for(let f of a)for(let g=0;g<2;g++)f.pair[g].position.x=sn.x+(g?1:-1)*(.48+(Math.abs(n.y-f.y)<.01?n.door*.98:0));for(let f of c)if(f.actor.g.visible=u.x>33&&Math.abs(u.y-f.floor)<2.1,!!f.actor.g.visible)if(f.desk)f.actor.animate(h,!1,"sit"),f.actor.arms.forEach((g,x)=>{g.rotation.x=-.85+Math.sin(h*5+x*2)*.045});else{let g=h*.22+f.floor,x=56+Math.sin(g)*6,m=16.5+Math.cos(g)*.8;f.actor.g.position.set(x,f.floor,m),f.actor.g.rotation.y=Math.atan2(Math.cos(g)*6,-Math.sin(g)*.8),f.actor.animate(h,!0)}return d}}}function n0(){let i=new Ke,e=[],t=new tt({color:8625795,metalness:.45,roughness:.35}),n=new tt({color:6845557,metalness:.7,roughness:.3}),s=new tt({color:2436139}),r=(a,c,l,h=t)=>{let u=new U(...a),d=new U(...c).sub(u),f=new Ie(new En(l,l,d.length(),10),h);f.position.copy(u).addScaledVector(d,.5),f.quaternion.setFromUnitVectors(new U(0,1,0),d.normalize()),i.add(f)};for(let a of[-.67,.67]){let c=new Ke;c.position.set(0,.35,a);let l=new Ie(new Fi(.33,.045,8,24),s);l.rotation.y=Math.PI/2,c.add(l);for(let h=0;h<12;h++){let u=h*Math.PI/6,d=new Ie(new En(.006,.006,.64,5),n);d.rotation.x=u,c.add(d)}i.add(c),e.push(c)}for(let[a,c]of[[[0,.35,-.67],[0,.86,-.2]],[[0,.86,-.2],[0,.4,0]],[[0,.4,0],[0,.35,-.67]],[[0,.86,-.2],[0,.94,.48]],[[0,.94,.48],[0,.4,0]],[[0,.94,.48],[0,.35,.67]],[[0,.94,.48],[0,1.14,.45]],[[-.28,1.14,.45],[.28,1.14,.45]]])r(a,c,.025);let o=new Ie(new Vt(.23,.07,.3),s);return o.position.set(0,.92,-.2),i.add(o),r([-.2,.4,0],[.2,.4,0],.02,n),i.scale.set(1/Me,1,1/Me),i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{root:i,wheels:e}}function i0(){let i=new Ke,e=new Ke;i.add(e),e.position.set(it.x,0,it.z);let t=new tt({color:6649202,metalness:.6,roughness:.3}),n=new tt({color:5857639,transparent:!0,opacity:.28,depthWrite:!1}),s=new qt({color:16770228});function r(a,c,l,h,u,d,f,g=i){let x=new Ie(new Vt(h,u,d),f);return x.position.set(a,c,l),g.add(x),x}for(let a of[it.x1,it.x2])for(let c of[it.z1,it.z2])r(a,2.85,c,.045,13,.045,t);r(it.x1,2.85,it.z,.025,13,1.4,n);for(let a of[it.z1,it.z2])r(it.x,2.85,a,1.3,13,.025,n);r(0,-.07,0,1.25,.14,1.35,t,e),r(0,2.45,0,1.25,.08,1.35,t,e),r(0,2.39,0,.8,.025,.8,s,e);let o=Ds.map(a=>{let c=[-1,1].map(l=>r(it.x2,a.y+1.16,it.z+l*.32,.055,2.32,.64,t));return r(it.x2+.02,a.y+1.3,it.z1-.12,.035,.2,.1,s),{y:a.y,pair:c}});return{root:i,update(a){e.position.y=a.y;for(let c of o)for(let l=0;l<2;l++)c.pair[l].position.z=it.z+(l?1:-1)*(.32+(Math.abs(a.y-c.y)<.01?a.door*.65:0))}}}function s0(){let i=(n,s)=>{let r=document.createElement("canvas");r.width=1024,r.height=512,s(r.getContext("2d"));let o=new yn(r);return o.colorSpace=dt,o.anisotropy=4,new tt({name:n,map:o,roughness:.85})},e=i("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",n=>{n.fillStyle="#f6f1e7",n.fillRect(0,0,1024,512),n.strokeStyle="#b8b6a466",n.lineWidth=1.2;for(let s=-512;s<1536;s+=110)n.beginPath(),n.moveTo(s,0),n.lineTo(s+320,512),n.stroke(),n.beginPath(),n.moveTo(s,0),n.lineTo(s-320,512),n.stroke();for(let s=0;s<1024;s+=5)n.fillStyle="#978b7520",n.fillRect(s,0,1,512)}),t=Array.from({length:3},(n,s)=>i("\u8D70\u5ECA\u6444\u5F71"+s,r=>{r.fillStyle="#e2e0d7",r.fillRect(0,0,1024,512),r.fillStyle="#a6a6a0",r.fillRect(0,350,1024,162);for(let o=0;o<9;o++){let a=70+o*110,c=80+(o*71+s*89)%250;r.fillStyle=["#404644","#707774","#919792"][(o+s)%3],r.fillRect(a,350-c,80,c),r.fillStyle="#d1d3ca";for(let l=370-c;l<340;l+=24)for(let h=a+10;h<a+75;h+=20)r.fillRect(h,l,8,12)}r.strokeStyle="#f6f4e8",r.lineWidth=10,r.strokeRect(20,20,984,472)}));return{\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8:e,...Object.fromEntries(t.map(n=>[n.name,n]))}}function r0({box:i,cyl:e,ell:t,branch:n,mat:s,wood:r,oak:o,dark:a,glass:c,linen:l,lightmat:h,plaster:u,seats:d,obstacle:f,plant:g}){let x=s("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",16183783),m=s("\u8D70\u5ECA\u70DF\u718F\u6728",5653297),p=s("\u8D70\u5ECA\u6696\u767D\u9876",16315628);i(-1,3.618,-6,20,.03,3.8,m),i(9.75,3.618,-5,1.5,.03,1.8,m),i(10.75,3.618,-6,.5,.03,3.8,m);for(let v=-10.8;v<8.9;v+=.45)i(v,3.636,-6,.012,.006,3.8,r);i(-2,6.955,-6,18,.035,3.8,p),i(-2,6.925,-7.75,17.8,.018,.035,h);for(let[v,_,T]of[[-11,-3,-7],[-3,3,0]]){for(let[R,N]of[[v,T-Ln/2],[T+Ln/2,_]])i((R+N)/2,5.25,-7.902,N-R,3.2,.028,x),i((R+N)/2,3.73,-7.866,N-R,.16,.045,a);i(T,6.4,-7.902,Ln,1.2,.028,x)}for(let v=0;v<2;v++)for(let _=0;_<3;_++){let T=.95+_*.62,R=5.95-v*.82;i(T,R,-7.85,.53,.69,.05,a),i(T,R,-7.812,.46,.61,.016,s("\u8D70\u5ECA\u6444\u5F71"+(v+_)%3,10198934))}i(-4.5,5.25,-7.81,1.15,1.4,.12,o);for(let v of[-5.1,-3.9])i(v,5.25,-7.68,.07,1.5,.35,r);for(let v of[4.5,6])i(-4.5,v,-7.68,1.25,.07,.35,r);i(-4.5,5.94,-7.62,1.05,.02,.05,h),e(-4.5,4.68,-7.6,.12,.3,l),t(-4.5,4.94,-7.6,.15,.19,.12,l),i(16,3.5,-.5,10,.2,15,s("\u513F\u7AE5\u9732\u53F0\u77F3\u6750",13156783));for(let v of[-7.96,6.96])i(16,4.24,v,10,1.28,.06,c,!0),i(16,4.91,v,10,.05,.07,a);i(20.96,4.24,-.5,.06,1.28,15,c,!0),i(20.96,4.91,-.5,.07,.05,15,a);for(let[v,_]of[[-7.15,1.7],[1.45,11.1]])i(11.04,4.24,v,.06,1.28,_,c,!0),i(11.04,4.91,v,.07,.05,_,a);let y=s("\u513F\u7AE5\u8BBE\u65BD\u8584\u8377\u7EFF",8961456),S=s("\u6ED1\u68AF\u6674\u7A7A\u84DD",7974347,{roughness:.35}),M=s("\u6C99\u6C60\u7EC6\u6C99",14534548),w=s("\u513F\u7AE5\u8F6F\u57AB",14727570);i(16,3.635,-1,6,.05,7,w),i(17,4.82,-2.6,1.35,.12,1.25,y);for(let v of[16.4,17.6])for(let _ of[-3.1,-2.1])i(v,4.18,_,.07,1.16,.07,r);for(let v=0;v<6;v++)i(17,3.7+v*.2,-4+v*.18,1,.16,.2,y);let E=i(17,4.3,-.7,1.05,.09,3.1,S);E.rotation.x=.38;for(let v of[16.4,17.6])n([v,4.95,-2.15],[v,3.82,.75],.075,S),n([v,4.85,-3.15],[v,5.45,-3.15],.045,r);f(17,-1.2,1.65,5.8,3.6,1.9),i(14,3.83,3,2.2,.46,2.1,r,!0),i(14,4.07,3,2,.035,1.9,M),e(14.4,4.2,3.2,.13,.23,S),t(13.6,4.12,2.6,.15,.07,.14,y),i(19.3,4.05,4.9,2,.9,.65,o,!0);for(let v=0;v<4;v++)i(18.6+v*.46,4.25,5.25,.35,.4,.05,[y,S,w][v%3]),t(18.6+v*.46,4.62,4.9,.14,.14,.14,[y,S,w][v%3]);for(let v=0;v<4;v++)e(19,3.71,-3+v*.85,.26,.2,v%2?y:S);i(12.1,4.04,1,.65,.18,2.2,r,!0),i(11.83,4.4,1,.12,.7,2.2,r),d.push({x:12.1,z:1,y:3.6,rotation:Math.PI/2,type:"sit"}),g(12,5.7,.8,3.6),g(20,5.8,.7,3.6)}function o0(){let i=(a,c=1024,l=768)=>{let h=document.createElement("canvas");h.width=c,h.height=l,a(h.getContext("2d"),c,l);let u=new yn(h);return u.colorSpace=dt,u.anisotropy=4,u};function e(a,c,l,h,u,d,f=0){a.fillStyle=d,a.beginPath(),a.ellipse(c,l,h,u,f,0,Math.PI*2),a.fill()}let t=i((a,c,l)=>{a.fillStyle="#f7eddd",a.fillRect(0,0,c,l);for(let h=0;h<c;h+=8)a.strokeStyle=h%24?"#eee4d530":"#d6c3a035",a.beginPath(),a.moveTo(h,0),a.lineTo(h,l),a.stroke();for(let h=0;h<l;h+=6)a.fillStyle="#ffffff20",a.fillRect(0,h,c,1)}),n=i((a,c,l)=>{let h=a.createLinearGradient(0,0,0,l);h.addColorStop(0,"#cfebed"),h.addColorStop(1,"#fff2cb"),a.fillStyle=h,a.fillRect(0,0,c,l);for(let f=0;f<8;f++)e(a,90+f*275,690,330,130,f%2?"#b1d1ac":"#d3e0b4"),e(a,100+f*280,95+f%2*90,85,30,"#fffaf0");a.fillStyle="#466c62",a.font="bold 50px sans-serif",a.fillText("\u5B9D\u53EF\u68A6 \xB7 \u4E00\u8D77\u53BB\u5192\u9669",110,340),a.font="25px sans-serif",a.fillText("\u6BCF\u4E00\u5929\uFF0C\u90FD\u6709\u65B0\u7684\u53D1\u73B0",115,393);let u=1260,d=442;a.save(),a.translate(u,d),a.fillStyle="#e8b72b",a.beginPath(),a.moveTo(135,50),a.lineTo(240,-40),a.lineTo(220,50),a.lineTo(295,15),a.lineTo(265,110),a.lineTo(150,145),a.closePath(),a.fill(),e(a,0,100,104,120,"#f7d64d"),e(a,0,-10,112,95,"#ffe269");for(let f of[-1,1])e(a,f*65,-131,24,102,"#ffe269",f*.27),e(a,f*84,-204,20,32,"#343a3a",f*.27),e(a,f*40,-24,12,18,"#343a3a"),e(a,f*37,-29,4,6,"#fff"),e(a,f*78,16,21,16,"#e67962"),e(a,f*65,205,45,24,"#f7d64d");e(a,0,-2,6,4,"#343a3a"),a.strokeStyle="#76523f",a.lineWidth=4,a.beginPath(),a.moveTo(-22,29),a.quadraticCurveTo(-10,42,0,30),a.quadraticCurveTo(12,43,24,28),a.stroke(),a.restore();for(let[f,g,x]of[[1750,530,68],[865,595,45],[1940,200,40]])e(a,f,g,x,x,"#fff9ee"),a.fillStyle="#e9887e",a.beginPath(),a.arc(f,g,x,Math.PI,Math.PI*2),a.fill(),a.fillStyle="#536b69",a.fillRect(f-x,g-4,x*2,8),e(a,f,g,x*.24,x*.24,"#536b69"),e(a,f,g,x*.15,x*.15,"#fff9ee")},2048,768),s=i((a,c,l)=>{a.fillStyle="#faf2e5",a.fillRect(0,0,c,l),e(a,710,190,115,115,"#d7ad7a");for(let h=0;h<4;h++){a.fillStyle=["#d2d9c4","#aebdad","#7f9c92","#52766d"][h],a.beginPath(),a.moveTo(0,l);for(let u=0;u<=c;u+=8)a.lineTo(u,360+h*100+Math.sin(u*.007+h)*85);a.lineTo(c,l),a.fill()}a.fillStyle="#f6efdf",a.font="28px serif",a.fillText("\u5C71\u5C45 \xB7 \u56DB\u5B63",65,690)}),r=i((a,c,l)=>{a.fillStyle="#fcf4e8",a.fillRect(0,0,c,l);for(let h=0;h<5;h++){a.strokeStyle="#96815f",a.lineWidth=7,a.beginPath(),a.moveTo(500,690),a.quadraticCurveTo(500+h*35,400,170+h*150,130),a.stroke();for(let u=0;u<4;u++)e(a,240+h*115+(u%2?40:-35),220+u*100,65,24,["#b1bda3","#819c89","#cabd96"][h%3],h*.5-.8)}a.fillStyle="#6b7a66",a.font="28px serif",a.fillText("\u53F6\u5F71 \xB7 \u6162\u65F6\u5149",65,690)}),o=(a,c)=>new tt({name:a,map:c,roughness:.88});return{...s0(),\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8:o("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",t),\u5B9D\u53EF\u68A6\u5899\u5E03:o("\u5B9D\u53EF\u68A6\u5899\u5E03",n),\u5C71\u5C45\u6302\u753B:o("\u5C71\u5C45\u6302\u753B",s),\u690D\u7269\u6302\u753B:o("\u690D\u7269\u6302\u753B",r)}}function a0({box:i,mat:e}){let t=e("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",16248285),n=e("\u5B9D\u53EF\u68A6\u5899\u5E03",14216423),s=e("\u6302\u753B\u6D45\u6A61\u6728\u6846",12689787),r=e("\u5C71\u5C45\u6302\u753B",11782579),o=e("\u690D\u7269\u6302\u753B",12241846);i(-3.105,5.3,-13,.025,3.2,9.8,t),i(3.105,5.3,-13.5,.025,3.2,8.7,t),i(2.895,5.3,-13,.025,3.2,9.6,t),i(2.875,5.3,-14.45,.015,3.2,5.7,n),i(-2.895,5.3,-13,.025,3.2,9.6,t),i(-20.8,1.72,3.8,.024,3.2,3.5,t),i(20.8,1.72,3.8,.024,3.2,3.5,t),i(-13.2,-1.95,-12.905,3.5,3.1,.025,t),i(-20.6,-1.95,-13.105,3.5,3.1,.025,t);function a(c,l,h,u,d,f=!1,g=r){i(c,l,h,f?.065:u+.12,d+.12,f?u+.12:.065,s),i(c+(f?.043:0),l,h+(f?0:.043),f?.018:u,d,f?u:.018,g)}i(-3.14,5.7,-15.35,.065,1.02,1.47,s),i(-3.183,5.7,-15.35,.018,.9,1.35,o),a(-20.73,1.9,3.8,1.8,1.15,!0),i(20.7,1.9,3.8,.06,1.28,1.92,s),i(20.657,1.9,3.8,.018,1.15,1.8,o),a(-13.2,-1.8,-12.86,1.45,.9,!1,r),a(3.5,1.9,-17.45,1.35,.9,!1,o)}var Of=[[-7,-12,3.6],[0,-12,3.6],[5,-14,3.6],[-16,0,0],[-16,-13,0],[16,0,0],[15,-5.3,0],[0,-10,0],[-6,-14,0],[5,-13,0],[-20,-16,-3.6],[-14,-16,-3.6],[-20,-10,-3.6],[-14,-10,-3.6],[-17,20,0]];function l0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,glass:h,plaster:u,lightmat:d,architecture:f,seats:g,obstacle:x,sofa:m,table:p,chair:y,books:S,plant:M,rug:w}=i,E=r("\u536B\u6D74\u767D\u74F7",15920869,{roughness:.25}),v=r("\u536B\u6D74\u4E94\u91D1",10332588,{roughness:.2,metalness:.8}),_=r("\u536B\u6D74\u7070\u77F3",11977151,{roughness:.35}),T=r("\u6536\u7EB3\u7EC7\u7269",8623498),R=r("\u73A9\u5177\u7C89",15184569),N=r("\u73A9\u5177\u9EC4",15252311);function F(I,O,V,P=0,z=1.1,X=.55){e(I,P+z/2,O,V,z,X,a,!0);for(let Y=0;Y<Math.ceil(V/.55);Y++){let re=I-V/2+(Y+.5)*V/Math.ceil(V/.55);e(re,P+z/2,O+X/2+.012,.015,z-.08,.015,l),e(re+.1,P+z*.65,O+X/2+.03,.12,.025,.03,v)}}function k(I,O,V,P,z=1.8,X=!1,Y=0){let re=f.children.length;e(I,P+z/2,O,V,z,.12,o);for(let _e of[I-V/2,I+V/2])e(_e,P+z/2,O+.2,.06,z,.5,a);for(let _e=0;_e<4;_e++){e(I,P+.1+_e*z/4,O+.2,V,.06,.5,a);for(let ye=0;ye<5;ye++){let te=I-V*.38+ye*V*.19;X?(t(te,P+.25+_e*z/4,O+.22,.1,.12,.09,ye%2?R:N),e(te,P+.15+_e*z/4,O+.22,.16,.06,.17,T)):e(te,P+.28+_e*z/4,O+.2,.08,.28,.23,[T,c,o][ye%3])}}if(Y){let _e=new Ke;for(let ye of f.children.slice(re))ye.position.x-=I,ye.position.z-=O,_e.add(ye);_e.position.set(I,0,O),_e.rotation.y=Y,f.add(_e)}x(I+Math.sin(Y)*.2,O+Math.cos(Y)*.2,Y?.5:V,Y?V:.5,P,z)}e(4.85,3.617,-13.5,3.5,.03,8.8,_),e(6.65,5.3,-13.5,.15,3.4,9,u,!0);for(let[I,O]of[[3,5-Ln/2],[5+Ln/2,6.65]])e((I+O)/2,5.3,-9,O-I,3.4,.15,u,!0);e(5,6.4,-9,Ln,1.2,.15,u,!0),e(4.2,3.63,-10.25,1.65,.06,1.7,_),e(5.02,4.6,-10.6,.035,2,1,h,!0),s([3.22,4.6,-10],[3.22,6.1,-10],.025,v),s([3.22,6.1,-10],[3.8,6.1,-10],.025,v),n(3.8,6.08,-10,.19,.035,v),n(3.75,3.67,-10.25,.08,.015,l),F(3.85,-12.1,1,3.6,.95,.85),e(3.85,4.08,-11.66,.92,.85,.025,E);let A=n(3.85,4.05,-11.625,.28,.035,v);A.rotation.x=Math.PI/2;let C=n(3.85,4.05,-11.6,.21,.035,l);C.rotation.x=Math.PI/2,e(3.9,4.4,-11.61,.29,.09,.03,l);for(let I=0;I<3;I++)e(3.85,4.6+I*.075,-12.1,.65,.065,.4,I%2?c:T);n(3.9,3.91,-10,.23,.6,T);for(let I=0;I<4;I++)e(3.9,4.21+I*.055,-10,.34,.05,.28,c);e(3.18,5.1,-12.5,.05,.7,.8,v);for(let I of[-12.7,-12.3])e(3.25,4.8,I,.045,.6,.28,c);e(-.6,3.81,-15.7,2.4,.42,3.8,a,!0),e(-.6,4.055,-15.7,2.3,.07,3.7,r("\u69BB\u69BB\u7C73\u8349\u7F16",12105354)),e(-.6,4.17,-15.7,2.05,.17,3.5,c);for(let I of[-1.38,-.6,.18])e(I,3.81,-13.775,.7,.27,.025,o),e(I,3.84,-13.75,.15,.02,.025,l);g.push({x:-.6,z:-15.7,y:3.6,rotation:0,type:"lie"}),k(-2.83,-11.8,2.6,3.6,1.8,!1,Math.PI/2),k(2.83,-12.1,2.4,3.6,1.2,!0,-Math.PI/2),p(1.85,-17.2,1.5,.8,3.6),y(1.85,-16.5,Math.PI,3.6),e(1.85,4.43,-17.2,.42,.025,.3,c),m(-5.2,-12.5,Math.PI/2,3.6),p(-4,-12.5,.7,1.35,3.6),e(-3.2,4.05,-12.5,.4,.9,2,o,!0),e(-3.2,5.15,-12.5,.07,1,1.65,l),e(-3.245,5.15,-12.5,.015,.91,1.53,r("\u7535\u89C6\u753B\u9762",7574929)),M(-3.7,-17,.7,3.6),e(-9.4,3.72,-12,1.1,.24,2,l,!0),e(-9.4,3.86,-12,.85,.035,1.75,T);for(let I of[-9.86,-8.94])s([I,3.85,-12.85],[I,4.8,-12.85],.035,v);e(-9.4,4.8,-12.85,1,.05,.06,v),e(-9.4,4.94,-12.88,.55,.25,.045,l);for(let I of[-15.2,-14.6]){s([-4.25,3.88,I],[-3.65,3.88,I],.035,v);for(let O of[-4.23,-3.67])t(O,3.88,I,.12,.14,.14,l)}w(-4,-16,1.4,2,3.6),e(-16,3.5,-6,10,.2,26,r("\u9633\u53F0\u9632\u6ED1\u77F3",12170403));for(let I of[-18.95,6.95])e(-16,4.17,I,10,1.15,.06,h,!0),e(-16,4.77,I,10,.05,.08,l);e(-20.95,4.17,-6,.06,1.15,26,h,!0),e(-20.95,4.77,-6,.08,.05,26,l);for(let[I,O]of[[(-29-Mi/2)/2,9-Mi/2],[(-10+Mi/2+7)/2,17-Mi/2]])e(-11.05,4.17,I,.06,1.15,O,h,!0),e(-11.05,4.77,I,.08,.05,O,l);p(-16,-6,2.1,1.1,3.6),y(-16,-4.9,Math.PI,3.6),y(-16,-7.1,0,3.6),g.push({x:-16,z:-4.9,y:3.6,rotation:Math.PI,type:"sit"});for(let[I,O]of[[-20,-17],[-20,5],[-12,5]])M(I,O,1.1,3.6);n(-16,4.46,-6,.12,.16,E);for(let I of[-16.4,-15.6])n(I,4.42,-6,.07,.1,E);m(-18,1,Math.PI,3.6),p(-18,-.2,1.3,.7,3.6),F(19,-5.5,2.2),k(19,-6.4,2.6,0,2.25),M(20,4,.9),F(-18,5.9,3),F(-19,-16.9,2,0,1.1),F(3.5,-17.4,2.1),M(3,-5.3,.65),F(18,5.8,3.2),k(-12,-18.1,1.2,-3.6,2),F(-12.1,-8.1,1.2,-3.6,1);for(let[I,O,V]of[[19,-5.5,0],[-18,5.9,0],[3.5,-17.4,0],[-12.1,-8.1,-3.6]])n(I,V+1.2,O,.11,.22,E),s([I,V+1.25,O],[I+.13,V+1.65,O],.015,o),t(I+.13,V+1.65,O,.17,.09,.08,T);for(let[I,O,V]of Of)e(I,V+3.02,O,1.4,.07,.6,l),e(I,V+2.975,O,1.3,.025,.5,d);for(let I of[-20,-12])for(let O of[-15,-5,5])e(I,3.98,O,.16,.65,.16,l),e(I,4.25,O,.18,.15,.18,d)}var Oa=new U;function ai(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Oa.copy(e),Oa[n]=0,Oa.normalize();let l=.5*o/(o+a),h=1-Oa.angleTo(i)/c;return Math.sign(Oa[t])===1?h*l:a/(o+a)+l+l*(1-h)}var us=class i extends Vt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new U,l=new U,h=new U(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new U,m=.5/o;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[y+0]=ai(x,l,"z","y",r,n),f[y+1]=1-ai(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-ai(x,l,"z","y",r,n),f[y+1]=1-ai(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-ai(x,l,"x","z",r,e),f[y+1]=ai(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-ai(x,l,"x","z",r,e),f[y+1]=1-ai(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-ai(x,l,"x","y",r,e),f[y+1]=1-ai(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=ai(x,l,"x","y",r,e),f[y+1]=1-ai(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function c0({box:i,ell:e,cyl:t,mat:n,architecture:s,seats:r,obstacle:o}){let a=n("\u4E3B\u9898\u5976\u6CB9\u767D",16773083,{roughness:.38}),c=n("\u4E3B\u9898\u6A31\u82B1\u7C89",15247805),l=n("\u4E3B\u9898\u6DE1\u7D2B",12101080),h=n("\u4E3B\u9898\u6674\u7A7A\u84DD",11128800),u=n("\u4E3B\u9898\u9999\u69DF\u91D1",13083239,{metalness:.65,roughness:.28}),d=n("\u4E3B\u9898\u6696\u706F\u5E26",16770737,{emissive:16767131,emissiveIntensity:2}),f=n("\u4E3B\u9898\u70AD\u9ED1",2499884),g=n("\u76AE\u5361\u4E18\u9EC4",16764725),x=n("\u7CBE\u7075\u7403\u7EA2",15158089);function m(v,_,T,R,N,F,k){let A=new Ie(new us(R,N,F,3,Math.min(R,N,F)*.24),k);return A.position.set(v,_,T),A.castShadow=A.receiveShadow=!0,s.add(A),A}function p(v,_,T,R){let N=new jr;for(let k=0;k<10;k++){let A=k*Math.PI/5+Math.PI/2,C=k%2?R*.44:R,I=Math.cos(A)*C,O=Math.sin(A)*C;k===0?N.moveTo(I,O):N.lineTo(I,O)}N.closePath();let F=new Ie(new na(N,{depth:.025,bevelEnabled:!1}),d);F.position.set(v,_,T),s.add(F)}let y=-3.6;i(-20.2,y+.018,-10.1,4.15,.028,5.45,n("KTV\u6D45\u8272\u77F3\u5730\u9762",15655391,{roughness:.3}));for(let v=0;v<5;v++)for(let _=0;_<3;_++)m(-21.85+v*.72,y+.58+_*.91,-12.8,.7,.89,.1,[c,h,a,l,a][v]);for(let v of[-22.17,-18.22])m(v,y+1.6,-12.68,.04,2.9,.04,d);m(-20.2,y+3.06,-12.65,3.95,.045,.045,d);for(let v=0;v<5;v++)m(-21.6+v*.68,y+.48,-8.8,.72,.52,1.03,a),m(-21.6+v*.68,y+.98,-8.35,.73,.85,.38,a),e(-21.6+v*.68,y+.86,-8.64,.25,.23,.14,v%2?l:c);o(-20.25,-8.65,3.7,1.25,y,1.45),r.push({x:-20.3,z:-8.9,y,rotation:Math.PI,type:"sit"}),m(-20.4,y+.71,-10.5,1.7,.12,.75,a);for(let v of[-21.1,-19.7])for(let _ of[-10.78,-10.22])t(v,y+.34,_,.027,.65,u);o(-20.4,-10.5,1.7,.75,y,.8),m(-20.3,y+.38,-12.15,2.9,.7,.55,a),o(-20.3,-12.15,2.9,.55,y,.8),i(-20.3,y+1.65,-12.43,2.75,1.5,.1,f),i(-20.3,y+1.65,-12.367,2.6,1.35,.018,n("\u7CD6\u679C\u70B9\u6B4C\u5C4F",16777215,{emissive:14991310,emissiveIntensity:.5}));for(let v=0;v<9;v++){let _=-22.2+v*.44,T=y+2.65-Math.sin(v/8*Math.PI)*.35;if(p(_,T,-7.18,.085),v<8){let R=i(_+.22,T-.035,-7.19,.46,.015,.015,u);R.rotation.z=-Math.cos(v/8*Math.PI)*.12}}m(-.6,4.3,-15.3,2.05,.09,2.3,h);let S=(v,_,T,R)=>{e(v,_,T,R,R,R,a);let N=new Ie(new ln(R,20,12,0,Math.PI*2,0,Math.PI/2),x);N.position.set(v,_,T),s.add(N);let F=new Ie(new Fi(R,.025,6,24),f);F.rotation.x=Math.PI/2,F.position.set(v,_,T),s.add(F),e(v,_,T+R,.1,.1,.04,f),e(v,_,T+R+.032,.06,.06,.02,a)};S(-.6,5.23,-17.48,.58),m(-.6,5.18,-17.78,3.8,2.25,.12,h);for(let v of[-2.2,1])p(v,5.7,-17.69,.18);let M=-.05,w=-15.25;e(M,4.61,w,.28,.35,.23,g),e(M,4.98,w,.3,.28,.24,g);for(let v of[-1,1]){let _=e(M+v*.19,5.34,w,.07,.3,.065,g);_.rotation.z=-v*.22,e(M+v*.24,5.57,w,.052,.09,.06,f),e(M+v*.115,5.04,w+.22,.035,.042,.025,f),e(M+v*.22,4.94,w+.19,.06,.05,.025,x),e(M+v*.2,4.38,w+.1,.12,.08,.16,g)}for(let v=0;v<3;v++)S(2.6,4.98,-12.8+v*.62,.18);let E=t(0,3.622,-10.7,1.32,.03,x);t(0,3.64,-10.7,.38,.025,a),i(0,3.654,-10.7,2.64,.014,.09,f)}function h0(i){let e=document.createElement("canvas");e.width=768,e.height=432;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,768,432);n.addColorStop(0,"#f2b8ce"),n.addColorStop(1,"#b7c9ec"),t.fillStyle=n,t.fillRect(0,0,768,432),t.fillStyle="#574b6b",t.font="bold 32px sans-serif",t.fillText("\u7CD6\u679C\u661F\u5149 \xB7 \u5BB6\u5EAD\u6B22\u5531",40,55),t.font="22px sans-serif",["\u4EB2\u5B50\u513F\u6B4C","\u6D41\u884C\u91D1\u66F2","\u7ECF\u5178\u8001\u6B4C","\u6211\u7684\u6B4C\u5355","\u6B22\u4E50\u5408\u5531","\u8F7B\u677E\u4F34\u594F"].forEach((r,o)=>{let a=143+o%3*238,c=155+Math.floor(o/3)*150;t.fillStyle="#fff0dc",t.beginPath(),t.arc(a,c,53,0,Math.PI*2),t.fill(),t.fillStyle="#6a597a",t.textAlign="center",t.fillText(["\u266B","\u266A","\u2605"][o%3],a,c+10),t.font="22px sans-serif",t.fillText(r,a,c+85)});let s=new yn(e);s.colorSpace=dt,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.map=s,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.needsUpdate=!0}function $M(i,e,t,n=.12){let s=Math.hypot(i,e),r=Math.min(1,s/Math.max(1,t)),o=Math.max(0,(r-n)/(1-n));return{right:s?i/s*o:0,forward:s?-e/s*o:0,x:s?i/s*r*t:0,y:s?e/s*r*t:0}}function u0(i,e){let t=null,n=null,s={right:0,forward:0};function r(){let a=t;t=null,s.right=s.forward=0,e.style.transform="translate(0px, 0px)",i.dataset.active="false",a!==null&&i.hasPointerCapture(a)&&i.releasePointerCapture(a)}function o(a){if(a.pointerId!==t)return;a.preventDefault();let c=$M(a.clientX-n.x,a.clientY-n.y,n.radius);s.right=c.right,s.forward=c.forward,e.style.transform=`translate(${c.x}px, ${c.y}px)`}i.addEventListener("pointerdown",a=>{if(t!==null||a.button>0)return;a.preventDefault();let c=i.getBoundingClientRect();n={x:c.left+c.width/2,y:c.top+c.height/2,radius:c.width*.32},t=a.pointerId,i.setPointerCapture(t),i.dataset.active="true",o(a)}),i.addEventListener("pointermove",o);for(let a of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(a,c=>{c.pointerId===t&&r()});return{state:s,reset:r}}var Ns=[...[["masterDoor","\u4E3B\u5367\u623F\u95E8",-7,-8,"x",Ln],["childDoor","\u513F\u7AE5\u623F\u95E8",0,-8,"x",Ln],["bathDoor","\u536B\u6D74\u623F\u95E8",5,-9,"x",Ln],["balconyDoor","\u4E3B\u5367\u9633\u53F0\u95E8",-11,-10,"z",Mi]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,z:n,axis:s,width:r,height:2.2,y:3.6,open:!0,angle:1,interior:!0})),{id:"gate",name:"\u5EAD\u9662\u5927\u95E8",x:0,z:30,axis:"x",width:12,height:2.5,y:0,open:!0,angle:1},{id:"basementDoor",name:"\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8",x:-22.4,z:-18,axis:"z",width:1.8,height:2.5,y:-3.6,open:!0,angle:1}];function f0(i,e,t){return Ns.some(n=>{if(Math.abs(t-n.y)>=2)return!1;if(!n.interior)return n.angle<.97&&(n.axis==="x"?Math.abs(i-n.x)<n.width/2+.15&&Math.abs(e-n.z)<.25:Math.abs(i-n.x)<.25&&Math.abs(e-n.z)<n.width/2+.15);let s=n.interior?1:n.axis==="x"?2:1,r=n.width/s;for(let o=0;o<s;o++){let a=o===0?-1:1,c=(n.axis==="x"?-a:n.id==="balconyDoor"?-1:1)*n.angle*Math.PI/2,l=n.axis==="x"?n.x+a*n.width/2:n.x,h=n.axis==="x"?n.z:n.z-n.width/2,u=i-l,d=e-h,f=u*Math.cos(c)-d*Math.sin(c),g=u*Math.sin(c)+d*Math.cos(c);if(n.axis==="x"?Math.abs(f+a*r/2)<r/2+.14&&Math.abs(g)<.18:Math.abs(g-r/2)<r/2+.14&&Math.abs(f)<.18)return!0}return!1})}function d0(i,e){let t=Ns.find(n=>n.id===i);return!t||t.open&&(t.axis==="x"?Math.abs(e.x-t.x)<t.width/2+.3&&Math.abs(e.z-t.z)<1.1:Math.abs(e.x-t.x)<1.1&&Math.abs(e.z-t.z)<t.width/2+.3)&&Math.abs(e.y-t.y)<2?!1:(t.open=!t.open,!0)}function p0(i){let e=new Ke;i.add(e);let t=new tt({color:11413281,roughness:.5}),n=new tt({color:13870926,metalness:.5,roughness:.4}),s=new tt({color:2637112}),r=new tt({color:16764784,emissive:16755769,emissiveIntensity:1.7});function o(f,g,x,m,p,y,S,M=e){let w=new Ie(new Vt(m,p,y),S);return w.position.set(f,g,x),w.castShadow=w.receiveShadow=!0,M.add(w),w}function a(f,g,x,m,p,y=e){let S=new Ie(new ln(m,20,14),p);return S.position.set(f,g,x),S.castShadow=!0,y.add(S),S}function c(f,g,x,m,p,y,S=!1,M=0){let w=document.createElement("canvas");w.width=S?128:768,w.height=S?768:128;let E=w.getContext("2d");E.fillStyle="#a41919",E.fillRect(0,0,w.width,w.height),E.strokeStyle="#dcb971",E.lineWidth=7,E.strokeRect(7,7,w.width-14,w.height-14),E.fillStyle="#ffe6a1",E.textAlign="center",E.textBaseline="middle",E.font=(S?"75":"74")+'px "Songti SC",serif',S?[...f].forEach((T,R)=>E.fillText(T,64,58+R*650/(f.length-1))):E.fillText(f,384,64);let v=new yn(w);v.colorSpace=dt;let _=new Ie(new Qn(p,y),new tt({map:v,roughness:.75,side:An}));_.position.set(g,x,m),_.rotation.y=M,e.add(_)}let l=[];for(let f of Ns){let g=f.interior?1:f.axis==="x"?2:1;for(let x=0;x<g;x++){let m=new Ke,p=x===0?-1:1,y=f.width/g;if(e.add(m),f.interior)f.axis==="x"?(m.position.set(f.x+p*f.width/2,f.y,f.z),o(-p*y/2,1.1,0,y,2.2,.08,s,m),o(-p*(y-.17),1.15,.065,.055,.23,.05,n,m)):(m.position.set(f.x,f.y,f.z-f.width/2),o(0,1.1,y/2,.08,2.2,y,s,m),o(-.07,1.15,y-.17,.045,.23,.055,n,m));else if(f.axis==="x"){m.position.set(f.x+p*f.width/2,f.y,f.z);for(let S=0;S<14;S++)o(-p*(S+.5)*y/14,1.15,0,.06,2.3,.09,s,m);o(-p*y/2,.45,0,y,.55,.1,s,m),o(-p*y/2,2.35,0,y,.09,.12,n,m)}else m.position.set(f.x,f.y,f.z-f.width/2),o(0,1.2,y/2,.1,2.4,y,s,m),o(-.08,1.1,y-.2,.06,.25,.045,n,m);l.push({d:f,pivot:m,sign:p})}}for(let f of[-6.4,6.4])o(f,1.7,30,.65,3.4,.65,s),a(f,3.85,30,.45,t),o(f,3.35,30,.05,.35,.05,n);o(0,3.3,30,13.5,.25,.9,s),c("\u6625\u56DE\u5927\u5730\u798F\u6EE1\u95E8",6.4,1.7,30.34,.46,2.5,!0),c("\u559C\u5165\u534E\u5802\u5BB6\u5174\u65FA",-6.4,1.7,30.34,.46,2.5,!0),c("\u9616\u5BB6\u6B22\u4E50",0,3.3,30.47,3.6,.48),c("\u8FCE\u6625\u63A5\u798F",0,2.98,-3.85,2.3,.4),c("\u5BB6\u548C\u4E07\u4E8B\u5174",-2.75,1.65,-3.85,.32,2.3,!0),c("\u4EBA\u987A\u767E\u4E1A\u65FA",2.75,1.65,-3.85,.32,2.3,!0);for(let f of[-9,-5,5,9])a(f,2.65,-2.5,.3,t),o(f,2.14,-2.5,.035,.4,.035,n);for(let f of[-32.72,32.72])for(let g of[-14,-4,6,16,26])o(f,1.35,g,.16,.5,.24,s),o(f+(f<0?.09:-.09),1.35,g,.06,.3,.2,r);for(let f of[-27,-18,-9,9,18,27])o(f,1.35,29.75,.28,.48,.14,s),o(f,1.35,29.66,.22,.3,.04,r);let h=new Ke;e.add(h);let u=new tt({color:15987952,roughness:1});for(let f of[-3,3]){a(f,.53,25,.55,u,h),a(f,1.2,25,.4,u,h),a(f,1.76,25,.3,u,h),o(f,2.08,25,.62,.08,.62,s,h),o(f,2.23,25,.4,.28,.4,s,h);for(let m of[-.1,.1])a(f+m,1.82,25+.275,.028,s,h);let x=new Ie(new xi(.07,.25,12),n);x.rotation.x=Math.PI/2,x.position.set(f,1.72,25+.36),h.add(x),o(f,1.48,25,.69,.13,.69,t,h);for(let m of[-1,1]){let p=o(f+m*.55,1.3,25,.65,.045,.045,s,h);p.rotation.z=m*.3}}function d(f,g){h.visible=g;for(let x of Ns)x.angle=nn.damp(x.angle,x.open?1:0,6,f);for(let x of l)x.pivot.rotation.y=(x.d.axis==="x"?x.d.interior?-x.sign:x.sign:x.d.id==="balconyDoor"?-1:1)*x.d.angle*Math.PI/2}return d(0,!1),{update:d,group:e}}function jM(){return new Promise(i=>{typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:400}):setTimeout(i,24)})}var xh=class{constructor({yieldWork:e=jM,onChange:t=()=>{}}={}){this.tasks=[],this.running=!1,this.yieldWork=e,this.onChange=t}add(e,t,{when:n=()=>!0,priority:s=10}={}){if(this.tasks.some(r=>r.id===e))throw Error("\u91CD\u590D\u7D20\u6750\u4EFB\u52A1 "+e);this.tasks.push({id:e,load:t,when:n,priority:s,state:"pending"})}async update(e){if(this.running)return;let t=this.tasks.filter(n=>n.state==="pending"&&n.when(e)).sort((n,s)=>n.priority-s.priority)[0];if(t){this.running=!0,t.state="loading",this.onChange(this.stats);try{await this.yieldWork(),await t.load(),t.state="done"}catch(n){t.state="error",t.error=String(n),console.warn("\u7D20\u6750\u6682\u672A\u8F7D\u5165:",t.id,n)}finally{this.running=!1,this.onChange(this.stats)}}}retry(){for(let e of this.tasks)e.state==="error"&&(e.state="pending");this.onChange(this.stats)}get stats(){return{total:this.tasks.length,loaded:this.tasks.filter(e=>e.state==="done").length,failed:this.tasks.filter(e=>e.state==="error").length,active:this.tasks.find(e=>e.state==="loading")?.id||null}}};async function Bf(i){let e=globalThis.MANSION_ASSETS?.[i];if(!e)throw Error("\u7F3A\u5C11\u7D20\u6750 "+i);if(e.startsWith("assets/")){let s=new AbortController,r=setTimeout(()=>s.abort(),2e4);try{let o=await fetch(e,{cache:"default",signal:s.signal});if(!o.ok)throw Error(`${i}: HTTP ${o.status}`);return await o.arrayBuffer()}finally{clearTimeout(r)}}let t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}function zf(i,e){let t=i<=700||e&&i<=1200;return{mobile:t,fov:t?68:52,distance:t?7.5:5,pixelCap:t?1.85:1/0}}function m0(i,e,t,n=!1){return n?"global":e<-.3?"basement":e>7?"roof":e>3.3?"upper":t<7&&i<-11?"west":t<7&&i>11?"east":t<-4&&Math.abs(i)<11?"main":"garden"}function g0(i){let{box:e,mat:t,branch:n,root:s}=i,r=t("\u516C\u53F8\u6D45\u8272\u77F3\u6750",14210247),o=t("\u516C\u53F8\u7ACB\u9762\u7EBF\u811A",15262937),a=t("\u516C\u53F8\u7A97\u6846",6648698),c=t("\u516C\u53F8\u73BB\u7483",9878990,{transparent:!0,opacity:.28,depthWrite:!1,roughness:.22,metalness:.2}),l=t("\u516C\u53F8\u529E\u516C\u5730\u6BEF",9608088),h=t("\u516C\u53F8\u529E\u516C\u684C",14075560),u=t("\u516C\u53F8\u529E\u516C\u6905",3361352),d=t("\u516C\u53F8\u7535\u8111\u5C4F\u5E55",8240821,{emissive:3235173,emissiveIntensity:.65}),f=t("\u516C\u53F8\u9876\u706F",15200743,{emissive:14085343,emissiveIntensity:.8}),g=s.userData.officeLabels=[];e(69,-.04,28,14,.08,3.6,r),g.push({text:"\u5411\u9633\u5C0F\u5B66 \u2192 \u5357\u95E8\u76F4\u8FBE",x:62,y:2.6,z:25.7,rotation:Math.PI,w:3,h:.5}),e(39,-.035,18,8,.07,34,t("\u516C\u53F8\u9A6C\u8DEF",6318439)),e(21.5,-.025,32,43,.05,2,r),e(44.5,-.025,18,3,.05,34,r);for(let x=3;x<35;x+=4)e(39,.005,x,.12,.012,1.8,o);for(let x=35.5;x<43;x+=1)e(x,.01,18,.55,.02,2.6,o);e(58,-.07,18,30,.12,32,r),g.push({text:"\u4E30\u5DE2 \xB7 \u6B66\u6C49\u7814\u53D1\u4E2D\u5FC3",x:45.64,y:5.05,z:18,rotation:-Math.PI/2,w:11,h:1},{text:"\u8FC7\u8857 \u2192 \u4E30\u5DE2\u7814\u53D1\u4E2D\u5FC3",x:26,y:1.7,z:32.8,w:7,h:.6},{text:"\u4E00\u81F3\u4E94\u697C\u529E\u516C \xB7 \u697C\u68AF / \u7535\u68AF\u76F4\u8FBE\u5929\u53F0",x:48,y:2.6,z:18,rotation:-Math.PI/2,w:6,h:.5});for(let x of gn){for(let m of mh())e((m.x1+m.x2)/2,x.y-.1,(m.z1+m.z2)/2,m.x2-m.x1,.2,m.z2-m.z1,x.y===18?r:l);if(x.y!==18){for(let m of[4,26]){let p=x.y===0&&m===26?[[53.3,14.6],[66.7,6.6]]:[[58,24]];for(let[y,S]of p)e(y,x.y+1.8,m,S,3.6,.18,c,!0),e(y,x.y+.4,m,S,.8,.24,r,!0);x.y===0&&m===26&&e(62,3.1,m,2.8,1,.24,r,!0)}e(70,x.y+1.8,15,.2,3.6,22,r,!0);for(let[m,p]of[[9,10],[23,6]])e(46,x.y+1.8,m,.12,3.6,p,c,!0),e(46,x.y+.4,m,.35,.8,p,r,!0);x.y>0&&e(46,x.y+1.8,17,.12,3.6,6,c,!0);for(let m of[4,7,10,13,14,20,23,26])e(45.85,x.y+1.8,m,.6,3.6,.3,o,!0);e(45.8,x.y+3.45,15,.7,.3,22.6,o),e(70,x.y+3.45,15,.4,.3,22.6,o);for(let m of[50,56,62])for(let p of[10,18,23])e(m,x.y+3.28,p,2.5,.035,.18,f);for(let m of[6])e(65,x.y+1.6,m,2,3.2,.08,c,!0);e(64,x.y+1.6,7,.08,3.2,2,c,!0),e(66,x.y+1.6,7,.08,3.2,2,c,!0),g.push({text:x.name+" \xB7 \u5F00\u653E\u529E\u516C\u533A",x:62,y:x.y+2.5,z:25.7,w:4,h:.5},{text:"\u7535\u68AF \u2191 \u5929\u53F0 / \u5404\u5C42",x:65,y:x.y+2.8,z:8.15,w:3,h:.45})}}for(let x of ph){for(let m=0;m<40;m++){let p=x.z1+(m+.5)*.3,y=x.base+(x.reverse?m+1:40-m)*x.height/40;e((x.x1+x.x2)/2,y-.045,p,1.4,.09,.303,r)}for(let m of[x.x1-.06,x.x2+.06]){n([m,x.base+.9+(x.reverse?0:3.6),10],[m,x.base+.9+(x.reverse?3.6:0),22],.025,a);for(let p=0;p<40;p++){let y=10+(p+.5)*.3,S=x.base+(x.reverse?p+.5:39.5-p)*3.6/40;e(m,S+.45,y,.045,.9,.3,c,!0)}}}for(let x of gh){e(x.x,x.y+.77,x.z,2.8,.12,1.2,h,!0);for(let m of[-1.15,1.15])e(x.x+m,x.y+.36,x.z,.06,.72,.85,a);e(x.x,x.y+1.22,x.z+.22,1.1,.64,.07,u),e(x.x,x.y+1.22,x.z+.175,1,.54,.018,d),e(x.x,x.y+.91,x.z+.22,.07,.28,.08,a),e(x.x,x.y+.85,x.z-.24,.65,.035,.23,u),e(x.x+.5,x.y+.85,x.z-.25,.09,.04,.14,u),e(x.x,x.y+.48,x.z-1.05,.58,.13,.6,u,!0),e(x.x,x.y+.83,x.z-1.33,.58,.63,.09,u,!0),e(x.x,x.y+.23,x.z-1.05,.08,.45,.08,a),e(x.x,x.y+.06,x.z-1.05,.7,.06,.65,a)}e(65,20.7,7,2.2,.15,2.2,r);for(let x of[64,66])e(x,19.3,7,.08,2.6,2,c,!0);e(65,19.3,6,2,2.6,.08,c,!0),g.push({text:"\u5929\u53F0\u7535\u68AF",x:65,y:20.5,z:8.15,w:2,h:.4}),e(44.2,3.35,17,4,.12,8,c);for(let x of[13,17,21])n([46,4.5,x],[42.3,3.35,x],.028,a);for(let x of[14,20])e(45.7,9.2,x,.7,18.4,.6,o);for(let x of[4,26])e(58,18.6,x,24,1.2,.08,c,!0);for(let x of[46,70])e(x,18.6,15,.08,1.2,22,c,!0);for(let x of[4,26])e(58,19.22,x,24,.06,.07,a);for(let x of[46,70])e(x,19.22,15,.07,.06,22,a);for(let x of[9,23])e(51,18.25,x,4,.5,.8,r,!0),e(51,18.55,x,3.8,.25,.65,t("\u516C\u53F8\u5929\u53F0\u7EFF\u690D",5799254));e(55,18.75,16,2,.12,1.2,h,!0);for(let x of[53,57])e(x,18.4,16,.8,.8,1,u,!0);g.push({text:"\u5929\u53F0\u89C2\u666F \xB7 \u9A6C\u8DEF\u5BF9\u9762\u662F\u5BB6",x:46.3,y:19.1,z:17,rotation:Math.PI/2,w:6,h:.6})}var _h={color:5857639,transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1};function x0(i){i.traverse(e=>{if(e.isMesh)for(let t of Array.isArray(e.material)?e.material:[e.material])/glass|玻璃/i.test(t.name)&&(t.color.setHex(_h.color),Object.assign(t,{transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1}),"transmission"in t&&(t.transmission=0),t.needsUpdate=!0)})}function _0(){let e=new Uint8Array(262144);for(let s=0;s<256;s++)for(let r=0;r<256;r++){let o=r/256*Math.PI*2,a=s/256*Math.PI*2,c=Math.sin(o+Math.sin(a)*1.2)+.4*Math.sin(3*a+2*o),l=Math.pow(Math.abs(Math.sin(c*6+Math.sin(a*4))),18),h=Math.sin(r*12.9898+s*78.233)*43758.5453,u=110+32*Math.sin(o+a*2)+35*l+9*(h-Math.floor(h)),d=(s*256+r)*4;e[d]=u+7,e[d+1]=u+5,e[d+2]=u,e[d+3]=255}let t=new vn(e,256,256);t.colorSpace=dt,t.wrapS=t.wrapT=tn,t.generateMipmaps=!0,t.minFilter=Cn,t.magFilter=yt,t.anisotropy=4,t.needsUpdate=!0;let n=(s,r,o={})=>new tt({name:s,color:r,roughness:.7,...o});return{\u53A8\u623F\u67DC\u4F53:n("\u53A8\u623F\u67DC\u4F53",3422518,{roughness:.62}),\u53A8\u623F\u77F3\u6750:n("\u53A8\u623F\u77F3\u6750",12170927,{map:t,roughness:.38}),\u53A8\u623F\u5730\u7816:n("\u53A8\u623F\u5730\u7816",14276041,{roughness:.62}),\u53A8\u623F\u9876\u9762:n("\u53A8\u623F\u9876\u9762",5593169,{roughness:.95})}}function v0({box:i,mat:e,dark:t,lightmat:n}){let s=e("\u53A8\u623F\u67DC\u4F53"),r=e("\u53A8\u623F\u77F3\u6750"),o=e("\u53A8\u623F\u5730\u7816"),a=e("\u53A8\u623F\u9876\u9762");i(-6.8,.012,-12.8,8,.018,10,e("\u74F7\u7816\u7F1D",11184543));for(let c=0;c<5;c++)for(let l=0;l<6;l++)i(-10.8+.8+c*1.6,.026,-17.8+.833+l*1.666,1.59,.018,1.656,o);i(-6.4,1.62,-17.65,7.7,3.24,.1,s),i(-6.4,1.5,-17.57,5.7,1.05,.06,r);for(let c of[-7.65,-6.35,-5.05])i(c,2.5,-17.19,1.27,1.2,.68,s),i(c,1.895,-16.88,1.22,.024,.025,n);i(-3.45,1.52,-16.9,1.15,3.04,1.3,s,!0),i(-3.45,1.47,-16.226,.88,.74,.035,t),i(-3.45,1.47,-16.2,.72,.52,.014,e("\u7535\u5668\u9762\u677F",1383712)),i(-3.45,1.74,-16.17,.63,.024,.03,t),i(-9.3,1.5,-16.9,1.4,3,1.3,s,!0);for(let c of[-9.65,-8.95])i(c,1.6,-16.229,.68,2.35,.035,s);i(-9.3,1.6,-16.19,.018,1,.028,t),i(-6.5,3.28,-12.7,8.7,.12,10.5,a);for(let c of[-10.72,-2.28])i(c,3.205,-12.7,.025,.018,10.25,n);for(let c of[-17.78,-7.62])i(-6.5,3.205,c,8.4,.018,.025,n);i(-6.5,3.205,-10.3,7.8,.02,.06,t);for(let c of[-9,-7,-5,-3])i(c,3.188,-10.3,.09,.012,.08,n)}var gr={x1:9,x2:10.5,z1:-14.5,z2:-6,height:3.6,base:0,reverse:!0},kf={x1:7,x2:8.5,z1:-15,z2:-6,height:3.6,base:3.6,reverse:!1},mr={x1:-24.5,x2:-22.5,z1:-17,z2:-7,height:3.6,base:-3.6,reverse:!0};function y0(i,e){return i>-18.35&&i<-10.3&&e>-12.3&&e<-11.1}var Ba=null;function M0(i){Ba=i}function S0(i){return Ba?.phase==="idle"&&Ba.door>.98&&Math.abs(Ba.y-i)<.05}var Us=[];function li(i,e,t,n,s=0,r=3){Us.push({x1:i-t/2,x2:i+t/2,z1:e-n/2,z2:e+n/2,y:s,h:r})}function b0(i,e){return i>-20.8&&i<-10.7&&e>-18.8&&e<6.8||i>10.7&&i<20.8&&e>-7.8&&e<6.8}function vh(i,e){return i>-10.8&&i<10.8&&e>-17.8&&e<-4.15}function T0(i,e){return i>-24.8&&i<-11.2&&e>-18.8&&e<-7.15}function yh(i,e,t=0){if(Ri(i,e))return Gd(i,e,t);if(Ff(i,e))return e0(i,e,t);if(Nf(i,e,.15)&&S0(t))return Ba.y;for(let n of[gr,kf,mr]){if(i<n.x1||i>n.x2||e<n.z1||e>n.z2)continue;let s=(n.z2-e)/(n.z2-n.z1),r=n.base+(n.reverse?1-s:s)*n.height;if(Math.abs(r-t)<.25)return r;if(t>=n.base-.01&&t<=n.base+n.height+.01)return NaN}return t>6.95&&(vh(i,e)||y0(i,e))?7.2:t>3.35&&t<3.85&&(vh(i,e)||b0(i,e))?3.6:t<-3.35&&T0(i,e)?-3.6:Math.abs(t)<.25?0:NaN}function Si(i,e,t,n=t){if(Nf(i,e,.12))return S0(t)&&i>it.x1+.14&&e>it.z1+.14&&e<it.z2-.14;if(f0(i,e,t)||(Math.abs(i)>34||e>49||e<-24)&&!Ff(i,e)&&!Ri(i,e)||Math.abs(t)<.25&&(((i+5)/4.35)**2+((e-10)/2.85)**2<1||i>17.1&&i<23.9&&e>3.1&&e<18.9))return!1;let s=yh(i,e,n);if(!Number.isFinite(s)||Math.abs(s-n)>.22||!uo(i,e)&&!Ri(i,e)&&n>6.95&&!vh(i,e)&&!y0(i,e)||!uo(i,e)&&!Ri(i,e)&&n>3.35&&n<3.85&&!vh(i,e)&&!b0(i,e)||n<-3.35&&!T0(i,e)||Math.abs(t)<.001&&i>mr.x1&&i<mr.x2&&e>mr.z1&&e<mr.z2-.1||Ri(i,e)&&Hd(i,e,t))return!1;let r=.2/Me;return!Us.some(o=>t+1.68>o.y+.08&&t<o.y+o.h-.12&&i>o.x1-r&&i<o.x2+r&&e>o.z1-r&&e<o.z2+r)}function w0(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.08));for(let s=0;s<n;s++){let r=i.x+e/n,o=yh(r,i.z,i.y);Si(r,i.z,o,i.y)&&(i.x=r,i.y=o);let a=i.z+t/n;o=yh(i.x,a,i.y),Si(i.x,a,o,i.y)&&(i.z=a,i.y=o)}return i}function E0(i,e){return i.velocity-=16*e,i.height=Math.max(0,i.height+i.velocity*e),i.height===0&&(i.velocity=0),i}function Vf(i){return i.height>.001||i.velocity>0?!1:(i.velocity=6.5,!0)}function A0(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.05)),s=Math.atan2(e,t);for(let r=0;r<n;r++){let o=i.x+e/n,a=i.z+t/n,c=!0;for(let[l,h]of[[0,0],[-.3,-1.05],[.3,-1.05],[-.3,1.05],[.3,1.05]]){let u=o+(Math.cos(s)*l+Math.sin(s)*h)/Me,d=a+(-Math.sin(s)*l+Math.cos(s)*h)/Me;if(Math.abs(yh(u,d,i.y)-i.y)>.001||!Si(u,d,i.y,i.y)){c=!1;break}}if(!c)break;i.x=o,i.z=a}return i}function C0(i){let{box:e,cyl:t,mat:n,wood:s,linen:r,dark:o,glass:a,plaster:c,architecture:l,root:h,seats:u,obstacle:d}=i;e(-17,-.025,20,8,.05,8,c);for(let y of[-21,-13])e(y,1.65,20,.2,3.3,8,c,!0);e(-17,1.65,16,8,3.3,.2,c,!0),e(-17,3.4,20,8.6,.18,8.6,o),e(-17,3.25,24,8.3,.1,.12,s),e(-17,.005,27,5,.04,6,c);let f=n("\u8D8A\u91CE\u8F66\u6F06",4018507,{metalness:.72,roughness:.23}),g=n("\u8F6E\u80CE",2106404),x=n("\u8F66\u8EAB\u9970\u4EF6",9609121,{metalness:.9,roughness:.22});e(-17,.8,20,2.15,.65,4.5,f),e(-17,1.5,19.8,1.92,.85,2.65,f),e(-17,1.62,21.14,1.73,.53,.035,a),e(-17,1.62,18.45,1.73,.53,.035,a);for(let y of[-18,-16])e(y,1.63,19.8,.03,.51,2.2,a),e(y,1.62,19.7,.05,.57,.06,o),e(y,1.19,20.3,.04,.04,.2,x);for(let y of[-18.13,-15.87])for(let S of[18.55,21.4]){let M=t(y,.54,S,.49,.27,g);M.rotation.z=Math.PI/2;let w=t(y+(y<-17?-.15:.15),.54,S,.26,.035,x);w.rotation.z=Math.PI/2}e(-17,.72,22.29,1.1,.32,.045,o);for(let y=-17.45;y<-16.5;y+=.15)e(y,.72,22.32,.045,.27,.035,x);for(let y of[-17.78,-16.22])e(y,.95,22.28,.4,.16,.05,n("\u8F66\u706F",16773068,{emissive:16766352,emissiveIntensity:.5}));e(-17,.46,22.28,2.25,.17,.12,x);for(let y of[-17.73,-16.27])e(y,1.98,19.8,.055,.06,2.8,o);d(-17,20,2.5,4.8,0,2.1);let m=[];h.userData.swings=m;function p(y,S,M,w){for(let _ of[-1,1])e(S+_*1.4,w+1.45,M,.09,2.9,.09,o,!0);e(S,w+2.9,M,3,.1,.12,s);let E=new Ke;E.position.set(S,w+2.8,M),h.add(E),e(0,-2.22,0,1.8,.12,.65,s,!1,E),e(0,-2.08,0,1.72,.18,.6,r,!1,E),e(0,-1.77,-.28,1.72,.55,.1,r,!1,E);for(let _ of[-.8,.8])e(_,-1.1,0,.018,2.2,.018,o,!1,E);let v={x:S,z:M,y:w,rotation:0,type:"sit",swingId:y};u.push(v),m.push({id:y,pivot:E,seat:v,position:new U})}p("roof",2,-7.2,7.2),p("garden",-9.5,22,0)}function R0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,root:f,seats:g,tree:x,plant:m,table:p,chair:y,sofa:S,rug:M}=i,w=r("\u77F3\u677F",12105124),E=r("\u571F\u58E4",4797222),v=r("\u53F6\u7EFF",5466941),_=r("\u6843\u82B1\u7C89",14655659),T=r("\u6A58\u5B50",15111730,{roughness:.65}),R=r("\u6843\u5B50",14983306),N=r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5}),F=[];f.userData.districtLabels=F;let k=(P,z,X,Y)=>F.push({text:P,x:z,y:X,z:Y});function A(P,z,X,Y=_){n(P,z+.25,X,.016,.5,v);for(let re=0;re<5;re++){let _e=re*1.256;t(P+Math.sin(_e)*.065,z+.51,X+Math.cos(_e)*.065,.065,.035,.065,Y)}t(P,z+.54,X,.035,.035,.035,T)}function C(P,z,X,Y,re=0){e(P,re+.23,z,X,.46,Y,o,!0),e(P,re+.47,z,X-.14,.025,Y-.14,E);for(let _e=0;_e<Math.floor(X*3);_e++)for(let ye=0;ye<2;ye++)A(P-X/2+.22+_e*.32,re+.48,z+(ye-.5)*Y*.48,_e%3?_:c)}function I(P,z,X,Y=2.8){e(P,X+1.5,z,Y,1.5,.11,l),e(P,X+1.5,z+.065,Y-.12,1.37,.025,N),e(P,X+.35,z+.1,Y+.6,.7,.6,o,!0)}M(-16,-13,7,7),S(-16,-11,Math.PI),p(-16,-13,2.5,1.1),I(-16,-17.6,0),m(-20,-16,.8),k("\u897F\u7FFC\u4F1A\u5BA2\u5385",-16,2.7,-17.3),e(0,.005,27,4,.05,6,w),e(-27,.005,5,3,.05,44,w);for(let P of[-10,10,18])C(P,26,P<0?2:4,1.5);for(let[P,z,X,Y]of[[-28,9,R,"\u6843\u6811"],[-28,19,T,"\u6A58\u6811"],[28,25,T,"\u6A58\u6811"]]){x(P,z,.65);for(let re=0;re<22;re++){let _e=re*2.4,ye=.85+re%4*.22;t(P+Math.sin(_e)*ye,2.6+re%5*.29,z+Math.cos(_e)*ye,.13,.15,.13,X)}k(Y,P,1.5,z+2.1)}k("\u5730\u4E0B\u5BA4\u5165\u53E3 \u2193",-23.5,1.9,-5.8);let O=-3.6;e(-18,O-.1,-13,14,.2,12,a),e(-25,O+1.65,-13,.2,3.3,12,h,!0),e(-11,O+1.65,-13,.2,3.3,12,h,!0),e(-18,O+1.65,-19,14,3.3,.2,h,!0),e(-18,O+1.65,-7,14,3.3,.2,h,!0),e(-22.4,-2,-12,.1,3.2,10,h,!0);for(let P of[-17.8,-8.7])e(-18,O+1.5,P,.15,3,2.2,o,!0);for(let P of[-20.6,-13.2])e(P,O+1.5,-13,3.6,3,.15,h,!0);for(let P of[-21,-19.5]){for(let z=0;z<4;z++)e(P,O+.3+z*.6,-18.35,1.25,.07,.8,o);for(let z=0;z<3;z++)for(let X=0;X<2;X++)e(P+(X-.5)*.48,O+.53+z*.6,-18.3,.4,.38,.6,r("\u50A8\u7269\u7BB1",11047794))}k("\u50A8\u7269\u95F4",-20.2,O+2.4,-18.2);for(let P of[-15.6,-12.8]){p(P,-17.6,2.1,.9,O),e(P,O+1.22,-17.8,1.1,.66,.08,l),e(P,O+1.22,-17.75,1,.57,.025,r("\u7535\u7ADE\u5C4F\u5E55",7704504,{emissive:3697856,emissiveIntensity:.75})),e(P,O+.86,-17.35,.65,.035,.25,l),e(P+.83,O+.35,-17.6,.38,.7,.6,l),y(P,-16.5,Math.PI,O),g.push({x:P,z:-16.5,y:O,rotation:Math.PI,type:"sit"});for(let z=0;z<3;z++)n(P+.83,O+.25+z*.17,-17.28,.05,.02,u).rotation.x=Math.PI/2}k("\u7535\u7ADE\u623F",-14,O+2.5,-18.65);for(let P of[-21.8,-18.8]){e(P,O+.55,-12.2,.32,1.1,.35,l);for(let z of[.3,.7]){let X=n(P,O+z,-11.99,.1,.02,l);X.rotation.x=Math.PI/2}}n(-19.1,O+.85,-10.7,.025,1.7,l),t(-19.1,O+1.76,-10.7,.055,.11,.055,l),k("KTV \xB7 \u8F7B\u5531\u65F6\u5149",-20.2,O+2.5,-12.4),S(-14.3,-9.1,Math.PI,O),p(-14.3,-10.8,2,.9,O),I(-14,-12.5,O,2.5),k("\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,O+2.5,-12.4),f.userData.basementLight={x:-18,y:-1.3,z:-13};for(let P of[-21,-15])for(let z of[-17,-9])e(P,-.45,z,2.4,.04,.08,u);for(let P of[-18,-4])e(0,7.75,P,22,1.1,.04,d,!0),e(0,8.32,P,22,.045,.055,l);for(let P of[-11,11])for(let[z,X]of P===-11?[[-15.2,5.6],[-7.5,7]]:[[-11,14]])e(P,7.75,z,.04,1.1,X,d,!0),e(P,8.32,z,.055,.045,X,l);for(let P of[-8,-4,0,4])C(P,-17,2.8,.9,7.2);for(let P of[-14,-8])C(-10,P,.9,2.5,7.2);p(-4,-10,2.5,1.3,7.2);for(let P of[-4.8,-3.2])y(P,-8.8,Math.PI,7.2),g.push({x:P,z:-8.8,y:7.2,rotation:Math.PI,type:"sit"});y(-4,-11.2,0,7.2),n(-4,8.14,-10,.18,.22,r("\u9752\u74F7",7903111));for(let P of[-4.7,-3.3])n(P,8.07,-10,.075,.12,c);for(let P=0;P<4;P++){let z=Math.PI/4+P*Math.PI/2;e(-4+Math.cos(z)*3.65,8.55,-10+Math.sin(z)*3.65,.085,2.7,.085,l,!0)}n(-4,10.04,-10,3.8,.12,l),n(-4,10.13,-10,3.65,.1,o,void 0,3.4),n(-4,9.975,-10,3.55,.025,u),e(3,7.43,-12,1.7,.46,2.1,o,!0),e(3,7.67,-12,1.55,.025,1.95,E),k("\u5929\u53F0\u8336\u5E2D",-4,8.8,-12),k("\u5929\u53F0\u82B1\u56ED",1,8.5,-16.5),e(0,-.01,40,10,.04,20,r("\u8857\u9053\u8DEF\u9762",6843751));for(let P of[-6,6])e(P,.015,40,2,.07,20,w);for(let P=32;P<49;P+=4)e(0,.025,P,.12,.008,1.5,c);let V=[];f.userData.vendors=V;for(let P of[-1,1])for(let z=0;z<3;z++){let X=P*10,Y=33.5+z*5,re=r("\u644A\u68DA"+z,[12088147,6651502,13743485][z]);e(X,.6,Y,3,1.2,1.4,o,!0),e(X,1.25,Y,3.15,.1,1.5,a);for(let ye of[-1.5,1.5])for(let te of[-.9,.9])e(X+ye,1.3,Y+te,.055,2.6,.055,l);let _e=e(X,2.65,Y,3.5,.12,2.25,re);_e.rotation.z=P*.06;for(let ye=0;ye<12;ye++){let te=X-1.15+ye%4*.7,me=Y-.45+Math.floor(ye/4)*.45;z===2?A(te,1.3,me):t(te,1.42,me,.18,.13,.16,z===0?T:R)}k(["\u65F6\u4EE4\u9C9C\u679C","\u4E61\u6751\u70B9\u5FC3","\u82B1\u8349\u5C0F\u94FA"][z],X,2.25,Y+1),V.push({x:X+P*2,z:Y,rotation:-P*Math.PI/2})}k("\u4E61\u95F4\u96C6\u5E02 \xB7 \u5411\u524D\u5230\u6CB3\u5CB8",0,3,31),k("\u6CB3\u7554\u6B65\u9053",0,2.8,48),e(0,.01,48,68,.06,3,w),e(0,-.035,55,130,.05,10,r("\u6CB3\u6C34",5406329,{roughness:.15,metalness:.45}));for(let P=0;P<20;P++)e(-58+P*6,-.004,52+P%3*2,2.5,.007,.035,r("\u6CB3\u9762\u6CE2\u7EB9",9744034,{transparent:!0,opacity:.4,depthWrite:!1}));for(let P of[49.6,60.5]){e(0,.9,P,70,.05,.06,l,!0);for(let z=-34;z<=34;z+=2)e(z,.45,P,.04,.9,.04,l)}e(0,.015,62,130,.07,3,w)}function P0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,architecture:f,root:g,roofs:x,obstacle:m,seats:p}=i,y=r("\u8C61\u7259\u74F7",15526366,{roughness:.2}),S=r("\u62C9\u4E1D\u4E0D\u9508\u94A2",9542557,{metalness:.88,roughness:.24}),M=r("\u7535\u5668\u9762\u677F",1383712,{metalness:.35,roughness:.1}),w=r("\u9EC4\u94DC",10521429,{metalness:.8,roughness:.27});function E(A,C,I,O,V,P,z,X=.08,Y=f){let re=new Ie(new us(O,V,P,4,X),z);return re.position.set(A,C,I),re.castShadow=!0,re.receiveShadow=!0,Y.add(re),re}function v(A,C,I,O=.15,V=.4,P=y){let z=[];for(let Y=0;Y<=12;Y++){let re=Y/12;z.push(new ce(O*(.65+Math.sin(re*Math.PI)*.35)*(re>.8?.7:1),re*V))}let X=new Ie(new ia(z,24),P);X.position.set(A,C,I),X.castShadow=!0,f.add(X)}function _(A,C,I=3,O=2.85){e(A,O,C,I,.075,.14,l),e(A,O-.044,C,I-.07,.018,.09,u);for(let V of[-1,1])n(A+V*I*.37,(O+3.3)/2,C,.009,3.3-O,l)}function T(A,C,I,O=30,V=4){let P=new ei(16767664,O,V,2);P.position.set(A,C,I),g.add(P)}function R(A,C,I){n(A,C,I,.18,.018,y),n(A,C+.013,I,.13,.007,y),n(A+.29,C+.075,I-.12,.06,.15,d),e(A-.25,C+.016,I,.024,.016,.28,S),e(A+.23,C+.016,I,.018,.016,.25,S)}for(let A of[-21,21])e(A,1.7,3.8,.23,3.4,3.6,h,!0);for(let A of[-20,20])e(A,1.7,7,1.8,3.4,.22,h,!0);e(10.93,5.3,-15.4,.22,3.4,5.2,h,!0),e(-7,5.3,-18,7.5,3.4,.23,h,!0),E(4.9,.5,-16.5,3.9,1,1.1,o,.06),m(4.9,-16.5,3.9,1.1,0,1),E(4.9,1.05,-16.5,4.1,.1,1.25,y,.04),E(4.1,1.4,-16.6,.8,.6,.5,M,.04);for(let A of[3.85,4.35])n(A,1.16,-16.2,.08,.15,y),e(A,1.5,-16.3,.12,.05,.15,S);for(let A of[4,5,6])n(A,.67,-14.9,.28,.12,o),n(A,.32,-14.9,.035,.65,S),n(A,.04,-14.9,.25,.05,S),p.push({x:A,z:-14.9,y:0,rotation:Math.PI,type:"sit"});_(4.9,-16.5,3.5),e(2.8,1.85,-10,.08,1.6,2.8,l),e(2.75,1.85,-10,.025,1.46,2.65,r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5})),E(2.9,.32,-10,.65,.64,3.3,o,.05),m(2.9,-10,.65,3.3,0,.7);for(let A of[13.7,15,16.3])for(let C of[-5.65,-4.95])R(A,.822,C);v(15,.82,-5.3,.17,.45);for(let A=0;A<5;A++)s([15,.98,-5.3],[15+Math.sin(A)*.25,1.6+Math.cos(A)*.1,-5.3+Math.cos(A)*.2],.008,o);_(15,-5.3,3.5),T(15,2.4,-5.3,22,9),_(-6,-13.6,3.4),T(-6,2.5,-14.5,25,9),_(-17,1,2.4);for(let A=-9.5;A<=-4.5;A+=.85)e(A,.46,-16.225,.025,.8,.015,l),e(A+.25,.77,-16.2,.3,.018,.018,l);E(-8,.98,-16.9,1.05,.035,.65,S,.045),E(-8,1,-16.9,.88,.022,.5,M,.05);let N=new Ie(new Fi(.17,.022,10,24,Math.PI),S);N.position.set(-8,1.25,-17.14),f.add(N),n(-8.17,1.13,-17.14,.025,.26,S),n(-7.83,1.2,-17.14,.023,.1,S),E(-5.2,1,-16.9,1.35,.03,.75,M,.035);for(let A of[-5.6,-4.8])for(let C of[-16.7,-17.1]){let I=new Ie(new Fi(.13,.006,6,24),S);I.rotation.x=Math.PI/2,I.position.set(A,1.021,C),f.add(I)}e(-5.2,.47,-16.19,1.05,.65,.07,M),e(-5.2,.66,-16.12,.8,.035,.035,S),e(-5.2,2.65,-16.9,1.6,.13,.9,S),e(-5.2,2.96,-17,.45,.55,.45,S),E(-6.85,1.23,-16.9,.42,.52,.42,M,.035),e(-6.85,1.4,-16.65,.3,.12,.025,S),v(-6.85,1,-16.57,.065,.12),v(-6,1,-13.6,.3,.16,o);for(let A=0;A<5;A++)t(-6+Math.sin(A)*.15,1.18,-13.6+Math.cos(A)*.15,.09,.09,.09,r("\u6C34\u679C",14459474));for(let A of[-7.3,-6,-4.7]){E(A,.6,-12.3,.48,.09,.48,l,.07);for(let C of[-.17,.17])for(let I of[-.17,.17])e(A+C,.3,-12.3+I,.035,.6,.035,l);m(A,-12.3,.5,.5,0,.65)}E(-17,.85,1,2.2,.07,1.1,a,.06),e(-17.25,1.27,.73,.86,.5,.045,l),e(-17.25,1.28,.759,.8,.44,.015,r("\u5C4F\u5E55",4546401,{emissive:1717560,emissiveIntensity:.15})),e(-17.25,1,.72,.06,.28,.06,l),E(-17.25,.9,.78,.42,.025,.25,l,.02),E(-17.25,.908,1.14,.65,.023,.22,l,.02);for(let A=0;A<12;A++)for(let C=0;C<3;C++)e(-17.54+A*.05,.925,1.07+C*.05,.036,.008,.035,r("\u952E\u5E3D",8819082));E(-16.48,.9,1.04,.4,.035,.28,S,.015);let F=e(-16.48,1.04,.89,.4,.28,.025,l);F.rotation.x=-.2,v(-17.83,.9,1.24,.065,.12),n(-18,.94,.66,.12,.04,w),s([-18,.95,.66],[-18,1.65,.66],.018,l),t(-18,1.67,.76,.2,.08,.16,l),T(-18,1.52,.8,2,2.5),e(20.84,1.8,1,.06,1.3,2.3,l),e(20.8,1.8,1,.025,1.17,2.15,M),E(20.2,.35,1,.9,.7,3.5,o,.06),m(20.2,1,.9,3.5,0,.7);for(let A of[-.6,0,.6])v(A,.81,-12.5,.12,.25);e(0,2,-17.32,2.6,1.3,.08,o),e(0,2,-17.265,2.45,1.15,.02,y);for(let A=0;A<7;A++){let C=t(-1+A*.3,1.9+Math.sin(A)*.1,-17.24,.32,.22+Math.sin(A)*.08,.013,r("\u6C34\u58A8\u753B",7437429))}let k=3.6;e(5,k+.02,-16,3.5,.04,3.5,h),E(4.7,k+.34,-16.7,2.35,.67,1.05,y,.22),E(4.7,k+.69,-16.7,1.96,.025,.73,r("\u6D74\u7F38\u5185\u6C34",7310468,{metalness:.2,roughness:.1}),.2),m(4.7,-16.7,2.35,1.05,k,.7),n(5.93,k+.58,-16.7,.025,1.16,S),s([5.93,k+1.16,-16.7],[5.65,k+1.16,-16.7],.025,S),E(3.7,k+.72,-14.2,1,.15,.65,y,.09),e(3.7,k+.36,-14.2,.95,.7,.6,o),m(3.7,-14.2,1,.65,k,.8),e(3.12,k+1.55,-14.2,.05,1.05,.8,S),E(4.8,k+.24,-14.3,.48,.48,.65,y,.14),E(4.8,k+.51,-14.3,.48,.06,.63,y,.16),e(4.8,k+.68,-14.6,.48,.55,.15,y),m(4.8,-14.3,.5,.7,k,.95);for(let A of[-16.8,-15.6,-14.4])e(-10.55,4.9,A,.55,2.6,1.15,o,!0),e(-10.24,4.9,A,.03,.6,.025,w);for(let A of[-9.65,-6.35])E(A,3.91,-16.2,.65,.62,.62,a,.05),v(A,4.23,-16.2,.09,.2,w),t(A,4.52,-16.2,.18,.19,.18,c),T(A,4.5,-16.2,3,4);for(let A of[10,12.8,15.6]){let C=new Ke;f.add(C),C.position.set(15.1,0,A),C.rotation.y=-Math.PI/2,E(0,.39,0,.86,.15,2.2,o,.04,C),E(0,.51,.38,.81,.15,1.4,c,.07,C);let I=E(0,.83,-.64,.81,.15,.95,c,.07,C);I.rotation.x=-.55;for(let O of[-.33,.33])for(let V of[-.75,.8])e(O,.18,V,.06,.36,.06,l,!1,C);m(15.1,A,2.2,.86,0,.9),p.push({x:15.1,z:A,y:0,rotation:-Math.PI/2,type:"lie",outdoor:!0})}E(-10,.43,18,3,.14,.62,o,.045);for(let A of[-11,-9])e(A,.2,18,.09,.4,.48,l);p.push({x:-10,z:18,y:0,rotation:0,type:"sit"});for(let A of[4.5,11.5])for(let C of[9.6,14.4])e(A,1.5,C,.1,3,.1,l,!0);e(8,3,9.6,7.2,.16,.14,o,!1,x),e(8,3,14.4,7.2,.16,.14,o,!1,x);for(let A=4.5;A<=11.5;A+=.28)e(A,3.12,12,.085,.18,5,o,!1,x);for(let A=17;A<=25;A+=.16)e(A,.85,21,.055,1.7,.12,o);e(21,.32,21,8.2,.06,.14,l);for(let A of[-20,-12,12,20])e(A,2.6,7.08,.06,.34,.08,l),T(A,2.4,7.3,4,4);for(let A of[-16,0,16])T(A,2.6,A===0?-10:0,24,11)}function I0(i={}){i={..._0(),...i},Us.length=0;let e=new Ke,t=new Ke,n=new Ke;e.add(t,n);let s=[],r=[],o=[],a=!1,c={},l=(D,G,W={})=>c[D]||(c[D]=i[D]||new tt({name:D,color:G,roughness:.8,...W})),h=l("\u80E1\u6843\u6728",7950391),u=l("\u6D45\u6A61\u6728",11700827),d=l("\u7C73\u8272\u5899\u9762",16774889),f=l("\u6DF1\u7070\u74E6",3160892),g=l("\u77F3\u6750",9278086),x=l("\u77F3\u677F",12105124),m=l("\u8349\u5730",5663044),p=l("\u6DF1\u8272\u91D1\u5C5E",2370860),y=l("\u4E9A\u9EBB\u5E03",14997432),S=l("\u571F\u58E4",4797222),M=l("\u6696\u5149",16768160,{emissive:16758368,emissiveIntensity:2}),w=l("\u73BB\u7483",_h.color,_h),E=[];function v(D,G,W,$,J,fe,he,ge=!1,de=t,H=!0){if(H&&J<.45&&$>.5&&fe>.5&&(Math.abs(G+3.7)<.25||Math.abs(G)<.5||Math.abs(G-3.5)<.25||Math.abs(G-7.1)<.2)){let Qe=jm(D,W,$,fe);if(Qe.length!==1||Qe[0].w!==$||Qe[0].d!==fe){let B;for(let b of Qe)B=v(b.x,G,b.z,b.w,J,b.d,he,ge,de,!1)||B;return B}}let Xe=new Ie(he===y||he.name==="\u9760\u6795"||he.name==="\u5E8A\u88AB"?new us($,J,fe,3,Math.min($,J,fe)*.22):new Vt($,J,fe),he);return Xe.position.set(D,G,W),Xe.castShadow=!0,Xe.receiveShadow=!0,(a?n:de).add(Xe),ge&&(li(D,W,$,fe,G-J/2,J),E.push(Xe)),Xe}function _(D,G,W,$,J,fe,he,ge=t){let de=new Ie(new ln(1,16,12),he);return de.position.set(D,G,W),de.scale.set($,J,fe),de.castShadow=!0,de.receiveShadow=!0,ge.add(de),de}function T(D,G,W,$,J,fe,he=t,ge=$){let de=new Ie(new En(ge,$,J,24),fe);return de.position.set(D,G,W),de.castShadow=!0,de.receiveShadow=!0,he.add(de),de}function R(D,G,W,$=h){let J=new U(...G).sub(new U(...D)),fe=T(...new U(...D).addScaledVector(J,.5).toArray(),W,J.length(),$,t,W*.65);return fe.quaternion.setFromUnitVectors(new U(0,1,0),J.normalize()),fe}let N=23,F=()=>(N=N*16807%2147483647,(N-1)/2147483646),k=[l("\u677E\u53F6",3429180),l("\u53F6\u7EFF",5466941),l("\u6D45\u53F6",7571027),l("\u67AB\u53F6",10900534)];function A(D,G,W=1,$=!1){s.push({x:D,z:G,height:W*7.5,rotation:F()*6.28})}function C(D,G,W=.6,$=0){r.push({x:D,z:G,y:$,height:W*1.3})}function I(D,G){v(D,.48,G,.24,.85,.24,p),v(D,.56,G,.27,.3,.27,M),v(D,.78,G,.4,.08,.4,p)}let O=l("\u9EC4\u571F\u5730",11836008);v(-57.25,-.3,0,65.5,.4,180,O),v(33.75,-.3,0,112.5,.4,180,O),v(-23.5,-.3,-53.5,2,.4,73,O),v(-23.5,-.3,41.5,2,.4,97,O),v(-28.75,-.25,5,8.5,.4,50,m),v(5.25,-.25,5,55.5,.4,50,m),v(-23.5,-.25,-18.5,2,.4,3,m),v(-23.5,-.25,11.5,2,.4,37,m);let V=v(0,-.13,-55,170,.08,48,l("\u8FDC\u6E56",8301218,{roughness:.17,metalness:.35}));for(let D=0;D<38;D++){let G=D/38*Math.PI*2,W=Math.cos(G)*(33+F()*13),$=Math.sin(G)*(31+F()*13);!($>29&&Math.abs(W)<14)&&!(W>33&&$>0)&&A(W,$,1.1+F()*1.2)}v(0,-.025,1.5,21.8,.05,11,x),v(0,0,18,4,.045,14,x);for(let D=-9;D<=9;D+=2)for(let G=-2;G<7;G+=2)v(D,.007,G,1.97,.035,1.97,x);for(let D of[-5.2,5.2]){v(D,.044,1.5,6.1,.04,6.2,m);for(let G of[-1,1])v(D+G*3.15,.049,1.5,.13,.06,6.4,d);for(let G of[-1.65,4.65])v(D,.049,G,6.4,.06,.13,d)}for(let D=0;D<10;D++)v(-1.5+D%2*.05,.03,8+D*1.4,2.8,.06,1.05,g);v(0,1,-20,66,2,.4,g,!0),v(-33,1,5,.4,2,50,g,!0),v(33,1,5,.4,2,50,g,!0);for(let D of[-19.5,19.5])v(D,.9,30,27,1.8,.4,g,!0);function P(D,G,W,$=0,J=-6){let fe=(Array.isArray(J)?J:[J]).sort((de,H)=>de-H),he=[],ge=G;for(let de of fe)de+1.7<G||de-1.7>W||(he.push([ge,Math.max(ge,de-1.7)]),ge=Math.min(W,de+1.7));he.push([ge,W]);for(let[de,H]of he)if(!(H-de<.05)){v(D,$+1.65,(de+H)/2,.07,3.3,H-de,w,!0);for(let Xe=de;Xe<=H;Xe+=1.6)v(D,$+1.7,Xe,.12,3.4,.07,p)}v(D,$+3.35,(G+W)/2,.2,.18,W-G,p)}function z(D,G,W,$,J=0,fe=!1){if(v(D,J-.09,G,W,.18,$,u),D===-16&&G===-.5)for(let he of[-3.75,3.75])v(D+he,J+1.65,G-$/2,2.5,3.3,.065,w,!0);else v(D,J+.35,G-$/2,W,.7,.22,d,!0),v(D,J+2.05,G-$/2,W,2.7,.065,w,!0);for(let he=D-W/2;he<=D+W/2;he+=2)v(he,J+1.7,G-$/2,.065,3.4,.16,p);for(let he of[-1,1]){P(D+he*W/2,G-$/2,G+$/2,J,fe?-6:he*D<0?[-6,0]:0);let ge=(W-5)/2;v(D+he*(2.5+ge/2),J+1.62,G+$/2,ge,3.24,.045,w,!0);for(let de=0;de<3;de++)v(D+he*(2.5+de*ge/2),J+1.65,G+$/2,.055,3.3,.14,p)}v(D,J+3.36,G+$/2,W,.18,.2,p),!fe&&D!==-16&&D!==16&&X(D,G,W+1.5,$+1.5,J+3.55,.25)}function X(D,G,W,$,J,fe){a=!0;let he=v(D,J,G,W,.18,$,f);he.geometry.dispose(),he.geometry=new us(W,.18,$,3,.07),v(D,J+.13,G,W-.6,.08,$-.6,f),v(D,J-.13,G,W-.2,.1,$-.2,h),v(D,J-.06,G,W-.14,.04,$-.14,p);for(let ge of[-1,1])v(D+ge*W/2,J,G,.12,.32,$,p);for(let ge of[-1,1])v(D,J,G+ge*$/2,W,.32,.12,p);v(D,J-.19,G+$/2-.25,W-.5,.025,.035,M),a=!1}z(0,-11,22,14,0,!0),v(-1,3.51,-11,20,.18,14,u),v(10.75,3.51,-11,.5,.18,14,u),v(9.75,3.51,(-18+gr.z1)/2,1.5,.18,gr.z1+18,u),v(9.75,3.51,(gr.z2-4)/2,1.5,.18,-4-gr.z2,u),v(0,3.95,-18,22,.7,.24,d,!0),v(0,5.7,-18,22,2.8,.06,w,!0);for(let D=-11;D<12;D+=2)v(D,5.3,-18,.06,3.4,.16,p);for(let D of[-11,11])if(D===-11){for(let[G,W]of[[-18,-10-Mi/2],[-10+Mi/2,-4]])v(D,5.3,(G+W)/2,.06,3.4,W-G,w,!0);v(D,6.4,-10,.12,1.2,Mi,d,!0)}else{v(D,5.3,-12.15,.06,3.4,11.7,w,!0),v(D,5.3,-4.05,.06,3.4,.1,w,!0),v(D,6.5,-5.15,.12,1,2.3,d,!0);for(let G=-18;G<=-7;G+=2)v(D,5.3,G,.16,3.4,.06,p)}for(let D=-10;D<11;D+=2)v(D,5.15,-4,1.93,3,.05,w,!0),v(D+1,5.2,-4,.07,3.2,.12,p,!0);a=!0,v(-2,7.1,-11,18,.2,14,x),v(9.75,7.1,-11,2.5,.2,14,x),v(7.75,7.1,-16.5,1.5,.2,3,x),v(7.75,7.1,-5,1.5,.2,2,x),a=!1;for(let D of[-9,-5,5,9])v(D,1.7,-2.7,.18,3.4,.18,h,!0);a=!0,v(0,3.3,-2.7,23,.15,2.8,h),a=!1,z(-16,-.5,10,15),z(-16,-13.5,10,11),z(16,-.5,10,15);for(let D of[-3,3])v(D,5.3,-13,.16,3.4,10,d,!0);for(let[D,G,W]of[[-11,-3,-7],[-3,3,0]]){for(let[$,J]of[[D,W-Ln/2],[W+Ln/2,G]])v(($+J)/2,5.3,-8,J-$,3.4,.16,d,!0);v(W,6.4,-8,Ln,1.2,.16,d,!0)}for(let D of[gr,kf,mr]){let G=(D.x1+D.x2)/2,W=D.x2-D.x1,$=(D.z2-D.z1)/28;for(let J=0;J<28;J++){let fe=D.z2-(J+.5)*$,he=D.base+(D.reverse?28-J:J+1)*3.6/28;v(G,he-.065,fe,W,.13,$+.006,u)}for(let J of[D.x1-.07,D.x2+.07]){R([J,D.base+.9+(D.reverse?3.6:0),D.z2],[J,D.base+.9+(D.reverse?0:3.6),D.z1],.022,p);for(let fe=0;fe<28;fe++){let he=D.z2-(fe+.5)*$,ge=D.base+(D.reverse?28-fe:fe+1)*3.6/28;v(J,ge+.45,he,.035,.9,.035,p),li(J,he,.035,$,ge,.95)}}}function Y(D,G,W,$,J=0){v(D,J+.017,G,W,.035,$,l("\u5730\u6BEF",12827300));for(let fe=0;fe<8;fe++)v(D-W/2+.1+fe*.055,J+.04,G,.025,.01,$,y)}function re(D,G,W=2,$=1,J=0){W/=Me,$/=Me,v(D,J+.75,G,W,.11,$,h,!0);for(let fe of[-1,1])for(let he of[-1,1])v(D+fe*(W/2-.15),J+.35,G+he*($/2-.12),.1,.7,.1,h)}function _e(D,G,W=0,$=0){let J=new Ke;t.add(J),v(0,.46,0,.7,.16,.7,y,!1,J),v(0,.88,-.32,.7,.75,.1,h,!1,J);for(let fe of[-1,1])for(let he of[-1,1])v(fe*.27,.2,he*.27,.07,.4,.07,h,!1,J);J.scale.set(1/Me,1,1/Me),J.position.set(D,$,G),J.rotation.y=W,li(D,G,.7/Me,.7/Me,$,1.2)}function ye(D,G,W=0,$=0){o.push({x:D,z:G,y:$,rotation:W,type:"sit"});let J=new Ke;t.add(J),v(0,.32,0,3.4,.45,1.3,h,!1,J);for(let fe=-1;fe<=1;fe++){v(fe*1.05,.64,0,1.025,.31,1.12,y,!1,J);let he=v(fe*1.05,1.06,-.47,1.04,.73,.29,y,!1,J);he.rotation.x=-.12}for(let fe of[-1,1]){v(fe*1.62,.8,0,.22,.7,1.3,y,!1,J);let he=v(fe*.9,.96,-.25,.65,.5,.18,l("\u9760\u6795",9601640),!1,J);he.rotation.z=fe*.12}J.scale.set(1/Me,1,1/Me),J.position.set(D,$,G),J.rotation.y=W,li(D,G,(W?1.3:3.4)/Me,(W?3.4:1.3)/Me,$,1.2)}function te(D,G,W=7,$=0,J=0){let fe=t.children.length,he=Us.length;v(D,$+1.6,G,W,3.2,.42,h,!0);for(let ge=0;ge<6;ge++){v(D,$+.15+ge*.53,G+.3,W,.07,.64,u);for(let de=0;de<W*8;de++){if((de+Math.floor(ge/2)*9)%29>17)continue;let H=.23+F()*.2;v(D-W/2+.1+de*.123,$+.21+ge*.53+H/2,G+.28,.07+F()*.035,H,.25,l("\u4E66"+de%7,[6707526,12627070,3953490,9129531,14274224,4475712,8290393][de%7]))}}for(let ge=0;ge<5;ge++)v(D,$+.67+ge*.53,G+.35,W-.1,.017,.025,M);for(let ge=-W/2;ge<=W/2;ge+=W/5)v(D+ge,$+1.6,G+.15,.08,3.2,.6,u);if(J){let ge=new Ke;for(let de of t.children.slice(fe))de.position.x-=D,de.position.z-=G,ge.add(de);ge.position.set(D,0,G),ge.rotation.y=J,t.add(ge);for(let de of Us.slice(he)){let H=[[de.x1,de.z1],[de.x1,de.z2],[de.x2,de.z1],[de.x2,de.z2]].map(([Xe,Qe])=>[D+(Xe-D)*Math.cos(J)+(Qe-G)*Math.sin(J),G-(Xe-D)*Math.sin(J)+(Qe-G)*Math.cos(J)]);de.x1=Math.min(...H.map(Xe=>Xe[0])),de.x2=Math.max(...H.map(Xe=>Xe[0])),de.z1=Math.min(...H.map(Xe=>Xe[1])),de.z2=Math.max(...H.map(Xe=>Xe[1]))}}}te(-20.6,-4.7,3.8,0,Math.PI/2),Y(-16,.5,7,8),re(-17,1,2.2,1.1),_e(-17,2.1,Math.PI),ye(-14,-3),re(-14,-1.2,1.7,.8),C(-20,5),C(-12,-6),v(-17,.845,1,1,.03,.55,y),v(-17,.87,1,.025,.015,.55,p),li(-20,.3,1.1,3,0,2.8),Y(16,1,7,7),ye(17,1,Math.PI/2),re(18.7,1,1,2.1),C(12,5),C(20,-6),re(15,-5.3,3.8,1.35);for(let D of[13.7,15,16.3])_e(D,-4.2,Math.PI),_e(D,-6.5);v(-7,.45,-16.9,6,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),v(-7,.93,-16.9,6,.08,1.4,l("\u53A8\u623F\u77F3\u6750")),v0({box:v,mat:l,dark:p,lightmat:M}),v(-6,.45,-13.6,4.4,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),v(-6,.94,-13.6,4.6,.09,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let D of[-8.26,-3.74])v(D,.47,-13.6,.08,.94,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let D=-7.5;D<-4;D+=.75)v(D,.46,-12.94,.015,.78,.012,p);C(-10,-5),Y(0,-11,5.5,5.5),ye(-1.3,-10,Math.PI/2),re(.5,-10,1,2),te(-.3,-17.5,4),_e(-3.9,-10),re(-4,-9,1,1);function me(D,G,W=3,$=3.6){o.push({x:D,z:G,y:$,rotation:0,type:"lie"}),v(D,$+.3,G,W,.6,3.6,h,!0),v(D,$+.64,G,W,.18,3.5,y),v(D,$+1,G-1.75,W,.9,.18,h,!0),v(D,$+.77,G+.45,W,.1,2.3,l("\u5E8A\u88AB",7900036));for(let J of[-1,1])v(D+J*W*.23,$+.8,G-1.13,W*.4,.2,.65,y)}me(-8,-15.4,2.6),Y(-7,-10.7,5,3.5,3.6),re(-4.8,-17,1.5,.8,3.6),_e(-4.8,-16.2,Math.PI,3.6),C(-10,-17,.7,3.6),Y(0,-10.5,4,3,3.6);for(let D=0;D<9;D++)v(-1+F()*2,3.78,-10+F(),.25,.32,.25,l("\u79EF\u6728"+D,[12419419,5536903,13875558][D%3]));v(8,0,12,8,.09,5,u);for(let D=0;D<22;D++)v(4.15+D*.35,.05,12,.02,.015,5,h);re(8,12,2.2,1.2),_e(8,13.2,Math.PI),_e(8,10.8),_e(6.35,12,-Math.PI/2);let ue=l("\u9752\u74F7",7903111,{roughness:.23});T(8,.94,12,.19,.22,ue),_(8,1.08,12,.16,.07,.16,ue);for(let D of[7.4,8.6])T(D,.9,12,.095,.13,ue);for(let D of[12,15])v(D,.18,19,2.2,.36,3,h,!0),v(D,.38,19,2,.04,2.8,S);for(let D of[11.4,12,12.6])for(let G of[18,19,20])C(D,G,.35,.4);let Le=l("\u6C60\u6C34",3636605,{transparent:!0,opacity:.76,roughness:.13,metalness:.38});_(-5,.015,10,4.3,.015,2.8,l("\u6C60\u5E95",2444099));let Oe=new Ie(new Yo(1,64),Le);Oe.rotation.x=-Math.PI/2,Oe.scale.set(4.05,2.6,1),Oe.position.set(-5,.23,10),e.add(Oe);for(let D=0;D<38;D++){let G=D/38*Math.PI*2;_(-5+Math.cos(G)*4.2,.12,10+Math.sin(G)*2.75,.45,.23,.36,g)}for(let D=0;D<7;D++){let G=F()*6.28,W=T(-5+Math.cos(G)*2.5,.245,10+Math.sin(G)*1.7,.25,.02,k[1])}_(-3.1,.12,10.7,.6,.2,.4,g),v(20.5,.04,11,7,.12,16,l("\u6CF3\u6C60\u84DD",5152430,{roughness:.16,metalness:.25}));for(let D of[16.8,24.2])v(D,.1,11,.4,.2,16.8,d);for(let D of[2.8,19.2])v(20.5,.1,D,7.8,.2,.4,d);for(let D of[18.5,20.5,22.5])v(D,.106,11,.05,.008,15,p);for(let D of[6,10,14,18])T(25,.65,D,.035,1.3,p),v(25,.65,D-1.9,.04,1.1,3.7,w);A(0,3,1.25),A(-12,14,1.2,!0),A(3,19,1,!0),A(23,-14,1.4),A(-23,12,1.2);for(let D=0;D<38;D++){let G=F()*6.28,W=Math.cos(G)*(2+F()),$=3+Math.sin(G)*(1.3+F());_(W,.17,$,.3+F()*.4,.25,.3+F()*.4,g)}for(let D of[-10,10,-23,23])for(let G of[-6,4,17])I(D,G);I(-2.3,20),I(2.3,20);for(let D of[-16,0,16]){let G=new ei(16763783,15,13,2);G.position.set(D,2.7,D===0?-11:0),e.add(G)}C0({box:v,cyl:T,mat:l,wood:h,linen:y,dark:p,glass:w,plaster:d,architecture:t,root:e,seats:o,obstacle:li}),R0({box:v,ell:_,cyl:T,branch:R,mat:l,wood:h,oak:u,linen:y,dark:p,plaster:d,lightmat:M,glass:w,architecture:t,root:e,roofs:n,obstacle:li,seats:o,tree:A,plant:C,table:re,chair:_e,sofa:ye,books:te,rug:Y}),P0({box:v,ell:_,cyl:T,branch:R,mat:l,wood:h,oak:u,linen:y,dark:p,plaster:d,lightmat:M,glass:w,architecture:t,root:e,roofs:n,obstacle:li,seats:o}),l0({box:v,ell:_,cyl:T,branch:R,mat:l,wood:h,oak:u,linen:y,dark:p,glass:w,plaster:d,lightmat:M,architecture:t,root:e,seats:o,obstacle:li,sofa:ye,table:re,chair:_e,books:te,plant:C,rug:Y}),c0({box:v,ell:_,cyl:T,mat:l,architecture:t,seats:o,obstacle:li}),a0({box:v,mat:l}),r0({box:v,cyl:T,ell:_,branch:R,mat:l,wood:h,oak:u,dark:p,glass:w,linen:y,lightmat:M,plaster:d,seats:o,obstacle:li,plant:C}),v(-14.3,7.1,-11.7,8.1,.2,1.4,x);for(let D of[-12.4,-11])v(-14.3,7.85,D,8.1,1.3,.05,w,!0);g0({box:v,mat:l,branch:R,root:e}),t.updateMatrixWorld(!0);let He=new Map;t.traverse(D=>{if(!D.isMesh)return;let G=D.geometry.clone().applyMatrix4(D.matrixWorld);if(G.index||G.setIndex(Array.from({length:G.attributes.position.count},(he,ge)=>ge)),G.attributes.uv||G.setAttribute("uv",new It(new Float32Array(G.attributes.position.count*2),2)),D.material.userData.worldUV){let he=G.attributes.position,ge=G.attributes.normal,de=G.attributes.uv;for(let H=0;H<he.count;H++){let Xe=Math.abs(ge.getX(H)),Qe=Math.abs(ge.getY(H)),B=Math.abs(ge.getZ(H)),b=D.material.name==="\u8349\u5730"?3:2;de.setXY(H,(Xe>Qe&&Xe>B?he.getZ(H):he.getX(H))/b,(Qe>Xe&&Qe>B?he.getZ(H):he.getY(H))/b)}}G.computeBoundingSphere();let W=new U().setFromMatrixPosition(D.matrixWorld),$=m0(W.x,W.y,W.z,G.boundingSphere.radius>18),J=D.material.uuid+":"+$,fe=He.get(J)||{material:D.material,zone:$,geos:[]};fe.geos.push(G),He.set(J,fe)}),e.remove(t);let ht=new Ke;e.add(ht);for(let{material:D,zone:G,geos:W}of He.values()){let $=Fa(W,!1);if(!$)throw Error("\u6A21\u578B\u5408\u5E76\u5931\u8D25");let J=new Ie($,D);J.castShadow=D.name!=="\u73BB\u7483",J.receiveShadow=!0,J.name=D.name,J.userData.zone=G,J.frustumCulled=!0,ht.add(J),W.forEach(fe=>fe.dispose())}n.updateMatrixWorld(!0);let je=new Map;n.traverse(D=>{if(!D.isMesh)return;let G=je.get(D.material)||[],W=D.geometry.clone().applyMatrix4(D.matrixWorld);W.index||W.setIndex(Array.from({length:W.attributes.position.count},($,J)=>J)),G.push(W),je.set(D.material,G)}),n.clear();for(let[D,G]of je){let W=new Ie(Fa(G),D);W.castShadow=!0,W.receiveShadow=!0,W.name=D.name,n.add(W),G.forEach($=>$.dispose())}return{root:e,mats:c,pond:Oe,waterMat:Le,plant:C,merged:ht,roofs:n,trees:s,plantSpots:r,seats:o}}function QM(i){return["pond","pool","river"].includes(i)?"water":["tea","rooftea"].includes(i)?"pavilion":["orchard","flowers","roofgarden"].includes(i)?"garden":["garage","market"].includes(i)?"building":"room"}var eS=[...gn.map((i,e)=>["office"+e,i.name,65,i.y,9.4,"office"]),...[["liftB","\u5730\u4E0B\u7535\u68AF\u5385",-3.6,"basement"],["liftG","\u4E00\u697C\u7535\u68AF\u5385",0,"ground"],["liftU","\u4E8C\u697C\u7535\u68AF\u5385",3.6,"upper"],["liftR","\u5929\u53F0\u7535\u68AF\u5385",7.2,"roof"]].map(([i,e,t,n])=>[i,e,-16.6,t,-11.7,n]),["entry","\u5EAD\u9662\u5165\u53E3",0,0,27,"ground"],["hall","\u4E00\u697C\u5BA2\u5385",0,0,-8,"ground"],["coffee","\u5496\u5561\u5427",5,0,-13.5,"ground"],["kitchen","\u53A8\u623F",-3.5,0,-14.8,"ground"],["library","\u4E66\u623F",-17,0,2.8,"ground"],["annex","\u897F\u7FFC\u4F1A\u5BA2\u5385",-19,0,-15,"ground"],["dining","\u5BA2\u9910\u5385",12,0,3,"ground"],["tea","\u5EAD\u9662\u8336\u5E2D",8,0,14.1,"ground"],["pond","\u9526\u9CA4\u6C60",-5,0,13.55,"ground"],["pool","\u6CF3\u6C60",15.3,0,7.8,"ground"],["flowers","\u5EAD\u9662\u82B1\u5703",15,0,16.9,"ground"],["orchard","\u679C\u56ED",-28,0,11,"ground"],["garage","\u8D8A\u91CE\u8F66\u8F66\u5E93",-14.3,0,23,"ground"],["swing","\u5EAD\u9662\u79CB\u5343",-9.5,0,23.4,"ground"],["market","\u8857\u9053\u96C6\u5E02",0,0,36,"ground"],["river","\u6CB3\u7554\u6B65\u9053",0,0,48,"ground"],["playterrace","\u513F\u7AE5\u6E38\u4E50\u9633\u53F0",13,3.6,-5,"upper"],["balcony","\u4E3B\u5367\u5C4B\u9876\u9633\u53F0",-16,3.6,-10,"upper"],["master","\u4E8C\u697C\u4E3B\u5367",-7,3.6,-9,"upper"],["child","\u513F\u7AE5\u623F",0,3.6,-8.9,"upper"],["bath","\u4E8C\u697C\u536B\u6D74",6,3.6,-15.4,"upper"],["rooftea","\u5929\u53F0\u8336\u4EAD",-4,7.2,-7.8,"roof"],["roofgarden","\u5929\u53F0\u82B1\u56ED",3,7.2,-10,"roof"],["roofswing","\u5929\u53F0\u79CB\u5343",2,7.2,-5.5,"roof"],["storage","\u5730\u4E0B\u50A8\u7269\u95F4",-20,-3.6,-15,"basement"],["games","\u7535\u7ADE\u623F",-14,-3.6,-15,"basement"],["ktv","KTV",-20,-3.6,-11.7,"basement"],["cinema","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,-3.6,-11.7,"basement"]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,y:n,z:s,level:r}));function L0({dialog:i,host:e,list:t,tabs:n,onTeleport:s,onOpen:r,onClose:o}){let a,c,l,h=[],u="ground",d=.45,f=.85,g=1,x=0,m,p=!1,y=document.createElement("div");y.className="guide-labels",e.append(y);let S=[],M=new U,w=new da,E=new ce;function v(k,A,C,I,O,V,P){let z=new Ie(new Vt(I,O,V),new tt({color:P,roughness:.85}));return z.position.set(k,A,C),c.add(z),z}function _(){if(!i.open)return;let k=e.clientWidth,A=e.clientHeight;a.setSize(k,A,!1),l.aspect=k/A,l.updateProjectionMatrix();let C=(u==="ground"?95:u==="office"?65:30)*g;l.position.copy(M).add(new U(Math.sin(d)*Math.cos(f)*C,Math.sin(f)*C,Math.cos(d)*Math.cos(f)*C)),l.lookAt(M),a.render(c,l);let I=[];for(let O of S){let V=O.marker.position.clone().project(l),P=O.button.offsetWidth||80,z=24,X=Math.max(P/2,Math.min(k-P/2,(V.x*.5+.5)*k)),Y=Math.max(0,Math.min(A-z,(-V.y*.5+.5)*A));for(let re=0;re<30&&I.some(_e=>Math.abs(_e.x-X)<(_e.w+P)/2+3&&Math.abs(_e.y-Y)<z);re++)Y+=z+3,Y>A-z&&(Y=0,X=Math.max(P/2,Math.min(k-P/2,X+P+6)));I.push({x:X,y:Y,w:P}),O.button.style.left=X+"px",O.button.style.top=Y+"px",O.button.style.display=Math.abs(V.x)>1.1||Math.abs(V.y)>1.1?"none":""}x=requestAnimationFrame(_)}function T(k){u=k,g=1,h=[],S=[],y.replaceChildren(),c?.traverse(C=>{C.geometry?.dispose(),C.material&&C.material.dispose()}),c=new Qs,c.background=new Ne("#172d29"),c.add(new ar(15855330,3691081,2.5));let A=new ls(16768704,3);if(A.position.set(-20,40,20),c.add(A),u==="ground")M.set(0,0,13),v(0,-.7,12,68,1,78,5402714),v(0,1.8,-11,22,3.6,14,13025964),v(-16,1.5,-6,10,3,26,12298633),v(16,1.5,-.5,10,3,15,12298633),v(-17,1.5,20,8,3,8,9215634),v(0,.02,40,10,.12,20,10196356),v(0,.02,52,68,.12,6,5410715),v(20.5,.05,11,7,.15,16,5410715),v(-5,.05,10,8,.15,5,5410715);else if(u==="office"){M.set(58,8,15);for(let C of gn)v(58,C.y-.15,15,24,.15,22,9346438)}else M.set(u==="basement"?-18:0,0,u==="basement"?-13:-11),v(M.x,-.3,M.z,u==="basement"?14:22,.5,u==="basement"?12:14,9346438);u==="upper"&&(v(-16,-.3,-6,10,.5,26,12298633),v(16,-.3,-.5,10,.5,15,11914169)),t.replaceChildren();for(let C of eS.filter(I=>I.level===u)){let I=QM(C.id),O=I==="water"?new En(1.5,1.5,.12,32):I==="pavilion"?new xi(1.5,1,32):I==="garden"?new ir(1.1,1):new Vt(2.3,I==="building"?1.4:.22,1.6),V=new Ie(O,new tt({color:I==="water"?6924730:I==="garden"?8890469:15714186,roughness:.8}));V.position.set(C.x,u==="ground"?4.1:u==="office"?C.y+.6:.5,C.z),I==="water"&&(V.scale.z=.65),V.userData.destination=C,c.add(V),h.push(V);let P=document.createElement("button");P.textContent=C.name,P.onclick=X=>{X.stopPropagation(),F(),s(C)},P.onpointerdown=X=>X.stopPropagation(),y.append(P),S.push({button:P,marker:V});let z=document.createElement("button");z.textContent=C.name+" \u2197",z.onclick=()=>{F(),s(C)},z.onmouseenter=()=>V.material.color.setHex(16777215),z.onmouseleave=()=>V.material.color.setHex(15714186),t.append(z)}n.querySelectorAll("button").forEach(C=>C.setAttribute("aria-pressed",String(C.dataset.level===u)))}function R(){a=new lo({antialias:!0,powerPreference:"low-power"}),a.setPixelRatio(Math.min(devicePixelRatio,1.25)),e.append(a.domElement),l=new Bt(48,1,.1,220),e.onpointerdown=k=>{m={x:k.clientX,y:k.clientY,sx:k.clientX,sy:k.clientY},p=!1,e.setPointerCapture(k.pointerId)},e.onpointermove=k=>{m&&(Math.hypot(k.clientX-m.sx,k.clientY-m.sy)>5&&(p=!0),p&&(d-=(k.clientX-m.x)*.006,f=nn.clamp(f+(k.clientY-m.y)*.005,.3,1.45)),m.x=k.clientX,m.y=k.clientY)},e.onpointerup=k=>{if(!m||(m=null,p))return;let A=e.getBoundingClientRect();E.set((k.clientX-A.left)/A.width*2-1,-(k.clientY-A.top)/A.height*2+1),w.setFromCamera(E,l);let C=w.intersectObjects(h)[0];C&&(F(),s(C.object.userData.destination))},e.onpointercancel=()=>m=null,e.onwheel=k=>{k.preventDefault(),g=nn.clamp(g+k.deltaY*.001,.5,1.8)},e.style.touchAction="none"}function N(){i.open||(r(),i.showModal(),a||R(),T(u),_())}function F(){i.close(),cancelAnimationFrame(x),m=null,o()}return n.querySelectorAll("button").forEach(k=>k.onclick=()=>T(k.dataset.level)),i.querySelector("[data-close]").onclick=F,i.addEventListener("cancel",k=>{k.preventDefault(),F()}),{open:N,close:F}}var Gf={clear:"\u6674\u5929",rain:"\u96E8\u5929",snow:"\u96EA\u5929",wind:"\u5927\u98CE"};function D0(i,e){return(i+4)**2+(e+10)**2<3.8**2?10.2:i>-11&&i<11&&e>-18&&e<-4?7.2:i>-21&&i<-11&&e>-19&&e<7||i>11&&i<21&&e>-8&&e<7?3.8:i>-21.3&&i<-12.7&&e>15.7&&e<24.3?3.6:(i+4)**2+(e+10)**2<3.8**2?10.2:-.05}function N0(i,e){let t="clear",n={value:0},s={value:0},r={value:0},o=1e3,a=new Float32Array(o*6),c=Array.from({length:o},()=>({x:Math.random()*60-30,y:Math.random()*25,z:Math.random()*75-22})),l=new vt;l.setAttribute("position",new It(a,3));let h=new er(l,new Ui({color:12178911,transparent:!0,opacity:.55,depthWrite:!1}));h.frustumCulled=!1,i.add(h);let u=new tr(l,new As({color:15988474,size:.12,transparent:!0,opacity:.9,depthWrite:!1}));u.frustumCulled=!1,i.add(u);for(let m of Object.values(e.mats).filter(p=>!p.transparent&&!p.name.includes("\u5C4F\u5E55")&&!p.name.includes("\u7535\u89C6")))m.onBeforeCompile=p=>{p.uniforms.uSnow=r,p.vertexShader=`varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSnowWorld=(modelMatrix*vec4(position,1.)).xyz;vSnowNormal=normalize(mat3(modelMatrix)*normal);`),p.fragmentShader=`uniform float uSnow; varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec3 p=vSnowWorld;p.xz/=${Me.toFixed(8)};float cover=-.05;
 if(p.x>-11.&&p.x<11.&&p.z>-18.&&p.z< -4.)cover=7.2;
 if((p.x> -21.&&p.x< -11.&&p.z> -19.&&p.z<7.)||(p.x>11.&&p.x<21.&&p.z> -8.&&p.z<7.))cover=3.8;
 if(p.x> -21.3&&p.x< -12.7&&p.z>15.7&&p.z<24.3)cover=3.6;
 if(pow(p.x+4.,2.)+pow(p.z+10.,2.)<14.44)cover=10.2;
 float snowMask=smoothstep(.45,.85,vSnowNormal.y)*step(cover-.2,p.y)*uSnow;
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.92,.95,.98),snowMask*.95);`)},m.customProgramCacheKey=()=>"snow-exposure-v1",m.needsUpdate=!0;let d=new Set;function f(){i.traverse(m=>{if(!m.isInstancedMesh)return;let p=m.material;d.has(p)||(d.add(p),p.onBeforeCompile=y=>{y.uniforms.uWind=n,y.uniforms.uWeatherTime=s,y.vertexShader=`uniform float uWind;uniform float uWeatherTime;
`+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x+=sin(uWeatherTime*2.0+position.y*.65)*uWind*min(max(position.y,0.)*.045,.28);`)},p.customProgramCacheKey=()=>"weather-wind-v1",p.needsUpdate=!0)})}function g(m){t=m,r.value=t==="snow"?1:0,n.value=t==="wind"?1:t==="rain"?.35:0,h.visible=t==="rain"||t==="wind",u.visible=t==="snow",h.material.opacity=t==="wind"?.16:.55,h.material.color.setHex(t==="wind"?13423030:12178911)}function x(m,p,y){if(s.value=p,t==="clear")return;let S=t==="wind"?160:o;l.setDrawRange(0,S*2);for(let M=0;M<S;M++){let w=c[M];w.y-=m*(t==="rain"?17:t==="snow"?1.6:1),w.x+=m*(t==="wind"?12:t==="snow"?Math.sin(p+M)*.6:3);let E=D0(w.x,w.z);(w.y<E||w.x>34||w.x<-34)&&(w.x=(Math.random()-.5)*66,w.z=Math.random()*72-22,w.y=12+Math.random()*15);let v=M*6;a[v]=w.x,a[v+1]=w.y,a[v+2]=w.z,a[v+3]=w.x+(t==="wind"?1.5:t==="rain"?.08:0),a[v+4]=Math.max(D0(w.x,w.z)+.03,w.y-(t==="rain"?.65:0)),a[v+5]=w.z}l.attributes.position.needsUpdate=!0}return g("clear"),{set:g,update:x,attachWind:f,get kind(){return t}}}function U0(i){let e=new Map,t=new Map,n=i.clone();return F0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function F0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)F0(i.children[n],e.children[n],t)}var Mh=class extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new id(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Sh(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sh(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ld(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=cs.extractUrlBase(e);o=cs.resolveURL(l,this.path)}else o=cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===V0){try{o[ft.KHR_BINARY_GLTF]=new cd(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new gd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new Yf;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new hd(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new ud;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new fd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function tS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function jt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qf=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],_n);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ls(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ei(h),l.distance=u;break;case"spot":l=new ha(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Yf=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){let s=[];e.color=new Ne(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Kf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(r,r)}return Promise.all(s)}},Jf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},$f=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},jf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],_n)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Qf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ed=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(r[0],r[1],r[2],_n),Promise.all(s)}},td=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},nd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(r[0],r[1],r[2],_n),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},id=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},sd=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Hn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},rd=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},od=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ad=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Sh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ld=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ci.TRIANGLES&&l.mode!==ci.TRIANGLE_STRIP&&l.mode!==ci.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ge,m=new U,p=new pn,y=new U(1,1,1),S=new oi(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),S.setMatrixAt(M,x.compose(m,p,y));for(let M in c)if(M==="_COLOR_0"){let w=c[M];S.instanceColor=new ws(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Nt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},V0="glTF",za=12,O0={JSON:1313821514,BIN:5130562},cd=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==V0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-za,r=new DataView(e,za),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===O0.JSON){let l=new Uint8Array(e,za+o,a);this.content=n.decode(l)}else if(c===O0.BIN){let l=za+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=pd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=pd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=fo[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,_n,d)})})}},ud=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},fd=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},bh=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+u;for(let M=0;M!==a;M++){let w=o[x+M+a],E=o[x+M+c]*h,v=o[g+M+a],_=o[g+M]*h;r[M]=y*w+S*E+m*v+p*_}return r}},nS=new pn,dd=class extends bh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return nS.fromArray(r).normalize().toArray(r),r}},ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},B0={9728:zt,9729:yt,9984:Mc,9985:io,9986:ur,9987:Cn},z0={33071:Vn,33648:Vr,10497:tn},Hf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iS={CUBICSPLINE:void 0,LINEAR:$s,STEP:Js},Wf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function xr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function oS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aS(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xf(t.attributes):e=i.indices+":"+Xf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xf(i.targets[n]);return e}function Xf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function md(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cS=new Ge,gd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new rr(this.options.manager):this.textureLoader=new ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xr(r,a,s),Hi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(cs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Hf[s.type],a=fo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new It(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Hf[s.type],l=fo[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(y);S||(x=new l(a,p*f,s.count*f/h),S=new Zr(x,f/h),t.cache.add(y,S)),m=new Kr(S,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new It(x,c,g);if(s.sparse!==void 0){let p=Hf.SCALAR,y=fo[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new y(o[1],S,s.sparse.count*p),E=new l(o[2],M,s.sparse.count*c);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,_=w.length;v<_;v++){let T=w[v];if(m.setX(T,E[v*c]),c>=2&&m.setY(T,E[v*c+1]),c>=3&&m.setZ(T,E[v*c+2]),c>=4&&m.setW(T,E[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=B0[d.magFilter]||yt,h.minFilter=B0[d.minFilter]||Cn,h.wrapS=z0[d.wrapS]||tn,h.wrapT=z0[d.wrapT]||tn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==yt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new an(x);m.needsUpdate=!0,d(m)}),t.load(cs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Hi(u,o),u.userData.mimeType=o.mimeType||lS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new As,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ui,Fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],_n),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=An);let h=r.alphaMode||Wf.OPAQUE;if(h===Wf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qt){let u=r.emissiveFactor;a.emissive=new Ne().setRGB(u[0],u[1],u[2],_n)}return r.emissiveTexture!==void 0&&o!==qt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&xr(s,u,r),u})}createUniqueName(e){let t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return k0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=aS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=k0(new vt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?sS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,y=l[f];if(m.mode===ci.TRIANGLES||m.mode===ci.TRIANGLE_STRIP||m.mode===ci.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Vo(x,y):new Ie(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ci.TRIANGLE_STRIP?p.geometry=Cf(p.geometry,Ia):m.mode===ci.TRIANGLE_FAN&&(p.geometry=Cf(p.geometry,ro));else if(m.mode===ci.LINES)p=new er(x,y);else if(m.mode===ci.LINE_STRIP)p=new is(x,y);else if(m.mode===ci.LINE_LOOP)p=new Ho(x,y);else if(m.mode===ci.POINTS)p=new tr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&oS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Hi(p,r),m.extensions&&xr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&xr(s,u[0],r),u[0];let d=new Ke;r.extensions&&xr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(nn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Go(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let S=0,M=d.length;S<M;S++){let w=d[S],E=f[S],v=g[S],_=x[S],T=m[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=n._createAnimationTracks(w,E,v,_,T);if(R)for(let N=0;N<R.length;N++)p.push(R[N])}let y=new oa(r,void 0,p);return Hi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Jr:l.length>1?h=new Ke:l.length===1?h=l[0]:h=new Nt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Hi(h,r),r.extensions&&xr(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ke;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&xr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(U0(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Fn||d instanceof an)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Fs[r.path]===Fs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Fs[r.path]){case Fs.weights:h=rs;break;case Fs.rotation:h=os;break;case Fs.translation:case Fs.scale:h=Cs;break;default:switch(n.itemSize){case 1:h=rs;break;case 2:case 3:default:h=Cs;break}break}let u=s.interpolation!==void 0?iS[s.interpolation]:$s,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Fs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=md(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof os?dd:bh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hS(i,e,t){let n=e.attributes,s=new Jt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),a.normalized){let h=md(fo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,c=new U;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=md(fo[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function k0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=pd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Hi(i,e),hS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rS(i,e.targets,t):i})}var Th=class extends aa{constructor(e){super(e),this.type=Ot}parse(e){let o=function(_,T){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},u=function(_,T,R){T=T||1024;let F=_.pos,k=-1,A=0,C="",I=String.fromCharCode.apply(null,new Uint16Array(_.subarray(F,F+128)));for(;0>(k=I.indexOf(`
`))&&A<T&&F<_.byteLength;)C+=I,A+=I.length,F+=128,I=String.fromCharCode.apply(null,new Uint16Array(_.subarray(F,F+128)));return-1<k?(R!==!1&&(_.pos+=A+k+1),C+I.slice(0,k)):!1},d=function(_){let T=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,A={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},C,I;for((_.pos>=_.byteLength||!(C=u(_)))&&o(1,"no header found"),(I=C.match(T))||o(3,"bad initial token"),A.valid|=1,A.programtype=I[1],A.string+=C+`
`;C=u(_),C!==!1;){if(A.string+=C+`
`,C.charAt(0)==="#"){A.comments+=C+`
`;continue}if((I=C.match(R))&&(A.gamma=parseFloat(I[1])),(I=C.match(N))&&(A.exposure=parseFloat(I[1])),(I=C.match(F))&&(A.valid|=2,A.format=I[1]),(I=C.match(k))&&(A.valid|=4,A.height=parseInt(I[1],10),A.width=parseInt(I[2],10)),A.valid&2&&A.valid&4)break}return A.valid&2||o(3,"missing format specifier"),A.valid&4||o(3,"missing image size specifier"),A},f=function(_,T,R){let N=T;if(N<8||N>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);N!==(_[2]<<8|_[3])&&o(3,"wrong scanline width");let F=new Uint8Array(4*T*R);F.length||o(4,"unable to allocate buffer space");let k=0,A=0,C=4*N,I=new Uint8Array(4),O=new Uint8Array(C),V=R;for(;V>0&&A<_.byteLength;){A+4>_.byteLength&&o(1),I[0]=_[A++],I[1]=_[A++],I[2]=_[A++],I[3]=_[A++],(I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=N)&&o(3,"bad rgbe scanline format");let P=0,z;for(;P<C&&A<_.byteLength;){z=_[A++];let Y=z>128;if(Y&&(z-=128),(z===0||P+z>C)&&o(3,"bad scanline data"),Y){let re=_[A++];for(let _e=0;_e<z;_e++)O[P++]=re}else O.set(_.subarray(A,A+z),P),P+=z,A+=z}let X=N;for(let Y=0;Y<X;Y++){let re=0;F[k]=O[Y+re],re+=N,F[k+1]=O[Y+re],re+=N,F[k+2]=O[Y+re],re+=N,F[k+3]=O[Y+re],k+=4}V--}return F},g=function(_,T,R,N){let F=_[T+3],k=Math.pow(2,F-128)/255;R[N+0]=_[T+0]*k,R[N+1]=_[T+1]*k,R[N+2]=_[T+2]*k,R[N+3]=1},x=function(_,T,R,N){let F=_[T+3],k=Math.pow(2,F-128)/255;R[N+0]=Ts.toHalfFloat(Math.min(_[T+0]*k,65504)),R[N+1]=Ts.toHalfFloat(Math.min(_[T+1]*k,65504)),R[N+2]=Ts.toHalfFloat(Math.min(_[T+2]*k,65504)),R[N+3]=Ts.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),y=p.width,S=p.height,M=f(m.subarray(m.pos),y,S),w,E,v;switch(this.type){case Pn:v=M.length/4;let _=new Float32Array(v*4);for(let R=0;R<v;R++)g(M,R*4,_,R*4);w=_,E=Pn;break;case Ot:v=M.length/4;let T=new Uint16Array(v*4);for(let R=0;R<v;R++)x(M,R*4,T,R*4);w=T,E=Ot;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:S,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:_n,minFilter:yt,magFilter:yt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var wh=class extends Ie{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new U(.70707,.70707,0),u=new Ne(t.sunColor!==void 0?t.sunColor:16777215),d=new Ne(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new U(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Jn,m=t.fog!==void 0?t.fog:!1,p=new si,y=new U,S=new U,M=new U,w=new Ge,E=new U(0,0,-1),v=new _t,_=new U,T=new U,R=new _t,N=new Ge,F=new Bt,k=new kt(s,r,{type:Ot}),A={name:"MirrorShader",uniforms:mn.merge([Ae.fog,Ae.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ge},sunColor:{value:new Ne(8355711)},sunDirection:{value:new U(.70707,.70707,0)},eye:{value:new U},waterColor:{value:new Ne(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>
				}`},C=new Mt({name:A.name,uniforms:mn.clone(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,lights:!0,side:x,fog:m});C.uniforms.mirrorSampler.value=k.texture,C.uniforms.textureMatrix.value=N,C.uniforms.alpha.value=a,C.uniforms.time.value=c,C.uniforms.normalSampler.value=l,C.uniforms.sunColor.value=u,C.uniforms.waterColor.value=d,C.uniforms.sunDirection.value=h,C.uniforms.distortionScale.value=g,C.uniforms.eye.value=f,n.material=C,n.onBeforeRender=function(I,O,V){if(S.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(V.matrixWorld),w.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(w),_.subVectors(S,M),_.dot(y)>0)return;_.reflect(y).negate(),_.add(S),w.extractRotation(V.matrixWorld),E.set(0,0,-1),E.applyMatrix4(w),E.add(M),T.subVectors(S,E),T.reflect(y).negate(),T.add(S),F.position.copy(_),F.up.set(0,1,0),F.up.applyMatrix4(w),F.up.reflect(y),F.lookAt(T),F.far=V.far,F.updateMatrixWorld(),F.projectionMatrix.copy(V.projectionMatrix),N.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),N.multiply(F.projectionMatrix),N.multiply(F.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,S),p.applyMatrix4(F.matrixWorldInverse),v.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let P=F.projectionMatrix;R.x=(Math.sign(v.x)+P.elements[8])/P.elements[0],R.y=(Math.sign(v.y)+P.elements[9])/P.elements[5],R.z=-1,R.w=(1+P.elements[10])/P.elements[14],v.multiplyScalar(2/v.dot(R)),P.elements[2]=v.x,P.elements[6]=v.y,P.elements[10]=v.z+1-o,P.elements[14]=v.w,f.setFromMatrixPosition(V.matrixWorld);let z=I.getRenderTarget(),X=I.xr.enabled,Y=I.shadowMap.autoUpdate;n.visible=!1,I.xr.enabled=!1,I.shadowMap.autoUpdate=!1,I.setRenderTarget(k),I.state.buffers.depth.setMask(!0),I.autoClear===!1&&I.clear(),I.render(O,F),n.visible=!0,I.xr.enabled=X,I.shadowMap.autoUpdate=Y,I.setRenderTarget(z);let re=V.viewport;re!==void 0&&I.state.viewport(re)}}};var Wi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},uS=new Bi(-1,1,1,-1,0,1),xd=class extends vt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},fS=new xd,Xi=class{constructor(e){this._mesh=new Ie(fS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Eh=class extends On{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ka=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ah=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ch=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ot}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eh(Wi),this.copyPass.material.blending=$t,this.timer=new fa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ka!==void 0&&(o instanceof ka?n=!0:o instanceof Ah&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rh=class extends On{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Va={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ge},cameraProjectionMatrixInverse:{value:new Ge},cameraWorldMatrix:{value:new Ge},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif

			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ga={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ph={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function G0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=dS(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new U(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new vn(s,e,e);return r.wrapS=tn,r.wrapT=tn,r.needsUpdate=!0,r}function dS(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Ha={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:_d(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new Ge},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function _d(i,e,t){let n=pS(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function pS(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),o))}return n}var Ih=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let y=g-m+h,S=x-p+h,M=g-1+2*h,w=x-1+2*h,E=c&255,v=l&255,_=this.perm[E+this.perm[v]]%12,T=this.perm[E+m+this.perm[v+p]]%12,R=this.perm[E+1+this.perm[v+1]]%12,N=.5-g*g-x*x;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[_],g,x));let F=.5-y*y-S*S;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[T],y,S));let k=.5-M*M-w*w;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[R],M,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,y=e-x,S=t-m,M=n-p,w,E,v,_,T,R;y>=S?S>=M?(w=1,E=0,v=0,_=1,T=1,R=0):y>=M?(w=1,E=0,v=0,_=1,T=0,R=1):(w=0,E=0,v=1,_=1,T=0,R=1):S<M?(w=0,E=0,v=1,_=0,T=1,R=1):y<M?(w=0,E=1,v=0,_=0,T=1,R=1):(w=0,E=1,v=0,_=1,T=1,R=0);let N=y-w+f,F=S-E+f,k=M-v+f,A=y-_+2*f,C=S-T+2*f,I=M-R+2*f,O=y-1+3*f,V=S-1+3*f,P=M-1+3*f,z=h&255,X=u&255,Y=d&255,re=this.perm[z+this.perm[X+this.perm[Y]]]%12,_e=this.perm[z+w+this.perm[X+E+this.perm[Y+v]]]%12,ye=this.perm[z+_+this.perm[X+T+this.perm[Y+R]]]%12,te=this.perm[z+1+this.perm[X+1+this.perm[Y+1]]]%12,me=.6-y*y-S*S-M*M;me<0?s=0:(me*=me,s=me*me*this._dot3(this.grad3[re],y,S,M));let ue=.6-N*N-F*F-k*k;ue<0?r=0:(ue*=ue,r=ue*ue*this._dot3(this.grad3[_e],N,F,k));let Le=.6-A*A-C*C-I*I;Le<0?o=0:(Le*=Le,o=Le*Le*this._dot3(this.grad3[ye],A,C,I));let Oe=.6-O*O-V*V-P*P;return Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this._dot3(this.grad3[te],O,V,P)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,g,x=(e+t+n+s)*c,m=Math.floor(e+x),p=Math.floor(t+x),y=Math.floor(n+x),S=Math.floor(s+x),M=(m+p+y+S)*l,w=m-M,E=p-M,v=y-M,_=S-M,T=e-w,R=t-E,N=n-v,F=s-_,k=T>R?32:0,A=T>N?16:0,C=R>N?8:0,I=T>F?4:0,O=R>F?2:0,V=N>F?1:0,P=k+A+C+I+O+V,z=o[P][0]>=3?1:0,X=o[P][1]>=3?1:0,Y=o[P][2]>=3?1:0,re=o[P][3]>=3?1:0,_e=o[P][0]>=2?1:0,ye=o[P][1]>=2?1:0,te=o[P][2]>=2?1:0,me=o[P][3]>=2?1:0,ue=o[P][0]>=1?1:0,Le=o[P][1]>=1?1:0,Oe=o[P][2]>=1?1:0,He=o[P][3]>=1?1:0,ht=T-z+l,je=R-X+l,D=N-Y+l,G=F-re+l,W=T-_e+2*l,$=R-ye+2*l,J=N-te+2*l,fe=F-me+2*l,he=T-ue+3*l,ge=R-Le+3*l,de=N-Oe+3*l,H=F-He+3*l,Xe=T-1+4*l,Qe=R-1+4*l,B=N-1+4*l,b=F-1+4*l,K=m&255,j=p&255,se=y&255,ve=S&255,Se=a[K+a[j+a[se+a[ve]]]]%32,oe=a[K+z+a[j+X+a[se+Y+a[ve+re]]]]%32,ae=a[K+_e+a[j+ye+a[se+te+a[ve+me]]]]%32,we=a[K+ue+a[j+Le+a[se+Oe+a[ve+He]]]]%32,We=a[K+1+a[j+1+a[se+1+a[ve+1]]]]%32,Te=.6-T*T-R*R-N*N-F*F;Te<0?h=0:(Te*=Te,h=Te*Te*this._dot4(r[Se],T,R,N,F));let be=.6-ht*ht-je*je-D*D-G*G;be<0?u=0:(be*=be,u=be*be*this._dot4(r[oe],ht,je,D,G));let ke=.6-W*W-$*$-J*J-fe*fe;ke<0?d=0:(ke*=ke,d=ke*ke*this._dot4(r[ae],W,$,J,fe));let Je=.6-he*he-ge*ge-de*de-H*H;Je<0?f=0:(Je*=Je,f=Je*Je*this._dot4(r[we],he,ge,de,H));let nt=.6-Xe*Xe-Qe*Qe-B*B-b*b;return nt<0?g=0:(nt*=nt,g=nt*nt*this._dot4(r[We],Xe,Qe,B,b)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Wa=class i extends On{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=G0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new kt(this.width,this.height,{type:Ot}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Mt({defines:Object.assign({},Va.defines),uniforms:mn.clone(Va.uniforms),vertexShader:Va.vertexShader,fragmentShader:Va.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new sa,this.normalMaterial.blending=$t,this.pdMaterial=new Mt({defines:Object.assign({},Ha.defines),uniforms:mn.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Mt({defines:Object.assign({},Ga.defines),uniforms:mn.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,blending:$t}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:mn.clone(Wi.uniforms),vertexShader:Wi.vertexShader,fragmentShader:Wi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:xa,blendDst:lr,blendEquation:$n,blendSrcAlpha:ga,blendDstAlpha:lr,blendEquationAlpha:$n}),this.blendMaterial=new Mt({uniforms:mn.clone(Ph.uniforms),vertexShader:Ph.vertexShader,fragmentShader:Ph.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:vc,blendSrc:xa,blendDst:lr,blendEquation:$n,blendSrcAlpha:ga,blendDstAlpha:lr,blendEquationAlpha:$n}),this._fsQuad=new Xi(null),this._originalClearColor=new Ne,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new gi,this.depthTexture.format=zi,this.depthTexture.type=Ps,this.normalRenderTarget=new kt(this.width,this.height,{minFilter:zt,magFilter:zt,type:Ot,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=_d(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=$t,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ih,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new vn(s,e,e,Sn,Rn);return r.wrapS=tn,r.wrapT=tn,r.needsUpdate=!0,r}};Wa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var H0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var po=class i extends On{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,o,{type:Ot}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new kt(r,o,{type:Ot});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new kt(r,o,{type:Ot});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=H0;this.highPassUniforms=mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mn.clone(Wi.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:Wi.vertexShader,fragmentShader:Wi.fragmentShader,premultipliedAlpha:!0,blending:ma,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new qt,this._fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};po.BlurDirectionX=new ce(1,0);po.BlurDirectionY=new ce(0,1);var Xa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Lh=class extends On{constructor(){super(),this.isOutputPass=!0,this.uniforms=mn.clone(Xa.uniforms),this.material=new eo({name:Xa.name,uniforms:this.uniforms,vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader}),this._fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_a?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ya?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ma&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var go=Object.freeze({flow:{name:"\u6D41\u7545",pixelRatio:.85,shadowSize:1024,shadowInterval:200,reflectionInterval:1/0,ao:!1,bloom:!1,near:7,medium:20,smallNear:4,smallMedium:12},balanced:{name:"\u5747\u8861",pixelRatio:1,shadowSize:1536,shadowInterval:100,reflectionInterval:160,ao:!1,bloom:!1,near:12,medium:32,smallNear:7,smallMedium:20},high:{name:"\u7CBE\u7EC6",pixelRatio:1.25,shadowSize:2048,shadowInterval:66,reflectionInterval:80,ao:!0,bloom:!0,near:20,medium:45,smallNear:12,smallMedium:28}}),mo=["flow","balanced","high"];function W0(i,e,t=!1,n=-1){let s=[t?e.smallNear:e.near,t?e.smallMedium:e.medium];if(n<0)return i<s[0]?0:i<s[1]?1:2;let r=n;for(;r<2&&i>s[r]*1.15;)r++;for(;r>0&&i<s[r-1]*.85;)r--;return r}function X0(i,e=12){let t=new Map;for(let n of i){let s=Math.floor(n.x/e)+":"+Math.floor(n.z/e);t.has(s)||t.set(s,[]),t.get(s).push(n)}return[...t.values()]}var Dh=class{constructor(){this.level=1,this.mode="auto",this.reset()}reset(){this.duration=0,this.frames=0,this.slow=0,this.fast=0,this.cooldown=4,this.fps=0}setMode(e){if(!["auto",...mo].includes(e))throw Error("\u672A\u77E5\u753B\u8D28");return this.mode=e,e!=="auto"?this.level=mo.indexOf(e):this.level=1,this.reset(),mo[this.level]}sample(e){if(e<=0||e>1)return this.reset(),null;if(this.duration+=e,this.frames++,this.cooldown=Math.max(0,this.cooldown-e),this.duration<1)return null;this.fps=this.frames/this.duration;let t=this.duration;if(this.duration=0,this.frames=0,this.mode!=="auto"||this.cooldown>0)return null;this.slow=this.fps<38?this.slow+t:0,this.fast=this.fps>57?this.fast+t:0;let n=this.level;return this.slow>=2&&n>0?n--:this.fast>=14&&n<2&&n++,n===this.level?null:(this.level=n,this.slow=0,this.fast=0,this.cooldown=8,mo[n])}};function q0(i,e,t,n){let s=go[i];if(!e.mobile)return{...s};let r={flow:1.35,balanced:1.6,high:1.85},o=Math.sqrt(24e5/Math.max(1,t*n));return{...s,pixelRatio:Math.min(r[i],e.pixelCap,o),near:Math.max(s.near,12),medium:Math.max(s.medium,28),smallNear:Math.max(s.smallNear,7),smallMedium:Math.max(s.smallMedium,18)}}function mS(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new It(new Uint32Array(t.buffer),1)}function Y0(i){let e=[];function t(s,r,{small:o=!1}={}){s.updateMatrixWorld(!0);let a=[];s.traverse(c=>{if(!c.isMesh)return;let l=[c.geometry];for(let h of["medium","far"]){let u=new vt;u.setIndex(c.geometry.userData.lod?.[h]?mS(c.geometry.userData.lod[h]):c.geometry.index);for(let[d,f]of Object.entries(c.geometry.attributes))u.setAttribute(d,f);u.boundingBox=c.geometry.boundingBox?.clone()||null,u.boundingSphere=c.geometry.boundingSphere?.clone()||null,l.push(u)}a.push({geometries:l,material:c.material,matrix:c.matrixWorld.clone()})});for(let c of X0(r)){let l=new U;for(let u of c)l.add(new U(u.x,u.y||0,u.z));l.divideScalar(c.length);let h=[];for(let u=0;u<3;u++){let d=new Ke,f=0;for(let g of a){let x=new oi(g.geometries[u],g.material,c.length);x.receiveShadow=!0,x.castShadow=u<2;let m=new Ge,p=new pn;for(let y=0;y<c.length;y++){let S=c[y],M=S.height/s.userData.height;p.setFromAxisAngle(new U(0,1,0),S.rotation||0),m.compose(new U(S.x,S.y||0,S.z),p,new U(M,M,M)),m.multiply(g.matrix),x.setMatrixAt(y,m)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere(),d.add(x),f+=(x.geometry.index?.count||x.geometry.attributes.position.count)/3*c.length}d.visible=!1,i.add(d),h.push({group:d,triangles:f})}e.push({center:l,small:o,levels:h,current:-1})}}function n(s,r){let o=!1;for(let a of e){let c=s.position.distanceTo(a.center),l=W0(c,r,a.small,a.current);if(l!==a.current){a.current=l;for(let h=0;h<3;h++)a.levels[h].group.visible=h===l;o=!0}}return o}return{add:t,update:n,get stats(){return{cells:e.length,triangles:e.reduce((s,r)=>s+(r.levels[r.current]?.triangles||0),0),nearCells:e.filter(s=>s.current===0).length}}}}function vd(i,e=4){i.generateMipmaps=!0,i.minFilter=Cn,i.magFilter=yt,i.anisotropy=e,i.needsUpdate=!0}function yd(i,e){let t=new Set,n=Math.min(4,e.capabilities.getMaxAnisotropy());i.traverse(s=>{if(s.isMesh)for(let r of Array.isArray(s.material)?s.material:[s.material])for(let o of["map","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"]){let a=r[o];!a||t.has(a)||(t.add(a),vd(a,n))}})}function Nh(i){return Bf(i).then(e=>new Promise((t,n)=>new Mh().parse(e,"",s=>{globalThis.MANSION_ASSETS[i].startsWith("assets/")||delete globalThis.MANSION_ASSETS[i],x0(s.scene),t(s.scene)},n)))}function Z0(i,e,t,n,{parent:s,queue:r,onLoaded:o=()=>{}}){let a=[],c=Y0(s),l=(P,z,X=14)=>Y=>Y.bird||Math.hypot(Y.x-P,Y.z-z)<X;function h(P){let z=new Jt().setFromObject(P),X=z.getSize(new U),Y=z.getCenter(new U),re=new Ke;return P.position.add(new U(-Y.x,-z.min.y,-Y.z)),re.add(P),re.userData.height=X.y,yd(P,t),re}function u(P,z,X,Y,re,_e=0){let ye=P.clone(!0);return ye.scale.set(re/P.userData.height/Me,re/P.userData.height,re/P.userData.height/Me),ye.position.set(z,X,Y),ye.rotation.y=_e,ye.traverse(te=>{te.isMesh&&(te.castShadow=!0,te.receiveShadow=!0)}),s.add(ye),ye}let d=new Ke;s.add(d);let f=new ir(1,1),g=new En(.08,.12,1,6),x=new tt({color:5795657}),m=new tt({color:7166274}),p=new oi(f,x,e.trees.length),y=new oi(g,m,e.trees.length);d.add(p,y),e.trees.forEach((P,z)=>{let X=new Ge;X.compose(new U(P.x,P.height*.7,P.z),new pn,new U(P.height*.25,P.height*.32,P.height*.25)),p.setMatrixAt(z,X),X.compose(new U(P.x,P.height*.25,P.z),new pn,new U(1,P.height*.5,1)),y.setMatrixAt(z,X)}),p.computeBoundingSphere(),y.computeBoundingSphere(),r.add("\u6811\u6728\u6A21\u578B",async()=>{a[0]=h(await Nh("tree_small_02")),c.add(a[0],e.trees),s.remove(d),f.dispose(),g.dispose(),x.dispose(),m.dispose(),o()},{priority:2});let S=99,M=()=>(S=S*16807%2147483647,(S-1)/2147483646),w=[],E=[];for(let P=0;P<95;P++){let z=(M()-.5)*51,X=(M()-.5)*43;Km(z,X)||X<7&&Math.abs(z)<22||Math.abs(z)<3||z>3&&z<25&&X>7||z>-10&&z<0&&X<14||(w.push({x:z,z:X,height:.3+M()*.75,rotation:M()*7}),P%2===0&&E.push({x:z+.5,z:X+.3,height:.7+M()*.5,rotation:M()*7}))}for(let P=0;P<15;P++){let z=P/15*6.28;w.push({x:Math.cos(z)*2.1,z:3+Math.sin(z)*1.2,height:.45,rotation:z})}for(let[P,z,X]of[["fern_02",1,w],["shrub_01",2,E],["potted_plant_02",5,e.plantSpots]])r.add(P,async()=>{a[z]=h(await Nh(P)),c.add(a[z],X,{small:!0}),o()},{when:Y=>Y.bird||X.some(re=>Math.hypot(re.x-Y.x,re.z-Y.z)<14),priority:8});r.add("\u5BA4\u5185\u5355\u6905",async()=>{a[3]=h(await Nh("modern_arm_chair_01")),u(a[3],12.8,0,2.8,1.12,.5),u(a[3],-12.7,0,3.7,1.12,-.7),u(a[3],-5,3.6,-15,1.05,1.3),o()},{when:P=>P.bird||P.z<9,priority:9}),r.add("\u4E66\u623F\u58C1\u7089",async()=>{let P=await Nh("interior");P.position.set(-20,0,.3),yd(P,t),P.traverse(z=>{z.isMesh&&(z.castShadow=!0,z.receiveShadow=!0)}),s.add(P),o()},{when:l(-20,.3,13),priority:7});let v=null;r.add("\u73AF\u5883\u5149",async()=>{let P=new Th().parse(await Bf("environment")),z=new vn(P.data,P.width,P.height,Sn,P.type);z.mapping=no,z.needsUpdate=!0,v=z,i.background=z,i.backgroundBlurriness=.04,i.environment=z,i.environmentRotation.y=1.2,i.backgroundRotation.y=1.2,n.visible=!1,o()},{priority:1});let _=128,T=new Uint8Array(_*_*4);for(let P=0;P<_;P++)for(let z=0;z<_;z++){let X=(P*_+z)*4;T[X]=128+Math.sin(z*.24+P*.09)*18,T[X+1]=128+Math.cos(P*.21+z*.06)*18,T[X+2]=250,T[X+3]=255}let R=new vn(T,_,_);R.wrapS=R.wrapT=tn,vd(R,Math.min(4,t.capabilities.getMaxAnisotropy()));let N=new wh(new Qn(6.7,15.7),{textureWidth:384,textureHeight:384,waterNormals:R,sunDirection:new U(-.7,.5,.4),sunColor:16769198,waterColor:1523515,distortionScale:1.1,fog:!0});N.rotation.x=-Math.PI/2,N.position.set(20.5,.135,11),s.add(N);let F=N.material,k=new tt({color:2710100,metalness:.48,roughness:.18,normalMap:R,normalScale:new ce(.12,.12)}),A=go.flow,C=-1/0,I=-1/0,O=0,V=N.onBeforeRender;return N.onBeforeRender=function(...P){P[1].overrideMaterial||!Number.isFinite(A.reflectionInterval)||(F.uniforms.eye.value.setFromMatrixPosition(P[2].matrixWorld),!(O-C<A.reflectionInterval)&&(C=O,V.apply(this,P)))},{pool:N,templates:a,normal:R,get environment(){return v},vegetation:c,setQuality(P){A=P,N.material=Number.isFinite(P.reflectionInterval)?F:k,C=-1/0,I=-1/0},update(P,z,X){if(O=P,F.uniforms.time.value+=z*.45,P-I>200){let Y={position:X.position.clone()};Y.position.x/=Me,Y.position.z/=Me,c.update(Y,A),I=P}}}}function K0(i,e,t){let n,s,r,o=go.flow;function a(){n||(n=new Ch(i),n.addPass(new Rh(e,t)),s=new Wa(e,t,Math.max(1,innerWidth>>1),Math.max(1,innerHeight>>1)),s.updateGtaoMaterial({radius:.55,thickness:1,distanceFallOff:1,samples:6}),s.blendIntensity=.58,n.addPass(s),r=new po(new ce(innerWidth,innerHeight),.15,.45,1.15),n.addPass(r),n.addPass(new Lh))}function c(){if(!s)return;let l=i.getPixelRatio();s.setSize(Math.max(1,Math.round(innerWidth*l*.5)),Math.max(1,Math.round(innerHeight*l*.5)))}return{setQuality(l){o=l,i.setPixelRatio(Math.min(devicePixelRatio,o.pixelRatio)),(o.ao||o.bloom)&&a(),n&&(s.enabled=o.ao,r.enabled=o.bloom,n.setPixelRatio(i.getPixelRatio()),c())},resize(l,h){n?.setSize(l,h),c()},render(){!o.ao&&!o.bloom?i.render(e,t):n.render()}}}var xe=i=>document.getElementById(i),mt=new Qs,_o=new Ke,Ad=matchMedia("(pointer: coarse)"),qi=zf(innerWidth,Ad.matches);document.body.dataset.mobile=String(qi.mobile);var Gt=new Bt(qi.fov,innerWidth/innerHeight,.08,650),el=new xh({onChange:i=>{xe("assetStatus").textContent=i.failed?"\u90E8\u5206\u7D20\u6750\u5F85\u91CD\u8BD5":i.active?"\u7EC6\u8282\u52A0\u8F7D\u4E2D\u2026":"\u7D20\u6750\u6309\u4F4D\u7F6E\u52A0\u8F7D",xe("assetStatus").title=`\u5DF2\u8F7D\u5165 ${i.loaded}/${i.total} \u9879\uFF1B\u5931\u8D25 ${i.failed} \u9879\uFF0C\u70B9\u51FB\u91CD\u8BD5`}}),pt;try{pt=new lo({antialias:!0,powerPreference:"high-performance"})}catch(i){throw xe("loading").innerHTML="<h2>\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u5F00\u542F 3D</h2><p>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684 Chrome\u3001Edge \u6216 Safari\uFF0C\u5E76\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u3002</p>",i}pt.setPixelRatio(Math.min(devicePixelRatio,1));pt.setSize(innerWidth,innerHeight);pt.shadowMap.enabled=!0;pt.shadowMap.type=_c;pt.shadowMap.autoUpdate=!1;pt.shadowMap.needsUpdate=!0;pt.toneMapping=cr;pt.toneMappingExposure=.93;pt.outputColorSpace=dt;xe("scene").appendChild(pt.domElement);mt.fog=new Bo(11975337,.006);var tg=new ar(13822187,7827538,.8);mt.add(tg);var qn=new ls(16765338,2.4);qn.position.set(-24,23,16);qn.castShadow=!0;qn.shadow.mapSize.set(1536,1536);Object.assign(qn.shadow.camera,{left:-55,right:55,top:50,bottom:-50,near:1,far:150});qn.shadow.bias=-3e-4;qn.shadow.normalBias=.06;mt.add(qn);var vr=new Ie(new ln(160,32,16),new Mt({side:Mn,depthWrite:!1,uniforms:{top:{value:new Ne("#739dba")},bottom:{value:new Ne("#efd0a1")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 v;uniform vec3 top;uniform vec3 bottom;void main(){float h=clamp(normalize(v).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);}"}));mt.add(vr);var kh=new Ie(new ln(3,20,12),new qt({color:16770221}));kh.position.set(-64,26,-103);mt.add(kh);var gS=new rr,Sd=new Map,xS={\u8D70\u5ECA\u70DF\u718F\u6728:["wood",1,6574916],\u8349\u5730:["grass",1,9540993],\u77F3\u677F:["road",1,13684419],\u6D45\u6A61\u6728:["wood",1,12299925],\u80E1\u6843\u6728:["wood",1,9860435],\u7C73\u8272\u5899\u9762:["plaster",1,16774889],\u77F3\u6750:["stone",1,11120544],\u6DF1\u7070\u74E6:["roof",1,3554618]},ng={};for(let[i,[e,t,n]]of Object.entries(xS)){let s=new tt({name:i,color:n,roughness:.88});s.userData.worldUV=!0,s.normalScale.set(.3,.3),ng[i]=s;for(let[r,o]of[["color","map"],["normal","normalMap"],["roughness","roughnessMap"]]){let a=e+"-"+r;if(!globalThis.MANSION_ASSETS[a]||["road","plaster"].includes(e)&&r==="color"||e==="roof"&&r!=="roughness")continue;let l=Sd.get(a)||{id:a,kind:r,slot:o,repeat:t,targets:[]};l.targets.push(s),Sd.set(a,l)}}for(let i of Sd.values())el.add(i.id,async()=>{let e=await gS.loadAsync(globalThis.MANSION_ASSETS[i.id]);e.wrapS=e.wrapT=tn,e.repeat.set(i.repeat,i.repeat),e.anisotropy=Math.min(8,pt.capabilities.getMaxAnisotropy()),i.kind==="color"&&(e.colorSpace=dt);for(let t of i.targets)t[i.slot]=e,t.needsUpdate=!0;globalThis.MANSION_ASSETS[i.id].startsWith("data:")&&delete globalThis.MANSION_ASSETS[i.id]},{priority:i.kind==="color"?3:qi.mobile?6:12,when:e=>i.targets.some(t=>e.materials.has(t))});var Qt=I0({...ng,...o0()});h0(Qt);mt.add(Qt.root);var xo,Cd=K0(pt,mt,Gt),_r=N0(mt,Qt),_S=p0(Qt.root),Os=Jm(mt);Os.bind(pt.domElement);var fn=t0(mt,Qt.root.userData.officeLabels),ig=new U,vS=new qt({color:16753719,transparent:!0,opacity:.8}),sg=[];for(let i=0;i<7;i++){let e=new Ie(new xi(.08,.55,7),vS);e.position.set(-19.95+i%2*.2,.65,.3+(i-3)*.2),mt.add(e),sg.push(e)}var Rd=new ei(16753742,6,5);Rd.position.set(-19.3,1,.3);mt.add(Rd);for(let[i,e]of[["\u7535\u89C6\u753B\u9762","\u5C71\u6C34\u4E4B\u95F4 \xB7 \u98CE\u666F\u9891\u9053"],["\u7535\u7ADE\u5C4F\u5E55","\u6E38\u620F\u5927\u5385 \xB7 \u51C6\u5907\u5C31\u7EEA"]]){let t=document.createElement("canvas");t.width=640,t.height=360;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,360);s.addColorStop(0,"#283f55"),s.addColorStop(1,"#b2c5ac"),n.fillStyle=s,n.fillRect(0,0,640,360);for(let o=0;o<3;o++){n.fillStyle=["#7b9a99","#526f72","#304e53"][o],n.beginPath(),n.moveTo(0,360);for(let a=0;a<=640;a+=20)n.lineTo(a,170+o*45+Math.sin(a*.012+o)*55+Math.cos(a*.026)*18);n.lineTo(640,360),n.fill()}n.fillStyle="#f4e9c9",n.font="24px sans-serif",n.fillText(e,28,43),n.font="16px sans-serif",n.fillText(i==="\u7535\u7ADE\u5C4F\u5E55"?"\u6B22\u8FCE\u56DE\u5BB6\uFF0C\u653E\u677E\u4E00\u4E0B":"\u4E61\u6751\u751F\u6D3B \xB7 \u6162\u4EAB\u65F6\u5149",28,326);let r=new yn(t);r.colorSpace=dt,Qt.mats[i].map=r,Qt.mats[i].needsUpdate=!0}var Pd=new ei(16767669,125,23,2);Pd.position.set(-18,-1.3,-13);mt.add(Pd);var yS=Array.from({length:2},()=>{let i=new ei(16769723,0,16,2);return mt.add(i),i}),rg=Qt.root.userData.vendors.map((i,e)=>{let t=Gi({shirt:[9730912,7441528,12095865][e%3],pants:4213576,female:e%2===1});return t.g.position.set(i.x,0,i.z),t.g.rotation.y=i.rotation,mt.add(t.g),t}),Ye=Gi({shirt:12892052,pants:4215628});mt.add(Ye.g);var ne=new U(0,0,19);Ye.g.position.copy(ne);Ye.g.rotation.y=Math.PI;var tl=Gi({shirt:12624012,pants:15590094,female:!0});tl.g.position.set(-6,0,-15.1);mt.add(tl.g);var Bs=Gi({shirt:7904683,pants:4545380,scale:.69});mt.add(Bs.g);Bs.g.position.set(0,0,16.8);var Sr=Gi({shirt:10327161,pants:6120278,hair:13223865,scale:.97});Sr.g.position.set(-14,-.08,-3);mt.add(Sr.g);var nl=Gi({shirt:10785965,pants:6712160,hair:12435124,female:!0,scale:.93});nl.g.position.set(12,0,16.9);mt.add(nl.g);var Vh=[Lf(13081187),Lf(14736848)];Vh.forEach(i=>mt.add(i.g));var og=Array.from({length:9},(i,e)=>$m([15115083,15065554,12412229][e%3]));og.forEach(i=>mt.add(i));var Ka=[Df(),Df()];Ka.forEach(i=>mt.add(i));var Gh=new Ie(new Vt(.45,.04,.32),new tt({color:14668205}));Gh.position.set(0,1.08,.4);Gh.rotation.x=-.3;Sr.g.add(Gh);var ag=new Ie(new ln(.22,16,12),new tt({color:14067302}));mt.add(ag);var MS=Ye,Xn=new dh([MS,tl,Bs,Sr,nl].map((i,e)=>({actor:i,name:["\u7238\u7238","\u5988\u5988","\u5B69\u5B50","\u7237\u7237","\u5976\u5976"][e],position:{x:i.g.position.x,y:Math.round(i.g.position.y/3.6)*3.6,z:i.g.position.z}}))),wi=n0();wi.root.position.set(3,0,19);mt.add(wi.root);var zn=!1,Et=new ho,lg=i0();mt.add(lg.root);M0(Et);var cg=new U,SS=[],qa=0,hg=0,ug=0,St=Zm,Bn=!1,rn=null,ja=0,xn=!1,Nn="stand",Ft=null,Yt={height:0,velocity:0},Ya=new U(0,0,9),Ja=100,$a=.67,Dn=0,yr=.24,Qa=qi.distance,vo=!1,bd=0,zh=0,on=u0(xe("moveJoystick"),xe("joystickThumb")),zs=null,Tt=new Set,J0;function At(i){xe("toast").textContent=i,xe("toast").classList.add("show"),clearTimeout(J0),J0=setTimeout(()=>xe("toast").classList.remove("show"),3800)}var bS=[{id:"sandplay",x:14,z:1.5,y:3.6,title:"\u4E00\u8D77\u73A9\u6C99\u5B50",hint:"\u513F\u7AE5\u9633\u53F0 \xB7 \u6C99\u6C60\u65F6\u5149",type:"\u4EB2\u5B50\u65F6\u5149",heading:"\u5C0F\u5C0F\u6C99\u5821",body:"<p>\u62FF\u8D77\u5C0F\u6876\u548C\u94F2\u5B50\uFF0C\u966A\u5B69\u5B50\u642D\u4E00\u5EA7\u6C99\u5821\u3002\u73A9\u597D\u540E\uFF0C\u628A\u73A9\u5177\u6536\u56DE\u65C1\u8FB9\u7684\u67DC\u5B50\u3002</p>",mood:"\u4EAB\u53D7\u4EB2\u5B50\u65F6\u5149"},...Ns.filter(i=>i.interior).flatMap(i=>[-1,1].map(e=>({id:i.id,x:i.x+(i.axis==="z"?e*.8:0),z:i.z+(i.axis==="x"?e*.8:0),y:i.y,title:"\u5F00\u5173"+i.name,hint:"\u9760\u8FD1\u623F\u95E8 \xB7 \u6309 E \u6216\u70B9\u51FB\u5F00\u5173"}))),...[["gate",0,28.4,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["gate",0,31.6,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["basementDoor",-23.5,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"],["basementDoor",-21.2,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"]].map(([i,e,t,n,s])=>({id:i,x:e,z:t,y:n,title:s,hint:"\u6309 E \u5F00\u5173 \xB7 \u8BF7\u907F\u5F00\u95E8\u6247\u8303\u56F4"})),...[["rooftea",-4,-7.8,7.2,"\u5728\u5929\u53F0\u559D\u8336","\u5929\u53F0\u8336\u5E2D","\u7AEF\u8D77\u9752\u74F7\u676F\uFF0C\u4FEF\u77B0\u679C\u56ED\u3001\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"],["roofplant",3,-11,7.2,"\u5728\u5929\u53F0\u79CD\u82B1","\u5929\u53F0\u82B1\u56ED","\u628A\u65B0\u82B1\u82D7\u79CD\u8FDB\u5929\u53F0\u7684\u5C0F\u82B1\u5703\u3002"],["coffee",5,-14,0,"\u78E8\u4E00\u676F\u5496\u5561","\u4E00\u697C\u5496\u5561\u5427","\u5496\u5561\u673A\u6E29\u70ED\u8D77\u6765\uFF0C\u676F\u4E2D\u6563\u51FA\u9999\u6C14\u3002"],["tv",1.6,-10,0,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u4E00\u697C\u8D77\u5C45\u5385","\u7535\u89C6\u5207\u6362\u5230\u53E6\u4E00\u5E45\u5C71\u6C34\u8272\u8C03\u7684\u753B\u9762\u3002"],["tv",-14,-11.7,-3.6,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385","\u5728\u6C99\u53D1\u65C1\u770B\u770B\u7535\u89C6\uFF0C\u6162\u6162\u5EA6\u8FC7\u95F2\u6687\u65F6\u5149\u3002"],["ktv",-19,-11.7,-3.6,"\u64AD\u653E\u4E00\u6BB5\u793A\u8303\u4F34\u594F","\u7CD6\u679C\u661F\u5149 KTV","\u7C89\u5F69\u8F6F\u5305\u4E0E\u661F\u661F\u706F\u4E0B\uFF0C\u4E00\u8D77\u5531\u9996\u6B4C\u5427\u3002\u793A\u8303\u4F34\u594F\u6B63\u5728\u64AD\u653E\uFF0C\u9EA6\u514B\u98CE\u5C31\u5728\u8336\u51E0\u65C1\u3002"],["game",-14,-15,-3.6,"\u542F\u52A8\u7535\u7ADE\u684C\u9762","\u5730\u4E0B\u7535\u7ADE\u623F","\u663E\u793A\u5668\u70B9\u4EAE\uFF0C\u4ECA\u665A\u53EF\u4EE5\u5728\u8FD9\u91CC\u4F11\u95F2\u4E00\u4E0B\u3002"],["storage",-20,-15,-3.6,"\u67E5\u770B\u50A8\u7269\u95F4","\u5730\u4E0B\u50A8\u7269\u95F4","\u6574\u9F50\u7684\u67B6\u5B50\u4E0A\u5206\u653E\u7740\u6362\u5B63\u7269\u54C1\u3001\u56ED\u827A\u7528\u54C1\u4E0E\u751F\u6D3B\u5907\u54C1\u3002"],["peach",-28,11,0,"\u770B\u770B\u6811\u4E0A\u7684\u6843\u5B50","\u5EAD\u9662\u679C\u56ED","\u679D\u5934\u6302\u7740\u7C89\u5AE9\u7684\u6843\u5B50\uFF0C\u679C\u9999\u6DF7\u7740\u8349\u6728\u7684\u6C14\u606F\u3002"],["orange",-28,21,0,"\u770B\u770B\u6811\u4E0A\u7684\u6A58\u5B50","\u5EAD\u9662\u679C\u56ED","\u6A58\u5B50\u5728\u53F6\u95F4\u6CDB\u7740\u6696\u8272\uFF0C\u7B49\u5BB6\u4EBA\u4E00\u8D77\u8FC7\u6765\u91C7\u6536\u3002"],["market",-7,33.5,0,"\u901B\u901B\u9C9C\u679C\u644A","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u62DB\u547C\u4F60\u770B\u770B\u4ECA\u5929\u521A\u6458\u4E0B\u6765\u7684\u65F6\u4EE4\u6C34\u679C\u3002"],["market",7,38.5,0,"\u770B\u770B\u4E61\u6751\u70B9\u5FC3","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u6B63\u5728\u6574\u7406\u70B9\u5FC3\uFF0C\u6CB3\u5CB8\u5C31\u5728\u8857\u9053\u524D\u65B9\u3002"]].map(([i,e,t,n,s,r,o])=>({id:i,x:e,z:t,y:n,title:s,heading:r,hint:r+" \xB7 \u6309 E \u4E92\u52A8",type:r,body:"<p>"+o+"</p>",mood:s})),{id:"read",x:-17,z:2.8,y:0,title:"\u5750\u4E0B\u6765\uFF0C\u8BFB\u4E00\u672C\u4E66",hint:"\u4E66\u623F \xB7 \u6728\u9999\u4E0E\u58C1\u7089",type:"\u9605\u8BFB\u65F6\u5149",heading:"\u628A\u65F6\u95F4\u7559\u7ED9\u4E00\u9875\u4E66",body:'<p class="quote">\u5C71\u9759\u4F3C\u592A\u53E4\uFF0C\u65E5\u957F\u5982\u5C0F\u5E74\u3002</p><p>\u4F60\u7FFB\u5F00\u684C\u4E0A\u7684\u8BD7\u96C6\u3002\u7A97\u5916\u7684\u6811\u5F71\u8F7B\u8F7B\u6643\u52A8\uFF0C\u58C1\u7089\u91CC\u4F20\u6765\u6728\u67F4\u7EC6\u788E\u7684\u58F0\u54CD\u3002\u7237\u7237\u62AC\u5934\u7B11\u4E86\u7B11\uFF0C\u53C8\u4F4E\u5934\u8BFB\u8D77\u624B\u91CC\u7684\u4E66\u3002</p>',mood:"\u8BFB\u4E86\u4E00\u9875\u4E66\uFF0C\u5FC3\u4E5F\u9759\u4E86\u4E0B\u6765"},{id:"tea",x:8,z:14.1,y:0,title:"\u5750\u4E0B\u559D\u4E00\u676F\u8336",hint:"\u5EAD\u9662\u8336\u5E2D \xB7 \u70ED\u8336\u521A\u597D",type:"\u4E00\u76CF\u8336\u7684\u65F6\u95F4",heading:"\u665A\u98CE\uFF0C\u548C\u4E00\u676F\u6E29\u70ED\u7684\u8336",body:'<p>\u4F60\u5728\u8336\u5E2D\u65C1\u5750\u4E0B\uFF0C\u7AEF\u8D77\u9752\u74F7\u676F\u3002\u6E29\u70ED\u7684\u8336\u9999\u6563\u5F00\uFF0C\u6C60\u5858\u7684\u6C34\u58F0\u5728\u8FDC\u5904\u54CD\u8D77\u3002</p><p class="quote">\u4ECA\u5929\u4E5F\u8F9B\u82E6\u4E86\u3002\u6162\u4E00\u70B9\uFF0C\u518D\u6162\u4E00\u70B9\u3002</p>',mood:"\u559D\u8FC7\u4E00\u676F\u8336\uFF0C\u8EAB\u5FC3\u8212\u5C55"},{id:"plant",x:15,z:16.9,y:0,title:"\u5728\u82B1\u5703\u79CD\u4E00\u682A\u82B1",hint:"\u5EAD\u9662\u82B1\u5703 \xB7 \u4EB2\u624B\u79CD\u4E0B\u5C0F\u5C0F\u671F\u5F85",type:"\u82B1\u56ED\u65E5\u8BB0",heading:"\u8BA9\u82B1\u56ED\u518D\u591A\u4E00\u70B9\u989C\u8272",body:"<p>\u4F60\u677E\u4E86\u677E\u571F\uFF0C\u79CD\u4E0B\u82B1\u82D7\uFF0C\u6D47\u4E0A\u4E00\u70B9\u6C34\u3002\u5976\u5976\u5728\u65C1\u8FB9\u63D0\u9192\u4F60\uFF1A\u201C\u6BCF\u5929\u6765\u770B\u770B\uFF0C\u522B\u6D47\u592A\u591A\u3002\u201D</p><p>\u65B0\u79CD\u7684\u82B1\u5DF2\u7ECF\u51FA\u73B0\u5728\u82B1\u5703\u4E2D\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u79CD\u4E0B\u66F4\u591A\u82B1\u3002</p>",mood:"\u79CD\u4E0B\u4E86\u4E00\u70B9\u65B0\u7684\u671F\u5F85"},{id:"fish",x:-5,z:13.55,y:0,title:"\u6295\u5582\u9526\u9CA4\uFF0C\u770B\u770B\u4E4C\u9F9F",hint:"\u9526\u9CA4\u6C60 \xB7 \u9C7C\u513F\u4F1A\u6E38\u8FC7\u6765",type:"\u6C60\u5858\u8FB9",heading:"\u6C34\u9762\u4E0B\u7684\u5C0F\u5C0F\u90BB\u5C45",body:"<p>\u4F60\u6492\u4E0B\u4E00\u628A\u9C7C\u7CAE\uFF0C\u9526\u9CA4\u6162\u6162\u805A\u62E2\u8FC7\u6765\uFF0C\u91D1\u8272\u7684\u5C3E\u9CCD\u5212\u51FA\u4E00\u9053\u9053\u6D9F\u6F2A\u3002\u77F3\u5934\u4E0A\u7684\u4E4C\u9F9F\u6B63\u5728\u6652\u592A\u9633\u3002</p>",mood:"\u9C7C\u513F\u5403\u9971\u4E86\uFF0C\u6C34\u9762\u6CDB\u8D77\u6D9F\u6F2A"},{id:"cook",x:-3.5,z:-14.8,y:0,title:"\u548C\u59BB\u5B50\u804A\u804A\u665A\u9910",hint:"\u53A8\u623F \xB7 \u4ECA\u665A\u4E00\u8D77\u5403\u996D",type:"\u53A8\u623F\u91CC\u7684\u5BF9\u8BDD",heading:"\u201C\u56DE\u6765\u5566\uFF1F\u518D\u7B49\u4E00\u4F1A\u513F\u3002\u201D",body:"<p>\u59BB\u5B50\u6B63\u5728\u6599\u7406\u53F0\u524D\u51C6\u5907\u665A\u9910\u3002\u4F60\u5E2E\u5979\u9012\u8FC7\u7897\uFF0C\u5979\u7B11\u7740\u8BF4\uFF1A\u201C\u4ECA\u5929\u505A\u4E86\u5927\u5BB6\u7231\u5403\u7684\uFF0C\u5F85\u4F1A\u513F\u53EB\u5B69\u5B50\u6D17\u624B\u5403\u996D\u3002\u201D</p>",mood:"\u5E2E\u5FD9\u51C6\u5907\u4E86\u665A\u9910"},{id:"rest",x:-7,z:-10.8,y:3.6,title:"\u5728\u5367\u5BA4\u4F11\u606F\u7247\u523B",hint:"\u4E8C\u5C42\u4E3B\u5367 \xB7 \u8FDC\u79BB\u55A7\u95F9",type:"\u4F11\u606F\u7247\u523B",heading:"\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5B89\u9759\u89D2\u843D",body:"<p>\u67D4\u8F6F\u7684\u5E8A\u54C1\u3001\u6E29\u6696\u7684\u6728\u8272\u548C\u7A97\u5916\u7684\u665A\u971E\u3002\u4F60\u5750\u5728\u5E8A\u8FB9\uFF0C\u4F38\u4E86\u4E2A\u61D2\u8170\u3002</p>",mood:"\u4F11\u606F\u4E86\u4E00\u4F1A\u513F\uFF0C\u7CBE\u795E\u7115\u53D1"},{id:"kid",x:0,z:-8.9,y:3.6,title:"\u770B\u770B\u5B69\u5B50\u7684\u79EF\u6728",hint:"\u4E8C\u5C42\u513F\u7AE5\u623F \xB7 \u5C0F\u5C0F\u5EFA\u7B51\u5E08",type:"\u5C0F\u5C0F\u4E16\u754C",heading:"\u5C0F\u5C0F\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u5BB6",body:"<p>\u76AE\u5361\u4E18\u5B88\u7740\u5E8A\u8FB9\uFF0C\u7CBE\u7075\u7403\u6574\u9F50\u6446\u5728\u6536\u85CF\u67DC\u4E0A\u3002\u5B69\u5B50\u9080\u8BF7\u4F60\u4E00\u8D77\u7528\u79EF\u6728\u642D\u5EFA\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u57FA\u5730\u3002</p>",mood:"\u53D1\u73B0\u4E86\u5B69\u5B50\u7684\u5C0F\u5C0F\u4E16\u754C"}];function TS(){if(qa>=12)return At("\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\uFF0C\u6765\u6B23\u8D4F\u4E00\u4E0B\u5427\u3002"),!1;let i=new Ke,e=14.35+qa%3*.65,t=18+Math.floor(qa/3)*.62;for(let n=0;n<5;n++){let s=new Ie(new En(.018,.025,.5,5),new tt({color:6587464}));s.position.set(e+Math.sin(n)*.1,.65,t+Math.cos(n)*.1),i.add(s);let r=new Ie(new ln(.105,8,6),new tt({color:[14921892,15194009,12296654][qa%3]}));r.position.copy(s.position),r.position.y=.95,r.scale.y=.55,i.add(r)}return _o.add(i),SS.push(i),qa++,!0}function fg(i){Tt.clear(),on.reset(),xn=!0,xe("modalType").textContent=i.type,xe("modalTitle").textContent=i.heading,xe("modalBody").innerHTML=i.body,xe("modalDone").textContent="\u7EE7\u7EED\u6563\u6B65",xe("modal").showModal(),xe("mood").textContent=i.mood||"\u95F2\u5EAD\u6F2B\u6B65"}var Uh=0;function wS(){if(Uh>=8)return At("\u5929\u53F0\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\u3002"),!1;let i=2.6+Uh%2*.55,e=-12.6+Math.floor(Uh/2)*.35,t=new Ke,n=new Ie(new En(.016,.018,.45,6),new tt({color:6584910}));n.position.set(i,7.95,e),t.add(n);let s=new Ie(new ln(.12,10,8),new tt({color:14788784}));return s.position.set(i,8.2,e),s.scale.y=.55,t.add(s),_o.add(t),Uh++,!0}function ES(){let i=new(window.AudioContext||window.webkitAudioContext);i.resume(),[262,330,392,330,294,349,440,349,262,330,392,523,440,392,330,262].forEach((e,t)=>{let n=i.createOscillator(),s=i.createGain(),r=i.currentTime+t*.32;n.type="sine",n.frequency.value=e,s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.075,r+.025),s.gain.exponentialRampToValueAtTime(.001,r+.3),n.connect(s),s.connect(i.destination),n.start(r),n.stop(r+.31)}),setTimeout(()=>i.close(),6e3)}function dg(){if(Et.phase!=="idle"||fn.lift.phase!=="idle")return;if(zn){wd();return}if(rn?.id==="bicycle"){wd();return}if(rn?.id==="officeElevator"){yg();return}if(rn?.id==="elevator"){vg();return}if(!rn||xe("modal").open)return;let i=rn;if(Ns.some(e=>e.id===i.id)){if(d0(i.id,ne)){let e=Ns.find(t=>t.id===i.id);At(e.name+(e.open?"\u6B63\u5728\u6253\u5F00":"\u6B63\u5728\u5173\u95ED"))}else At("\u8BF7\u7A0D\u5FAE\u9000\u540E\uFF0C\u518D\u5173\u95ED\u95E8");return}if(!(i.id==="roofplant"&&!wS())){if(i.id==="rooftea"&&Yi("sit"),i.id==="ktv"&&ES(),i.id==="tv"){let e=Qt.mats.\u7535\u89C6\u753B\u9762;e.color.setHex(e.color.getHex()===7574929?12489840:7574929),e.emissive.copy(e.color).multiplyScalar(.4)}if(i.id==="game"&&(Qt.mats.\u7535\u7ADE\u5C4F\u5E55.emissiveIntensity=1.2),!(i.id==="plant"&&!TS())){if(i.id==="fish"&&(hg=ja+25),i.id==="dog"){ug=ja+15,At("\u8C46\u8C46\u548C\u56E2\u56E2\u5F00\u5FC3\u5730\u6447\u8D77\u4E86\u5C3E\u5DF4\uFF0C\u8DDF\u7740\u4F60\u4E00\u8D77\u6563\u6B65\u3002");return}(i.id==="tea"||i.id==="read")&&(Ye.legs.forEach(e=>{e.rotation.x=-1.25,e.lower.rotation.x=1.25}),Ye.arms.forEach(e=>e.rotation.x=-1),Ye.g.position.set(i.id==="tea"?8:-17,-.1,i.id==="tea"?13.2:2.1),Ye.g.rotation.y=Math.PI),fg(i)}}}function Yi(i){if(zn||Et.phase!=="idle"||fn.lift.phase!=="idle"||Yt.height>0)return;if(i==="stand"||Nn===i){Nn="stand",Ft=null,Ye.g.rotation.x=0,Ye.g.position.copy(ne),xe("mood").textContent="\u95F2\u5EAD\u6F2B\u6B65";return}let t=Qt.seats.filter(n=>n.type===i&&Math.abs(n.y-ne.y)<.5&&Math.hypot(n.x-ne.x,n.z-ne.z)<3.3).sort((n,s)=>Math.hypot(n.x-ne.x,n.z-ne.z)-Math.hypot(s.x-ne.x,s.z-ne.z))[0];Nn=i,Tt.clear(),on.reset(),Ft=t?{...t}:{x:ne.x,z:ne.z,y:ne.y,rotation:Ye.g.rotation.y,type:i,ground:!0},xe("mood").textContent=i==="sit"?"\u5750\u4E0B\u6B47\u4E00\u4F1A\u513F":"\u8EBA\u4E0B\u6765\uFF0C\u770B\u770B\u5929\u7A7A",At(i==="sit"?"\u5DF2\u5750\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 C \u8D77\u8EAB":"\u5DF2\u8EBA\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 L \u8D77\u8EAB")}xe("sitBtn").onclick=()=>Yi("sit");xe("lieBtn").onclick=()=>Yi("lie");xe("jumpBtn").onclick=()=>{zn||Et.phase!=="idle"||fn.lift.phase!=="idle"||(Nn!=="stand"&&Yi("stand"),Vf(Yt))};xe("birdBtn").onclick=()=>{St=St===2?0:2,fs()};xe("roofBtn").onclick=()=>{Qt.roofs.visible=!Qt.roofs.visible,xe("roofBtn").textContent=Qt.roofs.visible?"\u9690\u85CF\u5C4B\u9876":"\u663E\u793A\u5C4B\u9876",pt.shadowMap.needsUpdate=!0};var kn=new Dh;kn.setMode(Rf);var Ti=go.balanced,Td=-1/0,Fh=0;pt.info.autoReset=!1;function Hh(i){Ti=q0(i,qi,innerWidth,innerHeight),Cd.setQuality(Ti),xo?.setQuality(Ti),qn.shadow.mapSize.x!==Ti.shadowSize&&(qn.shadow.map?.dispose(),qn.shadow.map=null,qn.shadow.mapPass?.dispose(),qn.shadow.mapPass=null,qn.shadow.mapSize.set(Ti.shadowSize,Ti.shadowSize)),pt.shadowMap.needsUpdate=!0,Td=-1/0,xe("qualityBtn").textContent=(kn.mode==="auto"?"\u81EA\u52A8\uFF1A":"\u753B\u8D28\uFF1A")+Ti.name}xe("qualityBtn").onclick=()=>{let i=["auto","flow","balanced","high"],e=i[(i.indexOf(kn.mode)+1)%i.length];Hh(kn.setMode(e)),At(e==="auto"?"\u81EA\u52A8\u8C03\u8282\u753B\u8D28\uFF0C\u4F18\u5148\u4FDD\u6301\u6D41\u7545":"\u5DF2\u5207\u6362"+Ti.name+"\u753B\u8D28")};Hh(Rf);xe("assetStatus").onclick=()=>el.retry();Object.defineProperty(window,"mansionPerformance",{configurable:!0,get:()=>({fps:Math.round(kn.fps),mode:kn.mode,quality:Ti.name,drawCalls:pt.info.render.calls,renderedTriangles:pt.info.render.triangles,vegetation:xo?.vegetation.stats,assets:el.stats,mobile:qi.mobile,startupMs:Sg})});function fs(){St!==2&&(Qt.roofs.visible=!0,xe("roofBtn").textContent="\u9690\u85CF\u5C4B\u9876"),document.body.dataset.view=St===2?"bird":"walk",xe("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][St],xe("birdBtn").textContent=St===2?"\u8FDB\u5165\u6F2B\u6E38":"\u9E1F\u77B0\u5168\u666F",xe("roofBtn").classList.toggle("hidden",St!==2)}function Id(){xe("modal").close(),xn=!1,Tt.clear(),on.reset(),Yi("stand"),Ye.g.position.copy(ne)}xe("closeModal").onclick=Id;xe("modalDone").onclick=Id;xe("modal").addEventListener("cancel",i=>{i.preventDefault(),Id()});xe("interactBtn").onclick=dg;xe("helpBtn").onclick=()=>fg({type:"\u5982\u4F55\u5728\u5BB6\u4E2D\u6F2B\u6B65",heading:"\u968F\u5FC3\u8D70\u8D70\uFF0C\u4E0D\u5FC5\u7740\u6025",body:"<p><b>W A S D / \u65B9\u5411\u952E</b>\uFF1A\u76F8\u5BF9\u955C\u5934\u65B9\u5411\u79FB\u52A8<br><b>\u6309\u4F4F\u9F20\u6807\u62D6\u52A8</b>\uFF1A\u73AF\u987E\u56DB\u5468<br><b>\u9F20\u6807\u6EDA\u8F6E</b>\uFF1A\u8C03\u6574\u8DDF\u968F\u8DDD\u79BB<br><b>\u7A7A\u683C</b>\uFF1A\u8DF3\u8DC3\u3000<b>C / L / R</b>\uFF1A\u5750\u4E0B / \u8EBA\u4E0B / \u8D77\u8EAB<br><b>B</b>\uFF1A\u9E1F\u77B0\u5168\u666F\uFF0C\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001WASD \u5E73\u79FB<br><b>Shift</b>\uFF1A\u5954\u8DD1\u3000<b>V</b>\uFF1A\u5207\u6362\u89C6\u89D2<br><b>E</b>\uFF1A\u5728\u63D0\u793A\u51FA\u73B0\u65F6\u4E92\u52A8<br><b>Esc</b>\uFF1A\u5173\u95ED\u4E92\u52A8</p><p>\u4ECE\u5EAD\u9662\u8FDB\u5165\u540E\u65B9\u4E3B\u5B85\uFF0C\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u4EE5\u6B65\u884C\u4E0A\u4E8C\u697C\uFF0C\u4ECE\u4E8C\u697C\u5317\u4FA7\u8F6C\u5230\u76F8\u90BB\u697C\u68AF\u53EF\u4E0A\u5929\u53F0\u3002\u897F\u4FA7\u5EAD\u9662\u5E26\u8DEF\u724C\u7684\u697C\u68AF\u901A\u5411\u5730\u4E0B\u5BA4\uFF1B\u51FA\u5357\u95E8\u6CBF\u96C6\u5E02\u524D\u884C\u5230\u6CB3\u5CB8\uFF1B\u51FA\u95E8\u540E\u5411\u4E1C\u6CBF\u8FDE\u63A5\u6B65\u9053\u5230\u9A6C\u8DEF\uFF0C\u8FC7\u6591\u9A6C\u7EBF\u8FDB\u5165\u4E30\u5DE2\u516C\u53F8\u3002\u516C\u53F8\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u8D70\u904D\u4E94\u5C42\uFF0C\u9760\u8FD1\u7535\u68AF\u6309 E \u9009\u62E9\u697C\u5C42\uFF0C\u4E5F\u80FD\u76F4\u8FBE\u5929\u53F0\u773A\u671B\u5EAD\u9662\u3002\u5DE6\u53F3\u4E24\u7FFC\u7684\u5165\u53E3\u90FD\u671D\u5411\u5EAD\u9662\u524D\u65B9\u3002\u624B\u673A\u53EF\u4F7F\u7528\u5DE6\u4E0B\u89D2\u65B9\u5411\u952E\uFF0C\u62D6\u52A8\u573A\u666F\u8F6C\u52A8\u89C6\u89D2\u3002</p>"});function pg(){St=(St+1)%3,fs(),xe("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][St],At(["\u7B2C\u4E09\u4EBA\u79F0 \xB7 \u62D6\u52A8\u9F20\u6807\u73AF\u987E","\u7B2C\u4E00\u4EBA\u79F0 \xB7 \u9002\u5408\u5BA4\u5185\u63A2\u7D22","\u9E1F\u77B0\u5168\u666F \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u65B9\u5411\u952E\u5E73\u79FB"][St])}xe("viewBtn").onclick=pg;var mg=new Map;mt.traverse(i=>{i.isPointLight&&mg.set(i,i.intensity)});function Wh(){let i=_r.kind==="rain",e=_r.kind==="snow";qn.intensity=Bn?.32:i?.85:e?1.5:2.4,tg.intensity=Bn?.5:.8,mt.backgroundIntensity=Bn?.2:i?.38:.65,mt.environmentIntensity=Bn?.32:i?.42:.62,pt.toneMappingExposure=Bn?1.15:.98,vr.material.uniforms.top.value.set(Bn?"#203449":i?"#647781":e?"#b8cbd2":"#739dba"),vr.material.uniforms.bottom.value.set(Bn?"#627484":i?"#a0afb0":"#efd0a1"),mt.fog.color.set(Bn?5399926:i?10399410:e?13359324:11188130),mt.fog.density=e?.012:i?.009:.006,kh.visible=!i&&!e,kh.material.color.set(Bn?14871807:16770221),mg.forEach((t,n)=>n.intensity=t*(Bn?1.5:1)),xe("timeLabel").textContent=Bn?"\u5165\u591C \xB7 19:30":"\u508D\u665A \xB7 17:40",xe("weatherLabel").textContent=Gf[_r.kind]+" / "+(Bn?"\u706F\u706B\u53EF\u4EB2":"\u5B9C\u5F52\u5BB6"),pt.shadowMap.needsUpdate=!0}xe("dayBtn").onclick=()=>{Bn=!Bn,Wh()};xe("weatherSelect").onchange=i=>{_r.set(i.target.value),Wh(),At("\u5DF2\u5207\u6362"+Gf[i.target.value])};var AS=L0({dialog:xe("guideDialog"),host:xe("guideScene"),list:xe("guidePlaces"),tabs:xe("guideTabs"),onOpen:()=>{Mr(),xn=!0,Tt.clear(),on.reset(),vo=!1,zs=null},onClose:()=>{xn=!1,Tt.clear(),on.reset(),kn.reset()},onTeleport:i=>{if(Mr(),!Si(i.x,i.z,i.y,i.y)){At("\u8BE5\u843D\u70B9\u6682\u4E0D\u53EF\u901A\u884C\uFF0C\u8BF7\u9009\u62E9\u76F8\u90BB\u5730\u70B9");return}ne.set(i.x,i.y,i.z),Nn="stand",Ft=null,Yt.height=0,Yt.velocity=0,St=0,Tt.clear(),on.reset(),Ye.g.position.copy(ne),Ye.g.rotation.x=0,Gt.position.set(i.x*Me,i.y+2.2,i.z*Me+3),Dn=0,yr=.24,fs(),pt.shadowMap.needsUpdate=!0,At("\u5DF2\u5230\u8FBE"+i.name)}});xe("schoolBtn").onclick=()=>{xn||Et.phase!=="idle"||fn.lift.phase!=="idle"||!Mr()||(xn=!0,Tt.clear(),on.reset(),vr.visible=!1,Os.open(()=>{vr.visible=!0,xn=!1,Tt.clear(),on.reset(),kn.reset()}))};Os.setWalkHandler(i=>{if(!Si(i.x,i.z,i.y)){At("\u6B64\u5904\u65E0\u6CD5\u843D\u811A\uFF0C\u8BF7\u4ECE\u5B66\u6821\u897F\u95E8\u8FDB\u5165");return}ne.set(i.x,i.y,i.z),Nn="stand",Ft=null,Yt.height=Yt.velocity=0,St=0,Dn=0,yr=.24,Ye.g.position.copy(ne),Gt.position.set(i.x*Me,i.y+2.1,i.z*Me+3),Tt.clear(),on.reset(),fs(),At("\u5DF2\u8FDB\u5165\u6821\u56ED\u6F2B\u6E38 \xB7 \u4E1C\u4FA7\u697C\u68AF\u53EF\u6B65\u884C\u4E0A\u56DB\u5C42")});Object.defineProperty(window,"mansionNavigation",{get:()=>({x:ne.x,y:ne.y,z:ne.z,yaw:Dn,mode:St})});Object.defineProperty(window,"mansionSchool",{get:()=>Os.stats()});var gg=()=>{Et.phase==="idle"&&fn.lift.phase==="idle"&&Mr()&&AS.open()};xe("mapExpand").onclick=xe("guideBtn").onclick=gg;xe("mapExpand").onkeydown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),gg())};xe("homeBtn").onclick=()=>{Et.phase!=="idle"||fn.lift.phase!=="idle"||Mr()&&(ne.set(0,0,19),Dn=.12,yr=.24,St=0,Nn="stand",Ft=null,Yt.height=0,Yt.velocity=0,fs(),xe("viewBtn").querySelector("span").textContent="\u7B2C\u4E09\u4EBA\u79F0",Tt.clear(),on.reset(),At("\u5DF2\u56DE\u5230\u5EAD\u9662\u5165\u53E3"))};var bi,Za,Oh=!1;xe("soundBtn").onclick=()=>{if(!bi){bi=new(window.AudioContext||window.webkitAudioContext),Za=bi.createGain(),Za.gain.value=0,Za.connect(bi.destination);let i=bi.createBuffer(1,bi.sampleRate*4,bi.sampleRate),e=i.getChannelData(0),t=0;for(let r=0;r<e.length;r++)t=(t+(Math.random()*2-1)*.025)/1.02,e[r]=t;let n=bi.createBufferSource();n.buffer=i,n.loop=!0;let s=bi.createBiquadFilter();s.type="lowpass",s.frequency.value=800,n.connect(s),s.connect(Za),n.start()}Oh=!Oh,bi.resume(),Za.gain.setTargetAtTime(Oh?.7:0,bi.currentTime,.3),xe("soundBtn").querySelector("span").textContent=Oh?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u73AF\u5883\u58F0\u97F3"};addEventListener("keydown",i=>{Os.active||xe("modal").open||xe("guideDialog").open||xe("liftDialog").open||Et.phase!=="idle"||fn.lift.phase!=="idle"||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),Tt.add(i.code),!i.repeat&&(i.code==="KeyE"&&dg(),i.code==="KeyV"&&pg(),i.code==="KeyB"&&(St=St===2?0:2,fs()),i.code==="Space"&&St!==2&&!zn&&Et.phase==="idle"&&fn.lift.phase==="idle"&&(Yi("stand"),Vf(Yt)),i.code==="KeyC"&&Yi("sit"),i.code==="KeyL"&&Yi("lie"),i.code==="KeyR"&&Yi("stand")))});addEventListener("keyup",i=>Tt.delete(i.code));addEventListener("blur",()=>{Tt.clear(),on.reset(),vo=!1,zs=null});document.addEventListener("visibilitychange",()=>{Tt.clear(),on.reset(),vo=!1,zs=null,kn.reset(),pt.shadowMap.needsUpdate=!0});pt.domElement.addEventListener("pointerdown",i=>{zs===null&&(zs=i.pointerId,vo=!0,bd=i.clientX,zh=i.clientY,pt.domElement.setPointerCapture(i.pointerId))});pt.domElement.addEventListener("pointermove",i=>{!vo||zs!==i.pointerId||(Dn-=(i.clientX-bd)*.005,St===2?$a=nn.clamp($a+(i.clientY-zh)*.004,.25,1.48):yr=nn.clamp(yr+(i.clientY-zh)*.004,-.35,.85),bd=i.clientX,zh=i.clientY)});for(let i of["pointerup","pointercancel","lostpointercapture"])pt.domElement.addEventListener(i,e=>{zs===e.pointerId&&(vo=!1,zs=null)});pt.domElement.addEventListener("wheel",i=>{i.preventDefault(),St===2?Ja=nn.clamp(Ja+i.deltaY*.035,22,110):Qa=nn.clamp(Qa+i.deltaY*.005,2,9)},{passive:!1});pt.domElement.addEventListener("contextmenu",i=>i.preventDefault());function xg(){on.reset();let i=zf(innerWidth,Ad.matches);i.mobile!==qi.mobile&&(Qa=i.distance),qi=i,document.body.dataset.mobile=String(qi.mobile),Gt.fov=qi.fov,Gt.aspect=innerWidth/innerHeight,Gt.updateProjectionMatrix(),pt.setSize(innerWidth,innerHeight),Hh(mo[kn.level]),Cd.resize(innerWidth,innerHeight)}addEventListener("resize",xg);Ad.addEventListener("change",xg);var il=Us.map(i=>new Jt(new U((i.x1-.1)*Me,i.y,(i.z1-.1)*Me),new U((i.x2+.1)*Me,i.y+i.h,(i.z2+.1)*Me)));for(let i of gn.slice(1))for(let e of mh())il.push(new Jt(new U(e.x1*Me,i.y-.2,e.z1*Me),new U(e.x2*Me,i.y,e.z2*Me)));for(let i of wr)il.push(new Jt(new U(i.x1*Me,i.y-i.h/2,i.z1*Me),new U(i.x2*Me,i.y+i.h/2,i.z2*Me)));for(let i of yo.filter(e=>e.y>0))il.push(new Jt(new U(i.x1*Me,i.y-.16,i.z1*Me),new U(i.x2*Me,i.y,i.z2*Me)));for(let i of ni)il.push(new Jt(new U((i.x-24.25)*Me,14.275,(i.z-5.3)*Me),new U((i.x+24.25)*Me,14.525,(i.z+5.3)*Me)));var $0=new Ni,j0=new U,Bh=new U;function CS(i,e){Bh.subVectors(e,i);let t=Bh.length();if(t<.001)return e;$0.set(i,Bh.clone().normalize());let n=t;for(let s of il)if($0.intersectBox(s,j0)){let r=j0.distanceTo(i);r>.12&&(n=Math.min(n,Math.max(.08,r-.18)))}return i.clone().addScaledVector(Bh,n/t)}var RS=xe("map").getContext("2d");function PS(){let i=RS;if(Ri(ne.x,ne.z)){i.clearRect(0,0,240,224);let n=r=>18+(r-40)*1.25,s=r=>16+(r+74)*1.25;i.fillStyle="#71866c",i.fillRect(n(72),s(-74),118*1.25,148*1.25),i.fillStyle="#c9c2a5",i.fillRect(n(46),s(4),24*1.25,22*1.25),i.fillRect(n(62),s(26),15*1.25,4*1.25),i.fillStyle="#ad795a",i.fillRect(n(81),s(14),94*1.25,58*1.25),i.fillStyle="#446b52",i.fillRect(n(99),s(27),58*1.25,30*1.25),i.font="9px sans-serif";for(let r of ni)i.fillStyle="#ddd3b6",i.fillRect(n(r.x-24),s(r.z-5),48*1.25,10*1.25),i.fillStyle="#203b30",i.fillText(r.name,n(r.x-10),s(r.z+2));i.fillStyle="#fff0ca",i.fillText("\u516C\u53F8",n(48),s(17)),i.fillText("\u897F\u95E8",n(73),s(28)),i.fillText("\u64CD\u573A",n(118),s(44)),i.beginPath(),i.arc(n(ne.x),s(ne.z),3,0,Math.PI*2),i.fill();return}i.clearRect(0,0,240,224),i.save(),i.translate(71,63);let e=1.85,t=(n,s,r,o,a)=>{i.fillStyle=a,i.fillRect((n-r/2)*e,(s-o/2)*e,r*e,o*e)};t(0,5,66,50,"#3e5548"),t(39,18,8,34,"#777970"),t(58,15,24,22,"#c7c3b5"),t(21.5,32,43,2,"#b5b09b"),i.font="11px sans-serif",i.fillStyle="#f4efd9",i.fillText("\u516C\u53F8 \xB7 \u4E94\u5C42",48*e,16*e),t(0,40,10,20,"#777970"),t(0,53,68,7,"#568b8d"),t(-16,-13.5,10,11,"#9c9d81"),t(0,-11,22,14,"#9c9d81"),t(-16,-.5,10,15,"#9c9d81"),t(16,-.5,10,15,"#9c9d81"),t(0,0,22,8,"#65705b"),t(20.5,11,7,16,"#568b8d"),i.fillStyle="#6a9a92",i.beginPath(),i.ellipse(-5*e,10*e,4.1*e,2.7*e,0,0,7),i.fill(),t(8,12,7,4,"#89785e"),t(13.5,19,5.2,3,"#79905a"),t(9.75,-10.25,1.5,8.5,"#c8b38a"),t(-23.5,-12,2,10,"#c8b38a"),i.font="11px sans-serif",i.textAlign="center",i.fillStyle="#263f33",i.fillText(ne.y<0?"\u5730\u4E0B\u4E00\u5C42":ne.y>6?"\u5C4B\u9876\u82B1\u56ED":"\u4E3B\u5B85 \xB7 \u4E8C\u5C42",0,-12*e),i.fillText("\u96C6\u5E02",0,40*e),i.fillText("\u6CB3\u5CB8",0,49*e),i.fillText("\u4E66\u623F",-16*e,0),i.fillText("\u5BA2\u9910\u5385",16*e,0),i.fillStyle="#e7e7d2",i.fillText("\u8336\u5E2D",8*e,12*e+4),i.fillText("\u9C7C\u5858",-5*e,10*e+4),i.fillText("\u82B1\u5703",13.5*e,19*e+4);for(let n of[tl,Bs,Sr,nl])i.fillStyle="#dfb890",i.beginPath(),i.arc(n.g.position.x*e,n.g.position.z*e,2.6,0,7),i.fill();i.translate(ne.x*e,ne.z*e),i.rotate(-Dn),i.fillStyle="#f5edcf33",i.beginPath(),i.moveTo(0,0),i.lineTo(-8,-15),i.lineTo(8,-15),i.closePath(),i.fill(),i.fillStyle="#fff7da",i.beginPath(),i.arc(0,0,4,0,7),i.fill(),i.restore()}function IS(){if(ne.x>34){let n=gn.find(s=>Math.abs(s.y-ne.y)<.12);xe("place").textContent=uo(ne.x,ne.z)?n?.name||"\u516C\u53F8\u697C\u68AF":"\u7814\u53D1\u4E2D\u5FC3 \xB7 \u5EAD\u9662\u5BF9\u9762",xe("description").textContent=ne.y>17.9?"\u5411\u897F\u770B\uFF0C\u9A6C\u8DEF\u5BF9\u9762\u5C31\u662F\u81EA\u5BB6\u7684\u5EAD\u9662\u3002":"\u5165\u53E3\u671D\u5411\u5EAD\u9662\uFF1B\u4E1C\u4FA7\u7A84\u697C\u68AF\u3001\u4E1C\u5317\u4FA7\u7535\u68AF\u8FDE\u901A\u4E94\u5C42\u4E0E\u5929\u53F0\u3002",xe("floor").textContent=n?.name||"\u697C\u68AF\u901A\u884C\u4E2D";return}let i="\u5EAD\u9662",e="\u6811\u5F71\u3001\u6C34\u58F0\uFF0C\u8FD8\u6709\u5BB6\u4EBA\u7684\u966A\u4F34\u3002",t=ne.y>3?"\u4E8C\u5C42":"\u4E00\u5C42";ne.y<-.2?(t="\u5730\u4E0B\u4E00\u5C42",i=ne.x<-22?"\u5730\u4E0B\u5BA4\u697C\u68AF":ne.z<-13?ne.x<-18?"\u50A8\u7269\u95F4":"\u7535\u7ADE\u623F":ne.x<-18?"KTV":"\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",e="\u6CBF\u697C\u68AF\u4E0B\u5230\u5E95\u90E8\uFF0C\u518D\u4ECE\u4E1C\u4FA7\u8FDB\u5165\u5404\u4E2A\u623F\u95F4\u3002"):ne.y>6.95?(t="\u5929\u53F0",i="\u5929\u53F0\u82B1\u56ED\u4E0E\u8336\u5E2D",e="\u5750\u4E0B\u559D\u8336\uFF0C\u79CD\u82B1\uFF0C\u4FEF\u77B0\u9662\u5916\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"):ne.y>3.85?(i="\u5929\u53F0\u697C\u68AF",t="\u4E8C\u5C42 \u2192 \u5929\u53F0",e="\u7EE7\u7EED\u5411\u5357\u8D70\u5230\u5929\u53F0\u5E73\u53F0\u3002"):ne.y>3?(i=ne.x>11?"\u513F\u7AE5\u6E38\u4E50\u9633\u53F0":ne.x<-11?"\u4E3B\u5367\u5C4B\u9876\u9633\u53F0":ne.z>-8?"\u4E8C\u5C42\u8D70\u5ECA":ne.x<-3?"\u4E3B\u5367":ne.x<3?"\u5B9D\u53EF\u68A6\u513F\u7AE5\u623F":"\u72EC\u7ACB\u536B\u6D74",e=ne.x>11?"\u5BA2\u9910\u5385\u5C4B\u9876\u7684\u513F\u7AE5\u5929\u5730\uFF1A\u6ED1\u68AF\u3001\u6C99\u6C60\u548C\u73A9\u5177\u3002":ne.x<-11?"\u4E66\u623F\u5C4B\u9876\u7684\u9732\u53F0\uFF0C\u8336\u684C\u3001\u7EFF\u690D\u4E0E\u4F11\u95F2\u6C99\u53D1\u3002":"\u72EC\u7ACB\u623F\u95E8\u3001\u6696\u5149\u7167\u660E\u4E0E\u5145\u8DB3\u7684\u751F\u6D3B\u6536\u7EB3\u3002"):ne.y>.2?(i="\u697C\u68AF",e="\u62FE\u7EA7\u800C\u4E0A\uFF0C\u53BB\u4E8C\u697C\u770B\u770B\u3002"):ne.z<-4&&Math.abs(ne.x)<11?(i=ne.x<-3?"\u5F00\u653E\u5F0F\u53A8\u623F":"\u4E3B\u5B85\u8D77\u5C45\u5385",e="\u6CBF\u4E1C\u4FA7\u901A\u9053\u5411\u5317\u5230\u697C\u68AF\u8D77\u70B9\uFF0C\u4E0A\u697C\u540E\u4ECE\u516C\u5171\u5E73\u53F0\u524D\u5F80\u5404\u623F\u95F4\u3002"):ne.x>-21&&ne.x<-13&&ne.z>16&&ne.z<24?(i="\u8F66\u5E93",e="\u8D8A\u91CE\u8F66\u505C\u5728\u8FD9\u91CC\uFF0C\u8F66\u9053\u901A\u5411\u5EAD\u9662\u5357\u95E8\u3002"):ne.z>46?(i="\u6CB3\u7554\u6B65\u9053",e="\u6CBF\u6CB3\u6563\u6B65\uFF0C\u8EAB\u540E\u662F\u70ED\u95F9\u7684\u5C0F\u96C6\u5E02\u3002"):ne.z>30?(i="\u4E61\u95F4\u96C6\u5E02",e="\u8857\u9053\u4E24\u8FB9\u6709\u9C9C\u679C\u3001\u70B9\u5FC3\u4E0E\u82B1\u8349\u644A\u4F4D\u3002"):ne.x<-11&&ne.z<-8?(i="\u897F\u7FFC\u4F1A\u5BA2\u5385",e="\u65B0\u589E\u7684\u5927\u7A7A\u95F4\uFF0C\u4F1A\u5BA2\u3001\u9605\u8BFB\u4E0E\u89C2\u5F71\u3002"):ne.x<-11&&ne.z<7?(i="\u6696\u6728\u4E66\u623F",e="\u4E66\u5899\u3001\u76AE\u6905\u548C\u4E00\u76CF\u4E0D\u6025\u7740\u7184\u706D\u7684\u706F\u3002"):ne.x>11&&ne.z<7?(i="\u5BA2\u9910\u5385",e="\u76F8\u805A\u7684\u65E5\u5E38\uFF0C\u4ECE\u4E00\u987F\u665A\u9910\u5F00\u59CB\u3002"):ne.z>16&&(i="\u5EAD\u9662\u5165\u53E3",e="\u6CBF\u7740\u77F3\u5F84\uFF0C\u53BB\u770B\u770B\u5BB6\u4EBA\u7684\u65E5\u5E38\u3002"),xe("place").textContent=i,xe("description").textContent=e,xe("floor").textContent=t+" \xB7 "+i}function Mr(){if(!zn)return!0;let i=Qm(ne,Ye.g.rotation.y,Si);return i?(wi.root.position.copy(ne),zn=!1,ne.set(i.x,i.y,i.z),Ye.g.position.copy(ne),Ye.g.rotation.x=0,Ye.animate(ja,!1),Nn="stand",Ft=null,Tt.clear(),on.reset(),xe("bikeBtn").textContent="\u9A91\u81EA\u884C\u8F66",At("\u5DF2\u4E0B\u8F66\uFF0C\u81EA\u884C\u8F66\u505C\u5728\u8EAB\u65C1"),!0):(At("\u4E24\u4FA7\u6682\u65F6\u6CA1\u6709\u7A7A\u4F4D\uFF0C\u8BF7\u7A0D\u5FAE\u632A\u52A8\u8F66\u8F86\u518D\u4E0B\u8F66"),!1)}function wd(){if(!(xn||Et.phase!=="idle"||fn.lift.phase!=="idle")){if(zn){Mr();return}if(Math.abs(ne.y-wi.root.position.y)>.2||ne.distanceTo(wi.root.position)>2.2){At("\u5148\u8D70\u5230\u5EAD\u9662\u81EA\u884C\u8F66\u65C1\uFF08\u5165\u53E3\u53F3\u4FA7\uFF09");return}Yi("stand"),Yt.height=Yt.velocity=0,zn=!0,St=0,fs(),xe("bikeBtn").textContent="\u4E0B\u81EA\u884C\u8F66",At("\u5DF2\u4E0A\u8F66 \xB7 \u4F7F\u7528\u65B9\u5411\u952E\u6216\u6447\u6746\u9A91\u884C\uFF0C\u697C\u68AF\u524D\u8BF7\u4E0B\u8F66")}}xe("bikeBtn").onclick=wd;xe("familySelect").onchange=i=>{let e=Number(i.target.value);if(xn||Et.phase!=="idle"||fn.lift.phase!=="idle"){i.target.value=String(Xn.index);return}if(!Mr()){i.target.value=String(Xn.index);return}let t=Xn.members[e].actor.g.position.clone();if(t.y=Math.round(t.y/3.6)*3.6,!Si(t.x,t.z,t.y)){let n=!1;for(let s=.3;s<3&&!n;s+=.3)for(let r=0;r<16;r++){let o=t.x+Math.sin(r*Math.PI/8)*s,a=t.z+Math.cos(r*Math.PI/8)*s;if(Si(o,a,t.y)){t.set(o,t.y,a),n=!0;break}}if(!n){i.target.value=String(Xn.index),At("\u8BE5\u89D2\u8272\u8EAB\u8FB9\u6682\u65F6\u6CA1\u6709\u53EF\u7AD9\u7ACB\u4F4D\u7F6E");return}}Xn.members[e].position={x:t.x,y:t.y,z:t.z},Ye.g.visible=!0,Ye.g.position.copy(ne),Ye.g.rotation.x=0,Xn.switchTo(e,{x:ne.x,y:ne.y,z:ne.z}),Ye=Xn.members[e].actor,ne.copy(t),Ye.g.position.copy(ne),Nn="stand",Ft=null,Yt.height=Yt.velocity=0,Tt.clear(),on.reset(),St=0,fs(),Gt.position.set(ne.x*Me,ne.y+2.2,ne.z*Me+Qa),xe("actorName").textContent=Xn.members[e].name,At("\u6B63\u5728\u63A7\u5236"+Xn.members[e].name)};function _g(){return Ds.some(i=>Math.abs(i.y-ne.y)<.1)&&Math.hypot(ne.x-it.exitX,ne.z-it.z)<1.5}function Xh(i){for(let e of["familySelect","bikeBtn","guideBtn","homeBtn","jumpBtn","sitBtn","lieBtn","birdBtn","viewBtn","liftBtn"])xe(e).disabled=i}function vg(){if(fn.near(ne)){yg();return}if(!(xn||Et.phase!=="idle"||fn.lift.phase!=="idle")){if(zn){At("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}if(!_g()){At("\u7535\u68AF\u4F4D\u4E8E\u897F\u7FFC\uFF0C\u53EF\u4ECE\u5BFC\u89C8\u5730\u56FE\u524D\u5F80\u7535\u68AF\u5385");return}Tt.clear(),on.reset(),xn=!0,xe("liftFloors").replaceChildren();for(let i of Ds){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-ne.y)<.1,e.onclick=()=>{if(!Si(it.exitX,it.z,i.y)){At("\u76EE\u6807\u51FA\u53E3\u6682\u88AB\u6321\u4F4F");return}let t=Ds.find(n=>Math.abs(n.y-ne.y)<.1).y;Et.request(t,i.y)&&(cg.copy(ne),xe("liftDialog").close(),Nn="stand",Ft=null,Yt.height=Yt.velocity=0,Xh(!0),At("\u7535\u68AF\u6B63\u5728\u547C\u68AF\u5E76\u524D\u5F80"+i.name))},xe("liftFloors").append(e)}xe("liftDialog").showModal()}}function yg(){if(!(xn||fn.lift.phase!=="idle"||!fn.near(ne))){if(zn){At("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}Tt.clear(),on.reset(),xn=!0,xe("liftFloors").replaceChildren();for(let i of gn){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-ne.y)<.1,e.onclick=()=>{let t=gn.find(n=>Math.abs(n.y-ne.y)<.1);!t||!Si(sn.exitX,sn.exitZ,i.y)||fn.lift.request(t.y,i.y)&&(ig.copy(ne),xe("liftDialog").close(),Nn="stand",Ft=null,Yt.height=Yt.velocity=0,Xh(!0),At("\u516C\u53F8\u7535\u68AF\u6B63\u5728\u524D\u5F80"+i.name))},xe("liftFloors").append(e)}xe("liftDialog").showModal()}}function LS(i,e){let t=fn.lift,n=fn.update(i,e,ne);t.passenger&&(t.phase==="board"?ne.lerpVectors(ig,new U(sn.x,t.y,sn.z),t.boarding):t.phase==="exit"?ne.set(sn.x,t.y,nn.lerp(sn.z,sn.exitZ,t.exiting)):ne.set(sn.x,t.y,sn.z),Ye.g.position.copy(ne),Ye.animate(e,t.phase==="board"||t.phase==="exit")),n==="arrived"&&(ne.set(sn.exitX,t.target,sn.exitZ),Ye.g.position.copy(ne),xn=!1,Xh(!1),At("\u5DF2\u5230\u8FBE"+gn.find(s=>s.y===t.target).name))}xe("liftBtn").onclick=vg;function Mg(){Et.phase!=="idle"||fn.lift.phase!=="idle"||(xe("liftDialog").close(),xn=!1,Tt.clear(),on.reset())}xe("liftClose").onclick=Mg;xe("liftDialog").addEventListener("cancel",Mg);var Sg=0,Q0=!0,eg=new Es,DS=new Ge,Ed=performance.now(),Md=0;Gt.position.set(0,2.7,19*Me+5);Gt.lookAt(0,1.45,19*Me);function bg(i){requestAnimationFrame(bg);let e=(i-Ed)/1e3;if(Ed=i,document.hidden||xe("guideDialog").open)return;let t=kn.sample(e);t&&Hh(t);let n=Math.min(e,.075);ja+=n,Md++;let s=ja;if(Os.active){Os.update(Gt,s),pt.info.reset(),pt.render(mt,Gt),i-Fh>1e3&&(xe("frameRate").textContent=Math.round(kn.fps)+" \u5E27/\u79D2",Fh=i);return}LS(n,s);let r=Et.update(n);if(lg.update(Et),Et.passenger&&(Et.phase==="board"?ne.lerpVectors(cg,new U(it.x,Et.y,it.z),Et.boarding):Et.phase==="exit"?ne.set(nn.lerp(it.x,it.exitX,Et.exiting),Et.y,it.z):ne.set(it.x,Et.y,it.z),Ye.g.position.copy(ne),Ye.animate(s,Et.phase==="board"||Et.phase==="exit")),r==="arrived"&&(ne.set(it.exitX,Et.target,it.z),Ye.g.position.copy(ne),xn=!1,Xh(!1),At("\u5DF2\u5230\u8FBE"+Ds.find(l=>l.y===Et.target).name)),!xn){let l=on.state.forward+(Tt.has("KeyW")||Tt.has("ArrowUp")?1:0)-(Tt.has("KeyS")||Tt.has("ArrowDown")?1:0),h=on.state.right+(Tt.has("KeyD")||Tt.has("ArrowRight")?1:0)-(Tt.has("KeyA")||Tt.has("ArrowLeft")?1:0),u=Math.max(1,Math.hypot(l,h)),d=zn?7.5/Me:(Tt.has("ShiftLeft")||Tt.has("ShiftRight")?8:4.8)/Me,f=(h*Math.cos(Dn)-l*Math.sin(Dn))/u*d*n,g=(-l*Math.cos(Dn)-h*Math.sin(Dn))/u*d*n;if(St===2)Ya.x=nn.clamp(Ya.x+f*2,-34,190),Ya.z=nn.clamp(Ya.z+g*2,-74,74);else if(Nn==="stand"){let x=ne.clone();if(zn?A0(ne,f,g):w0(ne,f,g),(Yt.height>0||Yt.velocity>0)&&E0(Yt,n),Ye.g.position.copy(ne),Ye.g.position.y+=Yt.height,Ye.g.rotation.x=0,l||h){let m=Math.atan2(f,g);Ye.g.rotation.y+=Math.atan2(Math.sin(m-Ye.g.rotation.y),Math.cos(m-Ye.g.rotation.y))*Math.min(1,n*12)}Ye.animate(s,!!(l||h)),zn&&(wi.root.position.copy(ne),wi.root.rotation.y=Ye.g.rotation.y,wi.wheels.forEach(m=>m.rotation.x+=Math.hypot(ne.x-x.x,ne.z-x.z)*Me/.33),Ye.g.position.y+=.1,Ye.legs.forEach((m,p)=>{m.rotation.x=-1.1+Math.sin(s*8+p*Math.PI)*(l||h?.25:0),m.lower.rotation.x=1.4}),Ye.arms.forEach(m=>m.rotation.x=-1.1))}Nn!=="stand"&&Ft&&(Ye.g.position.set(Ft.x,Ft.y+(Nn==="lie"?Ft.ground?.22:Ft.outdoor?.7:.99:Ft.ground?-.72:-.25),Ft.z),Ye.g.rotation.y=Ft.rotation,Nn==="sit"?(Ye.g.rotation.x=0,Ye.animate(s,!1,"sit"),Ye.arms.forEach(x=>x.rotation.x=-.65)):(Ye.g.position.x+=Math.sin(Ft.rotation)*.7,Ye.g.position.z+=Math.cos(Ft.rotation)*.7,Ye.g.rotation.set(-Math.PI/2,0,Ft.rotation),Ye.animate(s,!1)))}let o=(Ft?new U(Ft.x,Ft.y,Ft.z):ne.clone()).add(new U(0,Nn==="lie"?.8:1.45*Ye.g.scale.y+Yt.height,0));o.x*=Me,o.z*=Me;let a;if(St===2){let l=Ya.clone();l.x*=Me,l.z*=Me,a=l.clone().add(new U(Math.sin(Dn)*Math.cos($a)*Ja,Math.sin($a)*Ja,Math.cos(Dn)*Math.cos($a)*Ja)),Gt.position.lerp(a,1-Math.exp(-n*7)),Gt.lookAt(l),Ye.g.visible=!0}else{let l=St===1?.12:Qa;a=o.clone().add(new U(Math.sin(Dn)*l,St===1?.12:Math.sin(yr)*l,Math.cos(Dn)*l));let h=CS(o,a);Gt.position.lerp(h,1-Math.exp(-n*12)),St===1?(Gt.position.copy(a),Gt.lookAt(o.clone().add(new U(-Math.sin(Dn)*6,-yr*5,-Math.cos(Dn)*6)))):Gt.lookAt(o),Ye.g.visible=St!==1&&Gt.position.distanceTo(o)>1}_S.update(n,_r.kind==="snow"),_r.update(n,s,Gt);for(let l of Qt.root.userData.swings)l.pivot.rotation.x=Math.sin(s*1.6)*(Ft?.swingId===l.id?.18:.035),l.pivot.updateMatrixWorld(!0),Ft?.swingId===l.id&&(l.position.set(0,-2.8,0).applyMatrix4(l.pivot.matrixWorld),l.position.x/=Me,l.position.z/=Me,Ye.g.position.copy(l.position).add(new U(0,-.05,0)),Ye.g.rotation.x=l.pivot.rotation.x);xo&&xo.update(i,n,Gt);let c=Of.filter(l=>Math.abs(l[2]-ne.y)<.4).map(l=>({r:l,d:Math.hypot(l[0]-ne.x,l[1]-ne.z)})).sort((l,h)=>l.d-h.d);yS.forEach((l,h)=>{let u=c[h];l.visible=!!u&&u.d<12,u&&(l.position.set(u.r[0],u.r[2]+2.7,u.r[1]),l.intensity=65*Math.max(0,1-u.d/14))}),Pd.visible=ne.y<-.3,rg.forEach((l,h)=>l.animate(s+h,!1,"cook"));for(let l=0;l<Xn.members.length;l++){let h=Xn.members[l].actor;if(h!==Ye){if(h.g.visible=!0,Xn.visited.has(l)){h.animate(s,!1);continue}l===1&&h.animate(s,!1,"cook"),l===2&&(h.g.position.set(-.5+Math.sin(s*.45)*2.6,0,16+Math.cos(s*.45)*1.1),h.g.rotation.y=Math.atan2(Math.cos(s*.45)*2.6,-Math.sin(s*.45)*1.1),h.animate(s,!0)),l===3&&(h.animate(s,!1,"read"),h.legs.forEach(u=>{u.rotation.x=-1.3,u.lower.rotation.x=1.3})),l===4&&h.animate(s,!1,"garden")}}if(Gh.visible=Ye!==Sr&&!Xn.visited.has(3),Xn.visited.has(2)||ag.position.set(Bs.g.position.x+.7,Bs.g.position.y+.23,Bs.g.position.z),Vh.forEach((l,h)=>{if(s<ug&&ne.y<.1&&ne.z>7){let u=s+h*3;l.g.position.set(ne.x+Math.sin(u)*1.1,0,ne.z+Math.cos(u)*1.1),l.g.rotation.y=u+Math.PI/2}else{let u=s*.3+h*2.4;l.g.position.set(3+Math.sin(u)*2,0,8+Math.cos(u)*3.5),l.g.rotation.y=Math.atan2(Math.cos(u)*2,-Math.sin(u)*3.5)}l.animate(s+h)}),og.forEach((l,h)=>{let u=s*(.24+h*.01)+h*.8,d=s<hg,f=-5+Math.cos(u)*(d?1:2.8),g=(d?11.6:10)+Math.sin(u)*(d?.35:1.65);l.position.set(f,.135+Math.sin(u*3)*.012,g),l.rotation.y=Math.atan2(-Math.sin(u)*(d?1:2.8),Math.cos(u)*(d?.35:1.65))}),Ka[0].position.set(-3.1,.25,10.7),Ka[0].rotation.y=.5+Math.sin(s*.15)*.15,Ka[1].position.set(-6.3+Math.sin(s*.07)*.6,.13,9.1+Math.cos(s*.07)*.7),Ka[1].rotation.y=s*.07,sg.forEach((l,h)=>{l.scale.y=.65+Math.sin(s*7+h)*.24+Math.sin(s*13+h)*.17}),Rd.intensity=(Bn?9:6)+Math.sin(s*9)*.8,Md%6===0){rn=null;let l=2.15;for(let h of bS){let u=Math.hypot(h.x-ne.x,h.z-ne.z);u<l&&Math.abs(ne.y-h.y)<.5&&(l=u,rn=h)}for(let h of Vh)ne.y<.1&&h.g.position.distanceTo(ne)<1.6&&!rn&&(rn={id:"dog",title:"\u6478\u6478\u8C46\u8C46\u548C\u56E2\u56E2",hint:"\u5C0F\u72D7 \xB7 \u60F3\u548C\u4F60\u4E00\u8D77\u6563\u6B65"});if(!rn&&!zn&&Math.abs(ne.y-wi.root.position.y)<.2&&Math.hypot(ne.x-wi.root.position.x,ne.z-wi.root.position.z)<2&&(rn={id:"bicycle",title:"\u9A91\u81EA\u884C\u8F66",hint:"\u5EAD\u9662\u81EA\u884C\u8F66"}),!rn&&fn.near(ne)&&(rn={id:"officeElevator",title:"\u4E58\u5750\u516C\u53F8\u7535\u68AF",hint:"\u4E00\u81F3\u4E94\u697C \xB7 \u5C4B\u9876\u5929\u53F0"}),!rn&&_g()&&(rn={id:"elevator",title:"\u9009\u62E9\u7535\u68AF\u697C\u5C42",hint:"\u5730\u4E0B\u5BA4 \xB7 \u4E00\u697C \xB7 \u4E8C\u697C \xB7 \u5929\u53F0"}),zn&&(rn={id:"bicycle",title:"\u4E0B\u81EA\u884C\u8F66",hint:"\u6309 E \u6216\u70B9\u51FB\u4E0B\u8F66"}),xe("prompt").classList.toggle("hidden",!rn||xn||St===2),rn&&(xe("actionName").textContent=rn.title,xe("actionHint").textContent=rn.hint),PS(),IS(),Ri(ne.x,ne.z)){let h=Mo(ne);xe("floor").textContent=`\u5C0F\u5B66 \xB7 ${Math.round(ne.y/3.6)+1}\u5C42`,xe("place").textContent=h?.name||"\u5411\u9633\u5C0F\u5B66 \xB7 \u6821\u56ED\u6F2B\u6E38",xe("description").textContent=h?"\u6B63\u5728\u4E0A\u8BFE \xB7 \u6CBF\u4E1C\u4FA7\u8FC7\u9053\u8FDB\u51FA\uFF0C\u4FDD\u7559\u684C\u6905\u78B0\u649E":"\u64CD\u573A\u81EA\u7531\u6F2B\u6E38 \xB7 \u6559\u5B66\u697C\u5357\u4FA7\u8D70\u5ECA\u5165\u73ED\uFF0C\u4E1C\u4FA7\u697C\u68AF\u901A\u5F80\u56DB\u5C42"}}Ri(ne.x,ne.z)?pt.shadowMap.needsUpdate=!1:i-Td>=Ti.shadowInterval&&(pt.shadowMap.needsUpdate=!0,Td=i);for(let l of Qt.merged.children)l.userData.zone==="basement"&&(l.visible=ne.y<-.15||ne.x<-21&&ne.z<-6&&ne.z>-20);if(Os.updateWalk(ne,s),vr.position.set(Gt.position.x/Me,0,Gt.position.z/Me),pt.info.reset(),Cd.render(),Q0&&(Q0=!1,Sg=performance.now(),xe("loading").style.opacity="0",setTimeout(()=>xe("loading").remove(),300)),Md%20===0&&!document.hidden){eg.setFromProjectionMatrix(DS.multiplyMatrices(Gt.projectionMatrix,Gt.matrixWorldInverse));let l=new Set;for(let h of[...Qt.merged.children,...Qt.roofs.visible?Qt.roofs.children:[]])h.visible&&eg.intersectsObject(h)&&l.add(h.material);el.update({x:ne.x,z:ne.z,y:ne.y,bird:St===2,materials:l})}i-Fh>1e3&&(xe("qualityBtn").title="\u70B9\u51FB\u5207\u6362\uFF1A\u81EA\u52A8 / \u6D41\u7545 / \u5747\u8861 / \u7CBE\u7EC6\uFF1B\u5F53\u524D "+Math.round(kn.fps)+" \u5E27/\u79D2",xe("frameRate").textContent=Math.round(kn.fps)+" \u5E27/\u79D2",Fh=i)}fs();for(let i of[...mt.children])_o.add(i);_o.scale.set(Me,1,Me);mt.add(_o);for(let i of[Ye,tl,Bs,Sr,nl,...rg,...Vh])i.g.scale.x/=Me,i.g.scale.z/=Me;xo=Z0(mt,Qt,pt,vr,{parent:_o,queue:el,onLoaded:()=>{_r.attachWind(),Wh(),pt.shadowMap.needsUpdate=!0}});xo.setQuality(Ti);Wh();Ed=performance.now();kn.reset();requestAnimationFrame(bg);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
