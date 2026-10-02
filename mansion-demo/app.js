(()=>{var _p=0,Cu=1,vp=2;var ra=1,rc=2,qr=3,Kn=0,xn=1,wn=2,Yt=0,Gs=1,oa=2,Ru=3,Pu=4,oc=5;var Jn=100,yp=101,Mp=102,Sp=103,bp=104,ir=200,Tp=201,wp=202,Ap=203,Tl=204,wl=205,aa=206,Ep=207,la=208,Cp=209,Rp=210,Pp=211,Ip=212,Lp=213,Dp=214,Al=0,El=1,Cl=2,Hs=3,Rl=4,Pl=5,Il=6,Ll=7,Iu=0,Np=1,Up=2,gi=0,ca=1,ha=2,ua=3,sr=4,fa=5,da=6,pa=7,hu="attached",Fp="detached",Lu=300,bs=301,rr=302,Yr=303,ac=304,ma=306,$t=1e3,zn=1001,Lr=1002,Bt=1003,lc=1004;var or=1005;var vt=1006,Zr=1007;var An=1008;var En=1009,Du=1010,Nu=1011,Kr=1012,cc=1013,xi=1014,Cn=1015,Ut=1016,hc=1017,uc=1018,Ts=1020,Uu=35902,Fu=35899,Ou=1021,Bu=1022,_n=1023,Ei=1026,Ni=1027,fc=1028,dc=1029,ws=1030,pc=1031;var mc=1033,ga=33776,xa=33777,_a=33778,va=33779,gc=35840,xc=35841,_c=35842,vc=35843,yc=36196,Mc=37492,Sc=37496,bc=37488,Tc=37489,ya=37490,wc=37491,Ac=37808,Ec=37809,Cc=37810,Rc=37811,Pc=37812,Ic=37813,Lc=37814,Dc=37815,Nc=37816,Uc=37817,Fc=37818,Oc=37819,Bc=37820,zc=37821,kc=36492,Vc=36494,Gc=36495,Hc=36283,Wc=36284,Ma=36285,Xc=36286;var Ws=2300,Xs=2301,bl=2302,uu=2303,fu=2400,du=2401,pu=2402,Op=2500;var zu=0,Sa=1,Jr=2,Bp=3200;var ba=0,zp=1,rs="",dt="srgb",pn="srgb-linear",Ao="linear",xt="srgb";var zs=7680;var mu=519,kp=512,Vp=513,Gp=514,qc=515,Hp=516,Wp=517,Yc=518,Xp=519,Dl=35044;var ku="300 es",ui=2e3,Dr=2001;function gg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qp(){let i=Nr("canvas");return i.style.display="block",i}var Cd={},Ur=null;function Eo(...i){let e="THREE."+i.shift();Ur?Ur("log",e,...i):console.log(e,...i)}function Yp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Yp(i);let e="THREE."+i.shift();if(Ur)Ur("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Qe(...i){i=Yp(i);let e="THREE."+i.shift();if(Ur)Ur("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Vs(...i){let e=i.join(" ");e in Cd||(Cd[e]=!0,Be(...i))}function Zp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Kp={[Al]:El,[Cl]:Il,[Rl]:Ll,[Hs]:Pl,[El]:Al,[Il]:Cl,[Ll]:Rl,[Pl]:Hs},Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,So=Math.PI/180,qs=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Vu(i,e){return(i%e+e)%e}function _g(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vg(i,e,t){return i!==e?(t-i)/(e-i):0}function bo(i,e,t){return(1-t)*i+t*e}function yg(i,e,t,n){return bo(i,e,1-Math.exp(-t*n))}function Mg(i,e=1){return e-Math.abs(Vu(i,e*2)-e)}function Sg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wg(i,e){return i+Math.random()*(e-i)}function Ag(i){return i*(.5-Math.random())}function Eg(i){i!==void 0&&(Rd=i);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cg(i){return i*So}function Rg(i){return i*qs}function Pg(i){return(i&i-1)===0&&i!==0}function Ig(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vn={DEG2RAD:So,RAD2DEG:qs,generateUUID:ii,clamp:at,euclideanModulo:Vu,mapLinear:_g,inverseLerp:vg,lerp:bo,damp:yg,pingpong:Mg,smoothstep:Sg,smootherstep:bg,randInt:Tg,randFloat:wg,randFloatSpread:Ag,seededRandom:Eg,degToRad:Cg,radToDeg:Rg,isPowerOfTwo:Pg,ceilPowerOfTwo:Ig,floorPowerOfTwo:Lg,setQuaternionFromProperEuler:Dg,normalize:St,denormalize:hi},Yu=class Yu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yu.prototype.isVector2=!0;var ce=Yu,ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let y=Math.acos(p),b=Math.sin(y);m=Math.sin(m*y)/b,a=Math.sin(a*y)/b,c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+x*a}else{c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+x*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zu=class Zu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zu.prototype.isVector3=!0;var D=Zu,Uh=new D,Pd=new ln,Ku=class Ku{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],y=s[1],b=s[4],M=s[7],w=s[2],A=s[5],v=s[8];return r[0]=o*x+a*y+c*w,r[3]=o*p+a*b+c*A,r[6]=o*m+a*M+c*v,r[1]=l*x+h*y+u*w,r[4]=l*p+h*b+u*A,r[7]=l*m+h*M+u*v,r[2]=d*x+f*y+g*w,r[5]=d*p+f*b+g*A,r[8]=d*m+f*M+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Vs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fh.makeScale(e,t)),this}rotate(e){return Vs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fh.makeRotation(-e)),this}translate(e,t){return Vs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ku.prototype.isMatrix3=!0;var st=Ku,Fh=new st,Id=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ng(){let i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Ir(s.r),s.g=Ir(s.g),s.b=Ir(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?Ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:Id,fromXYZ:Ld,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Id,fromXYZ:Ld,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}var ot=Ng();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xr,Nl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=Nr("canvas")),xr.width=e.width,xr.height=e.height;let s=xr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ug=0,Fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oh(s[o].image)):r.push(Oh(s[o]))}else r=Oh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Oh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var Fg=0,Bh=new D,nn=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=vt,o=An,a=_n,c=En,l=i.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=ii(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Lu;nn.DEFAULT_ANISOTROPY=1;var Ju=class Ju{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(f+1)/2,w=(m+1)/2,A=(h+d)/4,v=(u+x)/4,_=(g+p)/4;return b>M&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=v/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=v/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ju.prototype.isVector4=!0;var _t=Ju,Ul=class extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new nn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Co=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=class sc{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_r.setFromMatrixColumn(e,0).length(),r=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Og,e,Bg)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),hs.crossVectors(n,Yn),hs.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),hs.crossVectors(n,Yn)),hs.normalize(),Ka.crossVectors(Yn,hs),s[0]=hs.x,s[4]=Ka.x,s[8]=Yn.x,s[1]=hs.y,s[5]=Ka.y,s[9]=Yn.y,s[2]=hs.z,s[6]=Ka.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],b=n[7],M=n[11],w=n[15],A=s[0],v=s[4],_=s[8],T=s[12],E=s[1],I=s[5],O=s[9],z=s[13],P=s[2],N=s[6],U=s[10],B=s[14],X=s[3],L=s[7],V=s[11],Y=s[15];return r[0]=o*A+a*E+c*P+l*X,r[4]=o*v+a*I+c*N+l*L,r[8]=o*_+a*O+c*U+l*V,r[12]=o*T+a*z+c*B+l*Y,r[1]=h*A+u*E+d*P+f*X,r[5]=h*v+u*I+d*N+f*L,r[9]=h*_+u*O+d*U+f*V,r[13]=h*T+u*z+d*B+f*Y,r[2]=g*A+x*E+p*P+m*X,r[6]=g*v+x*I+p*N+m*L,r[10]=g*_+x*O+p*U+m*V,r[14]=g*T+x*z+p*B+m*Y,r[3]=y*A+b*E+M*P+w*X,r[7]=y*v+b*I+M*N+w*L,r[11]=y*_+b*O+M*U+w*V,r[15]=y*T+b*z+M*B+w*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],y=c*f-l*d,b=a*f-l*u,M=a*d-c*u,w=o*f-l*h,A=o*d-c*h,v=o*u-a*h;return t*(x*y-p*b+m*M)-n*(g*y-p*w+m*A)+s*(g*b-x*w+m*v)-r*(g*M-x*A+p*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],y=t*a-n*o,b=t*c-s*o,M=t*l-r*o,w=n*c-s*a,A=n*l-r*a,v=s*l-r*c,_=h*x-u*g,T=h*p-d*g,E=h*m-f*g,I=u*p-d*x,O=u*m-f*x,z=d*m-f*p,P=y*z-b*O+M*I+w*E-A*T+v*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/P;return e[0]=(a*z-c*O+l*I)*N,e[1]=(s*O-n*z-r*I)*N,e[2]=(x*v-p*A+m*w)*N,e[3]=(d*A-u*v-f*w)*N,e[4]=(c*E-o*z-l*T)*N,e[5]=(t*z-s*E+r*T)*N,e[6]=(p*M-g*v-m*b)*N,e[7]=(h*v-d*M+f*b)*N,e[8]=(o*O-a*E+l*_)*N,e[9]=(n*E-t*O-r*_)*N,e[10]=(g*A-x*M+m*y)*N,e[11]=(u*M-h*A-f*y)*N,e[12]=(a*T-o*I-c*_)*N,e[13]=(t*I-n*T+s*_)*N,e[14]=(x*b-g*w-p*y)*N,e[15]=(h*w-u*b+d*y)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=c*l,b=c*h,M=c*u,w=n.x,A=n.y,v=n.z;return s[0]=(1-(x+m))*w,s[1]=(f+M)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+m))*A,s[6]=(p+y)*A,s[7]=0,s[8]=(g+b)*v,s[9]=(p-y)*v,s[10]=(1-(d+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_r.set(s[0],s[1],s[2]).length(),a=_r.set(s[4],s[5],s[6]).length(),c=_r.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ai.copy(this);let l=1/o,h=1/a,u=1/c;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=ui,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===ui)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Dr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ui,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===ui)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Dr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};sc.prototype.isMatrix4=!0;var Ve=sc,_r=new D,ai=new Ve,Og=new D(0,0,0),Bg=new D(1,1,1),hs=new D,Ka=new D,Yn=new D,Dd=new Ve,Nd=new ln,ji=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ji.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zg=0,Ud=new D,vr=new ln,Wi=new Ve,Ja=new D,fo=new D,kg=new D,Vg=new ln,Fd=new D(1,0,0),Od=new D(0,1,0),Bd=new D(0,0,1),zd={type:"added"},Gg={type:"removed"},yr={type:"childadded",child:null},zh={type:"childremoved",child:null},kt=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new ji,n=new ln,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new st}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(fo,Ja,this.up):Wi.lookAt(Ja,fo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(Wi),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),yr.child=e,this.dispatchEvent(yr),yr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),zh.child=e,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,kg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,Vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};kt.DEFAULT_UP=new D(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var et=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hg={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},$a={h:0,s:0,l:0};function kh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Vu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=kh(o,r,e+1/3),this.g=kh(o,r,e),this.b=kh(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=Jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ot.workingToColorSpace(bn.copy(this),e),Math.round(at(bn.r*255,0,255))*65536+Math.round(at(bn.g*255,0,255))*256+Math.round(at(bn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=dt){ot.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL($a);let n=bo(us.h,$a.h,t),s=bo(us.s,$a.s,t),r=bo(us.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Ie;Ie.NAMES=Jp;var Ro=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ys=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new D,Xi=new D,Vh=new D,qi=new D,Mr=new D,Sr=new D,kd=new D,Gh=new D,Hh=new D,Wh=new D,Xh=new _t,qh=new _t,Yh=new _t,gs=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),li.subVectors(e,t),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){li.subVectors(s,t),Xi.subVectors(n,t),Vh.subVectors(e,t);let o=li.dot(li),a=li.dot(Xi),c=li.dot(Vh),l=Xi.dot(Xi),h=Xi.dot(Vh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,qi.x),c.addScaledVector(o,qi.y),c.addScaledVector(a,qi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Xh.setScalar(0),qh.setScalar(0),Yh.setScalar(0),Xh.fromBufferAttribute(e,t),qh.fromBufferAttribute(e,n),Yh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xh,r.x),o.addScaledVector(qh,r.y),o.addScaledVector(Yh,r.z),o}static isFrontFacing(e,t,n,s){return li.subVectors(n,t),Xi.subVectors(e,t),li.cross(Xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),li.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Mr.subVectors(s,n),Sr.subVectors(r,n),Gh.subVectors(e,n);let c=Mr.dot(Gh),l=Sr.dot(Gh);if(c<=0&&l<=0)return t.copy(n);Hh.subVectors(e,s);let h=Mr.dot(Hh),u=Sr.dot(Hh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Mr,o);Wh.subVectors(e,r);let f=Mr.dot(Wh),g=Sr.dot(Wh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Sr,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return kd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(kd,a);let m=1/(p+x+d);return o=x*m,a=d*m,t.copy(n).addScaledVector(Mr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Qa.subVectors(this.max,po),br.subVectors(e.a,po),Tr.subVectors(e.b,po),wr.subVectors(e.c,po),fs.subVectors(Tr,br),ds.subVectors(wr,Tr),Us.subVectors(br,wr);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Us.z,Us.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Us.z,0,-Us.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Us.y,Us.x,0];return!Zh(t,br,Tr,wr,Qa)||(t=[1,0,0,0,1,0,0,0,1],!Zh(t,br,Tr,wr,Qa))?!1:(el.crossVectors(fs,ds),t=[el.x,el.y,el.z],Zh(t,br,Tr,wr,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new D,new D,new D,new D,new D,new D,new D,new D],ci=new D,ja=new cn,br=new D,Tr=new D,wr=new D,fs=new D,ds=new D,Us=new D,po=new D,Qa=new D,el=new D,Fs=new D;function Zh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fs.fromArray(i,r);let a=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),h=n.dot(Fs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ji=Wg();function Wg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Xg(i){Math.abs(i)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),Ji.floatView[0]=i;let e=Ji.uint32View[0],t=e>>23&511;return Ji.baseTable[t]+((e&8388607)>>Ji.shiftTable[t])}function qg(i){let e=i>>10;return Ji.uint32View[0]=Ji.mantissaTable[Ji.offsetTable[e]+(i&1023)]+Ji.exponentTable[e],Ji.floatView[0]}var xs=class{static toHalfFloat(e){return Xg(e)}static fromHalfFloat(e){return qg(e)}},Jt=new D,tl=new ce,Yg=0,Ct=class extends Ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dl,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Po=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Io=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zg=new cn,mo=new D,Kh=new D,kn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);let t=mo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Kh)),this.expandByPoint(mo.copy(e.center).sub(Kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kg=0,ti=new Ve,Jh=new kt,Ar=new D,Zn=new cn,go=new cn,an=new D,Mt=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gg(e)?Io:Po)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Zn.min,go.min),Zn.expandByPoint(an),an.addVectors(Zn.max,go.max),Zn.expandByPoint(an)):(Zn.expandByPoint(go.min),Zn.expandByPoint(go.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(Ar.fromBufferAttribute(e,l),an.add(Ar)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new D,c[_]=new D;let l=new D,h=new D,u=new D,d=new ce,f=new ce,g=new ce,x=new D,p=new D;function m(_,T,E){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,E),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[_].add(x),a[T].add(x),a[E].add(x),c[_].add(p),c[T].add(p),c[E].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let E=y[_],I=E.start,O=E.count;for(let z=I,P=I+O;z<P;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let b=new D,M=new D,w=new D,A=new D;function v(_){w.fromBufferAttribute(s,_),A.copy(w);let T=a[_];b.copy(T),b.sub(w.multiplyScalar(w.dot(T))).normalize(),M.crossVectors(A,T);let I=M.dot(c[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,I)}for(let _=0,T=y.length;_<T;++_){let E=y[_],I=E.start,O=E.count;for(let z=I,P=I+O;z<P;z+=3)v(e.getX(z+0)),v(e.getX(z+1)),v(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ct(d,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},zr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dl,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new D,kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jg=0,Ln=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Gs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=wl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==wl&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Zi=new D,$h=new D,nl=new D,ps=new D,jh=new D,il=new D,Qh=new D,Ri=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){$h.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),ps.copy(this.origin).sub($h);let r=e.distanceTo(t)*.5,o=-this.direction.dot(nl),a=ps.dot(this.direction),c=-ps.dot(nl),l=ps.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($h).addScaledVector(nl,d),f}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,s,r){jh.subVectors(t,e),il.subVectors(n,e),Qh.crossVectors(jh,il);let o=this.direction.dot(Qh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ps.subVectors(this.origin,e);let c=a*this.direction.dot(il.crossVectors(ps,il));if(c<0)return null;let l=a*this.direction.dot(jh.cross(ps));if(l<0||c+l>o)return null;let h=-a*ps.dot(Qh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vd=new Ve,Os=new Ri,sl=new kn,Gd=new D,rl=new D,ol=new D,al=new D,eu=new D,ll=new D,Hd=new D,cl=new D,Le=class extends kt{constructor(e=new Mt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ll.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(eu.fromBufferAttribute(u,e),o?ll.addScaledVector(eu,h):ll.addScaledVector(eu.sub(t),h))}t.add(ll)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(sl.containsPoint(Os.origin)===!1&&(Os.intersectSphere(sl,Gd)===null||Os.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Vd),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let A=a.getX(M),v=a.getX(M+1),_=a.getX(M+2);s=hl(this,m,e,n,l,h,u,A,v,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=a.getX(p),b=a.getX(p+1),M=a.getX(p+2);s=hl(this,o,e,n,l,h,u,y,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),b=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let M=y,w=b;M<w;M+=3){let A=M,v=M+1,_=M+2;s=hl(this,m,e,n,l,h,u,A,v,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let y=p,b=p+1,M=p+2;s=hl(this,o,e,n,l,h,u,y,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function $g(i,e,t,n,s,r,o,a){let c;if(e.side===xn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Kn,a),c===null)return null;cl.copy(a),cl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(cl);return l<t.near||l>t.far?null:{distance:l,point:cl.clone(),object:i}}function hl(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,rl),i.getVertexPosition(c,ol),i.getVertexPosition(l,al);let h=$g(i,e,t,n,rl,ol,al,Hd);if(h){let u=new D;gs.getBarycoord(Hd,rl,ol,al,u),s&&(h.uv=gs.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=gs.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=gs.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};gs.getNormal(rl,ol,al,d.normal),h.face=d,h.barycoord=u}return h}var xo=new _t,Wd=new _t,Xd=new _t,jg=new _t,qd=new Ve,ul=new D,tu=new kn,Yd=new Ve,nu=new Ri,Lo=class extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tu.copy(this.boundingSphere),tu.applyMatrix4(s),e.ray.intersectsSphere(tu)!==!1&&(Yd.copy(s).invert(),nu.copy(e.ray).applyMatrix4(Yd),!(this.boundingBox!==null&&nu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Wd.fromBufferAttribute(s.attributes.skinIndex,e),Xd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(xo.copy(t),t.set(0,0,0,0)):(xo.set(...t,1),t.set(0,0,0)),xo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Xd.getComponent(r);if(o!==0){let a=Wd.getComponent(r);qd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jg.copy(xo).applyMatrix4(qd),o)}}return t.isVector4&&(t.w=xo.w),t.applyMatrix4(this.bindMatrixInverse)}},Vr=class extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}},mn=class extends nn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bt,h=Bt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zd=new Ve,Qg=new Ve,Do=class i{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Qg;Zd.multiplyMatrices(a,t[r]),Zd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new mn(t,e,e,_n,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Be("Skeleton: No bone found with UUID:",r),o=new Vr),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},_s=class extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Er=new Ve,Kd=new Ve,fl=[],Jd=new cn,ex=new Ve,_o=new Le,vo=new kn,Pi=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ex)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),Jd.copy(e.boundingBox).applyMatrix4(Er),this.boundingBox.union(Jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Er),vo.copy(e.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_o.geometry=this.geometry,_o.material=this.material,_o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vo.copy(this.boundingSphere),vo.applyMatrix4(n),e.ray.intersectsSphere(vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Er),Kd.multiplyMatrices(n,Er),_o.matrixWorld=Kd,_o.raycast(e,fl);for(let o=0,a=fl.length;o<a;o++){let c=fl[o];c.instanceId=r,c.object=this,t.push(c)}fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mn(new Float32Array(s*this.count),s,this.count,fc,Cn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},iu=new D,tx=new D,nx=new st,ni=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=iu.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(iu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nx.getNormalMatrix(e),s=this.coplanarPoint(iu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bs=new kn,ix=new ce(.5,.5),dl=new D,vs=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ui,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,m-g,w-y).normalize(),s[1].setComponents(l+o,f+h,m+g,w+y).normalize(),s[2].setComponents(l+a,f+u,m+x,w+b).normalize(),s[3].setComponents(l-a,f-u,m-x,w-b).normalize(),n)s[4].setComponents(c,d,p,M).normalize(),s[5].setComponents(l-c,f-d,m-p,w-M).normalize();else if(s[4].setComponents(l-c,f-d,m-p,w-M).normalize(),t===ui)s[5].setComponents(l+c,f+d,m+p,w+M).normalize();else if(t===Dr)s[5].setComponents(c,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){Bs.center.set(0,0,0);let t=ix.distanceTo(e.center);return Bs.radius=.7071067811865476+t,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(dl.x=s.normal.x>0?e.max.x:e.min.x,dl.y=s.normal.y>0?e.max.y:e.min.y,dl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ys=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ol=new D,Bl=new D,$d=new Ve,yo=new Ri,pl=new kn,su=new D,jd=new D,Zs=class extends kt{constructor(e=new Mt,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ol.fromBufferAttribute(t,s-1),Bl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ol.distanceTo(Bl);e.setAttribute("lineDistance",new lt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(s),pl.radius+=r,e.ray.intersectsSphere(pl)===!1)return;$d.copy(s).invert(),yo.copy(e.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=h.getX(x),y=h.getX(x+1),b=ml(this,e,yo,c,m,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=ml(this,e,yo,c,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,p=g-1;x<p;x+=l){let m=ml(this,e,yo,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=ml(this,e,yo,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ml(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ol.fromBufferAttribute(a,s),Bl.fromBufferAttribute(a,r),t.distanceSqToSegment(Ol,Bl,su,jd)>n)return;su.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(su);if(!(l<e.near||l>e.far))return{distance:l,point:jd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Qd=new D,ep=new D,Ks=class extends Zs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Qd.fromBufferAttribute(t,s),ep.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qd.distanceTo(ep);e.setAttribute("lineDistance",new lt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},No=class extends Zs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ms=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tp=new Ve,gu=new Ri,gl=new kn,xl=new D,Js=class extends kt{constructor(e=new Mt,t=new Ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),gl.radius+=r,e.ray.intersectsSphere(gl)===!1)return;tp.copy(s).invert(),gu.copy(e.ray).applyMatrix4(tp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let p=l.getX(g);xl.fromBufferAttribute(u,p),np(xl,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)xl.fromBufferAttribute(u,g),np(xl,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function np(i,e,t,n,s,r,o){let a=gu.distanceSqToPoint(i);if(a<t){let c=new D;gu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Uo=class extends nn{constructor(e=[],t=bs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Dn=class extends nn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends nn{constructor(e,t,n=xi,s,r,o,a=Bt,c=Bt,l,h=Ei,u=1){if(h!==Ei&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zl=class extends fi{constructor(e,t=xi,n=bs,s,r,o=Bt,a=Bt,c,l=Ei){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Fo=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wt=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(x,p,m,y,b,M,w,A,v,_,T){let E=M/v,I=w/_,O=M/2,z=w/2,P=A/2,N=v+1,U=_+1,B=0,X=0,L=new D;for(let V=0;V<U;V++){let Y=V*I-z;for(let $=0;$<N;$++){let le=$*E-O;L[x]=le*y,L[p]=Y*b,L[m]=P,l.push(L.x,L.y,L.z),L[x]=0,L[p]=0,L[m]=A>0?1:-1,h.push(L.x,L.y,L.z),u.push($/v),u.push(1-V/_),B+=1}}for(let V=0;V<_;V++)for(let Y=0;Y<v;Y++){let $=d+Y+N*V,le=d+Y+N*(V+1),Se=d+(Y+1)+N*(V+1),Ee=d+(Y+1)+N*V;c.push($,le,Ee),c.push(le,Se,Ee),X+=6}a.addGroup(f,X,T),f+=X,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Oo=class i extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,x=s+1,p=new D,m=new D;for(let y=0;y<=g;y++){let b=0,M=0,w=0,A=0;if(y<=n){let T=y/n,E=T*Math.PI/2;M=-h-e*Math.cos(E),w=e*Math.sin(E),A=-e*Math.cos(E),b=T*u}else if(y<=n+r){let T=(y-n)/r;M=-h+T*t,w=e,A=0,b=u+T*d}else{let T=(y-n-r)/n,E=T*Math.PI/2;M=h+e*Math.sin(E),w=e*Math.cos(E),A=e*Math.sin(E),b=u+d+T*u}let v=Math.max(0,Math.min(1,b/f)),_=0;y===0?_=.5/s:y===g&&(_=-.5/s);for(let T=0;T<=s;T++){let E=T/s,I=E*Math.PI*2,O=Math.sin(I),z=Math.cos(I);m.x=-w*z,m.y=M,m.z=w*O,a.push(m.x,m.y,m.z),p.set(-w*z,A,w*O),p.normalize(),c.push(p.x,p.y,p.z),l.push(E+_,v)}if(y>0){let T=(y-1)*x;for(let E=0;E<s;E++){let I=T+E,O=T+E+1,z=y*x+E,P=y*x+E+1;o.push(I,O,z),o.push(O,P,z)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Bo=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tn=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],p=n/2,m=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new D,w=new D,A=0,v=(t-e)/n;for(let _=0;_<=r;_++){let T=[],E=_/r,I=E*(t-e)+e;for(let O=0;O<=s;O++){let z=O/s,P=z*c+a,N=Math.sin(P),U=Math.cos(P);w.x=I*N,w.y=-E*n+p,w.z=I*U,u.push(w.x,w.y,w.z),M.set(N,v,U).normalize(),d.push(M.x,M.y,M.z),f.push(z,1-E),T.push(g++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let E=x[T][_],I=x[T+1][_],O=x[T+1][_+1],z=x[T][_+1];(e>0||T!==0)&&(h.push(E,I,z),A+=3),(t>0||T!==r-1)&&(h.push(I,O,z),A+=3)}l.addGroup(m,A,0),m+=A}function b(M){let w=g,A=new ce,v=new D,_=0,T=M===!0?e:t,E=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*E,0),d.push(0,E,0),f.push(.5,.5),g++;let I=g;for(let O=0;O<=s;O++){let P=O/s*c+a,N=Math.cos(P),U=Math.sin(P);v.x=T*U,v.y=p*E,v.z=T*N,u.push(v.x,v.y,v.z),d.push(0,E,0),A.x=N*.5+.5,A.y=U*.5*E+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let z=w+O,P=I+O;M===!0?h.push(P,P+1,z):h.push(P+1,P,z),_+=3}l.addGroup(m,_,M===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},di=class i extends Tn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kl=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new D,M=new D,w=new D;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],M),f(t[A+2],w),c(b,M,w,y)}function c(y,b,M,w){let A=w+1,v=[];for(let _=0;_<=A;_++){v[_]=[];let T=y.clone().lerp(M,_/A),E=b.clone().lerp(M,_/A),I=A-_;for(let O=0;O<=I;O++)O===0&&_===A?v[_][O]=T:v[_][O]=T.clone().lerp(E,O/I)}for(let _=0;_<A;_++)for(let T=0;T<2*(A-_)-1;T++){let E=Math.floor(T/2);T%2===0?(d(v[_][E+1]),d(v[_+1][E]),d(v[_][E])):(d(v[_][E+1]),d(v[_+1][E+1]),d(v[_+1][E]))}}function l(y){let b=new D;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new D;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=p(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(M,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],w=o[y+4],A=Math.max(b,M,w),v=Math.min(b,M,w);A>.9&&v<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let y=new D,b=new D,M=new D,w=new D,A=new ce,v=new ce,_=new ce;for(let T=0,E=0;T<r.length;T+=9,E+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),A.set(o[E+0],o[E+1]),v.set(o[E+2],o[E+3]),_.set(o[E+4],o[E+5]),w.copy(y).add(b).add(M).divideScalar(3);let I=p(w);x(A,E+0,y,I),x(v,E+2,b,I),x(_,E+4,M,I)}}function x(y,b,M,w){w<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var $n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Be("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,c=new Ve;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gr=class extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vl=class extends Gr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ip=new D,sp=new D,ru=new Gu,ou=new Gu,au=new Gu,Gl=class extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(sp.subVectors(s[0],s[1]).add(s[0]),l=sp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ip.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ip),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ru.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,p),ou.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,p),au.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ru.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ou.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),au.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ru.calc(c),ou.calc(c),au.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function rp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function sx(i,e){let t=1-i;return t*t*e}function rx(i,e){return 2*(1-i)*i*e}function ox(i,e){return i*i*e}function To(i,e,t,n){return sx(i,e)+rx(i,t)+ox(i,n)}function ax(i,e){let t=1-i;return t*t*t*e}function lx(i,e){let t=1-i;return 3*t*t*i*e}function cx(i,e){return 3*(1-i)*i*i*e}function hx(i,e){return i*i*i*e}function wo(i,e,t,n,s){return ax(i,e)+lx(i,t)+cx(i,n)+hx(i,s)}var zo=class extends $n{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,s.x,r.x,o.x,a.x),wo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hl=class extends $n{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wo(e,s.x,r.x,o.x,a.x),wo(e,s.y,r.y,o.y,a.y),wo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends $n{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wl=class extends $n{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vo=class extends $n{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(To(e,s.x,r.x,o.x),To(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xl=class extends $n{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(To(e,s.x,r.x,o.x),To(e,s.y,r.y,o.y),To(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Go=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(rp(a,c.x,l.x,h.x,u.x),rp(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},xu=Object.freeze({__proto__:null,ArcCurve:Vl,CatmullRomCurve3:Gl,CubicBezierCurve:zo,CubicBezierCurve3:Hl,EllipseCurve:Gr,LineCurve:ko,LineCurve3:Wl,QuadraticBezierCurve:Vo,QuadraticBezierCurve3:Xl,SplineCurve:Go}),ql=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xu[s.type]().fromJSON(s))}return this}},Ho=class extends ql{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Vo(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new zo(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Go(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Gr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Hr=class extends Ho{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ho().fromJSON(s))}return this}};function ux(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$p(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=gx(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Wo(r,o,t,a,c,l,0),o}function $p(i,e,t,n,s){let r;if(s===Ex(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=op(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=op(o/n|0,i[o],i[o+1],r);return r&&Wr(r,r.next)&&(qo(r),r=r.next),r}function $s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wr(t,t.next)||Vt(t.prev,t,t.next)===0)){if(qo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Mx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?dx(i,n,s,r):fx(i)){e.push(c.i,i.i,l.i),qo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=px($s(i),e),Wo(i,e,t,n,s,r,2)):o===2&&mx(i,e,t,n,s,r):Wo($s(i),e,t,n,s,r,1);break}}}function fx(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Mo(s,a,r,c,o,l,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),p=Math.max(h,u,d),m=_u(f,g,e,t,n),y=_u(x,p,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=m&&M&&M.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Mo(a,h,c,u,l,d,b.x,b.y)&&Vt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Mo(a,h,c,u,l,d,M.x,M.y)&&Vt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Mo(a,h,c,u,l,d,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Mo(a,h,c,u,l,d,M.x,M.y)&&Vt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function px(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Wr(n,s)&&Qp(n,t,t.next,s)&&Xo(n,s)&&Xo(s,n)&&(e.push(n.i,t.i,s.i),qo(t),qo(t.next),t=i=s),t=t.next}while(t!==i);return $s(t)}function mx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tx(o,a)){let c=em(o,a);o=$s(o,o.next),c=$s(c,c.next),Wo(o,e,t,n,s,r,0),Wo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=$p(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(bx(l))}s.sort(xx);for(let r=0;r<s.length;r++)t=_x(s[r],t);return t}function xx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _x(i,e){let t=vx(i,e);if(!t)return e;let n=em(t,i);return $s(n,n.next),$s(t,t.next)}function vx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Wr(i,t))return t;do{if(Wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&jp(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Xo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&yx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function yx(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Mx(i,e,t,n){let s=i;do s.z===0&&(s.z=_u(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sx(s)}function Sx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function _u(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function jp(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&jp(i,e,t,n,s,r,o,a)}function Tx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wx(i,e)&&(Xo(i,e)&&Xo(e,i)&&Ax(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Wr(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wr(i,e){return i.x===e.x&&i.y===e.y}function Qp(i,e,t,n){let s=vl(Vt(i,e,t)),r=vl(Vt(i,e,n)),o=vl(Vt(t,n,i)),a=vl(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&_l(i,t,e)||r===0&&_l(i,n,e)||o===0&&_l(t,i,n)||a===0&&_l(t,e,n))}function _l(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function vl(i){return i>0?1:i<0?-1:0}function wx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Xo(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Ax(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function em(i,e){let t=vu(i.i,i.x,i.y),n=vu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function op(i,e,t,n){let s=vu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ex(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var yu=class{static triangulate(e,t,n=2){return ux(e,t,n)}},ks=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ap(e),lp(n,e);let o=e.length;t.forEach(ap);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,lp(n,t[c]);let a=yu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ap(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Yo=class i extends Mt{constructor(e=new Hr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Cx,b,M=!1,w,A,v,_;if(m){b=m.getSpacedPoints(h),M=!0,d=!1;let R=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,R),A=new D,v=new D,_=new D}d||(p=0,f=0,g=0,x=0);let T=a.extractPoints(l),E=T.shape,I=T.holes;if(!ks.isClockWise(E)){E=E.reverse();for(let R=0,k=I.length;R<k;R++){let H=I[R];ks.isClockWise(H)&&(I[R]=H.reverse())}}function z(R){let H=10000000000000001e-36,J=R[0];for(let K=1;K<=R.length;K++){let ue=K%R.length,he=R[ue],me=he.x-J.x,de=he.y-J.y,G=me*me+de*de,Xe=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(J.x),Math.abs(J.y)),je=H*Xe*Xe;if(G<=je){R.splice(ue,1),K--;continue}J=he}}z(E),I.forEach(z);let P=I.length,N=E;for(let R=0;R<P;R++){let k=I[R];E=E.concat(k)}function U(R,k,H){return k||Qe("ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(k,H)}let B=E.length;function X(R,k,H){let J,K,ue,he=R.x-k.x,me=R.y-k.y,de=H.x-R.x,G=H.y-R.y,Xe=he*he+me*me,je=he*G-me*de;if(Math.abs(je)>Number.EPSILON){let F=Math.sqrt(Xe),S=Math.sqrt(de*de+G*G),Z=k.x-me/F,j=k.y+he/F,ie=H.x-G/S,xe=H.y+de/S,ve=((ie-Z)*G-(xe-j)*de)/(he*G-me*de);J=Z+he*ve-R.x,K=j+me*ve-R.y;let se=J*J+K*K;if(se<=2)return new ce(J,K);ue=Math.sqrt(se/2)}else{let F=!1;he>Number.EPSILON?de>Number.EPSILON&&(F=!0):he<-Number.EPSILON?de<-Number.EPSILON&&(F=!0):Math.sign(me)===Math.sign(G)&&(F=!0),F?(J=-me,K=he,ue=Math.sqrt(Xe)):(J=he,K=me,ue=Math.sqrt(Xe/2))}return new ce(J/ue,K/ue)}let L=[];for(let R=0,k=N.length,H=k-1,J=R+1;R<k;R++,H++,J++)H===k&&(H=0),J===k&&(J=0),L[R]=X(N[R],N[H],N[J]);let V=[],Y,$=L.concat();for(let R=0,k=P;R<k;R++){let H=I[R];Y=[];for(let J=0,K=H.length,ue=K-1,he=J+1;J<K;J++,ue++,he++)ue===K&&(ue=0),he===K&&(he=0),Y[J]=X(H[J],H[ue],H[he]);V.push(Y),$=$.concat(Y)}let le;if(p===0)le=ks.triangulateShape(N,I);else{let R=[],k=[];for(let H=0;H<p;H++){let J=H/p,K=f*Math.cos(J*Math.PI/2),ue=g*Math.sin(J*Math.PI/2)+x;for(let he=0,me=N.length;he<me;he++){let de=U(N[he],L[he],ue);De(de.x,de.y,-K),J===0&&R.push(de)}for(let he=0,me=P;he<me;he++){let de=I[he];Y=V[he];let G=[];for(let Xe=0,je=de.length;Xe<je;Xe++){let F=U(de[Xe],Y[Xe],ue);De(F.x,F.y,-K),J===0&&G.push(F)}J===0&&k.push(G)}}le=ks.triangulateShape(R,k)}let Se=le.length,Ee=g+x;for(let R=0;R<B;R++){let k=d?U(E[R],$[R],Ee):E[R];M?(v.copy(w.normals[0]).multiplyScalar(k.x),A.copy(w.binormals[0]).multiplyScalar(k.y),_.copy(b[0]).add(v).add(A),De(_.x,_.y,_.z)):De(k.x,k.y,0)}for(let R=1;R<=h;R++)for(let k=0;k<B;k++){let H=d?U(E[k],$[k],Ee):E[k];M?(v.copy(w.normals[R]).multiplyScalar(H.x),A.copy(w.binormals[R]).multiplyScalar(H.y),_.copy(b[R]).add(v).add(A),De(_.x,_.y,_.z)):De(H.x,H.y,u/h*R)}for(let R=p-1;R>=0;R--){let k=R/p,H=f*Math.cos(k*Math.PI/2),J=g*Math.sin(k*Math.PI/2)+x;for(let K=0,ue=N.length;K<ue;K++){let he=U(N[K],L[K],J);De(he.x,he.y,u+H)}for(let K=0,ue=I.length;K<ue;K++){let he=I[K];Y=V[K];for(let me=0,de=he.length;me<de;me++){let G=U(he[me],Y[me],J);M?De(G.x,G.y+b[h-1].y,b[h-1].x+H):De(G.x,G.y,u+H)}}}ne(),ge();function ne(){let R=s.length/3;if(d){let k=0,H=B*k;for(let J=0;J<Se;J++){let K=le[J];Fe(K[2]+H,K[1]+H,K[0]+H)}k=h+p*2,H=B*k;for(let J=0;J<Se;J++){let K=le[J];Fe(K[0]+H,K[1]+H,K[2]+H)}}else{for(let k=0;k<Se;k++){let H=le[k];Fe(H[2],H[1],H[0])}for(let k=0;k<Se;k++){let H=le[k];Fe(H[0]+B*h,H[1]+B*h,H[2]+B*h)}}n.addGroup(R,s.length/3-R,0)}function ge(){let R=s.length/3,k=0;fe(N,k),k+=N.length;for(let H=0,J=I.length;H<J;H++){let K=I[H];fe(K,k),k+=K.length}n.addGroup(R,s.length/3-R,1)}function fe(R,k){let H=R.length;for(;--H>=0;){let J=H,K=H-1;K<0&&(K=R.length-1);for(let ue=0,he=h+p*2;ue<he;ue++){let me=B*ue,de=B*(ue+1),G=k+J+me,Xe=k+K+me,je=k+K+de,F=k+J+de;He(G,Xe,je,F)}}}function De(R,k,H){c.push(R),c.push(k),c.push(H)}function Fe(R,k,H){ht(R),ht(k),ht(H);let J=s.length/3,K=y.generateTopUV(n,s,J-3,J-2,J-1);$e(K[0]),$e(K[1]),$e(K[2])}function He(R,k,H,J){ht(R),ht(k),ht(J),ht(k),ht(H),ht(J);let K=s.length/3,ue=y.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);$e(ue[0]),$e(ue[1]),$e(ue[3]),$e(ue[1]),$e(ue[2]),$e(ue[3])}function ht(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function $e(R){r.push(R.x),r.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xu[s.type]().fromJSON(s)),new i(n,e.options)}},Cx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(d,1-g),new ce(x,1-m)]:[new ce(a,1-c),new ce(h,1-u),new ce(f,1-g),new ce(p,1-m)]}};function Rx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var js=class i extends kl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Zo=class i extends Mt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,d=new ce,f=new D,g=new D,x=new D,p=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let b=n+y*h*s,M=Math.sin(b),w=Math.cos(b);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*w,o.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),a.push(d.x,d.y);let v=c[3*A+0]*M,_=c[3*A+1],T=c[3*A+0]*w;l.push(v,_,T)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let M=b+y*e.length,w=M,A=M+e.length,v=M+e.length+1,_=M+1;r.push(w,A,_),r.push(v,_,A)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var pi=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let y=m*d-o;for(let b=0;b<l;b++){let M=b*u-r;g.push(M,-y,0),x.push(0,0,1),p.push(b/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){let b=y+l*m,M=y+l*(m+1),w=y+1+l*(m+1),A=y+1+l*m;f.push(b,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var gn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,f=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){let y=[],b=m/n,M=o+b*a,w=e*Math.cos(M),A=Math.sqrt(e*e-w*w),v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let _=0;_<=t;_++){let T=_/t,E=s+T*r;u.x=-A*Math.cos(E),u.y=w,u.z=A*Math.sin(E),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(T+v,1-b),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let b=h[m][y+1],M=h[m][y],w=h[m+1][y],A=h[m+1][y+1];(m!==0||o>0)&&f.push(b,M,A),(m!==n-1||c<Math.PI)&&f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ii=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new D,f=new D,g=new D;for(let x=0;x<=n;x++){let p=o+x/n*a;for(let m=0;m<=s;m++){let y=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(y),f.y=(e+t*Math.cos(p))*Math.sin(y),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let m=(s+1)*x+p-1,y=(s+1)*(x-1)+p-1,b=(s+1)*(x-1)+p,M=(s+1)*x+p;c.push(m,y,M),c.push(y,b,M)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(cp(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Rn(i){let e={};for(let t=0;t<i.length;t++){let n=ar(i[t]);for(let s in n)e[s]=n[s]}return e}function cp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Px(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var hn={clone:ar,merge:Rn},Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xr=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},nt=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vn=class extends nt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ko=class extends Ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Yl=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Nx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fu,endingEnd:fu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case du:r=e,a=2*t-n;break;case pu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case du:o=e,c=2*n-t;break;case pu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,y=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*x+.5*g,M=f*p-f*x;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+y*o[l+w]+b*o[c+w]+M*o[u+w];return r}},Jl=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},$l=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jl=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*x+o[c+p]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],p=o[c+g],m=f*d+g*2,y=u[m],b=u[m+1],M=e*d+g*2,w=h[M],A=h[M+1],v=(n-t)/(s-t),_,T,E,I,O;for(let z=0;z<8;z++){_=v*v,T=_*v,E=1-v,I=E*E,O=I*E;let N=O*t+3*I*v*y+3*E*_*w+T*s-n;if(Math.abs(N)<1e-10)break;let U=3*I*(y-t)+6*E*v*(w-y)+3*_*(s-w);if(Math.abs(U)<1e-10)break;v=v-N/U,v=Math.max(0,Math.min(1,v))}r[g]=O*x+3*I*v*b+3*E*_*A+T*p}return r}},Gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yl(t,this.TimeBufferType),this.values=yl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yl(e.times,Array),values:yl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break;case uu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Qe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&xg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=Xs;var Qi=class extends Gn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ws;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Jo.prototype.ValueTypeName="color";var es=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};es.prototype.ValueTypeName="number";var Ql=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)ln.slerpFlat(r,0,o,l-a,o,l,c);return r}},ts=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends Gn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Ws;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends Gn{constructor(e,t,n,s){super(e,t,n,s)}};Ss.prototype.ValueTypeName="vector";var $o=class{constructor(e="",t=-1,n=[],s=Op){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Fx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Dx(c);c=hp(c,1,h),l=hp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new es(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ux(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return Jo;case"quaternion":return ts;case"bool":case"boolean":return Qi;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ux(i.type);if(i.times===void 0){let t=[],n=[];Nx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(up(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!up(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function up(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ec=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new ec,mi=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},Mu=class extends Error{constructor(e,t){super(e),this.response=t}},Qs=class extends mi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:s});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ki[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,p=new ReadableStream({start(m){y();function y(){u.read().then(({done:b,value:M})=>{if(b)m.close();else{x+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,v=h.length;A<v;A++){let _=h[A];_.onProgress&&_.onProgress(w)}m.enqueue(M),y()}},b=>{m.error(b)})}}});return new Response(p)}else throw new Mu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ai.add(`file:${e}`,l);let h=Ki[e];delete Ki[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ki[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ki[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=new WeakMap,tc=class extends mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Cr.get(o);u===void 0&&(u=[],Cr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Nr("img");function c(){h(),t&&t(this);let u=Cr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Cr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ai.remove(`image:${e}`);let d=Cr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Cr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var jo=class extends mi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new mn,a=new Qs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Qe(h);return}r._applyTexData(o,l),t&&t(o,l)},n,s),o}createDataTexture(e){let t=new mn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:zn,e.wrapT=t.wrapT!==void 0?t.wrapT:zn,e.magFilter=t.magFilter!==void 0?t.magFilter:vt,e.minFilter=t.minFilter!==void 0?t.minFilter:vt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=An),t.mipmapCount===1&&(e.minFilter=vt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},er=class extends mi{constructor(e){super(e)}load(e,t,n,s){let r=new nn,o=new tc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},tr=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nr=class extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lu=new Ve,fp=new D,dp=new D,Qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vs,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dp),t.updateMatrixWorld(),lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Dr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=new D,Sl=new ln,wi=new D,ea=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ml,Sl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ml,Sl,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new D,pp=new ce,mp=new ce,Ot=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,pp,mp),t.subVectors(mp,pp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(So*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Su=class extends Qo{constructor(){super(new Ot(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ta=class extends tr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},bu=class extends Qo{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},jn=class extends tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Di=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tu=class extends Qo{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var cu=new WeakMap,na=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{cu.has(o)===!0?(s&&s(cu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ai.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),cu.set(c,l),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=-90,Pr=1,nc=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Rr,Pr,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Rr,Pr,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Rr,Pr,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Rr,Pr,e,t);a.layers=this.layers,this.add(a);let c=new Ot(Rr,Pr,e,t);c.layers=this.layers,this.add(c);let l=new Ot(Rr,Pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ic=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ia=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ox.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ox(){this._document.hidden===!1&&this.reset()}var Wu="\\[\\]\\.:\\/",Bx=new RegExp("["+Wu+"]","g"),Xu="[^"+Wu+"]",zx="[^"+Wu.replace("\\.","")+"]",kx=/((?:WC+[\/:])*)/.source.replace("WC",Xu),Vx=/(WCOD+)?/.source.replace("WCOD",zx),Gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xu),Hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xu),Wx=new RegExp("^"+kx+Vx+Gx+Hx+"$"),Xx=["material","materials","bones","map"],wu=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bx,"")}static parseTrackName(e){let t=Wx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=wu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vS=new Float32Array(1);var gp=new Ve,sa=class{constructor(e,t,n=0,s=1/0){this.ray=new Ri(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,n=[]){return Au(e,this,n,t),n.sort(xp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,n,t);return n.sort(xp),n}};function xp(i,e){return i.distance-e.distance}function Au(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Au(r[o],e,t,!0)}}var $u=class $u{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};$u.prototype.isMatrix2=!0;var Eu=$u;function qu(i,e,t,n){let s=qx(n);switch(t){case Ou:return i*e;case fc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case ws:return i*e*2/s.components*s.byteLength;case pc:return i*e*2/s.components*s.byteLength;case Bu:return i*e*3/s.components*s.byteLength;case _n:return i*e*4/s.components*s.byteLength;case mc:return i*e*4/s.components*s.byteLength;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:case vc:return Math.max(i,16)*Math.max(e,8)/4;case gc:case _c:return Math.max(i,8)*Math.max(e,8)/2;case yc:case Mc:case bc:case Tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:case ya:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kc:case Vc:case Gc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hc:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case Xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(i){switch(i){case En:case Du:return{byteLength:1,components:1};case Kr:case Nu:case Ut:return{byteLength:2,components:1};case hc:case uc:return{byteLength:2,components:4};case xi:case cc:case Cn:return{byteLength:4,components:1};case Uu:case Fu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Tm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Zx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jx=`#ifdef USE_ALPHAHASH
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
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
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
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,m_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,g_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,__=`#define PI 3.141592653589793
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
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,E_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,V_=`#ifdef USE_ENVMAP
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
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
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
#endif`,Y_=`uniform sampler2D dfgLUT;
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
}`,Z_=`
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
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
#endif`,J_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,j_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,r1=`#if defined( USE_POINTS_UV )
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
#endif`,o1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
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
#endif`,f1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N1=`float getShadowMask() {
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
}`,U1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F1=`#ifdef USE_SKINNING
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
#endif`,O1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B1=`#ifdef USE_SKINNING
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
#endif`,z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,W1=`#ifdef USE_TRANSMISSION
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,K1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J1=`uniform sampler2D t2D;
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
}`,$1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,nv=`#if DEPTH_PACKING == 3200
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
}`,iv=`#define DISTANCE
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
}`,sv=`#define DISTANCE
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ov=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
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
}`,lv=`uniform vec3 diffuse;
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
}`,cv=`#include <common>
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
}`,hv=`uniform vec3 diffuse;
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
}`,uv=`#define LAMBERT
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
}`,fv=`#define LAMBERT
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
}`,dv=`#define MATCAP
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
}`,pv=`#define MATCAP
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
}`,mv=`#define NORMAL
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
}`,gv=`#define NORMAL
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
}`,xv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,vv=`#define STANDARD
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
}`,yv=`#define STANDARD
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
}`,Mv=`#define TOON
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
}`,Sv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Tv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Av=`uniform vec3 color;
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
}`,Ev=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Kx,alphahash_pars_fragment:Jx,alphamap_fragment:$x,alphamap_pars_fragment:jx,alphatest_fragment:Qx,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:f_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:x_,common:__,cube_uv_reflection_fragment:v_,defaultnormal_vertex:y_,displacementmap_pars_vertex:M_,displacementmap_vertex:S_,emissivemap_fragment:b_,emissivemap_pars_fragment:T_,colorspace_fragment:w_,colorspace_pars_fragment:A_,envmap_fragment:E_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:V_,envmap_vertex:I_,fog_vertex:L_,fog_pars_vertex:D_,fog_fragment:N_,fog_pars_fragment:U_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:k_,lights_toon_fragment:G_,lights_toon_pars_fragment:H_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:Z_,lights_fragment_maps:K_,lights_fragment_end:J_,lightprobes_pars_fragment:$_,logdepthbuf_fragment:j_,logdepthbuf_pars_fragment:Q_,logdepthbuf_pars_vertex:e1,logdepthbuf_vertex:t1,map_fragment:n1,map_pars_fragment:i1,map_particle_fragment:s1,map_particle_pars_fragment:r1,metalnessmap_fragment:o1,metalnessmap_pars_fragment:a1,morphinstance_vertex:l1,morphcolor_vertex:c1,morphnormal_vertex:h1,morphtarget_pars_vertex:u1,morphtarget_vertex:f1,normal_fragment_begin:d1,normal_fragment_maps:p1,normal_pars_fragment:m1,normal_pars_vertex:g1,normal_vertex:x1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:y1,clearcoat_pars_fragment:M1,iridescence_pars_fragment:S1,opaque_fragment:b1,packing:T1,premultiplied_alpha_fragment:w1,project_vertex:A1,dithering_fragment:E1,dithering_pars_fragment:C1,roughnessmap_fragment:R1,roughnessmap_pars_fragment:P1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:L1,shadowmap_vertex:D1,shadowmask_pars_fragment:N1,skinbase_vertex:U1,skinning_pars_vertex:F1,skinning_vertex:O1,skinnormal_vertex:B1,specularmap_fragment:z1,specularmap_pars_fragment:k1,tonemapping_fragment:V1,tonemapping_pars_fragment:G1,transmission_fragment:H1,transmission_pars_fragment:W1,uv_pars_fragment:X1,uv_pars_vertex:q1,uv_vertex:Y1,worldpos_vertex:Z1,background_vert:K1,background_frag:J1,backgroundCube_vert:$1,backgroundCube_frag:j1,cube_vert:Q1,cube_frag:ev,depth_vert:tv,depth_frag:nv,distance_vert:iv,distance_frag:sv,equirect_vert:rv,equirect_frag:ov,linedashed_vert:av,linedashed_frag:lv,meshbasic_vert:cv,meshbasic_frag:hv,meshlambert_vert:uv,meshlambert_frag:fv,meshmatcap_vert:dv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:xv,meshphong_frag:_v,meshphysical_vert:vv,meshphysical_frag:yv,meshtoon_vert:Mv,meshtoon_frag:Sv,points_vert:bv,points_frag:Tv,shadow_vert:wv,shadow_frag:Av,sprite_vert:Ev,sprite_frag:Cv},we={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Fi={basic:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Rn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Rn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Rn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Rn([we.points,we.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Rn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Rn([we.common,we.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Rn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Rn([we.sprite,we.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Rn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Rn([we.lights,we.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Fi.physical={uniforms:Rn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Zc={r:0,b:0,g:0},Rv=new Ve,wm=new st;wm.set(-1,0,0,0,1,0,0,0,1);function Pv(i,e,t,n,s,r){let o=new Ie(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1,M=f(y);M===null?p(o,a):M&&M.isColor&&(p(M,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===ma)?(l===void 0&&(l=new Le(new Wt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:ar(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wm),l.material.toneMapped=ot.getTransfer(M.colorSpace)!==xt,(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Le(new pi(2,2),new yt({name:"BackgroundMaterial",uniforms:ar(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,b){y.getRGB(Zc,Hu(i)),t.buffers.color.setClear(Zc.r,Zc.g,Zc.b,b,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:g,addToRenderList:x,dispose:m}}function Iv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,O,z,P,N){let U=!1,B=u(I,P,z,O);r!==B&&(r=B,l(r.object)),U=f(I,P,z,N),U&&g(I,P,z,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,M(I,O,z,P),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,O,z,P){let N=P.wireframe===!0,U=n[O.id];U===void 0&&(U={},n[O.id]=U);let B=I.isInstancedMesh===!0?I.id:0,X=U[B];X===void 0&&(X={},U[B]=X);let L=X[z.id];L===void 0&&(L={},X[z.id]=L);let V=L[N];return V===void 0&&(V=d(c()),L[N]=V),V}function d(I){let O=[],z=[],P=[];for(let N=0;N<t;N++)O[N]=0,z[N]=0,P[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:P,object:I,attributes:{},index:null}}function f(I,O,z,P){let N=r.attributes,U=O.attributes,B=0,X=z.getAttributes();for(let L in X)if(X[L].location>=0){let Y=N[L],$=U[L];if($===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),Y===void 0||Y.attribute!==$||$&&Y.data!==$.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function g(I,O,z,P){let N={},U=O.attributes,B=0,X=z.getAttributes();for(let L in X)if(X[L].location>=0){let Y=U[L];Y===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let $={};$.attribute=Y,Y&&Y.data&&($.data=Y.data),N[L]=$,B++}r.attributes=N,r.attributesNum=B,r.index=P}function x(){let I=r.newAttributes;for(let O=0,z=I.length;O<z;O++)I[O]=0}function p(I){m(I,0)}function m(I,O){let z=r.newAttributes,P=r.enabledAttributes,N=r.attributeDivisors;z[I]=1,P[I]===0&&(i.enableVertexAttribArray(I),P[I]=1),N[I]!==O&&(i.vertexAttribDivisor(I,O),N[I]=O)}function y(){let I=r.newAttributes,O=r.enabledAttributes;for(let z=0,P=O.length;z<P;z++)O[z]!==I[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function b(I,O,z,P,N,U,B){B===!0?i.vertexAttribIPointer(I,O,z,N,U):i.vertexAttribPointer(I,O,z,P,N,U)}function M(I,O,z,P){x();let N=P.attributes,U=z.getAttributes(),B=O.defaultAttributeValues;for(let X in U){let L=U[X];if(L.location>=0){let V=N[X];if(V===void 0&&(X==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),X==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let Y=V.normalized,$=V.itemSize,le=e.get(V);if(le===void 0)continue;let Se=le.buffer,Ee=le.type,ne=le.bytesPerElement,ge=Ee===i.INT||Ee===i.UNSIGNED_INT||V.gpuType===cc;if(V.isInterleavedBufferAttribute){let fe=V.data,De=fe.stride,Fe=V.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)m(L.location+He,fe.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<L.locationSize;He++)p(L.location+He);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let He=0;He<L.locationSize;He++)b(L.location+He,$/L.locationSize,Ee,Y,De*ne,(Fe+$/L.locationSize*He)*ne,ge)}else{if(V.isInstancedBufferAttribute){for(let fe=0;fe<L.locationSize;fe++)m(L.location+fe,V.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let fe=0;fe<L.locationSize;fe++)p(L.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let fe=0;fe<L.locationSize;fe++)b(L.location+fe,$/L.locationSize,Ee,Y,$*ne,$/L.locationSize*fe*ne,ge)}}else if(B!==void 0){let Y=B[X];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(L.location,Y);break;case 3:i.vertexAttrib3fv(L.location,Y);break;case 4:i.vertexAttrib4fv(L.location,Y);break;default:i.vertexAttrib1fv(L.location,Y)}}}}y()}function w(){T();for(let I in n){let O=n[I];for(let z in O){let P=O[z];for(let N in P){let U=P[N];for(let B in U)h(U[B].object),delete U[B];delete P[N]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;let O=n[I.id];for(let z in O){let P=O[z];for(let N in P){let U=P[N];for(let B in U)h(U[B].object),delete U[B];delete P[N]}}delete n[I.id]}function v(I){for(let O in n){let z=n[O];for(let P in z){let N=z[P];if(N[I.id]===void 0)continue;let U=N[I.id];for(let B in U)h(U[B].object),delete U[B];delete N[I.id]}}}function _(I){for(let O in n){let z=n[O],P=I.isInstancedMesh===!0?I.id:0,N=z[P];if(N!==void 0){for(let U in N){let B=N[U];for(let X in B)h(B[X].object),delete B[X];delete N[U]}delete z[P],Object.keys(z).length===0&&delete n[O]}}}function T(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function Lv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Dv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==_n&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let _=v===Ut&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==En&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Cn&&!_)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Be("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:w,samples:A}}function Nv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ni,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let y=r?0:n,b=y*4,M=m.clippingState||null;c.value=M,M=h(g,d,b,f);for(let w=0;w!==b;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,M=f;b!==x;++b,M+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var As=4,nm=[.125,.215,.35,.446,.526,.582],lr=20,Uv=256,Ta=new Di,im=new Ie,ju=null,Qu=0,ef=0,tf=!1,Fv=new D,Jc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Fv}=r;ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ju,Qu,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ju=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:Ut,format:_n,colorSpace:pn,depthBuffer:!1},s=sm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ov(r)),this._blurMaterial=zv(r,e,t),this._ggxMaterial=Bv(r,e,t)}return s}_compileMaterial(e){let t=new Le(new Mt,e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,s,r){let c=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(im),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Wt,new jt({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,m=!0):(p.color.copy(im),m=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;$r(s,M*w,b>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===bs||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;$r(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-As?n-g+As:0),m=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,$r(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,Ta),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,$r(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(a,Ta)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*lr-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):lr;p>lr&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${lr}`);let m=[],y=0;for(let v=0;v<lr;++v){let _=v/x,T=Math.exp(-_*_/2);m.push(T),v===0?y+=T:v<p&&(y+=2*T)}for(let v=0;v<m.length;v++)m[v]=m[v]/y;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let M=this._sizeLods[s],w=3*M*(s>b-As?s-b+As:0),A=4*(this._cubeSize-M);$r(t,w,A,3*M,2*M),c.setRenderTarget(t),c.render(u,Ta)}};function Ov(i){let e=[],t=[],n=[],s=i,r=i-As+1+nm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-As?c=nm[o-i+As-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*f),b=new Float32Array(p*g*f),M=new Float32Array(m*g*f);for(let A=0;A<f;A++){let v=A%3*2/3-1,_=A>2?0:-1,T=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];y.set(T,x*g*A),b.set(d,p*g*A);let E=[A,A,A,A,A,A];M.set(E,m*g*A)}let w=new Mt;w.setAttribute("position",new Ct(y,x)),w.setAttribute("uv",new Ct(b,p)),w.setAttribute("faceIndex",new Ct(M,m)),n.push(new Le(w,null)),s>As&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function sm(i,e,t){let n=new zt(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bv(i,e,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Uv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function zv(i,e,t){let n=new Float32Array(lr),s=new D(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function rm(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function om(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}var $c=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Uo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Yt});r.uniforms.tEquirect.value=t;let o=new Le(s,r),a=t.minFilter;return t.minFilter===An&&(t.minFilter=vt),new nc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function kv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Yr||f===ac)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new $c(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Yr||f===ac,x=f===bs||f===rr;if(g||x){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Jc(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new Jc(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Yr?d.mapping=bs:f===ac&&(d.mapping=rr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Vv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Vs("WebGLRenderer: "+n+" extension not supported."),s}}}function Gv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let b=0,M=y.length;b<M;b+=3){let w=y[b+0],A=y[b+1],v=y[b+2];d.push(w,A,A,v,v,w)}}else{let y=g.array;x=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let w=b+0,A=b+1,v=b+2;d.push(w,A,A,v,v,w)}}let p=new(g.count>=65535?Io:Po)(d,1);p.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Hv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Wv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Xv(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*w*4*u),v=new Co(A,M,w,u);v.type=Cn,v.needsUpdate=!0;let _=b*4;for(let E=0;E<u;E++){let I=p[E],O=m[E],z=y[E],P=M*w*4*E;for(let N=0;N<I.count;N++){let U=N*_;f===!0&&(s.fromBufferAttribute(I,N),A[P+U+0]=s.x,A[P+U+1]=s.y,A[P+U+2]=s.z,A[P+U+3]=0),g===!0&&(s.fromBufferAttribute(O,N),A[P+U+4]=s.x,A[P+U+5]=s.y,A[P+U+6]=s.z,A[P+U+7]=0),x===!0&&(s.fromBufferAttribute(z,N),A[P+U+8]=s.x,A[P+U+9]=s.y,A[P+U+10]=s.z,A[P+U+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new ce(M,w)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qv(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Yv={[ca]:"LINEAR_TONE_MAPPING",[ha]:"REINHARD_TONE_MAPPING",[ua]:"CINEON_TONE_MAPPING",[sr]:"ACES_FILMIC_TONE_MAPPING",[da]:"AGX_TONE_MAPPING",[pa]:"NEUTRAL_TONE_MAPPING",[fa]:"CUSTOM_TONE_MAPPING"};function Zv(i,e,t,n,s,r){let o=new zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new fi(e,t):void 0}),a=new zt(e,t,{type:Ut,depthBuffer:!1,stencilBuffer:!1}),c=new Mt;c.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new Xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Le(c,l),u=new Di(-1,1,1,-1,0,1),d=null,f=null,g=!1,x,p=null,m=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a.setSize(b,M);for(let w=0;w<m.length;w++){let A=m[w];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){m=b,y=m.length>0&&m[0].isRenderPass===!0;let M=o.width,w=o.height;for(let A=0;A<m.length;A++){let v=m[A];v.setSize&&v.setSize(M,w)}},this.begin=function(b,M){if(g||b.toneMapping===gi&&m.length===0)return!1;if(p=M,M!==null){let w=M.width,A=M.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return y===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=x,g=!0;let w=o,A=a;for(let v=0;v<m.length;v++){let _=m[v];if(_.enabled!==!1&&(_.render(b,A,w,M),_.needsSwap!==!1)){let T=w;w=A,A=T}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},ot.getTransfer(d)===xt&&(l.defines.SRGB_TRANSFER="");let v=Yv[f];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Am=new nn,rf=new fi(1,1),Em=new Co,Cm=new Fl,Rm=new Uo,am=[],lm=[],cm=new Float32Array(16),hm=new Float32Array(9),um=new Float32Array(4);function eo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=am[s];if(r===void 0&&(r=new Float32Array(s),am[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qc(i,e){let t=lm[e];t===void 0&&(t=new Int32Array(e),lm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Qv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;um.set(n),i.uniformMatrix2fv(this.addr,!1,um),rn(t,n)}}function ey(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;hm.set(n),i.uniformMatrix3fv(this.addr,!1,hm),rn(t,n)}}function ty(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;cm.set(n),i.uniformMatrix4fv(this.addr,!1,cm),rn(t,n)}}function ny(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function ry(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function oy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ay(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function ly(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function hy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rf.compareFunction=t.isReversedDepthBuffer()?Yc:qc,r=rf):r=Am,t.setTexture2D(e||r,s)}function uy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cm,s)}function fy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Rm,s)}function dy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Em,s)}function py(i){switch(i){case 5126:return Kv;case 35664:return Jv;case 35665:return $v;case 35666:return jv;case 35674:return Qv;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return sy;case 35669:case 35673:return ry;case 5125:return oy;case 36294:return ay;case 36295:return ly;case 36296:return cy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return dy}}function my(i,e){i.uniform1fv(this.addr,e)}function gy(i,e){let t=eo(e,this.size,2);i.uniform2fv(this.addr,t)}function xy(i,e){let t=eo(e,this.size,3);i.uniform3fv(this.addr,t)}function _y(i,e){let t=eo(e,this.size,4);i.uniform4fv(this.addr,t)}function vy(i,e){let t=eo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yy(i,e){let t=eo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function My(i,e){let t=eo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sy(i,e){i.uniform1iv(this.addr,e)}function by(i,e){i.uniform2iv(this.addr,e)}function Ty(i,e){i.uniform3iv(this.addr,e)}function wy(i,e){i.uniform4iv(this.addr,e)}function Ay(i,e){i.uniform1uiv(this.addr,e)}function Ey(i,e){i.uniform2uiv(this.addr,e)}function Cy(i,e){i.uniform3uiv(this.addr,e)}function Ry(i,e){i.uniform4uiv(this.addr,e)}function Py(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=rf:o=Am;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Iy(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cm,r[o])}function Ly(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rm,r[o])}function Dy(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Em,r[o])}function Ny(i){switch(i){case 5126:return my;case 35664:return gy;case 35665:return xy;case 35666:return _y;case 35674:return vy;case 35675:return yy;case 35676:return My;case 5124:case 35670:return Sy;case 35667:case 35671:return by;case 35668:case 35672:return Ty;case 35669:case 35673:return wy;case 5125:return Ay;case 36294:return Ey;case 36295:return Cy;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Dy}}var of=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=py(t.type)}},af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ny(t.type)}},lf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nf=/(\w+)(\])?(\[|\.)?/g;function fm(i,e){i.seq.push(e),i.map[e.id]=e}function Uy(i,e,t){let n=i.name,s=n.length;for(nf.lastIndex=0;;){let r=nf.exec(n),o=nf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){fm(t,l===void 0?new of(a,i,e):new af(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new lf(a),fm(t,u)),t=u}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Uy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function dm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Fy=37297,Oy=0;function By(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var pm=new st;function zy(i){ot._getMatrix(pm,ot.workingColorSpace,i);let e=`mat3( ${pm.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Ao:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+By(i.getShaderSource(e),a)}else return r}function ky(i,e){let t=zy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Vy={[ca]:"Linear",[ha]:"Reinhard",[ua]:"Cineon",[sr]:"ACESFilmic",[da]:"AgX",[pa]:"Neutral",[fa]:"Custom"};function Gy(i,e){let t=Vy[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Kc=new D;function Hy(){ot.getLuminanceCoefficients(Kc);let i=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function Xy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Aa(i){return i!==""}function gm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(i){return i.replace(Yy,Ky)}var Zy=new Map;function Ky(i,e){let t=ct[e];if(t===void 0){let n=Zy.get(e);if(n!==void 0)t=ct[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}var Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(i){return i.replace(Jy,$y)}function $y(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var jy={[ra]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function Qy(i){return jy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eM={[bs]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function tM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":eM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var nM={[rr]:"ENVMAP_MODE_REFRACTION"};function iM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sM={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function rM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sM[i.combine]||"ENVMAP_BLENDING_NONE"}function oM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Qy(t),l=tM(t),h=iM(t),u=rM(t),d=oM(t),f=Wy(t),g=Xy(r),x=s.createProgram(),p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`)):(p=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),m=[vm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?ct.tonemapping_pars_fragment:"",t.toneMapping!==gi?Gy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,ky("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),o=cf(o),o=gm(o,t),o=xm(o,t),a=cf(a),a=gm(a,t),a=xm(a,t),o=_m(o),a=_m(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=y+p+o,M=y+m+a,w=dm(s,s.VERTEX_SHADER,b),A=dm(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(I){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(w)||"",P=s.getShaderInfoLog(A)||"",N=O.trim(),U=z.trim(),B=P.trim(),X=!0,L=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{let V=mm(s,w,"vertex"),Y=mm(s,A,"fragment");Qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+V+`
`+Y)}else N!==""?Be("WebGLProgram: Program Info Log:",N):(U===""||B==="")&&(L=!1);L&&(I.diagnostics={runnable:X,programLog:N,vertexShader:{log:U,prefix:p},fragmentShader:{log:B,prefix:m}})}s.deleteShader(w),s.deleteShader(A),_=new jr(s,x),T=qy(s,x)}let _;this.getUniforms=function(){return _===void 0&&v(this),_};let T;this.getAttributes=function(){return T===void 0&&v(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Fy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Oy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}var lM=0,hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uf(e),t.set(e,n)),n}},uf=class{constructor(e){this.id=lM++,this.code=e,this.usedTimes=0}};function cM(i){return i===ws||i===ya||i===Ma}function hM(i,e,t,n,s,r){let o=new Or,a=new hf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,E,I,O,z){let P=I.fog,N=O.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||U,B),L=X&&X.mapping===ma?X.image.height:null,V=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Y=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=Y!==void 0?Y.length:0,le=0;N.morphAttributes.position!==void 0&&(le=1),N.morphAttributes.normal!==void 0&&(le=2),N.morphAttributes.color!==void 0&&(le=3);let Se,Ee,ne,ge;if(V){let Oe=Fi[V];Se=Oe.vertexShader,Ee=Oe.fragmentShader}else{Se=_.vertexShader,Ee=_.fragmentShader;let Oe=a.getVertexShaderStage(_),Gt=a.getFragmentShaderStage(_);a.update(_,Oe,Gt),ne=Oe.id,ge=Gt.id}let fe=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,ht=!!_.map,$e=!!_.matcap,R=!!X,k=!!_.aoMap,H=!!_.lightMap,J=!!_.bumpMap&&_.wireframe===!1,K=!!_.normalMap,ue=!!_.displacementMap,he=!!_.emissiveMap,me=!!_.metalnessMap,de=!!_.roughnessMap,G=_.anisotropy>0,Xe=_.clearcoat>0,je=_.dispersion>0,F=_.iridescence>0,S=_.sheen>0,Z=_.transmission>0,j=G&&!!_.anisotropyMap,ie=Xe&&!!_.clearcoatMap,xe=Xe&&!!_.clearcoatNormalMap,ve=Xe&&!!_.clearcoatRoughnessMap,se=F&&!!_.iridescenceMap,oe=F&&!!_.iridescenceThicknessMap,be=S&&!!_.sheenColorMap,We=S&&!!_.sheenRoughnessMap,Me=!!_.specularMap,ye=!!_.specularColorMap,ze=!!_.specularIntensityMap,Ke=Z&&!!_.transmissionMap,tt=Z&&!!_.thicknessMap,W=!!_.gradientMap,Te=!!_.alphaMap,ae=_.alphaTest>0,Ae=!!_.alphaHash,Pe=!!_.extensions,pe=gi;_.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(pe=i.toneMapping);let qe={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:Ee,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:He,batchingColor:He&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:$e,envMap:R,envMapMode:R&&X.mapping,envMapCubeUVHeight:L,aoMap:k,lightMap:H,bumpMap:J,normalMap:K,displacementMap:ue,emissiveMap:he,normalMapObjectSpace:K&&_.normalMapType===zp,normalMapTangentSpace:K&&_.normalMapType===ba,packedNormalMap:K&&_.normalMapType===ba&&cM(_.normalMap.format),metalnessMap:me,roughnessMap:de,anisotropy:G,anisotropyMap:j,clearcoat:Xe,clearcoatMap:ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:ve,dispersion:je,iridescence:F,iridescenceMap:se,iridescenceThicknessMap:oe,sheen:S,sheenColorMap:be,sheenRoughnessMap:We,specularMap:Me,specularColorMap:ye,specularIntensityMap:ze,transmission:Z,transmissionMap:Ke,thicknessMap:tt,gradientMap:W,opaque:_.transparent===!1&&_.blending===Gs&&_.alphaToCoverage===!1,alphaMap:Te,alphaTest:ae,alphaHash:Ae,combine:_.combine,mapUv:ht&&g(_.map.channel),aoMapUv:k&&g(_.aoMap.channel),lightMapUv:H&&g(_.lightMap.channel),bumpMapUv:J&&g(_.bumpMap.channel),normalMapUv:K&&g(_.normalMap.channel),displacementMapUv:ue&&g(_.displacementMap.channel),emissiveMapUv:he&&g(_.emissiveMap.channel),metalnessMapUv:me&&g(_.metalnessMap.channel),roughnessMapUv:de&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:We&&g(_.sheenRoughnessMap.channel),specularMapUv:Me&&g(_.specularMap.channel),specularColorMapUv:ye&&g(_.specularColorMap.channel),specularIntensityMapUv:ze&&g(_.specularIntensityMap.channel),transmissionMapUv:Ke&&g(_.transmissionMap.channel),thicknessMapUv:tt&&g(_.thicknessMap.channel),alphaMapUv:Te&&g(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(K||G),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(ht||Te),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&K===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:De,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===wn,flipSided:_.side===xn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function p(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let E in _.defines)T.push(E),T.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(m(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let T=f[_.type],E;if(T){let I=Fi[T];E=hn.clone(I.uniforms)}else E=_.uniforms;return E}function M(_,T){let E=h.get(T);return E!==void 0?++E.usedTimes:(E=new aM(i,T,_,s),l.push(E),h.set(T,E)),E}function w(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function v(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:b,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:v}}function uM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function fM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,p,m){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=p,y.group=m),e++,y}function c(d,f,g,x,p,m){let y=a(d,f,g,x,p,m);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,x,p,m){let y=a(d,f,g,x,p,m);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f,g){t.length>1&&t.sort(d||fM),n.length>1&&n.sort(f||ym),s.length>1&&s.sort(f||ym),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function dM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Mm,i.set(n,[o])):s>=r.length?(o=new Mm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function pM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function mM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var gM=0;function xM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _M(i){let e=new pM,t=mM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ve,o=new Ve;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,y=0,b=0,M=0,w=0,A=0,v=0;l.sort(xM);for(let T=0,E=l.length;T<E;T++){let I=l[T],O=I.color,z=I.intensity,P=I.distance,N=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ws?N=I.shadow.map.texture:N=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*z,u+=O.g*z,d+=O.b*z;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],z);v++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let B=I.shadow,X=t.get(I);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=I.shadow.matrix,y++}n.directional[f]=U,f++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(O).multiplyScalar(z),U.distance=P,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[x]=U;let B=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,B.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[x]=B.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=N,M++}x++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(O).multiplyScalar(z),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=U,p++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let B=I.shadow,X=t.get(I);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=U,g++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(z),U.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=U,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==p||_.hemiLength!==m||_.numDirectionalShadows!==y||_.numPointShadows!==b||_.numSpotShadows!==M||_.numSpotMaps!==w||_.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=v,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=p,_.hemiLength=m,_.numDirectionalShadows=y,_.numPointShadows=b,_.numSpotShadows=M,_.numSpotMaps=w,_.numLightProbes=v,n.version=gM++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){let b=l[m];if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Sm(i){let e=new _M(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function vM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sm(i),e.set(s,[a])):r>=o.length?(a=new Sm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var yM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MM=`uniform sampler2D shadow_pass;
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
}`,SM=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],bM=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],bm=new Ve,wa=new D,sf=new D;function TM(i,e,t){let n=new vs,s=new ce,r=new ce,o=new _t,a=new Yl,c=new Zl,l={},h=t.maxTextureSize,u={[Kn]:xn,[xn]:Kn,[wn]:wn},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:yM,fragmentShader:MM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Le(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let m=this.type;this.render=function(A,v,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===rc&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ra);let T=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Yt),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=m!==this.type;z&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(N=>N.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,N=A.length;P<N;P++){let U=A[P],B=U.shadow;if(B===void 0){Be("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let X=B.getFrameExtents();s.multiply(X),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,B.mapSize.y=r.y));let L=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=L,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===qr){if(U.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new zt(s.x,s.y,{format:ws,type:Ut,minFilter:vt,magFilter:vt,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new fi(s.x,s.y,Cn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ei,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt}else U.isPointLight?(B.map=new $c(s.x),B.map.depthTexture=new zl(s.x,xi)):(B.map=new zt(s.x,s.y),B.map.depthTexture=new fi(s.x,s.y,xi)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ei,this.type===ra?(B.map.depthTexture.compareFunction=L?Yc:qc,B.map.depthTexture.minFilter=vt,B.map.depthTexture.magFilter=vt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt);B.camera.updateProjectionMatrix()}let V=B.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<V;Y++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(B.map),i.clear());let $=B.getViewport(Y);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),O.viewport(o)}if(U.isPointLight){let $=B.camera,le=B.matrix,Se=U.distance||$.far;Se!==$.far&&($.far=Se,$.updateProjectionMatrix()),wa.setFromMatrixPosition(U.matrixWorld),$.position.copy(wa),sf.copy($.position),sf.add(SM[Y]),$.up.copy(bM[Y]),$.lookAt(sf),$.updateMatrixWorld(),le.makeTranslation(-wa.x,-wa.y,-wa.z),bm.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bm,$.coordinateSystem,$.reversedDepth)}else B.updateMatrices(U);n=B.getFrustum(),M(v,_,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===qr&&y(B,_),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,E,I)};function y(A,v){let _=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zt(s.x,s.y,{format:ws,type:Ut})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(v,null,_,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(v,null,_,f,x,null)}function b(A,v,_,T){let E=null,I=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=_.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let O=E.uuid,z=v.uuid,P=l[O];P===void 0&&(P={},l[O]=P);let N=P[z];N===void 0&&(N=E.clone(),P[z]=N,v.addEventListener("dispose",w)),E=N}if(E.visible=v.visible,E.wireframe=v.wireframe,T===qr?E.side=v.shadowSide!==null?v.shadowSide:v.side:E.side=v.shadowSide!==null?v.shadowSide:u[v.side],E.alphaMap=v.alphaMap,E.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,E.map=v.map,E.clipShadows=v.clipShadows,E.clippingPlanes=v.clippingPlanes,E.clipIntersection=v.clipIntersection,E.displacementMap=v.displacementMap,E.displacementScale=v.displacementScale,E.displacementBias=v.displacementBias,E.wireframeLinewidth=v.wireframeLinewidth,E.linewidth=v.linewidth,_.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=_}return E}function M(A,v,_,T,E){if(A.visible===!1)return;if(A.layers.test(v.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===qr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let z=e.update(A),P=A.material;if(Array.isArray(P)){let N=z.groups;for(let U=0,B=N.length;U<B;U++){let X=N[U],L=P[X.materialIndex];if(L&&L.visible){let V=b(A,L,T,E);A.onBeforeShadow(i,A,v,_,z,V,X),i.renderBufferDirect(_,null,z,V,A,X),A.onAfterShadow(i,A,v,_,z,V,X)}}}else if(P.visible){let N=b(A,P,T,E);A.onBeforeShadow(i,A,v,_,z,N,null),i.renderBufferDirect(_,null,z,N,A,null),A.onAfterShadow(i,A,v,_,z,N,null)}}let O=A.children;for(let z=0,P=O.length;z<P;z++)M(O[z],v,_,T,E)}function w(A){A.target.removeEventListener("dispose",w);for(let _ in l){let T=l[_],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function wM(i,e){function t(){let W=!1,Te=new _t,ae=null,Ae=new _t(0,0,0,0);return{setMask:function(Pe){ae!==Pe&&!W&&(i.colorMask(Pe,Pe,Pe,Pe),ae=Pe)},setLocked:function(Pe){W=Pe},setClear:function(Pe,pe,qe,Oe,Gt){Gt===!0&&(Pe*=Oe,pe*=Oe,qe*=Oe),Te.set(Pe,pe,qe,Oe),Ae.equals(Te)===!1&&(i.clearColor(Pe,pe,qe,Oe),Ae.copy(Te))},reset:function(){W=!1,ae=null,Ae.set(-1,0,0,0)}}}function n(){let W=!1,Te=!1,ae=null,Ae=null,Pe=null;return{setReversed:function(pe){if(Te!==pe){let qe=e.get("EXT_clip_control");pe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Te=pe;let Oe=Pe;Pe=null,this.setClear(Oe)}},getReversed:function(){return Te},setTest:function(pe){pe?fe(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(pe){ae!==pe&&!W&&(i.depthMask(pe),ae=pe)},setFunc:function(pe){if(Te&&(pe=Kp[pe]),Ae!==pe){switch(pe){case Al:i.depthFunc(i.NEVER);break;case El:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Rl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=pe}},setLocked:function(pe){W=pe},setClear:function(pe){Pe!==pe&&(Pe=pe,Te&&(pe=1-pe),i.clearDepth(pe))},reset:function(){W=!1,ae=null,Ae=null,Pe=null,Te=!1}}}function s(){let W=!1,Te=null,ae=null,Ae=null,Pe=null,pe=null,qe=null,Oe=null,Gt=null;return{setTest:function(Pt){W||(Pt?fe(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(Pt){Te!==Pt&&!W&&(i.stencilMask(Pt),Te=Pt)},setFunc:function(Pt,Si,bi){(ae!==Pt||Ae!==Si||Pe!==bi)&&(i.stencilFunc(Pt,Si,bi),ae=Pt,Ae=Si,Pe=bi)},setOp:function(Pt,Si,bi){(pe!==Pt||qe!==Si||Oe!==bi)&&(i.stencilOp(Pt,Si,bi),pe=Pt,qe=Si,Oe=bi)},setLocked:function(Pt){W=Pt},setClear:function(Pt){Gt!==Pt&&(i.clearStencil(Pt),Gt=Pt)},reset:function(){W=!1,Te=null,ae=null,Ae=null,Pe=null,pe=null,qe=null,Oe=null,Gt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,b=null,M=null,w=null,A=null,v=null,_=new Ie(0,0,0),T=0,E=!1,I=null,O=null,z=null,P=null,N=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(L)[1]),B=X>=1):L.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),B=X>=2);let V=null,Y={},$=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Se=new _t().fromArray($),Ee=new _t().fromArray(le);function ne(W,Te,ae,Ae){let Pe=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<ae;qe++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(Te+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return pe}let ge={};ge[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(Hs),J(!1),K(Cu),fe(i.CULL_FACE),k(Yt);function fe(W){h[W]!==!0&&(i.enable(W),h[W]=!0)}function De(W){h[W]!==!1&&(i.disable(W),h[W]=!1)}function Fe(W,Te){return d[W]!==Te?(i.bindFramebuffer(W,Te),d[W]=Te,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Te),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function He(W,Te){let ae=g,Ae=!1;if(W){ae=f.get(Te),ae===void 0&&(ae=[],f.set(Te,ae));let Pe=W.textures;if(ae.length!==Pe.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,qe=Pe.length;pe<qe;pe++)ae[pe]=i.COLOR_ATTACHMENT0+pe;ae.length=Pe.length,Ae=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ae)}function ht(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let $e={[Jn]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[Mp]:i.FUNC_REVERSE_SUBTRACT};$e[Sp]=i.MIN,$e[bp]=i.MAX;let R={[ir]:i.ZERO,[Tp]:i.ONE,[wp]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[Rp]:i.SRC_ALPHA_SATURATE,[la]:i.DST_COLOR,[aa]:i.DST_ALPHA,[Ap]:i.ONE_MINUS_SRC_COLOR,[wl]:i.ONE_MINUS_SRC_ALPHA,[Cp]:i.ONE_MINUS_DST_COLOR,[Ep]:i.ONE_MINUS_DST_ALPHA,[Pp]:i.CONSTANT_COLOR,[Ip]:i.ONE_MINUS_CONSTANT_COLOR,[Lp]:i.CONSTANT_ALPHA,[Dp]:i.ONE_MINUS_CONSTANT_ALPHA};function k(W,Te,ae,Ae,Pe,pe,qe,Oe,Gt,Pt){if(W===Yt){p===!0&&(De(i.BLEND),p=!1);return}if(p===!1&&(fe(i.BLEND),p=!0),W!==oc){if(W!==m||Pt!==E){if((y!==Jn||w!==Jn)&&(i.blendEquation(i.FUNC_ADD),y=Jn,w=Jn),Pt)switch(W){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case Ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qe("WebGLState: Invalid blending: ",W);break}else switch(W){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ru:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",W);break}b=null,M=null,A=null,v=null,_.set(0,0,0),T=0,m=W,E=Pt}return}Pe=Pe||Te,pe=pe||ae,qe=qe||Ae,(Te!==y||Pe!==w)&&(i.blendEquationSeparate($e[Te],$e[Pe]),y=Te,w=Pe),(ae!==b||Ae!==M||pe!==A||qe!==v)&&(i.blendFuncSeparate(R[ae],R[Ae],R[pe],R[qe]),b=ae,M=Ae,A=pe,v=qe),(Oe.equals(_)===!1||Gt!==T)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Gt),_.copy(Oe),T=Gt),m=W,E=!1}function H(W,Te){W.side===wn?De(i.CULL_FACE):fe(i.CULL_FACE);let ae=W.side===xn;Te&&(ae=!ae),J(ae),W.blending===Gs&&W.transparent===!1?k(Yt):k(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ae=W.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),he(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(W){I!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),I=W)}function K(W){W!==_p?(fe(i.CULL_FACE),W!==O&&(W===Cu?i.cullFace(i.BACK):W===vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),O=W}function ue(W){W!==z&&(B&&i.lineWidth(W),z=W)}function he(W,Te,ae){W?(fe(i.POLYGON_OFFSET_FILL),(P!==Te||N!==ae)&&(P=Te,N=ae,o.getReversed()&&(Te=-Te),i.polygonOffset(Te,ae))):De(i.POLYGON_OFFSET_FILL)}function me(W){W?fe(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function de(W){W===void 0&&(W=i.TEXTURE0+U-1),V!==W&&(i.activeTexture(W),V=W)}function G(W,Te,ae){ae===void 0&&(V===null?ae=i.TEXTURE0+U-1:ae=V);let Ae=Y[ae];Ae===void 0&&(Ae={type:void 0,texture:void 0},Y[ae]=Ae),(Ae.type!==W||Ae.texture!==Te)&&(V!==ae&&(i.activeTexture(ae),V=ae),i.bindTexture(W,Te||ge[W]),Ae.type=W,Ae.texture=Te)}function Xe(){let W=Y[V];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function je(){try{i.compressedTexImage2D(...arguments)}catch(W){Qe("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){Qe("WebGLState:",W)}}function S(){try{i.texSubImage2D(...arguments)}catch(W){Qe("WebGLState:",W)}}function Z(){try{i.texSubImage3D(...arguments)}catch(W){Qe("WebGLState:",W)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Qe("WebGLState:",W)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Qe("WebGLState:",W)}}function xe(){try{i.texStorage2D(...arguments)}catch(W){Qe("WebGLState:",W)}}function ve(){try{i.texStorage3D(...arguments)}catch(W){Qe("WebGLState:",W)}}function se(){try{i.texImage2D(...arguments)}catch(W){Qe("WebGLState:",W)}}function oe(){try{i.texImage3D(...arguments)}catch(W){Qe("WebGLState:",W)}}function be(W){return u[W]!==void 0?u[W]:i.getParameter(W)}function We(W,Te){u[W]!==Te&&(i.pixelStorei(W,Te),u[W]=Te)}function Me(W){Se.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Se.copy(W))}function ye(W){Ee.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),Ee.copy(W))}function ze(W,Te){let ae=l.get(Te);ae===void 0&&(ae=new WeakMap,l.set(Te,ae));let Ae=ae.get(W);Ae===void 0&&(Ae=i.getUniformBlockIndex(Te,W.name),ae.set(W,Ae))}function Ke(W,Te){let Ae=l.get(Te).get(W);c.get(Te)!==Ae&&(i.uniformBlockBinding(Te,Ae,W.__bindingPointIndex),c.set(Te,Ae))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,Y={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,y=null,b=null,M=null,w=null,A=null,v=null,_=new Ie(0,0,0),T=0,E=!1,I=null,O=null,z=null,P=null,N=null,Se.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:De,bindFramebuffer:Fe,drawBuffers:He,useProgram:ht,setBlending:k,setMaterial:H,setFlipSided:J,setCullFace:K,setLineWidth:ue,setPolygonOffset:he,setScissorTest:me,activeTexture:de,bindTexture:G,unbindTexture:Xe,compressedTexImage2D:je,compressedTexImage3D:F,texImage2D:se,texImage3D:oe,pixelStorei:We,getParameter:be,updateUBOMapping:ze,uniformBlockBinding:Ke,texStorage2D:xe,texStorage3D:ve,texSubImage2D:S,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:ie,scissor:Me,viewport:ye,reset:tt}}function AM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,S){return g?new OffscreenCanvas(F,S):Nr("canvas")}function p(F,S,Z){let j=1,ie=je(F);if((ie.width>Z||ie.height>Z)&&(j=Z/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let xe=Math.floor(j*ie.width),ve=Math.floor(j*ie.height);d===void 0&&(d=x(xe,ve));let se=S?x(xe,ve):d;return se.width=xe,se.height=ve,se.getContext("2d").drawImage(F,0,0,xe,ve),Be("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+xe+"x"+ve+")."),se}else return"data"in F&&Be("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),F;return F}function m(F){return F.generateMipmaps}function y(F){i.generateMipmap(F)}function b(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,S,Z,j,ie,xe=!1){if(F!==null){if(i[F]!==void 0)return i[F];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ve;j&&(ve=e.get("EXT_texture_norm16"),ve||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=S;if(S===i.RED&&(Z===i.FLOAT&&(se=i.R32F),Z===i.HALF_FLOAT&&(se=i.R16F),Z===i.UNSIGNED_BYTE&&(se=i.R8),Z===i.UNSIGNED_SHORT&&ve&&(se=ve.R16_EXT),Z===i.SHORT&&ve&&(se=ve.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.R8UI),Z===i.UNSIGNED_SHORT&&(se=i.R16UI),Z===i.UNSIGNED_INT&&(se=i.R32UI),Z===i.BYTE&&(se=i.R8I),Z===i.SHORT&&(se=i.R16I),Z===i.INT&&(se=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(se=i.RG32F),Z===i.HALF_FLOAT&&(se=i.RG16F),Z===i.UNSIGNED_BYTE&&(se=i.RG8),Z===i.UNSIGNED_SHORT&&ve&&(se=ve.RG16_EXT),Z===i.SHORT&&ve&&(se=ve.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RG8UI),Z===i.UNSIGNED_SHORT&&(se=i.RG16UI),Z===i.UNSIGNED_INT&&(se=i.RG32UI),Z===i.BYTE&&(se=i.RG8I),Z===i.SHORT&&(se=i.RG16I),Z===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(se=i.RGB16UI),Z===i.UNSIGNED_INT&&(se=i.RGB32UI),Z===i.BYTE&&(se=i.RGB8I),Z===i.SHORT&&(se=i.RGB16I),Z===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),Z===i.UNSIGNED_INT&&(se=i.RGBA32UI),Z===i.BYTE&&(se=i.RGBA8I),Z===i.SHORT&&(se=i.RGBA16I),Z===i.INT&&(se=i.RGBA32I)),S===i.RGB&&(Z===i.UNSIGNED_SHORT&&ve&&(se=ve.RGB16_EXT),Z===i.SHORT&&ve&&(se=ve.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),S===i.RGBA){let oe=xe?Ao:ot.getTransfer(ie);Z===i.FLOAT&&(se=i.RGBA32F),Z===i.HALF_FLOAT&&(se=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(se=oe===xt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&ve&&(se=ve.RGBA16_EXT),Z===i.SHORT&&ve&&(se=ve.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(F,S){let Z;return F?S===null||S===xi||S===Ts?Z=i.DEPTH24_STENCIL8:S===Cn?Z=i.DEPTH32F_STENCIL8:S===Kr&&(Z=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===Ts?Z=i.DEPTH_COMPONENT24:S===Cn?Z=i.DEPTH_COMPONENT32F:S===Kr&&(Z=i.DEPTH_COMPONENT16),Z}function A(F,S){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==Bt&&F.minFilter!==vt?Math.log2(Math.max(S.width,S.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?S.mipmaps.length:1}function v(F){let S=F.target;S.removeEventListener("dispose",v),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(F){let S=F.target;S.removeEventListener("dispose",_),I(S)}function T(F){let S=n.get(F);if(S.__webglInit===void 0)return;let Z=F.source,j=f.get(Z);if(j){let ie=j[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&E(F),Object.keys(j).length===0&&f.delete(Z)}n.remove(F)}function E(F){let S=n.get(F);i.deleteTexture(S.__webglTexture);let Z=F.source,j=f.get(Z);delete j[S.__cacheKey],o.memory.textures--}function I(F){let S=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ie=0;ie<S.__webglFramebuffer[j].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[j][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Z=F.textures;for(let j=0,ie=Z.length;j<ie;j++){let xe=n.get(Z[j]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(Z[j])}n.remove(F)}let O=0;function z(){O=0}function P(){return O}function N(F){O=F}function U(){let F=O;return F>=s.maxTextures&&Be("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),O+=1,F}function B(F){let S=[];return S.push(F.wrapS),S.push(F.wrapT),S.push(F.wrapR||0),S.push(F.magFilter),S.push(F.minFilter),S.push(F.anisotropy),S.push(F.internalFormat),S.push(F.format),S.push(F.type),S.push(F.generateMipmaps),S.push(F.premultiplyAlpha),S.push(F.flipY),S.push(F.unpackAlignment),S.push(F.colorSpace),S.join()}function X(F,S){let Z=n.get(F);if(F.isVideoTexture&&G(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){let j=F.image;if(j===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{De(Z,F,S);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function L(F,S){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){De(Z,F,S);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function V(F,S){let Z=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){De(Z,F,S);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function Y(F,S){let Z=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){Fe(Z,F,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}let $={[$t]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},le={[Bt]:i.NEAREST,[lc]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[vt]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[An]:i.LINEAR_MIPMAP_LINEAR},Se={[kp]:i.NEVER,[Xp]:i.ALWAYS,[Vp]:i.LESS,[qc]:i.LEQUAL,[Gp]:i.EQUAL,[Yc]:i.GEQUAL,[Hp]:i.GREATER,[Wp]:i.NOTEQUAL};function Ee(F,S){if(S.type===Cn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vt||S.magFilter===Zr||S.magFilter===or||S.magFilter===An||S.minFilter===vt||S.minFilter===Zr||S.minFilter===or||S.minFilter===An)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,$[S.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,le[S.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,le[S.minFilter]),S.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==or&&S.minFilter!==An||S.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(F,S){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,S.addEventListener("dispose",v));let j=S.source,ie=f.get(j);ie===void 0&&(ie={},f.set(j,ie));let xe=B(S);if(xe!==F.__cacheKey){ie[xe]===void 0&&(ie[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ie[xe].usedTimes++;let ve=ie[F.__cacheKey];ve!==void 0&&(ie[F.__cacheKey].usedTimes--,ve.usedTimes===0&&E(S)),F.__cacheKey=xe,F.__webglTexture=ie[xe].texture}return Z}function ge(F,S,Z){return Math.floor(Math.floor(F/Z)/S)}function fe(F,S,Z,j){let xe=F.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Z,j,S.data);else{xe.sort((We,Me)=>We.start-Me.start);let ve=0;for(let We=1;We<xe.length;We++){let Me=xe[ve],ye=xe[We],ze=Me.start+Me.count,Ke=ge(ye.start,S.width,4),tt=ge(Me.start,S.width,4);ye.start<=ze+1&&Ke===tt&&ge(ye.start+ye.count-1,S.width,4)===Ke?Me.count=Math.max(Me.count,ye.start+ye.count-Me.start):(++ve,xe[ve]=ye)}xe.length=ve+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),be=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let We=0,Me=xe.length;We<Me;We++){let ye=xe[We],ze=Math.floor(ye.start/4),Ke=Math.ceil(ye.count/4),tt=ze%S.width,W=Math.floor(ze/S.width),Te=Ke,ae=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,tt,W,Te,ae,Z,j,S.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function De(F,S,Z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let ie=ne(F,S),xe=S.source;t.bindTexture(j,F.__webglTexture,i.TEXTURE0+Z);let ve=n.get(xe);if(xe.version!==ve.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ae=ot.getPrimaries(ot.workingColorSpace),Ae=S.colorSpace===rs?null:ot.getPrimaries(S.colorSpace),Pe=S.colorSpace===rs||ae===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let oe=p(S.image,!1,s.maxTextureSize);oe=Xe(S,oe);let be=r.convert(S.format,S.colorSpace),We=r.convert(S.type),Me=M(S.internalFormat,be,We,S.normalized,S.colorSpace,S.isVideoTexture);Ee(j,S);let ye,ze=S.mipmaps,Ke=S.isVideoTexture!==!0,tt=ve.__version===void 0||ie===!0,W=xe.dataReady,Te=A(S,oe);if(S.isDepthTexture)Me=w(S.format===Ni,S.type),tt&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Me,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,be,We,null));else if(S.isDataTexture)if(ze.length>0){Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Te,Me,ze[0].width,ze[0].height);for(let ae=0,Ae=ze.length;ae<Ae;ae++)ye=ze[ae],Ke?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,We,ye.data):t.texImage2D(i.TEXTURE_2D,ae,Me,ye.width,ye.height,0,be,We,ye.data);S.generateMipmaps=!1}else Ke?(tt&&t.texStorage2D(i.TEXTURE_2D,Te,Me,oe.width,oe.height),W&&fe(S,oe,be,We)):t.texImage2D(i.TEXTURE_2D,0,Me,oe.width,oe.height,0,be,We,oe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,ze[0].width,ze[0].height,oe.depth);for(let ae=0,Ae=ze.length;ae<Ae;ae++)if(ye=ze[ae],S.format!==_n)if(be!==null)if(Ke){if(W)if(S.layerUpdates.size>0){let Pe=qu(ye.width,ye.height,S.format,S.type);for(let pe of S.layerUpdates){let qe=ye.data.subarray(pe*Pe/ye.data.BYTES_PER_ELEMENT,(pe+1)*Pe/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,pe,ye.width,ye.height,1,be,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,oe.depth,be,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Me,ye.width,ye.height,oe.depth,0,ye.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,oe.depth,be,We,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Me,ye.width,ye.height,oe.depth,0,be,We,ye.data)}else{Ke&&tt&&t.texStorage2D(i.TEXTURE_2D,Te,Me,ze[0].width,ze[0].height);for(let ae=0,Ae=ze.length;ae<Ae;ae++)ye=ze[ae],S.format!==_n?be!==null?Ke?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Me,ye.width,ye.height,0,ye.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ye.width,ye.height,be,We,ye.data):t.texImage2D(i.TEXTURE_2D,ae,Me,ye.width,ye.height,0,be,We,ye.data)}else if(S.isDataArrayTexture)if(Ke){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Me,oe.width,oe.height,oe.depth),W)if(S.layerUpdates.size>0){let ae=qu(oe.width,oe.height,S.format,S.type);for(let Ae of S.layerUpdates){let Pe=oe.data.subarray(Ae*ae/oe.data.BYTES_PER_ELEMENT,(Ae+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,oe.width,oe.height,1,be,We,Pe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,We,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,oe.width,oe.height,oe.depth,0,be,We,oe.data);else if(S.isData3DTexture)Ke?(tt&&t.texStorage3D(i.TEXTURE_3D,Te,Me,oe.width,oe.height,oe.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,We,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Me,oe.width,oe.height,oe.depth,0,be,We,oe.data);else if(S.isFramebufferTexture){if(tt)if(Ke)t.texStorage2D(i.TEXTURE_2D,Te,Me,oe.width,oe.height);else{let ae=oe.width,Ae=oe.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Me,ae,Ae,0,be,We,null),ae>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ae=i.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),oe.parentNode!==ae){ae.appendChild(oe),u.add(S),ae.onpaint=Ae=>{let Pe=Ae.changedElements;for(let pe of u)Pe.includes(pe.image)&&(pe.needsUpdate=!0)},ae.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Pe=i.RGBA,pe=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,pe,qe,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ke&&tt){let ae=je(ze[0]);t.texStorage2D(i.TEXTURE_2D,Te,Me,ae.width,ae.height)}for(let ae=0,Ae=ze.length;ae<Ae;ae++)ye=ze[ae],Ke?W&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,be,We,ye):t.texImage2D(i.TEXTURE_2D,ae,Me,be,We,ye);S.generateMipmaps=!1}else if(Ke){if(tt){let ae=je(oe);t.texStorage2D(i.TEXTURE_2D,Te,Me,ae.width,ae.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,be,We,oe)}else t.texImage2D(i.TEXTURE_2D,0,Me,be,We,oe);m(S)&&y(j),ve.__version=xe.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function Fe(F,S,Z){if(S.image.length!==6)return;let j=ne(F,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);let xe=n.get(ie);if(ie.version!==xe.__version||j===!0){t.activeTexture(i.TEXTURE0+Z);let ve=ot.getPrimaries(ot.workingColorSpace),se=S.colorSpace===rs?null:ot.getPrimaries(S.colorSpace),oe=S.colorSpace===rs||ve===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let be=S.isCompressedTexture||S.image[0].isCompressedTexture,We=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let pe=0;pe<6;pe++)!be&&!We?Me[pe]=p(S.image[pe],!0,s.maxCubemapSize):Me[pe]=We?S.image[pe].image:S.image[pe],Me[pe]=Xe(S,Me[pe]);let ye=Me[0],ze=r.convert(S.format,S.colorSpace),Ke=r.convert(S.type),tt=M(S.internalFormat,ze,Ke,S.normalized,S.colorSpace),W=S.isVideoTexture!==!0,Te=xe.__version===void 0||j===!0,ae=ie.dataReady,Ae=A(S,ye);Ee(i.TEXTURE_CUBE_MAP,S);let Pe;if(be){W&&Te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,ye.width,ye.height);for(let pe=0;pe<6;pe++){Pe=Me[pe].mipmaps;for(let qe=0;qe<Pe.length;qe++){let Oe=Pe[qe];S.format!==_n?ze!==null?W?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Oe.width,Oe.height,ze,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,tt,Oe.width,Oe.height,0,Oe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Oe.width,Oe.height,ze,Ke,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,tt,Oe.width,Oe.height,0,ze,Ke,Oe.data)}}}else{if(Pe=S.mipmaps,W&&Te){Pe.length>0&&Ae++;let pe=je(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,tt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(We){W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Me[pe].width,Me[pe].height,ze,Ke,Me[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,Me[pe].width,Me[pe].height,0,ze,Ke,Me[pe].data);for(let qe=0;qe<Pe.length;qe++){let Gt=Pe[qe].image[pe].image;W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,Gt.width,Gt.height,ze,Ke,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,tt,Gt.width,Gt.height,0,ze,Ke,Gt.data)}}else{W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze,Ke,Me[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,tt,ze,Ke,Me[pe]);for(let qe=0;qe<Pe.length;qe++){let Oe=Pe[qe];W?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,ze,Ke,Oe.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,tt,ze,Ke,Oe.image[pe])}}}m(S)&&y(i.TEXTURE_CUBE_MAP),xe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}F.__version=S.version}function He(F,S,Z,j,ie,xe){let ve=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),oe=M(Z.internalFormat,ve,se,Z.normalized,Z.colorSpace),be=n.get(S),We=n.get(Z);if(We.__renderTarget=S,!be.__hasExternalTextures){let Me=Math.max(1,S.width>>xe),ye=Math.max(1,S.height>>xe);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,xe,oe,Me,ye,S.depth,0,ve,se,null):t.texImage2D(ie,xe,oe,Me,ye,0,ve,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ie,We.__webglTexture,0,me(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ie,We.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(F,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),S.depthBuffer){let j=S.depthTexture,ie=j&&j.isDepthTexture?j.type:null,xe=w(S.stencilBuffer,ie),ve=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(S),xe,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(S),xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,F)}else{let j=S.textures;for(let ie=0;ie<j.length;ie++){let xe=j[ie],ve=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),oe=M(xe.internalFormat,ve,se,xe.normalized,xe.colorSpace);de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(S),oe,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(S),oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,oe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $e(F,S,Z){let j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",v)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S.depthTexture);let be=r.convert(S.depthTexture.format),We=r.convert(S.depthTexture.type),Me;S.depthTexture.format===Ei?Me=i.DEPTH_COMPONENT24:S.depthTexture.format===Ni&&(Me=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,S.width,S.height,0,be,We,null)}}else X(S.depthTexture,0);let xe=ie.__webglTexture,ve=me(S),se=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,oe=S.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ei)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,se,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,oe,se,xe,0);else if(S.depthTexture.format===Ni)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,se,xe,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,oe,se,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function R(F){let S=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==F.depthTexture){let j=F.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=j}if(F.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let j=0;j<6;j++)$e(S.__webglFramebuffer[j],F,j);else{let j=F.texture.mipmaps;j&&j.length>0?$e(S.__webglFramebuffer[0],F,0):$e(S.__webglFramebuffer,F,0)}else if(Z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[j],F,!1);else{let ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,xe)}}else{let j=F.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,F,!1);else{let ie=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(F,S,Z){let j=n.get(F);S!==void 0&&He(j.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&R(F)}function H(F){let S=F.texture,Z=n.get(F),j=n.get(S);F.addEventListener("dispose",_);let ie=F.textures,xe=F.isWebGLCubeRenderTarget===!0,ve=ie.length>1;if(ve||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),xe){Z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[se]=[];for(let oe=0;oe<S.mipmaps.length;oe++)Z.__webglFramebuffer[se][oe]=i.createFramebuffer()}else Z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)Z.__webglFramebuffer[se]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ve)for(let se=0,oe=ie.length;se<oe;se++){let be=n.get(ie[se]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&de(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){let oe=ie[se];Z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[se]);let be=r.convert(oe.format,oe.colorSpace),We=r.convert(oe.type),Me=M(oe.internalFormat,be,We,oe.normalized,oe.colorSpace,F.isXRRenderTarget===!0),ye=me(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Me,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,Z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)He(Z.__webglFramebuffer[se][oe],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,oe);else He(Z.__webglFramebuffer[se],F,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,oe=ie.length;se<oe;se++){let be=ie[se],We=n.get(be),Me=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Me=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,We.__webglTexture),Ee(Me,be),He(Z.__webglFramebuffer,F,be,i.COLOR_ATTACHMENT0+se,Me,0),m(be)&&y(Me)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(se=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),Ee(se,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)He(Z.__webglFramebuffer[oe],F,S,i.COLOR_ATTACHMENT0,se,oe);else He(Z.__webglFramebuffer,F,S,i.COLOR_ATTACHMENT0,se,0);m(S)&&y(se),t.unbindTexture()}F.depthBuffer&&R(F)}function J(F){let S=F.textures;for(let Z=0,j=S.length;Z<j;Z++){let ie=S[Z];if(m(ie)){let xe=b(F),ve=n.get(ie).__webglTexture;t.bindTexture(xe,ve),y(xe),t.unbindTexture()}}}let K=[],ue=[];function he(F){if(F.samples>0){if(de(F)===!1){let S=F.textures,Z=F.width,j=F.height,ie=i.COLOR_BUFFER_BIT,xe=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(F),se=S.length>1;if(se)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let oe=F.texture.mipmaps;oe&&oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<S.length;be++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);let We=n.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,Z,j,0,0,Z,j,ie,i.NEAREST),c===!0&&(K.length=0,ue.length=0,K.push(i.COLOR_ATTACHMENT0+be),F.depthBuffer&&F.resolveDepthBuffer===!1&&(K.push(xe),ue.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);let We=n.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){let S=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(F){return Math.min(s.maxSamples,F.samples)}function de(F){let S=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(F){let S=o.render.frame;h.get(F)!==S&&(h.set(F,S),F.update())}function Xe(F,S){let Z=F.colorSpace,j=F.format,ie=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==pn&&Z!==rs&&(ot.getTransfer(Z)===xt?(j!==_n||ie!==En)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",Z)),S}function je(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=k,this.setupRenderTarget=H,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=He,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function EM(i,e){function t(n,s=rs){let r,o=ot.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===hc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Du)return i.BYTE;if(n===Nu)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===cc)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Ut)return i.HALF_FLOAT;if(n===Ou)return i.ALPHA;if(n===Bu)return i.RGB;if(n===_n)return i.RGBA;if(n===Ei)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===ws)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===ga||n===xa||n===_a||n===va)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===xc||n===_c||n===vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Mc||n===Sc||n===bc||n===Tc||n===ya||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===Mc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return r.COMPRESSED_R11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ya)return r.COMPRESSED_RG11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Ec||n===Cc||n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===Vc||n===Gc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hc||n===Wc||n===Ma||n===Xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var CM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
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

}`,ff=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Fo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:CM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},df=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new ff,m={},y=t.getContextAttributes(),b=null,M=null,w=[],A=[],v=new ce,_=null,T=new Ot;T.viewport=new _t;let E=new Ot;E.viewport=new _t;let I=[T,E],O=new ic,z=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=w[ne];return ge===void 0&&(ge=new Br,w[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=w[ne];return ge===void 0&&(ge=new Br,w[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=w[ne];return ge===void 0&&(ge=new Br,w[ne]=ge),ge.getHandSpace()};function N(ne){let ge=A.indexOf(ne.inputSource);if(ge===-1)return;let fe=w[ge];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,l||o),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let ne=0;ne<w.length;ne++){let ge=A[ne];ge!==null&&(A[ne]=null,w[ne].disconnect(ge))}z=null,P=null,p.reset();for(let ne in m)delete m[ne];e.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ni:Ei,De=y.stencil?Ts:xi);let He={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new zt(d.textureWidth,d.textureHeight,{format:_n,type:En,depthTexture:new fi(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new zt(f.framebufferWidth,f.framebufferHeight,{format:_n,type:En,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(ne){for(let ge=0;ge<ne.removed.length;ge++){let fe=ne.removed[ge],De=A.indexOf(fe);De>=0&&(A[De]=null,w[De].disconnect(fe))}for(let ge=0;ge<ne.added.length;ge++){let fe=ne.added[ge],De=A.indexOf(fe);if(De===-1){for(let He=0;He<w.length;He++)if(He>=A.length){A.push(fe),De=He;break}else if(A[He]===null){A[He]=fe,De=He;break}if(De===-1)break}let Fe=w[De];Fe&&Fe.connect(fe)}}let X=new D,L=new D;function V(ne,ge,fe){X.setFromMatrixPosition(ge.matrixWorld),L.setFromMatrixPosition(fe.matrixWorld);let De=X.distanceTo(L),Fe=ge.projectionMatrix.elements,He=fe.projectionMatrix.elements,ht=Fe[14]/(Fe[10]-1),$e=Fe[14]/(Fe[10]+1),R=(Fe[9]+1)/Fe[5],k=(Fe[9]-1)/Fe[5],H=(Fe[8]-1)/Fe[0],J=(He[8]+1)/He[0],K=ht*H,ue=ht*J,he=De/(-H+J),me=he*-H;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(me),ne.translateZ(he),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Fe[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let de=ht+he,G=$e+he,Xe=K-me,je=ue+(De-me),F=R*$e/G*de,S=k*$e/G*de;ne.projectionMatrix.makePerspective(Xe,je,F,S,de,G),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Y(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,fe=ne.far;p.texture!==null&&(p.depthNear>0&&(ge=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),O.near=E.near=T.near=ge,O.far=E.far=T.far=fe,(z!==O.near||P!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,P=O.far),O.layers.mask=ne.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let De=ne.parent,Fe=O.cameras;Y(O,De);for(let He=0;He<Fe.length;He++)Y(Fe[He],De);Fe.length===2?V(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),$(ne,O,De)};function $(ne,ge,fe){fe===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=qs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(ne){return m[ne]};let le=null;function Se(ne,ge){if(h=ge.getViewerPose(l||o),g=ge,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let De=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let $e=0;$e<fe.length;$e++){let R=fe[$e],k=null;if(f!==null)k=f.getViewport(R);else{let J=u.getViewSubImage(d,R);k=J.viewport,$e===0&&(e.setRenderTargetTextures(M,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(M))}let H=I[$e];H===void 0&&(H=new Ot,H.layers.enable($e),H.viewport=new _t,I[$e]=H),H.matrix.fromArray(R.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(R.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(k.x,k.y,k.width,k.height),$e===0&&(O.matrix.copy(H.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(H)}let Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let $e=u.getDepthInformation(fe[0]);$e&&$e.isValid&&$e.texture&&p.init($e,s.renderState)}if(Fe&&Fe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<fe.length;$e++){let R=fe[$e].camera;if(R){let k=m[R];k||(k=new Fo,m[R]=k);let H=u.getCameraImage(R);k.sourceTexture=H}}}}for(let fe=0;fe<w.length;fe++){let De=A[fe],Fe=w[fe];De!==null&&Fe!==void 0&&Fe.update(De,ge,l||o)}le&&le(ne,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}let Ee=new Tm;Ee.setAnimationLoop(Se),this.setAnimationLoop=function(ne){le=ne},this.dispose=function(){}}},PM=new Ve,Pm=new st;Pm.set(-1,0,0,0,1,0,0,0,1);function IM(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,y,b):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y=e.get(m),b=y.envMap,M=y.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,y,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function LM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){let A=w.program;n.uniformBlockBinding(M,A)}function l(M,w){let A=s[M.id];A===void 0&&(p(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",y));let v=w.program;n.updateUBOMapping(M,v);let _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){let w=u();M.__bindingPointIndex=w;let A=i.createBuffer(),v=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,v,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let w=s[M.id],A=M.uniforms,v=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,T=A.length;_<T;_++){let E=A[_];if(Array.isArray(E))for(let I=0,O=E.length;I<O;I++)f(E[I],_,I,v);else f(E,_,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,w,A,v){if(x(M,w,A,v)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let E=0;for(let I=0;I<T.length;I++){let O=T[I],z=m(O);g(O,M.__data,E),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(E+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function g(M,w,A){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,A)}function x(M,w,A,v){let _=M.value,T=w+"_"+A;if(v[T]===void 0)return typeof _=="number"||typeof _=="boolean"?v[T]=_:ArrayBuffer.isView(_)?v[T]=_.slice():v[T]=_.clone(),!0;{let E=v[T];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return v[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function p(M){let w=M.uniforms,A=0,v=16;for(let T=0,E=w.length;T<E;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let O=0,z=I.length;O<z;O++){let P=I[O],N=Array.isArray(P.value)?P.value:[P.value];for(let U=0,B=N.length;U<B;U++){let X=N[U],L=m(X),V=A%v,Y=V%L.boundary,$=V+Y;A+=Y,$!==0&&v-$<L.storage&&(A+=v-$),P.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=L.storage}}}let _=A%v;return _>0&&(A+=v-_),M.__size=A,M.__cache={},this}function m(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",M),w}function y(M){let w=M.target;w.removeEventListener("dispose",y);let A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}var DM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function NM(){return Ui===null&&(Ui=new mn(DM,16,16,ws,Ut),Ui.name="DFG_LUT",Ui.minFilter=vt,Ui.magFilter=vt,Ui.wrapS=zn,Ui.wrapT=zn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Qr=class{constructor(e={}){let{canvas:t=qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=En}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,p=new Set([mc,pc,dc]),m=new Set([En,xi,Kr,Ts,hc,uc]),y=new Uint32Array(4),b=new Int32Array(4),M=new D,w=null,A=null,v=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,O=null,z=null,P=null,N=null;this._outputColorSpace=dt;let U=0,B=0,X=null,L=-1,V=null,Y=new _t,$=new _t,le=null,Se=new Ie(0),Ee=0,ne=t.width,ge=t.height,fe=1,De=null,Fe=null,He=new _t(0,0,ne,ge),ht=new _t(0,0,ne,ge),$e=!1,R=new vs,k=!1,H=!1,J=new Ve,K=new D,ue=new _t,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function de(){return X===null?fe:1}let G=n;function Xe(C,q){return t.getContext(C,q)}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Si,!1),G===null){let q="webgl2";if(G=Xe(q,C),G===null)throw Xe(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Qe("WebGLRenderer: "+C.message),C}let je,F,S,Z,j,ie,xe,ve,se,oe,be,We,Me,ye,ze,Ke,tt,W,Te,ae,Ae,Pe,pe;function qe(){je=new Vv(G),je.init(),Ae=new EM(G,je),F=new Dv(G,je,e,Ae),S=new wM(G,je),F.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),z=G.createFramebuffer(),P=G.createFramebuffer(),N=G.createFramebuffer(),Z=new Wv(G),j=new uM,ie=new AM(G,je,S,j,F,Ae,Z),xe=new kv(E),ve=new Zx(G),Pe=new Iv(G,ve),se=new Gv(G,ve,Z,Pe),oe=new qv(G,se,ve,Pe,Z),W=new Xv(G,F,ie),ze=new Nv(j),be=new hM(E,xe,je,F,Pe,ze),We=new IM(E,j),Me=new dM,ye=new vM(je),tt=new Pv(E,xe,S,oe,g,c),Ke=new TM(E,oe,F),pe=new LM(G,Z,F,S),Te=new Lv(G,je,Z),ae=new Hv(G,je,Z),Z.programs=be.programs,E.capabilities=F,E.extensions=je,E.properties=j,E.renderLists=Me,E.shadowMap=Ke,E.state=S,E.info=Z}qe(),x!==En&&(T=new Zv(x,t.width,t.height,a,s,r));let Oe=new df(E,G);this.xr=Oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let C=je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(ne,ge,!1))},this.getSize=function(C){return C.set(ne,ge)},this.setSize=function(C,q,te=!0){if(Oe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,ge=q,t.width=Math.floor(C*fe),t.height=Math.floor(q*fe),te===!0&&(t.style.width=C+"px",t.style.height=q+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(ne*fe,ge*fe).floor()},this.setDrawingBufferSize=function(C,q,te){ne=C,ge=q,fe=te,t.width=Math.floor(C*te),t.height=Math.floor(q*te),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(x===En){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Y)},this.getViewport=function(C){return C.copy(He)},this.setViewport=function(C,q,te,Q){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,q,te,Q),S.viewport(Y.copy(He).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(ht)},this.setScissor=function(C,q,te,Q){C.isVector4?ht.set(C.x,C.y,C.z,C.w):ht.set(C,q,te,Q),S.scissor($.copy(ht).multiplyScalar(fe).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){S.setScissorTest($e=C)},this.setOpaqueSort=function(C){De=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,te=!0){let Q=0;if(C){let ee=!1;if(X!==null){let Re=X.texture.format;ee=p.has(Re)}if(ee){let Re=X.texture.type,Ue=m.has(Re),Ce=tt.getClearColor(),ke=tt.getClearAlpha(),Ye=Ce.r,rt=Ce.g,ut=Ce.b;Ue?(y[0]=Ye,y[1]=rt,y[2]=ut,y[3]=ke,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=Ye,b[1]=rt,b[2]=ut,b[3]=ke,G.clearBufferiv(G.COLOR,0,b))}else Q|=G.COLOR_BUFFER_BIT}q&&(Q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),O=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Si,!1),tt.dispose(),Me.dispose(),ye.dispose(),j.dispose(),xe.dispose(),oe.dispose(),Pe.dispose(),pe.dispose(),be.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",yd),Oe.removeEventListener("sessionend",Md),Ns.stop()};function Gt(C){C.preventDefault(),Eo("WebGLRenderer: Context Lost."),I=!0}function Pt(){Eo("WebGLRenderer: Context Restored."),I=!1;let C=Z.autoReset,q=Ke.enabled,te=Ke.autoUpdate,Q=Ke.needsUpdate,ee=Ke.type;qe(),Z.autoReset=C,Ke.enabled=q,Ke.autoUpdate=te,Ke.needsUpdate=Q,Ke.type=ee}function Si(C){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bi(C){let q=C.target;q.removeEventListener("dispose",bi),cg(q)}function cg(C){hg(C),j.remove(C)}function hg(C){let q=j.get(C).programs;q!==void 0&&(q.forEach(function(te){be.releaseProgram(te)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,te,Q,ee,Re){q===null&&(q=he);let Ue=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ce=dg(C,q,te,Q,ee);S.setMaterial(Q,Ue);let ke=te.index,Ye=1;if(Q.wireframe===!0){if(ke=se.getWireframeAttribute(te),ke===void 0)return;Ye=2}let rt=te.drawRange,ut=te.attributes.position,Je=rt.start*Ye,bt=(rt.start+rt.count)*Ye;Re!==null&&(Je=Math.max(Je,Re.start*Ye),bt=Math.min(bt,(Re.start+Re.count)*Ye)),ke!==null?(Je=Math.max(Je,0),bt=Math.min(bt,ke.count)):ut!=null&&(Je=Math.max(Je,0),bt=Math.min(bt,ut.count));let Xt=bt-Je;if(Xt<0||Xt===1/0)return;Pe.setup(ee,Q,Ce,te,ke);let Ht,wt=Te;if(ke!==null&&(Ht=ve.get(ke),wt=ae,wt.setIndex(Ht)),ee.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*de()),wt.setMode(G.LINES)):wt.setMode(G.TRIANGLES);else if(ee.isLine){let Mn=Q.linewidth;Mn===void 0&&(Mn=1),S.setLineWidth(Mn*de()),ee.isLineSegments?wt.setMode(G.LINES):ee.isLineLoop?wt.setMode(G.LINE_LOOP):wt.setMode(G.LINE_STRIP)}else ee.isPoints?wt.setMode(G.POINTS):ee.isSprite&&wt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(je.get("WEBGL_multi_draw"))wt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Mn=ee._multiDrawStarts,Ne=ee._multiDrawCounts,qn=ee._multiDrawCount,pt=ke?ve.get(ke).bytesPerElement:1,ei=j.get(Q).currentProgram.getUniforms();for(let Ti=0;Ti<qn;Ti++)ei.setValue(G,"_gl_DrawID",Ti),wt.render(Mn[Ti]/pt,Ne[Ti])}else if(ee.isInstancedMesh)wt.renderInstances(Je,Xt,ee.count);else if(te.isInstancedBufferGeometry){let Mn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ne=Math.min(te.instanceCount,Mn);wt.renderInstances(Je,Xt,Ne)}else wt.render(Je,Xt)};function vd(C,q,te){C.transparent===!0&&C.side===wn&&C.forceSinglePass===!1?(C.side=xn,C.needsUpdate=!0,Za(C,q,te),C.side=Kn,C.needsUpdate=!0,Za(C,q,te),C.side=wn):Za(C,q,te)}this.compile=function(C,q,te=null){te===null&&(te=C),A=ye.get(te),A.init(q),_.push(A),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),C!==te&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights();let Q=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Re=ee.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){let Ce=Re[Ue];vd(Ce,te,ee),Q.add(Ce)}else vd(Re,te,ee),Q.add(Re)}),A=_.pop(),Q},this.compileAsync=function(C,q,te=null){let Q=this.compile(C,q,te);return new Promise(ee=>{function Re(){if(Q.forEach(function(Ue){j.get(Ue).currentProgram.isReady()&&Q.delete(Ue)}),Q.size===0){ee(C);return}setTimeout(Re,10)}je.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Dh=null;function ug(C){Dh&&Dh(C)}function yd(){Ns.stop()}function Md(){Ns.start()}let Ns=new Tm;Ns.setAnimationLoop(ug),typeof self<"u"&&Ns.setContext(self),this.setAnimationLoop=function(C){Dh=C,Oe.setAnimationLoop(C),C===null?Ns.stop():Ns.start()},Oe.addEventListener("sessionstart",yd),Oe.addEventListener("sessionend",Md),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(C,q);let te=Oe.enabled===!0&&Oe.isPresenting===!0,Q=T!==null&&(X===null||te)&&T.begin(E,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(q),q=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,q,X),A=ye.get(C,_.length),A.init(q),A.state.textureUnits=ie.getTextureUnits(),_.push(A),J.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),R.setFromProjectionMatrix(J,ui,q.reversedDepth),H=this.localClippingEnabled,k=ze.init(this.clippingPlanes,H),w=Me.get(C,v.length),w.init(),v.push(w),Oe.enabled===!0&&Oe.isPresenting===!0){let Ue=E.xr.getDepthSensingMesh();Ue!==null&&Nh(Ue,q,-1/0,E.sortObjects)}Nh(C,q,0,E.sortObjects),w.finish(),E.sortObjects===!0&&w.sort(De,Fe,q.reversedDepth),me=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,me&&tt.addToRenderList(w,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),k===!0&&ze.beginShadows();let ee=A.state.shadowsArray;if(Ke.render(ee,C,q),k===!0&&ze.endShadows(),(Q&&T.hasRenderPass())===!1){let Ue=w.opaque,Ce=w.transmissive;if(A.setupLights(),q.isArrayCamera){let ke=q.cameras;if(Ce.length>0)for(let Ye=0,rt=ke.length;Ye<rt;Ye++){let ut=ke[Ye];bd(Ue,Ce,C,ut)}me&&tt.render(C);for(let Ye=0,rt=ke.length;Ye<rt;Ye++){let ut=ke[Ye];Sd(w,C,ut,ut.viewport)}}else Ce.length>0&&bd(Ue,Ce,C,q),me&&tt.render(C),Sd(w,C,q)}X!==null&&B===0&&(ie.updateMultisampleRenderTarget(X),ie.updateRenderTargetMipmap(X)),Q&&T.end(E),C.isScene===!0&&C.onAfterRender(E,C,q),Pe.resetDefaultState(),L=-1,V=null,_.pop(),_.length>0?(A=_[_.length-1],ie.setTextureUnits(A.state.textureUnits),k===!0&&ze.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,v.pop(),v.length>0?w=v[v.length-1]:w=null,O!==null&&O.renderEnd()};function Nh(C,q,te,Q){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)A.pushLightProbeGrid(C);else if(C.isLight)A.pushLight(C),C.castShadow&&A.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||R.intersectsSprite(C)){Q&&ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);let Ue=oe.update(C),Ce=C.material;Ce.visible&&w.push(C,Ue,Ce,te,ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||R.intersectsObject(C))){let Ue=oe.update(C),Ce=C.material;if(Q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ue.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ue.copy(Ue.boundingSphere.center)),ue.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(Ce)){let ke=Ue.groups;for(let Ye=0,rt=ke.length;Ye<rt;Ye++){let ut=ke[Ye],Je=Ce[ut.materialIndex];Je&&Je.visible&&w.push(C,Ue,Je,te,ue.z,ut)}}else Ce.visible&&w.push(C,Ue,Ce,te,ue.z,null)}}let Re=C.children;for(let Ue=0,Ce=Re.length;Ue<Ce;Ue++)Nh(Re[Ue],q,te,Q)}function Sd(C,q,te,Q){let{opaque:ee,transmissive:Re,transparent:Ue}=C;A.setupLightsView(te),k===!0&&ze.setGlobalState(E.clippingPlanes,te),Q&&S.viewport(Y.copy(Q)),ee.length>0&&Ya(ee,q,te),Re.length>0&&Ya(Re,q,te),Ue.length>0&&Ya(Ue,q,te),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function bd(C,q,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Q.id]===void 0){let Je=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Q.id]=new zt(1,1,{generateMipmaps:!0,type:Je?Ut:En,minFilter:An,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Re=A.state.transmissionRenderTarget[Q.id],Ue=Q.viewport||Y;Re.setSize(Ue.z*E.transmissionResolutionScale,Ue.w*E.transmissionResolutionScale);let Ce=E.getRenderTarget(),ke=E.getActiveCubeFace(),Ye=E.getActiveMipmapLevel();E.setRenderTarget(Re),E.getClearColor(Se),Ee=E.getClearAlpha(),Ee<1&&E.setClearColor(16777215,.5),E.clear(),me&&tt.render(te);let rt=E.toneMapping;E.toneMapping=gi;let ut=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),A.setupLightsView(Q),k===!0&&ze.setGlobalState(E.clippingPlanes,Q),Ya(C,te,Q),ie.updateMultisampleRenderTarget(Re),ie.updateRenderTargetMipmap(Re),je.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let bt=0,Xt=q.length;bt<Xt;bt++){let Ht=q[bt],{object:wt,geometry:Mn,material:Ne,group:qn}=Ht;if(Ne.side===wn&&wt.layers.test(Q.layers)){let pt=Ne.side;Ne.side=xn,Ne.needsUpdate=!0,Td(wt,te,Q,Mn,Ne,qn),Ne.side=pt,Ne.needsUpdate=!0,Je=!0}}Je===!0&&(ie.updateMultisampleRenderTarget(Re),ie.updateRenderTargetMipmap(Re))}E.setRenderTarget(Ce,ke,Ye),E.setClearColor(Se,Ee),ut!==void 0&&(Q.viewport=ut),E.toneMapping=rt}function Ya(C,q,te){let Q=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Re=C.length;ee<Re;ee++){let Ue=C[ee],{object:Ce,geometry:ke,group:Ye}=Ue,rt=Ue.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),Ce.layers.test(te.layers)&&Td(Ce,q,te,ke,rt,Ye)}}function Td(C,q,te,Q,ee,Re){C.onBeforeRender(E,q,te,Q,ee,Re),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(E,q,te,Q,C,Re),ee.transparent===!0&&ee.side===wn&&ee.forceSinglePass===!1?(ee.side=xn,ee.needsUpdate=!0,E.renderBufferDirect(te,q,Q,ee,C,Re),ee.side=Kn,ee.needsUpdate=!0,E.renderBufferDirect(te,q,Q,ee,C,Re),ee.side=wn):E.renderBufferDirect(te,q,Q,ee,C,Re),C.onAfterRender(E,q,te,Q,ee,Re)}function Za(C,q,te){q.isScene!==!0&&(q=he);let Q=j.get(C),ee=A.state.lights,Re=A.state.shadowsArray,Ue=ee.state.version,Ce=be.getParameters(C,ee.state,Re,q,te,A.state.lightProbeGridArray),ke=be.getProgramCacheKey(Ce),Ye=Q.programs;Q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,Q.fog=q.fog;let rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;Q.envMap=xe.get(C.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",bi),Ye=new Map,Q.programs=Ye);let ut=Ye.get(ke);if(ut!==void 0){if(Q.currentProgram===ut&&Q.lightsStateVersion===Ue)return Ad(C,Ce),ut}else Ce.uniforms=be.getUniforms(C),O!==null&&C.isNodeMaterial&&O.build(C,te,Ce),C.onBeforeCompile(Ce,E),ut=be.acquireProgram(Ce,ke),Ye.set(ke,ut),Q.uniforms=Ce.uniforms;let Je=Q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=ze.uniform),Ad(C,Ce),Q.needsLights=mg(C),Q.lightsStateVersion=Ue,Q.needsLights&&(Je.ambientLightColor.value=ee.state.ambient,Je.lightProbe.value=ee.state.probe,Je.directionalLights.value=ee.state.directional,Je.directionalLightShadows.value=ee.state.directionalShadow,Je.spotLights.value=ee.state.spot,Je.spotLightShadows.value=ee.state.spotShadow,Je.rectAreaLights.value=ee.state.rectArea,Je.ltc_1.value=ee.state.rectAreaLTC1,Je.ltc_2.value=ee.state.rectAreaLTC2,Je.pointLights.value=ee.state.point,Je.pointLightShadows.value=ee.state.pointShadow,Je.hemisphereLights.value=ee.state.hemi,Je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Je.spotLightMatrix.value=ee.state.spotLightMatrix,Je.spotLightMap.value=ee.state.spotLightMap,Je.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=A.state.lightProbeGridArray.length>0,Q.currentProgram=ut,Q.uniformsList=null,ut}function wd(C){if(C.uniformsList===null){let q=C.currentProgram.getUniforms();C.uniformsList=jr.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function Ad(C,q){let te=j.get(C);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function fg(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;M.setFromMatrixPosition(q.matrixWorld);for(let te=0,Q=C.length;te<Q;te++){let ee=C[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(M))return ee}return null}function dg(C,q,te,Q,ee){q.isScene!==!0&&(q=he),ie.resetTextureUnits();let Re=q.fog,Ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?q.environment:null,Ce=X===null?E.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ot.workingColorSpace,ke=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ye=xe.get(Q.envMap||Ue,ke),rt=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Je=!!te.morphAttributes.position,bt=!!te.morphAttributes.normal,Xt=!!te.morphAttributes.color,Ht=gi;Q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ht=E.toneMapping);let wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Mn=wt!==void 0?wt.length:0,Ne=j.get(Q),qn=A.state.lights;if(k===!0&&(H===!0||C!==V)){let It=C===V&&Q.id===L;ze.setState(Q,C,It)}let pt=!1;Q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==qn.state.version||Ne.outputColorSpace!==Ce||ee.isBatchedMesh&&Ne.batching===!1||!ee.isBatchedMesh&&Ne.batching===!0||ee.isBatchedMesh&&Ne.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ne.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ne.instancing===!1||!ee.isInstancedMesh&&Ne.instancing===!0||ee.isSkinnedMesh&&Ne.skinning===!1||!ee.isSkinnedMesh&&Ne.skinning===!0||ee.isInstancedMesh&&Ne.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ne.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ne.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ne.instancingMorph===!1&&ee.morphTexture!==null||Ne.envMap!==Ye||Q.fog===!0&&Ne.fog!==Re||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ze.numPlanes||Ne.numIntersection!==ze.numIntersection)||Ne.vertexAlphas!==rt||Ne.vertexTangents!==ut||Ne.morphTargets!==Je||Ne.morphNormals!==bt||Ne.morphColors!==Xt||Ne.toneMapping!==Ht||Ne.morphTargetsCount!==Mn||!!Ne.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Ne.__version=Q.version);let ei=Ne.currentProgram;pt===!0&&(ei=Za(Q,q,ee),O&&Q.isNodeMaterial&&O.onUpdateProgram(Q,ei,Ne));let Ti=!1,as=!1,mr=!1,At=ei.getUniforms(),qt=Ne.uniforms;if(S.useProgram(ei.program)&&(Ti=!0,as=!0,mr=!0),Q.id!==L&&(L=Q.id,as=!0),Ne.needsLights){let It=fg(A.state.lightProbeGridArray,ee);Ne.lightProbeGrid!==It&&(Ne.lightProbeGrid=It,as=!0)}if(Ti||V!==C){S.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",C.projectionMatrix),At.setValue(G,"viewMatrix",C.matrixWorldInverse);let cs=At.map.cameraPosition;cs!==void 0&&cs.setValue(G,K.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),V!==C&&(V=C,as=!0,mr=!0)}if(Ne.needsLights&&(qn.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",qn.state.directionalShadowMap,ie),qn.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",qn.state.spotShadowMap,ie),qn.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",qn.state.pointShadowMap,ie)),ee.isSkinnedMesh){At.setOptional(G,ee,"bindMatrix"),At.setOptional(G,ee,"bindMatrixInverse");let It=ee.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),At.setValue(G,"boneTexture",It.boneTexture,ie))}ee.isBatchedMesh&&(At.setOptional(G,ee,"batchingTexture"),At.setValue(G,"batchingTexture",ee._matricesTexture,ie),At.setOptional(G,ee,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",ee._indirectTexture,ie),At.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",ee._colorsTexture,ie));let ls=te.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&W.update(ee,te,ei),(as||Ne.receiveShadow!==ee.receiveShadow)&&(Ne.receiveShadow=ee.receiveShadow,At.setValue(G,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&q.environment!==null&&(qt.envMapIntensity.value=q.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=NM()),as){if(At.setValue(G,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&pg(qt,mr),Re&&Q.fog===!0&&We.refreshFogUniforms(qt,Re),We.refreshMaterialUniforms(qt,Q,fe,ge,A.state.transmissionRenderTarget[C.id]),Ne.needsLights&&Ne.lightProbeGrid){let It=Ne.lightProbeGrid;qt.probesSH.value=It.texture,qt.probesMin.value.copy(It.boundingBox.min),qt.probesMax.value.copy(It.boundingBox.max),qt.probesResolution.value.copy(It.resolution)}jr.upload(G,wd(Ne),qt,ie)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(jr.upload(G,wd(Ne),qt,ie),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue(G,"center",ee.center),At.setValue(G,"modelViewMatrix",ee.modelViewMatrix),At.setValue(G,"normalMatrix",ee.normalMatrix),At.setValue(G,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let It=Q.uniformsGroups;for(let cs=0,gr=It.length;cs<gr;cs++){let Ed=It[cs];pe.update(Ed,ei),pe.bind(Ed,ei)}}return ei}function pg(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function mg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,q,te){let Q=j.get(C);Q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(C.texture).__webglTexture=q,j.get(C.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){let te=j.get(C);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,te=0){X=C,U=q,B=te;let Q=null,ee=!1,Re=!1;if(C){let Ce=j.get(C);if(Ce.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,Ce.__webglFramebuffer),Y.copy(C.viewport),$.copy(C.scissor),le=C.scissorTest,S.viewport(Y),S.scissor($),S.setScissorTest(le),L=-1;return}else if(Ce.__webglFramebuffer===void 0)ie.setupRenderTarget(C);else if(Ce.__hasExternalTextures)ie.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let rt=C.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&j.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(C)}}let ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);let Ye=j.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?Q=Ye[q][te]:Q=Ye[q],ee=!0):C.samples>0&&ie.useMultisampledRTT(C)===!1?Q=j.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[te]:Q=Ye,Y.copy(C.viewport),$.copy(C.scissor),le=C.scissorTest}else Y.copy(He).multiplyScalar(fe).floor(),$.copy(ht).multiplyScalar(fe).floor(),le=$e;if(te!==0&&(Q=z),S.bindFramebuffer(G.FRAMEBUFFER,Q)&&S.drawBuffers(C,Q),S.viewport(Y),S.scissor($),S.setScissorTest(le),ee){let Ce=j.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,te)}else if(Re){let Ce=q;for(let ke=0;ke<C.textures.length;ke++){let Ye=j.get(C.textures[ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ke,Ye.__webglTexture,te,Ce)}}else if(C!==null&&te!==0){let Ce=j.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ce.__webglTexture,te)}L=-1},this.readRenderTargetPixels=function(C,q,te,Q,ee,Re,Ue,Ce=0){if(!(C&&C.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke){S.bindFramebuffer(G.FRAMEBUFFER,ke);try{let Ye=C.textures[Ce],rt=Ye.format,ut=Ye.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!F.textureFormatReadable(rt)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(ut)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-Q&&te>=0&&te<=C.height-ee&&G.readPixels(q,te,Q,ee,Ae.convert(rt),Ae.convert(ut),Re)}finally{let Ye=X!==null?j.get(X).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,q,te,Q,ee,Re,Ue,Ce=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(ke=ke[Ue]),ke)if(q>=0&&q<=C.width-Q&&te>=0&&te<=C.height-ee){S.bindFramebuffer(G.FRAMEBUFFER,ke);let Ye=C.textures[Ce],rt=Ye.format,ut=Ye.type;if(C.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!F.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Je),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(q,te,Q,ee,Ae.convert(rt),Ae.convert(ut),0);let bt=X!==null?j.get(X).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,bt);let Xt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Zp(G,Xt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Je),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.deleteBuffer(Je),G.deleteSync(Xt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,te=0){let Q=Math.pow(2,-te),ee=Math.floor(C.image.width*Q),Re=Math.floor(C.image.height*Q),Ue=q!==null?q.x:0,Ce=q!==null?q.y:0;ie.setTexture2D(C,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Ue,Ce,ee,Re),S.unbindTexture()},this.copyTextureToTexture=function(C,q,te=null,Q=null,ee=0,Re=0){let Ue,Ce,ke,Ye,rt,ut,Je,bt,Xt,Ht=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(te!==null)Ue=te.max.x-te.min.x,Ce=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,rt=te.min.y,ut=te.isBox3?te.min.z:0;else{let qt=Math.pow(2,-ee);Ue=Math.floor(Ht.width*qt),Ce=Math.floor(Ht.height*qt),C.isDataArrayTexture?ke=Ht.depth:C.isData3DTexture?ke=Math.floor(Ht.depth*qt):ke=1,Ye=0,rt=0,ut=0}Q!==null?(Je=Q.x,bt=Q.y,Xt=Q.z):(Je=0,bt=0,Xt=0);let wt=Ae.convert(q.format),Mn=Ae.convert(q.type),Ne;q.isData3DTexture?(ie.setTexture3D(q,0),Ne=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),Ne=G.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),Ne=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let qn=S.getParameter(G.UNPACK_ROW_LENGTH),pt=S.getParameter(G.UNPACK_IMAGE_HEIGHT),ei=S.getParameter(G.UNPACK_SKIP_PIXELS),Ti=S.getParameter(G.UNPACK_SKIP_ROWS),as=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),S.pixelStorei(G.UNPACK_SKIP_ROWS,rt),S.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);let mr=C.isDataArrayTexture||C.isData3DTexture,At=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){let qt=j.get(C),ls=j.get(q),It=j.get(qt.__renderTarget),cs=j.get(ls.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,It.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let gr=0;gr<ke;gr++)mr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(C).__webglTexture,ee,ut+gr),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(q).__webglTexture,Re,Xt+gr)),G.blitFramebuffer(Ye,rt,Ue,Ce,Je,bt,Ue,Ce,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||j.has(C)){let qt=j.get(C),ls=j.get(q);S.bindFramebuffer(G.READ_FRAMEBUFFER,P),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,N);for(let It=0;It<ke;It++)mr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.__webglTexture,ee,ut+It):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,qt.__webglTexture,ee),At?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ls.__webglTexture,Re,Xt+It):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ls.__webglTexture,Re),ee!==0?G.blitFramebuffer(Ye,rt,Ue,Ce,Je,bt,Ue,Ce,G.COLOR_BUFFER_BIT,G.NEAREST):At?G.copyTexSubImage3D(Ne,Re,Je,bt,Xt+It,Ye,rt,Ue,Ce):G.copyTexSubImage2D(Ne,Re,Je,bt,Ye,rt,Ue,Ce);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else At?C.isDataTexture||C.isData3DTexture?G.texSubImage3D(Ne,Re,Je,bt,Xt,Ue,Ce,ke,wt,Mn,Ht.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ne,Re,Je,bt,Xt,Ue,Ce,ke,wt,Ht.data):G.texSubImage3D(Ne,Re,Je,bt,Xt,Ue,Ce,ke,wt,Mn,Ht):C.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,Je,bt,Ue,Ce,wt,Mn,Ht.data):C.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,Je,bt,Ht.width,Ht.height,wt,Ht.data):G.texSubImage2D(G.TEXTURE_2D,Re,Je,bt,Ue,Ce,wt,Mn,Ht);S.pixelStorei(G.UNPACK_ROW_LENGTH,qn),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt),S.pixelStorei(G.UNPACK_SKIP_PIXELS,ei),S.pixelStorei(G.UNPACK_SKIP_ROWS,Ti),S.pixelStorei(G.UNPACK_SKIP_IMAGES,as),Re===0&&q.generateMipmaps&&G.generateMipmap(Ne),S.unbindTexture()},this.initRenderTarget=function(C){j.get(C).__webglFramebuffer===void 0&&ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ie.setTextureCube(C,0):C.isData3DTexture?ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ie.setTexture2DArray(C,0):ie.setTexture2D(C,0),S.unbindTexture()},this.resetState=function(){U=0,B=0,X=null,S.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};var pf=new Map,mf=i=>(pf.has(i)||pf.set(i,new nt({color:i,roughness:.78})),pf.get(i));function Lt(i,e,t,n,s,r,o,a){let c=new Le(new gn(1,12,8),mf(a));return c.position.set(e,t,n),c.scale.set(s,r,o),c.castShadow=!0,i.add(c),c}function cr(i,e,t,n,s,r,o){let a=new et;a.position.set(e,t,n),i.add(a);let c=new Le(new Oo(s,r,4,8),mf(o));return c.position.y=-r/2,c.castShadow=!0,a.add(c),a}function Oi({shirt:i=12694426,pants:e=3819336,hair:t=3418917,scale:n=1,female:s=!1}={}){let r=new et;r.scale.setScalar(n);let o=13211251;Lt(r,0,1.19,0,.29,.39,.18,i),Lt(r,0,1.66,0,.19,.23,.19,o),Lt(r,0,1.8,-.025,.193,.12,.19,t),s&&Lt(r,0,1.63,-.11,.21,.25,.12,t),Lt(r,-.073,1.68,.169,.022,.017,.015,3156259),Lt(r,.073,1.68,.169,.022,.017,.015,3156259),Lt(r,0,1.62,.193,.03,.04,.04,o);for(let l of[-1,1])Lt(r,l*.184,1.66,0,.035,.055,.025,o),Lt(r,l*.073,1.686,.165,.036,.025,.017,15130322),Lt(r,l*.073,1.686,.181,.014,.016,.009,4470830),Lt(r,l*.074,1.733,.163,.039,.009,.013,t);Lt(r,0,1.566,.171,.05,.009,.008,10248530);let a=[cr(r,-.34,1.4,0,.085,.46,i),cr(r,.34,1.4,0,.085,.46,i)];a.forEach(l=>Lt(l,0,-.53,0,.067,.085,.065,o));let c=[cr(r,-.14,.84,0,.099,.35,e),cr(r,.14,.84,0,.099,.35,e)];return c.forEach(l=>{l.lower=cr(l,0,-.35,0,.085,.35,e),Lt(l.lower,0,-.4,.06,.105,.075,.175,3879984)}),{g:r,arms:a,legs:c,animate(l,h=!1,u=""){c.forEach((d,f)=>{d.rotation.x=h?Math.sin(l*9+f*Math.PI)*.65:u==="sit"?-Math.PI/2:0,d.lower.rotation.x=u==="sit"?Math.PI/2:h?Math.max(0,-Math.sin(l*9+f*Math.PI))*.6:0}),a.forEach((d,f)=>{d.rotation.x=h?-Math.sin(l*8+f*Math.PI)*.45:u==="read"?-1.15:u==="garden"?-.75+Math.sin(l*3)*.2:u==="cook"?-.7+Math.sin(l*3+f)*.2:0}),r.children[0].rotation.z=h?Math.sin(l*8)*.025:0}}}function gf(i=12423257){let e=new et;Lt(e,0,.47,0,.2,.23,.42,i),Lt(e,0,.65,.37,.22,.23,.23,i),Lt(e,0,.56,.57,.12,.09,.15,13350298),Lt(e,0,.59,.69,.07,.05,.045,2434853);for(let s of[-1,1])Lt(e,s*.17,.61,.38,.09,.22,.13,i),Lt(e,s*.09,.72,.55,.024,.024,.025,2238503);let t=[];for(let s of[-.14,.14])for(let r of[-.26,.25])t.push(cr(e,s,.36,r,.055,.23,i));let n=cr(e,0,.55,-.38,.055,.32,i);return n.rotation.x=1.6,{g:e,animate(s){t.forEach((r,o)=>r.rotation.x=Math.sin(s*9+o*Math.PI)*.5),n.rotation.z=Math.sin(s*12)*.7}}}function Im(i){let e=new et;Lt(e,0,0,0,.12,.075,.35,i),Lt(e,0,0,.22,.1,.07,.12,15655626);let t=new Le(new di(.14,.24,3),mf(i));return t.rotation.x=Math.PI/2,t.position.z=-.38,e.add(t),e}function xf(){let i=new et;Lt(i,0,.08,0,.28,.14,.36,4875584),Lt(i,0,.09,.38,.1,.09,.15,7898443);for(let e of[-.24,.24])for(let t of[-.23,.23])Lt(i,e,.02,t,.13,.035,.09,7767119);for(let e of[-.16,0,.16])Lt(i,0,.192,e,.13,.014,.1,6911053);return i}var Ge=Math.SQRT2*1.15,Lm=0,_f="flow";function Dm(i,e){return i>-25.5&&i<-10.5&&e>-20&&e<-6||i>-21.5&&i<-12.5&&e>15&&e<25}var Pn=2.1/Ge,_i=2.4/Ge;var it={x:-17.7,z:-11.7,x1:-18.35,x2:-17.05,z1:-12.4,z2:-11,exitX:-16.6},Es=[{y:-3.6,name:"\u5730\u4E0B\u4E00\u5C42"},{y:0,name:"\u4E00\u697C"},{y:3.6,name:"\u4E8C\u697C"},{y:7.2,name:"\u5929\u53F0"}];function vf(i,e,t=0){return i>it.x1-t&&i<it.x2+t&&e>it.z1-t&&e<it.z2+t}function Nm(i,e,t,n){let s=i-t/2,r=i+t/2,o=e-n/2,a=e+n/2;if(r<=it.x1||s>=it.x2||a<=it.z1||o>=it.z2)return[{x:i,z:e,w:t,d:n}];let c=Math.max(s,it.x1),l=Math.min(r,it.x2),h=Math.max(o,it.z1),u=Math.min(a,it.z2),d=[];for(let[f,g,x,p]of[[s,c,o,a],[l,r,o,a],[c,l,o,h],[c,l,u,a]])g-f>.001&&p-x>.001&&d.push({x:(f+g)/2,z:(x+p)/2,w:g-f,d:p-x});return d}var to=class{constructor(e=Es){this.floors=e,this.y=0,this.phase="idle",this.door=1,this.target=0,this.origin=0,this.passenger=!1,this.boarding=0,this.exiting=0}request(e,t){return this.phase!=="idle"||!this.floors.some(n=>n.y===e)||!this.floors.some(n=>n.y===t)||e===t?!1:(this.origin=e,this.target=t,this.boarding=this.exiting=0,this.phase=Math.abs(this.y-e)<.001?this.door===1?"board":"pickupOpen":"recallClose",this.passenger=this.phase==="board",!0)}update(e){e=Math.min(.1,Math.max(0,e));let t=(n,s,r)=>n+Math.sign(s-n)*Math.min(Math.abs(s-n),r);if(this.phase==="recallClose"||this.phase==="close")this.door=t(this.door,0,e*2),this.door||(this.phase=this.phase==="close"?"travel":"recall");else if(this.phase==="recall"||this.phase==="travel"){let n=this.phase==="recall"?this.origin:this.target;this.y=t(this.y,n,e*1.8),this.y===n&&(this.phase=this.phase==="recall"?"pickupOpen":"open")}else if(this.phase==="pickupOpen")this.door=t(this.door,1,e*2),this.door===1&&(this.passenger=!0,this.phase="board");else if(this.phase==="board")this.passenger=!0,this.boarding=Math.min(1,this.boarding+e/.65),this.boarding===1&&(this.phase="close");else if(this.phase==="open")this.door=t(this.door,1,e*2),this.door===1&&(this.phase="exit");else if(this.phase==="exit"&&(this.exiting=Math.min(1,this.exiting+e/.65),this.exiting===1))return this.phase="idle",this.passenger=!1,"arrived";return null}};function Um(i,e,t){for(let n of[.55,.85,1.15])for(let s of[Math.PI/2,-Math.PI/2,Math.PI,0]){let r={x:i.x+Math.sin(e+s)*n,y:i.y,z:i.z+Math.cos(e+s)*n};if(t(r.x,r.z,r.y))return r}return null}var eh=class{constructor(e){this.members=e,this.index=0,this.visited=new Set([0])}switchTo(e,t){return!Number.isInteger(e)||!this.members[e]?null:(this.members[this.index].position={...t},this.index=e,this.visited.add(e),{...this.members[e].position})}};var yf={x1:46,x2:70,z1:4,z2:26,height:3.6,roof:18},fn=Array.from({length:6},(i,e)=>({y:e*yf.height,name:e===5?"\u516C\u53F8\u5C4B\u9876\u5929\u53F0":`\u516C\u53F8${["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94"][e]}\u697C`})),Qt={x:65,z:7,exitX:65,exitZ:9.4,x1:64,x2:66,z1:6,z2:8},th=Array.from({length:5},(i,e)=>({x1:e%2===0?68:66,x2:e%2===0?69.4:67.4,z1:10,z2:22,base:e*yf.height,height:yf.height,reverse:e%2===0}));function no(i,e){return i>46&&i<70&&e>4&&e<26}function Mf(i,e){return i>34&&i<73&&e>2&&e<35||i>=0&&i<=43&&e>31&&e<33}function UM(i,e){return i>63.85&&i<66.15&&e>5.85&&e<8.15}function Fm(i,e,t){if(!no(i,e))return Math.abs(t)<.1?0:NaN;if(UM(i,e))return NaN;let n=th.filter(r=>i>=r.x1&&i<=r.x2&&e>=r.z1&&e<=r.z2).map(r=>r.base+(r.reverse?e-r.z1:r.z2-e)/(r.z2-r.z1)*r.height);return n.length?n.find(o=>Math.abs(o-t)<.25)??NaN:fn.find(r=>Math.abs(r.y-t)<.12)?.y??NaN}function nh(){let i=[{x1:46,x2:70,z1:4,z2:26}];for(let e of[Qt,...th.slice(0,2)])i=i.flatMap(t=>{let n=Math.max(t.x1,e.x1),s=Math.min(t.x2,e.x2),r=Math.max(t.z1,e.z1),o=Math.min(t.z2,e.z2);return n>=s||r>=o?[t]:[{x1:t.x1,x2:n,z1:t.z1,z2:t.z2},{x1:s,x2:t.x2,z1:t.z1,z2:t.z2},{x1:n,x2:s,z1:t.z1,z2:r},{x1:n,x2:s,z1:o,z2:t.z2}].filter(a=>a.x2>a.x1&&a.z2>a.z1)});return i}var ih=fn.slice(0,5).flatMap((i,e)=>[50,55,60].flatMap(t=>[12,21].map(n=>({x:t,z:n,y:i.y,floor:e}))));function Om(i,e){let t=new et;i.add(t);let n=new to(fn),s=new et;s.position.set(Qt.x,0,Qt.z),t.add(s);let r=new nt({color:7506306,metalness:.45,roughness:.35}),o=(l,h,u,d,f,g,x=t)=>{let p=new Le(new Wt(d,f,g),r);return p.position.set(l,h,u),x.add(p),p};o(0,-.07,0,1.9,.14,1.9,s),o(0,2.6,0,1.9,.1,1.9,s),o(0,1.25,-.96,1.9,2.5,.08,s);let a=fn.map(l=>({y:l.y,pair:[-1,1].map(h=>o(Qt.x+h*.48,l.y+1.25,8,.96,2.5,.06))}));for(let l of e){let h=document.createElement("canvas");h.width=1024,h.height=128;let u=h.getContext("2d");u.fillStyle="#e8e5d9",u.fillRect(0,0,1024,128),u.fillStyle="#304d43",u.font="bold 58px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(l.text,512,64,970);let d=new Dn(h);d.colorSpace=dt;let f=new Le(new pi(l.w,l.h),new jt({map:d,side:wn}));f.position.set(l.x,l.y,l.z),f.rotation.y=l.rotation||0,t.add(f)}let c=[];for(let l of fn.slice(0,5)){for(let u of ih.filter(d=>d.y===l.y&&d.z===12)){let d=Oi({shirt:[8232623,11705481,8492670][c.length%3],female:c.length%2===0});d.g.scale.set(1/Ge,1,1/Ge),d.g.position.set(u.x,l.y-.32,u.z-.94),t.add(d.g),c.push({actor:d,floor:l.y,desk:u})}let h=Oi({shirt:12167297});h.g.scale.set(1/Ge,1,1/Ge),t.add(h.g),c.push({actor:h,floor:l.y})}return{lift:n,root:t,staff:c,near(l){return fn.some(h=>Math.abs(h.y-l.y)<.1)&&Math.hypot(l.x-Qt.exitX,l.z-Qt.exitZ)<1.6},update(l,h,u){let d=n.update(l);s.position.y=n.y;for(let f of a)for(let g=0;g<2;g++)f.pair[g].position.x=Qt.x+(g?1:-1)*(.48+(Math.abs(n.y-f.y)<.01?n.door*.98:0));for(let f of c)if(f.actor.g.visible=u.x>33&&Math.abs(u.y-f.floor)<2.1,!!f.actor.g.visible)if(f.desk)f.actor.animate(h,!1,"sit"),f.actor.arms.forEach((g,x)=>{g.rotation.x=-.85+Math.sin(h*5+x*2)*.045});else{let g=h*.22+f.floor,x=56+Math.sin(g)*6,p=16.5+Math.cos(g)*.8;f.actor.g.position.set(x,f.floor,p),f.actor.g.rotation.y=Math.atan2(Math.cos(g)*6,-Math.sin(g)*.8),f.actor.animate(h,!0)}return d}}}function Bm(){let i=new et,e=[],t=new nt({color:8625795,metalness:.45,roughness:.35}),n=new nt({color:6845557,metalness:.7,roughness:.3}),s=new nt({color:2436139}),r=(a,c,l,h=t)=>{let u=new D(...a),d=new D(...c).sub(u),f=new Le(new Tn(l,l,d.length(),10),h);f.position.copy(u).addScaledVector(d,.5),f.quaternion.setFromUnitVectors(new D(0,1,0),d.normalize()),i.add(f)};for(let a of[-.67,.67]){let c=new et;c.position.set(0,.35,a);let l=new Le(new Ii(.33,.045,8,24),s);l.rotation.y=Math.PI/2,c.add(l);for(let h=0;h<12;h++){let u=h*Math.PI/6,d=new Le(new Tn(.006,.006,.64,5),n);d.rotation.x=u,c.add(d)}i.add(c),e.push(c)}for(let[a,c]of[[[0,.35,-.67],[0,.86,-.2]],[[0,.86,-.2],[0,.4,0]],[[0,.4,0],[0,.35,-.67]],[[0,.86,-.2],[0,.94,.48]],[[0,.94,.48],[0,.4,0]],[[0,.94,.48],[0,.35,.67]],[[0,.94,.48],[0,1.14,.45]],[[-.28,1.14,.45],[.28,1.14,.45]]])r(a,c,.025);let o=new Le(new Wt(.23,.07,.3),s);return o.position.set(0,.92,-.2),i.add(o),r([-.2,.4,0],[.2,.4,0],.02,n),i.scale.set(1/Ge,1,1/Ge),i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{root:i,wheels:e}}function zm(){let i=new et,e=new et;i.add(e),e.position.set(it.x,0,it.z);let t=new nt({color:6649202,metalness:.6,roughness:.3}),n=new nt({color:5857639,transparent:!0,opacity:.28,depthWrite:!1}),s=new jt({color:16770228});function r(a,c,l,h,u,d,f,g=i){let x=new Le(new Wt(h,u,d),f);return x.position.set(a,c,l),g.add(x),x}for(let a of[it.x1,it.x2])for(let c of[it.z1,it.z2])r(a,2.85,c,.045,13,.045,t);r(it.x1,2.85,it.z,.025,13,1.4,n);for(let a of[it.z1,it.z2])r(it.x,2.85,a,1.3,13,.025,n);r(0,-.07,0,1.25,.14,1.35,t,e),r(0,2.45,0,1.25,.08,1.35,t,e),r(0,2.39,0,.8,.025,.8,s,e);let o=Es.map(a=>{let c=[-1,1].map(l=>r(it.x2,a.y+1.16,it.z+l*.32,.055,2.32,.64,t));return r(it.x2+.02,a.y+1.3,it.z1-.12,.035,.2,.1,s),{y:a.y,pair:c}});return{root:i,update(a){e.position.y=a.y;for(let c of o)for(let l=0;l<2;l++)c.pair[l].position.z=it.z+(l?1:-1)*(.32+(Math.abs(a.y-c.y)<.01?a.door*.65:0))}}}function km(){let i=(n,s)=>{let r=document.createElement("canvas");r.width=1024,r.height=512,s(r.getContext("2d"));let o=new Dn(r);return o.colorSpace=dt,o.anisotropy=4,new nt({name:n,map:o,roughness:.85})},e=i("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",n=>{n.fillStyle="#f6f1e7",n.fillRect(0,0,1024,512),n.strokeStyle="#b8b6a466",n.lineWidth=1.2;for(let s=-512;s<1536;s+=110)n.beginPath(),n.moveTo(s,0),n.lineTo(s+320,512),n.stroke(),n.beginPath(),n.moveTo(s,0),n.lineTo(s-320,512),n.stroke();for(let s=0;s<1024;s+=5)n.fillStyle="#978b7520",n.fillRect(s,0,1,512)}),t=Array.from({length:3},(n,s)=>i("\u8D70\u5ECA\u6444\u5F71"+s,r=>{r.fillStyle="#e2e0d7",r.fillRect(0,0,1024,512),r.fillStyle="#a6a6a0",r.fillRect(0,350,1024,162);for(let o=0;o<9;o++){let a=70+o*110,c=80+(o*71+s*89)%250;r.fillStyle=["#404644","#707774","#919792"][(o+s)%3],r.fillRect(a,350-c,80,c),r.fillStyle="#d1d3ca";for(let l=370-c;l<340;l+=24)for(let h=a+10;h<a+75;h+=20)r.fillRect(h,l,8,12)}r.strokeStyle="#f6f4e8",r.lineWidth=10,r.strokeRect(20,20,984,472)}));return{\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8:e,...Object.fromEntries(t.map(n=>[n.name,n]))}}function Vm({box:i,cyl:e,ell:t,branch:n,mat:s,wood:r,oak:o,dark:a,glass:c,linen:l,lightmat:h,plaster:u,seats:d,obstacle:f,plant:g}){let x=s("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",16183783),p=s("\u8D70\u5ECA\u70DF\u718F\u6728",5653297),m=s("\u8D70\u5ECA\u6696\u767D\u9876",16315628);i(-1,3.618,-6,20,.03,3.8,p),i(9.75,3.618,-5,1.5,.03,1.8,p),i(10.75,3.618,-6,.5,.03,3.8,p);for(let v=-10.8;v<8.9;v+=.45)i(v,3.636,-6,.012,.006,3.8,r);i(-2,6.955,-6,18,.035,3.8,m),i(-2,6.925,-7.75,17.8,.018,.035,h);for(let[v,_,T]of[[-11,-3,-7],[-3,3,0]]){for(let[E,I]of[[v,T-Pn/2],[T+Pn/2,_]])i((E+I)/2,5.25,-7.902,I-E,3.2,.028,x),i((E+I)/2,3.73,-7.866,I-E,.16,.045,a);i(T,6.4,-7.902,Pn,1.2,.028,x)}for(let v=0;v<2;v++)for(let _=0;_<3;_++){let T=.95+_*.62,E=5.95-v*.82;i(T,E,-7.85,.53,.69,.05,a),i(T,E,-7.812,.46,.61,.016,s("\u8D70\u5ECA\u6444\u5F71"+(v+_)%3,10198934))}i(-4.5,5.25,-7.81,1.15,1.4,.12,o);for(let v of[-5.1,-3.9])i(v,5.25,-7.68,.07,1.5,.35,r);for(let v of[4.5,6])i(-4.5,v,-7.68,1.25,.07,.35,r);i(-4.5,5.94,-7.62,1.05,.02,.05,h),e(-4.5,4.68,-7.6,.12,.3,l),t(-4.5,4.94,-7.6,.15,.19,.12,l),i(16,3.5,-.5,10,.2,15,s("\u513F\u7AE5\u9732\u53F0\u77F3\u6750",13156783));for(let v of[-7.96,6.96])i(16,4.24,v,10,1.28,.06,c,!0),i(16,4.91,v,10,.05,.07,a);i(20.96,4.24,-.5,.06,1.28,15,c,!0),i(20.96,4.91,-.5,.07,.05,15,a);for(let[v,_]of[[-7.15,1.7],[1.45,11.1]])i(11.04,4.24,v,.06,1.28,_,c,!0),i(11.04,4.91,v,.07,.05,_,a);let y=s("\u513F\u7AE5\u8BBE\u65BD\u8584\u8377\u7EFF",8961456),b=s("\u6ED1\u68AF\u6674\u7A7A\u84DD",7974347,{roughness:.35}),M=s("\u6C99\u6C60\u7EC6\u6C99",14534548),w=s("\u513F\u7AE5\u8F6F\u57AB",14727570);i(16,3.635,-1,6,.05,7,w),i(17,4.82,-2.6,1.35,.12,1.25,y);for(let v of[16.4,17.6])for(let _ of[-3.1,-2.1])i(v,4.18,_,.07,1.16,.07,r);for(let v=0;v<6;v++)i(17,3.7+v*.2,-4+v*.18,1,.16,.2,y);let A=i(17,4.3,-.7,1.05,.09,3.1,b);A.rotation.x=.38;for(let v of[16.4,17.6])n([v,4.95,-2.15],[v,3.82,.75],.075,b),n([v,4.85,-3.15],[v,5.45,-3.15],.045,r);f(17,-1.2,1.65,5.8,3.6,1.9),i(14,3.83,3,2.2,.46,2.1,r,!0),i(14,4.07,3,2,.035,1.9,M),e(14.4,4.2,3.2,.13,.23,b),t(13.6,4.12,2.6,.15,.07,.14,y),i(19.3,4.05,4.9,2,.9,.65,o,!0);for(let v=0;v<4;v++)i(18.6+v*.46,4.25,5.25,.35,.4,.05,[y,b,w][v%3]),t(18.6+v*.46,4.62,4.9,.14,.14,.14,[y,b,w][v%3]);for(let v=0;v<4;v++)e(19,3.71,-3+v*.85,.26,.2,v%2?y:b);i(12.1,4.04,1,.65,.18,2.2,r,!0),i(11.83,4.4,1,.12,.7,2.2,r),d.push({x:12.1,z:1,y:3.6,rotation:Math.PI/2,type:"sit"}),g(12,5.7,.8,3.6),g(20,5.8,.7,3.6)}function Gm(){let i=(a,c=1024,l=768)=>{let h=document.createElement("canvas");h.width=c,h.height=l,a(h.getContext("2d"),c,l);let u=new Dn(h);return u.colorSpace=dt,u.anisotropy=4,u};function e(a,c,l,h,u,d,f=0){a.fillStyle=d,a.beginPath(),a.ellipse(c,l,h,u,f,0,Math.PI*2),a.fill()}let t=i((a,c,l)=>{a.fillStyle="#f7eddd",a.fillRect(0,0,c,l);for(let h=0;h<c;h+=8)a.strokeStyle=h%24?"#eee4d530":"#d6c3a035",a.beginPath(),a.moveTo(h,0),a.lineTo(h,l),a.stroke();for(let h=0;h<l;h+=6)a.fillStyle="#ffffff20",a.fillRect(0,h,c,1)}),n=i((a,c,l)=>{let h=a.createLinearGradient(0,0,0,l);h.addColorStop(0,"#cfebed"),h.addColorStop(1,"#fff2cb"),a.fillStyle=h,a.fillRect(0,0,c,l);for(let f=0;f<8;f++)e(a,90+f*275,690,330,130,f%2?"#b1d1ac":"#d3e0b4"),e(a,100+f*280,95+f%2*90,85,30,"#fffaf0");a.fillStyle="#466c62",a.font="bold 50px sans-serif",a.fillText("\u5B9D\u53EF\u68A6 \xB7 \u4E00\u8D77\u53BB\u5192\u9669",110,340),a.font="25px sans-serif",a.fillText("\u6BCF\u4E00\u5929\uFF0C\u90FD\u6709\u65B0\u7684\u53D1\u73B0",115,393);let u=1260,d=442;a.save(),a.translate(u,d),a.fillStyle="#e8b72b",a.beginPath(),a.moveTo(135,50),a.lineTo(240,-40),a.lineTo(220,50),a.lineTo(295,15),a.lineTo(265,110),a.lineTo(150,145),a.closePath(),a.fill(),e(a,0,100,104,120,"#f7d64d"),e(a,0,-10,112,95,"#ffe269");for(let f of[-1,1])e(a,f*65,-131,24,102,"#ffe269",f*.27),e(a,f*84,-204,20,32,"#343a3a",f*.27),e(a,f*40,-24,12,18,"#343a3a"),e(a,f*37,-29,4,6,"#fff"),e(a,f*78,16,21,16,"#e67962"),e(a,f*65,205,45,24,"#f7d64d");e(a,0,-2,6,4,"#343a3a"),a.strokeStyle="#76523f",a.lineWidth=4,a.beginPath(),a.moveTo(-22,29),a.quadraticCurveTo(-10,42,0,30),a.quadraticCurveTo(12,43,24,28),a.stroke(),a.restore();for(let[f,g,x]of[[1750,530,68],[865,595,45],[1940,200,40]])e(a,f,g,x,x,"#fff9ee"),a.fillStyle="#e9887e",a.beginPath(),a.arc(f,g,x,Math.PI,Math.PI*2),a.fill(),a.fillStyle="#536b69",a.fillRect(f-x,g-4,x*2,8),e(a,f,g,x*.24,x*.24,"#536b69"),e(a,f,g,x*.15,x*.15,"#fff9ee")},2048,768),s=i((a,c,l)=>{a.fillStyle="#faf2e5",a.fillRect(0,0,c,l),e(a,710,190,115,115,"#d7ad7a");for(let h=0;h<4;h++){a.fillStyle=["#d2d9c4","#aebdad","#7f9c92","#52766d"][h],a.beginPath(),a.moveTo(0,l);for(let u=0;u<=c;u+=8)a.lineTo(u,360+h*100+Math.sin(u*.007+h)*85);a.lineTo(c,l),a.fill()}a.fillStyle="#f6efdf",a.font="28px serif",a.fillText("\u5C71\u5C45 \xB7 \u56DB\u5B63",65,690)}),r=i((a,c,l)=>{a.fillStyle="#fcf4e8",a.fillRect(0,0,c,l);for(let h=0;h<5;h++){a.strokeStyle="#96815f",a.lineWidth=7,a.beginPath(),a.moveTo(500,690),a.quadraticCurveTo(500+h*35,400,170+h*150,130),a.stroke();for(let u=0;u<4;u++)e(a,240+h*115+(u%2?40:-35),220+u*100,65,24,["#b1bda3","#819c89","#cabd96"][h%3],h*.5-.8)}a.fillStyle="#6b7a66",a.font="28px serif",a.fillText("\u53F6\u5F71 \xB7 \u6162\u65F6\u5149",65,690)}),o=(a,c)=>new nt({name:a,map:c,roughness:.88});return{...km(),\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8:o("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",t),\u5B9D\u53EF\u68A6\u5899\u5E03:o("\u5B9D\u53EF\u68A6\u5899\u5E03",n),\u5C71\u5C45\u6302\u753B:o("\u5C71\u5C45\u6302\u753B",s),\u690D\u7269\u6302\u753B:o("\u690D\u7269\u6302\u753B",r)}}function Hm({box:i,mat:e}){let t=e("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",16248285),n=e("\u5B9D\u53EF\u68A6\u5899\u5E03",14216423),s=e("\u6302\u753B\u6D45\u6A61\u6728\u6846",12689787),r=e("\u5C71\u5C45\u6302\u753B",11782579),o=e("\u690D\u7269\u6302\u753B",12241846);i(-3.105,5.3,-13,.025,3.2,9.8,t),i(3.105,5.3,-13.5,.025,3.2,8.7,t),i(2.895,5.3,-13,.025,3.2,9.6,t),i(2.875,5.3,-14.45,.015,3.2,5.7,n),i(-2.895,5.3,-13,.025,3.2,9.6,t),i(-20.8,1.72,3.8,.024,3.2,3.5,t),i(20.8,1.72,3.8,.024,3.2,3.5,t),i(-13.2,-1.95,-12.905,3.5,3.1,.025,t),i(-20.6,-1.95,-13.105,3.5,3.1,.025,t);function a(c,l,h,u,d,f=!1,g=r){i(c,l,h,f?.065:u+.12,d+.12,f?u+.12:.065,s),i(c+(f?.043:0),l,h+(f?0:.043),f?.018:u,d,f?u:.018,g)}i(-3.14,5.7,-15.35,.065,1.02,1.47,s),i(-3.183,5.7,-15.35,.018,.9,1.35,o),a(-20.73,1.9,3.8,1.8,1.15,!0),i(20.7,1.9,3.8,.06,1.28,1.92,s),i(20.657,1.9,3.8,.018,1.15,1.8,o),a(-13.2,-1.8,-12.86,1.45,.9,!1,r),a(3.5,1.9,-17.45,1.35,.9,!1,o)}var Sf=[[-7,-12,3.6],[0,-12,3.6],[5,-14,3.6],[-16,0,0],[-16,-13,0],[16,0,0],[15,-5.3,0],[0,-10,0],[-6,-14,0],[5,-13,0],[-20,-16,-3.6],[-14,-16,-3.6],[-20,-10,-3.6],[-14,-10,-3.6],[-17,20,0]];function Wm(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,glass:h,plaster:u,lightmat:d,architecture:f,seats:g,obstacle:x,sofa:p,table:m,chair:y,books:b,plant:M,rug:w}=i,A=r("\u536B\u6D74\u767D\u74F7",15920869,{roughness:.25}),v=r("\u536B\u6D74\u4E94\u91D1",10332588,{roughness:.2,metalness:.8}),_=r("\u536B\u6D74\u7070\u77F3",11977151,{roughness:.35}),T=r("\u6536\u7EB3\u7EC7\u7269",8623498),E=r("\u73A9\u5177\u7C89",15184569),I=r("\u73A9\u5177\u9EC4",15252311);function O(U,B,X,L=0,V=1.1,Y=.55){e(U,L+V/2,B,X,V,Y,a,!0);for(let $=0;$<Math.ceil(X/.55);$++){let le=U-X/2+($+.5)*X/Math.ceil(X/.55);e(le,L+V/2,B+Y/2+.012,.015,V-.08,.015,l),e(le+.1,L+V*.65,B+Y/2+.03,.12,.025,.03,v)}}function z(U,B,X,L,V=1.8,Y=!1,$=0){let le=f.children.length;e(U,L+V/2,B,X,V,.12,o);for(let Se of[U-X/2,U+X/2])e(Se,L+V/2,B+.2,.06,V,.5,a);for(let Se=0;Se<4;Se++){e(U,L+.1+Se*V/4,B+.2,X,.06,.5,a);for(let Ee=0;Ee<5;Ee++){let ne=U-X*.38+Ee*X*.19;Y?(t(ne,L+.25+Se*V/4,B+.22,.1,.12,.09,Ee%2?E:I),e(ne,L+.15+Se*V/4,B+.22,.16,.06,.17,T)):e(ne,L+.28+Se*V/4,B+.2,.08,.28,.23,[T,c,o][Ee%3])}}if($){let Se=new et;for(let Ee of f.children.slice(le))Ee.position.x-=U,Ee.position.z-=B,Se.add(Ee);Se.position.set(U,0,B),Se.rotation.y=$,f.add(Se)}x(U+Math.sin($)*.2,B+Math.cos($)*.2,$?.5:X,$?X:.5,L,V)}e(4.85,3.617,-13.5,3.5,.03,8.8,_),e(6.65,5.3,-13.5,.15,3.4,9,u,!0);for(let[U,B]of[[3,5-Pn/2],[5+Pn/2,6.65]])e((U+B)/2,5.3,-9,B-U,3.4,.15,u,!0);e(5,6.4,-9,Pn,1.2,.15,u,!0),e(4.2,3.63,-10.25,1.65,.06,1.7,_),e(5.02,4.6,-10.6,.035,2,1,h,!0),s([3.22,4.6,-10],[3.22,6.1,-10],.025,v),s([3.22,6.1,-10],[3.8,6.1,-10],.025,v),n(3.8,6.08,-10,.19,.035,v),n(3.75,3.67,-10.25,.08,.015,l),O(3.85,-12.1,1,3.6,.95,.85),e(3.85,4.08,-11.66,.92,.85,.025,A);let P=n(3.85,4.05,-11.625,.28,.035,v);P.rotation.x=Math.PI/2;let N=n(3.85,4.05,-11.6,.21,.035,l);N.rotation.x=Math.PI/2,e(3.9,4.4,-11.61,.29,.09,.03,l);for(let U=0;U<3;U++)e(3.85,4.6+U*.075,-12.1,.65,.065,.4,U%2?c:T);n(3.9,3.91,-10,.23,.6,T);for(let U=0;U<4;U++)e(3.9,4.21+U*.055,-10,.34,.05,.28,c);e(3.18,5.1,-12.5,.05,.7,.8,v);for(let U of[-12.7,-12.3])e(3.25,4.8,U,.045,.6,.28,c);e(-.6,3.81,-15.7,2.4,.42,3.8,a,!0),e(-.6,4.055,-15.7,2.3,.07,3.7,r("\u69BB\u69BB\u7C73\u8349\u7F16",12105354)),e(-.6,4.17,-15.7,2.05,.17,3.5,c);for(let U of[-1.38,-.6,.18])e(U,3.81,-13.775,.7,.27,.025,o),e(U,3.84,-13.75,.15,.02,.025,l);g.push({x:-.6,z:-15.7,y:3.6,rotation:0,type:"lie"}),z(-2.83,-11.8,2.6,3.6,1.8,!1,Math.PI/2),z(2.83,-12.1,2.4,3.6,1.2,!0,-Math.PI/2),m(1.85,-17.2,1.5,.8,3.6),y(1.85,-16.5,Math.PI,3.6),e(1.85,4.43,-17.2,.42,.025,.3,c),p(-5.2,-12.5,Math.PI/2,3.6),m(-4,-12.5,.7,1.35,3.6),e(-3.2,4.05,-12.5,.4,.9,2,o,!0),e(-3.2,5.15,-12.5,.07,1,1.65,l),e(-3.245,5.15,-12.5,.015,.91,1.53,r("\u7535\u89C6\u753B\u9762",7574929)),M(-3.7,-17,.7,3.6),e(-9.4,3.72,-12,1.1,.24,2,l,!0),e(-9.4,3.86,-12,.85,.035,1.75,T);for(let U of[-9.86,-8.94])s([U,3.85,-12.85],[U,4.8,-12.85],.035,v);e(-9.4,4.8,-12.85,1,.05,.06,v),e(-9.4,4.94,-12.88,.55,.25,.045,l);for(let U of[-15.2,-14.6]){s([-4.25,3.88,U],[-3.65,3.88,U],.035,v);for(let B of[-4.23,-3.67])t(B,3.88,U,.12,.14,.14,l)}w(-4,-16,1.4,2,3.6),e(-16,3.5,-6,10,.2,26,r("\u9633\u53F0\u9632\u6ED1\u77F3",12170403));for(let U of[-18.95,6.95])e(-16,4.17,U,10,1.15,.06,h,!0),e(-16,4.77,U,10,.05,.08,l);e(-20.95,4.17,-6,.06,1.15,26,h,!0),e(-20.95,4.77,-6,.08,.05,26,l);for(let[U,B]of[[(-29-_i/2)/2,9-_i/2],[(-10+_i/2+7)/2,17-_i/2]])e(-11.05,4.17,U,.06,1.15,B,h,!0),e(-11.05,4.77,U,.08,.05,B,l);m(-16,-6,2.1,1.1,3.6),y(-16,-4.9,Math.PI,3.6),y(-16,-7.1,0,3.6),g.push({x:-16,z:-4.9,y:3.6,rotation:Math.PI,type:"sit"});for(let[U,B]of[[-20,-17],[-20,5],[-12,5]])M(U,B,1.1,3.6);n(-16,4.46,-6,.12,.16,A);for(let U of[-16.4,-15.6])n(U,4.42,-6,.07,.1,A);p(-18,1,Math.PI,3.6),m(-18,-.2,1.3,.7,3.6),O(19,-5.5,2.2),z(19,-6.4,2.6,0,2.25),M(20,4,.9),O(-18,5.9,3),O(-19,-16.9,2,0,1.1),O(3.5,-17.4,2.1),M(3,-5.3,.65),O(18,5.8,3.2),z(-12,-18.1,1.2,-3.6,2),O(-12.1,-8.1,1.2,-3.6,1);for(let[U,B,X]of[[19,-5.5,0],[-18,5.9,0],[3.5,-17.4,0],[-12.1,-8.1,-3.6]])n(U,X+1.2,B,.11,.22,A),s([U,X+1.25,B],[U+.13,X+1.65,B],.015,o),t(U+.13,X+1.65,B,.17,.09,.08,T);for(let[U,B,X]of Sf)e(U,X+3.02,B,1.4,.07,.6,l),e(U,X+2.975,B,1.3,.025,.5,d);for(let U of[-20,-12])for(let B of[-15,-5,5])e(U,3.98,B,.16,.65,.16,l),e(U,4.25,B,.18,.15,.18,d)}var Ea=new D;function si(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ea.copy(e),Ea[n]=0,Ea.normalize();let l=.5*o/(o+a),h=1-Ea.angleTo(i)/c;return Math.sign(Ea[t])===1?h*l:a/(o+a)+l+l*(1-h)}var os=class i extends Wt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new D,l=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new D,p=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(c.fromArray(u,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),u[m+0]=h.x*Math.sign(c.x)+l.x*r,u[m+1]=h.y*Math.sign(c.y)+l.y*r,u[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[y+0]=si(x,l,"z","y",r,n),f[y+1]=1-si(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-si(x,l,"z","y",r,n),f[y+1]=1-si(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-si(x,l,"x","z",r,e),f[y+1]=si(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-si(x,l,"x","z",r,e),f[y+1]=1-si(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-si(x,l,"x","y",r,e),f[y+1]=1-si(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=si(x,l,"x","y",r,e),f[y+1]=1-si(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Xm({box:i,ell:e,cyl:t,mat:n,architecture:s,seats:r,obstacle:o}){let a=n("\u4E3B\u9898\u5976\u6CB9\u767D",16773083,{roughness:.38}),c=n("\u4E3B\u9898\u6A31\u82B1\u7C89",15247805),l=n("\u4E3B\u9898\u6DE1\u7D2B",12101080),h=n("\u4E3B\u9898\u6674\u7A7A\u84DD",11128800),u=n("\u4E3B\u9898\u9999\u69DF\u91D1",13083239,{metalness:.65,roughness:.28}),d=n("\u4E3B\u9898\u6696\u706F\u5E26",16770737,{emissive:16767131,emissiveIntensity:2}),f=n("\u4E3B\u9898\u70AD\u9ED1",2499884),g=n("\u76AE\u5361\u4E18\u9EC4",16764725),x=n("\u7CBE\u7075\u7403\u7EA2",15158089);function p(v,_,T,E,I,O,z){let P=new Le(new os(E,I,O,3,Math.min(E,I,O)*.24),z);return P.position.set(v,_,T),P.castShadow=P.receiveShadow=!0,s.add(P),P}function m(v,_,T,E){let I=new Hr;for(let z=0;z<10;z++){let P=z*Math.PI/5+Math.PI/2,N=z%2?E*.44:E,U=Math.cos(P)*N,B=Math.sin(P)*N;z===0?I.moveTo(U,B):I.lineTo(U,B)}I.closePath();let O=new Le(new Yo(I,{depth:.025,bevelEnabled:!1}),d);O.position.set(v,_,T),s.add(O)}let y=-3.6;i(-20.2,y+.018,-10.1,4.15,.028,5.45,n("KTV\u6D45\u8272\u77F3\u5730\u9762",15655391,{roughness:.3}));for(let v=0;v<5;v++)for(let _=0;_<3;_++)p(-21.85+v*.72,y+.58+_*.91,-12.8,.7,.89,.1,[c,h,a,l,a][v]);for(let v of[-22.17,-18.22])p(v,y+1.6,-12.68,.04,2.9,.04,d);p(-20.2,y+3.06,-12.65,3.95,.045,.045,d);for(let v=0;v<5;v++)p(-21.6+v*.68,y+.48,-8.8,.72,.52,1.03,a),p(-21.6+v*.68,y+.98,-8.35,.73,.85,.38,a),e(-21.6+v*.68,y+.86,-8.64,.25,.23,.14,v%2?l:c);o(-20.25,-8.65,3.7,1.25,y,1.45),r.push({x:-20.3,z:-8.9,y,rotation:Math.PI,type:"sit"}),p(-20.4,y+.71,-10.5,1.7,.12,.75,a);for(let v of[-21.1,-19.7])for(let _ of[-10.78,-10.22])t(v,y+.34,_,.027,.65,u);o(-20.4,-10.5,1.7,.75,y,.8),p(-20.3,y+.38,-12.15,2.9,.7,.55,a),o(-20.3,-12.15,2.9,.55,y,.8),i(-20.3,y+1.65,-12.43,2.75,1.5,.1,f),i(-20.3,y+1.65,-12.367,2.6,1.35,.018,n("\u7CD6\u679C\u70B9\u6B4C\u5C4F",16777215,{emissive:14991310,emissiveIntensity:.5}));for(let v=0;v<9;v++){let _=-22.2+v*.44,T=y+2.65-Math.sin(v/8*Math.PI)*.35;if(m(_,T,-7.18,.085),v<8){let E=i(_+.22,T-.035,-7.19,.46,.015,.015,u);E.rotation.z=-Math.cos(v/8*Math.PI)*.12}}p(-.6,4.3,-15.3,2.05,.09,2.3,h);let b=(v,_,T,E)=>{e(v,_,T,E,E,E,a);let I=new Le(new gn(E,20,12,0,Math.PI*2,0,Math.PI/2),x);I.position.set(v,_,T),s.add(I);let O=new Le(new Ii(E,.025,6,24),f);O.rotation.x=Math.PI/2,O.position.set(v,_,T),s.add(O),e(v,_,T+E,.1,.1,.04,f),e(v,_,T+E+.032,.06,.06,.02,a)};b(-.6,5.23,-17.48,.58),p(-.6,5.18,-17.78,3.8,2.25,.12,h);for(let v of[-2.2,1])m(v,5.7,-17.69,.18);let M=-.05,w=-15.25;e(M,4.61,w,.28,.35,.23,g),e(M,4.98,w,.3,.28,.24,g);for(let v of[-1,1]){let _=e(M+v*.19,5.34,w,.07,.3,.065,g);_.rotation.z=-v*.22,e(M+v*.24,5.57,w,.052,.09,.06,f),e(M+v*.115,5.04,w+.22,.035,.042,.025,f),e(M+v*.22,4.94,w+.19,.06,.05,.025,x),e(M+v*.2,4.38,w+.1,.12,.08,.16,g)}for(let v=0;v<3;v++)b(2.6,4.98,-12.8+v*.62,.18);let A=t(0,3.622,-10.7,1.32,.03,x);t(0,3.64,-10.7,.38,.025,a),i(0,3.654,-10.7,2.64,.014,.09,f)}function qm(i){let e=document.createElement("canvas");e.width=768,e.height=432;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,768,432);n.addColorStop(0,"#f2b8ce"),n.addColorStop(1,"#b7c9ec"),t.fillStyle=n,t.fillRect(0,0,768,432),t.fillStyle="#574b6b",t.font="bold 32px sans-serif",t.fillText("\u7CD6\u679C\u661F\u5149 \xB7 \u5BB6\u5EAD\u6B22\u5531",40,55),t.font="22px sans-serif",["\u4EB2\u5B50\u513F\u6B4C","\u6D41\u884C\u91D1\u66F2","\u7ECF\u5178\u8001\u6B4C","\u6211\u7684\u6B4C\u5355","\u6B22\u4E50\u5408\u5531","\u8F7B\u677E\u4F34\u594F"].forEach((r,o)=>{let a=143+o%3*238,c=155+Math.floor(o/3)*150;t.fillStyle="#fff0dc",t.beginPath(),t.arc(a,c,53,0,Math.PI*2),t.fill(),t.fillStyle="#6a597a",t.textAlign="center",t.fillText(["\u266B","\u266A","\u2605"][o%3],a,c+10),t.font="22px sans-serif",t.fillText(r,a,c+85)});let s=new Dn(e);s.colorSpace=dt,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.map=s,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.needsUpdate=!0}function FM(i,e,t,n=.12){let s=Math.hypot(i,e),r=Math.min(1,s/Math.max(1,t)),o=Math.max(0,(r-n)/(1-n));return{right:s?i/s*o:0,forward:s?-e/s*o:0,x:s?i/s*r*t:0,y:s?e/s*r*t:0}}function Ym(i,e){let t=null,n=null,s={right:0,forward:0};function r(){let a=t;t=null,s.right=s.forward=0,e.style.transform="translate(0px, 0px)",i.dataset.active="false",a!==null&&i.hasPointerCapture(a)&&i.releasePointerCapture(a)}function o(a){if(a.pointerId!==t)return;a.preventDefault();let c=FM(a.clientX-n.x,a.clientY-n.y,n.radius);s.right=c.right,s.forward=c.forward,e.style.transform=`translate(${c.x}px, ${c.y}px)`}i.addEventListener("pointerdown",a=>{if(t!==null||a.button>0)return;a.preventDefault();let c=i.getBoundingClientRect();n={x:c.left+c.width/2,y:c.top+c.height/2,radius:c.width*.32},t=a.pointerId,i.setPointerCapture(t),i.dataset.active="true",o(a)}),i.addEventListener("pointermove",o);for(let a of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(a,c=>{c.pointerId===t&&r()});return{state:s,reset:r}}var Cs=[...[["masterDoor","\u4E3B\u5367\u623F\u95E8",-7,-8,"x",Pn],["childDoor","\u513F\u7AE5\u623F\u95E8",0,-8,"x",Pn],["bathDoor","\u536B\u6D74\u623F\u95E8",5,-9,"x",Pn],["balconyDoor","\u4E3B\u5367\u9633\u53F0\u95E8",-11,-10,"z",_i]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,z:n,axis:s,width:r,height:2.2,y:3.6,open:!0,angle:1,interior:!0})),{id:"gate",name:"\u5EAD\u9662\u5927\u95E8",x:0,z:30,axis:"x",width:12,height:2.5,y:0,open:!0,angle:1},{id:"basementDoor",name:"\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8",x:-22.4,z:-18,axis:"z",width:1.8,height:2.5,y:-3.6,open:!0,angle:1}];function Zm(i,e,t){return Cs.some(n=>{if(Math.abs(t-n.y)>=2)return!1;if(!n.interior)return n.angle<.97&&(n.axis==="x"?Math.abs(i-n.x)<n.width/2+.15&&Math.abs(e-n.z)<.25:Math.abs(i-n.x)<.25&&Math.abs(e-n.z)<n.width/2+.15);let s=n.interior?1:n.axis==="x"?2:1,r=n.width/s;for(let o=0;o<s;o++){let a=o===0?-1:1,c=(n.axis==="x"?-a:n.id==="balconyDoor"?-1:1)*n.angle*Math.PI/2,l=n.axis==="x"?n.x+a*n.width/2:n.x,h=n.axis==="x"?n.z:n.z-n.width/2,u=i-l,d=e-h,f=u*Math.cos(c)-d*Math.sin(c),g=u*Math.sin(c)+d*Math.cos(c);if(n.axis==="x"?Math.abs(f+a*r/2)<r/2+.14&&Math.abs(g)<.18:Math.abs(g-r/2)<r/2+.14&&Math.abs(f)<.18)return!0}return!1})}function Km(i,e){let t=Cs.find(n=>n.id===i);return!t||t.open&&(t.axis==="x"?Math.abs(e.x-t.x)<t.width/2+.3&&Math.abs(e.z-t.z)<1.1:Math.abs(e.x-t.x)<1.1&&Math.abs(e.z-t.z)<t.width/2+.3)&&Math.abs(e.y-t.y)<2?!1:(t.open=!t.open,!0)}function Jm(i){let e=new et;i.add(e);let t=new nt({color:11413281,roughness:.5}),n=new nt({color:13870926,metalness:.5,roughness:.4}),s=new nt({color:2637112}),r=new nt({color:16764784,emissive:16755769,emissiveIntensity:1.7});function o(f,g,x,p,m,y,b,M=e){let w=new Le(new Wt(p,m,y),b);return w.position.set(f,g,x),w.castShadow=w.receiveShadow=!0,M.add(w),w}function a(f,g,x,p,m,y=e){let b=new Le(new gn(p,20,14),m);return b.position.set(f,g,x),b.castShadow=!0,y.add(b),b}function c(f,g,x,p,m,y,b=!1,M=0){let w=document.createElement("canvas");w.width=b?128:768,w.height=b?768:128;let A=w.getContext("2d");A.fillStyle="#a41919",A.fillRect(0,0,w.width,w.height),A.strokeStyle="#dcb971",A.lineWidth=7,A.strokeRect(7,7,w.width-14,w.height-14),A.fillStyle="#ffe6a1",A.textAlign="center",A.textBaseline="middle",A.font=(b?"75":"74")+'px "Songti SC",serif',b?[...f].forEach((T,E)=>A.fillText(T,64,58+E*650/(f.length-1))):A.fillText(f,384,64);let v=new Dn(w);v.colorSpace=dt;let _=new Le(new pi(m,y),new nt({map:v,roughness:.75,side:wn}));_.position.set(g,x,p),_.rotation.y=M,e.add(_)}let l=[];for(let f of Cs){let g=f.interior?1:f.axis==="x"?2:1;for(let x=0;x<g;x++){let p=new et,m=x===0?-1:1,y=f.width/g;if(e.add(p),f.interior)f.axis==="x"?(p.position.set(f.x+m*f.width/2,f.y,f.z),o(-m*y/2,1.1,0,y,2.2,.08,s,p),o(-m*(y-.17),1.15,.065,.055,.23,.05,n,p)):(p.position.set(f.x,f.y,f.z-f.width/2),o(0,1.1,y/2,.08,2.2,y,s,p),o(-.07,1.15,y-.17,.045,.23,.055,n,p));else if(f.axis==="x"){p.position.set(f.x+m*f.width/2,f.y,f.z);for(let b=0;b<14;b++)o(-m*(b+.5)*y/14,1.15,0,.06,2.3,.09,s,p);o(-m*y/2,.45,0,y,.55,.1,s,p),o(-m*y/2,2.35,0,y,.09,.12,n,p)}else p.position.set(f.x,f.y,f.z-f.width/2),o(0,1.2,y/2,.1,2.4,y,s,p),o(-.08,1.1,y-.2,.06,.25,.045,n,p);l.push({d:f,pivot:p,sign:m})}}for(let f of[-6.4,6.4])o(f,1.7,30,.65,3.4,.65,s),a(f,3.85,30,.45,t),o(f,3.35,30,.05,.35,.05,n);o(0,3.3,30,13.5,.25,.9,s),c("\u6625\u56DE\u5927\u5730\u798F\u6EE1\u95E8",6.4,1.7,30.34,.46,2.5,!0),c("\u559C\u5165\u534E\u5802\u5BB6\u5174\u65FA",-6.4,1.7,30.34,.46,2.5,!0),c("\u9616\u5BB6\u6B22\u4E50",0,3.3,30.47,3.6,.48),c("\u8FCE\u6625\u63A5\u798F",0,2.98,-3.85,2.3,.4),c("\u5BB6\u548C\u4E07\u4E8B\u5174",-2.75,1.65,-3.85,.32,2.3,!0),c("\u4EBA\u987A\u767E\u4E1A\u65FA",2.75,1.65,-3.85,.32,2.3,!0);for(let f of[-9,-5,5,9])a(f,2.65,-2.5,.3,t),o(f,2.14,-2.5,.035,.4,.035,n);for(let f of[-32.72,32.72])for(let g of[-14,-4,6,16,26])o(f,1.35,g,.16,.5,.24,s),o(f+(f<0?.09:-.09),1.35,g,.06,.3,.2,r);for(let f of[-27,-18,-9,9,18,27])o(f,1.35,29.75,.28,.48,.14,s),o(f,1.35,29.66,.22,.3,.04,r);let h=new et;e.add(h);let u=new nt({color:15987952,roughness:1});for(let f of[-3,3]){a(f,.53,25,.55,u,h),a(f,1.2,25,.4,u,h),a(f,1.76,25,.3,u,h),o(f,2.08,25,.62,.08,.62,s,h),o(f,2.23,25,.4,.28,.4,s,h);for(let p of[-.1,.1])a(f+p,1.82,25+.275,.028,s,h);let x=new Le(new di(.07,.25,12),n);x.rotation.x=Math.PI/2,x.position.set(f,1.72,25+.36),h.add(x),o(f,1.48,25,.69,.13,.69,t,h);for(let p of[-1,1]){let m=o(f+p*.55,1.3,25,.65,.045,.045,s,h);m.rotation.z=p*.3}}function d(f,g){h.visible=g;for(let x of Cs)x.angle=vn.damp(x.angle,x.open?1:0,6,f);for(let x of l)x.pivot.rotation.y=(x.d.axis==="x"?x.d.interior?-x.sign:x.sign:x.d.id==="balconyDoor"?-1:1)*x.d.angle*Math.PI/2}return d(0,!1),{update:d,group:e}}function OM(){return new Promise(i=>{typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:400}):setTimeout(i,24)})}var sh=class{constructor({yieldWork:e=OM,onChange:t=()=>{}}={}){this.tasks=[],this.running=!1,this.yieldWork=e,this.onChange=t}add(e,t,{when:n=()=>!0,priority:s=10}={}){if(this.tasks.some(r=>r.id===e))throw Error("\u91CD\u590D\u7D20\u6750\u4EFB\u52A1 "+e);this.tasks.push({id:e,load:t,when:n,priority:s,state:"pending"})}async update(e){if(this.running)return;let t=this.tasks.filter(n=>n.state==="pending"&&n.when(e)).sort((n,s)=>n.priority-s.priority)[0];if(t){this.running=!0,t.state="loading",this.onChange(this.stats);try{await this.yieldWork(),await t.load(),t.state="done"}catch(n){t.state="error",t.error=String(n),console.warn("\u7D20\u6750\u6682\u672A\u8F7D\u5165:",t.id,n)}finally{this.running=!1,this.onChange(this.stats)}}}retry(){for(let e of this.tasks)e.state==="error"&&(e.state="pending");this.onChange(this.stats)}get stats(){return{total:this.tasks.length,loaded:this.tasks.filter(e=>e.state==="done").length,failed:this.tasks.filter(e=>e.state==="error").length,active:this.tasks.find(e=>e.state==="loading")?.id||null}}};async function bf(i){let e=globalThis.MANSION_ASSETS?.[i];if(!e)throw Error("\u7F3A\u5C11\u7D20\u6750 "+i);if(e.startsWith("assets/")){let s=new AbortController,r=setTimeout(()=>s.abort(),2e4);try{let o=await fetch(e,{cache:"default",signal:s.signal});if(!o.ok)throw Error(`${i}: HTTP ${o.status}`);return await o.arrayBuffer()}finally{clearTimeout(r)}}let t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}function Tf(i,e){let t=i<=700||e&&i<=1200;return{mobile:t,fov:t?68:52,distance:t?7.5:5,pixelCap:t?1.85:1/0}}function $m(i,e,t,n=!1){return n?"global":e<-.3?"basement":e>7?"roof":e>3.3?"upper":t<7&&i<-11?"west":t<7&&i>11?"east":t<-4&&Math.abs(i)<11?"main":"garden"}function jm(i){let{box:e,mat:t,branch:n,root:s}=i,r=t("\u516C\u53F8\u6D45\u8272\u77F3\u6750",14210247),o=t("\u516C\u53F8\u7ACB\u9762\u7EBF\u811A",15262937),a=t("\u516C\u53F8\u7A97\u6846",6648698),c=t("\u516C\u53F8\u73BB\u7483",9878990,{transparent:!0,opacity:.28,depthWrite:!1,roughness:.22,metalness:.2}),l=t("\u516C\u53F8\u529E\u516C\u5730\u6BEF",9608088),h=t("\u516C\u53F8\u529E\u516C\u684C",14075560),u=t("\u516C\u53F8\u529E\u516C\u6905",3361352),d=t("\u516C\u53F8\u7535\u8111\u5C4F\u5E55",8240821,{emissive:3235173,emissiveIntensity:.65}),f=t("\u516C\u53F8\u9876\u706F",15200743,{emissive:14085343,emissiveIntensity:.8}),g=s.userData.officeLabels=[];e(39,-.035,18,8,.07,34,t("\u516C\u53F8\u9A6C\u8DEF",6318439)),e(21.5,-.025,32,43,.05,2,r),e(44.5,-.025,18,3,.05,34,r);for(let x=3;x<35;x+=4)e(39,.005,x,.12,.012,1.8,o);for(let x=35.5;x<43;x+=1)e(x,.01,18,.55,.02,2.6,o);e(58,-.07,18,30,.12,32,r),g.push({text:"\u4E30\u5DE2 \xB7 \u6B66\u6C49\u7814\u53D1\u4E2D\u5FC3",x:45.64,y:5.05,z:18,rotation:-Math.PI/2,w:11,h:1},{text:"\u8FC7\u8857 \u2192 \u4E30\u5DE2\u7814\u53D1\u4E2D\u5FC3",x:26,y:1.7,z:32.8,w:7,h:.6},{text:"\u4E00\u81F3\u4E94\u697C\u529E\u516C \xB7 \u697C\u68AF / \u7535\u68AF\u76F4\u8FBE\u5929\u53F0",x:48,y:2.6,z:18,rotation:-Math.PI/2,w:6,h:.5});for(let x of fn){for(let p of nh())e((p.x1+p.x2)/2,x.y-.1,(p.z1+p.z2)/2,p.x2-p.x1,.2,p.z2-p.z1,x.y===18?r:l);if(x.y!==18){for(let p of[4,26])e(58,x.y+1.8,p,24,3.6,.18,c,!0),e(58,x.y+.4,p,24,.8,.24,r,!0);e(70,x.y+1.8,15,.2,3.6,22,r,!0);for(let[p,m]of[[9,10],[23,6]])e(46,x.y+1.8,p,.12,3.6,m,c,!0),e(46,x.y+.4,p,.35,.8,m,r,!0);x.y>0&&e(46,x.y+1.8,17,.12,3.6,6,c,!0);for(let p of[4,7,10,13,14,20,23,26])e(45.85,x.y+1.8,p,.6,3.6,.3,o,!0);e(45.8,x.y+3.45,15,.7,.3,22.6,o),e(70,x.y+3.45,15,.4,.3,22.6,o);for(let p of[50,56,62])for(let m of[10,18,23])e(p,x.y+3.28,m,2.5,.035,.18,f);for(let p of[6])e(65,x.y+1.6,p,2,3.2,.08,c,!0);e(64,x.y+1.6,7,.08,3.2,2,c,!0),e(66,x.y+1.6,7,.08,3.2,2,c,!0),g.push({text:x.name+" \xB7 \u5F00\u653E\u529E\u516C\u533A",x:62,y:x.y+2.5,z:25.7,w:4,h:.5},{text:"\u7535\u68AF \u2191 \u5929\u53F0 / \u5404\u5C42",x:65,y:x.y+2.8,z:8.15,w:3,h:.45})}}for(let x of th){for(let p=0;p<40;p++){let m=x.z1+(p+.5)*.3,y=x.base+(x.reverse?p+1:40-p)*x.height/40;e((x.x1+x.x2)/2,y-.045,m,1.4,.09,.303,r)}for(let p of[x.x1-.06,x.x2+.06]){n([p,x.base+.9+(x.reverse?0:3.6),10],[p,x.base+.9+(x.reverse?3.6:0),22],.025,a);for(let m=0;m<40;m++){let y=10+(m+.5)*.3,b=x.base+(x.reverse?m+.5:39.5-m)*3.6/40;e(p,b+.45,y,.045,.9,.3,c,!0)}}}for(let x of ih){e(x.x,x.y+.77,x.z,2.8,.12,1.2,h,!0);for(let p of[-1.15,1.15])e(x.x+p,x.y+.36,x.z,.06,.72,.85,a);e(x.x,x.y+1.22,x.z+.22,1.1,.64,.07,u),e(x.x,x.y+1.22,x.z+.175,1,.54,.018,d),e(x.x,x.y+.91,x.z+.22,.07,.28,.08,a),e(x.x,x.y+.85,x.z-.24,.65,.035,.23,u),e(x.x+.5,x.y+.85,x.z-.25,.09,.04,.14,u),e(x.x,x.y+.48,x.z-1.05,.58,.13,.6,u,!0),e(x.x,x.y+.83,x.z-1.33,.58,.63,.09,u,!0),e(x.x,x.y+.23,x.z-1.05,.08,.45,.08,a),e(x.x,x.y+.06,x.z-1.05,.7,.06,.65,a)}e(65,20.7,7,2.2,.15,2.2,r);for(let x of[64,66])e(x,19.3,7,.08,2.6,2,c,!0);e(65,19.3,6,2,2.6,.08,c,!0),g.push({text:"\u5929\u53F0\u7535\u68AF",x:65,y:20.5,z:8.15,w:2,h:.4}),e(44.2,3.35,17,4,.12,8,c);for(let x of[13,17,21])n([46,4.5,x],[42.3,3.35,x],.028,a);for(let x of[14,20])e(45.7,9.2,x,.7,18.4,.6,o);for(let x of[4,26])e(58,18.6,x,24,1.2,.08,c,!0);for(let x of[46,70])e(x,18.6,15,.08,1.2,22,c,!0);for(let x of[4,26])e(58,19.22,x,24,.06,.07,a);for(let x of[46,70])e(x,19.22,15,.07,.06,22,a);for(let x of[9,23])e(51,18.25,x,4,.5,.8,r,!0),e(51,18.55,x,3.8,.25,.65,t("\u516C\u53F8\u5929\u53F0\u7EFF\u690D",5799254));e(55,18.75,16,2,.12,1.2,h,!0);for(let x of[53,57])e(x,18.4,16,.8,.8,1,u,!0);g.push({text:"\u5929\u53F0\u89C2\u666F \xB7 \u9A6C\u8DEF\u5BF9\u9762\u662F\u5BB6",x:46.3,y:19.1,z:17,rotation:Math.PI/2,w:6,h:.6})}var rh={color:5857639,transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1};function Qm(i){i.traverse(e=>{if(e.isMesh)for(let t of Array.isArray(e.material)?e.material:[e.material])/glass|玻璃/i.test(t.name)&&(t.color.setHex(rh.color),Object.assign(t,{transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1}),"transmission"in t&&(t.transmission=0),t.needsUpdate=!0)})}function e0(){let e=new Uint8Array(262144);for(let s=0;s<256;s++)for(let r=0;r<256;r++){let o=r/256*Math.PI*2,a=s/256*Math.PI*2,c=Math.sin(o+Math.sin(a)*1.2)+.4*Math.sin(3*a+2*o),l=Math.pow(Math.abs(Math.sin(c*6+Math.sin(a*4))),18),h=Math.sin(r*12.9898+s*78.233)*43758.5453,u=110+32*Math.sin(o+a*2)+35*l+9*(h-Math.floor(h)),d=(s*256+r)*4;e[d]=u+7,e[d+1]=u+5,e[d+2]=u,e[d+3]=255}let t=new mn(e,256,256);t.colorSpace=dt,t.wrapS=t.wrapT=$t,t.generateMipmaps=!0,t.minFilter=An,t.magFilter=vt,t.anisotropy=4,t.needsUpdate=!0;let n=(s,r,o={})=>new nt({name:s,color:r,roughness:.7,...o});return{\u53A8\u623F\u67DC\u4F53:n("\u53A8\u623F\u67DC\u4F53",3422518,{roughness:.62}),\u53A8\u623F\u77F3\u6750:n("\u53A8\u623F\u77F3\u6750",12170927,{map:t,roughness:.38}),\u53A8\u623F\u5730\u7816:n("\u53A8\u623F\u5730\u7816",14276041,{roughness:.62}),\u53A8\u623F\u9876\u9762:n("\u53A8\u623F\u9876\u9762",5593169,{roughness:.95})}}function t0({box:i,mat:e,dark:t,lightmat:n}){let s=e("\u53A8\u623F\u67DC\u4F53"),r=e("\u53A8\u623F\u77F3\u6750"),o=e("\u53A8\u623F\u5730\u7816"),a=e("\u53A8\u623F\u9876\u9762");i(-6.8,.012,-12.8,8,.018,10,e("\u74F7\u7816\u7F1D",11184543));for(let c=0;c<5;c++)for(let l=0;l<6;l++)i(-10.8+.8+c*1.6,.026,-17.8+.833+l*1.666,1.59,.018,1.656,o);i(-6.4,1.62,-17.65,7.7,3.24,.1,s),i(-6.4,1.5,-17.57,5.7,1.05,.06,r);for(let c of[-7.65,-6.35,-5.05])i(c,2.5,-17.19,1.27,1.2,.68,s),i(c,1.895,-16.88,1.22,.024,.025,n);i(-3.45,1.52,-16.9,1.15,3.04,1.3,s,!0),i(-3.45,1.47,-16.226,.88,.74,.035,t),i(-3.45,1.47,-16.2,.72,.52,.014,e("\u7535\u5668\u9762\u677F",1383712)),i(-3.45,1.74,-16.17,.63,.024,.03,t),i(-9.3,1.5,-16.9,1.4,3,1.3,s,!0);for(let c of[-9.65,-8.95])i(c,1.6,-16.229,.68,2.35,.035,s);i(-9.3,1.6,-16.19,.018,1,.028,t),i(-6.5,3.28,-12.7,8.7,.12,10.5,a);for(let c of[-10.72,-2.28])i(c,3.205,-12.7,.025,.018,10.25,n);for(let c of[-17.78,-7.62])i(-6.5,3.205,c,8.4,.018,.025,n);i(-6.5,3.205,-10.3,7.8,.02,.06,t);for(let c of[-9,-7,-5,-3])i(c,3.188,-10.3,.09,.012,.08,n)}function wf(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Mt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=n0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=n0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function n0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ct(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Af(i,e){if(e===zu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jr||e===Sa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var ur={x1:9,x2:10.5,z1:-14.5,z2:-6,height:3.6,base:0,reverse:!0},Ef={x1:7,x2:8.5,z1:-15,z2:-6,height:3.6,base:3.6,reverse:!1},hr={x1:-24.5,x2:-22.5,z1:-17,z2:-7,height:3.6,base:-3.6,reverse:!0};function i0(i,e){return i>-18.35&&i<-10.3&&e>-12.3&&e<-11.1}var Ca=null;function s0(i){Ca=i}function r0(i){return Ca?.phase==="idle"&&Ca.door>.98&&Math.abs(Ca.y-i)<.05}var Rs=[];function ri(i,e,t,n,s=0,r=3){Rs.push({x1:i-t/2,x2:i+t/2,z1:e-n/2,z2:e+n/2,y:s,h:r})}function o0(i,e){return i>-20.8&&i<-10.7&&e>-18.8&&e<6.8||i>10.7&&i<20.8&&e>-7.8&&e<6.8}function oh(i,e){return i>-10.8&&i<10.8&&e>-17.8&&e<-4.15}function a0(i,e){return i>-24.8&&i<-11.2&&e>-18.8&&e<-7.15}function ah(i,e,t=0){if(Mf(i,e))return Fm(i,e,t);if(vf(i,e,.15)&&r0(t))return Ca.y;for(let n of[ur,Ef,hr]){if(i<n.x1||i>n.x2||e<n.z1||e>n.z2)continue;let s=(n.z2-e)/(n.z2-n.z1),r=n.base+(n.reverse?1-s:s)*n.height;if(Math.abs(r-t)<.25)return r;if(t>=n.base-.01&&t<=n.base+n.height+.01)return NaN}return t>6.95&&(oh(i,e)||i0(i,e))?7.2:t>3.35&&t<3.85&&(oh(i,e)||o0(i,e))?3.6:t<-3.35&&a0(i,e)?-3.6:Math.abs(t)<.25?0:NaN}function Bi(i,e,t,n=t){if(vf(i,e,.12))return r0(t)&&i>it.x1+.14&&e>it.z1+.14&&e<it.z2-.14;if(Zm(i,e,t)||(Math.abs(i)>34||e>49||e<-24)&&!Mf(i,e)||Math.abs(t)<.25&&(((i+5)/4.35)**2+((e-10)/2.85)**2<1||i>17.1&&i<23.9&&e>3.1&&e<18.9))return!1;let s=ah(i,e,n);if(!Number.isFinite(s)||Math.abs(s-n)>.22||!no(i,e)&&n>6.95&&!oh(i,e)&&!i0(i,e)||!no(i,e)&&n>3.35&&n<3.85&&!oh(i,e)&&!o0(i,e)||n<-3.35&&!a0(i,e)||Math.abs(t)<.001&&i>hr.x1&&i<hr.x2&&e>hr.z1&&e<hr.z2-.1)return!1;let r=.2/Ge;return!Rs.some(o=>t+1.68>o.y+.08&&t<o.y+o.h-.12&&i>o.x1-r&&i<o.x2+r&&e>o.z1-r&&e<o.z2+r)}function l0(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.08));for(let s=0;s<n;s++){let r=i.x+e/n,o=ah(r,i.z,i.y);Bi(r,i.z,o,i.y)&&(i.x=r,i.y=o);let a=i.z+t/n;o=ah(i.x,a,i.y),Bi(i.x,a,o,i.y)&&(i.z=a,i.y=o)}return i}function c0(i,e){return i.velocity-=16*e,i.height=Math.max(0,i.height+i.velocity*e),i.height===0&&(i.velocity=0),i}function Cf(i){return i.height>.001||i.velocity>0?!1:(i.velocity=6.5,!0)}function h0(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.05)),s=Math.atan2(e,t);for(let r=0;r<n;r++){let o=i.x+e/n,a=i.z+t/n,c=!0;for(let[l,h]of[[0,0],[-.3,-1.05],[.3,-1.05],[-.3,1.05],[.3,1.05]]){let u=o+(Math.cos(s)*l+Math.sin(s)*h)/Ge,d=a+(-Math.sin(s)*l+Math.cos(s)*h)/Ge;if(Math.abs(ah(u,d,i.y)-i.y)>.001||!Bi(u,d,i.y,i.y)){c=!1;break}}if(!c)break;i.x=o,i.z=a}return i}function u0(i){let{box:e,cyl:t,mat:n,wood:s,linen:r,dark:o,glass:a,plaster:c,architecture:l,root:h,seats:u,obstacle:d}=i;e(-17,-.025,20,8,.05,8,c);for(let y of[-21,-13])e(y,1.65,20,.2,3.3,8,c,!0);e(-17,1.65,16,8,3.3,.2,c,!0),e(-17,3.4,20,8.6,.18,8.6,o),e(-17,3.25,24,8.3,.1,.12,s),e(-17,.005,27,5,.04,6,c);let f=n("\u8D8A\u91CE\u8F66\u6F06",4018507,{metalness:.72,roughness:.23}),g=n("\u8F6E\u80CE",2106404),x=n("\u8F66\u8EAB\u9970\u4EF6",9609121,{metalness:.9,roughness:.22});e(-17,.8,20,2.15,.65,4.5,f),e(-17,1.5,19.8,1.92,.85,2.65,f),e(-17,1.62,21.14,1.73,.53,.035,a),e(-17,1.62,18.45,1.73,.53,.035,a);for(let y of[-18,-16])e(y,1.63,19.8,.03,.51,2.2,a),e(y,1.62,19.7,.05,.57,.06,o),e(y,1.19,20.3,.04,.04,.2,x);for(let y of[-18.13,-15.87])for(let b of[18.55,21.4]){let M=t(y,.54,b,.49,.27,g);M.rotation.z=Math.PI/2;let w=t(y+(y<-17?-.15:.15),.54,b,.26,.035,x);w.rotation.z=Math.PI/2}e(-17,.72,22.29,1.1,.32,.045,o);for(let y=-17.45;y<-16.5;y+=.15)e(y,.72,22.32,.045,.27,.035,x);for(let y of[-17.78,-16.22])e(y,.95,22.28,.4,.16,.05,n("\u8F66\u706F",16773068,{emissive:16766352,emissiveIntensity:.5}));e(-17,.46,22.28,2.25,.17,.12,x);for(let y of[-17.73,-16.27])e(y,1.98,19.8,.055,.06,2.8,o);d(-17,20,2.5,4.8,0,2.1);let p=[];h.userData.swings=p;function m(y,b,M,w){for(let _ of[-1,1])e(b+_*1.4,w+1.45,M,.09,2.9,.09,o,!0);e(b,w+2.9,M,3,.1,.12,s);let A=new et;A.position.set(b,w+2.8,M),h.add(A),e(0,-2.22,0,1.8,.12,.65,s,!1,A),e(0,-2.08,0,1.72,.18,.6,r,!1,A),e(0,-1.77,-.28,1.72,.55,.1,r,!1,A);for(let _ of[-.8,.8])e(_,-1.1,0,.018,2.2,.018,o,!1,A);let v={x:b,z:M,y:w,rotation:0,type:"sit",swingId:y};u.push(v),p.push({id:y,pivot:A,seat:v,position:new D})}m("roof",2,-7.2,7.2),m("garden",-9.5,22,0)}function f0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,root:f,seats:g,tree:x,plant:p,table:m,chair:y,sofa:b,rug:M}=i,w=r("\u77F3\u677F",12105124),A=r("\u571F\u58E4",4797222),v=r("\u53F6\u7EFF",5466941),_=r("\u6843\u82B1\u7C89",14655659),T=r("\u6A58\u5B50",15111730,{roughness:.65}),E=r("\u6843\u5B50",14983306),I=r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5}),O=[];f.userData.districtLabels=O;let z=(L,V,Y,$)=>O.push({text:L,x:V,y:Y,z:$});function P(L,V,Y,$=_){n(L,V+.25,Y,.016,.5,v);for(let le=0;le<5;le++){let Se=le*1.256;t(L+Math.sin(Se)*.065,V+.51,Y+Math.cos(Se)*.065,.065,.035,.065,$)}t(L,V+.54,Y,.035,.035,.035,T)}function N(L,V,Y,$,le=0){e(L,le+.23,V,Y,.46,$,o,!0),e(L,le+.47,V,Y-.14,.025,$-.14,A);for(let Se=0;Se<Math.floor(Y*3);Se++)for(let Ee=0;Ee<2;Ee++)P(L-Y/2+.22+Se*.32,le+.48,V+(Ee-.5)*$*.48,Se%3?_:c)}function U(L,V,Y,$=2.8){e(L,Y+1.5,V,$,1.5,.11,l),e(L,Y+1.5,V+.065,$-.12,1.37,.025,I),e(L,Y+.35,V+.1,$+.6,.7,.6,o,!0)}M(-16,-13,7,7),b(-16,-11,Math.PI),m(-16,-13,2.5,1.1),U(-16,-17.6,0),p(-20,-16,.8),z("\u897F\u7FFC\u4F1A\u5BA2\u5385",-16,2.7,-17.3),e(0,.005,27,4,.05,6,w),e(-27,.005,5,3,.05,44,w);for(let L of[-10,10,18])N(L,26,L<0?2:4,1.5);for(let[L,V,Y,$]of[[-28,9,E,"\u6843\u6811"],[-28,19,T,"\u6A58\u6811"],[28,25,T,"\u6A58\u6811"]]){x(L,V,.65);for(let le=0;le<22;le++){let Se=le*2.4,Ee=.85+le%4*.22;t(L+Math.sin(Se)*Ee,2.6+le%5*.29,V+Math.cos(Se)*Ee,.13,.15,.13,Y)}z($,L,1.5,V+2.1)}z("\u5730\u4E0B\u5BA4\u5165\u53E3 \u2193",-23.5,1.9,-5.8);let B=-3.6;e(-18,B-.1,-13,14,.2,12,a),e(-25,B+1.65,-13,.2,3.3,12,h,!0),e(-11,B+1.65,-13,.2,3.3,12,h,!0),e(-18,B+1.65,-19,14,3.3,.2,h,!0),e(-18,B+1.65,-7,14,3.3,.2,h,!0),e(-22.4,-2,-12,.1,3.2,10,h,!0);for(let L of[-17.8,-8.7])e(-18,B+1.5,L,.15,3,2.2,o,!0);for(let L of[-20.6,-13.2])e(L,B+1.5,-13,3.6,3,.15,h,!0);for(let L of[-21,-19.5]){for(let V=0;V<4;V++)e(L,B+.3+V*.6,-18.35,1.25,.07,.8,o);for(let V=0;V<3;V++)for(let Y=0;Y<2;Y++)e(L+(Y-.5)*.48,B+.53+V*.6,-18.3,.4,.38,.6,r("\u50A8\u7269\u7BB1",11047794))}z("\u50A8\u7269\u95F4",-20.2,B+2.4,-18.2);for(let L of[-15.6,-12.8]){m(L,-17.6,2.1,.9,B),e(L,B+1.22,-17.8,1.1,.66,.08,l),e(L,B+1.22,-17.75,1,.57,.025,r("\u7535\u7ADE\u5C4F\u5E55",7704504,{emissive:3697856,emissiveIntensity:.75})),e(L,B+.86,-17.35,.65,.035,.25,l),e(L+.83,B+.35,-17.6,.38,.7,.6,l),y(L,-16.5,Math.PI,B),g.push({x:L,z:-16.5,y:B,rotation:Math.PI,type:"sit"});for(let V=0;V<3;V++)n(L+.83,B+.25+V*.17,-17.28,.05,.02,u).rotation.x=Math.PI/2}z("\u7535\u7ADE\u623F",-14,B+2.5,-18.65);for(let L of[-21.8,-18.8]){e(L,B+.55,-12.2,.32,1.1,.35,l);for(let V of[.3,.7]){let Y=n(L,B+V,-11.99,.1,.02,l);Y.rotation.x=Math.PI/2}}n(-19.1,B+.85,-10.7,.025,1.7,l),t(-19.1,B+1.76,-10.7,.055,.11,.055,l),z("KTV \xB7 \u8F7B\u5531\u65F6\u5149",-20.2,B+2.5,-12.4),b(-14.3,-9.1,Math.PI,B),m(-14.3,-10.8,2,.9,B),U(-14,-12.5,B,2.5),z("\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,B+2.5,-12.4),f.userData.basementLight={x:-18,y:-1.3,z:-13};for(let L of[-21,-15])for(let V of[-17,-9])e(L,-.45,V,2.4,.04,.08,u);for(let L of[-18,-4])e(0,7.75,L,22,1.1,.04,d,!0),e(0,8.32,L,22,.045,.055,l);for(let L of[-11,11])for(let[V,Y]of L===-11?[[-15.2,5.6],[-7.5,7]]:[[-11,14]])e(L,7.75,V,.04,1.1,Y,d,!0),e(L,8.32,V,.055,.045,Y,l);for(let L of[-8,-4,0,4])N(L,-17,2.8,.9,7.2);for(let L of[-14,-8])N(-10,L,.9,2.5,7.2);m(-4,-10,2.5,1.3,7.2);for(let L of[-4.8,-3.2])y(L,-8.8,Math.PI,7.2),g.push({x:L,z:-8.8,y:7.2,rotation:Math.PI,type:"sit"});y(-4,-11.2,0,7.2),n(-4,8.14,-10,.18,.22,r("\u9752\u74F7",7903111));for(let L of[-4.7,-3.3])n(L,8.07,-10,.075,.12,c);for(let L=0;L<4;L++){let V=Math.PI/4+L*Math.PI/2;e(-4+Math.cos(V)*3.65,8.55,-10+Math.sin(V)*3.65,.085,2.7,.085,l,!0)}n(-4,10.04,-10,3.8,.12,l),n(-4,10.13,-10,3.65,.1,o,void 0,3.4),n(-4,9.975,-10,3.55,.025,u),e(3,7.43,-12,1.7,.46,2.1,o,!0),e(3,7.67,-12,1.55,.025,1.95,A),z("\u5929\u53F0\u8336\u5E2D",-4,8.8,-12),z("\u5929\u53F0\u82B1\u56ED",1,8.5,-16.5),e(0,-.01,40,10,.04,20,r("\u8857\u9053\u8DEF\u9762",6843751));for(let L of[-6,6])e(L,.015,40,2,.07,20,w);for(let L=32;L<49;L+=4)e(0,.025,L,.12,.008,1.5,c);let X=[];f.userData.vendors=X;for(let L of[-1,1])for(let V=0;V<3;V++){let Y=L*10,$=33.5+V*5,le=r("\u644A\u68DA"+V,[12088147,6651502,13743485][V]);e(Y,.6,$,3,1.2,1.4,o,!0),e(Y,1.25,$,3.15,.1,1.5,a);for(let Ee of[-1.5,1.5])for(let ne of[-.9,.9])e(Y+Ee,1.3,$+ne,.055,2.6,.055,l);let Se=e(Y,2.65,$,3.5,.12,2.25,le);Se.rotation.z=L*.06;for(let Ee=0;Ee<12;Ee++){let ne=Y-1.15+Ee%4*.7,ge=$-.45+Math.floor(Ee/4)*.45;V===2?P(ne,1.3,ge):t(ne,1.42,ge,.18,.13,.16,V===0?T:E)}z(["\u65F6\u4EE4\u9C9C\u679C","\u4E61\u6751\u70B9\u5FC3","\u82B1\u8349\u5C0F\u94FA"][V],Y,2.25,$+1),X.push({x:Y+L*2,z:$,rotation:-L*Math.PI/2})}z("\u4E61\u95F4\u96C6\u5E02 \xB7 \u5411\u524D\u5230\u6CB3\u5CB8",0,3,31),z("\u6CB3\u7554\u6B65\u9053",0,2.8,48),e(0,.01,48,68,.06,3,w),e(0,-.035,55,130,.05,10,r("\u6CB3\u6C34",5406329,{roughness:.15,metalness:.45}));for(let L=0;L<20;L++)e(-58+L*6,-.004,52+L%3*2,2.5,.007,.035,r("\u6CB3\u9762\u6CE2\u7EB9",9744034,{transparent:!0,opacity:.4,depthWrite:!1}));for(let L of[49.6,60.5]){e(0,.9,L,70,.05,.06,l,!0);for(let V=-34;V<=34;V+=2)e(V,.45,L,.04,.9,.04,l)}e(0,.015,62,130,.07,3,w)}function d0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,architecture:f,root:g,roofs:x,obstacle:p,seats:m}=i,y=r("\u8C61\u7259\u74F7",15526366,{roughness:.2}),b=r("\u62C9\u4E1D\u4E0D\u9508\u94A2",9542557,{metalness:.88,roughness:.24}),M=r("\u7535\u5668\u9762\u677F",1383712,{metalness:.35,roughness:.1}),w=r("\u9EC4\u94DC",10521429,{metalness:.8,roughness:.27});function A(P,N,U,B,X,L,V,Y=.08,$=f){let le=new Le(new os(B,X,L,4,Y),V);return le.position.set(P,N,U),le.castShadow=!0,le.receiveShadow=!0,$.add(le),le}function v(P,N,U,B=.15,X=.4,L=y){let V=[];for(let $=0;$<=12;$++){let le=$/12;V.push(new ce(B*(.65+Math.sin(le*Math.PI)*.35)*(le>.8?.7:1),le*X))}let Y=new Le(new Zo(V,24),L);Y.position.set(P,N,U),Y.castShadow=!0,f.add(Y)}function _(P,N,U=3,B=2.85){e(P,B,N,U,.075,.14,l),e(P,B-.044,N,U-.07,.018,.09,u);for(let X of[-1,1])n(P+X*U*.37,(B+3.3)/2,N,.009,3.3-B,l)}function T(P,N,U,B=30,X=4){let L=new jn(16767664,B,X,2);L.position.set(P,N,U),g.add(L)}function E(P,N,U){n(P,N,U,.18,.018,y),n(P,N+.013,U,.13,.007,y),n(P+.29,N+.075,U-.12,.06,.15,d),e(P-.25,N+.016,U,.024,.016,.28,b),e(P+.23,N+.016,U,.018,.016,.25,b)}for(let P of[-21,21])e(P,1.7,3.8,.23,3.4,3.6,h,!0);for(let P of[-20,20])e(P,1.7,7,1.8,3.4,.22,h,!0);e(10.93,5.3,-15.4,.22,3.4,5.2,h,!0),e(-7,5.3,-18,7.5,3.4,.23,h,!0),A(4.9,.5,-16.5,3.9,1,1.1,o,.06),p(4.9,-16.5,3.9,1.1,0,1),A(4.9,1.05,-16.5,4.1,.1,1.25,y,.04),A(4.1,1.4,-16.6,.8,.6,.5,M,.04);for(let P of[3.85,4.35])n(P,1.16,-16.2,.08,.15,y),e(P,1.5,-16.3,.12,.05,.15,b);for(let P of[4,5,6])n(P,.67,-14.9,.28,.12,o),n(P,.32,-14.9,.035,.65,b),n(P,.04,-14.9,.25,.05,b),m.push({x:P,z:-14.9,y:0,rotation:Math.PI,type:"sit"});_(4.9,-16.5,3.5),e(2.8,1.85,-10,.08,1.6,2.8,l),e(2.75,1.85,-10,.025,1.46,2.65,r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5})),A(2.9,.32,-10,.65,.64,3.3,o,.05),p(2.9,-10,.65,3.3,0,.7);for(let P of[13.7,15,16.3])for(let N of[-5.65,-4.95])E(P,.822,N);v(15,.82,-5.3,.17,.45);for(let P=0;P<5;P++)s([15,.98,-5.3],[15+Math.sin(P)*.25,1.6+Math.cos(P)*.1,-5.3+Math.cos(P)*.2],.008,o);_(15,-5.3,3.5),T(15,2.4,-5.3,22,9),_(-6,-13.6,3.4),T(-6,2.5,-14.5,25,9),_(-17,1,2.4);for(let P=-9.5;P<=-4.5;P+=.85)e(P,.46,-16.225,.025,.8,.015,l),e(P+.25,.77,-16.2,.3,.018,.018,l);A(-8,.98,-16.9,1.05,.035,.65,b,.045),A(-8,1,-16.9,.88,.022,.5,M,.05);let I=new Le(new Ii(.17,.022,10,24,Math.PI),b);I.position.set(-8,1.25,-17.14),f.add(I),n(-8.17,1.13,-17.14,.025,.26,b),n(-7.83,1.2,-17.14,.023,.1,b),A(-5.2,1,-16.9,1.35,.03,.75,M,.035);for(let P of[-5.6,-4.8])for(let N of[-16.7,-17.1]){let U=new Le(new Ii(.13,.006,6,24),b);U.rotation.x=Math.PI/2,U.position.set(P,1.021,N),f.add(U)}e(-5.2,.47,-16.19,1.05,.65,.07,M),e(-5.2,.66,-16.12,.8,.035,.035,b),e(-5.2,2.65,-16.9,1.6,.13,.9,b),e(-5.2,2.96,-17,.45,.55,.45,b),A(-6.85,1.23,-16.9,.42,.52,.42,M,.035),e(-6.85,1.4,-16.65,.3,.12,.025,b),v(-6.85,1,-16.57,.065,.12),v(-6,1,-13.6,.3,.16,o);for(let P=0;P<5;P++)t(-6+Math.sin(P)*.15,1.18,-13.6+Math.cos(P)*.15,.09,.09,.09,r("\u6C34\u679C",14459474));for(let P of[-7.3,-6,-4.7]){A(P,.6,-12.3,.48,.09,.48,l,.07);for(let N of[-.17,.17])for(let U of[-.17,.17])e(P+N,.3,-12.3+U,.035,.6,.035,l);p(P,-12.3,.5,.5,0,.65)}A(-17,.85,1,2.2,.07,1.1,a,.06),e(-17.25,1.27,.73,.86,.5,.045,l),e(-17.25,1.28,.759,.8,.44,.015,r("\u5C4F\u5E55",4546401,{emissive:1717560,emissiveIntensity:.15})),e(-17.25,1,.72,.06,.28,.06,l),A(-17.25,.9,.78,.42,.025,.25,l,.02),A(-17.25,.908,1.14,.65,.023,.22,l,.02);for(let P=0;P<12;P++)for(let N=0;N<3;N++)e(-17.54+P*.05,.925,1.07+N*.05,.036,.008,.035,r("\u952E\u5E3D",8819082));A(-16.48,.9,1.04,.4,.035,.28,b,.015);let O=e(-16.48,1.04,.89,.4,.28,.025,l);O.rotation.x=-.2,v(-17.83,.9,1.24,.065,.12),n(-18,.94,.66,.12,.04,w),s([-18,.95,.66],[-18,1.65,.66],.018,l),t(-18,1.67,.76,.2,.08,.16,l),T(-18,1.52,.8,2,2.5),e(20.84,1.8,1,.06,1.3,2.3,l),e(20.8,1.8,1,.025,1.17,2.15,M),A(20.2,.35,1,.9,.7,3.5,o,.06),p(20.2,1,.9,3.5,0,.7);for(let P of[-.6,0,.6])v(P,.81,-12.5,.12,.25);e(0,2,-17.32,2.6,1.3,.08,o),e(0,2,-17.265,2.45,1.15,.02,y);for(let P=0;P<7;P++){let N=t(-1+P*.3,1.9+Math.sin(P)*.1,-17.24,.32,.22+Math.sin(P)*.08,.013,r("\u6C34\u58A8\u753B",7437429))}let z=3.6;e(5,z+.02,-16,3.5,.04,3.5,h),A(4.7,z+.34,-16.7,2.35,.67,1.05,y,.22),A(4.7,z+.69,-16.7,1.96,.025,.73,r("\u6D74\u7F38\u5185\u6C34",7310468,{metalness:.2,roughness:.1}),.2),p(4.7,-16.7,2.35,1.05,z,.7),n(5.93,z+.58,-16.7,.025,1.16,b),s([5.93,z+1.16,-16.7],[5.65,z+1.16,-16.7],.025,b),A(3.7,z+.72,-14.2,1,.15,.65,y,.09),e(3.7,z+.36,-14.2,.95,.7,.6,o),p(3.7,-14.2,1,.65,z,.8),e(3.12,z+1.55,-14.2,.05,1.05,.8,b),A(4.8,z+.24,-14.3,.48,.48,.65,y,.14),A(4.8,z+.51,-14.3,.48,.06,.63,y,.16),e(4.8,z+.68,-14.6,.48,.55,.15,y),p(4.8,-14.3,.5,.7,z,.95);for(let P of[-16.8,-15.6,-14.4])e(-10.55,4.9,P,.55,2.6,1.15,o,!0),e(-10.24,4.9,P,.03,.6,.025,w);for(let P of[-9.65,-6.35])A(P,3.91,-16.2,.65,.62,.62,a,.05),v(P,4.23,-16.2,.09,.2,w),t(P,4.52,-16.2,.18,.19,.18,c),T(P,4.5,-16.2,3,4);for(let P of[10,12.8,15.6]){let N=new et;f.add(N),N.position.set(15.1,0,P),N.rotation.y=-Math.PI/2,A(0,.39,0,.86,.15,2.2,o,.04,N),A(0,.51,.38,.81,.15,1.4,c,.07,N);let U=A(0,.83,-.64,.81,.15,.95,c,.07,N);U.rotation.x=-.55;for(let B of[-.33,.33])for(let X of[-.75,.8])e(B,.18,X,.06,.36,.06,l,!1,N);p(15.1,P,2.2,.86,0,.9),m.push({x:15.1,z:P,y:0,rotation:-Math.PI/2,type:"lie",outdoor:!0})}A(-10,.43,18,3,.14,.62,o,.045);for(let P of[-11,-9])e(P,.2,18,.09,.4,.48,l);m.push({x:-10,z:18,y:0,rotation:0,type:"sit"});for(let P of[4.5,11.5])for(let N of[9.6,14.4])e(P,1.5,N,.1,3,.1,l,!0);e(8,3,9.6,7.2,.16,.14,o,!1,x),e(8,3,14.4,7.2,.16,.14,o,!1,x);for(let P=4.5;P<=11.5;P+=.28)e(P,3.12,12,.085,.18,5,o,!1,x);for(let P=17;P<=25;P+=.16)e(P,.85,21,.055,1.7,.12,o);e(21,.32,21,8.2,.06,.14,l);for(let P of[-20,-12,12,20])e(P,2.6,7.08,.06,.34,.08,l),T(P,2.4,7.3,4,4);for(let P of[-16,0,16])T(P,2.6,P===0?-10:0,24,11)}function p0(i={}){i={...e0(),...i},Rs.length=0;let e=new et,t=new et,n=new et;e.add(t,n);let s=[],r=[],o=[],a=!1,c={},l=(R,k,H={})=>c[R]||(c[R]=i[R]||new nt({name:R,color:k,roughness:.8,...H})),h=l("\u80E1\u6843\u6728",7950391),u=l("\u6D45\u6A61\u6728",11700827),d=l("\u7C73\u8272\u5899\u9762",16774889),f=l("\u6DF1\u7070\u74E6",3160892),g=l("\u77F3\u6750",9278086),x=l("\u77F3\u677F",12105124),p=l("\u8349\u5730",5663044),m=l("\u6DF1\u8272\u91D1\u5C5E",2370860),y=l("\u4E9A\u9EBB\u5E03",14997432),b=l("\u571F\u58E4",4797222),M=l("\u6696\u5149",16768160,{emissive:16758368,emissiveIntensity:2}),w=l("\u73BB\u7483",rh.color,rh),A=[];function v(R,k,H,J,K,ue,he,me=!1,de=t,G=!0){if(G&&K<.45&&J>.5&&ue>.5&&(Math.abs(k+3.7)<.25||Math.abs(k)<.5||Math.abs(k-3.5)<.25||Math.abs(k-7.1)<.2)){let je=Nm(R,H,J,ue);if(je.length!==1||je[0].w!==J||je[0].d!==ue){let F;for(let S of je)F=v(S.x,k,S.z,S.w,K,S.d,he,me,de,!1)||F;return F}}let Xe=new Le(he===y||he.name==="\u9760\u6795"||he.name==="\u5E8A\u88AB"?new os(J,K,ue,3,Math.min(J,K,ue)*.22):new Wt(J,K,ue),he);return Xe.position.set(R,k,H),Xe.castShadow=!0,Xe.receiveShadow=!0,(a?n:de).add(Xe),me&&(ri(R,H,J,ue,k-K/2,K),A.push(Xe)),Xe}function _(R,k,H,J,K,ue,he,me=t){let de=new Le(new gn(1,16,12),he);return de.position.set(R,k,H),de.scale.set(J,K,ue),de.castShadow=!0,de.receiveShadow=!0,me.add(de),de}function T(R,k,H,J,K,ue,he=t,me=J){let de=new Le(new Tn(me,J,K,24),ue);return de.position.set(R,k,H),de.castShadow=!0,de.receiveShadow=!0,he.add(de),de}function E(R,k,H,J=h){let K=new D(...k).sub(new D(...R)),ue=T(...new D(...R).addScaledVector(K,.5).toArray(),H,K.length(),J,t,H*.65);return ue.quaternion.setFromUnitVectors(new D(0,1,0),K.normalize()),ue}let I=23,O=()=>(I=I*16807%2147483647,(I-1)/2147483646),z=[l("\u677E\u53F6",3429180),l("\u53F6\u7EFF",5466941),l("\u6D45\u53F6",7571027),l("\u67AB\u53F6",10900534)];function P(R,k,H=1,J=!1){s.push({x:R,z:k,height:H*7.5,rotation:O()*6.28})}function N(R,k,H=.6,J=0){r.push({x:R,z:k,y:J,height:H*1.3})}function U(R,k){v(R,.48,k,.24,.85,.24,m),v(R,.56,k,.27,.3,.27,M),v(R,.78,k,.4,.08,.4,m)}let B=l("\u9EC4\u571F\u5730",11836008);v(-57.25,-.3,0,65.5,.4,180,B),v(33.75,-.3,0,112.5,.4,180,B),v(-23.5,-.3,-53.5,2,.4,73,B),v(-23.5,-.3,41.5,2,.4,97,B),v(-28.75,-.25,5,8.5,.4,50,p),v(5.25,-.25,5,55.5,.4,50,p),v(-23.5,-.25,-18.5,2,.4,3,p),v(-23.5,-.25,11.5,2,.4,37,p);let X=v(0,-.13,-55,170,.08,48,l("\u8FDC\u6E56",8301218,{roughness:.17,metalness:.35}));for(let R=0;R<38;R++){let k=R/38*Math.PI*2,H=Math.cos(k)*(33+O()*13),J=Math.sin(k)*(31+O()*13);!(J>29&&Math.abs(H)<14)&&!(H>33&&J>0)&&P(H,J,1.1+O()*1.2)}v(0,-.025,1.5,21.8,.05,11,x),v(0,0,18,4,.045,14,x);for(let R=-9;R<=9;R+=2)for(let k=-2;k<7;k+=2)v(R,.007,k,1.97,.035,1.97,x);for(let R of[-5.2,5.2]){v(R,.044,1.5,6.1,.04,6.2,p);for(let k of[-1,1])v(R+k*3.15,.049,1.5,.13,.06,6.4,d);for(let k of[-1.65,4.65])v(R,.049,k,6.4,.06,.13,d)}for(let R=0;R<10;R++)v(-1.5+R%2*.05,.03,8+R*1.4,2.8,.06,1.05,g);v(0,1,-20,66,2,.4,g,!0),v(-33,1,5,.4,2,50,g,!0),v(33,1,5,.4,2,50,g,!0);for(let R of[-19.5,19.5])v(R,.9,30,27,1.8,.4,g,!0);function L(R,k,H,J=0,K=-6){let ue=(Array.isArray(K)?K:[K]).sort((de,G)=>de-G),he=[],me=k;for(let de of ue)de+1.7<k||de-1.7>H||(he.push([me,Math.max(me,de-1.7)]),me=Math.min(H,de+1.7));he.push([me,H]);for(let[de,G]of he)if(!(G-de<.05)){v(R,J+1.65,(de+G)/2,.07,3.3,G-de,w,!0);for(let Xe=de;Xe<=G;Xe+=1.6)v(R,J+1.7,Xe,.12,3.4,.07,m)}v(R,J+3.35,(k+H)/2,.2,.18,H-k,m)}function V(R,k,H,J,K=0,ue=!1){if(v(R,K-.09,k,H,.18,J,u),R===-16&&k===-.5)for(let he of[-3.75,3.75])v(R+he,K+1.65,k-J/2,2.5,3.3,.065,w,!0);else v(R,K+.35,k-J/2,H,.7,.22,d,!0),v(R,K+2.05,k-J/2,H,2.7,.065,w,!0);for(let he=R-H/2;he<=R+H/2;he+=2)v(he,K+1.7,k-J/2,.065,3.4,.16,m);for(let he of[-1,1]){L(R+he*H/2,k-J/2,k+J/2,K,ue?-6:he*R<0?[-6,0]:0);let me=(H-5)/2;v(R+he*(2.5+me/2),K+1.62,k+J/2,me,3.24,.045,w,!0);for(let de=0;de<3;de++)v(R+he*(2.5+de*me/2),K+1.65,k+J/2,.055,3.3,.14,m)}v(R,K+3.36,k+J/2,H,.18,.2,m),!ue&&R!==-16&&R!==16&&Y(R,k,H+1.5,J+1.5,K+3.55,.25)}function Y(R,k,H,J,K,ue){a=!0;let he=v(R,K,k,H,.18,J,f);he.geometry.dispose(),he.geometry=new os(H,.18,J,3,.07),v(R,K+.13,k,H-.6,.08,J-.6,f),v(R,K-.13,k,H-.2,.1,J-.2,h),v(R,K-.06,k,H-.14,.04,J-.14,m);for(let me of[-1,1])v(R+me*H/2,K,k,.12,.32,J,m);for(let me of[-1,1])v(R,K,k+me*J/2,H,.32,.12,m);v(R,K-.19,k+J/2-.25,H-.5,.025,.035,M),a=!1}V(0,-11,22,14,0,!0),v(-1,3.51,-11,20,.18,14,u),v(10.75,3.51,-11,.5,.18,14,u),v(9.75,3.51,(-18+ur.z1)/2,1.5,.18,ur.z1+18,u),v(9.75,3.51,(ur.z2-4)/2,1.5,.18,-4-ur.z2,u),v(0,3.95,-18,22,.7,.24,d,!0),v(0,5.7,-18,22,2.8,.06,w,!0);for(let R=-11;R<12;R+=2)v(R,5.3,-18,.06,3.4,.16,m);for(let R of[-11,11])if(R===-11){for(let[k,H]of[[-18,-10-_i/2],[-10+_i/2,-4]])v(R,5.3,(k+H)/2,.06,3.4,H-k,w,!0);v(R,6.4,-10,.12,1.2,_i,d,!0)}else{v(R,5.3,-12.15,.06,3.4,11.7,w,!0),v(R,5.3,-4.05,.06,3.4,.1,w,!0),v(R,6.5,-5.15,.12,1,2.3,d,!0);for(let k=-18;k<=-7;k+=2)v(R,5.3,k,.16,3.4,.06,m)}for(let R=-10;R<11;R+=2)v(R,5.15,-4,1.93,3,.05,w,!0),v(R+1,5.2,-4,.07,3.2,.12,m,!0);a=!0,v(-2,7.1,-11,18,.2,14,x),v(9.75,7.1,-11,2.5,.2,14,x),v(7.75,7.1,-16.5,1.5,.2,3,x),v(7.75,7.1,-5,1.5,.2,2,x),a=!1;for(let R of[-9,-5,5,9])v(R,1.7,-2.7,.18,3.4,.18,h,!0);a=!0,v(0,3.3,-2.7,23,.15,2.8,h),a=!1,V(-16,-.5,10,15),V(-16,-13.5,10,11),V(16,-.5,10,15);for(let R of[-3,3])v(R,5.3,-13,.16,3.4,10,d,!0);for(let[R,k,H]of[[-11,-3,-7],[-3,3,0]]){for(let[J,K]of[[R,H-Pn/2],[H+Pn/2,k]])v((J+K)/2,5.3,-8,K-J,3.4,.16,d,!0);v(H,6.4,-8,Pn,1.2,.16,d,!0)}for(let R of[ur,Ef,hr]){let k=(R.x1+R.x2)/2,H=R.x2-R.x1,J=(R.z2-R.z1)/28;for(let K=0;K<28;K++){let ue=R.z2-(K+.5)*J,he=R.base+(R.reverse?28-K:K+1)*3.6/28;v(k,he-.065,ue,H,.13,J+.006,u)}for(let K of[R.x1-.07,R.x2+.07]){E([K,R.base+.9+(R.reverse?3.6:0),R.z2],[K,R.base+.9+(R.reverse?0:3.6),R.z1],.022,m);for(let ue=0;ue<28;ue++){let he=R.z2-(ue+.5)*J,me=R.base+(R.reverse?28-ue:ue+1)*3.6/28;v(K,me+.45,he,.035,.9,.035,m),ri(K,he,.035,J,me,.95)}}}function $(R,k,H,J,K=0){v(R,K+.017,k,H,.035,J,l("\u5730\u6BEF",12827300));for(let ue=0;ue<8;ue++)v(R-H/2+.1+ue*.055,K+.04,k,.025,.01,J,y)}function le(R,k,H=2,J=1,K=0){H/=Ge,J/=Ge,v(R,K+.75,k,H,.11,J,h,!0);for(let ue of[-1,1])for(let he of[-1,1])v(R+ue*(H/2-.15),K+.35,k+he*(J/2-.12),.1,.7,.1,h)}function Se(R,k,H=0,J=0){let K=new et;t.add(K),v(0,.46,0,.7,.16,.7,y,!1,K),v(0,.88,-.32,.7,.75,.1,h,!1,K);for(let ue of[-1,1])for(let he of[-1,1])v(ue*.27,.2,he*.27,.07,.4,.07,h,!1,K);K.scale.set(1/Ge,1,1/Ge),K.position.set(R,J,k),K.rotation.y=H,ri(R,k,.7/Ge,.7/Ge,J,1.2)}function Ee(R,k,H=0,J=0){o.push({x:R,z:k,y:J,rotation:H,type:"sit"});let K=new et;t.add(K),v(0,.32,0,3.4,.45,1.3,h,!1,K);for(let ue=-1;ue<=1;ue++){v(ue*1.05,.64,0,1.025,.31,1.12,y,!1,K);let he=v(ue*1.05,1.06,-.47,1.04,.73,.29,y,!1,K);he.rotation.x=-.12}for(let ue of[-1,1]){v(ue*1.62,.8,0,.22,.7,1.3,y,!1,K);let he=v(ue*.9,.96,-.25,.65,.5,.18,l("\u9760\u6795",9601640),!1,K);he.rotation.z=ue*.12}K.scale.set(1/Ge,1,1/Ge),K.position.set(R,J,k),K.rotation.y=H,ri(R,k,(H?1.3:3.4)/Ge,(H?3.4:1.3)/Ge,J,1.2)}function ne(R,k,H=7,J=0,K=0){let ue=t.children.length,he=Rs.length;v(R,J+1.6,k,H,3.2,.42,h,!0);for(let me=0;me<6;me++){v(R,J+.15+me*.53,k+.3,H,.07,.64,u);for(let de=0;de<H*8;de++){if((de+Math.floor(me/2)*9)%29>17)continue;let G=.23+O()*.2;v(R-H/2+.1+de*.123,J+.21+me*.53+G/2,k+.28,.07+O()*.035,G,.25,l("\u4E66"+de%7,[6707526,12627070,3953490,9129531,14274224,4475712,8290393][de%7]))}}for(let me=0;me<5;me++)v(R,J+.67+me*.53,k+.35,H-.1,.017,.025,M);for(let me=-H/2;me<=H/2;me+=H/5)v(R+me,J+1.6,k+.15,.08,3.2,.6,u);if(K){let me=new et;for(let de of t.children.slice(ue))de.position.x-=R,de.position.z-=k,me.add(de);me.position.set(R,0,k),me.rotation.y=K,t.add(me);for(let de of Rs.slice(he)){let G=[[de.x1,de.z1],[de.x1,de.z2],[de.x2,de.z1],[de.x2,de.z2]].map(([Xe,je])=>[R+(Xe-R)*Math.cos(K)+(je-k)*Math.sin(K),k-(Xe-R)*Math.sin(K)+(je-k)*Math.cos(K)]);de.x1=Math.min(...G.map(Xe=>Xe[0])),de.x2=Math.max(...G.map(Xe=>Xe[0])),de.z1=Math.min(...G.map(Xe=>Xe[1])),de.z2=Math.max(...G.map(Xe=>Xe[1]))}}}ne(-20.6,-4.7,3.8,0,Math.PI/2),$(-16,.5,7,8),le(-17,1,2.2,1.1),Se(-17,2.1,Math.PI),Ee(-14,-3),le(-14,-1.2,1.7,.8),N(-20,5),N(-12,-6),v(-17,.845,1,1,.03,.55,y),v(-17,.87,1,.025,.015,.55,m),ri(-20,.3,1.1,3,0,2.8),$(16,1,7,7),Ee(17,1,Math.PI/2),le(18.7,1,1,2.1),N(12,5),N(20,-6),le(15,-5.3,3.8,1.35);for(let R of[13.7,15,16.3])Se(R,-4.2,Math.PI),Se(R,-6.5);v(-7,.45,-16.9,6,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),v(-7,.93,-16.9,6,.08,1.4,l("\u53A8\u623F\u77F3\u6750")),t0({box:v,mat:l,dark:m,lightmat:M}),v(-6,.45,-13.6,4.4,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),v(-6,.94,-13.6,4.6,.09,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let R of[-8.26,-3.74])v(R,.47,-13.6,.08,.94,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let R=-7.5;R<-4;R+=.75)v(R,.46,-12.94,.015,.78,.012,m);N(-10,-5),$(0,-11,5.5,5.5),Ee(-1.3,-10,Math.PI/2),le(.5,-10,1,2),ne(-.3,-17.5,4),Se(-3.9,-10),le(-4,-9,1,1);function ge(R,k,H=3,J=3.6){o.push({x:R,z:k,y:J,rotation:0,type:"lie"}),v(R,J+.3,k,H,.6,3.6,h,!0),v(R,J+.64,k,H,.18,3.5,y),v(R,J+1,k-1.75,H,.9,.18,h,!0),v(R,J+.77,k+.45,H,.1,2.3,l("\u5E8A\u88AB",7900036));for(let K of[-1,1])v(R+K*H*.23,J+.8,k-1.13,H*.4,.2,.65,y)}ge(-8,-15.4,2.6),$(-7,-10.7,5,3.5,3.6),le(-4.8,-17,1.5,.8,3.6),Se(-4.8,-16.2,Math.PI,3.6),N(-10,-17,.7,3.6),$(0,-10.5,4,3,3.6);for(let R=0;R<9;R++)v(-1+O()*2,3.78,-10+O(),.25,.32,.25,l("\u79EF\u6728"+R,[12419419,5536903,13875558][R%3]));v(8,0,12,8,.09,5,u);for(let R=0;R<22;R++)v(4.15+R*.35,.05,12,.02,.015,5,h);le(8,12,2.2,1.2),Se(8,13.2,Math.PI),Se(8,10.8),Se(6.35,12,-Math.PI/2);let fe=l("\u9752\u74F7",7903111,{roughness:.23});T(8,.94,12,.19,.22,fe),_(8,1.08,12,.16,.07,.16,fe);for(let R of[7.4,8.6])T(R,.9,12,.095,.13,fe);for(let R of[12,15])v(R,.18,19,2.2,.36,3,h,!0),v(R,.38,19,2,.04,2.8,b);for(let R of[11.4,12,12.6])for(let k of[18,19,20])N(R,k,.35,.4);let De=l("\u6C60\u6C34",3636605,{transparent:!0,opacity:.76,roughness:.13,metalness:.38});_(-5,.015,10,4.3,.015,2.8,l("\u6C60\u5E95",2444099));let Fe=new Le(new Bo(1,64),De);Fe.rotation.x=-Math.PI/2,Fe.scale.set(4.05,2.6,1),Fe.position.set(-5,.23,10),e.add(Fe);for(let R=0;R<38;R++){let k=R/38*Math.PI*2;_(-5+Math.cos(k)*4.2,.12,10+Math.sin(k)*2.75,.45,.23,.36,g)}for(let R=0;R<7;R++){let k=O()*6.28,H=T(-5+Math.cos(k)*2.5,.245,10+Math.sin(k)*1.7,.25,.02,z[1])}_(-3.1,.12,10.7,.6,.2,.4,g),v(20.5,.04,11,7,.12,16,l("\u6CF3\u6C60\u84DD",5152430,{roughness:.16,metalness:.25}));for(let R of[16.8,24.2])v(R,.1,11,.4,.2,16.8,d);for(let R of[2.8,19.2])v(20.5,.1,R,7.8,.2,.4,d);for(let R of[18.5,20.5,22.5])v(R,.106,11,.05,.008,15,m);for(let R of[6,10,14,18])T(25,.65,R,.035,1.3,m),v(25,.65,R-1.9,.04,1.1,3.7,w);P(0,3,1.25),P(-12,14,1.2,!0),P(3,19,1,!0),P(23,-14,1.4),P(-23,12,1.2);for(let R=0;R<38;R++){let k=O()*6.28,H=Math.cos(k)*(2+O()),J=3+Math.sin(k)*(1.3+O());_(H,.17,J,.3+O()*.4,.25,.3+O()*.4,g)}for(let R of[-10,10,-23,23])for(let k of[-6,4,17])U(R,k);U(-2.3,20),U(2.3,20);for(let R of[-16,0,16]){let k=new jn(16763783,15,13,2);k.position.set(R,2.7,R===0?-11:0),e.add(k)}u0({box:v,cyl:T,mat:l,wood:h,linen:y,dark:m,glass:w,plaster:d,architecture:t,root:e,seats:o,obstacle:ri}),f0({box:v,ell:_,cyl:T,branch:E,mat:l,wood:h,oak:u,linen:y,dark:m,plaster:d,lightmat:M,glass:w,architecture:t,root:e,roofs:n,obstacle:ri,seats:o,tree:P,plant:N,table:le,chair:Se,sofa:Ee,books:ne,rug:$}),d0({box:v,ell:_,cyl:T,branch:E,mat:l,wood:h,oak:u,linen:y,dark:m,plaster:d,lightmat:M,glass:w,architecture:t,root:e,roofs:n,obstacle:ri,seats:o}),Wm({box:v,ell:_,cyl:T,branch:E,mat:l,wood:h,oak:u,linen:y,dark:m,glass:w,plaster:d,lightmat:M,architecture:t,root:e,seats:o,obstacle:ri,sofa:Ee,table:le,chair:Se,books:ne,plant:N,rug:$}),Xm({box:v,ell:_,cyl:T,mat:l,architecture:t,seats:o,obstacle:ri}),Hm({box:v,mat:l}),Vm({box:v,cyl:T,ell:_,branch:E,mat:l,wood:h,oak:u,dark:m,glass:w,linen:y,lightmat:M,plaster:d,seats:o,obstacle:ri,plant:N}),v(-14.3,7.1,-11.7,8.1,.2,1.4,x);for(let R of[-12.4,-11])v(-14.3,7.85,R,8.1,1.3,.05,w,!0);jm({box:v,mat:l,branch:E,root:e}),t.updateMatrixWorld(!0);let He=new Map;t.traverse(R=>{if(!R.isMesh)return;let k=R.geometry.clone().applyMatrix4(R.matrixWorld);if(k.index||k.setIndex(Array.from({length:k.attributes.position.count},(he,me)=>me)),k.attributes.uv||k.setAttribute("uv",new Ct(new Float32Array(k.attributes.position.count*2),2)),R.material.userData.worldUV){let he=k.attributes.position,me=k.attributes.normal,de=k.attributes.uv;for(let G=0;G<he.count;G++){let Xe=Math.abs(me.getX(G)),je=Math.abs(me.getY(G)),F=Math.abs(me.getZ(G)),S=R.material.name==="\u8349\u5730"?3:2;de.setXY(G,(Xe>je&&Xe>F?he.getZ(G):he.getX(G))/S,(je>Xe&&je>F?he.getZ(G):he.getY(G))/S)}}k.computeBoundingSphere();let H=new D().setFromMatrixPosition(R.matrixWorld),J=$m(H.x,H.y,H.z,k.boundingSphere.radius>18),K=R.material.uuid+":"+J,ue=He.get(K)||{material:R.material,zone:J,geos:[]};ue.geos.push(k),He.set(K,ue)}),e.remove(t);let ht=new et;e.add(ht);for(let{material:R,zone:k,geos:H}of He.values()){let J=wf(H,!1);if(!J)throw Error("\u6A21\u578B\u5408\u5E76\u5931\u8D25");let K=new Le(J,R);K.castShadow=R.name!=="\u73BB\u7483",K.receiveShadow=!0,K.name=R.name,K.userData.zone=k,K.frustumCulled=!0,ht.add(K),H.forEach(ue=>ue.dispose())}n.updateMatrixWorld(!0);let $e=new Map;n.traverse(R=>{if(!R.isMesh)return;let k=$e.get(R.material)||[],H=R.geometry.clone().applyMatrix4(R.matrixWorld);H.index||H.setIndex(Array.from({length:H.attributes.position.count},(J,K)=>K)),k.push(H),$e.set(R.material,k)}),n.clear();for(let[R,k]of $e){let H=new Le(wf(k),R);H.castShadow=!0,H.receiveShadow=!0,H.name=R.name,n.add(H),k.forEach(J=>J.dispose())}return{root:e,mats:c,pond:Fe,waterMat:De,plant:N,merged:ht,roofs:n,trees:s,plantSpots:r,seats:o}}function BM(i){return["pond","pool","river"].includes(i)?"water":["tea","rooftea"].includes(i)?"pavilion":["orchard","flowers","roofgarden"].includes(i)?"garden":["garage","market"].includes(i)?"building":"room"}var zM=[...fn.map((i,e)=>["office"+e,i.name,65,i.y,9.4,"office"]),...[["liftB","\u5730\u4E0B\u7535\u68AF\u5385",-3.6,"basement"],["liftG","\u4E00\u697C\u7535\u68AF\u5385",0,"ground"],["liftU","\u4E8C\u697C\u7535\u68AF\u5385",3.6,"upper"],["liftR","\u5929\u53F0\u7535\u68AF\u5385",7.2,"roof"]].map(([i,e,t,n])=>[i,e,-16.6,t,-11.7,n]),["entry","\u5EAD\u9662\u5165\u53E3",0,0,27,"ground"],["hall","\u4E00\u697C\u5BA2\u5385",0,0,-8,"ground"],["coffee","\u5496\u5561\u5427",5,0,-13.5,"ground"],["kitchen","\u53A8\u623F",-3.5,0,-14.8,"ground"],["library","\u4E66\u623F",-17,0,2.8,"ground"],["annex","\u897F\u7FFC\u4F1A\u5BA2\u5385",-19,0,-15,"ground"],["dining","\u5BA2\u9910\u5385",12,0,3,"ground"],["tea","\u5EAD\u9662\u8336\u5E2D",8,0,14.1,"ground"],["pond","\u9526\u9CA4\u6C60",-5,0,13.55,"ground"],["pool","\u6CF3\u6C60",15.3,0,7.8,"ground"],["flowers","\u5EAD\u9662\u82B1\u5703",15,0,16.9,"ground"],["orchard","\u679C\u56ED",-28,0,11,"ground"],["garage","\u8D8A\u91CE\u8F66\u8F66\u5E93",-14.3,0,23,"ground"],["swing","\u5EAD\u9662\u79CB\u5343",-9.5,0,23.4,"ground"],["market","\u8857\u9053\u96C6\u5E02",0,0,36,"ground"],["river","\u6CB3\u7554\u6B65\u9053",0,0,48,"ground"],["playterrace","\u513F\u7AE5\u6E38\u4E50\u9633\u53F0",13,3.6,-5,"upper"],["balcony","\u4E3B\u5367\u5C4B\u9876\u9633\u53F0",-16,3.6,-10,"upper"],["master","\u4E8C\u697C\u4E3B\u5367",-7,3.6,-9,"upper"],["child","\u513F\u7AE5\u623F",0,3.6,-8.9,"upper"],["bath","\u4E8C\u697C\u536B\u6D74",6,3.6,-15.4,"upper"],["rooftea","\u5929\u53F0\u8336\u4EAD",-4,7.2,-7.8,"roof"],["roofgarden","\u5929\u53F0\u82B1\u56ED",3,7.2,-10,"roof"],["roofswing","\u5929\u53F0\u79CB\u5343",2,7.2,-5.5,"roof"],["storage","\u5730\u4E0B\u50A8\u7269\u95F4",-20,-3.6,-15,"basement"],["games","\u7535\u7ADE\u623F",-14,-3.6,-15,"basement"],["ktv","KTV",-20,-3.6,-11.7,"basement"],["cinema","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,-3.6,-11.7,"basement"]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,y:n,z:s,level:r}));function m0({dialog:i,host:e,list:t,tabs:n,onTeleport:s,onOpen:r,onClose:o}){let a,c,l,h=[],u="ground",d=.45,f=.85,g=1,x=0,p,m=!1,y=document.createElement("div");y.className="guide-labels",e.append(y);let b=[],M=new D,w=new sa,A=new ce;function v(z,P,N,U,B,X,L){let V=new Le(new Wt(U,B,X),new nt({color:L,roughness:.85}));return V.position.set(z,P,N),c.add(V),V}function _(){if(!i.open)return;let z=e.clientWidth,P=e.clientHeight;a.setSize(z,P,!1),l.aspect=z/P,l.updateProjectionMatrix();let N=(u==="ground"?95:u==="office"?65:30)*g;l.position.copy(M).add(new D(Math.sin(d)*Math.cos(f)*N,Math.sin(f)*N,Math.cos(d)*Math.cos(f)*N)),l.lookAt(M),a.render(c,l);let U=[];for(let B of b){let X=B.marker.position.clone().project(l),L=B.button.offsetWidth||80,V=24,Y=Math.max(L/2,Math.min(z-L/2,(X.x*.5+.5)*z)),$=Math.max(0,Math.min(P-V,(-X.y*.5+.5)*P));for(let le=0;le<30&&U.some(Se=>Math.abs(Se.x-Y)<(Se.w+L)/2+3&&Math.abs(Se.y-$)<V);le++)$+=V+3,$>P-V&&($=0,Y=Math.max(L/2,Math.min(z-L/2,Y+L+6)));U.push({x:Y,y:$,w:L}),B.button.style.left=Y+"px",B.button.style.top=$+"px",B.button.style.display=Math.abs(X.x)>1.1||Math.abs(X.y)>1.1?"none":""}x=requestAnimationFrame(_)}function T(z){u=z,g=1,h=[],b=[],y.replaceChildren(),c?.traverse(N=>{N.geometry?.dispose(),N.material&&N.material.dispose()}),c=new Ys,c.background=new Ie("#172d29"),c.add(new nr(15855330,3691081,2.5));let P=new is(16768704,3);if(P.position.set(-20,40,20),c.add(P),u==="ground")M.set(0,0,13),v(0,-.7,12,68,1,78,5402714),v(0,1.8,-11,22,3.6,14,13025964),v(-16,1.5,-6,10,3,26,12298633),v(16,1.5,-.5,10,3,15,12298633),v(-17,1.5,20,8,3,8,9215634),v(0,.02,40,10,.12,20,10196356),v(0,.02,52,68,.12,6,5410715),v(20.5,.05,11,7,.15,16,5410715),v(-5,.05,10,8,.15,5,5410715);else if(u==="office"){M.set(58,8,15);for(let N of fn)v(58,N.y-.15,15,24,.15,22,9346438)}else M.set(u==="basement"?-18:0,0,u==="basement"?-13:-11),v(M.x,-.3,M.z,u==="basement"?14:22,.5,u==="basement"?12:14,9346438);u==="upper"&&(v(-16,-.3,-6,10,.5,26,12298633),v(16,-.3,-.5,10,.5,15,11914169)),t.replaceChildren();for(let N of zM.filter(U=>U.level===u)){let U=BM(N.id),B=U==="water"?new Tn(1.5,1.5,.12,32):U==="pavilion"?new di(1.5,1,32):U==="garden"?new js(1.1,1):new Wt(2.3,U==="building"?1.4:.22,1.6),X=new Le(B,new nt({color:U==="water"?6924730:U==="garden"?8890469:15714186,roughness:.8}));X.position.set(N.x,u==="ground"?4.1:u==="office"?N.y+.6:.5,N.z),U==="water"&&(X.scale.z=.65),X.userData.destination=N,c.add(X),h.push(X);let L=document.createElement("button");L.textContent=N.name,L.onclick=Y=>{Y.stopPropagation(),O(),s(N)},L.onpointerdown=Y=>Y.stopPropagation(),y.append(L),b.push({button:L,marker:X});let V=document.createElement("button");V.textContent=N.name+" \u2197",V.onclick=()=>{O(),s(N)},V.onmouseenter=()=>X.material.color.setHex(16777215),V.onmouseleave=()=>X.material.color.setHex(15714186),t.append(V)}n.querySelectorAll("button").forEach(N=>N.setAttribute("aria-pressed",String(N.dataset.level===u)))}function E(){a=new Qr({antialias:!0,powerPreference:"low-power"}),a.setPixelRatio(Math.min(devicePixelRatio,1.25)),e.append(a.domElement),l=new Ot(48,1,.1,220),e.onpointerdown=z=>{p={x:z.clientX,y:z.clientY,sx:z.clientX,sy:z.clientY},m=!1,e.setPointerCapture(z.pointerId)},e.onpointermove=z=>{p&&(Math.hypot(z.clientX-p.sx,z.clientY-p.sy)>5&&(m=!0),m&&(d-=(z.clientX-p.x)*.006,f=vn.clamp(f+(z.clientY-p.y)*.005,.3,1.45)),p.x=z.clientX,p.y=z.clientY)},e.onpointerup=z=>{if(!p||(p=null,m))return;let P=e.getBoundingClientRect();A.set((z.clientX-P.left)/P.width*2-1,-(z.clientY-P.top)/P.height*2+1),w.setFromCamera(A,l);let N=w.intersectObjects(h)[0];N&&(O(),s(N.object.userData.destination))},e.onpointercancel=()=>p=null,e.onwheel=z=>{z.preventDefault(),g=vn.clamp(g+z.deltaY*.001,.5,1.8)},e.style.touchAction="none"}function I(){i.open||(r(),i.showModal(),a||E(),T(u),_())}function O(){i.close(),cancelAnimationFrame(x),p=null,o()}return n.querySelectorAll("button").forEach(z=>z.onclick=()=>T(z.dataset.level)),i.querySelector("[data-close]").onclick=O,i.addEventListener("cancel",z=>{z.preventDefault(),O()}),{open:I,close:O}}var Rf={clear:"\u6674\u5929",rain:"\u96E8\u5929",snow:"\u96EA\u5929",wind:"\u5927\u98CE"};function g0(i,e){return(i+4)**2+(e+10)**2<3.8**2?10.2:i>-11&&i<11&&e>-18&&e<-4?7.2:i>-21&&i<-11&&e>-19&&e<7||i>11&&i<21&&e>-8&&e<7?3.8:i>-21.3&&i<-12.7&&e>15.7&&e<24.3?3.6:(i+4)**2+(e+10)**2<3.8**2?10.2:-.05}function x0(i,e){let t="clear",n={value:0},s={value:0},r={value:0},o=1e3,a=new Float32Array(o*6),c=Array.from({length:o},()=>({x:Math.random()*60-30,y:Math.random()*25,z:Math.random()*75-22})),l=new Mt;l.setAttribute("position",new Ct(a,3));let h=new Ks(l,new ys({color:12178911,transparent:!0,opacity:.55,depthWrite:!1}));h.frustumCulled=!1,i.add(h);let u=new Js(l,new Ms({color:15988474,size:.12,transparent:!0,opacity:.9,depthWrite:!1}));u.frustumCulled=!1,i.add(u);for(let p of Object.values(e.mats).filter(m=>!m.transparent&&!m.name.includes("\u5C4F\u5E55")&&!m.name.includes("\u7535\u89C6")))p.onBeforeCompile=m=>{m.uniforms.uSnow=r,m.vertexShader=`varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+m.vertexShader,m.vertexShader=m.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSnowWorld=(modelMatrix*vec4(position,1.)).xyz;vSnowNormal=normalize(mat3(modelMatrix)*normal);`),m.fragmentShader=`uniform float uSnow; varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+m.fragmentShader,m.fragmentShader=m.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec3 p=vSnowWorld;p.xz/=${Ge.toFixed(8)};float cover=-.05;
 if(p.x>-11.&&p.x<11.&&p.z>-18.&&p.z< -4.)cover=7.2;
 if((p.x> -21.&&p.x< -11.&&p.z> -19.&&p.z<7.)||(p.x>11.&&p.x<21.&&p.z> -8.&&p.z<7.))cover=3.8;
 if(p.x> -21.3&&p.x< -12.7&&p.z>15.7&&p.z<24.3)cover=3.6;
 if(pow(p.x+4.,2.)+pow(p.z+10.,2.)<14.44)cover=10.2;
 float snowMask=smoothstep(.45,.85,vSnowNormal.y)*step(cover-.2,p.y)*uSnow;
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.92,.95,.98),snowMask*.95);`)},p.customProgramCacheKey=()=>"snow-exposure-v1",p.needsUpdate=!0;let d=new Set;function f(){i.traverse(p=>{if(!p.isInstancedMesh)return;let m=p.material;d.has(m)||(d.add(m),m.onBeforeCompile=y=>{y.uniforms.uWind=n,y.uniforms.uWeatherTime=s,y.vertexShader=`uniform float uWind;uniform float uWeatherTime;
`+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x+=sin(uWeatherTime*2.0+position.y*.65)*uWind*min(max(position.y,0.)*.045,.28);`)},m.customProgramCacheKey=()=>"weather-wind-v1",m.needsUpdate=!0)})}function g(p){t=p,r.value=t==="snow"?1:0,n.value=t==="wind"?1:t==="rain"?.35:0,h.visible=t==="rain"||t==="wind",u.visible=t==="snow",h.material.opacity=t==="wind"?.16:.55,h.material.color.setHex(t==="wind"?13423030:12178911)}function x(p,m,y){if(s.value=m,t==="clear")return;let b=t==="wind"?160:o;l.setDrawRange(0,b*2);for(let M=0;M<b;M++){let w=c[M];w.y-=p*(t==="rain"?17:t==="snow"?1.6:1),w.x+=p*(t==="wind"?12:t==="snow"?Math.sin(m+M)*.6:3);let A=g0(w.x,w.z);(w.y<A||w.x>34||w.x<-34)&&(w.x=(Math.random()-.5)*66,w.z=Math.random()*72-22,w.y=12+Math.random()*15);let v=M*6;a[v]=w.x,a[v+1]=w.y,a[v+2]=w.z,a[v+3]=w.x+(t==="wind"?1.5:t==="rain"?.08:0),a[v+4]=Math.max(g0(w.x,w.z)+.03,w.y-(t==="rain"?.65:0)),a[v+5]=w.z}l.attributes.position.needsUpdate=!0}return g("clear"),{set:g,update:x,attachWind:f,get kind(){return t}}}function _0(i){let e=new Map,t=new Map,n=i.clone();return v0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function v0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)v0(i.children[n],e.children[n],t)}var lh=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new ch(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ch(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Kf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=ss.extractUrlBase(e);o=ss.resolveURL(l,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===T0){try{o[ft.KHR_BINARY_GLTF]=new Jf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new id(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new Nf;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new $f(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new jf;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new Qf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function kM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Df=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],pn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new is(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new jn(h),l.distance=u;break;case"spot":l=new ta(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Nf=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ff=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(r,r)}return Promise.all(s)}},Of=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Bf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},zf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},kf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Vf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],pn),Promise.all(s)}},Gf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Hf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},Wf=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Xf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Vn:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},qf=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Yf=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Zf=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ch=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Kf=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==oi.TRIANGLES&&l.mode!==oi.TRIANGLE_STRIP&&l.mode!==oi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ve,p=new D,m=new ln,y=new D(1,1,1),b=new Pi(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,x.compose(p,m,y));for(let M in c)if(M==="_COLOR_0"){let w=c[M];b.instanceColor=new _s(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);kt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},T0="glTF",Ra=12,y0={JSON:1313821514,BIN:5130562},Jf=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==T0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ra,r=new DataView(e,Ra),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===y0.JSON){let l=new Uint8Array(e,Ra+o,a);this.content=n.decode(l)}else if(c===y0.BIN){let l=Ra+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$f=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=td[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=td[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=io[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],p=c[g];p!==void 0&&(x.normalized=p)}u(f)},a,l,pn,d)})})}},jf=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qf=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},hh=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,p=-2*f+3*d,m=f-d,y=1-p,b=m-d+u;for(let M=0;M!==a;M++){let w=o[x+M+a],A=o[x+M+c]*h,v=o[g+M+a],_=o[g+M]*h;r[M]=y*w+b*A+p*v+m*_}return r}},VM=new ln,ed=class extends hh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return VM.fromArray(r).normalize().toArray(r),r}},oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},M0={9728:Bt,9729:vt,9984:lc,9985:Zr,9986:or,9987:An},S0={33071:zn,33648:Lr,10497:$t},Pf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},td={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},GM={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Ws},If={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function HM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new nt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),i.DefaultMaterial}function fr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function XM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qM(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Lf(t.attributes):e=i.indices+":"+Lf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Lf(i.targets[n]);return e}function Lf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function nd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ZM=new Ve,id=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new er(this.options.manager):this.textureLoader=new na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return fr(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Pf[s.type],a=io[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ct(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Pf[s.type],l=io[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,p;if(f&&f!==u){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,b=t.cache.get(y);b||(x=new l(a,m*f,s.count*f/h),b=new zr(x,f/h),t.cache.add(y,b)),p=new kr(b,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),p=new Ct(x,c,g);if(s.sparse!==void 0){let m=Pf.SCALAR,y=io[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new y(o[1],b,s.sparse.count*m),A=new l(o[2],M,s.sparse.count*c);a!==null&&(p=new Ct(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let v=0,_=w.length;v<_;v++){let T=w[v];if(p.setX(T,A[v*c]),c>=2&&p.setY(T,A[v*c+1]),c>=3&&p.setZ(T,A[v*c+2]),c>=4&&p.setW(T,A[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=M0[d.magFilter]||vt,h.minFilter=M0[d.minFilter]||An,h.wrapS=S0[d.wrapS]||$t,h.wrapT=S0[d.wrapT]||$t,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==vt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let p=new nn(x);p.needsUpdate=!0,d(p)}),t.load(ss.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zi(u,o),u.userData.mimeType=o.mimeType||YM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ms,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new ys,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return nt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wn);let h=r.alphaMode||If.OPAQUE;if(h===If.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===If.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==jt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jt){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],pn)}return r.emissiveTexture!==void 0&&o!==jt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&fr(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return b0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=qM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=b0(new Mt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?HM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],p=o[f],m,y=l[f];if(p.mode===oi.TRIANGLES||p.mode===oi.TRIANGLE_STRIP||p.mode===oi.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Lo(x,y):new Le(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===oi.TRIANGLE_STRIP?m.geometry=Af(m.geometry,Sa):p.mode===oi.TRIANGLE_FAN&&(m.geometry=Af(m.geometry,Jr));else if(p.mode===oi.LINES)m=new Ks(x,y);else if(p.mode===oi.LINE_STRIP)m=new Zs(x,y);else if(p.mode===oi.LINE_LOOP)m=new No(x,y);else if(p.mode===oi.POINTS)m=new Js(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&XM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),zi(m,r),p.extensions&&fr(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&fr(s,u[0],r),u[0];let d=new et;r.extensions&&fr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ot(vn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Di(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Do(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,p=x.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],p=u[4],m=[];for(let b=0,M=d.length;b<M;b++){let w=d[b],A=f[b],v=g[b],_=x[b],T=p[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let E=n._createAnimationTracks(w,A,v,_,T);if(E)for(let I=0;I<E.length;I++)m.push(E[I])}let y=new $o(r,void 0,m);return zi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ZM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Vr:l.length>1?h=new et:l.length===1?h=l[0]:h=new kt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&fr(n,h,r),r.matrix!==void 0){let u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new et;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&fr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(_0(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Ln||d instanceof nn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ps[r.path]===Ps.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Ps[r.path]){case Ps.weights:h=es;break;case Ps.rotation:h=ts;break;case Ps.translation:case Ps.scale:h=Ss;break;default:switch(n.itemSize){case 1:h=es;break;case 2:case 3:default:h=Ss;break}break}let u=s.interpolation!==void 0?GM[s.interpolation]:Xs,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Ps[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ts?ed:hh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function KM(i,e,t){let n=e.attributes,s=new cn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let h=nd(io[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=nd(io[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new kn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function b0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=td[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),zi(i,e),KM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?WM(i,e.targets,t):i})}var uh=class extends jo{constructor(e){super(e),this.type=Ut}parse(e){let o=function(_,T){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},u=function(_,T,E){T=T||1024;let O=_.pos,z=-1,P=0,N="",U=String.fromCharCode.apply(null,new Uint16Array(_.subarray(O,O+128)));for(;0>(z=U.indexOf(`
`))&&P<T&&O<_.byteLength;)N+=U,P+=U.length,O+=128,U=String.fromCharCode.apply(null,new Uint16Array(_.subarray(O,O+128)));return-1<z?(E!==!1&&(_.pos+=P+z+1),N+U.slice(0,z)):!1},d=function(_){let T=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},N,U;for((_.pos>=_.byteLength||!(N=u(_)))&&o(1,"no header found"),(U=N.match(T))||o(3,"bad initial token"),P.valid|=1,P.programtype=U[1],P.string+=N+`
`;N=u(_),N!==!1;){if(P.string+=N+`
`,N.charAt(0)==="#"){P.comments+=N+`
`;continue}if((U=N.match(E))&&(P.gamma=parseFloat(U[1])),(U=N.match(I))&&(P.exposure=parseFloat(U[1])),(U=N.match(O))&&(P.valid|=2,P.format=U[1]),(U=N.match(z))&&(P.valid|=4,P.height=parseInt(U[1],10),P.width=parseInt(U[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(_,T,E){let I=T;if(I<8||I>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);I!==(_[2]<<8|_[3])&&o(3,"wrong scanline width");let O=new Uint8Array(4*T*E);O.length||o(4,"unable to allocate buffer space");let z=0,P=0,N=4*I,U=new Uint8Array(4),B=new Uint8Array(N),X=E;for(;X>0&&P<_.byteLength;){P+4>_.byteLength&&o(1),U[0]=_[P++],U[1]=_[P++],U[2]=_[P++],U[3]=_[P++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=I)&&o(3,"bad rgbe scanline format");let L=0,V;for(;L<N&&P<_.byteLength;){V=_[P++];let $=V>128;if($&&(V-=128),(V===0||L+V>N)&&o(3,"bad scanline data"),$){let le=_[P++];for(let Se=0;Se<V;Se++)B[L++]=le}else B.set(_.subarray(P,P+V),L),L+=V,P+=V}let Y=I;for(let $=0;$<Y;$++){let le=0;O[z]=B[$+le],le+=I,O[z+1]=B[$+le],le+=I,O[z+2]=B[$+le],le+=I,O[z+3]=B[$+le],z+=4}X--}return O},g=function(_,T,E,I){let O=_[T+3],z=Math.pow(2,O-128)/255;E[I+0]=_[T+0]*z,E[I+1]=_[T+1]*z,E[I+2]=_[T+2]*z,E[I+3]=1},x=function(_,T,E,I){let O=_[T+3],z=Math.pow(2,O-128)/255;E[I+0]=xs.toHalfFloat(Math.min(_[T+0]*z,65504)),E[I+1]=xs.toHalfFloat(Math.min(_[T+1]*z,65504)),E[I+2]=xs.toHalfFloat(Math.min(_[T+2]*z,65504)),E[I+3]=xs.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let m=d(p),y=m.width,b=m.height,M=f(p.subarray(p.pos),y,b),w,A,v;switch(this.type){case Cn:v=M.length/4;let _=new Float32Array(v*4);for(let E=0;E<v;E++)g(M,E*4,_,E*4);w=_,A=Cn;break;case Ut:v=M.length/4;let T=new Uint16Array(v*4);for(let E=0;E<v;E++)x(M,E*4,T,E*4);w=T,A=Ut;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:w,header:m.string,gamma:m.gamma,exposure:m.exposure,type:A,colorSpace:pn,minFilter:vt,magFilter:vt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var fh=class extends Le{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new D(.70707,.70707,0),u=new Ie(t.sunColor!==void 0?t.sunColor:16777215),d=new Ie(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new D(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Kn,p=t.fog!==void 0?t.fog:!1,m=new ni,y=new D,b=new D,M=new D,w=new Ve,A=new D(0,0,-1),v=new _t,_=new D,T=new D,E=new _t,I=new Ve,O=new Ot,z=new zt(s,r,{type:Ut}),P={name:"MirrorShader",uniforms:hn.merge([we.fog,we.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new Ie(8355711)},sunDirection:{value:new D(.70707,.70707,0)},eye:{value:new D},waterColor:{value:new Ie(5592405)}}]),vertexShader:`
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
				}`},N=new yt({name:P.name,uniforms:hn.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:x,fog:p});N.uniforms.mirrorSampler.value=z.texture,N.uniforms.textureMatrix.value=I,N.uniforms.alpha.value=a,N.uniforms.time.value=c,N.uniforms.normalSampler.value=l,N.uniforms.sunColor.value=u,N.uniforms.waterColor.value=d,N.uniforms.sunDirection.value=h,N.uniforms.distortionScale.value=g,N.uniforms.eye.value=f,n.material=N,n.onBeforeRender=function(U,B,X){if(b.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(X.matrixWorld),w.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(w),_.subVectors(b,M),_.dot(y)>0)return;_.reflect(y).negate(),_.add(b),w.extractRotation(X.matrixWorld),A.set(0,0,-1),A.applyMatrix4(w),A.add(M),T.subVectors(b,A),T.reflect(y).negate(),T.add(b),O.position.copy(_),O.up.set(0,1,0),O.up.applyMatrix4(w),O.up.reflect(y),O.lookAt(T),O.far=X.far,O.updateMatrixWorld(),O.projectionMatrix.copy(X.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(O.projectionMatrix),I.multiply(O.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(y,b),m.applyMatrix4(O.matrixWorldInverse),v.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let L=O.projectionMatrix;E.x=(Math.sign(v.x)+L.elements[8])/L.elements[0],E.y=(Math.sign(v.y)+L.elements[9])/L.elements[5],E.z=-1,E.w=(1+L.elements[10])/L.elements[14],v.multiplyScalar(2/v.dot(E)),L.elements[2]=v.x,L.elements[6]=v.y,L.elements[10]=v.z+1-o,L.elements[14]=v.w,f.setFromMatrixPosition(X.matrixWorld);let V=U.getRenderTarget(),Y=U.xr.enabled,$=U.shadowMap.autoUpdate;n.visible=!1,U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(z),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(B,O),n.visible=!0,U.xr.enabled=Y,U.shadowMap.autoUpdate=$,U.setRenderTarget(V);let le=X.viewport;le!==void 0&&U.state.viewport(le)}}};var ki={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},JM=new Di(-1,1,1,-1,0,1),sd=class extends Mt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},$M=new sd,Vi=class{constructor(e){this._mesh=new Le($M,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var dh=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=hn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Pa=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ph=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ut}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dh(ki),this.copyPass.material.blending=Yt,this.timer=new ia}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pa!==void 0&&(o instanceof Pa?n=!0:o instanceof ph&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gh=class extends Nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ia={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ve},cameraProjectionMatrixInverse:{value:new Ve},cameraWorldMatrix:{value:new Ve},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},La={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},xh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function w0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=jM(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new mn(s,e,e);return r.wrapS=$t,r.wrapT=$t,r.needsUpdate=!0,r}function jM(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Da={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:rd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new Ve},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function rd(i,e,t){let n=QM(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function QM(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}var _h=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,x=t-f,p,m;g>x?(p=1,m=0):(p=0,m=1);let y=g-p+h,b=x-m+h,M=g-1+2*h,w=x-1+2*h,A=c&255,v=l&255,_=this.perm[A+this.perm[v]]%12,T=this.perm[A+p+this.perm[v+m]]%12,E=this.perm[A+1+this.perm[v+1]]%12,I=.5-g*g-x*x;I<0?n=0:(I*=I,n=I*I*this._dot(this.grad3[_],g,x));let O=.5-y*y-b*b;O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[T],y,b));let z=.5-M*M-w*w;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[E],M,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,x=h-g,p=u-g,m=d-g,y=e-x,b=t-p,M=n-m,w,A,v,_,T,E;y>=b?b>=M?(w=1,A=0,v=0,_=1,T=1,E=0):y>=M?(w=1,A=0,v=0,_=1,T=0,E=1):(w=0,A=0,v=1,_=1,T=0,E=1):b<M?(w=0,A=0,v=1,_=0,T=1,E=1):y<M?(w=0,A=1,v=0,_=0,T=1,E=1):(w=0,A=1,v=0,_=1,T=1,E=0);let I=y-w+f,O=b-A+f,z=M-v+f,P=y-_+2*f,N=b-T+2*f,U=M-E+2*f,B=y-1+3*f,X=b-1+3*f,L=M-1+3*f,V=h&255,Y=u&255,$=d&255,le=this.perm[V+this.perm[Y+this.perm[$]]]%12,Se=this.perm[V+w+this.perm[Y+A+this.perm[$+v]]]%12,Ee=this.perm[V+_+this.perm[Y+T+this.perm[$+E]]]%12,ne=this.perm[V+1+this.perm[Y+1+this.perm[$+1]]]%12,ge=.6-y*y-b*b-M*M;ge<0?s=0:(ge*=ge,s=ge*ge*this._dot3(this.grad3[le],y,b,M));let fe=.6-I*I-O*O-z*z;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[Se],I,O,z));let De=.6-P*P-N*N-U*U;De<0?o=0:(De*=De,o=De*De*this._dot3(this.grad3[Ee],P,N,U));let Fe=.6-B*B-X*X-L*L;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this._dot3(this.grad3[ne],B,X,L)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,g,x=(e+t+n+s)*c,p=Math.floor(e+x),m=Math.floor(t+x),y=Math.floor(n+x),b=Math.floor(s+x),M=(p+m+y+b)*l,w=p-M,A=m-M,v=y-M,_=b-M,T=e-w,E=t-A,I=n-v,O=s-_,z=T>E?32:0,P=T>I?16:0,N=E>I?8:0,U=T>O?4:0,B=E>O?2:0,X=I>O?1:0,L=z+P+N+U+B+X,V=o[L][0]>=3?1:0,Y=o[L][1]>=3?1:0,$=o[L][2]>=3?1:0,le=o[L][3]>=3?1:0,Se=o[L][0]>=2?1:0,Ee=o[L][1]>=2?1:0,ne=o[L][2]>=2?1:0,ge=o[L][3]>=2?1:0,fe=o[L][0]>=1?1:0,De=o[L][1]>=1?1:0,Fe=o[L][2]>=1?1:0,He=o[L][3]>=1?1:0,ht=T-V+l,$e=E-Y+l,R=I-$+l,k=O-le+l,H=T-Se+2*l,J=E-Ee+2*l,K=I-ne+2*l,ue=O-ge+2*l,he=T-fe+3*l,me=E-De+3*l,de=I-Fe+3*l,G=O-He+3*l,Xe=T-1+4*l,je=E-1+4*l,F=I-1+4*l,S=O-1+4*l,Z=p&255,j=m&255,ie=y&255,xe=b&255,ve=a[Z+a[j+a[ie+a[xe]]]]%32,se=a[Z+V+a[j+Y+a[ie+$+a[xe+le]]]]%32,oe=a[Z+Se+a[j+Ee+a[ie+ne+a[xe+ge]]]]%32,be=a[Z+fe+a[j+De+a[ie+Fe+a[xe+He]]]]%32,We=a[Z+1+a[j+1+a[ie+1+a[xe+1]]]]%32,Me=.6-T*T-E*E-I*I-O*O;Me<0?h=0:(Me*=Me,h=Me*Me*this._dot4(r[ve],T,E,I,O));let ye=.6-ht*ht-$e*$e-R*R-k*k;ye<0?u=0:(ye*=ye,u=ye*ye*this._dot4(r[se],ht,$e,R,k));let ze=.6-H*H-J*J-K*K-ue*ue;ze<0?d=0:(ze*=ze,d=ze*ze*this._dot4(r[oe],H,J,K,ue));let Ke=.6-he*he-me*me-de*de-G*G;Ke<0?f=0:(Ke*=Ke,f=Ke*Ke*this._dot4(r[be],he,me,de,G));let tt=.6-Xe*Xe-je*je-F*F-S*S;return tt<0?g=0:(tt*=tt,g=tt*tt*this._dot4(r[We],Xe,je,F,S)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Na=class i extends Nn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=w0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new zt(this.width,this.height,{type:Ut}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Ia.defines),uniforms:hn.clone(Ia.uniforms),vertexShader:Ia.vertexShader,fragmentShader:Ia.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ko,this.normalMaterial.blending=Yt,this.pdMaterial=new yt({defines:Object.assign({},Da.defines),uniforms:hn.clone(Da.uniforms),vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},La.defines),uniforms:hn.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:hn.clone(ki.uniforms),vertexShader:ki.vertexShader,fragmentShader:ki.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:la,blendDst:ir,blendEquation:Jn,blendSrcAlpha:aa,blendDstAlpha:ir,blendEquationAlpha:Jn}),this.blendMaterial=new yt({uniforms:hn.clone(xh.uniforms),vertexShader:xh.vertexShader,fragmentShader:xh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:oc,blendSrc:la,blendDst:ir,blendEquation:Jn,blendSrcAlpha:aa,blendDstAlpha:ir,blendEquationAlpha:Jn}),this._fsQuad=new Vi(null),this._originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new fi,this.depthTexture.format=Ni,this.depthTexture.type=Ts,this.normalRenderTarget=new zt(this.width,this.height,{minFilter:Bt,magFilter:Bt,type:Ut,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=rd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new _h,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new mn(s,e,e,_n,En);return r.wrapS=$t,r.wrapT=$t,r.needsUpdate=!0,r}};Na.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var A0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var so=class i extends Nn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zt(r,o,{type:Ut}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new zt(r,o,{type:Ut});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new zt(r,o,{type:Ut});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=A0;this.highPassUniforms=hn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hn.clone(ki.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:ki.vertexShader,fragmentShader:ki.fragmentShader,premultipliedAlpha:!0,blending:oa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new jt,this._fsQuad=new Vi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};so.BlurDirectionX=new ce(1,0);so.BlurDirectionY=new ce(0,1);var Ua={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var vh=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=hn.clone(Ua.uniforms),this.material=new Xr({name:Ua.name,uniforms:this.uniforms,vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader}),this._fsQuad=new Vi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===da?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oo=Object.freeze({flow:{name:"\u6D41\u7545",pixelRatio:.85,shadowSize:1024,shadowInterval:200,reflectionInterval:1/0,ao:!1,bloom:!1,near:7,medium:20,smallNear:4,smallMedium:12},balanced:{name:"\u5747\u8861",pixelRatio:1,shadowSize:1536,shadowInterval:100,reflectionInterval:160,ao:!1,bloom:!1,near:12,medium:32,smallNear:7,smallMedium:20},high:{name:"\u7CBE\u7EC6",pixelRatio:1.25,shadowSize:2048,shadowInterval:66,reflectionInterval:80,ao:!0,bloom:!0,near:20,medium:45,smallNear:12,smallMedium:28}}),ro=["flow","balanced","high"];function E0(i,e,t=!1,n=-1){let s=[t?e.smallNear:e.near,t?e.smallMedium:e.medium];if(n<0)return i<s[0]?0:i<s[1]?1:2;let r=n;for(;r<2&&i>s[r]*1.15;)r++;for(;r>0&&i<s[r-1]*.85;)r--;return r}function C0(i,e=12){let t=new Map;for(let n of i){let s=Math.floor(n.x/e)+":"+Math.floor(n.z/e);t.has(s)||t.set(s,[]),t.get(s).push(n)}return[...t.values()]}var yh=class{constructor(){this.level=1,this.mode="auto",this.reset()}reset(){this.duration=0,this.frames=0,this.slow=0,this.fast=0,this.cooldown=4,this.fps=0}setMode(e){if(!["auto",...ro].includes(e))throw Error("\u672A\u77E5\u753B\u8D28");return this.mode=e,e!=="auto"?this.level=ro.indexOf(e):this.level=1,this.reset(),ro[this.level]}sample(e){if(e<=0||e>1)return this.reset(),null;if(this.duration+=e,this.frames++,this.cooldown=Math.max(0,this.cooldown-e),this.duration<1)return null;this.fps=this.frames/this.duration;let t=this.duration;if(this.duration=0,this.frames=0,this.mode!=="auto"||this.cooldown>0)return null;this.slow=this.fps<38?this.slow+t:0,this.fast=this.fps>57?this.fast+t:0;let n=this.level;return this.slow>=2&&n>0?n--:this.fast>=14&&n<2&&n++,n===this.level?null:(this.level=n,this.slow=0,this.fast=0,this.cooldown=8,ro[n])}};function R0(i,e,t,n){let s=oo[i];if(!e.mobile)return{...s};let r={flow:1.35,balanced:1.6,high:1.85},o=Math.sqrt(24e5/Math.max(1,t*n));return{...s,pixelRatio:Math.min(r[i],e.pixelCap,o),near:Math.max(s.near,12),medium:Math.max(s.medium,28),smallNear:Math.max(s.smallNear,7),smallMedium:Math.max(s.smallMedium,18)}}function eS(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Ct(new Uint32Array(t.buffer),1)}function P0(i){let e=[];function t(s,r,{small:o=!1}={}){s.updateMatrixWorld(!0);let a=[];s.traverse(c=>{if(!c.isMesh)return;let l=[c.geometry];for(let h of["medium","far"]){let u=new Mt;u.setIndex(c.geometry.userData.lod?.[h]?eS(c.geometry.userData.lod[h]):c.geometry.index);for(let[d,f]of Object.entries(c.geometry.attributes))u.setAttribute(d,f);u.boundingBox=c.geometry.boundingBox?.clone()||null,u.boundingSphere=c.geometry.boundingSphere?.clone()||null,l.push(u)}a.push({geometries:l,material:c.material,matrix:c.matrixWorld.clone()})});for(let c of C0(r)){let l=new D;for(let u of c)l.add(new D(u.x,u.y||0,u.z));l.divideScalar(c.length);let h=[];for(let u=0;u<3;u++){let d=new et,f=0;for(let g of a){let x=new Pi(g.geometries[u],g.material,c.length);x.receiveShadow=!0,x.castShadow=u<2;let p=new Ve,m=new ln;for(let y=0;y<c.length;y++){let b=c[y],M=b.height/s.userData.height;m.setFromAxisAngle(new D(0,1,0),b.rotation||0),p.compose(new D(b.x,b.y||0,b.z),m,new D(M,M,M)),p.multiply(g.matrix),x.setMatrixAt(y,p)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere(),d.add(x),f+=(x.geometry.index?.count||x.geometry.attributes.position.count)/3*c.length}d.visible=!1,i.add(d),h.push({group:d,triangles:f})}e.push({center:l,small:o,levels:h,current:-1})}}function n(s,r){let o=!1;for(let a of e){let c=s.position.distanceTo(a.center),l=E0(c,r,a.small,a.current);if(l!==a.current){a.current=l;for(let h=0;h<3;h++)a.levels[h].group.visible=h===l;o=!0}}return o}return{add:t,update:n,get stats(){return{cells:e.length,triangles:e.reduce((s,r)=>s+(r.levels[r.current]?.triangles||0),0),nearCells:e.filter(s=>s.current===0).length}}}}function od(i,e=4){i.generateMipmaps=!0,i.minFilter=An,i.magFilter=vt,i.anisotropy=e,i.needsUpdate=!0}function ad(i,e){let t=new Set,n=Math.min(4,e.capabilities.getMaxAnisotropy());i.traverse(s=>{if(s.isMesh)for(let r of Array.isArray(s.material)?s.material:[s.material])for(let o of["map","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"]){let a=r[o];!a||t.has(a)||(t.add(a),od(a,n))}})}function Mh(i){return bf(i).then(e=>new Promise((t,n)=>new lh().parse(e,"",s=>{globalThis.MANSION_ASSETS[i].startsWith("assets/")||delete globalThis.MANSION_ASSETS[i],Qm(s.scene),t(s.scene)},n)))}function I0(i,e,t,n,{parent:s,queue:r,onLoaded:o=()=>{}}){let a=[],c=P0(s),l=(L,V,Y=14)=>$=>$.bird||Math.hypot($.x-L,$.z-V)<Y;function h(L){let V=new cn().setFromObject(L),Y=V.getSize(new D),$=V.getCenter(new D),le=new et;return L.position.add(new D(-$.x,-V.min.y,-$.z)),le.add(L),le.userData.height=Y.y,ad(L,t),le}function u(L,V,Y,$,le,Se=0){let Ee=L.clone(!0);return Ee.scale.set(le/L.userData.height/Ge,le/L.userData.height,le/L.userData.height/Ge),Ee.position.set(V,Y,$),Ee.rotation.y=Se,Ee.traverse(ne=>{ne.isMesh&&(ne.castShadow=!0,ne.receiveShadow=!0)}),s.add(Ee),Ee}let d=new et;s.add(d);let f=new js(1,1),g=new Tn(.08,.12,1,6),x=new nt({color:5795657}),p=new nt({color:7166274}),m=new Pi(f,x,e.trees.length),y=new Pi(g,p,e.trees.length);d.add(m,y),e.trees.forEach((L,V)=>{let Y=new Ve;Y.compose(new D(L.x,L.height*.7,L.z),new ln,new D(L.height*.25,L.height*.32,L.height*.25)),m.setMatrixAt(V,Y),Y.compose(new D(L.x,L.height*.25,L.z),new ln,new D(1,L.height*.5,1)),y.setMatrixAt(V,Y)}),m.computeBoundingSphere(),y.computeBoundingSphere(),r.add("\u6811\u6728\u6A21\u578B",async()=>{a[0]=h(await Mh("tree_small_02")),c.add(a[0],e.trees),s.remove(d),f.dispose(),g.dispose(),x.dispose(),p.dispose(),o()},{priority:2});let b=99,M=()=>(b=b*16807%2147483647,(b-1)/2147483646),w=[],A=[];for(let L=0;L<95;L++){let V=(M()-.5)*51,Y=(M()-.5)*43;Dm(V,Y)||Y<7&&Math.abs(V)<22||Math.abs(V)<3||V>3&&V<25&&Y>7||V>-10&&V<0&&Y<14||(w.push({x:V,z:Y,height:.3+M()*.75,rotation:M()*7}),L%2===0&&A.push({x:V+.5,z:Y+.3,height:.7+M()*.5,rotation:M()*7}))}for(let L=0;L<15;L++){let V=L/15*6.28;w.push({x:Math.cos(V)*2.1,z:3+Math.sin(V)*1.2,height:.45,rotation:V})}for(let[L,V,Y]of[["fern_02",1,w],["shrub_01",2,A],["potted_plant_02",5,e.plantSpots]])r.add(L,async()=>{a[V]=h(await Mh(L)),c.add(a[V],Y,{small:!0}),o()},{when:$=>$.bird||Y.some(le=>Math.hypot(le.x-$.x,le.z-$.z)<14),priority:8});r.add("\u5BA4\u5185\u5355\u6905",async()=>{a[3]=h(await Mh("modern_arm_chair_01")),u(a[3],12.8,0,2.8,1.12,.5),u(a[3],-12.7,0,3.7,1.12,-.7),u(a[3],-5,3.6,-15,1.05,1.3),o()},{when:L=>L.bird||L.z<9,priority:9}),r.add("\u4E66\u623F\u58C1\u7089",async()=>{let L=await Mh("interior");L.position.set(-20,0,.3),ad(L,t),L.traverse(V=>{V.isMesh&&(V.castShadow=!0,V.receiveShadow=!0)}),s.add(L),o()},{when:l(-20,.3,13),priority:7});let v=null;r.add("\u73AF\u5883\u5149",async()=>{let L=new uh().parse(await bf("environment")),V=new mn(L.data,L.width,L.height,_n,L.type);V.mapping=Yr,V.needsUpdate=!0,v=V,i.background=V,i.backgroundBlurriness=.04,i.environment=V,i.environmentRotation.y=1.2,i.backgroundRotation.y=1.2,n.visible=!1,o()},{priority:1});let _=128,T=new Uint8Array(_*_*4);for(let L=0;L<_;L++)for(let V=0;V<_;V++){let Y=(L*_+V)*4;T[Y]=128+Math.sin(V*.24+L*.09)*18,T[Y+1]=128+Math.cos(L*.21+V*.06)*18,T[Y+2]=250,T[Y+3]=255}let E=new mn(T,_,_);E.wrapS=E.wrapT=$t,od(E,Math.min(4,t.capabilities.getMaxAnisotropy()));let I=new fh(new pi(6.7,15.7),{textureWidth:384,textureHeight:384,waterNormals:E,sunDirection:new D(-.7,.5,.4),sunColor:16769198,waterColor:1523515,distortionScale:1.1,fog:!0});I.rotation.x=-Math.PI/2,I.position.set(20.5,.135,11),s.add(I);let O=I.material,z=new nt({color:2710100,metalness:.48,roughness:.18,normalMap:E,normalScale:new ce(.12,.12)}),P=oo.flow,N=-1/0,U=-1/0,B=0,X=I.onBeforeRender;return I.onBeforeRender=function(...L){L[1].overrideMaterial||!Number.isFinite(P.reflectionInterval)||(O.uniforms.eye.value.setFromMatrixPosition(L[2].matrixWorld),!(B-N<P.reflectionInterval)&&(N=B,X.apply(this,L)))},{pool:I,templates:a,normal:E,get environment(){return v},vegetation:c,setQuality(L){P=L,I.material=Number.isFinite(L.reflectionInterval)?O:z,N=-1/0,U=-1/0},update(L,V,Y){if(B=L,O.uniforms.time.value+=V*.45,L-U>200){let $={position:Y.position.clone()};$.position.x/=Ge,$.position.z/=Ge,c.update($,P),U=L}}}}function L0(i,e,t){let n,s,r,o=oo.flow;function a(){n||(n=new mh(i),n.addPass(new gh(e,t)),s=new Na(e,t,Math.max(1,innerWidth>>1),Math.max(1,innerHeight>>1)),s.updateGtaoMaterial({radius:.55,thickness:1,distanceFallOff:1,samples:6}),s.blendIntensity=.58,n.addPass(s),r=new so(new ce(innerWidth,innerHeight),.15,.45,1.15),n.addPass(r),n.addPass(new vh))}function c(){if(!s)return;let l=i.getPixelRatio();s.setSize(Math.max(1,Math.round(innerWidth*l*.5)),Math.max(1,Math.round(innerHeight*l*.5)))}return{setQuality(l){o=l,i.setPixelRatio(Math.min(devicePixelRatio,o.pixelRatio)),(o.ao||o.bloom)&&a(),n&&(s.enabled=o.ao,r.enabled=o.bloom,n.setPixelRatio(i.getPixelRatio()),c())},resize(l,h){n?.setSize(l,h),c()},render(){!o.ao&&!o.bloom?i.render(e,t):n.render()}}}var _e=i=>document.getElementById(i),mt=new Ys,ho=new et,pd=matchMedia("(pointer: coarse)"),Gi=Tf(innerWidth,pd.matches);document.body.dataset.mobile=String(Gi.mobile);var on=new Ot(Gi.fov,innerWidth/innerHeight,.08,230),Wa=new sh({onChange:i=>{_e("assetStatus").textContent=i.failed?"\u90E8\u5206\u7D20\u6750\u5F85\u91CD\u8BD5":i.active?"\u7EC6\u8282\u52A0\u8F7D\u4E2D\u2026":"\u7D20\u6750\u6309\u4F4D\u7F6E\u52A0\u8F7D",_e("assetStatus").title=`\u5DF2\u8F7D\u5165 ${i.loaded}/${i.total} \u9879\uFF1B\u5931\u8D25 ${i.failed} \u9879\uFF0C\u70B9\u51FB\u91CD\u8BD5`}}),gt;try{gt=new Qr({antialias:!0,powerPreference:"high-performance"})}catch(i){throw _e("loading").innerHTML="<h2>\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u5F00\u542F 3D</h2><p>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684 Chrome\u3001Edge \u6216 Safari\uFF0C\u5E76\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u3002</p>",i}gt.setPixelRatio(Math.min(devicePixelRatio,1));gt.setSize(innerWidth,innerHeight);gt.shadowMap.enabled=!0;gt.shadowMap.type=rc;gt.shadowMap.autoUpdate=!1;gt.shadowMap.needsUpdate=!0;gt.toneMapping=sr;gt.toneMappingExposure=.93;gt.outputColorSpace=dt;_e("scene").appendChild(gt.domElement);mt.fog=new Ro(11975337,.006);var z0=new nr(13822187,7827538,.8);mt.add(z0);var Xn=new is(16765338,2.4);Xn.position.set(-24,23,16);Xn.castShadow=!0;Xn.shadow.mapSize.set(1536,1536);Object.assign(Xn.shadow.camera,{left:-55,right:55,top:50,bottom:-50,near:1,far:150});Xn.shadow.bias=-3e-4;Xn.shadow.normalBias=.06;mt.add(Xn);var Ah=new Le(new gn(160,32,16),new yt({side:xn,depthWrite:!1,uniforms:{top:{value:new Ie("#739dba")},bottom:{value:new Ie("#efd0a1")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 v;uniform vec3 top;uniform vec3 bottom;void main(){float h=clamp(normalize(v).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);}"}));mt.add(Ah);var Eh=new Le(new gn(3,20,12),new jt({color:16770221}));Eh.position.set(-64,26,-103);mt.add(Eh);var tS=new er,cd=new Map,nS={\u8D70\u5ECA\u70DF\u718F\u6728:["wood",1,6574916],\u8349\u5730:["grass",1,9540993],\u77F3\u677F:["road",1,13684419],\u6D45\u6A61\u6728:["wood",1,12299925],\u80E1\u6843\u6728:["wood",1,9860435],\u7C73\u8272\u5899\u9762:["plaster",1,16774889],\u77F3\u6750:["stone",1,11120544],\u6DF1\u7070\u74E6:["roof",1,3554618]},k0={};for(let[i,[e,t,n]]of Object.entries(nS)){let s=new nt({name:i,color:n,roughness:.88});s.userData.worldUV=!0,s.normalScale.set(.3,.3),k0[i]=s;for(let[r,o]of[["color","map"],["normal","normalMap"],["roughness","roughnessMap"]]){let a=e+"-"+r;if(!globalThis.MANSION_ASSETS[a]||["road","plaster"].includes(e)&&r==="color"||e==="roof"&&r!=="roughness")continue;let l=cd.get(a)||{id:a,kind:r,slot:o,repeat:t,targets:[]};l.targets.push(s),cd.set(a,l)}}for(let i of cd.values())Wa.add(i.id,async()=>{let e=await tS.loadAsync(globalThis.MANSION_ASSETS[i.id]);e.wrapS=e.wrapT=$t,e.repeat.set(i.repeat,i.repeat),e.anisotropy=Math.min(8,gt.capabilities.getMaxAnisotropy()),i.kind==="color"&&(e.colorSpace=dt);for(let t of i.targets)t[i.slot]=e,t.needsUpdate=!0;globalThis.MANSION_ASSETS[i.id].startsWith("data:")&&delete globalThis.MANSION_ASSETS[i.id]},{priority:i.kind==="color"?3:Gi.mobile?6:12,when:e=>i.targets.some(t=>e.materials.has(t))});var Kt=p0({...k0,...Gm()});qm(Kt);mt.add(Kt.root);var ao,md=L0(gt,mt,on),dr=x0(mt,Kt),iS=Jm(Kt.root),dn=Om(mt,Kt.root.userData.officeLabels),V0=new D,sS=new jt({color:16753719,transparent:!0,opacity:.8}),G0=[];for(let i=0;i<7;i++){let e=new Le(new di(.08,.55,7),sS);e.position.set(-19.95+i%2*.2,.65,.3+(i-3)*.2),mt.add(e),G0.push(e)}var gd=new jn(16753742,6,5);gd.position.set(-19.3,1,.3);mt.add(gd);for(let[i,e]of[["\u7535\u89C6\u753B\u9762","\u5C71\u6C34\u4E4B\u95F4 \xB7 \u98CE\u666F\u9891\u9053"],["\u7535\u7ADE\u5C4F\u5E55","\u6E38\u620F\u5927\u5385 \xB7 \u51C6\u5907\u5C31\u7EEA"]]){let t=document.createElement("canvas");t.width=640,t.height=360;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,360);s.addColorStop(0,"#283f55"),s.addColorStop(1,"#b2c5ac"),n.fillStyle=s,n.fillRect(0,0,640,360);for(let o=0;o<3;o++){n.fillStyle=["#7b9a99","#526f72","#304e53"][o],n.beginPath(),n.moveTo(0,360);for(let a=0;a<=640;a+=20)n.lineTo(a,170+o*45+Math.sin(a*.012+o)*55+Math.cos(a*.026)*18);n.lineTo(640,360),n.fill()}n.fillStyle="#f4e9c9",n.font="24px sans-serif",n.fillText(e,28,43),n.font="16px sans-serif",n.fillText(i==="\u7535\u7ADE\u5C4F\u5E55"?"\u6B22\u8FCE\u56DE\u5BB6\uFF0C\u653E\u677E\u4E00\u4E0B":"\u4E61\u6751\u751F\u6D3B \xB7 \u6162\u4EAB\u65F6\u5149",28,326);let r=new Dn(t);r.colorSpace=dt,Kt.mats[i].map=r,Kt.mats[i].needsUpdate=!0}var xd=new jn(16767669,125,23,2);xd.position.set(-18,-1.3,-13);mt.add(xd);var rS=Array.from({length:2},()=>{let i=new jn(16769723,0,16,2);return mt.add(i),i}),H0=Kt.root.userData.vendors.map((i,e)=>{let t=Oi({shirt:[9730912,7441528,12095865][e%3],pants:4213576,female:e%2===1});return t.g.position.set(i.x,0,i.z),t.g.rotation.y=i.rotation,mt.add(t.g),t}),Ze=Oi({shirt:12892052,pants:4215628});mt.add(Ze.g);var re=new D(0,0,19);Ze.g.position.copy(re);Ze.g.rotation.y=Math.PI;var Xa=Oi({shirt:12624012,pants:15590094,female:!0});Xa.g.position.set(-6,0,-15.1);mt.add(Xa.g);var Is=Oi({shirt:7904683,pants:4545380,scale:.69});mt.add(Is.g);Is.g.position.set(0,0,16.8);var pr=Oi({shirt:10327161,pants:6120278,hair:13223865,scale:.97});pr.g.position.set(-14,-.08,-3);mt.add(pr.g);var qa=Oi({shirt:10785965,pants:6712160,hair:12435124,female:!0,scale:.93});qa.g.position.set(12,0,16.9);mt.add(qa.g);var Ch=[gf(13081187),gf(14736848)];Ch.forEach(i=>mt.add(i.g));var W0=Array.from({length:9},(i,e)=>Im([15115083,15065554,12412229][e%3]));W0.forEach(i=>mt.add(i));var za=[xf(),xf()];za.forEach(i=>mt.add(i));var Rh=new Le(new Wt(.45,.04,.32),new nt({color:14668205}));Rh.position.set(0,1.08,.4);Rh.rotation.x=-.3;pr.g.add(Rh);var X0=new Le(new gn(.22,16,12),new nt({color:14067302}));mt.add(X0);var oS=Ze,Wn=new eh([oS,Xa,Is,pr,qa].map((i,e)=>({actor:i,name:["\u7238\u7238","\u5988\u5988","\u5B69\u5B50","\u7237\u7237","\u5976\u5976"][e],position:{x:i.g.position.x,y:Math.round(i.g.position.y/3.6)*3.6,z:i.g.position.z}}))),Mi=Bm();Mi.root.position.set(3,0,19);mt.add(Mi.root);var Fn=!1,Rt=new to,q0=zm();mt.add(q0.root);s0(Rt);var Y0=new D,aS=[],Fa=0,Z0=0,K0=0,Tt=Lm,Un=!1,en=null,Ga=0,Bn=!1,On="stand",Ft=null,tn={height:0,velocity:0},Oa=new D(0,0,9),ka=100,Va=.67,Hn=0,lo=.24,Ha=Gi.distance,uo=!1,hd=0,wh=0,yn=Ym(_e("moveJoystick"),_e("joystickThumb")),Ls=null,Dt=new Set,D0;function Nt(i){_e("toast").textContent=i,_e("toast").classList.add("show"),clearTimeout(D0),D0=setTimeout(()=>_e("toast").classList.remove("show"),3800)}var lS=[{id:"sandplay",x:14,z:1.5,y:3.6,title:"\u4E00\u8D77\u73A9\u6C99\u5B50",hint:"\u513F\u7AE5\u9633\u53F0 \xB7 \u6C99\u6C60\u65F6\u5149",type:"\u4EB2\u5B50\u65F6\u5149",heading:"\u5C0F\u5C0F\u6C99\u5821",body:"<p>\u62FF\u8D77\u5C0F\u6876\u548C\u94F2\u5B50\uFF0C\u966A\u5B69\u5B50\u642D\u4E00\u5EA7\u6C99\u5821\u3002\u73A9\u597D\u540E\uFF0C\u628A\u73A9\u5177\u6536\u56DE\u65C1\u8FB9\u7684\u67DC\u5B50\u3002</p>",mood:"\u4EAB\u53D7\u4EB2\u5B50\u65F6\u5149"},...Cs.filter(i=>i.interior).flatMap(i=>[-1,1].map(e=>({id:i.id,x:i.x+(i.axis==="z"?e*.8:0),z:i.z+(i.axis==="x"?e*.8:0),y:i.y,title:"\u5F00\u5173"+i.name,hint:"\u9760\u8FD1\u623F\u95E8 \xB7 \u6309 E \u6216\u70B9\u51FB\u5F00\u5173"}))),...[["gate",0,28.4,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["gate",0,31.6,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["basementDoor",-23.5,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"],["basementDoor",-21.2,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"]].map(([i,e,t,n,s])=>({id:i,x:e,z:t,y:n,title:s,hint:"\u6309 E \u5F00\u5173 \xB7 \u8BF7\u907F\u5F00\u95E8\u6247\u8303\u56F4"})),...[["rooftea",-4,-7.8,7.2,"\u5728\u5929\u53F0\u559D\u8336","\u5929\u53F0\u8336\u5E2D","\u7AEF\u8D77\u9752\u74F7\u676F\uFF0C\u4FEF\u77B0\u679C\u56ED\u3001\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"],["roofplant",3,-11,7.2,"\u5728\u5929\u53F0\u79CD\u82B1","\u5929\u53F0\u82B1\u56ED","\u628A\u65B0\u82B1\u82D7\u79CD\u8FDB\u5929\u53F0\u7684\u5C0F\u82B1\u5703\u3002"],["coffee",5,-14,0,"\u78E8\u4E00\u676F\u5496\u5561","\u4E00\u697C\u5496\u5561\u5427","\u5496\u5561\u673A\u6E29\u70ED\u8D77\u6765\uFF0C\u676F\u4E2D\u6563\u51FA\u9999\u6C14\u3002"],["tv",1.6,-10,0,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u4E00\u697C\u8D77\u5C45\u5385","\u7535\u89C6\u5207\u6362\u5230\u53E6\u4E00\u5E45\u5C71\u6C34\u8272\u8C03\u7684\u753B\u9762\u3002"],["tv",-14,-11.7,-3.6,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385","\u5728\u6C99\u53D1\u65C1\u770B\u770B\u7535\u89C6\uFF0C\u6162\u6162\u5EA6\u8FC7\u95F2\u6687\u65F6\u5149\u3002"],["ktv",-19,-11.7,-3.6,"\u64AD\u653E\u4E00\u6BB5\u793A\u8303\u4F34\u594F","\u7CD6\u679C\u661F\u5149 KTV","\u7C89\u5F69\u8F6F\u5305\u4E0E\u661F\u661F\u706F\u4E0B\uFF0C\u4E00\u8D77\u5531\u9996\u6B4C\u5427\u3002\u793A\u8303\u4F34\u594F\u6B63\u5728\u64AD\u653E\uFF0C\u9EA6\u514B\u98CE\u5C31\u5728\u8336\u51E0\u65C1\u3002"],["game",-14,-15,-3.6,"\u542F\u52A8\u7535\u7ADE\u684C\u9762","\u5730\u4E0B\u7535\u7ADE\u623F","\u663E\u793A\u5668\u70B9\u4EAE\uFF0C\u4ECA\u665A\u53EF\u4EE5\u5728\u8FD9\u91CC\u4F11\u95F2\u4E00\u4E0B\u3002"],["storage",-20,-15,-3.6,"\u67E5\u770B\u50A8\u7269\u95F4","\u5730\u4E0B\u50A8\u7269\u95F4","\u6574\u9F50\u7684\u67B6\u5B50\u4E0A\u5206\u653E\u7740\u6362\u5B63\u7269\u54C1\u3001\u56ED\u827A\u7528\u54C1\u4E0E\u751F\u6D3B\u5907\u54C1\u3002"],["peach",-28,11,0,"\u770B\u770B\u6811\u4E0A\u7684\u6843\u5B50","\u5EAD\u9662\u679C\u56ED","\u679D\u5934\u6302\u7740\u7C89\u5AE9\u7684\u6843\u5B50\uFF0C\u679C\u9999\u6DF7\u7740\u8349\u6728\u7684\u6C14\u606F\u3002"],["orange",-28,21,0,"\u770B\u770B\u6811\u4E0A\u7684\u6A58\u5B50","\u5EAD\u9662\u679C\u56ED","\u6A58\u5B50\u5728\u53F6\u95F4\u6CDB\u7740\u6696\u8272\uFF0C\u7B49\u5BB6\u4EBA\u4E00\u8D77\u8FC7\u6765\u91C7\u6536\u3002"],["market",-7,33.5,0,"\u901B\u901B\u9C9C\u679C\u644A","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u62DB\u547C\u4F60\u770B\u770B\u4ECA\u5929\u521A\u6458\u4E0B\u6765\u7684\u65F6\u4EE4\u6C34\u679C\u3002"],["market",7,38.5,0,"\u770B\u770B\u4E61\u6751\u70B9\u5FC3","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u6B63\u5728\u6574\u7406\u70B9\u5FC3\uFF0C\u6CB3\u5CB8\u5C31\u5728\u8857\u9053\u524D\u65B9\u3002"]].map(([i,e,t,n,s,r,o])=>({id:i,x:e,z:t,y:n,title:s,heading:r,hint:r+" \xB7 \u6309 E \u4E92\u52A8",type:r,body:"<p>"+o+"</p>",mood:s})),{id:"read",x:-17,z:2.8,y:0,title:"\u5750\u4E0B\u6765\uFF0C\u8BFB\u4E00\u672C\u4E66",hint:"\u4E66\u623F \xB7 \u6728\u9999\u4E0E\u58C1\u7089",type:"\u9605\u8BFB\u65F6\u5149",heading:"\u628A\u65F6\u95F4\u7559\u7ED9\u4E00\u9875\u4E66",body:'<p class="quote">\u5C71\u9759\u4F3C\u592A\u53E4\uFF0C\u65E5\u957F\u5982\u5C0F\u5E74\u3002</p><p>\u4F60\u7FFB\u5F00\u684C\u4E0A\u7684\u8BD7\u96C6\u3002\u7A97\u5916\u7684\u6811\u5F71\u8F7B\u8F7B\u6643\u52A8\uFF0C\u58C1\u7089\u91CC\u4F20\u6765\u6728\u67F4\u7EC6\u788E\u7684\u58F0\u54CD\u3002\u7237\u7237\u62AC\u5934\u7B11\u4E86\u7B11\uFF0C\u53C8\u4F4E\u5934\u8BFB\u8D77\u624B\u91CC\u7684\u4E66\u3002</p>',mood:"\u8BFB\u4E86\u4E00\u9875\u4E66\uFF0C\u5FC3\u4E5F\u9759\u4E86\u4E0B\u6765"},{id:"tea",x:8,z:14.1,y:0,title:"\u5750\u4E0B\u559D\u4E00\u676F\u8336",hint:"\u5EAD\u9662\u8336\u5E2D \xB7 \u70ED\u8336\u521A\u597D",type:"\u4E00\u76CF\u8336\u7684\u65F6\u95F4",heading:"\u665A\u98CE\uFF0C\u548C\u4E00\u676F\u6E29\u70ED\u7684\u8336",body:'<p>\u4F60\u5728\u8336\u5E2D\u65C1\u5750\u4E0B\uFF0C\u7AEF\u8D77\u9752\u74F7\u676F\u3002\u6E29\u70ED\u7684\u8336\u9999\u6563\u5F00\uFF0C\u6C60\u5858\u7684\u6C34\u58F0\u5728\u8FDC\u5904\u54CD\u8D77\u3002</p><p class="quote">\u4ECA\u5929\u4E5F\u8F9B\u82E6\u4E86\u3002\u6162\u4E00\u70B9\uFF0C\u518D\u6162\u4E00\u70B9\u3002</p>',mood:"\u559D\u8FC7\u4E00\u676F\u8336\uFF0C\u8EAB\u5FC3\u8212\u5C55"},{id:"plant",x:15,z:16.9,y:0,title:"\u5728\u82B1\u5703\u79CD\u4E00\u682A\u82B1",hint:"\u5EAD\u9662\u82B1\u5703 \xB7 \u4EB2\u624B\u79CD\u4E0B\u5C0F\u5C0F\u671F\u5F85",type:"\u82B1\u56ED\u65E5\u8BB0",heading:"\u8BA9\u82B1\u56ED\u518D\u591A\u4E00\u70B9\u989C\u8272",body:"<p>\u4F60\u677E\u4E86\u677E\u571F\uFF0C\u79CD\u4E0B\u82B1\u82D7\uFF0C\u6D47\u4E0A\u4E00\u70B9\u6C34\u3002\u5976\u5976\u5728\u65C1\u8FB9\u63D0\u9192\u4F60\uFF1A\u201C\u6BCF\u5929\u6765\u770B\u770B\uFF0C\u522B\u6D47\u592A\u591A\u3002\u201D</p><p>\u65B0\u79CD\u7684\u82B1\u5DF2\u7ECF\u51FA\u73B0\u5728\u82B1\u5703\u4E2D\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u79CD\u4E0B\u66F4\u591A\u82B1\u3002</p>",mood:"\u79CD\u4E0B\u4E86\u4E00\u70B9\u65B0\u7684\u671F\u5F85"},{id:"fish",x:-5,z:13.55,y:0,title:"\u6295\u5582\u9526\u9CA4\uFF0C\u770B\u770B\u4E4C\u9F9F",hint:"\u9526\u9CA4\u6C60 \xB7 \u9C7C\u513F\u4F1A\u6E38\u8FC7\u6765",type:"\u6C60\u5858\u8FB9",heading:"\u6C34\u9762\u4E0B\u7684\u5C0F\u5C0F\u90BB\u5C45",body:"<p>\u4F60\u6492\u4E0B\u4E00\u628A\u9C7C\u7CAE\uFF0C\u9526\u9CA4\u6162\u6162\u805A\u62E2\u8FC7\u6765\uFF0C\u91D1\u8272\u7684\u5C3E\u9CCD\u5212\u51FA\u4E00\u9053\u9053\u6D9F\u6F2A\u3002\u77F3\u5934\u4E0A\u7684\u4E4C\u9F9F\u6B63\u5728\u6652\u592A\u9633\u3002</p>",mood:"\u9C7C\u513F\u5403\u9971\u4E86\uFF0C\u6C34\u9762\u6CDB\u8D77\u6D9F\u6F2A"},{id:"cook",x:-3.5,z:-14.8,y:0,title:"\u548C\u59BB\u5B50\u804A\u804A\u665A\u9910",hint:"\u53A8\u623F \xB7 \u4ECA\u665A\u4E00\u8D77\u5403\u996D",type:"\u53A8\u623F\u91CC\u7684\u5BF9\u8BDD",heading:"\u201C\u56DE\u6765\u5566\uFF1F\u518D\u7B49\u4E00\u4F1A\u513F\u3002\u201D",body:"<p>\u59BB\u5B50\u6B63\u5728\u6599\u7406\u53F0\u524D\u51C6\u5907\u665A\u9910\u3002\u4F60\u5E2E\u5979\u9012\u8FC7\u7897\uFF0C\u5979\u7B11\u7740\u8BF4\uFF1A\u201C\u4ECA\u5929\u505A\u4E86\u5927\u5BB6\u7231\u5403\u7684\uFF0C\u5F85\u4F1A\u513F\u53EB\u5B69\u5B50\u6D17\u624B\u5403\u996D\u3002\u201D</p>",mood:"\u5E2E\u5FD9\u51C6\u5907\u4E86\u665A\u9910"},{id:"rest",x:-7,z:-10.8,y:3.6,title:"\u5728\u5367\u5BA4\u4F11\u606F\u7247\u523B",hint:"\u4E8C\u5C42\u4E3B\u5367 \xB7 \u8FDC\u79BB\u55A7\u95F9",type:"\u4F11\u606F\u7247\u523B",heading:"\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5B89\u9759\u89D2\u843D",body:"<p>\u67D4\u8F6F\u7684\u5E8A\u54C1\u3001\u6E29\u6696\u7684\u6728\u8272\u548C\u7A97\u5916\u7684\u665A\u971E\u3002\u4F60\u5750\u5728\u5E8A\u8FB9\uFF0C\u4F38\u4E86\u4E2A\u61D2\u8170\u3002</p>",mood:"\u4F11\u606F\u4E86\u4E00\u4F1A\u513F\uFF0C\u7CBE\u795E\u7115\u53D1"},{id:"kid",x:0,z:-8.9,y:3.6,title:"\u770B\u770B\u5B69\u5B50\u7684\u79EF\u6728",hint:"\u4E8C\u5C42\u513F\u7AE5\u623F \xB7 \u5C0F\u5C0F\u5EFA\u7B51\u5E08",type:"\u5C0F\u5C0F\u4E16\u754C",heading:"\u5C0F\u5C0F\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u5BB6",body:"<p>\u76AE\u5361\u4E18\u5B88\u7740\u5E8A\u8FB9\uFF0C\u7CBE\u7075\u7403\u6574\u9F50\u6446\u5728\u6536\u85CF\u67DC\u4E0A\u3002\u5B69\u5B50\u9080\u8BF7\u4F60\u4E00\u8D77\u7528\u79EF\u6728\u642D\u5EFA\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u57FA\u5730\u3002</p>",mood:"\u53D1\u73B0\u4E86\u5B69\u5B50\u7684\u5C0F\u5C0F\u4E16\u754C"}];function cS(){if(Fa>=12)return Nt("\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\uFF0C\u6765\u6B23\u8D4F\u4E00\u4E0B\u5427\u3002"),!1;let i=new et,e=14.35+Fa%3*.65,t=18+Math.floor(Fa/3)*.62;for(let n=0;n<5;n++){let s=new Le(new Tn(.018,.025,.5,5),new nt({color:6587464}));s.position.set(e+Math.sin(n)*.1,.65,t+Math.cos(n)*.1),i.add(s);let r=new Le(new gn(.105,8,6),new nt({color:[14921892,15194009,12296654][Fa%3]}));r.position.copy(s.position),r.position.y=.95,r.scale.y=.55,i.add(r)}return ho.add(i),aS.push(i),Fa++,!0}function J0(i){Dt.clear(),yn.reset(),Bn=!0,_e("modalType").textContent=i.type,_e("modalTitle").textContent=i.heading,_e("modalBody").innerHTML=i.body,_e("modalDone").textContent="\u7EE7\u7EED\u6563\u6B65",_e("modal").showModal(),_e("mood").textContent=i.mood||"\u95F2\u5EAD\u6F2B\u6B65"}var Sh=0;function hS(){if(Sh>=8)return Nt("\u5929\u53F0\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\u3002"),!1;let i=2.6+Sh%2*.55,e=-12.6+Math.floor(Sh/2)*.35,t=new et,n=new Le(new Tn(.016,.018,.45,6),new nt({color:6584910}));n.position.set(i,7.95,e),t.add(n);let s=new Le(new gn(.12,10,8),new nt({color:14788784}));return s.position.set(i,8.2,e),s.scale.y=.55,t.add(s),ho.add(t),Sh++,!0}function uS(){let i=new(window.AudioContext||window.webkitAudioContext);i.resume(),[262,330,392,330,294,349,440,349,262,330,392,523,440,392,330,262].forEach((e,t)=>{let n=i.createOscillator(),s=i.createGain(),r=i.currentTime+t*.32;n.type="sine",n.frequency.value=e,s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.075,r+.025),s.gain.exponentialRampToValueAtTime(.001,r+.3),n.connect(s),s.connect(i.destination),n.start(r),n.stop(r+.31)}),setTimeout(()=>i.close(),6e3)}function $0(){if(Rt.phase!=="idle"||dn.lift.phase!=="idle")return;if(Fn){fd();return}if(en?.id==="bicycle"){fd();return}if(en?.id==="officeElevator"){rg();return}if(en?.id==="elevator"){sg();return}if(!en||_e("modal").open)return;let i=en;if(Cs.some(e=>e.id===i.id)){if(Km(i.id,re)){let e=Cs.find(t=>t.id===i.id);Nt(e.name+(e.open?"\u6B63\u5728\u6253\u5F00":"\u6B63\u5728\u5173\u95ED"))}else Nt("\u8BF7\u7A0D\u5FAE\u9000\u540E\uFF0C\u518D\u5173\u95ED\u95E8");return}if(!(i.id==="roofplant"&&!hS())){if(i.id==="rooftea"&&Hi("sit"),i.id==="ktv"&&uS(),i.id==="tv"){let e=Kt.mats.\u7535\u89C6\u753B\u9762;e.color.setHex(e.color.getHex()===7574929?12489840:7574929),e.emissive.copy(e.color).multiplyScalar(.4)}if(i.id==="game"&&(Kt.mats.\u7535\u7ADE\u5C4F\u5E55.emissiveIntensity=1.2),!(i.id==="plant"&&!cS())){if(i.id==="fish"&&(Z0=Ga+25),i.id==="dog"){K0=Ga+15,Nt("\u8C46\u8C46\u548C\u56E2\u56E2\u5F00\u5FC3\u5730\u6447\u8D77\u4E86\u5C3E\u5DF4\uFF0C\u8DDF\u7740\u4F60\u4E00\u8D77\u6563\u6B65\u3002");return}(i.id==="tea"||i.id==="read")&&(Ze.legs.forEach(e=>{e.rotation.x=-1.25,e.lower.rotation.x=1.25}),Ze.arms.forEach(e=>e.rotation.x=-1),Ze.g.position.set(i.id==="tea"?8:-17,-.1,i.id==="tea"?13.2:2.1),Ze.g.rotation.y=Math.PI),J0(i)}}}function Hi(i){if(Fn||Rt.phase!=="idle"||dn.lift.phase!=="idle"||tn.height>0)return;if(i==="stand"||On===i){On="stand",Ft=null,Ze.g.rotation.x=0,Ze.g.position.copy(re),_e("mood").textContent="\u95F2\u5EAD\u6F2B\u6B65";return}let t=Kt.seats.filter(n=>n.type===i&&Math.abs(n.y-re.y)<.5&&Math.hypot(n.x-re.x,n.z-re.z)<3.3).sort((n,s)=>Math.hypot(n.x-re.x,n.z-re.z)-Math.hypot(s.x-re.x,s.z-re.z))[0];On=i,Dt.clear(),yn.reset(),Ft=t?{...t}:{x:re.x,z:re.z,y:re.y,rotation:Ze.g.rotation.y,type:i,ground:!0},_e("mood").textContent=i==="sit"?"\u5750\u4E0B\u6B47\u4E00\u4F1A\u513F":"\u8EBA\u4E0B\u6765\uFF0C\u770B\u770B\u5929\u7A7A",Nt(i==="sit"?"\u5DF2\u5750\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 C \u8D77\u8EAB":"\u5DF2\u8EBA\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 L \u8D77\u8EAB")}_e("sitBtn").onclick=()=>Hi("sit");_e("lieBtn").onclick=()=>Hi("lie");_e("jumpBtn").onclick=()=>{Fn||Rt.phase!=="idle"||dn.lift.phase!=="idle"||(On!=="stand"&&Hi("stand"),Cf(tn))};_e("birdBtn").onclick=()=>{Tt=Tt===2?0:2,Ds()};_e("roofBtn").onclick=()=>{Kt.roofs.visible=!Kt.roofs.visible,_e("roofBtn").textContent=Kt.roofs.visible?"\u9690\u85CF\u5C4B\u9876":"\u663E\u793A\u5C4B\u9876",gt.shadowMap.needsUpdate=!0};var Qn=new yh;Qn.setMode(_f);var yi=oo.balanced,ud=-1/0,N0=0;gt.info.autoReset=!1;function Ph(i){yi=R0(i,Gi,innerWidth,innerHeight),md.setQuality(yi),ao?.setQuality(yi),Xn.shadow.mapSize.x!==yi.shadowSize&&(Xn.shadow.map?.dispose(),Xn.shadow.map=null,Xn.shadow.mapPass?.dispose(),Xn.shadow.mapPass=null,Xn.shadow.mapSize.set(yi.shadowSize,yi.shadowSize)),gt.shadowMap.needsUpdate=!0,ud=-1/0,_e("qualityBtn").textContent=(Qn.mode==="auto"?"\u81EA\u52A8\uFF1A":"\u753B\u8D28\uFF1A")+yi.name}_e("qualityBtn").onclick=()=>{let i=["auto","flow","balanced","high"],e=i[(i.indexOf(Qn.mode)+1)%i.length];Ph(Qn.setMode(e)),Nt(e==="auto"?"\u81EA\u52A8\u8C03\u8282\u753B\u8D28\uFF0C\u4F18\u5148\u4FDD\u6301\u6D41\u7545":"\u5DF2\u5207\u6362"+yi.name+"\u753B\u8D28")};Ph(_f);_e("assetStatus").onclick=()=>Wa.retry();Object.defineProperty(window,"mansionPerformance",{configurable:!0,get:()=>({fps:Math.round(Qn.fps),mode:Qn.mode,quality:yi.name,drawCalls:gt.info.render.calls,renderedTriangles:gt.info.render.triangles,vegetation:ao?.vegetation.stats,assets:Wa.stats,mobile:Gi.mobile,startupMs:ag})});function Ds(){Tt!==2&&(Kt.roofs.visible=!0,_e("roofBtn").textContent="\u9690\u85CF\u5C4B\u9876"),document.body.dataset.view=Tt===2?"bird":"walk",_e("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][Tt],_e("birdBtn").textContent=Tt===2?"\u8FDB\u5165\u6F2B\u6E38":"\u9E1F\u77B0\u5168\u666F",_e("roofBtn").classList.toggle("hidden",Tt!==2)}function _d(){_e("modal").close(),Bn=!1,Dt.clear(),yn.reset(),Hi("stand"),Ze.g.position.copy(re)}_e("closeModal").onclick=_d;_e("modalDone").onclick=_d;_e("modal").addEventListener("cancel",i=>{i.preventDefault(),_d()});_e("interactBtn").onclick=$0;_e("helpBtn").onclick=()=>J0({type:"\u5982\u4F55\u5728\u5BB6\u4E2D\u6F2B\u6B65",heading:"\u968F\u5FC3\u8D70\u8D70\uFF0C\u4E0D\u5FC5\u7740\u6025",body:"<p><b>W A S D / \u65B9\u5411\u952E</b>\uFF1A\u76F8\u5BF9\u955C\u5934\u65B9\u5411\u79FB\u52A8<br><b>\u6309\u4F4F\u9F20\u6807\u62D6\u52A8</b>\uFF1A\u73AF\u987E\u56DB\u5468<br><b>\u9F20\u6807\u6EDA\u8F6E</b>\uFF1A\u8C03\u6574\u8DDF\u968F\u8DDD\u79BB<br><b>\u7A7A\u683C</b>\uFF1A\u8DF3\u8DC3\u3000<b>C / L / R</b>\uFF1A\u5750\u4E0B / \u8EBA\u4E0B / \u8D77\u8EAB<br><b>B</b>\uFF1A\u9E1F\u77B0\u5168\u666F\uFF0C\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001WASD \u5E73\u79FB<br><b>Shift</b>\uFF1A\u5954\u8DD1\u3000<b>V</b>\uFF1A\u5207\u6362\u89C6\u89D2<br><b>E</b>\uFF1A\u5728\u63D0\u793A\u51FA\u73B0\u65F6\u4E92\u52A8<br><b>Esc</b>\uFF1A\u5173\u95ED\u4E92\u52A8</p><p>\u4ECE\u5EAD\u9662\u8FDB\u5165\u540E\u65B9\u4E3B\u5B85\uFF0C\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u4EE5\u6B65\u884C\u4E0A\u4E8C\u697C\uFF0C\u4ECE\u4E8C\u697C\u5317\u4FA7\u8F6C\u5230\u76F8\u90BB\u697C\u68AF\u53EF\u4E0A\u5929\u53F0\u3002\u897F\u4FA7\u5EAD\u9662\u5E26\u8DEF\u724C\u7684\u697C\u68AF\u901A\u5411\u5730\u4E0B\u5BA4\uFF1B\u51FA\u5357\u95E8\u6CBF\u96C6\u5E02\u524D\u884C\u5230\u6CB3\u5CB8\uFF1B\u51FA\u95E8\u540E\u5411\u4E1C\u6CBF\u8FDE\u63A5\u6B65\u9053\u5230\u9A6C\u8DEF\uFF0C\u8FC7\u6591\u9A6C\u7EBF\u8FDB\u5165\u4E30\u5DE2\u516C\u53F8\u3002\u516C\u53F8\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u8D70\u904D\u4E94\u5C42\uFF0C\u9760\u8FD1\u7535\u68AF\u6309 E \u9009\u62E9\u697C\u5C42\uFF0C\u4E5F\u80FD\u76F4\u8FBE\u5929\u53F0\u773A\u671B\u5EAD\u9662\u3002\u5DE6\u53F3\u4E24\u7FFC\u7684\u5165\u53E3\u90FD\u671D\u5411\u5EAD\u9662\u524D\u65B9\u3002\u624B\u673A\u53EF\u4F7F\u7528\u5DE6\u4E0B\u89D2\u65B9\u5411\u952E\uFF0C\u62D6\u52A8\u573A\u666F\u8F6C\u52A8\u89C6\u89D2\u3002</p>"});function j0(){Tt=(Tt+1)%3,Ds(),_e("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][Tt],Nt(["\u7B2C\u4E09\u4EBA\u79F0 \xB7 \u62D6\u52A8\u9F20\u6807\u73AF\u987E","\u7B2C\u4E00\u4EBA\u79F0 \xB7 \u9002\u5408\u5BA4\u5185\u63A2\u7D22","\u9E1F\u77B0\u5168\u666F \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u65B9\u5411\u952E\u5E73\u79FB"][Tt])}_e("viewBtn").onclick=j0;var Q0=new Map;mt.traverse(i=>{i.isPointLight&&Q0.set(i,i.intensity)});function Ih(){let i=dr.kind==="rain",e=dr.kind==="snow";Xn.intensity=Un?.32:i?.85:e?1.5:2.4,z0.intensity=Un?.5:.8,mt.backgroundIntensity=Un?.2:i?.38:.65,mt.environmentIntensity=Un?.32:i?.42:.62,gt.toneMappingExposure=Un?1.15:.98,Ah.material.uniforms.top.value.set(Un?"#203449":i?"#647781":e?"#b8cbd2":"#739dba"),Ah.material.uniforms.bottom.value.set(Un?"#627484":i?"#a0afb0":"#efd0a1"),mt.fog.color.set(Un?5399926:i?10399410:e?13359324:11188130),mt.fog.density=e?.012:i?.009:.006,Eh.visible=!i&&!e,Eh.material.color.set(Un?14871807:16770221),Q0.forEach((t,n)=>n.intensity=t*(Un?1.5:1)),_e("timeLabel").textContent=Un?"\u5165\u591C \xB7 19:30":"\u508D\u665A \xB7 17:40",_e("weatherLabel").textContent=Rf[dr.kind]+" / "+(Un?"\u706F\u706B\u53EF\u4EB2":"\u5B9C\u5F52\u5BB6"),gt.shadowMap.needsUpdate=!0}_e("dayBtn").onclick=()=>{Un=!Un,Ih()};_e("weatherSelect").onchange=i=>{dr.set(i.target.value),Ih(),Nt("\u5DF2\u5207\u6362"+Rf[i.target.value])};var fS=m0({dialog:_e("guideDialog"),host:_e("guideScene"),list:_e("guidePlaces"),tabs:_e("guideTabs"),onOpen:()=>{co(),Bn=!0,Dt.clear(),yn.reset(),uo=!1,Ls=null},onClose:()=>{Bn=!1,Dt.clear(),yn.reset(),Qn.reset()},onTeleport:i=>{if(co(),!Bi(i.x,i.z,i.y,i.y)){Nt("\u8BE5\u843D\u70B9\u6682\u4E0D\u53EF\u901A\u884C\uFF0C\u8BF7\u9009\u62E9\u76F8\u90BB\u5730\u70B9");return}re.set(i.x,i.y,i.z),On="stand",Ft=null,tn.height=0,tn.velocity=0,Tt=0,Dt.clear(),yn.reset(),Ze.g.position.copy(re),Ze.g.rotation.x=0,on.position.set(i.x*Ge,i.y+2.2,i.z*Ge+3),Hn=0,lo=.24,Ds(),gt.shadowMap.needsUpdate=!0,Nt("\u5DF2\u5230\u8FBE"+i.name)}}),eg=()=>{Rt.phase==="idle"&&dn.lift.phase==="idle"&&co()&&fS.open()};_e("mapExpand").onclick=_e("guideBtn").onclick=eg;_e("mapExpand").onkeydown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),eg())};_e("homeBtn").onclick=()=>{Rt.phase!=="idle"||dn.lift.phase!=="idle"||co()&&(re.set(0,0,19),Hn=.12,lo=.24,Tt=0,On="stand",Ft=null,tn.height=0,tn.velocity=0,Ds(),_e("viewBtn").querySelector("span").textContent="\u7B2C\u4E09\u4EBA\u79F0",Dt.clear(),yn.reset(),Nt("\u5DF2\u56DE\u5230\u5EAD\u9662\u5165\u53E3"))};var vi,Ba,bh=!1;_e("soundBtn").onclick=()=>{if(!vi){vi=new(window.AudioContext||window.webkitAudioContext),Ba=vi.createGain(),Ba.gain.value=0,Ba.connect(vi.destination);let i=vi.createBuffer(1,vi.sampleRate*4,vi.sampleRate),e=i.getChannelData(0),t=0;for(let r=0;r<e.length;r++)t=(t+(Math.random()*2-1)*.025)/1.02,e[r]=t;let n=vi.createBufferSource();n.buffer=i,n.loop=!0;let s=vi.createBiquadFilter();s.type="lowpass",s.frequency.value=800,n.connect(s),s.connect(Ba),n.start()}bh=!bh,vi.resume(),Ba.gain.setTargetAtTime(bh?.7:0,vi.currentTime,.3),_e("soundBtn").querySelector("span").textContent=bh?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u73AF\u5883\u58F0\u97F3"};addEventListener("keydown",i=>{_e("modal").open||_e("guideDialog").open||_e("liftDialog").open||Rt.phase!=="idle"||dn.lift.phase!=="idle"||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),Dt.add(i.code),!i.repeat&&(i.code==="KeyE"&&$0(),i.code==="KeyV"&&j0(),i.code==="KeyB"&&(Tt=Tt===2?0:2,Ds()),i.code==="Space"&&Tt!==2&&!Fn&&Rt.phase==="idle"&&dn.lift.phase==="idle"&&(Hi("stand"),Cf(tn)),i.code==="KeyC"&&Hi("sit"),i.code==="KeyL"&&Hi("lie"),i.code==="KeyR"&&Hi("stand")))});addEventListener("keyup",i=>Dt.delete(i.code));addEventListener("blur",()=>{Dt.clear(),yn.reset(),uo=!1,Ls=null});document.addEventListener("visibilitychange",()=>{Dt.clear(),yn.reset(),uo=!1,Ls=null,Qn.reset(),gt.shadowMap.needsUpdate=!0});gt.domElement.addEventListener("pointerdown",i=>{Ls===null&&(Ls=i.pointerId,uo=!0,hd=i.clientX,wh=i.clientY,gt.domElement.setPointerCapture(i.pointerId))});gt.domElement.addEventListener("pointermove",i=>{!uo||Ls!==i.pointerId||(Hn-=(i.clientX-hd)*.005,Tt===2?Va=vn.clamp(Va+(i.clientY-wh)*.004,.25,1.48):lo=vn.clamp(lo+(i.clientY-wh)*.004,-.35,.85),hd=i.clientX,wh=i.clientY)});for(let i of["pointerup","pointercancel","lostpointercapture"])gt.domElement.addEventListener(i,e=>{Ls===e.pointerId&&(uo=!1,Ls=null)});gt.domElement.addEventListener("wheel",i=>{i.preventDefault(),Tt===2?ka=vn.clamp(ka+i.deltaY*.035,22,110):Ha=vn.clamp(Ha+i.deltaY*.005,2,9)},{passive:!1});gt.domElement.addEventListener("contextmenu",i=>i.preventDefault());function tg(){yn.reset();let i=Tf(innerWidth,pd.matches);i.mobile!==Gi.mobile&&(Ha=i.distance),Gi=i,document.body.dataset.mobile=String(Gi.mobile),on.fov=Gi.fov,on.aspect=innerWidth/innerHeight,on.updateProjectionMatrix(),gt.setSize(innerWidth,innerHeight),Ph(ro[Qn.level]),md.resize(innerWidth,innerHeight)}addEventListener("resize",tg);pd.addEventListener("change",tg);var ng=Rs.map(i=>new cn(new D((i.x1-.1)*Ge,i.y,(i.z1-.1)*Ge),new D((i.x2+.1)*Ge,i.y+i.h,(i.z2+.1)*Ge)));for(let i of fn.slice(1))for(let e of nh())ng.push(new cn(new D(e.x1*Ge,i.y-.2,e.z1*Ge),new D(e.x2*Ge,i.y,e.z2*Ge)));var U0=new Ri,F0=new D,Th=new D;function dS(i,e){Th.subVectors(e,i);let t=Th.length();if(t<.001)return e;U0.set(i,Th.clone().normalize());let n=t;for(let s of ng)if(U0.intersectBox(s,F0)){let r=F0.distanceTo(i);r>.12&&(n=Math.min(n,Math.max(.08,r-.18)))}return i.clone().addScaledVector(Th,n/t)}var pS=_e("map").getContext("2d");function mS(){let i=pS;i.clearRect(0,0,240,224),i.save(),i.translate(71,63);let e=1.85,t=(n,s,r,o,a)=>{i.fillStyle=a,i.fillRect((n-r/2)*e,(s-o/2)*e,r*e,o*e)};t(0,5,66,50,"#3e5548"),t(39,18,8,34,"#777970"),t(58,15,24,22,"#c7c3b5"),t(21.5,32,43,2,"#b5b09b"),i.font="11px sans-serif",i.fillStyle="#f4efd9",i.fillText("\u516C\u53F8 \xB7 \u4E94\u5C42",48*e,16*e),t(0,40,10,20,"#777970"),t(0,53,68,7,"#568b8d"),t(-16,-13.5,10,11,"#9c9d81"),t(0,-11,22,14,"#9c9d81"),t(-16,-.5,10,15,"#9c9d81"),t(16,-.5,10,15,"#9c9d81"),t(0,0,22,8,"#65705b"),t(20.5,11,7,16,"#568b8d"),i.fillStyle="#6a9a92",i.beginPath(),i.ellipse(-5*e,10*e,4.1*e,2.7*e,0,0,7),i.fill(),t(8,12,7,4,"#89785e"),t(13.5,19,5.2,3,"#79905a"),t(9.75,-10.25,1.5,8.5,"#c8b38a"),t(-23.5,-12,2,10,"#c8b38a"),i.font="11px sans-serif",i.textAlign="center",i.fillStyle="#263f33",i.fillText(re.y<0?"\u5730\u4E0B\u4E00\u5C42":re.y>6?"\u5C4B\u9876\u82B1\u56ED":"\u4E3B\u5B85 \xB7 \u4E8C\u5C42",0,-12*e),i.fillText("\u96C6\u5E02",0,40*e),i.fillText("\u6CB3\u5CB8",0,49*e),i.fillText("\u4E66\u623F",-16*e,0),i.fillText("\u5BA2\u9910\u5385",16*e,0),i.fillStyle="#e7e7d2",i.fillText("\u8336\u5E2D",8*e,12*e+4),i.fillText("\u9C7C\u5858",-5*e,10*e+4),i.fillText("\u82B1\u5703",13.5*e,19*e+4);for(let n of[Xa,Is,pr,qa])i.fillStyle="#dfb890",i.beginPath(),i.arc(n.g.position.x*e,n.g.position.z*e,2.6,0,7),i.fill();i.translate(re.x*e,re.z*e),i.rotate(-Hn),i.fillStyle="#f5edcf33",i.beginPath(),i.moveTo(0,0),i.lineTo(-8,-15),i.lineTo(8,-15),i.closePath(),i.fill(),i.fillStyle="#fff7da",i.beginPath(),i.arc(0,0,4,0,7),i.fill(),i.restore()}function gS(){if(re.x>34){let n=fn.find(s=>Math.abs(s.y-re.y)<.12);_e("place").textContent=no(re.x,re.z)?n?.name||"\u516C\u53F8\u697C\u68AF":"\u7814\u53D1\u4E2D\u5FC3 \xB7 \u5EAD\u9662\u5BF9\u9762",_e("description").textContent=re.y>17.9?"\u5411\u897F\u770B\uFF0C\u9A6C\u8DEF\u5BF9\u9762\u5C31\u662F\u81EA\u5BB6\u7684\u5EAD\u9662\u3002":"\u5165\u53E3\u671D\u5411\u5EAD\u9662\uFF1B\u4E1C\u4FA7\u7A84\u697C\u68AF\u3001\u4E1C\u5317\u4FA7\u7535\u68AF\u8FDE\u901A\u4E94\u5C42\u4E0E\u5929\u53F0\u3002",_e("floor").textContent=n?.name||"\u697C\u68AF\u901A\u884C\u4E2D";return}let i="\u5EAD\u9662",e="\u6811\u5F71\u3001\u6C34\u58F0\uFF0C\u8FD8\u6709\u5BB6\u4EBA\u7684\u966A\u4F34\u3002",t=re.y>3?"\u4E8C\u5C42":"\u4E00\u5C42";re.y<-.2?(t="\u5730\u4E0B\u4E00\u5C42",i=re.x<-22?"\u5730\u4E0B\u5BA4\u697C\u68AF":re.z<-13?re.x<-18?"\u50A8\u7269\u95F4":"\u7535\u7ADE\u623F":re.x<-18?"KTV":"\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",e="\u6CBF\u697C\u68AF\u4E0B\u5230\u5E95\u90E8\uFF0C\u518D\u4ECE\u4E1C\u4FA7\u8FDB\u5165\u5404\u4E2A\u623F\u95F4\u3002"):re.y>6.95?(t="\u5929\u53F0",i="\u5929\u53F0\u82B1\u56ED\u4E0E\u8336\u5E2D",e="\u5750\u4E0B\u559D\u8336\uFF0C\u79CD\u82B1\uFF0C\u4FEF\u77B0\u9662\u5916\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"):re.y>3.85?(i="\u5929\u53F0\u697C\u68AF",t="\u4E8C\u5C42 \u2192 \u5929\u53F0",e="\u7EE7\u7EED\u5411\u5357\u8D70\u5230\u5929\u53F0\u5E73\u53F0\u3002"):re.y>3?(i=re.x>11?"\u513F\u7AE5\u6E38\u4E50\u9633\u53F0":re.x<-11?"\u4E3B\u5367\u5C4B\u9876\u9633\u53F0":re.z>-8?"\u4E8C\u5C42\u8D70\u5ECA":re.x<-3?"\u4E3B\u5367":re.x<3?"\u5B9D\u53EF\u68A6\u513F\u7AE5\u623F":"\u72EC\u7ACB\u536B\u6D74",e=re.x>11?"\u5BA2\u9910\u5385\u5C4B\u9876\u7684\u513F\u7AE5\u5929\u5730\uFF1A\u6ED1\u68AF\u3001\u6C99\u6C60\u548C\u73A9\u5177\u3002":re.x<-11?"\u4E66\u623F\u5C4B\u9876\u7684\u9732\u53F0\uFF0C\u8336\u684C\u3001\u7EFF\u690D\u4E0E\u4F11\u95F2\u6C99\u53D1\u3002":"\u72EC\u7ACB\u623F\u95E8\u3001\u6696\u5149\u7167\u660E\u4E0E\u5145\u8DB3\u7684\u751F\u6D3B\u6536\u7EB3\u3002"):re.y>.2?(i="\u697C\u68AF",e="\u62FE\u7EA7\u800C\u4E0A\uFF0C\u53BB\u4E8C\u697C\u770B\u770B\u3002"):re.z<-4&&Math.abs(re.x)<11?(i=re.x<-3?"\u5F00\u653E\u5F0F\u53A8\u623F":"\u4E3B\u5B85\u8D77\u5C45\u5385",e="\u6CBF\u4E1C\u4FA7\u901A\u9053\u5411\u5317\u5230\u697C\u68AF\u8D77\u70B9\uFF0C\u4E0A\u697C\u540E\u4ECE\u516C\u5171\u5E73\u53F0\u524D\u5F80\u5404\u623F\u95F4\u3002"):re.x>-21&&re.x<-13&&re.z>16&&re.z<24?(i="\u8F66\u5E93",e="\u8D8A\u91CE\u8F66\u505C\u5728\u8FD9\u91CC\uFF0C\u8F66\u9053\u901A\u5411\u5EAD\u9662\u5357\u95E8\u3002"):re.z>46?(i="\u6CB3\u7554\u6B65\u9053",e="\u6CBF\u6CB3\u6563\u6B65\uFF0C\u8EAB\u540E\u662F\u70ED\u95F9\u7684\u5C0F\u96C6\u5E02\u3002"):re.z>30?(i="\u4E61\u95F4\u96C6\u5E02",e="\u8857\u9053\u4E24\u8FB9\u6709\u9C9C\u679C\u3001\u70B9\u5FC3\u4E0E\u82B1\u8349\u644A\u4F4D\u3002"):re.x<-11&&re.z<-8?(i="\u897F\u7FFC\u4F1A\u5BA2\u5385",e="\u65B0\u589E\u7684\u5927\u7A7A\u95F4\uFF0C\u4F1A\u5BA2\u3001\u9605\u8BFB\u4E0E\u89C2\u5F71\u3002"):re.x<-11&&re.z<7?(i="\u6696\u6728\u4E66\u623F",e="\u4E66\u5899\u3001\u76AE\u6905\u548C\u4E00\u76CF\u4E0D\u6025\u7740\u7184\u706D\u7684\u706F\u3002"):re.x>11&&re.z<7?(i="\u5BA2\u9910\u5385",e="\u76F8\u805A\u7684\u65E5\u5E38\uFF0C\u4ECE\u4E00\u987F\u665A\u9910\u5F00\u59CB\u3002"):re.z>16&&(i="\u5EAD\u9662\u5165\u53E3",e="\u6CBF\u7740\u77F3\u5F84\uFF0C\u53BB\u770B\u770B\u5BB6\u4EBA\u7684\u65E5\u5E38\u3002"),_e("place").textContent=i,_e("description").textContent=e,_e("floor").textContent=t+" \xB7 "+i}function co(){if(!Fn)return!0;let i=Um(re,Ze.g.rotation.y,Bi);return i?(Mi.root.position.copy(re),Fn=!1,re.set(i.x,i.y,i.z),Ze.g.position.copy(re),Ze.g.rotation.x=0,Ze.animate(Ga,!1),On="stand",Ft=null,Dt.clear(),yn.reset(),_e("bikeBtn").textContent="\u9A91\u81EA\u884C\u8F66",Nt("\u5DF2\u4E0B\u8F66\uFF0C\u81EA\u884C\u8F66\u505C\u5728\u8EAB\u65C1"),!0):(Nt("\u4E24\u4FA7\u6682\u65F6\u6CA1\u6709\u7A7A\u4F4D\uFF0C\u8BF7\u7A0D\u5FAE\u632A\u52A8\u8F66\u8F86\u518D\u4E0B\u8F66"),!1)}function fd(){if(!(Bn||Rt.phase!=="idle"||dn.lift.phase!=="idle")){if(Fn){co();return}if(Math.abs(re.y-Mi.root.position.y)>.2||re.distanceTo(Mi.root.position)>2.2){Nt("\u5148\u8D70\u5230\u5EAD\u9662\u81EA\u884C\u8F66\u65C1\uFF08\u5165\u53E3\u53F3\u4FA7\uFF09");return}Hi("stand"),tn.height=tn.velocity=0,Fn=!0,Tt=0,Ds(),_e("bikeBtn").textContent="\u4E0B\u81EA\u884C\u8F66",Nt("\u5DF2\u4E0A\u8F66 \xB7 \u4F7F\u7528\u65B9\u5411\u952E\u6216\u6447\u6746\u9A91\u884C\uFF0C\u697C\u68AF\u524D\u8BF7\u4E0B\u8F66")}}_e("bikeBtn").onclick=fd;_e("familySelect").onchange=i=>{let e=Number(i.target.value);if(Bn||Rt.phase!=="idle"||dn.lift.phase!=="idle"){i.target.value=String(Wn.index);return}if(!co()){i.target.value=String(Wn.index);return}let t=Wn.members[e].actor.g.position.clone();if(t.y=Math.round(t.y/3.6)*3.6,!Bi(t.x,t.z,t.y)){let n=!1;for(let s=.3;s<3&&!n;s+=.3)for(let r=0;r<16;r++){let o=t.x+Math.sin(r*Math.PI/8)*s,a=t.z+Math.cos(r*Math.PI/8)*s;if(Bi(o,a,t.y)){t.set(o,t.y,a),n=!0;break}}if(!n){i.target.value=String(Wn.index),Nt("\u8BE5\u89D2\u8272\u8EAB\u8FB9\u6682\u65F6\u6CA1\u6709\u53EF\u7AD9\u7ACB\u4F4D\u7F6E");return}}Wn.members[e].position={x:t.x,y:t.y,z:t.z},Ze.g.visible=!0,Ze.g.position.copy(re),Ze.g.rotation.x=0,Wn.switchTo(e,{x:re.x,y:re.y,z:re.z}),Ze=Wn.members[e].actor,re.copy(t),Ze.g.position.copy(re),On="stand",Ft=null,tn.height=tn.velocity=0,Dt.clear(),yn.reset(),Tt=0,Ds(),on.position.set(re.x*Ge,re.y+2.2,re.z*Ge+Ha),_e("actorName").textContent=Wn.members[e].name,Nt("\u6B63\u5728\u63A7\u5236"+Wn.members[e].name)};function ig(){return Es.some(i=>Math.abs(i.y-re.y)<.1)&&Math.hypot(re.x-it.exitX,re.z-it.z)<1.5}function Lh(i){for(let e of["familySelect","bikeBtn","guideBtn","homeBtn","jumpBtn","sitBtn","lieBtn","birdBtn","viewBtn","liftBtn"])_e(e).disabled=i}function sg(){if(dn.near(re)){rg();return}if(!(Bn||Rt.phase!=="idle"||dn.lift.phase!=="idle")){if(Fn){Nt("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}if(!ig()){Nt("\u7535\u68AF\u4F4D\u4E8E\u897F\u7FFC\uFF0C\u53EF\u4ECE\u5BFC\u89C8\u5730\u56FE\u524D\u5F80\u7535\u68AF\u5385");return}Dt.clear(),yn.reset(),Bn=!0,_e("liftFloors").replaceChildren();for(let i of Es){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-re.y)<.1,e.onclick=()=>{if(!Bi(it.exitX,it.z,i.y)){Nt("\u76EE\u6807\u51FA\u53E3\u6682\u88AB\u6321\u4F4F");return}let t=Es.find(n=>Math.abs(n.y-re.y)<.1).y;Rt.request(t,i.y)&&(Y0.copy(re),_e("liftDialog").close(),On="stand",Ft=null,tn.height=tn.velocity=0,Lh(!0),Nt("\u7535\u68AF\u6B63\u5728\u547C\u68AF\u5E76\u524D\u5F80"+i.name))},_e("liftFloors").append(e)}_e("liftDialog").showModal()}}function rg(){if(!(Bn||dn.lift.phase!=="idle"||!dn.near(re))){if(Fn){Nt("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}Dt.clear(),yn.reset(),Bn=!0,_e("liftFloors").replaceChildren();for(let i of fn){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-re.y)<.1,e.onclick=()=>{let t=fn.find(n=>Math.abs(n.y-re.y)<.1);!t||!Bi(Qt.exitX,Qt.exitZ,i.y)||dn.lift.request(t.y,i.y)&&(V0.copy(re),_e("liftDialog").close(),On="stand",Ft=null,tn.height=tn.velocity=0,Lh(!0),Nt("\u516C\u53F8\u7535\u68AF\u6B63\u5728\u524D\u5F80"+i.name))},_e("liftFloors").append(e)}_e("liftDialog").showModal()}}function xS(i,e){let t=dn.lift,n=dn.update(i,e,re);t.passenger&&(t.phase==="board"?re.lerpVectors(V0,new D(Qt.x,t.y,Qt.z),t.boarding):t.phase==="exit"?re.set(Qt.x,t.y,vn.lerp(Qt.z,Qt.exitZ,t.exiting)):re.set(Qt.x,t.y,Qt.z),Ze.g.position.copy(re),Ze.animate(e,t.phase==="board"||t.phase==="exit")),n==="arrived"&&(re.set(Qt.exitX,t.target,Qt.exitZ),Ze.g.position.copy(re),Bn=!1,Lh(!1),Nt("\u5DF2\u5230\u8FBE"+fn.find(s=>s.y===t.target).name))}_e("liftBtn").onclick=sg;function og(){Rt.phase!=="idle"||dn.lift.phase!=="idle"||(_e("liftDialog").close(),Bn=!1,Dt.clear(),yn.reset())}_e("liftClose").onclick=og;_e("liftDialog").addEventListener("cancel",og);var ag=0,O0=!0,B0=new vs,_S=new Ve,dd=performance.now(),ld=0;on.position.set(0,2.7,19*Ge+5);on.lookAt(0,1.45,19*Ge);function lg(i){requestAnimationFrame(lg);let e=(i-dd)/1e3;if(dd=i,document.hidden||_e("guideDialog").open)return;let t=Qn.sample(e);t&&Ph(t);let n=Math.min(e,.075);Ga+=n,ld++;let s=Ga;xS(n,s);let r=Rt.update(n);if(q0.update(Rt),Rt.passenger&&(Rt.phase==="board"?re.lerpVectors(Y0,new D(it.x,Rt.y,it.z),Rt.boarding):Rt.phase==="exit"?re.set(vn.lerp(it.x,it.exitX,Rt.exiting),Rt.y,it.z):re.set(it.x,Rt.y,it.z),Ze.g.position.copy(re),Ze.animate(s,Rt.phase==="board"||Rt.phase==="exit")),r==="arrived"&&(re.set(it.exitX,Rt.target,it.z),Ze.g.position.copy(re),Bn=!1,Lh(!1),Nt("\u5DF2\u5230\u8FBE"+Es.find(l=>l.y===Rt.target).name)),!Bn){let l=yn.state.forward+(Dt.has("KeyW")||Dt.has("ArrowUp")?1:0)-(Dt.has("KeyS")||Dt.has("ArrowDown")?1:0),h=yn.state.right+(Dt.has("KeyD")||Dt.has("ArrowRight")?1:0)-(Dt.has("KeyA")||Dt.has("ArrowLeft")?1:0),u=Math.max(1,Math.hypot(l,h)),d=Fn?7.5/Ge:(Dt.has("ShiftLeft")||Dt.has("ShiftRight")?8:4.8)/Ge,f=(h*Math.cos(Hn)-l*Math.sin(Hn))/u*d*n,g=(-l*Math.cos(Hn)-h*Math.sin(Hn))/u*d*n;if(Tt===2)Oa.x=vn.clamp(Oa.x+f*2,-34,73),Oa.z=vn.clamp(Oa.z+g*2,-22,52);else if(On==="stand"){let x=re.clone();if(Fn?h0(re,f,g):l0(re,f,g),(tn.height>0||tn.velocity>0)&&c0(tn,n),Ze.g.position.copy(re),Ze.g.position.y+=tn.height,Ze.g.rotation.x=0,l||h){let p=Math.atan2(f,g);Ze.g.rotation.y+=Math.atan2(Math.sin(p-Ze.g.rotation.y),Math.cos(p-Ze.g.rotation.y))*Math.min(1,n*12)}Ze.animate(s,!!(l||h)),Fn&&(Mi.root.position.copy(re),Mi.root.rotation.y=Ze.g.rotation.y,Mi.wheels.forEach(p=>p.rotation.x+=Math.hypot(re.x-x.x,re.z-x.z)*Ge/.33),Ze.g.position.y+=.1,Ze.legs.forEach((p,m)=>{p.rotation.x=-1.1+Math.sin(s*8+m*Math.PI)*(l||h?.25:0),p.lower.rotation.x=1.4}),Ze.arms.forEach(p=>p.rotation.x=-1.1))}On!=="stand"&&Ft&&(Ze.g.position.set(Ft.x,Ft.y+(On==="lie"?Ft.ground?.22:Ft.outdoor?.7:.99:Ft.ground?-.72:-.25),Ft.z),Ze.g.rotation.y=Ft.rotation,On==="sit"?(Ze.g.rotation.x=0,Ze.animate(s,!1,"sit"),Ze.arms.forEach(x=>x.rotation.x=-.65)):(Ze.g.position.x+=Math.sin(Ft.rotation)*.7,Ze.g.position.z+=Math.cos(Ft.rotation)*.7,Ze.g.rotation.set(-Math.PI/2,0,Ft.rotation),Ze.animate(s,!1)))}let o=(Ft?new D(Ft.x,Ft.y,Ft.z):re.clone()).add(new D(0,On==="lie"?.8:1.45*Ze.g.scale.y+tn.height,0));o.x*=Ge,o.z*=Ge;let a;if(Tt===2){let l=Oa.clone();l.x*=Ge,l.z*=Ge,a=l.clone().add(new D(Math.sin(Hn)*Math.cos(Va)*ka,Math.sin(Va)*ka,Math.cos(Hn)*Math.cos(Va)*ka)),on.position.lerp(a,1-Math.exp(-n*7)),on.lookAt(l),Ze.g.visible=!0}else{let l=Tt===1?.12:Ha;a=o.clone().add(new D(Math.sin(Hn)*l,Tt===1?.12:Math.sin(lo)*l,Math.cos(Hn)*l));let h=dS(o,a);on.position.lerp(h,1-Math.exp(-n*12)),Tt===1?(on.position.copy(a),on.lookAt(o.clone().add(new D(-Math.sin(Hn)*6,-lo*5,-Math.cos(Hn)*6)))):on.lookAt(o),Ze.g.visible=Tt!==1&&on.position.distanceTo(o)>1}iS.update(n,dr.kind==="snow"),dr.update(n,s,on);for(let l of Kt.root.userData.swings)l.pivot.rotation.x=Math.sin(s*1.6)*(Ft?.swingId===l.id?.18:.035),l.pivot.updateMatrixWorld(!0),Ft?.swingId===l.id&&(l.position.set(0,-2.8,0).applyMatrix4(l.pivot.matrixWorld),l.position.x/=Ge,l.position.z/=Ge,Ze.g.position.copy(l.position).add(new D(0,-.05,0)),Ze.g.rotation.x=l.pivot.rotation.x);ao&&ao.update(i,n,on);let c=Sf.filter(l=>Math.abs(l[2]-re.y)<.4).map(l=>({r:l,d:Math.hypot(l[0]-re.x,l[1]-re.z)})).sort((l,h)=>l.d-h.d);rS.forEach((l,h)=>{let u=c[h];l.visible=!!u&&u.d<12,u&&(l.position.set(u.r[0],u.r[2]+2.7,u.r[1]),l.intensity=65*Math.max(0,1-u.d/14))}),xd.visible=re.y<-.3,H0.forEach((l,h)=>l.animate(s+h,!1,"cook"));for(let l=0;l<Wn.members.length;l++){let h=Wn.members[l].actor;if(h!==Ze){if(h.g.visible=!0,Wn.visited.has(l)){h.animate(s,!1);continue}l===1&&h.animate(s,!1,"cook"),l===2&&(h.g.position.set(-.5+Math.sin(s*.45)*2.6,0,16+Math.cos(s*.45)*1.1),h.g.rotation.y=Math.atan2(Math.cos(s*.45)*2.6,-Math.sin(s*.45)*1.1),h.animate(s,!0)),l===3&&(h.animate(s,!1,"read"),h.legs.forEach(u=>{u.rotation.x=-1.3,u.lower.rotation.x=1.3})),l===4&&h.animate(s,!1,"garden")}}if(Rh.visible=Ze!==pr&&!Wn.visited.has(3),Wn.visited.has(2)||X0.position.set(Is.g.position.x+.7,Is.g.position.y+.23,Is.g.position.z),Ch.forEach((l,h)=>{if(s<K0&&re.y<.1&&re.z>7){let u=s+h*3;l.g.position.set(re.x+Math.sin(u)*1.1,0,re.z+Math.cos(u)*1.1),l.g.rotation.y=u+Math.PI/2}else{let u=s*.3+h*2.4;l.g.position.set(3+Math.sin(u)*2,0,8+Math.cos(u)*3.5),l.g.rotation.y=Math.atan2(Math.cos(u)*2,-Math.sin(u)*3.5)}l.animate(s+h)}),W0.forEach((l,h)=>{let u=s*(.24+h*.01)+h*.8,d=s<Z0,f=-5+Math.cos(u)*(d?1:2.8),g=(d?11.6:10)+Math.sin(u)*(d?.35:1.65);l.position.set(f,.135+Math.sin(u*3)*.012,g),l.rotation.y=Math.atan2(-Math.sin(u)*(d?1:2.8),Math.cos(u)*(d?.35:1.65))}),za[0].position.set(-3.1,.25,10.7),za[0].rotation.y=.5+Math.sin(s*.15)*.15,za[1].position.set(-6.3+Math.sin(s*.07)*.6,.13,9.1+Math.cos(s*.07)*.7),za[1].rotation.y=s*.07,G0.forEach((l,h)=>{l.scale.y=.65+Math.sin(s*7+h)*.24+Math.sin(s*13+h)*.17}),gd.intensity=(Un?9:6)+Math.sin(s*9)*.8,ld%6===0){en=null;let l=2.15;for(let h of lS){let u=Math.hypot(h.x-re.x,h.z-re.z);u<l&&Math.abs(re.y-h.y)<.5&&(l=u,en=h)}for(let h of Ch)re.y<.1&&h.g.position.distanceTo(re)<1.6&&!en&&(en={id:"dog",title:"\u6478\u6478\u8C46\u8C46\u548C\u56E2\u56E2",hint:"\u5C0F\u72D7 \xB7 \u60F3\u548C\u4F60\u4E00\u8D77\u6563\u6B65"});!en&&!Fn&&Math.abs(re.y-Mi.root.position.y)<.2&&Math.hypot(re.x-Mi.root.position.x,re.z-Mi.root.position.z)<2&&(en={id:"bicycle",title:"\u9A91\u81EA\u884C\u8F66",hint:"\u5EAD\u9662\u81EA\u884C\u8F66"}),!en&&dn.near(re)&&(en={id:"officeElevator",title:"\u4E58\u5750\u516C\u53F8\u7535\u68AF",hint:"\u4E00\u81F3\u4E94\u697C \xB7 \u5C4B\u9876\u5929\u53F0"}),!en&&ig()&&(en={id:"elevator",title:"\u9009\u62E9\u7535\u68AF\u697C\u5C42",hint:"\u5730\u4E0B\u5BA4 \xB7 \u4E00\u697C \xB7 \u4E8C\u697C \xB7 \u5929\u53F0"}),Fn&&(en={id:"bicycle",title:"\u4E0B\u81EA\u884C\u8F66",hint:"\u6309 E \u6216\u70B9\u51FB\u4E0B\u8F66"}),_e("prompt").classList.toggle("hidden",!en||Bn||Tt===2),en&&(_e("actionName").textContent=en.title,_e("actionHint").textContent=en.hint),mS(),gS()}i-ud>=yi.shadowInterval&&(gt.shadowMap.needsUpdate=!0,ud=i);for(let l of Kt.merged.children)l.userData.zone==="basement"&&(l.visible=re.y<-.15||re.x<-21&&re.z<-6&&re.z>-20);if(gt.info.reset(),md.render(),O0&&(O0=!1,ag=performance.now(),_e("loading").style.opacity="0",setTimeout(()=>_e("loading").remove(),300)),ld%20===0&&!document.hidden){B0.setFromProjectionMatrix(_S.multiplyMatrices(on.projectionMatrix,on.matrixWorldInverse));let l=new Set;for(let h of[...Kt.merged.children,...Kt.roofs.visible?Kt.roofs.children:[]])h.visible&&B0.intersectsObject(h)&&l.add(h.material);Wa.update({x:re.x,z:re.z,y:re.y,bird:Tt===2,materials:l})}i-N0>1e3&&(_e("qualityBtn").title="\u70B9\u51FB\u5207\u6362\uFF1A\u81EA\u52A8 / \u6D41\u7545 / \u5747\u8861 / \u7CBE\u7EC6\uFF1B\u5F53\u524D "+Math.round(Qn.fps)+" \u5E27/\u79D2",_e("frameRate").textContent=Math.round(Qn.fps)+" \u5E27/\u79D2",N0=i)}Ds();for(let i of[...mt.children])ho.add(i);ho.scale.set(Ge,1,Ge);mt.add(ho);for(let i of[Ze,Xa,Is,pr,qa,...H0,...Ch])i.g.scale.x/=Ge,i.g.scale.z/=Ge;ao=I0(mt,Kt,gt,Ah,{parent:ho,queue:Wa,onLoaded:()=>{dr.attachWind(),Ih(),gt.shadowMap.needsUpdate=!0}});ao.setQuality(yi);Ih();dd=performance.now();Qn.reset();requestAnimationFrame(lg);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
