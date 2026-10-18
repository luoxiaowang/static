(()=>{var Sp=0,Du=1,bp=2;var aa=1,cc=2,Yr=3,Jn=0,Mn=1,An=2,Zt=0,Hs=1,la=2,Nu=3,Uu=4,hc=5;var $n=100,Tp=101,wp=102,Ep=103,Ap=104,ir=200,Cp=201,Rp=202,Pp=203,Cl=204,Rl=205,ca=206,Ip=207,ha=208,Lp=209,Dp=210,Np=211,Up=212,Fp=213,Op=214,Pl=0,Il=1,Ll=2,Ws=3,Dl=4,Nl=5,Ul=6,Fl=7,Fu=0,Bp=1,zp=2,xi=0,ua=1,fa=2,da=3,sr=4,pa=5,ma=6,ga=7,mu="attached",kp="detached",Ou=300,Ts=301,rr=302,Zr=303,uc=304,xa=306,Qt=1e3,kn=1001,Dr=1002,zt=1003,fc=1004;var or=1005;var yt=1006,Kr=1007;var Cn=1008;var Rn=1009,Bu=1010,zu=1011,Jr=1012,dc=1013,_i=1014,Pn=1015,Ft=1016,pc=1017,mc=1018,ws=1020,ku=35902,Vu=35899,Gu=1021,Hu=1022,Sn=1023,Ci=1026,Ui=1027,gc=1028,xc=1029,Es=1030,_c=1031;var vc=1033,_a=33776,va=33777,ya=33778,Ma=33779,yc=35840,Mc=35841,Sc=35842,bc=35843,Tc=36196,wc=37492,Ec=37496,Ac=37488,Cc=37489,Sa=37490,Rc=37491,Pc=37808,Ic=37809,Lc=37810,Dc=37811,Nc=37812,Uc=37813,Fc=37814,Oc=37815,Bc=37816,zc=37817,kc=37818,Vc=37819,Gc=37820,Hc=37821,Wc=36492,Xc=36494,qc=36495,Yc=36283,Zc=36284,ba=36285,Kc=36286;var Xs=2300,qs=2301,Al=2302,gu=2303,xu=2400,_u=2401,vu=2402,Vp=2500;var Wu=0,Ta=1,$r=2,Gp=3200;var wa=0,Hp=1,as="",dt="srgb",_n="srgb-linear",Co="linear",xt="srgb";var ks=7680;var yu=519,Wp=512,Xp=513,qp=514,Jc=515,Yp=516,Zp=517,$c=518,Kp=519,Ol=35044;var Xu="300 es",di=2e3,Nr=2001;function Sg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jp(){let i=Ur("canvas");return i.style.display="block",i}var Ld={},Fr=null;function Ro(...i){let e="THREE."+i.shift();Fr?Fr("log",e,...i):console.log(e,...i)}function $p(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=$p(i);let e="THREE."+i.shift();if(Fr)Fr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function et(...i){i=$p(i);let e="THREE."+i.shift();if(Fr)Fr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Gs(...i){let e=i.join(" ");e in Ld||(Ld[e]=!0,ze(...i))}function jp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Qp={[Pl]:Il,[Ll]:Ul,[Dl]:Fl,[Ws]:Nl,[Il]:Pl,[Ul]:Ll,[Fl]:Dl,[Nl]:Ws},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=1234567,To=Math.PI/180,Ys=180/Math.PI;function si(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function qu(i,e){return(i%e+e)%e}function Tg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function wg(i,e,t){return i!==e?(t-i)/(e-i):0}function wo(i,e,t){return(1-t)*i+t*e}function Eg(i,e,t,n){return wo(i,e,1-Math.exp(-t*n))}function Ag(i,e=1){return e-Math.abs(qu(i,e*2)-e)}function Cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ig(i,e){return i+Math.random()*(e-i)}function Lg(i){return i*(.5-Math.random())}function Dg(i){i!==void 0&&(Dd=i);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(i){return i*To}function Ug(i){return i*Ys}function Fg(i){return(i&i-1)===0&&i!==0}function Og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zg(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var en={DEG2RAD:To,RAD2DEG:Ys,generateUUID:si,clamp:at,euclideanModulo:qu,mapLinear:Tg,inverseLerp:wg,lerp:wo,damp:Eg,pingpong:Ag,smoothstep:Cg,smootherstep:Rg,randInt:Pg,randFloat:Ig,randFloatSpread:Lg,seededRandom:Dg,degToRad:Ng,radToDeg:Ug,isPowerOfTwo:Fg,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:zg,normalize:St,denormalize:fi},ju=class ju{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ju.prototype.isVector2=!0;var ce=ju,dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,a=Math.sin(a*y)/b,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+x*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qu=class Qu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qu.prototype.isVector3=!0;var F=Qu,kh=new F,Nd=new dn,ef=class ef{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],b=s[4],M=s[7],E=s[2],A=s[5],v=s[8];return r[0]=o*x+a*y+c*E,r[3]=o*m+a*b+c*A,r[6]=o*p+a*M+c*v,r[1]=l*x+h*y+u*E,r[4]=l*m+h*b+u*A,r[7]=l*p+h*M+u*v,r[2]=d*x+f*y+g*E,r[5]=d*m+f*b+g*A,r[8]=d*p+f*M+g*v,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vh.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vh.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ef.prototype.isMatrix3=!0;var st=ef,Vh=new st,Ud=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fd=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){let i={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Co:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_n]:{primaries:e,whitePoint:n,transfer:Co,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Ud,fromXYZ:Fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}var ot=kg();function ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _r,Bl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_r===void 0&&(_r=Ur("canvas")),_r.width=e.width,_r.height=e.height;let s=_r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=_r}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ji(t[n]/255)*255):t[n]=ji(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Or=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gh(s[o].image)):r.push(Gh(s[o]))}else r=Gh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var Gg=0,Hh=new F,rn=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=kn,s=kn,r=yt,o=Cn,a=Sn,c=Rn,l=i.DEFAULT_ANISOTROPY,h=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=si(),this.name="",this.source=new Or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qt:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qt:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Ou;rn.DEFAULT_ANISOTROPY=1;var tf=class tf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(f+1)/2,E=(p+1)/2,A=(h+d)/4,v=(u+x)/4,_=(g+m)/4;return b>M&&b>E?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=v/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=v/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tf.prototype.isVector4=!0;var _t=tf,zl=class extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Or(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Po=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kl=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lc=class lc{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Wg)}lookAt(e,t,n){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),fs.crossVectors(n,Zn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),fs.crossVectors(n,Zn)),fs.normalize(),Qa.crossVectors(Zn,fs),s[0]=fs.x,s[4]=Qa.x,s[8]=Zn.x,s[1]=fs.y,s[5]=Qa.y,s[9]=Zn.y,s[2]=fs.z,s[6]=Qa.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],b=n[7],M=n[11],E=n[15],A=s[0],v=s[4],_=s[8],T=s[12],w=s[1],C=s[5],I=s[9],B=s[13],P=s[2],L=s[6],U=s[10],z=s[14],W=s[3],D=s[7],k=s[11],q=s[15];return r[0]=o*A+a*w+c*P+l*W,r[4]=o*v+a*C+c*L+l*D,r[8]=o*_+a*I+c*U+l*k,r[12]=o*T+a*B+c*z+l*q,r[1]=h*A+u*w+d*P+f*W,r[5]=h*v+u*C+d*L+f*D,r[9]=h*_+u*I+d*U+f*k,r[13]=h*T+u*B+d*z+f*q,r[2]=g*A+x*w+m*P+p*W,r[6]=g*v+x*C+m*L+p*D,r[10]=g*_+x*I+m*U+p*k,r[14]=g*T+x*B+m*z+p*q,r[3]=y*A+b*w+M*P+E*W,r[7]=y*v+b*C+M*L+E*D,r[11]=y*_+b*I+M*U+E*k,r[15]=y*T+b*B+M*z+E*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=c*f-l*d,b=a*f-l*u,M=a*d-c*u,E=o*f-l*h,A=o*d-c*h,v=o*u-a*h;return t*(x*y-m*b+p*M)-n*(g*y-m*E+p*A)+s*(g*b-x*E+p*v)-r*(g*M-x*A+m*v)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t*a-n*o,b=t*c-s*o,M=t*l-r*o,E=n*c-s*a,A=n*l-r*a,v=s*l-r*c,_=h*x-u*g,T=h*m-d*g,w=h*p-f*g,C=u*m-d*x,I=u*p-f*x,B=d*p-f*m,P=y*B-b*I+M*C+E*w-A*T+v*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=(a*B-c*I+l*C)*L,e[1]=(s*I-n*B-r*C)*L,e[2]=(x*v-m*A+p*E)*L,e[3]=(d*A-u*v-f*E)*L,e[4]=(c*w-o*B-l*T)*L,e[5]=(t*B-s*w+r*T)*L,e[6]=(m*M-g*v-p*b)*L,e[7]=(h*v-d*M+f*b)*L,e[8]=(o*I-a*w+l*_)*L,e[9]=(n*w-t*I-r*_)*L,e[10]=(g*A-x*M+p*y)*L,e[11]=(u*M-h*A-f*y)*L,e[12]=(a*T-o*C-c*_)*L,e[13]=(t*C-n*T+s*_)*L,e[14]=(x*b-g*E-m*y)*L,e[15]=(h*E-u*b+d*y)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,b=c*h,M=c*u,E=n.x,A=n.y,v=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+M)*E,s[2]=(g-b)*E,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+b)*v,s[9]=(m-y)*v,s[10]=(1-(d+x))*v,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=vr.set(s[0],s[1],s[2]).length(),a=vr.set(s[4],s[5],s[6]).length(),c=vr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let l=1/o,h=1/a,u=1/c;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=di,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===di)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Nr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=di,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===di)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Nr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lc.prototype.isMatrix4=!0;var Ge=lc,vr=new F,ci=new Ge,Hg=new F(0,0,0),Wg=new F(1,1,1),fs=new F,Qa=new F,Zn=new F,Od=new Ge,Bd=new dn,Qi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xg=0,zd=new F,yr=new dn,Xi=new Ge,el=new F,mo=new F,qg=new F,Yg=new dn,kd=new F(1,0,0),Vd=new F(0,1,0),Gd=new F(0,0,1),Hd={type:"added"},Zg={type:"removed"},Mr={type:"childadded",child:null},Wh={type:"childremoved",child:null},Dt=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Qi,n=new dn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new st}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?el.copy(e):el.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(mo,el,this.up):Xi.lookAt(el,mo,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Xi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),Wh.child=e,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new F(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kg={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},tl={h:0,s:0,l:0};function Xh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=qu(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xh(o,r,e+1/3),this.g=Xh(o,r,e),this.b=Xh(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ot.workingToColorSpace(wn.copy(this),e),Math.round(at(wn.r*255,0,255))*65536+Math.round(at(wn.g*255,0,255))*256+Math.round(at(wn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(wn.copy(this),t);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=dt){ot.workingToColorSpace(wn.copy(this),e);let t=wn.r,n=wn.g,s=wn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(tl);let n=wo(ds.h,tl.h,t),s=wo(ds.s,tl.s,t),r=wo(ds.l,tl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Le;Le.NAMES=em;var Io=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zs=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new F,qi=new F,qh=new F,Yi=new F,Sr=new F,br=new F,Wd=new F,Yh=new F,Zh=new F,Kh=new F,Jh=new _t,$h=new _t,jh=new _t,_s=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),qi.subVectors(n,t),qh.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(qi),c=hi.dot(qh),l=qi.dot(qi),h=qi.dot(qh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Yi.x),c.addScaledVector(o,Yi.y),c.addScaledVector(a,Yi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Jh.setScalar(0),$h.setScalar(0),jh.setScalar(0),Jh.fromBufferAttribute(e,t),$h.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jh,r.x),o.addScaledVector($h,r.y),o.addScaledVector(jh,r.z),o}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),qi.subVectors(e,t),hi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Sr.subVectors(s,n),br.subVectors(r,n),Yh.subVectors(e,n);let c=Sr.dot(Yh),l=br.dot(Yh);if(c<=0&&l<=0)return t.copy(n);Zh.subVectors(e,s);let h=Sr.dot(Zh),u=br.dot(Zh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Sr,o);Kh.subVectors(e,r);let f=Sr.dot(Kh),g=br.dot(Kh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(br,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Wd.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Wd,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Sr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),il.subVectors(this.max,go),Tr.subVectors(e.a,go),wr.subVectors(e.b,go),Er.subVectors(e.c,go),ps.subVectors(wr,Tr),ms.subVectors(Er,wr),Fs.subVectors(Tr,Er);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Fs.z,Fs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Fs.z,0,-Fs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Fs.y,Fs.x,0];return!Qh(t,Tr,wr,Er,il)||(t=[1,0,0,0,1,0,0,0,1],!Qh(t,Tr,wr,Er,il))?!1:(sl.crossVectors(ps,ms),t=[sl.x,sl.y,sl.z],Qh(t,Tr,wr,Er,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zi=[new F,new F,new F,new F,new F,new F,new F,new F],ui=new F,nl=new pn,Tr=new F,wr=new F,Er=new F,ps=new F,ms=new F,Fs=new F,go=new F,il=new F,sl=new F,Os=new F;function Qh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Os.fromArray(i,r);let a=s.x*Math.abs(Os.x)+s.y*Math.abs(Os.y)+s.z*Math.abs(Os.z),c=e.dot(Os),l=t.dot(Os),h=n.dot(Os);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $i=Jg();function Jg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function $g(i){Math.abs(i)>65504&&ze("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),$i.floatView[0]=i;let e=$i.uint32View[0],t=e>>23&511;return $i.baseTable[t]+((e&8388607)>>$i.shiftTable[t])}function jg(i){let e=i>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[e]+(i&1023)]+$i.exponentTable[e],$i.floatView[0]}var vs=class{static toHalfFloat(e){return $g(e)}static fromHalfFloat(e){return jg(e)}},jt=new F,rl=new ce,Qg=0,Pt=class extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Qg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rl.fromBufferAttribute(this,t),rl.applyMatrix3(e),this.setXY(t,rl.x,rl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Lo=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Do=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ex=new pn,xo=new F,eu=new F,Vn=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ex.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xo.subVectors(e,this.center);let t=xo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xo.copy(e.center).add(eu)),this.expandByPoint(xo.copy(e.center).sub(eu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},tx=0,ni=new Ge,tu=new Dt,Ar=new F,Kn=new pn,_o=new pn,fn=new F,vt=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Do:Lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Kn.min,_o.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,_o.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(_o.min),Kn.expandByPoint(_o.max))}Kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(Ar.fromBufferAttribute(e,l),fn.add(Ar)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new F,c[_]=new F;let l=new F,h=new F,u=new F,d=new ce,f=new ce,g=new ce,x=new F,m=new F;function p(_,T,w){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[_].add(x),a[T].add(x),a[w].add(x),c[_].add(m),c[T].add(m),c[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,T=y.length;_<T;++_){let w=y[_],C=w.start,I=w.count;for(let B=C,P=C+I;B<P;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new F,M=new F,E=new F,A=new F;function v(_){E.fromBufferAttribute(s,_),A.copy(E);let T=a[_];b.copy(T),b.sub(E.multiplyScalar(E.dot(T))).normalize(),M.crossVectors(A,T);let C=M.dot(c[_])<0?-1:1;o.setXYZW(_,b.x,b.y,b.z,C)}for(let _=0,T=y.length;_<T;++_){let w=y[_],C=w.start,I=w.count;for(let B=C,P=C+I;B<P;B+=3)v(e.getX(B+0)),v(e.getX(B+1)),v(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Dn=new F,Vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nx=0,Nn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=si(),this.name="",this.type="Material",this.blending=Hs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Rl,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ki=new F,nu=new F,ol=new F,gs=new F,iu=new F,al=new F,su=new F,Pi=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nu.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(nu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ol),a=gs.dot(this.direction),c=-gs.dot(ol),l=gs.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nu).addScaledVector(ol,d),f}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,s,r){iu.subVectors(t,e),al.subVectors(n,e),su.crossVectors(iu,al);let o=this.direction.dot(su),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,e);let c=a*this.direction.dot(al.crossVectors(gs,al));if(c<0)return null;let l=a*this.direction.dot(iu.cross(gs));if(l<0||c+l>o)return null;let h=-a*gs.dot(su);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xt=class extends Nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xd=new Ge,Bs=new Pi,ll=new Vn,qd=new F,cl=new F,hl=new F,ul=new F,ru=new F,fl=new F,Yd=new F,dl=new F,Pe=class extends Dt{constructor(e=new vt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){fl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(ru.fromBufferAttribute(u,e),o?fl.addScaledVector(ru,h):fl.addScaledVector(ru.sub(t),h))}t.add(fl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ll.copy(n.boundingSphere),ll.applyMatrix4(r),Bs.copy(e.ray).recast(e.near),!(ll.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(ll,qd)===null||Bs.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Xd.copy(r).invert(),Bs.copy(e.ray).applyMatrix4(Xd),!(n.boundingBox!==null&&Bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=b;M<E;M+=3){let A=a.getX(M),v=a.getX(M+1),_=a.getX(M+2);s=pl(this,p,e,n,l,h,u,A,v,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=pl(this,o,e,n,l,h,u,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=b;M<E;M+=3){let A=M,v=M+1,_=M+2;s=pl(this,p,e,n,l,h,u,A,v,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,b=m+1,M=m+2;s=pl(this,o,e,n,l,h,u,y,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ix(i,e,t,n,s,r,o,a){let c;if(e.side===Mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Jn,a),c===null)return null;dl.copy(a),dl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(dl);return l<t.near||l>t.far?null:{distance:l,point:dl.clone(),object:i}}function pl(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,cl),i.getVertexPosition(c,hl),i.getVertexPosition(l,ul);let h=ix(i,e,t,n,cl,hl,ul,Yd);if(h){let u=new F;_s.getBarycoord(Yd,cl,hl,ul,u),s&&(h.uv=_s.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=_s.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=_s.getInterpolatedAttribute(o,a,c,l,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new F,materialIndex:0};_s.getNormal(cl,hl,ul,d.normal),h.face=d,h.barycoord=u}return h}var vo=new _t,Zd=new _t,Kd=new _t,sx=new _t,Jd=new Ge,ml=new F,ou=new Vn,$d=new Ge,au=new Pi,No=class extends Pe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ml),this.boundingBox.expandByPoint(ml)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ml),this.boundingSphere.expandByPoint(ml)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(s),e.ray.intersectsSphere(ou)!==!1&&($d.copy(s).invert(),au.copy(e.ray).applyMatrix4($d),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,au)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ze("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Zd.fromBufferAttribute(s.attributes.skinIndex,e),Kd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(vo.copy(t),t.set(0,0,0,0)):(vo.set(...t,1),t.set(0,0,0)),vo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Kd.getComponent(r);if(o!==0){let a=Zd.getComponent(r);Jd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(sx.copy(vo).applyMatrix4(Jd),o)}}return t.isVector4&&(t.w=vo.w),t.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vn=class extends rn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=zt,h=zt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},jd=new Ge,rx=new Ge,Uo=class i{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ze("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:rx;jd.multiplyMatrices(a,t[r]),jd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vn(t,e,e,Sn,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(ze("Skeleton: No bone found with UUID:",r),o=new Gr),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ys=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new Ge,Qd=new Ge,gl=[],ep=new pn,ox=new Ge,yo=new Pe,Mo=new Vn,ri=class extends Pe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ox)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),ep.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),Mo.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(yo.geometry=this.geometry,yo.material=this.material,yo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),Qd.multiplyMatrices(n,Cr),yo.matrixWorld=Qd,yo.raycast(e,gl);for(let o=0,a=gl.length;o<a;o++){let c=gl[o];c.instanceId=r,c.object=this,t.push(c)}gl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vn(new Float32Array(s*this.count),s,this.count,gc,Pn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lu=new F,ax=new F,lx=new st,ii=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=lu.subVectors(n,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(lu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lx.getNormalMatrix(e),s=this.coplanarPoint(lu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zs=new Vn,cx=new ce(.5,.5),xl=new F,Ms=class{constructor(e=new ii,t=new ii,n=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],b=r[13],M=r[14],E=r[15];if(s[0].setComponents(l-o,f-h,p-g,E-y).normalize(),s[1].setComponents(l+o,f+h,p+g,E+y).normalize(),s[2].setComponents(l+a,f+u,p+x,E+b).normalize(),s[3].setComponents(l-a,f-u,p-x,E-b).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,p-m,E-M).normalize();else if(s[4].setComponents(l-c,f-d,p-m,E-M).normalize(),t===di)s[5].setComponents(l+c,f+d,p+m,E+M).normalize();else if(t===Nr)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=cx.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(xl.x=s.normal.x>0?e.max.x:e.min.x,xl.y=s.normal.y>0?e.max.y:e.min.y,xl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ii=class extends Nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new F,Gl=new F,tp=new Ge,So=new Pi,_l=new Vn,cu=new F,np=new F,es=class extends Dt{constructor(e=new vt,t=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vl.fromBufferAttribute(t,s-1),Gl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new lt(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_l.copy(n.boundingSphere),_l.applyMatrix4(s),_l.radius+=r,e.ray.intersectsSphere(_l)===!1)return;tp.copy(s).invert(),So.copy(e.ray).applyMatrix4(tp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),y=h.getX(x+1),b=vl(this,e,So,c,p,y,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=vl(this,e,So,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=vl(this,e,So,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=vl(this,e,So,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Vl.fromBufferAttribute(a,s),Gl.fromBufferAttribute(a,r),t.distanceSqToSegment(Vl,Gl,cu,np)>n)return;cu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(cu);if(!(l<e.near||l>e.far))return{distance:l,point:np.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ip=new F,sp=new F,Ks=class extends es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ip.fromBufferAttribute(t,s),sp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ip.distanceTo(sp);e.setAttribute("lineDistance",new lt(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fo=class extends es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ss=class extends Nn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rp=new Ge,Mu=new Pi,yl=new Vn,Ml=new F,Js=class extends Dt{constructor(e=new vt,t=new Ss){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),yl.radius+=r,e.ray.intersectsSphere(yl)===!1)return;rp.copy(s).invert(),Mu.copy(e.ray).applyMatrix4(rp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Ml.fromBufferAttribute(u,m),op(Ml,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Ml.fromBufferAttribute(u,g),op(Ml,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function op(i,e,t,n,s,r,o){let a=Mu.distanceSqToPoint(i);if(a<t){let c=new F;Mu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Oo=class extends rn{constructor(e=[],t=Ts,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yn=class extends rn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends rn{constructor(e,t,n=_i,s,r,o,a=zt,c=zt,l,h=Ci,u=1){if(h!==Ci&&h!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hl=class extends pi{constructor(e,t=_i,n=Ts,s,r,o=zt,a=zt,c,l=Ci){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Bo=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(x,m,p,y,b,M,E,A,v,_,T){let w=M/v,C=E/_,I=M/2,B=E/2,P=A/2,L=v+1,U=_+1,z=0,W=0,D=new F;for(let k=0;k<U;k++){let q=k*C-B;for(let J=0;J<L;J++){let oe=J*w-I;D[x]=oe*y,D[m]=q*b,D[p]=P,l.push(D.x,D.y,D.z),D[x]=0,D[m]=0,D[p]=A>0?1:-1,h.push(D.x,D.y,D.z),u.push(J/v),u.push(1-k/_),z+=1}}for(let k=0;k<_;k++)for(let q=0;q<v;q++){let J=d+q+L*k,oe=d+q+L*(k+1),ve=d+(q+1)+L*(k+1),be=d+(q+1)+L*k;c.push(J,oe,be),c.push(oe,ve,be),W+=6}a.addGroup(f,W,T),f+=W,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},zo=class i extends vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,x=s+1,m=new F,p=new F;for(let y=0;y<=g;y++){let b=0,M=0,E=0,A=0;if(y<=n){let T=y/n,w=T*Math.PI/2;M=-h-e*Math.cos(w),E=e*Math.sin(w),A=-e*Math.cos(w),b=T*u}else if(y<=n+r){let T=(y-n)/r;M=-h+T*t,E=e,A=0,b=u+T*d}else{let T=(y-n-r)/n,w=T*Math.PI/2;M=h+e*Math.sin(w),E=e*Math.cos(w),A=e*Math.sin(w),b=u+d+T*u}let v=Math.max(0,Math.min(1,b/f)),_=0;y===0?_=.5/s:y===g&&(_=-.5/s);for(let T=0;T<=s;T++){let w=T/s,C=w*Math.PI*2,I=Math.sin(C),B=Math.cos(C);p.x=-E*B,p.y=M,p.z=E*I,a.push(p.x,p.y,p.z),m.set(-E*B,A,E*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(w+_,v)}if(y>0){let T=(y-1)*x;for(let w=0;w<s;w++){let C=T+w,I=T+w+1,B=y*x+w,P=y*x+w+1;o.push(C,I,B),o.push(I,P,B)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ko=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new F,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function y(){let M=new F,E=new F,A=0,v=(t-e)/n;for(let _=0;_<=r;_++){let T=[],w=_/r,C=w*(t-e)+e;for(let I=0;I<=s;I++){let B=I/s,P=B*c+a,L=Math.sin(P),U=Math.cos(P);E.x=C*L,E.y=-w*n+m,E.z=C*U,u.push(E.x,E.y,E.z),M.set(L,v,U).normalize(),d.push(M.x,M.y,M.z),f.push(B,1-w),T.push(g++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let w=x[T][_],C=x[T+1][_],I=x[T+1][_+1],B=x[T][_+1];(e>0||T!==0)&&(h.push(w,C,B),A+=3),(t>0||T!==r-1)&&(h.push(C,I,B),A+=3)}l.addGroup(p,A,0),p+=A}function b(M){let E=g,A=new ce,v=new F,_=0,T=M===!0?e:t,w=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let C=g;for(let I=0;I<=s;I++){let P=I/s*c+a,L=Math.cos(P),U=Math.sin(P);v.x=T*U,v.y=m*w,v.z=T*L,u.push(v.x,v.y,v.z),d.push(0,w,0),A.x=L*.5+.5,A.y=U*.5*w+.5,f.push(A.x,A.y),g++}for(let I=0;I<s;I++){let B=E+I,P=C+I;M===!0?h.push(P,P+1,B):h.push(P+1,P,B),_+=3}l.addGroup(p,_,M===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mi=class i extends En{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wl=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new F,M=new F,E=new F;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],M),f(t[A+2],E),c(b,M,E,y)}function c(y,b,M,E){let A=E+1,v=[];for(let _=0;_<=A;_++){v[_]=[];let T=y.clone().lerp(M,_/A),w=b.clone().lerp(M,_/A),C=A-_;for(let I=0;I<=C;I++)I===0&&_===A?v[_][I]=T:v[_][I]=T.clone().lerp(w,I/C)}for(let _=0;_<A;_++)for(let T=0;T<2*(A-_)-1;T++){let w=Math.floor(T/2);T%2===0?(d(v[_][w+1]),d(v[_+1][w]),d(v[_][w])):(d(v[_][w+1]),d(v[_+1][w+1]),d(v[_+1][w]))}}function l(y){let b=new F;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(y),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){let y=new F;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let M=m(y)/2/Math.PI+.5,E=p(y)/Math.PI+.5;o.push(M,1-E)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let b=o[y+0],M=o[y+2],E=o[y+4],A=Math.max(b,M,E),v=Math.min(b,M,E);A>.9&&v<.1&&(b<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),E<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let M=y*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function g(){let y=new F,b=new F,M=new F,E=new F,A=new ce,v=new ce,_=new ce;for(let T=0,w=0;T<r.length;T+=9,w+=6){y.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),A.set(o[w+0],o[w+1]),v.set(o[w+2],o[w+3]),_.set(o[w+4],o[w+5]),E.copy(y).add(b).add(M).divideScalar(3);let C=m(E);x(A,w+0,y,C),x(v,w+2,b,C),x(_,w+4,M,C)}}function x(y,b,M,E){E<0&&y.x===1&&(o[b]=y.x-1),M.x===0&&M.z===0&&(o[b]=E/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,c=new Ge;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(at(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xl=class extends Hr{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var ap=new F,lp=new F,hu=new Yu,uu=new Yu,fu=new Yu,ql=class extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(lp.subVectors(s[0],s[1]).add(s[0]),l=lp);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ap.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ap),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),hu.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),uu.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),fu.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),uu.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fu.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hu.calc(c),uu.calc(c),fu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function hx(i,e){let t=1-i;return t*t*e}function ux(i,e){return 2*(1-i)*i*e}function fx(i,e){return i*i*e}function Eo(i,e,t,n){return hx(i,e)+ux(i,t)+fx(i,n)}function dx(i,e){let t=1-i;return t*t*t*e}function px(i,e){let t=1-i;return 3*t*t*i*e}function mx(i,e){return 3*(1-i)*i*i*e}function gx(i,e){return i*i*i*e}function Ao(i,e,t,n,s){return dx(i,e)+px(i,t)+mx(i,n)+gx(i,s)}var Vo=class extends jn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yl=class extends jn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ao(e,s.x,r.x,o.x,a.x),Ao(e,s.y,r.y,o.y,a.y),Ao(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Go=class extends jn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends jn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ho=class extends jn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends jn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Eo(e,s.x,r.x,o.x),Eo(e,s.y,r.y,o.y),Eo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wo=class extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cp(a,c.x,l.x,h.x,u.x),cp(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Su=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:ql,CubicBezierCurve:Vo,CubicBezierCurve3:Yl,EllipseCurve:Hr,LineCurve:Go,LineCurve3:Zl,QuadraticBezierCurve:Ho,QuadraticBezierCurve3:Kl,SplineCurve:Wo}),Jl=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Su[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Su[s.type]().fromJSON(s))}return this}},Xo=class extends Jl{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Go(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ho(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Vo(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Hr(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wr=class extends Xo{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xo().fromJSON(s))}return this}};function xx(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=tm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Sx(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return qo(r,o,t,a,c,l,0),o}function tm(i,e,t,n,s){let r;if(s===Dx(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=hp(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hp(o/n|0,i[o],i[o+1],r);return r&&Xr(r,r.next)&&(Zo(r),r=r.next),r}function $s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xr(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ax(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?vx(i,n,s,r):_x(i)){e.push(c.i,i.i,l.i),Zo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=yx($s(i),e),qo(i,e,t,n,s,r,2)):o===2&&Mx(i,e,t,n,s,r):qo($s(i),e,t,n,s,r,1);break}}}function _x(i){let e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&bo(s,a,r,c,o,l,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vx(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Gt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),p=bu(f,g,e,t,n),y=bu(x,m,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&bo(a,h,c,u,l,d,b.x,b.y)&&Gt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&bo(a,h,c,u,l,d,M.x,M.y)&&Gt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&bo(a,h,c,u,l,d,b.x,b.y)&&Gt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&bo(a,h,c,u,l,d,M.x,M.y)&&Gt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function yx(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Xr(n,s)&&im(n,t,t.next,s)&&Yo(n,s)&&Yo(s,n)&&(e.push(n.i,t.i,s.i),Zo(t),Zo(t.next),t=i=s),t=t.next}while(t!==i);return $s(t)}function Mx(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Px(o,a)){let c=sm(o,a);o=$s(o,o.next),c=$s(c,c.next),qo(o,e,t,n,s,r,0),qo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sx(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=tm(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Rx(l))}s.sort(bx);for(let r=0;r<s.length;r++)t=Tx(s[r],t);return t}function bx(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Tx(i,e){let t=wx(i,e);if(!t)return e;let n=sm(t,i);return $s(n,n.next),$s(t,t.next)}function wx(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Xr(i,t))return t;do{if(Xr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&nm(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Yo(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ex(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ex(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function Ax(i,e,t,n){let s=i;do s.z===0&&(s.z=bu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cx(s)}function Cx(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function bu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Rx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function bo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&nm(i,e,t,n,s,r,o,a)}function Px(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ix(i,e)&&(Yo(i,e)&&Yo(e,i)&&Lx(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Xr(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xr(i,e){return i.x===e.x&&i.y===e.y}function im(i,e,t,n){let s=bl(Gt(i,e,t)),r=bl(Gt(i,e,n)),o=bl(Gt(t,n,i)),a=bl(Gt(t,n,e));return!!(s!==r&&o!==a||s===0&&Sl(i,t,e)||r===0&&Sl(i,n,e)||o===0&&Sl(t,i,n)||a===0&&Sl(t,e,n))}function Sl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function bl(i){return i>0?1:i<0?-1:0}function Ix(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&im(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Yo(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function Lx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function sm(i,e){let t=Tu(i.i,i.x,i.y),n=Tu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hp(i,e,t,n){let s=Tu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dx(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var wu=class{static triangulate(e,t,n=2){return xx(e,t,n)}},Vs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];up(e),fp(n,e);let o=e.length;t.forEach(up);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,fp(n,t[c]);let a=wu.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function up(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ko=class i extends vt{constructor(e=new Wr([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Nx,b,M=!1,E,A,v,_;if(p){b=p.getSpacedPoints(h),M=!0,d=!1;let N=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,N),A=new F,v=new F,_=new F}d||(m=0,f=0,g=0,x=0);let T=a.extractPoints(l),w=T.shape,C=T.holes;if(!Vs.isClockWise(w)){w=w.reverse();for(let N=0,V=C.length;N<V;N++){let H=C[N];Vs.isClockWise(H)&&(C[N]=H.reverse())}}function B(N){let H=10000000000000001e-36,$=N[0];for(let K=1;K<=N.length;K++){let ue=K%N.length,he=N[ue],me=he.x-$.x,de=he.y-$.y,G=me*me+de*de,Xe=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs($.x),Math.abs($.y)),Qe=H*Xe*Xe;if(G<=Qe){N.splice(ue,1),K--;continue}$=he}}B(w),C.forEach(B);let P=C.length,L=w;for(let N=0;N<P;N++){let V=C[N];w=w.concat(V)}function U(N,V,H){return V||et("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(V,H)}let z=w.length;function W(N,V,H){let $,K,ue,he=N.x-V.x,me=N.y-V.y,de=H.x-N.x,G=H.y-N.y,Xe=he*he+me*me,Qe=he*G-me*de;if(Math.abs(Qe)>Number.EPSILON){let O=Math.sqrt(Xe),S=Math.sqrt(de*de+G*G),Z=V.x-me/O,j=V.y+he/O,ie=H.x-G/S,xe=H.y+de/S,ye=((ie-Z)*G-(xe-j)*de)/(he*G-me*de);$=Z+he*ye-N.x,K=j+me*ye-N.y;let se=$*$+K*K;if(se<=2)return new ce($,K);ue=Math.sqrt(se/2)}else{let O=!1;he>Number.EPSILON?de>Number.EPSILON&&(O=!0):he<-Number.EPSILON?de<-Number.EPSILON&&(O=!0):Math.sign(me)===Math.sign(G)&&(O=!0),O?($=-me,K=he,ue=Math.sqrt(Xe)):($=he,K=me,ue=Math.sqrt(Xe/2))}return new ce($/ue,K/ue)}let D=[];for(let N=0,V=L.length,H=V-1,$=N+1;N<V;N++,H++,$++)H===V&&(H=0),$===V&&($=0),D[N]=W(L[N],L[H],L[$]);let k=[],q,J=D.concat();for(let N=0,V=P;N<V;N++){let H=C[N];q=[];for(let $=0,K=H.length,ue=K-1,he=$+1;$<K;$++,ue++,he++)ue===K&&(ue=0),he===K&&(he=0),q[$]=W(H[$],H[ue],H[he]);k.push(q),J=J.concat(q)}let oe;if(m===0)oe=Vs.triangulateShape(L,C);else{let N=[],V=[];for(let H=0;H<m;H++){let $=H/m,K=f*Math.cos($*Math.PI/2),ue=g*Math.sin($*Math.PI/2)+x;for(let he=0,me=L.length;he<me;he++){let de=U(L[he],D[he],ue);Ne(de.x,de.y,-K),$===0&&N.push(de)}for(let he=0,me=P;he<me;he++){let de=C[he];q=k[he];let G=[];for(let Xe=0,Qe=de.length;Xe<Qe;Xe++){let O=U(de[Xe],q[Xe],ue);Ne(O.x,O.y,-K),$===0&&G.push(O)}$===0&&V.push(G)}}oe=Vs.triangulateShape(N,V)}let ve=oe.length,be=g+x;for(let N=0;N<z;N++){let V=d?U(w[N],J[N],be):w[N];M?(v.copy(E.normals[0]).multiplyScalar(V.x),A.copy(E.binormals[0]).multiplyScalar(V.y),_.copy(b[0]).add(v).add(A),Ne(_.x,_.y,_.z)):Ne(V.x,V.y,0)}for(let N=1;N<=h;N++)for(let V=0;V<z;V++){let H=d?U(w[V],J[V],be):w[V];M?(v.copy(E.normals[N]).multiplyScalar(H.x),A.copy(E.binormals[N]).multiplyScalar(H.y),_.copy(b[N]).add(v).add(A),Ne(_.x,_.y,_.z)):Ne(H.x,H.y,u/h*N)}for(let N=m-1;N>=0;N--){let V=N/m,H=f*Math.cos(V*Math.PI/2),$=g*Math.sin(V*Math.PI/2)+x;for(let K=0,ue=L.length;K<ue;K++){let he=U(L[K],D[K],$);Ne(he.x,he.y,u+H)}for(let K=0,ue=C.length;K<ue;K++){let he=C[K];q=k[K];for(let me=0,de=he.length;me<de;me++){let G=U(he[me],q[me],$);M?Ne(G.x,G.y+b[h-1].y,b[h-1].x+H):Ne(G.x,G.y,u+H)}}}ne(),ge();function ne(){let N=s.length/3;if(d){let V=0,H=z*V;for(let $=0;$<ve;$++){let K=oe[$];Oe(K[2]+H,K[1]+H,K[0]+H)}V=h+m*2,H=z*V;for(let $=0;$<ve;$++){let K=oe[$];Oe(K[0]+H,K[1]+H,K[2]+H)}}else{for(let V=0;V<ve;V++){let H=oe[V];Oe(H[2],H[1],H[0])}for(let V=0;V<ve;V++){let H=oe[V];Oe(H[0]+z*h,H[1]+z*h,H[2]+z*h)}}n.addGroup(N,s.length/3-N,0)}function ge(){let N=s.length/3,V=0;fe(L,V),V+=L.length;for(let H=0,$=C.length;H<$;H++){let K=C[H];fe(K,V),V+=K.length}n.addGroup(N,s.length/3-N,1)}function fe(N,V){let H=N.length;for(;--H>=0;){let $=H,K=H-1;K<0&&(K=N.length-1);for(let ue=0,he=h+m*2;ue<he;ue++){let me=z*ue,de=z*(ue+1),G=V+$+me,Xe=V+K+me,Qe=V+K+de,O=V+$+de;He(G,Xe,Qe,O)}}}function Ne(N,V,H){c.push(N),c.push(V),c.push(H)}function Oe(N,V,H){ht(N),ht(V),ht(H);let $=s.length/3,K=y.generateTopUV(n,s,$-3,$-2,$-1);je(K[0]),je(K[1]),je(K[2])}function He(N,V,H,$){ht(N),ht(V),ht($),ht(V),ht(H),ht($);let K=s.length/3,ue=y.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);je(ue[0]),je(ue[1]),je(ue[3]),je(ue[1]),je(ue[2]),je(ue[3])}function ht(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function je(N){r.push(N.x),r.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ux(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Su[s.type]().fromJSON(s)),new i(n,e.options)}},Nx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(d,1-g),new ce(x,1-p)]:[new ce(a,1-c),new ce(h,1-u),new ce(f,1-g),new ce(m,1-p)]}};function Ux(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var js=class i extends Wl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Jo=class i extends vt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new F,d=new ce,f=new F,g=new F,x=new F,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let b=n+y*h*s,M=Math.sin(b),E=Math.cos(b);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*M,u.y=e[A].y,u.z=e[A].x*E,o.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),a.push(d.x,d.y);let v=c[3*A+0]*M,_=c[3*A+1],T=c[3*A+0]*E;l.push(v,_,T)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let M=b+y*e.length,E=M,A=M+e.length,v=M+e.length+1,_=M+1;r.push(E,A,_),r.push(v,_,A)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Qn=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let b=0;b<l;b++){let M=b*u-r;g.push(M,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let b=y+l*p,M=y+l*(p+1),E=y+1+l*(p+1),A=y+1+l*p;f.push(b,M,A),f.push(M,E,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var on=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new F,d=new F,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,M=o+b*a,E=e*Math.cos(M),A=Math.sqrt(e*e-E*E),v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let _=0;_<=t;_++){let T=_/t,w=s+T*r;u.x=-A*Math.cos(w),u.y=E,u.z=A*Math.sin(w),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-b),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=h[p][y+1],M=h[p][y],E=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&f.push(b,M,A),(p!==n-1||c<Math.PI)&&f.push(M,E,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Li=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new F,f=new F,g=new F;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,y=(s+1)*(x-1)+m-1,b=(s+1)*(x-1)+m,M=(s+1)*x+m;c.push(p,y,M),c.push(y,b,M)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function ar(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(dp(s))s.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function In(i){let e={};for(let t=0;t<i.length;t++){let n=ar(i[t]);for(let s in n)e[s]=n[s]}return e}function dp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Fx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var mn={clone:ar,merge:In},Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends Nn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qr=class extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends Nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $o=class extends Nn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var $l=class extends Nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends Nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function pp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function kx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends Di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=e,a=2*t-n;break;case vu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _u:o=e,c=2*n-t;break;case vu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+y*o[l+E]+b*o[c+E]+M*o[u+E];return r}},ec=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},tc=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nc=class extends Di{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*d+g*2,y=u[p],b=u[p+1],M=e*d+g*2,E=h[M],A=h[M+1],v=(n-t)/(s-t),_,T,w,C,I;for(let B=0;B<8;B++){_=v*v,T=_*v,w=1-v,C=w*w,I=C*w;let L=I*t+3*C*v*y+3*w*_*E+T*s-n;if(Math.abs(L)<1e-10)break;let U=3*C*(y-t)+6*w*v*(E-y)+3*_*(s-E);if(Math.abs(U)<1e-10)break;v=v-L/U,v=Math.max(0,Math.min(1,v))}r[g]=I*x+3*C*v*b+3*w*_*A+T*m}return r}},Hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tl(t,this.TimeBufferType),this.values=Tl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tl(e.times,Array),values:Tl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xs:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break;case gu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return Al;case this.InterpolantFactoryMethodBezier:return gu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){et("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&bg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Al,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=qs;var ts=class extends Hn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Xs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};jo.prototype.ValueTypeName="color";var ns=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};ns.prototype.ValueTypeName="number";var ic=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},is=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Hn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Xs;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};bs.prototype.ValueTypeName="vector";var Qo=class{constructor(e="",t=-1,n=[],s=Vp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Gx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=zx(c);c=pp(c,1,h),l=pp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ns(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Vx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return jo;case"quaternion":return is;case"bool":case"boolean":return ts;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Gx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Vx(i.type);if(i.times===void 0){let t=[],n=[];kx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(mp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!mp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function mp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var sc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rm=new sc,gi=class{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},Eu=class extends Error{constructor(e,t){super(e),this.response=t}},Qs=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:s});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ji[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{x+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,v=h.length;A<v;A++){let _=h[A];_.onProgress&&_.onProgress(E)}p.enqueue(M),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Eu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ai.add(`file:${e}`,l);let h=Ji[e];delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ji[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Rr=new WeakMap,rc=class extends gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Rr.get(o);u===void 0&&(u=[],Rr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Ur("img");function c(){h(),t&&t(this);let u=Rr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Rr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ai.remove(`image:${e}`);let d=Rr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Rr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ea=class extends gi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new vn,a=new Qs(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):et(h);return}r._applyTexData(o,l),t&&t(o,l)},n,s),o}createDataTexture(e){let t=new vn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:kn,e.wrapT=t.wrapT!==void 0?t.wrapT:kn,e.magFilter=t.magFilter!==void 0?t.magFilter:yt,e.minFilter=t.minFilter!==void 0?t.minFilter:yt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Cn),t.mipmapCount===1&&(e.minFilter=yt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},er=class extends gi{constructor(e){super(e)}load(e,t,n,s){let r=new rn,o=new rc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},tr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},nr=class extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},du=new Ge,gp=new F,xp=new F,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(gp),xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xp),t.updateMatrixWorld(),du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Nr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wl=new F,El=new dn,Ei=new F,na=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wl,El,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,El,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wl,El,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wl,El,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xs=new F,_p=new ce,vp=new ce,Bt=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,_p,vp),t.subVectors(vp,_p)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(To*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Au=class extends ta{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ia=class extends tr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Au}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Cu=class extends ta{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},ei=class extends tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ni=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ru=class extends ta{constructor(){super(new Ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rs=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var os=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pu=new WeakMap,sa=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ze("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ze("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{pu.has(o)===!0?(s&&s(pu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ai.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),pu.set(c,l),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pr=-90,Ir=1,oc=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Pr,Ir,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Pr,Ir,e,t);r.layers=this.layers,this.add(r);let o=new Bt(Pr,Ir,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Pr,Ir,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Pr,Ir,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Pr,Ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ac=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ra=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Hx.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Hx(){this._document.hidden===!1&&this.reset()}var Ku="\\[\\]\\.:\\/",Wx=new RegExp("["+Ku+"]","g"),Ju="[^"+Ku+"]",Xx="[^"+Ku.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",Ju),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),Kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),Jx=new RegExp("^"+qx+Yx+Zx+Kx+"$"),$x=["material","materials","bones","map"],Pu=class{constructor(e,t,n){let s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(e){let t=Jx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$x.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Pu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wS=new Float32Array(1);var yp=new Ge,oa=class{constructor(e,t,n=0,s=1/0){this.ray=new Pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Br,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yp),this}intersectObject(e,t=!0,n=[]){return Iu(e,this,n,t),n.sort(Mp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Iu(e[s],this,n,t);return n.sort(Mp),n}};function Mp(i,e){return i.distance-e.distance}function Iu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Iu(r[o],e,t,!0)}}var nf=class nf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};nf.prototype.isMatrix2=!0;var Lu=nf;function $u(i,e,t,n){let s=jx(n);switch(t){case Gu:return i*e;case gc:return i*e/s.components*s.byteLength;case xc:return i*e/s.components*s.byteLength;case Es:return i*e*2/s.components*s.byteLength;case _c:return i*e*2/s.components*s.byteLength;case Hu:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case vc:return i*e*4/s.components*s.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:case bc:return Math.max(i,16)*Math.max(e,8)/4;case yc:case Sc:return Math.max(i,8)*Math.max(e,8)/2;case Tc:case wc:case Ac:case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Sa:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wc:case Xc:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ba:case Kc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jx(i){switch(i){case Rn:case Bu:return{byteLength:1,components:1};case Jr:case zu:case Ft:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case _i:case dc:case Pn:return{byteLength:4,components:1};case ku:case Vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Cm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function e1(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var t1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n1=`#ifdef USE_ALPHAHASH
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
#endif`,i1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a1=`#ifdef USE_AOMAP
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
#endif`,l1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c1=`#ifdef USE_BATCHING
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
#endif`,h1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p1=`#ifdef USE_IRIDESCENCE
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
#endif`,m1=`#ifdef USE_BUMPMAP
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
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,T1=`#define PI 3.141592653589793
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
} // validated`,w1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E1=`vec3 transformedNormal = objectNormal;
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
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I1="gl_FragColor = linearToOutputTexel( gl_FragColor );",L1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,U1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Y1=`#ifdef USE_ENVMAP
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
#endif`,Z1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j1=`PhysicalMaterial material;
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
#endif`,Q1=`uniform sampler2D dfgLUT;
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
}`,e_=`
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
#endif`,t_=`#if defined( RE_IndirectDiffuse )
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
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u_=`#if defined( USE_POINTS_UV )
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
#endif`,f_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`#ifdef USE_MORPHTARGETS
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
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T_=`#ifdef USE_NORMALMAP
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
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,k_=`float getShadowMask() {
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
}`,V_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
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
#endif`,H_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
#endif`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nv=`uniform sampler2D t2D;
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
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
}`,lv=`#if DEPTH_PACKING == 3200
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
}`,cv=`#define DISTANCE
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
}`,hv=`#define DISTANCE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#include <common>
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
}`,gv=`uniform vec3 diffuse;
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
}`,xv=`#define LAMBERT
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
}`,_v=`#define LAMBERT
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
}`,vv=`#define MATCAP
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
}`,yv=`#define MATCAP
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
}`,Mv=`#define NORMAL
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
}`,Sv=`#define NORMAL
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
}`,bv=`#define PHONG
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
}`,Tv=`#define PHONG
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
}`,wv=`#define STANDARD
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
}`,Ev=`#define STANDARD
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
}`,Av=`#define TOON
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
}`,Cv=`#define TOON
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
}`,Rv=`uniform float size;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,Lv=`uniform vec3 color;
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
}`,Dv=`uniform float rotation;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:t1,alphahash_pars_fragment:n1,alphamap_fragment:i1,alphamap_pars_fragment:s1,alphatest_fragment:r1,alphatest_pars_fragment:o1,aomap_fragment:a1,aomap_pars_fragment:l1,batching_pars_vertex:c1,batching_vertex:h1,begin_vertex:u1,beginnormal_vertex:f1,bsdfs:d1,iridescence_fragment:p1,bumpmap_pars_fragment:m1,clipping_planes_fragment:g1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:v1,color_fragment:y1,color_pars_fragment:M1,color_pars_vertex:S1,color_vertex:b1,common:T1,cube_uv_reflection_fragment:w1,defaultnormal_vertex:E1,displacementmap_pars_vertex:A1,displacementmap_vertex:C1,emissivemap_fragment:R1,emissivemap_pars_fragment:P1,colorspace_fragment:I1,colorspace_pars_fragment:L1,envmap_fragment:D1,envmap_common_pars_fragment:N1,envmap_pars_fragment:U1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:Y1,envmap_vertex:O1,fog_vertex:B1,fog_pars_vertex:z1,fog_fragment:k1,fog_pars_fragment:V1,gradientmap_pars_fragment:G1,lightmap_pars_fragment:H1,lights_lambert_fragment:W1,lights_lambert_pars_fragment:X1,lights_pars_begin:q1,lights_toon_fragment:Z1,lights_toon_pars_fragment:K1,lights_phong_fragment:J1,lights_phong_pars_fragment:$1,lights_physical_fragment:j1,lights_physical_pars_fragment:Q1,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,lightprobes_pars_fragment:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:o_,logdepthbuf_vertex:a_,map_fragment:l_,map_pars_fragment:c_,map_particle_fragment:h_,map_particle_pars_fragment:u_,metalnessmap_fragment:f_,metalnessmap_pars_fragment:d_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:x_,morphtarget_vertex:__,normal_fragment_begin:v_,normal_fragment_maps:y_,normal_pars_fragment:M_,normal_pars_vertex:S_,normal_vertex:b_,normalmap_pars_fragment:T_,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:E_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:C_,opaque_fragment:R_,packing:P_,premultiplied_alpha_fragment:I_,project_vertex:L_,dithering_fragment:D_,dithering_pars_fragment:N_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:O_,shadowmap_pars_vertex:B_,shadowmap_vertex:z_,shadowmask_pars_fragment:k_,skinbase_vertex:V_,skinning_pars_vertex:G_,skinning_vertex:H_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:q_,tonemapping_fragment:Y_,tonemapping_pars_fragment:Z_,transmission_fragment:K_,transmission_pars_fragment:J_,uv_pars_fragment:$_,uv_pars_vertex:j_,uv_vertex:Q_,worldpos_vertex:ev,background_vert:tv,background_frag:nv,backgroundCube_vert:iv,backgroundCube_frag:sv,cube_vert:rv,cube_frag:ov,depth_vert:av,depth_frag:lv,distance_vert:cv,distance_frag:hv,equirect_vert:uv,equirect_frag:fv,linedashed_vert:dv,linedashed_frag:pv,meshbasic_vert:mv,meshbasic_frag:gv,meshlambert_vert:xv,meshlambert_frag:_v,meshmatcap_vert:vv,meshmatcap_frag:yv,meshnormal_vert:Mv,meshnormal_frag:Sv,meshphong_vert:bv,meshphong_frag:Tv,meshphysical_vert:wv,meshphysical_frag:Ev,meshtoon_vert:Av,meshtoon_frag:Cv,points_vert:Rv,points_frag:Pv,shadow_vert:Iv,shadow_frag:Lv,sprite_vert:Dv,sprite_frag:Nv},Ee={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Oi={basic:{uniforms:In([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:In([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:In([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:In([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:In([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:In([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:In([Ee.points,Ee.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:In([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:In([Ee.common,Ee.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:In([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:In([Ee.sprite,Ee.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:In([Ee.common,Ee.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:In([Ee.lights,Ee.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Oi.physical={uniforms:In([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var jc={r:0,b:0,g:0},Uv=new Ge,Rm=new st;Rm.set(-1,0,0,0,1,0,0,0,1);function Fv(i,e,t,n,s,r){let o=new Le(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let M=y.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(y){let b=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),b=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,b){let M=f(b);M&&(M.isCubeTexture||M.mapping===xa)?(l===void 0&&(l=new Pe(new Vt(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:ar(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Uv.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Rm),l.material.toneMapped=ot.getTransfer(M.colorSpace)!==xt,(h!==M||u!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Pe(new Qn(2,2),new Mt({name:"BackgroundMaterial",uniforms:ar(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(M.colorSpace)!==xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(jc,Zu(i)),t.buffers.color.setClear(jc.r,jc.g,jc.b,b,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Ov(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(C,I,B,P,L){let U=!1,z=u(C,P,B,I);r!==z&&(r=z,l(r.object)),U=f(C,P,B,L),U&&g(C,P,B,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,M(C,I,B,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,I,B,P){let L=P.wireframe===!0,U=n[I.id];U===void 0&&(U={},n[I.id]=U);let z=C.isInstancedMesh===!0?C.id:0,W=U[z];W===void 0&&(W={},U[z]=W);let D=W[B.id];D===void 0&&(D={},W[B.id]=D);let k=D[L];return k===void 0&&(k=d(c()),D[L]=k),k}function d(C){let I=[],B=[],P=[];for(let L=0;L<t;L++)I[L]=0,B[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:P,object:C,attributes:{},index:null}}function f(C,I,B,P){let L=r.attributes,U=I.attributes,z=0,W=B.getAttributes();for(let D in W)if(W[D].location>=0){let q=L[D],J=U[D];if(J===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),q===void 0||q.attribute!==J||J&&q.data!==J.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(C,I,B,P){let L={},U=I.attributes,z=0,W=B.getAttributes();for(let D in W)if(W[D].location>=0){let q=U[D];q===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(q=C.instanceColor));let J={};J.attribute=q,q&&q.data&&(J.data=q.data),L[D]=J,z++}r.attributes=L,r.attributesNum=z,r.index=P}function x(){let C=r.newAttributes;for(let I=0,B=C.length;I<B;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){let B=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;B[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),L[C]!==I&&(i.vertexAttribDivisor(C,I),L[C]=I)}function y(){let C=r.newAttributes,I=r.enabledAttributes;for(let B=0,P=I.length;B<P;B++)I[B]!==C[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function b(C,I,B,P,L,U,z){z===!0?i.vertexAttribIPointer(C,I,B,L,U):i.vertexAttribPointer(C,I,B,P,L,U)}function M(C,I,B,P){x();let L=P.attributes,U=B.getAttributes(),z=I.defaultAttributeValues;for(let W in U){let D=U[W];if(D.location>=0){let k=L[W];if(k===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let q=k.normalized,J=k.itemSize,oe=e.get(k);if(oe===void 0)continue;let ve=oe.buffer,be=oe.type,ne=oe.bytesPerElement,ge=be===i.INT||be===i.UNSIGNED_INT||k.gpuType===dc;if(k.isInterleavedBufferAttribute){let fe=k.data,Ne=fe.stride,Oe=k.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<D.locationSize;He++)p(D.location+He,fe.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<D.locationSize;He++)m(D.location+He);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let He=0;He<D.locationSize;He++)b(D.location+He,J/D.locationSize,be,q,Ne*ne,(Oe+J/D.locationSize*He)*ne,ge)}else{if(k.isInstancedBufferAttribute){for(let fe=0;fe<D.locationSize;fe++)p(D.location+fe,k.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let fe=0;fe<D.locationSize;fe++)m(D.location+fe);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let fe=0;fe<D.locationSize;fe++)b(D.location+fe,J/D.locationSize,be,q,J*ne,J/D.locationSize*fe*ne,ge)}}else if(z!==void 0){let q=z[W];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(D.location,q);break;case 3:i.vertexAttrib3fv(D.location,q);break;case 4:i.vertexAttrib4fv(D.location,q);break;default:i.vertexAttrib1fv(D.location,q)}}}}y()}function E(){T();for(let C in n){let I=n[C];for(let B in I){let P=I[B];for(let L in P){let U=P[L];for(let z in U)h(U[z].object),delete U[z];delete P[L]}}delete n[C]}}function A(C){if(n[C.id]===void 0)return;let I=n[C.id];for(let B in I){let P=I[B];for(let L in P){let U=P[L];for(let z in U)h(U[z].object),delete U[z];delete P[L]}}delete n[C.id]}function v(C){for(let I in n){let B=n[I];for(let P in B){let L=B[P];if(L[C.id]===void 0)continue;let U=L[C.id];for(let z in U)h(U[z].object),delete U[z];delete L[C.id]}}}function _(C){for(let I in n){let B=n[I],P=C.isInstancedMesh===!0?C.id:0,L=B[P];if(L!==void 0){for(let U in L){let z=L[U];for(let W in z)h(z[W].object),delete z[W];delete L[U]}delete B[P],Object.keys(B).length===0&&delete n[I]}}}function T(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Bv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function zv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let v=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(v){return!(v!==Sn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let _=v===Ft&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Rn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Pn&&!_)}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(ze("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:M,maxSamples:E,samples:A}}function kv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ii,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,b=y*4,M=p.clippingState||null;c.value=M,M=h(g,d,b,f);for(let E=0;E!==b;++E)M[E]=t[E];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)o.copy(u[b]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var As=4,om=[.125,.215,.35,.446,.526,.582],lr=20,Vv=256,Ea=new Ni,am=new Le,sf=null,rf=0,of=0,af=!1,Gv=new F,eh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Gv}=r;sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,rf,of),this._renderer.xr.enabled=af,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Ft,format:Sn,colorSpace:_n,depthBuffer:!1},s=lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hv(r)),this._blurMaterial=Xv(r,e,t),this._ggxMaterial=Wv(r,e,t)}return s}_compileMaterial(e){let t=new Pe(new vt,e);this._renderer.compile(t,Ea)}_sceneToCubeUV(e,t,n,s,r){let c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(am),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new Vt,new Xt({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(am),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));let E=this._cubeSize;jr(s,M*E,b>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ts||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ea)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-As?n-g+As:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,jr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Ea),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,jr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Ea)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*lr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):lr;m>lr&&ze(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);let p=[],y=0;for(let v=0;v<lr;++v){let _=v/x,T=Math.exp(-_*_/2);p.push(T),v===0?y+=T:v<m&&(y+=2*T)}for(let v=0;v<p.length;v++)p[v]=p[v]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let M=this._sizeLods[s],E=3*M*(s>b-As?s-b+As:0),A=4*(this._cubeSize-M);jr(t,E,A,3*M,2*M),c.setRenderTarget(t),c.render(u,Ea)}};function Hv(i){let e=[],t=[],n=[],s=i,r=i-As+1+om.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-As?c=om[o-i+As-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){let v=A%3*2/3-1,_=A>2?0:-1,T=[v,_,0,v+2/3,_,0,v+2/3,_+1,0,v,_,0,v+2/3,_+1,0,v,_+1,0];y.set(T,x*g*A),b.set(d,m*g*A);let w=[A,A,A,A,A,A];M.set(w,p*g*A)}let E=new vt;E.setAttribute("position",new Pt(y,x)),E.setAttribute("uv",new Pt(b,m)),E.setAttribute("faceIndex",new Pt(M,p)),n.push(new Pe(E,null)),s>As&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function lm(i,e,t){let n=new kt(i,e,t);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Wv(i,e,t){return new Mt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function Xv(i,e,t){let n=new Float32Array(lr),s=new F(0,1,0);return new Mt({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function cm(){return new Mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nh(),fragmentShader:`

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
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function hm(){return new Mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zt,depthTest:!1,depthWrite:!1})}function nh(){return`

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
	`}var th=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Oo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Zt});r.uniforms.tEquirect.value=t;let o=new Pe(s,r),a=t.minFilter;return t.minFilter===Cn&&(t.minFilter=yt),new oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function qv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Zr||f===uc)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new th(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Zr||f===uc,x=f===Ts||f===rr;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new eh(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new eh(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Zr?d.mapping=Ts:f===uc&&(d.mapping=rr),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Yv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Gs("WebGLRenderer: "+n+" extension not supported."),s}}}function Zv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let y=f.array;x=f.version;for(let b=0,M=y.length;b<M;b+=3){let E=y[b+0],A=y[b+1],v=y[b+2];d.push(E,A,A,v,v,E)}}else{let y=g.array;x=g.version;for(let b=0,M=y.length/3-1;b<M;b+=3){let E=b+0,A=b+1,v=b+2;d.push(E,A,A,v,v,E)}}let m=new(g.count>=65535?Do:Lo)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Kv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Jv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $v(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*E*4*u),v=new Po(A,M,E,u);v.type=Pn,v.needsUpdate=!0;let _=b*4;for(let w=0;w<u;w++){let C=m[w],I=p[w],B=y[w],P=M*E*4*w;for(let L=0;L<C.count;L++){let U=L*_;f===!0&&(s.fromBufferAttribute(C,L),A[P+U+0]=s.x,A[P+U+1]=s.y,A[P+U+2]=s.z,A[P+U+3]=0),g===!0&&(s.fromBufferAttribute(I,L),A[P+U+4]=s.x,A[P+U+5]=s.y,A[P+U+6]=s.z,A[P+U+7]=0),x===!0&&(s.fromBufferAttribute(B,L),A[P+U+8]=s.x,A[P+U+9]=s.y,A[P+U+10]=s.z,A[P+U+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:v,size:new ce(M,E)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function jv(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Qv={[ua]:"LINEAR_TONE_MAPPING",[fa]:"REINHARD_TONE_MAPPING",[da]:"CINEON_TONE_MAPPING",[sr]:"ACES_FILMIC_TONE_MAPPING",[ma]:"AGX_TONE_MAPPING",[ga]:"NEUTRAL_TONE_MAPPING",[pa]:"CUSTOM_TONE_MAPPING"};function ey(i,e,t,n,s,r){let o=new kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new pi(e,t):void 0}),a=new kt(e,t,{type:Ft,depthBuffer:!1,stencilBuffer:!1}),c=new vt;c.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new qr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Pe(c,l),u=new Ni(-1,1,1,-1,0,1),d=null,f=null,g=!1,x,m=null,p=[],y=!1;this.setSize=function(b,M){o.setSize(b,M),a.setSize(b,M);for(let E=0;E<p.length;E++){let A=p[E];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){p=b,y=p.length>0&&p[0].isRenderPass===!0;let M=o.width,E=o.height;for(let A=0;A<p.length;A++){let v=p[A];v.setSize&&v.setSize(M,E)}},this.begin=function(b,M){if(g||b.toneMapping===xi&&p.length===0)return!1;if(m=M,M!==null){let E=M.width,A=M.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return y===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=xi,!0},this.hasRenderPass=function(){return y},this.end=function(b,M){b.toneMapping=x,g=!0;let E=o,A=a;for(let v=0;v<p.length;v++){let _=p[v];if(_.enabled!==!1&&(_.render(b,A,E,M),_.needsSwap!==!1)){let T=E;E=A,A=T}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},ot.getTransfer(d)===xt&&(l.defines.SRGB_TRANSFER="");let v=Qv[f];v&&(l.defines[v]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(m),b.render(h,u),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Pm=new rn,hf=new pi(1,1),Im=new Po,Lm=new kl,Dm=new Oo,um=[],fm=[],dm=new Float32Array(16),pm=new Float32Array(9),mm=new Float32Array(4);function to(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ih(i,e){let t=fm[e];t===void 0&&(t=new Int32Array(e),fm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ty(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function iy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function sy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function ry(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;mm.set(n),i.uniformMatrix2fv(this.addr,!1,mm),ln(t,n)}}function oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;pm.set(n),i.uniformMatrix3fv(this.addr,!1,pm),ln(t,n)}}function ay(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;dm.set(n),i.uniformMatrix4fv(this.addr,!1,dm),ln(t,n)}}function ly(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function fy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function py(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function my(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function gy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=t.isReversedDepthBuffer()?$c:Jc,r=hf):r=Pm,t.setTexture2D(e||r,s)}function xy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Lm,s)}function _y(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dm,s)}function vy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Im,s)}function yy(i){switch(i){case 5126:return ty;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return ly;case 35667:case 35671:return cy;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return fy;case 36294:return dy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return vy}}function My(i,e){i.uniform1fv(this.addr,e)}function Sy(i,e){let t=to(e,this.size,2);i.uniform2fv(this.addr,t)}function by(i,e){let t=to(e,this.size,3);i.uniform3fv(this.addr,t)}function Ty(i,e){let t=to(e,this.size,4);i.uniform4fv(this.addr,t)}function wy(i,e){let t=to(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ey(i,e){let t=to(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ay(i,e){let t=to(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cy(i,e){i.uniform1iv(this.addr,e)}function Ry(i,e){i.uniform2iv(this.addr,e)}function Py(i,e){i.uniform3iv(this.addr,e)}function Iy(i,e){i.uniform4iv(this.addr,e)}function Ly(i,e){i.uniform1uiv(this.addr,e)}function Dy(i,e){i.uniform2uiv(this.addr,e)}function Ny(i,e){i.uniform3uiv(this.addr,e)}function Uy(i,e){i.uniform4uiv(this.addr,e)}function Fy(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=hf:o=Pm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Oy(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Lm,r[o])}function By(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Dm,r[o])}function zy(i,e,t){let n=this.cache,s=e.length,r=ih(t,s);an(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Im,r[o])}function ky(i){switch(i){case 5126:return My;case 35664:return Sy;case 35665:return by;case 35666:return Ty;case 35674:return wy;case 35675:return Ey;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Ry;case 35668:case 35672:return Py;case 35669:case 35673:return Iy;case 5125:return Ly;case 36294:return Dy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return Fy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return zy}}var uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yy(t.type)}},ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ky(t.type)}},df=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function gm(i,e){i.seq.push(e),i.map[e.id]=e}function Vy(i,e,t){let n=i.name,s=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),o=lf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gm(t,l===void 0?new uf(a,i,e):new ff(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new df(a),gm(t,u)),t=u}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Vy(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function xm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Gy=37297,Hy=0;function Wy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var _m=new st;function Xy(i){ot._getMatrix(_m,ot.workingColorSpace,i);let e=`mat3( ${_m.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Wy(i.getShaderSource(e),a)}else return r}function qy(i,e){let t=Xy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yy={[ua]:"Linear",[fa]:"Reinhard",[da]:"Cineon",[sr]:"ACESFilmic",[ma]:"AgX",[ga]:"Neutral",[pa]:"Custom"};function Zy(i,e){let t=Yy[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qc=new F;function Ky(){ot.getLuminanceCoefficients(Qc);let i=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function $y(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ca(i){return i!==""}function ym(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(Qy,tM)}var eM=new Map;function tM(i,e){let t=ct[e];if(t===void 0){let n=eM.get(e);if(n!==void 0)t=ct[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return pf(t)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(i){return i.replace(nM,iM)}function iM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var sM={[aa]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function rM(i){return sM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oM={[Ts]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[xa]:"ENVMAP_TYPE_CUBE_UV"};function aM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":oM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lM={[rr]:"ENVMAP_MODE_REFRACTION"};function cM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hM={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[zp]:"ENVMAP_BLENDING_ADD"};function uM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hM[i.combine]||"ENVMAP_BLENDING_NONE"}function fM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function dM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=rM(t),l=aM(t),h=cM(t),u=uM(t),d=fM(t),f=Jy(t),g=$y(r),x=s.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(m=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?ct.tonemapping_pars_fragment:"",t.toneMapping!==xi?Zy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,qy("linearToOutputTexel",t.outputColorSpace),Ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=pf(o),o=ym(o,t),o=Mm(o,t),a=pf(a),a=ym(a,t),a=Mm(a,t),o=Sm(o),a=Sm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+o,M=y+p+a,E=xm(s,s.VERTEX_SHADER,b),A=xm(s,s.FRAGMENT_SHADER,M);s.attachShader(x,E),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function v(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(A)||"",L=I.trim(),U=B.trim(),z=P.trim(),W=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{let k=vm(s,E,"vertex"),q=vm(s,A,"fragment");et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+k+`
`+q)}else L!==""?ze("WebGLProgram: Program Info Log:",L):(U===""||z==="")&&(D=!1);D&&(C.diagnostics={runnable:W,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(E),s.deleteShader(A),_=new Qr(s,x),T=jy(s,x)}let _;this.getUniforms=function(){return _===void 0&&v(this),_};let T;this.getAttributes=function(){return T===void 0&&v(this),T};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,Gy)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var pM=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gf(e),t.set(e,n)),n}},gf=class{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}};function mM(i){return i===Es||i===Sa||i===ba}function gM(i,e,t,n,s,r){let o=new Br,a=new mf,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,w,C,I,B){let P=C.fog,L=I.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||U,z),D=W&&W.mapping===xa?W.image.height:null,k=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=q!==void 0?q.length:0,oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let ve,be,ne,ge;if(k){let Be=Oi[k];ve=Be.vertexShader,be=Be.fragmentShader}else{ve=_.vertexShader,be=_.fragmentShader;let Be=a.getVertexShaderStage(_),Ht=a.getFragmentShaderStage(_);a.update(_,Be,Ht),ne=Be.id,ge=Ht.id}let fe=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,He=I.isBatchedMesh===!0,ht=!!_.map,je=!!_.matcap,N=!!W,V=!!_.aoMap,H=!!_.lightMap,$=!!_.bumpMap&&_.wireframe===!1,K=!!_.normalMap,ue=!!_.displacementMap,he=!!_.emissiveMap,me=!!_.metalnessMap,de=!!_.roughnessMap,G=_.anisotropy>0,Xe=_.clearcoat>0,Qe=_.dispersion>0,O=_.iridescence>0,S=_.sheen>0,Z=_.transmission>0,j=G&&!!_.anisotropyMap,ie=Xe&&!!_.clearcoatMap,xe=Xe&&!!_.clearcoatNormalMap,ye=Xe&&!!_.clearcoatRoughnessMap,se=O&&!!_.iridescenceMap,ae=O&&!!_.iridescenceThicknessMap,Te=S&&!!_.sheenColorMap,We=S&&!!_.sheenRoughnessMap,Se=!!_.specularMap,Me=!!_.specularColorMap,ke=!!_.specularIntensityMap,Je=Z&&!!_.transmissionMap,nt=Z&&!!_.thicknessMap,X=!!_.gradientMap,we=!!_.alphaMap,le=_.alphaTest>0,Ae=!!_.alphaHash,Ie=!!_.extensions,pe=xi;_.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(pe=i.toneMapping);let qe={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:be,defines:_.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:He,batchingColor:He&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ht,matcap:je,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:D,aoMap:V,lightMap:H,bumpMap:$,normalMap:K,displacementMap:ue,emissiveMap:he,normalMapObjectSpace:K&&_.normalMapType===Hp,normalMapTangentSpace:K&&_.normalMapType===wa,packedNormalMap:K&&_.normalMapType===wa&&mM(_.normalMap.format),metalnessMap:me,roughnessMap:de,anisotropy:G,anisotropyMap:j,clearcoat:Xe,clearcoatMap:ie,clearcoatNormalMap:xe,clearcoatRoughnessMap:ye,dispersion:Qe,iridescence:O,iridescenceMap:se,iridescenceThicknessMap:ae,sheen:S,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:Se,specularColorMap:Me,specularIntensityMap:ke,transmission:Z,transmissionMap:Je,thicknessMap:nt,gradientMap:X,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:we,alphaTest:le,alphaHash:Ae,combine:_.combine,mapUv:ht&&g(_.map.channel),aoMapUv:V&&g(_.aoMap.channel),lightMapUv:H&&g(_.lightMap.channel),bumpMapUv:$&&g(_.bumpMap.channel),normalMapUv:K&&g(_.normalMap.channel),displacementMapUv:ue&&g(_.displacementMap.channel),emissiveMapUv:he&&g(_.emissiveMap.channel),metalnessMapUv:me&&g(_.metalnessMap.channel),roughnessMapUv:de&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:ie&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:We&&g(_.sheenRoughnessMap.channel),specularMapUv:Se&&g(_.specularMap.channel),specularColorMapUv:Me&&g(_.specularColorMap.channel),specularIntensityMapUv:ke&&g(_.specularIntensityMap.channel),transmissionMapUv:Je&&g(_.transmissionMap.channel),thicknessMapUv:nt&&g(_.thicknessMap.channel),alphaMapUv:we&&g(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(K||G),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(ht||we),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&K===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ne,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:pe,decodeVideoTexture:ht&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:he&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===An,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&_.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let w in _.defines)T.push(w),T.push(_.defines[w]);return _.isRawShaderMaterial===!1&&(p(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function b(_){let T=f[_.type],w;if(T){let C=Oi[T];w=mn.clone(C.uniforms)}else w=_.uniforms;return w}function M(_,T){let w=h.get(T);return w!==void 0?++w.usedTimes:(w=new dM(i,T,_,s),l.push(w),h.set(T,w)),w}function E(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function v(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:v}}function xM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function _M(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Tm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,x,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=o(d),y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,f,g,x,m,p){let y=a(d,f,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,x,m,p){let y=a(d,f,g,x,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f,g){t.length>1&&t.sort(d||_M),n.length>1&&n.sort(f||Tm),s.length>1&&s.sort(f||Tm),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function vM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new wm,i.set(n,[o])):s>=r.length?(o=new wm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function yM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Le};break;case"SpotLight":t={position:new F,direction:new F,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function MM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var SM=0;function bM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TM(i){let e=new yM,t=MM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new Ge,o=new Ge;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,b=0,M=0,E=0,A=0,v=0;l.sort(bM);for(let T=0,w=l.length;T<w;T++){let C=l[T],I=C.color,B=C.intensity,P=C.distance,L=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Es?L=C.shadow.map.texture:L=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=I.r*B,u+=I.g*B,d+=I.b*B;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],B);v++}else if(C.isDirectionalLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,W=t.get(C);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=U,f++}else if(C.isSpotLight){let U=e.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(I).multiplyScalar(B),U.distance=P,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[x]=U;let z=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=z.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=L,M++}x++}else if(C.isRectAreaLight){let U=e.get(C);U.color.copy(I).multiplyScalar(B),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=U,m++}else if(C.isPointLight){let U=e.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){let z=C.shadow,W=t.get(C);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=L,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=U,g++}else if(C.isHemisphereLight){let U=e.get(C);U.skyColor.copy(C.color).multiplyScalar(B),U.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==x||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==y||_.numPointShadows!==b||_.numSpotShadows!==M||_.numSpotMaps!==E||_.numLightProbes!==v)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=v,_.directionalLength=f,_.pointLength=g,_.spotLength=x,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=y,_.numPointShadows=b,_.numSpotShadows=M,_.numSpotMaps=E,_.numLightProbes=v,n.version=SM++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let b=l[p];if(b.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Em(i){let e=new TM(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function wM(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Em(i),e.set(s,[a])):r>=o.length?(a=new Em(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var EM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
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
}`,CM=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],RM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Am=new Ge,Aa=new F,cf=new F;function PM(i,e,t){let n=new Ms,s=new ce,r=new ce,o=new _t,a=new $l,c=new jl,l={},h=t.maxTextureSize,u={[Jn]:Mn,[Mn]:Jn,[An]:An},d=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:EM,fragmentShader:AM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let p=this.type;this.render=function(A,v,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===cc&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=aa);let T=i.getRenderTarget(),w=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Zt),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=p!==this.type;B&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(L=>L.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,L=A.length;P<L;P++){let U=A[P],z=U.shadow;if(z===void 0){ze("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let W=z.getFrameExtents();s.multiply(W),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,z.mapSize.y=r.y));let D=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=D,z.map===null||B===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Yr){if(U.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new kt(s.x,s.y,{format:Es,type:Ft,minFilter:yt,magFilter:yt,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new pi(s.x,s.y,Pn),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=Ci,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt}else U.isPointLight?(z.map=new th(s.x),z.map.depthTexture=new Hl(s.x,_i)):(z.map=new kt(s.x,s.y),z.map.depthTexture=new pi(s.x,s.y,_i)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=Ci,this.type===aa?(z.map.depthTexture.compareFunction=D?$c:Jc,z.map.depthTexture.minFilter=yt,z.map.depthTexture.magFilter=yt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=zt,z.map.depthTexture.magFilter=zt);z.camera.updateProjectionMatrix()}let k=z.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<k;q++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,q),i.clear();else{q===0&&(i.setRenderTarget(z.map),i.clear());let J=z.getViewport(q);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),I.viewport(o)}if(U.isPointLight){let J=z.camera,oe=z.matrix,ve=U.distance||J.far;ve!==J.far&&(J.far=ve,J.updateProjectionMatrix()),Aa.setFromMatrixPosition(U.matrixWorld),J.position.copy(Aa),cf.copy(J.position),cf.add(CM[q]),J.up.copy(RM[q]),J.lookAt(cf),J.updateMatrixWorld(),oe.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Am.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Am,J.coordinateSystem,J.reversedDepth)}else z.updateMatrices(U);n=z.getFrustum(),M(v,_,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===Yr&&y(z,_),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(T,w,C)};function y(A,v){let _=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kt(s.x,s.y,{format:Es,type:Ft})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(v,null,_,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(v,null,_,f,x,null)}function b(A,v,_,T){let w=null,C=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)w=C;else if(w=_.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let I=w.uuid,B=v.uuid,P=l[I];P===void 0&&(P={},l[I]=P);let L=P[B];L===void 0&&(L=w.clone(),P[B]=L,v.addEventListener("dispose",E)),w=L}if(w.visible=v.visible,w.wireframe=v.wireframe,T===Yr?w.side=v.shadowSide!==null?v.shadowSide:v.side:w.side=v.shadowSide!==null?v.shadowSide:u[v.side],w.alphaMap=v.alphaMap,w.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,w.map=v.map,w.clipShadows=v.clipShadows,w.clippingPlanes=v.clippingPlanes,w.clipIntersection=v.clipIntersection,w.displacementMap=v.displacementMap,w.displacementScale=v.displacementScale,w.displacementBias=v.displacementBias,w.wireframeLinewidth=v.wireframeLinewidth,w.linewidth=v.linewidth,_.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let I=i.properties.get(w);I.light=_}return w}function M(A,v,_,T,w){if(A.visible===!1)return;if(A.layers.test(v.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Yr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let B=e.update(A),P=A.material;if(Array.isArray(P)){let L=B.groups;for(let U=0,z=L.length;U<z;U++){let W=L[U],D=P[W.materialIndex];if(D&&D.visible){let k=b(A,D,T,w);A.onBeforeShadow(i,A,v,_,B,k,W),i.renderBufferDirect(_,null,B,k,A,W),A.onAfterShadow(i,A,v,_,B,k,W)}}}else if(P.visible){let L=b(A,P,T,w);A.onBeforeShadow(i,A,v,_,B,L,null),i.renderBufferDirect(_,null,B,L,A,null),A.onAfterShadow(i,A,v,_,B,L,null)}}let I=A.children;for(let B=0,P=I.length;B<P;B++)M(I[B],v,_,T,w)}function E(A){A.target.removeEventListener("dispose",E);for(let _ in l){let T=l[_],w=A.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function IM(i,e){function t(){let X=!1,we=new _t,le=null,Ae=new _t(0,0,0,0);return{setMask:function(Ie){le!==Ie&&!X&&(i.colorMask(Ie,Ie,Ie,Ie),le=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,pe,qe,Be,Ht){Ht===!0&&(Ie*=Be,pe*=Be,qe*=Be),we.set(Ie,pe,qe,Be),Ae.equals(we)===!1&&(i.clearColor(Ie,pe,qe,Be),Ae.copy(we))},reset:function(){X=!1,le=null,Ae.set(-1,0,0,0)}}}function n(){let X=!1,we=!1,le=null,Ae=null,Ie=null;return{setReversed:function(pe){if(we!==pe){let qe=e.get("EXT_clip_control");pe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),we=pe;let Be=Ie;Ie=null,this.setClear(Be)}},getReversed:function(){return we},setTest:function(pe){pe?fe(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(pe){le!==pe&&!X&&(i.depthMask(pe),le=pe)},setFunc:function(pe){if(we&&(pe=Qp[pe]),Ae!==pe){switch(pe){case Pl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case Ws:i.depthFunc(i.LEQUAL);break;case Dl:i.depthFunc(i.EQUAL);break;case Nl:i.depthFunc(i.GEQUAL);break;case Ul:i.depthFunc(i.GREATER);break;case Fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=pe}},setLocked:function(pe){X=pe},setClear:function(pe){Ie!==pe&&(Ie=pe,we&&(pe=1-pe),i.clearDepth(pe))},reset:function(){X=!1,le=null,Ae=null,Ie=null,we=!1}}}function s(){let X=!1,we=null,le=null,Ae=null,Ie=null,pe=null,qe=null,Be=null,Ht=null;return{setTest:function(It){X||(It?fe(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(It){we!==It&&!X&&(i.stencilMask(It),we=It)},setFunc:function(It,bi,Ti){(le!==It||Ae!==bi||Ie!==Ti)&&(i.stencilFunc(It,bi,Ti),le=It,Ae=bi,Ie=Ti)},setOp:function(It,bi,Ti){(pe!==It||qe!==bi||Be!==Ti)&&(i.stencilOp(It,bi,Ti),pe=It,qe=bi,Be=Ti)},setLocked:function(It){X=It},setClear:function(It){Ht!==It&&(i.clearStencil(It),Ht=It)},reset:function(){X=!1,we=null,le=null,Ae=null,Ie=null,pe=null,qe=null,Be=null,Ht=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,b=null,M=null,E=null,A=null,v=null,_=new Le(0,0,0),T=0,w=!1,C=null,I=null,B=null,P=null,L=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(D)[1]),z=W>=1):D.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),z=W>=2);let k=null,q={},J=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),ve=new _t().fromArray(J),be=new _t().fromArray(oe);function ne(X,we,le,Ae){let Ie=new Uint8Array(4),pe=i.createTexture();i.bindTexture(X,pe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qe=0;qe<le;qe++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(we+qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return pe}let ge={};ge[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(Ws),$(!1),K(Du),fe(i.CULL_FACE),V(Zt);function fe(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Ne(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function Oe(X,we){return d[X]!==we?(i.bindFramebuffer(X,we),d[X]=we,X===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=we),X===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=we),!0):!1}function He(X,we){let le=g,Ae=!1;if(X){le=f.get(we),le===void 0&&(le=[],f.set(we,le));let Ie=X.textures;if(le.length!==Ie.length||le[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,qe=Ie.length;pe<qe;pe++)le[pe]=i.COLOR_ATTACHMENT0+pe;le.length=Ie.length,Ae=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(le)}function ht(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let je={[$n]:i.FUNC_ADD,[Tp]:i.FUNC_SUBTRACT,[wp]:i.FUNC_REVERSE_SUBTRACT};je[Ep]=i.MIN,je[Ap]=i.MAX;let N={[ir]:i.ZERO,[Cp]:i.ONE,[Rp]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[Dp]:i.SRC_ALPHA_SATURATE,[ha]:i.DST_COLOR,[ca]:i.DST_ALPHA,[Pp]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[Lp]:i.ONE_MINUS_DST_COLOR,[Ip]:i.ONE_MINUS_DST_ALPHA,[Np]:i.CONSTANT_COLOR,[Up]:i.ONE_MINUS_CONSTANT_COLOR,[Fp]:i.CONSTANT_ALPHA,[Op]:i.ONE_MINUS_CONSTANT_ALPHA};function V(X,we,le,Ae,Ie,pe,qe,Be,Ht,It){if(X===Zt){m===!0&&(Ne(i.BLEND),m=!1);return}if(m===!1&&(fe(i.BLEND),m=!0),X!==hc){if(X!==p||It!==w){if((y!==$n||E!==$n)&&(i.blendEquation(i.FUNC_ADD),y=$n,E=$n),It)switch(X){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.ONE,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",X);break}else switch(X){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nu:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",X);break}b=null,M=null,A=null,v=null,_.set(0,0,0),T=0,p=X,w=It}return}Ie=Ie||we,pe=pe||le,qe=qe||Ae,(we!==y||Ie!==E)&&(i.blendEquationSeparate(je[we],je[Ie]),y=we,E=Ie),(le!==b||Ae!==M||pe!==A||qe!==v)&&(i.blendFuncSeparate(N[le],N[Ae],N[pe],N[qe]),b=le,M=Ae,A=pe,v=qe),(Be.equals(_)===!1||Ht!==T)&&(i.blendColor(Be.r,Be.g,Be.b,Ht),_.copy(Be),T=Ht),p=X,w=!1}function H(X,we){X.side===An?Ne(i.CULL_FACE):fe(i.CULL_FACE);let le=X.side===Mn;we&&(le=!le),$(le),X.blending===Hs&&X.transparent===!1?V(Zt):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ae=X.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),he(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function K(X){X!==Sp?(fe(i.CULL_FACE),X!==I&&(X===Du?i.cullFace(i.BACK):X===bp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),I=X}function ue(X){X!==B&&(z&&i.lineWidth(X),B=X)}function he(X,we,le){X?(fe(i.POLYGON_OFFSET_FILL),(P!==we||L!==le)&&(P=we,L=le,o.getReversed()&&(we=-we),i.polygonOffset(we,le))):Ne(i.POLYGON_OFFSET_FILL)}function me(X){X?fe(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function de(X){X===void 0&&(X=i.TEXTURE0+U-1),k!==X&&(i.activeTexture(X),k=X)}function G(X,we,le){le===void 0&&(k===null?le=i.TEXTURE0+U-1:le=k);let Ae=q[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},q[le]=Ae),(Ae.type!==X||Ae.texture!==we)&&(k!==le&&(i.activeTexture(le),k=le),i.bindTexture(X,we||ge[X]),Ae.type=X,Ae.texture=we)}function Xe(){let X=q[k];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(X){et("WebGLState:",X)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(X){et("WebGLState:",X)}}function S(){try{i.texSubImage2D(...arguments)}catch(X){et("WebGLState:",X)}}function Z(){try{i.texSubImage3D(...arguments)}catch(X){et("WebGLState:",X)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(X){et("WebGLState:",X)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(X){et("WebGLState:",X)}}function xe(){try{i.texStorage2D(...arguments)}catch(X){et("WebGLState:",X)}}function ye(){try{i.texStorage3D(...arguments)}catch(X){et("WebGLState:",X)}}function se(){try{i.texImage2D(...arguments)}catch(X){et("WebGLState:",X)}}function ae(){try{i.texImage3D(...arguments)}catch(X){et("WebGLState:",X)}}function Te(X){return u[X]!==void 0?u[X]:i.getParameter(X)}function We(X,we){u[X]!==we&&(i.pixelStorei(X,we),u[X]=we)}function Se(X){ve.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ve.copy(X))}function Me(X){be.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function ke(X,we){let le=l.get(we);le===void 0&&(le=new WeakMap,l.set(we,le));let Ae=le.get(X);Ae===void 0&&(Ae=i.getUniformBlockIndex(we,X.name),le.set(X,Ae))}function Je(X,we){let Ae=l.get(we).get(X);c.get(we)!==Ae&&(i.uniformBlockBinding(we,Ae,X.__bindingPointIndex),c.set(we,Ae))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,q={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,y=null,b=null,M=null,E=null,A=null,v=null,_=new Le(0,0,0),T=0,w=!1,C=null,I=null,B=null,P=null,L=null,ve.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:Ne,bindFramebuffer:Oe,drawBuffers:He,useProgram:ht,setBlending:V,setMaterial:H,setFlipSided:$,setCullFace:K,setLineWidth:ue,setPolygonOffset:he,setScissorTest:me,activeTexture:de,bindTexture:G,unbindTexture:Xe,compressedTexImage2D:Qe,compressedTexImage3D:O,texImage2D:se,texImage3D:ae,pixelStorei:We,getParameter:Te,updateUBOMapping:ke,uniformBlockBinding:Je,texStorage2D:xe,texStorage3D:ye,texSubImage2D:S,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:ie,scissor:Se,viewport:Me,reset:nt}}function LM(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,S){return g?new OffscreenCanvas(O,S):Ur("canvas")}function m(O,S,Z){let j=1,ie=Qe(O);if((ie.width>Z||ie.height>Z)&&(j=Z/Math.max(ie.width,ie.height)),j<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let xe=Math.floor(j*ie.width),ye=Math.floor(j*ie.height);d===void 0&&(d=x(xe,ye));let se=S?x(xe,ye):d;return se.width=xe,se.height=ye,se.getContext("2d").drawImage(O,0,0,xe,ye),ze("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+xe+"x"+ye+")."),se}else return"data"in O&&ze("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),O;return O}function p(O){return O.generateMipmaps}function y(O){i.generateMipmap(O)}function b(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(O,S,Z,j,ie,xe=!1){if(O!==null){if(i[O]!==void 0)return i[O];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ye;j&&(ye=e.get("EXT_texture_norm16"),ye||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=S;if(S===i.RED&&(Z===i.FLOAT&&(se=i.R32F),Z===i.HALF_FLOAT&&(se=i.R16F),Z===i.UNSIGNED_BYTE&&(se=i.R8),Z===i.UNSIGNED_SHORT&&ye&&(se=ye.R16_EXT),Z===i.SHORT&&ye&&(se=ye.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.R8UI),Z===i.UNSIGNED_SHORT&&(se=i.R16UI),Z===i.UNSIGNED_INT&&(se=i.R32UI),Z===i.BYTE&&(se=i.R8I),Z===i.SHORT&&(se=i.R16I),Z===i.INT&&(se=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(se=i.RG32F),Z===i.HALF_FLOAT&&(se=i.RG16F),Z===i.UNSIGNED_BYTE&&(se=i.RG8),Z===i.UNSIGNED_SHORT&&ye&&(se=ye.RG16_EXT),Z===i.SHORT&&ye&&(se=ye.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RG8UI),Z===i.UNSIGNED_SHORT&&(se=i.RG16UI),Z===i.UNSIGNED_INT&&(se=i.RG32UI),Z===i.BYTE&&(se=i.RG8I),Z===i.SHORT&&(se=i.RG16I),Z===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(se=i.RGB16UI),Z===i.UNSIGNED_INT&&(se=i.RGB32UI),Z===i.BYTE&&(se=i.RGB8I),Z===i.SHORT&&(se=i.RGB16I),Z===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),Z===i.UNSIGNED_INT&&(se=i.RGBA32UI),Z===i.BYTE&&(se=i.RGBA8I),Z===i.SHORT&&(se=i.RGBA16I),Z===i.INT&&(se=i.RGBA32I)),S===i.RGB&&(Z===i.UNSIGNED_SHORT&&ye&&(se=ye.RGB16_EXT),Z===i.SHORT&&ye&&(se=ye.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),S===i.RGBA){let ae=xe?Co:ot.getTransfer(ie);Z===i.FLOAT&&(se=i.RGBA32F),Z===i.HALF_FLOAT&&(se=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(se=ae===xt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&ye&&(se=ye.RGBA16_EXT),Z===i.SHORT&&ye&&(se=ye.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function E(O,S){let Z;return O?S===null||S===_i||S===ws?Z=i.DEPTH24_STENCIL8:S===Pn?Z=i.DEPTH32F_STENCIL8:S===Jr&&(Z=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===ws?Z=i.DEPTH_COMPONENT24:S===Pn?Z=i.DEPTH_COMPONENT32F:S===Jr&&(Z=i.DEPTH_COMPONENT16),Z}function A(O,S){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==zt&&O.minFilter!==yt?Math.log2(Math.max(S.width,S.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?S.mipmaps.length:1}function v(O){let S=O.target;S.removeEventListener("dispose",v),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(O){let S=O.target;S.removeEventListener("dispose",_),C(S)}function T(O){let S=n.get(O);if(S.__webglInit===void 0)return;let Z=O.source,j=f.get(Z);if(j){let ie=j[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(O),Object.keys(j).length===0&&f.delete(Z)}n.remove(O)}function w(O){let S=n.get(O);i.deleteTexture(S.__webglTexture);let Z=O.source,j=f.get(Z);delete j[S.__cacheKey],o.memory.textures--}function C(O){let S=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let ie=0;ie<S.__webglFramebuffer[j].length;ie++)i.deleteFramebuffer(S.__webglFramebuffer[j][ie]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Z=O.textures;for(let j=0,ie=Z.length;j<ie;j++){let xe=n.get(Z[j]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(Z[j])}n.remove(O)}let I=0;function B(){I=0}function P(){return I}function L(O){I=O}function U(){let O=I;return O>=s.maxTextures&&ze("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),I+=1,O}function z(O){let S=[];return S.push(O.wrapS),S.push(O.wrapT),S.push(O.wrapR||0),S.push(O.magFilter),S.push(O.minFilter),S.push(O.anisotropy),S.push(O.internalFormat),S.push(O.format),S.push(O.type),S.push(O.generateMipmaps),S.push(O.premultiplyAlpha),S.push(O.flipY),S.push(O.unpackAlignment),S.push(O.colorSpace),S.join()}function W(O,S){let Z=n.get(O);if(O.isVideoTexture&&G(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Z.__version!==O.version){let j=O.image;if(j===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Z,O,S);return}}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function D(O,S){let Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){Ne(Z,O,S);return}else O.isExternalTexture&&(Z.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function k(O,S){let Z=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Z.__version!==O.version){Ne(Z,O,S);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function q(O,S){let Z=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Z.__version!==O.version){Oe(Z,O,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}let J={[Qt]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},oe={[zt]:i.NEAREST,[fc]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},ve={[Wp]:i.NEVER,[Kp]:i.ALWAYS,[Xp]:i.LESS,[Jc]:i.LEQUAL,[qp]:i.EQUAL,[$c]:i.GEQUAL,[Yp]:i.GREATER,[Zp]:i.NOTEQUAL};function be(O,S){if(S.type===Pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yt||S.magFilter===Kr||S.magFilter===or||S.magFilter===Cn||S.minFilter===yt||S.minFilter===Kr||S.minFilter===or||S.minFilter===Cn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,J[S.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,J[S.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,J[S.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==or&&S.minFilter!==Cn||S.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(O,S){let Z=!1;O.__webglInit===void 0&&(O.__webglInit=!0,S.addEventListener("dispose",v));let j=S.source,ie=f.get(j);ie===void 0&&(ie={},f.set(j,ie));let xe=z(S);if(xe!==O.__cacheKey){ie[xe]===void 0&&(ie[xe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ie[xe].usedTimes++;let ye=ie[O.__cacheKey];ye!==void 0&&(ie[O.__cacheKey].usedTimes--,ye.usedTimes===0&&w(S)),O.__cacheKey=xe,O.__webglTexture=ie[xe].texture}return Z}function ge(O,S,Z){return Math.floor(Math.floor(O/Z)/S)}function fe(O,S,Z,j){let xe=O.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Z,j,S.data);else{xe.sort((We,Se)=>We.start-Se.start);let ye=0;for(let We=1;We<xe.length;We++){let Se=xe[ye],Me=xe[We],ke=Se.start+Se.count,Je=ge(Me.start,S.width,4),nt=ge(Se.start,S.width,4);Me.start<=ke+1&&Je===nt&&ge(Me.start+Me.count-1,S.width,4)===Je?Se.count=Math.max(Se.count,Me.start+Me.count-Se.start):(++ye,xe[ye]=Me)}xe.length=ye+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let We=0,Se=xe.length;We<Se;We++){let Me=xe[We],ke=Math.floor(Me.start/4),Je=Math.ceil(Me.count/4),nt=ke%S.width,X=Math.floor(ke/S.width),we=Je,le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,nt,X,we,le,Z,j,S.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Ne(O,S,Z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);let ie=ne(O,S),xe=S.source;t.bindTexture(j,O.__webglTexture,i.TEXTURE0+Z);let ye=n.get(xe);if(xe.version!==ye.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let le=ot.getPrimaries(ot.workingColorSpace),Ae=S.colorSpace===as?null:ot.getPrimaries(S.colorSpace),Ie=S.colorSpace===as||le===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ae=m(S.image,!1,s.maxTextureSize);ae=Xe(S,ae);let Te=r.convert(S.format,S.colorSpace),We=r.convert(S.type),Se=M(S.internalFormat,Te,We,S.normalized,S.colorSpace,S.isVideoTexture);be(j,S);let Me,ke=S.mipmaps,Je=S.isVideoTexture!==!0,nt=ye.__version===void 0||ie===!0,X=xe.dataReady,we=A(S,ae);if(S.isDepthTexture)Se=E(S.format===Ui,S.type),nt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Se,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Se,ae.width,ae.height,0,Te,We,null));else if(S.isDataTexture)if(ke.length>0){Je&&nt&&t.texStorage2D(i.TEXTURE_2D,we,Se,ke[0].width,ke[0].height);for(let le=0,Ae=ke.length;le<Ae;le++)Me=ke[le],Je?X&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Me.width,Me.height,Te,We,Me.data):t.texImage2D(i.TEXTURE_2D,le,Se,Me.width,Me.height,0,Te,We,Me.data);S.generateMipmaps=!1}else Je?(nt&&t.texStorage2D(i.TEXTURE_2D,we,Se,ae.width,ae.height),X&&fe(S,ae,Te,We)):t.texImage2D(i.TEXTURE_2D,0,Se,ae.width,ae.height,0,Te,We,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Se,ke[0].width,ke[0].height,ae.depth);for(let le=0,Ae=ke.length;le<Ae;le++)if(Me=ke[le],S.format!==Sn)if(Te!==null)if(Je){if(X)if(S.layerUpdates.size>0){let Ie=$u(Me.width,Me.height,S.format,S.type);for(let pe of S.layerUpdates){let qe=Me.data.subarray(pe*Ie/Me.data.BYTES_PER_ELEMENT,(pe+1)*Ie/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,pe,Me.width,Me.height,1,Te,qe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ae.depth,Te,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Se,Me.width,Me.height,ae.depth,0,Me.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,Me.width,Me.height,ae.depth,Te,We,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Se,Me.width,Me.height,ae.depth,0,Te,We,Me.data)}else{Je&&nt&&t.texStorage2D(i.TEXTURE_2D,we,Se,ke[0].width,ke[0].height);for(let le=0,Ae=ke.length;le<Ae;le++)Me=ke[le],S.format!==Sn?Te!==null?Je?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Se,Me.width,Me.height,0,Me.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?X&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Me.width,Me.height,Te,We,Me.data):t.texImage2D(i.TEXTURE_2D,le,Se,Me.width,Me.height,0,Te,We,Me.data)}else if(S.isDataArrayTexture)if(Je){if(nt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Se,ae.width,ae.height,ae.depth),X)if(S.layerUpdates.size>0){let le=$u(ae.width,ae.height,S.format,S.type);for(let Ae of S.layerUpdates){let Ie=ae.data.subarray(Ae*le/ae.data.BYTES_PER_ELEMENT,(Ae+1)*le/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,ae.width,ae.height,1,Te,We,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,We,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Se,ae.width,ae.height,ae.depth,0,Te,We,ae.data);else if(S.isData3DTexture)Je?(nt&&t.texStorage3D(i.TEXTURE_3D,we,Se,ae.width,ae.height,ae.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,We,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Se,ae.width,ae.height,ae.depth,0,Te,We,ae.data);else if(S.isFramebufferTexture){if(nt)if(Je)t.texStorage2D(i.TEXTURE_2D,we,Se,ae.width,ae.height);else{let le=ae.width,Ae=ae.height;for(let Ie=0;Ie<we;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Se,le,Ae,0,Te,We,null),le>>=1,Ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let le=i.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ae.parentNode!==le){le.appendChild(ae),u.add(S),le.onpaint=Ae=>{let Ie=Ae.changedElements;for(let pe of u)Ie.includes(pe.image)&&(pe.needsUpdate=!0)},le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let Ie=i.RGBA,pe=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,pe,qe,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Je&&nt){let le=Qe(ke[0]);t.texStorage2D(i.TEXTURE_2D,we,Se,le.width,le.height)}for(let le=0,Ae=ke.length;le<Ae;le++)Me=ke[le],Je?X&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Te,We,Me):t.texImage2D(i.TEXTURE_2D,le,Se,Te,We,Me);S.generateMipmaps=!1}else if(Je){if(nt){let le=Qe(ae);t.texStorage2D(i.TEXTURE_2D,we,Se,le.width,le.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,We,ae)}else t.texImage2D(i.TEXTURE_2D,0,Se,Te,We,ae);p(S)&&y(j),ye.__version=xe.version,S.onUpdate&&S.onUpdate(S)}O.__version=S.version}function Oe(O,S,Z){if(S.image.length!==6)return;let j=ne(O,S),ie=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Z);let xe=n.get(ie);if(ie.version!==xe.__version||j===!0){t.activeTexture(i.TEXTURE0+Z);let ye=ot.getPrimaries(ot.workingColorSpace),se=S.colorSpace===as?null:ot.getPrimaries(S.colorSpace),ae=S.colorSpace===as||ye===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Te=S.isCompressedTexture||S.image[0].isCompressedTexture,We=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!Te&&!We?Se[pe]=m(S.image[pe],!0,s.maxCubemapSize):Se[pe]=We?S.image[pe].image:S.image[pe],Se[pe]=Xe(S,Se[pe]);let Me=Se[0],ke=r.convert(S.format,S.colorSpace),Je=r.convert(S.type),nt=M(S.internalFormat,ke,Je,S.normalized,S.colorSpace),X=S.isVideoTexture!==!0,we=xe.__version===void 0||j===!0,le=ie.dataReady,Ae=A(S,Me);be(i.TEXTURE_CUBE_MAP,S);let Ie;if(Te){X&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,nt,Me.width,Me.height);for(let pe=0;pe<6;pe++){Ie=Se[pe].mipmaps;for(let qe=0;qe<Ie.length;qe++){let Be=Ie[qe];S.format!==Sn?ke!==null?X?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,nt,Be.width,Be.height,0,Be.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe,nt,Be.width,Be.height,0,ke,Je,Be.data)}}}else{if(Ie=S.mipmaps,X&&we){Ie.length>0&&Ae++;let pe=Qe(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,nt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(We){X?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,ke,Je,Se[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,nt,Se[pe].width,Se[pe].height,0,ke,Je,Se[pe].data);for(let qe=0;qe<Ie.length;qe++){let Ht=Ie[qe].image[pe].image;X?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,Ht.width,Ht.height,ke,Je,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,nt,Ht.width,Ht.height,0,ke,Je,Ht.data)}}else{X?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke,Je,Se[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,nt,ke,Je,Se[pe]);for(let qe=0;qe<Ie.length;qe++){let Be=Ie[qe];X?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,0,0,ke,Je,Be.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,qe+1,nt,ke,Je,Be.image[pe])}}}p(S)&&y(i.TEXTURE_CUBE_MAP),xe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}O.__version=S.version}function He(O,S,Z,j,ie,xe){let ye=r.convert(Z.format,Z.colorSpace),se=r.convert(Z.type),ae=M(Z.internalFormat,ye,se,Z.normalized,Z.colorSpace),Te=n.get(S),We=n.get(Z);if(We.__renderTarget=S,!Te.__hasExternalTextures){let Se=Math.max(1,S.width>>xe),Me=Math.max(1,S.height>>xe);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,xe,ae,Se,Me,S.depth,0,ye,se,null):t.texImage2D(ie,xe,ae,Se,Me,0,ye,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ie,We.__webglTexture,0,me(S)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ie,We.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(O,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,O),S.depthBuffer){let j=S.depthTexture,ie=j&&j.isDepthTexture?j.type:null,xe=E(S.stencilBuffer,ie),ye=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(S),xe,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(S),xe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,O)}else{let j=S.textures;for(let ie=0;ie<j.length;ie++){let xe=j[ie],ye=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),ae=M(xe.internalFormat,ye,se,xe.normalized,xe.colorSpace);de(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me(S),ae,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me(S),ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ae,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(O,S,Z){let j=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=n.get(S.depthTexture);if(ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,S.depthTexture.addEventListener("dispose",v)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),be(i.TEXTURE_CUBE_MAP,S.depthTexture);let Te=r.convert(S.depthTexture.format),We=r.convert(S.depthTexture.type),Se;S.depthTexture.format===Ci?Se=i.DEPTH_COMPONENT24:S.depthTexture.format===Ui&&(Se=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,S.width,S.height,0,Te,We,null)}}else W(S.depthTexture,0);let xe=ie.__webglTexture,ye=me(S),se=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ae=S.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ci)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,se,xe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,ae,se,xe,0);else if(S.depthTexture.format===Ui)de(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,se,xe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,ae,se,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N(O){let S=n.get(O),Z=O.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==O.depthTexture){let j=O.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let ie=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",ie)};j.addEventListener("dispose",ie),S.__depthDisposeCallback=ie}S.__boundDepthTexture=j}if(O.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let j=0;j<6;j++)je(S.__webglFramebuffer[j],O,j);else{let j=O.texture.mipmaps;j&&j.length>0?je(S.__webglFramebuffer[0],O,0):je(S.__webglFramebuffer,O,0)}else if(Z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ht(S.__webglDepthbuffer[j],O,!1);else{let ie=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,xe)}}else{let j=O.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ht(S.__webglDepthbuffer,O,!1);else{let ie=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(O,S,Z){let j=n.get(O);S!==void 0&&He(j.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&N(O)}function H(O){let S=O.texture,Z=n.get(O),j=n.get(S);O.addEventListener("dispose",_);let ie=O.textures,xe=O.isWebGLCubeRenderTarget===!0,ye=ie.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),xe){Z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[se]=[];for(let ae=0;ae<S.mipmaps.length;ae++)Z.__webglFramebuffer[se][ae]=i.createFramebuffer()}else Z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)Z.__webglFramebuffer[se]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ye)for(let se=0,ae=ie.length;se<ae;se++){let Te=n.get(ie[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&de(O)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let se=0;se<ie.length;se++){let ae=ie[se];Z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[se]);let Te=r.convert(ae.format,ae.colorSpace),We=r.convert(ae.type),Se=M(ae.internalFormat,Te,We,ae.normalized,ae.colorSpace,O.isXRRenderTarget===!0),Me=me(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,Se,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,Z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Z.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),be(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)He(Z.__webglFramebuffer[se][ae],O,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ae);else He(Z.__webglFramebuffer[se],O,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,ae=ie.length;se<ae;se++){let Te=ie[se],We=n.get(Te),Se=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,We.__webglTexture),be(Se,Te),He(Z.__webglFramebuffer,O,Te,i.COLOR_ATTACHMENT0+se,Se,0),p(Te)&&y(Se)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(se=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,j.__webglTexture),be(se,S),S.mipmaps&&S.mipmaps.length>0)for(let ae=0;ae<S.mipmaps.length;ae++)He(Z.__webglFramebuffer[ae],O,S,i.COLOR_ATTACHMENT0,se,ae);else He(Z.__webglFramebuffer,O,S,i.COLOR_ATTACHMENT0,se,0);p(S)&&y(se),t.unbindTexture()}O.depthBuffer&&N(O)}function $(O){let S=O.textures;for(let Z=0,j=S.length;Z<j;Z++){let ie=S[Z];if(p(ie)){let xe=b(O),ye=n.get(ie).__webglTexture;t.bindTexture(xe,ye),y(xe),t.unbindTexture()}}}let K=[],ue=[];function he(O){if(O.samples>0){if(de(O)===!1){let S=O.textures,Z=O.width,j=O.height,ie=i.COLOR_BUFFER_BIT,xe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(O),se=S.length>1;if(se)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let ae=O.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let We=n.get(S[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,Z,j,0,0,Z,j,ie,i.NEAREST),c===!0&&(K.length=0,ue.length=0,K.push(i.COLOR_ATTACHMENT0+Te),O.depthBuffer&&O.resolveDepthBuffer===!1&&(K.push(xe),ue.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let We=n.get(S[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){let S=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function me(O){return Math.min(s.maxSamples,O.samples)}function de(O){let S=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function G(O){let S=o.render.frame;h.get(O)!==S&&(h.set(O,S),O.update())}function Xe(O,S){let Z=O.colorSpace,j=O.format,ie=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Z!==_n&&Z!==as&&(ot.getTransfer(Z)===xt?(j!==Sn||ie!==Rn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",Z)),S}function Qe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.getTextureUnits=P,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=D,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=V,this.setupRenderTarget=H,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=N,this.setupFrameBufferTexture=He,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DM(i,e){function t(n,s=as){let r,o=ot.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ku)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bu)return i.BYTE;if(n===zu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===dc)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Ft)return i.HALF_FLOAT;if(n===Gu)return i.ALPHA;if(n===Hu)return i.RGB;if(n===Sn)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===Es)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===_a||n===va||n===ya||n===Ma)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Mc||n===Sc||n===bc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===wc||n===Ec||n===Ac||n===Cc||n===Sa||n===Rc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tc||n===wc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ac)return r.COMPRESSED_R11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return r.COMPRESSED_RG11_EAC;if(n===Rc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Gc||n===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wc||n===Xc||n===qc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Zc||n===ba||n===Kc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Mt({vertexShader:NM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pe(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new xf,p={},y=t.getContextAttributes(),b=null,M=null,E=[],A=[],v=new ce,_=null,T=new Bt;T.viewport=new _t;let w=new Bt;w.viewport=new _t;let C=[T,w],I=new ac,B=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ge=E[ne];return ge===void 0&&(ge=new zr,E[ne]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(ne){let ge=E[ne];return ge===void 0&&(ge=new zr,E[ne]=ge),ge.getGripSpace()},this.getHand=function(ne){let ge=E[ne];return ge===void 0&&(ge=new zr,E[ne]=ge),ge.getHandSpace()};function L(ne){let ge=A.indexOf(ne.inputSource);if(ge===-1)return;let fe=E[ge];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,l||o),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function U(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let ne=0;ne<E.length;ne++){let ge=A[ne];ge!==null&&(A[ne]=null,E[ne].disconnect(ge))}B=null,P=null,m.reset();for(let ne in p)delete p[ne];e.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ne=null,Oe=null;y.depth&&(Oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ui:Ci,Ne=y.stencil?ws:_i);let He={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new kt(d.textureWidth,d.textureHeight,{format:Sn,type:Rn,depthTexture:new pi(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new kt(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(ne){for(let ge=0;ge<ne.removed.length;ge++){let fe=ne.removed[ge],Ne=A.indexOf(fe);Ne>=0&&(A[Ne]=null,E[Ne].disconnect(fe))}for(let ge=0;ge<ne.added.length;ge++){let fe=ne.added[ge],Ne=A.indexOf(fe);if(Ne===-1){for(let He=0;He<E.length;He++)if(He>=A.length){A.push(fe),Ne=He;break}else if(A[He]===null){A[He]=fe,Ne=He;break}if(Ne===-1)break}let Oe=E[Ne];Oe&&Oe.connect(fe)}}let W=new F,D=new F;function k(ne,ge,fe){W.setFromMatrixPosition(ge.matrixWorld),D.setFromMatrixPosition(fe.matrixWorld);let Ne=W.distanceTo(D),Oe=ge.projectionMatrix.elements,He=fe.projectionMatrix.elements,ht=Oe[14]/(Oe[10]-1),je=Oe[14]/(Oe[10]+1),N=(Oe[9]+1)/Oe[5],V=(Oe[9]-1)/Oe[5],H=(Oe[8]-1)/Oe[0],$=(He[8]+1)/He[0],K=ht*H,ue=ht*$,he=Ne/(-H+$),me=he*-H;if(ge.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(me),ne.translateZ(he),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{let de=ht+he,G=je+he,Xe=K-me,Qe=ue+(Ne-me),O=N*je/G*de,S=V*je/G*de;ne.projectionMatrix.makePerspective(Xe,Qe,O,S,de,G),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function q(ne,ge){ge===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ge.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ge=ne.near,fe=ne.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=w.near=T.near=ge,I.far=w.far=T.far=fe,(B!==I.near||P!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,P=I.far),I.layers.mask=ne.layers.mask|6,T.layers.mask=I.layers.mask&-5,w.layers.mask=I.layers.mask&-3;let Ne=ne.parent,Oe=I.cameras;q(I,Ne);for(let He=0;He<Oe.length;He++)q(Oe[He],Ne);Oe.length===2?k(I,T,w):I.projectionMatrix.copy(T.projectionMatrix),J(ne,I,Ne)};function J(ne,ge,fe){fe===null?ne.matrix.copy(ge.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ge.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ge.projectionMatrix),ne.projectionMatrixInverse.copy(ge.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ys*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(ne){return p[ne]};let oe=null;function ve(ne,ge){if(h=ge.getViewerPose(l||o),g=ge,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ne=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,Ne=!0);for(let je=0;je<fe.length;je++){let N=fe[je],V=null;if(f!==null)V=f.getViewport(N);else{let $=u.getViewSubImage(d,N);V=$.viewport,je===0&&(e.setRenderTargetTextures(M,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(M))}let H=C[je];H===void 0&&(H=new Bt,H.layers.enable(je),H.viewport=new _t,C[je]=H),H.matrix.fromArray(N.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(N.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(V.x,V.y,V.width,V.height),je===0&&(I.matrix.copy(H.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ne===!0&&I.cameras.push(H)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let je=u.getDepthInformation(fe[0]);je&&je.isValid&&je.texture&&m.init(je,s.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<fe.length;je++){let N=fe[je].camera;if(N){let V=p[N];V||(V=new Bo,p[N]=V);let H=u.getCameraImage(N);V.sourceTexture=H}}}}for(let fe=0;fe<E.length;fe++){let Ne=A[fe],Oe=E[fe];Ne!==null&&Oe!==void 0&&Oe.update(Ne,ge,l||o)}oe&&oe(ne,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}let be=new Cm;be.setAnimationLoop(ve),this.setAnimationLoop=function(ne){oe=ne},this.dispose=function(){}}},FM=new Ge,Nm=new st;Nm.set(-1,0,0,0,1,0,0,0,1);function OM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,b,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,M=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(FM.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Nm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function BM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,E){let A=E.program;n.uniformBlockBinding(M,A)}function l(M,E){let A=s[M.id];A===void 0&&(m(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",y));let v=E.program;n.updateUBOMapping(M,v);let _=e.render.frame;r[M.id]!==_&&(d(M),r[M.id]=_)}function h(M){let E=u();M.__bindingPointIndex=E;let A=i.createBuffer(),v=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,v,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,A),A}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let E=s[M.id],A=M.uniforms,v=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,T=A.length;_<T;_++){let w=A[_];if(Array.isArray(w))for(let C=0,I=w.length;C<I;C++)f(w[C],_,C,v);else f(w,_,0,v)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,E,A,v){if(x(M,E,A,v)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let w=0;for(let C=0;C<T.length;C++){let I=T[C],B=p(I);g(I,M.__data,w),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(w+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function g(M,E,A){typeof M=="number"||typeof M=="boolean"?E[0]=M:M.isMatrix3?(E[0]=M.elements[0],E[1]=M.elements[1],E[2]=M.elements[2],E[3]=0,E[4]=M.elements[3],E[5]=M.elements[4],E[6]=M.elements[5],E[7]=0,E[8]=M.elements[6],E[9]=M.elements[7],E[10]=M.elements[8],E[11]=0):ArrayBuffer.isView(M)?E.set(new M.constructor(M.buffer,M.byteOffset,E.length)):M.toArray(E,A)}function x(M,E,A,v){let _=M.value,T=E+"_"+A;if(v[T]===void 0)return typeof _=="number"||typeof _=="boolean"?v[T]=_:ArrayBuffer.isView(_)?v[T]=_.slice():v[T]=_.clone(),!0;{let w=v[T];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return v[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(w.equals(_)===!1)return w.copy(_),!0}}return!1}function m(M){let E=M.uniforms,A=0,v=16;for(let T=0,w=E.length;T<w;T++){let C=Array.isArray(E[T])?E[T]:[E[T]];for(let I=0,B=C.length;I<B;I++){let P=C[I],L=Array.isArray(P.value)?P.value:[P.value];for(let U=0,z=L.length;U<z;U++){let W=L[U],D=p(W),k=A%v,q=k%D.boundary,J=k+q;A+=q,J!==0&&v-J<D.storage&&(A+=v-J),P.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=D.storage}}}let _=A%v;return _>0&&(A+=v-_),M.__size=A,M.__cache={},this}function p(M){let E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",M),E}function y(M){let E=M.target;E.removeEventListener("dispose",y);let A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function b(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:b}}var zM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fi=null;function kM(){return Fi===null&&(Fi=new vn(zM,16,16,Es,Ft),Fi.name="DFG_LUT",Fi.minFilter=yt,Fi.magFilter=yt,Fi.wrapS=kn,Fi.wrapT=kn,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}var eo=class{constructor(e={}){let{canvas:t=Jp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([vc,_c,xc]),p=new Set([Rn,_i,Jr,ws,pc,mc]),y=new Uint32Array(4),b=new Int32Array(4),M=new F,E=null,A=null,v=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,C=!1,I=null,B=null,P=null,L=null;this._outputColorSpace=dt;let U=0,z=0,W=null,D=-1,k=null,q=new _t,J=new _t,oe=null,ve=new Le(0),be=0,ne=t.width,ge=t.height,fe=1,Ne=null,Oe=null,He=new _t(0,0,ne,ge),ht=new _t(0,0,ne,ge),je=!1,N=new Ms,V=!1,H=!1,$=new Ge,K=new F,ue=new _t,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},me=!1;function de(){return W===null?fe:1}let G=n;function Xe(R,Y){return t.getContext(R,Y)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",It,!1),t.addEventListener("webglcontextcreationerror",bi,!1),G===null){let Y="webgl2";if(G=Xe(Y,R),G===null)throw Xe(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw et("WebGLRenderer: "+R.message),R}let Qe,O,S,Z,j,ie,xe,ye,se,ae,Te,We,Se,Me,ke,Je,nt,X,we,le,Ae,Ie,pe;function qe(){Qe=new Yv(G),Qe.init(),Ae=new DM(G,Qe),O=new zv(G,Qe,e,Ae),S=new IM(G,Qe),O.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),B=G.createFramebuffer(),P=G.createFramebuffer(),L=G.createFramebuffer(),Z=new Jv(G),j=new xM,ie=new LM(G,Qe,S,j,O,Ae,Z),xe=new qv(w),ye=new e1(G),Ie=new Ov(G,ye),se=new Zv(G,ye,Z,Ie),ae=new jv(G,se,ye,Ie,Z),X=new $v(G,O,ie),ke=new kv(j),Te=new gM(w,xe,Qe,O,Ie,ke),We=new OM(w,j),Se=new vM,Me=new wM(Qe),nt=new Fv(w,xe,S,ae,g,c),Je=new PM(w,ae,O),pe=new BM(G,Z,O,S),we=new Bv(G,Qe,Z),le=new Kv(G,Qe,Z),Z.programs=Te.programs,w.capabilities=O,w.extensions=Qe,w.properties=j,w.renderLists=Se,w.shadowMap=Je,w.state=S,w.info=Z}qe(),x!==Rn&&(T=new ey(x,t.width,t.height,a,s,r));let Be=new _f(w,G);this.xr=Be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let R=Qe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Qe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(R){R!==void 0&&(fe=R,this.setSize(ne,ge,!1))},this.getSize=function(R){return R.set(ne,ge)},this.setSize=function(R,Y,te=!0){if(Be.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=R,ge=Y,t.width=Math.floor(R*fe),t.height=Math.floor(Y*fe),te===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(ne*fe,ge*fe).floor()},this.setDrawingBufferSize=function(R,Y,te){ne=R,ge=Y,fe=te,t.width=Math.floor(R*te),t.height=Math.floor(Y*te),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(x===Rn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(q)},this.getViewport=function(R){return R.copy(He)},this.setViewport=function(R,Y,te,Q){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,Y,te,Q),S.viewport(q.copy(He).multiplyScalar(fe).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Y,te,Q){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Y,te,Q),S.scissor(J.copy(ht).multiplyScalar(fe).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){S.setScissorTest(je=R)},this.setOpaqueSort=function(R){Ne=R},this.setTransparentSort=function(R){Oe=R},this.getClearColor=function(R){return R.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,te=!0){let Q=0;if(R){let ee=!1;if(W!==null){let Re=W.texture.format;ee=m.has(Re)}if(ee){let Re=W.texture.type,Fe=p.has(Re),Ce=nt.getClearColor(),Ve=nt.getClearAlpha(),Ye=Ce.r,rt=Ce.g,ut=Ce.b;Fe?(y[0]=Ye,y[1]=rt,y[2]=ut,y[3]=Ve,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=Ye,b[1]=rt,b[2]=ut,b[3]=Ve,G.clearBufferiv(G.COLOR,0,b))}else Q|=G.COLOR_BUFFER_BIT}Y&&(Q|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",It,!1),t.removeEventListener("webglcontextcreationerror",bi,!1),nt.dispose(),Se.dispose(),Me.dispose(),j.dispose(),xe.dispose(),ae.dispose(),Ie.dispose(),pe.dispose(),Te.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Td),Be.removeEventListener("sessionend",wd),Us.stop()};function Ht(R){R.preventDefault(),Ro("WebGLRenderer: Context Lost."),C=!0}function It(){Ro("WebGLRenderer: Context Restored."),C=!1;let R=Z.autoReset,Y=Je.enabled,te=Je.autoUpdate,Q=Je.needsUpdate,ee=Je.type;qe(),Z.autoReset=R,Je.enabled=Y,Je.autoUpdate=te,Je.needsUpdate=Q,Je.type=ee}function bi(R){et("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ti(R){let Y=R.target;Y.removeEventListener("dispose",Ti),mg(Y)}function mg(R){gg(R),j.remove(R)}function gg(R){let Y=j.get(R).programs;Y!==void 0&&(Y.forEach(function(te){Te.releaseProgram(te)}),R.isShaderMaterial&&Te.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,te,Q,ee,Re){Y===null&&(Y=he);let Fe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Ce=vg(R,Y,te,Q,ee);S.setMaterial(Q,Fe);let Ve=te.index,Ye=1;if(Q.wireframe===!0){if(Ve=se.getWireframeAttribute(te),Ve===void 0)return;Ye=2}let rt=te.drawRange,ut=te.attributes.position,$e=rt.start*Ye,bt=(rt.start+rt.count)*Ye;Re!==null&&($e=Math.max($e,Re.start*Ye),bt=Math.min(bt,(Re.start+Re.count)*Ye)),Ve!==null?($e=Math.max($e,0),bt=Math.min(bt,Ve.count)):ut!=null&&($e=Math.max($e,0),bt=Math.min(bt,ut.count));let qt=bt-$e;if(qt<0||qt===1/0)return;Ie.setup(ee,Q,Ce,te,Ve);let Wt,At=we;if(Ve!==null&&(Wt=ye.get(Ve),At=le,At.setIndex(Wt)),ee.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*de()),At.setMode(G.LINES)):At.setMode(G.TRIANGLES);else if(ee.isLine){let bn=Q.linewidth;bn===void 0&&(bn=1),S.setLineWidth(bn*de()),ee.isLineSegments?At.setMode(G.LINES):ee.isLineLoop?At.setMode(G.LINE_LOOP):At.setMode(G.LINE_STRIP)}else ee.isPoints?At.setMode(G.POINTS):ee.isSprite&&At.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))At.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let bn=ee._multiDrawStarts,Ue=ee._multiDrawCounts,Yn=ee._multiDrawCount,gt=Ve?ye.get(Ve).bytesPerElement:1,ti=j.get(Q).currentProgram.getUniforms();for(let wi=0;wi<Yn;wi++)ti.setValue(G,"_gl_DrawID",wi),At.render(bn[wi]/gt,Ue[wi])}else if(ee.isInstancedMesh)At.renderInstances($e,qt,ee.count);else if(te.isInstancedBufferGeometry){let bn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ue=Math.min(te.instanceCount,bn);At.renderInstances($e,qt,Ue)}else At.render($e,qt)};function bd(R,Y,te){R.transparent===!0&&R.side===An&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,ja(R,Y,te),R.side=Jn,R.needsUpdate=!0,ja(R,Y,te),R.side=An):ja(R,Y,te)}this.compile=function(R,Y,te=null){te===null&&(te=R),A=Me.get(te),A.init(Y),_.push(A),te.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),R!==te&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights();let Q=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Re=ee.material;if(Re)if(Array.isArray(Re))for(let Fe=0;Fe<Re.length;Fe++){let Ce=Re[Fe];bd(Ce,te,ee),Q.add(Ce)}else bd(Re,te,ee),Q.add(Re)}),A=_.pop(),Q},this.compileAsync=function(R,Y,te=null){let Q=this.compile(R,Y,te);return new Promise(ee=>{function Re(){if(Q.forEach(function(Fe){j.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){ee(R);return}setTimeout(Re,10)}Qe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Bh=null;function xg(R){Bh&&Bh(R)}function Td(){Us.stop()}function wd(){Us.start()}let Us=new Cm;Us.setAnimationLoop(xg),typeof self<"u"&&Us.setContext(self),this.setAnimationLoop=function(R){Bh=R,Be.setAnimationLoop(R),R===null?Us.stop():Us.start()},Be.addEventListener("sessionstart",Td),Be.addEventListener("sessionend",wd),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(R,Y);let te=Be.enabled===!0&&Be.isPresenting===!0,Q=T!==null&&(W===null||te)&&T.begin(w,W);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(Y),Y=Be.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,W),A=Me.get(R,_.length),A.init(Y),A.state.textureUnits=ie.getTextureUnits(),_.push(A),$.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),N.setFromProjectionMatrix($,di,Y.reversedDepth),H=this.localClippingEnabled,V=ke.init(this.clippingPlanes,H),E=Se.get(R,v.length),E.init(),v.push(E),Be.enabled===!0&&Be.isPresenting===!0){let Fe=w.xr.getDepthSensingMesh();Fe!==null&&zh(Fe,Y,-1/0,w.sortObjects)}zh(R,Y,0,w.sortObjects),E.finish(),w.sortObjects===!0&&E.sort(Ne,Oe,Y.reversedDepth),me=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,me&&nt.addToRenderList(E,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),V===!0&&ke.beginShadows();let ee=A.state.shadowsArray;if(Je.render(ee,R,Y),V===!0&&ke.endShadows(),(Q&&T.hasRenderPass())===!1){let Fe=E.opaque,Ce=E.transmissive;if(A.setupLights(),Y.isArrayCamera){let Ve=Y.cameras;if(Ce.length>0)for(let Ye=0,rt=Ve.length;Ye<rt;Ye++){let ut=Ve[Ye];Ad(Fe,Ce,R,ut)}me&&nt.render(R);for(let Ye=0,rt=Ve.length;Ye<rt;Ye++){let ut=Ve[Ye];Ed(E,R,ut,ut.viewport)}}else Ce.length>0&&Ad(Fe,Ce,R,Y),me&&nt.render(R),Ed(E,R,Y)}W!==null&&z===0&&(ie.updateMultisampleRenderTarget(W),ie.updateRenderTargetMipmap(W)),Q&&T.end(w),R.isScene===!0&&R.onAfterRender(w,R,Y),Ie.resetDefaultState(),D=-1,k=null,_.pop(),_.length>0?(A=_[_.length-1],ie.setTextureUnits(A.state.textureUnits),V===!0&&ke.setGlobalState(w.clippingPlanes,A.state.camera)):A=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,I!==null&&I.renderEnd()};function zh(R,Y,te,Q){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)A.pushLightProbeGrid(R);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||N.intersectsSprite(R)){Q&&ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4($);let Fe=ae.update(R),Ce=R.material;Ce.visible&&E.push(R,Fe,Ce,te,ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||N.intersectsObject(R))){let Fe=ae.update(R),Ce=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ue.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),ue.copy(Fe.boundingSphere.center)),ue.applyMatrix4(R.matrixWorld).applyMatrix4($)),Array.isArray(Ce)){let Ve=Fe.groups;for(let Ye=0,rt=Ve.length;Ye<rt;Ye++){let ut=Ve[Ye],$e=Ce[ut.materialIndex];$e&&$e.visible&&E.push(R,Fe,$e,te,ue.z,ut)}}else Ce.visible&&E.push(R,Fe,Ce,te,ue.z,null)}}let Re=R.children;for(let Fe=0,Ce=Re.length;Fe<Ce;Fe++)zh(Re[Fe],Y,te,Q)}function Ed(R,Y,te,Q){let{opaque:ee,transmissive:Re,transparent:Fe}=R;A.setupLightsView(te),V===!0&&ke.setGlobalState(w.clippingPlanes,te),Q&&S.viewport(q.copy(Q)),ee.length>0&&$a(ee,Y,te),Re.length>0&&$a(Re,Y,te),Fe.length>0&&$a(Fe,Y,te),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Ad(R,Y,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Q.id]===void 0){let $e=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Q.id]=new kt(1,1,{generateMipmaps:!0,type:$e?Ft:Rn,minFilter:Cn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let Re=A.state.transmissionRenderTarget[Q.id],Fe=Q.viewport||q;Re.setSize(Fe.z*w.transmissionResolutionScale,Fe.w*w.transmissionResolutionScale);let Ce=w.getRenderTarget(),Ve=w.getActiveCubeFace(),Ye=w.getActiveMipmapLevel();w.setRenderTarget(Re),w.getClearColor(ve),be=w.getClearAlpha(),be<1&&w.setClearColor(16777215,.5),w.clear(),me&&nt.render(te);let rt=w.toneMapping;w.toneMapping=xi;let ut=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),A.setupLightsView(Q),V===!0&&ke.setGlobalState(w.clippingPlanes,Q),$a(R,te,Q),ie.updateMultisampleRenderTarget(Re),ie.updateRenderTargetMipmap(Re),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let bt=0,qt=Y.length;bt<qt;bt++){let Wt=Y[bt],{object:At,geometry:bn,material:Ue,group:Yn}=Wt;if(Ue.side===An&&At.layers.test(Q.layers)){let gt=Ue.side;Ue.side=Mn,Ue.needsUpdate=!0,Cd(At,te,Q,bn,Ue,Yn),Ue.side=gt,Ue.needsUpdate=!0,$e=!0}}$e===!0&&(ie.updateMultisampleRenderTarget(Re),ie.updateRenderTargetMipmap(Re))}w.setRenderTarget(Ce,Ve,Ye),w.setClearColor(ve,be),ut!==void 0&&(Q.viewport=ut),w.toneMapping=rt}function $a(R,Y,te){let Q=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,Re=R.length;ee<Re;ee++){let Fe=R[ee],{object:Ce,geometry:Ve,group:Ye}=Fe,rt=Fe.material;rt.allowOverride===!0&&Q!==null&&(rt=Q),Ce.layers.test(te.layers)&&Cd(Ce,Y,te,Ve,rt,Ye)}}function Cd(R,Y,te,Q,ee,Re){R.onBeforeRender(w,Y,te,Q,ee,Re),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(w,Y,te,Q,R,Re),ee.transparent===!0&&ee.side===An&&ee.forceSinglePass===!1?(ee.side=Mn,ee.needsUpdate=!0,w.renderBufferDirect(te,Y,Q,ee,R,Re),ee.side=Jn,ee.needsUpdate=!0,w.renderBufferDirect(te,Y,Q,ee,R,Re),ee.side=An):w.renderBufferDirect(te,Y,Q,ee,R,Re),R.onAfterRender(w,Y,te,Q,ee,Re)}function ja(R,Y,te){Y.isScene!==!0&&(Y=he);let Q=j.get(R),ee=A.state.lights,Re=A.state.shadowsArray,Fe=ee.state.version,Ce=Te.getParameters(R,ee.state,Re,Y,te,A.state.lightProbeGridArray),Ve=Te.getProgramCacheKey(Ce),Ye=Q.programs;Q.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;let rt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;Q.envMap=xe.get(R.envMap||Q.environment,rt),Q.envMapRotation=Q.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ye===void 0&&(R.addEventListener("dispose",Ti),Ye=new Map,Q.programs=Ye);let ut=Ye.get(Ve);if(ut!==void 0){if(Q.currentProgram===ut&&Q.lightsStateVersion===Fe)return Pd(R,Ce),ut}else Ce.uniforms=Te.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,te,Ce),R.onBeforeCompile(Ce,w),ut=Te.acquireProgram(Ce,Ve),Ye.set(Ve,ut),Q.uniforms=Ce.uniforms;let $e=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=ke.uniform),Pd(R,Ce),Q.needsLights=Mg(R),Q.lightsStateVersion=Fe,Q.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.lightProbeGrid=A.state.lightProbeGridArray.length>0,Q.currentProgram=ut,Q.uniformsList=null,ut}function Rd(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=Qr.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Pd(R,Y){let te=j.get(R);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function _g(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;M.setFromMatrixPosition(Y.matrixWorld);for(let te=0,Q=R.length;te<Q;te++){let ee=R[te];if(ee.texture!==null&&ee.boundingBox.containsPoint(M))return ee}return null}function vg(R,Y,te,Q,ee){Y.isScene!==!0&&(Y=he),ie.resetTextureUnits();let Re=Y.fog,Fe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,Ce=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ot.workingColorSpace,Ve=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Ye=xe.get(Q.envMap||Fe,Ve),rt=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ut=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),$e=!!te.morphAttributes.position,bt=!!te.morphAttributes.normal,qt=!!te.morphAttributes.color,Wt=xi;Q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Wt=w.toneMapping);let At=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,bn=At!==void 0?At.length:0,Ue=j.get(Q),Yn=A.state.lights;if(V===!0&&(H===!0||R!==k)){let Lt=R===k&&Q.id===D;ke.setState(Q,R,Lt)}let gt=!1;Q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Yn.state.version||Ue.outputColorSpace!==Ce||ee.isBatchedMesh&&Ue.batching===!1||!ee.isBatchedMesh&&Ue.batching===!0||ee.isBatchedMesh&&Ue.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ue.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ue.instancing===!1||!ee.isInstancedMesh&&Ue.instancing===!0||ee.isSkinnedMesh&&Ue.skinning===!1||!ee.isSkinnedMesh&&Ue.skinning===!0||ee.isInstancedMesh&&Ue.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ue.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ue.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ue.instancingMorph===!1&&ee.morphTexture!==null||Ue.envMap!==Ye||Q.fog===!0&&Ue.fog!==Re||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ke.numPlanes||Ue.numIntersection!==ke.numIntersection)||Ue.vertexAlphas!==rt||Ue.vertexTangents!==ut||Ue.morphTargets!==$e||Ue.morphNormals!==bt||Ue.morphColors!==qt||Ue.toneMapping!==Wt||Ue.morphTargetsCount!==bn||!!Ue.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Ue.__version=Q.version);let ti=Ue.currentProgram;gt===!0&&(ti=ja(Q,Y,ee),I&&Q.isNodeMaterial&&I.onUpdateProgram(Q,ti,Ue));let wi=!1,cs=!1,gr=!1,Ct=ti.getUniforms(),Yt=Ue.uniforms;if(S.useProgram(ti.program)&&(wi=!0,cs=!0,gr=!0),Q.id!==D&&(D=Q.id,cs=!0),Ue.needsLights){let Lt=_g(A.state.lightProbeGridArray,ee);Ue.lightProbeGrid!==Lt&&(Ue.lightProbeGrid=Lt,cs=!0)}if(wi||k!==R){S.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ct.setValue(G,"projectionMatrix",R.projectionMatrix),Ct.setValue(G,"viewMatrix",R.matrixWorldInverse);let us=Ct.map.cameraPosition;us!==void 0&&us.setValue(G,K.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),k!==R&&(k=R,cs=!0,gr=!0)}if(Ue.needsLights&&(Yn.state.directionalShadowMap.length>0&&Ct.setValue(G,"directionalShadowMap",Yn.state.directionalShadowMap,ie),Yn.state.spotShadowMap.length>0&&Ct.setValue(G,"spotShadowMap",Yn.state.spotShadowMap,ie),Yn.state.pointShadowMap.length>0&&Ct.setValue(G,"pointShadowMap",Yn.state.pointShadowMap,ie)),ee.isSkinnedMesh){Ct.setOptional(G,ee,"bindMatrix"),Ct.setOptional(G,ee,"bindMatrixInverse");let Lt=ee.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue(G,"boneTexture",Lt.boneTexture,ie))}ee.isBatchedMesh&&(Ct.setOptional(G,ee,"batchingTexture"),Ct.setValue(G,"batchingTexture",ee._matricesTexture,ie),Ct.setOptional(G,ee,"batchingIdTexture"),Ct.setValue(G,"batchingIdTexture",ee._indirectTexture,ie),Ct.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ct.setValue(G,"batchingColorTexture",ee._colorsTexture,ie));let hs=te.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&X.update(ee,te,ti),(cs||Ue.receiveShadow!==ee.receiveShadow)&&(Ue.receiveShadow=ee.receiveShadow,Ct.setValue(G,"receiveShadow",ee.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(Yt.envMapIntensity.value=Y.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=kM()),cs){if(Ct.setValue(G,"toneMappingExposure",w.toneMappingExposure),Ue.needsLights&&yg(Yt,gr),Re&&Q.fog===!0&&We.refreshFogUniforms(Yt,Re),We.refreshMaterialUniforms(Yt,Q,fe,ge,A.state.transmissionRenderTarget[R.id]),Ue.needsLights&&Ue.lightProbeGrid){let Lt=Ue.lightProbeGrid;Yt.probesSH.value=Lt.texture,Yt.probesMin.value.copy(Lt.boundingBox.min),Yt.probesMax.value.copy(Lt.boundingBox.max),Yt.probesResolution.value.copy(Lt.resolution)}Qr.upload(G,Rd(Ue),Yt,ie)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Qr.upload(G,Rd(Ue),Yt,ie),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ct.setValue(G,"center",ee.center),Ct.setValue(G,"modelViewMatrix",ee.modelViewMatrix),Ct.setValue(G,"normalMatrix",ee.normalMatrix),Ct.setValue(G,"modelMatrix",ee.matrixWorld),Q.uniformsGroups!==void 0){let Lt=Q.uniformsGroups;for(let us=0,xr=Lt.length;us<xr;us++){let Id=Lt[us];pe.update(Id,ti),pe.bind(Id,ti)}}return ti}function yg(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Mg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Y,te){let Q=j.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(R.texture).__webglTexture=Y,j.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){let te=j.get(R);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,te=0){W=R,U=Y,z=te;let Q=null,ee=!1,Re=!1;if(R){let Ce=j.get(R);if(Ce.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(G.FRAMEBUFFER,Ce.__webglFramebuffer),q.copy(R.viewport),J.copy(R.scissor),oe=R.scissorTest,S.viewport(q),S.scissor(J),S.setScissorTest(oe),D=-1;return}else if(Ce.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(Ce.__hasExternalTextures)ie.rebindTextures(R,j.get(R.texture).__webglTexture,j.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let rt=R.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&j.has(rt)&&(R.width!==rt.image.width||R.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}let Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Re=!0);let Ye=j.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ye[Y])?Q=Ye[Y][te]:Q=Ye[Y],ee=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?Q=j.get(R).__webglMultisampledFramebuffer:Array.isArray(Ye)?Q=Ye[te]:Q=Ye,q.copy(R.viewport),J.copy(R.scissor),oe=R.scissorTest}else q.copy(He).multiplyScalar(fe).floor(),J.copy(ht).multiplyScalar(fe).floor(),oe=je;if(te!==0&&(Q=B),S.bindFramebuffer(G.FRAMEBUFFER,Q)&&S.drawBuffers(R,Q),S.viewport(q),S.scissor(J),S.setScissorTest(oe),ee){let Ce=j.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,te)}else if(Re){let Ce=Y;for(let Ve=0;Ve<R.textures.length;Ve++){let Ye=j.get(R.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,Ye.__webglTexture,te,Ce)}}else if(R!==null&&te!==0){let Ce=j.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ce.__webglTexture,te)}D=-1},this.readRenderTargetPixels=function(R,Y,te,Q,ee,Re,Fe,Ce=0){if(!(R&&R.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){S.bindFramebuffer(G.FRAMEBUFFER,Ve);try{let Ye=R.textures[Ce],rt=Ye.format,ut=Ye.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!O.textureFormatReadable(rt)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ut)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-Q&&te>=0&&te<=R.height-ee&&G.readPixels(Y,te,Q,ee,Ae.convert(rt),Ae.convert(ut),Re)}finally{let Ye=W!==null?j.get(W).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(R,Y,te,Q,ee,Re,Fe,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=j.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve)if(Y>=0&&Y<=R.width-Q&&te>=0&&te<=R.height-ee){S.bindFramebuffer(G.FRAMEBUFFER,Ve);let Ye=R.textures[Ce],rt=Ye.format,ut=Ye.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ce),!O.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.bufferData(G.PIXEL_PACK_BUFFER,Re.byteLength,G.STREAM_READ),G.readPixels(Y,te,Q,ee,Ae.convert(rt),Ae.convert(ut),0);let bt=W!==null?j.get(W).__webglFramebuffer:null;S.bindFramebuffer(G.FRAMEBUFFER,bt);let qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await jp(G,qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Re),G.deleteBuffer($e),G.deleteSync(qt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,te=0){let Q=Math.pow(2,-te),ee=Math.floor(R.image.width*Q),Re=Math.floor(R.image.height*Q),Fe=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;ie.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Fe,Ce,ee,Re),S.unbindTexture()},this.copyTextureToTexture=function(R,Y,te=null,Q=null,ee=0,Re=0){let Fe,Ce,Ve,Ye,rt,ut,$e,bt,qt,Wt=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(te!==null)Fe=te.max.x-te.min.x,Ce=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,rt=te.min.y,ut=te.isBox3?te.min.z:0;else{let Yt=Math.pow(2,-ee);Fe=Math.floor(Wt.width*Yt),Ce=Math.floor(Wt.height*Yt),R.isDataArrayTexture?Ve=Wt.depth:R.isData3DTexture?Ve=Math.floor(Wt.depth*Yt):Ve=1,Ye=0,rt=0,ut=0}Q!==null?($e=Q.x,bt=Q.y,qt=Q.z):($e=0,bt=0,qt=0);let At=Ae.convert(Y.format),bn=Ae.convert(Y.type),Ue;Y.isData3DTexture?(ie.setTexture3D(Y,0),Ue=G.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),Ue=G.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),Ue=G.TEXTURE_2D),S.activeTexture(G.TEXTURE0),S.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Y.flipY),S.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),S.pixelStorei(G.UNPACK_ALIGNMENT,Y.unpackAlignment);let Yn=S.getParameter(G.UNPACK_ROW_LENGTH),gt=S.getParameter(G.UNPACK_IMAGE_HEIGHT),ti=S.getParameter(G.UNPACK_SKIP_PIXELS),wi=S.getParameter(G.UNPACK_SKIP_ROWS),cs=S.getParameter(G.UNPACK_SKIP_IMAGES);S.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),S.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),S.pixelStorei(G.UNPACK_SKIP_ROWS,rt),S.pixelStorei(G.UNPACK_SKIP_IMAGES,ut);let gr=R.isDataArrayTexture||R.isData3DTexture,Ct=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){let Yt=j.get(R),hs=j.get(Y),Lt=j.get(Yt.__renderTarget),us=j.get(hs.__renderTarget);S.bindFramebuffer(G.READ_FRAMEBUFFER,Lt.__webglFramebuffer),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let xr=0;xr<Ve;xr++)gr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(R).__webglTexture,ee,ut+xr),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,j.get(Y).__webglTexture,Re,qt+xr)),G.blitFramebuffer(Ye,rt,Fe,Ce,$e,bt,Fe,Ce,G.DEPTH_BUFFER_BIT,G.NEAREST);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||j.has(R)){let Yt=j.get(R),hs=j.get(Y);S.bindFramebuffer(G.READ_FRAMEBUFFER,P),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,L);for(let Lt=0;Lt<Ve;Lt++)gr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.__webglTexture,ee,ut+Lt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Yt.__webglTexture,ee),Ct?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hs.__webglTexture,Re,qt+Lt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hs.__webglTexture,Re),ee!==0?G.blitFramebuffer(Ye,rt,Fe,Ce,$e,bt,Fe,Ce,G.COLOR_BUFFER_BIT,G.NEAREST):Ct?G.copyTexSubImage3D(Ue,Re,$e,bt,qt+Lt,Ye,rt,Fe,Ce):G.copyTexSubImage2D(Ue,Re,$e,bt,Ye,rt,Fe,Ce);S.bindFramebuffer(G.READ_FRAMEBUFFER,null),S.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ct?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Ue,Re,$e,bt,qt,Fe,Ce,Ve,At,bn,Wt.data):Y.isCompressedArrayTexture?G.compressedTexSubImage3D(Ue,Re,$e,bt,qt,Fe,Ce,Ve,At,Wt.data):G.texSubImage3D(Ue,Re,$e,bt,qt,Fe,Ce,Ve,At,bn,Wt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Re,$e,bt,Fe,Ce,At,bn,Wt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Re,$e,bt,Wt.width,Wt.height,At,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Re,$e,bt,Fe,Ce,At,bn,Wt);S.pixelStorei(G.UNPACK_ROW_LENGTH,Yn),S.pixelStorei(G.UNPACK_IMAGE_HEIGHT,gt),S.pixelStorei(G.UNPACK_SKIP_PIXELS,ti),S.pixelStorei(G.UNPACK_SKIP_ROWS,wi),S.pixelStorei(G.UNPACK_SKIP_IMAGES,cs),Re===0&&Y.generateMipmaps&&G.generateMipmap(Ue),S.unbindTexture()},this.initRenderTarget=function(R){j.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),S.unbindTexture()},this.resetState=function(){U=0,z=0,W=null,S.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function Ra(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new vt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Um(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Um(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Um(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Pt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function vf(i,e){if(e===Wu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$r||e===Ta){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===$r)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var De=Math.SQRT2*1.15,Fm=0,yf="flow";function Om(i,e){return i>-25.5&&i<-10.5&&e>-20&&e<-6||i>-21.5&&i<-12.5&&e>15&&e<25}var Ln=2.1/De,vi=2.4/De;var sh=["\u77E5\u884C\u697C","\u542F\u667A\u697C","\u660E\u5FB7\u697C","\u535A\u96C5\u697C","\u6C42\u771F\u697C","\u81F4\u8FDC\u697C","\u5411\u9633\u697C","\u661F\u6CB3\u697C"].map((i,e)=>({name:i,x:99+e%2*56,z:-65+Math.floor(e/2)*19})),Pa=sh.flatMap((i,e)=>Array.from({length:4},(t,n)=>Array.from({length:6},(s,r)=>({id:`${e+1}-${n+1}-${r+1}`,building:e,floor:n,room:r,x:i.x-20+r*8,y:n*3.6,z:i.z,name:`${i.name} \xB7 ${n+1}\u5C42 \xB7 ${n+1}0${r+1}\u6559\u5BA4`,students:30,teachers:1}))).flat()),Bm=Array.from({length:30},(i,e)=>({x:(e%5-2)*1.25,z:-1.9+Math.floor(e/5)*1.03}));function zm(i,e,t){return Pa.find(n=>n.building===i&&n.floor===e&&n.room===t)}function km(i){let e=new Ze;e.name="\u5411\u9633\u5C0F\u5B66",i.add(e);let t=new Vt(1,1,1),n=new on(1,8,6),s=new Dt,r=Object.fromEntries(Object.entries({wall:15656659,wood:12160089,green:4287831,blue:6327982,skin:15315854,hair:3422261,white:16775135,track:11232338,dark:4347488}).map(([w,C])=>[w,new tt({color:C,roughness:.88})]));function o(w,C,I,B,P,L,U,z){let W=new Pe(t,r[C]);return W.position.set(I,B,P),W.scale.set(L,U,z),w.add(W),W}function a(w,C,I,B,P,L=6,U=.7,z="#e9e1ca",W="#284a40"){let D=document.createElement("canvas");D.width=1024,D.height=256;let k=D.getContext("2d");k.fillStyle=z,k.fillRect(0,0,D.width,D.height),k.fillStyle=W,k.font="bold 68px sans-serif",k.textAlign="center",k.textBaseline="middle",C.split(`
`).forEach((oe,ve,be)=>k.fillText(oe,512,128+(ve-(be.length-1)/2)*85,990));let q=new yn(D);q.colorSpace=dt;let J=new Pe(new Qn(L,U),new Xt({map:q}));return J.position.set(I,B,P),w.add(J),J}o(e,"green",128,-.24,-1,116,.3,152),o(e,"wall",128,-.06,-1,110,.12,148),o(e,"wood",74,-.02,23,10,.1,4),o(e,"wood",128,.02,7,108,.1,3),o(e,"track",128,.04,42,94,.12,58);let c=new Ze;e.add(c);for(let w=0;w<6;w++){let C=[],I=44-w*1.2,B=26-w*1.2;for(let P=0;P<=120;P++){let L=P/120*Math.PI*2;C.push(new F(128+I*Math.cos(L),.12,42+B*Math.sin(L)))}c.add(new es(new vt().setFromPoints(C),new Ii({color:16772558})))}o(e,"green",128,.13,42,59,.12,30);for(let w of[27,57])o(e,"white",128,.21,w,58,.03,.12);for(let w of[99,157,128])o(e,"white",w,.21,42,.12,.03,30);for(let w of[99,157])o(e,"white",w,1.3,38.8,.15,2.6,.15),o(e,"white",w,1.3,45.2,.15,2.6,.15),o(e,"white",w,2.6,42,.15,.15,6.5);o(e,"wood",88,1.7,8,.5,3.4,.5),o(e,"wood",108,1.7,8,.5,3.4,.5),a(e,"\u5411\u9633\u5C0F\u5B66",98,3.4,8,18,1.5),a(e,"\u5927\u64CD\u573A \xB7 \u5FEB\u4E50\u8FD0\u52A8",128,1,72,17,1.2);let l=sh.map((w,C)=>{let I=new Ze;I.position.set(w.x,0,w.z),e.add(I);for(let P=0;P<4;P++){o(I,"wall",0,P*3.6-.08,0,48,.16,12),o(I,"wall",0,P*3.6+1.7,-5.1,48,3.4,.2),o(I,"blue",0,P*3.6+1.55,5.12,48,1.4,.1),o(I,"wood",0,P*3.6+.45,5.2,48,.8,.22);for(let L=0;L<=6;L++)o(I,"wall",-24+L*8,P*3.6+1.7,0,.18,3.4,10.4)}o(I,"dark",0,14.4,0,49,.3,12.5);let B=new Map;for(let P of[...I.children]){P.updateMatrix();let L=P.geometry.clone().applyMatrix4(P.matrix);B.has(P.material)||B.set(P.material,[]),B.get(P.material).push(L),I.remove(P)}for(let[P,L]of B)I.add(new Pe(Ra(L),P)),L.forEach(U=>U.dispose());return a(I,w.name,0,15.1,5.6,9,1.1),I}),h=Pa.map(w=>{let C=new Ze;C.name=w.name,C.userData={...w},C.position.set(w.x,w.y,w.z),C.visible=!1,e.add(C);let I=new Map,B=(L,U,z,W,D,k,q,J=!1)=>{let oe=L+(J?"Round":"");I.has(oe)||I.set(oe,{key:L,round:J,items:[]}),I.get(oe).items.push([U,z,W,D,k,q])};B("wall",0,-.08,0,8,.16,10),B("wall",-4,1.7,0,.16,3.4,10),B("wall",4,1.7,0,.16,3.4,10),B("wall",0,1.7,-5,8,3.4,.16),B("green",0,2,-4.85,5.8,1.6,.1),B("wood",0,.8,-3.7,1.7,.12,.65);let P=(L,U,z=!1)=>{let W=z?.43:0;B("blue",L,.97+W,U,.43,.58,.26),B("skin",L,1.43+W,U,.19,.22,.18,!0),B("hair",L,1.57+W,U,.2,.09,.19,!0);for(let D of[-1,1])B("dark",L+D*.12,.35+W*.4,U,.14,.64,.16),B("dark",L+D*.12,.08,U-.12,.17,.12,.34),B("skin",L+D*.26,.99+W,U-.22,.12,.12,.46)};for(let L of Bm){let U=L.x,z=L.z;B("wood",U,.8,z-.45,.96,.1,.6);for(let W of[-1,1])B("dark",U+W*.36,.39,z-.45,.07,.78,.45);B("white",U,.862,z-.45,.55,.025,.34),B("blue",U,.88,z-.45,.012,.009,.3),B("wood",U,.54,z,.53,.09,.5),B("wood",U,.84,z+.2,.53,.6,.06),P(U,z)}P(-2.4,-3.7,!0);for(let{key:L,round:U,items:z}of I.values()){let W=new ri(U?n:t,r[L],z.length);z.forEach(([D,k,q,J,oe,ve],be)=>{s.position.set(D,k,q),s.scale.set(J,oe,ve),s.rotation.set(0,0,0),s.updateMatrix(),W.setMatrixAt(be,s.matrix)}),W.computeBoundingSphere(),L==="skin"&&!U&&(C.userData.writing=W,C.userData.handTransforms=z),C.add(W)}return C}),u=a(e,`\u6570\u5B66 \xB7 \u4E58\u6CD5\u7684\u610F\u4E49
6 \xD7 5 = 30   \u8BA4\u771F\u601D\u8003`,0,0,0,5.5,1.3,"#254d40","#fff3c7");u.visible=!1;let d=o(e,"wood",0,0,0,.035,.035,.9);d.visible=!1;let f=document.createElement("section");f.id="schoolPanel",f.hidden=!0,f.innerHTML=`<div class="school-heading"><b>\u5411\u9633\u5C0F\u5B66</b><button id="schoolExit">\u8FD4\u56DE\u539F\u573A\u666F</button></div><p>8 \u680B\u6559\u5B66\u697C \xB7 \u6BCF\u680B 4 \u5C42 \xB7 \u6BCF\u5C42 6 \u95F4\u6559\u5BA4</p><div class="school-selectors"><label>\u6559\u5B66\u697C<select id="schoolBuilding">${sh.map((w,C)=>`<option value="${C}">${w.name}</option>`).join("")}</select></label><label>\u697C\u5C42<select id="schoolFloor">${[1,2,3,4].map(w=>`<option value="${w-1}">${w} \u5C42</option>`).join("")}</select></label><label>\u6559\u5BA4<select id="schoolRoom">${[1,2,3,4,5,6].map(w=>`<option value="${w-1}">${w} \u73ED</option>`).join("")}</select></label></div><div class="school-actions"><button id="schoolEnter">\u8FDB\u5165\u6559\u5BA4</button><button id="schoolOverview">\u6821\u56ED\u5168\u666F</button><button id="schoolBoard">\u8D70\u8FD1\u9ED1\u677F</button><button id="schoolBack">\u6559\u5BA4\u540E\u6392</button></div><p id="schoolStatus" role="status">\u516C\u53F8\u4E1C\u4FA7 \xB7 \u5927\u64CD\u573A\u4E0E\u516B\u680B\u6559\u5B66\u697C</p><small>\u62D6\u52A8\u73AF\u987E \xB7 \u9009\u62E9\u697C\u5C42\u4E0E\u6559\u5BA4\u540E\u70B9\u51FB\u8FDB\u5165 \xB7 Esc \u8FD4\u56DE</small>`,document.body.append(f);let g,x,m=!1,p=null,y=0,b=0,M=null,E=()=>{};function A(){p=null,y=b=0,h.forEach(w=>w.visible=!1),l.forEach(w=>w.visible=!0),u.visible=d.visible=!1,document.getElementById("schoolStatus").textContent="\u516C\u53F8\u4E1C\u4FA7 \xB7 \u5927\u64CD\u573A\u4E0E\u516B\u680B\u6559\u5B66\u697C"}let v=!1;function _(){let w=C=>Number(document.getElementById(C).value);p=zm(w("schoolBuilding"),w("schoolFloor"),w("schoolRoom")),y=b=0,v=!1,h.forEach(C=>C.visible=C.userData.id===p.id),l.forEach((C,I)=>C.visible=I!==p.building),u.visible=d.visible=!0,u.position.set(p.x,p.y+2,p.z-4.78),document.getElementById("schoolStatus").textContent=`${p.name} \xB7 1 \u540D\u8001\u5E08\u6388\u8BFE \xB7 30 \u540D\u5B66\u751F\u8BFB\u5199\u5B66\u4E60`}document.getElementById("schoolEnter").onclick=_,document.getElementById("schoolOverview").onclick=A,document.getElementById("schoolBoard").onclick=()=>{p||_(),v=!0,y=b=0},document.getElementById("schoolBack").onclick=()=>{p||_(),v=!1,y=b=0};function T(){m=!1,i.background=g,i.fog=x,f.hidden=!0,document.body.classList.remove("school-tour"),A(),E()}return document.getElementById("schoolExit").onclick=T,addEventListener("keydown",w=>{m&&w.code==="Escape"&&T()}),{root:e,interiors:h,shells:l,get active(){return m},open(w){g=i.background,x=i.fog,i.background=new Le(12177878),i.fog=null,m=!0,E=w,f.hidden=!1,document.body.classList.add("school-tour"),A()},close:T,bind(w){w.addEventListener("pointerdown",C=>{m&&(M={id:C.pointerId,x:C.clientX,y:C.clientY})}),w.addEventListener("pointermove",C=>{!m||!M||M.id!==C.pointerId||(y=en.clamp(y+(C.clientX-M.x)*.004,-1.1,1.1),b=en.clamp(b+(C.clientY-M.y)*.003,-.45,.45),M={id:C.pointerId,x:C.clientX,y:C.clientY})});for(let C of["pointerup","pointercancel","lostpointercapture"])w.addEventListener(C,()=>M=null)},update(w,C){if(m)if(p){let I=p,B=w.aspect<1;w.position.set(I.x*De,I.y+(v?2.1:4.7),(I.z+(v?B?3.8:-.1:B?12:9))*De),w.lookAt(I.x*De+Math.sin(y)*9,I.y+(v?1.95:1)+b*5,(I.z-2)*De);let P=h.find(U=>U.visible),L=P.userData.writing;P.userData.handTransforms.forEach(([U,z,W,D,k,q],J)=>{s.position.set(U,z+Math.sin(C*3+J)*.018,W+Math.sin(C*3+J)*.025),s.scale.set(D,k,q),s.rotation.set(0,0,0),s.updateMatrix(),L.setMatrixAt(J,s.matrix)}),L.instanceMatrix.needsUpdate=!0,d.position.set(I.x-2.15,I.y+1.65,I.z-4),d.rotation.x=Math.sin(C*1.8)*.15}else{let I=Math.max(1,1.35/w.aspect);w.position.set((128+Math.sin(y)*140*I)*De,(120+b*70)*I,(140*Math.cos(y)*I+5)*De),w.lookAt(128*De,0,-7*De)}},stats(){return{buildings:8,floors:32,rooms:h.length,students:Pa.length*30,teachers:Pa.length,visibleRooms:h.filter(w=>w.visible).length,current:p?.id,instancedMeshes:h.reduce((w,C)=>w+C.children.filter(I=>I.isInstancedMesh).length,0)}}}}var Mf=new Map,Sf=i=>(Mf.has(i)||Mf.set(i,new tt({color:i,roughness:.78})),Mf.get(i));function Nt(i,e,t,n,s,r,o,a){let c=new Pe(new on(1,12,8),Sf(a));return c.position.set(e,t,n),c.scale.set(s,r,o),c.castShadow=!0,i.add(c),c}function cr(i,e,t,n,s,r,o){let a=new Ze;a.position.set(e,t,n),i.add(a);let c=new Pe(new zo(s,r,4,8),Sf(o));return c.position.y=-r/2,c.castShadow=!0,a.add(c),a}function Bi({shirt:i=12694426,pants:e=3819336,hair:t=3418917,scale:n=1,female:s=!1}={}){let r=new Ze;r.scale.setScalar(n);let o=13211251;Nt(r,0,1.19,0,.29,.39,.18,i),Nt(r,0,1.66,0,.19,.23,.19,o),Nt(r,0,1.8,-.025,.193,.12,.19,t),s&&Nt(r,0,1.63,-.11,.21,.25,.12,t),Nt(r,-.073,1.68,.169,.022,.017,.015,3156259),Nt(r,.073,1.68,.169,.022,.017,.015,3156259),Nt(r,0,1.62,.193,.03,.04,.04,o);for(let l of[-1,1])Nt(r,l*.184,1.66,0,.035,.055,.025,o),Nt(r,l*.073,1.686,.165,.036,.025,.017,15130322),Nt(r,l*.073,1.686,.181,.014,.016,.009,4470830),Nt(r,l*.074,1.733,.163,.039,.009,.013,t);Nt(r,0,1.566,.171,.05,.009,.008,10248530);let a=[cr(r,-.34,1.4,0,.085,.46,i),cr(r,.34,1.4,0,.085,.46,i)];a.forEach(l=>Nt(l,0,-.53,0,.067,.085,.065,o));let c=[cr(r,-.14,.84,0,.099,.35,e),cr(r,.14,.84,0,.099,.35,e)];return c.forEach(l=>{l.lower=cr(l,0,-.35,0,.085,.35,e),Nt(l.lower,0,-.4,.06,.105,.075,.175,3879984)}),{g:r,arms:a,legs:c,animate(l,h=!1,u=""){c.forEach((d,f)=>{d.rotation.x=h?Math.sin(l*9+f*Math.PI)*.65:u==="sit"?-Math.PI/2:0,d.lower.rotation.x=u==="sit"?Math.PI/2:h?Math.max(0,-Math.sin(l*9+f*Math.PI))*.6:0}),a.forEach((d,f)=>{d.rotation.x=h?-Math.sin(l*8+f*Math.PI)*.45:u==="read"?-1.15:u==="garden"?-.75+Math.sin(l*3)*.2:u==="cook"?-.7+Math.sin(l*3+f)*.2:0}),r.children[0].rotation.z=h?Math.sin(l*8)*.025:0}}}function bf(i=12423257){let e=new Ze;Nt(e,0,.47,0,.2,.23,.42,i),Nt(e,0,.65,.37,.22,.23,.23,i),Nt(e,0,.56,.57,.12,.09,.15,13350298),Nt(e,0,.59,.69,.07,.05,.045,2434853);for(let s of[-1,1])Nt(e,s*.17,.61,.38,.09,.22,.13,i),Nt(e,s*.09,.72,.55,.024,.024,.025,2238503);let t=[];for(let s of[-.14,.14])for(let r of[-.26,.25])t.push(cr(e,s,.36,r,.055,.23,i));let n=cr(e,0,.55,-.38,.055,.32,i);return n.rotation.x=1.6,{g:e,animate(s){t.forEach((r,o)=>r.rotation.x=Math.sin(s*9+o*Math.PI)*.5),n.rotation.z=Math.sin(s*12)*.7}}}function Vm(i){let e=new Ze;Nt(e,0,0,0,.12,.075,.35,i),Nt(e,0,0,.22,.1,.07,.12,15655626);let t=new Pe(new mi(.14,.24,3),Sf(i));return t.rotation.x=Math.PI/2,t.position.z=-.38,e.add(t),e}function Tf(){let i=new Ze;Nt(i,0,.08,0,.28,.14,.36,4875584),Nt(i,0,.09,.38,.1,.09,.15,7898443);for(let e of[-.24,.24])for(let t of[-.23,.23])Nt(i,e,.02,t,.13,.035,.09,7767119);for(let e of[-.16,0,.16])Nt(i,0,.192,e,.13,.014,.1,6911053);return i}var it={x:-17.7,z:-11.7,x1:-18.35,x2:-17.05,z1:-12.4,z2:-11,exitX:-16.6},Cs=[{y:-3.6,name:"\u5730\u4E0B\u4E00\u5C42"},{y:0,name:"\u4E00\u697C"},{y:3.6,name:"\u4E8C\u697C"},{y:7.2,name:"\u5929\u53F0"}];function wf(i,e,t=0){return i>it.x1-t&&i<it.x2+t&&e>it.z1-t&&e<it.z2+t}function Gm(i,e,t,n){let s=i-t/2,r=i+t/2,o=e-n/2,a=e+n/2;if(r<=it.x1||s>=it.x2||a<=it.z1||o>=it.z2)return[{x:i,z:e,w:t,d:n}];let c=Math.max(s,it.x1),l=Math.min(r,it.x2),h=Math.max(o,it.z1),u=Math.min(a,it.z2),d=[];for(let[f,g,x,m]of[[s,c,o,a],[l,r,o,a],[c,l,o,h],[c,l,u,a]])g-f>.001&&m-x>.001&&d.push({x:(f+g)/2,z:(x+m)/2,w:g-f,d:m-x});return d}var no=class{constructor(e=Cs){this.floors=e,this.y=0,this.phase="idle",this.door=1,this.target=0,this.origin=0,this.passenger=!1,this.boarding=0,this.exiting=0}request(e,t){return this.phase!=="idle"||!this.floors.some(n=>n.y===e)||!this.floors.some(n=>n.y===t)||e===t?!1:(this.origin=e,this.target=t,this.boarding=this.exiting=0,this.phase=Math.abs(this.y-e)<.001?this.door===1?"board":"pickupOpen":"recallClose",this.passenger=this.phase==="board",!0)}update(e){e=Math.min(.1,Math.max(0,e));let t=(n,s,r)=>n+Math.sign(s-n)*Math.min(Math.abs(s-n),r);if(this.phase==="recallClose"||this.phase==="close")this.door=t(this.door,0,e*2),this.door||(this.phase=this.phase==="close"?"travel":"recall");else if(this.phase==="recall"||this.phase==="travel"){let n=this.phase==="recall"?this.origin:this.target;this.y=t(this.y,n,e*1.8),this.y===n&&(this.phase=this.phase==="recall"?"pickupOpen":"open")}else if(this.phase==="pickupOpen")this.door=t(this.door,1,e*2),this.door===1&&(this.passenger=!0,this.phase="board");else if(this.phase==="board")this.passenger=!0,this.boarding=Math.min(1,this.boarding+e/.65),this.boarding===1&&(this.phase="close");else if(this.phase==="open")this.door=t(this.door,1,e*2),this.door===1&&(this.phase="exit");else if(this.phase==="exit"&&(this.exiting=Math.min(1,this.exiting+e/.65),this.exiting===1))return this.phase="idle",this.passenger=!1,"arrived";return null}};function Hm(i,e,t){for(let n of[.55,.85,1.15])for(let s of[Math.PI/2,-Math.PI/2,Math.PI,0]){let r={x:i.x+Math.sin(e+s)*n,y:i.y,z:i.z+Math.cos(e+s)*n};if(t(r.x,r.z,r.y))return r}return null}var rh=class{constructor(e){this.members=e,this.index=0,this.visited=new Set([0])}switchTo(e,t){return!Number.isInteger(e)||!this.members[e]?null:(this.members[this.index].position={...t},this.index=e,this.visited.add(e),{...this.members[e].position})}};var Ef={x1:46,x2:70,z1:4,z2:26,height:3.6,roof:18},gn=Array.from({length:6},(i,e)=>({y:e*Ef.height,name:e===5?"\u516C\u53F8\u5C4B\u9876\u5929\u53F0":`\u516C\u53F8${["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94"][e]}\u697C`})),tn={x:65,z:7,exitX:65,exitZ:9.4,x1:64,x2:66,z1:6,z2:8},oh=Array.from({length:5},(i,e)=>({x1:e%2===0?68:66,x2:e%2===0?69.4:67.4,z1:10,z2:22,base:e*Ef.height,height:Ef.height,reverse:e%2===0}));function io(i,e){return i>46&&i<70&&e>4&&e<26}function Af(i,e){return i>34&&i<73&&e>2&&e<35||i>=0&&i<=43&&e>31&&e<33}function VM(i,e){return i>63.85&&i<66.15&&e>5.85&&e<8.15}function Wm(i,e,t){if(!io(i,e))return Math.abs(t)<.1?0:NaN;if(VM(i,e))return NaN;let n=oh.filter(r=>i>=r.x1&&i<=r.x2&&e>=r.z1&&e<=r.z2).map(r=>r.base+(r.reverse?e-r.z1:r.z2-e)/(r.z2-r.z1)*r.height);return n.length?n.find(o=>Math.abs(o-t)<.25)??NaN:gn.find(r=>Math.abs(r.y-t)<.12)?.y??NaN}function ah(){let i=[{x1:46,x2:70,z1:4,z2:26}];for(let e of[tn,...oh.slice(0,2)])i=i.flatMap(t=>{let n=Math.max(t.x1,e.x1),s=Math.min(t.x2,e.x2),r=Math.max(t.z1,e.z1),o=Math.min(t.z2,e.z2);return n>=s||r>=o?[t]:[{x1:t.x1,x2:n,z1:t.z1,z2:t.z2},{x1:s,x2:t.x2,z1:t.z1,z2:t.z2},{x1:n,x2:s,z1:t.z1,z2:r},{x1:n,x2:s,z1:o,z2:t.z2}].filter(a=>a.x2>a.x1&&a.z2>a.z1)});return i}var lh=gn.slice(0,5).flatMap((i,e)=>[50,55,60].flatMap(t=>[12,21].map(n=>({x:t,z:n,y:i.y,floor:e}))));function Xm(i,e){let t=new Ze;i.add(t);let n=new no(gn),s=new Ze;s.position.set(tn.x,0,tn.z),t.add(s);let r=new tt({color:7506306,metalness:.45,roughness:.35}),o=(l,h,u,d,f,g,x=t)=>{let m=new Pe(new Vt(d,f,g),r);return m.position.set(l,h,u),x.add(m),m};o(0,-.07,0,1.9,.14,1.9,s),o(0,2.6,0,1.9,.1,1.9,s),o(0,1.25,-.96,1.9,2.5,.08,s);let a=gn.map(l=>({y:l.y,pair:[-1,1].map(h=>o(tn.x+h*.48,l.y+1.25,8,.96,2.5,.06))}));for(let l of e){let h=document.createElement("canvas");h.width=1024,h.height=128;let u=h.getContext("2d");u.fillStyle="#e8e5d9",u.fillRect(0,0,1024,128),u.fillStyle="#304d43",u.font="bold 58px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(l.text,512,64,970);let d=new yn(h);d.colorSpace=dt;let f=new Pe(new Qn(l.w,l.h),new Xt({map:d,side:An}));f.position.set(l.x,l.y,l.z),f.rotation.y=l.rotation||0,t.add(f)}let c=[];for(let l of gn.slice(0,5)){for(let u of lh.filter(d=>d.y===l.y&&d.z===12)){let d=Bi({shirt:[8232623,11705481,8492670][c.length%3],female:c.length%2===0});d.g.scale.set(1/De,1,1/De),d.g.position.set(u.x,l.y-.32,u.z-.94),t.add(d.g),c.push({actor:d,floor:l.y,desk:u})}let h=Bi({shirt:12167297});h.g.scale.set(1/De,1,1/De),t.add(h.g),c.push({actor:h,floor:l.y})}return{lift:n,root:t,staff:c,near(l){return gn.some(h=>Math.abs(h.y-l.y)<.1)&&Math.hypot(l.x-tn.exitX,l.z-tn.exitZ)<1.6},update(l,h,u){let d=n.update(l);s.position.y=n.y;for(let f of a)for(let g=0;g<2;g++)f.pair[g].position.x=tn.x+(g?1:-1)*(.48+(Math.abs(n.y-f.y)<.01?n.door*.98:0));for(let f of c)if(f.actor.g.visible=u.x>33&&Math.abs(u.y-f.floor)<2.1,!!f.actor.g.visible)if(f.desk)f.actor.animate(h,!1,"sit"),f.actor.arms.forEach((g,x)=>{g.rotation.x=-.85+Math.sin(h*5+x*2)*.045});else{let g=h*.22+f.floor,x=56+Math.sin(g)*6,m=16.5+Math.cos(g)*.8;f.actor.g.position.set(x,f.floor,m),f.actor.g.rotation.y=Math.atan2(Math.cos(g)*6,-Math.sin(g)*.8),f.actor.animate(h,!0)}return d}}}function qm(){let i=new Ze,e=[],t=new tt({color:8625795,metalness:.45,roughness:.35}),n=new tt({color:6845557,metalness:.7,roughness:.3}),s=new tt({color:2436139}),r=(a,c,l,h=t)=>{let u=new F(...a),d=new F(...c).sub(u),f=new Pe(new En(l,l,d.length(),10),h);f.position.copy(u).addScaledVector(d,.5),f.quaternion.setFromUnitVectors(new F(0,1,0),d.normalize()),i.add(f)};for(let a of[-.67,.67]){let c=new Ze;c.position.set(0,.35,a);let l=new Pe(new Li(.33,.045,8,24),s);l.rotation.y=Math.PI/2,c.add(l);for(let h=0;h<12;h++){let u=h*Math.PI/6,d=new Pe(new En(.006,.006,.64,5),n);d.rotation.x=u,c.add(d)}i.add(c),e.push(c)}for(let[a,c]of[[[0,.35,-.67],[0,.86,-.2]],[[0,.86,-.2],[0,.4,0]],[[0,.4,0],[0,.35,-.67]],[[0,.86,-.2],[0,.94,.48]],[[0,.94,.48],[0,.4,0]],[[0,.94,.48],[0,.35,.67]],[[0,.94,.48],[0,1.14,.45]],[[-.28,1.14,.45],[.28,1.14,.45]]])r(a,c,.025);let o=new Pe(new Vt(.23,.07,.3),s);return o.position.set(0,.92,-.2),i.add(o),r([-.2,.4,0],[.2,.4,0],.02,n),i.scale.set(1/De,1,1/De),i.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),{root:i,wheels:e}}function Ym(){let i=new Ze,e=new Ze;i.add(e),e.position.set(it.x,0,it.z);let t=new tt({color:6649202,metalness:.6,roughness:.3}),n=new tt({color:5857639,transparent:!0,opacity:.28,depthWrite:!1}),s=new Xt({color:16770228});function r(a,c,l,h,u,d,f,g=i){let x=new Pe(new Vt(h,u,d),f);return x.position.set(a,c,l),g.add(x),x}for(let a of[it.x1,it.x2])for(let c of[it.z1,it.z2])r(a,2.85,c,.045,13,.045,t);r(it.x1,2.85,it.z,.025,13,1.4,n);for(let a of[it.z1,it.z2])r(it.x,2.85,a,1.3,13,.025,n);r(0,-.07,0,1.25,.14,1.35,t,e),r(0,2.45,0,1.25,.08,1.35,t,e),r(0,2.39,0,.8,.025,.8,s,e);let o=Cs.map(a=>{let c=[-1,1].map(l=>r(it.x2,a.y+1.16,it.z+l*.32,.055,2.32,.64,t));return r(it.x2+.02,a.y+1.3,it.z1-.12,.035,.2,.1,s),{y:a.y,pair:c}});return{root:i,update(a){e.position.y=a.y;for(let c of o)for(let l=0;l<2;l++)c.pair[l].position.z=it.z+(l?1:-1)*(.32+(Math.abs(a.y-c.y)<.01?a.door*.65:0))}}}function Zm(){let i=(n,s)=>{let r=document.createElement("canvas");r.width=1024,r.height=512,s(r.getContext("2d"));let o=new yn(r);return o.colorSpace=dt,o.anisotropy=4,new tt({name:n,map:o,roughness:.85})},e=i("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",n=>{n.fillStyle="#f6f1e7",n.fillRect(0,0,1024,512),n.strokeStyle="#b8b6a466",n.lineWidth=1.2;for(let s=-512;s<1536;s+=110)n.beginPath(),n.moveTo(s,0),n.lineTo(s+320,512),n.stroke(),n.beginPath(),n.moveTo(s,0),n.lineTo(s-320,512),n.stroke();for(let s=0;s<1024;s+=5)n.fillStyle="#978b7520",n.fillRect(s,0,1,512)}),t=Array.from({length:3},(n,s)=>i("\u8D70\u5ECA\u6444\u5F71"+s,r=>{r.fillStyle="#e2e0d7",r.fillRect(0,0,1024,512),r.fillStyle="#a6a6a0",r.fillRect(0,350,1024,162);for(let o=0;o<9;o++){let a=70+o*110,c=80+(o*71+s*89)%250;r.fillStyle=["#404644","#707774","#919792"][(o+s)%3],r.fillRect(a,350-c,80,c),r.fillStyle="#d1d3ca";for(let l=370-c;l<340;l+=24)for(let h=a+10;h<a+75;h+=20)r.fillRect(h,l,8,12)}r.strokeStyle="#f6f4e8",r.lineWidth=10,r.strokeRect(20,20,984,472)}));return{\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8:e,...Object.fromEntries(t.map(n=>[n.name,n]))}}function Km({box:i,cyl:e,ell:t,branch:n,mat:s,wood:r,oak:o,dark:a,glass:c,linen:l,lightmat:h,plaster:u,seats:d,obstacle:f,plant:g}){let x=s("\u8D70\u5ECA\u51E0\u4F55\u5899\u7EB8",16183783),m=s("\u8D70\u5ECA\u70DF\u718F\u6728",5653297),p=s("\u8D70\u5ECA\u6696\u767D\u9876",16315628);i(-1,3.618,-6,20,.03,3.8,m),i(9.75,3.618,-5,1.5,.03,1.8,m),i(10.75,3.618,-6,.5,.03,3.8,m);for(let v=-10.8;v<8.9;v+=.45)i(v,3.636,-6,.012,.006,3.8,r);i(-2,6.955,-6,18,.035,3.8,p),i(-2,6.925,-7.75,17.8,.018,.035,h);for(let[v,_,T]of[[-11,-3,-7],[-3,3,0]]){for(let[w,C]of[[v,T-Ln/2],[T+Ln/2,_]])i((w+C)/2,5.25,-7.902,C-w,3.2,.028,x),i((w+C)/2,3.73,-7.866,C-w,.16,.045,a);i(T,6.4,-7.902,Ln,1.2,.028,x)}for(let v=0;v<2;v++)for(let _=0;_<3;_++){let T=.95+_*.62,w=5.95-v*.82;i(T,w,-7.85,.53,.69,.05,a),i(T,w,-7.812,.46,.61,.016,s("\u8D70\u5ECA\u6444\u5F71"+(v+_)%3,10198934))}i(-4.5,5.25,-7.81,1.15,1.4,.12,o);for(let v of[-5.1,-3.9])i(v,5.25,-7.68,.07,1.5,.35,r);for(let v of[4.5,6])i(-4.5,v,-7.68,1.25,.07,.35,r);i(-4.5,5.94,-7.62,1.05,.02,.05,h),e(-4.5,4.68,-7.6,.12,.3,l),t(-4.5,4.94,-7.6,.15,.19,.12,l),i(16,3.5,-.5,10,.2,15,s("\u513F\u7AE5\u9732\u53F0\u77F3\u6750",13156783));for(let v of[-7.96,6.96])i(16,4.24,v,10,1.28,.06,c,!0),i(16,4.91,v,10,.05,.07,a);i(20.96,4.24,-.5,.06,1.28,15,c,!0),i(20.96,4.91,-.5,.07,.05,15,a);for(let[v,_]of[[-7.15,1.7],[1.45,11.1]])i(11.04,4.24,v,.06,1.28,_,c,!0),i(11.04,4.91,v,.07,.05,_,a);let y=s("\u513F\u7AE5\u8BBE\u65BD\u8584\u8377\u7EFF",8961456),b=s("\u6ED1\u68AF\u6674\u7A7A\u84DD",7974347,{roughness:.35}),M=s("\u6C99\u6C60\u7EC6\u6C99",14534548),E=s("\u513F\u7AE5\u8F6F\u57AB",14727570);i(16,3.635,-1,6,.05,7,E),i(17,4.82,-2.6,1.35,.12,1.25,y);for(let v of[16.4,17.6])for(let _ of[-3.1,-2.1])i(v,4.18,_,.07,1.16,.07,r);for(let v=0;v<6;v++)i(17,3.7+v*.2,-4+v*.18,1,.16,.2,y);let A=i(17,4.3,-.7,1.05,.09,3.1,b);A.rotation.x=.38;for(let v of[16.4,17.6])n([v,4.95,-2.15],[v,3.82,.75],.075,b),n([v,4.85,-3.15],[v,5.45,-3.15],.045,r);f(17,-1.2,1.65,5.8,3.6,1.9),i(14,3.83,3,2.2,.46,2.1,r,!0),i(14,4.07,3,2,.035,1.9,M),e(14.4,4.2,3.2,.13,.23,b),t(13.6,4.12,2.6,.15,.07,.14,y),i(19.3,4.05,4.9,2,.9,.65,o,!0);for(let v=0;v<4;v++)i(18.6+v*.46,4.25,5.25,.35,.4,.05,[y,b,E][v%3]),t(18.6+v*.46,4.62,4.9,.14,.14,.14,[y,b,E][v%3]);for(let v=0;v<4;v++)e(19,3.71,-3+v*.85,.26,.2,v%2?y:b);i(12.1,4.04,1,.65,.18,2.2,r,!0),i(11.83,4.4,1,.12,.7,2.2,r),d.push({x:12.1,z:1,y:3.6,rotation:Math.PI/2,type:"sit"}),g(12,5.7,.8,3.6),g(20,5.8,.7,3.6)}function Jm(){let i=(a,c=1024,l=768)=>{let h=document.createElement("canvas");h.width=c,h.height=l,a(h.getContext("2d"),c,l);let u=new yn(h);return u.colorSpace=dt,u.anisotropy=4,u};function e(a,c,l,h,u,d,f=0){a.fillStyle=d,a.beginPath(),a.ellipse(c,l,h,u,f,0,Math.PI*2),a.fill()}let t=i((a,c,l)=>{a.fillStyle="#f7eddd",a.fillRect(0,0,c,l);for(let h=0;h<c;h+=8)a.strokeStyle=h%24?"#eee4d530":"#d6c3a035",a.beginPath(),a.moveTo(h,0),a.lineTo(h,l),a.stroke();for(let h=0;h<l;h+=6)a.fillStyle="#ffffff20",a.fillRect(0,h,c,1)}),n=i((a,c,l)=>{let h=a.createLinearGradient(0,0,0,l);h.addColorStop(0,"#cfebed"),h.addColorStop(1,"#fff2cb"),a.fillStyle=h,a.fillRect(0,0,c,l);for(let f=0;f<8;f++)e(a,90+f*275,690,330,130,f%2?"#b1d1ac":"#d3e0b4"),e(a,100+f*280,95+f%2*90,85,30,"#fffaf0");a.fillStyle="#466c62",a.font="bold 50px sans-serif",a.fillText("\u5B9D\u53EF\u68A6 \xB7 \u4E00\u8D77\u53BB\u5192\u9669",110,340),a.font="25px sans-serif",a.fillText("\u6BCF\u4E00\u5929\uFF0C\u90FD\u6709\u65B0\u7684\u53D1\u73B0",115,393);let u=1260,d=442;a.save(),a.translate(u,d),a.fillStyle="#e8b72b",a.beginPath(),a.moveTo(135,50),a.lineTo(240,-40),a.lineTo(220,50),a.lineTo(295,15),a.lineTo(265,110),a.lineTo(150,145),a.closePath(),a.fill(),e(a,0,100,104,120,"#f7d64d"),e(a,0,-10,112,95,"#ffe269");for(let f of[-1,1])e(a,f*65,-131,24,102,"#ffe269",f*.27),e(a,f*84,-204,20,32,"#343a3a",f*.27),e(a,f*40,-24,12,18,"#343a3a"),e(a,f*37,-29,4,6,"#fff"),e(a,f*78,16,21,16,"#e67962"),e(a,f*65,205,45,24,"#f7d64d");e(a,0,-2,6,4,"#343a3a"),a.strokeStyle="#76523f",a.lineWidth=4,a.beginPath(),a.moveTo(-22,29),a.quadraticCurveTo(-10,42,0,30),a.quadraticCurveTo(12,43,24,28),a.stroke(),a.restore();for(let[f,g,x]of[[1750,530,68],[865,595,45],[1940,200,40]])e(a,f,g,x,x,"#fff9ee"),a.fillStyle="#e9887e",a.beginPath(),a.arc(f,g,x,Math.PI,Math.PI*2),a.fill(),a.fillStyle="#536b69",a.fillRect(f-x,g-4,x*2,8),e(a,f,g,x*.24,x*.24,"#536b69"),e(a,f,g,x*.15,x*.15,"#fff9ee")},2048,768),s=i((a,c,l)=>{a.fillStyle="#faf2e5",a.fillRect(0,0,c,l),e(a,710,190,115,115,"#d7ad7a");for(let h=0;h<4;h++){a.fillStyle=["#d2d9c4","#aebdad","#7f9c92","#52766d"][h],a.beginPath(),a.moveTo(0,l);for(let u=0;u<=c;u+=8)a.lineTo(u,360+h*100+Math.sin(u*.007+h)*85);a.lineTo(c,l),a.fill()}a.fillStyle="#f6efdf",a.font="28px serif",a.fillText("\u5C71\u5C45 \xB7 \u56DB\u5B63",65,690)}),r=i((a,c,l)=>{a.fillStyle="#fcf4e8",a.fillRect(0,0,c,l);for(let h=0;h<5;h++){a.strokeStyle="#96815f",a.lineWidth=7,a.beginPath(),a.moveTo(500,690),a.quadraticCurveTo(500+h*35,400,170+h*150,130),a.stroke();for(let u=0;u<4;u++)e(a,240+h*115+(u%2?40:-35),220+u*100,65,24,["#b1bda3","#819c89","#cabd96"][h%3],h*.5-.8)}a.fillStyle="#6b7a66",a.font="28px serif",a.fillText("\u53F6\u5F71 \xB7 \u6162\u65F6\u5149",65,690)}),o=(a,c)=>new tt({name:a,map:c,roughness:.88});return{...Zm(),\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8:o("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",t),\u5B9D\u53EF\u68A6\u5899\u5E03:o("\u5B9D\u53EF\u68A6\u5899\u5E03",n),\u5C71\u5C45\u6302\u753B:o("\u5C71\u5C45\u6302\u753B",s),\u690D\u7269\u6302\u753B:o("\u690D\u7269\u6302\u753B",r)}}function $m({box:i,mat:e}){let t=e("\u6696\u767D\u7EC7\u7EB9\u5899\u7EB8",16248285),n=e("\u5B9D\u53EF\u68A6\u5899\u5E03",14216423),s=e("\u6302\u753B\u6D45\u6A61\u6728\u6846",12689787),r=e("\u5C71\u5C45\u6302\u753B",11782579),o=e("\u690D\u7269\u6302\u753B",12241846);i(-3.105,5.3,-13,.025,3.2,9.8,t),i(3.105,5.3,-13.5,.025,3.2,8.7,t),i(2.895,5.3,-13,.025,3.2,9.6,t),i(2.875,5.3,-14.45,.015,3.2,5.7,n),i(-2.895,5.3,-13,.025,3.2,9.6,t),i(-20.8,1.72,3.8,.024,3.2,3.5,t),i(20.8,1.72,3.8,.024,3.2,3.5,t),i(-13.2,-1.95,-12.905,3.5,3.1,.025,t),i(-20.6,-1.95,-13.105,3.5,3.1,.025,t);function a(c,l,h,u,d,f=!1,g=r){i(c,l,h,f?.065:u+.12,d+.12,f?u+.12:.065,s),i(c+(f?.043:0),l,h+(f?0:.043),f?.018:u,d,f?u:.018,g)}i(-3.14,5.7,-15.35,.065,1.02,1.47,s),i(-3.183,5.7,-15.35,.018,.9,1.35,o),a(-20.73,1.9,3.8,1.8,1.15,!0),i(20.7,1.9,3.8,.06,1.28,1.92,s),i(20.657,1.9,3.8,.018,1.15,1.8,o),a(-13.2,-1.8,-12.86,1.45,.9,!1,r),a(3.5,1.9,-17.45,1.35,.9,!1,o)}var Cf=[[-7,-12,3.6],[0,-12,3.6],[5,-14,3.6],[-16,0,0],[-16,-13,0],[16,0,0],[15,-5.3,0],[0,-10,0],[-6,-14,0],[5,-13,0],[-20,-16,-3.6],[-14,-16,-3.6],[-20,-10,-3.6],[-14,-10,-3.6],[-17,20,0]];function jm(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,glass:h,plaster:u,lightmat:d,architecture:f,seats:g,obstacle:x,sofa:m,table:p,chair:y,books:b,plant:M,rug:E}=i,A=r("\u536B\u6D74\u767D\u74F7",15920869,{roughness:.25}),v=r("\u536B\u6D74\u4E94\u91D1",10332588,{roughness:.2,metalness:.8}),_=r("\u536B\u6D74\u7070\u77F3",11977151,{roughness:.35}),T=r("\u6536\u7EB3\u7EC7\u7269",8623498),w=r("\u73A9\u5177\u7C89",15184569),C=r("\u73A9\u5177\u9EC4",15252311);function I(U,z,W,D=0,k=1.1,q=.55){e(U,D+k/2,z,W,k,q,a,!0);for(let J=0;J<Math.ceil(W/.55);J++){let oe=U-W/2+(J+.5)*W/Math.ceil(W/.55);e(oe,D+k/2,z+q/2+.012,.015,k-.08,.015,l),e(oe+.1,D+k*.65,z+q/2+.03,.12,.025,.03,v)}}function B(U,z,W,D,k=1.8,q=!1,J=0){let oe=f.children.length;e(U,D+k/2,z,W,k,.12,o);for(let ve of[U-W/2,U+W/2])e(ve,D+k/2,z+.2,.06,k,.5,a);for(let ve=0;ve<4;ve++){e(U,D+.1+ve*k/4,z+.2,W,.06,.5,a);for(let be=0;be<5;be++){let ne=U-W*.38+be*W*.19;q?(t(ne,D+.25+ve*k/4,z+.22,.1,.12,.09,be%2?w:C),e(ne,D+.15+ve*k/4,z+.22,.16,.06,.17,T)):e(ne,D+.28+ve*k/4,z+.2,.08,.28,.23,[T,c,o][be%3])}}if(J){let ve=new Ze;for(let be of f.children.slice(oe))be.position.x-=U,be.position.z-=z,ve.add(be);ve.position.set(U,0,z),ve.rotation.y=J,f.add(ve)}x(U+Math.sin(J)*.2,z+Math.cos(J)*.2,J?.5:W,J?W:.5,D,k)}e(4.85,3.617,-13.5,3.5,.03,8.8,_),e(6.65,5.3,-13.5,.15,3.4,9,u,!0);for(let[U,z]of[[3,5-Ln/2],[5+Ln/2,6.65]])e((U+z)/2,5.3,-9,z-U,3.4,.15,u,!0);e(5,6.4,-9,Ln,1.2,.15,u,!0),e(4.2,3.63,-10.25,1.65,.06,1.7,_),e(5.02,4.6,-10.6,.035,2,1,h,!0),s([3.22,4.6,-10],[3.22,6.1,-10],.025,v),s([3.22,6.1,-10],[3.8,6.1,-10],.025,v),n(3.8,6.08,-10,.19,.035,v),n(3.75,3.67,-10.25,.08,.015,l),I(3.85,-12.1,1,3.6,.95,.85),e(3.85,4.08,-11.66,.92,.85,.025,A);let P=n(3.85,4.05,-11.625,.28,.035,v);P.rotation.x=Math.PI/2;let L=n(3.85,4.05,-11.6,.21,.035,l);L.rotation.x=Math.PI/2,e(3.9,4.4,-11.61,.29,.09,.03,l);for(let U=0;U<3;U++)e(3.85,4.6+U*.075,-12.1,.65,.065,.4,U%2?c:T);n(3.9,3.91,-10,.23,.6,T);for(let U=0;U<4;U++)e(3.9,4.21+U*.055,-10,.34,.05,.28,c);e(3.18,5.1,-12.5,.05,.7,.8,v);for(let U of[-12.7,-12.3])e(3.25,4.8,U,.045,.6,.28,c);e(-.6,3.81,-15.7,2.4,.42,3.8,a,!0),e(-.6,4.055,-15.7,2.3,.07,3.7,r("\u69BB\u69BB\u7C73\u8349\u7F16",12105354)),e(-.6,4.17,-15.7,2.05,.17,3.5,c);for(let U of[-1.38,-.6,.18])e(U,3.81,-13.775,.7,.27,.025,o),e(U,3.84,-13.75,.15,.02,.025,l);g.push({x:-.6,z:-15.7,y:3.6,rotation:0,type:"lie"}),B(-2.83,-11.8,2.6,3.6,1.8,!1,Math.PI/2),B(2.83,-12.1,2.4,3.6,1.2,!0,-Math.PI/2),p(1.85,-17.2,1.5,.8,3.6),y(1.85,-16.5,Math.PI,3.6),e(1.85,4.43,-17.2,.42,.025,.3,c),m(-5.2,-12.5,Math.PI/2,3.6),p(-4,-12.5,.7,1.35,3.6),e(-3.2,4.05,-12.5,.4,.9,2,o,!0),e(-3.2,5.15,-12.5,.07,1,1.65,l),e(-3.245,5.15,-12.5,.015,.91,1.53,r("\u7535\u89C6\u753B\u9762",7574929)),M(-3.7,-17,.7,3.6),e(-9.4,3.72,-12,1.1,.24,2,l,!0),e(-9.4,3.86,-12,.85,.035,1.75,T);for(let U of[-9.86,-8.94])s([U,3.85,-12.85],[U,4.8,-12.85],.035,v);e(-9.4,4.8,-12.85,1,.05,.06,v),e(-9.4,4.94,-12.88,.55,.25,.045,l);for(let U of[-15.2,-14.6]){s([-4.25,3.88,U],[-3.65,3.88,U],.035,v);for(let z of[-4.23,-3.67])t(z,3.88,U,.12,.14,.14,l)}E(-4,-16,1.4,2,3.6),e(-16,3.5,-6,10,.2,26,r("\u9633\u53F0\u9632\u6ED1\u77F3",12170403));for(let U of[-18.95,6.95])e(-16,4.17,U,10,1.15,.06,h,!0),e(-16,4.77,U,10,.05,.08,l);e(-20.95,4.17,-6,.06,1.15,26,h,!0),e(-20.95,4.77,-6,.08,.05,26,l);for(let[U,z]of[[(-29-vi/2)/2,9-vi/2],[(-10+vi/2+7)/2,17-vi/2]])e(-11.05,4.17,U,.06,1.15,z,h,!0),e(-11.05,4.77,U,.08,.05,z,l);p(-16,-6,2.1,1.1,3.6),y(-16,-4.9,Math.PI,3.6),y(-16,-7.1,0,3.6),g.push({x:-16,z:-4.9,y:3.6,rotation:Math.PI,type:"sit"});for(let[U,z]of[[-20,-17],[-20,5],[-12,5]])M(U,z,1.1,3.6);n(-16,4.46,-6,.12,.16,A);for(let U of[-16.4,-15.6])n(U,4.42,-6,.07,.1,A);m(-18,1,Math.PI,3.6),p(-18,-.2,1.3,.7,3.6),I(19,-5.5,2.2),B(19,-6.4,2.6,0,2.25),M(20,4,.9),I(-18,5.9,3),I(-19,-16.9,2,0,1.1),I(3.5,-17.4,2.1),M(3,-5.3,.65),I(18,5.8,3.2),B(-12,-18.1,1.2,-3.6,2),I(-12.1,-8.1,1.2,-3.6,1);for(let[U,z,W]of[[19,-5.5,0],[-18,5.9,0],[3.5,-17.4,0],[-12.1,-8.1,-3.6]])n(U,W+1.2,z,.11,.22,A),s([U,W+1.25,z],[U+.13,W+1.65,z],.015,o),t(U+.13,W+1.65,z,.17,.09,.08,T);for(let[U,z,W]of Cf)e(U,W+3.02,z,1.4,.07,.6,l),e(U,W+2.975,z,1.3,.025,.5,d);for(let U of[-20,-12])for(let z of[-15,-5,5])e(U,3.98,z,.16,.65,.16,l),e(U,4.25,z,.18,.15,.18,d)}var Ia=new F;function oi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ia.copy(e),Ia[n]=0,Ia.normalize();let l=.5*o/(o+a),h=1-Ia.angleTo(i)/c;return Math.sign(Ia[t])===1?h*l:a/(o+a)+l+l*(1-h)}var ls=class i extends Vt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new F,l=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,x=new F,m=.5/o;for(let p=0,y=0;p<u.length;p+=3,y+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),f[y+0]=oi(x,l,"z","y",r,n),f[y+1]=1-oi(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[y+0]=1-oi(x,l,"z","y",r,n),f[y+1]=1-oi(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[y+0]=1-oi(x,l,"x","z",r,e),f[y+1]=oi(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[y+0]=1-oi(x,l,"x","z",r,e),f[y+1]=1-oi(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[y+0]=1-oi(x,l,"x","y",r,e),f[y+1]=1-oi(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[y+0]=oi(x,l,"x","y",r,e),f[y+1]=1-oi(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};function Qm({box:i,ell:e,cyl:t,mat:n,architecture:s,seats:r,obstacle:o}){let a=n("\u4E3B\u9898\u5976\u6CB9\u767D",16773083,{roughness:.38}),c=n("\u4E3B\u9898\u6A31\u82B1\u7C89",15247805),l=n("\u4E3B\u9898\u6DE1\u7D2B",12101080),h=n("\u4E3B\u9898\u6674\u7A7A\u84DD",11128800),u=n("\u4E3B\u9898\u9999\u69DF\u91D1",13083239,{metalness:.65,roughness:.28}),d=n("\u4E3B\u9898\u6696\u706F\u5E26",16770737,{emissive:16767131,emissiveIntensity:2}),f=n("\u4E3B\u9898\u70AD\u9ED1",2499884),g=n("\u76AE\u5361\u4E18\u9EC4",16764725),x=n("\u7CBE\u7075\u7403\u7EA2",15158089);function m(v,_,T,w,C,I,B){let P=new Pe(new ls(w,C,I,3,Math.min(w,C,I)*.24),B);return P.position.set(v,_,T),P.castShadow=P.receiveShadow=!0,s.add(P),P}function p(v,_,T,w){let C=new Wr;for(let B=0;B<10;B++){let P=B*Math.PI/5+Math.PI/2,L=B%2?w*.44:w,U=Math.cos(P)*L,z=Math.sin(P)*L;B===0?C.moveTo(U,z):C.lineTo(U,z)}C.closePath();let I=new Pe(new Ko(C,{depth:.025,bevelEnabled:!1}),d);I.position.set(v,_,T),s.add(I)}let y=-3.6;i(-20.2,y+.018,-10.1,4.15,.028,5.45,n("KTV\u6D45\u8272\u77F3\u5730\u9762",15655391,{roughness:.3}));for(let v=0;v<5;v++)for(let _=0;_<3;_++)m(-21.85+v*.72,y+.58+_*.91,-12.8,.7,.89,.1,[c,h,a,l,a][v]);for(let v of[-22.17,-18.22])m(v,y+1.6,-12.68,.04,2.9,.04,d);m(-20.2,y+3.06,-12.65,3.95,.045,.045,d);for(let v=0;v<5;v++)m(-21.6+v*.68,y+.48,-8.8,.72,.52,1.03,a),m(-21.6+v*.68,y+.98,-8.35,.73,.85,.38,a),e(-21.6+v*.68,y+.86,-8.64,.25,.23,.14,v%2?l:c);o(-20.25,-8.65,3.7,1.25,y,1.45),r.push({x:-20.3,z:-8.9,y,rotation:Math.PI,type:"sit"}),m(-20.4,y+.71,-10.5,1.7,.12,.75,a);for(let v of[-21.1,-19.7])for(let _ of[-10.78,-10.22])t(v,y+.34,_,.027,.65,u);o(-20.4,-10.5,1.7,.75,y,.8),m(-20.3,y+.38,-12.15,2.9,.7,.55,a),o(-20.3,-12.15,2.9,.55,y,.8),i(-20.3,y+1.65,-12.43,2.75,1.5,.1,f),i(-20.3,y+1.65,-12.367,2.6,1.35,.018,n("\u7CD6\u679C\u70B9\u6B4C\u5C4F",16777215,{emissive:14991310,emissiveIntensity:.5}));for(let v=0;v<9;v++){let _=-22.2+v*.44,T=y+2.65-Math.sin(v/8*Math.PI)*.35;if(p(_,T,-7.18,.085),v<8){let w=i(_+.22,T-.035,-7.19,.46,.015,.015,u);w.rotation.z=-Math.cos(v/8*Math.PI)*.12}}m(-.6,4.3,-15.3,2.05,.09,2.3,h);let b=(v,_,T,w)=>{e(v,_,T,w,w,w,a);let C=new Pe(new on(w,20,12,0,Math.PI*2,0,Math.PI/2),x);C.position.set(v,_,T),s.add(C);let I=new Pe(new Li(w,.025,6,24),f);I.rotation.x=Math.PI/2,I.position.set(v,_,T),s.add(I),e(v,_,T+w,.1,.1,.04,f),e(v,_,T+w+.032,.06,.06,.02,a)};b(-.6,5.23,-17.48,.58),m(-.6,5.18,-17.78,3.8,2.25,.12,h);for(let v of[-2.2,1])p(v,5.7,-17.69,.18);let M=-.05,E=-15.25;e(M,4.61,E,.28,.35,.23,g),e(M,4.98,E,.3,.28,.24,g);for(let v of[-1,1]){let _=e(M+v*.19,5.34,E,.07,.3,.065,g);_.rotation.z=-v*.22,e(M+v*.24,5.57,E,.052,.09,.06,f),e(M+v*.115,5.04,E+.22,.035,.042,.025,f),e(M+v*.22,4.94,E+.19,.06,.05,.025,x),e(M+v*.2,4.38,E+.1,.12,.08,.16,g)}for(let v=0;v<3;v++)b(2.6,4.98,-12.8+v*.62,.18);let A=t(0,3.622,-10.7,1.32,.03,x);t(0,3.64,-10.7,.38,.025,a),i(0,3.654,-10.7,2.64,.014,.09,f)}function e0(i){let e=document.createElement("canvas");e.width=768,e.height=432;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,768,432);n.addColorStop(0,"#f2b8ce"),n.addColorStop(1,"#b7c9ec"),t.fillStyle=n,t.fillRect(0,0,768,432),t.fillStyle="#574b6b",t.font="bold 32px sans-serif",t.fillText("\u7CD6\u679C\u661F\u5149 \xB7 \u5BB6\u5EAD\u6B22\u5531",40,55),t.font="22px sans-serif",["\u4EB2\u5B50\u513F\u6B4C","\u6D41\u884C\u91D1\u66F2","\u7ECF\u5178\u8001\u6B4C","\u6211\u7684\u6B4C\u5355","\u6B22\u4E50\u5408\u5531","\u8F7B\u677E\u4F34\u594F"].forEach((r,o)=>{let a=143+o%3*238,c=155+Math.floor(o/3)*150;t.fillStyle="#fff0dc",t.beginPath(),t.arc(a,c,53,0,Math.PI*2),t.fill(),t.fillStyle="#6a597a",t.textAlign="center",t.fillText(["\u266B","\u266A","\u2605"][o%3],a,c+10),t.font="22px sans-serif",t.fillText(r,a,c+85)});let s=new yn(e);s.colorSpace=dt,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.map=s,i.mats.\u7CD6\u679C\u70B9\u6B4C\u5C4F.needsUpdate=!0}function GM(i,e,t,n=.12){let s=Math.hypot(i,e),r=Math.min(1,s/Math.max(1,t)),o=Math.max(0,(r-n)/(1-n));return{right:s?i/s*o:0,forward:s?-e/s*o:0,x:s?i/s*r*t:0,y:s?e/s*r*t:0}}function t0(i,e){let t=null,n=null,s={right:0,forward:0};function r(){let a=t;t=null,s.right=s.forward=0,e.style.transform="translate(0px, 0px)",i.dataset.active="false",a!==null&&i.hasPointerCapture(a)&&i.releasePointerCapture(a)}function o(a){if(a.pointerId!==t)return;a.preventDefault();let c=GM(a.clientX-n.x,a.clientY-n.y,n.radius);s.right=c.right,s.forward=c.forward,e.style.transform=`translate(${c.x}px, ${c.y}px)`}i.addEventListener("pointerdown",a=>{if(t!==null||a.button>0)return;a.preventDefault();let c=i.getBoundingClientRect();n={x:c.left+c.width/2,y:c.top+c.height/2,radius:c.width*.32},t=a.pointerId,i.setPointerCapture(t),i.dataset.active="true",o(a)}),i.addEventListener("pointermove",o);for(let a of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(a,c=>{c.pointerId===t&&r()});return{state:s,reset:r}}var Rs=[...[["masterDoor","\u4E3B\u5367\u623F\u95E8",-7,-8,"x",Ln],["childDoor","\u513F\u7AE5\u623F\u95E8",0,-8,"x",Ln],["bathDoor","\u536B\u6D74\u623F\u95E8",5,-9,"x",Ln],["balconyDoor","\u4E3B\u5367\u9633\u53F0\u95E8",-11,-10,"z",vi]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,z:n,axis:s,width:r,height:2.2,y:3.6,open:!0,angle:1,interior:!0})),{id:"gate",name:"\u5EAD\u9662\u5927\u95E8",x:0,z:30,axis:"x",width:12,height:2.5,y:0,open:!0,angle:1},{id:"basementDoor",name:"\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8",x:-22.4,z:-18,axis:"z",width:1.8,height:2.5,y:-3.6,open:!0,angle:1}];function n0(i,e,t){return Rs.some(n=>{if(Math.abs(t-n.y)>=2)return!1;if(!n.interior)return n.angle<.97&&(n.axis==="x"?Math.abs(i-n.x)<n.width/2+.15&&Math.abs(e-n.z)<.25:Math.abs(i-n.x)<.25&&Math.abs(e-n.z)<n.width/2+.15);let s=n.interior?1:n.axis==="x"?2:1,r=n.width/s;for(let o=0;o<s;o++){let a=o===0?-1:1,c=(n.axis==="x"?-a:n.id==="balconyDoor"?-1:1)*n.angle*Math.PI/2,l=n.axis==="x"?n.x+a*n.width/2:n.x,h=n.axis==="x"?n.z:n.z-n.width/2,u=i-l,d=e-h,f=u*Math.cos(c)-d*Math.sin(c),g=u*Math.sin(c)+d*Math.cos(c);if(n.axis==="x"?Math.abs(f+a*r/2)<r/2+.14&&Math.abs(g)<.18:Math.abs(g-r/2)<r/2+.14&&Math.abs(f)<.18)return!0}return!1})}function i0(i,e){let t=Rs.find(n=>n.id===i);return!t||t.open&&(t.axis==="x"?Math.abs(e.x-t.x)<t.width/2+.3&&Math.abs(e.z-t.z)<1.1:Math.abs(e.x-t.x)<1.1&&Math.abs(e.z-t.z)<t.width/2+.3)&&Math.abs(e.y-t.y)<2?!1:(t.open=!t.open,!0)}function s0(i){let e=new Ze;i.add(e);let t=new tt({color:11413281,roughness:.5}),n=new tt({color:13870926,metalness:.5,roughness:.4}),s=new tt({color:2637112}),r=new tt({color:16764784,emissive:16755769,emissiveIntensity:1.7});function o(f,g,x,m,p,y,b,M=e){let E=new Pe(new Vt(m,p,y),b);return E.position.set(f,g,x),E.castShadow=E.receiveShadow=!0,M.add(E),E}function a(f,g,x,m,p,y=e){let b=new Pe(new on(m,20,14),p);return b.position.set(f,g,x),b.castShadow=!0,y.add(b),b}function c(f,g,x,m,p,y,b=!1,M=0){let E=document.createElement("canvas");E.width=b?128:768,E.height=b?768:128;let A=E.getContext("2d");A.fillStyle="#a41919",A.fillRect(0,0,E.width,E.height),A.strokeStyle="#dcb971",A.lineWidth=7,A.strokeRect(7,7,E.width-14,E.height-14),A.fillStyle="#ffe6a1",A.textAlign="center",A.textBaseline="middle",A.font=(b?"75":"74")+'px "Songti SC",serif',b?[...f].forEach((T,w)=>A.fillText(T,64,58+w*650/(f.length-1))):A.fillText(f,384,64);let v=new yn(E);v.colorSpace=dt;let _=new Pe(new Qn(p,y),new tt({map:v,roughness:.75,side:An}));_.position.set(g,x,m),_.rotation.y=M,e.add(_)}let l=[];for(let f of Rs){let g=f.interior?1:f.axis==="x"?2:1;for(let x=0;x<g;x++){let m=new Ze,p=x===0?-1:1,y=f.width/g;if(e.add(m),f.interior)f.axis==="x"?(m.position.set(f.x+p*f.width/2,f.y,f.z),o(-p*y/2,1.1,0,y,2.2,.08,s,m),o(-p*(y-.17),1.15,.065,.055,.23,.05,n,m)):(m.position.set(f.x,f.y,f.z-f.width/2),o(0,1.1,y/2,.08,2.2,y,s,m),o(-.07,1.15,y-.17,.045,.23,.055,n,m));else if(f.axis==="x"){m.position.set(f.x+p*f.width/2,f.y,f.z);for(let b=0;b<14;b++)o(-p*(b+.5)*y/14,1.15,0,.06,2.3,.09,s,m);o(-p*y/2,.45,0,y,.55,.1,s,m),o(-p*y/2,2.35,0,y,.09,.12,n,m)}else m.position.set(f.x,f.y,f.z-f.width/2),o(0,1.2,y/2,.1,2.4,y,s,m),o(-.08,1.1,y-.2,.06,.25,.045,n,m);l.push({d:f,pivot:m,sign:p})}}for(let f of[-6.4,6.4])o(f,1.7,30,.65,3.4,.65,s),a(f,3.85,30,.45,t),o(f,3.35,30,.05,.35,.05,n);o(0,3.3,30,13.5,.25,.9,s),c("\u6625\u56DE\u5927\u5730\u798F\u6EE1\u95E8",6.4,1.7,30.34,.46,2.5,!0),c("\u559C\u5165\u534E\u5802\u5BB6\u5174\u65FA",-6.4,1.7,30.34,.46,2.5,!0),c("\u9616\u5BB6\u6B22\u4E50",0,3.3,30.47,3.6,.48),c("\u8FCE\u6625\u63A5\u798F",0,2.98,-3.85,2.3,.4),c("\u5BB6\u548C\u4E07\u4E8B\u5174",-2.75,1.65,-3.85,.32,2.3,!0),c("\u4EBA\u987A\u767E\u4E1A\u65FA",2.75,1.65,-3.85,.32,2.3,!0);for(let f of[-9,-5,5,9])a(f,2.65,-2.5,.3,t),o(f,2.14,-2.5,.035,.4,.035,n);for(let f of[-32.72,32.72])for(let g of[-14,-4,6,16,26])o(f,1.35,g,.16,.5,.24,s),o(f+(f<0?.09:-.09),1.35,g,.06,.3,.2,r);for(let f of[-27,-18,-9,9,18,27])o(f,1.35,29.75,.28,.48,.14,s),o(f,1.35,29.66,.22,.3,.04,r);let h=new Ze;e.add(h);let u=new tt({color:15987952,roughness:1});for(let f of[-3,3]){a(f,.53,25,.55,u,h),a(f,1.2,25,.4,u,h),a(f,1.76,25,.3,u,h),o(f,2.08,25,.62,.08,.62,s,h),o(f,2.23,25,.4,.28,.4,s,h);for(let m of[-.1,.1])a(f+m,1.82,25+.275,.028,s,h);let x=new Pe(new mi(.07,.25,12),n);x.rotation.x=Math.PI/2,x.position.set(f,1.72,25+.36),h.add(x),o(f,1.48,25,.69,.13,.69,t,h);for(let m of[-1,1]){let p=o(f+m*.55,1.3,25,.65,.045,.045,s,h);p.rotation.z=m*.3}}function d(f,g){h.visible=g;for(let x of Rs)x.angle=en.damp(x.angle,x.open?1:0,6,f);for(let x of l)x.pivot.rotation.y=(x.d.axis==="x"?x.d.interior?-x.sign:x.sign:x.d.id==="balconyDoor"?-1:1)*x.d.angle*Math.PI/2}return d(0,!1),{update:d,group:e}}function HM(){return new Promise(i=>{typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:400}):setTimeout(i,24)})}var ch=class{constructor({yieldWork:e=HM,onChange:t=()=>{}}={}){this.tasks=[],this.running=!1,this.yieldWork=e,this.onChange=t}add(e,t,{when:n=()=>!0,priority:s=10}={}){if(this.tasks.some(r=>r.id===e))throw Error("\u91CD\u590D\u7D20\u6750\u4EFB\u52A1 "+e);this.tasks.push({id:e,load:t,when:n,priority:s,state:"pending"})}async update(e){if(this.running)return;let t=this.tasks.filter(n=>n.state==="pending"&&n.when(e)).sort((n,s)=>n.priority-s.priority)[0];if(t){this.running=!0,t.state="loading",this.onChange(this.stats);try{await this.yieldWork(),await t.load(),t.state="done"}catch(n){t.state="error",t.error=String(n),console.warn("\u7D20\u6750\u6682\u672A\u8F7D\u5165:",t.id,n)}finally{this.running=!1,this.onChange(this.stats)}}}retry(){for(let e of this.tasks)e.state==="error"&&(e.state="pending");this.onChange(this.stats)}get stats(){return{total:this.tasks.length,loaded:this.tasks.filter(e=>e.state==="done").length,failed:this.tasks.filter(e=>e.state==="error").length,active:this.tasks.find(e=>e.state==="loading")?.id||null}}};async function Rf(i){let e=globalThis.MANSION_ASSETS?.[i];if(!e)throw Error("\u7F3A\u5C11\u7D20\u6750 "+i);if(e.startsWith("assets/")){let s=new AbortController,r=setTimeout(()=>s.abort(),2e4);try{let o=await fetch(e,{cache:"default",signal:s.signal});if(!o.ok)throw Error(`${i}: HTTP ${o.status}`);return await o.arrayBuffer()}finally{clearTimeout(r)}}let t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n.buffer}function Pf(i,e){let t=i<=700||e&&i<=1200;return{mobile:t,fov:t?68:52,distance:t?7.5:5,pixelCap:t?1.85:1/0}}function r0(i,e,t,n=!1){return n?"global":e<-.3?"basement":e>7?"roof":e>3.3?"upper":t<7&&i<-11?"west":t<7&&i>11?"east":t<-4&&Math.abs(i)<11?"main":"garden"}function o0(i){let{box:e,mat:t,branch:n,root:s}=i,r=t("\u516C\u53F8\u6D45\u8272\u77F3\u6750",14210247),o=t("\u516C\u53F8\u7ACB\u9762\u7EBF\u811A",15262937),a=t("\u516C\u53F8\u7A97\u6846",6648698),c=t("\u516C\u53F8\u73BB\u7483",9878990,{transparent:!0,opacity:.28,depthWrite:!1,roughness:.22,metalness:.2}),l=t("\u516C\u53F8\u529E\u516C\u5730\u6BEF",9608088),h=t("\u516C\u53F8\u529E\u516C\u684C",14075560),u=t("\u516C\u53F8\u529E\u516C\u6905",3361352),d=t("\u516C\u53F8\u7535\u8111\u5C4F\u5E55",8240821,{emissive:3235173,emissiveIntensity:.65}),f=t("\u516C\u53F8\u9876\u706F",15200743,{emissive:14085343,emissiveIntensity:.8}),g=s.userData.officeLabels=[];e(39,-.035,18,8,.07,34,t("\u516C\u53F8\u9A6C\u8DEF",6318439)),e(21.5,-.025,32,43,.05,2,r),e(44.5,-.025,18,3,.05,34,r);for(let x=3;x<35;x+=4)e(39,.005,x,.12,.012,1.8,o);for(let x=35.5;x<43;x+=1)e(x,.01,18,.55,.02,2.6,o);e(58,-.07,18,30,.12,32,r),g.push({text:"\u4E30\u5DE2 \xB7 \u6B66\u6C49\u7814\u53D1\u4E2D\u5FC3",x:45.64,y:5.05,z:18,rotation:-Math.PI/2,w:11,h:1},{text:"\u8FC7\u8857 \u2192 \u4E30\u5DE2\u7814\u53D1\u4E2D\u5FC3",x:26,y:1.7,z:32.8,w:7,h:.6},{text:"\u4E00\u81F3\u4E94\u697C\u529E\u516C \xB7 \u697C\u68AF / \u7535\u68AF\u76F4\u8FBE\u5929\u53F0",x:48,y:2.6,z:18,rotation:-Math.PI/2,w:6,h:.5});for(let x of gn){for(let m of ah())e((m.x1+m.x2)/2,x.y-.1,(m.z1+m.z2)/2,m.x2-m.x1,.2,m.z2-m.z1,x.y===18?r:l);if(x.y!==18){for(let m of[4,26])e(58,x.y+1.8,m,24,3.6,.18,c,!0),e(58,x.y+.4,m,24,.8,.24,r,!0);e(70,x.y+1.8,15,.2,3.6,22,r,!0);for(let[m,p]of[[9,10],[23,6]])e(46,x.y+1.8,m,.12,3.6,p,c,!0),e(46,x.y+.4,m,.35,.8,p,r,!0);x.y>0&&e(46,x.y+1.8,17,.12,3.6,6,c,!0);for(let m of[4,7,10,13,14,20,23,26])e(45.85,x.y+1.8,m,.6,3.6,.3,o,!0);e(45.8,x.y+3.45,15,.7,.3,22.6,o),e(70,x.y+3.45,15,.4,.3,22.6,o);for(let m of[50,56,62])for(let p of[10,18,23])e(m,x.y+3.28,p,2.5,.035,.18,f);for(let m of[6])e(65,x.y+1.6,m,2,3.2,.08,c,!0);e(64,x.y+1.6,7,.08,3.2,2,c,!0),e(66,x.y+1.6,7,.08,3.2,2,c,!0),g.push({text:x.name+" \xB7 \u5F00\u653E\u529E\u516C\u533A",x:62,y:x.y+2.5,z:25.7,w:4,h:.5},{text:"\u7535\u68AF \u2191 \u5929\u53F0 / \u5404\u5C42",x:65,y:x.y+2.8,z:8.15,w:3,h:.45})}}for(let x of oh){for(let m=0;m<40;m++){let p=x.z1+(m+.5)*.3,y=x.base+(x.reverse?m+1:40-m)*x.height/40;e((x.x1+x.x2)/2,y-.045,p,1.4,.09,.303,r)}for(let m of[x.x1-.06,x.x2+.06]){n([m,x.base+.9+(x.reverse?0:3.6),10],[m,x.base+.9+(x.reverse?3.6:0),22],.025,a);for(let p=0;p<40;p++){let y=10+(p+.5)*.3,b=x.base+(x.reverse?p+.5:39.5-p)*3.6/40;e(m,b+.45,y,.045,.9,.3,c,!0)}}}for(let x of lh){e(x.x,x.y+.77,x.z,2.8,.12,1.2,h,!0);for(let m of[-1.15,1.15])e(x.x+m,x.y+.36,x.z,.06,.72,.85,a);e(x.x,x.y+1.22,x.z+.22,1.1,.64,.07,u),e(x.x,x.y+1.22,x.z+.175,1,.54,.018,d),e(x.x,x.y+.91,x.z+.22,.07,.28,.08,a),e(x.x,x.y+.85,x.z-.24,.65,.035,.23,u),e(x.x+.5,x.y+.85,x.z-.25,.09,.04,.14,u),e(x.x,x.y+.48,x.z-1.05,.58,.13,.6,u,!0),e(x.x,x.y+.83,x.z-1.33,.58,.63,.09,u,!0),e(x.x,x.y+.23,x.z-1.05,.08,.45,.08,a),e(x.x,x.y+.06,x.z-1.05,.7,.06,.65,a)}e(65,20.7,7,2.2,.15,2.2,r);for(let x of[64,66])e(x,19.3,7,.08,2.6,2,c,!0);e(65,19.3,6,2,2.6,.08,c,!0),g.push({text:"\u5929\u53F0\u7535\u68AF",x:65,y:20.5,z:8.15,w:2,h:.4}),e(44.2,3.35,17,4,.12,8,c);for(let x of[13,17,21])n([46,4.5,x],[42.3,3.35,x],.028,a);for(let x of[14,20])e(45.7,9.2,x,.7,18.4,.6,o);for(let x of[4,26])e(58,18.6,x,24,1.2,.08,c,!0);for(let x of[46,70])e(x,18.6,15,.08,1.2,22,c,!0);for(let x of[4,26])e(58,19.22,x,24,.06,.07,a);for(let x of[46,70])e(x,19.22,15,.07,.06,22,a);for(let x of[9,23])e(51,18.25,x,4,.5,.8,r,!0),e(51,18.55,x,3.8,.25,.65,t("\u516C\u53F8\u5929\u53F0\u7EFF\u690D",5799254));e(55,18.75,16,2,.12,1.2,h,!0);for(let x of[53,57])e(x,18.4,16,.8,.8,1,u,!0);g.push({text:"\u5929\u53F0\u89C2\u666F \xB7 \u9A6C\u8DEF\u5BF9\u9762\u662F\u5BB6",x:46.3,y:19.1,z:17,rotation:Math.PI/2,w:6,h:.6})}var hh={color:5857639,transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1};function a0(i){i.traverse(e=>{if(e.isMesh)for(let t of Array.isArray(e.material)?e.material:[e.material])/glass|玻璃/i.test(t.name)&&(t.color.setHex(hh.color),Object.assign(t,{transparent:!0,opacity:.38,roughness:.14,metalness:.12,depthWrite:!1}),"transmission"in t&&(t.transmission=0),t.needsUpdate=!0)})}function l0(){let e=new Uint8Array(262144);for(let s=0;s<256;s++)for(let r=0;r<256;r++){let o=r/256*Math.PI*2,a=s/256*Math.PI*2,c=Math.sin(o+Math.sin(a)*1.2)+.4*Math.sin(3*a+2*o),l=Math.pow(Math.abs(Math.sin(c*6+Math.sin(a*4))),18),h=Math.sin(r*12.9898+s*78.233)*43758.5453,u=110+32*Math.sin(o+a*2)+35*l+9*(h-Math.floor(h)),d=(s*256+r)*4;e[d]=u+7,e[d+1]=u+5,e[d+2]=u,e[d+3]=255}let t=new vn(e,256,256);t.colorSpace=dt,t.wrapS=t.wrapT=Qt,t.generateMipmaps=!0,t.minFilter=Cn,t.magFilter=yt,t.anisotropy=4,t.needsUpdate=!0;let n=(s,r,o={})=>new tt({name:s,color:r,roughness:.7,...o});return{\u53A8\u623F\u67DC\u4F53:n("\u53A8\u623F\u67DC\u4F53",3422518,{roughness:.62}),\u53A8\u623F\u77F3\u6750:n("\u53A8\u623F\u77F3\u6750",12170927,{map:t,roughness:.38}),\u53A8\u623F\u5730\u7816:n("\u53A8\u623F\u5730\u7816",14276041,{roughness:.62}),\u53A8\u623F\u9876\u9762:n("\u53A8\u623F\u9876\u9762",5593169,{roughness:.95})}}function c0({box:i,mat:e,dark:t,lightmat:n}){let s=e("\u53A8\u623F\u67DC\u4F53"),r=e("\u53A8\u623F\u77F3\u6750"),o=e("\u53A8\u623F\u5730\u7816"),a=e("\u53A8\u623F\u9876\u9762");i(-6.8,.012,-12.8,8,.018,10,e("\u74F7\u7816\u7F1D",11184543));for(let c=0;c<5;c++)for(let l=0;l<6;l++)i(-10.8+.8+c*1.6,.026,-17.8+.833+l*1.666,1.59,.018,1.656,o);i(-6.4,1.62,-17.65,7.7,3.24,.1,s),i(-6.4,1.5,-17.57,5.7,1.05,.06,r);for(let c of[-7.65,-6.35,-5.05])i(c,2.5,-17.19,1.27,1.2,.68,s),i(c,1.895,-16.88,1.22,.024,.025,n);i(-3.45,1.52,-16.9,1.15,3.04,1.3,s,!0),i(-3.45,1.47,-16.226,.88,.74,.035,t),i(-3.45,1.47,-16.2,.72,.52,.014,e("\u7535\u5668\u9762\u677F",1383712)),i(-3.45,1.74,-16.17,.63,.024,.03,t),i(-9.3,1.5,-16.9,1.4,3,1.3,s,!0);for(let c of[-9.65,-8.95])i(c,1.6,-16.229,.68,2.35,.035,s);i(-9.3,1.6,-16.19,.018,1,.028,t),i(-6.5,3.28,-12.7,8.7,.12,10.5,a);for(let c of[-10.72,-2.28])i(c,3.205,-12.7,.025,.018,10.25,n);for(let c of[-17.78,-7.62])i(-6.5,3.205,c,8.4,.018,.025,n);i(-6.5,3.205,-10.3,7.8,.02,.06,t);for(let c of[-9,-7,-5,-3])i(c,3.188,-10.3,.09,.012,.08,n)}var ur={x1:9,x2:10.5,z1:-14.5,z2:-6,height:3.6,base:0,reverse:!0},If={x1:7,x2:8.5,z1:-15,z2:-6,height:3.6,base:3.6,reverse:!1},hr={x1:-24.5,x2:-22.5,z1:-17,z2:-7,height:3.6,base:-3.6,reverse:!0};function h0(i,e){return i>-18.35&&i<-10.3&&e>-12.3&&e<-11.1}var La=null;function u0(i){La=i}function f0(i){return La?.phase==="idle"&&La.door>.98&&Math.abs(La.y-i)<.05}var Ps=[];function ai(i,e,t,n,s=0,r=3){Ps.push({x1:i-t/2,x2:i+t/2,z1:e-n/2,z2:e+n/2,y:s,h:r})}function d0(i,e){return i>-20.8&&i<-10.7&&e>-18.8&&e<6.8||i>10.7&&i<20.8&&e>-7.8&&e<6.8}function uh(i,e){return i>-10.8&&i<10.8&&e>-17.8&&e<-4.15}function p0(i,e){return i>-24.8&&i<-11.2&&e>-18.8&&e<-7.15}function fh(i,e,t=0){if(Af(i,e))return Wm(i,e,t);if(wf(i,e,.15)&&f0(t))return La.y;for(let n of[ur,If,hr]){if(i<n.x1||i>n.x2||e<n.z1||e>n.z2)continue;let s=(n.z2-e)/(n.z2-n.z1),r=n.base+(n.reverse?1-s:s)*n.height;if(Math.abs(r-t)<.25)return r;if(t>=n.base-.01&&t<=n.base+n.height+.01)return NaN}return t>6.95&&(uh(i,e)||h0(i,e))?7.2:t>3.35&&t<3.85&&(uh(i,e)||d0(i,e))?3.6:t<-3.35&&p0(i,e)?-3.6:Math.abs(t)<.25?0:NaN}function zi(i,e,t,n=t){if(wf(i,e,.12))return f0(t)&&i>it.x1+.14&&e>it.z1+.14&&e<it.z2-.14;if(n0(i,e,t)||(Math.abs(i)>34||e>49||e<-24)&&!Af(i,e)||Math.abs(t)<.25&&(((i+5)/4.35)**2+((e-10)/2.85)**2<1||i>17.1&&i<23.9&&e>3.1&&e<18.9))return!1;let s=fh(i,e,n);if(!Number.isFinite(s)||Math.abs(s-n)>.22||!io(i,e)&&n>6.95&&!uh(i,e)&&!h0(i,e)||!io(i,e)&&n>3.35&&n<3.85&&!uh(i,e)&&!d0(i,e)||n<-3.35&&!p0(i,e)||Math.abs(t)<.001&&i>hr.x1&&i<hr.x2&&e>hr.z1&&e<hr.z2-.1)return!1;let r=.2/De;return!Ps.some(o=>t+1.68>o.y+.08&&t<o.y+o.h-.12&&i>o.x1-r&&i<o.x2+r&&e>o.z1-r&&e<o.z2+r)}function m0(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.08));for(let s=0;s<n;s++){let r=i.x+e/n,o=fh(r,i.z,i.y);zi(r,i.z,o,i.y)&&(i.x=r,i.y=o);let a=i.z+t/n;o=fh(i.x,a,i.y),zi(i.x,a,o,i.y)&&(i.z=a,i.y=o)}return i}function g0(i,e){return i.velocity-=16*e,i.height=Math.max(0,i.height+i.velocity*e),i.height===0&&(i.velocity=0),i}function Lf(i){return i.height>.001||i.velocity>0?!1:(i.velocity=6.5,!0)}function x0(i,e,t){let n=Math.max(1,Math.ceil(Math.hypot(e,t)/.05)),s=Math.atan2(e,t);for(let r=0;r<n;r++){let o=i.x+e/n,a=i.z+t/n,c=!0;for(let[l,h]of[[0,0],[-.3,-1.05],[.3,-1.05],[-.3,1.05],[.3,1.05]]){let u=o+(Math.cos(s)*l+Math.sin(s)*h)/De,d=a+(-Math.sin(s)*l+Math.cos(s)*h)/De;if(Math.abs(fh(u,d,i.y)-i.y)>.001||!zi(u,d,i.y,i.y)){c=!1;break}}if(!c)break;i.x=o,i.z=a}return i}function _0(i){let{box:e,cyl:t,mat:n,wood:s,linen:r,dark:o,glass:a,plaster:c,architecture:l,root:h,seats:u,obstacle:d}=i;e(-17,-.025,20,8,.05,8,c);for(let y of[-21,-13])e(y,1.65,20,.2,3.3,8,c,!0);e(-17,1.65,16,8,3.3,.2,c,!0),e(-17,3.4,20,8.6,.18,8.6,o),e(-17,3.25,24,8.3,.1,.12,s),e(-17,.005,27,5,.04,6,c);let f=n("\u8D8A\u91CE\u8F66\u6F06",4018507,{metalness:.72,roughness:.23}),g=n("\u8F6E\u80CE",2106404),x=n("\u8F66\u8EAB\u9970\u4EF6",9609121,{metalness:.9,roughness:.22});e(-17,.8,20,2.15,.65,4.5,f),e(-17,1.5,19.8,1.92,.85,2.65,f),e(-17,1.62,21.14,1.73,.53,.035,a),e(-17,1.62,18.45,1.73,.53,.035,a);for(let y of[-18,-16])e(y,1.63,19.8,.03,.51,2.2,a),e(y,1.62,19.7,.05,.57,.06,o),e(y,1.19,20.3,.04,.04,.2,x);for(let y of[-18.13,-15.87])for(let b of[18.55,21.4]){let M=t(y,.54,b,.49,.27,g);M.rotation.z=Math.PI/2;let E=t(y+(y<-17?-.15:.15),.54,b,.26,.035,x);E.rotation.z=Math.PI/2}e(-17,.72,22.29,1.1,.32,.045,o);for(let y=-17.45;y<-16.5;y+=.15)e(y,.72,22.32,.045,.27,.035,x);for(let y of[-17.78,-16.22])e(y,.95,22.28,.4,.16,.05,n("\u8F66\u706F",16773068,{emissive:16766352,emissiveIntensity:.5}));e(-17,.46,22.28,2.25,.17,.12,x);for(let y of[-17.73,-16.27])e(y,1.98,19.8,.055,.06,2.8,o);d(-17,20,2.5,4.8,0,2.1);let m=[];h.userData.swings=m;function p(y,b,M,E){for(let _ of[-1,1])e(b+_*1.4,E+1.45,M,.09,2.9,.09,o,!0);e(b,E+2.9,M,3,.1,.12,s);let A=new Ze;A.position.set(b,E+2.8,M),h.add(A),e(0,-2.22,0,1.8,.12,.65,s,!1,A),e(0,-2.08,0,1.72,.18,.6,r,!1,A),e(0,-1.77,-.28,1.72,.55,.1,r,!1,A);for(let _ of[-.8,.8])e(_,-1.1,0,.018,2.2,.018,o,!1,A);let v={x:b,z:M,y:E,rotation:0,type:"sit",swingId:y};u.push(v),m.push({id:y,pivot:A,seat:v,position:new F})}p("roof",2,-7.2,7.2),p("garden",-9.5,22,0)}function v0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,root:f,seats:g,tree:x,plant:m,table:p,chair:y,sofa:b,rug:M}=i,E=r("\u77F3\u677F",12105124),A=r("\u571F\u58E4",4797222),v=r("\u53F6\u7EFF",5466941),_=r("\u6843\u82B1\u7C89",14655659),T=r("\u6A58\u5B50",15111730,{roughness:.65}),w=r("\u6843\u5B50",14983306),C=r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5}),I=[];f.userData.districtLabels=I;let B=(D,k,q,J)=>I.push({text:D,x:k,y:q,z:J});function P(D,k,q,J=_){n(D,k+.25,q,.016,.5,v);for(let oe=0;oe<5;oe++){let ve=oe*1.256;t(D+Math.sin(ve)*.065,k+.51,q+Math.cos(ve)*.065,.065,.035,.065,J)}t(D,k+.54,q,.035,.035,.035,T)}function L(D,k,q,J,oe=0){e(D,oe+.23,k,q,.46,J,o,!0),e(D,oe+.47,k,q-.14,.025,J-.14,A);for(let ve=0;ve<Math.floor(q*3);ve++)for(let be=0;be<2;be++)P(D-q/2+.22+ve*.32,oe+.48,k+(be-.5)*J*.48,ve%3?_:c)}function U(D,k,q,J=2.8){e(D,q+1.5,k,J,1.5,.11,l),e(D,q+1.5,k+.065,J-.12,1.37,.025,C),e(D,q+.35,k+.1,J+.6,.7,.6,o,!0)}M(-16,-13,7,7),b(-16,-11,Math.PI),p(-16,-13,2.5,1.1),U(-16,-17.6,0),m(-20,-16,.8),B("\u897F\u7FFC\u4F1A\u5BA2\u5385",-16,2.7,-17.3),e(0,.005,27,4,.05,6,E),e(-27,.005,5,3,.05,44,E);for(let D of[-10,10,18])L(D,26,D<0?2:4,1.5);for(let[D,k,q,J]of[[-28,9,w,"\u6843\u6811"],[-28,19,T,"\u6A58\u6811"],[28,25,T,"\u6A58\u6811"]]){x(D,k,.65);for(let oe=0;oe<22;oe++){let ve=oe*2.4,be=.85+oe%4*.22;t(D+Math.sin(ve)*be,2.6+oe%5*.29,k+Math.cos(ve)*be,.13,.15,.13,q)}B(J,D,1.5,k+2.1)}B("\u5730\u4E0B\u5BA4\u5165\u53E3 \u2193",-23.5,1.9,-5.8);let z=-3.6;e(-18,z-.1,-13,14,.2,12,a),e(-25,z+1.65,-13,.2,3.3,12,h,!0),e(-11,z+1.65,-13,.2,3.3,12,h,!0),e(-18,z+1.65,-19,14,3.3,.2,h,!0),e(-18,z+1.65,-7,14,3.3,.2,h,!0),e(-22.4,-2,-12,.1,3.2,10,h,!0);for(let D of[-17.8,-8.7])e(-18,z+1.5,D,.15,3,2.2,o,!0);for(let D of[-20.6,-13.2])e(D,z+1.5,-13,3.6,3,.15,h,!0);for(let D of[-21,-19.5]){for(let k=0;k<4;k++)e(D,z+.3+k*.6,-18.35,1.25,.07,.8,o);for(let k=0;k<3;k++)for(let q=0;q<2;q++)e(D+(q-.5)*.48,z+.53+k*.6,-18.3,.4,.38,.6,r("\u50A8\u7269\u7BB1",11047794))}B("\u50A8\u7269\u95F4",-20.2,z+2.4,-18.2);for(let D of[-15.6,-12.8]){p(D,-17.6,2.1,.9,z),e(D,z+1.22,-17.8,1.1,.66,.08,l),e(D,z+1.22,-17.75,1,.57,.025,r("\u7535\u7ADE\u5C4F\u5E55",7704504,{emissive:3697856,emissiveIntensity:.75})),e(D,z+.86,-17.35,.65,.035,.25,l),e(D+.83,z+.35,-17.6,.38,.7,.6,l),y(D,-16.5,Math.PI,z),g.push({x:D,z:-16.5,y:z,rotation:Math.PI,type:"sit"});for(let k=0;k<3;k++)n(D+.83,z+.25+k*.17,-17.28,.05,.02,u).rotation.x=Math.PI/2}B("\u7535\u7ADE\u623F",-14,z+2.5,-18.65);for(let D of[-21.8,-18.8]){e(D,z+.55,-12.2,.32,1.1,.35,l);for(let k of[.3,.7]){let q=n(D,z+k,-11.99,.1,.02,l);q.rotation.x=Math.PI/2}}n(-19.1,z+.85,-10.7,.025,1.7,l),t(-19.1,z+1.76,-10.7,.055,.11,.055,l),B("KTV \xB7 \u8F7B\u5531\u65F6\u5149",-20.2,z+2.5,-12.4),b(-14.3,-9.1,Math.PI,z),p(-14.3,-10.8,2,.9,z),U(-14,-12.5,z,2.5),B("\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,z+2.5,-12.4),f.userData.basementLight={x:-18,y:-1.3,z:-13};for(let D of[-21,-15])for(let k of[-17,-9])e(D,-.45,k,2.4,.04,.08,u);for(let D of[-18,-4])e(0,7.75,D,22,1.1,.04,d,!0),e(0,8.32,D,22,.045,.055,l);for(let D of[-11,11])for(let[k,q]of D===-11?[[-15.2,5.6],[-7.5,7]]:[[-11,14]])e(D,7.75,k,.04,1.1,q,d,!0),e(D,8.32,k,.055,.045,q,l);for(let D of[-8,-4,0,4])L(D,-17,2.8,.9,7.2);for(let D of[-14,-8])L(-10,D,.9,2.5,7.2);p(-4,-10,2.5,1.3,7.2);for(let D of[-4.8,-3.2])y(D,-8.8,Math.PI,7.2),g.push({x:D,z:-8.8,y:7.2,rotation:Math.PI,type:"sit"});y(-4,-11.2,0,7.2),n(-4,8.14,-10,.18,.22,r("\u9752\u74F7",7903111));for(let D of[-4.7,-3.3])n(D,8.07,-10,.075,.12,c);for(let D=0;D<4;D++){let k=Math.PI/4+D*Math.PI/2;e(-4+Math.cos(k)*3.65,8.55,-10+Math.sin(k)*3.65,.085,2.7,.085,l,!0)}n(-4,10.04,-10,3.8,.12,l),n(-4,10.13,-10,3.65,.1,o,void 0,3.4),n(-4,9.975,-10,3.55,.025,u),e(3,7.43,-12,1.7,.46,2.1,o,!0),e(3,7.67,-12,1.55,.025,1.95,A),B("\u5929\u53F0\u8336\u5E2D",-4,8.8,-12),B("\u5929\u53F0\u82B1\u56ED",1,8.5,-16.5),e(0,-.01,40,10,.04,20,r("\u8857\u9053\u8DEF\u9762",6843751));for(let D of[-6,6])e(D,.015,40,2,.07,20,E);for(let D=32;D<49;D+=4)e(0,.025,D,.12,.008,1.5,c);let W=[];f.userData.vendors=W;for(let D of[-1,1])for(let k=0;k<3;k++){let q=D*10,J=33.5+k*5,oe=r("\u644A\u68DA"+k,[12088147,6651502,13743485][k]);e(q,.6,J,3,1.2,1.4,o,!0),e(q,1.25,J,3.15,.1,1.5,a);for(let be of[-1.5,1.5])for(let ne of[-.9,.9])e(q+be,1.3,J+ne,.055,2.6,.055,l);let ve=e(q,2.65,J,3.5,.12,2.25,oe);ve.rotation.z=D*.06;for(let be=0;be<12;be++){let ne=q-1.15+be%4*.7,ge=J-.45+Math.floor(be/4)*.45;k===2?P(ne,1.3,ge):t(ne,1.42,ge,.18,.13,.16,k===0?T:w)}B(["\u65F6\u4EE4\u9C9C\u679C","\u4E61\u6751\u70B9\u5FC3","\u82B1\u8349\u5C0F\u94FA"][k],q,2.25,J+1),W.push({x:q+D*2,z:J,rotation:-D*Math.PI/2})}B("\u4E61\u95F4\u96C6\u5E02 \xB7 \u5411\u524D\u5230\u6CB3\u5CB8",0,3,31),B("\u6CB3\u7554\u6B65\u9053",0,2.8,48),e(0,.01,48,68,.06,3,E),e(0,-.035,55,130,.05,10,r("\u6CB3\u6C34",5406329,{roughness:.15,metalness:.45}));for(let D=0;D<20;D++)e(-58+D*6,-.004,52+D%3*2,2.5,.007,.035,r("\u6CB3\u9762\u6CE2\u7EB9",9744034,{transparent:!0,opacity:.4,depthWrite:!1}));for(let D of[49.6,60.5]){e(0,.9,D,70,.05,.06,l,!0);for(let k=-34;k<=34;k+=2)e(k,.45,D,.04,.9,.04,l)}e(0,.015,62,130,.07,3,E)}function y0(i){let{box:e,ell:t,cyl:n,branch:s,mat:r,wood:o,oak:a,linen:c,dark:l,plaster:h,lightmat:u,glass:d,architecture:f,root:g,roofs:x,obstacle:m,seats:p}=i,y=r("\u8C61\u7259\u74F7",15526366,{roughness:.2}),b=r("\u62C9\u4E1D\u4E0D\u9508\u94A2",9542557,{metalness:.88,roughness:.24}),M=r("\u7535\u5668\u9762\u677F",1383712,{metalness:.35,roughness:.1}),E=r("\u9EC4\u94DC",10521429,{metalness:.8,roughness:.27});function A(P,L,U,z,W,D,k,q=.08,J=f){let oe=new Pe(new ls(z,W,D,4,q),k);return oe.position.set(P,L,U),oe.castShadow=!0,oe.receiveShadow=!0,J.add(oe),oe}function v(P,L,U,z=.15,W=.4,D=y){let k=[];for(let J=0;J<=12;J++){let oe=J/12;k.push(new ce(z*(.65+Math.sin(oe*Math.PI)*.35)*(oe>.8?.7:1),oe*W))}let q=new Pe(new Jo(k,24),D);q.position.set(P,L,U),q.castShadow=!0,f.add(q)}function _(P,L,U=3,z=2.85){e(P,z,L,U,.075,.14,l),e(P,z-.044,L,U-.07,.018,.09,u);for(let W of[-1,1])n(P+W*U*.37,(z+3.3)/2,L,.009,3.3-z,l)}function T(P,L,U,z=30,W=4){let D=new ei(16767664,z,W,2);D.position.set(P,L,U),g.add(D)}function w(P,L,U){n(P,L,U,.18,.018,y),n(P,L+.013,U,.13,.007,y),n(P+.29,L+.075,U-.12,.06,.15,d),e(P-.25,L+.016,U,.024,.016,.28,b),e(P+.23,L+.016,U,.018,.016,.25,b)}for(let P of[-21,21])e(P,1.7,3.8,.23,3.4,3.6,h,!0);for(let P of[-20,20])e(P,1.7,7,1.8,3.4,.22,h,!0);e(10.93,5.3,-15.4,.22,3.4,5.2,h,!0),e(-7,5.3,-18,7.5,3.4,.23,h,!0),A(4.9,.5,-16.5,3.9,1,1.1,o,.06),m(4.9,-16.5,3.9,1.1,0,1),A(4.9,1.05,-16.5,4.1,.1,1.25,y,.04),A(4.1,1.4,-16.6,.8,.6,.5,M,.04);for(let P of[3.85,4.35])n(P,1.16,-16.2,.08,.15,y),e(P,1.5,-16.3,.12,.05,.15,b);for(let P of[4,5,6])n(P,.67,-14.9,.28,.12,o),n(P,.32,-14.9,.035,.65,b),n(P,.04,-14.9,.25,.05,b),p.push({x:P,z:-14.9,y:0,rotation:Math.PI,type:"sit"});_(4.9,-16.5,3.5),e(2.8,1.85,-10,.08,1.6,2.8,l),e(2.75,1.85,-10,.025,1.46,2.65,r("\u7535\u89C6\u753B\u9762",7574929,{emissive:3233363,emissiveIntensity:.5})),A(2.9,.32,-10,.65,.64,3.3,o,.05),m(2.9,-10,.65,3.3,0,.7);for(let P of[13.7,15,16.3])for(let L of[-5.65,-4.95])w(P,.822,L);v(15,.82,-5.3,.17,.45);for(let P=0;P<5;P++)s([15,.98,-5.3],[15+Math.sin(P)*.25,1.6+Math.cos(P)*.1,-5.3+Math.cos(P)*.2],.008,o);_(15,-5.3,3.5),T(15,2.4,-5.3,22,9),_(-6,-13.6,3.4),T(-6,2.5,-14.5,25,9),_(-17,1,2.4);for(let P=-9.5;P<=-4.5;P+=.85)e(P,.46,-16.225,.025,.8,.015,l),e(P+.25,.77,-16.2,.3,.018,.018,l);A(-8,.98,-16.9,1.05,.035,.65,b,.045),A(-8,1,-16.9,.88,.022,.5,M,.05);let C=new Pe(new Li(.17,.022,10,24,Math.PI),b);C.position.set(-8,1.25,-17.14),f.add(C),n(-8.17,1.13,-17.14,.025,.26,b),n(-7.83,1.2,-17.14,.023,.1,b),A(-5.2,1,-16.9,1.35,.03,.75,M,.035);for(let P of[-5.6,-4.8])for(let L of[-16.7,-17.1]){let U=new Pe(new Li(.13,.006,6,24),b);U.rotation.x=Math.PI/2,U.position.set(P,1.021,L),f.add(U)}e(-5.2,.47,-16.19,1.05,.65,.07,M),e(-5.2,.66,-16.12,.8,.035,.035,b),e(-5.2,2.65,-16.9,1.6,.13,.9,b),e(-5.2,2.96,-17,.45,.55,.45,b),A(-6.85,1.23,-16.9,.42,.52,.42,M,.035),e(-6.85,1.4,-16.65,.3,.12,.025,b),v(-6.85,1,-16.57,.065,.12),v(-6,1,-13.6,.3,.16,o);for(let P=0;P<5;P++)t(-6+Math.sin(P)*.15,1.18,-13.6+Math.cos(P)*.15,.09,.09,.09,r("\u6C34\u679C",14459474));for(let P of[-7.3,-6,-4.7]){A(P,.6,-12.3,.48,.09,.48,l,.07);for(let L of[-.17,.17])for(let U of[-.17,.17])e(P+L,.3,-12.3+U,.035,.6,.035,l);m(P,-12.3,.5,.5,0,.65)}A(-17,.85,1,2.2,.07,1.1,a,.06),e(-17.25,1.27,.73,.86,.5,.045,l),e(-17.25,1.28,.759,.8,.44,.015,r("\u5C4F\u5E55",4546401,{emissive:1717560,emissiveIntensity:.15})),e(-17.25,1,.72,.06,.28,.06,l),A(-17.25,.9,.78,.42,.025,.25,l,.02),A(-17.25,.908,1.14,.65,.023,.22,l,.02);for(let P=0;P<12;P++)for(let L=0;L<3;L++)e(-17.54+P*.05,.925,1.07+L*.05,.036,.008,.035,r("\u952E\u5E3D",8819082));A(-16.48,.9,1.04,.4,.035,.28,b,.015);let I=e(-16.48,1.04,.89,.4,.28,.025,l);I.rotation.x=-.2,v(-17.83,.9,1.24,.065,.12),n(-18,.94,.66,.12,.04,E),s([-18,.95,.66],[-18,1.65,.66],.018,l),t(-18,1.67,.76,.2,.08,.16,l),T(-18,1.52,.8,2,2.5),e(20.84,1.8,1,.06,1.3,2.3,l),e(20.8,1.8,1,.025,1.17,2.15,M),A(20.2,.35,1,.9,.7,3.5,o,.06),m(20.2,1,.9,3.5,0,.7);for(let P of[-.6,0,.6])v(P,.81,-12.5,.12,.25);e(0,2,-17.32,2.6,1.3,.08,o),e(0,2,-17.265,2.45,1.15,.02,y);for(let P=0;P<7;P++){let L=t(-1+P*.3,1.9+Math.sin(P)*.1,-17.24,.32,.22+Math.sin(P)*.08,.013,r("\u6C34\u58A8\u753B",7437429))}let B=3.6;e(5,B+.02,-16,3.5,.04,3.5,h),A(4.7,B+.34,-16.7,2.35,.67,1.05,y,.22),A(4.7,B+.69,-16.7,1.96,.025,.73,r("\u6D74\u7F38\u5185\u6C34",7310468,{metalness:.2,roughness:.1}),.2),m(4.7,-16.7,2.35,1.05,B,.7),n(5.93,B+.58,-16.7,.025,1.16,b),s([5.93,B+1.16,-16.7],[5.65,B+1.16,-16.7],.025,b),A(3.7,B+.72,-14.2,1,.15,.65,y,.09),e(3.7,B+.36,-14.2,.95,.7,.6,o),m(3.7,-14.2,1,.65,B,.8),e(3.12,B+1.55,-14.2,.05,1.05,.8,b),A(4.8,B+.24,-14.3,.48,.48,.65,y,.14),A(4.8,B+.51,-14.3,.48,.06,.63,y,.16),e(4.8,B+.68,-14.6,.48,.55,.15,y),m(4.8,-14.3,.5,.7,B,.95);for(let P of[-16.8,-15.6,-14.4])e(-10.55,4.9,P,.55,2.6,1.15,o,!0),e(-10.24,4.9,P,.03,.6,.025,E);for(let P of[-9.65,-6.35])A(P,3.91,-16.2,.65,.62,.62,a,.05),v(P,4.23,-16.2,.09,.2,E),t(P,4.52,-16.2,.18,.19,.18,c),T(P,4.5,-16.2,3,4);for(let P of[10,12.8,15.6]){let L=new Ze;f.add(L),L.position.set(15.1,0,P),L.rotation.y=-Math.PI/2,A(0,.39,0,.86,.15,2.2,o,.04,L),A(0,.51,.38,.81,.15,1.4,c,.07,L);let U=A(0,.83,-.64,.81,.15,.95,c,.07,L);U.rotation.x=-.55;for(let z of[-.33,.33])for(let W of[-.75,.8])e(z,.18,W,.06,.36,.06,l,!1,L);m(15.1,P,2.2,.86,0,.9),p.push({x:15.1,z:P,y:0,rotation:-Math.PI/2,type:"lie",outdoor:!0})}A(-10,.43,18,3,.14,.62,o,.045);for(let P of[-11,-9])e(P,.2,18,.09,.4,.48,l);p.push({x:-10,z:18,y:0,rotation:0,type:"sit"});for(let P of[4.5,11.5])for(let L of[9.6,14.4])e(P,1.5,L,.1,3,.1,l,!0);e(8,3,9.6,7.2,.16,.14,o,!1,x),e(8,3,14.4,7.2,.16,.14,o,!1,x);for(let P=4.5;P<=11.5;P+=.28)e(P,3.12,12,.085,.18,5,o,!1,x);for(let P=17;P<=25;P+=.16)e(P,.85,21,.055,1.7,.12,o);e(21,.32,21,8.2,.06,.14,l);for(let P of[-20,-12,12,20])e(P,2.6,7.08,.06,.34,.08,l),T(P,2.4,7.3,4,4);for(let P of[-16,0,16])T(P,2.6,P===0?-10:0,24,11)}function M0(i={}){i={...l0(),...i},Ps.length=0;let e=new Ze,t=new Ze,n=new Ze;e.add(t,n);let s=[],r=[],o=[],a=!1,c={},l=(N,V,H={})=>c[N]||(c[N]=i[N]||new tt({name:N,color:V,roughness:.8,...H})),h=l("\u80E1\u6843\u6728",7950391),u=l("\u6D45\u6A61\u6728",11700827),d=l("\u7C73\u8272\u5899\u9762",16774889),f=l("\u6DF1\u7070\u74E6",3160892),g=l("\u77F3\u6750",9278086),x=l("\u77F3\u677F",12105124),m=l("\u8349\u5730",5663044),p=l("\u6DF1\u8272\u91D1\u5C5E",2370860),y=l("\u4E9A\u9EBB\u5E03",14997432),b=l("\u571F\u58E4",4797222),M=l("\u6696\u5149",16768160,{emissive:16758368,emissiveIntensity:2}),E=l("\u73BB\u7483",hh.color,hh),A=[];function v(N,V,H,$,K,ue,he,me=!1,de=t,G=!0){if(G&&K<.45&&$>.5&&ue>.5&&(Math.abs(V+3.7)<.25||Math.abs(V)<.5||Math.abs(V-3.5)<.25||Math.abs(V-7.1)<.2)){let Qe=Gm(N,H,$,ue);if(Qe.length!==1||Qe[0].w!==$||Qe[0].d!==ue){let O;for(let S of Qe)O=v(S.x,V,S.z,S.w,K,S.d,he,me,de,!1)||O;return O}}let Xe=new Pe(he===y||he.name==="\u9760\u6795"||he.name==="\u5E8A\u88AB"?new ls($,K,ue,3,Math.min($,K,ue)*.22):new Vt($,K,ue),he);return Xe.position.set(N,V,H),Xe.castShadow=!0,Xe.receiveShadow=!0,(a?n:de).add(Xe),me&&(ai(N,H,$,ue,V-K/2,K),A.push(Xe)),Xe}function _(N,V,H,$,K,ue,he,me=t){let de=new Pe(new on(1,16,12),he);return de.position.set(N,V,H),de.scale.set($,K,ue),de.castShadow=!0,de.receiveShadow=!0,me.add(de),de}function T(N,V,H,$,K,ue,he=t,me=$){let de=new Pe(new En(me,$,K,24),ue);return de.position.set(N,V,H),de.castShadow=!0,de.receiveShadow=!0,he.add(de),de}function w(N,V,H,$=h){let K=new F(...V).sub(new F(...N)),ue=T(...new F(...N).addScaledVector(K,.5).toArray(),H,K.length(),$,t,H*.65);return ue.quaternion.setFromUnitVectors(new F(0,1,0),K.normalize()),ue}let C=23,I=()=>(C=C*16807%2147483647,(C-1)/2147483646),B=[l("\u677E\u53F6",3429180),l("\u53F6\u7EFF",5466941),l("\u6D45\u53F6",7571027),l("\u67AB\u53F6",10900534)];function P(N,V,H=1,$=!1){s.push({x:N,z:V,height:H*7.5,rotation:I()*6.28})}function L(N,V,H=.6,$=0){r.push({x:N,z:V,y:$,height:H*1.3})}function U(N,V){v(N,.48,V,.24,.85,.24,p),v(N,.56,V,.27,.3,.27,M),v(N,.78,V,.4,.08,.4,p)}let z=l("\u9EC4\u571F\u5730",11836008);v(-57.25,-.3,0,65.5,.4,180,z),v(33.75,-.3,0,112.5,.4,180,z),v(-23.5,-.3,-53.5,2,.4,73,z),v(-23.5,-.3,41.5,2,.4,97,z),v(-28.75,-.25,5,8.5,.4,50,m),v(5.25,-.25,5,55.5,.4,50,m),v(-23.5,-.25,-18.5,2,.4,3,m),v(-23.5,-.25,11.5,2,.4,37,m);let W=v(0,-.13,-55,170,.08,48,l("\u8FDC\u6E56",8301218,{roughness:.17,metalness:.35}));for(let N=0;N<38;N++){let V=N/38*Math.PI*2,H=Math.cos(V)*(33+I()*13),$=Math.sin(V)*(31+I()*13);!($>29&&Math.abs(H)<14)&&!(H>33&&$>0)&&P(H,$,1.1+I()*1.2)}v(0,-.025,1.5,21.8,.05,11,x),v(0,0,18,4,.045,14,x);for(let N=-9;N<=9;N+=2)for(let V=-2;V<7;V+=2)v(N,.007,V,1.97,.035,1.97,x);for(let N of[-5.2,5.2]){v(N,.044,1.5,6.1,.04,6.2,m);for(let V of[-1,1])v(N+V*3.15,.049,1.5,.13,.06,6.4,d);for(let V of[-1.65,4.65])v(N,.049,V,6.4,.06,.13,d)}for(let N=0;N<10;N++)v(-1.5+N%2*.05,.03,8+N*1.4,2.8,.06,1.05,g);v(0,1,-20,66,2,.4,g,!0),v(-33,1,5,.4,2,50,g,!0),v(33,1,5,.4,2,50,g,!0);for(let N of[-19.5,19.5])v(N,.9,30,27,1.8,.4,g,!0);function D(N,V,H,$=0,K=-6){let ue=(Array.isArray(K)?K:[K]).sort((de,G)=>de-G),he=[],me=V;for(let de of ue)de+1.7<V||de-1.7>H||(he.push([me,Math.max(me,de-1.7)]),me=Math.min(H,de+1.7));he.push([me,H]);for(let[de,G]of he)if(!(G-de<.05)){v(N,$+1.65,(de+G)/2,.07,3.3,G-de,E,!0);for(let Xe=de;Xe<=G;Xe+=1.6)v(N,$+1.7,Xe,.12,3.4,.07,p)}v(N,$+3.35,(V+H)/2,.2,.18,H-V,p)}function k(N,V,H,$,K=0,ue=!1){if(v(N,K-.09,V,H,.18,$,u),N===-16&&V===-.5)for(let he of[-3.75,3.75])v(N+he,K+1.65,V-$/2,2.5,3.3,.065,E,!0);else v(N,K+.35,V-$/2,H,.7,.22,d,!0),v(N,K+2.05,V-$/2,H,2.7,.065,E,!0);for(let he=N-H/2;he<=N+H/2;he+=2)v(he,K+1.7,V-$/2,.065,3.4,.16,p);for(let he of[-1,1]){D(N+he*H/2,V-$/2,V+$/2,K,ue?-6:he*N<0?[-6,0]:0);let me=(H-5)/2;v(N+he*(2.5+me/2),K+1.62,V+$/2,me,3.24,.045,E,!0);for(let de=0;de<3;de++)v(N+he*(2.5+de*me/2),K+1.65,V+$/2,.055,3.3,.14,p)}v(N,K+3.36,V+$/2,H,.18,.2,p),!ue&&N!==-16&&N!==16&&q(N,V,H+1.5,$+1.5,K+3.55,.25)}function q(N,V,H,$,K,ue){a=!0;let he=v(N,K,V,H,.18,$,f);he.geometry.dispose(),he.geometry=new ls(H,.18,$,3,.07),v(N,K+.13,V,H-.6,.08,$-.6,f),v(N,K-.13,V,H-.2,.1,$-.2,h),v(N,K-.06,V,H-.14,.04,$-.14,p);for(let me of[-1,1])v(N+me*H/2,K,V,.12,.32,$,p);for(let me of[-1,1])v(N,K,V+me*$/2,H,.32,.12,p);v(N,K-.19,V+$/2-.25,H-.5,.025,.035,M),a=!1}k(0,-11,22,14,0,!0),v(-1,3.51,-11,20,.18,14,u),v(10.75,3.51,-11,.5,.18,14,u),v(9.75,3.51,(-18+ur.z1)/2,1.5,.18,ur.z1+18,u),v(9.75,3.51,(ur.z2-4)/2,1.5,.18,-4-ur.z2,u),v(0,3.95,-18,22,.7,.24,d,!0),v(0,5.7,-18,22,2.8,.06,E,!0);for(let N=-11;N<12;N+=2)v(N,5.3,-18,.06,3.4,.16,p);for(let N of[-11,11])if(N===-11){for(let[V,H]of[[-18,-10-vi/2],[-10+vi/2,-4]])v(N,5.3,(V+H)/2,.06,3.4,H-V,E,!0);v(N,6.4,-10,.12,1.2,vi,d,!0)}else{v(N,5.3,-12.15,.06,3.4,11.7,E,!0),v(N,5.3,-4.05,.06,3.4,.1,E,!0),v(N,6.5,-5.15,.12,1,2.3,d,!0);for(let V=-18;V<=-7;V+=2)v(N,5.3,V,.16,3.4,.06,p)}for(let N=-10;N<11;N+=2)v(N,5.15,-4,1.93,3,.05,E,!0),v(N+1,5.2,-4,.07,3.2,.12,p,!0);a=!0,v(-2,7.1,-11,18,.2,14,x),v(9.75,7.1,-11,2.5,.2,14,x),v(7.75,7.1,-16.5,1.5,.2,3,x),v(7.75,7.1,-5,1.5,.2,2,x),a=!1;for(let N of[-9,-5,5,9])v(N,1.7,-2.7,.18,3.4,.18,h,!0);a=!0,v(0,3.3,-2.7,23,.15,2.8,h),a=!1,k(-16,-.5,10,15),k(-16,-13.5,10,11),k(16,-.5,10,15);for(let N of[-3,3])v(N,5.3,-13,.16,3.4,10,d,!0);for(let[N,V,H]of[[-11,-3,-7],[-3,3,0]]){for(let[$,K]of[[N,H-Ln/2],[H+Ln/2,V]])v(($+K)/2,5.3,-8,K-$,3.4,.16,d,!0);v(H,6.4,-8,Ln,1.2,.16,d,!0)}for(let N of[ur,If,hr]){let V=(N.x1+N.x2)/2,H=N.x2-N.x1,$=(N.z2-N.z1)/28;for(let K=0;K<28;K++){let ue=N.z2-(K+.5)*$,he=N.base+(N.reverse?28-K:K+1)*3.6/28;v(V,he-.065,ue,H,.13,$+.006,u)}for(let K of[N.x1-.07,N.x2+.07]){w([K,N.base+.9+(N.reverse?3.6:0),N.z2],[K,N.base+.9+(N.reverse?0:3.6),N.z1],.022,p);for(let ue=0;ue<28;ue++){let he=N.z2-(ue+.5)*$,me=N.base+(N.reverse?28-ue:ue+1)*3.6/28;v(K,me+.45,he,.035,.9,.035,p),ai(K,he,.035,$,me,.95)}}}function J(N,V,H,$,K=0){v(N,K+.017,V,H,.035,$,l("\u5730\u6BEF",12827300));for(let ue=0;ue<8;ue++)v(N-H/2+.1+ue*.055,K+.04,V,.025,.01,$,y)}function oe(N,V,H=2,$=1,K=0){H/=De,$/=De,v(N,K+.75,V,H,.11,$,h,!0);for(let ue of[-1,1])for(let he of[-1,1])v(N+ue*(H/2-.15),K+.35,V+he*($/2-.12),.1,.7,.1,h)}function ve(N,V,H=0,$=0){let K=new Ze;t.add(K),v(0,.46,0,.7,.16,.7,y,!1,K),v(0,.88,-.32,.7,.75,.1,h,!1,K);for(let ue of[-1,1])for(let he of[-1,1])v(ue*.27,.2,he*.27,.07,.4,.07,h,!1,K);K.scale.set(1/De,1,1/De),K.position.set(N,$,V),K.rotation.y=H,ai(N,V,.7/De,.7/De,$,1.2)}function be(N,V,H=0,$=0){o.push({x:N,z:V,y:$,rotation:H,type:"sit"});let K=new Ze;t.add(K),v(0,.32,0,3.4,.45,1.3,h,!1,K);for(let ue=-1;ue<=1;ue++){v(ue*1.05,.64,0,1.025,.31,1.12,y,!1,K);let he=v(ue*1.05,1.06,-.47,1.04,.73,.29,y,!1,K);he.rotation.x=-.12}for(let ue of[-1,1]){v(ue*1.62,.8,0,.22,.7,1.3,y,!1,K);let he=v(ue*.9,.96,-.25,.65,.5,.18,l("\u9760\u6795",9601640),!1,K);he.rotation.z=ue*.12}K.scale.set(1/De,1,1/De),K.position.set(N,$,V),K.rotation.y=H,ai(N,V,(H?1.3:3.4)/De,(H?3.4:1.3)/De,$,1.2)}function ne(N,V,H=7,$=0,K=0){let ue=t.children.length,he=Ps.length;v(N,$+1.6,V,H,3.2,.42,h,!0);for(let me=0;me<6;me++){v(N,$+.15+me*.53,V+.3,H,.07,.64,u);for(let de=0;de<H*8;de++){if((de+Math.floor(me/2)*9)%29>17)continue;let G=.23+I()*.2;v(N-H/2+.1+de*.123,$+.21+me*.53+G/2,V+.28,.07+I()*.035,G,.25,l("\u4E66"+de%7,[6707526,12627070,3953490,9129531,14274224,4475712,8290393][de%7]))}}for(let me=0;me<5;me++)v(N,$+.67+me*.53,V+.35,H-.1,.017,.025,M);for(let me=-H/2;me<=H/2;me+=H/5)v(N+me,$+1.6,V+.15,.08,3.2,.6,u);if(K){let me=new Ze;for(let de of t.children.slice(ue))de.position.x-=N,de.position.z-=V,me.add(de);me.position.set(N,0,V),me.rotation.y=K,t.add(me);for(let de of Ps.slice(he)){let G=[[de.x1,de.z1],[de.x1,de.z2],[de.x2,de.z1],[de.x2,de.z2]].map(([Xe,Qe])=>[N+(Xe-N)*Math.cos(K)+(Qe-V)*Math.sin(K),V-(Xe-N)*Math.sin(K)+(Qe-V)*Math.cos(K)]);de.x1=Math.min(...G.map(Xe=>Xe[0])),de.x2=Math.max(...G.map(Xe=>Xe[0])),de.z1=Math.min(...G.map(Xe=>Xe[1])),de.z2=Math.max(...G.map(Xe=>Xe[1]))}}}ne(-20.6,-4.7,3.8,0,Math.PI/2),J(-16,.5,7,8),oe(-17,1,2.2,1.1),ve(-17,2.1,Math.PI),be(-14,-3),oe(-14,-1.2,1.7,.8),L(-20,5),L(-12,-6),v(-17,.845,1,1,.03,.55,y),v(-17,.87,1,.025,.015,.55,p),ai(-20,.3,1.1,3,0,2.8),J(16,1,7,7),be(17,1,Math.PI/2),oe(18.7,1,1,2.1),L(12,5),L(20,-6),oe(15,-5.3,3.8,1.35);for(let N of[13.7,15,16.3])ve(N,-4.2,Math.PI),ve(N,-6.5);v(-7,.45,-16.9,6,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),v(-7,.93,-16.9,6,.08,1.4,l("\u53A8\u623F\u77F3\u6750")),c0({box:v,mat:l,dark:p,lightmat:M}),v(-6,.45,-13.6,4.4,.9,1.3,l("\u53A8\u623F\u67DC\u4F53"),!0),v(-6,.94,-13.6,4.6,.09,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let N of[-8.26,-3.74])v(N,.47,-13.6,.08,.94,1.5,l("\u53A8\u623F\u77F3\u6750"));for(let N=-7.5;N<-4;N+=.75)v(N,.46,-12.94,.015,.78,.012,p);L(-10,-5),J(0,-11,5.5,5.5),be(-1.3,-10,Math.PI/2),oe(.5,-10,1,2),ne(-.3,-17.5,4),ve(-3.9,-10),oe(-4,-9,1,1);function ge(N,V,H=3,$=3.6){o.push({x:N,z:V,y:$,rotation:0,type:"lie"}),v(N,$+.3,V,H,.6,3.6,h,!0),v(N,$+.64,V,H,.18,3.5,y),v(N,$+1,V-1.75,H,.9,.18,h,!0),v(N,$+.77,V+.45,H,.1,2.3,l("\u5E8A\u88AB",7900036));for(let K of[-1,1])v(N+K*H*.23,$+.8,V-1.13,H*.4,.2,.65,y)}ge(-8,-15.4,2.6),J(-7,-10.7,5,3.5,3.6),oe(-4.8,-17,1.5,.8,3.6),ve(-4.8,-16.2,Math.PI,3.6),L(-10,-17,.7,3.6),J(0,-10.5,4,3,3.6);for(let N=0;N<9;N++)v(-1+I()*2,3.78,-10+I(),.25,.32,.25,l("\u79EF\u6728"+N,[12419419,5536903,13875558][N%3]));v(8,0,12,8,.09,5,u);for(let N=0;N<22;N++)v(4.15+N*.35,.05,12,.02,.015,5,h);oe(8,12,2.2,1.2),ve(8,13.2,Math.PI),ve(8,10.8),ve(6.35,12,-Math.PI/2);let fe=l("\u9752\u74F7",7903111,{roughness:.23});T(8,.94,12,.19,.22,fe),_(8,1.08,12,.16,.07,.16,fe);for(let N of[7.4,8.6])T(N,.9,12,.095,.13,fe);for(let N of[12,15])v(N,.18,19,2.2,.36,3,h,!0),v(N,.38,19,2,.04,2.8,b);for(let N of[11.4,12,12.6])for(let V of[18,19,20])L(N,V,.35,.4);let Ne=l("\u6C60\u6C34",3636605,{transparent:!0,opacity:.76,roughness:.13,metalness:.38});_(-5,.015,10,4.3,.015,2.8,l("\u6C60\u5E95",2444099));let Oe=new Pe(new ko(1,64),Ne);Oe.rotation.x=-Math.PI/2,Oe.scale.set(4.05,2.6,1),Oe.position.set(-5,.23,10),e.add(Oe);for(let N=0;N<38;N++){let V=N/38*Math.PI*2;_(-5+Math.cos(V)*4.2,.12,10+Math.sin(V)*2.75,.45,.23,.36,g)}for(let N=0;N<7;N++){let V=I()*6.28,H=T(-5+Math.cos(V)*2.5,.245,10+Math.sin(V)*1.7,.25,.02,B[1])}_(-3.1,.12,10.7,.6,.2,.4,g),v(20.5,.04,11,7,.12,16,l("\u6CF3\u6C60\u84DD",5152430,{roughness:.16,metalness:.25}));for(let N of[16.8,24.2])v(N,.1,11,.4,.2,16.8,d);for(let N of[2.8,19.2])v(20.5,.1,N,7.8,.2,.4,d);for(let N of[18.5,20.5,22.5])v(N,.106,11,.05,.008,15,p);for(let N of[6,10,14,18])T(25,.65,N,.035,1.3,p),v(25,.65,N-1.9,.04,1.1,3.7,E);P(0,3,1.25),P(-12,14,1.2,!0),P(3,19,1,!0),P(23,-14,1.4),P(-23,12,1.2);for(let N=0;N<38;N++){let V=I()*6.28,H=Math.cos(V)*(2+I()),$=3+Math.sin(V)*(1.3+I());_(H,.17,$,.3+I()*.4,.25,.3+I()*.4,g)}for(let N of[-10,10,-23,23])for(let V of[-6,4,17])U(N,V);U(-2.3,20),U(2.3,20);for(let N of[-16,0,16]){let V=new ei(16763783,15,13,2);V.position.set(N,2.7,N===0?-11:0),e.add(V)}_0({box:v,cyl:T,mat:l,wood:h,linen:y,dark:p,glass:E,plaster:d,architecture:t,root:e,seats:o,obstacle:ai}),v0({box:v,ell:_,cyl:T,branch:w,mat:l,wood:h,oak:u,linen:y,dark:p,plaster:d,lightmat:M,glass:E,architecture:t,root:e,roofs:n,obstacle:ai,seats:o,tree:P,plant:L,table:oe,chair:ve,sofa:be,books:ne,rug:J}),y0({box:v,ell:_,cyl:T,branch:w,mat:l,wood:h,oak:u,linen:y,dark:p,plaster:d,lightmat:M,glass:E,architecture:t,root:e,roofs:n,obstacle:ai,seats:o}),jm({box:v,ell:_,cyl:T,branch:w,mat:l,wood:h,oak:u,linen:y,dark:p,glass:E,plaster:d,lightmat:M,architecture:t,root:e,seats:o,obstacle:ai,sofa:be,table:oe,chair:ve,books:ne,plant:L,rug:J}),Qm({box:v,ell:_,cyl:T,mat:l,architecture:t,seats:o,obstacle:ai}),$m({box:v,mat:l}),Km({box:v,cyl:T,ell:_,branch:w,mat:l,wood:h,oak:u,dark:p,glass:E,linen:y,lightmat:M,plaster:d,seats:o,obstacle:ai,plant:L}),v(-14.3,7.1,-11.7,8.1,.2,1.4,x);for(let N of[-12.4,-11])v(-14.3,7.85,N,8.1,1.3,.05,E,!0);o0({box:v,mat:l,branch:w,root:e}),t.updateMatrixWorld(!0);let He=new Map;t.traverse(N=>{if(!N.isMesh)return;let V=N.geometry.clone().applyMatrix4(N.matrixWorld);if(V.index||V.setIndex(Array.from({length:V.attributes.position.count},(he,me)=>me)),V.attributes.uv||V.setAttribute("uv",new Pt(new Float32Array(V.attributes.position.count*2),2)),N.material.userData.worldUV){let he=V.attributes.position,me=V.attributes.normal,de=V.attributes.uv;for(let G=0;G<he.count;G++){let Xe=Math.abs(me.getX(G)),Qe=Math.abs(me.getY(G)),O=Math.abs(me.getZ(G)),S=N.material.name==="\u8349\u5730"?3:2;de.setXY(G,(Xe>Qe&&Xe>O?he.getZ(G):he.getX(G))/S,(Qe>Xe&&Qe>O?he.getZ(G):he.getY(G))/S)}}V.computeBoundingSphere();let H=new F().setFromMatrixPosition(N.matrixWorld),$=r0(H.x,H.y,H.z,V.boundingSphere.radius>18),K=N.material.uuid+":"+$,ue=He.get(K)||{material:N.material,zone:$,geos:[]};ue.geos.push(V),He.set(K,ue)}),e.remove(t);let ht=new Ze;e.add(ht);for(let{material:N,zone:V,geos:H}of He.values()){let $=Ra(H,!1);if(!$)throw Error("\u6A21\u578B\u5408\u5E76\u5931\u8D25");let K=new Pe($,N);K.castShadow=N.name!=="\u73BB\u7483",K.receiveShadow=!0,K.name=N.name,K.userData.zone=V,K.frustumCulled=!0,ht.add(K),H.forEach(ue=>ue.dispose())}n.updateMatrixWorld(!0);let je=new Map;n.traverse(N=>{if(!N.isMesh)return;let V=je.get(N.material)||[],H=N.geometry.clone().applyMatrix4(N.matrixWorld);H.index||H.setIndex(Array.from({length:H.attributes.position.count},($,K)=>K)),V.push(H),je.set(N.material,V)}),n.clear();for(let[N,V]of je){let H=new Pe(Ra(V),N);H.castShadow=!0,H.receiveShadow=!0,H.name=N.name,n.add(H),V.forEach($=>$.dispose())}return{root:e,mats:c,pond:Oe,waterMat:Ne,plant:L,merged:ht,roofs:n,trees:s,plantSpots:r,seats:o}}function WM(i){return["pond","pool","river"].includes(i)?"water":["tea","rooftea"].includes(i)?"pavilion":["orchard","flowers","roofgarden"].includes(i)?"garden":["garage","market"].includes(i)?"building":"room"}var XM=[...gn.map((i,e)=>["office"+e,i.name,65,i.y,9.4,"office"]),...[["liftB","\u5730\u4E0B\u7535\u68AF\u5385",-3.6,"basement"],["liftG","\u4E00\u697C\u7535\u68AF\u5385",0,"ground"],["liftU","\u4E8C\u697C\u7535\u68AF\u5385",3.6,"upper"],["liftR","\u5929\u53F0\u7535\u68AF\u5385",7.2,"roof"]].map(([i,e,t,n])=>[i,e,-16.6,t,-11.7,n]),["entry","\u5EAD\u9662\u5165\u53E3",0,0,27,"ground"],["hall","\u4E00\u697C\u5BA2\u5385",0,0,-8,"ground"],["coffee","\u5496\u5561\u5427",5,0,-13.5,"ground"],["kitchen","\u53A8\u623F",-3.5,0,-14.8,"ground"],["library","\u4E66\u623F",-17,0,2.8,"ground"],["annex","\u897F\u7FFC\u4F1A\u5BA2\u5385",-19,0,-15,"ground"],["dining","\u5BA2\u9910\u5385",12,0,3,"ground"],["tea","\u5EAD\u9662\u8336\u5E2D",8,0,14.1,"ground"],["pond","\u9526\u9CA4\u6C60",-5,0,13.55,"ground"],["pool","\u6CF3\u6C60",15.3,0,7.8,"ground"],["flowers","\u5EAD\u9662\u82B1\u5703",15,0,16.9,"ground"],["orchard","\u679C\u56ED",-28,0,11,"ground"],["garage","\u8D8A\u91CE\u8F66\u8F66\u5E93",-14.3,0,23,"ground"],["swing","\u5EAD\u9662\u79CB\u5343",-9.5,0,23.4,"ground"],["market","\u8857\u9053\u96C6\u5E02",0,0,36,"ground"],["river","\u6CB3\u7554\u6B65\u9053",0,0,48,"ground"],["playterrace","\u513F\u7AE5\u6E38\u4E50\u9633\u53F0",13,3.6,-5,"upper"],["balcony","\u4E3B\u5367\u5C4B\u9876\u9633\u53F0",-16,3.6,-10,"upper"],["master","\u4E8C\u697C\u4E3B\u5367",-7,3.6,-9,"upper"],["child","\u513F\u7AE5\u623F",0,3.6,-8.9,"upper"],["bath","\u4E8C\u697C\u536B\u6D74",6,3.6,-15.4,"upper"],["rooftea","\u5929\u53F0\u8336\u4EAD",-4,7.2,-7.8,"roof"],["roofgarden","\u5929\u53F0\u82B1\u56ED",3,7.2,-10,"roof"],["roofswing","\u5929\u53F0\u79CB\u5343",2,7.2,-5.5,"roof"],["storage","\u5730\u4E0B\u50A8\u7269\u95F4",-20,-3.6,-15,"basement"],["games","\u7535\u7ADE\u623F",-14,-3.6,-15,"basement"],["ktv","KTV",-20,-3.6,-11.7,"basement"],["cinema","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",-14,-3.6,-11.7,"basement"]].map(([i,e,t,n,s,r])=>({id:i,name:e,x:t,y:n,z:s,level:r}));function S0({dialog:i,host:e,list:t,tabs:n,onTeleport:s,onOpen:r,onClose:o}){let a,c,l,h=[],u="ground",d=.45,f=.85,g=1,x=0,m,p=!1,y=document.createElement("div");y.className="guide-labels",e.append(y);let b=[],M=new F,E=new oa,A=new ce;function v(B,P,L,U,z,W,D){let k=new Pe(new Vt(U,z,W),new tt({color:D,roughness:.85}));return k.position.set(B,P,L),c.add(k),k}function _(){if(!i.open)return;let B=e.clientWidth,P=e.clientHeight;a.setSize(B,P,!1),l.aspect=B/P,l.updateProjectionMatrix();let L=(u==="ground"?95:u==="office"?65:30)*g;l.position.copy(M).add(new F(Math.sin(d)*Math.cos(f)*L,Math.sin(f)*L,Math.cos(d)*Math.cos(f)*L)),l.lookAt(M),a.render(c,l);let U=[];for(let z of b){let W=z.marker.position.clone().project(l),D=z.button.offsetWidth||80,k=24,q=Math.max(D/2,Math.min(B-D/2,(W.x*.5+.5)*B)),J=Math.max(0,Math.min(P-k,(-W.y*.5+.5)*P));for(let oe=0;oe<30&&U.some(ve=>Math.abs(ve.x-q)<(ve.w+D)/2+3&&Math.abs(ve.y-J)<k);oe++)J+=k+3,J>P-k&&(J=0,q=Math.max(D/2,Math.min(B-D/2,q+D+6)));U.push({x:q,y:J,w:D}),z.button.style.left=q+"px",z.button.style.top=J+"px",z.button.style.display=Math.abs(W.x)>1.1||Math.abs(W.y)>1.1?"none":""}x=requestAnimationFrame(_)}function T(B){u=B,g=1,h=[],b=[],y.replaceChildren(),c?.traverse(L=>{L.geometry?.dispose(),L.material&&L.material.dispose()}),c=new Zs,c.background=new Le("#172d29"),c.add(new nr(15855330,3691081,2.5));let P=new rs(16768704,3);if(P.position.set(-20,40,20),c.add(P),u==="ground")M.set(0,0,13),v(0,-.7,12,68,1,78,5402714),v(0,1.8,-11,22,3.6,14,13025964),v(-16,1.5,-6,10,3,26,12298633),v(16,1.5,-.5,10,3,15,12298633),v(-17,1.5,20,8,3,8,9215634),v(0,.02,40,10,.12,20,10196356),v(0,.02,52,68,.12,6,5410715),v(20.5,.05,11,7,.15,16,5410715),v(-5,.05,10,8,.15,5,5410715);else if(u==="office"){M.set(58,8,15);for(let L of gn)v(58,L.y-.15,15,24,.15,22,9346438)}else M.set(u==="basement"?-18:0,0,u==="basement"?-13:-11),v(M.x,-.3,M.z,u==="basement"?14:22,.5,u==="basement"?12:14,9346438);u==="upper"&&(v(-16,-.3,-6,10,.5,26,12298633),v(16,-.3,-.5,10,.5,15,11914169)),t.replaceChildren();for(let L of XM.filter(U=>U.level===u)){let U=WM(L.id),z=U==="water"?new En(1.5,1.5,.12,32):U==="pavilion"?new mi(1.5,1,32):U==="garden"?new js(1.1,1):new Vt(2.3,U==="building"?1.4:.22,1.6),W=new Pe(z,new tt({color:U==="water"?6924730:U==="garden"?8890469:15714186,roughness:.8}));W.position.set(L.x,u==="ground"?4.1:u==="office"?L.y+.6:.5,L.z),U==="water"&&(W.scale.z=.65),W.userData.destination=L,c.add(W),h.push(W);let D=document.createElement("button");D.textContent=L.name,D.onclick=q=>{q.stopPropagation(),I(),s(L)},D.onpointerdown=q=>q.stopPropagation(),y.append(D),b.push({button:D,marker:W});let k=document.createElement("button");k.textContent=L.name+" \u2197",k.onclick=()=>{I(),s(L)},k.onmouseenter=()=>W.material.color.setHex(16777215),k.onmouseleave=()=>W.material.color.setHex(15714186),t.append(k)}n.querySelectorAll("button").forEach(L=>L.setAttribute("aria-pressed",String(L.dataset.level===u)))}function w(){a=new eo({antialias:!0,powerPreference:"low-power"}),a.setPixelRatio(Math.min(devicePixelRatio,1.25)),e.append(a.domElement),l=new Bt(48,1,.1,220),e.onpointerdown=B=>{m={x:B.clientX,y:B.clientY,sx:B.clientX,sy:B.clientY},p=!1,e.setPointerCapture(B.pointerId)},e.onpointermove=B=>{m&&(Math.hypot(B.clientX-m.sx,B.clientY-m.sy)>5&&(p=!0),p&&(d-=(B.clientX-m.x)*.006,f=en.clamp(f+(B.clientY-m.y)*.005,.3,1.45)),m.x=B.clientX,m.y=B.clientY)},e.onpointerup=B=>{if(!m||(m=null,p))return;let P=e.getBoundingClientRect();A.set((B.clientX-P.left)/P.width*2-1,-(B.clientY-P.top)/P.height*2+1),E.setFromCamera(A,l);let L=E.intersectObjects(h)[0];L&&(I(),s(L.object.userData.destination))},e.onpointercancel=()=>m=null,e.onwheel=B=>{B.preventDefault(),g=en.clamp(g+B.deltaY*.001,.5,1.8)},e.style.touchAction="none"}function C(){i.open||(r(),i.showModal(),a||w(),T(u),_())}function I(){i.close(),cancelAnimationFrame(x),m=null,o()}return n.querySelectorAll("button").forEach(B=>B.onclick=()=>T(B.dataset.level)),i.querySelector("[data-close]").onclick=I,i.addEventListener("cancel",B=>{B.preventDefault(),I()}),{open:C,close:I}}var Df={clear:"\u6674\u5929",rain:"\u96E8\u5929",snow:"\u96EA\u5929",wind:"\u5927\u98CE"};function b0(i,e){return(i+4)**2+(e+10)**2<3.8**2?10.2:i>-11&&i<11&&e>-18&&e<-4?7.2:i>-21&&i<-11&&e>-19&&e<7||i>11&&i<21&&e>-8&&e<7?3.8:i>-21.3&&i<-12.7&&e>15.7&&e<24.3?3.6:(i+4)**2+(e+10)**2<3.8**2?10.2:-.05}function T0(i,e){let t="clear",n={value:0},s={value:0},r={value:0},o=1e3,a=new Float32Array(o*6),c=Array.from({length:o},()=>({x:Math.random()*60-30,y:Math.random()*25,z:Math.random()*75-22})),l=new vt;l.setAttribute("position",new Pt(a,3));let h=new Ks(l,new Ii({color:12178911,transparent:!0,opacity:.55,depthWrite:!1}));h.frustumCulled=!1,i.add(h);let u=new Js(l,new Ss({color:15988474,size:.12,transparent:!0,opacity:.9,depthWrite:!1}));u.frustumCulled=!1,i.add(u);for(let m of Object.values(e.mats).filter(p=>!p.transparent&&!p.name.includes("\u5C4F\u5E55")&&!p.name.includes("\u7535\u89C6")))m.onBeforeCompile=p=>{p.uniforms.uSnow=r,p.vertexShader=`varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+p.vertexShader,p.vertexShader=p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSnowWorld=(modelMatrix*vec4(position,1.)).xyz;vSnowNormal=normalize(mat3(modelMatrix)*normal);`),p.fragmentShader=`uniform float uSnow; varying vec3 vSnowWorld; varying vec3 vSnowNormal;
`+p.fragmentShader,p.fragmentShader=p.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 vec3 p=vSnowWorld;p.xz/=${De.toFixed(8)};float cover=-.05;
 if(p.x>-11.&&p.x<11.&&p.z>-18.&&p.z< -4.)cover=7.2;
 if((p.x> -21.&&p.x< -11.&&p.z> -19.&&p.z<7.)||(p.x>11.&&p.x<21.&&p.z> -8.&&p.z<7.))cover=3.8;
 if(p.x> -21.3&&p.x< -12.7&&p.z>15.7&&p.z<24.3)cover=3.6;
 if(pow(p.x+4.,2.)+pow(p.z+10.,2.)<14.44)cover=10.2;
 float snowMask=smoothstep(.45,.85,vSnowNormal.y)*step(cover-.2,p.y)*uSnow;
 diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.92,.95,.98),snowMask*.95);`)},m.customProgramCacheKey=()=>"snow-exposure-v1",m.needsUpdate=!0;let d=new Set;function f(){i.traverse(m=>{if(!m.isInstancedMesh)return;let p=m.material;d.has(p)||(d.add(p),p.onBeforeCompile=y=>{y.uniforms.uWind=n,y.uniforms.uWeatherTime=s,y.vertexShader=`uniform float uWind;uniform float uWeatherTime;
`+y.vertexShader,y.vertexShader=y.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 transformed.x+=sin(uWeatherTime*2.0+position.y*.65)*uWind*min(max(position.y,0.)*.045,.28);`)},p.customProgramCacheKey=()=>"weather-wind-v1",p.needsUpdate=!0)})}function g(m){t=m,r.value=t==="snow"?1:0,n.value=t==="wind"?1:t==="rain"?.35:0,h.visible=t==="rain"||t==="wind",u.visible=t==="snow",h.material.opacity=t==="wind"?.16:.55,h.material.color.setHex(t==="wind"?13423030:12178911)}function x(m,p,y){if(s.value=p,t==="clear")return;let b=t==="wind"?160:o;l.setDrawRange(0,b*2);for(let M=0;M<b;M++){let E=c[M];E.y-=m*(t==="rain"?17:t==="snow"?1.6:1),E.x+=m*(t==="wind"?12:t==="snow"?Math.sin(p+M)*.6:3);let A=b0(E.x,E.z);(E.y<A||E.x>34||E.x<-34)&&(E.x=(Math.random()-.5)*66,E.z=Math.random()*72-22,E.y=12+Math.random()*15);let v=M*6;a[v]=E.x,a[v+1]=E.y,a[v+2]=E.z,a[v+3]=E.x+(t==="wind"?1.5:t==="rain"?.08:0),a[v+4]=Math.max(b0(E.x,E.z)+.03,E.y-(t==="rain"?.65:0)),a[v+5]=E.z}l.attributes.position.needsUpdate=!0}return g("clear"),{set:g,update:x,attachWind:f,get kind(){return t}}}function w0(i){let e=new Map,t=new Map,n=i.clone();return E0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function E0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)E0(i.children[n],e.children[n],t)}var dh=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new ph(t,ft.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ph(t,ft.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Qf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=os.extractUrlBase(e);o=os.resolveURL(l,this.path)}else o=os.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===I0){try{o[ft.KHR_BINARY_GLTF]=new ed(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ft.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ad(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ft.KHR_MATERIALS_UNLIT:o[u]=new Bf;break;case ft.KHR_DRACO_MESH_COMPRESSION:o[u]=new td(r,this.dracoLoader);break;case ft.KHR_TEXTURE_TRANSFORM:o[u]=new nd;break;case ft.KHR_MESH_QUANTIZATION:o[u]=new id;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function qM(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ft={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Of=class{constructor(e){this.parser=e,this.name=ft.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],_n);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new rs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ei(h),l.distance=u;break;case"spot":l=new ia(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Bf=class{constructor(){this.name=ft.KHR_MATERIALS_UNLIT}getMaterialType(){return Xt}extendParams(e,t,n){let s=[];e.color=new Le(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},zf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(r,r)}return Promise.all(s)}},Vf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Gf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Hf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SHEEN}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],_n)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Wf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Xf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_VOLUME}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],_n),Promise.all(s)}},qf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_IOR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],_n),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},Zf=class{constructor(e){this.parser=e,this.name=ft.EXT_MATERIALS_BUMP}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Kf=class{constructor(e){this.parser=e,this.name=ft.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,t){let n=Kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Jf=class{constructor(e){this.parser=e,this.name=ft.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$f=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},jf=class{constructor(e){this.parser=e,this.name=ft.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ph=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Qf=class{constructor(e){this.name=ft.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==li.TRIANGLES&&l.mode!==li.TRIANGLE_STRIP&&l.mode!==li.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ge,m=new F,p=new dn,y=new F(1,1,1),b=new ri(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,x.compose(m,p,y));for(let M in c)if(M==="_COLOR_0"){let E=c[M];b.instanceColor=new ys(E.array,E.itemSize,E.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Dt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},I0="glTF",Da=12,A0={JSON:1313821514,BIN:5130562},ed=class{constructor(e){this.name=ft.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==I0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Da,r=new DataView(e,Da),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===A0.JSON){let l=new Uint8Array(e,Da+o,a);this.content=n.decode(l)}else if(c===A0.BIN){let l=Da+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},td=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ft.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=rd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=rd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=so[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,_n,d)})})}},nd=class{constructor(){this.name=ft.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},id=class{constructor(){this.name=ft.KHR_MESH_QUANTIZATION}},mh=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+u;for(let M=0;M!==a;M++){let E=o[x+M+a],A=o[x+M+c]*h,v=o[g+M+a],_=o[g+M]*h;r[M]=y*E+b*A+m*v+p*_}return r}},YM=new dn,sd=class extends mh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return YM.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},C0={9728:zt,9729:yt,9984:fc,9985:Kr,9986:or,9987:Cn},R0={33071:kn,33648:Dr,10497:Qt},Nf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZM={CUBICSPLINE:void 0,LINEAR:qs,STEP:Xs},Uf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function fr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function $M(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jM(i){let e,t=i.extensions&&i.extensions[ft.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ff(t.attributes):e=i.indices+":"+Ff(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ff(i.targets[n]);return e}function Ff(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function od(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function QM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var eS=new Ge,ad=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new er(this.options.manager):this.textureLoader=new sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return fr(r,a,s),ki(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ft.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(os.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Nf[s.type],a=so[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Pt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Nf[s.type],l=so[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,b=t.cache.get(y);b||(x=new l(a,p*f,s.count*f/h),b=new kr(x,f/h),t.cache.add(y,b)),m=new Vr(b,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new Pt(x,c,g);if(s.sparse!==void 0){let p=Nf.SCALAR,y=so[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new y(o[1],b,s.sparse.count*p),A=new l(o[2],M,s.sparse.count*c);a!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let v=0,_=E.length;v<_;v++){let T=E[v];if(m.setX(T,A[v*c]),c>=2&&m.setY(T,A[v*c+1]),c>=3&&m.setZ(T,A[v*c+2]),c>=4&&m.setW(T,A[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=C0[d.magFilter]||yt,h.minFilter=C0[d.minFilter]||Cn,h.wrapS=R0[d.wrapS]||Qt,h.wrapT=R0[d.wrapT]||Qt,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==yt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new rn(x);m.needsUpdate=!0,d(m)}),t.load(os.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ki(u,o),u.userData.mimeType=o.mimeType||QM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ft.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ft.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ft.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ss,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Ii,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ft.KHR_MATERIALS_UNLIT]){let u=s[ft.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],_n),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=An);let h=r.alphaMode||Uf.OPAQUE;if(h===Uf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xt){let u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],_n)}return r.emissiveTexture!==void 0&&o!==Xt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&fr(s,u,r),u})}createUniqueName(e){let t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ft.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return P0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=jM(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[ft.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=P0(new vt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?KM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,y=l[f];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new No(x,y):new Pe(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?p.geometry=vf(p.geometry,Ta):m.mode===li.TRIANGLE_FAN&&(p.geometry=vf(p.geometry,$r));else if(m.mode===li.LINES)p=new Ks(x,y);else if(m.mode===li.LINE_STRIP)p=new es(x,y);else if(m.mode===li.LINE_LOOP)p=new Fo(x,y);else if(m.mode===li.POINTS)p=new Js(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&$M(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ki(p,r),m.extensions&&fr(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&fr(s,u[0],r),u[0];let d=new Ze;r.extensions&&fr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(en.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ni(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Uo(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let b=0,M=d.length;b<M;b++){let E=d[b],A=f[b],v=g[b],_=x[b],T=m[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let w=n._createAnimationTracks(E,A,v,_,T);if(w)for(let C=0;C<w.length;C++)p.push(w[C])}let y=new Qo(r,void 0,p);return ki(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Gr:l.length>1?h=new Ze:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ki(h,r),r.extensions&&fr(n,h,r),r.matrix!==void 0){let u=new Ge;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),ki(r,n),n.extensions&&fr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(w0(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Nn||d instanceof rn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Is[r.path]===Is.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Is[r.path]){case Is.weights:h=ns;break;case Is.rotation:h=is;break;case Is.translation:case Is.scale:h=bs;break;default:switch(n.itemSize){case 1:h=ns;break;case 2:case 3:default:h=bs;break}break}let u=s.interpolation!==void 0?ZM[s.interpolation]:qs,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+Is[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=od(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof is?sd:mh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tS(i,e,t){let n=e.attributes,s=new pn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),a.normalized){let h=od(so[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,c=new F;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=od(so[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Vn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function P0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=rd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),ki(i,e),tS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?JM(i,e.targets,t):i})}var gh=class extends ea{constructor(e){super(e),this.type=Ft}parse(e){let o=function(_,T){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(T||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(T||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(T||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(T||""))}},u=function(_,T,w){T=T||1024;let I=_.pos,B=-1,P=0,L="",U=String.fromCharCode.apply(null,new Uint16Array(_.subarray(I,I+128)));for(;0>(B=U.indexOf(`
`))&&P<T&&I<_.byteLength;)L+=U,P+=U.length,I+=128,U=String.fromCharCode.apply(null,new Uint16Array(_.subarray(I,I+128)));return-1<B?(w!==!1&&(_.pos+=P+B+1),L+U.slice(0,B)):!1},d=function(_){let T=/^#\?(\S+)/,w=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},L,U;for((_.pos>=_.byteLength||!(L=u(_)))&&o(1,"no header found"),(U=L.match(T))||o(3,"bad initial token"),P.valid|=1,P.programtype=U[1],P.string+=L+`
`;L=u(_),L!==!1;){if(P.string+=L+`
`,L.charAt(0)==="#"){P.comments+=L+`
`;continue}if((U=L.match(w))&&(P.gamma=parseFloat(U[1])),(U=L.match(C))&&(P.exposure=parseFloat(U[1])),(U=L.match(I))&&(P.valid|=2,P.format=U[1]),(U=L.match(B))&&(P.valid|=4,P.height=parseInt(U[1],10),P.width=parseInt(U[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(_,T,w){let C=T;if(C<8||C>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);C!==(_[2]<<8|_[3])&&o(3,"wrong scanline width");let I=new Uint8Array(4*T*w);I.length||o(4,"unable to allocate buffer space");let B=0,P=0,L=4*C,U=new Uint8Array(4),z=new Uint8Array(L),W=w;for(;W>0&&P<_.byteLength;){P+4>_.byteLength&&o(1),U[0]=_[P++],U[1]=_[P++],U[2]=_[P++],U[3]=_[P++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=C)&&o(3,"bad rgbe scanline format");let D=0,k;for(;D<L&&P<_.byteLength;){k=_[P++];let J=k>128;if(J&&(k-=128),(k===0||D+k>L)&&o(3,"bad scanline data"),J){let oe=_[P++];for(let ve=0;ve<k;ve++)z[D++]=oe}else z.set(_.subarray(P,P+k),D),D+=k,P+=k}let q=C;for(let J=0;J<q;J++){let oe=0;I[B]=z[J+oe],oe+=C,I[B+1]=z[J+oe],oe+=C,I[B+2]=z[J+oe],oe+=C,I[B+3]=z[J+oe],B+=4}W--}return I},g=function(_,T,w,C){let I=_[T+3],B=Math.pow(2,I-128)/255;w[C+0]=_[T+0]*B,w[C+1]=_[T+1]*B,w[C+2]=_[T+2]*B,w[C+3]=1},x=function(_,T,w,C){let I=_[T+3],B=Math.pow(2,I-128)/255;w[C+0]=vs.toHalfFloat(Math.min(_[T+0]*B,65504)),w[C+1]=vs.toHalfFloat(Math.min(_[T+1]*B,65504)),w[C+2]=vs.toHalfFloat(Math.min(_[T+2]*B,65504)),w[C+3]=vs.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),y=p.width,b=p.height,M=f(m.subarray(m.pos),y,b),E,A,v;switch(this.type){case Pn:v=M.length/4;let _=new Float32Array(v*4);for(let w=0;w<v;w++)g(M,w*4,_,w*4);E=_,A=Pn;break;case Ft:v=M.length/4;let T=new Uint16Array(v*4);for(let w=0;w<v;w++)x(M,w*4,T,w*4);E=T,A=Ft;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:b,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A,colorSpace:_n,minFilter:yt,magFilter:yt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var xh=class extends Pe{constructor(e,t={}){super(e),this.isWater=!0;let n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new F(.70707,.70707,0),u=new Le(t.sunColor!==void 0?t.sunColor:16777215),d=new Le(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new F(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:Jn,m=t.fog!==void 0?t.fog:!1,p=new ii,y=new F,b=new F,M=new F,E=new Ge,A=new F(0,0,-1),v=new _t,_=new F,T=new F,w=new _t,C=new Ge,I=new Bt,B=new kt(s,r,{type:Ft}),P={name:"MirrorShader",uniforms:mn.merge([Ee.fog,Ee.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ge},sunColor:{value:new Le(8355711)},sunDirection:{value:new F(.70707,.70707,0)},eye:{value:new F},waterColor:{value:new Le(5592405)}}]),vertexShader:`
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
				}`},L=new Mt({name:P.name,uniforms:mn.clone(P.uniforms),vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,lights:!0,side:x,fog:m});L.uniforms.mirrorSampler.value=B.texture,L.uniforms.textureMatrix.value=C,L.uniforms.alpha.value=a,L.uniforms.time.value=c,L.uniforms.normalSampler.value=l,L.uniforms.sunColor.value=u,L.uniforms.waterColor.value=d,L.uniforms.sunDirection.value=h,L.uniforms.distortionScale.value=g,L.uniforms.eye.value=f,n.material=L,n.onBeforeRender=function(U,z,W){if(b.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(W.matrixWorld),E.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(E),_.subVectors(b,M),_.dot(y)>0)return;_.reflect(y).negate(),_.add(b),E.extractRotation(W.matrixWorld),A.set(0,0,-1),A.applyMatrix4(E),A.add(M),T.subVectors(b,A),T.reflect(y).negate(),T.add(b),I.position.copy(_),I.up.set(0,1,0),I.up.applyMatrix4(E),I.up.reflect(y),I.lookAt(T),I.far=W.far,I.updateMatrixWorld(),I.projectionMatrix.copy(W.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(I.projectionMatrix),C.multiply(I.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,b),p.applyMatrix4(I.matrixWorldInverse),v.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let D=I.projectionMatrix;w.x=(Math.sign(v.x)+D.elements[8])/D.elements[0],w.y=(Math.sign(v.y)+D.elements[9])/D.elements[5],w.z=-1,w.w=(1+D.elements[10])/D.elements[14],v.multiplyScalar(2/v.dot(w)),D.elements[2]=v.x,D.elements[6]=v.y,D.elements[10]=v.z+1-o,D.elements[14]=v.w,f.setFromMatrixPosition(W.matrixWorld);let k=U.getRenderTarget(),q=U.xr.enabled,J=U.shadowMap.autoUpdate;n.visible=!1,U.xr.enabled=!1,U.shadowMap.autoUpdate=!1,U.setRenderTarget(B),U.state.buffers.depth.setMask(!0),U.autoClear===!1&&U.clear(),U.render(z,I),n.visible=!0,U.xr.enabled=q,U.shadowMap.autoUpdate=J,U.setRenderTarget(k);let oe=W.viewport;oe!==void 0&&U.state.viewport(oe)}}};var Vi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nS=new Ni(-1,1,1,-1,0,1),ld=class extends vt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},iS=new ld,Gi=class{constructor(e){this._mesh=new Pe(iS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _h=class extends Un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Na=class extends Un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vh=class extends Un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var yh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _h(Vi),this.copyPass.material.blending=Zt,this.timer=new ra}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Na!==void 0&&(o instanceof Na?n=!0:o instanceof vh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Mh=class extends Un{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ua={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ge},cameraProjectionMatrixInverse:{value:new Ge},cameraWorldMatrix:{value:new Ge},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},Fa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Sh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function L0(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=sS(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new F(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new vn(s,e,e);return r.wrapS=Qt,r.wrapT=Qt,r.needsUpdate=!0,r}function sS(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Oa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:cd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new Ge},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function cd(i,e,t){let n=rS(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function rS(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),o))}return n}var bh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,g=e-d,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let y=g-m+h,b=x-p+h,M=g-1+2*h,E=x-1+2*h,A=c&255,v=l&255,_=this.perm[A+this.perm[v]]%12,T=this.perm[A+m+this.perm[v+p]]%12,w=this.perm[A+1+this.perm[v+1]]%12,C=.5-g*g-x*x;C<0?n=0:(C*=C,n=C*C*this._dot(this.grad3[_],g,x));let I=.5-y*y-b*b;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[T],y,b));let B=.5-M*M-E*E;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[w],M,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(h+u+d)*f,x=h-g,m=u-g,p=d-g,y=e-x,b=t-m,M=n-p,E,A,v,_,T,w;y>=b?b>=M?(E=1,A=0,v=0,_=1,T=1,w=0):y>=M?(E=1,A=0,v=0,_=1,T=0,w=1):(E=0,A=0,v=1,_=1,T=0,w=1):b<M?(E=0,A=0,v=1,_=0,T=1,w=1):y<M?(E=0,A=1,v=0,_=0,T=1,w=1):(E=0,A=1,v=0,_=1,T=1,w=0);let C=y-E+f,I=b-A+f,B=M-v+f,P=y-_+2*f,L=b-T+2*f,U=M-w+2*f,z=y-1+3*f,W=b-1+3*f,D=M-1+3*f,k=h&255,q=u&255,J=d&255,oe=this.perm[k+this.perm[q+this.perm[J]]]%12,ve=this.perm[k+E+this.perm[q+A+this.perm[J+v]]]%12,be=this.perm[k+_+this.perm[q+T+this.perm[J+w]]]%12,ne=this.perm[k+1+this.perm[q+1+this.perm[J+1]]]%12,ge=.6-y*y-b*b-M*M;ge<0?s=0:(ge*=ge,s=ge*ge*this._dot3(this.grad3[oe],y,b,M));let fe=.6-C*C-I*I-B*B;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[ve],C,I,B));let Ne=.6-P*P-L*L-U*U;Ne<0?o=0:(Ne*=Ne,o=Ne*Ne*this._dot3(this.grad3[be],P,L,U));let Oe=.6-z*z-W*W-D*D;return Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this._dot3(this.grad3[ne],z,W,D)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,f,g,x=(e+t+n+s)*c,m=Math.floor(e+x),p=Math.floor(t+x),y=Math.floor(n+x),b=Math.floor(s+x),M=(m+p+y+b)*l,E=m-M,A=p-M,v=y-M,_=b-M,T=e-E,w=t-A,C=n-v,I=s-_,B=T>w?32:0,P=T>C?16:0,L=w>C?8:0,U=T>I?4:0,z=w>I?2:0,W=C>I?1:0,D=B+P+L+U+z+W,k=o[D][0]>=3?1:0,q=o[D][1]>=3?1:0,J=o[D][2]>=3?1:0,oe=o[D][3]>=3?1:0,ve=o[D][0]>=2?1:0,be=o[D][1]>=2?1:0,ne=o[D][2]>=2?1:0,ge=o[D][3]>=2?1:0,fe=o[D][0]>=1?1:0,Ne=o[D][1]>=1?1:0,Oe=o[D][2]>=1?1:0,He=o[D][3]>=1?1:0,ht=T-k+l,je=w-q+l,N=C-J+l,V=I-oe+l,H=T-ve+2*l,$=w-be+2*l,K=C-ne+2*l,ue=I-ge+2*l,he=T-fe+3*l,me=w-Ne+3*l,de=C-Oe+3*l,G=I-He+3*l,Xe=T-1+4*l,Qe=w-1+4*l,O=C-1+4*l,S=I-1+4*l,Z=m&255,j=p&255,ie=y&255,xe=b&255,ye=a[Z+a[j+a[ie+a[xe]]]]%32,se=a[Z+k+a[j+q+a[ie+J+a[xe+oe]]]]%32,ae=a[Z+ve+a[j+be+a[ie+ne+a[xe+ge]]]]%32,Te=a[Z+fe+a[j+Ne+a[ie+Oe+a[xe+He]]]]%32,We=a[Z+1+a[j+1+a[ie+1+a[xe+1]]]]%32,Se=.6-T*T-w*w-C*C-I*I;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(r[ye],T,w,C,I));let Me=.6-ht*ht-je*je-N*N-V*V;Me<0?u=0:(Me*=Me,u=Me*Me*this._dot4(r[se],ht,je,N,V));let ke=.6-H*H-$*$-K*K-ue*ue;ke<0?d=0:(ke*=ke,d=ke*ke*this._dot4(r[ae],H,$,K,ue));let Je=.6-he*he-me*me-de*de-G*G;Je<0?f=0:(Je*=Je,f=Je*Je*this._dot4(r[Te],he,me,de,G));let nt=.6-Xe*Xe-Qe*Qe-O*O-S*S;return nt<0?g=0:(nt*=nt,g=nt*nt*this._dot4(r[We],Xe,Qe,O,S)),27*(h+u+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Ba=class i extends Un{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=L0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new kt(this.width,this.height,{type:Ft}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Mt({defines:Object.assign({},Ua.defines),uniforms:mn.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,blending:Zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new $o,this.normalMaterial.blending=Zt,this.pdMaterial=new Mt({defines:Object.assign({},Oa.defines),uniforms:mn.clone(Oa.uniforms),vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Mt({defines:Object.assign({},Fa.defines),uniforms:mn.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,blending:Zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Mt({uniforms:mn.clone(Vi.uniforms),vertexShader:Vi.vertexShader,fragmentShader:Vi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ha,blendDst:ir,blendEquation:$n,blendSrcAlpha:ca,blendDstAlpha:ir,blendEquationAlpha:$n}),this.blendMaterial=new Mt({uniforms:mn.clone(Sh.uniforms),vertexShader:Sh.vertexShader,fragmentShader:Sh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:hc,blendSrc:ha,blendDst:ir,blendEquation:$n,blendSrcAlpha:ca,blendDstAlpha:ir,blendEquationAlpha:$n}),this._fsQuad=new Gi(null),this._originalClearColor=new Le,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new pi,this.depthTexture.format=Ui,this.depthTexture.type=ws,this.normalRenderTarget=new kt(this.width,this.height,{minFilter:zt,magFilter:zt,type:Ft,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=cd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Zt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new bh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new vn(s,e,e,Sn,Rn);return r.wrapS=Qt,r.wrapT=Qt,r.needsUpdate=!0,r}};Ba.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var D0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ro=class i extends Un{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,o,{type:Ft}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new kt(r,o,{type:Ft});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new kt(r,o,{type:Ft});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=D0;this.highPassUniforms=mn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mn.clone(Vi.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:Vi.vertexShader,fragmentShader:Vi.fragmentShader,premultipliedAlpha:!0,blending:la,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new Xt,this._fsQuad=new Gi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new Mt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}};ro.BlurDirectionX=new ce(1,0);ro.BlurDirectionY=new ce(0,1);var za={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Th=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=mn.clone(za.uniforms),this.material=new qr({name:za.name,uniforms:this.uniforms,vertexShader:za.vertexShader,fragmentShader:za.fragmentShader}),this._fsQuad=new Gi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===da?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ao=Object.freeze({flow:{name:"\u6D41\u7545",pixelRatio:.85,shadowSize:1024,shadowInterval:200,reflectionInterval:1/0,ao:!1,bloom:!1,near:7,medium:20,smallNear:4,smallMedium:12},balanced:{name:"\u5747\u8861",pixelRatio:1,shadowSize:1536,shadowInterval:100,reflectionInterval:160,ao:!1,bloom:!1,near:12,medium:32,smallNear:7,smallMedium:20},high:{name:"\u7CBE\u7EC6",pixelRatio:1.25,shadowSize:2048,shadowInterval:66,reflectionInterval:80,ao:!0,bloom:!0,near:20,medium:45,smallNear:12,smallMedium:28}}),oo=["flow","balanced","high"];function N0(i,e,t=!1,n=-1){let s=[t?e.smallNear:e.near,t?e.smallMedium:e.medium];if(n<0)return i<s[0]?0:i<s[1]?1:2;let r=n;for(;r<2&&i>s[r]*1.15;)r++;for(;r>0&&i<s[r-1]*.85;)r--;return r}function U0(i,e=12){let t=new Map;for(let n of i){let s=Math.floor(n.x/e)+":"+Math.floor(n.z/e);t.has(s)||t.set(s,[]),t.get(s).push(n)}return[...t.values()]}var wh=class{constructor(){this.level=1,this.mode="auto",this.reset()}reset(){this.duration=0,this.frames=0,this.slow=0,this.fast=0,this.cooldown=4,this.fps=0}setMode(e){if(!["auto",...oo].includes(e))throw Error("\u672A\u77E5\u753B\u8D28");return this.mode=e,e!=="auto"?this.level=oo.indexOf(e):this.level=1,this.reset(),oo[this.level]}sample(e){if(e<=0||e>1)return this.reset(),null;if(this.duration+=e,this.frames++,this.cooldown=Math.max(0,this.cooldown-e),this.duration<1)return null;this.fps=this.frames/this.duration;let t=this.duration;if(this.duration=0,this.frames=0,this.mode!=="auto"||this.cooldown>0)return null;this.slow=this.fps<38?this.slow+t:0,this.fast=this.fps>57?this.fast+t:0;let n=this.level;return this.slow>=2&&n>0?n--:this.fast>=14&&n<2&&n++,n===this.level?null:(this.level=n,this.slow=0,this.fast=0,this.cooldown=8,oo[n])}};function F0(i,e,t,n){let s=ao[i];if(!e.mobile)return{...s};let r={flow:1.35,balanced:1.6,high:1.85},o=Math.sqrt(24e5/Math.max(1,t*n));return{...s,pixelRatio:Math.min(r[i],e.pixelCap,o),near:Math.max(s.near,12),medium:Math.max(s.medium,28),smallNear:Math.max(s.smallNear,7),smallMedium:Math.max(s.smallMedium,18)}}function oS(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return new Pt(new Uint32Array(t.buffer),1)}function O0(i){let e=[];function t(s,r,{small:o=!1}={}){s.updateMatrixWorld(!0);let a=[];s.traverse(c=>{if(!c.isMesh)return;let l=[c.geometry];for(let h of["medium","far"]){let u=new vt;u.setIndex(c.geometry.userData.lod?.[h]?oS(c.geometry.userData.lod[h]):c.geometry.index);for(let[d,f]of Object.entries(c.geometry.attributes))u.setAttribute(d,f);u.boundingBox=c.geometry.boundingBox?.clone()||null,u.boundingSphere=c.geometry.boundingSphere?.clone()||null,l.push(u)}a.push({geometries:l,material:c.material,matrix:c.matrixWorld.clone()})});for(let c of U0(r)){let l=new F;for(let u of c)l.add(new F(u.x,u.y||0,u.z));l.divideScalar(c.length);let h=[];for(let u=0;u<3;u++){let d=new Ze,f=0;for(let g of a){let x=new ri(g.geometries[u],g.material,c.length);x.receiveShadow=!0,x.castShadow=u<2;let m=new Ge,p=new dn;for(let y=0;y<c.length;y++){let b=c[y],M=b.height/s.userData.height;p.setFromAxisAngle(new F(0,1,0),b.rotation||0),m.compose(new F(b.x,b.y||0,b.z),p,new F(M,M,M)),m.multiply(g.matrix),x.setMatrixAt(y,m)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere(),d.add(x),f+=(x.geometry.index?.count||x.geometry.attributes.position.count)/3*c.length}d.visible=!1,i.add(d),h.push({group:d,triangles:f})}e.push({center:l,small:o,levels:h,current:-1})}}function n(s,r){let o=!1;for(let a of e){let c=s.position.distanceTo(a.center),l=N0(c,r,a.small,a.current);if(l!==a.current){a.current=l;for(let h=0;h<3;h++)a.levels[h].group.visible=h===l;o=!0}}return o}return{add:t,update:n,get stats(){return{cells:e.length,triangles:e.reduce((s,r)=>s+(r.levels[r.current]?.triangles||0),0),nearCells:e.filter(s=>s.current===0).length}}}}function hd(i,e=4){i.generateMipmaps=!0,i.minFilter=Cn,i.magFilter=yt,i.anisotropy=e,i.needsUpdate=!0}function ud(i,e){let t=new Set,n=Math.min(4,e.capabilities.getMaxAnisotropy());i.traverse(s=>{if(s.isMesh)for(let r of Array.isArray(s.material)?s.material:[s.material])for(let o of["map","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"]){let a=r[o];!a||t.has(a)||(t.add(a),hd(a,n))}})}function Eh(i){return Rf(i).then(e=>new Promise((t,n)=>new dh().parse(e,"",s=>{globalThis.MANSION_ASSETS[i].startsWith("assets/")||delete globalThis.MANSION_ASSETS[i],a0(s.scene),t(s.scene)},n)))}function B0(i,e,t,n,{parent:s,queue:r,onLoaded:o=()=>{}}){let a=[],c=O0(s),l=(D,k,q=14)=>J=>J.bird||Math.hypot(J.x-D,J.z-k)<q;function h(D){let k=new pn().setFromObject(D),q=k.getSize(new F),J=k.getCenter(new F),oe=new Ze;return D.position.add(new F(-J.x,-k.min.y,-J.z)),oe.add(D),oe.userData.height=q.y,ud(D,t),oe}function u(D,k,q,J,oe,ve=0){let be=D.clone(!0);return be.scale.set(oe/D.userData.height/De,oe/D.userData.height,oe/D.userData.height/De),be.position.set(k,q,J),be.rotation.y=ve,be.traverse(ne=>{ne.isMesh&&(ne.castShadow=!0,ne.receiveShadow=!0)}),s.add(be),be}let d=new Ze;s.add(d);let f=new js(1,1),g=new En(.08,.12,1,6),x=new tt({color:5795657}),m=new tt({color:7166274}),p=new ri(f,x,e.trees.length),y=new ri(g,m,e.trees.length);d.add(p,y),e.trees.forEach((D,k)=>{let q=new Ge;q.compose(new F(D.x,D.height*.7,D.z),new dn,new F(D.height*.25,D.height*.32,D.height*.25)),p.setMatrixAt(k,q),q.compose(new F(D.x,D.height*.25,D.z),new dn,new F(1,D.height*.5,1)),y.setMatrixAt(k,q)}),p.computeBoundingSphere(),y.computeBoundingSphere(),r.add("\u6811\u6728\u6A21\u578B",async()=>{a[0]=h(await Eh("tree_small_02")),c.add(a[0],e.trees),s.remove(d),f.dispose(),g.dispose(),x.dispose(),m.dispose(),o()},{priority:2});let b=99,M=()=>(b=b*16807%2147483647,(b-1)/2147483646),E=[],A=[];for(let D=0;D<95;D++){let k=(M()-.5)*51,q=(M()-.5)*43;Om(k,q)||q<7&&Math.abs(k)<22||Math.abs(k)<3||k>3&&k<25&&q>7||k>-10&&k<0&&q<14||(E.push({x:k,z:q,height:.3+M()*.75,rotation:M()*7}),D%2===0&&A.push({x:k+.5,z:q+.3,height:.7+M()*.5,rotation:M()*7}))}for(let D=0;D<15;D++){let k=D/15*6.28;E.push({x:Math.cos(k)*2.1,z:3+Math.sin(k)*1.2,height:.45,rotation:k})}for(let[D,k,q]of[["fern_02",1,E],["shrub_01",2,A],["potted_plant_02",5,e.plantSpots]])r.add(D,async()=>{a[k]=h(await Eh(D)),c.add(a[k],q,{small:!0}),o()},{when:J=>J.bird||q.some(oe=>Math.hypot(oe.x-J.x,oe.z-J.z)<14),priority:8});r.add("\u5BA4\u5185\u5355\u6905",async()=>{a[3]=h(await Eh("modern_arm_chair_01")),u(a[3],12.8,0,2.8,1.12,.5),u(a[3],-12.7,0,3.7,1.12,-.7),u(a[3],-5,3.6,-15,1.05,1.3),o()},{when:D=>D.bird||D.z<9,priority:9}),r.add("\u4E66\u623F\u58C1\u7089",async()=>{let D=await Eh("interior");D.position.set(-20,0,.3),ud(D,t),D.traverse(k=>{k.isMesh&&(k.castShadow=!0,k.receiveShadow=!0)}),s.add(D),o()},{when:l(-20,.3,13),priority:7});let v=null;r.add("\u73AF\u5883\u5149",async()=>{let D=new gh().parse(await Rf("environment")),k=new vn(D.data,D.width,D.height,Sn,D.type);k.mapping=Zr,k.needsUpdate=!0,v=k,i.background=k,i.backgroundBlurriness=.04,i.environment=k,i.environmentRotation.y=1.2,i.backgroundRotation.y=1.2,n.visible=!1,o()},{priority:1});let _=128,T=new Uint8Array(_*_*4);for(let D=0;D<_;D++)for(let k=0;k<_;k++){let q=(D*_+k)*4;T[q]=128+Math.sin(k*.24+D*.09)*18,T[q+1]=128+Math.cos(D*.21+k*.06)*18,T[q+2]=250,T[q+3]=255}let w=new vn(T,_,_);w.wrapS=w.wrapT=Qt,hd(w,Math.min(4,t.capabilities.getMaxAnisotropy()));let C=new xh(new Qn(6.7,15.7),{textureWidth:384,textureHeight:384,waterNormals:w,sunDirection:new F(-.7,.5,.4),sunColor:16769198,waterColor:1523515,distortionScale:1.1,fog:!0});C.rotation.x=-Math.PI/2,C.position.set(20.5,.135,11),s.add(C);let I=C.material,B=new tt({color:2710100,metalness:.48,roughness:.18,normalMap:w,normalScale:new ce(.12,.12)}),P=ao.flow,L=-1/0,U=-1/0,z=0,W=C.onBeforeRender;return C.onBeforeRender=function(...D){D[1].overrideMaterial||!Number.isFinite(P.reflectionInterval)||(I.uniforms.eye.value.setFromMatrixPosition(D[2].matrixWorld),!(z-L<P.reflectionInterval)&&(L=z,W.apply(this,D)))},{pool:C,templates:a,normal:w,get environment(){return v},vegetation:c,setQuality(D){P=D,C.material=Number.isFinite(D.reflectionInterval)?I:B,L=-1/0,U=-1/0},update(D,k,q){if(z=D,I.uniforms.time.value+=k*.45,D-U>200){let J={position:q.position.clone()};J.position.x/=De,J.position.z/=De,c.update(J,P),U=D}}}}function z0(i,e,t){let n,s,r,o=ao.flow;function a(){n||(n=new yh(i),n.addPass(new Mh(e,t)),s=new Ba(e,t,Math.max(1,innerWidth>>1),Math.max(1,innerHeight>>1)),s.updateGtaoMaterial({radius:.55,thickness:1,distanceFallOff:1,samples:6}),s.blendIntensity=.58,n.addPass(s),r=new ro(new ce(innerWidth,innerHeight),.15,.45,1.15),n.addPass(r),n.addPass(new Th))}function c(){if(!s)return;let l=i.getPixelRatio();s.setSize(Math.max(1,Math.round(innerWidth*l*.5)),Math.max(1,Math.round(innerHeight*l*.5)))}return{setQuality(l){o=l,i.setPixelRatio(Math.min(devicePixelRatio,o.pixelRatio)),(o.ao||o.bloom)&&a(),n&&(s.enabled=o.ao,r.enabled=o.bloom,n.setPixelRatio(i.getPixelRatio()),c())},resize(l,h){n?.setSize(l,h),c()},render(){!o.ao&&!o.bloom?i.render(e,t):n.render()}}}var _e=i=>document.getElementById(i),mt=new Zs,fo=new Ze,_d=matchMedia("(pointer: coarse)"),Hi=Pf(innerWidth,_d.matches);document.body.dataset.mobile=String(Hi.mobile);var Jt=new Bt(Hi.fov,innerWidth/innerHeight,.08,650),Za=new ch({onChange:i=>{_e("assetStatus").textContent=i.failed?"\u90E8\u5206\u7D20\u6750\u5F85\u91CD\u8BD5":i.active?"\u7EC6\u8282\u52A0\u8F7D\u4E2D\u2026":"\u7D20\u6750\u6309\u4F4D\u7F6E\u52A0\u8F7D",_e("assetStatus").title=`\u5DF2\u8F7D\u5165 ${i.loaded}/${i.total} \u9879\uFF1B\u5931\u8D25 ${i.failed} \u9879\uFF0C\u70B9\u51FB\u91CD\u8BD5`}}),pt;try{pt=new eo({antialias:!0,powerPreference:"high-performance"})}catch(i){throw _e("loading").innerHTML="<h2>\u5F53\u524D\u6D4F\u89C8\u5668\u65E0\u6CD5\u5F00\u542F 3D</h2><p>\u8BF7\u4F7F\u7528\u652F\u6301 WebGL 2 \u7684 Chrome\u3001Edge \u6216 Safari\uFF0C\u5E76\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u3002</p>",i}pt.setPixelRatio(Math.min(devicePixelRatio,1));pt.setSize(innerWidth,innerHeight);pt.shadowMap.enabled=!0;pt.shadowMap.type=cc;pt.shadowMap.autoUpdate=!1;pt.shadowMap.needsUpdate=!0;pt.toneMapping=sr;pt.toneMappingExposure=.93;pt.outputColorSpace=dt;_e("scene").appendChild(pt.domElement);mt.fog=new Io(11975337,.006);var X0=new nr(13822187,7827538,.8);mt.add(X0);var qn=new rs(16765338,2.4);qn.position.set(-24,23,16);qn.castShadow=!0;qn.shadow.mapSize.set(1536,1536);Object.assign(qn.shadow.camera,{left:-55,right:55,top:50,bottom:-50,near:1,far:150});qn.shadow.bias=-3e-4;qn.shadow.normalBias=.06;mt.add(qn);var lo=new Pe(new on(160,32,16),new Mt({side:Mn,depthWrite:!1,uniforms:{top:{value:new Le("#739dba")},bottom:{value:new Le("#efd0a1")}},vertexShader:"varying vec3 v;void main(){v=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 v;uniform vec3 top;uniform vec3 bottom;void main(){float h=clamp(normalize(v).y,0.,1.);gl_FragColor=vec4(mix(bottom,top,pow(h,.65)),1.);}"}));mt.add(lo);var Lh=new Pe(new on(3,20,12),new Xt({color:16770221}));Lh.position.set(-64,26,-103);mt.add(Lh);var aS=new er,dd=new Map,lS={\u8D70\u5ECA\u70DF\u718F\u6728:["wood",1,6574916],\u8349\u5730:["grass",1,9540993],\u77F3\u677F:["road",1,13684419],\u6D45\u6A61\u6728:["wood",1,12299925],\u80E1\u6843\u6728:["wood",1,9860435],\u7C73\u8272\u5899\u9762:["plaster",1,16774889],\u77F3\u6750:["stone",1,11120544],\u6DF1\u7070\u74E6:["roof",1,3554618]},q0={};for(let[i,[e,t,n]]of Object.entries(lS)){let s=new tt({name:i,color:n,roughness:.88});s.userData.worldUV=!0,s.normalScale.set(.3,.3),q0[i]=s;for(let[r,o]of[["color","map"],["normal","normalMap"],["roughness","roughnessMap"]]){let a=e+"-"+r;if(!globalThis.MANSION_ASSETS[a]||["road","plaster"].includes(e)&&r==="color"||e==="roof"&&r!=="roughness")continue;let l=dd.get(a)||{id:a,kind:r,slot:o,repeat:t,targets:[]};l.targets.push(s),dd.set(a,l)}}for(let i of dd.values())Za.add(i.id,async()=>{let e=await aS.loadAsync(globalThis.MANSION_ASSETS[i.id]);e.wrapS=e.wrapT=Qt,e.repeat.set(i.repeat,i.repeat),e.anisotropy=Math.min(8,pt.capabilities.getMaxAnisotropy()),i.kind==="color"&&(e.colorSpace=dt);for(let t of i.targets)t[i.slot]=e,t.needsUpdate=!0;globalThis.MANSION_ASSETS[i.id].startsWith("data:")&&delete globalThis.MANSION_ASSETS[i.id]},{priority:i.kind==="color"?3:Hi.mobile?6:12,when:e=>i.targets.some(t=>e.materials.has(t))});var $t=M0({...q0,...Jm()});e0($t);mt.add($t.root);var co,vd=z0(pt,mt,Jt),dr=T0(mt,$t),cS=s0($t.root),ho=km(mt);ho.bind(pt.domElement);var hn=Xm(mt,$t.root.userData.officeLabels),Y0=new F,hS=new Xt({color:16753719,transparent:!0,opacity:.8}),Z0=[];for(let i=0;i<7;i++){let e=new Pe(new mi(.08,.55,7),hS);e.position.set(-19.95+i%2*.2,.65,.3+(i-3)*.2),mt.add(e),Z0.push(e)}var yd=new ei(16753742,6,5);yd.position.set(-19.3,1,.3);mt.add(yd);for(let[i,e]of[["\u7535\u89C6\u753B\u9762","\u5C71\u6C34\u4E4B\u95F4 \xB7 \u98CE\u666F\u9891\u9053"],["\u7535\u7ADE\u5C4F\u5E55","\u6E38\u620F\u5927\u5385 \xB7 \u51C6\u5907\u5C31\u7EEA"]]){let t=document.createElement("canvas");t.width=640,t.height=360;let n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,360);s.addColorStop(0,"#283f55"),s.addColorStop(1,"#b2c5ac"),n.fillStyle=s,n.fillRect(0,0,640,360);for(let o=0;o<3;o++){n.fillStyle=["#7b9a99","#526f72","#304e53"][o],n.beginPath(),n.moveTo(0,360);for(let a=0;a<=640;a+=20)n.lineTo(a,170+o*45+Math.sin(a*.012+o)*55+Math.cos(a*.026)*18);n.lineTo(640,360),n.fill()}n.fillStyle="#f4e9c9",n.font="24px sans-serif",n.fillText(e,28,43),n.font="16px sans-serif",n.fillText(i==="\u7535\u7ADE\u5C4F\u5E55"?"\u6B22\u8FCE\u56DE\u5BB6\uFF0C\u653E\u677E\u4E00\u4E0B":"\u4E61\u6751\u751F\u6D3B \xB7 \u6162\u4EAB\u65F6\u5149",28,326);let r=new yn(t);r.colorSpace=dt,$t.mats[i].map=r,$t.mats[i].needsUpdate=!0}var Md=new ei(16767669,125,23,2);Md.position.set(-18,-1.3,-13);mt.add(Md);var uS=Array.from({length:2},()=>{let i=new ei(16769723,0,16,2);return mt.add(i),i}),K0=$t.root.userData.vendors.map((i,e)=>{let t=Bi({shirt:[9730912,7441528,12095865][e%3],pants:4213576,female:e%2===1});return t.g.position.set(i.x,0,i.z),t.g.rotation.y=i.rotation,mt.add(t.g),t}),Ke=Bi({shirt:12892052,pants:4215628});mt.add(Ke.g);var re=new F(0,0,19);Ke.g.position.copy(re);Ke.g.rotation.y=Math.PI;var Ka=Bi({shirt:12624012,pants:15590094,female:!0});Ka.g.position.set(-6,0,-15.1);mt.add(Ka.g);var Ls=Bi({shirt:7904683,pants:4545380,scale:.69});mt.add(Ls.g);Ls.g.position.set(0,0,16.8);var mr=Bi({shirt:10327161,pants:6120278,hair:13223865,scale:.97});mr.g.position.set(-14,-.08,-3);mt.add(mr.g);var Ja=Bi({shirt:10785965,pants:6712160,hair:12435124,female:!0,scale:.93});Ja.g.position.set(12,0,16.9);mt.add(Ja.g);var Dh=[bf(13081187),bf(14736848)];Dh.forEach(i=>mt.add(i.g));var J0=Array.from({length:9},(i,e)=>Vm([15115083,15065554,12412229][e%3]));J0.forEach(i=>mt.add(i));var Ha=[Tf(),Tf()];Ha.forEach(i=>mt.add(i));var Nh=new Pe(new Vt(.45,.04,.32),new tt({color:14668205}));Nh.position.set(0,1.08,.4);Nh.rotation.x=-.3;mr.g.add(Nh);var $0=new Pe(new on(.22,16,12),new tt({color:14067302}));mt.add($0);var fS=Ke,Xn=new rh([fS,Ka,Ls,mr,Ja].map((i,e)=>({actor:i,name:["\u7238\u7238","\u5988\u5988","\u5B69\u5B50","\u7237\u7237","\u5976\u5976"][e],position:{x:i.g.position.x,y:Math.round(i.g.position.y/3.6)*3.6,z:i.g.position.z}}))),Si=qm();Si.root.position.set(3,0,19);mt.add(Si.root);var On=!1,Tt=new no,j0=Ym();mt.add(j0.root);u0(Tt);var Q0=new F,dS=[],ka=0,eg=0,tg=0,Et=Fm,Fn=!1,nn=null,qa=0,xn=!1,Bn="stand",Ot=null,sn={height:0,velocity:0},Va=new F(0,0,9),Wa=100,Xa=.67,Wn=0,uo=.24,Ya=Hi.distance,po=!1,pd=0,Ih=0,un=t0(_e("moveJoystick"),_e("joystickThumb")),Ds=null,wt=new Set,k0;function Ut(i){_e("toast").textContent=i,_e("toast").classList.add("show"),clearTimeout(k0),k0=setTimeout(()=>_e("toast").classList.remove("show"),3800)}var pS=[{id:"sandplay",x:14,z:1.5,y:3.6,title:"\u4E00\u8D77\u73A9\u6C99\u5B50",hint:"\u513F\u7AE5\u9633\u53F0 \xB7 \u6C99\u6C60\u65F6\u5149",type:"\u4EB2\u5B50\u65F6\u5149",heading:"\u5C0F\u5C0F\u6C99\u5821",body:"<p>\u62FF\u8D77\u5C0F\u6876\u548C\u94F2\u5B50\uFF0C\u966A\u5B69\u5B50\u642D\u4E00\u5EA7\u6C99\u5821\u3002\u73A9\u597D\u540E\uFF0C\u628A\u73A9\u5177\u6536\u56DE\u65C1\u8FB9\u7684\u67DC\u5B50\u3002</p>",mood:"\u4EAB\u53D7\u4EB2\u5B50\u65F6\u5149"},...Rs.filter(i=>i.interior).flatMap(i=>[-1,1].map(e=>({id:i.id,x:i.x+(i.axis==="z"?e*.8:0),z:i.z+(i.axis==="x"?e*.8:0),y:i.y,title:"\u5F00\u5173"+i.name,hint:"\u9760\u8FD1\u623F\u95E8 \xB7 \u6309 E \u6216\u70B9\u51FB\u5F00\u5173"}))),...[["gate",0,28.4,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["gate",0,31.6,0,"\u5F00\u5173\u5EAD\u9662\u5927\u95E8"],["basementDoor",-23.5,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"],["basementDoor",-21.2,-18,-3.6,"\u5F00\u5173\u5730\u4E0B\u5BA4\u5165\u53E3\u95E8"]].map(([i,e,t,n,s])=>({id:i,x:e,z:t,y:n,title:s,hint:"\u6309 E \u5F00\u5173 \xB7 \u8BF7\u907F\u5F00\u95E8\u6247\u8303\u56F4"})),...[["rooftea",-4,-7.8,7.2,"\u5728\u5929\u53F0\u559D\u8336","\u5929\u53F0\u8336\u5E2D","\u7AEF\u8D77\u9752\u74F7\u676F\uFF0C\u4FEF\u77B0\u679C\u56ED\u3001\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"],["roofplant",3,-11,7.2,"\u5728\u5929\u53F0\u79CD\u82B1","\u5929\u53F0\u82B1\u56ED","\u628A\u65B0\u82B1\u82D7\u79CD\u8FDB\u5929\u53F0\u7684\u5C0F\u82B1\u5703\u3002"],["coffee",5,-14,0,"\u78E8\u4E00\u676F\u5496\u5561","\u4E00\u697C\u5496\u5561\u5427","\u5496\u5561\u673A\u6E29\u70ED\u8D77\u6765\uFF0C\u676F\u4E2D\u6563\u51FA\u9999\u6C14\u3002"],["tv",1.6,-10,0,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u4E00\u697C\u8D77\u5C45\u5385","\u7535\u89C6\u5207\u6362\u5230\u53E6\u4E00\u5E45\u5C71\u6C34\u8272\u8C03\u7684\u753B\u9762\u3002"],["tv",-14,-11.7,-3.6,"\u5207\u6362\u7535\u89C6\u98CE\u666F\u753B\u9762","\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385","\u5728\u6C99\u53D1\u65C1\u770B\u770B\u7535\u89C6\uFF0C\u6162\u6162\u5EA6\u8FC7\u95F2\u6687\u65F6\u5149\u3002"],["ktv",-19,-11.7,-3.6,"\u64AD\u653E\u4E00\u6BB5\u793A\u8303\u4F34\u594F","\u7CD6\u679C\u661F\u5149 KTV","\u7C89\u5F69\u8F6F\u5305\u4E0E\u661F\u661F\u706F\u4E0B\uFF0C\u4E00\u8D77\u5531\u9996\u6B4C\u5427\u3002\u793A\u8303\u4F34\u594F\u6B63\u5728\u64AD\u653E\uFF0C\u9EA6\u514B\u98CE\u5C31\u5728\u8336\u51E0\u65C1\u3002"],["game",-14,-15,-3.6,"\u542F\u52A8\u7535\u7ADE\u684C\u9762","\u5730\u4E0B\u7535\u7ADE\u623F","\u663E\u793A\u5668\u70B9\u4EAE\uFF0C\u4ECA\u665A\u53EF\u4EE5\u5728\u8FD9\u91CC\u4F11\u95F2\u4E00\u4E0B\u3002"],["storage",-20,-15,-3.6,"\u67E5\u770B\u50A8\u7269\u95F4","\u5730\u4E0B\u50A8\u7269\u95F4","\u6574\u9F50\u7684\u67B6\u5B50\u4E0A\u5206\u653E\u7740\u6362\u5B63\u7269\u54C1\u3001\u56ED\u827A\u7528\u54C1\u4E0E\u751F\u6D3B\u5907\u54C1\u3002"],["peach",-28,11,0,"\u770B\u770B\u6811\u4E0A\u7684\u6843\u5B50","\u5EAD\u9662\u679C\u56ED","\u679D\u5934\u6302\u7740\u7C89\u5AE9\u7684\u6843\u5B50\uFF0C\u679C\u9999\u6DF7\u7740\u8349\u6728\u7684\u6C14\u606F\u3002"],["orange",-28,21,0,"\u770B\u770B\u6811\u4E0A\u7684\u6A58\u5B50","\u5EAD\u9662\u679C\u56ED","\u6A58\u5B50\u5728\u53F6\u95F4\u6CDB\u7740\u6696\u8272\uFF0C\u7B49\u5BB6\u4EBA\u4E00\u8D77\u8FC7\u6765\u91C7\u6536\u3002"],["market",-7,33.5,0,"\u901B\u901B\u9C9C\u679C\u644A","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u62DB\u547C\u4F60\u770B\u770B\u4ECA\u5929\u521A\u6458\u4E0B\u6765\u7684\u65F6\u4EE4\u6C34\u679C\u3002"],["market",7,38.5,0,"\u770B\u770B\u4E61\u6751\u70B9\u5FC3","\u4E61\u95F4\u96C6\u5E02","\u644A\u4E3B\u6B63\u5728\u6574\u7406\u70B9\u5FC3\uFF0C\u6CB3\u5CB8\u5C31\u5728\u8857\u9053\u524D\u65B9\u3002"]].map(([i,e,t,n,s,r,o])=>({id:i,x:e,z:t,y:n,title:s,heading:r,hint:r+" \xB7 \u6309 E \u4E92\u52A8",type:r,body:"<p>"+o+"</p>",mood:s})),{id:"read",x:-17,z:2.8,y:0,title:"\u5750\u4E0B\u6765\uFF0C\u8BFB\u4E00\u672C\u4E66",hint:"\u4E66\u623F \xB7 \u6728\u9999\u4E0E\u58C1\u7089",type:"\u9605\u8BFB\u65F6\u5149",heading:"\u628A\u65F6\u95F4\u7559\u7ED9\u4E00\u9875\u4E66",body:'<p class="quote">\u5C71\u9759\u4F3C\u592A\u53E4\uFF0C\u65E5\u957F\u5982\u5C0F\u5E74\u3002</p><p>\u4F60\u7FFB\u5F00\u684C\u4E0A\u7684\u8BD7\u96C6\u3002\u7A97\u5916\u7684\u6811\u5F71\u8F7B\u8F7B\u6643\u52A8\uFF0C\u58C1\u7089\u91CC\u4F20\u6765\u6728\u67F4\u7EC6\u788E\u7684\u58F0\u54CD\u3002\u7237\u7237\u62AC\u5934\u7B11\u4E86\u7B11\uFF0C\u53C8\u4F4E\u5934\u8BFB\u8D77\u624B\u91CC\u7684\u4E66\u3002</p>',mood:"\u8BFB\u4E86\u4E00\u9875\u4E66\uFF0C\u5FC3\u4E5F\u9759\u4E86\u4E0B\u6765"},{id:"tea",x:8,z:14.1,y:0,title:"\u5750\u4E0B\u559D\u4E00\u676F\u8336",hint:"\u5EAD\u9662\u8336\u5E2D \xB7 \u70ED\u8336\u521A\u597D",type:"\u4E00\u76CF\u8336\u7684\u65F6\u95F4",heading:"\u665A\u98CE\uFF0C\u548C\u4E00\u676F\u6E29\u70ED\u7684\u8336",body:'<p>\u4F60\u5728\u8336\u5E2D\u65C1\u5750\u4E0B\uFF0C\u7AEF\u8D77\u9752\u74F7\u676F\u3002\u6E29\u70ED\u7684\u8336\u9999\u6563\u5F00\uFF0C\u6C60\u5858\u7684\u6C34\u58F0\u5728\u8FDC\u5904\u54CD\u8D77\u3002</p><p class="quote">\u4ECA\u5929\u4E5F\u8F9B\u82E6\u4E86\u3002\u6162\u4E00\u70B9\uFF0C\u518D\u6162\u4E00\u70B9\u3002</p>',mood:"\u559D\u8FC7\u4E00\u676F\u8336\uFF0C\u8EAB\u5FC3\u8212\u5C55"},{id:"plant",x:15,z:16.9,y:0,title:"\u5728\u82B1\u5703\u79CD\u4E00\u682A\u82B1",hint:"\u5EAD\u9662\u82B1\u5703 \xB7 \u4EB2\u624B\u79CD\u4E0B\u5C0F\u5C0F\u671F\u5F85",type:"\u82B1\u56ED\u65E5\u8BB0",heading:"\u8BA9\u82B1\u56ED\u518D\u591A\u4E00\u70B9\u989C\u8272",body:"<p>\u4F60\u677E\u4E86\u677E\u571F\uFF0C\u79CD\u4E0B\u82B1\u82D7\uFF0C\u6D47\u4E0A\u4E00\u70B9\u6C34\u3002\u5976\u5976\u5728\u65C1\u8FB9\u63D0\u9192\u4F60\uFF1A\u201C\u6BCF\u5929\u6765\u770B\u770B\uFF0C\u522B\u6D47\u592A\u591A\u3002\u201D</p><p>\u65B0\u79CD\u7684\u82B1\u5DF2\u7ECF\u51FA\u73B0\u5728\u82B1\u5703\u4E2D\u3002\u4F60\u53EF\u4EE5\u7EE7\u7EED\u79CD\u4E0B\u66F4\u591A\u82B1\u3002</p>",mood:"\u79CD\u4E0B\u4E86\u4E00\u70B9\u65B0\u7684\u671F\u5F85"},{id:"fish",x:-5,z:13.55,y:0,title:"\u6295\u5582\u9526\u9CA4\uFF0C\u770B\u770B\u4E4C\u9F9F",hint:"\u9526\u9CA4\u6C60 \xB7 \u9C7C\u513F\u4F1A\u6E38\u8FC7\u6765",type:"\u6C60\u5858\u8FB9",heading:"\u6C34\u9762\u4E0B\u7684\u5C0F\u5C0F\u90BB\u5C45",body:"<p>\u4F60\u6492\u4E0B\u4E00\u628A\u9C7C\u7CAE\uFF0C\u9526\u9CA4\u6162\u6162\u805A\u62E2\u8FC7\u6765\uFF0C\u91D1\u8272\u7684\u5C3E\u9CCD\u5212\u51FA\u4E00\u9053\u9053\u6D9F\u6F2A\u3002\u77F3\u5934\u4E0A\u7684\u4E4C\u9F9F\u6B63\u5728\u6652\u592A\u9633\u3002</p>",mood:"\u9C7C\u513F\u5403\u9971\u4E86\uFF0C\u6C34\u9762\u6CDB\u8D77\u6D9F\u6F2A"},{id:"cook",x:-3.5,z:-14.8,y:0,title:"\u548C\u59BB\u5B50\u804A\u804A\u665A\u9910",hint:"\u53A8\u623F \xB7 \u4ECA\u665A\u4E00\u8D77\u5403\u996D",type:"\u53A8\u623F\u91CC\u7684\u5BF9\u8BDD",heading:"\u201C\u56DE\u6765\u5566\uFF1F\u518D\u7B49\u4E00\u4F1A\u513F\u3002\u201D",body:"<p>\u59BB\u5B50\u6B63\u5728\u6599\u7406\u53F0\u524D\u51C6\u5907\u665A\u9910\u3002\u4F60\u5E2E\u5979\u9012\u8FC7\u7897\uFF0C\u5979\u7B11\u7740\u8BF4\uFF1A\u201C\u4ECA\u5929\u505A\u4E86\u5927\u5BB6\u7231\u5403\u7684\uFF0C\u5F85\u4F1A\u513F\u53EB\u5B69\u5B50\u6D17\u624B\u5403\u996D\u3002\u201D</p>",mood:"\u5E2E\u5FD9\u51C6\u5907\u4E86\u665A\u9910"},{id:"rest",x:-7,z:-10.8,y:3.6,title:"\u5728\u5367\u5BA4\u4F11\u606F\u7247\u523B",hint:"\u4E8C\u5C42\u4E3B\u5367 \xB7 \u8FDC\u79BB\u55A7\u95F9",type:"\u4F11\u606F\u7247\u523B",heading:"\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5B89\u9759\u89D2\u843D",body:"<p>\u67D4\u8F6F\u7684\u5E8A\u54C1\u3001\u6E29\u6696\u7684\u6728\u8272\u548C\u7A97\u5916\u7684\u665A\u971E\u3002\u4F60\u5750\u5728\u5E8A\u8FB9\uFF0C\u4F38\u4E86\u4E2A\u61D2\u8170\u3002</p>",mood:"\u4F11\u606F\u4E86\u4E00\u4F1A\u513F\uFF0C\u7CBE\u795E\u7115\u53D1"},{id:"kid",x:0,z:-8.9,y:3.6,title:"\u770B\u770B\u5B69\u5B50\u7684\u79EF\u6728",hint:"\u4E8C\u5C42\u513F\u7AE5\u623F \xB7 \u5C0F\u5C0F\u5EFA\u7B51\u5E08",type:"\u5C0F\u5C0F\u4E16\u754C",heading:"\u5C0F\u5C0F\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u5BB6",body:"<p>\u76AE\u5361\u4E18\u5B88\u7740\u5E8A\u8FB9\uFF0C\u7CBE\u7075\u7403\u6574\u9F50\u6446\u5728\u6536\u85CF\u67DC\u4E0A\u3002\u5B69\u5B50\u9080\u8BF7\u4F60\u4E00\u8D77\u7528\u79EF\u6728\u642D\u5EFA\u5B9D\u53EF\u68A6\u8BAD\u7EC3\u57FA\u5730\u3002</p>",mood:"\u53D1\u73B0\u4E86\u5B69\u5B50\u7684\u5C0F\u5C0F\u4E16\u754C"}];function mS(){if(ka>=12)return Ut("\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\uFF0C\u6765\u6B23\u8D4F\u4E00\u4E0B\u5427\u3002"),!1;let i=new Ze,e=14.35+ka%3*.65,t=18+Math.floor(ka/3)*.62;for(let n=0;n<5;n++){let s=new Pe(new En(.018,.025,.5,5),new tt({color:6587464}));s.position.set(e+Math.sin(n)*.1,.65,t+Math.cos(n)*.1),i.add(s);let r=new Pe(new on(.105,8,6),new tt({color:[14921892,15194009,12296654][ka%3]}));r.position.copy(s.position),r.position.y=.95,r.scale.y=.55,i.add(r)}return fo.add(i),dS.push(i),ka++,!0}function ng(i){wt.clear(),un.reset(),xn=!0,_e("modalType").textContent=i.type,_e("modalTitle").textContent=i.heading,_e("modalBody").innerHTML=i.body,_e("modalDone").textContent="\u7EE7\u7EED\u6563\u6B65",_e("modal").showModal(),_e("mood").textContent=i.mood||"\u95F2\u5EAD\u6F2B\u6B65"}var Ah=0;function gS(){if(Ah>=8)return Ut("\u5929\u53F0\u8FD9\u5757\u82B1\u5703\u5DF2\u7ECF\u79CD\u6EE1\u4E86\u3002"),!1;let i=2.6+Ah%2*.55,e=-12.6+Math.floor(Ah/2)*.35,t=new Ze,n=new Pe(new En(.016,.018,.45,6),new tt({color:6584910}));n.position.set(i,7.95,e),t.add(n);let s=new Pe(new on(.12,10,8),new tt({color:14788784}));return s.position.set(i,8.2,e),s.scale.y=.55,t.add(s),fo.add(t),Ah++,!0}function xS(){let i=new(window.AudioContext||window.webkitAudioContext);i.resume(),[262,330,392,330,294,349,440,349,262,330,392,523,440,392,330,262].forEach((e,t)=>{let n=i.createOscillator(),s=i.createGain(),r=i.currentTime+t*.32;n.type="sine",n.frequency.value=e,s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(.075,r+.025),s.gain.exponentialRampToValueAtTime(.001,r+.3),n.connect(s),s.connect(i.destination),n.start(r),n.stop(r+.31)}),setTimeout(()=>i.close(),6e3)}function ig(){if(Tt.phase!=="idle"||hn.lift.phase!=="idle")return;if(On){gd();return}if(nn?.id==="bicycle"){gd();return}if(nn?.id==="officeElevator"){ug();return}if(nn?.id==="elevator"){hg();return}if(!nn||_e("modal").open)return;let i=nn;if(Rs.some(e=>e.id===i.id)){if(i0(i.id,re)){let e=Rs.find(t=>t.id===i.id);Ut(e.name+(e.open?"\u6B63\u5728\u6253\u5F00":"\u6B63\u5728\u5173\u95ED"))}else Ut("\u8BF7\u7A0D\u5FAE\u9000\u540E\uFF0C\u518D\u5173\u95ED\u95E8");return}if(!(i.id==="roofplant"&&!gS())){if(i.id==="rooftea"&&Wi("sit"),i.id==="ktv"&&xS(),i.id==="tv"){let e=$t.mats.\u7535\u89C6\u753B\u9762;e.color.setHex(e.color.getHex()===7574929?12489840:7574929),e.emissive.copy(e.color).multiplyScalar(.4)}if(i.id==="game"&&($t.mats.\u7535\u7ADE\u5C4F\u5E55.emissiveIntensity=1.2),!(i.id==="plant"&&!mS())){if(i.id==="fish"&&(eg=qa+25),i.id==="dog"){tg=qa+15,Ut("\u8C46\u8C46\u548C\u56E2\u56E2\u5F00\u5FC3\u5730\u6447\u8D77\u4E86\u5C3E\u5DF4\uFF0C\u8DDF\u7740\u4F60\u4E00\u8D77\u6563\u6B65\u3002");return}(i.id==="tea"||i.id==="read")&&(Ke.legs.forEach(e=>{e.rotation.x=-1.25,e.lower.rotation.x=1.25}),Ke.arms.forEach(e=>e.rotation.x=-1),Ke.g.position.set(i.id==="tea"?8:-17,-.1,i.id==="tea"?13.2:2.1),Ke.g.rotation.y=Math.PI),ng(i)}}}function Wi(i){if(On||Tt.phase!=="idle"||hn.lift.phase!=="idle"||sn.height>0)return;if(i==="stand"||Bn===i){Bn="stand",Ot=null,Ke.g.rotation.x=0,Ke.g.position.copy(re),_e("mood").textContent="\u95F2\u5EAD\u6F2B\u6B65";return}let t=$t.seats.filter(n=>n.type===i&&Math.abs(n.y-re.y)<.5&&Math.hypot(n.x-re.x,n.z-re.z)<3.3).sort((n,s)=>Math.hypot(n.x-re.x,n.z-re.z)-Math.hypot(s.x-re.x,s.z-re.z))[0];Bn=i,wt.clear(),un.reset(),Ot=t?{...t}:{x:re.x,z:re.z,y:re.y,rotation:Ke.g.rotation.y,type:i,ground:!0},_e("mood").textContent=i==="sit"?"\u5750\u4E0B\u6B47\u4E00\u4F1A\u513F":"\u8EBA\u4E0B\u6765\uFF0C\u770B\u770B\u5929\u7A7A",Ut(i==="sit"?"\u5DF2\u5750\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 C \u8D77\u8EAB":"\u5DF2\u8EBA\u4E0B \xB7 \u6309 R \u6216\u518D\u6B21\u6309 L \u8D77\u8EAB")}_e("sitBtn").onclick=()=>Wi("sit");_e("lieBtn").onclick=()=>Wi("lie");_e("jumpBtn").onclick=()=>{On||Tt.phase!=="idle"||hn.lift.phase!=="idle"||(Bn!=="stand"&&Wi("stand"),Lf(sn))};_e("birdBtn").onclick=()=>{Et=Et===2?0:2,Ns()};_e("roofBtn").onclick=()=>{$t.roofs.visible=!$t.roofs.visible,_e("roofBtn").textContent=$t.roofs.visible?"\u9690\u85CF\u5C4B\u9876":"\u663E\u793A\u5C4B\u9876",pt.shadowMap.needsUpdate=!0};var zn=new wh;zn.setMode(yf);var Mi=ao.balanced,md=-1/0,Ch=0;pt.info.autoReset=!1;function Uh(i){Mi=F0(i,Hi,innerWidth,innerHeight),vd.setQuality(Mi),co?.setQuality(Mi),qn.shadow.mapSize.x!==Mi.shadowSize&&(qn.shadow.map?.dispose(),qn.shadow.map=null,qn.shadow.mapPass?.dispose(),qn.shadow.mapPass=null,qn.shadow.mapSize.set(Mi.shadowSize,Mi.shadowSize)),pt.shadowMap.needsUpdate=!0,md=-1/0,_e("qualityBtn").textContent=(zn.mode==="auto"?"\u81EA\u52A8\uFF1A":"\u753B\u8D28\uFF1A")+Mi.name}_e("qualityBtn").onclick=()=>{let i=["auto","flow","balanced","high"],e=i[(i.indexOf(zn.mode)+1)%i.length];Uh(zn.setMode(e)),Ut(e==="auto"?"\u81EA\u52A8\u8C03\u8282\u753B\u8D28\uFF0C\u4F18\u5148\u4FDD\u6301\u6D41\u7545":"\u5DF2\u5207\u6362"+Mi.name+"\u753B\u8D28")};Uh(yf);_e("assetStatus").onclick=()=>Za.retry();Object.defineProperty(window,"mansionPerformance",{configurable:!0,get:()=>({fps:Math.round(zn.fps),mode:zn.mode,quality:Mi.name,drawCalls:pt.info.render.calls,renderedTriangles:pt.info.render.triangles,vegetation:co?.vegetation.stats,assets:Za.stats,mobile:Hi.mobile,startupMs:dg})});function Ns(){Et!==2&&($t.roofs.visible=!0,_e("roofBtn").textContent="\u9690\u85CF\u5C4B\u9876"),document.body.dataset.view=Et===2?"bird":"walk",_e("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][Et],_e("birdBtn").textContent=Et===2?"\u8FDB\u5165\u6F2B\u6E38":"\u9E1F\u77B0\u5168\u666F",_e("roofBtn").classList.toggle("hidden",Et!==2)}function Sd(){_e("modal").close(),xn=!1,wt.clear(),un.reset(),Wi("stand"),Ke.g.position.copy(re)}_e("closeModal").onclick=Sd;_e("modalDone").onclick=Sd;_e("modal").addEventListener("cancel",i=>{i.preventDefault(),Sd()});_e("interactBtn").onclick=ig;_e("helpBtn").onclick=()=>ng({type:"\u5982\u4F55\u5728\u5BB6\u4E2D\u6F2B\u6B65",heading:"\u968F\u5FC3\u8D70\u8D70\uFF0C\u4E0D\u5FC5\u7740\u6025",body:"<p><b>W A S D / \u65B9\u5411\u952E</b>\uFF1A\u76F8\u5BF9\u955C\u5934\u65B9\u5411\u79FB\u52A8<br><b>\u6309\u4F4F\u9F20\u6807\u62D6\u52A8</b>\uFF1A\u73AF\u987E\u56DB\u5468<br><b>\u9F20\u6807\u6EDA\u8F6E</b>\uFF1A\u8C03\u6574\u8DDF\u968F\u8DDD\u79BB<br><b>\u7A7A\u683C</b>\uFF1A\u8DF3\u8DC3\u3000<b>C / L / R</b>\uFF1A\u5750\u4E0B / \u8EBA\u4E0B / \u8D77\u8EAB<br><b>B</b>\uFF1A\u9E1F\u77B0\u5168\u666F\uFF0C\u62D6\u52A8\u65CB\u8F6C\u3001\u6EDA\u8F6E\u7F29\u653E\u3001WASD \u5E73\u79FB<br><b>Shift</b>\uFF1A\u5954\u8DD1\u3000<b>V</b>\uFF1A\u5207\u6362\u89C6\u89D2<br><b>E</b>\uFF1A\u5728\u63D0\u793A\u51FA\u73B0\u65F6\u4E92\u52A8<br><b>Esc</b>\uFF1A\u5173\u95ED\u4E92\u52A8</p><p>\u4ECE\u5EAD\u9662\u8FDB\u5165\u540E\u65B9\u4E3B\u5B85\uFF0C\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u4EE5\u6B65\u884C\u4E0A\u4E8C\u697C\uFF0C\u4ECE\u4E8C\u697C\u5317\u4FA7\u8F6C\u5230\u76F8\u90BB\u697C\u68AF\u53EF\u4E0A\u5929\u53F0\u3002\u897F\u4FA7\u5EAD\u9662\u5E26\u8DEF\u724C\u7684\u697C\u68AF\u901A\u5411\u5730\u4E0B\u5BA4\uFF1B\u51FA\u5357\u95E8\u6CBF\u96C6\u5E02\u524D\u884C\u5230\u6CB3\u5CB8\uFF1B\u51FA\u95E8\u540E\u5411\u4E1C\u6CBF\u8FDE\u63A5\u6B65\u9053\u5230\u9A6C\u8DEF\uFF0C\u8FC7\u6591\u9A6C\u7EBF\u8FDB\u5165\u4E30\u5DE2\u516C\u53F8\u3002\u516C\u53F8\u4E1C\u4FA7\u7A84\u697C\u68AF\u53EF\u8D70\u904D\u4E94\u5C42\uFF0C\u9760\u8FD1\u7535\u68AF\u6309 E \u9009\u62E9\u697C\u5C42\uFF0C\u4E5F\u80FD\u76F4\u8FBE\u5929\u53F0\u773A\u671B\u5EAD\u9662\u3002\u5DE6\u53F3\u4E24\u7FFC\u7684\u5165\u53E3\u90FD\u671D\u5411\u5EAD\u9662\u524D\u65B9\u3002\u624B\u673A\u53EF\u4F7F\u7528\u5DE6\u4E0B\u89D2\u65B9\u5411\u952E\uFF0C\u62D6\u52A8\u573A\u666F\u8F6C\u52A8\u89C6\u89D2\u3002</p>"});function sg(){Et=(Et+1)%3,Ns(),_e("viewBtn").querySelector("span").textContent=["\u7B2C\u4E09\u4EBA\u79F0","\u7B2C\u4E00\u4EBA\u79F0","\u9E1F\u77B0\u5168\u666F"][Et],Ut(["\u7B2C\u4E09\u4EBA\u79F0 \xB7 \u62D6\u52A8\u9F20\u6807\u73AF\u987E","\u7B2C\u4E00\u4EBA\u79F0 \xB7 \u9002\u5408\u5BA4\u5185\u63A2\u7D22","\u9E1F\u77B0\u5168\u666F \xB7 \u62D6\u52A8\u65CB\u8F6C\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF0C\u65B9\u5411\u952E\u5E73\u79FB"][Et])}_e("viewBtn").onclick=sg;var rg=new Map;mt.traverse(i=>{i.isPointLight&&rg.set(i,i.intensity)});function Fh(){let i=dr.kind==="rain",e=dr.kind==="snow";qn.intensity=Fn?.32:i?.85:e?1.5:2.4,X0.intensity=Fn?.5:.8,mt.backgroundIntensity=Fn?.2:i?.38:.65,mt.environmentIntensity=Fn?.32:i?.42:.62,pt.toneMappingExposure=Fn?1.15:.98,lo.material.uniforms.top.value.set(Fn?"#203449":i?"#647781":e?"#b8cbd2":"#739dba"),lo.material.uniforms.bottom.value.set(Fn?"#627484":i?"#a0afb0":"#efd0a1"),mt.fog.color.set(Fn?5399926:i?10399410:e?13359324:11188130),mt.fog.density=e?.012:i?.009:.006,Lh.visible=!i&&!e,Lh.material.color.set(Fn?14871807:16770221),rg.forEach((t,n)=>n.intensity=t*(Fn?1.5:1)),_e("timeLabel").textContent=Fn?"\u5165\u591C \xB7 19:30":"\u508D\u665A \xB7 17:40",_e("weatherLabel").textContent=Df[dr.kind]+" / "+(Fn?"\u706F\u706B\u53EF\u4EB2":"\u5B9C\u5F52\u5BB6"),pt.shadowMap.needsUpdate=!0}_e("dayBtn").onclick=()=>{Fn=!Fn,Fh()};_e("weatherSelect").onchange=i=>{dr.set(i.target.value),Fh(),Ut("\u5DF2\u5207\u6362"+Df[i.target.value])};var _S=S0({dialog:_e("guideDialog"),host:_e("guideScene"),list:_e("guidePlaces"),tabs:_e("guideTabs"),onOpen:()=>{pr(),xn=!0,wt.clear(),un.reset(),po=!1,Ds=null},onClose:()=>{xn=!1,wt.clear(),un.reset(),zn.reset()},onTeleport:i=>{if(pr(),!zi(i.x,i.z,i.y,i.y)){Ut("\u8BE5\u843D\u70B9\u6682\u4E0D\u53EF\u901A\u884C\uFF0C\u8BF7\u9009\u62E9\u76F8\u90BB\u5730\u70B9");return}re.set(i.x,i.y,i.z),Bn="stand",Ot=null,sn.height=0,sn.velocity=0,Et=0,wt.clear(),un.reset(),Ke.g.position.copy(re),Ke.g.rotation.x=0,Jt.position.set(i.x*De,i.y+2.2,i.z*De+3),Wn=0,uo=.24,Ns(),pt.shadowMap.needsUpdate=!0,Ut("\u5DF2\u5230\u8FBE"+i.name)}});_e("schoolBtn").onclick=()=>{xn||Tt.phase!=="idle"||hn.lift.phase!=="idle"||!pr()||(xn=!0,wt.clear(),un.reset(),lo.visible=!1,ho.open(()=>{lo.visible=!0,xn=!1,wt.clear(),un.reset(),zn.reset()}))};Object.defineProperty(window,"mansionSchool",{get:()=>ho.stats()});var og=()=>{Tt.phase==="idle"&&hn.lift.phase==="idle"&&pr()&&_S.open()};_e("mapExpand").onclick=_e("guideBtn").onclick=og;_e("mapExpand").onkeydown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),og())};_e("homeBtn").onclick=()=>{Tt.phase!=="idle"||hn.lift.phase!=="idle"||pr()&&(re.set(0,0,19),Wn=.12,uo=.24,Et=0,Bn="stand",Ot=null,sn.height=0,sn.velocity=0,Ns(),_e("viewBtn").querySelector("span").textContent="\u7B2C\u4E09\u4EBA\u79F0",wt.clear(),un.reset(),Ut("\u5DF2\u56DE\u5230\u5EAD\u9662\u5165\u53E3"))};var yi,Ga,Rh=!1;_e("soundBtn").onclick=()=>{if(!yi){yi=new(window.AudioContext||window.webkitAudioContext),Ga=yi.createGain(),Ga.gain.value=0,Ga.connect(yi.destination);let i=yi.createBuffer(1,yi.sampleRate*4,yi.sampleRate),e=i.getChannelData(0),t=0;for(let r=0;r<e.length;r++)t=(t+(Math.random()*2-1)*.025)/1.02,e[r]=t;let n=yi.createBufferSource();n.buffer=i,n.loop=!0;let s=yi.createBiquadFilter();s.type="lowpass",s.frequency.value=800,n.connect(s),s.connect(Ga),n.start()}Rh=!Rh,yi.resume(),Ga.gain.setTargetAtTime(Rh?.7:0,yi.currentTime,.3),_e("soundBtn").querySelector("span").textContent=Rh?"\u58F0\u97F3\u5DF2\u5F00\u542F":"\u73AF\u5883\u58F0\u97F3"};addEventListener("keydown",i=>{ho.active||_e("modal").open||_e("guideDialog").open||_e("liftDialog").open||Tt.phase!=="idle"||hn.lift.phase!=="idle"||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&i.preventDefault(),wt.add(i.code),!i.repeat&&(i.code==="KeyE"&&ig(),i.code==="KeyV"&&sg(),i.code==="KeyB"&&(Et=Et===2?0:2,Ns()),i.code==="Space"&&Et!==2&&!On&&Tt.phase==="idle"&&hn.lift.phase==="idle"&&(Wi("stand"),Lf(sn)),i.code==="KeyC"&&Wi("sit"),i.code==="KeyL"&&Wi("lie"),i.code==="KeyR"&&Wi("stand")))});addEventListener("keyup",i=>wt.delete(i.code));addEventListener("blur",()=>{wt.clear(),un.reset(),po=!1,Ds=null});document.addEventListener("visibilitychange",()=>{wt.clear(),un.reset(),po=!1,Ds=null,zn.reset(),pt.shadowMap.needsUpdate=!0});pt.domElement.addEventListener("pointerdown",i=>{Ds===null&&(Ds=i.pointerId,po=!0,pd=i.clientX,Ih=i.clientY,pt.domElement.setPointerCapture(i.pointerId))});pt.domElement.addEventListener("pointermove",i=>{!po||Ds!==i.pointerId||(Wn-=(i.clientX-pd)*.005,Et===2?Xa=en.clamp(Xa+(i.clientY-Ih)*.004,.25,1.48):uo=en.clamp(uo+(i.clientY-Ih)*.004,-.35,.85),pd=i.clientX,Ih=i.clientY)});for(let i of["pointerup","pointercancel","lostpointercapture"])pt.domElement.addEventListener(i,e=>{Ds===e.pointerId&&(po=!1,Ds=null)});pt.domElement.addEventListener("wheel",i=>{i.preventDefault(),Et===2?Wa=en.clamp(Wa+i.deltaY*.035,22,110):Ya=en.clamp(Ya+i.deltaY*.005,2,9)},{passive:!1});pt.domElement.addEventListener("contextmenu",i=>i.preventDefault());function ag(){un.reset();let i=Pf(innerWidth,_d.matches);i.mobile!==Hi.mobile&&(Ya=i.distance),Hi=i,document.body.dataset.mobile=String(Hi.mobile),Jt.fov=Hi.fov,Jt.aspect=innerWidth/innerHeight,Jt.updateProjectionMatrix(),pt.setSize(innerWidth,innerHeight),Uh(oo[zn.level]),vd.resize(innerWidth,innerHeight)}addEventListener("resize",ag);_d.addEventListener("change",ag);var lg=Ps.map(i=>new pn(new F((i.x1-.1)*De,i.y,(i.z1-.1)*De),new F((i.x2+.1)*De,i.y+i.h,(i.z2+.1)*De)));for(let i of gn.slice(1))for(let e of ah())lg.push(new pn(new F(e.x1*De,i.y-.2,e.z1*De),new F(e.x2*De,i.y,e.z2*De)));var V0=new Pi,G0=new F,Ph=new F;function vS(i,e){Ph.subVectors(e,i);let t=Ph.length();if(t<.001)return e;V0.set(i,Ph.clone().normalize());let n=t;for(let s of lg)if(V0.intersectBox(s,G0)){let r=G0.distanceTo(i);r>.12&&(n=Math.min(n,Math.max(.08,r-.18)))}return i.clone().addScaledVector(Ph,n/t)}var yS=_e("map").getContext("2d");function MS(){let i=yS;i.clearRect(0,0,240,224),i.save(),i.translate(71,63);let e=1.85,t=(n,s,r,o,a)=>{i.fillStyle=a,i.fillRect((n-r/2)*e,(s-o/2)*e,r*e,o*e)};t(0,5,66,50,"#3e5548"),t(39,18,8,34,"#777970"),t(58,15,24,22,"#c7c3b5"),t(21.5,32,43,2,"#b5b09b"),i.font="11px sans-serif",i.fillStyle="#f4efd9",i.fillText("\u516C\u53F8 \xB7 \u4E94\u5C42",48*e,16*e),t(0,40,10,20,"#777970"),t(0,53,68,7,"#568b8d"),t(-16,-13.5,10,11,"#9c9d81"),t(0,-11,22,14,"#9c9d81"),t(-16,-.5,10,15,"#9c9d81"),t(16,-.5,10,15,"#9c9d81"),t(0,0,22,8,"#65705b"),t(20.5,11,7,16,"#568b8d"),i.fillStyle="#6a9a92",i.beginPath(),i.ellipse(-5*e,10*e,4.1*e,2.7*e,0,0,7),i.fill(),t(8,12,7,4,"#89785e"),t(13.5,19,5.2,3,"#79905a"),t(9.75,-10.25,1.5,8.5,"#c8b38a"),t(-23.5,-12,2,10,"#c8b38a"),i.font="11px sans-serif",i.textAlign="center",i.fillStyle="#263f33",i.fillText(re.y<0?"\u5730\u4E0B\u4E00\u5C42":re.y>6?"\u5C4B\u9876\u82B1\u56ED":"\u4E3B\u5B85 \xB7 \u4E8C\u5C42",0,-12*e),i.fillText("\u96C6\u5E02",0,40*e),i.fillText("\u6CB3\u5CB8",0,49*e),i.fillText("\u4E66\u623F",-16*e,0),i.fillText("\u5BA2\u9910\u5385",16*e,0),i.fillStyle="#e7e7d2",i.fillText("\u8336\u5E2D",8*e,12*e+4),i.fillText("\u9C7C\u5858",-5*e,10*e+4),i.fillText("\u82B1\u5703",13.5*e,19*e+4);for(let n of[Ka,Ls,mr,Ja])i.fillStyle="#dfb890",i.beginPath(),i.arc(n.g.position.x*e,n.g.position.z*e,2.6,0,7),i.fill();i.translate(re.x*e,re.z*e),i.rotate(-Wn),i.fillStyle="#f5edcf33",i.beginPath(),i.moveTo(0,0),i.lineTo(-8,-15),i.lineTo(8,-15),i.closePath(),i.fill(),i.fillStyle="#fff7da",i.beginPath(),i.arc(0,0,4,0,7),i.fill(),i.restore()}function SS(){if(re.x>34){let n=gn.find(s=>Math.abs(s.y-re.y)<.12);_e("place").textContent=io(re.x,re.z)?n?.name||"\u516C\u53F8\u697C\u68AF":"\u7814\u53D1\u4E2D\u5FC3 \xB7 \u5EAD\u9662\u5BF9\u9762",_e("description").textContent=re.y>17.9?"\u5411\u897F\u770B\uFF0C\u9A6C\u8DEF\u5BF9\u9762\u5C31\u662F\u81EA\u5BB6\u7684\u5EAD\u9662\u3002":"\u5165\u53E3\u671D\u5411\u5EAD\u9662\uFF1B\u4E1C\u4FA7\u7A84\u697C\u68AF\u3001\u4E1C\u5317\u4FA7\u7535\u68AF\u8FDE\u901A\u4E94\u5C42\u4E0E\u5929\u53F0\u3002",_e("floor").textContent=n?.name||"\u697C\u68AF\u901A\u884C\u4E2D";return}let i="\u5EAD\u9662",e="\u6811\u5F71\u3001\u6C34\u58F0\uFF0C\u8FD8\u6709\u5BB6\u4EBA\u7684\u966A\u4F34\u3002",t=re.y>3?"\u4E8C\u5C42":"\u4E00\u5C42";re.y<-.2?(t="\u5730\u4E0B\u4E00\u5C42",i=re.x<-22?"\u5730\u4E0B\u5BA4\u697C\u68AF":re.z<-13?re.x<-18?"\u50A8\u7269\u95F4":"\u7535\u7ADE\u623F":re.x<-18?"KTV":"\u5730\u4E0B\u5F71\u97F3\u5BA2\u5385",e="\u6CBF\u697C\u68AF\u4E0B\u5230\u5E95\u90E8\uFF0C\u518D\u4ECE\u4E1C\u4FA7\u8FDB\u5165\u5404\u4E2A\u623F\u95F4\u3002"):re.y>6.95?(t="\u5929\u53F0",i="\u5929\u53F0\u82B1\u56ED\u4E0E\u8336\u5E2D",e="\u5750\u4E0B\u559D\u8336\uFF0C\u79CD\u82B1\uFF0C\u4FEF\u77B0\u9662\u5916\u8857\u9053\u4E0E\u6CB3\u5CB8\u3002"):re.y>3.85?(i="\u5929\u53F0\u697C\u68AF",t="\u4E8C\u5C42 \u2192 \u5929\u53F0",e="\u7EE7\u7EED\u5411\u5357\u8D70\u5230\u5929\u53F0\u5E73\u53F0\u3002"):re.y>3?(i=re.x>11?"\u513F\u7AE5\u6E38\u4E50\u9633\u53F0":re.x<-11?"\u4E3B\u5367\u5C4B\u9876\u9633\u53F0":re.z>-8?"\u4E8C\u5C42\u8D70\u5ECA":re.x<-3?"\u4E3B\u5367":re.x<3?"\u5B9D\u53EF\u68A6\u513F\u7AE5\u623F":"\u72EC\u7ACB\u536B\u6D74",e=re.x>11?"\u5BA2\u9910\u5385\u5C4B\u9876\u7684\u513F\u7AE5\u5929\u5730\uFF1A\u6ED1\u68AF\u3001\u6C99\u6C60\u548C\u73A9\u5177\u3002":re.x<-11?"\u4E66\u623F\u5C4B\u9876\u7684\u9732\u53F0\uFF0C\u8336\u684C\u3001\u7EFF\u690D\u4E0E\u4F11\u95F2\u6C99\u53D1\u3002":"\u72EC\u7ACB\u623F\u95E8\u3001\u6696\u5149\u7167\u660E\u4E0E\u5145\u8DB3\u7684\u751F\u6D3B\u6536\u7EB3\u3002"):re.y>.2?(i="\u697C\u68AF",e="\u62FE\u7EA7\u800C\u4E0A\uFF0C\u53BB\u4E8C\u697C\u770B\u770B\u3002"):re.z<-4&&Math.abs(re.x)<11?(i=re.x<-3?"\u5F00\u653E\u5F0F\u53A8\u623F":"\u4E3B\u5B85\u8D77\u5C45\u5385",e="\u6CBF\u4E1C\u4FA7\u901A\u9053\u5411\u5317\u5230\u697C\u68AF\u8D77\u70B9\uFF0C\u4E0A\u697C\u540E\u4ECE\u516C\u5171\u5E73\u53F0\u524D\u5F80\u5404\u623F\u95F4\u3002"):re.x>-21&&re.x<-13&&re.z>16&&re.z<24?(i="\u8F66\u5E93",e="\u8D8A\u91CE\u8F66\u505C\u5728\u8FD9\u91CC\uFF0C\u8F66\u9053\u901A\u5411\u5EAD\u9662\u5357\u95E8\u3002"):re.z>46?(i="\u6CB3\u7554\u6B65\u9053",e="\u6CBF\u6CB3\u6563\u6B65\uFF0C\u8EAB\u540E\u662F\u70ED\u95F9\u7684\u5C0F\u96C6\u5E02\u3002"):re.z>30?(i="\u4E61\u95F4\u96C6\u5E02",e="\u8857\u9053\u4E24\u8FB9\u6709\u9C9C\u679C\u3001\u70B9\u5FC3\u4E0E\u82B1\u8349\u644A\u4F4D\u3002"):re.x<-11&&re.z<-8?(i="\u897F\u7FFC\u4F1A\u5BA2\u5385",e="\u65B0\u589E\u7684\u5927\u7A7A\u95F4\uFF0C\u4F1A\u5BA2\u3001\u9605\u8BFB\u4E0E\u89C2\u5F71\u3002"):re.x<-11&&re.z<7?(i="\u6696\u6728\u4E66\u623F",e="\u4E66\u5899\u3001\u76AE\u6905\u548C\u4E00\u76CF\u4E0D\u6025\u7740\u7184\u706D\u7684\u706F\u3002"):re.x>11&&re.z<7?(i="\u5BA2\u9910\u5385",e="\u76F8\u805A\u7684\u65E5\u5E38\uFF0C\u4ECE\u4E00\u987F\u665A\u9910\u5F00\u59CB\u3002"):re.z>16&&(i="\u5EAD\u9662\u5165\u53E3",e="\u6CBF\u7740\u77F3\u5F84\uFF0C\u53BB\u770B\u770B\u5BB6\u4EBA\u7684\u65E5\u5E38\u3002"),_e("place").textContent=i,_e("description").textContent=e,_e("floor").textContent=t+" \xB7 "+i}function pr(){if(!On)return!0;let i=Hm(re,Ke.g.rotation.y,zi);return i?(Si.root.position.copy(re),On=!1,re.set(i.x,i.y,i.z),Ke.g.position.copy(re),Ke.g.rotation.x=0,Ke.animate(qa,!1),Bn="stand",Ot=null,wt.clear(),un.reset(),_e("bikeBtn").textContent="\u9A91\u81EA\u884C\u8F66",Ut("\u5DF2\u4E0B\u8F66\uFF0C\u81EA\u884C\u8F66\u505C\u5728\u8EAB\u65C1"),!0):(Ut("\u4E24\u4FA7\u6682\u65F6\u6CA1\u6709\u7A7A\u4F4D\uFF0C\u8BF7\u7A0D\u5FAE\u632A\u52A8\u8F66\u8F86\u518D\u4E0B\u8F66"),!1)}function gd(){if(!(xn||Tt.phase!=="idle"||hn.lift.phase!=="idle")){if(On){pr();return}if(Math.abs(re.y-Si.root.position.y)>.2||re.distanceTo(Si.root.position)>2.2){Ut("\u5148\u8D70\u5230\u5EAD\u9662\u81EA\u884C\u8F66\u65C1\uFF08\u5165\u53E3\u53F3\u4FA7\uFF09");return}Wi("stand"),sn.height=sn.velocity=0,On=!0,Et=0,Ns(),_e("bikeBtn").textContent="\u4E0B\u81EA\u884C\u8F66",Ut("\u5DF2\u4E0A\u8F66 \xB7 \u4F7F\u7528\u65B9\u5411\u952E\u6216\u6447\u6746\u9A91\u884C\uFF0C\u697C\u68AF\u524D\u8BF7\u4E0B\u8F66")}}_e("bikeBtn").onclick=gd;_e("familySelect").onchange=i=>{let e=Number(i.target.value);if(xn||Tt.phase!=="idle"||hn.lift.phase!=="idle"){i.target.value=String(Xn.index);return}if(!pr()){i.target.value=String(Xn.index);return}let t=Xn.members[e].actor.g.position.clone();if(t.y=Math.round(t.y/3.6)*3.6,!zi(t.x,t.z,t.y)){let n=!1;for(let s=.3;s<3&&!n;s+=.3)for(let r=0;r<16;r++){let o=t.x+Math.sin(r*Math.PI/8)*s,a=t.z+Math.cos(r*Math.PI/8)*s;if(zi(o,a,t.y)){t.set(o,t.y,a),n=!0;break}}if(!n){i.target.value=String(Xn.index),Ut("\u8BE5\u89D2\u8272\u8EAB\u8FB9\u6682\u65F6\u6CA1\u6709\u53EF\u7AD9\u7ACB\u4F4D\u7F6E");return}}Xn.members[e].position={x:t.x,y:t.y,z:t.z},Ke.g.visible=!0,Ke.g.position.copy(re),Ke.g.rotation.x=0,Xn.switchTo(e,{x:re.x,y:re.y,z:re.z}),Ke=Xn.members[e].actor,re.copy(t),Ke.g.position.copy(re),Bn="stand",Ot=null,sn.height=sn.velocity=0,wt.clear(),un.reset(),Et=0,Ns(),Jt.position.set(re.x*De,re.y+2.2,re.z*De+Ya),_e("actorName").textContent=Xn.members[e].name,Ut("\u6B63\u5728\u63A7\u5236"+Xn.members[e].name)};function cg(){return Cs.some(i=>Math.abs(i.y-re.y)<.1)&&Math.hypot(re.x-it.exitX,re.z-it.z)<1.5}function Oh(i){for(let e of["familySelect","bikeBtn","guideBtn","homeBtn","jumpBtn","sitBtn","lieBtn","birdBtn","viewBtn","liftBtn"])_e(e).disabled=i}function hg(){if(hn.near(re)){ug();return}if(!(xn||Tt.phase!=="idle"||hn.lift.phase!=="idle")){if(On){Ut("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}if(!cg()){Ut("\u7535\u68AF\u4F4D\u4E8E\u897F\u7FFC\uFF0C\u53EF\u4ECE\u5BFC\u89C8\u5730\u56FE\u524D\u5F80\u7535\u68AF\u5385");return}wt.clear(),un.reset(),xn=!0,_e("liftFloors").replaceChildren();for(let i of Cs){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-re.y)<.1,e.onclick=()=>{if(!zi(it.exitX,it.z,i.y)){Ut("\u76EE\u6807\u51FA\u53E3\u6682\u88AB\u6321\u4F4F");return}let t=Cs.find(n=>Math.abs(n.y-re.y)<.1).y;Tt.request(t,i.y)&&(Q0.copy(re),_e("liftDialog").close(),Bn="stand",Ot=null,sn.height=sn.velocity=0,Oh(!0),Ut("\u7535\u68AF\u6B63\u5728\u547C\u68AF\u5E76\u524D\u5F80"+i.name))},_e("liftFloors").append(e)}_e("liftDialog").showModal()}}function ug(){if(!(xn||hn.lift.phase!=="idle"||!hn.near(re))){if(On){Ut("\u8BF7\u5148\u4E0B\u81EA\u884C\u8F66\u518D\u4E58\u7535\u68AF");return}wt.clear(),un.reset(),xn=!0,_e("liftFloors").replaceChildren();for(let i of gn){let e=document.createElement("button");e.textContent=i.name,e.disabled=Math.abs(i.y-re.y)<.1,e.onclick=()=>{let t=gn.find(n=>Math.abs(n.y-re.y)<.1);!t||!zi(tn.exitX,tn.exitZ,i.y)||hn.lift.request(t.y,i.y)&&(Y0.copy(re),_e("liftDialog").close(),Bn="stand",Ot=null,sn.height=sn.velocity=0,Oh(!0),Ut("\u516C\u53F8\u7535\u68AF\u6B63\u5728\u524D\u5F80"+i.name))},_e("liftFloors").append(e)}_e("liftDialog").showModal()}}function bS(i,e){let t=hn.lift,n=hn.update(i,e,re);t.passenger&&(t.phase==="board"?re.lerpVectors(Y0,new F(tn.x,t.y,tn.z),t.boarding):t.phase==="exit"?re.set(tn.x,t.y,en.lerp(tn.z,tn.exitZ,t.exiting)):re.set(tn.x,t.y,tn.z),Ke.g.position.copy(re),Ke.animate(e,t.phase==="board"||t.phase==="exit")),n==="arrived"&&(re.set(tn.exitX,t.target,tn.exitZ),Ke.g.position.copy(re),xn=!1,Oh(!1),Ut("\u5DF2\u5230\u8FBE"+gn.find(s=>s.y===t.target).name))}_e("liftBtn").onclick=hg;function fg(){Tt.phase!=="idle"||hn.lift.phase!=="idle"||(_e("liftDialog").close(),xn=!1,wt.clear(),un.reset())}_e("liftClose").onclick=fg;_e("liftDialog").addEventListener("cancel",fg);var dg=0,H0=!0,W0=new Ms,TS=new Ge,xd=performance.now(),fd=0;Jt.position.set(0,2.7,19*De+5);Jt.lookAt(0,1.45,19*De);function pg(i){requestAnimationFrame(pg);let e=(i-xd)/1e3;if(xd=i,document.hidden||_e("guideDialog").open)return;let t=zn.sample(e);t&&Uh(t);let n=Math.min(e,.075);qa+=n,fd++;let s=qa;if(ho.active){ho.update(Jt,s),pt.info.reset(),pt.render(mt,Jt),i-Ch>1e3&&(_e("frameRate").textContent=Math.round(zn.fps)+" \u5E27/\u79D2",Ch=i);return}bS(n,s);let r=Tt.update(n);if(j0.update(Tt),Tt.passenger&&(Tt.phase==="board"?re.lerpVectors(Q0,new F(it.x,Tt.y,it.z),Tt.boarding):Tt.phase==="exit"?re.set(en.lerp(it.x,it.exitX,Tt.exiting),Tt.y,it.z):re.set(it.x,Tt.y,it.z),Ke.g.position.copy(re),Ke.animate(s,Tt.phase==="board"||Tt.phase==="exit")),r==="arrived"&&(re.set(it.exitX,Tt.target,it.z),Ke.g.position.copy(re),xn=!1,Oh(!1),Ut("\u5DF2\u5230\u8FBE"+Cs.find(l=>l.y===Tt.target).name)),!xn){let l=un.state.forward+(wt.has("KeyW")||wt.has("ArrowUp")?1:0)-(wt.has("KeyS")||wt.has("ArrowDown")?1:0),h=un.state.right+(wt.has("KeyD")||wt.has("ArrowRight")?1:0)-(wt.has("KeyA")||wt.has("ArrowLeft")?1:0),u=Math.max(1,Math.hypot(l,h)),d=On?7.5/De:(wt.has("ShiftLeft")||wt.has("ShiftRight")?8:4.8)/De,f=(h*Math.cos(Wn)-l*Math.sin(Wn))/u*d*n,g=(-l*Math.cos(Wn)-h*Math.sin(Wn))/u*d*n;if(Et===2)Va.x=en.clamp(Va.x+f*2,-34,73),Va.z=en.clamp(Va.z+g*2,-22,52);else if(Bn==="stand"){let x=re.clone();if(On?x0(re,f,g):m0(re,f,g),(sn.height>0||sn.velocity>0)&&g0(sn,n),Ke.g.position.copy(re),Ke.g.position.y+=sn.height,Ke.g.rotation.x=0,l||h){let m=Math.atan2(f,g);Ke.g.rotation.y+=Math.atan2(Math.sin(m-Ke.g.rotation.y),Math.cos(m-Ke.g.rotation.y))*Math.min(1,n*12)}Ke.animate(s,!!(l||h)),On&&(Si.root.position.copy(re),Si.root.rotation.y=Ke.g.rotation.y,Si.wheels.forEach(m=>m.rotation.x+=Math.hypot(re.x-x.x,re.z-x.z)*De/.33),Ke.g.position.y+=.1,Ke.legs.forEach((m,p)=>{m.rotation.x=-1.1+Math.sin(s*8+p*Math.PI)*(l||h?.25:0),m.lower.rotation.x=1.4}),Ke.arms.forEach(m=>m.rotation.x=-1.1))}Bn!=="stand"&&Ot&&(Ke.g.position.set(Ot.x,Ot.y+(Bn==="lie"?Ot.ground?.22:Ot.outdoor?.7:.99:Ot.ground?-.72:-.25),Ot.z),Ke.g.rotation.y=Ot.rotation,Bn==="sit"?(Ke.g.rotation.x=0,Ke.animate(s,!1,"sit"),Ke.arms.forEach(x=>x.rotation.x=-.65)):(Ke.g.position.x+=Math.sin(Ot.rotation)*.7,Ke.g.position.z+=Math.cos(Ot.rotation)*.7,Ke.g.rotation.set(-Math.PI/2,0,Ot.rotation),Ke.animate(s,!1)))}let o=(Ot?new F(Ot.x,Ot.y,Ot.z):re.clone()).add(new F(0,Bn==="lie"?.8:1.45*Ke.g.scale.y+sn.height,0));o.x*=De,o.z*=De;let a;if(Et===2){let l=Va.clone();l.x*=De,l.z*=De,a=l.clone().add(new F(Math.sin(Wn)*Math.cos(Xa)*Wa,Math.sin(Xa)*Wa,Math.cos(Wn)*Math.cos(Xa)*Wa)),Jt.position.lerp(a,1-Math.exp(-n*7)),Jt.lookAt(l),Ke.g.visible=!0}else{let l=Et===1?.12:Ya;a=o.clone().add(new F(Math.sin(Wn)*l,Et===1?.12:Math.sin(uo)*l,Math.cos(Wn)*l));let h=vS(o,a);Jt.position.lerp(h,1-Math.exp(-n*12)),Et===1?(Jt.position.copy(a),Jt.lookAt(o.clone().add(new F(-Math.sin(Wn)*6,-uo*5,-Math.cos(Wn)*6)))):Jt.lookAt(o),Ke.g.visible=Et!==1&&Jt.position.distanceTo(o)>1}cS.update(n,dr.kind==="snow"),dr.update(n,s,Jt);for(let l of $t.root.userData.swings)l.pivot.rotation.x=Math.sin(s*1.6)*(Ot?.swingId===l.id?.18:.035),l.pivot.updateMatrixWorld(!0),Ot?.swingId===l.id&&(l.position.set(0,-2.8,0).applyMatrix4(l.pivot.matrixWorld),l.position.x/=De,l.position.z/=De,Ke.g.position.copy(l.position).add(new F(0,-.05,0)),Ke.g.rotation.x=l.pivot.rotation.x);co&&co.update(i,n,Jt);let c=Cf.filter(l=>Math.abs(l[2]-re.y)<.4).map(l=>({r:l,d:Math.hypot(l[0]-re.x,l[1]-re.z)})).sort((l,h)=>l.d-h.d);uS.forEach((l,h)=>{let u=c[h];l.visible=!!u&&u.d<12,u&&(l.position.set(u.r[0],u.r[2]+2.7,u.r[1]),l.intensity=65*Math.max(0,1-u.d/14))}),Md.visible=re.y<-.3,K0.forEach((l,h)=>l.animate(s+h,!1,"cook"));for(let l=0;l<Xn.members.length;l++){let h=Xn.members[l].actor;if(h!==Ke){if(h.g.visible=!0,Xn.visited.has(l)){h.animate(s,!1);continue}l===1&&h.animate(s,!1,"cook"),l===2&&(h.g.position.set(-.5+Math.sin(s*.45)*2.6,0,16+Math.cos(s*.45)*1.1),h.g.rotation.y=Math.atan2(Math.cos(s*.45)*2.6,-Math.sin(s*.45)*1.1),h.animate(s,!0)),l===3&&(h.animate(s,!1,"read"),h.legs.forEach(u=>{u.rotation.x=-1.3,u.lower.rotation.x=1.3})),l===4&&h.animate(s,!1,"garden")}}if(Nh.visible=Ke!==mr&&!Xn.visited.has(3),Xn.visited.has(2)||$0.position.set(Ls.g.position.x+.7,Ls.g.position.y+.23,Ls.g.position.z),Dh.forEach((l,h)=>{if(s<tg&&re.y<.1&&re.z>7){let u=s+h*3;l.g.position.set(re.x+Math.sin(u)*1.1,0,re.z+Math.cos(u)*1.1),l.g.rotation.y=u+Math.PI/2}else{let u=s*.3+h*2.4;l.g.position.set(3+Math.sin(u)*2,0,8+Math.cos(u)*3.5),l.g.rotation.y=Math.atan2(Math.cos(u)*2,-Math.sin(u)*3.5)}l.animate(s+h)}),J0.forEach((l,h)=>{let u=s*(.24+h*.01)+h*.8,d=s<eg,f=-5+Math.cos(u)*(d?1:2.8),g=(d?11.6:10)+Math.sin(u)*(d?.35:1.65);l.position.set(f,.135+Math.sin(u*3)*.012,g),l.rotation.y=Math.atan2(-Math.sin(u)*(d?1:2.8),Math.cos(u)*(d?.35:1.65))}),Ha[0].position.set(-3.1,.25,10.7),Ha[0].rotation.y=.5+Math.sin(s*.15)*.15,Ha[1].position.set(-6.3+Math.sin(s*.07)*.6,.13,9.1+Math.cos(s*.07)*.7),Ha[1].rotation.y=s*.07,Z0.forEach((l,h)=>{l.scale.y=.65+Math.sin(s*7+h)*.24+Math.sin(s*13+h)*.17}),yd.intensity=(Fn?9:6)+Math.sin(s*9)*.8,fd%6===0){nn=null;let l=2.15;for(let h of pS){let u=Math.hypot(h.x-re.x,h.z-re.z);u<l&&Math.abs(re.y-h.y)<.5&&(l=u,nn=h)}for(let h of Dh)re.y<.1&&h.g.position.distanceTo(re)<1.6&&!nn&&(nn={id:"dog",title:"\u6478\u6478\u8C46\u8C46\u548C\u56E2\u56E2",hint:"\u5C0F\u72D7 \xB7 \u60F3\u548C\u4F60\u4E00\u8D77\u6563\u6B65"});!nn&&!On&&Math.abs(re.y-Si.root.position.y)<.2&&Math.hypot(re.x-Si.root.position.x,re.z-Si.root.position.z)<2&&(nn={id:"bicycle",title:"\u9A91\u81EA\u884C\u8F66",hint:"\u5EAD\u9662\u81EA\u884C\u8F66"}),!nn&&hn.near(re)&&(nn={id:"officeElevator",title:"\u4E58\u5750\u516C\u53F8\u7535\u68AF",hint:"\u4E00\u81F3\u4E94\u697C \xB7 \u5C4B\u9876\u5929\u53F0"}),!nn&&cg()&&(nn={id:"elevator",title:"\u9009\u62E9\u7535\u68AF\u697C\u5C42",hint:"\u5730\u4E0B\u5BA4 \xB7 \u4E00\u697C \xB7 \u4E8C\u697C \xB7 \u5929\u53F0"}),On&&(nn={id:"bicycle",title:"\u4E0B\u81EA\u884C\u8F66",hint:"\u6309 E \u6216\u70B9\u51FB\u4E0B\u8F66"}),_e("prompt").classList.toggle("hidden",!nn||xn||Et===2),nn&&(_e("actionName").textContent=nn.title,_e("actionHint").textContent=nn.hint),MS(),SS()}i-md>=Mi.shadowInterval&&(pt.shadowMap.needsUpdate=!0,md=i);for(let l of $t.merged.children)l.userData.zone==="basement"&&(l.visible=re.y<-.15||re.x<-21&&re.z<-6&&re.z>-20);if(pt.info.reset(),vd.render(),H0&&(H0=!1,dg=performance.now(),_e("loading").style.opacity="0",setTimeout(()=>_e("loading").remove(),300)),fd%20===0&&!document.hidden){W0.setFromProjectionMatrix(TS.multiplyMatrices(Jt.projectionMatrix,Jt.matrixWorldInverse));let l=new Set;for(let h of[...$t.merged.children,...$t.roofs.visible?$t.roofs.children:[]])h.visible&&W0.intersectsObject(h)&&l.add(h.material);Za.update({x:re.x,z:re.z,y:re.y,bird:Et===2,materials:l})}i-Ch>1e3&&(_e("qualityBtn").title="\u70B9\u51FB\u5207\u6362\uFF1A\u81EA\u52A8 / \u6D41\u7545 / \u5747\u8861 / \u7CBE\u7EC6\uFF1B\u5F53\u524D "+Math.round(zn.fps)+" \u5E27/\u79D2",_e("frameRate").textContent=Math.round(zn.fps)+" \u5E27/\u79D2",Ch=i)}Ns();for(let i of[...mt.children])fo.add(i);fo.scale.set(De,1,De);mt.add(fo);for(let i of[Ke,Ka,Ls,mr,Ja,...K0,...Dh])i.g.scale.x/=De,i.g.scale.z/=De;co=B0(mt,$t,pt,lo,{parent:fo,queue:Za,onLoaded:()=>{dr.attachWind(),Fh(),pt.shadowMap.needsUpdate=!0}});co.setQuality(Mi);Fh();xd=performance.now();zn.reset();requestAnimationFrame(pg);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
